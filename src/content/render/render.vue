<template>
    <div class="ux-render" :class="renderClass">
        <slot name="render" :fields="fields">
            <ux-field-render :field="field" v-model="model" :parentModel="parentModel || model" :key="`ux-render-field-${field.key}-${index}`" :class="fieldClass" v-for="(field, index) in renderFields" />
        </slot>
    </div>
</template>
<script>
import UXFieldRender from './field.vue';

export default {
    props: {
        parentModel: {
            type: Object,
        },
        fields: {
            type: Array,
            default () {
                return []
            }
        },
        modelValue: {
            type: Object,
            default () {
                return {}
            }
        },
        flex: {
            type: Boolean,
            default: false,
        },
    },
    watch: {
        modelValue(val, old) {
            this.model = val;
        },
    },
    data() {
        return {
            model: this.modelValue,
        }
    },
    components: {
        UxFieldRender: UXFieldRender,
    },
    computed: {
        renderClass() {
            var array = [];

            if (this.flex) {
                array.push('ux-render-flex');
            }
            return array;
        },

        fieldClass() {
            var array = [];

            if (this.flex) {
                array.push('ux-field-render-flex');
            }
            return array;
        },
        renderFields() {
            return this.fields;
        }
    }
}
</script>
<style lang="scss" scoped>
.ux-render-flex {
    display: flex;
    flex: 1;
    gap: 2em;

    .ux-field-render-flex {
        flex: 1;
        // display: flex;
        // align-items: flex-end;

        // & > .ux-field {
        // flex:1;
        // }
    }
}
</style>