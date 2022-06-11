<template>
    <div class="native-select">
        <select v-model="model">
            <option :value="option.value" v-for="option in selectableOptions">{{option.label}}</option>
        </select>
        <slot />
    </div>
</template>
<script>
    
import InputMixin from './input-mixin';

export default {
    mixins:[InputMixin],
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
    }
}
</script>
<style lang="scss" scoped>
.native-select {
    position: relative;


    select {
        opacity: 0;
        appearance: none;
        width: 100%;
        height: 100%;
        position: absolute;
    }
}
</style>