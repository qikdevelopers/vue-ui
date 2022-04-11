<template>
    <flex-column class="content-browser" v-if="definition">
        <template v-if="dataSource">
            <flex-column class="browser-body" :class="{loading}">
                <flex-row>
                    <flex-column v-if="items.length">
                        <template v-if="viewMode && viewMode.component">
                            <component :is="viewMode.component" :selection="manager.items" :items="items"  @click:actions="actionsClicked" @select:item:toggle="rowToggled" @click:item="rowClicked"/>
                        </template>
                        <template v-else>
                            <native-table :enableActions="enableActions" :total="totalItems" :selectAll="selectAll" :deselectAll="deselectAllFunction" :selection="manager.items" @click:row="rowClicked" @click:actions="actionsClicked" @select:row:toggle="rowToggled" @select:multiple="selectMultiple" @deselect:multiple="deselectMultiple" :rows="items" :columns="columns">
                                <template #corner>
                                    <ux-menu right>
                                        <template #activator="{ on }">
                                            <ux-button icon v-on="on">
                                                <ux-icon icon="fa-cog" />
                                            </ux-button>
                                        </template>
                                        <ux-list>
                                            <ux-list-item @click="toggleField(field)" v-for="field in fields">
                                                <ux-icon :icon="fieldEnabled[field.key] ? 'fa-check-square' : 'fa-regular fa-square' " left /> {{field.title}}
                                            </ux-list-item>
                                            <!-- <ux-list-item @click="selectPage()">
                                            Select Page
                                        </ux-list-item>
                                        <ux-list-item v-if="someSelectedOnPage" @click="deselectPage()">
                                            Deselect Page
                                        </ux-list-item>
                                        <ux-list-item v-if="selectAll" @click="selectAll()">
                                            Select All ({{total}})
                                        </ux-list-item>
                                        <ux-list-item v-if="deselectAll" @click="deselectAll()">
                                            Deselect All
                                        </ux-list-item> -->
                                        </ux-list>
                                    </ux-menu>
                                </template>
                            </native-table>
                        </template>
                    </flex-column>
                    <flex-column class="empty" v-else-if="!loading" center>
                        <ux-panel>
                            <ux-panel-body>
                                <div>No {{definition.plural}} found.</div>
                            </ux-panel-body>
                        </ux-panel>
                    </flex-column>
                    <flex-column class="filter-column" v-if="showFilters">
                        <flex-body>
                            <search v-model="keywords" :loading="searching" :debounce="500" placeholder="Keyword Search" />
                            <p></p>
                            <filter-builder :definition="definition" v-model="filter" />
                        </flex-body>
                    </flex-column>
                </flex-row>
            </flex-column>
            <flex-footer>
                <slot name="footera"></slot>
                <div class="footer">
                    <pager v-model:page="page" :total="totalItems"/>
                </div>
                <slot name="footerb"></slot>
            </flex-footer>
        </template>
        <spinner large v-if="loading" />
    </flex-column>
</template>
<script>
// import NativeSelect from '../form/inputs/select.vue';
import NativeTable from '../table/Table.vue';

import FilterBuilder from '../filter/FilterBuilder.vue';
import Selection from '../services/selection.js';
import Search from '../form/inputs/search.vue';
import Pager from '../ui/pager.vue';

//////////////////////////////////////////////

