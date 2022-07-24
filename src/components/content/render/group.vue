<template>
    <div class="ux-multi-group" v-if="multiValue">
        <ux-panel ref="row" :key="entry" v-for="(entry, index) in model">
            <ux-panel-header>
                <flex-row>
                    <flex-cell vcenter>
                        <div>
                            <strong>{{multiLabel(entry, index)}}</strong>
                        </div>
                    </flex-cell>
                </flex-row>
            </ux-panel-header>
            <ux-panel-body>
                <ux-render :submission="submission" :fields="fields" :flex="sameLine" :parentModel="parentModel" v-model="model[index]" />
            </ux-panel-body>
        </ux-panel>
    </div>
    <template v-else>
        <ux-render :submission="submission" :fields="fields" :flex="sameLine" :parentModel="parentModel" v-model="model" />
    </template>
</template>
<script>
import RenderMixin from './render-mixin.js';

export default {
    mixins: [RenderMixin],
    props: {
        modelValue: {
            type: [Object, Array],
        },
        submission:{
            type:Boolean,
            default:false,
        },
    },
    computed: {
        sameLine() {
            return this.field.sameLine;
        }
    },
    methods: {
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
    }
}
</script>
<style lang="scss" scoped>
.ux-multi-group {
    margin-bottom: 1em;
}
</style>