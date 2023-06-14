<template>
    <flex-column v-if="mounted">
        <template v-if="tokens.length">
            <div class="tokens">
                <div class="tokens-header" @click="showTokens = !showTokens">
                    <flex-row gap center>
                        <flex-cell>
                        {{showTokens ? 'Hide' : 'Show'}} Tokens 
                        </flex-cell>
                        <flex-cell shrink>
                            <ux-icon :icon="showTokens ? 'fa-angle-up' : 'fa-angle-right'"/>
                        </flex-cell>
                    </flex-row>
                </div>
                <div class="tokens-body" v-if="showTokens">
                <ux-button size="xs" v-for="token in tokens" @click.stop.prevent="injectToken(token.value)">
                    <ux-icon icon="fa-asterisk" /> {{token.title}}</ux-button>
                </div>
            </div>
        </template>
        <v-ace-editor @blur="blur" @focus="focussed" :readonly="readonly" class="editor-wrap" v-model:value="model" :options="{ useWorker: true }" @init="editorInit" :lang="lang" theme="tomorrow_night_eighties" style="height: 300px" />
    </flex-column>
</template>
<script>
import _debounce from 'lodash/debounce';
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



            const range = this.editor.selection.getRange();
            // const selectedRange = this.selectionContext?.range;
            if (range) {

                const start = range.start;
                const end = range.end;

                const result = session.replace(range, value);

                // editor.moveCursorTo(result.row, result.column)
                editor.focus();

            }


        },

        editorInit(editor) {
            this.editor = editor;
        },
        focussed() {
            const self = this;
            if (self.timer) {
                clearTimeout(self.timer);
                self.timer = null;
            }
        },
        blur() {

            const self = this;
            self.timer = setTimeout(function() {
                self.format();
            }, 100)




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

            // const {row, column} = this.editor.getCursorPosition();
            this.model = code;
            // this.editor.moveCursorTo(row, column)




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
            showTokens:false,
            timer: null,
            mounted: false,
            model: this.modelValue,
            editor: null,
            selectionContext: {},
        }
    },
}
</script>
<style lang="scss" scoped>
.editor-wrap {
    flex: 1;

}

.tokens-header {
    cursor: pointer;
    padding: 0.5em 1em;
    background: rgba(#000, 0.05);

    &:hover {
        background: rgba(#000, 0.1);
    }
}
.tokens-body {
    padding: 1em;

    .ux-btn {
        margin-bottom: 0.4em;
    }
}
</style>