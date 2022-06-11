<template>
	<ul class="ux-list">
		<slot/>
	</ul>
</template>
<style lang="scss" scoped>

.ux-list {
	background:#fff;
	padding:0;
	margin: 0;
	list-style-type: none;
	box-shadow: 0 0.3em 0.5em rgba(#000, 0.1);

	:deep(.ux-list-item) {
		list-style-type: none;
		padding: 0.5em 1em;
		display: block;
		border-bottom: 1px solid rgba(#000, 0.1);

		&:last-child {
			border-bottom:none;
		}
	}
}
</style>