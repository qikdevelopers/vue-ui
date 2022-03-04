<template>
    <div class="ux-progress">
        <div class="ux-progress-bg" />
        <div class="ux-progress-fg" :style="barStyle" />
    </div>
</template>
<script>
export default {
    props: {
        value: {
            type: Number
        }
    },
    computed: {
        classes() {

            var array = [];

            array.push(this.icon);

            if (this.spin) {
                array.push(`fa-spin`);
            }

            if (this.left) {
                array.push('ux-icon-left')
            }
            if (this.right) {
                array.push('ux-icon-right')
            }
            return array;
        },
        percent() {
            return this.value;
        },
        barStyle() {
            return {
                width: `${this.percent}%`,
            }
        },
        element() {
            return 'i'
        },
    },
}
</script>
<style lang="scss" scoped>
.ux-progress {
    margin: 1em 0;
    position: relative;
    height: 1em;
}

.ux-progress-bg {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 100%;
    width: 100%;
    background: rgba(#000, 0.03);
    border-radius: 0.5em;
    box-shadow: inset 0px 0.3em 0.3em rgba(#000, 0.1);
}

.ux-progress-fg {
    background: $primary;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    height: 100%;
    border-radius: 0.5em;
    opacity: 1;
}
</style>