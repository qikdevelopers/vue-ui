<template>
    <div class="ux-submission-form">
        <template v-if="state === 'form.error'">
            <pre>{{error}}</pre>
            <ux-button @click="softReset">
                Try again
            </ux-button>
        </template>
        <template v-else-if="state === 'form.complete'">
            Complete!
            <ux-button @click="reset">
                Back to form
            </ux-button>
        </template>
        <template v-else>
            <ux-form submission v-model="model" :fields="fields" />
            <ux-button color="primary" @click="submit" :loading="state === 'form.processing'">
                Submit
            </ux-button>
        </template>
    </div>
</template>
<script>
import UxForm from './form.vue';
import debounce from 'lodash/debounce';


const STATE_READY = 'form.ready';
const STATE_PROCESSING = 'form.processing';
const STATE_COMPLETE = 'form.complete';
const STATE_ERROR = 'form.error';



export default {
    methods: {
        softReset() {
            this.state = STATE_READY;
        },
        reset() {
            this.model = {};
            this.state = STATE_READY;
            this.error = null;
        },
        async submit() {

            const self = this;

            self.state = STATE_PROCESSING;

            // Run pre submission functions
            await self.preSubmit();

            // Create the submission
            const submission = JSON.parse(JSON.stringify(self.model))

            // Submit to the server
            const data = await new Promise(function(resolve, reject) {
                self.$qik.api.post(`/form/${self.formID}`, submission)
                .then(function(res) {
                    return resolve(res.data);
                },function(err) {
                    self.error = err;
                    self.state = STATE_ERROR;
                    return reject(err);
                });
            })

            // Run post submission functions
            await self.postSubmit();

            // Set the state to ready
            self.state = STATE_COMPLETE;
        },
        async preSubmit() {

        },
        async postSubmit() {

        },
    },
    components: {
        UxForm,
    },
    props: {
        modelValue: {
            type: Object,
            default () {
                return {}
            }
        },
        form: {
            type: Object,
            required: true,
        },
    },
    watch: {
        modelValue(val, old) {
            this.model = val;
        },
    },
    data() {
        return {
            state: STATE_READY,
            mounted: false,
            model: this.modelValue,
            error: null,
        }
    },
    mounted() {
        this.mounted = true;
    },
    beforeUnmount() {
        this.mounted = false;
    },

    computed: {
        formID() {
            return this.$qik.utils.id(this.form);
        },
        fields() {
            return this.form.fields || [];
        }
    }
}
</script>
<style lang="scss" scoped>
</style>