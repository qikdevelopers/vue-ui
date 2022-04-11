<template>
    <flex-column class="filter-builder">
        <flex-body>
            <div class="filters">
            <div class="top" v-if="model.filters.length">
                <div class="summary">
                    Match <native-select v-model="model.operator" :field="operatorField">
                        {{summary}}
                    </native-select> of the following rules
                </div>
            </div>
            <!-- :enableRemove="model.filters.length > 1" -->
            <filter-rule  enableRemove :key="`rule-${index}`" @remove="removeRule(index)" :definition="definition" v-model="model.filters[index]" :index="index" v-for="(rule, index) in model.filters" />
            <ux-button @click="addRule()">Add Filter Rule</ux-button>
        </div>
        </flex-body>
    </flex-column>
</template>
<script>
import NativeSelect from '../form/inputs/select.vue';

import FilterRule from './FilterRule.vue';
import debounce from 'lodash/debounce';

export default {
    components: {
        FilterRule,
        NativeSelect,
    },
    methods: {
        removeRule(index) {
            this.model.filters.splice(index, 1);
        },
        addRule() {
            this.model.filters.push({
                operator: 'and',
                filters: [{

                }],
            })
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
    watch: {
        modelValue(v) {
            var currentString = JSON.stringify(this.model)
            var stringed = JSON.stringify(v);

            if (currentString != stringed) {
                this.model = JSON.parse(stringed)
            }
        },
        model: {
            handler: debounce(function(v) {
                this.$emit('update:modelValue', v);
            }, 300),
            deep: true,
        },
    },
    props: {
        definition: {
            type: Object,
            require: true,
        },
        modelValue: {
            type: Object,
            default () {
                return {
                    operator: 'and',
                    filters: [{
                        operator: 'and',
                        filters: [],
                    }],
                }
            }
        },
    },
    data() {
        return {
            model: JSON.parse(JSON.stringify(this.modelValue))
        }
    }
}
</script>
<style lang="scss" scoped>
.filter-builder {
    
    


    .summary {
        font-size: 0.8em;
        opacity: 0.8;
        padding:0.3em 0.7em;

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