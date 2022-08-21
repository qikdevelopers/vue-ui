<template>
    <label class="file-drop" :class="{over}" @dragover.prevent.stop="fileover" @dragleave.prevent.stop="fileout" @drop.prevent.stop="filedrop">
        <input ref="file" :accept="accept" type="file" :multiple="multiple" @change="filesSelected($event.target.files)">
        <div class="file-drop-ux" @click="clicked">
            <slot>
                <ux-button>Select Files</ux-button>
            </slot>
        </div>
    </label>
    
</template>
<script>

////////////////////////////////////

export default {
    props:{
        multiple:{
            type:Boolean,
        },
        accept:{
            type:String,
        },
    },
    data() {
        return {
            over:false,
        }
    },
    methods: {
        clicked() {
            if(!this.multiple) {
                this.$refs.file.value = null;
            }
            this.$refs.file.click();
        },
        fileout(event) {
            this.over = true;

        },
        fileover(event) {
            this.over = true;
        },
        filedrop(e) {
            const self = this;
            if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length) {
                e.preventDefault();
                e.stopPropagation();
                self.filesSelected(e.dataTransfer.files);
            }
        },
        filesSelected(files) {
            console.log('FILES SELECTED', files);
            var mapped = [];

            for (var f in [...files]) {
                var file = files[f];
                mapped.push({
                    file,
                    data: {},
                    name: file.name,
                    size: file.size,
                    state: '',
                })
            }

            this.$emit('files', mapped);
        }
    }
}
</script>
<style lang="scss" scoped>
.file-drop {
    display: block;
    border:2px solid transparent;
    position:relative;

    // border: 2px solid green;
    // position:relative;
    // 

    &:before {
        content:'';
        position: absolute;
        left:0;
        top:0;
        right:0;
        bottom:0;
        width:100%;
        height: 100%;
        background: var(--primary);
        opacity: 0;
    }

    &.over {
        border: 2px dashed var(--primary);

        &:before {
            opacity: 0.2;
        }
    }

    input {
        // position:absolute;
        // left:0;
        // top:0;
        // right:0;
        // bottom:0;
        // width:100%;
        // height:100%;
        display: none;
    }
}
</style>