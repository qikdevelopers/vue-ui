<template>
    <div class="outer">
        <div class="scope-item" :class="{selected}" @click="clicked">
            <flex-row gap vcenter>
                <flex-cell class="select-mark" shrink>
                    <ux-icon :icon="selected ? 'fa-check' : 'fa-regular fa-circle'" />
                </flex-cell>
                <flex-cell>
                    {{item.title}}
                </flex-cell>
                <flex-cell shrink>
                    <div :class="{hide:!hasChildren}">
                        <ux-button @click.stop.prevent="toggleCollapse()" size="xs" icon>
                            <ux-icon :icon="expanded ? 'fa-angle-up' : 'fa-angle-down'" />
                        </ux-button>
                    </div>
                </flex-cell>
            </flex-row>
        </div>
        <div class="children" v-if="expanded">
            <scope-item :click="click" :item="child" v-for="child in item.children" />
        </div>
    </div>
</template>
<script>
export default {
    props: {
        item: {
            type: Object,
        },
        click: {
            type: Function,
        },
    },
    methods: {
        clicked() {
            this.click(this.item);
        },
        toggleCollapse() {
            return this.item.collapsed = !this.collapsed;
        }
    },
    inject: ['isSelected'],
    computed: {
    	selected() {
    		return this.isSelected(this.item);
    	},
        hasChildren() {
            return this.item.children?.length;
        },
        expanded() {
            return !this.collapsed;
        },
        collapsed() {
            return !this.hasChildren || this.item.collapsed;
        },
    },
}
</script>
<style lang="scss" scoped>
.outer {}

.scope-item {
    padding: 0.6em 1em;
    background: #fff;
    border: 1px solid rgba(#000, 0.1);
    display: block;
    margin-bottom: 0.1em;
    border-radius: 0.3em;
    white-space: nowrap;
    cursor: pointer;

    &:hover {
        background: #fafafa;
    }

    .select-mark {
    	transition:all 0.2s;
    	transform:scale(0.5);
    	opacity: 0.3;
    }

    &.selected {
    	.select-mark {
    		transform:scale(1);
    		opacity: 0.9;
    	}
    }
}

.hide {
    visibility: hidden;
}

.children {
    position: relative;
    padding-left: 1em;
    margin-left: 1em;
    padding-right: 0.3em;

    .scope-item {
        position: relative;

        &:after {
            content: '';
            display: block;
            width: 1em;
            left: -1em;
            top: 1.6em;
            position: absolute;
            border-top: 1px dotted rgba(#000, 0.2);
        }
    }




    &:after {
        content: '';
        display: block;
        width: 1px;
        height: calc(100% - 1.5em);
        top: 0;
        left: 0;
        position: absolute;
        border-left: 1px dotted rgba(#000, 0.2);
    }
}
</style>