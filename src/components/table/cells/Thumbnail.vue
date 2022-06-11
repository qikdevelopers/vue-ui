<template>
	<td class="table-image-cell">
		<template v-if="type == 'image' || type == 'video'">
			<ux-image :item="row" :type="type" :width="50"/>
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

	.ux-image {
		border-radius:0.1em;
	}
}


</style>