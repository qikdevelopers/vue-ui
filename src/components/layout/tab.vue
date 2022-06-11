<template>
	<flex-column>
		
			<slot/>
		
	</flex-column>
</template>
<script>
export default {
	props:{
		heading:{
			type:String,
			required:true,
		}
	},
	data() {
		return {
			isActive:false,
		}
	},
	computed:{
		active:{
			get() {
				return this.isActive;
			},
			set(a) {
				this.isActive = a;
			}
		}
	}
}
</script>
<style lang="scss" scoped>
</style>