<template>
    <label class="ux-field-title" v-if="showLabel">{{label}} <span class="ux-required-marker" v-if="required">*</span></label>
    <div class="ux-field-description" v-if="showDescription">{{description}}</div>
    <div v-if="multiValue">
        <flex-row class="ux-text-row" :key="index" v-for="(entry, index) in model">
            <flex-cell>
                <input type="datetime-local" class="ux-field-focus ux-text-input-multiple" @focus="touch" ref="input"  @keydown.enter.stop.prevent="add()" v-model="model[index]" />
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
        <input type="datetime-local" class="ux-field-focus ux-text-input-single" @focus="touch" v-model="model" />
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
            type: [Date, String, Array],
        },
    },
    mixins: [InputMixin],
    computed: {
        model: {
            get() {
                let val = this.cleanOutput(this.value);
                return val;
            },
            set(newValue) {
                if (!newValue) {
                    this.value = undefined;
                    this.dispatch()
                    return;
                }

                //Invalid date so no change here
                if (newValue === 'invalid') {
                    return;
                }

                ////////////////////////

                var val = this.cleanOutput(newValue);
                var existing = this.cleanOutput(this.value);

                if (val != existing) {
                    newValue = this.cleanInput(val);
                    this.value = newValue;
                    this.dispatch();
                }

            }
        },
    },
    methods: {
        cleanOutputValue(d) {
            d = d ? new Date(d) : new Date();
            return `${d.getFullYear()}-${zero(d.getMonth() + 1)}-${zero(d.getDate())}T${zero(d.getHours())}:${zero(d.getMinutes())}`;
        },
        cleanInputValue(d) {
            let dt = new Date(d);
            if (dt.toString() == 'Invalid Date') {
                return 'invalid';
            }
            return dt.toISOString();
        },
        getNewDefaultEntry() {
            return new Date();
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