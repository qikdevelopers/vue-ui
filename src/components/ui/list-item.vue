<template>
	<div class="ux-list-item">
		<slot/>
	</div>
</template>
<script>
	
export default {

}
</script>
<style lang="scss" scoped>

.ux-list-item {
	background:#fff;
	cursor: pointer;

	&:hover {
		background: darken(#fff, 5%);
	}
}
</style>