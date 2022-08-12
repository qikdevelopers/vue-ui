<template>
    <flex-column v-if="mounted">
        <tiptap v-model="model" style="height: 250px" />
    </flex-column>
</template>
<script>

export default {
    components: {},
    methods: {

    },
    props: {
        modelValue: {
            type: String,
            default () {
                return '';
            }
        },
        lang: {
            type: String,
        },
    },
    watch: {
        modelValue(v) {
            this.model = v;
        },
        model(v) {
            this.$emit('update:modelValue', v);
        }
    },
    mounted() {
        this.mounted = true;
    },
    beforeUnmount() {
        this.mounted = false;
      },
    data() {
        return {
            mounted: false,
            model: this.modelValue,
        }
    },
}
</script>
<style lang="scss" scoped>
.tiptap-wrap {
    border-radius: 0.1em;
    margin-bottom:1em;
    

    





}
</style>