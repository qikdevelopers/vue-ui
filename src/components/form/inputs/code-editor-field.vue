<template>
    <label class="ux-field-title" v-if="showLabel">{{label}} <span class="ux-required-marker" v-if="required">*</span></label>   
    <div class="ux-field-description" v-if="showDescription">{{description}}</div>
    <div v-if="multiValue">
        <flex-row class="ux-text-row" :key="index" v-for="(entry, index) in model">
            <flex-cell>
                <div class="code-editor-field-wrap">
                    <code-editor :lang="syntax" @focus="touch" ref="input" v-model="model[index]" class="ux-code-editor ux-field-focus ux-text-area-multiple" />
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
    <div class="code-editor-field-wrap" v-else>
        <code-editor :lang="syntax" class="ux-code-editor ux-field-focus ux-text-area-single" @focus="touch" v-model="model" />
    </div>
</template>
<script>
import CodeEditor from './code-editor.vue';


import InputMixin from './input-mixin';

export default {
    components: {
        CodeEditor,
    },
    props: {
        modelValue: {
            type: [String, Array],
        },
    },
    computed:{
        syntax() {
            return this.field ? this.field.syntax : 'json';
        }
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

.code-editor-field-wrap {
    display: flex;
    min-height: 300px;
}
</style>