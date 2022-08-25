<template>
    <flex-column class="wrapper">
        <flex-header>
            <div class="header">
                <flex-row vcenter gap>
                    <flex-cell>
                        <h3>Select Scopes</h3>
                    </flex-cell>
                    <!-- <flex-cell>
                        <search v-model="search" :loading="searching" :debounce="500" placeholder="Search" />
                    </flex-cell> -->
                    <flex-cell shrink>
                        <ux-button color="primary" @click="selectionComplete">Done</ux-button>
                    </flex-cell>
                </flex-row>
            </div>
        </flex-header>
        <flex-body class="scroll-body">
            <div class="padder">
                <scope-select :action="action" :type="type" v-model="model"/>
            </div>
       </flex-body>
    </flex-column>
</template>
<script>

import ScopeSelect from '../scope/ScopeSelect.vue';
import ModalMixin from './ModalMixin';


export default {
    components: {
        ScopeSelect,
        // Search,
    },
    mixins: [ModalMixin],
    // async created() {
    //     var self = this;
    //     var glossary = await self.$sdk.content.glossary({ hash: true });
    //     self.loading = false;
    //     var definition = glossary[self.type]

    //     if(!definition) {
    //         //Close immediately
    //         self.$sdk.notify('You do not have the required permissions to list content of this type');
    //         self.dismiss()
    //         return;
    //     }
    //     self.definition = definition;
    // },
    computed: {
        type() {
            return this.options.type;
        },
        action() {
            return this.options.action;
        },
        // title() {
        //     return this.definition.title;
        // },
        // plural() {
        //     return this.definition.plural;
        // },
        // maximum() {
        //     return this.options.maximum || 0;
        // },
        // browserOptions() {
        //     return this.options.browserOptions || {};
        // },
    },
    data() {
        return {
            // search: '',
            // searching: false,
            // definition: null,
            // loading: true,
            model: this.options.model.slice(),
        }
    },
    methods: {
        // rowClicked(row) {
        //     this.$refs.browser.toggle(row);
        // },
        selectionComplete(data) {
            this.close(this.model);
        }
    }
}
</script>
<style lang="scss" scoped>

.wrapper {
    // min-width: 80vw;
    // min-height: 80vh;
    border-radius: 0.5em;
    overflow: hidden;
}

.padder {
    padding:1em;
}

.scroll-body {
    background: rgba(#000, 0.1);
}

.header {
    background: #fff;
    padding: 1em;
    border-bottom: 1px solid rgba(#000, 0.1);

    h1, h2, h3, h4, h5 {
        margin:0;
    }
}
</style>