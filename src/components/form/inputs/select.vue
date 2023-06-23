<template>
    <div class="native-select" :class="classes">
        <label class="ux-field-title" v-if="showLabel">{{label}} <span class="ux-required-marker" v-if="required">*</span></label>
        <div class="ux-field-description" v-if="showDescription">{{description}}</div>
        <template v-if="multiValue">
            <div class="select-tags">
                <div class="select-tag" :key="value.value || value" v-for="(value, i) in model">
                    <flex-row gap center>
                        <flex-cell>{{displayLabelFromValue(value)}}</flex-cell>
                        <flex-cell shrink>
                            <a @click="removeValue(i)">
                                <ux-icon icon="fa-times" /></a>
                        </flex-cell>
                    </flex-row>
                </div>
            </div>
        </template>
        <div v-if="loadingAsyncOptions">
            <ux-icon icon="fa-spinner" spin left /> Loading Options
        </div>
        <div v-else class="select-input-wrapper">
            <div class="ui-select-button">
                <slot>
                    <ux-button tag="div">
                        {{summary}}
                    </ux-button>
                </slot>
            </div>
            <template v-if="multiValue && canAddValue">
                <select @focus="touch" v-model="candidate">
                    <option value="">Select an option</option>
                    <template v-if="grouped">
                        <optgroup :label="group.title" :key="group.title" v-for="group in grouped">
                            <option :value="option.value" v-for="option in group.options">{{option.title}}</option>
                        </optgroup>
                    </template>
                    <template v-else>
                            <option :value="option.value" v-for="option in selectableOptions">{{option.title}}</option>
                    </template>
                </select>
            </template>
            <template v-else>
                <select @focus="touch" :multiple="multiValue" v-model="model">
                    <option value="" v-if="showNoneOption">None</option>
                    <template v-if="grouped">
                        <optgroup :label="group.title" :key="group.title" v-for="group in grouped">
                            <option :value="option.value" v-for="option in group.options">{{option.title}}</option>
                        </optgroup>
                    </template>
                    <template v-else>
                            <option :value="option.value" v-for="option in selectableOptions">{{option.title}}</option>
                    </template>
                </select>
            </template>
        </div>
    </div>
</template>
<script>
import InputMixin from './input-mixin';



function isUndefined(entry) {
    return entry === undefined || typeof entry === 'undefined' || entry === null || String(entry) === 'null' || String(entry) === 'undefined';
}

//////////////////////////

export default {
    data() {
        return {
            candidate: null
        }
    },
    props: {
        title: {
            type: String,
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
        displayLabelFromValue(value) {

            if(!value) {
                return;
            }

            const v = value.value || value;
            const option = this.optionLookup[v] || {};

            return option.title || option.name || value.title || value.value || value
        },
        addValue(value) {
            if (!this.canAddValue) {
                return;
            }

            if (this.model.indexOf(value) !== -1) {
                return;
            }

            this.model = [...this.model, value];
        },
        removeValue(index) {

            var sliced = this.model.slice();


            if (index != -1) {
                sliced.splice(index, 1);
                this.model = sliced
            }

        },
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

                switch (val) {
                    case '':
                        switch (self.type) {
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
    watch: {
        candidate(entry) {
            if (entry) {
                this.addValue(entry)
                this.candidate = null;
            }
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
        summary() {
            if (this.multiValue) {
                return 'Select an option'
            }

            const noneOption = this.selectableOptions.find(function(i) {
                return i.none;
            });

            const noneValue = noneOption?.title || noneOption?.label; 

            return this.model ? this.getLabel(this.optionLookup[this.model]) : noneValue || this.title || 'Click to select';
        },

        grouped() {
            const self = this;

            const {values} = self.selectableOptions.reduce(function(memo, option) {

                const groupName = option.group || '';

                let existingEntry = memo.hash[groupName];
                if(!existingEntry) {
                    existingEntry = memo.hash[groupName] = {
                        title:groupName,
                        options:[],
                    }

                    memo.values.push(existingEntry);
                }

                existingEntry.options.push(option);

                return memo;
            }, {
                hash:{},
                values:[],
            })

            if(values.length <= 1) {
                return
            }

            return values
        },
        selectableOptions() {

            if (this.field?.sorted) {
                return this.options.sort(function(a, b) {
                    var nA = (a.title || a).toLowerCase();
                    var nB = (b.title || b).toLowerCase();

                    if (nA < nB) return -1;
                    else if (nA > nB) return 1;
                    return 0;
                });
            }

            return this.options;

        },
        showNoneOption() {
            const shouldShow = (this.singleValue && !this.minimum);

            if (!shouldShow) {
                return false;
            }

            const hasNoneOption = this.selectableOptions.find(function(i) {
                return i.none;
            });

            if (hasNoneOption) {
                return false;
            }

            return true;
        },
    }
}
</script>
<style lang="scss" scoped>
.native-select {

    .select-input-wrapper {
        cursor: pointer;
        position: relative;
    }


    .select-tags {
        display: block;

        .select-tag {
            display: block;
            padding: 0.8em;
            border-radius: 0.3em;
            margin-bottom: 0.5em;
            border: 1px solid rgba(#000, 0.1);
            background: var(--foreground-element-bg, #fff);

            a {
                cursor: pointer;
            }

            &:last-child {
                border-bottom: none;
            }
        }
    }


    // &.multiple {
    //     select {
    //         width: 100%;
    //         font-size: 1em;
    //         border: 1px solid rgba(#000, 0.1);
    //         appearance: none;

    //         &:focus {
    //             border: 1px solid var(--primary);
    //         }
    //     }
    // }

    // &.single {


    .ui-select-button {
        position: relative;
        width: 100%;



        &>.ux-btn {
            display: block;
            position: relative;
            text-align: left;

            &:after {
                content: '▼';
                position: absolute;
                right: 0;
                line-height: 1;
                top: 50%;
                transform: translateY(-50%);
                bottom: 0;
                height: 1em;
                font-size: 0.6em;
                width: 4em;
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
        color: inherit;
    }

    // }


}
</style>