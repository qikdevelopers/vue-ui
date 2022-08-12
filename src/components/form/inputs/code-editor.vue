<template>
    <flex-column v-if="mounted">
        <v-ace-editor @blur="format" class="editor-wrap" v-model:value="model" :options="{ useWorker: true }" @init="editorInit" :lang="lang" theme="tomorrow_night_eighties" style="height: 300px" />
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

        },
        format() {

            if (typeof window === undefined) {
                return;
            }

            var code = this.model;

            if(!code) {
                return;
            }

            switch (this.lang) {
                case 'js':
                case 'javascript':
                    if (window.js_beautify) {
                        code = window.js_beautify(code);
                    }
                    break;
                case 'css':
                case 'scss':
                    if (window.css_beautify) {
                        code = window.css_beautify(code);
                    }
                    break;
                case 'html':
                    if (window.html_beautify) {
                        code = window.html_beautify(code);
                    }
                    break;
                default:
                    return;
                break;
            }

            console.log('Formatted');
            this.model = code;


        }
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
    async mounted() {
        this.mounted = true;

        if (this.$sdk.global && this.$sdk.global.injectScript) {
            this.$sdk.global.injectScript('https://cdnjs.cloudflare.com/ajax/libs/js-beautify/1.14.5/beautify.min.js');
            this.$sdk.global.injectScript('https://cdnjs.cloudflare.com/ajax/libs/js-beautify/1.14.5/beautify-css.min.js');
            this.$sdk.global.injectScript('https://cdnjs.cloudflare.com/ajax/libs/js-beautify/1.14.5/beautify-html.min.js');
        }


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
.editor-wrap {
    flex: 1;

}
</style>