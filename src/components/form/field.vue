<template>
    <div class="ux-field" @focusin="focus" @focusout="blur" v-if="visible" :class="classes">
        <template v-if="widget == 'internal-route'">
            <internal-route-select @touched="touch" :field="actualField" v-model="fieldModel" />
        </template>
        <template v-if="widget == 'internal-menu'">
            <internal-menu-select @touched="touch" :field="actualField" v-model="fieldModel" />
        </template>
        <template v-if="widget == 'html'">
            <custom-html @touched="touch" :field="actualField" v-model="fieldModel" />
        </template>
        <template v-if="widget == 'value'">
            <!-- Value in here -->
        </template>
        <template v-if="widget == 'filter'">
            <filter-input @touched="touch" :field="actualField" v-model="fieldModel" />
        </template>
        <template v-if="widget == 'checkbox'">
            <checkbox @touched="touch" :field="actualField" v-model="fieldModel" />
        </template>
        <template v-if="widget == 'switch'">
            <boolean-switch @touched="touch" :field="actualField" v-model="fieldModel" />
        </template>
        <template v-if="widget == 'upload'">
            <upload  @touched="touch" :field="actualField" v-model="fieldModel" />
        </template>
        <template v-if="widget == 'group'">
            <template v-if="asObject">
                <field-group :trail="currentTrail" :paymentConfiguration="paymentConfiguration" :includeOfficeOnly="includeOfficeOnly" :submission="submission" :sandbox="sandbox" @form:state="groupStateAltered" ref="group" @touched="touch" :field="actualField" :parentModel="parentModel" v-model="fieldModel" />
            </template>
            <template v-else>
                <field-group :trail="trail" :paymentConfiguration="paymentConfiguration"  :includeOfficeOnly="includeOfficeOnly" :submission="submission" :sandbox="sandbox" @form:state="groupStateAltered" ref="group" @touched="touch" :field="actualField" :parentModel="parentModel" v-model="sourceModel" />
            </template>
        </template>
        <template v-if="widget == 'form'">
            <field-group :trail="currentTrail" :paymentConfiguration="paymentConfiguration"  :includeOfficeOnly="includeOfficeOnly" :submission="submission" :sandbox="sandbox" @form:state="groupStateAltered" ref="group" @touched="touch" :field="actualField" :parentModel="parentModel" v-model="fieldModel" />
        </template>
        <template v-if="widget == 'field-select'">
            <field-select @touched="touch" :field="actualField" v-model="fieldModel"/>
        </template>
        <template v-if="widget == 'select'">
            <native-select @touched="touch" :field="actualField" v-model="fieldModel" />
        </template>
        <template v-if="widget == 'button'">
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
        <template v-if="widget == 'daterange'">
            <date-range @touched="touch" :field="actualField" v-model="fieldModel" />
        </template>
        <template v-if="widget == 'content-select'">
            <content-select @touched="touch" :field="actualField" v-model="fieldModel" />
        </template>
        <template v-if="widget == 'type-select'">
            <type-select @touched="touch" :field="actualField" v-model="fieldModel" />
        </template>
        <template v-if="widget == 'scope-select'">
            <scope-select @touched="touch" :field="actualField" v-model="fieldModel" />
        </template>
        <template v-if="widget == 'richtext'">
            <rich-text-field @touched="touch" :field="actualField" v-model="fieldModel" />
        </template>
        <template v-if="widget == 'textarea'">
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
        <template v-if="widget == 'object'">
            <object-field @touched="touch" :field="actualField" v-model="fieldModel" />
        </template>
        <template v-if="widget == 'payment'">
            <payment-field :sandbox="sandbox" :configuration="paymentConfiguration" @form:state="groupStateAltered" :field="actualField" @touched="touch" :parentModel="parentModel" v-model="fieldModel"/>
        </template>
        <template v-if="widget == 'options'">
            <options-manager @touched="touch" :field="actualField" v-model="fieldModel" />
        </template>
        <flex-column style="min-height:300px" v-if="widget == 'code'">
            <code-editor-field @touched="touch" :field="actualField" v-model="fieldModel" />
        </flex-column>
        <template v-if="widget == 'expression'">
            <expression-field @touched="touch" :field="actualField" v-model="fieldModel" />
        </template>

        <div v-if="error && validateResults.message" class="ux-field-message">
            {{validateResults.message}}
        </div>
        <!-- __________ -->
        <!-- <pre>{{field.title}} Touched: {{touched}}</pre> -->
        <!-- <pre>Has Data: {{hasData}}</pre> -->
        <!-- <pre>Dirty: {{dirty}}</pre> -->
        <!-- <pre>Invalid: {{invalid}}</pre> -->
        <!-- <pre>Dirty Before: {{isDirtyBeforeInput}}</pre> -->
        <!-- __________ -->
    </div>