function defaultColumns(self, type) {

    var columns = [];
    var ignoreTitle;

    ///////////////////////////////////////

    //Prefix Columns
    switch (type) {
        case 'image':
        case 'video':
            columns.push({
                title: '',
                key: '_id',
                renderer: 'thumbnail',
                shrink: true,
                fields: ['width', 'height', 'fileMeta.colors.colors[0]'],
            })
            break;
    }


    ///////////////////////////////////////

    switch (type) {
        case 'profile':
            ignoreTitle = true;

            columns.push({
                title: 'First Name',
                key: 'firstName',
                // shrink: true,
            })

            columns.push({
                title: 'Last Name',
                key: 'lastName',
                // shrink: true,
            })

            columns.push({
                title: 'Gender',
                key: 'gender',
                // shrink: true,
            })

            columns.push({
                title: 'Age',
                key: 'age',
                // shrink: true,
            })
            break;
        case 'definition':
            columns.push({
                title: 'Plural',
                key: 'plural',
                // shrink: true,
            })



            columns.push({
                title: 'Defines Type',
                key: 'definesType',
                // shrink: true,
            })

            columns.push({
                title: 'Database Key',
                key: 'key',
                // shrink: true,
            })

            columns.push({
                title: 'Category',
                key: 'category',
                // shrink: true,
            })

            break;
        case 'file':
        case 'audio':
        case 'image':
        case 'video':

            ignoreTitle = true;
            columns.push({
                title: 'Title',
                key: 'title',
                // shrink: true,
            })

            switch (type) {
                case 'image':
                case 'video':
                    columns.push({
                        title: 'Width',
                        key: 'width',
                        shrink: true,
                    })

                    columns.push({
                        title: 'Height',
                        key: 'height',
                        shrink: true,
                    })

                    break;
            }

            columns.push({
                title: 'Ext',
                key: 'fileExtension',
                shrink: true,
            })

            columns.push({
                title: 'Mime Type',
                key: 'fileMime',
                // shrink: true,
            })


            columns.push({
                title: 'File Type',
                key: 'mediaIntegrationType',
                shrink: true,
            })

            break;
    }


    ///////////////////////////////////////


    if (!ignoreTitle) {
        columns.unshift({
            title: 'Title',
            key: 'title',
        })
    }

    ///////////////////////////////////////

    //Suffix Columns
    switch (type) {
        case 'file':
        case 'audio':
        case 'image':
        case 'video':
            columns.push({
                title: '',
                key: '_id',
                renderer: 'button',
                shrink: true,
                button: {
                    size: "sm",
                    text: 'Download',
                    icon: 'fa-download',
                    action(row) {
                        return new Promise(async function(resolve, reject) {

                            //Refresh our token if it's stale
                            var validToken = await self.$qik.auth.ensureValidToken();

                            //Open the URL
                            var url = self.$qik.files.downloadUrl(self.basicType, row)

                            window.open(url);

                            resolve();
                        })
                    }
                }
            })
            break;
    }





    return columns;
}

//////////////////////////////////////////////

let cancelInflight;
let typeCacheKey;

