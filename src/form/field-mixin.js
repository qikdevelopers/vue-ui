export default {
    props: {
        field: {
            type: Object,
            required: true,
        },
    },
    methods:{
        add() {
            if(!this.canAddValue) {
                return;
            }

            this.model.push(this.defaultValue)
            this.dispatch();
        },
        remove(entry) {
            var index = this.model.indexOf(entry);
            this.model.splice(index, 1);
            this.dispatch();
        },
    },
    computed: {

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
        type() {
            return this.field.type || 'string';
        },
        key() {
            return this.field.key;
        },
        type() {
            return this.field.type;
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
        fields() {
            var subFields = this.field.fields;

            if (subFields && subFields.length) {
                return subFields;
            }
        },
        label() {
            return this.field.title;
        },
        showLabel() {
            if (!this.label) {
                return;
            }
            return true;
        },
        showDescription() {
            return this.description;
        },
        description() {
            return this.field.description;
        },
        placeholder() {
            return this.field.placeholder || this.field.hint;
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
        minimum() {
            var int = parseInt(this.field.minimum);
            int = Math.max(int, 0)
            return int;
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
    }
}