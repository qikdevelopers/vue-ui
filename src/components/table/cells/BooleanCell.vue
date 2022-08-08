<template>
    <td class="table-boolean-cell" :class="{true:boolean, false:!boolean}">
        <ux-icon :icon="boolean ? `fa-check` : `fa-times`"/>
    </td>
</template>
<script>
import TableCellMixin from './TableCellMixin.js';

export default {
    mixins:[TableCellMixin],
    computed: {
        boolean() {
            return !!this.value;
        },
    }
}
</script>
<style scoped lang="scss">
td {
    text-align:center;

    &.true {
        
    }

    &.false {
        opacity:0.3;
    }
}
</style>