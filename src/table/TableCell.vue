<template>
	<component v-if="component" :is="component" :column="column" :row="row" :value="value"/>
    <td v-else class="table-cell">
        {{value}}
    </td>
</template>
<script>

import _get from 'lodash/get';
import {defineAsyncComponent} from 'vue';

import ThumbnailCell from './cells/Thumbnail.vue';

export default {
	data() {
		return {
			component:null,
		}
	},
	async created() {
        var self = this;

        var component;

        ///////////////////////////////

        switch (this.column.renderer) {
            case 'thumbnail':
                // simple usage
                component = ThumbnailCell;
                break;
        }

        ///////////////////////////////

        this.component = component;
    },
	props:{
		column:{
			type:Object,
			required:true,
		},
		row:{
			type:Object,
			required:true,
		},
	},
	computed:{
		renderer() {
			return this.column.renderer;
		},
		value() {
			return _get(this.row, this.column.key);
		},
	}
}
</script>


<style scoped lang="scss">



</style>