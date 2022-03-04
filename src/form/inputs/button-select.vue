<template>
    <label class="ux-field-title" v-if="showLabel">{{label}} <span class="ux-required-marker" v-if="required">*</span></label>
    <div class="ux-field-description" v-if="showDescription">{{description}}</div>
    <div class="buttons">
        <option-slot :option="option" v-slot="{plainValue}" v-for="option in selectableOptions">
            <ux-button :class="{active:selectionHash[plainValue]}" @click="toggle(plainValue)">
                {{option.title}}
                <ux-icon icon="fa-check" right />
            </ux-button>
        </option-slot>
    </div>
</template>
<script>
import InputMixin from './input-mixin';
import OptionSlot from './option.vue';


function isUndefined(entry) {
    return entry === undefined || typeof entry === 'undefined' || entry === null || String(entry) === 'null' || String(entry) === 'undefined';
}

//////////////////////////

export default {
    components: {
        OptionSlot,
    },
    props: {
        modelValue: {
            // type: [Object, Array],
        },
    },
    mixins: [InputMixin],
    created() {
        this.model = this.model;
    },
    methods: {
        select(val) {

            var self = this;
            if (self.multiValue) {
                self.model = [...self.model, val];
            } else {
                self.model = val;
            }

        },
        deselect(val) {
            var self = this;
            // var val = self.getValue(option);

            if (this.multiValue) {
                var sliced = this.model.slice();
                var index = sliced.indexOf(val)

                if (index != -1) {
                    sliced.splice(index, 1);
                    this.model = sliced
                }
            } else {
                if (self.getValue(this.model) == val) {
                    this.model = undefined;
                } else {
                    this.model = val;
                }
            }

        },
        toggle(plainValue) {

            if (this.selectionHash[plainValue]) {
                this.deselect(plainValue);
            } else {
                this.select(plainValue);
            }

            this.touch();
        },

        model: {
            get() {
                return this.cleanOutput(this.value);
            },
            set(val) {
                this.value = this.cleanInput(val);
                this.dispatch();
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
                    val = (val || []).map(function(i) {
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


                val = val.map(function(v) {
                    var valueKey = self.getValue(v);
                    return self.returnObject ? self.optionLookup[valueKey] : valueKey;
                })

            } else {
                var valueKey = self.getValue(val);
                val = self.returnObject ? self.optionLookup[valueKey] : valueKey;
            }

            return val;
        },
    },
    computed: {
        selectionHash() {

            var hash = {};

            if (this.model) {
                if (this.multiValue) {
                    this.model.forEach(function(val) {
                        hash[val] = true;
                    })
                } else {
                    hash[this.model] = true;
                }
            }

            console.log('change hash')
            return hash;
        },
        returnObject() {
            return this.type == 'reference';
        },
        summary() {
            return this.getLabel(this.optionLookup[this.model]) || 'Click to select';
        },

    }
}
</script>
<style lang="scss" scoped>
// :deep(.buttons) {
.buttons {
    display: flex;
    gap: 0.2em;
    flex-wrap: wrap;



    .ux-btn {

        margin: 0;

        .ux-icon {
            opacity: 0;
        }

        &:hover {
            .ux-icon {
                opacity: 0.5;
            }
        }

        &.active {
            background: $primary;
            color: #fff;

            .ux-icon {
                opacity: 1;
            }
        }
    }

}
</style>