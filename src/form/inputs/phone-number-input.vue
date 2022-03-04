<template>
    <label class="ux-field-title" v-if="showLabel">{{label}} <span class="ux-required-marker" v-if="required">*</span></label>
    <div class="ux-field-description" v-if="showDescription">{{description}}</div>
    <div v-if="multiValue">
        <flex-row wrap class="ux-text-row" :key="index" v-for="(entry, index) in model">
            <flex-cell shrink>
                <native-select v-model="entry.countryCode" :field="countryCodeField">
                    <template v-if="!entry.countryCode">
                        Country Code
                    </template>
                    <template v-else>
                        <div v-if="lookup[entry.countryCode]">{{lookup[entry.countryCode].emoji}} - {{lookup[entry.countryCode].alpha2}}</div>
                        <div v-else>Loading</div>
                    </template>
                </native-select>
                <!-- <select class="ux-country-code-select" v-model="entry.countryCode">
                    <option value="">None</option>
                    <option :value="country.value" v-for="country in countryCodes">{{country.title}}</option>
                </select> -->
            </flex-cell>
            <flex-cell>
                <div class="ux-text-wrap">
                    <input class="ux-field-focus ux-text-input-multiple" :placeholder="actualPlaceholder" @focus="touch" ref="input" @keydown.enter.stop.prevent="add()" v-model="entry.number" />
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
        <flex-row wrap class="ux-text-row" :key="index">
            <flex-cell shrink>
                <select class="ux-country-code-select" v-model="model.countryCode">
                    <option value="">None</option>
                    <option :value="country.value" v-for="country in countryCodes">{{country.title}}</option>
                </select>
            </flex-cell>
            <flex-cell>
                <div class="ux-text-wrap">
                    <input class="ux-field-focus ux-text-input-multiple" :placeholder="actualPlaceholder" @focus="touch" ref="input" @keydown.enter.stop.prevent="add()" v-model="model.number" />
                </div>
            </flex-cell>
        </flex-row>
    </template>
</template>
<script>
import InputMixin from './input-mixin';
import NativeSelect from './select.vue';



export default {
    props: {
        modelValue: {
            type: [Object, Array],
        },
    },
    components: {
        NativeSelect,
    },
    mixins: [InputMixin],
    async created() {
        var countries = await this.$qik.system.countries();

        var mapped = countries.reduce(function(set, country) {

            if (!country.countryCallingCodes || !country.countryCallingCodes.length) {
                return set;
            }

            ////////////////////////////////////

            var title = `${country.name} (${country.countryCallingCodes.join(', ')})`;
            var matchingKey = title;

            if (set.values[matchingKey]) {
                return set;
            }

            set.values[matchingKey] = true;

            set.lookup[country.alpha2] = country;

            set.value.push({
                title: `${title} - ${country.emoji}`,
                value: country.alpha2,
                emoji: country.emoji,
            })

            return set;
        }, {
            value: [],
            values: {},
            lookup: {},
        })

        this.countryCodes = mapped.value;
        this.lookup = mapped.lookup;

    },
    data() {
        return {
            countryCodes: [],
            lookup: {},
        }
    },
    computed: {

        actualPlaceholder() {
            return `+61 000 000 000`;
        },
        countryCodeField() {
            return {
                minimum: 0,
                maximum: 1,
                type: 'string',
                options: this.countryCodes,

            }
        },
        defaultCountryCode() {

            var userCountryCode = this.user ? this.user.countryCode : '';
            var orgCountryCode = this.user && this.user.organisation ? this.user.organisation.countryCode : '';


            return userCountryCode || orgCountryCode;
        },
    },
    methods: {

        // cleanOutputValue(v) {
        //     var cleaned = cleanInput(v, this.type, this);
        //     return cleaned ? String(cleaned) : '';
        // },
        // cleanInputValue(v) {
        //     return cleanInput(v, this.type, this);
        // },
        getNewDefaultEntry() {
            return {
                label: '',
                countryCode: this.defaultCountryCode,
                number: '',
            };
        },
    },
}
</script>
<style lang="scss" scoped>
.ux-text-row {
    margin-bottom: 0.5em;
}


// select,
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
        border: 1px solid $primary;
        outline: none;
    }
}


// select {
//     max-width: clamp(30px, 5em, 100px);
// }


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
    width: 100%;
    // width: calc(100% - 0.5em);
    // margin: 0 0.5em 0 0;
}
</style>