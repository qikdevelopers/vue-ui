<template>
    <div class="search">
        <input v-model="model" :placeholder="placeholder" />
        <div @click="clear()" class="icon">
        <ux-icon :icon="icon"/>
       
    </div>

    </div>
</template>
<script>
import _debounce from 'lodash/debounce';




export default {
    props: {
        modelValue: {
            type: String,
        },
        placeholder: {
            type: String,
        },
        debounce: {
            type: Number,
            default () {
                return 500;
            }
        },
        loading:{
            type:Boolean,
        }
    },
    mounted() {
        var self = this;
        self.dispatch = _debounce(() => {
            self.$emit('update:modelValue', self.value);
        }, self.debounce)
    },
    data() {
        return {
            value: String(this.modelValue),
        }
    },
    methods:{
        clear() {
            this.value = '';
            this.$emit('update:modelValue', this.value);
        }
    },
    watch: {
        modelValue(val, old) {
            console.log('Model value changed', val, old);
            this.value = val;
        },
    },
    computed: {
        icon() {
            return this.loading ? `fa-spinner fa-spin` : this.value ? `fa-times` : `fa-search`;
        },
        selectableOptions() {
            return this.options.map(function(option) {
                const value = option.value || option;
                const label = option.title || option.name || option.label || value;

                return {
                    label,
                    value,
                }
            })
        },
        model: {
            get() {
                return this.value;
            },
            set(value) {
                this.value = value;
                this.dispatch();
            }
        }
    }
}
</script>
<style lang="scss" scoped>


.search {
    position: relative;
    width:100%;

    & > .icon {
        position:absolute;
        right:0;
        top:0;
        bottom:0;
        line-height: 2.7em;
        padding:0 1em;
    }

    input {
        width:100%;
        border-radius: 5em;
        padding: 0.6em 1em;
        box-sizing: border-box;
        background: rgba(#000, 0.05);
        border: 1px solid transparent;
        font-size: inherit;
        appearance: none;
        line-height: 1;
        // height: 2.5em;

        &:focus {
            background: #fff;
            border: 1px solid var(--primary);
            outline: none;
        }
    }
}
</style>