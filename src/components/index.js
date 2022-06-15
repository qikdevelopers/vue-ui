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



export { default as UXButton } from './ui/button.vue';
export { default as UXCheckbox } from './ui/checkbox.vue';
export { default as UXSwitch } from './ui/switch.vue';
export { default as UXLink } from './ui/link.vue';
export { default as UXIcon } from './ui/icon.vue';
export { default as UXMenu } from './ui/menu.vue';
export { default as UXImage } from './ui/image.vue';
export { default as Spinner } from './ui/spinner.vue';
export { default as ProgressBar } from './ui/progressbar.vue';
export { default as UXList } from './ui/list.vue';
export { default as UXListItem } from './ui/list-item.vue';

export { default as UXForm } from './form/form.vue';
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
export { default as QikModal } from './modal/Modal.vue';
export { default as QikConfirmModal } from './modal/ConfirmModal.vue';
export { default as QikOptionsModal } from './modal/OptionsModal.vue';
export { default as QikPromptModal } from './modal/PromptModal.vue';
export { default as QikContentModal } from './modal/ContentModal.vue';

//Services
export { default as Device } from './services/device.js';
export { default as Selection } from './services/selection.js';

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


import UXTabset from './layout/tabset.vue';
import UXTab from './layout/tab.vue';

import UXButton from './ui/button.vue';
import UXSwitch from './ui/switch.vue';
import UXCheckbox from './ui/checkbox.vue';
import UXIcon from './ui/icon.vue';
import UXMenu from './ui/menu.vue';
import UXImage from './ui/image.vue';
import UXLink from './ui/link.vue';
import UXList from './ui/list.vue';
import UXListItem from './ui/list-item.vue';






import Spinner from './ui/spinner.vue';
import ProgressBar from './ui/progressbar.vue';

import UXForm from './form/form.vue';
import UXFormField from './form/field.vue';

import UXRender from './content/render/render.vue';
import UXRenderField from './content/render/field.vue';


//Services

//Modals
import QikModal from './modal/Modal.vue';
import QikConfirmModal from './modal/ConfirmModal.vue';
import QikOptionsModal from './modal/OptionsModal.vue';
import QikPromptModal from './modal/PromptModal.vue';
import QikContentModal from './modal/ContentModal.vue';

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
    UxFormField: UXFormField,
    UxRender: UXRender,
    UxRenderField: UXRenderField,
    UxIcon: UXIcon,
    UxMenu: UXMenu,
    UxImage: UXImage,
    UxButton: UXButton,
    UxCheckbox: UXCheckbox,
    UxSwitch: UXSwitch,
    UxLink: UXLink,
    UxTabset: UXTabset,
    UxTab: UXTab,
    Spinner,
    ProgressBar,
    QikModal,
}


////////////////////////////////////////////

import { reactive, watchEffect } from 'vue'

const QikUI = {
    install(Vue, qik) {
        console.log(versionName)



        //////////////////////////////

        //Create an array for our modal stack
        qik.modals = reactive([]);

        //Base modal function
        qik.modal = function(modal) {

            return new Promise(function(resolve, reject) {
                modal.id = qik.modals.length;
                modal.resolve = resolve;
                modal.reject = reject;

                //Add our modal to the stack
                qik.modals.splice(modal.id, 0, modal);
            });

        }

        //Quick function for asking the user to select an option
        qik.browse = function(type, options) {
            options = options || {}
            options.type = type;
            options.model = options.model || [];

            return qik.modal({
                component: QikContentModal,
                options,
            })

        }

        //Quick function for asking the user to select an option
        qik.options = function(choices, title, description) {

            return qik.modal({
                component: QikOptionsModal,
                options: {
                    title,
                    description,
                    choices,
                }
            })

        }

        //Prompt the user to input data into a form
        qik.prompt = function(fields, options) {
            options = options || {};
            options.model = options.model || {}


            //Append the fields
            options.fields = fields;

            return qik.modal({
                component: QikPromptModal,
                options,
            })

        }

        //Prompt the user to confirm an action
        qik.confirm = function(title, options) {
            options = options || {};

            options.title = title;

            return qik.modal({
                component: QikConfirmModal,
                options,
            })
        }

        qik.closeModal = function(id) {
            var modal = qik.modals.find(function(modal) {
                return modal.id == id;
            })

            var index = qik.modals.indexOf(modal);
            qik.modals.splice(index, 1);
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