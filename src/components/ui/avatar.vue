<template>
    <div class="avatar" />
</template>
<script>
export default {
	props:{
		id:{
			type:[Object, String],
		},
	},
	computed:{
		stringID() {
			return this.$sdk.utils.id(this.id);
		},
		url() {

		},
	}
}
</script>
<style lang="scss">
.avatar {
	width:100%;
    display: block;
    border-radius: 100%;
    height:0;
    padding-bottom:100%;
    background: rgba(#000, 0.1);
}
</style>