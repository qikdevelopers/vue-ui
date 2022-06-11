<template>
    <label class="ux-field-title" v-if="showLabel">{{label}} <span class="ux-required-marker" v-if="required">*</span></label>
    <div class="ux-field-description" v-if="showDescription">{{description}}</div>
    <div v-if="multiValue">
        <flex-row class="ux-text-row" :key="index" v-for="(entry, index) in model">
            <flex-cell>
                <pre>{{entry}}</pre>
            </flex-cell>
            <flex-cell shrink vcenter>
                <ux-button tag="a" icon v-if="canRemoveValue" @click="remove(entry)">
                    <ux-icon icon="fa-times" />
                </ux-button>
            </flex-cell>
        </flex-row>
        <ux-button v-if="canAddValue" @click="add()">{{addLabel}} <ux-icon icon="fa-plus" right/></ux-button>
    </div>
    <template v-else>
        <pre>{{model}}</pre>
    </template>
</template>
<script>
import InputMixin from './input-mixin';

export default {
    props: {
        modelValue: {
            type:Object,
        },
    },
    mixins: [InputMixin],
    computed: {

    },
    methods: {
        getNewDefaultEntry() {
            return {};
        },
    },
}
</script>
<style lang="scss" scoped>
 pre {
    border-radius:0.5em;
    background: #222;
    font-size: 0.8em;
    color: #ddd;
    padding: 1em;
    display: block;
 }
</style>