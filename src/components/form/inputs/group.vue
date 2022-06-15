<template>
    <div class="ux-multi-group" v-if="multiValue">
        <template v-if="reorderable">
<!-- item-key="guid" -->
            <draggable v-model="model" :group="groupKey" @start="drag=true" @end="drag=false" >
                <template #item="{element, index}">
                    
                    <ux-panel ref="row">

                        <!-- :key="guid" v-for="(element, index) in model" -->
                        <ux-panel-header>
                            <flex-row vcenter gap>
                                <flex-cell shrink v-if="reorderable">
                                    <ux-icon icon="fa-arrows" />
                                </flex-cell>
                                <flex-cell vcenter>
                                    <div>
                                        <strong>{{multiLabel(element, index)}}</strong>
                                    </div>
                                </flex-cell>
                                <flex-cell shrink v-if="collapsible">
                                    <ux-button size="xs" tag="a" @click="element.collapsed = !element.collapsed">
                                        {{element.collapsed ? 'More' : 'Less' }}
                                        <ux-icon right :icon="element.collapsed ? `fa-angle-down` : `fa-angle-up`" />
                                    </ux-button>
                                </flex-cell>
                                <flex-cell vcenter shrink>
                                    <ux-button icon tag="a" v-if="canRemoveValue" @click="remove(element)">
                                        <ux-icon icon="fa-times" />
                                    </ux-button>
                                </flex-cell>
                            </flex-row>
                        </ux-panel-header>
                        <ux-panel-body @keydown.enter="enterPress($event)" v-show="!collapsible || !element.collapsed">
                           

                            <ux-form ref="form" @form:state="stateChange" :parentModel="parentModel" v-model="model[index]" :flex="sameLine" :fields="field.fields" />
                        </ux-panel-body>
                    </ux-panel>
                </template>
            </draggable>
        </template>
        <template v-else>
            <!-- :key="guid"  -->
            <ux-panel ref="row" v-for="(element, index) in model">
                <ux-panel-header>
                    <flex-row vcenter gap>
                        <flex-cell shrink v-if="reorderable">
                            <ux-icon icon="fa-arrows" />
                        </flex-cell>
                        <flex-cell vcenter>
                            <div>
                                <strong>{{multiLabel(element, index)}}</strong>
                            </div>
                        </flex-cell>
                        <flex-cell shrink v-if="collapsible">
                            <ux-button size="xs" tag="a" @click="element.collapsed = !element.collapsed">
                                {{element.collapsed ? 'More' : 'Less' }}
                                <ux-icon right :icon="element.collapsed ? `fa-angle-down` : `fa-angle-up`" />
                            </ux-button>
                        </flex-cell>
                        <flex-cell vcenter shrink>
                            <ux-button icon tag="a" v-if="canRemoveValue" @click="remove(element)">
                                <ux-icon icon="fa-times" />
                            </ux-button>
                        </flex-cell>
                    </flex-row>
                </ux-panel-header>
                <ux-panel-body @keydown.enter="enterPress($event)" v-show="!element.collapsed">
                    <ux-form ref="form" @form:state="stateChange" :parentModel="parentModel" v-model="model[index]" :flex="sameLine" :fields="field.fields" />
                </ux-panel-body>
            </ux-panel>
        </template>
        <ux-button v-if="canAddValue" @click="add()">{{addLabel}}
            <ux-icon icon="fa-plus" right />
        </ux-button>
    </div>
    <template v-else>
        <ux-form ref="form" @form:state="stateChange" :parentModel="parentModel" v-model="model" :flex="sameLine" :fields="field.fields" />
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
// import draggable from 'vuedraggable'

import draggable from 'vuedraggable/src/vuedraggable'

export default {
    mixins: [InputMixin],
    //TODO check whether we should move draggable into the input mixin
    components: { draggable },
    props: {
        modelValue: {
            type: [Object, Array],
        },
    },
    data() {
        return {
            drag: false,
        }
    },
    created() {

        // if (Array.isArray(this.modelValue)) {
        //     this.modelValue.forEach(function(entry) {
        //         entry.guid = Math.random();
        //     })
        // }
    },
    computed: {
        groupKey() {
            return `${this.field.key}-order`;
        },
        collapsible() {
            return this.field.collapsible;
        },
        reorderable() {
            return this.multiValue && this.field.reorderable;
        },
        sameLine() {
            return this.field.sameLine;
        }
    },
    methods: {
        stateChange(details) {
            this.$emit('form:state', details);
        },
        multiLabel(entry, index) {

            if (entry.title) {
                return entry.title;
            }

            if (entry.name) {
                return entry.name;
            }

            if (entry.firstName) {
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
            return {
                // guid: Math.random(),
            };
        },
    }
}
</script>
<style lang="scss" scoped>
.ux-multi-group {
    margin-bottom: 1em;
}
</style>