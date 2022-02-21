<template>
    <div class="ux-field" v-if="visible" :class="classes">
        <template v-if="widget == 'checkbox'">
            <checkbox :field="field" v-model="fieldModel" />
        </template>
        <template v-if="widget == 'group'">
            <template v-if="asObject">
                <field-group :field="field" v-model="fieldModel" />
            </template>
            <template v-else>
                <field-group :field="field" v-model="sourceModel" />
            </template>
        </template>
        <template v-if="widget == 'textfield'">
            <textfield :field="field" v-model="fieldModel" />
        </template>
        <template v-if="widget == 'content-select'">
            <content-select :field="field" v-model="fieldModel" />
        </template>
    </div>
</template>
<script>
//Figure out how to recursively include
// import UXField from './field.vue';

import ContentSelect from './inputs/content-select.vue';
import Textfield from './inputs/textfield.vue';
import Checkbox from './inputs/checkbox.vue';
import FieldGroup from './inputs/group.vue';
import FieldMixin from './field-mixin';

export default {
    mixins: [FieldMixin],
    components: {
        Textfield,
        Checkbox,
        FieldGroup,
        ContentSelect,
    },
    props: {
        modelValue: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            model: this.modelValue,
        }
    },
    watch: {
        modelValue(val, old) {
            this.model = val;
        }
    },
    computed: {
        classes() {
            var array = [];
            return array;
        },
        sourceModel: {
            get() {
                return this.model;
            },
            set(value) {
                this.model = value;
                this.$emit('update:modelValue', this.model);
            }
        },
        fieldModel: {
            get() {
                return this.model[this.key];
            },
            set(value) {
                this.model[this.key] = value;
                this.$emit('update:modelValue', this.model);
            }
        },
        widget() {
            if (this.type == 'group') {
                return this.type;
            }

            var widget = this.field.widget;
            switch(this.field.widget) {
                case 'input':
                default:
                    switch(this.type) {
                        case 'reference':
                            return 'content-select';
                        break;
                        case 'boolean':
                            return 'checkbox';
                        break;
                        default:
                             return 'textfield';
                        break;
                    }
                break;
            }

            return widget || 'textfield';
        },
        hidden() {
            if (this.widget == 'value') {
                return true;
            }

            if(this.field.readOnly) {
                return true;
            }

            return false;
        },
        visible() {
            return !this.hidden;
        }
    }
}
</script>
<style lang="scss" scoped>
.ux-field {
    margin-bottom: 1.5em;

    &:last-child {
        margin-bottom: 0;
    }
}

:deep(.ux-field-title) {
// .ux-field-title {
    margin-top:0.5em;
    font-weight: 600;
    display: block;
    margin-bottom: 0.2em;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-size: 0.9em;
}


:deep(.ux-field-description) {
// .ux-field-description {
    font-size: 0.8em;
    opacity: 0.5;
    margin-bottom: 0.5em;
   
}

:deep(.ux-form-flex .ux-field-description) {
     min-height: 2.6em;
}

</style>