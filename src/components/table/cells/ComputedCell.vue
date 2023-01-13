<template>
    <td class="table-computed-cell">
        <compile :template="this.column.code"/>
    </td>
</template>
<script>
import Compile from 'vue3-runtime-template';
import TableCellMixin from './TableCellMixin.js';

export default {
    components:{
        Compile
    },
    mixins:[TableCellMixin],
}
</script>
<style scoped lang="scss">
td {
}
</style>