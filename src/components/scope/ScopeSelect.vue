<template>

     
    
    <div :class="{has:hasSelection}" >
        <spinner v-if="loading" />
        <template v-else>
        <scope-item :click="click" :item="scope" v-for="scope in scopes"/>
    </template>
    </div>
</template>
<script>

import ScopeItem from './ScopeItem.vue';

let inflight;

export default {
    components:{
        ScopeItem,
    },
    async created() {
        this.glossary = await this.$sdk.content.glossary({ hash: true });
    },
    props: {
        action: {
            type: String,
        },
        type: {
            type: String,
            required: true,
        },
        modelValue: {
            type: Array,
            default () {
                return []
            }
        }
    },
    data() {
        return {
            loading:true,
            glossary: {},
            model: this.modelValue,
            scopes: [],
        }
    },
    methods: {
        select(scope) {
            if(!this.isSelected(scope)) {
                this.model.push(scope);
            }
        },
        deselect(scope) {

            const self = this;
            const scopeID = self.$sdk.utils.id(scope);

            if(self.isSelected(scope)) {
                self.model = self.model.filter(function(entry) {
                    const entryID = self.$sdk.utils.id(entry);
                    return entryID != scopeID;
                })
            }
        },
        isSelected(scope) {
            const scopeID = this.$sdk.utils.id(scope);
            return this.hash[scopeID]
        },
        toggle(scope) {
            if(this.isSelected(scope)) {
                this.deselect(scope);
            } else {
                this.select(scope);
            }
        },
        click(scope) {
            this.toggle(scope);
        },
        async checkLoad() {

            if(inflight) {
                return;
            }

            inflight = true;
            if(this.action && this.type) {
                this.scopes = await this.loadScopes();
            } else {
                console.log('missing action or type', this.action, this.type)
            }

            inflight = false;
        },
        async loadScopes() {

            this.loading = true;
            const {data} = await this.$sdk.api.post(`/scope/actionable`, {
                action:this.action,
                type:this.type,
            })
            this.loading = false;
            return data;
        },
        async showModal() {
            const self = this;
            const options = {};

            const component = await self.$sdk.modal({
                component: ScopeSelectModal,
                options,
            })


        }
    },
    provide() {
        return {
            isSelected:this.isSelected,
        }
    },
    computed: {
        hasSelection() {
            return this.model.length;
        },
        hash() {
            return this.model.reduce(function(memo, scope) {
                memo[scope._id || scope] = true;
                return memo;
            }, {})
        },
        empty() {
            return !this.model.length;
        },
        summary() {
            const self = this;

            if (!self.model.length) {
                return 'Select Scopes';
            }

            return self.model.map(function(scope) {
                return scope.title;
            }).join(', ');
        }
    },
    watch: {
        type:{
            handler() {
                this.checkLoad();
            },
            immediate:true,
        },
        action:{
            handler() {
                this.checkLoad();
            },
            immediate:true,
        },
        modelValue(m) {
            this.model = m;
        },
        model(m) {
            this.$emit('update:modelValue', m);
        },
    }
}
</script>
<style lang="scss" scoped>
:deep(.ux-btn-text) {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: 150px;
    display: block;
}


.has :deep(.scope-item) {
    opacity: 0.5;
    background: #eee;
}
:deep(.scope-item.selected) {
    opacity: 1;
    background: #fff;
    border-color: var(--primary);
}

.empty-text {
    opacity: 0.5;
}
</style>