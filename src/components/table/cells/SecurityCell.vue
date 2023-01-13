<template>
    <td class="table-security-cell" :class="security">
        <template v-if="canEdit">
            <ux-button size="sm" :loading="processing" @click.stop.prevent="clicked">
                 <ux-icon :icon="public ? `fa-lock-open` : `fa-lock`"/>
            </ux-button>
        </template>
         <template v-else>
            <ux-icon :icon="public ? `fa-lock-open` : `fa-lock`"/>
         </template>
       
    </td>
</template>
<script>
import TableCellMixin from './TableCellMixin.js';

export default {
    mixins:[TableCellMixin],
    methods:{
        async clicked() {
            const self = this;
            const id = self.$sdk.utils.id(self.row);
            const security = self.public ? 'secure': 'public';

            self.processing = true;
            self.$sdk.content.patch(id, {
                meta:{
                    security,
                }
            })
            .catch(function(err) {
                self.$sdk.error(err);
                self.processing = false;
            })
            .then(function(res) {
                self.v = security;
                self.processing = false;
                self.$sdk.notify(`Set security to ${security}`);
            })
        }
    },
    data() {
        return {
            processing:false,
            v:this.value,
        }
    },
    computed: {
        canEdit() {
            var user = this.user;
            return this.$sdk.access.canEditItem(user, this.row);
        },
        public() {
            return this.security === 'public';
        },
        security() {
            return this.v || 'secure';
        },
    }
}
</script>
<style scoped lang="scss">
td {
    text-align:center;

    &.public {
        opacity: 0.3;
    }

    &.true {
        
    }

    &.false {
        opacity:0.3;
    }
}
</style>