</template>
<script>
//Inputs
import PhoneNumberInput from './inputs/phone-number-input.vue';
import TimezoneSelect from './inputs/timezone.vue';
import ContentSelect from './inputs/content-select.vue';
import TypeSelect from './inputs/type-select.vue';
import ScopeSelect from './inputs/scope-select.vue';
import FieldSelect from './inputs/field-select.vue';
import CurrencyField from './inputs/currency.vue';
import TextField from './inputs/textfield.vue';
import TextArea from './inputs/textarea.vue';
import DateField from './inputs/datefield.vue';
import DateRange from './inputs/daterange.vue';
import Checkbox from './inputs/checkbox.vue';
import CustomHTML from './inputs/html.vue';
import FilterInput from './inputs/filter.vue';
import Switch from './inputs/switch.vue';
import Upload from './inputs/upload/upload.vue';
import FieldGroup from './inputs/group.vue';
import NativeSelect from './inputs/select.vue';
import ButtonSelect from './inputs/button-select.vue';
import ObjectField from './inputs/object-field.vue';
import OptionsManager from './inputs/options-manager.vue';
import CodeEditorField from './inputs/code-editor-field.vue';
import ExpressionField from './inputs/expression-field.vue';
import RichTextField from './inputs/richtext-field.vue';
import PaymentField from './inputs/payment.vue';

////////////////

//Internal Selectors
import InternalRouteSelect from './internal/InternalRouteSelect.vue';
import InternalMenuSelect from './internal/InternalMenuSelect.vue';

////////////////

import Expressions from './expressions';
import getDefaultValue from './getDefaultValue';
import parseBoolean from './parseBoolean';

////////////////////////////////////////

import safeJsonStringify from 'safe-json-stringify';

////////////////////////////////////////

function hasExpression(key) {
    return function() {
        var self = this;
        if (!self.expressions) {
            return;
        }

        let expression = self.expressions[key];
        if (expression) {
            return true;
        }
    }
}

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
        let result = Expressions.evaluateExpression(expression, context);

        return result;
    }
}


