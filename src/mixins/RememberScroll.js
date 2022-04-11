export default {
    data() {
        return {
            scrollTop: 0,
        }
    },
    mounted() {
        var scroller = this.$refs.scroll;
        scroller.addEventListener('scroll', this.updateScroll);
    },
    beforeUnmount() {
        var scroller = this.$refs.scroll;
        scroller.removeEventListener('scroll', this.updateScroll);
    },
    activated() {
        var scroller = this.$refs.scroll;
        scroller.scrollTop = this.scrollTop;
    },
}