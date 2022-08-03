<template>
    <label class="ux-field-title" v-if="showLabel">{{label}} <span class="ux-required-marker" v-if="required">*</span></label>
    <div class="ux-field-description" v-if="showDescription">{{description}}</div>
    <div v-if="multiValue">
        <flex-row class="ux-text-row" :key="index" v-for="(entry, index) in model">
            <flex-cell>
                <div class="ux-text-wrap" :class="{prefixed:prefix, suffixed:suffix}">
                    <span class="ux-text-prefix" v-if="prefix">{{prefix}}</span>
                    <input class="ux-field-focus ux-text-input-multiple" ref="input" placeholder="0.00" :key="`proxy-index-${index}`" @keydown.enter.stop.prevent="add()" @blur="update($event, index)" v-model.lazy="proxy[index]" @focus="touch" />
                    <span class="ux-text-suffix" v-if="suffix">{{suffix}}</span>
                </div>
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
        <div class="ux-text-wrap" :class="{prefixed:prefix, suffixed:suffix}">
            <span class="ux-text-prefix" v-if="prefix">{{prefix}}</span>
            <input class="ux-field-focus ux-text-input-single" ref="input" :key="proxy" placeholder="0.00" @keyup.enter.stop.prevent="unfocus" @focus="touch" v-model.lazy="proxy" />
            <span class="ux-text-suffix" v-if="suffix">{{suffix}}</span>
        </div>
    </template>
</template>
<script>
import InputMixin from './input-mixin';

function setFormat(value) {
    if (value != "") {
        value = parseFloat(value.replace(/\//g, ""))
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, "/");
    }

    return value;
}


export default {

    props: {
        modelValue: {
            type: [String, Array],
        },
    },
    mixins: [InputMixin],
    methods: {
        update(event, index) {
            var formatted = this.format(event.target.value);
            this.model[index] = formatted;
        },
        format(v) {
            v = String(v).replace(/[^0-9.-]/g, '')

            var v = (parseFloat(v) * 100);
            if (isNaN(v)) {
                return '';
            }

            v = Math.round(v);
            return v;
        },
        unformat(v) {
            v = String(v).replace(/[^0-9.-]/g, '')

            var v = (parseFloat(v) / 100);
            if (isNaN(v)) {
                return '';
            }

            v = v.toFixed(2);
            return v;
        },
        getNewDefaultEntry() {
            return '';
        },
        unfocus() {
            this.$refs.input.blur();
            this.touch();
            // this.proxy = this.proxy;
            // this.model = this.format(this.unformat(this.model));
        },
    },
    computed: {
        model: {
            get() {
                return this.cleanOutput(this.value);
            },
            set(val) {
                this.value = this.cleanInput(val);
                this.dispatch();
            }
        },
        proxy: {
            get() {

                var self = this;

                if (self.multiValue) {
                    return self.model.map(self.unformat);
                } else {
                    return self.unformat(self.model);
                }
            },
            set(v) {
                var self = this;
                if (self.multiValue) {
                    self.model = v.map(self.format);
                } else {
                    self.model = self.format(v);
                }
            }
        },
        currency() {
            return String(this.field.currency || 'usd').toLowerCase();
        },
        prefix() {
            return this.$sdk.utils.currencySymbol(this.currency);
        },
        suffix() {
            return String(this.currency).toUpperCase();
        }
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
    text-align: left;
    direction: ltr;

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

.ux-text-input-multiple {
    width: 100%;
}

.ux-text-input-single {
    width:100%;
    // width: calc(100% - 0.5em);
    // margin: 0 0.5em 0 0;
}
</style>