<template>
    <flex-column v-if="mounted">
        <div v-for="token in tokens" @click.stop.prevent="injectToken(token.value)">{{token.title}}</div>
        <v-ace-editor @blur="blur" :readonly="readonly" class="editor-wrap" v-model:value="model" :options="{ useWorker: true }" @init="editorInit" :lang="lang" theme="tomorrow_night_eighties" style="height: 300px" />
    </flex-column>
</template>
<script>
// import { VAceEditor } from 'vue3-ace-editor';

export default {
    components: {
        // VAceEditor,
    },
    methods: {
        injectToken(value) {
            const editor = this.editor;

            if (!editor) {
                return;
            }

            const session = editor.session;

            if (!session) {

                return;
            }




            const position = editor.getCursorPosition();
            const range = editor.selection.getRange();
            session.replace(range, value);



        },
        updateCursorSelection(e) {
            const position = this.editor.getCursorPosition();
            const range = this.editor.selection.getRange();

            console.log('Selection changed', { position, range });
        },
        editorInit(editor) {
            this.editor = editor;
            editor.session.selection.on('changeSelection', this.updateCursorSelection)
            editor.session.selection.on('changeCursor', this.updateCursorSelection);
        },
        blur() {



            console.log('Format now');
            this.format();

        },
        format() {

            if (typeof window === undefined) {
                return;
            }

            var code = this.model;

            if (!code) {
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
        tokens: {
            type: Array,
            default () {
                return [];
            }
        },
        lang: {
            type: String,
        },
        readonly: {
            type: Boolean,
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
    unmounted() {
        this.editor = null;
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
            editor: null,
        }
    },
}
</script>
<style lang="scss" scoped>
.editor-wrap {
    flex: 1;

}
</style>