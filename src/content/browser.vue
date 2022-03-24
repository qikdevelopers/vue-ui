<template>
    <flex-column class="content-browser" v-if="definition">
        <spinner large v-if="loading" />
        <template v-if="dataSource">
            <flex-column class="body" :class="{loading}">
                <flex-row>
                    <flex-cell flex>
                        <native-table :total="totalItems" :selectAll="selectAll" :deselectAll="deselectAllFunction" :actions="false" :selection="manager.items" @click:row="rowClicked" @select:row:toggle="rowToggled" @select:multiple="selectMultiple" @deselect:multiple="deselectMultiple" :rows="items" :columns="columns" />
                    </flex-cell>
                    <flex-column class="filter-column" style="max-width: 600px;" v-if="showFilters">
<flex-body>
                        <search v-model="search" :loading="searching" :debounce="500" placeholder="Keyword Search" />


<p></p>

                        

                        <filter-builder :definition="definition" v-model="filter" />
                    </flex-body>
                    </flex-column>
                </flex-row>
            </flex-column>
            <flex-footer>
                <div class="footer">
                    <flex-row center gap >
                        <flex-cell shrink class="text">
                            <native-select v-model="perPage" :field="perPageField">
                                Showing {{displayStartIndex}} to {{endIndex}} of {{totalItems}} total
                            </native-select>
                        </flex-cell>
                        <flex-cell>
                        </flex-cell>
                        <flex-cell shrink v-if="totalPages > 1">
                            <flex-row gap center>
                                <flex-cell shrink class="text">
                                    <native-select v-model="currentPage" :field="pageField">
                                        Page {{currentPage}} of {{totalPages}}
                                    </native-select>
                                </flex-cell>
                                <flex-cell shrink>
                                    <ux-button icon @click="previousPage()">
                                        <ux-icon icon="fa-arrow-left" />
                                    </ux-button>
                                </flex-cell>
                                <flex-cell shrink>
                                    <ux-button icon @click="nextPage()">
                                        <ux-icon icon="fa-arrow-right" />
                                    </ux-button>
                                </flex-cell>
                            </flex-row>
                        </flex-cell>
                    </flex-row>
                </div>
            </flex-footer>
        </template>
    </flex-column>
</template>
<script>
import NativeSelect from '../form/inputs/select.vue';
import NativeTable from '../table/Table.vue';

import FilterBuilder from '../filter/FilterBuilder.vue';
import Selection from '../services/selection.js';
import Search from '../form/inputs/search.vue';


// import FilterRule from '../filter/FilterRule.vue';

let cancelInflight;


