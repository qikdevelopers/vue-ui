<template>
    <label class="ux-field-title" v-if="showLabel">{{label}} <span class="ux-required-marker" v-if="required">*</span></label>
    <div class="ux-field-description" v-if="showDescription">{{description}}</div>
    <div v-if="multiValue">
        <flex-row class="ux-text-row" :key="index" v-for="(entry, index) in model">
            <flex-cell>
                <div class="ux-text-wrap">
                    <span class="ux-text-prefix" v-if="prefix">{{prefix}}</span>
                    <input :type="getInput(index)" v-if="lazy" :class="inputClasses" class="ux-field-focus ux-text-input-multiple" :placeholder="actualPlaceholder" @focus="touch" ref="input" @keydown.enter.stop.prevent="add()" v-model.lazy="model[index]" />
                    <input :type="getInput(index)" v-if="!lazy" :class="inputClasses" class="ux-field-focus ux-text-input-multiple" :placeholder="actualPlaceholder" @focus="touch" ref="input" @keydown.enter.stop.prevent="add()" v-model="model[index]" />
                    <span class="ux-text-suffix" v-if="suffix">{{suffix}}</span>
                </div>
            </flex-cell>
            <flex-cell shrink vcenter v-if="sensitive">
                <ux-button tag="a" icon @click="toggleMask(index)">
                    <ux-icon :icon="unmaskedLookup[`${index}`] ? 'fa-eye' : 'fa-eye-slash'" />
                </ux-button>
            </flex-cell>
            <flex-cell shrink vcenter v-if="copyable">
                <ux-button tag="a" icon @click="copy(index)">
                    <ux-icon icon="fa-copy" />
                </ux-button>
            </flex-cell>
            <flex-cell shrink vcenter>
                <ux-button tag="a" icon v-if="canRemoveValue" @click="remove(entry)">
                    <ux-icon icon="fa-times" />
                </ux-button>
            </flex-cell>
        </flex-row>
        <ux-button v-if="canAddValue" @click="add()">{{addLabel}}
            <ux-icon icon="fa-plus" right />
        </ux-button>
    </div>
    <template v-else>
        <flex-row>
            <flex-cell>
                <div class="ux-text-wrap">
                    <span class="ux-text-prefix" v-if="prefix">{{prefix}}</span>
                    <input :type="actualInputType" v-if="lazy" ref="input" :class="inputClasses" class="ux-field-focus ux-text-input-single" :placeholder="actualPlaceholder" @focus="touch" v-model.lazy="model" />
                    <input :type="actualInputType" v-if="!lazy" ref="input" :class="inputClasses" class="ux-field-focus ux-text-input-single" :placeholder="actualPlaceholder" @focus="touch" v-model="model" />
                    <span class="ux-text-suffix" v-if="suffix">{{suffix}}</span>
                </div>
            </flex-cell>
            <flex-cell shrink vcenter v-if="sensitive">
                <ux-button tag="a" icon @click="toggleMask">
                <ux-icon :icon="unmasked ? 'fa-eye' : 'fa-eye-slash'" />
            </ux-button>
            </flex-cell>
            <flex-cell shrink vcenter v-if="copyable">
                <ux-button tag="a" icon @click="copy">
                    <ux-icon icon="fa-copy" />
                </ux-button>
            </flex-cell>
        </flex-row>
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
    data() {
        return {
            unmasked:false,
            unmaskedLookup:{},
        }
    },
    mixins: [InputMixin],
    computed: {
        copyable() {
            return this.$sdk.global.copyText && this.field.copyable;
        },
        inputClasses() {
            const array = [];

            array.push(`ux-text-input-${this.inputType}`);
            return array.join(' ');
        },
        actualInputType() {
            return this.unmasked ? 'text' : this.inputType;
        },
        sensitive() {
            return this.inputType === 'password';
        },
        inputType() {
            switch (this.field.widget) {
                case 'password':
                case 'email':
                    return this.field.widget;
                    break;
                default:

                    switch (this.field.type) {
                        case 'email':
                            return 'email';
                            break;
                        default:
                            return 'text';
                            break;
                    }
                    break;
            }
        },
        lazy() {
            switch (this.type) {
                case 'integer':
                case 'number':
                case 'decimal':
                case 'float':
                case 'url':
                case 'key':
                    return true;
                    break;
            }
        },
        actualPlaceholder() {
            if (this.field.placeholder) {
                return this.field.placeholder;
            }

            switch (this.type) {
                case 'integer':
                case 'number':
                case 'decimal':
                case 'float':
                    return '0';
                    break;
                case 'url':
                    return 'https://www.website.com'
                    break;
                case 'email':
                    return 'you@youremail.com'
                    break;
            }
        }
    },
    methods: {
        copy(index) {

            let value;
            if(this.maximum === 1) {
                value = this.model;
            } else {
                 value = this.model[index];
            }

            this.$sdk.global.copyText(value);
        },
        getInput(index) {
             return this.unmaskedLookup[`${index}`] ? 'text' : this.inputType;
        },
        toggleMask(index) {
            

            if(this.maximum === 1) {
                this.unmasked = !this.unmasked;
            } else {
                this.unmaskedLookup[`${index}`] = !this.unmaskedLookup[`${index}`];
            }
        },
        cleanOutputValue(v) {
            var cleaned = this.cleanTextInput(v, this.type, this);
            return cleaned ? String(cleaned) : '';
        },
        cleanInputValue(v) {
            return this.cleanTextInput(v, this.type, this);
        },
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

input {
    border-radius: 0.1em;
    padding: 0.5em;
    box-sizing: border-box;
    background: rgba(#000, 0.05);
    border: 1px solid rgba(#000, 0.1);
    font-size: inherit;
    appearance: none;
    line-height: 1;
    height: 2.5em;
    color: inherit;

    &:focus {
        background: none;
        border: 1px solid var(--primary);
        outline: none;
    }
}


.ux-text-wrap {
    position: relative;

    &.prefixed {
        input {
            padding-left: 1.2em;
        }
    }

    .ux-text-prefix {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 1em;
        pointer-events: none;
        display: flex;
        align-items: center;
        padding: 0.5em 0;
        justify-content: right;
        opacity: 0.5;
    }

    .ux-text-suffix {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        pointer-events: none;
        display: flex;
        align-items: center;
        padding: 0.5em;
        opacity: 0.5;
    }
}

.ux-text-row .ux-btn {
    margin-left: 0.25em;
}

.ux-text-input-password {
    font-family: monospace;
}

.ux-text-input-multiple {
    width: 100%;
}

.ux-text-input-single {
    width: 100%;
    // width: calc(100% - 0.5em);
    // margin: 0 0.5em 0 0;
}
</style>