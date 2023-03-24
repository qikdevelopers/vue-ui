<template>
    <div class="ux-info-box" :class="classes">
        <flex-row style="gap:1em" center>
            <flex-cell shrink v-if="icon">
                <div class="icon-circle">
                    <ux-icon :icon="icon" />
                </div>
            </flex-cell>
            <flex-cell>
                <slot />
            </flex-cell>
        </flex-row>
    </div>
</template>
<script>
export default {
    props: {
        icon: {
            type: [Object, String],
            default () {
                return 'fa-exclamation';
            }
        },
        type: {
            type: String,
            default: 'info',
        }
    },
    computed: {
        classes() {

            var array = [];



            array.push(`ux-info-${this.type}`)

            return array;
        },
    },
}
</script>
<style lang="scss" scoped>
.ux-info-box {

    border-radius: 0.3em;
    border: 1px solid rgba(#000, 0.1);
    margin-bottom: 1em;
    box-shadow: 0 4px 4px 0px rgba(0, 0, 0, 0.02);
    padding:1em;

   




    .icon-circle {
        border-radius: 100%;
        width: 2em;
        height: 2em;
        font-size: 1.3em;
        line-height: 2em;
        display: inline-block;
        // background: rgba(#000, 0.1);
        overflow: hidden;
        text-align: center;
    }



    &.ux-info-success,
    &.ux-info-active {
        background: #e0f3bf;
        color: #299933;
        border-color:#299933;

        .icon-circle {
            background: #299933;
            color: #fff;
        }
    }

    &.ux-info-pending,
    &.ux-info-warning {
        background: #fbecbb;
        color: #d17a0e;
        border-color:#d17a0e;

        .icon-circle {
            background:#d17a0e;
            color: #fff;
        }
    }

    &.ux-info-error,
    &.ux-info-failed {
        background: #ffdddd;
        color: #b14e4e;
        border-color:#b14e4e;

        .icon-circle {
            background:#b14e4e;
            color: #fff;
        }
    }

}
</style>