export default {
    props: {
        type: {
            type: String,
            required: true,
        },
        showFilters:{
            type:Boolean,
        },
        search: {
            type: String,
        },
        options: {
            type: Object,
            default () {
                return {}
            }
        },
        cacheKey: {
            type: String,
        },
        modelValue: {
            type: Array,
            default () {
                return [];
            }
        },
        maximum: {
            type: Number,
            default () {
                return 0;
            }
        },
        selectionManager: {
            type: Object,
        }
    },
    components: {
        NativeSelect,
        NativeTable,
        FilterBuilder,
        Search,
        // FilterRule,
    },
    async created() {

        var self = this;

        //Get the type details
        await Promise.all([
            new Promise(async function(resolve, reject) {
                var glossary = await self.$qik.content.glossary({ hash: true });
                var definition = glossary[self.type]
                self.definition = definition;


                if (!definition) {
                    return reject();
                }
                resolve();
            }),
            new Promise(async function(resolve, reject) {

                var dataSource = await self.load();
                self.dataSource = dataSource;
                resolve();
            }),
        ]);
    },
    watch: {
        async change() {
            this.dataSource = await this.load();
        },
        loading() {
            this.$emit('loading', this.loading)
        },
        totalPages() {
            this.currentPage = 0;
        },
        selectedItems(items) {
            this.$emit('update:modelValue', items);
        },
    },
    computed: {
        deselectAllFunction() {
            return this.manager.items.length ? this.deselectAll : null;
        },

        selectedItems() {
            return this.manager.items.slice();
        },
        activeFilters() {
            var activeFilters = this.$qik.filter.activeFilters(this.filter);
            return activeFilters;
        },
        searching() {
            return this.loading && this.search.length;
        },
        title() {
            return this.definition.title;
        },
        plural() {
            return this.definition.plural;
        },
        perPage: {
            get() {
                return this.page.size;
            },
            set(i) {
                i = Math.max(i, 1);
                this.page.size = i;
            }

        },
        selectFields() {
            return this.columns.map(function(column) {
                if (column.fields) {
                    return [column.key, ...column.fields];
                }
                return column.key;

            }).flat()
        },
        columns() {

            let columns = [];

            columns.push({
                title: '',
                key: '_id',
                renderer: 'thumbnail',
                shrink: true,
                fields: ['width', 'height', 'fileMeta.colors.colors[0]'],
            })

            columns.push({
                title: 'Title',
                key: 'title',
            })


            var activeFilters = this.activeFilters;
            activeFilters.forEach(function(filter) {
                columns.push({
                    title: filter.key,
                    key: filter.key,
                })
            })

            return columns;
        },
        pageField() {
            return {
                type: 'integer',
                maximum: 1,
                minimum: 1,
                options: Array(this.totalPages).fill(1).map((x, y) => x + y),
            }
        },
        filterChangeString() {
            var string = this.$qik.filter.filterChangeString(this.filter);
            return string;
        },
        change() {
            return `${JSON.stringify([this.page, this.sort, this.search, this.selectFields, this.type, this.filterChangeString])}-${this.cacheKey}`;
        },
        startIndex() {
            return (this.currentPage - 1) * this.page.size;
        },
        displayStartIndex() {
            return this.totalItems ? this.startIndex + 1 : 0;
        },
        endIndex() {
            return Math.min(this.startIndex + this.page.size, this.totalItems);
        },
        items() {
            return this.dataSource.items;
        },
        currentPage: {
            get() {
                return this.page.index;
            },
            set(index) {


                if (this.totalPages) {
                    index = Math.min(this.totalPages, index);
                }

                index = Math.max(index, 1);

                return this.page.index = index;
            }
        },
        totalItems() {
            return this.dataSource.total;
        },
        totalPages() {
            return this.dataSource ? this.dataSource.page.total : 1;

        },
        basicType() {
            return this.definition.definesType || this.definition.key;
        },
        loadCriteria() {

            var self = this;
            var sort = self.sort;
            var search = self.search;
            var select = self.selectFields;
            var page = self.page;
            var filter = self.filter;

            return {
                sort,
                search,
                select,
                page,
                filter,
            }
        },
    },
    methods: {
        ensureMeta(row) {
            if (!row.meta) {
                row.meta = {}
            }

            row.meta.type = this.basicType;
            row.meta.definition = this.definition.key;
            return row;
        },
        deselectAll() {
            this.manager.deselectAll();
        },
        async selectAll() {

            //Load all items
            var self = this;

            //Load all the item ids and 
            self.dataSource = await self.load(true);

            //Create rows for all of them
            var allItems = this.dataSource.all.map(function(_id) {
                var row = self.ensureMeta({ _id });
                return row;
            });

            //Set the selection to all items
            console.log('Set Selection ALL', allItems)
            self.manager.setSelection(allItems);
        },
        selectMultiple(rows) {
            rows = rows.map(this.ensureMeta);
            this.manager.selectMultiple(rows);
        },
        deselectMultiple(rows) {
            rows = rows.map(this.ensureMeta);
            this.manager.deselectMultiple(rows);
        },
        rowToggled(row) {
            this.toggle(row);
        },
        rowClicked(row) {
            this.$emit('click:row', row);
        },
        select(row) {
            this.ensureMeta(row);
            this.manager.select(row);
        },
        deselect(row) {
            this.manager.deselect(row);
        },
        isSelected(row) {
            return this.manager.isSelected(row);
        },
        toggle(row) {
            this.ensureMeta(row);
            this.manager.toggle(row);
        },
        previousPage() {
            this.currentPage--;
        },
        nextPage() {
            this.currentPage++;
        },
        async load(includeAll) {
            var self = this;
            self.loading = true;
            if (cancelInflight) {
                cancelInflight();
                cancelInflight = null;
            }

            var loadCriteria = Object.assign({}, self.loadCriteria);
            loadCriteria.includeAll = true;


            const { promise, cancel } = await self.$qik.content.list(self.type, loadCriteria, { cancellable: true })

            cancelInflight = cancel;

            promise.then(function(res) {
                self.loading = false;
            })
            promise.catch(function(err) {
                // self.loading = false;
            });


            const { data } = await promise;


            data.items.forEach(self.ensureMeta);
            // function(item) {
            //     if (!item.meta) {
            //         item.meta = {}
            //     }
            //     item.meta.type = self.definition.definesType || self.definition.key;
            //     item.meta.definition = self.definition.definesType ? self.definition.key : null;
            // })

            return data;




        },
    },
    data() {

        var manager = this.selectionManager;
        if (!manager) {
            manager = new Selection({ minimum: this.minimum, maximum: this.maximum });
        }

        //Set the initial selection
        if (this.modelValue) {
            manager.setSelection(this.modelValue);
        }

        ////////////////////////////////////

        return {
            definition: null,
            manager,
            loading: true,
            // sort: {
            //     key: 'meta.updated',
            //     direction: 'dsc',
            //     type: 'date',
            // },
            sort: {
                key: 'title',
                direction: 'asc',
                type: 'string',
            },

            page: {
                size: 50,
                index: 1,
            },
            filter: {
                operator: 'and',
                filters: [],
            },
            dataSource: null,
            perPageField: {
                minimum: 1,
                maximum: 1,
                options: [{
                        title: '50 per page',
                        value: 50,
                    },
                    {
                        title: '100 per page',
                        value: 100,
                    },
                    {
                        title: '250 per page',
                        value: 250,
                    },
                    {
                        title: '500 per page',
                        value: 500,
                    },
                ]
            }
        }
    },
}
</script>
<style lang="scss" scoped>
.content-browser {
    background: #fff;
    position: relative;
}

.body {
    &.loading {
        opacity: 0.5;
    }
}

.filter-column {
    padding:1em;
    background: rgba(#000, 0.1);
}


.footer {
    padding: 1em;
    border-top: 1px solid rgba(#000, 0.1);

    .text {
        opacity: 0.5;
        font-size: 0.8em;
    }
}
</style>