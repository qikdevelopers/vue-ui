<template>
	<td class="table-button-cell">
		<ux-button :color="button.color" :size="button.size" :loading="processing" @click.stop.prevent="clicked">
			<template v-if="label">{{label}}</template><ux-icon v-if="button.icon" :icon="button.icon" right/>
		</ux-button>
    </td>
</template>
<script>

import TableCellMixin from './TableCellMixin.js';

export default {
	data() {
		return {
			processing:false,
		}
	},
	mixins:[TableCellMixin],
	computed:{

		button() {
			return this.column.button;
		},
		type() {
			return this.row?.meta?.type
		},
		label() {

			const button = this.button;

			if(typeof button.text === 'function') {
				return button.text(this);
			}

			return button.text;
		},
	},
	methods:{
		async clicked() {

			this.processing = true;
			await this.button.action(this.row, this.column);
			this.processing = false;
		}
	}
}
</script>


<style scoped lang="scss">

td {
	width:60px;
	padding:0.3em !important;

	.ux-image {
		border-radius:0.1em;
	}

	:deep(.ux-btn-text) {
		display: block;
		white-space: nowrap;
	}
}


</style>