<template>
    <tr :class="classes" class="table-row">
        <slot>
            <th v-if="enableSelection" class="table-cell first shrink" @click.stop.prevent="clickSelect(row)">
                <ux-checkbox :value="selected">
                </ux-checkbox>
            </th>
            <table-cell @click.stop.prevent="clickCell(column)" :column="column" :row="row" v-for="column in columns">
            </table-cell>
            <th v-if="enableActions" class="table-cell last shrink" @click.stop.prevent="clickActions(row)">
                <ux-button icon>
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
        row: {
            type: Object,
            required: true,
        },
        columns: {
            type: Array,
            required: true,
        },
        enableActions:{
            type:Boolean,
            default() {
                return false;
            },
        },
        enableSelection:{
            type:Boolean,
            default() {
                return true;
            },
        }
    },
    methods:{
        clickCell(column) {
            this.$emit('click:cell', {row:this.row, column});
            this.$emit('click:row', this.row);
        },
        clickActions() {
            this.$emit('click:actions', this.row);
            this.$emit('click:row', this.row);
        },
        clickSelect() {
            this.$emit('click:select', this.row);
            this.$emit('click:row', this.row);
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

tr {
	border-bottom: 1px solid rgba(#000, 0.05);
	&:last-of-type {
		border-bottom:none;
	}
}

tr:nth-child(odd) {
    background: rgba(#000, 0.02);
}

tr.selected {
    background: rgba(orange, 0.1);
}

</style>