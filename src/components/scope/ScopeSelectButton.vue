<template>
	<div>
		<ux-button @click="openSelection">
			<span :class="{'empty-text':empty}">{{summary}}</span>
		</ux-button>
	</div>
</template>
<script>

import ScopeSelect from './ScopeSelect.vue';

export default {
	created() {

	},
	props:{
		action:{
			type:String,
		},
		type:{
			type:String,
		},
		modelValue:{
			type:Array,
			default() {
				return []
			}
		}
	},
	data() {
		return {
			model:this.modelValue,
		}
	},
	methods:{
		async openSelection() {
			const self = this;

			const scopes = await self.$sdk.selectScopes({
				action:self.action,
				type:self.type,
				model:self.model,
			})

			self.model = scopes;


		}
	},
	computed:{
		empty() {
			return !this.model.length;
		},
		summary() {
			const self = this;

			if(!self.model.length) {
				return 'Select Scopes';
			}

			return self.model.map(function(scope) {
				return scope.title || '(hidden)';
			}).join(', ');
		}
	},
	watch:{
		modelValue(m) {
			this.model = m;
		},
		model(m) {
			this.$emit('update:modelValue', m);
		},
	}
}
</script>
<style lang="scss" scoped>

:deep(.ux-btn-text) {
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
	max-width: 150px;
	display: block;
}

.empty-text {
	opacity: 0.5;
}
</style>