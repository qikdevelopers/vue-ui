<template>
    <flex-column class="wrapper">
        <content-browser @done="selectionComplete" :type="options.type" :options="browserOptions">
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
        }
    },
    methods: {
        selectionComplete(data) {
            this.dismiss();
        }
    }
}
</script>
<style lang="scss" scoped>
    .wrapper {
min-width:80vw;
min-height:80vh;
}
</style>