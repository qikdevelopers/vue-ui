<template>
    <div class="ux-image" :class="className" :style="style"> 
        <object v-if="svg" type="image/svg+xml" :data="src"></object>
        <img v-else :style="imageStyle" :src="src"/>
    </div>
</template>
<script>
export default {
    props: {
        item: {
            type: Object,
        },
        width: {
            type:Number,
        },
        height: {
            type:Number,
        },
        inline:{
            type:Boolean,
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
        className() {

            var classes = [];

            // if(this.height || this.width) {
            //     classes.push('has-dimensions')
            // }

            // if(this.height > this.width) {
            //     classes.push('portrait');
            // } else if(this.height < this.width) {
            //     classes.push('landscape');
            // } else {
            //     classes.push('square');
            // }

            if(this.portrait) {
                classes.push('img-portrait')
            }

            return classes.join(' ');
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
        portrait() {
            return this.crop ? (this.dimensionHeight > this.dimensionWidth) : (this.modelHeight > this.modelWidth);
        },
        imageWidth() {
            return parseInt(this.width);
        },
        imageHeight() {
            return parseInt(this.height);
        },
        modelWidth() {
            return parseInt(this.model?.width);
        },
        modelHeight() {
            return parseInt(this.model?.height);
        },
        id() {
            return this.$sdk.utils.id(this.model);
        },
        params() {

            var params = {};
            params.access_token = this.$sdk.auth.getCurrentToken();

            /////////////////////////////////


            if (this.imageWidth) {
                params.w = this.imageWidth ? this.imageWidth : null;
            }

            if (this.imageHeight) {
                params.h = this.imageHeight ? this.imageHeight : null;
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
            return this.$sdk.api.generateEndpointURL(`/${this.type}/${this.id}`, this.params, {file:true});
        },
        previewSrc() {

            var params = Object.assign({}, this.params);
            params.w = 50;
            delete params.h;
            return this.$sdk.api.generateEndpointURL(`/${this.type}/${this.id}`, params, {file:true});
        },
        imageStyle() {
            var style = {}

            if(!this.crop) {
                style['object-fit'] = 'contain';
            }

            if(this.inline) {
                style.maxWidth = '100%';
            } else {

                style.width = '100%';
                style.height = '100%';
                style.top = `0`;
                style.left = `0`;
                style.position = 'absolute';

                // var transform = '';

                // if(this.crop) {
                //     style.width = '100%';
                // } else {

                //     if(this.portrait) {
                //         style.height = '100%';
                //     } else {
                //         style.width = '100%';
                //     }
                //         style.left = `50%`;
                //         transform += ` translateX(-50%) `;                    
                // }

                
                // if (this.dimensionHeight && this.dimensionWidth) {
                //         transform += ` translateY(-50%) `;
                //         style.top = `50%`;
                //         style.position = 'absolute';
                // }

                // style.transform = transform;
            }

            return style;
        },
        dimensionWidth() {
            return this.imageWidth && this.imageHeight ? this.imageWidth : this.modelWidth;
        },
        dimensionHeight() {
            return this.imageWidth && this.imageHeight ? this.imageHeight : this.modelHeight;
        },
        style() {

            var style = {};

            
        

            if(this.inline) {
                style.display = 'inline-block';
                // style.minHeight = this.dimensionHeight ? `${this.dimensionHeight}px` : undefined;
                // style.minWidth = this.dimensionHeight ? `${this.dimensionWidth}px` : undefined;
            } else {
                if (this.dimensionHeight && this.dimensionWidth) {
                    style.height = 0;
                    style.overflow = 'hidden';
                    style.paddingBottom = `${(this.dimensionHeight / this.dimensionWidth) * 100}%`;
                    style.position = 'relative';
                }
            }

            var colors = this.model?.fileMeta?.colors?.colors;
            if (colors && colors.length) {
                style.backgroundColor = colors[0];
            }

            

            // ///////////////////////////////////////////

            // if (this.imageWidth && this.imageHeight) {
            //     dimensionWidth = this.imageWidth;
            //     dimensionHeight = this.imageHeight;
            //     // style.width = `${dimensionWidth}px`;
            //     // style.height = `${dimensionHeight}px`;
            // }
            ///////////////////////////////////////////

           


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
    // overflow: hidden;
    

    img {
        // max-height:100%;
        display: block;
        margin: 0 auto;
        padding: 0;
    }

    // &.has-dimensions {
    //     width: 100%;
    //     height: 0;
    // }
}
</style>