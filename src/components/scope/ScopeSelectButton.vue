<template>
	<div>
		<ux-button @click="openSelection">
			<span :class="{'empty-text':empty}">{{summary}}</span> <ux-icon right icon="fa-spinner" spin v-if="loading"/> 
		</ux-button>
	</div>
</template>
<script>

import ScopeSelect from './ScopeSelect.vue';

export default {
	async created() {
        const s = await this.$sdk.content.scopeGlossary({ hash: true });    
    	this.scopeGlossary = s;
    	this.loadingScopeGlossary = false;
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
			scopeGlossary:{},
			loadingScopeGlossary:true,
			loadingContentGlossary:true,
			model:this.modelValue,
			definition:null,
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
		loading() {
			return this.loadingScopeGlossary || this.loadingContentGlossary
		},
		cacheKey() {
			return this.user.cacheKey;
		},
		empty() {
			return !this.model.length;
		},
		summary() {
			const self = this;

			if(!self.model.length) {
				return 'Select Scopes';
			}

			return self.model.map(function(s) {

				const scopeID = s._id || s;
				const scope = self.scopeGlossary[scopeID] || s;

				return scope.title || '(redacted)';
			}).join(', ');
		},
		definitionDefaultScopes() {

			const self = this;
			const defaultDefinitionScopes = self.definition?.defaultScopes;

			if(defaultDefinitionScopes && defaultDefinitionScopes.length) {
				return [...defaultDefinitionScopes];
			}

			const allAvailableKeys = Object.keys(self.scopeGlossary);
			if(allAvailableKeys.length === 1) {
				return [...allAvailableKeys];
			}

			return [];


		},
		definitionRestrictScopes() {
			return this.definition?.restrictScopes || [];
		},
		restrictedLookup() {
			const self = this;
			// We do have restrictions so create a hash of which ids are valid
			return this.definitionRestrictScopes.reduce(function(memo, scope) {

				if(!scope) {
					return memo;
				}

				var id = scope._id || scope;
				memo[id] = id;
				return memo;
			}, {})
		},
		availableDefaultScopes() {

			const self = this;
			let availableDefaultScopes;

			// If we don't have any restrictions
			if(!self.definitionRestrictScopes.length) {
				// Return early with the default scopes
				return self.definitionDefaultScopes;
			}

			/////////////////////

			// Filter out any default scopes that are invalid
			availableDefaultScopes = self.definitionDefaultScopes.filter(function(scope) {
				if(!scope) {
					return false;
				}

				var id = scope._id || scope;
				return self.restrictedLookup[id];
			});

			// If no default scopes are provided, but there is only a single
			// restricted scope, then use that by default, saving the user from
			// having to select it
			if(!availableDefaultScopes.length && self.definitionRestrictScopes.length === 1) {
				availableDefaultScopes = self.definitionRestrictScopes
			}



			// Return back the default scopes
			return availableDefaultScopes;
		},
	},
	watch:{
		availableDefaultScopes:{
			handler(s) {

				// there's already scopes selected
				if(this.model.length) {
					return;
				}

				// There are some default scopes available
				// So let's add them in to the model to begin with
				if(s.length) {
					this.model = [...s]
				}


			},
			immediate:true,
		},
		modelValue(m) {
			this.model = m;
		},
		model(m) {
			this.$emit('update:modelValue', m);
		},
		type:{
			async handler(type) {
                const self = this;
                self.loadingContentGlossary = true;
                const glossary = await this.$sdk.content.glossary({hash:true});
                self.definition = glossary[type]
                self.loadingContentGlossary = false;
            },
			immediate:true,
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