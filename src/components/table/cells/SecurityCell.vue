<template>
    <td class="table-security-cell" :class="security">
        <ux-icon :icon="public ? `fa-lock-open` : `fa-lock`"/>
    </td>
</template>
<script>
import TableCellMixin from './TableCellMixin.js';

export default {
    mixins:[TableCellMixin],
    computed: {
        public() {
            return this.security === 'public';
        },
        security() {
            return this.value || 'secure';
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