export default {
    components: {
        InternalRouteSelect,
        InternalMenuSelect,
        ButtonSelect,
        NativeSelect,
        DateField,
        DateRange,
        TextField,
        CurrencyField,
        TextArea,
        Checkbox,
        FilterInput,
        CustomHtml: CustomHTML,
        BooleanSwitch: Switch,
        FieldGroup,
        ContentSelect,
        TypeSelect,
        ScopeSelect,
        FieldSelect,
        TimezoneSelect,
        PhoneNumberInput,
        Upload,
        ObjectField,
        OptionsManager,
        CodeEditorField,
        ExpressionField,
        RichTextField,
        PaymentField,
    },
    props: {
        trail:{
            type:Array,
            default() {
                return []
            }
        },
        submission:{
            type:Boolean,
            default:false,
        },
        sandbox:{
            type:Boolean,
            default:false,
        },
        paymentConfiguration:{
            type:Object,
        },
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
        includeOfficeOnly:{
            type:Boolean,
            default:false,
        }
    },
    data() {


        return {
            watching:true,
            defaultValue: null,
            model: this.modelValue,
            touched: false,
            focussed: false,
            validateResults: { valid: true },
            mounted: false,
            subFormState: {},
            isDirty: false,
            isDirtyBeforeInput: false,
        }
    },
    inject:['parentFormElement', 'directFormElement', 'additionalContext'],
    provide() {
        return {
            fieldPath:this.fieldPath,
        }
    },
    created() {
        this.checkDirtyState();
    },
    mounted() {
        const self = this;
        self.mounted = true;

        if(self.directFormElement && self.directFormElement.childFormElements) {
            self.directFormElement.childFormElements.push(self);
        }
        if(self.parentFormElement && self.parentFormElement.childFormElements) {
            self.parentFormElement.childFormElements.push(self);
        }
    },
    beforeUnmount() {
        const self = this;
        self.mounted = false;

        if(self.directFormElement) {
            var index = self.directFormElement.childFormElements.indexOf(self);
            self.directFormElement.childFormElements.splice(index, 1);
        }

        if(self.parentFormElement) {
            var index = self.parentFormElement.childFormElements.indexOf(self);
            self.parentFormElement.childFormElements.splice(index, 1);
        }
    },
    methods: {
        fieldDefaultValue() {

            var expressionForceValue = this.expressions && this.expressions.value ? this.getExpressionValue : undefined;
            if(expressionForceValue) {
                return expressionForceValue;
            }

            // If there is no expression
            var expressionDefaultValue = this.expressions && this.expressions.defaultValue ? this.getExpressionDefaultValue : undefined;
            var normalDefaultValue =  getDefaultValue(this.actualField);

            var defaultValue =  this.cleanInput(expressionDefaultValue || normalDefaultValue);
            return defaultValue;
        },
        checkDirtyState() {

            const self = this;

            //What is the value for this field right now?
            var existingData = self.fieldModel;
            var hasExistingData = existingData || existingData === false || existingData === 0;
            var proposedDefaultValue = self.fieldDefaultValue();


            ///////////////////////////////////////////

            var existingString = JSON.stringify(self.cleanOutput(existingData));
            var proposedString = JSON.stringify(self.cleanOutput(proposedDefaultValue));

            //We already have data
            if (hasExistingData && (existingString != proposedString)) {
                self.isDirty = true;
                self.isDirtyBeforeInput = true;
                //May as well put it in anyway so it can clean itself if need be
                self.fieldModel = existingData;
            } else {
                //The field is untouched
                self.isDirty = false;
                self.isDirtyBeforeInput = false;

                //Use the default
                self.fieldModel = proposedDefaultValue;
            }


        // Validate when we're first mounted
        self.validateResults = self.$sdk.content.validateField(self.fieldModel, self.actualField);

        },
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
        touch() {
            this.touched = true;
        },
        untouch() {
            this.touched = false;
        },
        reset() {
            this.untouch();
            this.watching = false;

            var defaultValue = this.fieldDefaultValue();

            if(Array.isArray(defaultValue)) {
                defaultValue = [];
            }

            this.model[this.key] = defaultValue

            this.$nextTick(function() {
            this.watching = true;
            })
        },



        cleanInput(val) {
            return this.fieldCleanInput(val);
        },
        cleanOutput(val) {
            return this.fieldCleanOutput(val);
        },
        fieldCleanInput(val) {


            var self = this;
            var transformFunction = self.expressions?.transform;

            if (transformFunction && typeof transformFunction.set === 'function') {
                val = transformFunction.set(val);
            }

            return val;
        },
        fieldCleanOutput(val) {
            var self = this;
            var transformFunction = self.expressions?.transform;

            if (transformFunction && typeof transformFunction.get === 'function') {
                val = transformFunction.get(val);
            }



            return val;
        },
    },
    watch: {
        mounted(val) {
            if (val) {
                this.$emit('field:mount', this);
            } else {
                this.$emit('field:unmount', this);
            }

            // if(this.expressions && this.expressions.show) {
            //     console.log(this.field.title, this.expressions, this.expressionsContext)

            // }
        },
        visible(now) {
            //Remove and clear all data
            if (!now) {
                this.touched = false;
                if (this.expressions && this.expressions.value) {
                    this.fieldModel = this.getExpressionValue
                } else {
                    this.fieldModel = undefined;
                }

            } else {
                this.untouch();
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
            this.validateResults = this.$sdk.content.validateField(this.fieldModel, this.actualField);
        },
        modelValue(val, old) {

            if(this.watching) {
                this.model = val;
                this.touched = false;
                this.checkDirtyState();
            }
        },
        getExpressionHide(result) {

        },
        getExpressionDefaultValue(result) {

            //If this already had data, or has been touched and now has data
            if (this.isDirtyBeforeInput || (this.touched && this.dirty)) {
                //Don't update it
            } else {
                this.fieldModel = result;
            }

        },
        getExpressionValue(result) {
            this.fieldModel = result;
        },

    },
    computed: {
        fieldPath() {
            return this.currentTrail.join('.');
        },
        currentTrail() {
            var trail = this.trail.slice();
            trail.push(this.field.key)
            return trail;
        },
        title() {
            return this.field.title;
        },
        minimum() {
            return parseInt(this.actualField.minimum);
        },
        maximum() {
            return parseInt(this.actualField.maximum);
        },
        actualField() {

            var field = this.field;
            var actual = field;

            if (this.getExpressionRequired) {
                actual = Object.assign({}, actual, { minimum: 1 });
            }

            if (this.getExpressionReferenceType) {
                actual = Object.assign({}, actual, { referenceType:this.getExpressionReferenceType });
            }

            if (this.getExpressionVisualHide) {
                actual = Object.assign({}, actual, { visualHide:this.getExpressionVisualHide });
            }

            if (this.getExpressionWidgetType) {
                actual = Object.assign({}, actual, { widget:this.getExpressionWidgetType });
            }

            if (this.getExpressionDataType) {
                actual = Object.assign({}, actual, { type:this.getExpressionDataType });
            }

            if (this.getExpressionOptions) {
                actual = Object.assign({}, actual, { options:this.getExpressionOptions });
            }

            if (this.getExpressionSyntax) {

                actual = Object.assign({}, actual, { syntax:this.getExpressionSyntax });
            }

            if (this.getExpressionMinValue) {

                actual = Object.assign({}, actual, { minValue:this.getExpressionMinValue });
            }

            if (this.getExpressionMaxValue) {

                actual = Object.assign({}, actual, { maxValue:this.getExpressionMaxValue });
            }

            if (this.getExpressionCurrency) {

                actual = Object.assign({}, actual, { currency:this.getExpressionCurrency });
            }

            return actual;
        },
        changeString() {

            const fieldModel = this.fieldModel;
            const stringified = safeJsonStringify(fieldModel);

            return `${stringified}-${this.actualField.minimum}-${this.actualField.referenceType}`;
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

            if(this.hidden) {
                return false;
            }

            return isInvalid;
        },
        dirty() {

            return this.isDirty;

        },
        getExpressionHide() {
            if (!this.expressions) {
                return;
            }

            let showExpression = this.expressions.show;
            let hideExpression = this.expressions.hide;
            let context = this.expressionsContext;

            let result;
            if (showExpression) {
                result =  !!!Expressions.evaluateExpression(showExpression, context);
            } else if (hideExpression) {
                result =  Expressions.evaluateExpression(hideExpression, context);
            }

            return result;
        },
        getExpressionRequired: computedExpression('required'),
        getExpressionDefaultValue: computedExpression('defaultValue'),
        getExpressionValue: computedExpression('value'),
        getExpressionReferenceType: computedExpression('referenceType'),
        getExpressionWidgetType:computedExpression('widget'),
        getExpressionDataType:computedExpression('type'),
        getExpressionOptions:computedExpression('options'),
        getExpressionSyntax:computedExpression('syntax'),
        getExpressionCurrency:computedExpression('currency'),
        getExpressionMinValue:computedExpression('minValue'),
        getExpressionMaxValue:computedExpression('maxValue'),
        getExpressionVisualHide: computedExpression('visualHide'),
        // hasExpressionDefaultValue: hasExpression('defaultValue'), // Not sure what this is for
        expressions() {
            return this.field.expressions;
        },
        expressionsContext() {


            var additionalContext = this.additionalContext?.value || {}

            const context = {
                this: this.model,
                self: this.model,
                model: this.model,
                data: this.parentModel || this.model,
                additional:{
                    ...additionalContext,
                }
            }

            return context;
        },
        officeOnly() {
            return this.submission && this.field.officeOnly;
        },
        hidden() {

            if(this.officeOnly && !this.includeOfficeOnly) {
                return true;
            }

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
            return this.widget === 'form' || this.isGroup && this.actualField.asObject;
        },
        visualHide() {
            return this.actualField.visualHide;
        },
        layoutGroup() {
            return this.isGroup && !this.actualField.asObject;
        },
        fieldModel: {
            get() {
                return this.cleanOutput(this.model[this.key]);
            },
            set(value) {
                var cleaned = this.cleanInput(value);
                const existing = this.model[this.key];

                if (existing != cleaned) {
                    this.model[this.key] = cleaned
                    this.isDirty = true;
                    this.$emit('update:modelValue', this.model);
                }

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
            array.push(`ux-field-widget-${this.widget}`)

            if(this.widget === 'form' && this.minimum === 1 && this.maximum === 1) {

                array.push('ux-layout-only');
            }

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

            if (this.visualHide) {
                array.push('ux-field-hide');
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
                case 'form':
                    widget = this.submission ? 'form' : 'content-select';
                break;
                case 'payment':
                case 'internal-menu':
                case 'internal-route':
                case 'content-select':
                case 'select':
                case 'checkbox':
                case 'daterange':
                case 'datefield':
                case 'richtext':
                case 'textarea':
                case 'switch':
                case 'email':
                case 'url':
                case 'currency':
                case 'timezone':
                case 'country':
                case 'upload':
                case 'code':
                case 'expression':
                case 'options':
                case 'button':
                case 'type-select':
                case 'scope-select':
                case 'field-select':
                case 'html':
                case 'filter':
                case 'value':
                
                    break;
                case 'password':
                    return 'textfield';
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
                        case 'object':
                            widget = 'object';
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
    margin-bottom: 1em;

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

.ux-field.ux-field-hide {
    display:none !important;
}


:deep(.ux-field-description) {
    // .ux-field-description {
    font-size: clamp(12px, 0.8em, 16px);
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