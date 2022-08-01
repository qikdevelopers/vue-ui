<template>
    <label class="ux-field-title" v-if="showLabel">{{label}} <span class="ux-required-marker" v-if="required">*</span></label>
    <div class="ux-field-description" v-if="showDescription">{{description}}</div>
    <div v-if="multiValue">
        <flex-row class="ux-text-row" :key="index" v-for="(entry, index) in model">
            <flex-cell>
                <div class="ux-text-wrap prefixed">
                     <span class="ux-text-prefix">Label</span>
                    <input v-if="lazy" class="ux-field-focus ux-text-input-multiple" placeholder="Label" @focus="touch" ref="input" @keydown.enter.stop.prevent="add()" @blur="titleBlurred(index)" @update:modelValue="entryTitleChanged(index)" v-model.lazy="model[index].title" />
                    <input v-if="!lazy" class="ux-field-focus ux-text-input-multiple" placeholder="Label" @focus="touch" ref="input" @keydown.enter.stop.prevent="add()" @blur="titleBlurred(index)" @update:modelValue="entryTitleChanged(index)" v-model="model[index].title" />
                </div>
            </flex-cell>
            <flex-cell>
                <div class="ux-text-wrap prefixed">
                     <span class="ux-text-prefix">Value</span>
                    <input v-if="lazy" class="ux-field-focus ux-text-input-multiple" placeholder="Value" @focus="valueTouched(index)" ref="valueInput" @keydown.enter.stop.prevent="add()" v-model.lazy="model[index].value" />
                    <input v-if="!lazy" class="ux-field-focus ux-text-input-multiple" placeholder="Value" @focus="valueTouched(index)" ref="valueInput" @keydown.enter.stop.prevent="add()" v-model="model[index].value" />
                </div>
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
        <flex-row class="ux-text-row">
            <flex-cell>
                <div class="ux-text-wrap prefixed">
                     <span class="ux-text-prefix">Label</span>
                    <input v-if="lazy" class="ux-field-focus ux-text-input-multiple" placeholder="Label" @focus="touch" ref="input" @keydown.enter.stop.prevent="add()" @blur="titleBlurred(index)" @update:modelValue="entryTitleChanged" v-model.lazy="model.title" />
                    <input v-if="!lazy" class="ux-field-focus ux-text-input-multiple" placeholder="Label" @focus="touch" ref="input" @keydown.enter.stop.prevent="add()" @blur="titleBlurred(index)" @update:modelValue="entryTitleChanged" v-model="model.title" />
                </div>
            </flex-cell>
            <flex-cell>
                <div class="ux-text-wrap prefixed">
                     <span class="ux-text-prefix">Value</span>
                    <input v-if="lazy" class="ux-field-focus ux-text-input-multiple" placeholder="Value" @focus="valueTouched" ref="valueInput" @keydown.enter.stop.prevent="add()" v-model.lazy="model.value" />
                    <input v-if="!lazy" class="ux-field-focus ux-text-input-multiple" placeholder="Value" @focus="valueTouched" ref="valueInput" @keydown.enter.stop.prevent="add()" v-model="model.value" />
                </div>
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
    mixins: [InputMixin],
    computed: {
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
        },
        addLabel() {
            if (this.numValues) {
                return `Add another option`

            } else {
                return `Add options`
            }
        },
    },
    methods: {
        titleBlurred(index) {
            var entry;
            if (this.multiValue) {
                entry = this.model[index];
            } else {
                entry = this.model;
            }

            //Leave it pristine
            if(entry.title === entry.value) {
                return;
            }

            //Clear it out
            delete entry.pristine;
        },
        valueTouched(index) {
            var entry;
            if (this.multiValue) {
                entry = this.model[index];
            } else {
                entry = this.model;
            }

            ///////////////

            delete entry.pristine;

            ///////////////

            this.touch();
        },
        entryTitleChanged(index) {

            //Need this as otherwise the v-model will beat it
            this.$nextTick(function() {
                var entry;
                if (this.multiValue) {
                    entry = this.model[index];
                } else {
                    entry = this.model;
                }

                if (entry.pristine) {
                    entry.value = entry.title;
                }

            })
        },
        cleanOutputValue(obj) {
            obj.value = this.cleanTextInput(obj.value, this.type, this);
            return obj;
        },
        cleanInputValue(obj) {
            obj.value = this.cleanTextInput(obj.value, this.type, this);
            return obj;
        },
        getNewDefaultEntry() {
            return {
                pristine:true,
            };
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
            padding-left: 1.8em;
        }
    }

    .ux-text-prefix {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 3.1em;
        pointer-events: none;
        display: flex;
        align-items: center;
        padding: 0.5em 0;
        justify-content: right;
        opacity: 0.5;
        font-size:0.5em;
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

.ux-text-input-multiple {
    width: 100%;
}

.ux-text-input-single {
    width: 100%;
    // width: calc(100% - 0.5em);
    // margin: 0 0.5em 0 0;
}
</style>