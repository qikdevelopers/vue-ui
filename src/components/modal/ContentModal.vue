<template>
    <flex-column class="wrapper">
        <flex-column v-if="loading">
            Loading
        </flex-column>
        <template v-else>
            <template v-if="definition">
                <flex-header>
                    <div class="header">
                        <flex-row vcenter gap>
                            <flex-cell shrink>
                                Select {{maximum == 1 ? title : plural}}
                            </flex-cell>
                            <flex-cell v-if="maximum">
                                <span class="font-muted font-sm">({{model.length}} of {{maximum}})</span>
                            </flex-cell>
                            
                            <flex-cell>
                                <search v-model="search" :loading="searching" :debounce="500" placeholder="Search" />
                            </flex-cell>
                            <flex-cell shrink>
                                <ux-button color="primary" @click="selectionComplete">Done</ux-button>
                            </flex-cell>
                        </flex-row>
                    </div>
                </flex-header>
                <content-browser ref="browser" :search="search" @click:row="rowClicked" :maximum="options.maximum" v-model="model" :type="options.type" :options="browserOptions">
                </content-browser>
            </template>

        </template>
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
        self.loading = false;
        var definition = glossary[self.type]

        if(!definition) {
            //Close immediately
            self.$qik.notify('You do not have the required permissions to list content of this type');
            self.dismiss()
            return;
        }
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
            loading: true,
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
    background: #fff;
    padding: 1em;
    border-bottom: 1px solid rgba(#000, 0.1);
}
</style>