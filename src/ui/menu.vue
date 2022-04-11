<template>
    <div class="ux-menu" :class="{right}">
        <span>
            <slot name="activator" :on="on" />
        </span>
        <div class="ux-menu-panel" ref="menu" v-if="expanded" :style="contentStyle">
            <slot />
        </div>
    </div>
</template>
<script>
export default {
    props: {
        right:{
            type:Boolean,
            default:false,
        },
        closeOnClick: {
            type: Boolean,
            default () {
                return true;
            }
        }
    },
    data() {
        return {
            contentStyle: {},
            collapsed: true,
            triggerEvent: null,
            refMenu: null,
            mounted: false,
        }
    },
    mounted() {
        this.refMenu = this.$refs.menu;
        this.mounted = true;
    },
    beforeUnmount() {
        this.removeListeners();
        this.refMenu = null;
        this.mounted = false;
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

            if (parentElement.contains(childElement)) {
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

            var parentPosition = {
                left: rect.left + window.scrollX,
                top: rect.top + window.scrollY
            }

            this.contentStyle.left = parentPosition.left;
            this.contentStyle.top = parentPosition.top;

        },
    },
    computed: {
        expanded: {
            get() {
                return !this.collapsed;
            },
            set(v) {
                this.collapsed = !v;

                if (this.collapsed) {
                    this.removeListeners();
                } else {
                    this.position();
                    this.addEventListeners();

                }
            }
        },
        on() {

            var self = this;

            return {
                click(event) {
                    self.triggerEvent = event;
                    self.expanded = !self.expanded;
                }
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.ux-menu {
    position: relative;

    .ux-menu-panel {
        position: fixed;
        z-index: 10;
        max-height: 70vh;
        overflow: auto;
        text-align: left;
        text-transform: none;
        letter-spacing: 0;
        font-weight: normal;
    }

    &.right .ux-menu-panel{
        right:0;
    }
}
</style>