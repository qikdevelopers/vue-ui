<template>
    <div class="ux-submission-form" :class="classes">
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
        <template v-else-if="state === 'form.intent'">
            <template v-if="intentModule === 'stripe'">
                <ux-panel>
                    <ux-panel-body>
                        Total: {{formattedTotal}}
                    </ux-panel-body>
                </ux-panel>
                <!-- <ux-panel> -->
                    <!-- <ux-panel-body> -->
                        <StripeElements v-if="stripeIntent" v-slot="{ elements, instance }" ref="elms" :stripe-key="stripeIntent.key" :instance-options="stripeIntent.instanceOptions" :elements-options="stripeIntent.elementOptions">
                            <StripeElement ref="stripePayment" type="payment" :elements="elements">
                            </StripeElement>
                        </StripeElements>
                        <div class="intent-submit">
                        <ux-button color="primary" @click="confirmIntention">
                            Confirm Payment
                        </ux-button>
                    </div>
                    <!-- </ux-panel-body> -->
                <!-- </ux-panel> -->
            </template>
        </template>
        <template v-else>
            <ux-form submission :sandbox="sandbox" ref="form" :paymentConfiguration="paymentConfiguration" v-model="model" @form:state="formStateUpdated" :fields="formFields" />
            <span :tooltip="tooltip">
                <ux-button :disabled="buttonDisabled" color="primary" @click="submit" :loading="processing">
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
import { ref } from 'vue';
import UxForm from './form.vue';
import debounce from 'lodash/debounce';

const STATE_READY = 'form.ready';
const STATE_PROCESSING = 'form.processing';
const STATE_COMPLETE = 'form.complete';
const STATE_ERROR = 'form.error';
const STATE_INTENT = 'form.intent';

import { StripeElements, StripeElement } from 'vue-stripe-js'


