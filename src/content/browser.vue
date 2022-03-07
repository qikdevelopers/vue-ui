<template>
    <flex-column class="content-browser" v-if="definition">
        <!-- <pre>{{definition}}</pre> -->
        <spinner large v-if="loading" />
        <template v-if="dataSource">
            <flex-column class="body" :class="{loading}">
                <flex-row>
                    <flex-cell flex>
                       
                        <native-table :actions="false" :selection="selection" @click:row="rowClicked" @click:select="rowSelected" :rows="items" :columns="columns">
                        </native-table>
                    
                    </flex-cell>
                    <flex-column style="max-width: 600px;">
                        <flex-header>
                            Filters
                        </flex-header>
                        <filter-builder :definition="definition" v-model="filter" />
                    </flex-column>
                </flex-row>
            </flex-column>
            <flex-footer>
                <div class="footer">
                    <flex-row center>
                        <flex-cell shrink class="text">
                            <native-select v-model="perPage" :field="perPageField">
                                Showing {{displayStartIndex}} to {{endIndex}} of {{totalItems}} total
                            </native-select>
                        </flex-cell>
                        <flex-cell>
                        </flex-cell>
                        <flex-cell shrink>
                            <flex-row center>
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
// import FilterRule from '../filter/FilterRule.vue';

let cancelInflight;


export default {
    props: {
        type: {
            type: String,
            required: true,
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
        cacheKey:{
            type:String,
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
        }
    },
    components: {
        NativeSelect,
        NativeTable,
        FilterBuilder,
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
                self.dataSource = await self.load();
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
    },
    computed: {
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
                return column.key;
            })
        },
        columns() {

            let columns = [];

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
        selectionHash() {
            var self = this;
            return this.selection.reduce(function(set, item) {
                if (!item) {
                    return set;
                }

                var id = self.$qik.utils.id(item);
                set[id] = true;
                return set;
            }, {});

        }
    },
    methods: {
        rowSelected(row) {
            this.toggle(row);
        },
        rowClicked(row) {
            this.$emit('click:row', row);
        },
        select(row) {
            if (this.maximum) {
                if (this.selection.length >= this.maximum) {
                    //We're already full
                    if (this.maximum == 1) {
                        //Switch the selection to the new row we clicked
                        this.selection.length = 0;
                    } else {
                        return;
                    }

                }
            }

            this.selection.push(row);
        },
        deselect(row) {


            var self = this;

            if (self.maximum == 1) {
                this.selection.length = 0;
            } else {

                var rowID = self.$qik.utils.id(row);
                var index = self.selection.findIndex(function(item) {
                    var id = self.$qik.utils.id(item);
                    return id == rowID;
                });

                console.log('deselect row splice', row, index, self.selection);
                self.selection.splice(index, 1);
            }
        },
        isSelected(row) {
            var self = this;
            var rowID = self.$qik.utils.id(row);

            return self.selectionHash[rowID];
        },
        toggle(row) {


            if (this.isSelected(row)) {
                this.deselect(row)
            } else {
                this.select(row);
            }
        },

        previousPage() {
            this.currentPage--;
        },
        nextPage() {
            this.currentPage++;
        },
        async load() {

            var self = this;
            var sort = self.sort;
            var search = self.search;
            var select = self.selectFields;
            var page = self.page;
            var filter = self.filter;

            self.loading = true;


            if (cancelInflight) {
                cancelInflight();
                cancelInflight = null;
            }

            const { promise, cancel } = await self.$qik.content.list(self.type, {
                sort,
                search,
                select,
                page,
                filter,
            }, { cancellable: true })

            cancelInflight = cancel;

            promise.then(function(res) {
                self.loading = false;
            })
            promise.catch(function(err) {
                // self.loading = false;
            });


            const { data } = await promise;
            return data;




        },
    },
    data() {
        return {
            definition: null,
            selection: this.modelValue,
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


.footer {
    padding: 1em;
    border-top: 1px solid rgba(#000, 0.1);

    .text {
        opacity: 0.5;
        font-size: 0.8em;
    }
}
</style>