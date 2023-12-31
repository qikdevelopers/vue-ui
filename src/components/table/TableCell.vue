<template>


    <component v-if="component" :is="component" :column="column" :row="row" :value="value" />
    <td v-else class="table-cell" :class="{nowrap}">
        <template v-if="multiValue">
            <template v-if="complex">
                <span class="value" v-for="(entry, index) in value">
                    <value-renderer :type="column.type" multi :last="index === value.length-1" :value="entry" />
                </span>
            </template>
            <template v-else>
                <span class="value" v-for="(entry, index) in value">
                    <value-renderer :type="column.type" multi :last="index === value.length-1" :value="entry" />
                </span>
            </template>
        </template>
        <template v-else>
            <value-renderer :type="column.type" :value="value" />
        </template>
    </td>
</template>
<script>
import _get from 'lodash/get';
import { defineAsyncComponent } from 'vue';

import ThumbnailCell from './cells/Thumbnail.vue';
import CurrencyCell from './cells/Currency.vue';
import ButtonCell from './cells/Button.vue';
import DateCell from './cells/DateCell.vue';
import BooleanCell from './cells/BooleanCell.vue';
import SecurityCell from './cells/SecurityCell.vue';
import URLCell from './cells/URLCell.vue';
import ComputedCell from './cells/ComputedCell.vue';
import ValueRenderer from './cells/Value.vue';
import StatusCell from './cells/StatusCell.vue';
import TitleCell from './cells/TitleCell.vue';



function extract(row, path) {
    if (!row) {
        return;
    }

    if (!path) {
        return;
    }

    var pathValue = _get(row, path);
    if (pathValue) {
        return pathValue;
    }

    ///////////////////////////////


    var output;

    const pieces = path.split('.');
    const key = pieces.shift();
    const remainder = pieces.join('.');

    const stub = _get(row, key);
    if(Array.isArray(stub)) {
        return stub.map(function(r) {
            return extract(r, remainder);
        }).flat().filter(Boolean);
    } else {
        return extract(stub, remainder);
    }



}


export default {
    data() {
        return {
            component: null,
        }
    },
    components: {
        ValueRenderer,
    },
    async created() {
        const self = this;

        let component;

        ///////////////////////////////

        let cellType = self.column.type;
        let cellRenderer = self.column.renderer || self.column.widget;

        if(cellType == 'reference') {
            if(self.column.referenceType === 'image') {
                cellRenderer = 'thumbnail';
            }
        }

        ///////////////////////////////

        switch (cellRenderer) {
            case 'button':
                component = ButtonCell;
                break;
            case 'security':
                component = SecurityCell
            break;
            case 'boolean':
                component = BooleanCell
            break;
            case 'date':
            case 'datetime':
                component = DateCell;
                break;
            case 'title':
                component = TitleCell;
                break;
            case 'status':
                component = StatusCell
                break;
            case 'computed':
                component = ComputedCell
                break;
            case 'url':
                component = URLCell;
                break;
            case 'currency':
                component = CurrencyCell;
            break;
            case 'thumbnail':
                component = ThumbnailCell;
                break;
            default:
                switch (cellType) {
                    case 'date':
                        component = DateCell;
                        break;
                    case 'boolean':
                        component = BooleanCell;
                        break;
                    case 'url':
                        component = URLCell;
                        break;
                }
                break;
        }

        ///////////////////////////////

        self.component = component;
    },
    props: {
        column: {
            type: Object,
            required: true,
        },
        row: {
            type: Object,
            required: true,
        },
    },
    computed: {
        nowrap() {
            return this.column.wrap === false;
        },
        multiValue() {
            return Array.isArray(this.value);
        },
        complex() {
            if (this.multiValue) {

            } else {

            }
        },
        renderer() {
            return this.column.renderer;
        },
        renderValue() {

            var value = this.value;

            if (value === undefined || value === null) {
                return;
            }

            return value.title || value.name || value;
        },
        value() {
            var v = extract(this.row, this.column.key);
            return v;
        },
    }
}
</script>
<style scoped lang="scss">
.value {
    display: inline-block;
    margin: 0.05em;

}

.nowrap {
    white-space: nowrap;
}
</style>