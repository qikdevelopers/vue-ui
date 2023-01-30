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
                                <h3>Select {{maximum == 1 ? title : plural}}</h3>
                            </flex-cell>
                            <flex-cell v-if="maximum">
                                <span class="font-muted font-sm">({{model.length}} of {{maximum}})</span>
                            </flex-cell>
                            <flex-cell v-if="!showFilters">
                                <search v-model="search" :loading="searching" :debounce="500" placeholder="Keyword Search" />
                            </flex-cell>
                            <flex-cell shrink>
                                <ux-button :icon="$device.breakpoint.mobile" @click="showFilters = !showFilters">
                                    <template v-if="$device.breakpoint.mobile">
                                        <ux-icon icon="fa-search" /></template>
                                    <template v-else>{{showFilters ? 'Hide' : 'Show'}} Filters</template>
                                </ux-button>
                            </flex-cell>
                            <flex-cell shrink>
                                <ux-button color="primary" @click="selectionComplete">Done</ux-button>
                            </flex-cell>
                        </flex-row>
                    </div>
                </flex-header>
                <content-browser v-model:rolodexPrimary="rolodexPrimary" :showFilters="showFilters" ref="browser" :search="search" @click:row="rowClicked" :maximum="options.maximum" v-model="model" :type="options.type" :options="browserOptions">
                    <template #abovecontent>
                        <flex-header v-if="rolodexEnabled">
                            <div class="rolodex">
                                <ux-button size="sm" @click="toggleRolodex('')" icon :color="!rolodexPrimary ? 'primary' : ''" >All</ux-button>
                                <ux-button size="sm" @click="toggleRolodex(letter)" icon :color="rolodexPrimary === letter ? 'primary' : ''" v-for="letter in letters">{{letter}}</ux-button>
                            </div>
                        </flex-header>

                        
                    </template>
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
        var glossary = await self.$sdk.content.glossary({ hash: true });
        self.loading = false;
        var definition = glossary[self.type]

        if (!definition) {
            //Close immediately
            self.$sdk.notify('You do not have the required permissions to list content of this type');
            self.dismiss()
            return;
        }

        self.definition = definition;

        if (self.bigData && self.rolodexEnabled) {
            self.rolodexLetter = 'A';
        }

        
    },
    computed: {
        bigData() {
            return this.definition?.count > 20000;
        },
        rolodexEnabled() {
            let enabled;

            if (!this.bigData) {
                return;
            }

            const basicType = this.definition.definesType || this.definition.key;
            switch (basicType) {
                case 'profile':
                case 'persona':
                    enabled = true;
                    break;
            }

            if (this.search || this.shortcut) {
                enabled = false;
            }

            return enabled;
        },
        rolodexPrimary: {
            get() {
                if (this.search || this.shortcut) {
                    return;
                }

                return this.rolodexLetter;
            },
            set(r) {

                if(this.search || this.shortcut) {
                    return;
                }

                this.rolodexLetter = r;
            }
        },
        letters() {
            return 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');

        },
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
            return this.options.browserOptions || {};
        },
    },
    watch:{
        search(s, before) {
            const self = this;

            if(!s && self.bigData) {
                if(!self.rolodexLetter) {
                    self.rolodexLetter = 'A';
                }
            }
        }
    },
    data() {
        return {
            showFilters: false,
            search: '',
            searching: false,
            definition: null,
            loading: true,
            model: this.options.model.slice(),
            rolodexLetter:'',
        }
    },
    methods: {
        toggleRolodex(letter) {

            if (this.rolodexLetter === letter) {
                this.rolodexLetter = ''
            } else {
                this.rolodexLetter = letter
            }
        },
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

    h1,
    h2,
    h3,
    h4,
    h5 {
        margin: 0;
    }
}

.rolodex {
    padding: 0.5em;
    white-space: nowrap;
    overflow-x: auto;
    border-bottom: 1px solid rgba(#000, 0.1);
    text-align: center;

    .ux-btn {
        font-weight: bold;
    }

    // a {
    //     display: inline-block;
    //     padding:0.5em;
    //     text-align: center;
    // }
}
</style>