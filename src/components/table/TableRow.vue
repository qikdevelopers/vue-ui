<template>
    <tr :class="classes" class="table-row">
        <slot>
            <th v-if="enableSelection" class="table-cell table-select first shrink" @click.stop.prevent="clickSelect(row)">
                <ux-checkbox :value="selected">
                </ux-checkbox>
            </th>
            <table-cell :key="`${column.path || column.key}-${index}`" @click.stop.prevent="clickCell(column)" :column="column" :row="row" v-for="(column, index) in columns">
            </table-cell>
            <th v-if="enableActions" class="table-cell last shrink" @click.stop.prevent="clickActions(row)">
                <ux-button size="xs" icon>
                    <ux-icon icon="fa-ellipsis" />
                </ux-button>
            </th>
        </slot>
    </tr>
</template>
<script>
import TableCell from './TableCell.vue';

export default {
    components: {
        TableCell,
    },
    props: {
        selected: {
            type: Boolean,
        },
        index:{
            type:Number,
        },
        row: {
            type: Object,
            required: true,
        },
        columns: {
            type: Array,
            required: true,
        },
        enableActions: {
            type: Boolean,
            default () {
                return false;
            },
        },
        enableSelection: {
            type: Boolean,
            default () {
                return true;
            },
        }
    },
    methods: {
        clickCell(column) {
            this.$emit('click:cell', { row: this.row, column });
            this.$emit('click:row', this.row);
        },
        clickActions(row) {
            this.$emit('click:actions', row);
        },
        clickSelect(row) {

            const index = this.index;
            this.$emit('click:select', row, index);
            // this.$emit('click:row', this.row);
        },
    },
    computed: {
        classes() {
            var array = [];

            if (this.selected) {
                array.push('selected');
            }

            return array;
        }
    }
}
</script>
<style scoped lang="scss">

</style>