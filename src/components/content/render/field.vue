<template>
    <div class="ux-field-render" v-if="visible" :class="classes">
        <label class="ux-field-title">{{title}}</label>
        <!-- <div class="ux-field-description">{{field.description}}</div> -->

    


        <template v-if="widget === 'group'">
            <template v-if="asObject">
                <field-group :submission="submission" :field="field" :parentModel="parentModel" v-model="fieldModel" />
            </template>
            <template v-else>
                <field-group :submission="submission" :field="field" :parentModel="parentModel" v-model="sourceModel" />
            </template>
        </template>
        <template v-else-if="widget === 'form'">
            <field-group :submission="submission" :field="field" :parentModel="parentModel" v-model="fieldModel" />
        </template>
        <template v-else-if="widget === 'currency'">
            <template v-if="multiValue">
                    <div v-for="(value, index) in fieldModel">
                        {{formatCurrency(value)}} <span class="currency">{{field.currency}}</span>
                    </div>
                </template>
                <template v-else>
                    <div>
                        {{formatCurrency(fieldModel)}} <span class="currency">{{field.currency}}</span>
                    </div>
                </template>
        </template>
        <template v-else-if="widget === 'code'">
            <template v-if="multiValue">
                    <div v-for="(value, index) in fieldModel">
                        <v-ace-editor :readonly="true" class="editor-wrap" :value="value" :options="{ useWorker: true }" :lang="field.syntax" theme="tomorrow_night_eighties" style="min-height: 300px" />
                    </div>
                </template>
                <template v-else>
                    <div>
                        <v-ace-editor :readonly="true" class="editor-wrap" :value="fieldModel" :options="{ useWorker: true }" :lang="field.syntax" theme="tomorrow_night_eighties" style="min-height: 300px" />
                    </div>
                </template>
        </template>
        <template v-else>
            <template v-if="type === 'reference'">
                <template v-if="multiValue">
                    <item :submission="submission" :key="item._id" :item="item" v-for="(item, index) in fieldModel" />
                </template>
                <template v-else>
                    <item :submission="submission" :item="fieldModel" />
                </template>
            </template>
            <template v-if="type == 'string'">
                <template v-if="multiValue">
                    <compile :template="value" v-for="(value, index) in fieldModel"/>
                </template>
                <template v-else>
                    <!-- <compile :html="fieldModel"/> -->
                    <compile :template="fieldModel"/>
                </template>
            </template>
            <template v-if="type == 'boolean'">
                <template v-if="multiValue">
                    <div v-for="(value, index) in fieldModel">
                        {{!!value}}
                    </div>
                </template>
                <template v-else>
                    <div>{{!!fieldModel}}</div>
                </template>
            </template>
            <template v-if="type == 'date'">
                <template v-if="multiValue">
                    <div v-for="(value, index) in fieldModel">
                        {{renderDate(value)}}
                    </div>
                </template>
                <template v-else>
                    <div>
                        {{renderDate(fieldModel)}}
                    </div>
                </template>
            </template>
            <template v-if="type == 'email'">
                <template v-if="multiValue">
                    <div v-for="(value, index) in fieldModel">
                        <a :href="`mailto:${value}`">{{value}}</a>
                    </div>
                </template>
                <template v-else>
                    <div>
                        <a :href="`mailto:${fieldModel}`">{{fieldModel}}</a>
                    </div>
                </template>
            </template>
            <template v-if="type == 'url'">
                <template v-if="multiValue">
                    <div v-for="(value, index) in fieldModel">
                        <a :href="value">{{value}}</a>
                    </div>
                </template>
                <template v-else>
                    <div>
                        <a :href="fieldModel">{{fieldModel}}</a>
                    </div>
                </template>
            </template>
            <template v-if="isNumber">
                <template v-if="multiValue">
                    <div v-for="(value, index) in fieldModel">
                        {{value}}
                    </div>
                </template>
                <template v-else>
                    <div>{{fieldModel}}</div>
                </template>
            </template>
        </template>
    </div>
</template>
<script>
import Item from '../item.vue';
import {DateTime} from 'luxon';
// import Compiler from './compile.vue';
import Compile from 'vue3-runtime-template';


