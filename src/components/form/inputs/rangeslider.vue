<template>
    <div class="ux-range-slider-wrap">
        <input ref="range" :min="min" :step="step" :max="max" v-model="model" type="range" class="ux-range-slider" />
        <output ref="bubble" class="ux-range-bubble"></output>
    </div>
</template>
<script>


function getPercentValue(lowerLimit, upperLimit, percentage) {
    return lowerLimit + (upperLimit - lowerLimit) * (percentage / 100);
}


export default {
    props: {
        modelValue: {
            type: Number,
        },
        min: {
            type: Number,
            default: 0,
        },
        step: {
            type: Number,
            default: 1,
        },
        max: {
            type: Number,
            default: 100,
        },
        prefix: {
            type: String,
            default: '',
        },
        suffix: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            model: this.modelValue
        }
    },
    watch: {
        model(val, old) {
            this.$emit('update:modelValue', Number(val));
        },
    },
    mounted() {
        this.attachListeners();
    },
    beforeUnmount() {
        this.detachListeners();
    },
    methods: {
        inputReceived(event) {
        	const self = this;
            const range = self.$refs.range;
            const bubble = self.$refs.bubble;
            const val = range.value;
            const min = range.min ? range.min : 0;
            const max = range.max ? range.max : 100;


            


            let newVal = Number(((val - min) * 100) / (max - min));
            newVal = getPercentValue(1, 99, newVal);
            // newVal = Math.min(newVal, 97)
            // newVal = Math.max(newVal, 3)

            bubble.innerHTML = `${self.prefix}${val}${self.suffix}`;
            // Sorta magic numbers based on size of the native UI thumb
            
            bubble.style.left = `${newVal}%`;
            // bubble.style.left = `${Math.min(Math.max(newVal, 1.5), 98.5)}%`;
            // `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
            // bubble.style.left = `${newVal}%`;
        },
        attachListeners() {
            const self = this;
            const range = self.$refs.range;
            const bubble = self.$refs.bubble;

            range.addEventListener('input', self.inputReceived)
        },
        detachListeners() {
            const self = this;
            const range = self.$refs.range;
            const bubble = self.$refs.bubble;

            range.addEventListener('input', self.inputReceived)
        }
    },




}
</script>
<style scoped lang="scss">
$handle: 2em;
$bubble-color: #000;//var(--primary);

.ux-range-slider-wrap {
  position: relative;
}


.ux-range-bubble {
    background: $bubble-color;
    color: white;
    padding: 0 12px;
    position: absolute;
    border-radius: 4px;
    left: 50%;
    top:-$handle;
    height: $handle;
    line-height:$handle;
    font-weight: bold;
    font-size: 0.8em;;
    transform: translateX(-50%);
   	visibility: hidden;

    &:empty {
	    	display:none;
	    }



	&::after {
		position: absolute;
		left: 50%;
		bottom: -5px;
		transform:translateX(-50%);
		content:'';
		display: block;
	    width: 0; 
		  height: 0; 
		  border-left: 5px solid transparent;
		  border-right: 5px solid transparent;
		  
		  border-top: 5px solid $bubble-color;


	}
}

.ux-range-slider-wrap:hover {
	.ux-range-bubble {
		visibility: visible;
	}
}

.ux-range-slider {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: $handle;
    margin: 1em 0;
    border-radius: 5em;
    background: rgba(#000, 0.05);
    outline: none;
    -webkit-transition: .2s;
    transition: opacity .2s;
    border: 1px solid rgba(#000, 0.1);
    box-shadow: inset 0 3px 2px rgba(#000, 0.05);
    overflow: hidden;
    cursor: pointer;


    &::-webkit-slider-thumb {
        transition: all 0.3s;
        -webkit-appearance: none;
        appearance: none;
        width: $handle;
        height: $handle;
        // background:currentColor;
        // background: var(--primary);
        border-radius: 100%;
        // box-shadow: 0 1px 3px rgba(#000, 0.1);
        cursor: pointer;
        opacity: 1;

        background: #fff;
        border: 1px solid rgba(#000, 0.3);
        box-shadow: 0 0 0.3em rgba(#000, 0.3), -2001em 0 0 2000em var(--primary);
        // transform: scale(0.9);
    }

    &::-moz-slider-thumb {
        transition: all 0.3s;
        -moz-appearance: none;
        appearance: none;
        width: $handle;
        height: $handle;
        // background:currentColor;
        // background: var(--primary);
        border-radius: 100%;
        // box-shadow: 0 1px 3px rgba(#000, 0.1);
        cursor: pointer;
        opacity: 1;

        background: #fff;
        border: 1px solid rgba(#000, 0.3);
        box-shadow: 0 0 0.3em rgba(#000, 0.3), -2001em 0 0 2000em var(--primary);
        // transform: scale(0.9);
    }



    // &:hover::-webkit-slider-thumb {
    //     transform: scale(1);
    // }

    // &:hover::-moz-slider-thumb {
    //     transform: scale(1);
    // }
}


</style>