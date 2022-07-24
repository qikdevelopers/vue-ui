<template>
    <div class="table-wrapper">
        <div class="table-scroll" ref="scroll">
            <table>
                <thead>
                    <tr>
                        <th v-if="enableSelection" class="first table-select shrink">
                            <ux-menu>
                                <template #activator="{ on }">
                                    <ux-checkbox v-on="on" :value="pageSelected"></ux-checkbox>
                                </template>
                                <ux-list>
                                    <ux-list-item @click="selectPage()">
                                        Select Page
                                    </ux-list-item>
                                    <ux-list-item v-if="someSelectedOnPage" @click="deselectPage()">
                                        Deselect Page
                                    </ux-list-item>
                                    <ux-list-item v-if="selectAll" @click="selectAll()">
                                        Select All ({{total}})
                                    </ux-list-item>
                                    <ux-list-item v-if="deselectAll" @click="deselectAll()">
                                        Deselect All
                                    </ux-list-item>
                                </ux-list>
                            </ux-menu>
                        </th>
                        <th @click="toggleSort(column)" :class="column.class" v-for="column in renderColumns">
                            {{column.title}}
                        </th>
                        <th v-if="enableActions" class="last shrink">
                            <slot name="corner"></slot>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <table-row :enableSelection="enableSelection" :enableActions="enableActions" :key="row._id" @click:cell="clickCell" @click:row="clickRow" @click:select="clickSelect" @click:actions="clickActions" :selected="isSelected(row)" :row="row" :columns="columns" v-for="row in renderRows" />
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import TableRow from './TableRow.vue';
import TableCell from './TableCell.vue';

import RememberScrollMixin from '../mixins/RememberScroll.js';


export default {
    mixins: [RememberScrollMixin],
    components: {
        TableRow,
        TableCell,
    },
    watch: {
        rows() {
            this.$refs.scroll.scroll({
                top: 0,
                left: 0,
            });
        }
    },
    props: {
        total: {
            type: Number,
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
        },
        selection: {
            type: Array,
            default () {
                return []
            },
        },
        selectAll: {
            type: Function,
        },
        deselectAll: {
            type: Function,
        },
    },
    computed: {
        selectionHash() {
            var self = this;
            return self.selection.reduce(function(set, row) {
                var id = row._id || row.id;
                set[id] = row;
                return set;
            }, {})
        },
        pageSelected() {
            var self = this;

            if (!self.rows || !self.rows.length) {
                return;
            }

            //Check to see if any rows are not selected
            return !self.rows.some(function(row) {
                return !(self.selectionHash[row._id || row.id]);
            })
        },
        renderColumns() {
            return this.columns.map(function(column) {

                var col = Object.assign({}, column);

                col.class = [];
                if (col.shrink) {
                    col.class.push('shrink')
                }

                return col;
            });
        },
        renderRows() {
            return this.rows;
        },
        someSelectedOnPage() {
            return this.rows.some(this.isSelected);
        },
    },
    methods: {
        togglePage() {

            var self = this;


            if (self.pageSelected) {
                self.deselectPage();
            } else {
                self.selectPage();
            }
        },
        selectPage() {
            var self = this;
            self.$emit('select:multiple', self.rows);
        },
        deselectPage() {
            var self = this;
            self.$emit('deselect:multiple', self.rows);
        },

        isSelected(row) {

            var self = this;
            var rowID = row._id || row.id;
            return self.selection.some(function(r) {
                var rid = r._id || r.id;
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
        clickCell({ row, column }) {

            this.$emit('click:cell', { row, column });
        },
        clickActions(row) {
            this.$emit('click:actions', row);
        },
        clickSelect(row) {

            this.$emit('select:row:toggle', row);
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

                &.table-select {
                    font-size: clamp(17px, 1em, 20px);
                }
            }

            border-bottom: 1px solid rgba(#000, 0.05);

        }

        th.first,
        td.first {
            position: sticky;
            left: 0;
            // z-index: 1;
            text-align: center;
        }

        th.last,
        td.last {
            position: sticky;
            right: 0;
            // z-index: 1;
            text-align: center;
        }

        td,
        th {
            padding: 0.5em;
            font-size: clamp(17px, 1em, 20px);

            &.shrink {
                width: 1px;
            }
        }

        tr {
            border-bottom: 1px solid rgba(#000, 0.05);

            &:last-of-type {
                border-bottom: none;
            }
        }

        tr:nth-child(odd) {
            background: darken(#fff, 1%);

            th.first,
            td.first,
            th.last,
            td.last {
                background: darken(#fff, 1%);
            }
        }

        tr:nth-child(even) {

            th.first,
            td.first,
            th.last,
            td.last {
                background: #fff;
            }
        }

        tbody {
            tr.selected {

                &,
                th.first,
                td.first,
                th.last,
                td.last {
                    background: #fbf6eb;
                    color: #8c5732;
                }
            }

            tr:hover {
                &,
                th.first,
                td.first,
                th.last,
                td.last {
                    color: #328c8c;
                    background: #ebfbfb;
                }
            }
        }
    }
}
</style>