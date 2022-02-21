<template>
    <div class="native-select">
        <select v-model="model">
            <option :value="option.value" v-for="option in selectableOptions">{{option.label}}</option>
        </select>
        <slot/>
    </div>
</template>
<script>

export default {
    props: {
        modelValue: {
        },
        options:{
            type:Array,
            required:true,
        },
    },
    data() {
        return {
            value: this.modelValue,
        }
    },
    watch: {
        modelValue(val, old) {
            this.value = this.val;
        }
    },
    computed: {
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
                this.$emit('update:modelValue', this.value);
            }
        }
    }
}
</script>
<style lang="scss" scoped>

    .native-select {
        position:relative;
        

        select {
            opacity: 0;
            appearance:none;
            width:100%;
            height:100%;
            position:absolute;
        }
    }
</style>