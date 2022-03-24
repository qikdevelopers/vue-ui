<template>
    <flex-column class="wrapper">
        
        <template v-if="definition">
            <flex-header>
                <div class="header">
                    <flex-row center>
                        <flex-cell shrink>
                            Select {{maximum == 1 ? title : plural}}
                        </flex-cell>
                        <flex-spacer />
                        <flex-cell>
                            <search v-model="search" :loading="searching" :debounce="500" placeholder="Search" />
                        </flex-cell>
                        <flex-spacer />
                        <flex-cell shrink>
                            <ux-button color="primary" @click="selectionComplete">Done</ux-button>
                        </flex-cell>
                    </flex-row>
                </div>
            </flex-header>
            <content-browser ref="browser" :search="search" @click:row="rowClicked" :maximum="options.maximum" v-model="model" :type="options.type" :options="browserOptions">
            </content-browser>
        </template>

        <flex-column v-else>
            Loading
        </flex-column>

<pre>{{model}}</pre>
    </flex-column>
</template>
<script>
import Search from '../form/inputs/search.vue';

import ContentBrowser from '../content/browser.vue';
import ModalMixin from './ModalMixin';

export default {
    components: {
        ContentBrowser,
        Search,
    },
    mixins: [ModalMixin],
    async created() {
        var self = this;
        var glossary = await self.$qik.content.glossary({ hash: true });
        var definition = glossary[self.type]
        self.definition = definition;
    },
    computed: {
        type() {
            return this.options.type;
        },
        title() {
            return this.definition.title;
        },
        plural() {
            return this.definition.plural;
        },
        maximum() {
            return this.options.maximum || 0;
        },
        browserOptions() {
            return {}
        },
    },
    data() {
        return {
            search: '',
            searching: false,
            definition: null,
            model: this.options.model.slice(),
        }
    },
    methods: {
        rowClicked(row) {
            this.$refs.browser.toggle(row);
        },
        selectionComplete(data) {
            this.close(this.model);
        }
    }
}
</script>
<style lang="scss" scoped>
.wrapper {
    min-width: 80vw;
    min-height: 80vh;
    border-radius: 0.5em;
    overflow: hidden;
}

.header {
    background:#fff;
    padding: 1em;
    border-bottom: 1px solid rgba(#000, 0.1);
}
</style>