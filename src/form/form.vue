<template>
    <div class="ux-form" :class="formClass">
        <slot name="form" :fields="fields">
            <ux-field :field="field" v-model="formModel" :class="fieldClass" :key="`ux-form-field-${field.key}-${index}`" v-for="(field, index) in renderFields" />
        </slot>
    </div>
</template>
<script>
import UXField from './field.vue';

export default {
    props: {
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
        }
    },
    watch: {
        modelValue(val, old) {
            this.model = val;
        }
    },
    data() {
        return {
            model: this.modelValue,
        }
    },
    components: {
        UxField: UXField,
    },
    computed: {
        formClass() {
            var array = [];

            if (this.flex) {
                array.push('ux-form-flex');
            }
            return array;
        },

        fieldClass() {
            var array = [];

            if (this.flex) {
                array.push('ux-field-flex');
            }
            return array;
        },
        formModel: {
            get() {
                return this.model;
            },
            set(value) {
                this.model = value;
                this.$emit('update:modelValue', this.model);
            },
        },
        renderFields() {
            return this.fields;
        }
    }
}
</script>
<style lang="scss" scoped>
.ux-form-flex {
    display: flex;
    flex: 1;

    .ux-field-flex {
        flex: 1;
        // display: flex;
        // align-items: flex-end;

        // & > .ux-field {
        // flex:1;
        // }
    }
}
</style>