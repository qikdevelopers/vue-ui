<template>
    <div class="ux-field" @focusin="focus" @focusout="blur" v-if="visible" :class="classes">
        
        <template v-if="widget == 'checkbox'">
            <checkbox @touched="touch" :field="actualField" v-model="fieldModel" />
        </template>
        <template v-if="widget == 'switch'">
            <boolean-switch @touched="touch" :field="actualField" v-model="fieldModel" />
        </template>
        <template v-if="widget == 'upload'">
            <upload @touched="touch" :field="actualField" v-model="fieldModel" />
        </template>
        <template v-if="widget == 'group'">
            <template v-if="asObject">
                <field-group @form:state="groupStateAltered" ref="group" @touched="touch" :field="actualField" :parentModel="parentModel" v-model="fieldModel" />
            </template>
            <template v-else>
                <field-group @form:state="groupStateAltered" ref="group" @touched="touch" :field="actualField" :parentModel="parentModel" v-model="sourceModel" />
            </template>
        </template>
        <template v-if="widget == 'select'">
            <native-select @touched="touch" :field="actualField" v-model="fieldModel" />
        </template>
        <template v-if="widget == 'buttons'">
            <button-select @touched="touch" :field="actualField" v-model="fieldModel" />
        </template>
        <template v-if="widget == 'textfield'">
            <text-field @touched="touch" :field="actualField" v-model="fieldModel" />
        </template>
        <template v-if="widget == 'currency'">
            <currency-field @touched="touch" :field="actualField" v-model="fieldModel" />
        </template>
        <template v-if="widget == 'datefield'">
            <date-field @touched="touch" :field="actualField" v-model="fieldModel" />
        </template>
        <template v-if="widget == 'content-select'">
            <content-select @touched="touch" :field="actualField" v-model="fieldModel" />
        </template>
        <template v-if="widget == 'richtext'">
            <text-area @touched="touch" :field="actualField" v-model="fieldModel" />
        </template>
        <template v-if="widget == 'longtext'">
            <text-area @touched="touch" :field="actualField" v-model="fieldModel" />
        </template>
        <template v-if="widget == 'timezone'">
            <timezone-select @touched="touch" :field="actualField" v-model="fieldModel" />
        </template>
        <template v-if="widget == 'phone'">
            <phone-number-input @touched="touch" :field="actualField" v-model="fieldModel" />
        </template>
        <template v-if="widget == 'value'">
        </template>
        <div v-if="error && validateResults.message" class="ux-field-message">
            {{validateResults.message}}
        </div>
    </div>
</template>
<script>
//Inputs
import PhoneNumberInput from './inputs/phone-number-input.vue';
import TimezoneSelect from './inputs/timezone.vue';
import ContentSelect from './inputs/content-select.vue';
import CurrencyField from './inputs/currency.vue';
import TextField from './inputs/textfield.vue';
import TextArea from './inputs/textarea.vue';
import DateField from './inputs/datefield.vue';
import Checkbox from './inputs/checkbox.vue';
import Switch from './inputs/switch.vue';
import Upload from './inputs/upload/upload.vue';
import FieldGroup from './inputs/group.vue';
import NativeSelect from './inputs/select.vue';
import ButtonSelect from './inputs/button-select.vue';

////////////////

import Expressions from './expressions';
import getDefaultValue from './getDefaultValue';
import parseBoolean from './parseBoolean';

////////////////////////////////////////

function computedExpression(key) {
    return function() {
        var self = this;
        if (!self.expressions) {
            return;
        }

        let expression = self.expressions[key];
        if (!expression) {
            return;
        }

        let context = self.expressionsContext;
        return Expressions.evaluateExpression(expression, context);
    }
}


