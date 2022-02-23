<template>
    <div class="content-item">
        <flex-row>
            <flex-cell shrink>
            </flex-cell>
            <flex-cell vcenter>
                <slot>
                    {{title}}
                </slot>
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
    computed: {
        title() {
            return this.item.title || this.item.name || this.item.label;
        }
    }
}
</script>
<style lang="scss" scoped>
.content-item {
    padding: 0.8em;
    border: 1px solid rgba(#000, 0.1);
    background: #fff;
    cursor: pointer;

    &:hover {
        background: rgba(#000, 0.03);
    }
}
</style>