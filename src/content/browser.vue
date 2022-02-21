<template>
    <flex-column class="content-browser">
        <flex-header>
            <div class="header">
                <flex-row center>
                    <flex-cell shrink>
                        Select content
                    </flex-cell>
                    <flex-cell>
                        <input v-model="search" placeholder="Search" />
                        <!-- <search v-model="search"/> -->
                    </flex-cell>
                    <flex-cell shrink>
                        <ux-button @click="$emit('done')">Done</ux-button>
                    </flex-cell>
                </flex-row>
            </div>
        </flex-header>
        <template v-if="dataSource">
            <flex-column>
                <native-table :rows="items" :columns="columns" />
            </flex-column>
            <flex-footer>
                <div class="footer">
                    <flex-row>
                        <flex-cell shrink>
                            <native-select v-model="perPage" :options="perPageOptions">
                                {{startIndex+1}} to {{endIndex}} of {{totalItems}} total {{plural}}
                            </native-select>
                        </flex-cell>
                        <flex-cell>
                        </flex-cell>
                        <flex-cell shrink>
                            <flex-row>
                                <flex-cell shrink>
                                    <div>
                                        <native-select v-model="currentPage" :options="pageOptions">
                                            Page {{currentPage}} of {{totalPages}}
                                        </native-select>
                                    </div>
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
        <template v-else>
            Loading
        </template>
    </flex-column>
</template>
<script>
import debounce from 'lodash/debounce';
import NativeSelect from '../form/inputs/native-select.vue';
import NativeTable from '../table/Table.vue';


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
    },
    components: {
        NativeSelect,
        NativeTable,
    },
    async created() {
        this.dataSource = await this.load();
    },
    watch: {
        async change() {
            console.log('change');
            this.dataSource = await this.load();
        },
        search: debounce(function(keywords) {
            this.debouncedSearch = keywords;
        }, 500)
    },
    computed: {
        definition() {
            return {}
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
        select() {

            return this.columns.map(function(column) {
                return column.key;
            })
        },
        columns() {

            let columns = [];

            columns.push({
                title: 'First Name',
                key: 'firstName',
            })

            columns.push({
                title: 'Last Name',
                key: 'lastName',
            })

            return columns;
        },
        pageOptions() {
            return Array(10).fill(1).map((x, y) => x + y);
        },
        change() {
            return JSON.stringify([this.page, this.sort, this.debouncedSearch, this.select, this.type]);
        },
        startIndex() {
            return (this.currentPage - 1) * this.page.size;
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
            return this.dataSource.page.total;
        },
    },
    methods: {
        previousPage() {
            this.currentPage--;
        },
        nextPage() {
            this.currentPage++;
        },
        async load() {

            var self = this;
            var sort = self.sort;
            var search = self.debouncedSearch;
            var select = self.select;
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
            loading: true,
            search: '',
            debouncedSearch: '',
            sort: {
                key: 'meta.updated',
                direction: 'dsc',
                type: 'date',
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
}

.header {
    padding: 1em;
    border-bottom: 1px solid rgba(#000, 0.1);
}

.footer {
    padding: 1em;
    border-top: 1px solid rgba(#000, 0.1);
}
</style>