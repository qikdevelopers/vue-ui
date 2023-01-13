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
        			<ux-button color="dismiss" @click="dismiss">Cancel</ux-button>
        		</flex-cell>

        		<flex-cell>
        			<ux-button color="primary" @click="close">Confirm</ux-button>
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
    max-width: 400px;
    padding:1.5em;

    h5 {
        font-size: 1.2em;
        margin:0 0 0.5em;
    }

    .padder {
        margin-bottom: 2em;
    }
}

</style>