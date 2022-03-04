<template>
    <button class="ux-switch" :class="classes">
    </button>
</template>
<script>
export default {
    props: {
        value: {
            type: Boolean,
            default () {
                return false;
            }
        },
    },
    computed: {
        classes() {
            var array = [];
            if (this.value) {
                array.push(`ux-switch-true`);
            } else {
                array.push(`ux-switch-false`);
            }
            return array;
        },
    },
}
</script>
<style lang="scss" scoped>
.ux-switch {

    $size: 1.8em;
    border-radius: 1em;
    display: inline-block;
    position: relative;
    cursor: pointer;
    overflow: hidden;
    border: 1px solid rgba(#000, 0.1);
    height: 0;
    width: $size;
    padding: 0 $size $size;
    text-align: center;
    line-height: 2em;
    appearance: none;
    font-size: inherit;
    background: rgba(#000, 0.05);
    box-sizing: border-box;
    box-shadow: inset 0.1em 0.1em 0.3em rgba(#000, 0.2);
    vertical-align: top;


    &:after {
        content: '';
        display: block;
        background: #fff;
        height: 100%;
        width: 50%;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        position: absolute;
        border-radius: 1em;
        border: 1px solid rgba(#000, 0.3);
        box-sizing: border-box;
        box-shadow: 0 0 2em rgba(#000, 0.3);
        transition: transform 0.3s;
        transform: scale(0.8);
    }

    &:hover {
        border: 1px solid $primary;

        &:after {
            transform: scale(1);
        }
    }

    &.ux-switch-true {
        background: $primary;
        // border-color: #fff;

        &:after {
            transform:  translateX(100%);
        }
    }

    
}
</style>