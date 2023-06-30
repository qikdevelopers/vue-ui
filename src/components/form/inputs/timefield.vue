<template>
    <label class="ux-field-title" v-if="showLabel">{{label}} <span class="ux-required-marker" v-if="required">*</span></label>
    <div class="ux-field-description" v-if="showDescription">{{description}}</div>
    <div v-if="multiValue">
        <flex-row class="ux-text-row" :key="index" v-for="(entry, index) in model">
            <flex-cell>
                <input type="time" class="ux-field-focus ux-text-input-multiple" @focus="touch" ref="input"  @keydown.enter.stop.prevent="add()" v-model="model[index]" />
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
        <input type="time" class="ux-field-focus ux-text-input-single" @focus="touch" v-model="model" />
    </template>
</template>
<script>
import InputMixin from './input-mixin';

//////////////////////////

function zero(input) {
    if (String(input).length < 2) {
        input = `0${input}`;
    }
    return input
}

//////////////////////////

export default {
    props: {
        modelValue: {
            type:String,
        },
    },
    mixins: [InputMixin],
    methods: {
        cleanInputValue(str) {
            const cleaned = str.split(':').join('');
            return cleaned;
        },
        cleanOutputValue(string) {

            let hours = zero(string.slice(0,2));
            let mins = zero(string.slice(2));
            
            const cleaned = `${hours}:${mins}`;
            return cleaned;
        },
        getNewDefaultEntry() {
            return '00:00';
        },
    },
}
</script>
<style lang="scss" scoped>
.ux-text-row {
    margin-bottom: 0.5em;
}

input {
    border-radius: 0.1em;
    padding: 0.5em;
    box-sizing: border-box;
    background: rgba(#000, 0.05);
    border: 1px solid rgba(#000, 0.1);
    font-size: inherit;
    // appearance: none;
    font-family:inherit;
    line-height: 1;
    height: 2.5em;
    color:inherit;

    &:focus {
        background: none;
        border: 1px solid var(--primary);
        outline: none;
    }
}

.ux-text-row .ux-btn {
    margin-left: 0.25em;
}

.ux-text-input-multiple {
    width: 100%;
}

.ux-text-input-single {
    width:100%;
    // width: calc(100% - 0.5em);
    // margin: 0 0.5em 0 0;
}
</style>