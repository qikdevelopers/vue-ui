<template>
    <div class="ux-image" :style="style">
        <template v-if="svg">
        <object type="image/svg+xml" :data="src"></object>
    </template>
        <img v-else :src="src" :style="aspectStyle" />
    </div>
</template>
<script>
export default {
    props: {
        item: {
            type: Object,
        },
        width: {
            type: [Number, String]
        },
        height: {
            type: [Number, String]
        },
        quality: {
            type: Number,
        },
        contain:{
            type:Boolean,
            default:true,
        },
        preview:{
            type:Boolean,
            default:false,
        },
        crop: {
            type: Boolean,
        },
        format: {
            type: String,
        },
        upscale: {
            type: Boolean,
            default: true,
        },
        type: {
            type: String,
            default: 'image',
        },
        svg:{
            type:Boolean,
        }
    },
    data() {
        return {
            model: this.item,
        }
    },
    
    computed: {
        aspectStyle() {
            return {
                'aspect-ratio':`${this.imageHeight/this.imageWidth}`,
                'object-fit':'contain',
            }
        },
        isSvg() {
            if(this.svg) {
                return true;
            }

            switch(this.item?.fileMime) {
                case 'image/svg+xml':
                case 'image/svg':
                    return true;
                break
            }
        },
        defaultWidth() {
            return;
        },
        defaultHeight() {
            return;
        },
        imageWidth() {
            return parseInt(this.width);
        },
        imageHeight() {
            return parseInt(this.height);
        },
        id() {
            return this.$sdk.utils.id(this.model);
        },
        params() {

            var params = {};
            params.access_token = this.$sdk.auth.getCurrentToken();

            /////////////////////////////////


            if (this.imageWidth) {
                params.w = this.imageWidth ? this.imageWidth : this.defaultWidth;
            }

            if (this.imageHeight) {
                params.h = this.imageHeight ? this.imageHeight : this.defaultHeight;
            }

            if (this.crop) {
                params.c = true;
            } else {
                if(!this.contain) {
                    params.c = (this.imageWidth && this.imageHeight);
                }
            }

            if (this.quality) {
                params.q = parseInt(this.quality);
            }

            if (this.upscale) {
                params.u = true;
            }

            if (this.format) {
                params.f = this.format;
            }

            return params;
        },
        src() {
            return this.$sdk.api.generateEndpointURL(`/${this.type}/${this.id}`, this.params);
        },
        previewSrc() {

            var params = Object.assign({}, this.params);
            params.w = 50;
            delete params.h;
            return this.$sdk.api.generateEndpointURL(`/${this.type}/${this.id}`, params);
        },
        style() {

            var style = {};

            var colors = this.model?.fileMeta?.colors?.colors;
            if (colors && colors.length) {
                style.backgroundColor = colors[0];
            }

            var dimensionWidth = this.model.width;
            var dimensionHeight = this.model.height;

            ///////////////////////////////////////////

            if (this.width && this.height) {
                dimensionWidth = this.width;
                dimensionHeight = this.height;
            }
            ///////////////////////////////////////////

            if (dimensionHeight && dimensionWidth) {
                style.height = 0;
                style.paddingBottom = `${(dimensionHeight / dimensionWidth) * 100}%`;
            }

            ///////////////////////////////////////////

            if(this.isSvg) {
                // No preview image
            } else {
                if(this.preview) {
                    style.backgroundImage = `url(${this.previewSrc})`
                }
            }

            ///////////////////////////////////////////

            return style;
        }
    },
}
</script>
<style lang="scss" scoped>
.ux-image {
    display: block;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    // background-color: rgba(#000, 0.1);
    width: 100%;
    height: 0;
    overflow: hidden;

    img {
        width: 100%;
        display: block;
        height: auto;
        margin: 0;
        padding: 0;
    }
}
</style>