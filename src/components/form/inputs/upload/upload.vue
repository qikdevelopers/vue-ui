<template>
    <label class="ux-field-title" v-if="showLabel">{{label}} <span class="ux-required-marker" v-if="required">*</span></label>
    <div class="ux-field-description" v-if="showDescription">{{description}}</div>
    <!--     <template v-if="multiValue">
        <div class="items" v-if="model && model.length">
            <div v-for="(item, index) in model">
                {{item.title}}
                    <ux-button icon @click="remove(item)">
                        <ux-icon icon="fa-times" />
                    </ux-button>
               
            </div>
        </div>
    </template> -->
    <!-- <template v-else-if="model">
        <div class="items">
            <item :item="model">
                <template #actions>
                    <ux-button icon @click="clear">
                        <ux-icon icon="fa-times" />
                    </ux-button>
                </template>
            </item>
        </div>
    </template> -->
    <div class="files" v-if="files && files.length">
        <div class="file-item" :key="index" v-for="(file, index) in files">
            <flex-row>
                <flex-cell>
                    <strong>{{file.name}}</strong>
                    <div class="size">{{filesize(file.size)}}</div>
                    <progress-bar :value="file.progress" />
                </flex-cell>
                <flex-cell shrink>
                    <ux-button icon @click="remove(index)">
                        <ux-icon icon="fa-times" />
                    </ux-button>
                </flex-cell>
            </flex-row>
        </div>
    </div>
    <template v-if="multiValue">
        <template v-if="canAddValue">
            <file-drop :multiple="multiValue" @files="filesSelected">
                <ux-button>Select Files</ux-button>
            </file-drop>
        </template>
    </template>
    <template v-else>
        <file-drop @files="filesSelected">
            <ux-button>Select File</ux-button>
        </file-drop>
    </template>
    <!-- <label class="file-drop" v-if="canAddValue" @dragover.prevent.stop="fileover" @drop.prevent.stop="filedrop">
        <input ref="file" type="file" :multiple="multiValue" @change="filesSelected($event.target.files)">
    </label>
    <ux-button @click="selectFiles">Select Files</ux-button> -->
</template>
<script>
import InputMixin from '../input-mixin';
import FileDrop from './filedrop.vue';
// import _values from 'lodash/values';
// import _get from 'lodash/get';

////////////////////////////////////

// function uniq(array, field) {

//     var set = {};

//     for(var i in array) {
//         var item = array[i];
//         var pluckedValue = _get(item, field);
//         set[pluckedValue] = item;
//     }

//     return _values(set)
// }

////////////////////////////////////

