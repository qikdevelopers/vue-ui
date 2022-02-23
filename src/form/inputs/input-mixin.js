export default {
    props: {
        field: {
            type: Object,
        },
        parentModel:{
            type:Object,
        },
    },
    data() {
        return {
            value: this.modelValue,
        }
    },
    watch: {
        modelValue(val, old) {
            this.model = this.cleanInput(val);
        },
    },
    computed: {
        model:{
            get() {
                return this.cleanOutput(this.value);
            },
            set(val) {
                this.value = this.cleanInput(val);
                this.dispatch();
            }
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
        minimum() {
            var int = parseInt(this.field.minimum);
            int = Math.max(int, 0)
            return int;
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
        maximum() {

            if (this.layoutGroup) {
                return 1;
            }

            var int = parseInt(this.field.maximum);
            int = Math.max(int, 0)

            if (this.maximum) {
                int = Math.min(int, this.maximum);
            }
            return int;
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

            this.model.push(this.getNewDefaultEntry());
            this.dispatch();

            this.$nextTick(function() {
                this.refocus()
            })

            this.touch();
        },
        remove(entry) {
            var index = this.model.indexOf(entry);
            this.model.splice(index, 1);
            this.dispatch();
            this.touch();
        },
        dispatch() {
            this.$emit('update:modelValue', this.value);
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

                while (val.length < self.minimum) {
                    val.push(self.getNewDefaultEntry())
                }

            } else {
                if (!val) {
                    val = self.getNewDefaultEntry();
                }
            }

            return val;
        },
        cleanOutput(val) {
            return val;
        },
        refocus() {
            var elements = this.$refs.input;
            var input = elements[elements.length - 1];
            input.focus();
        },
    }
}