export default {
    components: {
        ButtonSelect,
        NativeSelect,
        DateField,
        TextField,
        CurrencyField,
        TextArea,
        Checkbox,
        BooleanSwitch: Switch,
        FieldGroup,
        ContentSelect,
        TimezoneSelect,
        PhoneNumberInput,
        Upload,
    },
    props: {
        field: {
            type: Object,
            required: true,
        },
        parentModel: {
            type: Object,
        },
        modelValue: {
            type: Object,
            required: true,
        },
    },
    data() {


        return {
            defaultValue: null,
            model: this.modelValue,
            touched: false,
            focussed: false,
            validateResults: { valid: true },
            mounted: false,
            subFormState: {},
        }
    },
    created() {


        // if (this.visible) {
        var currentValue = this.fieldModel;
        var defaultValue = currentValue || this.expressions && this.expressions.defaultValue ? this.getExpressionDefaultValue : getDefaultValue(this.actualField);
        if (!currentValue) {
            currentValue = defaultValue;
        }
        // }

        var cleaned = this.cleanInput(currentValue)
        if (this.fieldModel != cleaned) {
            this.fieldModel = cleaned;
        }

        // console.log('FIELD VALUE', this.key, this.fieldModel);

    },
    mounted() {
        this.mounted = true;
    },
    beforeUnmount() {
        this.mounted = false;
    },
    methods: {
        groupStateAltered(details) {
            this.subFormState = details;
        },
        focus() {
            this.focussed = true;
        },
        blur() {
            this.focussed = false;
            if (this.expressions && this.expressions.value) {
                //Reset the value after we blur out
                this.fieldModel = this.getExpressionValue;
            }
        },
        reset() {
            // var defaultValue = this.expressions && this.expressions.defaultValue ? this.getExpressionDefaultValue : getDefaultValue(this.actualField);
            // this.fieldModel = defaultValue;
            this.touched = false;
        },
        touch() {
            this.touched = true;
        },
        cleanInput(val) {
            return val;
        },
        cleanOutput(val) {
            return val;
        }
    },
    watch: {
        mounted(val) {
            if (val) {
                this.$emit('field:mount', this);
            } else {
                this.$emit('field:unmount', this);
            }
        },
        visible(now) {
            //Remove and clear all data
            if (!now) {
                this.fieldModel = undefined;
            } else {
                this.reset();
            }
        },
        focussed(val) {
            if (val) {
                this.$emit('field:focus', this);
            } else {
                this.$emit('field:blur', this);
            }
        },
        invalid(val) {
            this.$emit('field:invalid', this);
        },
        valid(val) {
            this.$emit('field:valid', this);
        },
        error(val) {
            this.$emit('field:error', this);
        },
        touched(val) {
            this.$emit('field:touched', this);
        },
        dirty(val) {
            this.$emit('field:dirty', this);
        },
        changeString(v) {
            this.validateResults = this.$qik.content.validateField(this.fieldModel, this.actualField);
        },
        modelValue(val, old) {
            this.model = val;
        },
        getExpressionHide(result) {

        },
        getExpressionDefaultValue(result) {
            if (!this.touched) {
                this.fieldModel = result;
            }

        },
        getExpressionValue(result) {
            this.fieldModel = result;
        },
    },
    computed: {
        title() {
            return this.field.title;
        },
        actualField() {

            var field = this.field;
            if (this.getExpressionRequired) {
                return Object.assign({}, field, { minimum: 1 });
            }

            return field;
        },
        changeString() {
            return `${JSON.stringify(this.fieldModel)}-${this.actualField.minimum}`;
        },
        valid() {
            return !this.invalid;
        },
        error() {
            return !this.focussed && this.touched && this.invalid;
        },
        invalid() {
            //Check the subform
            var invalidSubForm = this.subFormState && this.subFormState.invalid;
            if (invalidSubForm) {

                return { invalidSubForm: this.subFormState, mounted: this.mounted };
            }

            //Check if our validator says this field is valid
            var isInvalid = !this.validateResults.valid;
            // if (isInvalid) {

            // }



            return isInvalid;
        },
        dirty() {
            if (typeof this.fieldModel === 'undefined') {
                return false;
            }

            if (this.multiValue) {
                if (!this.fieldModel || !this.fieldModel.length) {
                    return false;
                }
            }

            if (this.fieldModel == '') {
                return false;
            }



            return true;
        },
        getExpressionHide() {
            if (!this.expressions) {
                return;
            }

            let showExpression = this.expressions.show;
            let hideExpression = this.expressions.hide;
            let context = this.expressionsContext;

            if (showExpression) {
                return !!!Expressions.evaluateExpression(showExpression, context);
            } else if (hideExpression) {
                return Expressions.evaluateExpression(hideExpression, context);
            }
        },
        getExpressionRequired: computedExpression('required'),
        getExpressionDefaultValue: computedExpression('defaultValue'),
        getExpressionValue: computedExpression('value'),
        expressions() {
            return this.field.expressions;
        },
        expressionsContext() {
            return {
                this: this.model,
                model: this.model,
                data: this.parentModel,
            }
        },
        hidden() {
            if (this.actualField.readOnly) {
                return true;
            }
            return this.getExpressionHide;
        },
        visible() {
            return this.mounted && !this.hidden;
        },
        type() {
            return this.actualField.type || 'string';
        },
        key() {
            return this.actualField.key;
        },
        isGroup() {
            return this.type === 'group'
        },
        asObject() {
            return this.isGroup && this.actualField.asObject;
        },
        layoutGroup() {
            return this.isGroup && !this.actualField.asObject;
        },
        fieldModel: {
            get() {

                return this.cleanOutput(this.model[this.key]);
            },
            set(value) {
                this.model[this.key] = this.cleanInput(value);
                this.$emit('update:modelValue', this.model);
            }
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
        classes() {
            var array = [];
            array.push(`ux-field-${this.type}`)

            if (this.layoutGroup) {
                array.push('ux-layout-only');
            }

            if (this.touched) {
                array.push('ux-field-touched');
            }

            if (this.dirty) {
                array.push('ux-field-dirty');
            }

            if (this.valid) {
                array.push('ux-field-valid');
            }

            if (this.invalid) {
                array.push('ux-field-invalid');
            }

            if (this.error) {
                array.push('ux-field-error');
            }

            return array;
        },
        widget() {

            //We're a group
            if (this.type == 'group') {
                return this.type;
            }

            //Get the widget
            var widget = this.actualField.widget;

            ///////////////////////////////


            ///////////////////////////////

            switch (widget) {
                case 'content-select':
                case 'select':
                case 'checkbox':
                case 'datefield':
                case 'richtext':
                case 'longtext':
                case 'buttons':
                case 'switch':
                case 'email':
                case 'url':

                case 'currency':

                case 'timezone':
                case 'country':
                case 'typeselect':
                case 'upload':
                    break;
                case 'phone':
                case 'phonenumber':
                    return 'phone'
                    break;

                default:
                    switch (this.type) {
                        case 'date':
                            widget = 'datefield';
                            break;
                        case 'reference':
                            widget = 'content-select';
                            break;
                        case 'boolean':
                            widget = 'checkbox';
                            break;
                        default:
                        case 'string':
                            widget = 'textfield';
                            break;
                    }
                    break;
            }

            return widget;

        },
    },

}
</script>
<style lang="scss" scoped>
.ux-field {
    margin-bottom: 1.5em;

    &.ux-layout-only {
        margin-bottom: 0;
    }

    .ux-field-message {
        border: red;
        background: rgba(red, 0.1);
        color: red;
        font-size: 0.7em;
        padding: 0.3em 0.5em;
        border-radius: 0 1em 1em;
        margin: 0.3em 0;
        display: inline-block;
    }

    // &.ux-field-error {
    // .ux-field-message {
    // visibility: visible;
    // }
    // }



}



:deep(.ux-field-title) {
    // .ux-field-title {
    margin-top: 0.5em;
    display: block;
    margin-bottom: 0.2em;
    font-size: 0.9em;
    font-weight: bold;
}


:deep(.ux-field-description) {
    // .ux-field-description {
    font-size: 0.8em;
    opacity: 0.5;
    margin-bottom: 0.5em;

}

.ux-field.ux-field-error> :deep(.ux-field-title) {
    color: red;
}

:deep(.ux-form-flex .ux-field-description) {
    // min-height: 2.6em;
}
</style>