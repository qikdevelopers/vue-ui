<template>
    <flex-column class="wrapper">
        <content-browser ref="browser" @done="selectionComplete" @click:row="rowClicked" :maximum="options.maximum" v-model="model" :type="options.type" :options="browserOptions">
        </content-browser>
    </flex-column>
</template>
<script>
import ContentBrowser from '../content/browser.vue';
import ModalMixin from './ModalMixin';

export default {
    components: {
        ContentBrowser,
    },
    mixins: [ModalMixin],
    computed: {
        browserOptions() {
            return {}
        },
    },
    data() {
        return {
            model:this.options.model.slice(),
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
    border-radius:0.5em;
    overflow: hidden;
}
</style>