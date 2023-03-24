<template>
    <td class="table-status-cell" :class="status">
        <div class="pill">{{status}}</div>
    </td>
</template>
<script>
import TableCellMixin from './TableCellMixin.js';

export default {
    mixins:[TableCellMixin],
    computed: {
        status() {
            return String(this.value).toLowerCase();
        },
    }
}
</script>
<style scoped lang="scss">
td {
    text-align:center;

    .pill {
        border-radius: 3em;
        padding:0.3em 0.6em;
        display: block;
        text-transform: uppercase;
        font-weight: bold;
        letter-spacing: 0.05em;
        font-size: 0.8em;
    background: #f1f1f1;
    color: #888;
}

    &.success,
    &.paid,
    &.active {
        .pill {
        background: #e0f3bf;
        color: #299933;
    }
    }

    &.pending {
        .pill {
        background: #fbecbb;
        color: #d17a0e;
    }
    }

    &.error,
    &.unpaid,
    &.failed {
        .pill {
        background: #ffdddd;
        color: #b14e4e;
    }
    }
}
</style>