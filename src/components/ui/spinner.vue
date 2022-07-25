<template>
	<div class="ux-spinner" :class="{large:large}"><i class="fa fa-spin fa-spinner"/></div>
</template>
<script>

export default {
	props:{
		large:{
			type:Boolean,
		}
	}
}
</script>
<style lang="scss" scoped>

.ux-spinner {
	&.large {
		position:absolute;
		left:50%;
		top:50%;
		transform: translate3d(-50%, -50%, 0);
		font-size: clamp(50px, 10vw, 500px);
		opacity: 0.5;;
	}


	&[lg] {
		font-size: 2em;
	}

	&[xl] {
		font-size: 4em;
	}

	&[xxl] {
		font-size: 6em;
	}
}
</style>