<template>
    <template v-if="multiValue">
        Invalid configuration
    </template>
    <template v-else>
        <ux-form ref="form" :trail="trail" :paymentConfiguration="configuration" :includeOfficeOnly="includeOfficeOnly" :submission="submission" @form:state="stateChange" :parentModel="parentModel" v-model="model" :flex="sameLine" :fields="calculatedTotalFields" />
        <template v-if="requiresPayment">
            <h2>Payment Summary</h2>
            <ux-panel>
                <ux-panel-body>
                    <!-- <pre>Sandbox: {{sandbox}}</pre> -->
                    <table class="calculations">
                        <tbody>
                            <tr class="calculation-modifier" :class="[`modifier-set`, `modifier-visible-${baseAmountVisible}`]" v-if="baseAmount">
                                <td>Amount</td>
                                <td>{{formattedBaseAmount}}</td>
                                <td class="running-total">{{formattedBaseAmount}}</td>
                            </tr>
                            <tr class="calculation-modifier" :class="[`modifier-${modifier.modifier}`, `modifier-visible-${modifier.visible}`]" v-for="modifier in visibleModifications">
                                <td>{{modifier.title}}</td>
                                <td>{{modifier.summary}}</td>
                                <td class="running-total">{{modifier.result}}</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr class="grand-total" v-if="baseAmount">
                                <td><strong>Total</strong></td>
                                <td></td>
                                <td><strong>{{formattedTotal}}</strong></td>
                            </tr>
                        </tfoot>
                    </table>
                </ux-panel-body>
            </ux-panel>
            <template v-if="gateways.length > 1">
                <h3>Please select a payment processor</h3>
                <ux-panel>
                    <ux-panel-body>
                        <ux-button class="gateway-selector" :color="{primary:isSelectedGateway(gateway)}" :active="isSelectedGateway(gateway)" @click="selectGateway(gateway)" v-for="gateway in gateways">
                            {{gateway.title}}
                            <ux-icon :icon="isSelectedGateway(gateway) ? 'fa-check' : 'far fa-circle'" />
                        </ux-button>
                    </ux-panel-body>
                </ux-panel>
            </template>
        </template>
    </template>
</template>
<script>
import InputMixin from './input-mixin';
import Expressions from '../expressions';


// import { StripeElements, StripeElement } from 'vue-stripe-js'


const yearOptions = Array.from({ length: 6 }, (_, i) => new Date().getFullYear() + i)
    .map(function(v) {

        const value = String(v).slice(2);
        return {
            title: v,
            value: value,
        }
    });

