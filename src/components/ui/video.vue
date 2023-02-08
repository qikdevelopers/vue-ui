<template>
    <div class="ux-video" :class="className" :style="style">
        <div class="ux-video-embed-upload">
            <video :width="actualWidth" :height="actualHeight" :controls="controls">
              <source :src="src" :type="mimetype">
              Your browser does not support the video tag.
            </video>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        item: {
            type: [Object, String],
        },
        width: {
            type: [Number, String],
        },
        height: {
            type: [Number, String],
        },
        controls:{
            type:Boolean,
            default:true,
        }
    },
    data() {
        return {
            model: this.item,
        }
    },

    computed: {
        mediaType() {
            return this.model.mediaIntegrationType || 'upload';
        },
        mimetype() {
            return this.model.fileMime || 'video/mp4';
        },
        actualWidth() {
            return (parseInt(this.width) || this.modelWidth || 1920)
        },
        actualHeight() {
            return (parseInt(this.height) || this.modelHeight || 1080)
        },
        className() {
            var classes = [];

            if (this.portrait) {
                classes.push('video-portrait')
            }

            classes.push(`video-type-${this.mediaType}`)

            return classes.join(' ');
        },
        portrait() {
            return this.actualHeight > this.actualWidth;
        },
        modelWidth() {
            return parseInt(this.model?.width || 0);
        },
        modelHeight() {
            return parseInt(this.model?.height || 0);
        },
        id() {
            return this.$sdk.utils.id(this.model);
        },
        params() {
            var params = {};
            params.access_token = this.$sdk.auth.getCurrentToken();
            return params;
        },
        src() {
            return this.$sdk.api.generateEndpointURL(`/video/${this.id}`, this.params, { file: true });
        },
        thumbnailSrc() {
            var params = Object.assign({}, this.params);
            params.w = this.actualWidth;
            params.h = this.actualHeight;
            delete params.h;
            return this.$sdk.api.generateEndpointURL(`/image/${this.id}`, params, { file: true });
        },
        // imageStyle() {
        //     var style = {}

        //     if (!this.crop) {
        //         style['object-fit'] = 'contain';
        //     }

        //     if (this.inline) {
        //         style.maxWidth = '100%';
        //     } else {

        //         style.width = '100%';
        //         style.height = '100%';
        //         style.top = `0`;
        //         style.left = `0`;
        //         style.position = 'absolute';

        //         // var transform = '';

        //         // if(this.crop) {
        //         //     style.width = '100%';
        //         // } else {

        //         //     if(this.portrait) {
        //         //         style.height = '100%';
        //         //     } else {
        //         //         style.width = '100%';
        //         //     }
        //         //         style.left = `50%`;
        //         //         transform += ` translateX(-50%) `;                    
        //         // }


        //         // if (this.dimensionHeight && this.dimensionWidth) {
        //         //         transform += ` translateY(-50%) `;
        //         //         style.top = `50%`;
        //         //         style.position = 'absolute';
        //         // }

        //         // style.transform = transform;
        //     }

        //     return style;
        // },
        // dimensionWidth() {
        //     return this.imageWidth && this.imageHeight ? this.imageWidth : this.modelWidth;
        // },
        // dimensionHeight() {
        //     return this.imageWidth && this.imageHeight ? this.imageHeight : this.modelHeight;
        // },
        style() {

            var style = {};

            // if (this.inline) {
            //     style.display = 'inline-block';
            //     // style.minHeight = this.dimensionHeight ? `${this.dimensionHeight}px` : undefined;
            //     // style.minWidth = this.dimensionHeight ? `${this.dimensionWidth}px` : undefined;
            // } else {
            //     if (this.dimensionHeight && this.dimensionWidth) {
            //         style.height = 0;
            //         style.overflow = 'hidden';
            //         style.paddingBottom = `${(this.dimensionHeight / this.dimensionWidth) * 100}%`;
            //         style.position = 'relative';
            //     }
            // }

            // var colors = this.model?.fileMeta?.colors?.colors;
            // if (colors && colors.length) {
            //     style.backgroundColor = colors[0];
            // }



            // ///////////////////////////////////////////

            // if (this.imageWidth && this.imageHeight) {
            //     dimensionWidth = this.imageWidth;
            //     dimensionHeight = this.imageHeight;
            //     // style.width = `${dimensionWidth}px`;
            //     // style.height = `${dimensionHeight}px`;
            // }
            ///////////////////////////////////////////




            // ///////////////////////////////////////////

            // if (this.isSvg) {
            //     // No preview image
            // } else {
            //     if (this.preview) {
            //         style.backgroundImage = `url(${this.previewSrc})`
            //     }
            // }

            ///////////////////////////////////////////

            return style;
        }
    },
}
</script>
<style lang="scss" scoped>
.ux-video {
    display: block;

    video {
        display:block;
        width:100%;
        height:auto;
    }
   
    // // background-color: rgba(#000, 0.1);
    // // overflow: hidden;


    // img {
    //     // max-height:100%;
    //     display: block;
    //     margin: 0 auto;
    //     padding: 0;
    // }

    // &.has-dimensions {
    //     width: 100%;
    //     height: 0;
    // }
}
</style>