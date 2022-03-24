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
                        <ux-button icon tag="a" v-if="canRemoveValue" @click="remove(entry)">
                            <ux-icon icon="fa-times" />
                        </ux-button>
                    </flex-cell>
                </flex-row>
            </panel-header>
            <panel-body @keydown.enter="enterPress($event)">
                <ux-form ref="form" @form:state="stateChange" :parentModel="parentModel" v-model="model[index]" :flex="sameLine" :fields="field.fields" />
            </panel-body>
        </panel>
        <ux-button v-if="canAddValue" @click="add()">{{addLabel}}
            <ux-icon icon="fa-plus" right />
        </ux-button>
    </div>
    <template v-else>
        <ux-form ref="form" @form:state="stateChange"  :parentModel="parentModel" v-model="model" :flex="sameLine" :fields="field.fields" />
    </template>

    <!-- <pre><strong>{{field.title}}</strong>

    Should be single: {{singleValue}}, {{asObject}}, {{minimum == 1}} {{maximum == 1}}
    Multi: {{multiValue}};
    Can Add Value: {{canAddValue}}
    Number Values: {{numValues}}
    Model: {{model}}
</pre> -->
</template>
<script>
import InputMixin from './input-mixin';


export default {
    mixins: [InputMixin],
    props: {
        modelValue: {
            type: [Object, Array],
        },
    },
    // created() {
    //     // this.value = this.cleanInput(this.value, true);
    // },
    computed: {
        sameLine() {
            return this.field.sameLine;
        }
    },
    methods: {
        stateChange(details) {
            this.$emit('form:state', details);
        },
        multiLabel(entry, index) {

            if (entry.name) {
                return entry.name;
            }

            if (entry.title) {
                return entry.title;
            }

            if (entry.firstName) {
                return entry.firstName;
            }

            return `${this.label} ${index+1}`
        },
        getNewDefaultEntry() {
            return {};
        },
        enterPress(event) {
            if (this.canAddValue) {
                event.stopImmediatePropagation();
                event.preventDefault();
                this.add();
            }
        },
        refocus() {
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
        getNewDefaultEntry() {
            return {};
        },
        // cleanInput(model) {

        //     var self = this;
        //     var setDefaults = true;

        //     if (self.multiValue) {
        //         if (!model) {
        //             model = [];
        //         }

        //         if (!Array.isArray(model)) {
        //             model = [model];
        //         }

        //         /////////////////////////////////

        //         if (self.maximum) {
        //             if (model.length > self.maximum) {
        //                 model.length = self.maximum;
        //             }
        //         }

        //         var min = setDefaults ? self.ask : self.minimum;
        //         while (model.length < min) {
        //             model.push(self.getNewDefaultEntry())
        //         }

        //     } else {
        //         if (!model) {
        //             model = self.getNewDefaultEntry();
        //         }
        //     }

        //     ///////////////////////////


        //     return model;
        // }
    }
}
</script>
<style lang="scss" scoped>
.ux-multi-group {
    margin-bottom: 1em;
}
</style>