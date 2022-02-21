<template>
    <td class="table-cell">
        {{value}}
    </td>
</template>
<script>

import _get from 'lodash/get';

export default {
	components:{
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
		value() {
			return _get(this.row, this.column.key);
		}
	}
}
</script>


<style scoped lang="scss">

.table-cell {

}

</style>