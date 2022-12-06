<template>
    <div @keydown.enter.stop="enterPress($event)">
    <label class="ux-field-title" v-if="showLabel">{{label}} <span class="ux-required-marker" v-if="required">*</span></label>   
    <div class="ux-field-description" v-if="showDescription">{{description}}</div>
    <div v-if="multiValue">
        <flex-row class="ux-text-row" :key="index" v-for="(entry, index) in model">
            <flex-cell>
                <div class="expression-field-wrap">
                    <expression-editor :field="field" @focus="touch" ref="input" v-model="model[index]" class="ux-expression ux-field-focus ux-text-area-multiple" />
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
    <div class="expression-field-wrap" v-else>
        <expression-editor :field="field" class="ux-expression ux-field-focus ux-text-area-single" @focus="touch" v-model="model" />
    </div>
</div>
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
        enterPress() {

        },
        getNewDefaultEntry() {
            return '';
        },
    },
}
</script>
<style lang="scss" scoped>

.expression-field-wrap {
    display: flex;
}
</style>