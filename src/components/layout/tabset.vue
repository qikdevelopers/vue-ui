<template>
    <flex-column>
        <flex-header class="tabset-menu">
            <flex-row>

                <a :class="{active:index === activeIndex}" :key="`tab-link-${tab.props.heading}`" v-for="(tab, index) in tabs" @click="select(index)">{{tab.props.heading}}</a>
            </flex-row>
        </flex-header>
        <flex-column>
            <flex-column v-show="index === activeIndex" :key="`tab-panel-${tab.props.heading}`"  v-for="(tab, index) in tabs">
                <component :is="tab" />
            </flex-column>
            <!--  -->
            <!-- <slot/> -->
        </flex-column>
    </flex-column>
</template>
<script>
export default {
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

                if(child.props.enabled === false) {
                    return;
                }

                // if(!child.el) {
                //     return;
                // }

                // child.guid = self.$sdk.utils.guid()

                return child;
            })
            .filter(Boolean);

            console.log('TABS', slotChildren)
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

.tabset-menu {
    background: rgba(#000, 0.05);

    a {
        display: block;
        flex:1;
        align-items: center;
        padding:1em;
        text-transform: uppercase;
        text-align: center;
        letter-spacing: 0.05em;
        cursor: pointer;
        color: rgba(#000, 0.5);
        font-weight: bold;
        border-top:3px solid transparent;

        &.active {
            background: #fff;
            color: var(--primary);
            border-top:3px solid var(--primary);
        }

    }
}
</style>