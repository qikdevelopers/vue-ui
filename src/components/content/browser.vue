<template>
    <flex-column class="content-browser" v-if="actualDefinition">
        <flex-column class="browser-body">
            <flex-row>
                <flex-row :class="{loading}">
                    <flex-column>
                        <flex-column>
                            <template v-if="dataSource">
                                <slot name="abovecontent" />
                                <flex-column class="empty" v-if="boundaryMessage">
                                    <ux-panel>
                                        <ux-panel-body>
                                            <ux-icon class="large-icon" icon="fa-database" />
                                            <div>{{boundaryMessage}}</div>
                                        </ux-panel-body>
                                    </ux-panel>
                                </flex-column>
                                <flex-column v-else-if="items.length">
                                    <template v-if="viewMode && viewMode.component">
                                        <component @reload="debounceReload" :cacheKey="viewModeCacheKey" :definition="actualDefinition" :is="viewMode.component" :selection="manager.items" :items="items" @click:actions="actionsClicked" @select:item:toggle="rowToggled" @click:item="rowClicked" />
                                    </template>
                                    <template v-else>
                                        <native-table v-model:sort="sort" :enableSelection="enableSelection" :enableActions="enableActions" :total="totalItems" :selectAll="selectAll" :deselectAll="deselectAllFunction" :selection="manager.items" @click:row="rowClicked" @click:actions="actionsClicked" @select:row:toggle="rowToggled" @select:multiple="selectMultiple" @deselect:multiple="deselectMultiple" :rows="items" :columns="columns">
                                            <template #corner>
                                                <ux-menu right>
                                                    <template #activator="{ on }">
                                                        <ux-button icon v-on="on">
                                                            <ux-icon icon="fa-cog" />
                                                        </ux-button>
                                                    </template>
                                                    <ux-list>
                                                        <ux-list-item @click="toggleField(field)" :key="field.path" v-for="field in fields">
                                                            <ux-icon :icon="fieldEnabled[field.path] ? 'fa-check-square' : 'fa-regular fa-square' " left /> {{field.title}}
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
                                <template v-else-if="!loading">
                                    <template v-if="viewMode && viewMode.component && viewMode.customEmpty">
                                        <component @reload="debounceReload" :cacheKey="viewModeCacheKey" :definition="actualDefinition" :is="viewMode.component" :selection="manager.items" :items="items" @click:actions="actionsClicked" @select:item:toggle="rowToggled" @click:item="rowClicked" />
                                    </template>
                                <flex-column class="empty" v-else center>
                                    <ux-panel>
                                        <ux-panel-body>
                                            <div>No {{plural}} found.</div>
                                        </ux-panel-body>
                                    </ux-panel>
                                </flex-column>
                            </template>
                                <flex-column class="empty" v-else center>
                                    <!-- <ux-panel>
                                <ux-panel-body>
                                    <div>No {{plural}} found.</div>
                                </ux-panel-body>
                            </ux-panel> -->
                                </flex-column>
                            </template>
                        </flex-column>
                        <flex-footer v-if="dataSource && !boundaryMessage">
                            <slot name="footera"></slot>
                            <div class="footer">
                                <pager v-model:page="page" :total="totalItems" />
                            </div>
                            <slot name="footerb"></slot>
                        </flex-footer>
                    </flex-column>
                </flex-row>
                <flex-column class="filter-column" v-if="showFilterSidebar">
                    <slot name="abovefilter" />
                    <flex-body>
                        <search v-model="keywords" :loading="searching" :debounce="500" placeholder="Keyword Search" />
                        <p></p>
                        <div v-if="dateFilterEnabled">
                            <ux-field :field="dateRangeField" v-model="dateRangeFilter" />
                        </div>
                        <p></p>
                        <filter-builder :definition="actualDefinition" v-model="actualFilter" />
                    </flex-body>
                    <slot name="belowfilter" />
                </flex-column>
            </flex-row>
        </flex-column>
        <spinner large v-if="loading" />
    </flex-column>
</template>
<script>
import NativeTable from '../table/Table.vue';

