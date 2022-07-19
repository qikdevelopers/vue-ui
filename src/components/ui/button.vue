<template>
    <!-- :type="nativeType" -->
    <component :is="element" :active="active" :loading="loading" :to="to" :href="href" :target="target" :style="style" :class="classes" :disabled="disabled" class="ux-btn">
        <spinner v-if="loading" />
        <span class="ux-btn-text">
            <slot />
        </span>
    </component>
</template>
<script>
import Spinner from './spinner.vue';
export default {
    components: {
        Spinner,
    },
    props: {
        to: {
            type: [Object, String],
        },
        icon: {
            type: Boolean,
        },
        color: {
            type: String,
            default: 'default',
        },
        bgColor: {
            type: String,
        },
        fgColor: {
            type: String,
        },
        tag: {
            type: String,
        },
        href: {
            type: String,
        },
        target: {
            type: String,
        },
        loading: {
            type: Boolean,
        },
        active:{
            type:Boolean,
        },
        disabled: {
            type: Boolean,
        },
        block:{
            type:Boolean,
        },
        size: {
            type: String,
            default: 'md',
        },
    },
    computed: {
        style() {
            var object = {};


            if (this.bgColor) {
                object['backgroundColor'] = this.bgColor
            }

            if (this.fgColor) {
                object['color'] = this.fgColor
            }

            return object;
        },
        classes() {

            var array = [];


            array.push(`ux-btn-${this.size}`);

            if (this.block) {
                array.push(`ux-btn-block`);
            }

            if (this.loading) {
                array.push(`ux-btn-loading`);
            }

            if (this.active) {
                array.push(`ux-btn-active`);
            }

            if (this.icon) {
                array.push(`ux-btn-icon`);
            }



            if (this.color == 'default') {
                array.push('ux-btn-color-default')
            }

            if (this.color == 'primary') {
                array.push('ux-btn-color-primary')
            }

            if (this.disabled) {
                array.push(`ux-btn-disabled`);
            }

            return array;
        },
        element() {
            switch (this.tag) {
                case 'span':
                    return this.tag;
                    break;
                case 'submit':
                    return 'button';
                    break;
                default:
                    if (this.to || this.href) {
                        return 'ux-link';
                    }

                    return this.tag || 'button';
                    break;
            }


        },
    },
}
</script>
<style lang="scss" scoped>
.ux-btn {
    font-family: inherit;
    padding: 0.5em 1em;
    background: rgba(#000, 0.1);
    border-radius: 2em;
    text-decoration: none;
    color: inherit;
    display: inline-block;
    position: relative;
    border: 1px solid transparent;
    flex: none;
    margin-right: 0.5em;
    text-align: center;
    line-height: 1;
    cursor: pointer;
    overflow: hidden;
    vertical-align: top;

    &:hover {
        opacity: 0.9;
    }


    .ux-spinner {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
    }

    &:last-child {
        margin-right: 0;
    }

    &.ux-btn-block {
        display: block;
        width:100%;
        box-sizing:border-box;
        text-align: center;
    }
}

.ux-btn-color-primary {
    background: $primary;
    color: #fff;
}


.ux-btn-color-default {
    background: rgba(#000,0.05);
    color: #555;

    &:hover {
        background: rgba(#000, 0.1);
    }
}

.ux-btn-loading {
    cursor: none;
    pointer-events: none;

    .ux-btn-text {
        opacity: 0 !important;
    }
}








.ux-btn-xxs {
    font-size: 0.6em;
}

.ux-btn-xs {
    font-size: 0.7em;
}

.ux-btn-sm {
    font-size: 0.8em;
}

.ux-btn-md {
    font-size: 1em;
}

.ux-btn-lg {
    font-size: 1.2em;
}

.ux-btn-xl {
    font-size: 1.3em;
}

.ux-btn-xxl {
    font-size: 1.5em;
}

.ux-btn-icon {
    border-radius: 50%;
    

    position:relative;
    width:2em;
    height:0;
    overflow: hidden;
    padding: 0 0 2em;
    text-align: center;
    line-height: 2em;

    .ux-button-text {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
    }
}

.ux-btn-disabled {
    cursor: none;
    pointer-events: none;
    opacity: 0.3;
    filter: grayscale(100%);

    .ux-btn-text {
        opacity: 0.3;
    }

}
</style>