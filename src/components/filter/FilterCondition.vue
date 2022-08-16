<template>
    <div class="filter-condition" v-if="comparators">
        <flex-row>
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
                    <text-field :field="normalField" v-model="model.value" />
                    And
                    <text-field :field="normalField" v-model="model.value2" />
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
                    <input type="checkbox" v-model="model.value" />
                </div>
                <div v-if="inputType == 'none'">
                </div>
                <div v-if="inputType == 'number'">
                    <text-field :field="normalField" v-model="model.value" />
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
import NativeSelect from '../form/inputs/select.vue';

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
                        set.push({
                            title: entry.titles.join(' > '),
                            value: entry.path || entry.key,
                        })
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
            }
        },
        field() {
            return this.fieldHash[this.model.key];
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
        dateField() {
            return {
                type: this.fieldType,
                maximum: 1,
                minimum: 1,
                placeholder: this.field.title,
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
                placeholder: this.field.title,
            }
        },
        singleOptionsField() {
            return {
                title:`Select ${this.field.title}`,
                options: this.field.options,
                widget: 'select',
                type: this.fieldType,
                maximum: 1,
                minimum: 0,
                placeholder: this.field.title,
            }
        },
        normalField() {



            return {
                type: this.fieldType,
                maximum: 1,
                minimum: 1,
                placeholder: this.field.title,
            }

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
                referenceType:this.referenceType,
                maximum: 1,
                minimum: 1,
            }
        },
        multiReferenceField() {
            return {
                type: 'reference',
                referenceType:this.referenceType,
                maximum: 0,
                minimum: 1,
            }
        },
    },
    methods: {},

    components: {
        TextField,
        DateField,
        NativeSelect,
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