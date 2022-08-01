<template>
    <label class="ux-field-title" v-if="showLabel">{{label}} <span class="ux-required-marker" v-if="required">*</span></label>
    <div class="ux-field-description" v-if="showDescription">{{description}}</div>
    <div v-if="multiValue">
        <flex-row class="ux-text-row" :key="index" v-for="(entry, index) in model">
            <flex-cell>
                <textarea contenteditable @focus="touch" ref="input" v-model="model[index]" class="ux-textarea  ux-field-focus ux-text-area-multiple"/>
            </flex-cell>
            <flex-cell shrink vcenter>
                <ux-button tag="a" icon v-if="canRemoveValue" @click="remove(entry)">
                    <ux-icon icon="fa-times" />
                </ux-button>
            </flex-cell>
        </flex-row>
        <ux-button v-if="canAddValue" @click="add()">{{addLabel}}</ux-button>
    </div>
    <template v-else>
        <textarea class="ux-textarea ux-field-focus ux-text-area-single" @focus="touch" v-model="model"  role="textbox" contenteditable/>

        <!-- <textarea class="ux-field-focus ux-text-area-single" @focus="touch" v-model="model" /> -->
    </template>
</template>
<script>
import InputMixin from './input-mixin';

export default {
    props: {
        modelValue: {
            type: [String, Array],
        },
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
.ux-text-row {
    margin-bottom: 0.5em;
}

.ux-textarea,
textarea {
    border-radius: 0.1em;
    padding: 0.5em;
    box-sizing: border-box;
    background: rgba(#000, 0.05);
    border: 1px solid rgba(#000, 0.1);
    font-size: inherit;
    appearance: none;
    line-height: 1;
    min-height: 5em;
    font-family: inherit;
    resize: vertical;
    overflow: hidden;

    &:focus {
        background: none;
        border: 1px solid var(--primary);
        outline: none;
    }
}

.ux-text-row .ux-btn {
    margin-left: 0.25em;
}

.ux-text-area-multiple {
    width: 100%;
}

.ux-text-area-single {
    width:100%;
    // width: calc(100% - 0.5em);
    // margin: 0 0.5em 0 0;
}
</style>