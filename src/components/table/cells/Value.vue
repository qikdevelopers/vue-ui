<template>
	<a @click.stop.prevent="clicked(value)" v-if="reference">{{renderValue}}</a>
	<template v-else-if="type == 'date'">{{date}}</template>
	<template v-else>{{renderValue}}</template>
</template>
<script>

import {DateTime} from 'luxon';

export default {
	props:{
		value:{
			required:true,
		},
		type:{
			type:String,
		}
	},
	computed:{
		reference() {
			return !!(this.value && this.value._id)
		},
		renderValue() {
			return this.value ? this.value.title || this.value.name || this.value : undefined;
		},
		date() {
			return DateTime.fromISO(this.value).toFormat('dd MMM yyyy');
		}
	},
	methods:{
		clicked(item) {
			this.$qik.dispatch('item:view', item);
		}
	},
}
</script>
<style lang="scss" scoped>
a {
	padding: 0.5em 1em;
	margin: 0.1em;
	background: rgba(#000, 0.05);
	border-radius: 0.5em;
	display: inline-block;
	line-height: 1;
	font-size: 0.7em;
	cursor:pointer;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden ;

	&:hover {
		background: rgba(#000, 0.1);
	}
}
</style>