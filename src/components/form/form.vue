<template>
    <div class="ux-form" :class="formClass">
        <slot name="fields" :fields="renderFields" :hash="fieldHash">
            <ux-field ref="field" :submission="submission" @field:mount="fieldMounted" @field:unmount="fieldUnmounted" @field:dirty="fieldDirty" @field:invalid="fieldInvalid" @field:valid="fieldValid" @field:error="fieldError" @field:focus="fieldFocus" @field:blur="fieldBlur" @field:touched="fieldTouch" :field="field" v-model="formModel" :parentModel="parentModel || formModel" :class="fieldClass" :key="`ux-form-field-${field.key}-${index}`" v-for="(field, index) in renderFields" />
        </slot>
    </div>
</template>
<script>
import UXField from './field.vue';
import debounce from 'lodash/debounce';
import {computed} from 'vue';
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
        submission:{
            type:Boolean,
            default:false,
        }
    },
    watch: {
        modelValue(val, old) {
            this.model = val;
        },
    },
    data() {
        return {
            mounted: false,
            model: this.modelValue,
            touched: false,
            invalid: false,
            error: false,
            dirty: false,
            focussed: false,
            childFormElements:[],
        }
    },
    provide() {
        const parentFormElement = this.parentFormElement || this;
        return {
            parentFormElement,
            // :computed(() => parentFormElement),
        }
    },
    inject:['parentFormElement'],
    mounted() {
        const self = this;
        self.mounted = true;
    },
    beforeUnmount() {
        const self = this;
        self.mounted = false;
    },

   
    methods: {
        touch() {  
            ;(this.childFormElements || []).forEach(function(field) {
                field.touch();
            })
            this.touched = true;
        },
        untouch() {
            ;(this.childFormElements || []).forEach(function(field) {
                field.untouch();
            })
            
            this.touched = false;
        },
        reset() {
            this.untouch();

            ;(this.childFormElements || []).forEach(function(field) {
                field.reset();
            })
            this.model = {}
        },
        fieldUnmounted(field) {
            this.fieldStateChange(field, 'unmount');
            this.$emit('field:unmount', this);
        },
        fieldMounted(field) {
            this.fieldStateChange(field, 'unmount');
            this.$emit('field:mount', this);
        },
        fieldDirty(field) {
            this.fieldStateChange(field, 'dirty');
            this.$emit('field:dirty', this);
        },
        fieldInvalid(field) {
            this.fieldStateChange(field, 'invalid');
            this.$emit('field:invalid', this);
        },
        fieldValid(field) {
            this.fieldStateChange(field, 'valid');
            this.$emit('field:valid', this);
        },
        fieldError(field) {
            this.fieldStateChange(field, 'error');
            this.$emit('field:error', this);
        },
        fieldFocus(field) {
            this.fieldStateChange(field, 'focus');
            this.$emit('field:focus', this);
        },
        fieldBlur(field) {
            this.fieldStateChange(field, 'blur');
            this.$emit('field:blur', this);
        },
        fieldTouch(field) {
            this.fieldStateChange(field, 'touch');
            this.$emit('field:touch', this);
        },
        fieldStateChange(triggerField, event) {
            var self = this;

            self.$nextTick(function() {
                var dirty = false;
                var invalid = false;
                var error = false;
                var touched = false;
                var focussed = false;
                var invalidFields = [];

                //If we are actually on the screen
                self.childFormElements.forEach(function(field) {

                    if (field.dirty) {
                        dirty = true;
                    }

                    if (field.invalid) {
                        invalid = true;
                        invalidFields.push({
                            title:field.field.title,
                            key:field.field.key,
                            message:field.invalidMessage,
                        });
                    }

                    if (field.error) {
                        error = true;
                    }

                    if (field.touched) {
                        touched = true;
                    }

                    if (field.focussed) {
                        focussed = true;
                    }
                });

                self.dirty = dirty;
                self.error = error;
                self.touched = touched;
                self.focussed = focussed;
                self.invalid = invalid;
                self.$emit('form:state', {
                    dirty,
                    error,
                    focussed,
                    touched,
                    invalid,
                    valid: !invalid,
                    invalidFields,
                });
            })


        },

    },
    components: {
        UxField: UXField,
    },
    computed: {
        fieldHash() {
            return this.renderFields.reduce(function(set,field) {

                if(!field) {
                    return set;
                }
                set[field.key] = field;
                return set;
            }, {});
        },
        valid() {
            return !this.invalid;
        },
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
            return this.fields.filter(Boolean);
        }
    }
}
</script>
<style lang="scss" scoped>
.ux-form-flex {
    display: flex;
    flex: 1;
    gap: 2em;

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