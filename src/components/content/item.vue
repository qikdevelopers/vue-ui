<template>
    <div class="content-item" @click="clicked">
        <flex-row gap vcenter>
            <flex-cell shrink v-if="hasImage">
                <div class="image-wrapper" :class="basicType">
                <ux-image :item="model" :width="100" :height="100"/>
            </div>
            </flex-cell>
            <flex-cell vcenter>
                <div>
                <slot>
                    {{title}}
                </slot>
            </div>
            </flex-cell>
            <flex-cell shrink>
                <slot name="actions"></slot>
            </flex-cell>
        </flex-row>
    </div>
</template>
<script>
export default {
    props: {
        item: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            model:this.item,
        }
    },
    watch:{
        item(m) {
            this.model = m;
        }
    },
    computed: {
        basicType() {
            return this.model?.meta?.type
        },
        hasImage() {
            switch(this.basicType) {
                case 'image':
                case 'video':
                case 'profile':
                    return true;
                break;
            }
        },
        title() {
            return this.model.title || this.model.name || this.model.label || (this.model.firstName ? `${this.model.firstName} ${this.model.lastName}` : '(Title unknown)');
        }
    },
    methods:{
        clicked() {
            this.$sdk.dispatch('item:view', this.model);
        }
    }
}
</script>
<style lang="scss" scoped>
.content-item {
    padding: 0.8em;
    border: 1px solid rgba(#000, 0.1);
    border-radius:0.3em;
    background: #fff;
    cursor: pointer;

    .image-wrapper {
        width:50px;

        &.profile {
            height:50px;
            background: rgba(#000, 0.1);
            border-radius:100%;
        }
    }

    &:hover {
        cursor: pointer;
        background: rgba(#000, 0.02);
    }
}
</style>