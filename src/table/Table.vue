<template>
    <div class="table-wrapper">
        <div class="table-scroll" ref="scroll">
            <table>
                <thead>
                    <tr>
                        <th v-if="enableSelection" class="first shrink"></th>
                        <th @click="toggleSort(column)" v-for="column in renderColumns">
                            {{column.title}}
                        </th>
                        <th v-if="enableActions" class="last shrink"></th>
                    </tr>
                </thead>
                <tbody>

                    <table-row :enableSelection="enableSelection" :enableActions="enableActions" :key="row._id" @click:cell="clickCell" @click:row="clickRow" @click:select="clickSelect" @click:actions="clickActions" :selected="isSelected(row)" :row="row" :columns="columns" v-for="row in renderRows">
                    </table-row>
                    <!-- <tr :class="classes(row)" >
                    </tr> -->
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import TableRow from './TableRow.vue';
import TableCell from './TableCell.vue';

export default {
    components: {
        TableRow,
        TableCell,
    },
    watch:{
        rows() {
            this.$refs.scroll.scroll({
                top:0,
                left:0,
            });
        }
    },
    props: {
        selection: {
            type: Array,
            default () {
                return []
            }
        },
        columns: {
            type: Array,
            default () {
                return []
            }
        },
        rows: {
            type: Array,
            default () {
                return [];
            },
        },
        scrollable: {
            type: Boolean,
            default () {
                return true;
            }
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
    computed: {
        renderColumns() {
            return this.columns;
        },
        renderRows() {
            return this.rows;
        },
    },
    methods: {
        isSelected(row) {

            var self = this;
            var rowID = self.$qik.utils.id(row);
            return self.selection.some(function(r) {
                var rid = self.$qik.utils.id(r);
                return r == row || rid == rowID;
            });
        },
        classes(row) {
            let array = [];
            if (this.isSelected(row)) {
                array.push('selected');
            }
            return array;
        },

        toggleSort(column) {

        },
        clickRow(row) {
            this.$emit('click:row', row);
        },
        clickCell({row, column}) {
            this.$emit('click:cell', {row, column});
        },
        clickActions(row) {
            this.$emit('click:actions', row);
        },
        clickSelect(row) {
            this.$emit('click:select', row);
        },

    }
}
</script>
<style scoped lang="scss">
.table-wrapper {
    // box-sizing:border-box;
    display: flex;
    flex: 1;
    overflow: hidden;

    .table-scroll {
        overflow: auto;
        position: relative;
        width: 100%;
    }



    :deep(table) {
        width: 100%;
        border-collapse: collapse;

        thead {
            th {
                top: 0;
                position: sticky;
                text-transform: uppercase;
                letter-spacing: 0.05em;
                line-height: 20px;
                white-space: nowrap;
                font-size: 11px;
                padding: 0.5em;
                background: #fff;
                z-index: 2;
                text-align: left;
            }

            border-bottom: 1px solid rgba(#000, 0.05);

        }

        th.first,
        td.first {
            position: sticky;
            left: 0;
            // z-index: 1;
        }

        th.last,
        td.last {
            position: sticky;
            right: 0;
            // z-index: 1;
        }

        td,
        th {
            padding: 0.5em;
            &.shrink {
                width: 1px;
            }
        }
    }
}
</style>