export default {
    mixins: [InputMixin],
    components: {
        // StripeElements,
        // StripeElement,
    },
    props: {
        submission: {
            type: Boolean,
            default: true,
        },
        sandbox: {
            type: Boolean,
            default: false,
        },
        configuration: {
            type: Object,
            default () {
                return {}
            }
        },
        modelValue: {
            type: [Object, Array],
        },
        trail: {
            type: Array,
            default () {
                return [];
            }
        },
    },
    data() {
        return {
            // cardOptions: null,
            // stripeInstanceOptions: null,
            // stripeElementsOptions: null,
        }
    },
    created() {

        // console.log('PAYMENT FIELDS', this)
        // if (Array.isArray(this.modelValue)) {
        //     this.modelValue.forEach(function(entry) {
        //         entry.guid = Math.random();
        //     })
        // }
    },
    // mounted() {
    //     this.payment.element = this;
    // },
    // beforeUnmount() {
    //     this.payment.element = null;
    // },
    // inject:['payment'],
    watch: {
        gateways: {
            async handler(gateways) {
                const self = this;

                const modules = Array.from(
                        new Set(
                            gateways.map(function(gateway) {
                                return gateway.integration?.module
                            })
                        )
                    )
                    .filter(Boolean);

                // const promises = modules.map(function(moduleName) {
                //     switch (moduleName) {
                //         case 'stripe':
                //             return self.$sdk.utils.loadExternalScript('https://js.stripe.com/v3/');
                //             break;
                //         default:
                //             return Promise.resolve();
                //             break;
                //     }
                // })

                // await Promise.all(promises);

                if (gateways.length === 1) {
                    self.model.gateway = gateways[0];
                }
            },
            immediate: true,
        },
    },
    computed: {
        baseAmountVisible() {
            return this.baseAmount && !this.visibleModifications.some(function(modifier) {
                return modifier.modifier === 'set';
            })
        },
        visibleModifications() {
            const modifiers = this.calculations.modifications || [];

            console.log('MODIFIERS', modifiers);

            return modifiers;
        },
        // stripeApiKey() {
        //     const self = this;
        //     if (self.calculatedTotal) {
        //         if (self.gatewayIntegrationModule === 'stripe') {
        //             return self.sandbox ? self.gatewayIntegration?.publicDetails?.testPublishableKey : self.gatewayIntegration?.publicDetails?.livePublishableKey;
        //         }
        //     }
        // },
        expressionsContext() {


            // var additionalContext = this.additionalContext?.value || {}
            const context = {
                this: this.parentModel,
                self: this.parentModel,
                model: this.parentModel,
                data: this.parentModel,
                // this.parentModel || this.model,
                // additional:{
                // ...additionalContext,
                // }
            }

            console.log('Expressions context changed', context)

            return context;
        },
        requiresPayment() {
            return this.enabled && this.calculatedTotal;
        },
        enabled() {
            return this.configuration.enabled;
        },
        gateway() {
            return this.model.gateway;
        },
        gatewayIntegration() {
            return this.gateway?.integration;
        },
        gatewayIntegrationModule() {
            return this.gatewayIntegration?.module;
        },
        gateways() {
            return this.configuration.gateways || [];
        },
        currency() {
            return this.configuration.currency;
        },
        baseAmount() {
            return parseInt(this.configuration.amount || 0);
        },
        formattedBaseAmount() {
            return this.$sdk.utils.formatCurrency(this.baseAmount, this.currency);
        },
        modifiers() {
            return this.configuration.modifiers || [];
        },
        activeModifiers() {
            const self = this;
            const context = this.expressionsContext;

            return self.modifiers.filter(function(modifier) {
                if (!modifier.condition) {
                    return true;
                }
                const result = Expressions.evaluateExpression(modifier.condition, context);
                return result;
            })
        },
        calculations() {
            const self = this;
            let modifications = [];

            let total = 0;

            if (self.baseAmount) {
                total += self.baseAmount;
            }

            self.activeModifiers.forEach(function(modifier, i) {

                const context = Object.assign({}, self.expressionsContext, { total });
                const before = total;

                let amount = Expressions.evaluateExpression(modifier.expression, context);
                amount = parseInt(amount || 0);
                const formatted = self.$sdk.utils.formatCurrency(amount, self.currency);

                let summary = '';

                switch (modifier.modifier) {
                    case 'add':
                        total = Math.max(0, total + amount);
                        summary = `+${formatted}`;
                        break;
                    case 'subtract':
                        total = Math.max(0, total - amount);
                        summary = `-${formatted}`;
                        break;
                    case 'multiply':
                        total = Math.max(0, total * amount);
                        summary = `x ${amount}`;
                        break;
                    case 'divide':
                        total = Math.max(0, total / amount);
                        summary = `÷ ${amount}`;
                        break;
                    case 'set':
                        total = Math.max(0, amount);
                        summary = '';//`${formatted}`;
                        break;
                }

                if (before != total) {

                    let result = self.$sdk.utils.formatCurrency(total, self.currency);

                    modifications.push({
                        title: modifier.title,
                        summary,
                        total,
                        result,
                        modifier:modifier.modifier,
                        visible:true,
                    })
                }
            })

            const lastSetIndex = modifications.findLastIndex(function(modifier) {
                return modifier.modifier === 'set';
            })

            if(lastSetIndex != -1) {

                modifications = modifications.map(function(mod, i) {
                    if(i < lastSetIndex) {
                        mod.visible = false;
                    }
                    return mod;
                })

                console.log('modifications', lastSetIndex, modifications)
            //     modifications = modifications.slice(lastSetIndex-1);
            }

            return {
                modifications,
                total,
            }
        },

        formattedTotal() {
            return this.$sdk.utils.formatCurrency(this.calculatedTotal, this.currency);
        },
        calculatedTotal() {
            return this.calculations.total;
        },
        calculatedTotalFields() {
            const self = this;
            const fields = []

            fields.push({
                title: 'Calculated Total',
                type: 'integer',
                key: 'total',
                widget: 'value',
                minimum: parseInt(self.calculatedTotal) ? 1 : 0,
                maximum: 1,
                expressions: {
                    value() {
                        return self.calculatedTotal;
                    }
                },
            })

            return fields;
        },
        subFields() {

            const self = this;

            const fields = []
            const cardFields = [];


            cardFields.push({
                title: 'Name on card',
                key: 'name',
                type: 'string',
                minimum: 1,
                maximum: 1,
                placeholder: 'Super Citizen',
            })

            cardFields.push({
                title: 'Card Number',
                key: 'number',
                type: 'string',
                minimum: 1,
                maximum: 1,
                placeholder: 'xxxx xxxx xxxx xxxx',
            })

            cardFields.push({
                type: 'group',
                sameLine: true,
                fields: [{
                    title: 'Expiry Month',
                    key: 'expMonth',
                    type: 'string',
                    minimum: 1,
                    maximum: 1,
                    minLength: 2,
                    maxLength: 2,
                    widget: 'select',
                    options: [
                        { title: '01', value: '01' },
                        { title: '02', value: '02' },
                        { title: '03', value: '03' },
                        { title: '04', value: '04' },
                        { title: '05', value: '05' },
                        { title: '06', value: '06' },
                        { title: '07', value: '07' },
                        { title: '08', value: '08' },
                        { title: '09', value: '09' },
                        { title: '10', value: '10' },
                        { title: '11', value: '11' },
                        { title: '12', value: '12' },
                    ]
                }, {
                    title: 'Expiry Year',
                    key: 'expYear',
                    type: 'string',
                    minimum: 1,
                    maximum: 1,
                    minLength: 2,
                    maxLength: 2,
                    widget: 'select',
                    options: yearOptions,
                }, {
                    title: 'CVN',
                    key: 'cvc',
                    type: 'string',
                    minimum: 1,
                    maximum: 1,
                    minLength: 3,
                    maxLength: 3,
                }]
            })




            fields.push({
                title: 'Card Details',
                key: 'card',
                type: 'group',
                asObject: true,
                minimum: 1,
                maximum: 1,
                fields: cardFields,
            })



            // output.push({
            //     title:'Payment',
            //     type:'object',
            //     key:'_payment',
            //     widget:'payment',
            //     minimum:1,
            //     maximum:1,
            //     fields,
            // })



            return fields;
        }
    },
    methods: {
        isSelectedGateway(gateway) {
            return this.model.gateway?.key === gateway.key;
        },
        selectGateway(gateway) {
            this.model.gateway = gateway;
        },
        stateChange(details) {
            this.$emit('form:state', details);
        },
        getNewDefaultEntry() {
            return {
                // guid: Math.random(),
            }
        },
    }
}
</script>
<style lang="scss" scoped>
.calculations {
    width: 100%;
}

.calculation-modifier {
    font-style: italic;
    opacity: 0.5;

    
}

.modifier-set {
    font-weight: bold;
    opacity: 1;
    font-style: normal;
}

.modifier-visible-false {
    text-decoration: line-through;
    font-style: italic;
    font-weight: normal;
    opacity: 0.5;
}



.grand-total {
    td {
        padding-top: 0.5em;
    }
    font-size: 2em;
}

tfoot {
    border-top:2px solid rgba(#000, 0.1);
}

td {
    text-align: right;
    &:first-child {
        text-align: left;
    }
}

// .ux-multi-group,
// .ux-single-group {
//     margin: 2.5em 0;
// }

// .ux-group-title {
//     font-size: 1.2em;
//     margin-bottom: 1em;
// }

// .arrows .ux-icon {
//     opacity: 0.3;
// }

// :deep(.panel) {
//     margin-bottom: 0.5em;
// }
</style>