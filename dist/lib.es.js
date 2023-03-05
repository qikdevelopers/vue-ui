import './style.css';
import { openBlock as o, createElementBlock as d, renderSlot as W, resolveComponent as y, normalizeClass as R, Fragment as w, createBlock as k, withCtx as m, createVNode as h, renderList as L, toDisplayString as b, createCommentVNode as _, withDirectives as Y, resolveDynamicComponent as gt, vShow as rr, withModifiers as G, createTextVNode as S, createElementVNode as x, h as ti, mergeProps as pi, toHandlers as Js, vModelSelect as Mt, pushScopeId as bt, popScopeId as kt, normalizeStyle as vt, Teleport as uo, vModelText as ge, withKeys as ve, TransitionGroup as co, defineComponent as fo, nextTick as Xs, vModelDynamic as Ln, reactive as yi, watch as mo } from "vue";
import { EventDispatcher as ho } from "@qikdev/sdk";
const po = "0.2.58";
const V = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, s] of t)
    n[i] = s;
  return n;
}, yo = {}, _o = { class: "flex-column" };
function go(e, t, n, i, s, r) {
  return o(), d("div", _o, [
    W(e.$slots, "default", {}, void 0, !0)
  ]);
}
const vo = /* @__PURE__ */ V(yo, [["render", go], ["__scopeId", "data-v-71e77c4f"]]);
const bo = {}, ko = { class: "flex-column-body" };
function xo(e, t, n, i, s, r) {
  return o(), d("div", ko, [
    W(e.$slots, "default", {}, void 0, !0)
  ]);
}
const wo = /* @__PURE__ */ V(bo, [["render", xo], ["__scopeId", "data-v-ab49c425"]]);
const So = {}, To = { class: "flex-column-header" };
function Oo(e, t, n, i, s, r) {
  return o(), d("div", To, [
    W(e.$slots, "default", {}, void 0, !0)
  ]);
}
const Vo = /* @__PURE__ */ V(So, [["render", Oo], ["__scopeId", "data-v-968bcded"]]);
const Ao = {}, Co = { class: "flex-column-footer" };
function Eo(e, t, n, i, s, r) {
  return o(), d("div", Co, [
    W(e.$slots, "default", {}, void 0, !0)
  ]);
}
const Mo = /* @__PURE__ */ V(Ao, [["render", Eo], ["__scopeId", "data-v-941966e2"]]);
const Io = {}, Do = { class: "flex-cell" };
function Fo(e, t, n, i, s, r) {
  return o(), d("div", Do, [
    W(e.$slots, "default", {}, void 0, !0)
  ]);
}
const $o = /* @__PURE__ */ V(Io, [["render", Fo], ["__scopeId", "data-v-c7bb49df"]]);
const No = {}, Lo = { class: "flex-row" };
function Po(e, t, n, i, s, r) {
  return o(), d("div", Lo, [
    W(e.$slots, "default", {}, void 0, !0)
  ]);
}
const Uo = /* @__PURE__ */ V(No, [["render", Po], ["__scopeId", "data-v-b6434689"]]);
const jo = {}, Ro = { class: "flex-spacer" };
function Bo(e, t, n, i, s, r) {
  return o(), d("div", Ro);
}
const zo = /* @__PURE__ */ V(jo, [["render", Bo], ["__scopeId", "data-v-f42ac625"]]);
const Ho = {}, qo = { class: "panel" };
function Go(e, t, n, i, s, r) {
  return o(), d("div", qo, [
    W(e.$slots, "default", {}, void 0, !0)
  ]);
}
const Wo = /* @__PURE__ */ V(Ho, [["render", Go], ["__scopeId", "data-v-d5c9d9ec"]]);
const Zo = {}, Ko = { class: "panel-body" };
function Yo(e, t, n, i, s, r) {
  return o(), d("div", Ko, [
    W(e.$slots, "default", {}, void 0, !0)
  ]);
}
const Jo = /* @__PURE__ */ V(Zo, [["render", Yo], ["__scopeId", "data-v-53a6d4be"]]);
const Xo = {}, Qo = { class: "panel-header" };
function eu(e, t, n, i, s, r) {
  return o(), d("div", Qo, [
    W(e.$slots, "default", {}, void 0, !0)
  ]);
}
const tu = /* @__PURE__ */ V(Xo, [["render", eu], ["__scopeId", "data-v-12bf7f04"]]);
const nu = {}, ru = { class: "panel-footer" };
function iu(e, t, n, i, s, r) {
  return o(), d("div", ru, [
    W(e.$slots, "default", {}, void 0, !0)
  ]);
}
const su = /* @__PURE__ */ V(nu, [["render", iu], ["__scopeId", "data-v-d8937de9"]]);
const lu = {
  props: {
    vertical: {
      type: Boolean
    },
    inline: {
      type: Boolean
    }
  },
  data() {
    return {
      activeIndex: 0
    };
  },
  methods: {
    select(e) {
      this.activeIndex = e;
    }
  },
  computed: {
    menuRequired() {
      return this.tabs.length > 1;
    },
    tabs() {
      return this.$slots.default().map(function(n) {
        var s;
        if (!(!n.props || ((s = n.props) == null ? void 0 : s.enabled) === !1))
          return n;
      }).filter(Boolean);
    }
  }
}, au = ["onClick"], ou = ["onClick"];
function uu(e, t, n, i, s, r) {
  const l = y("flex-body"), a = y("flex-column"), u = y("flex-row"), c = y("flex-header");
  return o(), d("div", {
    class: R(["ux-tabset", { vertical: n.vertical, horizontal: !n.vertical, inline: n.inline, block: !n.inline }])
  }, [
    n.vertical ? (o(), d(w, { key: 0 }, [
      r.menuRequired ? (o(), k(a, {
        key: 0,
        class: "tabset-menu"
      }, {
        default: m(() => [
          h(l, null, {
            default: m(() => [
              (o(!0), d(w, null, L(r.tabs, (f, p) => (o(), d("a", {
                class: R({ active: p === s.activeIndex }),
                key: `tab-link-${f.props.heading}`,
                onClick: (g) => r.select(p)
              }, b(f.props.heading), 11, au))), 128))
            ]),
            _: 1
          })
        ]),
        _: 1
      })) : _("", !0),
      h(a, null, {
        default: m(() => [
          (o(!0), d(w, null, L(r.tabs, (f, p) => Y((o(), k(a, {
            key: `tab-panel-${f.props.heading}`
          }, {
            default: m(() => [
              (o(), k(gt(f)))
            ]),
            _: 2
          }, 1024)), [
            [rr, p === s.activeIndex]
          ])), 128))
        ]),
        _: 1
      })
    ], 64)) : (o(), d(w, { key: 1 }, [
      r.menuRequired ? (o(), k(c, {
        key: 0,
        class: "tabset-menu"
      }, {
        default: m(() => [
          h(u, null, {
            default: m(() => [
              (o(!0), d(w, null, L(r.tabs, (f, p) => (o(), d("a", {
                class: R({ active: p === s.activeIndex }),
                key: `tab-link-${f.props.heading}`,
                onClick: (g) => r.select(p)
              }, b(f.props.heading), 11, ou))), 128))
            ]),
            _: 1
          })
        ]),
        _: 1
      })) : _("", !0),
      h(a, null, {
        default: m(() => [
          (o(!0), d(w, null, L(r.tabs, (f, p) => Y((o(), k(a, {
            key: `tab-panel-${f.props.heading}`
          }, {
            default: m(() => [
              (o(), k(gt(f)))
            ]),
            _: 2
          }, 1024)), [
            [rr, p === s.activeIndex]
          ])), 128))
        ]),
        _: 1
      })
    ], 64))
  ], 2);
}
const du = /* @__PURE__ */ V(lu, [["render", uu], ["__scopeId", "data-v-d37d6020"]]), cu = {
  props: {
    heading: {
      type: String,
      required: !0
    },
    enabled: {
      type: Boolean,
      default: !0
    }
  },
  data() {
    return {
      isActive: !1
    };
  },
  computed: {
    active: {
      get() {
        return this.isActive;
      },
      set(e) {
        this.isActive = e;
      }
    }
  }
};
function fu(e, t, n, i, s, r) {
  const l = y("flex-column");
  return o(), k(l, null, {
    default: m(() => [
      W(e.$slots, "default")
    ]),
    _: 3
  });
}
const mu = /* @__PURE__ */ V(cu, [["render", fu]]);
var Pn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, hu = Array.isArray, Tn = hu, pu = typeof Pn == "object" && Pn && Pn.Object === Object && Pn, Qs = pu, yu = Qs, _u = typeof self == "object" && self && self.Object === Object && self, gu = yu || _u || Function("return this")(), On = gu, vu = On, bu = vu.Symbol, _i = bu, Pi = _i, el = Object.prototype, ku = el.hasOwnProperty, xu = el.toString, an = Pi ? Pi.toStringTag : void 0;
function wu(e) {
  var t = ku.call(e, an), n = e[an];
  try {
    e[an] = void 0;
    var i = !0;
  } catch {
  }
  var s = xu.call(e);
  return i && (t ? e[an] = n : delete e[an]), s;
}
var Su = wu, Tu = Object.prototype, Ou = Tu.toString;
function Vu(e) {
  return Ou.call(e);
}
var Au = Vu, Ui = _i, Cu = Su, Eu = Au, Mu = "[object Null]", Iu = "[object Undefined]", ji = Ui ? Ui.toStringTag : void 0;
function Du(e) {
  return e == null ? e === void 0 ? Iu : Mu : ji && ji in Object(e) ? Cu(e) : Eu(e);
}
var Vn = Du;
function Fu(e) {
  return e != null && typeof e == "object";
}
var An = Fu, $u = Vn, Nu = An, Lu = "[object Symbol]";
function Pu(e) {
  return typeof e == "symbol" || Nu(e) && $u(e) == Lu;
}
var _r = Pu, Uu = Tn, ju = _r, Ru = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Bu = /^\w*$/;
function zu(e, t) {
  if (Uu(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || ju(e) ? !0 : Bu.test(e) || !Ru.test(e) || t != null && e in Object(t);
}
var Hu = zu;
function qu(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var gr = qu, Gu = Vn, Wu = gr, Zu = "[object AsyncFunction]", Ku = "[object Function]", Yu = "[object GeneratorFunction]", Ju = "[object Proxy]";
function Xu(e) {
  if (!Wu(e))
    return !1;
  var t = Gu(e);
  return t == Ku || t == Yu || t == Zu || t == Ju;
}
var tl = Xu, Qu = On, ed = Qu["__core-js_shared__"], td = ed, Cr = td, Ri = function() {
  var e = /[^.]+$/.exec(Cr && Cr.keys && Cr.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function nd(e) {
  return !!Ri && Ri in e;
}
var rd = nd, id = Function.prototype, sd = id.toString;
function ld(e) {
  if (e != null) {
    try {
      return sd.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var ad = ld, od = tl, ud = rd, dd = gr, cd = ad, fd = /[\\^$.*+?()[\]{}|]/g, md = /^\[object .+?Constructor\]$/, hd = Function.prototype, pd = Object.prototype, yd = hd.toString, _d = pd.hasOwnProperty, gd = RegExp(
  "^" + yd.call(_d).replace(fd, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function vd(e) {
  if (!dd(e) || ud(e))
    return !1;
  var t = od(e) ? gd : md;
  return t.test(cd(e));
}
var bd = vd;
function kd(e, t) {
  return e == null ? void 0 : e[t];
}
var xd = kd, wd = bd, Sd = xd;
function Td(e, t) {
  var n = Sd(e, t);
  return wd(n) ? n : void 0;
}
var nl = Td, Od = nl, Vd = Od(Object, "create"), vr = Vd, Bi = vr;
function Ad() {
  this.__data__ = Bi ? Bi(null) : {}, this.size = 0;
}
var Cd = Ad;
function Ed(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Md = Ed, Id = vr, Dd = "__lodash_hash_undefined__", Fd = Object.prototype, $d = Fd.hasOwnProperty;
function Nd(e) {
  var t = this.__data__;
  if (Id) {
    var n = t[e];
    return n === Dd ? void 0 : n;
  }
  return $d.call(t, e) ? t[e] : void 0;
}
var Ld = Nd, Pd = vr, Ud = Object.prototype, jd = Ud.hasOwnProperty;
function Rd(e) {
  var t = this.__data__;
  return Pd ? t[e] !== void 0 : jd.call(t, e);
}
var Bd = Rd, zd = vr, Hd = "__lodash_hash_undefined__";
function qd(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = zd && t === void 0 ? Hd : t, this;
}
var Gd = qd, Wd = Cd, Zd = Md, Kd = Ld, Yd = Bd, Jd = Gd;
function Xt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
Xt.prototype.clear = Wd;
Xt.prototype.delete = Zd;
Xt.prototype.get = Kd;
Xt.prototype.has = Yd;
Xt.prototype.set = Jd;
var Xd = Xt;
function Qd() {
  this.__data__ = [], this.size = 0;
}
var ec = Qd;
function tc(e, t) {
  return e === t || e !== e && t !== t;
}
var nc = tc, rc = nc;
function ic(e, t) {
  for (var n = e.length; n--; )
    if (rc(e[n][0], t))
      return n;
  return -1;
}
var br = ic, sc = br, lc = Array.prototype, ac = lc.splice;
function oc(e) {
  var t = this.__data__, n = sc(t, e);
  if (n < 0)
    return !1;
  var i = t.length - 1;
  return n == i ? t.pop() : ac.call(t, n, 1), --this.size, !0;
}
var uc = oc, dc = br;
function cc(e) {
  var t = this.__data__, n = dc(t, e);
  return n < 0 ? void 0 : t[n][1];
}
var fc = cc, mc = br;
function hc(e) {
  return mc(this.__data__, e) > -1;
}
var pc = hc, yc = br;
function _c(e, t) {
  var n = this.__data__, i = yc(n, e);
  return i < 0 ? (++this.size, n.push([e, t])) : n[i][1] = t, this;
}
var gc = _c, vc = ec, bc = uc, kc = fc, xc = pc, wc = gc;
function Qt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
Qt.prototype.clear = vc;
Qt.prototype.delete = bc;
Qt.prototype.get = kc;
Qt.prototype.has = xc;
Qt.prototype.set = wc;
var Sc = Qt, Tc = nl, Oc = On, Vc = Tc(Oc, "Map"), Ac = Vc, zi = Xd, Cc = Sc, Ec = Ac;
function Mc() {
  this.size = 0, this.__data__ = {
    hash: new zi(),
    map: new (Ec || Cc)(),
    string: new zi()
  };
}
var Ic = Mc;
function Dc(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var Fc = Dc, $c = Fc;
function Nc(e, t) {
  var n = e.__data__;
  return $c(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
var kr = Nc, Lc = kr;
function Pc(e) {
  var t = Lc(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var Uc = Pc, jc = kr;
function Rc(e) {
  return jc(this, e).get(e);
}
var Bc = Rc, zc = kr;
function Hc(e) {
  return zc(this, e).has(e);
}
var qc = Hc, Gc = kr;
function Wc(e, t) {
  var n = Gc(this, e), i = n.size;
  return n.set(e, t), this.size += n.size == i ? 0 : 1, this;
}
var Zc = Wc, Kc = Ic, Yc = Uc, Jc = Bc, Xc = qc, Qc = Zc;
function en(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
en.prototype.clear = Kc;
en.prototype.delete = Yc;
en.prototype.get = Jc;
en.prototype.has = Xc;
en.prototype.set = Qc;
var ef = en, rl = ef, tf = "Expected a function";
function gi(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(tf);
  var n = function() {
    var i = arguments, s = t ? t.apply(this, i) : i[0], r = n.cache;
    if (r.has(s))
      return r.get(s);
    var l = e.apply(this, i);
    return n.cache = r.set(s, l) || r, l;
  };
  return n.cache = new (gi.Cache || rl)(), n;
}
gi.Cache = rl;
var nf = gi, rf = nf, sf = 500;
function lf(e) {
  var t = rf(e, function(i) {
    return n.size === sf && n.clear(), i;
  }), n = t.cache;
  return t;
}
var af = lf, of = af, uf = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, df = /\\(\\)?/g, cf = of(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(uf, function(n, i, s, r) {
    t.push(s ? r.replace(df, "$1") : i || n);
  }), t;
}), ff = cf;
function mf(e, t) {
  for (var n = -1, i = e == null ? 0 : e.length, s = Array(i); ++n < i; )
    s[n] = t(e[n], n, e);
  return s;
}
var il = mf, Hi = _i, hf = il, pf = Tn, yf = _r, _f = 1 / 0, qi = Hi ? Hi.prototype : void 0, Gi = qi ? qi.toString : void 0;
function sl(e) {
  if (typeof e == "string")
    return e;
  if (pf(e))
    return hf(e, sl) + "";
  if (yf(e))
    return Gi ? Gi.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -_f ? "-0" : t;
}
var gf = sl, vf = gf;
function bf(e) {
  return e == null ? "" : vf(e);
}
var vi = bf, kf = Tn, xf = Hu, wf = ff, Sf = vi;
function Tf(e, t) {
  return kf(e) ? e : xf(e, t) ? [e] : wf(Sf(e));
}
var Of = Tf, Vf = _r, Af = 1 / 0;
function Cf(e) {
  if (typeof e == "string" || Vf(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -Af ? "-0" : t;
}
var Ef = Cf, Mf = Of, If = Ef;
function Df(e, t) {
  t = Mf(t, e);
  for (var n = 0, i = t.length; e != null && n < i; )
    e = e[If(t[n++])];
  return n && n == i ? e : void 0;
}
var Ff = Df, $f = Ff;
function Nf(e, t, n) {
  var i = e == null ? void 0 : $f(e, t);
  return i === void 0 ? n : i;
}
var ir = Nf;
const xt = {
  props: {
    column: {
      type: Object,
      required: !0
    },
    row: {
      type: Object,
      required: !0
    },
    value: {}
  }
};
const Lf = {
  mixins: [xt],
  computed: {
    imageSource() {
      return this.value && this.value._id ? this.value : this.row;
    },
    type() {
      var e, t;
      return (t = (e = this.imageSource) == null ? void 0 : e.meta) == null ? void 0 : t.type;
    }
  },
  methods: {
    clicked(e) {
      this.$sdk.dispatch("item:view", this.imageSource);
    }
  }
}, Pf = { class: "table-image-cell" };
function Uf(e, t, n, i, s, r) {
  const l = y("ux-image"), a = y("ux-icon");
  return o(), d("td", Pf, [
    r.type == "image" || r.type == "video" ? (o(), d("div", {
      key: 0,
      onClick: t[0] || (t[0] = G((u) => r.clicked(e.value), ["stop", "prevent"])),
      class: "image-wrapper"
    }, [
      h(l, {
        item: r.imageSource,
        type: r.type,
        width: 100,
        height: 100
      }, null, 8, ["item", "type"])
    ])) : (o(), k(a, {
      key: 1,
      icon: "fa-file"
    }))
  ]);
}
const jf = /* @__PURE__ */ V(Lf, [["render", Uf], ["__scopeId", "data-v-868d2120"]]);
const Rf = {
  mixins: [xt],
  computed: {
    string() {
      return this.amount.toFixed(2);
    },
    amount() {
      return Number(parseInt(this.value) / 100);
    },
    credit() {
      return this.amount > 0;
    },
    debit() {
      return this.amount < 0;
    },
    empty() {
      return parseInt(this.value) === 0;
    },
    currency() {
      return this.column.currency || this.row.currency;
    }
  }
};
function Bf(e, t, n, i, s, r) {
  return o(), d("td", {
    class: R(["table-currency-cell", { credit: r.credit, empty: r.empty, debit: r.debit }])
  }, b(r.string), 3);
}
const zf = /* @__PURE__ */ V(Rf, [["render", Bf], ["__scopeId", "data-v-296695ac"]]);
const Hf = {
  data() {
    return {
      processing: !1
    };
  },
  mixins: [xt],
  computed: {
    button() {
      return this.column.button;
    },
    type() {
      var e, t;
      return (t = (e = this.row) == null ? void 0 : e.meta) == null ? void 0 : t.type;
    },
    label() {
      const e = this.button;
      return typeof e.text == "function" ? e.text(this) : e.text;
    }
  },
  methods: {
    async clicked() {
      this.processing = !0, await this.button.action(this.row, this.column), this.processing = !1;
    }
  }
}, qf = { class: "table-button-cell" };
function Gf(e, t, n, i, s, r) {
  const l = y("ux-icon"), a = y("ux-button");
  return o(), d("td", qf, [
    h(a, {
      color: r.button.color,
      size: r.button.size,
      loading: s.processing,
      onClick: G(r.clicked, ["stop", "prevent"])
    }, {
      default: m(() => [
        r.label ? (o(), d(w, { key: 0 }, [
          S(b(r.label), 1)
        ], 64)) : _("", !0),
        r.button.icon ? (o(), k(l, {
          key: 1,
          icon: r.button.icon,
          right: ""
        }, null, 8, ["icon"])) : _("", !0)
      ]),
      _: 1
    }, 8, ["color", "size", "loading", "onClick"])
  ]);
}
const Wf = /* @__PURE__ */ V(Hf, [["render", Gf], ["__scopeId", "data-v-f5ead4b0"]]);
class It extends Error {
}
class Zf extends It {
  constructor(t) {
    super(`Invalid DateTime: ${t.toMessage()}`);
  }
}
class Kf extends It {
  constructor(t) {
    super(`Invalid Interval: ${t.toMessage()}`);
  }
}
class Yf extends It {
  constructor(t) {
    super(`Invalid Duration: ${t.toMessage()}`);
  }
}
class hn extends It {
}
class ll extends It {
  constructor(t) {
    super(`Invalid unit ${t}`);
  }
}
class He extends It {
}
class ft extends It {
  constructor() {
    super("Zone is an abstract class");
  }
}
const I = "numeric", Je = "short", Re = "long", ni = {
  year: I,
  month: I,
  day: I
}, al = {
  year: I,
  month: Je,
  day: I
}, Jf = {
  year: I,
  month: Je,
  day: I,
  weekday: Je
}, ol = {
  year: I,
  month: Re,
  day: I
}, ul = {
  year: I,
  month: Re,
  day: I,
  weekday: Re
}, dl = {
  hour: I,
  minute: I
}, cl = {
  hour: I,
  minute: I,
  second: I
}, fl = {
  hour: I,
  minute: I,
  second: I,
  timeZoneName: Je
}, ml = {
  hour: I,
  minute: I,
  second: I,
  timeZoneName: Re
}, hl = {
  hour: I,
  minute: I,
  hourCycle: "h23"
}, pl = {
  hour: I,
  minute: I,
  second: I,
  hourCycle: "h23"
}, yl = {
  hour: I,
  minute: I,
  second: I,
  hourCycle: "h23",
  timeZoneName: Je
}, _l = {
  hour: I,
  minute: I,
  second: I,
  hourCycle: "h23",
  timeZoneName: Re
}, gl = {
  year: I,
  month: I,
  day: I,
  hour: I,
  minute: I
}, vl = {
  year: I,
  month: I,
  day: I,
  hour: I,
  minute: I,
  second: I
}, bl = {
  year: I,
  month: Je,
  day: I,
  hour: I,
  minute: I
}, kl = {
  year: I,
  month: Je,
  day: I,
  hour: I,
  minute: I,
  second: I
}, Xf = {
  year: I,
  month: Je,
  day: I,
  weekday: Je,
  hour: I,
  minute: I
}, xl = {
  year: I,
  month: Re,
  day: I,
  hour: I,
  minute: I,
  timeZoneName: Je
}, wl = {
  year: I,
  month: Re,
  day: I,
  hour: I,
  minute: I,
  second: I,
  timeZoneName: Je
}, Sl = {
  year: I,
  month: Re,
  day: I,
  weekday: Re,
  hour: I,
  minute: I,
  timeZoneName: Re
}, Tl = {
  year: I,
  month: Re,
  day: I,
  weekday: Re,
  hour: I,
  minute: I,
  second: I,
  timeZoneName: Re
};
function K(e) {
  return typeof e > "u";
}
function Et(e) {
  return typeof e == "number";
}
function xr(e) {
  return typeof e == "number" && e % 1 === 0;
}
function Qf(e) {
  return typeof e == "string";
}
function em(e) {
  return Object.prototype.toString.call(e) === "[object Date]";
}
function Ol() {
  try {
    return typeof Intl < "u" && !!Intl.RelativeTimeFormat;
  } catch {
    return !1;
  }
}
function tm(e) {
  return Array.isArray(e) ? e : [e];
}
function Wi(e, t, n) {
  if (e.length !== 0)
    return e.reduce((i, s) => {
      const r = [t(s), s];
      return i && n(i[0], r[0]) === i[0] ? i : r;
    }, null)[1];
}
function nm(e, t) {
  return t.reduce((n, i) => (n[i] = e[i], n), {});
}
function Zt(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function it(e, t, n) {
  return xr(e) && e >= t && e <= n;
}
function rm(e, t) {
  return e - t * Math.floor(e / t);
}
function ye(e, t = 2) {
  const n = e < 0;
  let i;
  return n ? i = "-" + ("" + -e).padStart(t, "0") : i = ("" + e).padStart(t, "0"), i;
}
function mt(e) {
  if (!(K(e) || e === null || e === ""))
    return parseInt(e, 10);
}
function St(e) {
  if (!(K(e) || e === null || e === ""))
    return parseFloat(e);
}
function bi(e) {
  if (!(K(e) || e === null || e === "")) {
    const t = parseFloat("0." + e) * 1e3;
    return Math.floor(t);
  }
}
function ki(e, t, n = !1) {
  const i = 10 ** t;
  return (n ? Math.trunc : Math.round)(e * i) / i;
}
function Cn(e) {
  return e % 4 === 0 && (e % 100 !== 0 || e % 400 === 0);
}
function vn(e) {
  return Cn(e) ? 366 : 365;
}
function sr(e, t) {
  const n = rm(t - 1, 12) + 1, i = e + (t - n) / 12;
  return n === 2 ? Cn(i) ? 29 : 28 : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][n - 1];
}
function xi(e) {
  let t = Date.UTC(
    e.year,
    e.month - 1,
    e.day,
    e.hour,
    e.minute,
    e.second,
    e.millisecond
  );
  return e.year < 100 && e.year >= 0 && (t = new Date(t), t.setUTCFullYear(t.getUTCFullYear() - 1900)), +t;
}
function lr(e) {
  const t = (e + Math.floor(e / 4) - Math.floor(e / 100) + Math.floor(e / 400)) % 7, n = e - 1, i = (n + Math.floor(n / 4) - Math.floor(n / 100) + Math.floor(n / 400)) % 7;
  return t === 4 || i === 3 ? 53 : 52;
}
function ri(e) {
  return e > 99 ? e : e > 60 ? 1900 + e : 2e3 + e;
}
function Vl(e, t, n, i = null) {
  const s = new Date(e), r = {
    hourCycle: "h23",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  };
  i && (r.timeZone = i);
  const l = { timeZoneName: t, ...r }, a = new Intl.DateTimeFormat(n, l).formatToParts(s).find((u) => u.type.toLowerCase() === "timezonename");
  return a ? a.value : null;
}
function wr(e, t) {
  let n = parseInt(e, 10);
  Number.isNaN(n) && (n = 0);
  const i = parseInt(t, 10) || 0, s = n < 0 || Object.is(n, -0) ? -i : i;
  return n * 60 + s;
}
function Al(e) {
  const t = Number(e);
  if (typeof e == "boolean" || e === "" || Number.isNaN(t))
    throw new He(`Invalid unit value ${e}`);
  return t;
}
function ar(e, t) {
  const n = {};
  for (const i in e)
    if (Zt(e, i)) {
      const s = e[i];
      if (s == null)
        continue;
      n[t(i)] = Al(s);
    }
  return n;
}
function or(e, t) {
  const n = Math.trunc(Math.abs(e / 60)), i = Math.trunc(Math.abs(e % 60)), s = e >= 0 ? "+" : "-";
  switch (t) {
    case "short":
      return `${s}${ye(n, 2)}:${ye(i, 2)}`;
    case "narrow":
      return `${s}${n}${i > 0 ? `:${i}` : ""}`;
    case "techie":
      return `${s}${ye(n, 2)}${ye(i, 2)}`;
    default:
      throw new RangeError(`Value format ${t} is out of range for property format`);
  }
}
function Sr(e) {
  return nm(e, ["hour", "minute", "second", "millisecond"]);
}
const im = /[A-Za-z_+-]{1,256}(:?\/[A-Za-z0-9_+-]{1,256}(\/[A-Za-z0-9_+-]{1,256})?)?/, sm = [
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
], Cl = [
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
], lm = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
function El(e) {
  switch (e) {
    case "narrow":
      return [...lm];
    case "short":
      return [...Cl];
    case "long":
      return [...sm];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    case "2-digit":
      return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    default:
      return null;
  }
}
const Ml = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
], Il = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], am = ["M", "T", "W", "T", "F", "S", "S"];
function Dl(e) {
  switch (e) {
    case "narrow":
      return [...am];
    case "short":
      return [...Il];
    case "long":
      return [...Ml];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7"];
    default:
      return null;
  }
}
const Fl = ["AM", "PM"], om = ["Before Christ", "Anno Domini"], um = ["BC", "AD"], dm = ["B", "A"];
function $l(e) {
  switch (e) {
    case "narrow":
      return [...dm];
    case "short":
      return [...um];
    case "long":
      return [...om];
    default:
      return null;
  }
}
function cm(e) {
  return Fl[e.hour < 12 ? 0 : 1];
}
function fm(e, t) {
  return Dl(t)[e.weekday - 1];
}
function mm(e, t) {
  return El(t)[e.month - 1];
}
function hm(e, t) {
  return $l(t)[e.year < 0 ? 0 : 1];
}
function pm(e, t, n = "always", i = !1) {
  const s = {
    years: ["year", "yr."],
    quarters: ["quarter", "qtr."],
    months: ["month", "mo."],
    weeks: ["week", "wk."],
    days: ["day", "day", "days"],
    hours: ["hour", "hr."],
    minutes: ["minute", "min."],
    seconds: ["second", "sec."]
  }, r = ["hours", "minutes", "seconds"].indexOf(e) === -1;
  if (n === "auto" && r) {
    const p = e === "days";
    switch (t) {
      case 1:
        return p ? "tomorrow" : `next ${s[e][0]}`;
      case -1:
        return p ? "yesterday" : `last ${s[e][0]}`;
      case 0:
        return p ? "today" : `this ${s[e][0]}`;
    }
  }
  const l = Object.is(t, -0) || t < 0, a = Math.abs(t), u = a === 1, c = s[e], f = i ? u ? c[1] : c[2] || c[1] : u ? s[e][0] : e;
  return l ? `${a} ${f} ago` : `in ${a} ${f}`;
}
function Zi(e, t) {
  let n = "";
  for (const i of e)
    i.literal ? n += i.val : n += t(i.val);
  return n;
}
const ym = {
  D: ni,
  DD: al,
  DDD: ol,
  DDDD: ul,
  t: dl,
  tt: cl,
  ttt: fl,
  tttt: ml,
  T: hl,
  TT: pl,
  TTT: yl,
  TTTT: _l,
  f: gl,
  ff: bl,
  fff: xl,
  ffff: Sl,
  F: vl,
  FF: kl,
  FFF: wl,
  FFFF: Tl
};
class Le {
  static create(t, n = {}) {
    return new Le(t, n);
  }
  static parseFormat(t) {
    let n = null, i = "", s = !1;
    const r = [];
    for (let l = 0; l < t.length; l++) {
      const a = t.charAt(l);
      a === "'" ? (i.length > 0 && r.push({ literal: s, val: i }), n = null, i = "", s = !s) : s || a === n ? i += a : (i.length > 0 && r.push({ literal: !1, val: i }), i = a, n = a);
    }
    return i.length > 0 && r.push({ literal: s, val: i }), r;
  }
  static macroTokenToFormatOpts(t) {
    return ym[t];
  }
  constructor(t, n) {
    this.opts = n, this.loc = t, this.systemLoc = null;
  }
  formatWithSystemDefault(t, n) {
    return this.systemLoc === null && (this.systemLoc = this.loc.redefaultToSystem()), this.systemLoc.dtFormatter(t, { ...this.opts, ...n }).format();
  }
  formatDateTime(t, n = {}) {
    return this.loc.dtFormatter(t, { ...this.opts, ...n }).format();
  }
  formatDateTimeParts(t, n = {}) {
    return this.loc.dtFormatter(t, { ...this.opts, ...n }).formatToParts();
  }
  resolvedOptions(t, n = {}) {
    return this.loc.dtFormatter(t, { ...this.opts, ...n }).resolvedOptions();
  }
  num(t, n = 0) {
    if (this.opts.forceSimple)
      return ye(t, n);
    const i = { ...this.opts };
    return n > 0 && (i.padTo = n), this.loc.numberFormatter(i).format(t);
  }
  formatDateTimeFromString(t, n) {
    const i = this.loc.listingMode() === "en", s = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory", r = (v, T) => this.loc.extract(t, v, T), l = (v) => t.isOffsetFixed && t.offset === 0 && v.allowZ ? "Z" : t.isValid ? t.zone.formatOffset(t.ts, v.format) : "", a = () => i ? cm(t) : r({ hour: "numeric", hourCycle: "h12" }, "dayperiod"), u = (v, T) => i ? mm(t, v) : r(T ? { month: v } : { month: v, day: "numeric" }, "month"), c = (v, T) => i ? fm(t, v) : r(
      T ? { weekday: v } : { weekday: v, month: "long", day: "numeric" },
      "weekday"
    ), f = (v) => {
      const T = Le.macroTokenToFormatOpts(v);
      return T ? this.formatWithSystemDefault(t, T) : v;
    }, p = (v) => i ? hm(t, v) : r({ era: v }, "era"), g = (v) => {
      switch (v) {
        case "S":
          return this.num(t.millisecond);
        case "u":
        case "SSS":
          return this.num(t.millisecond, 3);
        case "s":
          return this.num(t.second);
        case "ss":
          return this.num(t.second, 2);
        case "uu":
          return this.num(Math.floor(t.millisecond / 10), 2);
        case "uuu":
          return this.num(Math.floor(t.millisecond / 100));
        case "m":
          return this.num(t.minute);
        case "mm":
          return this.num(t.minute, 2);
        case "h":
          return this.num(t.hour % 12 === 0 ? 12 : t.hour % 12);
        case "hh":
          return this.num(t.hour % 12 === 0 ? 12 : t.hour % 12, 2);
        case "H":
          return this.num(t.hour);
        case "HH":
          return this.num(t.hour, 2);
        case "Z":
          return l({ format: "narrow", allowZ: this.opts.allowZ });
        case "ZZ":
          return l({ format: "short", allowZ: this.opts.allowZ });
        case "ZZZ":
          return l({ format: "techie", allowZ: this.opts.allowZ });
        case "ZZZZ":
          return t.zone.offsetName(t.ts, { format: "short", locale: this.loc.locale });
        case "ZZZZZ":
          return t.zone.offsetName(t.ts, { format: "long", locale: this.loc.locale });
        case "z":
          return t.zoneName;
        case "a":
          return a();
        case "d":
          return s ? r({ day: "numeric" }, "day") : this.num(t.day);
        case "dd":
          return s ? r({ day: "2-digit" }, "day") : this.num(t.day, 2);
        case "c":
          return this.num(t.weekday);
        case "ccc":
          return c("short", !0);
        case "cccc":
          return c("long", !0);
        case "ccccc":
          return c("narrow", !0);
        case "E":
          return this.num(t.weekday);
        case "EEE":
          return c("short", !1);
        case "EEEE":
          return c("long", !1);
        case "EEEEE":
          return c("narrow", !1);
        case "L":
          return s ? r({ month: "numeric", day: "numeric" }, "month") : this.num(t.month);
        case "LL":
          return s ? r({ month: "2-digit", day: "numeric" }, "month") : this.num(t.month, 2);
        case "LLL":
          return u("short", !0);
        case "LLLL":
          return u("long", !0);
        case "LLLLL":
          return u("narrow", !0);
        case "M":
          return s ? r({ month: "numeric" }, "month") : this.num(t.month);
        case "MM":
          return s ? r({ month: "2-digit" }, "month") : this.num(t.month, 2);
        case "MMM":
          return u("short", !1);
        case "MMMM":
          return u("long", !1);
        case "MMMMM":
          return u("narrow", !1);
        case "y":
          return s ? r({ year: "numeric" }, "year") : this.num(t.year);
        case "yy":
          return s ? r({ year: "2-digit" }, "year") : this.num(t.year.toString().slice(-2), 2);
        case "yyyy":
          return s ? r({ year: "numeric" }, "year") : this.num(t.year, 4);
        case "yyyyyy":
          return s ? r({ year: "numeric" }, "year") : this.num(t.year, 6);
        case "G":
          return p("short");
        case "GG":
          return p("long");
        case "GGGGG":
          return p("narrow");
        case "kk":
          return this.num(t.weekYear.toString().slice(-2), 2);
        case "kkkk":
          return this.num(t.weekYear, 4);
        case "W":
          return this.num(t.weekNumber);
        case "WW":
          return this.num(t.weekNumber, 2);
        case "o":
          return this.num(t.ordinal);
        case "ooo":
          return this.num(t.ordinal, 3);
        case "q":
          return this.num(t.quarter);
        case "qq":
          return this.num(t.quarter, 2);
        case "X":
          return this.num(Math.floor(t.ts / 1e3));
        case "x":
          return this.num(t.ts);
        default:
          return f(v);
      }
    };
    return Zi(Le.parseFormat(n), g);
  }
  formatDurationFromString(t, n) {
    const i = (u) => {
      switch (u[0]) {
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
    }, s = (u) => (c) => {
      const f = i(c);
      return f ? this.num(u.get(f), c.length) : c;
    }, r = Le.parseFormat(n), l = r.reduce(
      (u, { literal: c, val: f }) => c ? u : u.concat(f),
      []
    ), a = t.shiftTo(...l.map(i).filter((u) => u));
    return Zi(r, s(a));
  }
}
class Ye {
  constructor(t, n) {
    this.reason = t, this.explanation = n;
  }
  toMessage() {
    return this.explanation ? `${this.reason}: ${this.explanation}` : this.reason;
  }
}
class En {
  /**
   * The type of zone
   * @abstract
   * @type {string}
   */
  get type() {
    throw new ft();
  }
  /**
   * The name of this zone.
   * @abstract
   * @type {string}
   */
  get name() {
    throw new ft();
  }
  /**
   * Returns whether the offset is known to be fixed for the whole year.
   * @abstract
   * @type {boolean}
   */
  get isUniversal() {
    throw new ft();
  }
  /**
   * Returns the offset's common name (such as EST) at the specified timestamp
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the name
   * @param {Object} opts - Options to affect the format
   * @param {string} opts.format - What style of offset to return. Accepts 'long' or 'short'.
   * @param {string} opts.locale - What locale to return the offset name in.
   * @return {string}
   */
  offsetName(t, n) {
    throw new ft();
  }
  /**
   * Returns the offset's value as a string
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the offset
   * @param {string} format - What style of offset to return.
   *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
   * @return {string}
   */
  formatOffset(t, n) {
    throw new ft();
  }
  /**
   * Return the offset in minutes for this zone at the specified timestamp.
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to compute the offset
   * @return {number}
   */
  offset(t) {
    throw new ft();
  }
  /**
   * Return whether this Zone is equal to another zone
   * @abstract
   * @param {Zone} otherZone - the zone to compare
   * @return {boolean}
   */
  equals(t) {
    throw new ft();
  }
  /**
   * Return whether this Zone is valid.
   * @abstract
   * @type {boolean}
   */
  get isValid() {
    throw new ft();
  }
}
let Er = null;
class wi extends En {
  /**
   * Get a singleton instance of the local zone
   * @return {SystemZone}
   */
  static get instance() {
    return Er === null && (Er = new wi()), Er;
  }
  /** @override **/
  get type() {
    return "system";
  }
  /** @override **/
  get name() {
    return new Intl.DateTimeFormat().resolvedOptions().timeZone;
  }
  /** @override **/
  get isUniversal() {
    return !1;
  }
  /** @override **/
  offsetName(t, { format: n, locale: i }) {
    return Vl(t, n, i);
  }
  /** @override **/
  formatOffset(t, n) {
    return or(this.offset(t), n);
  }
  /** @override **/
  offset(t) {
    return -new Date(t).getTimezoneOffset();
  }
  /** @override **/
  equals(t) {
    return t.type === "system";
  }
  /** @override **/
  get isValid() {
    return !0;
  }
}
let Yn = {};
function _m(e) {
  return Yn[e] || (Yn[e] = new Intl.DateTimeFormat("en-US", {
    hour12: !1,
    timeZone: e,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    era: "short"
  })), Yn[e];
}
const gm = {
  year: 0,
  month: 1,
  day: 2,
  era: 3,
  hour: 4,
  minute: 5,
  second: 6
};
function vm(e, t) {
  const n = e.format(t).replace(/\u200E/g, ""), i = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(n), [, s, r, l, a, u, c, f] = i;
  return [l, s, r, a, u, c, f];
}
function bm(e, t) {
  const n = e.formatToParts(t), i = [];
  for (let s = 0; s < n.length; s++) {
    const { type: r, value: l } = n[s], a = gm[r];
    r === "era" ? i[a] = l : K(a) || (i[a] = parseInt(l, 10));
  }
  return i;
}
let Un = {};
class lt extends En {
  /**
   * @param {string} name - Zone name
   * @return {IANAZone}
   */
  static create(t) {
    return Un[t] || (Un[t] = new lt(t)), Un[t];
  }
  /**
   * Reset local caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  static resetCache() {
    Un = {}, Yn = {};
  }
  /**
   * Returns whether the provided string is a valid specifier. This only checks the string's format, not that the specifier identifies a known zone; see isValidZone for that.
   * @param {string} s - The string to check validity on
   * @example IANAZone.isValidSpecifier("America/New_York") //=> true
   * @example IANAZone.isValidSpecifier("Sport~~blorp") //=> false
   * @deprecated This method returns false for some valid IANA names. Use isValidZone instead.
   * @return {boolean}
   */
  static isValidSpecifier(t) {
    return this.isValidZone(t);
  }
  /**
   * Returns whether the provided string identifies a real zone
   * @param {string} zone - The string to check
   * @example IANAZone.isValidZone("America/New_York") //=> true
   * @example IANAZone.isValidZone("Fantasia/Castle") //=> false
   * @example IANAZone.isValidZone("Sport~~blorp") //=> false
   * @return {boolean}
   */
  static isValidZone(t) {
    if (!t)
      return !1;
    try {
      return new Intl.DateTimeFormat("en-US", { timeZone: t }).format(), !0;
    } catch {
      return !1;
    }
  }
  constructor(t) {
    super(), this.zoneName = t, this.valid = lt.isValidZone(t);
  }
  /** @override **/
  get type() {
    return "iana";
  }
  /** @override **/
  get name() {
    return this.zoneName;
  }
  /** @override **/
  get isUniversal() {
    return !1;
  }
  /** @override **/
  offsetName(t, { format: n, locale: i }) {
    return Vl(t, n, i, this.name);
  }
  /** @override **/
  formatOffset(t, n) {
    return or(this.offset(t), n);
  }
  /** @override **/
  offset(t) {
    const n = new Date(t);
    if (isNaN(n))
      return NaN;
    const i = _m(this.name);
    let [s, r, l, a, u, c, f] = i.formatToParts ? bm(i, n) : vm(i, n);
    a === "BC" && (s = -Math.abs(s) + 1);
    const g = xi({
      year: s,
      month: r,
      day: l,
      hour: u === 24 ? 0 : u,
      minute: c,
      second: f,
      millisecond: 0
    });
    let v = +n;
    const T = v % 1e3;
    return v -= T >= 0 ? T : 1e3 + T, (g - v) / (60 * 1e3);
  }
  /** @override **/
  equals(t) {
    return t.type === "iana" && t.name === this.name;
  }
  /** @override **/
  get isValid() {
    return this.valid;
  }
}
let Mr = null;
class De extends En {
  /**
   * Get a singleton instance of UTC
   * @return {FixedOffsetZone}
   */
  static get utcInstance() {
    return Mr === null && (Mr = new De(0)), Mr;
  }
  /**
   * Get an instance with a specified offset
   * @param {number} offset - The offset in minutes
   * @return {FixedOffsetZone}
   */
  static instance(t) {
    return t === 0 ? De.utcInstance : new De(t);
  }
  /**
   * Get an instance of FixedOffsetZone from a UTC offset string, like "UTC+6"
   * @param {string} s - The offset string to parse
   * @example FixedOffsetZone.parseSpecifier("UTC+6")
   * @example FixedOffsetZone.parseSpecifier("UTC+06")
   * @example FixedOffsetZone.parseSpecifier("UTC-6:00")
   * @return {FixedOffsetZone}
   */
  static parseSpecifier(t) {
    if (t) {
      const n = t.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
      if (n)
        return new De(wr(n[1], n[2]));
    }
    return null;
  }
  constructor(t) {
    super(), this.fixed = t;
  }
  /** @override **/
  get type() {
    return "fixed";
  }
  /** @override **/
  get name() {
    return this.fixed === 0 ? "UTC" : `UTC${or(this.fixed, "narrow")}`;
  }
  /** @override **/
  offsetName() {
    return this.name;
  }
  /** @override **/
  formatOffset(t, n) {
    return or(this.fixed, n);
  }
  /** @override **/
  get isUniversal() {
    return !0;
  }
  /** @override **/
  offset() {
    return this.fixed;
  }
  /** @override **/
  equals(t) {
    return t.type === "fixed" && t.fixed === this.fixed;
  }
  /** @override **/
  get isValid() {
    return !0;
  }
}
class km extends En {
  constructor(t) {
    super(), this.zoneName = t;
  }
  /** @override **/
  get type() {
    return "invalid";
  }
  /** @override **/
  get name() {
    return this.zoneName;
  }
  /** @override **/
  get isUniversal() {
    return !1;
  }
  /** @override **/
  offsetName() {
    return null;
  }
  /** @override **/
  formatOffset() {
    return "";
  }
  /** @override **/
  offset() {
    return NaN;
  }
  /** @override **/
  equals() {
    return !1;
  }
  /** @override **/
  get isValid() {
    return !1;
  }
}
function pt(e, t) {
  if (K(e) || e === null)
    return t;
  if (e instanceof En)
    return e;
  if (Qf(e)) {
    const n = e.toLowerCase();
    return n === "local" || n === "system" ? t : n === "utc" || n === "gmt" ? De.utcInstance : De.parseSpecifier(n) || lt.create(e);
  } else
    return Et(e) ? De.instance(e) : typeof e == "object" && e.offset && typeof e.offset == "number" ? e : new km(e);
}
let Ki = () => Date.now(), Yi = "system", Ji = null, Xi = null, Qi = null, es;
class _e {
  /**
   * Get the callback for returning the current timestamp.
   * @type {function}
   */
  static get now() {
    return Ki;
  }
  /**
   * Set the callback for returning the current timestamp.
   * The function should return a number, which will be interpreted as an Epoch millisecond count
   * @type {function}
   * @example Settings.now = () => Date.now() + 3000 // pretend it is 3 seconds in the future
   * @example Settings.now = () => 0 // always pretend it's Jan 1, 1970 at midnight in UTC time
   */
  static set now(t) {
    Ki = t;
  }
  /**
   * Set the default time zone to create DateTimes in. Does not affect existing instances.
   * Use the value "system" to reset this value to the system's time zone.
   * @type {string}
   */
  static set defaultZone(t) {
    Yi = t;
  }
  /**
   * Get the default time zone object currently used to create DateTimes. Does not affect existing instances.
   * The default value is the system's time zone (the one set on the machine that runs this code).
   * @type {Zone}
   */
  static get defaultZone() {
    return pt(Yi, wi.instance);
  }
  /**
   * Get the default locale to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultLocale() {
    return Ji;
  }
  /**
   * Set the default locale to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultLocale(t) {
    Ji = t;
  }
  /**
   * Get the default numbering system to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultNumberingSystem() {
    return Xi;
  }
  /**
   * Set the default numbering system to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultNumberingSystem(t) {
    Xi = t;
  }
  /**
   * Get the default output calendar to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultOutputCalendar() {
    return Qi;
  }
  /**
   * Set the default output calendar to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultOutputCalendar(t) {
    Qi = t;
  }
  /**
   * Get whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
   * @type {boolean}
   */
  static get throwOnInvalid() {
    return es;
  }
  /**
   * Set whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
   * @type {boolean}
   */
  static set throwOnInvalid(t) {
    es = t;
  }
  /**
   * Reset Luxon's global caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  static resetCaches() {
    ce.resetCache(), lt.resetCache();
  }
}
let ts = {};
function xm(e, t = {}) {
  const n = JSON.stringify([e, t]);
  let i = ts[n];
  return i || (i = new Intl.ListFormat(e, t), ts[n] = i), i;
}
let ii = {};
function si(e, t = {}) {
  const n = JSON.stringify([e, t]);
  let i = ii[n];
  return i || (i = new Intl.DateTimeFormat(e, t), ii[n] = i), i;
}
let li = {};
function wm(e, t = {}) {
  const n = JSON.stringify([e, t]);
  let i = li[n];
  return i || (i = new Intl.NumberFormat(e, t), li[n] = i), i;
}
let ai = {};
function Sm(e, t = {}) {
  const { base: n, ...i } = t, s = JSON.stringify([e, i]);
  let r = ai[s];
  return r || (r = new Intl.RelativeTimeFormat(e, t), ai[s] = r), r;
}
let pn = null;
function Tm() {
  return pn || (pn = new Intl.DateTimeFormat().resolvedOptions().locale, pn);
}
function Om(e) {
  const t = e.indexOf("-u-");
  if (t === -1)
    return [e];
  {
    let n;
    const i = e.substring(0, t);
    try {
      n = si(e).resolvedOptions();
    } catch {
      n = si(i).resolvedOptions();
    }
    const { numberingSystem: s, calendar: r } = n;
    return [i, s, r];
  }
}
function Vm(e, t, n) {
  return (n || t) && (e += "-u", n && (e += `-ca-${n}`), t && (e += `-nu-${t}`)), e;
}
function Am(e) {
  const t = [];
  for (let n = 1; n <= 12; n++) {
    const i = j.utc(2016, n, 1);
    t.push(e(i));
  }
  return t;
}
function Cm(e) {
  const t = [];
  for (let n = 1; n <= 7; n++) {
    const i = j.utc(2016, 11, 13 + n);
    t.push(e(i));
  }
  return t;
}
function jn(e, t, n, i, s) {
  const r = e.listingMode(n);
  return r === "error" ? null : r === "en" ? i(t) : s(t);
}
function Em(e) {
  return e.numberingSystem && e.numberingSystem !== "latn" ? !1 : e.numberingSystem === "latn" || !e.locale || e.locale.startsWith("en") || new Intl.DateTimeFormat(e.intl).resolvedOptions().numberingSystem === "latn";
}
class Mm {
  constructor(t, n, i) {
    this.padTo = i.padTo || 0, this.floor = i.floor || !1;
    const { padTo: s, floor: r, ...l } = i;
    if (!n || Object.keys(l).length > 0) {
      const a = { useGrouping: !1, ...i };
      i.padTo > 0 && (a.minimumIntegerDigits = i.padTo), this.inf = wm(t, a);
    }
  }
  format(t) {
    if (this.inf) {
      const n = this.floor ? Math.floor(t) : t;
      return this.inf.format(n);
    } else {
      const n = this.floor ? Math.floor(t) : ki(t, 3);
      return ye(n, this.padTo);
    }
  }
}
class Im {
  constructor(t, n, i) {
    this.opts = i;
    let s;
    if (t.zone.isUniversal) {
      const l = -1 * (t.offset / 60), a = l >= 0 ? `Etc/GMT+${l}` : `Etc/GMT${l}`;
      t.offset !== 0 && lt.create(a).valid ? (s = a, this.dt = t) : (s = "UTC", i.timeZoneName ? this.dt = t : this.dt = t.offset === 0 ? t : j.fromMillis(t.ts + t.offset * 60 * 1e3));
    } else
      t.zone.type === "system" ? this.dt = t : (this.dt = t, s = t.zone.name);
    const r = { ...this.opts };
    s && (r.timeZone = s), this.dtf = si(n, r);
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
class Dm {
  constructor(t, n, i) {
    this.opts = { style: "long", ...i }, !n && Ol() && (this.rtf = Sm(t, i));
  }
  format(t, n) {
    return this.rtf ? this.rtf.format(t, n) : pm(n, t, this.opts.numeric, this.opts.style !== "long");
  }
  formatToParts(t, n) {
    return this.rtf ? this.rtf.formatToParts(t, n) : [];
  }
}
class ce {
  static fromOpts(t) {
    return ce.create(t.locale, t.numberingSystem, t.outputCalendar, t.defaultToEN);
  }
  static create(t, n, i, s = !1) {
    const r = t || _e.defaultLocale, l = r || (s ? "en-US" : Tm()), a = n || _e.defaultNumberingSystem, u = i || _e.defaultOutputCalendar;
    return new ce(l, a, u, r);
  }
  static resetCache() {
    pn = null, ii = {}, li = {}, ai = {};
  }
  static fromObject({ locale: t, numberingSystem: n, outputCalendar: i } = {}) {
    return ce.create(t, n, i);
  }
  constructor(t, n, i, s) {
    const [r, l, a] = Om(t);
    this.locale = r, this.numberingSystem = n || l || null, this.outputCalendar = i || a || null, this.intl = Vm(this.locale, this.numberingSystem, this.outputCalendar), this.weekdaysCache = { format: {}, standalone: {} }, this.monthsCache = { format: {}, standalone: {} }, this.meridiemCache = null, this.eraCache = {}, this.specifiedLocale = s, this.fastNumbersCached = null;
  }
  get fastNumbers() {
    return this.fastNumbersCached == null && (this.fastNumbersCached = Em(this)), this.fastNumbersCached;
  }
  listingMode() {
    const t = this.isEnglish(), n = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");
    return t && n ? "en" : "intl";
  }
  clone(t) {
    return !t || Object.getOwnPropertyNames(t).length === 0 ? this : ce.create(
      t.locale || this.specifiedLocale,
      t.numberingSystem || this.numberingSystem,
      t.outputCalendar || this.outputCalendar,
      t.defaultToEN || !1
    );
  }
  redefaultToEN(t = {}) {
    return this.clone({ ...t, defaultToEN: !0 });
  }
  redefaultToSystem(t = {}) {
    return this.clone({ ...t, defaultToEN: !1 });
  }
  months(t, n = !1, i = !0) {
    return jn(this, t, i, El, () => {
      const s = n ? { month: t, day: "numeric" } : { month: t }, r = n ? "format" : "standalone";
      return this.monthsCache[r][t] || (this.monthsCache[r][t] = Am((l) => this.extract(l, s, "month"))), this.monthsCache[r][t];
    });
  }
  weekdays(t, n = !1, i = !0) {
    return jn(this, t, i, Dl, () => {
      const s = n ? { weekday: t, year: "numeric", month: "long", day: "numeric" } : { weekday: t }, r = n ? "format" : "standalone";
      return this.weekdaysCache[r][t] || (this.weekdaysCache[r][t] = Cm(
        (l) => this.extract(l, s, "weekday")
      )), this.weekdaysCache[r][t];
    });
  }
  meridiems(t = !0) {
    return jn(
      this,
      void 0,
      t,
      () => Fl,
      () => {
        if (!this.meridiemCache) {
          const n = { hour: "numeric", hourCycle: "h12" };
          this.meridiemCache = [j.utc(2016, 11, 13, 9), j.utc(2016, 11, 13, 19)].map(
            (i) => this.extract(i, n, "dayperiod")
          );
        }
        return this.meridiemCache;
      }
    );
  }
  eras(t, n = !0) {
    return jn(this, t, n, $l, () => {
      const i = { era: t };
      return this.eraCache[t] || (this.eraCache[t] = [j.utc(-40, 1, 1), j.utc(2017, 1, 1)].map(
        (s) => this.extract(s, i, "era")
      )), this.eraCache[t];
    });
  }
  extract(t, n, i) {
    const s = this.dtFormatter(t, n), r = s.formatToParts(), l = r.find((a) => a.type.toLowerCase() === i);
    return l ? l.value : null;
  }
  numberFormatter(t = {}) {
    return new Mm(this.intl, t.forceSimple || this.fastNumbers, t);
  }
  dtFormatter(t, n = {}) {
    return new Im(t, this.intl, n);
  }
  relFormatter(t = {}) {
    return new Dm(this.intl, this.isEnglish(), t);
  }
  listFormatter(t = {}) {
    return xm(this.intl, t);
  }
  isEnglish() {
    return this.locale === "en" || this.locale.toLowerCase() === "en-us" || new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us");
  }
  equals(t) {
    return this.locale === t.locale && this.numberingSystem === t.numberingSystem && this.outputCalendar === t.outputCalendar;
  }
}
function tn(...e) {
  const t = e.reduce((n, i) => n + i.source, "");
  return RegExp(`^${t}$`);
}
function Dt(...e) {
  return (t) => e.reduce(
    ([n, i, s], r) => {
      const [l, a, u] = r(t, s);
      return [{ ...n, ...l }, i || a, u];
    },
    [{}, null, 1]
  ).slice(0, 2);
}
function nn(e, ...t) {
  if (e == null)
    return [null, null];
  for (const [n, i] of t) {
    const s = n.exec(e);
    if (s)
      return i(s);
  }
  return [null, null];
}
function Nl(...e) {
  return (t, n) => {
    const i = {};
    let s;
    for (s = 0; s < e.length; s++)
      i[e[s]] = mt(t[n + s]);
    return [i, null, n + s];
  };
}
const Ll = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/, Si = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/, Pl = RegExp(`${Si.source}${Ll.source}?`), Ti = RegExp(`(?:T${Pl.source})?`), Fm = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, $m = /(\d{4})-?W(\d\d)(?:-?(\d))?/, Nm = /(\d{4})-?(\d{3})/, Lm = Nl("weekYear", "weekNumber", "weekDay"), Pm = Nl("year", "ordinal"), Um = /(\d{4})-(\d\d)-(\d\d)/, Ul = RegExp(
  `${Si.source} ?(?:${Ll.source}|(${im.source}))?`
), jm = RegExp(`(?: ${Ul.source})?`);
function Gt(e, t, n) {
  const i = e[t];
  return K(i) ? n : mt(i);
}
function jl(e, t) {
  return [{
    year: Gt(e, t),
    month: Gt(e, t + 1, 1),
    day: Gt(e, t + 2, 1)
  }, null, t + 3];
}
function Ft(e, t) {
  return [{
    hours: Gt(e, t, 0),
    minutes: Gt(e, t + 1, 0),
    seconds: Gt(e, t + 2, 0),
    milliseconds: bi(e[t + 3])
  }, null, t + 4];
}
function rn(e, t) {
  const n = !e[t] && !e[t + 1], i = wr(e[t + 1], e[t + 2]), s = n ? null : De.instance(i);
  return [{}, s, t + 3];
}
function Rl(e, t) {
  const n = e[t] ? lt.create(e[t]) : null;
  return [{}, n, t + 1];
}
const Rm = RegExp(`^T?${Si.source}$`), Bm = /^-?P(?:(?:(-?\d{1,9}(?:\.\d{1,9})?)Y)?(?:(-?\d{1,9}(?:\.\d{1,9})?)M)?(?:(-?\d{1,9}(?:\.\d{1,9})?)W)?(?:(-?\d{1,9}(?:\.\d{1,9})?)D)?(?:T(?:(-?\d{1,9}(?:\.\d{1,9})?)H)?(?:(-?\d{1,9}(?:\.\d{1,9})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,9}))?S)?)?)$/;
function zm(e) {
  const [t, n, i, s, r, l, a, u, c] = e, f = t[0] === "-", p = u && u[0] === "-", g = (v, T = !1) => v !== void 0 && (T || v && f) ? -v : v;
  return [
    {
      years: g(St(n)),
      months: g(St(i)),
      weeks: g(St(s)),
      days: g(St(r)),
      hours: g(St(l)),
      minutes: g(St(a)),
      seconds: g(St(u), u === "-0"),
      milliseconds: g(bi(c), p)
    }
  ];
}
const Hm = {
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
function Oi(e, t, n, i, s, r, l) {
  const a = {
    year: t.length === 2 ? ri(mt(t)) : mt(t),
    month: Cl.indexOf(n) + 1,
    day: mt(i),
    hour: mt(s),
    minute: mt(r)
  };
  return l && (a.second = mt(l)), e && (a.weekday = e.length > 3 ? Ml.indexOf(e) + 1 : Il.indexOf(e) + 1), a;
}
const qm = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
function Gm(e) {
  const [
    ,
    t,
    n,
    i,
    s,
    r,
    l,
    a,
    u,
    c,
    f,
    p
  ] = e, g = Oi(t, s, i, n, r, l, a);
  let v;
  return u ? v = Hm[u] : c ? v = 0 : v = wr(f, p), [g, new De(v)];
}
function Wm(e) {
  return e.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
}
const Zm = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/, Km = /^(Monday|Tuesday|Wedsday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/, Ym = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
function ns(e) {
  const [, t, n, i, s, r, l, a] = e;
  return [Oi(t, s, i, n, r, l, a), De.utcInstance];
}
function Jm(e) {
  const [, t, n, i, s, r, l, a] = e;
  return [Oi(t, a, n, i, s, r, l), De.utcInstance];
}
const Xm = tn(Fm, Ti), Qm = tn($m, Ti), eh = tn(Nm, Ti), th = tn(Pl), nh = Dt(
  jl,
  Ft,
  rn
), rh = Dt(
  Lm,
  Ft,
  rn
), ih = Dt(
  Pm,
  Ft,
  rn
), sh = Dt(Ft, rn);
function lh(e) {
  return nn(
    e,
    [Xm, nh],
    [Qm, rh],
    [eh, ih],
    [th, sh]
  );
}
function ah(e) {
  return nn(Wm(e), [qm, Gm]);
}
function oh(e) {
  return nn(
    e,
    [Zm, ns],
    [Km, ns],
    [Ym, Jm]
  );
}
function uh(e) {
  return nn(e, [Bm, zm]);
}
const dh = Dt(Ft);
function ch(e) {
  return nn(e, [Rm, dh]);
}
const fh = tn(Um, jm), mh = tn(Ul), hh = Dt(
  jl,
  Ft,
  rn,
  Rl
), ph = Dt(
  Ft,
  rn,
  Rl
);
function yh(e) {
  return nn(
    e,
    [fh, hh],
    [mh, ph]
  );
}
const _h = "Invalid Duration", Bl = {
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
}, gh = {
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
  },
  ...Bl
}, Be = 146097 / 400, jt = 146097 / 4800, vh = {
  years: {
    quarters: 4,
    months: 12,
    weeks: Be / 7,
    days: Be,
    hours: Be * 24,
    minutes: Be * 24 * 60,
    seconds: Be * 24 * 60 * 60,
    milliseconds: Be * 24 * 60 * 60 * 1e3
  },
  quarters: {
    months: 3,
    weeks: Be / 28,
    days: Be / 4,
    hours: Be * 24 / 4,
    minutes: Be * 24 * 60 / 4,
    seconds: Be * 24 * 60 * 60 / 4,
    milliseconds: Be * 24 * 60 * 60 * 1e3 / 4
  },
  months: {
    weeks: jt / 7,
    days: jt,
    hours: jt * 24,
    minutes: jt * 24 * 60,
    seconds: jt * 24 * 60 * 60,
    milliseconds: jt * 24 * 60 * 60 * 1e3
  },
  ...Bl
}, At = [
  "years",
  "quarters",
  "months",
  "weeks",
  "days",
  "hours",
  "minutes",
  "seconds",
  "milliseconds"
], bh = At.slice(0).reverse();
function Tt(e, t, n = !1) {
  const i = {
    values: n ? t.values : { ...e.values, ...t.values || {} },
    loc: e.loc.clone(t.loc),
    conversionAccuracy: t.conversionAccuracy || e.conversionAccuracy
  };
  return new X(i);
}
function kh(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function zl(e, t, n, i, s) {
  const r = e[s][n], l = t[n] / r, a = Math.sign(l) === Math.sign(i[s]), u = !a && i[s] !== 0 && Math.abs(l) <= 1 ? kh(l) : Math.trunc(l);
  i[s] += u, t[n] -= u * r;
}
function xh(e, t) {
  bh.reduce((n, i) => K(t[i]) ? n : (n && zl(e, t, n, t, i), i), null);
}
class X {
  /**
   * @private
   */
  constructor(t) {
    const n = t.conversionAccuracy === "longterm" || !1;
    this.values = t.values, this.loc = t.loc || ce.create(), this.conversionAccuracy = n ? "longterm" : "casual", this.invalid = t.invalid || null, this.matrix = n ? vh : gh, this.isLuxonDuration = !0;
  }
  /**
   * Create Duration from a number of milliseconds.
   * @param {number} count of milliseconds
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */
  static fromMillis(t, n) {
    return X.fromObject({ milliseconds: t }, n);
  }
  /**
   * Create a Duration from a JavaScript object with keys like 'years' and 'hours'.
   * If this object is empty then a zero milliseconds duration is returned.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.years
   * @param {number} obj.quarters
   * @param {number} obj.months
   * @param {number} obj.weeks
   * @param {number} obj.days
   * @param {number} obj.hours
   * @param {number} obj.minutes
   * @param {number} obj.seconds
   * @param {number} obj.milliseconds
   * @param {Object} [opts=[]] - options for creating this Duration
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */
  static fromObject(t, n = {}) {
    if (t == null || typeof t != "object")
      throw new He(
        `Duration.fromObject: argument expected to be an object, got ${t === null ? "null" : typeof t}`
      );
    return new X({
      values: ar(t, X.normalizeUnit),
      loc: ce.fromObject(n),
      conversionAccuracy: n.conversionAccuracy
    });
  }
  /**
   * Create a Duration from DurationLike.
   *
   * @param {Object | number | Duration} durationLike
   * One of:
   * - object with keys like 'years' and 'hours'.
   * - number representing milliseconds
   * - Duration instance
   * @return {Duration}
   */
  static fromDurationLike(t) {
    if (Et(t))
      return X.fromMillis(t);
    if (X.isDuration(t))
      return t;
    if (typeof t == "object")
      return X.fromObject(t);
    throw new He(
      `Unknown duration argument ${t} of type ${typeof t}`
    );
  }
  /**
   * Create a Duration from an ISO 8601 duration string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromISO('P3Y6M1W4DT12H30M5S').toObject() //=> { years: 3, months: 6, weeks: 1, days: 4, hours: 12, minutes: 30, seconds: 5 }
   * @example Duration.fromISO('PT23H').toObject() //=> { hours: 23 }
   * @example Duration.fromISO('P5Y3M').toObject() //=> { years: 5, months: 3 }
   * @return {Duration}
   */
  static fromISO(t, n) {
    const [i] = uh(t);
    return i ? X.fromObject(i, n) : X.invalid("unparsable", `the input "${t}" can't be parsed as ISO 8601`);
  }
  /**
   * Create a Duration from an ISO 8601 time string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Times
   * @example Duration.fromISOTime('11:22:33.444').toObject() //=> { hours: 11, minutes: 22, seconds: 33, milliseconds: 444 }
   * @example Duration.fromISOTime('11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('T11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('T1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @return {Duration}
   */
  static fromISOTime(t, n) {
    const [i] = ch(t);
    return i ? X.fromObject(i, n) : X.invalid("unparsable", `the input "${t}" can't be parsed as ISO 8601`);
  }
  /**
   * Create an invalid Duration.
   * @param {string} reason - simple string of why this datetime is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Duration}
   */
  static invalid(t, n = null) {
    if (!t)
      throw new He("need to specify a reason the Duration is invalid");
    const i = t instanceof Ye ? t : new Ye(t, n);
    if (_e.throwOnInvalid)
      throw new Yf(i);
    return new X({ invalid: i });
  }
  /**
   * @private
   */
  static normalizeUnit(t) {
    const n = {
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
    }[t && t.toLowerCase()];
    if (!n)
      throw new ll(t);
    return n;
  }
  /**
   * Check if an object is a Duration. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  static isDuration(t) {
    return t && t.isLuxonDuration || !1;
  }
  /**
   * Get  the locale of a Duration, such 'en-GB'
   * @type {string}
   */
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }
  /**
   * Get the numbering system of a Duration, such 'beng'. The numbering system is used when formatting the Duration
   *
   * @type {string}
   */
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }
  /**
   * Returns a string representation of this Duration formatted according to the specified format string. You may use these tokens:
   * * `S` for milliseconds
   * * `s` for seconds
   * * `m` for minutes
   * * `h` for hours
   * * `d` for days
   * * `w` for weeks
   * * `M` for months
   * * `y` for years
   * Notes:
   * * Add padding by repeating the token, e.g. "yy" pads the years to two digits, "hhhh" pads the hours out to four digits
   * * The duration will be converted to the set of units in the format string using {@link Duration#shiftTo} and the Durations's conversion accuracy setting.
   * @param {string} fmt - the format string
   * @param {Object} opts - options
   * @param {boolean} [opts.floor=true] - floor numerical values
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("y d s") //=> "1 6 2"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("yy dd sss") //=> "01 06 002"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("M S") //=> "12 518402000"
   * @return {string}
   */
  toFormat(t, n = {}) {
    const i = {
      ...n,
      floor: n.round !== !1 && n.floor !== !1
    };
    return this.isValid ? Le.create(this.loc, i).formatDurationFromString(this, t) : _h;
  }
  /**
   * Returns a string representation of a Duration with all units included.
   * To modify its behavior use the `listStyle` and any Intl.NumberFormat option, though `unitDisplay` is especially relevant.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
   * @param opts - On option object to override the formatting. Accepts the same keys as the options parameter of the native `Int.NumberFormat` constructor, as well as `listStyle`.
   * @example
   * ```js
   * var dur = Duration.fromObject({ days: 1, hours: 5, minutes: 6 })
   * dur.toHuman() //=> '1 day, 5 hours, 6 minutes'
   * dur.toHuman({ listStyle: "long" }) //=> '1 day, 5 hours, and 6 minutes'
   * dur.toHuman({ unitDisplay: "short" }) //=> '1 day, 5 hr, 6 min'
   * ```
   */
  toHuman(t = {}) {
    const n = At.map((i) => {
      const s = this.values[i];
      return K(s) ? null : this.loc.numberFormatter({ style: "unit", unitDisplay: "long", ...t, unit: i.slice(0, -1) }).format(s);
    }).filter((i) => i);
    return this.loc.listFormatter({ type: "conjunction", style: t.listStyle || "narrow", ...t }).format(n);
  }
  /**
   * Returns a JavaScript object with this Duration's values.
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toObject() //=> { years: 1, days: 6, seconds: 2 }
   * @return {Object}
   */
  toObject() {
    return this.isValid ? { ...this.values } : {};
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Duration.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromObject({ years: 3, seconds: 45 }).toISO() //=> 'P3YT45S'
   * @example Duration.fromObject({ months: 4, seconds: 45 }).toISO() //=> 'P4MT45S'
   * @example Duration.fromObject({ months: 5 }).toISO() //=> 'P5M'
   * @example Duration.fromObject({ minutes: 5 }).toISO() //=> 'PT5M'
   * @example Duration.fromObject({ milliseconds: 6 }).toISO() //=> 'PT0.006S'
   * @return {string}
   */
  toISO() {
    if (!this.isValid)
      return null;
    let t = "P";
    return this.years !== 0 && (t += this.years + "Y"), (this.months !== 0 || this.quarters !== 0) && (t += this.months + this.quarters * 3 + "M"), this.weeks !== 0 && (t += this.weeks + "W"), this.days !== 0 && (t += this.days + "D"), (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0) && (t += "T"), this.hours !== 0 && (t += this.hours + "H"), this.minutes !== 0 && (t += this.minutes + "M"), (this.seconds !== 0 || this.milliseconds !== 0) && (t += ki(this.seconds + this.milliseconds / 1e3, 3) + "S"), t === "P" && (t += "T0S"), t;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Duration, formatted as a time of day.
   * Note that this will return null if the duration is invalid, negative, or equal to or greater than 24 hours.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Times
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example Duration.fromObject({ hours: 11 }).toISOTime() //=> '11:00:00.000'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressMilliseconds: true }) //=> '11:00:00'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressSeconds: true }) //=> '11:00'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ includePrefix: true }) //=> 'T11:00:00.000'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ format: 'basic' }) //=> '110000.000'
   * @return {string}
   */
  toISOTime(t = {}) {
    if (!this.isValid)
      return null;
    const n = this.toMillis();
    if (n < 0 || n >= 864e5)
      return null;
    t = {
      suppressMilliseconds: !1,
      suppressSeconds: !1,
      includePrefix: !1,
      format: "extended",
      ...t
    };
    const i = this.shiftTo("hours", "minutes", "seconds", "milliseconds");
    let s = t.format === "basic" ? "hhmm" : "hh:mm";
    (!t.suppressSeconds || i.seconds !== 0 || i.milliseconds !== 0) && (s += t.format === "basic" ? "ss" : ":ss", (!t.suppressMilliseconds || i.milliseconds !== 0) && (s += ".SSS"));
    let r = i.toFormat(s);
    return t.includePrefix && (r = "T" + r), r;
  }
  /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in JSON.
   * @return {string}
   */
  toJSON() {
    return this.toISO();
  }
  /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in debugging.
   * @return {string}
   */
  toString() {
    return this.toISO();
  }
  /**
   * Returns an milliseconds value of this Duration.
   * @return {number}
   */
  toMillis() {
    return this.as("milliseconds");
  }
  /**
   * Returns an milliseconds value of this Duration. Alias of {@link toMillis}
   * @return {number}
   */
  valueOf() {
    return this.toMillis();
  }
  /**
   * Make this Duration longer by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */
  plus(t) {
    if (!this.isValid)
      return this;
    const n = X.fromDurationLike(t), i = {};
    for (const s of At)
      (Zt(n.values, s) || Zt(this.values, s)) && (i[s] = n.get(s) + this.get(s));
    return Tt(this, { values: i }, !0);
  }
  /**
   * Make this Duration shorter by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */
  minus(t) {
    if (!this.isValid)
      return this;
    const n = X.fromDurationLike(t);
    return this.plus(n.negate());
  }
  /**
   * Scale this Duration by the specified amount. Return a newly-constructed Duration.
   * @param {function} fn - The function to apply to each unit. Arity is 1 or 2: the value of the unit and, optionally, the unit name. Must return a number.
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits(x => x * 2) //=> { hours: 2, minutes: 60 }
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits((x, u) => u === "hour" ? x * 2 : x) //=> { hours: 2, minutes: 30 }
   * @return {Duration}
   */
  mapUnits(t) {
    if (!this.isValid)
      return this;
    const n = {};
    for (const i of Object.keys(this.values))
      n[i] = Al(t(this.values[i], i));
    return Tt(this, { values: n }, !0);
  }
  /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example Duration.fromObject({years: 2, days: 3}).get('years') //=> 2
   * @example Duration.fromObject({years: 2, days: 3}).get('months') //=> 0
   * @example Duration.fromObject({years: 2, days: 3}).get('days') //=> 3
   * @return {number}
   */
  get(t) {
    return this[X.normalizeUnit(t)];
  }
  /**
   * "Set" the values of specified units. Return a newly-constructed Duration.
   * @param {Object} values - a mapping of units to numbers
   * @example dur.set({ years: 2017 })
   * @example dur.set({ hours: 8, minutes: 30 })
   * @return {Duration}
   */
  set(t) {
    if (!this.isValid)
      return this;
    const n = { ...this.values, ...ar(t, X.normalizeUnit) };
    return Tt(this, { values: n });
  }
  /**
   * "Set" the locale and/or numberingSystem.  Returns a newly-constructed Duration.
   * @example dur.reconfigure({ locale: 'en-GB' })
   * @return {Duration}
   */
  reconfigure({ locale: t, numberingSystem: n, conversionAccuracy: i } = {}) {
    const s = this.loc.clone({ locale: t, numberingSystem: n }), r = { loc: s };
    return i && (r.conversionAccuracy = i), Tt(this, r);
  }
  /**
   * Return the length of the duration in the specified unit.
   * @param {string} unit - a unit such as 'minutes' or 'days'
   * @example Duration.fromObject({years: 1}).as('days') //=> 365
   * @example Duration.fromObject({years: 1}).as('months') //=> 12
   * @example Duration.fromObject({hours: 60}).as('days') //=> 2.5
   * @return {number}
   */
  as(t) {
    return this.isValid ? this.shiftTo(t).get(t) : NaN;
  }
  /**
   * Reduce this Duration to its canonical representation in its current units.
   * @example Duration.fromObject({ years: 2, days: 5000 }).normalize().toObject() //=> { years: 15, days: 255 }
   * @example Duration.fromObject({ hours: 12, minutes: -45 }).normalize().toObject() //=> { hours: 11, minutes: 15 }
   * @return {Duration}
   */
  normalize() {
    if (!this.isValid)
      return this;
    const t = this.toObject();
    return xh(this.matrix, t), Tt(this, { values: t }, !0);
  }
  /**
   * Convert this Duration into its representation in a different set of units.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).shiftTo('minutes', 'milliseconds').toObject() //=> { minutes: 60, milliseconds: 30000 }
   * @return {Duration}
   */
  shiftTo(...t) {
    if (!this.isValid)
      return this;
    if (t.length === 0)
      return this;
    t = t.map((l) => X.normalizeUnit(l));
    const n = {}, i = {}, s = this.toObject();
    let r;
    for (const l of At)
      if (t.indexOf(l) >= 0) {
        r = l;
        let a = 0;
        for (const c in i)
          a += this.matrix[c][l] * i[c], i[c] = 0;
        Et(s[l]) && (a += s[l]);
        const u = Math.trunc(a);
        n[l] = u, i[l] = (a * 1e3 - u * 1e3) / 1e3;
        for (const c in s)
          At.indexOf(c) > At.indexOf(l) && zl(this.matrix, s, c, n, l);
      } else
        Et(s[l]) && (i[l] = s[l]);
    for (const l in i)
      i[l] !== 0 && (n[r] += l === r ? i[l] : i[l] / this.matrix[r][l]);
    return Tt(this, { values: n }, !0).normalize();
  }
  /**
   * Return the negative of this Duration.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).negate().toObject() //=> { hours: -1, seconds: -30 }
   * @return {Duration}
   */
  negate() {
    if (!this.isValid)
      return this;
    const t = {};
    for (const n of Object.keys(this.values))
      t[n] = this.values[n] === 0 ? 0 : -this.values[n];
    return Tt(this, { values: t }, !0);
  }
  /**
   * Get the years.
   * @type {number}
   */
  get years() {
    return this.isValid ? this.values.years || 0 : NaN;
  }
  /**
   * Get the quarters.
   * @type {number}
   */
  get quarters() {
    return this.isValid ? this.values.quarters || 0 : NaN;
  }
  /**
   * Get the months.
   * @type {number}
   */
  get months() {
    return this.isValid ? this.values.months || 0 : NaN;
  }
  /**
   * Get the weeks
   * @type {number}
   */
  get weeks() {
    return this.isValid ? this.values.weeks || 0 : NaN;
  }
  /**
   * Get the days.
   * @type {number}
   */
  get days() {
    return this.isValid ? this.values.days || 0 : NaN;
  }
  /**
   * Get the hours.
   * @type {number}
   */
  get hours() {
    return this.isValid ? this.values.hours || 0 : NaN;
  }
  /**
   * Get the minutes.
   * @type {number}
   */
  get minutes() {
    return this.isValid ? this.values.minutes || 0 : NaN;
  }
  /**
   * Get the seconds.
   * @return {number}
   */
  get seconds() {
    return this.isValid ? this.values.seconds || 0 : NaN;
  }
  /**
   * Get the milliseconds.
   * @return {number}
   */
  get milliseconds() {
    return this.isValid ? this.values.milliseconds || 0 : NaN;
  }
  /**
   * Returns whether the Duration is invalid. Invalid durations are returned by diff operations
   * on invalid DateTimes or Intervals.
   * @return {boolean}
   */
  get isValid() {
    return this.invalid === null;
  }
  /**
   * Returns an error code if this Duration became invalid, or null if the Duration is valid
   * @return {string}
   */
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  /**
   * Returns an explanation of why this Duration became invalid, or null if the Duration is valid
   * @type {string}
   */
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  /**
   * Equality check
   * Two Durations are equal iff they have the same units and the same values for each unit.
   * @param {Duration} other
   * @return {boolean}
   */
  equals(t) {
    if (!this.isValid || !t.isValid || !this.loc.equals(t.loc))
      return !1;
    function n(i, s) {
      return i === void 0 || i === 0 ? s === void 0 || s === 0 : i === s;
    }
    for (const i of At)
      if (!n(this.values[i], t.values[i]))
        return !1;
    return !0;
  }
}
const on = "Invalid Interval";
function wh(e, t) {
  return !e || !e.isValid ? he.invalid("missing or invalid start") : !t || !t.isValid ? he.invalid("missing or invalid end") : t < e ? he.invalid(
    "end before start",
    `The end of an interval must be after its start, but you had start=${e.toISO()} and end=${t.toISO()}`
  ) : null;
}
class he {
  /**
   * @private
   */
  constructor(t) {
    this.s = t.start, this.e = t.end, this.invalid = t.invalid || null, this.isLuxonInterval = !0;
  }
  /**
   * Create an invalid Interval.
   * @param {string} reason - simple string of why this Interval is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Interval}
   */
  static invalid(t, n = null) {
    if (!t)
      throw new He("need to specify a reason the Interval is invalid");
    const i = t instanceof Ye ? t : new Ye(t, n);
    if (_e.throwOnInvalid)
      throw new Kf(i);
    return new he({ invalid: i });
  }
  /**
   * Create an Interval from a start DateTime and an end DateTime. Inclusive of the start but not the end.
   * @param {DateTime|Date|Object} start
   * @param {DateTime|Date|Object} end
   * @return {Interval}
   */
  static fromDateTimes(t, n) {
    const i = cn(t), s = cn(n), r = wh(i, s);
    return r ?? new he({
      start: i,
      end: s
    });
  }
  /**
   * Create an Interval from a start DateTime and a Duration to extend to.
   * @param {DateTime|Date|Object} start
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  static after(t, n) {
    const i = X.fromDurationLike(n), s = cn(t);
    return he.fromDateTimes(s, s.plus(i));
  }
  /**
   * Create an Interval from an end DateTime and a Duration to extend backwards to.
   * @param {DateTime|Date|Object} end
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  static before(t, n) {
    const i = X.fromDurationLike(n), s = cn(t);
    return he.fromDateTimes(s.minus(i), s);
  }
  /**
   * Create an Interval from an ISO 8601 string.
   * Accepts `<start>/<end>`, `<start>/<duration>`, and `<duration>/<end>` formats.
   * @param {string} text - the ISO string to parse
   * @param {Object} [opts] - options to pass {@link DateTime#fromISO} and optionally {@link Duration#fromISO}
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {Interval}
   */
  static fromISO(t, n) {
    const [i, s] = (t || "").split("/", 2);
    if (i && s) {
      let r, l;
      try {
        r = j.fromISO(i, n), l = r.isValid;
      } catch {
        l = !1;
      }
      let a, u;
      try {
        a = j.fromISO(s, n), u = a.isValid;
      } catch {
        u = !1;
      }
      if (l && u)
        return he.fromDateTimes(r, a);
      if (l) {
        const c = X.fromISO(s, n);
        if (c.isValid)
          return he.after(r, c);
      } else if (u) {
        const c = X.fromISO(i, n);
        if (c.isValid)
          return he.before(a, c);
      }
    }
    return he.invalid("unparsable", `the input "${t}" can't be parsed as ISO 8601`);
  }
  /**
   * Check if an object is an Interval. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  static isInterval(t) {
    return t && t.isLuxonInterval || !1;
  }
  /**
   * Returns the start of the Interval
   * @type {DateTime}
   */
  get start() {
    return this.isValid ? this.s : null;
  }
  /**
   * Returns the end of the Interval
   * @type {DateTime}
   */
  get end() {
    return this.isValid ? this.e : null;
  }
  /**
   * Returns whether this Interval's end is at least its start, meaning that the Interval isn't 'backwards'.
   * @type {boolean}
   */
  get isValid() {
    return this.invalidReason === null;
  }
  /**
   * Returns an error code if this Interval is invalid, or null if the Interval is valid
   * @type {string}
   */
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  /**
   * Returns an explanation of why this Interval became invalid, or null if the Interval is valid
   * @type {string}
   */
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  /**
   * Returns the length of the Interval in the specified unit.
   * @param {string} unit - the unit (such as 'hours' or 'days') to return the length in.
   * @return {number}
   */
  length(t = "milliseconds") {
    return this.isValid ? this.toDuration(t).get(t) : NaN;
  }
  /**
   * Returns the count of minutes, hours, days, months, or years included in the Interval, even in part.
   * Unlike {@link Interval#length} this counts sections of the calendar, not periods of time, e.g. specifying 'day'
   * asks 'what dates are included in this interval?', not 'how many days long is this interval?'
   * @param {string} [unit='milliseconds'] - the unit of time to count.
   * @return {number}
   */
  count(t = "milliseconds") {
    if (!this.isValid)
      return NaN;
    const n = this.start.startOf(t), i = this.end.startOf(t);
    return Math.floor(i.diff(n, t).get(t)) + 1;
  }
  /**
   * Returns whether this Interval's start and end are both in the same unit of time
   * @param {string} unit - the unit of time to check sameness on
   * @return {boolean}
   */
  hasSame(t) {
    return this.isValid ? this.isEmpty() || this.e.minus(1).hasSame(this.s, t) : !1;
  }
  /**
   * Return whether this Interval has the same start and end DateTimes.
   * @return {boolean}
   */
  isEmpty() {
    return this.s.valueOf() === this.e.valueOf();
  }
  /**
   * Return whether this Interval's start is after the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  isAfter(t) {
    return this.isValid ? this.s > t : !1;
  }
  /**
   * Return whether this Interval's end is before the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  isBefore(t) {
    return this.isValid ? this.e <= t : !1;
  }
  /**
   * Return whether this Interval contains the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  contains(t) {
    return this.isValid ? this.s <= t && this.e > t : !1;
  }
  /**
   * "Sets" the start and/or end dates. Returns a newly-constructed Interval.
   * @param {Object} values - the values to set
   * @param {DateTime} values.start - the starting DateTime
   * @param {DateTime} values.end - the ending DateTime
   * @return {Interval}
   */
  set({ start: t, end: n } = {}) {
    return this.isValid ? he.fromDateTimes(t || this.s, n || this.e) : this;
  }
  /**
   * Split this Interval at each of the specified DateTimes
   * @param {...DateTime} dateTimes - the unit of time to count.
   * @return {Array}
   */
  splitAt(...t) {
    if (!this.isValid)
      return [];
    const n = t.map(cn).filter((l) => this.contains(l)).sort(), i = [];
    let { s } = this, r = 0;
    for (; s < this.e; ) {
      const l = n[r] || this.e, a = +l > +this.e ? this.e : l;
      i.push(he.fromDateTimes(s, a)), s = a, r += 1;
    }
    return i;
  }
  /**
   * Split this Interval into smaller Intervals, each of the specified length.
   * Left over time is grouped into a smaller interval
   * @param {Duration|Object|number} duration - The length of each resulting interval.
   * @return {Array}
   */
  splitBy(t) {
    const n = X.fromDurationLike(t);
    if (!this.isValid || !n.isValid || n.as("milliseconds") === 0)
      return [];
    let { s: i } = this, s = 1, r;
    const l = [];
    for (; i < this.e; ) {
      const a = this.start.plus(n.mapUnits((u) => u * s));
      r = +a > +this.e ? this.e : a, l.push(he.fromDateTimes(i, r)), i = r, s += 1;
    }
    return l;
  }
  /**
   * Split this Interval into the specified number of smaller intervals.
   * @param {number} numberOfParts - The number of Intervals to divide the Interval into.
   * @return {Array}
   */
  divideEqually(t) {
    return this.isValid ? this.splitBy(this.length() / t).slice(0, t) : [];
  }
  /**
   * Return whether this Interval overlaps with the specified Interval
   * @param {Interval} other
   * @return {boolean}
   */
  overlaps(t) {
    return this.e > t.s && this.s < t.e;
  }
  /**
   * Return whether this Interval's end is adjacent to the specified Interval's start.
   * @param {Interval} other
   * @return {boolean}
   */
  abutsStart(t) {
    return this.isValid ? +this.e == +t.s : !1;
  }
  /**
   * Return whether this Interval's start is adjacent to the specified Interval's end.
   * @param {Interval} other
   * @return {boolean}
   */
  abutsEnd(t) {
    return this.isValid ? +t.e == +this.s : !1;
  }
  /**
   * Return whether this Interval engulfs the start and end of the specified Interval.
   * @param {Interval} other
   * @return {boolean}
   */
  engulfs(t) {
    return this.isValid ? this.s <= t.s && this.e >= t.e : !1;
  }
  /**
   * Return whether this Interval has the same start and end as the specified Interval.
   * @param {Interval} other
   * @return {boolean}
   */
  equals(t) {
    return !this.isValid || !t.isValid ? !1 : this.s.equals(t.s) && this.e.equals(t.e);
  }
  /**
   * Return an Interval representing the intersection of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the maximum start time and the minimum end time of the two Intervals.
   * Returns null if the intersection is empty, meaning, the intervals don't intersect.
   * @param {Interval} other
   * @return {Interval}
   */
  intersection(t) {
    if (!this.isValid)
      return this;
    const n = this.s > t.s ? this.s : t.s, i = this.e < t.e ? this.e : t.e;
    return n >= i ? null : he.fromDateTimes(n, i);
  }
  /**
   * Return an Interval representing the union of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the minimum start time and the maximum end time of the two Intervals.
   * @param {Interval} other
   * @return {Interval}
   */
  union(t) {
    if (!this.isValid)
      return this;
    const n = this.s < t.s ? this.s : t.s, i = this.e > t.e ? this.e : t.e;
    return he.fromDateTimes(n, i);
  }
  /**
   * Merge an array of Intervals into a equivalent minimal set of Intervals.
   * Combines overlapping and adjacent Intervals.
   * @param {Array} intervals
   * @return {Array}
   */
  static merge(t) {
    const [n, i] = t.sort((s, r) => s.s - r.s).reduce(
      ([s, r], l) => r ? r.overlaps(l) || r.abutsStart(l) ? [s, r.union(l)] : [s.concat([r]), l] : [s, l],
      [[], null]
    );
    return i && n.push(i), n;
  }
  /**
   * Return an array of Intervals representing the spans of time that only appear in one of the specified Intervals.
   * @param {Array} intervals
   * @return {Array}
   */
  static xor(t) {
    let n = null, i = 0;
    const s = [], r = t.map((u) => [
      { time: u.s, type: "s" },
      { time: u.e, type: "e" }
    ]), l = Array.prototype.concat(...r), a = l.sort((u, c) => u.time - c.time);
    for (const u of a)
      i += u.type === "s" ? 1 : -1, i === 1 ? n = u.time : (n && +n != +u.time && s.push(he.fromDateTimes(n, u.time)), n = null);
    return he.merge(s);
  }
  /**
   * Return an Interval representing the span of time in this Interval that doesn't overlap with any of the specified Intervals.
   * @param {...Interval} intervals
   * @return {Array}
   */
  difference(...t) {
    return he.xor([this].concat(t)).map((n) => this.intersection(n)).filter((n) => n && !n.isEmpty());
  }
  /**
   * Returns a string representation of this Interval appropriate for debugging.
   * @return {string}
   */
  toString() {
    return this.isValid ? `[${this.s.toISO()} – ${this.e.toISO()})` : on;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Interval.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime#toISO}
   * @return {string}
   */
  toISO(t) {
    return this.isValid ? `${this.s.toISO(t)}/${this.e.toISO(t)}` : on;
  }
  /**
   * Returns an ISO 8601-compliant string representation of date of this Interval.
   * The time components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {string}
   */
  toISODate() {
    return this.isValid ? `${this.s.toISODate()}/${this.e.toISODate()}` : on;
  }
  /**
   * Returns an ISO 8601-compliant string representation of time of this Interval.
   * The date components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime#toISO}
   * @return {string}
   */
  toISOTime(t) {
    return this.isValid ? `${this.s.toISOTime(t)}/${this.e.toISOTime(t)}` : on;
  }
  /**
   * Returns a string representation of this Interval formatted according to the specified format string.
   * @param {string} dateFormat - the format string. This string formats the start and end time. See {@link DateTime#toFormat} for details.
   * @param {Object} opts - options
   * @param {string} [opts.separator =  ' – '] - a separator to place between the start and end representations
   * @return {string}
   */
  toFormat(t, { separator: n = " – " } = {}) {
    return this.isValid ? `${this.s.toFormat(t)}${n}${this.e.toFormat(t)}` : on;
  }
  /**
   * Return a Duration representing the time spanned by this interval.
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example Interval.fromDateTimes(dt1, dt2).toDuration().toObject() //=> { milliseconds: 88489257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('days').toObject() //=> { days: 1.0241812152777778 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes']).toObject() //=> { hours: 24, minutes: 34.82095 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes', 'seconds']).toObject() //=> { hours: 24, minutes: 34, seconds: 49.257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('seconds').toObject() //=> { seconds: 88489.257 }
   * @return {Duration}
   */
  toDuration(t, n) {
    return this.isValid ? this.e.diff(this.s, t, n) : X.invalid(this.invalidReason);
  }
  /**
   * Run mapFn on the interval start and end, returning a new Interval from the resulting DateTimes
   * @param {function} mapFn
   * @return {Interval}
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.toUTC())
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.plus({ hours: 2 }))
   */
  mapEndpoints(t) {
    return he.fromDateTimes(t(this.s), t(this.e));
  }
}
class Rn {
  /**
   * Return whether the specified zone contains a DST.
   * @param {string|Zone} [zone='local'] - Zone to check. Defaults to the environment's local zone.
   * @return {boolean}
   */
  static hasDST(t = _e.defaultZone) {
    const n = j.now().setZone(t).set({ month: 12 });
    return !t.isUniversal && n.offset !== n.set({ month: 6 }).offset;
  }
  /**
   * Return whether the specified zone is a valid IANA specifier.
   * @param {string} zone - Zone to check
   * @return {boolean}
   */
  static isValidIANAZone(t) {
    return lt.isValidZone(t);
  }
  /**
   * Converts the input into a {@link Zone} instance.
   *
   * * If `input` is already a Zone instance, it is returned unchanged.
   * * If `input` is a string containing a valid time zone name, a Zone instance
   *   with that name is returned.
   * * If `input` is a string that doesn't refer to a known time zone, a Zone
   *   instance with {@link Zone#isValid} == false is returned.
   * * If `input is a number, a Zone instance with the specified fixed offset
   *   in minutes is returned.
   * * If `input` is `null` or `undefined`, the default zone is returned.
   * @param {string|Zone|number} [input] - the value to be converted
   * @return {Zone}
   */
  static normalizeZone(t) {
    return pt(t, _e.defaultZone);
  }
  /**
   * Return an array of standalone month names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @example Info.months()[0] //=> 'January'
   * @example Info.months('short')[0] //=> 'Jan'
   * @example Info.months('numeric')[0] //=> '1'
   * @example Info.months('short', { locale: 'fr-CA' } )[0] //=> 'janv.'
   * @example Info.months('numeric', { locale: 'ar' })[0] //=> '١'
   * @example Info.months('long', { outputCalendar: 'islamic' })[0] //=> 'Rabiʻ I'
   * @return {Array}
   */
  static months(t = "long", { locale: n = null, numberingSystem: i = null, locObj: s = null, outputCalendar: r = "gregory" } = {}) {
    return (s || ce.create(n, i, r)).months(t);
  }
  /**
   * Return an array of format month names.
   * Format months differ from standalone months in that they're meant to appear next to the day of the month. In some languages, that
   * changes the string.
   * See {@link Info#months}
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @return {Array}
   */
  static monthsFormat(t = "long", { locale: n = null, numberingSystem: i = null, locObj: s = null, outputCalendar: r = "gregory" } = {}) {
    return (s || ce.create(n, i, r)).months(t, !0);
  }
  /**
   * Return an array of standalone week names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the weekday representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @example Info.weekdays()[0] //=> 'Monday'
   * @example Info.weekdays('short')[0] //=> 'Mon'
   * @example Info.weekdays('short', { locale: 'fr-CA' })[0] //=> 'lun.'
   * @example Info.weekdays('short', { locale: 'ar' })[0] //=> 'الاثنين'
   * @return {Array}
   */
  static weekdays(t = "long", { locale: n = null, numberingSystem: i = null, locObj: s = null } = {}) {
    return (s || ce.create(n, i, null)).weekdays(t);
  }
  /**
   * Return an array of format week names.
   * Format weekdays differ from standalone weekdays in that they're meant to appear next to more date information. In some languages, that
   * changes the string.
   * See {@link Info#weekdays}
   * @param {string} [length='long'] - the length of the month representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale=null] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @return {Array}
   */
  static weekdaysFormat(t = "long", { locale: n = null, numberingSystem: i = null, locObj: s = null } = {}) {
    return (s || ce.create(n, i, null)).weekdays(t, !0);
  }
  /**
   * Return an array of meridiems.
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.meridiems() //=> [ 'AM', 'PM' ]
   * @example Info.meridiems({ locale: 'my' }) //=> [ 'နံနက်', 'ညနေ' ]
   * @return {Array}
   */
  static meridiems({ locale: t = null } = {}) {
    return ce.create(t).meridiems();
  }
  /**
   * Return an array of eras, such as ['BC', 'AD']. The locale can be specified, but the calendar system is always Gregorian.
   * @param {string} [length='short'] - the length of the era representation, such as "short" or "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.eras() //=> [ 'BC', 'AD' ]
   * @example Info.eras('long') //=> [ 'Before Christ', 'Anno Domini' ]
   * @example Info.eras('long', { locale: 'fr' }) //=> [ 'avant Jésus-Christ', 'après Jésus-Christ' ]
   * @return {Array}
   */
  static eras(t = "short", { locale: n = null } = {}) {
    return ce.create(n, null, "gregory").eras(t);
  }
  /**
   * Return the set of available features in this environment.
   * Some features of Luxon are not available in all environments. For example, on older browsers, relative time formatting support is not available. Use this function to figure out if that's the case.
   * Keys:
   * * `relative`: whether this environment supports relative time formatting
   * @example Info.features() //=> { relative: false }
   * @return {Object}
   */
  static features() {
    return { relative: Ol() };
  }
}
function rs(e, t) {
  const n = (s) => s.toUTC(0, { keepLocalTime: !0 }).startOf("day").valueOf(), i = n(t) - n(e);
  return Math.floor(X.fromMillis(i).as("days"));
}
function Sh(e, t, n) {
  const i = [
    ["years", (a, u) => u.year - a.year],
    ["quarters", (a, u) => u.quarter - a.quarter],
    ["months", (a, u) => u.month - a.month + (u.year - a.year) * 12],
    [
      "weeks",
      (a, u) => {
        const c = rs(a, u);
        return (c - c % 7) / 7;
      }
    ],
    ["days", rs]
  ], s = {};
  let r, l;
  for (const [a, u] of i)
    if (n.indexOf(a) >= 0) {
      r = a;
      let c = u(e, t);
      l = e.plus({ [a]: c }), l > t ? (e = e.plus({ [a]: c - 1 }), c -= 1) : e = l, s[a] = c;
    }
  return [e, s, l, r];
}
function Th(e, t, n, i) {
  let [s, r, l, a] = Sh(e, t, n);
  const u = t - s, c = n.filter(
    (p) => ["hours", "minutes", "seconds", "milliseconds"].indexOf(p) >= 0
  );
  c.length === 0 && (l < t && (l = s.plus({ [a]: 1 })), l !== s && (r[a] = (r[a] || 0) + u / (l - s)));
  const f = X.fromObject(r, i);
  return c.length > 0 ? X.fromMillis(u, i).shiftTo(...c).plus(f) : f;
}
const Vi = {
  arab: "[٠-٩]",
  arabext: "[۰-۹]",
  bali: "[᭐-᭙]",
  beng: "[০-৯]",
  deva: "[०-९]",
  fullwide: "[０-９]",
  gujr: "[૦-૯]",
  hanidec: "[〇|一|二|三|四|五|六|七|八|九]",
  khmr: "[០-៩]",
  knda: "[೦-೯]",
  laoo: "[໐-໙]",
  limb: "[᥆-᥏]",
  mlym: "[൦-൯]",
  mong: "[᠐-᠙]",
  mymr: "[၀-၉]",
  orya: "[୦-୯]",
  tamldec: "[௦-௯]",
  telu: "[౦-౯]",
  thai: "[๐-๙]",
  tibt: "[༠-༩]",
  latn: "\\d"
}, is = {
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
}, Oh = Vi.hanidec.replace(/[\[|\]]/g, "").split("");
function Vh(e) {
  let t = parseInt(e, 10);
  if (isNaN(t)) {
    t = "";
    for (let n = 0; n < e.length; n++) {
      const i = e.charCodeAt(n);
      if (e[n].search(Vi.hanidec) !== -1)
        t += Oh.indexOf(e[n]);
      else
        for (const s in is) {
          const [r, l] = is[s];
          i >= r && i <= l && (t += i - r);
        }
    }
    return parseInt(t, 10);
  } else
    return t;
}
function We({ numberingSystem: e }, t = "") {
  return new RegExp(`${Vi[e || "latn"]}${t}`);
}
const Ah = "missing Intl.DateTimeFormat.formatToParts support";
function ee(e, t = (n) => n) {
  return { regex: e, deser: ([n]) => t(Vh(n)) };
}
const Ch = String.fromCharCode(160), Hl = `( |${Ch})`, ql = new RegExp(Hl, "g");
function Eh(e) {
  return e.replace(/\./g, "\\.?").replace(ql, Hl);
}
function ss(e) {
  return e.replace(/\./g, "").replace(ql, " ").toLowerCase();
}
function Ze(e, t) {
  return e === null ? null : {
    regex: RegExp(e.map(Eh).join("|")),
    deser: ([n]) => e.findIndex((i) => ss(n) === ss(i)) + t
  };
}
function ls(e, t) {
  return { regex: e, deser: ([, n, i]) => wr(n, i), groups: t };
}
function Ir(e) {
  return { regex: e, deser: ([t]) => t };
}
function Mh(e) {
  return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}
function Ih(e, t) {
  const n = We(t), i = We(t, "{2}"), s = We(t, "{3}"), r = We(t, "{4}"), l = We(t, "{6}"), a = We(t, "{1,2}"), u = We(t, "{1,3}"), c = We(t, "{1,6}"), f = We(t, "{1,9}"), p = We(t, "{2,4}"), g = We(t, "{4,6}"), v = (E) => ({ regex: RegExp(Mh(E.val)), deser: ([q]) => q, literal: !0 }), A = ((E) => {
    if (e.literal)
      return v(E);
    switch (E.val) {
      case "G":
        return Ze(t.eras("short", !1), 0);
      case "GG":
        return Ze(t.eras("long", !1), 0);
      case "y":
        return ee(c);
      case "yy":
        return ee(p, ri);
      case "yyyy":
        return ee(r);
      case "yyyyy":
        return ee(g);
      case "yyyyyy":
        return ee(l);
      case "M":
        return ee(a);
      case "MM":
        return ee(i);
      case "MMM":
        return Ze(t.months("short", !0, !1), 1);
      case "MMMM":
        return Ze(t.months("long", !0, !1), 1);
      case "L":
        return ee(a);
      case "LL":
        return ee(i);
      case "LLL":
        return Ze(t.months("short", !1, !1), 1);
      case "LLLL":
        return Ze(t.months("long", !1, !1), 1);
      case "d":
        return ee(a);
      case "dd":
        return ee(i);
      case "o":
        return ee(u);
      case "ooo":
        return ee(s);
      case "HH":
        return ee(i);
      case "H":
        return ee(a);
      case "hh":
        return ee(i);
      case "h":
        return ee(a);
      case "mm":
        return ee(i);
      case "m":
        return ee(a);
      case "q":
        return ee(a);
      case "qq":
        return ee(i);
      case "s":
        return ee(a);
      case "ss":
        return ee(i);
      case "S":
        return ee(u);
      case "SSS":
        return ee(s);
      case "u":
        return Ir(f);
      case "uu":
        return Ir(a);
      case "uuu":
        return ee(n);
      case "a":
        return Ze(t.meridiems(), 0);
      case "kkkk":
        return ee(r);
      case "kk":
        return ee(p, ri);
      case "W":
        return ee(a);
      case "WW":
        return ee(i);
      case "E":
      case "c":
        return ee(n);
      case "EEE":
        return Ze(t.weekdays("short", !1, !1), 1);
      case "EEEE":
        return Ze(t.weekdays("long", !1, !1), 1);
      case "ccc":
        return Ze(t.weekdays("short", !0, !1), 1);
      case "cccc":
        return Ze(t.weekdays("long", !0, !1), 1);
      case "Z":
      case "ZZ":
        return ls(new RegExp(`([+-]${a.source})(?::(${i.source}))?`), 2);
      case "ZZZ":
        return ls(new RegExp(`([+-]${a.source})(${i.source})?`), 2);
      case "z":
        return Ir(/[a-z_+-/]{1,256}?/i);
      default:
        return v(E);
    }
  })(e) || {
    invalidReason: Ah
  };
  return A.token = e, A;
}
const Dh = {
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
function Fh(e, t, n) {
  const { type: i, value: s } = e;
  if (i === "literal")
    return {
      literal: !0,
      val: s
    };
  const r = n[i];
  let l = Dh[i];
  if (typeof l == "object" && (l = l[r]), l)
    return {
      literal: !1,
      val: l
    };
}
function $h(e) {
  return [`^${e.map((n) => n.regex).reduce((n, i) => `${n}(${i.source})`, "")}$`, e];
}
function Nh(e, t, n) {
  const i = e.match(t);
  if (i) {
    const s = {};
    let r = 1;
    for (const l in n)
      if (Zt(n, l)) {
        const a = n[l], u = a.groups ? a.groups + 1 : 1;
        !a.literal && a.token && (s[a.token.val[0]] = a.deser(i.slice(r, r + u))), r += u;
      }
    return [i, s];
  } else
    return [i, {}];
}
function Lh(e) {
  const t = (r) => {
    switch (r) {
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
  let n = null, i;
  return K(e.z) || (n = lt.create(e.z)), K(e.Z) || (n || (n = new De(e.Z)), i = e.Z), K(e.q) || (e.M = (e.q - 1) * 3 + 1), K(e.h) || (e.h < 12 && e.a === 1 ? e.h += 12 : e.h === 12 && e.a === 0 && (e.h = 0)), e.G === 0 && e.y && (e.y = -e.y), K(e.u) || (e.S = bi(e.u)), [Object.keys(e).reduce((r, l) => {
    const a = t(l);
    return a && (r[a] = e[l]), r;
  }, {}), n, i];
}
let Dr = null;
function Ph() {
  return Dr || (Dr = j.fromMillis(1555555555555)), Dr;
}
function Uh(e, t) {
  if (e.literal)
    return e;
  const n = Le.macroTokenToFormatOpts(e.val);
  if (!n)
    return e;
  const r = Le.create(t, n).formatDateTimeParts(Ph()).map((l) => Fh(l, t, n));
  return r.includes(void 0) ? e : r;
}
function jh(e, t) {
  return Array.prototype.concat(...e.map((n) => Uh(n, t)));
}
function Gl(e, t, n) {
  const i = jh(Le.parseFormat(n), e), s = i.map((l) => Ih(l, e)), r = s.find((l) => l.invalidReason);
  if (r)
    return { input: t, tokens: i, invalidReason: r.invalidReason };
  {
    const [l, a] = $h(s), u = RegExp(l, "i"), [c, f] = Nh(t, u, a), [p, g, v] = f ? Lh(f) : [null, null, void 0];
    if (Zt(f, "a") && Zt(f, "H"))
      throw new hn(
        "Can't include meridiem when specifying 24-hour format"
      );
    return { input: t, tokens: i, regex: u, rawMatches: c, matches: f, result: p, zone: g, specificOffset: v };
  }
}
function Rh(e, t, n) {
  const { result: i, zone: s, specificOffset: r, invalidReason: l } = Gl(e, t, n);
  return [i, s, r, l];
}
const Wl = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], Zl = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
function qe(e, t) {
  return new Ye(
    "unit out of range",
    `you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`
  );
}
function Kl(e, t, n) {
  const i = new Date(Date.UTC(e, t - 1, n));
  e < 100 && e >= 0 && i.setUTCFullYear(i.getUTCFullYear() - 1900);
  const s = i.getUTCDay();
  return s === 0 ? 7 : s;
}
function Yl(e, t, n) {
  return n + (Cn(e) ? Zl : Wl)[t - 1];
}
function Jl(e, t) {
  const n = Cn(e) ? Zl : Wl, i = n.findIndex((r) => r < t), s = t - n[i];
  return { month: i + 1, day: s };
}
function oi(e) {
  const { year: t, month: n, day: i } = e, s = Yl(t, n, i), r = Kl(t, n, i);
  let l = Math.floor((s - r + 10) / 7), a;
  return l < 1 ? (a = t - 1, l = lr(a)) : l > lr(t) ? (a = t + 1, l = 1) : a = t, { weekYear: a, weekNumber: l, weekday: r, ...Sr(e) };
}
function as(e) {
  const { weekYear: t, weekNumber: n, weekday: i } = e, s = Kl(t, 1, 4), r = vn(t);
  let l = n * 7 + i - s - 3, a;
  l < 1 ? (a = t - 1, l += vn(a)) : l > r ? (a = t + 1, l -= vn(t)) : a = t;
  const { month: u, day: c } = Jl(a, l);
  return { year: a, month: u, day: c, ...Sr(e) };
}
function Fr(e) {
  const { year: t, month: n, day: i } = e, s = Yl(t, n, i);
  return { year: t, ordinal: s, ...Sr(e) };
}
function os(e) {
  const { year: t, ordinal: n } = e, { month: i, day: s } = Jl(t, n);
  return { year: t, month: i, day: s, ...Sr(e) };
}
function Bh(e) {
  const t = xr(e.weekYear), n = it(e.weekNumber, 1, lr(e.weekYear)), i = it(e.weekday, 1, 7);
  return t ? n ? i ? !1 : qe("weekday", e.weekday) : qe("week", e.week) : qe("weekYear", e.weekYear);
}
function zh(e) {
  const t = xr(e.year), n = it(e.ordinal, 1, vn(e.year));
  return t ? n ? !1 : qe("ordinal", e.ordinal) : qe("year", e.year);
}
function Xl(e) {
  const t = xr(e.year), n = it(e.month, 1, 12), i = it(e.day, 1, sr(e.year, e.month));
  return t ? n ? i ? !1 : qe("day", e.day) : qe("month", e.month) : qe("year", e.year);
}
function Ql(e) {
  const { hour: t, minute: n, second: i, millisecond: s } = e, r = it(t, 0, 23) || t === 24 && n === 0 && i === 0 && s === 0, l = it(n, 0, 59), a = it(i, 0, 59), u = it(s, 0, 999);
  return r ? l ? a ? u ? !1 : qe("millisecond", s) : qe("second", i) : qe("minute", n) : qe("hour", t);
}
const $r = "Invalid DateTime", us = 864e13;
function Bn(e) {
  return new Ye("unsupported zone", `the zone "${e.name}" is not supported`);
}
function Nr(e) {
  return e.weekData === null && (e.weekData = oi(e.c)), e.weekData;
}
function un(e, t) {
  const n = {
    ts: e.ts,
    zone: e.zone,
    c: e.c,
    o: e.o,
    loc: e.loc,
    invalid: e.invalid
  };
  return new j({ ...n, ...t, old: n });
}
function ea(e, t, n) {
  let i = e - t * 60 * 1e3;
  const s = n.offset(i);
  if (t === s)
    return [i, t];
  i -= (s - t) * 60 * 1e3;
  const r = n.offset(i);
  return s === r ? [i, s] : [e - Math.min(s, r) * 60 * 1e3, Math.max(s, r)];
}
function ds(e, t) {
  e += t * 60 * 1e3;
  const n = new Date(e);
  return {
    year: n.getUTCFullYear(),
    month: n.getUTCMonth() + 1,
    day: n.getUTCDate(),
    hour: n.getUTCHours(),
    minute: n.getUTCMinutes(),
    second: n.getUTCSeconds(),
    millisecond: n.getUTCMilliseconds()
  };
}
function Jn(e, t, n) {
  return ea(xi(e), t, n);
}
function cs(e, t) {
  const n = e.o, i = e.c.year + Math.trunc(t.years), s = e.c.month + Math.trunc(t.months) + Math.trunc(t.quarters) * 3, r = {
    ...e.c,
    year: i,
    month: s,
    day: Math.min(e.c.day, sr(i, s)) + Math.trunc(t.days) + Math.trunc(t.weeks) * 7
  }, l = X.fromObject({
    years: t.years - Math.trunc(t.years),
    quarters: t.quarters - Math.trunc(t.quarters),
    months: t.months - Math.trunc(t.months),
    weeks: t.weeks - Math.trunc(t.weeks),
    days: t.days - Math.trunc(t.days),
    hours: t.hours,
    minutes: t.minutes,
    seconds: t.seconds,
    milliseconds: t.milliseconds
  }).as("milliseconds"), a = xi(r);
  let [u, c] = ea(a, n, e.zone);
  return l !== 0 && (u += l, c = e.zone.offset(u)), { ts: u, o: c };
}
function dn(e, t, n, i, s, r) {
  const { setZone: l, zone: a } = n;
  if (e && Object.keys(e).length !== 0) {
    const u = t || a, c = j.fromObject(e, {
      ...n,
      zone: u,
      specificOffset: r
    });
    return l ? c : c.setZone(a);
  } else
    return j.invalid(
      new Ye("unparsable", `the input "${s}" can't be parsed as ${i}`)
    );
}
function zn(e, t, n = !0) {
  return e.isValid ? Le.create(ce.create("en-US"), {
    allowZ: n,
    forceSimple: !0
  }).formatDateTimeFromString(e, t) : null;
}
function Lr(e, t) {
  const n = e.c.year > 9999 || e.c.year < 0;
  let i = "";
  return n && e.c.year >= 0 && (i += "+"), i += ye(e.c.year, n ? 6 : 4), t ? (i += "-", i += ye(e.c.month), i += "-", i += ye(e.c.day)) : (i += ye(e.c.month), i += ye(e.c.day)), i;
}
function fs(e, t, n, i, s) {
  let r = ye(e.c.hour);
  return t ? (r += ":", r += ye(e.c.minute), (e.c.second !== 0 || !n) && (r += ":")) : r += ye(e.c.minute), (e.c.second !== 0 || !n) && (r += ye(e.c.second), (e.c.millisecond !== 0 || !i) && (r += ".", r += ye(e.c.millisecond, 3))), s && (e.isOffsetFixed && e.offset === 0 ? r += "Z" : e.o < 0 ? (r += "-", r += ye(Math.trunc(-e.o / 60)), r += ":", r += ye(Math.trunc(-e.o % 60))) : (r += "+", r += ye(Math.trunc(e.o / 60)), r += ":", r += ye(Math.trunc(e.o % 60)))), r;
}
const ta = {
  month: 1,
  day: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, Hh = {
  weekNumber: 1,
  weekday: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, qh = {
  ordinal: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, na = ["year", "month", "day", "hour", "minute", "second", "millisecond"], Gh = [
  "weekYear",
  "weekNumber",
  "weekday",
  "hour",
  "minute",
  "second",
  "millisecond"
], Wh = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
function ms(e) {
  const t = {
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
  }[e.toLowerCase()];
  if (!t)
    throw new ll(e);
  return t;
}
function hs(e, t) {
  const n = pt(t.zone, _e.defaultZone), i = ce.fromObject(t), s = _e.now();
  let r, l;
  if (K(e.year))
    r = s;
  else {
    for (const c of na)
      K(e[c]) && (e[c] = ta[c]);
    const a = Xl(e) || Ql(e);
    if (a)
      return j.invalid(a);
    const u = n.offset(s);
    [r, l] = Jn(e, u, n);
  }
  return new j({ ts: r, zone: n, loc: i, o: l });
}
function ps(e, t, n) {
  const i = K(n.round) ? !0 : n.round, s = (l, a) => (l = ki(l, i || n.calendary ? 0 : 2, !0), t.loc.clone(n).relFormatter(n).format(l, a)), r = (l) => n.calendary ? t.hasSame(e, l) ? 0 : t.startOf(l).diff(e.startOf(l), l).get(l) : t.diff(e, l).get(l);
  if (n.unit)
    return s(r(n.unit), n.unit);
  for (const l of n.units) {
    const a = r(l);
    if (Math.abs(a) >= 1)
      return s(a, l);
  }
  return s(e > t ? -0 : 0, n.units[n.units.length - 1]);
}
function ys(e) {
  let t = {}, n;
  return e.length > 0 && typeof e[e.length - 1] == "object" ? (t = e[e.length - 1], n = Array.from(e).slice(0, e.length - 1)) : n = Array.from(e), [t, n];
}
class j {
  /**
   * @access private
   */
  constructor(t) {
    const n = t.zone || _e.defaultZone;
    let i = t.invalid || (Number.isNaN(t.ts) ? new Ye("invalid input") : null) || (n.isValid ? null : Bn(n));
    this.ts = K(t.ts) ? _e.now() : t.ts;
    let s = null, r = null;
    if (!i)
      if (t.old && t.old.ts === this.ts && t.old.zone.equals(n))
        [s, r] = [t.old.c, t.old.o];
      else {
        const a = n.offset(this.ts);
        s = ds(this.ts, a), i = Number.isNaN(s.year) ? new Ye("invalid input") : null, s = i ? null : s, r = i ? null : a;
      }
    this._zone = n, this.loc = t.loc || ce.create(), this.invalid = i, this.weekData = null, this.c = s, this.o = r, this.isLuxonDateTime = !0;
  }
  // CONSTRUCT
  /**
   * Create a DateTime for the current instant, in the system's time zone.
   *
   * Use Settings to override these default values if needed.
   * @example DateTime.now().toISO() //~> now in the ISO format
   * @return {DateTime}
   */
  static now() {
    return new j({});
  }
  /**
   * Create a local DateTime
   * @param {number} [year] - The calendar year. If omitted (as in, call `local()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month, 1-indexed
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @example DateTime.local()                                  //~> now
   * @example DateTime.local({ zone: "America/New_York" })      //~> now, in US east coast time
   * @example DateTime.local(2017)                              //~> 2017-01-01T00:00:00
   * @example DateTime.local(2017, 3)                           //~> 2017-03-01T00:00:00
   * @example DateTime.local(2017, 3, 12, { locale: "fr" })     //~> 2017-03-12T00:00:00, with a French locale
   * @example DateTime.local(2017, 3, 12, 5)                    //~> 2017-03-12T05:00:00
   * @example DateTime.local(2017, 3, 12, 5, { zone: "utc" })   //~> 2017-03-12T05:00:00, in UTC
   * @example DateTime.local(2017, 3, 12, 5, 45)                //~> 2017-03-12T05:45:00
   * @example DateTime.local(2017, 3, 12, 5, 45, 10)            //~> 2017-03-12T05:45:10
   * @example DateTime.local(2017, 3, 12, 5, 45, 10, 765)       //~> 2017-03-12T05:45:10.765
   * @return {DateTime}
   */
  static local() {
    const [t, n] = ys(arguments), [i, s, r, l, a, u, c] = n;
    return hs({ year: i, month: s, day: r, hour: l, minute: a, second: u, millisecond: c }, t);
  }
  /**
   * Create a DateTime in UTC
   * @param {number} [year] - The calendar year. If omitted (as in, call `utc()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @param {Object} options - configuration options for the DateTime
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} [options.outputCalendar] - the output calendar to set on the resulting DateTime instance
   * @param {string} [options.numberingSystem] - the numbering system to set on the resulting DateTime instance
   * @example DateTime.utc()                                              //~> now
   * @example DateTime.utc(2017)                                          //~> 2017-01-01T00:00:00Z
   * @example DateTime.utc(2017, 3)                                       //~> 2017-03-01T00:00:00Z
   * @example DateTime.utc(2017, 3, 12)                                   //~> 2017-03-12T00:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5)                                //~> 2017-03-12T05:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45)                            //~> 2017-03-12T05:45:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, { locale: "fr" })          //~> 2017-03-12T05:45:00Z with a French locale
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10)                        //~> 2017-03-12T05:45:10Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10, 765, { locale: "fr" }) //~> 2017-03-12T05:45:10.765Z with a French locale
   * @return {DateTime}
   */
  static utc() {
    const [t, n] = ys(arguments), [i, s, r, l, a, u, c] = n;
    return t.zone = De.utcInstance, hs({ year: i, month: s, day: r, hour: l, minute: a, second: u, millisecond: c }, t);
  }
  /**
   * Create a DateTime from a JavaScript Date object. Uses the default zone.
   * @param {Date} date - a JavaScript Date object
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @return {DateTime}
   */
  static fromJSDate(t, n = {}) {
    const i = em(t) ? t.valueOf() : NaN;
    if (Number.isNaN(i))
      return j.invalid("invalid input");
    const s = pt(n.zone, _e.defaultZone);
    return s.isValid ? new j({
      ts: i,
      zone: s,
      loc: ce.fromObject(n)
    }) : j.invalid(Bn(s));
  }
  /**
   * Create a DateTime from a number of milliseconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} milliseconds - a number of milliseconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @return {DateTime}
   */
  static fromMillis(t, n = {}) {
    if (Et(t))
      return t < -us || t > us ? j.invalid("Timestamp out of range") : new j({
        ts: t,
        zone: pt(n.zone, _e.defaultZone),
        loc: ce.fromObject(n)
      });
    throw new He(
      `fromMillis requires a numerical input, but received a ${typeof t} with value ${t}`
    );
  }
  /**
   * Create a DateTime from a number of seconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} seconds - a number of seconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @return {DateTime}
   */
  static fromSeconds(t, n = {}) {
    if (Et(t))
      return new j({
        ts: t * 1e3,
        zone: pt(n.zone, _e.defaultZone),
        loc: ce.fromObject(n)
      });
    throw new He("fromSeconds requires a numerical input");
  }
  /**
   * Create a DateTime from a JavaScript object with keys like 'year' and 'hour' with reasonable defaults.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.year - a year, such as 1987
   * @param {number} obj.month - a month, 1-12
   * @param {number} obj.day - a day of the month, 1-31, depending on the month
   * @param {number} obj.ordinal - day of the year, 1-365 or 366
   * @param {number} obj.weekYear - an ISO week year
   * @param {number} obj.weekNumber - an ISO week number, between 1 and 52 or 53, depending on the year
   * @param {number} obj.weekday - an ISO weekday, 1-7, where 1 is Monday and 7 is Sunday
   * @param {number} obj.hour - hour of the day, 0-23
   * @param {number} obj.minute - minute of the hour, 0-59
   * @param {number} obj.second - second of the minute, 0-59
   * @param {number} obj.millisecond - millisecond of the second, 0-999
   * @param {Object} opts - options for creating this DateTime
   * @param {string|Zone} [opts.zone='local'] - interpret the numbers in the context of a particular zone. Can take any value taken as the first argument to setZone()
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromObject({ year: 1982, month: 5, day: 25}).toISODate() //=> '1982-05-25'
   * @example DateTime.fromObject({ year: 1982 }).toISODate() //=> '1982-01-01'
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }) //~> today at 10:26:06
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'utc' }),
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'local' })
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'America/New_York' })
   * @example DateTime.fromObject({ weekYear: 2016, weekNumber: 2, weekday: 3 }).toISODate() //=> '2016-01-13'
   * @return {DateTime}
   */
  static fromObject(t, n = {}) {
    t = t || {};
    const i = pt(n.zone, _e.defaultZone);
    if (!i.isValid)
      return j.invalid(Bn(i));
    const s = _e.now(), r = K(n.specificOffset) ? i.offset(s) : n.specificOffset, l = ar(t, ms), a = !K(l.ordinal), u = !K(l.year), c = !K(l.month) || !K(l.day), f = u || c, p = l.weekYear || l.weekNumber, g = ce.fromObject(n);
    if ((f || a) && p)
      throw new hn(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (c && a)
      throw new hn("Can't mix ordinal dates with month/day");
    const v = p || l.weekday && !f;
    let T, A, E = ds(s, r);
    v ? (T = Gh, A = Hh, E = oi(E)) : a ? (T = Wh, A = qh, E = Fr(E)) : (T = na, A = ta);
    let q = !1;
    for (const se of T) {
      const z = l[se];
      K(z) ? q ? l[se] = A[se] : l[se] = E[se] : q = !0;
    }
    const Q = v ? Bh(l) : a ? zh(l) : Xl(l), ne = Q || Ql(l);
    if (ne)
      return j.invalid(ne);
    const ae = v ? as(l) : a ? os(l) : l, [oe, B] = Jn(ae, r, i), F = new j({
      ts: oe,
      zone: i,
      o: B,
      loc: g
    });
    return l.weekday && f && t.weekday !== F.weekday ? j.invalid(
      "mismatched weekday",
      `you can't specify both a weekday of ${l.weekday} and a date of ${F.toISO()}`
    ) : F;
  }
  /**
   * Create a DateTime from an ISO 8601 string
   * @param {string} text - the ISO string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the time to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} [opts.outputCalendar] - the output calendar to set on the resulting DateTime instance
   * @param {string} [opts.numberingSystem] - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromISO('2016-05-25T09:08:34.123')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00', {setZone: true})
   * @example DateTime.fromISO('2016-05-25T09:08:34.123', {zone: 'utc'})
   * @example DateTime.fromISO('2016-W05-4')
   * @return {DateTime}
   */
  static fromISO(t, n = {}) {
    const [i, s] = lh(t);
    return dn(i, s, n, "ISO 8601", t);
  }
  /**
   * Create a DateTime from an RFC 2822 string
   * @param {string} text - the RFC 2822 string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since the offset is always specified in the string itself, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23:12 GMT')
   * @example DateTime.fromRFC2822('Fri, 25 Nov 2016 13:23:12 +0600')
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23 Z')
   * @return {DateTime}
   */
  static fromRFC2822(t, n = {}) {
    const [i, s] = ah(t);
    return dn(i, s, n, "RFC 2822", t);
  }
  /**
   * Create a DateTime from an HTTP header date
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @param {string} text - the HTTP header date
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since HTTP dates are always in UTC, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with the fixed-offset zone specified in the string. For HTTP dates, this is always UTC, so this option is equivalent to setting the `zone` option to 'utc', but this option is included for consistency with similar methods.
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromHTTP('Sun, 06 Nov 1994 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sunday, 06-Nov-94 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sun Nov  6 08:49:37 1994')
   * @return {DateTime}
   */
  static fromHTTP(t, n = {}) {
    const [i, s] = oh(t);
    return dn(i, s, n, "HTTP", n);
  }
  /**
   * Create a DateTime from an input string and format string.
   * Defaults to en-US if no locale has been specified, regardless of the system's locale. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/#/parsing?id=table-of-tokens).
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see the link below for the formats)
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @return {DateTime}
   */
  static fromFormat(t, n, i = {}) {
    if (K(t) || K(n))
      throw new He("fromFormat requires an input string and a format");
    const { locale: s = null, numberingSystem: r = null } = i, l = ce.fromOpts({
      locale: s,
      numberingSystem: r,
      defaultToEN: !0
    }), [a, u, c, f] = Rh(l, t, n);
    return f ? j.invalid(f) : dn(a, u, i, `format ${n}`, t, c);
  }
  /**
   * @deprecated use fromFormat instead
   */
  static fromString(t, n, i = {}) {
    return j.fromFormat(t, n, i);
  }
  /**
   * Create a DateTime from a SQL date, time, or datetime
   * Defaults to en-US if no locale has been specified, regardless of the system's locale
   * @param {string} text - the string to parse
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @example DateTime.fromSQL('2017-05-15')
   * @example DateTime.fromSQL('2017-05-15 09:12:34')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342+06:00')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles', { setZone: true })
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342', { zone: 'America/Los_Angeles' })
   * @example DateTime.fromSQL('09:12:34.342')
   * @return {DateTime}
   */
  static fromSQL(t, n = {}) {
    const [i, s] = yh(t);
    return dn(i, s, n, "SQL", t);
  }
  /**
   * Create an invalid DateTime.
   * @param {string} reason - simple string of why this DateTime is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {DateTime}
   */
  static invalid(t, n = null) {
    if (!t)
      throw new He("need to specify a reason the DateTime is invalid");
    const i = t instanceof Ye ? t : new Ye(t, n);
    if (_e.throwOnInvalid)
      throw new Zf(i);
    return new j({ invalid: i });
  }
  /**
   * Check if an object is an instance of DateTime. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  static isDateTime(t) {
    return t && t.isLuxonDateTime || !1;
  }
  // INFO
  /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example DateTime.local(2017, 7, 4).get('month'); //=> 7
   * @example DateTime.local(2017, 7, 4).get('day'); //=> 4
   * @return {number}
   */
  get(t) {
    return this[t];
  }
  /**
   * Returns whether the DateTime is valid. Invalid DateTimes occur when:
   * * The DateTime was created from invalid calendar information, such as the 13th month or February 30
   * * The DateTime was created by an operation on another invalid date
   * @type {boolean}
   */
  get isValid() {
    return this.invalid === null;
  }
  /**
   * Returns an error code if this DateTime is invalid, or null if the DateTime is valid
   * @type {string}
   */
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  /**
   * Returns an explanation of why this DateTime became invalid, or null if the DateTime is valid
   * @type {string}
   */
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  /**
   * Get the locale of a DateTime, such 'en-GB'. The locale is used when formatting the DateTime
   *
   * @type {string}
   */
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }
  /**
   * Get the numbering system of a DateTime, such 'beng'. The numbering system is used when formatting the DateTime
   *
   * @type {string}
   */
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }
  /**
   * Get the output calendar of a DateTime, such 'islamic'. The output calendar is used when formatting the DateTime
   *
   * @type {string}
   */
  get outputCalendar() {
    return this.isValid ? this.loc.outputCalendar : null;
  }
  /**
   * Get the time zone associated with this DateTime.
   * @type {Zone}
   */
  get zone() {
    return this._zone;
  }
  /**
   * Get the name of the time zone.
   * @type {string}
   */
  get zoneName() {
    return this.isValid ? this.zone.name : null;
  }
  /**
   * Get the year
   * @example DateTime.local(2017, 5, 25).year //=> 2017
   * @type {number}
   */
  get year() {
    return this.isValid ? this.c.year : NaN;
  }
  /**
   * Get the quarter
   * @example DateTime.local(2017, 5, 25).quarter //=> 2
   * @type {number}
   */
  get quarter() {
    return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
  }
  /**
   * Get the month (1-12).
   * @example DateTime.local(2017, 5, 25).month //=> 5
   * @type {number}
   */
  get month() {
    return this.isValid ? this.c.month : NaN;
  }
  /**
   * Get the day of the month (1-30ish).
   * @example DateTime.local(2017, 5, 25).day //=> 25
   * @type {number}
   */
  get day() {
    return this.isValid ? this.c.day : NaN;
  }
  /**
   * Get the hour of the day (0-23).
   * @example DateTime.local(2017, 5, 25, 9).hour //=> 9
   * @type {number}
   */
  get hour() {
    return this.isValid ? this.c.hour : NaN;
  }
  /**
   * Get the minute of the hour (0-59).
   * @example DateTime.local(2017, 5, 25, 9, 30).minute //=> 30
   * @type {number}
   */
  get minute() {
    return this.isValid ? this.c.minute : NaN;
  }
  /**
   * Get the second of the minute (0-59).
   * @example DateTime.local(2017, 5, 25, 9, 30, 52).second //=> 52
   * @type {number}
   */
  get second() {
    return this.isValid ? this.c.second : NaN;
  }
  /**
   * Get the millisecond of the second (0-999).
   * @example DateTime.local(2017, 5, 25, 9, 30, 52, 654).millisecond //=> 654
   * @type {number}
   */
  get millisecond() {
    return this.isValid ? this.c.millisecond : NaN;
  }
  /**
   * Get the week year
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2014, 12, 31).weekYear //=> 2015
   * @type {number}
   */
  get weekYear() {
    return this.isValid ? Nr(this).weekYear : NaN;
  }
  /**
   * Get the week number of the week year (1-52ish).
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2017, 5, 25).weekNumber //=> 21
   * @type {number}
   */
  get weekNumber() {
    return this.isValid ? Nr(this).weekNumber : NaN;
  }
  /**
   * Get the day of the week.
   * 1 is Monday and 7 is Sunday
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2014, 11, 31).weekday //=> 4
   * @type {number}
   */
  get weekday() {
    return this.isValid ? Nr(this).weekday : NaN;
  }
  /**
   * Get the ordinal (meaning the day of the year)
   * @example DateTime.local(2017, 5, 25).ordinal //=> 145
   * @type {number|DateTime}
   */
  get ordinal() {
    return this.isValid ? Fr(this.c).ordinal : NaN;
  }
  /**
   * Get the human readable short month name, such as 'Oct'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).monthShort //=> Oct
   * @type {string}
   */
  get monthShort() {
    return this.isValid ? Rn.months("short", { locObj: this.loc })[this.month - 1] : null;
  }
  /**
   * Get the human readable long month name, such as 'October'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).monthLong //=> October
   * @type {string}
   */
  get monthLong() {
    return this.isValid ? Rn.months("long", { locObj: this.loc })[this.month - 1] : null;
  }
  /**
   * Get the human readable short weekday, such as 'Mon'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).weekdayShort //=> Mon
   * @type {string}
   */
  get weekdayShort() {
    return this.isValid ? Rn.weekdays("short", { locObj: this.loc })[this.weekday - 1] : null;
  }
  /**
   * Get the human readable long weekday, such as 'Monday'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).weekdayLong //=> Monday
   * @type {string}
   */
  get weekdayLong() {
    return this.isValid ? Rn.weekdays("long", { locObj: this.loc })[this.weekday - 1] : null;
  }
  /**
   * Get the UTC offset of this DateTime in minutes
   * @example DateTime.now().offset //=> -240
   * @example DateTime.utc().offset //=> 0
   * @type {number}
   */
  get offset() {
    return this.isValid ? +this.o : NaN;
  }
  /**
   * Get the short human name for the zone's current offset, for example "EST" or "EDT".
   * Defaults to the system's locale if no locale has been specified
   * @type {string}
   */
  get offsetNameShort() {
    return this.isValid ? this.zone.offsetName(this.ts, {
      format: "short",
      locale: this.locale
    }) : null;
  }
  /**
   * Get the long human name for the zone's current offset, for example "Eastern Standard Time" or "Eastern Daylight Time".
   * Defaults to the system's locale if no locale has been specified
   * @type {string}
   */
  get offsetNameLong() {
    return this.isValid ? this.zone.offsetName(this.ts, {
      format: "long",
      locale: this.locale
    }) : null;
  }
  /**
   * Get whether this zone's offset ever changes, as in a DST.
   * @type {boolean}
   */
  get isOffsetFixed() {
    return this.isValid ? this.zone.isUniversal : null;
  }
  /**
   * Get whether the DateTime is in a DST.
   * @type {boolean}
   */
  get isInDST() {
    return this.isOffsetFixed ? !1 : this.offset > this.set({ month: 1 }).offset || this.offset > this.set({ month: 5 }).offset;
  }
  /**
   * Returns true if this DateTime is in a leap year, false otherwise
   * @example DateTime.local(2016).isInLeapYear //=> true
   * @example DateTime.local(2013).isInLeapYear //=> false
   * @type {boolean}
   */
  get isInLeapYear() {
    return Cn(this.year);
  }
  /**
   * Returns the number of days in this DateTime's month
   * @example DateTime.local(2016, 2).daysInMonth //=> 29
   * @example DateTime.local(2016, 3).daysInMonth //=> 31
   * @type {number}
   */
  get daysInMonth() {
    return sr(this.year, this.month);
  }
  /**
   * Returns the number of days in this DateTime's year
   * @example DateTime.local(2016).daysInYear //=> 366
   * @example DateTime.local(2013).daysInYear //=> 365
   * @type {number}
   */
  get daysInYear() {
    return this.isValid ? vn(this.year) : NaN;
  }
  /**
   * Returns the number of weeks in this DateTime's year
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2004).weeksInWeekYear //=> 53
   * @example DateTime.local(2013).weeksInWeekYear //=> 52
   * @type {number}
   */
  get weeksInWeekYear() {
    return this.isValid ? lr(this.weekYear) : NaN;
  }
  /**
   * Returns the resolved Intl options for this DateTime.
   * This is useful in understanding the behavior of formatting methods
   * @param {Object} opts - the same options as toLocaleString
   * @return {Object}
   */
  resolvedLocaleOptions(t = {}) {
    const { locale: n, numberingSystem: i, calendar: s } = Le.create(
      this.loc.clone(t),
      t
    ).resolvedOptions(this);
    return { locale: n, numberingSystem: i, outputCalendar: s };
  }
  // TRANSFORM
  /**
   * "Set" the DateTime's zone to UTC. Returns a newly-constructed DateTime.
   *
   * Equivalent to {@link DateTime#setZone}('utc')
   * @param {number} [offset=0] - optionally, an offset from UTC in minutes
   * @param {Object} [opts={}] - options to pass to `setZone()`
   * @return {DateTime}
   */
  toUTC(t = 0, n = {}) {
    return this.setZone(De.instance(t), n);
  }
  /**
   * "Set" the DateTime's zone to the host's local zone. Returns a newly-constructed DateTime.
   *
   * Equivalent to `setZone('local')`
   * @return {DateTime}
   */
  toLocal() {
    return this.setZone(_e.defaultZone);
  }
  /**
   * "Set" the DateTime's zone to specified zone. Returns a newly-constructed DateTime.
   *
   * By default, the setter keeps the underlying time the same (as in, the same timestamp), but the new instance will report different local times and consider DSTs when making computations, as with {@link DateTime#plus}. You may wish to use {@link DateTime#toLocal} and {@link DateTime#toUTC} which provide simple convenience wrappers for commonly used zones.
   * @param {string|Zone} [zone='local'] - a zone identifier. As a string, that can be any IANA zone supported by the host environment, or a fixed-offset name of the form 'UTC+3', or the strings 'local' or 'utc'. You may also supply an instance of a {@link DateTime#Zone} class.
   * @param {Object} opts - options
   * @param {boolean} [opts.keepLocalTime=false] - If true, adjust the underlying time so that the local time stays the same, but in the target zone. You should rarely need this.
   * @return {DateTime}
   */
  setZone(t, { keepLocalTime: n = !1, keepCalendarTime: i = !1 } = {}) {
    if (t = pt(t, _e.defaultZone), t.equals(this.zone))
      return this;
    if (t.isValid) {
      let s = this.ts;
      if (n || i) {
        const r = t.offset(this.ts), l = this.toObject();
        [s] = Jn(l, r, t);
      }
      return un(this, { ts: s, zone: t });
    } else
      return j.invalid(Bn(t));
  }
  /**
   * "Set" the locale, numberingSystem, or outputCalendar. Returns a newly-constructed DateTime.
   * @param {Object} properties - the properties to set
   * @example DateTime.local(2017, 5, 25).reconfigure({ locale: 'en-GB' })
   * @return {DateTime}
   */
  reconfigure({ locale: t, numberingSystem: n, outputCalendar: i } = {}) {
    const s = this.loc.clone({ locale: t, numberingSystem: n, outputCalendar: i });
    return un(this, { loc: s });
  }
  /**
   * "Set" the locale. Returns a newly-constructed DateTime.
   * Just a convenient alias for reconfigure({ locale })
   * @example DateTime.local(2017, 5, 25).setLocale('en-GB')
   * @return {DateTime}
   */
  setLocale(t) {
    return this.reconfigure({ locale: t });
  }
  /**
   * "Set" the values of specified units. Returns a newly-constructed DateTime.
   * You can only set units with this method; for "setting" metadata, see {@link DateTime#reconfigure} and {@link DateTime#setZone}.
   * @param {Object} values - a mapping of units to numbers
   * @example dt.set({ year: 2017 })
   * @example dt.set({ hour: 8, minute: 30 })
   * @example dt.set({ weekday: 5 })
   * @example dt.set({ year: 2005, ordinal: 234 })
   * @return {DateTime}
   */
  set(t) {
    if (!this.isValid)
      return this;
    const n = ar(t, ms), i = !K(n.weekYear) || !K(n.weekNumber) || !K(n.weekday), s = !K(n.ordinal), r = !K(n.year), l = !K(n.month) || !K(n.day), a = r || l, u = n.weekYear || n.weekNumber;
    if ((a || s) && u)
      throw new hn(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (l && s)
      throw new hn("Can't mix ordinal dates with month/day");
    let c;
    i ? c = as({ ...oi(this.c), ...n }) : K(n.ordinal) ? (c = { ...this.toObject(), ...n }, K(n.day) && (c.day = Math.min(sr(c.year, c.month), c.day))) : c = os({ ...Fr(this.c), ...n });
    const [f, p] = Jn(c, this.o, this.zone);
    return un(this, { ts: f, o: p });
  }
  /**
   * Add a period of time to this DateTime and return the resulting DateTime
   *
   * Adding hours, minutes, seconds, or milliseconds increases the timestamp by the right number of milliseconds. Adding days, months, or years shifts the calendar, accounting for DSTs and leap years along the way. Thus, `dt.plus({ hours: 24 })` may result in a different time than `dt.plus({ days: 1 })` if there's a DST shift in between.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @example DateTime.now().plus(123) //~> in 123 milliseconds
   * @example DateTime.now().plus({ minutes: 15 }) //~> in 15 minutes
   * @example DateTime.now().plus({ days: 1 }) //~> this time tomorrow
   * @example DateTime.now().plus({ days: -1 }) //~> this time yesterday
   * @example DateTime.now().plus({ hours: 3, minutes: 13 }) //~> in 3 hr, 13 min
   * @example DateTime.now().plus(Duration.fromObject({ hours: 3, minutes: 13 })) //~> in 3 hr, 13 min
   * @return {DateTime}
   */
  plus(t) {
    if (!this.isValid)
      return this;
    const n = X.fromDurationLike(t);
    return un(this, cs(this, n));
  }
  /**
   * Subtract a period of time to this DateTime and return the resulting DateTime
   * See {@link DateTime#plus}
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   @return {DateTime}
   */
  minus(t) {
    if (!this.isValid)
      return this;
    const n = X.fromDurationLike(t).negate();
    return un(this, cs(this, n));
  }
  /**
   * "Set" this DateTime to the beginning of a unit of time.
   * @param {string} unit - The unit to go to the beginning of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @example DateTime.local(2014, 3, 3).startOf('month').toISODate(); //=> '2014-03-01'
   * @example DateTime.local(2014, 3, 3).startOf('year').toISODate(); //=> '2014-01-01'
   * @example DateTime.local(2014, 3, 3).startOf('week').toISODate(); //=> '2014-03-03', weeks always start on Mondays
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('day').toISOTime(); //=> '00:00.000-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('hour').toISOTime(); //=> '05:00:00.000-05:00'
   * @return {DateTime}
   */
  startOf(t) {
    if (!this.isValid)
      return this;
    const n = {}, i = X.normalizeUnit(t);
    switch (i) {
      case "years":
        n.month = 1;
      case "quarters":
      case "months":
        n.day = 1;
      case "weeks":
      case "days":
        n.hour = 0;
      case "hours":
        n.minute = 0;
      case "minutes":
        n.second = 0;
      case "seconds":
        n.millisecond = 0;
        break;
    }
    if (i === "weeks" && (n.weekday = 1), i === "quarters") {
      const s = Math.ceil(this.month / 3);
      n.month = (s - 1) * 3 + 1;
    }
    return this.set(n);
  }
  /**
   * "Set" this DateTime to the end (meaning the last millisecond) of a unit of time
   * @param {string} unit - The unit to go to the end of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @example DateTime.local(2014, 3, 3).endOf('month').toISO(); //=> '2014-03-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('year').toISO(); //=> '2014-12-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('week').toISO(); // => '2014-03-09T23:59:59.999-05:00', weeks start on Mondays
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('day').toISO(); //=> '2014-03-03T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('hour').toISO(); //=> '2014-03-03T05:59:59.999-05:00'
   * @return {DateTime}
   */
  endOf(t) {
    return this.isValid ? this.plus({ [t]: 1 }).startOf(t).minus(1) : this;
  }
  // OUTPUT
  /**
   * Returns a string representation of this DateTime formatted according to the specified format string.
   * **You may not want this.** See {@link DateTime#toLocaleString} for a more flexible formatting tool. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/#/formatting?id=table-of-tokens).
   * Defaults to en-US if no locale has been specified, regardless of the system's locale.
   * @param {string} fmt - the format string
   * @param {Object} opts - opts to override the configuration options on this DateTime
   * @example DateTime.now().toFormat('yyyy LLL dd') //=> '2017 Apr 22'
   * @example DateTime.now().setLocale('fr').toFormat('yyyy LLL dd') //=> '2017 avr. 22'
   * @example DateTime.now().toFormat('yyyy LLL dd', { locale: "fr" }) //=> '2017 avr. 22'
   * @example DateTime.now().toFormat("HH 'hours and' mm 'minutes'") //=> '20 hours and 55 minutes'
   * @return {string}
   */
  toFormat(t, n = {}) {
    return this.isValid ? Le.create(this.loc.redefaultToEN(n)).formatDateTimeFromString(this, t) : $r;
  }
  /**
   * Returns a localized string representing this date. Accepts the same options as the Intl.DateTimeFormat constructor and any presets defined by Luxon, such as `DateTime.DATE_FULL` or `DateTime.TIME_SIMPLE`.
   * The exact behavior of this method is browser-specific, but in general it will return an appropriate representation
   * of the DateTime in the assigned locale.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param formatOpts {Object} - Intl.DateTimeFormat constructor options and configuration options
   * @param {Object} opts - opts to override the configuration options on this DateTime
   * @example DateTime.now().toLocaleString(); //=> 4/20/2017
   * @example DateTime.now().setLocale('en-gb').toLocaleString(); //=> '20/04/2017'
   * @example DateTime.now().toLocaleString({ locale: 'en-gb' }); //=> '20/04/2017'
   * @example DateTime.now().toLocaleString(DateTime.DATE_FULL); //=> 'April 20, 2017'
   * @example DateTime.now().toLocaleString(DateTime.TIME_SIMPLE); //=> '11:32 AM'
   * @example DateTime.now().toLocaleString(DateTime.DATETIME_SHORT); //=> '4/20/2017, 11:32 AM'
   * @example DateTime.now().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' }); //=> 'Thursday, April 20'
   * @example DateTime.now().toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> 'Thu, Apr 20, 11:27 AM'
   * @example DateTime.now().toLocaleString({ hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }); //=> '11:32'
   * @return {string}
   */
  toLocaleString(t = ni, n = {}) {
    return this.isValid ? Le.create(this.loc.clone(n), t).formatDateTime(this) : $r;
  }
  /**
   * Returns an array of format "parts", meaning individual tokens along with metadata. This is allows callers to post-process individual sections of the formatted output.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/formatToParts
   * @param opts {Object} - Intl.DateTimeFormat constructor options, same as `toLocaleString`.
   * @example DateTime.now().toLocaleParts(); //=> [
   *                                   //=>   { type: 'day', value: '25' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'month', value: '05' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'year', value: '1982' }
   *                                   //=> ]
   */
  toLocaleParts(t = {}) {
    return this.isValid ? Le.create(this.loc.clone(t), t).formatDateTimeParts(this) : [];
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc(1983, 5, 25).toISO() //=> '1982-05-25T00:00:00.000Z'
   * @example DateTime.now().toISO() //=> '2017-04-22T20:47:05.335-04:00'
   * @example DateTime.now().toISO({ includeOffset: false }) //=> '2017-04-22T20:47:05.335'
   * @example DateTime.now().toISO({ format: 'basic' }) //=> '20170422T204705.335-0400'
   * @return {string}
   */
  toISO({
    format: t = "extended",
    suppressSeconds: n = !1,
    suppressMilliseconds: i = !1,
    includeOffset: s = !0
  } = {}) {
    if (!this.isValid)
      return null;
    const r = t === "extended";
    let l = Lr(this, r);
    return l += "T", l += fs(this, r, n, i, s), l;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's date component
   * @param {Object} opts - options
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc(1982, 5, 25).toISODate() //=> '1982-05-25'
   * @example DateTime.utc(1982, 5, 25).toISODate({ format: 'basic' }) //=> '19820525'
   * @return {string}
   */
  toISODate({ format: t = "extended" } = {}) {
    return this.isValid ? Lr(this, t === "extended") : null;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's week date
   * @example DateTime.utc(1982, 5, 25).toISOWeekDate() //=> '1982-W21-2'
   * @return {string}
   */
  toISOWeekDate() {
    return zn(this, "kkkk-'W'WW-c");
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's time component
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime() //=> '07:34:19.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34, seconds: 0, milliseconds: 0 }).toISOTime({ suppressSeconds: true }) //=> '07:34Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ format: 'basic' }) //=> '073419.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ includePrefix: true }) //=> 'T07:34:19.361Z'
   * @return {string}
   */
  toISOTime({
    suppressMilliseconds: t = !1,
    suppressSeconds: n = !1,
    includeOffset: i = !0,
    includePrefix: s = !1,
    format: r = "extended"
  } = {}) {
    return this.isValid ? (s ? "T" : "") + fs(this, r === "extended", n, t, i) : null;
  }
  /**
   * Returns an RFC 2822-compatible string representation of this DateTime
   * @example DateTime.utc(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 +0000'
   * @example DateTime.local(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 -0400'
   * @return {string}
   */
  toRFC2822() {
    return zn(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", !1);
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in HTTP headers. The output is always expressed in GMT.
   * Specifically, the string conforms to RFC 1123.
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @example DateTime.utc(2014, 7, 13).toHTTP() //=> 'Sun, 13 Jul 2014 00:00:00 GMT'
   * @example DateTime.utc(2014, 7, 13, 19).toHTTP() //=> 'Sun, 13 Jul 2014 19:00:00 GMT'
   * @return {string}
   */
  toHTTP() {
    return zn(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Date
   * @example DateTime.utc(2014, 7, 13).toSQLDate() //=> '2014-07-13'
   * @return {string}
   */
  toSQLDate() {
    return this.isValid ? Lr(this, !0) : null;
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Time
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.includeOffsetSpace=true] - include the space between the time and the offset, such as '05:15:16.345 -04:00'
   * @example DateTime.utc().toSQL() //=> '05:15:16.345'
   * @example DateTime.now().toSQL() //=> '05:15:16.345 -04:00'
   * @example DateTime.now().toSQL({ includeOffset: false }) //=> '05:15:16.345'
   * @example DateTime.now().toSQL({ includeZone: false }) //=> '05:15:16.345 America/New_York'
   * @return {string}
   */
  toSQLTime({ includeOffset: t = !0, includeZone: n = !1, includeOffsetSpace: i = !0 } = {}) {
    let s = "HH:mm:ss.SSS";
    return (n || t) && (i && (s += " "), n ? s += "z" : t && (s += "ZZ")), zn(this, s, !0);
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.includeOffsetSpace=true] - include the space between the time and the offset, such as '05:15:16.345 -04:00'
   * @example DateTime.utc(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 Z'
   * @example DateTime.local(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 -04:00'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeOffset: false }) //=> '2014-07-13 00:00:00.000'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeZone: true }) //=> '2014-07-13 00:00:00.000 America/New_York'
   * @return {string}
   */
  toSQL(t = {}) {
    return this.isValid ? `${this.toSQLDate()} ${this.toSQLTime(t)}` : null;
  }
  /**
   * Returns a string representation of this DateTime appropriate for debugging
   * @return {string}
   */
  toString() {
    return this.isValid ? this.toISO() : $r;
  }
  /**
   * Returns the epoch milliseconds of this DateTime. Alias of {@link DateTime#toMillis}
   * @return {number}
   */
  valueOf() {
    return this.toMillis();
  }
  /**
   * Returns the epoch milliseconds of this DateTime.
   * @return {number}
   */
  toMillis() {
    return this.isValid ? this.ts : NaN;
  }
  /**
   * Returns the epoch seconds of this DateTime.
   * @return {number}
   */
  toSeconds() {
    return this.isValid ? this.ts / 1e3 : NaN;
  }
  /**
   * Returns the epoch seconds (as a whole number) of this DateTime.
   * @return {number}
   */
  toUnixInteger() {
    return this.isValid ? Math.floor(this.ts / 1e3) : NaN;
  }
  /**
   * Returns an ISO 8601 representation of this DateTime appropriate for use in JSON.
   * @return {string}
   */
  toJSON() {
    return this.toISO();
  }
  /**
   * Returns a BSON serializable equivalent to this DateTime.
   * @return {Date}
   */
  toBSON() {
    return this.toJSDate();
  }
  /**
   * Returns a JavaScript object with this DateTime's year, month, day, and so on.
   * @param opts - options for generating the object
   * @param {boolean} [opts.includeConfig=false] - include configuration attributes in the output
   * @example DateTime.now().toObject() //=> { year: 2017, month: 4, day: 22, hour: 20, minute: 49, second: 42, millisecond: 268 }
   * @return {Object}
   */
  toObject(t = {}) {
    if (!this.isValid)
      return {};
    const n = { ...this.c };
    return t.includeConfig && (n.outputCalendar = this.outputCalendar, n.numberingSystem = this.loc.numberingSystem, n.locale = this.loc.locale), n;
  }
  /**
   * Returns a JavaScript Date equivalent to this DateTime.
   * @return {Date}
   */
  toJSDate() {
    return new Date(this.isValid ? this.ts : NaN);
  }
  // COMPARE
  /**
   * Return the difference between two DateTimes as a Duration.
   * @param {DateTime} otherDateTime - the DateTime to compare this one to
   * @param {string|string[]} [unit=['milliseconds']] - the unit or array of units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example
   * var i1 = DateTime.fromISO('1982-05-25T09:45'),
   *     i2 = DateTime.fromISO('1983-10-14T10:30');
   * i2.diff(i1).toObject() //=> { milliseconds: 43807500000 }
   * i2.diff(i1, 'hours').toObject() //=> { hours: 12168.75 }
   * i2.diff(i1, ['months', 'days']).toObject() //=> { months: 16, days: 19.03125 }
   * i2.diff(i1, ['months', 'days', 'hours']).toObject() //=> { months: 16, days: 19, hours: 0.75 }
   * @return {Duration}
   */
  diff(t, n = "milliseconds", i = {}) {
    if (!this.isValid || !t.isValid)
      return X.invalid("created by diffing an invalid DateTime");
    const s = { locale: this.locale, numberingSystem: this.numberingSystem, ...i }, r = tm(n).map(X.normalizeUnit), l = t.valueOf() > this.valueOf(), a = l ? this : t, u = l ? t : this, c = Th(a, u, r, s);
    return l ? c.negate() : c;
  }
  /**
   * Return the difference between this DateTime and right now.
   * See {@link DateTime#diff}
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units units (such as 'hours' or 'days') to include in the duration
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */
  diffNow(t = "milliseconds", n = {}) {
    return this.diff(j.now(), t, n);
  }
  /**
   * Return an Interval spanning between this DateTime and another DateTime
   * @param {DateTime} otherDateTime - the other end point of the Interval
   * @return {Interval}
   */
  until(t) {
    return this.isValid ? he.fromDateTimes(this, t) : this;
  }
  /**
   * Return whether this DateTime is in the same unit of time as another DateTime.
   * Higher-order units must also be identical for this function to return `true`.
   * Note that time zones are **ignored** in this comparison, which compares the **local** calendar time. Use {@link DateTime#setZone} to convert one of the dates if needed.
   * @param {DateTime} otherDateTime - the other DateTime
   * @param {string} unit - the unit of time to check sameness on
   * @example DateTime.now().hasSame(otherDT, 'day'); //~> true if otherDT is in the same current calendar day
   * @return {boolean}
   */
  hasSame(t, n) {
    if (!this.isValid)
      return !1;
    const i = t.valueOf(), s = this.setZone(t.zone, { keepLocalTime: !0 });
    return s.startOf(n) <= i && i <= s.endOf(n);
  }
  /**
   * Equality check
   * Two DateTimes are equal iff they represent the same millisecond, have the same zone and location, and are both valid.
   * To compare just the millisecond values, use `+dt1 === +dt2`.
   * @param {DateTime} other - the other DateTime
   * @return {boolean}
   */
  equals(t) {
    return this.isValid && t.isValid && this.valueOf() === t.valueOf() && this.zone.equals(t.zone) && this.loc.equals(t.loc);
  }
  /**
   * Returns a string representation of a this time relative to now, such as "in two days". Can only internationalize if your
   * platform supports Intl.RelativeTimeFormat. Rounds down by default.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} [options.style="long"] - the style of units, must be "long", "short", or "narrow"
   * @param {string|string[]} options.unit - use a specific unit or array of units; if omitted, or an array, the method will pick the best unit. Use an array or one of "years", "quarters", "months", "weeks", "days", "hours", "minutes", or "seconds"
   * @param {boolean} [options.round=true] - whether to round the numbers in the output.
   * @param {number} [options.padding=0] - padding in milliseconds. This allows you to round up the result if it fits inside the threshold. Don't use in combination with {round: false} because the decimal output will include the padding.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.now().plus({ days: 1 }).toRelative() //=> "in 1 day"
   * @example DateTime.now().setLocale("es").toRelative({ days: 1 }) //=> "dentro de 1 día"
   * @example DateTime.now().plus({ days: 1 }).toRelative({ locale: "fr" }) //=> "dans 23 heures"
   * @example DateTime.now().minus({ days: 2 }).toRelative() //=> "2 days ago"
   * @example DateTime.now().minus({ days: 2 }).toRelative({ unit: "hours" }) //=> "48 hours ago"
   * @example DateTime.now().minus({ hours: 36 }).toRelative({ round: false }) //=> "1.5 days ago"
   */
  toRelative(t = {}) {
    if (!this.isValid)
      return null;
    const n = t.base || j.fromObject({}, { zone: this.zone }), i = t.padding ? this < n ? -t.padding : t.padding : 0;
    let s = ["years", "months", "days", "hours", "minutes", "seconds"], r = t.unit;
    return Array.isArray(t.unit) && (s = t.unit, r = void 0), ps(n, this.plus(i), {
      ...t,
      numeric: "always",
      units: s,
      unit: r
    });
  }
  /**
   * Returns a string representation of this date relative to today, such as "yesterday" or "next month".
   * Only internationalizes on platforms that supports Intl.RelativeTimeFormat.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.unit - use a specific unit; if omitted, the method will pick the unit. Use one of "years", "quarters", "months", "weeks", or "days"
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar() //=> "tomorrow"
   * @example DateTime.now().setLocale("es").plus({ days: 1 }).toRelative() //=> ""mañana"
   * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar({ locale: "fr" }) //=> "demain"
   * @example DateTime.now().minus({ days: 2 }).toRelativeCalendar() //=> "2 days ago"
   */
  toRelativeCalendar(t = {}) {
    return this.isValid ? ps(t.base || j.fromObject({}, { zone: this.zone }), this, {
      ...t,
      numeric: "auto",
      units: ["years", "months", "days"],
      calendary: !0
    }) : null;
  }
  /**
   * Return the min of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the minimum
   * @return {DateTime} the min DateTime, or undefined if called with no argument
   */
  static min(...t) {
    if (!t.every(j.isDateTime))
      throw new He("min requires all arguments be DateTimes");
    return Wi(t, (n) => n.valueOf(), Math.min);
  }
  /**
   * Return the max of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the maximum
   * @return {DateTime} the max DateTime, or undefined if called with no argument
   */
  static max(...t) {
    if (!t.every(j.isDateTime))
      throw new He("max requires all arguments be DateTimes");
    return Wi(t, (n) => n.valueOf(), Math.max);
  }
  // MISC
  /**
   * Explain how a string would be parsed by fromFormat()
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see description)
   * @param {Object} options - options taken by fromFormat()
   * @return {Object}
   */
  static fromFormatExplain(t, n, i = {}) {
    const { locale: s = null, numberingSystem: r = null } = i, l = ce.fromOpts({
      locale: s,
      numberingSystem: r,
      defaultToEN: !0
    });
    return Gl(l, t, n);
  }
  /**
   * @deprecated use fromFormatExplain instead
   */
  static fromStringExplain(t, n, i = {}) {
    return j.fromFormatExplain(t, n, i);
  }
  // FORMAT PRESETS
  /**
   * {@link DateTime#toLocaleString} format like 10/14/1983
   * @type {Object}
   */
  static get DATE_SHORT() {
    return ni;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983'
   * @type {Object}
   */
  static get DATE_MED() {
    return al;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Fri, Oct 14, 1983'
   * @type {Object}
   */
  static get DATE_MED_WITH_WEEKDAY() {
    return Jf;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983'
   * @type {Object}
   */
  static get DATE_FULL() {
    return ol;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Tuesday, October 14, 1983'
   * @type {Object}
   */
  static get DATE_HUGE() {
    return ul;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_SIMPLE() {
    return dl;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_SECONDS() {
    return cl;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_SHORT_OFFSET() {
    return fl;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_LONG_OFFSET() {
    return ml;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_SIMPLE() {
    return hl;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_SECONDS() {
    return pl;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 EDT', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_SHORT_OFFSET() {
    return yl;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 Eastern Daylight Time', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_LONG_OFFSET() {
    return _l;
  }
  /**
   * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_SHORT() {
    return gl;
  }
  /**
   * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_SHORT_WITH_SECONDS() {
    return vl;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED() {
    return bl;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30:33 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED_WITH_SECONDS() {
    return kl;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Fri, 14 Oct 1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED_WITH_WEEKDAY() {
    return Xf;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_FULL() {
    return xl;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30:33 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_FULL_WITH_SECONDS() {
    return wl;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_HUGE() {
    return Sl;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30:33 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_HUGE_WITH_SECONDS() {
    return Tl;
  }
}
function cn(e) {
  if (j.isDateTime(e))
    return e;
  if (e && e.valueOf && Et(e.valueOf()))
    return j.fromJSDate(e);
  if (e && typeof e == "object")
    return j.fromObject(e);
  throw new He(
    `Unknown datetime argument: ${e}, of type ${typeof e}`
  );
}
const Zh = {
  mixins: [xt],
  computed: {
    hasValue() {
      return this.value !== void 0 && this.value !== null;
    },
    timeago() {
      return j.fromISO(this.value).toRelative();
    },
    readable() {
      let e = j.fromISO(this.value), t = j.now(), n = t.toFormat("yyyy");
      return t.toFormat("MMM yyyy"), e.toFormat("yyyy") === n ? j.fromISO(this.value).toFormat("h:mm a - dd MMM") : j.fromISO(this.value).toFormat("h:mm a - dd MMM yyyy");
    }
  }
}, Kh = { class: "table-date-cell" }, Yh = { key: 0 }, Jh = { class: "off" }, Xh = { class: "on" }, Qh = { class: "spacer" };
function ep(e, t, n, i, s, r) {
  return o(), d("td", Kh, [
    r.hasValue ? (o(), d("div", Yh, [
      x("span", Jh, b(r.readable), 1),
      x("span", Xh, b(r.timeago), 1),
      x("span", Qh, b(r.readable), 1)
    ])) : _("", !0)
  ]);
}
const _s = /* @__PURE__ */ V(Zh, [["render", ep], ["__scopeId", "data-v-d6b72564"]]);
const tp = {
  mixins: [xt],
  computed: {
    boolean() {
      return !!this.value;
    }
  }
};
function np(e, t, n, i, s, r) {
  const l = y("ux-icon");
  return o(), d("td", {
    class: R(["table-boolean-cell", { true: r.boolean, false: !r.boolean }])
  }, [
    h(l, {
      icon: r.boolean ? "fa-check" : "fa-times"
    }, null, 8, ["icon"])
  ], 2);
}
const gs = /* @__PURE__ */ V(tp, [["render", np], ["__scopeId", "data-v-897e69cd"]]);
const rp = {
  mixins: [xt],
  methods: {
    async clicked() {
      const e = this, t = e.$sdk.utils.id(e.row), n = e.public ? "secure" : "public";
      e.processing = !0, e.$sdk.content.patch(t, {
        meta: {
          security: n
        }
      }).catch(function(i) {
        e.$sdk.error(i), e.processing = !1;
      }).then(function(i) {
        e.v = n, e.processing = !1, e.$sdk.notify(`Set security to ${n}`);
      });
    }
  },
  data() {
    return {
      processing: !1,
      v: this.value
    };
  },
  computed: {
    canEdit() {
      var e = this.user;
      return this.$sdk.access.canEditItem(e, this.row);
    },
    public() {
      return this.security === "public";
    },
    security() {
      return this.v || "secure";
    }
  }
};
function ip(e, t, n, i, s, r) {
  const l = y("ux-icon"), a = y("ux-button");
  return o(), d("td", {
    class: R(["table-security-cell", r.security])
  }, [
    r.canEdit ? (o(), k(a, {
      key: 0,
      size: "sm",
      loading: s.processing,
      onClick: G(r.clicked, ["stop", "prevent"])
    }, {
      default: m(() => [
        h(l, {
          icon: r.public ? "fa-lock-open" : "fa-lock"
        }, null, 8, ["icon"])
      ]),
      _: 1
    }, 8, ["loading", "onClick"])) : (o(), k(l, {
      key: 1,
      icon: r.public ? "fa-lock-open" : "fa-lock"
    }, null, 8, ["icon"]))
  ], 2);
}
const sp = /* @__PURE__ */ V(rp, [["render", ip], ["__scopeId", "data-v-45dd2b07"]]);
const lp = {
  mixins: [xt],
  methods: {
    open() {
      window.open(this.href);
    }
  },
  computed: {
    href() {
      return `http://${this.value}`;
    }
  }
}, ap = { class: "table-url-cell" }, op = ["href"];
function up(e, t, n, i, s, r) {
  const l = y("ux-icon");
  return o(), d("td", ap, [
    x("a", {
      href: r.href,
      onClick: t[0] || (t[0] = G((...a) => r.open && r.open(...a), ["stop", "prevent"])),
      target: "_blank"
    }, [
      S(b(e.value) + " ", 1),
      h(l, {
        right: "",
        icon: "fa-external-link"
      })
    ], 8, op)
  ]);
}
const vs = /* @__PURE__ */ V(lp, [["render", up], ["__scopeId", "data-v-7dbf1e30"]]);
var bs = function(e, t, n) {
  if (!t.hasOwnProperty(n)) {
    var i = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(t, n, i);
  }
};
const Ai = { props: { template: String, parent: Object, templateProps: { type: Object, default: function() {
  return {};
} } }, render: function() {
  if (this.template) {
    var e = this.parent || this.$parent, t = e.$data;
    t === void 0 && (t = {});
    var n = e.$props;
    n === void 0 && (n = {});
    var i = e.$options;
    i === void 0 && (i = {});
    var s = i.components;
    s === void 0 && (s = {});
    var r = i.computed;
    r === void 0 && (r = {});
    var l = i.methods;
    l === void 0 && (l = {});
    var a = this.$data;
    a === void 0 && (a = {});
    var u = this.$props;
    u === void 0 && (u = {});
    var c = this.$options;
    c === void 0 && (c = {});
    var f = c.methods;
    f === void 0 && (f = {});
    var p = c.computed;
    p === void 0 && (p = {});
    var g = c.components;
    g === void 0 && (g = {});
    var v = { $data: {}, $props: {}, $options: {}, components: {}, computed: {}, methods: {} };
    Object.keys(t).forEach(function(F) {
      a[F] === void 0 && (v.$data[F] = t[F]);
    }), Object.keys(n).forEach(function(F) {
      u[F] === void 0 && (v.$props[F] = n[F]);
    }), Object.keys(l).forEach(function(F) {
      f[F] === void 0 && (v.methods[F] = l[F]);
    }), Object.keys(r).forEach(function(F) {
      p[F] === void 0 && (v.computed[F] = r[F]);
    }), Object.keys(s).forEach(function(F) {
      g[F] === void 0 && (v.components[F] = s[F]);
    });
    var T = Object.keys(v.methods || {}), A = Object.keys(v.$data || {}), E = Object.keys(v.$props || {}), q = Object.keys(this.templateProps), Q = A.concat(E).concat(T).concat(q), ne = (oe = e, B = {}, T.forEach(function(F) {
      return bs(oe, B, F);
    }), B), ae = function(F) {
      var se = {};
      return F.forEach(function(z) {
        z && Object.getOwnPropertyNames(z).forEach(function(Ce) {
          return bs(z, se, Ce);
        });
      }), se;
    }([v.$data, v.$props, ne, this.templateProps]);
    return ti({ template: this.template || "<div></div>", props: Q, computed: v.computed, components: v.components, provide: this.$parent.$.provides ? this.$parent.$.provides : {} }, Object.assign({}, ae));
  }
  var oe, B;
} };
const dp = {
  components: {
    Compile: Ai
  },
  mixins: [xt]
}, cp = { class: "table-computed-cell" };
function fp(e, t, n, i, s, r) {
  const l = y("compile");
  return o(), d("td", cp, [
    h(l, {
      template: this.column.code
    }, null, 8, ["template"])
  ]);
}
const mp = /* @__PURE__ */ V(dp, [["render", fp], ["__scopeId", "data-v-05dd3203"]]);
const hp = {
  props: {
    multi: {
      type: Boolean
    },
    last: {
      type: Boolean
    },
    value: {
      required: !0
    },
    type: {
      type: String
    },
    widget: {
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
      return j.fromISO(this.value).toFormat("dd MMM yyyy");
    },
    actualWidget() {
      var e;
      if (this.widget)
        e = this.widget;
      else
        switch (this.type) {
          case "date":
            e = "datetime";
            break;
        }
      return e;
    }
  },
  methods: {
    clicked(e) {
      this.$sdk.dispatch("item:view", e);
    }
  }
};
function pp(e, t, n, i, s, r) {
  return r.reference ? (o(), d("a", {
    key: 0,
    onClick: t[0] || (t[0] = G((l) => r.clicked(n.value), ["stop", "prevent"]))
  }, b(r.renderValue), 1)) : n.type == "date" ? (o(), d(w, { key: 1 }, [
    S(b(r.date), 1)
  ], 64)) : (o(), d(w, { key: 2 }, [
    S(b(r.renderValue), 1),
    n.multi && !n.last ? (o(), d(w, { key: 0 }, [
      S(", ")
    ], 64)) : _("", !0)
  ], 64));
}
const yp = /* @__PURE__ */ V(hp, [["render", pp], ["__scopeId", "data-v-cb9b14f7"]]);
function ui(e, t) {
  if (!e || !t)
    return;
  var n = ir(e, t);
  if (n)
    return n;
  const i = t.split("."), s = i.shift(), r = i.join("."), l = ir(e, s);
  return Array.isArray(l) ? l.map(function(a) {
    return ui(a, r);
  }).flat().filter(Boolean) : ui(l, r);
}
const _p = {
  data() {
    return {
      component: null
    };
  },
  components: {
    ValueRenderer: yp
  },
  async created() {
    const e = this;
    let t, n = e.column.type, i = e.column.renderer || e.column.widget;
    switch (n == "reference" && e.column.referenceType === "image" && (i = "thumbnail"), i) {
      case "button":
        t = Wf;
        break;
      case "security":
        t = sp;
        break;
      case "boolean":
        t = gs;
        break;
      case "date":
      case "datetime":
        t = _s;
        break;
      case "computed":
        t = mp;
        break;
      case "url":
        t = vs;
        break;
      case "currency":
        t = zf;
        break;
      case "thumbnail":
        t = jf;
        break;
      default:
        switch (n) {
          case "date":
            t = _s;
            break;
          case "boolean":
            t = gs;
            break;
          case "url":
            t = vs;
            break;
        }
        break;
    }
    e.component = t;
  },
  props: {
    column: {
      type: Object,
      required: !0
    },
    row: {
      type: Object,
      required: !0
    }
  },
  computed: {
    multiValue() {
      return Array.isArray(this.value);
    },
    complex() {
      this.multiValue;
    },
    renderer() {
      return this.column.renderer;
    },
    renderValue() {
      var e = this.value;
      if (e != null)
        return e.title || e.name || e;
    },
    value() {
      var e = ui(this.row, this.column.key);
      return e;
    }
  }
}, gp = {
  key: 1,
  class: "table-cell"
}, vp = { class: "value" }, bp = { class: "value" };
function kp(e, t, n, i, s, r) {
  const l = y("value-renderer");
  return s.component ? (o(), k(gt(s.component), {
    key: 0,
    column: n.column,
    row: n.row,
    value: r.value
  }, null, 8, ["column", "row", "value"])) : (o(), d("td", gp, [
    r.multiValue ? (o(), d(w, { key: 0 }, [
      r.complex ? (o(!0), d(w, { key: 0 }, L(r.value, (a, u) => (o(), d("span", vp, [
        h(l, {
          type: n.column.type,
          multi: "",
          last: u === r.value.length - 1,
          value: a
        }, null, 8, ["type", "last", "value"])
      ]))), 256)) : (o(!0), d(w, { key: 1 }, L(r.value, (a, u) => (o(), d("span", bp, [
        h(l, {
          type: n.column.type,
          multi: "",
          last: u === r.value.length - 1,
          value: a
        }, null, 8, ["type", "last", "value"])
      ]))), 256))
    ], 64)) : (o(), k(l, {
      key: 1,
      type: n.column.type,
      value: r.value
    }, null, 8, ["type", "value"]))
  ]));
}
const ra = /* @__PURE__ */ V(_p, [["render", kp], ["__scopeId", "data-v-197ae322"]]), xp = {
  components: {
    TableCell: ra
  },
  props: {
    selected: {
      type: Boolean
    },
    index: {
      type: Number
    },
    row: {
      type: Object,
      required: !0
    },
    columns: {
      type: Array,
      required: !0
    },
    enableActions: {
      type: Boolean,
      default() {
        return !1;
      }
    },
    enableSelection: {
      type: Boolean,
      default() {
        return !0;
      }
    }
  },
  methods: {
    clickCell(e) {
      this.$emit("click:cell", { row: this.row, column: e }), this.$emit("click:row", this.row);
    },
    clickActions(e) {
      this.$emit("click:actions", e);
    },
    clickSelect(e) {
      const t = this.index;
      this.$emit("click:select", e, t);
    }
  },
  computed: {
    classes() {
      var e = [];
      return this.selected && e.push("selected"), e;
    }
  }
};
function wp(e, t, n, i, s, r) {
  const l = y("ux-checkbox"), a = y("table-cell"), u = y("ux-icon"), c = y("ux-button");
  return o(), d("tr", {
    class: R([r.classes, "table-row"])
  }, [
    W(e.$slots, "default", {}, () => [
      n.enableSelection ? (o(), d("th", {
        key: 0,
        class: "table-cell table-select first shrink",
        onClick: t[0] || (t[0] = G((f) => r.clickSelect(n.row), ["stop", "prevent"]))
      }, [
        h(l, { value: n.selected }, null, 8, ["value"])
      ])) : _("", !0),
      (o(!0), d(w, null, L(n.columns, (f, p) => (o(), k(a, {
        key: `${f.path || f.key}-${p}`,
        onClick: G((g) => r.clickCell(f), ["stop", "prevent"]),
        column: f,
        row: n.row
      }, null, 8, ["onClick", "column", "row"]))), 128)),
      n.enableActions ? (o(), d("th", {
        key: 1,
        class: "table-cell last shrink",
        onClick: t[1] || (t[1] = G((f) => r.clickActions(n.row), ["stop", "prevent"]))
      }, [
        h(c, {
          size: "xs",
          icon: ""
        }, {
          default: m(() => [
            h(u, { icon: "fa-ellipsis" })
          ]),
          _: 1
        })
      ])) : _("", !0)
    ])
  ], 2);
}
const Sp = /* @__PURE__ */ V(xp, [["render", wp]]), Tp = {
  data() {
    return {
      scrollTop: 0
    };
  },
  methods: {
    updateScroll(e) {
      var t = this.$refs.scroll;
      t = t.$el || t, this.scrollTop = t.scrollTop;
    }
  },
  mounted() {
    var e = this.$refs.scroll;
    e = e.$el || e, e.addEventListener("scroll", this.updateScroll);
  },
  beforeUnmount() {
    var e = this.$refs.scroll;
    e = e.$el || e, e.removeEventListener("scroll", this.updateScroll);
  },
  activated() {
    var e = this.$refs.scroll;
    e = e.$el || e, e.scrollTop = this.scrollTop;
  }
};
const Op = {
  mixins: [Tp],
  components: {
    TableRow: Sp,
    TableCell: ra
  },
  watch: {
    rows() {
      this.$refs.scroll.scroll({
        top: 0,
        left: 0
      });
    },
    sort(e) {
      this.sorting = e;
    },
    sorting(e) {
      this.$emit("update:sort", e);
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
        return !0;
      }
    },
    enableActions: {
      type: Boolean,
      default() {
        return !1;
      }
    },
    enableSelection: {
      type: Boolean,
      default() {
        return !0;
      }
    },
    sort: {
      type: Object,
      default() {
        return {
          key: "meta.created",
          type: "date",
          direction: "desc"
        };
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
  data() {
    return {
      sorting: this.sort,
      lastSelectedIndex: null,
      shift: !1,
      keyListenersAdded: !1
    };
  },
  mounted() {
    this.addKeyListeners();
  },
  activated() {
    this.addKeyListeners();
  },
  beforeUnmount() {
    this.removeKeyListeners();
  },
  deactivated() {
    this.removeKeyListeners();
  },
  computed: {
    currentSortDirection() {
      var e;
      return ((e = this.sorting) == null ? void 0 : e.direction) || "asc";
    },
    selectionHash() {
      var e = this;
      return e.selection.reduce(function(t, n) {
        var i = n._id || n.id;
        return t[i] = n, t;
      }, {});
    },
    pageSelected() {
      var e = this;
      if (!(!e.rows || !e.rows.length))
        return !e.rows.some(function(t) {
          return !e.selectionHash[t._id || t.id];
        });
    },
    renderColumns() {
      return this.columns.map(function(e) {
        var t = Object.assign({}, e);
        return t.class = [], t.shrink && t.class.push("shrink"), t;
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
    keyDown(e) {
      e.keyCode == 16 && (this.shift = !0);
    },
    keyUp(e) {
      e.keyCode == 16 && (this.shift = !1);
    },
    addKeyListeners() {
      this.keyListenersAdded || (window.addEventListener("keydown", this.keyDown, !0), window.addEventListener("keyup", this.keyUp, !0), this.keyListenersAdded = !0);
    },
    removeKeyListeners() {
      this.keyListenersAdded && (window.removeEventListener("keydown", this.keyDown, !0), window.removeEventListener("keyup", this.keyUp, !0), this.keyListenersAdded = !1);
    },
    togglePage() {
      var e = this;
      e.pageSelected ? e.deselectPage() : e.selectPage();
    },
    selectPage() {
      var e = this;
      e.$emit("select:multiple", e.rows);
    },
    deselectPage() {
      var e = this;
      e.$emit("deselect:multiple", e.rows);
    },
    isSelected(e) {
      var t = this, n = e._id || e.id;
      return t.selection.some(function(i) {
        var s = i._id || i.id;
        return i == e || s == n;
      });
    },
    classes(e) {
      let t = [];
      return this.isSelected(e) && t.push("selected"), t;
    },
    selectRange(e, t) {
      const n = this, i = Math.min(e, t), s = Math.max(e, t) + 1;
      var r = n.renderRows.slice(i, s);
      n.$emit("select:multiple", r);
    },
    toggleSort(e) {
      var r, l;
      const t = (r = this.sorting) == null ? void 0 : r.key, n = ((l = this.sorting) == null ? void 0 : l.direction) || "asc";
      let { key: i, direction: s } = e;
      i === t && (s = n === "dsc" ? "asc" : "dsc"), this.sorting = {
        key: i,
        direction: s,
        type: e.type
      }, this.$emit("");
    },
    clickRow(e) {
      this.$emit("click:row", e);
    },
    clickCell({ row: e, column: t }) {
      this.$emit("click:cell", { row: e, column: t });
    },
    clickActions(e) {
      this.$emit("click:actions", e);
    },
    clickSelect(e, t) {
      const n = this.lastSelectedIndex;
      if (this.shift && n != t)
        return console.log("FROM", n, "-", t), this.selectRange(n, t);
      this.lastSelectedIndex = t, this.$emit("select:row:toggle", e);
    }
  }
}, Vp = { class: "table-wrapper" }, Ap = {
  class: "table-scroll",
  ref: "scroll"
}, Cp = {
  key: 0,
  class: "first table-select shrink"
}, Ep = ["onClick"], Mp = {
  key: 1,
  class: "last shrink"
};
function Ip(e, t, n, i, s, r) {
  const l = y("ux-checkbox"), a = y("ux-list-item"), u = y("ux-list"), c = y("ux-menu"), f = y("flex-cell"), p = y("flex-row"), g = y("table-row");
  return o(), d("div", Vp, [
    x("div", Ap, [
      x("table", null, [
        x("thead", null, [
          x("tr", null, [
            n.enableSelection ? (o(), d("th", Cp, [
              h(c, null, {
                activator: m(({ on: v }) => [
                  h(l, pi(Js(v), { value: r.pageSelected }), null, 16, ["value"])
                ]),
                default: m(() => [
                  h(u, null, {
                    default: m(() => [
                      h(a, {
                        onClick: t[0] || (t[0] = (v) => r.selectPage())
                      }, {
                        default: m(() => [
                          S(" Select Page ")
                        ]),
                        _: 1
                      }),
                      r.someSelectedOnPage ? (o(), k(a, {
                        key: 0,
                        onClick: t[1] || (t[1] = (v) => r.deselectPage())
                      }, {
                        default: m(() => [
                          S(" Deselect Page ")
                        ]),
                        _: 1
                      })) : _("", !0),
                      n.selectAll ? (o(), k(a, {
                        key: 1,
                        onClick: t[2] || (t[2] = (v) => n.selectAll())
                      }, {
                        default: m(() => [
                          S(" Select All (" + b(n.total) + ") ", 1)
                        ]),
                        _: 1
                      })) : _("", !0),
                      n.deselectAll ? (o(), k(a, {
                        key: 2,
                        onClick: t[3] || (t[3] = (v) => n.deselectAll())
                      }, {
                        default: m(() => [
                          S(" Deselect All ")
                        ]),
                        _: 1
                      })) : _("", !0)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ])) : _("", !0),
            (o(!0), d(w, null, L(r.renderColumns, (v) => {
              var T;
              return o(), d("th", {
                onClick: (A) => r.toggleSort(v),
                class: R([{ sortable: v.sortable !== !1, active: v.key === ((T = s.sorting) == null ? void 0 : T.key) }, v.class])
              }, [
                h(p, {
                  gap: "",
                  vcenter: ""
                }, {
                  default: m(() => {
                    var A;
                    return [
                      h(f, null, {
                        default: m(() => [
                          S(b(v.title), 1)
                        ]),
                        _: 2
                      }, 1024),
                      v.key === ((A = s.sorting) == null ? void 0 : A.key) ? (o(), k(f, {
                        key: 0,
                        class: "caret",
                        shrink: ""
                      }, {
                        default: m(() => [
                          S(b(r.currentSortDirection === "asc" ? "▲" : "▼"), 1)
                        ]),
                        _: 1
                      })) : _("", !0)
                    ];
                  }),
                  _: 2
                }, 1024)
              ], 10, Ep);
            }), 256)),
            n.enableActions ? (o(), d("th", Mp, [
              W(e.$slots, "corner", {}, void 0, !0)
            ])) : _("", !0)
          ])
        ]),
        x("tbody", null, [
          (o(!0), d(w, null, L(r.renderRows, (v, T) => (o(), k(g, {
            enableSelection: n.enableSelection,
            enableActions: n.enableActions,
            key: v._id,
            "onClick:cell": r.clickCell,
            "onClick:row": r.clickRow,
            "onClick:select": r.clickSelect,
            "onClick:actions": r.clickActions,
            selected: r.isSelected(v),
            row: v,
            index: T,
            columns: n.columns
          }, null, 8, ["enableSelection", "enableActions", "onClick:cell", "onClick:row", "onClick:select", "onClick:actions", "selected", "row", "index", "columns"]))), 128))
        ])
      ])
    ], 512)
  ]);
}
const Dp = /* @__PURE__ */ V(Op, [["render", Ip], ["__scopeId", "data-v-328783f5"]]);
var Kt = {}, Fp = {
  get exports() {
    return Kt;
  },
  set exports(e) {
    Kt = e;
  }
}, $p = Object.prototype.hasOwnProperty;
function ia(e) {
  return "[Throws: " + (e ? e.message : "?") + "]";
}
function Np(e, t) {
  if ($p.call(e, t))
    try {
      return e[t];
    } catch (n) {
      return ia(n);
    }
  return e[t];
}
function sa(e) {
  var t = [];
  function n(i) {
    if (i === null || typeof i != "object")
      return i;
    if (t.indexOf(i) !== -1)
      return "[Circular]";
    if (t.push(i), typeof i.toJSON == "function")
      try {
        var s = n(i.toJSON());
        return t.pop(), s;
      } catch (a) {
        return ia(a);
      }
    if (Array.isArray(i)) {
      var r = i.map(n);
      return t.pop(), r;
    }
    var l = Object.keys(i).reduce(function(a, u) {
      return a[u] = n(Np(i, u)), a;
    }, {});
    return t.pop(), l;
  }
  return n(e);
}
Fp.exports = function(e, t, n) {
  return JSON.stringify(sa(e), t, n);
};
Kt.ensureProperties = sa;
function Lp(e, t) {
  return e == null || t == "date" && e.toString && e.toString() === "Invalid Date";
}
function ks(e) {
  return e != null;
}
const ie = {
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
    modelValue(e, t) {
      this.model = e;
    }
  },
  mounted() {
    this.checkAutofocus();
  },
  inject: ["form", "fieldPath"],
  computed: {
    optionLookup() {
      var e = this;
      return e.options.reduce(function(t, n) {
        const i = e.getValue(n);
        return t[i] = n, t;
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
        var e = this.cleanOutput(this.value);
        return e;
      },
      set(e) {
        let t;
        (this.isGroup || this.widget === "form") && (e === this.value ? t = !1 : t = !0);
        const n = this.cleanInput(e), i = this.cleanInput(this.value);
        (Kt(n) != Kt(i) || t) && (this.value = n, this.checkAutofocus(), this.dispatch());
      }
    },
    options() {
      var e = this;
      return (this.field.options || []).reduce(function(t, n) {
        if (!n)
          return t;
        const i = e.getValue(n);
        var r = {
          title: n.title || n.name || n.label || i,
          value: i,
          source: n
        };
        return e.field.type == "reference" && (r._id = i), t.push(r), t;
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
      if (!this.singleValue)
        return this.maximum === 0 || this.numValues < this.maximum;
    },
    canRemoveValue() {
      return this.numValues > this.minimum;
    },
    widget() {
      return this.field.widget;
    },
    singleValue() {
      if (this.asObject) {
        var e = this.minimum === 1 && this.maximum === 1;
        return e;
      } else
        return this.maximum === 1;
    },
    multiValue() {
      return !this.singleValue;
    },
    label() {
      return this.field.title;
    },
    title() {
      return this.label;
    },
    plural() {
      return this.field.plural;
    },
    description() {
      return this.field.description;
    },
    placeholder() {
      return this.field.placeholder || this.field.hint;
    },
    addLabel() {
      return this.numValues ? `Add another ${this.label}` : `Add ${this.label}`;
    },
    removeLabel() {
      return "Remove";
    },
    numValues() {
      return this.singleValue ? 1 : (this.value || []).length || 0;
    },
    showLabel() {
      return this.field.title;
    },
    showDescription() {
      return this.description;
    },
    fields() {
      var e = this.field.fields;
      if (e && e.length)
        return e;
    },
    minimum() {
      if (this.layoutGroup)
        return 1;
      var e = parseInt(this.field.minimum || 0);
      return isNaN(e) && (e = 0), e = Math.max(e, 0), e = this.maximum ? Math.min(e, this.maximum) : e, parseInt(e);
    },
    maximum() {
      if (this.layoutGroup)
        return 1;
      var e = parseInt(this.field.maximum || 0);
      return isNaN(e) && (e = 0), e = Math.max(e, 0), parseInt(e);
    },
    ask() {
      var e = parseInt(this.field.ask);
      return e = Math.max(e, this.minimum), this.maximum && (e = Math.min(e, this.maximum)), e;
    }
  },
  methods: {
    cleanTextInput(e, t, n) {
      switch (t) {
        case "url":
          e = n.$sdk.utils.parseURL(e);
          break;
        case "key":
          e = String(n.$sdk.utils.machineName(e || "") || "").trim();
          break;
        case "integer":
          e = parseInt(String(e).replace(/[^0-9-]/g, "")), isNaN(e) && (e = void 0);
          break;
        case "number":
        case "decimal":
        case "float":
          e = Number(String(e).replace(/[^0-9.-]/g, "")), isNaN(e) && (e = void 0);
          break;
      }
      return e;
    },
    checkAutofocus() {
      if (this.field.autofocus) {
        if (this.value)
          return;
        this.$nextTick(function() {
          this.refocus();
        });
      }
    },
    getValue(e) {
      if (!e)
        return this.cleanTextInput(e);
      var t = this.cleanTextInput(e._id || e.value), n = ks(t);
      return !n && e.title && !this.returnObject && (t = e.title), t = this.cleanTextInput(t), ks(t) ? t : e;
    },
    getLabel(e) {
      if (e) {
        var t = e.title || e.name || e.label;
        return typeof t == "object" ? "(no title)" : t;
      }
    },
    touch() {
      this.$emit("touched");
    },
    getNewDefaultEntry() {
    },
    add() {
      if (this.canAddValue) {
        var e = this.cleanInputValue(this.getNewDefaultEntry());
        (!this.value || !Array.isArray(this.value)) && (this.value = []), this.value.push(e), this.dispatch(), this.$nextTick(function() {
          this.refocus();
        }), this.touch();
      }
    },
    remove(e) {
      var t = this.model.indexOf(e);
      this.value.splice(t, 1), this.dispatch(), this.touch();
    },
    dispatch() {
      this.$emit("update:modelValue", this.value), console.log("Update", this.field.title);
    },
    cleanInputValue(e) {
      return e;
    },
    cleanOutputValue(e) {
      return e;
    },
    cleanOutput(e) {
      var t = this;
      return Lp(e, t.field.type) ? t.multiValue ? e = [] : e = void 0 : t.multiValue ? (Array.isArray(e) || (e = []), e.forEach(function(n, i) {
        e[i] = t.cleanOutputValue(n);
      })) : e = t.cleanOutputValue(e), e;
    },
    cleanInput(e) {
      var t = this;
      if (t.multiValue) {
        for (e || (e = []), Array.isArray(e) || (e = [e]), t.maximum && e.length > t.maximum && (e.length = t.maximum); e.length < t.minimum; )
          e.push(t.cleanInputValue(t.getNewDefaultEntry()));
        e = e.map(function(n) {
          var i = t.cleanInputValue(n);
          return i;
        });
      } else
        e && (e = t.cleanInputValue(e));
      return e;
    },
    refocus() {
      var e = this.$refs.input;
      if (e) {
        var t;
        Array.isArray(e) ? t = e[e.length - 1] : t = e, t && t.focus();
      }
    }
  }
};
function Pp(e) {
  return e === void 0 || typeof e > "u" || e === null || String(e) === "null" || String(e) === "undefined";
}
const Up = {
  props: {
    title: {
      type: String
    },
    modelValue: {
      // type: [Object, Array],
    }
  },
  mixins: [ie],
  created() {
    this.model = this.model;
  },
  methods: {
    cleanOutput(e) {
      var t = this;
      return Pp(e) ? t.multiValue ? e = [] : e = void 0 : t.multiValue ? e = (e || []).filter(function(n) {
        return n != null;
      }).map(function(n) {
        return t.getValue(n);
      }) : e = t.getValue(e), e;
    },
    cleanInput(e) {
      var t = this;
      if (t.multiValue)
        e || (e = []), Array.isArray(e) || (e = [e]), t.maximum && e.length > t.maximum && (e.length = t.maximum), e = e.filter(function(i) {
          return i != null;
        }).map(function(i) {
          var s = t.getValue(i);
          return t.returnObject ? t.optionLookup[s] : s;
        });
      else {
        var n = t.getValue(e);
        switch (e = t.returnObject ? t.optionLookup[n] : n, e) {
          case "":
            switch (t.type) {
              case "decimal":
              case "float":
              case "number":
              case "integer":
                e = void 0;
                break;
            }
            break;
        }
      }
      return e;
    }
  },
  computed: {
    returnObject() {
      return this.type == "reference";
    },
    classes() {
      var e = [];
      return this.multiValue ? e.push("multiple") : e.push("single"), e;
    },
    optionLookup() {
      var e = this;
      return e.options.reduce(function(t, n) {
        const i = e.getValue(n);
        return t[i] = n, t;
      }, {});
    },
    summary() {
      return this.model ? this.getLabel(this.optionLookup[this.model]) : this.title || "Click to select";
    },
    selectableOptions() {
      return this.options;
    }
  }
}, jp = {
  key: 0,
  class: "ux-field-title"
}, Rp = {
  key: 0,
  class: "ux-required-marker"
}, Bp = {
  key: 1,
  class: "ux-field-description"
}, zp = {
  key: 2,
  class: "ui-select-button"
}, Hp = ["multiple"], qp = {
  key: 0,
  value: ""
}, Gp = ["value"];
function Wp(e, t, n, i, s, r) {
  const l = y("ux-button");
  return o(), d("div", {
    class: R(["native-select", r.classes])
  }, [
    e.showLabel ? (o(), d("label", jp, [
      S(b(e.label) + " ", 1),
      e.required ? (o(), d("span", Rp, "*")) : _("", !0)
    ])) : _("", !0),
    e.showDescription ? (o(), d("div", Bp, b(e.description), 1)) : _("", !0),
    e.singleValue ? (o(), d("div", zp, [
      W(e.$slots, "default", {}, () => [
        h(l, { tag: "div" }, {
          default: m(() => [
            S(b(r.summary), 1)
          ]),
          _: 1
        })
      ], !0)
    ])) : _("", !0),
    Y(x("select", {
      onFocus: t[0] || (t[0] = (...a) => e.touch && e.touch(...a)),
      multiple: e.multiValue,
      "onUpdate:modelValue": t[1] || (t[1] = (a) => e.model = a)
    }, [
      e.singleValue && !e.minimum ? (o(), d("option", qp, "None")) : _("", !0),
      (o(!0), d(w, null, L(r.selectableOptions, (a) => (o(), d("option", {
        value: a.value
      }, b(a.title), 9, Gp))), 256))
    ], 40, Hp), [
      [Mt, e.model]
    ])
  ], 2);
}
const $t = /* @__PURE__ */ V(Up, [["render", Wp], ["__scopeId", "data-v-2f67f9c2"]]);
const Zp = {
  props: {
    total: {
      type: Number,
      default() {
        return 0;
      }
    },
    page: {
      type: Object,
      default() {
        return {
          size: 50,
          index: 1
        };
      }
    }
  },
  components: {
    NativeSelect: $t
  },
  watch: {
    totalPages() {
      this.currentPage = 0;
    }
  },
  computed: {
    perPage: {
      get() {
        return this.pageModel.size;
      },
      set(e) {
        e = Math.max(e, 1), this.pageModel.size = e, this.dispatch();
      }
    },
    pageField() {
      return {
        type: "integer",
        maximum: 1,
        minimum: 1,
        options: Array(this.totalPages).fill(1).map((e, t) => e + t)
      };
    },
    // total() {
    //     return this.dataSource.total;
    // },
    totalPages() {
      return Math.ceil(this.total / this.perPage);
    },
    startIndex() {
      return (this.currentPage - 1) * this.pageModel.size;
    },
    displayStartIndex() {
      return this.total ? this.startIndex + 1 : 0;
    },
    endIndex() {
      return Math.min(this.startIndex + this.pageModel.size, this.total);
    },
    currentPage: {
      get() {
        return this.pageModel.index;
      },
      set(e) {
        this.totalPages && (e = Math.min(this.totalPages, e)), e = Math.max(e, 1), this.pageModel.index = e, this.dispatch();
      }
    }
  },
  methods: {
    dispatch() {
      return this.$emit("update:page", this.pageModel);
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
      pageModel: this.page,
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
function Kp(e, t, n, i, s, r) {
  const l = y("native-select"), a = y("flex-cell"), u = y("ux-icon"), c = y("ux-button"), f = y("flex-row");
  return o(), k(f, {
    center: "",
    gap: ""
  }, {
    default: m(() => [
      h(a, {
        shrink: "",
        class: "text"
      }, {
        default: m(() => [
          h(l, {
            modelValue: r.perPage,
            "onUpdate:modelValue": t[0] || (t[0] = (p) => r.perPage = p),
            field: s.perPageField
          }, {
            default: m(() => [
              e.$device.breakpoint.xs ? (o(), d(w, { key: 0 }, [
                S(b(r.displayStartIndex) + "-" + b(r.endIndex) + " of " + b(n.total), 1)
              ], 64)) : (o(), d(w, { key: 1 }, [
                S("Showing " + b(r.displayStartIndex) + " to " + b(r.endIndex) + " of " + b(n.total) + " total", 1)
              ], 64))
            ]),
            _: 1
          }, 8, ["modelValue", "field"])
        ]),
        _: 1
      }),
      h(a),
      r.totalPages > 1 ? (o(), k(a, {
        key: 0,
        shrink: ""
      }, {
        default: m(() => [
          h(f, {
            gap: "",
            center: ""
          }, {
            default: m(() => [
              h(a, {
                shrink: "",
                class: "text"
              }, {
                default: m(() => [
                  h(l, {
                    modelValue: r.currentPage,
                    "onUpdate:modelValue": t[1] || (t[1] = (p) => r.currentPage = p),
                    field: r.pageField
                  }, {
                    default: m(() => [
                      e.$device.breakpoint.xs ? (o(), d(w, { key: 0 }, [
                        S(b(r.currentPage) + "/" + b(r.totalPages), 1)
                      ], 64)) : (o(), d(w, { key: 1 }, [
                        S("Page " + b(r.currentPage) + " of " + b(r.totalPages), 1)
                      ], 64))
                    ]),
                    _: 1
                  }, 8, ["modelValue", "field"])
                ]),
                _: 1
              }),
              h(a, { shrink: "" }, {
                default: m(() => [
                  h(c, {
                    icon: "",
                    onClick: t[2] || (t[2] = (p) => r.previousPage())
                  }, {
                    default: m(() => [
                      h(u, { icon: "fa-arrow-left" })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              h(a, { shrink: "" }, {
                default: m(() => [
                  h(c, {
                    icon: "",
                    onClick: t[3] || (t[3] = (p) => r.nextPage())
                  }, {
                    default: m(() => [
                      h(u, { icon: "fa-arrow-right" })
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
      })) : _("", !0)
    ]),
    _: 1
  });
}
const pO = /* @__PURE__ */ V(Zp, [["render", Kp], ["__scopeId", "data-v-f4838c15"]]);
const Yp = {
  props: {
    id: {
      type: [Object, String]
    }
  },
  computed: {
    stringID() {
      return this.$sdk.utils.id(this.id);
    },
    url() {
    }
  }
}, Jp = { class: "avatar" };
function Xp(e, t, n, i, s, r) {
  return o(), d("div", Jp);
}
const Qp = /* @__PURE__ */ V(Yp, [["render", Xp]]);
const ey = {
  props: {
    large: {
      type: Boolean
    }
  }
}, ty = (e) => (bt("data-v-d68fe1cf"), e = e(), kt(), e), ny = /* @__PURE__ */ ty(() => /* @__PURE__ */ x("i", { class: "fa fa-spin fa-spinner" }, null, -1)), ry = [
  ny
];
function iy(e, t, n, i, s, r) {
  return o(), d("div", {
    class: R(["ux-spinner", { large: n.large }])
  }, ry, 2);
}
const la = /* @__PURE__ */ V(ey, [["render", iy], ["__scopeId", "data-v-d68fe1cf"]]);
const sy = {
  components: {
    Spinner: la
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
    active: {
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
      var e = {};
      return this.bgColor && (e.backgroundColor = this.bgColor), this.fgColor && (e.color = this.fgColor), e;
    },
    classes() {
      var e = [];
      return e.push(`ux-btn-${this.size}`), this.block && e.push("ux-btn-block"), this.loading && e.push("ux-btn-loading"), this.active && e.push("ux-btn-active"), this.icon && e.push("ux-btn-icon"), e.push(`ux-btn-color-${this.color}`), this.disabled && e.push("ux-btn-disabled"), e;
    },
    element() {
      switch (this.tag) {
        case "span":
          return this.tag;
        case "submit":
          return "button";
        default:
          return this.to || this.href ? "ux-link" : this.tag || "button";
      }
    }
  }
}, ly = { class: "ux-btn-text" };
function ay(e, t, n, i, s, r) {
  const l = y("spinner");
  return o(), k(gt(r.element), {
    active: n.active,
    loading: n.loading,
    to: n.to,
    href: n.href,
    target: n.target,
    style: vt(r.style),
    class: R([r.classes, "ux-btn"]),
    disabled: n.disabled
  }, {
    default: m(() => [
      n.loading ? (o(), k(l, { key: 0 })) : _("", !0),
      x("span", ly, [
        W(e.$slots, "default", {}, void 0, !0)
      ])
    ]),
    _: 3
  }, 8, ["active", "loading", "to", "href", "target", "style", "class", "disabled"]);
}
const oy = /* @__PURE__ */ V(sy, [["render", ay], ["__scopeId", "data-v-2048752e"]]);
const uy = {
  props: {
    value: {
      type: Boolean,
      default() {
        return !1;
      }
    }
  },
  computed: {
    classes() {
      var e = [];
      return this.value ? e.push("ux-checkbox-true") : e.push("ux-checkbox-false"), e;
    }
  }
};
function dy(e, t, n, i, s, r) {
  const l = y("ux-icon");
  return o(), d("button", {
    class: R(["ux-checkbox", r.classes])
  }, [
    h(l, {
      class: "icon",
      icon: "fa-check"
    })
  ], 2);
}
const aa = /* @__PURE__ */ V(uy, [["render", dy], ["__scopeId", "data-v-46a835a5"]]);
const cy = {
  // components:{
  // UxIcon,
  // },
  props: {
    value: {
      type: Boolean,
      default() {
        return !1;
      }
    },
    loading: {
      type: Boolean,
      default() {
        return !1;
      }
    }
  },
  computed: {
    classes() {
      var e = [];
      return this.value ? e.push("ux-switch-true") : e.push("ux-switch-false"), this.loading && e.push("ux-switch-loading"), e;
    }
  }
};
function fy(e, t, n, i, s, r) {
  const l = y("ux-icon");
  return o(), d("a", {
    class: R(["ux-switch", r.classes])
  }, [
    x("span", null, [
      h(l, {
        spin: "",
        icon: "fa-spinner"
      })
    ])
  ], 2);
}
const my = /* @__PURE__ */ V(cy, [["render", fy], ["__scopeId", "data-v-9663da46"]]);
const hy = {
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
    },
    active: {
      type: Boolean
    }
  },
  methods: {
    clicked(e) {
      var t = this;
      if (t.to && (t.buildMode || t.nuxtMode))
        return e.preventDefault(), e.stopImmediatePropagation(), t.$sdk.app.to(t.to);
      if (t.href && (t.buildMode || t.nuxtMode)) {
        e.preventDefault(), e.stopImmediatePropagation();
        return;
      }
    }
  },
  computed: {
    actualHref() {
      if (this.href)
        return this.href;
      if (this.nuxtMode)
        return this.$sdk.app.createHref(this.to);
    },
    nuxtMode() {
      return this.to && this.$sdk.nuxt && this.$sdk.app && this.$sdk.app.createHref;
    },
    buildMode() {
      return !!this.$sdk && this.$sdk.app && this.$sdk.app.builder;
    },
    class() {
      var e = [];
      return this.disabled && e.push("disabled"), this.active && e.push("active"), (this.href || this.to) && e.push("haslink"), e;
    },
    element() {
      return this.nuxtMode || this.buildMode ? "a" : this.to ? "router-link" : "a";
    }
  }
};
function py(e, t, n, i, s, r) {
  return o(), k(gt(r.element), {
    onClick: r.clicked,
    to: n.to,
    href: r.actualHref,
    target: n.target,
    class: R([r.class, "ux-link"])
  }, {
    default: m(() => [
      W(e.$slots, "default", {}, void 0, !0)
    ]),
    _: 3
  }, 8, ["onClick", "to", "href", "target", "class"]);
}
const yy = /* @__PURE__ */ V(hy, [["render", py], ["__scopeId", "data-v-c91c7a6c"]]);
const _y = {
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
      var e = [];
      return e.push(this.icon), this.spin && e.push("fa-spin"), this.left && e.push("ux-icon-left"), this.right && e.push("ux-icon-right"), e;
    },
    element() {
      return "i";
    }
  }
};
function gy(e, t, n, i, s, r) {
  return o(), k(gt(r.element), {
    class: R(["ux-icon fa", r.classes])
  }, null, 8, ["class"]);
}
const vy = /* @__PURE__ */ V(_y, [["render", gy], ["__scopeId", "data-v-dd53ba4e"]]), Hn = {
  cache: {}
};
const by = {
  props: {
    group: {
      type: String
    },
    right: {
      type: Boolean,
      default: !1
    },
    bottom: {
      type: Boolean,
      default: !1
    },
    stop: {
      type: Boolean,
      default: !1
    },
    closeOnClick: {
      type: Boolean,
      default() {
        return !0;
      }
    },
    modelValue: {
      type: Boolean,
      default() {
        return !1;
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
      mounted: !1
    };
  },
  watch: {
    modelValue(e) {
      this.expanded = e;
    }
  },
  mounted() {
    this.refMenu = this.$refs.menu, this.mounted = !0;
  },
  beforeUnmount() {
    this.removeListeners(), this.refMenu = null, this.mounted = !1, Hn.cache[this.group] === this && (Hn.cache[this.group] = null);
  },
  methods: {
    removeListeners() {
      document.removeEventListener("click", this.globalClick), this.refMenu && this.refMenu.removeEventListener("click", this.immediateClick);
    },
    addEventListeners() {
      document.addEventListener("click", this.globalClick), this.refMenu && this.refMenu.addEventListener("click", this.immediateClick);
    },
    immediateClick(e) {
      this.expanded && this.closeOnClick && (e.stopImmediatePropagation(), this.expanded = !1);
    },
    globalClick(e) {
      if (this.triggerEvent !== e) {
        var t = this.$refs.menu, n = e.srcElement;
        t && t.contains(n) ? this.closeOnClick && (this.expanded = !1) : this.expanded = !1;
      }
    },
    position() {
      const e = this.$el.getBoundingClientRect();
      this.outerStyle.left = `${e.left + window.scrollX}px`, this.outerStyle.top = `${e.bottom + window.scrollY}px`, this.right && (this.innerStyle.right = `-${e.width}px`), this.bottom && (this.innerStyle.bottom = `${e.height}px`);
      var t = this.getMaxZIndex();
      this.outerStyle.zIndex = t;
    },
    getMaxZIndex() {
      return Math.max(
        ...Array.from(
          document.querySelectorAll("body *"),
          (e) => parseFloat(window.getComputedStyle(e).zIndex)
        ).filter((e) => !Number.isNaN(e)),
        0
      );
    },
    close() {
      this.expanded = !1;
    }
  },
  computed: {
    // isInViewport() {
    //     var element = this.$refs.menu;
    //     if(!element) {
    //         return false;
    //     }
    //     const rect = element.getBoundingClientRect();
    //     return (
    //         rect.top >= 0 &&
    //         rect.left >= 0 &&
    //         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    //         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    //     );
    // },
    expanded: {
      get() {
        return this.isExpanded;
      },
      set(e) {
        var t;
        this.group && (t = Hn.cache[this.group]), this.isExpanded != e && (this.isExpanded = e, e ? (this.position(), this.addEventListeners(), Hn.cache[this.group] = this, t && t != this && (t.expanded = !1)) : this.removeListeners(), this.$emit("update:modelValue", e));
      }
    },
    on() {
      var e = this;
      return {
        click(t) {
          e.stop && t.stopImmediatePropagation(), e.triggerEvent = t, e.expanded = !e.expanded;
        }
      };
    }
  }
};
function ky(e, t, n, i, s, r) {
  return o(), d("div", {
    class: R(["ux-menu", { right: n.right }])
  }, [
    x("span", null, [
      W(e.$slots, "activator", { on: r.on }, void 0, !0)
    ]),
    (o(), k(uo, { to: "body" }, [
      s.isExpanded ? (o(), d("div", {
        key: 0,
        class: "ux-menu-outer",
        style: vt(s.outerStyle)
      }, [
        x("div", {
          class: "ux-menu-panel",
          ref: "menu",
          style: vt(s.innerStyle)
        }, [
          W(e.$slots, "default", {}, void 0, !0)
        ], 4)
      ], 4)) : _("", !0)
    ]))
  ], 2);
}
const xy = /* @__PURE__ */ V(by, [["render", ky], ["__scopeId", "data-v-db935124"]]), wy = {
  name: "menulist",
  props: {
    items: {
      type: Array,
      default() {
        return [];
      }
    },
    expandOn: {
      type: String,
      default: "none"
    }
  },
  computed: {
    filteredItems() {
      return this.items.filter(function(e) {
        return !e.disabled;
      });
    }
  },
  methods: {
    toggle(e) {
      e.expanded = !e.expanded, e.collapsed = !e.expanded;
    }
  },
  data() {
    return {};
  }
};
function Sy(e, t, n, i, s, r) {
  const l = y("ux-link"), a = y("menulist", !0);
  return o(), d("ul", null, [
    (o(!0), d(w, null, L(r.filteredItems, (u) => {
      var c;
      return o(), d("li", {
        class: R({ expanded: u.expanded, collapsed: u.collapsed })
      }, [
        n.expandOn === "click" && ((c = u.items) != null && c.length) ? (o(), k(l, {
          key: 0,
          onClick: G((f) => r.toggle(u), ["stop", "prevent"]),
          class: R(u.class)
        }, {
          default: m(() => [
            S(b(u.title), 1)
          ]),
          _: 2
        }, 1032, ["onClick", "class"])) : (o(), d(w, { key: 1 }, [
          u.type === "url" ? (o(), k(l, {
            key: 0,
            class: R(u.class),
            target: u.target,
            href: u.href || u.url
          }, {
            default: m(() => [
              S(b(u.title), 1)
            ]),
            _: 2
          }, 1032, ["class", "target", "href"])) : u.type === "route" ? (o(), k(l, {
            key: 1,
            class: R(u.class),
            to: { name: u.route }
          }, {
            default: m(() => [
              S(b(u.title), 1)
            ]),
            _: 2
          }, 1032, ["class", "to"])) : _("", !0)
        ], 64)),
        u.items && u.items.length ? (o(), k(a, {
          key: 2,
          items: u.items
        }, null, 8, ["items"])) : _("", !0)
      ], 2);
    }), 256))
  ]);
}
const Ty = /* @__PURE__ */ V(wy, [["render", Sy]]);
const Oy = {
  props: {
    item: {
      type: [Object, String]
    },
    alt: {
      type: String
    },
    width: {
      type: [Number, String]
    },
    height: {
      type: [Number, String]
    },
    inline: {
      type: Boolean
    },
    quality: {
      type: [Number, String]
    },
    contain: {
      type: Boolean,
      default: !0
    },
    preview: {
      type: Boolean,
      default: !1
    },
    crop: {
      type: Boolean
    },
    format: {
      type: String
    },
    upscale: {
      type: Boolean,
      default: !0
    },
    type: {
      type: String,
      default: "image"
    },
    svg: {
      type: Boolean
    }
  },
  data() {
    return {
      model: this.item
    };
  },
  computed: {
    altText() {
      return this.alt || this.model.title;
    },
    className() {
      var e = [];
      return this.portrait && e.push("img-portrait"), e.join(" ");
    },
    isSvg() {
      var e;
      if (this.svg)
        return !0;
      switch ((e = this.item) == null ? void 0 : e.fileMime) {
        case "image/svg+xml":
        case "image/svg":
          return !0;
      }
    },
    portrait() {
      return this.crop ? this.dimensionHeight > this.dimensionWidth : this.modelHeight > this.modelWidth;
    },
    imageWidth() {
      return parseInt(this.width);
    },
    imageHeight() {
      return parseInt(this.height);
    },
    modelWidth() {
      var e;
      return parseInt((e = this.model) == null ? void 0 : e.width);
    },
    modelHeight() {
      var e;
      return parseInt((e = this.model) == null ? void 0 : e.height);
    },
    id() {
      return this.$sdk.utils.id(this.model);
    },
    params() {
      var e = {};
      return e.access_token = this.$sdk.auth.getCurrentToken(), this.imageWidth && (e.w = this.imageWidth ? this.imageWidth : null), this.imageHeight && (e.h = this.imageHeight ? this.imageHeight : null), this.crop ? e.c = !0 : this.contain || (e.c = this.imageWidth && this.imageHeight), this.quality && (e.q = parseInt(this.quality)), this.upscale && (e.u = !0), this.format && (e.f = this.format), e;
    },
    src() {
      const e = "image";
      return this.$sdk.api.generateEndpointURL(`/${e}/${this.id}`, this.params, { file: !0 });
    },
    previewSrc() {
      var e = Object.assign({}, this.params);
      e.w = 50, delete e.h;
      const t = "image";
      return this.$sdk.api.generateEndpointURL(`/${t}/${this.id}`, e, { file: !0 });
    },
    imageStyle() {
      var e = {};
      return this.crop || (e["object-fit"] = "contain"), this.inline ? e.maxWidth = "100%" : (e.width = "100%", e.height = "100%", e.top = "0", e.left = "0", e.position = "absolute"), e;
    },
    dimensionWidth() {
      return this.imageWidth && this.imageHeight ? this.imageWidth : this.modelWidth;
    },
    dimensionHeight() {
      return this.imageWidth && this.imageHeight ? this.imageHeight : this.modelHeight;
    },
    style() {
      var n, i, s;
      var e = {};
      this.inline ? e.display = "inline-block" : this.dimensionHeight && this.dimensionWidth && (e.height = 0, e.overflow = "hidden", e.paddingBottom = `${this.dimensionHeight / this.dimensionWidth * 100}%`, e.position = "relative");
      var t = (s = (i = (n = this.model) == null ? void 0 : n.fileMeta) == null ? void 0 : i.colors) == null ? void 0 : s.colors;
      return t && t.length && (e.backgroundColor = t[0]), this.isSvg || this.preview && (e.backgroundImage = `url(${this.previewSrc})`), e;
    }
  }
}, Vy = ["alt", "data"], Ay = ["alt", "src"];
function Cy(e, t, n, i, s, r) {
  return o(), d("div", {
    class: R(["ux-image", r.className]),
    style: vt(r.style)
  }, [
    n.svg ? (o(), d("object", {
      key: 0,
      alt: r.altText,
      type: "image/svg+xml",
      data: r.src
    }, null, 8, Vy)) : (o(), d("img", {
      key: 1,
      alt: r.altText,
      style: vt(r.imageStyle),
      src: r.src
    }, null, 12, Ay))
  ], 6);
}
const Ey = /* @__PURE__ */ V(Oy, [["render", Cy], ["__scopeId", "data-v-85d2d536"]]);
const My = {
  props: {
    item: {
      type: [Object, String]
    },
    width: {
      type: [Number, String]
    },
    height: {
      type: [Number, String]
    },
    controls: {
      type: Boolean,
      default: !0
    }
  },
  data() {
    return {
      model: this.item
    };
  },
  computed: {
    mediaType() {
      var e;
      return ((e = this.model) == null ? void 0 : e.mediaIntegrationType) || "upload";
    },
    mimetype() {
      var e;
      return ((e = this.model) == null ? void 0 : e.fileMime) || "video/mp4";
    },
    actualWidth() {
      return parseInt(this.width) || this.modelWidth || 1920;
    },
    actualHeight() {
      return parseInt(this.height) || this.modelHeight || 1080;
    },
    className() {
      var e = [];
      return this.portrait && e.push("video-portrait"), e.push(`video-type-${this.mediaType}`), e.join(" ");
    },
    portrait() {
      return this.actualHeight > this.actualWidth;
    },
    modelWidth() {
      var e;
      return parseInt(((e = this.model) == null ? void 0 : e.width) || 0);
    },
    modelHeight() {
      var e;
      return parseInt(((e = this.model) == null ? void 0 : e.height) || 0);
    },
    id() {
      return this.$sdk.utils.id(this.model);
    },
    params() {
      var e = {};
      return e.access_token = this.$sdk.auth.getCurrentToken(), e;
    },
    src() {
      return this.$sdk.api.generateEndpointURL(`/video/${this.id}`, this.params, { file: !0 });
    },
    thumbnailSrc() {
      var e = Object.assign({}, this.params);
      return e.w = this.actualWidth, e.h = this.actualHeight, delete e.h, this.$sdk.api.generateEndpointURL(`/image/${this.id}`, e, { file: !0 });
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
      var e = {};
      return e;
    }
  }
}, Iy = { class: "ux-video-embed-upload" }, Dy = ["width", "height", "controls"], Fy = ["src", "type"];
function $y(e, t, n, i, s, r) {
  return o(), d("div", {
    class: R(["ux-video", r.className]),
    style: vt(r.style)
  }, [
    x("div", Iy, [
      x("video", {
        width: r.actualWidth,
        height: r.actualHeight,
        controls: n.controls
      }, [
        x("source", {
          src: r.src,
          type: r.mimetype
        }, null, 8, Fy),
        S(" Your browser does not support the video tag. ")
      ], 8, Dy)
    ])
  ], 6);
}
const Ny = /* @__PURE__ */ V(My, [["render", $y], ["__scopeId", "data-v-ba1469f2"]]);
const Ly = {
  props: {
    value: {
      type: Number
    }
  },
  computed: {
    classes() {
      var e = [];
      return e.push(this.icon), this.spin && e.push("fa-spin"), this.left && e.push("ux-icon-left"), this.right && e.push("ux-icon-right"), e;
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
}, Py = (e) => (bt("data-v-d56ad6e1"), e = e(), kt(), e), Uy = { class: "ux-progress" }, jy = /* @__PURE__ */ Py(() => /* @__PURE__ */ x("div", { class: "ux-progress-bg" }, null, -1));
function Ry(e, t, n, i, s, r) {
  return o(), d("div", Uy, [
    jy,
    x("div", {
      class: "ux-progress-fg",
      style: vt(r.barStyle)
    }, null, 4)
  ]);
}
const By = /* @__PURE__ */ V(Ly, [["render", Ry], ["__scopeId", "data-v-d56ad6e1"]]);
const zy = {}, Hy = { class: "ux-list" };
function qy(e, t) {
  return o(), d("ul", Hy, [
    W(e.$slots, "default", {}, void 0, !0)
  ]);
}
const Gy = /* @__PURE__ */ V(zy, [["render", qy], ["__scopeId", "data-v-98a2be3e"]]);
const Wy = {}, Zy = { class: "ux-list-item" };
function Ky(e, t, n, i, s, r) {
  return o(), d("div", Zy, [
    W(e.$slots, "default", {}, void 0, !0)
  ]);
}
const Yy = /* @__PURE__ */ V(Wy, [["render", Ky], ["__scopeId", "data-v-b236c379"]]);
function fn(e) {
  var t = new Date(e);
  if (t instanceof Date && !isNaN(t))
    return t;
}
const Jy = {
  props: {
    modelValue: {
      type: Object
    }
  },
  data() {
    return {
      model: this.modelValue
    };
  },
  computed: {
    startDate: {
      get() {
        var e;
        return (e = fn(this.model.startDate)) == null ? void 0 : e.toISOString().slice(0, 10);
      },
      set(e) {
        e = fn(e), e ? this.model.startDate = e : this.model.startDate = void 0;
      }
    },
    endDate: {
      get() {
        var e;
        return (e = fn(this.model.endDate)) == null ? void 0 : e.toISOString().slice(0, 10);
      },
      set(e) {
        e = fn(e), fn(e) ? this.model.endDate = e : this.model.endDate = void 0;
      }
    }
  },
  watch: {
    model(e) {
      this.$emit("updated:modelValue", e);
    },
    modelValue(e) {
      this.model = e;
    }
  }
}, oa = (e) => (bt("data-v-dc53841d"), e = e(), kt(), e), Xy = /* @__PURE__ */ oa(() => /* @__PURE__ */ x("label", null, "From Date", -1)), Qy = /* @__PURE__ */ oa(() => /* @__PURE__ */ x("label", null, "To Date", -1));
function e_(e, t, n, i, s, r) {
  const l = y("flex-cell"), a = y("flex-row");
  return o(), d("div", null, [
    h(a, {
      wrap: "",
      gap: "",
      vcenter: ""
    }, {
      default: m(() => [
        h(l, { class: "cell" }, {
          default: m(() => [
            x("div", null, [
              Xy,
              Y(x("input", {
                type: "date",
                class: "ux-field-focus ux-text-input-multiple",
                ref: "input",
                "onUpdate:modelValue": t[0] || (t[0] = (u) => r.startDate = u)
              }, null, 512), [
                [ge, r.startDate]
              ])
            ])
          ]),
          _: 1
        }),
        h(l, { class: "cell" }, {
          default: m(() => [
            x("div", null, [
              Qy,
              Y(x("input", {
                type: "date",
                class: "ux-field-focus ux-text-input-multiple",
                ref: "input",
                "onUpdate:modelValue": t[1] || (t[1] = (u) => r.endDate = u)
              }, null, 512), [
                [ge, r.endDate]
              ])
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    })
  ]);
}
const t_ = /* @__PURE__ */ V(Jy, [["render", e_], ["__scopeId", "data-v-dc53841d"]]);
const n_ = {
  props: {
    modelValue: {
      type: [Object, Array]
    }
  },
  components: {
    NativeSelect: $t
  },
  mixins: [ie],
  async created() {
    var e = await this.$sdk.system.countries(), t = e.reduce(function(n, i) {
      if (!i.countryCallingCodes || !i.countryCallingCodes.length)
        return n;
      var s = `${i.name} (${i.countryCallingCodes.join(", ")})`, r = s;
      return n.values[r] || (n.values[r] = !0, n.lookup[i.alpha2] = i, n.value.push({
        title: `${s} - ${i.emoji}`,
        value: i.alpha2,
        emoji: i.emoji
      })), n;
    }, {
      value: [],
      values: {},
      lookup: {}
    });
    this.countryCodes = t.value, this.lookup = t.lookup;
  },
  data() {
    return {
      countryCodes: [],
      lookup: {}
    };
  },
  computed: {
    actualPlaceholder() {
      return "+61 000 000 000";
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
      var e = this.user ? this.user.countryCode : "", t = this.user && this.user.organisation ? this.user.organisation.countryCode : "";
      return e || t;
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
}, r_ = (e) => (bt("data-v-d61960a4"), e = e(), kt(), e), i_ = {
  key: 0,
  class: "ux-field-title"
}, s_ = {
  key: 0,
  class: "ux-required-marker"
}, l_ = {
  key: 1,
  class: "ux-field-description"
}, a_ = { key: 2 }, o_ = { key: 0 }, u_ = { key: 1 }, d_ = { class: "ux-text-wrap" }, c_ = ["placeholder", "onUpdate:modelValue"], f_ = /* @__PURE__ */ r_(() => /* @__PURE__ */ x("option", { value: "" }, "None", -1)), m_ = ["value"], h_ = { class: "ux-text-wrap" }, p_ = ["placeholder"];
function y_(e, t, n, i, s, r) {
  const l = y("ux-button"), a = y("native-select"), u = y("flex-cell"), c = y("ux-icon"), f = y("flex-row");
  return o(), d(w, null, [
    e.showLabel ? (o(), d("label", i_, [
      S(b(e.label) + " ", 1),
      e.required ? (o(), d("span", s_, "*")) : _("", !0)
    ])) : _("", !0),
    e.showDescription ? (o(), d("div", l_, b(e.description), 1)) : _("", !0),
    e.multiValue ? (o(), d("div", a_, [
      (o(!0), d(w, null, L(e.model, (p, g) => (o(), k(f, {
        gap: "",
        vcenter: "",
        wrap: "",
        class: "ux-text-row",
        key: g
      }, {
        default: m(() => [
          h(u, { shrink: "" }, {
            default: m(() => [
              h(a, {
                modelValue: p.countryCode,
                "onUpdate:modelValue": (v) => p.countryCode = v,
                field: r.countryCodeField
              }, {
                default: m(() => [
                  h(l, { tag: "a" }, {
                    default: m(() => [
                      p.countryCode ? (o(), d(w, { key: 1 }, [
                        s.lookup[p.countryCode] ? (o(), d("div", o_, b(s.lookup[p.countryCode].emoji) + " - " + b(s.lookup[p.countryCode].alpha2), 1)) : (o(), d("div", u_, "Loading"))
                      ], 64)) : (o(), d(w, { key: 0 }, [
                        S(" Country Code ")
                      ], 64))
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1032, ["modelValue", "onUpdate:modelValue", "field"])
            ]),
            _: 2
          }, 1024),
          h(u, null, {
            default: m(() => [
              x("div", d_, [
                Y(x("input", {
                  class: "ux-field-focus ux-text-input-multiple",
                  placeholder: r.actualPlaceholder,
                  onFocus: t[0] || (t[0] = (...v) => e.touch && e.touch(...v)),
                  ref_for: !0,
                  ref: "input",
                  onKeydown: t[1] || (t[1] = ve(G((v) => e.add(), ["stop", "prevent"]), ["enter"])),
                  "onUpdate:modelValue": (v) => p.number = v
                }, null, 40, c_), [
                  [ge, p.number]
                ])
              ])
            ]),
            _: 2
          }, 1024),
          h(u, {
            shrink: "",
            vcenter: ""
          }, {
            default: m(() => [
              e.canRemoveValue ? (o(), k(l, {
                key: 0,
                tag: "a",
                icon: "",
                onClick: (v) => e.remove(p)
              }, {
                default: m(() => [
                  h(c, { icon: "fa-times" })
                ]),
                _: 2
              }, 1032, ["onClick"])) : _("", !0)
            ]),
            _: 2
          }, 1024)
        ]),
        _: 2
      }, 1024))), 128)),
      e.canAddValue ? (o(), k(l, {
        key: 0,
        onClick: t[2] || (t[2] = (p) => e.add())
      }, {
        default: m(() => [
          S(b(e.addLabel) + " ", 1),
          h(c, {
            icon: "fa-plus",
            right: ""
          })
        ]),
        _: 1
      })) : _("", !0)
    ])) : (o(), k(f, {
      wrap: "",
      class: "ux-text-row",
      key: e.index
    }, {
      default: m(() => [
        h(u, { shrink: "" }, {
          default: m(() => [
            Y(x("select", {
              class: "ux-country-code-select",
              "onUpdate:modelValue": t[3] || (t[3] = (p) => e.model.countryCode = p)
            }, [
              f_,
              (o(!0), d(w, null, L(s.countryCodes, (p) => (o(), d("option", {
                value: p.value
              }, b(p.title), 9, m_))), 256))
            ], 512), [
              [Mt, e.model.countryCode]
            ])
          ]),
          _: 1
        }),
        h(u, null, {
          default: m(() => [
            x("div", h_, [
              Y(x("input", {
                class: "ux-field-focus ux-text-input-multiple",
                placeholder: r.actualPlaceholder,
                onFocus: t[4] || (t[4] = (...p) => e.touch && e.touch(...p)),
                ref: "input",
                onKeydown: t[5] || (t[5] = ve(G((p) => e.add(), ["stop", "prevent"]), ["enter"])),
                "onUpdate:modelValue": t[6] || (t[6] = (p) => e.model.number = p)
              }, null, 40, p_), [
                [ge, e.model.number]
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
const __ = /* @__PURE__ */ V(n_, [["render", y_], ["__scopeId", "data-v-d61960a4"]]);
function g_(e) {
  return e === void 0 || typeof e > "u" || e === null || String(e) === "null" || String(e) === "undefined";
}
const v_ = {
  props: {
    modelValue: {
      // type: [Object, Array],
    }
  },
  mixins: [ie],
  created() {
    this.model = this.model;
  },
  methods: {
    cleanOutput(e) {
      var t = this;
      return g_(e) ? t.multiValue ? e = [] : e = void 0 : t.multiValue ? e = (e || []).filter(Boolean).map(function(n) {
        return t.getValue(n);
      }) : e = t.getValue(e), e;
    },
    cleanInput(e) {
      var t = this;
      if (t.multiValue)
        e || (e = []), Array.isArray(e) || (e = [e]), t.maximum && e.length > t.maximum && (e.length = t.maximum), e = e.filter(Boolean).map(function(i) {
          var s = t.getValue(i);
          return t.returnObject ? t.optionLookup[s] : s;
        });
      else {
        var n = t.getValue(e);
        e = t.returnObject ? t.optionLookup[n] : n;
      }
      return e;
    }
  },
  computed: {
    returnObject() {
      return this.type == "reference";
    },
    classes() {
      var e = [];
      return this.multiValue ? e.push("multiple") : e.push("single"), e;
    },
    // model: {
    //     get() {
    //         let val = this.cleanOutput(this.value);
    //         return val;
    //     },
    //     set(val) {
    //         val = this.cleanInput(val);
    //         // // var val = this.cleanOutput(newValue);
    //         // // var existing = this.cleanOutput(this.value);
    //         // if (newValue != existing) {
    //         //     newValue = this.cleanInput(val);
    //         //     this.value = newValue;
    //         //     this.dispatch();
    //         // }
    //         this.value = val;
    //         this.dispatch();
    //     }
    // },
    optionLookup() {
      var e = this;
      return e.options.reduce(function(t, n) {
        const i = e.getValue(n);
        return t[i] = n, t;
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
      ].map(function(e) {
        return {
          title: e,
          value: e
        };
      });
    },
    selectableOptions() {
      return this.options;
    }
  }
}, b_ = {
  key: 0,
  class: "ux-field-title"
}, k_ = {
  key: 0,
  class: "ux-required-marker"
}, x_ = {
  key: 1,
  class: "ux-field-description"
}, w_ = {
  key: 2,
  class: "ui-select-button"
}, S_ = ["multiple"], T_ = {
  key: 0,
  value: ""
}, O_ = ["value"];
function V_(e, t, n, i, s, r) {
  const l = y("ux-button");
  return o(), d("div", {
    class: R(["native-select", r.classes])
  }, [
    e.showLabel ? (o(), d("label", b_, [
      S(b(e.label) + " ", 1),
      e.required ? (o(), d("span", k_, "*")) : _("", !0)
    ])) : _("", !0),
    e.showDescription ? (o(), d("div", x_, b(e.description), 1)) : _("", !0),
    e.singleValue ? (o(), d("div", w_, [
      W(e.$slots, "default", {}, () => [
        h(l, { tag: "div" }, {
          default: m(() => [
            S(b(r.summary), 1)
          ]),
          _: 1
        })
      ], !0)
    ])) : _("", !0),
    Y(x("select", {
      onFocus: t[0] || (t[0] = (...a) => e.touch && e.touch(...a)),
      multiple: e.multiValue,
      "onUpdate:modelValue": t[1] || (t[1] = (a) => e.model = a)
    }, [
      e.singleValue && !e.minimum ? (o(), d("option", T_, "None")) : _("", !0),
      (o(!0), d(w, null, L(r.selectableOptions, (a) => (o(), d("option", {
        value: a.value
      }, b(a.title), 9, O_))), 256))
    ], 40, S_), [
      [Mt, e.model]
    ])
  ], 2);
}
const A_ = /* @__PURE__ */ V(v_, [["render", V_], ["__scopeId", "data-v-dc886566"]]);
const C_ = {
  props: {
    item: {
      type: Object,
      required: !0
    }
  },
  computed: {
    basicType() {
      var e, t;
      return (t = (e = this.item) == null ? void 0 : e.meta) == null ? void 0 : t.type;
    },
    hasImage() {
      switch (this.basicType) {
        case "image":
        case "video":
        case "profile":
          return !0;
      }
    },
    title() {
      return this.item.title || this.item.name || this.item.label || (this.item.firstName ? `${this.item.firstName} ${this.item.lastName}` : "(Title unknown)");
    }
  },
  methods: {
    clicked() {
      this.$sdk.dispatch("item:view", this.item);
    }
  }
};
function E_(e, t, n, i, s, r) {
  const l = y("ux-image"), a = y("flex-cell"), u = y("flex-row");
  return o(), d("div", {
    class: "content-item",
    onClick: t[0] || (t[0] = (...c) => r.clicked && r.clicked(...c))
  }, [
    h(u, {
      gap: "",
      vcenter: ""
    }, {
      default: m(() => [
        r.hasImage ? (o(), k(a, {
          key: 0,
          shrink: ""
        }, {
          default: m(() => [
            x("div", {
              class: R(["image-wrapper", r.basicType])
            }, [
              h(l, {
                item: n.item,
                width: 100,
                height: 100
              }, null, 8, ["item"])
            ], 2)
          ]),
          _: 1
        })) : _("", !0),
        h(a, { vcenter: "" }, {
          default: m(() => [
            x("div", null, [
              W(e.$slots, "default", {}, () => [
                S(b(r.title), 1)
              ], !0)
            ])
          ]),
          _: 3
        }),
        h(a, { shrink: "" }, {
          default: m(() => [
            W(e.$slots, "actions", {}, void 0, !0)
          ]),
          _: 3
        })
      ]),
      _: 3
    })
  ]);
}
const ua = /* @__PURE__ */ V(C_, [["render", E_], ["__scopeId", "data-v-923011b3"]]);
/**!
 * Sortable 1.14.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function xs(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    t && (i = i.filter(function(s) {
      return Object.getOwnPropertyDescriptor(e, s).enumerable;
    })), n.push.apply(n, i);
  }
  return n;
}
function rt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? xs(Object(n), !0).forEach(function(i) {
      M_(e, i, n[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : xs(Object(n)).forEach(function(i) {
      Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(n, i));
    });
  }
  return e;
}
function Xn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Xn = function(t) {
    return typeof t;
  } : Xn = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Xn(e);
}
function M_(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function at() {
  return at = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }, at.apply(this, arguments);
}
function I_(e, t) {
  if (e == null)
    return {};
  var n = {}, i = Object.keys(e), s, r;
  for (r = 0; r < i.length; r++)
    s = i[r], !(t.indexOf(s) >= 0) && (n[s] = e[s]);
  return n;
}
function D_(e, t) {
  if (e == null)
    return {};
  var n = I_(e, t), i, s;
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    for (s = 0; s < r.length; s++)
      i = r[s], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (n[i] = e[i]);
  }
  return n;
}
var F_ = "1.14.0";
function st(e) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(e);
}
var ot = st(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), Mn = st(/Edge/i), ws = st(/firefox/i), bn = st(/safari/i) && !st(/chrome/i) && !st(/android/i), da = st(/iP(ad|od|hone)/i), $_ = st(/chrome/i) && st(/android/i), ca = {
  capture: !1,
  passive: !1
};
function te(e, t, n) {
  e.addEventListener(t, n, !ot && ca);
}
function J(e, t, n) {
  e.removeEventListener(t, n, !ot && ca);
}
function ur(e, t) {
  if (t) {
    if (t[0] === ">" && (t = t.substring(1)), e)
      try {
        if (e.matches)
          return e.matches(t);
        if (e.msMatchesSelector)
          return e.msMatchesSelector(t);
        if (e.webkitMatchesSelector)
          return e.webkitMatchesSelector(t);
      } catch {
        return !1;
      }
    return !1;
  }
}
function N_(e) {
  return e.host && e !== document && e.host.nodeType ? e.host : e.parentNode;
}
function tt(e, t, n, i) {
  if (e) {
    n = n || document;
    do {
      if (t != null && (t[0] === ">" ? e.parentNode === n && ur(e, t) : ur(e, t)) || i && e === n)
        return e;
      if (e === n)
        break;
    } while (e = N_(e));
  }
  return null;
}
var Ss = /\s+/g;
function Pe(e, t, n) {
  if (e && t)
    if (e.classList)
      e.classList[n ? "add" : "remove"](t);
    else {
      var i = (" " + e.className + " ").replace(Ss, " ").replace(" " + t + " ", " ");
      e.className = (i + (n ? " " + t : "")).replace(Ss, " ");
    }
}
function P(e, t, n) {
  var i = e && e.style;
  if (i) {
    if (n === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? n = document.defaultView.getComputedStyle(e, "") : e.currentStyle && (n = e.currentStyle), t === void 0 ? n : n[t];
    !(t in i) && t.indexOf("webkit") === -1 && (t = "-webkit-" + t), i[t] = n + (typeof n == "string" ? "" : "px");
  }
}
function Wt(e, t) {
  var n = "";
  if (typeof e == "string")
    n = e;
  else
    do {
      var i = P(e, "transform");
      i && i !== "none" && (n = i + " " + n);
    } while (!t && (e = e.parentNode));
  var s = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return s && new s(n);
}
function fa(e, t, n) {
  if (e) {
    var i = e.getElementsByTagName(t), s = 0, r = i.length;
    if (n)
      for (; s < r; s++)
        n(i[s], s);
    return i;
  }
  return [];
}
function nt() {
  var e = document.scrollingElement;
  return e || document.documentElement;
}
function be(e, t, n, i, s) {
  if (!(!e.getBoundingClientRect && e !== window)) {
    var r, l, a, u, c, f, p;
    if (e !== window && e.parentNode && e !== nt() ? (r = e.getBoundingClientRect(), l = r.top, a = r.left, u = r.bottom, c = r.right, f = r.height, p = r.width) : (l = 0, a = 0, u = window.innerHeight, c = window.innerWidth, f = window.innerHeight, p = window.innerWidth), (t || n) && e !== window && (s = s || e.parentNode, !ot))
      do
        if (s && s.getBoundingClientRect && (P(s, "transform") !== "none" || n && P(s, "position") !== "static")) {
          var g = s.getBoundingClientRect();
          l -= g.top + parseInt(P(s, "border-top-width")), a -= g.left + parseInt(P(s, "border-left-width")), u = l + r.height, c = a + r.width;
          break;
        }
      while (s = s.parentNode);
    if (i && e !== window) {
      var v = Wt(s || e), T = v && v.a, A = v && v.d;
      v && (l /= A, a /= T, p /= T, f /= A, u = l + f, c = a + p);
    }
    return {
      top: l,
      left: a,
      bottom: u,
      right: c,
      width: p,
      height: f
    };
  }
}
function Ts(e, t, n) {
  for (var i = _t(e, !0), s = be(e)[t]; i; ) {
    var r = be(i)[n], l = void 0;
    if (n === "top" || n === "left" ? l = s >= r : l = s <= r, !l)
      return i;
    if (i === nt())
      break;
    i = _t(i, !1);
  }
  return !1;
}
function Yt(e, t, n, i) {
  for (var s = 0, r = 0, l = e.children; r < l.length; ) {
    if (l[r].style.display !== "none" && l[r] !== U.ghost && (i || l[r] !== U.dragged) && tt(l[r], n.draggable, e, !1)) {
      if (s === t)
        return l[r];
      s++;
    }
    r++;
  }
  return null;
}
function Ci(e, t) {
  for (var n = e.lastElementChild; n && (n === U.ghost || P(n, "display") === "none" || t && !ur(n, t)); )
    n = n.previousElementSibling;
  return n || null;
}
function ze(e, t) {
  var n = 0;
  if (!e || !e.parentNode)
    return -1;
  for (; e = e.previousElementSibling; )
    e.nodeName.toUpperCase() !== "TEMPLATE" && e !== U.clone && (!t || ur(e, t)) && n++;
  return n;
}
function Os(e) {
  var t = 0, n = 0, i = nt();
  if (e)
    do {
      var s = Wt(e), r = s.a, l = s.d;
      t += e.scrollLeft * r, n += e.scrollTop * l;
    } while (e !== i && (e = e.parentNode));
  return [t, n];
}
function L_(e, t) {
  for (var n in e)
    if (e.hasOwnProperty(n)) {
      for (var i in t)
        if (t.hasOwnProperty(i) && t[i] === e[n][i])
          return Number(n);
    }
  return -1;
}
function _t(e, t) {
  if (!e || !e.getBoundingClientRect)
    return nt();
  var n = e, i = !1;
  do
    if (n.clientWidth < n.scrollWidth || n.clientHeight < n.scrollHeight) {
      var s = P(n);
      if (n.clientWidth < n.scrollWidth && (s.overflowX == "auto" || s.overflowX == "scroll") || n.clientHeight < n.scrollHeight && (s.overflowY == "auto" || s.overflowY == "scroll")) {
        if (!n.getBoundingClientRect || n === document.body)
          return nt();
        if (i || t)
          return n;
        i = !0;
      }
    }
  while (n = n.parentNode);
  return nt();
}
function P_(e, t) {
  if (e && t)
    for (var n in t)
      t.hasOwnProperty(n) && (e[n] = t[n]);
  return e;
}
function Pr(e, t) {
  return Math.round(e.top) === Math.round(t.top) && Math.round(e.left) === Math.round(t.left) && Math.round(e.height) === Math.round(t.height) && Math.round(e.width) === Math.round(t.width);
}
var kn;
function ma(e, t) {
  return function() {
    if (!kn) {
      var n = arguments, i = this;
      n.length === 1 ? e.call(i, n[0]) : e.apply(i, n), kn = setTimeout(function() {
        kn = void 0;
      }, t);
    }
  };
}
function U_() {
  clearTimeout(kn), kn = void 0;
}
function ha(e, t, n) {
  e.scrollLeft += t, e.scrollTop += n;
}
function pa(e) {
  var t = window.Polymer, n = window.jQuery || window.Zepto;
  return t && t.dom ? t.dom(e).cloneNode(!0) : n ? n(e).clone(!0)[0] : e.cloneNode(!0);
}
var je = "Sortable" + new Date().getTime();
function j_() {
  var e = [], t;
  return {
    captureAnimationState: function() {
      if (e = [], !!this.options.animation) {
        var i = [].slice.call(this.el.children);
        i.forEach(function(s) {
          if (!(P(s, "display") === "none" || s === U.ghost)) {
            e.push({
              target: s,
              rect: be(s)
            });
            var r = rt({}, e[e.length - 1].rect);
            if (s.thisAnimationDuration) {
              var l = Wt(s, !0);
              l && (r.top -= l.f, r.left -= l.e);
            }
            s.fromRect = r;
          }
        });
      }
    },
    addAnimationState: function(i) {
      e.push(i);
    },
    removeAnimationState: function(i) {
      e.splice(L_(e, {
        target: i
      }), 1);
    },
    animateAll: function(i) {
      var s = this;
      if (!this.options.animation) {
        clearTimeout(t), typeof i == "function" && i();
        return;
      }
      var r = !1, l = 0;
      e.forEach(function(a) {
        var u = 0, c = a.target, f = c.fromRect, p = be(c), g = c.prevFromRect, v = c.prevToRect, T = a.rect, A = Wt(c, !0);
        A && (p.top -= A.f, p.left -= A.e), c.toRect = p, c.thisAnimationDuration && Pr(g, p) && !Pr(f, p) && // Make sure animatingRect is on line between toRect & fromRect
        (T.top - p.top) / (T.left - p.left) === (f.top - p.top) / (f.left - p.left) && (u = B_(T, g, v, s.options)), Pr(p, f) || (c.prevFromRect = f, c.prevToRect = p, u || (u = s.options.animation), s.animate(c, T, p, u)), u && (r = !0, l = Math.max(l, u), clearTimeout(c.animationResetTimer), c.animationResetTimer = setTimeout(function() {
          c.animationTime = 0, c.prevFromRect = null, c.fromRect = null, c.prevToRect = null, c.thisAnimationDuration = null;
        }, u), c.thisAnimationDuration = u);
      }), clearTimeout(t), r ? t = setTimeout(function() {
        typeof i == "function" && i();
      }, l) : typeof i == "function" && i(), e = [];
    },
    animate: function(i, s, r, l) {
      if (l) {
        P(i, "transition", ""), P(i, "transform", "");
        var a = Wt(this.el), u = a && a.a, c = a && a.d, f = (s.left - r.left) / (u || 1), p = (s.top - r.top) / (c || 1);
        i.animatingX = !!f, i.animatingY = !!p, P(i, "transform", "translate3d(" + f + "px," + p + "px,0)"), this.forRepaintDummy = R_(i), P(i, "transition", "transform " + l + "ms" + (this.options.easing ? " " + this.options.easing : "")), P(i, "transform", "translate3d(0,0,0)"), typeof i.animated == "number" && clearTimeout(i.animated), i.animated = setTimeout(function() {
          P(i, "transition", ""), P(i, "transform", ""), i.animated = !1, i.animatingX = !1, i.animatingY = !1;
        }, l);
      }
    }
  };
}
function R_(e) {
  return e.offsetWidth;
}
function B_(e, t, n, i) {
  return Math.sqrt(Math.pow(t.top - e.top, 2) + Math.pow(t.left - e.left, 2)) / Math.sqrt(Math.pow(t.top - n.top, 2) + Math.pow(t.left - n.left, 2)) * i.animation;
}
var Rt = [], Ur = {
  initializeByDefault: !0
}, In = {
  mount: function(t) {
    for (var n in Ur)
      Ur.hasOwnProperty(n) && !(n in t) && (t[n] = Ur[n]);
    Rt.forEach(function(i) {
      if (i.pluginName === t.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(t.pluginName, " more than once");
    }), Rt.push(t);
  },
  pluginEvent: function(t, n, i) {
    var s = this;
    this.eventCanceled = !1, i.cancel = function() {
      s.eventCanceled = !0;
    };
    var r = t + "Global";
    Rt.forEach(function(l) {
      n[l.pluginName] && (n[l.pluginName][r] && n[l.pluginName][r](rt({
        sortable: n
      }, i)), n.options[l.pluginName] && n[l.pluginName][t] && n[l.pluginName][t](rt({
        sortable: n
      }, i)));
    });
  },
  initializePlugins: function(t, n, i, s) {
    Rt.forEach(function(a) {
      var u = a.pluginName;
      if (!(!t.options[u] && !a.initializeByDefault)) {
        var c = new a(t, n, t.options);
        c.sortable = t, c.options = t.options, t[u] = c, at(i, c.defaults);
      }
    });
    for (var r in t.options)
      if (t.options.hasOwnProperty(r)) {
        var l = this.modifyOption(t, r, t.options[r]);
        typeof l < "u" && (t.options[r] = l);
      }
  },
  getEventProperties: function(t, n) {
    var i = {};
    return Rt.forEach(function(s) {
      typeof s.eventProperties == "function" && at(i, s.eventProperties.call(n[s.pluginName], t));
    }), i;
  },
  modifyOption: function(t, n, i) {
    var s;
    return Rt.forEach(function(r) {
      t[r.pluginName] && r.optionListeners && typeof r.optionListeners[n] == "function" && (s = r.optionListeners[n].call(t[r.pluginName], i));
    }), s;
  }
};
function z_(e) {
  var t = e.sortable, n = e.rootEl, i = e.name, s = e.targetEl, r = e.cloneEl, l = e.toEl, a = e.fromEl, u = e.oldIndex, c = e.newIndex, f = e.oldDraggableIndex, p = e.newDraggableIndex, g = e.originalEvent, v = e.putSortable, T = e.extraEventProperties;
  if (t = t || n && n[je], !!t) {
    var A, E = t.options, q = "on" + i.charAt(0).toUpperCase() + i.substr(1);
    window.CustomEvent && !ot && !Mn ? A = new CustomEvent(i, {
      bubbles: !0,
      cancelable: !0
    }) : (A = document.createEvent("Event"), A.initEvent(i, !0, !0)), A.to = l || n, A.from = a || n, A.item = s || n, A.clone = r, A.oldIndex = u, A.newIndex = c, A.oldDraggableIndex = f, A.newDraggableIndex = p, A.originalEvent = g, A.pullMode = v ? v.lastPutMode : void 0;
    var Q = rt(rt({}, T), In.getEventProperties(i, t));
    for (var ne in Q)
      A[ne] = Q[ne];
    n && n.dispatchEvent(A), E[q] && E[q].call(t, A);
  }
}
var H_ = ["evt"], Ne = function(t, n) {
  var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, s = i.evt, r = D_(i, H_);
  In.pluginEvent.bind(U)(t, n, rt({
    dragEl: M,
    parentEl: fe,
    ghostEl: H,
    rootEl: de,
    nextEl: Ct,
    lastDownEl: Qn,
    cloneEl: me,
    cloneHidden: yt,
    dragStarted: yn,
    putSortable: we,
    activeSortable: U.active,
    originalEvent: s,
    oldIndex: qt,
    oldDraggableIndex: xn,
    newIndex: Ue,
    newDraggableIndex: ht,
    hideGhostForTarget: va,
    unhideGhostForTarget: ba,
    cloneNowHidden: function() {
      yt = !0;
    },
    cloneNowShown: function() {
      yt = !1;
    },
    dispatchSortableEvent: function(a) {
      Ie({
        sortable: n,
        name: a,
        originalEvent: s
      });
    }
  }, r));
};
function Ie(e) {
  z_(rt({
    putSortable: we,
    cloneEl: me,
    targetEl: M,
    rootEl: de,
    oldIndex: qt,
    oldDraggableIndex: xn,
    newIndex: Ue,
    newDraggableIndex: ht
  }, e));
}
var M, fe, H, de, Ct, Qn, me, yt, qt, Ue, xn, ht, qn, we, zt = !1, dr = !1, cr = [], Ot, Ke, jr, Rr, Vs, As, yn, Bt, wn, Sn = !1, Gn = !1, er, Ae, Br = [], di = !1, fr = [], Tr = typeof document < "u", Wn = da, Cs = Mn || ot ? "cssFloat" : "float", q_ = Tr && !$_ && !da && "draggable" in document.createElement("div"), ya = function() {
  if (Tr) {
    if (ot)
      return !1;
    var e = document.createElement("x");
    return e.style.cssText = "pointer-events:auto", e.style.pointerEvents === "auto";
  }
}(), _a = function(t, n) {
  var i = P(t), s = parseInt(i.width) - parseInt(i.paddingLeft) - parseInt(i.paddingRight) - parseInt(i.borderLeftWidth) - parseInt(i.borderRightWidth), r = Yt(t, 0, n), l = Yt(t, 1, n), a = r && P(r), u = l && P(l), c = a && parseInt(a.marginLeft) + parseInt(a.marginRight) + be(r).width, f = u && parseInt(u.marginLeft) + parseInt(u.marginRight) + be(l).width;
  if (i.display === "flex")
    return i.flexDirection === "column" || i.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (i.display === "grid")
    return i.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (r && a.float && a.float !== "none") {
    var p = a.float === "left" ? "left" : "right";
    return l && (u.clear === "both" || u.clear === p) ? "vertical" : "horizontal";
  }
  return r && (a.display === "block" || a.display === "flex" || a.display === "table" || a.display === "grid" || c >= s && i[Cs] === "none" || l && i[Cs] === "none" && c + f > s) ? "vertical" : "horizontal";
}, G_ = function(t, n, i) {
  var s = i ? t.left : t.top, r = i ? t.right : t.bottom, l = i ? t.width : t.height, a = i ? n.left : n.top, u = i ? n.right : n.bottom, c = i ? n.width : n.height;
  return s === a || r === u || s + l / 2 === a + c / 2;
}, W_ = function(t, n) {
  var i;
  return cr.some(function(s) {
    var r = s[je].options.emptyInsertThreshold;
    if (!(!r || Ci(s))) {
      var l = be(s), a = t >= l.left - r && t <= l.right + r, u = n >= l.top - r && n <= l.bottom + r;
      if (a && u)
        return i = s;
    }
  }), i;
}, ga = function(t) {
  function n(r, l) {
    return function(a, u, c, f) {
      var p = a.options.group.name && u.options.group.name && a.options.group.name === u.options.group.name;
      if (r == null && (l || p))
        return !0;
      if (r == null || r === !1)
        return !1;
      if (l && r === "clone")
        return r;
      if (typeof r == "function")
        return n(r(a, u, c, f), l)(a, u, c, f);
      var g = (l ? a : u).options.group.name;
      return r === !0 || typeof r == "string" && r === g || r.join && r.indexOf(g) > -1;
    };
  }
  var i = {}, s = t.group;
  (!s || Xn(s) != "object") && (s = {
    name: s
  }), i.name = s.name, i.checkPull = n(s.pull, !0), i.checkPut = n(s.put), i.revertClone = s.revertClone, t.group = i;
}, va = function() {
  !ya && H && P(H, "display", "none");
}, ba = function() {
  !ya && H && P(H, "display", "");
};
Tr && document.addEventListener("click", function(e) {
  if (dr)
    return e.preventDefault(), e.stopPropagation && e.stopPropagation(), e.stopImmediatePropagation && e.stopImmediatePropagation(), dr = !1, !1;
}, !0);
var Vt = function(t) {
  if (M) {
    t = t.touches ? t.touches[0] : t;
    var n = W_(t.clientX, t.clientY);
    if (n) {
      var i = {};
      for (var s in t)
        t.hasOwnProperty(s) && (i[s] = t[s]);
      i.target = i.rootEl = n, i.preventDefault = void 0, i.stopPropagation = void 0, n[je]._onDragOver(i);
    }
  }
}, Z_ = function(t) {
  M && M.parentNode[je]._isOutsideThisEl(t.target);
};
function U(e, t) {
  if (!(e && e.nodeType && e.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));
  this.el = e, this.options = t = at({}, t), e[je] = this;
  var n = {
    group: null,
    sort: !0,
    disabled: !1,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(e.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: !1,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: !0,
    direction: function() {
      return _a(e, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(l, a) {
      l.setData("Text", a.textContent);
    },
    dropBubble: !1,
    dragoverBubble: !1,
    dataIdAttr: "data-id",
    delay: 0,
    delayOnTouchOnly: !1,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: !1,
    fallbackClass: "sortable-fallback",
    fallbackOnBody: !1,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    supportPointer: U.supportPointer !== !1 && "PointerEvent" in window && !bn,
    emptyInsertThreshold: 5
  };
  In.initializePlugins(this, e, n);
  for (var i in n)
    !(i in t) && (t[i] = n[i]);
  ga(t);
  for (var s in this)
    s.charAt(0) === "_" && typeof this[s] == "function" && (this[s] = this[s].bind(this));
  this.nativeDraggable = t.forceFallback ? !1 : q_, this.nativeDraggable && (this.options.touchStartThreshold = 1), t.supportPointer ? te(e, "pointerdown", this._onTapStart) : (te(e, "mousedown", this._onTapStart), te(e, "touchstart", this._onTapStart)), this.nativeDraggable && (te(e, "dragover", this), te(e, "dragenter", this)), cr.push(this.el), t.store && t.store.get && this.sort(t.store.get(this) || []), at(this, j_());
}
U.prototype = /** @lends Sortable.prototype */
{
  constructor: U,
  _isOutsideThisEl: function(t) {
    !this.el.contains(t) && t !== this.el && (Bt = null);
  },
  _getDirection: function(t, n) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, t, n, M) : this.options.direction;
  },
  _onTapStart: function(t) {
    if (t.cancelable) {
      var n = this, i = this.el, s = this.options, r = s.preventOnFilter, l = t.type, a = t.touches && t.touches[0] || t.pointerType && t.pointerType === "touch" && t, u = (a || t).target, c = t.target.shadowRoot && (t.path && t.path[0] || t.composedPath && t.composedPath()[0]) || u, f = s.filter;
      if (ng(i), !M && !(/mousedown|pointerdown/.test(l) && t.button !== 0 || s.disabled) && !c.isContentEditable && !(!this.nativeDraggable && bn && u && u.tagName.toUpperCase() === "SELECT") && (u = tt(u, s.draggable, i, !1), !(u && u.animated) && Qn !== u)) {
        if (qt = ze(u), xn = ze(u, s.draggable), typeof f == "function") {
          if (f.call(this, t, u, this)) {
            Ie({
              sortable: n,
              rootEl: c,
              name: "filter",
              targetEl: u,
              toEl: i,
              fromEl: i
            }), Ne("filter", n, {
              evt: t
            }), r && t.cancelable && t.preventDefault();
            return;
          }
        } else if (f && (f = f.split(",").some(function(p) {
          if (p = tt(c, p.trim(), i, !1), p)
            return Ie({
              sortable: n,
              rootEl: p,
              name: "filter",
              targetEl: u,
              fromEl: i,
              toEl: i
            }), Ne("filter", n, {
              evt: t
            }), !0;
        }), f)) {
          r && t.cancelable && t.preventDefault();
          return;
        }
        s.handle && !tt(c, s.handle, i, !1) || this._prepareDragStart(t, a, u);
      }
    }
  },
  _prepareDragStart: function(t, n, i) {
    var s = this, r = s.el, l = s.options, a = r.ownerDocument, u;
    if (i && !M && i.parentNode === r) {
      var c = be(i);
      if (de = r, M = i, fe = M.parentNode, Ct = M.nextSibling, Qn = i, qn = l.group, U.dragged = M, Ot = {
        target: M,
        clientX: (n || t).clientX,
        clientY: (n || t).clientY
      }, Vs = Ot.clientX - c.left, As = Ot.clientY - c.top, this._lastX = (n || t).clientX, this._lastY = (n || t).clientY, M.style["will-change"] = "all", u = function() {
        if (Ne("delayEnded", s, {
          evt: t
        }), U.eventCanceled) {
          s._onDrop();
          return;
        }
        s._disableDelayedDragEvents(), !ws && s.nativeDraggable && (M.draggable = !0), s._triggerDragStart(t, n), Ie({
          sortable: s,
          name: "choose",
          originalEvent: t
        }), Pe(M, l.chosenClass, !0);
      }, l.ignore.split(",").forEach(function(f) {
        fa(M, f.trim(), zr);
      }), te(a, "dragover", Vt), te(a, "mousemove", Vt), te(a, "touchmove", Vt), te(a, "mouseup", s._onDrop), te(a, "touchend", s._onDrop), te(a, "touchcancel", s._onDrop), ws && this.nativeDraggable && (this.options.touchStartThreshold = 4, M.draggable = !0), Ne("delayStart", this, {
        evt: t
      }), l.delay && (!l.delayOnTouchOnly || n) && (!this.nativeDraggable || !(Mn || ot))) {
        if (U.eventCanceled) {
          this._onDrop();
          return;
        }
        te(a, "mouseup", s._disableDelayedDrag), te(a, "touchend", s._disableDelayedDrag), te(a, "touchcancel", s._disableDelayedDrag), te(a, "mousemove", s._delayedDragTouchMoveHandler), te(a, "touchmove", s._delayedDragTouchMoveHandler), l.supportPointer && te(a, "pointermove", s._delayedDragTouchMoveHandler), s._dragStartTimer = setTimeout(u, l.delay);
      } else
        u();
    }
  },
  _delayedDragTouchMoveHandler: function(t) {
    var n = t.touches ? t.touches[0] : t;
    Math.max(Math.abs(n.clientX - this._lastX), Math.abs(n.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    M && zr(M), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var t = this.el.ownerDocument;
    J(t, "mouseup", this._disableDelayedDrag), J(t, "touchend", this._disableDelayedDrag), J(t, "touchcancel", this._disableDelayedDrag), J(t, "mousemove", this._delayedDragTouchMoveHandler), J(t, "touchmove", this._delayedDragTouchMoveHandler), J(t, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(t, n) {
    n = n || t.pointerType == "touch" && t, !this.nativeDraggable || n ? this.options.supportPointer ? te(document, "pointermove", this._onTouchMove) : n ? te(document, "touchmove", this._onTouchMove) : te(document, "mousemove", this._onTouchMove) : (te(M, "dragend", this), te(de, "dragstart", this._onDragStart));
    try {
      document.selection ? tr(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(t, n) {
    if (zt = !1, de && M) {
      Ne("dragStarted", this, {
        evt: n
      }), this.nativeDraggable && te(document, "dragover", Z_);
      var i = this.options;
      !t && Pe(M, i.dragClass, !1), Pe(M, i.ghostClass, !0), U.active = this, t && this._appendGhost(), Ie({
        sortable: this,
        name: "start",
        originalEvent: n
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (Ke) {
      this._lastX = Ke.clientX, this._lastY = Ke.clientY, va();
      for (var t = document.elementFromPoint(Ke.clientX, Ke.clientY), n = t; t && t.shadowRoot && (t = t.shadowRoot.elementFromPoint(Ke.clientX, Ke.clientY), t !== n); )
        n = t;
      if (M.parentNode[je]._isOutsideThisEl(t), n)
        do {
          if (n[je]) {
            var i = void 0;
            if (i = n[je]._onDragOver({
              clientX: Ke.clientX,
              clientY: Ke.clientY,
              target: t,
              rootEl: n
            }), i && !this.options.dragoverBubble)
              break;
          }
          t = n;
        } while (n = n.parentNode);
      ba();
    }
  },
  _onTouchMove: function(t) {
    if (Ot) {
      var n = this.options, i = n.fallbackTolerance, s = n.fallbackOffset, r = t.touches ? t.touches[0] : t, l = H && Wt(H, !0), a = H && l && l.a, u = H && l && l.d, c = Wn && Ae && Os(Ae), f = (r.clientX - Ot.clientX + s.x) / (a || 1) + (c ? c[0] - Br[0] : 0) / (a || 1), p = (r.clientY - Ot.clientY + s.y) / (u || 1) + (c ? c[1] - Br[1] : 0) / (u || 1);
      if (!U.active && !zt) {
        if (i && Math.max(Math.abs(r.clientX - this._lastX), Math.abs(r.clientY - this._lastY)) < i)
          return;
        this._onDragStart(t, !0);
      }
      if (H) {
        l ? (l.e += f - (jr || 0), l.f += p - (Rr || 0)) : l = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: f,
          f: p
        };
        var g = "matrix(".concat(l.a, ",").concat(l.b, ",").concat(l.c, ",").concat(l.d, ",").concat(l.e, ",").concat(l.f, ")");
        P(H, "webkitTransform", g), P(H, "mozTransform", g), P(H, "msTransform", g), P(H, "transform", g), jr = f, Rr = p, Ke = r;
      }
      t.cancelable && t.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!H) {
      var t = this.options.fallbackOnBody ? document.body : de, n = be(M, !0, Wn, !0, t), i = this.options;
      if (Wn) {
        for (Ae = t; P(Ae, "position") === "static" && P(Ae, "transform") === "none" && Ae !== document; )
          Ae = Ae.parentNode;
        Ae !== document.body && Ae !== document.documentElement ? (Ae === document && (Ae = nt()), n.top += Ae.scrollTop, n.left += Ae.scrollLeft) : Ae = nt(), Br = Os(Ae);
      }
      H = M.cloneNode(!0), Pe(H, i.ghostClass, !1), Pe(H, i.fallbackClass, !0), Pe(H, i.dragClass, !0), P(H, "transition", ""), P(H, "transform", ""), P(H, "box-sizing", "border-box"), P(H, "margin", 0), P(H, "top", n.top), P(H, "left", n.left), P(H, "width", n.width), P(H, "height", n.height), P(H, "opacity", "0.8"), P(H, "position", Wn ? "absolute" : "fixed"), P(H, "zIndex", "100000"), P(H, "pointerEvents", "none"), U.ghost = H, t.appendChild(H), P(H, "transform-origin", Vs / parseInt(H.style.width) * 100 + "% " + As / parseInt(H.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(t, n) {
    var i = this, s = t.dataTransfer, r = i.options;
    if (Ne("dragStart", this, {
      evt: t
    }), U.eventCanceled) {
      this._onDrop();
      return;
    }
    Ne("setupClone", this), U.eventCanceled || (me = pa(M), me.draggable = !1, me.style["will-change"] = "", this._hideClone(), Pe(me, this.options.chosenClass, !1), U.clone = me), i.cloneId = tr(function() {
      Ne("clone", i), !U.eventCanceled && (i.options.removeCloneOnHide || de.insertBefore(me, M), i._hideClone(), Ie({
        sortable: i,
        name: "clone"
      }));
    }), !n && Pe(M, r.dragClass, !0), n ? (dr = !0, i._loopId = setInterval(i._emulateDragOver, 50)) : (J(document, "mouseup", i._onDrop), J(document, "touchend", i._onDrop), J(document, "touchcancel", i._onDrop), s && (s.effectAllowed = "move", r.setData && r.setData.call(i, s, M)), te(document, "drop", i), P(M, "transform", "translateZ(0)")), zt = !0, i._dragStartId = tr(i._dragStarted.bind(i, n, t)), te(document, "selectstart", i), yn = !0, bn && P(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(t) {
    var n = this.el, i = t.target, s, r, l, a = this.options, u = a.group, c = U.active, f = qn === u, p = a.sort, g = we || c, v, T = this, A = !1;
    if (di)
      return;
    function E(ut, Fn) {
      Ne(ut, T, rt({
        evt: t,
        isOwner: f,
        axis: v ? "vertical" : "horizontal",
        revert: l,
        dragRect: s,
        targetRect: r,
        canSort: p,
        fromSortable: g,
        target: i,
        completed: Q,
        onMove: function(dt, sn) {
          return Zn(de, n, M, s, dt, be(dt), t, sn);
        },
        changed: ne
      }, Fn));
    }
    function q() {
      E("dragOverAnimationCapture"), T.captureAnimationState(), T !== g && g.captureAnimationState();
    }
    function Q(ut) {
      return E("dragOverCompleted", {
        insertion: ut
      }), ut && (f ? c._hideClone() : c._showClone(T), T !== g && (Pe(M, we ? we.options.ghostClass : c.options.ghostClass, !1), Pe(M, a.ghostClass, !0)), we !== T && T !== U.active ? we = T : T === U.active && we && (we = null), g === T && (T._ignoreWhileAnimating = i), T.animateAll(function() {
        E("dragOverAnimationComplete"), T._ignoreWhileAnimating = null;
      }), T !== g && (g.animateAll(), g._ignoreWhileAnimating = null)), (i === M && !M.animated || i === n && !i.animated) && (Bt = null), !a.dragoverBubble && !t.rootEl && i !== document && (M.parentNode[je]._isOutsideThisEl(t.target), !ut && Vt(t)), !a.dragoverBubble && t.stopPropagation && t.stopPropagation(), A = !0;
    }
    function ne() {
      Ue = ze(M), ht = ze(M, a.draggable), Ie({
        sortable: T,
        name: "change",
        toEl: n,
        newIndex: Ue,
        newDraggableIndex: ht,
        originalEvent: t
      });
    }
    if (t.preventDefault !== void 0 && t.cancelable && t.preventDefault(), i = tt(i, a.draggable, n, !0), E("dragOver"), U.eventCanceled)
      return A;
    if (M.contains(t.target) || i.animated && i.animatingX && i.animatingY || T._ignoreWhileAnimating === i)
      return Q(!1);
    if (dr = !1, c && !a.disabled && (f ? p || (l = fe !== de) : we === this || (this.lastPutMode = qn.checkPull(this, c, M, t)) && u.checkPut(this, c, M, t))) {
      if (v = this._getDirection(t, i) === "vertical", s = be(M), E("dragOverValid"), U.eventCanceled)
        return A;
      if (l)
        return fe = de, q(), this._hideClone(), E("revert"), U.eventCanceled || (Ct ? de.insertBefore(M, Ct) : de.appendChild(M)), Q(!0);
      var ae = Ci(n, a.draggable);
      if (!ae || X_(t, v, this) && !ae.animated) {
        if (ae === M)
          return Q(!1);
        if (ae && n === t.target && (i = ae), i && (r = be(i)), Zn(de, n, M, s, i, r, t, !!i) !== !1)
          return q(), n.appendChild(M), fe = n, ne(), Q(!0);
      } else if (ae && J_(t, v, this)) {
        var oe = Yt(n, 0, a, !0);
        if (oe === M)
          return Q(!1);
        if (i = oe, r = be(i), Zn(de, n, M, s, i, r, t, !1) !== !1)
          return q(), n.insertBefore(M, oe), fe = n, ne(), Q(!0);
      } else if (i.parentNode === n) {
        r = be(i);
        var B = 0, F, se = M.parentNode !== n, z = !G_(M.animated && M.toRect || s, i.animated && i.toRect || r, v), Ce = v ? "top" : "left", ke = Ts(i, "top", "top") || Ts(M, "top", "top"), xe = ke ? ke.scrollTop : void 0;
        Bt !== i && (F = r[Ce], Sn = !1, Gn = !z && a.invertSwap || se), B = Q_(t, i, r, v, z ? 1 : a.swapThreshold, a.invertedSwapThreshold == null ? a.swapThreshold : a.invertedSwapThreshold, Gn, Bt === i);
        var Te;
        if (B !== 0) {
          var Oe = ze(M);
          do
            Oe -= B, Te = fe.children[Oe];
          while (Te && (P(Te, "display") === "none" || Te === H));
        }
        if (B === 0 || Te === i)
          return Q(!1);
        Bt = i, wn = B;
        var Fe = i.nextElementSibling, Ve = !1;
        Ve = B === 1;
        var D = Zn(de, n, M, s, i, r, t, Ve);
        if (D !== !1)
          return (D === 1 || D === -1) && (Ve = D === 1), di = !0, setTimeout(Y_, 30), q(), Ve && !Fe ? n.appendChild(M) : i.parentNode.insertBefore(M, Ve ? Fe : i), ke && ha(ke, 0, xe - ke.scrollTop), fe = M.parentNode, F !== void 0 && !Gn && (er = Math.abs(F - be(i)[Ce])), ne(), Q(!0);
      }
      if (n.contains(M))
        return Q(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    J(document, "mousemove", this._onTouchMove), J(document, "touchmove", this._onTouchMove), J(document, "pointermove", this._onTouchMove), J(document, "dragover", Vt), J(document, "mousemove", Vt), J(document, "touchmove", Vt);
  },
  _offUpEvents: function() {
    var t = this.el.ownerDocument;
    J(t, "mouseup", this._onDrop), J(t, "touchend", this._onDrop), J(t, "pointerup", this._onDrop), J(t, "touchcancel", this._onDrop), J(document, "selectstart", this);
  },
  _onDrop: function(t) {
    var n = this.el, i = this.options;
    if (Ue = ze(M), ht = ze(M, i.draggable), Ne("drop", this, {
      evt: t
    }), fe = M && M.parentNode, Ue = ze(M), ht = ze(M, i.draggable), U.eventCanceled) {
      this._nulling();
      return;
    }
    zt = !1, Gn = !1, Sn = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), ci(this.cloneId), ci(this._dragStartId), this.nativeDraggable && (J(document, "drop", this), J(n, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), bn && P(document.body, "user-select", ""), P(M, "transform", ""), t && (yn && (t.cancelable && t.preventDefault(), !i.dropBubble && t.stopPropagation()), H && H.parentNode && H.parentNode.removeChild(H), (de === fe || we && we.lastPutMode !== "clone") && me && me.parentNode && me.parentNode.removeChild(me), M && (this.nativeDraggable && J(M, "dragend", this), zr(M), M.style["will-change"] = "", yn && !zt && Pe(M, we ? we.options.ghostClass : this.options.ghostClass, !1), Pe(M, this.options.chosenClass, !1), Ie({
      sortable: this,
      name: "unchoose",
      toEl: fe,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: t
    }), de !== fe ? (Ue >= 0 && (Ie({
      rootEl: fe,
      name: "add",
      toEl: fe,
      fromEl: de,
      originalEvent: t
    }), Ie({
      sortable: this,
      name: "remove",
      toEl: fe,
      originalEvent: t
    }), Ie({
      rootEl: fe,
      name: "sort",
      toEl: fe,
      fromEl: de,
      originalEvent: t
    }), Ie({
      sortable: this,
      name: "sort",
      toEl: fe,
      originalEvent: t
    })), we && we.save()) : Ue !== qt && Ue >= 0 && (Ie({
      sortable: this,
      name: "update",
      toEl: fe,
      originalEvent: t
    }), Ie({
      sortable: this,
      name: "sort",
      toEl: fe,
      originalEvent: t
    })), U.active && ((Ue == null || Ue === -1) && (Ue = qt, ht = xn), Ie({
      sortable: this,
      name: "end",
      toEl: fe,
      originalEvent: t
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    Ne("nulling", this), de = M = fe = H = Ct = me = Qn = yt = Ot = Ke = yn = Ue = ht = qt = xn = Bt = wn = we = qn = U.dragged = U.ghost = U.clone = U.active = null, fr.forEach(function(t) {
      t.checked = !0;
    }), fr.length = jr = Rr = 0;
  },
  handleEvent: function(t) {
    switch (t.type) {
      case "drop":
      case "dragend":
        this._onDrop(t);
        break;
      case "dragenter":
      case "dragover":
        M && (this._onDragOver(t), K_(t));
        break;
      case "selectstart":
        t.preventDefault();
        break;
    }
  },
  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function() {
    for (var t = [], n, i = this.el.children, s = 0, r = i.length, l = this.options; s < r; s++)
      n = i[s], tt(n, l.draggable, this.el, !1) && t.push(n.getAttribute(l.dataIdAttr) || tg(n));
    return t;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(t, n) {
    var i = {}, s = this.el;
    this.toArray().forEach(function(r, l) {
      var a = s.children[l];
      tt(a, this.options.draggable, s, !1) && (i[r] = a);
    }, this), n && this.captureAnimationState(), t.forEach(function(r) {
      i[r] && (s.removeChild(i[r]), s.appendChild(i[r]));
    }), n && this.animateAll();
  },
  /**
   * Save the current sorting
   */
  save: function() {
    var t = this.options.store;
    t && t.set && t.set(this);
  },
  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function(t, n) {
    return tt(t, n || this.options.draggable, this.el, !1);
  },
  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function(t, n) {
    var i = this.options;
    if (n === void 0)
      return i[t];
    var s = In.modifyOption(this, t, n);
    typeof s < "u" ? i[t] = s : i[t] = n, t === "group" && ga(i);
  },
  /**
   * Destroy
   */
  destroy: function() {
    Ne("destroy", this);
    var t = this.el;
    t[je] = null, J(t, "mousedown", this._onTapStart), J(t, "touchstart", this._onTapStart), J(t, "pointerdown", this._onTapStart), this.nativeDraggable && (J(t, "dragover", this), J(t, "dragenter", this)), Array.prototype.forEach.call(t.querySelectorAll("[draggable]"), function(n) {
      n.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), cr.splice(cr.indexOf(this.el), 1), this.el = t = null;
  },
  _hideClone: function() {
    if (!yt) {
      if (Ne("hideClone", this), U.eventCanceled)
        return;
      P(me, "display", "none"), this.options.removeCloneOnHide && me.parentNode && me.parentNode.removeChild(me), yt = !0;
    }
  },
  _showClone: function(t) {
    if (t.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (yt) {
      if (Ne("showClone", this), U.eventCanceled)
        return;
      M.parentNode == de && !this.options.group.revertClone ? de.insertBefore(me, M) : Ct ? de.insertBefore(me, Ct) : de.appendChild(me), this.options.group.revertClone && this.animate(M, me), P(me, "display", ""), yt = !1;
    }
  }
};
function K_(e) {
  e.dataTransfer && (e.dataTransfer.dropEffect = "move"), e.cancelable && e.preventDefault();
}
function Zn(e, t, n, i, s, r, l, a) {
  var u, c = e[je], f = c.options.onMove, p;
  return window.CustomEvent && !ot && !Mn ? u = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (u = document.createEvent("Event"), u.initEvent("move", !0, !0)), u.to = t, u.from = e, u.dragged = n, u.draggedRect = i, u.related = s || t, u.relatedRect = r || be(t), u.willInsertAfter = a, u.originalEvent = l, e.dispatchEvent(u), f && (p = f.call(c, u, l)), p;
}
function zr(e) {
  e.draggable = !1;
}
function Y_() {
  di = !1;
}
function J_(e, t, n) {
  var i = be(Yt(n.el, 0, n.options, !0)), s = 10;
  return t ? e.clientX < i.left - s || e.clientY < i.top && e.clientX < i.right : e.clientY < i.top - s || e.clientY < i.bottom && e.clientX < i.left;
}
function X_(e, t, n) {
  var i = be(Ci(n.el, n.options.draggable)), s = 10;
  return t ? e.clientX > i.right + s || e.clientX <= i.right && e.clientY > i.bottom && e.clientX >= i.left : e.clientX > i.right && e.clientY > i.top || e.clientX <= i.right && e.clientY > i.bottom + s;
}
function Q_(e, t, n, i, s, r, l, a) {
  var u = i ? e.clientY : e.clientX, c = i ? n.height : n.width, f = i ? n.top : n.left, p = i ? n.bottom : n.right, g = !1;
  if (!l) {
    if (a && er < c * s) {
      if (!Sn && (wn === 1 ? u > f + c * r / 2 : u < p - c * r / 2) && (Sn = !0), Sn)
        g = !0;
      else if (wn === 1 ? u < f + er : u > p - er)
        return -wn;
    } else if (u > f + c * (1 - s) / 2 && u < p - c * (1 - s) / 2)
      return eg(t);
  }
  return g = g || l, g && (u < f + c * r / 2 || u > p - c * r / 2) ? u > f + c / 2 ? 1 : -1 : 0;
}
function eg(e) {
  return ze(M) < ze(e) ? 1 : -1;
}
function tg(e) {
  for (var t = e.tagName + e.className + e.src + e.href + e.textContent, n = t.length, i = 0; n--; )
    i += t.charCodeAt(n);
  return i.toString(36);
}
function ng(e) {
  fr.length = 0;
  for (var t = e.getElementsByTagName("input"), n = t.length; n--; ) {
    var i = t[n];
    i.checked && fr.push(i);
  }
}
function tr(e) {
  return setTimeout(e, 0);
}
function ci(e) {
  return clearTimeout(e);
}
Tr && te(document, "touchmove", function(e) {
  (U.active || zt) && e.cancelable && e.preventDefault();
});
U.utils = {
  on: te,
  off: J,
  css: P,
  find: fa,
  is: function(t, n) {
    return !!tt(t, n, t, !1);
  },
  extend: P_,
  throttle: ma,
  closest: tt,
  toggleClass: Pe,
  clone: pa,
  index: ze,
  nextTick: tr,
  cancelNextTick: ci,
  detectDirection: _a,
  getChild: Yt
};
U.get = function(e) {
  return e[je];
};
U.mount = function() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  t[0].constructor === Array && (t = t[0]), t.forEach(function(i) {
    if (!i.prototype || !i.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(i));
    i.utils && (U.utils = rt(rt({}, U.utils), i.utils)), In.mount(i);
  });
};
U.create = function(e, t) {
  return new U(e, t);
};
U.version = F_;
var pe = [], _n, fi, mi = !1, Hr, qr, mr, gn;
function rg() {
  function e() {
    this.defaults = {
      scroll: !0,
      forceAutoScrollFallback: !1,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: !0
    };
    for (var t in this)
      t.charAt(0) === "_" && typeof this[t] == "function" && (this[t] = this[t].bind(this));
  }
  return e.prototype = {
    dragStarted: function(n) {
      var i = n.originalEvent;
      this.sortable.nativeDraggable ? te(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? te(document, "pointermove", this._handleFallbackAutoScroll) : i.touches ? te(document, "touchmove", this._handleFallbackAutoScroll) : te(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(n) {
      var i = n.originalEvent;
      !this.options.dragOverBubble && !i.rootEl && this._handleAutoScroll(i);
    },
    drop: function() {
      this.sortable.nativeDraggable ? J(document, "dragover", this._handleAutoScroll) : (J(document, "pointermove", this._handleFallbackAutoScroll), J(document, "touchmove", this._handleFallbackAutoScroll), J(document, "mousemove", this._handleFallbackAutoScroll)), Es(), nr(), U_();
    },
    nulling: function() {
      mr = fi = _n = mi = gn = Hr = qr = null, pe.length = 0;
    },
    _handleFallbackAutoScroll: function(n) {
      this._handleAutoScroll(n, !0);
    },
    _handleAutoScroll: function(n, i) {
      var s = this, r = (n.touches ? n.touches[0] : n).clientX, l = (n.touches ? n.touches[0] : n).clientY, a = document.elementFromPoint(r, l);
      if (mr = n, i || this.options.forceAutoScrollFallback || Mn || ot || bn) {
        Gr(n, this.options, a, i);
        var u = _t(a, !0);
        mi && (!gn || r !== Hr || l !== qr) && (gn && Es(), gn = setInterval(function() {
          var c = _t(document.elementFromPoint(r, l), !0);
          c !== u && (u = c, nr()), Gr(n, s.options, c, i);
        }, 10), Hr = r, qr = l);
      } else {
        if (!this.options.bubbleScroll || _t(a, !0) === nt()) {
          nr();
          return;
        }
        Gr(n, this.options, _t(a, !1), !1);
      }
    }
  }, at(e, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function nr() {
  pe.forEach(function(e) {
    clearInterval(e.pid);
  }), pe = [];
}
function Es() {
  clearInterval(gn);
}
var Gr = ma(function(e, t, n, i) {
  if (t.scroll) {
    var s = (e.touches ? e.touches[0] : e).clientX, r = (e.touches ? e.touches[0] : e).clientY, l = t.scrollSensitivity, a = t.scrollSpeed, u = nt(), c = !1, f;
    fi !== n && (fi = n, nr(), _n = t.scroll, f = t.scrollFn, _n === !0 && (_n = _t(n, !0)));
    var p = 0, g = _n;
    do {
      var v = g, T = be(v), A = T.top, E = T.bottom, q = T.left, Q = T.right, ne = T.width, ae = T.height, oe = void 0, B = void 0, F = v.scrollWidth, se = v.scrollHeight, z = P(v), Ce = v.scrollLeft, ke = v.scrollTop;
      v === u ? (oe = ne < F && (z.overflowX === "auto" || z.overflowX === "scroll" || z.overflowX === "visible"), B = ae < se && (z.overflowY === "auto" || z.overflowY === "scroll" || z.overflowY === "visible")) : (oe = ne < F && (z.overflowX === "auto" || z.overflowX === "scroll"), B = ae < se && (z.overflowY === "auto" || z.overflowY === "scroll"));
      var xe = oe && (Math.abs(Q - s) <= l && Ce + ne < F) - (Math.abs(q - s) <= l && !!Ce), Te = B && (Math.abs(E - r) <= l && ke + ae < se) - (Math.abs(A - r) <= l && !!ke);
      if (!pe[p])
        for (var Oe = 0; Oe <= p; Oe++)
          pe[Oe] || (pe[Oe] = {});
      (pe[p].vx != xe || pe[p].vy != Te || pe[p].el !== v) && (pe[p].el = v, pe[p].vx = xe, pe[p].vy = Te, clearInterval(pe[p].pid), (xe != 0 || Te != 0) && (c = !0, pe[p].pid = setInterval(function() {
        i && this.layer === 0 && U.active._onTouchMove(mr);
        var Fe = pe[this.layer].vy ? pe[this.layer].vy * a : 0, Ve = pe[this.layer].vx ? pe[this.layer].vx * a : 0;
        typeof f == "function" && f.call(U.dragged.parentNode[je], Ve, Fe, e, mr, pe[this.layer].el) !== "continue" || ha(pe[this.layer].el, Ve, Fe);
      }.bind({
        layer: p
      }), 24))), p++;
    } while (t.bubbleScroll && g !== u && (g = _t(g, !1)));
    mi = c;
  }
}, 30), ka = function(t) {
  var n = t.originalEvent, i = t.putSortable, s = t.dragEl, r = t.activeSortable, l = t.dispatchSortableEvent, a = t.hideGhostForTarget, u = t.unhideGhostForTarget;
  if (n) {
    var c = i || r;
    a();
    var f = n.changedTouches && n.changedTouches.length ? n.changedTouches[0] : n, p = document.elementFromPoint(f.clientX, f.clientY);
    u(), c && !c.el.contains(p) && (l("spill"), this.onSpill({
      dragEl: s,
      putSortable: i
    }));
  }
};
function Ei() {
}
Ei.prototype = {
  startIndex: null,
  dragStart: function(t) {
    var n = t.oldDraggableIndex;
    this.startIndex = n;
  },
  onSpill: function(t) {
    var n = t.dragEl, i = t.putSortable;
    this.sortable.captureAnimationState(), i && i.captureAnimationState();
    var s = Yt(this.sortable.el, this.startIndex, this.options);
    s ? this.sortable.el.insertBefore(n, s) : this.sortable.el.appendChild(n), this.sortable.animateAll(), i && i.animateAll();
  },
  drop: ka
};
at(Ei, {
  pluginName: "revertOnSpill"
});
function Mi() {
}
Mi.prototype = {
  onSpill: function(t) {
    var n = t.dragEl, i = t.putSortable, s = i || this.sortable;
    s.captureAnimationState(), n.parentNode && n.parentNode.removeChild(n), s.animateAll();
  },
  drop: ka
};
at(Mi, {
  pluginName: "removeOnSpill"
});
U.mount(new rg());
U.mount(Mi, Ei);
function Wr(e) {
  e.parentElement !== null && e.parentElement.removeChild(e);
}
function Ms(e, t, n) {
  const i = n === 0 ? e.children[0] : e.children[n - 1].nextSibling;
  e.insertBefore(t, i);
}
function ig() {
  return typeof window < "u" ? window.console : global.console;
}
const sg = ig();
function lg(e) {
  const t = /* @__PURE__ */ Object.create(null);
  return function(i) {
    return t[i] || (t[i] = e(i));
  };
}
const ag = /-(\w)/g, og = lg((e) => e.replace(ag, (t, n) => n.toUpperCase())), xa = ["Start", "Add", "Remove", "Update", "End"], wa = ["Choose", "Unchoose", "Sort", "Filter", "Clone"], Sa = ["Move"], ug = [Sa, xa, wa].flatMap((e) => e).map((e) => `on${e}`), hi = {
  manage: Sa,
  manageAndEmit: xa,
  emit: wa
};
function dg(e) {
  return ug.indexOf(e) !== -1;
}
const cg = [
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
function fg(e) {
  return cg.includes(e);
}
function mg(e) {
  return ["transition-group", "TransitionGroup"].includes(e);
}
function Ta(e) {
  return ["id", "class", "role", "style"].includes(e) || e.startsWith("data-") || e.startsWith("aria-") || e.startsWith("on");
}
function Oa(e) {
  return e.reduce((t, [n, i]) => (t[n] = i, t), {});
}
function hg({ $attrs: e, componentData: t = {} }) {
  return {
    ...Oa(
      Object.entries(e).filter(([i, s]) => Ta(i))
    ),
    ...t
  };
}
function pg({ $attrs: e, callBackBuilder: t }) {
  const n = Oa(Va(e));
  Object.entries(t).forEach(([s, r]) => {
    hi[s].forEach((l) => {
      n[`on${l}`] = r(l);
    });
  });
  const i = `[data-draggable]${n.draggable || ""}`;
  return {
    ...n,
    draggable: i
  };
}
function Va(e) {
  return Object.entries(e).filter(([t, n]) => !Ta(t)).map(([t, n]) => [og(t), n]).filter(([t, n]) => !dg(t));
}
const Is = ({ el: e }) => e, yg = (e, t) => e.__draggable_context = t, Ds = (e) => e.__draggable_context;
class _g {
  constructor({
    nodes: { header: t, default: n, footer: i },
    root: s,
    realList: r
  }) {
    this.defaultNodes = n, this.children = [...t, ...n, ...i], this.externalComponent = s.externalComponent, this.rootTransition = s.transition, this.tag = s.tag, this.realList = r;
  }
  get _isRootComponent() {
    return this.externalComponent || this.rootTransition;
  }
  render(t, n) {
    const { tag: i, children: s, _isRootComponent: r } = this;
    return t(i, n, r ? { default: () => s } : s);
  }
  updated() {
    const { defaultNodes: t, realList: n } = this;
    t.forEach((i, s) => {
      yg(Is(i), {
        element: n[s],
        index: s
      });
    });
  }
  getUnderlyingVm(t) {
    return Ds(t);
  }
  getVmIndexFromDomIndex(t, n) {
    const { defaultNodes: i } = this, { length: s } = i, r = n.children, l = r.item(t);
    if (l === null)
      return s;
    const a = Ds(l);
    if (a)
      return a.index;
    if (s === 0)
      return 0;
    const u = Is(i[0]), c = [...r].findIndex(
      (f) => f === u
    );
    return t < c ? 0 : s;
  }
}
function gg(e, t) {
  const n = e[t];
  return n ? n() : [];
}
function vg({ $slots: e, realList: t, getKey: n }) {
  const i = t || [], [s, r] = ["header", "footer"].map(
    (u) => gg(e, u)
  ), { item: l } = e;
  if (!l)
    throw new Error("draggable element must have an item slot");
  const a = i.flatMap(
    (u, c) => l({ element: u, index: c }).map((f) => (f.key = n(u), f.props = { ...f.props || {}, "data-draggable": !0 }, f))
  );
  if (a.length !== i.length)
    throw new Error("Item slot must have only one child");
  return {
    header: s,
    footer: r,
    default: a
  };
}
function bg(e) {
  const t = mg(e), n = !fg(e) && !t;
  return {
    transition: t,
    externalComponent: n,
    tag: n ? y(e) : t ? co : e
  };
}
function kg({ $slots: e, tag: t, realList: n, getKey: i }) {
  const s = vg({ $slots: e, realList: n, getKey: i }), r = bg(t);
  return new _g({ nodes: s, root: r, realList: n });
}
function Aa(e, t) {
  Xs(() => this.$emit(e.toLowerCase(), t));
}
function Ca(e) {
  return (t, n) => {
    if (this.realList !== null)
      return this[`onDrag${e}`](t, n);
  };
}
function xg(e) {
  const t = Ca.call(this, e);
  return (n, i) => {
    t.call(this, n, i), Aa.call(this, e, n);
  };
}
let Zr = null;
const wg = {
  list: {
    type: Array,
    required: !1,
    default: null
  },
  modelValue: {
    type: Array,
    required: !1,
    default: null
  },
  itemKey: {
    type: [String, Function],
    required: !0
  },
  clone: {
    type: Function,
    default: (e) => e
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
    required: !1,
    default: null
  }
}, Sg = [
  "update:modelValue",
  "change",
  ...[...hi.manageAndEmit, ...hi.emit].map((e) => e.toLowerCase())
], Ea = fo({
  name: "draggable",
  inheritAttrs: !1,
  props: wg,
  emits: Sg,
  data() {
    return {
      error: !1
    };
  },
  render() {
    try {
      this.error = !1;
      const { $slots: e, $attrs: t, tag: n, componentData: i, realList: s, getKey: r } = this, l = kg({
        $slots: e,
        tag: n,
        realList: s,
        getKey: r
      });
      this.componentStructure = l;
      const a = hg({ $attrs: t, componentData: i });
      return l.render(ti, a);
    } catch (e) {
      return this.error = !0, ti("pre", { style: { color: "red" } }, e.stack);
    }
  },
  created() {
    this.list !== null && this.modelValue !== null && sg.error(
      "modelValue and list props are mutually exclusive! Please set one or another."
    );
  },
  mounted() {
    if (this.error)
      return;
    const { $attrs: e, $el: t, componentStructure: n } = this;
    n.updated();
    const i = pg({
      $attrs: e,
      callBackBuilder: {
        manageAndEmit: (r) => xg.call(this, r),
        emit: (r) => Aa.bind(this, r),
        manage: (r) => Ca.call(this, r)
      }
    }), s = t.nodeType === 1 ? t : t.parentElement;
    this._sortable = new U(s, i), this.targetDomElement = s, s.__draggable_component__ = this;
  },
  updated() {
    this.componentStructure.updated();
  },
  beforeUnmount() {
    this._sortable !== void 0 && this._sortable.destroy();
  },
  computed: {
    realList() {
      const { list: e } = this;
      return e || this.modelValue;
    },
    getKey() {
      const { itemKey: e } = this;
      return typeof e == "function" ? e : (t) => t[e];
    }
  },
  watch: {
    $attrs: {
      handler(e) {
        const { _sortable: t } = this;
        t && Va(e).forEach(([n, i]) => {
          t.option(n, i);
        });
      },
      deep: !0
    }
  },
  methods: {
    getUnderlyingVm(e) {
      return this.componentStructure.getUnderlyingVm(e) || null;
    },
    getUnderlyingPotencialDraggableComponent(e) {
      return e.__draggable_component__;
    },
    emitChanges(e) {
      Xs(() => this.$emit("change", e));
    },
    alterList(e) {
      if (this.list) {
        e(this.list);
        return;
      }
      const t = [...this.modelValue];
      e(t), this.$emit("update:modelValue", t);
    },
    spliceList() {
      const e = (t) => t.splice(...arguments);
      this.alterList(e);
    },
    updatePosition(e, t) {
      const n = (i) => i.splice(t, 0, i.splice(e, 1)[0]);
      this.alterList(n);
    },
    getRelatedContextFromMoveEvent({ to: e, related: t }) {
      const n = this.getUnderlyingPotencialDraggableComponent(e);
      if (!n)
        return { component: n };
      const i = n.realList, s = { list: i, component: n };
      return e !== t && i ? { ...n.getUnderlyingVm(t) || {}, ...s } : s;
    },
    getVmIndexFromDomIndex(e) {
      return this.componentStructure.getVmIndexFromDomIndex(
        e,
        this.targetDomElement
      );
    },
    onDragStart(e) {
      this.context = this.getUnderlyingVm(e.item), e.item._underlying_vm_ = this.clone(this.context.element), Zr = e.item;
    },
    onDragAdd(e) {
      const t = e.item._underlying_vm_;
      if (t === void 0)
        return;
      Wr(e.item);
      const n = this.getVmIndexFromDomIndex(e.newIndex);
      this.spliceList(n, 0, t);
      const i = { element: t, newIndex: n };
      this.emitChanges({ added: i });
    },
    onDragRemove(e) {
      if (Ms(this.$el, e.item, e.oldIndex), e.pullMode === "clone") {
        Wr(e.clone);
        return;
      }
      const { index: t, element: n } = this.context;
      this.spliceList(t, 1);
      const i = { element: n, oldIndex: t };
      this.emitChanges({ removed: i });
    },
    onDragUpdate(e) {
      Wr(e.item), Ms(e.from, e.item, e.oldIndex);
      const t = this.context.index, n = this.getVmIndexFromDomIndex(e.newIndex);
      this.updatePosition(t, n);
      const i = { element: this.context.element, oldIndex: t, newIndex: n };
      this.emitChanges({ moved: i });
    },
    computeFutureIndex(e, t) {
      if (!e.element)
        return 0;
      const n = [...t.to.children].filter(
        (l) => l.style.display !== "none"
      ), i = n.indexOf(t.related), s = e.component.getVmIndexFromDomIndex(
        i
      );
      return n.indexOf(Zr) !== -1 || !t.willInsertAfter ? s : s + 1;
    },
    onDragMove(e, t) {
      const { move: n, realList: i } = this;
      if (!n || !i)
        return !0;
      const s = this.getRelatedContextFromMoveEvent(e), r = this.computeFutureIndex(s, e), l = {
        ...this.context,
        futureIndex: r
      }, a = {
        ...e,
        relatedContext: s,
        draggedContext: l
      };
      return n(a, t);
    },
    onDragEnd() {
      Zr = null;
    }
  }
});
const Tg = {
  components: {
    Item: ua,
    draggable: Ea
  },
  props: {
    modelValue: {
      type: [Object, Array]
    }
  },
  mixins: [ie],
  async created() {
    this.glossary = await this.$sdk.content.glossary({ hash: !0 }), this.value = this.cleanInput(this.value, !0), this.dispatch();
  },
  data() {
    return {
      glossary: {}
    };
  },
  methods: {
    async create() {
      var n;
      const e = this;
      if (!((n = e.$sdk.global) != null && n.create))
        return;
      const t = await e.$sdk.global.create(e.field.referenceType);
      e.multiValue ? (e.model || (e.model = []), e.model.push(t)) : e.model = t;
    },
    clear() {
      this.model = void 0, this.touch();
    },
    // remove(index) {
    //     if (this.maximum == 1) {
    //         this.model = null
    //     } else {
    //         this.model.splice(index, 1);
    //     }
    // },
    canEdit(e) {
      var t = this.user;
      return t ? this.$sdk.access.canEditItem(t, e) : !1;
    },
    async edit(e) {
      var t = await this.$sdk.global.edit(e, !0).catch(function(i) {
      });
      for (var n in t)
        e[n] = t[n];
    },
    open() {
      var e = this;
      e.touch();
      var t = {
        field: e.field,
        model: e.multiValue ? e.value : [e.value].filter(Boolean),
        maximum: e.field.maximum,
        browserOptions: {
          columns: e.field.columns,
          select: e.field.select,
          lockFilter: e.field.lockFilter
        }
      };
      e.$sdk.browse(this.field.referenceType, t).then(function(n) {
        e.model = e.multiValue ? n : n[0];
      }).catch(function(n) {
        console.log("Error", n);
      });
    },
    cleanInput(e) {
      var t = this;
      return t.multiValue ? (e || (e = []), Array.isArray(e) || (e = []), t.maximum && e.length > t.maximum && (e.length = t.maximum)) : Array.isArray(e) && (e = e[0]), e;
    }
  },
  computed: {
    showList() {
      return this.field.list !== !1;
    },
    canAdd() {
      const e = this;
      return !e.showList || !e.maximum ? !0 : e.multiValue ? e.model.length < e.maximum : !e.model;
    },
    canCreate() {
      var i;
      if (this.field.create !== !1 && (i = this.$sdk.global) != null && i.create) {
        var e = this.field.referenceType, t = e, n = this.glossary[this.field.referenceType];
        return n && (e = n.definesType || n.key, t = n.key || n.definesType), this.user && this.$sdk.access.canCreate(this.user, t, e);
      }
    },
    summary() {
      if (this.multiValue)
        if (this.model && this.model.length) {
          var e = this.model.length;
          if (!this.showList)
            return e === 1 ? this.model[0].title || this.model[0].name || this.model[0].firstName : `${e} selected`;
          var t = Math.max(e - 3, 0), n, i = this.model.slice(0, 3);
          return n = i.map(function(s) {
            return s.firstName || s.name || s.title;
          }).join(", "), t && (n = `${n}... +${t} more...`), n || "Click to select";
        } else
          return "Click to select";
      else
        return this.model ? this.showList ? "Click to select" : this.model.title || this.model.name || this.model.firstName : "Click to select";
    }
  }
}, Og = {
  key: 0,
  class: "ux-field-title"
}, Vg = {
  key: 0,
  class: "ux-required-marker"
}, Ag = {
  key: 1,
  class: "ux-field-description"
}, Cg = {
  key: 1,
  class: "items"
};
function Eg(e, t, n, i, s, r) {
  const l = y("ux-icon"), a = y("ux-button"), u = y("item"), c = y("draggable"), f = y("flex-cell"), p = y("flex-spacer"), g = y("flex-row");
  return o(), d(w, null, [
    e.showLabel ? (o(), d("label", Og, [
      S(b(e.label) + " ", 1),
      e.required ? (o(), d("span", Vg, "*")) : _("", !0)
    ])) : _("", !0),
    e.showDescription ? (o(), d("div", Ag, b(e.description), 1)) : _("", !0),
    r.showList ? (o(), d(w, { key: 2 }, [
      e.multiValue ? (o(), d(w, { key: 0 }, [
        e.model && e.model.length ? (o(), k(c, {
          key: 0,
          class: "items",
          modelValue: e.model,
          "onUpdate:modelValue": t[1] || (t[1] = (v) => e.model = v)
        }, {
          item: m(({ element: v, index: T }) => [
            (o(), k(u, {
              key: v._id,
              item: v
            }, {
              actions: m(() => [
                e.$actions ? (o(), k(a, {
                  key: 0,
                  icon: "",
                  onClick: t[0] || (t[0] = G((A) => e.$actions.open([e.model]), ["stop", "prevent"]))
                }, {
                  default: m(() => [
                    h(l, { icon: "fa-ellipsis" })
                  ]),
                  _: 1
                })) : _("", !0),
                r.canEdit(v) ? (o(), k(a, {
                  key: 1,
                  icon: "",
                  onClick: G((A) => r.edit(v), ["stop", "prevent"])
                }, {
                  default: m(() => [
                    h(l, { icon: "fa-pencil" })
                  ]),
                  _: 2
                }, 1032, ["onClick"])) : _("", !0),
                h(a, {
                  icon: "",
                  onClick: G((A) => e.remove(v), ["stop", "prevent"])
                }, {
                  default: m(() => [
                    h(l, { icon: "fa-times" })
                  ]),
                  _: 2
                }, 1032, ["onClick"])
              ]),
              _: 2
            }, 1032, ["item"]))
          ]),
          _: 1
        }, 8, ["modelValue"])) : _("", !0)
      ], 64)) : e.model ? (o(), d("div", Cg, [
        h(u, { item: e.model }, {
          actions: m(() => [
            e.$actions ? (o(), k(a, {
              key: 0,
              icon: "",
              onClick: t[2] || (t[2] = G((v) => e.$actions.open([e.model]), ["stop", "prevent"]))
            }, {
              default: m(() => [
                h(l, { icon: "fa-ellipsis" })
              ]),
              _: 1
            })) : _("", !0),
            r.canEdit(e.model) ? (o(), k(a, {
              key: 1,
              icon: "",
              onClick: t[3] || (t[3] = G((v) => r.edit(e.model), ["stop", "prevent"]))
            }, {
              default: m(() => [
                h(l, { icon: "fa-pencil" })
              ]),
              _: 1
            })) : _("", !0),
            h(a, {
              icon: "",
              onClick: G(r.clear, ["stop", "prevent"])
            }, {
              default: m(() => [
                h(l, { icon: "fa-times" })
              ]),
              _: 1
            }, 8, ["onClick"])
          ]),
          _: 1
        }, 8, ["item"])
      ])) : _("", !0)
    ], 64)) : _("", !0),
    r.canAdd ? (o(), k(g, {
      key: 3,
      gap: ""
    }, {
      default: m(() => [
        h(f, { shrink: "" }, {
          default: m(() => [
            h(a, { onClick: r.open }, {
              default: m(() => [
                S(b(r.summary), 1)
              ]),
              _: 1
            }, 8, ["onClick"])
          ]),
          _: 1
        }),
        r.canCreate ? (o(), k(f, {
          key: 0,
          shrink: ""
        }, {
          default: m(() => [
            h(a, {
              color: "primary",
              onClick: r.create
            }, {
              default: m(() => [
                S(" Create "),
                h(l, {
                  right: "",
                  icon: "fa-plus"
                })
              ]),
              _: 1
            }, 8, ["onClick"])
          ]),
          _: 1
        })) : _("", !0),
        h(p)
      ]),
      _: 1
    })) : _("", !0)
  ], 64);
}
const Ma = /* @__PURE__ */ V(Tg, [["render", Eg], ["__scopeId", "data-v-aaba4058"]]);
function Mg(e) {
  return e === void 0 || typeof e > "u" || e === null || String(e) === "null" || String(e) === "undefined";
}
const Ig = {
  props: {
    title: {
      type: String
    },
    modelValue: {
      // type: [Object, Array],
    }
  },
  mixins: [ie],
  async created() {
    this.model = this.model;
    var e = await this.$sdk.content.glossary(), t = e;
    this.field.basicTypes === !1 && (t = t.filter(function(n) {
      return !!n.definesType;
    })), this.field.definedTypes === !1 && (t = t.filter(function(n) {
      return !n.definesType;
    })), t = t.map(function(n) {
      return {
        title: n.title,
        value: n.key
      };
    }).sort((n, i) => n.title > i.title ? 1 : -1), this.types = t;
  },
  data() {
    return {
      types: []
    };
  },
  methods: {
    cleanOutput(e) {
      var t = this;
      return Mg(e) ? t.multiValue ? e = [] : e = void 0 : t.multiValue ? e = (e || []).filter(Boolean).map(function(n) {
        return t.getValue(n);
      }) : e = t.getValue(e), e;
    },
    cleanInput(e) {
      var t = this;
      if (t.multiValue)
        e || (e = []), Array.isArray(e) || (e = [e]), t.maximum && e.length > t.maximum && (e.length = t.maximum), e = e.filter(Boolean).map(function(i) {
          var s = t.getValue(i);
          return t.returnObject ? t.optionLookup[s] : s;
        });
      else {
        var n = t.getValue(e);
        e = t.returnObject ? t.optionLookup[n] : n;
      }
      return e;
    }
  },
  computed: {
    returnObject() {
      return !1;
    },
    classes() {
      var e = [];
      return this.multiValue ? e.push("multiple") : e.push("single"), e;
    },
    optionLookup() {
      var e = this;
      return e.types.reduce(function(t, n) {
        const i = e.getValue(n);
        return t[i] = n, t;
      }, {});
    },
    summary() {
      return this.model ? this.getLabel(this.optionLookup[this.model]) : this.title || "Click to select";
    },
    selectableOptions() {
      return this.types;
    }
  }
}, Dg = {
  key: 0,
  class: "ux-field-title"
}, Fg = {
  key: 0,
  class: "ux-required-marker"
}, $g = {
  key: 1,
  class: "ux-field-description"
}, Ng = {
  key: 2,
  class: "ui-select-button"
}, Lg = ["multiple"], Pg = {
  key: 0,
  value: ""
}, Ug = ["value"];
function jg(e, t, n, i, s, r) {
  const l = y("ux-button");
  return o(), d("div", {
    class: R(["native-select", r.classes])
  }, [
    e.showLabel ? (o(), d("label", Dg, [
      S(b(e.label) + " ", 1),
      e.required ? (o(), d("span", Fg, "*")) : _("", !0)
    ])) : _("", !0),
    e.showDescription ? (o(), d("div", $g, b(e.description), 1)) : _("", !0),
    e.singleValue ? (o(), d("div", Ng, [
      W(e.$slots, "default", {}, () => [
        h(l, { tag: "div" }, {
          default: m(() => [
            S(b(r.summary), 1)
          ]),
          _: 1
        })
      ], !0)
    ])) : _("", !0),
    Y(x("select", {
      onFocus: t[0] || (t[0] = (...a) => e.touch && e.touch(...a)),
      multiple: e.multiValue,
      "onUpdate:modelValue": t[1] || (t[1] = (a) => e.model = a)
    }, [
      e.singleValue && !e.minimum ? (o(), d("option", Pg, "None")) : _("", !0),
      (o(!0), d(w, null, L(r.selectableOptions, (a) => (o(), d("option", {
        value: a.value
      }, b(a.title), 9, Ug))), 256))
    ], 40, Lg), [
      [Mt, e.model]
    ])
  ], 2);
}
const Rg = /* @__PURE__ */ V(Ig, [["render", jg], ["__scopeId", "data-v-a366d321"]]);
const Bg = {
  props: {
    item: {
      type: Object
    },
    click: {
      type: Function
    }
  },
  methods: {
    clicked() {
      this.click(this.item);
    },
    toggleCollapse() {
      return this.item.collapsed = !this.collapsed;
    }
  },
  inject: ["isSelected"],
  computed: {
    selected() {
      return this.isSelected(this.item);
    },
    hasChildren() {
      var e;
      return (e = this.item.children) == null ? void 0 : e.length;
    },
    expanded() {
      return !this.collapsed;
    },
    collapsed() {
      return !this.hasChildren || this.item.collapsed;
    }
  }
}, zg = { class: "outer" }, Hg = {
  key: 0,
  class: "children"
};
function qg(e, t, n, i, s, r) {
  const l = y("ux-icon"), a = y("flex-cell"), u = y("ux-button"), c = y("flex-row"), f = y("scope-item", !0);
  return o(), d("div", zg, [
    x("div", {
      class: R(["scope-item", { selected: r.selected }]),
      onClick: t[1] || (t[1] = (...p) => r.clicked && r.clicked(...p))
    }, [
      h(c, {
        gap: "",
        vcenter: ""
      }, {
        default: m(() => [
          h(a, {
            class: "select-mark",
            shrink: ""
          }, {
            default: m(() => [
              h(l, {
                icon: r.selected ? "fa-check" : "fa-regular fa-circle"
              }, null, 8, ["icon"])
            ]),
            _: 1
          }),
          h(a, null, {
            default: m(() => [
              S(b(n.item.title), 1)
            ]),
            _: 1
          }),
          h(a, { shrink: "" }, {
            default: m(() => [
              x("div", {
                class: R({ hide: !r.hasChildren })
              }, [
                h(u, {
                  onClick: t[0] || (t[0] = G((p) => r.toggleCollapse(), ["stop", "prevent"])),
                  size: "xs",
                  icon: ""
                }, {
                  default: m(() => [
                    h(l, {
                      icon: r.expanded ? "fa-angle-up" : "fa-angle-down"
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                })
              ], 2)
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ], 2),
    r.expanded ? (o(), d("div", Hg, [
      (o(!0), d(w, null, L(n.item.children, (p) => (o(), k(f, {
        click: n.click,
        item: p
      }, null, 8, ["click", "item"]))), 256))
    ])) : _("", !0)
  ]);
}
const Gg = /* @__PURE__ */ V(Bg, [["render", qg], ["__scopeId", "data-v-2f79c449"]]);
let Kr;
const Wg = {
  components: {
    ScopeItem: Gg
  },
  async created() {
    this.glossary = await this.$sdk.content.glossary({ hash: !0 });
  },
  props: {
    action: {
      type: String
    },
    type: {
      type: String,
      required: !0
    },
    modelValue: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      loading: !0,
      glossary: {},
      model: this.modelValue,
      scopes: []
    };
  },
  methods: {
    select(e) {
      this.isSelected(e) || this.model.push(e);
    },
    deselect(e) {
      const t = this, n = t.$sdk.utils.id(e);
      t.isSelected(e) && (t.model = t.model.filter(function(i) {
        return t.$sdk.utils.id(i) != n;
      }));
    },
    isSelected(e) {
      const t = this.$sdk.utils.id(e);
      return this.hash[t];
    },
    toggle(e) {
      this.isSelected(e) ? this.deselect(e) : this.select(e);
    },
    click(e) {
      this.toggle(e);
    },
    async checkLoad() {
      Kr || (Kr = !0, this.action && this.type ? this.scopes = await this.loadScopes() : console.log("missing action or type", this.action, this.type), Kr = !1);
    },
    async loadScopes() {
      this.loading = !0;
      const { data: e } = await this.$sdk.api.post("/scope/actionable", {
        action: this.action,
        type: this.type
      });
      return this.loading = !1, e;
    },
    async showModal() {
      const e = this, t = {};
      await e.$sdk.modal({
        component: ScopeSelectModal,
        options: t
      });
    }
  },
  provide() {
    return {
      isSelected: this.isSelected
    };
  },
  computed: {
    hasSelection() {
      return this.model.length;
    },
    hash() {
      return this.model.reduce(function(e, t) {
        return e[t._id || t] = !0, e;
      }, {});
    },
    empty() {
      return !this.model.length;
    },
    summary() {
      const e = this;
      return e.model.length ? e.model.map(function(t) {
        return t.title;
      }).join(", ") : "Select Scopes";
    }
  },
  watch: {
    type: {
      handler() {
        this.checkLoad();
      },
      immediate: !0
    },
    action: {
      handler() {
        this.checkLoad();
      },
      immediate: !0
    },
    modelValue(e) {
      this.model = e;
    },
    model(e) {
      this.$emit("update:modelValue", e);
    }
  }
};
function Zg(e, t, n, i, s, r) {
  const l = y("spinner"), a = y("scope-item");
  return o(), d("div", {
    class: R({ has: r.hasSelection })
  }, [
    s.loading ? (o(), k(l, { key: 0 })) : (o(!0), d(w, { key: 1 }, L(s.scopes, (u) => (o(), k(a, {
      click: r.click,
      item: u
    }, null, 8, ["click", "item"]))), 256))
  ], 2);
}
const Kg = /* @__PURE__ */ V(Wg, [["render", Zg], ["__scopeId", "data-v-5472184b"]]);
const Yg = {
  async created() {
    this.scopeGlossary = await this.$sdk.content.scopeGlossary({ hash: !0 });
  },
  props: {
    action: {
      type: String
    },
    type: {
      type: String
    },
    modelValue: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      scopeGlossary: {},
      loading: !0,
      model: this.modelValue,
      definition: null
    };
  },
  methods: {
    async openSelection() {
      const e = this, t = await e.$sdk.selectScopes({
        action: e.action,
        type: e.type,
        model: e.model
      });
      e.model = t;
    }
  },
  computed: {
    cacheKey() {
      return this.user.cacheKey;
    },
    empty() {
      return !this.model.length;
    },
    summary() {
      const e = this;
      return e.model.length ? e.model.map(function(t) {
        const n = t._id || t;
        return (e.scopeGlossary[n] || t).title || "(redacted)";
      }).join(", ") : "Select Scopes";
    },
    definitionDefaultScopes() {
      var e;
      return ((e = this.definition) == null ? void 0 : e.defaultScopes) || [];
    },
    definitionRestrictScopes() {
      var e;
      return ((e = this.definition) == null ? void 0 : e.restrictScopes) || [];
    },
    restrictedLookup() {
      return this.definitionRestrictScopes.reduce(function(e, t) {
        if (!t)
          return e;
        var n = t._id || t;
        return e[n] = n, e;
      }, {});
    },
    availableDefaultScopes() {
      const e = this;
      let t;
      return e.definitionRestrictScopes.length ? (t = e.definitionDefaultScopes.filter(function(n) {
        if (!n)
          return !1;
        var i = n._id || n;
        return e.restrictedLookup[i];
      }), !t.length && e.definitionRestrictScopes.length === 1 && (t = e.definitionRestrictScopes), t) : e.definitionDefaultScopes;
    }
  },
  watch: {
    availableDefaultScopes: {
      handler(e) {
        !this.model.length && e.length && (this.model = [...e]);
      },
      immediate: !0
    },
    modelValue(e) {
      this.model = e;
    },
    model(e) {
      this.$emit("update:modelValue", e);
    },
    type: {
      async handler(e) {
        const t = this, n = await this.$sdk.content.glossary({ hash: !0 });
        t.definition = n[e];
      },
      immediate: !0
    }
  }
};
function Jg(e, t, n, i, s, r) {
  const l = y("ux-button");
  return o(), d("div", null, [
    h(l, { onClick: r.openSelection }, {
      default: m(() => [
        x("span", {
          class: R({ "empty-text": r.empty })
        }, b(r.summary), 3)
      ]),
      _: 1
    }, 8, ["onClick"])
  ]);
}
const Xg = /* @__PURE__ */ V(Yg, [["render", Jg], ["__scopeId", "data-v-b0704bf6"]]);
function Qg(e) {
  return e === void 0 || typeof e > "u" || e === null || String(e) === "null" || String(e) === "undefined";
}
const ev = {
  components: {
    ScopeSelectButton: Xg
  },
  props: {
    title: {
      type: String
    },
    modelValue: {
      // type: [Object, Array],
    }
  },
  mixins: [ie],
  async created() {
    this.model = this.model;
    var e = await this.$sdk.content.glossary(), t = e;
    this.field.basicTypes === !1 && (t = t.filter(function(n) {
      return !!n.definesType;
    })), this.field.definedTypes === !1 && (t = t.filter(function(n) {
      return !n.definesType;
    })), t = t.map(function(n) {
      return {
        title: n.title,
        value: n.key
      };
    }).sort((n, i) => n.title > i.title ? 1 : -1), this.types = t;
  },
  data() {
    return {
      types: []
    };
  },
  methods: {
    cleanOutput(e) {
      var t = this;
      return Qg(e) ? t.multiValue ? e = [] : e = void 0 : t.multiValue ? e = (e || []).filter(Boolean).map(function(n) {
        return t.getValue(n);
      }) : e = t.getValue(e), e;
    },
    cleanInput(e) {
      var t = this;
      if (t.multiValue)
        e || (e = []), Array.isArray(e) || (e = [e]), t.maximum && e.length > t.maximum && (e.length = t.maximum), e = e.filter(Boolean).map(function(i) {
          var s = t.getValue(i);
          return t.returnObject ? t.optionLookup[s] : s;
        });
      else {
        var n = t.getValue(e);
        e = t.returnObject ? t.optionLookup[n] : n;
      }
      return e;
    }
  },
  computed: {
    returnObject() {
      return !1;
    },
    classes() {
      var e = [];
      return this.multiValue ? e.push("multiple") : e.push("single"), e;
    },
    optionLookup() {
      var e = this;
      return e.types.reduce(function(t, n) {
        const i = e.getValue(n);
        return t[i] = n, t;
      }, {});
    },
    summary() {
      return this.model ? this.getLabel(this.optionLookup[this.model]) : this.title || "Click to select";
    },
    contextReferenceType() {
      return this.field.contextReferenceType;
    },
    contextReferenceAction() {
      return this.field.contextReferenceAction;
    },
    selectableOptions() {
      return this.types;
    }
  }
}, tv = {
  key: 0,
  class: "ux-field-title"
}, nv = {
  key: 0,
  class: "ux-required-marker"
}, rv = {
  key: 1,
  class: "ux-field-description"
};
function iv(e, t, n, i, s, r) {
  const l = y("scope-select-button");
  return o(), d("div", {
    class: R(["scope-select", r.classes])
  }, [
    e.showLabel ? (o(), d("label", tv, [
      S(b(e.label) + " ", 1),
      e.required ? (o(), d("span", nv, "*")) : _("", !0)
    ])) : _("", !0),
    e.showDescription ? (o(), d("div", rv, b(e.description), 1)) : _("", !0),
    h(l, {
      type: r.contextReferenceType,
      action: r.contextReferenceAction,
      modelValue: e.model,
      "onUpdate:modelValue": t[0] || (t[0] = (a) => e.model = a)
    }, null, 8, ["type", "action", "modelValue"])
  ], 2);
}
const sv = /* @__PURE__ */ V(ev, [["render", iv], ["__scopeId", "data-v-79e23811"]]);
function lv(e) {
  return e === void 0 || typeof e > "u" || e === null || String(e) === "null" || String(e) === "undefined";
}
const av = {
  props: {
    title: {
      type: String
    },
    modelValue: {
      // type: [Object, Array],
    }
  },
  mixins: [ie],
  async created() {
    this.model = this.model;
  },
  watch: {
    referenceType: {
      async handler(e) {
        const t = this, n = await this.$sdk.content.glossary({ hash: !0 });
        t.definition = n[e];
      },
      immediate: !0
    }
  },
  data() {
    return {
      types: [],
      definition: null
    };
  },
  methods: {
    cleanOutput(e) {
      var t = this;
      return lv(e) ? t.multiValue ? e = [] : e = void 0 : t.multiValue ? e = (e || []).filter(Boolean).map(function(n) {
        return t.getValue(n);
      }) : e = t.getValue(e), e;
    },
    cleanInput(e) {
      var t = this;
      if (t.multiValue)
        e || (e = []), Array.isArray(e) || (e = [e]), t.maximum && e.length > t.maximum && (e.length = t.maximum), e = e.filter(Boolean).map(function(i) {
          var s = t.getValue(i);
          return t.returnObject ? t.optionLookup[s] : s;
        });
      else {
        var n = t.getValue(e);
        e = t.returnObject ? t.optionLookup[n] : n;
      }
      return e;
    }
  },
  computed: {
    fields() {
      const e = this;
      if (!e.definition)
        return [];
      const t = e.definition.definesType === "submission";
      var n = [...e.definition.fields], i = e.definition.definedFields || [];
      if (i.length)
        if (t) {
          var s = {
            title: "Form Data",
            minimum: 1,
            maximum: 1,
            key: "formData",
            asObject: !0,
            type: "group",
            fields: i
          };
          n.push(s);
          var r = {
            title: "Data",
            minimum: 1,
            maximum: 1,
            key: "data",
            asObject: !0,
            type: "group",
            fields: i.map(function(u) {
              return u.type === "reference" && (u = JSON.parse(JSON.stringify(u)), delete u.fields), u;
            })
          };
          n.push(r);
        } else {
          var r = {
            title: `${e.definition.title}`,
            minimum: 1,
            maximum: 1,
            key: "data",
            asObject: !0,
            type: "group",
            fields: i
          };
          n.push(r);
        }
      var l = e.$sdk.utils.mapFields(n).filter(function(a) {
        var u = a.type == "group" && a.asObject && a.minimum == 1 && a.maximum == 1;
        return !u;
      }).map(function(a) {
        return a.title = a.titles.join(" > "), a;
      }).sort(function(a, u) {
        return a.title < u.title ? -1 : 1;
      });
      return l;
    },
    fieldOptions() {
      return this.fields.map(function(t) {
        return {
          title: t.title,
          value: t.path
        };
      });
    },
    referenceType() {
      return this.field.referenceType;
    },
    returnObject() {
      return !1;
    },
    classes() {
      var e = [];
      return this.multiValue ? e.push("multiple") : e.push("single"), e;
    },
    optionLookup() {
      var e = this;
      return e.fieldOptions.reduce(function(t, n) {
        const i = e.getValue(n);
        return t[i] = n, t;
      }, {});
    },
    summary() {
      return this.model ? this.getLabel(this.optionLookup[this.model]) : this.title || "Click to select";
    },
    selectableOptions() {
      return this.fieldOptions;
    }
  }
}, ov = {
  key: 0,
  class: "ux-field-title"
}, uv = {
  key: 0,
  class: "ux-required-marker"
}, dv = {
  key: 1,
  class: "ux-field-description"
}, cv = {
  key: 2,
  class: "ui-select-button"
}, fv = ["multiple"], mv = {
  key: 0,
  value: ""
}, hv = ["value"];
function pv(e, t, n, i, s, r) {
  const l = y("ux-button");
  return o(), d("div", {
    class: R(["native-select", r.classes])
  }, [
    e.showLabel ? (o(), d("label", ov, [
      S(b(e.label) + " ", 1),
      e.required ? (o(), d("span", uv, "*")) : _("", !0)
    ])) : _("", !0),
    e.showDescription ? (o(), d("div", dv, b(e.description), 1)) : _("", !0),
    e.singleValue ? (o(), d("div", cv, [
      W(e.$slots, "default", {}, () => [
        h(l, { tag: "div" }, {
          default: m(() => [
            S(b(r.summary), 1)
          ]),
          _: 1
        })
      ], !0)
    ])) : _("", !0),
    Y(x("select", {
      onFocus: t[0] || (t[0] = (...a) => e.touch && e.touch(...a)),
      multiple: e.multiValue,
      "onUpdate:modelValue": t[1] || (t[1] = (a) => e.model = a)
    }, [
      e.singleValue && !e.minimum ? (o(), d("option", mv, "None")) : _("", !0),
      (o(!0), d(w, null, L(r.selectableOptions, (a) => (o(), d("option", {
        value: a.value
      }, b(a.title), 9, hv))), 256))
    ], 40, fv), [
      [Mt, e.model]
    ])
  ], 2);
}
const yv = /* @__PURE__ */ V(av, [["render", pv], ["__scopeId", "data-v-c1a334da"]]);
const _v = {
  props: {
    modelValue: {
      type: [String, Array]
    }
  },
  mixins: [ie],
  methods: {
    update(e, t) {
      var n = this.format(e.target.value);
      this.model[t] = n;
    },
    format(t) {
      t = String(t).replace(/[^0-9.-]/g, "");
      var t = parseFloat(t) * 100;
      return isNaN(t) ? "" : (t = Math.round(t), t);
    },
    unformat(t) {
      t = String(t).replace(/[^0-9.-]/g, "");
      var t = parseFloat(t) / 100;
      return isNaN(t) ? "" : (t = t.toFixed(2), t);
    },
    getNewDefaultEntry() {
      return "";
    },
    unfocus() {
      this.$refs.input.blur(), this.touch();
    }
  },
  computed: {
    model: {
      get() {
        return this.cleanOutput(this.value);
      },
      set(e) {
        this.value = this.cleanInput(e), this.dispatch();
      }
    },
    proxy: {
      get() {
        var e = this;
        return e.multiValue ? e.model.map(e.unformat) : e.unformat(e.model);
      },
      set(e) {
        var t = this;
        t.multiValue ? t.model = e.map(t.format) : t.model = t.format(e);
      }
    },
    currency() {
      return String(this.field.currency || "usd").toLowerCase();
    },
    prefix() {
      return this.$sdk.utils.currencySymbol(this.currency);
    },
    suffix() {
      return String(this.currency).toUpperCase();
    }
  }
}, gv = {
  key: 0,
  class: "ux-field-title"
}, vv = {
  key: 0,
  class: "ux-required-marker"
}, bv = {
  key: 1,
  class: "ux-field-description"
}, kv = { key: 2 }, xv = {
  key: 0,
  class: "ux-text-prefix"
}, wv = ["onBlur", "onUpdate:modelValue"], Sv = {
  key: 1,
  class: "ux-text-suffix"
}, Tv = {
  key: 0,
  class: "ux-text-prefix"
}, Ov = {
  key: 1,
  class: "ux-text-suffix"
};
function Vv(e, t, n, i, s, r) {
  const l = y("flex-cell"), a = y("ux-icon"), u = y("ux-button"), c = y("flex-row");
  return o(), d(w, null, [
    e.showLabel ? (o(), d("label", gv, [
      S(b(e.label) + " ", 1),
      e.required ? (o(), d("span", vv, "*")) : _("", !0)
    ])) : _("", !0),
    e.showDescription ? (o(), d("div", bv, b(e.description), 1)) : _("", !0),
    e.multiValue ? (o(), d("div", kv, [
      (o(!0), d(w, null, L(r.model, (f, p) => (o(), k(c, {
        class: "ux-text-row",
        key: p
      }, {
        default: m(() => [
          h(l, null, {
            default: m(() => [
              x("div", {
                class: R(["ux-text-wrap", { prefixed: r.prefix, suffixed: r.suffix }])
              }, [
                r.prefix ? (o(), d("span", xv, b(r.prefix), 1)) : _("", !0),
                Y((o(), d("input", {
                  class: "ux-field-focus ux-text-input-multiple",
                  ref_for: !0,
                  ref: "input",
                  placeholder: "0.00",
                  key: `proxy-index-${p}`,
                  onKeydown: t[0] || (t[0] = ve(G((g) => e.add(), ["stop", "prevent"]), ["enter"])),
                  onBlur: (g) => r.update(g, p),
                  "onUpdate:modelValue": (g) => r.proxy[p] = g,
                  onFocus: t[1] || (t[1] = (...g) => e.touch && e.touch(...g))
                }, null, 40, wv)), [
                  [
                    ge,
                    r.proxy[p],
                    void 0,
                    { lazy: !0 }
                  ]
                ]),
                r.suffix ? (o(), d("span", Sv, b(r.suffix), 1)) : _("", !0)
              ], 2)
            ]),
            _: 2
          }, 1024),
          h(l, {
            shrink: "",
            vcenter: ""
          }, {
            default: m(() => [
              e.canRemoveValue ? (o(), k(u, {
                key: 0,
                tag: "a",
                icon: "",
                onClick: (g) => e.remove(f)
              }, {
                default: m(() => [
                  h(a, { icon: "fa-times" })
                ]),
                _: 2
              }, 1032, ["onClick"])) : _("", !0)
            ]),
            _: 2
          }, 1024)
        ]),
        _: 2
      }, 1024))), 128)),
      e.canAddValue ? (o(), k(u, {
        key: 0,
        onClick: t[2] || (t[2] = (f) => e.add())
      }, {
        default: m(() => [
          S(b(e.addLabel) + " ", 1),
          h(a, {
            icon: "fa-plus",
            right: ""
          })
        ]),
        _: 1
      })) : _("", !0)
    ])) : (o(), d("div", {
      key: 3,
      class: R(["ux-text-wrap", { prefixed: r.prefix, suffixed: r.suffix }])
    }, [
      r.prefix ? (o(), d("span", Tv, b(r.prefix), 1)) : _("", !0),
      Y((o(), d("input", {
        class: "ux-field-focus ux-text-input-single",
        ref: "input",
        key: r.proxy,
        placeholder: "0.00",
        onKeyup: t[3] || (t[3] = ve(G((...f) => r.unfocus && r.unfocus(...f), ["stop", "prevent"]), ["enter"])),
        onFocus: t[4] || (t[4] = (...f) => e.touch && e.touch(...f)),
        "onUpdate:modelValue": t[5] || (t[5] = (f) => r.proxy = f)
      }, null, 32)), [
        [
          ge,
          r.proxy,
          void 0,
          { lazy: !0 }
        ]
      ]),
      r.suffix ? (o(), d("span", Ov, b(r.suffix), 1)) : _("", !0)
    ], 2))
  ], 64);
}
const Ia = /* @__PURE__ */ V(_v, [["render", Vv], ["__scopeId", "data-v-8204c7cd"]]);
const Av = {
  props: {
    modelValue: {
      type: [String, Array]
    }
  },
  mixins: [ie],
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
          return !0;
      }
    },
    actualPlaceholder() {
      if (this.field.placeholder)
        return this.field.placeholder;
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
    cleanOutputValue(e) {
      var t = this.cleanTextInput(e, this.type, this);
      return t ? String(t) : "";
    },
    cleanInputValue(e) {
      return this.cleanTextInput(e, this.type, this);
    },
    getNewDefaultEntry() {
      return "";
    }
  }
}, Cv = {
  key: 0,
  class: "ux-field-title"
}, Ev = {
  key: 0,
  class: "ux-required-marker"
}, Mv = {
  key: 1,
  class: "ux-field-description"
}, Iv = { key: 2 }, Dv = { class: "ux-text-wrap" }, Fv = {
  key: 0,
  class: "ux-text-prefix"
}, $v = ["type", "placeholder", "onUpdate:modelValue"], Nv = ["type", "placeholder", "onUpdate:modelValue"], Lv = {
  key: 3,
  class: "ux-text-suffix"
}, Pv = {
  key: 3,
  class: "ux-text-wrap"
}, Uv = {
  key: 0,
  class: "ux-text-prefix"
}, jv = ["type", "placeholder"], Rv = ["type", "placeholder"], Bv = {
  key: 3,
  class: "ux-text-suffix"
};
function zv(e, t, n, i, s, r) {
  const l = y("flex-cell"), a = y("ux-icon"), u = y("ux-button"), c = y("flex-row");
  return o(), d(w, null, [
    e.showLabel ? (o(), d("label", Cv, [
      S(b(e.label) + " ", 1),
      e.required ? (o(), d("span", Ev, "*")) : _("", !0)
    ])) : _("", !0),
    e.showDescription ? (o(), d("div", Mv, b(e.description), 1)) : _("", !0),
    e.multiValue ? (o(), d("div", Iv, [
      (o(!0), d(w, null, L(e.model, (f, p) => (o(), k(c, {
        class: "ux-text-row",
        key: p
      }, {
        default: m(() => [
          h(l, null, {
            default: m(() => [
              x("div", Dv, [
                e.prefix ? (o(), d("span", Fv, b(e.prefix), 1)) : _("", !0),
                r.lazy ? Y((o(), d("input", {
                  key: 1,
                  type: r.inputType,
                  class: "ux-field-focus ux-text-input-multiple",
                  placeholder: r.actualPlaceholder,
                  onFocus: t[0] || (t[0] = (...g) => e.touch && e.touch(...g)),
                  ref_for: !0,
                  ref: "input",
                  onKeydown: t[1] || (t[1] = ve(G((g) => e.add(), ["stop", "prevent"]), ["enter"])),
                  "onUpdate:modelValue": (g) => e.model[p] = g
                }, null, 40, $v)), [
                  [
                    Ln,
                    e.model[p],
                    void 0,
                    { lazy: !0 }
                  ]
                ]) : _("", !0),
                r.lazy ? _("", !0) : Y((o(), d("input", {
                  key: 2,
                  type: r.inputType,
                  class: "ux-field-focus ux-text-input-multiple",
                  placeholder: r.actualPlaceholder,
                  onFocus: t[2] || (t[2] = (...g) => e.touch && e.touch(...g)),
                  ref_for: !0,
                  ref: "input",
                  onKeydown: t[3] || (t[3] = ve(G((g) => e.add(), ["stop", "prevent"]), ["enter"])),
                  "onUpdate:modelValue": (g) => e.model[p] = g
                }, null, 40, Nv)), [
                  [Ln, e.model[p]]
                ]),
                e.suffix ? (o(), d("span", Lv, b(e.suffix), 1)) : _("", !0)
              ])
            ]),
            _: 2
          }, 1024),
          h(l, {
            shrink: "",
            vcenter: ""
          }, {
            default: m(() => [
              e.canRemoveValue ? (o(), k(u, {
                key: 0,
                tag: "a",
                icon: "",
                onClick: (g) => e.remove(f)
              }, {
                default: m(() => [
                  h(a, { icon: "fa-times" })
                ]),
                _: 2
              }, 1032, ["onClick"])) : _("", !0)
            ]),
            _: 2
          }, 1024)
        ]),
        _: 2
      }, 1024))), 128)),
      e.canAddValue ? (o(), k(u, {
        key: 0,
        onClick: t[4] || (t[4] = (f) => e.add())
      }, {
        default: m(() => [
          S(b(e.addLabel) + " ", 1),
          h(a, {
            icon: "fa-plus",
            right: ""
          })
        ]),
        _: 1
      })) : _("", !0)
    ])) : (o(), d("div", Pv, [
      e.prefix ? (o(), d("span", Uv, b(e.prefix), 1)) : _("", !0),
      r.lazy ? Y((o(), d("input", {
        key: 1,
        type: r.inputType,
        ref: "input",
        class: "ux-field-focus ux-text-input-single",
        placeholder: r.actualPlaceholder,
        onFocus: t[5] || (t[5] = (...f) => e.touch && e.touch(...f)),
        "onUpdate:modelValue": t[6] || (t[6] = (f) => e.model = f)
      }, null, 40, jv)), [
        [
          Ln,
          e.model,
          void 0,
          { lazy: !0 }
        ]
      ]) : _("", !0),
      r.lazy ? _("", !0) : Y((o(), d("input", {
        key: 2,
        type: r.inputType,
        ref: "input",
        class: "ux-field-focus ux-text-input-single",
        placeholder: r.actualPlaceholder,
        onFocus: t[7] || (t[7] = (...f) => e.touch && e.touch(...f)),
        "onUpdate:modelValue": t[8] || (t[8] = (f) => e.model = f)
      }, null, 40, Rv)), [
        [Ln, e.model]
      ]),
      e.suffix ? (o(), d("span", Bv, b(e.suffix), 1)) : _("", !0)
    ]))
  ], 64);
}
const Da = /* @__PURE__ */ V(Av, [["render", zv], ["__scopeId", "data-v-cfe01657"]]);
const Hv = {
  props: {
    modelValue: {
      type: [String, Array]
    }
  },
  mixins: [ie],
  methods: {
    getNewDefaultEntry() {
      return "";
    }
  }
}, qv = {
  key: 0,
  class: "ux-field-title"
}, Gv = {
  key: 0,
  class: "ux-required-marker"
}, Wv = {
  key: 1,
  class: "ux-field-description"
}, Zv = { key: 2 }, Kv = ["onUpdate:modelValue"];
function Yv(e, t, n, i, s, r) {
  const l = y("flex-cell"), a = y("ux-icon"), u = y("ux-button"), c = y("flex-row");
  return o(), d(w, null, [
    e.showLabel ? (o(), d("label", qv, [
      S(b(e.label) + " ", 1),
      e.required ? (o(), d("span", Gv, "*")) : _("", !0)
    ])) : _("", !0),
    e.showDescription ? (o(), d("div", Wv, b(e.description), 1)) : _("", !0),
    e.multiValue ? (o(), d("div", Zv, [
      (o(!0), d(w, null, L(e.model, (f, p) => (o(), k(c, {
        class: "ux-text-row",
        key: p
      }, {
        default: m(() => [
          h(l, null, {
            default: m(() => [
              Y(x("textarea", {
                contenteditable: "",
                onFocus: t[0] || (t[0] = (...g) => e.touch && e.touch(...g)),
                ref_for: !0,
                ref: "input",
                "onUpdate:modelValue": (g) => e.model[p] = g,
                class: "ux-textarea ux-field-focus ux-text-area-multiple"
              }, null, 40, Kv), [
                [ge, e.model[p]]
              ])
            ]),
            _: 2
          }, 1024),
          h(l, {
            shrink: "",
            vcenter: ""
          }, {
            default: m(() => [
              e.canRemoveValue ? (o(), k(u, {
                key: 0,
                tag: "a",
                icon: "",
                onClick: (g) => e.remove(f)
              }, {
                default: m(() => [
                  h(a, { icon: "fa-times" })
                ]),
                _: 2
              }, 1032, ["onClick"])) : _("", !0)
            ]),
            _: 2
          }, 1024)
        ]),
        _: 2
      }, 1024))), 128)),
      e.canAddValue ? (o(), k(u, {
        key: 0,
        onClick: t[1] || (t[1] = (f) => e.add())
      }, {
        default: m(() => [
          S(b(e.addLabel), 1)
        ]),
        _: 1
      })) : _("", !0)
    ])) : Y((o(), d("textarea", {
      key: 3,
      class: "ux-textarea ux-field-focus ux-text-area-single",
      onFocus: t[2] || (t[2] = (...f) => e.touch && e.touch(...f)),
      "onUpdate:modelValue": t[3] || (t[3] = (f) => e.model = f),
      role: "textbox",
      contenteditable: ""
    }, null, 544)), [
      [ge, e.model]
    ])
  ], 64);
}
const Jv = /* @__PURE__ */ V(Hv, [["render", Yv], ["__scopeId", "data-v-03a618d3"]]);
function Kn(e) {
  return String(e).length < 2 && (e = `0${e}`), e;
}
const Xv = {
  props: {
    modelValue: {
      type: [Date, String, Array]
    }
  },
  mixins: [ie],
  computed: {
    model: {
      get() {
        return this.cleanOutput(this.value);
      },
      set(e) {
        if (!e) {
          this.value = void 0, this.dispatch();
          return;
        }
        if (e !== "invalid") {
          var t = this.cleanOutput(e), n = this.cleanOutput(this.value);
          t != n && (e = this.cleanInput(t), this.value = e, this.dispatch());
        }
      }
    }
  },
  methods: {
    cleanOutputValue(e) {
      return e = e ? new Date(e) : new Date(), `${e.getFullYear()}-${Kn(e.getMonth() + 1)}-${Kn(e.getDate())}T${Kn(e.getHours())}:${Kn(e.getMinutes())}`;
    },
    cleanInputValue(e) {
      let t = new Date(e);
      return t.toString() == "Invalid Date" ? "invalid" : t.toISOString();
    },
    getNewDefaultEntry() {
      return new Date();
    }
  }
}, Qv = {
  key: 0,
  class: "ux-field-title"
}, eb = {
  key: 0,
  class: "ux-required-marker"
}, tb = {
  key: 1,
  class: "ux-field-description"
}, nb = { key: 2 }, rb = ["onUpdate:modelValue"];
function ib(e, t, n, i, s, r) {
  const l = y("flex-cell"), a = y("ux-icon"), u = y("ux-button"), c = y("flex-row");
  return o(), d(w, null, [
    e.showLabel ? (o(), d("label", Qv, [
      S(b(e.label) + " ", 1),
      e.required ? (o(), d("span", eb, "*")) : _("", !0)
    ])) : _("", !0),
    e.showDescription ? (o(), d("div", tb, b(e.description), 1)) : _("", !0),
    e.multiValue ? (o(), d("div", nb, [
      (o(!0), d(w, null, L(r.model, (f, p) => (o(), k(c, {
        class: "ux-text-row",
        key: p
      }, {
        default: m(() => [
          h(l, null, {
            default: m(() => [
              Y(x("input", {
                type: "datetime-local",
                class: "ux-field-focus ux-text-input-multiple",
                onFocus: t[0] || (t[0] = (...g) => e.touch && e.touch(...g)),
                ref_for: !0,
                ref: "input",
                onKeydown: t[1] || (t[1] = ve(G((g) => e.add(), ["stop", "prevent"]), ["enter"])),
                "onUpdate:modelValue": (g) => r.model[p] = g
              }, null, 40, rb), [
                [ge, r.model[p]]
              ])
            ]),
            _: 2
          }, 1024),
          h(l, {
            shrink: "",
            vcenter: ""
          }, {
            default: m(() => [
              e.canRemoveValue ? (o(), k(u, {
                key: 0,
                tag: "a",
                icon: "",
                onClick: (g) => e.remove(f)
              }, {
                default: m(() => [
                  h(a, { icon: "fa-times" })
                ]),
                _: 2
              }, 1032, ["onClick"])) : _("", !0)
            ]),
            _: 2
          }, 1024)
        ]),
        _: 2
      }, 1024))), 128)),
      e.canAddValue ? (o(), k(u, {
        key: 0,
        onClick: t[2] || (t[2] = (f) => e.add())
      }, {
        default: m(() => [
          S(b(e.addLabel), 1)
        ]),
        _: 1
      })) : _("", !0)
    ])) : Y((o(), d("input", {
      key: 3,
      type: "datetime-local",
      class: "ux-field-focus ux-text-input-single",
      onFocus: t[3] || (t[3] = (...f) => e.touch && e.touch(...f)),
      "onUpdate:modelValue": t[4] || (t[4] = (f) => r.model = f)
    }, null, 544)), [
      [ge, r.model]
    ])
  ], 64);
}
const Fa = /* @__PURE__ */ V(Xv, [["render", ib], ["__scopeId", "data-v-e0c57de2"]]);
const sb = {
  components: {
    Daterange: t_
  },
  props: {
    modelValue: {
      type: [Object, Array]
    }
  },
  mixins: [ie],
  computed: {
    model: {
      get() {
        return this.cleanOutput(this.value);
      },
      set(e) {
        if (!e) {
          this.value = void 0, this.dispatch();
          return;
        }
        var t = this.cleanOutput(e), n = this.cleanOutput(this.value);
        t != n && (e = this.cleanInput(t), this.value = e, this.dispatch());
      }
    }
  },
  methods: {
    cleanOutputValue(e) {
      return e;
    },
    cleanInputValue(e) {
      return e;
    },
    getNewDefaultEntry() {
      return {};
    }
  }
}, lb = {
  key: 0,
  class: "ux-field-title"
}, ab = {
  key: 0,
  class: "ux-required-marker"
}, ob = {
  key: 1,
  class: "ux-field-description"
}, ub = { key: 2 };
function db(e, t, n, i, s, r) {
  const l = y("daterange", !0), a = y("flex-cell"), u = y("ux-icon"), c = y("ux-button"), f = y("flex-row");
  return o(), d(w, null, [
    e.showLabel ? (o(), d("label", lb, [
      S(b(e.label) + " ", 1),
      e.required ? (o(), d("span", ab, "*")) : _("", !0)
    ])) : _("", !0),
    e.showDescription ? (o(), d("div", ob, b(e.description), 1)) : _("", !0),
    e.multiValue ? (o(), d("div", ub, [
      (o(!0), d(w, null, L(r.model, (p, g) => (o(), k(f, {
        class: "ux-text-row",
        key: g
      }, {
        default: m(() => [
          h(a, null, {
            default: m(() => [
              h(l, {
                onFocus: e.touch,
                modelValue: r.model[g],
                "onUpdate:modelValue": (v) => r.model[g] = v
              }, null, 8, ["onFocus", "modelValue", "onUpdate:modelValue"])
            ]),
            _: 2
          }, 1024),
          h(a, {
            shrink: "",
            vcenter: ""
          }, {
            default: m(() => [
              e.canRemoveValue ? (o(), k(c, {
                key: 0,
                tag: "a",
                icon: "",
                onClick: (v) => e.remove(p)
              }, {
                default: m(() => [
                  h(u, { icon: "fa-times" })
                ]),
                _: 2
              }, 1032, ["onClick"])) : _("", !0)
            ]),
            _: 2
          }, 1024)
        ]),
        _: 2
      }, 1024))), 128)),
      e.canAddValue ? (o(), k(c, {
        key: 0,
        onClick: t[0] || (t[0] = (p) => e.add())
      }, {
        default: m(() => [
          S(b(e.addLabel), 1)
        ]),
        _: 1
      })) : _("", !0)
    ])) : (o(), k(l, {
      key: 3,
      onFocus: e.touch,
      modelValue: r.model,
      "onUpdate:modelValue": t[1] || (t[1] = (p) => r.model = p)
    }, null, 8, ["onFocus", "modelValue"]))
  ], 64);
}
const cb = /* @__PURE__ */ V(sb, [["render", db], ["__scopeId", "data-v-b6688859"]]);
const fb = {
  computed: {
    NativeCheckbox: aa
  },
  mixins: [ie],
  props: {
    modelValue: {
      type: Boolean,
      default() {
        return !1;
      }
    }
  },
  data() {
    return {
      value: this.modelValue
    };
  },
  watch: {
    modelValue(e, t) {
      this.value = e, this.model = e;
    }
  },
  computed: {
    longDescription() {
      return String(this.description).length > 2;
    },
    defaultValue() {
      return !1;
    },
    model: {
      get() {
        return !!this.value;
      },
      set(e) {
        this.value = !!e, this.$emit("update:modelValue", this.value);
      }
    }
  }
}, mb = {
  key: 0,
  class: "ux-field-title"
}, hb = {
  key: 0,
  class: "ux-required-marker"
}, pb = {
  key: 1,
  class: "ux-field-description"
};
function yb(e, t, n, i, s, r) {
  const l = y("ux-checkbox"), a = y("flex-cell"), u = y("flex-row");
  return o(), k(u, {
    onClick: t[1] || (t[1] = (c) => e.touch()),
    gap: ""
  }, {
    default: m(() => [
      h(a, {
        vcenter: "",
        shrink: ""
      }, {
        default: m(() => [
          h(l, {
            value: r.model,
            onClick: t[0] || (t[0] = (c) => r.model = !r.model)
          }, null, 8, ["value"])
        ]),
        _: 1
      }),
      h(a, { vcenter: "" }, {
        default: m(() => [
          x("div", null, [
            e.showLabel ? (o(), d("label", mb, [
              S(b(e.label) + " ", 1),
              e.required ? (o(), d("span", hb, "*")) : _("", !0)
            ])) : _("", !0),
            e.showDescription ? (o(), d("div", pb, b(e.description), 1)) : _("", !0)
          ])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const _b = /* @__PURE__ */ V(fb, [["render", yb], ["__scopeId", "data-v-75883516"]]), gb = {
  props: {
    modelValue: {
      type: [String, Array]
    }
  },
  mixins: [ie],
  methods: {
    getNewDefaultEntry() {
      return "";
    }
  }
}, vb = { key: 0 }, bb = ["innerHTML"], kb = ["innerHTML"];
function xb(e, t, n, i, s, r) {
  const l = y("flex-cell"), a = y("ux-icon"), u = y("ux-button"), c = y("flex-row");
  return e.multiValue ? (o(), d("div", vb, [
    h(c, { class: "ux-text-row" }, {
      default: m(() => [
        h(l, null, {
          default: m(() => [
            (o(!0), d(w, null, L(e.model, (f, p) => (o(), d("div", {
              innerHTML: e.field.template,
              key: p
            }, null, 8, bb))), 128))
          ]),
          _: 1
        }),
        h(l, {
          shrink: "",
          vcenter: ""
        }, {
          default: m(() => [
            e.canRemoveValue ? (o(), k(u, {
              key: 0,
              tag: "a",
              icon: "",
              onClick: t[0] || (t[0] = (f) => e.remove(e.entry))
            }, {
              default: m(() => [
                h(a, { icon: "fa-times" })
              ]),
              _: 1
            })) : _("", !0)
          ]),
          _: 1
        })
      ]),
      _: 1
    }),
    e.canAddValue ? (o(), k(u, {
      key: 0,
      onClick: t[1] || (t[1] = (f) => e.add())
    }, {
      default: m(() => [
        S(b(e.addLabel), 1)
      ]),
      _: 1
    })) : _("", !0)
  ])) : (o(), d("div", {
    key: 1,
    innerHTML: e.field.template
  }, null, 8, kb));
}
const wb = /* @__PURE__ */ V(gb, [["render", xb]]);
const Sb = {
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
    modelValue(e) {
      e != this.model && (this.model = e);
    }
  },
  async created() {
    this.comparators = await this.$sdk.content.comparators();
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
      return this.fields.reduce(function(e, t) {
        return e[t.path] = t, e;
      }, {});
    },
    keyOptions() {
      return this.fields.reduce(function(e, t) {
        switch (t.type) {
          case "object":
          case "group":
            break;
          default:
            e.push({
              title: t.titles.join(" → "),
              value: t.path || t.key
            });
            break;
        }
        return e;
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
    fieldWidget() {
      var e, t;
      if ((e = this.comparator) != null && e.inputWidget)
        return this.comparator.inputWidget;
      switch ((t = this.field) == null ? void 0 : t.widget) {
        case "currency":
          return this.field.widget;
      }
    },
    fieldType() {
      if (this.field)
        return this.field.type;
    },
    inputType() {
      if (this.comparator) {
        var e = this.comparator.inputType;
        switch (e) {
          case "none":
          case "range":
          case "daterange":
          case "daterelative":
          case "integer":
          case "decimal":
          case "float":
          case "number":
            break;
          case "array":
            switch (this.fieldType) {
              case "reference":
                e = "multireference";
                break;
            }
            break;
          default:
            switch (e = "normal", this.fieldType) {
              case "reference":
              case "boolean":
              case "date":
                e = this.fieldType;
                break;
              case "integer":
              case "decimal":
              case "float":
              case "number":
                e = "number";
                break;
            }
            break;
        }
        return e;
      }
    },
    comparator() {
      return this.comparatorLookup[this.model.comparator];
    },
    comparatorLookup() {
      return this.comparators.hash;
    },
    comparatorOptions() {
      if (!this.fieldType)
        return [];
      var e = this.comparators.available[this.fieldType] || [], t = e.map(function(n) {
        return {
          title: n.title,
          value: n.operator
        };
      });
      return t;
    },
    comparatorField() {
      return {
        minimum: 1,
        maximum: 1,
        options: this.comparatorOptions
      };
    },
    referenceType() {
      if (this.field)
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
    inputPlaceholder() {
      switch (this.model.comparator) {
        case "valuesgreater":
        case "valuesgreaterequal":
        case "valueslesser":
        case "valueslesserequal":
          return "0";
      }
      return this.field.title;
    },
    dateField() {
      return {
        type: this.fieldType,
        maximum: 1,
        minimum: 1,
        placeholder: this.inputPlaceholder
      };
    },
    multiOptionsField() {
      return {
        // title:`Select ${this.field.title}`,
        options: this.field.options,
        widget: "select",
        type: this.fieldType,
        maximum: 0,
        minimum: 1,
        placeholder: this.inputPlaceholder
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
        placeholder: this.inputPlaceholder
      };
    },
    normalField() {
      var n, i;
      const e = {}, t = {};
      return t.currency = (n = this.field) == null ? void 0 : n.currency, t.syntax = (i = this.field) == null ? void 0 : i.syntax, Object.assign(e, {
        type: this.fieldType,
        maximum: 1,
        minimum: 1,
        placeholder: this.inputPlaceholder,
        widget: this.fieldWidget
      }, t);
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
        referenceType: this.referenceType,
        maximum: 1,
        minimum: 1,
        create: !1,
        list: !1
      };
    },
    multiReferenceField() {
      return {
        type: "reference",
        referenceType: this.referenceType,
        maximum: 0,
        minimum: 1,
        create: !1,
        list: !1
      };
    }
  },
  methods: {},
  components: {
    TextField: Da,
    CurrencyField: Ia,
    DateField: Fa,
    NativeSelect: $t,
    ContentSelect: Ma
  }
}, Tb = {
  key: 0,
  class: "filter-condition"
}, Ob = { key: 0 }, Vb = { key: 1 }, Ab = { key: 2 }, Cb = { key: 3 }, Eb = { key: 4 }, Mb = { key: 5 }, Ib = { key: 6 }, Db = { key: 7 }, Fb = { key: 8 }, $b = { key: 9 }, Nb = { key: 10 };
function Lb(e, t, n, i, s, r) {
  const l = y("native-select"), a = y("flex-cell"), u = y("text-field"), c = y("currency-field"), f = y("flex-row"), p = y("date-field"), g = y("content-select"), v = y("ux-switch"), T = y("ux-icon"), A = y("ux-button");
  return s.comparators ? (o(), d("div", Tb, [
    h(f, {
      gap: "",
      vcenter: ""
    }, {
      default: m(() => [
        h(a, null, {
          default: m(() => [
            h(l, {
              title: "Select field",
              modelValue: s.model.key,
              "onUpdate:modelValue": t[0] || (t[0] = (E) => s.model.key = E),
              field: r.keyField
            }, null, 8, ["modelValue", "field"])
          ]),
          _: 1
        }),
        s.model.key ? (o(), k(a, { key: 0 }, {
          default: m(() => [
            h(l, {
              title: "Select comparator",
              modelValue: s.model.comparator,
              "onUpdate:modelValue": t[1] || (t[1] = (E) => s.model.comparator = E),
              field: r.comparatorField
            }, null, 8, ["modelValue", "field"])
          ]),
          _: 1
        })) : _("", !0),
        s.model.comparator ? (o(), k(a, { key: 1 }, {
          default: m(() => [
            r.inputType == "array" ? (o(), d("div", Ob, [
              r.hasOptions ? (o(), k(l, {
                key: 0,
                modelValue: s.model.values,
                "onUpdate:modelValue": t[2] || (t[2] = (E) => s.model.values = E),
                field: r.multiOptionsField
              }, null, 8, ["modelValue", "field"])) : (o(), k(u, {
                key: 1,
                field: r.arrayField,
                modelValue: s.model.values,
                "onUpdate:modelValue": t[3] || (t[3] = (E) => s.model.values = E)
              }, null, 8, ["field", "modelValue"]))
            ])) : _("", !0),
            r.inputType == "range" ? (o(), d("div", Vb, [
              r.fieldWidget == "currency" ? (o(), d(w, { key: 0 }, [
                h(c, {
                  field: r.normalField,
                  modelValue: s.model.value,
                  "onUpdate:modelValue": t[4] || (t[4] = (E) => s.model.value = E)
                }, null, 8, ["field", "modelValue"]),
                S(" And "),
                h(c, {
                  field: r.normalField,
                  modelValue: s.model.value2,
                  "onUpdate:modelValue": t[5] || (t[5] = (E) => s.model.value2 = E)
                }, null, 8, ["field", "modelValue"])
              ], 64)) : (o(), d(w, { key: 1 }, [
                h(u, {
                  field: r.normalField,
                  modelValue: s.model.value,
                  "onUpdate:modelValue": t[6] || (t[6] = (E) => s.model.value = E)
                }, null, 8, ["field", "modelValue"]),
                S(" And "),
                h(u, {
                  field: r.normalField,
                  modelValue: s.model.value2,
                  "onUpdate:modelValue": t[7] || (t[7] = (E) => s.model.value2 = E)
                }, null, 8, ["field", "modelValue"])
              ], 64))
            ])) : _("", !0),
            r.inputType == "daterelative" ? (o(), d("div", Ab, [
              h(f, null, {
                default: m(() => [
                  h(a, { style: { width: "80px" } }, {
                    default: m(() => [
                      h(u, {
                        field: r.relativeNumberField,
                        modelValue: s.model.value,
                        "onUpdate:modelValue": t[8] || (t[8] = (E) => s.model.value = E)
                      }, null, 8, ["field", "modelValue"])
                    ]),
                    _: 1
                  }),
                  h(a, null, {
                    default: m(() => [
                      h(l, {
                        modelValue: s.model.value2,
                        "onUpdate:modelValue": t[9] || (t[9] = (E) => s.model.value2 = E),
                        field: r.relativePeriodField
                      }, null, 8, ["modelValue", "field"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ])) : _("", !0),
            r.inputType == "daterange" ? (o(), d("div", Cb, [
              h(p, {
                field: r.dateField,
                modelValue: s.model.value,
                "onUpdate:modelValue": t[10] || (t[10] = (E) => s.model.value = E)
              }, null, 8, ["field", "modelValue"]),
              S(" And "),
              h(p, {
                field: r.dateField,
                modelValue: s.model.value2,
                "onUpdate:modelValue": t[11] || (t[11] = (E) => s.model.value2 = E)
              }, null, 8, ["field", "modelValue"])
            ])) : _("", !0),
            r.inputType == "date" ? (o(), d("div", Eb, [
              h(p, {
                field: r.dateField,
                modelValue: s.model.value,
                "onUpdate:modelValue": t[12] || (t[12] = (E) => s.model.value = E)
              }, null, 8, ["field", "modelValue"])
            ])) : _("", !0),
            r.inputType == "reference" ? (o(), d("div", Mb, [
              h(g, {
                field: r.singleReferenceField,
                modelValue: s.model.value,
                "onUpdate:modelValue": t[13] || (t[13] = (E) => s.model.value = E)
              }, null, 8, ["field", "modelValue"])
            ])) : _("", !0),
            r.inputType == "multireference" ? (o(), d("div", Ib, [
              h(g, {
                field: r.multiReferenceField,
                modelValue: s.model.values,
                "onUpdate:modelValue": t[14] || (t[14] = (E) => s.model.values = E)
              }, null, 8, ["field", "modelValue"])
            ])) : _("", !0),
            r.inputType == "boolean" ? (o(), d("div", Db, [
              h(f, {
                gap: "",
                center: ""
              }, {
                default: m(() => [
                  h(a, { shrink: "" }, {
                    default: m(() => [
                      h(v, {
                        onClick: t[15] || (t[15] = (E) => s.model.value = !s.model.value),
                        value: s.model.value
                      }, null, 8, ["value"])
                    ]),
                    _: 1
                  }),
                  h(a, null, {
                    default: m(() => [
                      S(b(s.model.value ? "True" : "False"), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ])) : _("", !0),
            r.inputType == "none" ? (o(), d("div", Fb)) : _("", !0),
            r.inputType == "number" ? (o(), d("div", $b, [
              r.fieldWidget == "currency" ? (o(), k(c, {
                key: 0,
                field: r.normalField,
                modelValue: s.model.value,
                "onUpdate:modelValue": t[16] || (t[16] = (E) => s.model.value = E)
              }, null, 8, ["field", "modelValue"])) : (o(), k(u, {
                key: 1,
                field: r.normalField,
                modelValue: s.model.value,
                "onUpdate:modelValue": t[17] || (t[17] = (E) => s.model.value = E)
              }, null, 8, ["field", "modelValue"]))
            ])) : _("", !0),
            r.inputType == "normal" ? (o(), d("div", Nb, [
              r.hasOptions ? (o(), k(l, {
                key: 0,
                modelValue: s.model.value,
                "onUpdate:modelValue": t[18] || (t[18] = (E) => s.model.value = E),
                field: r.singleOptionsField
              }, null, 8, ["modelValue", "field"])) : (o(), k(u, {
                key: 1,
                field: r.normalField,
                modelValue: s.model.value,
                "onUpdate:modelValue": t[19] || (t[19] = (E) => s.model.value = E)
              }, null, 8, ["field", "modelValue"]))
            ])) : _("", !0)
          ]),
          _: 1
        })) : _("", !0),
        n.enableRemove ? (o(), k(a, {
          key: 2,
          shrink: ""
        }, {
          default: m(() => [
            h(A, {
              size: "sm",
              icon: "",
              onClick: t[20] || (t[20] = (E) => e.$emit("remove"))
            }, {
              default: m(() => [
                h(T, { icon: "fa-times" })
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : _("", !0)
      ]),
      _: 1
    })
  ])) : _("", !0);
}
const Pb = /* @__PURE__ */ V(Sb, [["render", Lb]]);
var Ub = On, jb = function() {
  return Ub.Date.now();
}, Rb = jb, Bb = /\s/;
function zb(e) {
  for (var t = e.length; t-- && Bb.test(e.charAt(t)); )
    ;
  return t;
}
var Hb = zb, qb = Hb, Gb = /^\s+/;
function Wb(e) {
  return e && e.slice(0, qb(e) + 1).replace(Gb, "");
}
var Zb = Wb, Kb = Zb, Fs = gr, Yb = _r, $s = 0 / 0, Jb = /^[-+]0x[0-9a-f]+$/i, Xb = /^0b[01]+$/i, Qb = /^0o[0-7]+$/i, e1 = parseInt;
function t1(e) {
  if (typeof e == "number")
    return e;
  if (Yb(e))
    return $s;
  if (Fs(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Fs(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Kb(e);
  var n = Xb.test(e);
  return n || Qb.test(e) ? e1(e.slice(2), n ? 2 : 8) : Jb.test(e) ? $s : +e;
}
var $a = t1, n1 = gr, Yr = Rb, Ns = $a, r1 = "Expected a function", i1 = Math.max, s1 = Math.min;
function l1(e, t, n) {
  var i, s, r, l, a, u, c = 0, f = !1, p = !1, g = !0;
  if (typeof e != "function")
    throw new TypeError(r1);
  t = Ns(t) || 0, n1(n) && (f = !!n.leading, p = "maxWait" in n, r = p ? i1(Ns(n.maxWait) || 0, t) : r, g = "trailing" in n ? !!n.trailing : g);
  function v(B) {
    var F = i, se = s;
    return i = s = void 0, c = B, l = e.apply(se, F), l;
  }
  function T(B) {
    return c = B, a = setTimeout(q, t), f ? v(B) : l;
  }
  function A(B) {
    var F = B - u, se = B - c, z = t - F;
    return p ? s1(z, r - se) : z;
  }
  function E(B) {
    var F = B - u, se = B - c;
    return u === void 0 || F >= t || F < 0 || p && se >= r;
  }
  function q() {
    var B = Yr();
    if (E(B))
      return Q(B);
    a = setTimeout(q, A(B));
  }
  function Q(B) {
    return a = void 0, g && i ? v(B) : (i = s = void 0, l);
  }
  function ne() {
    a !== void 0 && clearTimeout(a), c = 0, i = u = s = a = void 0;
  }
  function ae() {
    return a === void 0 ? l : Q(Yr());
  }
  function oe() {
    var B = Yr(), F = E(B);
    if (i = arguments, s = this, u = B, F) {
      if (a === void 0)
        return T(u);
      if (p)
        return clearTimeout(a), a = setTimeout(q, t), v(u);
    }
    return a === void 0 && (a = setTimeout(q, t)), l;
  }
  return oe.cancel = ne, oe.flush = ae, oe;
}
var Or = l1;
const a1 = {
  props: {
    enableRemove: {
      type: Boolean
    },
    definition: {
      type: Object,
      required: !0,
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
    removeCondition(e) {
      this.model.filters.splice(e, 1);
    }
  },
  data() {
    return this.modelValue.operator || (this.modelValue.operator = "and"), this.modelValue.filters || (this.modelValue.filters = []), {
      model: JSON.parse(JSON.stringify(this.modelValue))
    };
  },
  watch: {
    modelValue(e) {
      e != this.model && (this.model = e);
    },
    model: {
      handler: Or(function(e) {
        this.$emit("update:modelValue", e);
      }, 200),
      deep: !0
    }
  },
  computed: {
    summary() {
      switch (this.model.operator) {
        case "or":
          return "any";
        case "nor":
          return "none";
        default:
          return "all";
      }
    },
    fields() {
      const e = this;
      var t = e.definition && e.definition.fields ? [...e.definition.fields] : [], n = e.definition && e.definition.definedFields ? e.definition.definedFields : [];
      const i = e.definition.definesType === "submission";
      if (n.length)
        if (i) {
          var s = {
            title: "Form Data",
            minimum: 1,
            maximum: 1,
            key: "formData",
            asObject: !0,
            type: "group",
            fields: n
          };
          t.push(s);
          var r = {
            title: "Data",
            minimum: 1,
            maximum: 1,
            key: "data",
            asObject: !0,
            type: "group",
            fields: n.map(function(u) {
              return u.type === "reference" && (u = JSON.parse(JSON.stringify(u)), delete u.fields), u;
            })
          };
          t.push(r);
        } else {
          var r = {
            title: `${e.definition.title}`,
            minimum: 1,
            maximum: 1,
            key: "data",
            asObject: !0,
            type: "group",
            fields: n
          };
          t.push(r);
        }
      var l = e.$sdk.utils.mapFields(t, { includeArrayDelimeter: !0 });
      return l;
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
    FilterCondition: Pb,
    NativeSelect: $t
  }
}, o1 = {
  key: 0,
  class: "filter-rule"
}, u1 = { class: "top" }, d1 = { class: "summary" }, c1 = /* @__PURE__ */ x("span", { class: "line" }, null, -1), f1 = { class: "operator" };
function m1(e, t, n, i, s, r) {
  const l = y("native-select"), a = y("flex-cell"), u = y("ux-icon"), c = y("ux-button"), f = y("flex-row"), p = y("filter-condition");
  return n.definition ? (o(), d("div", o1, [
    x("div", u1, [
      h(f, null, {
        default: m(() => [
          h(a, null, {
            default: m(() => [
              x("div", d1, [
                S(" Match "),
                h(l, {
                  modelValue: s.model.operator,
                  "onUpdate:modelValue": t[0] || (t[0] = (g) => s.model.operator = g),
                  field: r.operatorField
                }, {
                  default: m(() => [
                    S(b(r.summary), 1)
                  ]),
                  _: 1
                }, 8, ["modelValue", "field"]),
                S(" of the following conditions ")
              ])
            ]),
            _: 1
          }),
          n.enableRemove ? (o(), k(a, {
            key: 0,
            onClick: t[1] || (t[1] = (g) => e.$emit("remove")),
            shrink: ""
          }, {
            default: m(() => [
              h(c, {
                size: "sm",
                icon: ""
              }, {
                default: m(() => [
                  h(u, { icon: "fa-trash" })
                ]),
                _: 1
              })
            ]),
            _: 1
          })) : _("", !0)
        ]),
        _: 1
      })
    ]),
    (o(!0), d(w, null, L(s.model.filters, (g, v) => (o(), k(f, {
      key: `condition-${v}`
    }, {
      default: m(() => [
        v != 0 ? (o(), k(a, {
          key: 0,
          class: R(["operator-cell", [s.model.operator, { last: v == s.model.filters.length }]]),
          vcenter: "",
          shrink: ""
        }, {
          default: m(() => [
            c1,
            x("div", f1, b(s.model.operator), 1)
          ]),
          _: 2
        }, 1032, ["class"])) : _("", !0),
        h(a, null, {
          default: m(() => [
            h(p, {
              enableRemove: s.model.filters.length > 1,
              fields: r.fields,
              onRemove: (T) => r.removeCondition(v),
              modelValue: s.model.filters[v],
              "onUpdate:modelValue": (T) => s.model.filters[v] = T
            }, null, 8, ["enableRemove", "fields", "onRemove", "modelValue", "onUpdate:modelValue"])
          ]),
          _: 2
        }, 1024)
      ]),
      _: 2
    }, 1024))), 128)),
    h(c, {
      size: "sm",
      onClick: r.addCondition
    }, {
      default: m(() => [
        S(" Add Condition "),
        h(u, {
          icon: "fa-plus",
          right: ""
        })
      ]),
      _: 1
    }, 8, ["onClick"])
  ])) : _("", !0);
}
const h1 = /* @__PURE__ */ V(a1, [["render", m1]]);
const p1 = {
  components: {
    FilterRule: h1,
    NativeSelect: $t
  },
  methods: {
    removeRule(e) {
      this.model.filters && this.model.filters.splice(e, 1);
    },
    addRule() {
      this.model.filters || (this.model.filters = []), this.model.operator || (this.model.operator = "and"), this.model.filters.push({
        operator: "and",
        filters: [{}]
      });
    }
  },
  computed: {
    summary() {
      switch (this.model.operator) {
        case "or":
          return "any";
        case "nor":
          return "none";
        default:
          return "all";
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
      handler(e) {
        var t = JSON.stringify(this.model), n = JSON.stringify(e);
        if (t != n) {
          var i = JSON.parse(n);
          this.model = i;
        }
      },
      immediate: !0
    },
    model: {
      handler: Or(function(e) {
        this.$emit("update:modelValue", e);
      }, 300),
      deep: !0,
      immediate: !0
    }
  },
  props: {
    definition: {
      type: Object,
      required: !0
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
}, y1 = { class: "filters" }, _1 = {
  key: 0,
  class: "top"
}, g1 = { class: "summary" };
function v1(e, t, n, i, s, r) {
  const l = y("native-select"), a = y("filter-rule"), u = y("ux-button"), c = y("flex-body"), f = y("flex-column");
  return o(), k(f, { class: "filter-builder" }, {
    default: m(() => [
      h(c, null, {
        default: m(() => [
          x("div", y1, [
            s.model && s.model.filters && s.model.filters.length ? (o(), d("div", _1, [
              x("div", g1, [
                S(" Match "),
                h(l, {
                  modelValue: s.model.operator,
                  "onUpdate:modelValue": t[0] || (t[0] = (p) => s.model.operator = p),
                  field: r.operatorField
                }, {
                  default: m(() => [
                    S(b(r.summary), 1)
                  ]),
                  _: 1
                }, 8, ["modelValue", "field"]),
                S(" of the following rules ")
              ])
            ])) : _("", !0),
            (o(!0), d(w, null, L(s.model.filters, (p, g) => (o(), k(a, {
              enableRemove: "",
              key: `rule-${g}`,
              onRemove: (v) => r.removeRule(g),
              definition: n.definition,
              modelValue: s.model.filters[g],
              "onUpdate:modelValue": (v) => s.model.filters[g] = v,
              index: g
            }, null, 8, ["onRemove", "definition", "modelValue", "onUpdate:modelValue", "index"]))), 128)),
            h(u, {
              size: "sm",
              onClick: t[1] || (t[1] = (p) => r.addRule())
            }, {
              default: m(() => [
                S("Add Filter Rule")
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
const Na = /* @__PURE__ */ V(p1, [["render", v1], ["__scopeId", "data-v-51e57070"]]);
const b1 = {
  mixins: [ie],
  components: {
    FilterBuilder: Na
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
      handler: async function(e) {
        if (!e)
          return this.definition = null;
        var t = await this.$sdk.content.glossary({ hash: !0 });
        this.definition = t[e];
      },
      immediate: !0
    }
  },
  computed: {
    definitionTitle() {
      const e = this.definition ? this.definition.title : "";
      return (this.definition ? this.definition.plural : "") || e;
    }
  },
  methods: {
    getNewDefaultEntry() {
      return {
        operator: "and",
        filters: []
      };
    }
  }
}, k1 = {
  key: 0,
  class: "ux-field-title"
}, x1 = {
  key: 0,
  class: "ux-required-marker"
}, w1 = {
  key: 1,
  class: "ux-field-description"
}, S1 = { key: 2 };
function T1(e, t, n, i, s, r) {
  const l = y("filter-builder"), a = y("flex-cell"), u = y("ux-icon"), c = y("ux-button"), f = y("flex-row");
  return o(), d(w, null, [
    e.showLabel ? (o(), d("label", k1, [
      S(b(e.label) + " (" + b(r.definitionTitle) + ") ", 1),
      e.required ? (o(), d("span", x1, "*")) : _("", !0)
    ])) : _("", !0),
    e.showDescription ? (o(), d("div", w1, b(e.description), 1)) : _("", !0),
    e.multiValue ? (o(), d("div", S1, [
      (o(!0), d(w, null, L(e.model, (p, g) => (o(), k(f, {
        class: "ux-text-row",
        key: g
      }, {
        default: m(() => [
          h(a, null, {
            default: m(() => [
              h(l, {
                definition: s.definition,
                modelValue: e.model[g],
                "onUpdate:modelValue": (v) => e.model[g] = v
              }, null, 8, ["definition", "modelValue", "onUpdate:modelValue"])
            ]),
            _: 2
          }, 1024),
          h(a, {
            shrink: "",
            vcenter: ""
          }, {
            default: m(() => [
              e.canRemoveValue ? (o(), k(c, {
                key: 0,
                tag: "a",
                icon: "",
                onClick: (v) => e.remove(p)
              }, {
                default: m(() => [
                  h(u, { icon: "fa-times" })
                ]),
                _: 2
              }, 1032, ["onClick"])) : _("", !0)
            ]),
            _: 2
          }, 1024)
        ]),
        _: 2
      }, 1024))), 128)),
      e.canAddValue ? (o(), k(c, {
        key: 0,
        size: "sm",
        onClick: t[0] || (t[0] = (p) => e.add())
      }, {
        default: m(() => [
          S(b(e.addLabel), 1)
        ]),
        _: 1
      })) : _("", !0)
    ])) : (o(), k(l, {
      key: 3,
      definition: s.definition,
      modelValue: e.model,
      "onUpdate:modelValue": t[1] || (t[1] = (p) => e.model = p)
    }, null, 8, ["definition", "modelValue"]))
  ], 64);
}
const O1 = /* @__PURE__ */ V(b1, [["render", T1], ["__scopeId", "data-v-63053873"]]);
const V1 = {
  mixins: [ie],
  props: {
    modelValue: {
      type: Boolean,
      default() {
        return !1;
      }
    }
  },
  data() {
    return {
      value: this.modelValue
    };
  },
  watch: {
    modelValue(e, t) {
      this.value = e, this.model = e;
    }
  },
  computed: {
    longDescription() {
      return String(this.description).length > 2;
    },
    defaultValue() {
      return !1;
    },
    model: {
      get() {
        return !!this.value;
      },
      set(e) {
        this.value = !!e, this.$emit("update:modelValue", this.value);
      }
    }
  }
}, A1 = {
  key: 0,
  class: "ux-field-title"
}, C1 = {
  key: 0,
  class: "ux-required-marker"
}, E1 = {
  key: 1,
  class: "ux-field-description"
};
function M1(e, t, n, i, s, r) {
  const l = y("ux-switch"), a = y("flex-cell"), u = y("flex-row");
  return o(), k(u, {
    onClick: t[1] || (t[1] = (c) => e.touch()),
    gap: ""
  }, {
    default: m(() => [
      h(a, {
        vcenter: "",
        shrink: ""
      }, {
        default: m(() => [
          h(l, {
            value: r.model,
            onClick: t[0] || (t[0] = (c) => r.model = !r.model)
          }, null, 8, ["value"])
        ]),
        _: 1
      }),
      h(a, { vcenter: "" }, {
        default: m(() => [
          x("div", null, [
            e.showLabel ? (o(), d("label", A1, [
              S(b(e.label) + " ", 1),
              e.required ? (o(), d("span", C1, "*")) : _("", !0)
            ])) : _("", !0),
            e.showDescription ? (o(), d("div", E1, b(e.description), 1)) : _("", !0)
          ])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const I1 = /* @__PURE__ */ V(V1, [["render", M1], ["__scopeId", "data-v-2112a822"]]);
const D1 = {
  props: {
    multiple: {
      type: Boolean
    },
    accept: {
      type: String
    }
  },
  data() {
    return {
      over: !1
    };
  },
  methods: {
    clicked() {
      this.multiple || (this.$refs.file.value = null), this.$refs.file.click();
    },
    fileout(e) {
      this.over = !0;
    },
    fileover(e) {
      this.over = !0;
    },
    filedrop(e) {
      const t = this;
      e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length && (e.preventDefault(), e.stopPropagation(), t.filesSelected(e.dataTransfer.files));
    },
    filesSelected(e) {
      console.log("FILES SELECTED", e);
      var t = [];
      for (var n in [...e]) {
        var i = e[n];
        t.push({
          file: i,
          data: {},
          name: i.name,
          size: i.size,
          state: ""
        });
      }
      this.$emit("files", t);
    }
  }
}, F1 = ["accept", "multiple"];
function $1(e, t, n, i, s, r) {
  const l = y("ux-button");
  return o(), d("label", {
    class: R(["file-drop", { over: s.over }]),
    onDragover: t[2] || (t[2] = G((...a) => r.fileover && r.fileover(...a), ["prevent", "stop"])),
    onDragleave: t[3] || (t[3] = G((...a) => r.fileout && r.fileout(...a), ["prevent", "stop"])),
    onDrop: t[4] || (t[4] = G((...a) => r.filedrop && r.filedrop(...a), ["prevent", "stop"]))
  }, [
    x("input", {
      ref: "file",
      accept: n.accept,
      type: "file",
      multiple: n.multiple,
      onChange: t[0] || (t[0] = (a) => r.filesSelected(a.target.files))
    }, null, 40, F1),
    x("div", {
      class: "file-drop-ux",
      onClick: t[1] || (t[1] = (...a) => r.clicked && r.clicked(...a))
    }, [
      W(e.$slots, "default", {}, () => [
        h(l, null, {
          default: m(() => [
            S("Select Files")
          ]),
          _: 1
        })
      ], !0)
    ])
  ], 34);
}
const N1 = /* @__PURE__ */ V(D1, [["render", $1], ["__scopeId", "data-v-bd74657f"]]);
const L1 = {
  mixins: [ie],
  components: {
    FileDrop: N1
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
      state: "ready"
    };
  },
  methods: {
    filesize(e) {
      return this.$sdk.files.filesize(e);
    },
    remove(e) {
      var t = this, n = t.files[e];
      n.cancelToken && n.cancelToken.cancel("Operation canceled by the user."), t.files.splice(e, 1), console.log("Map to values", t.files), t.mapFilesToValues();
    },
    upload(e) {
      var t = this;
      switch (e.state) {
        case "complete":
        case "processing":
          return;
      }
      e.state = "processing";
      var n = new FormData(), i = {};
      i.attachment = !0, i.form = t.$sdk.utils.id(t.form), i.fieldPath = t.fieldPath, n.append("json", JSON.stringify(i)), n.append("file", e.file, e.name);
      var s = {
        headers: {
          "Content-Type": "multipart/form-data"
        },
        onUploadProgress: (u) => {
          let c = Math.floor(u.loaded * 100 / u.total);
          e.progress = c, e.bytesUploaded = u.loaded, e.bytesTotal = u.total, t.bytesUploaded = t.files.reduce(function(f, p) {
            return p.state == "complete" ? f += p.size || p.bytesTotal || 0 : f += p.bytesUploaded || 0, f;
          }, 0);
        }
      };
      const l = t.$sdk.api.CancelToken.source();
      s.cancelToken = l.token, e.cancelToken = l, s.headers = {
        "Content-Type": void 0
      };
      let a = "/file/upload";
      return t.$sdk.fileAPI && (a = `${t.$sdk.fileAPI}${a}`), t.$sdk.api.post(a, n, s).then(function(u) {
        e.state = "complete", e.result = u.data, e.cancelToken = null, t.uploadNextFile();
      }).catch(function(u) {
        e.state = "error", e.cancelToken = null, t.uploadNextFile();
      });
    },
    uploadNextFile() {
      var e = this;
      e.state = "uploading";
      var t = e.files.find(function(n) {
        switch (n.state) {
          case "complete":
          case "error":
            return;
          default:
            return !0;
        }
      });
      t ? e.upload(t) : e.state = "ready", e.mapFilesToValues();
    },
    mapFilesToValues() {
      var e = this;
      if (e.multiValue)
        e.model = e.files.map(function(n) {
          return n.result;
        });
      else {
        var t = e.files[0];
        if (!t)
          return e.model = void 0;
        e.model = t.result;
      }
      console.log("NEW MODEL", e.model);
    },
    fileover(e) {
    },
    filedrop(e) {
    },
    filesSelected(e) {
      return this.touch(), console.log("FILES SELECTED", e), this.multiValue ? this.files = [...this.files, ...e] : this.files = e, this.uploadNextFile();
    }
  },
  computed: {}
}, P1 = {
  key: 0,
  class: "ux-field-title"
}, U1 = {
  key: 0,
  class: "ux-required-marker"
}, j1 = {
  key: 1,
  class: "ux-field-description"
}, R1 = {
  key: 2,
  class: "files"
}, B1 = { class: "size" };
function z1(e, t, n, i, s, r) {
  const l = y("progress-bar"), a = y("flex-cell"), u = y("ux-icon"), c = y("ux-button"), f = y("flex-row"), p = y("file-drop");
  return o(), d(w, null, [
    e.showLabel ? (o(), d("label", P1, [
      S(b(e.label) + " ", 1),
      e.required ? (o(), d("span", U1, "*")) : _("", !0)
    ])) : _("", !0),
    e.showDescription ? (o(), d("div", j1, b(e.description), 1)) : _("", !0),
    s.files && s.files.length ? (o(), d("div", R1, [
      (o(!0), d(w, null, L(s.files, (g, v) => (o(), d("div", {
        class: "file-item",
        key: v
      }, [
        h(f, null, {
          default: m(() => [
            h(a, null, {
              default: m(() => [
                x("strong", null, b(g.name), 1),
                x("div", B1, b(r.filesize(g.size)), 1),
                h(l, {
                  value: g.progress
                }, null, 8, ["value"])
              ]),
              _: 2
            }, 1024),
            h(a, { shrink: "" }, {
              default: m(() => [
                h(c, {
                  icon: "",
                  onClick: (T) => r.remove(v)
                }, {
                  default: m(() => [
                    h(u, { icon: "fa-times" })
                  ]),
                  _: 2
                }, 1032, ["onClick"])
              ]),
              _: 2
            }, 1024)
          ]),
          _: 2
        }, 1024)
      ]))), 128))
    ])) : _("", !0),
    e.multiValue ? (o(), d(w, { key: 3 }, [
      e.canAddValue ? (o(), k(p, {
        key: 0,
        multiple: e.multiValue,
        onFiles: r.filesSelected
      }, {
        default: m(() => [
          h(c, null, {
            default: m(() => [
              S("Select Files")
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["multiple", "onFiles"])) : _("", !0)
    ], 64)) : (o(), k(p, {
      key: 4,
      onFiles: r.filesSelected
    }, {
      default: m(() => [
        h(c, null, {
          default: m(() => [
            S("Select File")
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["onFiles"]))
  ], 64);
}
const H1 = /* @__PURE__ */ V(L1, [["render", z1], ["__scopeId", "data-v-d29a9855"]]);
const q1 = {
  mixins: [ie],
  //TODO check whether we should move draggable into the input mixin
  components: { draggable: Ea },
  props: {
    submission: {
      type: Boolean,
      default: !1
    },
    includeOfficeOnly: {
      type: Boolean,
      default: !1
    },
    modelValue: {
      type: [Object, Array]
    },
    trail: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      drag: !1
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
    showLabel() {
      return this.field.showLabel;
    },
    reorderable() {
      return this.multiValue && this.field.reorderable;
    },
    sameLine() {
      return this.field.sameLine;
    }
  },
  methods: {
    createSingleObject() {
      this.model = {};
    },
    stateChange(e) {
      this.$emit("form:state", e);
    },
    multiLabel(e, t) {
      return e.title ? e.title : e.name ? e.name : e.firstName ? e.firstName : `${this.label} ${t + 1}`;
    },
    enterPress(e) {
      console.log("Enter", e);
    },
    refocus() {
      this.$nextTick(function() {
        var e = this.$refs.row, t = e[e.length - 1];
        if (t) {
          var n = t.$el.querySelector(".ux-field-focus");
          n && n.focus();
        }
      });
    },
    getNewDefaultEntry() {
      return {
        // guid: Math.random(),
      };
    }
  }
}, G1 = {
  key: 0,
  class: "ux-multi-group"
}, W1 = {
  key: 0,
  class: "ux-group-title"
}, Z1 = {
  key: 0,
  class: "ux-field-title"
}, K1 = {
  key: 0,
  class: "ux-required-marker"
}, Y1 = {
  key: 1,
  class: "ux-field-description"
}, J1 = {
  key: 0,
  class: "ux-single-group"
}, X1 = { class: "ux-group-title" }, Q1 = {
  key: 0,
  class: "ux-field-title"
}, e0 = {
  key: 1,
  class: "ux-field-description"
};
function t0(e, t, n, i, s, r) {
  const l = y("ux-icon"), a = y("flex-cell"), u = y("ux-button"), c = y("flex-row"), f = y("ux-panel-header"), p = y("ux-form"), g = y("ux-panel-body"), v = y("ux-panel"), T = y("draggable");
  return e.multiValue ? (o(), d("div", G1, [
    r.showLabel ? (o(), d("div", W1, [
      r.showLabel ? (o(), d("label", Z1, [
        S(b(e.plural || e.title) + " ", 1),
        e.required ? (o(), d("span", K1, "*")) : _("", !0)
      ])) : _("", !0),
      e.showDescription ? (o(), d("div", Y1, b(e.description), 1)) : _("", !0)
    ])) : _("", !0),
    r.reorderable ? (o(), k(T, {
      key: 1,
      modelValue: e.model,
      "onUpdate:modelValue": t[1] || (t[1] = (A) => e.model = A),
      group: r.groupKey,
      onStart: t[2] || (t[2] = (A) => s.drag = !0),
      onEnd: t[3] || (t[3] = (A) => s.drag = !1)
    }, {
      item: m(({ element: A, index: E }) => [
        h(v, { ref: "row" }, {
          default: m(() => [
            h(f, null, {
              default: m(() => [
                h(c, {
                  vcenter: "",
                  gap: ""
                }, {
                  default: m(() => [
                    r.reorderable ? (o(), k(a, {
                      key: 0,
                      class: "arrows",
                      shrink: ""
                    }, {
                      default: m(() => [
                        h(l, {
                          left: "",
                          icon: "fa-arrows"
                        })
                      ]),
                      _: 1
                    })) : _("", !0),
                    h(a, { vcenter: "" }, {
                      default: m(() => [
                        x("div", null, [
                          x("strong", null, b(r.multiLabel(A, E)), 1)
                        ])
                      ]),
                      _: 2
                    }, 1024),
                    r.collapsible ? (o(), k(a, {
                      key: 1,
                      shrink: ""
                    }, {
                      default: m(() => [
                        h(u, {
                          size: "xs",
                          tag: "a",
                          onClick: (q) => A.collapsed = !A.collapsed
                        }, {
                          default: m(() => [
                            S(b(A.collapsed ? "More" : "Less") + " ", 1),
                            h(l, {
                              right: "",
                              icon: A.collapsed ? "fa-angle-down" : "fa-angle-up"
                            }, null, 8, ["icon"])
                          ]),
                          _: 2
                        }, 1032, ["onClick"])
                      ]),
                      _: 2
                    }, 1024)) : _("", !0),
                    h(a, {
                      vcenter: "",
                      shrink: ""
                    }, {
                      default: m(() => [
                        e.canRemoveValue ? (o(), k(u, {
                          key: 0,
                          icon: "",
                          tag: "a",
                          onClick: (q) => e.remove(A)
                        }, {
                          default: m(() => [
                            h(l, { icon: "fa-times" })
                          ]),
                          _: 2
                        }, 1032, ["onClick"])) : _("", !0)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1024),
            Y(h(g, {
              onKeydown: t[0] || (t[0] = ve((q) => r.enterPress(q), ["enter"]))
            }, {
              default: m(() => [
                h(p, {
                  trail: n.trail,
                  ref: "form",
                  includeOfficeOnly: n.includeOfficeOnly,
                  submission: n.submission,
                  "onForm:state": r.stateChange,
                  parentModel: e.parentModel,
                  modelValue: e.model[E],
                  "onUpdate:modelValue": (q) => e.model[E] = q,
                  flex: r.sameLine,
                  fields: e.field.fields
                }, null, 8, ["trail", "includeOfficeOnly", "submission", "onForm:state", "parentModel", "modelValue", "onUpdate:modelValue", "flex", "fields"])
              ]),
              _: 2
            }, 1536), [
              [rr, !r.collapsible || !A.collapsed]
            ])
          ]),
          _: 2
        }, 1536)
      ]),
      _: 1
    }, 8, ["modelValue", "group"])) : (o(!0), d(w, { key: 2 }, L(e.model, (A, E) => (o(), k(v, {
      ref_for: !0,
      ref: "row"
    }, {
      default: m(() => [
        h(f, null, {
          default: m(() => [
            h(c, {
              vcenter: "",
              gap: ""
            }, {
              default: m(() => [
                r.reorderable ? (o(), k(a, {
                  key: 0,
                  shrink: ""
                }, {
                  default: m(() => [
                    h(l, { icon: "fa-arrows" })
                  ]),
                  _: 1
                })) : _("", !0),
                h(a, { vcenter: "" }, {
                  default: m(() => [
                    x("div", null, [
                      x("strong", null, b(r.multiLabel(A, E)), 1)
                    ])
                  ]),
                  _: 2
                }, 1024),
                r.collapsible ? (o(), k(a, {
                  key: 1,
                  shrink: ""
                }, {
                  default: m(() => [
                    h(u, {
                      size: "xs",
                      tag: "a",
                      onClick: (q) => A.collapsed = !A.collapsed
                    }, {
                      default: m(() => [
                        S(b(A.collapsed ? "More" : "Less") + " ", 1),
                        h(l, {
                          right: "",
                          icon: A.collapsed ? "fa-angle-down" : "fa-angle-up"
                        }, null, 8, ["icon"])
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ]),
                  _: 2
                }, 1024)) : _("", !0),
                h(a, {
                  vcenter: "",
                  shrink: ""
                }, {
                  default: m(() => [
                    e.canRemoveValue ? (o(), k(u, {
                      key: 0,
                      icon: "",
                      tag: "a",
                      onClick: (q) => e.remove(A)
                    }, {
                      default: m(() => [
                        h(l, { icon: "fa-times" })
                      ]),
                      _: 2
                    }, 1032, ["onClick"])) : _("", !0)
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1024)
          ]),
          _: 2
        }, 1024),
        Y(h(g, {
          onKeydown: t[4] || (t[4] = ve((q) => r.enterPress(q), ["enter"]))
        }, {
          default: m(() => [
            h(p, {
              ref_for: !0,
              ref: "form",
              trail: n.trail,
              includeOfficeOnly: n.includeOfficeOnly,
              submission: n.submission,
              "onForm:state": r.stateChange,
              parentModel: e.parentModel,
              modelValue: e.model[E],
              "onUpdate:modelValue": (q) => e.model[E] = q,
              flex: r.sameLine,
              fields: e.field.fields
            }, null, 8, ["trail", "includeOfficeOnly", "submission", "onForm:state", "parentModel", "modelValue", "onUpdate:modelValue", "flex", "fields"])
          ]),
          _: 2
        }, 1536), [
          [rr, !A.collapsed]
        ])
      ]),
      _: 2
    }, 1536))), 256)),
    e.canAddValue ? (o(), k(u, {
      key: 3,
      onClick: t[5] || (t[5] = (A) => e.add())
    }, {
      default: m(() => [
        S(b(e.addLabel) + " ", 1),
        h(l, {
          icon: "fa-plus",
          right: ""
        })
      ]),
      _: 1
    })) : _("", !0)
  ])) : (o(), d(w, { key: 1 }, [
    e.widget === "form" ? (o(), d(w, { key: 0 }, [
      e.model ? (o(), d(w, { key: 0 }, [
        e.minimum === 0 ? (o(), k(v, { key: 0 }, {
          default: m(() => [
            h(f, null, {
              default: m(() => [
                h(c, {
                  vcenter: "",
                  gap: ""
                }, {
                  default: m(() => [
                    h(a, { vcenter: "" }, {
                      default: m(() => [
                        x("div", null, [
                          x("strong", null, b(e.label), 1)
                        ])
                      ]),
                      _: 1
                    }),
                    h(a, {
                      vcenter: "",
                      shrink: ""
                    }, {
                      default: m(() => [
                        h(u, {
                          icon: "",
                          tag: "a",
                          onClick: t[6] || (t[6] = (A) => e.model = void 0)
                        }, {
                          default: m(() => [
                            h(l, { icon: "fa-times" })
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
            }),
            h(g, null, {
              default: m(() => [
                h(p, {
                  ref: "form",
                  trail: n.trail,
                  includeOfficeOnly: n.includeOfficeOnly,
                  submission: n.submission,
                  "onForm:state": r.stateChange,
                  parentModel: e.parentModel,
                  modelValue: e.model,
                  "onUpdate:modelValue": t[7] || (t[7] = (A) => e.model = A),
                  flex: r.sameLine,
                  fields: e.field.fields
                }, null, 8, ["trail", "includeOfficeOnly", "submission", "onForm:state", "parentModel", "modelValue", "flex", "fields"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : (o(), k(p, {
          key: 1,
          ref: "form",
          trail: n.trail,
          includeOfficeOnly: n.includeOfficeOnly,
          submission: n.submission,
          "onForm:state": r.stateChange,
          parentModel: e.parentModel,
          modelValue: e.model,
          "onUpdate:modelValue": t[8] || (t[8] = (A) => e.model = A),
          flex: r.sameLine,
          fields: e.field.fields
        }, null, 8, ["trail", "includeOfficeOnly", "submission", "onForm:state", "parentModel", "modelValue", "flex", "fields"]))
      ], 64)) : (o(), k(u, {
        key: 1,
        onClick: t[9] || (t[9] = (A) => r.createSingleObject())
      }, {
        default: m(() => [
          S("Add " + b(e.label) + " ", 1),
          h(l, {
            icon: "fa-plus",
            right: ""
          })
        ]),
        _: 1
      }))
    ], 64)) : (o(), d(w, { key: 1 }, [
      r.showLabel ? (o(), d("div", J1, [
        x("div", X1, [
          r.showLabel ? (o(), d("label", Q1, b(e.title), 1)) : _("", !0),
          e.showDescription ? (o(), d("div", e0, b(e.description), 1)) : _("", !0)
        ]),
        h(v, null, {
          default: m(() => [
            h(g, null, {
              default: m(() => [
                h(p, {
                  ref: "form",
                  trail: n.trail,
                  includeOfficeOnly: n.includeOfficeOnly,
                  submission: n.submission,
                  "onForm:state": r.stateChange,
                  parentModel: e.parentModel,
                  modelValue: e.model,
                  "onUpdate:modelValue": t[10] || (t[10] = (A) => e.model = A),
                  flex: r.sameLine,
                  fields: e.field.fields
                }, null, 8, ["trail", "includeOfficeOnly", "submission", "onForm:state", "parentModel", "modelValue", "flex", "fields"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ])) : (o(), k(p, {
        key: 1,
        ref: "form",
        trail: n.trail,
        includeOfficeOnly: n.includeOfficeOnly,
        submission: n.submission,
        "onForm:state": r.stateChange,
        parentModel: e.parentModel,
        modelValue: e.model,
        "onUpdate:modelValue": t[11] || (t[11] = (A) => e.model = A),
        flex: r.sameLine,
        fields: e.field.fields
      }, null, 8, ["trail", "includeOfficeOnly", "submission", "onForm:state", "parentModel", "modelValue", "flex", "fields"]))
    ], 64))
  ], 64));
}
const n0 = /* @__PURE__ */ V(q1, [["render", t0], ["__scopeId", "data-v-e3ad2f0d"]]), r0 = {
  props: {
    option: {
      required: !0
    }
  },
  computed: {
    plainValue() {
      return this.option._id || this.option.value || this.option;
    }
  }
};
function i0(e, t, n, i, s, r) {
  return W(e.$slots, "default", { plainValue: r.plainValue }, () => [
    x("pre", null, b(n.option), 1)
  ]);
}
const s0 = /* @__PURE__ */ V(r0, [["render", i0]]);
function l0(e) {
  return e === void 0 || typeof e > "u" || e === null || String(e) === "null" || String(e) === "undefined";
}
const a0 = {
  components: {
    OptionSlot: s0
  },
  props: {
    modelValue: {
      // type: [Object, Array],
    }
  },
  mixins: [ie],
  created() {
    this.model = this.model;
  },
  methods: {
    select(e) {
      var t = this;
      t.multiValue ? t.model = [...t.model, e] : t.model = e;
    },
    deselect(e) {
      var t = this;
      if (this.multiValue) {
        var n = this.model.slice(), i = n.indexOf(e);
        i != -1 && (n.splice(i, 1), this.model = n);
      } else
        t.getValue(this.model) == e ? this.model = void 0 : this.model = e;
    },
    toggle(e) {
      this.selectionHash[e] ? this.deselect(e) : this.select(e), this.touch();
    },
    model: {
      get() {
        return this.cleanOutput(this.value);
      },
      set(e) {
        this.value = this.cleanInput(e), this.dispatch();
      }
    },
    cleanOutput(e) {
      var t = this;
      return l0(e) ? t.multiValue ? e = [] : e = void 0 : t.multiValue ? e = (e || []).map(function(n) {
        return t.getValue(n);
      }) : e = t.getValue(e), e;
    },
    cleanInput(e) {
      var t = this;
      if (t.multiValue)
        e || (e = []), Array.isArray(e) || (e = [e]), t.maximum && e.length > t.maximum && (e.length = t.maximum), e = e.map(function(i) {
          var s = t.getValue(i);
          return t.returnObject ? t.optionLookup[s] : s;
        });
      else {
        var n = t.getValue(e);
        e = t.returnObject ? t.optionLookup[n] : n;
      }
      return e;
    }
  },
  computed: {
    selectionHash() {
      var e = {};
      return this.model && (this.multiValue ? this.model.forEach(function(t) {
        e[t] = !0;
      }) : e[this.model] = !0), console.log("change hash"), e;
    },
    returnObject() {
      return this.type == "reference";
    },
    summary() {
      return this.getLabel(this.optionLookup[this.model]) || "Click to select";
    }
  }
}, o0 = {
  key: 0,
  class: "ux-field-title"
}, u0 = {
  key: 0,
  class: "ux-required-marker"
}, d0 = {
  key: 1,
  class: "ux-field-description"
}, c0 = { class: "buttons" };
function f0(e, t, n, i, s, r) {
  const l = y("ux-icon"), a = y("ux-button"), u = y("option-slot");
  return o(), d(w, null, [
    e.showLabel ? (o(), d("label", o0, [
      S(b(e.label) + " ", 1),
      e.required ? (o(), d("span", u0, "*")) : _("", !0)
    ])) : _("", !0),
    e.showDescription ? (o(), d("div", d0, b(e.description), 1)) : _("", !0),
    x("div", c0, [
      (o(!0), d(w, null, L(e.selectableOptions, (c) => (o(), k(u, { option: c }, {
        default: m(({ plainValue: f }) => [
          h(a, {
            class: R({ active: r.selectionHash[f] }),
            onClick: (p) => r.toggle(f)
          }, {
            default: m(() => [
              S(b(e.getLabel(c)) + " ", 1),
              h(l, {
                icon: "fa-check",
                right: ""
              })
            ]),
            _: 2
          }, 1032, ["class", "onClick"])
        ]),
        _: 2
      }, 1032, ["option"]))), 256))
    ])
  ], 64);
}
const m0 = /* @__PURE__ */ V(a0, [["render", f0], ["__scopeId", "data-v-552abf71"]]);
const h0 = {
  props: {
    modelValue: {
      type: Object
    }
  },
  mixins: [ie],
  computed: {},
  methods: {
    getNewDefaultEntry() {
      return {};
    }
  }
}, p0 = {
  key: 0,
  class: "ux-field-title"
}, y0 = {
  key: 0,
  class: "ux-required-marker"
}, _0 = {
  key: 1,
  class: "ux-field-description"
}, g0 = { key: 2 }, v0 = { key: 3 };
function b0(e, t, n, i, s, r) {
  const l = y("flex-cell"), a = y("ux-icon"), u = y("ux-button"), c = y("flex-row");
  return o(), d(w, null, [
    e.showLabel ? (o(), d("label", p0, [
      S(b(e.label) + " ", 1),
      e.required ? (o(), d("span", y0, "*")) : _("", !0)
    ])) : _("", !0),
    e.showDescription ? (o(), d("div", _0, b(e.description), 1)) : _("", !0),
    e.multiValue ? (o(), d("div", g0, [
      (o(!0), d(w, null, L(e.model, (f, p) => (o(), k(c, {
        class: "ux-text-row",
        key: p
      }, {
        default: m(() => [
          h(l, null, {
            default: m(() => [
              x("pre", null, b(f), 1)
            ]),
            _: 2
          }, 1024),
          h(l, {
            shrink: "",
            vcenter: ""
          }, {
            default: m(() => [
              e.canRemoveValue ? (o(), k(u, {
                key: 0,
                tag: "a",
                icon: "",
                onClick: (g) => e.remove(f)
              }, {
                default: m(() => [
                  h(a, { icon: "fa-times" })
                ]),
                _: 2
              }, 1032, ["onClick"])) : _("", !0)
            ]),
            _: 2
          }, 1024)
        ]),
        _: 2
      }, 1024))), 128)),
      e.canAddValue ? (o(), k(u, {
        key: 0,
        onClick: t[0] || (t[0] = (f) => e.add())
      }, {
        default: m(() => [
          S(b(e.addLabel) + " ", 1),
          h(a, {
            icon: "fa-plus",
            right: ""
          })
        ]),
        _: 1
      })) : _("", !0)
    ])) : (o(), d("pre", v0, b(e.model), 1))
  ], 64);
}
const k0 = /* @__PURE__ */ V(h0, [["render", b0], ["__scopeId", "data-v-aae5394a"]]);
const x0 = {
  props: {
    modelValue: {
      type: [String, Array]
    }
  },
  mixins: [ie],
  computed: {
    lazy() {
      switch (this.type) {
        case "integer":
        case "number":
        case "decimal":
        case "float":
        case "url":
        case "key":
          return !0;
      }
    },
    actualPlaceholder() {
      if (this.field.placeholder)
        return this.field.placeholder;
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
      return this.numValues ? "Add another option" : "Add options";
    }
  },
  methods: {
    titleBlurred(e) {
      var t;
      this.multiValue ? t = this.model[e] : t = this.model, t.title !== t.value && delete t.pristine;
    },
    valueTouched(e) {
      var t;
      this.multiValue ? t = this.model[e] : t = this.model, delete t.pristine, this.touch();
    },
    entryTitleChanged(e) {
      this.$nextTick(function() {
        var t;
        this.multiValue ? t = this.model[e] : t = this.model, t.pristine && (t.value = t.title);
      });
    },
    cleanOutputValue(e) {
      return e.value = this.cleanTextInput(e.value, this.type, this), e;
    },
    cleanInputValue(e) {
      return e.value = this.cleanTextInput(e.value, this.type, this), e;
    },
    getNewDefaultEntry() {
      return {
        pristine: !0
      };
    }
  }
}, Vr = (e) => (bt("data-v-c8feb6c2"), e = e(), kt(), e), w0 = {
  key: 0,
  class: "ux-field-title"
}, S0 = {
  key: 0,
  class: "ux-required-marker"
}, T0 = {
  key: 1,
  class: "ux-field-description"
}, O0 = { key: 2 }, V0 = { class: "ux-text-wrap prefixed" }, A0 = /* @__PURE__ */ Vr(() => /* @__PURE__ */ x("span", { class: "ux-text-prefix" }, "Label", -1)), C0 = ["onBlur", "on:update:modelValue", "onUpdate:modelValue"], E0 = ["onBlur", "on:update:modelValue", "onUpdate:modelValue"], M0 = { class: "ux-text-wrap prefixed" }, I0 = /* @__PURE__ */ Vr(() => /* @__PURE__ */ x("span", { class: "ux-text-prefix" }, "Value", -1)), D0 = ["onFocus", "onUpdate:modelValue"], F0 = ["onFocus", "onUpdate:modelValue"], $0 = { class: "ux-text-wrap prefixed" }, N0 = /* @__PURE__ */ Vr(() => /* @__PURE__ */ x("span", { class: "ux-text-prefix" }, "Label", -1)), L0 = { class: "ux-text-wrap prefixed" }, P0 = /* @__PURE__ */ Vr(() => /* @__PURE__ */ x("span", { class: "ux-text-prefix" }, "Value", -1));
function U0(e, t, n, i, s, r) {
  const l = y("flex-cell"), a = y("ux-icon"), u = y("ux-button"), c = y("flex-row");
  return o(), d(w, null, [
    e.showLabel ? (o(), d("label", w0, [
      S(b(e.label) + " ", 1),
      e.required ? (o(), d("span", S0, "*")) : _("", !0)
    ])) : _("", !0),
    e.showDescription ? (o(), d("div", T0, b(e.description), 1)) : _("", !0),
    e.multiValue ? (o(), d("div", O0, [
      (o(!0), d(w, null, L(e.model, (f, p) => (o(), k(c, {
        class: "ux-text-row",
        key: p
      }, {
        default: m(() => [
          h(l, null, {
            default: m(() => [
              x("div", V0, [
                A0,
                r.lazy ? Y((o(), d("input", {
                  key: 0,
                  class: "ux-field-focus ux-text-input-multiple",
                  placeholder: "Label",
                  onFocus: t[0] || (t[0] = (...g) => e.touch && e.touch(...g)),
                  ref_for: !0,
                  ref: "input",
                  onKeydown: t[1] || (t[1] = ve(G((g) => e.add(), ["stop", "prevent"]), ["enter"])),
                  onBlur: (g) => r.titleBlurred(p),
                  "on:update:modelValue": (g) => r.entryTitleChanged(p),
                  "onUpdate:modelValue": (g) => e.model[p].title = g
                }, null, 40, C0)), [
                  [
                    ge,
                    e.model[p].title,
                    void 0,
                    { lazy: !0 }
                  ]
                ]) : _("", !0),
                r.lazy ? _("", !0) : Y((o(), d("input", {
                  key: 1,
                  class: "ux-field-focus ux-text-input-multiple",
                  placeholder: "Label",
                  onFocus: t[2] || (t[2] = (...g) => e.touch && e.touch(...g)),
                  ref_for: !0,
                  ref: "input",
                  onKeydown: t[3] || (t[3] = ve(G((g) => e.add(), ["stop", "prevent"]), ["enter"])),
                  onBlur: (g) => r.titleBlurred(p),
                  "on:update:modelValue": (g) => r.entryTitleChanged(p),
                  "onUpdate:modelValue": (g) => e.model[p].title = g
                }, null, 40, E0)), [
                  [ge, e.model[p].title]
                ])
              ])
            ]),
            _: 2
          }, 1024),
          h(l, null, {
            default: m(() => [
              x("div", M0, [
                I0,
                r.lazy ? Y((o(), d("input", {
                  key: 0,
                  class: "ux-field-focus ux-text-input-multiple",
                  placeholder: "Value",
                  onFocus: (g) => r.valueTouched(p),
                  ref_for: !0,
                  ref: "valueInput",
                  onKeydown: t[4] || (t[4] = ve(G((g) => e.add(), ["stop", "prevent"]), ["enter"])),
                  "onUpdate:modelValue": (g) => e.model[p].value = g
                }, null, 40, D0)), [
                  [
                    ge,
                    e.model[p].value,
                    void 0,
                    { lazy: !0 }
                  ]
                ]) : _("", !0),
                r.lazy ? _("", !0) : Y((o(), d("input", {
                  key: 1,
                  class: "ux-field-focus ux-text-input-multiple",
                  placeholder: "Value",
                  onFocus: (g) => r.valueTouched(p),
                  ref_for: !0,
                  ref: "valueInput",
                  onKeydown: t[5] || (t[5] = ve(G((g) => e.add(), ["stop", "prevent"]), ["enter"])),
                  "onUpdate:modelValue": (g) => e.model[p].value = g
                }, null, 40, F0)), [
                  [ge, e.model[p].value]
                ])
              ])
            ]),
            _: 2
          }, 1024),
          h(l, {
            shrink: "",
            vcenter: ""
          }, {
            default: m(() => [
              e.canRemoveValue ? (o(), k(u, {
                key: 0,
                tag: "a",
                icon: "",
                onClick: (g) => e.remove(f)
              }, {
                default: m(() => [
                  h(a, { icon: "fa-times" })
                ]),
                _: 2
              }, 1032, ["onClick"])) : _("", !0)
            ]),
            _: 2
          }, 1024)
        ]),
        _: 2
      }, 1024))), 128)),
      e.canAddValue ? (o(), k(u, {
        key: 0,
        onClick: t[6] || (t[6] = (f) => e.add())
      }, {
        default: m(() => [
          S(b(r.addLabel) + " ", 1),
          h(a, {
            icon: "fa-plus",
            right: ""
          })
        ]),
        _: 1
      })) : _("", !0)
    ])) : (o(), k(c, {
      key: 3,
      class: "ux-text-row"
    }, {
      default: m(() => [
        h(l, null, {
          default: m(() => [
            x("div", $0, [
              N0,
              r.lazy ? Y((o(), d("input", {
                key: 0,
                class: "ux-field-focus ux-text-input-multiple",
                placeholder: "Label",
                onFocus: t[7] || (t[7] = (...f) => e.touch && e.touch(...f)),
                ref: "input",
                onKeydown: t[8] || (t[8] = ve(G((f) => e.add(), ["stop", "prevent"]), ["enter"])),
                onBlur: t[9] || (t[9] = (f) => r.titleBlurred(e.index)),
                "on:update:modelValue": t[10] || (t[10] = (...f) => r.entryTitleChanged && r.entryTitleChanged(...f)),
                "onUpdate:modelValue": t[11] || (t[11] = (f) => e.model.title = f)
              }, null, 544)), [
                [
                  ge,
                  e.model.title,
                  void 0,
                  { lazy: !0 }
                ]
              ]) : _("", !0),
              r.lazy ? _("", !0) : Y((o(), d("input", {
                key: 1,
                class: "ux-field-focus ux-text-input-multiple",
                placeholder: "Label",
                onFocus: t[12] || (t[12] = (...f) => e.touch && e.touch(...f)),
                ref: "input",
                onKeydown: t[13] || (t[13] = ve(G((f) => e.add(), ["stop", "prevent"]), ["enter"])),
                onBlur: t[14] || (t[14] = (f) => r.titleBlurred(e.index)),
                "on:update:modelValue": t[15] || (t[15] = (...f) => r.entryTitleChanged && r.entryTitleChanged(...f)),
                "onUpdate:modelValue": t[16] || (t[16] = (f) => e.model.title = f)
              }, null, 544)), [
                [ge, e.model.title]
              ])
            ])
          ]),
          _: 1
        }),
        h(l, null, {
          default: m(() => [
            x("div", L0, [
              P0,
              r.lazy ? Y((o(), d("input", {
                key: 0,
                class: "ux-field-focus ux-text-input-multiple",
                placeholder: "Value",
                onFocus: t[17] || (t[17] = (...f) => r.valueTouched && r.valueTouched(...f)),
                ref: "valueInput",
                onKeydown: t[18] || (t[18] = ve(G((f) => e.add(), ["stop", "prevent"]), ["enter"])),
                "onUpdate:modelValue": t[19] || (t[19] = (f) => e.model.value = f)
              }, null, 544)), [
                [
                  ge,
                  e.model.value,
                  void 0,
                  { lazy: !0 }
                ]
              ]) : _("", !0),
              r.lazy ? _("", !0) : Y((o(), d("input", {
                key: 1,
                class: "ux-field-focus ux-text-input-multiple",
                placeholder: "Value",
                onFocus: t[20] || (t[20] = (...f) => r.valueTouched && r.valueTouched(...f)),
                ref: "valueInput",
                onKeydown: t[21] || (t[21] = ve(G((f) => e.add(), ["stop", "prevent"]), ["enter"])),
                "onUpdate:modelValue": t[22] || (t[22] = (f) => e.model.value = f)
              }, null, 544)), [
                [ge, e.model.value]
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
const j0 = /* @__PURE__ */ V(x0, [["render", U0], ["__scopeId", "data-v-c8feb6c2"]]);
const R0 = {
  components: {
    // VAceEditor,
  },
  methods: {
    editorInit() {
    },
    format() {
      if (typeof window !== void 0) {
        var e = this.model;
        if (e) {
          switch (this.lang) {
            case "js":
            case "javascript":
              window.js_beautify && (e = window.js_beautify(e));
              break;
            case "css":
            case "scss":
              window.css_beautify && (e = window.css_beautify(e));
              break;
            case "html":
              window.html_beautify && (e = window.html_beautify(e));
              break;
            default:
              return;
          }
          console.log("Formatted"), this.model = e;
        }
      }
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
    },
    readonly: {
      type: Boolean
    }
  },
  watch: {
    modelValue(e) {
      this.model = e;
    },
    model(e) {
      this.$emit("update:modelValue", e);
    }
  },
  async mounted() {
    this.mounted = !0, this.$sdk.global && this.$sdk.global.injectScript && (this.$sdk.global.injectScript("https://cdnjs.cloudflare.com/ajax/libs/js-beautify/1.14.5/beautify.min.js"), this.$sdk.global.injectScript("https://cdnjs.cloudflare.com/ajax/libs/js-beautify/1.14.5/beautify-css.min.js"), this.$sdk.global.injectScript("https://cdnjs.cloudflare.com/ajax/libs/js-beautify/1.14.5/beautify-html.min.js"));
  },
  data() {
    return {
      mounted: !1,
      model: this.modelValue
    };
  }
};
function B0(e, t, n, i, s, r) {
  const l = y("v-ace-editor"), a = y("flex-column");
  return s.mounted ? (o(), k(a, { key: 0 }, {
    default: m(() => [
      h(l, {
        onBlur: r.format,
        readonly: n.readonly,
        class: "editor-wrap",
        value: s.model,
        "onUpdate:value": t[0] || (t[0] = (u) => s.model = u),
        options: { useWorker: !0 },
        onInit: r.editorInit,
        lang: n.lang,
        theme: "tomorrow_night_eighties",
        style: { height: "300px" }
      }, null, 8, ["onBlur", "readonly", "value", "onInit", "lang"])
    ]),
    _: 1
  })) : _("", !0);
}
const z0 = /* @__PURE__ */ V(R0, [["render", B0], ["__scopeId", "data-v-763ca17b"]]);
const H0 = {
  components: {
    CodeEditor: z0
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
  mixins: [ie],
  methods: {
    enterPress() {
    },
    getNewDefaultEntry() {
      return "";
    }
  }
}, q0 = {
  key: 0,
  class: "ux-field-title"
}, G0 = {
  key: 0,
  class: "ux-required-marker"
}, W0 = {
  key: 1,
  class: "ux-field-description"
}, Z0 = { key: 2 }, K0 = { class: "code-editor-field-wrap" }, Y0 = {
  key: 3,
  class: "code-editor-field-wrap"
};
function J0(e, t, n, i, s, r) {
  const l = y("code-editor"), a = y("flex-cell"), u = y("ux-icon"), c = y("ux-button"), f = y("flex-row");
  return o(), d("div", {
    onKeydown: t[2] || (t[2] = ve(G((p) => r.enterPress(p), ["stop"]), ["enter"]))
  }, [
    e.showLabel ? (o(), d("label", q0, [
      S(b(e.label) + " ", 1),
      e.required ? (o(), d("span", G0, "*")) : _("", !0)
    ])) : _("", !0),
    e.showDescription ? (o(), d("div", W0, b(e.description), 1)) : _("", !0),
    e.multiValue ? (o(), d("div", Z0, [
      (o(!0), d(w, null, L(e.model, (p, g) => (o(), k(f, {
        class: "ux-text-row",
        key: g
      }, {
        default: m(() => [
          h(a, null, {
            default: m(() => [
              x("div", K0, [
                h(l, {
                  lang: r.syntax,
                  onFocus: e.touch,
                  ref_for: !0,
                  ref: "input",
                  modelValue: e.model[g],
                  "onUpdate:modelValue": (v) => e.model[g] = v,
                  class: "ux-code-editor ux-field-focus ux-text-area-multiple"
                }, null, 8, ["lang", "onFocus", "modelValue", "onUpdate:modelValue"])
              ])
            ]),
            _: 2
          }, 1024),
          h(a, {
            shrink: "",
            vcenter: ""
          }, {
            default: m(() => [
              e.canRemoveValue ? (o(), k(c, {
                key: 0,
                tag: "a",
                icon: "",
                onClick: (v) => e.remove(p)
              }, {
                default: m(() => [
                  h(u, { icon: "fa-times" })
                ]),
                _: 2
              }, 1032, ["onClick"])) : _("", !0)
            ]),
            _: 2
          }, 1024)
        ]),
        _: 2
      }, 1024))), 128)),
      e.canAddValue ? (o(), k(c, {
        key: 0,
        onClick: t[0] || (t[0] = (p) => e.add())
      }, {
        default: m(() => [
          S(b(e.addLabel), 1)
        ]),
        _: 1
      })) : _("", !0)
    ])) : (o(), d("div", Y0, [
      h(l, {
        lang: r.syntax,
        class: "ux-code-editor ux-field-focus ux-text-area-single",
        onFocus: e.touch,
        modelValue: e.model,
        "onUpdate:modelValue": t[1] || (t[1] = (p) => e.model = p)
      }, null, 8, ["lang", "onFocus", "modelValue"])
    ]))
  ], 32);
}
const X0 = /* @__PURE__ */ V(H0, [["render", J0], ["__scopeId", "data-v-50e774dd"]]);
const Q0 = {
  props: {
    modelValue: {
      type: [String, Array]
    }
  },
  mixins: [ie],
  methods: {
    enterPress() {
    },
    getNewDefaultEntry() {
      return "";
    }
  }
}, ek = {
  key: 0,
  class: "ux-field-title"
}, tk = {
  key: 0,
  class: "ux-required-marker"
}, nk = {
  key: 1,
  class: "ux-field-description"
}, rk = { key: 2 }, ik = { class: "expression-field-wrap" }, sk = {
  key: 3,
  class: "expression-field-wrap"
};
function lk(e, t, n, i, s, r) {
  const l = y("expression-editor"), a = y("flex-cell"), u = y("ux-icon"), c = y("ux-button"), f = y("flex-row");
  return o(), d("div", {
    onKeydown: t[2] || (t[2] = ve(G((p) => r.enterPress(p), ["stop"]), ["enter"]))
  }, [
    e.showLabel ? (o(), d("label", ek, [
      S(b(e.label) + " ", 1),
      e.required ? (o(), d("span", tk, "*")) : _("", !0)
    ])) : _("", !0),
    e.showDescription ? (o(), d("div", nk, b(e.description), 1)) : _("", !0),
    e.multiValue ? (o(), d("div", rk, [
      (o(!0), d(w, null, L(e.model, (p, g) => (o(), k(f, {
        class: "ux-text-row",
        key: g
      }, {
        default: m(() => [
          h(a, null, {
            default: m(() => [
              x("div", ik, [
                h(l, {
                  field: e.field,
                  onFocus: e.touch,
                  ref_for: !0,
                  ref: "input",
                  modelValue: e.model[g],
                  "onUpdate:modelValue": (v) => e.model[g] = v,
                  class: "ux-expression ux-field-focus ux-text-area-multiple"
                }, null, 8, ["field", "onFocus", "modelValue", "onUpdate:modelValue"])
              ])
            ]),
            _: 2
          }, 1024),
          h(a, {
            shrink: "",
            vcenter: ""
          }, {
            default: m(() => [
              e.canRemoveValue ? (o(), k(c, {
                key: 0,
                tag: "a",
                icon: "",
                onClick: (v) => e.remove(p)
              }, {
                default: m(() => [
                  h(u, { icon: "fa-times" })
                ]),
                _: 2
              }, 1032, ["onClick"])) : _("", !0)
            ]),
            _: 2
          }, 1024)
        ]),
        _: 2
      }, 1024))), 128)),
      e.canAddValue ? (o(), k(c, {
        key: 0,
        onClick: t[0] || (t[0] = (p) => e.add())
      }, {
        default: m(() => [
          S(b(e.addLabel), 1)
        ]),
        _: 1
      })) : _("", !0)
    ])) : (o(), d("div", sk, [
      h(l, {
        field: e.field,
        class: "ux-expression ux-field-focus ux-text-area-single",
        onFocus: e.touch,
        modelValue: e.model,
        "onUpdate:modelValue": t[1] || (t[1] = (p) => e.model = p)
      }, null, 8, ["field", "onFocus", "modelValue"])
    ]))
  ], 32);
}
const ak = /* @__PURE__ */ V(Q0, [["render", lk], ["__scopeId", "data-v-56c3b71b"]]);
const ok = {
  components: {},
  methods: {},
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
    modelValue(e) {
      this.model = e;
    },
    model(e) {
      this.$emit("update:modelValue", e);
    }
  },
  mounted() {
    this.mounted = !0;
  },
  beforeUnmount() {
    this.mounted = !1;
  },
  data() {
    return {
      mounted: !1,
      model: this.modelValue
    };
  }
};
function uk(e, t, n, i, s, r) {
  const l = y("tiptap"), a = y("flex-column");
  return s.mounted ? (o(), k(a, { key: 0 }, {
    default: m(() => [
      h(l, {
        modelValue: s.model,
        "onUpdate:modelValue": t[0] || (t[0] = (u) => s.model = u),
        style: { height: "250px" }
      }, null, 8, ["modelValue"])
    ]),
    _: 1
  })) : _("", !0);
}
const dk = /* @__PURE__ */ V(ok, [["render", uk], ["__scopeId", "data-v-844777a7"]]);
const ck = {
  components: {
    richtext: dk
  },
  props: {
    modelValue: {
      type: [String, Array]
    }
  },
  computed: {
    // syntax() {
    //     return this.field ? this.field.syntax : 'json';
    // }
  },
  mixins: [ie],
  methods: {
    getNewDefaultEntry() {
      return "";
    }
  }
}, fk = {
  key: 0,
  class: "ux-field-title"
}, mk = {
  key: 0,
  class: "ux-required-marker"
}, hk = {
  key: 1,
  class: "ux-field-description"
}, pk = { key: 2 }, yk = { class: "richtext-field-wrap" }, _k = {
  key: 3,
  class: "richtext-field-wrap"
};
function gk(e, t, n, i, s, r) {
  const l = y("richtext"), a = y("flex-cell"), u = y("ux-icon"), c = y("ux-button"), f = y("flex-row");
  return o(), d("div", null, [
    e.showLabel ? (o(), d("label", fk, [
      S(b(e.label) + " ", 1),
      e.required ? (o(), d("span", mk, "*")) : _("", !0)
    ])) : _("", !0),
    e.showDescription ? (o(), d("div", hk, b(e.description), 1)) : _("", !0),
    e.multiValue ? (o(), d("div", pk, [
      (o(!0), d(w, null, L(e.model, (p, g) => (o(), k(f, {
        class: "ux-text-row",
        key: g
      }, {
        default: m(() => [
          h(a, null, {
            default: m(() => [
              x("div", yk, [
                h(l, {
                  onFocus: e.touch,
                  ref_for: !0,
                  ref: "input",
                  modelValue: e.model[g],
                  "onUpdate:modelValue": (v) => e.model[g] = v,
                  class: "ux-richtext ux-field-focus ux-text-area-multiple"
                }, null, 8, ["onFocus", "modelValue", "onUpdate:modelValue"])
              ])
            ]),
            _: 2
          }, 1024),
          h(a, {
            shrink: "",
            vcenter: ""
          }, {
            default: m(() => [
              e.canRemoveValue ? (o(), k(c, {
                key: 0,
                tag: "a",
                icon: "",
                onClick: (v) => e.remove(p)
              }, {
                default: m(() => [
                  h(u, { icon: "fa-times" })
                ]),
                _: 2
              }, 1032, ["onClick"])) : _("", !0)
            ]),
            _: 2
          }, 1024)
        ]),
        _: 2
      }, 1024))), 128)),
      e.canAddValue ? (o(), k(c, {
        key: 0,
        onClick: t[0] || (t[0] = (p) => e.add())
      }, {
        default: m(() => [
          S(b(e.addLabel), 1)
        ]),
        _: 1
      })) : _("", !0)
    ])) : (o(), d("div", _k, [
      h(l, {
        class: "ux-richtext ux-field-focus ux-text-area-single",
        onFocus: e.touch,
        modelValue: e.model,
        "onUpdate:modelValue": t[1] || (t[1] = (p) => e.model = p)
      }, null, 8, ["onFocus", "modelValue"])
    ]))
  ]);
}
const vk = /* @__PURE__ */ V(ck, [["render", gk], ["__scopeId", "data-v-6ed5223e"]]);
function bk(e) {
  return e === void 0 || typeof e > "u" || e === null || String(e) === "null" || String(e) === "undefined";
}
const kk = {
  props: {
    title: {
      type: String
    },
    modelValue: {
      // type: [Object, Array],
    }
  },
  mixins: [ie],
  created() {
    this.model = this.model;
  },
  methods: {
    cleanOutput(e) {
      var t = this;
      return bk(e) ? t.multiValue ? e = [] : e = void 0 : t.multiValue ? e = (e || []).filter(Boolean).map(function(n) {
        return t.getValue(n);
      }) : e = t.getValue(e), e;
    },
    cleanInput(e) {
      var t = this;
      if (t.multiValue)
        e || (e = []), Array.isArray(e) || (e = [e]), t.maximum && e.length > t.maximum && (e.length = t.maximum), e = e.filter(Boolean).map(function(i) {
          var s = t.getValue(i);
          return t.returnObject ? t.optionLookup[s] : s;
        });
      else {
        var n = t.getValue(e);
        e = t.returnObject ? t.optionLookup[n] : n;
      }
      return e;
    }
  },
  computed: {
    interface() {
      var e = this.$sdk.global.editor;
      if (e)
        return e.model;
    },
    returnObject() {
      return !1;
    },
    classes() {
      var e = [];
      return this.multiValue ? e.push("multiple") : e.push("single"), e;
    },
    optionLookup() {
      var e = this;
      return e.actualOptions.reduce(function(t, n) {
        const i = e.getValue(n);
        return t[i] = n, t;
      }, {});
    },
    summary() {
      return this.model ? this.getLabel(this.optionLookup[this.model]) : this.title || "Click to select";
    },
    actualOptions() {
      if (!this.interface)
        return [];
      var e = [];
      t(this.interface.routes);
      function t(n, i) {
        i || (i = 0), n.forEach(function(s) {
          s.type != "folder" && e.push({ route: s, depth: i }), s.routes && s.routes.length && t(s.routes, i + 1);
        });
      }
      return e.map(function({ route: n, depth: i }) {
        var s = "-".repeat(i);
        return {
          title: `${s}${n.title}`,
          value: n.name
        };
      });
    },
    selectableOptions() {
      return this.actualOptions;
    }
  }
}, xk = {
  key: 0,
  class: "ux-field-title"
}, wk = {
  key: 0,
  class: "ux-required-marker"
}, Sk = {
  key: 1,
  class: "ux-field-description"
}, Tk = {
  key: 2,
  class: "ui-select-button"
}, Ok = ["multiple"], Vk = {
  key: 0,
  value: ""
}, Ak = ["value"];
function Ck(e, t, n, i, s, r) {
  const l = y("ux-button");
  return o(), d("div", {
    class: R(["native-select", r.classes])
  }, [
    e.showLabel ? (o(), d("label", xk, [
      S(b(e.label) + " ", 1),
      e.required ? (o(), d("span", wk, "*")) : _("", !0)
    ])) : _("", !0),
    e.showDescription ? (o(), d("div", Sk, b(e.description), 1)) : _("", !0),
    e.singleValue ? (o(), d("div", Tk, [
      W(e.$slots, "default", {}, () => [
        h(l, { tag: "div" }, {
          default: m(() => [
            S(b(r.summary), 1)
          ]),
          _: 1
        })
      ], !0)
    ])) : _("", !0),
    Y(x("select", {
      onFocus: t[0] || (t[0] = (...a) => e.touch && e.touch(...a)),
      multiple: e.multiValue,
      "onUpdate:modelValue": t[1] || (t[1] = (a) => e.model = a)
    }, [
      e.singleValue && !e.minimum ? (o(), d("option", Vk, "None")) : _("", !0),
      (o(!0), d(w, null, L(r.selectableOptions, (a) => (o(), d("option", {
        value: a.value
      }, b(a.title), 9, Ak))), 256))
    ], 40, Ok), [
      [Mt, e.model]
    ])
  ], 2);
}
const Ek = /* @__PURE__ */ V(kk, [["render", Ck], ["__scopeId", "data-v-ee74f64d"]]);
function Mk(e) {
  return e === void 0 || typeof e > "u" || e === null || String(e) === "null" || String(e) === "undefined";
}
const Ik = {
  props: {
    title: {
      type: String
    },
    modelValue: {
      // type: [Object, Array],
    }
  },
  mixins: [ie],
  created() {
    this.model = this.model;
  },
  methods: {
    cleanOutput(e) {
      var t = this;
      return Mk(e) ? t.multiValue ? e = [] : e = void 0 : t.multiValue ? e = (e || []).filter(Boolean).map(function(n) {
        return t.getValue(n);
      }) : e = t.getValue(e), e;
    },
    cleanInput(e) {
      var t = this;
      if (t.multiValue)
        e || (e = []), Array.isArray(e) || (e = [e]), t.maximum && e.length > t.maximum && (e.length = t.maximum), e = e.filter(Boolean).map(function(i) {
          var s = t.getValue(i);
          return t.returnObject ? t.optionLookup[s] : s;
        });
      else {
        var n = t.getValue(e);
        e = t.returnObject ? t.optionLookup[n] : n;
      }
      return e;
    }
  },
  computed: {
    interface() {
      var e = this.$sdk.global.editor;
      if (e)
        return e.model;
    },
    returnObject() {
      return !1;
    },
    classes() {
      var e = [];
      return this.multiValue ? e.push("multiple") : e.push("single"), e;
    },
    optionLookup() {
      var e = this;
      return e.actualOptions.reduce(function(t, n) {
        const i = e.getValue(n);
        return t[i] = n, t;
      }, {});
    },
    summary() {
      return this.model ? this.getLabel(this.optionLookup[this.model]) : this.title || "Click to select";
    },
    actualOptions() {
      return this.interface ? this.interface.menus.map(function(e) {
        return {
          title: e.title,
          value: e.name
        };
      }) : [];
    },
    selectableOptions() {
      return this.actualOptions;
    }
  }
}, Dk = {
  key: 0,
  class: "ux-field-title"
}, Fk = {
  key: 0,
  class: "ux-required-marker"
}, $k = {
  key: 1,
  class: "ux-field-description"
}, Nk = {
  key: 2,
  class: "ui-select-button"
}, Lk = ["multiple"], Pk = {
  key: 0,
  value: ""
}, Uk = ["value"];
function jk(e, t, n, i, s, r) {
  const l = y("ux-button");
  return o(), d("div", {
    class: R(["native-select", r.classes])
  }, [
    e.showLabel ? (o(), d("label", Dk, [
      S(b(e.label) + " ", 1),
      e.required ? (o(), d("span", Fk, "*")) : _("", !0)
    ])) : _("", !0),
    e.showDescription ? (o(), d("div", $k, b(e.description), 1)) : _("", !0),
    e.singleValue ? (o(), d("div", Nk, [
      W(e.$slots, "default", {}, () => [
        h(l, { tag: "div" }, {
          default: m(() => [
            S(b(r.summary), 1)
          ]),
          _: 1
        })
      ], !0)
    ])) : _("", !0),
    Y(x("select", {
      onFocus: t[0] || (t[0] = (...a) => e.touch && e.touch(...a)),
      multiple: e.multiValue,
      "onUpdate:modelValue": t[1] || (t[1] = (a) => e.model = a)
    }, [
      e.singleValue && !e.minimum ? (o(), d("option", Pk, "None")) : _("", !0),
      (o(!0), d(w, null, L(r.selectableOptions, (a) => (o(), d("option", {
        value: a.value
      }, b(a.title), 9, Uk))), 256))
    ], 40, Lk), [
      [Mt, e.model]
    ])
  ], 2);
}
const Rk = /* @__PURE__ */ V(Ik, [["render", jk], ["__scopeId", "data-v-8801d1a0"]]);
var hr = {}, Bk = {
  get exports() {
    return hr;
  },
  set exports(e) {
    hr = e;
  }
};
(function(e, t) {
  (function(n) {
    var i = "Compound", s = "Identifier", r = "MemberExpression", l = "Literal", a = "ThisExpression", u = "CallExpression", c = "UnaryExpression", f = "BinaryExpression", p = "LogicalExpression", g = "ConditionalExpression", v = "ArrayExpression", T = 46, A = 44, E = 39, q = 34, Q = 40, ne = 41, ae = 91, oe = 93, B = 63, F = 59, se = 58, z = function($, O) {
      var Xe = new Error($ + " at character " + O);
      throw Xe.index = O, Xe.description = $, Xe;
    }, Ce = !0, ke = { "-": Ce, "!": Ce, "~": Ce, "+": Ce }, xe = {
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
    }, Te = function($) {
      var O = 0, Xe;
      for (var Lt in $)
        (Xe = Lt.length) > O && $.hasOwnProperty(Lt) && (O = Xe);
      return O;
    }, Oe = Te(ke), Fe = Te(xe), Ve = {
      true: !0,
      false: !1,
      null: null
    }, D = "this", ut = function($) {
      return xe[$] || 0;
    }, Fn = function($, O, Xe) {
      var Lt = $ === "||" || $ === "&&" ? p : f;
      return {
        type: Lt,
        operator: $,
        left: O,
        right: Xe
      };
    }, Nt = function($) {
      return $ >= 48 && $ <= 57;
    }, dt = function($) {
      return $ === 36 || $ === 95 || // `$` and `_`
      $ >= 65 && $ <= 90 || // A...Z
      $ >= 97 && $ <= 122 || // a...z
      $ >= 128 && !xe[String.fromCharCode($)];
    }, sn = function($) {
      return $ === 36 || $ === 95 || // `$` and `_`
      $ >= 65 && $ <= 90 || // A...Z
      $ >= 97 && $ <= 122 || // a...z
      $ >= 48 && $ <= 57 || // 0...9
      $ >= 128 && !xe[String.fromCharCode($)];
    }, $e = function($) {
      for (var O = 0, Xe = $.charAt, Lt = $.charCodeAt, Ee = function(C) {
        return Xe.call($, C);
      }, ue = function(C) {
        return Lt.call($, C);
      }, ln = $.length, Qe = function() {
        for (var C = ue(O); C === 32 || C === 9 || C === 10 || C === 13; )
          C = ue(++O);
      }, Pt = function() {
        var C = ro(), N, Z;
        if (Qe(), ue(O) === B) {
          if (O++, N = Pt(), N || z("Expected expression", O), Qe(), ue(O) === se)
            return O++, Z = Pt(), Z || z("Expected expression", O), {
              type: g,
              test: C,
              consequent: N,
              alternate: Z
            };
          z("Expected :", O);
        } else
          return C;
      }, Di = function() {
        Qe();
        for (var C = $.substr(O, Fe), N = C.length; N > 0; ) {
          if (xe.hasOwnProperty(C) && (!dt(ue(O)) || O + C.length < $.length && !sn(ue(O + C.length))))
            return O += N, C;
          C = C.substr(0, --N);
        }
        return !1;
      }, ro = function() {
        var C, N, Z, re, wt, Ge, ct, Ut, Li;
        if (Ge = $n(), N = Di(), !N)
          return Ge;
        for (wt = { value: N, prec: ut(N) }, ct = $n(), ct || z("Expected expression after " + N, O), re = [Ge, wt, ct]; (N = Di()) && (Z = ut(N), Z !== 0); ) {
          for (wt = { value: N, prec: Z }, Li = N; re.length > 2 && Z <= re[re.length - 2].prec; )
            ct = re.pop(), N = re.pop().value, Ge = re.pop(), C = Fn(N, Ge, ct), re.push(C);
          C = $n(), C || z("Expected expression after " + Li, O), re.push(wt, C);
        }
        for (Ut = re.length - 1, C = re[Ut]; Ut > 1; )
          C = Fn(re[Ut - 1].value, re[Ut - 2], C), Ut -= 2;
        return C;
      }, $n = function() {
        var C, N, Z;
        if (Qe(), C = ue(O), Nt(C) || C === T)
          return io();
        if (C === E || C === q)
          return so();
        if (C === ae)
          return oo();
        for (N = $.substr(O, Oe), Z = N.length; Z > 0; ) {
          if (ke.hasOwnProperty(N) && (!dt(ue(O)) || O + N.length < $.length && !sn(ue(O + N.length))))
            return O += Z, {
              type: c,
              operator: N,
              argument: $n(),
              prefix: !0
            };
          N = N.substr(0, --Z);
        }
        return dt(C) || C === Q ? lo() : !1;
      }, io = function() {
        for (var C = "", N, Z; Nt(ue(O)); )
          C += Ee(O++);
        if (ue(O) === T)
          for (C += Ee(O++); Nt(ue(O)); )
            C += Ee(O++);
        if (N = Ee(O), N === "e" || N === "E") {
          for (C += Ee(O++), N = Ee(O), (N === "+" || N === "-") && (C += Ee(O++)); Nt(ue(O)); )
            C += Ee(O++);
          Nt(ue(O - 1)) || z("Expected exponent (" + C + Ee(O) + ")", O);
        }
        return Z = ue(O), dt(Z) ? z("Variable names cannot start with a number (" + C + Ee(O) + ")", O) : Z === T && z("Unexpected period", O), {
          type: l,
          value: parseFloat(C),
          raw: C
        };
      }, so = function() {
        for (var C = "", N = Ee(O++), Z = !1, re; O < ln; )
          if (re = Ee(O++), re === N) {
            Z = !0;
            break;
          } else if (re === "\\")
            switch (re = Ee(O++), re) {
              case "n":
                C += `
`;
                break;
              case "r":
                C += "\r";
                break;
              case "t":
                C += "	";
                break;
              case "b":
                C += "\b";
                break;
              case "f":
                C += "\f";
                break;
              case "v":
                C += "\v";
                break;
              default:
                C += re;
            }
          else
            C += re;
        return Z || z('Unclosed quote after "' + C + '"', O), {
          type: l,
          value: C,
          raw: N + C + N
        };
      }, Fi = function() {
        var C = ue(O), N = O, Z;
        for (dt(C) ? O++ : z("Unexpected " + Ee(O), O); O < ln && (C = ue(O), sn(C)); )
          O++;
        return Z = $.slice(N, O), Ve.hasOwnProperty(Z) ? {
          type: l,
          value: Ve[Z],
          raw: Z
        } : Z === D ? { type: a } : {
          type: s,
          name: Z
        };
      }, $i = function(C) {
        for (var N, Z = [], re, wt = !1, Ge = 0; O < ln; )
          if (Qe(), N = ue(O), N === C) {
            wt = !0, O++, C === ne && Ge && Ge >= Z.length && z("Unexpected token " + String.fromCharCode(C), O);
            break;
          } else if (N === A) {
            if (O++, Ge++, Ge !== Z.length) {
              if (C === ne)
                z("Unexpected token ,", O);
              else if (C === oe)
                for (var ct = Z.length; ct < Ge; ct++)
                  Z.push(null);
            }
          } else
            re = Pt(), (!re || re.type === i) && z("Expected comma", O), Z.push(re);
        return wt || z("Expected " + String.fromCharCode(C), O), Z;
      }, lo = function() {
        var C, N;
        for (C = ue(O), C === Q ? N = ao() : N = Fi(), Qe(), C = ue(O); C === T || C === ae || C === Q; )
          O++, C === T ? (Qe(), N = {
            type: r,
            computed: !1,
            object: N,
            property: Fi()
          }) : C === ae ? (N = {
            type: r,
            computed: !0,
            object: N,
            property: Pt()
          }, Qe(), C = ue(O), C !== oe && z("Unclosed [", O), O++) : C === Q && (N = {
            type: u,
            arguments: $i(ne),
            callee: N
          }), Qe(), C = ue(O);
        return N;
      }, ao = function() {
        O++;
        var C = Pt();
        if (Qe(), ue(O) === ne)
          return O++, C;
        z("Unclosed (", O);
      }, oo = function() {
        return O++, {
          type: v,
          elements: $i(oe)
        };
      }, Nn = [], Ar, Ni; O < ln; )
        Ar = ue(O), Ar === F || Ar === A ? O++ : (Ni = Pt()) ? Nn.push(Ni) : O < ln && z('Unexpected "' + Ee(O) + '"', O);
      return Nn.length === 1 ? Nn[0] : {
        type: i,
        body: Nn
      };
    };
    $e.version = "0.3.5", $e.toString = function() {
      return "JavaScript Expression Parser (JSEP) v" + $e.version;
    }, $e.addUnaryOp = function($) {
      return Oe = Math.max($.length, Oe), ke[$] = Ce, this;
    }, $e.addBinaryOp = function($, O) {
      return Fe = Math.max($.length, Fe), xe[$] = O, this;
    }, $e.addLiteral = function($, O) {
      return Ve[$] = O, this;
    }, $e.removeUnaryOp = function($) {
      return delete ke[$], $.length === Oe && (Oe = Te(ke)), this;
    }, $e.removeAllUnaryOps = function() {
      return ke = {}, Oe = 0, this;
    }, $e.removeBinaryOp = function($) {
      return delete xe[$], $.length === Fe && (Fe = Te(xe)), this;
    }, $e.removeAllBinaryOps = function() {
      return xe = {}, Fe = 0, this;
    }, $e.removeLiteral = function($) {
      return delete Ve[$], this;
    }, $e.removeAllLiterals = function() {
      return Ve = {}, this;
    }, e.exports ? t = e.exports = $e : t.parse = $e;
  })();
})(Bk, hr);
const zk = hr;
var Ls = { "||": function(e, t) {
  return e || t;
}, "&&": function(e, t) {
  return e && t;
}, "|": function(e, t) {
  return e | t;
}, "^": function(e, t) {
  return e ^ t;
}, "&": function(e, t) {
  return e & t;
}, "==": function(e, t) {
  return e == t;
}, "!=": function(e, t) {
  return e != t;
}, "===": function(e, t) {
  return e === t;
}, "!==": function(e, t) {
  return e !== t;
}, "<": function(e, t) {
  return e < t;
}, ">": function(e, t) {
  return e > t;
}, "<=": function(e, t) {
  return e <= t;
}, ">=": function(e, t) {
  return e >= t;
}, "<<": function(e, t) {
  return e << t;
}, ">>": function(e, t) {
  return e >> t;
}, ">>>": function(e, t) {
  return e >>> t;
}, "+": function(e, t) {
  return e + t;
}, "-": function(e, t) {
  return e - t;
}, "*": function(e, t) {
  return e * t;
}, "/": function(e, t) {
  return e / t;
}, "%": function(e, t) {
  return e % t;
} }, Hk = { "-": function(e) {
  return -e;
}, "+": function(e) {
  return +e;
}, "~": function(e) {
  return ~e;
}, "!": function(e) {
  return !e;
} };
function Ps(e, t) {
  return e.map(function(n) {
    return Se(n, t);
  });
}
function Us(e, t) {
  var n, i = Se(e.object, t);
  if (n = e.computed ? Se(e.property, t) : e.property.name, /^__proto__|prototype|constructor$/.test(n))
    throw Error('Access to member "' + n + '" disallowed.');
  return [i, i[n]];
}
function Se(e, t) {
  var n = e;
  switch (n.type) {
    case "ArrayExpression":
      return Ps(n.elements, t);
    case "BinaryExpression":
      return Ls[n.operator](Se(n.left, t), Se(n.right, t));
    case "CallExpression":
      var i, s, r;
      return n.callee.type === "MemberExpression" ? (i = (r = Us(n.callee, t))[0], s = r[1]) : s = Se(n.callee, t), typeof s != "function" ? void 0 : s.apply(i, Ps(n.arguments, t));
    case "ConditionalExpression":
      return Se(n.test, t) ? Se(n.consequent, t) : Se(n.alternate, t);
    case "Identifier":
      return t[n.name];
    case "Literal":
      return n.value;
    case "LogicalExpression":
      return n.operator === "||" ? Se(n.left, t) || Se(n.right, t) : n.operator === "&&" ? Se(n.left, t) && Se(n.right, t) : Ls[n.operator](Se(n.left, t), Se(n.right, t));
    case "MemberExpression":
      return Us(n, t)[1];
    case "ThisExpression":
      return t;
    case "UnaryExpression":
      return Hk[n.operator](Se(n.argument, t));
    default:
      return;
  }
}
function qk(e, t, n, i) {
  for (var s = e.length, r = n + (i ? 1 : -1); i ? r-- : ++r < s; )
    if (t(e[r], r, e))
      return r;
  return -1;
}
var Gk = qk;
function Wk(e) {
  return e !== e;
}
var Zk = Wk;
function Kk(e, t, n) {
  for (var i = n - 1, s = e.length; ++i < s; )
    if (e[i] === t)
      return i;
  return -1;
}
var Yk = Kk, Jk = Gk, Xk = Zk, Qk = Yk;
function ex(e, t, n) {
  return t === t ? Qk(e, t, n) : Jk(e, Xk, n);
}
var tx = ex, nx = 9007199254740991;
function rx(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= nx;
}
var La = rx, ix = tl, sx = La;
function lx(e) {
  return e != null && sx(e.length) && !ix(e);
}
var Pa = lx, ax = Vn, ox = Tn, ux = An, dx = "[object String]";
function cx(e) {
  return typeof e == "string" || !ox(e) && ux(e) && ax(e) == dx;
}
var fx = cx, mx = $a, js = 1 / 0, hx = 17976931348623157e292;
function px(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = mx(e), e === js || e === -js) {
    var t = e < 0 ? -1 : 1;
    return t * hx;
  }
  return e === e ? e : 0;
}
var yx = px, _x = yx;
function gx(e) {
  var t = _x(e), n = t % 1;
  return t === t ? n ? t - n : t : 0;
}
var vx = gx, bx = il;
function kx(e, t) {
  return bx(t, function(n) {
    return e[n];
  });
}
var xx = kx;
function wx(e, t) {
  for (var n = -1, i = Array(e); ++n < e; )
    i[n] = t(n);
  return i;
}
var Sx = wx, Tx = Vn, Ox = An, Vx = "[object Arguments]";
function Ax(e) {
  return Ox(e) && Tx(e) == Vx;
}
var Cx = Ax, Rs = Cx, Ex = An, Ua = Object.prototype, Mx = Ua.hasOwnProperty, Ix = Ua.propertyIsEnumerable, Dx = Rs(function() {
  return arguments;
}()) ? Rs : function(e) {
  return Ex(e) && Mx.call(e, "callee") && !Ix.call(e, "callee");
}, Fx = Dx, pr = {}, $x = {
  get exports() {
    return pr;
  },
  set exports(e) {
    pr = e;
  }
};
function Nx() {
  return !1;
}
var Lx = Nx;
(function(e, t) {
  var n = On, i = Lx, s = t && !t.nodeType && t, r = s && !0 && e && !e.nodeType && e, l = r && r.exports === s, a = l ? n.Buffer : void 0, u = a ? a.isBuffer : void 0, c = u || i;
  e.exports = c;
})($x, pr);
var Px = 9007199254740991, Ux = /^(?:0|[1-9]\d*)$/;
function jx(e, t) {
  var n = typeof e;
  return t = t ?? Px, !!t && (n == "number" || n != "symbol" && Ux.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var Rx = jx, Bx = Vn, zx = La, Hx = An, qx = "[object Arguments]", Gx = "[object Array]", Wx = "[object Boolean]", Zx = "[object Date]", Kx = "[object Error]", Yx = "[object Function]", Jx = "[object Map]", Xx = "[object Number]", Qx = "[object Object]", ew = "[object RegExp]", tw = "[object Set]", nw = "[object String]", rw = "[object WeakMap]", iw = "[object ArrayBuffer]", sw = "[object DataView]", lw = "[object Float32Array]", aw = "[object Float64Array]", ow = "[object Int8Array]", uw = "[object Int16Array]", dw = "[object Int32Array]", cw = "[object Uint8Array]", fw = "[object Uint8ClampedArray]", mw = "[object Uint16Array]", hw = "[object Uint32Array]", le = {};
le[lw] = le[aw] = le[ow] = le[uw] = le[dw] = le[cw] = le[fw] = le[mw] = le[hw] = !0;
le[qx] = le[Gx] = le[iw] = le[Wx] = le[sw] = le[Zx] = le[Kx] = le[Yx] = le[Jx] = le[Xx] = le[Qx] = le[ew] = le[tw] = le[nw] = le[rw] = !1;
function pw(e) {
  return Hx(e) && zx(e.length) && !!le[Bx(e)];
}
var yw = pw;
function _w(e) {
  return function(t) {
    return e(t);
  };
}
var gw = _w, yr = {}, vw = {
  get exports() {
    return yr;
  },
  set exports(e) {
    yr = e;
  }
};
(function(e, t) {
  var n = Qs, i = t && !t.nodeType && t, s = i && !0 && e && !e.nodeType && e, r = s && s.exports === i, l = r && n.process, a = function() {
    try {
      var u = s && s.require && s.require("util").types;
      return u || l && l.binding && l.binding("util");
    } catch {
    }
  }();
  e.exports = a;
})(vw, yr);
var bw = yw, kw = gw, Bs = yr, zs = Bs && Bs.isTypedArray, xw = zs ? kw(zs) : bw, ww = xw, Sw = Sx, Tw = Fx, Ow = Tn, Vw = pr, Aw = Rx, Cw = ww, Ew = Object.prototype, Mw = Ew.hasOwnProperty;
function Iw(e, t) {
  var n = Ow(e), i = !n && Tw(e), s = !n && !i && Vw(e), r = !n && !i && !s && Cw(e), l = n || i || s || r, a = l ? Sw(e.length, String) : [], u = a.length;
  for (var c in e)
    (t || Mw.call(e, c)) && !(l && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    s && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    r && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    Aw(c, u))) && a.push(c);
  return a;
}
var Dw = Iw, Fw = Object.prototype;
function $w(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || Fw;
  return e === n;
}
var Nw = $w;
function Lw(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var Pw = Lw, Uw = Pw, jw = Uw(Object.keys, Object), Rw = jw, Bw = Nw, zw = Rw, Hw = Object.prototype, qw = Hw.hasOwnProperty;
function Gw(e) {
  if (!Bw(e))
    return zw(e);
  var t = [];
  for (var n in Object(e))
    qw.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
var Ww = Gw, Zw = Dw, Kw = Ww, Yw = Pa;
function Jw(e) {
  return Yw(e) ? Zw(e) : Kw(e);
}
var Xw = Jw, Qw = xx, eS = Xw;
function tS(e) {
  return e == null ? [] : Qw(e, eS(e));
}
var nS = tS, rS = tx, iS = Pa, sS = fx, lS = vx, aS = nS, oS = Math.max;
function uS(e, t, n, i) {
  e = iS(e) ? e : aS(e), n = n && !i ? lS(n) : 0;
  var s = e.length;
  return n < 0 && (n = oS(s + n, 0)), sS(e) ? n <= s && e.indexOf(t, n) > -1 : !!s && rS(e, t, n) > -1;
}
var dS = uS;
const Jt = {};
function cS(e, t, n, i) {
  return e ? Array.isArray(e) ? e.filter(function(s) {
    const r = ir(s, t);
    let l;
    switch (i) {
      case ">":
        l = r > n;
        break;
      case "<":
        l = r < n;
        break;
      case ">=":
        l = r >= n;
        break;
      case "<=":
        l = r <= n;
        break;
      case "in":
        l = dS(r, n);
        break;
      default:
        n === void 0 ? l = r : l = r == n;
        break;
    }
    return l;
  }) : (console.error("array.filter value was not provided as array", { input: e }), []) : [];
}
function fS(e) {
  return e.reduce(function(t, n) {
    return t + n;
  }, 0);
}
function mS(e, t, n, i, s) {
  if (!e)
    return [];
  if (s = s || {}, s.flat = n, s.unique = i, !Array.isArray(e))
    return console.error("array.filter value was not provided as array", { input: e }), [];
  let r = e.reduce(function(l, a) {
    const u = ir(a, t), c = !u && u !== !1 && u !== 0;
    return s.excludeNull && c || l.push(u), l;
  }, []);
  return s.unique && (r = [...new Set(r)]), s.flat && (r = r.flat()), r;
}
Jt.evaluateExpression = function(e, t) {
  if (typeof e == "function")
    return e(t);
  t = Object.assign({}, {
    Math,
    String,
    Array,
    Date,
    Boolean,
    parseInt,
    parseFloat,
    array: {
      filter: cS,
      extract: mS,
      sum: fS
    },
    create(r, ...l) {
      return new r(...l);
    }
  }, t);
  var i, s;
  try {
    i = zk(e), s = Se(i, t);
  } catch (r) {
    console.log("There was an error evaluating your expression", { expression: e, error: r });
  } finally {
  }
  return s;
};
function Jr(e) {
  switch (String(e).toLowerCase()) {
    case "true":
    case "y":
    case "yes":
    case "1":
    case "t":
      e = !0;
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
      e = !1;
      break;
  }
  return !!e;
}
function mn(e, t, n, i, s, r) {
  t = t || [], n = Math.max(n, i);
  var l = t.length, a = l >= n;
  if (!a) {
    var u = n - l, c = Array(u).fill().map(r);
    return [...t, ...c];
  }
  return t;
}
function hS(e, t) {
  if (t)
    return t;
  function n(g) {
    return g === void 0 || typeof g > "u" || g === null;
  }
  var i = parseInt(e.minimum), s = parseInt(e.maximum), r = parseInt(e.ask || 0);
  r = Math.max(r, i), r = s ? Math.min(r, s) : r;
  var l = s === 1;
  e.asObject && e.type === "group" && (s === 1 && i === 1 ? l = !0 : l = !1);
  var a = !l, u = (e.type === "reference" ? e.defaultReferences : e.defaultValues) || [], c = u[0], f;
  switch (e.type) {
    case "date":
      let g = function(v) {
        switch (String(v).toLowerCase()) {
          case "now":
            return new Date();
        }
        return new Date(v);
      };
      a ? (u.length && (s ? f = u.slice(0, s).map(function(v) {
        return g(v);
      }) : f = u.slice().map(function(v) {
        return g(v);
      })), f = mn(e, f, i, r, s, function() {
        return g(new Date());
      })) : f = n(c) ? void 0 : g(c);
      break;
    case "integer":
    case "decimal":
    case "number":
    case "float":
      a ? (u.length && (s ? f = u.slice(0, s).map(function(v) {
        return Number(v);
      }) : f = u.slice().map(function(v) {
        return Number(v);
      })), f = mn(e, f, i, r, s, function() {
        return "";
      })) : f = n(c) ? void 0 : Number(c);
      break;
    case "group":
      if (e.asObject) {
        var p = r;
        a ? p > 0 ? f = Array(p).fill().map(function() {
          return {};
        }) : f = [] : f = n(c) ? {} : c;
      }
      break;
    case "object":
      var p = r;
      a ? p > 0 ? f = Array(p).fill().map(function() {
        return {};
      }) : f = [] : f = n(c) ? {} : c;
      break;
    case "boolean":
      a ? (u.length && (s ? f = u.slice(0, s).map(function(v) {
        return Jr(v);
      }) : f = u.slice().map(function(v) {
        return Jr(v);
      })), f = mn(e, f, i, r, s, function() {
      })) : f = n(c) ? !1 : Jr(c);
      break;
    case "reference":
      if (e.widget === "form") {
        var p = r;
        a ? p > 0 ? f = Array(p).fill().map(function() {
          return {};
        }) : f = [] : i ? f = n(c) ? {} : c : f = void 0;
      } else
        a ? u.length ? f = u.slice(0, s) : f = [] : f = n(c) ? void 0 : c;
      break;
    case "string":
      a ? (u.length && (f = u.slice(0, s)), f = mn(e, f, i, r, s, function() {
        return "";
      })) : f = n(c) ? "" : c;
      break;
    default:
      a ? (u.length && (f = u.slice(0, s)), f = mn(e, f, i, r, s, function() {
      })) : f = n(c) ? "" : c;
      break;
  }
  return f;
}
function et(e) {
  return function() {
    var t = this;
    if (!t.expressions)
      return;
    let n = t.expressions[e];
    if (!n)
      return;
    let i = t.expressionsContext;
    return Jt.evaluateExpression(n, i);
  };
}
const pS = {
  components: {
    InternalRouteSelect: Ek,
    InternalMenuSelect: Rk,
    ButtonSelect: m0,
    NativeSelect: $t,
    DateField: Fa,
    DateRange: cb,
    TextField: Da,
    CurrencyField: Ia,
    TextArea: Jv,
    Checkbox: _b,
    FilterInput: O1,
    CustomHtml: wb,
    BooleanSwitch: I1,
    FieldGroup: n0,
    ContentSelect: Ma,
    TypeSelect: Rg,
    ScopeSelect: sv,
    FieldSelect: yv,
    TimezoneSelect: A_,
    PhoneNumberInput: __,
    Upload: H1,
    ObjectField: k0,
    OptionsManager: j0,
    CodeEditorField: X0,
    ExpressionField: ak,
    RichTextField: vk
  },
  props: {
    trail: {
      type: Array,
      default() {
        return [];
      }
    },
    submission: {
      type: Boolean,
      default: !1
    },
    field: {
      type: Object,
      required: !0
    },
    parentModel: {
      type: Object
    },
    modelValue: {
      type: Object,
      required: !0
    },
    includeOfficeOnly: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      watching: !0,
      defaultValue: null,
      model: this.modelValue,
      touched: !1,
      focussed: !1,
      validateResults: { valid: !0 },
      mounted: !1,
      subFormState: {},
      isDirty: !1,
      isDirtyBeforeInput: !1
    };
  },
  inject: ["parentFormElement", "additionalContext"],
  provide() {
    return {
      fieldPath: this.fieldPath
    };
  },
  created() {
    this.checkDirtyState();
  },
  mounted() {
    const e = this;
    e.mounted = !0, e.parentFormElement && e.parentFormElement.childFormElements && e.parentFormElement.childFormElements.push(e);
  },
  beforeUnmount() {
    const e = this;
    if (e.mounted = !1, e.parentFormElement) {
      var t = e.parentFormElement.childFormElements.indexOf(e);
      e.parentFormElement.childFormElements.splice(t, 1);
    }
  },
  methods: {
    fieldDefaultValue() {
      var e = this.expressions && this.expressions.defaultValue ? this.getExpressionDefaultValue : void 0, t = hS(this.actualField), n = this.cleanInput(e || t);
      return n;
    },
    checkDirtyState() {
      var e = this.fieldModel, t = e || e === !1 || e === 0, n = this.fieldDefaultValue(), i = JSON.stringify(this.cleanOutput(e)), s = JSON.stringify(this.cleanOutput(n));
      t && i != s ? (this.isDirty = !0, this.isDirtyBeforeInput = !0, this.fieldModel = e) : (this.isDirty = !1, this.isDirtyBeforeInput = !1, this.fieldModel = n);
    },
    groupStateAltered(e) {
      this.subFormState = e;
    },
    focus() {
      this.focussed = !0;
    },
    blur() {
      this.focussed = !1, this.expressions && this.expressions.value && (this.fieldModel = this.getExpressionValue);
    },
    touch() {
      this.touched = !0;
    },
    untouch() {
      this.touched = !1;
    },
    reset() {
      this.untouch(), this.watching = !1;
      var e = this.fieldDefaultValue();
      Array.isArray(e) && (e = []), this.model[this.key] = e, this.$nextTick(function() {
        this.watching = !0;
      });
    },
    cleanInput(e) {
      return this.fieldCleanInput(e);
    },
    cleanOutput(e) {
      return this.fieldCleanOutput(e);
    },
    fieldCleanInput(e) {
      var i;
      var t = this, n = (i = t.expressions) == null ? void 0 : i.transform;
      return n && typeof n.set == "function" && (e = n.set(e)), e;
    },
    fieldCleanOutput(e) {
      var i;
      var t = this, n = (i = t.expressions) == null ? void 0 : i.transform;
      return n && typeof n.get == "function" && (e = n.get(e)), e;
    }
  },
  watch: {
    mounted(e) {
      e ? this.$emit("field:mount", this) : this.$emit("field:unmount", this);
    },
    visible(e) {
      e ? this.untouch() : (this.touched = !1, this.expressions && this.expressions.value ? this.fieldModel = this.getExpressionValue : this.fieldModel = void 0);
    },
    focussed(e) {
      e ? this.$emit("field:focus", this) : this.$emit("field:blur", this);
    },
    invalid(e) {
      this.$emit("field:invalid", this);
    },
    valid(e) {
      this.$emit("field:valid", this);
    },
    error(e) {
      this.$emit("field:error", this);
    },
    touched(e) {
      this.$emit("field:touched", this);
    },
    dirty(e) {
      this.$emit("field:dirty", this);
    },
    changeString(e) {
      this.validateResults = this.$sdk.content.validateField(this.fieldModel, this.actualField);
    },
    modelValue(e, t) {
      this.watching && (this.model = e, this.touched = !1, this.checkDirtyState());
    },
    getExpressionHide(e) {
    },
    getExpressionDefaultValue(e) {
      this.isDirtyBeforeInput || this.touched && this.dirty || (this.fieldModel = e);
    },
    getExpressionValue(e) {
      this.fieldModel = e;
    }
  },
  computed: {
    fieldPath() {
      return this.currentTrail.join(".");
    },
    currentTrail() {
      var e = this.trail.slice();
      return e.push(this.field.key), e;
    },
    title() {
      return this.field.title;
    },
    minimum() {
      return parseInt(this.actualField.minimum);
    },
    maximum() {
      return parseInt(this.actualField.maximum);
    },
    actualField() {
      var e = this.field, t = e;
      return this.getExpressionRequired && (t = Object.assign({}, t, { minimum: 1 })), this.getExpressionReferenceType && (t = Object.assign({}, t, { referenceType: this.getExpressionReferenceType })), this.getExpressionVisualHide && (t = Object.assign({}, t, { visualHide: this.getExpressionVisualHide })), this.getExpressionWidgetType && (t = Object.assign({}, t, { widget: this.getExpressionWidgetType })), this.getExpressionDataType && (t = Object.assign({}, t, { type: this.getExpressionDataType })), this.getExpressionOptions && (t = Object.assign({}, t, { options: this.getExpressionOptions })), this.getExpressionSyntax && (t = Object.assign({}, t, { syntax: this.getExpressionSyntax })), this.getExpressionCurrency && (t = Object.assign({}, t, { currency: this.getExpressionCurrency })), t;
    },
    changeString() {
      const e = this.fieldModel;
      return `${Kt(e)}-${this.actualField.minimum}-${this.actualField.referenceType}`;
    },
    valid() {
      return !this.invalid;
    },
    error() {
      return !this.focussed && this.touched && this.invalid;
    },
    invalid() {
      var e = this.subFormState && this.subFormState.invalid;
      if (e)
        return { invalidSubForm: this.subFormState, mounted: this.mounted };
      var t = !this.validateResults.valid;
      return this.hidden ? !1 : t;
    },
    dirty() {
      return this.isDirty;
    },
    getExpressionHide() {
      if (!this.expressions)
        return;
      let e = this.expressions.show, t = this.expressions.hide, n = this.expressionsContext;
      if (e)
        return !Jt.evaluateExpression(e, n);
      if (t)
        return Jt.evaluateExpression(t, n);
    },
    getExpressionRequired: et("required"),
    getExpressionDefaultValue: et("defaultValue"),
    getExpressionValue: et("value"),
    getExpressionReferenceType: et("referenceType"),
    getExpressionWidgetType: et("widget"),
    getExpressionDataType: et("type"),
    getExpressionOptions: et("options"),
    getExpressionSyntax: et("syntax"),
    getExpressionCurrency: et("currency"),
    getExpressionVisualHide: et("visualHide"),
    // hasExpressionDefaultValue: hasExpression('defaultValue'), // Not sure what this is for
    expressions() {
      return this.field.expressions;
    },
    expressionsContext() {
      var n;
      var e = ((n = this.additionalContext) == null ? void 0 : n.value) || {};
      return {
        this: this.model,
        self: this.model,
        model: this.model,
        data: this.parentModel || this.model,
        additional: {
          ...e
        }
      };
    },
    officeOnly() {
      return this.submission && this.field.officeOnly;
    },
    hidden() {
      return this.officeOnly && !this.includeOfficeOnly || this.actualField.readOnly ? !0 : this.getExpressionHide;
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
      return this.widget === "form" || this.isGroup && this.actualField.asObject;
    },
    visualHide() {
      return this.actualField.visualHide;
    },
    layoutGroup() {
      return this.isGroup && !this.actualField.asObject;
    },
    fieldModel: {
      get() {
        return this.cleanOutput(this.model[this.key]);
      },
      set(e) {
        var t = this.cleanInput(e);
        this.model[this.key] != t && (this.model[this.key] = t, this.isDirty = !0, this.$emit("update:modelValue", this.model));
      }
    },
    sourceModel: {
      get() {
        return this.model;
      },
      set(e) {
        this.model = e, this.$emit("update:modelValue", this.model);
      }
    },
    classes() {
      var e = [];
      return e.push(`ux-field-${this.type}`), e.push(`ux-field-widget-${this.widget}`), this.widget === "form" && this.minimum === 1 && this.maximum === 1 && e.push("ux-layout-only"), this.layoutGroup && e.push("ux-layout-only"), this.touched && e.push("ux-field-touched"), this.dirty && e.push("ux-field-dirty"), this.valid && e.push("ux-field-valid"), this.invalid && e.push("ux-field-invalid"), this.error && e.push("ux-field-error"), this.visualHide && e.push("ux-field-hide"), e;
    },
    widget() {
      if (this.type == "group")
        return this.type;
      var e = this.actualField.widget;
      switch (e) {
        case "form":
          e = this.submission ? "form" : "content-select";
          break;
        case "internal-menu":
        case "internal-route":
        case "content-select":
        case "select":
        case "checkbox":
        case "daterange":
        case "datefield":
        case "richtext":
        case "textarea":
        case "switch":
        case "email":
        case "url":
        case "currency":
        case "timezone":
        case "country":
        case "upload":
        case "code":
        case "expression":
        case "options":
        case "button":
        case "type-select":
        case "scope-select":
        case "field-select":
        case "html":
        case "filter":
        case "value":
          break;
        case "password":
          return "textfield";
        case "phone":
        case "phonenumber":
          return "phone";
        default:
          switch (this.type) {
            case "date":
              e = "datefield";
              break;
            case "reference":
              e = "content-select";
              break;
            case "boolean":
              e = "checkbox";
              break;
            default:
            case "string":
              e = "textfield";
              break;
            case "object":
              e = "object";
              break;
          }
          break;
      }
      return e;
    }
  }
}, yS = {
  key: 29,
  class: "ux-field-message"
};
function _S(e, t, n, i, s, r) {
  const l = y("internal-route-select"), a = y("internal-menu-select"), u = y("custom-html"), c = y("filter-input"), f = y("checkbox"), p = y("boolean-switch"), g = y("upload"), v = y("field-group"), T = y("field-select"), A = y("native-select"), E = y("button-select"), q = y("text-field"), Q = y("currency-field"), ne = y("date-field"), ae = y("date-range"), oe = y("content-select"), B = y("type-select"), F = y("scope-select"), se = y("rich-text-field"), z = y("text-area"), Ce = y("timezone-select"), ke = y("phone-number-input"), xe = y("object-field"), Te = y("options-manager"), Oe = y("code-editor-field"), Fe = y("flex-column"), Ve = y("expression-field");
  return r.visible ? (o(), d("div", {
    key: 0,
    class: R(["ux-field", r.classes]),
    onFocusin: t[28] || (t[28] = (...D) => r.focus && r.focus(...D)),
    onFocusout: t[29] || (t[29] = (...D) => r.blur && r.blur(...D))
  }, [
    r.widget == "internal-route" ? (o(), k(l, {
      key: 0,
      onTouched: r.touch,
      field: r.actualField,
      modelValue: r.fieldModel,
      "onUpdate:modelValue": t[0] || (t[0] = (D) => r.fieldModel = D)
    }, null, 8, ["onTouched", "field", "modelValue"])) : _("", !0),
    r.widget == "internal-menu" ? (o(), k(a, {
      key: 1,
      onTouched: r.touch,
      field: r.actualField,
      modelValue: r.fieldModel,
      "onUpdate:modelValue": t[1] || (t[1] = (D) => r.fieldModel = D)
    }, null, 8, ["onTouched", "field", "modelValue"])) : _("", !0),
    r.widget == "html" ? (o(), k(u, {
      key: 2,
      onTouched: r.touch,
      field: r.actualField,
      modelValue: r.fieldModel,
      "onUpdate:modelValue": t[2] || (t[2] = (D) => r.fieldModel = D)
    }, null, 8, ["onTouched", "field", "modelValue"])) : _("", !0),
    r.widget == "value" ? (o(), d(w, { key: 3 }, [], 64)) : _("", !0),
    r.widget == "filter" ? (o(), k(c, {
      key: 4,
      onTouched: r.touch,
      field: r.actualField,
      modelValue: r.fieldModel,
      "onUpdate:modelValue": t[3] || (t[3] = (D) => r.fieldModel = D)
    }, null, 8, ["onTouched", "field", "modelValue"])) : _("", !0),
    r.widget == "checkbox" ? (o(), k(f, {
      key: 5,
      onTouched: r.touch,
      field: r.actualField,
      modelValue: r.fieldModel,
      "onUpdate:modelValue": t[4] || (t[4] = (D) => r.fieldModel = D)
    }, null, 8, ["onTouched", "field", "modelValue"])) : _("", !0),
    r.widget == "switch" ? (o(), k(p, {
      key: 6,
      onTouched: r.touch,
      field: r.actualField,
      modelValue: r.fieldModel,
      "onUpdate:modelValue": t[5] || (t[5] = (D) => r.fieldModel = D)
    }, null, 8, ["onTouched", "field", "modelValue"])) : _("", !0),
    r.widget == "upload" ? (o(), k(g, {
      key: 7,
      onTouched: r.touch,
      field: r.actualField,
      modelValue: r.fieldModel,
      "onUpdate:modelValue": t[6] || (t[6] = (D) => r.fieldModel = D)
    }, null, 8, ["onTouched", "field", "modelValue"])) : _("", !0),
    r.widget == "group" ? (o(), d(w, { key: 8 }, [
      r.asObject ? (o(), k(v, {
        key: 0,
        trail: r.currentTrail,
        includeOfficeOnly: n.includeOfficeOnly,
        submission: n.submission,
        "onForm:state": r.groupStateAltered,
        ref: "group",
        onTouched: r.touch,
        field: r.actualField,
        parentModel: n.parentModel,
        modelValue: r.fieldModel,
        "onUpdate:modelValue": t[7] || (t[7] = (D) => r.fieldModel = D)
      }, null, 8, ["trail", "includeOfficeOnly", "submission", "onForm:state", "onTouched", "field", "parentModel", "modelValue"])) : (o(), k(v, {
        key: 1,
        trail: n.trail,
        includeOfficeOnly: n.includeOfficeOnly,
        submission: n.submission,
        "onForm:state": r.groupStateAltered,
        ref: "group",
        onTouched: r.touch,
        field: r.actualField,
        parentModel: n.parentModel,
        modelValue: r.sourceModel,
        "onUpdate:modelValue": t[8] || (t[8] = (D) => r.sourceModel = D)
      }, null, 8, ["trail", "includeOfficeOnly", "submission", "onForm:state", "onTouched", "field", "parentModel", "modelValue"]))
    ], 64)) : _("", !0),
    r.widget == "form" ? (o(), k(v, {
      key: 9,
      trail: r.currentTrail,
      includeOfficeOnly: n.includeOfficeOnly,
      submission: n.submission,
      "onForm:state": r.groupStateAltered,
      ref: "group",
      onTouched: r.touch,
      field: r.actualField,
      parentModel: n.parentModel,
      modelValue: r.fieldModel,
      "onUpdate:modelValue": t[9] || (t[9] = (D) => r.fieldModel = D)
    }, null, 8, ["trail", "includeOfficeOnly", "submission", "onForm:state", "onTouched", "field", "parentModel", "modelValue"])) : _("", !0),
    r.widget == "field-select" ? (o(), k(T, {
      key: 10,
      onTouched: r.touch,
      field: r.actualField,
      modelValue: r.fieldModel,
      "onUpdate:modelValue": t[10] || (t[10] = (D) => r.fieldModel = D)
    }, null, 8, ["onTouched", "field", "modelValue"])) : _("", !0),
    r.widget == "select" ? (o(), k(A, {
      key: 11,
      onTouched: r.touch,
      field: r.actualField,
      modelValue: r.fieldModel,
      "onUpdate:modelValue": t[11] || (t[11] = (D) => r.fieldModel = D)
    }, null, 8, ["onTouched", "field", "modelValue"])) : _("", !0),
    r.widget == "button" ? (o(), k(E, {
      key: 12,
      onTouched: r.touch,
      field: r.actualField,
      modelValue: r.fieldModel,
      "onUpdate:modelValue": t[12] || (t[12] = (D) => r.fieldModel = D)
    }, null, 8, ["onTouched", "field", "modelValue"])) : _("", !0),
    r.widget == "textfield" ? (o(), k(q, {
      key: 13,
      onTouched: r.touch,
      field: r.actualField,
      modelValue: r.fieldModel,
      "onUpdate:modelValue": t[13] || (t[13] = (D) => r.fieldModel = D)
    }, null, 8, ["onTouched", "field", "modelValue"])) : _("", !0),
    r.widget == "currency" ? (o(), k(Q, {
      key: 14,
      onTouched: r.touch,
      field: r.actualField,
      modelValue: r.fieldModel,
      "onUpdate:modelValue": t[14] || (t[14] = (D) => r.fieldModel = D)
    }, null, 8, ["onTouched", "field", "modelValue"])) : _("", !0),
    r.widget == "datefield" ? (o(), k(ne, {
      key: 15,
      onTouched: r.touch,
      field: r.actualField,
      modelValue: r.fieldModel,
      "onUpdate:modelValue": t[15] || (t[15] = (D) => r.fieldModel = D)
    }, null, 8, ["onTouched", "field", "modelValue"])) : _("", !0),
    r.widget == "daterange" ? (o(), k(ae, {
      key: 16,
      onTouched: r.touch,
      field: r.actualField,
      modelValue: r.fieldModel,
      "onUpdate:modelValue": t[16] || (t[16] = (D) => r.fieldModel = D)
    }, null, 8, ["onTouched", "field", "modelValue"])) : _("", !0),
    r.widget == "content-select" ? (o(), k(oe, {
      key: 17,
      onTouched: r.touch,
      field: r.actualField,
      modelValue: r.fieldModel,
      "onUpdate:modelValue": t[17] || (t[17] = (D) => r.fieldModel = D)
    }, null, 8, ["onTouched", "field", "modelValue"])) : _("", !0),
    r.widget == "type-select" ? (o(), k(B, {
      key: 18,
      onTouched: r.touch,
      field: r.actualField,
      modelValue: r.fieldModel,
      "onUpdate:modelValue": t[18] || (t[18] = (D) => r.fieldModel = D)
    }, null, 8, ["onTouched", "field", "modelValue"])) : _("", !0),
    r.widget == "scope-select" ? (o(), k(F, {
      key: 19,
      onTouched: r.touch,
      field: r.actualField,
      modelValue: r.fieldModel,
      "onUpdate:modelValue": t[19] || (t[19] = (D) => r.fieldModel = D)
    }, null, 8, ["onTouched", "field", "modelValue"])) : _("", !0),
    r.widget == "richtext" ? (o(), k(se, {
      key: 20,
      onTouched: r.touch,
      field: r.actualField,
      modelValue: r.fieldModel,
      "onUpdate:modelValue": t[20] || (t[20] = (D) => r.fieldModel = D)
    }, null, 8, ["onTouched", "field", "modelValue"])) : _("", !0),
    r.widget == "textarea" ? (o(), k(z, {
      key: 21,
      onTouched: r.touch,
      field: r.actualField,
      modelValue: r.fieldModel,
      "onUpdate:modelValue": t[21] || (t[21] = (D) => r.fieldModel = D)
    }, null, 8, ["onTouched", "field", "modelValue"])) : _("", !0),
    r.widget == "timezone" ? (o(), k(Ce, {
      key: 22,
      onTouched: r.touch,
      field: r.actualField,
      modelValue: r.fieldModel,
      "onUpdate:modelValue": t[22] || (t[22] = (D) => r.fieldModel = D)
    }, null, 8, ["onTouched", "field", "modelValue"])) : _("", !0),
    r.widget == "phone" ? (o(), k(ke, {
      key: 23,
      onTouched: r.touch,
      field: r.actualField,
      modelValue: r.fieldModel,
      "onUpdate:modelValue": t[23] || (t[23] = (D) => r.fieldModel = D)
    }, null, 8, ["onTouched", "field", "modelValue"])) : _("", !0),
    r.widget == "value" ? (o(), d(w, { key: 24 }, [], 64)) : _("", !0),
    r.widget == "object" ? (o(), k(xe, {
      key: 25,
      onTouched: r.touch,
      field: r.actualField,
      modelValue: r.fieldModel,
      "onUpdate:modelValue": t[24] || (t[24] = (D) => r.fieldModel = D)
    }, null, 8, ["onTouched", "field", "modelValue"])) : _("", !0),
    r.widget == "options" ? (o(), k(Te, {
      key: 26,
      onTouched: r.touch,
      field: r.actualField,
      modelValue: r.fieldModel,
      "onUpdate:modelValue": t[25] || (t[25] = (D) => r.fieldModel = D)
    }, null, 8, ["onTouched", "field", "modelValue"])) : _("", !0),
    r.widget == "code" ? (o(), k(Fe, {
      key: 27,
      style: { "min-height": "300px" }
    }, {
      default: m(() => [
        h(Oe, {
          onTouched: r.touch,
          field: r.actualField,
          modelValue: r.fieldModel,
          "onUpdate:modelValue": t[26] || (t[26] = (D) => r.fieldModel = D)
        }, null, 8, ["onTouched", "field", "modelValue"])
      ]),
      _: 1
    })) : _("", !0),
    r.widget == "expression" ? (o(), k(Ve, {
      key: 28,
      onTouched: r.touch,
      field: r.actualField,
      modelValue: r.fieldModel,
      "onUpdate:modelValue": t[27] || (t[27] = (D) => r.fieldModel = D)
    }, null, 8, ["onTouched", "field", "modelValue"])) : _("", !0),
    r.error && s.validateResults.message ? (o(), d("div", yS, b(s.validateResults.message), 1)) : _("", !0)
  ], 34)) : _("", !0);
}
const Ii = /* @__PURE__ */ V(pS, [["render", _S], ["__scopeId", "data-v-7b5727dd"]]);
function gS(e, t, n, i) {
  var s = -1, r = e == null ? 0 : e.length;
  for (i && r && (n = e[++s]); ++s < r; )
    n = t(n, e[s], s, e);
  return n;
}
var vS = gS;
function bS(e) {
  return function(t) {
    return e == null ? void 0 : e[t];
  };
}
var kS = bS, xS = kS, wS = {
  // Latin-1 Supplement block.
  À: "A",
  Á: "A",
  Â: "A",
  Ã: "A",
  Ä: "A",
  Å: "A",
  à: "a",
  á: "a",
  â: "a",
  ã: "a",
  ä: "a",
  å: "a",
  Ç: "C",
  ç: "c",
  Ð: "D",
  ð: "d",
  È: "E",
  É: "E",
  Ê: "E",
  Ë: "E",
  è: "e",
  é: "e",
  ê: "e",
  ë: "e",
  Ì: "I",
  Í: "I",
  Î: "I",
  Ï: "I",
  ì: "i",
  í: "i",
  î: "i",
  ï: "i",
  Ñ: "N",
  ñ: "n",
  Ò: "O",
  Ó: "O",
  Ô: "O",
  Õ: "O",
  Ö: "O",
  Ø: "O",
  ò: "o",
  ó: "o",
  ô: "o",
  õ: "o",
  ö: "o",
  ø: "o",
  Ù: "U",
  Ú: "U",
  Û: "U",
  Ü: "U",
  ù: "u",
  ú: "u",
  û: "u",
  ü: "u",
  Ý: "Y",
  ý: "y",
  ÿ: "y",
  Æ: "Ae",
  æ: "ae",
  Þ: "Th",
  þ: "th",
  ß: "ss",
  // Latin Extended-A block.
  Ā: "A",
  Ă: "A",
  Ą: "A",
  ā: "a",
  ă: "a",
  ą: "a",
  Ć: "C",
  Ĉ: "C",
  Ċ: "C",
  Č: "C",
  ć: "c",
  ĉ: "c",
  ċ: "c",
  č: "c",
  Ď: "D",
  Đ: "D",
  ď: "d",
  đ: "d",
  Ē: "E",
  Ĕ: "E",
  Ė: "E",
  Ę: "E",
  Ě: "E",
  ē: "e",
  ĕ: "e",
  ė: "e",
  ę: "e",
  ě: "e",
  Ĝ: "G",
  Ğ: "G",
  Ġ: "G",
  Ģ: "G",
  ĝ: "g",
  ğ: "g",
  ġ: "g",
  ģ: "g",
  Ĥ: "H",
  Ħ: "H",
  ĥ: "h",
  ħ: "h",
  Ĩ: "I",
  Ī: "I",
  Ĭ: "I",
  Į: "I",
  İ: "I",
  ĩ: "i",
  ī: "i",
  ĭ: "i",
  į: "i",
  ı: "i",
  Ĵ: "J",
  ĵ: "j",
  Ķ: "K",
  ķ: "k",
  ĸ: "k",
  Ĺ: "L",
  Ļ: "L",
  Ľ: "L",
  Ŀ: "L",
  Ł: "L",
  ĺ: "l",
  ļ: "l",
  ľ: "l",
  ŀ: "l",
  ł: "l",
  Ń: "N",
  Ņ: "N",
  Ň: "N",
  Ŋ: "N",
  ń: "n",
  ņ: "n",
  ň: "n",
  ŋ: "n",
  Ō: "O",
  Ŏ: "O",
  Ő: "O",
  ō: "o",
  ŏ: "o",
  ő: "o",
  Ŕ: "R",
  Ŗ: "R",
  Ř: "R",
  ŕ: "r",
  ŗ: "r",
  ř: "r",
  Ś: "S",
  Ŝ: "S",
  Ş: "S",
  Š: "S",
  ś: "s",
  ŝ: "s",
  ş: "s",
  š: "s",
  Ţ: "T",
  Ť: "T",
  Ŧ: "T",
  ţ: "t",
  ť: "t",
  ŧ: "t",
  Ũ: "U",
  Ū: "U",
  Ŭ: "U",
  Ů: "U",
  Ű: "U",
  Ų: "U",
  ũ: "u",
  ū: "u",
  ŭ: "u",
  ů: "u",
  ű: "u",
  ų: "u",
  Ŵ: "W",
  ŵ: "w",
  Ŷ: "Y",
  ŷ: "y",
  Ÿ: "Y",
  Ź: "Z",
  Ż: "Z",
  Ž: "Z",
  ź: "z",
  ż: "z",
  ž: "z",
  Ĳ: "IJ",
  ĳ: "ij",
  Œ: "Oe",
  œ: "oe",
  ŉ: "'n",
  ſ: "s"
}, SS = xS(wS), TS = SS, OS = TS, VS = vi, AS = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, CS = "\\u0300-\\u036f", ES = "\\ufe20-\\ufe2f", MS = "\\u20d0-\\u20ff", IS = CS + ES + MS, DS = "[" + IS + "]", FS = RegExp(DS, "g");
function $S(e) {
  return e = VS(e), e && e.replace(AS, OS).replace(FS, "");
}
var NS = $S, LS = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function PS(e) {
  return e.match(LS) || [];
}
var US = PS, jS = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function RS(e) {
  return jS.test(e);
}
var BS = RS, ja = "\\ud800-\\udfff", zS = "\\u0300-\\u036f", HS = "\\ufe20-\\ufe2f", qS = "\\u20d0-\\u20ff", GS = zS + HS + qS, Ra = "\\u2700-\\u27bf", Ba = "a-z\\xdf-\\xf6\\xf8-\\xff", WS = "\\xac\\xb1\\xd7\\xf7", ZS = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", KS = "\\u2000-\\u206f", YS = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", za = "A-Z\\xc0-\\xd6\\xd8-\\xde", JS = "\\ufe0e\\ufe0f", Ha = WS + ZS + KS + YS, qa = "['’]", Hs = "[" + Ha + "]", XS = "[" + GS + "]", Ga = "\\d+", QS = "[" + Ra + "]", Wa = "[" + Ba + "]", Za = "[^" + ja + Ha + Ga + Ra + Ba + za + "]", e2 = "\\ud83c[\\udffb-\\udfff]", t2 = "(?:" + XS + "|" + e2 + ")", n2 = "[^" + ja + "]", Ka = "(?:\\ud83c[\\udde6-\\uddff]){2}", Ya = "[\\ud800-\\udbff][\\udc00-\\udfff]", Ht = "[" + za + "]", r2 = "\\u200d", qs = "(?:" + Wa + "|" + Za + ")", i2 = "(?:" + Ht + "|" + Za + ")", Gs = "(?:" + qa + "(?:d|ll|m|re|s|t|ve))?", Ws = "(?:" + qa + "(?:D|LL|M|RE|S|T|VE))?", Ja = t2 + "?", Xa = "[" + JS + "]?", s2 = "(?:" + r2 + "(?:" + [n2, Ka, Ya].join("|") + ")" + Xa + Ja + ")*", l2 = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", a2 = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", o2 = Xa + Ja + s2, u2 = "(?:" + [QS, Ka, Ya].join("|") + ")" + o2, d2 = RegExp([
  Ht + "?" + Wa + "+" + Gs + "(?=" + [Hs, Ht, "$"].join("|") + ")",
  i2 + "+" + Ws + "(?=" + [Hs, Ht + qs, "$"].join("|") + ")",
  Ht + "?" + qs + "+" + Gs,
  Ht + "+" + Ws,
  a2,
  l2,
  Ga,
  u2
].join("|"), "g");
function c2(e) {
  return e.match(d2) || [];
}
var f2 = c2, m2 = US, h2 = BS, p2 = vi, y2 = f2;
function _2(e, t, n) {
  return e = p2(e), t = n ? void 0 : t, t === void 0 ? h2(e) ? y2(e) : m2(e) : e.match(t) || [];
}
var g2 = _2, v2 = vS, b2 = NS, k2 = g2, x2 = "['’]", w2 = RegExp(x2, "g");
function S2(e) {
  return function(t) {
    return v2(k2(b2(t).replace(w2, "")), e, "");
  };
}
var T2 = S2, O2 = T2, V2 = O2(function(e, t, n) {
  return e + (n ? "-" : "") + t.toLowerCase();
}), A2 = V2;
const C2 = {
  props: {
    parentModel: {
      type: Object
    },
    parentForm: {
      type: Object
    },
    trail: {
      type: Array,
      default() {
        return [];
      }
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
      default: !1
    },
    submission: {
      type: Boolean,
      default: !1
    },
    includeOfficeOnly: {
      type: Boolean,
      default: !1
    }
  },
  inject: ["form", "parentFormElement"],
  watch: {
    modelValue(e, t) {
      this.model = e;
    }
  },
  data() {
    return {
      mounted: !1,
      model: this.modelValue,
      touched: !1,
      invalid: !1,
      error: !1,
      dirty: !1,
      focussed: !1,
      childFormElements: []
    };
  },
  provide() {
    return {
      parentFormElement: this.parentFormElement || this
      // :computed(() => parentFormElement),
    };
  },
  mounted() {
    const e = this;
    e.mounted = !0;
  },
  beforeUnmount() {
    const e = this;
    e.mounted = !1;
  },
  methods: {
    getFieldKey(e) {
      let t = A2(`${e.title}-${e.key}`);
      return e.incrementor && (t = `${t}-${e.incrementor}`), t;
    },
    touch() {
      (this.childFormElements || []).forEach(function(e) {
        e.touch();
      }), this.touched = !0;
    },
    untouch() {
      (this.childFormElements || []).forEach(function(e) {
        e.untouch();
      }), this.touched = !1;
    },
    reset() {
      this.untouch(), (this.childFormElements || []).forEach(function(e) {
        e.reset();
      }), this.model = {};
    },
    fieldUnmounted(e) {
      this.fieldStateChange(e, "unmount"), this.$emit("field:unmount", this);
    },
    fieldMounted(e) {
      this.fieldStateChange(e, "unmount"), this.$emit("field:mount", this);
    },
    fieldDirty(e) {
      this.fieldStateChange(e, "dirty"), this.$emit("field:dirty", this);
    },
    fieldInvalid(e) {
      this.fieldStateChange(e, "invalid"), this.$emit("field:invalid", this);
    },
    fieldValid(e) {
      this.fieldStateChange(e, "valid"), this.$emit("field:valid", this);
    },
    fieldError(e) {
      this.fieldStateChange(e, "error"), this.$emit("field:error", this);
    },
    fieldFocus(e) {
      this.fieldStateChange(e, "focus"), this.$emit("field:focus", this);
    },
    fieldBlur(e) {
      this.fieldStateChange(e, "blur"), this.$emit("field:blur", this);
    },
    fieldTouch(e) {
      this.fieldStateChange(e, "touch"), this.$emit("field:touch", this);
    },
    fieldStateChange(e, t) {
      var n = this;
      n.$nextTick(function() {
        var i = !1, s = !1, r = !1, l = !1, a = !1, u = [];
        n.childFormElements.forEach(function(c) {
          c.dirty && (i = !0), c.invalid && (s = !0, u.push({
            title: c.field.title,
            key: c.field.key,
            message: c.invalidMessage
          })), c.error && (r = !0), c.touched && (l = !0), c.focussed && (a = !0);
        }), n.dirty = i, n.error = r, n.touched = l, n.focussed = a, n.invalid = s, n.$emit("form:state", {
          dirty: i,
          error: r,
          focussed: a,
          touched: l,
          invalid: s,
          valid: !s,
          invalidFields: u
        });
      });
    }
  },
  components: {
    UxField: Ii
  },
  computed: {
    currentTrail() {
      return this.trail;
    },
    fieldHash() {
      return this.renderFields.reduce(function(e, t) {
        return t && (e[t.key] = t), e;
      }, {});
    },
    valid() {
      return !this.invalid;
    },
    formClass() {
      var e = [];
      return this.flex && e.push("ux-form-flex"), e;
    },
    fieldClass() {
      var e = [];
      return this.flex && e.push("ux-field-flex"), e;
    },
    formModel: {
      get() {
        return this.model;
      },
      set(e) {
        this.model = e, this.$emit("update:modelValue", this.model);
      }
    },
    renderFields() {
      return this.fields.filter(function(e) {
        if (e)
          return e.includeIf && typeof e.includeIf == "function" ? e.includeIf(e) : e.excludeIf && typeof e.excludeIf == "function" ? !e.excludeIf(e) : !0;
      });
    }
  }
};
function E2(e, t, n, i, s, r) {
  const l = y("ux-field");
  return o(), d("div", {
    class: R(["ux-form", r.formClass])
  }, [
    W(e.$slots, "fields", {
      fields: r.renderFields,
      hash: r.fieldHash
    }, () => [
      (o(!0), d(w, null, L(r.renderFields, (a, u) => (o(), k(l, {
        ref_for: !0,
        ref: "field",
        trail: r.currentTrail,
        submission: n.submission,
        includeOfficeOnly: n.includeOfficeOnly,
        "onField:mount": r.fieldMounted,
        "onField:unmount": r.fieldUnmounted,
        "onField:dirty": r.fieldDirty,
        "onField:invalid": r.fieldInvalid,
        "onField:valid": r.fieldValid,
        "onField:error": r.fieldError,
        "onField:focus": r.fieldFocus,
        "onField:blur": r.fieldBlur,
        "onField:touched": r.fieldTouch,
        field: a,
        modelValue: r.formModel,
        "onUpdate:modelValue": t[0] || (t[0] = (c) => r.formModel = c),
        parentModel: n.parentModel || r.formModel,
        class: R([r.fieldClass, { "ux-field-clear": a.clear }]),
        key: `ux-form-field-${r.getFieldKey(a)}-${u}`
      }, null, 8, ["trail", "submission", "includeOfficeOnly", "onField:mount", "onField:unmount", "onField:dirty", "onField:invalid", "onField:valid", "onField:error", "onField:focus", "onField:blur", "onField:touched", "field", "modelValue", "parentModel", "class"]))), 128))
    ], !0)
  ], 2);
}
const Qa = /* @__PURE__ */ V(C2, [["render", E2], ["__scopeId", "data-v-35dbebe4"]]);
const Xr = "form.ready", M2 = "form.processing", I2 = "form.complete", D2 = "form.error", F2 = {
  methods: {
    formStateUpdated(e) {
      this.formState = e;
    },
    softReset() {
      this.state = Xr;
    },
    touch() {
      this.$refs.form && this.$refs.form.touch();
    },
    untouch() {
      this.$refs.form && this.$refs.form.untouch();
    },
    reset() {
      this.model = {}, this.$refs.form && this.$refs.form.reset(), this.state = Xr, this.error = null, this.submitAttempted = !1, this.$emit("reset");
    },
    async submit() {
      const e = this;
      if (e.touch(), e.submitAttempted || (e.submitAttempted = !0, e.touch()), e.buttonDisabled) {
        console.log("Form is invalid", this.formState);
        return;
      }
      e.state = M2, e.$emit("processing"), await e.preSubmit();
      const t = JSON.parse(JSON.stringify(e.model));
      e.$sdk.api.post(`/form/${e.formID}`, t).then(n, i);
      async function n(s) {
        await e.postSubmit(), e.state = I2, e.$emit("success", s.data);
      }
      async function i(s) {
        var r;
        s = ((r = s.response) == null ? void 0 : r.data) || s, e.error = s, e.state = D2, e.$emit("error", s);
      }
    },
    async preSubmit() {
    },
    async postSubmit() {
    }
  },
  components: {
    UxForm: Qa
  },
  provide() {
    return {
      form: this.form
    };
  },
  props: {
    submitText: {
      type: String,
      default() {
        return "Submit";
      }
    },
    modelValue: {
      type: Object,
      default() {
        return {};
      }
    },
    form: {
      type: Object,
      required: !0
    }
  },
  watch: {
    modelValue(e, t) {
      this.model = e;
    },
    model(e) {
      this.$emit("update:modelValue", e);
    }
  },
  data() {
    return {
      submitAttempted: !1,
      formState: null,
      state: Xr,
      mounted: !1,
      model: this.modelValue,
      error: null
    };
  },
  mounted() {
    this.mounted = !0;
  },
  beforeUnmount() {
    this.mounted = !1;
  },
  computed: {
    classes() {
      const e = [];
      return this.formID && e.push(`form-${this.formID}`), e;
    },
    tooltip() {
      return this.buttonDisabled ? "Please check the errors in your form" : void 0;
    },
    buttonDisabled() {
      return this.submitAttempted && this.invalid;
    },
    invalid() {
      var e;
      return (e = this.formState) == null ? void 0 : e.invalid;
    },
    formID() {
      return this.$sdk.utils.id(this.form);
    },
    fields() {
      return this.form.fields || [];
    }
  }
}, $2 = (e) => (bt("data-v-f027abf5"), e = e(), kt(), e), N2 = /* @__PURE__ */ $2(() => /* @__PURE__ */ x("h3", null, "An error occurred", -1)), L2 = { key: 0 }, P2 = { key: 1 }, U2 = { key: 2 }, j2 = ["tooltip"];
function R2(e, t, n, i, s, r) {
  var c;
  const l = y("ux-icon"), a = y("ux-button"), u = y("ux-form");
  return o(), d("div", {
    class: R(["ux-submission-form", r.classes])
  }, [
    s.state === "form.error" ? (o(), d(w, { key: 0 }, [
      N2,
      s.error.message ? (o(), d("pre", L2, b(s.error.message), 1)) : _("", !0),
      (c = s.error.data) != null && c.errors ? (o(), d("div", P2, [
        (o(!0), d(w, null, L(s.error.data.errors, (f) => (o(), d("pre", {
          key: f.path
        }, b(f.message), 1))), 128))
      ])) : (o(), d("pre", U2, b(s.error), 1)),
      h(a, {
        color: "primary",
        onClick: r.softReset
      }, {
        default: m(() => [
          S(" Try again "),
          h(l, {
            right: "",
            icon: "fa-undo"
          })
        ]),
        _: 1
      }, 8, ["onClick"])
    ], 64)) : s.state === "form.complete" ? W(e.$slots, "default", {
      key: 1,
      reset: r.reset
    }, () => [
      S(" Thank you "),
      h(a, { onClick: r.reset }, {
        default: m(() => [
          S(" Back to form ")
        ]),
        _: 1
      }, 8, ["onClick"])
    ], !0) : (o(), d(w, { key: 2 }, [
      h(u, {
        submission: "",
        ref: "form",
        modelValue: s.model,
        "onUpdate:modelValue": t[0] || (t[0] = (f) => s.model = f),
        "onForm:state": r.formStateUpdated,
        fields: r.fields
      }, null, 8, ["modelValue", "onForm:state", "fields"]),
      x("span", { tooltip: r.tooltip }, [
        h(a, {
          disabled: r.buttonDisabled,
          color: "primary",
          onClick: r.submit,
          loading: s.state === "form.processing"
        }, {
          default: m(() => [
            S(b(n.submitText), 1)
          ]),
          _: 1
        }, 8, ["disabled", "onClick", "loading"])
      ], 8, j2)
    ], 64))
  ], 2);
}
const Zs = /* @__PURE__ */ V(F2, [["render", R2], ["__scopeId", "data-v-f027abf5"]]);
const B2 = {
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
    var e = this;
    e.dispatch = Or(() => {
      e.$emit("update:modelValue", e.value);
    }, e.debounce);
  },
  data() {
    return {
      value: String(this.modelValue)
    };
  },
  methods: {
    clear() {
      this.value = "", this.$emit("update:modelValue", this.value);
    }
  },
  watch: {
    modelValue(e, t) {
      this.value = e;
    }
  },
  computed: {
    icon() {
      return this.loading ? "fa-spinner fa-spin" : this.value ? "fa-times" : "fa-search";
    },
    selectableOptions() {
      return this.options.map(function(e) {
        const t = e.value || e;
        return {
          label: e.title || e.name || e.label || t,
          value: t
        };
      });
    },
    model: {
      get() {
        return this.value;
      },
      set(e) {
        this.value = e, this.dispatch();
      }
    }
  }
}, z2 = { class: "search" }, H2 = ["placeholder"];
function q2(e, t, n, i, s, r) {
  const l = y("ux-icon");
  return o(), d("div", z2, [
    Y(x("input", {
      "onUpdate:modelValue": t[0] || (t[0] = (a) => r.model = a),
      placeholder: n.placeholder
    }, null, 8, H2), [
      [ge, r.model]
    ]),
    x("div", {
      onClick: t[1] || (t[1] = (a) => r.clear()),
      class: "icon"
    }, [
      h(l, { icon: r.icon }, null, 8, ["icon"])
    ])
  ]);
}
const eo = /* @__PURE__ */ V(B2, [["render", q2], ["__scopeId", "data-v-d88923bc"]]), G2 = {
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
    getValue(e) {
      if (e)
        return e._id || e.value || e;
    },
    getLabel(e) {
      if (e)
        return e.title || e.name || e.label || e;
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
      if (this.asObject) {
        var e = this.minimum === 1 && this.maximum === 1;
        return e;
      } else
        return this.maximum === 1;
    },
    type() {
      return this.field.type || "string";
    },
    multiValue() {
      return !this.singleValue;
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
      return this.multiValue ? (this.model || []).length : 1;
    },
    fields() {
      var e = this.field.fields;
      if (e && e.length)
        return e;
    },
    minimum() {
      if (this.layoutGroup)
        return 1;
      var e = parseInt(this.field.minimum || 0);
      return isNaN(e) && (e = 0), e = Math.max(e, 0), e = this.maximum ? Math.min(e, this.maximum) : e, parseInt(e);
    },
    maximum() {
      if (this.layoutGroup)
        return 1;
      var e = parseInt(this.field.maximum || 0);
      return isNaN(e) && (e = 0), e = Math.max(e, 0), parseInt(e);
    }
  }
};
const W2 = {
  mixins: [G2],
  props: {
    modelValue: {
      type: [Object, Array]
    },
    submission: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    sameLine() {
      return this.field.sameLine;
    }
  },
  methods: {
    multiLabel(e, t) {
      return `${this.label} ${t + 1}`;
    }
  }
}, Z2 = {
  key: 0,
  class: "ux-multi-group"
};
function K2(e, t, n, i, s, r) {
  const l = y("flex-cell"), a = y("flex-row"), u = y("ux-panel-header"), c = y("ux-render"), f = y("ux-panel-body"), p = y("ux-panel");
  return e.multiValue ? (o(), d("div", Z2, [
    (o(!0), d(w, null, L(e.model, (g, v) => (o(), k(p, {
      ref_for: !0,
      ref: "row",
      key: g
    }, {
      default: m(() => [
        h(u, null, {
          default: m(() => [
            h(a, null, {
              default: m(() => [
                h(l, { vcenter: "" }, {
                  default: m(() => [
                    x("div", null, [
                      x("strong", null, b(r.multiLabel(g, v)), 1)
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
        h(f, null, {
          default: m(() => [
            h(c, {
              submission: n.submission,
              fields: e.fields,
              flex: r.sameLine,
              parentModel: e.parentModel,
              modelValue: e.model[v],
              "onUpdate:modelValue": (T) => e.model[v] = T
            }, null, 8, ["submission", "fields", "flex", "parentModel", "modelValue", "onUpdate:modelValue"])
          ]),
          _: 2
        }, 1024)
      ]),
      _: 2
    }, 1024))), 128))
  ])) : (o(), k(c, {
    key: 1,
    submission: n.submission,
    fields: e.fields,
    flex: r.sameLine,
    parentModel: e.parentModel,
    modelValue: e.model,
    "onUpdate:modelValue": t[0] || (t[0] = (g) => e.model = g)
  }, null, 8, ["submission", "fields", "flex", "parentModel", "modelValue"]));
}
const Y2 = /* @__PURE__ */ V(W2, [["render", K2], ["__scopeId", "data-v-cb997d0e"]]);
const J2 = {
  components: {
    Item: ua,
    FieldGroup: Y2,
    // Compiler,
    Compile: Ai
    // ButtonSelect,
    // NativeSelect,
    // DateField,
    // TextField,
    // CurrencyField,
    // TextArea,
    // Checkbox,
    // BooleanSwitch: Switch,
    // FieldGroup,
    // ContentSelect,
    // Upload,
  },
  props: {
    field: {
      type: Object,
      required: !0
    },
    parentModel: {
      type: Object
    },
    modelValue: {
      type: Object,
      required: !0
    },
    submission: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      model: this.modelValue
    };
  },
  // created() {
  //     // if (this.visible) {
  //     //     var currentValue = this.fieldModel;
  //     //     var defaultValue = this.fieldModel || this.expressions && this.expressions.defaultValue ? this.getExpressionDefaultValue : getDefaultValue(this.actualField);
  //     //     if (!currentValue) {
  //     //         // console.log(this.actualField.key, this.actualField.title, defaultValue);
  //     //         if (this.fieldModel != defaultValue) {
  //     //             this.fieldModel = defaultValue;
  //     //         }
  //     //     }
  //     // }
  // },
  methods: {
    renderDate(e) {
      return j.fromJSDate(new Date(e)).toFormat("h:mma - ccc, DD");
    },
    formatCurrency(e) {
      return `${this.$sdk.utils.formatCurrency(e, this.field.currency)}`.toUpperCase();
    },
    cleanInput(e) {
      return e;
    },
    cleanOutput(e) {
      return this.type == "reference" && !this.multiValue && Array.isArray(e) && e.length ? e[0] : e;
    }
  },
  watch: {
    modelValue(e, t) {
      this.model = e;
    }
  },
  computed: {
    type() {
      return this.field.type || "string";
    },
    isEmbedded() {
      return this.submission && this.field.widget === "form" && this.field.type === "reference";
    },
    isGroup() {
      return this.isEmbedded || this.type === "group";
    },
    asObject() {
      return this.isEmbedded || this.isGroup && this.field.asObject;
    },
    isNumber() {
      switch (this.type) {
        case "integer":
        case "number":
        case "float":
        case "decimal":
          return !0;
      }
    },
    multiValue() {
      return this.field.maximum != 1;
    },
    title() {
      return this.field.title;
    },
    getExpressionHide() {
      if (!this.expressions)
        return;
      let e = this.expressions.show, t = this.expressions.hide, n = this.expressionsContext;
      if (e)
        return !Jt.evaluateExpression(e, n);
      if (t)
        return Jt.evaluateExpression(t, n);
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
      var e = !this.hidden, t = this.layoutGroup || this.fieldModel;
      return e && t;
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
      set(e) {
      }
    },
    sourceModel: {
      get() {
        return this.model;
      },
      set(e) {
      }
    },
    classes() {
      var e = [];
      return e.push(`ux-field-render-${this.type}`), this.layoutGroup ? e.push("ux-layout-only") : (!this.fieldModel || Array.isArray(this.fieldModel) && !this.fieldModel.length) && e.push("ux-empty"), e;
    },
    widget() {
      if (this.type == "group")
        return this.type;
      var e = this.field.widget;
      switch (e) {
        case "form":
          e = this.submission ? "form" : "content-select";
          break;
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
        case "code":
          break;
        default:
          switch (this.type) {
            case "date":
              e = "datefield";
              break;
            case "reference":
              e = "content-select";
              break;
            case "boolean":
              e = "checkbox";
              break;
            default:
            case "string":
              e = "textfield";
              break;
          }
          break;
      }
      return e;
    }
  }
}, X2 = { class: "ux-field-title" }, Q2 = { class: "currency" }, eT = { key: 1 }, tT = { class: "currency" }, nT = { key: 1 }, rT = { key: 1 }, iT = { key: 1 }, sT = ["href"], lT = { key: 1 }, aT = ["href"], oT = ["href"], uT = { key: 1 }, dT = ["href"], cT = { key: 1 };
function fT(e, t, n, i, s, r) {
  const l = y("field-group"), a = y("v-ace-editor"), u = y("item"), c = y("compile");
  return r.visible ? (o(), d("div", {
    key: 0,
    class: R(["ux-field-render", r.classes])
  }, [
    x("label", X2, b(r.title), 1),
    r.widget === "group" ? (o(), d(w, { key: 0 }, [
      r.asObject ? (o(), k(l, {
        key: 0,
        submission: n.submission,
        field: n.field,
        parentModel: n.parentModel,
        modelValue: r.fieldModel,
        "onUpdate:modelValue": t[0] || (t[0] = (f) => r.fieldModel = f)
      }, null, 8, ["submission", "field", "parentModel", "modelValue"])) : (o(), k(l, {
        key: 1,
        submission: n.submission,
        field: n.field,
        parentModel: n.parentModel,
        modelValue: r.sourceModel,
        "onUpdate:modelValue": t[1] || (t[1] = (f) => r.sourceModel = f)
      }, null, 8, ["submission", "field", "parentModel", "modelValue"]))
    ], 64)) : r.widget === "form" ? (o(), k(l, {
      key: 1,
      submission: n.submission,
      field: n.field,
      parentModel: n.parentModel,
      modelValue: r.fieldModel,
      "onUpdate:modelValue": t[2] || (t[2] = (f) => r.fieldModel = f)
    }, null, 8, ["submission", "field", "parentModel", "modelValue"])) : r.widget === "currency" ? (o(), d(w, { key: 2 }, [
      r.multiValue ? (o(!0), d(w, { key: 0 }, L(r.fieldModel, (f, p) => (o(), d("div", null, [
        S(b(r.formatCurrency(f)) + " ", 1),
        x("span", Q2, b(n.field.currency), 1)
      ]))), 256)) : (o(), d("div", eT, [
        S(b(r.formatCurrency(r.fieldModel)) + " ", 1),
        x("span", tT, b(n.field.currency), 1)
      ]))
    ], 64)) : r.widget === "code" ? (o(), d(w, { key: 3 }, [
      r.multiValue ? (o(!0), d(w, { key: 0 }, L(r.fieldModel, (f, p) => (o(), d("div", null, [
        h(a, {
          readonly: !0,
          class: "editor-wrap",
          value: f,
          options: { useWorker: !0 },
          lang: n.field.syntax,
          theme: "tomorrow_night_eighties",
          style: { "min-height": "300px" }
        }, null, 8, ["value", "lang"])
      ]))), 256)) : (o(), d("div", nT, [
        h(a, {
          readonly: !0,
          class: "editor-wrap",
          value: r.fieldModel,
          options: { useWorker: !0 },
          lang: n.field.syntax,
          theme: "tomorrow_night_eighties",
          style: { "min-height": "300px" }
        }, null, 8, ["value", "lang"])
      ]))
    ], 64)) : (o(), d(w, { key: 4 }, [
      r.type === "reference" ? (o(), d(w, { key: 0 }, [
        r.multiValue ? (o(!0), d(w, { key: 0 }, L(r.fieldModel, (f, p) => (o(), k(u, {
          submission: n.submission,
          key: f._id,
          item: f
        }, null, 8, ["submission", "item"]))), 128)) : (o(), k(u, {
          key: 1,
          submission: n.submission,
          item: r.fieldModel
        }, null, 8, ["submission", "item"]))
      ], 64)) : _("", !0),
      r.type == "string" ? (o(), d(w, { key: 1 }, [
        r.multiValue ? (o(!0), d(w, { key: 0 }, L(r.fieldModel, (f, p) => (o(), k(c, { template: f }, null, 8, ["template"]))), 256)) : (o(), k(c, {
          key: 1,
          template: r.fieldModel
        }, null, 8, ["template"]))
      ], 64)) : _("", !0),
      r.type == "boolean" ? (o(), d(w, { key: 2 }, [
        r.multiValue ? (o(!0), d(w, { key: 0 }, L(r.fieldModel, (f, p) => (o(), d("div", null, b(!!f), 1))), 256)) : (o(), d("div", rT, b(!!r.fieldModel), 1))
      ], 64)) : _("", !0),
      r.type == "date" ? (o(), d(w, { key: 3 }, [
        r.multiValue ? (o(!0), d(w, { key: 0 }, L(r.fieldModel, (f, p) => (o(), d("div", null, b(r.renderDate(f)), 1))), 256)) : (o(), d("div", iT, b(r.renderDate(r.fieldModel)), 1))
      ], 64)) : _("", !0),
      r.type == "email" ? (o(), d(w, { key: 4 }, [
        r.multiValue ? (o(!0), d(w, { key: 0 }, L(r.fieldModel, (f, p) => (o(), d("div", null, [
          x("a", {
            href: `mailto:${f}`
          }, b(f), 9, sT)
        ]))), 256)) : (o(), d("div", lT, [
          x("a", {
            href: `mailto:${r.fieldModel}`
          }, b(r.fieldModel), 9, aT)
        ]))
      ], 64)) : _("", !0),
      r.type == "url" ? (o(), d(w, { key: 5 }, [
        r.multiValue ? (o(!0), d(w, { key: 0 }, L(r.fieldModel, (f, p) => (o(), d("div", null, [
          x("a", { href: f }, b(f), 9, oT)
        ]))), 256)) : (o(), d("div", uT, [
          x("a", { href: r.fieldModel }, b(r.fieldModel), 9, dT)
        ]))
      ], 64)) : _("", !0),
      r.isNumber ? (o(), d(w, { key: 6 }, [
        r.multiValue ? (o(!0), d(w, { key: 0 }, L(r.fieldModel, (f, p) => (o(), d("div", null, b(f), 1))), 256)) : (o(), d("div", cT, b(r.fieldModel), 1))
      ], 64)) : _("", !0)
    ], 64))
  ], 2)) : _("", !0);
}
const to = /* @__PURE__ */ V(J2, [["render", fT], ["__scopeId", "data-v-b3a23cb7"]]);
const mT = {
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
      default: !1
    },
    submission: {
      type: Boolean,
      default: !1
    }
  },
  watch: {
    modelValue(e, t) {
      this.model = e;
    }
  },
  data() {
    return {
      model: this.modelValue
    };
  },
  components: {
    UxFieldRender: to
  },
  computed: {
    renderClass() {
      var e = [];
      return this.flex && e.push("ux-render-flex"), e;
    },
    fieldClass() {
      var e = [];
      return this.flex && e.push("ux-field-render-flex"), e;
    },
    renderFields() {
      return this.fields;
    }
  }
};
function hT(e, t, n, i, s, r) {
  const l = y("ux-field-render");
  return o(), d("div", {
    class: R(["ux-render", r.renderClass])
  }, [
    W(e.$slots, "render", { fields: n.fields }, () => [
      (o(!0), d(w, null, L(r.renderFields, (a, u) => (o(), k(l, {
        submission: n.submission,
        field: a,
        modelValue: s.model,
        "onUpdate:modelValue": t[0] || (t[0] = (c) => s.model = c),
        parentModel: n.parentModel || s.model,
        key: `ux-render-field-${a.key}-${u}`,
        class: R(r.fieldClass)
      }, null, 8, ["submission", "field", "modelValue", "parentModel", "class"]))), 128))
    ], !0)
  ], 2);
}
const pT = /* @__PURE__ */ V(mT, [["render", hT], ["__scopeId", "data-v-f2b5ec33"]]);
function yT(e) {
  e = e || {}, Math.max(parseInt(e.minimum || 0), 0);
  let t = Math.max(parseInt(e.maximum || 0), 0);
  const n = ho({}), i = yi([]);
  let s = {};
  mo(i, function() {
    r();
  });
  function r() {
    s = i.reduce(function(l, a) {
      var u = a._id || a.id;
      if (u)
        return l[u] = a, l;
    }, {});
  }
  return n.isSelected = function(l) {
    return s[l._id || l.id];
  }, n.select = function(l, a) {
    n.isSelected(l) || (t && i.length >= t && t === 1 && (i.length = 0), i.push(l), t && i.length > t && (i.length = t, n.dispatch("limit", t)), a || n.dispatch("change", i));
  }, n.deselect = function(l, a) {
    if (t === 1) {
      i.length = 0;
      return;
    }
    var u = i.findIndex(function(c) {
      return c._id && c._id == l._id || c.id && c.id == l.id;
    });
    u != -1 && (i.splice(u, 1), a || n.dispatch("change", i));
  }, n.toggle = function(l, a) {
    n.isSelected(l) ? n.deselect(l, a) : n.select(l, a);
  }, n.selectMultiple = function(l) {
    l.forEach(function(a) {
      n.select(a, !0);
    }), n.dispatch("change", i);
  }, n.deselectMultiple = function(l) {
    l.forEach(function(a) {
      n.deselect(a, !0);
    }), n.dispatch("change", i);
  }, n.setSelection = function(l) {
    i.length = 0, setTimeout(function() {
      n.selectMultiple(l);
    });
  }, n.deselectAll = function() {
    i.length = 0, n.dispatch("change", i);
  }, Object.defineProperty(n, "items", {
    value: i,
    writable: !1
  }), Object.defineProperty(n, "hash", {
    get() {
      return s;
    }
  }), n;
}
const _T = {
  props: {
    total: {
      type: Number,
      default() {
        return 0;
      }
    },
    page: {
      type: Object,
      default() {
        return {
          size: 50,
          index: 1
        };
      }
    }
  },
  components: {
    NativeSelect: $t
  },
  watch: {
    totalPages() {
      this.currentPage = 0;
    }
  },
  computed: {
    perPage: {
      get() {
        return this.pageModel.size;
      },
      set(e) {
        e = Math.max(e, 1), this.pageModel.size = e, this.dispatch();
      }
    },
    pageField() {
      return {
        type: "integer",
        maximum: 1,
        minimum: 1,
        options: Array(this.totalPages).fill(1).map((e, t) => e + t)
      };
    },
    // total() {
    //     return this.dataSource.total;
    // },
    totalPages() {
      return Math.ceil(this.total / this.perPage);
    },
    startIndex() {
      return (this.currentPage - 1) * this.pageModel.size;
    },
    displayStartIndex() {
      return this.total ? this.startIndex + 1 : 0;
    },
    endIndex() {
      return Math.min(this.startIndex + this.pageModel.size, this.total);
    },
    currentPage: {
      get() {
        return this.pageModel.index;
      },
      set(e) {
        this.totalPages && (e = Math.min(this.totalPages, e)), e = Math.max(e, 1), this.pageModel.index = e, this.dispatch();
      }
    }
  },
  methods: {
    dispatch() {
      return this.$emit("update:page", this.pageModel);
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
      pageModel: this.page,
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
function gT(e, t, n, i, s, r) {
  const l = y("native-select"), a = y("flex-cell"), u = y("ux-icon"), c = y("ux-button"), f = y("flex-row");
  return o(), k(f, {
    center: "",
    gap: ""
  }, {
    default: m(() => [
      h(a, {
        shrink: "",
        class: "text"
      }, {
        default: m(() => [
          h(l, {
            modelValue: r.perPage,
            "onUpdate:modelValue": t[0] || (t[0] = (p) => r.perPage = p),
            field: s.perPageField
          }, {
            default: m(() => [
              e.$device.breakpoint.xs ? (o(), d(w, { key: 0 }, [
                S(b(r.displayStartIndex) + "-" + b(r.endIndex) + " of " + b(n.total), 1)
              ], 64)) : (o(), d(w, { key: 1 }, [
                S("Showing " + b(r.displayStartIndex) + " to " + b(r.endIndex) + " of " + b(n.total) + " total", 1)
              ], 64))
            ]),
            _: 1
          }, 8, ["modelValue", "field"])
        ]),
        _: 1
      }),
      h(a),
      r.totalPages > 1 ? (o(), k(a, {
        key: 0,
        shrink: ""
      }, {
        default: m(() => [
          h(f, {
            gap: "",
            center: ""
          }, {
            default: m(() => [
              h(a, {
                shrink: "",
                class: "text"
              }, {
                default: m(() => [
                  h(l, {
                    modelValue: r.currentPage,
                    "onUpdate:modelValue": t[1] || (t[1] = (p) => r.currentPage = p),
                    field: r.pageField
                  }, {
                    default: m(() => [
                      e.$device.breakpoint.xs ? (o(), d(w, { key: 0 }, [
                        S(b(r.currentPage) + "/" + b(r.totalPages), 1)
                      ], 64)) : (o(), d(w, { key: 1 }, [
                        S("Page " + b(r.currentPage) + " of " + b(r.totalPages), 1)
                      ], 64))
                    ]),
                    _: 1
                  }, 8, ["modelValue", "field"])
                ]),
                _: 1
              }),
              h(a, { shrink: "" }, {
                default: m(() => [
                  h(c, {
                    icon: "",
                    onClick: t[2] || (t[2] = (p) => r.previousPage())
                  }, {
                    default: m(() => [
                      h(u, { icon: "fa-arrow-left" })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              h(a, { shrink: "" }, {
                default: m(() => [
                  h(c, {
                    icon: "",
                    onClick: t[3] || (t[3] = (p) => r.nextPage())
                  }, {
                    default: m(() => [
                      h(u, { icon: "fa-arrow-right" })
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
      })) : _("", !0)
    ]),
    _: 1
  });
}
const vT = /* @__PURE__ */ V(_T, [["render", gT], ["__scopeId", "data-v-51741539"]]);
function bT(e, t) {
  var n = [], i;
  switch (t) {
    case "image":
    case "video":
      n.push({
        title: "",
        key: "_id",
        renderer: "thumbnail",
        shrink: !0,
        fields: ["width", "height", "fileMeta.colors.colors[0]"]
      });
      break;
  }
  switch (t) {
    case "profile":
      i = !0, n.push({
        title: "First Name",
        key: "firstName",
        shrink: !0
      }), n.push({
        title: "Last Name",
        key: "lastName",
        shrink: !0
      }), n.push({
        title: "Email",
        key: "emails"
      }), n.push({
        title: "Phone Number",
        key: "phoneNumbersInternational"
      });
      break;
    case "definition":
      n.push({
        title: "Plural",
        key: "plural"
        // shrink: true,
      }), n.push({
        title: "Defines Type",
        key: "definesType"
        // shrink: true,
      }), n.push({
        title: "Database Key",
        key: "key"
        // shrink: true,
      }), n.push({
        title: "Category",
        key: "category"
        // shrink: true,
      });
      break;
    case "file":
    case "audio":
    case "image":
    case "video":
      switch (i = !0, n.push({
        title: "Title",
        key: "title"
        // shrink: true,
      }), t) {
        case "image":
        case "video":
          n.push({
            title: "Width",
            key: "width",
            shrink: !0
          }), n.push({
            title: "Height",
            key: "height",
            shrink: !0
          });
          break;
      }
      switch (n.push({
        title: "Ext",
        key: "fileExtension",
        shrink: !0
      }), n.push({
        title: "Mime Type",
        key: "fileMime",
        shrink: !0
      }), t) {
        case "image":
        case "video":
          n.push({
            title: "Media Type",
            key: "mediaIntegrationType",
            shrink: !0
          });
          break;
      }
      break;
  }
  switch (i || n.unshift({
    title: "Title",
    key: "title"
  }), t) {
    case "file":
    case "audio":
    case "image":
    case "video":
      n.push({
        title: "",
        key: "meta.security",
        renderer: "security",
        shrink: !0
      }), n.push({
        title: "",
        key: "_id",
        renderer: "button",
        shrink: !0,
        button: {
          size: "sm",
          text: "Download",
          icon: "fa-download",
          action(s) {
            return new Promise(async function(r, l) {
              await e.$sdk.auth.ensureValidToken();
              var a = e.$sdk.files.downloadUrl(e.basicType, s);
              window.open(a), r();
            });
          }
        }
      });
      break;
  }
  return n;
}
function Ks() {
  return {
    operator: "and",
    filters: []
  };
}
let Me, Qr, ei;
const kT = {
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
    filter: {
      type: Object,
      default() {
        return Ks();
      }
    },
    type: {
      type: String,
      required: !0
    },
    showFilters: {
      type: Boolean
    },
    search: {
      type: String,
      default: ""
    },
    dateRange: {
      type: Object,
      default: {}
    },
    rolodexPrimary: {
      type: String,
      default: ""
    },
    rolodexSecondary: {
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
    dateFilterEnabled: {
      type: Boolean
    },
    selectionManager: {
      type: Object
    },
    enableActions: {
      type: Boolean,
      default: !1
    },
    enableSelection: {
      type: Boolean,
      default: !0
    },
    trash: {
      type: Boolean,
      default: !1
    }
  },
  components: {
    Pager: vT,
    NativeTable: Dp,
    FilterBuilder: Na,
    Search: eo,
    UxField: Ii
  },
  deactivated() {
    ei = this.$sdk.global.cacheKeys[this.type], Me && (Me.cancel(), Me = null, Qr = !0);
  },
  async activated() {
    var e = this, t = e.$sdk.global.cacheKeys[e.type];
    ei != t && (ei = t, e.dataSource = await e.load()), Qr && (Qr = !1, e.dataSource = await e.load());
  },
  async created() {
    var e = this;
    await new Promise(async function(t, n) {
      var i = await e.$sdk.content.glossary({ hash: !0 }), s = i[e.type];
      if (e.definition = s, !s)
        return n();
      t();
    }), e.sort = e.defaultSort;
  },
  watch: {
    keywords(e) {
      this.$emit("update:search", e);
    },
    roloPrimary(e) {
      this.$emit("update:rolodexPrimary", e);
    },
    roloSecondary(e) {
      this.$emit("update:rolodexSecondary", e);
    },
    dateRangeFilter(e) {
      this.$emit("update:dateRange", e);
    },
    search(e) {
      this.keywords = e;
    },
    rolodexPrimary(e) {
      this.roloPrimary = e;
    },
    rolodexSecondary(e) {
      this.roloSecondary = e;
    },
    change: {
      handler: Or(async function() {
        this.dataSource = await this.load();
      }),
      immediate: !0
    },
    loading() {
      this.$emit("loading", this.loading);
    },
    selectedItems(e) {
      this.$emit("update:modelValue", e);
    },
    loadKey() {
      this.$emit("loaded");
    },
    options(e) {
      this.actualOptions = e;
    },
    filter(e) {
      e ? this.actualFilter = e : this.actualFilter = Ks();
    }
  },
  computed: {
    showFilterSidebar() {
      return this.showFilters;
    },
    boundaryMessage() {
      var e;
      if ((e = this.dataSource) != null && e.boundary)
        return this.dataSource.message || "Limit was reached. Please provide more selective criteria";
    },
    viewModeCacheKey() {
      return `${this.cacheKey}-${this.loadKey}`;
    },
    dateRangeField() {
      return {
        type: "object",
        widget: "daterange",
        key: "dateRange",
        minimum: 0,
        maximum: 1
      };
    },
    combinedFilter() {
      const e = this;
      let t = e.actualFilter, n = e.actualOptions.lockFilter;
      if (!n)
        return t;
      t = JSON.parse(JSON.stringify(t)), n = JSON.parse(JSON.stringify(n));
      let i;
      return t.operator === "and" ? (i = t, i.filters.push(n)) : (i = n, n.filters.push(t)), i;
    },
    viewMode() {
      var e = this.view;
      switch (e.key) {
        case "list":
        case "table":
          return;
      }
      return e;
    },
    defaultSort() {
      var t;
      var e = (t = this.definition) == null ? void 0 : t.defaultSort;
      if (e)
        return e;
      switch (e = {
        key: "title",
        direction: "asc",
        type: "string"
      }, this.basicType) {
        case "profile":
        case "persona":
        case "user":
          e = {
            key: "lastName",
            direction: "asc",
            type: "string"
          };
          break;
        case "email":
        case "notification":
        case "transaction":
        case "campaign":
        case "transaction":
        case "componentsnapshot":
        case "interfacesnapshot":
        case "image":
        case "video":
        case "audio":
        case "file":
        case "submission":
        case "export":
        case "log":
          e = {
            key: "meta.created",
            direction: "dsc",
            type: "date"
          };
          break;
      }
      return e;
    },
    fields() {
      const e = this, t = e.definition.definesType === "submission";
      var n = [...e.definition.fields], i = e.definition.definedFields || [];
      if (i.length)
        if (t) {
          var s = {
            title: "Form Data",
            minimum: 1,
            maximum: 1,
            key: "formData",
            asObject: !0,
            type: "group",
            fields: i
          };
          n.push(s);
          var r = {
            title: "Data",
            minimum: 1,
            maximum: 1,
            key: "data",
            asObject: !0,
            type: "group",
            fields: i.map(function(u) {
              return u.type === "reference" && (u = JSON.parse(JSON.stringify(u)), delete u.fields), u;
            })
          };
          n.push(r);
        } else {
          var r = {
            title: `${e.definition.title}`,
            minimum: 1,
            maximum: 1,
            key: "data",
            asObject: !0,
            type: "group",
            fields: i
          };
          n.push(r);
        }
      var l = e.$sdk.utils.mapFields(n).filter(function(a) {
        var u = a.type == "group" && a.asObject && a.minimum == 1 && a.maximum == 1;
        return !u;
      }).map(function(a) {
        return a.title = a.titles.join(" > "), a;
      }).sort(function(a, u) {
        return a.title < u.title ? -1 : 1;
      });
      return l;
    },
    deselectAllFunction() {
      return this.manager.items.length ? this.deselectAll : null;
    },
    selectedItems() {
      return this.manager.items.slice();
    },
    activeFilters() {
      const e = this;
      var t = this.$sdk.filter.activeFilters(e.actualFilter).reduce(function(n, i) {
        return i.key && (i = { ...i }, i.title = `Filter ${n.length + 1}`, i.key = i.key.split("[]").join(""), i.class = "active-filter", i.shrink = !0, n.push(i)), n;
      }, []);
      return t;
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
      const e = this;
      var t = e.columns.map(function(n) {
        return [n.path || n.key, ...n.select || []];
      }).flat().filter(Boolean).map(function(n) {
        return n.split("[]").join("");
      });
      return e.actualOptions.select && (t = [...t, ...e.actualOptions.select]), t;
    },
    columns() {
      let e = [], t = {};
      function n(c) {
        return function(f) {
          var p = t[f.path || f.key];
          (c || !p) && (t[f.path || f.key] = 1, e.push({
            ...f,
            key: f.path || f.key
          }));
        };
      }
      var i = this.actualOptions.prefixColumns || [];
      i.forEach(n(!0));
      var s = this.actualOptions.columns, r = s && s.length ? s : bT(this, this.basicType);
      r.length || r.push({
        title: "Title",
        key: "title"
      }), r.forEach(n(!0));
      var l = this.additionalFields;
      l.forEach(n());
      var a = this.actualOptions.suffixColumns || [];
      a.forEach(n(!0));
      var u = this.activeFilters;
      return u.forEach(n()), e;
    },
    filterChangeString() {
      const e = this;
      var t = this.$sdk.filter.filterChangeString(e.actualFilter);
      return t;
    },
    change() {
      return `${JSON.stringify([this.page, this.roloSecondary, this.rolodexPrimary, this.dateRangeFilter, this.sort, this.keywords, this.selectFields, this.type, this.filterChangeString])}-${this.cacheKey}-${this.$sdk.global.cacheKeys[this.type]}`;
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
      const e = this, t = e.sort || e.defaultSort, n = e.keywords, i = e.selectFields, s = e.page, r = e.combinedFilter, l = e.roloPrimary, a = e.roloSecondary;
      return {
        sort: t,
        search: n,
        select: i,
        page: s,
        filter: r,
        rolodexPrimary: l,
        rolodexSecondary: a
      };
    },
    fieldEnabled() {
      var e = this;
      return e.columns.reduce(function(t, n) {
        return t[n.key] = !0, t;
      }, {});
    }
  },
  methods: {
    toggleField(e) {
      var t = e.path || e.key, n = this.additionalFields.findIndex(function(i) {
        return i.path === t || i.key === t;
      });
      n === -1 ? this.additionalFields.push(e) : this.additionalFields.splice(n, 1);
    },
    ensureMeta(e) {
      return e.meta || (e.meta = {}), e.meta.type || (e.meta.type = this.basicType), e.meta.definition || (e.meta.definition = this.definition.key), this.trash && (e.meta.deleted = !0), e;
    },
    deselectAll() {
      this.manager.deselectAll();
    },
    async selectAll() {
      var e = this;
      e.dataSource = await e.load(!0);
      var t = this.dataSource.all.map(function(n) {
        var i = e.ensureMeta({ _id: n });
        return i;
      });
      e.manager.setSelection(t);
    },
    selectMultiple(e) {
      e = e.map(this.ensureMeta), this.manager.selectMultiple(e);
    },
    deselectMultiple(e) {
      e = e.map(this.ensureMeta), this.manager.deselectMultiple(e);
    },
    rowToggled(e) {
      this.toggle(e);
    },
    rowClicked(e) {
      this.$emit("click:row", e);
    },
    actionsClicked(e) {
      this.$emit("click:actions", e);
    },
    select(e) {
      this.ensureMeta(e), this.manager.select(e);
    },
    deselect(e) {
      this.manager.deselect(e);
    },
    isSelected(e) {
      return this.manager.isSelected(e);
    },
    toggle(e) {
      this.ensureMeta(e), this.manager.toggle(e);
    },
    async load(e) {
      var a, u, c, f;
      var t = this;
      t.loading = !0, Me && (Me.cancel(), Me = null);
      var n = Object.assign({}, t.loadCriteria);
      if (n.includeAll = e, t.trash && (n.trash = !0), t.dateFilterEnabled && !n.search) {
        let p = (u = (a = t.dateRangeFilter) == null ? void 0 : a.dateRange) == null ? void 0 : u.startDate, g = (f = (c = t.dateRangeFilter) == null ? void 0 : c.dateRange) == null ? void 0 : f.endDate;
        if (p || g) {
          let v = Intl.DateTimeFormat().resolvedOptions().timeZone;
          p.toISOString() == g.toISOString() ? (p = new Date(p), p.setHours(0, 0, 0, 0), g = new Date(p), g.setHours(23, 59, 59, 999)) : (g = new Date(g), g.setHours(23, 59, 59, 999)), n.date = {
            startDate: p,
            endDate: g,
            timezone: v
          };
        }
      }
      const i = Math.random(), { promise: s, cancel: r } = await t.$sdk.content.list(t.type, n, { cancellable: !0 });
      Me = { id: i, cancel: r }, s.then(function(p) {
        (Me == null ? void 0 : Me.id) === i && (Me = null, t.loading = !1, t.loadKey++);
      }), s.catch(function(p) {
        (Me == null ? void 0 : Me.id) === i && (Me = null);
      });
      const { data: l } = await s;
      if (l)
        return l.items.forEach(t.ensureMeta), l;
    }
  },
  data() {
    var e = this.selectionManager;
    return e || (e = new yT({ minimum: this.minimum, maximum: this.maximum })), this.modelValue && e.setSelection(this.modelValue), {
      definition: null,
      manager: e,
      loading: !0,
      additionalFields: [],
      loadKey: 1,
      page: {
        size: 50,
        index: 1
      },
      actualFilter: this.filter,
      sort: this.defaultSort,
      keywords: this.search,
      roloPrimary: this.rolodexPrimary,
      roloSecondary: this.roloSecondary,
      dateRangeFilter: {
        dateRange: this.dateRange
      },
      dataSource: null,
      actualOptions: this.options
    };
  }
}, no = (e) => (bt("data-v-a69a100a"), e = e(), kt(), e), xT = { class: "footer" }, wT = /* @__PURE__ */ no(() => /* @__PURE__ */ x("p", null, null, -1)), ST = { key: 0 }, TT = /* @__PURE__ */ no(() => /* @__PURE__ */ x("p", null, null, -1));
function OT(e, t, n, i, s, r) {
  const l = y("ux-icon"), a = y("ux-panel-body"), u = y("ux-panel"), c = y("flex-column"), f = y("ux-button"), p = y("ux-list-item"), g = y("ux-list"), v = y("ux-menu"), T = y("native-table"), A = y("pager"), E = y("flex-footer"), q = y("flex-row"), Q = y("search"), ne = y("ux-field"), ae = y("filter-builder"), oe = y("flex-body"), B = y("spinner");
  return s.definition ? (o(), k(c, {
    key: 0,
    class: "content-browser"
  }, {
    default: m(() => [
      h(c, { class: "browser-body" }, {
        default: m(() => [
          h(q, null, {
            default: m(() => [
              h(q, {
                class: R({ loading: s.loading })
              }, {
                default: m(() => [
                  h(c, null, {
                    default: m(() => [
                      h(c, null, {
                        default: m(() => [
                          s.dataSource ? (o(), d(w, { key: 0 }, [
                            W(e.$slots, "abovecontent", {}, void 0, !0),
                            r.boundaryMessage ? (o(), k(c, {
                              key: 0,
                              class: "empty"
                            }, {
                              default: m(() => [
                                h(u, null, {
                                  default: m(() => [
                                    h(a, null, {
                                      default: m(() => [
                                        h(l, {
                                          class: "large-icon",
                                          icon: "fa-database"
                                        }),
                                        x("div", null, b(r.boundaryMessage), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })) : r.items.length ? (o(), k(c, { key: 1 }, {
                              default: m(() => [
                                r.viewMode && r.viewMode.component ? (o(), k(gt(r.viewMode.component), {
                                  key: 0,
                                  cacheKey: r.viewModeCacheKey,
                                  selection: s.manager.items,
                                  items: r.items,
                                  "onClick:actions": r.actionsClicked,
                                  "onSelect:item:toggle": r.rowToggled,
                                  "onClick:item": r.rowClicked
                                }, null, 40, ["cacheKey", "selection", "items", "onClick:actions", "onSelect:item:toggle", "onClick:item"])) : (o(), k(T, {
                                  key: 1,
                                  sort: s.sort,
                                  "onUpdate:sort": t[0] || (t[0] = (F) => s.sort = F),
                                  enableSelection: n.enableSelection,
                                  enableActions: n.enableActions,
                                  total: r.totalItems,
                                  selectAll: r.selectAll,
                                  deselectAll: r.deselectAllFunction,
                                  selection: s.manager.items,
                                  "onClick:row": r.rowClicked,
                                  "onClick:actions": r.actionsClicked,
                                  "onSelect:row:toggle": r.rowToggled,
                                  "onSelect:multiple": r.selectMultiple,
                                  "onDeselect:multiple": r.deselectMultiple,
                                  rows: r.items,
                                  columns: r.columns
                                }, {
                                  corner: m(() => [
                                    h(v, { right: "" }, {
                                      activator: m(({ on: F }) => [
                                        h(f, pi({ icon: "" }, Js(F)), {
                                          default: m(() => [
                                            h(l, { icon: "fa-cog" })
                                          ]),
                                          _: 2
                                        }, 1040)
                                      ]),
                                      default: m(() => [
                                        h(g, null, {
                                          default: m(() => [
                                            (o(!0), d(w, null, L(r.fields, (F) => (o(), k(p, {
                                              onClick: (se) => r.toggleField(F),
                                              key: F.path
                                            }, {
                                              default: m(() => [
                                                h(l, {
                                                  icon: r.fieldEnabled[F.path] ? "fa-check-square" : "fa-regular fa-square",
                                                  left: ""
                                                }, null, 8, ["icon"]),
                                                S(" " + b(F.title), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["onClick"]))), 128))
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["sort", "enableSelection", "enableActions", "total", "selectAll", "deselectAll", "selection", "onClick:row", "onClick:actions", "onSelect:row:toggle", "onSelect:multiple", "onDeselect:multiple", "rows", "columns"]))
                              ]),
                              _: 1
                            })) : s.loading ? (o(), k(c, {
                              key: 3,
                              class: "empty",
                              center: ""
                            })) : (o(), k(c, {
                              key: 2,
                              class: "empty",
                              center: ""
                            }, {
                              default: m(() => [
                                h(u, null, {
                                  default: m(() => [
                                    h(a, null, {
                                      default: m(() => [
                                        x("div", null, "No " + b(s.definition.plural) + " found.", 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }))
                          ], 64)) : _("", !0)
                        ]),
                        _: 3
                      }),
                      s.dataSource && !r.boundaryMessage ? (o(), k(E, { key: 0 }, {
                        default: m(() => [
                          W(e.$slots, "footera", {}, void 0, !0),
                          x("div", xT, [
                            h(A, {
                              page: s.page,
                              "onUpdate:page": t[1] || (t[1] = (F) => s.page = F),
                              total: r.totalItems
                            }, null, 8, ["page", "total"])
                          ]),
                          W(e.$slots, "footerb", {}, void 0, !0)
                        ]),
                        _: 3
                      })) : _("", !0)
                    ]),
                    _: 3
                  })
                ]),
                _: 3
              }, 8, ["class"]),
              r.showFilterSidebar ? (o(), k(c, {
                key: 0,
                class: "filter-column"
              }, {
                default: m(() => [
                  W(e.$slots, "abovefilter", {}, void 0, !0),
                  h(oe, null, {
                    default: m(() => [
                      h(Q, {
                        modelValue: s.keywords,
                        "onUpdate:modelValue": t[2] || (t[2] = (F) => s.keywords = F),
                        loading: r.searching,
                        debounce: 500,
                        placeholder: "Keyword Search"
                      }, null, 8, ["modelValue", "loading"]),
                      wT,
                      n.dateFilterEnabled ? (o(), d("div", ST, [
                        h(ne, {
                          field: r.dateRangeField,
                          modelValue: s.dateRangeFilter,
                          "onUpdate:modelValue": t[3] || (t[3] = (F) => s.dateRangeFilter = F)
                        }, null, 8, ["field", "modelValue"])
                      ])) : _("", !0),
                      TT,
                      h(ae, {
                        definition: s.definition,
                        modelValue: s.actualFilter,
                        "onUpdate:modelValue": t[4] || (t[4] = (F) => s.actualFilter = F)
                      }, null, 8, ["definition", "modelValue"])
                    ]),
                    _: 1
                  }),
                  W(e.$slots, "belowfilter", {}, void 0, !0)
                ]),
                _: 3
              })) : _("", !0)
            ]),
            _: 3
          })
        ]),
        _: 3
      }),
      s.loading ? (o(), k(B, {
        key: 0,
        large: ""
      })) : _("", !0)
    ]),
    _: 3
  })) : _("", !0);
}
const VT = /* @__PURE__ */ V(kT, [["render", OT], ["__scopeId", "data-v-a69a100a"]]), Dn = {
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
    dismiss(e) {
      this.$emit("dismiss", e);
    },
    close(e) {
      this.$emit("close", e);
    }
  }
};
const AT = {
  props: {
    modal: {
      type: Object,
      required: !0
    }
  },
  data() {
    return {};
  },
  methods: {
    blanketClick() {
      this.dismiss();
    },
    dismiss(e) {
      this.$sdk.closeModal(this.modal.id), this.modal.reject(e);
    },
    close(e) {
      this.$sdk.closeModal(this.modal.id), this.modal.resolve(e);
    }
  },
  computed: {
    componentProps() {
      return this.modal.componentProps || {};
    },
    style() {
      var e = {};
      return this.modal.style && (e = Object.assign(e, this.modal.style)), e;
    }
  }
}, CT = { class: "modal-wrapper" };
function ET(e, t, n, i, s, r) {
  return o(), d("div", CT, [
    x("div", {
      class: "modal-blanket",
      onClick: t[0] || (t[0] = (...l) => r.blanketClick && r.blanketClick(...l))
    }),
    x("div", {
      class: "modal-content",
      style: vt(r.style)
    }, [
      (o(), k(gt(n.modal.component), pi({
        options: n.modal.options
      }, r.componentProps, {
        onClose: r.close,
        onDismiss: r.dismiss
      }), null, 16, ["options", "onClose", "onDismiss"]))
    ], 4)
  ]);
}
const MT = /* @__PURE__ */ V(AT, [["render", ET], ["__scopeId", "data-v-3f68f622"]]);
const IT = {
  mixins: [Dn]
}, DT = { class: "padder" }, FT = ["innerHTML"], $T = { class: "padder" };
function NT(e, t, n, i, s, r) {
  const l = y("flex-body"), a = y("ux-button"), u = y("flex-cell"), c = y("flex-row"), f = y("flex-footer"), p = y("flex-column");
  return o(), k(p, { class: "wrapper" }, {
    default: m(() => [
      h(l, null, {
        default: m(() => [
          x("div", DT, [
            x("h5", null, b(e.options.title), 1),
            x("div", {
              innerHTML: e.options.description
            }, null, 8, FT)
          ])
        ]),
        _: 1
      }),
      h(f, null, {
        default: m(() => [
          x("div", $T, [
            h(c, null, {
              default: m(() => [
                h(u, null, {
                  default: m(() => [
                    h(a, {
                      color: "dismiss",
                      onClick: e.dismiss
                    }, {
                      default: m(() => [
                        S("Cancel")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 1
                }),
                h(u, null, {
                  default: m(() => [
                    h(a, {
                      color: "primary",
                      onClick: e.close
                    }, {
                      default: m(() => [
                        S("Confirm")
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
const LT = /* @__PURE__ */ V(IT, [["render", NT], ["__scopeId", "data-v-19242609"]]);
const PT = {
  data() {
    return {
      selected: null
    };
  },
  mixins: [Dn],
  methods: {
    select(e) {
      this.selected = e, this.close(e);
    }
  }
}, UT = { class: "header" }, jT = { class: "padder" }, RT = ["onClick"], BT = {
  key: 0,
  class: "title"
}, zT = {
  key: 1,
  class: "description"
}, HT = { class: "padder" };
function qT(e, t, n, i, s, r) {
  const l = y("flex-header"), a = y("flex-cell"), u = y("ux-icon"), c = y("flex-row"), f = y("flex-body"), p = y("ux-button"), g = y("flex-footer"), v = y("flex-column");
  return o(), k(v, { class: "wrapper" }, {
    default: m(() => [
      h(l, null, {
        default: m(() => [
          x("div", UT, [
            x("h5", null, b(e.options.title), 1),
            x("div", null, b(e.options.description), 1)
          ])
        ]),
        _: 1
      }),
      h(f, { class: "body" }, {
        default: m(() => [
          x("div", jT, [
            (o(!0), d(w, null, L(e.options.choices, (T) => (o(), d("div", {
              class: "choice",
              onClick: (A) => r.select(T)
            }, [
              h(c, { vcenter: "" }, {
                default: m(() => [
                  h(a, null, {
                    default: m(() => [
                      T.title ? (o(), d("div", BT, b(T.title), 1)) : _("", !0),
                      T.description ? (o(), d("div", zT, b(T.description), 1)) : _("", !0)
                    ]),
                    _: 2
                  }, 1024),
                  h(a, { shrink: "" }, {
                    default: m(() => [
                      h(u, { icon: "fa-angle-right" })
                    ]),
                    _: 1
                  })
                ]),
                _: 2
              }, 1024)
            ], 8, RT))), 256))
          ])
        ]),
        _: 1
      }),
      h(g, null, {
        default: m(() => [
          x("div", HT, [
            h(p, { onClick: e.dismiss }, {
              default: m(() => [
                S("Cancel")
              ]),
              _: 1
            }, 8, ["onClick"])
          ])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const GT = /* @__PURE__ */ V(PT, [["render", qT], ["__scopeId", "data-v-5b38f9ba"]]);
const WT = {
  mixins: [Dn],
  data() {
    return {
      model: {}
    };
  },
  methods: {},
  computed: {
    fields() {
      return this.options.fields || [];
    }
  },
  created() {
    this.options.model && (this.model = this.options.model);
  }
}, ZT = { class: "padder" }, KT = { key: 0 }, YT = { class: "padder" };
function JT(e, t, n, i, s, r) {
  const l = y("ux-form"), a = y("flex-body"), u = y("ux-button"), c = y("flex-cell"), f = y("flex-spacer"), p = y("flex-row"), g = y("flex-footer"), v = y("flex-column");
  return o(), d("form", {
    class: "wrapper",
    onSubmit: t[2] || (t[2] = G((...T) => e.submit && e.submit(...T), ["prevent", "stop"]))
  }, [
    h(v, null, {
      default: m(() => [
        h(a, null, {
          default: m(() => [
            x("div", ZT, [
              x("h5", null, b(e.options.title), 1),
              e.options.description ? (o(), d("p", KT, b(e.options.description), 1)) : _("", !0),
              h(l, {
                ref: "form",
                modelValue: s.model,
                "onUpdate:modelValue": t[0] || (t[0] = (T) => s.model = T),
                fields: r.fields
              }, null, 8, ["modelValue", "fields"])
            ])
          ]),
          _: 1
        }),
        h(g, null, {
          default: m(() => [
            x("div", YT, [
              h(p, null, {
                default: m(() => [
                  h(c, { shrink: "" }, {
                    default: m(() => [
                      h(u, {
                        tag: "a",
                        onClick: e.dismiss
                      }, {
                        default: m(() => [
                          S("Cancel")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    _: 1
                  }),
                  h(f),
                  h(c, { shrink: "" }, {
                    default: m(() => [
                      h(u, {
                        color: "primary",
                        type: "submit",
                        onClick: t[1] || (t[1] = (T) => e.close(s.model))
                      }, {
                        default: m(() => [
                          S("Confirm")
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
const XT = /* @__PURE__ */ V(WT, [["render", JT], ["__scopeId", "data-v-553a799e"]]);
const QT = {
  components: {
    ContentBrowser: VT,
    Search: eo
  },
  mixins: [Dn],
  async created() {
    var e = this, t = await e.$sdk.content.glossary({ hash: !0 });
    e.loading = !1;
    var n = t[e.type];
    if (!n) {
      e.$sdk.notify("You do not have the required permissions to list content of this type"), e.dismiss();
      return;
    }
    e.definition = n, e.bigData && e.rolodexEnabled && (e.rolodexLetter = "A");
  },
  computed: {
    bigData() {
      var e;
      return ((e = this.definition) == null ? void 0 : e.count) > 2e4;
    },
    rolodexEnabled() {
      let e;
      if (!this.bigData)
        return;
      switch (this.definition.definesType || this.definition.key) {
        case "profile":
        case "persona":
          e = !0;
          break;
      }
      return (this.search || this.shortcut) && (e = !1), e;
    },
    rolodexPrimary: {
      get() {
        if (!(this.search || this.shortcut))
          return this.rolodexLetter;
      },
      set(e) {
        this.search || this.shortcut || (this.rolodexLetter = e);
      }
    },
    letters() {
      return "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
    },
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
      return this.options.browserOptions || {};
    }
  },
  watch: {
    search(e, t) {
      const n = this;
      !e && n.bigData && (n.rolodexLetter || (n.rolodexLetter = "A"));
    }
  },
  data() {
    return {
      showFilters: !1,
      search: "",
      searching: !1,
      definition: null,
      loading: !0,
      model: this.options.model.slice(),
      rolodexLetter: ""
    };
  },
  methods: {
    toggleRolodex(e) {
      this.rolodexLetter === e ? this.rolodexLetter = "" : this.rolodexLetter = e;
    },
    rowClicked(e) {
      this.$refs.browser.toggle(e);
    },
    selectionComplete(e) {
      this.close(this.model);
    }
  }
}, eO = { class: "header" }, tO = { class: "font-muted font-sm" }, nO = { class: "rolodex" };
function rO(e, t, n, i, s, r) {
  const l = y("flex-column"), a = y("flex-cell"), u = y("search"), c = y("ux-icon"), f = y("ux-button"), p = y("flex-row"), g = y("flex-header"), v = y("content-browser");
  return o(), k(l, { class: "wrapper" }, {
    default: m(() => [
      s.loading ? (o(), k(l, { key: 0 }, {
        default: m(() => [
          S(" Loading ")
        ]),
        _: 1
      })) : (o(), d(w, { key: 1 }, [
        s.definition ? (o(), d(w, { key: 0 }, [
          h(g, null, {
            default: m(() => [
              x("div", eO, [
                h(p, {
                  vcenter: "",
                  gap: ""
                }, {
                  default: m(() => [
                    h(a, { shrink: "" }, {
                      default: m(() => [
                        x("h3", null, "Select " + b(r.maximum == 1 ? r.title : r.plural), 1)
                      ]),
                      _: 1
                    }),
                    r.maximum ? (o(), k(a, { key: 0 }, {
                      default: m(() => [
                        x("span", tO, "(" + b(s.model.length) + " of " + b(r.maximum) + ")", 1)
                      ]),
                      _: 1
                    })) : _("", !0),
                    s.showFilters ? _("", !0) : (o(), k(a, { key: 1 }, {
                      default: m(() => [
                        h(u, {
                          modelValue: s.search,
                          "onUpdate:modelValue": t[0] || (t[0] = (T) => s.search = T),
                          loading: s.searching,
                          debounce: 500,
                          placeholder: "Keyword Search"
                        }, null, 8, ["modelValue", "loading"])
                      ]),
                      _: 1
                    })),
                    h(a, { shrink: "" }, {
                      default: m(() => [
                        h(f, {
                          icon: e.$device.breakpoint.mobile,
                          onClick: t[1] || (t[1] = (T) => s.showFilters = !s.showFilters)
                        }, {
                          default: m(() => [
                            e.$device.breakpoint.mobile ? (o(), k(c, {
                              key: 0,
                              icon: "fa-search"
                            })) : (o(), d(w, { key: 1 }, [
                              S(b(s.showFilters ? "Hide" : "Show") + " Filters", 1)
                            ], 64))
                          ]),
                          _: 1
                        }, 8, ["icon"])
                      ]),
                      _: 1
                    }),
                    h(a, { shrink: "" }, {
                      default: m(() => [
                        h(f, {
                          color: "primary",
                          onClick: r.selectionComplete
                        }, {
                          default: m(() => [
                            S("Done")
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
          h(v, {
            rolodexPrimary: r.rolodexPrimary,
            "onUpdate:rolodexPrimary": t[3] || (t[3] = (T) => r.rolodexPrimary = T),
            showFilters: s.showFilters,
            ref: "browser",
            search: s.search,
            "onClick:row": r.rowClicked,
            maximum: e.options.maximum,
            modelValue: s.model,
            "onUpdate:modelValue": t[4] || (t[4] = (T) => s.model = T),
            type: e.options.type,
            options: r.browserOptions
          }, {
            abovecontent: m(() => [
              r.rolodexEnabled ? (o(), k(g, { key: 0 }, {
                default: m(() => [
                  x("div", nO, [
                    h(f, {
                      size: "sm",
                      onClick: t[2] || (t[2] = (T) => r.toggleRolodex("")),
                      icon: "",
                      color: r.rolodexPrimary ? "" : "primary"
                    }, {
                      default: m(() => [
                        S("All")
                      ]),
                      _: 1
                    }, 8, ["color"]),
                    (o(!0), d(w, null, L(r.letters, (T) => (o(), k(f, {
                      size: "sm",
                      onClick: (A) => r.toggleRolodex(T),
                      icon: "",
                      color: r.rolodexPrimary === T ? "primary" : ""
                    }, {
                      default: m(() => [
                        S(b(T), 1)
                      ]),
                      _: 2
                    }, 1032, ["onClick", "color"]))), 256))
                  ])
                ]),
                _: 1
              })) : _("", !0)
            ]),
            _: 1
          }, 8, ["rolodexPrimary", "showFilters", "search", "onClick:row", "maximum", "modelValue", "type", "options"])
        ], 64)) : _("", !0)
      ], 64))
    ]),
    _: 1
  });
}
const iO = /* @__PURE__ */ V(QT, [["render", rO], ["__scopeId", "data-v-09ee3a9e"]]);
const sO = {
  components: {
    ScopeSelect: Kg
    // Search,
  },
  mixins: [Dn],
  // async created() {
  //     var self = this;
  //     var glossary = await self.$sdk.content.glossary({ hash: true });
  //     self.loading = false;
  //     var definition = glossary[self.type]
  //     if(!definition) {
  //         //Close immediately
  //         self.$sdk.notify('You do not have the required permissions to list content of this type');
  //         self.dismiss()
  //         return;
  //     }
  //     self.definition = definition;
  // },
  computed: {
    type() {
      return this.options.type;
    },
    action() {
      return this.options.action;
    }
    // title() {
    //     return this.definition.title;
    // },
    // plural() {
    //     return this.definition.plural;
    // },
    // maximum() {
    //     return this.options.maximum || 0;
    // },
    // browserOptions() {
    //     return this.options.browserOptions || {};
    // },
  },
  data() {
    return {
      // search: '',
      // searching: false,
      // definition: null,
      // loading: true,
      model: this.options.model.slice()
    };
  },
  methods: {
    // rowClicked(row) {
    //     this.$refs.browser.toggle(row);
    // },
    selectionComplete(e) {
      this.close(this.model);
    }
  }
}, lO = (e) => (bt("data-v-e905a558"), e = e(), kt(), e), aO = { class: "header" }, oO = /* @__PURE__ */ lO(() => /* @__PURE__ */ x("h3", null, "Select Scopes", -1)), uO = { class: "padder" };
function dO(e, t, n, i, s, r) {
  const l = y("flex-cell"), a = y("ux-button"), u = y("flex-row"), c = y("flex-header"), f = y("scope-select"), p = y("flex-body"), g = y("flex-column");
  return o(), k(g, { class: "wrapper" }, {
    default: m(() => [
      h(c, null, {
        default: m(() => [
          x("div", aO, [
            h(u, {
              vcenter: "",
              gap: ""
            }, {
              default: m(() => [
                h(l, null, {
                  default: m(() => [
                    oO
                  ]),
                  _: 1
                }),
                h(l, { shrink: "" }, {
                  default: m(() => [
                    h(a, {
                      color: "primary",
                      onClick: r.selectionComplete
                    }, {
                      default: m(() => [
                        S("Done")
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
      h(p, { class: "scroll-body" }, {
        default: m(() => [
          x("div", uO, [
            h(f, {
              action: r.action,
              type: r.type,
              modelValue: s.model,
              "onUpdate:modelValue": t[0] || (t[0] = (v) => s.model = v)
            }, null, 8, ["action", "type", "modelValue"])
          ])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const cO = /* @__PURE__ */ V(sO, [["render", dO], ["__scopeId", "data-v-e905a558"]]);
function yO() {
  var e = yi({
    mounted: !1,
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
      mobile: !1,
      tablet: !1,
      desktop: !1,
      xs: !1,
      sm: !1,
      md: !1,
      lg: !1,
      xl: !1,
      xsOnly: !1,
      smOnly: !1,
      smAndDown: !1,
      smAndUp: !1,
      mdOnly: !1,
      mdAndDown: !1,
      mdAndUp: !1,
      lgOnly: !1,
      lgAndDown: !1,
      lgAndUp: !1,
      xlOnly: !1,
      point: 0
    }
  }), t;
  let n;
  return e.resize = function() {
    var i = Math.max(n.innerWidth || 0), s = Math.max(n.innerHeight || 0);
    e.screen = {
      width: i,
      height: s
    };
    var r = {
      mobile: !1,
      tablet: !1,
      desktop: !1,
      xs: !1,
      sm: !1,
      md: !1,
      lg: !1,
      xl: !1,
      xsOnly: !1,
      smOnly: !1,
      smAndDown: !1,
      smAndUp: !1,
      mdOnly: !1,
      mdAndDown: !1,
      mdAndUp: !1,
      lgOnly: !1,
      lgAndDown: !1,
      lgAndUp: !1,
      xlOnly: !1,
      point: 0
    }, l = 0;
    i > e.limits.xs && l++, i > e.limits.sm && l++, i > e.limits.md && l++, i > e.limits.lg && l++, l < 1 && (r.mobile = !0, r.xs = !0, r.xsOnly = !0, r.smAndDown = !0, r.mdAndDown = !0, r.lgAndDown = !0), l == 1 && (r.tablet = !0, r.sm = !0, r.smOnly = !0, r.smAndDown = !0, r.mdAndDown = !0, r.lgAndDown = !0, r.smAndUp = !0), l == 2 && (r.desktop = !0, r.md = !0, r.mdOnly = !0, r.mdAndDown = !0, r.lgAndDown = !0, r.smAndUp = !0, r.mdAndUp = !0), l == 3 && (r.desktop = !0, r.lg = !0, r.lgOnly = !0, r.lgAndDown = !0, r.smAndUp = !0, r.mdAndUp = !0, r.lgAndUp = !0), l > 3 && (r.desktop = !0, r.xl = !0, r.xlOnly = !0, r.smAndUp = !0, r.mdAndUp = !0, r.lgAndUp = !0), e.point = l, e.breakpoint = r;
  }, e.mount = function(i) {
    t || (n = i, e.resize(), t = !0, e.mounted = !0, n.addEventListener("resize", e.resize));
  }, e.unmount = function() {
    n.removeEventListener("resize", e.resize), n = !1, t = !1, e.mounted = !1;
  }, e;
}
const fO = `qik vue ui ${po}`, Ys = {
  FlexColumn: vo,
  FlexBody: wo,
  FlexHeader: Vo,
  FlexFooter: Mo,
  FlexCell: $o,
  FlexSpacer: zo,
  FlexRow: Uo,
  UxPanel: Wo,
  UxPanelBody: Jo,
  UxPanelHeader: tu,
  UxPanelFooter: su,
  UxList: Gy,
  UxListItem: Yy,
  UxForm: Qa,
  UxSubmissionForm: Zs,
  UxFormField: Ii,
  UxSubmissionForm: Zs,
  UxRender: pT,
  UxRenderField: to,
  UxIcon: vy,
  UxMenu: xy,
  UxMenuList: Ty,
  UxImage: Ey,
  UxVideo: Ny,
  UxButton: oy,
  UxCheckbox: aa,
  UxSwitch: my,
  UxLink: yy,
  UxTabset: du,
  UxTab: mu,
  Avatar: Qp,
  Spinner: la,
  ProgressBar: By,
  UxModal: MT,
  Compile: Ai
}, _O = {
  install(e, t) {
    console.log(fO), t.modals = yi([]), t.modal = function(n) {
      return new Promise(function(i, s) {
        n.id = t.modals.length, n.resolve = i, n.reject = s, t.modals.splice(n.id, 0, n);
      });
    }, t.prompt = function(n, i) {
      return i = i || {}, i.model = i.model || {}, i.fields = n, t.modal({
        component: XT,
        options: i
      });
    }, t.browse = function(n, i) {
      return i = i || {}, i.type = n, i.model = i.model || [], t.modal({
        component: iO,
        options: i
      });
    }, t.selectScopes = function(n) {
      return n = n || {}, n.model = n.model || [], t.modal({
        component: cO,
        options: n
      });
    }, t.confirm = function(n, i) {
      return i = i || {}, i.title = n, t.modal({
        component: LT,
        options: i
      });
    }, t.options = function(n, i, s) {
      return t.modal({
        component: GT,
        options: {
          title: i,
          description: s,
          choices: n
        }
      });
    }, t.closeModal = function(n) {
      var i = t.modals.find(function(r) {
        return r.id == n;
      }), s = t.modals.indexOf(i);
      t.modals.splice(s, 1);
    };
    for (const n in Ys) {
      const i = Ys[n];
      e.component(n, i);
    }
  }
};
export {
  Qp as Avatar,
  z0 as CodeEditor,
  VT as ContentBrowser,
  t_ as DateRange,
  yO as Device,
  N1 as FileDrop,
  wo as FlexBody,
  $o as FlexCell,
  vo as FlexColumn,
  Mo as FlexFooter,
  Vo as FlexHeader,
  Uo as FlexRow,
  zo as FlexSpacer,
  Dn as ModalMixin,
  $t as NativeSelect,
  pO as Pager,
  Wo as Panel,
  Jo as PanelBody,
  su as PanelFooter,
  tu as PanelHeader,
  By as ProgressBar,
  _O as QikUI,
  Tp as RememberScrollMixin,
  Kg as ScopeSelect,
  Xg as ScopeSelectButton,
  eo as Search,
  yT as Selection,
  la as Spinner,
  oy as UXButton,
  aa as UXCheckbox,
  Qa as UXForm,
  Ii as UXFormField,
  vy as UXIcon,
  Ey as UXImage,
  yy as UXLink,
  Gy as UXList,
  Yy as UXListItem,
  xy as UXMenu,
  Ty as UXMenuList,
  pT as UXRender,
  to as UXRenderField,
  Zs as UXSubmissionForm,
  my as UXSwitch,
  mu as UXTab,
  Dp as UXTable,
  du as UXTabset,
  Ny as UXVideo,
  LT as UxConfirmModal,
  iO as UxContentModal,
  MT as UxModal,
  GT as UxOptionsModal,
  XT as UxPromptModal,
  cO as UxScopeModal
};
//# sourceMappingURL=lib.es.js.map
