<template>
    <flex-column>
        <flex-header>
        	Options
        </flex-header>
        <flex-body>
        	Options
        </flex-body>
        <flex-footer>
        	<div class="padder">
                <flex-row>
                    <flex-cell shrink>
                        <ux-button @click="dismiss">Cancel</ux-button>
                    </flex-cell>
                    <flex-spacer/>
                    <flex-cell shrink>
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