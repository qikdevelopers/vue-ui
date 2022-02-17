////////////////////////////////////////////

//Import the pieces we need
import { version } from './version';
const versionName = `qik vue ui ${version}`;

////////////////////////////////////////////

export { default as FlexColumn } from './layout/flex-column.vue';
export { default as FlexBody } from './layout/flex-body.vue';
export { default as FlexHeader } from './layout/flex-header.vue';
export { default as FlexFooter } from './layout/flex-footer.vue';
export { default as FlexCell } from './layout/flex-cell.vue';
export { default as FlexRow } from './layout/flex-row.vue';
export { default as Panel } from './layout/panel.vue';
export { default as PanelBody } from './layout/panel-body.vue';
export { default as PanelHeader } from './layout/panel-header.vue';
export { default as PanelFooter } from './layout/panel-footer.vue';

export { default as UXButton } from './ui/button.vue';
export { default as UXLink } from './ui/link.vue';
export { default as UXIcon } from './ui/icon.vue';
export { default as Spinner } from './ui/spinner.vue';

export { default as UXForm } from './form/form.vue';
export { default as UXFormField } from './form/field.vue';



////////////////////////////////////////////

//Create a default set of components
import FlexColumn from './layout/flex-column.vue';
import FlexBody from './layout/flex-body.vue';
import FlexHeader from './layout/flex-header.vue';
import FlexFooter from './layout/flex-footer.vue';
import FlexRow from './layout/flex-row.vue';
import FlexCell from './layout/flex-cell.vue';
import Panel from './layout/panel.vue';
import PanelBody from './layout/panel-body.vue';
import PanelHeader from './layout/panel-header.vue';
import PanelFooter from './layout/panel-footer.vue';

import UXButton from './ui/button.vue';
import UXIcon from './ui/icon.vue';
import UXLink from './ui/link.vue';
import Spinner from './ui/spinner.vue';

import UXForm from './form/form.vue';
import UXFormField from './form/field.vue';


const defaultComponents = {
    FlexColumn,
    FlexBody,
    FlexHeader,
    FlexFooter,
    FlexCell,
    FlexRow,
    Panel,
    PanelBody,
    PanelHeader,
    PanelFooter,
    UxForm: UXForm,
    UxFormField: UXFormField,
    UxIcon: UXIcon,
    UxButton: UXButton,
    UxLink: UXLink,
    Spinner,
}

////////////////////////////////////////////

export default {
    install(Vue) {
        console.log(versionName)
        for (const prop in defaultComponents) {
            const component = defaultComponents[prop];
            Vue.component(prop, component)
        }
    }
}