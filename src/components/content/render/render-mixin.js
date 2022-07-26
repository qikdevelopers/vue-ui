
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
            model: this.modelValue,
        }
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
    },
    computed:{
        label() {
            return this.field.title;
        },
        description() {
            return this.field.description;
        },

        singleValue() {
            if (this.asObject) {
                var isSingle = this.minimum === 1 && this.maximum === 1;
                return isSingle;
            } else {
                return this.maximum === 1;
            }
        },
        type() {
            return this.field.type || 'string';
        },
        multiValue() {
            return !this.singleValue;
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
        numValues() {
            if (!this.multiValue) {
                return 1;
            }

            return (this.model || []).length;
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
    }
}