export default {
    props: {
        view: {
            type: Object,
            default() {
                return {
                    title:'List',
                    key:'table',
                }
            },
        },
        type: {
            type: String,
            required: true,
        },
        showFilters: {
            type: Boolean,
        },
        search: {
            type: String,
            default: '',
        },
        options: {
            type: Object,
            default () {
                return {}
            }
        },
        cacheKey: {
            type: [String, Number],
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
        },
        enableActions: {
            type: Boolean,
            default: false,
        },
    },
    components: {
        // NativeSelect,
        Pager,
        NativeTable,
        FilterBuilder,
        Search,
        // FilterRule,
    },
    deactivated() {
        typeCacheKey = this.$qik.global.cacheKeys[this.type];
    },
    async activated() {
        var self = this;
        var nowCacheKey = self.$qik.global.cacheKeys[self.type];
        if (typeCacheKey != nowCacheKey) {
            typeCacheKey = nowCacheKey;
            self.dataSource = await self.load();
        }
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
        keywords(k) {
            this.$emit('update:search', k)
        },
        search(k) {
            this.keywords = k;
        },
        async change() {
            this.dataSource = await this.load();
        },
        loading() {
            this.$emit('loading', this.loading)
        },
        selectedItems(items) {
            this.$emit('update:modelValue', items);
        },
    },
    computed: {
        viewMode() {
            var view = this.view;

            switch(view.key) {
                case 'list':
                case 'table':
                    return;
                break;
            }

            return view;
        },
        sort() {

            //TODO Update to allow for a prop
            //And user sort by clicking on the table headers
            var defaultSort = {
                key: 'title',
                direction: 'asc',
                type: 'string',
            }

            switch (this.basicType) {
                case 'log':
                    defaultSort = {
                        key: 'meta.created',
                        direction: 'dsc',
                        type: 'date',
                    }
                    break;
            }

            return defaultSort
        },
        fields() {
            var allFields = [...this.definition.fields];
            var definedFields = this.definition.definedFields || [];
            if (definedFields.length) {
                var customFields = {
                    title: `${this.definition.title}`,
                    minimum: 1,
                    maximum: 1,
                    key: 'data',
                    asObject: true,
                    type: 'group',
                    fields: definedFields,
                }

                allFields.push(customFields);
            }

            var mapped = this.$qik.utils.mapFields(allFields)
                .filter(function(field) {
                    var isObject = field.type == 'group' && field.asObject && (field.minimum == 1 && field.maximum == 1);
                    return !isObject;
                })
                .map(function(field) {
                    field.title = field.titles.join(' > ');
                    return field;
                })
                .sort(function(a, b) {
                    return a.title < b.title ? -1 : 1;
                });
            return mapped;
        },
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
            return this.loading && this.keywords.length;
        },
        title() {
            return this.definition.title;
        },
        plural() {
            return this.definition.plural;
        },
        // perPage: {
        //     get() {
        //         return this.page.size;
        //     },
        //     set(i) {
        //         i = Math.max(i, 1);
        //         this.page.size = i;
        //     }

        // },
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


            columns = defaultColumns(this, this.basicType);



            var existingColumns = columns.reduce(function(set, column) {
                set[column.key] = 1;
                return set;
            }, {})

            /////////////////////////////////////

            var additionalFields = this.additionalFields;
            additionalFields.forEach(function(field) {

                if (!existingColumns[field.key]) {
                    existingColumns[field.key] = 1;
                    columns.push({
                        title: field.title,
                        key: field.path,
                        type: field.type,
                    })
                }
            })



            /////////////////////////////////////

            var activeFilters = this.activeFilters;
            activeFilters.forEach(function(filter) {

                if (!existingColumns[filter.key]) {
                    existingColumns[filter.key] = 1;
                    columns.push({
                        title: filter.key,
                        key: filter.key,
                    })
                }
            })

            /////////////////////////////////////

            return columns;
        },
        // pageField() {
        //     return {
        //         type: 'integer',
        //         maximum: 1,
        //         minimum: 1,
        //         options: Array(this.totalPages).fill(1).map((x, y) => x + y),
        //     }
        // },
        filterChangeString() {
            var string = this.$qik.filter.filterChangeString(this.filter);
            return string;
        },
        change() {
            return `${JSON.stringify([this.page, this.sort, this.keywords, this.selectFields, this.type, this.filterChangeString])}-${this.cacheKey}-${this.$qik.global.cacheKeys[this.type]}`;
        },
        // startIndex() {
        //     return (this.currentPage - 1) * this.page.size;
        // },
        // displayStartIndex() {
        //     return this.totalItems ? this.startIndex + 1 : 0;
        // },
        // endIndex() {
        //     return Math.min(this.startIndex + this.page.size, this.totalItems);
        // },
        items() {
            return this.dataSource.items;
        },
        // currentPage: {
        //     get() {
        //         return this.page.index;
        //     },
        //     set(index) {


        //         if (this.totalPages) {
        //             index = Math.min(this.totalPages, index);
        //         }

        //         index = Math.max(index, 1);

        //         return this.page.index = index;
        //     }
        // },
        totalItems() {
            return this.dataSource.total;
        },
        // totalPages() {
        //     return this.dataSource ? this.dataSource.page.total : 1;

        // },
        basicType() {
            return this.definition ? this.definition.definesType || this.definition.key : this.type;
        },
        loadCriteria() {

            var self = this;
            var sort = self.sort;
            var search = self.keywords;
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
        fieldEnabled() {
            var self = this;
            return self.columns.reduce(function(set, field) {
                set[field.key] = true;
                return set;
            }, {})
        },
    },
    methods: {

        toggleField(field) {

            var key = field.path;

            var index = this.additionalFields.findIndex(function(f) {
                return f.key == key;
            })

            if (index == -1) {
                this.additionalFields.push(field);
            } else {
                this.additionalFields.splice(index, 1);
            }
        },
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

            console.log('CLICKED ROW')
            this.$emit('click:row', row);
        },
        actionsClicked(row) {

            this.$emit('click:actions', row);
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
        // previousPage() {
        //     this.currentPage--;
        // },
        // nextPage() {
        //     this.currentPage++;
        // },
        async load(includeAll) {



            var self = this;
            self.loading = true;
            if (cancelInflight) {
                cancelInflight();
                cancelInflight = null;
            }

            var loadCriteria = Object.assign({}, self.loadCriteria);
            loadCriteria.includeAll = includeAll;


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
            additionalFields: [],
            page: {
                size: 50,
                index: 1,
            },
            filter: {
                operator: 'and',
                filters: [],
            },
            keywords: this.search,
            dataSource: null,
            // perPageField: {
            //     minimum: 1,
            //     maximum: 1,
            //     options: [{
            //             title: '50 per page',
            //             value: 50,
            //         },
            //         {
            //             title: '100 per page',
            //             value: 100,
            //         },
            //         {
            //             title: '250 per page',
            //             value: 250,
            //         },
            //         {
            //             title: '500 per page',
            //             value: 500,
            //         },
            //     ]
            // }
        }
    },
}
</script>
<style lang="scss" scoped>
.content-browser {
    background: #fff;
    position: relative;
}

.browser-body {
    &.loading {
        opacity: 0.5;
    }
}

.filter-column {
    padding: 1em;
    background: rgba(#000, 0.1);
    max-width: 500px;
    width: 40%;
    flex: none;
    font-size: clamp(13px, 0.9em, 17px);
}

.empty {
    background: rgba(#000, 0.05);

    .panel {
        background: #fff;
    }
}


.footer {
    padding: 1em;
    border-top: 1px solid rgba(#000, 0.1);

    
}
</style>