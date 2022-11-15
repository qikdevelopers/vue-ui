<template>
    <flex-column class="wrapper">
        <flex-body>
            <div class="padder">
        	<h5>{{options.title}}</h5>
            <div v-html="options.description"/>
        </div>
        </flex-body>
        <flex-footer>
            <div class="padder">
        	<flex-row>
        		<flex-cell>
        			<ux-button @click="dismiss">Cancel</ux-button>
        		</flex-cell>

        		<flex-cell>
        			<ux-button @click="close">Confirm</ux-button>
        		</flex-cell>
        	</flex-row>
        </div>
        </flex-footer>
    </flex-column>
</template>
<script>

import ModalMixin from './ModalMixin';

export default {
	mixins:[ModalMixin],
}
</script>
<style lang="scss" scoped>

.wrapper {
    border-radius: 0.5em;
    overflow: hidden;
    background: #fff;
    text-align: center;

    h5 {
        font-size: 1.2em;
        margin:0;
    }

    .padder {
        padding: 1em;
    }
}

</style>