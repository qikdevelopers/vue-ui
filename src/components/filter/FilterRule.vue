<template>
    <div class="filter-rule">
        <div class="top">
            <flex-row>
                <flex-cell>
                    <div class="summary">
                        Match <native-select v-model="model.operator" :field="operatorField">
                            {{summary}}
                        </native-select> of the following conditions
                    </div>
                </flex-cell>
                <flex-cell @click="$emit('remove')" shrink v-if="enableRemove">
                    <ux-button size="sm" icon>
                        <ux-icon icon="fa-trash" />
                    </ux-button>
                </flex-cell>
            </flex-row>
        </div>
        <flex-row :key="`condition-${index}`" v-for="(filter, index) in model.filters">
            <flex-cell class="operator-cell" :class="[model.operator, {last:index == model.filters.length}]" vcenter shrink v-if="index != 0">
                <span class="line" />
                <div class="operator">{{model.operator}}</div>
            </flex-cell>
            <flex-cell>
                <filter-condition :enableRemove="model.filters.length > 1" :fields="fields" @remove="removeCondition(index)" v-model="model.filters[index]" />
            </flex-cell>
        </flex-row>
        <ux-button @click="addCondition">Add Condition</ux-button>
    </div>
</template>
<script>
import NativeSelect from '../form/inputs/select.vue';
import FilterCondition from './FilterCondition.vue';

import _debounce from 'lodash/debounce';

export default {
    props: {
        enableRemove: {
            type: Boolean,
        },
        definition: {
            type: Object,
            required: true,
            default () {
                return {}
            }
        },
        modelValue: {
            type: Object,
            default () {
                return {
                    operator: 'and',
                    filters: [],
                }
            }
        },
    },
    methods: {
        addCondition() {
            this.model.filters.push({

            });
        },
        removeCondition(index) {
            console.log('remove index', index)
            this.model.filters.splice(index, 1);
        },
    },
    data() {

        if (!this.modelValue.operator) {
            this.modelValue.operator = 'and';
        }

        if (!this.modelValue.filters) {
            this.modelValue.filters = [];
        }


        return {
            model: JSON.parse(JSON.stringify(this.modelValue)),
        }
    },

    watch: {
        modelValue(m) {
            if (m != this.model) {
                this.model = m; //JSON.parse(JSON.stringify(m));
            }
        },
        model: {
            handler: _debounce(function(v) {
                this.$emit('update:modelValue', v);
            }, 200),
            deep: true,
        }
    },
    computed: {
        summary() {
            switch (this.model.operator) {
                case 'or':
                    return `any`;
                    break;
                case 'nor':
                    return `none`;
                    break;
                default:
                    return `all`;
                    break;
            }
        },


        fields() {
            const self = this;
            var allFields = self.definition && self.definition.fields ? [...self.definition.fields] : [];
            var definedFields = self.definition && self.definition.definedFields ? self.definition.definedFields : [] || [];

            const isFormSubmission = self.definition.definesType === 'submission';

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
                        if(field.type === 'reference') {
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
                        title: `${self.definition.title}`,
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

            var mapped = self.$qik.utils.mapFields(allFields, {includeArrayDelimeter:true});
            return mapped;
        },
        operatorField() {
            return {
                minimum: 1,
                maximum: 1,
                options: [{
                        title: 'All',
                        value: 'and',

                    },
                    {
                        title: 'Any',
                        value: 'or',

                    },
                    {
                        title: 'None',
                        value: 'nor',

                    }
                ],
            }
        },
    },


    components: {
        FilterCondition,
        NativeSelect,
    },
}
</script>
<style lang="scss">
.filter-rule {
    padding: 0.5em;
    background: #fff;
    border: 1px solid rgba(#000, 0.1);
    border-radius: 0.5em;
    box-shadow: 0 0.1em 0.5em rgba(#000, 0.05);
    margin-bottom: 0.5em;


    .operator-cell {
        position: relative;

        &.and {
            .line {
                background: green;
            }

            .operator {
                background: green;
                color: #fff;
            }
        }

        &.or {
            .line {
                background: orange;
            }

            .operator {
                background: orange;
                color: #fff;
            }
        }

        &.nor {
            .line {
                background: #000;
            }

            .operator {
                background: #000;
                color: #fff;
            }
        }

        &.last {
            .line {
                background: #ff0066;
            }
        }
    }

    .line {
        position: absolute;
        width: 0.1em;
        display: block;
        height: 100%;
        left: 0.5em;
        top: 0;
        bottom: 0;
    }

    .operator {
        border-radius: 50%;
        position: relative;
        width: 3em;
        height: 0;
        overflow: hidden;
        padding: 0 0 3em;
        text-align: center;
        line-height: 3em;
        background: #111;
        color: #fff;
        font-size: 0.4em;
        text-transform: uppercase;
        font-weight: 600;
        display: block;
    }

    .summary {
        font-size: 0.8em;
        opacity: 0.5;

        .native-select {
            display: inline-block;
            border: 1px solid transparent;
            border-radius: 0.3em;
            padding: 0.2em;

            &:hover {
                background: #fff;
                border-color: $primary;
            }
        }
    }
}
</style>