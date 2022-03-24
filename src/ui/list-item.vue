<template>
	<div class="ux-list-item">
		<slot/>
	</div>
</template>
<style lang="scss" scoped>

.ux-list-item {
	background:#fff;
	cursor: pointer;

	&:hover {
		background: darken(#fff, 5%);
	}
}
</style>