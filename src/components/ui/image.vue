<template>
    <div class="ux-image" :style="style">
        <img :src="src" />
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
    },
    data() {
        return {
            model: this.item,
        }
    },
    computed: {
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
            return this.$qik.utils.id(this.model);
        },
        params() {

            var params = {};
            params.access_token = this.$qik.auth.getCurrentToken();

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
                params.c = (this.imageWidth && this.imageHeight);
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
            return this.$qik.api.generateEndpointURL(`/${this.type}/${this.id}`, this.params);
        },
        previewSrc() {

            var params = Object.assign({}, this.params);
            params.w = 50;
            delete params.h;
            return this.$qik.api.generateEndpointURL(`/${this.type}/${this.id}`, params);
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

            style.backgroundImage = `url(${this.previewSrc})`

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
    background-color: rgba(#000, 0.1);
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