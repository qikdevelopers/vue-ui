<template>
    <div class="ux-field" @focusin="focus" @focusout="blur" v-if="visible" :class="classes">
        
        <template v-if="widget == 'checkbox'">
            <checkbox @touched="touch" :field="field" v-model="fieldModel" />
        </template>
        <template v-if="widget == 'group'">
            <template v-if="asObject">
                <field-group @touched="touch" :field="field" :parentModel="parentModel" v-model="fieldModel" />
            </template>
            <template v-else>
                <field-group @touched="touch" :field="field" :parentModel="parentModel" v-model="sourceModel" />
            </template>
        </template>
        <template v-if="widget == 'textfield'">
            <text-field @touched="touch" :field="field" v-model="fieldModel" />
        </template>
        <template v-if="widget == 'datefield'">
            <date-field @touched="touch" :field="field" v-model="fieldModel" />
        </template>
        <template v-if="widget == 'content-select'">
            <content-select @touched="touch" :field="field" v-model="fieldModel" />
        </template>
        <div v-if="error" class="ux-field-message">
            {{validateData.message}}
        </div>
        
    </div>
</template>
<script>
//Figure out how to recursively include
// import UXField from './field.vue';

import ContentSelect from './inputs/content-select.vue';
import TextField from './inputs/textfield.vue';
import DateField from './inputs/datefield.vue';
import Checkbox from './inputs/checkbox.vue';
import FieldGroup from './inputs/group.vue';
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
        DateField,
        TextField,
        Checkbox,
        FieldGroup,
        ContentSelect,
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
        }
    },
    created() {
        var currentValue = this.fieldModel


        if (!currentValue) {
            var defaultValue = this.fieldModel || this.expressions && this.expressions.defaultValue ? this.getExpressionDefaultValue : getDefaultValue(this.field);

            // console.log(this.field.key, this.field.title, defaultValue);
            if (this.fieldModel != defaultValue) {
                this.fieldModel = defaultValue;
            }
        }
    },
    methods: {
        focus() {
            this.focussed = true;
        },
        blur() {
            this.focussed = false;
            if(this.expressions &&  this.expressions.value) {
                //Reset the value after we blur out
                this.fieldModel = this.getExpressionValue;
            }
        },
        reset() {
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
        modelValue(val, old) {
            this.model = val;
        },

        getExpressionHide(result) {

        },
        getExpressionRequired(result) {

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
        validateData() {
            return this.$qik.content.validateField(this.fieldModel, this.field);
        },
        valid() {
            return this.validateData.valid;
        },
        error() {
            return !this.focussed && this.touched && this.invalid;
        },
        invalid() {
            return !this.valid;
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
            if (this.widget == 'value') {
                return true;
            }

            if (this.field.readOnly) {
                return true;
            }

            return this.getExpressionHide;
        },
        visible() {
            return !this.hidden;
        },
        type() {
            return this.field.type || 'string';
        },
        key() {
            return this.field.key;
        },
        isGroup() {
            return this.type === 'group'
        },
        asObject() {
            return this.isGroup && this.field.asObject;
        },
        layoutGroup() {
            return this.isGroup && !this.field.asObject;
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
            var widget = this.field.widget;

            switch (this.field.widget) {
                case 'input':
                default:
                    switch (this.type) {
                        case 'date':
                            return 'datefield';
                        break;
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
    },

}
</script>
<style lang="scss" scoped>
.ux-field {
    margin-bottom: 1.5em;

    &:last-child {
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

.ux-field.ux-field-error> :deep(.ux-field-title) {
    color: red;
}

:deep(.ux-form-flex .ux-field-description) {
    min-height: 2.6em;
}
</style>