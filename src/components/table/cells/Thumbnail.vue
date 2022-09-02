<template>
	<!-- <pre>{{column}}</pre> -->
<!-- 	<pre>{{value}}</pre>
	<pre>{{row}}</pre> -->
	<td class="table-image-cell" >
		<template v-if="type == 'image' || type == 'video'">
			<div @click.stop.prevent="clicked(value)" class="image-wrapper">
			<ux-image :item="imageSource" :type="type" :width="100" :height="100"/>
		</div>
		</template>
		<template v-else>
			<ux-icon icon="fa-file"/>
		</template>
    </td>
</template>
<script>

import TableCellMixin from './TableCellMixin.js';

export default {
	mixins:[TableCellMixin],
	computed:{
		imageSource() {
			return (this.value && this.value._id) ? this.value : this.row;
		},
		type() {
			return this.imageSource?.meta?.type
		}
	},
	methods:{
	clicked(item) {
		this.$sdk.dispatch('item:view', this.imageSource);
	}
}
}
</script>


<style scoped lang="scss">

td {
	min-width:60px;
	width:60px;
	padding:0.3em !important;

	.image-wrapper {
		width:50px;
		height: 50px;
		cursor: pointer;
	}
	.ux-image {
		border-radius:0.1em;
	}
}


</style>