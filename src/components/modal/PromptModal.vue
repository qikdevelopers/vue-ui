<template>
    <form class="wrapper" @submit.prevent.stop="submit">
    <flex-column >
        
        <flex-body>
            <div class="padder">
                <h5>{{options.title}}</h5>
                <div>{{options.description}}</div>
                <ux-form ref="form" v-model="model" :fields="fields" />

            </div>
        </flex-body>
        <flex-footer>
            <div class="padder">
                <flex-row>
                    <flex-cell shrink>
                        <ux-button tag="a" @click="dismiss">Cancel</ux-button>
                    </flex-cell>
                    <flex-spacer/>
                    <flex-cell shrink>
                        <ux-button type="submit" @click="close(model)">Confirm</ux-button>
                    </flex-cell>
                </flex-row>
            </div>
        </flex-footer>

    </flex-column>
    </form>
</template>
<script>
import ModalMixin from './ModalMixin';

export default {

    mixins: [ModalMixin],
    data() {
        return {
            model:{},
        }
    },
    methods:{
        
    },
    computed:{
        fields() {
            return this.options.fields || [];
        }
    },
    created() {
        if(this.options.model) {
            this.model = this.options.model;
        }
    }
}
</script>
<style lang="scss" scoped>
.wrapper {
    border-radius: 0.5em;
    overflow: hidden;
    background: #fff;
    text-align: left;
    display: flex;

    h5 {
        font-size: 1.2em;
        margin: 0;
    }

    .padder {
        padding: 1em;
    }
}
</style>