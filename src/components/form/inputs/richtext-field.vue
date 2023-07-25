<template>
    <div>
    <label class="ux-field-title" v-if="showLabel">{{label}} <span class="ux-required-marker" v-if="required">*</span></label>   
    <div class="ux-field-description" v-if="showDescription">{{description}}</div>
    <div v-if="multiValue">
        <flex-row class="ux-text-row" :key="index" v-for="(entry, index) in model">
            <flex-cell>
                <div class="richtext-field-wrap">
                    <richtext @focus="touch" ref="input" v-model="model[index]" class="ux-richtext ux-field-focus ux-text-area-multiple" />
                </div>
            </flex-cell>
            <flex-cell shrink vcenter>
                <ux-button tag="a" icon v-if="canRemoveValue" @click="remove(entry)">
                    <ux-icon icon="fa-times" />
                </ux-button>
            </flex-cell>
        </flex-row>
        <ux-button v-if="canAddValue" @click="add()">{{addLabel}}</ux-button>
    </div>
    <div class="richtext-field-wrap" v-else>
        <richtext class="ux-richtext ux-field-focus ux-text-area-single" @focus="touch" v-model="model" />
    </div>
</div>
</template>
<script>
import RichText from './richtext.vue';


import InputMixin from './input-mixin';

export default {
    components: {
        richtext:RichText,
    },
    props: {
        modelValue: {
            type: [String, Array],
        },
    },
    computed:{
        // syntax() {
        //     return this.field ? this.field.syntax : 'json';
        // }
    },
    mixins: [InputMixin],
    methods: {
        getNewDefaultEntry() {
            return '';
        },
    },
}
</script>
<style lang="scss" scoped>

.richtext-field-wrap {
    display: flex;
    min-height: 300px;
    margin-bottom: 5px;
}
</style>