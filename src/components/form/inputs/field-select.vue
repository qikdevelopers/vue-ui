<template>
    <div class="native-select" :class="classes">
        <label class="ux-field-title" v-if="showLabel">{{label}} <span class="ux-required-marker" v-if="required">*</span></label>
        <div class="ux-field-description" v-if="showDescription">{{description}}</div>
        <div class="ui-select-button" v-if="singleValue">
            <slot>
                <ux-button tag="div">
                    {{summary}}
                </ux-button>

            </slot>
        </div>
        <select @focus="touch" :multiple="multiValue" v-model="model">
            <option value="" v-if="showNoneOption">None</option>
            <option :value="option.value" v-for="option in selectableOptions">{{option.title}}</option>
        </select>
    </div>
</template>
<script>
import InputMixin from './input-mixin';



function isUndefined(entry) {
    return entry === undefined || typeof entry === 'undefined' || entry === null || String(entry) === 'null' || String(entry) === 'undefined';
}

//////////////////////////

export default {
    props: {
        title: {
            type: String,
        },
        modelValue: {
            // type: [Object, Array],
        },
    },
    mixins: [InputMixin],
    async created() {
        this.model = this.model;
    },
    watch:{
        referenceType:{
            async handler(referenceType) {
                const self = this;
                const glossary = await this.$sdk.content.glossary({hash:true});
                self.definition = glossary[referenceType]
            },
            immediate:true,
        }
    },
    data() {
        return {
            types: [],
            definition:null,
        }
    },
    methods: { 
        cleanOutput(val) {
            var self = this;

            if (isUndefined(val)) {
                if (self.multiValue) {
                    val = [];
                } else {
                    val = undefined;
                }
            } else {
                if (self.multiValue) {
                    val = (val || []).filter(Boolean).map(function(i) {
                        return self.getValue(i);
                    })
                } else {
                    val = self.getValue(val);
                }
            }

            return val;
        },
        cleanInput(val) {

            var self = this;

            if (self.multiValue) {
                if (!val) {
                    val = [];
                }

                if (!Array.isArray(val)) {
                    val = [val];
                }

                /////////////////////////////////

                if (self.maximum) {
                    if (val.length > self.maximum) {
                        val.length = self.maximum;
                    }
                }


                val = val.filter(Boolean).map(function(v) {
                    var valueKey = self.getValue(v);
                    return self.returnObject ? self.optionLookup[valueKey] : valueKey;
                })

            } else {
                var valueKey = self.getValue(val);
                val = self.returnObject ? self.optionLookup[valueKey] : valueKey;
            }

            return val;
        },
    },
    computed: {
        showNoneOption() {
            const shouldShow = (this.singleValue && !this.minimum);

            if(!shouldShow) {
                return false;
            }

            const hasNoneOption = this.selectableOptions.find(function(i) {
                return i.none;
            });

            if(hasNoneOption) {
                console.log('has custom none option')
                return false;
            }

            return true;
        },
        fields() {

            const self = this;

            if(!self.definition) {
                return [];
            }

            const isFormSubmission = self.definition.definesType === 'submission';
            var allFields = [...self.definition.fields];
            var definedFields = self.definition.definedFields || [];

            if (definedFields.length) {

                if (isFormSubmission) {

                    var formDataFields = {
                        title: `Form Data`,
                        minimum: 1,
                        maximum: 1,
                        key: 'formData',
                        asObject: true,
                        type: 'group',
                        fields: definedFields,
                    }

                    allFields.push(formDataFields);

                    const cleanedDataFields = definedFields.map(function(field) {
                        if(field.type === 'reference') {
                            field = JSON.parse(JSON.stringify(field))
                            delete field.fields;
                        }

                        return field;
                    });

                    var dataFields = {
                        title: `Data`,
                        minimum: 1,
                        maximum: 1,
                        key: 'data',
                        asObject: true,
                        type: 'group',
                        fields: cleanedDataFields,
                    }

                    allFields.push(dataFields);


                } else {

                    var dataFields = {
                        title: `${self.definition.title}`,
                        minimum: 1,
                        maximum: 1,
                        key: 'data',
                        asObject: true,
                        type: 'group',
                        fields: definedFields,
                    }

                    allFields.push(dataFields);

                }
            }


            var mapped = self.$sdk.utils.mapFields(allFields)
                .filter(function(field) {
                    var isObject = field.type == 'group' && field.asObject && (field.minimum == 1 && field.maximum == 1);
                    return !isObject;
                })
                .map(function(field) {
                    field.title = field.titles.join(' > ');
                    return field;
                })
                .sort(function(a, b) {
                    return a.title < b.title ? -1 : 1;
                });
            return mapped;
        },

        fieldOptions() {
            const self = this;
            return self.fields.map(function(field) {
                return {
                    title:field.title,
                    value:field.path,
                    none:field.none,
                }
            });
        },
        referenceType() {
            return this.field.referenceType;
        },
        returnObject() {
            return false;
        },
        classes() {
            var array = []

            if (this.multiValue) {
                array.push('multiple');
            } else {
                array.push('single');
            }

            return array;
        },
        optionLookup() {
            var self = this;
            return self.fieldOptions.reduce(function(set, option) {
                const key = self.getValue(option);
                set[key] = option;
                return set;
            }, {})
        },
        summary() {
            return this.model ? this.getLabel(this.optionLookup[this.model]) : this.title || 'Click to select';
        },

        selectableOptions() {
            return this.fieldOptions;
        },
    }
}
</script>
<style lang="scss" scoped>
.native-select {

    cursor: pointer;

    &.multiple {
        select {
            width: 100%;
            font-size: 1em;
            border: 1px solid rgba(#000, 0.1);
            appearance: none;

            &:focus {
                border: 1px solid var(--primary);
            }
        }
    }

    &.single {
        position: relative;

        .ui-select-button {
            position: relative;
            width: 100%;

            &>.ux-btn {
                display: block;
                text-align: left;
            }
        }

        select {
            cursor: pointer;
            opacity: 0;
            appearance: none;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
        }
    }


}
</style>