<template>
	<td class="table-image-cell">
		<template v-if="type == 'image' || type == 'video'">
			<div class="image-wrapper">
			<ux-image :item="row" :type="type" :width="100" :height="100"/>
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
		type() {
			return this.row?.meta?.type
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
	}
	.ux-image {
		border-radius:0.1em;
	}
}


</style>