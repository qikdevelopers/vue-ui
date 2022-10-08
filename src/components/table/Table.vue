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
                        <th @click="toggleSort(column)" :class="[{sortable:column.sortable !== false, active:column.key === sorting?.key}, column.class]" v-for="column in renderColumns">
                            <flex-row gap vcenter><flex-cell>{{column.title}}</flex-cell><flex-cell class="caret" v-if="column.key === sorting?.key" shrink>{{currentSortDirection === 'asc' ? '▲' : '▼'}}</flex-cell></flex-row>
                        </th>
                        <th v-if="enableActions" class="last shrink">
                            <slot name="corner"></slot>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <table-row :enableSelection="enableSelection" :enableActions="enableActions" :key="row._id" @click:cell="clickCell" @click:row="clickRow" @click:select="clickSelect" @click:actions="clickActions" :selected="isSelected(row)" :row="row" :index="index" :columns="columns" v-for="(row, index) in renderRows" />
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
        },
        sort(s) {
            this.sorting = s;
        },
        sorting(s) {
            this.$emit('update:sort', s);
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
        sort:{
            type:Object,
            default() {
                return {
                    key:'title',
                    type:'string',
                    direction:'asc',
                }
            }
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
    data() {
        return {
            sorting:this.sort,
            lastSelectedIndex:null,
            shift:false,
            keyListenersAdded:false,
        }
    },
    mounted() {
        this.addKeyListeners()
    },
    activated() {
        this.addKeyListeners();
    },
    beforeUnmount() {
        this.removeKeyListeners()
    },
    deactivated() {
        this.removeKeyListeners();
    },
    computed: {
        currentSortDirection() {
            return this.sorting?.direction || 'asc';
        },
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
        keyDown(event) {
            if(event.keyCode == 16) {
                this.shift = true;
            }
        },
        keyUp(event) {
            if(event.keyCode == 16) {
                this.shift = false;
           }
        },
        addKeyListeners() {

            if (this.keyListenersAdded) {
                return;
            }
            window.addEventListener('keydown', this.keyDown, true)
            window.addEventListener('keyup', this.keyUp, true)
            this.keyListenersAdded = true;
        },
        removeKeyListeners() {
            if (!this.keyListenersAdded) {
                return;
            }
            window.removeEventListener('keydown', this.keyDown, true)
            window.removeEventListener('keyup', this.keyUp, true)
            this.keyListenersAdded = false;
        },
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
        selectRange(start, end) {
            const self = this;
            const startIndex = Math.min(start, end);
            const endIndex = Math.max(start, end)+1;

            var targetRows = self.renderRows.slice(startIndex, endIndex);
            self.$emit('select:multiple', targetRows);
        },
        toggleSort(column) {

            const currentKey = this.sorting?.key;
            const currentDirection = this.sorting?.direction || 'asc';

            let {key, direction} = column;

            if(key === currentKey) {
                direction = currentDirection === 'dsc' ? 'asc' : 'dsc';
            }

            this.sorting = {
                key,
                direction,
                type:column.type,
            }
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
        clickSelect(row, index) {
            // console.log('CLICK SELECT', index, row);
            
            const currentSelectedIndex = this.lastSelectedIndex;

            if(this.shift) {
                if(currentSelectedIndex != index) {
                    console.log('FROM', currentSelectedIndex, '-', index);
                    return this.selectRange(currentSelectedIndex, index);
                }
            }
            this.lastSelectedIndex = index;
            this.$emit('select:row:toggle', row);
        },

    }
}
</script>
<style scoped lang="scss">
.table-wrapper {
    // box-sizing:border-box;
    // 
    background: var(--lightbg, #fff);
    @media (prefers-color-scheme: dark) {
        background: var(--darkbg, #111);
        color: var(--darkfg, #eee);
    }
    
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
                z-index: 2;
                text-align: left;
                border-bottom: 1px solid rgba(#000, 0.05);


                background: var(--lightbg, #fff);
                @media (prefers-color-scheme: dark) {
                    background: var(--darkbg, #111);
                }


                .caret {
                    opacity: 0.5;
                }

                &:before {
                    content:'';
                    display: none;
                    background:rgba(#000, 0.05);
                    position: absolute;
                    width:100%;
                    height: 100%;
                    left:0;
                    top:0;
                }

                &.table-select {
                    font-size: clamp(17px, 1em, 20px);
                    z-index: 3;
                }

                &.sortable {
                    cursor: pointer;

                    &:hover {
                        &:before {
                            display: block;
                        }
                    }
                }

                &.active {

                    &:before {
                            display: block;
                        }
                    
                }
            }

            

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

        tr:nth-child(even) {
           
            background: var(--lightshade, #fff);
                @media (prefers-color-scheme: dark) {
                    background: var(--darkshade, #222);
                }


            th.first,
            td.first,
            th.last,
            td.last {
                background: var(--lightshade, #fff);
                @media (prefers-color-scheme: dark) {
                    background: var(--darkshade, #222);
                }
            }
        }

        tr:nth-child(odd) {

            th.first,
            td.first,
            th.last,
            td.last {
                background: var(--lightbg, #fff);
                @media (prefers-color-scheme: dark) {
                    background: var(--darkbg, #111);
                }
                
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