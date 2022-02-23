<template>
    <label class="ux-field-title" v-if="showLabel">{{label}}</label>
    <div class="ux-field-description" v-if="showDescription">{{description}}</div>
    <template v-if="multiValue">
        <div class="items" v-if="model && model.length">
            <item :key="item._id" :item="item" v-for="(item, index) in model">
                <template #actions>
                    <ux-button icon @click="remove(item)">
                        <ux-icon icon="fa-times" />
                    </ux-button>
                </template>
            </item>
        </div>
    </template>
    <template v-else-if="model">
        <div class="items">
            <item :item="model">
                <template #actions>
                    <ux-button icon @click="clear">
                        <ux-icon icon="fa-times" />
                    </ux-button>
                </template>
            </item>
        </div>
    </template>
    <ux-button @click="open">{{summary}}</ux-button>
</template>
<script>
import Item from '../../content/item.vue';
import InputMixin from './input-mixin';

export default {
    components: {
        Item,
    },
    props: {
        modelValue: {
            type: [Object, Array],
        },
    },
    mixins: [InputMixin],
    created() {
        this.value = this.cleanInput(this.value, true);
        this.dispatch();
    },
    methods: {
        clear() {
            this.model = undefined;
            this.touch();
        },
        // remove(index) {
        //     if (this.maximum == 1) {
        //         this.model = null
        //     } else {
        //         this.model.splice(index, 1);
        //     }
        // },
        open() {
            var self = this;
            self.touch();

            self.$qik.browse(this.field.referenceType, {
                    field: self.field,
                    model: self.multiValue ? self.value : [self.value].filter(Boolean),
                    maximum: self.field.maximum,
                })
                .then(function(newSelection) {
                    self.model = self.multiValue ? newSelection : newSelection[0];
                })
                .catch(function(err) {
                    console.log('Error', err);
                })
        },
        cleanInput(val) {

            var self = this;
            if (self.multiValue) {
                if (!val) {
                    val = [];
                }

                if (!Array.isArray(val)) {
                    val = [];
                }

                /////////////////////////////////

                if (self.maximum) {
                    if (val.length > self.maximum) {
                        val.length = self.maximum;
                    }
                }
            } else {
                if (Array.isArray(val)) {
                    val = val[0]
                }
            }

            return val;
        },
    },
    computed: {
        summary() {
            if (this.multiValue) {
                if (this.model && this.model.length) {
                    return this.model.map(function(item) {
                        return item.title;
                    }).join(', ');

                } else {
                    return `Click to select`;
                }
            } else {
                if (this.model) {
                    return 'Click to select';
                } else {
                    return `Click to select`;
                }
            }
        },
    }
}
</script>
<style lang="scss" scoped>
.ux-text-row {
    margin-bottom: 0.5em;
}

input {
    border-radius: 0.1em;
    padding: 0.5em;
    box-sizing: border-box;
    background: rgba(#000, 0.05);
    border: 1px solid rgba(#000, 0.1);
    font-size: inherit;
    appearance: none;
    line-height: 1;
    height: 2.5em;

    &:focus {
        background: none;
        border: 1px solid $primary;
        outline: none;
    }
}

.ux-text-row .ux-btn {
    margin-left: 0.25em;
}

.ux-text-input-multiple {
    width: 100%;
}

.ux-text-input-single {
    width: calc(100% - 0.5em);
    margin: 0 0.5em 0 0;
}

.items {
    border: 1px solid rgba(#000, 0.1);
    border-radius: 0.3em;
    overflow: hidden;
    margin-bottom: 0.5em;

    .content-item {

        border: none;
        border-bottom: 1px solid rgba(#000, 0.1);

    }
}
</style>