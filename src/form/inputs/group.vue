<template>
    <div class="ux-multi-group" v-if="multiValue">
        <panel ref="row" :key="entry" v-for="(entry, index) in model">
            <panel-header>
                <flex-row>
                    <flex-cell vcenter>
                        <div>
                            <strong>{{multiLabel(entry, index)}}</strong>
                        </div>
                    </flex-cell>
                    <flex-cell vcenter shrink>
                        <ux-button icon tag="a" v-if="canRemoveValue" @click="remove(entry)"><ux-icon icon="fa-times"/></ux-button>
                    </flex-cell>
                </flex-row>
            </panel-header>
            <panel-body @keydown.enter="enterPress($event)">
                <ux-form v-model="model[index]" :flex="sameLine" :fields="field.fields" />
            </panel-body>
        </panel>
        <ux-button v-if="canAddValue" @click="add()">{{addLabel}}<ux-icon icon="fa-plus" right/></ux-button>
    </div>
    <template v-else>
        <ux-form v-model="model" :flex="sameLine" :fields="field.fields" />
    </template>
</template>
<script>
// import UXForm from '../form.vue';
import FieldMixin from '../field-mixin';


export default {
    mixins: [FieldMixin],
    props: {
        modelValue: {
            type: [Object, Array],
        },
    },
    data() {
        return {
            value: this.modelValue,
        }
    },
    created() {
        this.value = this.cleanInput(this.value, true);
        this.dispatch();
    },
    watch: {
        modelValue(val, old) {
            console.log('CJHANGE', val);
            this.value = this.cleanInput(val);
            this.dispatch();
        }
    },
    methods: {
        multiLabel(entry, index) {

            if(entry.name) {
                return entry.name;
            }

            if(entry.title) {
                return entry.title;
            }

            if(entry.firstName) {
                return entry.firstName;
            }


            return `${this.label} ${index+1}`
        },
        enterPress(event) {

            if (this.canAddValue) {
                event.stopImmediatePropagation();
                event.preventDefault();
                this.add();
            }

        },
        dispatch() {
            this.$emit('update:modelValue', this.value);
        },
        add() {
            this.model.push({})
            this.dispatch();


            this.$nextTick(function() {

                //Find the last row
                var rows = this.$refs.row;
                var lastRow = rows[rows.length - 1];

                if (!lastRow) {
                    return;
                }
                var input = lastRow.$el.querySelector('.ux-field-focus');

                if (!input) {
                    return;
                }
                input.focus();
            })
        },
        remove(entry) {
            var index = this.model.indexOf(entry);
            this.model.splice(index, 1);
            this.dispatch();
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
                    model.push({})
                }

            } else {
                if (!model) {
                    model = {};
                }
            }

            ///////////////////////////


            return model;
        }
    },
    computed: {
        defaultValue() {
            return {}
        },
        numValues() {
            if (!this.multiValue) {
                return 1;
            }

            return this.value.length;
        },
        sameLine() {
            return this.field.sameLine;
        },
        fields() {
            return this.field.fields;
        },
        model: {
            get() {
                return this.cleanOutput(this.value);
            },
            set(value) {
                this.value = this.cleanInput(value);
                this.dispatch()

            }
        }
    }
}
</script>
<style lang="scss" scoped>



.ux-multi-group {
    margin-bottom: 1em;
}
</style>