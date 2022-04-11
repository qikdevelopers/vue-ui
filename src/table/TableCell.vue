<template>
    <component v-if="component" :is="component" :column="column" :row="row" :value="value" />
    <td v-else class="table-cell">
        <template v-if="multiValue">
            <template v-if="complex">
                <span class="value" v-for="entry in value">
                    <value-renderer :value="entry" />
                </span>
            </template>
            <template v-else>
                <span class="value" v-for="entry in value">
                    <value-renderer :value="entry" />, 
                </span>
            </template>
        </template>
        <template v-else>
            <value-renderer :value="value" />
        </template>


    </td>
</template>
<script>
import _get from 'lodash/get';
import { defineAsyncComponent } from 'vue';

import ThumbnailCell from './cells/Thumbnail.vue';
import ButtonCell from './cells/Button.vue';
import ValueRenderer from './cells/Value.vue';

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
        var self = this;

        var component;

        ///////////////////////////////

        switch (this.column.renderer) {
            case 'button':
            component = ButtonCell;
                break;
            case 'thumbnail':
                // simple usage
                component = ThumbnailCell;
                break;
        }

        ///////////////////////////////

        this.component = component;
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
            var v = _get(this.row, this.column.key);

            if(!v) {
                console.log(this.row, this.column.key)
            }

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
</style>