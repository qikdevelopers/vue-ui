<template>
    <component @click="clicked" :is="element" :to="to" :href="href" :target="target" :class="class" class="ux-link">
        <slot />
    </component>
</template>
<script>
export default {
    props: {
        to: {
            type: [Object, String],
        },
        href: {
            type: String,
        },
        target: {
            type: String,
        },
        disabled: {
            type: Boolean,
        }
    },
    methods:{
        clicked(event) {
            var self = this;

            if(self.buildMode) {
                self.$qik.app.to(self.to);
            }
        },
    },
    computed: {
        buildMode() {
            return !!this.$qik && this.$qik.app && this.$qik.app.builder;
        },
        class() {

            var array = [];

            if(this.disabled) {
                array.push('disabled');
            }

            if(this.href || this.to) {
                array.push('haslink')
            }

            return array;
        },
        element() {
            if (this.to) {
                return `router-link`;
            } else {
                return 'a';
            }
        }
    },
}
</script>
<style lang="scss" scoped>


a {
    cursor: pointer;



    &.disabled {
        cursor: none;
        pointer-events:none;
    }
}


</style>