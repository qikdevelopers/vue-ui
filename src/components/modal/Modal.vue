<template>
    <div class="modal-wrapper">
        <div class="modal-blanket" @click="blanketClick"/>
        <div class="modal-content" :style="style">
            <component :options="modal.options" v-bind="componentProps" @close="close" @dismiss="dismiss" :is="modal.component" />
        </div>
    </div>
</template>
<script>

export default {
    props: {
        modal: {
            type: Object,
            required: true,
        }
    },
    data() {
        return {}
    },
    methods: {
    	blanketClick() {
    		this.dismiss();
    	},
        dismiss(err) {
            this.$sdk.closeModal(this.modal.id);
            this.modal.reject(err);
        },
        close(value) {
            this.$sdk.closeModal(this.modal.id);
            this.modal.resolve(value);
        }
    },
    computed: {
        componentProps() {
            return this.modal.componentProps || {};
        },
        style() {

        	var styles = {}

        	if(this.modal.style) {
        		styles = Object.assign(styles, this.modal.style);
        	}

        	return styles;
        }
    }
}
</script>
<style lang="scss" scoped>
.modal-wrapper {
	margin:0;
	padding:0;
	position: fixed;
	top:0;
	left:0;
	right:0;
	bottom:0;
	display: flex;
	width:100vw;
	height: 100vh;
    height: -webkit-fill-available;
	z-index: 100;
	justify-content: center;
	align-items:center;
	overflow: hidden;
	box-sizing: border-box;

	.modal-blanket {
		position:absolute;
		background: rgba(#333, 0.5);
		left:0;
		top:0;
		right:0;
		bottom:0;
	}

	.modal-content {
		display: flex;
		overflow: hidden;
		z-index: 101;
		max-width: 90%;
		max-height: 90%;
	}

	.wrapper {
		background: #fff;
	}
}
</style>