<template>
    <div class="ux-submission-form">
        <template v-if="state === 'form.error'">
            <h3>An error occurred</h3>
            <pre v-if="error.message">{{error.message}}</pre>
            <div v-if="error.data?.errors">
                <pre :key="field.path" v-for="field in error.data.errors">{{field.message}}</pre>
            </div>
            <pre v-else>{{error}}</pre>
            <ux-button color="primary" @click="softReset">
                Try again
                <ux-icon right icon="fa-undo" />
            </ux-button>
        </template>
        <template v-else-if="state === 'form.complete'">
            <slot :reset="reset">
                Thank you

                <ux-button @click="reset">
                    Back to form
                </ux-button>
            </slot>
            
        </template>
        <template v-else>
            <ux-form submission ref="form" v-model="model" @form:state="formStateUpdated" :fields="fields" />
            <span :tooltip="tooltip">
                <ux-button :disabled="buttonDisabled" color="primary" @click="submit" :loading="state === 'form.processing'">
                    {{submitText}}
                </ux-button>
            </span>
        </template>
        <!-- <a @click="touch()">Touch</a> |
        <a @click="untouch()">Untouch</a> |
        <a @click="reset()">Reset</a> -->
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
        formStateUpdated(state) {
            this.formState = state;
        },
        softReset() {
            this.state = STATE_READY;
        },
        touch() {
            if (this.$refs.form) {
                this.$refs.form.touch()
            }
        },
        untouch() {
            if (this.$refs.form) {
                this.$refs.form.untouch()
            }

        },
        reset() {
            this.model = {};
            if (this.$refs.form) {
                this.$refs.form.reset()
            }
            this.state = STATE_READY;
            this.error = null;
            this.submitAttempted = false;
            this.$emit('reset');

        },
        async submit() {

            const self = this;
            self.touch();

            if (!self.submitAttempted) {
                self.submitAttempted = true;
                self.touch();
            }


            if (self.buttonDisabled) {
                console.log('Form is invalid', this.formState);
                return
            }

            self.state = STATE_PROCESSING;
            self.$emit('processing');

            // Run pre submission functions
            await self.preSubmit();

            // Create the submission
            const submission = JSON.parse(JSON.stringify(self.model))

            // Submit to the server

            self.$sdk.api.post(`/form/${self.formID}`, submission).then(submissionComplete, submissionFailed)

            async function submissionComplete(res) {

                // Run post submission functions
                await self.postSubmit();
                // Set the state to ready
                self.state = STATE_COMPLETE;
                self.$emit('success', res.data);
            }

            async function submissionFailed(err) {

                err = err.response?.data || err;
                self.error = err;
                self.state = STATE_ERROR;
                self.$emit('error', err);
            }

        },
        async preSubmit() {

        },
        async postSubmit() {

        },
    },
    components: {
        UxForm,
    },
    provide() {
        return {
            form: this.form,
        }
    },
    props: {
        submitText:{
            type:String,
            default() {
                return 'Submit';
            }
        },
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
        model(m) {
            this.$emit('update:modelValue', m);
        }
    },
    data() {
        return {
            submitAttempted: false,
            formState: null,
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
        tooltip() {
            return this.buttonDisabled ? 'Please check the errors in your form' : undefined;
        },
        buttonDisabled() {
            // Disable Submission if we try to click and it's invalid
            return this.submitAttempted && this.invalid;
        },
        invalid() {
            return this.formState?.invalid
        },
        formID() {
            return this.$sdk.utils.id(this.form);
        },
        fields() {
            return this.form.fields || [];
        }
    }
}
</script>
<style lang="scss" scoped>
[tooltip] {
    position: relative;
    cursor: help
}

[tooltip]::after {
    position: absolute;
    opacity: 0;
    pointer-events: none;
    content: attr(tooltip);
    left: 0;
    top: calc(100% + 10px);
    border-radius: 3px;
    box-shadow: 0 0 5px 2px rgba(100, 100, 100, 0.6);
    background-color: white;
    z-index: 10;
    padding: 8px;
    width: 300px;
    transform: translateY(-20px);
    transition: all 150ms cubic-bezier(.25, .8, .25, 1);
}

[tooltip]:hover::after {
    opacity: 1;
    transform: translateY(0);
    transition-duration: 300ms;
}
</style>