<template>
    <div class="ux-tabset" :class="{vertical, horizontal:!vertical, inline, block:!inline}">
        <template v-if="vertical">
            <flex-column class="tabset-menu">
                <flex-body>
                    <a :class="{active:index === activeIndex}" :key="`tab-link-${tab.props.heading}`" v-for="(tab, index) in tabs" @click="select(index)">{{tab.props.heading}}</a>
                </flex-body>
            </flex-column>
            <flex-column>
                <flex-column v-show="index === activeIndex" :key="`tab-panel-${tab.props.heading}`" v-for="(tab, index) in tabs">
                    <component :is="tab" />
                </flex-column>
                <!--  -->
                <!-- <slot/> -->
            </flex-column>
        </template>
        <template v-else>
            <flex-header class="tabset-menu">
                <flex-row>
                    <a :class="{active:index === activeIndex}" :key="`tab-link-${tab.props.heading}`" v-for="(tab, index) in tabs" @click="select(index)">{{tab.props.heading}}</a>
                </flex-row>
            </flex-header>
            <flex-column>
                <flex-column v-show="index === activeIndex" :key="`tab-panel-${tab.props.heading}`" v-for="(tab, index) in tabs">
                    <component :is="tab" />
                </flex-column>
                <!--  -->
                <!-- <slot/> -->
            </flex-column>
        </template>
    </div>
</template>
<script>
export default {
    props: {
        vertical: {
            type: Boolean,
        },
        inline: {
            type: Boolean,
        }
    },
    data() {
        return {
            activeIndex: 0,
        }
    },
    methods: {
        select(i) {
            this.activeIndex = i;
        },
    },
    computed: {
        tabs() {
            const self = this;
            const slotChildren = self.$slots.default()
                .map(function(child) {

                    if (!child.props) {
                        return;
                    }

                    const disabled = child.props?.enabled === false;

                    if (disabled) {
                        return;
                    }

                    // child.guid = self.$sdk.utils.guid()

                    return child;
                })
                .filter(Boolean);

            // .map(function(t) {
            //     return t.children;
            // });
            return slotChildren;

            // 
            // return [];
        }
    },
}
</script>
<style lang="scss" scoped>


.ux-tabset {
    flex: 1;
    overflow: hidden;

    &.horizontal {
        display: flex;
        flex-direction: column;

        &.block {
            >.tabset-menu {
                background: rgba(#000, 0.05);

                a {
                    display: block;
                    padding: 1em;
                    cursor: pointer;
                    color: rgba(#000, 0.5);
                    font-weight: bold;
                    border-top: 3px solid transparent;
                    text-align: center;
                    flex: 1;
                    align-items: center;

                    &.active {
                        background: #fff;
                        color: var(--primary);
                        border-top: 3px solid var(--primary);
                    }
                }
            }
        }

        &.inline {
            >.tabset-menu {
                a {
                    display: block;
                    padding: 1em 0;
                    margin: 0 1.5em 0 0;
                    cursor: pointer;
                    opacity: 0.5;
                    font-weight: bold;
                    border-bottom: 3px solid transparent;
                    text-align: center;
                    display: inline-block;

                    &.active {
                        opacity: 1;
                        border-bottom: 3px solid var(--primary);
                    }
                }
            }
        }
    }



    &.vertical {
        display: flex;
        flex-direction: row;

        >.tabset-menu {
            max-width: 200px;
            min-width: 100px;
            background: rgba(#000, 0.05);


            a {
                display: block;
                padding: 1em;
                cursor: pointer;
                color: rgba(#000, 0.5);
                font-weight: bold;
                border-left: 3px solid transparent;

                &.active {
                    background: #fff;
                    color: var(--primary);
                    border-left: 3px solid var(--primary);
                }
            }
        }
    }
}
</style>