export default {
    mixins: [InputMixin],
    components: {
        FileDrop,
    },
    props: {
        // modelValue: {
        //     type: [Object, Array],
        //     default () {
        //         return [];
        //     },
        // },
    },
    data() {
        return {
            files: [],
            bytesUploaded: 0,
            state: 'ready',
        }
    },
    methods: {
        filesize(size) {
            return this.$sdk.files.filesize(size);
        },
        remove(index) {

            var self = this;
            var fileItem = self.files[index];

            //Cancel the upload
            // fileItem.cancel();
            if (fileItem.cancelToken) {
                fileItem.cancelToken.cancel('Operation canceled by the user.');
            }

            self.files.splice(index, 1);
            console.log('Map to values', self.files)
            self.mapFilesToValues();
        },
        upload(fileItem) {
            var self = this;

            switch (fileItem.state) {
                case 'complete':
                case 'processing':
                    return;
                    break;
            }

            fileItem.state = 'processing';

            //Create a new form object
            var body = new FormData();
            var jsonData = {};

            /////////////////////////////////////////////

            //Add the JSON data 
            // var allScopeIDs = self.user ? Object.keys(self.user.permissions) : [];
            jsonData.attachment = true;
            jsonData.form = self.$sdk.utils.id(self.form);
            jsonData.fieldPath = self.fieldPath;

            // Append the JSON Data to the post body
            body.append('json', JSON.stringify(jsonData));
            body.append('file', fileItem.file, fileItem.name)


            var config = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                onUploadProgress: progressEvent => {

                    let percentCompleted = Math.floor((progressEvent.loaded * 100) / progressEvent.total);
                    fileItem.progress = percentCompleted;
                    fileItem.bytesUploaded = progressEvent.loaded;
                    fileItem.bytesTotal = progressEvent.total;

                    ///////////////////////////////////////////////////

                    //Update the bytes loaded from all the files in the array
                    self.bytesUploaded = self.files.reduce(function(set, file) {
                        if (file.state == 'complete') {
                            set += file.size || file.bytesTotal || 0;
                        } else {
                            set += file.bytesUploaded || 0;
                        }
                        return set;
                    }, 0)
                }
            }

            ///////////////////////////////////////////////////

            const CancelToken = self.$sdk.api.CancelToken;
            const source = CancelToken.source();
            config.cancelToken = source.token;
            fileItem.cancelToken = source;

            //Set headers to undefined content type
            config.headers = {
                'Content-Type': undefined
            }

            ///////////////////////////////////////////////////


            let uploadURL = `/file/upload`;
            if(self.$sdk.fileAPI) {

                // Upload binaries to the main API
                uploadURL = `${self.$sdk.fileAPI}${uploadURL}`;
            }

            return self.$sdk.api.post(uploadURL, body, config)
                .then(function(res) {
                    fileItem.state = 'complete';
                    fileItem.result = res.data;
                    // fileItem.attachmentID = res.data._id;
                    fileItem.cancelToken = null;
                    self.uploadNextFile();
                })
                .catch(function(err) {
                    fileItem.state = 'error';
                    fileItem.cancelToken = null;
                    self.uploadNextFile();
                });

        },

        uploadNextFile() {
            var self = this;
            self.state = 'uploading';

            ///////////////////////////////////////////

            var nextFile = self.files.find(function(fileItem) {
                switch (fileItem.state) {
                    case 'complete':
                    case 'error':
                        return;
                        break;
                    default:
                        return true;
                        break;
                }
            })

            ///////////////////////////////////////////

            if (nextFile) {
                self.upload(nextFile);
            } else {
                self.state = 'ready';
            }

            ///////////////////////////////////////////

            self.mapFilesToValues();
        },

        mapFilesToValues() {
            var self = this;

            if (self.multiValue) {
                self.model = self.files.map(function(item) {
                    return item.result;
                });
            } else {

                var first = self.files[0];
                if (!first) {
                    return self.model = undefined;
                }

                self.model = first.result;
            }

            console.log('NEW MODEL', self.model)
        },


        fileover(event) {

        },
        filedrop(event) {

        },
        filesSelected(files) {
            this.touch();

            console.log('FILES SELECTED', files);
            if(this.multiValue) {
                this.files = [...this.files, ...files];
            } else {
                this.files = files;
            }

            
            return this.uploadNextFile();

            // var mapped = [];

            // for (var f in [...files]) {
            //     var file = files[f];
            //     mapped.push({
            //         file,
            //         data: {},
            //         name: file.name,
            //         size: file.size,
            //         state: '',
            //     })
            // }

            // this.files = mapped; //uniq([...this.files, mapped], 'name');
            // // console.log('FILES YO', this.files)

            // 
        }
    },
    computed: {

    }
}
</script>
<style lang="scss" scoped>
.files {
    border: 1px solid rgba(#000, 0.1);

    .file-item {
        padding: 0.5em;
        border-bottom: 1px solid rgba(#000, 0.1);

        .size {
            font-size: 0.8em;
            opacity: 0.5;
        }
        
        .ux-progress {
            margin:0 !important;
        }

        &:last-child {
            border-bottom: none;
        }
    }
}
</style>