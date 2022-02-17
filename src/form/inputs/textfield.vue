<template>
    <label class="ux-field-title" v-if="showLabel">{{label}}</label>
    <div class="ux-field-description" v-if="showDescription">{{description}}</div>
    <div v-if="multiValue">
        <flex-row class="ux-text-row" :key="index" v-for="(entry, index) in model">
            <flex-cell>
                <input class="ux-field-focus ux-text-input-multiple" ref="input" @keydown.enter.stop.prevent="addEntry()" v-model="model[index]" />
            </flex-cell>
            <flex-cell shrink>
                <ux-button tag="a" icon v-if="canRemoveValue" @click="remove(entry)">
                    <ux-icon icon="fa-times" />
                </ux-button>
            </flex-cell>
        </flex-row>
        <ux-button v-if="canAddValue" @click="add()">{{addLabel}}</ux-button>
    </div>
    <template v-else>
        <input class="ux-field-focus ux-text-input-single" v-model="model" />
    </template>
</template>
<script>
import FieldMixin from '../field-mixin';

export default {
    props: {
        modelValue: {
            type: [String, Array],
        },
    },
    mixins: [FieldMixin],
    created() {
        this.value = this.cleanInput(this.value, true);
        this.dispatch();
    },
    data() {
        return {
            value: this.modelValue,
        }
    },
    watch: {
        modelValue(val, old) {
            this.value = this.cleanInput(this.value);
        }
    },
    methods: {
        addEntry() {
            this.add();
            var elements = this.$refs.input;
            this.$nextTick(function() {
                var input = elements[elements.length - 1];
                input.focus();
            })

        },
        dispatch() {
            this.$emit('update:modelValue', this.value);
        },
        cleanOutput(model) {
            return model;
        },
        cleanInput(model, setDefaults) {
            if (this.multiValue) {
                if (!model) {
                    model = [];
                }

                if (!Array.isArray(model)) {
                    model = [model];
                }

                /////////////////////////////////

                if (this.maximum) {
                    if (model.length > this.maximum) {
                        model.length = this.maximum;
                    }
                }

                var min = setDefaults ? this.ask : this.minimum;

                while (model.length < min) {
                    model.push('')
                }

            } else {
                if (!model) {
                    model = '';
                }
            }

            ///////////////////////////

            return model;
        }
    },
    computed: {
        defaultValue() {
            return ''
        },
        numValues() {
            if (!this.multiValue) {
                return 1;
            }

            return this.value.length;
        },
        model: {
            get() {
                return this.value;
            },
            set(value) {
                this.value = value;
                this.dispatch();
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.ux-text-row {
    margin-bottom: 0.25em;
}

input {
    border-radius: 0.1em;
    padding: 0.5em;
    box-sizing: border-box;
    background: rgba(#000, 0.05);
    border: 1px solid rgba(#000, 0.1);
    font-size: inherit;
    appearance: none;
    line-height: 1;

    &:focus {
        background: none;
        border:1px solid $primary;
        outline:none;
    }
}

.ux-text-input-multiple {
    width: 100%;
}

.ux-text-input-single {
    width: calc(100% - 0.5em);
    margin: 0 0.5em 0 0;
}
</style>