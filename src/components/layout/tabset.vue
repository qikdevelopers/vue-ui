<template>
    <div class="ux-tabset" :class="{vertical, horizontal:!vertical, inline, block:!inline}">
        <template v-if="vertical">
            <flex-column v-if="menuRequired" class="tabset-menu">
                <flex-body>
                    <a :class="{active:activeHeading === title}" :key="`tab-link-${title}`" v-for="(title, index) in titles" @click="select(title)">{{title}}</a>
                </flex-body>
            </flex-column>
            
        </template>
        <template v-else>
            <flex-header v-if="menuRequired" class="tabset-menu">
                <flex-row>
                    <a :class="{active:activeHeading === title}" :key="`tab-link-${title}`" v-for="(title, index) in titles" @click="select(title)">{{title}}</a>
                </flex-row>
            </flex-header>
            
        </template>
        <flex-column>
                <slot/>
            </flex-column>
    </div>
</template>
<script setup>
import { useSlots, ref, computed, reactive, provide } from 'vue'
import _debounce from 'lodash/debounce';

const slots = useSlots()

const props = defineProps({
    vertical: Boolean,
    inline: Boolean,
})


const tabset = reactive({
    tabs:[]
})
provide('tabset', tabset)

const activeHeading = ref();
provide('activeHeading', activeHeading);

const select = function(heading) {
    activeHeading.value = heading;
}

const rebuild = _debounce(function() {

    // console.log('rebuild tabs')

    const items = slots.default();
    const filtered = items
    .reduce(function(memo, tab) {

        if(tab.type?.name === 'tab') {
            memo.push(tab);
        } else if(tab.children) {
            memo = [...memo, ...tab.children];
        }

         return memo;
    }, [])
    .filter(function(tab) {
        return tab.type?.name === 'tab' && (tab.props.enabled !== false);
    })
    .map(function(tab, index) {
        const heading = tab.props.heading;
        return {
            heading,
            index,
        }
    })

    tabset.tabs = filtered;

    const lookup = filtered.reduce(function(memo, t) {
        memo[t.heading] = true;
        return memo
    }, {})

    const existingSelectedHeading = activeHeading.value;

    if(!existingSelectedHeading || !lookup[existingSelectedHeading]) {
        if(filtered.length) {
            activeHeading.value = filtered[0].heading;
        }
    }
})
provide('rebuild', rebuild)

const titles = computed(function() {
    return tabset.tabs.map(function(tab) {
        if(!tab) {
            return;
        }
        return tab.heading;
    }).filter(Boolean);
})

const menuRequired = computed(function() {
    return titles.value.length > 1;
})

// const slotItems = computed(function() {
//     const slots =  slots.default().filter(function(tab) {
//         return tab.type?.name === 'tab';
//     }).map(function(tab) {
//         return {
//             title: tab.props?.heading || tab.props?.title || 'Untitled Tab',
//             self: tab,
//             //         active:(tab.props?.active !== undefined),
//             //         enabled:tab.props?.enabled,
//         }
//     })


//     return slots;
// })


// // Get all of the tab titles
// slotItems.map(function(slot) {

//     console.log('SLOT', slot);
//     return slot?.heading;
// }))




// const defaultTab = slotItems[0];
// const activeKey = defaultTab?.title;

// const activeTitle = ref(activeKey);
// provide('activeTitle', activeTitle)

// const select = function(title) {
    // activeTitle.value = title;
// }
// provide('select', select)


rebuild();

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