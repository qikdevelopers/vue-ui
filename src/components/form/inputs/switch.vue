<template>
    <flex-row @click="touch()" gap>
        <flex-cell vcenter shrink>
            <ux-switch :value="model" @click="model = !model" />
        </flex-cell>
        <flex-cell vcenter>
            <div>
                <label class="ux-field-title" v-if="showLabel">
                    {{label}} <span class="ux-required-marker" v-if="required">*</span>
                </label>
                <div class="ux-field-description" v-if="showDescription">{{description}}</div>
            </div>
        </flex-cell>
    </flex-row>
</template>
<script>
import InputMixin from './input-mixin';

export default {
    mixins: [InputMixin],
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
            this.value = val;
            this.model = val;

        }
    },
    computed: {
        longDescription() {
            return String(this.description).length > 2;
        },
        defaultValue() {
            return false;
        },
        model: {
            get() {
                return !!this.value;
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
.ux-checkbox {
    margin-right: 0.5em;
    line-height: 1;
    height: 1.5em;
    width: 1.5em;
    padding: 0;

    &:hover {
        border-color: $primary;
    }

    &.ux-checkbox-true {
        background: $primary;
        border-color: $primary;
        color: #fff;
    }
}

.ux-field-title {
    margin: 0 !important;
}

.ux-field-description-long {
    margin-top: 0.5em;
}
</style>