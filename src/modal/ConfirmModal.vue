<template>
    <flex-column>
        <flex-header>
        	Confirm
        </flex-header>
        <flex-body>
        	Confirm
        </flex-body>
        <flex-footer>
        	<flex-row>
        		<flex-cell>
        			<ux-button @click="dismiss">Cancel</ux-button>
        		</flex-cell>

        		<flex-cell>
        			<ux-button @click="done">Done</ux-button>
        		</flex-cell>
        	</flex-row>
        </flex-footer>
    </flex-column>
</template>
<script>

import ModalMixin from './ModalMixin';

export default {
	mixins:[ModalMixin],
}
</script>
<style lang="scss">
</style>