//Inputs
// import ContentSelect from './inputs/content-select.vue';
// import CurrencyField from './inputs/currency.vue';
// import TextField from './inputs/textfield.vue';
// import TextArea from './inputs/textarea.vue';
// import DateField from './inputs/datefield.vue';
// import Checkbox from './inputs/checkbox.vue';
// import Switch from './inputs/switch.vue';
// import Upload from './inputs/upload/upload.vue';
import FieldGroup from './group.vue';
// import NativeSelect from './inputs/select.vue';
// import ButtonSelect from './inputs/button-select.vue';

import Expressions from '../../form/expressions';

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
        Item,
        FieldGroup,
        // Compiler,
        Compile,
        // ButtonSelect,
        // NativeSelect,
        // DateField,
        // TextField,
        // CurrencyField,
        // TextArea,
        // Checkbox,
        // BooleanSwitch: Switch,
        // FieldGroup,
        // ContentSelect,
        // Upload,
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
        submission: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            model: this.modelValue,
        }
    },
    // created() {
    //     // if (this.visible) {
    //     //     var currentValue = this.fieldModel;
    //     //     var defaultValue = this.fieldModel || this.expressions && this.expressions.defaultValue ? this.getExpressionDefaultValue : getDefaultValue(this.actualField);
    //     //     if (!currentValue) {
    //     //         // console.log(this.actualField.key, this.actualField.title, defaultValue);
    //     //         if (this.fieldModel != defaultValue) {
    //     //             this.fieldModel = defaultValue;
    //     //         }
    //     //     }
    //     // }

    // },
    methods: {
        renderDate(d) {
            return DateTime.fromJSDate(new Date(d)).toFormat('h:mma - ccc, DD');
        },
        formatCurrency(val) {
            return `${this.$sdk.utils.formatCurrency(val, this.field.currency)}`.toUpperCase() ;
        },
        cleanInput(val) {
            return val;
        },
        cleanOutput(val) {

            if (this.type == 'reference') {
                if (!this.multiValue) {
                    if (Array.isArray(val) && val.length) {
                        return val[0]
                    }
                }
            }
            return val;
        }
    },
    watch: {
        modelValue(val, old) {
            this.model = val;
        },
    },
    computed: {
        type() {
            return this.field.type || 'string';
        },
        isEmbedded() {
            return this.submission && (this.field.widget === 'form' && this.field.type === 'reference');
        },
        isGroup() {
            return this.isEmbedded || this.type === 'group'
        },
        asObject() {
            return this.isEmbedded || this.isGroup && this.field.asObject;
        },
        isNumber() {
            switch (this.type) {
                case 'integer':
                case 'number':
                case 'float':
                case 'decimal':
                    return true;
                    break;
            }
        },
        multiValue() {
            return this.field.maximum != 1;
        },
        title() {
            return this.field.title;
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
            return this.getExpressionHide;
        },
        visible() {
            var visible = !this.hidden;
            var hasModel = this.layoutGroup || this.fieldModel;

            return visible && hasModel;
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
                // this.model[this.key] = this.cleanInput(value);
                // this.$emit('update:modelValue', this.model);
            }
        },
        sourceModel: {
            get() {
                return this.model;
            },
            set(value) {
                // this.model = value;
                // this.$emit('update:modelValue', this.model);
            }
        },
        classes() {
            var array = [];
            array.push(`ux-field-render-${this.type}`)

            

            if (this.layoutGroup) {
                array.push('ux-layout-only');
            } else {
                if(!this.fieldModel || (Array.isArray(this.fieldModel) && !this.fieldModel.length)) {
                 array.push('ux-empty');
            }
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

            ///////////////////////////////


            ///////////////////////////////

            switch (widget) {
                case 'form':
                    widget = this.submission ? 'form' : 'content-select';
                    break;
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
                case 'code':
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

.ux-empty {
    display: none !important;
}
.ux-field-render {
    margin-bottom: 1.5em;

    &.ux-layout-only {
        margin-bottom: 0;
        & > .ux-field-title,
        & > .ux-field-description {
            display: none;
        }

    }
}

.currency {
    text-transform: uppercase;
    opacity: 0.5;
    font-size:0.7em;
}

:deep(.ux-field-title) {
    // .ux-field-title {
    margin-top: 0.5em;
    display: block;
    margin-bottom: 0.2em;
    // font-size: 0.9em;
    font-weight: normal;
    opacity: 0.5;
}


:deep(.ux-field-description) {
    // .ux-field-description {
    font-size: 0.7em;
    opacity: 0.3;
    font-style: italic;
    margin-bottom: 0.5em;

}

:deep(.ux-form-flex .ux-field-description) {
    // min-height: 2.6em;
}
</style>