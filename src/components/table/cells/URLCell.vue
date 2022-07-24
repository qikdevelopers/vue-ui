<template>
    <td class="table-url-cell">
        <a :href="href" @click.stop.prevent="open" target="_blank"> {{value}} <ux-icon right icon="fa-external-link"/></a>
    </td>
</template>
<script>
import TableCellMixin from './TableCellMixin.js';

export default {
    mixins: [TableCellMixin],
    methods:{
        open() {
            window.open(this.href);
        }
    },
    computed: {
    	href() {
            return `http://${this.value}`;
        }
    }
}
</script>
<style scoped lang="scss">
td {
    white-space: nowrap;

    a {
        font-size: 0.8em;
        text-decoration: none;
        color: inherit;

        &:hover {
            opacity: 0.5;
        }
    }
}
</style>