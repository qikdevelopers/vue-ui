<template>
	<td class="table-date-cell">
		{{readable}}
    </td>
</template>
<script>

import TableCellMixin from './TableCellMixin.js';
import {DateTime} from 'luxon';

export default {
	mixins:[TableCellMixin],
	computed:{
		readable() {
			return DateTime.fromISO(this.value).toFormat('h:mm a - dd MMM yyyy');
		},
	}
}
</script>


<style scoped lang="scss">

td {
	white-space: nowrap;
}

</style>