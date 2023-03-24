<template>
    <component class="ux-list-item" :is="element" :to="to" :href="href" :target="target" :disabled="disabled">
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
    },
    computed: {
        element() {

            if (this.to || this.href) {
                return 'ux-link';
            }

            return 'div';



        },
    }

}
</script>
<style lang="scss" scoped>
.ux-list-item {
    background: #fff;
    cursor: pointer;

    &:hover {
        background: darken(#fff, 5%);
    }
}
</style>