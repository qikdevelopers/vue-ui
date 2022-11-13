<template>
    <td class="table-currency-cell" :class="{credit, empty, debit}">
        {{string}}
    </td>
</template>
<script>
import TableCellMixin from './TableCellMixin.js';

export default {
    mixins:[TableCellMixin],
    computed: {
        string() {
            return this.amount.toFixed(2);
            // return this.$sdk.utils.formatCurrency(this.amount, this.currency);
        },
        amount() {
            return Number(parseInt(this.value) / 100);
        },
        credit() {
            return this.amount > 0;
        },
        debit() {
            return this.amount < 0;
        },
        empty() {
            return parseInt(this.value) === 0;
        },
        currency() {
            return this.column.currency || this.row.currency;
        },
    }
}
</script>
<style scoped lang="scss">
td {
    text-align:center;

    &.credit {
        
    }

    &.debit {
    }

    &.empty {
        opacity: 0.3;
    }
}
</style>