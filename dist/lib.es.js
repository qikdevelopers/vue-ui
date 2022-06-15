import './index.css';
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a2, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a2, prop, b[prop]);
    }
  return a2;
};
var __spreadProps = (a2, b) => __defProps(a2, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
import { openBlock, createElementBlock, renderSlot, resolveComponent, createBlock, withCtx, createVNode, Fragment, renderList, normalizeClass, toDisplayString, withDirectives, resolveDynamicComponent, vShow, pushScopeId, popScopeId, createElementVNode, normalizeStyle, createCommentVNode, Teleport, createTextVNode, vModelSelect, withKeys, withModifiers, vModelText, TransitionGroup, defineComponent, h, nextTick, vModelDynamic, vModelCheckbox, mergeProps, toHandlers, reactive, watch } from "vue";
import ace, { version as version$2 } from "ace-builds";
import { VAceEditor } from "vue3-ace-editor";
import { EventDispatcher } from "@qikdev/sdk";
const version$1 = "0.1.7";
var flexColumn_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props2) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props2) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$15 = {};
const _hoisted_1$T = { class: "flex-column" };
function _sfc_render$15(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$T, [
    renderSlot(_ctx.$slots, "default", {}, void 0, true)
  ]);
}
var FlexColumn = /* @__PURE__ */ _export_sfc(_sfc_main$15, [["render", _sfc_render$15], ["__scopeId", "data-v-203ea86f"]]);
var flexBody_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$14 = {};
const _hoisted_1$S = { class: "flex-column-body" };
function _sfc_render$14(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$S, [
    renderSlot(_ctx.$slots, "default", {}, void 0, true)
  ]);
}
var FlexBody = /* @__PURE__ */ _export_sfc(_sfc_main$14, [["render", _sfc_render$14], ["__scopeId", "data-v-64850355"]]);
var flexHeader_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$13 = {};
const _hoisted_1$R = { class: "flex-column-header" };
function _sfc_render$13(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$R, [
    renderSlot(_ctx.$slots, "default", {}, void 0, true)
  ]);
}
var FlexHeader = /* @__PURE__ */ _export_sfc(_sfc_main$13, [["render", _sfc_render$13], ["__scopeId", "data-v-10b28f00"]]);
var flexFooter_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$12 = {};
const _hoisted_1$Q = { class: "flex-column-footer" };
function _sfc_render$12(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$Q, [
    renderSlot(_ctx.$slots, "default", {}, void 0, true)
  ]);
}
var FlexFooter = /* @__PURE__ */ _export_sfc(_sfc_main$12, [["render", _sfc_render$12], ["__scopeId", "data-v-68216a72"]]);
var flexCell_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$11 = {};
const _hoisted_1$P = { class: "flex-cell" };
function _sfc_render$11(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$P, [
    renderSlot(_ctx.$slots, "default", {}, void 0, true)
  ]);
}
var FlexCell = /* @__PURE__ */ _export_sfc(_sfc_main$11, [["render", _sfc_render$11], ["__scopeId", "data-v-644bb279"]]);
var flexRow_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$10 = {};
const _hoisted_1$O = { class: "flex-row" };
function _sfc_render$10(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$O, [
    renderSlot(_ctx.$slots, "default", {}, void 0, true)
  ]);
}
var FlexRow = /* @__PURE__ */ _export_sfc(_sfc_main$10, [["render", _sfc_render$10], ["__scopeId", "data-v-5b76ad1f"]]);
var flexSpacer_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$$ = {};
const _hoisted_1$N = { class: "flex-spacer" };
function _sfc_render$$(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$N);
}
var FlexSpacer = /* @__PURE__ */ _export_sfc(_sfc_main$$, [["render", _sfc_render$$], ["__scopeId", "data-v-35b15579"]]);
var panel_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$_ = {};
const _hoisted_1$M = { class: "panel" };
function _sfc_render$_(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$M, [
    renderSlot(_ctx.$slots, "default", {}, void 0, true)
  ]);
}
var Panel = /* @__PURE__ */ _export_sfc(_sfc_main$_, [["render", _sfc_render$_], ["__scopeId", "data-v-50ae77fc"]]);
var panelBody_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$Z = {};
const _hoisted_1$L = { class: "panel-body" };
function _sfc_render$Z(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$L, [
    renderSlot(_ctx.$slots, "default", {}, void 0, true)
  ]);
}
var PanelBody = /* @__PURE__ */ _export_sfc(_sfc_main$Z, [["render", _sfc_render$Z], ["__scopeId", "data-v-c82dca76"]]);
var panelHeader_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$Y = {};
const _hoisted_1$K = { class: "panel-header" };
function _sfc_render$Y(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$K, [
    renderSlot(_ctx.$slots, "default", {}, void 0, true)
  ]);
}
var PanelHeader = /* @__PURE__ */ _export_sfc(_sfc_main$Y, [["render", _sfc_render$Y], ["__scopeId", "data-v-13bf11da"]]);
var panelFooter_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$X = {};
const _hoisted_1$J = { class: "panel-footer" };
function _sfc_render$X(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$J, [
    renderSlot(_ctx.$slots, "default", {}, void 0, true)
  ]);
}
var PanelFooter = /* @__PURE__ */ _export_sfc(_sfc_main$X, [["render", _sfc_render$X], ["__scopeId", "data-v-b4f4786a"]]);
var tabset_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$W = {
  data() {
    return {
      activeIndex: 0
    };
  },
  methods: {
    select(i2) {
      console.log("SELECT", this.activeIndex);
      this.activeIndex = i2;
    }
  },
  computed: {
    tabs() {
      var slotChildren = this.$slots.default();
      console.log("SLOT CHILDREN", slotChildren);
      return slotChildren;
    }
  }
};
const _hoisted_1$I = ["onClick"];
function _sfc_render$W(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_flex_row = resolveComponent("flex-row");
  const _component_flex_header = resolveComponent("flex-header");
  const _component_flex_column = resolveComponent("flex-column");
  return openBlock(), createBlock(_component_flex_column, null, {
    default: withCtx(() => [
      createVNode(_component_flex_header, { class: "tabset-menu" }, {
        default: withCtx(() => [
          createVNode(_component_flex_row, null, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList($options.tabs, (tab, index2) => {
                return openBlock(), createElementBlock("a", {
                  class: normalizeClass({ active: index2 === $data.activeIndex }),
                  onClick: ($event) => $options.select(index2)
                }, toDisplayString(tab.props.heading), 11, _hoisted_1$I);
              }), 256))
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      createVNode(_component_flex_column, null, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList($options.tabs, (tab, index2) => {
            return withDirectives((openBlock(), createBlock(_component_flex_column, { key: index2 }, {
              default: withCtx(() => [
                (openBlock(), createBlock(resolveDynamicComponent(tab)))
              ]),
              _: 2
            }, 1024)), [
              [vShow, index2 === $data.activeIndex]
            ]);
          }), 128))
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
var UXTabset = /* @__PURE__ */ _export_sfc(_sfc_main$W, [["render", _sfc_render$W], ["__scopeId", "data-v-b5715b66"]]);
const _sfc_main$V = {
  props: {
    heading: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isActive: false
    };
  },
  computed: {
    active: {
      get() {
        return this.isActive;
      },
      set(a2) {
        this.isActive = a2;
      }
    }
  }
};
function _sfc_render$V(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_flex_column = resolveComponent("flex-column");
  return openBlock(), createBlock(_component_flex_column, null, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  });
}
var UXTab = /* @__PURE__ */ _export_sfc(_sfc_main$V, [["render", _sfc_render$V]]);
var spinner_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$U = {
  props: {
    large: {
      type: Boolean
    }
  }
};
const _withScopeId$4 = (n2) => (pushScopeId("data-v-3284debd"), n2 = n2(), popScopeId(), n2);
const _hoisted_1$H = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ createElementVNode("i", { class: "fa fa-spin fa-spinner" }, null, -1));
const _hoisted_2$x = [
  _hoisted_1$H
];
function _sfc_render$U(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["ux-spinner", { large: $props.large }])
  }, _hoisted_2$x, 2);
}
var Spinner = /* @__PURE__ */ _export_sfc(_sfc_main$U, [["render", _sfc_render$U], ["__scopeId", "data-v-3284debd"]]);
var button_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$T = {
  components: {
    Spinner
  },
  props: {
    to: {
      type: [Object, String]
    },
    icon: {
      type: Boolean
    },
    color: {
      type: String,
      default: "default"
    },
    bgColor: {
      type: String
    },
    fgColor: {
      type: String
    },
    tag: {
      type: String
    },
    href: {
      type: String
    },
    target: {
      type: String
    },
    loading: {
      type: Boolean
    },
    disabled: {
      type: Boolean
    },
    block: {
      type: Boolean
    },
    size: {
      type: String,
      default: "md"
    }
  },
  computed: {
    style() {
      var object = {};
      if (this.bgColor) {
        object["backgroundColor"] = this.bgColor;
      }
      if (this.fgColor) {
        object["color"] = this.fgColor;
      }
      return object;
    },
    classes() {
      var array = [];
      array.push(`ux-btn-${this.size}`);
      if (this.block) {
        array.push(`ux-btn-block`);
      }
      if (this.loading) {
        array.push(`ux-btn-loading`);
      }
      if (this.icon) {
        array.push(`ux-btn-icon`);
      }
      if (this.color == "default") {
        array.push("ux-btn-color-default");
      }
      if (this.color == "primary") {
        array.push("ux-btn-color-primary");
      }
      if (this.disabled) {
        array.push(`ux-btn-disabled`);
      }
      return array;
    },
    element() {
      switch (this.tag) {
        case "span":
          return this.tag;
        case "submit":
          return "button";
        default:
          if (this.to || this.href) {
            return "ux-link";
          }
          return this.tag || "button";
      }
    }
  }
};
const _hoisted_1$G = { class: "ux-btn-text" };
function _sfc_render$T(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_spinner = resolveComponent("spinner");
  return openBlock(), createBlock(resolveDynamicComponent($options.element), {
    loading: $props.loading,
    to: $props.to,
    href: $props.href,
    target: $props.target,
    style: normalizeStyle($options.style),
    class: normalizeClass([$options.classes, "ux-btn"]),
    disabled: $props.disabled
  }, {
    default: withCtx(() => [
      $props.loading ? (openBlock(), createBlock(_component_spinner, { key: 0 })) : createCommentVNode("", true),
      createElementVNode("span", _hoisted_1$G, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ])
    ]),
    _: 3
  }, 8, ["loading", "to", "href", "target", "style", "class", "disabled"]);
}
var UXButton = /* @__PURE__ */ _export_sfc(_sfc_main$T, [["render", _sfc_render$T], ["__scopeId", "data-v-17674eca"]]);
var checkbox_vue_vue_type_style_index_0_scoped_true_lang$1 = "";
const _sfc_main$S = {
  props: {
    value: {
      type: Boolean,
      default() {
        return false;
      }
    }
  },
  computed: {
    classes() {
      var array = [];
      if (this.value) {
        array.push(`ux-checkbox-true`);
      } else {
        array.push(`ux-checkbox-false`);
      }
      return array;
    }
  }
};
function _sfc_render$S(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ux_icon = resolveComponent("ux-icon");
  return openBlock(), createElementBlock("button", {
    class: normalizeClass(["ux-checkbox", $options.classes])
  }, [
    createVNode(_component_ux_icon, {
      class: "icon",
      icon: "fa-check"
    })
  ], 2);
}
var UXCheckbox = /* @__PURE__ */ _export_sfc(_sfc_main$S, [["render", _sfc_render$S], ["__scopeId", "data-v-7dd035b9"]]);
var switch_vue_vue_type_style_index_0_scoped_true_lang$1 = "";
const _sfc_main$R = {
  props: {
    value: {
      type: Boolean,
      default() {
        return false;
      }
    }
  },
  computed: {
    classes() {
      var array = [];
      if (this.value) {
        array.push(`ux-switch-true`);
      } else {
        array.push(`ux-switch-false`);
      }
      return array;
    }
  }
};
function _sfc_render$R(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("a", {
    class: normalizeClass(["ux-switch", $options.classes])
  }, null, 2);
}
var UXSwitch = /* @__PURE__ */ _export_sfc(_sfc_main$R, [["render", _sfc_render$R], ["__scopeId", "data-v-7c22b478"]]);
var link_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$Q = {
  props: {
    to: {
      type: [Object, String]
    },
    href: {
      type: String
    },
    target: {
      type: String
    },
    disabled: {
      type: Boolean
    }
  },
  methods: {
    clicked(event) {
      var self2 = this;
      if (self2.buildMode) {
        self2.$qik.app.to(self2.to);
      }
    }
  },
  computed: {
    buildMode() {
      return !!this.$qik && this.$qik.app && this.$qik.app.builder;
    },
    class() {
      var array = [];
      if (this.disabled) {
        array.push("disabled");
      }
      if (this.href || this.to) {
        array.push("haslink");
      }
      return array;
    },
    element() {
      if (this.to) {
        return `router-link`;
      } else {
        return "a";
      }
    }
  }
};
function _sfc_render$Q(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(resolveDynamicComponent($options.element), {
    onClick: $options.clicked,
    to: $props.to,
    href: $props.href,
    target: $props.target,
    class: normalizeClass([$options.class, "ux-link"])
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ]),
    _: 3
  }, 8, ["onClick", "to", "href", "target", "class"]);
}
var UXLink = /* @__PURE__ */ _export_sfc(_sfc_main$Q, [["render", _sfc_render$Q], ["__scopeId", "data-v-c92454ee"]]);
var icon_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$P = {
  props: {
    icon: {
      type: [Object, String]
    },
    spin: {
      type: Boolean
    },
    left: {
      type: Boolean
    },
    right: {
      type: Boolean
    }
  },
  computed: {
    classes() {
      var array = [];
      array.push(this.icon);
      if (this.spin) {
        array.push(`fa-spin`);
      }
      if (this.left) {
        array.push("ux-icon-left");
      }
      if (this.right) {
        array.push("ux-icon-right");
      }
      return array;
    },
    element() {
      return "i";
    }
  }
};
function _sfc_render$P(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(resolveDynamicComponent($options.element), {
    class: normalizeClass(["ux-icon fa", $options.classes])
  }, null, 8, ["class"]);
}
var UXIcon = /* @__PURE__ */ _export_sfc(_sfc_main$P, [["render", _sfc_render$P], ["__scopeId", "data-v-1764a3d0"]]);
var UXMenuService = {
  cache: {}
};
var menu_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$O = {
  props: {
    group: {
      type: String
    },
    right: {
      type: Boolean,
      default: false
    },
    bottom: {
      type: Boolean,
      default: false
    },
    stop: {
      type: Boolean,
      default: false
    },
    closeOnClick: {
      type: Boolean,
      default() {
        return true;
      }
    },
    modelValue: {
      type: Boolean,
      default() {
        return false;
      }
    }
  },
  data() {
    return {
      outerStyle: {},
      innerStyle: {},
      isExpanded: this.modelValue,
      triggerEvent: null,
      refMenu: null,
      mounted: false
    };
  },
  watch: {
    modelValue(m) {
      this.expanded = m;
    }
  },
  mounted() {
    this.refMenu = this.$refs.menu;
    this.mounted = true;
  },
  beforeUnmount() {
    this.removeListeners();
    this.refMenu = null;
    this.mounted = false;
    if (UXMenuService.cache[this.group] === this) {
      UXMenuService.cache[this.group] = null;
    }
  },
  methods: {
    removeListeners() {
      document.removeEventListener("click", this.globalClick);
      if (this.refMenu) {
        this.refMenu.removeEventListener("click", this.immediateClick);
      }
    },
    addEventListeners() {
      document.addEventListener("click", this.globalClick);
      if (this.refMenu) {
        this.refMenu.addEventListener("click", this.immediateClick);
      }
    },
    immediateClick(event) {
      if (this.expanded) {
        if (this.closeOnClick) {
          event.stopImmediatePropagation();
          this.expanded = false;
        }
      }
    },
    globalClick(event) {
      if (this.triggerEvent === event) {
        return;
      }
      var parentElement = this.$refs.menu;
      var childElement = event.srcElement;
      if (parentElement && parentElement.contains(childElement)) {
        if (this.closeOnClick) {
          this.expanded = false;
        }
      } else {
        this.expanded = false;
      }
    },
    position() {
      const rect = this.$el.getBoundingClientRect();
      this.outerStyle.left = `${rect.left + window.scrollX}px`;
      this.outerStyle.top = `${rect.bottom + window.scrollY}px`;
      if (this.right) {
        this.innerStyle.right = `-${rect.width}px`;
      }
      if (this.bottom) {
        this.innerStyle.bottom = `${rect.height}px`;
      }
      var zIndex = this.getMaxZIndex();
      this.outerStyle.zIndex = zIndex;
    },
    getMaxZIndex() {
      return Math.max(...Array.from(document.querySelectorAll("body *"), (el) => parseFloat(window.getComputedStyle(el).zIndex)).filter((zIndex) => !Number.isNaN(zIndex)), 0);
    },
    close() {
      this.expanded = false;
    }
  },
  computed: {
    expanded: {
      get() {
        return this.isExpanded;
      },
      set(v) {
        var previousActivatedEntity;
        if (this.group) {
          previousActivatedEntity = UXMenuService.cache[this.group];
        }
        if (this.isExpanded != v) {
          this.isExpanded = v;
          if (v) {
            this.position();
            this.addEventListeners();
            UXMenuService.cache[this.group] = this;
            if (previousActivatedEntity && previousActivatedEntity != this) {
              previousActivatedEntity.expanded = false;
            }
          } else {
            this.removeListeners();
          }
          this.$emit("update:modelValue", v);
        }
      }
    },
    on() {
      var self2 = this;
      return {
        click(event) {
          if (self2.stop) {
            event.stopImmediatePropagation();
          }
          self2.triggerEvent = event;
          self2.expanded = !self2.expanded;
        }
      };
    }
  }
};
function _sfc_render$O(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["ux-menu", { right: $props.right }])
  }, [
    createElementVNode("span", null, [
      renderSlot(_ctx.$slots, "activator", { on: $options.on }, void 0, true)
    ]),
    (openBlock(), createBlock(Teleport, { to: "body" }, [
      $data.isExpanded ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: "ux-menu-outer",
        style: normalizeStyle($data.outerStyle)
      }, [
        createElementVNode("div", {
          class: "ux-menu-panel",
          ref: "menu",
          style: normalizeStyle($data.innerStyle)
        }, [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ], 4)
      ], 4)) : createCommentVNode("", true)
    ]))
  ], 2);
}
var UXMenu = /* @__PURE__ */ _export_sfc(_sfc_main$O, [["render", _sfc_render$O], ["__scopeId", "data-v-3d55731c"]]);
var image_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$N = {
  props: {
    item: {
      type: Object
    },
    width: {
      type: [Number, String]
    },
    height: {
      type: [Number, String]
    },
    quality: {
      type: Number
    },
    crop: {
      type: Boolean
    },
    format: {
      type: String
    },
    upscale: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: "image"
    }
  },
  data() {
    return {
      model: this.item
    };
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
      if (this.imageWidth) {
        params.w = this.imageWidth ? this.imageWidth : this.defaultWidth;
      }
      if (this.imageHeight) {
        params.h = this.imageHeight ? this.imageHeight : this.defaultHeight;
      }
      if (this.crop) {
        params.c = true;
      } else {
        params.c = this.imageWidth && this.imageHeight;
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
      var _a, _b, _c;
      var style = {};
      var colors = (_c = (_b = (_a = this.model) == null ? void 0 : _a.fileMeta) == null ? void 0 : _b.colors) == null ? void 0 : _c.colors;
      if (colors && colors.length) {
        style.backgroundColor = colors[0];
      }
      var dimensionWidth = this.model.width;
      var dimensionHeight = this.model.height;
      if (this.width && this.height) {
        dimensionWidth = this.width;
        dimensionHeight = this.height;
      }
      if (dimensionHeight && dimensionWidth) {
        style.height = 0;
        style.paddingBottom = `${dimensionHeight / dimensionWidth * 100}%`;
      }
      style.backgroundImage = `url(${this.previewSrc})`;
      return style;
    }
  }
};
const _hoisted_1$F = ["src"];
function _sfc_render$N(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: "ux-image",
    style: normalizeStyle($options.style)
  }, [
    createElementVNode("img", { src: $options.src }, null, 8, _hoisted_1$F)
  ], 4);
}
var UXImage = /* @__PURE__ */ _export_sfc(_sfc_main$N, [["render", _sfc_render$N], ["__scopeId", "data-v-542486de"]]);
var progressbar_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$M = {
  props: {
    value: {
      type: Number
    }
  },
  computed: {
    classes() {
      var array = [];
      array.push(this.icon);
      if (this.spin) {
        array.push(`fa-spin`);
      }
      if (this.left) {
        array.push("ux-icon-left");
      }
      if (this.right) {
        array.push("ux-icon-right");
      }
      return array;
    },
    percent() {
      return this.value;
    },
    barStyle() {
      return {
        width: `${this.percent}%`
      };
    },
    element() {
      return "i";
    }
  }
};
const _withScopeId$3 = (n2) => (pushScopeId("data-v-6581fb86"), n2 = n2(), popScopeId(), n2);
const _hoisted_1$E = { class: "ux-progress" };
const _hoisted_2$w = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createElementVNode("div", { class: "ux-progress-bg" }, null, -1));
function _sfc_render$M(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$E, [
    _hoisted_2$w,
    createElementVNode("div", {
      class: "ux-progress-fg",
      style: normalizeStyle($options.barStyle)
    }, null, 4)
  ]);
}
var ProgressBar = /* @__PURE__ */ _export_sfc(_sfc_main$M, [["render", _sfc_render$M], ["__scopeId", "data-v-6581fb86"]]);
var list_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$L = {};
const _hoisted_1$D = { class: "ux-list" };
function _sfc_render$L(_ctx, _cache) {
  return openBlock(), createElementBlock("ul", _hoisted_1$D, [
    renderSlot(_ctx.$slots, "default", {}, void 0, true)
  ]);
}
var UXList = /* @__PURE__ */ _export_sfc(_sfc_main$L, [["render", _sfc_render$L], ["__scopeId", "data-v-98e1e4e2"]]);
var listItem_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$K = {};
const _hoisted_1$C = { class: "ux-list-item" };
function _sfc_render$K(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$C, [
    renderSlot(_ctx.$slots, "default", {}, void 0, true)
  ]);
}
var UXListItem = /* @__PURE__ */ _export_sfc(_sfc_main$K, [["render", _sfc_render$K], ["__scopeId", "data-v-0e73c260"]]);
function isUndefined$6(v, type) {
  return v === void 0 || v === null || type == "date" && v.toString && v.toString() === "Invalid Date";
}
var InputMixin = {
  props: {
    field: {
      type: Object,
      default() {
        return {};
      }
    },
    parentModel: {
      type: Object
    }
  },
  data() {
    return {
      value: this.modelValue
    };
  },
  watch: {
    modelValue(val, old) {
      var cleanedValue = this.cleanInput(val);
      var cleanedModel = this.cleanInput(this.model);
      if (JSON.stringify(cleanedValue) != JSON.stringify(cleanedModel)) {
        this.model = cleanedValue;
      }
    }
  },
  mounted() {
    this.checkAutofocus();
  },
  computed: {
    optionLookup() {
      var self2 = this;
      return self2.options.reduce(function(set, option2) {
        const key = self2.getValue(option2);
        set[key] = option2;
        return set;
      }, {});
    },
    selectableOptions() {
      return this.options;
    },
    required() {
      return this.minimum;
    },
    model: {
      get() {
        var cleaned = this.cleanOutput(this.value);
        return cleaned;
      },
      set(val) {
        this.value = this.cleanInput(val);
        this.checkAutofocus();
        this.dispatch();
      }
    },
    options() {
      var self2 = this;
      return (this.field.options || []).reduce(function(set, option2) {
        if (!option2) {
          return set;
        }
        const value = self2.getValue(option2);
        const title = option2.title || option2.name || option2.label || value;
        var output = {
          title,
          value,
          source: option2
        };
        if (self2.field.type == "reference") {
          output._id = value;
        }
        set.push(output);
        return set;
      }, []);
    },
    prefix() {
      return this.field.suffix;
    },
    suffix() {
      return this.field.suffix;
    },
    type() {
      return this.field.type || "string";
    },
    key() {
      return this.field.key;
    },
    isGroup() {
      return this.type === "group";
    },
    asObject() {
      return this.isGroup && !!this.field.asObject;
    },
    layoutGroup() {
      return this.isGroup && !this.field.asObject;
    },
    canAddValue() {
      if (this.singleValue) {
        return;
      }
      return this.maximum === 0 || this.numValues < this.maximum;
    },
    canRemoveValue() {
      return this.numValues > this.minimum;
    },
    singleValue() {
      if (this.asObject) {
        var isSingle = this.minimum === 1 && this.maximum === 1;
        return isSingle;
      } else {
        return this.maximum === 1;
      }
    },
    multiValue() {
      return !this.singleValue;
    },
    label() {
      return this.field.title;
    },
    description() {
      return this.field.description;
    },
    placeholder() {
      return this.field.placeholder || this.field.hint;
    },
    addLabel() {
      if (this.numValues) {
        return `Add another ${this.label}`;
      } else {
        return `Add ${this.label}`;
      }
    },
    removeLabel() {
      return `Remove`;
    },
    numValues() {
      if (this.singleValue) {
        return 1;
      }
      return (this.value || []).length || 0;
    },
    showLabel() {
      return this.field.title;
    },
    showDescription() {
      return this.description;
    },
    fields() {
      var subFields = this.field.fields;
      if (subFields && subFields.length) {
        return subFields;
      }
    },
    minimum() {
      if (this.layoutGroup) {
        return 1;
      }
      var int2 = parseInt(this.field.minimum || 0);
      if (isNaN(int2)) {
        int2 = 0;
      }
      int2 = Math.max(int2, 0);
      int2 = this.maximum ? Math.min(int2, this.maximum) : int2;
      return parseInt(int2);
    },
    maximum() {
      if (this.layoutGroup) {
        return 1;
      }
      var int2 = parseInt(this.field.maximum || 0);
      if (isNaN(int2)) {
        int2 = 0;
      }
      int2 = Math.max(int2, 0);
      return parseInt(int2);
    },
    ask() {
      var int2 = parseInt(this.field.ask);
      int2 = Math.max(int2, this.minimum);
      if (this.maximum) {
        int2 = Math.min(int2, this.maximum);
      }
      return int2;
    }
  },
  methods: {
    cleanTextInput(val, type, instance) {
      switch (type) {
        case "url":
          val = instance.$qik.utils.parseURL(val);
          break;
        case "key":
          val = instance.$qik.utils.machineName(val);
          break;
        case "integer":
          val = parseInt(String(val).replace(/[^0-9-]/g, ""));
          if (isNaN(val)) {
            val = void 0;
          }
          break;
        case "number":
        case "decimal":
        case "float":
          val = Number(String(val).replace(/[^0-9.-]/g, ""));
          if (isNaN(val)) {
            val = void 0;
          }
          break;
      }
      return val;
    },
    checkAutofocus() {
      if (this.field.autofocus) {
        if (this.value) {
          return;
        }
        this.$nextTick(function() {
          this.refocus();
        });
      }
    },
    getValue(option2) {
      if (!option2) {
        return;
      }
      var value = option2._id || option2.value;
      if (!value && option2.title && !this.returnObject) {
        value = option2.title;
      }
      return value || option2;
    },
    getLabel(option2) {
      if (!option2) {
        return;
      }
      var label = option2.title || option2.name || option2.label;
      if (typeof label == "object") {
        return "(no title)";
      } else {
        return label;
      }
    },
    touch() {
      this.$emit("touched");
    },
    getNewDefaultEntry() {
      return void 0;
    },
    add() {
      if (!this.canAddValue) {
        return;
      }
      var defaultEntry = this.cleanInputValue(this.getNewDefaultEntry());
      if (!this.value || !Array.isArray(this.value)) {
        this.value = [];
      }
      this.value.push(defaultEntry);
      this.dispatch();
      this.$nextTick(function() {
        this.refocus();
      });
      this.touch();
    },
    remove(entry) {
      var index2 = this.model.indexOf(entry);
      this.value.splice(index2, 1);
      this.dispatch();
      this.touch();
    },
    dispatch() {
      this.$emit("update:modelValue", this.value);
    },
    cleanInputValue(val) {
      return val;
    },
    cleanOutputValue(val) {
      return val;
    },
    cleanOutput(val) {
      var self2 = this;
      if (isUndefined$6(val, self2.field.type)) {
        if (self2.multiValue) {
          val = [];
        } else {
          val = void 0;
        }
      } else {
        if (self2.multiValue) {
          if (!Array.isArray(val)) {
            val = [];
          }
          val.forEach(function(v, i2) {
            val[i2] = self2.cleanOutputValue(v);
          });
        } else {
          val = self2.cleanOutputValue(val);
        }
      }
      return val;
    },
    cleanInput(val) {
      var self2 = this;
      if (self2.multiValue) {
        if (!val) {
          val = [];
        }
        if (!Array.isArray(val)) {
          val = [val];
        }
        if (self2.maximum) {
          if (val.length > self2.maximum) {
            val.length = self2.maximum;
          }
        }
        while (val.length < self2.minimum) {
          val.push(self2.cleanInputValue(self2.getNewDefaultEntry()));
        }
        val = val.map(function(v) {
          var d = self2.cleanInputValue(v);
          return d;
        });
      } else {
        if (val) {
          val = self2.cleanInputValue(val);
        }
      }
      return val;
    },
    refocus() {
      var elements = this.$refs.input;
      if (!elements) {
        return;
      }
      var input;
      if (Array.isArray(elements)) {
        input = elements[elements.length - 1];
      } else {
        input = elements;
      }
      if (input) {
        input.focus();
      }
    }
  }
};
var select_vue_vue_type_style_index_0_scoped_true_lang = "";
function isUndefined$5(entry) {
  return entry === void 0 || typeof entry === "undefined" || entry === null || String(entry) === "null" || String(entry) === "undefined";
}
const _sfc_main$J = {
  props: {
    title: {
      type: String
    },
    modelValue: {}
  },
  mixins: [InputMixin],
  created() {
    this.model = this.model;
  },
  methods: {
    cleanOutput(val) {
      var self2 = this;
      if (isUndefined$5(val)) {
        if (self2.multiValue) {
          val = [];
        } else {
          val = void 0;
        }
      } else {
        if (self2.multiValue) {
          val = (val || []).filter(Boolean).map(function(i2) {
            return self2.getValue(i2);
          });
        } else {
          val = self2.getValue(val);
        }
      }
      return val;
    },
    cleanInput(val) {
      var self2 = this;
      if (self2.multiValue) {
        if (!val) {
          val = [];
        }
        if (!Array.isArray(val)) {
          val = [val];
        }
        if (self2.maximum) {
          if (val.length > self2.maximum) {
            val.length = self2.maximum;
          }
        }
        val = val.filter(Boolean).map(function(v) {
          var valueKey2 = self2.getValue(v);
          return self2.returnObject ? self2.optionLookup[valueKey2] : valueKey2;
        });
      } else {
        var valueKey = self2.getValue(val);
        val = self2.returnObject ? self2.optionLookup[valueKey] : valueKey;
      }
      return val;
    }
  },
  computed: {
    returnObject() {
      return this.type == "reference";
    },
    classes() {
      var array = [];
      if (this.multiValue) {
        array.push("multiple");
      } else {
        array.push("single");
      }
      return array;
    },
    optionLookup() {
      var self2 = this;
      return self2.options.reduce(function(set, option2) {
        const key = self2.getValue(option2);
        set[key] = option2;
        return set;
      }, {});
    },
    summary() {
      return this.model ? this.getLabel(this.optionLookup[this.model]) : this.title || "Click to select";
    },
    selectableOptions() {
      return this.options;
    }
  }
};
const _hoisted_1$B = {
  key: 0,
  class: "ux-field-title"
};
const _hoisted_2$v = {
  key: 0,
  class: "ux-required-marker"
};
const _hoisted_3$s = {
  key: 1,
  class: "ux-field-description"
};
const _hoisted_4$q = {
  key: 2,
  class: "ui-select-button"
};
const _hoisted_5$j = ["multiple"];
const _hoisted_6$f = {
  key: 0,
  value: ""
};
const _hoisted_7$c = ["value"];
function _sfc_render$J(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ux_button = resolveComponent("ux-button");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["native-select", $options.classes])
  }, [
    _ctx.showLabel ? (openBlock(), createElementBlock("label", _hoisted_1$B, [
      createTextVNode(toDisplayString(_ctx.label) + " ", 1),
      _ctx.required ? (openBlock(), createElementBlock("span", _hoisted_2$v, "*")) : createCommentVNode("", true)
    ])) : createCommentVNode("", true),
    _ctx.showDescription ? (openBlock(), createElementBlock("div", _hoisted_3$s, toDisplayString(_ctx.description), 1)) : createCommentVNode("", true),
    _ctx.singleValue ? (openBlock(), createElementBlock("div", _hoisted_4$q, [
      renderSlot(_ctx.$slots, "default", {}, () => [
        createVNode(_component_ux_button, { tag: "div" }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString($options.summary), 1)
          ]),
          _: 1
        })
      ], true)
    ])) : createCommentVNode("", true),
    withDirectives(createElementVNode("select", {
      onFocus: _cache[0] || (_cache[0] = (...args) => _ctx.touch && _ctx.touch(...args)),
      multiple: _ctx.multiValue,
      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.model = $event)
    }, [
      _ctx.singleValue && !_ctx.minimum ? (openBlock(), createElementBlock("option", _hoisted_6$f, "None")) : createCommentVNode("", true),
      (openBlock(true), createElementBlock(Fragment, null, renderList($options.selectableOptions, (option2) => {
        return openBlock(), createElementBlock("option", {
          value: option2.value
        }, toDisplayString(option2.title), 9, _hoisted_7$c);
      }), 256))
    ], 40, _hoisted_5$j), [
      [vModelSelect, _ctx.model]
    ])
  ], 2);
}
var NativeSelect = /* @__PURE__ */ _export_sfc(_sfc_main$J, [["render", _sfc_render$J], ["__scopeId", "data-v-6d808434"]]);
var phoneNumberInput_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$I = {
  props: {
    modelValue: {
      type: [Object, Array]
    }
  },
  components: {
    NativeSelect
  },
  mixins: [InputMixin],
  async created() {
    var countries = await this.$qik.system.countries();
    var mapped = countries.reduce(function(set, country) {
      if (!country.countryCallingCodes || !country.countryCallingCodes.length) {
        return set;
      }
      var title = `${country.name} (${country.countryCallingCodes.join(", ")})`;
      var matchingKey = title;
      if (set.values[matchingKey]) {
        return set;
      }
      set.values[matchingKey] = true;
      set.lookup[country.alpha2] = country;
      set.value.push({
        title: `${title} - ${country.emoji}`,
        value: country.alpha2,
        emoji: country.emoji
      });
      return set;
    }, {
      value: [],
      values: {},
      lookup: {}
    });
    this.countryCodes = mapped.value;
    this.lookup = mapped.lookup;
  },
  data() {
    return {
      countryCodes: [],
      lookup: {}
    };
  },
  computed: {
    actualPlaceholder() {
      return `+61 000 000 000`;
    },
    countryCodeField() {
      return {
        minimum: 0,
        maximum: 1,
        type: "string",
        options: this.countryCodes
      };
    },
    defaultCountryCode() {
      var userCountryCode = this.user ? this.user.countryCode : "";
      var orgCountryCode = this.user && this.user.organisation ? this.user.organisation.countryCode : "";
      return userCountryCode || orgCountryCode;
    }
  },
  methods: {
    getNewDefaultEntry() {
      return {
        label: "",
        countryCode: this.defaultCountryCode,
        number: ""
      };
    }
  }
};
const _withScopeId$2 = (n2) => (pushScopeId("data-v-856e04c2"), n2 = n2(), popScopeId(), n2);
const _hoisted_1$A = {
  key: 0,
  class: "ux-field-title"
};
const _hoisted_2$u = {
  key: 0,
  class: "ux-required-marker"
};
const _hoisted_3$r = {
  key: 1,
  class: "ux-field-description"
};
const _hoisted_4$p = { key: 2 };
const _hoisted_5$i = /* @__PURE__ */ createTextVNode(" Country Code ");
const _hoisted_6$e = { key: 0 };
const _hoisted_7$b = { key: 1 };
const _hoisted_8$7 = { class: "ux-text-wrap" };
const _hoisted_9$5 = ["placeholder", "onUpdate:modelValue"];
const _hoisted_10$4 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createElementVNode("option", { value: "" }, "None", -1));
const _hoisted_11$4 = ["value"];
const _hoisted_12$3 = { class: "ux-text-wrap" };
const _hoisted_13$3 = ["placeholder"];
function _sfc_render$I(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_native_select = resolveComponent("native-select");
  const _component_flex_cell = resolveComponent("flex-cell");
  const _component_ux_icon = resolveComponent("ux-icon");
  const _component_ux_button = resolveComponent("ux-button");
  const _component_flex_row = resolveComponent("flex-row");
  return openBlock(), createElementBlock(Fragment, null, [
    _ctx.showLabel ? (openBlock(), createElementBlock("label", _hoisted_1$A, [
      createTextVNode(toDisplayString(_ctx.label) + " ", 1),
      _ctx.required ? (openBlock(), createElementBlock("span", _hoisted_2$u, "*")) : createCommentVNode("", true)
    ])) : createCommentVNode("", true),
    _ctx.showDescription ? (openBlock(), createElementBlock("div", _hoisted_3$r, toDisplayString(_ctx.description), 1)) : createCommentVNode("", true),
    _ctx.multiValue ? (openBlock(), createElementBlock("div", _hoisted_4$p, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.model, (entry, index2) => {
        return openBlock(), createBlock(_component_flex_row, {
          wrap: "",
          class: "ux-text-row",
          key: index2
        }, {
          default: withCtx(() => [
            createVNode(_component_flex_cell, { shrink: "" }, {
              default: withCtx(() => [
                createVNode(_component_native_select, {
                  modelValue: entry.countryCode,
                  "onUpdate:modelValue": ($event) => entry.countryCode = $event,
                  field: $options.countryCodeField
                }, {
                  default: withCtx(() => [
                    !entry.countryCode ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                      _hoisted_5$i
                    ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                      $data.lookup[entry.countryCode] ? (openBlock(), createElementBlock("div", _hoisted_6$e, toDisplayString($data.lookup[entry.countryCode].emoji) + " - " + toDisplayString($data.lookup[entry.countryCode].alpha2), 1)) : (openBlock(), createElementBlock("div", _hoisted_7$b, "Loading"))
                    ], 64))
                  ]),
                  _: 2
                }, 1032, ["modelValue", "onUpdate:modelValue", "field"])
              ]),
              _: 2
            }, 1024),
            createVNode(_component_flex_cell, null, {
              default: withCtx(() => [
                createElementVNode("div", _hoisted_8$7, [
                  withDirectives(createElementVNode("input", {
                    class: "ux-field-focus ux-text-input-multiple",
                    placeholder: $options.actualPlaceholder,
                    onFocus: _cache[0] || (_cache[0] = (...args) => _ctx.touch && _ctx.touch(...args)),
                    ref_for: true,
                    ref: "input",
                    onKeydown: _cache[1] || (_cache[1] = withKeys(withModifiers(($event) => _ctx.add(), ["stop", "prevent"]), ["enter"])),
                    "onUpdate:modelValue": ($event) => entry.number = $event
                  }, null, 40, _hoisted_9$5), [
                    [vModelText, entry.number]
                  ])
                ])
              ]),
              _: 2
            }, 1024),
            createVNode(_component_flex_cell, {
              shrink: "",
              vcenter: ""
            }, {
              default: withCtx(() => [
                _ctx.canRemoveValue ? (openBlock(), createBlock(_component_ux_button, {
                  key: 0,
                  tag: "a",
                  icon: "",
                  onClick: ($event) => _ctx.remove(entry)
                }, {
                  default: withCtx(() => [
                    createVNode(_component_ux_icon, { icon: "fa-times" })
                  ]),
                  _: 2
                }, 1032, ["onClick"])) : createCommentVNode("", true)
              ]),
              _: 2
            }, 1024)
          ]),
          _: 2
        }, 1024);
      }), 128)),
      _ctx.canAddValue ? (openBlock(), createBlock(_component_ux_button, {
        key: 0,
        onClick: _cache[2] || (_cache[2] = ($event) => _ctx.add())
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(_ctx.addLabel) + " ", 1),
          createVNode(_component_ux_icon, {
            icon: "fa-plus",
            right: ""
          })
        ]),
        _: 1
      })) : createCommentVNode("", true)
    ])) : (openBlock(), createBlock(_component_flex_row, {
      wrap: "",
      class: "ux-text-row",
      key: _ctx.index
    }, {
      default: withCtx(() => [
        createVNode(_component_flex_cell, { shrink: "" }, {
          default: withCtx(() => [
            withDirectives(createElementVNode("select", {
              class: "ux-country-code-select",
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.model.countryCode = $event)
            }, [
              _hoisted_10$4,
              (openBlock(true), createElementBlock(Fragment, null, renderList($data.countryCodes, (country) => {
                return openBlock(), createElementBlock("option", {
                  value: country.value
                }, toDisplayString(country.title), 9, _hoisted_11$4);
              }), 256))
            ], 512), [
              [vModelSelect, _ctx.model.countryCode]
            ])
          ]),
          _: 1
        }),
        createVNode(_component_flex_cell, null, {
          default: withCtx(() => [
            createElementVNode("div", _hoisted_12$3, [
              withDirectives(createElementVNode("input", {
                class: "ux-field-focus ux-text-input-multiple",
                placeholder: $options.actualPlaceholder,
                onFocus: _cache[4] || (_cache[4] = (...args) => _ctx.touch && _ctx.touch(...args)),
                ref: "input",
                onKeydown: _cache[5] || (_cache[5] = withKeys(withModifiers(($event) => _ctx.add(), ["stop", "prevent"]), ["enter"])),
                "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => _ctx.model.number = $event)
              }, null, 40, _hoisted_13$3), [
                [vModelText, _ctx.model.number]
              ])
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }))
  ], 64);
}
var PhoneNumberInput = /* @__PURE__ */ _export_sfc(_sfc_main$I, [["render", _sfc_render$I], ["__scopeId", "data-v-856e04c2"]]);
var timezone_vue_vue_type_style_index_0_scoped_true_lang = "";
function isUndefined$4(entry) {
  return entry === void 0 || typeof entry === "undefined" || entry === null || String(entry) === "null" || String(entry) === "undefined";
}
const _sfc_main$H = {
  props: {
    modelValue: {}
  },
  mixins: [InputMixin],
  created() {
    this.model = this.model;
  },
  methods: {
    cleanOutput(val) {
      var self2 = this;
      if (isUndefined$4(val)) {
        if (self2.multiValue) {
          val = [];
        } else {
          val = void 0;
        }
      } else {
        if (self2.multiValue) {
          val = (val || []).filter(Boolean).map(function(i2) {
            return self2.getValue(i2);
          });
        } else {
          val = self2.getValue(val);
        }
      }
      return val;
    },
    cleanInput(val) {
      var self2 = this;
      if (self2.multiValue) {
        if (!val) {
          val = [];
        }
        if (!Array.isArray(val)) {
          val = [val];
        }
        if (self2.maximum) {
          if (val.length > self2.maximum) {
            val.length = self2.maximum;
          }
        }
        val = val.filter(Boolean).map(function(v) {
          var valueKey2 = self2.getValue(v);
          return self2.returnObject ? self2.optionLookup[valueKey2] : valueKey2;
        });
      } else {
        var valueKey = self2.getValue(val);
        val = self2.returnObject ? self2.optionLookup[valueKey] : valueKey;
      }
      return val;
    }
  },
  computed: {
    returnObject() {
      return this.type == "reference";
    },
    classes() {
      var array = [];
      if (this.multiValue) {
        array.push("multiple");
      } else {
        array.push("single");
      }
      return array;
    },
    optionLookup() {
      var self2 = this;
      return self2.options.reduce(function(set, option2) {
        const key = self2.getValue(option2);
        set[key] = option2;
        return set;
      }, {});
    },
    summary() {
      return this.getLabel(this.optionLookup[this.model]) || "Click to select";
    },
    options() {
      return [
        "Africa/Abidjan",
        "Africa/Accra",
        "Africa/Addis_Ababa",
        "Africa/Algiers",
        "Africa/Asmera",
        "Africa/Bamako",
        "Africa/Bangui",
        "Africa/Banjul",
        "Africa/Bissau",
        "Africa/Blantyre",
        "Africa/Brazzaville",
        "Africa/Bujumbura",
        "Africa/Cairo",
        "Africa/Casablanca",
        "Africa/Ceuta",
        "Africa/Conakry",
        "Africa/Dakar",
        "Africa/Dar_es_Salaam",
        "Africa/Djibouti",
        "Africa/Douala",
        "Africa/El_Aaiun",
        "Africa/Freetown",
        "Africa/Gaborone",
        "Africa/Harare",
        "Africa/Johannesburg",
        "Africa/Juba",
        "Africa/Kampala",
        "Africa/Khartoum",
        "Africa/Kigali",
        "Africa/Kinshasa",
        "Africa/Lagos",
        "Africa/Libreville",
        "Africa/Lome",
        "Africa/Luanda",
        "Africa/Lubumbashi",
        "Africa/Lusaka",
        "Africa/Malabo",
        "Africa/Maputo",
        "Africa/Maseru",
        "Africa/Mbabane",
        "Africa/Mogadishu",
        "Africa/Monrovia",
        "Africa/Nairobi",
        "Africa/Ndjamena",
        "Africa/Niamey",
        "Africa/Nouakchott",
        "Africa/Ouagadougou",
        "Africa/Porto-Novo",
        "Africa/Sao_Tome",
        "Africa/Tripoli",
        "Africa/Tunis",
        "Africa/Windhoek",
        "America/Anchorage",
        "America/Anguilla",
        "America/Antigua",
        "America/Araguaina",
        "America/Argentina/La_Rioja",
        "America/Argentina/Rio_Gallegos",
        "America/Argentina/Salta",
        "America/Argentina/San_Juan",
        "America/Argentina/San_Luis",
        "America/Argentina/Tucuman",
        "America/Argentina/Ushuaia",
        "America/Aruba",
        "America/Asuncion",
        "America/Bahia",
        "America/Bahia_Banderas",
        "America/Barbados",
        "America/Belem",
        "America/Belize",
        "America/Blanc-Sablon",
        "America/Boa_Vista",
        "America/Bogota",
        "America/Boise",
        "America/Buenos_Aires",
        "America/Cambridge_Bay",
        "America/Campo_Grande",
        "America/Cancun",
        "America/Caracas",
        "America/Catamarca",
        "America/Cayenne",
        "America/Cayman",
        "America/Chicago",
        "America/Chihuahua",
        "America/Coral_Harbour",
        "America/Cordoba",
        "America/Costa_Rica",
        "America/Creston",
        "America/Cuiaba",
        "America/Curacao",
        "America/Danmarkshavn",
        "America/Dawson",
        "America/Dawson_Creek",
        "America/Denver",
        "America/Detroit",
        "America/Dominica",
        "America/Edmonton",
        "America/Eirunepe",
        "America/El_Salvador",
        "America/Fortaleza",
        "America/Glace_Bay",
        "America/Godthab",
        "America/Goose_Bay",
        "America/Grand_Turk",
        "America/Grenada",
        "America/Guadeloupe",
        "America/Guatemala",
        "America/Guayaquil",
        "America/Guyana",
        "America/Halifax",
        "America/Havana",
        "America/Hermosillo",
        "America/Indiana/Knox",
        "America/Indiana/Marengo",
        "America/Indiana/Petersburg",
        "America/Indiana/Tell_City",
        "America/Indiana/Vevay",
        "America/Indiana/Vincennes",
        "America/Indiana/Winamac",
        "America/Indianapolis",
        "America/Inuvik",
        "America/Iqaluit",
        "America/Jamaica",
        "America/Jujuy",
        "America/Juneau",
        "America/Kentucky/Monticello",
        "America/Kralendijk",
        "America/La_Paz",
        "America/Lima",
        "America/Los_Angeles",
        "America/Louisville",
        "America/Lower_Princes",
        "America/Maceio",
        "America/Managua",
        "America/Manaus",
        "America/Marigot",
        "America/Martinique",
        "America/Matamoros",
        "America/Mazatlan",
        "America/Mendoza",
        "America/Menominee",
        "America/Merida",
        "America/Mexico_City",
        "America/Moncton",
        "America/Monterrey",
        "America/Montevideo",
        "America/Montreal",
        "America/Montserrat",
        "America/Nassau",
        "America/New_York",
        "America/Nipigon",
        "America/Nome",
        "America/Noronha",
        "America/North_Dakota/Beulah",
        "America/North_Dakota/Center",
        "America/North_Dakota/New_Salem",
        "America/Ojinaga",
        "America/Panama",
        "America/Pangnirtung",
        "America/Paramaribo",
        "America/Phoenix",
        "America/Port-au-Prince",
        "America/Port_of_Spain",
        "America/Porto_Velho",
        "America/Puerto_Rico",
        "America/Rainy_River",
        "America/Rankin_Inlet",
        "America/Recife",
        "America/Regina",
        "America/Resolute",
        "America/Rio_Branco",
        "America/Santa_Isabel",
        "America/Santarem",
        "America/Santiago",
        "America/Santo_Domingo",
        "America/Sao_Paulo",
        "America/Scoresbysund",
        "America/Sitka",
        "America/St_Barthelemy",
        "America/St_Johns",
        "America/St_Kitts",
        "America/St_Lucia",
        "America/St_Thomas",
        "America/St_Vincent",
        "America/Swift_Current",
        "America/Tegucigalpa",
        "America/Thule",
        "America/Thunder_Bay",
        "America/Tijuana",
        "America/Toronto",
        "America/Tortola",
        "America/Vancouver",
        "America/Whitehorse",
        "America/Winnipeg",
        "America/Yakutat",
        "America/Yellowknife",
        "Antarctica/Casey",
        "Antarctica/Davis",
        "Antarctica/DumontDUrville",
        "Antarctica/Macquarie",
        "Antarctica/Mawson",
        "Antarctica/McMurdo",
        "Antarctica/Palmer",
        "Antarctica/Rothera",
        "Antarctica/Syowa",
        "Antarctica/Vostok",
        "Arctic/Longyearbyen",
        "Asia/Aden",
        "Asia/Almaty",
        "Asia/Amman",
        "Asia/Anadyr",
        "Asia/Aqtau",
        "Asia/Aqtobe",
        "Asia/Ashgabat",
        "Asia/Baghdad",
        "Asia/Bahrain",
        "Asia/Baku",
        "Asia/Bangkok",
        "Asia/Beirut",
        "Asia/Bishkek",
        "Asia/Brunei",
        "Asia/Calcutta",
        "Asia/Chita",
        "Asia/Choibalsan",
        "Asia/Colombo",
        "Asia/Damascus",
        "Asia/Dhaka",
        "Asia/Dili",
        "Asia/Dubai",
        "Asia/Dushanbe",
        "Asia/Hong_Kong",
        "Asia/Hovd",
        "Asia/Irkutsk",
        "Asia/Jakarta",
        "Asia/Jayapura",
        "Asia/Jerusalem",
        "Asia/Kabul",
        "Asia/Kamchatka",
        "Asia/Karachi",
        "Asia/Kathmandu",
        "Asia/Khandyga",
        "Asia/Kolkata",
        "Asia/Krasnoyarsk",
        "Asia/Kuala_Lumpur",
        "Asia/Kuching",
        "Asia/Kuwait",
        "Asia/Macau",
        "Asia/Magadan",
        "Asia/Makassar",
        "Asia/Manila",
        "Asia/Muscat",
        "Asia/Nicosia",
        "Asia/Novokuznetsk",
        "Asia/Novosibirsk",
        "Asia/Omsk",
        "Asia/Oral",
        "Asia/Phnom_Penh",
        "Asia/Pontianak",
        "Asia/Pyongyang",
        "Asia/Qatar",
        "Asia/Qyzylorda",
        "Asia/Rangoon",
        "Asia/Riyadh",
        "Asia/Saigon",
        "Asia/Sakhalin",
        "Asia/Samarkand",
        "Asia/Seoul",
        "Asia/Shanghai",
        "Asia/Singapore",
        "Asia/Srednekolymsk",
        "Asia/Taipei",
        "Asia/Tashkent",
        "Asia/Tbilisi",
        "Asia/Tehran",
        "Asia/Thimphu",
        "Asia/Tokyo",
        "Asia/Ulaanbaatar",
        "Asia/Urumqi",
        "Asia/Ust-Nera",
        "Asia/Vientiane",
        "Asia/Vladivostok",
        "Asia/Yakutsk",
        "Asia/Yekaterinburg",
        "Asia/Yerevan",
        "Atlantic/Azores",
        "Atlantic/Bermuda",
        "Atlantic/Canary",
        "Atlantic/Cape_Verde",
        "Atlantic/Faeroe",
        "Atlantic/Madeira",
        "Atlantic/Reykjavik",
        "Atlantic/South_Georgia",
        "Atlantic/St_Helena",
        "Atlantic/Stanley",
        "Australia/Adelaide",
        "Australia/Brisbane",
        "Australia/Broken_Hill",
        "Australia/Currie",
        "Australia/Darwin",
        "Australia/Hobart",
        "Australia/Lindeman",
        "Australia/Melbourne",
        "Australia/Perth",
        "Australia/Sydney",
        "CST6CDT",
        "EST5EDT",
        "Etc/GMT",
        "Etc/GMT+1",
        "Etc/GMT+10",
        "Etc/GMT+11",
        "Etc/GMT+12",
        "Etc/GMT+2",
        "Etc/GMT+3",
        "Etc/GMT+4",
        "Etc/GMT+5",
        "Etc/GMT+6",
        "Etc/GMT+7",
        "Etc/GMT-1",
        "Etc/GMT-10",
        "Etc/GMT-11",
        "Etc/GMT-12",
        "Etc/GMT-13",
        "Etc/GMT-2",
        "Etc/GMT-3",
        "Etc/GMT-4",
        "Etc/GMT-5",
        "Etc/GMT-6",
        "Etc/GMT-7",
        "Etc/GMT-8",
        "Etc/GMT-9",
        "Europe/Amsterdam",
        "Europe/Andorra",
        "Europe/Astrakhan",
        "Europe/Athens",
        "Europe/Belgrade",
        "Europe/Berlin",
        "Europe/Bratislava",
        "Europe/Brussels",
        "Europe/Bucharest",
        "Europe/Budapest",
        "Europe/Busingen",
        "Europe/Chisinau",
        "Europe/Copenhagen",
        "Europe/Dublin",
        "Europe/Gibraltar",
        "Europe/Guernsey",
        "Europe/Helsinki",
        "Europe/Isle_of_Man",
        "Europe/Istanbul",
        "Europe/Jersey",
        "Europe/Kaliningrad",
        "Europe/Kiev",
        "Europe/Kirov",
        "Europe/Lisbon",
        "Europe/Ljubljana",
        "Europe/London",
        "Europe/Luxembourg",
        "Europe/Madrid",
        "Europe/Malta",
        "Europe/Mariehamn",
        "Europe/Minsk",
        "Europe/Monaco",
        "Europe/Moscow",
        "Europe/Nicosia",
        "Europe/Oslo",
        "Europe/Paris",
        "Europe/Podgorica",
        "Europe/Prague",
        "Europe/Riga",
        "Europe/Rome",
        "Europe/Samara",
        "Europe/San_Marino",
        "Europe/Sarajevo",
        "Europe/Simferopol",
        "Europe/Skopje",
        "Europe/Sofia",
        "Europe/Stockholm",
        "Europe/Tallinn",
        "Europe/Tirane",
        "Europe/Ulyanovsk",
        "Europe/Uzhgorod",
        "Europe/Vaduz",
        "Europe/Vatican",
        "Europe/Vienna",
        "Europe/Vilnius",
        "Europe/Volgograd",
        "Europe/Warsaw",
        "Europe/Zagreb",
        "Europe/Zaporozhye",
        "Europe/Zurich",
        "Indian/Antananarivo",
        "Indian/Chagos",
        "Indian/Christmas",
        "Indian/Cocos",
        "Indian/Comoro",
        "Indian/Kerguelen",
        "Indian/Mahe",
        "Indian/Maldives",
        "Indian/Mauritius",
        "Indian/Mayotte",
        "Indian/Reunion",
        "MST7MDT",
        "PST8PDT",
        "Pacific/Apia",
        "Pacific/Auckland",
        "Pacific/Efate",
        "Pacific/Enderbury",
        "Pacific/Fakaofo",
        "Pacific/Fiji",
        "Pacific/Funafuti",
        "Pacific/Galapagos",
        "Pacific/Guadalcanal",
        "Pacific/Guam",
        "Pacific/Honolulu",
        "Pacific/Johnston",
        "Pacific/Kosrae",
        "Pacific/Kwajalein",
        "Pacific/Majuro",
        "Pacific/Midway",
        "Pacific/Nauru",
        "Pacific/Niue",
        "Pacific/Noumea",
        "Pacific/Pago_Pago",
        "Pacific/Palau",
        "Pacific/Ponape",
        "Pacific/Port_Moresby",
        "Pacific/Rarotonga",
        "Pacific/Saipan",
        "Pacific/Tahiti",
        "Pacific/Tarawa",
        "Pacific/Tongatapu",
        "Pacific/Truk",
        "Pacific/Wake",
        "Pacific/Wallis"
      ].map(function(v) {
        return {
          title: v,
          value: v
        };
      });
    },
    selectableOptions() {
      return this.options;
    }
  }
};
const _hoisted_1$z = {
  key: 0,
  class: "ux-field-title"
};
const _hoisted_2$t = {
  key: 0,
  class: "ux-required-marker"
};
const _hoisted_3$q = {
  key: 1,
  class: "ux-field-description"
};
const _hoisted_4$o = {
  key: 2,
  class: "ui-select-button"
};
const _hoisted_5$h = ["multiple"];
const _hoisted_6$d = {
  key: 0,
  value: ""
};
const _hoisted_7$a = ["value"];
function _sfc_render$H(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ux_button = resolveComponent("ux-button");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["native-select", $options.classes])
  }, [
    _ctx.showLabel ? (openBlock(), createElementBlock("label", _hoisted_1$z, [
      createTextVNode(toDisplayString(_ctx.label) + " ", 1),
      _ctx.required ? (openBlock(), createElementBlock("span", _hoisted_2$t, "*")) : createCommentVNode("", true)
    ])) : createCommentVNode("", true),
    _ctx.showDescription ? (openBlock(), createElementBlock("div", _hoisted_3$q, toDisplayString(_ctx.description), 1)) : createCommentVNode("", true),
    _ctx.singleValue ? (openBlock(), createElementBlock("div", _hoisted_4$o, [
      renderSlot(_ctx.$slots, "default", {}, () => [
        createVNode(_component_ux_button, { tag: "div" }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString($options.summary), 1)
          ]),
          _: 1
        })
      ], true)
    ])) : createCommentVNode("", true),
    withDirectives(createElementVNode("select", {
      onFocus: _cache[0] || (_cache[0] = (...args) => _ctx.touch && _ctx.touch(...args)),
      multiple: _ctx.multiValue,
      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.model = $event)
    }, [
      _ctx.singleValue && !_ctx.minimum ? (openBlock(), createElementBlock("option", _hoisted_6$d, "None")) : createCommentVNode("", true),
      (openBlock(true), createElementBlock(Fragment, null, renderList($options.selectableOptions, (option2) => {
        return openBlock(), createElementBlock("option", {
          value: option2.value
        }, toDisplayString(option2.title), 9, _hoisted_7$a);
      }), 256))
    ], 40, _hoisted_5$h), [
      [vModelSelect, _ctx.model]
    ])
  ], 2);
}
var TimezoneSelect = /* @__PURE__ */ _export_sfc(_sfc_main$H, [["render", _sfc_render$H], ["__scopeId", "data-v-2b83f766"]]);
var item_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$G = {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    title() {
      return this.item.title || this.item.name || this.item.label || (this.item.firstName ? `${this.item.firstName} ${this.item.lastName}` : "(Title unknown)");
    }
  },
  methods: {
    clicked() {
      this.$qik.dispatch("item:view", this.item);
    }
  }
};
function _sfc_render$G(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_flex_cell = resolveComponent("flex-cell");
  const _component_flex_row = resolveComponent("flex-row");
  return openBlock(), createElementBlock("div", {
    class: "content-item",
    onClick: _cache[0] || (_cache[0] = (...args) => $options.clicked && $options.clicked(...args))
  }, [
    createVNode(_component_flex_row, null, {
      default: withCtx(() => [
        createVNode(_component_flex_cell, { shrink: "" }),
        createVNode(_component_flex_cell, { vcenter: "" }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default", {}, () => [
              createTextVNode(toDisplayString($options.title), 1)
            ], true)
          ]),
          _: 3
        }),
        createVNode(_component_flex_cell, { shrink: "" }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "actions", {}, void 0, true)
          ]),
          _: 3
        })
      ]),
      _: 3
    })
  ]);
}
var Item = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["render", _sfc_render$G], ["__scopeId", "data-v-4f7e8052"]]);
/**!
 * Sortable 1.14.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? arguments[i2] : {};
    if (i2 % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof = function(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof(obj);
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i2;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i2 = 0; i2 < sourceSymbolKeys.length; i2++) {
      key = sourceSymbolKeys[i2];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
var version = "1.14.0";
function userAgent(pattern) {
  if (typeof window !== "undefined" && window.navigator) {
    return !!/* @__PURE__ */ navigator.userAgent.match(pattern);
  }
}
var IE11OrLess = userAgent(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i);
var Edge = userAgent(/Edge/i);
var FireFox = userAgent(/firefox/i);
var Safari = userAgent(/safari/i) && !userAgent(/chrome/i) && !userAgent(/android/i);
var IOS = userAgent(/iP(ad|od|hone)/i);
var ChromeForAndroid = userAgent(/chrome/i) && userAgent(/android/i);
var captureMode = {
  capture: false,
  passive: false
};
function on(el, event, fn) {
  el.addEventListener(event, fn, !IE11OrLess && captureMode);
}
function off(el, event, fn) {
  el.removeEventListener(event, fn, !IE11OrLess && captureMode);
}
function matches(el, selector) {
  if (!selector)
    return;
  selector[0] === ">" && (selector = selector.substring(1));
  if (el) {
    try {
      if (el.matches) {
        return el.matches(selector);
      } else if (el.msMatchesSelector) {
        return el.msMatchesSelector(selector);
      } else if (el.webkitMatchesSelector) {
        return el.webkitMatchesSelector(selector);
      }
    } catch (_) {
      return false;
    }
  }
  return false;
}
function getParentOrHost(el) {
  return el.host && el !== document && el.host.nodeType ? el.host : el.parentNode;
}
function closest(el, selector, ctx, includeCTX) {
  if (el) {
    ctx = ctx || document;
    do {
      if (selector != null && (selector[0] === ">" ? el.parentNode === ctx && matches(el, selector) : matches(el, selector)) || includeCTX && el === ctx) {
        return el;
      }
      if (el === ctx)
        break;
    } while (el = getParentOrHost(el));
  }
  return null;
}
var R_SPACE = /\s+/g;
function toggleClass(el, name, state) {
  if (el && name) {
    if (el.classList) {
      el.classList[state ? "add" : "remove"](name);
    } else {
      var className = (" " + el.className + " ").replace(R_SPACE, " ").replace(" " + name + " ", " ");
      el.className = (className + (state ? " " + name : "")).replace(R_SPACE, " ");
    }
  }
}
function css(el, prop, val) {
  var style = el && el.style;
  if (style) {
    if (val === void 0) {
      if (document.defaultView && document.defaultView.getComputedStyle) {
        val = document.defaultView.getComputedStyle(el, "");
      } else if (el.currentStyle) {
        val = el.currentStyle;
      }
      return prop === void 0 ? val : val[prop];
    } else {
      if (!(prop in style) && prop.indexOf("webkit") === -1) {
        prop = "-webkit-" + prop;
      }
      style[prop] = val + (typeof val === "string" ? "" : "px");
    }
  }
}
function matrix(el, selfOnly) {
  var appliedTransforms = "";
  if (typeof el === "string") {
    appliedTransforms = el;
  } else {
    do {
      var transform = css(el, "transform");
      if (transform && transform !== "none") {
        appliedTransforms = transform + " " + appliedTransforms;
      }
    } while (!selfOnly && (el = el.parentNode));
  }
  var matrixFn = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return matrixFn && new matrixFn(appliedTransforms);
}
function find(ctx, tagName, iterator) {
  if (ctx) {
    var list = ctx.getElementsByTagName(tagName), i2 = 0, n2 = list.length;
    if (iterator) {
      for (; i2 < n2; i2++) {
        iterator(list[i2], i2);
      }
    }
    return list;
  }
  return [];
}
function getWindowScrollingElement() {
  var scrollingElement = document.scrollingElement;
  if (scrollingElement) {
    return scrollingElement;
  } else {
    return document.documentElement;
  }
}
function getRect(el, relativeToContainingBlock, relativeToNonStaticParent, undoScale, container) {
  if (!el.getBoundingClientRect && el !== window)
    return;
  var elRect, top, left, bottom, right, height, width;
  if (el !== window && el.parentNode && el !== getWindowScrollingElement()) {
    elRect = el.getBoundingClientRect();
    top = elRect.top;
    left = elRect.left;
    bottom = elRect.bottom;
    right = elRect.right;
    height = elRect.height;
    width = elRect.width;
  } else {
    top = 0;
    left = 0;
    bottom = window.innerHeight;
    right = window.innerWidth;
    height = window.innerHeight;
    width = window.innerWidth;
  }
  if ((relativeToContainingBlock || relativeToNonStaticParent) && el !== window) {
    container = container || el.parentNode;
    if (!IE11OrLess) {
      do {
        if (container && container.getBoundingClientRect && (css(container, "transform") !== "none" || relativeToNonStaticParent && css(container, "position") !== "static")) {
          var containerRect = container.getBoundingClientRect();
          top -= containerRect.top + parseInt(css(container, "border-top-width"));
          left -= containerRect.left + parseInt(css(container, "border-left-width"));
          bottom = top + elRect.height;
          right = left + elRect.width;
          break;
        }
      } while (container = container.parentNode);
    }
  }
  if (undoScale && el !== window) {
    var elMatrix = matrix(container || el), scaleX = elMatrix && elMatrix.a, scaleY = elMatrix && elMatrix.d;
    if (elMatrix) {
      top /= scaleY;
      left /= scaleX;
      width /= scaleX;
      height /= scaleY;
      bottom = top + height;
      right = left + width;
    }
  }
  return {
    top,
    left,
    bottom,
    right,
    width,
    height
  };
}
function isScrolledPast(el, elSide, parentSide) {
  var parent = getParentAutoScrollElement(el, true), elSideVal = getRect(el)[elSide];
  while (parent) {
    var parentSideVal = getRect(parent)[parentSide], visible = void 0;
    if (parentSide === "top" || parentSide === "left") {
      visible = elSideVal >= parentSideVal;
    } else {
      visible = elSideVal <= parentSideVal;
    }
    if (!visible)
      return parent;
    if (parent === getWindowScrollingElement())
      break;
    parent = getParentAutoScrollElement(parent, false);
  }
  return false;
}
function getChild(el, childNum, options, includeDragEl) {
  var currentChild = 0, i2 = 0, children = el.children;
  while (i2 < children.length) {
    if (children[i2].style.display !== "none" && children[i2] !== Sortable.ghost && (includeDragEl || children[i2] !== Sortable.dragged) && closest(children[i2], options.draggable, el, false)) {
      if (currentChild === childNum) {
        return children[i2];
      }
      currentChild++;
    }
    i2++;
  }
  return null;
}
function lastChild(el, selector) {
  var last = el.lastElementChild;
  while (last && (last === Sortable.ghost || css(last, "display") === "none" || selector && !matches(last, selector))) {
    last = last.previousElementSibling;
  }
  return last || null;
}
function index(el, selector) {
  var index2 = 0;
  if (!el || !el.parentNode) {
    return -1;
  }
  while (el = el.previousElementSibling) {
    if (el.nodeName.toUpperCase() !== "TEMPLATE" && el !== Sortable.clone && (!selector || matches(el, selector))) {
      index2++;
    }
  }
  return index2;
}
function getRelativeScrollOffset(el) {
  var offsetLeft = 0, offsetTop = 0, winScroller = getWindowScrollingElement();
  if (el) {
    do {
      var elMatrix = matrix(el), scaleX = elMatrix.a, scaleY = elMatrix.d;
      offsetLeft += el.scrollLeft * scaleX;
      offsetTop += el.scrollTop * scaleY;
    } while (el !== winScroller && (el = el.parentNode));
  }
  return [offsetLeft, offsetTop];
}
function indexOfObject(arr, obj) {
  for (var i2 in arr) {
    if (!arr.hasOwnProperty(i2))
      continue;
    for (var key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] === arr[i2][key])
        return Number(i2);
    }
  }
  return -1;
}
function getParentAutoScrollElement(el, includeSelf) {
  if (!el || !el.getBoundingClientRect)
    return getWindowScrollingElement();
  var elem = el;
  var gotSelf = false;
  do {
    if (elem.clientWidth < elem.scrollWidth || elem.clientHeight < elem.scrollHeight) {
      var elemCSS = css(elem);
      if (elem.clientWidth < elem.scrollWidth && (elemCSS.overflowX == "auto" || elemCSS.overflowX == "scroll") || elem.clientHeight < elem.scrollHeight && (elemCSS.overflowY == "auto" || elemCSS.overflowY == "scroll")) {
        if (!elem.getBoundingClientRect || elem === document.body)
          return getWindowScrollingElement();
        if (gotSelf || includeSelf)
          return elem;
        gotSelf = true;
      }
    }
  } while (elem = elem.parentNode);
  return getWindowScrollingElement();
}
function extend(dst, src) {
  if (dst && src) {
    for (var key in src) {
      if (src.hasOwnProperty(key)) {
        dst[key] = src[key];
      }
    }
  }
  return dst;
}
function isRectEqual(rect1, rect2) {
  return Math.round(rect1.top) === Math.round(rect2.top) && Math.round(rect1.left) === Math.round(rect2.left) && Math.round(rect1.height) === Math.round(rect2.height) && Math.round(rect1.width) === Math.round(rect2.width);
}
var _throttleTimeout;
function throttle(callback, ms) {
  return function() {
    if (!_throttleTimeout) {
      var args = arguments, _this = this;
      if (args.length === 1) {
        callback.call(_this, args[0]);
      } else {
        callback.apply(_this, args);
      }
      _throttleTimeout = setTimeout(function() {
        _throttleTimeout = void 0;
      }, ms);
    }
  };
}
function cancelThrottle() {
  clearTimeout(_throttleTimeout);
  _throttleTimeout = void 0;
}
function scrollBy(el, x, y) {
  el.scrollLeft += x;
  el.scrollTop += y;
}
function clone$2(el) {
  var Polymer = window.Polymer;
  var $ = window.jQuery || window.Zepto;
  if (Polymer && Polymer.dom) {
    return Polymer.dom(el).cloneNode(true);
  } else if ($) {
    return $(el).clone(true)[0];
  } else {
    return el.cloneNode(true);
  }
}
var expando = "Sortable" + new Date().getTime();
function AnimationStateManager() {
  var animationStates = [], animationCallbackId;
  return {
    captureAnimationState: function captureAnimationState() {
      animationStates = [];
      if (!this.options.animation)
        return;
      var children = [].slice.call(this.el.children);
      children.forEach(function(child) {
        if (css(child, "display") === "none" || child === Sortable.ghost)
          return;
        animationStates.push({
          target: child,
          rect: getRect(child)
        });
        var fromRect = _objectSpread2({}, animationStates[animationStates.length - 1].rect);
        if (child.thisAnimationDuration) {
          var childMatrix = matrix(child, true);
          if (childMatrix) {
            fromRect.top -= childMatrix.f;
            fromRect.left -= childMatrix.e;
          }
        }
        child.fromRect = fromRect;
      });
    },
    addAnimationState: function addAnimationState(state) {
      animationStates.push(state);
    },
    removeAnimationState: function removeAnimationState(target) {
      animationStates.splice(indexOfObject(animationStates, {
        target
      }), 1);
    },
    animateAll: function animateAll(callback) {
      var _this = this;
      if (!this.options.animation) {
        clearTimeout(animationCallbackId);
        if (typeof callback === "function")
          callback();
        return;
      }
      var animating = false, animationTime = 0;
      animationStates.forEach(function(state) {
        var time = 0, target = state.target, fromRect = target.fromRect, toRect = getRect(target), prevFromRect = target.prevFromRect, prevToRect = target.prevToRect, animatingRect = state.rect, targetMatrix = matrix(target, true);
        if (targetMatrix) {
          toRect.top -= targetMatrix.f;
          toRect.left -= targetMatrix.e;
        }
        target.toRect = toRect;
        if (target.thisAnimationDuration) {
          if (isRectEqual(prevFromRect, toRect) && !isRectEqual(fromRect, toRect) && (animatingRect.top - toRect.top) / (animatingRect.left - toRect.left) === (fromRect.top - toRect.top) / (fromRect.left - toRect.left)) {
            time = calculateRealTime(animatingRect, prevFromRect, prevToRect, _this.options);
          }
        }
        if (!isRectEqual(toRect, fromRect)) {
          target.prevFromRect = fromRect;
          target.prevToRect = toRect;
          if (!time) {
            time = _this.options.animation;
          }
          _this.animate(target, animatingRect, toRect, time);
        }
        if (time) {
          animating = true;
          animationTime = Math.max(animationTime, time);
          clearTimeout(target.animationResetTimer);
          target.animationResetTimer = setTimeout(function() {
            target.animationTime = 0;
            target.prevFromRect = null;
            target.fromRect = null;
            target.prevToRect = null;
            target.thisAnimationDuration = null;
          }, time);
          target.thisAnimationDuration = time;
        }
      });
      clearTimeout(animationCallbackId);
      if (!animating) {
        if (typeof callback === "function")
          callback();
      } else {
        animationCallbackId = setTimeout(function() {
          if (typeof callback === "function")
            callback();
        }, animationTime);
      }
      animationStates = [];
    },
    animate: function animate(target, currentRect, toRect, duration) {
      if (duration) {
        css(target, "transition", "");
        css(target, "transform", "");
        var elMatrix = matrix(this.el), scaleX = elMatrix && elMatrix.a, scaleY = elMatrix && elMatrix.d, translateX = (currentRect.left - toRect.left) / (scaleX || 1), translateY = (currentRect.top - toRect.top) / (scaleY || 1);
        target.animatingX = !!translateX;
        target.animatingY = !!translateY;
        css(target, "transform", "translate3d(" + translateX + "px," + translateY + "px,0)");
        this.forRepaintDummy = repaint(target);
        css(target, "transition", "transform " + duration + "ms" + (this.options.easing ? " " + this.options.easing : ""));
        css(target, "transform", "translate3d(0,0,0)");
        typeof target.animated === "number" && clearTimeout(target.animated);
        target.animated = setTimeout(function() {
          css(target, "transition", "");
          css(target, "transform", "");
          target.animated = false;
          target.animatingX = false;
          target.animatingY = false;
        }, duration);
      }
    }
  };
}
function repaint(target) {
  return target.offsetWidth;
}
function calculateRealTime(animatingRect, fromRect, toRect, options) {
  return Math.sqrt(Math.pow(fromRect.top - animatingRect.top, 2) + Math.pow(fromRect.left - animatingRect.left, 2)) / Math.sqrt(Math.pow(fromRect.top - toRect.top, 2) + Math.pow(fromRect.left - toRect.left, 2)) * options.animation;
}
var plugins = [];
var defaults = {
  initializeByDefault: true
};
var PluginManager = {
  mount: function mount(plugin) {
    for (var option2 in defaults) {
      if (defaults.hasOwnProperty(option2) && !(option2 in plugin)) {
        plugin[option2] = defaults[option2];
      }
    }
    plugins.forEach(function(p) {
      if (p.pluginName === plugin.pluginName) {
        throw "Sortable: Cannot mount plugin ".concat(plugin.pluginName, " more than once");
      }
    });
    plugins.push(plugin);
  },
  pluginEvent: function pluginEvent(eventName, sortable, evt) {
    var _this = this;
    this.eventCanceled = false;
    evt.cancel = function() {
      _this.eventCanceled = true;
    };
    var eventNameGlobal = eventName + "Global";
    plugins.forEach(function(plugin) {
      if (!sortable[plugin.pluginName])
        return;
      if (sortable[plugin.pluginName][eventNameGlobal]) {
        sortable[plugin.pluginName][eventNameGlobal](_objectSpread2({
          sortable
        }, evt));
      }
      if (sortable.options[plugin.pluginName] && sortable[plugin.pluginName][eventName]) {
        sortable[plugin.pluginName][eventName](_objectSpread2({
          sortable
        }, evt));
      }
    });
  },
  initializePlugins: function initializePlugins(sortable, el, defaults2, options) {
    plugins.forEach(function(plugin) {
      var pluginName = plugin.pluginName;
      if (!sortable.options[pluginName] && !plugin.initializeByDefault)
        return;
      var initialized = new plugin(sortable, el, sortable.options);
      initialized.sortable = sortable;
      initialized.options = sortable.options;
      sortable[pluginName] = initialized;
      _extends(defaults2, initialized.defaults);
    });
    for (var option2 in sortable.options) {
      if (!sortable.options.hasOwnProperty(option2))
        continue;
      var modified = this.modifyOption(sortable, option2, sortable.options[option2]);
      if (typeof modified !== "undefined") {
        sortable.options[option2] = modified;
      }
    }
  },
  getEventProperties: function getEventProperties(name, sortable) {
    var eventProperties = {};
    plugins.forEach(function(plugin) {
      if (typeof plugin.eventProperties !== "function")
        return;
      _extends(eventProperties, plugin.eventProperties.call(sortable[plugin.pluginName], name));
    });
    return eventProperties;
  },
  modifyOption: function modifyOption(sortable, name, value) {
    var modifiedValue;
    plugins.forEach(function(plugin) {
      if (!sortable[plugin.pluginName])
        return;
      if (plugin.optionListeners && typeof plugin.optionListeners[name] === "function") {
        modifiedValue = plugin.optionListeners[name].call(sortable[plugin.pluginName], value);
      }
    });
    return modifiedValue;
  }
};
function dispatchEvent(_ref) {
  var sortable = _ref.sortable, rootEl2 = _ref.rootEl, name = _ref.name, targetEl = _ref.targetEl, cloneEl2 = _ref.cloneEl, toEl = _ref.toEl, fromEl = _ref.fromEl, oldIndex2 = _ref.oldIndex, newIndex2 = _ref.newIndex, oldDraggableIndex2 = _ref.oldDraggableIndex, newDraggableIndex2 = _ref.newDraggableIndex, originalEvent = _ref.originalEvent, putSortable2 = _ref.putSortable, extraEventProperties = _ref.extraEventProperties;
  sortable = sortable || rootEl2 && rootEl2[expando];
  if (!sortable)
    return;
  var evt, options = sortable.options, onName = "on" + name.charAt(0).toUpperCase() + name.substr(1);
  if (window.CustomEvent && !IE11OrLess && !Edge) {
    evt = new CustomEvent(name, {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent("Event");
    evt.initEvent(name, true, true);
  }
  evt.to = toEl || rootEl2;
  evt.from = fromEl || rootEl2;
  evt.item = targetEl || rootEl2;
  evt.clone = cloneEl2;
  evt.oldIndex = oldIndex2;
  evt.newIndex = newIndex2;
  evt.oldDraggableIndex = oldDraggableIndex2;
  evt.newDraggableIndex = newDraggableIndex2;
  evt.originalEvent = originalEvent;
  evt.pullMode = putSortable2 ? putSortable2.lastPutMode : void 0;
  var allEventProperties = _objectSpread2(_objectSpread2({}, extraEventProperties), PluginManager.getEventProperties(name, sortable));
  for (var option2 in allEventProperties) {
    evt[option2] = allEventProperties[option2];
  }
  if (rootEl2) {
    rootEl2.dispatchEvent(evt);
  }
  if (options[onName]) {
    options[onName].call(sortable, evt);
  }
}
var _excluded = ["evt"];
var pluginEvent2 = function pluginEvent3(eventName, sortable) {
  var _ref = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, originalEvent = _ref.evt, data = _objectWithoutProperties(_ref, _excluded);
  PluginManager.pluginEvent.bind(Sortable)(eventName, sortable, _objectSpread2({
    dragEl,
    parentEl,
    ghostEl,
    rootEl,
    nextEl,
    lastDownEl,
    cloneEl,
    cloneHidden,
    dragStarted: moved,
    putSortable,
    activeSortable: Sortable.active,
    originalEvent,
    oldIndex,
    oldDraggableIndex,
    newIndex,
    newDraggableIndex,
    hideGhostForTarget: _hideGhostForTarget,
    unhideGhostForTarget: _unhideGhostForTarget,
    cloneNowHidden: function cloneNowHidden() {
      cloneHidden = true;
    },
    cloneNowShown: function cloneNowShown() {
      cloneHidden = false;
    },
    dispatchSortableEvent: function dispatchSortableEvent(name) {
      _dispatchEvent({
        sortable,
        name,
        originalEvent
      });
    }
  }, data));
};
function _dispatchEvent(info) {
  dispatchEvent(_objectSpread2({
    putSortable,
    cloneEl,
    targetEl: dragEl,
    rootEl,
    oldIndex,
    oldDraggableIndex,
    newIndex,
    newDraggableIndex
  }, info));
}
var dragEl, parentEl, ghostEl, rootEl, nextEl, lastDownEl, cloneEl, cloneHidden, oldIndex, newIndex, oldDraggableIndex, newDraggableIndex, activeGroup, putSortable, awaitingDragStarted = false, ignoreNextClick = false, sortables = [], tapEvt, touchEvt, lastDx, lastDy, tapDistanceLeft, tapDistanceTop, moved, lastTarget, lastDirection, pastFirstInvertThresh = false, isCircumstantialInvert = false, targetMoveDistance, ghostRelativeParent, ghostRelativeParentInitialScroll = [], _silent = false, savedInputChecked = [];
var documentExists = typeof document !== "undefined", PositionGhostAbsolutely = IOS, CSSFloatProperty = Edge || IE11OrLess ? "cssFloat" : "float", supportDraggable = documentExists && !ChromeForAndroid && !IOS && "draggable" in document.createElement("div"), supportCssPointerEvents = function() {
  if (!documentExists)
    return;
  if (IE11OrLess) {
    return false;
  }
  var el = document.createElement("x");
  el.style.cssText = "pointer-events:auto";
  return el.style.pointerEvents === "auto";
}(), _detectDirection = function _detectDirection2(el, options) {
  var elCSS = css(el), elWidth = parseInt(elCSS.width) - parseInt(elCSS.paddingLeft) - parseInt(elCSS.paddingRight) - parseInt(elCSS.borderLeftWidth) - parseInt(elCSS.borderRightWidth), child1 = getChild(el, 0, options), child2 = getChild(el, 1, options), firstChildCSS = child1 && css(child1), secondChildCSS = child2 && css(child2), firstChildWidth = firstChildCSS && parseInt(firstChildCSS.marginLeft) + parseInt(firstChildCSS.marginRight) + getRect(child1).width, secondChildWidth = secondChildCSS && parseInt(secondChildCSS.marginLeft) + parseInt(secondChildCSS.marginRight) + getRect(child2).width;
  if (elCSS.display === "flex") {
    return elCSS.flexDirection === "column" || elCSS.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  }
  if (elCSS.display === "grid") {
    return elCSS.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  }
  if (child1 && firstChildCSS["float"] && firstChildCSS["float"] !== "none") {
    var touchingSideChild2 = firstChildCSS["float"] === "left" ? "left" : "right";
    return child2 && (secondChildCSS.clear === "both" || secondChildCSS.clear === touchingSideChild2) ? "vertical" : "horizontal";
  }
  return child1 && (firstChildCSS.display === "block" || firstChildCSS.display === "flex" || firstChildCSS.display === "table" || firstChildCSS.display === "grid" || firstChildWidth >= elWidth && elCSS[CSSFloatProperty] === "none" || child2 && elCSS[CSSFloatProperty] === "none" && firstChildWidth + secondChildWidth > elWidth) ? "vertical" : "horizontal";
}, _dragElInRowColumn = function _dragElInRowColumn2(dragRect, targetRect, vertical) {
  var dragElS1Opp = vertical ? dragRect.left : dragRect.top, dragElS2Opp = vertical ? dragRect.right : dragRect.bottom, dragElOppLength = vertical ? dragRect.width : dragRect.height, targetS1Opp = vertical ? targetRect.left : targetRect.top, targetS2Opp = vertical ? targetRect.right : targetRect.bottom, targetOppLength = vertical ? targetRect.width : targetRect.height;
  return dragElS1Opp === targetS1Opp || dragElS2Opp === targetS2Opp || dragElS1Opp + dragElOppLength / 2 === targetS1Opp + targetOppLength / 2;
}, _detectNearestEmptySortable = function _detectNearestEmptySortable2(x, y) {
  var ret;
  sortables.some(function(sortable) {
    var threshold = sortable[expando].options.emptyInsertThreshold;
    if (!threshold || lastChild(sortable))
      return;
    var rect = getRect(sortable), insideHorizontally = x >= rect.left - threshold && x <= rect.right + threshold, insideVertically = y >= rect.top - threshold && y <= rect.bottom + threshold;
    if (insideHorizontally && insideVertically) {
      return ret = sortable;
    }
  });
  return ret;
}, _prepareGroup = function _prepareGroup2(options) {
  function toFn(value, pull) {
    return function(to, from, dragEl2, evt) {
      var sameGroup = to.options.group.name && from.options.group.name && to.options.group.name === from.options.group.name;
      if (value == null && (pull || sameGroup)) {
        return true;
      } else if (value == null || value === false) {
        return false;
      } else if (pull && value === "clone") {
        return value;
      } else if (typeof value === "function") {
        return toFn(value(to, from, dragEl2, evt), pull)(to, from, dragEl2, evt);
      } else {
        var otherGroup = (pull ? to : from).options.group.name;
        return value === true || typeof value === "string" && value === otherGroup || value.join && value.indexOf(otherGroup) > -1;
      }
    };
  }
  var group = {};
  var originalGroup = options.group;
  if (!originalGroup || _typeof(originalGroup) != "object") {
    originalGroup = {
      name: originalGroup
    };
  }
  group.name = originalGroup.name;
  group.checkPull = toFn(originalGroup.pull, true);
  group.checkPut = toFn(originalGroup.put);
  group.revertClone = originalGroup.revertClone;
  options.group = group;
}, _hideGhostForTarget = function _hideGhostForTarget2() {
  if (!supportCssPointerEvents && ghostEl) {
    css(ghostEl, "display", "none");
  }
}, _unhideGhostForTarget = function _unhideGhostForTarget2() {
  if (!supportCssPointerEvents && ghostEl) {
    css(ghostEl, "display", "");
  }
};
if (documentExists) {
  document.addEventListener("click", function(evt) {
    if (ignoreNextClick) {
      evt.preventDefault();
      evt.stopPropagation && evt.stopPropagation();
      evt.stopImmediatePropagation && evt.stopImmediatePropagation();
      ignoreNextClick = false;
      return false;
    }
  }, true);
}
var nearestEmptyInsertDetectEvent = function nearestEmptyInsertDetectEvent2(evt) {
  if (dragEl) {
    evt = evt.touches ? evt.touches[0] : evt;
    var nearest = _detectNearestEmptySortable(evt.clientX, evt.clientY);
    if (nearest) {
      var event = {};
      for (var i2 in evt) {
        if (evt.hasOwnProperty(i2)) {
          event[i2] = evt[i2];
        }
      }
      event.target = event.rootEl = nearest;
      event.preventDefault = void 0;
      event.stopPropagation = void 0;
      nearest[expando]._onDragOver(event);
    }
  }
};
var _checkOutsideTargetEl = function _checkOutsideTargetEl2(evt) {
  if (dragEl) {
    dragEl.parentNode[expando]._isOutsideThisEl(evt.target);
  }
};
function Sortable(el, options) {
  if (!(el && el.nodeType && el.nodeType === 1)) {
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(el));
  }
  this.el = el;
  this.options = options = _extends({}, options);
  el[expando] = this;
  var defaults2 = {
    group: null,
    sort: true,
    disabled: false,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(el.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    invertSwap: false,
    invertedSwapThreshold: null,
    removeCloneOnHide: true,
    direction: function direction() {
      return _detectDirection(el, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: true,
    animation: 0,
    easing: null,
    setData: function setData(dataTransfer, dragEl2) {
      dataTransfer.setData("Text", dragEl2.textContent);
    },
    dropBubble: false,
    dragoverBubble: false,
    dataIdAttr: "data-id",
    delay: 0,
    delayOnTouchOnly: false,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: false,
    fallbackClass: "sortable-fallback",
    fallbackOnBody: false,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    supportPointer: Sortable.supportPointer !== false && "PointerEvent" in window && !Safari,
    emptyInsertThreshold: 5
  };
  PluginManager.initializePlugins(this, el, defaults2);
  for (var name in defaults2) {
    !(name in options) && (options[name] = defaults2[name]);
  }
  _prepareGroup(options);
  for (var fn in this) {
    if (fn.charAt(0) === "_" && typeof this[fn] === "function") {
      this[fn] = this[fn].bind(this);
    }
  }
  this.nativeDraggable = options.forceFallback ? false : supportDraggable;
  if (this.nativeDraggable) {
    this.options.touchStartThreshold = 1;
  }
  if (options.supportPointer) {
    on(el, "pointerdown", this._onTapStart);
  } else {
    on(el, "mousedown", this._onTapStart);
    on(el, "touchstart", this._onTapStart);
  }
  if (this.nativeDraggable) {
    on(el, "dragover", this);
    on(el, "dragenter", this);
  }
  sortables.push(this.el);
  options.store && options.store.get && this.sort(options.store.get(this) || []);
  _extends(this, AnimationStateManager());
}
Sortable.prototype = {
  constructor: Sortable,
  _isOutsideThisEl: function _isOutsideThisEl(target) {
    if (!this.el.contains(target) && target !== this.el) {
      lastTarget = null;
    }
  },
  _getDirection: function _getDirection(evt, target) {
    return typeof this.options.direction === "function" ? this.options.direction.call(this, evt, target, dragEl) : this.options.direction;
  },
  _onTapStart: function _onTapStart(evt) {
    if (!evt.cancelable)
      return;
    var _this = this, el = this.el, options = this.options, preventOnFilter = options.preventOnFilter, type = evt.type, touch = evt.touches && evt.touches[0] || evt.pointerType && evt.pointerType === "touch" && evt, target = (touch || evt).target, originalTarget = evt.target.shadowRoot && (evt.path && evt.path[0] || evt.composedPath && evt.composedPath()[0]) || target, filter = options.filter;
    _saveInputCheckedState(el);
    if (dragEl) {
      return;
    }
    if (/mousedown|pointerdown/.test(type) && evt.button !== 0 || options.disabled) {
      return;
    }
    if (originalTarget.isContentEditable) {
      return;
    }
    if (!this.nativeDraggable && Safari && target && target.tagName.toUpperCase() === "SELECT") {
      return;
    }
    target = closest(target, options.draggable, el, false);
    if (target && target.animated) {
      return;
    }
    if (lastDownEl === target) {
      return;
    }
    oldIndex = index(target);
    oldDraggableIndex = index(target, options.draggable);
    if (typeof filter === "function") {
      if (filter.call(this, evt, target, this)) {
        _dispatchEvent({
          sortable: _this,
          rootEl: originalTarget,
          name: "filter",
          targetEl: target,
          toEl: el,
          fromEl: el
        });
        pluginEvent2("filter", _this, {
          evt
        });
        preventOnFilter && evt.cancelable && evt.preventDefault();
        return;
      }
    } else if (filter) {
      filter = filter.split(",").some(function(criteria) {
        criteria = closest(originalTarget, criteria.trim(), el, false);
        if (criteria) {
          _dispatchEvent({
            sortable: _this,
            rootEl: criteria,
            name: "filter",
            targetEl: target,
            fromEl: el,
            toEl: el
          });
          pluginEvent2("filter", _this, {
            evt
          });
          return true;
        }
      });
      if (filter) {
        preventOnFilter && evt.cancelable && evt.preventDefault();
        return;
      }
    }
    if (options.handle && !closest(originalTarget, options.handle, el, false)) {
      return;
    }
    this._prepareDragStart(evt, touch, target);
  },
  _prepareDragStart: function _prepareDragStart(evt, touch, target) {
    var _this = this, el = _this.el, options = _this.options, ownerDocument = el.ownerDocument, dragStartFn;
    if (target && !dragEl && target.parentNode === el) {
      var dragRect = getRect(target);
      rootEl = el;
      dragEl = target;
      parentEl = dragEl.parentNode;
      nextEl = dragEl.nextSibling;
      lastDownEl = target;
      activeGroup = options.group;
      Sortable.dragged = dragEl;
      tapEvt = {
        target: dragEl,
        clientX: (touch || evt).clientX,
        clientY: (touch || evt).clientY
      };
      tapDistanceLeft = tapEvt.clientX - dragRect.left;
      tapDistanceTop = tapEvt.clientY - dragRect.top;
      this._lastX = (touch || evt).clientX;
      this._lastY = (touch || evt).clientY;
      dragEl.style["will-change"] = "all";
      dragStartFn = function dragStartFn2() {
        pluginEvent2("delayEnded", _this, {
          evt
        });
        if (Sortable.eventCanceled) {
          _this._onDrop();
          return;
        }
        _this._disableDelayedDragEvents();
        if (!FireFox && _this.nativeDraggable) {
          dragEl.draggable = true;
        }
        _this._triggerDragStart(evt, touch);
        _dispatchEvent({
          sortable: _this,
          name: "choose",
          originalEvent: evt
        });
        toggleClass(dragEl, options.chosenClass, true);
      };
      options.ignore.split(",").forEach(function(criteria) {
        find(dragEl, criteria.trim(), _disableDraggable);
      });
      on(ownerDocument, "dragover", nearestEmptyInsertDetectEvent);
      on(ownerDocument, "mousemove", nearestEmptyInsertDetectEvent);
      on(ownerDocument, "touchmove", nearestEmptyInsertDetectEvent);
      on(ownerDocument, "mouseup", _this._onDrop);
      on(ownerDocument, "touchend", _this._onDrop);
      on(ownerDocument, "touchcancel", _this._onDrop);
      if (FireFox && this.nativeDraggable) {
        this.options.touchStartThreshold = 4;
        dragEl.draggable = true;
      }
      pluginEvent2("delayStart", this, {
        evt
      });
      if (options.delay && (!options.delayOnTouchOnly || touch) && (!this.nativeDraggable || !(Edge || IE11OrLess))) {
        if (Sortable.eventCanceled) {
          this._onDrop();
          return;
        }
        on(ownerDocument, "mouseup", _this._disableDelayedDrag);
        on(ownerDocument, "touchend", _this._disableDelayedDrag);
        on(ownerDocument, "touchcancel", _this._disableDelayedDrag);
        on(ownerDocument, "mousemove", _this._delayedDragTouchMoveHandler);
        on(ownerDocument, "touchmove", _this._delayedDragTouchMoveHandler);
        options.supportPointer && on(ownerDocument, "pointermove", _this._delayedDragTouchMoveHandler);
        _this._dragStartTimer = setTimeout(dragStartFn, options.delay);
      } else {
        dragStartFn();
      }
    }
  },
  _delayedDragTouchMoveHandler: function _delayedDragTouchMoveHandler(e) {
    var touch = e.touches ? e.touches[0] : e;
    if (Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1))) {
      this._disableDelayedDrag();
    }
  },
  _disableDelayedDrag: function _disableDelayedDrag() {
    dragEl && _disableDraggable(dragEl);
    clearTimeout(this._dragStartTimer);
    this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function _disableDelayedDragEvents() {
    var ownerDocument = this.el.ownerDocument;
    off(ownerDocument, "mouseup", this._disableDelayedDrag);
    off(ownerDocument, "touchend", this._disableDelayedDrag);
    off(ownerDocument, "touchcancel", this._disableDelayedDrag);
    off(ownerDocument, "mousemove", this._delayedDragTouchMoveHandler);
    off(ownerDocument, "touchmove", this._delayedDragTouchMoveHandler);
    off(ownerDocument, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function _triggerDragStart(evt, touch) {
    touch = touch || evt.pointerType == "touch" && evt;
    if (!this.nativeDraggable || touch) {
      if (this.options.supportPointer) {
        on(document, "pointermove", this._onTouchMove);
      } else if (touch) {
        on(document, "touchmove", this._onTouchMove);
      } else {
        on(document, "mousemove", this._onTouchMove);
      }
    } else {
      on(dragEl, "dragend", this);
      on(rootEl, "dragstart", this._onDragStart);
    }
    try {
      if (document.selection) {
        _nextTick(function() {
          document.selection.empty();
        });
      } else {
        window.getSelection().removeAllRanges();
      }
    } catch (err) {
    }
  },
  _dragStarted: function _dragStarted(fallback, evt) {
    awaitingDragStarted = false;
    if (rootEl && dragEl) {
      pluginEvent2("dragStarted", this, {
        evt
      });
      if (this.nativeDraggable) {
        on(document, "dragover", _checkOutsideTargetEl);
      }
      var options = this.options;
      !fallback && toggleClass(dragEl, options.dragClass, false);
      toggleClass(dragEl, options.ghostClass, true);
      Sortable.active = this;
      fallback && this._appendGhost();
      _dispatchEvent({
        sortable: this,
        name: "start",
        originalEvent: evt
      });
    } else {
      this._nulling();
    }
  },
  _emulateDragOver: function _emulateDragOver() {
    if (touchEvt) {
      this._lastX = touchEvt.clientX;
      this._lastY = touchEvt.clientY;
      _hideGhostForTarget();
      var target = document.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
      var parent = target;
      while (target && target.shadowRoot) {
        target = target.shadowRoot.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
        if (target === parent)
          break;
        parent = target;
      }
      dragEl.parentNode[expando]._isOutsideThisEl(target);
      if (parent) {
        do {
          if (parent[expando]) {
            var inserted = void 0;
            inserted = parent[expando]._onDragOver({
              clientX: touchEvt.clientX,
              clientY: touchEvt.clientY,
              target,
              rootEl: parent
            });
            if (inserted && !this.options.dragoverBubble) {
              break;
            }
          }
          target = parent;
        } while (parent = parent.parentNode);
      }
      _unhideGhostForTarget();
    }
  },
  _onTouchMove: function _onTouchMove(evt) {
    if (tapEvt) {
      var options = this.options, fallbackTolerance = options.fallbackTolerance, fallbackOffset = options.fallbackOffset, touch = evt.touches ? evt.touches[0] : evt, ghostMatrix = ghostEl && matrix(ghostEl, true), scaleX = ghostEl && ghostMatrix && ghostMatrix.a, scaleY = ghostEl && ghostMatrix && ghostMatrix.d, relativeScrollOffset = PositionGhostAbsolutely && ghostRelativeParent && getRelativeScrollOffset(ghostRelativeParent), dx = (touch.clientX - tapEvt.clientX + fallbackOffset.x) / (scaleX || 1) + (relativeScrollOffset ? relativeScrollOffset[0] - ghostRelativeParentInitialScroll[0] : 0) / (scaleX || 1), dy = (touch.clientY - tapEvt.clientY + fallbackOffset.y) / (scaleY || 1) + (relativeScrollOffset ? relativeScrollOffset[1] - ghostRelativeParentInitialScroll[1] : 0) / (scaleY || 1);
      if (!Sortable.active && !awaitingDragStarted) {
        if (fallbackTolerance && Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) < fallbackTolerance) {
          return;
        }
        this._onDragStart(evt, true);
      }
      if (ghostEl) {
        if (ghostMatrix) {
          ghostMatrix.e += dx - (lastDx || 0);
          ghostMatrix.f += dy - (lastDy || 0);
        } else {
          ghostMatrix = {
            a: 1,
            b: 0,
            c: 0,
            d: 1,
            e: dx,
            f: dy
          };
        }
        var cssMatrix = "matrix(".concat(ghostMatrix.a, ",").concat(ghostMatrix.b, ",").concat(ghostMatrix.c, ",").concat(ghostMatrix.d, ",").concat(ghostMatrix.e, ",").concat(ghostMatrix.f, ")");
        css(ghostEl, "webkitTransform", cssMatrix);
        css(ghostEl, "mozTransform", cssMatrix);
        css(ghostEl, "msTransform", cssMatrix);
        css(ghostEl, "transform", cssMatrix);
        lastDx = dx;
        lastDy = dy;
        touchEvt = touch;
      }
      evt.cancelable && evt.preventDefault();
    }
  },
  _appendGhost: function _appendGhost() {
    if (!ghostEl) {
      var container = this.options.fallbackOnBody ? document.body : rootEl, rect = getRect(dragEl, true, PositionGhostAbsolutely, true, container), options = this.options;
      if (PositionGhostAbsolutely) {
        ghostRelativeParent = container;
        while (css(ghostRelativeParent, "position") === "static" && css(ghostRelativeParent, "transform") === "none" && ghostRelativeParent !== document) {
          ghostRelativeParent = ghostRelativeParent.parentNode;
        }
        if (ghostRelativeParent !== document.body && ghostRelativeParent !== document.documentElement) {
          if (ghostRelativeParent === document)
            ghostRelativeParent = getWindowScrollingElement();
          rect.top += ghostRelativeParent.scrollTop;
          rect.left += ghostRelativeParent.scrollLeft;
        } else {
          ghostRelativeParent = getWindowScrollingElement();
        }
        ghostRelativeParentInitialScroll = getRelativeScrollOffset(ghostRelativeParent);
      }
      ghostEl = dragEl.cloneNode(true);
      toggleClass(ghostEl, options.ghostClass, false);
      toggleClass(ghostEl, options.fallbackClass, true);
      toggleClass(ghostEl, options.dragClass, true);
      css(ghostEl, "transition", "");
      css(ghostEl, "transform", "");
      css(ghostEl, "box-sizing", "border-box");
      css(ghostEl, "margin", 0);
      css(ghostEl, "top", rect.top);
      css(ghostEl, "left", rect.left);
      css(ghostEl, "width", rect.width);
      css(ghostEl, "height", rect.height);
      css(ghostEl, "opacity", "0.8");
      css(ghostEl, "position", PositionGhostAbsolutely ? "absolute" : "fixed");
      css(ghostEl, "zIndex", "100000");
      css(ghostEl, "pointerEvents", "none");
      Sortable.ghost = ghostEl;
      container.appendChild(ghostEl);
      css(ghostEl, "transform-origin", tapDistanceLeft / parseInt(ghostEl.style.width) * 100 + "% " + tapDistanceTop / parseInt(ghostEl.style.height) * 100 + "%");
    }
  },
  _onDragStart: function _onDragStart(evt, fallback) {
    var _this = this;
    var dataTransfer = evt.dataTransfer;
    var options = _this.options;
    pluginEvent2("dragStart", this, {
      evt
    });
    if (Sortable.eventCanceled) {
      this._onDrop();
      return;
    }
    pluginEvent2("setupClone", this);
    if (!Sortable.eventCanceled) {
      cloneEl = clone$2(dragEl);
      cloneEl.draggable = false;
      cloneEl.style["will-change"] = "";
      this._hideClone();
      toggleClass(cloneEl, this.options.chosenClass, false);
      Sortable.clone = cloneEl;
    }
    _this.cloneId = _nextTick(function() {
      pluginEvent2("clone", _this);
      if (Sortable.eventCanceled)
        return;
      if (!_this.options.removeCloneOnHide) {
        rootEl.insertBefore(cloneEl, dragEl);
      }
      _this._hideClone();
      _dispatchEvent({
        sortable: _this,
        name: "clone"
      });
    });
    !fallback && toggleClass(dragEl, options.dragClass, true);
    if (fallback) {
      ignoreNextClick = true;
      _this._loopId = setInterval(_this._emulateDragOver, 50);
    } else {
      off(document, "mouseup", _this._onDrop);
      off(document, "touchend", _this._onDrop);
      off(document, "touchcancel", _this._onDrop);
      if (dataTransfer) {
        dataTransfer.effectAllowed = "move";
        options.setData && options.setData.call(_this, dataTransfer, dragEl);
      }
      on(document, "drop", _this);
      css(dragEl, "transform", "translateZ(0)");
    }
    awaitingDragStarted = true;
    _this._dragStartId = _nextTick(_this._dragStarted.bind(_this, fallback, evt));
    on(document, "selectstart", _this);
    moved = true;
    if (Safari) {
      css(document.body, "user-select", "none");
    }
  },
  _onDragOver: function _onDragOver(evt) {
    var el = this.el, target = evt.target, dragRect, targetRect, revert, options = this.options, group = options.group, activeSortable = Sortable.active, isOwner = activeGroup === group, canSort = options.sort, fromSortable = putSortable || activeSortable, vertical, _this = this, completedFired = false;
    if (_silent)
      return;
    function dragOverEvent(name, extra) {
      pluginEvent2(name, _this, _objectSpread2({
        evt,
        isOwner,
        axis: vertical ? "vertical" : "horizontal",
        revert,
        dragRect,
        targetRect,
        canSort,
        fromSortable,
        target,
        completed,
        onMove: function onMove(target2, after2) {
          return _onMove(rootEl, el, dragEl, dragRect, target2, getRect(target2), evt, after2);
        },
        changed
      }, extra));
    }
    function capture() {
      dragOverEvent("dragOverAnimationCapture");
      _this.captureAnimationState();
      if (_this !== fromSortable) {
        fromSortable.captureAnimationState();
      }
    }
    function completed(insertion) {
      dragOverEvent("dragOverCompleted", {
        insertion
      });
      if (insertion) {
        if (isOwner) {
          activeSortable._hideClone();
        } else {
          activeSortable._showClone(_this);
        }
        if (_this !== fromSortable) {
          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : activeSortable.options.ghostClass, false);
          toggleClass(dragEl, options.ghostClass, true);
        }
        if (putSortable !== _this && _this !== Sortable.active) {
          putSortable = _this;
        } else if (_this === Sortable.active && putSortable) {
          putSortable = null;
        }
        if (fromSortable === _this) {
          _this._ignoreWhileAnimating = target;
        }
        _this.animateAll(function() {
          dragOverEvent("dragOverAnimationComplete");
          _this._ignoreWhileAnimating = null;
        });
        if (_this !== fromSortable) {
          fromSortable.animateAll();
          fromSortable._ignoreWhileAnimating = null;
        }
      }
      if (target === dragEl && !dragEl.animated || target === el && !target.animated) {
        lastTarget = null;
      }
      if (!options.dragoverBubble && !evt.rootEl && target !== document) {
        dragEl.parentNode[expando]._isOutsideThisEl(evt.target);
        !insertion && nearestEmptyInsertDetectEvent(evt);
      }
      !options.dragoverBubble && evt.stopPropagation && evt.stopPropagation();
      return completedFired = true;
    }
    function changed() {
      newIndex = index(dragEl);
      newDraggableIndex = index(dragEl, options.draggable);
      _dispatchEvent({
        sortable: _this,
        name: "change",
        toEl: el,
        newIndex,
        newDraggableIndex,
        originalEvent: evt
      });
    }
    if (evt.preventDefault !== void 0) {
      evt.cancelable && evt.preventDefault();
    }
    target = closest(target, options.draggable, el, true);
    dragOverEvent("dragOver");
    if (Sortable.eventCanceled)
      return completedFired;
    if (dragEl.contains(evt.target) || target.animated && target.animatingX && target.animatingY || _this._ignoreWhileAnimating === target) {
      return completed(false);
    }
    ignoreNextClick = false;
    if (activeSortable && !options.disabled && (isOwner ? canSort || (revert = parentEl !== rootEl) : putSortable === this || (this.lastPutMode = activeGroup.checkPull(this, activeSortable, dragEl, evt)) && group.checkPut(this, activeSortable, dragEl, evt))) {
      vertical = this._getDirection(evt, target) === "vertical";
      dragRect = getRect(dragEl);
      dragOverEvent("dragOverValid");
      if (Sortable.eventCanceled)
        return completedFired;
      if (revert) {
        parentEl = rootEl;
        capture();
        this._hideClone();
        dragOverEvent("revert");
        if (!Sortable.eventCanceled) {
          if (nextEl) {
            rootEl.insertBefore(dragEl, nextEl);
          } else {
            rootEl.appendChild(dragEl);
          }
        }
        return completed(true);
      }
      var elLastChild = lastChild(el, options.draggable);
      if (!elLastChild || _ghostIsLast(evt, vertical, this) && !elLastChild.animated) {
        if (elLastChild === dragEl) {
          return completed(false);
        }
        if (elLastChild && el === evt.target) {
          target = elLastChild;
        }
        if (target) {
          targetRect = getRect(target);
        }
        if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, !!target) !== false) {
          capture();
          el.appendChild(dragEl);
          parentEl = el;
          changed();
          return completed(true);
        }
      } else if (elLastChild && _ghostIsFirst(evt, vertical, this)) {
        var firstChild = getChild(el, 0, options, true);
        if (firstChild === dragEl) {
          return completed(false);
        }
        target = firstChild;
        targetRect = getRect(target);
        if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, false) !== false) {
          capture();
          el.insertBefore(dragEl, firstChild);
          parentEl = el;
          changed();
          return completed(true);
        }
      } else if (target.parentNode === el) {
        targetRect = getRect(target);
        var direction = 0, targetBeforeFirstSwap, differentLevel = dragEl.parentNode !== el, differentRowCol = !_dragElInRowColumn(dragEl.animated && dragEl.toRect || dragRect, target.animated && target.toRect || targetRect, vertical), side1 = vertical ? "top" : "left", scrolledPastTop = isScrolledPast(target, "top", "top") || isScrolledPast(dragEl, "top", "top"), scrollBefore = scrolledPastTop ? scrolledPastTop.scrollTop : void 0;
        if (lastTarget !== target) {
          targetBeforeFirstSwap = targetRect[side1];
          pastFirstInvertThresh = false;
          isCircumstantialInvert = !differentRowCol && options.invertSwap || differentLevel;
        }
        direction = _getSwapDirection(evt, target, targetRect, vertical, differentRowCol ? 1 : options.swapThreshold, options.invertedSwapThreshold == null ? options.swapThreshold : options.invertedSwapThreshold, isCircumstantialInvert, lastTarget === target);
        var sibling;
        if (direction !== 0) {
          var dragIndex = index(dragEl);
          do {
            dragIndex -= direction;
            sibling = parentEl.children[dragIndex];
          } while (sibling && (css(sibling, "display") === "none" || sibling === ghostEl));
        }
        if (direction === 0 || sibling === target) {
          return completed(false);
        }
        lastTarget = target;
        lastDirection = direction;
        var nextSibling = target.nextElementSibling, after = false;
        after = direction === 1;
        var moveVector = _onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, after);
        if (moveVector !== false) {
          if (moveVector === 1 || moveVector === -1) {
            after = moveVector === 1;
          }
          _silent = true;
          setTimeout(_unsilent, 30);
          capture();
          if (after && !nextSibling) {
            el.appendChild(dragEl);
          } else {
            target.parentNode.insertBefore(dragEl, after ? nextSibling : target);
          }
          if (scrolledPastTop) {
            scrollBy(scrolledPastTop, 0, scrollBefore - scrolledPastTop.scrollTop);
          }
          parentEl = dragEl.parentNode;
          if (targetBeforeFirstSwap !== void 0 && !isCircumstantialInvert) {
            targetMoveDistance = Math.abs(targetBeforeFirstSwap - getRect(target)[side1]);
          }
          changed();
          return completed(true);
        }
      }
      if (el.contains(dragEl)) {
        return completed(false);
      }
    }
    return false;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function _offMoveEvents() {
    off(document, "mousemove", this._onTouchMove);
    off(document, "touchmove", this._onTouchMove);
    off(document, "pointermove", this._onTouchMove);
    off(document, "dragover", nearestEmptyInsertDetectEvent);
    off(document, "mousemove", nearestEmptyInsertDetectEvent);
    off(document, "touchmove", nearestEmptyInsertDetectEvent);
  },
  _offUpEvents: function _offUpEvents() {
    var ownerDocument = this.el.ownerDocument;
    off(ownerDocument, "mouseup", this._onDrop);
    off(ownerDocument, "touchend", this._onDrop);
    off(ownerDocument, "pointerup", this._onDrop);
    off(ownerDocument, "touchcancel", this._onDrop);
    off(document, "selectstart", this);
  },
  _onDrop: function _onDrop(evt) {
    var el = this.el, options = this.options;
    newIndex = index(dragEl);
    newDraggableIndex = index(dragEl, options.draggable);
    pluginEvent2("drop", this, {
      evt
    });
    parentEl = dragEl && dragEl.parentNode;
    newIndex = index(dragEl);
    newDraggableIndex = index(dragEl, options.draggable);
    if (Sortable.eventCanceled) {
      this._nulling();
      return;
    }
    awaitingDragStarted = false;
    isCircumstantialInvert = false;
    pastFirstInvertThresh = false;
    clearInterval(this._loopId);
    clearTimeout(this._dragStartTimer);
    _cancelNextTick(this.cloneId);
    _cancelNextTick(this._dragStartId);
    if (this.nativeDraggable) {
      off(document, "drop", this);
      off(el, "dragstart", this._onDragStart);
    }
    this._offMoveEvents();
    this._offUpEvents();
    if (Safari) {
      css(document.body, "user-select", "");
    }
    css(dragEl, "transform", "");
    if (evt) {
      if (moved) {
        evt.cancelable && evt.preventDefault();
        !options.dropBubble && evt.stopPropagation();
      }
      ghostEl && ghostEl.parentNode && ghostEl.parentNode.removeChild(ghostEl);
      if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== "clone") {
        cloneEl && cloneEl.parentNode && cloneEl.parentNode.removeChild(cloneEl);
      }
      if (dragEl) {
        if (this.nativeDraggable) {
          off(dragEl, "dragend", this);
        }
        _disableDraggable(dragEl);
        dragEl.style["will-change"] = "";
        if (moved && !awaitingDragStarted) {
          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : this.options.ghostClass, false);
        }
        toggleClass(dragEl, this.options.chosenClass, false);
        _dispatchEvent({
          sortable: this,
          name: "unchoose",
          toEl: parentEl,
          newIndex: null,
          newDraggableIndex: null,
          originalEvent: evt
        });
        if (rootEl !== parentEl) {
          if (newIndex >= 0) {
            _dispatchEvent({
              rootEl: parentEl,
              name: "add",
              toEl: parentEl,
              fromEl: rootEl,
              originalEvent: evt
            });
            _dispatchEvent({
              sortable: this,
              name: "remove",
              toEl: parentEl,
              originalEvent: evt
            });
            _dispatchEvent({
              rootEl: parentEl,
              name: "sort",
              toEl: parentEl,
              fromEl: rootEl,
              originalEvent: evt
            });
            _dispatchEvent({
              sortable: this,
              name: "sort",
              toEl: parentEl,
              originalEvent: evt
            });
          }
          putSortable && putSortable.save();
        } else {
          if (newIndex !== oldIndex) {
            if (newIndex >= 0) {
              _dispatchEvent({
                sortable: this,
                name: "update",
                toEl: parentEl,
                originalEvent: evt
              });
              _dispatchEvent({
                sortable: this,
                name: "sort",
                toEl: parentEl,
                originalEvent: evt
              });
            }
          }
        }
        if (Sortable.active) {
          if (newIndex == null || newIndex === -1) {
            newIndex = oldIndex;
            newDraggableIndex = oldDraggableIndex;
          }
          _dispatchEvent({
            sortable: this,
            name: "end",
            toEl: parentEl,
            originalEvent: evt
          });
          this.save();
        }
      }
    }
    this._nulling();
  },
  _nulling: function _nulling() {
    pluginEvent2("nulling", this);
    rootEl = dragEl = parentEl = ghostEl = nextEl = cloneEl = lastDownEl = cloneHidden = tapEvt = touchEvt = moved = newIndex = newDraggableIndex = oldIndex = oldDraggableIndex = lastTarget = lastDirection = putSortable = activeGroup = Sortable.dragged = Sortable.ghost = Sortable.clone = Sortable.active = null;
    savedInputChecked.forEach(function(el) {
      el.checked = true;
    });
    savedInputChecked.length = lastDx = lastDy = 0;
  },
  handleEvent: function handleEvent(evt) {
    switch (evt.type) {
      case "drop":
      case "dragend":
        this._onDrop(evt);
        break;
      case "dragenter":
      case "dragover":
        if (dragEl) {
          this._onDragOver(evt);
          _globalDragOver(evt);
        }
        break;
      case "selectstart":
        evt.preventDefault();
        break;
    }
  },
  toArray: function toArray() {
    var order = [], el, children = this.el.children, i2 = 0, n2 = children.length, options = this.options;
    for (; i2 < n2; i2++) {
      el = children[i2];
      if (closest(el, options.draggable, this.el, false)) {
        order.push(el.getAttribute(options.dataIdAttr) || _generateId(el));
      }
    }
    return order;
  },
  sort: function sort(order, useAnimation) {
    var items = {}, rootEl2 = this.el;
    this.toArray().forEach(function(id, i2) {
      var el = rootEl2.children[i2];
      if (closest(el, this.options.draggable, rootEl2, false)) {
        items[id] = el;
      }
    }, this);
    useAnimation && this.captureAnimationState();
    order.forEach(function(id) {
      if (items[id]) {
        rootEl2.removeChild(items[id]);
        rootEl2.appendChild(items[id]);
      }
    });
    useAnimation && this.animateAll();
  },
  save: function save() {
    var store = this.options.store;
    store && store.set && store.set(this);
  },
  closest: function closest$1(el, selector) {
    return closest(el, selector || this.options.draggable, this.el, false);
  },
  option: function option(name, value) {
    var options = this.options;
    if (value === void 0) {
      return options[name];
    } else {
      var modifiedValue = PluginManager.modifyOption(this, name, value);
      if (typeof modifiedValue !== "undefined") {
        options[name] = modifiedValue;
      } else {
        options[name] = value;
      }
      if (name === "group") {
        _prepareGroup(options);
      }
    }
  },
  destroy: function destroy() {
    pluginEvent2("destroy", this);
    var el = this.el;
    el[expando] = null;
    off(el, "mousedown", this._onTapStart);
    off(el, "touchstart", this._onTapStart);
    off(el, "pointerdown", this._onTapStart);
    if (this.nativeDraggable) {
      off(el, "dragover", this);
      off(el, "dragenter", this);
    }
    Array.prototype.forEach.call(el.querySelectorAll("[draggable]"), function(el2) {
      el2.removeAttribute("draggable");
    });
    this._onDrop();
    this._disableDelayedDragEvents();
    sortables.splice(sortables.indexOf(this.el), 1);
    this.el = el = null;
  },
  _hideClone: function _hideClone() {
    if (!cloneHidden) {
      pluginEvent2("hideClone", this);
      if (Sortable.eventCanceled)
        return;
      css(cloneEl, "display", "none");
      if (this.options.removeCloneOnHide && cloneEl.parentNode) {
        cloneEl.parentNode.removeChild(cloneEl);
      }
      cloneHidden = true;
    }
  },
  _showClone: function _showClone(putSortable2) {
    if (putSortable2.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (cloneHidden) {
      pluginEvent2("showClone", this);
      if (Sortable.eventCanceled)
        return;
      if (dragEl.parentNode == rootEl && !this.options.group.revertClone) {
        rootEl.insertBefore(cloneEl, dragEl);
      } else if (nextEl) {
        rootEl.insertBefore(cloneEl, nextEl);
      } else {
        rootEl.appendChild(cloneEl);
      }
      if (this.options.group.revertClone) {
        this.animate(dragEl, cloneEl);
      }
      css(cloneEl, "display", "");
      cloneHidden = false;
    }
  }
};
function _globalDragOver(evt) {
  if (evt.dataTransfer) {
    evt.dataTransfer.dropEffect = "move";
  }
  evt.cancelable && evt.preventDefault();
}
function _onMove(fromEl, toEl, dragEl2, dragRect, targetEl, targetRect, originalEvent, willInsertAfter) {
  var evt, sortable = fromEl[expando], onMoveFn = sortable.options.onMove, retVal;
  if (window.CustomEvent && !IE11OrLess && !Edge) {
    evt = new CustomEvent("move", {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent("Event");
    evt.initEvent("move", true, true);
  }
  evt.to = toEl;
  evt.from = fromEl;
  evt.dragged = dragEl2;
  evt.draggedRect = dragRect;
  evt.related = targetEl || toEl;
  evt.relatedRect = targetRect || getRect(toEl);
  evt.willInsertAfter = willInsertAfter;
  evt.originalEvent = originalEvent;
  fromEl.dispatchEvent(evt);
  if (onMoveFn) {
    retVal = onMoveFn.call(sortable, evt, originalEvent);
  }
  return retVal;
}
function _disableDraggable(el) {
  el.draggable = false;
}
function _unsilent() {
  _silent = false;
}
function _ghostIsFirst(evt, vertical, sortable) {
  var rect = getRect(getChild(sortable.el, 0, sortable.options, true));
  var spacer = 10;
  return vertical ? evt.clientX < rect.left - spacer || evt.clientY < rect.top && evt.clientX < rect.right : evt.clientY < rect.top - spacer || evt.clientY < rect.bottom && evt.clientX < rect.left;
}
function _ghostIsLast(evt, vertical, sortable) {
  var rect = getRect(lastChild(sortable.el, sortable.options.draggable));
  var spacer = 10;
  return vertical ? evt.clientX > rect.right + spacer || evt.clientX <= rect.right && evt.clientY > rect.bottom && evt.clientX >= rect.left : evt.clientX > rect.right && evt.clientY > rect.top || evt.clientX <= rect.right && evt.clientY > rect.bottom + spacer;
}
function _getSwapDirection(evt, target, targetRect, vertical, swapThreshold, invertedSwapThreshold, invertSwap, isLastTarget) {
  var mouseOnAxis = vertical ? evt.clientY : evt.clientX, targetLength = vertical ? targetRect.height : targetRect.width, targetS1 = vertical ? targetRect.top : targetRect.left, targetS2 = vertical ? targetRect.bottom : targetRect.right, invert = false;
  if (!invertSwap) {
    if (isLastTarget && targetMoveDistance < targetLength * swapThreshold) {
      if (!pastFirstInvertThresh && (lastDirection === 1 ? mouseOnAxis > targetS1 + targetLength * invertedSwapThreshold / 2 : mouseOnAxis < targetS2 - targetLength * invertedSwapThreshold / 2)) {
        pastFirstInvertThresh = true;
      }
      if (!pastFirstInvertThresh) {
        if (lastDirection === 1 ? mouseOnAxis < targetS1 + targetMoveDistance : mouseOnAxis > targetS2 - targetMoveDistance) {
          return -lastDirection;
        }
      } else {
        invert = true;
      }
    } else {
      if (mouseOnAxis > targetS1 + targetLength * (1 - swapThreshold) / 2 && mouseOnAxis < targetS2 - targetLength * (1 - swapThreshold) / 2) {
        return _getInsertDirection(target);
      }
    }
  }
  invert = invert || invertSwap;
  if (invert) {
    if (mouseOnAxis < targetS1 + targetLength * invertedSwapThreshold / 2 || mouseOnAxis > targetS2 - targetLength * invertedSwapThreshold / 2) {
      return mouseOnAxis > targetS1 + targetLength / 2 ? 1 : -1;
    }
  }
  return 0;
}
function _getInsertDirection(target) {
  if (index(dragEl) < index(target)) {
    return 1;
  } else {
    return -1;
  }
}
function _generateId(el) {
  var str = el.tagName + el.className + el.src + el.href + el.textContent, i2 = str.length, sum = 0;
  while (i2--) {
    sum += str.charCodeAt(i2);
  }
  return sum.toString(36);
}
function _saveInputCheckedState(root2) {
  savedInputChecked.length = 0;
  var inputs = root2.getElementsByTagName("input");
  var idx = inputs.length;
  while (idx--) {
    var el = inputs[idx];
    el.checked && savedInputChecked.push(el);
  }
}
function _nextTick(fn) {
  return setTimeout(fn, 0);
}
function _cancelNextTick(id) {
  return clearTimeout(id);
}
if (documentExists) {
  on(document, "touchmove", function(evt) {
    if ((Sortable.active || awaitingDragStarted) && evt.cancelable) {
      evt.preventDefault();
    }
  });
}
Sortable.utils = {
  on,
  off,
  css,
  find,
  is: function is(el, selector) {
    return !!closest(el, selector, el, false);
  },
  extend,
  throttle,
  closest,
  toggleClass,
  clone: clone$2,
  index,
  nextTick: _nextTick,
  cancelNextTick: _cancelNextTick,
  detectDirection: _detectDirection,
  getChild
};
Sortable.get = function(element) {
  return element[expando];
};
Sortable.mount = function() {
  for (var _len = arguments.length, plugins2 = new Array(_len), _key = 0; _key < _len; _key++) {
    plugins2[_key] = arguments[_key];
  }
  if (plugins2[0].constructor === Array)
    plugins2 = plugins2[0];
  plugins2.forEach(function(plugin) {
    if (!plugin.prototype || !plugin.prototype.constructor) {
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(plugin));
    }
    if (plugin.utils)
      Sortable.utils = _objectSpread2(_objectSpread2({}, Sortable.utils), plugin.utils);
    PluginManager.mount(plugin);
  });
};
Sortable.create = function(el, options) {
  return new Sortable(el, options);
};
Sortable.version = version;
var autoScrolls = [], scrollEl, scrollRootEl, scrolling = false, lastAutoScrollX, lastAutoScrollY, touchEvt$1, pointerElemChangedInterval;
function AutoScrollPlugin() {
  function AutoScroll() {
    this.defaults = {
      scroll: true,
      forceAutoScrollFallback: false,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: true
    };
    for (var fn in this) {
      if (fn.charAt(0) === "_" && typeof this[fn] === "function") {
        this[fn] = this[fn].bind(this);
      }
    }
  }
  AutoScroll.prototype = {
    dragStarted: function dragStarted(_ref) {
      var originalEvent = _ref.originalEvent;
      if (this.sortable.nativeDraggable) {
        on(document, "dragover", this._handleAutoScroll);
      } else {
        if (this.options.supportPointer) {
          on(document, "pointermove", this._handleFallbackAutoScroll);
        } else if (originalEvent.touches) {
          on(document, "touchmove", this._handleFallbackAutoScroll);
        } else {
          on(document, "mousemove", this._handleFallbackAutoScroll);
        }
      }
    },
    dragOverCompleted: function dragOverCompleted(_ref2) {
      var originalEvent = _ref2.originalEvent;
      if (!this.options.dragOverBubble && !originalEvent.rootEl) {
        this._handleAutoScroll(originalEvent);
      }
    },
    drop: function drop3() {
      if (this.sortable.nativeDraggable) {
        off(document, "dragover", this._handleAutoScroll);
      } else {
        off(document, "pointermove", this._handleFallbackAutoScroll);
        off(document, "touchmove", this._handleFallbackAutoScroll);
        off(document, "mousemove", this._handleFallbackAutoScroll);
      }
      clearPointerElemChangedInterval();
      clearAutoScrolls();
      cancelThrottle();
    },
    nulling: function nulling() {
      touchEvt$1 = scrollRootEl = scrollEl = scrolling = pointerElemChangedInterval = lastAutoScrollX = lastAutoScrollY = null;
      autoScrolls.length = 0;
    },
    _handleFallbackAutoScroll: function _handleFallbackAutoScroll(evt) {
      this._handleAutoScroll(evt, true);
    },
    _handleAutoScroll: function _handleAutoScroll(evt, fallback) {
      var _this = this;
      var x = (evt.touches ? evt.touches[0] : evt).clientX, y = (evt.touches ? evt.touches[0] : evt).clientY, elem = document.elementFromPoint(x, y);
      touchEvt$1 = evt;
      if (fallback || this.options.forceAutoScrollFallback || Edge || IE11OrLess || Safari) {
        autoScroll(evt, this.options, elem, fallback);
        var ogElemScroller = getParentAutoScrollElement(elem, true);
        if (scrolling && (!pointerElemChangedInterval || x !== lastAutoScrollX || y !== lastAutoScrollY)) {
          pointerElemChangedInterval && clearPointerElemChangedInterval();
          pointerElemChangedInterval = setInterval(function() {
            var newElem = getParentAutoScrollElement(document.elementFromPoint(x, y), true);
            if (newElem !== ogElemScroller) {
              ogElemScroller = newElem;
              clearAutoScrolls();
            }
            autoScroll(evt, _this.options, newElem, fallback);
          }, 10);
          lastAutoScrollX = x;
          lastAutoScrollY = y;
        }
      } else {
        if (!this.options.bubbleScroll || getParentAutoScrollElement(elem, true) === getWindowScrollingElement()) {
          clearAutoScrolls();
          return;
        }
        autoScroll(evt, this.options, getParentAutoScrollElement(elem, false), false);
      }
    }
  };
  return _extends(AutoScroll, {
    pluginName: "scroll",
    initializeByDefault: true
  });
}
function clearAutoScrolls() {
  autoScrolls.forEach(function(autoScroll2) {
    clearInterval(autoScroll2.pid);
  });
  autoScrolls = [];
}
function clearPointerElemChangedInterval() {
  clearInterval(pointerElemChangedInterval);
}
var autoScroll = throttle(function(evt, options, rootEl2, isFallback) {
  if (!options.scroll)
    return;
  var x = (evt.touches ? evt.touches[0] : evt).clientX, y = (evt.touches ? evt.touches[0] : evt).clientY, sens = options.scrollSensitivity, speed = options.scrollSpeed, winScroller = getWindowScrollingElement();
  var scrollThisInstance = false, scrollCustomFn;
  if (scrollRootEl !== rootEl2) {
    scrollRootEl = rootEl2;
    clearAutoScrolls();
    scrollEl = options.scroll;
    scrollCustomFn = options.scrollFn;
    if (scrollEl === true) {
      scrollEl = getParentAutoScrollElement(rootEl2, true);
    }
  }
  var layersOut = 0;
  var currentParent = scrollEl;
  do {
    var el = currentParent, rect = getRect(el), top = rect.top, bottom = rect.bottom, left = rect.left, right = rect.right, width = rect.width, height = rect.height, canScrollX = void 0, canScrollY = void 0, scrollWidth = el.scrollWidth, scrollHeight = el.scrollHeight, elCSS = css(el), scrollPosX = el.scrollLeft, scrollPosY = el.scrollTop;
    if (el === winScroller) {
      canScrollX = width < scrollWidth && (elCSS.overflowX === "auto" || elCSS.overflowX === "scroll" || elCSS.overflowX === "visible");
      canScrollY = height < scrollHeight && (elCSS.overflowY === "auto" || elCSS.overflowY === "scroll" || elCSS.overflowY === "visible");
    } else {
      canScrollX = width < scrollWidth && (elCSS.overflowX === "auto" || elCSS.overflowX === "scroll");
      canScrollY = height < scrollHeight && (elCSS.overflowY === "auto" || elCSS.overflowY === "scroll");
    }
    var vx = canScrollX && (Math.abs(right - x) <= sens && scrollPosX + width < scrollWidth) - (Math.abs(left - x) <= sens && !!scrollPosX);
    var vy = canScrollY && (Math.abs(bottom - y) <= sens && scrollPosY + height < scrollHeight) - (Math.abs(top - y) <= sens && !!scrollPosY);
    if (!autoScrolls[layersOut]) {
      for (var i2 = 0; i2 <= layersOut; i2++) {
        if (!autoScrolls[i2]) {
          autoScrolls[i2] = {};
        }
      }
    }
    if (autoScrolls[layersOut].vx != vx || autoScrolls[layersOut].vy != vy || autoScrolls[layersOut].el !== el) {
      autoScrolls[layersOut].el = el;
      autoScrolls[layersOut].vx = vx;
      autoScrolls[layersOut].vy = vy;
      clearInterval(autoScrolls[layersOut].pid);
      if (vx != 0 || vy != 0) {
        scrollThisInstance = true;
        autoScrolls[layersOut].pid = setInterval(function() {
          if (isFallback && this.layer === 0) {
            Sortable.active._onTouchMove(touchEvt$1);
          }
          var scrollOffsetY = autoScrolls[this.layer].vy ? autoScrolls[this.layer].vy * speed : 0;
          var scrollOffsetX = autoScrolls[this.layer].vx ? autoScrolls[this.layer].vx * speed : 0;
          if (typeof scrollCustomFn === "function") {
            if (scrollCustomFn.call(Sortable.dragged.parentNode[expando], scrollOffsetX, scrollOffsetY, evt, touchEvt$1, autoScrolls[this.layer].el) !== "continue") {
              return;
            }
          }
          scrollBy(autoScrolls[this.layer].el, scrollOffsetX, scrollOffsetY);
        }.bind({
          layer: layersOut
        }), 24);
      }
    }
    layersOut++;
  } while (options.bubbleScroll && currentParent !== winScroller && (currentParent = getParentAutoScrollElement(currentParent, false)));
  scrolling = scrollThisInstance;
}, 30);
var drop = function drop2(_ref) {
  var originalEvent = _ref.originalEvent, putSortable2 = _ref.putSortable, dragEl2 = _ref.dragEl, activeSortable = _ref.activeSortable, dispatchSortableEvent = _ref.dispatchSortableEvent, hideGhostForTarget = _ref.hideGhostForTarget, unhideGhostForTarget = _ref.unhideGhostForTarget;
  if (!originalEvent)
    return;
  var toSortable = putSortable2 || activeSortable;
  hideGhostForTarget();
  var touch = originalEvent.changedTouches && originalEvent.changedTouches.length ? originalEvent.changedTouches[0] : originalEvent;
  var target = document.elementFromPoint(touch.clientX, touch.clientY);
  unhideGhostForTarget();
  if (toSortable && !toSortable.el.contains(target)) {
    dispatchSortableEvent("spill");
    this.onSpill({
      dragEl: dragEl2,
      putSortable: putSortable2
    });
  }
};
function Revert() {
}
Revert.prototype = {
  startIndex: null,
  dragStart: function dragStart(_ref2) {
    var oldDraggableIndex2 = _ref2.oldDraggableIndex;
    this.startIndex = oldDraggableIndex2;
  },
  onSpill: function onSpill(_ref3) {
    var dragEl2 = _ref3.dragEl, putSortable2 = _ref3.putSortable;
    this.sortable.captureAnimationState();
    if (putSortable2) {
      putSortable2.captureAnimationState();
    }
    var nextSibling = getChild(this.sortable.el, this.startIndex, this.options);
    if (nextSibling) {
      this.sortable.el.insertBefore(dragEl2, nextSibling);
    } else {
      this.sortable.el.appendChild(dragEl2);
    }
    this.sortable.animateAll();
    if (putSortable2) {
      putSortable2.animateAll();
    }
  },
  drop
};
_extends(Revert, {
  pluginName: "revertOnSpill"
});
function Remove() {
}
Remove.prototype = {
  onSpill: function onSpill2(_ref4) {
    var dragEl2 = _ref4.dragEl, putSortable2 = _ref4.putSortable;
    var parentSortable = putSortable2 || this.sortable;
    parentSortable.captureAnimationState();
    dragEl2.parentNode && dragEl2.parentNode.removeChild(dragEl2);
    parentSortable.animateAll();
  },
  drop
};
_extends(Remove, {
  pluginName: "removeOnSpill"
});
Sortable.mount(new AutoScrollPlugin());
Sortable.mount(Remove, Revert);
function removeNode(node) {
  if (node.parentElement !== null) {
    node.parentElement.removeChild(node);
  }
}
function insertNodeAt(fatherNode, node, position) {
  const refNode = position === 0 ? fatherNode.children[0] : fatherNode.children[position - 1].nextSibling;
  fatherNode.insertBefore(node, refNode);
}
function getConsole() {
  if (typeof window !== "undefined") {
    return window.console;
  }
  return global.console;
}
const console$1 = getConsole();
function cached(fn) {
  const cache = /* @__PURE__ */ Object.create(null);
  return function cachedFn(str) {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}
const regex = /-(\w)/g;
const camelize = cached((str) => str.replace(regex, (_, c2) => c2.toUpperCase()));
const manageAndEmit$1 = ["Start", "Add", "Remove", "Update", "End"];
const emit$1 = ["Choose", "Unchoose", "Sort", "Filter", "Clone"];
const manage$1 = ["Move"];
const eventHandlerNames = [manage$1, manageAndEmit$1, emit$1].flatMap((events2) => events2).map((evt) => `on${evt}`);
const events = {
  manage: manage$1,
  manageAndEmit: manageAndEmit$1,
  emit: emit$1
};
function isReadOnly(eventName) {
  return eventHandlerNames.indexOf(eventName) !== -1;
}
const tags = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "math",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rb",
  "rp",
  "rt",
  "rtc",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "slot",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "svg",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr"
];
function isHtmlTag(name) {
  return tags.includes(name);
}
function isTransition(name) {
  return ["transition-group", "TransitionGroup"].includes(name);
}
function isHtmlAttribute(value) {
  return ["id", "class", "role", "style"].includes(value) || value.startsWith("data-") || value.startsWith("aria-") || value.startsWith("on");
}
function project(entries) {
  return entries.reduce((res, [key, value]) => {
    res[key] = value;
    return res;
  }, {});
}
function getComponentAttributes({ $attrs, componentData = {} }) {
  const attributes = project(Object.entries($attrs).filter(([key, _]) => isHtmlAttribute(key)));
  return __spreadValues(__spreadValues({}, attributes), componentData);
}
function createSortableOption({ $attrs, callBackBuilder }) {
  const options = project(getValidSortableEntries($attrs));
  Object.entries(callBackBuilder).forEach(([eventType, eventBuilder]) => {
    events[eventType].forEach((event) => {
      options[`on${event}`] = eventBuilder(event);
    });
  });
  const draggable = `[data-draggable]${options.draggable || ""}`;
  return __spreadProps(__spreadValues({}, options), {
    draggable
  });
}
function getValidSortableEntries(value) {
  return Object.entries(value).filter(([key, _]) => !isHtmlAttribute(key)).map(([key, value2]) => [camelize(key), value2]).filter(([key, _]) => !isReadOnly(key));
}
const getHtmlElementFromNode = ({ el }) => el;
const addContext = (domElement, context) => domElement.__draggable_context = context;
const getContext = (domElement) => domElement.__draggable_context;
class ComponentStructure {
  constructor({
    nodes: { header, default: defaultNodes, footer },
    root: root2,
    realList
  }) {
    this.defaultNodes = defaultNodes;
    this.children = [...header, ...defaultNodes, ...footer];
    this.externalComponent = root2.externalComponent;
    this.rootTransition = root2.transition;
    this.tag = root2.tag;
    this.realList = realList;
  }
  get _isRootComponent() {
    return this.externalComponent || this.rootTransition;
  }
  render(h2, attributes) {
    const { tag, children, _isRootComponent } = this;
    const option2 = !_isRootComponent ? children : { default: () => children };
    return h2(tag, attributes, option2);
  }
  updated() {
    const { defaultNodes, realList } = this;
    defaultNodes.forEach((node, index2) => {
      addContext(getHtmlElementFromNode(node), {
        element: realList[index2],
        index: index2
      });
    });
  }
  getUnderlyingVm(domElement) {
    return getContext(domElement);
  }
  getVmIndexFromDomIndex(domIndex, element) {
    const { defaultNodes } = this;
    const { length } = defaultNodes;
    const domChildren = element.children;
    const domElement = domChildren.item(domIndex);
    if (domElement === null) {
      return length;
    }
    const context = getContext(domElement);
    if (context) {
      return context.index;
    }
    if (length === 0) {
      return 0;
    }
    const firstDomListElement = getHtmlElementFromNode(defaultNodes[0]);
    const indexFirstDomListElement = [...domChildren].findIndex((element2) => element2 === firstDomListElement);
    return domIndex < indexFirstDomListElement ? 0 : length;
  }
}
function getSlot(slots, key) {
  const slotValue = slots[key];
  return slotValue ? slotValue() : [];
}
function computeNodes({ $slots, realList, getKey }) {
  const normalizedList = realList || [];
  const [header, footer] = ["header", "footer"].map((name) => getSlot($slots, name));
  const { item } = $slots;
  if (!item) {
    throw new Error("draggable element must have an item slot");
  }
  const defaultNodes = normalizedList.flatMap((element, index2) => item({ element, index: index2 }).map((node) => {
    node.key = getKey(element);
    node.props = __spreadProps(__spreadValues({}, node.props || {}), { "data-draggable": true });
    return node;
  }));
  if (defaultNodes.length !== normalizedList.length) {
    throw new Error("Item slot must have only one child");
  }
  return {
    header,
    footer,
    default: defaultNodes
  };
}
function getRootInformation(tag) {
  const transition = isTransition(tag);
  const externalComponent = !isHtmlTag(tag) && !transition;
  return {
    transition,
    externalComponent,
    tag: externalComponent ? resolveComponent(tag) : transition ? TransitionGroup : tag
  };
}
function computeComponentStructure({ $slots, tag, realList, getKey }) {
  const nodes = computeNodes({ $slots, realList, getKey });
  const root2 = getRootInformation(tag);
  return new ComponentStructure({ nodes, root: root2, realList });
}
function emit(evtName, evtData) {
  nextTick(() => this.$emit(evtName.toLowerCase(), evtData));
}
function manage(evtName) {
  return (evtData, originalElement) => {
    if (this.realList !== null) {
      return this[`onDrag${evtName}`](evtData, originalElement);
    }
  };
}
function manageAndEmit(evtName) {
  const delegateCallBack = manage.call(this, evtName);
  return (evtData, originalElement) => {
    delegateCallBack.call(this, evtData, originalElement);
    emit.call(this, evtName, evtData);
  };
}
let draggingElement = null;
const props = {
  list: {
    type: Array,
    required: false,
    default: null
  },
  modelValue: {
    type: Array,
    required: false,
    default: null
  },
  itemKey: {
    type: [String, Function],
    required: true
  },
  clone: {
    type: Function,
    default: (original) => {
      return original;
    }
  },
  tag: {
    type: String,
    default: "div"
  },
  move: {
    type: Function,
    default: null
  },
  componentData: {
    type: Object,
    required: false,
    default: null
  }
};
const emits = [
  "update:modelValue",
  "change",
  ...[...events.manageAndEmit, ...events.emit].map((evt) => evt.toLowerCase())
];
const draggableComponent = defineComponent({
  name: "draggable",
  inheritAttrs: false,
  props,
  emits,
  data() {
    return {
      error: false
    };
  },
  render() {
    try {
      this.error = false;
      const { $slots, $attrs, tag, componentData, realList, getKey } = this;
      const componentStructure = computeComponentStructure({
        $slots,
        tag,
        realList,
        getKey
      });
      this.componentStructure = componentStructure;
      const attributes = getComponentAttributes({ $attrs, componentData });
      return componentStructure.render(h, attributes);
    } catch (err) {
      this.error = true;
      return h("pre", { style: { color: "red" } }, err.stack);
    }
  },
  created() {
    if (this.list !== null && this.modelValue !== null) {
      console$1.error("modelValue and list props are mutually exclusive! Please set one or another.");
    }
  },
  mounted() {
    if (this.error) {
      return;
    }
    const { $attrs, $el, componentStructure } = this;
    componentStructure.updated();
    const sortableOptions = createSortableOption({
      $attrs,
      callBackBuilder: {
        manageAndEmit: (event) => manageAndEmit.call(this, event),
        emit: (event) => emit.bind(this, event),
        manage: (event) => manage.call(this, event)
      }
    });
    const targetDomElement = $el.nodeType === 1 ? $el : $el.parentElement;
    this._sortable = new Sortable(targetDomElement, sortableOptions);
    this.targetDomElement = targetDomElement;
    targetDomElement.__draggable_component__ = this;
  },
  updated() {
    this.componentStructure.updated();
  },
  beforeUnmount() {
    if (this._sortable !== void 0)
      this._sortable.destroy();
  },
  computed: {
    realList() {
      const { list } = this;
      return list ? list : this.modelValue;
    },
    getKey() {
      const { itemKey } = this;
      if (typeof itemKey === "function") {
        return itemKey;
      }
      return (element) => element[itemKey];
    }
  },
  watch: {
    $attrs: {
      handler(newOptionValue) {
        const { _sortable } = this;
        if (!_sortable)
          return;
        getValidSortableEntries(newOptionValue).forEach(([key, value]) => {
          _sortable.option(key, value);
        });
      },
      deep: true
    }
  },
  methods: {
    getUnderlyingVm(domElement) {
      return this.componentStructure.getUnderlyingVm(domElement) || null;
    },
    getUnderlyingPotencialDraggableComponent(htmElement) {
      return htmElement.__draggable_component__;
    },
    emitChanges(evt) {
      nextTick(() => this.$emit("change", evt));
    },
    alterList(onList) {
      if (this.list) {
        onList(this.list);
        return;
      }
      const newList = [...this.modelValue];
      onList(newList);
      this.$emit("update:modelValue", newList);
    },
    spliceList() {
      const spliceList = (list) => list.splice(...arguments);
      this.alterList(spliceList);
    },
    updatePosition(oldIndex2, newIndex2) {
      const updatePosition = (list) => list.splice(newIndex2, 0, list.splice(oldIndex2, 1)[0]);
      this.alterList(updatePosition);
    },
    getRelatedContextFromMoveEvent({ to, related }) {
      const component = this.getUnderlyingPotencialDraggableComponent(to);
      if (!component) {
        return { component };
      }
      const list = component.realList;
      const context = { list, component };
      if (to !== related && list) {
        const destination = component.getUnderlyingVm(related) || {};
        return __spreadValues(__spreadValues({}, destination), context);
      }
      return context;
    },
    getVmIndexFromDomIndex(domIndex) {
      return this.componentStructure.getVmIndexFromDomIndex(domIndex, this.targetDomElement);
    },
    onDragStart(evt) {
      this.context = this.getUnderlyingVm(evt.item);
      evt.item._underlying_vm_ = this.clone(this.context.element);
      draggingElement = evt.item;
    },
    onDragAdd(evt) {
      const element = evt.item._underlying_vm_;
      if (element === void 0) {
        return;
      }
      removeNode(evt.item);
      const newIndex2 = this.getVmIndexFromDomIndex(evt.newIndex);
      this.spliceList(newIndex2, 0, element);
      const added = { element, newIndex: newIndex2 };
      this.emitChanges({ added });
    },
    onDragRemove(evt) {
      insertNodeAt(this.$el, evt.item, evt.oldIndex);
      if (evt.pullMode === "clone") {
        removeNode(evt.clone);
        return;
      }
      const { index: oldIndex2, element } = this.context;
      this.spliceList(oldIndex2, 1);
      const removed = { element, oldIndex: oldIndex2 };
      this.emitChanges({ removed });
    },
    onDragUpdate(evt) {
      removeNode(evt.item);
      insertNodeAt(evt.from, evt.item, evt.oldIndex);
      const oldIndex2 = this.context.index;
      const newIndex2 = this.getVmIndexFromDomIndex(evt.newIndex);
      this.updatePosition(oldIndex2, newIndex2);
      const moved2 = { element: this.context.element, oldIndex: oldIndex2, newIndex: newIndex2 };
      this.emitChanges({ moved: moved2 });
    },
    computeFutureIndex(relatedContext, evt) {
      if (!relatedContext.element) {
        return 0;
      }
      const domChildren = [...evt.to.children].filter((el) => el.style["display"] !== "none");
      const currentDomIndex = domChildren.indexOf(evt.related);
      const currentIndex = relatedContext.component.getVmIndexFromDomIndex(currentDomIndex);
      const draggedInList = domChildren.indexOf(draggingElement) !== -1;
      return draggedInList || !evt.willInsertAfter ? currentIndex : currentIndex + 1;
    },
    onDragMove(evt, originalEvent) {
      const { move, realList } = this;
      if (!move || !realList) {
        return true;
      }
      const relatedContext = this.getRelatedContextFromMoveEvent(evt);
      const futureIndex = this.computeFutureIndex(relatedContext, evt);
      const draggedContext = __spreadProps(__spreadValues({}, this.context), {
        futureIndex
      });
      const sendEvent = __spreadProps(__spreadValues({}, evt), {
        relatedContext,
        draggedContext
      });
      return move(sendEvent, originalEvent);
    },
    onDragEnd() {
      draggingElement = null;
    }
  }
});
var contentSelect_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$F = {
  components: {
    Item,
    draggable: draggableComponent
  },
  props: {
    modelValue: {
      type: [Object, Array]
    }
  },
  mixins: [InputMixin],
  created() {
    this.value = this.cleanInput(this.value, true);
    this.dispatch();
  },
  methods: {
    clear() {
      this.model = void 0;
      this.touch();
    },
    canEdit(item) {
      var user = this.user;
      if (!user) {
        return false;
      }
      return this.$qik.access.canEditItem(user, item);
    },
    async edit(item) {
      var result = await this.$qik.global.edit(item, true).catch(function(err) {
      });
      for (var prop in result) {
        item[prop] = result[prop];
      }
    },
    open() {
      var self2 = this;
      self2.touch();
      self2.$qik.browse(this.field.referenceType, {
        field: self2.field,
        model: self2.multiValue ? self2.value : [self2.value].filter(Boolean),
        maximum: self2.field.maximum
      }).then(function(newSelection) {
        self2.model = self2.multiValue ? newSelection : newSelection[0];
      }).catch(function(err) {
        console.log("Error", err);
      });
    },
    cleanInput(val) {
      var self2 = this;
      if (self2.multiValue) {
        if (!val) {
          val = [];
        }
        if (!Array.isArray(val)) {
          val = [];
        }
        if (self2.maximum) {
          if (val.length > self2.maximum) {
            val.length = self2.maximum;
          }
        }
      } else {
        if (Array.isArray(val)) {
          val = val[0];
        }
      }
      return val;
    }
  },
  computed: {
    summary() {
      if (this.multiValue) {
        if (this.model && this.model.length) {
          var length = this.model.length;
          var difference = Math.max(length - 3, 0);
          var summary;
          var cropped = this.model.slice(0, 3);
          summary = cropped.map(function(item) {
            return item.firstName || item.name || item.title;
          }).join(", ");
          if (difference) {
            summary = `${summary}... +${difference} more...`;
          }
          return summary;
        } else {
          return `Click to select`;
        }
      } else {
        if (this.model) {
          return "Click to select";
        } else {
          return `Click to select`;
        }
      }
    }
  }
};
const _hoisted_1$y = {
  key: 0,
  class: "ux-field-title"
};
const _hoisted_2$s = {
  key: 0,
  class: "ux-required-marker"
};
const _hoisted_3$p = {
  key: 1,
  class: "ux-field-description"
};
const _hoisted_4$n = {
  key: 3,
  class: "items"
};
function _sfc_render$F(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ux_icon = resolveComponent("ux-icon");
  const _component_ux_button = resolveComponent("ux-button");
  const _component_item = resolveComponent("item");
  const _component_draggable = resolveComponent("draggable");
  return openBlock(), createElementBlock(Fragment, null, [
    _ctx.showLabel ? (openBlock(), createElementBlock("label", _hoisted_1$y, [
      createTextVNode(toDisplayString(_ctx.label) + " ", 1),
      _ctx.required ? (openBlock(), createElementBlock("span", _hoisted_2$s, "*")) : createCommentVNode("", true)
    ])) : createCommentVNode("", true),
    _ctx.showDescription ? (openBlock(), createElementBlock("div", _hoisted_3$p, toDisplayString(_ctx.description), 1)) : createCommentVNode("", true),
    _ctx.multiValue ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
      _ctx.model && _ctx.model.length ? (openBlock(), createBlock(_component_draggable, {
        key: 0,
        class: "items",
        modelValue: _ctx.model,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.model = $event)
      }, {
        item: withCtx(({ element, index: index2 }) => [
          (openBlock(), createBlock(_component_item, {
            key: element._id,
            item: element
          }, {
            actions: withCtx(() => [
              $options.canEdit(element) ? (openBlock(), createBlock(_component_ux_button, {
                key: 0,
                icon: "",
                onClick: withModifiers(($event) => $options.edit(element), ["stop", "prevent"])
              }, {
                default: withCtx(() => [
                  createVNode(_component_ux_icon, { icon: "fa-pencil" })
                ]),
                _: 2
              }, 1032, ["onClick"])) : createCommentVNode("", true),
              createVNode(_component_ux_button, {
                icon: "",
                onClick: withModifiers(($event) => _ctx.remove(element), ["stop", "prevent"])
              }, {
                default: withCtx(() => [
                  createVNode(_component_ux_icon, { icon: "fa-times" })
                ]),
                _: 2
              }, 1032, ["onClick"])
            ]),
            _: 2
          }, 1032, ["item"]))
        ]),
        _: 1
      }, 8, ["modelValue"])) : createCommentVNode("", true)
    ], 64)) : _ctx.model ? (openBlock(), createElementBlock("div", _hoisted_4$n, [
      createVNode(_component_item, { item: _ctx.model }, {
        actions: withCtx(() => [
          $options.canEdit(_ctx.model) ? (openBlock(), createBlock(_component_ux_button, {
            key: 0,
            icon: "",
            onClick: _cache[1] || (_cache[1] = withModifiers(($event) => $options.edit(_ctx.model), ["stop", "prevent"]))
          }, {
            default: withCtx(() => [
              createVNode(_component_ux_icon, { icon: "fa-pencil" })
            ]),
            _: 1
          })) : createCommentVNode("", true),
          createVNode(_component_ux_button, {
            icon: "",
            onClick: withModifiers($options.clear, ["stop", "prevent"])
          }, {
            default: withCtx(() => [
              createVNode(_component_ux_icon, { icon: "fa-times" })
            ]),
            _: 1
          }, 8, ["onClick"])
        ]),
        _: 1
      }, 8, ["item"])
    ])) : createCommentVNode("", true),
    createVNode(_component_ux_button, { onClick: $options.open }, {
      default: withCtx(() => [
        createTextVNode(toDisplayString($options.summary), 1)
      ]),
      _: 1
    }, 8, ["onClick"])
  ], 64);
}
var ContentSelect = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["render", _sfc_render$F], ["__scopeId", "data-v-19e783ac"]]);
var typeSelect_vue_vue_type_style_index_0_scoped_true_lang = "";
function isUndefined$3(entry) {
  return entry === void 0 || typeof entry === "undefined" || entry === null || String(entry) === "null" || String(entry) === "undefined";
}
const _sfc_main$E = {
  props: {
    title: {
      type: String
    },
    modelValue: {}
  },
  mixins: [InputMixin],
  async created() {
    this.model = this.model;
    var glossary = await this.$qik.content.glossary();
    var typeList = glossary;
    if (this.field.basicTypes === false) {
      typeList = typeList.filter(function(definition) {
        return !!definition.definesType;
      });
    }
    if (this.field.definedTypes === false) {
      typeList = typeList.filter(function(definition) {
        return !definition.definesType;
      });
    }
    typeList = typeList.map(function(definition) {
      return {
        title: definition.title,
        value: definition.key
      };
    }).sort((a2, b) => a2.title > b.title ? 1 : -1);
    this.types = typeList;
  },
  data() {
    return {
      types: []
    };
  },
  methods: {
    cleanOutput(val) {
      var self2 = this;
      if (isUndefined$3(val)) {
        if (self2.multiValue) {
          val = [];
        } else {
          val = void 0;
        }
      } else {
        if (self2.multiValue) {
          val = (val || []).filter(Boolean).map(function(i2) {
            return self2.getValue(i2);
          });
        } else {
          val = self2.getValue(val);
        }
      }
      return val;
    },
    cleanInput(val) {
      var self2 = this;
      if (self2.multiValue) {
        if (!val) {
          val = [];
        }
        if (!Array.isArray(val)) {
          val = [val];
        }
        if (self2.maximum) {
          if (val.length > self2.maximum) {
            val.length = self2.maximum;
          }
        }
        val = val.filter(Boolean).map(function(v) {
          var valueKey2 = self2.getValue(v);
          return self2.returnObject ? self2.optionLookup[valueKey2] : valueKey2;
        });
      } else {
        var valueKey = self2.getValue(val);
        val = self2.returnObject ? self2.optionLookup[valueKey] : valueKey;
      }
      return val;
    }
  },
  computed: {
    returnObject() {
      return false;
    },
    classes() {
      var array = [];
      if (this.multiValue) {
        array.push("multiple");
      } else {
        array.push("single");
      }
      return array;
    },
    optionLookup() {
      var self2 = this;
      return self2.types.reduce(function(set, option2) {
        const key = self2.getValue(option2);
        set[key] = option2;
        return set;
      }, {});
    },
    summary() {
      return this.model ? this.getLabel(this.optionLookup[this.model]) : this.title || "Click to select";
    },
    selectableOptions() {
      return this.types;
    }
  }
};
const _hoisted_1$x = {
  key: 0,
  class: "ux-field-title"
};
const _hoisted_2$r = {
  key: 0,
  class: "ux-required-marker"
};
const _hoisted_3$o = {
  key: 1,
  class: "ux-field-description"
};
const _hoisted_4$m = {
  key: 2,
  class: "ui-select-button"
};
const _hoisted_5$g = ["multiple"];
const _hoisted_6$c = {
  key: 0,
  value: ""
};
const _hoisted_7$9 = ["value"];
function _sfc_render$E(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ux_button = resolveComponent("ux-button");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["native-select", $options.classes])
  }, [
    _ctx.showLabel ? (openBlock(), createElementBlock("label", _hoisted_1$x, [
      createTextVNode(toDisplayString(_ctx.label) + " ", 1),
      _ctx.required ? (openBlock(), createElementBlock("span", _hoisted_2$r, "*")) : createCommentVNode("", true)
    ])) : createCommentVNode("", true),
    _ctx.showDescription ? (openBlock(), createElementBlock("div", _hoisted_3$o, toDisplayString(_ctx.description), 1)) : createCommentVNode("", true),
    _ctx.singleValue ? (openBlock(), createElementBlock("div", _hoisted_4$m, [
      renderSlot(_ctx.$slots, "default", {}, () => [
        createVNode(_component_ux_button, { tag: "div" }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString($options.summary), 1)
          ]),
          _: 1
        })
      ], true)
    ])) : createCommentVNode("", true),
    withDirectives(createElementVNode("select", {
      onFocus: _cache[0] || (_cache[0] = (...args) => _ctx.touch && _ctx.touch(...args)),
      multiple: _ctx.multiValue,
      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.model = $event)
    }, [
      _ctx.singleValue && !_ctx.minimum ? (openBlock(), createElementBlock("option", _hoisted_6$c, "None")) : createCommentVNode("", true),
      (openBlock(true), createElementBlock(Fragment, null, renderList($options.selectableOptions, (option2) => {
        return openBlock(), createElementBlock("option", {
          value: option2.value
        }, toDisplayString(option2.title), 9, _hoisted_7$9);
      }), 256))
    ], 40, _hoisted_5$g), [
      [vModelSelect, _ctx.model]
    ])
  ], 2);
}
var TypeSelect = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["render", _sfc_render$E], ["__scopeId", "data-v-3c487f67"]]);
var currency_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$D = {
  props: {
    modelValue: {
      type: [String, Array]
    }
  },
  mixins: [InputMixin],
  methods: {
    update(event, index2) {
      var formatted = this.format(event.target.value);
      this.model[index2] = formatted;
    },
    format(v) {
      v = String(v).replace(/[^0-9.-]/g, "");
      var v = parseFloat(v) * 100;
      if (isNaN(v)) {
        return "";
      }
      v = Math.round(v);
      return v;
    },
    unformat(v) {
      v = String(v).replace(/[^0-9.-]/g, "");
      var v = parseFloat(v) / 100;
      if (isNaN(v)) {
        return "";
      }
      v = v.toFixed(2);
      return v;
    },
    getNewDefaultEntry() {
      return "";
    },
    unfocus() {
      this.$refs.input.blur();
      this.touch();
    }
  },
  computed: {
    model: {
      get() {
        return this.cleanOutput(this.value);
      },
      set(val) {
        console.log("SET MODEL", val);
        this.value = this.cleanInput(val);
        this.dispatch();
      }
    },
    proxy: {
      get() {
        var self2 = this;
        if (self2.multiValue) {
          return self2.model.map(self2.unformat);
        } else {
          return self2.unformat(self2.model);
        }
      },
      set(v) {
        var self2 = this;
        if (self2.multiValue) {
          self2.model = v.map(self2.format);
        } else {
          self2.model = self2.format(v);
        }
      }
    },
    currency() {
      return String(this.field.currency || "usd").toLowerCase();
    },
    prefix() {
      return this.$qik.utils.currencySymbol(this.currency);
    },
    suffix() {
      return String(this.currency).toUpperCase();
    }
  }
};
const _hoisted_1$w = {
  key: 0,
  class: "ux-field-title"
};
const _hoisted_2$q = {
  key: 0,
  class: "ux-required-marker"
};
const _hoisted_3$n = {
  key: 1,
  class: "ux-field-description"
};
const _hoisted_4$l = { key: 2 };
const _hoisted_5$f = {
  key: 0,
  class: "ux-text-prefix"
};
const _hoisted_6$b = ["onBlur", "onUpdate:modelValue"];
const _hoisted_7$8 = {
  key: 1,
  class: "ux-text-suffix"
};
const _hoisted_8$6 = {
  key: 0,
  class: "ux-text-prefix"
};
const _hoisted_9$4 = {
  key: 1,
  class: "ux-text-suffix"
};
function _sfc_render$D(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_flex_cell = resolveComponent("flex-cell");
  const _component_ux_icon = resolveComponent("ux-icon");
  const _component_ux_button = resolveComponent("ux-button");
  const _component_flex_row = resolveComponent("flex-row");
  return openBlock(), createElementBlock(Fragment, null, [
    _ctx.showLabel ? (openBlock(), createElementBlock("label", _hoisted_1$w, [
      createTextVNode(toDisplayString(_ctx.label) + " ", 1),
      _ctx.required ? (openBlock(), createElementBlock("span", _hoisted_2$q, "*")) : createCommentVNode("", true)
    ])) : createCommentVNode("", true),
    _ctx.showDescription ? (openBlock(), createElementBlock("div", _hoisted_3$n, toDisplayString(_ctx.description), 1)) : createCommentVNode("", true),
    _ctx.multiValue ? (openBlock(), createElementBlock("div", _hoisted_4$l, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($options.model, (entry, index2) => {
        return openBlock(), createBlock(_component_flex_row, {
          class: "ux-text-row",
          key: index2
        }, {
          default: withCtx(() => [
            createVNode(_component_flex_cell, null, {
              default: withCtx(() => [
                createElementVNode("div", {
                  class: normalizeClass(["ux-text-wrap", { prefixed: $options.prefix, suffixed: $options.suffix }])
                }, [
                  $options.prefix ? (openBlock(), createElementBlock("span", _hoisted_5$f, toDisplayString($options.prefix), 1)) : createCommentVNode("", true),
                  withDirectives((openBlock(), createElementBlock("input", {
                    class: "ux-field-focus ux-text-input-multiple",
                    ref_for: true,
                    ref: "input",
                    placeholder: "0.00",
                    key: `proxy-index-${index2}`,
                    onKeydown: _cache[0] || (_cache[0] = withKeys(withModifiers(($event) => _ctx.add(), ["stop", "prevent"]), ["enter"])),
                    onBlur: ($event) => $options.update($event, index2),
                    "onUpdate:modelValue": ($event) => $options.proxy[index2] = $event,
                    onFocus: _cache[1] || (_cache[1] = (...args) => _ctx.touch && _ctx.touch(...args))
                  }, null, 40, _hoisted_6$b)), [
                    [
                      vModelText,
                      $options.proxy[index2],
                      void 0,
                      { lazy: true }
                    ]
                  ]),
                  $options.suffix ? (openBlock(), createElementBlock("span", _hoisted_7$8, toDisplayString($options.suffix), 1)) : createCommentVNode("", true)
                ], 2)
              ]),
              _: 2
            }, 1024),
            createVNode(_component_flex_cell, {
              shrink: "",
              vcenter: ""
            }, {
              default: withCtx(() => [
                _ctx.canRemoveValue ? (openBlock(), createBlock(_component_ux_button, {
                  key: 0,
                  tag: "a",
                  icon: "",
                  onClick: ($event) => _ctx.remove(entry)
                }, {
                  default: withCtx(() => [
                    createVNode(_component_ux_icon, { icon: "fa-times" })
                  ]),
                  _: 2
                }, 1032, ["onClick"])) : createCommentVNode("", true)
              ]),
              _: 2
            }, 1024)
          ]),
          _: 2
        }, 1024);
      }), 128)),
      _ctx.canAddValue ? (openBlock(), createBlock(_component_ux_button, {
        key: 0,
        onClick: _cache[2] || (_cache[2] = ($event) => _ctx.add())
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(_ctx.addLabel) + " ", 1),
          createVNode(_component_ux_icon, {
            icon: "fa-plus",
            right: ""
          })
        ]),
        _: 1
      })) : createCommentVNode("", true)
    ])) : (openBlock(), createElementBlock("div", {
      key: 3,
      class: normalizeClass(["ux-text-wrap", { prefixed: $options.prefix, suffixed: $options.suffix }])
    }, [
      $options.prefix ? (openBlock(), createElementBlock("span", _hoisted_8$6, toDisplayString($options.prefix), 1)) : createCommentVNode("", true),
      withDirectives((openBlock(), createElementBlock("input", {
        class: "ux-field-focus ux-text-input-single",
        ref: "input",
        key: $options.proxy,
        placeholder: "0.00",
        onKeyup: _cache[3] || (_cache[3] = withKeys(withModifiers((...args) => $options.unfocus && $options.unfocus(...args), ["stop", "prevent"]), ["enter"])),
        onFocus: _cache[4] || (_cache[4] = (...args) => _ctx.touch && _ctx.touch(...args)),
        "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $options.proxy = $event)
      }, null, 32)), [
        [
          vModelText,
          $options.proxy,
          void 0,
          { lazy: true }
        ]
      ]),
      $options.suffix ? (openBlock(), createElementBlock("span", _hoisted_9$4, toDisplayString($options.suffix), 1)) : createCommentVNode("", true)
    ], 2))
  ], 64);
}
var CurrencyField = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["render", _sfc_render$D], ["__scopeId", "data-v-5afb1a86"]]);
var textfield_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$C = {
  props: {
    modelValue: {
      type: [String, Array]
    }
  },
  mixins: [InputMixin],
  computed: {
    inputType() {
      switch (this.field.widget) {
        case "password":
        case "email":
          return this.field.widget;
        default:
          switch (this.field.type) {
            case "email":
              return "email";
            default:
              return "text";
          }
      }
    },
    lazy() {
      switch (this.type) {
        case "integer":
        case "number":
        case "decimal":
        case "float":
        case "url":
        case "key":
          return true;
      }
    },
    actualPlaceholder() {
      if (this.field.placeholder) {
        return this.field.placeholder;
      }
      switch (this.type) {
        case "integer":
        case "number":
        case "decimal":
        case "float":
          return "0";
        case "url":
          return "https://www.website.com";
        case "email":
          return "you@youremail.com";
      }
    }
  },
  methods: {
    cleanOutputValue(v) {
      var cleaned = this.cleanTextInput(v, this.type, this);
      return cleaned ? String(cleaned) : "";
    },
    cleanInputValue(v) {
      return this.cleanTextInput(v, this.type, this);
    },
    getNewDefaultEntry() {
      return "";
    }
  }
};
const _hoisted_1$v = {
  key: 0,
  class: "ux-field-title"
};
const _hoisted_2$p = {
  key: 0,
  class: "ux-required-marker"
};
const _hoisted_3$m = {
  key: 1,
  class: "ux-field-description"
};
const _hoisted_4$k = { key: 2 };
const _hoisted_5$e = { class: "ux-text-wrap" };
const _hoisted_6$a = {
  key: 0,
  class: "ux-text-prefix"
};
const _hoisted_7$7 = ["type", "placeholder", "onUpdate:modelValue"];
const _hoisted_8$5 = ["type", "placeholder", "onUpdate:modelValue"];
const _hoisted_9$3 = {
  key: 3,
  class: "ux-text-suffix"
};
const _hoisted_10$3 = {
  key: 3,
  class: "ux-text-wrap"
};
const _hoisted_11$3 = {
  key: 0,
  class: "ux-text-prefix"
};
const _hoisted_12$2 = ["type", "placeholder"];
const _hoisted_13$2 = ["type", "placeholder"];
const _hoisted_14$2 = {
  key: 3,
  class: "ux-text-suffix"
};
function _sfc_render$C(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_flex_cell = resolveComponent("flex-cell");
  const _component_ux_icon = resolveComponent("ux-icon");
  const _component_ux_button = resolveComponent("ux-button");
  const _component_flex_row = resolveComponent("flex-row");
  return openBlock(), createElementBlock(Fragment, null, [
    _ctx.showLabel ? (openBlock(), createElementBlock("label", _hoisted_1$v, [
      createTextVNode(toDisplayString(_ctx.label) + " ", 1),
      _ctx.required ? (openBlock(), createElementBlock("span", _hoisted_2$p, "*")) : createCommentVNode("", true)
    ])) : createCommentVNode("", true),
    _ctx.showDescription ? (openBlock(), createElementBlock("div", _hoisted_3$m, toDisplayString(_ctx.description), 1)) : createCommentVNode("", true),
    _ctx.multiValue ? (openBlock(), createElementBlock("div", _hoisted_4$k, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.model, (entry, index2) => {
        return openBlock(), createBlock(_component_flex_row, {
          class: "ux-text-row",
          key: index2
        }, {
          default: withCtx(() => [
            createVNode(_component_flex_cell, null, {
              default: withCtx(() => [
                createElementVNode("div", _hoisted_5$e, [
                  _ctx.prefix ? (openBlock(), createElementBlock("span", _hoisted_6$a, toDisplayString(_ctx.prefix), 1)) : createCommentVNode("", true),
                  $options.lazy ? withDirectives((openBlock(), createElementBlock("input", {
                    key: 1,
                    type: $options.inputType,
                    class: "ux-field-focus ux-text-input-multiple",
                    placeholder: $options.actualPlaceholder,
                    onFocus: _cache[0] || (_cache[0] = (...args) => _ctx.touch && _ctx.touch(...args)),
                    ref_for: true,
                    ref: "input",
                    onKeydown: _cache[1] || (_cache[1] = withKeys(withModifiers(($event) => _ctx.add(), ["stop", "prevent"]), ["enter"])),
                    "onUpdate:modelValue": ($event) => _ctx.model[index2] = $event
                  }, null, 40, _hoisted_7$7)), [
                    [
                      vModelDynamic,
                      _ctx.model[index2],
                      void 0,
                      { lazy: true }
                    ]
                  ]) : createCommentVNode("", true),
                  !$options.lazy ? withDirectives((openBlock(), createElementBlock("input", {
                    key: 2,
                    type: $options.inputType,
                    class: "ux-field-focus ux-text-input-multiple",
                    placeholder: $options.actualPlaceholder,
                    onFocus: _cache[2] || (_cache[2] = (...args) => _ctx.touch && _ctx.touch(...args)),
                    ref_for: true,
                    ref: "input",
                    onKeydown: _cache[3] || (_cache[3] = withKeys(withModifiers(($event) => _ctx.add(), ["stop", "prevent"]), ["enter"])),
                    "onUpdate:modelValue": ($event) => _ctx.model[index2] = $event
                  }, null, 40, _hoisted_8$5)), [
                    [vModelDynamic, _ctx.model[index2]]
                  ]) : createCommentVNode("", true),
                  _ctx.suffix ? (openBlock(), createElementBlock("span", _hoisted_9$3, toDisplayString(_ctx.suffix), 1)) : createCommentVNode("", true)
                ])
              ]),
              _: 2
            }, 1024),
            createVNode(_component_flex_cell, {
              shrink: "",
              vcenter: ""
            }, {
              default: withCtx(() => [
                _ctx.canRemoveValue ? (openBlock(), createBlock(_component_ux_button, {
                  key: 0,
                  tag: "a",
                  icon: "",
                  onClick: ($event) => _ctx.remove(entry)
                }, {
                  default: withCtx(() => [
                    createVNode(_component_ux_icon, { icon: "fa-times" })
                  ]),
                  _: 2
                }, 1032, ["onClick"])) : createCommentVNode("", true)
              ]),
              _: 2
            }, 1024)
          ]),
          _: 2
        }, 1024);
      }), 128)),
      _ctx.canAddValue ? (openBlock(), createBlock(_component_ux_button, {
        key: 0,
        onClick: _cache[4] || (_cache[4] = ($event) => _ctx.add())
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(_ctx.addLabel) + " ", 1),
          createVNode(_component_ux_icon, {
            icon: "fa-plus",
            right: ""
          })
        ]),
        _: 1
      })) : createCommentVNode("", true)
    ])) : (openBlock(), createElementBlock("div", _hoisted_10$3, [
      _ctx.prefix ? (openBlock(), createElementBlock("span", _hoisted_11$3, toDisplayString(_ctx.prefix), 1)) : createCommentVNode("", true),
      $options.lazy ? withDirectives((openBlock(), createElementBlock("input", {
        key: 1,
        type: $options.inputType,
        ref: "input",
        class: "ux-field-focus ux-text-input-single",
        placeholder: $options.actualPlaceholder,
        onFocus: _cache[5] || (_cache[5] = (...args) => _ctx.touch && _ctx.touch(...args)),
        "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => _ctx.model = $event)
      }, null, 40, _hoisted_12$2)), [
        [
          vModelDynamic,
          _ctx.model,
          void 0,
          { lazy: true }
        ]
      ]) : createCommentVNode("", true),
      !$options.lazy ? withDirectives((openBlock(), createElementBlock("input", {
        key: 2,
        type: $options.inputType,
        ref: "input",
        class: "ux-field-focus ux-text-input-single",
        placeholder: $options.actualPlaceholder,
        onFocus: _cache[7] || (_cache[7] = (...args) => _ctx.touch && _ctx.touch(...args)),
        "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => _ctx.model = $event)
      }, null, 40, _hoisted_13$2)), [
        [vModelDynamic, _ctx.model]
      ]) : createCommentVNode("", true),
      _ctx.suffix ? (openBlock(), createElementBlock("span", _hoisted_14$2, toDisplayString(_ctx.suffix), 1)) : createCommentVNode("", true)
    ]))
  ], 64);
}
var TextField = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["render", _sfc_render$C], ["__scopeId", "data-v-8f2cb452"]]);
var textarea_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$B = {
  props: {
    modelValue: {
      type: [String, Array]
    }
  },
  mixins: [InputMixin],
  methods: {
    getNewDefaultEntry() {
      return "";
    }
  }
};
const _hoisted_1$u = {
  key: 0,
  class: "ux-field-title"
};
const _hoisted_2$o = {
  key: 0,
  class: "ux-required-marker"
};
const _hoisted_3$l = {
  key: 1,
  class: "ux-field-description"
};
const _hoisted_4$j = { key: 2 };
const _hoisted_5$d = ["onUpdate:modelValue"];
function _sfc_render$B(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_flex_cell = resolveComponent("flex-cell");
  const _component_ux_icon = resolveComponent("ux-icon");
  const _component_ux_button = resolveComponent("ux-button");
  const _component_flex_row = resolveComponent("flex-row");
  return openBlock(), createElementBlock(Fragment, null, [
    _ctx.showLabel ? (openBlock(), createElementBlock("label", _hoisted_1$u, [
      createTextVNode(toDisplayString(_ctx.label) + " ", 1),
      _ctx.required ? (openBlock(), createElementBlock("span", _hoisted_2$o, "*")) : createCommentVNode("", true)
    ])) : createCommentVNode("", true),
    _ctx.showDescription ? (openBlock(), createElementBlock("div", _hoisted_3$l, toDisplayString(_ctx.description), 1)) : createCommentVNode("", true),
    _ctx.multiValue ? (openBlock(), createElementBlock("div", _hoisted_4$j, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.model, (entry, index2) => {
        return openBlock(), createBlock(_component_flex_row, {
          class: "ux-text-row",
          key: index2
        }, {
          default: withCtx(() => [
            createVNode(_component_flex_cell, null, {
              default: withCtx(() => [
                withDirectives(createElementVNode("textarea", {
                  contenteditable: "",
                  onFocus: _cache[0] || (_cache[0] = (...args) => _ctx.touch && _ctx.touch(...args)),
                  ref_for: true,
                  ref: "input",
                  "onUpdate:modelValue": ($event) => _ctx.model[index2] = $event,
                  class: "ux-textarea ux-field-focus ux-text-area-multiple"
                }, null, 40, _hoisted_5$d), [
                  [vModelText, _ctx.model[index2]]
                ])
              ]),
              _: 2
            }, 1024),
            createVNode(_component_flex_cell, {
              shrink: "",
              vcenter: ""
            }, {
              default: withCtx(() => [
                _ctx.canRemoveValue ? (openBlock(), createBlock(_component_ux_button, {
                  key: 0,
                  tag: "a",
                  icon: "",
                  onClick: ($event) => _ctx.remove(entry)
                }, {
                  default: withCtx(() => [
                    createVNode(_component_ux_icon, { icon: "fa-times" })
                  ]),
                  _: 2
                }, 1032, ["onClick"])) : createCommentVNode("", true)
              ]),
              _: 2
            }, 1024)
          ]),
          _: 2
        }, 1024);
      }), 128)),
      _ctx.canAddValue ? (openBlock(), createBlock(_component_ux_button, {
        key: 0,
        onClick: _cache[1] || (_cache[1] = ($event) => _ctx.add())
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(_ctx.addLabel), 1)
        ]),
        _: 1
      })) : createCommentVNode("", true)
    ])) : withDirectives((openBlock(), createElementBlock("textarea", {
      key: 3,
      class: "ux-textarea ux-field-focus ux-text-area-single",
      onFocus: _cache[2] || (_cache[2] = (...args) => _ctx.touch && _ctx.touch(...args)),
      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.model = $event),
      role: "textbox",
      contenteditable: ""
    }, null, 544)), [
      [vModelText, _ctx.model]
    ])
  ], 64);
}
var TextArea = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["render", _sfc_render$B], ["__scopeId", "data-v-72eafde6"]]);
var datefield_vue_vue_type_style_index_0_scoped_true_lang = "";
function zero(input) {
  if (String(input).length < 2) {
    input = `0${input}`;
  }
  return input;
}
const _sfc_main$A = {
  props: {
    modelValue: {
      type: [Date, String, Array]
    }
  },
  mixins: [InputMixin],
  computed: {
    model: {
      get() {
        let val = this.cleanOutput(this.value);
        return val;
      },
      set(newValue) {
        if (!newValue) {
          this.value = void 0;
          this.dispatch();
          return;
        }
        if (newValue === "invalid") {
          return;
        }
        var val = this.cleanOutput(newValue);
        var existing = this.cleanOutput(this.value);
        if (val != existing) {
          newValue = this.cleanInput(val);
          this.value = newValue;
          this.dispatch();
        }
      }
    }
  },
  methods: {
    cleanOutputValue(d) {
      d = d ? new Date(d) : new Date();
      return `${d.getFullYear()}-${zero(d.getMonth() + 1)}-${zero(d.getDate())}T${zero(d.getHours())}:${zero(d.getMinutes())}`;
    },
    cleanInputValue(d) {
      let dt = new Date(d);
      if (dt.toString() == "Invalid Date") {
        return "invalid";
      }
      return dt.toISOString();
    },
    getNewDefaultEntry() {
      return new Date();
    }
  }
};
const _hoisted_1$t = {
  key: 0,
  class: "ux-field-title"
};
const _hoisted_2$n = {
  key: 0,
  class: "ux-required-marker"
};
const _hoisted_3$k = {
  key: 1,
  class: "ux-field-description"
};
const _hoisted_4$i = { key: 2 };
const _hoisted_5$c = ["onUpdate:modelValue"];
function _sfc_render$A(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_flex_cell = resolveComponent("flex-cell");
  const _component_ux_icon = resolveComponent("ux-icon");
  const _component_ux_button = resolveComponent("ux-button");
  const _component_flex_row = resolveComponent("flex-row");
  return openBlock(), createElementBlock(Fragment, null, [
    _ctx.showLabel ? (openBlock(), createElementBlock("label", _hoisted_1$t, [
      createTextVNode(toDisplayString(_ctx.label) + " ", 1),
      _ctx.required ? (openBlock(), createElementBlock("span", _hoisted_2$n, "*")) : createCommentVNode("", true)
    ])) : createCommentVNode("", true),
    _ctx.showDescription ? (openBlock(), createElementBlock("div", _hoisted_3$k, toDisplayString(_ctx.description), 1)) : createCommentVNode("", true),
    _ctx.multiValue ? (openBlock(), createElementBlock("div", _hoisted_4$i, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($options.model, (entry, index2) => {
        return openBlock(), createBlock(_component_flex_row, {
          class: "ux-text-row",
          key: index2
        }, {
          default: withCtx(() => [
            createVNode(_component_flex_cell, null, {
              default: withCtx(() => [
                withDirectives(createElementVNode("input", {
                  type: "datetime-local",
                  class: "ux-field-focus ux-text-input-multiple",
                  onFocus: _cache[0] || (_cache[0] = (...args) => _ctx.touch && _ctx.touch(...args)),
                  ref_for: true,
                  ref: "input",
                  onKeydown: _cache[1] || (_cache[1] = withKeys(withModifiers(($event) => _ctx.add(), ["stop", "prevent"]), ["enter"])),
                  "onUpdate:modelValue": ($event) => $options.model[index2] = $event
                }, null, 40, _hoisted_5$c), [
                  [vModelText, $options.model[index2]]
                ])
              ]),
              _: 2
            }, 1024),
            createVNode(_component_flex_cell, {
              shrink: "",
              vcenter: ""
            }, {
              default: withCtx(() => [
                _ctx.canRemoveValue ? (openBlock(), createBlock(_component_ux_button, {
                  key: 0,
                  tag: "a",
                  icon: "",
                  onClick: ($event) => _ctx.remove(entry)
                }, {
                  default: withCtx(() => [
                    createVNode(_component_ux_icon, { icon: "fa-times" })
                  ]),
                  _: 2
                }, 1032, ["onClick"])) : createCommentVNode("", true)
              ]),
              _: 2
            }, 1024)
          ]),
          _: 2
        }, 1024);
      }), 128)),
      _ctx.canAddValue ? (openBlock(), createBlock(_component_ux_button, {
        key: 0,
        onClick: _cache[2] || (_cache[2] = ($event) => _ctx.add())
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(_ctx.addLabel), 1)
        ]),
        _: 1
      })) : createCommentVNode("", true)
    ])) : withDirectives((openBlock(), createElementBlock("input", {
      key: 3,
      type: "datetime-local",
      class: "ux-field-focus ux-text-input-single",
      onFocus: _cache[3] || (_cache[3] = (...args) => _ctx.touch && _ctx.touch(...args)),
      "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $options.model = $event)
    }, null, 544)), [
      [vModelText, $options.model]
    ])
  ], 64);
}
var DateField = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["render", _sfc_render$A], ["__scopeId", "data-v-578af064"]]);
var checkbox_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$z = {
  computed: {
    NativeCheckbox: UXCheckbox
  },
  mixins: [InputMixin],
  props: {
    modelValue: {
      type: Boolean,
      default() {
        return false;
      }
    }
  },
  data() {
    return {
      value: this.modelValue
    };
  },
  watch: {
    modelValue(val, old) {
      this.value = val;
      this.model = val;
    }
  },
  computed: {
    longDescription() {
      return String(this.description).length > 2;
    },
    defaultValue() {
      return false;
    },
    model: {
      get() {
        return !!this.value;
      },
      set(value) {
        this.value = !!value;
        this.$emit("update:modelValue", this.value);
      }
    }
  }
};
const _hoisted_1$s = {
  key: 0,
  class: "ux-field-title"
};
const _hoisted_2$m = {
  key: 0,
  class: "ux-required-marker"
};
const _hoisted_3$j = {
  key: 1,
  class: "ux-field-description"
};
function _sfc_render$z(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ux_checkbox = resolveComponent("ux-checkbox");
  const _component_flex_cell = resolveComponent("flex-cell");
  const _component_flex_row = resolveComponent("flex-row");
  return openBlock(), createBlock(_component_flex_row, {
    onClick: _cache[1] || (_cache[1] = ($event) => _ctx.touch()),
    gap: ""
  }, {
    default: withCtx(() => [
      createVNode(_component_flex_cell, {
        vcenter: "",
        shrink: ""
      }, {
        default: withCtx(() => [
          createVNode(_component_ux_checkbox, {
            value: $options.model,
            onClick: _cache[0] || (_cache[0] = ($event) => $options.model = !$options.model)
          }, null, 8, ["value"])
        ]),
        _: 1
      }),
      createVNode(_component_flex_cell, { vcenter: "" }, {
        default: withCtx(() => [
          createElementVNode("div", null, [
            _ctx.showLabel ? (openBlock(), createElementBlock("label", _hoisted_1$s, [
              createTextVNode(toDisplayString(_ctx.label) + " ", 1),
              _ctx.required ? (openBlock(), createElementBlock("span", _hoisted_2$m, "*")) : createCommentVNode("", true)
            ])) : createCommentVNode("", true),
            _ctx.showDescription ? (openBlock(), createElementBlock("div", _hoisted_3$j, toDisplayString(_ctx.description), 1)) : createCommentVNode("", true)
          ])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
var Checkbox = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["render", _sfc_render$z], ["__scopeId", "data-v-a346dafc"]]);
const _sfc_main$y = {
  props: {
    modelValue: {
      type: [String, Array]
    }
  },
  mixins: [InputMixin],
  methods: {
    getNewDefaultEntry() {
      return "";
    }
  }
};
const _hoisted_1$r = {
  key: 0,
  class: "ux-field-title"
};
const _hoisted_2$l = {
  key: 0,
  class: "ux-required-marker"
};
const _hoisted_3$i = {
  key: 1,
  class: "ux-field-description"
};
const _hoisted_4$h = { key: 2 };
const _hoisted_5$b = ["innerHTML"];
const _hoisted_6$9 = ["innerHTML"];
function _sfc_render$y(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_flex_cell = resolveComponent("flex-cell");
  const _component_ux_icon = resolveComponent("ux-icon");
  const _component_ux_button = resolveComponent("ux-button");
  const _component_flex_row = resolveComponent("flex-row");
  return openBlock(), createElementBlock(Fragment, null, [
    _ctx.showLabel ? (openBlock(), createElementBlock("label", _hoisted_1$r, [
      createTextVNode(toDisplayString(_ctx.label) + " ", 1),
      _ctx.required ? (openBlock(), createElementBlock("span", _hoisted_2$l, "*")) : createCommentVNode("", true)
    ])) : createCommentVNode("", true),
    _ctx.showDescription ? (openBlock(), createElementBlock("div", _hoisted_3$i, toDisplayString(_ctx.description), 1)) : createCommentVNode("", true),
    _ctx.multiValue ? (openBlock(), createElementBlock("div", _hoisted_4$h, [
      createVNode(_component_flex_row, { class: "ux-text-row" }, {
        default: withCtx(() => [
          createVNode(_component_flex_cell, null, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.model, (entry, index2) => {
                return openBlock(), createElementBlock("div", {
                  innerHTML: _ctx.field.template,
                  key: index2
                }, null, 8, _hoisted_5$b);
              }), 128))
            ]),
            _: 1
          }),
          createVNode(_component_flex_cell, {
            shrink: "",
            vcenter: ""
          }, {
            default: withCtx(() => [
              _ctx.canRemoveValue ? (openBlock(), createBlock(_component_ux_button, {
                key: 0,
                tag: "a",
                icon: "",
                onClick: _cache[0] || (_cache[0] = ($event) => _ctx.remove(_ctx.entry))
              }, {
                default: withCtx(() => [
                  createVNode(_component_ux_icon, { icon: "fa-times" })
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      _ctx.canAddValue ? (openBlock(), createBlock(_component_ux_button, {
        key: 0,
        onClick: _cache[1] || (_cache[1] = ($event) => _ctx.add())
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(_ctx.addLabel), 1)
        ]),
        _: 1
      })) : createCommentVNode("", true)
    ])) : (openBlock(), createElementBlock("div", {
      key: 3,
      innerHTML: _ctx.field.template
    }, null, 8, _hoisted_6$9))
  ], 64);
}
var CustomHTML = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["render", _sfc_render$y]]);
var FilterCondition_vue_vue_type_style_index_0_lang = "";
const _sfc_main$x = {
  props: {
    fields: {
      type: Array,
      default() {
        return [];
      }
    },
    enableRemove: {
      type: Boolean
    },
    modelValue: {
      type: Object,
      default() {
        return {
          key: "",
          comparator: "",
          value: null,
          value2: null,
          values: []
        };
      }
    }
  },
  watch: {
    modelValue(m) {
      if (m != this.model) {
        this.model = m;
      }
    }
  },
  async created() {
    this.comparators = await this.$qik.content.comparators();
  },
  data() {
    return {
      comparators: null,
      model: this.modelValue
    };
  },
  computed: {
    hasOptions() {
      return !!(this.field.options && this.field.options.length);
    },
    fieldHash() {
      return this.fields.reduce(function(set, field) {
        set[field.path] = field;
        return set;
      }, {});
    },
    keyOptions() {
      return this.fields.reduce(function(set, entry) {
        switch (entry.type) {
          case "group":
            break;
          default:
            set.push({
              title: entry.titles.join(" > "),
              value: entry.path || entry.key
            });
            break;
        }
        return set;
      }, []);
    },
    keyField() {
      return {
        minimum: 1,
        maximum: 1,
        options: this.keyOptions
      };
    },
    field() {
      return this.fieldHash[this.model.key];
    },
    fieldType() {
      if (!this.field) {
        return;
      }
      return this.field.type;
    },
    inputType() {
      if (!this.comparator) {
        return;
      }
      var inputType = this.comparator.inputType;
      switch (inputType) {
        case "none":
        case "range":
        case "daterange":
        case "daterelative":
          break;
        case "array":
          switch (this.fieldType) {
            case "reference":
              inputType = "multireference";
              break;
          }
          break;
        default:
          inputType = "normal";
          switch (this.fieldType) {
            case "reference":
            case "boolean":
            case "date":
              inputType = this.fieldType;
              break;
            case "integer":
            case "decimal":
            case "float":
            case "number":
              inputType = "number";
              break;
          }
          break;
      }
      return inputType;
    },
    comparator() {
      return this.comparatorLookup[this.model.comparator];
    },
    comparatorLookup() {
      return this.comparators.hash;
    },
    comparatorOptions() {
      if (!this.fieldType) {
        return [];
      }
      var relevantComparators = this.comparators.available[this.fieldType] || [];
      var options = relevantComparators.map(function(entry) {
        return {
          title: entry.title,
          value: entry.operator
        };
      });
      return options;
    },
    comparatorField() {
      return {
        minimum: 1,
        maximum: 1,
        options: this.comparatorOptions
      };
    },
    referenceType() {
      if (!this.field) {
        return;
      }
      return this.field.referenceType;
    },
    relativeNumberField() {
      return {
        type: "integer",
        maximum: 1,
        minimum: 1,
        placeholder: "0"
      };
    },
    relativePeriodField() {
      return {
        type: "string",
        maximum: 1,
        minimum: 1,
        widget: "select",
        options: [
          {
            title: "Minutes",
            value: "minutes"
          },
          {
            title: "Hours",
            value: "hours"
          },
          {
            title: "Days",
            value: "days"
          },
          {
            title: "Weeks",
            value: "weeks"
          },
          {
            title: "Months",
            value: "months"
          },
          {
            title: "Years",
            value: "years"
          }
        ]
      };
    },
    dateField() {
      return {
        type: this.fieldType,
        maximum: 1,
        minimum: 1,
        placeholder: this.field.title
      };
    },
    multiOptionsField() {
      return {
        options: this.field.options,
        widget: "select",
        type: this.fieldType,
        maximum: 0,
        minimum: 1,
        placeholder: this.field.title
      };
    },
    singleOptionsField() {
      return {
        title: `Select ${this.field.title}`,
        options: this.field.options,
        widget: "select",
        type: this.fieldType,
        maximum: 1,
        minimum: 0,
        placeholder: this.field.title
      };
    },
    normalField() {
      return {
        type: this.fieldType,
        maximum: 1,
        minimum: 1,
        placeholder: this.field.title
      };
    },
    arrayField() {
      return {
        title: this.field.title,
        type: this.fieldType,
        maximum: 0,
        minimum: 1
      };
    },
    singleReferenceField() {
      return {
        type: "reference",
        referenceType,
        maximum: 1,
        minimum: 1
      };
    },
    multiReferenceField() {
      return {
        type: "reference",
        referenceType,
        maximum: 0,
        minimum: 1
      };
    }
  },
  methods: {},
  components: {
    TextField,
    DateField,
    NativeSelect
  }
};
const _hoisted_1$q = {
  key: 0,
  class: "filter-condition"
};
const _hoisted_2$k = { key: 0 };
const _hoisted_3$h = { key: 1 };
const _hoisted_4$g = /* @__PURE__ */ createTextVNode(" And ");
const _hoisted_5$a = { key: 2 };
const _hoisted_6$8 = { key: 3 };
const _hoisted_7$6 = /* @__PURE__ */ createTextVNode(" And ");
const _hoisted_8$4 = { key: 4 };
const _hoisted_9$2 = { key: 5 };
const _hoisted_10$2 = { key: 6 };
const _hoisted_11$2 = { key: 7 };
const _hoisted_12$1 = { key: 8 };
const _hoisted_13$1 = { key: 9 };
const _hoisted_14$1 = { key: 10 };
function _sfc_render$x(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_native_select = resolveComponent("native-select");
  const _component_flex_cell = resolveComponent("flex-cell");
  const _component_text_field = resolveComponent("text-field");
  const _component_flex_row = resolveComponent("flex-row");
  const _component_date_field = resolveComponent("date-field");
  const _component_content_select = resolveComponent("content-select");
  const _component_ux_icon = resolveComponent("ux-icon");
  const _component_ux_button = resolveComponent("ux-button");
  return $data.comparators ? (openBlock(), createElementBlock("div", _hoisted_1$q, [
    createVNode(_component_flex_row, null, {
      default: withCtx(() => [
        createVNode(_component_flex_cell, null, {
          default: withCtx(() => [
            createVNode(_component_native_select, {
              title: "Select field",
              modelValue: $data.model.key,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.model.key = $event),
              field: $options.keyField
            }, null, 8, ["modelValue", "field"])
          ]),
          _: 1
        }),
        $data.model.key ? (openBlock(), createBlock(_component_flex_cell, { key: 0 }, {
          default: withCtx(() => [
            createVNode(_component_native_select, {
              title: "Select comparator",
              modelValue: $data.model.comparator,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.model.comparator = $event),
              field: $options.comparatorField
            }, null, 8, ["modelValue", "field"])
          ]),
          _: 1
        })) : createCommentVNode("", true),
        $data.model.comparator ? (openBlock(), createBlock(_component_flex_cell, { key: 1 }, {
          default: withCtx(() => [
            $options.inputType == "array" ? (openBlock(), createElementBlock("div", _hoisted_2$k, [
              $options.hasOptions ? (openBlock(), createBlock(_component_native_select, {
                key: 0,
                modelValue: $data.model.values,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.model.values = $event),
                field: $options.multiOptionsField
              }, null, 8, ["modelValue", "field"])) : (openBlock(), createBlock(_component_text_field, {
                key: 1,
                field: $options.arrayField,
                modelValue: $data.model.values,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.model.values = $event)
              }, null, 8, ["field", "modelValue"]))
            ])) : createCommentVNode("", true),
            $options.inputType == "range" ? (openBlock(), createElementBlock("div", _hoisted_3$h, [
              createVNode(_component_text_field, {
                field: $options.normalField,
                modelValue: $data.model.value,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.model.value = $event)
              }, null, 8, ["field", "modelValue"]),
              _hoisted_4$g,
              createVNode(_component_text_field, {
                field: $options.normalField,
                modelValue: $data.model.value2,
                "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $data.model.value2 = $event)
              }, null, 8, ["field", "modelValue"])
            ])) : createCommentVNode("", true),
            $options.inputType == "daterelative" ? (openBlock(), createElementBlock("div", _hoisted_5$a, [
              createVNode(_component_flex_row, null, {
                default: withCtx(() => [
                  createVNode(_component_flex_cell, { style: { "width": "80px" } }, {
                    default: withCtx(() => [
                      createVNode(_component_text_field, {
                        field: $options.relativeNumberField,
                        modelValue: $data.model.value,
                        "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $data.model.value = $event)
                      }, null, 8, ["field", "modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_flex_cell, null, {
                    default: withCtx(() => [
                      createVNode(_component_native_select, {
                        modelValue: $data.model.value2,
                        "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $data.model.value2 = $event),
                        field: $options.relativePeriodField
                      }, null, 8, ["modelValue", "field"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ])) : createCommentVNode("", true),
            $options.inputType == "daterange" ? (openBlock(), createElementBlock("div", _hoisted_6$8, [
              createVNode(_component_date_field, {
                field: $options.dateField,
                modelValue: $data.model.value,
                "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $data.model.value = $event)
              }, null, 8, ["field", "modelValue"]),
              _hoisted_7$6,
              createVNode(_component_date_field, {
                field: $options.dateField,
                modelValue: $data.model.value2,
                "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => $data.model.value2 = $event)
              }, null, 8, ["field", "modelValue"])
            ])) : createCommentVNode("", true),
            $options.inputType == "date" ? (openBlock(), createElementBlock("div", _hoisted_8$4, [
              createVNode(_component_date_field, {
                field: $options.dateField,
                modelValue: $data.model.value,
                "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => $data.model.value = $event)
              }, null, 8, ["field", "modelValue"])
            ])) : createCommentVNode("", true),
            $options.inputType == "reference" ? (openBlock(), createElementBlock("div", _hoisted_9$2, [
              createVNode(_component_content_select, {
                field: $options.singleReferenceField,
                modelValue: $data.model.value,
                "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => $data.model.value = $event)
              }, null, 8, ["field", "modelValue"])
            ])) : createCommentVNode("", true),
            $options.inputType == "multireference" ? (openBlock(), createElementBlock("div", _hoisted_10$2, [
              createVNode(_component_content_select, {
                field: $options.multiReferenceField,
                modelValue: $data.model.values,
                "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => $data.model.values = $event)
              }, null, 8, ["field", "modelValue"])
            ])) : createCommentVNode("", true),
            $options.inputType == "boolean" ? (openBlock(), createElementBlock("div", _hoisted_11$2, [
              withDirectives(createElementVNode("input", {
                type: "checkbox",
                "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => $data.model.value = $event)
              }, null, 512), [
                [vModelCheckbox, $data.model.value]
              ])
            ])) : createCommentVNode("", true),
            $options.inputType == "none" ? (openBlock(), createElementBlock("div", _hoisted_12$1)) : createCommentVNode("", true),
            $options.inputType == "number" ? (openBlock(), createElementBlock("div", _hoisted_13$1, [
              createVNode(_component_text_field, {
                field: $options.normalField,
                modelValue: $data.model.value,
                "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => $data.model.value = $event)
              }, null, 8, ["field", "modelValue"])
            ])) : createCommentVNode("", true),
            $options.inputType == "normal" ? (openBlock(), createElementBlock("div", _hoisted_14$1, [
              $options.hasOptions ? (openBlock(), createBlock(_component_native_select, {
                key: 0,
                modelValue: $data.model.value,
                "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => $data.model.value = $event),
                field: $options.singleOptionsField
              }, null, 8, ["modelValue", "field"])) : (openBlock(), createBlock(_component_text_field, {
                key: 1,
                field: $options.normalField,
                modelValue: $data.model.value,
                "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => $data.model.value = $event)
              }, null, 8, ["field", "modelValue"]))
            ])) : createCommentVNode("", true)
          ]),
          _: 1
        })) : createCommentVNode("", true),
        $props.enableRemove ? (openBlock(), createBlock(_component_flex_cell, {
          key: 2,
          shrink: ""
        }, {
          default: withCtx(() => [
            createVNode(_component_ux_button, {
              size: "sm",
              icon: "",
              onClick: _cache[17] || (_cache[17] = ($event) => _ctx.$emit("remove"))
            }, {
              default: withCtx(() => [
                createVNode(_component_ux_icon, { icon: "fa-times" })
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : createCommentVNode("", true)
      ]),
      _: 1
    })
  ])) : createCommentVNode("", true);
}
var FilterCondition = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["render", _sfc_render$x]]);
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function isObject$4(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var isObject_1 = isObject$4;
var freeGlobal$1 = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var _freeGlobal = freeGlobal$1;
var freeGlobal = _freeGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root$4 = freeGlobal || freeSelf || Function("return this")();
var _root = root$4;
var root$3 = _root;
var now$2 = function() {
  return root$3.Date.now();
};
var now_1 = now$2;
var reWhitespace = /\s/;
function trimmedEndIndex$1(string) {
  var index2 = string.length;
  while (index2-- && reWhitespace.test(string.charAt(index2))) {
  }
  return index2;
}
var _trimmedEndIndex = trimmedEndIndex$1;
var trimmedEndIndex = _trimmedEndIndex;
var reTrimStart = /^\s+/;
function baseTrim$1(string) {
  return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
}
var _baseTrim = baseTrim$1;
var root$2 = _root;
var Symbol$4 = root$2.Symbol;
var _Symbol = Symbol$4;
var Symbol$3 = _Symbol;
var objectProto$4 = Object.prototype;
var hasOwnProperty$4 = objectProto$4.hasOwnProperty;
var nativeObjectToString$1 = objectProto$4.toString;
var symToStringTag$1 = Symbol$3 ? Symbol$3.toStringTag : void 0;
function getRawTag$1(value) {
  var isOwn = hasOwnProperty$4.call(value, symToStringTag$1), tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}
var _getRawTag = getRawTag$1;
var objectProto$3 = Object.prototype;
var nativeObjectToString = objectProto$3.toString;
function objectToString$1(value) {
  return nativeObjectToString.call(value);
}
var _objectToString = objectToString$1;
var Symbol$2 = _Symbol, getRawTag = _getRawTag, objectToString = _objectToString;
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$2 ? Symbol$2.toStringTag : void 0;
function baseGetTag$2(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
var _baseGetTag = baseGetTag$2;
function isObjectLike$1(value) {
  return value != null && typeof value == "object";
}
var isObjectLike_1 = isObjectLike$1;
var baseGetTag$1 = _baseGetTag, isObjectLike = isObjectLike_1;
var symbolTag = "[object Symbol]";
function isSymbol$4(value) {
  return typeof value == "symbol" || isObjectLike(value) && baseGetTag$1(value) == symbolTag;
}
var isSymbol_1 = isSymbol$4;
var baseTrim = _baseTrim, isObject$3 = isObject_1, isSymbol$3 = isSymbol_1;
var NAN = 0 / 0;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
function toNumber$1(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol$3(value)) {
    return NAN;
  }
  if (isObject$3(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject$3(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
var toNumber_1 = toNumber$1;
var isObject$2 = isObject_1, now$1 = now_1, toNumber = toNumber_1;
var FUNC_ERROR_TEXT$1 = "Expected a function";
var nativeMax = Math.max, nativeMin = Math.min;
function debounce(func, wait, options) {
  var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  wait = toNumber(wait) || 0;
  if (isObject$2(options)) {
    leading = !!options.leading;
    maxing = "maxWait" in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time) {
    var args = lastArgs, thisArg = lastThis;
    lastArgs = lastThis = void 0;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function leadingEdge(time) {
    lastInvokeTime = time;
    timerId = setTimeout(timerExpired, wait);
    return leading ? invokeFunc(time) : result;
  }
  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
    return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }
  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
    return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    var time = now$1();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    timerId = setTimeout(timerExpired, remainingWait(time));
  }
  function trailingEdge(time) {
    timerId = void 0;
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = void 0;
    return result;
  }
  function cancel() {
    if (timerId !== void 0) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = void 0;
  }
  function flush() {
    return timerId === void 0 ? result : trailingEdge(now$1());
  }
  function debounced() {
    var time = now$1(), isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === void 0) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === void 0) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
var debounce_1 = debounce;
var FilterRule_vue_vue_type_style_index_0_lang = "";
const _sfc_main$w = {
  props: {
    enableRemove: {
      type: Boolean
    },
    definition: {
      type: Object,
      required: true,
      default() {
        return {};
      }
    },
    modelValue: {
      type: Object,
      default() {
        return {
          operator: "and",
          filters: []
        };
      }
    }
  },
  methods: {
    addCondition() {
      this.model.filters.push({});
    },
    removeCondition(index2) {
      console.log("remove index", index2);
      this.model.filters.splice(index2, 1);
    }
  },
  data() {
    if (!this.modelValue.operator) {
      this.modelValue.operator = "and";
    }
    if (!this.modelValue.filters) {
      this.modelValue.filters = [];
    }
    return {
      model: JSON.parse(JSON.stringify(this.modelValue))
    };
  },
  watch: {
    modelValue(m) {
      if (m != this.model) {
        this.model = m;
      }
    },
    model: {
      handler: debounce_1(function(v) {
        this.$emit("update:modelValue", v);
      }, 200),
      deep: true
    }
  },
  computed: {
    summary() {
      switch (this.model.operator) {
        case "or":
          return `any`;
        case "nor":
          return `none`;
        default:
          return `all`;
      }
    },
    fields() {
      var allFields = this.definition && this.definition.fields ? [...this.definition.fields] : [];
      var definedFields = this.definition && this.definition.definedFields ? this.definition.definedFields : [];
      if (definedFields.length) {
        var customFields = {
          title: `${this.definition.title}`,
          minimum: 1,
          maximum: 1,
          key: "data",
          asObject: true,
          type: "group",
          fields: definedFields
        };
        allFields.push(customFields);
      }
      var mapped = this.$qik.utils.mapFields(allFields);
      return mapped;
    },
    operatorField() {
      return {
        minimum: 1,
        maximum: 1,
        options: [
          {
            title: "All",
            value: "and"
          },
          {
            title: "Any",
            value: "or"
          },
          {
            title: "None",
            value: "nor"
          }
        ]
      };
    }
  },
  components: {
    FilterCondition,
    NativeSelect
  }
};
const _hoisted_1$p = { class: "filter-rule" };
const _hoisted_2$j = { class: "top" };
const _hoisted_3$g = { class: "summary" };
const _hoisted_4$f = /* @__PURE__ */ createTextVNode(" Match ");
const _hoisted_5$9 = /* @__PURE__ */ createTextVNode(" of the following conditions ");
const _hoisted_6$7 = /* @__PURE__ */ createElementVNode("span", { class: "line" }, null, -1);
const _hoisted_7$5 = { class: "operator" };
const _hoisted_8$3 = /* @__PURE__ */ createTextVNode("Add Condition");
function _sfc_render$w(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_native_select = resolveComponent("native-select");
  const _component_flex_cell = resolveComponent("flex-cell");
  const _component_ux_icon = resolveComponent("ux-icon");
  const _component_ux_button = resolveComponent("ux-button");
  const _component_flex_row = resolveComponent("flex-row");
  const _component_filter_condition = resolveComponent("filter-condition");
  return openBlock(), createElementBlock("div", _hoisted_1$p, [
    createElementVNode("div", _hoisted_2$j, [
      createVNode(_component_flex_row, null, {
        default: withCtx(() => [
          createVNode(_component_flex_cell, null, {
            default: withCtx(() => [
              createElementVNode("div", _hoisted_3$g, [
                _hoisted_4$f,
                createVNode(_component_native_select, {
                  modelValue: $data.model.operator,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.model.operator = $event),
                  field: $options.operatorField
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString($options.summary), 1)
                  ]),
                  _: 1
                }, 8, ["modelValue", "field"]),
                _hoisted_5$9
              ])
            ]),
            _: 1
          }),
          $props.enableRemove ? (openBlock(), createBlock(_component_flex_cell, {
            key: 0,
            onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("remove")),
            shrink: ""
          }, {
            default: withCtx(() => [
              createVNode(_component_ux_button, {
                size: "sm",
                icon: ""
              }, {
                default: withCtx(() => [
                  createVNode(_component_ux_icon, { icon: "fa-trash" })
                ]),
                _: 1
              })
            ]),
            _: 1
          })) : createCommentVNode("", true)
        ]),
        _: 1
      })
    ]),
    (openBlock(true), createElementBlock(Fragment, null, renderList($data.model.filters, (filter, index2) => {
      return openBlock(), createBlock(_component_flex_row, {
        key: `condition-${index2}`
      }, {
        default: withCtx(() => [
          index2 != 0 ? (openBlock(), createBlock(_component_flex_cell, {
            key: 0,
            class: normalizeClass(["operator-cell", [$data.model.operator, { last: index2 == $data.model.filters.length }]]),
            vcenter: "",
            shrink: ""
          }, {
            default: withCtx(() => [
              _hoisted_6$7,
              createElementVNode("div", _hoisted_7$5, toDisplayString($data.model.operator), 1)
            ]),
            _: 2
          }, 1032, ["class"])) : createCommentVNode("", true),
          createVNode(_component_flex_cell, null, {
            default: withCtx(() => [
              createVNode(_component_filter_condition, {
                enableRemove: $data.model.filters.length > 1,
                fields: $options.fields,
                onRemove: ($event) => $options.removeCondition(index2),
                modelValue: $data.model.filters[index2],
                "onUpdate:modelValue": ($event) => $data.model.filters[index2] = $event
              }, null, 8, ["enableRemove", "fields", "onRemove", "modelValue", "onUpdate:modelValue"])
            ]),
            _: 2
          }, 1024)
        ]),
        _: 2
      }, 1024);
    }), 128)),
    createVNode(_component_ux_button, { onClick: $options.addCondition }, {
      default: withCtx(() => [
        _hoisted_8$3
      ]),
      _: 1
    }, 8, ["onClick"])
  ]);
}
var FilterRule = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["render", _sfc_render$w]]);
var FilterBuilder_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$v = {
  components: {
    FilterRule,
    NativeSelect
  },
  methods: {
    removeRule(index2) {
      if (!this.model.filters) {
        return;
      }
      this.model.filters.splice(index2, 1);
    },
    addRule() {
      if (!this.model.filters) {
        this.model.filters = [];
      }
      if (!this.model.operator) {
        this.model.operator = "and";
      }
      this.model.filters.push({
        operator: "and",
        filters: [{}]
      });
    }
  },
  computed: {
    summary() {
      switch (this.model.operator) {
        case "or":
          return `any`;
        case "nor":
          return `none`;
        default:
          return `all`;
      }
    },
    operatorField() {
      return {
        minimum: 1,
        maximum: 1,
        options: [
          {
            title: "All",
            value: "and"
          },
          {
            title: "Any",
            value: "or"
          },
          {
            title: "None",
            value: "nor"
          }
        ]
      };
    }
  },
  watch: {
    modelValue: {
      handler(v) {
        var currentString = JSON.stringify(this.model);
        var stringed = JSON.stringify(v);
        if (currentString != stringed) {
          var model = JSON.parse(stringed);
          this.model = model;
        }
      },
      immediate: true
    },
    model: {
      handler: debounce_1(function(v) {
        this.$emit("update:modelValue", v);
      }, 300),
      deep: true,
      immediate: true
    }
  },
  props: {
    definition: {
      type: Object,
      required: true
    },
    modelValue: {
      type: Object,
      default() {
        return {
          operator: "and",
          filters: [{
            operator: "and",
            filters: []
          }]
        };
      }
    }
  },
  data() {
    return {
      model: JSON.parse(JSON.stringify(this.modelValue))
    };
  }
};
const _hoisted_1$o = { class: "filters" };
const _hoisted_2$i = {
  key: 0,
  class: "top"
};
const _hoisted_3$f = { class: "summary" };
const _hoisted_4$e = /* @__PURE__ */ createTextVNode(" Match ");
const _hoisted_5$8 = /* @__PURE__ */ createTextVNode(" of the following rules ");
const _hoisted_6$6 = /* @__PURE__ */ createTextVNode("Add Filter Rule");
function _sfc_render$v(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_native_select = resolveComponent("native-select");
  const _component_filter_rule = resolveComponent("filter-rule");
  const _component_ux_button = resolveComponent("ux-button");
  const _component_flex_body = resolveComponent("flex-body");
  const _component_flex_column = resolveComponent("flex-column");
  return openBlock(), createBlock(_component_flex_column, { class: "filter-builder" }, {
    default: withCtx(() => [
      createVNode(_component_flex_body, null, {
        default: withCtx(() => [
          createElementVNode("div", _hoisted_1$o, [
            $data.model && $data.model.filters && $data.model.filters.length ? (openBlock(), createElementBlock("div", _hoisted_2$i, [
              createElementVNode("div", _hoisted_3$f, [
                _hoisted_4$e,
                createVNode(_component_native_select, {
                  modelValue: $data.model.operator,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.model.operator = $event),
                  field: $options.operatorField
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString($options.summary), 1)
                  ]),
                  _: 1
                }, 8, ["modelValue", "field"]),
                _hoisted_5$8
              ])
            ])) : createCommentVNode("", true),
            (openBlock(true), createElementBlock(Fragment, null, renderList($data.model.filters, (rule, index2) => {
              return openBlock(), createBlock(_component_filter_rule, {
                enableRemove: "",
                key: `rule-${index2}`,
                onRemove: ($event) => $options.removeRule(index2),
                definition: $props.definition,
                modelValue: $data.model.filters[index2],
                "onUpdate:modelValue": ($event) => $data.model.filters[index2] = $event,
                index: index2
              }, null, 8, ["onRemove", "definition", "modelValue", "onUpdate:modelValue", "index"]);
            }), 128)),
            createVNode(_component_ux_button, {
              onClick: _cache[1] || (_cache[1] = ($event) => $options.addRule())
            }, {
              default: withCtx(() => [
                _hoisted_6$6
              ]),
              _: 1
            })
          ])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
var FilterBuilder = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["render", _sfc_render$v], ["__scopeId", "data-v-30449bfc"]]);
var filter_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$u = {
  mixins: [InputMixin],
  components: {
    FilterBuilder
  },
  props: {
    modelValue: {
      type: Object
    }
  },
  data() {
    return {
      definition: null
    };
  },
  watch: {
    "field.referenceType": {
      handler: async function(referenceType2) {
        if (!referenceType2) {
          return this.definition = null;
        }
        var glossary = await this.$qik.content.glossary({ hash: true });
        this.definition = glossary[referenceType2];
      },
      immediate: true
    }
  },
  computed: {
    definitionTitle() {
      return this.definition ? this.definition.title : "";
    }
  },
  methods: {
    getNewDefaultEntry() {
      console.log("GET DEFAULT ENTRY");
      return {
        operator: "and",
        filters: []
      };
    }
  }
};
const _hoisted_1$n = {
  key: 0,
  class: "ux-field-title"
};
const _hoisted_2$h = {
  key: 0,
  class: "ux-required-marker"
};
const _hoisted_3$e = {
  key: 1,
  class: "ux-field-description"
};
const _hoisted_4$d = { key: 2 };
function _sfc_render$u(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_filter_builder = resolveComponent("filter-builder");
  const _component_flex_cell = resolveComponent("flex-cell");
  const _component_ux_icon = resolveComponent("ux-icon");
  const _component_ux_button = resolveComponent("ux-button");
  const _component_flex_row = resolveComponent("flex-row");
  return openBlock(), createElementBlock(Fragment, null, [
    _ctx.showLabel ? (openBlock(), createElementBlock("label", _hoisted_1$n, [
      createTextVNode(toDisplayString(_ctx.label) + " (" + toDisplayString($options.definitionTitle) + ") ", 1),
      _ctx.required ? (openBlock(), createElementBlock("span", _hoisted_2$h, "*")) : createCommentVNode("", true)
    ])) : createCommentVNode("", true),
    _ctx.showDescription ? (openBlock(), createElementBlock("div", _hoisted_3$e, toDisplayString(_ctx.description), 1)) : createCommentVNode("", true),
    _ctx.multiValue ? (openBlock(), createElementBlock("div", _hoisted_4$d, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.model, (entry, index2) => {
        return openBlock(), createBlock(_component_flex_row, {
          class: "ux-text-row",
          key: index2
        }, {
          default: withCtx(() => [
            createVNode(_component_flex_cell, null, {
              default: withCtx(() => [
                createVNode(_component_filter_builder, {
                  definition: $data.definition,
                  modelValue: _ctx.model[index2],
                  "onUpdate:modelValue": ($event) => _ctx.model[index2] = $event
                }, null, 8, ["definition", "modelValue", "onUpdate:modelValue"])
              ]),
              _: 2
            }, 1024),
            createVNode(_component_flex_cell, {
              shrink: "",
              vcenter: ""
            }, {
              default: withCtx(() => [
                _ctx.canRemoveValue ? (openBlock(), createBlock(_component_ux_button, {
                  key: 0,
                  tag: "a",
                  icon: "",
                  onClick: ($event) => _ctx.remove(entry)
                }, {
                  default: withCtx(() => [
                    createVNode(_component_ux_icon, { icon: "fa-times" })
                  ]),
                  _: 2
                }, 1032, ["onClick"])) : createCommentVNode("", true)
              ]),
              _: 2
            }, 1024)
          ]),
          _: 2
        }, 1024);
      }), 128)),
      _ctx.canAddValue ? (openBlock(), createBlock(_component_ux_button, {
        key: 0,
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.add())
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(_ctx.addLabel), 1)
        ]),
        _: 1
      })) : createCommentVNode("", true)
    ])) : (openBlock(), createBlock(_component_filter_builder, {
      key: 3,
      definition: $data.definition,
      modelValue: _ctx.model,
      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.model = $event)
    }, null, 8, ["definition", "modelValue"]))
  ], 64);
}
var FilterInput = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["render", _sfc_render$u], ["__scopeId", "data-v-5a049062"]]);
var switch_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$t = {
  mixins: [InputMixin],
  props: {
    modelValue: {
      type: Boolean,
      default() {
        return false;
      }
    }
  },
  data() {
    return {
      value: this.modelValue
    };
  },
  watch: {
    modelValue(val, old) {
      this.value = val;
      this.model = val;
    }
  },
  computed: {
    longDescription() {
      return String(this.description).length > 2;
    },
    defaultValue() {
      return false;
    },
    model: {
      get() {
        return !!this.value;
      },
      set(value) {
        this.value = !!value;
        this.$emit("update:modelValue", this.value);
      }
    }
  }
};
const _hoisted_1$m = {
  key: 0,
  class: "ux-field-title"
};
const _hoisted_2$g = {
  key: 0,
  class: "ux-required-marker"
};
const _hoisted_3$d = {
  key: 1,
  class: "ux-field-description"
};
function _sfc_render$t(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ux_switch = resolveComponent("ux-switch");
  const _component_flex_cell = resolveComponent("flex-cell");
  const _component_flex_row = resolveComponent("flex-row");
  return openBlock(), createBlock(_component_flex_row, {
    onClick: _cache[1] || (_cache[1] = ($event) => _ctx.touch()),
    gap: ""
  }, {
    default: withCtx(() => [
      createVNode(_component_flex_cell, {
        vcenter: "",
        shrink: ""
      }, {
        default: withCtx(() => [
          createVNode(_component_ux_switch, {
            value: $options.model,
            onClick: _cache[0] || (_cache[0] = ($event) => $options.model = !$options.model)
          }, null, 8, ["value"])
        ]),
        _: 1
      }),
      createVNode(_component_flex_cell, { vcenter: "" }, {
        default: withCtx(() => [
          createElementVNode("div", null, [
            _ctx.showLabel ? (openBlock(), createElementBlock("label", _hoisted_1$m, [
              createTextVNode(toDisplayString(_ctx.label) + " ", 1),
              _ctx.required ? (openBlock(), createElementBlock("span", _hoisted_2$g, "*")) : createCommentVNode("", true)
            ])) : createCommentVNode("", true),
            _ctx.showDescription ? (openBlock(), createElementBlock("div", _hoisted_3$d, toDisplayString(_ctx.description), 1)) : createCommentVNode("", true)
          ])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
var Switch = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["render", _sfc_render$t], ["__scopeId", "data-v-7ee9d4cd"]]);
var filedrop_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$s = {
  props: {
    multiple: {
      type: Boolean
    }
  },
  methods: {
    clicked() {
      if (!this.multiple) {
        this.$refs.file.value = null;
      }
      this.$refs.file.click();
    },
    fileover(event) {
    },
    filedrop(event) {
    },
    filesSelected(files) {
      console.log("FILES SELECTED", files);
      var mapped = [];
      for (var f in [...files]) {
        var file = files[f];
        mapped.push({
          file,
          data: {},
          name: file.name,
          size: file.size,
          state: ""
        });
      }
      this.$emit("files", mapped);
    }
  }
};
const _hoisted_1$l = ["multiple"];
const _hoisted_2$f = /* @__PURE__ */ createTextVNode("Select Files");
function _sfc_render$s(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ux_button = resolveComponent("ux-button");
  return openBlock(), createElementBlock("label", {
    class: "file-drop",
    onDragover: _cache[2] || (_cache[2] = withModifiers((...args) => $options.fileover && $options.fileover(...args), ["prevent", "stop"])),
    onDrop: _cache[3] || (_cache[3] = withModifiers((...args) => $options.filedrop && $options.filedrop(...args), ["prevent", "stop"]))
  }, [
    createElementVNode("input", {
      ref: "file",
      type: "file",
      multiple: $props.multiple,
      onChange: _cache[0] || (_cache[0] = ($event) => $options.filesSelected($event.target.files))
    }, null, 40, _hoisted_1$l),
    createElementVNode("div", {
      class: "file-drop-ux",
      onClick: _cache[1] || (_cache[1] = (...args) => $options.clicked && $options.clicked(...args))
    }, [
      renderSlot(_ctx.$slots, "default", {}, () => [
        createVNode(_component_ux_button, null, {
          default: withCtx(() => [
            _hoisted_2$f
          ]),
          _: 1
        })
      ], true)
    ])
  ], 32);
}
var FileDrop = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["render", _sfc_render$s], ["__scopeId", "data-v-67879182"]]);
var upload_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$r = {
  mixins: [InputMixin],
  components: {
    FileDrop
  },
  props: {},
  data() {
    return {
      files: [],
      bytesUploaded: 0,
      state: "ready"
    };
  },
  methods: {
    filesize(size) {
      return this.$qik.files.filesize(size);
    },
    remove(index2) {
      var self2 = this;
      var fileItem = self2.files[index2];
      if (fileItem.cancelToken) {
        fileItem.cancelToken.cancel("Operation canceled by the user.");
      }
      self2.files.splice(index2, 1);
      console.log("Map to values", self2.files);
      self2.mapFilesToValues();
    },
    upload(fileItem) {
      var self2 = this;
      switch (fileItem.state) {
        case "complete":
        case "processing":
          return;
      }
      fileItem.state = "processing";
      var body = new FormData();
      var jsonData = {};
      var allScopeIDs = self2.user ? Object.keys(self2.user.permissions) : [];
      jsonData.meta = {
        scopes: allScopeIDs
      };
      body.append("json", JSON.stringify(jsonData));
      body.append("file", fileItem.file, fileItem.name);
      var config = {
        headers: {
          "Content-Type": "multipart/form-data"
        },
        onUploadProgress: (progressEvent) => {
          let percentCompleted = Math.floor(progressEvent.loaded * 100 / progressEvent.total);
          fileItem.progress = percentCompleted;
          fileItem.bytesUploaded = progressEvent.loaded;
          fileItem.bytesTotal = progressEvent.total;
          self2.bytesUploaded = self2.files.reduce(function(set, file) {
            if (file.state == "complete") {
              set += file.size || file.bytesTotal || 0;
            } else {
              set += file.bytesUploaded || 0;
            }
            return set;
          }, 0);
        }
      };
      const CancelToken = self2.$qik.api.CancelToken;
      const source = CancelToken.source();
      config.cancelToken = source.token;
      fileItem.cancelToken = source;
      config.headers = {
        "Content-Type": void 0
      };
      return self2.$qik.api.post(`/file/upload`, body, config).then(function(res) {
        fileItem.state = "complete";
        fileItem.result = res.data;
        fileItem.cancelToken = null;
        self2.uploadNextFile();
      }).catch(function(err) {
        fileItem.state = "error";
        fileItem.cancelToken = null;
        self2.uploadNextFile();
      });
    },
    uploadNextFile() {
      var self2 = this;
      self2.state = "uploading";
      var nextFile = self2.files.find(function(fileItem) {
        switch (fileItem.state) {
          case "complete":
          case "error":
            return;
          default:
            return true;
        }
      });
      if (nextFile) {
        self2.upload(nextFile);
      } else {
        self2.state = "ready";
      }
      self2.mapFilesToValues();
    },
    mapFilesToValues() {
      var self2 = this;
      if (self2.multiValue) {
        self2.model = self2.files.map(function(item) {
          return item.result;
        });
      } else {
        var first = self2.files[0];
        if (!first) {
          return self2.model = void 0;
        }
        self2.model = first.result;
      }
      console.log("NEW MODEL", self2.model);
    },
    fileover(event) {
    },
    filedrop(event) {
    },
    filesSelected(files) {
      this.touch();
      console.log("FILES SELECTED", files);
      if (this.multiValue) {
        this.files = [...this.files, ...files];
      } else {
        this.files = files;
      }
      return this.uploadNextFile();
    }
  },
  computed: {}
};
const _hoisted_1$k = {
  key: 0,
  class: "ux-field-title"
};
const _hoisted_2$e = {
  key: 0,
  class: "ux-required-marker"
};
const _hoisted_3$c = {
  key: 1,
  class: "ux-field-description"
};
const _hoisted_4$c = {
  key: 2,
  class: "files"
};
const _hoisted_5$7 = { class: "size" };
const _hoisted_6$5 = /* @__PURE__ */ createTextVNode("Select Files");
const _hoisted_7$4 = /* @__PURE__ */ createTextVNode("Select File");
function _sfc_render$r(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_progress_bar = resolveComponent("progress-bar");
  const _component_flex_cell = resolveComponent("flex-cell");
  const _component_ux_icon = resolveComponent("ux-icon");
  const _component_ux_button = resolveComponent("ux-button");
  const _component_flex_row = resolveComponent("flex-row");
  const _component_file_drop = resolveComponent("file-drop");
  return openBlock(), createElementBlock(Fragment, null, [
    _ctx.showLabel ? (openBlock(), createElementBlock("label", _hoisted_1$k, [
      createTextVNode(toDisplayString(_ctx.label) + " ", 1),
      _ctx.required ? (openBlock(), createElementBlock("span", _hoisted_2$e, "*")) : createCommentVNode("", true)
    ])) : createCommentVNode("", true),
    _ctx.showDescription ? (openBlock(), createElementBlock("div", _hoisted_3$c, toDisplayString(_ctx.description), 1)) : createCommentVNode("", true),
    $data.files && $data.files.length ? (openBlock(), createElementBlock("div", _hoisted_4$c, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($data.files, (file, index2) => {
        return openBlock(), createElementBlock("div", {
          class: "file-item",
          key: index2
        }, [
          createVNode(_component_flex_row, null, {
            default: withCtx(() => [
              createVNode(_component_flex_cell, null, {
                default: withCtx(() => [
                  createElementVNode("strong", null, toDisplayString(file.name), 1),
                  createElementVNode("div", _hoisted_5$7, toDisplayString($options.filesize(file.size)), 1),
                  createVNode(_component_progress_bar, {
                    value: file.progress
                  }, null, 8, ["value"])
                ]),
                _: 2
              }, 1024),
              createVNode(_component_flex_cell, { shrink: "" }, {
                default: withCtx(() => [
                  createVNode(_component_ux_button, {
                    icon: "",
                    onClick: ($event) => $options.remove(index2)
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ux_icon, { icon: "fa-times" })
                    ]),
                    _: 2
                  }, 1032, ["onClick"])
                ]),
                _: 2
              }, 1024)
            ]),
            _: 2
          }, 1024)
        ]);
      }), 128))
    ])) : createCommentVNode("", true),
    _ctx.multiValue ? (openBlock(), createElementBlock(Fragment, { key: 3 }, [
      _ctx.canAddValue ? (openBlock(), createBlock(_component_file_drop, {
        key: 0,
        multiple: _ctx.multiValue,
        onFiles: $options.filesSelected
      }, {
        default: withCtx(() => [
          createVNode(_component_ux_button, null, {
            default: withCtx(() => [
              _hoisted_6$5
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["multiple", "onFiles"])) : createCommentVNode("", true)
    ], 64)) : (openBlock(), createBlock(_component_file_drop, {
      key: 4,
      onFiles: $options.filesSelected
    }, {
      default: withCtx(() => [
        createVNode(_component_ux_button, null, {
          default: withCtx(() => [
            _hoisted_7$4
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["onFiles"]))
  ], 64);
}
var Upload = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["render", _sfc_render$r], ["__scopeId", "data-v-124f63e6"]]);
var group_vue_vue_type_style_index_0_scoped_true_lang$1 = "";
const _sfc_main$q = {
  mixins: [InputMixin],
  components: { draggable: draggableComponent },
  props: {
    modelValue: {
      type: [Object, Array]
    }
  },
  data() {
    return {
      drag: false
    };
  },
  created() {
  },
  computed: {
    groupKey() {
      return `${this.field.key}-order`;
    },
    collapsible() {
      return this.field.collapsible;
    },
    reorderable() {
      return this.multiValue && this.field.reorderable;
    },
    sameLine() {
      return this.field.sameLine;
    }
  },
  methods: {
    stateChange(details) {
      this.$emit("form:state", details);
    },
    multiLabel(entry, index2) {
      if (entry.title) {
        return entry.title;
      }
      if (entry.name) {
        return entry.name;
      }
      if (entry.firstName) {
        return entry.firstName;
      }
      return `${this.label} ${index2 + 1}`;
    },
    enterPress(event) {
      if (this.canAddValue) {
        event.stopImmediatePropagation();
        event.preventDefault();
        this.add();
      }
    },
    refocus() {
      this.$nextTick(function() {
        var rows = this.$refs.row;
        var lastRow = rows[rows.length - 1];
        if (!lastRow) {
          return;
        }
        var input = lastRow.$el.querySelector(".ux-field-focus");
        if (!input) {
          return;
        }
        input.focus();
      });
    },
    getNewDefaultEntry() {
      return {};
    }
  }
};
const _hoisted_1$j = {
  key: 0,
  class: "ux-multi-group"
};
function _sfc_render$q(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ux_icon = resolveComponent("ux-icon");
  const _component_flex_cell = resolveComponent("flex-cell");
  const _component_ux_button = resolveComponent("ux-button");
  const _component_flex_row = resolveComponent("flex-row");
  const _component_ux_panel_header = resolveComponent("ux-panel-header");
  const _component_ux_form = resolveComponent("ux-form");
  const _component_ux_panel_body = resolveComponent("ux-panel-body");
  const _component_ux_panel = resolveComponent("ux-panel");
  const _component_draggable = resolveComponent("draggable");
  return _ctx.multiValue ? (openBlock(), createElementBlock("div", _hoisted_1$j, [
    $options.reorderable ? (openBlock(), createBlock(_component_draggable, {
      key: 0,
      modelValue: _ctx.model,
      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.model = $event),
      group: $options.groupKey,
      onStart: _cache[2] || (_cache[2] = ($event) => $data.drag = true),
      onEnd: _cache[3] || (_cache[3] = ($event) => $data.drag = false)
    }, {
      item: withCtx(({ element, index: index2 }) => [
        createVNode(_component_ux_panel, { ref: "row" }, {
          default: withCtx(() => [
            createVNode(_component_ux_panel_header, null, {
              default: withCtx(() => [
                createVNode(_component_flex_row, {
                  vcenter: "",
                  gap: ""
                }, {
                  default: withCtx(() => [
                    $options.reorderable ? (openBlock(), createBlock(_component_flex_cell, {
                      key: 0,
                      shrink: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ux_icon, { icon: "fa-arrows" })
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    createVNode(_component_flex_cell, { vcenter: "" }, {
                      default: withCtx(() => [
                        createElementVNode("div", null, [
                          createElementVNode("strong", null, toDisplayString($options.multiLabel(element, index2)), 1)
                        ])
                      ]),
                      _: 2
                    }, 1024),
                    $options.collapsible ? (openBlock(), createBlock(_component_flex_cell, {
                      key: 1,
                      shrink: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ux_button, {
                          size: "xs",
                          tag: "a",
                          onClick: ($event) => element.collapsed = !element.collapsed
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(element.collapsed ? "More" : "Less") + " ", 1),
                            createVNode(_component_ux_icon, {
                              right: "",
                              icon: element.collapsed ? `fa-angle-down` : `fa-angle-up`
                            }, null, 8, ["icon"])
                          ]),
                          _: 2
                        }, 1032, ["onClick"])
                      ]),
                      _: 2
                    }, 1024)) : createCommentVNode("", true),
                    createVNode(_component_flex_cell, {
                      vcenter: "",
                      shrink: ""
                    }, {
                      default: withCtx(() => [
                        _ctx.canRemoveValue ? (openBlock(), createBlock(_component_ux_button, {
                          key: 0,
                          icon: "",
                          tag: "a",
                          onClick: ($event) => _ctx.remove(element)
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_ux_icon, { icon: "fa-times" })
                          ]),
                          _: 2
                        }, 1032, ["onClick"])) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1024),
            withDirectives(createVNode(_component_ux_panel_body, {
              onKeydown: _cache[0] || (_cache[0] = withKeys(($event) => $options.enterPress($event), ["enter"]))
            }, {
              default: withCtx(() => [
                createVNode(_component_ux_form, {
                  ref: "form",
                  "onForm:state": $options.stateChange,
                  parentModel: _ctx.parentModel,
                  modelValue: _ctx.model[index2],
                  "onUpdate:modelValue": ($event) => _ctx.model[index2] = $event,
                  flex: $options.sameLine,
                  fields: _ctx.field.fields
                }, null, 8, ["onForm:state", "parentModel", "modelValue", "onUpdate:modelValue", "flex", "fields"])
              ]),
              _: 2
            }, 1536), [
              [vShow, !$options.collapsible || !element.collapsed]
            ])
          ]),
          _: 2
        }, 1536)
      ]),
      _: 1
    }, 8, ["modelValue", "group"])) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(_ctx.model, (element, index2) => {
      return openBlock(), createBlock(_component_ux_panel, {
        ref_for: true,
        ref: "row"
      }, {
        default: withCtx(() => [
          createVNode(_component_ux_panel_header, null, {
            default: withCtx(() => [
              createVNode(_component_flex_row, {
                vcenter: "",
                gap: ""
              }, {
                default: withCtx(() => [
                  $options.reorderable ? (openBlock(), createBlock(_component_flex_cell, {
                    key: 0,
                    shrink: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ux_icon, { icon: "fa-arrows" })
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  createVNode(_component_flex_cell, { vcenter: "" }, {
                    default: withCtx(() => [
                      createElementVNode("div", null, [
                        createElementVNode("strong", null, toDisplayString($options.multiLabel(element, index2)), 1)
                      ])
                    ]),
                    _: 2
                  }, 1024),
                  $options.collapsible ? (openBlock(), createBlock(_component_flex_cell, {
                    key: 1,
                    shrink: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ux_button, {
                        size: "xs",
                        tag: "a",
                        onClick: ($event) => element.collapsed = !element.collapsed
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(element.collapsed ? "More" : "Less") + " ", 1),
                          createVNode(_component_ux_icon, {
                            right: "",
                            icon: element.collapsed ? `fa-angle-down` : `fa-angle-up`
                          }, null, 8, ["icon"])
                        ]),
                        _: 2
                      }, 1032, ["onClick"])
                    ]),
                    _: 2
                  }, 1024)) : createCommentVNode("", true),
                  createVNode(_component_flex_cell, {
                    vcenter: "",
                    shrink: ""
                  }, {
                    default: withCtx(() => [
                      _ctx.canRemoveValue ? (openBlock(), createBlock(_component_ux_button, {
                        key: 0,
                        icon: "",
                        tag: "a",
                        onClick: ($event) => _ctx.remove(element)
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ux_icon, { icon: "fa-times" })
                        ]),
                        _: 2
                      }, 1032, ["onClick"])) : createCommentVNode("", true)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024)
            ]),
            _: 2
          }, 1024),
          withDirectives(createVNode(_component_ux_panel_body, {
            onKeydown: _cache[4] || (_cache[4] = withKeys(($event) => $options.enterPress($event), ["enter"]))
          }, {
            default: withCtx(() => [
              createVNode(_component_ux_form, {
                ref_for: true,
                ref: "form",
                "onForm:state": $options.stateChange,
                parentModel: _ctx.parentModel,
                modelValue: _ctx.model[index2],
                "onUpdate:modelValue": ($event) => _ctx.model[index2] = $event,
                flex: $options.sameLine,
                fields: _ctx.field.fields
              }, null, 8, ["onForm:state", "parentModel", "modelValue", "onUpdate:modelValue", "flex", "fields"])
            ]),
            _: 2
          }, 1536), [
            [vShow, !element.collapsed]
          ])
        ]),
        _: 2
      }, 1536);
    }), 256)),
    _ctx.canAddValue ? (openBlock(), createBlock(_component_ux_button, {
      key: 2,
      onClick: _cache[5] || (_cache[5] = ($event) => _ctx.add())
    }, {
      default: withCtx(() => [
        createTextVNode(toDisplayString(_ctx.addLabel) + " ", 1),
        createVNode(_component_ux_icon, {
          icon: "fa-plus",
          right: ""
        })
      ]),
      _: 1
    })) : createCommentVNode("", true)
  ])) : (openBlock(), createBlock(_component_ux_form, {
    key: 1,
    ref: "form",
    "onForm:state": $options.stateChange,
    parentModel: _ctx.parentModel,
    modelValue: _ctx.model,
    "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => _ctx.model = $event),
    flex: $options.sameLine,
    fields: _ctx.field.fields
  }, null, 8, ["onForm:state", "parentModel", "modelValue", "flex", "fields"]));
}
var FieldGroup$1 = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["render", _sfc_render$q], ["__scopeId", "data-v-67669f46"]]);
const _sfc_main$p = {
  props: {
    option: {
      required: true
    }
  },
  computed: {
    plainValue() {
      return this.option._id || this.option.value || this.option;
    }
  }
};
function _sfc_render$p(_ctx, _cache, $props, $setup, $data, $options) {
  return renderSlot(_ctx.$slots, "default", { plainValue: $options.plainValue }, () => [
    createElementVNode("pre", null, toDisplayString($props.option), 1)
  ]);
}
var OptionSlot = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["render", _sfc_render$p]]);
var buttonSelect_vue_vue_type_style_index_0_scoped_true_lang = "";
function isUndefined$2(entry) {
  return entry === void 0 || typeof entry === "undefined" || entry === null || String(entry) === "null" || String(entry) === "undefined";
}
const _sfc_main$o = {
  components: {
    OptionSlot
  },
  props: {
    modelValue: {}
  },
  mixins: [InputMixin],
  created() {
    this.model = this.model;
  },
  methods: {
    select(val) {
      var self2 = this;
      if (self2.multiValue) {
        self2.model = [...self2.model, val];
      } else {
        self2.model = val;
      }
    },
    deselect(val) {
      var self2 = this;
      if (this.multiValue) {
        var sliced = this.model.slice();
        var index2 = sliced.indexOf(val);
        if (index2 != -1) {
          sliced.splice(index2, 1);
          this.model = sliced;
        }
      } else {
        if (self2.getValue(this.model) == val) {
          this.model = void 0;
        } else {
          this.model = val;
        }
      }
    },
    toggle(plainValue) {
      if (this.selectionHash[plainValue]) {
        this.deselect(plainValue);
      } else {
        this.select(plainValue);
      }
      this.touch();
    },
    model: {
      get() {
        return this.cleanOutput(this.value);
      },
      set(val) {
        this.value = this.cleanInput(val);
        this.dispatch();
      }
    },
    cleanOutput(val) {
      var self2 = this;
      if (isUndefined$2(val)) {
        if (self2.multiValue) {
          val = [];
        } else {
          val = void 0;
        }
      } else {
        if (self2.multiValue) {
          val = (val || []).map(function(i2) {
            return self2.getValue(i2);
          });
        } else {
          val = self2.getValue(val);
        }
      }
      return val;
    },
    cleanInput(val) {
      var self2 = this;
      if (self2.multiValue) {
        if (!val) {
          val = [];
        }
        if (!Array.isArray(val)) {
          val = [val];
        }
        if (self2.maximum) {
          if (val.length > self2.maximum) {
            val.length = self2.maximum;
          }
        }
        val = val.map(function(v) {
          var valueKey2 = self2.getValue(v);
          return self2.returnObject ? self2.optionLookup[valueKey2] : valueKey2;
        });
      } else {
        var valueKey = self2.getValue(val);
        val = self2.returnObject ? self2.optionLookup[valueKey] : valueKey;
      }
      return val;
    }
  },
  computed: {
    selectionHash() {
      var hash = {};
      if (this.model) {
        if (this.multiValue) {
          this.model.forEach(function(val) {
            hash[val] = true;
          });
        } else {
          hash[this.model] = true;
        }
      }
      console.log("change hash");
      return hash;
    },
    returnObject() {
      return this.type == "reference";
    },
    summary() {
      return this.getLabel(this.optionLookup[this.model]) || "Click to select";
    }
  }
};
const _hoisted_1$i = {
  key: 0,
  class: "ux-field-title"
};
const _hoisted_2$d = {
  key: 0,
  class: "ux-required-marker"
};
const _hoisted_3$b = {
  key: 1,
  class: "ux-field-description"
};
const _hoisted_4$b = { class: "buttons" };
function _sfc_render$o(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ux_icon = resolveComponent("ux-icon");
  const _component_ux_button = resolveComponent("ux-button");
  const _component_option_slot = resolveComponent("option-slot");
  return openBlock(), createElementBlock(Fragment, null, [
    _ctx.showLabel ? (openBlock(), createElementBlock("label", _hoisted_1$i, [
      createTextVNode(toDisplayString(_ctx.label) + " ", 1),
      _ctx.required ? (openBlock(), createElementBlock("span", _hoisted_2$d, "*")) : createCommentVNode("", true)
    ])) : createCommentVNode("", true),
    _ctx.showDescription ? (openBlock(), createElementBlock("div", _hoisted_3$b, toDisplayString(_ctx.description), 1)) : createCommentVNode("", true),
    createElementVNode("div", _hoisted_4$b, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.selectableOptions, (option2) => {
        return openBlock(), createBlock(_component_option_slot, { option: option2 }, {
          default: withCtx(({ plainValue }) => [
            createVNode(_component_ux_button, {
              class: normalizeClass({ active: $options.selectionHash[plainValue] }),
              onClick: ($event) => $options.toggle(plainValue)
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.getLabel(option2)) + " ", 1),
                createVNode(_component_ux_icon, {
                  icon: "fa-check",
                  right: ""
                })
              ]),
              _: 2
            }, 1032, ["class", "onClick"])
          ]),
          _: 2
        }, 1032, ["option"]);
      }), 256))
    ])
  ], 64);
}
var ButtonSelect = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["render", _sfc_render$o], ["__scopeId", "data-v-4b69def8"]]);
var objectField_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$n = {
  props: {
    modelValue: {
      type: Object
    }
  },
  mixins: [InputMixin],
  computed: {},
  methods: {
    getNewDefaultEntry() {
      return {};
    }
  }
};
const _hoisted_1$h = {
  key: 0,
  class: "ux-field-title"
};
const _hoisted_2$c = {
  key: 0,
  class: "ux-required-marker"
};
const _hoisted_3$a = {
  key: 1,
  class: "ux-field-description"
};
const _hoisted_4$a = { key: 2 };
const _hoisted_5$6 = { key: 3 };
function _sfc_render$n(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_flex_cell = resolveComponent("flex-cell");
  const _component_ux_icon = resolveComponent("ux-icon");
  const _component_ux_button = resolveComponent("ux-button");
  const _component_flex_row = resolveComponent("flex-row");
  return openBlock(), createElementBlock(Fragment, null, [
    _ctx.showLabel ? (openBlock(), createElementBlock("label", _hoisted_1$h, [
      createTextVNode(toDisplayString(_ctx.label) + " ", 1),
      _ctx.required ? (openBlock(), createElementBlock("span", _hoisted_2$c, "*")) : createCommentVNode("", true)
    ])) : createCommentVNode("", true),
    _ctx.showDescription ? (openBlock(), createElementBlock("div", _hoisted_3$a, toDisplayString(_ctx.description), 1)) : createCommentVNode("", true),
    _ctx.multiValue ? (openBlock(), createElementBlock("div", _hoisted_4$a, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.model, (entry, index2) => {
        return openBlock(), createBlock(_component_flex_row, {
          class: "ux-text-row",
          key: index2
        }, {
          default: withCtx(() => [
            createVNode(_component_flex_cell, null, {
              default: withCtx(() => [
                createElementVNode("pre", null, toDisplayString(entry), 1)
              ]),
              _: 2
            }, 1024),
            createVNode(_component_flex_cell, {
              shrink: "",
              vcenter: ""
            }, {
              default: withCtx(() => [
                _ctx.canRemoveValue ? (openBlock(), createBlock(_component_ux_button, {
                  key: 0,
                  tag: "a",
                  icon: "",
                  onClick: ($event) => _ctx.remove(entry)
                }, {
                  default: withCtx(() => [
                    createVNode(_component_ux_icon, { icon: "fa-times" })
                  ]),
                  _: 2
                }, 1032, ["onClick"])) : createCommentVNode("", true)
              ]),
              _: 2
            }, 1024)
          ]),
          _: 2
        }, 1024);
      }), 128)),
      _ctx.canAddValue ? (openBlock(), createBlock(_component_ux_button, {
        key: 0,
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.add())
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(_ctx.addLabel) + " ", 1),
          createVNode(_component_ux_icon, {
            icon: "fa-plus",
            right: ""
          })
        ]),
        _: 1
      })) : createCommentVNode("", true)
    ])) : (openBlock(), createElementBlock("pre", _hoisted_5$6, toDisplayString(_ctx.model), 1))
  ], 64);
}
var ObjectField = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["render", _sfc_render$n], ["__scopeId", "data-v-6b3fc2f2"]]);
var optionsManager_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$m = {
  props: {
    modelValue: {
      type: [String, Array]
    }
  },
  mixins: [InputMixin],
  computed: {
    lazy() {
      switch (this.type) {
        case "integer":
        case "number":
        case "decimal":
        case "float":
        case "url":
        case "key":
          return true;
      }
    },
    actualPlaceholder() {
      if (this.field.placeholder) {
        return this.field.placeholder;
      }
      switch (this.type) {
        case "integer":
        case "number":
        case "decimal":
        case "float":
          return "0";
        case "url":
          return "https://www.website.com";
        case "email":
          return "you@youremail.com";
      }
    },
    addLabel() {
      if (this.numValues) {
        return `Add another option`;
      } else {
        return `Add options`;
      }
    }
  },
  methods: {
    titleBlurred(index2) {
      var entry;
      if (this.multiValue) {
        entry = this.model[index2];
      } else {
        entry = this.model;
      }
      if (entry.title === entry.value) {
        return;
      }
      delete entry.pristine;
    },
    valueTouched(index2) {
      var entry;
      if (this.multiValue) {
        entry = this.model[index2];
      } else {
        entry = this.model;
      }
      delete entry.pristine;
      this.touch();
    },
    entryTitleChanged(index2) {
      this.$nextTick(function() {
        var entry;
        if (this.multiValue) {
          entry = this.model[index2];
        } else {
          entry = this.model;
        }
        if (entry.pristine) {
          entry.value = entry.title;
        }
      });
    },
    cleanOutputValue(obj) {
      obj.value = this.cleanTextInput(obj.value, this.type, this);
      return obj;
    },
    cleanInputValue(obj) {
      obj.value = this.cleanTextInput(obj.value, this.type, this);
      return obj;
    },
    getNewDefaultEntry() {
      return {
        pristine: true
      };
    }
  }
};
const _withScopeId$1 = (n2) => (pushScopeId("data-v-42a51394"), n2 = n2(), popScopeId(), n2);
const _hoisted_1$g = {
  key: 0,
  class: "ux-field-title"
};
const _hoisted_2$b = {
  key: 0,
  class: "ux-required-marker"
};
const _hoisted_3$9 = {
  key: 1,
  class: "ux-field-description"
};
const _hoisted_4$9 = { key: 2 };
const _hoisted_5$5 = { class: "ux-text-wrap prefixed" };
const _hoisted_6$4 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createElementVNode("span", { class: "ux-text-prefix" }, "Label", -1));
const _hoisted_7$3 = ["onBlur", "onUpdate:modelValue"];
const _hoisted_8$2 = ["onBlur", "onUpdate:modelValue"];
const _hoisted_9$1 = { class: "ux-text-wrap prefixed" };
const _hoisted_10$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createElementVNode("span", { class: "ux-text-prefix" }, "Value", -1));
const _hoisted_11$1 = ["onFocus", "onUpdate:modelValue"];
const _hoisted_12 = ["onFocus", "onUpdate:modelValue"];
const _hoisted_13 = { class: "ux-text-wrap prefixed" };
const _hoisted_14 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createElementVNode("span", { class: "ux-text-prefix" }, "Label", -1));
const _hoisted_15 = { class: "ux-text-wrap prefixed" };
const _hoisted_16 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createElementVNode("span", { class: "ux-text-prefix" }, "Value", -1));
function _sfc_render$m(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_flex_cell = resolveComponent("flex-cell");
  const _component_ux_icon = resolveComponent("ux-icon");
  const _component_ux_button = resolveComponent("ux-button");
  const _component_flex_row = resolveComponent("flex-row");
  return openBlock(), createElementBlock(Fragment, null, [
    _ctx.showLabel ? (openBlock(), createElementBlock("label", _hoisted_1$g, [
      createTextVNode(toDisplayString(_ctx.label) + " ", 1),
      _ctx.required ? (openBlock(), createElementBlock("span", _hoisted_2$b, "*")) : createCommentVNode("", true)
    ])) : createCommentVNode("", true),
    _ctx.showDescription ? (openBlock(), createElementBlock("div", _hoisted_3$9, toDisplayString(_ctx.description), 1)) : createCommentVNode("", true),
    _ctx.multiValue ? (openBlock(), createElementBlock("div", _hoisted_4$9, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.model, (entry, index2) => {
        return openBlock(), createBlock(_component_flex_row, {
          class: "ux-text-row",
          key: index2
        }, {
          default: withCtx(() => [
            createVNode(_component_flex_cell, null, {
              default: withCtx(() => [
                createElementVNode("div", _hoisted_5$5, [
                  _hoisted_6$4,
                  $options.lazy ? withDirectives((openBlock(), createElementBlock("input", {
                    key: 0,
                    class: "ux-field-focus ux-text-input-multiple",
                    placeholder: "Label",
                    onFocus: _cache[0] || (_cache[0] = (...args) => _ctx.touch && _ctx.touch(...args)),
                    ref_for: true,
                    ref: "input",
                    onKeydown: _cache[1] || (_cache[1] = withKeys(withModifiers(($event) => _ctx.add(), ["stop", "prevent"]), ["enter"])),
                    onBlur: ($event) => $options.titleBlurred(index2),
                    "onUpdate:modelValue": [($event) => $options.entryTitleChanged(index2), ($event) => _ctx.model[index2].title = $event]
                  }, null, 40, _hoisted_7$3)), [
                    [
                      vModelText,
                      _ctx.model[index2].title,
                      void 0,
                      { lazy: true }
                    ]
                  ]) : createCommentVNode("", true),
                  !$options.lazy ? withDirectives((openBlock(), createElementBlock("input", {
                    key: 1,
                    class: "ux-field-focus ux-text-input-multiple",
                    placeholder: "Label",
                    onFocus: _cache[2] || (_cache[2] = (...args) => _ctx.touch && _ctx.touch(...args)),
                    ref_for: true,
                    ref: "input",
                    onKeydown: _cache[3] || (_cache[3] = withKeys(withModifiers(($event) => _ctx.add(), ["stop", "prevent"]), ["enter"])),
                    onBlur: ($event) => $options.titleBlurred(index2),
                    "onUpdate:modelValue": [($event) => $options.entryTitleChanged(index2), ($event) => _ctx.model[index2].title = $event]
                  }, null, 40, _hoisted_8$2)), [
                    [vModelText, _ctx.model[index2].title]
                  ]) : createCommentVNode("", true)
                ])
              ]),
              _: 2
            }, 1024),
            createVNode(_component_flex_cell, null, {
              default: withCtx(() => [
                createElementVNode("div", _hoisted_9$1, [
                  _hoisted_10$1,
                  $options.lazy ? withDirectives((openBlock(), createElementBlock("input", {
                    key: 0,
                    class: "ux-field-focus ux-text-input-multiple",
                    placeholder: "Value",
                    onFocus: ($event) => $options.valueTouched(index2),
                    ref_for: true,
                    ref: "valueInput",
                    onKeydown: _cache[4] || (_cache[4] = withKeys(withModifiers(($event) => _ctx.add(), ["stop", "prevent"]), ["enter"])),
                    "onUpdate:modelValue": ($event) => _ctx.model[index2].value = $event
                  }, null, 40, _hoisted_11$1)), [
                    [
                      vModelText,
                      _ctx.model[index2].value,
                      void 0,
                      { lazy: true }
                    ]
                  ]) : createCommentVNode("", true),
                  !$options.lazy ? withDirectives((openBlock(), createElementBlock("input", {
                    key: 1,
                    class: "ux-field-focus ux-text-input-multiple",
                    placeholder: "Value",
                    onFocus: ($event) => $options.valueTouched(index2),
                    ref_for: true,
                    ref: "valueInput",
                    onKeydown: _cache[5] || (_cache[5] = withKeys(withModifiers(($event) => _ctx.add(), ["stop", "prevent"]), ["enter"])),
                    "onUpdate:modelValue": ($event) => _ctx.model[index2].value = $event
                  }, null, 40, _hoisted_12)), [
                    [vModelText, _ctx.model[index2].value]
                  ]) : createCommentVNode("", true)
                ])
              ]),
              _: 2
            }, 1024),
            createVNode(_component_flex_cell, {
              shrink: "",
              vcenter: ""
            }, {
              default: withCtx(() => [
                _ctx.canRemoveValue ? (openBlock(), createBlock(_component_ux_button, {
                  key: 0,
                  tag: "a",
                  icon: "",
                  onClick: ($event) => _ctx.remove(entry)
                }, {
                  default: withCtx(() => [
                    createVNode(_component_ux_icon, { icon: "fa-times" })
                  ]),
                  _: 2
                }, 1032, ["onClick"])) : createCommentVNode("", true)
              ]),
              _: 2
            }, 1024)
          ]),
          _: 2
        }, 1024);
      }), 128)),
      _ctx.canAddValue ? (openBlock(), createBlock(_component_ux_button, {
        key: 0,
        onClick: _cache[6] || (_cache[6] = ($event) => _ctx.add())
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString($options.addLabel) + " ", 1),
          createVNode(_component_ux_icon, {
            icon: "fa-plus",
            right: ""
          })
        ]),
        _: 1
      })) : createCommentVNode("", true)
    ])) : (openBlock(), createBlock(_component_flex_row, {
      key: 3,
      class: "ux-text-row"
    }, {
      default: withCtx(() => [
        createVNode(_component_flex_cell, null, {
          default: withCtx(() => [
            createElementVNode("div", _hoisted_13, [
              _hoisted_14,
              $options.lazy ? withDirectives((openBlock(), createElementBlock("input", {
                key: 0,
                class: "ux-field-focus ux-text-input-multiple",
                placeholder: "Label",
                onFocus: _cache[7] || (_cache[7] = (...args) => _ctx.touch && _ctx.touch(...args)),
                ref: "input",
                onKeydown: _cache[8] || (_cache[8] = withKeys(withModifiers(($event) => _ctx.add(), ["stop", "prevent"]), ["enter"])),
                onBlur: _cache[9] || (_cache[9] = ($event) => $options.titleBlurred(_ctx.index)),
                "onUpdate:modelValue": [
                  _cache[10] || (_cache[10] = (...args) => $options.entryTitleChanged && $options.entryTitleChanged(...args)),
                  _cache[11] || (_cache[11] = ($event) => _ctx.model.title = $event)
                ]
              }, null, 544)), [
                [
                  vModelText,
                  _ctx.model.title,
                  void 0,
                  { lazy: true }
                ]
              ]) : createCommentVNode("", true),
              !$options.lazy ? withDirectives((openBlock(), createElementBlock("input", {
                key: 1,
                class: "ux-field-focus ux-text-input-multiple",
                placeholder: "Label",
                onFocus: _cache[12] || (_cache[12] = (...args) => _ctx.touch && _ctx.touch(...args)),
                ref: "input",
                onKeydown: _cache[13] || (_cache[13] = withKeys(withModifiers(($event) => _ctx.add(), ["stop", "prevent"]), ["enter"])),
                onBlur: _cache[14] || (_cache[14] = ($event) => $options.titleBlurred(_ctx.index)),
                "onUpdate:modelValue": [
                  _cache[15] || (_cache[15] = (...args) => $options.entryTitleChanged && $options.entryTitleChanged(...args)),
                  _cache[16] || (_cache[16] = ($event) => _ctx.model.title = $event)
                ]
              }, null, 544)), [
                [vModelText, _ctx.model.title]
              ]) : createCommentVNode("", true)
            ])
          ]),
          _: 1
        }),
        createVNode(_component_flex_cell, null, {
          default: withCtx(() => [
            createElementVNode("div", _hoisted_15, [
              _hoisted_16,
              $options.lazy ? withDirectives((openBlock(), createElementBlock("input", {
                key: 0,
                class: "ux-field-focus ux-text-input-multiple",
                placeholder: "Value",
                onFocus: _cache[17] || (_cache[17] = (...args) => $options.valueTouched && $options.valueTouched(...args)),
                ref: "valueInput",
                onKeydown: _cache[18] || (_cache[18] = withKeys(withModifiers(($event) => _ctx.add(), ["stop", "prevent"]), ["enter"])),
                "onUpdate:modelValue": _cache[19] || (_cache[19] = ($event) => _ctx.model.value = $event)
              }, null, 544)), [
                [
                  vModelText,
                  _ctx.model.value,
                  void 0,
                  { lazy: true }
                ]
              ]) : createCommentVNode("", true),
              !$options.lazy ? withDirectives((openBlock(), createElementBlock("input", {
                key: 1,
                class: "ux-field-focus ux-text-input-multiple",
                placeholder: "Value",
                onFocus: _cache[20] || (_cache[20] = (...args) => $options.valueTouched && $options.valueTouched(...args)),
                ref: "valueInput",
                onKeydown: _cache[21] || (_cache[21] = withKeys(withModifiers(($event) => _ctx.add(), ["stop", "prevent"]), ["enter"])),
                "onUpdate:modelValue": _cache[22] || (_cache[22] = ($event) => _ctx.model.value = $event)
              }, null, 544)), [
                [vModelText, _ctx.model.value]
              ]) : createCommentVNode("", true)
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }))
  ], 64);
}
var OptionsManager = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["render", _sfc_render$m], ["__scopeId", "data-v-42a51394"]]);
var codeEditor_vue_vue_type_style_index_0_scoped_true_lang = "";
ace.config.set("basePath", `https://cdn.jsdelivr.net/npm/ace-builds@${version$2}/src-noconflict/`);
const _sfc_main$l = {
  components: {
    VAceEditor
  },
  methods: {
    editorInit() {
    }
  },
  props: {
    modelValue: {
      type: String,
      default() {
        return "";
      }
    },
    lang: {
      type: String
    }
  },
  watch: {
    modelValue(v) {
      this.model = v;
    },
    model(v) {
      this.$emit("update:modelValue", v);
    }
  },
  data() {
    return {
      model: this.modelValue
    };
  }
};
function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_v_ace_editor = resolveComponent("v-ace-editor");
  const _component_flex_column = resolveComponent("flex-column");
  return openBlock(), createBlock(_component_flex_column, null, {
    default: withCtx(() => [
      createVNode(_component_v_ace_editor, {
        class: "editor-wrap",
        value: $data.model,
        "onUpdate:value": _cache[0] || (_cache[0] = ($event) => $data.model = $event),
        options: { useWorker: true },
        onInit: $options.editorInit,
        lang: $props.lang,
        theme: "tomorrow_night_eighties",
        style: { "height": "300px" }
      }, null, 8, ["value", "onInit", "lang"])
    ]),
    _: 1
  });
}
var CodeEditor = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$l], ["__scopeId", "data-v-8bfcc044"]]);
var codeEditorField_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$k = {
  components: {
    CodeEditor
  },
  props: {
    modelValue: {
      type: [String, Array]
    }
  },
  computed: {
    syntax() {
      return this.field ? this.field.syntax : "json";
    }
  },
  mixins: [InputMixin],
  methods: {
    getNewDefaultEntry() {
      return "";
    }
  }
};
const _hoisted_1$f = {
  key: 0,
  class: "ux-field-title"
};
const _hoisted_2$a = {
  key: 0,
  class: "ux-required-marker"
};
const _hoisted_3$8 = {
  key: 1,
  class: "ux-field-description"
};
const _hoisted_4$8 = { key: 2 };
const _hoisted_5$4 = { class: "code-editor-field-wrap" };
const _hoisted_6$3 = {
  key: 3,
  class: "code-editor-field-wrap"
};
function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_code_editor = resolveComponent("code-editor");
  const _component_flex_cell = resolveComponent("flex-cell");
  const _component_ux_icon = resolveComponent("ux-icon");
  const _component_ux_button = resolveComponent("ux-button");
  const _component_flex_row = resolveComponent("flex-row");
  return openBlock(), createElementBlock(Fragment, null, [
    _ctx.showLabel ? (openBlock(), createElementBlock("label", _hoisted_1$f, [
      createTextVNode(toDisplayString(_ctx.label) + " ", 1),
      _ctx.required ? (openBlock(), createElementBlock("span", _hoisted_2$a, "*")) : createCommentVNode("", true)
    ])) : createCommentVNode("", true),
    _ctx.showDescription ? (openBlock(), createElementBlock("div", _hoisted_3$8, toDisplayString(_ctx.description), 1)) : createCommentVNode("", true),
    _ctx.multiValue ? (openBlock(), createElementBlock("div", _hoisted_4$8, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.model, (entry, index2) => {
        return openBlock(), createBlock(_component_flex_row, {
          class: "ux-text-row",
          key: index2
        }, {
          default: withCtx(() => [
            createVNode(_component_flex_cell, null, {
              default: withCtx(() => [
                createElementVNode("div", _hoisted_5$4, [
                  createVNode(_component_code_editor, {
                    lang: $options.syntax,
                    onFocus: _ctx.touch,
                    ref_for: true,
                    ref: "input",
                    modelValue: _ctx.model[index2],
                    "onUpdate:modelValue": ($event) => _ctx.model[index2] = $event,
                    class: "ux-code-editor ux-field-focus ux-text-area-multiple"
                  }, null, 8, ["lang", "onFocus", "modelValue", "onUpdate:modelValue"])
                ])
              ]),
              _: 2
            }, 1024),
            createVNode(_component_flex_cell, {
              shrink: "",
              vcenter: ""
            }, {
              default: withCtx(() => [
                _ctx.canRemoveValue ? (openBlock(), createBlock(_component_ux_button, {
                  key: 0,
                  tag: "a",
                  icon: "",
                  onClick: ($event) => _ctx.remove(entry)
                }, {
                  default: withCtx(() => [
                    createVNode(_component_ux_icon, { icon: "fa-times" })
                  ]),
                  _: 2
                }, 1032, ["onClick"])) : createCommentVNode("", true)
              ]),
              _: 2
            }, 1024)
          ]),
          _: 2
        }, 1024);
      }), 128)),
      _ctx.canAddValue ? (openBlock(), createBlock(_component_ux_button, {
        key: 0,
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.add())
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(_ctx.addLabel), 1)
        ]),
        _: 1
      })) : createCommentVNode("", true)
    ])) : (openBlock(), createElementBlock("div", _hoisted_6$3, [
      createVNode(_component_code_editor, {
        lang: $options.syntax,
        class: "ux-code-editor ux-field-focus ux-text-area-single",
        onFocus: _ctx.touch,
        modelValue: _ctx.model,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.model = $event)
      }, null, 8, ["lang", "onFocus", "modelValue"])
    ]))
  ], 64);
}
var CodeEditorField = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$k], ["__scopeId", "data-v-06a239bb"]]);
var InternalRouteSelect_vue_vue_type_style_index_0_scoped_true_lang = "";
function isUndefined$1(entry) {
  return entry === void 0 || typeof entry === "undefined" || entry === null || String(entry) === "null" || String(entry) === "undefined";
}
const _sfc_main$j = {
  props: {
    title: {
      type: String
    },
    modelValue: {}
  },
  mixins: [InputMixin],
  created() {
    this.model = this.model;
  },
  methods: {
    cleanOutput(val) {
      var self2 = this;
      if (isUndefined$1(val)) {
        if (self2.multiValue) {
          val = [];
        } else {
          val = void 0;
        }
      } else {
        if (self2.multiValue) {
          val = (val || []).filter(Boolean).map(function(i2) {
            return self2.getValue(i2);
          });
        } else {
          val = self2.getValue(val);
        }
      }
      return val;
    },
    cleanInput(val) {
      var self2 = this;
      if (self2.multiValue) {
        if (!val) {
          val = [];
        }
        if (!Array.isArray(val)) {
          val = [val];
        }
        if (self2.maximum) {
          if (val.length > self2.maximum) {
            val.length = self2.maximum;
          }
        }
        val = val.filter(Boolean).map(function(v) {
          var valueKey2 = self2.getValue(v);
          return self2.returnObject ? self2.optionLookup[valueKey2] : valueKey2;
        });
      } else {
        var valueKey = self2.getValue(val);
        val = self2.returnObject ? self2.optionLookup[valueKey] : valueKey;
      }
      return val;
    }
  },
  computed: {
    interface() {
      var editor = this.$qik.global.editor;
      if (!editor) {
        return;
      }
      return editor.model;
    },
    returnObject() {
      return false;
    },
    classes() {
      var array = [];
      if (this.multiValue) {
        array.push("multiple");
      } else {
        array.push("single");
      }
      return array;
    },
    optionLookup() {
      var self2 = this;
      return self2.actualOptions.reduce(function(set, option2) {
        const key = self2.getValue(option2);
        set[key] = option2;
        return set;
      }, {});
    },
    summary() {
      return this.model ? this.getLabel(this.optionLookup[this.model]) : this.title || "Click to select";
    },
    actualOptions() {
      if (!this.interface) {
        return [];
      }
      var allRoutes = [];
      extractFlat(this.interface.routes);
      function extractFlat(array, depth) {
        if (!depth) {
          depth = 0;
        }
        array.forEach(function(route) {
          if (route.type != "folder") {
            allRoutes.push({ route, depth });
          }
          if (route.routes && route.routes.length) {
            extractFlat(route.routes, depth + 1);
          }
        });
      }
      return allRoutes.map(function({ route, depth }) {
        var prefix = "-".repeat(depth);
        return {
          title: `${prefix}${route.title}`,
          value: route.name
        };
      });
    },
    selectableOptions() {
      return this.actualOptions;
    }
  }
};
const _hoisted_1$e = {
  key: 0,
  class: "ux-field-title"
};
const _hoisted_2$9 = {
  key: 0,
  class: "ux-required-marker"
};
const _hoisted_3$7 = {
  key: 1,
  class: "ux-field-description"
};
const _hoisted_4$7 = {
  key: 2,
  class: "ui-select-button"
};
const _hoisted_5$3 = ["multiple"];
const _hoisted_6$2 = {
  key: 0,
  value: ""
};
const _hoisted_7$2 = ["value"];
function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ux_button = resolveComponent("ux-button");
  return openBlock(), createElementBlock(Fragment, null, [
    createElementVNode("div", {
      class: normalizeClass(["native-select", $options.classes])
    }, [
      _ctx.showLabel ? (openBlock(), createElementBlock("label", _hoisted_1$e, [
        createTextVNode(toDisplayString(_ctx.label) + " ", 1),
        _ctx.required ? (openBlock(), createElementBlock("span", _hoisted_2$9, "*")) : createCommentVNode("", true)
      ])) : createCommentVNode("", true),
      _ctx.showDescription ? (openBlock(), createElementBlock("div", _hoisted_3$7, toDisplayString(_ctx.description), 1)) : createCommentVNode("", true),
      _ctx.singleValue ? (openBlock(), createElementBlock("div", _hoisted_4$7, [
        renderSlot(_ctx.$slots, "default", {}, () => [
          createVNode(_component_ux_button, { tag: "div" }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString($options.summary), 1)
            ]),
            _: 1
          })
        ], true)
      ])) : createCommentVNode("", true),
      withDirectives(createElementVNode("select", {
        onFocus: _cache[0] || (_cache[0] = (...args) => _ctx.touch && _ctx.touch(...args)),
        multiple: _ctx.multiValue,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.model = $event)
      }, [
        _ctx.singleValue && !_ctx.minimum ? (openBlock(), createElementBlock("option", _hoisted_6$2, "None")) : createCommentVNode("", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList($options.selectableOptions, (option2) => {
          return openBlock(), createElementBlock("option", {
            value: option2.value
          }, toDisplayString(option2.title), 9, _hoisted_7$2);
        }), 256))
      ], 40, _hoisted_5$3), [
        [vModelSelect, _ctx.model]
      ])
    ], 2),
    createElementVNode("pre", null, toDisplayString($options.actualOptions), 1)
  ], 64);
}
var InternalRouteSelect = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$j], ["__scopeId", "data-v-70f0b838"]]);
var jsep = { exports: {} };
(function(module, exports) {
  (function(root2) {
    var COMPOUND = "Compound", IDENTIFIER = "Identifier", MEMBER_EXP = "MemberExpression", LITERAL = "Literal", THIS_EXP = "ThisExpression", CALL_EXP = "CallExpression", UNARY_EXP = "UnaryExpression", BINARY_EXP = "BinaryExpression", LOGICAL_EXP = "LogicalExpression", CONDITIONAL_EXP = "ConditionalExpression", ARRAY_EXP = "ArrayExpression", PERIOD_CODE = 46, COMMA_CODE = 44, SQUOTE_CODE = 39, DQUOTE_CODE = 34, OPAREN_CODE = 40, CPAREN_CODE = 41, OBRACK_CODE = 91, CBRACK_CODE = 93, QUMARK_CODE = 63, SEMCOL_CODE = 59, COLON_CODE = 58, throwError = function(message, index2) {
      var error = new Error(message + " at character " + index2);
      error.index = index2;
      error.description = message;
      throw error;
    }, t = true, unary_ops = { "-": t, "!": t, "~": t, "+": t }, binary_ops = {
      "||": 1,
      "&&": 2,
      "|": 3,
      "^": 4,
      "&": 5,
      "==": 6,
      "!=": 6,
      "===": 6,
      "!==": 6,
      "<": 7,
      ">": 7,
      "<=": 7,
      ">=": 7,
      "<<": 8,
      ">>": 8,
      ">>>": 8,
      "+": 9,
      "-": 9,
      "*": 10,
      "/": 10,
      "%": 10
    }, getMaxKeyLen = function(obj) {
      var max_len = 0, len;
      for (var key in obj) {
        if ((len = key.length) > max_len && obj.hasOwnProperty(key)) {
          max_len = len;
        }
      }
      return max_len;
    }, max_unop_len = getMaxKeyLen(unary_ops), max_binop_len = getMaxKeyLen(binary_ops), literals = {
      "true": true,
      "false": false,
      "null": null
    }, this_str = "this", binaryPrecedence = function(op_val) {
      return binary_ops[op_val] || 0;
    }, createBinaryExpression = function(operator, left, right) {
      var type = operator === "||" || operator === "&&" ? LOGICAL_EXP : BINARY_EXP;
      return {
        type,
        operator,
        left,
        right
      };
    }, isDecimalDigit = function(ch) {
      return ch >= 48 && ch <= 57;
    }, isIdentifierStart = function(ch) {
      return ch === 36 || ch === 95 || ch >= 65 && ch <= 90 || ch >= 97 && ch <= 122 || ch >= 128 && !binary_ops[String.fromCharCode(ch)];
    }, isIdentifierPart = function(ch) {
      return ch === 36 || ch === 95 || ch >= 65 && ch <= 90 || ch >= 97 && ch <= 122 || ch >= 48 && ch <= 57 || ch >= 128 && !binary_ops[String.fromCharCode(ch)];
    }, jsep2 = function(expr) {
      var index2 = 0, charAtFunc = expr.charAt, charCodeAtFunc = expr.charCodeAt, exprI = function(i2) {
        return charAtFunc.call(expr, i2);
      }, exprICode = function(i2) {
        return charCodeAtFunc.call(expr, i2);
      }, length = expr.length, gobbleSpaces = function() {
        var ch = exprICode(index2);
        while (ch === 32 || ch === 9 || ch === 10 || ch === 13) {
          ch = exprICode(++index2);
        }
      }, gobbleExpression = function() {
        var test = gobbleBinaryExpression(), consequent, alternate;
        gobbleSpaces();
        if (exprICode(index2) === QUMARK_CODE) {
          index2++;
          consequent = gobbleExpression();
          if (!consequent) {
            throwError("Expected expression", index2);
          }
          gobbleSpaces();
          if (exprICode(index2) === COLON_CODE) {
            index2++;
            alternate = gobbleExpression();
            if (!alternate) {
              throwError("Expected expression", index2);
            }
            return {
              type: CONDITIONAL_EXP,
              test,
              consequent,
              alternate
            };
          } else {
            throwError("Expected :", index2);
          }
        } else {
          return test;
        }
      }, gobbleBinaryOp = function() {
        gobbleSpaces();
        var to_check = expr.substr(index2, max_binop_len), tc_len = to_check.length;
        while (tc_len > 0) {
          if (binary_ops.hasOwnProperty(to_check) && (!isIdentifierStart(exprICode(index2)) || index2 + to_check.length < expr.length && !isIdentifierPart(exprICode(index2 + to_check.length)))) {
            index2 += tc_len;
            return to_check;
          }
          to_check = to_check.substr(0, --tc_len);
        }
        return false;
      }, gobbleBinaryExpression = function() {
        var node2, biop, prec, stack, biop_info, left, right, i2, cur_biop;
        left = gobbleToken();
        biop = gobbleBinaryOp();
        if (!biop) {
          return left;
        }
        biop_info = { value: biop, prec: binaryPrecedence(biop) };
        right = gobbleToken();
        if (!right) {
          throwError("Expected expression after " + biop, index2);
        }
        stack = [left, biop_info, right];
        while (biop = gobbleBinaryOp()) {
          prec = binaryPrecedence(biop);
          if (prec === 0) {
            break;
          }
          biop_info = { value: biop, prec };
          cur_biop = biop;
          while (stack.length > 2 && prec <= stack[stack.length - 2].prec) {
            right = stack.pop();
            biop = stack.pop().value;
            left = stack.pop();
            node2 = createBinaryExpression(biop, left, right);
            stack.push(node2);
          }
          node2 = gobbleToken();
          if (!node2) {
            throwError("Expected expression after " + cur_biop, index2);
          }
          stack.push(biop_info, node2);
        }
        i2 = stack.length - 1;
        node2 = stack[i2];
        while (i2 > 1) {
          node2 = createBinaryExpression(stack[i2 - 1].value, stack[i2 - 2], node2);
          i2 -= 2;
        }
        return node2;
      }, gobbleToken = function() {
        var ch, to_check, tc_len;
        gobbleSpaces();
        ch = exprICode(index2);
        if (isDecimalDigit(ch) || ch === PERIOD_CODE) {
          return gobbleNumericLiteral();
        } else if (ch === SQUOTE_CODE || ch === DQUOTE_CODE) {
          return gobbleStringLiteral();
        } else if (ch === OBRACK_CODE) {
          return gobbleArray();
        } else {
          to_check = expr.substr(index2, max_unop_len);
          tc_len = to_check.length;
          while (tc_len > 0) {
            if (unary_ops.hasOwnProperty(to_check) && (!isIdentifierStart(exprICode(index2)) || index2 + to_check.length < expr.length && !isIdentifierPart(exprICode(index2 + to_check.length)))) {
              index2 += tc_len;
              return {
                type: UNARY_EXP,
                operator: to_check,
                argument: gobbleToken(),
                prefix: true
              };
            }
            to_check = to_check.substr(0, --tc_len);
          }
          if (isIdentifierStart(ch) || ch === OPAREN_CODE) {
            return gobbleVariable();
          }
        }
        return false;
      }, gobbleNumericLiteral = function() {
        var number = "", ch, chCode;
        while (isDecimalDigit(exprICode(index2))) {
          number += exprI(index2++);
        }
        if (exprICode(index2) === PERIOD_CODE) {
          number += exprI(index2++);
          while (isDecimalDigit(exprICode(index2))) {
            number += exprI(index2++);
          }
        }
        ch = exprI(index2);
        if (ch === "e" || ch === "E") {
          number += exprI(index2++);
          ch = exprI(index2);
          if (ch === "+" || ch === "-") {
            number += exprI(index2++);
          }
          while (isDecimalDigit(exprICode(index2))) {
            number += exprI(index2++);
          }
          if (!isDecimalDigit(exprICode(index2 - 1))) {
            throwError("Expected exponent (" + number + exprI(index2) + ")", index2);
          }
        }
        chCode = exprICode(index2);
        if (isIdentifierStart(chCode)) {
          throwError("Variable names cannot start with a number (" + number + exprI(index2) + ")", index2);
        } else if (chCode === PERIOD_CODE) {
          throwError("Unexpected period", index2);
        }
        return {
          type: LITERAL,
          value: parseFloat(number),
          raw: number
        };
      }, gobbleStringLiteral = function() {
        var str = "", quote = exprI(index2++), closed = false, ch;
        while (index2 < length) {
          ch = exprI(index2++);
          if (ch === quote) {
            closed = true;
            break;
          } else if (ch === "\\") {
            ch = exprI(index2++);
            switch (ch) {
              case "n":
                str += "\n";
                break;
              case "r":
                str += "\r";
                break;
              case "t":
                str += "	";
                break;
              case "b":
                str += "\b";
                break;
              case "f":
                str += "\f";
                break;
              case "v":
                str += "\v";
                break;
              default:
                str += ch;
            }
          } else {
            str += ch;
          }
        }
        if (!closed) {
          throwError('Unclosed quote after "' + str + '"', index2);
        }
        return {
          type: LITERAL,
          value: str,
          raw: quote + str + quote
        };
      }, gobbleIdentifier = function() {
        var ch = exprICode(index2), start = index2, identifier;
        if (isIdentifierStart(ch)) {
          index2++;
        } else {
          throwError("Unexpected " + exprI(index2), index2);
        }
        while (index2 < length) {
          ch = exprICode(index2);
          if (isIdentifierPart(ch)) {
            index2++;
          } else {
            break;
          }
        }
        identifier = expr.slice(start, index2);
        if (literals.hasOwnProperty(identifier)) {
          return {
            type: LITERAL,
            value: literals[identifier],
            raw: identifier
          };
        } else if (identifier === this_str) {
          return { type: THIS_EXP };
        } else {
          return {
            type: IDENTIFIER,
            name: identifier
          };
        }
      }, gobbleArguments = function(termination) {
        var ch_i2, args = [], node2, closed = false;
        var separator_count = 0;
        while (index2 < length) {
          gobbleSpaces();
          ch_i2 = exprICode(index2);
          if (ch_i2 === termination) {
            closed = true;
            index2++;
            if (termination === CPAREN_CODE && separator_count && separator_count >= args.length) {
              throwError("Unexpected token " + String.fromCharCode(termination), index2);
            }
            break;
          } else if (ch_i2 === COMMA_CODE) {
            index2++;
            separator_count++;
            if (separator_count !== args.length) {
              if (termination === CPAREN_CODE) {
                throwError("Unexpected token ,", index2);
              } else if (termination === CBRACK_CODE) {
                for (var arg = args.length; arg < separator_count; arg++) {
                  args.push(null);
                }
              }
            }
          } else {
            node2 = gobbleExpression();
            if (!node2 || node2.type === COMPOUND) {
              throwError("Expected comma", index2);
            }
            args.push(node2);
          }
        }
        if (!closed) {
          throwError("Expected " + String.fromCharCode(termination), index2);
        }
        return args;
      }, gobbleVariable = function() {
        var ch_i2, node2;
        ch_i2 = exprICode(index2);
        if (ch_i2 === OPAREN_CODE) {
          node2 = gobbleGroup();
        } else {
          node2 = gobbleIdentifier();
        }
        gobbleSpaces();
        ch_i2 = exprICode(index2);
        while (ch_i2 === PERIOD_CODE || ch_i2 === OBRACK_CODE || ch_i2 === OPAREN_CODE) {
          index2++;
          if (ch_i2 === PERIOD_CODE) {
            gobbleSpaces();
            node2 = {
              type: MEMBER_EXP,
              computed: false,
              object: node2,
              property: gobbleIdentifier()
            };
          } else if (ch_i2 === OBRACK_CODE) {
            node2 = {
              type: MEMBER_EXP,
              computed: true,
              object: node2,
              property: gobbleExpression()
            };
            gobbleSpaces();
            ch_i2 = exprICode(index2);
            if (ch_i2 !== CBRACK_CODE) {
              throwError("Unclosed [", index2);
            }
            index2++;
          } else if (ch_i2 === OPAREN_CODE) {
            node2 = {
              type: CALL_EXP,
              "arguments": gobbleArguments(CPAREN_CODE),
              callee: node2
            };
          }
          gobbleSpaces();
          ch_i2 = exprICode(index2);
        }
        return node2;
      }, gobbleGroup = function() {
        index2++;
        var node2 = gobbleExpression();
        gobbleSpaces();
        if (exprICode(index2) === CPAREN_CODE) {
          index2++;
          return node2;
        } else {
          throwError("Unclosed (", index2);
        }
      }, gobbleArray = function() {
        index2++;
        return {
          type: ARRAY_EXP,
          elements: gobbleArguments(CBRACK_CODE)
        };
      }, nodes = [], ch_i, node;
      while (index2 < length) {
        ch_i = exprICode(index2);
        if (ch_i === SEMCOL_CODE || ch_i === COMMA_CODE) {
          index2++;
        } else {
          if (node = gobbleExpression()) {
            nodes.push(node);
          } else if (index2 < length) {
            throwError('Unexpected "' + exprI(index2) + '"', index2);
          }
        }
      }
      if (nodes.length === 1) {
        return nodes[0];
      } else {
        return {
          type: COMPOUND,
          body: nodes
        };
      }
    };
    jsep2.version = "0.3.5";
    jsep2.toString = function() {
      return "JavaScript Expression Parser (JSEP) v" + jsep2.version;
    };
    jsep2.addUnaryOp = function(op_name) {
      max_unop_len = Math.max(op_name.length, max_unop_len);
      unary_ops[op_name] = t;
      return this;
    };
    jsep2.addBinaryOp = function(op_name, precedence) {
      max_binop_len = Math.max(op_name.length, max_binop_len);
      binary_ops[op_name] = precedence;
      return this;
    };
    jsep2.addLiteral = function(literal_name, literal_value) {
      literals[literal_name] = literal_value;
      return this;
    };
    jsep2.removeUnaryOp = function(op_name) {
      delete unary_ops[op_name];
      if (op_name.length === max_unop_len) {
        max_unop_len = getMaxKeyLen(unary_ops);
      }
      return this;
    };
    jsep2.removeAllUnaryOps = function() {
      unary_ops = {};
      max_unop_len = 0;
      return this;
    };
    jsep2.removeBinaryOp = function(op_name) {
      delete binary_ops[op_name];
      if (op_name.length === max_binop_len) {
        max_binop_len = getMaxKeyLen(binary_ops);
      }
      return this;
    };
    jsep2.removeAllBinaryOps = function() {
      binary_ops = {};
      max_binop_len = 0;
      return this;
    };
    jsep2.removeLiteral = function(literal_name) {
      delete literals[literal_name];
      return this;
    };
    jsep2.removeAllLiterals = function() {
      literals = {};
      return this;
    };
    {
      if (module.exports) {
        exports = module.exports = jsep2;
      } else {
        exports.parse = jsep2;
      }
    }
  })();
})(jsep, jsep.exports);
var exprParse = jsep.exports;
var u = { "||": function(r, e) {
  return r || e;
}, "&&": function(r, e) {
  return r && e;
}, "|": function(r, e) {
  return r | e;
}, "^": function(r, e) {
  return r ^ e;
}, "&": function(r, e) {
  return r & e;
}, "==": function(r, e) {
  return r == e;
}, "!=": function(r, e) {
  return r != e;
}, "===": function(r, e) {
  return r === e;
}, "!==": function(r, e) {
  return r !== e;
}, "<": function(r, e) {
  return r < e;
}, ">": function(r, e) {
  return r > e;
}, "<=": function(r, e) {
  return r <= e;
}, ">=": function(r, e) {
  return r >= e;
}, "<<": function(r, e) {
  return r << e;
}, ">>": function(r, e) {
  return r >> e;
}, ">>>": function(r, e) {
  return r >>> e;
}, "+": function(r, e) {
  return r + e;
}, "-": function(r, e) {
  return r - e;
}, "*": function(r, e) {
  return r * e;
}, "/": function(r, e) {
  return r / e;
}, "%": function(r, e) {
  return r % e;
} }, i = { "-": function(r) {
  return -r;
}, "+": function(r) {
  return +r;
}, "~": function(r) {
  return ~r;
}, "!": function(r) {
  return !r;
} };
function s$1(r, e) {
  return r.map(function(r2) {
    return a(r2, e);
  });
}
function c(r, e) {
  var n2, t = a(r.object, e);
  if (n2 = r.computed ? a(r.property, e) : r.property.name, /^__proto__|prototype|constructor$/.test(n2))
    throw Error('Access to member "' + n2 + '" disallowed.');
  return [t, t[n2]];
}
function a(r, e) {
  var n2 = r;
  switch (n2.type) {
    case "ArrayExpression":
      return s$1(n2.elements, e);
    case "BinaryExpression":
      return u[n2.operator](a(n2.left, e), a(n2.right, e));
    case "CallExpression":
      var t, o, l2;
      if (n2.callee.type === "MemberExpression" ? (t = (l2 = c(n2.callee, e))[0], o = l2[1]) : o = a(n2.callee, e), typeof o != "function")
        return;
      return o.apply(t, s$1(n2.arguments, e));
    case "ConditionalExpression":
      return a(n2.test, e) ? a(n2.consequent, e) : a(n2.alternate, e);
    case "Identifier":
      return e[n2.name];
    case "Literal":
      return n2.value;
    case "LogicalExpression":
      return n2.operator === "||" ? a(n2.left, e) || a(n2.right, e) : n2.operator === "&&" ? a(n2.left, e) && a(n2.right, e) : u[n2.operator](a(n2.left, e), a(n2.right, e));
    case "MemberExpression":
      return c(n2, e)[1];
    case "ThisExpression":
      return e;
    case "UnaryExpression":
      return i[n2.operator](a(n2.argument, e));
    default:
      return;
  }
}
const service = {};
service.evaluateExpression = function(expression, context) {
  if (typeof expression == "function") {
    return expression(context);
  }
  const contextDefaults = {
    Math,
    String,
    Array,
    Date,
    Boolean,
    parseInt,
    parseFloat,
    create(Class, ...rest) {
      return new Class(...rest);
    }
  };
  context = Object.assign({}, contextDefaults, context);
  var ast;
  var result;
  try {
    ast = exprParse(expression);
    result = a(ast, context);
  } catch (err) {
  } finally {
    return result;
  }
};
function parseBoolean(value) {
  switch (String(value).toLowerCase()) {
    case "true":
    case "y":
    case "yes":
    case "1":
    case "t":
      value = true;
      break;
    case "false":
    case "n":
    case "no":
    case "0":
    case "f":
    case "undefined":
    case "null":
    case "":
    case "-1":
      value = false;
      break;
  }
  return !!value;
}
function ensureMinimum(field, array, min, ask, max, func) {
  array = array || [];
  min = Math.max(min, ask);
  var length = array.length;
  var meetsMinimum = length >= min;
  if (!meetsMinimum) {
    if (field.key == "multiNumber") {
      console.log(field.key, min);
    }
    var difference = min - length;
    var extras = Array(difference).fill().map(func);
    return [...array, ...extras];
  }
  return array;
}
function getDefaultValue(fieldData, currentValue) {
  if (currentValue) {
    return currentValue;
  }
  function isUndefined2(entry) {
    return entry === void 0 || typeof entry === "undefined" || entry === null;
  }
  var minimum = parseInt(fieldData.minimum);
  var maximum = parseInt(fieldData.maximum);
  var ask = parseInt(fieldData.ask || 0);
  ask = Math.max(ask, minimum);
  ask = maximum ? Math.min(ask, maximum) : ask;
  var singleValue = maximum == 1;
  var multiValue = !singleValue;
  var defaultValues = (fieldData.type === "reference" ? fieldData.defaultReferences : fieldData.defaultValues) || [];
  var firstDefaultValue = defaultValues[0];
  var output;
  switch (fieldData.type) {
    case "date":
      let getDate = function(v) {
        switch (String(v).toLowerCase()) {
          case "now":
            return new Date();
        }
        return new Date(v);
      };
      if (multiValue) {
        if (defaultValues.length) {
          if (maximum) {
            output = defaultValues.slice(0, maximum).map(function(v) {
              return getDate(v);
            });
          } else {
            output = defaultValues.slice().map(function(v) {
              return getDate(v);
            });
          }
        }
        output = ensureMinimum(fieldData, output, minimum, ask, maximum, function() {
          return getDate(new Date());
        });
      } else {
        output = isUndefined2(firstDefaultValue) ? void 0 : getDate(firstDefaultValue);
      }
      break;
    case "integer":
    case "decimal":
    case "number":
    case "float":
      if (multiValue) {
        if (defaultValues.length) {
          if (maximum) {
            output = defaultValues.slice(0, maximum).map(function(val) {
              return Number(val);
            });
          } else {
            output = defaultValues.slice().map(function(val) {
              return Number(val);
            });
          }
        }
        output = ensureMinimum(fieldData, output, minimum, ask, maximum, function() {
          return "";
        });
      } else {
        output = isUndefined2(firstDefaultValue) ? void 0 : Number(firstDefaultValue);
      }
      break;
    case "group":
      if (fieldData.asObject) {
        var number = ask;
        if (multiValue) {
          if (number > 0) {
            output = Array(number).fill().map(function() {
              return {};
            });
          } else {
            output = [];
          }
        } else {
          output = isUndefined2(firstDefaultValue) ? {} : firstDefaultValue;
        }
      }
      break;
    case "object":
      var number = ask;
      if (multiValue) {
        if (number > 0) {
          output = Array(number).fill().map(function() {
            return {};
          });
        } else {
          output = [];
        }
      } else {
        output = isUndefined2(firstDefaultValue) ? {} : firstDefaultValue;
      }
      break;
    case "boolean":
      if (multiValue) {
        if (defaultValues.length) {
          if (maximum) {
            output = defaultValues.slice(0, maximum).map(function(val) {
              return parseBoolean(val);
            });
          } else {
            output = defaultValues.slice().map(function(val) {
              return parseBoolean(val);
            });
          }
        }
        output = ensureMinimum(fieldData, output, minimum, ask, maximum, function() {
          return;
        });
      } else {
        output = isUndefined2(firstDefaultValue) ? false : parseBoolean(firstDefaultValue);
      }
      break;
    case "reference":
      if (multiValue) {
        if (defaultValues.length) {
          output = defaultValues.slice(0, maximum);
        } else {
          output = [];
        }
      } else {
        output = isUndefined2(firstDefaultValue) ? void 0 : firstDefaultValue;
      }
      break;
    case "string":
      if (multiValue) {
        if (defaultValues.length) {
          output = defaultValues.slice(0, maximum);
        }
        output = ensureMinimum(fieldData, output, minimum, ask, maximum, function() {
          return "";
        });
      } else {
        output = isUndefined2(firstDefaultValue) ? "" : firstDefaultValue;
      }
      break;
    default:
      if (multiValue) {
        if (defaultValues.length) {
          output = defaultValues.slice(0, maximum);
        }
        output = ensureMinimum(fieldData, output, minimum, ask, maximum, function() {
          return;
        });
      } else {
        output = isUndefined2(firstDefaultValue) ? "" : firstDefaultValue;
      }
      break;
  }
  return output;
}
var field_vue_vue_type_style_index_0_scoped_true_lang$1 = "";
function hasExpression(key) {
  return function() {
    var self2 = this;
    if (!self2.expressions) {
      return;
    }
    let expression = self2.expressions[key];
    if (expression) {
      return true;
    }
  };
}
function computedExpression(key) {
  return function() {
    var self2 = this;
    if (!self2.expressions) {
      return;
    }
    let expression = self2.expressions[key];
    if (!expression) {
      return;
    }
    let context = self2.expressionsContext;
    return service.evaluateExpression(expression, context);
  };
}
const _sfc_main$i = {
  components: {
    InternalRouteSelect,
    ButtonSelect,
    NativeSelect,
    DateField,
    TextField,
    CurrencyField,
    TextArea,
    Checkbox,
    FilterInput,
    CustomHtml: CustomHTML,
    BooleanSwitch: Switch,
    FieldGroup: FieldGroup$1,
    ContentSelect,
    TypeSelect,
    TimezoneSelect,
    PhoneNumberInput,
    Upload,
    ObjectField,
    OptionsManager,
    CodeEditorField
  },
  props: {
    field: {
      type: Object,
      required: true
    },
    parentModel: {
      type: Object
    },
    modelValue: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      defaultValue: null,
      model: this.modelValue,
      touched: false,
      focussed: false,
      validateResults: { valid: true },
      mounted: false,
      subFormState: {},
      isDirty: false,
      isDirtyBeforeInput: false
    };
  },
  created() {
    this.checkDirtyState();
  },
  mounted() {
    this.mounted = true;
  },
  beforeUnmount() {
    this.mounted = false;
  },
  methods: {
    checkDirtyState() {
      var existingData = this.fieldModel;
      var hasExistingData = existingData || existingData === false || existingData === 0;
      var proposedDefaultValue = this.fieldDefaultValue;
      var existingString = JSON.stringify(this.cleanOutput(existingData));
      var proposedString = JSON.stringify(this.cleanOutput(proposedDefaultValue));
      if (hasExistingData && existingString != proposedString) {
        this.isDirty = true;
        this.isDirtyBeforeInput = true;
        this.fieldModel = existingData;
      } else {
        this.isDirty = false;
        this.isDirtyBeforeInput = false;
        this.fieldModel = proposedDefaultValue;
      }
    },
    groupStateAltered(details) {
      this.subFormState = details;
    },
    focus() {
      this.focussed = true;
    },
    blur() {
      this.focussed = false;
      if (this.expressions && this.expressions.value) {
        this.fieldModel = this.getExpressionValue;
      }
    },
    reset() {
      this.touched = false;
    },
    touch() {
      this.touched = true;
    },
    cleanInput(val) {
      return this.fieldCleanInput(val);
    },
    cleanOutput(val) {
      return this.fieldCleanOutput(val);
    },
    fieldCleanInput(val) {
      var _a;
      var self2 = this;
      var transformFunction = (_a = self2.expressions) == null ? void 0 : _a.transform;
      if (transformFunction && typeof transformFunction.set === "function") {
        val = transformFunction.set(val);
      }
      return val;
    },
    fieldCleanOutput(val) {
      var _a;
      var self2 = this;
      var transformFunction = (_a = self2.expressions) == null ? void 0 : _a.transform;
      if (transformFunction && typeof transformFunction.get === "function") {
        val = transformFunction.get(val);
      }
      return val;
    }
  },
  watch: {
    mounted(val) {
      if (val) {
        this.$emit("field:mount", this);
      } else {
        this.$emit("field:unmount", this);
      }
    },
    visible(now2) {
      if (!now2) {
        this.touched = false;
        if (this.expressions && this.expressions.value) {
          this.fieldModel = this.getExpressionValue;
        } else {
          this.fieldModel = void 0;
        }
      } else {
        this.reset();
      }
    },
    focussed(val) {
      if (val) {
        this.$emit("field:focus", this);
      } else {
        this.$emit("field:blur", this);
      }
    },
    invalid(val) {
      this.$emit("field:invalid", this);
    },
    valid(val) {
      this.$emit("field:valid", this);
    },
    error(val) {
      this.$emit("field:error", this);
    },
    touched(val) {
      this.$emit("field:touched", this);
    },
    dirty(val) {
      this.$emit("field:dirty", this);
    },
    changeString(v) {
      this.validateResults = this.$qik.content.validateField(this.fieldModel, this.actualField);
    },
    modelValue(val, old) {
      this.model = val;
      this.touched = false;
      this.checkDirtyState();
    },
    getExpressionHide(result) {
    },
    getExpressionDefaultValue(result) {
      if (this.isDirtyBeforeInput || this.touched && this.dirty)
        ;
      else {
        this.fieldModel = result;
      }
    },
    getExpressionValue(result) {
      this.fieldModel = result;
    }
  },
  computed: {
    fieldDefaultValue() {
      return this.cleanInput(this.expressions && this.expressions.defaultValue ? this.getExpressionDefaultValue : getDefaultValue(this.actualField));
    },
    title() {
      return this.field.title;
    },
    actualField() {
      var field = this.field;
      if (this.getExpressionRequired) {
        return Object.assign({}, field, { minimum: 1 });
      }
      if (this.getExpressionReferenceType) {
        return Object.assign({}, field, { referenceType: this.getExpressionReferenceType });
      }
      return field;
    },
    changeString() {
      return `${JSON.stringify(this.fieldModel)}-${this.actualField.minimum}-${this.actualField.referenceType}`;
    },
    valid() {
      return !this.invalid;
    },
    error() {
      return !this.focussed && this.touched && this.invalid;
    },
    invalid() {
      var invalidSubForm = this.subFormState && this.subFormState.invalid;
      if (invalidSubForm) {
        return { invalidSubForm: this.subFormState, mounted: this.mounted };
      }
      var isInvalid = !this.validateResults.valid;
      return isInvalid;
    },
    dirty() {
      return this.isDirty;
    },
    hasData() {
      if (typeof this.fieldModel === "undefined") {
        return false;
      }
      if (this.multiValue) {
        if (!this.fieldModel || !this.fieldModel.length) {
          return false;
        }
      }
      if (this.fieldModel == "") {
        return false;
      }
      return true;
    },
    getExpressionHide() {
      if (!this.expressions) {
        return;
      }
      let showExpression = this.expressions.show;
      let hideExpression = this.expressions.hide;
      let context = this.expressionsContext;
      if (showExpression) {
        return !!!service.evaluateExpression(showExpression, context);
      } else if (hideExpression) {
        return service.evaluateExpression(hideExpression, context);
      }
    },
    getExpressionRequired: computedExpression("required"),
    getExpressionDefaultValue: computedExpression("defaultValue"),
    getExpressionValue: computedExpression("value"),
    getExpressionReferenceType: computedExpression("referenceType"),
    hasExpressionDefaultValue: hasExpression("defaultValue"),
    expressions() {
      return this.field.expressions;
    },
    expressionsContext() {
      return {
        this: this.model,
        model: this.model,
        data: this.parentModel
      };
    },
    hidden() {
      if (this.actualField.readOnly) {
        return true;
      }
      return this.getExpressionHide;
    },
    visible() {
      return this.mounted && !this.hidden;
    },
    type() {
      return this.actualField.type || "string";
    },
    key() {
      return this.actualField.key;
    },
    isGroup() {
      return this.type === "group";
    },
    asObject() {
      return this.isGroup && this.actualField.asObject;
    },
    layoutGroup() {
      return this.isGroup && !this.actualField.asObject;
    },
    fieldModel: {
      get() {
        return this.cleanOutput(this.model[this.key]);
      },
      set(value) {
        var cleaned = this.cleanInput(value);
        if (this.model[this.key] != cleaned) {
          this.model[this.key] = cleaned;
          this.isDirty = true;
          this.$emit("update:modelValue", this.model);
        }
      }
    },
    sourceModel: {
      get() {
        return this.model;
      },
      set(value) {
        this.model = value;
        this.$emit("update:modelValue", this.model);
      }
    },
    classes() {
      var array = [];
      array.push(`ux-field-${this.type}`);
      if (this.layoutGroup) {
        array.push("ux-layout-only");
      }
      if (this.touched) {
        array.push("ux-field-touched");
      }
      if (this.dirty) {
        array.push("ux-field-dirty");
      }
      if (this.valid) {
        array.push("ux-field-valid");
      }
      if (this.invalid) {
        array.push("ux-field-invalid");
      }
      if (this.error) {
        array.push("ux-field-error");
      }
      return array;
    },
    widget() {
      if (this.type == "group") {
        return this.type;
      }
      var widget = this.actualField.widget;
      switch (widget) {
        case "internal-route":
        case "content-select":
        case "select":
        case "checkbox":
        case "datefield":
        case "richtext":
        case "textarea":
        case "switch":
        case "email":
        case "url":
        case "currency":
        case "timezone":
        case "country":
        case "typeselect":
        case "upload":
        case "code":
        case "options":
        case "button":
        case "type-select":
        case "html":
        case "filter":
          break;
        case "password":
          return "textfield";
        case "phone":
        case "phonenumber":
          return "phone";
        default:
          switch (this.type) {
            case "date":
              widget = "datefield";
              break;
            case "reference":
              widget = "content-select";
              break;
            case "boolean":
              widget = "checkbox";
              break;
            default:
            case "string":
              widget = "textfield";
              break;
            case "object":
              widget = "object";
              break;
          }
          break;
      }
      return widget;
    }
  }
};
const _hoisted_1$d = {
  key: 22,
  class: "ux-field-message"
};
function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_internal_route_select = resolveComponent("internal-route-select");
  const _component_custom_html = resolveComponent("custom-html");
  const _component_filter_input = resolveComponent("filter-input");
  const _component_checkbox = resolveComponent("checkbox");
  const _component_boolean_switch = resolveComponent("boolean-switch");
  const _component_upload = resolveComponent("upload");
  const _component_field_group = resolveComponent("field-group");
  const _component_native_select = resolveComponent("native-select");
  const _component_button_select = resolveComponent("button-select");
  const _component_text_field = resolveComponent("text-field");
  const _component_currency_field = resolveComponent("currency-field");
  const _component_date_field = resolveComponent("date-field");
  const _component_content_select = resolveComponent("content-select");
  const _component_type_select = resolveComponent("type-select");
  const _component_text_area = resolveComponent("text-area");
  const _component_timezone_select = resolveComponent("timezone-select");
  const _component_phone_number_input = resolveComponent("phone-number-input");
  const _component_object_field = resolveComponent("object-field");
  const _component_options_manager = resolveComponent("options-manager");
  const _component_code_editor_field = resolveComponent("code-editor-field");
  const _component_flex_column = resolveComponent("flex-column");
  return $options.visible ? (openBlock(), createElementBlock("div", {
    key: 0,
    class: normalizeClass(["ux-field", $options.classes]),
    onFocusin: _cache[22] || (_cache[22] = (...args) => $options.focus && $options.focus(...args)),
    onFocusout: _cache[23] || (_cache[23] = (...args) => $options.blur && $options.blur(...args))
  }, [
    $options.widget == "internal-route" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
      createVNode(_component_internal_route_select, {
        onTouched: $options.touch,
        field: $options.actualField,
        modelValue: $options.fieldModel,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $options.fieldModel = $event)
      }, null, 8, ["onTouched", "field", "modelValue"]),
      createElementVNode("pre", null, toDisplayString($data.model), 1)
    ], 64)) : createCommentVNode("", true),
    $options.widget == "html" ? (openBlock(), createBlock(_component_custom_html, {
      key: 1,
      onTouched: $options.touch,
      field: $options.actualField,
      modelValue: $options.fieldModel,
      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $options.fieldModel = $event)
    }, null, 8, ["onTouched", "field", "modelValue"])) : createCommentVNode("", true),
    $options.widget == "filter" ? (openBlock(), createBlock(_component_filter_input, {
      key: 2,
      onTouched: $options.touch,
      field: $options.actualField,
      modelValue: $options.fieldModel,
      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $options.fieldModel = $event)
    }, null, 8, ["onTouched", "field", "modelValue"])) : createCommentVNode("", true),
    $options.widget == "checkbox" ? (openBlock(), createBlock(_component_checkbox, {
      key: 3,
      onTouched: $options.touch,
      field: $options.actualField,
      modelValue: $options.fieldModel,
      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $options.fieldModel = $event)
    }, null, 8, ["onTouched", "field", "modelValue"])) : createCommentVNode("", true),
    $options.widget == "switch" ? (openBlock(), createBlock(_component_boolean_switch, {
      key: 4,
      onTouched: $options.touch,
      field: $options.actualField,
      modelValue: $options.fieldModel,
      "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $options.fieldModel = $event)
    }, null, 8, ["onTouched", "field", "modelValue"])) : createCommentVNode("", true),
    $options.widget == "upload" ? (openBlock(), createBlock(_component_upload, {
      key: 5,
      onTouched: $options.touch,
      field: $options.actualField,
      modelValue: $options.fieldModel,
      "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $options.fieldModel = $event)
    }, null, 8, ["onTouched", "field", "modelValue"])) : createCommentVNode("", true),
    $options.widget == "group" ? (openBlock(), createElementBlock(Fragment, { key: 6 }, [
      $options.asObject ? (openBlock(), createBlock(_component_field_group, {
        key: 0,
        "onForm:state": $options.groupStateAltered,
        ref: "group",
        onTouched: $options.touch,
        field: $options.actualField,
        parentModel: $props.parentModel,
        modelValue: $options.fieldModel,
        "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $options.fieldModel = $event)
      }, null, 8, ["onForm:state", "onTouched", "field", "parentModel", "modelValue"])) : (openBlock(), createBlock(_component_field_group, {
        key: 1,
        "onForm:state": $options.groupStateAltered,
        ref: "group",
        onTouched: $options.touch,
        field: $options.actualField,
        parentModel: $props.parentModel,
        modelValue: $options.sourceModel,
        "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $options.sourceModel = $event)
      }, null, 8, ["onForm:state", "onTouched", "field", "parentModel", "modelValue"]))
    ], 64)) : createCommentVNode("", true),
    $options.widget == "select" ? (openBlock(), createBlock(_component_native_select, {
      key: 7,
      onTouched: $options.touch,
      field: $options.actualField,
      modelValue: $options.fieldModel,
      "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $options.fieldModel = $event)
    }, null, 8, ["onTouched", "field", "modelValue"])) : createCommentVNode("", true),
    $options.widget == "button" ? (openBlock(), createBlock(_component_button_select, {
      key: 8,
      onTouched: $options.touch,
      field: $options.actualField,
      modelValue: $options.fieldModel,
      "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => $options.fieldModel = $event)
    }, null, 8, ["onTouched", "field", "modelValue"])) : createCommentVNode("", true),
    $options.widget == "textfield" ? (openBlock(), createBlock(_component_text_field, {
      key: 9,
      onTouched: $options.touch,
      field: $options.actualField,
      modelValue: $options.fieldModel,
      "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => $options.fieldModel = $event)
    }, null, 8, ["onTouched", "field", "modelValue"])) : createCommentVNode("", true),
    $options.widget == "currency" ? (openBlock(), createBlock(_component_currency_field, {
      key: 10,
      onTouched: $options.touch,
      field: $options.actualField,
      modelValue: $options.fieldModel,
      "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => $options.fieldModel = $event)
    }, null, 8, ["onTouched", "field", "modelValue"])) : createCommentVNode("", true),
    $options.widget == "datefield" ? (openBlock(), createBlock(_component_date_field, {
      key: 11,
      onTouched: $options.touch,
      field: $options.actualField,
      modelValue: $options.fieldModel,
      "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => $options.fieldModel = $event)
    }, null, 8, ["onTouched", "field", "modelValue"])) : createCommentVNode("", true),
    $options.widget == "content-select" ? (openBlock(), createBlock(_component_content_select, {
      key: 12,
      onTouched: $options.touch,
      field: $options.actualField,
      modelValue: $options.fieldModel,
      "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => $options.fieldModel = $event)
    }, null, 8, ["onTouched", "field", "modelValue"])) : createCommentVNode("", true),
    $options.widget == "type-select" ? (openBlock(), createBlock(_component_type_select, {
      key: 13,
      onTouched: $options.touch,
      field: $options.actualField,
      modelValue: $options.fieldModel,
      "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => $options.fieldModel = $event)
    }, null, 8, ["onTouched", "field", "modelValue"])) : createCommentVNode("", true),
    $options.widget == "richtext" ? (openBlock(), createBlock(_component_text_area, {
      key: 14,
      onTouched: $options.touch,
      field: $options.actualField,
      modelValue: $options.fieldModel,
      "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => $options.fieldModel = $event)
    }, null, 8, ["onTouched", "field", "modelValue"])) : createCommentVNode("", true),
    $options.widget == "textarea" ? (openBlock(), createBlock(_component_text_area, {
      key: 15,
      onTouched: $options.touch,
      field: $options.actualField,
      modelValue: $options.fieldModel,
      "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => $options.fieldModel = $event)
    }, null, 8, ["onTouched", "field", "modelValue"])) : createCommentVNode("", true),
    $options.widget == "timezone" ? (openBlock(), createBlock(_component_timezone_select, {
      key: 16,
      onTouched: $options.touch,
      field: $options.actualField,
      modelValue: $options.fieldModel,
      "onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => $options.fieldModel = $event)
    }, null, 8, ["onTouched", "field", "modelValue"])) : createCommentVNode("", true),
    $options.widget == "phone" ? (openBlock(), createBlock(_component_phone_number_input, {
      key: 17,
      onTouched: $options.touch,
      field: $options.actualField,
      modelValue: $options.fieldModel,
      "onUpdate:modelValue": _cache[18] || (_cache[18] = ($event) => $options.fieldModel = $event)
    }, null, 8, ["onTouched", "field", "modelValue"])) : createCommentVNode("", true),
    $options.widget == "value" ? (openBlock(), createElementBlock(Fragment, { key: 18 }, [], 64)) : createCommentVNode("", true),
    $options.widget == "object" ? (openBlock(), createBlock(_component_object_field, {
      key: 19,
      onTouched: $options.touch,
      field: $options.actualField,
      modelValue: $options.fieldModel,
      "onUpdate:modelValue": _cache[19] || (_cache[19] = ($event) => $options.fieldModel = $event)
    }, null, 8, ["onTouched", "field", "modelValue"])) : createCommentVNode("", true),
    $options.widget == "options" ? (openBlock(), createBlock(_component_options_manager, {
      key: 20,
      onTouched: $options.touch,
      field: $options.actualField,
      modelValue: $options.fieldModel,
      "onUpdate:modelValue": _cache[20] || (_cache[20] = ($event) => $options.fieldModel = $event)
    }, null, 8, ["onTouched", "field", "modelValue"])) : createCommentVNode("", true),
    $options.widget == "code" ? (openBlock(), createBlock(_component_flex_column, {
      key: 21,
      style: { "min-height": "300px" }
    }, {
      default: withCtx(() => [
        createVNode(_component_code_editor_field, {
          onTouched: $options.touch,
          field: $options.actualField,
          modelValue: $options.fieldModel,
          "onUpdate:modelValue": _cache[21] || (_cache[21] = ($event) => $options.fieldModel = $event)
        }, null, 8, ["onTouched", "field", "modelValue"])
      ]),
      _: 1
    })) : createCommentVNode("", true),
    $options.error && $data.validateResults.message ? (openBlock(), createElementBlock("div", _hoisted_1$d, toDisplayString($data.validateResults.message), 1)) : createCommentVNode("", true)
  ], 34)) : createCommentVNode("", true);
}
var UXFormField = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$i], ["__scopeId", "data-v-25b1ee7a"]]);
var form_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$h = {
  props: {
    parentModel: {
      type: Object
    },
    fields: {
      type: Array,
      default() {
        return [];
      }
    },
    modelValue: {
      type: Object,
      default() {
        return {};
      }
    },
    flex: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    modelValue(val, old) {
      this.model = val;
    }
  },
  data() {
    return {
      mounted: false,
      model: this.modelValue,
      touched: false,
      invalid: false,
      error: false,
      dirty: false,
      focussed: false
    };
  },
  mounted() {
    this.mounted = true;
  },
  beforeUnmount() {
    this.mounted = false;
  },
  methods: {
    reset() {
    },
    fieldUnmounted(field) {
      this.fieldStateChange(field, "unmount");
      this.$emit("field:unmount", this);
    },
    fieldMounted(field) {
      this.fieldStateChange(field, "unmount");
      this.$emit("field:mount", this);
    },
    fieldDirty(field) {
      this.fieldStateChange(field, "dirty");
      this.$emit("field:dirty", this);
    },
    fieldInvalid(field) {
      this.fieldStateChange(field, "invalid");
      this.$emit("field:invalid", this);
    },
    fieldValid(field) {
      this.fieldStateChange(field, "valid");
      this.$emit("field:valid", this);
    },
    fieldError(field) {
      this.fieldStateChange(field, "error");
      this.$emit("field:error", this);
    },
    fieldFocus(field) {
      this.fieldStateChange(field, "focus");
      this.$emit("field:focus", this);
    },
    fieldBlur(field) {
      this.fieldStateChange(field, "blur");
      this.$emit("field:blur", this);
    },
    fieldTouch(field) {
      this.fieldStateChange(field, "touch");
      this.$emit("field:touch", this);
    },
    fieldStateChange(triggerField, event) {
      var self2 = this;
      self2.$nextTick(function() {
        var dirty = false;
        var invalid = false;
        var error = false;
        var touched = false;
        var focussed = false;
        var invalidFields = [];
        self2.childFields.forEach(function(field) {
          if (field.dirty) {
            dirty = true;
          }
          if (field.invalid) {
            invalid = true;
            invalidFields.push({
              title: field.field.title,
              key: field.field.key
            });
          }
          if (field.error) {
            error = true;
          }
          if (field.touched) {
            touched = true;
          }
          if (field.focussed) {
            focussed = true;
          }
        });
        self2.dirty = dirty;
        self2.error = error;
        self2.touched = touched;
        self2.focussed = focussed;
        self2.invalid = invalid;
        self2.$emit("form:state", {
          dirty,
          error,
          focussed,
          touched,
          invalid,
          valid: !invalid,
          invalidFields
        });
      });
    }
  },
  components: {
    UxField: UXFormField
  },
  computed: {
    fieldHash() {
      return this.renderFields.reduce(function(set, field) {
        if (!field) {
          return set;
        }
        set[field.key] = field;
        return set;
      }, {});
    },
    valid() {
      return !this.invalid;
    },
    childFields() {
      var self2 = this;
      var directRefs = [];
      if (!self2.mounted) {
        return [];
      }
      findRecursive(this.$refs, directRefs);
      function findRecursive($refs, collection) {
        var fields = $refs.field ? $refs.field : [];
        var groups = $refs.group ? $refs.group : [];
        var forms = $refs.form ? $refs.form : [];
        if (fields && !Array.isArray(fields)) {
          fields = [fields];
        }
        if (groups && !Array.isArray(groups)) {
          groups = [groups];
        }
        if (forms && !Array.isArray(forms)) {
          forms = [forms];
        }
        fields.forEach(function(field) {
          if (field.visible) {
            collection.push(field);
            findRecursive(field.$refs, collection);
          }
        });
        groups.forEach(function(group) {
          findRecursive(group.$refs, collection);
        });
        forms.forEach(function(form) {
          findRecursive(form.$refs, collection);
        });
      }
      return directRefs;
    },
    formClass() {
      var array = [];
      if (this.flex) {
        array.push("ux-form-flex");
      }
      return array;
    },
    fieldClass() {
      var array = [];
      if (this.flex) {
        array.push("ux-field-flex");
      }
      return array;
    },
    formModel: {
      get() {
        return this.model;
      },
      set(value) {
        this.model = value;
        this.$emit("update:modelValue", this.model);
      }
    },
    renderFields() {
      return this.fields.filter(Boolean);
    }
  }
};
function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ux_field = resolveComponent("ux-field");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["ux-form", $options.formClass])
  }, [
    renderSlot(_ctx.$slots, "fields", {
      fields: $options.renderFields,
      hash: $options.fieldHash
    }, () => [
      (openBlock(true), createElementBlock(Fragment, null, renderList($options.renderFields, (field, index2) => {
        return openBlock(), createBlock(_component_ux_field, {
          ref_for: true,
          ref: "field",
          "onField:mount": $options.fieldMounted,
          "onField:unmount": $options.fieldUnmounted,
          "onField:dirty": $options.fieldDirty,
          "onField:invalid": $options.fieldInvalid,
          "onField:valid": $options.fieldValid,
          "onField:error": $options.fieldError,
          "onField:focus": $options.fieldFocus,
          "onField:blur": $options.fieldBlur,
          "onField:touched": $options.fieldTouch,
          field,
          modelValue: $options.formModel,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $options.formModel = $event),
          parentModel: $props.parentModel || $options.formModel,
          class: normalizeClass($options.fieldClass),
          key: `ux-form-field-${field.key}-${index2}`
        }, null, 8, ["onField:mount", "onField:unmount", "onField:dirty", "onField:invalid", "onField:valid", "onField:error", "onField:focus", "onField:blur", "onField:touched", "field", "modelValue", "parentModel", "class"]);
      }), 128))
    ], true)
  ], 2);
}
var UXForm = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$h], ["__scopeId", "data-v-58fbce85"]]);
var search_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$g = {
  props: {
    modelValue: {
      type: String
    },
    placeholder: {
      type: String
    },
    debounce: {
      type: Number,
      default() {
        return 500;
      }
    },
    loading: {
      type: Boolean
    }
  },
  mounted() {
    var self2 = this;
    self2.dispatch = debounce_1(() => {
      self2.$emit("update:modelValue", self2.value);
    }, self2.debounce);
  },
  data() {
    return {
      value: String(this.modelValue)
    };
  },
  methods: {
    clear() {
      this.value = "";
      this.$emit("update:modelValue", this.value);
    }
  },
  watch: {
    modelValue(val, old) {
      this.value = val;
    }
  },
  computed: {
    icon() {
      return this.loading ? `fa-spinner fa-spin` : this.value ? `fa-times` : `fa-search`;
    },
    selectableOptions() {
      return this.options.map(function(option2) {
        const value = option2.value || option2;
        const label = option2.title || option2.name || option2.label || value;
        return {
          label,
          value
        };
      });
    },
    model: {
      get() {
        return this.value;
      },
      set(value) {
        this.value = value;
        this.dispatch();
      }
    }
  }
};
const _hoisted_1$c = { class: "search" };
const _hoisted_2$8 = ["placeholder"];
function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ux_icon = resolveComponent("ux-icon");
  return openBlock(), createElementBlock("div", _hoisted_1$c, [
    withDirectives(createElementVNode("input", {
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $options.model = $event),
      placeholder: $props.placeholder
    }, null, 8, _hoisted_2$8), [
      [vModelText, $options.model]
    ]),
    createElementVNode("div", {
      onClick: _cache[1] || (_cache[1] = ($event) => $options.clear()),
      class: "icon"
    }, [
      createVNode(_component_ux_icon, { icon: $options.icon }, null, 8, ["icon"])
    ])
  ]);
}
var Search = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$g], ["__scopeId", "data-v-0a1831cd"]]);
var RenderMixin = {
  props: {
    field: {
      type: Object,
      default() {
        return {};
      }
    },
    parentModel: {
      type: Object
    }
  },
  data() {
    return {
      model: this.modelValue
    };
  },
  methods: {
    getValue(option2) {
      if (!option2) {
        return;
      }
      return option2._id || option2.value || option2;
    },
    getLabel(option2) {
      if (!option2) {
        return;
      }
      return option2.title || option2.name || option2.label || option2;
    }
  },
  computed: {
    label() {
      return this.field.title;
    },
    description() {
      return this.field.description;
    },
    singleValue() {
      return this.maximum == 1;
    },
    multiValue() {
      return this.maximum != 1;
    },
    key() {
      return this.field.key;
    },
    isGroup() {
      return this.type === "group";
    },
    asObject() {
      return this.isGroup && !!this.field.asObject;
    },
    layoutGroup() {
      return this.isGroup && !this.field.asObject;
    },
    numValues() {
      if (!this.multiValue) {
        return 1;
      }
      return (this.model || []).length;
    },
    fields() {
      var subFields = this.field.fields;
      if (subFields && subFields.length) {
        return subFields;
      }
    },
    minimum() {
      if (this.layoutGroup) {
        return 1;
      }
      var int2 = parseInt(this.field.minimum || 0);
      if (isNaN(int2)) {
        int2 = 0;
      }
      int2 = Math.max(int2, 0);
      int2 = this.maximum ? Math.min(int2, this.maximum) : int2;
      return parseInt(int2);
    },
    maximum() {
      if (this.layoutGroup) {
        return 1;
      }
      var int2 = parseInt(this.field.maximum || 0);
      if (isNaN(int2)) {
        int2 = 0;
      }
      int2 = Math.max(int2, 0);
      return parseInt(int2);
    }
  }
};
var group_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$f = {
  mixins: [RenderMixin],
  props: {
    modelValue: {
      type: [Object, Array]
    }
  },
  computed: {
    sameLine() {
      return this.field.sameLine;
    }
  },
  methods: {
    multiLabel(entry, index2) {
      if (entry.title) {
        return entry.title;
      }
      if (entry.name) {
        return entry.name;
      }
      if (entry.firstName) {
        return entry.firstName;
      }
      return `${this.label} ${index2 + 1}`;
    }
  }
};
const _hoisted_1$b = {
  key: 0,
  class: "ux-multi-group"
};
function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_flex_cell = resolveComponent("flex-cell");
  const _component_flex_row = resolveComponent("flex-row");
  const _component_ux_panel_header = resolveComponent("ux-panel-header");
  const _component_ux_render = resolveComponent("ux-render");
  const _component_ux_panel_body = resolveComponent("ux-panel-body");
  const _component_ux_panel = resolveComponent("ux-panel");
  return _ctx.multiValue ? (openBlock(), createElementBlock("div", _hoisted_1$b, [
    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.model, (entry, index2) => {
      return openBlock(), createBlock(_component_ux_panel, {
        ref_for: true,
        ref: "row",
        key: entry
      }, {
        default: withCtx(() => [
          createVNode(_component_ux_panel_header, null, {
            default: withCtx(() => [
              createVNode(_component_flex_row, null, {
                default: withCtx(() => [
                  createVNode(_component_flex_cell, { vcenter: "" }, {
                    default: withCtx(() => [
                      createElementVNode("div", null, [
                        createElementVNode("strong", null, toDisplayString($options.multiLabel(entry, index2)), 1)
                      ])
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024)
            ]),
            _: 2
          }, 1024),
          createVNode(_component_ux_panel_body, null, {
            default: withCtx(() => [
              createVNode(_component_ux_render, {
                fields: _ctx.fields,
                flex: $options.sameLine,
                parentModel: _ctx.parentModel,
                modelValue: _ctx.model[index2],
                "onUpdate:modelValue": ($event) => _ctx.model[index2] = $event
              }, null, 8, ["fields", "flex", "parentModel", "modelValue", "onUpdate:modelValue"])
            ]),
            _: 2
          }, 1024)
        ]),
        _: 2
      }, 1024);
    }), 128))
  ])) : (openBlock(), createBlock(_component_ux_render, {
    key: 1,
    fields: _ctx.fields,
    flex: $options.sameLine,
    parentModel: _ctx.parentModel,
    modelValue: _ctx.model,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.model = $event)
  }, null, 8, ["fields", "flex", "parentModel", "modelValue"]));
}
var FieldGroup = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$f], ["__scopeId", "data-v-f9347560"]]);
var field_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$e = {
  components: {
    Item,
    FieldGroup
  },
  props: {
    field: {
      type: Object,
      required: true
    },
    parentModel: {
      type: Object
    },
    modelValue: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      model: this.modelValue
    };
  },
  methods: {
    cleanInput(val) {
      return val;
    },
    cleanOutput(val) {
      if (this.type == "reference") {
        if (!this.multiValue) {
          if (Array.isArray(val) && val.length) {
            return val[0];
          }
        }
      }
      return val;
    }
  },
  watch: {
    modelValue(val, old) {
      this.model = val;
    }
  },
  computed: {
    type() {
      return this.field.type || "string";
    },
    isGroup() {
      return this.type === "group";
    },
    asObject() {
      return this.isGroup && this.field.asObject;
    },
    isNumber() {
      switch (this.type) {
        case "integer":
        case "number":
        case "float":
        case "decimal":
          return true;
      }
    },
    multiValue() {
      return this.field.maximum != 1;
    },
    title() {
      return this.field.title;
    },
    getExpressionHide() {
      if (!this.expressions) {
        return;
      }
      let showExpression = this.expressions.show;
      let hideExpression = this.expressions.hide;
      let context = this.expressionsContext;
      if (showExpression) {
        return !!!service.evaluateExpression(showExpression, context);
      } else if (hideExpression) {
        return service.evaluateExpression(hideExpression, context);
      }
    },
    expressions() {
      return this.field.expressions;
    },
    expressionsContext() {
      return {
        this: this.model,
        model: this.model,
        data: this.parentModel
      };
    },
    hidden() {
      return this.getExpressionHide;
    },
    visible() {
      return !this.hidden && this.fieldModel;
    },
    type() {
      return this.field.type || "string";
    },
    key() {
      return this.field.key;
    },
    isGroup() {
      return this.type === "group";
    },
    asObject() {
      return this.isGroup && this.field.asObject;
    },
    layoutGroup() {
      return this.isGroup && !this.field.asObject;
    },
    fieldModel: {
      get() {
        return this.cleanOutput(this.model[this.key]);
      },
      set(value) {
      }
    },
    sourceModel: {
      get() {
        return this.model;
      },
      set(value) {
      }
    },
    classes() {
      var array = [];
      array.push(`ux-field-render-${this.type}`);
      if (this.layoutGroup) {
        array.push("ux-layout-only");
      }
      return array;
    },
    widget() {
      if (this.type == "group") {
        return this.type;
      }
      var widget = this.field.widget;
      switch (widget) {
        case "content-select":
        case "select":
        case "checkbox":
        case "datefield":
        case "richtext":
        case "longtext":
        case "buttons":
        case "switch":
        case "email":
        case "url":
        case "currency":
        case "timezone":
        case "country":
        case "typeselect":
        case "upload":
          break;
        default:
          switch (this.type) {
            case "date":
              widget = "datefield";
              break;
            case "reference":
              widget = "content-select";
              break;
            case "boolean":
              widget = "checkbox";
              break;
            default:
            case "string":
              widget = "textfield";
              break;
          }
          break;
      }
      return widget;
    }
  }
};
const _hoisted_1$a = { class: "ux-field-title" };
const _hoisted_2$7 = { class: "ux-field-description" };
const _hoisted_3$6 = { key: 1 };
const _hoisted_4$6 = { key: 1 };
const _hoisted_5$2 = ["href"];
const _hoisted_6$1 = { key: 1 };
const _hoisted_7$1 = ["href"];
const _hoisted_8$1 = ["href"];
const _hoisted_9 = { key: 1 };
const _hoisted_10 = ["href"];
const _hoisted_11 = { key: 1 };
function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_item = resolveComponent("item");
  const _component_field_group = resolveComponent("field-group");
  return $options.visible ? (openBlock(), createElementBlock("div", {
    key: 0,
    class: normalizeClass(["ux-field-render", $options.classes])
  }, [
    createElementVNode("label", _hoisted_1$a, toDisplayString($options.title), 1),
    createElementVNode("div", _hoisted_2$7, toDisplayString($props.field.description), 1),
    $options.type == "reference" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
      $options.multiValue ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList($options.fieldModel, (item, index2) => {
        return openBlock(), createBlock(_component_item, {
          key: item._id,
          item
        }, null, 8, ["item"]);
      }), 128)) : (openBlock(), createBlock(_component_item, {
        key: 1,
        item: $options.fieldModel
      }, null, 8, ["item"]))
    ], 64)) : createCommentVNode("", true),
    $options.widget == "group" ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
      $options.asObject ? (openBlock(), createBlock(_component_field_group, {
        key: 0,
        field: $props.field,
        parentModel: $props.parentModel,
        modelValue: $options.fieldModel,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $options.fieldModel = $event)
      }, null, 8, ["field", "parentModel", "modelValue"])) : (openBlock(), createBlock(_component_field_group, {
        key: 1,
        field: $props.field,
        parentModel: $props.parentModel,
        modelValue: $options.sourceModel,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $options.sourceModel = $event)
      }, null, 8, ["field", "parentModel", "modelValue"]))
    ], 64)) : createCommentVNode("", true),
    $options.type == "string" ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
      $options.multiValue ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList($options.fieldModel, (value, index2) => {
        return openBlock(), createElementBlock("div", null, toDisplayString(value), 1);
      }), 256)) : (openBlock(), createElementBlock("div", _hoisted_3$6, toDisplayString($options.fieldModel), 1))
    ], 64)) : createCommentVNode("", true),
    $options.type == "date" ? (openBlock(), createElementBlock(Fragment, { key: 3 }, [
      $options.multiValue ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList($options.fieldModel, (value, index2) => {
        return openBlock(), createElementBlock("div", null, toDisplayString(value), 1);
      }), 256)) : (openBlock(), createElementBlock("div", _hoisted_4$6, toDisplayString($options.fieldModel), 1))
    ], 64)) : createCommentVNode("", true),
    $options.type == "email" ? (openBlock(), createElementBlock(Fragment, { key: 4 }, [
      $options.multiValue ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList($options.fieldModel, (value, index2) => {
        return openBlock(), createElementBlock("div", null, [
          createElementVNode("a", {
            href: `mailto:${value}`
          }, toDisplayString(value), 9, _hoisted_5$2)
        ]);
      }), 256)) : (openBlock(), createElementBlock("div", _hoisted_6$1, [
        createElementVNode("a", {
          href: `mailto:${$options.fieldModel}`
        }, toDisplayString($options.fieldModel), 9, _hoisted_7$1)
      ]))
    ], 64)) : createCommentVNode("", true),
    $options.type == "url" ? (openBlock(), createElementBlock(Fragment, { key: 5 }, [
      $options.multiValue ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList($options.fieldModel, (value, index2) => {
        return openBlock(), createElementBlock("div", null, [
          createElementVNode("a", { href: value }, toDisplayString(value), 9, _hoisted_8$1)
        ]);
      }), 256)) : (openBlock(), createElementBlock("div", _hoisted_9, [
        createElementVNode("a", { href: $options.fieldModel }, toDisplayString($options.fieldModel), 9, _hoisted_10)
      ]))
    ], 64)) : createCommentVNode("", true),
    $options.isNumber ? (openBlock(), createElementBlock(Fragment, { key: 6 }, [
      $options.multiValue ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList($options.fieldModel, (value, index2) => {
        return openBlock(), createElementBlock("div", null, toDisplayString(value), 1);
      }), 256)) : (openBlock(), createElementBlock("div", _hoisted_11, toDisplayString($options.fieldModel), 1))
    ], 64)) : createCommentVNode("", true)
  ], 2)) : createCommentVNode("", true);
}
var UXRenderField = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$e], ["__scopeId", "data-v-02f0b094"]]);
var render_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$d = {
  props: {
    parentModel: {
      type: Object
    },
    fields: {
      type: Array,
      default() {
        return [];
      }
    },
    modelValue: {
      type: Object,
      default() {
        return {};
      }
    },
    flex: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    modelValue(val, old) {
      this.model = val;
    }
  },
  data() {
    return {
      model: this.modelValue
    };
  },
  components: {
    UxFieldRender: UXRenderField
  },
  computed: {
    renderClass() {
      var array = [];
      if (this.flex) {
        array.push("ux-render-flex");
      }
      return array;
    },
    fieldClass() {
      var array = [];
      if (this.flex) {
        array.push("ux-field-render-flex");
      }
      return array;
    },
    renderFields() {
      return this.fields;
    }
  }
};
function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ux_field_render = resolveComponent("ux-field-render");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["ux-render", $options.renderClass])
  }, [
    renderSlot(_ctx.$slots, "render", { fields: $props.fields }, () => [
      (openBlock(true), createElementBlock(Fragment, null, renderList($options.renderFields, (field, index2) => {
        return openBlock(), createBlock(_component_ux_field_render, {
          field,
          modelValue: $data.model,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.model = $event),
          parentModel: $props.parentModel || $data.model,
          key: `ux-render-field-${field.key}-${index2}`,
          class: normalizeClass($options.fieldClass)
        }, null, 8, ["field", "modelValue", "parentModel", "class"]);
      }), 128))
    ], true)
  ], 2);
}
var UXRender = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$d], ["__scopeId", "data-v-31c62e32"]]);
var isArray$3 = Array.isArray;
var isArray_1 = isArray$3;
var isArray$2 = isArray_1, isSymbol$2 = isSymbol_1;
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
function isKey$1(value, object) {
  if (isArray$2(value)) {
    return false;
  }
  var type = typeof value;
  if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol$2(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
var _isKey = isKey$1;
var baseGetTag = _baseGetTag, isObject$1 = isObject_1;
var asyncTag = "[object AsyncFunction]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
function isFunction$1(value) {
  if (!isObject$1(value)) {
    return false;
  }
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
var isFunction_1 = isFunction$1;
var root$1 = _root;
var coreJsData$1 = root$1["__core-js_shared__"];
var _coreJsData = coreJsData$1;
var coreJsData = _coreJsData;
var maskSrcKey = function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked$1(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var _isMasked = isMasked$1;
var funcProto$1 = Function.prototype;
var funcToString$1 = funcProto$1.toString;
function toSource$1(func) {
  if (func != null) {
    try {
      return funcToString$1.call(func);
    } catch (e) {
    }
    try {
      return func + "";
    } catch (e) {
    }
  }
  return "";
}
var _toSource = toSource$1;
var isFunction = isFunction_1, isMasked = _isMasked, isObject = isObject_1, toSource = _toSource;
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto = Function.prototype, objectProto$2 = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty$3 = objectProto$2.hasOwnProperty;
var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty$3).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function baseIsNative$1(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}
var _baseIsNative = baseIsNative$1;
function getValue$1(object, key) {
  return object == null ? void 0 : object[key];
}
var _getValue = getValue$1;
var baseIsNative = _baseIsNative, getValue = _getValue;
function getNative$2(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : void 0;
}
var _getNative = getNative$2;
var getNative$1 = _getNative;
var nativeCreate$4 = getNative$1(Object, "create");
var _nativeCreate = nativeCreate$4;
var nativeCreate$3 = _nativeCreate;
function hashClear$1() {
  this.__data__ = nativeCreate$3 ? nativeCreate$3(null) : {};
  this.size = 0;
}
var _hashClear = hashClear$1;
function hashDelete$1(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
var _hashDelete = hashDelete$1;
var nativeCreate$2 = _nativeCreate;
var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
var objectProto$1 = Object.prototype;
var hasOwnProperty$2 = objectProto$1.hasOwnProperty;
function hashGet$1(key) {
  var data = this.__data__;
  if (nativeCreate$2) {
    var result = data[key];
    return result === HASH_UNDEFINED$1 ? void 0 : result;
  }
  return hasOwnProperty$2.call(data, key) ? data[key] : void 0;
}
var _hashGet = hashGet$1;
var nativeCreate$1 = _nativeCreate;
var objectProto = Object.prototype;
var hasOwnProperty$1 = objectProto.hasOwnProperty;
function hashHas$1(key) {
  var data = this.__data__;
  return nativeCreate$1 ? data[key] !== void 0 : hasOwnProperty$1.call(data, key);
}
var _hashHas = hashHas$1;
var nativeCreate = _nativeCreate;
var HASH_UNDEFINED = "__lodash_hash_undefined__";
function hashSet$1(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
  return this;
}
var _hashSet = hashSet$1;
var hashClear = _hashClear, hashDelete = _hashDelete, hashGet = _hashGet, hashHas = _hashHas, hashSet = _hashSet;
function Hash$1(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
Hash$1.prototype.clear = hashClear;
Hash$1.prototype["delete"] = hashDelete;
Hash$1.prototype.get = hashGet;
Hash$1.prototype.has = hashHas;
Hash$1.prototype.set = hashSet;
var _Hash = Hash$1;
function listCacheClear$1() {
  this.__data__ = [];
  this.size = 0;
}
var _listCacheClear = listCacheClear$1;
function eq$1(value, other) {
  return value === other || value !== value && other !== other;
}
var eq_1 = eq$1;
var eq = eq_1;
function assocIndexOf$4(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
var _assocIndexOf = assocIndexOf$4;
var assocIndexOf$3 = _assocIndexOf;
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete$1(key) {
  var data = this.__data__, index2 = assocIndexOf$3(data, key);
  if (index2 < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index2 == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index2, 1);
  }
  --this.size;
  return true;
}
var _listCacheDelete = listCacheDelete$1;
var assocIndexOf$2 = _assocIndexOf;
function listCacheGet$1(key) {
  var data = this.__data__, index2 = assocIndexOf$2(data, key);
  return index2 < 0 ? void 0 : data[index2][1];
}
var _listCacheGet = listCacheGet$1;
var assocIndexOf$1 = _assocIndexOf;
function listCacheHas$1(key) {
  return assocIndexOf$1(this.__data__, key) > -1;
}
var _listCacheHas = listCacheHas$1;
var assocIndexOf = _assocIndexOf;
function listCacheSet$1(key, value) {
  var data = this.__data__, index2 = assocIndexOf(data, key);
  if (index2 < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index2][1] = value;
  }
  return this;
}
var _listCacheSet = listCacheSet$1;
var listCacheClear = _listCacheClear, listCacheDelete = _listCacheDelete, listCacheGet = _listCacheGet, listCacheHas = _listCacheHas, listCacheSet = _listCacheSet;
function ListCache$1(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
ListCache$1.prototype.clear = listCacheClear;
ListCache$1.prototype["delete"] = listCacheDelete;
ListCache$1.prototype.get = listCacheGet;
ListCache$1.prototype.has = listCacheHas;
ListCache$1.prototype.set = listCacheSet;
var _ListCache = ListCache$1;
var getNative = _getNative, root = _root;
var Map$1 = getNative(root, "Map");
var _Map = Map$1;
var Hash = _Hash, ListCache = _ListCache, Map = _Map;
function mapCacheClear$1() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash(),
    "map": new (Map || ListCache)(),
    "string": new Hash()
  };
}
var _mapCacheClear = mapCacheClear$1;
function isKeyable$1(value) {
  var type = typeof value;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
var _isKeyable = isKeyable$1;
var isKeyable = _isKeyable;
function getMapData$4(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
var _getMapData = getMapData$4;
var getMapData$3 = _getMapData;
function mapCacheDelete$1(key) {
  var result = getMapData$3(this, key)["delete"](key);
  this.size -= result ? 1 : 0;
  return result;
}
var _mapCacheDelete = mapCacheDelete$1;
var getMapData$2 = _getMapData;
function mapCacheGet$1(key) {
  return getMapData$2(this, key).get(key);
}
var _mapCacheGet = mapCacheGet$1;
var getMapData$1 = _getMapData;
function mapCacheHas$1(key) {
  return getMapData$1(this, key).has(key);
}
var _mapCacheHas = mapCacheHas$1;
var getMapData = _getMapData;
function mapCacheSet$1(key, value) {
  var data = getMapData(this, key), size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}
var _mapCacheSet = mapCacheSet$1;
var mapCacheClear = _mapCacheClear, mapCacheDelete = _mapCacheDelete, mapCacheGet = _mapCacheGet, mapCacheHas = _mapCacheHas, mapCacheSet = _mapCacheSet;
function MapCache$1(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
MapCache$1.prototype.clear = mapCacheClear;
MapCache$1.prototype["delete"] = mapCacheDelete;
MapCache$1.prototype.get = mapCacheGet;
MapCache$1.prototype.has = mapCacheHas;
MapCache$1.prototype.set = mapCacheSet;
var _MapCache = MapCache$1;
var MapCache = _MapCache;
var FUNC_ERROR_TEXT = "Expected a function";
function memoize$1(func, resolver) {
  if (typeof func != "function" || resolver != null && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize$1.Cache || MapCache)();
  return memoized;
}
memoize$1.Cache = MapCache;
var memoize_1 = memoize$1;
var memoize = memoize_1;
var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped$1(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });
  var cache = result.cache;
  return result;
}
var _memoizeCapped = memoizeCapped$1;
var memoizeCapped = _memoizeCapped;
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath$1 = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46) {
    result.push("");
  }
  string.replace(rePropName, function(match2, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match2);
  });
  return result;
});
var _stringToPath = stringToPath$1;
function arrayMap$1(array, iteratee) {
  var index2 = -1, length = array == null ? 0 : array.length, result = Array(length);
  while (++index2 < length) {
    result[index2] = iteratee(array[index2], index2, array);
  }
  return result;
}
var _arrayMap = arrayMap$1;
var Symbol$1 = _Symbol, arrayMap = _arrayMap, isArray$1 = isArray_1, isSymbol$1 = isSymbol_1;
var INFINITY$1 = 1 / 0;
var symbolProto = Symbol$1 ? Symbol$1.prototype : void 0, symbolToString = symbolProto ? symbolProto.toString : void 0;
function baseToString$1(value) {
  if (typeof value == "string") {
    return value;
  }
  if (isArray$1(value)) {
    return arrayMap(value, baseToString$1) + "";
  }
  if (isSymbol$1(value)) {
    return symbolToString ? symbolToString.call(value) : "";
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY$1 ? "-0" : result;
}
var _baseToString = baseToString$1;
var baseToString = _baseToString;
function toString$1(value) {
  return value == null ? "" : baseToString(value);
}
var toString_1 = toString$1;
var isArray = isArray_1, isKey = _isKey, stringToPath = _stringToPath, toString = toString_1;
function castPath$1(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}
var _castPath = castPath$1;
var isSymbol = isSymbol_1;
var INFINITY = 1 / 0;
function toKey$1(value) {
  if (typeof value == "string" || isSymbol(value)) {
    return value;
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
var _toKey = toKey$1;
var castPath = _castPath, toKey = _toKey;
function baseGet$1(object, path) {
  path = castPath(path, object);
  var index2 = 0, length = path.length;
  while (object != null && index2 < length) {
    object = object[toKey(path[index2++])];
  }
  return index2 && index2 == length ? object : void 0;
}
var _baseGet = baseGet$1;
var baseGet = _baseGet;
function get(object, path, defaultValue) {
  var result = object == null ? void 0 : baseGet(object, path);
  return result === void 0 ? defaultValue : result;
}
var get_1 = get;
var TableCellMixin = {
  props: {
    column: {
      type: Object,
      required: true
    },
    row: {
      type: Object,
      required: true
    },
    value: {}
  }
};
var Thumbnail_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$c = {
  mixins: [TableCellMixin],
  computed: {
    type() {
      var _a, _b;
      return (_b = (_a = this.row) == null ? void 0 : _a.meta) == null ? void 0 : _b.type;
    }
  }
};
const _hoisted_1$9 = { class: "table-image-cell" };
function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ux_image = resolveComponent("ux-image");
  const _component_ux_icon = resolveComponent("ux-icon");
  return openBlock(), createElementBlock("td", _hoisted_1$9, [
    $options.type == "image" || $options.type == "video" ? (openBlock(), createBlock(_component_ux_image, {
      key: 0,
      item: _ctx.row,
      type: $options.type,
      width: 50
    }, null, 8, ["item", "type"])) : (openBlock(), createBlock(_component_ux_icon, {
      key: 1,
      icon: "fa-file"
    }))
  ]);
}
var ThumbnailCell = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$c], ["__scopeId", "data-v-6dbe8d2c"]]);
var Button_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$b = {
  data() {
    return {
      processing: false
    };
  },
  mixins: [TableCellMixin],
  computed: {
    button() {
      return this.column.button;
    },
    type() {
      var _a, _b;
      return (_b = (_a = this.row) == null ? void 0 : _a.meta) == null ? void 0 : _b.type;
    }
  },
  methods: {
    async clicked() {
      this.processing = true;
      await this.button.action(this.row);
      this.processing = false;
    }
  }
};
const _hoisted_1$8 = { class: "table-button-cell" };
function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ux_icon = resolveComponent("ux-icon");
  const _component_ux_button = resolveComponent("ux-button");
  return openBlock(), createElementBlock("td", _hoisted_1$8, [
    createVNode(_component_ux_button, {
      size: $options.button.size,
      loading: $data.processing,
      onClick: withModifiers($options.clicked, ["stop", "prevent"])
    }, {
      default: withCtx(() => [
        $options.button.text ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createTextVNode(toDisplayString($options.button.text), 1)
        ], 64)) : createCommentVNode("", true),
        $options.button.icon ? (openBlock(), createBlock(_component_ux_icon, {
          key: 1,
          icon: $options.button.icon,
          right: ""
        }, null, 8, ["icon"])) : createCommentVNode("", true)
      ]),
      _: 1
    }, 8, ["size", "loading", "onClick"])
  ]);
}
var ButtonCell = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$b], ["__scopeId", "data-v-3cbecb7e"]]);
class LuxonError extends Error {
}
class InvalidDateTimeError extends LuxonError {
  constructor(reason) {
    super(`Invalid DateTime: ${reason.toMessage()}`);
  }
}
class InvalidIntervalError extends LuxonError {
  constructor(reason) {
    super(`Invalid Interval: ${reason.toMessage()}`);
  }
}
class InvalidDurationError extends LuxonError {
  constructor(reason) {
    super(`Invalid Duration: ${reason.toMessage()}`);
  }
}
class ConflictingSpecificationError extends LuxonError {
}
class InvalidUnitError extends LuxonError {
  constructor(unit) {
    super(`Invalid unit ${unit}`);
  }
}
class InvalidArgumentError extends LuxonError {
}
class ZoneIsAbstractError extends LuxonError {
  constructor() {
    super("Zone is an abstract class");
  }
}
const n = "numeric", s = "short", l = "long";
const DATE_SHORT = {
  year: n,
  month: n,
  day: n
};
const DATE_MED = {
  year: n,
  month: s,
  day: n
};
const DATE_MED_WITH_WEEKDAY = {
  year: n,
  month: s,
  day: n,
  weekday: s
};
const DATE_FULL = {
  year: n,
  month: l,
  day: n
};
const DATE_HUGE = {
  year: n,
  month: l,
  day: n,
  weekday: l
};
const TIME_SIMPLE = {
  hour: n,
  minute: n
};
const TIME_WITH_SECONDS = {
  hour: n,
  minute: n,
  second: n
};
const TIME_WITH_SHORT_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  timeZoneName: s
};
const TIME_WITH_LONG_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  timeZoneName: l
};
const TIME_24_SIMPLE = {
  hour: n,
  minute: n,
  hourCycle: "h23"
};
const TIME_24_WITH_SECONDS = {
  hour: n,
  minute: n,
  second: n,
  hourCycle: "h23"
};
const TIME_24_WITH_SHORT_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  hourCycle: "h23",
  timeZoneName: s
};
const TIME_24_WITH_LONG_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  hourCycle: "h23",
  timeZoneName: l
};
const DATETIME_SHORT = {
  year: n,
  month: n,
  day: n,
  hour: n,
  minute: n
};
const DATETIME_SHORT_WITH_SECONDS = {
  year: n,
  month: n,
  day: n,
  hour: n,
  minute: n,
  second: n
};
const DATETIME_MED = {
  year: n,
  month: s,
  day: n,
  hour: n,
  minute: n
};
const DATETIME_MED_WITH_SECONDS = {
  year: n,
  month: s,
  day: n,
  hour: n,
  minute: n,
  second: n
};
const DATETIME_MED_WITH_WEEKDAY = {
  year: n,
  month: s,
  day: n,
  weekday: s,
  hour: n,
  minute: n
};
const DATETIME_FULL = {
  year: n,
  month: l,
  day: n,
  hour: n,
  minute: n,
  timeZoneName: s
};
const DATETIME_FULL_WITH_SECONDS = {
  year: n,
  month: l,
  day: n,
  hour: n,
  minute: n,
  second: n,
  timeZoneName: s
};
const DATETIME_HUGE = {
  year: n,
  month: l,
  day: n,
  weekday: l,
  hour: n,
  minute: n,
  timeZoneName: l
};
const DATETIME_HUGE_WITH_SECONDS = {
  year: n,
  month: l,
  day: n,
  weekday: l,
  hour: n,
  minute: n,
  second: n,
  timeZoneName: l
};
function isUndefined(o) {
  return typeof o === "undefined";
}
function isNumber(o) {
  return typeof o === "number";
}
function isInteger(o) {
  return typeof o === "number" && o % 1 === 0;
}
function isString(o) {
  return typeof o === "string";
}
function isDate(o) {
  return Object.prototype.toString.call(o) === "[object Date]";
}
function hasRelative() {
  try {
    return typeof Intl !== "undefined" && !!Intl.RelativeTimeFormat;
  } catch (e) {
    return false;
  }
}
function maybeArray(thing) {
  return Array.isArray(thing) ? thing : [thing];
}
function bestBy(arr, by, compare) {
  if (arr.length === 0) {
    return void 0;
  }
  return arr.reduce((best, next) => {
    const pair = [by(next), next];
    if (!best) {
      return pair;
    } else if (compare(best[0], pair[0]) === best[0]) {
      return best;
    } else {
      return pair;
    }
  }, null)[1];
}
function pick(obj, keys) {
  return keys.reduce((a2, k) => {
    a2[k] = obj[k];
    return a2;
  }, {});
}
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}
function integerBetween(thing, bottom, top) {
  return isInteger(thing) && thing >= bottom && thing <= top;
}
function floorMod(x, n2) {
  return x - n2 * Math.floor(x / n2);
}
function padStart(input, n2 = 2) {
  const isNeg = input < 0;
  let padded;
  if (isNeg) {
    padded = "-" + ("" + -input).padStart(n2, "0");
  } else {
    padded = ("" + input).padStart(n2, "0");
  }
  return padded;
}
function parseInteger(string) {
  if (isUndefined(string) || string === null || string === "") {
    return void 0;
  } else {
    return parseInt(string, 10);
  }
}
function parseFloating(string) {
  if (isUndefined(string) || string === null || string === "") {
    return void 0;
  } else {
    return parseFloat(string);
  }
}
function parseMillis(fraction) {
  if (isUndefined(fraction) || fraction === null || fraction === "") {
    return void 0;
  } else {
    const f = parseFloat("0." + fraction) * 1e3;
    return Math.floor(f);
  }
}
function roundTo(number, digits, towardZero = false) {
  const factor = 10 ** digits, rounder = towardZero ? Math.trunc : Math.round;
  return rounder(number * factor) / factor;
}
function isLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}
function daysInYear(year) {
  return isLeapYear(year) ? 366 : 365;
}
function daysInMonth(year, month) {
  const modMonth = floorMod(month - 1, 12) + 1, modYear = year + (month - modMonth) / 12;
  if (modMonth === 2) {
    return isLeapYear(modYear) ? 29 : 28;
  } else {
    return [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][modMonth - 1];
  }
}
function objToLocalTS(obj) {
  let d = Date.UTC(obj.year, obj.month - 1, obj.day, obj.hour, obj.minute, obj.second, obj.millisecond);
  if (obj.year < 100 && obj.year >= 0) {
    d = new Date(d);
    d.setUTCFullYear(d.getUTCFullYear() - 1900);
  }
  return +d;
}
function weeksInWeekYear(weekYear) {
  const p1 = (weekYear + Math.floor(weekYear / 4) - Math.floor(weekYear / 100) + Math.floor(weekYear / 400)) % 7, last = weekYear - 1, p2 = (last + Math.floor(last / 4) - Math.floor(last / 100) + Math.floor(last / 400)) % 7;
  return p1 === 4 || p2 === 3 ? 53 : 52;
}
function untruncateYear(year) {
  if (year > 99) {
    return year;
  } else
    return year > 60 ? 1900 + year : 2e3 + year;
}
function parseZoneInfo(ts, offsetFormat, locale, timeZone = null) {
  const date = new Date(ts), intlOpts = {
    hourCycle: "h23",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  };
  if (timeZone) {
    intlOpts.timeZone = timeZone;
  }
  const modified = __spreadValues({ timeZoneName: offsetFormat }, intlOpts);
  const parsed = new Intl.DateTimeFormat(locale, modified).formatToParts(date).find((m) => m.type.toLowerCase() === "timezonename");
  return parsed ? parsed.value : null;
}
function signedOffset(offHourStr, offMinuteStr) {
  let offHour = parseInt(offHourStr, 10);
  if (Number.isNaN(offHour)) {
    offHour = 0;
  }
  const offMin = parseInt(offMinuteStr, 10) || 0, offMinSigned = offHour < 0 || Object.is(offHour, -0) ? -offMin : offMin;
  return offHour * 60 + offMinSigned;
}
function asNumber(value) {
  const numericValue = Number(value);
  if (typeof value === "boolean" || value === "" || Number.isNaN(numericValue))
    throw new InvalidArgumentError(`Invalid unit value ${value}`);
  return numericValue;
}
function normalizeObject(obj, normalizer) {
  const normalized = {};
  for (const u2 in obj) {
    if (hasOwnProperty(obj, u2)) {
      const v = obj[u2];
      if (v === void 0 || v === null)
        continue;
      normalized[normalizer(u2)] = asNumber(v);
    }
  }
  return normalized;
}
function formatOffset(offset2, format) {
  const hours = Math.trunc(Math.abs(offset2 / 60)), minutes = Math.trunc(Math.abs(offset2 % 60)), sign = offset2 >= 0 ? "+" : "-";
  switch (format) {
    case "short":
      return `${sign}${padStart(hours, 2)}:${padStart(minutes, 2)}`;
    case "narrow":
      return `${sign}${hours}${minutes > 0 ? `:${minutes}` : ""}`;
    case "techie":
      return `${sign}${padStart(hours, 2)}${padStart(minutes, 2)}`;
    default:
      throw new RangeError(`Value format ${format} is out of range for property format`);
  }
}
function timeObject(obj) {
  return pick(obj, ["hour", "minute", "second", "millisecond"]);
}
const ianaRegex = /[A-Za-z_+-]{1,256}(:?\/[A-Za-z0-9_+-]{1,256}(\/[A-Za-z0-9_+-]{1,256})?)?/;
const monthsLong = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
const monthsShort = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
const monthsNarrow = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
function months(length) {
  switch (length) {
    case "narrow":
      return [...monthsNarrow];
    case "short":
      return [...monthsShort];
    case "long":
      return [...monthsLong];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    case "2-digit":
      return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    default:
      return null;
  }
}
const weekdaysLong = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];
const weekdaysShort = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const weekdaysNarrow = ["M", "T", "W", "T", "F", "S", "S"];
function weekdays(length) {
  switch (length) {
    case "narrow":
      return [...weekdaysNarrow];
    case "short":
      return [...weekdaysShort];
    case "long":
      return [...weekdaysLong];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7"];
    default:
      return null;
  }
}
const meridiems = ["AM", "PM"];
const erasLong = ["Before Christ", "Anno Domini"];
const erasShort = ["BC", "AD"];
const erasNarrow = ["B", "A"];
function eras(length) {
  switch (length) {
    case "narrow":
      return [...erasNarrow];
    case "short":
      return [...erasShort];
    case "long":
      return [...erasLong];
    default:
      return null;
  }
}
function meridiemForDateTime(dt) {
  return meridiems[dt.hour < 12 ? 0 : 1];
}
function weekdayForDateTime(dt, length) {
  return weekdays(length)[dt.weekday - 1];
}
function monthForDateTime(dt, length) {
  return months(length)[dt.month - 1];
}
function eraForDateTime(dt, length) {
  return eras(length)[dt.year < 0 ? 0 : 1];
}
function formatRelativeTime(unit, count, numeric = "always", narrow = false) {
  const units = {
    years: ["year", "yr."],
    quarters: ["quarter", "qtr."],
    months: ["month", "mo."],
    weeks: ["week", "wk."],
    days: ["day", "day", "days"],
    hours: ["hour", "hr."],
    minutes: ["minute", "min."],
    seconds: ["second", "sec."]
  };
  const lastable = ["hours", "minutes", "seconds"].indexOf(unit) === -1;
  if (numeric === "auto" && lastable) {
    const isDay = unit === "days";
    switch (count) {
      case 1:
        return isDay ? "tomorrow" : `next ${units[unit][0]}`;
      case -1:
        return isDay ? "yesterday" : `last ${units[unit][0]}`;
      case 0:
        return isDay ? "today" : `this ${units[unit][0]}`;
    }
  }
  const isInPast = Object.is(count, -0) || count < 0, fmtValue = Math.abs(count), singular = fmtValue === 1, lilUnits = units[unit], fmtUnit = narrow ? singular ? lilUnits[1] : lilUnits[2] || lilUnits[1] : singular ? units[unit][0] : unit;
  return isInPast ? `${fmtValue} ${fmtUnit} ago` : `in ${fmtValue} ${fmtUnit}`;
}
function stringifyTokens(splits, tokenToString) {
  let s2 = "";
  for (const token of splits) {
    if (token.literal) {
      s2 += token.val;
    } else {
      s2 += tokenToString(token.val);
    }
  }
  return s2;
}
const macroTokenToFormatOpts = {
  D: DATE_SHORT,
  DD: DATE_MED,
  DDD: DATE_FULL,
  DDDD: DATE_HUGE,
  t: TIME_SIMPLE,
  tt: TIME_WITH_SECONDS,
  ttt: TIME_WITH_SHORT_OFFSET,
  tttt: TIME_WITH_LONG_OFFSET,
  T: TIME_24_SIMPLE,
  TT: TIME_24_WITH_SECONDS,
  TTT: TIME_24_WITH_SHORT_OFFSET,
  TTTT: TIME_24_WITH_LONG_OFFSET,
  f: DATETIME_SHORT,
  ff: DATETIME_MED,
  fff: DATETIME_FULL,
  ffff: DATETIME_HUGE,
  F: DATETIME_SHORT_WITH_SECONDS,
  FF: DATETIME_MED_WITH_SECONDS,
  FFF: DATETIME_FULL_WITH_SECONDS,
  FFFF: DATETIME_HUGE_WITH_SECONDS
};
class Formatter {
  static create(locale, opts = {}) {
    return new Formatter(locale, opts);
  }
  static parseFormat(fmt) {
    let current = null, currentFull = "", bracketed = false;
    const splits = [];
    for (let i2 = 0; i2 < fmt.length; i2++) {
      const c2 = fmt.charAt(i2);
      if (c2 === "'") {
        if (currentFull.length > 0) {
          splits.push({ literal: bracketed, val: currentFull });
        }
        current = null;
        currentFull = "";
        bracketed = !bracketed;
      } else if (bracketed) {
        currentFull += c2;
      } else if (c2 === current) {
        currentFull += c2;
      } else {
        if (currentFull.length > 0) {
          splits.push({ literal: false, val: currentFull });
        }
        currentFull = c2;
        current = c2;
      }
    }
    if (currentFull.length > 0) {
      splits.push({ literal: bracketed, val: currentFull });
    }
    return splits;
  }
  static macroTokenToFormatOpts(token) {
    return macroTokenToFormatOpts[token];
  }
  constructor(locale, formatOpts) {
    this.opts = formatOpts;
    this.loc = locale;
    this.systemLoc = null;
  }
  formatWithSystemDefault(dt, opts) {
    if (this.systemLoc === null) {
      this.systemLoc = this.loc.redefaultToSystem();
    }
    const df = this.systemLoc.dtFormatter(dt, __spreadValues(__spreadValues({}, this.opts), opts));
    return df.format();
  }
  formatDateTime(dt, opts = {}) {
    const df = this.loc.dtFormatter(dt, __spreadValues(__spreadValues({}, this.opts), opts));
    return df.format();
  }
  formatDateTimeParts(dt, opts = {}) {
    const df = this.loc.dtFormatter(dt, __spreadValues(__spreadValues({}, this.opts), opts));
    return df.formatToParts();
  }
  resolvedOptions(dt, opts = {}) {
    const df = this.loc.dtFormatter(dt, __spreadValues(__spreadValues({}, this.opts), opts));
    return df.resolvedOptions();
  }
  num(n2, p = 0) {
    if (this.opts.forceSimple) {
      return padStart(n2, p);
    }
    const opts = __spreadValues({}, this.opts);
    if (p > 0) {
      opts.padTo = p;
    }
    return this.loc.numberFormatter(opts).format(n2);
  }
  formatDateTimeFromString(dt, fmt) {
    const knownEnglish = this.loc.listingMode() === "en", useDateTimeFormatter = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory", string = (opts, extract) => this.loc.extract(dt, opts, extract), formatOffset2 = (opts) => {
      if (dt.isOffsetFixed && dt.offset === 0 && opts.allowZ) {
        return "Z";
      }
      return dt.isValid ? dt.zone.formatOffset(dt.ts, opts.format) : "";
    }, meridiem = () => knownEnglish ? meridiemForDateTime(dt) : string({ hour: "numeric", hourCycle: "h12" }, "dayperiod"), month = (length, standalone) => knownEnglish ? monthForDateTime(dt, length) : string(standalone ? { month: length } : { month: length, day: "numeric" }, "month"), weekday = (length, standalone) => knownEnglish ? weekdayForDateTime(dt, length) : string(standalone ? { weekday: length } : { weekday: length, month: "long", day: "numeric" }, "weekday"), maybeMacro = (token) => {
      const formatOpts = Formatter.macroTokenToFormatOpts(token);
      if (formatOpts) {
        return this.formatWithSystemDefault(dt, formatOpts);
      } else {
        return token;
      }
    }, era = (length) => knownEnglish ? eraForDateTime(dt, length) : string({ era: length }, "era"), tokenToString = (token) => {
      switch (token) {
        case "S":
          return this.num(dt.millisecond);
        case "u":
        case "SSS":
          return this.num(dt.millisecond, 3);
        case "s":
          return this.num(dt.second);
        case "ss":
          return this.num(dt.second, 2);
        case "uu":
          return this.num(Math.floor(dt.millisecond / 10), 2);
        case "uuu":
          return this.num(Math.floor(dt.millisecond / 100));
        case "m":
          return this.num(dt.minute);
        case "mm":
          return this.num(dt.minute, 2);
        case "h":
          return this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12);
        case "hh":
          return this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12, 2);
        case "H":
          return this.num(dt.hour);
        case "HH":
          return this.num(dt.hour, 2);
        case "Z":
          return formatOffset2({ format: "narrow", allowZ: this.opts.allowZ });
        case "ZZ":
          return formatOffset2({ format: "short", allowZ: this.opts.allowZ });
        case "ZZZ":
          return formatOffset2({ format: "techie", allowZ: this.opts.allowZ });
        case "ZZZZ":
          return dt.zone.offsetName(dt.ts, { format: "short", locale: this.loc.locale });
        case "ZZZZZ":
          return dt.zone.offsetName(dt.ts, { format: "long", locale: this.loc.locale });
        case "z":
          return dt.zoneName;
        case "a":
          return meridiem();
        case "d":
          return useDateTimeFormatter ? string({ day: "numeric" }, "day") : this.num(dt.day);
        case "dd":
          return useDateTimeFormatter ? string({ day: "2-digit" }, "day") : this.num(dt.day, 2);
        case "c":
          return this.num(dt.weekday);
        case "ccc":
          return weekday("short", true);
        case "cccc":
          return weekday("long", true);
        case "ccccc":
          return weekday("narrow", true);
        case "E":
          return this.num(dt.weekday);
        case "EEE":
          return weekday("short", false);
        case "EEEE":
          return weekday("long", false);
        case "EEEEE":
          return weekday("narrow", false);
        case "L":
          return useDateTimeFormatter ? string({ month: "numeric", day: "numeric" }, "month") : this.num(dt.month);
        case "LL":
          return useDateTimeFormatter ? string({ month: "2-digit", day: "numeric" }, "month") : this.num(dt.month, 2);
        case "LLL":
          return month("short", true);
        case "LLLL":
          return month("long", true);
        case "LLLLL":
          return month("narrow", true);
        case "M":
          return useDateTimeFormatter ? string({ month: "numeric" }, "month") : this.num(dt.month);
        case "MM":
          return useDateTimeFormatter ? string({ month: "2-digit" }, "month") : this.num(dt.month, 2);
        case "MMM":
          return month("short", false);
        case "MMMM":
          return month("long", false);
        case "MMMMM":
          return month("narrow", false);
        case "y":
          return useDateTimeFormatter ? string({ year: "numeric" }, "year") : this.num(dt.year);
        case "yy":
          return useDateTimeFormatter ? string({ year: "2-digit" }, "year") : this.num(dt.year.toString().slice(-2), 2);
        case "yyyy":
          return useDateTimeFormatter ? string({ year: "numeric" }, "year") : this.num(dt.year, 4);
        case "yyyyyy":
          return useDateTimeFormatter ? string({ year: "numeric" }, "year") : this.num(dt.year, 6);
        case "G":
          return era("short");
        case "GG":
          return era("long");
        case "GGGGG":
          return era("narrow");
        case "kk":
          return this.num(dt.weekYear.toString().slice(-2), 2);
        case "kkkk":
          return this.num(dt.weekYear, 4);
        case "W":
          return this.num(dt.weekNumber);
        case "WW":
          return this.num(dt.weekNumber, 2);
        case "o":
          return this.num(dt.ordinal);
        case "ooo":
          return this.num(dt.ordinal, 3);
        case "q":
          return this.num(dt.quarter);
        case "qq":
          return this.num(dt.quarter, 2);
        case "X":
          return this.num(Math.floor(dt.ts / 1e3));
        case "x":
          return this.num(dt.ts);
        default:
          return maybeMacro(token);
      }
    };
    return stringifyTokens(Formatter.parseFormat(fmt), tokenToString);
  }
  formatDurationFromString(dur, fmt) {
    const tokenToField = (token) => {
      switch (token[0]) {
        case "S":
          return "millisecond";
        case "s":
          return "second";
        case "m":
          return "minute";
        case "h":
          return "hour";
        case "d":
          return "day";
        case "w":
          return "week";
        case "M":
          return "month";
        case "y":
          return "year";
        default:
          return null;
      }
    }, tokenToString = (lildur) => (token) => {
      const mapped = tokenToField(token);
      if (mapped) {
        return this.num(lildur.get(mapped), token.length);
      } else {
        return token;
      }
    }, tokens = Formatter.parseFormat(fmt), realTokens = tokens.reduce((found, { literal, val }) => literal ? found : found.concat(val), []), collapsed = dur.shiftTo(...realTokens.map(tokenToField).filter((t) => t));
    return stringifyTokens(tokens, tokenToString(collapsed));
  }
}
class Invalid {
  constructor(reason, explanation) {
    this.reason = reason;
    this.explanation = explanation;
  }
  toMessage() {
    if (this.explanation) {
      return `${this.reason}: ${this.explanation}`;
    } else {
      return this.reason;
    }
  }
}
class Zone {
  get type() {
    throw new ZoneIsAbstractError();
  }
  get name() {
    throw new ZoneIsAbstractError();
  }
  get isUniversal() {
    throw new ZoneIsAbstractError();
  }
  offsetName(ts, opts) {
    throw new ZoneIsAbstractError();
  }
  formatOffset(ts, format) {
    throw new ZoneIsAbstractError();
  }
  offset(ts) {
    throw new ZoneIsAbstractError();
  }
  equals(otherZone) {
    throw new ZoneIsAbstractError();
  }
  get isValid() {
    throw new ZoneIsAbstractError();
  }
}
let singleton$1 = null;
class SystemZone extends Zone {
  static get instance() {
    if (singleton$1 === null) {
      singleton$1 = new SystemZone();
    }
    return singleton$1;
  }
  get type() {
    return "system";
  }
  get name() {
    return new Intl.DateTimeFormat().resolvedOptions().timeZone;
  }
  get isUniversal() {
    return false;
  }
  offsetName(ts, { format, locale }) {
    return parseZoneInfo(ts, format, locale);
  }
  formatOffset(ts, format) {
    return formatOffset(this.offset(ts), format);
  }
  offset(ts) {
    return -new Date(ts).getTimezoneOffset();
  }
  equals(otherZone) {
    return otherZone.type === "system";
  }
  get isValid() {
    return true;
  }
}
let dtfCache = {};
function makeDTF(zone) {
  if (!dtfCache[zone]) {
    dtfCache[zone] = new Intl.DateTimeFormat("en-US", {
      hour12: false,
      timeZone: zone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      era: "short"
    });
  }
  return dtfCache[zone];
}
const typeToPos = {
  year: 0,
  month: 1,
  day: 2,
  era: 3,
  hour: 4,
  minute: 5,
  second: 6
};
function hackyOffset(dtf, date) {
  const formatted = dtf.format(date).replace(/\u200E/g, ""), parsed = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(formatted), [, fMonth, fDay, fYear, fadOrBc, fHour, fMinute, fSecond] = parsed;
  return [fYear, fMonth, fDay, fadOrBc, fHour, fMinute, fSecond];
}
function partsOffset(dtf, date) {
  const formatted = dtf.formatToParts(date);
  const filled = [];
  for (let i2 = 0; i2 < formatted.length; i2++) {
    const { type, value } = formatted[i2];
    const pos = typeToPos[type];
    if (type === "era") {
      filled[pos] = value;
    } else if (!isUndefined(pos)) {
      filled[pos] = parseInt(value, 10);
    }
  }
  return filled;
}
let ianaZoneCache = {};
class IANAZone extends Zone {
  static create(name) {
    if (!ianaZoneCache[name]) {
      ianaZoneCache[name] = new IANAZone(name);
    }
    return ianaZoneCache[name];
  }
  static resetCache() {
    ianaZoneCache = {};
    dtfCache = {};
  }
  static isValidSpecifier(s2) {
    return this.isValidZone(s2);
  }
  static isValidZone(zone) {
    if (!zone) {
      return false;
    }
    try {
      new Intl.DateTimeFormat("en-US", { timeZone: zone }).format();
      return true;
    } catch (e) {
      return false;
    }
  }
  constructor(name) {
    super();
    this.zoneName = name;
    this.valid = IANAZone.isValidZone(name);
  }
  get type() {
    return "iana";
  }
  get name() {
    return this.zoneName;
  }
  get isUniversal() {
    return false;
  }
  offsetName(ts, { format, locale }) {
    return parseZoneInfo(ts, format, locale, this.name);
  }
  formatOffset(ts, format) {
    return formatOffset(this.offset(ts), format);
  }
  offset(ts) {
    const date = new Date(ts);
    if (isNaN(date))
      return NaN;
    const dtf = makeDTF(this.name);
    let [year, month, day, adOrBc, hour, minute, second] = dtf.formatToParts ? partsOffset(dtf, date) : hackyOffset(dtf, date);
    if (adOrBc === "BC") {
      year = -Math.abs(year) + 1;
    }
    const adjustedHour = hour === 24 ? 0 : hour;
    const asUTC = objToLocalTS({
      year,
      month,
      day,
      hour: adjustedHour,
      minute,
      second,
      millisecond: 0
    });
    let asTS = +date;
    const over = asTS % 1e3;
    asTS -= over >= 0 ? over : 1e3 + over;
    return (asUTC - asTS) / (60 * 1e3);
  }
  equals(otherZone) {
    return otherZone.type === "iana" && otherZone.name === this.name;
  }
  get isValid() {
    return this.valid;
  }
}
let singleton = null;
class FixedOffsetZone extends Zone {
  static get utcInstance() {
    if (singleton === null) {
      singleton = new FixedOffsetZone(0);
    }
    return singleton;
  }
  static instance(offset2) {
    return offset2 === 0 ? FixedOffsetZone.utcInstance : new FixedOffsetZone(offset2);
  }
  static parseSpecifier(s2) {
    if (s2) {
      const r = s2.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
      if (r) {
        return new FixedOffsetZone(signedOffset(r[1], r[2]));
      }
    }
    return null;
  }
  constructor(offset2) {
    super();
    this.fixed = offset2;
  }
  get type() {
    return "fixed";
  }
  get name() {
    return this.fixed === 0 ? "UTC" : `UTC${formatOffset(this.fixed, "narrow")}`;
  }
  offsetName() {
    return this.name;
  }
  formatOffset(ts, format) {
    return formatOffset(this.fixed, format);
  }
  get isUniversal() {
    return true;
  }
  offset() {
    return this.fixed;
  }
  equals(otherZone) {
    return otherZone.type === "fixed" && otherZone.fixed === this.fixed;
  }
  get isValid() {
    return true;
  }
}
class InvalidZone extends Zone {
  constructor(zoneName) {
    super();
    this.zoneName = zoneName;
  }
  get type() {
    return "invalid";
  }
  get name() {
    return this.zoneName;
  }
  get isUniversal() {
    return false;
  }
  offsetName() {
    return null;
  }
  formatOffset() {
    return "";
  }
  offset() {
    return NaN;
  }
  equals() {
    return false;
  }
  get isValid() {
    return false;
  }
}
function normalizeZone(input, defaultZone2) {
  if (isUndefined(input) || input === null) {
    return defaultZone2;
  } else if (input instanceof Zone) {
    return input;
  } else if (isString(input)) {
    const lowered = input.toLowerCase();
    if (lowered === "local" || lowered === "system")
      return defaultZone2;
    else if (lowered === "utc" || lowered === "gmt")
      return FixedOffsetZone.utcInstance;
    else
      return FixedOffsetZone.parseSpecifier(lowered) || IANAZone.create(input);
  } else if (isNumber(input)) {
    return FixedOffsetZone.instance(input);
  } else if (typeof input === "object" && input.offset && typeof input.offset === "number") {
    return input;
  } else {
    return new InvalidZone(input);
  }
}
let now = () => Date.now(), defaultZone = "system", defaultLocale = null, defaultNumberingSystem = null, defaultOutputCalendar = null, throwOnInvalid;
class Settings {
  static get now() {
    return now;
  }
  static set now(n2) {
    now = n2;
  }
  static set defaultZone(zone) {
    defaultZone = zone;
  }
  static get defaultZone() {
    return normalizeZone(defaultZone, SystemZone.instance);
  }
  static get defaultLocale() {
    return defaultLocale;
  }
  static set defaultLocale(locale) {
    defaultLocale = locale;
  }
  static get defaultNumberingSystem() {
    return defaultNumberingSystem;
  }
  static set defaultNumberingSystem(numberingSystem) {
    defaultNumberingSystem = numberingSystem;
  }
  static get defaultOutputCalendar() {
    return defaultOutputCalendar;
  }
  static set defaultOutputCalendar(outputCalendar) {
    defaultOutputCalendar = outputCalendar;
  }
  static get throwOnInvalid() {
    return throwOnInvalid;
  }
  static set throwOnInvalid(t) {
    throwOnInvalid = t;
  }
  static resetCaches() {
    Locale.resetCache();
    IANAZone.resetCache();
  }
}
let intlLFCache = {};
function getCachedLF(locString, opts = {}) {
  const key = JSON.stringify([locString, opts]);
  let dtf = intlLFCache[key];
  if (!dtf) {
    dtf = new Intl.ListFormat(locString, opts);
    intlLFCache[key] = dtf;
  }
  return dtf;
}
let intlDTCache = {};
function getCachedDTF(locString, opts = {}) {
  const key = JSON.stringify([locString, opts]);
  let dtf = intlDTCache[key];
  if (!dtf) {
    dtf = new Intl.DateTimeFormat(locString, opts);
    intlDTCache[key] = dtf;
  }
  return dtf;
}
let intlNumCache = {};
function getCachedINF(locString, opts = {}) {
  const key = JSON.stringify([locString, opts]);
  let inf = intlNumCache[key];
  if (!inf) {
    inf = new Intl.NumberFormat(locString, opts);
    intlNumCache[key] = inf;
  }
  return inf;
}
let intlRelCache = {};
function getCachedRTF(locString, opts = {}) {
  const _a = opts, { base } = _a, cacheKeyOpts = __objRest(_a, ["base"]);
  const key = JSON.stringify([locString, cacheKeyOpts]);
  let inf = intlRelCache[key];
  if (!inf) {
    inf = new Intl.RelativeTimeFormat(locString, opts);
    intlRelCache[key] = inf;
  }
  return inf;
}
let sysLocaleCache = null;
function systemLocale() {
  if (sysLocaleCache) {
    return sysLocaleCache;
  } else {
    sysLocaleCache = new Intl.DateTimeFormat().resolvedOptions().locale;
    return sysLocaleCache;
  }
}
function parseLocaleString(localeStr) {
  const uIndex = localeStr.indexOf("-u-");
  if (uIndex === -1) {
    return [localeStr];
  } else {
    let options;
    const smaller = localeStr.substring(0, uIndex);
    try {
      options = getCachedDTF(localeStr).resolvedOptions();
    } catch (e) {
      options = getCachedDTF(smaller).resolvedOptions();
    }
    const { numberingSystem, calendar } = options;
    return [smaller, numberingSystem, calendar];
  }
}
function intlConfigString(localeStr, numberingSystem, outputCalendar) {
  if (outputCalendar || numberingSystem) {
    localeStr += "-u";
    if (outputCalendar) {
      localeStr += `-ca-${outputCalendar}`;
    }
    if (numberingSystem) {
      localeStr += `-nu-${numberingSystem}`;
    }
    return localeStr;
  } else {
    return localeStr;
  }
}
function mapMonths(f) {
  const ms = [];
  for (let i2 = 1; i2 <= 12; i2++) {
    const dt = DateTime.utc(2016, i2, 1);
    ms.push(f(dt));
  }
  return ms;
}
function mapWeekdays(f) {
  const ms = [];
  for (let i2 = 1; i2 <= 7; i2++) {
    const dt = DateTime.utc(2016, 11, 13 + i2);
    ms.push(f(dt));
  }
  return ms;
}
function listStuff(loc, length, defaultOK, englishFn, intlFn) {
  const mode = loc.listingMode(defaultOK);
  if (mode === "error") {
    return null;
  } else if (mode === "en") {
    return englishFn(length);
  } else {
    return intlFn(length);
  }
}
function supportsFastNumbers(loc) {
  if (loc.numberingSystem && loc.numberingSystem !== "latn") {
    return false;
  } else {
    return loc.numberingSystem === "latn" || !loc.locale || loc.locale.startsWith("en") || new Intl.DateTimeFormat(loc.intl).resolvedOptions().numberingSystem === "latn";
  }
}
class PolyNumberFormatter {
  constructor(intl, forceSimple, opts) {
    this.padTo = opts.padTo || 0;
    this.floor = opts.floor || false;
    const _a = opts, { padTo, floor } = _a, otherOpts = __objRest(_a, ["padTo", "floor"]);
    if (!forceSimple || Object.keys(otherOpts).length > 0) {
      const intlOpts = __spreadValues({ useGrouping: false }, opts);
      if (opts.padTo > 0)
        intlOpts.minimumIntegerDigits = opts.padTo;
      this.inf = getCachedINF(intl, intlOpts);
    }
  }
  format(i2) {
    if (this.inf) {
      const fixed = this.floor ? Math.floor(i2) : i2;
      return this.inf.format(fixed);
    } else {
      const fixed = this.floor ? Math.floor(i2) : roundTo(i2, 3);
      return padStart(fixed, this.padTo);
    }
  }
}
class PolyDateFormatter {
  constructor(dt, intl, opts) {
    this.opts = opts;
    let z;
    if (dt.zone.isUniversal) {
      const gmtOffset = -1 * (dt.offset / 60);
      const offsetZ = gmtOffset >= 0 ? `Etc/GMT+${gmtOffset}` : `Etc/GMT${gmtOffset}`;
      if (dt.offset !== 0 && IANAZone.create(offsetZ).valid) {
        z = offsetZ;
        this.dt = dt;
      } else {
        z = "UTC";
        if (opts.timeZoneName) {
          this.dt = dt;
        } else {
          this.dt = dt.offset === 0 ? dt : DateTime.fromMillis(dt.ts + dt.offset * 60 * 1e3);
        }
      }
    } else if (dt.zone.type === "system") {
      this.dt = dt;
    } else {
      this.dt = dt;
      z = dt.zone.name;
    }
    const intlOpts = __spreadValues({}, this.opts);
    if (z) {
      intlOpts.timeZone = z;
    }
    this.dtf = getCachedDTF(intl, intlOpts);
  }
  format() {
    return this.dtf.format(this.dt.toJSDate());
  }
  formatToParts() {
    return this.dtf.formatToParts(this.dt.toJSDate());
  }
  resolvedOptions() {
    return this.dtf.resolvedOptions();
  }
}
class PolyRelFormatter {
  constructor(intl, isEnglish, opts) {
    this.opts = __spreadValues({ style: "long" }, opts);
    if (!isEnglish && hasRelative()) {
      this.rtf = getCachedRTF(intl, opts);
    }
  }
  format(count, unit) {
    if (this.rtf) {
      return this.rtf.format(count, unit);
    } else {
      return formatRelativeTime(unit, count, this.opts.numeric, this.opts.style !== "long");
    }
  }
  formatToParts(count, unit) {
    if (this.rtf) {
      return this.rtf.formatToParts(count, unit);
    } else {
      return [];
    }
  }
}
class Locale {
  static fromOpts(opts) {
    return Locale.create(opts.locale, opts.numberingSystem, opts.outputCalendar, opts.defaultToEN);
  }
  static create(locale, numberingSystem, outputCalendar, defaultToEN = false) {
    const specifiedLocale = locale || Settings.defaultLocale;
    const localeR = specifiedLocale || (defaultToEN ? "en-US" : systemLocale());
    const numberingSystemR = numberingSystem || Settings.defaultNumberingSystem;
    const outputCalendarR = outputCalendar || Settings.defaultOutputCalendar;
    return new Locale(localeR, numberingSystemR, outputCalendarR, specifiedLocale);
  }
  static resetCache() {
    sysLocaleCache = null;
    intlDTCache = {};
    intlNumCache = {};
    intlRelCache = {};
  }
  static fromObject({ locale, numberingSystem, outputCalendar } = {}) {
    return Locale.create(locale, numberingSystem, outputCalendar);
  }
  constructor(locale, numbering, outputCalendar, specifiedLocale) {
    const [parsedLocale, parsedNumberingSystem, parsedOutputCalendar] = parseLocaleString(locale);
    this.locale = parsedLocale;
    this.numberingSystem = numbering || parsedNumberingSystem || null;
    this.outputCalendar = outputCalendar || parsedOutputCalendar || null;
    this.intl = intlConfigString(this.locale, this.numberingSystem, this.outputCalendar);
    this.weekdaysCache = { format: {}, standalone: {} };
    this.monthsCache = { format: {}, standalone: {} };
    this.meridiemCache = null;
    this.eraCache = {};
    this.specifiedLocale = specifiedLocale;
    this.fastNumbersCached = null;
  }
  get fastNumbers() {
    if (this.fastNumbersCached == null) {
      this.fastNumbersCached = supportsFastNumbers(this);
    }
    return this.fastNumbersCached;
  }
  listingMode() {
    const isActuallyEn = this.isEnglish();
    const hasNoWeirdness = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");
    return isActuallyEn && hasNoWeirdness ? "en" : "intl";
  }
  clone(alts) {
    if (!alts || Object.getOwnPropertyNames(alts).length === 0) {
      return this;
    } else {
      return Locale.create(alts.locale || this.specifiedLocale, alts.numberingSystem || this.numberingSystem, alts.outputCalendar || this.outputCalendar, alts.defaultToEN || false);
    }
  }
  redefaultToEN(alts = {}) {
    return this.clone(__spreadProps(__spreadValues({}, alts), { defaultToEN: true }));
  }
  redefaultToSystem(alts = {}) {
    return this.clone(__spreadProps(__spreadValues({}, alts), { defaultToEN: false }));
  }
  months(length, format = false, defaultOK = true) {
    return listStuff(this, length, defaultOK, months, () => {
      const intl = format ? { month: length, day: "numeric" } : { month: length }, formatStr = format ? "format" : "standalone";
      if (!this.monthsCache[formatStr][length]) {
        this.monthsCache[formatStr][length] = mapMonths((dt) => this.extract(dt, intl, "month"));
      }
      return this.monthsCache[formatStr][length];
    });
  }
  weekdays(length, format = false, defaultOK = true) {
    return listStuff(this, length, defaultOK, weekdays, () => {
      const intl = format ? { weekday: length, year: "numeric", month: "long", day: "numeric" } : { weekday: length }, formatStr = format ? "format" : "standalone";
      if (!this.weekdaysCache[formatStr][length]) {
        this.weekdaysCache[formatStr][length] = mapWeekdays((dt) => this.extract(dt, intl, "weekday"));
      }
      return this.weekdaysCache[formatStr][length];
    });
  }
  meridiems(defaultOK = true) {
    return listStuff(this, void 0, defaultOK, () => meridiems, () => {
      if (!this.meridiemCache) {
        const intl = { hour: "numeric", hourCycle: "h12" };
        this.meridiemCache = [DateTime.utc(2016, 11, 13, 9), DateTime.utc(2016, 11, 13, 19)].map((dt) => this.extract(dt, intl, "dayperiod"));
      }
      return this.meridiemCache;
    });
  }
  eras(length, defaultOK = true) {
    return listStuff(this, length, defaultOK, eras, () => {
      const intl = { era: length };
      if (!this.eraCache[length]) {
        this.eraCache[length] = [DateTime.utc(-40, 1, 1), DateTime.utc(2017, 1, 1)].map((dt) => this.extract(dt, intl, "era"));
      }
      return this.eraCache[length];
    });
  }
  extract(dt, intlOpts, field) {
    const df = this.dtFormatter(dt, intlOpts), results = df.formatToParts(), matching = results.find((m) => m.type.toLowerCase() === field);
    return matching ? matching.value : null;
  }
  numberFormatter(opts = {}) {
    return new PolyNumberFormatter(this.intl, opts.forceSimple || this.fastNumbers, opts);
  }
  dtFormatter(dt, intlOpts = {}) {
    return new PolyDateFormatter(dt, this.intl, intlOpts);
  }
  relFormatter(opts = {}) {
    return new PolyRelFormatter(this.intl, this.isEnglish(), opts);
  }
  listFormatter(opts = {}) {
    return getCachedLF(this.intl, opts);
  }
  isEnglish() {
    return this.locale === "en" || this.locale.toLowerCase() === "en-us" || new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us");
  }
  equals(other) {
    return this.locale === other.locale && this.numberingSystem === other.numberingSystem && this.outputCalendar === other.outputCalendar;
  }
}
function combineRegexes(...regexes) {
  const full = regexes.reduce((f, r) => f + r.source, "");
  return RegExp(`^${full}$`);
}
function combineExtractors(...extractors) {
  return (m) => extractors.reduce(([mergedVals, mergedZone, cursor], ex) => {
    const [val, zone, next] = ex(m, cursor);
    return [__spreadValues(__spreadValues({}, mergedVals), val), mergedZone || zone, next];
  }, [{}, null, 1]).slice(0, 2);
}
function parse(s2, ...patterns) {
  if (s2 == null) {
    return [null, null];
  }
  for (const [regex2, extractor] of patterns) {
    const m = regex2.exec(s2);
    if (m) {
      return extractor(m);
    }
  }
  return [null, null];
}
function simpleParse(...keys) {
  return (match2, cursor) => {
    const ret = {};
    let i2;
    for (i2 = 0; i2 < keys.length; i2++) {
      ret[keys[i2]] = parseInteger(match2[cursor + i2]);
    }
    return [ret, null, cursor + i2];
  };
}
const offsetRegex = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/, isoTimeBaseRegex = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/, isoTimeRegex = RegExp(`${isoTimeBaseRegex.source}${offsetRegex.source}?`), isoTimeExtensionRegex = RegExp(`(?:T${isoTimeRegex.source})?`), isoYmdRegex = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, isoWeekRegex = /(\d{4})-?W(\d\d)(?:-?(\d))?/, isoOrdinalRegex = /(\d{4})-?(\d{3})/, extractISOWeekData = simpleParse("weekYear", "weekNumber", "weekDay"), extractISOOrdinalData = simpleParse("year", "ordinal"), sqlYmdRegex = /(\d{4})-(\d\d)-(\d\d)/, sqlTimeRegex = RegExp(`${isoTimeBaseRegex.source} ?(?:${offsetRegex.source}|(${ianaRegex.source}))?`), sqlTimeExtensionRegex = RegExp(`(?: ${sqlTimeRegex.source})?`);
function int(match2, pos, fallback) {
  const m = match2[pos];
  return isUndefined(m) ? fallback : parseInteger(m);
}
function extractISOYmd(match2, cursor) {
  const item = {
    year: int(match2, cursor),
    month: int(match2, cursor + 1, 1),
    day: int(match2, cursor + 2, 1)
  };
  return [item, null, cursor + 3];
}
function extractISOTime(match2, cursor) {
  const item = {
    hours: int(match2, cursor, 0),
    minutes: int(match2, cursor + 1, 0),
    seconds: int(match2, cursor + 2, 0),
    milliseconds: parseMillis(match2[cursor + 3])
  };
  return [item, null, cursor + 4];
}
function extractISOOffset(match2, cursor) {
  const local = !match2[cursor] && !match2[cursor + 1], fullOffset = signedOffset(match2[cursor + 1], match2[cursor + 2]), zone = local ? null : FixedOffsetZone.instance(fullOffset);
  return [{}, zone, cursor + 3];
}
function extractIANAZone(match2, cursor) {
  const zone = match2[cursor] ? IANAZone.create(match2[cursor]) : null;
  return [{}, zone, cursor + 1];
}
const isoTimeOnly = RegExp(`^T?${isoTimeBaseRegex.source}$`);
const isoDuration = /^-?P(?:(?:(-?\d{1,9}(?:\.\d{1,9})?)Y)?(?:(-?\d{1,9}(?:\.\d{1,9})?)M)?(?:(-?\d{1,9}(?:\.\d{1,9})?)W)?(?:(-?\d{1,9}(?:\.\d{1,9})?)D)?(?:T(?:(-?\d{1,9}(?:\.\d{1,9})?)H)?(?:(-?\d{1,9}(?:\.\d{1,9})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,9}))?S)?)?)$/;
function extractISODuration(match2) {
  const [s2, yearStr, monthStr, weekStr, dayStr, hourStr, minuteStr, secondStr, millisecondsStr] = match2;
  const hasNegativePrefix = s2[0] === "-";
  const negativeSeconds = secondStr && secondStr[0] === "-";
  const maybeNegate = (num, force = false) => num !== void 0 && (force || num && hasNegativePrefix) ? -num : num;
  return [
    {
      years: maybeNegate(parseFloating(yearStr)),
      months: maybeNegate(parseFloating(monthStr)),
      weeks: maybeNegate(parseFloating(weekStr)),
      days: maybeNegate(parseFloating(dayStr)),
      hours: maybeNegate(parseFloating(hourStr)),
      minutes: maybeNegate(parseFloating(minuteStr)),
      seconds: maybeNegate(parseFloating(secondStr), secondStr === "-0"),
      milliseconds: maybeNegate(parseMillis(millisecondsStr), negativeSeconds)
    }
  ];
}
const obsOffsets = {
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};
function fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
  const result = {
    year: yearStr.length === 2 ? untruncateYear(parseInteger(yearStr)) : parseInteger(yearStr),
    month: monthsShort.indexOf(monthStr) + 1,
    day: parseInteger(dayStr),
    hour: parseInteger(hourStr),
    minute: parseInteger(minuteStr)
  };
  if (secondStr)
    result.second = parseInteger(secondStr);
  if (weekdayStr) {
    result.weekday = weekdayStr.length > 3 ? weekdaysLong.indexOf(weekdayStr) + 1 : weekdaysShort.indexOf(weekdayStr) + 1;
  }
  return result;
}
const rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
function extractRFC2822(match2) {
  const [
    ,
    weekdayStr,
    dayStr,
    monthStr,
    yearStr,
    hourStr,
    minuteStr,
    secondStr,
    obsOffset,
    milOffset,
    offHourStr,
    offMinuteStr
  ] = match2, result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
  let offset2;
  if (obsOffset) {
    offset2 = obsOffsets[obsOffset];
  } else if (milOffset) {
    offset2 = 0;
  } else {
    offset2 = signedOffset(offHourStr, offMinuteStr);
  }
  return [result, new FixedOffsetZone(offset2)];
}
function preprocessRFC2822(s2) {
  return s2.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
}
const rfc1123 = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/, rfc850 = /^(Monday|Tuesday|Wedsday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/, ascii = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
function extractRFC1123Or850(match2) {
  const [, weekdayStr, dayStr, monthStr, yearStr, hourStr, minuteStr, secondStr] = match2, result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
  return [result, FixedOffsetZone.utcInstance];
}
function extractASCII(match2) {
  const [, weekdayStr, monthStr, dayStr, hourStr, minuteStr, secondStr, yearStr] = match2, result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
  return [result, FixedOffsetZone.utcInstance];
}
const isoYmdWithTimeExtensionRegex = combineRegexes(isoYmdRegex, isoTimeExtensionRegex);
const isoWeekWithTimeExtensionRegex = combineRegexes(isoWeekRegex, isoTimeExtensionRegex);
const isoOrdinalWithTimeExtensionRegex = combineRegexes(isoOrdinalRegex, isoTimeExtensionRegex);
const isoTimeCombinedRegex = combineRegexes(isoTimeRegex);
const extractISOYmdTimeAndOffset = combineExtractors(extractISOYmd, extractISOTime, extractISOOffset);
const extractISOWeekTimeAndOffset = combineExtractors(extractISOWeekData, extractISOTime, extractISOOffset);
const extractISOOrdinalDateAndTime = combineExtractors(extractISOOrdinalData, extractISOTime, extractISOOffset);
const extractISOTimeAndOffset = combineExtractors(extractISOTime, extractISOOffset);
function parseISODate(s2) {
  return parse(s2, [isoYmdWithTimeExtensionRegex, extractISOYmdTimeAndOffset], [isoWeekWithTimeExtensionRegex, extractISOWeekTimeAndOffset], [isoOrdinalWithTimeExtensionRegex, extractISOOrdinalDateAndTime], [isoTimeCombinedRegex, extractISOTimeAndOffset]);
}
function parseRFC2822Date(s2) {
  return parse(preprocessRFC2822(s2), [rfc2822, extractRFC2822]);
}
function parseHTTPDate(s2) {
  return parse(s2, [rfc1123, extractRFC1123Or850], [rfc850, extractRFC1123Or850], [ascii, extractASCII]);
}
function parseISODuration(s2) {
  return parse(s2, [isoDuration, extractISODuration]);
}
const extractISOTimeOnly = combineExtractors(extractISOTime);
function parseISOTimeOnly(s2) {
  return parse(s2, [isoTimeOnly, extractISOTimeOnly]);
}
const sqlYmdWithTimeExtensionRegex = combineRegexes(sqlYmdRegex, sqlTimeExtensionRegex);
const sqlTimeCombinedRegex = combineRegexes(sqlTimeRegex);
const extractISOYmdTimeOffsetAndIANAZone = combineExtractors(extractISOYmd, extractISOTime, extractISOOffset, extractIANAZone);
const extractISOTimeOffsetAndIANAZone = combineExtractors(extractISOTime, extractISOOffset, extractIANAZone);
function parseSQL(s2) {
  return parse(s2, [sqlYmdWithTimeExtensionRegex, extractISOYmdTimeOffsetAndIANAZone], [sqlTimeCombinedRegex, extractISOTimeOffsetAndIANAZone]);
}
const INVALID$2 = "Invalid Duration";
const lowOrderMatrix = {
  weeks: {
    days: 7,
    hours: 7 * 24,
    minutes: 7 * 24 * 60,
    seconds: 7 * 24 * 60 * 60,
    milliseconds: 7 * 24 * 60 * 60 * 1e3
  },
  days: {
    hours: 24,
    minutes: 24 * 60,
    seconds: 24 * 60 * 60,
    milliseconds: 24 * 60 * 60 * 1e3
  },
  hours: { minutes: 60, seconds: 60 * 60, milliseconds: 60 * 60 * 1e3 },
  minutes: { seconds: 60, milliseconds: 60 * 1e3 },
  seconds: { milliseconds: 1e3 }
}, casualMatrix = __spreadValues({
  years: {
    quarters: 4,
    months: 12,
    weeks: 52,
    days: 365,
    hours: 365 * 24,
    minutes: 365 * 24 * 60,
    seconds: 365 * 24 * 60 * 60,
    milliseconds: 365 * 24 * 60 * 60 * 1e3
  },
  quarters: {
    months: 3,
    weeks: 13,
    days: 91,
    hours: 91 * 24,
    minutes: 91 * 24 * 60,
    seconds: 91 * 24 * 60 * 60,
    milliseconds: 91 * 24 * 60 * 60 * 1e3
  },
  months: {
    weeks: 4,
    days: 30,
    hours: 30 * 24,
    minutes: 30 * 24 * 60,
    seconds: 30 * 24 * 60 * 60,
    milliseconds: 30 * 24 * 60 * 60 * 1e3
  }
}, lowOrderMatrix), daysInYearAccurate = 146097 / 400, daysInMonthAccurate = 146097 / 4800, accurateMatrix = __spreadValues({
  years: {
    quarters: 4,
    months: 12,
    weeks: daysInYearAccurate / 7,
    days: daysInYearAccurate,
    hours: daysInYearAccurate * 24,
    minutes: daysInYearAccurate * 24 * 60,
    seconds: daysInYearAccurate * 24 * 60 * 60,
    milliseconds: daysInYearAccurate * 24 * 60 * 60 * 1e3
  },
  quarters: {
    months: 3,
    weeks: daysInYearAccurate / 28,
    days: daysInYearAccurate / 4,
    hours: daysInYearAccurate * 24 / 4,
    minutes: daysInYearAccurate * 24 * 60 / 4,
    seconds: daysInYearAccurate * 24 * 60 * 60 / 4,
    milliseconds: daysInYearAccurate * 24 * 60 * 60 * 1e3 / 4
  },
  months: {
    weeks: daysInMonthAccurate / 7,
    days: daysInMonthAccurate,
    hours: daysInMonthAccurate * 24,
    minutes: daysInMonthAccurate * 24 * 60,
    seconds: daysInMonthAccurate * 24 * 60 * 60,
    milliseconds: daysInMonthAccurate * 24 * 60 * 60 * 1e3
  }
}, lowOrderMatrix);
const orderedUnits$1 = [
  "years",
  "quarters",
  "months",
  "weeks",
  "days",
  "hours",
  "minutes",
  "seconds",
  "milliseconds"
];
const reverseUnits = orderedUnits$1.slice(0).reverse();
function clone$1(dur, alts, clear = false) {
  const conf = {
    values: clear ? alts.values : __spreadValues(__spreadValues({}, dur.values), alts.values || {}),
    loc: dur.loc.clone(alts.loc),
    conversionAccuracy: alts.conversionAccuracy || dur.conversionAccuracy
  };
  return new Duration(conf);
}
function antiTrunc(n2) {
  return n2 < 0 ? Math.floor(n2) : Math.ceil(n2);
}
function convert(matrix2, fromMap, fromUnit, toMap, toUnit) {
  const conv = matrix2[toUnit][fromUnit], raw = fromMap[fromUnit] / conv, sameSign = Math.sign(raw) === Math.sign(toMap[toUnit]), added = !sameSign && toMap[toUnit] !== 0 && Math.abs(raw) <= 1 ? antiTrunc(raw) : Math.trunc(raw);
  toMap[toUnit] += added;
  fromMap[fromUnit] -= added * conv;
}
function normalizeValues(matrix2, vals) {
  reverseUnits.reduce((previous, current) => {
    if (!isUndefined(vals[current])) {
      if (previous) {
        convert(matrix2, vals, previous, vals, current);
      }
      return current;
    } else {
      return previous;
    }
  }, null);
}
class Duration {
  constructor(config) {
    const accurate = config.conversionAccuracy === "longterm" || false;
    this.values = config.values;
    this.loc = config.loc || Locale.create();
    this.conversionAccuracy = accurate ? "longterm" : "casual";
    this.invalid = config.invalid || null;
    this.matrix = accurate ? accurateMatrix : casualMatrix;
    this.isLuxonDuration = true;
  }
  static fromMillis(count, opts) {
    return Duration.fromObject({ milliseconds: count }, opts);
  }
  static fromObject(obj, opts = {}) {
    if (obj == null || typeof obj !== "object") {
      throw new InvalidArgumentError(`Duration.fromObject: argument expected to be an object, got ${obj === null ? "null" : typeof obj}`);
    }
    return new Duration({
      values: normalizeObject(obj, Duration.normalizeUnit),
      loc: Locale.fromObject(opts),
      conversionAccuracy: opts.conversionAccuracy
    });
  }
  static fromDurationLike(durationLike) {
    if (isNumber(durationLike)) {
      return Duration.fromMillis(durationLike);
    } else if (Duration.isDuration(durationLike)) {
      return durationLike;
    } else if (typeof durationLike === "object") {
      return Duration.fromObject(durationLike);
    } else {
      throw new InvalidArgumentError(`Unknown duration argument ${durationLike} of type ${typeof durationLike}`);
    }
  }
  static fromISO(text, opts) {
    const [parsed] = parseISODuration(text);
    if (parsed) {
      return Duration.fromObject(parsed, opts);
    } else {
      return Duration.invalid("unparsable", `the input "${text}" can't be parsed as ISO 8601`);
    }
  }
  static fromISOTime(text, opts) {
    const [parsed] = parseISOTimeOnly(text);
    if (parsed) {
      return Duration.fromObject(parsed, opts);
    } else {
      return Duration.invalid("unparsable", `the input "${text}" can't be parsed as ISO 8601`);
    }
  }
  static invalid(reason, explanation = null) {
    if (!reason) {
      throw new InvalidArgumentError("need to specify a reason the Duration is invalid");
    }
    const invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);
    if (Settings.throwOnInvalid) {
      throw new InvalidDurationError(invalid);
    } else {
      return new Duration({ invalid });
    }
  }
  static normalizeUnit(unit) {
    const normalized = {
      year: "years",
      years: "years",
      quarter: "quarters",
      quarters: "quarters",
      month: "months",
      months: "months",
      week: "weeks",
      weeks: "weeks",
      day: "days",
      days: "days",
      hour: "hours",
      hours: "hours",
      minute: "minutes",
      minutes: "minutes",
      second: "seconds",
      seconds: "seconds",
      millisecond: "milliseconds",
      milliseconds: "milliseconds"
    }[unit ? unit.toLowerCase() : unit];
    if (!normalized)
      throw new InvalidUnitError(unit);
    return normalized;
  }
  static isDuration(o) {
    return o && o.isLuxonDuration || false;
  }
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }
  toFormat(fmt, opts = {}) {
    const fmtOpts = __spreadProps(__spreadValues({}, opts), {
      floor: opts.round !== false && opts.floor !== false
    });
    return this.isValid ? Formatter.create(this.loc, fmtOpts).formatDurationFromString(this, fmt) : INVALID$2;
  }
  toHuman(opts = {}) {
    const l2 = orderedUnits$1.map((unit) => {
      const val = this.values[unit];
      if (isUndefined(val)) {
        return null;
      }
      return this.loc.numberFormatter(__spreadProps(__spreadValues({ style: "unit", unitDisplay: "long" }, opts), { unit: unit.slice(0, -1) })).format(val);
    }).filter((n2) => n2);
    return this.loc.listFormatter(__spreadValues({ type: "conjunction", style: opts.listStyle || "narrow" }, opts)).format(l2);
  }
  toObject() {
    if (!this.isValid)
      return {};
    return __spreadValues({}, this.values);
  }
  toISO() {
    if (!this.isValid)
      return null;
    let s2 = "P";
    if (this.years !== 0)
      s2 += this.years + "Y";
    if (this.months !== 0 || this.quarters !== 0)
      s2 += this.months + this.quarters * 3 + "M";
    if (this.weeks !== 0)
      s2 += this.weeks + "W";
    if (this.days !== 0)
      s2 += this.days + "D";
    if (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0)
      s2 += "T";
    if (this.hours !== 0)
      s2 += this.hours + "H";
    if (this.minutes !== 0)
      s2 += this.minutes + "M";
    if (this.seconds !== 0 || this.milliseconds !== 0)
      s2 += roundTo(this.seconds + this.milliseconds / 1e3, 3) + "S";
    if (s2 === "P")
      s2 += "T0S";
    return s2;
  }
  toISOTime(opts = {}) {
    if (!this.isValid)
      return null;
    const millis = this.toMillis();
    if (millis < 0 || millis >= 864e5)
      return null;
    opts = __spreadValues({
      suppressMilliseconds: false,
      suppressSeconds: false,
      includePrefix: false,
      format: "extended"
    }, opts);
    const value = this.shiftTo("hours", "minutes", "seconds", "milliseconds");
    let fmt = opts.format === "basic" ? "hhmm" : "hh:mm";
    if (!opts.suppressSeconds || value.seconds !== 0 || value.milliseconds !== 0) {
      fmt += opts.format === "basic" ? "ss" : ":ss";
      if (!opts.suppressMilliseconds || value.milliseconds !== 0) {
        fmt += ".SSS";
      }
    }
    let str = value.toFormat(fmt);
    if (opts.includePrefix) {
      str = "T" + str;
    }
    return str;
  }
  toJSON() {
    return this.toISO();
  }
  toString() {
    return this.toISO();
  }
  toMillis() {
    return this.as("milliseconds");
  }
  valueOf() {
    return this.toMillis();
  }
  plus(duration) {
    if (!this.isValid)
      return this;
    const dur = Duration.fromDurationLike(duration), result = {};
    for (const k of orderedUnits$1) {
      if (hasOwnProperty(dur.values, k) || hasOwnProperty(this.values, k)) {
        result[k] = dur.get(k) + this.get(k);
      }
    }
    return clone$1(this, { values: result }, true);
  }
  minus(duration) {
    if (!this.isValid)
      return this;
    const dur = Duration.fromDurationLike(duration);
    return this.plus(dur.negate());
  }
  mapUnits(fn) {
    if (!this.isValid)
      return this;
    const result = {};
    for (const k of Object.keys(this.values)) {
      result[k] = asNumber(fn(this.values[k], k));
    }
    return clone$1(this, { values: result }, true);
  }
  get(unit) {
    return this[Duration.normalizeUnit(unit)];
  }
  set(values) {
    if (!this.isValid)
      return this;
    const mixed = __spreadValues(__spreadValues({}, this.values), normalizeObject(values, Duration.normalizeUnit));
    return clone$1(this, { values: mixed });
  }
  reconfigure({ locale, numberingSystem, conversionAccuracy } = {}) {
    const loc = this.loc.clone({ locale, numberingSystem }), opts = { loc };
    if (conversionAccuracy) {
      opts.conversionAccuracy = conversionAccuracy;
    }
    return clone$1(this, opts);
  }
  as(unit) {
    return this.isValid ? this.shiftTo(unit).get(unit) : NaN;
  }
  normalize() {
    if (!this.isValid)
      return this;
    const vals = this.toObject();
    normalizeValues(this.matrix, vals);
    return clone$1(this, { values: vals }, true);
  }
  shiftTo(...units) {
    if (!this.isValid)
      return this;
    if (units.length === 0) {
      return this;
    }
    units = units.map((u2) => Duration.normalizeUnit(u2));
    const built = {}, accumulated = {}, vals = this.toObject();
    let lastUnit;
    for (const k of orderedUnits$1) {
      if (units.indexOf(k) >= 0) {
        lastUnit = k;
        let own = 0;
        for (const ak in accumulated) {
          own += this.matrix[ak][k] * accumulated[ak];
          accumulated[ak] = 0;
        }
        if (isNumber(vals[k])) {
          own += vals[k];
        }
        const i2 = Math.trunc(own);
        built[k] = i2;
        accumulated[k] = (own * 1e3 - i2 * 1e3) / 1e3;
        for (const down in vals) {
          if (orderedUnits$1.indexOf(down) > orderedUnits$1.indexOf(k)) {
            convert(this.matrix, vals, down, built, k);
          }
        }
      } else if (isNumber(vals[k])) {
        accumulated[k] = vals[k];
      }
    }
    for (const key in accumulated) {
      if (accumulated[key] !== 0) {
        built[lastUnit] += key === lastUnit ? accumulated[key] : accumulated[key] / this.matrix[lastUnit][key];
      }
    }
    return clone$1(this, { values: built }, true).normalize();
  }
  negate() {
    if (!this.isValid)
      return this;
    const negated = {};
    for (const k of Object.keys(this.values)) {
      negated[k] = this.values[k] === 0 ? 0 : -this.values[k];
    }
    return clone$1(this, { values: negated }, true);
  }
  get years() {
    return this.isValid ? this.values.years || 0 : NaN;
  }
  get quarters() {
    return this.isValid ? this.values.quarters || 0 : NaN;
  }
  get months() {
    return this.isValid ? this.values.months || 0 : NaN;
  }
  get weeks() {
    return this.isValid ? this.values.weeks || 0 : NaN;
  }
  get days() {
    return this.isValid ? this.values.days || 0 : NaN;
  }
  get hours() {
    return this.isValid ? this.values.hours || 0 : NaN;
  }
  get minutes() {
    return this.isValid ? this.values.minutes || 0 : NaN;
  }
  get seconds() {
    return this.isValid ? this.values.seconds || 0 : NaN;
  }
  get milliseconds() {
    return this.isValid ? this.values.milliseconds || 0 : NaN;
  }
  get isValid() {
    return this.invalid === null;
  }
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  equals(other) {
    if (!this.isValid || !other.isValid) {
      return false;
    }
    if (!this.loc.equals(other.loc)) {
      return false;
    }
    function eq2(v1, v2) {
      if (v1 === void 0 || v1 === 0)
        return v2 === void 0 || v2 === 0;
      return v1 === v2;
    }
    for (const u2 of orderedUnits$1) {
      if (!eq2(this.values[u2], other.values[u2])) {
        return false;
      }
    }
    return true;
  }
}
const INVALID$1 = "Invalid Interval";
function validateStartEnd(start, end) {
  if (!start || !start.isValid) {
    return Interval.invalid("missing or invalid start");
  } else if (!end || !end.isValid) {
    return Interval.invalid("missing or invalid end");
  } else if (end < start) {
    return Interval.invalid("end before start", `The end of an interval must be after its start, but you had start=${start.toISO()} and end=${end.toISO()}`);
  } else {
    return null;
  }
}
class Interval {
  constructor(config) {
    this.s = config.start;
    this.e = config.end;
    this.invalid = config.invalid || null;
    this.isLuxonInterval = true;
  }
  static invalid(reason, explanation = null) {
    if (!reason) {
      throw new InvalidArgumentError("need to specify a reason the Interval is invalid");
    }
    const invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);
    if (Settings.throwOnInvalid) {
      throw new InvalidIntervalError(invalid);
    } else {
      return new Interval({ invalid });
    }
  }
  static fromDateTimes(start, end) {
    const builtStart = friendlyDateTime(start), builtEnd = friendlyDateTime(end);
    const validateError = validateStartEnd(builtStart, builtEnd);
    if (validateError == null) {
      return new Interval({
        start: builtStart,
        end: builtEnd
      });
    } else {
      return validateError;
    }
  }
  static after(start, duration) {
    const dur = Duration.fromDurationLike(duration), dt = friendlyDateTime(start);
    return Interval.fromDateTimes(dt, dt.plus(dur));
  }
  static before(end, duration) {
    const dur = Duration.fromDurationLike(duration), dt = friendlyDateTime(end);
    return Interval.fromDateTimes(dt.minus(dur), dt);
  }
  static fromISO(text, opts) {
    const [s2, e] = (text || "").split("/", 2);
    if (s2 && e) {
      let start, startIsValid;
      try {
        start = DateTime.fromISO(s2, opts);
        startIsValid = start.isValid;
      } catch (e2) {
        startIsValid = false;
      }
      let end, endIsValid;
      try {
        end = DateTime.fromISO(e, opts);
        endIsValid = end.isValid;
      } catch (e2) {
        endIsValid = false;
      }
      if (startIsValid && endIsValid) {
        return Interval.fromDateTimes(start, end);
      }
      if (startIsValid) {
        const dur = Duration.fromISO(e, opts);
        if (dur.isValid) {
          return Interval.after(start, dur);
        }
      } else if (endIsValid) {
        const dur = Duration.fromISO(s2, opts);
        if (dur.isValid) {
          return Interval.before(end, dur);
        }
      }
    }
    return Interval.invalid("unparsable", `the input "${text}" can't be parsed as ISO 8601`);
  }
  static isInterval(o) {
    return o && o.isLuxonInterval || false;
  }
  get start() {
    return this.isValid ? this.s : null;
  }
  get end() {
    return this.isValid ? this.e : null;
  }
  get isValid() {
    return this.invalidReason === null;
  }
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  length(unit = "milliseconds") {
    return this.isValid ? this.toDuration(...[unit]).get(unit) : NaN;
  }
  count(unit = "milliseconds") {
    if (!this.isValid)
      return NaN;
    const start = this.start.startOf(unit), end = this.end.startOf(unit);
    return Math.floor(end.diff(start, unit).get(unit)) + 1;
  }
  hasSame(unit) {
    return this.isValid ? this.isEmpty() || this.e.minus(1).hasSame(this.s, unit) : false;
  }
  isEmpty() {
    return this.s.valueOf() === this.e.valueOf();
  }
  isAfter(dateTime) {
    if (!this.isValid)
      return false;
    return this.s > dateTime;
  }
  isBefore(dateTime) {
    if (!this.isValid)
      return false;
    return this.e <= dateTime;
  }
  contains(dateTime) {
    if (!this.isValid)
      return false;
    return this.s <= dateTime && this.e > dateTime;
  }
  set({ start, end } = {}) {
    if (!this.isValid)
      return this;
    return Interval.fromDateTimes(start || this.s, end || this.e);
  }
  splitAt(...dateTimes) {
    if (!this.isValid)
      return [];
    const sorted = dateTimes.map(friendlyDateTime).filter((d) => this.contains(d)).sort(), results = [];
    let { s: s2 } = this, i2 = 0;
    while (s2 < this.e) {
      const added = sorted[i2] || this.e, next = +added > +this.e ? this.e : added;
      results.push(Interval.fromDateTimes(s2, next));
      s2 = next;
      i2 += 1;
    }
    return results;
  }
  splitBy(duration) {
    const dur = Duration.fromDurationLike(duration);
    if (!this.isValid || !dur.isValid || dur.as("milliseconds") === 0) {
      return [];
    }
    let { s: s2 } = this, idx = 1, next;
    const results = [];
    while (s2 < this.e) {
      const added = this.start.plus(dur.mapUnits((x) => x * idx));
      next = +added > +this.e ? this.e : added;
      results.push(Interval.fromDateTimes(s2, next));
      s2 = next;
      idx += 1;
    }
    return results;
  }
  divideEqually(numberOfParts) {
    if (!this.isValid)
      return [];
    return this.splitBy(this.length() / numberOfParts).slice(0, numberOfParts);
  }
  overlaps(other) {
    return this.e > other.s && this.s < other.e;
  }
  abutsStart(other) {
    if (!this.isValid)
      return false;
    return +this.e === +other.s;
  }
  abutsEnd(other) {
    if (!this.isValid)
      return false;
    return +other.e === +this.s;
  }
  engulfs(other) {
    if (!this.isValid)
      return false;
    return this.s <= other.s && this.e >= other.e;
  }
  equals(other) {
    if (!this.isValid || !other.isValid) {
      return false;
    }
    return this.s.equals(other.s) && this.e.equals(other.e);
  }
  intersection(other) {
    if (!this.isValid)
      return this;
    const s2 = this.s > other.s ? this.s : other.s, e = this.e < other.e ? this.e : other.e;
    if (s2 >= e) {
      return null;
    } else {
      return Interval.fromDateTimes(s2, e);
    }
  }
  union(other) {
    if (!this.isValid)
      return this;
    const s2 = this.s < other.s ? this.s : other.s, e = this.e > other.e ? this.e : other.e;
    return Interval.fromDateTimes(s2, e);
  }
  static merge(intervals) {
    const [found, final] = intervals.sort((a2, b) => a2.s - b.s).reduce(([sofar, current], item) => {
      if (!current) {
        return [sofar, item];
      } else if (current.overlaps(item) || current.abutsStart(item)) {
        return [sofar, current.union(item)];
      } else {
        return [sofar.concat([current]), item];
      }
    }, [[], null]);
    if (final) {
      found.push(final);
    }
    return found;
  }
  static xor(intervals) {
    let start = null, currentCount = 0;
    const results = [], ends = intervals.map((i2) => [
      { time: i2.s, type: "s" },
      { time: i2.e, type: "e" }
    ]), flattened = Array.prototype.concat(...ends), arr = flattened.sort((a2, b) => a2.time - b.time);
    for (const i2 of arr) {
      currentCount += i2.type === "s" ? 1 : -1;
      if (currentCount === 1) {
        start = i2.time;
      } else {
        if (start && +start !== +i2.time) {
          results.push(Interval.fromDateTimes(start, i2.time));
        }
        start = null;
      }
    }
    return Interval.merge(results);
  }
  difference(...intervals) {
    return Interval.xor([this].concat(intervals)).map((i2) => this.intersection(i2)).filter((i2) => i2 && !i2.isEmpty());
  }
  toString() {
    if (!this.isValid)
      return INVALID$1;
    return `[${this.s.toISO()} \u2013 ${this.e.toISO()})`;
  }
  toISO(opts) {
    if (!this.isValid)
      return INVALID$1;
    return `${this.s.toISO(opts)}/${this.e.toISO(opts)}`;
  }
  toISODate() {
    if (!this.isValid)
      return INVALID$1;
    return `${this.s.toISODate()}/${this.e.toISODate()}`;
  }
  toISOTime(opts) {
    if (!this.isValid)
      return INVALID$1;
    return `${this.s.toISOTime(opts)}/${this.e.toISOTime(opts)}`;
  }
  toFormat(dateFormat, { separator = " \u2013 " } = {}) {
    if (!this.isValid)
      return INVALID$1;
    return `${this.s.toFormat(dateFormat)}${separator}${this.e.toFormat(dateFormat)}`;
  }
  toDuration(unit, opts) {
    if (!this.isValid) {
      return Duration.invalid(this.invalidReason);
    }
    return this.e.diff(this.s, unit, opts);
  }
  mapEndpoints(mapFn) {
    return Interval.fromDateTimes(mapFn(this.s), mapFn(this.e));
  }
}
class Info {
  static hasDST(zone = Settings.defaultZone) {
    const proto = DateTime.now().setZone(zone).set({ month: 12 });
    return !zone.isUniversal && proto.offset !== proto.set({ month: 6 }).offset;
  }
  static isValidIANAZone(zone) {
    return IANAZone.isValidZone(zone);
  }
  static normalizeZone(input) {
    return normalizeZone(input, Settings.defaultZone);
  }
  static months(length = "long", { locale = null, numberingSystem = null, locObj = null, outputCalendar = "gregory" } = {}) {
    return (locObj || Locale.create(locale, numberingSystem, outputCalendar)).months(length);
  }
  static monthsFormat(length = "long", { locale = null, numberingSystem = null, locObj = null, outputCalendar = "gregory" } = {}) {
    return (locObj || Locale.create(locale, numberingSystem, outputCalendar)).months(length, true);
  }
  static weekdays(length = "long", { locale = null, numberingSystem = null, locObj = null } = {}) {
    return (locObj || Locale.create(locale, numberingSystem, null)).weekdays(length);
  }
  static weekdaysFormat(length = "long", { locale = null, numberingSystem = null, locObj = null } = {}) {
    return (locObj || Locale.create(locale, numberingSystem, null)).weekdays(length, true);
  }
  static meridiems({ locale = null } = {}) {
    return Locale.create(locale).meridiems();
  }
  static eras(length = "short", { locale = null } = {}) {
    return Locale.create(locale, null, "gregory").eras(length);
  }
  static features() {
    return { relative: hasRelative() };
  }
}
function dayDiff(earlier, later) {
  const utcDayStart = (dt) => dt.toUTC(0, { keepLocalTime: true }).startOf("day").valueOf(), ms = utcDayStart(later) - utcDayStart(earlier);
  return Math.floor(Duration.fromMillis(ms).as("days"));
}
function highOrderDiffs(cursor, later, units) {
  const differs = [
    ["years", (a2, b) => b.year - a2.year],
    ["quarters", (a2, b) => b.quarter - a2.quarter],
    ["months", (a2, b) => b.month - a2.month + (b.year - a2.year) * 12],
    [
      "weeks",
      (a2, b) => {
        const days = dayDiff(a2, b);
        return (days - days % 7) / 7;
      }
    ],
    ["days", dayDiff]
  ];
  const results = {};
  let lowestOrder, highWater;
  for (const [unit, differ] of differs) {
    if (units.indexOf(unit) >= 0) {
      lowestOrder = unit;
      let delta = differ(cursor, later);
      highWater = cursor.plus({ [unit]: delta });
      if (highWater > later) {
        cursor = cursor.plus({ [unit]: delta - 1 });
        delta -= 1;
      } else {
        cursor = highWater;
      }
      results[unit] = delta;
    }
  }
  return [cursor, results, highWater, lowestOrder];
}
function diff(earlier, later, units, opts) {
  let [cursor, results, highWater, lowestOrder] = highOrderDiffs(earlier, later, units);
  const remainingMillis = later - cursor;
  const lowerOrderUnits = units.filter((u2) => ["hours", "minutes", "seconds", "milliseconds"].indexOf(u2) >= 0);
  if (lowerOrderUnits.length === 0) {
    if (highWater < later) {
      highWater = cursor.plus({ [lowestOrder]: 1 });
    }
    if (highWater !== cursor) {
      results[lowestOrder] = (results[lowestOrder] || 0) + remainingMillis / (highWater - cursor);
    }
  }
  const duration = Duration.fromObject(results, opts);
  if (lowerOrderUnits.length > 0) {
    return Duration.fromMillis(remainingMillis, opts).shiftTo(...lowerOrderUnits).plus(duration);
  } else {
    return duration;
  }
}
const numberingSystems = {
  arab: "[\u0660-\u0669]",
  arabext: "[\u06F0-\u06F9]",
  bali: "[\u1B50-\u1B59]",
  beng: "[\u09E6-\u09EF]",
  deva: "[\u0966-\u096F]",
  fullwide: "[\uFF10-\uFF19]",
  gujr: "[\u0AE6-\u0AEF]",
  hanidec: "[\u3007|\u4E00|\u4E8C|\u4E09|\u56DB|\u4E94|\u516D|\u4E03|\u516B|\u4E5D]",
  khmr: "[\u17E0-\u17E9]",
  knda: "[\u0CE6-\u0CEF]",
  laoo: "[\u0ED0-\u0ED9]",
  limb: "[\u1946-\u194F]",
  mlym: "[\u0D66-\u0D6F]",
  mong: "[\u1810-\u1819]",
  mymr: "[\u1040-\u1049]",
  orya: "[\u0B66-\u0B6F]",
  tamldec: "[\u0BE6-\u0BEF]",
  telu: "[\u0C66-\u0C6F]",
  thai: "[\u0E50-\u0E59]",
  tibt: "[\u0F20-\u0F29]",
  latn: "\\d"
};
const numberingSystemsUTF16 = {
  arab: [1632, 1641],
  arabext: [1776, 1785],
  bali: [6992, 7001],
  beng: [2534, 2543],
  deva: [2406, 2415],
  fullwide: [65296, 65303],
  gujr: [2790, 2799],
  khmr: [6112, 6121],
  knda: [3302, 3311],
  laoo: [3792, 3801],
  limb: [6470, 6479],
  mlym: [3430, 3439],
  mong: [6160, 6169],
  mymr: [4160, 4169],
  orya: [2918, 2927],
  tamldec: [3046, 3055],
  telu: [3174, 3183],
  thai: [3664, 3673],
  tibt: [3872, 3881]
};
const hanidecChars = numberingSystems.hanidec.replace(/[\[|\]]/g, "").split("");
function parseDigits(str) {
  let value = parseInt(str, 10);
  if (isNaN(value)) {
    value = "";
    for (let i2 = 0; i2 < str.length; i2++) {
      const code = str.charCodeAt(i2);
      if (str[i2].search(numberingSystems.hanidec) !== -1) {
        value += hanidecChars.indexOf(str[i2]);
      } else {
        for (const key in numberingSystemsUTF16) {
          const [min, max] = numberingSystemsUTF16[key];
          if (code >= min && code <= max) {
            value += code - min;
          }
        }
      }
    }
    return parseInt(value, 10);
  } else {
    return value;
  }
}
function digitRegex({ numberingSystem }, append = "") {
  return new RegExp(`${numberingSystems[numberingSystem || "latn"]}${append}`);
}
const MISSING_FTP = "missing Intl.DateTimeFormat.formatToParts support";
function intUnit(regex2, post = (i2) => i2) {
  return { regex: regex2, deser: ([s2]) => post(parseDigits(s2)) };
}
const NBSP = String.fromCharCode(160);
const spaceOrNBSP = `( |${NBSP})`;
const spaceOrNBSPRegExp = new RegExp(spaceOrNBSP, "g");
function fixListRegex(s2) {
  return s2.replace(/\./g, "\\.?").replace(spaceOrNBSPRegExp, spaceOrNBSP);
}
function stripInsensitivities(s2) {
  return s2.replace(/\./g, "").replace(spaceOrNBSPRegExp, " ").toLowerCase();
}
function oneOf(strings, startIndex) {
  if (strings === null) {
    return null;
  } else {
    return {
      regex: RegExp(strings.map(fixListRegex).join("|")),
      deser: ([s2]) => strings.findIndex((i2) => stripInsensitivities(s2) === stripInsensitivities(i2)) + startIndex
    };
  }
}
function offset(regex2, groups) {
  return { regex: regex2, deser: ([, h2, m]) => signedOffset(h2, m), groups };
}
function simple(regex2) {
  return { regex: regex2, deser: ([s2]) => s2 };
}
function escapeToken(value) {
  return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}
function unitForToken(token, loc) {
  const one = digitRegex(loc), two = digitRegex(loc, "{2}"), three = digitRegex(loc, "{3}"), four = digitRegex(loc, "{4}"), six = digitRegex(loc, "{6}"), oneOrTwo = digitRegex(loc, "{1,2}"), oneToThree = digitRegex(loc, "{1,3}"), oneToSix = digitRegex(loc, "{1,6}"), oneToNine = digitRegex(loc, "{1,9}"), twoToFour = digitRegex(loc, "{2,4}"), fourToSix = digitRegex(loc, "{4,6}"), literal = (t) => ({ regex: RegExp(escapeToken(t.val)), deser: ([s2]) => s2, literal: true }), unitate = (t) => {
    if (token.literal) {
      return literal(t);
    }
    switch (t.val) {
      case "G":
        return oneOf(loc.eras("short", false), 0);
      case "GG":
        return oneOf(loc.eras("long", false), 0);
      case "y":
        return intUnit(oneToSix);
      case "yy":
        return intUnit(twoToFour, untruncateYear);
      case "yyyy":
        return intUnit(four);
      case "yyyyy":
        return intUnit(fourToSix);
      case "yyyyyy":
        return intUnit(six);
      case "M":
        return intUnit(oneOrTwo);
      case "MM":
        return intUnit(two);
      case "MMM":
        return oneOf(loc.months("short", true, false), 1);
      case "MMMM":
        return oneOf(loc.months("long", true, false), 1);
      case "L":
        return intUnit(oneOrTwo);
      case "LL":
        return intUnit(two);
      case "LLL":
        return oneOf(loc.months("short", false, false), 1);
      case "LLLL":
        return oneOf(loc.months("long", false, false), 1);
      case "d":
        return intUnit(oneOrTwo);
      case "dd":
        return intUnit(two);
      case "o":
        return intUnit(oneToThree);
      case "ooo":
        return intUnit(three);
      case "HH":
        return intUnit(two);
      case "H":
        return intUnit(oneOrTwo);
      case "hh":
        return intUnit(two);
      case "h":
        return intUnit(oneOrTwo);
      case "mm":
        return intUnit(two);
      case "m":
        return intUnit(oneOrTwo);
      case "q":
        return intUnit(oneOrTwo);
      case "qq":
        return intUnit(two);
      case "s":
        return intUnit(oneOrTwo);
      case "ss":
        return intUnit(two);
      case "S":
        return intUnit(oneToThree);
      case "SSS":
        return intUnit(three);
      case "u":
        return simple(oneToNine);
      case "uu":
        return simple(oneOrTwo);
      case "uuu":
        return intUnit(one);
      case "a":
        return oneOf(loc.meridiems(), 0);
      case "kkkk":
        return intUnit(four);
      case "kk":
        return intUnit(twoToFour, untruncateYear);
      case "W":
        return intUnit(oneOrTwo);
      case "WW":
        return intUnit(two);
      case "E":
      case "c":
        return intUnit(one);
      case "EEE":
        return oneOf(loc.weekdays("short", false, false), 1);
      case "EEEE":
        return oneOf(loc.weekdays("long", false, false), 1);
      case "ccc":
        return oneOf(loc.weekdays("short", true, false), 1);
      case "cccc":
        return oneOf(loc.weekdays("long", true, false), 1);
      case "Z":
      case "ZZ":
        return offset(new RegExp(`([+-]${oneOrTwo.source})(?::(${two.source}))?`), 2);
      case "ZZZ":
        return offset(new RegExp(`([+-]${oneOrTwo.source})(${two.source})?`), 2);
      case "z":
        return simple(/[a-z_+-/]{1,256}?/i);
      default:
        return literal(t);
    }
  };
  const unit = unitate(token) || {
    invalidReason: MISSING_FTP
  };
  unit.token = token;
  return unit;
}
const partTypeStyleToTokenVal = {
  year: {
    "2-digit": "yy",
    numeric: "yyyyy"
  },
  month: {
    numeric: "M",
    "2-digit": "MM",
    short: "MMM",
    long: "MMMM"
  },
  day: {
    numeric: "d",
    "2-digit": "dd"
  },
  weekday: {
    short: "EEE",
    long: "EEEE"
  },
  dayperiod: "a",
  dayPeriod: "a",
  hour: {
    numeric: "h",
    "2-digit": "hh"
  },
  minute: {
    numeric: "m",
    "2-digit": "mm"
  },
  second: {
    numeric: "s",
    "2-digit": "ss"
  }
};
function tokenForPart(part, locale, formatOpts) {
  const { type, value } = part;
  if (type === "literal") {
    return {
      literal: true,
      val: value
    };
  }
  const style = formatOpts[type];
  let val = partTypeStyleToTokenVal[type];
  if (typeof val === "object") {
    val = val[style];
  }
  if (val) {
    return {
      literal: false,
      val
    };
  }
  return void 0;
}
function buildRegex(units) {
  const re = units.map((u2) => u2.regex).reduce((f, r) => `${f}(${r.source})`, "");
  return [`^${re}$`, units];
}
function match(input, regex2, handlers) {
  const matches2 = input.match(regex2);
  if (matches2) {
    const all = {};
    let matchIndex = 1;
    for (const i2 in handlers) {
      if (hasOwnProperty(handlers, i2)) {
        const h2 = handlers[i2], groups = h2.groups ? h2.groups + 1 : 1;
        if (!h2.literal && h2.token) {
          all[h2.token.val[0]] = h2.deser(matches2.slice(matchIndex, matchIndex + groups));
        }
        matchIndex += groups;
      }
    }
    return [matches2, all];
  } else {
    return [matches2, {}];
  }
}
function dateTimeFromMatches(matches2) {
  const toField = (token) => {
    switch (token) {
      case "S":
        return "millisecond";
      case "s":
        return "second";
      case "m":
        return "minute";
      case "h":
      case "H":
        return "hour";
      case "d":
        return "day";
      case "o":
        return "ordinal";
      case "L":
      case "M":
        return "month";
      case "y":
        return "year";
      case "E":
      case "c":
        return "weekday";
      case "W":
        return "weekNumber";
      case "k":
        return "weekYear";
      case "q":
        return "quarter";
      default:
        return null;
    }
  };
  let zone = null;
  let specificOffset;
  if (!isUndefined(matches2.z)) {
    zone = IANAZone.create(matches2.z);
  }
  if (!isUndefined(matches2.Z)) {
    if (!zone) {
      zone = new FixedOffsetZone(matches2.Z);
    }
    specificOffset = matches2.Z;
  }
  if (!isUndefined(matches2.q)) {
    matches2.M = (matches2.q - 1) * 3 + 1;
  }
  if (!isUndefined(matches2.h)) {
    if (matches2.h < 12 && matches2.a === 1) {
      matches2.h += 12;
    } else if (matches2.h === 12 && matches2.a === 0) {
      matches2.h = 0;
    }
  }
  if (matches2.G === 0 && matches2.y) {
    matches2.y = -matches2.y;
  }
  if (!isUndefined(matches2.u)) {
    matches2.S = parseMillis(matches2.u);
  }
  const vals = Object.keys(matches2).reduce((r, k) => {
    const f = toField(k);
    if (f) {
      r[f] = matches2[k];
    }
    return r;
  }, {});
  return [vals, zone, specificOffset];
}
let dummyDateTimeCache = null;
function getDummyDateTime() {
  if (!dummyDateTimeCache) {
    dummyDateTimeCache = DateTime.fromMillis(1555555555555);
  }
  return dummyDateTimeCache;
}
function maybeExpandMacroToken(token, locale) {
  if (token.literal) {
    return token;
  }
  const formatOpts = Formatter.macroTokenToFormatOpts(token.val);
  if (!formatOpts) {
    return token;
  }
  const formatter = Formatter.create(locale, formatOpts);
  const parts = formatter.formatDateTimeParts(getDummyDateTime());
  const tokens = parts.map((p) => tokenForPart(p, locale, formatOpts));
  if (tokens.includes(void 0)) {
    return token;
  }
  return tokens;
}
function expandMacroTokens(tokens, locale) {
  return Array.prototype.concat(...tokens.map((t) => maybeExpandMacroToken(t, locale)));
}
function explainFromTokens(locale, input, format) {
  const tokens = expandMacroTokens(Formatter.parseFormat(format), locale), units = tokens.map((t) => unitForToken(t, locale)), disqualifyingUnit = units.find((t) => t.invalidReason);
  if (disqualifyingUnit) {
    return { input, tokens, invalidReason: disqualifyingUnit.invalidReason };
  } else {
    const [regexString, handlers] = buildRegex(units), regex2 = RegExp(regexString, "i"), [rawMatches, matches2] = match(input, regex2, handlers), [result, zone, specificOffset] = matches2 ? dateTimeFromMatches(matches2) : [null, null, void 0];
    if (hasOwnProperty(matches2, "a") && hasOwnProperty(matches2, "H")) {
      throw new ConflictingSpecificationError("Can't include meridiem when specifying 24-hour format");
    }
    return { input, tokens, regex: regex2, rawMatches, matches: matches2, result, zone, specificOffset };
  }
}
function parseFromTokens(locale, input, format) {
  const { result, zone, specificOffset, invalidReason } = explainFromTokens(locale, input, format);
  return [result, zone, specificOffset, invalidReason];
}
const nonLeapLadder = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], leapLadder = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
function unitOutOfRange(unit, value) {
  return new Invalid("unit out of range", `you specified ${value} (of type ${typeof value}) as a ${unit}, which is invalid`);
}
function dayOfWeek(year, month, day) {
  const d = new Date(Date.UTC(year, month - 1, day));
  if (year < 100 && year >= 0) {
    d.setUTCFullYear(d.getUTCFullYear() - 1900);
  }
  const js = d.getUTCDay();
  return js === 0 ? 7 : js;
}
function computeOrdinal(year, month, day) {
  return day + (isLeapYear(year) ? leapLadder : nonLeapLadder)[month - 1];
}
function uncomputeOrdinal(year, ordinal) {
  const table = isLeapYear(year) ? leapLadder : nonLeapLadder, month0 = table.findIndex((i2) => i2 < ordinal), day = ordinal - table[month0];
  return { month: month0 + 1, day };
}
function gregorianToWeek(gregObj) {
  const { year, month, day } = gregObj, ordinal = computeOrdinal(year, month, day), weekday = dayOfWeek(year, month, day);
  let weekNumber = Math.floor((ordinal - weekday + 10) / 7), weekYear;
  if (weekNumber < 1) {
    weekYear = year - 1;
    weekNumber = weeksInWeekYear(weekYear);
  } else if (weekNumber > weeksInWeekYear(year)) {
    weekYear = year + 1;
    weekNumber = 1;
  } else {
    weekYear = year;
  }
  return __spreadValues({ weekYear, weekNumber, weekday }, timeObject(gregObj));
}
function weekToGregorian(weekData) {
  const { weekYear, weekNumber, weekday } = weekData, weekdayOfJan4 = dayOfWeek(weekYear, 1, 4), yearInDays = daysInYear(weekYear);
  let ordinal = weekNumber * 7 + weekday - weekdayOfJan4 - 3, year;
  if (ordinal < 1) {
    year = weekYear - 1;
    ordinal += daysInYear(year);
  } else if (ordinal > yearInDays) {
    year = weekYear + 1;
    ordinal -= daysInYear(weekYear);
  } else {
    year = weekYear;
  }
  const { month, day } = uncomputeOrdinal(year, ordinal);
  return __spreadValues({ year, month, day }, timeObject(weekData));
}
function gregorianToOrdinal(gregData) {
  const { year, month, day } = gregData;
  const ordinal = computeOrdinal(year, month, day);
  return __spreadValues({ year, ordinal }, timeObject(gregData));
}
function ordinalToGregorian(ordinalData) {
  const { year, ordinal } = ordinalData;
  const { month, day } = uncomputeOrdinal(year, ordinal);
  return __spreadValues({ year, month, day }, timeObject(ordinalData));
}
function hasInvalidWeekData(obj) {
  const validYear = isInteger(obj.weekYear), validWeek = integerBetween(obj.weekNumber, 1, weeksInWeekYear(obj.weekYear)), validWeekday = integerBetween(obj.weekday, 1, 7);
  if (!validYear) {
    return unitOutOfRange("weekYear", obj.weekYear);
  } else if (!validWeek) {
    return unitOutOfRange("week", obj.week);
  } else if (!validWeekday) {
    return unitOutOfRange("weekday", obj.weekday);
  } else
    return false;
}
function hasInvalidOrdinalData(obj) {
  const validYear = isInteger(obj.year), validOrdinal = integerBetween(obj.ordinal, 1, daysInYear(obj.year));
  if (!validYear) {
    return unitOutOfRange("year", obj.year);
  } else if (!validOrdinal) {
    return unitOutOfRange("ordinal", obj.ordinal);
  } else
    return false;
}
function hasInvalidGregorianData(obj) {
  const validYear = isInteger(obj.year), validMonth = integerBetween(obj.month, 1, 12), validDay = integerBetween(obj.day, 1, daysInMonth(obj.year, obj.month));
  if (!validYear) {
    return unitOutOfRange("year", obj.year);
  } else if (!validMonth) {
    return unitOutOfRange("month", obj.month);
  } else if (!validDay) {
    return unitOutOfRange("day", obj.day);
  } else
    return false;
}
function hasInvalidTimeData(obj) {
  const { hour, minute, second, millisecond } = obj;
  const validHour = integerBetween(hour, 0, 23) || hour === 24 && minute === 0 && second === 0 && millisecond === 0, validMinute = integerBetween(minute, 0, 59), validSecond = integerBetween(second, 0, 59), validMillisecond = integerBetween(millisecond, 0, 999);
  if (!validHour) {
    return unitOutOfRange("hour", hour);
  } else if (!validMinute) {
    return unitOutOfRange("minute", minute);
  } else if (!validSecond) {
    return unitOutOfRange("second", second);
  } else if (!validMillisecond) {
    return unitOutOfRange("millisecond", millisecond);
  } else
    return false;
}
const INVALID = "Invalid DateTime";
const MAX_DATE = 864e13;
function unsupportedZone(zone) {
  return new Invalid("unsupported zone", `the zone "${zone.name}" is not supported`);
}
function possiblyCachedWeekData(dt) {
  if (dt.weekData === null) {
    dt.weekData = gregorianToWeek(dt.c);
  }
  return dt.weekData;
}
function clone(inst, alts) {
  const current = {
    ts: inst.ts,
    zone: inst.zone,
    c: inst.c,
    o: inst.o,
    loc: inst.loc,
    invalid: inst.invalid
  };
  return new DateTime(__spreadProps(__spreadValues(__spreadValues({}, current), alts), { old: current }));
}
function fixOffset(localTS, o, tz) {
  let utcGuess = localTS - o * 60 * 1e3;
  const o2 = tz.offset(utcGuess);
  if (o === o2) {
    return [utcGuess, o];
  }
  utcGuess -= (o2 - o) * 60 * 1e3;
  const o3 = tz.offset(utcGuess);
  if (o2 === o3) {
    return [utcGuess, o2];
  }
  return [localTS - Math.min(o2, o3) * 60 * 1e3, Math.max(o2, o3)];
}
function tsToObj(ts, offset2) {
  ts += offset2 * 60 * 1e3;
  const d = new Date(ts);
  return {
    year: d.getUTCFullYear(),
    month: d.getUTCMonth() + 1,
    day: d.getUTCDate(),
    hour: d.getUTCHours(),
    minute: d.getUTCMinutes(),
    second: d.getUTCSeconds(),
    millisecond: d.getUTCMilliseconds()
  };
}
function objToTS(obj, offset2, zone) {
  return fixOffset(objToLocalTS(obj), offset2, zone);
}
function adjustTime(inst, dur) {
  const oPre = inst.o, year = inst.c.year + Math.trunc(dur.years), month = inst.c.month + Math.trunc(dur.months) + Math.trunc(dur.quarters) * 3, c2 = __spreadProps(__spreadValues({}, inst.c), {
    year,
    month,
    day: Math.min(inst.c.day, daysInMonth(year, month)) + Math.trunc(dur.days) + Math.trunc(dur.weeks) * 7
  }), millisToAdd = Duration.fromObject({
    years: dur.years - Math.trunc(dur.years),
    quarters: dur.quarters - Math.trunc(dur.quarters),
    months: dur.months - Math.trunc(dur.months),
    weeks: dur.weeks - Math.trunc(dur.weeks),
    days: dur.days - Math.trunc(dur.days),
    hours: dur.hours,
    minutes: dur.minutes,
    seconds: dur.seconds,
    milliseconds: dur.milliseconds
  }).as("milliseconds"), localTS = objToLocalTS(c2);
  let [ts, o] = fixOffset(localTS, oPre, inst.zone);
  if (millisToAdd !== 0) {
    ts += millisToAdd;
    o = inst.zone.offset(ts);
  }
  return { ts, o };
}
function parseDataToDateTime(parsed, parsedZone, opts, format, text, specificOffset) {
  const { setZone, zone } = opts;
  if (parsed && Object.keys(parsed).length !== 0) {
    const interpretationZone = parsedZone || zone, inst = DateTime.fromObject(parsed, __spreadProps(__spreadValues({}, opts), {
      zone: interpretationZone,
      specificOffset
    }));
    return setZone ? inst : inst.setZone(zone);
  } else {
    return DateTime.invalid(new Invalid("unparsable", `the input "${text}" can't be parsed as ${format}`));
  }
}
function toTechFormat(dt, format, allowZ = true) {
  return dt.isValid ? Formatter.create(Locale.create("en-US"), {
    allowZ,
    forceSimple: true
  }).formatDateTimeFromString(dt, format) : null;
}
function toISODate(o, extended) {
  const longFormat = o.c.year > 9999 || o.c.year < 0;
  let c2 = "";
  if (longFormat && o.c.year >= 0)
    c2 += "+";
  c2 += padStart(o.c.year, longFormat ? 6 : 4);
  if (extended) {
    c2 += "-";
    c2 += padStart(o.c.month);
    c2 += "-";
    c2 += padStart(o.c.day);
  } else {
    c2 += padStart(o.c.month);
    c2 += padStart(o.c.day);
  }
  return c2;
}
function toISOTime(o, extended, suppressSeconds, suppressMilliseconds, includeOffset) {
  let c2 = padStart(o.c.hour);
  if (extended) {
    c2 += ":";
    c2 += padStart(o.c.minute);
    if (o.c.second !== 0 || !suppressSeconds) {
      c2 += ":";
    }
  } else {
    c2 += padStart(o.c.minute);
  }
  if (o.c.second !== 0 || !suppressSeconds) {
    c2 += padStart(o.c.second);
    if (o.c.millisecond !== 0 || !suppressMilliseconds) {
      c2 += ".";
      c2 += padStart(o.c.millisecond, 3);
    }
  }
  if (includeOffset) {
    if (o.isOffsetFixed && o.offset === 0) {
      c2 += "Z";
    } else if (o.o < 0) {
      c2 += "-";
      c2 += padStart(Math.trunc(-o.o / 60));
      c2 += ":";
      c2 += padStart(Math.trunc(-o.o % 60));
    } else {
      c2 += "+";
      c2 += padStart(Math.trunc(o.o / 60));
      c2 += ":";
      c2 += padStart(Math.trunc(o.o % 60));
    }
  }
  return c2;
}
const defaultUnitValues = {
  month: 1,
  day: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, defaultWeekUnitValues = {
  weekNumber: 1,
  weekday: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, defaultOrdinalUnitValues = {
  ordinal: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
};
const orderedUnits = ["year", "month", "day", "hour", "minute", "second", "millisecond"], orderedWeekUnits = [
  "weekYear",
  "weekNumber",
  "weekday",
  "hour",
  "minute",
  "second",
  "millisecond"
], orderedOrdinalUnits = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
function normalizeUnit(unit) {
  const normalized = {
    year: "year",
    years: "year",
    month: "month",
    months: "month",
    day: "day",
    days: "day",
    hour: "hour",
    hours: "hour",
    minute: "minute",
    minutes: "minute",
    quarter: "quarter",
    quarters: "quarter",
    second: "second",
    seconds: "second",
    millisecond: "millisecond",
    milliseconds: "millisecond",
    weekday: "weekday",
    weekdays: "weekday",
    weeknumber: "weekNumber",
    weeksnumber: "weekNumber",
    weeknumbers: "weekNumber",
    weekyear: "weekYear",
    weekyears: "weekYear",
    ordinal: "ordinal"
  }[unit.toLowerCase()];
  if (!normalized)
    throw new InvalidUnitError(unit);
  return normalized;
}
function quickDT(obj, opts) {
  const zone = normalizeZone(opts.zone, Settings.defaultZone), loc = Locale.fromObject(opts), tsNow = Settings.now();
  let ts, o;
  if (!isUndefined(obj.year)) {
    for (const u2 of orderedUnits) {
      if (isUndefined(obj[u2])) {
        obj[u2] = defaultUnitValues[u2];
      }
    }
    const invalid = hasInvalidGregorianData(obj) || hasInvalidTimeData(obj);
    if (invalid) {
      return DateTime.invalid(invalid);
    }
    const offsetProvis = zone.offset(tsNow);
    [ts, o] = objToTS(obj, offsetProvis, zone);
  } else {
    ts = tsNow;
  }
  return new DateTime({ ts, zone, loc, o });
}
function diffRelative(start, end, opts) {
  const round = isUndefined(opts.round) ? true : opts.round, format = (c2, unit) => {
    c2 = roundTo(c2, round || opts.calendary ? 0 : 2, true);
    const formatter = end.loc.clone(opts).relFormatter(opts);
    return formatter.format(c2, unit);
  }, differ = (unit) => {
    if (opts.calendary) {
      if (!end.hasSame(start, unit)) {
        return end.startOf(unit).diff(start.startOf(unit), unit).get(unit);
      } else
        return 0;
    } else {
      return end.diff(start, unit).get(unit);
    }
  };
  if (opts.unit) {
    return format(differ(opts.unit), opts.unit);
  }
  for (const unit of opts.units) {
    const count = differ(unit);
    if (Math.abs(count) >= 1) {
      return format(count, unit);
    }
  }
  return format(start > end ? -0 : 0, opts.units[opts.units.length - 1]);
}
function lastOpts(argList) {
  let opts = {}, args;
  if (argList.length > 0 && typeof argList[argList.length - 1] === "object") {
    opts = argList[argList.length - 1];
    args = Array.from(argList).slice(0, argList.length - 1);
  } else {
    args = Array.from(argList);
  }
  return [opts, args];
}
class DateTime {
  constructor(config) {
    const zone = config.zone || Settings.defaultZone;
    let invalid = config.invalid || (Number.isNaN(config.ts) ? new Invalid("invalid input") : null) || (!zone.isValid ? unsupportedZone(zone) : null);
    this.ts = isUndefined(config.ts) ? Settings.now() : config.ts;
    let c2 = null, o = null;
    if (!invalid) {
      const unchanged = config.old && config.old.ts === this.ts && config.old.zone.equals(zone);
      if (unchanged) {
        [c2, o] = [config.old.c, config.old.o];
      } else {
        const ot = zone.offset(this.ts);
        c2 = tsToObj(this.ts, ot);
        invalid = Number.isNaN(c2.year) ? new Invalid("invalid input") : null;
        c2 = invalid ? null : c2;
        o = invalid ? null : ot;
      }
    }
    this._zone = zone;
    this.loc = config.loc || Locale.create();
    this.invalid = invalid;
    this.weekData = null;
    this.c = c2;
    this.o = o;
    this.isLuxonDateTime = true;
  }
  static now() {
    return new DateTime({});
  }
  static local() {
    const [opts, args] = lastOpts(arguments), [year, month, day, hour, minute, second, millisecond] = args;
    return quickDT({ year, month, day, hour, minute, second, millisecond }, opts);
  }
  static utc() {
    const [opts, args] = lastOpts(arguments), [year, month, day, hour, minute, second, millisecond] = args;
    opts.zone = FixedOffsetZone.utcInstance;
    return quickDT({ year, month, day, hour, minute, second, millisecond }, opts);
  }
  static fromJSDate(date, options = {}) {
    const ts = isDate(date) ? date.valueOf() : NaN;
    if (Number.isNaN(ts)) {
      return DateTime.invalid("invalid input");
    }
    const zoneToUse = normalizeZone(options.zone, Settings.defaultZone);
    if (!zoneToUse.isValid) {
      return DateTime.invalid(unsupportedZone(zoneToUse));
    }
    return new DateTime({
      ts,
      zone: zoneToUse,
      loc: Locale.fromObject(options)
    });
  }
  static fromMillis(milliseconds, options = {}) {
    if (!isNumber(milliseconds)) {
      throw new InvalidArgumentError(`fromMillis requires a numerical input, but received a ${typeof milliseconds} with value ${milliseconds}`);
    } else if (milliseconds < -MAX_DATE || milliseconds > MAX_DATE) {
      return DateTime.invalid("Timestamp out of range");
    } else {
      return new DateTime({
        ts: milliseconds,
        zone: normalizeZone(options.zone, Settings.defaultZone),
        loc: Locale.fromObject(options)
      });
    }
  }
  static fromSeconds(seconds, options = {}) {
    if (!isNumber(seconds)) {
      throw new InvalidArgumentError("fromSeconds requires a numerical input");
    } else {
      return new DateTime({
        ts: seconds * 1e3,
        zone: normalizeZone(options.zone, Settings.defaultZone),
        loc: Locale.fromObject(options)
      });
    }
  }
  static fromObject(obj, opts = {}) {
    obj = obj || {};
    const zoneToUse = normalizeZone(opts.zone, Settings.defaultZone);
    if (!zoneToUse.isValid) {
      return DateTime.invalid(unsupportedZone(zoneToUse));
    }
    const tsNow = Settings.now(), offsetProvis = !isUndefined(opts.specificOffset) ? opts.specificOffset : zoneToUse.offset(tsNow), normalized = normalizeObject(obj, normalizeUnit), containsOrdinal = !isUndefined(normalized.ordinal), containsGregorYear = !isUndefined(normalized.year), containsGregorMD = !isUndefined(normalized.month) || !isUndefined(normalized.day), containsGregor = containsGregorYear || containsGregorMD, definiteWeekDef = normalized.weekYear || normalized.weekNumber, loc = Locale.fromObject(opts);
    if ((containsGregor || containsOrdinal) && definiteWeekDef) {
      throw new ConflictingSpecificationError("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
    }
    if (containsGregorMD && containsOrdinal) {
      throw new ConflictingSpecificationError("Can't mix ordinal dates with month/day");
    }
    const useWeekData = definiteWeekDef || normalized.weekday && !containsGregor;
    let units, defaultValues, objNow = tsToObj(tsNow, offsetProvis);
    if (useWeekData) {
      units = orderedWeekUnits;
      defaultValues = defaultWeekUnitValues;
      objNow = gregorianToWeek(objNow);
    } else if (containsOrdinal) {
      units = orderedOrdinalUnits;
      defaultValues = defaultOrdinalUnitValues;
      objNow = gregorianToOrdinal(objNow);
    } else {
      units = orderedUnits;
      defaultValues = defaultUnitValues;
    }
    let foundFirst = false;
    for (const u2 of units) {
      const v = normalized[u2];
      if (!isUndefined(v)) {
        foundFirst = true;
      } else if (foundFirst) {
        normalized[u2] = defaultValues[u2];
      } else {
        normalized[u2] = objNow[u2];
      }
    }
    const higherOrderInvalid = useWeekData ? hasInvalidWeekData(normalized) : containsOrdinal ? hasInvalidOrdinalData(normalized) : hasInvalidGregorianData(normalized), invalid = higherOrderInvalid || hasInvalidTimeData(normalized);
    if (invalid) {
      return DateTime.invalid(invalid);
    }
    const gregorian = useWeekData ? weekToGregorian(normalized) : containsOrdinal ? ordinalToGregorian(normalized) : normalized, [tsFinal, offsetFinal] = objToTS(gregorian, offsetProvis, zoneToUse), inst = new DateTime({
      ts: tsFinal,
      zone: zoneToUse,
      o: offsetFinal,
      loc
    });
    if (normalized.weekday && containsGregor && obj.weekday !== inst.weekday) {
      return DateTime.invalid("mismatched weekday", `you can't specify both a weekday of ${normalized.weekday} and a date of ${inst.toISO()}`);
    }
    return inst;
  }
  static fromISO(text, opts = {}) {
    const [vals, parsedZone] = parseISODate(text);
    return parseDataToDateTime(vals, parsedZone, opts, "ISO 8601", text);
  }
  static fromRFC2822(text, opts = {}) {
    const [vals, parsedZone] = parseRFC2822Date(text);
    return parseDataToDateTime(vals, parsedZone, opts, "RFC 2822", text);
  }
  static fromHTTP(text, opts = {}) {
    const [vals, parsedZone] = parseHTTPDate(text);
    return parseDataToDateTime(vals, parsedZone, opts, "HTTP", opts);
  }
  static fromFormat(text, fmt, opts = {}) {
    if (isUndefined(text) || isUndefined(fmt)) {
      throw new InvalidArgumentError("fromFormat requires an input string and a format");
    }
    const { locale = null, numberingSystem = null } = opts, localeToUse = Locale.fromOpts({
      locale,
      numberingSystem,
      defaultToEN: true
    }), [vals, parsedZone, specificOffset, invalid] = parseFromTokens(localeToUse, text, fmt);
    if (invalid) {
      return DateTime.invalid(invalid);
    } else {
      return parseDataToDateTime(vals, parsedZone, opts, `format ${fmt}`, text, specificOffset);
    }
  }
  static fromString(text, fmt, opts = {}) {
    return DateTime.fromFormat(text, fmt, opts);
  }
  static fromSQL(text, opts = {}) {
    const [vals, parsedZone] = parseSQL(text);
    return parseDataToDateTime(vals, parsedZone, opts, "SQL", text);
  }
  static invalid(reason, explanation = null) {
    if (!reason) {
      throw new InvalidArgumentError("need to specify a reason the DateTime is invalid");
    }
    const invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);
    if (Settings.throwOnInvalid) {
      throw new InvalidDateTimeError(invalid);
    } else {
      return new DateTime({ invalid });
    }
  }
  static isDateTime(o) {
    return o && o.isLuxonDateTime || false;
  }
  get(unit) {
    return this[unit];
  }
  get isValid() {
    return this.invalid === null;
  }
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }
  get outputCalendar() {
    return this.isValid ? this.loc.outputCalendar : null;
  }
  get zone() {
    return this._zone;
  }
  get zoneName() {
    return this.isValid ? this.zone.name : null;
  }
  get year() {
    return this.isValid ? this.c.year : NaN;
  }
  get quarter() {
    return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
  }
  get month() {
    return this.isValid ? this.c.month : NaN;
  }
  get day() {
    return this.isValid ? this.c.day : NaN;
  }
  get hour() {
    return this.isValid ? this.c.hour : NaN;
  }
  get minute() {
    return this.isValid ? this.c.minute : NaN;
  }
  get second() {
    return this.isValid ? this.c.second : NaN;
  }
  get millisecond() {
    return this.isValid ? this.c.millisecond : NaN;
  }
  get weekYear() {
    return this.isValid ? possiblyCachedWeekData(this).weekYear : NaN;
  }
  get weekNumber() {
    return this.isValid ? possiblyCachedWeekData(this).weekNumber : NaN;
  }
  get weekday() {
    return this.isValid ? possiblyCachedWeekData(this).weekday : NaN;
  }
  get ordinal() {
    return this.isValid ? gregorianToOrdinal(this.c).ordinal : NaN;
  }
  get monthShort() {
    return this.isValid ? Info.months("short", { locObj: this.loc })[this.month - 1] : null;
  }
  get monthLong() {
    return this.isValid ? Info.months("long", { locObj: this.loc })[this.month - 1] : null;
  }
  get weekdayShort() {
    return this.isValid ? Info.weekdays("short", { locObj: this.loc })[this.weekday - 1] : null;
  }
  get weekdayLong() {
    return this.isValid ? Info.weekdays("long", { locObj: this.loc })[this.weekday - 1] : null;
  }
  get offset() {
    return this.isValid ? +this.o : NaN;
  }
  get offsetNameShort() {
    if (this.isValid) {
      return this.zone.offsetName(this.ts, {
        format: "short",
        locale: this.locale
      });
    } else {
      return null;
    }
  }
  get offsetNameLong() {
    if (this.isValid) {
      return this.zone.offsetName(this.ts, {
        format: "long",
        locale: this.locale
      });
    } else {
      return null;
    }
  }
  get isOffsetFixed() {
    return this.isValid ? this.zone.isUniversal : null;
  }
  get isInDST() {
    if (this.isOffsetFixed) {
      return false;
    } else {
      return this.offset > this.set({ month: 1 }).offset || this.offset > this.set({ month: 5 }).offset;
    }
  }
  get isInLeapYear() {
    return isLeapYear(this.year);
  }
  get daysInMonth() {
    return daysInMonth(this.year, this.month);
  }
  get daysInYear() {
    return this.isValid ? daysInYear(this.year) : NaN;
  }
  get weeksInWeekYear() {
    return this.isValid ? weeksInWeekYear(this.weekYear) : NaN;
  }
  resolvedLocaleOptions(opts = {}) {
    const { locale, numberingSystem, calendar } = Formatter.create(this.loc.clone(opts), opts).resolvedOptions(this);
    return { locale, numberingSystem, outputCalendar: calendar };
  }
  toUTC(offset2 = 0, opts = {}) {
    return this.setZone(FixedOffsetZone.instance(offset2), opts);
  }
  toLocal() {
    return this.setZone(Settings.defaultZone);
  }
  setZone(zone, { keepLocalTime = false, keepCalendarTime = false } = {}) {
    zone = normalizeZone(zone, Settings.defaultZone);
    if (zone.equals(this.zone)) {
      return this;
    } else if (!zone.isValid) {
      return DateTime.invalid(unsupportedZone(zone));
    } else {
      let newTS = this.ts;
      if (keepLocalTime || keepCalendarTime) {
        const offsetGuess = zone.offset(this.ts);
        const asObj = this.toObject();
        [newTS] = objToTS(asObj, offsetGuess, zone);
      }
      return clone(this, { ts: newTS, zone });
    }
  }
  reconfigure({ locale, numberingSystem, outputCalendar } = {}) {
    const loc = this.loc.clone({ locale, numberingSystem, outputCalendar });
    return clone(this, { loc });
  }
  setLocale(locale) {
    return this.reconfigure({ locale });
  }
  set(values) {
    if (!this.isValid)
      return this;
    const normalized = normalizeObject(values, normalizeUnit), settingWeekStuff = !isUndefined(normalized.weekYear) || !isUndefined(normalized.weekNumber) || !isUndefined(normalized.weekday), containsOrdinal = !isUndefined(normalized.ordinal), containsGregorYear = !isUndefined(normalized.year), containsGregorMD = !isUndefined(normalized.month) || !isUndefined(normalized.day), containsGregor = containsGregorYear || containsGregorMD, definiteWeekDef = normalized.weekYear || normalized.weekNumber;
    if ((containsGregor || containsOrdinal) && definiteWeekDef) {
      throw new ConflictingSpecificationError("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
    }
    if (containsGregorMD && containsOrdinal) {
      throw new ConflictingSpecificationError("Can't mix ordinal dates with month/day");
    }
    let mixed;
    if (settingWeekStuff) {
      mixed = weekToGregorian(__spreadValues(__spreadValues({}, gregorianToWeek(this.c)), normalized));
    } else if (!isUndefined(normalized.ordinal)) {
      mixed = ordinalToGregorian(__spreadValues(__spreadValues({}, gregorianToOrdinal(this.c)), normalized));
    } else {
      mixed = __spreadValues(__spreadValues({}, this.toObject()), normalized);
      if (isUndefined(normalized.day)) {
        mixed.day = Math.min(daysInMonth(mixed.year, mixed.month), mixed.day);
      }
    }
    const [ts, o] = objToTS(mixed, this.o, this.zone);
    return clone(this, { ts, o });
  }
  plus(duration) {
    if (!this.isValid)
      return this;
    const dur = Duration.fromDurationLike(duration);
    return clone(this, adjustTime(this, dur));
  }
  minus(duration) {
    if (!this.isValid)
      return this;
    const dur = Duration.fromDurationLike(duration).negate();
    return clone(this, adjustTime(this, dur));
  }
  startOf(unit) {
    if (!this.isValid)
      return this;
    const o = {}, normalizedUnit = Duration.normalizeUnit(unit);
    switch (normalizedUnit) {
      case "years":
        o.month = 1;
      case "quarters":
      case "months":
        o.day = 1;
      case "weeks":
      case "days":
        o.hour = 0;
      case "hours":
        o.minute = 0;
      case "minutes":
        o.second = 0;
      case "seconds":
        o.millisecond = 0;
        break;
    }
    if (normalizedUnit === "weeks") {
      o.weekday = 1;
    }
    if (normalizedUnit === "quarters") {
      const q = Math.ceil(this.month / 3);
      o.month = (q - 1) * 3 + 1;
    }
    return this.set(o);
  }
  endOf(unit) {
    return this.isValid ? this.plus({ [unit]: 1 }).startOf(unit).minus(1) : this;
  }
  toFormat(fmt, opts = {}) {
    return this.isValid ? Formatter.create(this.loc.redefaultToEN(opts)).formatDateTimeFromString(this, fmt) : INVALID;
  }
  toLocaleString(formatOpts = DATE_SHORT, opts = {}) {
    return this.isValid ? Formatter.create(this.loc.clone(opts), formatOpts).formatDateTime(this) : INVALID;
  }
  toLocaleParts(opts = {}) {
    return this.isValid ? Formatter.create(this.loc.clone(opts), opts).formatDateTimeParts(this) : [];
  }
  toISO({
    format = "extended",
    suppressSeconds = false,
    suppressMilliseconds = false,
    includeOffset = true
  } = {}) {
    if (!this.isValid) {
      return null;
    }
    const ext = format === "extended";
    let c2 = toISODate(this, ext);
    c2 += "T";
    c2 += toISOTime(this, ext, suppressSeconds, suppressMilliseconds, includeOffset);
    return c2;
  }
  toISODate({ format = "extended" } = {}) {
    if (!this.isValid) {
      return null;
    }
    return toISODate(this, format === "extended");
  }
  toISOWeekDate() {
    return toTechFormat(this, "kkkk-'W'WW-c");
  }
  toISOTime({
    suppressMilliseconds = false,
    suppressSeconds = false,
    includeOffset = true,
    includePrefix = false,
    format = "extended"
  } = {}) {
    if (!this.isValid) {
      return null;
    }
    let c2 = includePrefix ? "T" : "";
    return c2 + toISOTime(this, format === "extended", suppressSeconds, suppressMilliseconds, includeOffset);
  }
  toRFC2822() {
    return toTechFormat(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", false);
  }
  toHTTP() {
    return toTechFormat(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
  }
  toSQLDate() {
    if (!this.isValid) {
      return null;
    }
    return toISODate(this, true);
  }
  toSQLTime({ includeOffset = true, includeZone = false, includeOffsetSpace = true } = {}) {
    let fmt = "HH:mm:ss.SSS";
    if (includeZone || includeOffset) {
      if (includeOffsetSpace) {
        fmt += " ";
      }
      if (includeZone) {
        fmt += "z";
      } else if (includeOffset) {
        fmt += "ZZ";
      }
    }
    return toTechFormat(this, fmt, true);
  }
  toSQL(opts = {}) {
    if (!this.isValid) {
      return null;
    }
    return `${this.toSQLDate()} ${this.toSQLTime(opts)}`;
  }
  toString() {
    return this.isValid ? this.toISO() : INVALID;
  }
  valueOf() {
    return this.toMillis();
  }
  toMillis() {
    return this.isValid ? this.ts : NaN;
  }
  toSeconds() {
    return this.isValid ? this.ts / 1e3 : NaN;
  }
  toUnixInteger() {
    return this.isValid ? Math.floor(this.ts / 1e3) : NaN;
  }
  toJSON() {
    return this.toISO();
  }
  toBSON() {
    return this.toJSDate();
  }
  toObject(opts = {}) {
    if (!this.isValid)
      return {};
    const base = __spreadValues({}, this.c);
    if (opts.includeConfig) {
      base.outputCalendar = this.outputCalendar;
      base.numberingSystem = this.loc.numberingSystem;
      base.locale = this.loc.locale;
    }
    return base;
  }
  toJSDate() {
    return new Date(this.isValid ? this.ts : NaN);
  }
  diff(otherDateTime, unit = "milliseconds", opts = {}) {
    if (!this.isValid || !otherDateTime.isValid) {
      return Duration.invalid("created by diffing an invalid DateTime");
    }
    const durOpts = __spreadValues({ locale: this.locale, numberingSystem: this.numberingSystem }, opts);
    const units = maybeArray(unit).map(Duration.normalizeUnit), otherIsLater = otherDateTime.valueOf() > this.valueOf(), earlier = otherIsLater ? this : otherDateTime, later = otherIsLater ? otherDateTime : this, diffed = diff(earlier, later, units, durOpts);
    return otherIsLater ? diffed.negate() : diffed;
  }
  diffNow(unit = "milliseconds", opts = {}) {
    return this.diff(DateTime.now(), unit, opts);
  }
  until(otherDateTime) {
    return this.isValid ? Interval.fromDateTimes(this, otherDateTime) : this;
  }
  hasSame(otherDateTime, unit) {
    if (!this.isValid)
      return false;
    const inputMs = otherDateTime.valueOf();
    const adjustedToZone = this.setZone(otherDateTime.zone, { keepLocalTime: true });
    return adjustedToZone.startOf(unit) <= inputMs && inputMs <= adjustedToZone.endOf(unit);
  }
  equals(other) {
    return this.isValid && other.isValid && this.valueOf() === other.valueOf() && this.zone.equals(other.zone) && this.loc.equals(other.loc);
  }
  toRelative(options = {}) {
    if (!this.isValid)
      return null;
    const base = options.base || DateTime.fromObject({}, { zone: this.zone }), padding = options.padding ? this < base ? -options.padding : options.padding : 0;
    let units = ["years", "months", "days", "hours", "minutes", "seconds"];
    let unit = options.unit;
    if (Array.isArray(options.unit)) {
      units = options.unit;
      unit = void 0;
    }
    return diffRelative(base, this.plus(padding), __spreadProps(__spreadValues({}, options), {
      numeric: "always",
      units,
      unit
    }));
  }
  toRelativeCalendar(options = {}) {
    if (!this.isValid)
      return null;
    return diffRelative(options.base || DateTime.fromObject({}, { zone: this.zone }), this, __spreadProps(__spreadValues({}, options), {
      numeric: "auto",
      units: ["years", "months", "days"],
      calendary: true
    }));
  }
  static min(...dateTimes) {
    if (!dateTimes.every(DateTime.isDateTime)) {
      throw new InvalidArgumentError("min requires all arguments be DateTimes");
    }
    return bestBy(dateTimes, (i2) => i2.valueOf(), Math.min);
  }
  static max(...dateTimes) {
    if (!dateTimes.every(DateTime.isDateTime)) {
      throw new InvalidArgumentError("max requires all arguments be DateTimes");
    }
    return bestBy(dateTimes, (i2) => i2.valueOf(), Math.max);
  }
  static fromFormatExplain(text, fmt, options = {}) {
    const { locale = null, numberingSystem = null } = options, localeToUse = Locale.fromOpts({
      locale,
      numberingSystem,
      defaultToEN: true
    });
    return explainFromTokens(localeToUse, text, fmt);
  }
  static fromStringExplain(text, fmt, options = {}) {
    return DateTime.fromFormatExplain(text, fmt, options);
  }
  static get DATE_SHORT() {
    return DATE_SHORT;
  }
  static get DATE_MED() {
    return DATE_MED;
  }
  static get DATE_MED_WITH_WEEKDAY() {
    return DATE_MED_WITH_WEEKDAY;
  }
  static get DATE_FULL() {
    return DATE_FULL;
  }
  static get DATE_HUGE() {
    return DATE_HUGE;
  }
  static get TIME_SIMPLE() {
    return TIME_SIMPLE;
  }
  static get TIME_WITH_SECONDS() {
    return TIME_WITH_SECONDS;
  }
  static get TIME_WITH_SHORT_OFFSET() {
    return TIME_WITH_SHORT_OFFSET;
  }
  static get TIME_WITH_LONG_OFFSET() {
    return TIME_WITH_LONG_OFFSET;
  }
  static get TIME_24_SIMPLE() {
    return TIME_24_SIMPLE;
  }
  static get TIME_24_WITH_SECONDS() {
    return TIME_24_WITH_SECONDS;
  }
  static get TIME_24_WITH_SHORT_OFFSET() {
    return TIME_24_WITH_SHORT_OFFSET;
  }
  static get TIME_24_WITH_LONG_OFFSET() {
    return TIME_24_WITH_LONG_OFFSET;
  }
  static get DATETIME_SHORT() {
    return DATETIME_SHORT;
  }
  static get DATETIME_SHORT_WITH_SECONDS() {
    return DATETIME_SHORT_WITH_SECONDS;
  }
  static get DATETIME_MED() {
    return DATETIME_MED;
  }
  static get DATETIME_MED_WITH_SECONDS() {
    return DATETIME_MED_WITH_SECONDS;
  }
  static get DATETIME_MED_WITH_WEEKDAY() {
    return DATETIME_MED_WITH_WEEKDAY;
  }
  static get DATETIME_FULL() {
    return DATETIME_FULL;
  }
  static get DATETIME_FULL_WITH_SECONDS() {
    return DATETIME_FULL_WITH_SECONDS;
  }
  static get DATETIME_HUGE() {
    return DATETIME_HUGE;
  }
  static get DATETIME_HUGE_WITH_SECONDS() {
    return DATETIME_HUGE_WITH_SECONDS;
  }
}
function friendlyDateTime(dateTimeish) {
  if (DateTime.isDateTime(dateTimeish)) {
    return dateTimeish;
  } else if (dateTimeish && dateTimeish.valueOf && isNumber(dateTimeish.valueOf())) {
    return DateTime.fromJSDate(dateTimeish);
  } else if (dateTimeish && typeof dateTimeish === "object") {
    return DateTime.fromObject(dateTimeish);
  } else {
    throw new InvalidArgumentError(`Unknown datetime argument: ${dateTimeish}, of type ${typeof dateTimeish}`);
  }
}
var Value_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$a = {
  props: {
    value: {
      required: true
    },
    type: {
      type: String
    }
  },
  computed: {
    reference() {
      return !!(this.value && this.value._id);
    },
    renderValue() {
      return this.value ? this.value.title || this.value.name || this.value : void 0;
    },
    date() {
      return DateTime.fromISO(this.value).toFormat("dd MMM yyyy");
    }
  },
  methods: {
    clicked(item) {
      this.$qik.dispatch("item:view", item);
    }
  }
};
function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
  return $options.reference ? (openBlock(), createElementBlock("a", {
    key: 0,
    onClick: _cache[0] || (_cache[0] = withModifiers(($event) => $options.clicked($props.value), ["stop", "prevent"]))
  }, toDisplayString($options.renderValue), 1)) : $props.type == "date" ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
    createTextVNode(toDisplayString($options.date), 1)
  ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [
    createTextVNode(toDisplayString($options.renderValue), 1)
  ], 64));
}
var ValueRenderer = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$a], ["__scopeId", "data-v-59c79a19"]]);
var TableCell_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$9 = {
  data() {
    return {
      component: null
    };
  },
  components: {
    ValueRenderer
  },
  async created() {
    var component;
    switch (this.column.renderer) {
      case "button":
        component = ButtonCell;
        break;
      case "thumbnail":
        component = ThumbnailCell;
        break;
    }
    this.component = component;
  },
  props: {
    column: {
      type: Object,
      required: true
    },
    row: {
      type: Object,
      required: true
    }
  },
  computed: {
    multiValue() {
      return Array.isArray(this.value);
    },
    complex() {
      if (this.multiValue)
        ;
    },
    renderer() {
      return this.column.renderer;
    },
    renderValue() {
      var value = this.value;
      if (value === void 0 || value === null) {
        return;
      }
      return value.title || value.name || value;
    },
    value() {
      var v = get_1(this.row, this.column.key);
      return v;
    }
  }
};
const _hoisted_1$7 = {
  key: 1,
  class: "table-cell"
};
const _hoisted_2$6 = { class: "value" };
const _hoisted_3$5 = { class: "value" };
const _hoisted_4$5 = /* @__PURE__ */ createTextVNode(", ");
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_value_renderer = resolveComponent("value-renderer");
  return $data.component ? (openBlock(), createBlock(resolveDynamicComponent($data.component), {
    key: 0,
    column: $props.column,
    row: $props.row,
    value: $options.value
  }, null, 8, ["column", "row", "value"])) : (openBlock(), createElementBlock("td", _hoisted_1$7, [
    $options.multiValue ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
      $options.complex ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList($options.value, (entry) => {
        return openBlock(), createElementBlock("span", _hoisted_2$6, [
          createVNode(_component_value_renderer, {
            type: $props.column.type,
            value: entry
          }, null, 8, ["type", "value"])
        ]);
      }), 256)) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList($options.value, (entry) => {
        return openBlock(), createElementBlock("span", _hoisted_3$5, [
          createVNode(_component_value_renderer, {
            type: $props.column.type,
            value: entry
          }, null, 8, ["type", "value"]),
          _hoisted_4$5
        ]);
      }), 256))
    ], 64)) : (openBlock(), createBlock(_component_value_renderer, {
      key: 1,
      type: $props.column.type,
      value: $options.value
    }, null, 8, ["type", "value"]))
  ]));
}
var TableCell = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$9], ["__scopeId", "data-v-3bb9fc86"]]);
const _sfc_main$8 = {
  components: {
    TableCell
  },
  props: {
    selected: {
      type: Boolean
    },
    row: {
      type: Object,
      required: true
    },
    columns: {
      type: Array,
      required: true
    },
    enableActions: {
      type: Boolean,
      default() {
        return false;
      }
    },
    enableSelection: {
      type: Boolean,
      default() {
        return true;
      }
    }
  },
  methods: {
    clickCell(column) {
      this.$emit("click:cell", { row: this.row, column });
      this.$emit("click:row", this.row);
    },
    clickActions(row) {
      console.log("click actions");
      this.$emit("click:actions", row);
    },
    clickSelect(row) {
      console.log("click select");
      this.$emit("click:select", row);
    }
  },
  computed: {
    classes() {
      var array = [];
      if (this.selected) {
        array.push("selected");
      }
      return array;
    }
  }
};
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ux_checkbox = resolveComponent("ux-checkbox");
  const _component_table_cell = resolveComponent("table-cell");
  const _component_ux_icon = resolveComponent("ux-icon");
  const _component_ux_button = resolveComponent("ux-button");
  return openBlock(), createElementBlock("tr", {
    class: normalizeClass([$options.classes, "table-row"])
  }, [
    renderSlot(_ctx.$slots, "default", {}, () => [
      $props.enableSelection ? (openBlock(), createElementBlock("th", {
        key: 0,
        class: "table-cell table-select first shrink",
        onClick: _cache[0] || (_cache[0] = withModifiers(($event) => $options.clickSelect($props.row), ["stop", "prevent"]))
      }, [
        createVNode(_component_ux_checkbox, { value: $props.selected }, null, 8, ["value"])
      ])) : createCommentVNode("", true),
      (openBlock(true), createElementBlock(Fragment, null, renderList($props.columns, (column) => {
        return openBlock(), createBlock(_component_table_cell, {
          onClick: withModifiers(($event) => $options.clickCell(column), ["stop", "prevent"]),
          column,
          row: $props.row
        }, null, 8, ["onClick", "column", "row"]);
      }), 256)),
      $props.enableActions ? (openBlock(), createElementBlock("th", {
        key: 1,
        class: "table-cell last shrink",
        onClick: _cache[1] || (_cache[1] = withModifiers(($event) => $options.clickActions($props.row), ["stop", "prevent"]))
      }, [
        createVNode(_component_ux_button, {
          size: "xs",
          icon: ""
        }, {
          default: withCtx(() => [
            createVNode(_component_ux_icon, { icon: "fa-ellipsis" })
          ]),
          _: 1
        })
      ])) : createCommentVNode("", true)
    ])
  ], 2);
}
var TableRow = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$8]]);
var RememberScrollMixin = {
  data() {
    return {
      scrollTop: 0
    };
  },
  methods: {
    updateScroll(e) {
      var scroller = this.$refs.scroll;
      scroller = scroller.$el || scroller;
      this.scrollTop = scroller.scrollTop;
    }
  },
  mounted() {
    var scroller = this.$refs.scroll;
    scroller = scroller.$el || scroller;
    scroller.addEventListener("scroll", this.updateScroll);
  },
  beforeUnmount() {
    var scroller = this.$refs.scroll;
    scroller = scroller.$el || scroller;
    scroller.removeEventListener("scroll", this.updateScroll);
  },
  activated() {
    var scroller = this.$refs.scroll;
    scroller = scroller.$el || scroller;
    scroller.scrollTop = this.scrollTop;
  }
};
var Table_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$7 = {
  mixins: [RememberScrollMixin],
  components: {
    TableRow,
    TableCell
  },
  watch: {
    rows() {
      this.$refs.scroll.scroll({
        top: 0,
        left: 0
      });
    }
  },
  props: {
    total: {
      type: Number
    },
    columns: {
      type: Array,
      default() {
        return [];
      }
    },
    rows: {
      type: Array,
      default() {
        return [];
      }
    },
    scrollable: {
      type: Boolean,
      default() {
        return true;
      }
    },
    enableActions: {
      type: Boolean,
      default() {
        return false;
      }
    },
    enableSelection: {
      type: Boolean,
      default() {
        return true;
      }
    },
    selection: {
      type: Array,
      default() {
        return [];
      }
    },
    selectAll: {
      type: Function
    },
    deselectAll: {
      type: Function
    }
  },
  computed: {
    selectionHash() {
      var self2 = this;
      return self2.selection.reduce(function(set, row) {
        var id = row._id || row.id;
        set[id] = row;
        return set;
      }, {});
    },
    pageSelected() {
      var self2 = this;
      if (!self2.rows || !self2.rows.length) {
        return;
      }
      return !self2.rows.some(function(row) {
        return !self2.selectionHash[row._id || row.id];
      });
    },
    renderColumns() {
      return this.columns.map(function(column) {
        var col = Object.assign({}, column);
        col.class = [];
        if (col.shrink) {
          col.class.push("shrink");
        }
        return col;
      });
    },
    renderRows() {
      return this.rows;
    },
    someSelectedOnPage() {
      return this.rows.some(this.isSelected);
    }
  },
  methods: {
    togglePage() {
      var self2 = this;
      if (self2.pageSelected) {
        self2.deselectPage();
      } else {
        self2.selectPage();
      }
    },
    selectPage() {
      var self2 = this;
      self2.$emit("select:multiple", self2.rows);
    },
    deselectPage() {
      var self2 = this;
      self2.$emit("deselect:multiple", self2.rows);
    },
    isSelected(row) {
      var self2 = this;
      var rowID = row._id || row.id;
      return self2.selection.some(function(r) {
        var rid = r._id || r.id;
        return r == row || rid == rowID;
      });
    },
    classes(row) {
      let array = [];
      if (this.isSelected(row)) {
        array.push("selected");
      }
      return array;
    },
    toggleSort(column) {
    },
    clickRow(row) {
      this.$emit("click:row", row);
    },
    clickCell({ row, column }) {
      this.$emit("click:cell", { row, column });
    },
    clickActions(row) {
      this.$emit("click:actions", row);
    },
    clickSelect(row) {
      this.$emit("select:row:toggle", row);
    }
  }
};
const _hoisted_1$6 = { class: "table-wrapper" };
const _hoisted_2$5 = {
  class: "table-scroll",
  ref: "scroll"
};
const _hoisted_3$4 = {
  key: 0,
  class: "first table-select shrink"
};
const _hoisted_4$4 = /* @__PURE__ */ createTextVNode(" Select Page ");
const _hoisted_5$1 = /* @__PURE__ */ createTextVNode(" Deselect Page ");
const _hoisted_6 = /* @__PURE__ */ createTextVNode(" Deselect All ");
const _hoisted_7 = ["onClick"];
const _hoisted_8 = {
  key: 1,
  class: "last shrink"
};
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ux_checkbox = resolveComponent("ux-checkbox");
  const _component_ux_list_item = resolveComponent("ux-list-item");
  const _component_ux_list = resolveComponent("ux-list");
  const _component_ux_menu = resolveComponent("ux-menu");
  const _component_table_row = resolveComponent("table-row");
  return openBlock(), createElementBlock("div", _hoisted_1$6, [
    createElementVNode("div", _hoisted_2$5, [
      createElementVNode("table", null, [
        createElementVNode("thead", null, [
          createElementVNode("tr", null, [
            $props.enableSelection ? (openBlock(), createElementBlock("th", _hoisted_3$4, [
              createVNode(_component_ux_menu, null, {
                activator: withCtx(({ on: on2 }) => [
                  createVNode(_component_ux_checkbox, mergeProps(toHandlers(on2), { value: $options.pageSelected }), null, 16, ["value"])
                ]),
                default: withCtx(() => [
                  createVNode(_component_ux_list, null, {
                    default: withCtx(() => [
                      createVNode(_component_ux_list_item, {
                        onClick: _cache[0] || (_cache[0] = ($event) => $options.selectPage())
                      }, {
                        default: withCtx(() => [
                          _hoisted_4$4
                        ]),
                        _: 1
                      }),
                      $options.someSelectedOnPage ? (openBlock(), createBlock(_component_ux_list_item, {
                        key: 0,
                        onClick: _cache[1] || (_cache[1] = ($event) => $options.deselectPage())
                      }, {
                        default: withCtx(() => [
                          _hoisted_5$1
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      $props.selectAll ? (openBlock(), createBlock(_component_ux_list_item, {
                        key: 1,
                        onClick: _cache[2] || (_cache[2] = ($event) => $props.selectAll())
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Select All (" + toDisplayString($props.total) + ") ", 1)
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      $props.deselectAll ? (openBlock(), createBlock(_component_ux_list_item, {
                        key: 2,
                        onClick: _cache[3] || (_cache[3] = ($event) => $props.deselectAll())
                      }, {
                        default: withCtx(() => [
                          _hoisted_6
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ])) : createCommentVNode("", true),
            (openBlock(true), createElementBlock(Fragment, null, renderList($options.renderColumns, (column) => {
              return openBlock(), createElementBlock("th", {
                onClick: ($event) => $options.toggleSort(column),
                class: normalizeClass(column.class)
              }, toDisplayString(column.title), 11, _hoisted_7);
            }), 256)),
            $props.enableActions ? (openBlock(), createElementBlock("th", _hoisted_8, [
              renderSlot(_ctx.$slots, "corner", {}, void 0, true)
            ])) : createCommentVNode("", true)
          ])
        ]),
        createElementVNode("tbody", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList($options.renderRows, (row) => {
            return openBlock(), createBlock(_component_table_row, {
              enableSelection: $props.enableSelection,
              enableActions: $props.enableActions,
              key: row._id,
              "onClick:cell": $options.clickCell,
              "onClick:row": $options.clickRow,
              "onClick:select": $options.clickSelect,
              "onClick:actions": $options.clickActions,
              selected: $options.isSelected(row),
              row,
              columns: $props.columns
            }, null, 8, ["enableSelection", "enableActions", "onClick:cell", "onClick:row", "onClick:select", "onClick:actions", "selected", "row", "columns"]);
          }), 128))
        ])
      ])
    ], 512)
  ]);
}
var NativeTable = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$7], ["__scopeId", "data-v-5a1f230c"]]);
function Selection(options) {
  options = options || {};
  Math.max(parseInt(options.minimum || 0), 0);
  let maximum = Math.max(parseInt(options.maximum || 0), 0);
  const service2 = EventDispatcher({});
  const selection = reactive([]);
  let hash = {};
  watch(selection, function() {
    recreateHash();
  });
  function recreateHash() {
    hash = selection.reduce(function(set, item) {
      var id = item._id || item.id;
      if (!id) {
        return;
      }
      set[id] = item;
      return set;
    }, {});
  }
  service2.isSelected = function(item) {
    return hash[item._id || item.id];
  };
  service2.select = function(item, ignoreDispatch) {
    if (service2.isSelected(item)) {
      return;
    }
    if (maximum) {
      if (selection.length >= maximum) {
        if (maximum === 1) {
          selection.length = 0;
        }
      }
    }
    selection.push(item);
    if (maximum) {
      if (selection.length > maximum) {
        selection.length = maximum;
        service2.dispatch("limit", maximum);
      }
    }
    if (!ignoreDispatch) {
      service2.dispatch("change", selection);
    }
  };
  service2.deselect = function(item, ignoreDispatch) {
    if (maximum === 1) {
      selection.length = 0;
      return;
    }
    var index2 = selection.findIndex(function(entry) {
      return entry._id && entry._id == item._id || entry.id && entry.id == item.id;
    });
    if (index2 == -1) {
      return;
    }
    selection.splice(index2, 1);
    if (!ignoreDispatch) {
      service2.dispatch("change", selection);
    }
  };
  service2.toggle = function(item, ignoreDispatch) {
    if (service2.isSelected(item)) {
      service2.deselect(item, ignoreDispatch);
    } else {
      service2.select(item, ignoreDispatch);
    }
  };
  service2.selectMultiple = function(array) {
    array.forEach(function(item) {
      service2.select(item, true);
    });
    service2.dispatch("change", selection);
  };
  service2.deselectMultiple = function(array) {
    array.forEach(function(item) {
      service2.deselect(item, true);
    });
    service2.dispatch("change", selection);
  };
  service2.setSelection = function(array) {
    selection.length = 0;
    setTimeout(function() {
      service2.selectMultiple(array);
    });
  };
  service2.deselectAll = function() {
    selection.length = 0;
    service2.dispatch("change", selection);
  };
  Object.defineProperty(service2, "items", {
    value: selection,
    writable: false
  });
  Object.defineProperty(service2, "hash", {
    get() {
      return hash;
    }
  });
  return service2;
}
var pager_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$6 = {
  props: {
    total: {
      type: Number,
      default() {
        return 0;
      }
    }
  },
  components: {
    NativeSelect
  },
  watch: {
    totalPages() {
      this.currentPage = 0;
    }
  },
  computed: {
    perPage: {
      get() {
        return this.page.size;
      },
      set(i2) {
        i2 = Math.max(i2, 1);
        this.page.size = i2;
        this.dispatch();
      }
    },
    pageField() {
      return {
        type: "integer",
        maximum: 1,
        minimum: 1,
        options: Array(this.totalPages).fill(1).map((x, y) => x + y)
      };
    },
    totalPages() {
      return Math.ceil(this.total / this.perPage);
    },
    startIndex() {
      return (this.currentPage - 1) * this.page.size;
    },
    displayStartIndex() {
      return this.total ? this.startIndex + 1 : 0;
    },
    endIndex() {
      return Math.min(this.startIndex + this.page.size, this.total);
    },
    currentPage: {
      get() {
        return this.page.index;
      },
      set(index2) {
        if (this.totalPages) {
          index2 = Math.min(this.totalPages, index2);
        }
        index2 = Math.max(index2, 1);
        this.page.index = index2;
        this.dispatch();
      }
    }
  },
  methods: {
    dispatch() {
      return this.$emit("update:page", this.page);
    },
    previousPage() {
      this.currentPage--;
    },
    nextPage() {
      this.currentPage++;
    }
  },
  data() {
    return {
      page: {
        size: 50,
        index: 1
      },
      perPageField: {
        minimum: 1,
        maximum: 1,
        options: [
          {
            title: "50 per page",
            value: 50
          },
          {
            title: "100 per page",
            value: 100
          },
          {
            title: "250 per page",
            value: 250
          },
          {
            title: "500 per page",
            value: 500
          }
        ]
      }
    };
  }
};
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_native_select = resolveComponent("native-select");
  const _component_flex_cell = resolveComponent("flex-cell");
  const _component_ux_icon = resolveComponent("ux-icon");
  const _component_ux_button = resolveComponent("ux-button");
  const _component_flex_row = resolveComponent("flex-row");
  return openBlock(), createBlock(_component_flex_row, {
    center: "",
    gap: ""
  }, {
    default: withCtx(() => [
      createVNode(_component_flex_cell, {
        shrink: "",
        class: "text"
      }, {
        default: withCtx(() => [
          createVNode(_component_native_select, {
            modelValue: $options.perPage,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $options.perPage = $event),
            field: $data.perPageField
          }, {
            default: withCtx(() => [
              _ctx.$device.breakpoint.xs ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                createTextVNode(toDisplayString($options.displayStartIndex) + "-" + toDisplayString($options.endIndex) + " of " + toDisplayString($props.total), 1)
              ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                createTextVNode("Showing " + toDisplayString($options.displayStartIndex) + " to " + toDisplayString($options.endIndex) + " of " + toDisplayString($props.total) + " total", 1)
              ], 64))
            ]),
            _: 1
          }, 8, ["modelValue", "field"])
        ]),
        _: 1
      }),
      createVNode(_component_flex_cell),
      $options.totalPages > 1 ? (openBlock(), createBlock(_component_flex_cell, {
        key: 0,
        shrink: ""
      }, {
        default: withCtx(() => [
          createVNode(_component_flex_row, {
            gap: "",
            center: ""
          }, {
            default: withCtx(() => [
              createVNode(_component_flex_cell, {
                shrink: "",
                class: "text"
              }, {
                default: withCtx(() => [
                  createVNode(_component_native_select, {
                    modelValue: $options.currentPage,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $options.currentPage = $event),
                    field: $options.pageField
                  }, {
                    default: withCtx(() => [
                      _ctx.$device.breakpoint.xs ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                        createTextVNode(toDisplayString($options.currentPage) + "/" + toDisplayString($options.totalPages), 1)
                      ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                        createTextVNode("Page " + toDisplayString($options.currentPage) + " of " + toDisplayString($options.totalPages), 1)
                      ], 64))
                    ]),
                    _: 1
                  }, 8, ["modelValue", "field"])
                ]),
                _: 1
              }),
              createVNode(_component_flex_cell, { shrink: "" }, {
                default: withCtx(() => [
                  createVNode(_component_ux_button, {
                    icon: "",
                    onClick: _cache[2] || (_cache[2] = ($event) => $options.previousPage())
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ux_icon, { icon: "fa-arrow-left" })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_flex_cell, { shrink: "" }, {
                default: withCtx(() => [
                  createVNode(_component_ux_button, {
                    icon: "",
                    onClick: _cache[3] || (_cache[3] = ($event) => $options.nextPage())
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ux_icon, { icon: "fa-arrow-right" })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      })) : createCommentVNode("", true)
    ]),
    _: 1
  });
}
var Pager = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6], ["__scopeId", "data-v-25ef1240"]]);
var browser_vue_vue_type_style_index_0_scoped_true_lang = "";
function defaultColumns(self2, type) {
  var columns = [];
  var ignoreTitle;
  switch (type) {
    case "image":
    case "video":
      columns.push({
        title: "",
        key: "_id",
        renderer: "thumbnail",
        shrink: true,
        fields: ["width", "height", "fileMeta.colors.colors[0]"]
      });
      break;
  }
  switch (type) {
    case "profile":
      ignoreTitle = true;
      columns.push({
        title: "First Name",
        key: "firstName"
      });
      columns.push({
        title: "Last Name",
        key: "lastName"
      });
      columns.push({
        title: "Gender",
        key: "gender"
      });
      columns.push({
        title: "Age",
        key: "age"
      });
      break;
    case "definition":
      columns.push({
        title: "Plural",
        key: "plural"
      });
      columns.push({
        title: "Defines Type",
        key: "definesType"
      });
      columns.push({
        title: "Database Key",
        key: "key"
      });
      columns.push({
        title: "Category",
        key: "category"
      });
      break;
    case "file":
    case "audio":
    case "image":
    case "video":
      ignoreTitle = true;
      columns.push({
        title: "Title",
        key: "title"
      });
      switch (type) {
        case "image":
        case "video":
          columns.push({
            title: "Width",
            key: "width",
            shrink: true
          });
          columns.push({
            title: "Height",
            key: "height",
            shrink: true
          });
          break;
      }
      columns.push({
        title: "Ext",
        key: "fileExtension",
        shrink: true
      });
      columns.push({
        title: "Mime Type",
        key: "fileMime"
      });
      columns.push({
        title: "File Type",
        key: "mediaIntegrationType",
        shrink: true
      });
      break;
  }
  if (!ignoreTitle) {
    columns.unshift({
      title: "Title",
      key: "title"
    });
  }
  switch (type) {
    case "file":
    case "audio":
    case "image":
    case "video":
      columns.push({
        title: "",
        key: "_id",
        renderer: "button",
        shrink: true,
        button: {
          size: "sm",
          text: "Download",
          icon: "fa-download",
          action(row) {
            return new Promise(async function(resolve, reject) {
              await self2.$qik.auth.ensureValidToken();
              var url = self2.$qik.files.downloadUrl(self2.basicType, row);
              window.open(url);
              resolve();
            });
          }
        }
      });
      break;
  }
  return columns;
}
let cancelInflight;
let typeCacheKey;
const _sfc_main$5 = {
  props: {
    view: {
      type: Object,
      default() {
        return {
          title: "List",
          key: "table"
        };
      }
    },
    type: {
      type: String,
      required: true
    },
    showFilters: {
      type: Boolean
    },
    search: {
      type: String,
      default: ""
    },
    options: {
      type: Object,
      default() {
        return {};
      }
    },
    cacheKey: {
      type: [String, Number]
    },
    modelValue: {
      type: Array,
      default() {
        return [];
      }
    },
    maximum: {
      type: Number,
      default() {
        return 0;
      }
    },
    selectionManager: {
      type: Object
    },
    enableActions: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Pager,
    NativeTable,
    FilterBuilder,
    Search
  },
  deactivated() {
    typeCacheKey = this.$qik.global.cacheKeys[this.type];
  },
  async activated() {
    var self2 = this;
    var nowCacheKey = self2.$qik.global.cacheKeys[self2.type];
    if (typeCacheKey != nowCacheKey) {
      typeCacheKey = nowCacheKey;
      self2.dataSource = await self2.load();
    }
  },
  async created() {
    var self2 = this;
    await Promise.all([
      new Promise(async function(resolve, reject) {
        var glossary = await self2.$qik.content.glossary({ hash: true });
        var definition = glossary[self2.type];
        self2.definition = definition;
        if (!definition) {
          return reject();
        }
        resolve();
      }),
      new Promise(async function(resolve, reject) {
        var dataSource = await self2.load();
        self2.dataSource = dataSource;
        resolve();
      })
    ]);
  },
  watch: {
    keywords(k) {
      this.$emit("update:search", k);
    },
    search(k) {
      this.keywords = k;
    },
    async change() {
      this.dataSource = await this.load();
    },
    loading() {
      this.$emit("loading", this.loading);
    },
    selectedItems(items) {
      this.$emit("update:modelValue", items);
    }
  },
  computed: {
    viewMode() {
      var view = this.view;
      switch (view.key) {
        case "list":
        case "table":
          return;
      }
      return view;
    },
    sort() {
      var defaultSort = {
        key: "title",
        direction: "asc",
        type: "string"
      };
      switch (this.basicType) {
        case "log":
          defaultSort = {
            key: "meta.created",
            direction: "dsc",
            type: "date"
          };
          break;
      }
      return defaultSort;
    },
    fields() {
      var allFields = [...this.definition.fields];
      var definedFields = this.definition.definedFields || [];
      if (definedFields.length) {
        var customFields = {
          title: `${this.definition.title}`,
          minimum: 1,
          maximum: 1,
          key: "data",
          asObject: true,
          type: "group",
          fields: definedFields
        };
        allFields.push(customFields);
      }
      var mapped = this.$qik.utils.mapFields(allFields).filter(function(field) {
        var isObject2 = field.type == "group" && field.asObject && (field.minimum == 1 && field.maximum == 1);
        return !isObject2;
      }).map(function(field) {
        field.title = field.titles.join(" > ");
        return field;
      }).sort(function(a2, b) {
        return a2.title < b.title ? -1 : 1;
      });
      return mapped;
    },
    deselectAllFunction() {
      return this.manager.items.length ? this.deselectAll : null;
    },
    selectedItems() {
      return this.manager.items.slice();
    },
    activeFilters() {
      var activeFilters = this.$qik.filter.activeFilters(this.filter);
      return activeFilters;
    },
    searching() {
      return this.loading && this.keywords.length;
    },
    title() {
      return this.definition.title;
    },
    plural() {
      return this.definition.plural;
    },
    selectFields() {
      return this.columns.map(function(column) {
        if (column.fields) {
          return [column.key, ...column.fields];
        }
        return column.key;
      }).flat();
    },
    columns() {
      let columns = [];
      columns = defaultColumns(this, this.basicType);
      var existingColumns = columns.reduce(function(set, column) {
        set[column.key] = 1;
        return set;
      }, {});
      var additionalFields = this.additionalFields;
      additionalFields.forEach(function(field) {
        if (!existingColumns[field.key]) {
          existingColumns[field.key] = 1;
          columns.push({
            title: field.title,
            key: field.path,
            type: field.type
          });
        }
      });
      var activeFilters = this.activeFilters;
      activeFilters.forEach(function(filter) {
        if (!existingColumns[filter.key]) {
          existingColumns[filter.key] = 1;
          columns.push({
            title: filter.key,
            key: filter.key
          });
        }
      });
      return columns;
    },
    filterChangeString() {
      var string = this.$qik.filter.filterChangeString(this.filter);
      return string;
    },
    change() {
      return `${JSON.stringify([this.page, this.sort, this.keywords, this.selectFields, this.type, this.filterChangeString])}-${this.cacheKey}-${this.$qik.global.cacheKeys[this.type]}`;
    },
    items() {
      return this.dataSource.items;
    },
    totalItems() {
      return this.dataSource.total;
    },
    basicType() {
      return this.definition ? this.definition.definesType || this.definition.key : this.type;
    },
    loadCriteria() {
      var self2 = this;
      var sort2 = self2.sort;
      var search = self2.keywords;
      var select = self2.selectFields;
      var page = self2.page;
      var filter = self2.filter;
      return {
        sort: sort2,
        search,
        select,
        page,
        filter
      };
    },
    fieldEnabled() {
      var self2 = this;
      return self2.columns.reduce(function(set, field) {
        set[field.key] = true;
        return set;
      }, {});
    }
  },
  methods: {
    toggleField(field) {
      var key = field.path;
      var index2 = this.additionalFields.findIndex(function(f) {
        return f.key == key;
      });
      if (index2 == -1) {
        this.additionalFields.push(field);
      } else {
        this.additionalFields.splice(index2, 1);
      }
    },
    ensureMeta(row) {
      if (!row.meta) {
        row.meta = {};
      }
      row.meta.type = this.basicType;
      row.meta.definition = this.definition.key;
      return row;
    },
    deselectAll() {
      this.manager.deselectAll();
    },
    async selectAll() {
      var self2 = this;
      self2.dataSource = await self2.load(true);
      var allItems = this.dataSource.all.map(function(_id) {
        var row = self2.ensureMeta({ _id });
        return row;
      });
      self2.manager.setSelection(allItems);
    },
    selectMultiple(rows) {
      rows = rows.map(this.ensureMeta);
      this.manager.selectMultiple(rows);
    },
    deselectMultiple(rows) {
      rows = rows.map(this.ensureMeta);
      this.manager.deselectMultiple(rows);
    },
    rowToggled(row) {
      this.toggle(row);
    },
    rowClicked(row) {
      this.$emit("click:row", row);
    },
    actionsClicked(row) {
      this.$emit("click:actions", row);
    },
    select(row) {
      this.ensureMeta(row);
      this.manager.select(row);
    },
    deselect(row) {
      this.manager.deselect(row);
    },
    isSelected(row) {
      return this.manager.isSelected(row);
    },
    toggle(row) {
      this.ensureMeta(row);
      this.manager.toggle(row);
    },
    async load(includeAll) {
      var self2 = this;
      self2.loading = true;
      if (cancelInflight) {
        cancelInflight();
        cancelInflight = null;
      }
      var loadCriteria = Object.assign({}, self2.loadCriteria);
      loadCriteria.includeAll = includeAll;
      const { promise, cancel } = await self2.$qik.content.list(self2.type, loadCriteria, { cancellable: true });
      cancelInflight = cancel;
      promise.then(function(res) {
        self2.loading = false;
      });
      promise.catch(function(err) {
      });
      const { data } = await promise;
      data.items.forEach(self2.ensureMeta);
      return data;
    }
  },
  data() {
    var manager = this.selectionManager;
    if (!manager) {
      manager = new Selection({ minimum: this.minimum, maximum: this.maximum });
    }
    if (this.modelValue) {
      manager.setSelection(this.modelValue);
    }
    return {
      definition: null,
      manager,
      loading: true,
      additionalFields: [],
      page: {
        size: 50,
        index: 1
      },
      filter: {
        operator: "and",
        filters: []
      },
      keywords: this.search,
      dataSource: null
    };
  }
};
const _withScopeId = (n2) => (pushScopeId("data-v-41c6f78a"), n2 = n2(), popScopeId(), n2);
const _hoisted_1$5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("p", null, null, -1));
const _hoisted_2$4 = { class: "footer" };
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ux_icon = resolveComponent("ux-icon");
  const _component_ux_button = resolveComponent("ux-button");
  const _component_ux_list_item = resolveComponent("ux-list-item");
  const _component_ux_list = resolveComponent("ux-list");
  const _component_ux_menu = resolveComponent("ux-menu");
  const _component_native_table = resolveComponent("native-table");
  const _component_flex_column = resolveComponent("flex-column");
  const _component_ux_panel_body = resolveComponent("ux-panel-body");
  const _component_ux_panel = resolveComponent("ux-panel");
  const _component_search = resolveComponent("search");
  const _component_filter_builder = resolveComponent("filter-builder");
  const _component_flex_body = resolveComponent("flex-body");
  const _component_flex_row = resolveComponent("flex-row");
  const _component_pager = resolveComponent("pager");
  const _component_flex_footer = resolveComponent("flex-footer");
  const _component_spinner = resolveComponent("spinner");
  return $data.definition ? (openBlock(), createBlock(_component_flex_column, {
    key: 0,
    class: "content-browser"
  }, {
    default: withCtx(() => [
      $data.dataSource ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        createVNode(_component_flex_column, {
          class: normalizeClass(["browser-body", { loading: $data.loading }])
        }, {
          default: withCtx(() => [
            createVNode(_component_flex_row, null, {
              default: withCtx(() => [
                $options.items.length ? (openBlock(), createBlock(_component_flex_column, { key: 0 }, {
                  default: withCtx(() => [
                    $options.viewMode && $options.viewMode.component ? (openBlock(), createBlock(resolveDynamicComponent($options.viewMode.component), {
                      key: 0,
                      selection: $data.manager.items,
                      items: $options.items,
                      "onClick:actions": $options.actionsClicked,
                      "onSelect:item:toggle": $options.rowToggled,
                      "onClick:item": $options.rowClicked
                    }, null, 8, ["selection", "items", "onClick:actions", "onSelect:item:toggle", "onClick:item"])) : (openBlock(), createBlock(_component_native_table, {
                      key: 1,
                      enableActions: $props.enableActions,
                      total: $options.totalItems,
                      selectAll: $options.selectAll,
                      deselectAll: $options.deselectAllFunction,
                      selection: $data.manager.items,
                      "onClick:row": $options.rowClicked,
                      "onClick:actions": $options.actionsClicked,
                      "onSelect:row:toggle": $options.rowToggled,
                      "onSelect:multiple": $options.selectMultiple,
                      "onDeselect:multiple": $options.deselectMultiple,
                      rows: $options.items,
                      columns: $options.columns
                    }, {
                      corner: withCtx(() => [
                        createVNode(_component_ux_menu, { right: "" }, {
                          activator: withCtx(({ on: on2 }) => [
                            createVNode(_component_ux_button, mergeProps({ icon: "" }, toHandlers(on2)), {
                              default: withCtx(() => [
                                createVNode(_component_ux_icon, { icon: "fa-cog" })
                              ]),
                              _: 2
                            }, 1040)
                          ]),
                          default: withCtx(() => [
                            createVNode(_component_ux_list, null, {
                              default: withCtx(() => [
                                (openBlock(true), createElementBlock(Fragment, null, renderList($options.fields, (field) => {
                                  return openBlock(), createBlock(_component_ux_list_item, {
                                    onClick: ($event) => $options.toggleField(field)
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_ux_icon, {
                                        icon: $options.fieldEnabled[field.path] ? "fa-check-square" : "fa-regular fa-square",
                                        left: ""
                                      }, null, 8, ["icon"]),
                                      createTextVNode(" " + toDisplayString(field.title), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"]);
                                }), 256))
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["enableActions", "total", "selectAll", "deselectAll", "selection", "onClick:row", "onClick:actions", "onSelect:row:toggle", "onSelect:multiple", "onDeselect:multiple", "rows", "columns"]))
                  ]),
                  _: 1
                })) : !$data.loading ? (openBlock(), createBlock(_component_flex_column, {
                  key: 1,
                  class: "empty",
                  center: ""
                }, {
                  default: withCtx(() => [
                    createVNode(_component_ux_panel, null, {
                      default: withCtx(() => [
                        createVNode(_component_ux_panel_body, null, {
                          default: withCtx(() => [
                            createElementVNode("div", null, "No " + toDisplayString($data.definition.plural) + " found.", 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                $props.showFilters ? (openBlock(), createBlock(_component_flex_column, {
                  key: 2,
                  class: "filter-column"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_flex_body, null, {
                      default: withCtx(() => [
                        createVNode(_component_search, {
                          modelValue: $data.keywords,
                          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.keywords = $event),
                          loading: $options.searching,
                          debounce: 500,
                          placeholder: "Keyword Search"
                        }, null, 8, ["modelValue", "loading"]),
                        _hoisted_1$5,
                        createVNode(_component_filter_builder, {
                          definition: $data.definition,
                          modelValue: $data.filter,
                          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.filter = $event)
                        }, null, 8, ["definition", "modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })) : createCommentVNode("", true)
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["class"]),
        createVNode(_component_flex_footer, null, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "footera", {}, void 0, true),
            createElementVNode("div", _hoisted_2$4, [
              createVNode(_component_pager, {
                page: $data.page,
                "onUpdate:page": _cache[2] || (_cache[2] = ($event) => $data.page = $event),
                total: $options.totalItems
              }, null, 8, ["page", "total"])
            ]),
            renderSlot(_ctx.$slots, "footerb", {}, void 0, true)
          ]),
          _: 3
        })
      ], 64)) : createCommentVNode("", true),
      $data.loading ? (openBlock(), createBlock(_component_spinner, {
        key: 1,
        large: ""
      })) : createCommentVNode("", true)
    ]),
    _: 3
  })) : createCommentVNode("", true);
}
var ContentBrowser = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5], ["__scopeId", "data-v-41c6f78a"]]);
var ModalMixin = {
  props: {
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  methods: {
    dismiss(error) {
      this.$emit("dismiss", error);
    },
    close(result) {
      this.$emit("close", result);
    }
  }
};
var Modal_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$4 = {
  props: {
    modal: {
      type: Object,
      required: true
    }
  },
  data() {
    return {};
  },
  methods: {
    blanketClick() {
      this.dismiss();
    },
    dismiss(err) {
      this.$qik.closeModal(this.modal.id);
      this.modal.reject(err);
    },
    close(value) {
      this.$qik.closeModal(this.modal.id);
      this.modal.resolve(value);
    }
  },
  computed: {
    componentProps() {
      return this.modal.componentProps || {};
    },
    style() {
      var styles = {};
      if (this.modal.style) {
        styles = Object.assign(styles, this.modal.style);
      }
      return styles;
    }
  }
};
const _hoisted_1$4 = { class: "modal-wrapper" };
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$4, [
    createElementVNode("div", {
      class: "modal-blanket",
      onClick: _cache[0] || (_cache[0] = (...args) => $options.blanketClick && $options.blanketClick(...args))
    }),
    createElementVNode("div", {
      class: "modal-content",
      style: normalizeStyle($options.style)
    }, [
      (openBlock(), createBlock(resolveDynamicComponent($props.modal.component), mergeProps({
        options: $props.modal.options
      }, $options.componentProps, {
        onClose: $options.close,
        onDismiss: $options.dismiss
      }), null, 16, ["options", "onClose", "onDismiss"]))
    ], 4)
  ]);
}
var QikModal = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4], ["__scopeId", "data-v-79d61460"]]);
var ConfirmModal_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$3 = {
  mixins: [ModalMixin]
};
const _hoisted_1$3 = { class: "padder" };
const _hoisted_2$3 = { class: "padder" };
const _hoisted_3$3 = /* @__PURE__ */ createTextVNode("Cancel");
const _hoisted_4$3 = /* @__PURE__ */ createTextVNode("Confirm");
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_flex_body = resolveComponent("flex-body");
  const _component_ux_button = resolveComponent("ux-button");
  const _component_flex_cell = resolveComponent("flex-cell");
  const _component_flex_row = resolveComponent("flex-row");
  const _component_flex_footer = resolveComponent("flex-footer");
  const _component_flex_column = resolveComponent("flex-column");
  return openBlock(), createBlock(_component_flex_column, { class: "wrapper" }, {
    default: withCtx(() => [
      createVNode(_component_flex_body, null, {
        default: withCtx(() => [
          createElementVNode("div", _hoisted_1$3, [
            createElementVNode("h5", null, toDisplayString(_ctx.options.title), 1),
            createElementVNode("div", null, toDisplayString(_ctx.options.description), 1)
          ])
        ]),
        _: 1
      }),
      createVNode(_component_flex_footer, null, {
        default: withCtx(() => [
          createElementVNode("div", _hoisted_2$3, [
            createVNode(_component_flex_row, null, {
              default: withCtx(() => [
                createVNode(_component_flex_cell, null, {
                  default: withCtx(() => [
                    createVNode(_component_ux_button, { onClick: _ctx.dismiss }, {
                      default: withCtx(() => [
                        _hoisted_3$3
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 1
                }),
                createVNode(_component_flex_cell, null, {
                  default: withCtx(() => [
                    createVNode(_component_ux_button, { onClick: _ctx.close }, {
                      default: withCtx(() => [
                        _hoisted_4$3
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
var QikConfirmModal = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__scopeId", "data-v-20b62981"]]);
var OptionsModal_vue_vue_type_style_index_0_lang = "";
const _sfc_main$2 = {
  mixins: [ModalMixin]
};
const _hoisted_1$2 = /* @__PURE__ */ createTextVNode(" Options ");
const _hoisted_2$2 = /* @__PURE__ */ createTextVNode(" Options ");
const _hoisted_3$2 = { class: "padder" };
const _hoisted_4$2 = /* @__PURE__ */ createTextVNode("Cancel");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("Confirm");
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_flex_header = resolveComponent("flex-header");
  const _component_flex_body = resolveComponent("flex-body");
  const _component_ux_button = resolveComponent("ux-button");
  const _component_flex_cell = resolveComponent("flex-cell");
  const _component_flex_spacer = resolveComponent("flex-spacer");
  const _component_flex_row = resolveComponent("flex-row");
  const _component_flex_footer = resolveComponent("flex-footer");
  const _component_flex_column = resolveComponent("flex-column");
  return openBlock(), createBlock(_component_flex_column, null, {
    default: withCtx(() => [
      createVNode(_component_flex_header, null, {
        default: withCtx(() => [
          _hoisted_1$2
        ]),
        _: 1
      }),
      createVNode(_component_flex_body, null, {
        default: withCtx(() => [
          _hoisted_2$2
        ]),
        _: 1
      }),
      createVNode(_component_flex_footer, null, {
        default: withCtx(() => [
          createElementVNode("div", _hoisted_3$2, [
            createVNode(_component_flex_row, null, {
              default: withCtx(() => [
                createVNode(_component_flex_cell, { shrink: "" }, {
                  default: withCtx(() => [
                    createVNode(_component_ux_button, { onClick: _ctx.dismiss }, {
                      default: withCtx(() => [
                        _hoisted_4$2
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 1
                }),
                createVNode(_component_flex_spacer),
                createVNode(_component_flex_cell, { shrink: "" }, {
                  default: withCtx(() => [
                    createVNode(_component_ux_button, { onClick: _ctx.close }, {
                      default: withCtx(() => [
                        _hoisted_5
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
var QikOptionsModal = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
var PromptModal_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1 = {
  mixins: [ModalMixin],
  data() {
    return {
      model: {}
    };
  },
  methods: {
    submit() {
      console.log("SUBMIT");
    }
  },
  computed: {
    fields() {
      return this.options.fields || [];
    }
  },
  created() {
    if (this.options.model) {
      this.model = this.options.model;
    }
  }
};
const _hoisted_1$1 = { class: "padder" };
const _hoisted_2$1 = { class: "padder" };
const _hoisted_3$1 = /* @__PURE__ */ createTextVNode("Cancel");
const _hoisted_4$1 = /* @__PURE__ */ createTextVNode("Confirm");
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ux_form = resolveComponent("ux-form");
  const _component_flex_body = resolveComponent("flex-body");
  const _component_ux_button = resolveComponent("ux-button");
  const _component_flex_cell = resolveComponent("flex-cell");
  const _component_flex_spacer = resolveComponent("flex-spacer");
  const _component_flex_row = resolveComponent("flex-row");
  const _component_flex_footer = resolveComponent("flex-footer");
  const _component_flex_column = resolveComponent("flex-column");
  return openBlock(), createElementBlock("form", {
    class: "wrapper",
    onSubmit: _cache[2] || (_cache[2] = withModifiers((...args) => $options.submit && $options.submit(...args), ["prevent", "stop"]))
  }, [
    createVNode(_component_flex_column, null, {
      default: withCtx(() => [
        createVNode(_component_flex_body, null, {
          default: withCtx(() => [
            createElementVNode("div", _hoisted_1$1, [
              createElementVNode("h5", null, toDisplayString(_ctx.options.title), 1),
              createElementVNode("div", null, toDisplayString(_ctx.options.description), 1),
              createVNode(_component_ux_form, {
                ref: "form",
                modelValue: $data.model,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.model = $event),
                fields: $options.fields
              }, null, 8, ["modelValue", "fields"])
            ])
          ]),
          _: 1
        }),
        createVNode(_component_flex_footer, null, {
          default: withCtx(() => [
            createElementVNode("div", _hoisted_2$1, [
              createVNode(_component_flex_row, null, {
                default: withCtx(() => [
                  createVNode(_component_flex_cell, { shrink: "" }, {
                    default: withCtx(() => [
                      createVNode(_component_ux_button, {
                        tag: "a",
                        onClick: _ctx.dismiss
                      }, {
                        default: withCtx(() => [
                          _hoisted_3$1
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_flex_spacer),
                  createVNode(_component_flex_cell, { shrink: "" }, {
                    default: withCtx(() => [
                      createVNode(_component_ux_button, {
                        type: "submit",
                        onClick: _cache[1] || (_cache[1] = ($event) => _ctx.close($data.model))
                      }, {
                        default: withCtx(() => [
                          _hoisted_4$1
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    })
  ], 32);
}
var QikPromptModal = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
var ContentModal_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = {
  components: {
    ContentBrowser,
    Search
  },
  mixins: [ModalMixin],
  async created() {
    var self2 = this;
    var glossary = await self2.$qik.content.glossary({ hash: true });
    self2.loading = false;
    var definition = glossary[self2.type];
    if (!definition) {
      self2.$qik.notify("You do not have the required permissions to list content of this type");
      self2.dismiss();
      return;
    }
    self2.definition = definition;
  },
  computed: {
    type() {
      return this.options.type;
    },
    title() {
      return this.definition.title;
    },
    plural() {
      return this.definition.plural;
    },
    maximum() {
      return this.options.maximum || 0;
    },
    browserOptions() {
      return {};
    }
  },
  data() {
    return {
      search: "",
      searching: false,
      definition: null,
      loading: true,
      model: this.options.model.slice()
    };
  },
  methods: {
    rowClicked(row) {
      this.$refs.browser.toggle(row);
    },
    selectionComplete(data) {
      this.close(this.model);
    }
  }
};
const _hoisted_1 = /* @__PURE__ */ createTextVNode(" Loading ");
const _hoisted_2 = { class: "header" };
const _hoisted_3 = { class: "font-muted font-sm" };
const _hoisted_4 = /* @__PURE__ */ createTextVNode("Done");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_flex_column = resolveComponent("flex-column");
  const _component_flex_cell = resolveComponent("flex-cell");
  const _component_search = resolveComponent("search");
  const _component_ux_button = resolveComponent("ux-button");
  const _component_flex_row = resolveComponent("flex-row");
  const _component_flex_header = resolveComponent("flex-header");
  const _component_content_browser = resolveComponent("content-browser");
  return openBlock(), createBlock(_component_flex_column, { class: "wrapper" }, {
    default: withCtx(() => [
      $data.loading ? (openBlock(), createBlock(_component_flex_column, { key: 0 }, {
        default: withCtx(() => [
          _hoisted_1
        ]),
        _: 1
      })) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
        $data.definition ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createVNode(_component_flex_header, null, {
            default: withCtx(() => [
              createElementVNode("div", _hoisted_2, [
                createVNode(_component_flex_row, {
                  vcenter: "",
                  gap: ""
                }, {
                  default: withCtx(() => [
                    createVNode(_component_flex_cell, { shrink: "" }, {
                      default: withCtx(() => [
                        createTextVNode(" Select " + toDisplayString($options.maximum == 1 ? $options.title : $options.plural), 1)
                      ]),
                      _: 1
                    }),
                    $options.maximum ? (openBlock(), createBlock(_component_flex_cell, { key: 0 }, {
                      default: withCtx(() => [
                        createElementVNode("span", _hoisted_3, "(" + toDisplayString($data.model.length) + " of " + toDisplayString($options.maximum) + ")", 1)
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    createVNode(_component_flex_cell, null, {
                      default: withCtx(() => [
                        createVNode(_component_search, {
                          modelValue: $data.search,
                          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.search = $event),
                          loading: $data.searching,
                          debounce: 500,
                          placeholder: "Search"
                        }, null, 8, ["modelValue", "loading"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_flex_cell, { shrink: "" }, {
                      default: withCtx(() => [
                        createVNode(_component_ux_button, {
                          color: "primary",
                          onClick: $options.selectionComplete
                        }, {
                          default: withCtx(() => [
                            _hoisted_4
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          createVNode(_component_content_browser, {
            ref: "browser",
            search: $data.search,
            "onClick:row": $options.rowClicked,
            maximum: _ctx.options.maximum,
            modelValue: $data.model,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.model = $event),
            type: _ctx.options.type,
            options: $options.browserOptions
          }, null, 8, ["search", "onClick:row", "maximum", "modelValue", "type", "options"])
        ], 64)) : createCommentVNode("", true)
      ], 64))
    ]),
    _: 1
  });
}
var QikContentModal = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-26046182"]]);
function device() {
  var service2 = reactive({
    mounted: false,
    screen: {
      width: 1024,
      height: 768
    },
    limits: {
      xs: 600,
      sm: 960,
      md: 1264,
      lg: 1904
    },
    breakpoint: {
      mobile: false,
      tablet: false,
      desktop: false,
      xs: false,
      sm: false,
      md: false,
      lg: false,
      xl: false,
      xsOnly: false,
      smOnly: false,
      smAndDown: false,
      smAndUp: false,
      mdOnly: false,
      mdAndDown: false,
      mdAndUp: false,
      lgOnly: false,
      lgAndDown: false,
      lgAndUp: false,
      xlOnly: false,
      point: 0
    }
  });
  var mounted;
  let WindowReference;
  service2.resize = function() {
    var width = Math.max(WindowReference.innerWidth || 0);
    var height = Math.max(WindowReference.innerHeight || 0);
    service2.screen = {
      width,
      height
    };
    var breakpoint = {
      mobile: false,
      tablet: false,
      desktop: false,
      xs: false,
      sm: false,
      md: false,
      lg: false,
      xl: false,
      xsOnly: false,
      smOnly: false,
      smAndDown: false,
      smAndUp: false,
      mdOnly: false,
      mdAndDown: false,
      mdAndUp: false,
      lgOnly: false,
      lgAndDown: false,
      lgAndUp: false,
      xlOnly: false,
      point: 0
    };
    var point = 0;
    if (width > service2.limits.xs) {
      point++;
    }
    if (width > service2.limits.sm) {
      point++;
    }
    if (width > service2.limits.md) {
      point++;
    }
    if (width > service2.limits.lg) {
      point++;
    }
    if (point < 1) {
      breakpoint.mobile = true;
      breakpoint.xs = true;
      breakpoint.xsOnly = true;
      breakpoint.smAndDown = true;
      breakpoint.mdAndDown = true;
      breakpoint.lgAndDown = true;
    }
    if (point == 1) {
      breakpoint.tablet = true;
      breakpoint.sm = true;
      breakpoint.smOnly = true;
      breakpoint.smAndDown = true;
      breakpoint.mdAndDown = true;
      breakpoint.lgAndDown = true;
      breakpoint.smAndUp = true;
    }
    if (point == 2) {
      breakpoint.desktop = true;
      breakpoint.md = true;
      breakpoint.mdOnly = true;
      breakpoint.mdAndDown = true;
      breakpoint.lgAndDown = true;
      breakpoint.smAndUp = true;
      breakpoint.mdAndUp = true;
    }
    if (point == 3) {
      breakpoint.desktop = true;
      breakpoint.lg = true;
      breakpoint.lgOnly = true;
      breakpoint.lgAndDown = true;
      breakpoint.smAndUp = true;
      breakpoint.mdAndUp = true;
      breakpoint.lgAndUp = true;
    }
    if (point > 3) {
      breakpoint.desktop = true;
      breakpoint.xl = true;
      breakpoint.xlOnly = true;
      breakpoint.smAndUp = true;
      breakpoint.mdAndUp = true;
      breakpoint.lgAndUp = true;
    }
    service2.point = point;
    service2.breakpoint = breakpoint;
  };
  service2.mount = function(window2) {
    if (mounted) {
      return;
    }
    WindowReference = window2;
    service2.resize();
    mounted = true;
    service2.mounted = true;
    WindowReference.addEventListener("resize", service2.resize);
  };
  service2.unmount = function() {
    WindowReference.removeEventListener("resize", service2.resize);
    WindowReference = false;
    mounted = false;
    service2.mounted = false;
  };
  return service2;
}
const versionName = `qik vue ui ${version$1}`;
const defaultComponents = {
  FlexColumn,
  FlexBody,
  FlexHeader,
  FlexFooter,
  FlexCell,
  FlexSpacer,
  FlexRow,
  UxPanel: Panel,
  UxPanelBody: PanelBody,
  UxPanelHeader: PanelHeader,
  UxPanelFooter: PanelFooter,
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
  QikModal
};
const QikUI = {
  install(Vue, qik) {
    console.log(versionName);
    qik.modals = reactive([]);
    qik.modal = function(modal) {
      return new Promise(function(resolve, reject) {
        modal.id = qik.modals.length;
        modal.resolve = resolve;
        modal.reject = reject;
        qik.modals.splice(modal.id, 0, modal);
      });
    };
    qik.browse = function(type, options) {
      options = options || {};
      options.type = type;
      options.model = options.model || [];
      return qik.modal({
        component: QikContentModal,
        options
      });
    };
    qik.options = function(choices, title, description) {
      return qik.modal({
        component: QikOptionsModal,
        options: {
          title,
          description,
          choices
        }
      });
    };
    qik.prompt = function(fields, options) {
      options = options || {};
      options.model = options.model || {};
      options.fields = fields;
      return qik.modal({
        component: QikPromptModal,
        options
      });
    };
    qik.confirm = function(title, options) {
      options = options || {};
      options.title = title;
      return qik.modal({
        component: QikConfirmModal,
        options
      });
    };
    qik.closeModal = function(id) {
      var modal = qik.modals.find(function(modal2) {
        return modal2.id == id;
      });
      var index2 = qik.modals.indexOf(modal);
      qik.modals.splice(index2, 1);
    };
    for (const prop in defaultComponents) {
      const component = defaultComponents[prop];
      Vue.component(prop, component);
    }
  }
};
export { CodeEditor, ContentBrowser, device as Device, FlexBody, FlexCell, FlexColumn, FlexFooter, FlexHeader, FlexRow, FlexSpacer, ModalMixin, NativeSelect, Panel, PanelBody, PanelFooter, PanelHeader, ProgressBar, QikConfirmModal, QikContentModal, QikModal, QikOptionsModal, QikPromptModal, QikUI, RememberScrollMixin, Search, Selection, Spinner, UXButton, UXCheckbox, UXForm, UXFormField, UXIcon, UXImage, UXLink, UXList, UXListItem, UXMenu, UXRender, UXRenderField, UXSwitch, UXTab, UXTabset };
//# sourceMappingURL=lib.es.js.map