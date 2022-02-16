////////////////////////////////////////////

//Import the pieces we need
import { version } from './version.js';

var versionName = `qik vue ui ${version}`;
console.log(versionName)

////////////////////////////////////////////


import FlexColumn from './layout/flex-column.vue';
import FlexBody from './layout/flex-body.vue';
import FlexHeader from './layout/flex-header.vue';
import FlexFooter from './layout/flex-footer.vue';

////////////////////////////////////////////

export default {
    FlexColumn,
    FlexBody,
    FlexHeader,
    FlexFooter,
};