<template>
    <div class="native-select" :class="classes">
        <label class="ux-field-title" v-if="showLabel">{{label}} <span class="ux-required-marker" v-if="required">*</span></label>
        <div class="ux-field-description" v-if="showDescription">{{description}}</div>
        <div class="ui-select-button" v-if="singleValue">
            <slot>
                <ux-button tag="div">
                    {{summary}}
                </ux-button>
            </slot>
        </div>
        <select @focus="touch" :multiple="multiValue" v-model="model">
            <option value="" v-if="singleValue && !minimum">None</option>
            <option :value="option.value" v-for="option in selectableOptions">{{option.title}}</option>
        </select>

    </div>
</template>
<script>
import InputMixin from './input-mixin';



function isUndefined(entry) {
    return entry === undefined || typeof entry === 'undefined' || entry === null || String(entry) === 'null' || String(entry) === 'undefined';
}

//////////////////////////

export default {
    props: {
        title:{
            type:String,
        },
        modelValue: {
            // type: [Object, Array],
        },
    },
    mixins: [InputMixin],
    created() {
        this.model = this.model;
    },
    methods: {
        cleanOutput(val) {
            var self = this;

            if (isUndefined(val)) {
                if (self.multiValue) {
                    val = [];
                } else {
                    val = undefined;
                }
            } else {
                if (self.multiValue) {
                    val = (val || []).filter(function(i) {
                        return i !== undefined && i !== null;
                    })
                    .map(function(i) {
                        return self.getValue(i);
                    })
                } else {
                    val = self.getValue(val);
                }
            }

            return val;
        },
        cleanInput(val) {

            var self = this;

            if (self.multiValue) {
                if (!val) {
                    val = [];
                }

                if (!Array.isArray(val)) {
                    val = [val];
                }

                /////////////////////////////////

                if (self.maximum) {
                    if (val.length > self.maximum) {
                        val.length = self.maximum;
                    }
                }


                val = val.filter(function(v) {
                    return v !== undefined && v !== null;
                })
                .map(function(v) {
                    var valueKey = self.getValue(v);
                    return self.returnObject ? self.optionLookup[valueKey] : valueKey;
                })
            } else {
                var valueKey = self.getValue(val);
                val = self.returnObject ? self.optionLookup[valueKey] : valueKey;

                switch(val){
                    case '':
                        switch(self.type) {
                            case 'decimal':
                            case 'float':
                            case 'number':
                            case 'integer':
                                val = undefined;
                            break;
                        }
                    break;
                }
            }

            return val;
        },
    },
    computed: {
        returnObject() {
            return this.type == 'reference';
        },
        classes() {
            var array = []

            if (this.multiValue) {
                array.push('multiple');
            } else {
                array.push('single');
            }

            return array;
        },
        optionLookup() {
            var self = this;
            return self.options.reduce(function(set, option) {
                const key = self.getValue(option);
                set[key] = option;
                return set;
            }, {})
        },
        summary() {
            return this.model ? this.getLabel(this.optionLookup[this.model]) : this.title || 'Click to select';
        },
        selectableOptions() { 
            return this.options;
        },
    }
}
</script>
<style lang="scss" scoped>

    
.native-select {

    cursor: pointer;

    &.multiple {
        select {
            width: 100%;
            font-size:1em;
            border:1px solid rgba(#000, 0.1);
            appearance:none;

            &:focus {
            border:1px solid var(--primary);
            }
        }
    }

    &.single {
        position: relative;

       .ui-select-button {
            position: relative;
            width:100%;



            & > .ux-btn {
                display: block;
                position:relative;
                text-align: left;

                &:after {
                content:'▼';
                position:absolute;
                right:0;
                line-height: 1;
                top:50%;
                transform: translateY(-50%);
                bottom: 0;
                height:1em;
                font-size: 0.6em;
                width:4em;
                text-align: center;
                opacity: 0.5;

            }
            }
        }

        select {
            cursor: pointer;
            opacity: 0;
            appearance: none;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
        }
    }

    
}

</style>