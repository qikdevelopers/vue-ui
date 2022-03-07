<template>
    <div class="filter-rule">
        <div class="top">
            <flex-row>
                <flex-cell>
                    Match <native-select v-model="model.operator" :field="operatorField">
                        {{summary}}
                    </native-select> of the following conditions
                </flex-cell>
                <flex-cell @click="$emit('remove')" shrink v-if="enableRemove">
                    <ux-button icon>
                        <ux-icon icon="fa-trash" />
                    </ux-button>
                </flex-cell>
            </flex-row>
        </div>
        <flex-row :key="`condition-${index}`" v-for="(filter, index) in model.filters">
            <flex-cell shrink v-if="index != 0">
                {{model.operator}}
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
                    fields:definedFields,
                }

                allFields.push(customFields);
            }

            var mapped = this.$qik.utils.mapFields(allFields);
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
    margin: 0.5em;
    border-radius: 0.5em;
    box-shadow: 0 0.1em 0.5em rgba(#000, 0.05);

    .top {
        .native-select {
            display: inline-block;
        }
    }
}
</style>