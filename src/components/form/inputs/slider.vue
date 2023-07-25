<template>


    <label class="ux-field-title" v-if="showLabel">{{label}} <span class="ux-required-marker" v-if="required">*</span></label>
    <div class="ux-field-description" v-if="showDescription">{{description}}</div>
    <div v-if="multiValue">
        <flex-row class="ux-slider-row" :key="index" v-for="(entry, index) in model">
            <flex-cell>
                <flex-row center gap>
                    <!-- <flex-cell shrink>
                        <span class="ux-slider-limit ux-slider-limit-min">{{sliderPrefix}}{{minSliderValue}}{{sliderSuffix}}</span>
                    </flex-cell> -->
                    <flex-cell>
                        <range-slider type="range" :min="minSliderValue" :step="sliderStepValue" :prefix="sliderPrefix" :suffix="sliderSuffix" :max="maxSliderValue" v-model="model[index]" class="ux-slider"/>
                    </flex-cell>
                    <flex-cell shrink>
                        <!-- <span class="ux-slider-limit ux-slider-limit-max">{{sliderPrefix}}{{maxSliderValue}}{{sliderSuffix}}</span> -->
                        <span class="ux-slider-limit ux-slider-limit-value">{{sliderPrefix}}{{model[index]}}{{sliderSuffix}}</span>
                    </flex-cell>
                </flex-row>
            </flex-cell>
            <flex-cell shrink vcenter>
                <ux-button tag="a" icon v-if="canRemoveValue" @click="remove(entry)">
                    <ux-icon icon="fa-times" />
                </ux-button>
            </flex-cell>
        </flex-row>
        <ux-button v-if="canAddValue" @click="add()">{{addLabel}}</ux-button>
    </div>
    <template v-else>



        <flex-row center gap>
            <!-- <flex-cell shrink>
                <span class="ux-slider-limit ux-slider-limit-min">{{sliderPrefix}}{{minSliderValue}}{{sliderSuffix}}</span>
            </flex-cell> -->
            <flex-cell>
                <range-slider type="range" :min="minSliderValue" :step="sliderStepValue" :prefix="sliderPrefix" :suffix="sliderSuffix" :max="maxSliderValue" v-model="model" class="ux-slider"/>
            </flex-cell>
            <flex-cell shrink>
                <!-- <span class="ux-slider-limit ux-slider-limit-max">{{sliderPrefix}}{{maxSliderValue}}{{sliderSuffix}}</span> -->
                <span class="ux-slider-limit ux-slider-limit-value">{{sliderPrefix}}{{model}}{{sliderSuffix}}</span>
            </flex-cell>

        </flex-row>
    </template>
</template>
<script>
import InputMixin from './input-mixin';
import RangeSlider from './rangeslider.vue';

export default {
    components:{
        RangeSlider,
    },
    props: {
        modelValue: {
            type: [String, Array],
        },
    },
    
    computed: {
        sliderPrefix() {
            return this.field.prefix || ''
        },
        sliderSuffix() {
            return this.field.suffix || ''
        },
        sliderStepValue() {
            return parseFloat(this.field.stepValue) || 1;
        },
        minSliderValue() {
            return parseFloat(this.field.minValue) || 0;
        },
        maxSliderValue() {
            return parseFloat(this.field.maxValue) || 100;
        },
    },
    mixins: [InputMixin],
    methods: {
        getNewDefaultEntry() {
            return '';
        },
    },
}
</script>
<style lang="scss" scoped>
.ux-slider-limit {
    width: 40px;
    display: block;
    text-align: center;
    opacity: 0.8;
    font-size: 0.8em;
}

.ux-slider-limit-value {
    width: 40px;
    display: block;
    text-align: center;
    opacity: 1;
    font-size: 1.2em;
    font-weight: bold;
}


</style>