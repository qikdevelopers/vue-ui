<template>
    <td class="table-title-cell" :class="status">
        <div class="title">{{value}}</div>
        <div class="subtitle" v-if="subtitle">{{subtitle}}</div>
    </td>
</template>
<script>
import TableCellMixin from './TableCellMixin.js';
import {DateTime} from 'luxon';

export default {
    mixins: [TableCellMixin],
    computed: {
        typeKey() {
            return this.row.meta?.type;
        },
        subtitle() {
            const self = this;
            const row = this.row;
            const subtitle = row.subtitle;
            const description = row.description;
            const metaDescription = row.meta?.description;
            const summary = subtitle || description || metaDescription;

            switch(this.typeKey) {
            case 'event':{

                    const startDate = row.startDate;
                    const endDate = row.endDate;

                    if(self.$sdk.date) {
                        if(summary) {
                            return `${summary} - ${self.$sdk.date.readableDateRange(startDate, endDate)}`;
                        } else {
                            return `${self.$sdk.date.readableDateRange(startDate, endDate)}`;
                        }
                    }
                }
                break;

            }

            return summary
        }
    }
}
</script>
<style scoped lang="scss">

td {
    line-height: 1.4em !important;
}

.title {
    font-weight: bold;
    font-size:1.1em
}

.subtitle {
    font-size: 0.9em;
    opacity: 0.5;
}
</style>