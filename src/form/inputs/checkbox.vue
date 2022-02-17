<template>
    <label class="ux-field-title" v-if="showLabel">
        <input class="ux-field-focus" type="checkbox" v-model="model" /> {{label}}
    </label>
    <div class="ux-field-description" v-if="showDescription">{{description}}</div>
</template>
<script>

import FieldMixin from '../field-mixin';

export default {
    mixins: [FieldMixin],
    props: {
        modelValue: {
            type: Boolean,
            default () {
                return false;
            },
        },
    },
    data() {
        return {
            value: this.modelValue,
        }
    },
    watch: {
        modelValue(val, old) {
            this.value = this.val;
        }
    },
    computed: {
        defaultValue() {
            return false;
        },
        model: {
            get() {
                return this.value;
            },
            set(value) {
                this.value = !!value;
                this.$emit('update:modelValue', this.value);
            }
        }
    }
}
</script>
<style lang="scss" scoped>
</style>