<template>
    <div class="table-wrapper">
        <div class="table-scroll">
            <table>
                <thead>
                    <tr>
                        <th class="first"></th>
                        <th @click="toggleSort(column)" v-for="column in renderColumns">
                            {{column.title}}
                        </th>
                        <th class="last"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="row in renderRows">
                        <th class="first"></th>
                        <table-cell :column="column" :row="row" v-for="column in renderColumns">
                        </table-cell>
                        <th class="last"></th>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import TableCell from './TableCell.vue';

export default {
    components: {
        TableCell,
    },
    props: {
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
        toggleSort(column) {

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
    	position:relative;
    	width:100%;
    }

    //    position:relative;
    //    margin: 0;
    //    height: 100%;

    table {
        width: 100%;
        border-collapse: collapse;

        thead {
        	th {
        		top:0;
        		position:sticky;
        		text-transform: uppercase;
        		letter-spacing: 0.05em;
        		line-height: 20px;
        		white-space: nowrap;
        		font-size: 11px;
        		padding:0.5em;
        		background: #fff;
        		z-index: 2;
        		text-align: left;
        	}

        }

        th.first,
        td.first {
        	position:sticky;
        	left: 0;
        	// z-index: 1;
        }

        th.last,
        td.last {
        	position:sticky;
        	right: 0;
        	// z-index: 1;
        }

        td,
        th {
        	padding:1em 0.5em;
        }

        tr:nth-child(odd) {
        	background: rgba(#000, 0.03);
        }


    }
}
</style>