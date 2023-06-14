<template>
    <form class="wrapper" @submit.prevent.stop="submit">
    <flex-column >
        
        <flex-body>
            <div class="padder">
                <h5>{{options.title}}</h5>
                <p v-if="options.description">{{options.description}}</p>
                <ux-form ref="form" @form:state="formStateUpdated" v-model="model" :fields="fields" />

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

                        <ux-button :disabled="invalid" color="primary" type="submit" @click="close(model)">Confirm</ux-button>
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
            formState:null,

        }
    },
    methods:{
        formStateUpdated(state) {
            this.formState = state;
        },
    },
    computed:{
        invalid() {
            var formInvalid = this.formState?.invalid;
            if(formInvalid) {
                return true;
            }
                
        },
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