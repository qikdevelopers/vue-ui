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
export { default as FlexSpacer } from './layout/flex-spacer.vue';
export { default as Panel } from './layout/panel.vue';
export { default as PanelBody } from './layout/panel-body.vue';
export { default as PanelHeader } from './layout/panel-header.vue';
export { default as PanelFooter } from './layout/panel-footer.vue';


export { default as UXTabset } from './layout/tabset.vue';
export { default as UXTab } from './layout/tab.vue';


export { default as UXTable } from './table/Table.vue';



export { default as UXButton } from './ui/button.vue';
export { default as UXCheckbox } from './ui/checkbox.vue';
export { default as UXSwitch } from './ui/switch.vue';
export { default as UXLink } from './ui/link.vue';
export { default as UXIcon } from './ui/icon.vue';
export { default as UXMenu } from './ui/menu.vue';
export { default as UXMenuList } from './ui/menulist.vue';
export { default as UXImage } from './ui/image.vue';
export { default as Spinner } from './ui/spinner.vue';
export { default as ProgressBar } from './ui/progressbar.vue';
export { default as UXList } from './ui/list.vue';
export { default as UXListItem } from './ui/list-item.vue';

export { default as UXForm } from './form/form.vue';
export { default as UXSubmissionForm } from './form/submissionform.vue';
export { default as UXFormField } from './form/field.vue';
export { default as Search } from './form/inputs/search.vue';
export { default as NativeSelect } from './form/inputs/select.vue';
export { default as CodeEditor } from './form/inputs/code-editor.vue';


export { default as UXRender } from './content/render/render.vue';
export { default as UXRenderField } from './content/render/field.vue';

////////////////////////////////////////////

export { default as ContentBrowser } from './content/browser.vue';

////////////////////////////////////////////

//Mixins
export { default as RememberScrollMixin } from './mixins/RememberScroll.js';

////////////////////////////////////////////

export { default as ModalMixin } from './modal/ModalMixin.js';
export { default as UxModal } from './modal/Modal.vue';
export { default as UxConfirmModal } from './modal/ConfirmModal.vue';
export { default as UxOptionsModal } from './modal/OptionsModal.vue';
export { default as UxPromptModal } from './modal/PromptModal.vue';
export { default as UxContentModal } from './modal/ContentModal.vue';

//Services
export { default as Device } from './services/device.js';
export { default as Selection } from './services/selection.js';

//Upload UI
export { default as FileDrop } from './form/inputs/upload/filedrop.vue';


////////////////////////////////////////////

//Create a default set of components
import FlexColumn from './layout/flex-column.vue';
import FlexBody from './layout/flex-body.vue';
import FlexHeader from './layout/flex-header.vue';
import FlexFooter from './layout/flex-footer.vue';
import FlexRow from './layout/flex-row.vue';
import FlexCell from './layout/flex-cell.vue';
import FlexSpacer from './layout/flex-spacer.vue';
import Panel from './layout/panel.vue';
import PanelBody from './layout/panel-body.vue';
import PanelHeader from './layout/panel-header.vue';
import PanelFooter from './layout/panel-footer.vue';

import UXTable from './table/Table.vue';


import UXTabset from './layout/tabset.vue';
import UXTab from './layout/tab.vue';

import UXButton from './ui/button.vue';
import UXSwitch from './ui/switch.vue';
import UXCheckbox from './ui/checkbox.vue';
import UXIcon from './ui/icon.vue';
import UXMenu from './ui/menu.vue';
import UXMenuList from './ui/menulist.vue';
import UXImage from './ui/image.vue';
import UXLink from './ui/link.vue';
import UXList from './ui/list.vue';
import UXListItem from './ui/list-item.vue';






import Spinner from './ui/spinner.vue';
import ProgressBar from './ui/progressbar.vue';

import UXForm from './form/form.vue';
import UXSubmissionForm from './form/submissionform.vue';

import UXFormField from './form/field.vue';

import UXRender from './content/render/render.vue';
import UXRenderField from './content/render/field.vue';


//Services

//Modals
import UxModal from './modal/Modal.vue';
import UxConfirmModal from './modal/ConfirmModal.vue';
import UxOptionsModal from './modal/OptionsModal.vue';
import UxPromptModal from './modal/PromptModal.vue';
import UxContentModal from './modal/ContentModal.vue';

const defaultComponents = {
    FlexColumn,
    FlexBody,
    FlexHeader,
    FlexFooter,
    FlexCell,
    FlexSpacer,
    FlexRow,
    UxPanel:Panel,
    UxPanelBody:PanelBody,
    UxPanelHeader:PanelHeader,
    UxPanelFooter:PanelFooter,
    UxList: UXList,
    UxListItem: UXListItem,
    UxForm: UXForm,
    UxSubmissionForm:UXSubmissionForm,
    UxFormField: UXFormField,
    UxSubmissionForm: UXSubmissionForm,
    UxRender: UXRender,
    UxRenderField: UXRenderField,
    UxIcon: UXIcon,
    UxMenu: UXMenu,
    UxMenuList: UXMenuList,
    UxImage: UXImage,
    UxButton: UXButton,
    UxCheckbox: UXCheckbox,
    UxSwitch: UXSwitch,
    UxLink: UXLink,
    UxTabset: UXTabset,
    UxTab: UXTab,
    Spinner,
    ProgressBar,
    UxModal,
}


////////////////////////////////////////////

import { reactive, watchEffect } from 'vue'

const QikUI = {
    install(Vue, sdk) {
        console.log(versionName)



        //////////////////////////////

        //Create an array for our modal stack
        sdk.modals = reactive([]);

        //Base modal function
        sdk.modal = function(modal) {

            return new Promise(function(resolve, reject) {
                modal.id = sdk.modals.length;
                modal.resolve = resolve;
                modal.reject = reject;

                //Add our modal to the stack
                sdk.modals.splice(modal.id, 0, modal);
            });

        }

        //Quick function for asking the user to select an option
        sdk.browse = function(type, options) {
            options = options || {}
            options.type = type;
            options.model = options.model || [];

            return sdk.modal({
                component: UxContentModal,
                options,
            })

        }

        //Quick function for asking the user to select an option
        sdk.options = function(choices, title, description) {

            return sdk.modal({
                component: UxOptionsModal,
                options: {
                    title,
                    description,
                    choices,
                }
            })

        }

        //Prompt the user to input data into a form
        sdk.prompt = function(fields, options) {
            options = options || {};
            options.model = options.model || {}


            //Append the fields
            options.fields = fields;

            return sdk.modal({
                component: UxPromptModal,
                options,
            })

        }

        //Prompt the user to confirm an action
        sdk.confirm = function(title, options) {
            options = options || {};

            options.title = title;

            return sdk.modal({
                component: UxConfirmModal,
                options,
            })
        }

        sdk.closeModal = function(id) {
            var modal = sdk.modals.find(function(modal) {
                return modal.id == id;
            })

            var index = sdk.modals.indexOf(modal);
            sdk.modals.splice(index, 1);
        }

        //////////////////////////////

        //Add all of the UI Library components
        for (const prop in defaultComponents) {
            const component = defaultComponents[prop];
            Vue.component(prop, component)
        }
    }
}

export {QikUI}