import FilterBuilder from '../filter/FilterBuilder.vue';
import Selection from '../services/selection.js';
import Search from '../form/inputs/search.vue';
import Pager from '../ui/pager.vue';
import UXFormField from '../form/field.vue';
import _debounce from 'lodash/debounce';
import _uniq from 'lodash/uniq';

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
                shrink: true,
            })

            columns.push({
                title: 'Last Name',
                key: 'lastName',
                shrink: true,
            })

            columns.push({
                title: 'Email',
                key: 'emails',
            })

            columns.push({
                title: 'Phone Number',
                key: 'phoneNumbersInternational',
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
                shrink: true,
            })

            switch (type) {
                case 'image':
                case 'video':
                    columns.push({
                        title: 'Media Type',
                        key: 'mediaIntegrationType',
                        shrink: true,
                    })
                    break;
            }

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
                key: 'meta.security',
                renderer: 'security',
                shrink: true,
            })
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
                            var validToken = await self.$sdk.auth.ensureValidToken();

                            //Open the URL
                            var url = self.$sdk.files.downloadUrl(self.basicType, row)

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


function emptyFilter() {
    return {
        operator: 'and',
        filters: [],
    }
}

//////////////////////////////////////////////

let inflightRequest;
let cancelledUnmount;
let typeCacheKey;


