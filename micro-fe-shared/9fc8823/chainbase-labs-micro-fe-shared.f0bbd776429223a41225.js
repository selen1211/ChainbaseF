System.register(["react-i18next", "react"], function (e, t) {
  var n = {},
    o = {};
  return {
    setters: [
      function (e) {
        n.initReactI18next = e.initReactI18next;
      },
      function (e) {
        (o.useCallback = e.useCallback),
          (o.useImperativeHandle = e.useImperativeHandle),
          (o.useRef = e.useRef),
          (o.useState = e.useState);
      },
    ],
    execute: function () {
      e(
        (() => {
          var e = {
              444: (e, t) => {
                "use strict";
                function n(e, ...t) {
                  if (e) for (const { fn: n } of e) n(...t);
                }
                (t.vl = t.CQ = void 0),
                  (t.CQ = Symbol("ALL_EVENTS")),
                  (t.vl = class {
                    constructor() {
                      this.$ = Object.create(null);
                    }
                    on(e, t) {
                      return (
                        (n = this.$[e] = this.$[e] || new Set()),
                        (o = { fn: t }),
                        n.add(o),
                        function () {
                          return n.delete(o);
                        }
                      );
                      var n, o;
                    }
                    emit(e, ...o) {
                      n(this.$[e], ...o), n(this.$[t.CQ], { type: e, args: o });
                    }
                  });
              },
              126: (e, t, n) => {
                const o = n(358).y;
                t.w = function (e) {
                  if ((e || (e = 1), !n.y.meta || !n.y.meta.url))
                    throw (
                      (console.error("__system_context__", n.y),
                      Error(
                        "systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided"
                      ))
                    );
                  n.p = o(n.y.meta.url, e);
                };
              },
              358: (e, t, n) => {
                t.y = function (e, t) {
                  var n = document.createElement("a");
                  n.href = e;
                  for (
                    var o =
                        "/" === n.pathname[0] ? n.pathname : "/" + n.pathname,
                      s = 0,
                      i = o.length;
                    s !== t && i >= 0;

                  )
                    "/" === o[--i] && s++;
                  if (s !== t)
                    throw Error(
                      "systemjs-webpack-interop: rootDirectoryLevel (" +
                        t +
                        ") is greater than the number of directories (" +
                        s +
                        ") in the URL path " +
                        e
                    );
                  var r = o.slice(0, i + 1);
                  return n.protocol + "//" + n.host + r;
                };
                Number.isInteger;
              },
              726: (e) => {
                "use strict";
                e.exports = o;
              },
              372: (e) => {
                "use strict";
                e.exports = n;
              },
            },
            s = {};
          function i(t) {
            var n = s[t];
            if (void 0 !== n) return n.exports;
            var o = (s[t] = { exports: {} });
            return e[t](o, o.exports, i), o.exports;
          }
          (i.y = t),
            (i.d = (e, t) => {
              for (var n in t)
                i.o(t, n) &&
                  !i.o(e, n) &&
                  Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
            }),
            (i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
            (i.r = (e) => {
              "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                  value: "Module",
                }),
                Object.defineProperty(e, "__esModule", { value: !0 });
            }),
            (i.p = "");
          var r = {};
          return (
            (0, i(126).w)(1),
            (() => {
              "use strict";
              i.r(r),
                i.d(r, {
                  SingletonModal: () => de,
                  emitter: () => it,
                  sharedI18n: () => K,
                  useSingletonModal: () => ve,
                });
              const e = {
                type: "logger",
                log(e) {
                  this.output("log", e);
                },
                warn(e) {
                  this.output("warn", e);
                },
                error(e) {
                  this.output("error", e);
                },
                output(e, t) {
                  console && console[e] && console[e].apply(console, t);
                },
              };
              class t {
                constructor(e) {
                  let t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  this.init(e, t);
                }
                init(t) {
                  let n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  (this.prefix = n.prefix || "i18next:"),
                    (this.logger = t || e),
                    (this.options = n),
                    (this.debug = n.debug);
                }
                log() {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  return this.forward(t, "log", "", !0);
                }
                warn() {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  return this.forward(t, "warn", "", !0);
                }
                error() {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  return this.forward(t, "error", "");
                }
                deprecate() {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  return this.forward(t, "warn", "WARNING DEPRECATED: ", !0);
                }
                forward(e, t, n, o) {
                  return o && !this.debug
                    ? null
                    : ("string" == typeof e[0] &&
                        (e[0] = `${n}${this.prefix} ${e[0]}`),
                      this.logger[t](e));
                }
                create(e) {
                  return new t(this.logger, {
                    prefix: `${this.prefix}:${e}:`,
                    ...this.options,
                  });
                }
                clone(e) {
                  return (
                    ((e = e || this.options).prefix = e.prefix || this.prefix),
                    new t(this.logger, e)
                  );
                }
              }
              var n = new t();
              class o {
                constructor() {
                  this.observers = {};
                }
                on(e, t) {
                  return (
                    e.split(" ").forEach((e) => {
                      this.observers[e] || (this.observers[e] = new Map());
                      const n = this.observers[e].get(t) || 0;
                      this.observers[e].set(t, n + 1);
                    }),
                    this
                  );
                }
                off(e, t) {
                  this.observers[e] &&
                    (t
                      ? this.observers[e].delete(t)
                      : delete this.observers[e]);
                }
                emit(e) {
                  for (
                    var t = arguments.length,
                      n = new Array(t > 1 ? t - 1 : 0),
                      o = 1;
                    o < t;
                    o++
                  )
                    n[o - 1] = arguments[o];
                  this.observers[e] &&
                    Array.from(this.observers[e].entries()).forEach((e) => {
                      let [t, o] = e;
                      for (let e = 0; e < o; e++) t(...n);
                    }),
                    this.observers["*"] &&
                      Array.from(this.observers["*"].entries()).forEach((t) => {
                        let [o, s] = t;
                        for (let t = 0; t < s; t++) o.apply(o, [e, ...n]);
                      });
                }
              }
              function s() {
                let e, t;
                const n = new Promise((n, o) => {
                  (e = n), (t = o);
                });
                return (n.resolve = e), (n.reject = t), n;
              }
              function a(e) {
                return null == e ? "" : "" + e;
              }
              const l = /###/g;
              function u(e, t, n) {
                function o(e) {
                  return e && e.indexOf("###") > -1 ? e.replace(l, ".") : e;
                }
                function s() {
                  return !e || "string" == typeof e;
                }
                const i = "string" != typeof t ? t : t.split(".");
                let r = 0;
                for (; r < i.length - 1; ) {
                  if (s()) return {};
                  const t = o(i[r]);
                  !e[t] && n && (e[t] = new n()),
                    (e = Object.prototype.hasOwnProperty.call(e, t)
                      ? e[t]
                      : {}),
                    ++r;
                }
                return s() ? {} : { obj: e, k: o(i[r]) };
              }
              function c(e, t, n) {
                const { obj: o, k: s } = u(e, t, Object);
                if (void 0 !== o || 1 === t.length) return void (o[s] = n);
                let i = t[t.length - 1],
                  r = t.slice(0, t.length - 1),
                  a = u(e, r, Object);
                for (; void 0 === a.obj && r.length; )
                  (i = `${r[r.length - 1]}.${i}`),
                    (r = r.slice(0, r.length - 1)),
                    (a = u(e, r, Object)),
                    a &&
                      a.obj &&
                      void 0 !== a.obj[`${a.k}.${i}`] &&
                      (a.obj = void 0);
                a.obj[`${a.k}.${i}`] = n;
              }
              function h(e, t) {
                const { obj: n, k: o } = u(e, t);
                if (n) return n[o];
              }
              function p(e, t, n) {
                for (const o in t)
                  "__proto__" !== o &&
                    "constructor" !== o &&
                    (o in e
                      ? "string" == typeof e[o] ||
                        e[o] instanceof String ||
                        "string" == typeof t[o] ||
                        t[o] instanceof String
                        ? n && (e[o] = t[o])
                        : p(e[o], t[o], n)
                      : (e[o] = t[o]));
                return e;
              }
              function g(e) {
                return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
              }
              var d = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "/": "&#x2F;",
              };
              function f(e) {
                return "string" == typeof e
                  ? e.replace(/[&<>"'\/]/g, (e) => d[e])
                  : e;
              }
              const m = [" ", ",", "?", "!", ";"],
                v = new (class {
                  constructor(e) {
                    (this.capacity = e),
                      (this.regExpMap = new Map()),
                      (this.regExpQueue = []);
                  }
                  getRegExp(e) {
                    const t = this.regExpMap.get(e);
                    if (void 0 !== t) return t;
                    const n = new RegExp(e);
                    return (
                      this.regExpQueue.length === this.capacity &&
                        this.regExpMap.delete(this.regExpQueue.shift()),
                      this.regExpMap.set(e, n),
                      this.regExpQueue.push(e),
                      n
                    );
                  }
                })(20);
              function y(e, t) {
                let n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : ".";
                if (!e) return;
                if (e[t]) return e[t];
                const o = t.split(n);
                let s = e;
                for (let e = 0; e < o.length; ) {
                  if (!s || "object" != typeof s) return;
                  let t,
                    i = "";
                  for (let r = e; r < o.length; ++r)
                    if (
                      (r !== e && (i += n),
                      (i += o[r]),
                      (t = s[i]),
                      void 0 !== t)
                    ) {
                      if (
                        ["string", "number", "boolean"].indexOf(typeof t) >
                          -1 &&
                        r < o.length - 1
                      )
                        continue;
                      e += r - e + 1;
                      break;
                    }
                  s = t;
                }
                return s;
              }
              function b(e) {
                return e && e.indexOf("_") > 0 ? e.replace("_", "-") : e;
              }
              class S extends o {
                constructor(e) {
                  let t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : { ns: ["translation"], defaultNS: "translation" };
                  super(),
                    (this.data = e || {}),
                    (this.options = t),
                    void 0 === this.options.keySeparator &&
                      (this.options.keySeparator = "."),
                    void 0 === this.options.ignoreJSONStructure &&
                      (this.options.ignoreJSONStructure = !0);
                }
                addNamespaces(e) {
                  this.options.ns.indexOf(e) < 0 && this.options.ns.push(e);
                }
                removeNamespaces(e) {
                  const t = this.options.ns.indexOf(e);
                  t > -1 && this.options.ns.splice(t, 1);
                }
                getResource(e, t, n) {
                  let o =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : {};
                  const s =
                      void 0 !== o.keySeparator
                        ? o.keySeparator
                        : this.options.keySeparator,
                    i =
                      void 0 !== o.ignoreJSONStructure
                        ? o.ignoreJSONStructure
                        : this.options.ignoreJSONStructure;
                  let r;
                  e.indexOf(".") > -1
                    ? (r = e.split("."))
                    : ((r = [e, t]),
                      n &&
                        (Array.isArray(n)
                          ? r.push(...n)
                          : "string" == typeof n && s
                          ? r.push(...n.split(s))
                          : r.push(n)));
                  const a = h(this.data, r);
                  return (
                    !a &&
                      !t &&
                      !n &&
                      e.indexOf(".") > -1 &&
                      ((e = r[0]), (t = r[1]), (n = r.slice(2).join("."))),
                    a || !i || "string" != typeof n
                      ? a
                      : y(this.data && this.data[e] && this.data[e][t], n, s)
                  );
                }
                addResource(e, t, n, o) {
                  let s =
                    arguments.length > 4 && void 0 !== arguments[4]
                      ? arguments[4]
                      : { silent: !1 };
                  const i =
                    void 0 !== s.keySeparator
                      ? s.keySeparator
                      : this.options.keySeparator;
                  let r = [e, t];
                  n && (r = r.concat(i ? n.split(i) : n)),
                    e.indexOf(".") > -1 &&
                      ((r = e.split(".")), (o = t), (t = r[1])),
                    this.addNamespaces(t),
                    c(this.data, r, o),
                    s.silent || this.emit("added", e, t, n, o);
                }
                addResources(e, t, n) {
                  let o =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : { silent: !1 };
                  for (const o in n)
                    ("string" != typeof n[o] &&
                      "[object Array]" !==
                        Object.prototype.toString.apply(n[o])) ||
                      this.addResource(e, t, o, n[o], { silent: !0 });
                  o.silent || this.emit("added", e, t, n);
                }
                addResourceBundle(e, t, n, o, s) {
                  let i =
                      arguments.length > 5 && void 0 !== arguments[5]
                        ? arguments[5]
                        : { silent: !1, skipCopy: !1 },
                    r = [e, t];
                  e.indexOf(".") > -1 &&
                    ((r = e.split(".")), (o = n), (n = t), (t = r[1])),
                    this.addNamespaces(t);
                  let a = h(this.data, r) || {};
                  i.skipCopy || (n = JSON.parse(JSON.stringify(n))),
                    o ? p(a, n, s) : (a = { ...a, ...n }),
                    c(this.data, r, a),
                    i.silent || this.emit("added", e, t, n);
                }
                removeResourceBundle(e, t) {
                  this.hasResourceBundle(e, t) && delete this.data[e][t],
                    this.removeNamespaces(t),
                    this.emit("removed", e, t);
                }
                hasResourceBundle(e, t) {
                  return void 0 !== this.getResource(e, t);
                }
                getResourceBundle(e, t) {
                  return (
                    t || (t = this.options.defaultNS),
                    "v1" === this.options.compatibilityAPI
                      ? { ...this.getResource(e, t) }
                      : this.getResource(e, t)
                  );
                }
                getDataByLanguage(e) {
                  return this.data[e];
                }
                hasLanguageSomeTranslations(e) {
                  const t = this.getDataByLanguage(e);
                  return !!((t && Object.keys(t)) || []).find(
                    (e) => t[e] && Object.keys(t[e]).length > 0
                  );
                }
                toJSON() {
                  return this.data;
                }
              }
              var x = {
                processors: {},
                addPostProcessor(e) {
                  this.processors[e.name] = e;
                },
                handle(e, t, n, o, s) {
                  return (
                    e.forEach((e) => {
                      this.processors[e] &&
                        (t = this.processors[e].process(t, n, o, s));
                    }),
                    t
                  );
                },
              };
              const w = {};
              class k extends o {
                constructor(e) {
                  let t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  var o, s;
                  super(),
                    (o = e),
                    (s = this),
                    [
                      "resourceStore",
                      "languageUtils",
                      "pluralResolver",
                      "interpolator",
                      "backendConnector",
                      "i18nFormat",
                      "utils",
                    ].forEach((e) => {
                      o[e] && (s[e] = o[e]);
                    }),
                    (this.options = t),
                    void 0 === this.options.keySeparator &&
                      (this.options.keySeparator = "."),
                    (this.logger = n.create("translator"));
                }
                changeLanguage(e) {
                  e && (this.language = e);
                }
                exists(e) {
                  let t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : { interpolation: {} };
                  if (null == e) return !1;
                  const n = this.resolve(e, t);
                  return n && void 0 !== n.res;
                }
                extractFromKey(e, t) {
                  let n =
                    void 0 !== t.nsSeparator
                      ? t.nsSeparator
                      : this.options.nsSeparator;
                  void 0 === n && (n = ":");
                  const o =
                    void 0 !== t.keySeparator
                      ? t.keySeparator
                      : this.options.keySeparator;
                  let s = t.ns || this.options.defaultNS || [];
                  const i = n && e.indexOf(n) > -1,
                    r = !(
                      this.options.userDefinedKeySeparator ||
                      t.keySeparator ||
                      this.options.userDefinedNsSeparator ||
                      t.nsSeparator ||
                      (function (e, t, n) {
                        (t = t || ""), (n = n || "");
                        const o = m.filter(
                          (e) => t.indexOf(e) < 0 && n.indexOf(e) < 0
                        );
                        if (0 === o.length) return !0;
                        const s = v.getRegExp(
                          `(${o.map((e) => ("?" === e ? "\\?" : e)).join("|")})`
                        );
                        let i = !s.test(e);
                        if (!i) {
                          const t = e.indexOf(n);
                          t > 0 && !s.test(e.substring(0, t)) && (i = !0);
                        }
                        return i;
                      })(e, n, o)
                    );
                  if (i && !r) {
                    const t = e.match(this.interpolator.nestingRegexp);
                    if (t && t.length > 0) return { key: e, namespaces: s };
                    const i = e.split(n);
                    (n !== o ||
                      (n === o && this.options.ns.indexOf(i[0]) > -1)) &&
                      (s = i.shift()),
                      (e = i.join(o));
                  }
                  return (
                    "string" == typeof s && (s = [s]), { key: e, namespaces: s }
                  );
                }
                translate(e, t, n) {
                  if (
                    ("object" != typeof t &&
                      this.options.overloadTranslationOptionHandler &&
                      (t =
                        this.options.overloadTranslationOptionHandler(
                          arguments
                        )),
                    "object" == typeof t && (t = { ...t }),
                    t || (t = {}),
                    null == e)
                  )
                    return "";
                  Array.isArray(e) || (e = [String(e)]);
                  const o =
                      void 0 !== t.returnDetails
                        ? t.returnDetails
                        : this.options.returnDetails,
                    s =
                      void 0 !== t.keySeparator
                        ? t.keySeparator
                        : this.options.keySeparator,
                    { key: i, namespaces: r } = this.extractFromKey(
                      e[e.length - 1],
                      t
                    ),
                    a = r[r.length - 1],
                    l = t.lng || this.language,
                    u =
                      t.appendNamespaceToCIMode ||
                      this.options.appendNamespaceToCIMode;
                  if (l && "cimode" === l.toLowerCase()) {
                    if (u) {
                      const e = t.nsSeparator || this.options.nsSeparator;
                      return o
                        ? {
                            res: `${a}${e}${i}`,
                            usedKey: i,
                            exactUsedKey: i,
                            usedLng: l,
                            usedNS: a,
                            usedParams: this.getUsedParamsDetails(t),
                          }
                        : `${a}${e}${i}`;
                    }
                    return o
                      ? {
                          res: i,
                          usedKey: i,
                          exactUsedKey: i,
                          usedLng: l,
                          usedNS: a,
                          usedParams: this.getUsedParamsDetails(t),
                        }
                      : i;
                  }
                  const c = this.resolve(e, t);
                  let h = c && c.res;
                  const p = (c && c.usedKey) || i,
                    g = (c && c.exactUsedKey) || i,
                    d = Object.prototype.toString.apply(h),
                    f =
                      void 0 !== t.joinArrays
                        ? t.joinArrays
                        : this.options.joinArrays,
                    m = !this.i18nFormat || this.i18nFormat.handleAsObject;
                  if (
                    m &&
                    h &&
                    "string" != typeof h &&
                    "boolean" != typeof h &&
                    "number" != typeof h &&
                    [
                      "[object Number]",
                      "[object Function]",
                      "[object RegExp]",
                    ].indexOf(d) < 0 &&
                    ("string" != typeof f || "[object Array]" !== d)
                  ) {
                    if (!t.returnObjects && !this.options.returnObjects) {
                      this.options.returnedObjectHandler ||
                        this.logger.warn(
                          "accessing an object - but returnObjects options is not enabled!"
                        );
                      const e = this.options.returnedObjectHandler
                        ? this.options.returnedObjectHandler(p, h, {
                            ...t,
                            ns: r,
                          })
                        : `key '${i} (${this.language})' returned an object instead of string.`;
                      return o
                        ? ((c.res = e),
                          (c.usedParams = this.getUsedParamsDetails(t)),
                          c)
                        : e;
                    }
                    if (s) {
                      const e = "[object Array]" === d,
                        n = e ? [] : {},
                        o = e ? g : p;
                      for (const e in h)
                        if (Object.prototype.hasOwnProperty.call(h, e)) {
                          const i = `${o}${s}${e}`;
                          (n[e] = this.translate(i, {
                            ...t,
                            joinArrays: !1,
                            ns: r,
                          })),
                            n[e] === i && (n[e] = h[e]);
                        }
                      h = n;
                    }
                  } else if (
                    m &&
                    "string" == typeof f &&
                    "[object Array]" === d
                  )
                    (h = h.join(f)),
                      h && (h = this.extendTranslation(h, e, t, n));
                  else {
                    let o = !1,
                      r = !1;
                    const u = void 0 !== t.count && "string" != typeof t.count,
                      p = k.hasDefaultValue(t),
                      g = u ? this.pluralResolver.getSuffix(l, t.count, t) : "",
                      d =
                        t.ordinal && u
                          ? this.pluralResolver.getSuffix(l, t.count, {
                              ordinal: !1,
                            })
                          : "",
                      f =
                        u &&
                        !t.ordinal &&
                        0 === t.count &&
                        this.pluralResolver.shouldUseIntlApi(),
                      m =
                        (f &&
                          t[
                            `defaultValue${this.options.pluralSeparator}zero`
                          ]) ||
                        t[`defaultValue${g}`] ||
                        t[`defaultValue${d}`] ||
                        t.defaultValue;
                    !this.isValidLookup(h) && p && ((o = !0), (h = m)),
                      this.isValidLookup(h) || ((r = !0), (h = i));
                    const v =
                        (t.missingKeyNoValueFallbackToKey ||
                          this.options.missingKeyNoValueFallbackToKey) &&
                        r
                          ? void 0
                          : h,
                      y = p && m !== h && this.options.updateMissing;
                    if (r || o || y) {
                      if (
                        (this.logger.log(
                          y ? "updateKey" : "missingKey",
                          l,
                          a,
                          i,
                          y ? m : h
                        ),
                        s)
                      ) {
                        const e = this.resolve(i, { ...t, keySeparator: !1 });
                        e &&
                          e.res &&
                          this.logger.warn(
                            "Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format."
                          );
                      }
                      let e = [];
                      const n = this.languageUtils.getFallbackCodes(
                        this.options.fallbackLng,
                        t.lng || this.language
                      );
                      if (
                        "fallback" === this.options.saveMissingTo &&
                        n &&
                        n[0]
                      )
                        for (let t = 0; t < n.length; t++) e.push(n[t]);
                      else
                        "all" === this.options.saveMissingTo
                          ? (e = this.languageUtils.toResolveHierarchy(
                              t.lng || this.language
                            ))
                          : e.push(t.lng || this.language);
                      const o = (e, n, o) => {
                        const s = p && o !== h ? o : v;
                        this.options.missingKeyHandler
                          ? this.options.missingKeyHandler(e, a, n, s, y, t)
                          : this.backendConnector &&
                            this.backendConnector.saveMissing &&
                            this.backendConnector.saveMissing(e, a, n, s, y, t),
                          this.emit("missingKey", e, a, n, h);
                      };
                      this.options.saveMissing &&
                        (this.options.saveMissingPlurals && u
                          ? e.forEach((e) => {
                              const n = this.pluralResolver.getSuffixes(e, t);
                              f &&
                                t[
                                  `defaultValue${this.options.pluralSeparator}zero`
                                ] &&
                                n.indexOf(
                                  `${this.options.pluralSeparator}zero`
                                ) < 0 &&
                                n.push(`${this.options.pluralSeparator}zero`),
                                n.forEach((n) => {
                                  o([e], i + n, t[`defaultValue${n}`] || m);
                                });
                            })
                          : o(e, i, m));
                    }
                    (h = this.extendTranslation(h, e, t, c, n)),
                      r &&
                        h === i &&
                        this.options.appendNamespaceToMissingKey &&
                        (h = `${a}:${i}`),
                      (r || o) &&
                        this.options.parseMissingKeyHandler &&
                        (h =
                          "v1" !== this.options.compatibilityAPI
                            ? this.options.parseMissingKeyHandler(
                                this.options.appendNamespaceToMissingKey
                                  ? `${a}:${i}`
                                  : i,
                                o ? h : void 0
                              )
                            : this.options.parseMissingKeyHandler(h));
                  }
                  return o
                    ? ((c.res = h),
                      (c.usedParams = this.getUsedParamsDetails(t)),
                      c)
                    : h;
                }
                extendTranslation(e, t, n, o, s) {
                  var i = this;
                  if (this.i18nFormat && this.i18nFormat.parse)
                    e = this.i18nFormat.parse(
                      e,
                      { ...this.options.interpolation.defaultVariables, ...n },
                      n.lng || this.language || o.usedLng,
                      o.usedNS,
                      o.usedKey,
                      { resolved: o }
                    );
                  else if (!n.skipInterpolation) {
                    n.interpolation &&
                      this.interpolator.init({
                        ...n,
                        interpolation: {
                          ...this.options.interpolation,
                          ...n.interpolation,
                        },
                      });
                    const r =
                      "string" == typeof e &&
                      (n &&
                      n.interpolation &&
                      void 0 !== n.interpolation.skipOnVariables
                        ? n.interpolation.skipOnVariables
                        : this.options.interpolation.skipOnVariables);
                    let a;
                    if (r) {
                      const t = e.match(this.interpolator.nestingRegexp);
                      a = t && t.length;
                    }
                    let l =
                      n.replace && "string" != typeof n.replace ? n.replace : n;
                    if (
                      (this.options.interpolation.defaultVariables &&
                        (l = {
                          ...this.options.interpolation.defaultVariables,
                          ...l,
                        }),
                      (e = this.interpolator.interpolate(
                        e,
                        l,
                        n.lng || this.language,
                        n
                      )),
                      r)
                    ) {
                      const t = e.match(this.interpolator.nestingRegexp);
                      a < (t && t.length) && (n.nest = !1);
                    }
                    !n.lng &&
                      "v1" !== this.options.compatibilityAPI &&
                      o &&
                      o.res &&
                      (n.lng = o.usedLng),
                      !1 !== n.nest &&
                        (e = this.interpolator.nest(
                          e,
                          function () {
                            for (
                              var e = arguments.length, o = new Array(e), r = 0;
                              r < e;
                              r++
                            )
                              o[r] = arguments[r];
                            return s && s[0] === o[0] && !n.context
                              ? (i.logger.warn(
                                  `It seems you are nesting recursively key: ${o[0]} in key: ${t[0]}`
                                ),
                                null)
                              : i.translate(...o, t);
                          },
                          n
                        )),
                      n.interpolation && this.interpolator.reset();
                  }
                  const r = n.postProcess || this.options.postProcess,
                    a = "string" == typeof r ? [r] : r;
                  return (
                    null != e &&
                      a &&
                      a.length &&
                      !1 !== n.applyPostProcessor &&
                      (e = x.handle(
                        a,
                        e,
                        t,
                        this.options && this.options.postProcessPassResolved
                          ? {
                              i18nResolved: {
                                ...o,
                                usedParams: this.getUsedParamsDetails(n),
                              },
                              ...n,
                            }
                          : n,
                        this
                      )),
                    e
                  );
                }
                resolve(e) {
                  let t,
                    n,
                    o,
                    s,
                    i,
                    r =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                  return (
                    "string" == typeof e && (e = [e]),
                    e.forEach((e) => {
                      if (this.isValidLookup(t)) return;
                      const a = this.extractFromKey(e, r),
                        l = a.key;
                      n = l;
                      let u = a.namespaces;
                      this.options.fallbackNS &&
                        (u = u.concat(this.options.fallbackNS));
                      const c =
                          void 0 !== r.count && "string" != typeof r.count,
                        h =
                          c &&
                          !r.ordinal &&
                          0 === r.count &&
                          this.pluralResolver.shouldUseIntlApi(),
                        p =
                          void 0 !== r.context &&
                          ("string" == typeof r.context ||
                            "number" == typeof r.context) &&
                          "" !== r.context,
                        g = r.lngs
                          ? r.lngs
                          : this.languageUtils.toResolveHierarchy(
                              r.lng || this.language,
                              r.fallbackLng
                            );
                      u.forEach((e) => {
                        this.isValidLookup(t) ||
                          ((i = e),
                          !w[`${g[0]}-${e}`] &&
                            this.utils &&
                            this.utils.hasLoadedNamespace &&
                            !this.utils.hasLoadedNamespace(i) &&
                            ((w[`${g[0]}-${e}`] = !0),
                            this.logger.warn(
                              `key "${n}" for languages "${g.join(
                                ", "
                              )}" won't get resolved as namespace "${i}" was not yet loaded`,
                              "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"
                            )),
                          g.forEach((n) => {
                            if (this.isValidLookup(t)) return;
                            s = n;
                            const i = [l];
                            if (
                              this.i18nFormat &&
                              this.i18nFormat.addLookupKeys
                            )
                              this.i18nFormat.addLookupKeys(i, l, n, e, r);
                            else {
                              let e;
                              c &&
                                (e = this.pluralResolver.getSuffix(
                                  n,
                                  r.count,
                                  r
                                ));
                              const t = `${this.options.pluralSeparator}zero`,
                                o = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                              if (
                                (c &&
                                  (i.push(l + e),
                                  r.ordinal &&
                                    0 === e.indexOf(o) &&
                                    i.push(
                                      l +
                                        e.replace(
                                          o,
                                          this.options.pluralSeparator
                                        )
                                    ),
                                  h && i.push(l + t)),
                                p)
                              ) {
                                const n = `${l}${this.options.contextSeparator}${r.context}`;
                                i.push(n),
                                  c &&
                                    (i.push(n + e),
                                    r.ordinal &&
                                      0 === e.indexOf(o) &&
                                      i.push(
                                        n +
                                          e.replace(
                                            o,
                                            this.options.pluralSeparator
                                          )
                                      ),
                                    h && i.push(n + t));
                              }
                            }
                            let a;
                            for (; (a = i.pop()); )
                              this.isValidLookup(t) ||
                                ((o = a), (t = this.getResource(n, e, a, r)));
                          }));
                      });
                    }),
                    {
                      res: t,
                      usedKey: n,
                      exactUsedKey: o,
                      usedLng: s,
                      usedNS: i,
                    }
                  );
                }
                isValidLookup(e) {
                  return !(
                    void 0 === e ||
                    (!this.options.returnNull && null === e) ||
                    (!this.options.returnEmptyString && "" === e)
                  );
                }
                getResource(e, t, n) {
                  let o =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : {};
                  return this.i18nFormat && this.i18nFormat.getResource
                    ? this.i18nFormat.getResource(e, t, n, o)
                    : this.resourceStore.getResource(e, t, n, o);
                }
                getUsedParamsDetails() {
                  let e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  const t = [
                      "defaultValue",
                      "ordinal",
                      "context",
                      "replace",
                      "lng",
                      "lngs",
                      "fallbackLng",
                      "ns",
                      "keySeparator",
                      "nsSeparator",
                      "returnObjects",
                      "returnDetails",
                      "joinArrays",
                      "postProcess",
                      "interpolation",
                    ],
                    n = e.replace && "string" != typeof e.replace;
                  let o = n ? e.replace : e;
                  if (
                    (n && void 0 !== e.count && (o.count = e.count),
                    this.options.interpolation.defaultVariables &&
                      (o = {
                        ...this.options.interpolation.defaultVariables,
                        ...o,
                      }),
                    !n)
                  ) {
                    o = { ...o };
                    for (const e of t) delete o[e];
                  }
                  return o;
                }
                static hasDefaultValue(e) {
                  for (const t in e)
                    if (
                      Object.prototype.hasOwnProperty.call(e, t) &&
                      "defaultValue" === t.substring(0, 12) &&
                      void 0 !== e[t]
                    )
                      return !0;
                  return !1;
                }
              }
              function O(e) {
                return e.charAt(0).toUpperCase() + e.slice(1);
              }
              class L {
                constructor(e) {
                  (this.options = e),
                    (this.supportedLngs = this.options.supportedLngs || !1),
                    (this.logger = n.create("languageUtils"));
                }
                getScriptPartFromCode(e) {
                  if (!(e = b(e)) || e.indexOf("-") < 0) return null;
                  const t = e.split("-");
                  return 2 === t.length
                    ? null
                    : (t.pop(),
                      "x" === t[t.length - 1].toLowerCase()
                        ? null
                        : this.formatLanguageCode(t.join("-")));
                }
                getLanguagePartFromCode(e) {
                  if (!(e = b(e)) || e.indexOf("-") < 0) return e;
                  const t = e.split("-");
                  return this.formatLanguageCode(t[0]);
                }
                formatLanguageCode(e) {
                  if ("string" == typeof e && e.indexOf("-") > -1) {
                    const t = [
                      "hans",
                      "hant",
                      "latn",
                      "cyrl",
                      "cans",
                      "mong",
                      "arab",
                    ];
                    let n = e.split("-");
                    return (
                      this.options.lowerCaseLng
                        ? (n = n.map((e) => e.toLowerCase()))
                        : 2 === n.length
                        ? ((n[0] = n[0].toLowerCase()),
                          (n[1] = n[1].toUpperCase()),
                          t.indexOf(n[1].toLowerCase()) > -1 &&
                            (n[1] = O(n[1].toLowerCase())))
                        : 3 === n.length &&
                          ((n[0] = n[0].toLowerCase()),
                          2 === n[1].length && (n[1] = n[1].toUpperCase()),
                          "sgn" !== n[0] &&
                            2 === n[2].length &&
                            (n[2] = n[2].toUpperCase()),
                          t.indexOf(n[1].toLowerCase()) > -1 &&
                            (n[1] = O(n[1].toLowerCase())),
                          t.indexOf(n[2].toLowerCase()) > -1 &&
                            (n[2] = O(n[2].toLowerCase()))),
                      n.join("-")
                    );
                  }
                  return this.options.cleanCode || this.options.lowerCaseLng
                    ? e.toLowerCase()
                    : e;
                }
                isSupportedCode(e) {
                  return (
                    ("languageOnly" === this.options.load ||
                      this.options.nonExplicitSupportedLngs) &&
                      (e = this.getLanguagePartFromCode(e)),
                    !this.supportedLngs ||
                      !this.supportedLngs.length ||
                      this.supportedLngs.indexOf(e) > -1
                  );
                }
                getBestMatchFromCodes(e) {
                  if (!e) return null;
                  let t;
                  return (
                    e.forEach((e) => {
                      if (t) return;
                      const n = this.formatLanguageCode(e);
                      (this.options.supportedLngs &&
                        !this.isSupportedCode(n)) ||
                        (t = n);
                    }),
                    !t &&
                      this.options.supportedLngs &&
                      e.forEach((e) => {
                        if (t) return;
                        const n = this.getLanguagePartFromCode(e);
                        if (this.isSupportedCode(n)) return (t = n);
                        t = this.options.supportedLngs.find((e) =>
                          e === n
                            ? e
                            : e.indexOf("-") < 0 && n.indexOf("-") < 0
                            ? void 0
                            : (e.indexOf("-") > 0 &&
                                n.indexOf("-") < 0 &&
                                e.substring(0, e.indexOf("-")) === n) ||
                              (0 === e.indexOf(n) && n.length > 1)
                            ? e
                            : void 0
                        );
                      }),
                    t ||
                      (t = this.getFallbackCodes(this.options.fallbackLng)[0]),
                    t
                  );
                }
                getFallbackCodes(e, t) {
                  if (!e) return [];
                  if (
                    ("function" == typeof e && (e = e(t)),
                    "string" == typeof e && (e = [e]),
                    "[object Array]" === Object.prototype.toString.apply(e))
                  )
                    return e;
                  if (!t) return e.default || [];
                  let n = e[t];
                  return (
                    n || (n = e[this.getScriptPartFromCode(t)]),
                    n || (n = e[this.formatLanguageCode(t)]),
                    n || (n = e[this.getLanguagePartFromCode(t)]),
                    n || (n = e.default),
                    n || []
                  );
                }
                toResolveHierarchy(e, t) {
                  const n = this.getFallbackCodes(
                      t || this.options.fallbackLng || [],
                      e
                    ),
                    o = [],
                    s = (e) => {
                      e &&
                        (this.isSupportedCode(e)
                          ? o.push(e)
                          : this.logger.warn(
                              `rejecting language code not found in supportedLngs: ${e}`
                            ));
                    };
                  return (
                    "string" == typeof e &&
                    (e.indexOf("-") > -1 || e.indexOf("_") > -1)
                      ? ("languageOnly" !== this.options.load &&
                          s(this.formatLanguageCode(e)),
                        "languageOnly" !== this.options.load &&
                          "currentOnly" !== this.options.load &&
                          s(this.getScriptPartFromCode(e)),
                        "currentOnly" !== this.options.load &&
                          s(this.getLanguagePartFromCode(e)))
                      : "string" == typeof e && s(this.formatLanguageCode(e)),
                    n.forEach((e) => {
                      o.indexOf(e) < 0 && s(this.formatLanguageCode(e));
                    }),
                    o
                  );
                }
              }
              let C = [
                  {
                    lngs: [
                      "ach",
                      "ak",
                      "am",
                      "arn",
                      "br",
                      "fil",
                      "gun",
                      "ln",
                      "mfe",
                      "mg",
                      "mi",
                      "oc",
                      "pt",
                      "pt-BR",
                      "tg",
                      "tl",
                      "ti",
                      "tr",
                      "uz",
                      "wa",
                    ],
                    nr: [1, 2],
                    fc: 1,
                  },
                  {
                    lngs: [
                      "af",
                      "an",
                      "ast",
                      "az",
                      "bg",
                      "bn",
                      "ca",
                      "da",
                      "de",
                      "dev",
                      "el",
                      "en",
                      "eo",
                      "es",
                      "et",
                      "eu",
                      "fi",
                      "fo",
                      "fur",
                      "fy",
                      "gl",
                      "gu",
                      "ha",
                      "hi",
                      "hu",
                      "hy",
                      "ia",
                      "it",
                      "kk",
                      "kn",
                      "ku",
                      "lb",
                      "mai",
                      "ml",
                      "mn",
                      "mr",
                      "nah",
                      "nap",
                      "nb",
                      "ne",
                      "nl",
                      "nn",
                      "no",
                      "nso",
                      "pa",
                      "pap",
                      "pms",
                      "ps",
                      "pt-PT",
                      "rm",
                      "sco",
                      "se",
                      "si",
                      "so",
                      "son",
                      "sq",
                      "sv",
                      "sw",
                      "ta",
                      "te",
                      "tk",
                      "ur",
                      "yo",
                    ],
                    nr: [1, 2],
                    fc: 2,
                  },
                  {
                    lngs: [
                      "ay",
                      "bo",
                      "cgg",
                      "fa",
                      "ht",
                      "id",
                      "ja",
                      "jbo",
                      "ka",
                      "km",
                      "ko",
                      "ky",
                      "lo",
                      "ms",
                      "sah",
                      "su",
                      "th",
                      "tt",
                      "ug",
                      "vi",
                      "wo",
                      "zh",
                    ],
                    nr: [1],
                    fc: 3,
                  },
                  {
                    lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
                    nr: [1, 2, 5],
                    fc: 4,
                  },
                  { lngs: ["ar"], nr: [0, 1, 2, 3, 11, 100], fc: 5 },
                  { lngs: ["cs", "sk"], nr: [1, 2, 5], fc: 6 },
                  { lngs: ["csb", "pl"], nr: [1, 2, 5], fc: 7 },
                  { lngs: ["cy"], nr: [1, 2, 3, 8], fc: 8 },
                  { lngs: ["fr"], nr: [1, 2], fc: 9 },
                  { lngs: ["ga"], nr: [1, 2, 3, 7, 11], fc: 10 },
                  { lngs: ["gd"], nr: [1, 2, 3, 20], fc: 11 },
                  { lngs: ["is"], nr: [1, 2], fc: 12 },
                  { lngs: ["jv"], nr: [0, 1], fc: 13 },
                  { lngs: ["kw"], nr: [1, 2, 3, 4], fc: 14 },
                  { lngs: ["lt"], nr: [1, 2, 10], fc: 15 },
                  { lngs: ["lv"], nr: [1, 2, 0], fc: 16 },
                  { lngs: ["mk"], nr: [1, 2], fc: 17 },
                  { lngs: ["mnk"], nr: [0, 1, 2], fc: 18 },
                  { lngs: ["mt"], nr: [1, 2, 11, 20], fc: 19 },
                  { lngs: ["or"], nr: [2, 1], fc: 2 },
                  { lngs: ["ro"], nr: [1, 2, 20], fc: 20 },
                  { lngs: ["sl"], nr: [5, 1, 2, 3], fc: 21 },
                  { lngs: ["he", "iw"], nr: [1, 2, 20, 21], fc: 22 },
                ],
                N = {
                  1: function (e) {
                    return Number(e > 1);
                  },
                  2: function (e) {
                    return Number(1 != e);
                  },
                  3: function (e) {
                    return 0;
                  },
                  4: function (e) {
                    return Number(
                      e % 10 == 1 && e % 100 != 11
                        ? 0
                        : e % 10 >= 2 &&
                          e % 10 <= 4 &&
                          (e % 100 < 10 || e % 100 >= 20)
                        ? 1
                        : 2
                    );
                  },
                  5: function (e) {
                    return Number(
                      0 == e
                        ? 0
                        : 1 == e
                        ? 1
                        : 2 == e
                        ? 2
                        : e % 100 >= 3 && e % 100 <= 10
                        ? 3
                        : e % 100 >= 11
                        ? 4
                        : 5
                    );
                  },
                  6: function (e) {
                    return Number(1 == e ? 0 : e >= 2 && e <= 4 ? 1 : 2);
                  },
                  7: function (e) {
                    return Number(
                      1 == e
                        ? 0
                        : e % 10 >= 2 &&
                          e % 10 <= 4 &&
                          (e % 100 < 10 || e % 100 >= 20)
                        ? 1
                        : 2
                    );
                  },
                  8: function (e) {
                    return Number(
                      1 == e ? 0 : 2 == e ? 1 : 8 != e && 11 != e ? 2 : 3
                    );
                  },
                  9: function (e) {
                    return Number(e >= 2);
                  },
                  10: function (e) {
                    return Number(
                      1 == e ? 0 : 2 == e ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4
                    );
                  },
                  11: function (e) {
                    return Number(
                      1 == e || 11 == e
                        ? 0
                        : 2 == e || 12 == e
                        ? 1
                        : e > 2 && e < 20
                        ? 2
                        : 3
                    );
                  },
                  12: function (e) {
                    return Number(e % 10 != 1 || e % 100 == 11);
                  },
                  13: function (e) {
                    return Number(0 !== e);
                  },
                  14: function (e) {
                    return Number(1 == e ? 0 : 2 == e ? 1 : 3 == e ? 2 : 3);
                  },
                  15: function (e) {
                    return Number(
                      e % 10 == 1 && e % 100 != 11
                        ? 0
                        : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20)
                        ? 1
                        : 2
                    );
                  },
                  16: function (e) {
                    return Number(
                      e % 10 == 1 && e % 100 != 11 ? 0 : 0 !== e ? 1 : 2
                    );
                  },
                  17: function (e) {
                    return Number(
                      1 == e || (e % 10 == 1 && e % 100 != 11) ? 0 : 1
                    );
                  },
                  18: function (e) {
                    return Number(0 == e ? 0 : 1 == e ? 1 : 2);
                  },
                  19: function (e) {
                    return Number(
                      1 == e
                        ? 0
                        : 0 == e || (e % 100 > 1 && e % 100 < 11)
                        ? 1
                        : e % 100 > 10 && e % 100 < 20
                        ? 2
                        : 3
                    );
                  },
                  20: function (e) {
                    return Number(
                      1 == e
                        ? 0
                        : 0 == e || (e % 100 > 0 && e % 100 < 20)
                        ? 1
                        : 2
                    );
                  },
                  21: function (e) {
                    return Number(
                      e % 100 == 1
                        ? 1
                        : e % 100 == 2
                        ? 2
                        : e % 100 == 3 || e % 100 == 4
                        ? 3
                        : 0
                    );
                  },
                  22: function (e) {
                    return Number(
                      1 == e
                        ? 0
                        : 2 == e
                        ? 1
                        : (e < 0 || e > 10) && e % 10 == 0
                        ? 2
                        : 3
                    );
                  },
                };
              const R = ["v1", "v2", "v3"],
                P = ["v4"],
                $ = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 };
              class j {
                constructor(e) {
                  let t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  (this.languageUtils = e),
                    (this.options = t),
                    (this.logger = n.create("pluralResolver")),
                    (this.options.compatibilityJSON &&
                      !P.includes(this.options.compatibilityJSON)) ||
                      ("undefined" != typeof Intl && Intl.PluralRules) ||
                      ((this.options.compatibilityJSON = "v3"),
                      this.logger.error(
                        "Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling."
                      )),
                    (this.rules = (function () {
                      const e = {};
                      return (
                        C.forEach((t) => {
                          t.lngs.forEach((n) => {
                            e[n] = { numbers: t.nr, plurals: N[t.fc] };
                          });
                        }),
                        e
                      );
                    })());
                }
                addRule(e, t) {
                  this.rules[e] = t;
                }
                getRule(e) {
                  let t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  if (this.shouldUseIntlApi())
                    try {
                      return new Intl.PluralRules(b("dev" === e ? "en" : e), {
                        type: t.ordinal ? "ordinal" : "cardinal",
                      });
                    } catch (e) {
                      return;
                    }
                  return (
                    this.rules[e] ||
                    this.rules[this.languageUtils.getLanguagePartFromCode(e)]
                  );
                }
                needsPlural(e) {
                  let t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  const n = this.getRule(e, t);
                  return this.shouldUseIntlApi()
                    ? n && n.resolvedOptions().pluralCategories.length > 1
                    : n && n.numbers.length > 1;
                }
                getPluralFormsOfKey(e, t) {
                  let n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {};
                  return this.getSuffixes(e, n).map((e) => `${t}${e}`);
                }
                getSuffixes(e) {
                  let t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  const n = this.getRule(e, t);
                  return n
                    ? this.shouldUseIntlApi()
                      ? n
                          .resolvedOptions()
                          .pluralCategories.sort((e, t) => $[e] - $[t])
                          .map(
                            (e) =>
                              `${this.options.prepend}${
                                t.ordinal
                                  ? `ordinal${this.options.prepend}`
                                  : ""
                              }${e}`
                          )
                      : n.numbers.map((n) => this.getSuffix(e, n, t))
                    : [];
                }
                getSuffix(e, t) {
                  let n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {};
                  const o = this.getRule(e, n);
                  return o
                    ? this.shouldUseIntlApi()
                      ? `${this.options.prepend}${
                          n.ordinal ? `ordinal${this.options.prepend}` : ""
                        }${o.select(t)}`
                      : this.getSuffixRetroCompatible(o, t)
                    : (this.logger.warn(`no plural rule found for: ${e}`), "");
                }
                getSuffixRetroCompatible(e, t) {
                  const n = e.noAbs ? e.plurals(t) : e.plurals(Math.abs(t));
                  let o = e.numbers[n];
                  this.options.simplifyPluralSuffix &&
                    2 === e.numbers.length &&
                    1 === e.numbers[0] &&
                    (2 === o ? (o = "plural") : 1 === o && (o = ""));
                  const s = () =>
                    this.options.prepend && o.toString()
                      ? this.options.prepend + o.toString()
                      : o.toString();
                  return "v1" === this.options.compatibilityJSON
                    ? 1 === o
                      ? ""
                      : "number" == typeof o
                      ? `_plural_${o.toString()}`
                      : s()
                    : "v2" === this.options.compatibilityJSON ||
                      (this.options.simplifyPluralSuffix &&
                        2 === e.numbers.length &&
                        1 === e.numbers[0])
                    ? s()
                    : this.options.prepend && n.toString()
                    ? this.options.prepend + n.toString()
                    : n.toString();
                }
                shouldUseIntlApi() {
                  return !R.includes(this.options.compatibilityJSON);
                }
              }
              function E(e, t, n) {
                let o =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : ".",
                  s =
                    !(arguments.length > 4 && void 0 !== arguments[4]) ||
                    arguments[4],
                  i = (function (e, t, n) {
                    const o = h(e, n);
                    return void 0 !== o ? o : h(t, n);
                  })(e, t, n);
                return (
                  !i &&
                    s &&
                    "string" == typeof n &&
                    ((i = y(e, n, o)), void 0 === i && (i = y(t, n, o))),
                  i
                );
              }
              class A {
                constructor() {
                  let e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  (this.logger = n.create("interpolator")),
                    (this.options = e),
                    (this.format =
                      (e.interpolation && e.interpolation.format) ||
                      ((e) => e)),
                    this.init(e);
                }
                init() {
                  let e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  e.interpolation || (e.interpolation = { escapeValue: !0 });
                  const t = e.interpolation;
                  (this.escape = void 0 !== t.escape ? t.escape : f),
                    (this.escapeValue =
                      void 0 === t.escapeValue || t.escapeValue),
                    (this.useRawValueToEscape =
                      void 0 !== t.useRawValueToEscape &&
                      t.useRawValueToEscape),
                    (this.prefix = t.prefix
                      ? g(t.prefix)
                      : t.prefixEscaped || "{{"),
                    (this.suffix = t.suffix
                      ? g(t.suffix)
                      : t.suffixEscaped || "}}"),
                    (this.formatSeparator = t.formatSeparator
                      ? t.formatSeparator
                      : t.formatSeparator || ","),
                    (this.unescapePrefix = t.unescapeSuffix
                      ? ""
                      : t.unescapePrefix || "-"),
                    (this.unescapeSuffix = this.unescapePrefix
                      ? ""
                      : t.unescapeSuffix || ""),
                    (this.nestingPrefix = t.nestingPrefix
                      ? g(t.nestingPrefix)
                      : t.nestingPrefixEscaped || g("$t(")),
                    (this.nestingSuffix = t.nestingSuffix
                      ? g(t.nestingSuffix)
                      : t.nestingSuffixEscaped || g(")")),
                    (this.nestingOptionsSeparator = t.nestingOptionsSeparator
                      ? t.nestingOptionsSeparator
                      : t.nestingOptionsSeparator || ","),
                    (this.maxReplaces = t.maxReplaces ? t.maxReplaces : 1e3),
                    (this.alwaysFormat =
                      void 0 !== t.alwaysFormat && t.alwaysFormat),
                    this.resetRegExp();
                }
                reset() {
                  this.options && this.init(this.options);
                }
                resetRegExp() {
                  const e = (e, t) =>
                    e && e.source === t
                      ? ((e.lastIndex = 0), e)
                      : new RegExp(t, "g");
                  (this.regexp = e(
                    this.regexp,
                    `${this.prefix}(.+?)${this.suffix}`
                  )),
                    (this.regexpUnescape = e(
                      this.regexpUnescape,
                      `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`
                    )),
                    (this.nestingRegexp = e(
                      this.nestingRegexp,
                      `${this.nestingPrefix}(.+?)${this.nestingSuffix}`
                    ));
                }
                interpolate(e, t, n, o) {
                  let s, i, r;
                  const l =
                    (this.options &&
                      this.options.interpolation &&
                      this.options.interpolation.defaultVariables) ||
                    {};
                  function u(e) {
                    return e.replace(/\$/g, "$$$$");
                  }
                  const c = (e) => {
                    if (e.indexOf(this.formatSeparator) < 0) {
                      const s = E(
                        t,
                        l,
                        e,
                        this.options.keySeparator,
                        this.options.ignoreJSONStructure
                      );
                      return this.alwaysFormat
                        ? this.format(s, void 0, n, {
                            ...o,
                            ...t,
                            interpolationkey: e,
                          })
                        : s;
                    }
                    const s = e.split(this.formatSeparator),
                      i = s.shift().trim(),
                      r = s.join(this.formatSeparator).trim();
                    return this.format(
                      E(
                        t,
                        l,
                        i,
                        this.options.keySeparator,
                        this.options.ignoreJSONStructure
                      ),
                      r,
                      n,
                      { ...o, ...t, interpolationkey: i }
                    );
                  };
                  this.resetRegExp();
                  const h =
                      (o && o.missingInterpolationHandler) ||
                      this.options.missingInterpolationHandler,
                    p =
                      o &&
                      o.interpolation &&
                      void 0 !== o.interpolation.skipOnVariables
                        ? o.interpolation.skipOnVariables
                        : this.options.interpolation.skipOnVariables;
                  return (
                    [
                      { regex: this.regexpUnescape, safeValue: (e) => u(e) },
                      {
                        regex: this.regexp,
                        safeValue: (e) =>
                          this.escapeValue ? u(this.escape(e)) : u(e),
                      },
                    ].forEach((t) => {
                      for (r = 0; (s = t.regex.exec(e)); ) {
                        const n = s[1].trim();
                        if (((i = c(n)), void 0 === i))
                          if ("function" == typeof h) {
                            const t = h(e, s, o);
                            i = "string" == typeof t ? t : "";
                          } else if (
                            o &&
                            Object.prototype.hasOwnProperty.call(o, n)
                          )
                            i = "";
                          else {
                            if (p) {
                              i = s[0];
                              continue;
                            }
                            this.logger.warn(
                              `missed to pass in variable ${n} for interpolating ${e}`
                            ),
                              (i = "");
                          }
                        else
                          "string" == typeof i ||
                            this.useRawValueToEscape ||
                            (i = a(i));
                        const l = t.safeValue(i);
                        if (
                          ((e = e.replace(s[0], l)),
                          p
                            ? ((t.regex.lastIndex += i.length),
                              (t.regex.lastIndex -= s[0].length))
                            : (t.regex.lastIndex = 0),
                          r++,
                          r >= this.maxReplaces)
                        )
                          break;
                      }
                    }),
                    e
                  );
                }
                nest(e, t) {
                  let n,
                    o,
                    s,
                    i =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : {};
                  function r(e, t) {
                    const n = this.nestingOptionsSeparator;
                    if (e.indexOf(n) < 0) return e;
                    const o = e.split(new RegExp(`${n}[ ]*{`));
                    let i = `{${o[1]}`;
                    (e = o[0]), (i = this.interpolate(i, s));
                    const r = i.match(/'/g),
                      a = i.match(/"/g);
                    ((r && r.length % 2 == 0 && !a) || a.length % 2 != 0) &&
                      (i = i.replace(/'/g, '"'));
                    try {
                      (s = JSON.parse(i)), t && (s = { ...t, ...s });
                    } catch (t) {
                      return (
                        this.logger.warn(
                          `failed parsing options string in nesting for key ${e}`,
                          t
                        ),
                        `${e}${n}${i}`
                      );
                    }
                    return (
                      s.defaultValue &&
                        s.defaultValue.indexOf(this.prefix) > -1 &&
                        delete s.defaultValue,
                      e
                    );
                  }
                  for (; (n = this.nestingRegexp.exec(e)); ) {
                    let l = [];
                    (s = { ...i }),
                      (s =
                        s.replace && "string" != typeof s.replace
                          ? s.replace
                          : s),
                      (s.applyPostProcessor = !1),
                      delete s.defaultValue;
                    let u = !1;
                    if (
                      -1 !== n[0].indexOf(this.formatSeparator) &&
                      !/{.*}/.test(n[1])
                    ) {
                      const e = n[1]
                        .split(this.formatSeparator)
                        .map((e) => e.trim());
                      (n[1] = e.shift()), (l = e), (u = !0);
                    }
                    if (
                      ((o = t(r.call(this, n[1].trim(), s), s)),
                      o && n[0] === e && "string" != typeof o)
                    )
                      return o;
                    "string" != typeof o && (o = a(o)),
                      o ||
                        (this.logger.warn(
                          `missed to resolve ${n[1]} for nesting ${e}`
                        ),
                        (o = "")),
                      u &&
                        (o = l.reduce(
                          (e, t) =>
                            this.format(e, t, i.lng, {
                              ...i,
                              interpolationkey: n[1].trim(),
                            }),
                          o.trim()
                        )),
                      (e = e.replace(n[0], o)),
                      (this.regexp.lastIndex = 0);
                  }
                  return e;
                }
              }
              function I(e) {
                const t = {};
                return function (n, o, s) {
                  const i = o + JSON.stringify(s);
                  let r = t[i];
                  return r || ((r = e(b(o), s)), (t[i] = r)), r(n);
                };
              }
              class F {
                constructor() {
                  let e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  (this.logger = n.create("formatter")),
                    (this.options = e),
                    (this.formats = {
                      number: I((e, t) => {
                        const n = new Intl.NumberFormat(e, { ...t });
                        return (e) => n.format(e);
                      }),
                      currency: I((e, t) => {
                        const n = new Intl.NumberFormat(e, {
                          ...t,
                          style: "currency",
                        });
                        return (e) => n.format(e);
                      }),
                      datetime: I((e, t) => {
                        const n = new Intl.DateTimeFormat(e, { ...t });
                        return (e) => n.format(e);
                      }),
                      relativetime: I((e, t) => {
                        const n = new Intl.RelativeTimeFormat(e, { ...t });
                        return (e) => n.format(e, t.range || "day");
                      }),
                      list: I((e, t) => {
                        const n = new Intl.ListFormat(e, { ...t });
                        return (e) => n.format(e);
                      }),
                    }),
                    this.init(e);
                }
                init(e) {
                  const t = (
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : { interpolation: {} }
                  ).interpolation;
                  this.formatSeparator = t.formatSeparator
                    ? t.formatSeparator
                    : t.formatSeparator || ",";
                }
                add(e, t) {
                  this.formats[e.toLowerCase().trim()] = t;
                }
                addCached(e, t) {
                  this.formats[e.toLowerCase().trim()] = I(t);
                }
                format(e, t, n) {
                  let o =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : {};
                  return t.split(this.formatSeparator).reduce((e, t) => {
                    const { formatName: s, formatOptions: i } = (function (e) {
                      let t = e.toLowerCase().trim();
                      const n = {};
                      if (e.indexOf("(") > -1) {
                        const o = e.split("(");
                        t = o[0].toLowerCase().trim();
                        const s = o[1].substring(0, o[1].length - 1);
                        "currency" === t && s.indexOf(":") < 0
                          ? n.currency || (n.currency = s.trim())
                          : "relativetime" === t && s.indexOf(":") < 0
                          ? n.range || (n.range = s.trim())
                          : s.split(";").forEach((e) => {
                              if (!e) return;
                              const [t, ...o] = e.split(":"),
                                s = o
                                  .join(":")
                                  .trim()
                                  .replace(/^'+|'+$/g, "");
                              n[t.trim()] || (n[t.trim()] = s),
                                "false" === s && (n[t.trim()] = !1),
                                "true" === s && (n[t.trim()] = !0),
                                isNaN(s) || (n[t.trim()] = parseInt(s, 10));
                            });
                      }
                      return { formatName: t, formatOptions: n };
                    })(t);
                    if (this.formats[s]) {
                      let t = e;
                      try {
                        const r =
                            (o &&
                              o.formatParams &&
                              o.formatParams[o.interpolationkey]) ||
                            {},
                          a = r.locale || r.lng || o.locale || o.lng || n;
                        t = this.formats[s](e, a, { ...i, ...o, ...r });
                      } catch (e) {
                        this.logger.warn(e);
                      }
                      return t;
                    }
                    return (
                      this.logger.warn(`there was no format function for ${s}`),
                      e
                    );
                  }, e);
                }
              }
              class D extends o {
                constructor(e, t, o) {
                  let s =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : {};
                  super(),
                    (this.backend = e),
                    (this.store = t),
                    (this.services = o),
                    (this.languageUtils = o.languageUtils),
                    (this.options = s),
                    (this.logger = n.create("backendConnector")),
                    (this.waitingReads = []),
                    (this.maxParallelReads = s.maxParallelReads || 10),
                    (this.readingCalls = 0),
                    (this.maxRetries = s.maxRetries >= 0 ? s.maxRetries : 5),
                    (this.retryTimeout =
                      s.retryTimeout >= 1 ? s.retryTimeout : 350),
                    (this.state = {}),
                    (this.queue = []),
                    this.backend &&
                      this.backend.init &&
                      this.backend.init(o, s.backend, s);
                }
                queueLoad(e, t, n, o) {
                  const s = {},
                    i = {},
                    r = {},
                    a = {};
                  return (
                    e.forEach((e) => {
                      let o = !0;
                      t.forEach((t) => {
                        const r = `${e}|${t}`;
                        !n.reload && this.store.hasResourceBundle(e, t)
                          ? (this.state[r] = 2)
                          : this.state[r] < 0 ||
                            (1 === this.state[r]
                              ? void 0 === i[r] && (i[r] = !0)
                              : ((this.state[r] = 1),
                                (o = !1),
                                void 0 === i[r] && (i[r] = !0),
                                void 0 === s[r] && (s[r] = !0),
                                void 0 === a[t] && (a[t] = !0)));
                      }),
                        o || (r[e] = !0);
                    }),
                    (Object.keys(s).length || Object.keys(i).length) &&
                      this.queue.push({
                        pending: i,
                        pendingCount: Object.keys(i).length,
                        loaded: {},
                        errors: [],
                        callback: o,
                      }),
                    {
                      toLoad: Object.keys(s),
                      pending: Object.keys(i),
                      toLoadLanguages: Object.keys(r),
                      toLoadNamespaces: Object.keys(a),
                    }
                  );
                }
                loaded(e, t, n) {
                  const o = e.split("|"),
                    s = o[0],
                    i = o[1];
                  t && this.emit("failedLoading", s, i, t),
                    n &&
                      this.store.addResourceBundle(s, i, n, void 0, void 0, {
                        skipCopy: !0,
                      }),
                    (this.state[e] = t ? -1 : 2);
                  const r = {};
                  this.queue.forEach((n) => {
                    !(function (e, t, n, o) {
                      const { obj: s, k: i } = u(e, t, Object);
                      (s[i] = s[i] || []), s[i].push(n);
                    })(n.loaded, [s], i),
                      (function (e, t) {
                        void 0 !== e.pending[t] &&
                          (delete e.pending[t], e.pendingCount--);
                      })(n, e),
                      t && n.errors.push(t),
                      0 !== n.pendingCount ||
                        n.done ||
                        (Object.keys(n.loaded).forEach((e) => {
                          r[e] || (r[e] = {});
                          const t = n.loaded[e];
                          t.length &&
                            t.forEach((t) => {
                              void 0 === r[e][t] && (r[e][t] = !0);
                            });
                        }),
                        (n.done = !0),
                        n.errors.length ? n.callback(n.errors) : n.callback());
                  }),
                    this.emit("loaded", r),
                    (this.queue = this.queue.filter((e) => !e.done));
                }
                read(e, t, n) {
                  let o =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : 0,
                    s =
                      arguments.length > 4 && void 0 !== arguments[4]
                        ? arguments[4]
                        : this.retryTimeout,
                    i = arguments.length > 5 ? arguments[5] : void 0;
                  if (!e.length) return i(null, {});
                  if (this.readingCalls >= this.maxParallelReads)
                    return void this.waitingReads.push({
                      lng: e,
                      ns: t,
                      fcName: n,
                      tried: o,
                      wait: s,
                      callback: i,
                    });
                  this.readingCalls++;
                  const r = (r, a) => {
                      if ((this.readingCalls--, this.waitingReads.length > 0)) {
                        const e = this.waitingReads.shift();
                        this.read(
                          e.lng,
                          e.ns,
                          e.fcName,
                          e.tried,
                          e.wait,
                          e.callback
                        );
                      }
                      r && a && o < this.maxRetries
                        ? setTimeout(() => {
                            this.read.call(this, e, t, n, o + 1, 2 * s, i);
                          }, s)
                        : i(r, a);
                    },
                    a = this.backend[n].bind(this.backend);
                  if (2 !== a.length) return a(e, t, r);
                  try {
                    const n = a(e, t);
                    n && "function" == typeof n.then
                      ? n.then((e) => r(null, e)).catch(r)
                      : r(null, n);
                  } catch (e) {
                    r(e);
                  }
                }
                prepareLoading(e, t) {
                  let n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : {},
                    o = arguments.length > 3 ? arguments[3] : void 0;
                  if (!this.backend)
                    return (
                      this.logger.warn(
                        "No backend was added via i18next.use. Will not load resources."
                      ),
                      o && o()
                    );
                  "string" == typeof e &&
                    (e = this.languageUtils.toResolveHierarchy(e)),
                    "string" == typeof t && (t = [t]);
                  const s = this.queueLoad(e, t, n, o);
                  if (!s.toLoad.length) return s.pending.length || o(), null;
                  s.toLoad.forEach((e) => {
                    this.loadOne(e);
                  });
                }
                load(e, t, n) {
                  this.prepareLoading(e, t, {}, n);
                }
                reload(e, t, n) {
                  this.prepareLoading(e, t, { reload: !0 }, n);
                }
                loadOne(e) {
                  let t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : "";
                  const n = e.split("|"),
                    o = n[0],
                    s = n[1];
                  this.read(o, s, "read", void 0, void 0, (n, i) => {
                    n &&
                      this.logger.warn(
                        `${t}loading namespace ${s} for language ${o} failed`,
                        n
                      ),
                      !n &&
                        i &&
                        this.logger.log(
                          `${t}loaded namespace ${s} for language ${o}`,
                          i
                        ),
                      this.loaded(e, n, i);
                  });
                }
                saveMissing(e, t, n, o, s) {
                  let i =
                      arguments.length > 5 && void 0 !== arguments[5]
                        ? arguments[5]
                        : {},
                    r =
                      arguments.length > 6 && void 0 !== arguments[6]
                        ? arguments[6]
                        : () => {};
                  if (
                    this.services.utils &&
                    this.services.utils.hasLoadedNamespace &&
                    !this.services.utils.hasLoadedNamespace(t)
                  )
                    this.logger.warn(
                      `did not save key "${n}" as the namespace "${t}" was not yet loaded`,
                      "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"
                    );
                  else if (null != n && "" !== n) {
                    if (this.backend && this.backend.create) {
                      const a = { ...i, isUpdate: s },
                        l = this.backend.create.bind(this.backend);
                      if (l.length < 6)
                        try {
                          let s;
                          (s =
                            5 === l.length ? l(e, t, n, o, a) : l(e, t, n, o)),
                            s && "function" == typeof s.then
                              ? s.then((e) => r(null, e)).catch(r)
                              : r(null, s);
                        } catch (e) {
                          r(e);
                        }
                      else l(e, t, n, o, r, a);
                    }
                    e && e[0] && this.store.addResource(e[0], t, n, o);
                  }
                }
              }
              function T() {
                return {
                  debug: !1,
                  initImmediate: !0,
                  ns: ["translation"],
                  defaultNS: ["translation"],
                  fallbackLng: ["dev"],
                  fallbackNS: !1,
                  supportedLngs: !1,
                  nonExplicitSupportedLngs: !1,
                  load: "all",
                  preload: !1,
                  simplifyPluralSuffix: !0,
                  keySeparator: ".",
                  nsSeparator: ":",
                  pluralSeparator: "_",
                  contextSeparator: "_",
                  partialBundledLanguages: !1,
                  saveMissing: !1,
                  updateMissing: !1,
                  saveMissingTo: "fallback",
                  saveMissingPlurals: !0,
                  missingKeyHandler: !1,
                  missingInterpolationHandler: !1,
                  postProcess: !1,
                  postProcessPassResolved: !1,
                  returnNull: !1,
                  returnEmptyString: !0,
                  returnObjects: !1,
                  joinArrays: !1,
                  returnedObjectHandler: !1,
                  parseMissingKeyHandler: !1,
                  appendNamespaceToMissingKey: !1,
                  appendNamespaceToCIMode: !1,
                  overloadTranslationOptionHandler: function (e) {
                    let t = {};
                    if (
                      ("object" == typeof e[1] && (t = e[1]),
                      "string" == typeof e[1] && (t.defaultValue = e[1]),
                      "string" == typeof e[2] && (t.tDescription = e[2]),
                      "object" == typeof e[2] || "object" == typeof e[3])
                    ) {
                      const n = e[3] || e[2];
                      Object.keys(n).forEach((e) => {
                        t[e] = n[e];
                      });
                    }
                    return t;
                  },
                  interpolation: {
                    escapeValue: !0,
                    format: (e) => e,
                    prefix: "{{",
                    suffix: "}}",
                    formatSeparator: ",",
                    unescapePrefix: "-",
                    nestingPrefix: "$t(",
                    nestingSuffix: ")",
                    nestingOptionsSeparator: ",",
                    maxReplaces: 1e3,
                    skipOnVariables: !0,
                  },
                };
              }
              function U(e) {
                return (
                  "string" == typeof e.ns && (e.ns = [e.ns]),
                  "string" == typeof e.fallbackLng &&
                    (e.fallbackLng = [e.fallbackLng]),
                  "string" == typeof e.fallbackNS &&
                    (e.fallbackNS = [e.fallbackNS]),
                  e.supportedLngs &&
                    e.supportedLngs.indexOf("cimode") < 0 &&
                    (e.supportedLngs = e.supportedLngs.concat(["cimode"])),
                  e
                );
              }
              function V() {}
              class M extends o {
                constructor() {
                  let e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    t = arguments.length > 1 ? arguments[1] : void 0;
                  var o;
                  if (
                    (super(),
                    (this.options = U(e)),
                    (this.services = {}),
                    (this.logger = n),
                    (this.modules = { external: [] }),
                    (o = this),
                    Object.getOwnPropertyNames(
                      Object.getPrototypeOf(o)
                    ).forEach((e) => {
                      "function" == typeof o[e] && (o[e] = o[e].bind(o));
                    }),
                    t && !this.isInitialized && !e.isClone)
                  ) {
                    if (!this.options.initImmediate)
                      return this.init(e, t), this;
                    setTimeout(() => {
                      this.init(e, t);
                    }, 0);
                  }
                }
                init() {
                  var e = this;
                  let t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    o = arguments.length > 1 ? arguments[1] : void 0;
                  (this.isInitializing = !0),
                    "function" == typeof t && ((o = t), (t = {})),
                    !t.defaultNS &&
                      !1 !== t.defaultNS &&
                      t.ns &&
                      ("string" == typeof t.ns
                        ? (t.defaultNS = t.ns)
                        : t.ns.indexOf("translation") < 0 &&
                          (t.defaultNS = t.ns[0]));
                  const i = T();
                  function r(e) {
                    return e ? ("function" == typeof e ? new e() : e) : null;
                  }
                  if (
                    ((this.options = { ...i, ...this.options, ...U(t) }),
                    "v1" !== this.options.compatibilityAPI &&
                      (this.options.interpolation = {
                        ...i.interpolation,
                        ...this.options.interpolation,
                      }),
                    void 0 !== t.keySeparator &&
                      (this.options.userDefinedKeySeparator = t.keySeparator),
                    void 0 !== t.nsSeparator &&
                      (this.options.userDefinedNsSeparator = t.nsSeparator),
                    !this.options.isClone)
                  ) {
                    let t;
                    this.modules.logger
                      ? n.init(r(this.modules.logger), this.options)
                      : n.init(null, this.options),
                      this.modules.formatter
                        ? (t = this.modules.formatter)
                        : "undefined" != typeof Intl && (t = F);
                    const o = new L(this.options);
                    this.store = new S(this.options.resources, this.options);
                    const s = this.services;
                    (s.logger = n),
                      (s.resourceStore = this.store),
                      (s.languageUtils = o),
                      (s.pluralResolver = new j(o, {
                        prepend: this.options.pluralSeparator,
                        compatibilityJSON: this.options.compatibilityJSON,
                        simplifyPluralSuffix: this.options.simplifyPluralSuffix,
                      })),
                      !t ||
                        (this.options.interpolation.format &&
                          this.options.interpolation.format !==
                            i.interpolation.format) ||
                        ((s.formatter = r(t)),
                        s.formatter.init(s, this.options),
                        (this.options.interpolation.format =
                          s.formatter.format.bind(s.formatter))),
                      (s.interpolator = new A(this.options)),
                      (s.utils = {
                        hasLoadedNamespace: this.hasLoadedNamespace.bind(this),
                      }),
                      (s.backendConnector = new D(
                        r(this.modules.backend),
                        s.resourceStore,
                        s,
                        this.options
                      )),
                      s.backendConnector.on("*", function (t) {
                        for (
                          var n = arguments.length,
                            o = new Array(n > 1 ? n - 1 : 0),
                            s = 1;
                          s < n;
                          s++
                        )
                          o[s - 1] = arguments[s];
                        e.emit(t, ...o);
                      }),
                      this.modules.languageDetector &&
                        ((s.languageDetector = r(
                          this.modules.languageDetector
                        )),
                        s.languageDetector.init &&
                          s.languageDetector.init(
                            s,
                            this.options.detection,
                            this.options
                          )),
                      this.modules.i18nFormat &&
                        ((s.i18nFormat = r(this.modules.i18nFormat)),
                        s.i18nFormat.init && s.i18nFormat.init(this)),
                      (this.translator = new k(this.services, this.options)),
                      this.translator.on("*", function (t) {
                        for (
                          var n = arguments.length,
                            o = new Array(n > 1 ? n - 1 : 0),
                            s = 1;
                          s < n;
                          s++
                        )
                          o[s - 1] = arguments[s];
                        e.emit(t, ...o);
                      }),
                      this.modules.external.forEach((e) => {
                        e.init && e.init(this);
                      });
                  }
                  if (
                    ((this.format = this.options.interpolation.format),
                    o || (o = V),
                    this.options.fallbackLng &&
                      !this.services.languageDetector &&
                      !this.options.lng)
                  ) {
                    const e = this.services.languageUtils.getFallbackCodes(
                      this.options.fallbackLng
                    );
                    e.length > 0 && "dev" !== e[0] && (this.options.lng = e[0]);
                  }
                  this.services.languageDetector ||
                    this.options.lng ||
                    this.logger.warn(
                      "init: no languageDetector is used and no lng is defined"
                    ),
                    [
                      "getResource",
                      "hasResourceBundle",
                      "getResourceBundle",
                      "getDataByLanguage",
                    ].forEach((t) => {
                      this[t] = function () {
                        return e.store[t](...arguments);
                      };
                    }),
                    [
                      "addResource",
                      "addResources",
                      "addResourceBundle",
                      "removeResourceBundle",
                    ].forEach((t) => {
                      this[t] = function () {
                        return e.store[t](...arguments), e;
                      };
                    });
                  const a = s(),
                    l = () => {
                      const e = (e, t) => {
                        (this.isInitializing = !1),
                          this.isInitialized &&
                            !this.initializedStoreOnce &&
                            this.logger.warn(
                              "init: i18next is already initialized. You should call init just once!"
                            ),
                          (this.isInitialized = !0),
                          this.options.isClone ||
                            this.logger.log("initialized", this.options),
                          this.emit("initialized", this.options),
                          a.resolve(t),
                          o(e, t);
                      };
                      if (
                        this.languages &&
                        "v1" !== this.options.compatibilityAPI &&
                        !this.isInitialized
                      )
                        return e(null, this.t.bind(this));
                      this.changeLanguage(this.options.lng, e);
                    };
                  return (
                    this.options.resources || !this.options.initImmediate
                      ? l()
                      : setTimeout(l, 0),
                    a
                  );
                }
                loadResources(e) {
                  let t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : V;
                  const n = "string" == typeof e ? e : this.language;
                  if (
                    ("function" == typeof e && (t = e),
                    !this.options.resources ||
                      this.options.partialBundledLanguages)
                  ) {
                    if (
                      n &&
                      "cimode" === n.toLowerCase() &&
                      (!this.options.preload ||
                        0 === this.options.preload.length)
                    )
                      return t();
                    const e = [],
                      o = (t) => {
                        t &&
                          "cimode" !== t &&
                          this.services.languageUtils
                            .toResolveHierarchy(t)
                            .forEach((t) => {
                              "cimode" !== t && e.indexOf(t) < 0 && e.push(t);
                            });
                      };
                    n
                      ? o(n)
                      : this.services.languageUtils
                          .getFallbackCodes(this.options.fallbackLng)
                          .forEach((e) => o(e)),
                      this.options.preload &&
                        this.options.preload.forEach((e) => o(e)),
                      this.services.backendConnector.load(
                        e,
                        this.options.ns,
                        (e) => {
                          e ||
                            this.resolvedLanguage ||
                            !this.language ||
                            this.setResolvedLanguage(this.language),
                            t(e);
                        }
                      );
                  } else t(null);
                }
                reloadResources(e, t, n) {
                  const o = s();
                  return (
                    e || (e = this.languages),
                    t || (t = this.options.ns),
                    n || (n = V),
                    this.services.backendConnector.reload(e, t, (e) => {
                      o.resolve(), n(e);
                    }),
                    o
                  );
                }
                use(e) {
                  if (!e)
                    throw new Error(
                      "You are passing an undefined module! Please check the object you are passing to i18next.use()"
                    );
                  if (!e.type)
                    throw new Error(
                      "You are passing a wrong module! Please check the object you are passing to i18next.use()"
                    );
                  return (
                    "backend" === e.type && (this.modules.backend = e),
                    ("logger" === e.type || (e.log && e.warn && e.error)) &&
                      (this.modules.logger = e),
                    "languageDetector" === e.type &&
                      (this.modules.languageDetector = e),
                    "i18nFormat" === e.type && (this.modules.i18nFormat = e),
                    "postProcessor" === e.type && x.addPostProcessor(e),
                    "formatter" === e.type && (this.modules.formatter = e),
                    "3rdParty" === e.type && this.modules.external.push(e),
                    this
                  );
                }
                setResolvedLanguage(e) {
                  if (
                    e &&
                    this.languages &&
                    !(["cimode", "dev"].indexOf(e) > -1)
                  )
                    for (let e = 0; e < this.languages.length; e++) {
                      const t = this.languages[e];
                      if (
                        !(["cimode", "dev"].indexOf(t) > -1) &&
                        this.store.hasLanguageSomeTranslations(t)
                      ) {
                        this.resolvedLanguage = t;
                        break;
                      }
                    }
                }
                changeLanguage(e, t) {
                  var n = this;
                  this.isLanguageChangingTo = e;
                  const o = s();
                  this.emit("languageChanging", e);
                  const i = (e) => {
                      (this.language = e),
                        (this.languages =
                          this.services.languageUtils.toResolveHierarchy(e)),
                        (this.resolvedLanguage = void 0),
                        this.setResolvedLanguage(e);
                    },
                    r = (e, s) => {
                      s
                        ? (i(s),
                          this.translator.changeLanguage(s),
                          (this.isLanguageChangingTo = void 0),
                          this.emit("languageChanged", s),
                          this.logger.log("languageChanged", s))
                        : (this.isLanguageChangingTo = void 0),
                        o.resolve(function () {
                          return n.t(...arguments);
                        }),
                        t &&
                          t(e, function () {
                            return n.t(...arguments);
                          });
                    },
                    a = (t) => {
                      e || t || !this.services.languageDetector || (t = []);
                      const n =
                        "string" == typeof t
                          ? t
                          : this.services.languageUtils.getBestMatchFromCodes(
                              t
                            );
                      n &&
                        (this.language || i(n),
                        this.translator.language ||
                          this.translator.changeLanguage(n),
                        this.services.languageDetector &&
                          this.services.languageDetector.cacheUserLanguage &&
                          this.services.languageDetector.cacheUserLanguage(n)),
                        this.loadResources(n, (e) => {
                          r(e, n);
                        });
                    };
                  return (
                    e ||
                    !this.services.languageDetector ||
                    this.services.languageDetector.async
                      ? !e &&
                        this.services.languageDetector &&
                        this.services.languageDetector.async
                        ? 0 === this.services.languageDetector.detect.length
                          ? this.services.languageDetector.detect().then(a)
                          : this.services.languageDetector.detect(a)
                        : a(e)
                      : a(this.services.languageDetector.detect()),
                    o
                  );
                }
                getFixedT(e, t, n) {
                  var o = this;
                  const s = function (e, t) {
                    let i;
                    if ("object" != typeof t) {
                      for (
                        var r = arguments.length,
                          a = new Array(r > 2 ? r - 2 : 0),
                          l = 2;
                        l < r;
                        l++
                      )
                        a[l - 2] = arguments[l];
                      i = o.options.overloadTranslationOptionHandler(
                        [e, t].concat(a)
                      );
                    } else i = { ...t };
                    (i.lng = i.lng || s.lng),
                      (i.lngs = i.lngs || s.lngs),
                      (i.ns = i.ns || s.ns),
                      (i.keyPrefix = i.keyPrefix || n || s.keyPrefix);
                    const u = o.options.keySeparator || ".";
                    let c;
                    return (
                      (c =
                        i.keyPrefix && Array.isArray(e)
                          ? e.map((e) => `${i.keyPrefix}${u}${e}`)
                          : i.keyPrefix
                          ? `${i.keyPrefix}${u}${e}`
                          : e),
                      o.t(c, i)
                    );
                  };
                  return (
                    "string" == typeof e ? (s.lng = e) : (s.lngs = e),
                    (s.ns = t),
                    (s.keyPrefix = n),
                    s
                  );
                }
                t() {
                  return (
                    this.translator && this.translator.translate(...arguments)
                  );
                }
                exists() {
                  return (
                    this.translator && this.translator.exists(...arguments)
                  );
                }
                setDefaultNamespace(e) {
                  this.options.defaultNS = e;
                }
                hasLoadedNamespace(e) {
                  let t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  if (!this.isInitialized)
                    return (
                      this.logger.warn(
                        "hasLoadedNamespace: i18next was not initialized",
                        this.languages
                      ),
                      !1
                    );
                  if (!this.languages || !this.languages.length)
                    return (
                      this.logger.warn(
                        "hasLoadedNamespace: i18n.languages were undefined or empty",
                        this.languages
                      ),
                      !1
                    );
                  const n = t.lng || this.resolvedLanguage || this.languages[0],
                    o = !!this.options && this.options.fallbackLng,
                    s = this.languages[this.languages.length - 1];
                  if ("cimode" === n.toLowerCase()) return !0;
                  const i = (e, t) => {
                    const n = this.services.backendConnector.state[`${e}|${t}`];
                    return -1 === n || 2 === n;
                  };
                  if (t.precheck) {
                    const e = t.precheck(this, i);
                    if (void 0 !== e) return e;
                  }
                  return !(
                    !this.hasResourceBundle(n, e) &&
                    this.services.backendConnector.backend &&
                    (!this.options.resources ||
                      this.options.partialBundledLanguages) &&
                    (!i(n, e) || (o && !i(s, e)))
                  );
                }
                loadNamespaces(e, t) {
                  const n = s();
                  return this.options.ns
                    ? ("string" == typeof e && (e = [e]),
                      e.forEach((e) => {
                        this.options.ns.indexOf(e) < 0 &&
                          this.options.ns.push(e);
                      }),
                      this.loadResources((e) => {
                        n.resolve(), t && t(e);
                      }),
                      n)
                    : (t && t(), Promise.resolve());
                }
                loadLanguages(e, t) {
                  const n = s();
                  "string" == typeof e && (e = [e]);
                  const o = this.options.preload || [],
                    i = e.filter(
                      (e) =>
                        o.indexOf(e) < 0 &&
                        this.services.languageUtils.isSupportedCode(e)
                    );
                  return i.length
                    ? ((this.options.preload = o.concat(i)),
                      this.loadResources((e) => {
                        n.resolve(), t && t(e);
                      }),
                      n)
                    : (t && t(), Promise.resolve());
                }
                dir(e) {
                  if (
                    (e ||
                      (e =
                        this.resolvedLanguage ||
                        (this.languages && this.languages.length > 0
                          ? this.languages[0]
                          : this.language)),
                    !e)
                  )
                    return "rtl";
                  const t =
                    (this.services && this.services.languageUtils) ||
                    new L(T());
                  return [
                    "ar",
                    "shu",
                    "sqr",
                    "ssh",
                    "xaa",
                    "yhd",
                    "yud",
                    "aao",
                    "abh",
                    "abv",
                    "acm",
                    "acq",
                    "acw",
                    "acx",
                    "acy",
                    "adf",
                    "ads",
                    "aeb",
                    "aec",
                    "afb",
                    "ajp",
                    "apc",
                    "apd",
                    "arb",
                    "arq",
                    "ars",
                    "ary",
                    "arz",
                    "auz",
                    "avl",
                    "ayh",
                    "ayl",
                    "ayn",
                    "ayp",
                    "bbz",
                    "pga",
                    "he",
                    "iw",
                    "ps",
                    "pbt",
                    "pbu",
                    "pst",
                    "prp",
                    "prd",
                    "ug",
                    "ur",
                    "ydd",
                    "yds",
                    "yih",
                    "ji",
                    "yi",
                    "hbo",
                    "men",
                    "xmn",
                    "fa",
                    "jpr",
                    "peo",
                    "pes",
                    "prs",
                    "dv",
                    "sam",
                    "ckb",
                  ].indexOf(t.getLanguagePartFromCode(e)) > -1 ||
                    e.toLowerCase().indexOf("-arab") > 1
                    ? "rtl"
                    : "ltr";
                }
                static createInstance() {
                  return new M(
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                    arguments.length > 1 ? arguments[1] : void 0
                  );
                }
                cloneInstance() {
                  let e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : V;
                  const n = e.forkResourceStore;
                  n && delete e.forkResourceStore;
                  const o = { ...this.options, ...e, isClone: !0 },
                    s = new M(o);
                  return (
                    (void 0 === e.debug && void 0 === e.prefix) ||
                      (s.logger = s.logger.clone(e)),
                    ["store", "services", "language"].forEach((e) => {
                      s[e] = this[e];
                    }),
                    (s.services = { ...this.services }),
                    (s.services.utils = {
                      hasLoadedNamespace: s.hasLoadedNamespace.bind(s),
                    }),
                    n &&
                      ((s.store = new S(this.store.data, o)),
                      (s.services.resourceStore = s.store)),
                    (s.translator = new k(s.services, o)),
                    s.translator.on("*", function (e) {
                      for (
                        var t = arguments.length,
                          n = new Array(t > 1 ? t - 1 : 0),
                          o = 1;
                        o < t;
                        o++
                      )
                        n[o - 1] = arguments[o];
                      s.emit(e, ...n);
                    }),
                    s.init(o, t),
                    (s.translator.options = o),
                    (s.translator.backendConnector.services.utils = {
                      hasLoadedNamespace: s.hasLoadedNamespace.bind(s),
                    }),
                    s
                  );
                }
                toJSON() {
                  return {
                    options: this.options,
                    store: this.store,
                    language: this.language,
                    languages: this.languages,
                    resolvedLanguage: this.resolvedLanguage,
                  };
                }
              }
              const K = M.createInstance();
              (K.createInstance = M.createInstance),
                K.createInstance,
                K.dir,
                K.init,
                K.loadResources,
                K.reloadResources,
                K.use,
                K.changeLanguage,
                K.getFixedT,
                K.t,
                K.exists,
                K.setDefaultNamespace,
                K.hasLoadedNamespace,
                K.loadNamespaces,
                K.loadLanguages;
              var z = i(372);
              function H(e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              }
              function J(e) {
                return (
                  (J =
                    "function" == typeof Symbol &&
                    "symbol" == typeof Symbol.iterator
                      ? function (e) {
                          return typeof e;
                        }
                      : function (e) {
                          return e &&
                            "function" == typeof Symbol &&
                            e.constructor === Symbol &&
                            e !== Symbol.prototype
                            ? "symbol"
                            : typeof e;
                        }),
                  J(e)
                );
              }
              function B(e) {
                var t = (function (e, t) {
                  if ("object" != J(e) || !e) return e;
                  var n = e[Symbol.toPrimitive];
                  if (void 0 !== n) {
                    var o = n.call(e, "string");
                    if ("object" != J(o)) return o;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value."
                    );
                  }
                  return String(e);
                })(e);
                return "symbol" == J(t) ? t : t + "";
              }
              function q(e, t) {
                for (var n = 0; n < t.length; n++) {
                  var o = t[n];
                  (o.enumerable = o.enumerable || !1),
                    (o.configurable = !0),
                    "value" in o && (o.writable = !0),
                    Object.defineProperty(e, B(o.key), o);
                }
              }
              function _(e, t, n) {
                return (
                  t && q(e.prototype, t),
                  n && q(e, n),
                  Object.defineProperty(e, "prototype", { writable: !1 }),
                  e
                );
              }
              var W = [],
                Q = W.forEach,
                G = W.slice,
                Y = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,
                Z = {
                  name: "cookie",
                  lookup: function (e) {
                    var t;
                    if (e.lookupCookie && "undefined" != typeof document) {
                      var n = (function (e) {
                        for (
                          var t = "".concat(e, "="),
                            n = document.cookie.split(";"),
                            o = 0;
                          o < n.length;
                          o++
                        ) {
                          for (var s = n[o]; " " === s.charAt(0); )
                            s = s.substring(1, s.length);
                          if (0 === s.indexOf(t))
                            return s.substring(t.length, s.length);
                        }
                        return null;
                      })(e.lookupCookie);
                      n && (t = n);
                    }
                    return t;
                  },
                  cacheUserLanguage: function (e, t) {
                    t.lookupCookie &&
                      "undefined" != typeof document &&
                      (function (e, t, n, o) {
                        var s =
                          arguments.length > 4 && void 0 !== arguments[4]
                            ? arguments[4]
                            : { path: "/", sameSite: "strict" };
                        n &&
                          ((s.expires = new Date()),
                          s.expires.setTime(
                            s.expires.getTime() + 60 * n * 1e3
                          )),
                          o && (s.domain = o),
                          (document.cookie = (function (e, t, n) {
                            var o = n || {};
                            o.path = o.path || "/";
                            var s = encodeURIComponent(t),
                              i = "".concat(e, "=").concat(s);
                            if (o.maxAge > 0) {
                              var r = o.maxAge - 0;
                              if (Number.isNaN(r))
                                throw new Error("maxAge should be a Number");
                              i += "; Max-Age=".concat(Math.floor(r));
                            }
                            if (o.domain) {
                              if (!Y.test(o.domain))
                                throw new TypeError("option domain is invalid");
                              i += "; Domain=".concat(o.domain);
                            }
                            if (o.path) {
                              if (!Y.test(o.path))
                                throw new TypeError("option path is invalid");
                              i += "; Path=".concat(o.path);
                            }
                            if (o.expires) {
                              if ("function" != typeof o.expires.toUTCString)
                                throw new TypeError(
                                  "option expires is invalid"
                                );
                              i += "; Expires=".concat(o.expires.toUTCString());
                            }
                            if (
                              (o.httpOnly && (i += "; HttpOnly"),
                              o.secure && (i += "; Secure"),
                              o.sameSite)
                            )
                              switch (
                                "string" == typeof o.sameSite
                                  ? o.sameSite.toLowerCase()
                                  : o.sameSite
                              ) {
                                case !0:
                                  i += "; SameSite=Strict";
                                  break;
                                case "lax":
                                  i += "; SameSite=Lax";
                                  break;
                                case "strict":
                                  i += "; SameSite=Strict";
                                  break;
                                case "none":
                                  i += "; SameSite=None";
                                  break;
                                default:
                                  throw new TypeError(
                                    "option sameSite is invalid"
                                  );
                              }
                            return i;
                          })(e, encodeURIComponent(t), s));
                      })(
                        t.lookupCookie,
                        e,
                        t.cookieMinutes,
                        t.cookieDomain,
                        t.cookieOptions
                      );
                  },
                },
                X = {
                  name: "querystring",
                  lookup: function (e) {
                    var t;
                    if ("undefined" != typeof window) {
                      var n = window.location.search;
                      !window.location.search &&
                        window.location.hash &&
                        window.location.hash.indexOf("?") > -1 &&
                        (n = window.location.hash.substring(
                          window.location.hash.indexOf("?")
                        ));
                      for (
                        var o = n.substring(1).split("&"), s = 0;
                        s < o.length;
                        s++
                      ) {
                        var i = o[s].indexOf("=");
                        i > 0 &&
                          o[s].substring(0, i) === e.lookupQuerystring &&
                          (t = o[s].substring(i + 1));
                      }
                    }
                    return t;
                  },
                },
                ee = null,
                te = function () {
                  if (null !== ee) return ee;
                  try {
                    ee = "undefined" !== window && null !== window.localStorage;
                    var e = "i18next.translate.boo";
                    window.localStorage.setItem(e, "foo"),
                      window.localStorage.removeItem(e);
                  } catch (e) {
                    ee = !1;
                  }
                  return ee;
                },
                ne = {
                  name: "localStorage",
                  lookup: function (e) {
                    var t;
                    if (e.lookupLocalStorage && te()) {
                      var n = window.localStorage.getItem(e.lookupLocalStorage);
                      n && (t = n);
                    }
                    return t;
                  },
                  cacheUserLanguage: function (e, t) {
                    t.lookupLocalStorage &&
                      te() &&
                      window.localStorage.setItem(t.lookupLocalStorage, e);
                  },
                },
                oe = null,
                se = function () {
                  if (null !== oe) return oe;
                  try {
                    oe =
                      "undefined" !== window && null !== window.sessionStorage;
                    var e = "i18next.translate.boo";
                    window.sessionStorage.setItem(e, "foo"),
                      window.sessionStorage.removeItem(e);
                  } catch (e) {
                    oe = !1;
                  }
                  return oe;
                },
                ie = {
                  name: "sessionStorage",
                  lookup: function (e) {
                    var t;
                    if (e.lookupSessionStorage && se()) {
                      var n = window.sessionStorage.getItem(
                        e.lookupSessionStorage
                      );
                      n && (t = n);
                    }
                    return t;
                  },
                  cacheUserLanguage: function (e, t) {
                    t.lookupSessionStorage &&
                      se() &&
                      window.sessionStorage.setItem(t.lookupSessionStorage, e);
                  },
                },
                re = {
                  name: "navigator",
                  lookup: function (e) {
                    var t = [];
                    if ("undefined" != typeof navigator) {
                      if (navigator.languages)
                        for (var n = 0; n < navigator.languages.length; n++)
                          t.push(navigator.languages[n]);
                      navigator.userLanguage && t.push(navigator.userLanguage),
                        navigator.language && t.push(navigator.language);
                    }
                    return t.length > 0 ? t : void 0;
                  },
                },
                ae = {
                  name: "htmlTag",
                  lookup: function (e) {
                    var t,
                      n =
                        e.htmlTag ||
                        ("undefined" != typeof document
                          ? document.documentElement
                          : null);
                    return (
                      n &&
                        "function" == typeof n.getAttribute &&
                        (t = n.getAttribute("lang")),
                      t
                    );
                  },
                },
                le = {
                  name: "path",
                  lookup: function (e) {
                    var t;
                    if ("undefined" != typeof window) {
                      var n = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
                      if (n instanceof Array)
                        if ("number" == typeof e.lookupFromPathIndex) {
                          if ("string" != typeof n[e.lookupFromPathIndex])
                            return;
                          t = n[e.lookupFromPathIndex].replace("/", "");
                        } else t = n[0].replace("/", "");
                    }
                    return t;
                  },
                },
                ue = {
                  name: "subdomain",
                  lookup: function (e) {
                    var t =
                        "number" == typeof e.lookupFromSubdomainIndex
                          ? e.lookupFromSubdomainIndex + 1
                          : 1,
                      n =
                        "undefined" != typeof window &&
                        window.location &&
                        window.location.hostname &&
                        window.location.hostname.match(
                          /^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i
                        );
                    if (n) return n[t];
                  },
                },
                ce = (function () {
                  function e(t) {
                    var n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                    H(this, e),
                      (this.type = "languageDetector"),
                      (this.detectors = {}),
                      this.init(t, n);
                  }
                  return (
                    _(e, [
                      {
                        key: "init",
                        value: function (e) {
                          var t =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : {},
                            n =
                              arguments.length > 2 && void 0 !== arguments[2]
                                ? arguments[2]
                                : {};
                          (this.services = e || { languageUtils: {} }),
                            (this.options = (function (e) {
                              return (
                                Q.call(G.call(arguments, 1), function (t) {
                                  if (t)
                                    for (var n in t)
                                      void 0 === e[n] && (e[n] = t[n]);
                                }),
                                e
                              );
                            })(t, this.options || {}, {
                              order: [
                                "querystring",
                                "cookie",
                                "localStorage",
                                "sessionStorage",
                                "navigator",
                                "htmlTag",
                              ],
                              lookupQuerystring: "lng",
                              lookupCookie: "i18next",
                              lookupLocalStorage: "i18nextLng",
                              lookupSessionStorage: "i18nextLng",
                              caches: ["localStorage"],
                              excludeCacheFor: ["cimode"],
                              convertDetectedLanguage: function (e) {
                                return e;
                              },
                            })),
                            "string" ==
                              typeof this.options.convertDetectedLanguage &&
                              this.options.convertDetectedLanguage.indexOf(
                                "15897"
                              ) > -1 &&
                              (this.options.convertDetectedLanguage = function (
                                e
                              ) {
                                return e.replace("-", "_");
                              }),
                            this.options.lookupFromUrlIndex &&
                              (this.options.lookupFromPathIndex =
                                this.options.lookupFromUrlIndex),
                            (this.i18nOptions = n),
                            this.addDetector(Z),
                            this.addDetector(X),
                            this.addDetector(ne),
                            this.addDetector(ie),
                            this.addDetector(re),
                            this.addDetector(ae),
                            this.addDetector(le),
                            this.addDetector(ue);
                        },
                      },
                      {
                        key: "addDetector",
                        value: function (e) {
                          return (this.detectors[e.name] = e), this;
                        },
                      },
                      {
                        key: "detect",
                        value: function (e) {
                          var t = this;
                          e || (e = this.options.order);
                          var n = [];
                          return (
                            e.forEach(function (e) {
                              if (t.detectors[e]) {
                                var o = t.detectors[e].lookup(t.options);
                                o && "string" == typeof o && (o = [o]),
                                  o && (n = n.concat(o));
                              }
                            }),
                            (n = n.map(function (e) {
                              return t.options.convertDetectedLanguage(e);
                            })),
                            this.services.languageUtils.getBestMatchFromCodes
                              ? n
                              : n.length > 0
                              ? n[0]
                              : null
                          );
                        },
                      },
                      {
                        key: "cacheUserLanguage",
                        value: function (e, t) {
                          var n = this;
                          t || (t = this.options.caches),
                            t &&
                              ((this.options.excludeCacheFor &&
                                this.options.excludeCacheFor.indexOf(e) > -1) ||
                                t.forEach(function (t) {
                                  n.detectors[t] &&
                                    n.detectors[t].cacheUserLanguage(
                                      e,
                                      n.options
                                    );
                                }));
                        },
                      },
                    ]),
                    e
                  );
                })();
              ce.type = "languageDetector";
              var he = {
                "en-US": {
                  translation: JSON.parse(
                    '{"name":"Chainbase","saleEmail":"sales@chainbase.com","supportEmail":"support@chainbase.com","common":{"download":"Download","learnMore":"Learn more","getStarted":"Get started free","tryItFeel":"Try it free","contactSales":"Contact Sales","readTheDoc":"Read the Doc","contactSalesV2":{"title":"Build Web3 with \\nChainbase","description":"Get access to Chainbase’s globally distributed, auto-scaling, multi-cloud \\nnetwork."}}}'
                  ),
                  home: JSON.parse(
                    '{"header":{"title":"One Web3 Data Infra.\\nEvery Team.","description":"We\'re more than APIs, or just data interpretation. Customize your own data flow with Chainbase.","getStarted":"Get started free","contactSales":"Contact Sales!!"}}'
                  ),
                },
              };
              function pe(e, t, n) {
                return (
                  (t = B(t)) in e
                    ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (e[t] = n),
                  e
                );
              }
              K.use(ce)
                .use(z.initReactI18next)
                .init({
                  resources: he,
                  fallbackLng: "en-US",
                  detection: {
                    caches: ["localStorage", "sessionStorage", "cookie"],
                  },
                });
              var ge = i(444),
                de = (function () {
                  return _(
                    function e() {
                      var t = this;
                      H(this, e),
                        pe(this, "emitter", new ge.vl()),
                        pe(this, "register", function (e) {
                          if (!e)
                            return (
                              (t.dispatchOpen = void 0),
                              (t.dispatchClose = void 0),
                              void (t.dispatchAbort = void 0)
                            );
                          var n = e(
                            function (e) {
                              var n;
                              null === (n = t.onOpen) ||
                                void 0 === n ||
                                n.call(t, e),
                                t.emitter.emit("open", e);
                            },
                            function (e) {
                              var n;
                              null === (n = t.onClose) ||
                                void 0 === n ||
                                n.call(t, e),
                                t.emitter.emit("close", e);
                            },
                            function (e) {
                              var n;
                              null === (n = t.onAbort) ||
                                void 0 === n ||
                                n.call(t, e),
                                t.emitter.emit("abort", e);
                            }
                          );
                          (t.dispatchPeek = n.peek),
                            (t.dispatchOpen = n.open),
                            (t.dispatchClose = n.close),
                            (t.dispatchAbort = n.abort);
                        }),
                        (this.open = this.open.bind(this)),
                        (this.close = this.close.bind(this)),
                        (this.abort = this.abort.bind(this)),
                        (this.openAndWaitForClose =
                          this.openAndWaitForClose.bind(this));
                    },
                    [
                      {
                        key: "peek",
                        value: function () {
                          var e, t;
                          return (
                            null !==
                              (e =
                                null === (t = this.dispatchPeek) || void 0 === t
                                  ? void 0
                                  : t.call(this)) &&
                            void 0 !== e &&
                            e
                          );
                        },
                      },
                      {
                        key: "open",
                        value: function (e) {
                          var t;
                          void 0 === this.dispatchOpen &&
                            console.warn(
                              "[SingletonModal]: The modal hasn't registered yet."
                            ),
                            null === (t = this.dispatchOpen) ||
                              void 0 === t ||
                              t.call(this, e);
                        },
                      },
                      {
                        key: "close",
                        value: function (e) {
                          var t;
                          null === (t = this.dispatchClose) ||
                            void 0 === t ||
                            t.call(this, e);
                        },
                      },
                      {
                        key: "abort",
                        value: function (e) {
                          var t;
                          null === (t = this.dispatchAbort) ||
                            void 0 === t ||
                            t.call(this, e);
                        },
                      },
                      {
                        key: "openAndWaitForClose",
                        value: function (e) {
                          var t = this;
                          return new Promise(function (n, o) {
                            t.open(e),
                              (t.onClose = function (e) {
                                return n(e);
                              }),
                              (t.onAbort = function (e) {
                                return o(e);
                              });
                          });
                        },
                      },
                    ]
                  );
                })();
              function fe(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
                return o;
              }
              var me = i(726);
              function ve(e, t) {
                var n = (function (e, t) {
                    return (
                      (function (e) {
                        if (Array.isArray(e)) return e;
                      })(e) ||
                      (function (e, t) {
                        var n =
                          null == e
                            ? null
                            : ("undefined" != typeof Symbol &&
                                e[Symbol.iterator]) ||
                              e["@@iterator"];
                        if (null != n) {
                          var o,
                            s,
                            i,
                            r,
                            a = [],
                            l = !0,
                            u = !1;
                          try {
                            if (((i = (n = n.call(e)).next), 0 === t)) {
                              if (Object(n) !== n) return;
                              l = !1;
                            } else
                              for (
                                ;
                                !(l = (o = i.call(n)).done) &&
                                (a.push(o.value), a.length !== t);
                                l = !0
                              );
                          } catch (e) {
                            (u = !0), (s = e);
                          } finally {
                            try {
                              if (
                                !l &&
                                null != n.return &&
                                ((r = n.return()), Object(r) !== r)
                              )
                                return;
                            } finally {
                              if (u) throw s;
                            }
                          }
                          return a;
                        }
                      })(e, t) ||
                      (function (e, t) {
                        if (e) {
                          if ("string" == typeof e) return fe(e, t);
                          var n = Object.prototype.toString
                            .call(e)
                            .slice(8, -1);
                          return (
                            "Object" === n &&
                              e.constructor &&
                              (n = e.constructor.name),
                            "Map" === n || "Set" === n
                              ? Array.from(e)
                              : "Arguments" === n ||
                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                  n
                                )
                              ? fe(e, t)
                              : void 0
                          );
                        }
                      })(e, t) ||
                      (function () {
                        throw new TypeError(
                          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                        );
                      })()
                    );
                  })((0, me.useState)(!1), 2),
                  o = n[0],
                  s = n[1],
                  i = (0, me.useRef)(),
                  r = (0, me.useRef)(),
                  a = (0, me.useRef)(o);
                (r.current = t), (a.current = o);
                var l = (0, me.useCallback)(function (e, t, n) {
                  return (
                    (i.current = {
                      peek: function () {
                        return a.current;
                      },
                      open: function (t) {
                        var n, o;
                        null === (n = r.current) ||
                          void 0 === n ||
                          null === (o = n.onOpen) ||
                          void 0 === o ||
                          o.call(n, t),
                          e(t),
                          s(!0);
                      },
                      close: function (e) {
                        var n, o;
                        null === (n = r.current) ||
                          void 0 === n ||
                          null === (o = n.onClose) ||
                          void 0 === o ||
                          o.call(n, e),
                          t(e),
                          s(!1);
                      },
                      abort: function (e) {
                        var t, o;
                        null === (t = r.current) ||
                          void 0 === t ||
                          null === (o = t.onAbort) ||
                          void 0 === o ||
                          o.call(t, e),
                          n(e),
                          s(!1);
                      },
                    }),
                    i.current
                  );
                }, []);
                return (
                  (0, me.useImperativeHandle)(
                    e,
                    function () {
                      return l;
                    },
                    [l]
                  ),
                  [o, i.current]
                );
              }
              const ye =
                (Symbol("solid-proxy"),
                Symbol("solid-track"),
                Symbol("solid-dev-component"),
                { equals: (e, t) => e === t });
              let be = null,
                Se = _e;
              const xe = 1,
                we = 2,
                ke = {
                  owned: null,
                  cleanups: null,
                  context: null,
                  owner: null,
                };
              var Oe = null;
              let Le = null,
                Ce = null,
                Ne = null,
                Re = null,
                Pe = null,
                $e = null,
                je = 0;
              function Ee(e, t) {
                const n = {
                  value: e,
                  observers: null,
                  observerSlots: null,
                  comparator:
                    (t = t ? Object.assign({}, ye, t) : ye).equals || void 0,
                };
                return [
                  Me.bind(n),
                  (e) => (
                    "function" == typeof e &&
                      (e =
                        Le && Le.running && Le.sources.has(n)
                          ? e(n.tValue)
                          : e(n.value)),
                    Ke(n, e)
                  ),
                ];
              }
              function Ae(e, t, n) {
                n = n ? Object.assign({}, ye, n) : ye;
                const o = Je(e, t, !0, 0);
                return (
                  (o.observers = null),
                  (o.observerSlots = null),
                  (o.comparator = n.equals || void 0),
                  Ce && Le && Le.running
                    ? ((o.tState = xe), Pe.push(o))
                    : ze(o),
                  Me.bind(o)
                );
              }
              function Ie(e) {
                if (!Ne && null === Re) return e();
                const t = Re;
                Re = null;
                try {
                  return Ne ? Ne.untrack(e) : e();
                } finally {
                  Re = t;
                }
              }
              function Fe(e) {
                return (
                  null === Oe ||
                    (null === Oe.cleanups
                      ? (Oe.cleanups = [e])
                      : Oe.cleanups.push(e)),
                  e
                );
              }
              const [De, Te] = Ee(!1);
              function Ue(e) {
                const t = Ae(e),
                  n = Ae(() => et(t()));
                return (
                  (n.toArray = () => {
                    const e = n();
                    return Array.isArray(e) ? e : null != e ? [e] : [];
                  }),
                  n
                );
              }
              let Ve;
              function Me() {
                const e = Le && Le.running;
                if (this.sources && (e ? this.tState : this.state))
                  if ((e ? this.tState : this.state) === xe) ze(this);
                  else {
                    const e = Pe;
                    (Pe = null), qe(() => We(this), !1), (Pe = e);
                  }
                if (Re) {
                  const e = this.observers ? this.observers.length : 0;
                  Re.sources
                    ? (Re.sources.push(this), Re.sourceSlots.push(e))
                    : ((Re.sources = [this]), (Re.sourceSlots = [e])),
                    this.observers
                      ? (this.observers.push(Re),
                        this.observerSlots.push(Re.sources.length - 1))
                      : ((this.observers = [Re]),
                        (this.observerSlots = [Re.sources.length - 1]));
                }
                return e && Le.sources.has(this) ? this.tValue : this.value;
              }
              function Ke(e, t, n) {
                let o =
                  Le && Le.running && Le.sources.has(e) ? e.tValue : e.value;
                if (!e.comparator || !e.comparator(o, t)) {
                  if (Le) {
                    const o = Le.running;
                    (o || (!n && Le.sources.has(e))) &&
                      (Le.sources.add(e), (e.tValue = t)),
                      o || (e.value = t);
                  } else e.value = t;
                  e.observers &&
                    e.observers.length &&
                    qe(() => {
                      for (let t = 0; t < e.observers.length; t += 1) {
                        const n = e.observers[t],
                          o = Le && Le.running;
                        (o && Le.disposed.has(n)) ||
                          ((o ? n.tState : n.state) ||
                            (n.pure ? Pe.push(n) : $e.push(n),
                            n.observers && Qe(n)),
                          o ? (n.tState = xe) : (n.state = xe));
                      }
                      if (Pe.length > 1e6) throw ((Pe = []), new Error());
                    }, !1);
                }
                return t;
              }
              function ze(e) {
                if (!e.fn) return;
                Ge(e);
                const t = je;
                He(
                  e,
                  Le && Le.running && Le.sources.has(e) ? e.tValue : e.value,
                  t
                ),
                  Le &&
                    !Le.running &&
                    Le.sources.has(e) &&
                    queueMicrotask(() => {
                      qe(() => {
                        Le && (Le.running = !0),
                          (Re = Oe = e),
                          He(e, e.tValue, t),
                          (Re = Oe = null);
                      }, !1);
                    });
              }
              function He(e, t, n) {
                let o;
                const s = Oe,
                  i = Re;
                Re = Oe = e;
                try {
                  o = e.fn(t);
                } catch (t) {
                  return (
                    e.pure &&
                      (Le && Le.running
                        ? ((e.tState = xe),
                          e.tOwned && e.tOwned.forEach(Ge),
                          (e.tOwned = void 0))
                        : ((e.state = xe),
                          e.owned && e.owned.forEach(Ge),
                          (e.owned = null))),
                    (e.updatedAt = n + 1),
                    Xe(t)
                  );
                } finally {
                  (Re = i), (Oe = s);
                }
                (!e.updatedAt || e.updatedAt <= n) &&
                  (null != e.updatedAt && "observers" in e
                    ? Ke(e, o, !0)
                    : Le && Le.running && e.pure
                    ? (Le.sources.add(e), (e.tValue = o))
                    : (e.value = o),
                  (e.updatedAt = n));
              }
              function Je(e, t, n, o = xe, s) {
                const i = {
                  fn: e,
                  state: o,
                  updatedAt: null,
                  owned: null,
                  sources: null,
                  sourceSlots: null,
                  cleanups: null,
                  value: t,
                  owner: Oe,
                  context: Oe ? Oe.context : null,
                  pure: n,
                };
                if (
                  (Le && Le.running && ((i.state = 0), (i.tState = o)),
                  null === Oe ||
                    (Oe !== ke &&
                      (Le && Le.running && Oe.pure
                        ? Oe.tOwned
                          ? Oe.tOwned.push(i)
                          : (Oe.tOwned = [i])
                        : Oe.owned
                        ? Oe.owned.push(i)
                        : (Oe.owned = [i]))),
                  Ne && i.fn)
                ) {
                  const [e, t] = Ee(void 0, { equals: !1 }),
                    n = Ne.factory(i.fn, t);
                  Fe(() => n.dispose());
                  const o = () =>
                      (function (e) {
                        if (Le && Le.running) return e(), Le.done;
                        const t = Re,
                          n = Oe;
                        return Promise.resolve().then(() => {
                          let o;
                          return (
                            (Re = t),
                            (Oe = n),
                            (Ce || Ve) &&
                              ((o =
                                Le ||
                                (Le = {
                                  sources: new Set(),
                                  effects: [],
                                  promises: new Set(),
                                  disposed: new Set(),
                                  queue: new Set(),
                                  running: !0,
                                })),
                              o.done ||
                                (o.done = new Promise((e) => (o.resolve = e))),
                              (o.running = !0)),
                            qe(e, !1),
                            (Re = Oe = null),
                            o ? o.done : void 0
                          );
                        });
                      })(t).then(() => s.dispose()),
                    s = Ne.factory(i.fn, o);
                  i.fn = (t) => (
                    e(), Le && Le.running ? s.track(t) : n.track(t)
                  );
                }
                return i;
              }
              function Be(e) {
                const t = Le && Le.running;
                if (0 === (t ? e.tState : e.state)) return;
                if ((t ? e.tState : e.state) === we) return We(e);
                if (e.suspense && Ie(e.suspense.inFallback))
                  return e.suspense.effects.push(e);
                const n = [e];
                for (; (e = e.owner) && (!e.updatedAt || e.updatedAt < je); ) {
                  if (t && Le.disposed.has(e)) return;
                  (t ? e.tState : e.state) && n.push(e);
                }
                for (let o = n.length - 1; o >= 0; o--) {
                  if (((e = n[o]), t)) {
                    let t = e,
                      s = n[o + 1];
                    for (; (t = t.owner) && t !== s; )
                      if (Le.disposed.has(t)) return;
                  }
                  if ((t ? e.tState : e.state) === xe) ze(e);
                  else if ((t ? e.tState : e.state) === we) {
                    const t = Pe;
                    (Pe = null), qe(() => We(e, n[0]), !1), (Pe = t);
                  }
                }
              }
              function qe(e, t) {
                if (Pe) return e();
                let n = !1;
                t || (Pe = []), $e ? (n = !0) : ($e = []), je++;
                try {
                  const t = e();
                  return (
                    (function (e) {
                      if (
                        (Pe &&
                          (Ce && Le && Le.running
                            ? (function (e) {
                                for (let t = 0; t < e.length; t++) {
                                  const n = e[t],
                                    o = Le.queue;
                                  o.has(n) ||
                                    (o.add(n),
                                    Ce(() => {
                                      o.delete(n),
                                        qe(() => {
                                          (Le.running = !0), Be(n);
                                        }, !1),
                                        Le && (Le.running = !1);
                                    }));
                                }
                              })(Pe)
                            : _e(Pe),
                          (Pe = null)),
                        e)
                      )
                        return;
                      let t;
                      if (Le)
                        if (Le.promises.size || Le.queue.size) {
                          if (Le.running)
                            return (
                              (Le.running = !1),
                              Le.effects.push.apply(Le.effects, $e),
                              ($e = null),
                              void Te(!0)
                            );
                        } else {
                          const e = Le.sources,
                            n = Le.disposed;
                          $e.push.apply($e, Le.effects), (t = Le.resolve);
                          for (const e of $e)
                            "tState" in e && (e.state = e.tState),
                              delete e.tState;
                          (Le = null),
                            qe(() => {
                              for (const e of n) Ge(e);
                              for (const t of e) {
                                if (((t.value = t.tValue), t.owned))
                                  for (
                                    let e = 0, n = t.owned.length;
                                    e < n;
                                    e++
                                  )
                                    Ge(t.owned[e]);
                                t.tOwned && (t.owned = t.tOwned),
                                  delete t.tValue,
                                  delete t.tOwned,
                                  (t.tState = 0);
                              }
                              Te(!1);
                            }, !1);
                        }
                      const n = $e;
                      ($e = null), n.length && qe(() => Se(n), !1), t && t();
                    })(n),
                    t
                  );
                } catch (e) {
                  n || ($e = null), (Pe = null), Xe(e);
                }
              }
              function _e(e) {
                for (let t = 0; t < e.length; t++) Be(e[t]);
              }
              function We(e, t) {
                const n = Le && Le.running;
                n ? (e.tState = 0) : (e.state = 0);
                for (let o = 0; o < e.sources.length; o += 1) {
                  const s = e.sources[o];
                  if (s.sources) {
                    const e = n ? s.tState : s.state;
                    e === xe
                      ? s !== t && (!s.updatedAt || s.updatedAt < je) && Be(s)
                      : e === we && We(s, t);
                  }
                }
              }
              function Qe(e) {
                const t = Le && Le.running;
                for (let n = 0; n < e.observers.length; n += 1) {
                  const o = e.observers[n];
                  (t ? o.tState : o.state) ||
                    (t ? (o.tState = we) : (o.state = we),
                    o.pure ? Pe.push(o) : $e.push(o),
                    o.observers && Qe(o));
                }
              }
              function Ge(e) {
                let t;
                if (e.sources)
                  for (; e.sources.length; ) {
                    const t = e.sources.pop(),
                      n = e.sourceSlots.pop(),
                      o = t.observers;
                    if (o && o.length) {
                      const e = o.pop(),
                        s = t.observerSlots.pop();
                      n < o.length &&
                        ((e.sourceSlots[s] = n),
                        (o[n] = e),
                        (t.observerSlots[n] = s));
                    }
                  }
                if (Le && Le.running && e.pure) {
                  if (e.tOwned) {
                    for (t = e.tOwned.length - 1; t >= 0; t--) Ge(e.tOwned[t]);
                    delete e.tOwned;
                  }
                  Ye(e, !0);
                } else if (e.owned) {
                  for (t = e.owned.length - 1; t >= 0; t--) Ge(e.owned[t]);
                  e.owned = null;
                }
                if (e.cleanups) {
                  for (t = e.cleanups.length - 1; t >= 0; t--) e.cleanups[t]();
                  e.cleanups = null;
                }
                Le && Le.running ? (e.tState = 0) : (e.state = 0);
              }
              function Ye(e, t) {
                if ((t || ((e.tState = 0), Le.disposed.add(e)), e.owned))
                  for (let t = 0; t < e.owned.length; t++) Ye(e.owned[t]);
              }
              function Ze(e, t, n) {
                try {
                  for (const n of t) n(e);
                } catch (e) {
                  Xe(e, (n && n.owner) || null);
                }
              }
              function Xe(e, t = Oe) {
                const n = be && t && t.context && t.context[be],
                  o = (function (e) {
                    return e instanceof Error
                      ? e
                      : new Error("string" == typeof e ? e : "Unknown error", {
                          cause: e,
                        });
                  })(e);
                if (!n) throw o;
                $e
                  ? $e.push({
                      fn() {
                        Ze(o, n, t);
                      },
                      state: xe,
                    })
                  : Ze(o, n, t);
              }
              function et(e) {
                if ("function" == typeof e && !e.length) return et(e());
                if (Array.isArray(e)) {
                  const t = [];
                  for (let n = 0; n < e.length; n++) {
                    const o = et(e[n]);
                    Array.isArray(o) ? t.push.apply(t, o) : t.push(o);
                  }
                  return t;
                }
                return e;
              }
              function tt(e, t) {
                return function (t) {
                  let n;
                  return (
                    (function (o, s, i) {
                      const r = Je(
                        () =>
                          (n = Ie(
                            () => (
                              (Oe.context = { ...Oe.context, [e]: t.value }),
                              Ue(() => t.children)
                            )
                          )),
                        void 0,
                        !1,
                        xe
                      );
                      Ce && Le && Le.running ? Pe.push(r) : ze(r);
                    })(),
                    n
                  );
                };
              }
              Symbol("fallback"),
                (function (e, t) {
                  const n = Symbol("context");
                  tt(n);
                })(),
                Object.create(null),
                Object.create(null),
                Symbol(),
                Object.entries,
                Object.keys;
              var nt = Fe,
                ot = class extends Set {
                  emit(e) {
                    for (const t of this) t(e);
                  }
                },
                st = class extends Map {
                  on(e, t) {
                    let n = this.get(e);
                    n || this.set(e, (n = new ot())), n.add(t);
                  }
                  off(e, t) {
                    const n = this.get(e);
                    n?.delete(t) && !n.size && this.delete(e);
                  }
                  emit(e, t) {
                    this.get(e)?.emit(t);
                  }
                };
              var it = (function () {
                const e = new st();
                return {
                  on: (t, n) => (e.on(t, n), nt(e.off.bind(e, t, n))),
                  emit: e.emit.bind(e),
                  clear: Fe(e.clear.bind(e)),
                };
              })();
            })(),
            r
          );
        })()
      );
    },
  };
});
//# sourceMappingURL=chainbase-labs-micro-fe-shared.f0bbd776429223a41225.js.map
