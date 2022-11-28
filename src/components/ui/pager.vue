<template>
    <flex-row center gap>
        <flex-cell shrink class="text">
            <native-select v-model="perPage" :field="perPageField">
                <template v-if="$device.breakpoint.xs">{{displayStartIndex}}-{{endIndex}} of {{total}}</template>
                <template v-else>Showing {{displayStartIndex}} to {{endIndex}} of {{total}} total</template>
            </native-select>
        </flex-cell>
        <flex-cell>
        </flex-cell>
        <flex-cell shrink v-if="totalPages > 1">
            <flex-row gap center>
                <flex-cell shrink class="text">
                    <native-select v-model="currentPage" :field="pageField">
                        <template v-if="$device.breakpoint.xs">{{currentPage}}/{{totalPages}}</template>
                        <template v-else>Page {{currentPage}} of {{totalPages}}</template>
                    </native-select>
                </flex-cell>
                <flex-cell shrink>
                    <ux-button icon @click="previousPage()">
                        <ux-icon icon="fa-arrow-left" />
                    </ux-button>
                </flex-cell>
                <flex-cell shrink>
                    <ux-button icon @click="nextPage()">
                        <ux-icon icon="fa-arrow-right" />
                    </ux-button>
                </flex-cell>
            </flex-row>
        </flex-cell>
    </flex-row>
</template>
<script>
import NativeSelect from '../form/inputs/select.vue';


export default {
    props: {
        total: {
            type: Number,
            default () {
                return 0;
            }
        },
        page: {
            type: Object,
            default () {
                return {
                    size: 50,
                    index: 1,
                }
            }
        },
    },
    components: {
        NativeSelect,
    },
    watch: {
        totalPages() {
            this.currentPage = 0;
        },
    },
    computed: {
        perPage: {
            get() {
                return this.pageModel.size;
            },
            set(i) {
                i = Math.max(i, 1);
                this.pageModel.size = i;
                this.dispatch();
            }

        },
        pageField() {
            return {
                type: 'integer',
                maximum: 1,
                minimum: 1,
                options: Array(this.totalPages).fill(1).map((x, y) => x + y),
            }
        },
        // total() {
        //     return this.dataSource.total;
        // },
        totalPages() {
            return Math.ceil(this.total / this.perPage)
        },
        startIndex() {
            return (this.currentPage - 1) * this.pageModel.size;
        },
        displayStartIndex() {
            return this.total ? this.startIndex + 1 : 0;
        },
        endIndex() {
            return Math.min(this.startIndex + this.pageModel.size, this.total);
        },
        currentPage: {
            get() {
                return this.pageModel.index;
            },
            set(index) {


                if (this.totalPages) {
                    index = Math.min(this.totalPages, index);
                }

                index = Math.max(index, 1);

                this.pageModel.index = index;
                this.dispatch();
            }
        },

    },
    methods: {
        dispatch() {
            return this.$emit('update:page', this.pageModel);
        },
        previousPage() {
            this.currentPage--;
        },
        nextPage() {
            this.currentPage++;
        },
    },
    data() {
        return {
            pageModel:this.page,
            perPageField: {
                minimum: 1,
                maximum: 1,
                options: [{
                        title: '50 per page',
                        value: 50,
                    },
                    {
                        title: '100 per page',
                        value: 100,
                    },
                    {
                        title: '250 per page',
                        value: 250,
                    },
                    {
                        title: '500 per page',
                        value: 500,
                    },
                ]
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.text {
    opacity: 0.5;
    font-size: 0.8em;
}
</style>