export default {
    props: {
        view: {
            type: Object,
            default () {
                return {
                    title: 'List',
                    key: 'table',
                }
            },
        },
        filter: {
            type: Object,
            default () {
                return emptyFilter();
            }
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
        dateRange: {
            type: Object,
            default: {},
        },
        rolodexPrimary: {
            type: String,
            default: '',
        },
        rolodexSecondary: {
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
        dateFilterEnabled: {
            type: Boolean,
        },
        selectionManager: {
            type: Object,
        },
        enableActions: {
            type: Boolean,
            default: false,
        },
        enableSelection: {
            type: Boolean,
            default: true,
        },
        trash: {
            type: Boolean,
            default: false,
        },
    },
    components: {
        Pager,
        NativeTable,
        FilterBuilder,
        Search,
        UxField: UXFormField,
    },
    deactivated() {
        typeCacheKey = this.$sdk.global.cacheKeys[this.type];

        if (inflightRequest) {
            inflightRequest.cancel();
            inflightRequest = null;
            cancelledUnmount = true;
        }
    },
    async activated() {
        var self = this;

        var nowCacheKey = self.$sdk.global.cacheKeys[self.type];
        if (typeCacheKey != nowCacheKey) {
            typeCacheKey = nowCacheKey;
            self.dataSource = await self.load();
        }

        if (cancelledUnmount) {
            cancelledUnmount = false;
            self.dataSource = await self.load();
        }
    },
    async created() {

        var self = this;

        //Get the type details
        await new Promise(async function(resolve, reject) {
            var glossary = await self.$sdk.content.glossary({ hash: true });
            var definition = glossary[self.type]
            self.definition = definition;
            if (!definition) {
                return reject();
            }
            resolve();
        })

        // Set default sort
        self.sort = self.defaultSort;

        // await new Promise(async function(resolve, reject) {
        //     var dataSource = await self.load();
        //     self.dataSource = dataSource;
        //     resolve();
        // })
    },
    watch: {
        keywords(k) {
            this.$emit('update:search', k)
        },
        roloPrimary(r) {
            this.$emit('update:rolodexPrimary', r)
        },
        roloSecondary(r) {
            this.$emit('update:rolodexSecondary', r)
        },
        dateRangeFilter(d) {
            this.$emit('update:dateRange', d)
        },
        search(k) {
            this.keywords = k;
        },
        rolodexPrimary(r) {
            this.roloPrimary = r;
        },
        rolodexSecondary(r) {
            this.roloSecondary = r;
        },
        change: {
            handler: 'debounceReload',
            immediate: true,
        },
        loading() {
            this.$emit('loading', this.loading)
        },
        selectedItems(items) {
            this.$emit('update:modelValue', items);
        },
        loadKey() {
            this.$emit('loaded');
        },
        options(o) {
            this.actualOptions = o;
        },
        filter(f) {
            if (!f) {
                this.actualFilter = emptyFilter();
            } else {
                this.actualFilter = f;
            }
        }
    },
    computed: {
        actualDefinition() {
            return this.definition || this.options?.definition;
        },
        showFilterSidebar() {
            return this.showFilters;
            // || this.boundaryMessage;
        },
        boundaryMessage() {
            if (this.dataSource?.boundary) {
                return this.dataSource.message || 'Limit was reached. Please provide more selective criteria';
            }
        },
        viewModeCacheKey() {
            return `${this.cacheKey}-${this.loadKey}`
        },
        dateRangeField() {
            return {
                type: 'object',
                widget: 'daterange',
                key: 'dateRange',
                minimum: 0,
                maximum: 1,
            }
        },
        combinedFilter() {

            const self = this
            let userSelectedFilters = self.actualFilter;
            let lockFilter = self.actualOptions.lockFilter;

            if (!lockFilter) {
                return userSelectedFilters;
            }

            //////////////////////////

            // Start by copying the user filters
            userSelectedFilters = JSON.parse(JSON.stringify(userSelectedFilters));
            lockFilter = JSON.parse(JSON.stringify(lockFilter));

            let combinedFilter;

            // If it's already an 'and'
            if (userSelectedFilters.operator === 'and') {
                // Add the locked filters to the list
                combinedFilter = userSelectedFilters;
                combinedFilter.filters.push(lockFilter);
            } else {
                // Add the user filters to the list
                combinedFilter = lockFilter;
                lockFilter.filters.push(userSelectedFilters);
            }

            return combinedFilter;
        },
        viewMode() {
            var view = this.view;

            switch (view.key) {
                case 'list':
                case 'table':
                    return;
                    break;
            }

            return view;
        },
        defaultSort() {

            //TODO Update to allow for a prop
            //And user sort by clicking on the table headers
            var defaultSort = this.definition?.defaultSort;

            if (defaultSort) {
                return defaultSort;
            }

            // Default to title alphabetically
            defaultSort = {
                key: 'title',
                direction: 'asc',
                type: 'string',
            }

            switch (this.basicType) {
                case 'profile':
                case 'persona':
                case 'user':
                    defaultSort = {
                        key: 'lastName',
                        direction: 'asc',
                        type: 'string',
                    }
                    break;
                case 'event':
                    defaultSort = {
                        key: 'startDate',
                        direction: 'asc',
                        type: 'date',
                    }
                    break;
                case 'workflowcard':
                    defaultSort = {
                        key: 'due',
                        direction: 'dsc',
                        type: 'date',
                    }

                    break;
                case 'email':
                case 'notification':
                case 'transaction':
                case 'campaign':
                case 'transaction':
                case 'componentsnapshot':
                case 'interfacesnapshot':
                case 'image':
                case 'video':
                case 'audio':
                case 'file':
                case 'submission':
                case 'export':
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

            const self = this
            const isFormSubmission = self.actualDefinition.definesType === 'submission';
            var allFields = [...self.actualDefinition.fields];
            var definedFields = self.actualDefinition.definedFields || [];



            if (definedFields.length) {

                if (isFormSubmission) {

                    var formDataFields = {
                        title: `Form Data`,
                        minimum: 1,
                        maximum: 1,
                        key: 'formData',
                        asObject: true,
                        type: 'group',
                        fields: definedFields,
                    }

                    allFields.push(formDataFields);

                    const cleanedDataFields = definedFields.map(function(field) {
                        if (field.type === 'reference') {
                            field = JSON.parse(JSON.stringify(field))
                            delete field.fields;
                        }

                        return field;
                    });

                    var dataFields = {
                        title: `Data`,
                        minimum: 1,
                        maximum: 1,
                        key: 'data',
                        asObject: true,
                        type: 'group',
                        fields: cleanedDataFields,
                    }

                    allFields.push(dataFields);


                } else {

                    var dataFields = {
                        title: `${self.actualDefinition.title}`,
                        minimum: 1,
                        maximum: 1,
                        key: 'data',
                        asObject: true,
                        type: 'group',
                        fields: definedFields,
                    }

                    allFields.push(dataFields);

                }
            }


            var mapped = self.$sdk.utils.mapFields(allFields)
                .filter(function(field) {
                    var isObject = field.type == 'group' && field.asObject && (field.minimum == 1 && field.maximum == 1);
                    return !isObject;
                })
                .map(function(field) {
                    field.title = field.titles.join(' › ');
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
            const self = this;
            var activeFilters = this.$sdk.filter.activeFilters(self.actualFilter)
                .reduce(function(set, filter) {
                    if (!filter.key) {
                        return set;
                    }

                    filter = { ...filter };
                    filter.title = `Filter ${set.length + 1}`;
                    filter.key = filter.key.split('[]').join('');
                    filter.class = 'active-filter';
                    filter.shrink = true;
                    set.push(filter);

                    return set;
                }, [])


            return activeFilters;
        },
        searching() {
            return this.loading && this.keywords.length;
        },
        title() {
            return this.actualDefinition.title;
        },
        plural() {
            return this.actualDefinition.plural;
        },
        selectFields() {
            const self = this;

            var fields = self.columns.map(function(column) {
                    // if (column.fields) {
                    //     return [column.key, ...column.fields];
                    // }
                    return [column.path || column.key, ...(column.select || [])];
                })
                .flat()
                .filter(Boolean)
                .map(function(string) {
                    return string.split('[]').join('');
                })

            if (self.actualOptions.select) {
                fields = [...fields, ...self.actualOptions.select];
            }


            return _uniq(fields);
        },
        columns() {

            let columns = [];
            let columnHash = {};

            /////////////////////////////////////

            function addColumn(force) {
                return function(col) {


                    var alreadySelected = columnHash[col.path || col.key];
                    if (force || !alreadySelected) {
                        columnHash[col.path || col.key] = 1;
                        columns.push({
                            ...col,
                            key: col.path || col.key,
                        })
                    }
                }
            }


            /////////////////////////////////////


            // If the interface is forcing to prefix columns
            var prefixColumns = (this.actualOptions.prefixColumns || []);


            prefixColumns.forEach(addColumn(true))

            /////////////////////////////////////

            //Add the default columns
            var optionColumns = this.actualOptions.columns;

            var basicColumns = optionColumns && optionColumns.length ? optionColumns : defaultColumns(this, this.basicType);

            if (!basicColumns.length) {
                basicColumns.push({
                    title: 'Title',
                    key: 'title',
                })
            }

            basicColumns.forEach(addColumn(true))

            // //Create a hash
            // columnHash = { ...columnHash,
            //     ...columns.reduce(function(set, column) {
            //         set[column.key] = 1;
            //         return set;
            //     }, {})
            // }


            /////////////////////////////////////

            // If the user has selected extra fields manually
            var additionalFields = this.additionalFields;
            additionalFields.forEach(addColumn())

            /////////////////////////////////////

            // If the interface is forcing to suffix columns
            var suffixColumns = (this.actualOptions.suffixColumns || []);
            suffixColumns.forEach(addColumn(true))

            /////////////////////////////////////

            var activeFilters = this.activeFilters;


            activeFilters.forEach(addColumn())


            /////////////////////////////////////

            return columns;
        },
        filterChangeString() {
            const self = this;
            var string = this.$sdk.filter.filterChangeString(self.actualFilter);
            return string;
        },
        change() {
            return `${JSON.stringify([this.page, this.roloSecondary, this.rolodexPrimary, this.dateRangeFilter, this.sort, this.keywords, this.selectFields, this.type, this.filterChangeString])}-${this.cacheKey}-${this.$sdk.global.cacheKeys[this.type]}`;
        },
        items() {
            return this.dataSource.items;
        },
        totalItems() {
            return this.dataSource.total;
        },
        basicType() {
            return this.actualDefinition ? this.actualDefinition.definesType || this.actualDefinition.key : this.type;
        },
        loadCriteria() {

            const self = this;
            const sort = self.sort || self.defaultSort;
            const search = self.keywords;
            const select = self.selectFields;
            const page = self.page;
            const filter = self.combinedFilter;
            const rolodexPrimary = self.roloPrimary;
            const rolodexSecondary = self.roloSecondary;





            return {
                sort,
                search,
                select,
                page,
                filter,
                rolodexPrimary,
                rolodexSecondary,
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
        debounceReload: _debounce(function() {
            this.reload();
        }),
        async reload() {
            this.dataSource = await this.load();
        },
        toggleField(field) {

            var key = field.path || field.key;

            var index = this.additionalFields.findIndex(function(f) {
                return f.path === key || f.key === key;
            })

            if (index === -1) {

                this.additionalFields.push(field);
            } else {
                this.additionalFields.splice(index, 1);
            }
        },
        ensureMeta(row) {
            if (!row.meta) {
                row.meta = {}
            }

            if (!row.meta.type) {
                row.meta.type = this.basicType;
            }

            if (!row.meta.definition) {
                row.meta.definition = this.definition?.key;
            }

            if (this.trash) {
                row.meta.deleted = true;
            }

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
        async load(includeAll) {
            var self = this;
            self.loading = true;
            if (inflightRequest) {
                inflightRequest.cancel();
                inflightRequest = null;
                // console.log('Close inflight browser.list request')
            }

            // console.log('New browser.list request')

            var loadCriteria = Object.assign({}, self.loadCriteria);
            loadCriteria.includeAll = includeAll;

            if (self.trash) {
                loadCriteria.trash = true;
            }

            // If the date filter is enabled and we aren't doing a keyword search
            if (self.dateFilterEnabled && !loadCriteria.search) {

                let startDate = self.dateRangeFilter?.dateRange?.startDate;
                let endDate = self.dateRangeFilter?.dateRange?.endDate;
                if (startDate || endDate) {
                    let timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

                    if (startDate.toISOString() == endDate.toISOString()) {
                        startDate = new Date(startDate)
                        startDate.setHours(0, 0, 0, 0);
                        endDate = new Date(startDate)
                        endDate.setHours(23, 59, 59, 999)
                    } else {
                        endDate = new Date(endDate)
                        endDate.setHours(23, 59, 59, 999)
                    }

                    loadCriteria.date = {
                        startDate,
                        endDate,
                        timezone,
                    }
                }
            }

            const id = Math.random();
            const { promise, cancel } = await self.$sdk.content.list(self.type, loadCriteria, { remoteURL: self.actualOptions.remoteURL, cancellable: true })
            inflightRequest = { id, cancel };

            promise.then(function(res) {
                if (inflightRequest?.id === id) {
                    inflightRequest = null;
                    self.loading = false;
                    self.loadKey++;
                    // console.log('Cleaned up browser.list request', id)
                }
            })
            promise.catch(function(err) {
                if (inflightRequest?.id === id) {
                    inflightRequest = null;
                    // self.loading = false;
                    // console.log('Remove error inflight browser.list request', id)
                }
            });


            const { data } = await promise;

            if (!data) {
                // TODO: Maybe retry here?
                return;
            }

            data.items.forEach(self.ensureMeta);

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
            loadKey: 1,
            page: {
                size: 50,
                index: 1,
            },
            actualFilter: this.filter,
            sort: this.defaultSort,
            keywords: this.search,
            roloPrimary: this.rolodexPrimary,
            roloSecondary: this.roloSecondary,
            dateRangeFilter: {
                dateRange: this.dateRange
            },
            dataSource: null,
            actualOptions: this.options,
        }
    },
}
</script>
<style lang="scss" scoped>
.content-browser {
    position: relative;
}

.browser-body {}

.loading {
    opacity: 0.5;
}

.filter-column {
    padding: 1em;
    background: rgba(#000, 0.03);
    border-left: 1px solid rgba(#000, 0.1);
    max-width: 500px;
    width: 40%;
    flex: none;
    font-size: clamp(13px, 0.9em, 17px);
}

.large-icon {
    font-size: 6em;
    margin-bottom: 1rem;
    opacity: 0.5;
}

.empty {
    background: rgba(#000, 0.05);
    text-align: center;
    white-space: pre-line;
    align-items: center;
    justify-content: center;

    .panel {
        max-width: 400px;
        background: #fff;
    }
}


.footer {
    padding: 1em;
    border-top: 1px solid rgba(#000, 0.1);


}
</style>