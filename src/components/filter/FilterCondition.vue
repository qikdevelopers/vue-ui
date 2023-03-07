<template>
    <div class="filter-condition" v-if="comparators">
        <flex-row gap vcenter>
            <flex-cell>
                <native-select title="Select field" v-model="model.key" :field="keyField" />
            </flex-cell>
            <flex-cell v-if="model.key">
                <native-select title="Select comparator" v-model="model.comparator" :field="comparatorField" />
            </flex-cell>
            <flex-cell v-if="model.comparator">
                <div v-if="inputType == 'array'">
                    <template v-if="hasOptions">
                        <native-select v-model="model.values" :field="multiOptionsField" />
                    </template>
                    <template v-else>
                        <text-field :field="arrayField" v-model="model.values" />
                    </template>
                </div>
                <div v-if="inputType == 'range'">
                    <template v-if="fieldWidget == 'currency'">
                        <currency-field :field="normalField" v-model="model.value" />
                        And
                        <currency-field :field="normalField" v-model="model.value2" />
                    </template>
                    <template v-else>
                        <text-field :field="normalField" v-model="model.value" />
                        And
                        <text-field :field="normalField" v-model="model.value2" />
                    </template>
                </div>
                <div v-if="inputType == 'daterelative'">
                    <flex-row>
                        <flex-cell style="width:80px">
                            <text-field :field="relativeNumberField" v-model="model.value" />
                        </flex-cell>
                        <flex-cell>
                            <native-select v-model="model.value2" :field="relativePeriodField" />
                            <!-- <text-field :field="relativePeriodField" v-model="model.value" /> -->
                        </flex-cell>
                    </flex-row>
                </div>
                <div v-if="inputType == 'daterange'">
                    <date-field :field="dateField" v-model="model.value" />
                    And
                    <date-field :field="dateField" v-model="model.value2" />
                </div>
                <div v-if="inputType == 'date'">
                    <date-field :field="dateField" v-model="model.value" />
                </div>
                <div v-if="inputType == 'reference'">
                    <content-select :field="singleReferenceField" v-model="model.value" />
                </div>
                <div v-if="inputType == 'multireference'">
                    <content-select :field="multiReferenceField" v-model="model.values" />
                </div>
                <div v-if="inputType == 'boolean'">
                    <flex-row gap center>
                        <flex-cell shrink>
                            <ux-switch @click="model.value = !model.value" :value="model.value" />
                        </flex-cell>
                        <flex-cell>
                            {{model.value ? 'True' : 'False'}}
                        </flex-cell>
                    </flex-row>
                    <!--  <input type="checkbox" v-model="model.value" /> -->
                </div>
                <div v-if="inputType == 'none'">
                </div>
                <div v-if="inputType == 'number'">
                    <template v-if="fieldWidget == 'currency'">
                        <currency-field :field="normalField" v-model="model.value" />
                    </template>
                    <text-field v-else :field="normalField" v-model="model.value" />
                </div>
                <div v-if="inputType == 'normal'">
                    <template v-if="hasOptions">
                        <native-select v-model="model.value" :field="singleOptionsField" />
                    </template>
                    <template v-else>
                        <text-field :field="normalField" v-model="model.value" />
                    </template>
                </div>
                <!-- <pre>{{field}}</pre> -->
            </flex-cell>
            <flex-cell shrink v-if="enableRemove">
                <ux-button size="sm" icon @click="$emit('remove')">
                    <ux-icon icon="fa-times" />
                </ux-button>
            </flex-cell>
        </flex-row>
    </div>
</template>
<script>
import DateField from '../form/inputs/datefield.vue';
import TextField from '../form/inputs/textfield.vue';
import CurrencyField from '../form/inputs/currency.vue';
import NativeSelect from '../form/inputs/select.vue';
import ContentSelect from '../form/inputs/content-select.vue';

