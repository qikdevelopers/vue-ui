import './style.css';
import { defineComponent as Si, ref as Yt, toRefs as fa, onMounted as ma, onBeforeUnmount as Ao, watch as Oi, computed as ui, openBlock as o, createElementBlock as d, renderSlot as q, createCommentVNode as _, useSlots as Mo, reactive as wr, provide as $r, resolveComponent as y, normalizeClass as L, Fragment as S, unref as Rn, createBlock as k, withCtx as h, createVNode as m, renderList as $, toDisplayString as b, withModifiers as W, createTextVNode as O, createElementVNode as w, h as di, resolveDynamicComponent as wt, mergeProps as Ti, toHandlers as ha, withDirectives as K, vModelSelect as St, pushScopeId as at, popScopeId as lt, normalizeStyle as Ot, Teleport as Io, vModelText as pe, withKeys as ge, TransitionGroup as Fo, nextTick as pa, vModelDynamic as Bn, vShow as Yi } from "vue";
import { EventDispatcher as Do } from "@qikdev/sdk";
const $o = "0.2.94";
class $t extends Error {
}
class No extends $t {
  constructor(t) {
    super(`Invalid DateTime: ${t.toMessage()}`);
  }
}
class Lo extends $t {
  constructor(t) {
    super(`Invalid Interval: ${t.toMessage()}`);
  }
}
class Po extends $t {
  constructor(t) {
    super(`Invalid Duration: ${t.toMessage()}`);
  }
}
class vn extends $t {
}
class ya extends $t {
  constructor(t) {
    super(`Invalid unit ${t}`);
  }
}
class qe extends $t {
}
class _t extends $t {
  constructor() {
    super("Zone is an abstract class");
  }
}
const I = "numeric", Qe = "short", Be = "long", ci = {
  year: I,
  month: I,
  day: I
}, _a = {
  year: I,
  month: Qe,
  day: I
}, Uo = {
  year: I,
  month: Qe,
  day: I,
  weekday: Qe
}, ga = {
  year: I,
  month: Be,
  day: I
}, va = {
  year: I,
  month: Be,
  day: I,
  weekday: Be
}, ba = {
  hour: I,
  minute: I
}, ka = {
  hour: I,
  minute: I,
  second: I
}, xa = {
  hour: I,
  minute: I,
  second: I,
  timeZoneName: Qe
}, wa = {
  hour: I,
  minute: I,
  second: I,
  timeZoneName: Be
}, Sa = {
  hour: I,
  minute: I,
  hourCycle: "h23"
}, Oa = {
  hour: I,
  minute: I,
  second: I,
  hourCycle: "h23"
}, Ta = {
  hour: I,
  minute: I,
  second: I,
  hourCycle: "h23",
  timeZoneName: Qe
}, Ea = {
  hour: I,
  minute: I,
  second: I,
  hourCycle: "h23",
  timeZoneName: Be
}, Va = {
  year: I,
  month: I,
  day: I,
  hour: I,
  minute: I
}, Ca = {
  year: I,
  month: I,
  day: I,
  hour: I,
  minute: I,
  second: I
}, Aa = {
  year: I,
  month: Qe,
  day: I,
  hour: I,
  minute: I
}, Ma = {
  year: I,
  month: Qe,
  day: I,
  hour: I,
  minute: I,
  second: I
}, jo = {
  year: I,
  month: Qe,
  day: I,
  weekday: Qe,
  hour: I,
  minute: I
}, Ia = {
  year: I,
  month: Be,
  day: I,
  hour: I,
  minute: I,
  timeZoneName: Qe
}, Fa = {
  year: I,
  month: Be,
  day: I,
  hour: I,
  minute: I,
  second: I,
  timeZoneName: Qe
}, Da = {
  year: I,
  month: Be,
  day: I,
  weekday: Be,
  hour: I,
  minute: I,
  timeZoneName: Be
}, $a = {
  year: I,
  month: Be,
  day: I,
  weekday: Be,
  hour: I,
  minute: I,
  second: I,
  timeZoneName: Be
};
function Z(e) {
  return typeof e > "u";
}
function Dt(e) {
  return typeof e == "number";
}
function Sr(e) {
  return typeof e == "number" && e % 1 === 0;
}
function Ro(e) {
  return typeof e == "string";
}
function Bo(e) {
  return Object.prototype.toString.call(e) === "[object Date]";
}
function Na() {
  try {
    return typeof Intl < "u" && !!Intl.RelativeTimeFormat;
  } catch {
    return !1;
  }
}
function zo(e) {
  return Array.isArray(e) ? e : [e];
}
function Zi(e, t, n) {
  if (e.length !== 0)
    return e.reduce((i, s) => {
      const r = [t(s), s];
      return i && n(i[0], r[0]) === i[0] ? i : r;
    }, null)[1];
}
function Ho(e, t) {
  return t.reduce((n, i) => (n[i] = e[i], n), {});
}
function Xt(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function ut(e, t, n) {
  return Sr(e) && e >= t && e <= n;
}
function qo(e, t) {
  return e - t * Math.floor(e / t);
}
function _e(e, t = 2) {
  const n = e < 0;
  let i;
  return n ? i = "-" + ("" + -e).padStart(t, "0") : i = ("" + e).padStart(t, "0"), i;
}
function gt(e) {
  if (!(Z(e) || e === null || e === ""))
    return parseInt(e, 10);
}
function Vt(e) {
  if (!(Z(e) || e === null || e === ""))
    return parseFloat(e);
}
function Ei(e) {
  if (!(Z(e) || e === null || e === "")) {
    const t = parseFloat("0." + e) * 1e3;
    return Math.floor(t);
  }
}
function Vi(e, t, n = !1) {
  const i = 10 ** t;
  return (n ? Math.trunc : Math.round)(e * i) / i;
}
function An(e) {
  return e % 4 === 0 && (e % 100 !== 0 || e % 400 === 0);
}
function Sn(e) {
  return An(e) ? 366 : 365;
}
function or(e, t) {
  const n = qo(t - 1, 12) + 1, i = e + (t - n) / 12;
  return n === 2 ? An(i) ? 29 : 28 : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][n - 1];
}
function Ci(e) {
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
function ur(e) {
  const t = (e + Math.floor(e / 4) - Math.floor(e / 100) + Math.floor(e / 400)) % 7, n = e - 1, i = (n + Math.floor(n / 4) - Math.floor(n / 100) + Math.floor(n / 400)) % 7;
  return t === 4 || i === 3 ? 53 : 52;
}
function fi(e) {
  return e > 99 ? e : e > 60 ? 1900 + e : 2e3 + e;
}
function La(e, t, n, i = null) {
  const s = new Date(e), r = {
    hourCycle: "h23",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  };
  i && (r.timeZone = i);
  const a = { timeZoneName: t, ...r }, l = new Intl.DateTimeFormat(n, a).formatToParts(s).find((u) => u.type.toLowerCase() === "timezonename");
  return l ? l.value : null;
}
function Or(e, t) {
  let n = parseInt(e, 10);
  Number.isNaN(n) && (n = 0);
  const i = parseInt(t, 10) || 0, s = n < 0 || Object.is(n, -0) ? -i : i;
  return n * 60 + s;
}
function Pa(e) {
  const t = Number(e);
  if (typeof e == "boolean" || e === "" || Number.isNaN(t))
    throw new qe(`Invalid unit value ${e}`);
  return t;
}
function dr(e, t) {
  const n = {};
  for (const i in e)
    if (Xt(e, i)) {
      const s = e[i];
      if (s == null)
        continue;
      n[t(i)] = Pa(s);
    }
  return n;
}
function cr(e, t) {
  const n = Math.trunc(Math.abs(e / 60)), i = Math.trunc(Math.abs(e % 60)), s = e >= 0 ? "+" : "-";
  switch (t) {
    case "short":
      return `${s}${_e(n, 2)}:${_e(i, 2)}`;
    case "narrow":
      return `${s}${n}${i > 0 ? `:${i}` : ""}`;
    case "techie":
      return `${s}${_e(n, 2)}${_e(i, 2)}`;
    default:
      throw new RangeError(`Value format ${t} is out of range for property format`);
  }
}
function Tr(e) {
  return Ho(e, ["hour", "minute", "second", "millisecond"]);
}
const Go = /[A-Za-z_+-]{1,256}(:?\/[A-Za-z0-9_+-]{1,256}(\/[A-Za-z0-9_+-]{1,256})?)?/, Wo = [
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
], Ua = [
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
], Ko = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
function ja(e) {
  switch (e) {
    case "narrow":
      return [...Ko];
    case "short":
      return [...Ua];
    case "long":
      return [...Wo];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    case "2-digit":
      return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    default:
      return null;
  }
}
const Ra = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
], Ba = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], Yo = ["M", "T", "W", "T", "F", "S", "S"];
function za(e) {
  switch (e) {
    case "narrow":
      return [...Yo];
    case "short":
      return [...Ba];
    case "long":
      return [...Ra];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7"];
    default:
      return null;
  }
}
const Ha = ["AM", "PM"], Zo = ["Before Christ", "Anno Domini"], Jo = ["BC", "AD"], Xo = ["B", "A"];
function qa(e) {
  switch (e) {
    case "narrow":
      return [...Xo];
    case "short":
      return [...Jo];
    case "long":
      return [...Zo];
    default:
      return null;
  }
}
function Qo(e) {
  return Ha[e.hour < 12 ? 0 : 1];
}
function eu(e, t) {
  return za(t)[e.weekday - 1];
}
function tu(e, t) {
  return ja(t)[e.month - 1];
}
function nu(e, t) {
  return qa(t)[e.year < 0 ? 0 : 1];
}
function ru(e, t, n = "always", i = !1) {
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
  const a = Object.is(t, -0) || t < 0, l = Math.abs(t), u = l === 1, c = s[e], f = i ? u ? c[1] : c[2] || c[1] : u ? s[e][0] : e;
  return a ? `${l} ${f} ago` : `in ${l} ${f}`;
}
function Ji(e, t) {
  let n = "";
  for (const i of e)
    i.literal ? n += i.val : n += t(i.val);
  return n;
}
const iu = {
  D: ci,
  DD: _a,
  DDD: ga,
  DDDD: va,
  t: ba,
  tt: ka,
  ttt: xa,
  tttt: wa,
  T: Sa,
  TT: Oa,
  TTT: Ta,
  TTTT: Ea,
  f: Va,
  ff: Aa,
  fff: Ia,
  ffff: Da,
  F: Ca,
  FF: Ma,
  FFF: Fa,
  FFFF: $a
};
class Pe {
  static create(t, n = {}) {
    return new Pe(t, n);
  }
  static parseFormat(t) {
    let n = null, i = "", s = !1;
    const r = [];
    for (let a = 0; a < t.length; a++) {
      const l = t.charAt(a);
      l === "'" ? (i.length > 0 && r.push({ literal: s, val: i }), n = null, i = "", s = !s) : s || l === n ? i += l : (i.length > 0 && r.push({ literal: !1, val: i }), i = l, n = l);
    }
    return i.length > 0 && r.push({ literal: s, val: i }), r;
  }
  static macroTokenToFormatOpts(t) {
    return iu[t];
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
      return _e(t, n);
    const i = { ...this.opts };
    return n > 0 && (i.padTo = n), this.loc.numberFormatter(i).format(t);
  }
  formatDateTimeFromString(t, n) {
    const i = this.loc.listingMode() === "en", s = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory", r = (v, x) => this.loc.extract(t, v, x), a = (v) => t.isOffsetFixed && t.offset === 0 && v.allowZ ? "Z" : t.isValid ? t.zone.formatOffset(t.ts, v.format) : "", l = () => i ? Qo(t) : r({ hour: "numeric", hourCycle: "h12" }, "dayperiod"), u = (v, x) => i ? tu(t, v) : r(x ? { month: v } : { month: v, day: "numeric" }, "month"), c = (v, x) => i ? eu(t, v) : r(
      x ? { weekday: v } : { weekday: v, month: "long", day: "numeric" },
      "weekday"
    ), f = (v) => {
      const x = Pe.macroTokenToFormatOpts(v);
      return x ? this.formatWithSystemDefault(t, x) : v;
    }, p = (v) => i ? nu(t, v) : r({ era: v }, "era"), g = (v) => {
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
          return a({ format: "narrow", allowZ: this.opts.allowZ });
        case "ZZ":
          return a({ format: "short", allowZ: this.opts.allowZ });
        case "ZZZ":
          return a({ format: "techie", allowZ: this.opts.allowZ });
        case "ZZZZ":
          return t.zone.offsetName(t.ts, { format: "short", locale: this.loc.locale });
        case "ZZZZZ":
          return t.zone.offsetName(t.ts, { format: "long", locale: this.loc.locale });
        case "z":
          return t.zoneName;
        case "a":
          return l();
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
    return Ji(Pe.parseFormat(n), g);
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
    }, r = Pe.parseFormat(n), a = r.reduce(
      (u, { literal: c, val: f }) => c ? u : u.concat(f),
      []
    ), l = t.shiftTo(...a.map(i).filter((u) => u));
    return Ji(r, s(l));
  }
}
class Xe {
  constructor(t, n) {
    this.reason = t, this.explanation = n;
  }
  toMessage() {
    return this.explanation ? `${this.reason}: ${this.explanation}` : this.reason;
  }
}
class Mn {
  /**
   * The type of zone
   * @abstract
   * @type {string}
   */
  get type() {
    throw new _t();
  }
  /**
   * The name of this zone.
   * @abstract
   * @type {string}
   */
  get name() {
    throw new _t();
  }
  /**
   * Returns whether the offset is known to be fixed for the whole year.
   * @abstract
   * @type {boolean}
   */
  get isUniversal() {
    throw new _t();
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
    throw new _t();
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
    throw new _t();
  }
  /**
   * Return the offset in minutes for this zone at the specified timestamp.
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to compute the offset
   * @return {number}
   */
  offset(t) {
    throw new _t();
  }
  /**
   * Return whether this Zone is equal to another zone
   * @abstract
   * @param {Zone} otherZone - the zone to compare
   * @return {boolean}
   */
  equals(t) {
    throw new _t();
  }
  /**
   * Return whether this Zone is valid.
   * @abstract
   * @type {boolean}
   */
  get isValid() {
    throw new _t();
  }
}
let Nr = null;
class Ai extends Mn {
  /**
   * Get a singleton instance of the local zone
   * @return {SystemZone}
   */
  static get instance() {
    return Nr === null && (Nr = new Ai()), Nr;
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
    return La(t, n, i);
  }
  /** @override **/
  formatOffset(t, n) {
    return cr(this.offset(t), n);
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
let tr = {};
function su(e) {
  return tr[e] || (tr[e] = new Intl.DateTimeFormat("en-US", {
    hour12: !1,
    timeZone: e,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    era: "short"
  })), tr[e];
}
const au = {
  year: 0,
  month: 1,
  day: 2,
  era: 3,
  hour: 4,
  minute: 5,
  second: 6
};
function lu(e, t) {
  const n = e.format(t).replace(/\u200E/g, ""), i = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(n), [, s, r, a, l, u, c, f] = i;
  return [a, s, r, l, u, c, f];
}
function ou(e, t) {
  const n = e.formatToParts(t), i = [];
  for (let s = 0; s < n.length; s++) {
    const { type: r, value: a } = n[s], l = au[r];
    r === "era" ? i[l] = a : Z(l) || (i[l] = parseInt(a, 10));
  }
  return i;
}
let zn = {};
class ct extends Mn {
  /**
   * @param {string} name - Zone name
   * @return {IANAZone}
   */
  static create(t) {
    return zn[t] || (zn[t] = new ct(t)), zn[t];
  }
  /**
   * Reset local caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  static resetCache() {
    zn = {}, tr = {};
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
    super(), this.zoneName = t, this.valid = ct.isValidZone(t);
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
    return La(t, n, i, this.name);
  }
  /** @override **/
  formatOffset(t, n) {
    return cr(this.offset(t), n);
  }
  /** @override **/
  offset(t) {
    const n = new Date(t);
    if (isNaN(n))
      return NaN;
    const i = su(this.name);
    let [s, r, a, l, u, c, f] = i.formatToParts ? ou(i, n) : lu(i, n);
    l === "BC" && (s = -Math.abs(s) + 1);
    const g = Ci({
      year: s,
      month: r,
      day: a,
      hour: u === 24 ? 0 : u,
      minute: c,
      second: f,
      millisecond: 0
    });
    let v = +n;
    const x = v % 1e3;
    return v -= x >= 0 ? x : 1e3 + x, (g - v) / (60 * 1e3);
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
let Lr = null;
class Fe extends Mn {
  /**
   * Get a singleton instance of UTC
   * @return {FixedOffsetZone}
   */
  static get utcInstance() {
    return Lr === null && (Lr = new Fe(0)), Lr;
  }
  /**
   * Get an instance with a specified offset
   * @param {number} offset - The offset in minutes
   * @return {FixedOffsetZone}
   */
  static instance(t) {
    return t === 0 ? Fe.utcInstance : new Fe(t);
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
        return new Fe(Or(n[1], n[2]));
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
    return this.fixed === 0 ? "UTC" : `UTC${cr(this.fixed, "narrow")}`;
  }
  /** @override **/
  offsetName() {
    return this.name;
  }
  /** @override **/
  formatOffset(t, n) {
    return cr(this.fixed, n);
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
class uu extends Mn {
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
function bt(e, t) {
  if (Z(e) || e === null)
    return t;
  if (e instanceof Mn)
    return e;
  if (Ro(e)) {
    const n = e.toLowerCase();
    return n === "local" || n === "system" ? t : n === "utc" || n === "gmt" ? Fe.utcInstance : Fe.parseSpecifier(n) || ct.create(e);
  } else
    return Dt(e) ? Fe.instance(e) : typeof e == "object" && e.offset && typeof e.offset == "number" ? e : new uu(e);
}
let Xi = () => Date.now(), Qi = "system", es = null, ts = null, ns = null, rs;
class ve {
  /**
   * Get the callback for returning the current timestamp.
   * @type {function}
   */
  static get now() {
    return Xi;
  }
  /**
   * Set the callback for returning the current timestamp.
   * The function should return a number, which will be interpreted as an Epoch millisecond count
   * @type {function}
   * @example Settings.now = () => Date.now() + 3000 // pretend it is 3 seconds in the future
   * @example Settings.now = () => 0 // always pretend it's Jan 1, 1970 at midnight in UTC time
   */
  static set now(t) {
    Xi = t;
  }
  /**
   * Set the default time zone to create DateTimes in. Does not affect existing instances.
   * Use the value "system" to reset this value to the system's time zone.
   * @type {string}
   */
  static set defaultZone(t) {
    Qi = t;
  }
  /**
   * Get the default time zone object currently used to create DateTimes. Does not affect existing instances.
   * The default value is the system's time zone (the one set on the machine that runs this code).
   * @type {Zone}
   */
  static get defaultZone() {
    return bt(Qi, Ai.instance);
  }
  /**
   * Get the default locale to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultLocale() {
    return es;
  }
  /**
   * Set the default locale to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultLocale(t) {
    es = t;
  }
  /**
   * Get the default numbering system to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultNumberingSystem() {
    return ts;
  }
  /**
   * Set the default numbering system to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultNumberingSystem(t) {
    ts = t;
  }
  /**
   * Get the default output calendar to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultOutputCalendar() {
    return ns;
  }
  /**
   * Set the default output calendar to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultOutputCalendar(t) {
    ns = t;
  }
  /**
   * Get whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
   * @type {boolean}
   */
  static get throwOnInvalid() {
    return rs;
  }
  /**
   * Set whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
   * @type {boolean}
   */
  static set throwOnInvalid(t) {
    rs = t;
  }
  /**
   * Reset Luxon's global caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  static resetCaches() {
    ce.resetCache(), ct.resetCache();
  }
}
let is = {};
function du(e, t = {}) {
  const n = JSON.stringify([e, t]);
  let i = is[n];
  return i || (i = new Intl.ListFormat(e, t), is[n] = i), i;
}
let mi = {};
function hi(e, t = {}) {
  const n = JSON.stringify([e, t]);
  let i = mi[n];
  return i || (i = new Intl.DateTimeFormat(e, t), mi[n] = i), i;
}
let pi = {};
function cu(e, t = {}) {
  const n = JSON.stringify([e, t]);
  let i = pi[n];
  return i || (i = new Intl.NumberFormat(e, t), pi[n] = i), i;
}
let yi = {};
function fu(e, t = {}) {
  const { base: n, ...i } = t, s = JSON.stringify([e, i]);
  let r = yi[s];
  return r || (r = new Intl.RelativeTimeFormat(e, t), yi[s] = r), r;
}
let bn = null;
function mu() {
  return bn || (bn = new Intl.DateTimeFormat().resolvedOptions().locale, bn);
}
function hu(e) {
  const t = e.indexOf("-u-");
  if (t === -1)
    return [e];
  {
    let n;
    const i = e.substring(0, t);
    try {
      n = hi(e).resolvedOptions();
    } catch {
      n = hi(i).resolvedOptions();
    }
    const { numberingSystem: s, calendar: r } = n;
    return [i, s, r];
  }
}
function pu(e, t, n) {
  return (n || t) && (e += "-u", n && (e += `-ca-${n}`), t && (e += `-nu-${t}`)), e;
}
function yu(e) {
  const t = [];
  for (let n = 1; n <= 12; n++) {
    const i = U.utc(2016, n, 1);
    t.push(e(i));
  }
  return t;
}
function _u(e) {
  const t = [];
  for (let n = 1; n <= 7; n++) {
    const i = U.utc(2016, 11, 13 + n);
    t.push(e(i));
  }
  return t;
}
function Hn(e, t, n, i, s) {
  const r = e.listingMode(n);
  return r === "error" ? null : r === "en" ? i(t) : s(t);
}
function gu(e) {
  return e.numberingSystem && e.numberingSystem !== "latn" ? !1 : e.numberingSystem === "latn" || !e.locale || e.locale.startsWith("en") || new Intl.DateTimeFormat(e.intl).resolvedOptions().numberingSystem === "latn";
}
class vu {
  constructor(t, n, i) {
    this.padTo = i.padTo || 0, this.floor = i.floor || !1;
    const { padTo: s, floor: r, ...a } = i;
    if (!n || Object.keys(a).length > 0) {
      const l = { useGrouping: !1, ...i };
      i.padTo > 0 && (l.minimumIntegerDigits = i.padTo), this.inf = cu(t, l);
    }
  }
  format(t) {
    if (this.inf) {
      const n = this.floor ? Math.floor(t) : t;
      return this.inf.format(n);
    } else {
      const n = this.floor ? Math.floor(t) : Vi(t, 3);
      return _e(n, this.padTo);
    }
  }
}
class bu {
  constructor(t, n, i) {
    this.opts = i;
    let s;
    if (t.zone.isUniversal) {
      const a = -1 * (t.offset / 60), l = a >= 0 ? `Etc/GMT+${a}` : `Etc/GMT${a}`;
      t.offset !== 0 && ct.create(l).valid ? (s = l, this.dt = t) : (s = "UTC", i.timeZoneName ? this.dt = t : this.dt = t.offset === 0 ? t : U.fromMillis(t.ts + t.offset * 60 * 1e3));
    } else
      t.zone.type === "system" ? this.dt = t : (this.dt = t, s = t.zone.name);
    const r = { ...this.opts };
    s && (r.timeZone = s), this.dtf = hi(n, r);
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
class ku {
  constructor(t, n, i) {
    this.opts = { style: "long", ...i }, !n && Na() && (this.rtf = fu(t, i));
  }
  format(t, n) {
    return this.rtf ? this.rtf.format(t, n) : ru(n, t, this.opts.numeric, this.opts.style !== "long");
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
    const r = t || ve.defaultLocale, a = r || (s ? "en-US" : mu()), l = n || ve.defaultNumberingSystem, u = i || ve.defaultOutputCalendar;
    return new ce(a, l, u, r);
  }
  static resetCache() {
    bn = null, mi = {}, pi = {}, yi = {};
  }
  static fromObject({ locale: t, numberingSystem: n, outputCalendar: i } = {}) {
    return ce.create(t, n, i);
  }
  constructor(t, n, i, s) {
    const [r, a, l] = hu(t);
    this.locale = r, this.numberingSystem = n || a || null, this.outputCalendar = i || l || null, this.intl = pu(this.locale, this.numberingSystem, this.outputCalendar), this.weekdaysCache = { format: {}, standalone: {} }, this.monthsCache = { format: {}, standalone: {} }, this.meridiemCache = null, this.eraCache = {}, this.specifiedLocale = s, this.fastNumbersCached = null;
  }
  get fastNumbers() {
    return this.fastNumbersCached == null && (this.fastNumbersCached = gu(this)), this.fastNumbersCached;
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
    return Hn(this, t, i, ja, () => {
      const s = n ? { month: t, day: "numeric" } : { month: t }, r = n ? "format" : "standalone";
      return this.monthsCache[r][t] || (this.monthsCache[r][t] = yu((a) => this.extract(a, s, "month"))), this.monthsCache[r][t];
    });
  }
  weekdays(t, n = !1, i = !0) {
    return Hn(this, t, i, za, () => {
      const s = n ? { weekday: t, year: "numeric", month: "long", day: "numeric" } : { weekday: t }, r = n ? "format" : "standalone";
      return this.weekdaysCache[r][t] || (this.weekdaysCache[r][t] = _u(
        (a) => this.extract(a, s, "weekday")
      )), this.weekdaysCache[r][t];
    });
  }
  meridiems(t = !0) {
    return Hn(
      this,
      void 0,
      t,
      () => Ha,
      () => {
        if (!this.meridiemCache) {
          const n = { hour: "numeric", hourCycle: "h12" };
          this.meridiemCache = [U.utc(2016, 11, 13, 9), U.utc(2016, 11, 13, 19)].map(
            (i) => this.extract(i, n, "dayperiod")
          );
        }
        return this.meridiemCache;
      }
    );
  }
  eras(t, n = !0) {
    return Hn(this, t, n, qa, () => {
      const i = { era: t };
      return this.eraCache[t] || (this.eraCache[t] = [U.utc(-40, 1, 1), U.utc(2017, 1, 1)].map(
        (s) => this.extract(s, i, "era")
      )), this.eraCache[t];
    });
  }
  extract(t, n, i) {
    const s = this.dtFormatter(t, n), r = s.formatToParts(), a = r.find((l) => l.type.toLowerCase() === i);
    return a ? a.value : null;
  }
  numberFormatter(t = {}) {
    return new vu(this.intl, t.forceSimple || this.fastNumbers, t);
  }
  dtFormatter(t, n = {}) {
    return new bu(t, this.intl, n);
  }
  relFormatter(t = {}) {
    return new ku(this.intl, this.isEnglish(), t);
  }
  listFormatter(t = {}) {
    return du(this.intl, t);
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
function Nt(...e) {
  return (t) => e.reduce(
    ([n, i, s], r) => {
      const [a, l, u] = r(t, s);
      return [{ ...n, ...a }, i || l, u];
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
function Ga(...e) {
  return (t, n) => {
    const i = {};
    let s;
    for (s = 0; s < e.length; s++)
      i[e[s]] = gt(t[n + s]);
    return [i, null, n + s];
  };
}
const Wa = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/, Mi = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/, Ka = RegExp(`${Mi.source}${Wa.source}?`), Ii = RegExp(`(?:T${Ka.source})?`), xu = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, wu = /(\d{4})-?W(\d\d)(?:-?(\d))?/, Su = /(\d{4})-?(\d{3})/, Ou = Ga("weekYear", "weekNumber", "weekDay"), Tu = Ga("year", "ordinal"), Eu = /(\d{4})-(\d\d)-(\d\d)/, Ya = RegExp(
  `${Mi.source} ?(?:${Wa.source}|(${Go.source}))?`
), Vu = RegExp(`(?: ${Ya.source})?`);
function Zt(e, t, n) {
  const i = e[t];
  return Z(i) ? n : gt(i);
}
function Za(e, t) {
  return [{
    year: Zt(e, t),
    month: Zt(e, t + 1, 1),
    day: Zt(e, t + 2, 1)
  }, null, t + 3];
}
function Lt(e, t) {
  return [{
    hours: Zt(e, t, 0),
    minutes: Zt(e, t + 1, 0),
    seconds: Zt(e, t + 2, 0),
    milliseconds: Ei(e[t + 3])
  }, null, t + 4];
}
function rn(e, t) {
  const n = !e[t] && !e[t + 1], i = Or(e[t + 1], e[t + 2]), s = n ? null : Fe.instance(i);
  return [{}, s, t + 3];
}
function Ja(e, t) {
  const n = e[t] ? ct.create(e[t]) : null;
  return [{}, n, t + 1];
}
const Cu = RegExp(`^T?${Mi.source}$`), Au = /^-?P(?:(?:(-?\d{1,9}(?:\.\d{1,9})?)Y)?(?:(-?\d{1,9}(?:\.\d{1,9})?)M)?(?:(-?\d{1,9}(?:\.\d{1,9})?)W)?(?:(-?\d{1,9}(?:\.\d{1,9})?)D)?(?:T(?:(-?\d{1,9}(?:\.\d{1,9})?)H)?(?:(-?\d{1,9}(?:\.\d{1,9})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,9}))?S)?)?)$/;
function Mu(e) {
  const [t, n, i, s, r, a, l, u, c] = e, f = t[0] === "-", p = u && u[0] === "-", g = (v, x = !1) => v !== void 0 && (x || v && f) ? -v : v;
  return [
    {
      years: g(Vt(n)),
      months: g(Vt(i)),
      weeks: g(Vt(s)),
      days: g(Vt(r)),
      hours: g(Vt(a)),
      minutes: g(Vt(l)),
      seconds: g(Vt(u), u === "-0"),
      milliseconds: g(Ei(c), p)
    }
  ];
}
const Iu = {
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
function Fi(e, t, n, i, s, r, a) {
  const l = {
    year: t.length === 2 ? fi(gt(t)) : gt(t),
    month: Ua.indexOf(n) + 1,
    day: gt(i),
    hour: gt(s),
    minute: gt(r)
  };
  return a && (l.second = gt(a)), e && (l.weekday = e.length > 3 ? Ra.indexOf(e) + 1 : Ba.indexOf(e) + 1), l;
}
const Fu = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
function Du(e) {
  const [
    ,
    t,
    n,
    i,
    s,
    r,
    a,
    l,
    u,
    c,
    f,
    p
  ] = e, g = Fi(t, s, i, n, r, a, l);
  let v;
  return u ? v = Iu[u] : c ? v = 0 : v = Or(f, p), [g, new Fe(v)];
}
function $u(e) {
  return e.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
}
const Nu = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/, Lu = /^(Monday|Tuesday|Wedsday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/, Pu = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
function ss(e) {
  const [, t, n, i, s, r, a, l] = e;
  return [Fi(t, s, i, n, r, a, l), Fe.utcInstance];
}
function Uu(e) {
  const [, t, n, i, s, r, a, l] = e;
  return [Fi(t, l, n, i, s, r, a), Fe.utcInstance];
}
const ju = tn(xu, Ii), Ru = tn(wu, Ii), Bu = tn(Su, Ii), zu = tn(Ka), Hu = Nt(
  Za,
  Lt,
  rn
), qu = Nt(
  Ou,
  Lt,
  rn
), Gu = Nt(
  Tu,
  Lt,
  rn
), Wu = Nt(Lt, rn);
function Ku(e) {
  return nn(
    e,
    [ju, Hu],
    [Ru, qu],
    [Bu, Gu],
    [zu, Wu]
  );
}
function Yu(e) {
  return nn($u(e), [Fu, Du]);
}
function Zu(e) {
  return nn(
    e,
    [Nu, ss],
    [Lu, ss],
    [Pu, Uu]
  );
}
function Ju(e) {
  return nn(e, [Au, Mu]);
}
const Xu = Nt(Lt);
function Qu(e) {
  return nn(e, [Cu, Xu]);
}
const ed = tn(Eu, Vu), td = tn(Ya), nd = Nt(
  Za,
  Lt,
  rn,
  Ja
), rd = Nt(
  Lt,
  rn,
  Ja
);
function id(e) {
  return nn(
    e,
    [ed, nd],
    [td, rd]
  );
}
const sd = "Invalid Duration", Xa = {
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
}, ad = {
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
  ...Xa
}, ze = 146097 / 400, zt = 146097 / 4800, ld = {
  years: {
    quarters: 4,
    months: 12,
    weeks: ze / 7,
    days: ze,
    hours: ze * 24,
    minutes: ze * 24 * 60,
    seconds: ze * 24 * 60 * 60,
    milliseconds: ze * 24 * 60 * 60 * 1e3
  },
  quarters: {
    months: 3,
    weeks: ze / 28,
    days: ze / 4,
    hours: ze * 24 / 4,
    minutes: ze * 24 * 60 / 4,
    seconds: ze * 24 * 60 * 60 / 4,
    milliseconds: ze * 24 * 60 * 60 * 1e3 / 4
  },
  months: {
    weeks: zt / 7,
    days: zt,
    hours: zt * 24,
    minutes: zt * 24 * 60,
    seconds: zt * 24 * 60 * 60,
    milliseconds: zt * 24 * 60 * 60 * 1e3
  },
  ...Xa
}, It = [
  "years",
  "quarters",
  "months",
  "weeks",
  "days",
  "hours",
  "minutes",
  "seconds",
  "milliseconds"
], od = It.slice(0).reverse();
function Ct(e, t, n = !1) {
  const i = {
    values: n ? t.values : { ...e.values, ...t.values || {} },
    loc: e.loc.clone(t.loc),
    conversionAccuracy: t.conversionAccuracy || e.conversionAccuracy
  };
  return new X(i);
}
function ud(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function Qa(e, t, n, i, s) {
  const r = e[s][n], a = t[n] / r, l = Math.sign(a) === Math.sign(i[s]), u = !l && i[s] !== 0 && Math.abs(a) <= 1 ? ud(a) : Math.trunc(a);
  i[s] += u, t[n] -= u * r;
}
function dd(e, t) {
  od.reduce((n, i) => Z(t[i]) ? n : (n && Qa(e, t, n, t, i), i), null);
}
class X {
  /**
   * @private
   */
  constructor(t) {
    const n = t.conversionAccuracy === "longterm" || !1;
    this.values = t.values, this.loc = t.loc || ce.create(), this.conversionAccuracy = n ? "longterm" : "casual", this.invalid = t.invalid || null, this.matrix = n ? ld : ad, this.isLuxonDuration = !0;
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
      throw new qe(
        `Duration.fromObject: argument expected to be an object, got ${t === null ? "null" : typeof t}`
      );
    return new X({
      values: dr(t, X.normalizeUnit),
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
    if (Dt(t))
      return X.fromMillis(t);
    if (X.isDuration(t))
      return t;
    if (typeof t == "object")
      return X.fromObject(t);
    throw new qe(
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
    const [i] = Ju(t);
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
    const [i] = Qu(t);
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
      throw new qe("need to specify a reason the Duration is invalid");
    const i = t instanceof Xe ? t : new Xe(t, n);
    if (ve.throwOnInvalid)
      throw new Po(i);
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
      throw new ya(t);
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
    return this.isValid ? Pe.create(this.loc, i).formatDurationFromString(this, t) : sd;
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
    const n = It.map((i) => {
      const s = this.values[i];
      return Z(s) ? null : this.loc.numberFormatter({ style: "unit", unitDisplay: "long", ...t, unit: i.slice(0, -1) }).format(s);
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
    return this.years !== 0 && (t += this.years + "Y"), (this.months !== 0 || this.quarters !== 0) && (t += this.months + this.quarters * 3 + "M"), this.weeks !== 0 && (t += this.weeks + "W"), this.days !== 0 && (t += this.days + "D"), (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0) && (t += "T"), this.hours !== 0 && (t += this.hours + "H"), this.minutes !== 0 && (t += this.minutes + "M"), (this.seconds !== 0 || this.milliseconds !== 0) && (t += Vi(this.seconds + this.milliseconds / 1e3, 3) + "S"), t === "P" && (t += "T0S"), t;
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
    for (const s of It)
      (Xt(n.values, s) || Xt(this.values, s)) && (i[s] = n.get(s) + this.get(s));
    return Ct(this, { values: i }, !0);
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
      n[i] = Pa(t(this.values[i], i));
    return Ct(this, { values: n }, !0);
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
    const n = { ...this.values, ...dr(t, X.normalizeUnit) };
    return Ct(this, { values: n });
  }
  /**
   * "Set" the locale and/or numberingSystem.  Returns a newly-constructed Duration.
   * @example dur.reconfigure({ locale: 'en-GB' })
   * @return {Duration}
   */
  reconfigure({ locale: t, numberingSystem: n, conversionAccuracy: i } = {}) {
    const s = this.loc.clone({ locale: t, numberingSystem: n }), r = { loc: s };
    return i && (r.conversionAccuracy = i), Ct(this, r);
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
    return dd(this.matrix, t), Ct(this, { values: t }, !0);
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
    t = t.map((a) => X.normalizeUnit(a));
    const n = {}, i = {}, s = this.toObject();
    let r;
    for (const a of It)
      if (t.indexOf(a) >= 0) {
        r = a;
        let l = 0;
        for (const c in i)
          l += this.matrix[c][a] * i[c], i[c] = 0;
        Dt(s[a]) && (l += s[a]);
        const u = Math.trunc(l);
        n[a] = u, i[a] = (l * 1e3 - u * 1e3) / 1e3;
        for (const c in s)
          It.indexOf(c) > It.indexOf(a) && Qa(this.matrix, s, c, n, a);
      } else
        Dt(s[a]) && (i[a] = s[a]);
    for (const a in i)
      i[a] !== 0 && (n[r] += a === r ? i[a] : i[a] / this.matrix[r][a]);
    return Ct(this, { values: n }, !0).normalize();
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
    return Ct(this, { values: t }, !0);
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
    for (const i of It)
      if (!n(this.values[i], t.values[i]))
        return !1;
    return !0;
  }
}
const fn = "Invalid Interval";
function cd(e, t) {
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
      throw new qe("need to specify a reason the Interval is invalid");
    const i = t instanceof Xe ? t : new Xe(t, n);
    if (ve.throwOnInvalid)
      throw new Lo(i);
    return new he({ invalid: i });
  }
  /**
   * Create an Interval from a start DateTime and an end DateTime. Inclusive of the start but not the end.
   * @param {DateTime|Date|Object} start
   * @param {DateTime|Date|Object} end
   * @return {Interval}
   */
  static fromDateTimes(t, n) {
    const i = pn(t), s = pn(n), r = cd(i, s);
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
    const i = X.fromDurationLike(n), s = pn(t);
    return he.fromDateTimes(s, s.plus(i));
  }
  /**
   * Create an Interval from an end DateTime and a Duration to extend backwards to.
   * @param {DateTime|Date|Object} end
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  static before(t, n) {
    const i = X.fromDurationLike(n), s = pn(t);
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
      let r, a;
      try {
        r = U.fromISO(i, n), a = r.isValid;
      } catch {
        a = !1;
      }
      let l, u;
      try {
        l = U.fromISO(s, n), u = l.isValid;
      } catch {
        u = !1;
      }
      if (a && u)
        return he.fromDateTimes(r, l);
      if (a) {
        const c = X.fromISO(s, n);
        if (c.isValid)
          return he.after(r, c);
      } else if (u) {
        const c = X.fromISO(i, n);
        if (c.isValid)
          return he.before(l, c);
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
    const n = t.map(pn).filter((a) => this.contains(a)).sort(), i = [];
    let { s } = this, r = 0;
    for (; s < this.e; ) {
      const a = n[r] || this.e, l = +a > +this.e ? this.e : a;
      i.push(he.fromDateTimes(s, l)), s = l, r += 1;
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
    const a = [];
    for (; i < this.e; ) {
      const l = this.start.plus(n.mapUnits((u) => u * s));
      r = +l > +this.e ? this.e : l, a.push(he.fromDateTimes(i, r)), i = r, s += 1;
    }
    return a;
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
      ([s, r], a) => r ? r.overlaps(a) || r.abutsStart(a) ? [s, r.union(a)] : [s.concat([r]), a] : [s, a],
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
    ]), a = Array.prototype.concat(...r), l = a.sort((u, c) => u.time - c.time);
    for (const u of l)
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
    return this.isValid ? `[${this.s.toISO()} – ${this.e.toISO()})` : fn;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Interval.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime#toISO}
   * @return {string}
   */
  toISO(t) {
    return this.isValid ? `${this.s.toISO(t)}/${this.e.toISO(t)}` : fn;
  }
  /**
   * Returns an ISO 8601-compliant string representation of date of this Interval.
   * The time components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {string}
   */
  toISODate() {
    return this.isValid ? `${this.s.toISODate()}/${this.e.toISODate()}` : fn;
  }
  /**
   * Returns an ISO 8601-compliant string representation of time of this Interval.
   * The date components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime#toISO}
   * @return {string}
   */
  toISOTime(t) {
    return this.isValid ? `${this.s.toISOTime(t)}/${this.e.toISOTime(t)}` : fn;
  }
  /**
   * Returns a string representation of this Interval formatted according to the specified format string.
   * @param {string} dateFormat - the format string. This string formats the start and end time. See {@link DateTime#toFormat} for details.
   * @param {Object} opts - options
   * @param {string} [opts.separator =  ' – '] - a separator to place between the start and end representations
   * @return {string}
   */
  toFormat(t, { separator: n = " – " } = {}) {
    return this.isValid ? `${this.s.toFormat(t)}${n}${this.e.toFormat(t)}` : fn;
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
let qn = class {
  /**
   * Return whether the specified zone contains a DST.
   * @param {string|Zone} [zone='local'] - Zone to check. Defaults to the environment's local zone.
   * @return {boolean}
   */
  static hasDST(t = ve.defaultZone) {
    const n = U.now().setZone(t).set({ month: 12 });
    return !t.isUniversal && n.offset !== n.set({ month: 6 }).offset;
  }
  /**
   * Return whether the specified zone is a valid IANA specifier.
   * @param {string} zone - Zone to check
   * @return {boolean}
   */
  static isValidIANAZone(t) {
    return ct.isValidZone(t);
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
    return bt(t, ve.defaultZone);
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
    return { relative: Na() };
  }
};
function as(e, t) {
  const n = (s) => s.toUTC(0, { keepLocalTime: !0 }).startOf("day").valueOf(), i = n(t) - n(e);
  return Math.floor(X.fromMillis(i).as("days"));
}
function fd(e, t, n) {
  const i = [
    ["years", (l, u) => u.year - l.year],
    ["quarters", (l, u) => u.quarter - l.quarter],
    ["months", (l, u) => u.month - l.month + (u.year - l.year) * 12],
    [
      "weeks",
      (l, u) => {
        const c = as(l, u);
        return (c - c % 7) / 7;
      }
    ],
    ["days", as]
  ], s = {};
  let r, a;
  for (const [l, u] of i)
    if (n.indexOf(l) >= 0) {
      r = l;
      let c = u(e, t);
      a = e.plus({ [l]: c }), a > t ? (e = e.plus({ [l]: c - 1 }), c -= 1) : e = a, s[l] = c;
    }
  return [e, s, a, r];
}
function md(e, t, n, i) {
  let [s, r, a, l] = fd(e, t, n);
  const u = t - s, c = n.filter(
    (p) => ["hours", "minutes", "seconds", "milliseconds"].indexOf(p) >= 0
  );
  c.length === 0 && (a < t && (a = s.plus({ [l]: 1 })), a !== s && (r[l] = (r[l] || 0) + u / (a - s)));
  const f = X.fromObject(r, i);
  return c.length > 0 ? X.fromMillis(u, i).shiftTo(...c).plus(f) : f;
}
const Di = {
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
}, ls = {
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
}, hd = Di.hanidec.replace(/[\[|\]]/g, "").split("");
function pd(e) {
  let t = parseInt(e, 10);
  if (isNaN(t)) {
    t = "";
    for (let n = 0; n < e.length; n++) {
      const i = e.charCodeAt(n);
      if (e[n].search(Di.hanidec) !== -1)
        t += hd.indexOf(e[n]);
      else
        for (const s in ls) {
          const [r, a] = ls[s];
          i >= r && i <= a && (t += i - r);
        }
    }
    return parseInt(t, 10);
  } else
    return t;
}
function Ke({ numberingSystem: e }, t = "") {
  return new RegExp(`${Di[e || "latn"]}${t}`);
}
const yd = "missing Intl.DateTimeFormat.formatToParts support";
function ee(e, t = (n) => n) {
  return { regex: e, deser: ([n]) => t(pd(n)) };
}
const _d = String.fromCharCode(160), el = `( |${_d})`, tl = new RegExp(el, "g");
function gd(e) {
  return e.replace(/\./g, "\\.?").replace(tl, el);
}
function os(e) {
  return e.replace(/\./g, "").replace(tl, " ").toLowerCase();
}
function Ye(e, t) {
  return e === null ? null : {
    regex: RegExp(e.map(gd).join("|")),
    deser: ([n]) => e.findIndex((i) => os(n) === os(i)) + t
  };
}
function us(e, t) {
  return { regex: e, deser: ([, n, i]) => Or(n, i), groups: t };
}
function Pr(e) {
  return { regex: e, deser: ([t]) => t };
}
function vd(e) {
  return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}
function bd(e, t) {
  const n = Ke(t), i = Ke(t, "{2}"), s = Ke(t, "{3}"), r = Ke(t, "{4}"), a = Ke(t, "{6}"), l = Ke(t, "{1,2}"), u = Ke(t, "{1,3}"), c = Ke(t, "{1,6}"), f = Ke(t, "{1,9}"), p = Ke(t, "{2,4}"), g = Ke(t, "{4,6}"), v = (A) => ({ regex: RegExp(vd(A.val)), deser: ([G]) => G, literal: !0 }), T = ((A) => {
    if (e.literal)
      return v(A);
    switch (A.val) {
      case "G":
        return Ye(t.eras("short", !1), 0);
      case "GG":
        return Ye(t.eras("long", !1), 0);
      case "y":
        return ee(c);
      case "yy":
        return ee(p, fi);
      case "yyyy":
        return ee(r);
      case "yyyyy":
        return ee(g);
      case "yyyyyy":
        return ee(a);
      case "M":
        return ee(l);
      case "MM":
        return ee(i);
      case "MMM":
        return Ye(t.months("short", !0, !1), 1);
      case "MMMM":
        return Ye(t.months("long", !0, !1), 1);
      case "L":
        return ee(l);
      case "LL":
        return ee(i);
      case "LLL":
        return Ye(t.months("short", !1, !1), 1);
      case "LLLL":
        return Ye(t.months("long", !1, !1), 1);
      case "d":
        return ee(l);
      case "dd":
        return ee(i);
      case "o":
        return ee(u);
      case "ooo":
        return ee(s);
      case "HH":
        return ee(i);
      case "H":
        return ee(l);
      case "hh":
        return ee(i);
      case "h":
        return ee(l);
      case "mm":
        return ee(i);
      case "m":
        return ee(l);
      case "q":
        return ee(l);
      case "qq":
        return ee(i);
      case "s":
        return ee(l);
      case "ss":
        return ee(i);
      case "S":
        return ee(u);
      case "SSS":
        return ee(s);
      case "u":
        return Pr(f);
      case "uu":
        return Pr(l);
      case "uuu":
        return ee(n);
      case "a":
        return Ye(t.meridiems(), 0);
      case "kkkk":
        return ee(r);
      case "kk":
        return ee(p, fi);
      case "W":
        return ee(l);
      case "WW":
        return ee(i);
      case "E":
      case "c":
        return ee(n);
      case "EEE":
        return Ye(t.weekdays("short", !1, !1), 1);
      case "EEEE":
        return Ye(t.weekdays("long", !1, !1), 1);
      case "ccc":
        return Ye(t.weekdays("short", !0, !1), 1);
      case "cccc":
        return Ye(t.weekdays("long", !0, !1), 1);
      case "Z":
      case "ZZ":
        return us(new RegExp(`([+-]${l.source})(?::(${i.source}))?`), 2);
      case "ZZZ":
        return us(new RegExp(`([+-]${l.source})(${i.source})?`), 2);
      case "z":
        return Pr(/[a-z_+-/]{1,256}?/i);
      default:
        return v(A);
    }
  })(e) || {
    invalidReason: yd
  };
  return T.token = e, T;
}
const kd = {
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
function xd(e, t, n) {
  const { type: i, value: s } = e;
  if (i === "literal")
    return {
      literal: !0,
      val: s
    };
  const r = n[i];
  let a = kd[i];
  if (typeof a == "object" && (a = a[r]), a)
    return {
      literal: !1,
      val: a
    };
}
function wd(e) {
  return [`^${e.map((n) => n.regex).reduce((n, i) => `${n}(${i.source})`, "")}$`, e];
}
function Sd(e, t, n) {
  const i = e.match(t);
  if (i) {
    const s = {};
    let r = 1;
    for (const a in n)
      if (Xt(n, a)) {
        const l = n[a], u = l.groups ? l.groups + 1 : 1;
        !l.literal && l.token && (s[l.token.val[0]] = l.deser(i.slice(r, r + u))), r += u;
      }
    return [i, s];
  } else
    return [i, {}];
}
function Od(e) {
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
  return Z(e.z) || (n = ct.create(e.z)), Z(e.Z) || (n || (n = new Fe(e.Z)), i = e.Z), Z(e.q) || (e.M = (e.q - 1) * 3 + 1), Z(e.h) || (e.h < 12 && e.a === 1 ? e.h += 12 : e.h === 12 && e.a === 0 && (e.h = 0)), e.G === 0 && e.y && (e.y = -e.y), Z(e.u) || (e.S = Ei(e.u)), [Object.keys(e).reduce((r, a) => {
    const l = t(a);
    return l && (r[l] = e[a]), r;
  }, {}), n, i];
}
let Ur = null;
function Td() {
  return Ur || (Ur = U.fromMillis(1555555555555)), Ur;
}
function Ed(e, t) {
  if (e.literal)
    return e;
  const n = Pe.macroTokenToFormatOpts(e.val);
  if (!n)
    return e;
  const r = Pe.create(t, n).formatDateTimeParts(Td()).map((a) => xd(a, t, n));
  return r.includes(void 0) ? e : r;
}
function Vd(e, t) {
  return Array.prototype.concat(...e.map((n) => Ed(n, t)));
}
function nl(e, t, n) {
  const i = Vd(Pe.parseFormat(n), e), s = i.map((a) => bd(a, e)), r = s.find((a) => a.invalidReason);
  if (r)
    return { input: t, tokens: i, invalidReason: r.invalidReason };
  {
    const [a, l] = wd(s), u = RegExp(a, "i"), [c, f] = Sd(t, u, l), [p, g, v] = f ? Od(f) : [null, null, void 0];
    if (Xt(f, "a") && Xt(f, "H"))
      throw new vn(
        "Can't include meridiem when specifying 24-hour format"
      );
    return { input: t, tokens: i, regex: u, rawMatches: c, matches: f, result: p, zone: g, specificOffset: v };
  }
}
function Cd(e, t, n) {
  const { result: i, zone: s, specificOffset: r, invalidReason: a } = nl(e, t, n);
  return [i, s, r, a];
}
const rl = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], il = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
function Ge(e, t) {
  return new Xe(
    "unit out of range",
    `you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`
  );
}
function sl(e, t, n) {
  const i = new Date(Date.UTC(e, t - 1, n));
  e < 100 && e >= 0 && i.setUTCFullYear(i.getUTCFullYear() - 1900);
  const s = i.getUTCDay();
  return s === 0 ? 7 : s;
}
function al(e, t, n) {
  return n + (An(e) ? il : rl)[t - 1];
}
function ll(e, t) {
  const n = An(e) ? il : rl, i = n.findIndex((r) => r < t), s = t - n[i];
  return { month: i + 1, day: s };
}
function _i(e) {
  const { year: t, month: n, day: i } = e, s = al(t, n, i), r = sl(t, n, i);
  let a = Math.floor((s - r + 10) / 7), l;
  return a < 1 ? (l = t - 1, a = ur(l)) : a > ur(t) ? (l = t + 1, a = 1) : l = t, { weekYear: l, weekNumber: a, weekday: r, ...Tr(e) };
}
function ds(e) {
  const { weekYear: t, weekNumber: n, weekday: i } = e, s = sl(t, 1, 4), r = Sn(t);
  let a = n * 7 + i - s - 3, l;
  a < 1 ? (l = t - 1, a += Sn(l)) : a > r ? (l = t + 1, a -= Sn(t)) : l = t;
  const { month: u, day: c } = ll(l, a);
  return { year: l, month: u, day: c, ...Tr(e) };
}
function jr(e) {
  const { year: t, month: n, day: i } = e, s = al(t, n, i);
  return { year: t, ordinal: s, ...Tr(e) };
}
function cs(e) {
  const { year: t, ordinal: n } = e, { month: i, day: s } = ll(t, n);
  return { year: t, month: i, day: s, ...Tr(e) };
}
function Ad(e) {
  const t = Sr(e.weekYear), n = ut(e.weekNumber, 1, ur(e.weekYear)), i = ut(e.weekday, 1, 7);
  return t ? n ? i ? !1 : Ge("weekday", e.weekday) : Ge("week", e.week) : Ge("weekYear", e.weekYear);
}
function Md(e) {
  const t = Sr(e.year), n = ut(e.ordinal, 1, Sn(e.year));
  return t ? n ? !1 : Ge("ordinal", e.ordinal) : Ge("year", e.year);
}
function ol(e) {
  const t = Sr(e.year), n = ut(e.month, 1, 12), i = ut(e.day, 1, or(e.year, e.month));
  return t ? n ? i ? !1 : Ge("day", e.day) : Ge("month", e.month) : Ge("year", e.year);
}
function ul(e) {
  const { hour: t, minute: n, second: i, millisecond: s } = e, r = ut(t, 0, 23) || t === 24 && n === 0 && i === 0 && s === 0, a = ut(n, 0, 59), l = ut(i, 0, 59), u = ut(s, 0, 999);
  return r ? a ? l ? u ? !1 : Ge("millisecond", s) : Ge("second", i) : Ge("minute", n) : Ge("hour", t);
}
const Rr = "Invalid DateTime", fs = 864e13;
function Gn(e) {
  return new Xe("unsupported zone", `the zone "${e.name}" is not supported`);
}
function Br(e) {
  return e.weekData === null && (e.weekData = _i(e.c)), e.weekData;
}
function mn(e, t) {
  const n = {
    ts: e.ts,
    zone: e.zone,
    c: e.c,
    o: e.o,
    loc: e.loc,
    invalid: e.invalid
  };
  return new U({ ...n, ...t, old: n });
}
function dl(e, t, n) {
  let i = e - t * 60 * 1e3;
  const s = n.offset(i);
  if (t === s)
    return [i, t];
  i -= (s - t) * 60 * 1e3;
  const r = n.offset(i);
  return s === r ? [i, s] : [e - Math.min(s, r) * 60 * 1e3, Math.max(s, r)];
}
function ms(e, t) {
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
function nr(e, t, n) {
  return dl(Ci(e), t, n);
}
function hs(e, t) {
  const n = e.o, i = e.c.year + Math.trunc(t.years), s = e.c.month + Math.trunc(t.months) + Math.trunc(t.quarters) * 3, r = {
    ...e.c,
    year: i,
    month: s,
    day: Math.min(e.c.day, or(i, s)) + Math.trunc(t.days) + Math.trunc(t.weeks) * 7
  }, a = X.fromObject({
    years: t.years - Math.trunc(t.years),
    quarters: t.quarters - Math.trunc(t.quarters),
    months: t.months - Math.trunc(t.months),
    weeks: t.weeks - Math.trunc(t.weeks),
    days: t.days - Math.trunc(t.days),
    hours: t.hours,
    minutes: t.minutes,
    seconds: t.seconds,
    milliseconds: t.milliseconds
  }).as("milliseconds"), l = Ci(r);
  let [u, c] = dl(l, n, e.zone);
  return a !== 0 && (u += a, c = e.zone.offset(u)), { ts: u, o: c };
}
function hn(e, t, n, i, s, r) {
  const { setZone: a, zone: l } = n;
  if (e && Object.keys(e).length !== 0) {
    const u = t || l, c = U.fromObject(e, {
      ...n,
      zone: u,
      specificOffset: r
    });
    return a ? c : c.setZone(l);
  } else
    return U.invalid(
      new Xe("unparsable", `the input "${s}" can't be parsed as ${i}`)
    );
}
function Wn(e, t, n = !0) {
  return e.isValid ? Pe.create(ce.create("en-US"), {
    allowZ: n,
    forceSimple: !0
  }).formatDateTimeFromString(e, t) : null;
}
function zr(e, t) {
  const n = e.c.year > 9999 || e.c.year < 0;
  let i = "";
  return n && e.c.year >= 0 && (i += "+"), i += _e(e.c.year, n ? 6 : 4), t ? (i += "-", i += _e(e.c.month), i += "-", i += _e(e.c.day)) : (i += _e(e.c.month), i += _e(e.c.day)), i;
}
function ps(e, t, n, i, s) {
  let r = _e(e.c.hour);
  return t ? (r += ":", r += _e(e.c.minute), (e.c.second !== 0 || !n) && (r += ":")) : r += _e(e.c.minute), (e.c.second !== 0 || !n) && (r += _e(e.c.second), (e.c.millisecond !== 0 || !i) && (r += ".", r += _e(e.c.millisecond, 3))), s && (e.isOffsetFixed && e.offset === 0 ? r += "Z" : e.o < 0 ? (r += "-", r += _e(Math.trunc(-e.o / 60)), r += ":", r += _e(Math.trunc(-e.o % 60))) : (r += "+", r += _e(Math.trunc(e.o / 60)), r += ":", r += _e(Math.trunc(e.o % 60)))), r;
}
const cl = {
  month: 1,
  day: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, Id = {
  weekNumber: 1,
  weekday: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, Fd = {
  ordinal: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, fl = ["year", "month", "day", "hour", "minute", "second", "millisecond"], Dd = [
  "weekYear",
  "weekNumber",
  "weekday",
  "hour",
  "minute",
  "second",
  "millisecond"
], $d = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
function ys(e) {
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
    throw new ya(e);
  return t;
}
function _s(e, t) {
  const n = bt(t.zone, ve.defaultZone), i = ce.fromObject(t), s = ve.now();
  let r, a;
  if (Z(e.year))
    r = s;
  else {
    for (const c of fl)
      Z(e[c]) && (e[c] = cl[c]);
    const l = ol(e) || ul(e);
    if (l)
      return U.invalid(l);
    const u = n.offset(s);
    [r, a] = nr(e, u, n);
  }
  return new U({ ts: r, zone: n, loc: i, o: a });
}
function gs(e, t, n) {
  const i = Z(n.round) ? !0 : n.round, s = (a, l) => (a = Vi(a, i || n.calendary ? 0 : 2, !0), t.loc.clone(n).relFormatter(n).format(a, l)), r = (a) => n.calendary ? t.hasSame(e, a) ? 0 : t.startOf(a).diff(e.startOf(a), a).get(a) : t.diff(e, a).get(a);
  if (n.unit)
    return s(r(n.unit), n.unit);
  for (const a of n.units) {
    const l = r(a);
    if (Math.abs(l) >= 1)
      return s(l, a);
  }
  return s(e > t ? -0 : 0, n.units[n.units.length - 1]);
}
function vs(e) {
  let t = {}, n;
  return e.length > 0 && typeof e[e.length - 1] == "object" ? (t = e[e.length - 1], n = Array.from(e).slice(0, e.length - 1)) : n = Array.from(e), [t, n];
}
class U {
  /**
   * @access private
   */
  constructor(t) {
    const n = t.zone || ve.defaultZone;
    let i = t.invalid || (Number.isNaN(t.ts) ? new Xe("invalid input") : null) || (n.isValid ? null : Gn(n));
    this.ts = Z(t.ts) ? ve.now() : t.ts;
    let s = null, r = null;
    if (!i)
      if (t.old && t.old.ts === this.ts && t.old.zone.equals(n))
        [s, r] = [t.old.c, t.old.o];
      else {
        const l = n.offset(this.ts);
        s = ms(this.ts, l), i = Number.isNaN(s.year) ? new Xe("invalid input") : null, s = i ? null : s, r = i ? null : l;
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
    return new U({});
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
    const [t, n] = vs(arguments), [i, s, r, a, l, u, c] = n;
    return _s({ year: i, month: s, day: r, hour: a, minute: l, second: u, millisecond: c }, t);
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
    const [t, n] = vs(arguments), [i, s, r, a, l, u, c] = n;
    return t.zone = Fe.utcInstance, _s({ year: i, month: s, day: r, hour: a, minute: l, second: u, millisecond: c }, t);
  }
  /**
   * Create a DateTime from a JavaScript Date object. Uses the default zone.
   * @param {Date} date - a JavaScript Date object
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @return {DateTime}
   */
  static fromJSDate(t, n = {}) {
    const i = Bo(t) ? t.valueOf() : NaN;
    if (Number.isNaN(i))
      return U.invalid("invalid input");
    const s = bt(n.zone, ve.defaultZone);
    return s.isValid ? new U({
      ts: i,
      zone: s,
      loc: ce.fromObject(n)
    }) : U.invalid(Gn(s));
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
    if (Dt(t))
      return t < -fs || t > fs ? U.invalid("Timestamp out of range") : new U({
        ts: t,
        zone: bt(n.zone, ve.defaultZone),
        loc: ce.fromObject(n)
      });
    throw new qe(
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
    if (Dt(t))
      return new U({
        ts: t * 1e3,
        zone: bt(n.zone, ve.defaultZone),
        loc: ce.fromObject(n)
      });
    throw new qe("fromSeconds requires a numerical input");
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
    const i = bt(n.zone, ve.defaultZone);
    if (!i.isValid)
      return U.invalid(Gn(i));
    const s = ve.now(), r = Z(n.specificOffset) ? i.offset(s) : n.specificOffset, a = dr(t, ys), l = !Z(a.ordinal), u = !Z(a.year), c = !Z(a.month) || !Z(a.day), f = u || c, p = a.weekYear || a.weekNumber, g = ce.fromObject(n);
    if ((f || l) && p)
      throw new vn(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (c && l)
      throw new vn("Can't mix ordinal dates with month/day");
    const v = p || a.weekday && !f;
    let x, T, A = ms(s, r);
    v ? (x = Dd, T = Id, A = _i(A)) : l ? (x = $d, T = Fd, A = jr(A)) : (x = fl, T = cl);
    let G = !1;
    for (const se of x) {
      const z = a[se];
      Z(z) ? G ? a[se] = T[se] : a[se] = A[se] : G = !0;
    }
    const Q = v ? Ad(a) : l ? Md(a) : ol(a), re = Q || ul(a);
    if (re)
      return U.invalid(re);
    const le = v ? ds(a) : l ? cs(a) : a, [oe, B] = nr(le, r, i), D = new U({
      ts: oe,
      zone: i,
      o: B,
      loc: g
    });
    return a.weekday && f && t.weekday !== D.weekday ? U.invalid(
      "mismatched weekday",
      `you can't specify both a weekday of ${a.weekday} and a date of ${D.toISO()}`
    ) : D;
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
    const [i, s] = Ku(t);
    return hn(i, s, n, "ISO 8601", t);
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
    const [i, s] = Yu(t);
    return hn(i, s, n, "RFC 2822", t);
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
    const [i, s] = Zu(t);
    return hn(i, s, n, "HTTP", n);
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
    if (Z(t) || Z(n))
      throw new qe("fromFormat requires an input string and a format");
    const { locale: s = null, numberingSystem: r = null } = i, a = ce.fromOpts({
      locale: s,
      numberingSystem: r,
      defaultToEN: !0
    }), [l, u, c, f] = Cd(a, t, n);
    return f ? U.invalid(f) : hn(l, u, i, `format ${n}`, t, c);
  }
  /**
   * @deprecated use fromFormat instead
   */
  static fromString(t, n, i = {}) {
    return U.fromFormat(t, n, i);
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
    const [i, s] = id(t);
    return hn(i, s, n, "SQL", t);
  }
  /**
   * Create an invalid DateTime.
   * @param {string} reason - simple string of why this DateTime is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {DateTime}
   */
  static invalid(t, n = null) {
    if (!t)
      throw new qe("need to specify a reason the DateTime is invalid");
    const i = t instanceof Xe ? t : new Xe(t, n);
    if (ve.throwOnInvalid)
      throw new No(i);
    return new U({ invalid: i });
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
    return this.isValid ? Br(this).weekYear : NaN;
  }
  /**
   * Get the week number of the week year (1-52ish).
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2017, 5, 25).weekNumber //=> 21
   * @type {number}
   */
  get weekNumber() {
    return this.isValid ? Br(this).weekNumber : NaN;
  }
  /**
   * Get the day of the week.
   * 1 is Monday and 7 is Sunday
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2014, 11, 31).weekday //=> 4
   * @type {number}
   */
  get weekday() {
    return this.isValid ? Br(this).weekday : NaN;
  }
  /**
   * Get the ordinal (meaning the day of the year)
   * @example DateTime.local(2017, 5, 25).ordinal //=> 145
   * @type {number|DateTime}
   */
  get ordinal() {
    return this.isValid ? jr(this.c).ordinal : NaN;
  }
  /**
   * Get the human readable short month name, such as 'Oct'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).monthShort //=> Oct
   * @type {string}
   */
  get monthShort() {
    return this.isValid ? qn.months("short", { locObj: this.loc })[this.month - 1] : null;
  }
  /**
   * Get the human readable long month name, such as 'October'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).monthLong //=> October
   * @type {string}
   */
  get monthLong() {
    return this.isValid ? qn.months("long", { locObj: this.loc })[this.month - 1] : null;
  }
  /**
   * Get the human readable short weekday, such as 'Mon'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).weekdayShort //=> Mon
   * @type {string}
   */
  get weekdayShort() {
    return this.isValid ? qn.weekdays("short", { locObj: this.loc })[this.weekday - 1] : null;
  }
  /**
   * Get the human readable long weekday, such as 'Monday'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).weekdayLong //=> Monday
   * @type {string}
   */
  get weekdayLong() {
    return this.isValid ? qn.weekdays("long", { locObj: this.loc })[this.weekday - 1] : null;
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
    return An(this.year);
  }
  /**
   * Returns the number of days in this DateTime's month
   * @example DateTime.local(2016, 2).daysInMonth //=> 29
   * @example DateTime.local(2016, 3).daysInMonth //=> 31
   * @type {number}
   */
  get daysInMonth() {
    return or(this.year, this.month);
  }
  /**
   * Returns the number of days in this DateTime's year
   * @example DateTime.local(2016).daysInYear //=> 366
   * @example DateTime.local(2013).daysInYear //=> 365
   * @type {number}
   */
  get daysInYear() {
    return this.isValid ? Sn(this.year) : NaN;
  }
  /**
   * Returns the number of weeks in this DateTime's year
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2004).weeksInWeekYear //=> 53
   * @example DateTime.local(2013).weeksInWeekYear //=> 52
   * @type {number}
   */
  get weeksInWeekYear() {
    return this.isValid ? ur(this.weekYear) : NaN;
  }
  /**
   * Returns the resolved Intl options for this DateTime.
   * This is useful in understanding the behavior of formatting methods
   * @param {Object} opts - the same options as toLocaleString
   * @return {Object}
   */
  resolvedLocaleOptions(t = {}) {
    const { locale: n, numberingSystem: i, calendar: s } = Pe.create(
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
    return this.setZone(Fe.instance(t), n);
  }
  /**
   * "Set" the DateTime's zone to the host's local zone. Returns a newly-constructed DateTime.
   *
   * Equivalent to `setZone('local')`
   * @return {DateTime}
   */
  toLocal() {
    return this.setZone(ve.defaultZone);
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
    if (t = bt(t, ve.defaultZone), t.equals(this.zone))
      return this;
    if (t.isValid) {
      let s = this.ts;
      if (n || i) {
        const r = t.offset(this.ts), a = this.toObject();
        [s] = nr(a, r, t);
      }
      return mn(this, { ts: s, zone: t });
    } else
      return U.invalid(Gn(t));
  }
  /**
   * "Set" the locale, numberingSystem, or outputCalendar. Returns a newly-constructed DateTime.
   * @param {Object} properties - the properties to set
   * @example DateTime.local(2017, 5, 25).reconfigure({ locale: 'en-GB' })
   * @return {DateTime}
   */
  reconfigure({ locale: t, numberingSystem: n, outputCalendar: i } = {}) {
    const s = this.loc.clone({ locale: t, numberingSystem: n, outputCalendar: i });
    return mn(this, { loc: s });
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
    const n = dr(t, ys), i = !Z(n.weekYear) || !Z(n.weekNumber) || !Z(n.weekday), s = !Z(n.ordinal), r = !Z(n.year), a = !Z(n.month) || !Z(n.day), l = r || a, u = n.weekYear || n.weekNumber;
    if ((l || s) && u)
      throw new vn(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (a && s)
      throw new vn("Can't mix ordinal dates with month/day");
    let c;
    i ? c = ds({ ..._i(this.c), ...n }) : Z(n.ordinal) ? (c = { ...this.toObject(), ...n }, Z(n.day) && (c.day = Math.min(or(c.year, c.month), c.day))) : c = cs({ ...jr(this.c), ...n });
    const [f, p] = nr(c, this.o, this.zone);
    return mn(this, { ts: f, o: p });
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
    return mn(this, hs(this, n));
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
    return mn(this, hs(this, n));
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
    return this.isValid ? Pe.create(this.loc.redefaultToEN(n)).formatDateTimeFromString(this, t) : Rr;
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
  toLocaleString(t = ci, n = {}) {
    return this.isValid ? Pe.create(this.loc.clone(n), t).formatDateTime(this) : Rr;
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
    return this.isValid ? Pe.create(this.loc.clone(t), t).formatDateTimeParts(this) : [];
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
    let a = zr(this, r);
    return a += "T", a += ps(this, r, n, i, s), a;
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
    return this.isValid ? zr(this, t === "extended") : null;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's week date
   * @example DateTime.utc(1982, 5, 25).toISOWeekDate() //=> '1982-W21-2'
   * @return {string}
   */
  toISOWeekDate() {
    return Wn(this, "kkkk-'W'WW-c");
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
    return this.isValid ? (s ? "T" : "") + ps(this, r === "extended", n, t, i) : null;
  }
  /**
   * Returns an RFC 2822-compatible string representation of this DateTime
   * @example DateTime.utc(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 +0000'
   * @example DateTime.local(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 -0400'
   * @return {string}
   */
  toRFC2822() {
    return Wn(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", !1);
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
    return Wn(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Date
   * @example DateTime.utc(2014, 7, 13).toSQLDate() //=> '2014-07-13'
   * @return {string}
   */
  toSQLDate() {
    return this.isValid ? zr(this, !0) : null;
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
    return (n || t) && (i && (s += " "), n ? s += "z" : t && (s += "ZZ")), Wn(this, s, !0);
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
    return this.isValid ? this.toISO() : Rr;
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
    const s = { locale: this.locale, numberingSystem: this.numberingSystem, ...i }, r = zo(n).map(X.normalizeUnit), a = t.valueOf() > this.valueOf(), l = a ? this : t, u = a ? t : this, c = md(l, u, r, s);
    return a ? c.negate() : c;
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
    return this.diff(U.now(), t, n);
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
    const n = t.base || U.fromObject({}, { zone: this.zone }), i = t.padding ? this < n ? -t.padding : t.padding : 0;
    let s = ["years", "months", "days", "hours", "minutes", "seconds"], r = t.unit;
    return Array.isArray(t.unit) && (s = t.unit, r = void 0), gs(n, this.plus(i), {
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
    return this.isValid ? gs(t.base || U.fromObject({}, { zone: this.zone }), this, {
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
    if (!t.every(U.isDateTime))
      throw new qe("min requires all arguments be DateTimes");
    return Zi(t, (n) => n.valueOf(), Math.min);
  }
  /**
   * Return the max of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the maximum
   * @return {DateTime} the max DateTime, or undefined if called with no argument
   */
  static max(...t) {
    if (!t.every(U.isDateTime))
      throw new qe("max requires all arguments be DateTimes");
    return Zi(t, (n) => n.valueOf(), Math.max);
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
    const { locale: s = null, numberingSystem: r = null } = i, a = ce.fromOpts({
      locale: s,
      numberingSystem: r,
      defaultToEN: !0
    });
    return nl(a, t, n);
  }
  /**
   * @deprecated use fromFormatExplain instead
   */
  static fromStringExplain(t, n, i = {}) {
    return U.fromFormatExplain(t, n, i);
  }
  // FORMAT PRESETS
  /**
   * {@link DateTime#toLocaleString} format like 10/14/1983
   * @type {Object}
   */
  static get DATE_SHORT() {
    return ci;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983'
   * @type {Object}
   */
  static get DATE_MED() {
    return _a;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Fri, Oct 14, 1983'
   * @type {Object}
   */
  static get DATE_MED_WITH_WEEKDAY() {
    return Uo;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983'
   * @type {Object}
   */
  static get DATE_FULL() {
    return ga;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Tuesday, October 14, 1983'
   * @type {Object}
   */
  static get DATE_HUGE() {
    return va;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_SIMPLE() {
    return ba;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_SECONDS() {
    return ka;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_SHORT_OFFSET() {
    return xa;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_LONG_OFFSET() {
    return wa;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_SIMPLE() {
    return Sa;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_SECONDS() {
    return Oa;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 EDT', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_SHORT_OFFSET() {
    return Ta;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 Eastern Daylight Time', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_LONG_OFFSET() {
    return Ea;
  }
  /**
   * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_SHORT() {
    return Va;
  }
  /**
   * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_SHORT_WITH_SECONDS() {
    return Ca;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED() {
    return Aa;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30:33 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED_WITH_SECONDS() {
    return Ma;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Fri, 14 Oct 1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED_WITH_WEEKDAY() {
    return jo;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_FULL() {
    return Ia;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30:33 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_FULL_WITH_SECONDS() {
    return Fa;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_HUGE() {
    return Da;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30:33 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_HUGE_WITH_SECONDS() {
    return $a;
  }
}
function pn(e) {
  if (U.isDateTime(e))
    return e;
  if (e && e.valueOf && Dt(e.valueOf()))
    return U.fromJSDate(e);
  if (e && typeof e == "object")
    return U.fromObject(e);
  throw new qe(
    `Unknown datetime argument: ${e}, of type ${typeof e}`
  );
}
const Je = {};
Je.readableDateRange = function(e, t) {
  if (!e)
    return;
  if (!t)
    return Je.readableDate(e);
  e = U.fromJSDate(new Date(e)), t = U.fromJSDate(new Date(t));
  const n = e.toFormat("yyyy"), i = e.toFormat("LLL yyyy"), s = e.toFormat("WW yyyy"), r = e.toFormat("d LLL yyyy"), a = t.toFormat("yyyy"), l = t.toFormat("LLL yyyy"), u = t.toFormat("WW yyyy"), c = t.toFormat("d LLL yyyy");
  return r === c ? `${e.toFormat("h:mma")} - ${Je.readableDate(t)}` : s === u ? `${Je.readableDate(e)} - ${Je.readableDate(t)}` : i === l ? `${e.toFormat("d")} - ${t.toFormat("d LLL")}` : n === a ? `${Je.readableDate(e)} - ${Je.readableDate(t)}` : `${Je.readableDate(e)} - ${Je.readableDate(t)}`;
};
Je.readableDate = function(e) {
  if (!e)
    return;
  const t = new Date(), n = U.fromJSDate(t), i = n.toFormat("yyyy"), s = n.toFormat("LLL yyyy"), r = n.toFormat("WW yyyy"), a = n.toFormat("d LLL yyyy");
  e = new Date(e);
  const l = U.fromJSDate(e), u = l.toFormat("yyyy"), c = l.toFormat("LLL yyyy"), f = l.toFormat("WW yyyy");
  if (l.toFormat("d LLL yyyy") === a)
    return `${l.toFormat("h:mma")} today`;
  if (f === r)
    if (e > t) {
      const g = parseInt(n.toFormat("d"));
      return parseInt(l.toFormat("d")) - g === 1 ? `${l.toFormat("h:mma")} tomorrow` : `${l.toFormat("h:mma")} ${l.toFormat("cccc")}`;
    } else
      return `${l.toRelativeCalendar()}`;
  return c === s ? `${l.toFormat("h:mma")} ${l.toFormat("d LLL")}` : u === i ? l.toFormat("cccc d LLL") : l.toFormat("d LLL yyyy");
};
const fr = {
  STRIPE_NOT_LOADED: "Stripe v3 library is not loaded",
  INSTANCE_NOT_DEFINED: "Instance object is not defined. Make sure you initialized Stripe before creating elements",
  ELEMENTS_NOT_DEFINED: "Elements object is not defined. You can't create stripe element without it",
  ELEMENT_TYPE_NOT_DEFINED: "elementType is required. You can't create stripe element without it"
}, Nd = (e, t) => {
  try {
    if (!window.Stripe)
      throw new Error(fr.STRIPE_NOT_LOADED);
    return window.Stripe(e, t);
  } catch (n) {
    return console.error(n), n;
  }
}, Ld = (e, t) => {
  try {
    if (!e)
      throw new Error(fr.INSTANCE_NOT_DEFINED);
    return e.elements(t);
  } catch (n) {
    return console.error(n), n;
  }
}, Pd = (e, t, n) => {
  try {
    if (!e)
      throw new Error(fr.ELEMENTS_NOT_DEFINED);
    if (!t)
      throw new Error(fr.ELEMENT_TYPE_NOT_DEFINED);
    return e.create(t, n);
  } catch (i) {
    return console.error(i), i;
  }
};
var ml = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, s] of t)
    n[i] = s;
  return n;
};
const Ud = Si({
  name: "StripeElement",
  props: {
    elements: {
      type: Object,
      required: !0
    },
    type: {
      type: String,
      default: () => "card"
    },
    options: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e, { emit: t }) {
    const n = Yt(document.createElement("div")), i = Yt(), s = Yt(), { elements: r, type: a, options: l } = fa(e);
    return ma(() => {
      const u = () => {
        i.value = Pd(r.value, a.value, l.value), i.value.mount(n.value), s.value.appendChild(n.value);
      }, c = (p, g) => {
        t(p, g);
      }, f = () => {
        [
          "change",
          "ready",
          "focus",
          "blur",
          "click",
          "escape"
        ].forEach((g) => {
          i.value.on(g, c.bind(null, g));
        });
      };
      try {
        u(), f();
      } catch (p) {
        console.error(p);
      }
    }), Ao(() => {
      var u, c;
      (u = i.value) == null || u.unmount(), (c = i.value) == null || c.destroy();
    }), Oi(l, () => {
      var u;
      (u = i.value) == null || u.update(e.options);
    }), {
      stripeElement: i,
      domElement: n,
      mountPoint: s
    };
  }
}), jd = { ref: "mountPoint" };
function Rd(e, t, n, i, s, r) {
  return o(), d("div", jd, null, 512);
}
var Bd = /* @__PURE__ */ ml(Ud, [["render", Rd]]);
const zd = Si({
  name: "StripeElements",
  props: {
    stripeKey: {
      type: String,
      required: !0
    },
    instanceOptions: {
      type: Object,
      default: () => ({})
    },
    elementsOptions: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const { stripeKey: t, instanceOptions: n, elementsOptions: i } = fa(e), s = Yt(), r = Yt(), a = ui(() => r.value ? Object.keys(r.value).length > 0 : !1);
    return ma(() => {
      s.value = Nd(t.value, n.value), r.value = Ld(s.value, i.value);
    }), Oi(i, () => {
      var l;
      (l = r.value) == null || l.update(i.value);
    }), {
      elements: r,
      instance: s,
      elementsUsable: a
    };
  }
}), Hd = { key: 0 };
function qd(e, t, n, i, s, r) {
  return e.elementsUsable ? (o(), d("div", Hd, [
    q(e.$slots, "default", {
      instance: e.instance,
      elements: e.elements
    })
  ])) : _("", !0);
}
var Gd = /* @__PURE__ */ ml(zd, [["render", qd]]);
const E = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, s] of t)
    n[i] = s;
  return n;
}, Wd = {}, Kd = { class: "flex-column" };
function Yd(e, t, n, i, s, r) {
  return o(), d("div", Kd, [
    q(e.$slots, "default", {}, void 0, !0)
  ]);
}
const Zd = /* @__PURE__ */ E(Wd, [["render", Yd], ["__scopeId", "data-v-71e77c4f"]]);
const Jd = {}, Xd = { class: "flex-column-body" };
function Qd(e, t, n, i, s, r) {
  return o(), d("div", Xd, [
    q(e.$slots, "default", {}, void 0, !0)
  ]);
}
const ec = /* @__PURE__ */ E(Jd, [["render", Qd], ["__scopeId", "data-v-ab49c425"]]);
const tc = {}, nc = { class: "flex-column-header" };
function rc(e, t, n, i, s, r) {
  return o(), d("div", nc, [
    q(e.$slots, "default", {}, void 0, !0)
  ]);
}
const ic = /* @__PURE__ */ E(tc, [["render", rc], ["__scopeId", "data-v-968bcded"]]);
const sc = {}, ac = { class: "flex-column-footer" };
function lc(e, t, n, i, s, r) {
  return o(), d("div", ac, [
    q(e.$slots, "default", {}, void 0, !0)
  ]);
}
const oc = /* @__PURE__ */ E(sc, [["render", lc], ["__scopeId", "data-v-941966e2"]]);
const uc = {}, dc = { class: "flex-cell" };
function cc(e, t, n, i, s, r) {
  return o(), d("div", dc, [
    q(e.$slots, "default", {}, void 0, !0)
  ]);
}
const fc = /* @__PURE__ */ E(uc, [["render", cc], ["__scopeId", "data-v-ceefef08"]]);
const mc = {}, hc = { class: "flex-row" };
function pc(e, t, n, i, s, r) {
  return o(), d("div", hc, [
    q(e.$slots, "default", {}, void 0, !0)
  ]);
}
const yc = /* @__PURE__ */ E(mc, [["render", pc], ["__scopeId", "data-v-a4b9a8e0"]]);
const _c = {}, gc = { class: "flex-spacer" };
function vc(e, t, n, i, s, r) {
  return o(), d("div", gc);
}
const bc = /* @__PURE__ */ E(_c, [["render", vc], ["__scopeId", "data-v-f42ac625"]]);
const kc = {}, xc = { class: "panel" };
function wc(e, t, n, i, s, r) {
  return o(), d("div", xc, [
    q(e.$slots, "default", {}, void 0, !0)
  ]);
}
const Sc = /* @__PURE__ */ E(kc, [["render", wc], ["__scopeId", "data-v-d5c9d9ec"]]);
const Oc = {}, Tc = { class: "panel-body" };
function Ec(e, t, n, i, s, r) {
  return o(), d("div", Tc, [
    q(e.$slots, "default", {}, void 0, !0)
  ]);
}
const Vc = /* @__PURE__ */ E(Oc, [["render", Ec], ["__scopeId", "data-v-53a6d4be"]]);
const Cc = {}, Ac = { class: "panel-header" };
function Mc(e, t, n, i, s, r) {
  return o(), d("div", Ac, [
    q(e.$slots, "default", {}, void 0, !0)
  ]);
}
const Ic = /* @__PURE__ */ E(Cc, [["render", Mc], ["__scopeId", "data-v-12bf7f04"]]);
const Fc = {}, Dc = { class: "panel-footer" };
function $c(e, t, n, i, s, r) {
  return o(), d("div", Dc, [
    q(e.$slots, "default", {}, void 0, !0)
  ]);
}
const Nc = /* @__PURE__ */ E(Fc, [["render", $c], ["__scopeId", "data-v-d8937de9"]]);
var Kn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Lc(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Er = Lc, Pc = typeof Kn == "object" && Kn && Kn.Object === Object && Kn, hl = Pc, Uc = hl, jc = typeof self == "object" && self && self.Object === Object && self, Rc = Uc || jc || Function("return this")(), sn = Rc, Bc = sn, zc = function() {
  return Bc.Date.now();
}, Hc = zc, qc = /\s/;
function Gc(e) {
  for (var t = e.length; t-- && qc.test(e.charAt(t)); )
    ;
  return t;
}
var Wc = Gc, Kc = Wc, Yc = /^\s+/;
function Zc(e) {
  return e && e.slice(0, Kc(e) + 1).replace(Yc, "");
}
var Jc = Zc, Xc = sn, Qc = Xc.Symbol, $i = Qc, bs = $i, pl = Object.prototype, ef = pl.hasOwnProperty, tf = pl.toString, yn = bs ? bs.toStringTag : void 0;
function nf(e) {
  var t = ef.call(e, yn), n = e[yn];
  try {
    e[yn] = void 0;
    var i = !0;
  } catch {
  }
  var s = tf.call(e);
  return i && (t ? e[yn] = n : delete e[yn]), s;
}
var rf = nf, sf = Object.prototype, af = sf.toString;
function lf(e) {
  return af.call(e);
}
var of = lf, ks = $i, uf = rf, df = of, cf = "[object Null]", ff = "[object Undefined]", xs = ks ? ks.toStringTag : void 0;
function mf(e) {
  return e == null ? e === void 0 ? ff : cf : xs && xs in Object(e) ? uf(e) : df(e);
}
var In = mf;
function hf(e) {
  return e != null && typeof e == "object";
}
var Fn = hf, pf = In, yf = Fn, _f = "[object Symbol]";
function gf(e) {
  return typeof e == "symbol" || yf(e) && pf(e) == _f;
}
var Vr = gf, vf = Jc, ws = Er, bf = Vr, Ss = 0 / 0, kf = /^[-+]0x[0-9a-f]+$/i, xf = /^0b[01]+$/i, wf = /^0o[0-7]+$/i, Sf = parseInt;
function Of(e) {
  if (typeof e == "number")
    return e;
  if (bf(e))
    return Ss;
  if (ws(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = ws(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = vf(e);
  var n = xf.test(e);
  return n || wf.test(e) ? Sf(e.slice(2), n ? 2 : 8) : kf.test(e) ? Ss : +e;
}
var yl = Of, Tf = Er, Hr = Hc, Os = yl, Ef = "Expected a function", Vf = Math.max, Cf = Math.min;
function Af(e, t, n) {
  var i, s, r, a, l, u, c = 0, f = !1, p = !1, g = !0;
  if (typeof e != "function")
    throw new TypeError(Ef);
  t = Os(t) || 0, Tf(n) && (f = !!n.leading, p = "maxWait" in n, r = p ? Vf(Os(n.maxWait) || 0, t) : r, g = "trailing" in n ? !!n.trailing : g);
  function v(B) {
    var D = i, se = s;
    return i = s = void 0, c = B, a = e.apply(se, D), a;
  }
  function x(B) {
    return c = B, l = setTimeout(G, t), f ? v(B) : a;
  }
  function T(B) {
    var D = B - u, se = B - c, z = t - D;
    return p ? Cf(z, r - se) : z;
  }
  function A(B) {
    var D = B - u, se = B - c;
    return u === void 0 || D >= t || D < 0 || p && se >= r;
  }
  function G() {
    var B = Hr();
    if (A(B))
      return Q(B);
    l = setTimeout(G, T(B));
  }
  function Q(B) {
    return l = void 0, g && i ? v(B) : (i = s = void 0, a);
  }
  function re() {
    l !== void 0 && clearTimeout(l), c = 0, i = u = s = l = void 0;
  }
  function le() {
    return l === void 0 ? a : Q(Hr());
  }
  function oe() {
    var B = Hr(), D = A(B);
    if (i = arguments, s = this, u = B, D) {
      if (l === void 0)
        return x(u);
      if (p)
        return clearTimeout(l), l = setTimeout(G, t), v(u);
    }
    return l === void 0 && (l = setTimeout(G, t)), a;
  }
  return oe.cancel = re, oe.flush = le, oe;
}
var an = Af;
const Mf = ["onClick"], If = ["onClick"], Ff = {
  __name: "tabset",
  props: {
    vertical: Boolean,
    inline: Boolean
  },
  setup(e) {
    const t = Mo(), n = wr({
      tabs: []
    });
    $r("tabset", n);
    const i = Yt();
    $r("activeHeading", i);
    const s = function(u) {
      i.value = u;
    }, r = an(function() {
      const c = t.default().reduce(function(g, v) {
        var x;
        return ((x = v.type) == null ? void 0 : x.name) === "tab" ? g.push(v) : v.children && (g = [...g, ...v.children]), g;
      }, []).filter(function(g) {
        var v;
        return ((v = g.type) == null ? void 0 : v.name) === "tab" && g.props.enabled !== !1;
      }).map(function(g, v) {
        return {
          heading: g.props.heading,
          index: v
        };
      });
      n.tabs = c;
      const f = c.reduce(function(g, v) {
        return g[v.heading] = !0, g;
      }, {}), p = i.value;
      (!p || !f[p]) && c.length && (i.value = c[0].heading);
    });
    $r("rebuild", r);
    const a = ui(function() {
      return n.tabs.map(function(u) {
        if (u)
          return u.heading;
      }).filter(Boolean);
    }), l = ui(function() {
      return a.value.length > 1;
    });
    return r(), (u, c) => {
      const f = y("flex-body"), p = y("flex-column"), g = y("flex-row"), v = y("flex-header");
      return o(), d("div", {
        class: L(["ux-tabset", { vertical: e.vertical, horizontal: !e.vertical, inline: e.inline, block: !e.inline }])
      }, [
        e.vertical ? (o(), d(S, { key: 0 }, [
          Rn(l) ? (o(), k(p, {
            key: 0,
            class: "tabset-menu"
          }, {
            default: h(() => [
              m(f, null, {
                default: h(() => [
                  (o(!0), d(S, null, $(Rn(a), (x, T) => (o(), d("a", {
                    class: L({ active: i.value === x }),
                    key: `tab-link-${x}`,
                    onClick: (A) => s(x)
                  }, b(x), 11, Mf))), 128))
                ]),
                _: 1
              })
            ]),
            _: 1
          })) : _("", !0)
        ], 64)) : (o(), d(S, { key: 1 }, [
          Rn(l) ? (o(), k(v, {
            key: 0,
            class: "tabset-menu"
          }, {
            default: h(() => [
              m(g, null, {
                default: h(() => [
                  (o(!0), d(S, null, $(Rn(a), (x, T) => (o(), d("a", {
                    class: L({ active: i.value === x }),
                    key: `tab-link-${x}`,
                    onClick: (A) => s(x)
                  }, b(x), 11, If))), 128))
                ]),
                _: 1
              })
            ]),
            _: 1
          })) : _("", !0)
        ], 64)),
        m(p, null, {
          default: h(() => [
            q(u.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        })
      ], 2);
    };
  }
}, Df = /* @__PURE__ */ E(Ff, [["__scopeId", "data-v-1568a756"]]), $f = {
  name: "tab",
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
  created() {
    this.rebuild();
  },
  unmounted() {
    this.rebuild();
  },
  // created() {
  //     this.tabset.tabs.push(this);
  //     if(!this.activeHeading.value) {
  //     	if(this.tabset.tabs.length === 1) {
  //     		this.activeHeading.value = this.heading;
  //     	}
  //     }
  // },
  // beforeUnmount() {
  // 	const index = this.tabset.tabs.indexOf(this);
  // 	console.log('remove', index);
  //     this.tabset.tabs.splice(index, 1);
  // },
  // data() {
  // 	return {
  // 		isActive:false,
  // 	}
  // },
  inject: [
    "tabset",
    "activeHeading",
    "rebuild"
  ],
  // created() {
  // 	console.log('created', this)
  // 	this.tabs.push(this);
  // 	console.log('add tab', this.heading);
  // },	
  // beforeUnmount() {
  // 	const index = this.tabs.indexOf(this);
  // 	this.tabs.splice(index, 1);
  // 	console.log('remove tab', this.heading);
  // },
  // methods:{
  // 	dispatch() {
  // 		if(this.tabset?.recreateTabs) {
  // 			this.tabset.recreateTabs();
  // 		}
  // 	}
  // },
  // watch:{
  // 	tabset:{
  // 		handler(t){
  // 			this.dispatch();
  // 		},
  // 		immediate:true,
  // 	},
  // },
  computed: {
    active() {
      var t;
      return String(this.heading) === String(((t = this.activeHeading) == null ? void 0 : t.value) || this.activeHeading);
    }
    // active:{
    // 	get() {
    // 		return this.heading === this.activeTitle;
    // 	},
    // 		set(a) {
    // 			this.select(this.heading);
    // 		}
    // 	}
  }
};
function Nf(e, t, n, i, s, r) {
  const a = y("flex-column");
  return r.active ? (o(), k(a, { key: 0 }, {
    default: h(() => [
      q(e.$slots, "default")
    ]),
    _: 3
  })) : _("", !0);
}
const Lf = /* @__PURE__ */ E($f, [["render", Nf]]);
var Pf = Array.isArray, Dn = Pf, Uf = Dn, jf = Vr, Rf = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Bf = /^\w*$/;
function zf(e, t) {
  if (Uf(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || jf(e) ? !0 : Bf.test(e) || !Rf.test(e) || t != null && e in Object(t);
}
var Hf = zf, qf = In, Gf = Er, Wf = "[object AsyncFunction]", Kf = "[object Function]", Yf = "[object GeneratorFunction]", Zf = "[object Proxy]";
function Jf(e) {
  if (!Gf(e))
    return !1;
  var t = qf(e);
  return t == Kf || t == Yf || t == Wf || t == Zf;
}
var _l = Jf, Xf = sn, Qf = Xf["__core-js_shared__"], em = Qf, qr = em, Ts = function() {
  var e = /[^.]+$/.exec(qr && qr.keys && qr.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function tm(e) {
  return !!Ts && Ts in e;
}
var nm = tm, rm = Function.prototype, im = rm.toString;
function sm(e) {
  if (e != null) {
    try {
      return im.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var am = sm, lm = _l, om = nm, um = Er, dm = am, cm = /[\\^$.*+?()[\]{}|]/g, fm = /^\[object .+?Constructor\]$/, mm = Function.prototype, hm = Object.prototype, pm = mm.toString, ym = hm.hasOwnProperty, _m = RegExp(
  "^" + pm.call(ym).replace(cm, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function gm(e) {
  if (!um(e) || om(e))
    return !1;
  var t = lm(e) ? _m : fm;
  return t.test(dm(e));
}
var vm = gm;
function bm(e, t) {
  return e == null ? void 0 : e[t];
}
var km = bm, xm = vm, wm = km;
function Sm(e, t) {
  var n = wm(e, t);
  return xm(n) ? n : void 0;
}
var Ni = Sm, Om = Ni, Tm = Om(Object, "create"), Cr = Tm, Es = Cr;
function Em() {
  this.__data__ = Es ? Es(null) : {}, this.size = 0;
}
var Vm = Em;
function Cm(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Am = Cm, Mm = Cr, Im = "__lodash_hash_undefined__", Fm = Object.prototype, Dm = Fm.hasOwnProperty;
function $m(e) {
  var t = this.__data__;
  if (Mm) {
    var n = t[e];
    return n === Im ? void 0 : n;
  }
  return Dm.call(t, e) ? t[e] : void 0;
}
var Nm = $m, Lm = Cr, Pm = Object.prototype, Um = Pm.hasOwnProperty;
function jm(e) {
  var t = this.__data__;
  return Lm ? t[e] !== void 0 : Um.call(t, e);
}
var Rm = jm, Bm = Cr, zm = "__lodash_hash_undefined__";
function Hm(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Bm && t === void 0 ? zm : t, this;
}
var qm = Hm, Gm = Vm, Wm = Am, Km = Nm, Ym = Rm, Zm = qm;
function ln(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
ln.prototype.clear = Gm;
ln.prototype.delete = Wm;
ln.prototype.get = Km;
ln.prototype.has = Ym;
ln.prototype.set = Zm;
var Jm = ln;
function Xm() {
  this.__data__ = [], this.size = 0;
}
var Qm = Xm;
function eh(e, t) {
  return e === t || e !== e && t !== t;
}
var th = eh, nh = th;
function rh(e, t) {
  for (var n = e.length; n--; )
    if (nh(e[n][0], t))
      return n;
  return -1;
}
var Ar = rh, ih = Ar, sh = Array.prototype, ah = sh.splice;
function lh(e) {
  var t = this.__data__, n = ih(t, e);
  if (n < 0)
    return !1;
  var i = t.length - 1;
  return n == i ? t.pop() : ah.call(t, n, 1), --this.size, !0;
}
var oh = lh, uh = Ar;
function dh(e) {
  var t = this.__data__, n = uh(t, e);
  return n < 0 ? void 0 : t[n][1];
}
var ch = dh, fh = Ar;
function mh(e) {
  return fh(this.__data__, e) > -1;
}
var hh = mh, ph = Ar;
function yh(e, t) {
  var n = this.__data__, i = ph(n, e);
  return i < 0 ? (++this.size, n.push([e, t])) : n[i][1] = t, this;
}
var _h = yh, gh = Qm, vh = oh, bh = ch, kh = hh, xh = _h;
function on(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
on.prototype.clear = gh;
on.prototype.delete = vh;
on.prototype.get = bh;
on.prototype.has = kh;
on.prototype.set = xh;
var wh = on, Sh = Ni, Oh = sn, Th = Sh(Oh, "Map"), Eh = Th, Vs = Jm, Vh = wh, Ch = Eh;
function Ah() {
  this.size = 0, this.__data__ = {
    hash: new Vs(),
    map: new (Ch || Vh)(),
    string: new Vs()
  };
}
var Mh = Ah;
function Ih(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var Fh = Ih, Dh = Fh;
function $h(e, t) {
  var n = e.__data__;
  return Dh(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
var Mr = $h, Nh = Mr;
function Lh(e) {
  var t = Nh(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var Ph = Lh, Uh = Mr;
function jh(e) {
  return Uh(this, e).get(e);
}
var Rh = jh, Bh = Mr;
function zh(e) {
  return Bh(this, e).has(e);
}
var Hh = zh, qh = Mr;
function Gh(e, t) {
  var n = qh(this, e), i = n.size;
  return n.set(e, t), this.size += n.size == i ? 0 : 1, this;
}
var Wh = Gh, Kh = Mh, Yh = Ph, Zh = Rh, Jh = Hh, Xh = Wh;
function un(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
un.prototype.clear = Kh;
un.prototype.delete = Yh;
un.prototype.get = Zh;
un.prototype.has = Jh;
un.prototype.set = Xh;
var gl = un, vl = gl, Qh = "Expected a function";
function Li(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Qh);
  var n = function() {
    var i = arguments, s = t ? t.apply(this, i) : i[0], r = n.cache;
    if (r.has(s))
      return r.get(s);
    var a = e.apply(this, i);
    return n.cache = r.set(s, a) || r, a;
  };
  return n.cache = new (Li.Cache || vl)(), n;
}
Li.Cache = vl;
var ep = Li, tp = ep, np = 500;
function rp(e) {
  var t = tp(e, function(i) {
    return n.size === np && n.clear(), i;
  }), n = t.cache;
  return t;
}
var ip = rp, sp = ip, ap = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, lp = /\\(\\)?/g, op = sp(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(ap, function(n, i, s, r) {
    t.push(s ? r.replace(lp, "$1") : i || n);
  }), t;
}), up = op;
function dp(e, t) {
  for (var n = -1, i = e == null ? 0 : e.length, s = Array(i); ++n < i; )
    s[n] = t(e[n], n, e);
  return s;
}
var bl = dp, Cs = $i, cp = bl, fp = Dn, mp = Vr, hp = 1 / 0, As = Cs ? Cs.prototype : void 0, Ms = As ? As.toString : void 0;
function kl(e) {
  if (typeof e == "string")
    return e;
  if (fp(e))
    return cp(e, kl) + "";
  if (mp(e))
    return Ms ? Ms.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -hp ? "-0" : t;
}
var pp = kl, yp = pp;
function _p(e) {
  return e == null ? "" : yp(e);
}
var Pi = _p, gp = Dn, vp = Hf, bp = up, kp = Pi;
function xp(e, t) {
  return gp(e) ? e : vp(e, t) ? [e] : bp(kp(e));
}
var wp = xp, Sp = Vr, Op = 1 / 0;
function Tp(e) {
  if (typeof e == "string" || Sp(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -Op ? "-0" : t;
}
var Ep = Tp, Vp = wp, Cp = Ep;
function Ap(e, t) {
  t = Vp(t, e);
  for (var n = 0, i = t.length; e != null && n < i; )
    e = e[Cp(t[n++])];
  return n && n == i ? e : void 0;
}
var Mp = Ap, Ip = Mp;
function Fp(e, t, n) {
  var i = e == null ? void 0 : Ip(e, t);
  return i === void 0 ? n : i;
}
var mr = Fp;
const ot = {
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
const Dp = {
  mixins: [ot],
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
}, $p = { class: "table-image-cell" };
function Np(e, t, n, i, s, r) {
  const a = y("ux-image"), l = y("ux-icon");
  return o(), d("td", $p, [
    r.type == "image" || r.type == "video" ? (o(), d("div", {
      key: 0,
      onClick: t[0] || (t[0] = W((u) => r.clicked(e.value), ["stop", "prevent"])),
      class: "image-wrapper"
    }, [
      m(a, {
        item: r.imageSource,
        type: r.type,
        width: 100,
        height: 100
      }, null, 8, ["item", "type"])
    ])) : (o(), k(l, {
      key: 1,
      icon: "fa-file"
    }))
  ]);
}
const Lp = /* @__PURE__ */ E(Dp, [["render", Np], ["__scopeId", "data-v-868d2120"]]);
const Pp = {
  mixins: [ot],
  computed: {
    string() {
      return isNaN(this.amount) ? "" : this.amount.toFixed(2);
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
function Up(e, t, n, i, s, r) {
  return o(), d("td", {
    class: L(["table-currency-cell", { credit: r.credit, empty: r.empty, debit: r.debit }])
  }, b(r.string), 3);
}
const jp = /* @__PURE__ */ E(Pp, [["render", Up], ["__scopeId", "data-v-c8cb509d"]]);
const Rp = {
  data() {
    return {
      processing: !1
    };
  },
  mixins: [ot],
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
}, Bp = { class: "table-button-cell" };
function zp(e, t, n, i, s, r) {
  const a = y("ux-icon"), l = y("ux-button");
  return o(), d("td", Bp, [
    m(l, {
      color: r.button.color,
      size: r.button.size,
      loading: s.processing,
      onClick: W(r.clicked, ["stop", "prevent"])
    }, {
      default: h(() => [
        r.label ? (o(), d(S, { key: 0 }, [
          O(b(r.label), 1)
        ], 64)) : _("", !0),
        r.button.icon ? (o(), k(a, {
          key: 1,
          icon: r.button.icon,
          right: ""
        }, null, 8, ["icon"])) : _("", !0)
      ]),
      _: 1
    }, 8, ["color", "size", "loading", "onClick"])
  ]);
}
const Hp = /* @__PURE__ */ E(Rp, [["render", zp], ["__scopeId", "data-v-bddd5589"]]);
const qp = {
  mixins: [ot],
  computed: {
    hasValue() {
      return this.value !== void 0 && this.value !== null;
    },
    timeago() {
      return U.fromISO(this.value).toRelative();
    },
    readable() {
      let e = U.fromISO(this.value), t = U.now(), n = t.toFormat("yyyy");
      return t.toFormat("MMM yyyy"), e.toFormat("yyyy") === n ? U.fromISO(this.value).toFormat("h:mm a - dd MMM") : U.fromISO(this.value).toFormat("h:mm a - dd MMM yyyy");
    }
  }
}, Gp = { class: "table-date-cell" }, Wp = { key: 0 }, Kp = { class: "off" }, Yp = { class: "on" }, Zp = { class: "spacer" };
function Jp(e, t, n, i, s, r) {
  return o(), d("td", Gp, [
    r.hasValue ? (o(), d("div", Wp, [
      w("span", Kp, b(r.readable), 1),
      w("span", Yp, b(r.timeago), 1),
      w("span", Zp, b(r.readable), 1)
    ])) : _("", !0)
  ]);
}
const Is = /* @__PURE__ */ E(qp, [["render", Jp], ["__scopeId", "data-v-d6b72564"]]);
const Xp = {
  mixins: [ot],
  computed: {
    boolean() {
      return !!this.value;
    }
  }
};
function Qp(e, t, n, i, s, r) {
  const a = y("ux-icon");
  return o(), d("td", {
    class: L(["table-boolean-cell", { true: r.boolean, false: !r.boolean }])
  }, [
    m(a, {
      icon: r.boolean ? "fa-check" : "fa-times"
    }, null, 8, ["icon"])
  ], 2);
}
const Fs = /* @__PURE__ */ E(Xp, [["render", Qp], ["__scopeId", "data-v-897e69cd"]]);
const ey = {
  mixins: [ot],
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
function ty(e, t, n, i, s, r) {
  const a = y("ux-icon"), l = y("ux-button");
  return o(), d("td", {
    class: L(["table-security-cell", r.security])
  }, [
    r.canEdit ? (o(), k(l, {
      key: 0,
      size: "sm",
      loading: s.processing,
      onClick: W(r.clicked, ["stop", "prevent"])
    }, {
      default: h(() => [
        m(a, {
          icon: r.public ? "fa-lock-open" : "fa-lock"
        }, null, 8, ["icon"])
      ]),
      _: 1
    }, 8, ["loading", "onClick"])) : (o(), k(a, {
      key: 1,
      icon: r.public ? "fa-lock-open" : "fa-lock"
    }, null, 8, ["icon"]))
  ], 2);
}
const ny = /* @__PURE__ */ E(ey, [["render", ty], ["__scopeId", "data-v-45dd2b07"]]);
const ry = {
  mixins: [ot],
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
}, iy = { class: "table-url-cell" }, sy = ["href"];
function ay(e, t, n, i, s, r) {
  const a = y("ux-icon");
  return o(), d("td", iy, [
    w("a", {
      href: r.href,
      onClick: t[0] || (t[0] = W((...l) => r.open && r.open(...l), ["stop", "prevent"])),
      target: "_blank"
    }, [
      O(b(e.value) + " ", 1),
      m(a, {
        right: "",
        icon: "fa-external-link"
      })
    ], 8, sy)
  ]);
}
const Ds = /* @__PURE__ */ E(ry, [["render", ay], ["__scopeId", "data-v-7dbf1e30"]]);
var $s = function(e, t, n) {
  if (!t.hasOwnProperty(n)) {
    var i = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(t, n, i);
  }
};
const Ui = { props: { template: String, parent: Object, templateProps: { type: Object, default: function() {
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
    var a = i.methods;
    a === void 0 && (a = {});
    var l = this.$data;
    l === void 0 && (l = {});
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
    Object.keys(t).forEach(function(D) {
      l[D] === void 0 && (v.$data[D] = t[D]);
    }), Object.keys(n).forEach(function(D) {
      u[D] === void 0 && (v.$props[D] = n[D]);
    }), Object.keys(a).forEach(function(D) {
      f[D] === void 0 && (v.methods[D] = a[D]);
    }), Object.keys(r).forEach(function(D) {
      p[D] === void 0 && (v.computed[D] = r[D]);
    }), Object.keys(s).forEach(function(D) {
      g[D] === void 0 && (v.components[D] = s[D]);
    });
    var x = Object.keys(v.methods || {}), T = Object.keys(v.$data || {}), A = Object.keys(v.$props || {}), G = Object.keys(this.templateProps), Q = T.concat(A).concat(x).concat(G), re = (oe = e, B = {}, x.forEach(function(D) {
      return $s(oe, B, D);
    }), B), le = function(D) {
      var se = {};
      return D.forEach(function(z) {
        z && Object.getOwnPropertyNames(z).forEach(function(Ce) {
          return $s(z, se, Ce);
        });
      }), se;
    }([v.$data, v.$props, re, this.templateProps]);
    return di({ template: this.template || "<div></div>", props: Q, computed: v.computed, components: v.components, provide: this.$parent.$.provides ? this.$parent.$.provides : {} }, Object.assign({}, le));
  }
  var oe, B;
} };
const ly = {
  components: {
    Compile: Ui
  },
  mixins: [ot]
}, oy = { class: "table-computed-cell" };
function uy(e, t, n, i, s, r) {
  const a = y("compile");
  return o(), d("td", oy, [
    m(a, {
      template: this.column.code
    }, null, 8, ["template"])
  ]);
}
const dy = /* @__PURE__ */ E(ly, [["render", uy], ["__scopeId", "data-v-05dd3203"]]);
const cy = {
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
      return U.fromISO(this.value).toFormat("dd MMM yyyy");
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
function fy(e, t, n, i, s, r) {
  return r.reference ? (o(), d("a", {
    key: 0,
    onClick: t[0] || (t[0] = W((a) => r.clicked(n.value), ["stop", "prevent"]))
  }, b(r.renderValue), 1)) : n.type == "date" ? (o(), d(S, { key: 1 }, [
    O(b(r.date), 1)
  ], 64)) : (o(), d(S, { key: 2 }, [
    O(b(r.renderValue), 1),
    n.multi && !n.last ? (o(), d(S, { key: 0 }, [
      O(", ")
    ], 64)) : _("", !0)
  ], 64));
}
const my = /* @__PURE__ */ E(cy, [["render", fy], ["__scopeId", "data-v-cb9b14f7"]]);
const hy = {
  mixins: [ot],
  computed: {
    status() {
      return String(this.value).toLowerCase();
    }
  }
}, py = { class: "pill" };
function yy(e, t, n, i, s, r) {
  return o(), d("td", {
    class: L(["table-status-cell", r.status])
  }, [
    w("div", py, b(r.status), 1)
  ], 2);
}
const _y = /* @__PURE__ */ E(hy, [["render", yy], ["__scopeId", "data-v-e4a3b2f2"]]);
const gy = {
  mixins: [ot],
  computed: {
    typeKey() {
      var e;
      return (e = this.row.meta) == null ? void 0 : e.type;
    },
    subtitle() {
      var a;
      const e = this, t = this.row, n = t.subtitle, i = t.description, s = (a = t.meta) == null ? void 0 : a.description, r = n || i || s;
      switch (this.typeKey) {
        case "event":
          {
            const l = t.startDate, u = t.endDate;
            if (e.$sdk.date)
              return r ? `${r} - ${e.$sdk.date.readableDateRange(l, u)}` : `${e.$sdk.date.readableDateRange(l, u)}`;
          }
          break;
      }
      return r;
    }
  }
}, vy = { class: "title" }, by = {
  key: 0,
  class: "subtitle"
};
function ky(e, t, n, i, s, r) {
  return o(), d("td", {
    class: L(["table-title-cell", e.status])
  }, [
    w("div", vy, b(e.value), 1),
    r.subtitle ? (o(), d("div", by, b(r.subtitle), 1)) : _("", !0)
  ], 2);
}
const xy = /* @__PURE__ */ E(gy, [["render", ky], ["__scopeId", "data-v-69182ca5"]]);
function gi(e, t) {
  if (!e || !t)
    return;
  var n = mr(e, t);
  if (n)
    return n;
  const i = t.split("."), s = i.shift(), r = i.join("."), a = mr(e, s);
  return Array.isArray(a) ? a.map(function(l) {
    return gi(l, r);
  }).flat().filter(Boolean) : gi(a, r);
}
const wy = {
  data() {
    return {
      component: null
    };
  },
  components: {
    ValueRenderer: my
  },
  async created() {
    const e = this;
    let t, n = e.column.type, i = e.column.renderer || e.column.widget;
    switch (n == "reference" && e.column.referenceType === "image" && (i = "thumbnail"), i) {
      case "button":
        t = Hp;
        break;
      case "security":
        t = ny;
        break;
      case "boolean":
        t = Fs;
        break;
      case "date":
      case "datetime":
        t = Is;
        break;
      case "title":
        t = xy;
        break;
      case "status":
        t = _y;
        break;
      case "computed":
        t = dy;
        break;
      case "url":
        t = Ds;
        break;
      case "currency":
        t = jp;
        break;
      case "thumbnail":
        t = Lp;
        break;
      default:
        switch (n) {
          case "date":
            t = Is;
            break;
          case "boolean":
            t = Fs;
            break;
          case "url":
            t = Ds;
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
    nowrap() {
      return this.column.wrap === !1;
    },
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
      var e = gi(this.row, this.column.key);
      return e;
    }
  }
}, Sy = { class: "value" }, Oy = { class: "value" };
function Ty(e, t, n, i, s, r) {
  const a = y("value-renderer");
  return s.component ? (o(), k(wt(s.component), {
    key: 0,
    column: n.column,
    row: n.row,
    value: r.value
  }, null, 8, ["column", "row", "value"])) : (o(), d("td", {
    key: 1,
    class: L(["table-cell", { nowrap: r.nowrap }])
  }, [
    r.multiValue ? (o(), d(S, { key: 0 }, [
      r.complex ? (o(!0), d(S, { key: 0 }, $(r.value, (l, u) => (o(), d("span", Sy, [
        m(a, {
          type: n.column.type,
          multi: "",
          last: u === r.value.length - 1,
          value: l
        }, null, 8, ["type", "last", "value"])
      ]))), 256)) : (o(!0), d(S, { key: 1 }, $(r.value, (l, u) => (o(), d("span", Oy, [
        m(a, {
          type: n.column.type,
          multi: "",
          last: u === r.value.length - 1,
          value: l
        }, null, 8, ["type", "last", "value"])
      ]))), 256))
    ], 64)) : (o(), k(a, {
      key: 1,
      type: n.column.type,
      value: r.value
    }, null, 8, ["type", "value"]))
  ], 2));
}
const xl = /* @__PURE__ */ E(wy, [["render", Ty], ["__scopeId", "data-v-2b9d12bd"]]), Ey = {
  components: {
    TableCell: xl
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
function Vy(e, t, n, i, s, r) {
  const a = y("ux-checkbox"), l = y("table-cell"), u = y("ux-icon"), c = y("ux-button");
  return o(), d("tr", {
    class: L([r.classes, "table-row"])
  }, [
    q(e.$slots, "default", {}, () => [
      n.enableSelection ? (o(), d("th", {
        key: 0,
        class: "table-cell table-select first shrink",
        onClick: t[0] || (t[0] = W((f) => r.clickSelect(n.row), ["stop", "prevent"]))
      }, [
        m(a, { value: n.selected }, null, 8, ["value"])
      ])) : _("", !0),
      (o(!0), d(S, null, $(n.columns, (f, p) => (o(), k(l, {
        key: `${f.path || f.key}-${p}`,
        onClick: W((g) => r.clickCell(f), ["stop", "prevent"]),
        column: f,
        row: n.row
      }, null, 8, ["onClick", "column", "row"]))), 128)),
      n.enableActions ? (o(), d("th", {
        key: 1,
        class: "table-cell last shrink",
        onClick: t[1] || (t[1] = W((f) => r.clickActions(n.row), ["stop", "prevent"]))
      }, [
        m(c, {
          size: "xs",
          icon: ""
        }, {
          default: h(() => [
            m(u, { icon: "fa-ellipsis" })
          ]),
          _: 1
        })
      ])) : _("", !0)
    ])
  ], 2);
}
const Cy = /* @__PURE__ */ E(Ey, [["render", Vy]]), Ay = {
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
const My = {
  mixins: [Ay],
  components: {
    TableRow: Cy,
    TableCell: xl
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
      var r, a;
      const t = (r = this.sorting) == null ? void 0 : r.key, n = ((a = this.sorting) == null ? void 0 : a.direction) || "asc";
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
        return this.selectRange(n, t);
      this.lastSelectedIndex = t, this.$emit("select:row:toggle", e);
    }
  }
}, Iy = { class: "table-wrapper" }, Fy = {
  class: "table-scroll",
  ref: "scroll"
}, Dy = {
  key: 0,
  class: "first table-select shrink"
}, $y = ["onClick"], Ny = {
  key: 1,
  class: "last shrink"
};
function Ly(e, t, n, i, s, r) {
  const a = y("ux-checkbox"), l = y("ux-list-item"), u = y("ux-list"), c = y("ux-menu"), f = y("flex-cell"), p = y("flex-row"), g = y("table-row");
  return o(), d("div", Iy, [
    w("div", Fy, [
      w("table", null, [
        w("thead", null, [
          w("tr", null, [
            n.enableSelection ? (o(), d("th", Dy, [
              m(c, null, {
                activator: h(({ on: v }) => [
                  m(a, Ti(ha(v), { value: r.pageSelected }), null, 16, ["value"])
                ]),
                default: h(() => [
                  m(u, null, {
                    default: h(() => [
                      m(l, {
                        onClick: t[0] || (t[0] = (v) => r.selectPage())
                      }, {
                        default: h(() => [
                          O(" Select Page ")
                        ]),
                        _: 1
                      }),
                      r.someSelectedOnPage ? (o(), k(l, {
                        key: 0,
                        onClick: t[1] || (t[1] = (v) => r.deselectPage())
                      }, {
                        default: h(() => [
                          O(" Deselect Page ")
                        ]),
                        _: 1
                      })) : _("", !0),
                      n.selectAll ? (o(), k(l, {
                        key: 1,
                        onClick: t[2] || (t[2] = (v) => n.selectAll())
                      }, {
                        default: h(() => [
                          O(" Select All (" + b(n.total) + ") ", 1)
                        ]),
                        _: 1
                      })) : _("", !0),
                      n.deselectAll ? (o(), k(l, {
                        key: 2,
                        onClick: t[3] || (t[3] = (v) => n.deselectAll())
                      }, {
                        default: h(() => [
                          O(" Deselect All ")
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
            (o(!0), d(S, null, $(r.renderColumns, (v) => {
              var x;
              return o(), d("th", {
                onClick: (T) => r.toggleSort(v),
                class: L([{ sortable: v.sortable !== !1, active: v.key === ((x = s.sorting) == null ? void 0 : x.key) }, v.class])
              }, [
                m(p, {
                  gap: "",
                  vcenter: ""
                }, {
                  default: h(() => {
                    var T;
                    return [
                      m(f, null, {
                        default: h(() => [
                          O(b(v.title), 1)
                        ]),
                        _: 2
                      }, 1024),
                      v.key === ((T = s.sorting) == null ? void 0 : T.key) ? (o(), k(f, {
                        key: 0,
                        class: "caret",
                        shrink: ""
                      }, {
                        default: h(() => [
                          O(b(r.currentSortDirection === "asc" ? "▲" : "▼"), 1)
                        ]),
                        _: 1
                      })) : _("", !0)
                    ];
                  }),
                  _: 2
                }, 1024)
              ], 10, $y);
            }), 256)),
            n.enableActions ? (o(), d("th", Ny, [
              q(e.$slots, "corner", {}, void 0, !0)
            ])) : _("", !0)
          ])
        ]),
        w("tbody", null, [
          (o(!0), d(S, null, $(r.renderRows, (v, x) => (o(), k(g, {
            enableSelection: n.enableSelection,
            enableActions: n.enableActions,
            key: v._id,
            "onClick:cell": r.clickCell,
            "onClick:row": r.clickRow,
            "onClick:select": r.clickSelect,
            "onClick:actions": r.clickActions,
            selected: r.isSelected(v),
            row: v,
            index: x,
            columns: n.columns
          }, null, 8, ["enableSelection", "enableActions", "onClick:cell", "onClick:row", "onClick:select", "onClick:actions", "selected", "row", "index", "columns"]))), 128))
        ])
      ])
    ], 512)
  ]);
}
const Py = /* @__PURE__ */ E(My, [["render", Ly], ["__scopeId", "data-v-91800cfb"]]);
var Qt = {}, Uy = {
  get exports() {
    return Qt;
  },
  set exports(e) {
    Qt = e;
  }
}, jy = Object.prototype.hasOwnProperty;
function wl(e) {
  return "[Throws: " + (e ? e.message : "?") + "]";
}
function Ry(e, t) {
  if (jy.call(e, t))
    try {
      return e[t];
    } catch (n) {
      return wl(n);
    }
  return e[t];
}
function Sl(e) {
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
      } catch (l) {
        return wl(l);
      }
    if (Array.isArray(i)) {
      var r = i.map(n);
      return t.pop(), r;
    }
    var a = Object.keys(i).reduce(function(l, u) {
      return l[u] = n(Ry(i, u)), l;
    }, {});
    return t.pop(), a;
  }
  return n(e);
}
Uy.exports = function(e, t, n) {
  return JSON.stringify(Sl(e), t, n);
};
Qt.ensureProperties = Sl;
function By(e, t) {
  return e == null || t == "date" && e.toString && e.toString() === "Invalid Date";
}
function Ns(e) {
  return e != null;
}
const ne = {
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
      dynamicOptions: [],
      asyncOptionsAreLoading: this.field.asyncOptions,
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
  async created() {
    const e = this;
    e.hasAsyncOptions && await e.reloadAsyncOptions();
  },
  inject: ["form", "fieldPath"],
  computed: {
    hasAsyncOptions() {
      return this.field.asyncOptions;
    },
    loadingAsyncOptions() {
      return this.hasAsyncOptions && this.asyncOptionsAreLoading;
    },
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
        (Qt(n) != Qt(i) || t) && (this.value = n, this.checkAutofocus(), this.dispatch());
      }
    },
    options() {
      var e = this;
      return e.hasAsyncOptions ? e.dynamicOptions : (e.field.options || []).reduce(function(t, n) {
        if (!n)
          return t;
        const i = e.getValue(n);
        var r = {
          title: n.title || n.name || n.label || i,
          value: i,
          none: n.none,
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
      if (!this.singleValue && !(this.options.length && this.selectableOptions.length === 0))
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
    async reloadAsyncOptions() {
      const e = this;
      if (!e.hasAsyncOptions) {
        e.asyncOptionsAreLoading = !1;
        return;
      }
      e.asyncOptionsAreLoading = !0;
      const { data: t } = await e.$sdk.api.get(e.field.asyncOptions);
      e.dynamicOptions = t, e.asyncOptionsAreLoading = !1;
    },
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
      var t = this.cleanTextInput(e._id || e.value), n = Ns(t);
      return !n && e.title && !this.returnObject && (t = e.title), t = this.cleanTextInput(t), Ns(t) ? t : e;
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
      this.$emit("update:modelValue", this.value);
    },
    cleanInputValue(e) {
      return e;
    },
    cleanOutputValue(e) {
      return e;
    },
    cleanOutput(e) {
      var t = this;
      return By(e, t.field.type) ? t.multiValue ? e = [] : e = void 0 : t.multiValue ? (Array.isArray(e) || (e = []), e.forEach(function(n, i) {
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
function zy(e) {
  return e === void 0 || typeof e > "u" || e === null || String(e) === "null" || String(e) === "undefined";
}
const Hy = {
  data() {
    return {
      candidate: null
    };
  },
  props: {
    title: {
      type: String
    },
    modelValue: {
      // type: [Object, Array],
    }
  },
  mixins: [ne],
  created() {
    this.model = this.model;
  },
  methods: {
    displayLabelFromValue(e) {
      if (!e)
        return;
      const t = e.value || e, n = this.optionLookup[t] || {};
      return n.title || n.name || e.title || e.value || e;
    },
    addValue(e) {
      this.canAddValue && this.model.indexOf(e) === -1 && (this.model = [...this.model, e]);
    },
    removeValue(e) {
      var t = this.model.slice();
      e != -1 && (t.splice(e, 1), this.model = t);
    },
    cleanOutput(e) {
      var t = this;
      return zy(e) ? t.multiValue ? e = [] : e = void 0 : t.multiValue ? e = (e || []).filter(function(n) {
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
  watch: {
    candidate(e) {
      e && (this.addValue(e), this.candidate = null);
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
    summary() {
      if (this.multiValue)
        return "Select an option";
      const e = this.selectableOptions.find(function(n) {
        return n.none;
      }), t = (e == null ? void 0 : e.title) || (e == null ? void 0 : e.label);
      return this.model ? this.getLabel(this.optionLookup[this.model]) : t || this.title || "Click to select";
    },
    grouped() {
      const e = this, { values: t } = e.selectableOptions.reduce(function(n, i) {
        const s = i.group || "";
        let r = n.hash[s];
        return r || (r = n.hash[s] = {
          title: s,
          options: []
        }, n.values.push(r)), r.options.push(i), n;
      }, {
        hash: {},
        values: []
      });
      if (!(t.length <= 1))
        return t;
    },
    modelLookup() {
      var e = this;
      return e.multiValue ? e.model.reduce(function(t, n) {
        const i = e.getValue(n);
        return t[i] = n, t;
      }, {}) : {};
    },
    selectableOptions() {
      var n;
      const e = this;
      let t = e.options;
      return e.multiValue && (t = t.filter(function(i) {
        return !e.modelLookup[e.getValue(i)];
      })), (n = e.field) != null && n.sorted ? t.sort(function(i, s) {
        var r = (i.title || i).toLowerCase(), a = (s.title || s).toLowerCase();
        return r < a ? -1 : r > a ? 1 : 0;
      }) : t;
    },
    showNoneOption() {
      return !(!(this.singleValue && !this.minimum) || this.selectableOptions.find(function(n) {
        return n.none;
      }));
    }
  }
}, qy = (e) => (at("data-v-74bb87d8"), e = e(), lt(), e), Gy = {
  key: 0,
  class: "ux-field-title"
}, Wy = {
  key: 0,
  class: "ux-required-marker"
}, Ky = {
  key: 1,
  class: "ux-field-description"
}, Yy = {
  key: 2,
  class: "select-tags"
}, Zy = ["onClick"], Jy = { key: 3 }, Xy = {
  key: 4,
  class: "select-input-wrapper"
}, Qy = { class: "ui-select-button" }, e_ = /* @__PURE__ */ qy(() => /* @__PURE__ */ w("option", { value: "" }, "Select an option", -1)), t_ = ["label"], n_ = ["value"], r_ = ["value"], i_ = { class: "ui-select-button" }, s_ = ["multiple"], a_ = {
  key: 0,
  value: ""
}, l_ = ["label"], o_ = ["value"], u_ = ["value"];
function d_(e, t, n, i, s, r) {
  const a = y("flex-cell"), l = y("ux-icon"), u = y("flex-row"), c = y("ux-button");
  return o(), d("div", {
    class: L(["native-select", r.classes])
  }, [
    e.showLabel ? (o(), d("label", Gy, [
      O(b(e.label) + " ", 1),
      e.required ? (o(), d("span", Wy, "*")) : _("", !0)
    ])) : _("", !0),
    e.showDescription ? (o(), d("div", Ky, b(e.description), 1)) : _("", !0),
    e.multiValue ? (o(), d("div", Yy, [
      (o(!0), d(S, null, $(e.model, (f, p) => (o(), d("div", {
        class: "select-tag",
        key: f.value || f
      }, [
        m(u, {
          gap: "",
          center: ""
        }, {
          default: h(() => [
            m(a, null, {
              default: h(() => [
                O(b(r.displayLabelFromValue(f)), 1)
              ]),
              _: 2
            }, 1024),
            m(a, { shrink: "" }, {
              default: h(() => [
                w("a", {
                  onClick: (g) => r.removeValue(p)
                }, [
                  m(l, { icon: "fa-times" })
                ], 8, Zy)
              ]),
              _: 2
            }, 1024)
          ]),
          _: 2
        }, 1024)
      ]))), 128))
    ])) : _("", !0),
    e.loadingAsyncOptions ? (o(), d("div", Jy, [
      m(l, {
        icon: "fa-spinner",
        spin: "",
        left: ""
      }),
      O(" Loading Options ")
    ])) : (o(), d("div", Xy, [
      e.multiValue ? (o(), d(S, { key: 0 }, [
        e.canAddValue ? (o(), d(S, { key: 0 }, [
          w("div", Qy, [
            q(e.$slots, "default", {}, () => [
              m(c, { tag: "div" }, {
                default: h(() => [
                  O(b(r.summary), 1)
                ]),
                _: 1
              })
            ], !0)
          ]),
          K(w("select", {
            onFocus: t[0] || (t[0] = (...f) => e.touch && e.touch(...f)),
            "onUpdate:modelValue": t[1] || (t[1] = (f) => s.candidate = f)
          }, [
            e_,
            r.grouped ? (o(!0), d(S, { key: 0 }, $(r.grouped, (f) => (o(), d("optgroup", {
              label: f.title,
              key: f.title
            }, [
              (o(!0), d(S, null, $(f.options, (p) => (o(), d("option", {
                value: p.value
              }, b(p.title), 9, n_))), 256))
            ], 8, t_))), 128)) : (o(!0), d(S, { key: 1 }, $(r.selectableOptions, (f) => (o(), d("option", {
              value: f.value
            }, b(f.title), 9, r_))), 256))
          ], 544), [
            [St, s.candidate]
          ])
        ], 64)) : _("", !0)
      ], 64)) : (o(), d(S, { key: 1 }, [
        w("div", i_, [
          q(e.$slots, "default", {}, () => [
            m(c, { tag: "div" }, {
              default: h(() => [
                O(b(r.summary), 1)
              ]),
              _: 1
            })
          ], !0)
        ]),
        K(w("select", {
          onFocus: t[2] || (t[2] = (...f) => e.touch && e.touch(...f)),
          multiple: e.multiValue,
          "onUpdate:modelValue": t[3] || (t[3] = (f) => e.model = f)
        }, [
          r.showNoneOption ? (o(), d("option", a_, "None")) : _("", !0),
          r.grouped ? (o(!0), d(S, { key: 1 }, $(r.grouped, (f) => (o(), d("optgroup", {
            label: f.title,
            key: f.title
          }, [
            (o(!0), d(S, null, $(f.options, (p) => (o(), d("option", {
              value: p.value
            }, b(p.title), 9, o_))), 256))
          ], 8, l_))), 128)) : (o(!0), d(S, { key: 2 }, $(r.selectableOptions, (f) => (o(), d("option", {
            value: f.value
          }, b(f.title), 9, u_))), 256))
        ], 40, s_), [
          [St, e.model]
        ])
      ], 64))
    ]))
  ], 2);
}
const Pt = /* @__PURE__ */ E(Hy, [["render", d_], ["__scopeId", "data-v-74bb87d8"]]);
const c_ = {
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
    NativeSelect: Pt
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
function f_(e, t, n, i, s, r) {
  const a = y("native-select"), l = y("flex-cell"), u = y("ux-icon"), c = y("ux-button"), f = y("flex-row");
  return o(), k(f, {
    center: "",
    gap: ""
  }, {
    default: h(() => [
      m(l, {
        shrink: "",
        class: "text"
      }, {
        default: h(() => [
          m(a, {
            modelValue: r.perPage,
            "onUpdate:modelValue": t[0] || (t[0] = (p) => r.perPage = p),
            field: s.perPageField
          }, {
            default: h(() => [
              e.$device.breakpoint.xs ? (o(), d(S, { key: 0 }, [
                O(b(r.displayStartIndex) + "-" + b(r.endIndex) + " of " + b(n.total), 1)
              ], 64)) : (o(), d(S, { key: 1 }, [
                O("Showing " + b(r.displayStartIndex) + " to " + b(r.endIndex) + " of " + b(n.total) + " total", 1)
              ], 64))
            ]),
            _: 1
          }, 8, ["modelValue", "field"])
        ]),
        _: 1
      }),
      m(l),
      r.totalPages > 1 ? (o(), k(l, {
        key: 0,
        shrink: ""
      }, {
        default: h(() => [
          m(f, {
            gap: "",
            center: ""
          }, {
            default: h(() => [
              m(l, {
                shrink: "",
                class: "text"
              }, {
                default: h(() => [
                  m(a, {
                    modelValue: r.currentPage,
                    "onUpdate:modelValue": t[1] || (t[1] = (p) => r.currentPage = p),
                    field: r.pageField
                  }, {
                    default: h(() => [
                      e.$device.breakpoint.xs ? (o(), d(S, { key: 0 }, [
                        O(b(r.currentPage) + "/" + b(r.totalPages), 1)
                      ], 64)) : (o(), d(S, { key: 1 }, [
                        O("Page " + b(r.currentPage) + " of " + b(r.totalPages), 1)
                      ], 64))
                    ]),
                    _: 1
                  }, 8, ["modelValue", "field"])
                ]),
                _: 1
              }),
              m(l, { shrink: "" }, {
                default: h(() => [
                  m(c, {
                    icon: "",
                    onClick: t[2] || (t[2] = (p) => r.previousPage())
                  }, {
                    default: h(() => [
                      m(u, { icon: "fa-arrow-left" })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              m(l, { shrink: "" }, {
                default: h(() => [
                  m(c, {
                    icon: "",
                    onClick: t[3] || (t[3] = (p) => r.nextPage())
                  }, {
                    default: h(() => [
                      m(u, { icon: "fa-arrow-right" })
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
const BV = /* @__PURE__ */ E(c_, [["render", f_], ["__scopeId", "data-v-f4838c15"]]);
const m_ = {
  props: {
    icon: {
      type: [Object, String],
      default() {
        return "fa-exclamation";
      }
    },
    type: {
      type: String,
      default: "info"
    }
  },
  computed: {
    classes() {
      var e = [];
      return e.push(`ux-info-${this.type}`), e;
    }
  }
}, h_ = { class: "icon-circle" };
function p_(e, t, n, i, s, r) {
  const a = y("ux-icon"), l = y("flex-cell"), u = y("flex-row");
  return o(), d("div", {
    class: L(["ux-info-box", r.classes])
  }, [
    m(u, {
      style: { gap: "1em" },
      center: ""
    }, {
      default: h(() => [
        n.icon ? (o(), k(l, {
          key: 0,
          shrink: ""
        }, {
          default: h(() => [
            w("div", h_, [
              m(a, { icon: n.icon }, null, 8, ["icon"])
            ])
          ]),
          _: 1
        })) : _("", !0),
        m(l, null, {
          default: h(() => [
            q(e.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        })
      ]),
      _: 3
    })
  ], 2);
}
const y_ = /* @__PURE__ */ E(m_, [["render", p_], ["__scopeId", "data-v-9669e7c0"]]);
const __ = {
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
}, g_ = { class: "avatar" };
function v_(e, t, n, i, s, r) {
  return o(), d("div", g_);
}
const b_ = /* @__PURE__ */ E(__, [["render", v_]]);
const k_ = {
  props: {
    large: {
      type: Boolean
    }
  }
}, x_ = (e) => (at("data-v-d68fe1cf"), e = e(), lt(), e), w_ = /* @__PURE__ */ x_(() => /* @__PURE__ */ w("i", { class: "fa fa-spin fa-spinner" }, null, -1)), S_ = [
  w_
];
function O_(e, t, n, i, s, r) {
  return o(), d("div", {
    class: L(["ux-spinner", { large: n.large }])
  }, S_, 2);
}
const Ol = /* @__PURE__ */ E(k_, [["render", O_], ["__scopeId", "data-v-d68fe1cf"]]);
const T_ = {
  components: {
    Spinner: Ol
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
}, E_ = { class: "ux-btn-text" };
function V_(e, t, n, i, s, r) {
  const a = y("spinner");
  return o(), k(wt(r.element), {
    active: n.active,
    loading: n.loading,
    to: n.to,
    href: n.href,
    target: n.target,
    style: Ot(r.style),
    class: L([r.classes, "ux-btn"]),
    disabled: n.disabled
  }, {
    default: h(() => [
      n.loading ? (o(), k(a, { key: 0 })) : _("", !0),
      w("span", E_, [
        q(e.$slots, "default", {}, void 0, !0)
      ])
    ]),
    _: 3
  }, 8, ["active", "loading", "to", "href", "target", "style", "class", "disabled"]);
}
const C_ = /* @__PURE__ */ E(T_, [["render", V_], ["__scopeId", "data-v-66b9c2a8"]]);
const A_ = {
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
function M_(e, t, n, i, s, r) {
  const a = y("ux-icon");
  return o(), d("button", {
    class: L(["ux-checkbox", r.classes])
  }, [
    m(a, {
      class: "icon",
      icon: "fa-check"
    })
  ], 2);
}
const Tl = /* @__PURE__ */ E(A_, [["render", M_], ["__scopeId", "data-v-46a835a5"]]);
const I_ = {
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
function F_(e, t, n, i, s, r) {
  const a = y("ux-icon");
  return o(), d("a", {
    class: L(["ux-switch", r.classes])
  }, [
    w("span", null, [
      m(a, {
        spin: "",
        icon: "fa-spinner"
      })
    ])
  ], 2);
}
const D_ = /* @__PURE__ */ E(I_, [["render", F_], ["__scopeId", "data-v-9663da46"]]);
const $_ = {
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
function N_(e, t, n, i, s, r) {
  return o(), k(wt(r.element), {
    onClick: r.clicked,
    to: n.to,
    href: r.actualHref,
    target: n.target,
    class: L([r.class, "ux-link"])
  }, {
    default: h(() => [
      q(e.$slots, "default", {}, void 0, !0)
    ]),
    _: 3
  }, 8, ["onClick", "to", "href", "target", "class"]);
}
const L_ = /* @__PURE__ */ E($_, [["render", N_], ["__scopeId", "data-v-c91c7a6c"]]);
const P_ = {
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
function U_(e, t, n, i, s, r) {
  return o(), k(wt(r.element), {
    class: L(["ux-icon fa", r.classes])
  }, null, 8, ["class"]);
}
const j_ = /* @__PURE__ */ E(P_, [["render", U_], ["__scopeId", "data-v-dd53ba4e"]]), Yn = {
  cache: {}
};
const R_ = {
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
    this.removeListeners(), this.refMenu = null, this.mounted = !1, Yn.cache[this.group] === this && (Yn.cache[this.group] = null);
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
        this.group && (t = Yn.cache[this.group]), this.isExpanded != e && (this.isExpanded = e, e ? (this.position(), this.addEventListeners(), Yn.cache[this.group] = this, t && t != this && (t.expanded = !1)) : this.removeListeners(), this.$emit("update:modelValue", e));
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
function B_(e, t, n, i, s, r) {
  return o(), d("div", {
    class: L(["ux-menu", { right: n.right }])
  }, [
    w("span", null, [
      q(e.$slots, "activator", { on: r.on }, void 0, !0)
    ]),
    (o(), k(Io, { to: "body" }, [
      s.isExpanded ? (o(), d("div", {
        key: 0,
        class: "ux-menu-outer",
        style: Ot(s.outerStyle)
      }, [
        w("div", {
          class: "ux-menu-panel",
          ref: "menu",
          style: Ot(s.innerStyle)
        }, [
          q(e.$slots, "default", {}, void 0, !0)
        ], 4)
      ], 4)) : _("", !0)
    ]))
  ], 2);
}
const z_ = /* @__PURE__ */ E(R_, [["render", B_], ["__scopeId", "data-v-db935124"]]), H_ = {
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
  mounted() {
    this.mounted = !0;
  },
  beforeUnmount() {
    this.mounted = !1, this.removeListeners();
  },
  computed: {
    filteredItems() {
      return this.tree.filter(function(e) {
        return !e.disabled;
      });
    },
    expandedItem: {
      get() {
        return this.currentExpandedItem;
      },
      set(e) {
        this.currentExpandedItem && (this.currentExpandedItem.expanded = !1, this.currentExpandedItem.collapsed = !0), this.currentExpandedItem = e, this.currentExpandedItem ? (this.currentExpandedItem.expanded = !0, this.currentExpandedItem.collapsed = !1, this.addListeners()) : this.removeListeners();
      }
    }
  },
  data() {
    return {
      currentExpandedItem: null,
      tree: JSON.parse(JSON.stringify(this.items))
    };
  },
  methods: {
    globalClick(e) {
      this.expandedItem = null;
    },
    addListeners() {
      var t;
      this.$sdk.addEventListener("route:change", this.globalClick);
      const e = (t = this.$el) == null ? void 0 : t.ownerDocument;
      e && e.body.addEventListener("click", this.globalClick);
    },
    removeListeners() {
      var t;
      this.$sdk.removeEventListener("route:change", this.globalClick);
      const e = (t = this.$el) == null ? void 0 : t.ownerDocument;
      e && e.body.removeEventListener("click", this.globalClick);
    },
    toggle(e) {
      this.currentExpandedItem === e ? this.expandedItem = null : this.expandedItem = e;
    }
  },
  watch: {
    items: {
      handler(e) {
        this.tree = JSON.parse(JSON.stringify(e));
      },
      deep: !0
    }
  }
};
function q_(e, t, n, i, s, r) {
  const a = y("ux-link"), l = y("menulist", !0);
  return o(), d("ul", null, [
    (o(!0), d(S, null, $(r.filteredItems, (u) => {
      var c;
      return o(), d("li", {
        class: L({ expanded: u.expanded, collapsed: u.collapsed })
      }, [
        n.expandOn === "click" && ((c = u.items) != null && c.length) ? (o(), k(a, {
          key: 0,
          onClick: W((f) => r.toggle(u), ["stop", "prevent"]),
          class: L(u.class)
        }, {
          default: h(() => [
            O(b(u.title), 1)
          ]),
          _: 2
        }, 1032, ["onClick", "class"])) : (o(), d(S, { key: 1 }, [
          u.type === "url" ? (o(), k(a, {
            key: 0,
            class: L(u.class),
            target: u.target,
            href: u.href || u.url
          }, {
            default: h(() => [
              O(b(u.title), 1)
            ]),
            _: 2
          }, 1032, ["class", "target", "href"])) : u.type === "route" ? (o(), k(a, {
            key: 1,
            class: L(u.class),
            to: { name: u.route }
          }, {
            default: h(() => [
              O(b(u.title), 1)
            ]),
            _: 2
          }, 1032, ["class", "to"])) : _("", !0)
        ], 64)),
        u.items && u.items.length ? (o(), k(l, {
          key: 2,
          items: u.items
        }, null, 8, ["items"])) : _("", !0)
      ], 2);
    }), 256))
  ]);
}
const G_ = /* @__PURE__ */ E(H_, [["render", q_]]);
const W_ = {
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
      model: this.item,
      retries: 0,
      cacheBuster: 0
    };
  },
  watch: {
    item(e) {
      this.model = e;
    }
  },
  beforeMount() {
    this.$sdk.auth.ensureValidToken();
  },
  mounted() {
    const e = this.$refs.img;
    e && e.addEventListener("error", this.imageLoadError);
  },
  beforeUnmount() {
    const e = this.$refs.img;
    e && e.removeEventListener("error", this.imageLoadError);
  },
  methods: {
    imageLoadError: an(function(e) {
      this.retries < 3 && (this.cacheBuster++, this.retries++);
    }, 100)
  },
  computed: {
    altText() {
      var e;
      return this.alt || ((e = this.model) == null ? void 0 : e.title);
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
      return e.access_token = this.$sdk.auth.getCurrentToken(), e.cb = this.cacheBuster, this.imageWidth && (e.w = this.imageWidth ? this.imageWidth : null), this.imageHeight && (e.h = this.imageHeight ? this.imageHeight : null), this.crop ? e.c = !0 : this.contain || (e.c = this.imageWidth && this.imageHeight), this.quality && (e.q = parseInt(this.quality)), this.upscale && (e.u = !0), this.format && (e.f = this.format), e;
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
}, K_ = ["alt", "data"], Y_ = ["alt", "src"];
function Z_(e, t, n, i, s, r) {
  return o(), d("div", {
    class: L(["ux-image", r.className]),
    style: Ot(r.style)
  }, [
    n.svg ? (o(), d("object", {
      key: 0,
      alt: r.altText,
      type: "image/svg+xml",
      data: r.src
    }, null, 8, K_)) : (o(), d("img", {
      key: 1,
      ref: "img",
      alt: r.altText,
      style: Ot(r.imageStyle),
      src: r.src
    }, null, 12, Y_))
  ], 6);
}
const J_ = /* @__PURE__ */ E(W_, [["render", Z_], ["__scopeId", "data-v-258037a0"]]);
const X_ = {
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
  beforeMount() {
    this.$sdk.auth.ensureValidToken();
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
}, Q_ = { class: "ux-video-embed-upload" }, eg = ["width", "height", "controls"], tg = ["src", "type"];
function ng(e, t, n, i, s, r) {
  return o(), d("div", {
    class: L(["ux-video", r.className]),
    style: Ot(r.style)
  }, [
    w("div", Q_, [
      w("video", {
        width: r.actualWidth,
        height: r.actualHeight,
        controls: n.controls
      }, [
        w("source", {
          src: r.src,
          type: r.mimetype
        }, null, 8, tg),
        O(" Your browser does not support the video tag. ")
      ], 8, eg)
    ])
  ], 6);
}
const rg = /* @__PURE__ */ E(X_, [["render", ng], ["__scopeId", "data-v-e032a513"]]);
const ig = {
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
}, sg = (e) => (at("data-v-d56ad6e1"), e = e(), lt(), e), ag = { class: "ux-progress" }, lg = /* @__PURE__ */ sg(() => /* @__PURE__ */ w("div", { class: "ux-progress-bg" }, null, -1));
function og(e, t, n, i, s, r) {
  return o(), d("div", ag, [
    lg,
    w("div", {
      class: "ux-progress-fg",
      style: Ot(r.barStyle)
    }, null, 4)
  ]);
}
const ug = /* @__PURE__ */ E(ig, [["render", og], ["__scopeId", "data-v-d56ad6e1"]]);
const dg = {}, cg = { class: "ux-list" };
function fg(e, t) {
  return o(), d("ul", cg, [
    q(e.$slots, "default", {}, void 0, !0)
  ]);
}
const mg = /* @__PURE__ */ E(dg, [["render", fg], ["__scopeId", "data-v-98a2be3e"]]);
const hg = {
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
  computed: {
    element() {
      return this.to || this.href ? "ux-link" : "div";
    }
  }
};
function pg(e, t, n, i, s, r) {
  return o(), k(wt(r.element), {
    class: "ux-list-item",
    to: n.to,
    href: n.href,
    target: n.target,
    disabled: n.disabled
  }, {
    default: h(() => [
      q(e.$slots, "default", {}, void 0, !0)
    ]),
    _: 3
  }, 8, ["to", "href", "target", "disabled"]);
}
const yg = /* @__PURE__ */ E(hg, [["render", pg], ["__scopeId", "data-v-a5af4698"]]);
function _n(e) {
  var t = new Date(e);
  if (t instanceof Date && !isNaN(t))
    return t;
}
const _g = {
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
        return (e = _n(this.model.startDate)) == null ? void 0 : e.toISOString().slice(0, 10);
      },
      set(e) {
        e = _n(e), e ? this.model.startDate = e : this.model.startDate = void 0;
      }
    },
    endDate: {
      get() {
        var e;
        return (e = _n(this.model.endDate)) == null ? void 0 : e.toISOString().slice(0, 10);
      },
      set(e) {
        e = _n(e), _n(e) ? this.model.endDate = e : this.model.endDate = void 0;
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
}, El = (e) => (at("data-v-dc53841d"), e = e(), lt(), e), gg = /* @__PURE__ */ El(() => /* @__PURE__ */ w("label", null, "From Date", -1)), vg = /* @__PURE__ */ El(() => /* @__PURE__ */ w("label", null, "To Date", -1));
function bg(e, t, n, i, s, r) {
  const a = y("flex-cell"), l = y("flex-row");
  return o(), d("div", null, [
    m(l, {
      wrap: "",
      gap: "",
      vcenter: ""
    }, {
      default: h(() => [
        m(a, { class: "cell" }, {
          default: h(() => [
            w("div", null, [
              gg,
              K(w("input", {
                type: "date",
                class: "ux-field-focus ux-text-input-multiple",
                ref: "input",
                "onUpdate:modelValue": t[0] || (t[0] = (u) => r.startDate = u)
              }, null, 512), [
                [pe, r.startDate]
              ])
            ])
          ]),
          _: 1
        }),
        m(a, { class: "cell" }, {
          default: h(() => [
            w("div", null, [
              vg,
              K(w("input", {
                type: "date",
                class: "ux-field-focus ux-text-input-multiple",
                ref: "input",
                "onUpdate:modelValue": t[1] || (t[1] = (u) => r.endDate = u)
              }, null, 512), [
                [pe, r.endDate]
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
const kg = /* @__PURE__ */ E(_g, [["render", bg], ["__scopeId", "data-v-dc53841d"]]);
const xg = {
  props: {
    modelValue: {
      type: [Object, Array]
    }
  },
  components: {
    NativeSelect: Pt
  },
  mixins: [ne],
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
}, wg = (e) => (at("data-v-d61960a4"), e = e(), lt(), e), Sg = {
  key: 0,
  class: "ux-field-title"
}, Og = {
  key: 0,
  class: "ux-required-marker"
}, Tg = {
  key: 1,
  class: "ux-field-description"
}, Eg = { key: 2 }, Vg = { key: 0 }, Cg = { key: 1 }, Ag = { class: "ux-text-wrap" }, Mg = ["placeholder", "onUpdate:modelValue"], Ig = /* @__PURE__ */ wg(() => /* @__PURE__ */ w("option", { value: "" }, "None", -1)), Fg = ["value"], Dg = { class: "ux-text-wrap" }, $g = ["placeholder"];
function Ng(e, t, n, i, s, r) {
  const a = y("ux-button"), l = y("native-select"), u = y("flex-cell"), c = y("ux-icon"), f = y("flex-row");
  return o(), d(S, null, [
    e.showLabel ? (o(), d("label", Sg, [
      O(b(e.label) + " ", 1),
      e.required ? (o(), d("span", Og, "*")) : _("", !0)
    ])) : _("", !0),
    e.showDescription ? (o(), d("div", Tg, b(e.description), 1)) : _("", !0),
    e.multiValue ? (o(), d("div", Eg, [
      (o(!0), d(S, null, $(e.model, (p, g) => (o(), k(f, {
        gap: "",
        vcenter: "",
        wrap: "",
        class: "ux-text-row",
        key: g
      }, {
        default: h(() => [
          m(u, { shrink: "" }, {
            default: h(() => [
              m(l, {
                modelValue: p.countryCode,
                "onUpdate:modelValue": (v) => p.countryCode = v,
                field: r.countryCodeField
              }, {
                default: h(() => [
                  m(a, { tag: "a" }, {
                    default: h(() => [
                      p.countryCode ? (o(), d(S, { key: 1 }, [
                        s.lookup[p.countryCode] ? (o(), d("div", Vg, b(s.lookup[p.countryCode].emoji) + " - " + b(s.lookup[p.countryCode].alpha2), 1)) : (o(), d("div", Cg, "Loading"))
                      ], 64)) : (o(), d(S, { key: 0 }, [
                        O(" Country Code ")
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
          m(u, null, {
            default: h(() => [
              w("div", Ag, [
                K(w("input", {
                  class: "ux-field-focus ux-text-input-multiple",
                  placeholder: r.actualPlaceholder,
                  onFocus: t[0] || (t[0] = (...v) => e.touch && e.touch(...v)),
                  ref_for: !0,
                  ref: "input",
                  onKeydown: t[1] || (t[1] = ge(W((v) => e.add(), ["stop", "prevent"]), ["enter"])),
                  "onUpdate:modelValue": (v) => p.number = v
                }, null, 40, Mg), [
                  [pe, p.number]
                ])
              ])
            ]),
            _: 2
          }, 1024),
          m(u, {
            shrink: "",
            vcenter: ""
          }, {
            default: h(() => [
              e.canRemoveValue ? (o(), k(a, {
                key: 0,
                tag: "a",
                icon: "",
                onClick: (v) => e.remove(p)
              }, {
                default: h(() => [
                  m(c, { icon: "fa-times" })
                ]),
                _: 2
              }, 1032, ["onClick"])) : _("", !0)
            ]),
            _: 2
          }, 1024)
        ]),
        _: 2
      }, 1024))), 128)),
      e.canAddValue ? (o(), k(a, {
        key: 0,
        onClick: t[2] || (t[2] = (p) => e.add())
      }, {
        default: h(() => [
          O(b(e.addLabel) + " ", 1),
          m(c, {
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
      default: h(() => [
        m(u, { shrink: "" }, {
          default: h(() => [
            K(w("select", {
              class: "ux-country-code-select",
              "onUpdate:modelValue": t[3] || (t[3] = (p) => e.model.countryCode = p)
            }, [
              Ig,
              (o(!0), d(S, null, $(s.countryCodes, (p) => (o(), d("option", {
                value: p.value
              }, b(p.title), 9, Fg))), 256))
            ], 512), [
              [St, e.model.countryCode]
            ])
          ]),
          _: 1
        }),
        m(u, null, {
          default: h(() => [
            w("div", Dg, [
              K(w("input", {
                class: "ux-field-focus ux-text-input-multiple",
                placeholder: r.actualPlaceholder,
                onFocus: t[4] || (t[4] = (...p) => e.touch && e.touch(...p)),
                ref: "input",
                onKeydown: t[5] || (t[5] = ge(W((p) => e.add(), ["stop", "prevent"]), ["enter"])),
                "onUpdate:modelValue": t[6] || (t[6] = (p) => e.model.number = p)
              }, null, 40, $g), [
                [pe, e.model.number]
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
const Lg = /* @__PURE__ */ E(xg, [["render", Ng], ["__scopeId", "data-v-d61960a4"]]);
function Pg(e) {
  return e === void 0 || typeof e > "u" || e === null || String(e) === "null" || String(e) === "undefined";
}
const Ug = {
  props: {
    modelValue: {
      // type: [Object, Array],
    }
  },
  mixins: [ne],
  created() {
    this.model = this.model;
  },
  methods: {
    cleanOutput(e) {
      var t = this;
      return Pg(e) ? t.multiValue ? e = [] : e = void 0 : t.multiValue ? e = (e || []).filter(Boolean).map(function(n) {
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
}, jg = {
  key: 0,
  class: "ux-field-title"
}, Rg = {
  key: 0,
  class: "ux-required-marker"
}, Bg = {
  key: 1,
  class: "ux-field-description"
}, zg = {
  key: 2,
  class: "ui-select-button"
}, Hg = ["multiple"], qg = {
  key: 0,
  value: ""
}, Gg = ["value"];
function Wg(e, t, n, i, s, r) {
  const a = y("ux-button");
  return o(), d("div", {
    class: L(["native-select", r.classes])
  }, [
    e.showLabel ? (o(), d("label", jg, [
      O(b(e.label) + " ", 1),
      e.required ? (o(), d("span", Rg, "*")) : _("", !0)
    ])) : _("", !0),
    e.showDescription ? (o(), d("div", Bg, b(e.description), 1)) : _("", !0),
    e.singleValue ? (o(), d("div", zg, [
      q(e.$slots, "default", {}, () => [
        m(a, { tag: "div" }, {
          default: h(() => [
            O(b(r.summary), 1)
          ]),
          _: 1
        })
      ], !0)
    ])) : _("", !0),
    K(w("select", {
      onFocus: t[0] || (t[0] = (...l) => e.touch && e.touch(...l)),
      multiple: e.multiValue,
      "onUpdate:modelValue": t[1] || (t[1] = (l) => e.model = l)
    }, [
      e.singleValue && !e.minimum ? (o(), d("option", qg, "None")) : _("", !0),
      (o(!0), d(S, null, $(r.selectableOptions, (l) => (o(), d("option", {
        value: l.value
      }, b(l.title), 9, Gg))), 256))
    ], 40, Hg), [
      [St, e.model]
    ])
  ], 2);
}
const Kg = /* @__PURE__ */ E(Ug, [["render", Wg], ["__scopeId", "data-v-dc886566"]]);
const Yg = {
  props: {
    item: {
      type: Object,
      required: !0
    }
  },
  data() {
    return {
      model: this.item
    };
  },
  watch: {
    item(e) {
      this.model = e;
    }
  },
  computed: {
    basicType() {
      var e, t;
      return (t = (e = this.model) == null ? void 0 : e.meta) == null ? void 0 : t.type;
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
      return this.model.title || this.model.name || this.model.label || (this.model.firstName ? `${this.model.firstName} ${this.model.lastName}` : "(Title unknown)");
    }
  },
  methods: {
    clicked() {
      this.$sdk.dispatch("item:view", this.model);
    }
  }
};
function Zg(e, t, n, i, s, r) {
  const a = y("ux-image"), l = y("flex-cell"), u = y("flex-row");
  return o(), d("div", {
    class: "content-item",
    onClick: t[0] || (t[0] = (...c) => r.clicked && r.clicked(...c))
  }, [
    m(u, {
      gap: "",
      vcenter: ""
    }, {
      default: h(() => [
        r.hasImage ? (o(), k(l, {
          key: 0,
          shrink: ""
        }, {
          default: h(() => [
            w("div", {
              class: L(["image-wrapper", r.basicType])
            }, [
              m(a, {
                item: s.model,
                width: 100,
                height: 100
              }, null, 8, ["item"])
            ], 2)
          ]),
          _: 1
        })) : _("", !0),
        m(l, { vcenter: "" }, {
          default: h(() => [
            w("div", null, [
              q(e.$slots, "default", {}, () => [
                O(b(r.title), 1)
              ], !0)
            ])
          ]),
          _: 3
        }),
        m(l, { shrink: "" }, {
          default: h(() => [
            q(e.$slots, "actions", {}, void 0, !0)
          ]),
          _: 3
        })
      ]),
      _: 3
    })
  ]);
}
const Vl = /* @__PURE__ */ E(Yg, [["render", Zg], ["__scopeId", "data-v-f1a20da8"]]);
/**!
 * Sortable 1.14.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function Ls(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    t && (i = i.filter(function(s) {
      return Object.getOwnPropertyDescriptor(e, s).enumerable;
    })), n.push.apply(n, i);
  }
  return n;
}
function st(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ls(Object(n), !0).forEach(function(i) {
      Jg(e, i, n[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ls(Object(n)).forEach(function(i) {
      Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(n, i));
    });
  }
  return e;
}
function rr(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? rr = function(t) {
    return typeof t;
  } : rr = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, rr(e);
}
function Jg(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function ft() {
  return ft = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }, ft.apply(this, arguments);
}
function Xg(e, t) {
  if (e == null)
    return {};
  var n = {}, i = Object.keys(e), s, r;
  for (r = 0; r < i.length; r++)
    s = i[r], !(t.indexOf(s) >= 0) && (n[s] = e[s]);
  return n;
}
function Qg(e, t) {
  if (e == null)
    return {};
  var n = Xg(e, t), i, s;
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    for (s = 0; s < r.length; s++)
      i = r[s], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (n[i] = e[i]);
  }
  return n;
}
var ev = "1.14.0";
function dt(e) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(e);
}
var mt = dt(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), $n = dt(/Edge/i), Ps = dt(/firefox/i), On = dt(/safari/i) && !dt(/chrome/i) && !dt(/android/i), Cl = dt(/iP(ad|od|hone)/i), tv = dt(/chrome/i) && dt(/android/i), Al = {
  capture: !1,
  passive: !1
};
function te(e, t, n) {
  e.addEventListener(t, n, !mt && Al);
}
function J(e, t, n) {
  e.removeEventListener(t, n, !mt && Al);
}
function hr(e, t) {
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
function nv(e) {
  return e.host && e !== document && e.host.nodeType ? e.host : e.parentNode;
}
function rt(e, t, n, i) {
  if (e) {
    n = n || document;
    do {
      if (t != null && (t[0] === ">" ? e.parentNode === n && hr(e, t) : hr(e, t)) || i && e === n)
        return e;
      if (e === n)
        break;
    } while (e = nv(e));
  }
  return null;
}
var Us = /\s+/g;
function Ue(e, t, n) {
  if (e && t)
    if (e.classList)
      e.classList[n ? "add" : "remove"](t);
    else {
      var i = (" " + e.className + " ").replace(Us, " ").replace(" " + t + " ", " ");
      e.className = (i + (n ? " " + t : "")).replace(Us, " ");
    }
}
function j(e, t, n) {
  var i = e && e.style;
  if (i) {
    if (n === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? n = document.defaultView.getComputedStyle(e, "") : e.currentStyle && (n = e.currentStyle), t === void 0 ? n : n[t];
    !(t in i) && t.indexOf("webkit") === -1 && (t = "-webkit-" + t), i[t] = n + (typeof n == "string" ? "" : "px");
  }
}
function Jt(e, t) {
  var n = "";
  if (typeof e == "string")
    n = e;
  else
    do {
      var i = j(e, "transform");
      i && i !== "none" && (n = i + " " + n);
    } while (!t && (e = e.parentNode));
  var s = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return s && new s(n);
}
function Ml(e, t, n) {
  if (e) {
    var i = e.getElementsByTagName(t), s = 0, r = i.length;
    if (n)
      for (; s < r; s++)
        n(i[s], s);
    return i;
  }
  return [];
}
function it() {
  var e = document.scrollingElement;
  return e || document.documentElement;
}
function be(e, t, n, i, s) {
  if (!(!e.getBoundingClientRect && e !== window)) {
    var r, a, l, u, c, f, p;
    if (e !== window && e.parentNode && e !== it() ? (r = e.getBoundingClientRect(), a = r.top, l = r.left, u = r.bottom, c = r.right, f = r.height, p = r.width) : (a = 0, l = 0, u = window.innerHeight, c = window.innerWidth, f = window.innerHeight, p = window.innerWidth), (t || n) && e !== window && (s = s || e.parentNode, !mt))
      do
        if (s && s.getBoundingClientRect && (j(s, "transform") !== "none" || n && j(s, "position") !== "static")) {
          var g = s.getBoundingClientRect();
          a -= g.top + parseInt(j(s, "border-top-width")), l -= g.left + parseInt(j(s, "border-left-width")), u = a + r.height, c = l + r.width;
          break;
        }
      while (s = s.parentNode);
    if (i && e !== window) {
      var v = Jt(s || e), x = v && v.a, T = v && v.d;
      v && (a /= T, l /= x, p /= x, f /= T, u = a + f, c = l + p);
    }
    return {
      top: a,
      left: l,
      bottom: u,
      right: c,
      width: p,
      height: f
    };
  }
}
function js(e, t, n) {
  for (var i = xt(e, !0), s = be(e)[t]; i; ) {
    var r = be(i)[n], a = void 0;
    if (n === "top" || n === "left" ? a = s >= r : a = s <= r, !a)
      return i;
    if (i === it())
      break;
    i = xt(i, !1);
  }
  return !1;
}
function en(e, t, n, i) {
  for (var s = 0, r = 0, a = e.children; r < a.length; ) {
    if (a[r].style.display !== "none" && a[r] !== R.ghost && (i || a[r] !== R.dragged) && rt(a[r], n.draggable, e, !1)) {
      if (s === t)
        return a[r];
      s++;
    }
    r++;
  }
  return null;
}
function ji(e, t) {
  for (var n = e.lastElementChild; n && (n === R.ghost || j(n, "display") === "none" || t && !hr(n, t)); )
    n = n.previousElementSibling;
  return n || null;
}
function He(e, t) {
  var n = 0;
  if (!e || !e.parentNode)
    return -1;
  for (; e = e.previousElementSibling; )
    e.nodeName.toUpperCase() !== "TEMPLATE" && e !== R.clone && (!t || hr(e, t)) && n++;
  return n;
}
function Rs(e) {
  var t = 0, n = 0, i = it();
  if (e)
    do {
      var s = Jt(e), r = s.a, a = s.d;
      t += e.scrollLeft * r, n += e.scrollTop * a;
    } while (e !== i && (e = e.parentNode));
  return [t, n];
}
function rv(e, t) {
  for (var n in e)
    if (e.hasOwnProperty(n)) {
      for (var i in t)
        if (t.hasOwnProperty(i) && t[i] === e[n][i])
          return Number(n);
    }
  return -1;
}
function xt(e, t) {
  if (!e || !e.getBoundingClientRect)
    return it();
  var n = e, i = !1;
  do
    if (n.clientWidth < n.scrollWidth || n.clientHeight < n.scrollHeight) {
      var s = j(n);
      if (n.clientWidth < n.scrollWidth && (s.overflowX == "auto" || s.overflowX == "scroll") || n.clientHeight < n.scrollHeight && (s.overflowY == "auto" || s.overflowY == "scroll")) {
        if (!n.getBoundingClientRect || n === document.body)
          return it();
        if (i || t)
          return n;
        i = !0;
      }
    }
  while (n = n.parentNode);
  return it();
}
function iv(e, t) {
  if (e && t)
    for (var n in t)
      t.hasOwnProperty(n) && (e[n] = t[n]);
  return e;
}
function Gr(e, t) {
  return Math.round(e.top) === Math.round(t.top) && Math.round(e.left) === Math.round(t.left) && Math.round(e.height) === Math.round(t.height) && Math.round(e.width) === Math.round(t.width);
}
var Tn;
function Il(e, t) {
  return function() {
    if (!Tn) {
      var n = arguments, i = this;
      n.length === 1 ? e.call(i, n[0]) : e.apply(i, n), Tn = setTimeout(function() {
        Tn = void 0;
      }, t);
    }
  };
}
function sv() {
  clearTimeout(Tn), Tn = void 0;
}
function Fl(e, t, n) {
  e.scrollLeft += t, e.scrollTop += n;
}
function Dl(e) {
  var t = window.Polymer, n = window.jQuery || window.Zepto;
  return t && t.dom ? t.dom(e).cloneNode(!0) : n ? n(e).clone(!0)[0] : e.cloneNode(!0);
}
var Re = "Sortable" + new Date().getTime();
function av() {
  var e = [], t;
  return {
    captureAnimationState: function() {
      if (e = [], !!this.options.animation) {
        var i = [].slice.call(this.el.children);
        i.forEach(function(s) {
          if (!(j(s, "display") === "none" || s === R.ghost)) {
            e.push({
              target: s,
              rect: be(s)
            });
            var r = st({}, e[e.length - 1].rect);
            if (s.thisAnimationDuration) {
              var a = Jt(s, !0);
              a && (r.top -= a.f, r.left -= a.e);
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
      e.splice(rv(e, {
        target: i
      }), 1);
    },
    animateAll: function(i) {
      var s = this;
      if (!this.options.animation) {
        clearTimeout(t), typeof i == "function" && i();
        return;
      }
      var r = !1, a = 0;
      e.forEach(function(l) {
        var u = 0, c = l.target, f = c.fromRect, p = be(c), g = c.prevFromRect, v = c.prevToRect, x = l.rect, T = Jt(c, !0);
        T && (p.top -= T.f, p.left -= T.e), c.toRect = p, c.thisAnimationDuration && Gr(g, p) && !Gr(f, p) && // Make sure animatingRect is on line between toRect & fromRect
        (x.top - p.top) / (x.left - p.left) === (f.top - p.top) / (f.left - p.left) && (u = ov(x, g, v, s.options)), Gr(p, f) || (c.prevFromRect = f, c.prevToRect = p, u || (u = s.options.animation), s.animate(c, x, p, u)), u && (r = !0, a = Math.max(a, u), clearTimeout(c.animationResetTimer), c.animationResetTimer = setTimeout(function() {
          c.animationTime = 0, c.prevFromRect = null, c.fromRect = null, c.prevToRect = null, c.thisAnimationDuration = null;
        }, u), c.thisAnimationDuration = u);
      }), clearTimeout(t), r ? t = setTimeout(function() {
        typeof i == "function" && i();
      }, a) : typeof i == "function" && i(), e = [];
    },
    animate: function(i, s, r, a) {
      if (a) {
        j(i, "transition", ""), j(i, "transform", "");
        var l = Jt(this.el), u = l && l.a, c = l && l.d, f = (s.left - r.left) / (u || 1), p = (s.top - r.top) / (c || 1);
        i.animatingX = !!f, i.animatingY = !!p, j(i, "transform", "translate3d(" + f + "px," + p + "px,0)"), this.forRepaintDummy = lv(i), j(i, "transition", "transform " + a + "ms" + (this.options.easing ? " " + this.options.easing : "")), j(i, "transform", "translate3d(0,0,0)"), typeof i.animated == "number" && clearTimeout(i.animated), i.animated = setTimeout(function() {
          j(i, "transition", ""), j(i, "transform", ""), i.animated = !1, i.animatingX = !1, i.animatingY = !1;
        }, a);
      }
    }
  };
}
function lv(e) {
  return e.offsetWidth;
}
function ov(e, t, n, i) {
  return Math.sqrt(Math.pow(t.top - e.top, 2) + Math.pow(t.left - e.left, 2)) / Math.sqrt(Math.pow(t.top - n.top, 2) + Math.pow(t.left - n.left, 2)) * i.animation;
}
var Ht = [], Wr = {
  initializeByDefault: !0
}, Nn = {
  mount: function(t) {
    for (var n in Wr)
      Wr.hasOwnProperty(n) && !(n in t) && (t[n] = Wr[n]);
    Ht.forEach(function(i) {
      if (i.pluginName === t.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(t.pluginName, " more than once");
    }), Ht.push(t);
  },
  pluginEvent: function(t, n, i) {
    var s = this;
    this.eventCanceled = !1, i.cancel = function() {
      s.eventCanceled = !0;
    };
    var r = t + "Global";
    Ht.forEach(function(a) {
      n[a.pluginName] && (n[a.pluginName][r] && n[a.pluginName][r](st({
        sortable: n
      }, i)), n.options[a.pluginName] && n[a.pluginName][t] && n[a.pluginName][t](st({
        sortable: n
      }, i)));
    });
  },
  initializePlugins: function(t, n, i, s) {
    Ht.forEach(function(l) {
      var u = l.pluginName;
      if (!(!t.options[u] && !l.initializeByDefault)) {
        var c = new l(t, n, t.options);
        c.sortable = t, c.options = t.options, t[u] = c, ft(i, c.defaults);
      }
    });
    for (var r in t.options)
      if (t.options.hasOwnProperty(r)) {
        var a = this.modifyOption(t, r, t.options[r]);
        typeof a < "u" && (t.options[r] = a);
      }
  },
  getEventProperties: function(t, n) {
    var i = {};
    return Ht.forEach(function(s) {
      typeof s.eventProperties == "function" && ft(i, s.eventProperties.call(n[s.pluginName], t));
    }), i;
  },
  modifyOption: function(t, n, i) {
    var s;
    return Ht.forEach(function(r) {
      t[r.pluginName] && r.optionListeners && typeof r.optionListeners[n] == "function" && (s = r.optionListeners[n].call(t[r.pluginName], i));
    }), s;
  }
};
function uv(e) {
  var t = e.sortable, n = e.rootEl, i = e.name, s = e.targetEl, r = e.cloneEl, a = e.toEl, l = e.fromEl, u = e.oldIndex, c = e.newIndex, f = e.oldDraggableIndex, p = e.newDraggableIndex, g = e.originalEvent, v = e.putSortable, x = e.extraEventProperties;
  if (t = t || n && n[Re], !!t) {
    var T, A = t.options, G = "on" + i.charAt(0).toUpperCase() + i.substr(1);
    window.CustomEvent && !mt && !$n ? T = new CustomEvent(i, {
      bubbles: !0,
      cancelable: !0
    }) : (T = document.createEvent("Event"), T.initEvent(i, !0, !0)), T.to = a || n, T.from = l || n, T.item = s || n, T.clone = r, T.oldIndex = u, T.newIndex = c, T.oldDraggableIndex = f, T.newDraggableIndex = p, T.originalEvent = g, T.pullMode = v ? v.lastPutMode : void 0;
    var Q = st(st({}, x), Nn.getEventProperties(i, t));
    for (var re in Q)
      T[re] = Q[re];
    n && n.dispatchEvent(T), A[G] && A[G].call(t, T);
  }
}
var dv = ["evt"], Ne = function(t, n) {
  var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, s = i.evt, r = Qg(i, dv);
  Nn.pluginEvent.bind(R)(t, n, st({
    dragEl: M,
    parentEl: fe,
    ghostEl: H,
    rootEl: de,
    nextEl: Ft,
    lastDownEl: ir,
    cloneEl: me,
    cloneHidden: kt,
    dragStarted: kn,
    putSortable: we,
    activeSortable: R.active,
    originalEvent: s,
    oldIndex: Kt,
    oldDraggableIndex: En,
    newIndex: je,
    newDraggableIndex: vt,
    hideGhostForTarget: Pl,
    unhideGhostForTarget: Ul,
    cloneNowHidden: function() {
      kt = !0;
    },
    cloneNowShown: function() {
      kt = !1;
    },
    dispatchSortableEvent: function(l) {
      Ie({
        sortable: n,
        name: l,
        originalEvent: s
      });
    }
  }, r));
};
function Ie(e) {
  uv(st({
    putSortable: we,
    cloneEl: me,
    targetEl: M,
    rootEl: de,
    oldIndex: Kt,
    oldDraggableIndex: En,
    newIndex: je,
    newDraggableIndex: vt
  }, e));
}
var M, fe, H, de, Ft, ir, me, kt, Kt, je, En, vt, Zn, we, Gt = !1, pr = !1, yr = [], At, Ze, Kr, Yr, Bs, zs, kn, qt, Vn, Cn = !1, Jn = !1, sr, Ve, Zr = [], vi = !1, _r = [], Ir = typeof document < "u", Xn = Cl, Hs = $n || mt ? "cssFloat" : "float", cv = Ir && !tv && !Cl && "draggable" in document.createElement("div"), $l = function() {
  if (Ir) {
    if (mt)
      return !1;
    var e = document.createElement("x");
    return e.style.cssText = "pointer-events:auto", e.style.pointerEvents === "auto";
  }
}(), Nl = function(t, n) {
  var i = j(t), s = parseInt(i.width) - parseInt(i.paddingLeft) - parseInt(i.paddingRight) - parseInt(i.borderLeftWidth) - parseInt(i.borderRightWidth), r = en(t, 0, n), a = en(t, 1, n), l = r && j(r), u = a && j(a), c = l && parseInt(l.marginLeft) + parseInt(l.marginRight) + be(r).width, f = u && parseInt(u.marginLeft) + parseInt(u.marginRight) + be(a).width;
  if (i.display === "flex")
    return i.flexDirection === "column" || i.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (i.display === "grid")
    return i.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (r && l.float && l.float !== "none") {
    var p = l.float === "left" ? "left" : "right";
    return a && (u.clear === "both" || u.clear === p) ? "vertical" : "horizontal";
  }
  return r && (l.display === "block" || l.display === "flex" || l.display === "table" || l.display === "grid" || c >= s && i[Hs] === "none" || a && i[Hs] === "none" && c + f > s) ? "vertical" : "horizontal";
}, fv = function(t, n, i) {
  var s = i ? t.left : t.top, r = i ? t.right : t.bottom, a = i ? t.width : t.height, l = i ? n.left : n.top, u = i ? n.right : n.bottom, c = i ? n.width : n.height;
  return s === l || r === u || s + a / 2 === l + c / 2;
}, mv = function(t, n) {
  var i;
  return yr.some(function(s) {
    var r = s[Re].options.emptyInsertThreshold;
    if (!(!r || ji(s))) {
      var a = be(s), l = t >= a.left - r && t <= a.right + r, u = n >= a.top - r && n <= a.bottom + r;
      if (l && u)
        return i = s;
    }
  }), i;
}, Ll = function(t) {
  function n(r, a) {
    return function(l, u, c, f) {
      var p = l.options.group.name && u.options.group.name && l.options.group.name === u.options.group.name;
      if (r == null && (a || p))
        return !0;
      if (r == null || r === !1)
        return !1;
      if (a && r === "clone")
        return r;
      if (typeof r == "function")
        return n(r(l, u, c, f), a)(l, u, c, f);
      var g = (a ? l : u).options.group.name;
      return r === !0 || typeof r == "string" && r === g || r.join && r.indexOf(g) > -1;
    };
  }
  var i = {}, s = t.group;
  (!s || rr(s) != "object") && (s = {
    name: s
  }), i.name = s.name, i.checkPull = n(s.pull, !0), i.checkPut = n(s.put), i.revertClone = s.revertClone, t.group = i;
}, Pl = function() {
  !$l && H && j(H, "display", "none");
}, Ul = function() {
  !$l && H && j(H, "display", "");
};
Ir && document.addEventListener("click", function(e) {
  if (pr)
    return e.preventDefault(), e.stopPropagation && e.stopPropagation(), e.stopImmediatePropagation && e.stopImmediatePropagation(), pr = !1, !1;
}, !0);
var Mt = function(t) {
  if (M) {
    t = t.touches ? t.touches[0] : t;
    var n = mv(t.clientX, t.clientY);
    if (n) {
      var i = {};
      for (var s in t)
        t.hasOwnProperty(s) && (i[s] = t[s]);
      i.target = i.rootEl = n, i.preventDefault = void 0, i.stopPropagation = void 0, n[Re]._onDragOver(i);
    }
  }
}, hv = function(t) {
  M && M.parentNode[Re]._isOutsideThisEl(t.target);
};
function R(e, t) {
  if (!(e && e.nodeType && e.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));
  this.el = e, this.options = t = ft({}, t), e[Re] = this;
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
      return Nl(e, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(a, l) {
      a.setData("Text", l.textContent);
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
    supportPointer: R.supportPointer !== !1 && "PointerEvent" in window && !On,
    emptyInsertThreshold: 5
  };
  Nn.initializePlugins(this, e, n);
  for (var i in n)
    !(i in t) && (t[i] = n[i]);
  Ll(t);
  for (var s in this)
    s.charAt(0) === "_" && typeof this[s] == "function" && (this[s] = this[s].bind(this));
  this.nativeDraggable = t.forceFallback ? !1 : cv, this.nativeDraggable && (this.options.touchStartThreshold = 1), t.supportPointer ? te(e, "pointerdown", this._onTapStart) : (te(e, "mousedown", this._onTapStart), te(e, "touchstart", this._onTapStart)), this.nativeDraggable && (te(e, "dragover", this), te(e, "dragenter", this)), yr.push(this.el), t.store && t.store.get && this.sort(t.store.get(this) || []), ft(this, av());
}
R.prototype = /** @lends Sortable.prototype */
{
  constructor: R,
  _isOutsideThisEl: function(t) {
    !this.el.contains(t) && t !== this.el && (qt = null);
  },
  _getDirection: function(t, n) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, t, n, M) : this.options.direction;
  },
  _onTapStart: function(t) {
    if (t.cancelable) {
      var n = this, i = this.el, s = this.options, r = s.preventOnFilter, a = t.type, l = t.touches && t.touches[0] || t.pointerType && t.pointerType === "touch" && t, u = (l || t).target, c = t.target.shadowRoot && (t.path && t.path[0] || t.composedPath && t.composedPath()[0]) || u, f = s.filter;
      if (xv(i), !M && !(/mousedown|pointerdown/.test(a) && t.button !== 0 || s.disabled) && !c.isContentEditable && !(!this.nativeDraggable && On && u && u.tagName.toUpperCase() === "SELECT") && (u = rt(u, s.draggable, i, !1), !(u && u.animated) && ir !== u)) {
        if (Kt = He(u), En = He(u, s.draggable), typeof f == "function") {
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
          if (p = rt(c, p.trim(), i, !1), p)
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
        s.handle && !rt(c, s.handle, i, !1) || this._prepareDragStart(t, l, u);
      }
    }
  },
  _prepareDragStart: function(t, n, i) {
    var s = this, r = s.el, a = s.options, l = r.ownerDocument, u;
    if (i && !M && i.parentNode === r) {
      var c = be(i);
      if (de = r, M = i, fe = M.parentNode, Ft = M.nextSibling, ir = i, Zn = a.group, R.dragged = M, At = {
        target: M,
        clientX: (n || t).clientX,
        clientY: (n || t).clientY
      }, Bs = At.clientX - c.left, zs = At.clientY - c.top, this._lastX = (n || t).clientX, this._lastY = (n || t).clientY, M.style["will-change"] = "all", u = function() {
        if (Ne("delayEnded", s, {
          evt: t
        }), R.eventCanceled) {
          s._onDrop();
          return;
        }
        s._disableDelayedDragEvents(), !Ps && s.nativeDraggable && (M.draggable = !0), s._triggerDragStart(t, n), Ie({
          sortable: s,
          name: "choose",
          originalEvent: t
        }), Ue(M, a.chosenClass, !0);
      }, a.ignore.split(",").forEach(function(f) {
        Ml(M, f.trim(), Jr);
      }), te(l, "dragover", Mt), te(l, "mousemove", Mt), te(l, "touchmove", Mt), te(l, "mouseup", s._onDrop), te(l, "touchend", s._onDrop), te(l, "touchcancel", s._onDrop), Ps && this.nativeDraggable && (this.options.touchStartThreshold = 4, M.draggable = !0), Ne("delayStart", this, {
        evt: t
      }), a.delay && (!a.delayOnTouchOnly || n) && (!this.nativeDraggable || !($n || mt))) {
        if (R.eventCanceled) {
          this._onDrop();
          return;
        }
        te(l, "mouseup", s._disableDelayedDrag), te(l, "touchend", s._disableDelayedDrag), te(l, "touchcancel", s._disableDelayedDrag), te(l, "mousemove", s._delayedDragTouchMoveHandler), te(l, "touchmove", s._delayedDragTouchMoveHandler), a.supportPointer && te(l, "pointermove", s._delayedDragTouchMoveHandler), s._dragStartTimer = setTimeout(u, a.delay);
      } else
        u();
    }
  },
  _delayedDragTouchMoveHandler: function(t) {
    var n = t.touches ? t.touches[0] : t;
    Math.max(Math.abs(n.clientX - this._lastX), Math.abs(n.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    M && Jr(M), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var t = this.el.ownerDocument;
    J(t, "mouseup", this._disableDelayedDrag), J(t, "touchend", this._disableDelayedDrag), J(t, "touchcancel", this._disableDelayedDrag), J(t, "mousemove", this._delayedDragTouchMoveHandler), J(t, "touchmove", this._delayedDragTouchMoveHandler), J(t, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(t, n) {
    n = n || t.pointerType == "touch" && t, !this.nativeDraggable || n ? this.options.supportPointer ? te(document, "pointermove", this._onTouchMove) : n ? te(document, "touchmove", this._onTouchMove) : te(document, "mousemove", this._onTouchMove) : (te(M, "dragend", this), te(de, "dragstart", this._onDragStart));
    try {
      document.selection ? ar(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(t, n) {
    if (Gt = !1, de && M) {
      Ne("dragStarted", this, {
        evt: n
      }), this.nativeDraggable && te(document, "dragover", hv);
      var i = this.options;
      !t && Ue(M, i.dragClass, !1), Ue(M, i.ghostClass, !0), R.active = this, t && this._appendGhost(), Ie({
        sortable: this,
        name: "start",
        originalEvent: n
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (Ze) {
      this._lastX = Ze.clientX, this._lastY = Ze.clientY, Pl();
      for (var t = document.elementFromPoint(Ze.clientX, Ze.clientY), n = t; t && t.shadowRoot && (t = t.shadowRoot.elementFromPoint(Ze.clientX, Ze.clientY), t !== n); )
        n = t;
      if (M.parentNode[Re]._isOutsideThisEl(t), n)
        do {
          if (n[Re]) {
            var i = void 0;
            if (i = n[Re]._onDragOver({
              clientX: Ze.clientX,
              clientY: Ze.clientY,
              target: t,
              rootEl: n
            }), i && !this.options.dragoverBubble)
              break;
          }
          t = n;
        } while (n = n.parentNode);
      Ul();
    }
  },
  _onTouchMove: function(t) {
    if (At) {
      var n = this.options, i = n.fallbackTolerance, s = n.fallbackOffset, r = t.touches ? t.touches[0] : t, a = H && Jt(H, !0), l = H && a && a.a, u = H && a && a.d, c = Xn && Ve && Rs(Ve), f = (r.clientX - At.clientX + s.x) / (l || 1) + (c ? c[0] - Zr[0] : 0) / (l || 1), p = (r.clientY - At.clientY + s.y) / (u || 1) + (c ? c[1] - Zr[1] : 0) / (u || 1);
      if (!R.active && !Gt) {
        if (i && Math.max(Math.abs(r.clientX - this._lastX), Math.abs(r.clientY - this._lastY)) < i)
          return;
        this._onDragStart(t, !0);
      }
      if (H) {
        a ? (a.e += f - (Kr || 0), a.f += p - (Yr || 0)) : a = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: f,
          f: p
        };
        var g = "matrix(".concat(a.a, ",").concat(a.b, ",").concat(a.c, ",").concat(a.d, ",").concat(a.e, ",").concat(a.f, ")");
        j(H, "webkitTransform", g), j(H, "mozTransform", g), j(H, "msTransform", g), j(H, "transform", g), Kr = f, Yr = p, Ze = r;
      }
      t.cancelable && t.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!H) {
      var t = this.options.fallbackOnBody ? document.body : de, n = be(M, !0, Xn, !0, t), i = this.options;
      if (Xn) {
        for (Ve = t; j(Ve, "position") === "static" && j(Ve, "transform") === "none" && Ve !== document; )
          Ve = Ve.parentNode;
        Ve !== document.body && Ve !== document.documentElement ? (Ve === document && (Ve = it()), n.top += Ve.scrollTop, n.left += Ve.scrollLeft) : Ve = it(), Zr = Rs(Ve);
      }
      H = M.cloneNode(!0), Ue(H, i.ghostClass, !1), Ue(H, i.fallbackClass, !0), Ue(H, i.dragClass, !0), j(H, "transition", ""), j(H, "transform", ""), j(H, "box-sizing", "border-box"), j(H, "margin", 0), j(H, "top", n.top), j(H, "left", n.left), j(H, "width", n.width), j(H, "height", n.height), j(H, "opacity", "0.8"), j(H, "position", Xn ? "absolute" : "fixed"), j(H, "zIndex", "100000"), j(H, "pointerEvents", "none"), R.ghost = H, t.appendChild(H), j(H, "transform-origin", Bs / parseInt(H.style.width) * 100 + "% " + zs / parseInt(H.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(t, n) {
    var i = this, s = t.dataTransfer, r = i.options;
    if (Ne("dragStart", this, {
      evt: t
    }), R.eventCanceled) {
      this._onDrop();
      return;
    }
    Ne("setupClone", this), R.eventCanceled || (me = Dl(M), me.draggable = !1, me.style["will-change"] = "", this._hideClone(), Ue(me, this.options.chosenClass, !1), R.clone = me), i.cloneId = ar(function() {
      Ne("clone", i), !R.eventCanceled && (i.options.removeCloneOnHide || de.insertBefore(me, M), i._hideClone(), Ie({
        sortable: i,
        name: "clone"
      }));
    }), !n && Ue(M, r.dragClass, !0), n ? (pr = !0, i._loopId = setInterval(i._emulateDragOver, 50)) : (J(document, "mouseup", i._onDrop), J(document, "touchend", i._onDrop), J(document, "touchcancel", i._onDrop), s && (s.effectAllowed = "move", r.setData && r.setData.call(i, s, M)), te(document, "drop", i), j(M, "transform", "translateZ(0)")), Gt = !0, i._dragStartId = ar(i._dragStarted.bind(i, n, t)), te(document, "selectstart", i), kn = !0, On && j(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(t) {
    var n = this.el, i = t.target, s, r, a, l = this.options, u = l.group, c = R.active, f = Zn === u, p = l.sort, g = we || c, v, x = this, T = !1;
    if (vi)
      return;
    function A(et, Ut) {
      Ne(et, x, st({
        evt: t,
        isOwner: f,
        axis: v ? "vertical" : "horizontal",
        revert: a,
        dragRect: s,
        targetRect: r,
        canSort: p,
        fromSortable: g,
        target: i,
        completed: Q,
        onMove: function(pt, dn) {
          return Qn(de, n, M, s, pt, be(pt), t, dn);
        },
        changed: re
      }, Ut));
    }
    function G() {
      A("dragOverAnimationCapture"), x.captureAnimationState(), x !== g && g.captureAnimationState();
    }
    function Q(et) {
      return A("dragOverCompleted", {
        insertion: et
      }), et && (f ? c._hideClone() : c._showClone(x), x !== g && (Ue(M, we ? we.options.ghostClass : c.options.ghostClass, !1), Ue(M, l.ghostClass, !0)), we !== x && x !== R.active ? we = x : x === R.active && we && (we = null), g === x && (x._ignoreWhileAnimating = i), x.animateAll(function() {
        A("dragOverAnimationComplete"), x._ignoreWhileAnimating = null;
      }), x !== g && (g.animateAll(), g._ignoreWhileAnimating = null)), (i === M && !M.animated || i === n && !i.animated) && (qt = null), !l.dragoverBubble && !t.rootEl && i !== document && (M.parentNode[Re]._isOutsideThisEl(t.target), !et && Mt(t)), !l.dragoverBubble && t.stopPropagation && t.stopPropagation(), T = !0;
    }
    function re() {
      je = He(M), vt = He(M, l.draggable), Ie({
        sortable: x,
        name: "change",
        toEl: n,
        newIndex: je,
        newDraggableIndex: vt,
        originalEvent: t
      });
    }
    if (t.preventDefault !== void 0 && t.cancelable && t.preventDefault(), i = rt(i, l.draggable, n, !0), A("dragOver"), R.eventCanceled)
      return T;
    if (M.contains(t.target) || i.animated && i.animatingX && i.animatingY || x._ignoreWhileAnimating === i)
      return Q(!1);
    if (pr = !1, c && !l.disabled && (f ? p || (a = fe !== de) : we === this || (this.lastPutMode = Zn.checkPull(this, c, M, t)) && u.checkPut(this, c, M, t))) {
      if (v = this._getDirection(t, i) === "vertical", s = be(M), A("dragOverValid"), R.eventCanceled)
        return T;
      if (a)
        return fe = de, G(), this._hideClone(), A("revert"), R.eventCanceled || (Ft ? de.insertBefore(M, Ft) : de.appendChild(M)), Q(!0);
      var le = ji(n, l.draggable);
      if (!le || gv(t, v, this) && !le.animated) {
        if (le === M)
          return Q(!1);
        if (le && n === t.target && (i = le), i && (r = be(i)), Qn(de, n, M, s, i, r, t, !!i) !== !1)
          return G(), n.appendChild(M), fe = n, re(), Q(!0);
      } else if (le && _v(t, v, this)) {
        var oe = en(n, 0, l, !0);
        if (oe === M)
          return Q(!1);
        if (i = oe, r = be(i), Qn(de, n, M, s, i, r, t, !1) !== !1)
          return G(), n.insertBefore(M, oe), fe = n, re(), Q(!0);
      } else if (i.parentNode === n) {
        r = be(i);
        var B = 0, D, se = M.parentNode !== n, z = !fv(M.animated && M.toRect || s, i.animated && i.toRect || r, v), Ce = v ? "top" : "left", ke = js(i, "top", "top") || js(M, "top", "top"), xe = ke ? ke.scrollTop : void 0;
        qt !== i && (D = r[Ce], Cn = !1, Jn = !z && l.invertSwap || se), B = vv(t, i, r, v, z ? 1 : l.swapThreshold, l.invertedSwapThreshold == null ? l.swapThreshold : l.invertedSwapThreshold, Jn, qt === i);
        var Oe;
        if (B !== 0) {
          var Te = He(M);
          do
            Te -= B, Oe = fe.children[Te];
          while (Oe && (j(Oe, "display") === "none" || Oe === H));
        }
        if (B === 0 || Oe === i)
          return Q(!1);
        qt = i, Vn = B;
        var De = i.nextElementSibling, Ee = !1;
        Ee = B === 1;
        var ht = Qn(de, n, M, s, i, r, t, Ee);
        if (ht !== !1)
          return (ht === 1 || ht === -1) && (Ee = ht === 1), vi = !0, setTimeout(yv, 30), G(), Ee && !De ? n.appendChild(M) : i.parentNode.insertBefore(M, Ee ? De : i), ke && Fl(ke, 0, xe - ke.scrollTop), fe = M.parentNode, D !== void 0 && !Jn && (sr = Math.abs(D - be(i)[Ce])), re(), Q(!0);
      }
      if (n.contains(M))
        return Q(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    J(document, "mousemove", this._onTouchMove), J(document, "touchmove", this._onTouchMove), J(document, "pointermove", this._onTouchMove), J(document, "dragover", Mt), J(document, "mousemove", Mt), J(document, "touchmove", Mt);
  },
  _offUpEvents: function() {
    var t = this.el.ownerDocument;
    J(t, "mouseup", this._onDrop), J(t, "touchend", this._onDrop), J(t, "pointerup", this._onDrop), J(t, "touchcancel", this._onDrop), J(document, "selectstart", this);
  },
  _onDrop: function(t) {
    var n = this.el, i = this.options;
    if (je = He(M), vt = He(M, i.draggable), Ne("drop", this, {
      evt: t
    }), fe = M && M.parentNode, je = He(M), vt = He(M, i.draggable), R.eventCanceled) {
      this._nulling();
      return;
    }
    Gt = !1, Jn = !1, Cn = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), bi(this.cloneId), bi(this._dragStartId), this.nativeDraggable && (J(document, "drop", this), J(n, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), On && j(document.body, "user-select", ""), j(M, "transform", ""), t && (kn && (t.cancelable && t.preventDefault(), !i.dropBubble && t.stopPropagation()), H && H.parentNode && H.parentNode.removeChild(H), (de === fe || we && we.lastPutMode !== "clone") && me && me.parentNode && me.parentNode.removeChild(me), M && (this.nativeDraggable && J(M, "dragend", this), Jr(M), M.style["will-change"] = "", kn && !Gt && Ue(M, we ? we.options.ghostClass : this.options.ghostClass, !1), Ue(M, this.options.chosenClass, !1), Ie({
      sortable: this,
      name: "unchoose",
      toEl: fe,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: t
    }), de !== fe ? (je >= 0 && (Ie({
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
    })), we && we.save()) : je !== Kt && je >= 0 && (Ie({
      sortable: this,
      name: "update",
      toEl: fe,
      originalEvent: t
    }), Ie({
      sortable: this,
      name: "sort",
      toEl: fe,
      originalEvent: t
    })), R.active && ((je == null || je === -1) && (je = Kt, vt = En), Ie({
      sortable: this,
      name: "end",
      toEl: fe,
      originalEvent: t
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    Ne("nulling", this), de = M = fe = H = Ft = me = ir = kt = At = Ze = kn = je = vt = Kt = En = qt = Vn = we = Zn = R.dragged = R.ghost = R.clone = R.active = null, _r.forEach(function(t) {
      t.checked = !0;
    }), _r.length = Kr = Yr = 0;
  },
  handleEvent: function(t) {
    switch (t.type) {
      case "drop":
      case "dragend":
        this._onDrop(t);
        break;
      case "dragenter":
      case "dragover":
        M && (this._onDragOver(t), pv(t));
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
    for (var t = [], n, i = this.el.children, s = 0, r = i.length, a = this.options; s < r; s++)
      n = i[s], rt(n, a.draggable, this.el, !1) && t.push(n.getAttribute(a.dataIdAttr) || kv(n));
    return t;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(t, n) {
    var i = {}, s = this.el;
    this.toArray().forEach(function(r, a) {
      var l = s.children[a];
      rt(l, this.options.draggable, s, !1) && (i[r] = l);
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
    return rt(t, n || this.options.draggable, this.el, !1);
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
    var s = Nn.modifyOption(this, t, n);
    typeof s < "u" ? i[t] = s : i[t] = n, t === "group" && Ll(i);
  },
  /**
   * Destroy
   */
  destroy: function() {
    Ne("destroy", this);
    var t = this.el;
    t[Re] = null, J(t, "mousedown", this._onTapStart), J(t, "touchstart", this._onTapStart), J(t, "pointerdown", this._onTapStart), this.nativeDraggable && (J(t, "dragover", this), J(t, "dragenter", this)), Array.prototype.forEach.call(t.querySelectorAll("[draggable]"), function(n) {
      n.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), yr.splice(yr.indexOf(this.el), 1), this.el = t = null;
  },
  _hideClone: function() {
    if (!kt) {
      if (Ne("hideClone", this), R.eventCanceled)
        return;
      j(me, "display", "none"), this.options.removeCloneOnHide && me.parentNode && me.parentNode.removeChild(me), kt = !0;
    }
  },
  _showClone: function(t) {
    if (t.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (kt) {
      if (Ne("showClone", this), R.eventCanceled)
        return;
      M.parentNode == de && !this.options.group.revertClone ? de.insertBefore(me, M) : Ft ? de.insertBefore(me, Ft) : de.appendChild(me), this.options.group.revertClone && this.animate(M, me), j(me, "display", ""), kt = !1;
    }
  }
};
function pv(e) {
  e.dataTransfer && (e.dataTransfer.dropEffect = "move"), e.cancelable && e.preventDefault();
}
function Qn(e, t, n, i, s, r, a, l) {
  var u, c = e[Re], f = c.options.onMove, p;
  return window.CustomEvent && !mt && !$n ? u = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (u = document.createEvent("Event"), u.initEvent("move", !0, !0)), u.to = t, u.from = e, u.dragged = n, u.draggedRect = i, u.related = s || t, u.relatedRect = r || be(t), u.willInsertAfter = l, u.originalEvent = a, e.dispatchEvent(u), f && (p = f.call(c, u, a)), p;
}
function Jr(e) {
  e.draggable = !1;
}
function yv() {
  vi = !1;
}
function _v(e, t, n) {
  var i = be(en(n.el, 0, n.options, !0)), s = 10;
  return t ? e.clientX < i.left - s || e.clientY < i.top && e.clientX < i.right : e.clientY < i.top - s || e.clientY < i.bottom && e.clientX < i.left;
}
function gv(e, t, n) {
  var i = be(ji(n.el, n.options.draggable)), s = 10;
  return t ? e.clientX > i.right + s || e.clientX <= i.right && e.clientY > i.bottom && e.clientX >= i.left : e.clientX > i.right && e.clientY > i.top || e.clientX <= i.right && e.clientY > i.bottom + s;
}
function vv(e, t, n, i, s, r, a, l) {
  var u = i ? e.clientY : e.clientX, c = i ? n.height : n.width, f = i ? n.top : n.left, p = i ? n.bottom : n.right, g = !1;
  if (!a) {
    if (l && sr < c * s) {
      if (!Cn && (Vn === 1 ? u > f + c * r / 2 : u < p - c * r / 2) && (Cn = !0), Cn)
        g = !0;
      else if (Vn === 1 ? u < f + sr : u > p - sr)
        return -Vn;
    } else if (u > f + c * (1 - s) / 2 && u < p - c * (1 - s) / 2)
      return bv(t);
  }
  return g = g || a, g && (u < f + c * r / 2 || u > p - c * r / 2) ? u > f + c / 2 ? 1 : -1 : 0;
}
function bv(e) {
  return He(M) < He(e) ? 1 : -1;
}
function kv(e) {
  for (var t = e.tagName + e.className + e.src + e.href + e.textContent, n = t.length, i = 0; n--; )
    i += t.charCodeAt(n);
  return i.toString(36);
}
function xv(e) {
  _r.length = 0;
  for (var t = e.getElementsByTagName("input"), n = t.length; n--; ) {
    var i = t[n];
    i.checked && _r.push(i);
  }
}
function ar(e) {
  return setTimeout(e, 0);
}
function bi(e) {
  return clearTimeout(e);
}
Ir && te(document, "touchmove", function(e) {
  (R.active || Gt) && e.cancelable && e.preventDefault();
});
R.utils = {
  on: te,
  off: J,
  css: j,
  find: Ml,
  is: function(t, n) {
    return !!rt(t, n, t, !1);
  },
  extend: iv,
  throttle: Il,
  closest: rt,
  toggleClass: Ue,
  clone: Dl,
  index: He,
  nextTick: ar,
  cancelNextTick: bi,
  detectDirection: Nl,
  getChild: en
};
R.get = function(e) {
  return e[Re];
};
R.mount = function() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  t[0].constructor === Array && (t = t[0]), t.forEach(function(i) {
    if (!i.prototype || !i.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(i));
    i.utils && (R.utils = st(st({}, R.utils), i.utils)), Nn.mount(i);
  });
};
R.create = function(e, t) {
  return new R(e, t);
};
R.version = ev;
var ye = [], xn, ki, xi = !1, Xr, Qr, gr, wn;
function wv() {
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
      this.sortable.nativeDraggable ? J(document, "dragover", this._handleAutoScroll) : (J(document, "pointermove", this._handleFallbackAutoScroll), J(document, "touchmove", this._handleFallbackAutoScroll), J(document, "mousemove", this._handleFallbackAutoScroll)), qs(), lr(), sv();
    },
    nulling: function() {
      gr = ki = xn = xi = wn = Xr = Qr = null, ye.length = 0;
    },
    _handleFallbackAutoScroll: function(n) {
      this._handleAutoScroll(n, !0);
    },
    _handleAutoScroll: function(n, i) {
      var s = this, r = (n.touches ? n.touches[0] : n).clientX, a = (n.touches ? n.touches[0] : n).clientY, l = document.elementFromPoint(r, a);
      if (gr = n, i || this.options.forceAutoScrollFallback || $n || mt || On) {
        ei(n, this.options, l, i);
        var u = xt(l, !0);
        xi && (!wn || r !== Xr || a !== Qr) && (wn && qs(), wn = setInterval(function() {
          var c = xt(document.elementFromPoint(r, a), !0);
          c !== u && (u = c, lr()), ei(n, s.options, c, i);
        }, 10), Xr = r, Qr = a);
      } else {
        if (!this.options.bubbleScroll || xt(l, !0) === it()) {
          lr();
          return;
        }
        ei(n, this.options, xt(l, !1), !1);
      }
    }
  }, ft(e, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function lr() {
  ye.forEach(function(e) {
    clearInterval(e.pid);
  }), ye = [];
}
function qs() {
  clearInterval(wn);
}
var ei = Il(function(e, t, n, i) {
  if (t.scroll) {
    var s = (e.touches ? e.touches[0] : e).clientX, r = (e.touches ? e.touches[0] : e).clientY, a = t.scrollSensitivity, l = t.scrollSpeed, u = it(), c = !1, f;
    ki !== n && (ki = n, lr(), xn = t.scroll, f = t.scrollFn, xn === !0 && (xn = xt(n, !0)));
    var p = 0, g = xn;
    do {
      var v = g, x = be(v), T = x.top, A = x.bottom, G = x.left, Q = x.right, re = x.width, le = x.height, oe = void 0, B = void 0, D = v.scrollWidth, se = v.scrollHeight, z = j(v), Ce = v.scrollLeft, ke = v.scrollTop;
      v === u ? (oe = re < D && (z.overflowX === "auto" || z.overflowX === "scroll" || z.overflowX === "visible"), B = le < se && (z.overflowY === "auto" || z.overflowY === "scroll" || z.overflowY === "visible")) : (oe = re < D && (z.overflowX === "auto" || z.overflowX === "scroll"), B = le < se && (z.overflowY === "auto" || z.overflowY === "scroll"));
      var xe = oe && (Math.abs(Q - s) <= a && Ce + re < D) - (Math.abs(G - s) <= a && !!Ce), Oe = B && (Math.abs(A - r) <= a && ke + le < se) - (Math.abs(T - r) <= a && !!ke);
      if (!ye[p])
        for (var Te = 0; Te <= p; Te++)
          ye[Te] || (ye[Te] = {});
      (ye[p].vx != xe || ye[p].vy != Oe || ye[p].el !== v) && (ye[p].el = v, ye[p].vx = xe, ye[p].vy = Oe, clearInterval(ye[p].pid), (xe != 0 || Oe != 0) && (c = !0, ye[p].pid = setInterval(function() {
        i && this.layer === 0 && R.active._onTouchMove(gr);
        var De = ye[this.layer].vy ? ye[this.layer].vy * l : 0, Ee = ye[this.layer].vx ? ye[this.layer].vx * l : 0;
        typeof f == "function" && f.call(R.dragged.parentNode[Re], Ee, De, e, gr, ye[this.layer].el) !== "continue" || Fl(ye[this.layer].el, Ee, De);
      }.bind({
        layer: p
      }), 24))), p++;
    } while (t.bubbleScroll && g !== u && (g = xt(g, !1)));
    xi = c;
  }
}, 30), jl = function(t) {
  var n = t.originalEvent, i = t.putSortable, s = t.dragEl, r = t.activeSortable, a = t.dispatchSortableEvent, l = t.hideGhostForTarget, u = t.unhideGhostForTarget;
  if (n) {
    var c = i || r;
    l();
    var f = n.changedTouches && n.changedTouches.length ? n.changedTouches[0] : n, p = document.elementFromPoint(f.clientX, f.clientY);
    u(), c && !c.el.contains(p) && (a("spill"), this.onSpill({
      dragEl: s,
      putSortable: i
    }));
  }
};
function Ri() {
}
Ri.prototype = {
  startIndex: null,
  dragStart: function(t) {
    var n = t.oldDraggableIndex;
    this.startIndex = n;
  },
  onSpill: function(t) {
    var n = t.dragEl, i = t.putSortable;
    this.sortable.captureAnimationState(), i && i.captureAnimationState();
    var s = en(this.sortable.el, this.startIndex, this.options);
    s ? this.sortable.el.insertBefore(n, s) : this.sortable.el.appendChild(n), this.sortable.animateAll(), i && i.animateAll();
  },
  drop: jl
};
ft(Ri, {
  pluginName: "revertOnSpill"
});
function Bi() {
}
Bi.prototype = {
  onSpill: function(t) {
    var n = t.dragEl, i = t.putSortable, s = i || this.sortable;
    s.captureAnimationState(), n.parentNode && n.parentNode.removeChild(n), s.animateAll();
  },
  drop: jl
};
ft(Bi, {
  pluginName: "removeOnSpill"
});
R.mount(new wv());
R.mount(Bi, Ri);
function ti(e) {
  e.parentElement !== null && e.parentElement.removeChild(e);
}
function Gs(e, t, n) {
  const i = n === 0 ? e.children[0] : e.children[n - 1].nextSibling;
  e.insertBefore(t, i);
}
function Sv() {
  return typeof window < "u" ? window.console : global.console;
}
const Ov = Sv();
function Tv(e) {
  const t = /* @__PURE__ */ Object.create(null);
  return function(i) {
    return t[i] || (t[i] = e(i));
  };
}
const Ev = /-(\w)/g, Vv = Tv((e) => e.replace(Ev, (t, n) => n.toUpperCase())), Rl = ["Start", "Add", "Remove", "Update", "End"], Bl = ["Choose", "Unchoose", "Sort", "Filter", "Clone"], zl = ["Move"], Cv = [zl, Rl, Bl].flatMap((e) => e).map((e) => `on${e}`), wi = {
  manage: zl,
  manageAndEmit: Rl,
  emit: Bl
};
function Av(e) {
  return Cv.indexOf(e) !== -1;
}
const Mv = [
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
function Iv(e) {
  return Mv.includes(e);
}
function Fv(e) {
  return ["transition-group", "TransitionGroup"].includes(e);
}
function Hl(e) {
  return ["id", "class", "role", "style"].includes(e) || e.startsWith("data-") || e.startsWith("aria-") || e.startsWith("on");
}
function ql(e) {
  return e.reduce((t, [n, i]) => (t[n] = i, t), {});
}
function Dv({ $attrs: e, componentData: t = {} }) {
  return {
    ...ql(
      Object.entries(e).filter(([i, s]) => Hl(i))
    ),
    ...t
  };
}
function $v({ $attrs: e, callBackBuilder: t }) {
  const n = ql(Gl(e));
  Object.entries(t).forEach(([s, r]) => {
    wi[s].forEach((a) => {
      n[`on${a}`] = r(a);
    });
  });
  const i = `[data-draggable]${n.draggable || ""}`;
  return {
    ...n,
    draggable: i
  };
}
function Gl(e) {
  return Object.entries(e).filter(([t, n]) => !Hl(t)).map(([t, n]) => [Vv(t), n]).filter(([t, n]) => !Av(t));
}
const Ws = ({ el: e }) => e, Nv = (e, t) => e.__draggable_context = t, Ks = (e) => e.__draggable_context;
class Lv {
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
      Nv(Ws(i), {
        element: n[s],
        index: s
      });
    });
  }
  getUnderlyingVm(t) {
    return Ks(t);
  }
  getVmIndexFromDomIndex(t, n) {
    const { defaultNodes: i } = this, { length: s } = i, r = n.children, a = r.item(t);
    if (a === null)
      return s;
    const l = Ks(a);
    if (l)
      return l.index;
    if (s === 0)
      return 0;
    const u = Ws(i[0]), c = [...r].findIndex(
      (f) => f === u
    );
    return t < c ? 0 : s;
  }
}
function Pv(e, t) {
  const n = e[t];
  return n ? n() : [];
}
function Uv({ $slots: e, realList: t, getKey: n }) {
  const i = t || [], [s, r] = ["header", "footer"].map(
    (u) => Pv(e, u)
  ), { item: a } = e;
  if (!a)
    throw new Error("draggable element must have an item slot");
  const l = i.flatMap(
    (u, c) => a({ element: u, index: c }).map((f) => (f.key = n(u), f.props = { ...f.props || {}, "data-draggable": !0 }, f))
  );
  if (l.length !== i.length)
    throw new Error("Item slot must have only one child");
  return {
    header: s,
    footer: r,
    default: l
  };
}
function jv(e) {
  const t = Fv(e), n = !Iv(e) && !t;
  return {
    transition: t,
    externalComponent: n,
    tag: n ? y(e) : t ? Fo : e
  };
}
function Rv({ $slots: e, tag: t, realList: n, getKey: i }) {
  const s = Uv({ $slots: e, realList: n, getKey: i }), r = jv(t);
  return new Lv({ nodes: s, root: r, realList: n });
}
function Wl(e, t) {
  pa(() => this.$emit(e.toLowerCase(), t));
}
function Kl(e) {
  return (t, n) => {
    if (this.realList !== null)
      return this[`onDrag${e}`](t, n);
  };
}
function Bv(e) {
  const t = Kl.call(this, e);
  return (n, i) => {
    t.call(this, n, i), Wl.call(this, e, n);
  };
}
let ni = null;
const zv = {
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
}, Hv = [
  "update:modelValue",
  "change",
  ...[...wi.manageAndEmit, ...wi.emit].map((e) => e.toLowerCase())
], Yl = Si({
  name: "draggable",
  inheritAttrs: !1,
  props: zv,
  emits: Hv,
  data() {
    return {
      error: !1
    };
  },
  render() {
    try {
      this.error = !1;
      const { $slots: e, $attrs: t, tag: n, componentData: i, realList: s, getKey: r } = this, a = Rv({
        $slots: e,
        tag: n,
        realList: s,
        getKey: r
      });
      this.componentStructure = a;
      const l = Dv({ $attrs: t, componentData: i });
      return a.render(di, l);
    } catch (e) {
      return this.error = !0, di("pre", { style: { color: "red" } }, e.stack);
    }
  },
  created() {
    this.list !== null && this.modelValue !== null && Ov.error(
      "modelValue and list props are mutually exclusive! Please set one or another."
    );
  },
  mounted() {
    if (this.error)
      return;
    const { $attrs: e, $el: t, componentStructure: n } = this;
    n.updated();
    const i = $v({
      $attrs: e,
      callBackBuilder: {
        manageAndEmit: (r) => Bv.call(this, r),
        emit: (r) => Wl.bind(this, r),
        manage: (r) => Kl.call(this, r)
      }
    }), s = t.nodeType === 1 ? t : t.parentElement;
    this._sortable = new R(s, i), this.targetDomElement = s, s.__draggable_component__ = this;
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
        t && Gl(e).forEach(([n, i]) => {
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
      pa(() => this.$emit("change", e));
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
      this.context = this.getUnderlyingVm(e.item), e.item._underlying_vm_ = this.clone(this.context.element), ni = e.item;
    },
    onDragAdd(e) {
      const t = e.item._underlying_vm_;
      if (t === void 0)
        return;
      ti(e.item);
      const n = this.getVmIndexFromDomIndex(e.newIndex);
      this.spliceList(n, 0, t);
      const i = { element: t, newIndex: n };
      this.emitChanges({ added: i });
    },
    onDragRemove(e) {
      if (Gs(this.$el, e.item, e.oldIndex), e.pullMode === "clone") {
        ti(e.clone);
        return;
      }
      const { index: t, element: n } = this.context;
      this.spliceList(t, 1);
      const i = { element: n, oldIndex: t };
      this.emitChanges({ removed: i });
    },
    onDragUpdate(e) {
      ti(e.item), Gs(e.from, e.item, e.oldIndex);
      const t = this.context.index, n = this.getVmIndexFromDomIndex(e.newIndex);
      this.updatePosition(t, n);
      const i = { element: this.context.element, oldIndex: t, newIndex: n };
      this.emitChanges({ moved: i });
    },
    computeFutureIndex(e, t) {
      if (!e.element)
        return 0;
      const n = [...t.to.children].filter(
        (a) => a.style.display !== "none"
      ), i = n.indexOf(t.related), s = e.component.getVmIndexFromDomIndex(
        i
      );
      return n.indexOf(ni) !== -1 || !t.willInsertAfter ? s : s + 1;
    },
    onDragMove(e, t) {
      const { move: n, realList: i } = this;
      if (!n || !i)
        return !0;
      const s = this.getRelatedContextFromMoveEvent(e), r = this.computeFutureIndex(s, e), a = {
        ...this.context,
        futureIndex: r
      }, l = {
        ...e,
        relatedContext: s,
        draggedContext: a
      };
      return n(l, t);
    },
    onDragEnd() {
      ni = null;
    }
  }
});
function qv(e, t) {
  let n = e.title.toUpperCase(), i = t.title.toUpperCase();
  return n < i ? -1 : n > i ? 1 : 0;
}
const Gv = {
  components: {
    Item: Vl,
    draggable: Yl
  },
  props: {
    modelValue: {
      type: [Object, Array]
    }
  },
  mixins: [ne],
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
    async open() {
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
      let n = this.field.referenceType;
      if (!n) {
        const s = (await e.$sdk.content.glossary()).sort(qv), { key: r } = await e.$sdk.options(s, "Select content type", "What type of content are you wanting to select");
        n = r;
      }
      e.$sdk.browse(n, t).then(function(i) {
        e.model = e.multiValue ? i : i[0];
      }).catch(function(i) {
        console.log("Error", i);
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
          var e = "Click to select", t = this.model.length;
          return this.showList ? (t && (e = `Adjust selection (${t})`), e) : t === 1 ? this.model[0].title || this.model[0].name || this.model[0].firstName : `${t} selected`;
        } else
          return "Click to select";
      else
        return this.model ? this.showList ? "Click to select" : this.model.title || this.model.name || this.model.firstName : "Click to select";
    }
  }
}, Wv = {
  key: 0,
  class: "ux-field-title"
}, Kv = {
  key: 0,
  class: "ux-required-marker"
}, Yv = {
  key: 1,
  class: "ux-field-description"
}, Zv = {
  key: 1,
  class: "items"
};
function Jv(e, t, n, i, s, r) {
  const a = y("ux-icon"), l = y("ux-button"), u = y("item"), c = y("draggable"), f = y("flex-cell"), p = y("flex-spacer"), g = y("flex-row");
  return o(), d(S, null, [
    e.showLabel ? (o(), d("label", Wv, [
      O(b(e.label) + " ", 1),
      e.required ? (o(), d("span", Kv, "*")) : _("", !0)
    ])) : _("", !0),
    e.showDescription ? (o(), d("div", Yv, b(e.description), 1)) : _("", !0),
    r.showList ? (o(), d(S, { key: 2 }, [
      e.multiValue ? (o(), d(S, { key: 0 }, [
        e.model && e.model.length ? (o(), k(c, {
          key: 0,
          class: "items",
          modelValue: e.model,
          "onUpdate:modelValue": t[1] || (t[1] = (v) => e.model = v)
        }, {
          item: h(({ element: v, index: x }) => [
            (o(), k(u, {
              key: v._id,
              item: v
            }, {
              actions: h(() => [
                e.$actions ? (o(), k(l, {
                  key: 0,
                  size: "sm",
                  icon: "",
                  onClick: t[0] || (t[0] = W((T) => e.$actions.open([e.model]), ["stop", "prevent"]))
                }, {
                  default: h(() => [
                    m(a, { icon: "fa-ellipsis" })
                  ]),
                  _: 1
                })) : _("", !0),
                r.canEdit(v) ? (o(), k(l, {
                  key: 1,
                  size: "sm",
                  icon: "",
                  onClick: W((T) => r.edit(v), ["stop", "prevent"])
                }, {
                  default: h(() => [
                    m(a, { icon: "fa-pencil" })
                  ]),
                  _: 2
                }, 1032, ["onClick"])) : _("", !0),
                m(l, {
                  size: "sm",
                  icon: "",
                  onClick: W((T) => e.remove(v), ["stop", "prevent"])
                }, {
                  default: h(() => [
                    m(a, { icon: "fa-times" })
                  ]),
                  _: 2
                }, 1032, ["onClick"])
              ]),
              _: 2
            }, 1032, ["item"]))
          ]),
          _: 1
        }, 8, ["modelValue"])) : _("", !0)
      ], 64)) : e.model ? (o(), d("div", Zv, [
        m(u, { item: e.model }, {
          actions: h(() => [
            e.$actions ? (o(), k(l, {
              key: 0,
              size: "sm",
              icon: "",
              onClick: t[2] || (t[2] = W((v) => e.$actions.open([e.model]), ["stop", "prevent"]))
            }, {
              default: h(() => [
                m(a, { icon: "fa-ellipsis" })
              ]),
              _: 1
            })) : _("", !0),
            r.canEdit(e.model) ? (o(), k(l, {
              key: 1,
              size: "sm",
              icon: "",
              onClick: t[3] || (t[3] = W((v) => r.edit(e.model), ["stop", "prevent"]))
            }, {
              default: h(() => [
                m(a, { icon: "fa-pencil" })
              ]),
              _: 1
            })) : _("", !0),
            m(l, {
              size: "sm",
              icon: "",
              onClick: W(r.clear, ["stop", "prevent"])
            }, {
              default: h(() => [
                m(a, { icon: "fa-times" })
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
      default: h(() => [
        m(f, { shrink: "" }, {
          default: h(() => [
            m(l, { onClick: r.open }, {
              default: h(() => [
                O(b(r.summary), 1)
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
          default: h(() => [
            m(l, {
              color: "primary",
              onClick: r.create
            }, {
              default: h(() => [
                O(" Create "),
                m(a, {
                  right: "",
                  icon: "fa-plus"
                })
              ]),
              _: 1
            }, 8, ["onClick"])
          ]),
          _: 1
        })) : _("", !0),
        m(p)
      ]),
      _: 1
    })) : _("", !0)
  ], 64);
}
const Zl = /* @__PURE__ */ E(Gv, [["render", Jv], ["__scopeId", "data-v-c0d116a5"]]);
function Xv(e) {
  return e === void 0 || typeof e > "u" || e === null || String(e) === "null" || String(e) === "undefined";
}
const Qv = {
  props: {
    title: {
      type: String
    },
    modelValue: {
      // type: [Object, Array],
    }
  },
  mixins: [ne],
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
      return Xv(e) ? t.multiValue ? e = [] : e = void 0 : t.multiValue ? e = (e || []).filter(Boolean).map(function(n) {
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
}, eb = {
  key: 0,
  class: "ux-field-title"
}, tb = {
  key: 0,
  class: "ux-required-marker"
}, nb = {
  key: 1,
  class: "ux-field-description"
}, rb = {
  key: 2,
  class: "ui-select-button"
}, ib = ["multiple"], sb = {
  key: 0,
  value: ""
}, ab = ["value"];
function lb(e, t, n, i, s, r) {
  const a = y("ux-button");
  return o(), d("div", {
    class: L(["native-select", r.classes])
  }, [
    e.showLabel ? (o(), d("label", eb, [
      O(b(e.label) + " ", 1),
      e.required ? (o(), d("span", tb, "*")) : _("", !0)
    ])) : _("", !0),
    e.showDescription ? (o(), d("div", nb, b(e.description), 1)) : _("", !0),
    e.singleValue ? (o(), d("div", rb, [
      q(e.$slots, "default", {}, () => [
        m(a, { tag: "div" }, {
          default: h(() => [
            O(b(r.summary), 1)
          ]),
          _: 1
        })
      ], !0)
    ])) : _("", !0),
    K(w("select", {
      onFocus: t[0] || (t[0] = (...l) => e.touch && e.touch(...l)),
      multiple: e.multiValue,
      "onUpdate:modelValue": t[1] || (t[1] = (l) => e.model = l)
    }, [
      e.singleValue && !e.minimum ? (o(), d("option", sb, "None")) : _("", !0),
      (o(!0), d(S, null, $(r.selectableOptions, (l) => (o(), d("option", {
        value: l.value
      }, b(l.title), 9, ab))), 256))
    ], 40, ib), [
      [St, e.model]
    ])
  ], 2);
}
const ob = /* @__PURE__ */ E(Qv, [["render", lb], ["__scopeId", "data-v-a366d321"]]);
const ub = {
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
}, db = { class: "outer" }, cb = {
  key: 0,
  class: "children"
};
function fb(e, t, n, i, s, r) {
  const a = y("ux-icon"), l = y("flex-cell"), u = y("ux-button"), c = y("flex-row"), f = y("scope-item", !0);
  return o(), d("div", db, [
    w("div", {
      class: L(["scope-item", { selected: r.selected }]),
      onClick: t[1] || (t[1] = (...p) => r.clicked && r.clicked(...p))
    }, [
      m(c, {
        gap: "",
        vcenter: ""
      }, {
        default: h(() => [
          m(l, {
            class: "select-mark",
            shrink: ""
          }, {
            default: h(() => [
              m(a, {
                icon: r.selected ? "fa-check" : "fa-regular fa-circle"
              }, null, 8, ["icon"])
            ]),
            _: 1
          }),
          m(l, null, {
            default: h(() => [
              O(b(n.item.title), 1)
            ]),
            _: 1
          }),
          m(l, { shrink: "" }, {
            default: h(() => [
              w("div", {
                class: L({ hide: !r.hasChildren })
              }, [
                m(u, {
                  onClick: t[0] || (t[0] = W((p) => r.toggleCollapse(), ["stop", "prevent"])),
                  size: "xs",
                  icon: ""
                }, {
                  default: h(() => [
                    m(a, {
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
    r.expanded ? (o(), d("div", cb, [
      (o(!0), d(S, null, $(n.item.children, (p) => (o(), k(f, {
        click: n.click,
        item: p
      }, null, 8, ["click", "item"]))), 256))
    ])) : _("", !0)
  ]);
}
const mb = /* @__PURE__ */ E(ub, [["render", fb], ["__scopeId", "data-v-2f79c449"]]);
let ri;
const hb = {
  components: {
    ScopeItem: mb
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
      ri || (ri = !0, this.action && this.type ? this.scopes = await this.loadScopes() : console.log("missing action or type", this.action, this.type), ri = !1);
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
function pb(e, t, n, i, s, r) {
  const a = y("spinner"), l = y("scope-item");
  return o(), d("div", {
    class: L({ has: r.hasSelection })
  }, [
    s.loading ? (o(), k(a, { key: 0 })) : (o(!0), d(S, { key: 1 }, $(s.scopes, (u) => (o(), k(l, {
      click: r.click,
      item: u
    }, null, 8, ["click", "item"]))), 256))
  ], 2);
}
const yb = /* @__PURE__ */ E(hb, [["render", pb], ["__scopeId", "data-v-5472184b"]]);
const _b = {
  async created() {
    const e = await this.$sdk.content.scopeGlossary({ hash: !0 });
    this.scopeGlossary = e, this.loadingScopeGlossary = !1;
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
      loadingScopeGlossary: !0,
      loadingContentGlossary: !0,
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
    loading() {
      return this.loadingScopeGlossary || this.loadingContentGlossary;
    },
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
      var i;
      const e = this, t = (i = e.definition) == null ? void 0 : i.defaultScopes;
      if (t && t.length)
        return [...t];
      const n = Object.keys(e.scopeGlossary);
      return n.length === 1 ? [...n] : [];
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
        this.model.length || e.length && (this.model = [...e]);
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
        const t = this;
        t.loadingContentGlossary = !0;
        const n = await this.$sdk.content.glossary({ hash: !0 });
        t.definition = n[e], t.loadingContentGlossary = !1;
      },
      immediate: !0
    }
  }
};
function gb(e, t, n, i, s, r) {
  const a = y("ux-icon"), l = y("ux-button");
  return o(), d("div", null, [
    m(l, { onClick: r.openSelection }, {
      default: h(() => [
        w("span", {
          class: L({ "empty-text": r.empty })
        }, b(r.summary), 3),
        O(),
        r.loading ? (o(), k(a, {
          key: 0,
          right: "",
          icon: "fa-spinner",
          spin: ""
        })) : _("", !0)
      ]),
      _: 1
    }, 8, ["onClick"])
  ]);
}
const vb = /* @__PURE__ */ E(_b, [["render", gb], ["__scopeId", "data-v-f83c09f7"]]);
function bb(e) {
  return e === void 0 || typeof e > "u" || e === null || String(e) === "null" || String(e) === "undefined";
}
const kb = {
  components: {
    ScopeSelectButton: vb
  },
  props: {
    title: {
      type: String
    },
    modelValue: {
      // type: [Object, Array],
    }
  },
  mixins: [ne],
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
      return bb(e) ? t.multiValue ? e = [] : e = void 0 : t.multiValue ? e = (e || []).filter(Boolean).map(function(n) {
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
}, xb = {
  key: 0,
  class: "ux-field-title"
}, wb = {
  key: 0,
  class: "ux-required-marker"
}, Sb = {
  key: 1,
  class: "ux-field-description"
};
function Ob(e, t, n, i, s, r) {
  const a = y("scope-select-button");
  return o(), d("div", {
    class: L(["scope-select", r.classes])
  }, [
    e.showLabel ? (o(), d("label", xb, [
      O(b(e.label) + " ", 1),
      e.required ? (o(), d("span", wb, "*")) : _("", !0)
    ])) : _("", !0),
    e.showDescription ? (o(), d("div", Sb, b(e.description), 1)) : _("", !0),
    m(a, {
      type: r.contextReferenceType,
      action: r.contextReferenceAction,
      modelValue: e.model,
      "onUpdate:modelValue": t[0] || (t[0] = (l) => e.model = l)
    }, null, 8, ["type", "action", "modelValue"])
  ], 2);
}
const Tb = /* @__PURE__ */ E(kb, [["render", Ob], ["__scopeId", "data-v-79e23811"]]);
function Eb(e) {
  return e === void 0 || typeof e > "u" || e === null || String(e) === "null" || String(e) === "undefined";
}
const Vb = {
  props: {
    title: {
      type: String
    },
    modelValue: {
      // type: [Object, Array],
    }
  },
  mixins: [ne],
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
      return Eb(e) ? t.multiValue ? e = [] : e = void 0 : t.multiValue ? e = (e || []).filter(Boolean).map(function(n) {
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
    showNoneOption() {
      return this.singleValue && !this.minimum ? this.selectableOptions.find(function(n) {
        return n.none;
      }) ? (console.log("has custom none option"), !1) : !0 : !1;
    },
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
      var a = e.$sdk.utils.mapFields(n).filter(function(l) {
        var u = l.type == "group" && l.asObject && l.minimum == 1 && l.maximum == 1;
        return !u;
      }).map(function(l) {
        return l.title = l.titles.join(" › "), l;
      }).sort(function(l, u) {
        return l.title < u.title ? -1 : 1;
      });
      return a;
    },
    fieldOptions() {
      return this.fields.map(function(t) {
        return {
          title: t.title,
          value: t.path,
          none: t.none
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
}, Cb = {
  key: 0,
  class: "ux-field-title"
}, Ab = {
  key: 0,
  class: "ux-required-marker"
}, Mb = {
  key: 1,
  class: "ux-field-description"
}, Ib = {
  key: 2,
  class: "ui-select-button"
}, Fb = ["multiple"], Db = {
  key: 0,
  value: ""
}, $b = ["value"];
function Nb(e, t, n, i, s, r) {
  const a = y("ux-button");
  return o(), d("div", {
    class: L(["native-select", r.classes])
  }, [
    e.showLabel ? (o(), d("label", Cb, [
      O(b(e.label) + " ", 1),
      e.required ? (o(), d("span", Ab, "*")) : _("", !0)
    ])) : _("", !0),
    e.showDescription ? (o(), d("div", Mb, b(e.description), 1)) : _("", !0),
    e.singleValue ? (o(), d("div", Ib, [
      q(e.$slots, "default", {}, () => [
        m(a, { tag: "div" }, {
          default: h(() => [
            O(b(r.summary), 1)
          ]),
          _: 1
        })
      ], !0)
    ])) : _("", !0),
    K(w("select", {
      onFocus: t[0] || (t[0] = (...l) => e.touch && e.touch(...l)),
      multiple: e.multiValue,
      "onUpdate:modelValue": t[1] || (t[1] = (l) => e.model = l)
    }, [
      r.showNoneOption ? (o(), d("option", Db, "None")) : _("", !0),
      (o(!0), d(S, null, $(r.selectableOptions, (l) => (o(), d("option", {
        value: l.value
      }, b(l.title), 9, $b))), 256))
    ], 40, Fb), [
      [St, e.model]
    ])
  ], 2);
}
const Lb = /* @__PURE__ */ E(Vb, [["render", Nb], ["__scopeId", "data-v-2ba63156"]]);
const Pb = {
  props: {
    modelValue: {
      type: [String, Array]
    }
  },
  mixins: [ne],
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
}, Ub = {
  key: 0,
  class: "ux-field-title"
}, jb = {
  key: 0,
  class: "ux-required-marker"
}, Rb = {
  key: 1,
  class: "ux-field-description"
}, Bb = { key: 2 }, zb = {
  key: 0,
  class: "ux-text-prefix"
}, Hb = ["onBlur", "onUpdate:modelValue"], qb = {
  key: 1,
  class: "ux-text-suffix"
}, Gb = {
  key: 0,
  class: "ux-text-prefix"
}, Wb = {
  key: 1,
  class: "ux-text-suffix"
};
function Kb(e, t, n, i, s, r) {
  const a = y("flex-cell"), l = y("ux-icon"), u = y("ux-button"), c = y("flex-row");
  return o(), d(S, null, [
    e.showLabel ? (o(), d("label", Ub, [
      O(b(e.label) + " ", 1),
      e.required ? (o(), d("span", jb, "*")) : _("", !0)
    ])) : _("", !0),
    e.showDescription ? (o(), d("div", Rb, b(e.description), 1)) : _("", !0),
    e.multiValue ? (o(), d("div", Bb, [
      (o(!0), d(S, null, $(r.model, (f, p) => (o(), k(c, {
        class: "ux-text-row",
        key: p
      }, {
        default: h(() => [
          m(a, null, {
            default: h(() => [
              w("div", {
                class: L(["ux-text-wrap", { prefixed: r.prefix, suffixed: r.suffix }])
              }, [
                r.prefix ? (o(), d("span", zb, b(r.prefix), 1)) : _("", !0),
                K((o(), d("input", {
                  class: "ux-field-focus ux-text-input-multiple",
                  ref_for: !0,
                  ref: "input",
                  placeholder: "0.00",
                  key: `proxy-index-${p}`,
                  onKeydown: t[0] || (t[0] = ge(W((g) => e.add(), ["stop", "prevent"]), ["enter"])),
                  onBlur: (g) => r.update(g, p),
                  "onUpdate:modelValue": (g) => r.proxy[p] = g,
                  onFocus: t[1] || (t[1] = (...g) => e.touch && e.touch(...g))
                }, null, 40, Hb)), [
                  [
                    pe,
                    r.proxy[p],
                    void 0,
                    { lazy: !0 }
                  ]
                ]),
                r.suffix ? (o(), d("span", qb, b(r.suffix), 1)) : _("", !0)
              ], 2)
            ]),
            _: 2
          }, 1024),
          m(a, {
            shrink: "",
            vcenter: ""
          }, {
            default: h(() => [
              e.canRemoveValue ? (o(), k(u, {
                key: 0,
                tag: "a",
                icon: "",
                onClick: (g) => e.remove(f)
              }, {
                default: h(() => [
                  m(l, { icon: "fa-times" })
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
        default: h(() => [
          O(b(e.addLabel) + " ", 1),
          m(l, {
            icon: "fa-plus",
            right: ""
          })
        ]),
        _: 1
      })) : _("", !0)
    ])) : (o(), d("div", {
      key: 3,
      class: L(["ux-text-wrap", { prefixed: r.prefix, suffixed: r.suffix }])
    }, [
      r.prefix ? (o(), d("span", Gb, b(r.prefix), 1)) : _("", !0),
      K((o(), d("input", {
        class: "ux-field-focus ux-text-input-single",
        ref: "input",
        key: r.proxy,
        placeholder: "0.00",
        onKeyup: t[3] || (t[3] = ge(W((...f) => r.unfocus && r.unfocus(...f), ["stop", "prevent"]), ["enter"])),
        onFocus: t[4] || (t[4] = (...f) => e.touch && e.touch(...f)),
        "onUpdate:modelValue": t[5] || (t[5] = (f) => r.proxy = f)
      }, null, 32)), [
        [
          pe,
          r.proxy,
          void 0,
          { lazy: !0 }
        ]
      ]),
      r.suffix ? (o(), d("span", Wb, b(r.suffix), 1)) : _("", !0)
    ], 2))
  ], 64);
}
const Jl = /* @__PURE__ */ E(Pb, [["render", Kb], ["__scopeId", "data-v-8204c7cd"]]);
const Yb = {
  props: {
    modelValue: {
      type: [String, Array]
    }
  },
  data() {
    return {
      unmasked: !1,
      unmaskedLookup: {}
    };
  },
  mixins: [ne],
  computed: {
    copyable() {
      return this.$sdk.global.copyText && this.field.copyable;
    },
    inputClasses() {
      const e = [];
      return e.push(`ux-text-input-${this.inputType}`), e.join(" ");
    },
    actualInputType() {
      return this.unmasked ? "text" : this.inputType;
    },
    sensitive() {
      return this.inputType === "password";
    },
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
    copy(e) {
      let t;
      this.maximum === 1 ? t = this.model : t = this.model[e], this.$sdk.global.copyText(t);
    },
    getInput(e) {
      return this.unmaskedLookup[`${e}`] ? "text" : this.inputType;
    },
    toggleMask(e) {
      this.maximum === 1 ? this.unmasked = !this.unmasked : this.unmaskedLookup[`${e}`] = !this.unmaskedLookup[`${e}`];
    },
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
}, Zb = {
  key: 0,
  class: "ux-field-title"
}, Jb = {
  key: 0,
  class: "ux-required-marker"
}, Xb = {
  key: 1,
  class: "ux-field-description"
}, Qb = { key: 2 }, e1 = { class: "ux-text-wrap" }, t1 = {
  key: 0,
  class: "ux-text-prefix"
}, n1 = ["type", "placeholder", "onUpdate:modelValue"], r1 = ["type", "placeholder", "onUpdate:modelValue"], i1 = {
  key: 3,
  class: "ux-text-suffix"
}, s1 = { class: "ux-text-wrap" }, a1 = {
  key: 0,
  class: "ux-text-prefix"
}, l1 = ["type", "placeholder"], o1 = ["type", "placeholder"], u1 = {
  key: 3,
  class: "ux-text-suffix"
};
function d1(e, t, n, i, s, r) {
  const a = y("flex-cell"), l = y("ux-icon"), u = y("ux-button"), c = y("flex-row");
  return o(), d(S, null, [
    e.showLabel ? (o(), d("label", Zb, [
      O(b(e.label) + " ", 1),
      e.required ? (o(), d("span", Jb, "*")) : _("", !0)
    ])) : _("", !0),
    e.showDescription ? (o(), d("div", Xb, b(e.description), 1)) : _("", !0),
    e.multiValue ? (o(), d("div", Qb, [
      (o(!0), d(S, null, $(e.model, (f, p) => (o(), k(c, {
        class: "ux-text-row",
        key: p
      }, {
        default: h(() => [
          m(a, null, {
            default: h(() => [
              w("div", e1, [
                e.prefix ? (o(), d("span", t1, b(e.prefix), 1)) : _("", !0),
                r.lazy ? K((o(), d("input", {
                  key: 1,
                  type: r.getInput(p),
                  class: L([r.inputClasses, "ux-field-focus ux-text-input-multiple"]),
                  placeholder: r.actualPlaceholder,
                  onFocus: t[0] || (t[0] = (...g) => e.touch && e.touch(...g)),
                  ref_for: !0,
                  ref: "input",
                  onKeydown: t[1] || (t[1] = ge(W((g) => e.add(), ["stop", "prevent"]), ["enter"])),
                  "onUpdate:modelValue": (g) => e.model[p] = g
                }, null, 42, n1)), [
                  [
                    Bn,
                    e.model[p],
                    void 0,
                    { lazy: !0 }
                  ]
                ]) : _("", !0),
                r.lazy ? _("", !0) : K((o(), d("input", {
                  key: 2,
                  type: r.getInput(p),
                  class: L([r.inputClasses, "ux-field-focus ux-text-input-multiple"]),
                  placeholder: r.actualPlaceholder,
                  onFocus: t[2] || (t[2] = (...g) => e.touch && e.touch(...g)),
                  ref_for: !0,
                  ref: "input",
                  onKeydown: t[3] || (t[3] = ge(W((g) => e.add(), ["stop", "prevent"]), ["enter"])),
                  "onUpdate:modelValue": (g) => e.model[p] = g
                }, null, 42, r1)), [
                  [Bn, e.model[p]]
                ]),
                e.suffix ? (o(), d("span", i1, b(e.suffix), 1)) : _("", !0)
              ])
            ]),
            _: 2
          }, 1024),
          r.sensitive ? (o(), k(a, {
            key: 0,
            shrink: "",
            vcenter: ""
          }, {
            default: h(() => [
              m(u, {
                tag: "a",
                icon: "",
                onClick: (g) => r.toggleMask(p)
              }, {
                default: h(() => [
                  m(l, {
                    icon: s.unmaskedLookup[`${p}`] ? "fa-eye" : "fa-eye-slash"
                  }, null, 8, ["icon"])
                ]),
                _: 2
              }, 1032, ["onClick"])
            ]),
            _: 2
          }, 1024)) : _("", !0),
          r.copyable ? (o(), k(a, {
            key: 1,
            shrink: "",
            vcenter: ""
          }, {
            default: h(() => [
              m(u, {
                tag: "a",
                icon: "",
                onClick: (g) => r.copy(p)
              }, {
                default: h(() => [
                  m(l, { icon: "fa-copy" })
                ]),
                _: 2
              }, 1032, ["onClick"])
            ]),
            _: 2
          }, 1024)) : _("", !0),
          m(a, {
            shrink: "",
            vcenter: ""
          }, {
            default: h(() => [
              e.canRemoveValue ? (o(), k(u, {
                key: 0,
                tag: "a",
                icon: "",
                onClick: (g) => e.remove(f)
              }, {
                default: h(() => [
                  m(l, { icon: "fa-times" })
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
        default: h(() => [
          O(b(e.addLabel) + " ", 1),
          m(l, {
            icon: "fa-plus",
            right: ""
          })
        ]),
        _: 1
      })) : _("", !0)
    ])) : (o(), k(c, { key: 3 }, {
      default: h(() => [
        m(a, null, {
          default: h(() => [
            w("div", s1, [
              e.prefix ? (o(), d("span", a1, b(e.prefix), 1)) : _("", !0),
              r.lazy ? K((o(), d("input", {
                key: 1,
                type: r.actualInputType,
                ref: "input",
                class: L([r.inputClasses, "ux-field-focus ux-text-input-single"]),
                placeholder: r.actualPlaceholder,
                onFocus: t[5] || (t[5] = (...f) => e.touch && e.touch(...f)),
                "onUpdate:modelValue": t[6] || (t[6] = (f) => e.model = f)
              }, null, 42, l1)), [
                [
                  Bn,
                  e.model,
                  void 0,
                  { lazy: !0 }
                ]
              ]) : _("", !0),
              r.lazy ? _("", !0) : K((o(), d("input", {
                key: 2,
                type: r.actualInputType,
                ref: "input",
                class: L([r.inputClasses, "ux-field-focus ux-text-input-single"]),
                placeholder: r.actualPlaceholder,
                onFocus: t[7] || (t[7] = (...f) => e.touch && e.touch(...f)),
                "onUpdate:modelValue": t[8] || (t[8] = (f) => e.model = f)
              }, null, 42, o1)), [
                [Bn, e.model]
              ]),
              e.suffix ? (o(), d("span", u1, b(e.suffix), 1)) : _("", !0)
            ])
          ]),
          _: 1
        }),
        r.sensitive ? (o(), k(a, {
          key: 0,
          shrink: "",
          vcenter: ""
        }, {
          default: h(() => [
            m(u, {
              tag: "a",
              icon: "",
              onClick: r.toggleMask
            }, {
              default: h(() => [
                m(l, {
                  icon: s.unmasked ? "fa-eye" : "fa-eye-slash"
                }, null, 8, ["icon"])
              ]),
              _: 1
            }, 8, ["onClick"])
          ]),
          _: 1
        })) : _("", !0),
        r.copyable ? (o(), k(a, {
          key: 1,
          shrink: "",
          vcenter: ""
        }, {
          default: h(() => [
            m(u, {
              tag: "a",
              icon: "",
              onClick: r.copy
            }, {
              default: h(() => [
                m(l, { icon: "fa-copy" })
              ]),
              _: 1
            }, 8, ["onClick"])
          ]),
          _: 1
        })) : _("", !0)
      ]),
      _: 1
    }))
  ], 64);
}
const Xl = /* @__PURE__ */ E(Yb, [["render", d1], ["__scopeId", "data-v-66dbd239"]]);
const c1 = {
  props: {
    modelValue: {
      type: [String, Array]
    }
  },
  mixins: [ne],
  methods: {
    getNewDefaultEntry() {
      return "";
    }
  }
}, f1 = {
  key: 0,
  class: "ux-field-title"
}, m1 = {
  key: 0,
  class: "ux-required-marker"
}, h1 = {
  key: 1,
  class: "ux-field-description"
}, p1 = { key: 2 }, y1 = ["onUpdate:modelValue"];
function _1(e, t, n, i, s, r) {
  const a = y("flex-cell"), l = y("ux-icon"), u = y("ux-button"), c = y("flex-row");
  return o(), d(S, null, [
    e.showLabel ? (o(), d("label", f1, [
      O(b(e.label) + " ", 1),
      e.required ? (o(), d("span", m1, "*")) : _("", !0)
    ])) : _("", !0),
    e.showDescription ? (o(), d("div", h1, b(e.description), 1)) : _("", !0),
    e.multiValue ? (o(), d("div", p1, [
      (o(!0), d(S, null, $(e.model, (f, p) => (o(), k(c, {
        class: "ux-text-row",
        key: p
      }, {
        default: h(() => [
          m(a, null, {
            default: h(() => [
              K(w("textarea", {
                contenteditable: "",
                onFocus: t[0] || (t[0] = (...g) => e.touch && e.touch(...g)),
                ref_for: !0,
                ref: "input",
                "onUpdate:modelValue": (g) => e.model[p] = g,
                class: "ux-textarea ux-field-focus ux-text-area-multiple"
              }, null, 40, y1), [
                [pe, e.model[p]]
              ])
            ]),
            _: 2
          }, 1024),
          m(a, {
            shrink: "",
            vcenter: ""
          }, {
            default: h(() => [
              e.canRemoveValue ? (o(), k(u, {
                key: 0,
                tag: "a",
                icon: "",
                onClick: (g) => e.remove(f)
              }, {
                default: h(() => [
                  m(l, { icon: "fa-times" })
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
        default: h(() => [
          O(b(e.addLabel), 1)
        ]),
        _: 1
      })) : _("", !0)
    ])) : K((o(), d("textarea", {
      key: 3,
      class: "ux-textarea ux-field-focus ux-text-area-single",
      onFocus: t[2] || (t[2] = (...f) => e.touch && e.touch(...f)),
      "onUpdate:modelValue": t[3] || (t[3] = (f) => e.model = f),
      role: "textbox",
      contenteditable: ""
    }, null, 544)), [
      [pe, e.model]
    ])
  ], 64);
}
const g1 = /* @__PURE__ */ E(c1, [["render", _1], ["__scopeId", "data-v-03a618d3"]]);
function er(e) {
  return String(e).length < 2 && (e = `0${e}`), e;
}
const v1 = {
  props: {
    modelValue: {
      type: [Date, String, Array]
    }
  },
  mixins: [ne],
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
      return e = e ? new Date(e) : new Date(), `${e.getFullYear()}-${er(e.getMonth() + 1)}-${er(e.getDate())}T${er(e.getHours())}:${er(e.getMinutes())}`;
    },
    cleanInputValue(e) {
      let t = new Date(e);
      return t.toString() == "Invalid Date" ? "invalid" : t.toISOString();
    },
    getNewDefaultEntry() {
      return new Date();
    }
  }
}, b1 = {
  key: 0,
  class: "ux-field-title"
}, k1 = {
  key: 0,
  class: "ux-required-marker"
}, x1 = {
  key: 1,
  class: "ux-field-description"
}, w1 = { key: 2 }, S1 = ["onUpdate:modelValue"];
function O1(e, t, n, i, s, r) {
  const a = y("flex-cell"), l = y("ux-icon"), u = y("ux-button"), c = y("flex-row");
  return o(), d(S, null, [
    e.showLabel ? (o(), d("label", b1, [
      O(b(e.label) + " ", 1),
      e.required ? (o(), d("span", k1, "*")) : _("", !0)
    ])) : _("", !0),
    e.showDescription ? (o(), d("div", x1, b(e.description), 1)) : _("", !0),
    e.multiValue ? (o(), d("div", w1, [
      (o(!0), d(S, null, $(r.model, (f, p) => (o(), k(c, {
        class: "ux-text-row",
        key: p
      }, {
        default: h(() => [
          m(a, null, {
            default: h(() => [
              K(w("input", {
                type: "datetime-local",
                class: "ux-field-focus ux-text-input-multiple",
                onFocus: t[0] || (t[0] = (...g) => e.touch && e.touch(...g)),
                ref_for: !0,
                ref: "input",
                onKeydown: t[1] || (t[1] = ge(W((g) => e.add(), ["stop", "prevent"]), ["enter"])),
                "onUpdate:modelValue": (g) => r.model[p] = g
              }, null, 40, S1), [
                [pe, r.model[p]]
              ])
            ]),
            _: 2
          }, 1024),
          m(a, {
            shrink: "",
            vcenter: ""
          }, {
            default: h(() => [
              e.canRemoveValue ? (o(), k(u, {
                key: 0,
                tag: "a",
                icon: "",
                onClick: (g) => e.remove(f)
              }, {
                default: h(() => [
                  m(l, { icon: "fa-times" })
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
        default: h(() => [
          O(b(e.addLabel), 1)
        ]),
        _: 1
      })) : _("", !0)
    ])) : K((o(), d("input", {
      key: 3,
      type: "datetime-local",
      class: "ux-field-focus ux-text-input-single",
      onFocus: t[3] || (t[3] = (...f) => e.touch && e.touch(...f)),
      "onUpdate:modelValue": t[4] || (t[4] = (f) => r.model = f)
    }, null, 544)), [
      [pe, r.model]
    ])
  ], 64);
}
const Ql = /* @__PURE__ */ E(v1, [["render", O1], ["__scopeId", "data-v-e0c57de2"]]);
function Ys(e) {
  return String(e).length < 2 && (e = `0${e}`), e;
}
const T1 = {
  props: {
    modelValue: {
      type: String
    }
  },
  mixins: [ne],
  methods: {
    cleanInputValue(e) {
      return e.split(":").join("");
    },
    cleanOutputValue(e) {
      let t = Ys(e.slice(0, 2)), n = Ys(e.slice(2));
      return `${t}:${n}`;
    },
    getNewDefaultEntry() {
      return "00:00";
    }
  }
}, E1 = {
  key: 0,
  class: "ux-field-title"
}, V1 = {
  key: 0,
  class: "ux-required-marker"
}, C1 = {
  key: 1,
  class: "ux-field-description"
}, A1 = { key: 2 }, M1 = ["onUpdate:modelValue"];
function I1(e, t, n, i, s, r) {
  const a = y("flex-cell"), l = y("ux-icon"), u = y("ux-button"), c = y("flex-row");
  return o(), d(S, null, [
    e.showLabel ? (o(), d("label", E1, [
      O(b(e.label) + " ", 1),
      e.required ? (o(), d("span", V1, "*")) : _("", !0)
    ])) : _("", !0),
    e.showDescription ? (o(), d("div", C1, b(e.description), 1)) : _("", !0),
    e.multiValue ? (o(), d("div", A1, [
      (o(!0), d(S, null, $(e.model, (f, p) => (o(), k(c, {
        class: "ux-text-row",
        key: p
      }, {
        default: h(() => [
          m(a, null, {
            default: h(() => [
              K(w("input", {
                type: "time",
                class: "ux-field-focus ux-text-input-multiple",
                onFocus: t[0] || (t[0] = (...g) => e.touch && e.touch(...g)),
                ref_for: !0,
                ref: "input",
                onKeydown: t[1] || (t[1] = ge(W((g) => e.add(), ["stop", "prevent"]), ["enter"])),
                "onUpdate:modelValue": (g) => e.model[p] = g
              }, null, 40, M1), [
                [pe, e.model[p]]
              ])
            ]),
            _: 2
          }, 1024),
          m(a, {
            shrink: "",
            vcenter: ""
          }, {
            default: h(() => [
              e.canRemoveValue ? (o(), k(u, {
                key: 0,
                tag: "a",
                icon: "",
                onClick: (g) => e.remove(f)
              }, {
                default: h(() => [
                  m(l, { icon: "fa-times" })
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
        default: h(() => [
          O(b(e.addLabel), 1)
        ]),
        _: 1
      })) : _("", !0)
    ])) : K((o(), d("input", {
      key: 3,
      type: "time",
      class: "ux-field-focus ux-text-input-single",
      onFocus: t[3] || (t[3] = (...f) => e.touch && e.touch(...f)),
      "onUpdate:modelValue": t[4] || (t[4] = (f) => e.model = f)
    }, null, 544)), [
      [pe, e.model]
    ])
  ], 64);
}
const F1 = /* @__PURE__ */ E(T1, [["render", I1], ["__scopeId", "data-v-9ae5aa1e"]]);
const D1 = {
  components: {
    Daterange: kg
  },
  props: {
    modelValue: {
      type: [Object, Array]
    }
  },
  mixins: [ne],
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
}, $1 = {
  key: 0,
  class: "ux-field-title"
}, N1 = {
  key: 0,
  class: "ux-required-marker"
}, L1 = {
  key: 1,
  class: "ux-field-description"
}, P1 = { key: 2 };
function U1(e, t, n, i, s, r) {
  const a = y("daterange", !0), l = y("flex-cell"), u = y("ux-icon"), c = y("ux-button"), f = y("flex-row");
  return o(), d(S, null, [
    e.showLabel ? (o(), d("label", $1, [
      O(b(e.label) + " ", 1),
      e.required ? (o(), d("span", N1, "*")) : _("", !0)
    ])) : _("", !0),
    e.showDescription ? (o(), d("div", L1, b(e.description), 1)) : _("", !0),
    e.multiValue ? (o(), d("div", P1, [
      (o(!0), d(S, null, $(r.model, (p, g) => (o(), k(f, {
        class: "ux-text-row",
        key: g
      }, {
        default: h(() => [
          m(l, null, {
            default: h(() => [
              m(a, {
                onFocus: e.touch,
                modelValue: r.model[g],
                "onUpdate:modelValue": (v) => r.model[g] = v
              }, null, 8, ["onFocus", "modelValue", "onUpdate:modelValue"])
            ]),
            _: 2
          }, 1024),
          m(l, {
            shrink: "",
            vcenter: ""
          }, {
            default: h(() => [
              e.canRemoveValue ? (o(), k(c, {
                key: 0,
                tag: "a",
                icon: "",
                onClick: (v) => e.remove(p)
              }, {
                default: h(() => [
                  m(u, { icon: "fa-times" })
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
        default: h(() => [
          O(b(e.addLabel), 1)
        ]),
        _: 1
      })) : _("", !0)
    ])) : (o(), k(a, {
      key: 3,
      onFocus: e.touch,
      modelValue: r.model,
      "onUpdate:modelValue": t[1] || (t[1] = (p) => r.model = p)
    }, null, 8, ["onFocus", "modelValue"]))
  ], 64);
}
const j1 = /* @__PURE__ */ E(D1, [["render", U1], ["__scopeId", "data-v-b6688859"]]);
const R1 = {
  computed: {
    NativeCheckbox: Tl
  },
  mixins: [ne],
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
}, B1 = {
  key: 0,
  class: "ux-field-title"
}, z1 = {
  key: 0,
  class: "ux-required-marker"
}, H1 = {
  key: 1,
  class: "ux-field-description"
};
function q1(e, t, n, i, s, r) {
  const a = y("ux-checkbox"), l = y("flex-cell"), u = y("flex-row");
  return o(), k(u, {
    onClick: t[1] || (t[1] = (c) => e.touch()),
    gap: ""
  }, {
    default: h(() => [
      m(l, {
        vcenter: "",
        shrink: ""
      }, {
        default: h(() => [
          m(a, {
            value: r.model,
            onClick: t[0] || (t[0] = (c) => r.model = !r.model)
          }, null, 8, ["value"])
        ]),
        _: 1
      }),
      m(l, { vcenter: "" }, {
        default: h(() => [
          w("div", null, [
            e.showLabel ? (o(), d("label", B1, [
              O(b(e.label) + " ", 1),
              e.required ? (o(), d("span", z1, "*")) : _("", !0)
            ])) : _("", !0),
            e.showDescription ? (o(), d("div", H1, b(e.description), 1)) : _("", !0)
          ])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const G1 = /* @__PURE__ */ E(R1, [["render", q1], ["__scopeId", "data-v-75883516"]]), W1 = {
  props: {
    modelValue: {
      type: [String, Array]
    }
  },
  mixins: [ne],
  methods: {
    getNewDefaultEntry() {
      return "";
    }
  }
}, K1 = { key: 0 }, Y1 = ["innerHTML"], Z1 = ["innerHTML"];
function J1(e, t, n, i, s, r) {
  const a = y("flex-cell"), l = y("ux-icon"), u = y("ux-button"), c = y("flex-row");
  return e.multiValue ? (o(), d("div", K1, [
    m(c, { class: "ux-text-row" }, {
      default: h(() => [
        m(a, null, {
          default: h(() => [
            (o(!0), d(S, null, $(e.model, (f, p) => (o(), d("div", {
              innerHTML: e.field.template,
              key: p
            }, null, 8, Y1))), 128))
          ]),
          _: 1
        }),
        m(a, {
          shrink: "",
          vcenter: ""
        }, {
          default: h(() => [
            e.canRemoveValue ? (o(), k(u, {
              key: 0,
              tag: "a",
              icon: "",
              onClick: t[0] || (t[0] = (f) => e.remove(e.entry))
            }, {
              default: h(() => [
                m(l, { icon: "fa-times" })
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
      default: h(() => [
        O(b(e.addLabel), 1)
      ]),
      _: 1
    })) : _("", !0)
  ])) : (o(), d("div", {
    key: 1,
    innerHTML: e.field.template
  }, null, 8, Z1));
}
const X1 = /* @__PURE__ */ E(W1, [["render", J1]]);
const Q1 = {
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
            t.filterDisabled || e.push({
              title: t.filterTitle || t.titles.join(" → "),
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
        options: this.keyOptions,
        sorted: !0
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
        placeholder: this.inputPlaceholder,
        sorted: !0
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
        placeholder: this.inputPlaceholder,
        sorted: !0
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
    TextField: Xl,
    CurrencyField: Jl,
    DateField: Ql,
    NativeSelect: Pt,
    ContentSelect: Zl
  }
}, e0 = {
  key: 0,
  class: "filter-condition"
}, t0 = { key: 0 }, n0 = { key: 1 }, r0 = { key: 2 }, i0 = { key: 3 }, s0 = { key: 4 }, a0 = { key: 5 }, l0 = { key: 6 }, o0 = { key: 7 }, u0 = { key: 8 }, d0 = { key: 9 }, c0 = { key: 10 };
function f0(e, t, n, i, s, r) {
  const a = y("native-select"), l = y("flex-cell"), u = y("text-field"), c = y("currency-field"), f = y("flex-row"), p = y("date-field"), g = y("content-select"), v = y("ux-switch"), x = y("ux-icon"), T = y("ux-button");
  return s.comparators ? (o(), d("div", e0, [
    m(f, {
      gap: "",
      vcenter: ""
    }, {
      default: h(() => [
        m(l, null, {
          default: h(() => [
            m(a, {
              title: "Select field",
              modelValue: s.model.key,
              "onUpdate:modelValue": t[0] || (t[0] = (A) => s.model.key = A),
              field: r.keyField
            }, null, 8, ["modelValue", "field"])
          ]),
          _: 1
        }),
        s.model.key ? (o(), k(l, { key: 0 }, {
          default: h(() => [
            m(a, {
              title: "Select comparator",
              modelValue: s.model.comparator,
              "onUpdate:modelValue": t[1] || (t[1] = (A) => s.model.comparator = A),
              field: r.comparatorField
            }, null, 8, ["modelValue", "field"])
          ]),
          _: 1
        })) : _("", !0),
        s.model.comparator ? (o(), k(l, { key: 1 }, {
          default: h(() => [
            r.inputType == "array" ? (o(), d("div", t0, [
              r.hasOptions ? (o(), k(a, {
                key: 0,
                modelValue: s.model.values,
                "onUpdate:modelValue": t[2] || (t[2] = (A) => s.model.values = A),
                field: r.multiOptionsField
              }, null, 8, ["modelValue", "field"])) : (o(), k(u, {
                key: 1,
                field: r.arrayField,
                modelValue: s.model.values,
                "onUpdate:modelValue": t[3] || (t[3] = (A) => s.model.values = A)
              }, null, 8, ["field", "modelValue"]))
            ])) : _("", !0),
            r.inputType == "range" ? (o(), d("div", n0, [
              r.fieldWidget == "currency" ? (o(), d(S, { key: 0 }, [
                m(c, {
                  field: r.normalField,
                  modelValue: s.model.value,
                  "onUpdate:modelValue": t[4] || (t[4] = (A) => s.model.value = A)
                }, null, 8, ["field", "modelValue"]),
                O(" And "),
                m(c, {
                  field: r.normalField,
                  modelValue: s.model.value2,
                  "onUpdate:modelValue": t[5] || (t[5] = (A) => s.model.value2 = A)
                }, null, 8, ["field", "modelValue"])
              ], 64)) : (o(), d(S, { key: 1 }, [
                m(u, {
                  field: r.normalField,
                  modelValue: s.model.value,
                  "onUpdate:modelValue": t[6] || (t[6] = (A) => s.model.value = A)
                }, null, 8, ["field", "modelValue"]),
                O(" And "),
                m(u, {
                  field: r.normalField,
                  modelValue: s.model.value2,
                  "onUpdate:modelValue": t[7] || (t[7] = (A) => s.model.value2 = A)
                }, null, 8, ["field", "modelValue"])
              ], 64))
            ])) : _("", !0),
            r.inputType == "daterelative" ? (o(), d("div", r0, [
              m(f, null, {
                default: h(() => [
                  m(l, { style: { width: "80px" } }, {
                    default: h(() => [
                      m(u, {
                        field: r.relativeNumberField,
                        modelValue: s.model.value,
                        "onUpdate:modelValue": t[8] || (t[8] = (A) => s.model.value = A)
                      }, null, 8, ["field", "modelValue"])
                    ]),
                    _: 1
                  }),
                  m(l, null, {
                    default: h(() => [
                      m(a, {
                        modelValue: s.model.value2,
                        "onUpdate:modelValue": t[9] || (t[9] = (A) => s.model.value2 = A),
                        field: r.relativePeriodField
                      }, null, 8, ["modelValue", "field"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ])) : _("", !0),
            r.inputType == "daterange" ? (o(), d("div", i0, [
              m(p, {
                field: r.dateField,
                modelValue: s.model.value,
                "onUpdate:modelValue": t[10] || (t[10] = (A) => s.model.value = A)
              }, null, 8, ["field", "modelValue"]),
              O(" And "),
              m(p, {
                field: r.dateField,
                modelValue: s.model.value2,
                "onUpdate:modelValue": t[11] || (t[11] = (A) => s.model.value2 = A)
              }, null, 8, ["field", "modelValue"])
            ])) : _("", !0),
            r.inputType == "date" ? (o(), d("div", s0, [
              m(p, {
                field: r.dateField,
                modelValue: s.model.value,
                "onUpdate:modelValue": t[12] || (t[12] = (A) => s.model.value = A)
              }, null, 8, ["field", "modelValue"])
            ])) : _("", !0),
            r.inputType == "reference" ? (o(), d("div", a0, [
              m(g, {
                field: r.singleReferenceField,
                modelValue: s.model.value,
                "onUpdate:modelValue": t[13] || (t[13] = (A) => s.model.value = A)
              }, null, 8, ["field", "modelValue"])
            ])) : _("", !0),
            r.inputType == "multireference" ? (o(), d("div", l0, [
              m(g, {
                field: r.multiReferenceField,
                modelValue: s.model.values,
                "onUpdate:modelValue": t[14] || (t[14] = (A) => s.model.values = A)
              }, null, 8, ["field", "modelValue"])
            ])) : _("", !0),
            r.inputType == "boolean" ? (o(), d("div", o0, [
              m(f, {
                gap: "",
                center: ""
              }, {
                default: h(() => [
                  m(l, { shrink: "" }, {
                    default: h(() => [
                      m(v, {
                        onClick: t[15] || (t[15] = (A) => s.model.value = !s.model.value),
                        value: s.model.value
                      }, null, 8, ["value"])
                    ]),
                    _: 1
                  }),
                  m(l, null, {
                    default: h(() => [
                      O(b(s.model.value ? "True" : "False"), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ])) : _("", !0),
            r.inputType == "none" ? (o(), d("div", u0)) : _("", !0),
            r.inputType == "number" ? (o(), d("div", d0, [
              r.fieldWidget == "currency" ? (o(), k(c, {
                key: 0,
                field: r.normalField,
                modelValue: s.model.value,
                "onUpdate:modelValue": t[16] || (t[16] = (A) => s.model.value = A)
              }, null, 8, ["field", "modelValue"])) : (o(), k(u, {
                key: 1,
                field: r.normalField,
                modelValue: s.model.value,
                "onUpdate:modelValue": t[17] || (t[17] = (A) => s.model.value = A)
              }, null, 8, ["field", "modelValue"]))
            ])) : _("", !0),
            r.inputType == "normal" ? (o(), d("div", c0, [
              r.hasOptions ? (o(), k(a, {
                key: 0,
                modelValue: s.model.value,
                "onUpdate:modelValue": t[18] || (t[18] = (A) => s.model.value = A),
                field: r.singleOptionsField
              }, null, 8, ["modelValue", "field"])) : (o(), k(u, {
                key: 1,
                field: r.normalField,
                modelValue: s.model.value,
                "onUpdate:modelValue": t[19] || (t[19] = (A) => s.model.value = A)
              }, null, 8, ["field", "modelValue"]))
            ])) : _("", !0)
          ]),
          _: 1
        })) : _("", !0),
        n.enableRemove ? (o(), k(l, {
          key: 2,
          shrink: ""
        }, {
          default: h(() => [
            m(T, {
              size: "sm",
              icon: "",
              onClick: t[20] || (t[20] = (A) => e.$emit("remove"))
            }, {
              default: h(() => [
                m(x, { icon: "fa-times" })
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
const m0 = /* @__PURE__ */ E(Q1, [["render", f0]]);
const h0 = {
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
      handler: an(function(e) {
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
      var a = e.$sdk.utils.mapFields(t, { includeArrayDelimeter: !0 });
      return a;
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
    FilterCondition: m0,
    NativeSelect: Pt
  }
}, p0 = {
  key: 0,
  class: "filter-rule"
}, y0 = { class: "top" }, _0 = { class: "summary" }, g0 = /* @__PURE__ */ w("span", { class: "line" }, null, -1), v0 = { class: "operator" };
function b0(e, t, n, i, s, r) {
  const a = y("native-select"), l = y("flex-cell"), u = y("ux-icon"), c = y("ux-button"), f = y("flex-row"), p = y("filter-condition");
  return n.definition ? (o(), d("div", p0, [
    w("div", y0, [
      m(f, null, {
        default: h(() => [
          m(l, null, {
            default: h(() => [
              w("div", _0, [
                O(" Match "),
                m(a, {
                  modelValue: s.model.operator,
                  "onUpdate:modelValue": t[0] || (t[0] = (g) => s.model.operator = g),
                  field: r.operatorField
                }, {
                  default: h(() => [
                    O(b(r.summary), 1)
                  ]),
                  _: 1
                }, 8, ["modelValue", "field"]),
                O(" of the following conditions ")
              ])
            ]),
            _: 1
          }),
          n.enableRemove ? (o(), k(l, {
            key: 0,
            onClick: t[1] || (t[1] = (g) => e.$emit("remove")),
            shrink: ""
          }, {
            default: h(() => [
              m(c, {
                size: "sm",
                icon: ""
              }, {
                default: h(() => [
                  m(u, { icon: "fa-trash" })
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
    (o(!0), d(S, null, $(s.model.filters, (g, v) => (o(), k(f, {
      key: `condition-${v}`
    }, {
      default: h(() => [
        v != 0 ? (o(), k(l, {
          key: 0,
          class: L(["operator-cell", [s.model.operator, { last: v == s.model.filters.length }]]),
          vcenter: "",
          shrink: ""
        }, {
          default: h(() => [
            g0,
            w("div", v0, b(s.model.operator), 1)
          ]),
          _: 2
        }, 1032, ["class"])) : _("", !0),
        m(l, null, {
          default: h(() => [
            m(p, {
              enableRemove: s.model.filters.length > 1,
              fields: r.fields,
              onRemove: (x) => r.removeCondition(v),
              modelValue: s.model.filters[v],
              "onUpdate:modelValue": (x) => s.model.filters[v] = x
            }, null, 8, ["enableRemove", "fields", "onRemove", "modelValue", "onUpdate:modelValue"])
          ]),
          _: 2
        }, 1024)
      ]),
      _: 2
    }, 1024))), 128)),
    m(c, {
      size: "sm",
      onClick: r.addCondition
    }, {
      default: h(() => [
        O(" Add Condition "),
        m(u, {
          icon: "fa-plus",
          right: ""
        })
      ]),
      _: 1
    }, 8, ["onClick"])
  ])) : _("", !0);
}
const k0 = /* @__PURE__ */ E(h0, [["render", b0]]);
const x0 = {
  components: {
    FilterRule: k0,
    NativeSelect: Pt
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
      handler: an(function(e) {
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
}, w0 = { class: "filters" }, S0 = {
  key: 0,
  class: "top"
}, O0 = { class: "summary" };
function T0(e, t, n, i, s, r) {
  const a = y("native-select"), l = y("filter-rule"), u = y("ux-button"), c = y("flex-body"), f = y("flex-column");
  return o(), k(f, { class: "filter-builder" }, {
    default: h(() => [
      m(c, null, {
        default: h(() => [
          w("div", w0, [
            s.model && s.model.filters && s.model.filters.length ? (o(), d("div", S0, [
              w("div", O0, [
                O(" Match "),
                m(a, {
                  modelValue: s.model.operator,
                  "onUpdate:modelValue": t[0] || (t[0] = (p) => s.model.operator = p),
                  field: r.operatorField
                }, {
                  default: h(() => [
                    O(b(r.summary), 1)
                  ]),
                  _: 1
                }, 8, ["modelValue", "field"]),
                O(" of the following rules ")
              ])
            ])) : _("", !0),
            (o(!0), d(S, null, $(s.model.filters, (p, g) => (o(), k(l, {
              enableRemove: "",
              key: `rule-${g}`,
              onRemove: (v) => r.removeRule(g),
              definition: n.definition,
              modelValue: s.model.filters[g],
              "onUpdate:modelValue": (v) => s.model.filters[g] = v,
              index: g
            }, null, 8, ["onRemove", "definition", "modelValue", "onUpdate:modelValue", "index"]))), 128)),
            m(u, {
              size: "sm",
              onClick: t[1] || (t[1] = (p) => r.addRule())
            }, {
              default: h(() => [
                O("Add Filter Rule")
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
const eo = /* @__PURE__ */ E(x0, [["render", T0], ["__scopeId", "data-v-833f09b6"]]);
const E0 = {
  mixins: [ne],
  components: {
    FilterBuilder: eo
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
}, V0 = {
  key: 0,
  class: "ux-field-title"
}, C0 = {
  key: 0,
  class: "ux-required-marker"
}, A0 = {
  key: 1,
  class: "ux-field-description"
}, M0 = { key: 2 };
function I0(e, t, n, i, s, r) {
  const a = y("filter-builder"), l = y("flex-cell"), u = y("ux-icon"), c = y("ux-button"), f = y("flex-row");
  return o(), d(S, null, [
    e.showLabel ? (o(), d("label", V0, [
      O(b(e.label) + " (" + b(r.definitionTitle) + ") ", 1),
      e.required ? (o(), d("span", C0, "*")) : _("", !0)
    ])) : _("", !0),
    e.showDescription ? (o(), d("div", A0, b(e.description), 1)) : _("", !0),
    e.multiValue ? (o(), d("div", M0, [
      (o(!0), d(S, null, $(e.model, (p, g) => (o(), k(f, {
        class: "ux-text-row",
        key: g
      }, {
        default: h(() => [
          m(l, null, {
            default: h(() => [
              m(a, {
                definition: s.definition,
                modelValue: e.model[g],
                "onUpdate:modelValue": (v) => e.model[g] = v
              }, null, 8, ["definition", "modelValue", "onUpdate:modelValue"])
            ]),
            _: 2
          }, 1024),
          m(l, {
            shrink: "",
            vcenter: ""
          }, {
            default: h(() => [
              e.canRemoveValue ? (o(), k(c, {
                key: 0,
                tag: "a",
                icon: "",
                onClick: (v) => e.remove(p)
              }, {
                default: h(() => [
                  m(u, { icon: "fa-times" })
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
        default: h(() => [
          O(b(e.addLabel), 1)
        ]),
        _: 1
      })) : _("", !0)
    ])) : (o(), k(a, {
      key: 3,
      definition: s.definition,
      modelValue: e.model,
      "onUpdate:modelValue": t[1] || (t[1] = (p) => e.model = p)
    }, null, 8, ["definition", "modelValue"]))
  ], 64);
}
const F0 = /* @__PURE__ */ E(E0, [["render", I0], ["__scopeId", "data-v-63053873"]]);
function D0(e, t, n) {
  return e + (t - e) * (n / 100);
}
const $0 = {
  props: {
    modelValue: {
      type: Number
    },
    min: {
      type: Number,
      default: 0
    },
    step: {
      type: Number,
      default: 1
    },
    max: {
      type: Number,
      default: 100
    },
    prefix: {
      type: String,
      default: ""
    },
    suffix: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      model: this.modelValue
    };
  },
  watch: {
    model(e, t) {
      this.$emit("update:modelValue", Number(e));
    }
  },
  mounted() {
    this.attachListeners();
  },
  beforeUnmount() {
    this.detachListeners();
  },
  methods: {
    inputReceived(e) {
      const t = this, n = t.$refs.range, i = t.$refs.bubble, s = n.value, r = n.min ? n.min : 0, a = n.max ? n.max : 100;
      let l = Number((s - r) * 100 / (a - r));
      l = D0(1, 99, l), i.innerHTML = `${t.prefix}${s}${t.suffix}`, i.style.left = `${l}%`;
    },
    attachListeners() {
      const e = this, t = e.$refs.range;
      e.$refs.bubble, t.addEventListener("input", e.inputReceived);
    },
    detachListeners() {
      const e = this, t = e.$refs.range;
      e.$refs.bubble, t.addEventListener("input", e.inputReceived);
    }
  }
}, N0 = { class: "ux-range-slider-wrap" }, L0 = ["min", "step", "max"], P0 = {
  ref: "bubble",
  class: "ux-range-bubble"
};
function U0(e, t, n, i, s, r) {
  return o(), d("div", N0, [
    K(w("input", {
      ref: "range",
      min: n.min,
      step: n.step,
      max: n.max,
      "onUpdate:modelValue": t[0] || (t[0] = (a) => s.model = a),
      type: "range",
      class: "ux-range-slider"
    }, null, 8, L0), [
      [pe, s.model]
    ]),
    w("output", P0, null, 512)
  ]);
}
const j0 = /* @__PURE__ */ E($0, [["render", U0], ["__scopeId", "data-v-4bf812c1"]]);
const R0 = {
  components: {
    RangeSlider: j0
  },
  props: {
    modelValue: {
      type: [String, Array]
    }
  },
  computed: {
    sliderPrefix() {
      return this.field.prefix || "";
    },
    sliderSuffix() {
      return this.field.suffix || "";
    },
    sliderStepValue() {
      return parseFloat(this.field.stepValue) || 1;
    },
    minSliderValue() {
      return parseFloat(this.field.minValue) || 0;
    },
    maxSliderValue() {
      return parseFloat(this.field.maxValue) || 100;
    }
  },
  mixins: [ne],
  methods: {
    getNewDefaultEntry() {
      return "";
    }
  }
}, B0 = {
  key: 0,
  class: "ux-field-title"
}, z0 = {
  key: 0,
  class: "ux-required-marker"
}, H0 = {
  key: 1,
  class: "ux-field-description"
}, q0 = { key: 2 }, G0 = { class: "ux-slider-limit ux-slider-limit-value" }, W0 = { class: "ux-slider-limit ux-slider-limit-value" };
function K0(e, t, n, i, s, r) {
  const a = y("range-slider"), l = y("flex-cell"), u = y("flex-row"), c = y("ux-icon"), f = y("ux-button");
  return o(), d(S, null, [
    e.showLabel ? (o(), d("label", B0, [
      O(b(e.label) + " ", 1),
      e.required ? (o(), d("span", z0, "*")) : _("", !0)
    ])) : _("", !0),
    e.showDescription ? (o(), d("div", H0, b(e.description), 1)) : _("", !0),
    e.multiValue ? (o(), d("div", q0, [
      (o(!0), d(S, null, $(e.model, (p, g) => (o(), k(u, {
        class: "ux-slider-row",
        key: g
      }, {
        default: h(() => [
          m(l, null, {
            default: h(() => [
              m(u, {
                center: "",
                gap: ""
              }, {
                default: h(() => [
                  m(l, null, {
                    default: h(() => [
                      m(a, {
                        type: "range",
                        min: r.minSliderValue,
                        step: r.sliderStepValue,
                        prefix: r.sliderPrefix,
                        suffix: r.sliderSuffix,
                        max: r.maxSliderValue,
                        modelValue: e.model[g],
                        "onUpdate:modelValue": (v) => e.model[g] = v,
                        class: "ux-slider"
                      }, null, 8, ["min", "step", "prefix", "suffix", "max", "modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  m(l, { shrink: "" }, {
                    default: h(() => [
                      w("span", G0, b(r.sliderPrefix) + b(e.model[g]) + b(r.sliderSuffix), 1)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024)
            ]),
            _: 2
          }, 1024),
          m(l, {
            shrink: "",
            vcenter: ""
          }, {
            default: h(() => [
              e.canRemoveValue ? (o(), k(f, {
                key: 0,
                tag: "a",
                icon: "",
                onClick: (v) => e.remove(p)
              }, {
                default: h(() => [
                  m(c, { icon: "fa-times" })
                ]),
                _: 2
              }, 1032, ["onClick"])) : _("", !0)
            ]),
            _: 2
          }, 1024)
        ]),
        _: 2
      }, 1024))), 128)),
      e.canAddValue ? (o(), k(f, {
        key: 0,
        onClick: t[0] || (t[0] = (p) => e.add())
      }, {
        default: h(() => [
          O(b(e.addLabel), 1)
        ]),
        _: 1
      })) : _("", !0)
    ])) : (o(), k(u, {
      key: 3,
      center: "",
      gap: ""
    }, {
      default: h(() => [
        m(l, null, {
          default: h(() => [
            m(a, {
              type: "range",
              min: r.minSliderValue,
              step: r.sliderStepValue,
              prefix: r.sliderPrefix,
              suffix: r.sliderSuffix,
              max: r.maxSliderValue,
              modelValue: e.model,
              "onUpdate:modelValue": t[1] || (t[1] = (p) => e.model = p),
              class: "ux-slider"
            }, null, 8, ["min", "step", "prefix", "suffix", "max", "modelValue"])
          ]),
          _: 1
        }),
        m(l, { shrink: "" }, {
          default: h(() => [
            w("span", W0, b(r.sliderPrefix) + b(e.model) + b(r.sliderSuffix), 1)
          ]),
          _: 1
        })
      ]),
      _: 1
    }))
  ], 64);
}
const Y0 = /* @__PURE__ */ E(R0, [["render", K0], ["__scopeId", "data-v-5918d2a7"]]);
const Z0 = {
  mixins: [ne],
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
}, J0 = {
  key: 0,
  class: "ux-field-title"
}, X0 = {
  key: 0,
  class: "ux-required-marker"
}, Q0 = {
  key: 1,
  class: "ux-field-description"
};
function ek(e, t, n, i, s, r) {
  const a = y("ux-switch"), l = y("flex-cell"), u = y("flex-row");
  return o(), k(u, {
    onClick: t[1] || (t[1] = (c) => e.touch()),
    gap: ""
  }, {
    default: h(() => [
      m(l, {
        vcenter: "",
        shrink: ""
      }, {
        default: h(() => [
          m(a, {
            value: r.model,
            onClick: t[0] || (t[0] = (c) => r.model = !r.model)
          }, null, 8, ["value"])
        ]),
        _: 1
      }),
      m(l, { vcenter: "" }, {
        default: h(() => [
          w("div", null, [
            e.showLabel ? (o(), d("label", J0, [
              O(b(e.label) + " ", 1),
              e.required ? (o(), d("span", X0, "*")) : _("", !0)
            ])) : _("", !0),
            e.showDescription ? (o(), d("div", Q0, b(e.description), 1)) : _("", !0)
          ])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const tk = /* @__PURE__ */ E(Z0, [["render", ek], ["__scopeId", "data-v-2112a822"]]);
const nk = {
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
}, rk = ["accept", "multiple"];
function ik(e, t, n, i, s, r) {
  const a = y("ux-button");
  return o(), d("label", {
    class: L(["file-drop", { over: s.over }]),
    onDragover: t[2] || (t[2] = W((...l) => r.fileover && r.fileover(...l), ["prevent", "stop"])),
    onDragleave: t[3] || (t[3] = W((...l) => r.fileout && r.fileout(...l), ["prevent", "stop"])),
    onDrop: t[4] || (t[4] = W((...l) => r.filedrop && r.filedrop(...l), ["prevent", "stop"]))
  }, [
    w("input", {
      ref: "file",
      accept: n.accept,
      type: "file",
      multiple: n.multiple,
      onChange: t[0] || (t[0] = (l) => r.filesSelected(l.target.files))
    }, null, 40, rk),
    w("div", {
      class: "file-drop-ux",
      onClick: t[1] || (t[1] = (...l) => r.clicked && r.clicked(...l))
    }, [
      q(e.$slots, "default", {}, () => [
        m(a, null, {
          default: h(() => [
            O("Select Files")
          ]),
          _: 1
        })
      ], !0)
    ])
  ], 34);
}
const sk = /* @__PURE__ */ E(nk, [["render", ik], ["__scopeId", "data-v-bd74657f"]]);
const ak = {
  mixins: [ne],
  components: {
    FileDrop: sk
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
      const a = t.$sdk.api.CancelToken.source();
      s.cancelToken = a.token, e.cancelToken = a, s.headers = {
        "Content-Type": void 0
      };
      let l = "/file/upload";
      return t.$sdk.fileAPI && (l = `${t.$sdk.fileAPI}${l}`), t.$sdk.api.post(l, n, s).then(function(u) {
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
}, lk = {
  key: 0,
  class: "ux-field-title"
}, ok = {
  key: 0,
  class: "ux-required-marker"
}, uk = {
  key: 1,
  class: "ux-field-description"
}, dk = {
  key: 2,
  class: "files"
}, ck = { class: "size" };
function fk(e, t, n, i, s, r) {
  const a = y("progress-bar"), l = y("flex-cell"), u = y("ux-icon"), c = y("ux-button"), f = y("flex-row"), p = y("file-drop");
  return o(), d(S, null, [
    e.showLabel ? (o(), d("label", lk, [
      O(b(e.label) + " ", 1),
      e.required ? (o(), d("span", ok, "*")) : _("", !0)
    ])) : _("", !0),
    e.showDescription ? (o(), d("div", uk, b(e.description), 1)) : _("", !0),
    s.files && s.files.length ? (o(), d("div", dk, [
      (o(!0), d(S, null, $(s.files, (g, v) => (o(), d("div", {
        class: "file-item",
        key: v
      }, [
        m(f, null, {
          default: h(() => [
            m(l, null, {
              default: h(() => [
                w("strong", null, b(g.name), 1),
                w("div", ck, b(r.filesize(g.size)), 1),
                m(a, {
                  value: g.progress
                }, null, 8, ["value"])
              ]),
              _: 2
            }, 1024),
            m(l, { shrink: "" }, {
              default: h(() => [
                m(c, {
                  icon: "",
                  onClick: (x) => r.remove(v)
                }, {
                  default: h(() => [
                    m(u, { icon: "fa-times" })
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
    e.multiValue ? (o(), d(S, { key: 3 }, [
      e.canAddValue ? (o(), k(p, {
        key: 0,
        multiple: e.multiValue,
        onFiles: r.filesSelected
      }, {
        default: h(() => [
          m(c, null, {
            default: h(() => [
              O("Select Files")
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
      default: h(() => [
        m(c, null, {
          default: h(() => [
            O("Select File")
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["onFiles"]))
  ], 64);
}
const mk = /* @__PURE__ */ E(ak, [["render", fk], ["__scopeId", "data-v-d29a9855"]]);
const hk = {
  mixins: [ne],
  //TODO check whether we should move draggable into the input mixin
  components: { draggable: Yl },
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
}, pk = {
  key: 0,
  class: "ux-multi-group"
}, yk = {
  key: 0,
  class: "ux-group-title"
}, _k = {
  key: 0,
  class: "ux-field-title"
}, gk = {
  key: 0,
  class: "ux-required-marker"
}, vk = {
  key: 1,
  class: "ux-field-description"
}, bk = {
  key: 0,
  class: "ux-single-group"
}, kk = { class: "ux-group-title" }, xk = {
  key: 0,
  class: "ux-field-title"
}, wk = {
  key: 1,
  class: "ux-field-description"
};
function Sk(e, t, n, i, s, r) {
  const a = y("ux-icon"), l = y("flex-cell"), u = y("ux-button"), c = y("flex-row"), f = y("ux-panel-header"), p = y("ux-form"), g = y("ux-panel-body"), v = y("ux-panel"), x = y("draggable");
  return e.multiValue ? (o(), d("div", pk, [
    r.showLabel ? (o(), d("div", yk, [
      r.showLabel ? (o(), d("label", _k, [
        O(b(e.plural || e.title) + " ", 1),
        e.required ? (o(), d("span", gk, "*")) : _("", !0)
      ])) : _("", !0),
      e.showDescription ? (o(), d("div", vk, b(e.description), 1)) : _("", !0)
    ])) : _("", !0),
    r.reorderable ? (o(), k(x, {
      key: 1,
      modelValue: e.model,
      "onUpdate:modelValue": t[1] || (t[1] = (T) => e.model = T),
      group: r.groupKey,
      onStart: t[2] || (t[2] = (T) => s.drag = !0),
      onEnd: t[3] || (t[3] = (T) => s.drag = !1)
    }, {
      item: h(({ element: T, index: A }) => [
        m(v, { ref: "row" }, {
          default: h(() => [
            m(f, null, {
              default: h(() => [
                m(c, {
                  vcenter: "",
                  gap: ""
                }, {
                  default: h(() => [
                    r.reorderable ? (o(), k(l, {
                      key: 0,
                      class: "arrows",
                      shrink: ""
                    }, {
                      default: h(() => [
                        m(a, {
                          left: "",
                          icon: "fa-arrows"
                        })
                      ]),
                      _: 1
                    })) : _("", !0),
                    m(l, { vcenter: "" }, {
                      default: h(() => [
                        w("div", null, [
                          w("strong", null, b(r.multiLabel(T, A)), 1)
                        ])
                      ]),
                      _: 2
                    }, 1024),
                    r.collapsible ? (o(), k(l, {
                      key: 1,
                      shrink: ""
                    }, {
                      default: h(() => [
                        m(u, {
                          size: "xs",
                          tag: "a",
                          onClick: (G) => T.collapsed = !T.collapsed
                        }, {
                          default: h(() => [
                            O(b(T.collapsed ? "More" : "Less") + " ", 1),
                            m(a, {
                              right: "",
                              icon: T.collapsed ? "fa-angle-down" : "fa-angle-up"
                            }, null, 8, ["icon"])
                          ]),
                          _: 2
                        }, 1032, ["onClick"])
                      ]),
                      _: 2
                    }, 1024)) : _("", !0),
                    m(l, {
                      vcenter: "",
                      shrink: ""
                    }, {
                      default: h(() => [
                        e.canRemoveValue ? (o(), k(u, {
                          key: 0,
                          icon: "",
                          tag: "a",
                          onClick: (G) => e.remove(T)
                        }, {
                          default: h(() => [
                            m(a, { icon: "fa-times" })
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
            K(m(g, {
              onKeydown: t[0] || (t[0] = ge((G) => r.enterPress(G), ["enter"]))
            }, {
              default: h(() => [
                m(p, {
                  trail: n.trail,
                  ref: "form",
                  includeOfficeOnly: n.includeOfficeOnly,
                  submission: n.submission,
                  "onForm:state": r.stateChange,
                  parentModel: e.parentModel,
                  modelValue: e.model[A],
                  "onUpdate:modelValue": (G) => e.model[A] = G,
                  flex: r.sameLine,
                  fields: e.field.fields
                }, null, 8, ["trail", "includeOfficeOnly", "submission", "onForm:state", "parentModel", "modelValue", "onUpdate:modelValue", "flex", "fields"])
              ]),
              _: 2
            }, 1536), [
              [Yi, !r.collapsible || !T.collapsed]
            ])
          ]),
          _: 2
        }, 1536)
      ]),
      _: 1
    }, 8, ["modelValue", "group"])) : (o(!0), d(S, { key: 2 }, $(e.model, (T, A) => (o(), k(v, {
      ref_for: !0,
      ref: "row"
    }, {
      default: h(() => [
        m(f, null, {
          default: h(() => [
            m(c, {
              vcenter: "",
              gap: ""
            }, {
              default: h(() => [
                r.reorderable ? (o(), k(l, {
                  key: 0,
                  shrink: ""
                }, {
                  default: h(() => [
                    m(a, { icon: "fa-arrows" })
                  ]),
                  _: 1
                })) : _("", !0),
                m(l, { vcenter: "" }, {
                  default: h(() => [
                    w("div", null, [
                      w("strong", null, b(r.multiLabel(T, A)), 1)
                    ])
                  ]),
                  _: 2
                }, 1024),
                r.collapsible ? (o(), k(l, {
                  key: 1,
                  shrink: ""
                }, {
                  default: h(() => [
                    m(u, {
                      size: "xs",
                      tag: "a",
                      onClick: (G) => T.collapsed = !T.collapsed
                    }, {
                      default: h(() => [
                        O(b(T.collapsed ? "More" : "Less") + " ", 1),
                        m(a, {
                          right: "",
                          icon: T.collapsed ? "fa-angle-down" : "fa-angle-up"
                        }, null, 8, ["icon"])
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ]),
                  _: 2
                }, 1024)) : _("", !0),
                m(l, {
                  vcenter: "",
                  shrink: ""
                }, {
                  default: h(() => [
                    e.canRemoveValue ? (o(), k(u, {
                      key: 0,
                      icon: "",
                      tag: "a",
                      onClick: (G) => e.remove(T)
                    }, {
                      default: h(() => [
                        m(a, { icon: "fa-times" })
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
        K(m(g, {
          onKeydown: t[4] || (t[4] = ge((G) => r.enterPress(G), ["enter"]))
        }, {
          default: h(() => [
            m(p, {
              ref_for: !0,
              ref: "form",
              trail: n.trail,
              includeOfficeOnly: n.includeOfficeOnly,
              submission: n.submission,
              "onForm:state": r.stateChange,
              parentModel: e.parentModel,
              modelValue: e.model[A],
              "onUpdate:modelValue": (G) => e.model[A] = G,
              flex: r.sameLine,
              fields: e.field.fields
            }, null, 8, ["trail", "includeOfficeOnly", "submission", "onForm:state", "parentModel", "modelValue", "onUpdate:modelValue", "flex", "fields"])
          ]),
          _: 2
        }, 1536), [
          [Yi, !T.collapsed]
        ])
      ]),
      _: 2
    }, 1536))), 256)),
    e.canAddValue ? (o(), k(u, {
      key: 3,
      onClick: t[5] || (t[5] = (T) => e.add())
    }, {
      default: h(() => [
        O(b(e.addLabel) + " ", 1),
        m(a, {
          icon: "fa-plus",
          right: ""
        })
      ]),
      _: 1
    })) : _("", !0)
  ])) : (o(), d(S, { key: 1 }, [
    e.widget === "form" ? (o(), d(S, { key: 0 }, [
      e.model ? (o(), d(S, { key: 0 }, [
        e.minimum === 0 ? (o(), k(v, { key: 0 }, {
          default: h(() => [
            m(f, null, {
              default: h(() => [
                m(c, {
                  vcenter: "",
                  gap: ""
                }, {
                  default: h(() => [
                    m(l, { vcenter: "" }, {
                      default: h(() => [
                        w("div", null, [
                          w("strong", null, b(e.label), 1)
                        ])
                      ]),
                      _: 1
                    }),
                    m(l, {
                      vcenter: "",
                      shrink: ""
                    }, {
                      default: h(() => [
                        m(u, {
                          icon: "",
                          tag: "a",
                          onClick: t[6] || (t[6] = (T) => e.model = void 0)
                        }, {
                          default: h(() => [
                            m(a, { icon: "fa-times" })
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
            m(g, null, {
              default: h(() => [
                m(p, {
                  ref: "form",
                  trail: n.trail,
                  includeOfficeOnly: n.includeOfficeOnly,
                  submission: n.submission,
                  "onForm:state": r.stateChange,
                  parentModel: e.parentModel,
                  modelValue: e.model,
                  "onUpdate:modelValue": t[7] || (t[7] = (T) => e.model = T),
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
          "onUpdate:modelValue": t[8] || (t[8] = (T) => e.model = T),
          flex: r.sameLine,
          fields: e.field.fields
        }, null, 8, ["trail", "includeOfficeOnly", "submission", "onForm:state", "parentModel", "modelValue", "flex", "fields"]))
      ], 64)) : (o(), k(u, {
        key: 1,
        onClick: t[9] || (t[9] = (T) => r.createSingleObject())
      }, {
        default: h(() => [
          O("Add " + b(e.label) + " ", 1),
          m(a, {
            icon: "fa-plus",
            right: ""
          })
        ]),
        _: 1
      }))
    ], 64)) : (o(), d(S, { key: 1 }, [
      r.showLabel ? (o(), d("div", bk, [
        w("div", kk, [
          r.showLabel ? (o(), d("label", xk, b(e.title), 1)) : _("", !0),
          e.showDescription ? (o(), d("div", wk, b(e.description), 1)) : _("", !0)
        ]),
        m(v, null, {
          default: h(() => [
            m(g, null, {
              default: h(() => [
                m(p, {
                  ref: "form",
                  trail: n.trail,
                  includeOfficeOnly: n.includeOfficeOnly,
                  submission: n.submission,
                  "onForm:state": r.stateChange,
                  parentModel: e.parentModel,
                  modelValue: e.model,
                  "onUpdate:modelValue": t[10] || (t[10] = (T) => e.model = T),
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
        "onUpdate:modelValue": t[11] || (t[11] = (T) => e.model = T),
        flex: r.sameLine,
        fields: e.field.fields
      }, null, 8, ["trail", "includeOfficeOnly", "submission", "onForm:state", "parentModel", "modelValue", "flex", "fields"]))
    ], 64))
  ], 64));
}
const Ok = /* @__PURE__ */ E(hk, [["render", Sk], ["__scopeId", "data-v-a6158951"]]), Tk = {
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
function Ek(e, t, n, i, s, r) {
  return q(e.$slots, "default", { plainValue: r.plainValue }, () => [
    w("pre", null, b(n.option), 1)
  ]);
}
const Vk = /* @__PURE__ */ E(Tk, [["render", Ek]]);
function Ck(e) {
  return e === void 0 || typeof e > "u" || e === null || String(e) === "null" || String(e) === "undefined";
}
const Ak = {
  components: {
    OptionSlot: Vk
  },
  props: {
    modelValue: {
      // type: [Object, Array],
    }
  },
  mixins: [ne],
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
      return Ck(e) ? t.multiValue ? e = [] : e = void 0 : t.multiValue ? e = (e || []).map(function(n) {
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
}, Mk = {
  key: 0,
  class: "ux-field-title"
}, Ik = {
  key: 0,
  class: "ux-required-marker"
}, Fk = {
  key: 1,
  class: "ux-field-description"
}, Dk = { class: "buttons" };
function $k(e, t, n, i, s, r) {
  const a = y("ux-icon"), l = y("ux-button"), u = y("option-slot");
  return o(), d(S, null, [
    e.showLabel ? (o(), d("label", Mk, [
      O(b(e.label) + " ", 1),
      e.required ? (o(), d("span", Ik, "*")) : _("", !0)
    ])) : _("", !0),
    e.showDescription ? (o(), d("div", Fk, b(e.description), 1)) : _("", !0),
    w("div", Dk, [
      (o(!0), d(S, null, $(e.selectableOptions, (c) => (o(), k(u, { option: c }, {
        default: h(({ plainValue: f }) => [
          m(l, {
            class: L({ active: r.selectionHash[f] }),
            onClick: (p) => r.toggle(f)
          }, {
            default: h(() => [
              O(b(e.getLabel(c)) + " ", 1),
              m(a, {
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
const Nk = /* @__PURE__ */ E(Ak, [["render", $k], ["__scopeId", "data-v-552abf71"]]);
const Lk = {
  props: {
    modelValue: {
      type: Object
    }
  },
  mixins: [ne],
  computed: {},
  methods: {
    getNewDefaultEntry() {
      return {};
    }
  }
}, Pk = {
  key: 0,
  class: "ux-field-title"
}, Uk = {
  key: 0,
  class: "ux-required-marker"
}, jk = {
  key: 1,
  class: "ux-field-description"
}, Rk = { key: 2 }, Bk = { key: 3 };
function zk(e, t, n, i, s, r) {
  const a = y("flex-cell"), l = y("ux-icon"), u = y("ux-button"), c = y("flex-row");
  return o(), d(S, null, [
    e.showLabel ? (o(), d("label", Pk, [
      O(b(e.label) + " ", 1),
      e.required ? (o(), d("span", Uk, "*")) : _("", !0)
    ])) : _("", !0),
    e.showDescription ? (o(), d("div", jk, b(e.description), 1)) : _("", !0),
    e.multiValue ? (o(), d("div", Rk, [
      (o(!0), d(S, null, $(e.model, (f, p) => (o(), k(c, {
        class: "ux-text-row",
        key: p
      }, {
        default: h(() => [
          m(a, null, {
            default: h(() => [
              w("pre", null, b(f), 1)
            ]),
            _: 2
          }, 1024),
          m(a, {
            shrink: "",
            vcenter: ""
          }, {
            default: h(() => [
              e.canRemoveValue ? (o(), k(u, {
                key: 0,
                tag: "a",
                icon: "",
                onClick: (g) => e.remove(f)
              }, {
                default: h(() => [
                  m(l, { icon: "fa-times" })
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
        default: h(() => [
          O(b(e.addLabel) + " ", 1),
          m(l, {
            icon: "fa-plus",
            right: ""
          })
        ]),
        _: 1
      })) : _("", !0)
    ])) : (o(), d("pre", Bk, b(e.model), 1))
  ], 64);
}
const Hk = /* @__PURE__ */ E(Lk, [["render", zk], ["__scopeId", "data-v-aae5394a"]]);
const qk = {
  props: {
    modelValue: {
      type: [String, Array]
    }
  },
  mixins: [ne],
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
}, Fr = (e) => (at("data-v-c8feb6c2"), e = e(), lt(), e), Gk = {
  key: 0,
  class: "ux-field-title"
}, Wk = {
  key: 0,
  class: "ux-required-marker"
}, Kk = {
  key: 1,
  class: "ux-field-description"
}, Yk = { key: 2 }, Zk = { class: "ux-text-wrap prefixed" }, Jk = /* @__PURE__ */ Fr(() => /* @__PURE__ */ w("span", { class: "ux-text-prefix" }, "Label", -1)), Xk = ["onBlur", "on:update:modelValue", "onUpdate:modelValue"], Qk = ["onBlur", "on:update:modelValue", "onUpdate:modelValue"], ex = { class: "ux-text-wrap prefixed" }, tx = /* @__PURE__ */ Fr(() => /* @__PURE__ */ w("span", { class: "ux-text-prefix" }, "Value", -1)), nx = ["onFocus", "onUpdate:modelValue"], rx = ["onFocus", "onUpdate:modelValue"], ix = { class: "ux-text-wrap prefixed" }, sx = /* @__PURE__ */ Fr(() => /* @__PURE__ */ w("span", { class: "ux-text-prefix" }, "Label", -1)), ax = { class: "ux-text-wrap prefixed" }, lx = /* @__PURE__ */ Fr(() => /* @__PURE__ */ w("span", { class: "ux-text-prefix" }, "Value", -1));
function ox(e, t, n, i, s, r) {
  const a = y("flex-cell"), l = y("ux-icon"), u = y("ux-button"), c = y("flex-row");
  return o(), d(S, null, [
    e.showLabel ? (o(), d("label", Gk, [
      O(b(e.label) + " ", 1),
      e.required ? (o(), d("span", Wk, "*")) : _("", !0)
    ])) : _("", !0),
    e.showDescription ? (o(), d("div", Kk, b(e.description), 1)) : _("", !0),
    e.multiValue ? (o(), d("div", Yk, [
      (o(!0), d(S, null, $(e.model, (f, p) => (o(), k(c, {
        class: "ux-text-row",
        key: p
      }, {
        default: h(() => [
          m(a, null, {
            default: h(() => [
              w("div", Zk, [
                Jk,
                r.lazy ? K((o(), d("input", {
                  key: 0,
                  class: "ux-field-focus ux-text-input-multiple",
                  placeholder: "Label",
                  onFocus: t[0] || (t[0] = (...g) => e.touch && e.touch(...g)),
                  ref_for: !0,
                  ref: "input",
                  onKeydown: t[1] || (t[1] = ge(W((g) => e.add(), ["stop", "prevent"]), ["enter"])),
                  onBlur: (g) => r.titleBlurred(p),
                  "on:update:modelValue": (g) => r.entryTitleChanged(p),
                  "onUpdate:modelValue": (g) => e.model[p].title = g
                }, null, 40, Xk)), [
                  [
                    pe,
                    e.model[p].title,
                    void 0,
                    { lazy: !0 }
                  ]
                ]) : _("", !0),
                r.lazy ? _("", !0) : K((o(), d("input", {
                  key: 1,
                  class: "ux-field-focus ux-text-input-multiple",
                  placeholder: "Label",
                  onFocus: t[2] || (t[2] = (...g) => e.touch && e.touch(...g)),
                  ref_for: !0,
                  ref: "input",
                  onKeydown: t[3] || (t[3] = ge(W((g) => e.add(), ["stop", "prevent"]), ["enter"])),
                  onBlur: (g) => r.titleBlurred(p),
                  "on:update:modelValue": (g) => r.entryTitleChanged(p),
                  "onUpdate:modelValue": (g) => e.model[p].title = g
                }, null, 40, Qk)), [
                  [pe, e.model[p].title]
                ])
              ])
            ]),
            _: 2
          }, 1024),
          m(a, null, {
            default: h(() => [
              w("div", ex, [
                tx,
                r.lazy ? K((o(), d("input", {
                  key: 0,
                  class: "ux-field-focus ux-text-input-multiple",
                  placeholder: "Value",
                  onFocus: (g) => r.valueTouched(p),
                  ref_for: !0,
                  ref: "valueInput",
                  onKeydown: t[4] || (t[4] = ge(W((g) => e.add(), ["stop", "prevent"]), ["enter"])),
                  "onUpdate:modelValue": (g) => e.model[p].value = g
                }, null, 40, nx)), [
                  [
                    pe,
                    e.model[p].value,
                    void 0,
                    { lazy: !0 }
                  ]
                ]) : _("", !0),
                r.lazy ? _("", !0) : K((o(), d("input", {
                  key: 1,
                  class: "ux-field-focus ux-text-input-multiple",
                  placeholder: "Value",
                  onFocus: (g) => r.valueTouched(p),
                  ref_for: !0,
                  ref: "valueInput",
                  onKeydown: t[5] || (t[5] = ge(W((g) => e.add(), ["stop", "prevent"]), ["enter"])),
                  "onUpdate:modelValue": (g) => e.model[p].value = g
                }, null, 40, rx)), [
                  [pe, e.model[p].value]
                ])
              ])
            ]),
            _: 2
          }, 1024),
          m(a, {
            shrink: "",
            vcenter: ""
          }, {
            default: h(() => [
              e.canRemoveValue ? (o(), k(u, {
                key: 0,
                tag: "a",
                icon: "",
                onClick: (g) => e.remove(f)
              }, {
                default: h(() => [
                  m(l, { icon: "fa-times" })
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
        default: h(() => [
          O(b(r.addLabel) + " ", 1),
          m(l, {
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
      default: h(() => [
        m(a, null, {
          default: h(() => [
            w("div", ix, [
              sx,
              r.lazy ? K((o(), d("input", {
                key: 0,
                class: "ux-field-focus ux-text-input-multiple",
                placeholder: "Label",
                onFocus: t[7] || (t[7] = (...f) => e.touch && e.touch(...f)),
                ref: "input",
                onKeydown: t[8] || (t[8] = ge(W((f) => e.add(), ["stop", "prevent"]), ["enter"])),
                onBlur: t[9] || (t[9] = (f) => r.titleBlurred(e.index)),
                "on:update:modelValue": t[10] || (t[10] = (...f) => r.entryTitleChanged && r.entryTitleChanged(...f)),
                "onUpdate:modelValue": t[11] || (t[11] = (f) => e.model.title = f)
              }, null, 544)), [
                [
                  pe,
                  e.model.title,
                  void 0,
                  { lazy: !0 }
                ]
              ]) : _("", !0),
              r.lazy ? _("", !0) : K((o(), d("input", {
                key: 1,
                class: "ux-field-focus ux-text-input-multiple",
                placeholder: "Label",
                onFocus: t[12] || (t[12] = (...f) => e.touch && e.touch(...f)),
                ref: "input",
                onKeydown: t[13] || (t[13] = ge(W((f) => e.add(), ["stop", "prevent"]), ["enter"])),
                onBlur: t[14] || (t[14] = (f) => r.titleBlurred(e.index)),
                "on:update:modelValue": t[15] || (t[15] = (...f) => r.entryTitleChanged && r.entryTitleChanged(...f)),
                "onUpdate:modelValue": t[16] || (t[16] = (f) => e.model.title = f)
              }, null, 544)), [
                [pe, e.model.title]
              ])
            ])
          ]),
          _: 1
        }),
        m(a, null, {
          default: h(() => [
            w("div", ax, [
              lx,
              r.lazy ? K((o(), d("input", {
                key: 0,
                class: "ux-field-focus ux-text-input-multiple",
                placeholder: "Value",
                onFocus: t[17] || (t[17] = (...f) => r.valueTouched && r.valueTouched(...f)),
                ref: "valueInput",
                onKeydown: t[18] || (t[18] = ge(W((f) => e.add(), ["stop", "prevent"]), ["enter"])),
                "onUpdate:modelValue": t[19] || (t[19] = (f) => e.model.value = f)
              }, null, 544)), [
                [
                  pe,
                  e.model.value,
                  void 0,
                  { lazy: !0 }
                ]
              ]) : _("", !0),
              r.lazy ? _("", !0) : K((o(), d("input", {
                key: 1,
                class: "ux-field-focus ux-text-input-multiple",
                placeholder: "Value",
                onFocus: t[20] || (t[20] = (...f) => r.valueTouched && r.valueTouched(...f)),
                ref: "valueInput",
                onKeydown: t[21] || (t[21] = ge(W((f) => e.add(), ["stop", "prevent"]), ["enter"])),
                "onUpdate:modelValue": t[22] || (t[22] = (f) => e.model.value = f)
              }, null, 544)), [
                [pe, e.model.value]
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
const ux = /* @__PURE__ */ E(qk, [["render", ox], ["__scopeId", "data-v-c8feb6c2"]]);
const dx = {
  components: {
    // VAceEditor,
  },
  methods: {
    injectToken(e) {
      const t = this.editor;
      if (!t)
        return;
      const n = t.session;
      if (!n)
        return;
      const i = this.editor.selection.getRange();
      i && (i.start, i.end, n.replace(i, e), t.focus());
    },
    editorInit(e) {
      this.editor = e;
    },
    focussed() {
      const e = this;
      e.timer && (clearTimeout(e.timer), e.timer = null, console.log("Remove ticked"));
    },
    blurred() {
      console.log("Blurred");
      const e = this;
      console.log("Start timer"), e.timer = setTimeout(function() {
        console.log("Timer ticked"), e.format();
      }, 100);
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
          this.model = e;
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
    tokens: {
      type: Array,
      default() {
        return [];
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
  unmounted() {
    this.editor = null;
  },
  async mounted() {
    this.mounted = !0, this.$sdk.global && this.$sdk.global.injectScript && (this.$sdk.global.injectScript("https://cdnjs.cloudflare.com/ajax/libs/js-beautify/1.14.5/beautify.min.js"), this.$sdk.global.injectScript("https://cdnjs.cloudflare.com/ajax/libs/js-beautify/1.14.5/beautify-css.min.js"), this.$sdk.global.injectScript("https://cdnjs.cloudflare.com/ajax/libs/js-beautify/1.14.5/beautify-html.min.js"));
  },
  data() {
    return {
      showTokens: !1,
      timer: null,
      mounted: !1,
      model: this.modelValue,
      editor: null,
      selectionContext: {}
    };
  }
}, cx = {
  key: 0,
  class: "tokens"
}, fx = {
  key: 0,
  class: "tokens-body"
};
function mx(e, t, n, i, s, r) {
  const a = y("flex-cell"), l = y("ux-icon"), u = y("flex-row"), c = y("ux-button"), f = y("v-ace-editor"), p = y("flex-column");
  return s.mounted ? (o(), k(p, { key: 0 }, {
    default: h(() => [
      n.tokens.length ? (o(), d("div", cx, [
        w("div", {
          class: "tokens-header",
          onClick: t[0] || (t[0] = (g) => s.showTokens = !s.showTokens)
        }, [
          m(u, {
            gap: "",
            center: ""
          }, {
            default: h(() => [
              m(a, null, {
                default: h(() => [
                  O(b(s.showTokens ? "Hide" : "Show") + " Tokens ", 1)
                ]),
                _: 1
              }),
              m(a, { shrink: "" }, {
                default: h(() => [
                  m(l, {
                    icon: s.showTokens ? "fa-angle-up" : "fa-angle-right"
                  }, null, 8, ["icon"])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        s.showTokens ? (o(), d("div", fx, [
          (o(!0), d(S, null, $(n.tokens, (g) => (o(), k(c, {
            size: "xs",
            onClick: W((v) => r.injectToken(g.value), ["stop", "prevent"])
          }, {
            default: h(() => [
              m(l, { icon: "fa-asterisk" }),
              O(" " + b(g.title), 1)
            ]),
            _: 2
          }, 1032, ["onClick"]))), 256))
        ])) : _("", !0)
      ])) : _("", !0),
      m(f, {
        onBlur: r.blurred,
        onFocus: r.focussed,
        readonly: n.readonly,
        class: "editor-wrap",
        value: s.model,
        "onUpdate:value": t[1] || (t[1] = (g) => s.model = g),
        options: { useWorker: !0 },
        onInit: r.editorInit,
        lang: n.lang,
        theme: "tomorrow_night_eighties",
        style: { height: "300px" }
      }, null, 8, ["onBlur", "onFocus", "readonly", "value", "onInit", "lang"])
    ]),
    _: 1
  })) : _("", !0);
}
const hx = /* @__PURE__ */ E(dx, [["render", mx], ["__scopeId", "data-v-a15d6b19"]]);
const px = {
  components: {
    CodeEditor: hx
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
  mixins: [ne],
  methods: {
    enterPress() {
    },
    getNewDefaultEntry() {
      return "";
    }
  }
}, yx = {
  key: 0,
  class: "ux-field-title"
}, _x = {
  key: 0,
  class: "ux-required-marker"
}, gx = {
  key: 1,
  class: "ux-field-description"
}, vx = { key: 2 }, bx = { class: "code-editor-field-wrap" }, kx = {
  key: 3,
  class: "code-editor-field-wrap"
};
function xx(e, t, n, i, s, r) {
  const a = y("code-editor"), l = y("flex-cell"), u = y("ux-icon"), c = y("ux-button"), f = y("flex-row");
  return o(), d("div", {
    onKeydown: t[2] || (t[2] = ge(W((p) => r.enterPress(p), ["stop"]), ["enter"]))
  }, [
    e.showLabel ? (o(), d("label", yx, [
      O(b(e.label) + " ", 1),
      e.required ? (o(), d("span", _x, "*")) : _("", !0)
    ])) : _("", !0),
    e.showDescription ? (o(), d("div", gx, b(e.description), 1)) : _("", !0),
    e.multiValue ? (o(), d("div", vx, [
      (o(!0), d(S, null, $(e.model, (p, g) => (o(), k(f, {
        class: "ux-text-row",
        key: g
      }, {
        default: h(() => [
          m(l, null, {
            default: h(() => [
              w("div", bx, [
                m(a, {
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
          m(l, {
            shrink: "",
            vcenter: ""
          }, {
            default: h(() => [
              e.canRemoveValue ? (o(), k(c, {
                key: 0,
                tag: "a",
                icon: "",
                onClick: (v) => e.remove(p)
              }, {
                default: h(() => [
                  m(u, { icon: "fa-times" })
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
        default: h(() => [
          O(b(e.addLabel), 1)
        ]),
        _: 1
      })) : _("", !0)
    ])) : (o(), d("div", kx, [
      m(a, {
        lang: r.syntax,
        class: "ux-code-editor ux-field-focus ux-text-area-single",
        onFocus: e.touch,
        modelValue: e.model,
        "onUpdate:modelValue": t[1] || (t[1] = (p) => e.model = p)
      }, null, 8, ["lang", "onFocus", "modelValue"])
    ]))
  ], 32);
}
const wx = /* @__PURE__ */ E(px, [["render", xx], ["__scopeId", "data-v-50e774dd"]]);
const Sx = {
  props: {
    modelValue: {
      type: [String, Array]
    }
  },
  mixins: [ne],
  methods: {
    enterPress() {
    },
    getNewDefaultEntry() {
      return "";
    }
  }
}, Ox = {
  key: 0,
  class: "ux-field-title"
}, Tx = {
  key: 0,
  class: "ux-required-marker"
}, Ex = {
  key: 1,
  class: "ux-field-description"
}, Vx = { key: 2 }, Cx = { class: "expression-field-wrap" }, Ax = {
  key: 3,
  class: "expression-field-wrap"
};
function Mx(e, t, n, i, s, r) {
  const a = y("expression-editor"), l = y("flex-cell"), u = y("ux-icon"), c = y("ux-button"), f = y("flex-row");
  return o(), d("div", {
    onKeydown: t[2] || (t[2] = ge(W((p) => r.enterPress(p), ["stop"]), ["enter"]))
  }, [
    e.showLabel ? (o(), d("label", Ox, [
      O(b(e.label) + " ", 1),
      e.required ? (o(), d("span", Tx, "*")) : _("", !0)
    ])) : _("", !0),
    e.showDescription ? (o(), d("div", Ex, b(e.description), 1)) : _("", !0),
    e.multiValue ? (o(), d("div", Vx, [
      (o(!0), d(S, null, $(e.model, (p, g) => (o(), k(f, {
        class: "ux-text-row",
        key: g
      }, {
        default: h(() => [
          m(l, null, {
            default: h(() => [
              w("div", Cx, [
                m(a, {
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
          m(l, {
            shrink: "",
            vcenter: ""
          }, {
            default: h(() => [
              e.canRemoveValue ? (o(), k(c, {
                key: 0,
                tag: "a",
                icon: "",
                onClick: (v) => e.remove(p)
              }, {
                default: h(() => [
                  m(u, { icon: "fa-times" })
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
        default: h(() => [
          O(b(e.addLabel), 1)
        ]),
        _: 1
      })) : _("", !0)
    ])) : (o(), d("div", Ax, [
      m(a, {
        field: e.field,
        class: "ux-expression ux-field-focus ux-text-area-single",
        onFocus: e.touch,
        modelValue: e.model,
        "onUpdate:modelValue": t[1] || (t[1] = (p) => e.model = p)
      }, null, 8, ["field", "onFocus", "modelValue"])
    ]))
  ], 32);
}
const Ix = /* @__PURE__ */ E(Sx, [["render", Mx], ["__scopeId", "data-v-56c3b71b"]]);
const Fx = {
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
function Dx(e, t, n, i, s, r) {
  const a = y("tiptap"), l = y("flex-column");
  return s.mounted ? (o(), k(l, { key: 0 }, {
    default: h(() => [
      m(a, {
        modelValue: s.model,
        "onUpdate:modelValue": t[0] || (t[0] = (u) => s.model = u),
        style: { height: "250px" }
      }, null, 8, ["modelValue"])
    ]),
    _: 1
  })) : _("", !0);
}
const $x = /* @__PURE__ */ E(Fx, [["render", Dx], ["__scopeId", "data-v-844777a7"]]);
const Nx = {
  components: {
    richtext: $x
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
  mixins: [ne],
  methods: {
    getNewDefaultEntry() {
      return "";
    }
  }
}, Lx = {
  key: 0,
  class: "ux-field-title"
}, Px = {
  key: 0,
  class: "ux-required-marker"
}, Ux = {
  key: 1,
  class: "ux-field-description"
}, jx = { key: 2 }, Rx = { class: "richtext-field-wrap" }, Bx = {
  key: 3,
  class: "richtext-field-wrap"
};
function zx(e, t, n, i, s, r) {
  const a = y("richtext"), l = y("flex-cell"), u = y("ux-icon"), c = y("ux-button"), f = y("flex-row");
  return o(), d("div", null, [
    e.showLabel ? (o(), d("label", Lx, [
      O(b(e.label) + " ", 1),
      e.required ? (o(), d("span", Px, "*")) : _("", !0)
    ])) : _("", !0),
    e.showDescription ? (o(), d("div", Ux, b(e.description), 1)) : _("", !0),
    e.multiValue ? (o(), d("div", jx, [
      (o(!0), d(S, null, $(e.model, (p, g) => (o(), k(f, {
        class: "ux-text-row",
        key: g
      }, {
        default: h(() => [
          m(l, null, {
            default: h(() => [
              w("div", Rx, [
                m(a, {
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
          m(l, {
            shrink: "",
            vcenter: ""
          }, {
            default: h(() => [
              e.canRemoveValue ? (o(), k(c, {
                key: 0,
                tag: "a",
                icon: "",
                onClick: (v) => e.remove(p)
              }, {
                default: h(() => [
                  m(u, { icon: "fa-times" })
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
        default: h(() => [
          O(b(e.addLabel), 1)
        ]),
        _: 1
      })) : _("", !0)
    ])) : (o(), d("div", Bx, [
      m(a, {
        class: "ux-richtext ux-field-focus ux-text-area-single",
        onFocus: e.touch,
        modelValue: e.model,
        "onUpdate:modelValue": t[1] || (t[1] = (p) => e.model = p)
      }, null, 8, ["onFocus", "modelValue"])
    ]))
  ]);
}
const Hx = /* @__PURE__ */ E(Nx, [["render", zx], ["__scopeId", "data-v-396fd196"]]);
var vr = {}, qx = {
  get exports() {
    return vr;
  },
  set exports(e) {
    vr = e;
  }
};
(function(e, t) {
  (function(n) {
    var i = "Compound", s = "Identifier", r = "MemberExpression", a = "Literal", l = "ThisExpression", u = "CallExpression", c = "UnaryExpression", f = "BinaryExpression", p = "LogicalExpression", g = "ConditionalExpression", v = "ArrayExpression", x = 46, T = 44, A = 39, G = 34, Q = 40, re = 41, le = 91, oe = 93, B = 63, D = 59, se = 58, z = function(N, V) {
      var tt = new Error(N + " at character " + V);
      throw tt.index = V, tt.description = N, tt;
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
    }, Oe = function(N) {
      var V = 0, tt;
      for (var jt in N)
        (tt = jt.length) > V && N.hasOwnProperty(jt) && (V = tt);
      return V;
    }, Te = Oe(ke), De = Oe(xe), Ee = {
      true: !0,
      false: !1,
      null: null
    }, ht = "this", et = function(N) {
      return xe[N] || 0;
    }, Ut = function(N, V, tt) {
      var jt = N === "||" || N === "&&" ? p : f;
      return {
        type: jt,
        operator: N,
        left: V,
        right: tt
      };
    }, F = function(N) {
      return N >= 48 && N <= 57;
    }, pt = function(N) {
      return N === 36 || N === 95 || // `$` and `_`
      N >= 65 && N <= 90 || // A...Z
      N >= 97 && N <= 122 || // a...z
      N >= 128 && !xe[String.fromCharCode(N)];
    }, dn = function(N) {
      return N === 36 || N === 95 || // `$` and `_`
      N >= 65 && N <= 90 || // A...Z
      N >= 97 && N <= 122 || // a...z
      N >= 48 && N <= 57 || // 0...9
      N >= 128 && !xe[String.fromCharCode(N)];
    }, $e = function(N) {
      for (var V = 0, tt = N.charAt, jt = N.charCodeAt, Ae = function(C) {
        return tt.call(N, C);
      }, ue = function(C) {
        return jt.call(N, C);
      }, cn = N.length, nt = function() {
        for (var C = ue(V); C === 32 || C === 9 || C === 10 || C === 13; )
          C = ue(++V);
      }, Rt = function() {
        var C = So(), P, Y;
        if (nt(), ue(V) === B) {
          if (V++, P = Rt(), P || z("Expected expression", V), nt(), ue(V) === se)
            return V++, Y = Rt(), Y || z("Expected expression", V), {
              type: g,
              test: C,
              consequent: P,
              alternate: Y
            };
          z("Expected :", V);
        } else
          return C;
      }, Hi = function() {
        nt();
        for (var C = N.substr(V, De), P = C.length; P > 0; ) {
          if (xe.hasOwnProperty(C) && (!pt(ue(V)) || V + C.length < N.length && !dn(ue(V + C.length))))
            return V += P, C;
          C = C.substr(0, --P);
        }
        return !1;
      }, So = function() {
        var C, P, Y, ie, Et, We, yt, Bt, Ki;
        if (We = Un(), P = Hi(), !P)
          return We;
        for (Et = { value: P, prec: et(P) }, yt = Un(), yt || z("Expected expression after " + P, V), ie = [We, Et, yt]; (P = Hi()) && (Y = et(P), Y !== 0); ) {
          for (Et = { value: P, prec: Y }, Ki = P; ie.length > 2 && Y <= ie[ie.length - 2].prec; )
            yt = ie.pop(), P = ie.pop().value, We = ie.pop(), C = Ut(P, We, yt), ie.push(C);
          C = Un(), C || z("Expected expression after " + Ki, V), ie.push(Et, C);
        }
        for (Bt = ie.length - 1, C = ie[Bt]; Bt > 1; )
          C = Ut(ie[Bt - 1].value, ie[Bt - 2], C), Bt -= 2;
        return C;
      }, Un = function() {
        var C, P, Y;
        if (nt(), C = ue(V), F(C) || C === x)
          return Oo();
        if (C === A || C === G)
          return To();
        if (C === le)
          return Co();
        for (P = N.substr(V, Te), Y = P.length; Y > 0; ) {
          if (ke.hasOwnProperty(P) && (!pt(ue(V)) || V + P.length < N.length && !dn(ue(V + P.length))))
            return V += Y, {
              type: c,
              operator: P,
              argument: Un(),
              prefix: !0
            };
          P = P.substr(0, --Y);
        }
        return pt(C) || C === Q ? Eo() : !1;
      }, Oo = function() {
        for (var C = "", P, Y; F(ue(V)); )
          C += Ae(V++);
        if (ue(V) === x)
          for (C += Ae(V++); F(ue(V)); )
            C += Ae(V++);
        if (P = Ae(V), P === "e" || P === "E") {
          for (C += Ae(V++), P = Ae(V), (P === "+" || P === "-") && (C += Ae(V++)); F(ue(V)); )
            C += Ae(V++);
          F(ue(V - 1)) || z("Expected exponent (" + C + Ae(V) + ")", V);
        }
        return Y = ue(V), pt(Y) ? z("Variable names cannot start with a number (" + C + Ae(V) + ")", V) : Y === x && z("Unexpected period", V), {
          type: a,
          value: parseFloat(C),
          raw: C
        };
      }, To = function() {
        for (var C = "", P = Ae(V++), Y = !1, ie; V < cn; )
          if (ie = Ae(V++), ie === P) {
            Y = !0;
            break;
          } else if (ie === "\\")
            switch (ie = Ae(V++), ie) {
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
                C += ie;
            }
          else
            C += ie;
        return Y || z('Unclosed quote after "' + C + '"', V), {
          type: a,
          value: C,
          raw: P + C + P
        };
      }, qi = function() {
        var C = ue(V), P = V, Y;
        for (pt(C) ? V++ : z("Unexpected " + Ae(V), V); V < cn && (C = ue(V), dn(C)); )
          V++;
        return Y = N.slice(P, V), Ee.hasOwnProperty(Y) ? {
          type: a,
          value: Ee[Y],
          raw: Y
        } : Y === ht ? { type: l } : {
          type: s,
          name: Y
        };
      }, Gi = function(C) {
        for (var P, Y = [], ie, Et = !1, We = 0; V < cn; )
          if (nt(), P = ue(V), P === C) {
            Et = !0, V++, C === re && We && We >= Y.length && z("Unexpected token " + String.fromCharCode(C), V);
            break;
          } else if (P === T) {
            if (V++, We++, We !== Y.length) {
              if (C === re)
                z("Unexpected token ,", V);
              else if (C === oe)
                for (var yt = Y.length; yt < We; yt++)
                  Y.push(null);
            }
          } else
            ie = Rt(), (!ie || ie.type === i) && z("Expected comma", V), Y.push(ie);
        return Et || z("Expected " + String.fromCharCode(C), V), Y;
      }, Eo = function() {
        var C, P;
        for (C = ue(V), C === Q ? P = Vo() : P = qi(), nt(), C = ue(V); C === x || C === le || C === Q; )
          V++, C === x ? (nt(), P = {
            type: r,
            computed: !1,
            object: P,
            property: qi()
          }) : C === le ? (P = {
            type: r,
            computed: !0,
            object: P,
            property: Rt()
          }, nt(), C = ue(V), C !== oe && z("Unclosed [", V), V++) : C === Q && (P = {
            type: u,
            arguments: Gi(re),
            callee: P
          }), nt(), C = ue(V);
        return P;
      }, Vo = function() {
        V++;
        var C = Rt();
        if (nt(), ue(V) === re)
          return V++, C;
        z("Unclosed (", V);
      }, Co = function() {
        return V++, {
          type: v,
          elements: Gi(oe)
        };
      }, jn = [], Dr, Wi; V < cn; )
        Dr = ue(V), Dr === D || Dr === T ? V++ : (Wi = Rt()) ? jn.push(Wi) : V < cn && z('Unexpected "' + Ae(V) + '"', V);
      return jn.length === 1 ? jn[0] : {
        type: i,
        body: jn
      };
    };
    $e.version = "0.3.5", $e.toString = function() {
      return "JavaScript Expression Parser (JSEP) v" + $e.version;
    }, $e.addUnaryOp = function(N) {
      return Te = Math.max(N.length, Te), ke[N] = Ce, this;
    }, $e.addBinaryOp = function(N, V) {
      return De = Math.max(N.length, De), xe[N] = V, this;
    }, $e.addLiteral = function(N, V) {
      return Ee[N] = V, this;
    }, $e.removeUnaryOp = function(N) {
      return delete ke[N], N.length === Te && (Te = Oe(ke)), this;
    }, $e.removeAllUnaryOps = function() {
      return ke = {}, Te = 0, this;
    }, $e.removeBinaryOp = function(N) {
      return delete xe[N], N.length === De && (De = Oe(xe)), this;
    }, $e.removeAllBinaryOps = function() {
      return xe = {}, De = 0, this;
    }, $e.removeLiteral = function(N) {
      return delete Ee[N], this;
    }, $e.removeAllLiterals = function() {
      return Ee = {}, this;
    }, e.exports ? t = e.exports = $e : t.parse = $e;
  })();
})(qx, vr);
const Gx = vr;
var Zs = { "||": function(e, t) {
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
} }, Wx = { "-": function(e) {
  return -e;
}, "+": function(e) {
  return +e;
}, "~": function(e) {
  return ~e;
}, "!": function(e) {
  return !e;
} };
function Js(e, t) {
  return e.map(function(n) {
    return Se(n, t);
  });
}
function Xs(e, t) {
  var n, i = Se(e.object, t);
  if (n = e.computed ? Se(e.property, t) : e.property.name, /^__proto__|prototype|constructor$/.test(n))
    throw Error('Access to member "' + n + '" disallowed.');
  return [i, i[n]];
}
function Se(e, t) {
  var n = e;
  switch (n.type) {
    case "ArrayExpression":
      return Js(n.elements, t);
    case "BinaryExpression":
      return Zs[n.operator](Se(n.left, t), Se(n.right, t));
    case "CallExpression":
      var i, s, r;
      return n.callee.type === "MemberExpression" ? (i = (r = Xs(n.callee, t))[0], s = r[1]) : s = Se(n.callee, t), typeof s != "function" ? void 0 : s.apply(i, Js(n.arguments, t));
    case "ConditionalExpression":
      return Se(n.test, t) ? Se(n.consequent, t) : Se(n.alternate, t);
    case "Identifier":
      return t[n.name];
    case "Literal":
      return n.value;
    case "LogicalExpression":
      return n.operator === "||" ? Se(n.left, t) || Se(n.right, t) : n.operator === "&&" ? Se(n.left, t) && Se(n.right, t) : Zs[n.operator](Se(n.left, t), Se(n.right, t));
    case "MemberExpression":
      return Xs(n, t)[1];
    case "ThisExpression":
      return t;
    case "UnaryExpression":
      return Wx[n.operator](Se(n.argument, t));
    default:
      return;
  }
}
function Kx(e, t, n, i) {
  for (var s = e.length, r = n + (i ? 1 : -1); i ? r-- : ++r < s; )
    if (t(e[r], r, e))
      return r;
  return -1;
}
var Yx = Kx;
function Zx(e) {
  return e !== e;
}
var Jx = Zx;
function Xx(e, t, n) {
  for (var i = n - 1, s = e.length; ++i < s; )
    if (e[i] === t)
      return i;
  return -1;
}
var Qx = Xx, ew = Yx, tw = Jx, nw = Qx;
function rw(e, t, n) {
  return t === t ? nw(e, t, n) : ew(e, tw, n);
}
var to = rw, iw = 9007199254740991;
function sw(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= iw;
}
var no = sw, aw = _l, lw = no;
function ow(e) {
  return e != null && lw(e.length) && !aw(e);
}
var ro = ow, uw = In, dw = Dn, cw = Fn, fw = "[object String]";
function mw(e) {
  return typeof e == "string" || !dw(e) && cw(e) && uw(e) == fw;
}
var hw = mw, pw = yl, Qs = 1 / 0, yw = 17976931348623157e292;
function _w(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = pw(e), e === Qs || e === -Qs) {
    var t = e < 0 ? -1 : 1;
    return t * yw;
  }
  return e === e ? e : 0;
}
var gw = _w, vw = gw;
function bw(e) {
  var t = vw(e), n = t % 1;
  return t === t ? n ? t - n : t : 0;
}
var kw = bw, xw = bl;
function ww(e, t) {
  return xw(t, function(n) {
    return e[n];
  });
}
var Sw = ww;
function Ow(e, t) {
  for (var n = -1, i = Array(e); ++n < e; )
    i[n] = t(n);
  return i;
}
var Tw = Ow, Ew = In, Vw = Fn, Cw = "[object Arguments]";
function Aw(e) {
  return Vw(e) && Ew(e) == Cw;
}
var Mw = Aw, ea = Mw, Iw = Fn, io = Object.prototype, Fw = io.hasOwnProperty, Dw = io.propertyIsEnumerable, $w = ea(function() {
  return arguments;
}()) ? ea : function(e) {
  return Iw(e) && Fw.call(e, "callee") && !Dw.call(e, "callee");
}, Nw = $w, br = {}, Lw = {
  get exports() {
    return br;
  },
  set exports(e) {
    br = e;
  }
};
function Pw() {
  return !1;
}
var Uw = Pw;
(function(e, t) {
  var n = sn, i = Uw, s = t && !t.nodeType && t, r = s && !0 && e && !e.nodeType && e, a = r && r.exports === s, l = a ? n.Buffer : void 0, u = l ? l.isBuffer : void 0, c = u || i;
  e.exports = c;
})(Lw, br);
var jw = 9007199254740991, Rw = /^(?:0|[1-9]\d*)$/;
function Bw(e, t) {
  var n = typeof e;
  return t = t ?? jw, !!t && (n == "number" || n != "symbol" && Rw.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var zw = Bw, Hw = In, qw = no, Gw = Fn, Ww = "[object Arguments]", Kw = "[object Array]", Yw = "[object Boolean]", Zw = "[object Date]", Jw = "[object Error]", Xw = "[object Function]", Qw = "[object Map]", eS = "[object Number]", tS = "[object Object]", nS = "[object RegExp]", rS = "[object Set]", iS = "[object String]", sS = "[object WeakMap]", aS = "[object ArrayBuffer]", lS = "[object DataView]", oS = "[object Float32Array]", uS = "[object Float64Array]", dS = "[object Int8Array]", cS = "[object Int16Array]", fS = "[object Int32Array]", mS = "[object Uint8Array]", hS = "[object Uint8ClampedArray]", pS = "[object Uint16Array]", yS = "[object Uint32Array]", ae = {};
ae[oS] = ae[uS] = ae[dS] = ae[cS] = ae[fS] = ae[mS] = ae[hS] = ae[pS] = ae[yS] = !0;
ae[Ww] = ae[Kw] = ae[aS] = ae[Yw] = ae[lS] = ae[Zw] = ae[Jw] = ae[Xw] = ae[Qw] = ae[eS] = ae[tS] = ae[nS] = ae[rS] = ae[iS] = ae[sS] = !1;
function _S(e) {
  return Gw(e) && qw(e.length) && !!ae[Hw(e)];
}
var gS = _S;
function vS(e) {
  return function(t) {
    return e(t);
  };
}
var bS = vS, kr = {}, kS = {
  get exports() {
    return kr;
  },
  set exports(e) {
    kr = e;
  }
};
(function(e, t) {
  var n = hl, i = t && !t.nodeType && t, s = i && !0 && e && !e.nodeType && e, r = s && s.exports === i, a = r && n.process, l = function() {
    try {
      var u = s && s.require && s.require("util").types;
      return u || a && a.binding && a.binding("util");
    } catch {
    }
  }();
  e.exports = l;
})(kS, kr);
var xS = gS, wS = bS, ta = kr, na = ta && ta.isTypedArray, SS = na ? wS(na) : xS, OS = SS, TS = Tw, ES = Nw, VS = Dn, CS = br, AS = zw, MS = OS, IS = Object.prototype, FS = IS.hasOwnProperty;
function DS(e, t) {
  var n = VS(e), i = !n && ES(e), s = !n && !i && CS(e), r = !n && !i && !s && MS(e), a = n || i || s || r, l = a ? TS(e.length, String) : [], u = l.length;
  for (var c in e)
    (t || FS.call(e, c)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    s && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    r && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    AS(c, u))) && l.push(c);
  return l;
}
var $S = DS, NS = Object.prototype;
function LS(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || NS;
  return e === n;
}
var PS = LS;
function US(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var jS = US, RS = jS, BS = RS(Object.keys, Object), zS = BS, HS = PS, qS = zS, GS = Object.prototype, WS = GS.hasOwnProperty;
function KS(e) {
  if (!HS(e))
    return qS(e);
  var t = [];
  for (var n in Object(e))
    WS.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
var YS = KS, ZS = $S, JS = YS, XS = ro;
function QS(e) {
  return XS(e) ? ZS(e) : JS(e);
}
var e2 = QS, t2 = Sw, n2 = e2;
function r2(e) {
  return e == null ? [] : t2(e, n2(e));
}
var i2 = r2, s2 = to, a2 = ro, l2 = hw, o2 = kw, u2 = i2, d2 = Math.max;
function c2(e, t, n, i) {
  e = a2(e) ? e : u2(e), n = n && !i ? o2(n) : 0;
  var s = e.length;
  return n < 0 && (n = d2(s + n, 0)), l2(e) ? n <= s && e.indexOf(t, n) > -1 : !!s && s2(e, t, n) > -1;
}
var f2 = c2;
const Tt = {};
function m2(e, t, n, i) {
  return e ? Array.isArray(e) ? e.filter(function(s) {
    const r = mr(s, t);
    let a;
    switch (i) {
      case ">":
        a = r > n;
        break;
      case "<":
        a = r < n;
        break;
      case ">=":
        a = r >= n;
        break;
      case "<=":
        a = r <= n;
        break;
      case "in":
        a = f2(r, n);
        break;
      default:
        n === void 0 ? a = r : a = r == n;
        break;
    }
    return a;
  }) : (console.error("array.filter value was not provided as array", { input: e }), []) : [];
}
function h2(e) {
  return e.reduce(function(t, n) {
    return t + n;
  }, 0);
}
function p2(e, t, n, i, s) {
  if (!e)
    return [];
  if (s = s || {}, s.flat = n, s.unique = i, !Array.isArray(e))
    return console.error("array.filter value was not provided as array", { input: e }), [];
  let r = e.reduce(function(a, l) {
    const u = mr(l, t), c = !u && u !== !1 && u !== 0;
    return s.excludeNull && c || a.push(u), a;
  }, []);
  return s.unique && (r = [...new Set(r)]), s.flat && (r = r.flat()), r;
}
Tt.evaluateExpression = function(e, t) {
  if (typeof e == "function")
    return e(t);
  const n = {
    Math,
    String,
    Array,
    Date,
    Boolean,
    parseInt,
    parseFloat,
    now: new Date(),
    array: {
      filter: m2,
      extract: p2,
      sum: h2
    },
    create(r, ...a) {
      return new r(...a);
    }
  };
  t = Object.assign({}, n, t);
  var i, s;
  try {
    i = Gx(e), s = Se(i, t);
  } catch (r) {
    console.log("There was an error evaluating your expression", { expression: e, error: r });
  } finally {
  }
  return s;
};
const y2 = Array.from({ length: 6 }, (e, t) => new Date().getFullYear() + t).map(function(e) {
  const t = String(e).slice(2);
  return {
    title: e,
    value: t
  };
}), _2 = {
  mixins: [ne],
  components: {
    // StripeElements,
    // StripeElement,
  },
  props: {
    submission: {
      type: Boolean,
      default: !0
    },
    sandbox: {
      type: Boolean,
      default: !1
    },
    configuration: {
      type: Object,
      default() {
        return {};
      }
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
      // cardOptions: null,
      // stripeInstanceOptions: null,
      // stripeElementsOptions: null,
    };
  },
  created() {
  },
  // mounted() {
  //     this.payment.element = this;
  // },
  // beforeUnmount() {
  //     this.payment.element = null;
  // },
  // inject:['payment'],
  watch: {
    gateways: {
      async handler(e) {
        const t = this;
        Array.from(
          new Set(
            e.map(function(n) {
              var i;
              return (i = n.integration) == null ? void 0 : i.module;
            })
          )
        ).filter(Boolean), e.length === 1 && (t.model.gateway = e[0]);
      },
      immediate: !0
    }
  },
  computed: {
    baseAmountVisible() {
      return this.baseAmount && !this.visibleModifications.some(function(e) {
        return e.modifier === "set";
      });
    },
    visibleModifications() {
      const e = this.calculations.modifications || [];
      return console.log("MODIFIERS", e), e;
    },
    // stripeApiKey() {
    //     const self = this;
    //     if (self.calculatedTotal) {
    //         if (self.gatewayIntegrationModule === 'stripe') {
    //             return self.sandbox ? self.gatewayIntegration?.publicDetails?.testPublishableKey : self.gatewayIntegration?.publicDetails?.livePublishableKey;
    //         }
    //     }
    // },
    expressionsContext() {
      const e = {
        this: this.parentModel,
        self: this.parentModel,
        model: this.parentModel,
        data: this.parentModel
        // this.parentModel || this.model,
        // additional:{
        // ...additionalContext,
        // }
      };
      return console.log("Expressions context changed", e), e;
    },
    requiresPayment() {
      return this.enabled && this.calculatedTotal;
    },
    enabled() {
      return this.configuration.enabled;
    },
    gateway() {
      return this.model.gateway;
    },
    gatewayIntegration() {
      var e;
      return (e = this.gateway) == null ? void 0 : e.integration;
    },
    gatewayIntegrationModule() {
      var e;
      return (e = this.gatewayIntegration) == null ? void 0 : e.module;
    },
    gateways() {
      return this.configuration.gateways || [];
    },
    currency() {
      return this.configuration.currency;
    },
    baseAmount() {
      return parseInt(this.configuration.amount || 0);
    },
    formattedBaseAmount() {
      return this.$sdk.utils.formatCurrency(this.baseAmount, this.currency);
    },
    modifiers() {
      return this.configuration.modifiers || [];
    },
    activeModifiers() {
      const e = this, t = this.expressionsContext;
      return e.modifiers.filter(function(n) {
        return n.condition ? Tt.evaluateExpression(n.condition, t) : !0;
      });
    },
    calculations() {
      const e = this;
      let t = [], n = 0;
      e.baseAmount && (n += e.baseAmount), e.activeModifiers.forEach(function(s, r) {
        const a = Object.assign({}, e.expressionsContext, { total: n }), l = n;
        let u = Tt.evaluateExpression(s.expression, a);
        u = parseInt(u || 0);
        const c = e.$sdk.utils.formatCurrency(u, e.currency);
        let f = "";
        switch (s.modifier) {
          case "add":
            n = Math.max(0, n + u), f = `+${c}`;
            break;
          case "subtract":
            n = Math.max(0, n - u), f = `-${c}`;
            break;
          case "multiply":
            n = Math.max(0, n * u), f = `x ${u}`;
            break;
          case "divide":
            n = Math.max(0, n / u), f = `÷ ${u}`;
            break;
          case "set":
            n = Math.max(0, u), f = "";
            break;
        }
        if (l != n) {
          let p = e.$sdk.utils.formatCurrency(n, e.currency);
          t.push({
            title: s.title,
            summary: f,
            total: n,
            result: p,
            modifier: s.modifier,
            visible: !0
          });
        }
      });
      const i = t.findLastIndex(function(s) {
        return s.modifier === "set";
      });
      return i != -1 && (t = t.map(function(s, r) {
        return r < i && (s.visible = !1), s;
      }), console.log("modifications", i, t)), {
        modifications: t,
        total: n
      };
    },
    formattedTotal() {
      return this.$sdk.utils.formatCurrency(this.calculatedTotal, this.currency);
    },
    calculatedTotal() {
      return this.calculations.total;
    },
    calculatedTotalFields() {
      const e = this, t = [];
      return t.push({
        title: "Calculated Total",
        type: "integer",
        key: "total",
        widget: "value",
        minimum: parseInt(e.calculatedTotal) ? 1 : 0,
        maximum: 1,
        expressions: {
          value() {
            return e.calculatedTotal;
          }
        }
      }), t;
    },
    subFields() {
      const e = [], t = [];
      return t.push({
        title: "Name on card",
        key: "name",
        type: "string",
        minimum: 1,
        maximum: 1,
        placeholder: "Super Citizen"
      }), t.push({
        title: "Card Number",
        key: "number",
        type: "string",
        minimum: 1,
        maximum: 1,
        placeholder: "xxxx xxxx xxxx xxxx"
      }), t.push({
        type: "group",
        sameLine: !0,
        fields: [{
          title: "Expiry Month",
          key: "expMonth",
          type: "string",
          minimum: 1,
          maximum: 1,
          minLength: 2,
          maxLength: 2,
          widget: "select",
          options: [
            { title: "01", value: "01" },
            { title: "02", value: "02" },
            { title: "03", value: "03" },
            { title: "04", value: "04" },
            { title: "05", value: "05" },
            { title: "06", value: "06" },
            { title: "07", value: "07" },
            { title: "08", value: "08" },
            { title: "09", value: "09" },
            { title: "10", value: "10" },
            { title: "11", value: "11" },
            { title: "12", value: "12" }
          ]
        }, {
          title: "Expiry Year",
          key: "expYear",
          type: "string",
          minimum: 1,
          maximum: 1,
          minLength: 2,
          maxLength: 2,
          widget: "select",
          options: y2
        }, {
          title: "CVN",
          key: "cvc",
          type: "string",
          minimum: 1,
          maximum: 1,
          minLength: 3,
          maxLength: 3
        }]
      }), e.push({
        title: "Card Details",
        key: "card",
        type: "group",
        asObject: !0,
        minimum: 1,
        maximum: 1,
        fields: t
      }), e;
    }
  },
  methods: {
    isSelectedGateway(e) {
      var t;
      return ((t = this.model.gateway) == null ? void 0 : t.key) === e.key;
    },
    selectGateway(e) {
      this.model.gateway = e;
    },
    stateChange(e) {
      this.$emit("form:state", e);
    },
    getNewDefaultEntry() {
      return {
        // guid: Math.random(),
      };
    }
  }
}, Ln = (e) => (at("data-v-656d350e"), e = e(), lt(), e), g2 = /* @__PURE__ */ Ln(() => /* @__PURE__ */ w("h2", null, "Payment Summary", -1)), v2 = { class: "calculations" }, b2 = /* @__PURE__ */ Ln(() => /* @__PURE__ */ w("td", null, "Amount", -1)), k2 = { class: "running-total" }, x2 = { class: "running-total" }, w2 = {
  key: 0,
  class: "grand-total"
}, S2 = /* @__PURE__ */ Ln(() => /* @__PURE__ */ w("td", null, [
  /* @__PURE__ */ w("strong", null, "Total")
], -1)), O2 = /* @__PURE__ */ Ln(() => /* @__PURE__ */ w("td", null, null, -1)), T2 = /* @__PURE__ */ Ln(() => /* @__PURE__ */ w("h3", null, "Please select a payment processor", -1));
function E2(e, t, n, i, s, r) {
  const a = y("ux-form"), l = y("ux-panel-body"), u = y("ux-panel"), c = y("ux-icon"), f = y("ux-button");
  return e.multiValue ? (o(), d(S, { key: 0 }, [
    O(" Invalid configuration ")
  ], 64)) : (o(), d(S, { key: 1 }, [
    m(a, {
      ref: "form",
      trail: n.trail,
      paymentConfiguration: n.configuration,
      includeOfficeOnly: e.includeOfficeOnly,
      submission: n.submission,
      "onForm:state": r.stateChange,
      parentModel: e.parentModel,
      modelValue: e.model,
      "onUpdate:modelValue": t[0] || (t[0] = (p) => e.model = p),
      flex: e.sameLine,
      fields: r.calculatedTotalFields
    }, null, 8, ["trail", "paymentConfiguration", "includeOfficeOnly", "submission", "onForm:state", "parentModel", "modelValue", "flex", "fields"]),
    r.requiresPayment ? (o(), d(S, { key: 0 }, [
      g2,
      m(u, null, {
        default: h(() => [
          m(l, null, {
            default: h(() => [
              w("table", v2, [
                w("tbody", null, [
                  r.baseAmount ? (o(), d("tr", {
                    key: 0,
                    class: L(["calculation-modifier", ["modifier-set", `modifier-visible-${r.baseAmountVisible}`]])
                  }, [
                    b2,
                    w("td", null, b(r.formattedBaseAmount), 1),
                    w("td", k2, b(r.formattedBaseAmount), 1)
                  ], 2)) : _("", !0),
                  (o(!0), d(S, null, $(r.visibleModifications, (p) => (o(), d("tr", {
                    class: L(["calculation-modifier", [`modifier-${p.modifier}`, `modifier-visible-${p.visible}`]])
                  }, [
                    w("td", null, b(p.title), 1),
                    w("td", null, b(p.summary), 1),
                    w("td", x2, b(p.result), 1)
                  ], 2))), 256))
                ]),
                w("tfoot", null, [
                  r.baseAmount ? (o(), d("tr", w2, [
                    S2,
                    O2,
                    w("td", null, [
                      w("strong", null, b(r.formattedTotal), 1)
                    ])
                  ])) : _("", !0)
                ])
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      r.gateways.length > 1 ? (o(), d(S, { key: 0 }, [
        T2,
        m(u, null, {
          default: h(() => [
            m(l, null, {
              default: h(() => [
                (o(!0), d(S, null, $(r.gateways, (p) => (o(), k(f, {
                  class: "gateway-selector",
                  color: { primary: r.isSelectedGateway(p) },
                  active: r.isSelectedGateway(p),
                  onClick: (g) => r.selectGateway(p)
                }, {
                  default: h(() => [
                    O(b(p.title) + " ", 1),
                    m(c, {
                      icon: r.isSelectedGateway(p) ? "fa-check" : "far fa-circle"
                    }, null, 8, ["icon"])
                  ]),
                  _: 2
                }, 1032, ["color", "active", "onClick"]))), 256))
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ], 64)) : _("", !0)
    ], 64)) : _("", !0)
  ], 64));
}
const V2 = /* @__PURE__ */ E(_2, [["render", E2], ["__scopeId", "data-v-656d350e"]]);
function C2(e) {
  return e === void 0 || typeof e > "u" || e === null || String(e) === "null" || String(e) === "undefined";
}
const A2 = {
  props: {
    title: {
      type: String
    },
    modelValue: {
      // type: [Object, Array],
    }
  },
  mixins: [ne],
  created() {
    this.model = this.model;
  },
  methods: {
    cleanOutput(e) {
      var t = this;
      return C2(e) ? t.multiValue ? e = [] : e = void 0 : t.multiValue ? e = (e || []).filter(Boolean).map(function(n) {
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
}, M2 = {
  key: 0,
  class: "ux-field-title"
}, I2 = {
  key: 0,
  class: "ux-required-marker"
}, F2 = {
  key: 1,
  class: "ux-field-description"
}, D2 = {
  key: 2,
  class: "ui-select-button"
}, $2 = ["multiple"], N2 = {
  key: 0,
  value: ""
}, L2 = ["value"];
function P2(e, t, n, i, s, r) {
  const a = y("ux-button");
  return o(), d("div", {
    class: L(["native-select", r.classes])
  }, [
    e.showLabel ? (o(), d("label", M2, [
      O(b(e.label) + " ", 1),
      e.required ? (o(), d("span", I2, "*")) : _("", !0)
    ])) : _("", !0),
    e.showDescription ? (o(), d("div", F2, b(e.description), 1)) : _("", !0),
    e.singleValue ? (o(), d("div", D2, [
      q(e.$slots, "default", {}, () => [
        m(a, { tag: "div" }, {
          default: h(() => [
            O(b(r.summary), 1)
          ]),
          _: 1
        })
      ], !0)
    ])) : _("", !0),
    K(w("select", {
      onFocus: t[0] || (t[0] = (...l) => e.touch && e.touch(...l)),
      multiple: e.multiValue,
      "onUpdate:modelValue": t[1] || (t[1] = (l) => e.model = l)
    }, [
      e.singleValue && !e.minimum ? (o(), d("option", N2, "None")) : _("", !0),
      (o(!0), d(S, null, $(r.selectableOptions, (l) => (o(), d("option", {
        value: l.value
      }, b(l.title), 9, L2))), 256))
    ], 40, $2), [
      [St, e.model]
    ])
  ], 2);
}
const U2 = /* @__PURE__ */ E(A2, [["render", P2], ["__scopeId", "data-v-ee74f64d"]]);
function j2(e) {
  return e === void 0 || typeof e > "u" || e === null || String(e) === "null" || String(e) === "undefined";
}
const R2 = {
  props: {
    title: {
      type: String
    },
    modelValue: {
      // type: [Object, Array],
    }
  },
  mixins: [ne],
  created() {
    this.model = this.model;
  },
  methods: {
    cleanOutput(e) {
      var t = this;
      return j2(e) ? t.multiValue ? e = [] : e = void 0 : t.multiValue ? e = (e || []).filter(Boolean).map(function(n) {
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
}, B2 = {
  key: 0,
  class: "ux-field-title"
}, z2 = {
  key: 0,
  class: "ux-required-marker"
}, H2 = {
  key: 1,
  class: "ux-field-description"
}, q2 = {
  key: 2,
  class: "ui-select-button"
}, G2 = ["multiple"], W2 = {
  key: 0,
  value: ""
}, K2 = ["value"];
function Y2(e, t, n, i, s, r) {
  const a = y("ux-button");
  return o(), d("div", {
    class: L(["native-select", r.classes])
  }, [
    e.showLabel ? (o(), d("label", B2, [
      O(b(e.label) + " ", 1),
      e.required ? (o(), d("span", z2, "*")) : _("", !0)
    ])) : _("", !0),
    e.showDescription ? (o(), d("div", H2, b(e.description), 1)) : _("", !0),
    e.singleValue ? (o(), d("div", q2, [
      q(e.$slots, "default", {}, () => [
        m(a, { tag: "div" }, {
          default: h(() => [
            O(b(r.summary), 1)
          ]),
          _: 1
        })
      ], !0)
    ])) : _("", !0),
    K(w("select", {
      onFocus: t[0] || (t[0] = (...l) => e.touch && e.touch(...l)),
      multiple: e.multiValue,
      "onUpdate:modelValue": t[1] || (t[1] = (l) => e.model = l)
    }, [
      e.singleValue && !e.minimum ? (o(), d("option", W2, "None")) : _("", !0),
      (o(!0), d(S, null, $(r.selectableOptions, (l) => (o(), d("option", {
        value: l.value
      }, b(l.title), 9, K2))), 256))
    ], 40, G2), [
      [St, e.model]
    ])
  ], 2);
}
const Z2 = /* @__PURE__ */ E(R2, [["render", Y2], ["__scopeId", "data-v-8801d1a0"]]);
function ii(e) {
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
function gn(e, t, n, i, s, r) {
  t = t || [], n = Math.max(n, i);
  var a = t.length, l = a >= n;
  if (!l) {
    var u = n - a, c = Array(u).fill().map(r);
    return [...t, ...c];
  }
  return t;
}
function J2(e, t) {
  if (t)
    return t;
  function n(g) {
    return g === void 0 || typeof g > "u" || g === null;
  }
  var i = parseInt(e.minimum), s = parseInt(e.maximum), r = parseInt(e.ask || 0);
  r = Math.max(r, i), r = s ? Math.min(r, s) : r;
  var a = s === 1;
  e.asObject && e.type === "group" && (s === 1 && i === 1 ? a = !0 : a = !1);
  var l = !a, u = (e.type === "reference" ? e.defaultReferences : e.defaultValues) || [], c = u[0], f;
  switch (e.type) {
    case "date":
      let g = function(v) {
        switch (String(v).toLowerCase()) {
          case "now":
            return new Date();
        }
        return new Date(v);
      };
      l ? (u.length && (s ? f = u.slice(0, s).map(function(v) {
        return g(v);
      }) : f = u.slice().map(function(v) {
        return g(v);
      })), f = gn(e, f, i, r, s, function() {
        return g(new Date());
      })) : f = n(c) ? void 0 : g(c);
      break;
    case "integer":
    case "decimal":
    case "number":
    case "float":
      l ? (u.length && (s ? f = u.slice(0, s).map(function(v) {
        return Number(v);
      }) : f = u.slice().map(function(v) {
        return Number(v);
      })), f = gn(e, f, i, r, s, function() {
        return "";
      })) : f = n(c) ? void 0 : Number(c);
      break;
    case "group":
      if (e.asObject) {
        var p = r;
        l ? p > 0 ? f = Array(p).fill().map(function() {
          return {};
        }) : f = [] : f = n(c) ? {} : c;
      }
      break;
    case "object":
      var p = r;
      l ? p > 0 ? f = Array(p).fill().map(function() {
        return {};
      }) : f = [] : f = n(c) ? {} : c;
      break;
    case "boolean":
      l ? (u.length && (s ? f = u.slice(0, s).map(function(v) {
        return ii(v);
      }) : f = u.slice().map(function(v) {
        return ii(v);
      })), f = gn(e, f, i, r, s, function() {
      })) : f = n(c) ? !1 : ii(c);
      break;
    case "reference":
      if (e.widget === "form") {
        var p = r;
        l ? p > 0 ? f = Array(p).fill().map(function() {
          return {};
        }) : f = [] : i ? f = n(c) ? {} : c : f = void 0;
      } else
        l ? u.length ? f = u.slice(0, s) : f = [] : f = n(c) ? void 0 : c;
      break;
    case "string":
      l ? (u.length && (f = u.slice(0, s)), f = gn(e, f, i, r, s, function() {
        return "";
      }).filter(Boolean)) : f = n(c) ? "" : c;
      break;
    default:
      l ? (u.length && (f = u.slice(0, s)), f = gn(e, f, i, r, s, function() {
      })) : f = n(c) ? "" : c;
      break;
  }
  return f;
}
function Le(e) {
  return function() {
    var t = this;
    if (!t.expressions)
      return;
    let n = t.expressions[e];
    if (!n)
      return;
    let i = t.expressionsContext;
    return Tt.evaluateExpression(n, i);
  };
}
const X2 = {
  components: {
    InternalRouteSelect: U2,
    InternalMenuSelect: Z2,
    ButtonSelect: Nk,
    NativeSelect: Pt,
    DateField: Ql,
    TimeField: F1,
    DateRange: j1,
    TextField: Xl,
    CurrencyField: Jl,
    TextArea: g1,
    Checkbox: G1,
    FilterInput: F0,
    SliderInput: Y0,
    CustomHtml: X1,
    BooleanSwitch: tk,
    FieldGroup: Ok,
    ContentSelect: Zl,
    TypeSelect: ob,
    ScopeSelect: Tb,
    FieldSelect: Lb,
    TimezoneSelect: Kg,
    PhoneNumberInput: Lg,
    Upload: mk,
    ObjectField: Hk,
    OptionsManager: ux,
    CodeEditorField: wx,
    ExpressionField: Ix,
    RichTextField: Hx,
    PaymentField: V2
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
    sandbox: {
      type: Boolean,
      default: !1
    },
    paymentConfiguration: {
      type: Object
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
  inject: ["parentFormElement", "directParentModel", "directFormElement", "additionalContext"],
  provide() {
    return {
      fieldPath: this.fieldPath,
      directParentModel: this.model
    };
  },
  created() {
    this.checkDirtyState();
  },
  mounted() {
    const e = this;
    e.mounted = !0, e.directFormElement && e.directFormElement.childFormElements && e.directFormElement.childFormElements.push(e), e.parentFormElement && e.parentFormElement.childFormElements && e.parentFormElement.childFormElements.push(e);
  },
  beforeUnmount() {
    const e = this;
    if (e.mounted = !1, e.directFormElement) {
      var t = e.directFormElement.childFormElements.indexOf(e);
      e.directFormElement.childFormElements.splice(t, 1);
    }
    if (e.parentFormElement) {
      var t = e.parentFormElement.childFormElements.indexOf(e);
      e.parentFormElement.childFormElements.splice(t, 1);
    }
  },
  methods: {
    fieldDefaultValue() {
      var e = this.expressions && this.expressions.value ? this.getExpressionValue : void 0;
      if (e)
        return e;
      var t = this.expressions && this.expressions.defaultValue ? this.getExpressionDefaultValue : void 0, n = J2(this.actualField), i = this.cleanInput(t || n);
      return i;
    },
    checkDirtyState() {
      const e = this;
      var t = e.fieldModel, n = t || t === !1 || t === 0, i = e.fieldDefaultValue(), s = JSON.stringify(e.cleanOutput(t)), r = JSON.stringify(e.cleanOutput(i));
      n && s != r ? (e.isDirty = !0, e.isDirtyBeforeInput = !0, e.fieldModel = t) : (e.isDirty = !1, e.isDirtyBeforeInput = !1, e.fieldModel = i), e.validateResults = e.$sdk.content.validateField(e.fieldModel, e.actualField);
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
      return this.getExpressionRequired && (t = Object.assign({}, t, { minimum: 1 })), this.getExpressionTitle && (t = Object.assign({}, t, { title: this.getExpressionTitle })), this.getExpressionReferenceType && (t = Object.assign({}, t, { referenceType: this.getExpressionReferenceType })), this.getExpressionVisualHide && (t = Object.assign({}, t, { visualHide: this.getExpressionVisualHide })), this.getExpressionWidgetType && (t = Object.assign({}, t, { widget: this.getExpressionWidgetType })), this.getExpressionDataType && (t = Object.assign({}, t, { type: this.getExpressionDataType })), this.getExpressionOptions && (t = Object.assign({}, t, { options: this.getExpressionOptions })), this.getExpressionSyntax && (t = Object.assign({}, t, { syntax: this.getExpressionSyntax })), this.getExpressionMinValue && (t = Object.assign({}, t, { minValue: this.getExpressionMinValue })), this.getExpressionStepValue && (t = Object.assign({}, t, { stepValue: this.getExpressionStepValue })), this.getExpressionMaxValue && (t = Object.assign({}, t, { maxValue: this.getExpressionMaxValue })), this.getExpressionCurrency && (t = Object.assign({}, t, { currency: this.getExpressionCurrency })), t;
    },
    changeString() {
      const e = this.fieldModel;
      return `${Qt(e)}-${this.actualField.minimum}-${this.actualField.referenceType}`;
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
      let e = this.expressions.show, t = this.expressions.hide, n = this.expressionsContext, i;
      return e ? i = !Tt.evaluateExpression(e, n) : t && (i = Tt.evaluateExpression(t, n)), i;
    },
    getExpressionTitle: Le("title"),
    getExpressionRequired: Le("required"),
    getExpressionDefaultValue: Le("defaultValue"),
    getExpressionValue: Le("value"),
    getExpressionReferenceType: Le("referenceType"),
    getExpressionWidgetType: Le("widget"),
    getExpressionDataType: Le("type"),
    getExpressionOptions: Le("options"),
    getExpressionSyntax: Le("syntax"),
    getExpressionCurrency: Le("currency"),
    getExpressionMinValue: Le("minValue"),
    getExpressionStepValue: Le("stepValue"),
    getExpressionMaxValue: Le("maxValue"),
    getExpressionVisualHide: Le("visualHide"),
    // hasExpressionDefaultValue: hasExpression('defaultValue'), // Not sure what this is for
    expressions() {
      return this.field.expressions;
    },
    expressionsContext() {
      var s;
      const e = this;
      var t = ((s = e.additionalContext) == null ? void 0 : s.value) || {};
      const n = e.directParentModel;
      return {
        this: e.model,
        self: e.model,
        model: e.model,
        data: e.parentModel || e.model,
        parent: n,
        additional: {
          ...t
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
        case "payment":
        case "internal-menu":
        case "internal-route":
        case "content-select":
        case "select":
        case "checkbox":
        case "daterange":
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
        case "slider":
          break;
        case "datefield":
        case "datepicker":
          return "datefield";
        case "timefield":
        case "timepicker":
          return "timefield";
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
}, Q2 = {
  key: 32,
  class: "ux-field-message"
};
function eO(e, t, n, i, s, r) {
  const a = y("internal-route-select"), l = y("internal-menu-select"), u = y("custom-html"), c = y("slider-input"), f = y("filter-input"), p = y("checkbox"), g = y("boolean-switch"), v = y("upload"), x = y("field-group"), T = y("field-select"), A = y("native-select"), G = y("button-select"), Q = y("text-field"), re = y("currency-field"), le = y("time-field"), oe = y("date-field"), B = y("date-range"), D = y("content-select"), se = y("type-select"), z = y("scope-select"), Ce = y("rich-text-field"), ke = y("text-area"), xe = y("timezone-select"), Oe = y("phone-number-input"), Te = y("object-field"), De = y("payment-field"), Ee = y("options-manager"), ht = y("code-editor-field"), et = y("flex-column"), Ut = y("expression-field");
  return r.visible ? (o(), d("div", {
    key: 0,
    class: L(["ux-field", r.classes]),
    onFocusin: t[31] || (t[31] = (...F) => r.focus && r.focus(...F)),
    onFocusout: t[32] || (t[32] = (...F) => r.blur && r.blur(...F))
  }, [
    r.widget == "internal-route" ? (o(), k(a, {
      key: 0,
      onTouched: r.touch,
      field: r.actualField,
      modelValue: r.fieldModel,
      "onUpdate:modelValue": t[0] || (t[0] = (F) => r.fieldModel = F)
    }, null, 8, ["onTouched", "field", "modelValue"])) : _("", !0),
    r.widget == "internal-menu" ? (o(), k(l, {
      key: 1,
      onTouched: r.touch,
      field: r.actualField,
      modelValue: r.fieldModel,
      "onUpdate:modelValue": t[1] || (t[1] = (F) => r.fieldModel = F)
    }, null, 8, ["onTouched", "field", "modelValue"])) : _("", !0),
    r.widget == "html" ? (o(), k(u, {
      key: 2,
      onTouched: r.touch,
      field: r.actualField,
      modelValue: r.fieldModel,
      "onUpdate:modelValue": t[2] || (t[2] = (F) => r.fieldModel = F)
    }, null, 8, ["onTouched", "field", "modelValue"])) : _("", !0),
    r.widget == "value" ? (o(), d(S, { key: 3 }, [], 64)) : _("", !0),
    r.widget == "slider" ? (o(), k(c, {
      key: 4,
      onTouched: r.touch,
      field: r.actualField,
      modelValue: r.fieldModel,
      "onUpdate:modelValue": t[3] || (t[3] = (F) => r.fieldModel = F)
    }, null, 8, ["onTouched", "field", "modelValue"])) : _("", !0),
    r.widget == "filter" ? (o(), k(f, {
      key: 5,
      onTouched: r.touch,
      field: r.actualField,
      modelValue: r.fieldModel,
      "onUpdate:modelValue": t[4] || (t[4] = (F) => r.fieldModel = F)
    }, null, 8, ["onTouched", "field", "modelValue"])) : _("", !0),
    r.widget == "checkbox" ? (o(), k(p, {
      key: 6,
      onTouched: r.touch,
      field: r.actualField,
      modelValue: r.fieldModel,
      "onUpdate:modelValue": t[5] || (t[5] = (F) => r.fieldModel = F)
    }, null, 8, ["onTouched", "field", "modelValue"])) : _("", !0),
    r.widget == "switch" ? (o(), k(g, {
      key: 7,
      onTouched: r.touch,
      field: r.actualField,
      modelValue: r.fieldModel,
      "onUpdate:modelValue": t[6] || (t[6] = (F) => r.fieldModel = F)
    }, null, 8, ["onTouched", "field", "modelValue"])) : _("", !0),
    r.widget == "upload" ? (o(), k(v, {
      key: 8,
      onTouched: r.touch,
      field: r.actualField,
      modelValue: r.fieldModel,
      "onUpdate:modelValue": t[7] || (t[7] = (F) => r.fieldModel = F)
    }, null, 8, ["onTouched", "field", "modelValue"])) : _("", !0),
    r.widget == "group" ? (o(), d(S, { key: 9 }, [
      r.asObject ? (o(), k(x, {
        key: 0,
        trail: r.currentTrail,
        paymentConfiguration: n.paymentConfiguration,
        includeOfficeOnly: n.includeOfficeOnly,
        submission: n.submission,
        sandbox: n.sandbox,
        "onForm:state": r.groupStateAltered,
        ref: "group",
        onTouched: r.touch,
        field: r.actualField,
        parentModel: n.parentModel,
        modelValue: r.fieldModel,
        "onUpdate:modelValue": t[8] || (t[8] = (F) => r.fieldModel = F)
      }, null, 8, ["trail", "paymentConfiguration", "includeOfficeOnly", "submission", "sandbox", "onForm:state", "onTouched", "field", "parentModel", "modelValue"])) : (o(), k(x, {
        key: 1,
        trail: n.trail,
        paymentConfiguration: n.paymentConfiguration,
        includeOfficeOnly: n.includeOfficeOnly,
        submission: n.submission,
        sandbox: n.sandbox,
        "onForm:state": r.groupStateAltered,
        ref: "group",
        onTouched: r.touch,
        field: r.actualField,
        parentModel: n.parentModel,
        modelValue: r.sourceModel,
        "onUpdate:modelValue": t[9] || (t[9] = (F) => r.sourceModel = F)
      }, null, 8, ["trail", "paymentConfiguration", "includeOfficeOnly", "submission", "sandbox", "onForm:state", "onTouched", "field", "parentModel", "modelValue"]))
    ], 64)) : _("", !0),
    r.widget == "form" ? (o(), k(x, {
      key: 10,
      trail: r.currentTrail,
      paymentConfiguration: n.paymentConfiguration,
      includeOfficeOnly: n.includeOfficeOnly,
      submission: n.submission,
      sandbox: n.sandbox,
      "onForm:state": r.groupStateAltered,
      ref: "group",
      onTouched: r.touch,
      field: r.actualField,
      parentModel: n.parentModel,
      modelValue: r.fieldModel,
      "onUpdate:modelValue": t[10] || (t[10] = (F) => r.fieldModel = F)
    }, null, 8, ["trail", "paymentConfiguration", "includeOfficeOnly", "submission", "sandbox", "onForm:state", "onTouched", "field", "parentModel", "modelValue"])) : _("", !0),
    r.widget == "field-select" ? (o(), k(T, {
      key: 11,
      onTouched: r.touch,
      field: r.actualField,
      modelValue: r.fieldModel,
      "onUpdate:modelValue": t[11] || (t[11] = (F) => r.fieldModel = F)
    }, null, 8, ["onTouched", "field", "modelValue"])) : _("", !0),
    r.widget == "select" ? (o(), k(A, {
      key: 12,
      onTouched: r.touch,
      field: r.actualField,
      modelValue: r.fieldModel,
      "onUpdate:modelValue": t[12] || (t[12] = (F) => r.fieldModel = F)
    }, null, 8, ["onTouched", "field", "modelValue"])) : _("", !0),
    r.widget == "button" ? (o(), k(G, {
      key: 13,
      onTouched: r.touch,
      field: r.actualField,
      modelValue: r.fieldModel,
      "onUpdate:modelValue": t[13] || (t[13] = (F) => r.fieldModel = F)
    }, null, 8, ["onTouched", "field", "modelValue"])) : _("", !0),
    r.widget == "textfield" ? (o(), k(Q, {
      key: 14,
      onTouched: r.touch,
      field: r.actualField,
      modelValue: r.fieldModel,
      "onUpdate:modelValue": t[14] || (t[14] = (F) => r.fieldModel = F)
    }, null, 8, ["onTouched", "field", "modelValue"])) : _("", !0),
    r.widget == "currency" ? (o(), k(re, {
      key: 15,
      onTouched: r.touch,
      field: r.actualField,
      modelValue: r.fieldModel,
      "onUpdate:modelValue": t[15] || (t[15] = (F) => r.fieldModel = F)
    }, null, 8, ["onTouched", "field", "modelValue"])) : _("", !0),
    r.widget == "timefield" ? (o(), k(le, {
      key: 16,
      onTouched: r.touch,
      field: r.actualField,
      modelValue: r.fieldModel,
      "onUpdate:modelValue": t[16] || (t[16] = (F) => r.fieldModel = F)
    }, null, 8, ["onTouched", "field", "modelValue"])) : _("", !0),
    r.widget == "datefield" ? (o(), k(oe, {
      key: 17,
      onTouched: r.touch,
      field: r.actualField,
      modelValue: r.fieldModel,
      "onUpdate:modelValue": t[17] || (t[17] = (F) => r.fieldModel = F)
    }, null, 8, ["onTouched", "field", "modelValue"])) : _("", !0),
    r.widget == "daterange" ? (o(), k(B, {
      key: 18,
      onTouched: r.touch,
      field: r.actualField,
      modelValue: r.fieldModel,
      "onUpdate:modelValue": t[18] || (t[18] = (F) => r.fieldModel = F)
    }, null, 8, ["onTouched", "field", "modelValue"])) : _("", !0),
    r.widget == "content-select" ? (o(), k(D, {
      key: 19,
      onTouched: r.touch,
      field: r.actualField,
      modelValue: r.fieldModel,
      "onUpdate:modelValue": t[19] || (t[19] = (F) => r.fieldModel = F)
    }, null, 8, ["onTouched", "field", "modelValue"])) : _("", !0),
    r.widget == "type-select" ? (o(), k(se, {
      key: 20,
      onTouched: r.touch,
      field: r.actualField,
      modelValue: r.fieldModel,
      "onUpdate:modelValue": t[20] || (t[20] = (F) => r.fieldModel = F)
    }, null, 8, ["onTouched", "field", "modelValue"])) : _("", !0),
    r.widget == "scope-select" ? (o(), k(z, {
      key: 21,
      onTouched: r.touch,
      field: r.actualField,
      modelValue: r.fieldModel,
      "onUpdate:modelValue": t[21] || (t[21] = (F) => r.fieldModel = F)
    }, null, 8, ["onTouched", "field", "modelValue"])) : _("", !0),
    r.widget == "richtext" ? (o(), k(Ce, {
      key: 22,
      onTouched: r.touch,
      field: r.actualField,
      modelValue: r.fieldModel,
      "onUpdate:modelValue": t[22] || (t[22] = (F) => r.fieldModel = F)
    }, null, 8, ["onTouched", "field", "modelValue"])) : _("", !0),
    r.widget == "textarea" ? (o(), k(ke, {
      key: 23,
      onTouched: r.touch,
      field: r.actualField,
      modelValue: r.fieldModel,
      "onUpdate:modelValue": t[23] || (t[23] = (F) => r.fieldModel = F)
    }, null, 8, ["onTouched", "field", "modelValue"])) : _("", !0),
    r.widget == "timezone" ? (o(), k(xe, {
      key: 24,
      onTouched: r.touch,
      field: r.actualField,
      modelValue: r.fieldModel,
      "onUpdate:modelValue": t[24] || (t[24] = (F) => r.fieldModel = F)
    }, null, 8, ["onTouched", "field", "modelValue"])) : _("", !0),
    r.widget == "phone" ? (o(), k(Oe, {
      key: 25,
      onTouched: r.touch,
      field: r.actualField,
      modelValue: r.fieldModel,
      "onUpdate:modelValue": t[25] || (t[25] = (F) => r.fieldModel = F)
    }, null, 8, ["onTouched", "field", "modelValue"])) : _("", !0),
    r.widget == "value" ? (o(), d(S, { key: 26 }, [], 64)) : _("", !0),
    r.widget == "object" ? (o(), k(Te, {
      key: 27,
      onTouched: r.touch,
      field: r.actualField,
      modelValue: r.fieldModel,
      "onUpdate:modelValue": t[26] || (t[26] = (F) => r.fieldModel = F)
    }, null, 8, ["onTouched", "field", "modelValue"])) : _("", !0),
    r.widget == "payment" ? (o(), k(De, {
      key: 28,
      sandbox: n.sandbox,
      configuration: n.paymentConfiguration,
      "onForm:state": r.groupStateAltered,
      field: r.actualField,
      onTouched: r.touch,
      parentModel: n.parentModel,
      modelValue: r.fieldModel,
      "onUpdate:modelValue": t[27] || (t[27] = (F) => r.fieldModel = F)
    }, null, 8, ["sandbox", "configuration", "onForm:state", "field", "onTouched", "parentModel", "modelValue"])) : _("", !0),
    r.widget == "options" ? (o(), k(Ee, {
      key: 29,
      onTouched: r.touch,
      field: r.actualField,
      modelValue: r.fieldModel,
      "onUpdate:modelValue": t[28] || (t[28] = (F) => r.fieldModel = F)
    }, null, 8, ["onTouched", "field", "modelValue"])) : _("", !0),
    r.widget == "code" ? (o(), k(et, {
      key: 30,
      style: { "min-height": "300px" }
    }, {
      default: h(() => [
        m(ht, {
          onTouched: r.touch,
          field: r.actualField,
          modelValue: r.fieldModel,
          "onUpdate:modelValue": t[29] || (t[29] = (F) => r.fieldModel = F)
        }, null, 8, ["onTouched", "field", "modelValue"])
      ]),
      _: 1
    })) : _("", !0),
    r.widget == "expression" ? (o(), k(Ut, {
      key: 31,
      onTouched: r.touch,
      field: r.actualField,
      modelValue: r.fieldModel,
      "onUpdate:modelValue": t[30] || (t[30] = (F) => r.fieldModel = F)
    }, null, 8, ["onTouched", "field", "modelValue"])) : _("", !0),
    r.error && s.validateResults.message ? (o(), d("div", Q2, b(s.validateResults.message), 1)) : _("", !0)
  ], 34)) : _("", !0);
}
const zi = /* @__PURE__ */ E(X2, [["render", eO], ["__scopeId", "data-v-f3303a18"]]);
function tO(e, t, n, i) {
  var s = -1, r = e == null ? 0 : e.length;
  for (i && r && (n = e[++s]); ++s < r; )
    n = t(n, e[s], s, e);
  return n;
}
var nO = tO;
function rO(e) {
  return function(t) {
    return e == null ? void 0 : e[t];
  };
}
var iO = rO, sO = iO, aO = {
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
}, lO = sO(aO), oO = lO, uO = oO, dO = Pi, cO = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, fO = "\\u0300-\\u036f", mO = "\\ufe20-\\ufe2f", hO = "\\u20d0-\\u20ff", pO = fO + mO + hO, yO = "[" + pO + "]", _O = RegExp(yO, "g");
function gO(e) {
  return e = dO(e), e && e.replace(cO, uO).replace(_O, "");
}
var vO = gO, bO = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function kO(e) {
  return e.match(bO) || [];
}
var xO = kO, wO = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function SO(e) {
  return wO.test(e);
}
var OO = SO, so = "\\ud800-\\udfff", TO = "\\u0300-\\u036f", EO = "\\ufe20-\\ufe2f", VO = "\\u20d0-\\u20ff", CO = TO + EO + VO, ao = "\\u2700-\\u27bf", lo = "a-z\\xdf-\\xf6\\xf8-\\xff", AO = "\\xac\\xb1\\xd7\\xf7", MO = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", IO = "\\u2000-\\u206f", FO = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", oo = "A-Z\\xc0-\\xd6\\xd8-\\xde", DO = "\\ufe0e\\ufe0f", uo = AO + MO + IO + FO, co = "['’]", ra = "[" + uo + "]", $O = "[" + CO + "]", fo = "\\d+", NO = "[" + ao + "]", mo = "[" + lo + "]", ho = "[^" + so + uo + fo + ao + lo + oo + "]", LO = "\\ud83c[\\udffb-\\udfff]", PO = "(?:" + $O + "|" + LO + ")", UO = "[^" + so + "]", po = "(?:\\ud83c[\\udde6-\\uddff]){2}", yo = "[\\ud800-\\udbff][\\udc00-\\udfff]", Wt = "[" + oo + "]", jO = "\\u200d", ia = "(?:" + mo + "|" + ho + ")", RO = "(?:" + Wt + "|" + ho + ")", sa = "(?:" + co + "(?:d|ll|m|re|s|t|ve))?", aa = "(?:" + co + "(?:D|LL|M|RE|S|T|VE))?", _o = PO + "?", go = "[" + DO + "]?", BO = "(?:" + jO + "(?:" + [UO, po, yo].join("|") + ")" + go + _o + ")*", zO = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", HO = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", qO = go + _o + BO, GO = "(?:" + [NO, po, yo].join("|") + ")" + qO, WO = RegExp([
  Wt + "?" + mo + "+" + sa + "(?=" + [ra, Wt, "$"].join("|") + ")",
  RO + "+" + aa + "(?=" + [ra, Wt + ia, "$"].join("|") + ")",
  Wt + "?" + ia + "+" + sa,
  Wt + "+" + aa,
  HO,
  zO,
  fo,
  GO
].join("|"), "g");
function KO(e) {
  return e.match(WO) || [];
}
var YO = KO, ZO = xO, JO = OO, XO = Pi, QO = YO;
function eT(e, t, n) {
  return e = XO(e), t = n ? void 0 : t, t === void 0 ? JO(e) ? QO(e) : ZO(e) : e.match(t) || [];
}
var tT = eT, nT = nO, rT = vO, iT = tT, sT = "['’]", aT = RegExp(sT, "g");
function lT(e) {
  return function(t) {
    return nT(iT(rT(t).replace(aT, "")), e, "");
  };
}
var oT = lT, uT = oT, dT = uT(function(e, t, n) {
  return e + (n ? "-" : "") + t.toLowerCase();
}), cT = dT;
const fT = {
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
    sandbox: {
      type: Boolean,
      default: !1
    },
    paymentConfiguration: {
      type: Object
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
      parentFormElement: this.parentFormElement || this,
      directFormElement: this
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
      let t = cT(`${e.title}-${e.key}`);
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
        var i = !1, s = !1, r = !1, a = !1, l = !1, u = [];
        n.childFormElements.forEach(function(f) {
          f.dirty && (i = !0), f.invalid && (s = !0, u.push({
            title: f.field.title,
            key: f.field.key,
            message: f.invalidMessage
          })), f.error && (r = !0), f.touched && (a = !0), f.focussed && (l = !0);
        }), n.dirty = i, n.error = r, n.touched = a, n.focussed = l, n.invalid = s;
        const c = {
          dirty: i,
          error: r,
          focussed: l,
          touched: a,
          invalid: s,
          valid: !s,
          invalidFields: u
        };
        n.$emit("form:state", c);
      });
    }
  },
  components: {
    UxField: zi
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
function mT(e, t, n, i, s, r) {
  const a = y("ux-field");
  return o(), d("div", {
    class: L(["ux-form", r.formClass])
  }, [
    q(e.$slots, "fields", {
      fields: r.renderFields,
      hash: r.fieldHash
    }, () => [
      (o(!0), d(S, null, $(r.renderFields, (l, u) => (o(), k(a, {
        ref_for: !0,
        ref: "field",
        trail: r.currentTrail,
        sandbox: n.sandbox,
        submission: n.submission,
        paymentConfiguration: n.paymentConfiguration,
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
        field: l,
        modelValue: r.formModel,
        "onUpdate:modelValue": t[0] || (t[0] = (c) => r.formModel = c),
        parentModel: n.parentModel || r.formModel,
        class: L([r.fieldClass, { "ux-field-clear": l.clear }]),
        key: `ux-form-field-${r.getFieldKey(l)}-${u}`
      }, null, 8, ["trail", "sandbox", "submission", "paymentConfiguration", "includeOfficeOnly", "onField:mount", "onField:unmount", "onField:dirty", "onField:invalid", "onField:valid", "onField:error", "onField:focus", "onField:blur", "onField:touched", "field", "modelValue", "parentModel", "class"]))), 128))
    ], !0)
  ], 2);
}
const vo = /* @__PURE__ */ E(fT, [["render", mT], ["__scopeId", "data-v-3ad123e3"]]);
const si = "form.ready", hT = "form.processing", la = "form.complete", oa = "form.error", pT = "form.intent", yT = {
  methods: {
    formStateUpdated(e) {
      this.formState = e;
    },
    softReset() {
      this.processing = !1, this.state = si;
    },
    touch() {
      this.$refs.form && this.$refs.form.touch();
    },
    untouch() {
      this.$refs.form && this.$refs.form.untouch();
    },
    reset() {
      this.model = {}, this.intent = null, this.$refs.form && this.$refs.form.reset(), this.state = si, this.error = null, this.submitAttempted = !1, this.processing = !1, this.$emit("reset");
    },
    async confirmIntention() {
      console.log("Confirm intention");
      const e = this;
      e.processing = !0, e.$emit("processing");
      const t = e.$sdk.utils.id(e.intent), n = e.$refs.elms, i = e.$refs.stripePayment, s = window.location.href;
      await n.instance.confirmPayment({
        elements: i.elements,
        redirect: "if_required",
        confirmParams: {
          return_url: s
        }
      }), e.$sdk.api.post(`/form/capture/${t}`).then(r, a);
      async function r({ data: l }) {
        await e.postSubmit(l), e.processing = !1, e.state = la, e.$emit("success", l);
      }
      async function a(l) {
        var u;
        l = ((u = l.response) == null ? void 0 : u.data) || l, e.error = l, e.processing = !1, e.state = oa, e.$emit("error", l);
      }
    },
    async submit() {
      console.log("Submit");
      const e = this;
      if (e.touch(), e.submitAttempted || (e.submitAttempted = !0, e.touch()), e.buttonDisabled) {
        console.log("Form is invalid", this.formState);
        return;
      }
      e.processing = !0, e.state = hT, e.$emit("processing");
      const { submission: t, error: n } = await e.preSubmit(e.model);
      if (n)
        return console.log("pre submit error", n), r(n);
      e.$sdk.api.post(`/form/${e.formID}`, {
        data: t,
        sandbox: e.sandbox
      }).then(function(a) {
        const { data: l } = a;
        return l.submission ? s(a.data) : l.intent ? i(a.data) : r({
          message: "Unexpected response from server",
          status: 500,
          statusCode: 500
        });
      }, r);
      async function i({ intent: a }) {
        switch (console.log("Submission intent was returned", a), e.intent = a, e.intentModule) {
          case "stripe":
            await e.$sdk.utils.loadExternalScript("https://js.stripe.com/v3/");
            break;
        }
        e.state = pT, e.processing = !1, e.$emit("intent", a);
      }
      async function s(a) {
        await e.postSubmit(a), e.processing = !1, e.state = la, e.$emit("success", a);
      }
      async function r(a) {
        var l;
        a = ((l = a.response) == null ? void 0 : l.data) || a, e.error = a, e.processing = !1, e.state = oa, e.$emit("error", a);
      }
    },
    async preSubmit(e) {
      var s, r;
      const t = JSON.parse(JSON.stringify(e)), n = (s = t._payment) == null ? void 0 : s.total, i = (r = t._payment) == null ? void 0 : r.gateway;
      return n ? i ? (i.integration, { submission: t }) : {
        error: {
          message: "No gateway selected",
          status: 400,
          statusCode: 400
        }
      } : (console.log("No total"), { submission: t });
    },
    async postSubmit(e) {
    }
  },
  components: {
    UxForm: vo,
    StripeElements: Gd,
    StripeElement: Bd
  },
  provide() {
    return {
      form: this.form
      // payment: this.payment,
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
    },
    sandbox: {
      type: Boolean,
      default: !1
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
      state: si,
      mounted: !1,
      model: this.modelValue,
      error: null,
      intent: null,
      processing: !1
      // payment: ref({}),
    };
  },
  mounted() {
    this.mounted = !0;
  },
  beforeUnmount() {
    this.mounted = !1;
  },
  computed: {
    payment() {
      return this.model._payment;
    },
    total() {
      var e;
      return (e = this.payment) == null ? void 0 : e.total;
    },
    formattedTotal() {
      return this.$sdk.utils.formatCurrency(this.payment.total, this.payment.currency);
    },
    intentModule() {
      return this.intentAction.module;
    },
    intentAction() {
      var e;
      return ((e = this.intent) == null ? void 0 : e.actionDetails) || {};
    },
    stripeIntent() {
      var t, n;
      if (this.intentModule !== "stripe")
        return;
      const e = (n = (t = this.intentAction) == null ? void 0 : t.paymentIntent) == null ? void 0 : n.client_secret;
      return {
        module: "stripe",
        key: this.intentAction.key,
        clientSecret: e,
        instanceOptions: {
          clientSecret: e
        },
        elementOptions: {
          clientSecret: e
        }
        // paymentElementOptions: {
        //     client_secret: this.intentAction?.paymentIntent?.client_secret,
        // }
      };
    },
    formFields() {
      const e = [...this.fields];
      return e.push({
        title: "Payment",
        type: "object",
        key: "_payment",
        widget: "payment",
        asObject: !0,
        minimum: 1,
        maximum: 1
      }), e;
    },
    classes() {
      const e = [];
      return this.formID && e.push(`form-${this.formID}`), e;
    },
    tooltip() {
      return this.buttonDisabled ? "Please check the errors in your form" : void 0;
    },
    buttonDisabled() {
      return this.noGatewaySelectedButPaymentIsRequired ? !0 : this.submitAttempted && this.invalid;
    },
    noGatewaySelectedButPaymentIsRequired() {
      return this.total ? !this.payment.gateway : !1;
    },
    invalid() {
      var t;
      var e = (t = this.formState) == null ? void 0 : t.invalid;
      return e ? !0 : this.noGatewaySelectedButPaymentIsRequired;
    },
    formID() {
      return this.$sdk.utils.id(this.form);
    },
    paymentConfiguration() {
      return this.form.paymentConfiguration || {};
    },
    fields() {
      return this.form.fields || [];
    }
  }
}, _T = (e) => (at("data-v-e1ea11cb"), e = e(), lt(), e), gT = /* @__PURE__ */ _T(() => /* @__PURE__ */ w("h3", null, "An error occurred", -1)), vT = { key: 0 }, bT = { key: 1 }, kT = { key: 2 }, xT = { class: "intent-submit" }, wT = ["tooltip"];
function ST(e, t, n, i, s, r) {
  var v;
  const a = y("ux-icon"), l = y("ux-button"), u = y("ux-panel-body"), c = y("ux-panel"), f = y("StripeElement"), p = y("StripeElements"), g = y("ux-form");
  return o(), d("div", {
    class: L(["ux-submission-form", r.classes])
  }, [
    s.state === "form.error" ? (o(), d(S, { key: 0 }, [
      gT,
      s.error.message ? (o(), d("pre", vT, b(s.error.message), 1)) : _("", !0),
      (v = s.error.data) != null && v.errors ? (o(), d("div", bT, [
        (o(!0), d(S, null, $(s.error.data.errors, (x) => (o(), d("pre", {
          key: x.path
        }, b(x.message), 1))), 128))
      ])) : (o(), d("pre", kT, b(s.error), 1)),
      m(l, {
        color: "primary",
        onClick: r.softReset
      }, {
        default: h(() => [
          O(" Try again "),
          m(a, {
            right: "",
            icon: "fa-undo"
          })
        ]),
        _: 1
      }, 8, ["onClick"])
    ], 64)) : s.state === "form.complete" ? q(e.$slots, "default", {
      key: 1,
      reset: r.reset
    }, () => [
      O(" Thank you "),
      m(l, { onClick: r.reset }, {
        default: h(() => [
          O(" Back to form ")
        ]),
        _: 1
      }, 8, ["onClick"])
    ], !0) : s.state === "form.intent" ? (o(), d(S, { key: 2 }, [
      r.intentModule === "stripe" ? (o(), d(S, { key: 0 }, [
        m(c, null, {
          default: h(() => [
            m(u, null, {
              default: h(() => [
                O(" Total: " + b(r.formattedTotal), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        r.stripeIntent ? (o(), k(p, {
          key: 0,
          ref: "elms",
          "stripe-key": r.stripeIntent.key,
          "instance-options": r.stripeIntent.instanceOptions,
          "elements-options": r.stripeIntent.elementOptions
        }, {
          default: h(({ elements: x, instance: T }) => [
            m(f, {
              ref: "stripePayment",
              type: "payment",
              elements: x
            }, null, 8, ["elements"])
          ]),
          _: 1
        }, 8, ["stripe-key", "instance-options", "elements-options"])) : _("", !0),
        w("div", xT, [
          m(l, {
            color: "primary",
            onClick: r.confirmIntention
          }, {
            default: h(() => [
              O(" Confirm Payment ")
            ]),
            _: 1
          }, 8, ["onClick"])
        ])
      ], 64)) : _("", !0)
    ], 64)) : (o(), d(S, { key: 3 }, [
      m(g, {
        submission: "",
        sandbox: n.sandbox,
        ref: "form",
        paymentConfiguration: r.paymentConfiguration,
        modelValue: s.model,
        "onUpdate:modelValue": t[0] || (t[0] = (x) => s.model = x),
        "onForm:state": r.formStateUpdated,
        fields: r.formFields
      }, null, 8, ["sandbox", "paymentConfiguration", "modelValue", "onForm:state", "fields"]),
      w("span", { tooltip: r.tooltip }, [
        m(l, {
          disabled: r.buttonDisabled,
          color: "primary",
          onClick: r.submit,
          loading: s.processing
        }, {
          default: h(() => [
            O(b(n.submitText), 1)
          ]),
          _: 1
        }, 8, ["disabled", "onClick", "loading"])
      ], 8, wT)
    ], 64))
  ], 2);
}
const ua = /* @__PURE__ */ E(yT, [["render", ST], ["__scopeId", "data-v-e1ea11cb"]]);
const OT = {
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
    e.dispatch = an(() => {
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
      console.log("Model value changed", e, t), this.value = e;
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
}, TT = { class: "search" }, ET = ["placeholder"];
function VT(e, t, n, i, s, r) {
  const a = y("ux-icon");
  return o(), d("div", TT, [
    K(w("input", {
      "onUpdate:modelValue": t[0] || (t[0] = (l) => r.model = l),
      placeholder: n.placeholder
    }, null, 8, ET), [
      [pe, r.model]
    ]),
    w("div", {
      onClick: t[1] || (t[1] = (l) => r.clear()),
      class: "icon"
    }, [
      m(a, { icon: r.icon }, null, 8, ["icon"])
    ])
  ]);
}
const bo = /* @__PURE__ */ E(OT, [["render", VT], ["__scopeId", "data-v-41858ddc"]]), CT = {
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
const AT = {
  mixins: [CT],
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
}, MT = {
  key: 0,
  class: "ux-multi-group"
};
function IT(e, t, n, i, s, r) {
  const a = y("flex-cell"), l = y("flex-row"), u = y("ux-panel-header"), c = y("ux-render"), f = y("ux-panel-body"), p = y("ux-panel");
  return e.multiValue ? (o(), d("div", MT, [
    (o(!0), d(S, null, $(e.model, (g, v) => (o(), k(p, {
      ref_for: !0,
      ref: "row",
      key: g
    }, {
      default: h(() => [
        m(u, null, {
          default: h(() => [
            m(l, null, {
              default: h(() => [
                m(a, { vcenter: "" }, {
                  default: h(() => [
                    w("div", null, [
                      w("strong", null, b(r.multiLabel(g, v)), 1)
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
        m(f, null, {
          default: h(() => [
            m(c, {
              submission: n.submission,
              fields: e.fields,
              flex: r.sameLine,
              parentModel: e.parentModel,
              modelValue: e.model[v],
              "onUpdate:modelValue": (x) => e.model[v] = x
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
const FT = /* @__PURE__ */ E(AT, [["render", IT], ["__scopeId", "data-v-cb997d0e"]]);
const DT = {
  components: {
    Item: Vl,
    FieldGroup: FT,
    // Compiler,
    Compile: Ui
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
      model: this.modelValue,
      unmaskedLookup: {},
      unmasked: !1
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
    toggleMask(e) {
      this.multiValue ? this.unmaskedLookup[`${e}`] = !this.unmaskedLookup[`${e}`] : this.unmasked = !this.unmasked;
    },
    renderDate(e) {
      return U.fromJSDate(new Date(e)).toFormat("h:mma - ccc, DD");
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
        return !Tt.evaluateExpression(e, n);
      if (t)
        return Tt.evaluateExpression(t, n);
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
        case "password":
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
}, $T = { class: "ux-field-title" }, NT = { class: "currency" }, LT = { key: 1 }, PT = { class: "currency" }, UT = { key: 1 }, jT = {
  key: 4,
  class: "ux-password-render"
}, RT = ["type", "value"], BT = ["type", "value"], zT = { key: 1 }, HT = { key: 1 }, qT = ["href"], GT = { key: 1 }, WT = ["href"], KT = ["href"], YT = { key: 1 }, ZT = ["href"], JT = { key: 1 };
function XT(e, t, n, i, s, r) {
  const a = y("field-group"), l = y("v-ace-editor"), u = y("flex-cell"), c = y("ux-icon"), f = y("ux-button"), p = y("flex-row"), g = y("item"), v = y("compile");
  return r.visible ? (o(), d("div", {
    key: 0,
    class: L(["ux-field-render", r.classes])
  }, [
    w("label", $T, b(r.title), 1),
    r.widget === "group" ? (o(), d(S, { key: 0 }, [
      r.asObject ? (o(), k(a, {
        key: 0,
        submission: n.submission,
        field: n.field,
        parentModel: n.parentModel,
        modelValue: r.fieldModel,
        "onUpdate:modelValue": t[0] || (t[0] = (x) => r.fieldModel = x)
      }, null, 8, ["submission", "field", "parentModel", "modelValue"])) : (o(), k(a, {
        key: 1,
        submission: n.submission,
        field: n.field,
        parentModel: n.parentModel,
        modelValue: r.sourceModel,
        "onUpdate:modelValue": t[1] || (t[1] = (x) => r.sourceModel = x)
      }, null, 8, ["submission", "field", "parentModel", "modelValue"]))
    ], 64)) : r.widget === "form" ? (o(), k(a, {
      key: 1,
      submission: n.submission,
      field: n.field,
      parentModel: n.parentModel,
      modelValue: r.fieldModel,
      "onUpdate:modelValue": t[2] || (t[2] = (x) => r.fieldModel = x)
    }, null, 8, ["submission", "field", "parentModel", "modelValue"])) : r.widget === "currency" ? (o(), d(S, { key: 2 }, [
      r.multiValue ? (o(!0), d(S, { key: 0 }, $(r.fieldModel, (x, T) => (o(), d("div", null, [
        O(b(r.formatCurrency(x)) + " ", 1),
        w("span", NT, b(n.field.currency), 1)
      ]))), 256)) : (o(), d("div", LT, [
        O(b(r.formatCurrency(r.fieldModel)) + " ", 1),
        w("span", PT, b(n.field.currency), 1)
      ]))
    ], 64)) : r.widget === "code" ? (o(), d(S, { key: 3 }, [
      r.multiValue ? (o(!0), d(S, { key: 0 }, $(r.fieldModel, (x, T) => (o(), d("div", null, [
        m(l, {
          readonly: !0,
          class: "editor-wrap",
          value: x,
          options: { useWorker: !0 },
          lang: n.field.syntax,
          theme: "tomorrow_night_eighties",
          style: { "min-height": "300px" }
        }, null, 8, ["value", "lang"])
      ]))), 256)) : (o(), d("div", UT, [
        m(l, {
          readonly: !0,
          class: "editor-wrap",
          value: r.fieldModel,
          options: { useWorker: !0 },
          lang: n.field.syntax,
          theme: "tomorrow_night_eighties",
          style: { "min-height": "300px" }
        }, null, 8, ["value", "lang"])
      ]))
    ], 64)) : r.widget === "password" ? (o(), d("div", jT, [
      r.multiValue ? (o(!0), d(S, { key: 0 }, $(r.fieldModel, (x, T) => (o(), k(p, {
        gap: "",
        center: ""
      }, {
        default: h(() => [
          m(u, null, {
            default: h(() => [
              w("input", {
                type: s.unmaskedLookup[`${T}`] ? "text" : "password",
                value: x
              }, null, 8, RT)
            ]),
            _: 2
          }, 1024),
          m(u, { shrink: "" }, {
            default: h(() => [
              m(f, {
                icon: "",
                onClick: (A) => r.toggleMask(T)
              }, {
                default: h(() => [
                  m(c, {
                    icon: s.unmaskedLookup[`${T}`] ? "fa-eye" : "fa-eye-slash"
                  }, null, 8, ["icon"])
                ]),
                _: 2
              }, 1032, ["onClick"])
            ]),
            _: 2
          }, 1024)
        ]),
        _: 2
      }, 1024))), 256)) : (o(), k(p, {
        key: 1,
        gap: "",
        center: ""
      }, {
        default: h(() => [
          m(u, null, {
            default: h(() => [
              w("input", {
                type: s.unmasked ? "text" : "password",
                value: r.fieldModel
              }, null, 8, BT)
            ]),
            _: 1
          }),
          m(u, { shrink: "" }, {
            default: h(() => [
              m(f, {
                icon: "",
                onClick: r.toggleMask
              }, {
                default: h(() => [
                  m(c, {
                    icon: s.unmasked ? "fa-eye" : "fa-eye-slash"
                  }, null, 8, ["icon"])
                ]),
                _: 1
              }, 8, ["onClick"])
            ]),
            _: 1
          })
        ]),
        _: 1
      }))
    ])) : (o(), d(S, { key: 5 }, [
      r.type === "reference" ? (o(), d(S, { key: 0 }, [
        r.multiValue ? (o(!0), d(S, { key: 0 }, $(r.fieldModel, (x, T) => (o(), k(g, {
          submission: n.submission,
          key: x._id,
          item: x
        }, null, 8, ["submission", "item"]))), 128)) : (o(), k(g, {
          key: 1,
          submission: n.submission,
          item: r.fieldModel
        }, null, 8, ["submission", "item"]))
      ], 64)) : _("", !0),
      r.type == "string" ? (o(), d(S, { key: 1 }, [
        r.multiValue ? (o(!0), d(S, { key: 0 }, $(r.fieldModel, (x, T) => (o(), d("div", null, [
          m(v, { template: x }, null, 8, ["template"])
        ]))), 256)) : (o(), k(v, {
          key: 1,
          template: r.fieldModel
        }, null, 8, ["template"]))
      ], 64)) : _("", !0),
      r.type == "boolean" ? (o(), d(S, { key: 2 }, [
        r.multiValue ? (o(!0), d(S, { key: 0 }, $(r.fieldModel, (x, T) => (o(), d("div", null, b(!!x), 1))), 256)) : (o(), d("div", zT, b(!!r.fieldModel), 1))
      ], 64)) : _("", !0),
      r.type == "date" ? (o(), d(S, { key: 3 }, [
        r.multiValue ? (o(!0), d(S, { key: 0 }, $(r.fieldModel, (x, T) => (o(), d("div", null, b(r.renderDate(x)), 1))), 256)) : (o(), d("div", HT, b(r.renderDate(r.fieldModel)), 1))
      ], 64)) : _("", !0),
      r.type == "email" ? (o(), d(S, { key: 4 }, [
        r.multiValue ? (o(!0), d(S, { key: 0 }, $(r.fieldModel, (x, T) => (o(), d("div", null, [
          w("a", {
            href: `mailto:${x}`
          }, b(x), 9, qT)
        ]))), 256)) : (o(), d("div", GT, [
          w("a", {
            href: `mailto:${r.fieldModel}`
          }, b(r.fieldModel), 9, WT)
        ]))
      ], 64)) : _("", !0),
      r.type == "url" ? (o(), d(S, { key: 5 }, [
        r.multiValue ? (o(!0), d(S, { key: 0 }, $(r.fieldModel, (x, T) => (o(), d("div", null, [
          w("a", { href: x }, b(x), 9, KT)
        ]))), 256)) : (o(), d("div", YT, [
          w("a", { href: r.fieldModel }, b(r.fieldModel), 9, ZT)
        ]))
      ], 64)) : _("", !0),
      r.isNumber ? (o(), d(S, { key: 6 }, [
        r.multiValue ? (o(!0), d(S, { key: 0 }, $(r.fieldModel, (x, T) => (o(), d("div", null, b(x), 1))), 256)) : (o(), d("div", JT, b(r.fieldModel), 1))
      ], 64)) : _("", !0)
    ], 64))
  ], 2)) : _("", !0);
}
const ko = /* @__PURE__ */ E(DT, [["render", XT], ["__scopeId", "data-v-74a68263"]]);
const QT = {
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
    UxFieldRender: ko
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
function eE(e, t, n, i, s, r) {
  const a = y("ux-field-render");
  return o(), d("div", {
    class: L(["ux-render", r.renderClass])
  }, [
    q(e.$slots, "render", { fields: n.fields }, () => [
      (o(!0), d(S, null, $(r.renderFields, (l, u) => (o(), k(a, {
        submission: n.submission,
        field: l,
        modelValue: s.model,
        "onUpdate:modelValue": t[0] || (t[0] = (c) => s.model = c),
        parentModel: n.parentModel || s.model,
        key: `ux-render-field-${l.key}-${u}`,
        class: L(r.fieldClass)
      }, null, 8, ["submission", "field", "modelValue", "parentModel", "class"]))), 128))
    ], !0)
  ], 2);
}
const tE = /* @__PURE__ */ E(QT, [["render", eE], ["__scopeId", "data-v-f2b5ec33"]]);
function nE(e) {
  e = e || {}, Math.max(parseInt(e.minimum || 0), 0);
  let t = Math.max(parseInt(e.maximum || 0), 0);
  const n = Do({}), i = wr([]);
  let s = {};
  Oi(i, function() {
    r();
  });
  function r() {
    s = i.reduce(function(a, l) {
      var u = l._id || l.id;
      if (u)
        return a[u] = l, a;
    }, {});
  }
  return n.isSelected = function(a) {
    return s[a._id || a.id];
  }, n.select = function(a, l) {
    n.isSelected(a) || (t && i.length >= t && t === 1 && (i.length = 0), i.push(a), t && i.length > t && (i.length = t, n.dispatch("limit", t)), l || n.dispatch("change", i));
  }, n.deselect = function(a, l) {
    if (t === 1) {
      i.length = 0;
      return;
    }
    var u = i.findIndex(function(c) {
      return c._id && c._id == a._id || c.id && c.id == a.id;
    });
    u != -1 && (i.splice(u, 1), l || n.dispatch("change", i));
  }, n.toggle = function(a, l) {
    n.isSelected(a) ? n.deselect(a, l) : n.select(a, l);
  }, n.selectMultiple = function(a) {
    a.forEach(function(l) {
      n.select(l, !0);
    }), n.dispatch("change", i);
  }, n.deselectMultiple = function(a) {
    a.forEach(function(l) {
      n.deselect(l, !0);
    }), n.dispatch("change", i);
  }, n.setSelection = function(a) {
    i.length = 0, setTimeout(function() {
      n.selectMultiple(a);
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
const rE = {
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
    NativeSelect: Pt
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
function iE(e, t, n, i, s, r) {
  const a = y("native-select"), l = y("flex-cell"), u = y("ux-icon"), c = y("ux-button"), f = y("flex-row");
  return o(), k(f, {
    center: "",
    gap: ""
  }, {
    default: h(() => [
      m(l, {
        shrink: "",
        class: "text"
      }, {
        default: h(() => [
          m(a, {
            modelValue: r.perPage,
            "onUpdate:modelValue": t[0] || (t[0] = (p) => r.perPage = p),
            field: s.perPageField
          }, {
            default: h(() => [
              e.$device.breakpoint.xs ? (o(), d(S, { key: 0 }, [
                O(b(r.displayStartIndex) + "-" + b(r.endIndex) + " of " + b(n.total), 1)
              ], 64)) : (o(), d(S, { key: 1 }, [
                O("Showing " + b(r.displayStartIndex) + " to " + b(r.endIndex) + " of " + b(n.total) + " total", 1)
              ], 64))
            ]),
            _: 1
          }, 8, ["modelValue", "field"])
        ]),
        _: 1
      }),
      m(l),
      r.totalPages > 1 ? (o(), k(l, {
        key: 0,
        shrink: ""
      }, {
        default: h(() => [
          m(f, {
            gap: "",
            center: ""
          }, {
            default: h(() => [
              m(l, {
                shrink: "",
                class: "text"
              }, {
                default: h(() => [
                  m(a, {
                    modelValue: r.currentPage,
                    "onUpdate:modelValue": t[1] || (t[1] = (p) => r.currentPage = p),
                    field: r.pageField
                  }, {
                    default: h(() => [
                      e.$device.breakpoint.xs ? (o(), d(S, { key: 0 }, [
                        O(b(r.currentPage) + "/" + b(r.totalPages), 1)
                      ], 64)) : (o(), d(S, { key: 1 }, [
                        O("Page " + b(r.currentPage) + " of " + b(r.totalPages), 1)
                      ], 64))
                    ]),
                    _: 1
                  }, 8, ["modelValue", "field"])
                ]),
                _: 1
              }),
              m(l, { shrink: "" }, {
                default: h(() => [
                  m(c, {
                    icon: "",
                    onClick: t[2] || (t[2] = (p) => r.previousPage())
                  }, {
                    default: h(() => [
                      m(u, { icon: "fa-arrow-left" })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              m(l, { shrink: "" }, {
                default: h(() => [
                  m(c, {
                    icon: "",
                    onClick: t[3] || (t[3] = (p) => r.nextPage())
                  }, {
                    default: h(() => [
                      m(u, { icon: "fa-arrow-right" })
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
const sE = /* @__PURE__ */ E(rE, [["render", iE], ["__scopeId", "data-v-51741539"]]);
var aE = "__lodash_hash_undefined__";
function lE(e) {
  return this.__data__.set(e, aE), this;
}
var oE = lE;
function uE(e) {
  return this.__data__.has(e);
}
var dE = uE, cE = gl, fE = oE, mE = dE;
function xr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new cE(); ++t < n; )
    this.add(e[t]);
}
xr.prototype.add = xr.prototype.push = fE;
xr.prototype.has = mE;
var hE = xr, pE = to;
function yE(e, t) {
  var n = e == null ? 0 : e.length;
  return !!n && pE(e, t, 0) > -1;
}
var _E = yE;
function gE(e, t, n) {
  for (var i = -1, s = e == null ? 0 : e.length; ++i < s; )
    if (n(t, e[i]))
      return !0;
  return !1;
}
var vE = gE;
function bE(e, t) {
  return e.has(t);
}
var kE = bE, xE = Ni, wE = sn, SE = xE(wE, "Set"), OE = SE;
function TE() {
}
var EE = TE;
function VE(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(i) {
    n[++t] = i;
  }), n;
}
var xo = VE, ai = OE, CE = EE, AE = xo, ME = 1 / 0, IE = ai && 1 / AE(new ai([, -0]))[1] == ME ? function(e) {
  return new ai(e);
} : CE, FE = IE, DE = hE, $E = _E, NE = vE, LE = kE, PE = FE, UE = xo, jE = 200;
function RE(e, t, n) {
  var i = -1, s = $E, r = e.length, a = !0, l = [], u = l;
  if (n)
    a = !1, s = NE;
  else if (r >= jE) {
    var c = t ? null : PE(e);
    if (c)
      return UE(c);
    a = !1, s = LE, u = new DE();
  } else
    u = t ? [] : l;
  e:
    for (; ++i < r; ) {
      var f = e[i], p = t ? t(f) : f;
      if (f = n || f !== 0 ? f : 0, a && p === p) {
        for (var g = u.length; g--; )
          if (u[g] === p)
            continue e;
        t && u.push(p), l.push(f);
      } else
        s(u, p, n) || (u !== l && u.push(p), l.push(f));
    }
  return l;
}
var BE = RE, zE = BE;
function HE(e) {
  return e && e.length ? zE(e) : [];
}
var qE = HE;
function GE(e, t) {
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
            return new Promise(async function(r, a) {
              await e.$sdk.auth.ensureValidToken();
              var l = e.$sdk.files.downloadUrl(e.basicType, s);
              window.open(l), r();
            });
          }
        }
      });
      break;
  }
  return n;
}
function da() {
  return {
    operator: "and",
    filters: []
  };
}
let Me, li, oi;
const WE = {
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
        return da();
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
    Pager: sE,
    NativeTable: Py,
    FilterBuilder: eo,
    Search: bo,
    UxField: zi
  },
  deactivated() {
    oi = this.$sdk.global.cacheKeys[this.type], Me && (Me.cancel(), Me = null, li = !0);
  },
  async activated() {
    var e = this, t = e.$sdk.global.cacheKeys[e.type];
    oi != t && (oi = t, e.dataSource = await e.load()), li && (li = !1, e.dataSource = await e.load());
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
      handler: "debounceReload",
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
      e ? this.actualFilter = e : this.actualFilter = da();
    }
  },
  computed: {
    actualDefinition() {
      var e;
      return this.definition || ((e = this.options) == null ? void 0 : e.definition);
    },
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
        case "event":
          e = {
            key: "startDate",
            direction: "asc",
            type: "date"
          };
          break;
        case "workflowcard":
          e = {
            key: "due",
            direction: "dsc",
            type: "date"
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
      const e = this, t = e.actualDefinition.definesType === "submission";
      var n = [...e.actualDefinition.fields], i = e.actualDefinition.definedFields || [];
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
            title: `${e.actualDefinition.title}`,
            minimum: 1,
            maximum: 1,
            key: "data",
            asObject: !0,
            type: "group",
            fields: i
          };
          n.push(r);
        }
      var a = e.$sdk.utils.mapFields(n).filter(function(l) {
        var u = l.type == "group" && l.asObject && l.minimum == 1 && l.maximum == 1;
        return !u;
      }).map(function(l) {
        return l.title = l.titles.join(" › "), l;
      }).sort(function(l, u) {
        return l.title < u.title ? -1 : 1;
      });
      return a;
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
      return this.actualDefinition.title;
    },
    plural() {
      return this.actualDefinition.plural;
    },
    selectFields() {
      const e = this;
      var t = e.columns.map(function(n) {
        return [n.path || n.key, ...n.select || []];
      }).flat().filter(Boolean).map(function(n) {
        return n.split("[]").join("");
      });
      return e.actualOptions.select && (t = [...t, ...e.actualOptions.select]), qE(t);
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
      var s = this.actualOptions.columns, r = s && s.length ? s : GE(this, this.basicType);
      r.length || r.push({
        title: "Title",
        key: "title"
      }), r.forEach(n(!0));
      var a = this.additionalFields;
      a.forEach(n());
      var l = this.actualOptions.suffixColumns || [];
      l.forEach(n(!0));
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
      return this.actualDefinition ? this.actualDefinition.definesType || this.actualDefinition.key : this.type;
    },
    loadCriteria() {
      const e = this, t = e.sort || e.defaultSort, n = e.keywords, i = e.selectFields, s = e.page, r = e.combinedFilter, a = e.roloPrimary, l = e.roloSecondary;
      return {
        sort: t,
        search: n,
        select: i,
        page: s,
        filter: r,
        rolodexPrimary: a,
        rolodexSecondary: l
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
    debounceReload: an(function() {
      this.reload();
    }),
    async reload() {
      this.dataSource = await this.load();
    },
    toggleField(e) {
      var t = e.path || e.key, n = this.additionalFields.findIndex(function(i) {
        return i.path === t || i.key === t;
      });
      n === -1 ? this.additionalFields.push(e) : this.additionalFields.splice(n, 1);
    },
    ensureMeta(e) {
      var t;
      return e.meta || (e.meta = {}), e.meta.type || (e.meta.type = this.basicType), e.meta.definition || (e.meta.definition = (t = this.definition) == null ? void 0 : t.key), this.trash && (e.meta.deleted = !0), e;
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
      var l, u, c, f;
      var t = this;
      t.loading = !0, Me && (Me.cancel(), Me = null);
      var n = Object.assign({}, t.loadCriteria);
      if (n.includeAll = e, t.trash && (n.trash = !0), t.dateFilterEnabled && !n.search) {
        let p = (u = (l = t.dateRangeFilter) == null ? void 0 : l.dateRange) == null ? void 0 : u.startDate, g = (f = (c = t.dateRangeFilter) == null ? void 0 : c.dateRange) == null ? void 0 : f.endDate;
        if (p || g) {
          let v = Intl.DateTimeFormat().resolvedOptions().timeZone;
          p.toISOString() == g.toISOString() ? (p = new Date(p), p.setHours(0, 0, 0, 0), g = new Date(p), g.setHours(23, 59, 59, 999)) : (g = new Date(g), g.setHours(23, 59, 59, 999)), n.date = {
            startDate: p,
            endDate: g,
            timezone: v
          };
        }
      }
      const i = Math.random(), { promise: s, cancel: r } = await t.$sdk.content.list(t.type, n, { remoteURL: t.actualOptions.remoteURL, cancellable: !0 });
      Me = { id: i, cancel: r }, s.then(function(p) {
        (Me == null ? void 0 : Me.id) === i && (Me = null, t.loading = !1, t.loadKey++);
      }), s.catch(function(p) {
        (Me == null ? void 0 : Me.id) === i && (Me = null);
      });
      const { data: a } = await s;
      if (a)
        return a.items.forEach(t.ensureMeta), a;
    }
  },
  data() {
    var e = this.selectionManager;
    return e || (e = new nE({ minimum: this.minimum, maximum: this.maximum })), this.modelValue && e.setSelection(this.modelValue), {
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
}, wo = (e) => (at("data-v-594affe2"), e = e(), lt(), e), KE = { class: "footer" }, YE = /* @__PURE__ */ wo(() => /* @__PURE__ */ w("p", null, null, -1)), ZE = { key: 0 }, JE = /* @__PURE__ */ wo(() => /* @__PURE__ */ w("p", null, null, -1));
function XE(e, t, n, i, s, r) {
  const a = y("ux-icon"), l = y("ux-panel-body"), u = y("ux-panel"), c = y("flex-column"), f = y("ux-button"), p = y("ux-list-item"), g = y("ux-list"), v = y("ux-menu"), x = y("native-table"), T = y("pager"), A = y("flex-footer"), G = y("flex-row"), Q = y("search"), re = y("ux-field"), le = y("filter-builder"), oe = y("flex-body"), B = y("spinner");
  return r.actualDefinition ? (o(), k(c, {
    key: 0,
    class: "content-browser"
  }, {
    default: h(() => [
      m(c, { class: "browser-body" }, {
        default: h(() => [
          m(G, null, {
            default: h(() => [
              m(G, {
                class: L({ loading: s.loading })
              }, {
                default: h(() => [
                  m(c, null, {
                    default: h(() => [
                      m(c, null, {
                        default: h(() => [
                          s.dataSource ? (o(), d(S, { key: 0 }, [
                            q(e.$slots, "abovecontent", {}, void 0, !0),
                            r.boundaryMessage ? (o(), k(c, {
                              key: 0,
                              class: "empty"
                            }, {
                              default: h(() => [
                                m(u, null, {
                                  default: h(() => [
                                    m(l, null, {
                                      default: h(() => [
                                        m(a, {
                                          class: "large-icon",
                                          icon: "fa-database"
                                        }),
                                        w("div", null, b(r.boundaryMessage), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })) : r.items.length ? (o(), k(c, { key: 1 }, {
                              default: h(() => [
                                r.viewMode && r.viewMode.component ? (o(), k(wt(r.viewMode.component), {
                                  key: 0,
                                  onReload: r.debounceReload,
                                  cacheKey: r.viewModeCacheKey,
                                  definition: r.actualDefinition,
                                  selection: s.manager.items,
                                  items: r.items,
                                  "onClick:actions": r.actionsClicked,
                                  "onSelect:item:toggle": r.rowToggled,
                                  "onClick:item": r.rowClicked
                                }, null, 40, ["onReload", "cacheKey", "definition", "selection", "items", "onClick:actions", "onSelect:item:toggle", "onClick:item"])) : (o(), k(x, {
                                  key: 1,
                                  sort: s.sort,
                                  "onUpdate:sort": t[0] || (t[0] = (D) => s.sort = D),
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
                                  corner: h(() => [
                                    m(v, { right: "" }, {
                                      activator: h(({ on: D }) => [
                                        m(f, Ti({ icon: "" }, ha(D)), {
                                          default: h(() => [
                                            m(a, { icon: "fa-cog" })
                                          ]),
                                          _: 2
                                        }, 1040)
                                      ]),
                                      default: h(() => [
                                        m(g, null, {
                                          default: h(() => [
                                            (o(!0), d(S, null, $(r.fields, (D) => (o(), k(p, {
                                              onClick: (se) => r.toggleField(D),
                                              key: D.path
                                            }, {
                                              default: h(() => [
                                                m(a, {
                                                  icon: r.fieldEnabled[D.path] ? "fa-check-square" : "fa-regular fa-square",
                                                  left: ""
                                                }, null, 8, ["icon"]),
                                                O(" " + b(D.title), 1)
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
                            })) : (o(), d(S, { key: 2 }, [
                              r.viewMode && r.viewMode.component && r.viewMode.customEmpty ? (o(), k(wt(r.viewMode.component), {
                                key: 0,
                                onReload: r.debounceReload,
                                cacheKey: r.viewModeCacheKey,
                                definition: r.actualDefinition,
                                selection: s.manager.items,
                                items: r.items,
                                "onClick:actions": r.actionsClicked,
                                "onSelect:item:toggle": r.rowToggled,
                                "onClick:item": r.rowClicked
                              }, null, 40, ["onReload", "cacheKey", "definition", "selection", "items", "onClick:actions", "onSelect:item:toggle", "onClick:item"])) : (o(), k(c, {
                                key: 1,
                                class: "empty",
                                center: ""
                              }, {
                                default: h(() => [
                                  m(u, null, {
                                    default: h(() => [
                                      m(l, null, {
                                        default: h(() => [
                                          w("div", null, "No " + b(r.plural) + " found.", 1)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }))
                            ], 64))
                          ], 64)) : _("", !0)
                        ]),
                        _: 3
                      }),
                      s.dataSource && !r.boundaryMessage ? (o(), k(A, { key: 0 }, {
                        default: h(() => [
                          q(e.$slots, "footera", {}, void 0, !0),
                          w("div", KE, [
                            m(T, {
                              page: s.page,
                              "onUpdate:page": t[1] || (t[1] = (D) => s.page = D),
                              total: r.totalItems
                            }, null, 8, ["page", "total"])
                          ]),
                          q(e.$slots, "footerb", {}, void 0, !0)
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
                default: h(() => [
                  q(e.$slots, "abovefilter", {}, void 0, !0),
                  m(oe, null, {
                    default: h(() => [
                      m(Q, {
                        modelValue: s.keywords,
                        "onUpdate:modelValue": t[2] || (t[2] = (D) => s.keywords = D),
                        loading: r.searching,
                        debounce: 500,
                        placeholder: "Keyword Search"
                      }, null, 8, ["modelValue", "loading"]),
                      YE,
                      n.dateFilterEnabled ? (o(), d("div", ZE, [
                        m(re, {
                          field: r.dateRangeField,
                          modelValue: s.dateRangeFilter,
                          "onUpdate:modelValue": t[3] || (t[3] = (D) => s.dateRangeFilter = D)
                        }, null, 8, ["field", "modelValue"])
                      ])) : _("", !0),
                      JE,
                      m(le, {
                        definition: r.actualDefinition,
                        modelValue: s.actualFilter,
                        "onUpdate:modelValue": t[4] || (t[4] = (D) => s.actualFilter = D)
                      }, null, 8, ["definition", "modelValue"])
                    ]),
                    _: 1
                  }),
                  q(e.$slots, "belowfilter", {}, void 0, !0)
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
const QE = /* @__PURE__ */ E(WE, [["render", XE], ["__scopeId", "data-v-594affe2"]]), Pn = {
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
const eV = {
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
}, tV = { class: "modal-wrapper" };
function nV(e, t, n, i, s, r) {
  return o(), d("div", tV, [
    w("div", {
      class: "modal-blanket",
      onClick: t[0] || (t[0] = (...a) => r.blanketClick && r.blanketClick(...a))
    }),
    w("div", {
      class: "modal-content",
      style: Ot(r.style)
    }, [
      (o(), k(wt(n.modal.component), Ti({
        options: n.modal.options
      }, r.componentProps, {
        onClose: r.close,
        onDismiss: r.dismiss
      }), null, 16, ["options", "onClose", "onDismiss"]))
    ], 4)
  ]);
}
const rV = /* @__PURE__ */ E(eV, [["render", nV], ["__scopeId", "data-v-3f68f622"]]);
const iV = {
  mixins: [Pn]
}, sV = { class: "padder" }, aV = ["innerHTML"], lV = { class: "padder" };
function oV(e, t, n, i, s, r) {
  const a = y("flex-body"), l = y("ux-button"), u = y("flex-cell"), c = y("flex-row"), f = y("flex-footer"), p = y("flex-column");
  return o(), k(p, { class: "wrapper" }, {
    default: h(() => [
      m(a, null, {
        default: h(() => [
          w("div", sV, [
            w("h5", null, b(e.options.title), 1),
            w("div", {
              innerHTML: e.options.description
            }, null, 8, aV)
          ])
        ]),
        _: 1
      }),
      m(f, null, {
        default: h(() => [
          w("div", lV, [
            m(c, null, {
              default: h(() => [
                m(u, null, {
                  default: h(() => [
                    m(l, {
                      color: "dismiss",
                      onClick: e.dismiss
                    }, {
                      default: h(() => [
                        O("Cancel")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 1
                }),
                m(u, null, {
                  default: h(() => [
                    m(l, {
                      color: "primary",
                      onClick: e.close
                    }, {
                      default: h(() => [
                        O("Confirm")
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
const uV = /* @__PURE__ */ E(iV, [["render", oV], ["__scopeId", "data-v-19242609"]]);
const dV = {
  data() {
    return {
      selected: null
    };
  },
  mixins: [Pn],
  methods: {
    select(e) {
      this.selected = e, this.close(e);
    }
  }
}, cV = { class: "header" }, fV = { class: "padder" }, mV = ["onClick"], hV = {
  key: 0,
  class: "title"
}, pV = {
  key: 1,
  class: "description"
}, yV = { class: "padder" };
function _V(e, t, n, i, s, r) {
  const a = y("flex-header"), l = y("flex-cell"), u = y("ux-icon"), c = y("flex-row"), f = y("flex-body"), p = y("ux-button"), g = y("flex-footer"), v = y("flex-column");
  return o(), k(v, { class: "wrapper" }, {
    default: h(() => [
      m(a, null, {
        default: h(() => [
          w("div", cV, [
            w("h5", null, b(e.options.title), 1),
            w("div", null, b(e.options.description), 1)
          ])
        ]),
        _: 1
      }),
      m(f, { class: "body" }, {
        default: h(() => [
          w("div", fV, [
            (o(!0), d(S, null, $(e.options.choices, (x) => (o(), d("div", {
              class: "choice",
              onClick: (T) => r.select(x)
            }, [
              m(c, { vcenter: "" }, {
                default: h(() => [
                  m(l, null, {
                    default: h(() => [
                      x.title ? (o(), d("div", hV, b(x.title), 1)) : _("", !0),
                      x.description ? (o(), d("div", pV, b(x.description), 1)) : _("", !0)
                    ]),
                    _: 2
                  }, 1024),
                  m(l, { shrink: "" }, {
                    default: h(() => [
                      m(u, { icon: "fa-angle-right" })
                    ]),
                    _: 1
                  })
                ]),
                _: 2
              }, 1024)
            ], 8, mV))), 256))
          ])
        ]),
        _: 1
      }),
      m(g, null, {
        default: h(() => [
          w("div", yV, [
            m(p, { onClick: e.dismiss }, {
              default: h(() => [
                O("Cancel")
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
const gV = /* @__PURE__ */ E(dV, [["render", _V], ["__scopeId", "data-v-5b38f9ba"]]);
const vV = {
  mixins: [Pn],
  data() {
    return {
      model: {},
      formState: null
    };
  },
  methods: {
    formStateUpdated(e) {
      this.formState = e;
    }
  },
  computed: {
    invalid() {
      var t;
      var e = (t = this.formState) == null ? void 0 : t.invalid;
      if (e)
        return !0;
    },
    fields() {
      return this.options.fields || [];
    }
  },
  created() {
    this.options.model && (this.model = this.options.model);
  }
}, bV = { class: "padder" }, kV = { key: 0 }, xV = { class: "padder" };
function wV(e, t, n, i, s, r) {
  const a = y("ux-form"), l = y("flex-body"), u = y("ux-button"), c = y("flex-cell"), f = y("flex-spacer"), p = y("flex-row"), g = y("flex-footer"), v = y("flex-column");
  return o(), d("form", {
    class: "wrapper",
    onSubmit: t[2] || (t[2] = W((...x) => e.submit && e.submit(...x), ["prevent", "stop"]))
  }, [
    m(v, null, {
      default: h(() => [
        m(l, null, {
          default: h(() => [
            w("div", bV, [
              w("h5", null, b(e.options.title), 1),
              e.options.description ? (o(), d("p", kV, b(e.options.description), 1)) : _("", !0),
              m(a, {
                ref: "form",
                "onForm:state": r.formStateUpdated,
                modelValue: s.model,
                "onUpdate:modelValue": t[0] || (t[0] = (x) => s.model = x),
                fields: r.fields
              }, null, 8, ["onForm:state", "modelValue", "fields"])
            ])
          ]),
          _: 1
        }),
        m(g, null, {
          default: h(() => [
            w("div", xV, [
              m(p, null, {
                default: h(() => [
                  m(c, { shrink: "" }, {
                    default: h(() => [
                      m(u, {
                        tag: "a",
                        onClick: e.dismiss
                      }, {
                        default: h(() => [
                          O("Cancel")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    _: 1
                  }),
                  m(f),
                  m(c, { shrink: "" }, {
                    default: h(() => [
                      m(u, {
                        disabled: r.invalid,
                        color: "primary",
                        type: "submit",
                        onClick: t[1] || (t[1] = (x) => e.close(s.model))
                      }, {
                        default: h(() => [
                          O("Confirm")
                        ]),
                        _: 1
                      }, 8, ["disabled"])
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
const SV = /* @__PURE__ */ E(vV, [["render", wV], ["__scopeId", "data-v-243e2939"]]);
const OV = {
  components: {
    ContentBrowser: QE,
    Search: bo
  },
  mixins: [Pn],
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
}, TV = { class: "header" }, EV = { class: "font-muted font-sm" }, VV = { class: "rolodex" };
function CV(e, t, n, i, s, r) {
  const a = y("flex-column"), l = y("flex-cell"), u = y("search"), c = y("ux-icon"), f = y("ux-button"), p = y("flex-row"), g = y("flex-header"), v = y("content-browser");
  return o(), k(a, { class: "wrapper" }, {
    default: h(() => [
      s.loading ? (o(), k(a, { key: 0 }, {
        default: h(() => [
          O(" Loading ")
        ]),
        _: 1
      })) : (o(), d(S, { key: 1 }, [
        s.definition ? (o(), d(S, { key: 0 }, [
          m(g, null, {
            default: h(() => [
              w("div", TV, [
                m(p, {
                  vcenter: "",
                  gap: ""
                }, {
                  default: h(() => [
                    m(l, { shrink: "" }, {
                      default: h(() => [
                        w("h3", null, "Select " + b(r.maximum == 1 ? r.title : r.plural), 1)
                      ]),
                      _: 1
                    }),
                    r.maximum ? (o(), k(l, { key: 0 }, {
                      default: h(() => [
                        w("span", EV, "(" + b(s.model.length) + " of " + b(r.maximum) + ")", 1)
                      ]),
                      _: 1
                    })) : _("", !0),
                    m(l, null, {
                      default: h(() => [
                        s.showFilters ? _("", !0) : (o(), k(u, {
                          key: 0,
                          modelValue: s.search,
                          "onUpdate:modelValue": t[0] || (t[0] = (x) => s.search = x),
                          loading: s.searching,
                          debounce: 500,
                          placeholder: "Keyword Search"
                        }, null, 8, ["modelValue", "loading"]))
                      ]),
                      _: 1
                    }),
                    m(l, { shrink: "" }, {
                      default: h(() => [
                        m(f, {
                          icon: e.$device.breakpoint.mobile,
                          onClick: t[1] || (t[1] = (x) => s.showFilters = !s.showFilters)
                        }, {
                          default: h(() => [
                            e.$device.breakpoint.mobile ? (o(), k(c, {
                              key: 0,
                              icon: "fa-search"
                            })) : (o(), d(S, { key: 1 }, [
                              O(b(s.showFilters ? "Hide" : "Show") + " Filters", 1)
                            ], 64))
                          ]),
                          _: 1
                        }, 8, ["icon"])
                      ]),
                      _: 1
                    }),
                    m(l, { shrink: "" }, {
                      default: h(() => [
                        m(f, {
                          color: "primary",
                          onClick: r.selectionComplete
                        }, {
                          default: h(() => [
                            O("Done")
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
          m(v, {
            rolodexPrimary: r.rolodexPrimary,
            "onUpdate:rolodexPrimary": t[3] || (t[3] = (x) => r.rolodexPrimary = x),
            showFilters: s.showFilters,
            ref: "browser",
            search: s.search,
            "onClick:row": r.rowClicked,
            maximum: e.options.maximum,
            modelValue: s.model,
            "onUpdate:modelValue": t[4] || (t[4] = (x) => s.model = x),
            type: e.options.type,
            options: r.browserOptions
          }, {
            abovecontent: h(() => [
              r.rolodexEnabled ? (o(), k(g, { key: 0 }, {
                default: h(() => [
                  w("div", VV, [
                    m(f, {
                      size: "sm",
                      onClick: t[2] || (t[2] = (x) => r.toggleRolodex("")),
                      icon: "",
                      color: r.rolodexPrimary ? "" : "primary"
                    }, {
                      default: h(() => [
                        O("All")
                      ]),
                      _: 1
                    }, 8, ["color"]),
                    (o(!0), d(S, null, $(r.letters, (x) => (o(), k(f, {
                      size: "sm",
                      onClick: (T) => r.toggleRolodex(x),
                      icon: "",
                      color: r.rolodexPrimary === x ? "primary" : ""
                    }, {
                      default: h(() => [
                        O(b(x), 1)
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
const AV = /* @__PURE__ */ E(OV, [["render", CV], ["__scopeId", "data-v-7eedb824"]]);
const MV = {
  components: {
    ScopeSelect: yb
    // Search,
  },
  mixins: [Pn],
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
}, IV = (e) => (at("data-v-e905a558"), e = e(), lt(), e), FV = { class: "header" }, DV = /* @__PURE__ */ IV(() => /* @__PURE__ */ w("h3", null, "Select Scopes", -1)), $V = { class: "padder" };
function NV(e, t, n, i, s, r) {
  const a = y("flex-cell"), l = y("ux-button"), u = y("flex-row"), c = y("flex-header"), f = y("scope-select"), p = y("flex-body"), g = y("flex-column");
  return o(), k(g, { class: "wrapper" }, {
    default: h(() => [
      m(c, null, {
        default: h(() => [
          w("div", FV, [
            m(u, {
              vcenter: "",
              gap: ""
            }, {
              default: h(() => [
                m(a, null, {
                  default: h(() => [
                    DV
                  ]),
                  _: 1
                }),
                m(a, { shrink: "" }, {
                  default: h(() => [
                    m(l, {
                      color: "primary",
                      onClick: r.selectionComplete
                    }, {
                      default: h(() => [
                        O("Done")
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
      m(p, { class: "scroll-body" }, {
        default: h(() => [
          w("div", $V, [
            m(f, {
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
const LV = /* @__PURE__ */ E(MV, [["render", NV], ["__scopeId", "data-v-e905a558"]]);
function zV() {
  var e = wr({
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
    }, a = 0;
    i > e.limits.xs && a++, i > e.limits.sm && a++, i > e.limits.md && a++, i > e.limits.lg && a++, a < 1 && (r.mobile = !0, r.xs = !0, r.xsOnly = !0, r.smAndDown = !0, r.mdAndDown = !0, r.lgAndDown = !0), a == 1 && (r.tablet = !0, r.sm = !0, r.smOnly = !0, r.smAndDown = !0, r.mdAndDown = !0, r.lgAndDown = !0, r.smAndUp = !0), a == 2 && (r.desktop = !0, r.md = !0, r.mdOnly = !0, r.mdAndDown = !0, r.lgAndDown = !0, r.smAndUp = !0, r.mdAndUp = !0), a == 3 && (r.desktop = !0, r.lg = !0, r.lgOnly = !0, r.lgAndDown = !0, r.smAndUp = !0, r.mdAndUp = !0, r.lgAndUp = !0), a > 3 && (r.desktop = !0, r.xl = !0, r.xlOnly = !0, r.smAndUp = !0, r.mdAndUp = !0, r.lgAndUp = !0), e.point = a, e.breakpoint = r;
  }, e.mount = function(i) {
    t || (n = i, e.resize(), t = !0, e.mounted = !0, n.addEventListener("resize", e.resize));
  }, e.unmount = function() {
    n.removeEventListener("resize", e.resize), n = !1, t = !1, e.mounted = !1;
  }, e;
}
const PV = `qik vue ui ${$o}`, ca = {
  FlexColumn: Zd,
  FlexBody: ec,
  FlexHeader: ic,
  FlexFooter: oc,
  FlexCell: fc,
  FlexSpacer: bc,
  FlexRow: yc,
  UxInfo: y_,
  UxPanel: Sc,
  UxPanelBody: Vc,
  UxPanelHeader: Ic,
  UxPanelFooter: Nc,
  UxList: mg,
  UxListItem: yg,
  UxForm: vo,
  UxSubmissionForm: ua,
  UxFormField: zi,
  UxSubmissionForm: ua,
  UxRender: tE,
  UxRenderField: ko,
  UxIcon: j_,
  UxMenu: z_,
  UxMenuList: G_,
  UxImage: J_,
  UxVideo: rg,
  UxButton: C_,
  UxCheckbox: Tl,
  UxSwitch: D_,
  UxLink: L_,
  UxTabset: Df,
  UxTab: Lf,
  Avatar: b_,
  Spinner: Ol,
  ProgressBar: ug,
  UxModal: rV,
  Compile: Ui
}, HV = {
  install(e, t) {
    console.log(PV), t.date = Je, t.modals = wr([]), t.modal = function(n) {
      return new Promise(function(i, s) {
        n.id = t.modals.length, n.resolve = i, n.reject = s, t.modals.splice(n.id, 0, n);
      });
    }, t.prompt = function(n, i) {
      return i = i || {}, i.model = i.model || {}, i.fields = n, t.modal({
        component: SV,
        options: i
      });
    }, t.browse = function(n, i) {
      return i = i || {}, i.type = n, i.model = i.model || [], t.modal({
        component: AV,
        options: i
      });
    }, t.selectScopes = function(n) {
      return n = n || {}, n.model = n.model || [], t.modal({
        component: LV,
        options: n
      });
    }, t.confirm = function(n, i) {
      return i = i || {}, i.title = n, t.modal({
        component: uV,
        options: i
      });
    }, t.options = function(n, i, s) {
      return t.modal({
        component: gV,
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
    for (const n in ca) {
      const i = ca[n];
      e.component(n, i);
    }
  }
};
export {
  b_ as Avatar,
  hx as CodeEditor,
  QE as ContentBrowser,
  kg as DateRange,
  zV as Device,
  sk as FileDrop,
  ec as FlexBody,
  fc as FlexCell,
  Zd as FlexColumn,
  oc as FlexFooter,
  ic as FlexHeader,
  yc as FlexRow,
  bc as FlexSpacer,
  y_ as Info,
  Vl as Item,
  Pn as ModalMixin,
  Pt as NativeSelect,
  BV as Pager,
  Sc as Panel,
  Vc as PanelBody,
  Nc as PanelFooter,
  Ic as PanelHeader,
  ug as ProgressBar,
  HV as QikUI,
  Ay as RememberScrollMixin,
  yb as ScopeSelect,
  vb as ScopeSelectButton,
  bo as Search,
  nE as Selection,
  Ol as Spinner,
  Bd as StripeElement,
  Gd as StripeElements,
  C_ as UXButton,
  Tl as UXCheckbox,
  vo as UXForm,
  zi as UXFormField,
  j_ as UXIcon,
  J_ as UXImage,
  L_ as UXLink,
  mg as UXList,
  yg as UXListItem,
  z_ as UXMenu,
  G_ as UXMenuList,
  tE as UXRender,
  ko as UXRenderField,
  ua as UXSubmissionForm,
  D_ as UXSwitch,
  Lf as UXTab,
  Py as UXTable,
  Df as UXTabset,
  rg as UXVideo,
  uV as UxConfirmModal,
  AV as UxContentModal,
  rV as UxModal,
  gV as UxOptionsModal,
  SV as UxPromptModal,
  LV as UxScopeModal
};
//# sourceMappingURL=lib.es.js.map
