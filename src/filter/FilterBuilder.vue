<template>
    <flex-column class="filter-builder">
    	<flex-body>
        <filter-rule :enableRemove="model.filters.length > 1" :key="`rule-${index}`" @remove="removeRule(index)" :definition="definition" v-model="model.filters[index]" :index="index" v-for="(rule, index) in model.filters" />
        <ux-button @click="addRule()">Add Rule</ux-button>
    </flex-body>
    </flex-column>
</template>
<script>
import FilterRule from './FilterRule.vue';

export default {
    components: {
        FilterRule,
    },
    methods:{

    	removeRule(index) {
    		this.model.filters.splice(index, 1);
    	},
    	addRule() {
    		this.model.filters.push({
    			operator:'and',
    			filters:[{

    			}],
    		})
    	}
    },
    props: {
    	definition:{
    		type:Object,
    		require:true,
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
            model: this.modelValue,
        }
    }
}
</script>
<style lang="scss">
	
.filter-builder {
	background: rgba(#000, 0.1);
	padding:0.3em;
}
</style>