<template>
    <label class="ux-field-title" v-if="showLabel">{{label}} <span class="ux-required-marker" v-if="required">*</span></label>
    <div class="ux-field-description" v-if="showDescription">{{description}}</div>
    <template v-if="showList">
    <template v-if="multiValue">
        <draggable class="items" v-if="model && model.length" v-model="model">
            <template #item="{element, index}">
                <item :key="element._id" :item="element">
                    <template #actions>
                        <ux-button size="sm" v-if="$actions" icon @click.stop.prevent="$actions.open([model])">
                            <ux-icon icon="fa-ellipsis" />
                        </ux-button>
                        <ux-button size="sm" v-if="canEdit(element)" icon @click.stop.prevent="edit(element)">
                            <ux-icon icon="fa-pencil" />
                        </ux-button>
                        <ux-button size="sm" icon @click.stop.prevent="remove(element)">
                            <ux-icon icon="fa-times" />
                        </ux-button>
                    </template>
                </item>
           
            </template>
        </draggable>
    </template>
    <template v-else-if="model">
        <div class="items">
            <item :item="model">
                <template #actions>
                    <ux-button size="sm" v-if="$actions" icon @click.stop.prevent="$actions.open([model])">
                            <ux-icon icon="fa-ellipsis" />
                        </ux-button>
                    <ux-button size="sm" v-if="canEdit(model)" icon @click.stop.prevent="edit(model)">
                        <ux-icon icon="fa-pencil" />
                    </ux-button>
                    <ux-button size="sm" icon @click.stop.prevent="clear">
                        <ux-icon icon="fa-times" />
                    </ux-button>
                </template>
            </item>
        </div>
    </template>
</template>
    <flex-row gap v-if="canAdd">
        <flex-cell shrink>
            <ux-button @click="open">{{summary}}</ux-button>
        </flex-cell>
        <flex-cell shrink v-if="canCreate">
            <ux-button color="primary"  @click="create">
                Create <ux-icon right icon="fa-plus"/>
            </ux-button>
        </flex-cell>
        <flex-spacer />
    </flex-row>
</template>
<script>
import Item from '../../content/item.vue';
import InputMixin from './input-mixin';
import draggable from 'vuedraggable/src/vuedraggable'

function sortFunction(a, b) {

    let nameA = a.title.toUpperCase(); // ignore upper and lowercase
    let nameB = b.title.toUpperCase(); // ignore upper and lowercase


    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }

    // names must be equal
    return 0;
}


export default {
    components: {
        Item,
        draggable,
    },
    props: {
        modelValue: {
            type: [Object, Array],
        },
    },
    mixins: [InputMixin],
    async created() {
        this.glossary = await this.$sdk.content.glossary({ hash: true });

        this.value = this.cleanInput(this.value, true);
        this.dispatch();
   
    },
    data() {
        return {
            glossary:{},
        }
    },
    methods: {
        async create() {

            const self = this;

            if(!self.$sdk.global?.create) {
                return;
            }

            const item = await self.$sdk.global.create(self.field.referenceType);

            if(self.multiValue) {
                if(!self.model) {
                    self.model = []
                }
                
                self.model.push(item);
            } else {
                self.model = item;
            }
        },
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
        canEdit(item) {

            var user = this.user;
            if (!user) {
                return false;
            }

            return this.$sdk.access.canEditItem(user, item);

        },
        async edit(item) {
            var result = await this.$sdk.global.edit(item, true)
                .catch(function(err) {

                });

            for (var prop in result) {
                item[prop] = result[prop];
            }
        },
        async open() {
            var self = this;
            self.touch();


            var modalOptions = {
                field: self.field,
                model: self.multiValue ? self.value : [self.value].filter(Boolean),
                maximum: self.field.maximum,
                browserOptions: {
                    columns: self.field.columns,
                    select: self.field.select,
                    lockFilter: self.field.lockFilter,
                }
            }

            let referenceType = this.field.referenceType;

            if(!referenceType) {

                const choices = await self.$sdk.content.glossary();
                const sorted = choices.sort(sortFunction)
                const {key:selectedKey} = await self.$sdk.options(sorted, 'Select content type', 'What type of content are you wanting to select');
                referenceType = selectedKey;
            }

            self.$sdk.browse(referenceType, modalOptions)
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
        showList() {
            const self = this;

            if(self.field.list === false) {
                return false;
            }

            return true;
        },
        canAdd() {
            const self = this;
            if(!self.showList) {
                return true;
            }

            if(!self.maximum) {
                return true;
            }
            return self.multiValue ? self.model.length < self.maximum : !self.model;
        },
        canCreate() {

            if(this.field.create === false) {
                return;
            }

            if(!this.$sdk.global?.create) {
                return;
            }

            var basicType = this.field.referenceType;
            var definedType = basicType;

            var match = this.glossary[this.field.referenceType];
            if(match) {
                basicType = match.definesType || match.key;
                definedType = match.key || match.definesType;
            }

            // Ensure the user is authenticated and they have permission to create this kind of thing
            return this.user && this.$sdk.access.canCreate(this.user, definedType, basicType);


        },
        summary() {
            if (this.multiValue) {


                if (this.model && this.model.length) {


                    var summary = `Click to select`;
                    var length = this.model.length;

                    if(!this.showList) {
                        if(length === 1) {
                            return this.model[0].title || this.model[0].name || this.model[0].firstName; 
                        } else {
                            return `${length} selected`;
                        }
                    } 




                    var difference = Math.max(length - 3, 0);
                    if(length) {
                        summary = `Adjust selection (${length})`
                    }

                    
                    // var cropped = this.model.slice(0, 3);
                    // summary = cropped.map(function(item) {
                    //     return item.firstName || item.name || item.title;
                    // }).join(', ');

                    // if (difference) {
                    //     summary = `${summary}... +${difference} more...`
                    // }


                    // if(!summary) {
                    //     return `Click to select`;
                    // }

                    return summary;

                } else {
                    return `Click to select`;
                }
            } else {
                if (this.model) {
                    if(this.showList) {
                        return 'Click to select';
                    } else {
                        return this.model.title || this.model.name || this.model.firstName;
                    }
                    
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
        border: 1px solid var(--primary);
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