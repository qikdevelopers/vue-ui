<template>
	
        <flex-column v-if="active">
            <slot />
        </flex-column>
    
</template>
<script>
export default {
    name: 'tab',
    props: {
        heading: {
            type: String,
            required: true,
        },
        enabled: {
            type: Boolean,
            default: true,
        },
    },
    created() {
    	// this.$emit('mount');
    	this.rebuild();
    },
    unmounted() {
    	// this.$emit('unmount');
    	this.rebuild();
    },
    // created() {
    //     this.tabset.tabs.push(this);
    //     if(!this.activeHeading.value) {
    //     	if(this.tabset.tabs.length === 1) {
    //     		this.activeHeading.value = this.heading;
    //     	}
    //     }

    // },
    // beforeUnmount() {
    // 	const index = this.tabset.tabs.indexOf(this);
    // 	console.log('remove', index);
    //     this.tabset.tabs.splice(index, 1);
    // },
    // data() {
    // 	return {
    // 		isActive:false,
    // 	}
    // },
    inject: [
        'tabset',
        'activeHeading',
        'rebuild',
    ],
    // created() {
    // 	console.log('created', this)
    // 	this.tabs.push(this);
    // 	console.log('add tab', this.heading);
    // },	
    // beforeUnmount() {
    // 	const index = this.tabs.indexOf(this);
    // 	this.tabs.splice(index, 1);
    // 	console.log('remove tab', this.heading);
    // },
    // methods:{
    // 	dispatch() {
    // 		if(this.tabset?.recreateTabs) {
    // 			this.tabset.recreateTabs();
    // 		}

    // 	}
    // },
    // watch:{
    // 	tabset:{
    // 		handler(t){
    // 			this.dispatch();
    // 		},
    // 		immediate:true,
    // 	},
    // },
    computed: {
        active() {
            const active = String(this.heading) === String(this.activeHeading?.value || this.activeHeading);
            return active;
        }
        // active:{
        // 	get() {
        // 		return this.heading === this.activeTitle;
        // 	},
        // 		set(a) {
        // 			this.select(this.heading);
        // 		}
        // 	}
    }
}
</script>
<style lang="scss" scoped>
</style>