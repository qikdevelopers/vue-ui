<template>
    <button class="ux-checkbox" :class="classes">
        <ux-icon class="icon" icon="fa-check" />
    </button>
</template>
<script>
export default {
    props: {
        value: {
            type: Boolean,
            default() {
                return false;
            }
        },
    },
    computed: {
        classes() {
            var array = [];
            if (this.value) {
                array.push(`ux-checkbox-true`);
            } else {
                array.push(`ux-checkbox-false`);
            }
            return array;
        },
    },
}
</script>
<style lang="scss" scoped>
.ux-checkbox {

    $size: 1.2em;
    padding: 0.5em 1em;
    border-radius:0.3em;
    display: inline-block;
    position: relative;
    cursor: pointer;
    overflow: hidden;
    border: 1px solid rgba(#000, 0.2);
    background: #fff;
    height:0;
    overflow: hidden;
    width:$size;
    padding: 0 0 $size;
    text-align: center;
    line-height: 2em;
    appearance:none;
    font-size: inherit;
    vertical-align: top;

    .icon {
        opacity: 0;
        position:absolute;
        top:50%;
        left:50%;
        transform: scale(0) translate(-50%, -50%);
        transition: all 0.2s;
    }

    &.ux-checkbox-true {
        background: $primary;

        .icon {
            color: #fff;
            opacity: 1;
            transform: scale(1) translate(-50%, -50%);
        }
    }

    &:hover {
        border-color: $primary;
        .icon {
            opacity: 0.5 !important;
            transform: scale(1) translate(-50%, -50%);
        }
    }
}

</style>