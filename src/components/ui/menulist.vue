<template>
	<ul>
		<li :class="{expanded:item.expanded, collapsed:item.collapsed}" v-for="item in filteredItems">
			<template v-if="expandOn === 'click' && item.items?.length">
				<ux-link @click.stop.prevent="toggle(item)" :class="item.class">{{item.title}}</ux-link>
			</template>
			<template v-else> 
				<ux-link :class="item.class" v-if="item.type === 'url'" :target="item.target" :href="item.href || item.url">{{item.title}}</ux-link>
				<ux-link :class="item.class" v-else-if="item.type === 'route'" :to="{name:item.route}">{{item.title}}</ux-link>
			</template>


			<template v-if="item.items && item.items.length">
				<menulist :items="item.items"/>
			</template>



		</li>
	</ul>
</template>
<script>
export default {
	name:'menulist',
	props:{
		items:{
			type:Array,
			default() {
				return [];
			}
		},

		expandOn:{
			type:String,
			default:'none',
		}
	},
	computed:{
		filteredItems() {
			return this.items.filter(function(item) {
				return !item.disabled;
			})
		}
	},
	methods:{
		toggle(item) {
			item.expanded = !item.expanded;
			item.collapsed = !item.expanded;
		}
	},
	data() {
		return {
			
		}
	},
}
</script>