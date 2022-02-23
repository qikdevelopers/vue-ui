<template>
    <flex-column class="content-browser" v-if="definition">
        <spinner large v-if="loading" />
        <flex-header>
            <div class="header">
                <flex-row center>
                    <flex-cell shrink>
                        Select {{maximum == 1 ? title : plural}}
                    </flex-cell>
                    <flex-spacer />
                    <flex-cell>
                        <search v-model="search" :loading="searching" :debounce="500" placeholder="Search" />
                    </flex-cell>
                    <flex-spacer />
                    <flex-cell shrink>
                        <ux-button color="primary" @click="$emit('done')">Done</ux-button>
                    </flex-cell>
                </flex-row>
            </div>
        </flex-header>
        <template v-if="dataSource">
            <flex-column class="body" :class="{loading}">
                <native-table :actions="false" :selection="selection" @click:row="rowClicked" :rows="items" :columns="columns">
                </native-table>
            </flex-column>
            <flex-footer>
                <div class="footer">
                    <flex-row center>
                        <flex-cell shrink class="text">
                            <native-select v-model="perPage" :options="perPageOptions">
                                {{displayStartIndex}} to {{endIndex}} of {{totalItems}} total
                            </native-select>
                        </flex-cell>
                        <flex-cell>
                        </flex-cell>
                        <flex-cell shrink>
                            <flex-row center>
                                <flex-cell shrink class="text">
                                    <native-select v-model="currentPage" :options="pageOptions">
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
    <pre>{{selection}}</pre>
</template>
<script>
import NativeSelect from '../form/inputs/native-select.vue';
import NativeTable from '../table/Table.vue';
import Search from '../form/inputs/search.vue';


export default {
    props: {
        type: {
            type: String,
            required: true,
        },
        options: {
            type: Object,
            default () {
                return {}
            }
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
        Search,
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
        totalPages() {
            this.currentPage = 0;
        },
    },
    computed: {
        searching() {
            return this.loading && this.search.length;
        },
        definition() {
            return {}
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

            return columns;
        },
        pageOptions() {
            return Array(this.totalPages).fill(1).map((x, y) => x + y);
        },
        change() {
            return JSON.stringify([this.page, this.sort, this.search, this.selectFields, this.type]);
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
        rowClicked(row) {

            this.toggle(row);
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

            self.loading = true;

            var promise = self.$qik.content.list(`profile`, {
                sort,
                search,
                select,
                page,
                // filter: {
                //     operator: 'and',
                //     filters: [{
                //             operator: 'or',
                //             filters: [
                //                 {
                //                     key: 'gender',
                //                     comparator: 'equals',
                //                     value: 'male',
                //                 },
                //                 {
                //                     key: 'gender',
                //                     comparator: 'empty',
                //                 },
                //                 {
                //                     key: 'gender',
                //                     comparator: 'equals',
                //                     value: 'female',
                //                 },
                //             ]
                //         },
                //         {
                //             operator: 'and',
                //             filters: [{
                //                 key: 'firstName',
                //                 comparator: 'contains',
                //                 value: 'a',
                //             }]
                //         },
                //     ]
                // },
            })

            promise.then(function(res) {
                self.loading = false;
            })
            promise.catch(function(err) {
                self.loading = false;

            });



            return promise;




        },
    },
    data() {
        return {
            definition: null,
            selection: this.modelValue,
            loading: true,
            search: '',
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
            dataSource: null,
            perPageOptions: [{
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

.header {
    padding: 1em;
    border-bottom: 1px solid rgba(#000, 0.1);
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