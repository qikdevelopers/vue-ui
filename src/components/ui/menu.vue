<template>
    <div class="ux-menu" :class="{right}">
        <span>
            <slot name="activator" :on="on" />
        </span>
        <teleport to="body">
            <div class="ux-menu-outer" v-if="isExpanded" :style="outerStyle">
                <div class="ux-menu-panel" ref="menu" :style="innerStyle">
                    <slot />
                </div>
            </div>
        </teleport>
    </div>
</template>
<script>
import UXMenuService from './menu.service.js'

export default {
    props: {
        group: {
            type: String,
        },
        right: {
            type: Boolean,
            default: false,
        },
        bottom: {
            type: Boolean,
            default: false,
        },
        stop: {
            type: Boolean,
            default: false,
        },
        closeOnClick: {
            type: Boolean,
            default () {
                return true;
            }
        },
        modelValue: {
            type: Boolean,
            default () {
                return false;
            }
        },
    },
    data() {
        return {
            outerStyle: {},
            innerStyle: {},
            isExpanded: this.modelValue,
            triggerEvent: null,
            refMenu: null,
            mounted: false,
        }
    },
    watch: {
        modelValue(m) {
            this.expanded = m;
        },
    },
    mounted() {
        this.refMenu = this.$refs.menu;
        this.mounted = true;
    },
    beforeUnmount() {
        this.removeListeners();
        this.refMenu = null;
        this.mounted = false;

        if (UXMenuService.cache[this.group] === this) {
            UXMenuService.cache[this.group] = null;
        }
    },
    methods: {

        removeListeners() {

            document.removeEventListener('click', this.globalClick);
            if (this.refMenu) {
                this.refMenu.removeEventListener('click', this.immediateClick);
            }
        },
        addEventListeners() {

            document.addEventListener('click', this.globalClick);
            if (this.refMenu) {
                this.refMenu.addEventListener('click', this.immediateClick);
            }
        },
        immediateClick(event) {
            if (this.expanded) {
                if (this.closeOnClick) {
                    event.stopImmediatePropagation();
                    this.expanded = false;

                }
            }
        },
        globalClick(event) {


            if (this.triggerEvent === event) {
                return;
            }

            var parentElement = this.$refs.menu;
            var childElement = event.srcElement;

            if (parentElement && parentElement.contains(childElement)) {
                //Do nothing
                if (this.closeOnClick) {
                    this.expanded = false;
                    // event.stopImmediatePropagation();
                }


            } else {
                this.expanded = false;
            }
        },
        position() {
            const rect = this.$el.getBoundingClientRect();


            // var left = rect.left + window.scrollX;
            // var top = rect.bottom + window.scrollY;


            // var parentPosition = {
            //     left, 
            //     top,
            // }

            // if(this.right) {
            //     this.outerStyle.left = `${rect.left - rect.width}px`;
            // } else {
            //     this.outerStyle.left = `${rect.left + window.scrollX}px`;
            // }

            this.outerStyle.left = `${rect.left + window.scrollX}px`;
            this.outerStyle.top = `${rect.bottom + window.scrollY}px`;

            if (this.right) {
                this.innerStyle.right = `-${rect.width}px`;
            }

            if (this.bottom) {


                this.innerStyle.bottom = `${rect.height}px`;

            }

            var zIndex = this.getMaxZIndex();
            this.outerStyle.zIndex = zIndex;

        },
        getMaxZIndex() {
            return Math.max(
                ...Array.from(document.querySelectorAll('body *'), el =>
                    parseFloat(window.getComputedStyle(el).zIndex),
                ).filter(zIndex => !Number.isNaN(zIndex)),
                0,
            );
        },
        close() {
            this.expanded = false;
        },
    },
    computed: {
        // isInViewport() {
        //     var element = this.$refs.menu;
        //     if(!element) {
        //         return false;
        //     }

        //     const rect = element.getBoundingClientRect();
        //     return (
        //         rect.top >= 0 &&
        //         rect.left >= 0 &&
        //         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        //         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        //     );
        // },
        expanded: {
            get() {
                return this.isExpanded;
            },
            set(v) {
                var previousActivatedEntity;

                if (this.group) {
                    previousActivatedEntity = UXMenuService.cache[this.group];
                }

                ////////////////////////////////

                if (this.isExpanded != v) {
                    this.isExpanded = v;

                    //If we're collapsed
                    if (v) {
                        this.position();
                        this.addEventListeners();

                        UXMenuService.cache[this.group] = this;

                        if (previousActivatedEntity && previousActivatedEntity != this) {
                            previousActivatedEntity.expanded = false;
                        }

                        //////////////////////////////////////////
                    } else {
                        //Clean up the listeners
                        this.removeListeners();
                    }
                    this.$emit('update:modelValue', v)
                }
            }
        },
        on() {

            var self = this;

            return {
                click(event) {

                    if (self.stop) {
                        event.stopImmediatePropagation();
                    }

                    self.triggerEvent = event;
                    self.expanded = !self.expanded;
                }
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.ux-menu-outer {
    position: absolute;
    z-index: 10;
    font-size: 0.8em;
}

.ux-menu-panel {
    position: absolute;
    max-height: 98vh;
    overflow: auto;
    border: 1px solid rgba(#000, 0.05);
    box-shadow: 0 0.2em 1em rgba(#000, 0.1);

    :deep(.ux-list-item) {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
}
</style>