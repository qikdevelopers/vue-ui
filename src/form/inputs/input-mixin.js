function isUndefined(v, type) {
    return v === undefined ||
        v === null || (type == 'date' && v.toString && (v.toString() === 'Invalid Date'));
}


export default {
    props: {
        field: {
            type: Object,
            default () {
                return {}
            },
        },
        parentModel: {
            type: Object,
        },
    },
    data() {
        return {
            value: this.modelValue,
        }
    },
    watch: {
        modelValue(val, old) {

            var cleanedValue = this.cleanInput(val);
            var cleanedModel = this.cleanInput(this.model);

            if(JSON.stringify(cleanedValue) != JSON.stringify(cleanedModel)) {
                this.model = cleanedValue
            }
            
        },
    },
    computed: {
        optionLookup() {
            var self = this;
            return self.options.reduce(function(set, option) {
                const key = self.getValue(option);
                set[key] = option;
                return set;
            }, {})
        },
        selectableOptions() {
            return this.options;
        },
        required() {
            return this.minimum;
        },
        model: {
            get() {
                return this.cleanOutput(this.value);
            },
            set(val) {
                this.value = this.cleanInput(val);
                this.dispatch();
            }
        },
        options() {
            var self = this;
            return (this.field.options || []).reduce(function(set, option) {
                if (!option) {
                    return set;
                }
                const value = self.getValue(option);
                const title = option.title || option.name || option.label || value;


                var output = {
                    title,
                    value,
                    source: option,
                }

                if (self.field.type == 'reference') {
                    output._id = value;
                }

                set.push(output);

                return set;
            }, [])
        },
        prefix() {
            return this.field.suffix;
        },
        suffix() {
            return this.field.suffix;
        },
        type() {
            if (!this.field) {
                console.log('TYPE', this.field)
            }
            return this.field.type || 'string';
        },
        key() {
            return this.field.key;
        },
        isGroup() {
            return this.type === 'group'
        },
        asObject() {
            return this.isGroup && !!this.field.asObject;
        },
        layoutGroup() {
            return this.isGroup && !this.field.asObject;
        },
        canAddValue() {
            return this.maximum === 0 || this.numValues < this.maximum;
        },
        canRemoveValue() {
            return this.numValues > this.minimum;
        },
        singleValue() {
            return this.maximum == 1;
        },
        multiValue() {
            return this.maximum != 1;
        },
        label() {
            return this.field.title;
        },
        description() {
            return this.field.description;
        },
        placeholder() {
            return this.field.placeholder || this.field.hint;
        },
        addLabel() {
            if (this.numValues) {
                return `Add another ${this.label}`

            } else {
                return `Add ${this.label}`
            }
        },
        removeLabel() {
            return `Remove`
        },
        numValues() {
            if (!this.multiValue) {
                return 1;
            }

            return (this.value || []).length;
        },

        showLabel() {
            return this.field.title;
        },
        showDescription() {
            return this.description;
        },
        fields() {
            var subFields = this.field.fields;

            if (subFields && subFields.length) {
                return subFields;
            }
        },
        minimum() {
            if (this.layoutGroup) {
                return 1;
            }

            var int = parseInt(this.field.minimum || 0);
            if (isNaN(int)) {
                int = 0;
            }

            int = Math.max(int, 0)
            int = this.maximum ? Math.min(int, this.maximum) : int;
            return parseInt(int);
        },
        maximum() {
            if (this.layoutGroup) {
                return 1;
            }

            var int = parseInt(this.field.maximum || 0);
            if (isNaN(int)) {
                int = 0;
            }
            int = Math.max(int, 0)
            return parseInt(int);
        },
        ask() {
            var int = parseInt(this.field.ask);
            int = Math.max(int, this.minimum);
            if (this.maximum) {
                int = Math.min(int, this.maximum);
            }

            return int;
        },
    },
    methods: {
        getValue(option) {
            if (!option) {
                return;
            }

            return option._id || option.value || option;
        },
        getLabel(option) {
            if (!option) {
                return;
            }

            return option.title || option.name || option.label || option;
        },
        touch() {
            this.$emit('touched');
        },
        getNewDefaultEntry() {
            return undefined;
        },
        add() {
            if (!this.canAddValue) {
                return;
            }

            var defaultEntry = this.cleanInputValue(this.getNewDefaultEntry());

            if(!this.value) {
                this.value = []
            }

            this.value.push(defaultEntry);
            this.dispatch();

            this.$nextTick(function() {
                this.refocus()
            })

            this.touch();
        },
        remove(entry) {
            var index = this.model.indexOf(entry);
            this.value.splice(index, 1);
            this.dispatch();
            this.touch();
        },
        dispatch() {
            this.$emit('update:modelValue', this.value);
        },

        cleanInputValue(val) {
            // if (!isUndefined(val, this.type)) {
            //     switch (this.type) {
            //         case 'integer':
            //             val = parseInt(val);
            //             break;
            //         case 'float':
            //         case 'decimal':
            //         case 'number':
            //             val = Number(val);
            //             break;
            //     }
            // }

            return val;
        },
        cleanOutputValue(val) {
            return val;
        },
        cleanOutput(val) {

            var self = this;




            if (isUndefined(val, self.field.type)) {
                if (self.multiValue) {
                    val = [];
                } else {
                    val = undefined;
                }
            } else {
                if (self.multiValue) {
                    val.forEach(function(v, i) {
                        val[i] = self.cleanOutputValue(v);
                    });
                    // val = val.map(function(i) {
                    //     return self.cleanOutputValue(i)
                    // })
                } else {
                    val = self.cleanOutputValue(val)
                }
            }

            return val;
        },

        cleanInput(val) {
            var input = val;

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

                while (val.length < self.minimum) {
                    val.push(self.cleanInputValue(self.getNewDefaultEntry()));
                }

                val = val.map(function(v) {
                    var d = self.cleanInputValue(v)
                    // toISO(v)
                    return d;
                })
            } else {
                if (val) {
                    // val = toISO(val)
                    val = self.cleanInputValue(val)
                }
            }


            var out = val;
            return val;
        },



        refocus() {
            var elements = this.$refs.input;
            if (!elements) {
                return;
            }

            var input = elements[elements.length - 1];
            input.focus();
        },
    }
}