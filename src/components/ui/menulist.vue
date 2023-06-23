<template>
    <ul>
        <li :class="{expanded:item.expanded, collapsed:item.collapsed}" v-for="item in filteredItems">
            <template v-if="expandOn === 'click' && item.items?.length">
                <ux-link @click.stop.prevent="toggle(item)" :class="item.class">{{item.title}}</ux-link>
            </template>
            <template v-else>
                <ux-link :class="item.class" v-if="item.type === 'url'" :target="item.target" :href="item.href || item.url">{{item.title}}</ux-link>
                <ux-link :class="item.class" v-else-if="item.type === 'route'" :to="{name:item.route}">{{item.title}}</ux-link>
            </template>
            <template v-if="item.items && item.items.length">
                <menulist :items="item.items" />
            </template>
        </li>
    </ul>
</template>
<script>
export default {
    name: 'menulist',
    props: {
        items: {
            type: Array,
            default () {
                return [];
            }
        },

        expandOn: {
            type: String,
            default: 'none',
        }
    },
    mounted() {
        this.mounted = true;
    },
    beforeUnmount() {
        this.mounted = false;
        this.removeListeners();
    },
    computed: {
        filteredItems() {
            return this.tree.filter(function(item) {
                return !item.disabled;
            })
        },
        expandedItem: {
            get() {
                return this.currentExpandedItem;
            },
            set(v) {
                if (this.currentExpandedItem) {
                    this.currentExpandedItem.expanded = false;
                    this.currentExpandedItem.collapsed = true;
                }

                this.currentExpandedItem = v;
                if (this.currentExpandedItem) {
                    this.currentExpandedItem.expanded = true;
                    this.currentExpandedItem.collapsed = false;
                    this.addListeners();
                } else {
                    this.removeListeners();
                }
            }
        }
    },
    data() {
        return {
            currentExpandedItem: null,
            tree: JSON.parse(JSON.stringify(this.items)),
        }
    },
    methods: {
        globalClick($event) {
            this.expandedItem = null;
        },
        addListeners() {
            this.$sdk.addEventListener('route:change', this.globalClick);
            const doco = this.$el?.ownerDocument;

            if (!doco) {
                return;
            }

            doco.body.addEventListener('click', this.globalClick);
        },
        removeListeners() {
            this.$sdk.removeEventListener('route:change', this.globalClick);
            const doco = this.$el?.ownerDocument;

            if (!doco) {
                return;
            }

            doco.body.removeEventListener('click', this.globalClick);
        },
        toggle(item) {
            if (this.currentExpandedItem === item) {
                this.expandedItem = null;
            } else {
                this.expandedItem = item;
            }
        },
    },
    watch: {
        items: {
            handler(items) {
                this.tree = JSON.parse(JSON.stringify(items));
            },
            deep: true
        }
    },
}
</script>