export default {
    methods: {
        formStateUpdated(state) {
            this.formState = state;
        },
        softReset() {
            this.processing = false;
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
            this.intent = null;
            if (this.$refs.form) {
                this.$refs.form.reset()
            }

            this.state = STATE_READY;
            this.error = null;
            this.submitAttempted = false;
             this.processing = false;
            this.$emit('reset');

        },
        async confirmIntention() {
            console.log('Confirm intention');
            const self = this;
            self.processing = true;
            self.$emit('processing');

            // Get the form intention id
            const intentionID = self.$sdk.utils.id(self.intent);

            ////////////////////////////////////////

            const elms = self.$refs.elms;
            const paymentElement = self.$refs.stripePayment;
            const return_url = window.location.href;

            // Confirm the payment intention
            const result = await elms.instance.confirmPayment({
                elements: paymentElement.elements,
                redirect: "if_required",
                confirmParams: {
                    return_url
                },
            });

            self.$sdk.api.post(`/form/capture/${intentionID}`)
            .then(captureComplete, captureFailed);


            async function captureComplete({data}) {
                // Run post submission functions
                await self.postSubmit(data);
                // Set the state to ready
                self.processing = false;
                self.state = STATE_COMPLETE;
                self.$emit('success', data);

            }

            async function captureFailed(err) {
                err = err.response?.data || err;
                self.error = err;
                self.processing = false;
                self.state = STATE_ERROR;
                self.$emit('error', err);
             }

            // , {
            // data: submission,
            //     sandbox: self.sandbox,
            // })
            // .then(function(res) {

            // });

            // console.log('ELEMS', {window, elms, paymentElement});








            // , { payment_method: { card: cardNumber } })



        },
        async submit() {

            console.log('Submit');
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

            self.processing = true;
            self.state = STATE_PROCESSING;
            self.$emit('processing');

            // Run pre submission functions


            // Create the submission
            const { submission, error } = await self.preSubmit(self.model);

            if (error) {
                console.log('pre submit error', error);
                return submissionFailed(error);
            }


            // Submit to the server


            self.$sdk.api.post(`/form/${self.formID}`, {
                data: submission,
                sandbox: self.sandbox,
            }).then(function(res) {

                const { data } = res;
                if (data.submission) {
                    return submissionComplete(res.data);
                }

                if (data.intent) {
                    return submissionIntentReturned(res.data);
                }

                return submissionFailed({
                    message: 'Unexpected response from server',
                    status: 500,
                    statusCode: 500,
                })


            }, submissionFailed)

            async function submissionIntentReturned({ intent }) {
                console.log('Submission intent was returned', intent);
                // Save the intent to the scope
                self.intent = intent;

                // Figure out how to handle it
                switch (self.intentModule) {
                    case 'stripe':
                        await self.$sdk.utils.loadExternalScript('https://js.stripe.com/v3/');
                        break;
                }

                // Change the state
                self.state = STATE_INTENT;
                self.processing = false;
                self.$emit('intent', intent);

            }



            async function submissionComplete(response) {


                // Run post submission functions
                await self.postSubmit(response);
                // Set the state to ready
                self.processing = false;
                self.state = STATE_COMPLETE;
                self.$emit('success', response);
            }

            async function submissionFailed(err) {

                err = err.response?.data || err;
                self.error = err;
                self.processing = false;
                self.state = STATE_ERROR;
                self.$emit('error', err);
            }

        },
        async preSubmit(model) {
            const self = this;


            // Run through payments
            const submission = JSON.parse(JSON.stringify(model));
            const total = submission._payment?.total;
            const gateway = submission._payment?.gateway;


            if (!total) {
                console.log('No total');
                return { submission };
            }

            if (!gateway) {
                return {
                    error: {
                        message: 'No gateway selected',
                        status: 400,
                        statusCode: 400,
                    }
                };
            }

            // const paymentElement = this.payment.element;
            const paymentIntegration = gateway.integration;
            // const paymentModule = paymentIntegration?.module;

            // if (!paymentModule) {
            //     return {
            //         error: {
            //             message: 'Invalid payment module',
            //             status: 400,
            //             statusCode: 400,
            //         }
            //     };
            // }


            // switch (paymentModule) {
            // case 'stripe':
            //     const stripeElementsInstance = paymentElement?.$refs?.elms?.instance;
            //     const cardElement = paymentElement?.$refs?.card?.stripeElement;

            //     if (stripeElementsInstance && cardElement) {
            //         const result = await stripeElementsInstance.createToken(cardElement)

            //         if(result.error) {
            //             return {
            //                 error:result.error
            //             }
            //         }

            //         if(!result.token) {
            //             return {
            //                 error:{
            //                     message:'Unable to generate secure token',
            //                     status:500,
            //                     statusCode:500,
            //                 }
            //             }
            //         }

            //         // Update with the payment token
            //        submission._payment.source = result.token;
            //     }
            //     break;
            // }


            // console.log('GENERATE PAYMENT', {
            //     total,
            //     gateway,
            //     paymentConfiguration: self.paymentConfiguration,
            //     submission,
            // });

            return { submission };
        },
        async postSubmit(response) {

        },
    },
    components: {
        UxForm,
        StripeElements,
        StripeElement,
    },
    provide() {
        return {
            form: this.form,
            // payment: this.payment,
        }
    },
    props: {
        submitText: {
            type: String,
            default () {
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
        sandbox: {
            type: Boolean,
            default: false,
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
            intent: null,
            processing:false,
            // payment: ref({}),
        }
    },
    mounted() {
        this.mounted = true;
    },
    beforeUnmount() {
        this.mounted = false;
    },

    computed: {
        payment() {
            return this.model._payment;
        },
        total() {
            return this.payment?.total;
        },
        formattedTotal() {
            return this.$sdk.utils.formatCurrency(this.payment.total, this.payment.currency);
        },
        intentModule() {
            return this.intentAction.module;
        },
        intentAction() {
            return this.intent?.actionDetails || {};
        },
        stripeIntent() {
            if (this.intentModule !== 'stripe') {
                return;
            }


            const clientSecret = this.intentAction?.paymentIntent?.client_secret;
            return {
                module: 'stripe',
                key: this.intentAction.key,
                clientSecret,
                instanceOptions: {
                    clientSecret,
                },
                elementOptions: {
                    clientSecret,
                },
                // paymentElementOptions: {
                //     client_secret: this.intentAction?.paymentIntent?.client_secret,
                // }

            }
        },

        formFields() {

            const output = [...this.fields];



            output.push({
                title: 'Payment',
                type: 'object',
                key: '_payment',
                widget: 'payment',
                asObject: true,
                minimum: 1,
                maximum: 1,
            })



            return output;
        },
        classes() {
            const self = this;
            const array = []

            if (this.formID) {
                array.push(`form-${this.formID}`);
            }

            return array;
        },
        tooltip() {
            return this.buttonDisabled ? 'Please check the errors in your form' : undefined;
        },
        buttonDisabled() {
            // Disable Submission if we try to click and it's invalid

            if(this.noGatewaySelectedButPaymentIsRequired) {
                return true;
            }

            return this.submitAttempted && this.invalid;
        },
        noGatewaySelectedButPaymentIsRequired() {
            if(!this.total) {
                return false;
            }

            return !this.payment.gateway;
        },
        invalid() {
            var formInvalid = this.formState?.invalid;
            if(formInvalid) {
                return true;
            }

            return this.noGatewaySelectedButPaymentIsRequired;
                
        },
        formID() {
            return this.$sdk.utils.id(this.form);
        },
        paymentConfiguration() {
            return this.form.paymentConfiguration || {};
        },
        fields() {
            return this.form.fields || [];
        }
    }
}
</script>
<style lang="scss" scoped>

    .intent-submit {
        margin-top: 1em;
    }
    
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