export default {
    props: {
        fields: {
            type: Array,
            default () {
                return [];
            }
        },
        enableRemove: {
            type: Boolean,
        },
        modelValue: {
            type: Object,
            default () {
                return {
                    key: '',
                    comparator: '',
                    value: null,
                    value2: null,
                    values: [],
                }
            }
        },
    },
    watch: {
        modelValue(m) {
            if (m != this.model) {
                this.model = m;
            }
        }
    },
    async created() {
        this.comparators = await this.$sdk.content.comparators();
    },
    data() {
        return {
            comparators: null,
            model: this.modelValue,
        }
    },
    computed: {
        hasOptions() {
            return !!(this.field.options && this.field.options.length);
        },
        fieldHash() {
            return this.fields.reduce(function(set, field) {

                set[field.path] = field;
                return set;
            }, {})
        },
        keyOptions() {
            return this.fields.reduce(function(set, entry) {
                    switch (entry.type) {
                        case 'object':
                        case 'group':
                            break;
                        default:

                            if (!entry.filterDisabled) {
                                set.push({
                                    title: entry.filterTitle || entry.titles.join(' → '),
                                    value: entry.path || entry.key,
                                })
                            }
                            break;
                    }


                    return set;

                }, [])
               
        },

        keyField() {
            return {
                minimum: 1,
                maximum: 1,
                options: this.keyOptions,
                sorted:true,
            }
        },
        field() {
            return this.fieldHash[this.model.key];
        },
        fieldWidget() {

            if (this.comparator?.inputWidget) {
                return this.comparator.inputWidget;
            }

            switch (this.field?.widget) {
                case 'currency':
                    return this.field.widget;
                    break;
            }

        },
        fieldType() {
            if (!this.field) {
                return;
            }

            return this.field.type;
        },
        inputType() {
            if (!this.comparator) {
                return;
            }

            var inputType = this.comparator.inputType;

            switch (inputType) {
                case 'none':
                case 'range':
                case 'daterange':
                case 'daterelative':

                    // If it's specified it's a number
                case 'integer':
                case 'decimal':
                case 'float':
                case 'number':
                    // Keep it the same as specified
                    break;
                case 'array':
                    switch (this.fieldType) {
                        case 'reference':
                            inputType = 'multireference';
                            break;
                    }
                    break;
                default:

                    inputType = 'normal';
                    switch (this.fieldType) {
                        case 'reference':
                        case 'boolean':
                        case 'date':
                            inputType = this.fieldType;
                            break;
                        case 'integer':
                        case 'decimal':
                        case 'float':
                        case 'number':
                            inputType = 'number';
                            break;
                    }
                    break;
            }

            return inputType;
        },
        comparator() {
            return this.comparatorLookup[this.model.comparator];
        },
        comparatorLookup() {
            return this.comparators.hash;
        },
        comparatorOptions() {
            if (!this.fieldType) {
                return [];
            }

            var relevantComparators = this.comparators.available[this.fieldType] || [];
            var options = relevantComparators.map(function(entry) {
                return {
                    title: entry.title,
                    value: entry.operator,
                }
            })

            return options;

        },

        comparatorField() {
            return {
                minimum: 1,
                maximum: 1,
                options: this.comparatorOptions,
            }
        },
        referenceType() {
            if (!this.field) {
                return;
            }

            return this.field.referenceType;
        },
        relativeNumberField() {
            return {
                type: 'integer',
                maximum: 1,
                minimum: 1,
                placeholder: '0',
            }
        },
        relativePeriodField() {
            return {
                type: 'string',
                maximum: 1,
                minimum: 1,
                widget: 'select',
                options: [{
                        title: 'Minutes',
                        value: 'minutes',
                    },
                    {
                        title: 'Hours',
                        value: 'hours',
                    },
                    {
                        title: 'Days',
                        value: 'days',
                    },
                    {
                        title: 'Weeks',
                        value: 'weeks',
                    },
                    {
                        title: 'Months',
                        value: 'months',
                    },
                    {
                        title: 'Years',
                        value: 'years',
                    }
                ]
            }
        },
        inputPlaceholder() {
            switch (this.model.comparator) {
                case 'valuesgreater':
                case 'valuesgreaterequal':
                case 'valueslesser':
                case 'valueslesserequal':
                    return '0'
                    break;
            }
            return this.field.title;
        },
        dateField() {
            return {
                type: this.fieldType,
                maximum: 1,
                minimum: 1,
                placeholder: this.inputPlaceholder,
            }
        },
        multiOptionsField() {
            return {
                // title:`Select ${this.field.title}`,
                options: this.field.options,
                widget: 'select',
                type: this.fieldType,
                maximum: 0,
                minimum: 1,
                placeholder: this.inputPlaceholder,
                sorted:true,
            }
        },
        singleOptionsField() {
            return {
                title: `Select ${this.field.title}`,
                options: this.field.options,
                widget: 'select',
                type: this.fieldType,
                maximum: 1,
                minimum: 0,
                placeholder: this.inputPlaceholder,
                sorted:true,
            }
        },
        normalField() {

            const settings = {}
            const extras = {}
            extras.currency = this.field?.currency;
            extras.syntax = this.field?.syntax;

            return Object.assign(settings, {
                type: this.fieldType,
                maximum: 1,
                minimum: 1,
                placeholder: this.inputPlaceholder,
                widget: this.fieldWidget,
            }, extras);

        },
        arrayField() {
            return {
                title: this.field.title,
                type: this.fieldType,
                maximum: 0,
                minimum: 1,
            }
        },
        singleReferenceField() {
            return {
                type: 'reference',
                referenceType: this.referenceType,
                maximum: 1,
                minimum: 1,
                create: false,
                list: false,
            }
        },
        multiReferenceField() {
            return {
                type: 'reference',
                referenceType: this.referenceType,
                maximum: 0,
                minimum: 1,
                create: false,
                list: false,
            }
        },
    },
    methods: {},

    components: {
        TextField,
        CurrencyField,
        DateField,
        NativeSelect,
        ContentSelect,
    },
}
</script>
<style lang="scss">
.filter-condition {
    padding: 0.2em;
    border-radius: 0.3em;
    background: #fff;
    border: 1px solid rgba(#000, 0.1);
    margin: 0.5em;
}
</style>