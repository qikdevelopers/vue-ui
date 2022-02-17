<template>
    <component :is="element"  class="ux-icon fa" :class="classes"/>
</template>
<script>

export default {
    props: {
        icon: {
            type: [Object, String],
        },
        spin: {
            type: Boolean,
        },
        left: {
            type: Boolean,
        },
        right: {
            type: Boolean,
        },
    },
    computed: {
        classes() {

            var array = [];

            array.push(this.icon);

            if(this.spin) {
                array.push(`fa-spin`);
            }

            if(this.left) {
                array.push('ux-icon-left')
            }
            if(this.right) {
                array.push('ux-icon-right')
            }
            return array;
        },
        element() {
            return 'i'
        },
    },
}
</script>
<style lang="scss" scoped>
.ux-icon {
    
    &.ux-icon-left {
        margin-right:0.4em
    }

    &.ux-icon-right {
        margin-left:0.4em
    }
}
</style>