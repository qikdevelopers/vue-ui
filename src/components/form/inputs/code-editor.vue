<template>
    <flex-column v-if="mounted">

        <v-ace-editor class="editor-wrap" v-model:value="model" :options="{ useWorker: true }" @init="editorInit" :lang="lang" theme="tomorrow_night_eighties" style="height: 300px" />
    </flex-column>
</template>
<script>



// import { VAceEditor } from 'vue3-ace-editor';

export default {
    components: {
        // VAceEditor,
    },
    methods: {
        editorInit() {

        }
    },
    props: {
        modelValue: {
            type: String,
            default () {
                return '';
            }
        },
        lang:{
            type:String,
        },
    },
    watch:{
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
    data() {
        return {
            mounted:false,
            model: this.modelValue,
        }
    },
}
</script>
<style lang="scss" scoped>
.editor-wrap {
    flex: 1;

}
</style>