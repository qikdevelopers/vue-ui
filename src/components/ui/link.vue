<template>


    <component @click="clicked" :is="element" :to="to" :href="actualHref" :target="target" :class="class" class="ux-link">
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
        },
        active: {
            type: Boolean,
        }
    },
    methods:{
        clicked(event) {
            var self = this;

            if(self.to) {
                if(self.buildMode || self.nuxtMode) {
                    event.preventDefault();
                    event.stopImmediatePropagation();
                    return self.$sdk.app.to(self.to);
                }
            }

            if(self.href) {
                if(self.buildMode || self.nuxtMode) {
                    event.preventDefault();
                    event.stopImmediatePropagation();
                    return;
                }
            }
        },
    },
    computed: {

        actualHref() {

            if(this.href) {
                return this.href;
            }

            // If we are being rendered in nuxt
            // we need to create the href manually
            if(this.nuxtMode) {
                return this.$sdk.app.createHref(this.to);
            }
        },
        nuxtMode() {
            return this.to && this.$sdk.nuxt && this.$sdk.app && this.$sdk.app.createHref;
        },
        buildMode() {
            return !!this.$sdk && this.$sdk.app && this.$sdk.app.builder;
        },
        class() {

            var array = [];

            if(this.disabled) {
                array.push('disabled');
            }

            if(this.active) {
                array.push('active');
            }

            if(this.href || this.to) {
                array.push('haslink')
            }

            return array;
        },
        element() {

            if(this.nuxtMode) {
                return 'a';
            }

            if(this.buildMode) {
                return 'a';
            }

            if (this.to) {
                return `router-link`;
            }
            
            return 'a';
            
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