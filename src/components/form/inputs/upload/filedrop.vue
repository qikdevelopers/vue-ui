<template>
    <label class="file-drop" @dragover.prevent.stop="fileover" @drop.prevent.stop="filedrop">
        <input ref="file" type="file" :multiple="multiple" @change="filesSelected($event.target.files)">
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
        }
    },
    methods: {
        clicked() {
            if(!this.multiple) {
                this.$refs.file.value = null;
            }
            this.$refs.file.click();
        },
        fileover(event) {

        },
        filedrop(event) {

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
    // display: block;
    // border: 2px solid green;
    // position:relative;

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