
export default {
    data() {
        return {
            scrollTop: 0,
        }
    },
    methods: {
        updateScroll(e) {
            var scroller = this.$refs.scroll;
            scroller = scroller.$el || scroller;
            this.scrollTop = scroller.scrollTop;
        },
    },
    mounted() {
        var scroller = this.$refs.scroll;
        scroller = scroller.$el || scroller;
        scroller.addEventListener('scroll', this.updateScroll);
    },
    beforeUnmount() {
        var scroller = this.$refs.scroll;
        scroller = scroller.$el || scroller;
        scroller.removeEventListener('scroll', this.updateScroll);
    },
    activated() {
        var scroller = this.$refs.scroll;
        scroller = scroller.$el || scroller;
        scroller.scrollTop = this.scrollTop;
    },
}