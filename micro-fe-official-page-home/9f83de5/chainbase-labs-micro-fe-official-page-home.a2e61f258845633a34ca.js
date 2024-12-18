/*! For license information please see chainbase-labs-micro-fe-official-page-home.a2e61f258845633a34ca.js.LICENSE.txt */
System.register(
  [
    "react",
    "react-dom",
    "single-spa-react",
    "@emotion/css",
    "@chainbase-labs/micro-fe-shared-components",
    "framer-motion",
    "@tanstack/react-query",
    "@chainbase-labs/micro-fe-shared",
    "gsap",
    "gsap/ScrollTrigger",
    "lenis",
  ],
  function (n, e) {
    var t = {},
      i = {},
      a = {},
      r = {},
      o = {},
      s = {},
      p = {},
      d = {},
      c = {},
      l = {},
      x = {};
    return (
      Object.defineProperty(t, "__esModule", { value: !0 }),
      Object.defineProperty(i, "__esModule", { value: !0 }),
      {
        setters: [
          function (n) {
            Object.keys(n).forEach(function (e) {
              t[e] = n[e];
            });
          },
          function (n) {
            Object.keys(n).forEach(function (e) {
              i[e] = n[e];
            });
          },
          function (n) {
            a.default = n.default;
          },
          function (n) {
            (r.css = n.css),
              (r.injectGlobal = n.injectGlobal),
              (r.keyframes = n.keyframes);
          },
          function (n) {
            (o.Button = n.Button),
              (o.DarkTheme = n.DarkTheme),
              (o.FlareButton = n.FlareButton),
              (o.Icon = n.Icon),
              (o.LightTheme = n.LightTheme),
              (o.Logo = n.Logo),
              (o.News = n.News),
              (o.SubUpdate = n.SubUpdate),
              (o.ThemeProvider = n.ThemeProvider);
          },
          function (n) {
            (s.AnimatePresence = n.AnimatePresence), (s.motion = n.motion);
          },
          function (n) {
            (p.QueryClient = n.QueryClient),
              (p.QueryClientProvider = n.QueryClientProvider),
              (p.useQuery = n.useQuery);
          },
          function (n) {
            d.emitter = n.emitter;
          },
          function (n) {
            c.gsap = n.gsap;
          },
          function (n) {
            l.ScrollTrigger = n.ScrollTrigger;
          },
          function (n) {
            x.default = n.default;
          },
        ],
        execute: function () {
          n(
            (() => {
              var n = {
                  338: (n, e, t) => {
                    "use strict";
                    var i = t(867);
                    (e.createRoot = i.createRoot),
                      (e.hydrateRoot = i.hydrateRoot);
                  },
                  20: (n, e, t) => {
                    "use strict";
                    var i = t(726),
                      a = Symbol.for("react.element"),
                      r =
                        (Symbol.for("react.fragment"),
                        Object.prototype.hasOwnProperty),
                      o =
                        i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
                          .ReactCurrentOwner,
                      s = { key: !0, ref: !0, __self: !0, __source: !0 };
                    function p(n, e, t) {
                      var i,
                        p = {},
                        d = null,
                        c = null;
                      for (i in (void 0 !== t && (d = "" + t),
                      void 0 !== e.key && (d = "" + e.key),
                      void 0 !== e.ref && (c = e.ref),
                      e))
                        r.call(e, i) && !s.hasOwnProperty(i) && (p[i] = e[i]);
                      if (n && n.defaultProps)
                        for (i in (e = n.defaultProps))
                          void 0 === p[i] && (p[i] = e[i]);
                      return {
                        $$typeof: a,
                        type: n,
                        key: d,
                        ref: c,
                        props: p,
                        _owner: o.current,
                      };
                    }
                    (e.jsx = p), (e.jsxs = p);
                  },
                  848: (n, e, t) => {
                    "use strict";
                    n.exports = t(20);
                  },
                  348: function (n) {
                    n.exports = (function () {
                      "use strict";
                      var n = document,
                        e = n.createTextNode.bind(n);
                      function t(n, e, t) {
                        n.style.setProperty(e, t);
                      }
                      function i(n, e) {
                        return n.appendChild(e);
                      }
                      function a(e, t, a, r) {
                        var o = n.createElement("span");
                        return (
                          t && (o.className = t),
                          a &&
                            (!r && o.setAttribute("data-" + t, a),
                            (o.textContent = a)),
                          (e && i(e, o)) || o
                        );
                      }
                      function r(n, e) {
                        return n.getAttribute("data-" + e);
                      }
                      function o(e, t) {
                        return e && 0 != e.length
                          ? e.nodeName
                            ? [e]
                            : [].slice.call(
                                e[0].nodeName ? e : (t || n).querySelectorAll(e)
                              )
                          : [];
                      }
                      function s(n) {
                        for (var e = []; n--; ) e[n] = [];
                        return e;
                      }
                      function p(n, e) {
                        n && n.some(e);
                      }
                      function d(n) {
                        return function (e) {
                          return n[e];
                        };
                      }
                      var c = {};
                      function l(n, e, t) {
                        var i = t.indexOf(n);
                        if (-1 == i) {
                          t.unshift(n);
                          var a = c[n];
                          if (!a) throw new Error("plugin not loaded: " + n);
                          p(a.depends, function (e) {
                            l(e, n, t);
                          });
                        } else {
                          var r = t.indexOf(e);
                          t.splice(i, 1), t.splice(r, 0, n);
                        }
                        return t;
                      }
                      function x(n, e, t, i) {
                        return { by: n, depends: e, key: t, split: i };
                      }
                      function h(n) {
                        return l(n, 0, []).map(d(c));
                      }
                      function m(n) {
                        c[n.by] = n;
                      }
                      function u(n, t, r, s, d) {
                        n.normalize();
                        var c = [],
                          l = document.createDocumentFragment();
                        s && c.push(n.previousSibling);
                        var x = [];
                        return (
                          o(n.childNodes).some(function (n) {
                            if (!n.tagName || n.hasChildNodes()) {
                              if (n.childNodes && n.childNodes.length)
                                return (
                                  x.push(n),
                                  void c.push.apply(c, u(n, t, r, s, d))
                                );
                              var i = n.wholeText || "",
                                o = i.trim();
                              o.length &&
                                (" " === i[0] && x.push(e(" ")),
                                p(
                                  "" === r &&
                                    "function" == typeof Intl.Segmenter
                                    ? Array.from(
                                        new Intl.Segmenter().segment(o)
                                      ).map(function (n) {
                                        return n.segment;
                                      })
                                    : o.split(r),
                                  function (n, e) {
                                    e &&
                                      d &&
                                      x.push(a(l, "whitespace", " ", d));
                                    var i = a(l, t, n);
                                    c.push(i), x.push(i);
                                  }
                                ),
                                " " === i[i.length - 1] && x.push(e(" ")));
                            } else x.push(n);
                          }),
                          p(x, function (n) {
                            i(l, n);
                          }),
                          (n.innerHTML = ""),
                          i(n, l),
                          c
                        );
                      }
                      var f = "words",
                        g = x(f, 0, "word", function (n) {
                          return u(n, "word", /\s+/, 0, 1);
                        }),
                        w = "chars",
                        b = x(w, [f], "char", function (n, e, t) {
                          var i = [];
                          return (
                            p(t[f], function (n, t) {
                              i.push.apply(
                                i,
                                u(n, "char", "", e.whitespace && t)
                              );
                            }),
                            i
                          );
                        });
                      function v(n) {
                        var e = (n = n || {}).key;
                        return o(n.target || "[data-splitting]").map(function (
                          i
                        ) {
                          var a = i["🍌"];
                          if (!n.force && a) return a;
                          a = i["🍌"] = { el: i };
                          var o = n.by || r(i, "splitting");
                          (o && "true" != o) || (o = w);
                          var s = h(o),
                            d = (function (n, e) {
                              for (var t in e) n[t] = e[t];
                              return n;
                            })({}, n);
                          return (
                            p(s, function (n) {
                              if (n.split) {
                                var r = n.by,
                                  o = (e ? "-" + e : "") + n.key,
                                  s = n.split(i, d, a);
                                o &&
                                  (function (n, e, i) {
                                    var a = "--" + e,
                                      r = a + "-index";
                                    p(i, function (n, e) {
                                      Array.isArray(n)
                                        ? p(n, function (n) {
                                            t(n, r, e);
                                          })
                                        : t(n, r, e);
                                    }),
                                      t(n, a + "-total", i.length);
                                  })(i, o, s),
                                  (a[r] = s),
                                  i.classList.add(r);
                              }
                            }),
                            i.classList.add("splitting"),
                            a
                          );
                        });
                      }
                      function y(n, e, t) {
                        var i = o(e.matching || n.children, n),
                          a = {};
                        return (
                          p(i, function (n) {
                            var e = Math.round(n[t]);
                            (a[e] || (a[e] = [])).push(n);
                          }),
                          Object.keys(a).map(Number).sort(j).map(d(a))
                        );
                      }
                      function j(n, e) {
                        return n - e;
                      }
                      (v.html = function (n) {
                        var e = ((n = n || {}).target = a());
                        return (e.innerHTML = n.content), v(n), e.outerHTML;
                      }),
                        (v.add = m);
                      var z = x("lines", [f], "line", function (n, e, t) {
                          return y(n, { matching: t[f] }, "offsetTop");
                        }),
                        S = x("items", 0, "item", function (n, e) {
                          return o(e.matching || n.children, n);
                        }),
                        N = x("rows", 0, "row", function (n, e) {
                          return y(n, e, "offsetTop");
                        }),
                        k = x("cols", 0, "col", function (n, e) {
                          return y(n, e, "offsetLeft");
                        }),
                        E = x("grid", ["rows", "cols"]),
                        C = "layout",
                        T = x(C, 0, 0, function (n, e) {
                          var s = (e.rows = +(e.rows || r(n, "rows") || 1)),
                            p = (e.columns = +(
                              e.columns ||
                              r(n, "columns") ||
                              1
                            ));
                          if (
                            ((e.image =
                              e.image ||
                              r(n, "image") ||
                              n.currentSrc ||
                              n.src),
                            e.image)
                          ) {
                            var d = o("img", n)[0];
                            e.image = d && (d.currentSrc || d.src);
                          }
                          e.image &&
                            t(n, "background-image", "url(" + e.image + ")");
                          for (
                            var c = s * p, l = [], x = a(0, "cell-grid");
                            c--;

                          ) {
                            var h = a(x, "cell");
                            a(h, "cell-inner"), l.push(h);
                          }
                          return i(n, x), l;
                        }),
                        O = x("cellRows", [C], "row", function (n, e, t) {
                          var i = e.rows,
                            a = s(i);
                          return (
                            p(t[C], function (n, e, t) {
                              a[Math.floor(e / (t.length / i))].push(n);
                            }),
                            a
                          );
                        }),
                        A = x("cellColumns", [C], "col", function (n, e, t) {
                          var i = e.columns,
                            a = s(i);
                          return (
                            p(t[C], function (n, e) {
                              a[e % i].push(n);
                            }),
                            a
                          );
                        }),
                        I = x(
                          "cells",
                          ["cellRows", "cellColumns"],
                          "cell",
                          function (n, e, t) {
                            return t[C];
                          }
                        );
                      return (
                        m(g),
                        m(b),
                        m(z),
                        m(S),
                        m(N),
                        m(k),
                        m(E),
                        m(T),
                        m(O),
                        m(A),
                        m(I),
                        v
                      );
                    })();
                  },
                  126: (n, e, t) => {
                    const i = t(358).y;
                    e.w = function (n) {
                      if ((n || (n = 1), !t.y.meta || !t.y.meta.url))
                        throw (
                          (console.error("__system_context__", t.y),
                          Error(
                            "systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided"
                          ))
                        );
                      t.p = i(t.y.meta.url, n);
                    };
                  },
                  358: (n, e, t) => {
                    e.y = function (n, e) {
                      var t = document.createElement("a");
                      t.href = n;
                      for (
                        var i =
                            "/" === t.pathname[0]
                              ? t.pathname
                              : "/" + t.pathname,
                          a = 0,
                          r = i.length;
                        a !== e && r >= 0;

                      )
                        "/" === i[--r] && a++;
                      if (a !== e)
                        throw Error(
                          "systemjs-webpack-interop: rootDirectoryLevel (" +
                            e +
                            ") is greater than the number of directories (" +
                            a +
                            ") in the URL path " +
                            n
                        );
                      var o = i.slice(0, r + 1);
                      return t.protocol + "//" + t.host + o;
                    };
                    Number.isInteger;
                  },
                  557: (n) => {
                    "use strict";
                    n.exports = d;
                  },
                  736: (n) => {
                    "use strict";
                    n.exports = o;
                  },
                  662: (n) => {
                    "use strict";
                    n.exports = r;
                  },
                  89: (n) => {
                    "use strict";
                    n.exports = p;
                  },
                  771: (n) => {
                    "use strict";
                    n.exports = s;
                  },
                  660: (n) => {
                    "use strict";
                    n.exports = c;
                  },
                  960: (n) => {
                    "use strict";
                    n.exports = l;
                  },
                  158: (n) => {
                    "use strict";
                    n.exports = x;
                  },
                  726: (n) => {
                    "use strict";
                    n.exports = t;
                  },
                  867: (n) => {
                    "use strict";
                    n.exports = i;
                  },
                  238: (n) => {
                    "use strict";
                    n.exports = a;
                  },
                },
                h = {};
              function m(e) {
                var t = h[e];
                if (void 0 !== t) return t.exports;
                var i = (h[e] = { exports: {} });
                return n[e].call(i.exports, i, i.exports, m), i.exports;
              }
              (m.y = e),
                (m.n = (n) => {
                  var e = n && n.__esModule ? () => n.default : () => n;
                  return m.d(e, { a: e }), e;
                }),
                (m.d = (n, e) => {
                  for (var t in e)
                    m.o(e, t) &&
                      !m.o(n, t) &&
                      Object.defineProperty(n, t, {
                        enumerable: !0,
                        get: e[t],
                      });
                }),
                (m.o = (n, e) => Object.prototype.hasOwnProperty.call(n, e)),
                (m.r = (n) => {
                  "undefined" != typeof Symbol &&
                    Symbol.toStringTag &&
                    Object.defineProperty(n, Symbol.toStringTag, {
                      value: "Module",
                    }),
                    Object.defineProperty(n, "__esModule", { value: !0 });
                }),
                (m.p = "");
              var u = {};
              return (
                (0, m(126).w)(1),
                (() => {
                  "use strict";
                  function n(n, e) {
                    return (
                      e || (e = n.slice(0)),
                      Object.freeze(
                        Object.defineProperties(n, {
                          raw: { value: Object.freeze(e) },
                        })
                      )
                    );
                  }
                  m.r(u),
                    m.d(u, {
                      bootstrap: () => Wr,
                      mount: () => qr,
                      unmount: () => Br,
                    });
                  var e = m(726),
                    t = m(338),
                    i = m(238);
                  function a(n, e) {
                    (null == e || e > n.length) && (e = n.length);
                    for (var t = 0, i = new Array(e); t < e; t++) i[t] = n[t];
                    return i;
                  }
                  function r(n, e) {
                    if (n) {
                      if ("string" == typeof n) return a(n, e);
                      var t = Object.prototype.toString.call(n).slice(8, -1);
                      return (
                        "Object" === t &&
                          n.constructor &&
                          (t = n.constructor.name),
                        "Map" === t || "Set" === t
                          ? Array.from(n)
                          : "Arguments" === t ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                          ? a(n, e)
                          : void 0
                      );
                    }
                  }
                  function o(n, e) {
                    return (
                      (function (n) {
                        if (Array.isArray(n)) return n;
                      })(n) ||
                      (function (n, e) {
                        var t =
                          null == n
                            ? null
                            : ("undefined" != typeof Symbol &&
                                n[Symbol.iterator]) ||
                              n["@@iterator"];
                        if (null != t) {
                          var i,
                            a,
                            r,
                            o,
                            s = [],
                            p = !0,
                            d = !1;
                          try {
                            if (((r = (t = t.call(n)).next), 0 === e)) {
                              if (Object(t) !== t) return;
                              p = !1;
                            } else
                              for (
                                ;
                                !(p = (i = r.call(t)).done) &&
                                (s.push(i.value), s.length !== e);
                                p = !0
                              );
                          } catch (n) {
                            (d = !0), (a = n);
                          } finally {
                            try {
                              if (
                                !p &&
                                null != t.return &&
                                ((o = t.return()), Object(o) !== o)
                              )
                                return;
                            } finally {
                              if (d) throw a;
                            }
                          }
                          return s;
                        }
                      })(n, e) ||
                      r(n, e) ||
                      (function () {
                        throw new TypeError(
                          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                        );
                      })()
                    );
                  }
                  var s,
                    p,
                    d,
                    c,
                    l,
                    x,
                    h,
                    f,
                    g,
                    w,
                    b,
                    v,
                    y,
                    j,
                    z,
                    S,
                    N,
                    k,
                    E,
                    C = m(662),
                    T = m(736),
                    O = m(771),
                    A = m(848),
                    I = {
                      enter: { y: "-50%", opacity: 0 },
                      center: { y: "0%", opacity: 1 },
                      exit: { y: "50%", opacity: 0 },
                    },
                    L = [
                      "Ethereum",
                      "BSC",
                      "Polygon",
                      "Arbitrum",
                      "Optimism",
                      "zkSync",
                      "Starknet",
                      "Base",
                      "Fantom",
                      "Avalanche",
                      "Aptos",
                      "Sui",
                      "TON",
                    ];
                  function P() {
                    var t = o((0, e.useState)(!1), 2),
                      i = t[0],
                      a = t[1],
                      r = o((0, e.useState)(0), 2),
                      m = r[0],
                      u = r[1];
                    (0, e.useEffect)(function () {
                      var n = setInterval(function () {
                        u(function (n) {
                          return (n + 1) % L.length;
                        });
                      }, 1e3);
                      return function () {
                        return clearInterval(n);
                      };
                    }, []);
                    var P,
                      F,
                      D,
                      R =
                        ((P = [
                          [
                            2560,
                            {
                              fontSize: 290,
                              picOneSize: 306,
                              picTwoSize: 280,
                              videoSize: 210,
                              tinyFontSize: 24,
                              tinyFontLeft: 100,
                            },
                          ],
                          [
                            2370,
                            {
                              fontSize: 273,
                              picOneSize: 286,
                              picTwoSize: 260,
                              videoSize: 195,
                              tinyFontSize: 22,
                              tinyFontLeft: 90,
                            },
                          ],
                          [
                            2160,
                            {
                              fontSize: 253,
                              picOneSize: 266,
                              picTwoSize: 240,
                              videoSize: 180,
                              tinyFontSize: 20,
                              tinyFontLeft: 81,
                            },
                          ],
                          [
                            1920,
                            {
                              fontSize: 223,
                              picOneSize: 246,
                              picTwoSize: 220,
                              videoSize: 165,
                              tinyFontSize: 18,
                              tinyFontLeft: 72,
                            },
                          ],
                          [
                            1720,
                            {
                              fontSize: 190,
                              picOneSize: 226,
                              picTwoSize: 200,
                              videoSize: 140,
                              tinyFontSize: 16,
                              tinyFontLeft: 65,
                            },
                          ],
                          [
                            1520,
                            {
                              fontSize: 170,
                              picOneSize: 206,
                              picTwoSize: 180,
                              videoSize: 120,
                              tinyFontSize: 16,
                              tinyFontLeft: 65,
                            },
                          ],
                          [
                            1420,
                            {
                              fontSize: 160,
                              picOneSize: 186,
                              picTwoSize: 160,
                              videoSize: 120,
                              tinyFontSize: 16,
                              tinyFontLeft: 65,
                            },
                          ],
                          [
                            1320,
                            {
                              fontSize: 150,
                              picOneSize: 166,
                              picTwoSize: 140,
                              videoSize: 110,
                              tinyFontSize: 15,
                              tinyFontLeft: 60,
                            },
                          ],
                          [
                            1220,
                            {
                              fontSize: 140,
                              picOneSize: 146,
                              picTwoSize: 130,
                              videoSize: 100,
                              tinyFontSize: 14,
                              tinyFontLeft: 55,
                            },
                          ],
                          [
                            1120,
                            {
                              fontSize: 130,
                              picOneSize: 136,
                              picTwoSize: 120,
                              videoSize: 90,
                              tinyFontSize: 13,
                              tinyFontLeft: 50,
                            },
                          ],
                          [
                            1024,
                            {
                              fontSize: 110,
                              picOneSize: 120,
                              picTwoSize: 110,
                              videoSize: 85,
                              tinyFontSize: 12,
                              tinyFontLeft: 45,
                            },
                          ],
                          [
                            924,
                            {
                              fontSize: 100,
                              picOneSize: 110,
                              picTwoSize: 100,
                              videoSize: 80,
                              tinyFontSize: 12,
                              tinyFontLeft: 45,
                            },
                          ],
                          [
                            824,
                            {
                              fontSize: 90,
                              picOneSize: 100,
                              picTwoSize: 90,
                              videoSize: 70,
                              tinyFontSize: 12,
                              tinyFontLeft: 45,
                            },
                          ],
                          [
                            768,
                            {
                              fontSize: 80,
                              picOneSize: 90,
                              picTwoSize: 90,
                              videoSize: 65,
                              tinyFontSize: 12,
                              tinyFontLeft: 45,
                            },
                          ],
                          [
                            668,
                            {
                              fontSize: 70,
                              picOneSize: 80,
                              picTwoSize: 80,
                              videoSize: 60,
                              tinyFontSize: 12,
                              tinyFontLeft: 45,
                            },
                          ],
                          [
                            568,
                            {
                              fontSize: 60,
                              picOneSize: 70,
                              picTwoSize: 70,
                              videoSize: 50,
                              tinyFontSize: 12,
                              tinyFontLeft: 45,
                            },
                          ],
                          [
                            468,
                            {
                              fontSize: 50,
                              picOneSize: 60,
                              picTwoSize: 60,
                              videoSize: 40,
                              tinyFontSize: 12,
                              tinyFontLeft: 45,
                            },
                          ],
                          [
                            0,
                            {
                              fontSize: 40,
                              picOneSize: 50,
                              picTwoSize: 50,
                              videoSize: 35,
                              tinyFontSize: 11,
                              tinyFontLeft: 40,
                            },
                          ],
                        ]),
                        (F = window.screen.availWidth),
                        (D = P.find(function (n) {
                          return F >= n[0];
                        }))
                          ? D[1]
                          : P[P.length - 1][1]),
                      _ = R.fontSize,
                      M = R.picOneSize,
                      W = R.picTwoSize,
                      B = R.videoSize,
                      q = R.tinyFontSize,
                      H = R.tinyFontLeft;
                    return (0, A.jsxs)(T.ThemeProvider, {
                      theme: T.DarkTheme,
                      children: [
                        (0, A.jsxs)("section", {
                          className: (0, C.css)(
                            s ||
                              (s = n([
                                "\n                    padding: 32px 0px;\n                    display: flex;\n                    flex-direction: column;\n                    justify-content: space-between;\n                    position: relative;\n                    padding-bottom: 100px;\n                    @media (max-width: 1280px) {\n                        padding-bottom: 40px;\n                    }\n                    @media (max-width: 768px) {\n                        padding-bottom: 32px;\n                    }\n                    overflow: hidden;\n                    user-select: none;\n                    font-weight: 700;\n                    font-size: ",
                                "px;\n                    gap: 2rem;\n                ",
                              ])),
                            _
                          ),
                          children: [
                            i
                              ? null
                              : (0, A.jsx)("img", {
                                  src: "/public/phase-1/bg-img.png",
                                  className: (0, C.css)(
                                    p ||
                                      (p = n([
                                        "\n                            position: absolute;\n                            top: 0;\n                            width: 100%;\n                            height: 100%;\n                            background-color: #000;\n                            z-index: -1;\n                        ",
                                      ]))
                                  ),
                                }),
                            (0, A.jsx)("video", {
                              onLoadedData: function () {
                                return a(!0);
                              },
                              className: (0, C.css)(
                                d ||
                                  (d = n([
                                    "\n                        position: absolute;\n                        top: 0;\n                        width: 100%;\n                        z-index: -1;\n                    ",
                                  ]))
                              ),
                              src: "/public/phase-1/bg-high.mp4",
                              autoPlay: !0,
                              playsInline: !0,
                              muted: !0,
                              loop: !0,
                            }),
                            (0, A.jsxs)("div", {
                              className: (0, C.css)(
                                c ||
                                  (c = n([
                                    "\n                        margin: 0 72px;\n                        @media (max-width: 1280px) {\n                            margin: 0 40px;\n                        }\n                        @media (max-width: 768px) {\n                            margin: 0 24px;\n                        }\n                    ",
                                  ]))
                              ),
                              children: [
                                (0, A.jsxs)("div", {
                                  className: (0, C.css)(
                                    l ||
                                      (l = n([
                                        "\n                            display: flex;\n                            align-items: center;\n                            color: #dbdbdb;\n                            gap: 2rem;\n                            @media (max-width: 1280px) {\n                                gap: 1rem;\n                            }\n                            @media (max-width: 768px) {\n                                gap: 0.5rem;\n                            }\n                        ",
                                      ]))
                                  ),
                                  children: [
                                    (0, A.jsx)("p", {
                                      className: (0, C.css)(
                                        x ||
                                          (x = n([
                                            "\n                                line-height: 100%;\n                            ",
                                          ]))
                                      ),
                                      children: "THE",
                                    }),
                                    (0, A.jsx)("img", {
                                      src: "/public/phase-1/earth.png",
                                      width: M,
                                    }),
                                    (0, A.jsx)("p", {
                                      className: (0, C.css)(
                                        h ||
                                          (h = n([
                                            "\n                                line-height: 100%;\n                            ",
                                          ]))
                                      ),
                                      children: "LARGEST",
                                    }),
                                  ],
                                }),
                                (0, A.jsxs)("div", {
                                  className: (0, C.css)(
                                    f ||
                                      (f = n([
                                        "\n                            display: flex;\n                            align-items: center;\n                            color: #dbdbdb;\n                            gap: 2rem;\n                            @media (max-width: 1280px) {\n                                gap: 1rem;\n                            }\n                            @media (max-width: 768px) {\n                                gap: 0.5rem;\n                            }\n                        ",
                                      ]))
                                  ),
                                  children: [
                                    (0, A.jsx)("img", {
                                      src: "/public/phase-1/pic2.png",
                                      width: W,
                                    }),
                                    (0, A.jsxs)("div", {
                                      className: (0, C.css)(
                                        g ||
                                          (g = n([
                                            "\n                                width: fit-content;\n                                height: fit-content;\n                                display: flex;\n                                align-items: center;\n                                background: linear-gradient(\n                                    to bottom left,\n                                    rgba(165, 157, 255, 1),\n                                    rgba(233, 233, 233, 1)\n                                );\n                                padding-left: 29px;\n                                padding-right: 29px;\n                                @media (max-width: 1280px) {\n                                    padding-left: 19px;\n                                    padding-right: 19px;\n                                }\n                                @media (max-width: 768px) {\n                                    padding-left: 9px;\n                                    padding-right: 9px;\n                                }\n                            ",
                                          ]))
                                      ),
                                      children: [
                                        (0, A.jsx)("p", {
                                          className: (0, C.css)(
                                            w ||
                                              (w = n([
                                                "\n                                    text-transform: uppercase;\n                                    color: #000;\n                                    line-height: 100%;\n                                ",
                                              ]))
                                          ),
                                          children: "Omnichain",
                                        }),
                                        (0, A.jsx)("video", {
                                          className: (0, C.css)(
                                            b ||
                                              (b = n([
                                                "\n                                    height: ",
                                                "px;\n                                    width: ",
                                                "px;\n                                ",
                                              ])),
                                            B,
                                            B
                                          ),
                                          src: "/public/diamond.mov",
                                          autoPlay: !0,
                                          playsInline: !0,
                                          muted: !0,
                                          loop: !0,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, A.jsx)("p", {
                                  className: (0, C.css)(
                                    v ||
                                      (v = n([
                                        "\n                            font-weight: 700;\n                            color: #dbdbdb;\n                            line-height: 94%;\n                            text-transform: uppercase;\n                        ",
                                      ]))
                                  ),
                                  children: "Data Network",
                                }),
                                (0, A.jsxs)("div", {
                                  className: (0, C.css)(
                                    y ||
                                      (y = n([
                                        "\n                            border-right: 2px solid #b6b6b6;\n                            border-top: 2px solid #b6b6b6;\n                            width: fit-content;\n                            position: relative;\n                            font-size: ",
                                        "px;\n                            margin-left: 16px;\n                        ",
                                      ])),
                                    q
                                  ),
                                  children: [
                                    (0, A.jsx)(
                                      O.motion.p,
                                      {
                                        variants: I,
                                        initial: "enter",
                                        animate: "center",
                                        exit: "exit",
                                        transition: { duration: 0.5 },
                                        className: (0, C.css)(
                                          j ||
                                            (j = n([
                                              "\n                                position: absolute;\n                                color: white;\n                                left: ",
                                              "px;\n                                text-transform: uppercase;\n                                background: linear-gradient(\n                                    91deg,\n                                    #a59dff 15.6%,\n                                    #23a4ba 35.62%,\n                                    #a59dff 65.62%,\n                                    #23a4ba 97.14%\n                                );\n                                background-clip: text;\n                                -webkit-background-clip: text;\n                                -webkit-text-fill-color: transparent;\n                                white-space: nowrap;\n                            ",
                                            ])),
                                          H
                                        ),
                                        children: L[m],
                                      },
                                      m
                                    ),
                                    (0, A.jsx)("p", {
                                      className: (0, C.css)(
                                        z ||
                                          (z = n([
                                            "\n                                visibility: hidden;\n                            ",
                                          ]))
                                      ),
                                      children: "holder",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, A.jsxs)("div", {
                          className: (0, C.css)(
                            S ||
                              (S = n([
                                "\n                    height: 158px;\n                    border-top: 1px solid #1a1a1a;\n                    border-bottom: 1px solid #1a1a1a;\n                    display: flex;\n                    align-items: center;\n                    background-color: #000;\n                    z-index: 2;\n                    padding-left: 72px;\n                    @media (max-width: 1280px) {\n                        padding-left: 40px;\n                    }\n                    @media (max-width: 768px) {\n                        padding-top: 12px;\n                        padding-bottom: 12px;\n                        padding-left: 24px;\n                        flex-direction: column;\n                        justify-content: space-around;\n                        align-items: start;\n                    }\n                ",
                              ]))
                          ),
                          children: [
                            (0, A.jsxs)("p", {
                              className: (0, C.css)(
                                N ||
                                  (N = n([
                                    "\n                        font-size: 24px;\n                        width: 349px;\n                        font-weight: 600;\n                        text-transform: uppercase;\n                        color: #e9e9e9;\n                        line-height: 150%;\n                        letter-spacing: -0.5px;\n                        margin-right: 90px !important;\n                        @media (max-width: 1280px) {\n                            margin-right: 64px !important;\n                        }\n                        @media (max-width: 768px) {\n                            margin-right: 24px !important;\n                        }\n                    ",
                                  ]))
                              ),
                              children: [
                                "An",
                                " ",
                                (0, A.jsx)("b", {
                                  className: (0, C.css)(
                                    k ||
                                      (k = n([
                                        "\n                            color: #a59dff;\n                        ",
                                      ]))
                                  ),
                                  children: "open",
                                }),
                                " ",
                                "stack connecting",
                                " ",
                                (0, A.jsx)("b", {
                                  className: (0, C.css)(
                                    E ||
                                      (E = n([
                                        "\n                            color: #a59dff;\n                        ",
                                      ]))
                                  ),
                                  children: "all",
                                }),
                                " ",
                                "blockchains",
                              ],
                            }),
                            (0, A.jsx)(T.Button, {
                              onClick: function () {
                                return window.open(
                                  "https://app.uniswap.org/#/swap?",
                                  "_blank"
                                );
                              },
                              variant: "contained",
                              sx: {
                                textTransform: "uppercase",
                                fontSize: 16,
                                fontWeight: 500,
                                borderRadius: 99,
                                marginRight: "16px",
                                padding: "10px 32px",
                              },
                              endIcon: (0, A.jsx)(T.Icon, {
                                icon: "link_out_black",
                              }),
                              children: "Buy Now",
                            }),
                          ],
                        }),
                      ],
                    });
                  }
                  function F(n, e, t, i, a, r, o) {
                    try {
                      var s = n[r](o),
                        p = s.value;
                    } catch (n) {
                      return void t(n);
                    }
                    s.done ? e(p) : Promise.resolve(p).then(i, a);
                  }
                  function D(n) {
                    return function () {
                      var e = this,
                        t = arguments;
                      return new Promise(function (i, a) {
                        var r = n.apply(e, t);
                        function o(n) {
                          F(r, i, a, o, s, "next", n);
                        }
                        function s(n) {
                          F(r, i, a, o, s, "throw", n);
                        }
                        o(void 0);
                      });
                    };
                  }
                  function R(n) {
                    return (
                      (R =
                        "function" == typeof Symbol &&
                        "symbol" == typeof Symbol.iterator
                          ? function (n) {
                              return typeof n;
                            }
                          : function (n) {
                              return n &&
                                "function" == typeof Symbol &&
                                n.constructor === Symbol &&
                                n !== Symbol.prototype
                                ? "symbol"
                                : typeof n;
                            }),
                      R(n)
                    );
                  }
                  function _(n) {
                    var e = (function (n, e) {
                      if ("object" != R(n) || !n) return n;
                      var t = n[Symbol.toPrimitive];
                      if (void 0 !== t) {
                        var i = t.call(n, "string");
                        if ("object" != R(i)) return i;
                        throw new TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return String(n);
                    })(n);
                    return "symbol" == R(e) ? e : e + "";
                  }
                  function M(n, e, t) {
                    return (
                      (e = _(e)) in n
                        ? Object.defineProperty(n, e, {
                            value: t,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                          })
                        : (n[e] = t),
                      n
                    );
                  }
                  function W(n, e) {
                    for (var t = 0; t < e.length; t++) {
                      var i = e[t];
                      (i.enumerable = i.enumerable || !1),
                        (i.configurable = !0),
                        "value" in i && (i.writable = !0),
                        Object.defineProperty(n, _(i.key), i);
                    }
                  }
                  function B(n, e, t) {
                    return (
                      e && W(n.prototype, e),
                      t && W(n, t),
                      Object.defineProperty(n, "prototype", { writable: !1 }),
                      n
                    );
                  }
                  function q(n, e) {
                    if (!(n instanceof e))
                      throw new TypeError("Cannot call a class as a function");
                  }
                  var H = m(348),
                    Y = m.n(H);
                  function X(n, e) {
                    var t =
                      ("undefined" != typeof Symbol && n[Symbol.iterator]) ||
                      n["@@iterator"];
                    if (!t) {
                      if (
                        Array.isArray(n) ||
                        (t = (function (n, e) {
                          if (n) {
                            if ("string" == typeof n) return U(n, e);
                            var t = Object.prototype.toString
                              .call(n)
                              .slice(8, -1);
                            return (
                              "Object" === t &&
                                n.constructor &&
                                (t = n.constructor.name),
                              "Map" === t || "Set" === t
                                ? Array.from(n)
                                : "Arguments" === t ||
                                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                    t
                                  )
                                ? U(n, e)
                                : void 0
                            );
                          }
                        })(n)) ||
                        (e && n && "number" == typeof n.length)
                      ) {
                        t && (n = t);
                        var i = 0,
                          a = function () {};
                        return {
                          s: a,
                          n: function () {
                            return i >= n.length
                              ? { done: !0 }
                              : { done: !1, value: n[i++] };
                          },
                          e: function (n) {
                            throw n;
                          },
                          f: a,
                        };
                      }
                      throw new TypeError(
                        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                      );
                    }
                    var r,
                      o = !0,
                      s = !1;
                    return {
                      s: function () {
                        t = t.call(n);
                      },
                      n: function () {
                        var n = t.next();
                        return (o = n.done), n;
                      },
                      e: function (n) {
                        (s = !0), (r = n);
                      },
                      f: function () {
                        try {
                          o || null == t.return || t.return();
                        } finally {
                          if (s) throw r;
                        }
                      },
                    };
                  }
                  function U(n, e) {
                    (null == e || e > n.length) && (e = n.length);
                    for (var t = 0, i = new Array(e); t < e; t++) i[t] = n[t];
                    return i;
                  }
                  var Z = B(function n(e) {
                      q(this, n),
                        M(this, "position", -1),
                        M(this, "cells", []),
                        (this.position = e);
                    }),
                    Q = (function () {
                      return B(
                        function n(e) {
                          var t =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : {},
                            i = t.position,
                            a = t.previousCellPosition;
                          q(this, n),
                            M(this, "DOM", { el: null }),
                            M(this, "position", -1),
                            M(this, "previousCellPosition", -1),
                            M(this, "original", void 0),
                            M(this, "state", void 0),
                            M(this, "color", void 0),
                            M(this, "originalColor", void 0),
                            M(this, "cache", void 0),
                            (this.DOM.el = e),
                            (this.original = this.DOM.el.innerHTML),
                            (this.state = this.original),
                            (this.color = this.originalColor =
                              getComputedStyle(
                                document.documentElement
                              ).getPropertyValue("--color-text")),
                            (this.position = i),
                            (this.previousCellPosition = a);
                        },
                        [
                          {
                            key: "set",
                            value: function (n) {
                              (this.state = n),
                                (this.DOM.el.innerHTML = this.state);
                            },
                          },
                        ]
                      );
                    })(),
                    V = (function () {
                      return B(
                        function n(e) {
                          q(this, n),
                            M(this, "DOM", { el: null }),
                            M(this, "lines", []),
                            M(this, "lettersAndSymbols", [
                              "A",
                              "B",
                              "C",
                              "D",
                              "E",
                              "F",
                              "G",
                              "H",
                              "I",
                              "J",
                              "K",
                              "L",
                              "M",
                              "N",
                              "O",
                              "P",
                              "Q",
                              "R",
                              "S",
                              "T",
                              "U",
                              "V",
                              "W",
                              "X",
                              "Y",
                              "Z",
                              "!",
                              "@",
                              "#",
                              "$",
                              "&",
                              "*",
                              "(",
                              ")",
                              "-",
                              "_",
                              "+",
                              "=",
                              "/",
                              "[",
                              "]",
                              "{",
                              "}",
                              ";",
                              ":",
                              "<",
                              ">",
                              ",",
                              "0",
                              "1",
                              "2",
                              "3",
                              "4",
                              "5",
                              "6",
                              "7",
                              "8",
                              "9",
                            ]),
                            M(this, "totalChars", 0),
                            (this.DOM.el = e);
                          var t = Y()({ target: this.DOM.el, by: "lines" });
                          t.forEach(function (n) {
                            return Y()({ target: n.words });
                          });
                          var i,
                            s,
                            p = X(t[0].lines.entries());
                          try {
                            for (p.s(); !(i = p.n()).done; ) {
                              var d,
                                c = o(i.value, 2),
                                l = c[0],
                                x = c[1],
                                h = new Z(l),
                                m = [],
                                u = 0,
                                f = X(x);
                              try {
                                for (f.s(); !(d = f.n()).done; )
                                  for (
                                    var g = d.value,
                                      w = 0,
                                      b =
                                        (function (n) {
                                          if (Array.isArray(n)) return a(n);
                                        })((s = g.querySelectorAll(".char"))) ||
                                        (function (n) {
                                          if (
                                            ("undefined" != typeof Symbol &&
                                              null != n[Symbol.iterator]) ||
                                            null != n["@@iterator"]
                                          )
                                            return Array.from(n);
                                        })(s) ||
                                        r(s) ||
                                        (function () {
                                          throw new TypeError(
                                            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                                          );
                                        })();
                                    w < b.length;
                                    w++
                                  ) {
                                    var v = b[w];
                                    m.push(
                                      new Q(v, {
                                        position: u,
                                        previousCellPosition:
                                          0 === u ? -1 : u - 1,
                                      })
                                    ),
                                      ++u;
                                  }
                              } catch (n) {
                                f.e(n);
                              } finally {
                                f.f();
                              }
                              (h.cells = m),
                                this.lines.push(h),
                                (this.totalChars += u);
                            }
                          } catch (n) {
                            p.e(n);
                          } finally {
                            p.f();
                          }
                        },
                        [
                          {
                            key: "clearCells",
                            value: function () {
                              var n,
                                e = X(this.lines);
                              try {
                                for (e.s(); !(n = e.n()).done; ) {
                                  var t,
                                    i = X(n.value.cells);
                                  try {
                                    for (i.s(); !(t = i.n()).done; )
                                      t.value.set("&nbsp;");
                                  } catch (n) {
                                    i.e(n);
                                  } finally {
                                    i.f();
                                  }
                                }
                              } catch (n) {
                                e.e(n);
                              } finally {
                                e.f();
                              }
                            },
                          },
                          {
                            key: "getRandomChar",
                            value: function () {
                              return this.lettersAndSymbols[
                                Math.floor(
                                  Math.random() * this.lettersAndSymbols.length
                                )
                              ];
                            },
                          },
                          {
                            key: "trigger",
                            value: function () {
                              var n = this;
                              if (!this.isAnimating) {
                                this.isAnimating = !0;
                                var e = 0;
                                this.clearCells();
                                var t,
                                  i = function t(i, a) {
                                    var r =
                                      arguments.length > 2 &&
                                      void 0 !== arguments[2]
                                        ? arguments[2]
                                        : 0;
                                    (a.cache = {
                                      state: a.state,
                                      color: a.color,
                                    }),
                                      29 === r
                                        ? ((a.color = a.originalColor),
                                          (a.DOM.el.style.color = a.color),
                                          a.set(a.original),
                                          ++e === n.totalChars &&
                                            (n.isAnimating = !1))
                                        : 0 === a.position
                                        ? ((a.color = [
                                            "#23A4BA",
                                            "#A59DFF",
                                            "#23A4BA",
                                          ][Math.floor(3 * Math.random())]),
                                          (a.DOM.el.style.color = a.color),
                                          a.set(
                                            r < 9
                                              ? ["*", "-", "'", '"'][
                                                  Math.floor(4 * Math.random())
                                                ]
                                              : n.getRandomChar()
                                          ))
                                        : (a.set(
                                            i.cells[a.previousCellPosition]
                                              .cache.state
                                          ),
                                          (a.color =
                                            i.cells[
                                              a.previousCellPosition
                                            ].cache.color),
                                          (a.DOM.el.style.color = a.color)),
                                      "&nbsp;" != a.cache.state && ++r,
                                      r < 30 &&
                                        setTimeout(function () {
                                          return t(i, a, r);
                                        }, 10);
                                  },
                                  a = X(this.lines);
                                try {
                                  var r = function () {
                                    var n,
                                      e = t.value,
                                      a = X(e.cells);
                                    try {
                                      var r = function () {
                                        var t = n.value;
                                        setTimeout(function () {
                                          return i(e, t);
                                        }, 200 * (e.position + 1));
                                      };
                                      for (a.s(); !(n = a.n()).done; ) r();
                                    } catch (n) {
                                      a.e(n);
                                    } finally {
                                      a.f();
                                    }
                                  };
                                  for (a.s(); !(t = a.n()).done; ) r();
                                } catch (n) {
                                  a.e(n);
                                } finally {
                                  a.f();
                                }
                              }
                            },
                          },
                        ]
                      );
                    })();
                  function $(n, e) {
                    var t = Object.keys(n);
                    if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(n);
                      e &&
                        (i = i.filter(function (e) {
                          return Object.getOwnPropertyDescriptor(
                            n,
                            e
                          ).enumerable;
                        })),
                        t.push.apply(t, i);
                    }
                    return t;
                  }
                  function K(n) {
                    for (var e = 1; e < arguments.length; e++) {
                      var t = null != arguments[e] ? arguments[e] : {};
                      e % 2
                        ? $(Object(t), !0).forEach(function (e) {
                            M(n, e, t[e]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            n,
                            Object.getOwnPropertyDescriptors(t)
                          )
                        : $(Object(t)).forEach(function (e) {
                            Object.defineProperty(
                              n,
                              e,
                              Object.getOwnPropertyDescriptor(t, e)
                            );
                          });
                    }
                    return n;
                  }
                  function G(n) {
                    var t = (0, e.useRef)(null);
                    return (
                      (0, e.useEffect)(function () {
                        var n = t.current;
                        if (n) {
                          var e = new IntersectionObserver(
                            function (t) {
                              t[0].isIntersecting &&
                                ((n.style.opacity = 1),
                                new V(n).trigger(),
                                e.disconnect());
                            },
                            { rootMargin: "0px", threshold: 0.01 }
                          );
                          return (
                            e.observe(n),
                            function () {
                              e.disconnect();
                            }
                          );
                        }
                      }, []),
                      (0, A.jsx)(
                        "p",
                        K(
                          K({ ref: t }, n),
                          {},
                          { style: { opacity: 0 }, children: n.children }
                        )
                      )
                    );
                  }
                  var J,
                    nn,
                    en,
                    tn,
                    an,
                    rn,
                    on,
                    sn,
                    pn,
                    dn,
                    cn,
                    ln = m(89),
                    xn = m(557);
                  function hn(n, t) {
                    (0, e.useEffect)(
                      function () {
                        if (t) {
                          var e = new IntersectionObserver(
                            function (t) {
                              t[0].isIntersecting &&
                                (xn.emitter.emit("lazyLoadPhase", n),
                                e.disconnect());
                            },
                            { rootMargin: "0px", threshold: 0.01 }
                          );
                          return (
                            e.observe(t.current),
                            function () {
                              e.disconnect();
                            }
                          );
                        }
                      },
                      [n]
                    );
                  }
                  function mn() {
                    var t = (0, e.useRef)(null),
                      i = (0, e.useRef)(null);
                    hn(4, i);
                    var a,
                      r,
                      o,
                      s,
                      p = (0, ln.useQuery)({
                        queryKey: ["ascii-hash-10"],
                        queryFn:
                          ((a = D(
                            regeneratorRuntime.mark(function n() {
                              return regeneratorRuntime.wrap(function (n) {
                                for (;;)
                                  switch ((n.prev = n.next)) {
                                    case 0:
                                      return n.abrupt(
                                        "return",
                                        fetch("/public/ascii-10.txt").then(
                                          function (n) {
                                            return n.text();
                                          }
                                        )
                                      );
                                    case 1:
                                    case "end":
                                      return n.stop();
                                  }
                              }, n);
                            })
                          )),
                          function () {
                            return a.apply(this, arguments);
                          }),
                      }),
                      d = p.data,
                      c =
                        ((r = [
                          [
                            1024,
                            {
                              canvasLineLength: 263,
                              canvasLineWidth: 8,
                              canvasSize: 526,
                            },
                          ],
                          [
                            768,
                            {
                              canvasLineLength: 170,
                              canvasLineWidth: 6,
                              canvasSize: 348,
                            },
                          ],
                          [
                            0,
                            {
                              canvasLineLength: 120,
                              canvasLineWidth: 4,
                              canvasSize: 261,
                            },
                          ],
                        ]),
                        (o = window.screen.availWidth),
                        (s = r.find(function (n) {
                          return o >= n[0];
                        }))
                          ? s[1]
                          : r[r.length - 1][1]),
                      l = c.canvasLineLength,
                      x = c.canvasLineWidth,
                      h = c.canvasSize;
                    return (
                      (0, e.useEffect)(function () {
                        var n = t.current,
                          e = n.getContext("2d"),
                          i = n.width / 2,
                          a = n.height / 2,
                          r = l,
                          o = e.createLinearGradient(0, 0, 0, n.height);
                        o.addColorStop(0, "#A59DFF"),
                          o.addColorStop(0.5, "#C7C3F4"),
                          o.addColorStop(0.8, "#E9E9E9"),
                          o.addColorStop(1, "#E9E9E9"),
                          (e.strokeStyle = o),
                          (e.lineWidth = x),
                          e.beginPath();
                        for (var s = 0; s < 23; s++) {
                          var p = ((2 * Math.PI) / 23) * s + 1.5 * Math.PI;
                          e.moveTo(i, a),
                            e.lineTo(i + r * Math.cos(p), a + r * Math.sin(p));
                        }
                        e.stroke();
                      }, []),
                      (0, A.jsxs)("section", {
                        ref: i,
                        className: (0, C.css)(
                          J ||
                            (J = n([
                              "\n                padding: 96px 72px;\n                @media (max-width: 1280px) {\n                    padding: 72px 48px;\n                }\n                @media (max-width: 1024px) {\n                    padding: 48px 32px;\n                }\n                @media (max-width: 768px) {\n                    padding: 32px 24px;\n                }\n                background-color: #000;\n                position: relative;\n                overflow: hidden;\n                border-top: 1px solid #1a1a1a;\n            ",
                            ]))
                        ),
                        children: [
                          (0, A.jsx)("pre", {
                            id: "ascii-bg-4",
                            className: (0, C.css)(
                              nn ||
                                (nn = n([
                                  "\n                    color: #404040;\n                    z-index: 1;\n                    position: absolute;\n                    width: 1619px;\n                    height: 1274px;\n                    top: 240px;\n                    left: 50%;\n                    transform: translateX(calc(-50% + 120px));\n                    font-size: 9px;\n                    @media (max-width: 1280px) {\n                        font-size: 8px;\n                        width: 100%;\n                        left: 0;\n                        top: 180px;\n                        height: auto;\n                        transform: translateX(calc(-10%));\n                    }\n                    @media (max-width: 1024px) {\n                        font-size: 6px;\n                        transform: unset;\n                        top: 120px;\n                    }\n                    @media (max-width: 768px) {\n                        font-size: 5px;\n                        top: 90px;\n                    }\n                    @media (max-width: 568px) {\n                        font-size: 4px;\n                        top: 60px;\n                    }\n                    @media (max-width: 468px) {\n                        font-size: 3px;\n                        top: 30px;\n                    }\n                ",
                                ]))
                            ),
                            children: d,
                          }),
                          (0, A.jsxs)("p", {
                            className: (0, C.css)(
                              en ||
                                (en = n([
                                  "\n                    color: #e9e9e9;\n                    font-size: 86px;\n                    @media (max-width: 1280px) {\n                        font-size: 72px;\n                    }\n                    @media (max-width: 1024px) {\n                        font-size: 50px;\n                    }\n                    @media (max-width: 768px) {\n                        font-size: 36px;\n                    }\n                    font-weight: 600;\n                    line-height: 130%;\n                    text-transform: uppercase;\n                    position: relative;\n                    max-width: 1339px;\n                    z-index: 2;\n                ",
                                ]))
                            ),
                            children: [
                              (0, A.jsx)("b", {
                                className: (0, C.css)(
                                  tn ||
                                    (tn = n([
                                      "\n                        color: #a59dff;\n                    ",
                                    ]))
                                ),
                                children: "Data",
                              }),
                              " ",
                              "is the alchemy of",
                              " ",
                              (0, A.jsx)("b", {
                                className: (0, C.css)(
                                  an ||
                                    (an = n([
                                      "\n                        color: #23a4ba;\n                    ",
                                    ]))
                                ),
                                children: "AI",
                              }),
                              ". It turns stone into gold",
                            ],
                          }),
                          (0, A.jsx)("div", {
                            className: (0, C.css)(
                              rn ||
                                (rn = n([
                                  "\n                    display: flex;\n                    justify-content: space-around;\n                    align-items: center;\n                    position: relative;\n                    z-index: 2;\n                    margin-top: 100px;\n                    margin-bottom: 140px;\n                    @media (max-width: 1280px) {\n                        margin-top: 90px;\n                        margin-bottom: 90px;\n                    }\n                ",
                                ]))
                            ),
                            children: (0, A.jsx)("canvas", {
                              ref: t,
                              width: h,
                              height: h,
                            }),
                          }),
                          (0, A.jsxs)("div", {
                            className: (0, C.css)(
                              on ||
                                (on = n([
                                  "\n                    color: #e9e9e9;\n                    font-size: 34px;\n                    @media (max-width: 1024px) {\n                        font-size: 24px;\n                    }\n                    @media (max-width: 768px) {\n                        font-size: 18px;\n                    }\n                ",
                                ]))
                            ),
                            children: [
                              (0, A.jsxs)(O.motion.div, {
                                initial: { opacity: 0, y: 50 },
                                transition: { duration: 0.5, ease: "easeOut" },
                                viewport: { once: !0 },
                                whileInView: { opacity: 1, y: 0 },
                                className: (0, C.css)(
                                  sn ||
                                    (sn = n([
                                      "\n                        margin-bottom: 32px !important;\n                        position: relative;\n                        z-index: 2;\n                    ",
                                    ]))
                                ),
                                children: [
                                  "In the era of artificial intelligence, blockchain data serves as a crucial public data source that is essential for achieving consensus in the future society. Nevertheless, the existence of numerous chains has resulted in challenges with fragmentation, which presents a challenge in fully harnessing the potential of public data.",
                                  " ",
                                  (0, A.jsx)(G, {
                                    className: (0, C.css)(
                                      pn ||
                                        (pn = n([
                                          "\n                            display: inline;\n                        ",
                                        ]))
                                    ),
                                    children:
                                      "The absence of standardized protocols further exacerbates the confusion and inefficiency.",
                                  }),
                                ],
                              }),
                              (0, A.jsxs)(O.motion.div, {
                                initial: { opacity: 0, y: 50 },
                                transition: { duration: 0.5, ease: "easeOut" },
                                viewport: { once: !0 },
                                whileInView: { opacity: 1, y: 0 },
                                className: (0, C.css)(
                                  dn ||
                                    (dn = n([
                                      "\n                        margin-bottom: 32px !important;\n                        position: relative;\n                        z-index: 2;\n                    ",
                                    ]))
                                ),
                                children: [
                                  "Chainbase's primary objective is to offer a unique and decentralized Layer 1 infrastructure that directly addresses the problem of interoperability across various blockchain networks.",
                                  " ",
                                  (0, A.jsx)(G, {
                                    className: (0, C.css)(
                                      cn ||
                                        (cn = n([
                                          "\n                            display: inline;\n                        ",
                                        ]))
                                    ),
                                    children:
                                      "This architecture will facilitate the utilization of the full capabilities of blockchain data by eliminating any constraints.",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      })
                    );
                  }
                  function un(n, e) {
                    for (var t = 0; t < e.length; t++) {
                      var i = e[t];
                      (i.enumerable = i.enumerable || !1),
                        (i.configurable = !0),
                        "value" in i && (i.writable = !0),
                        Object.defineProperty(n, i.key, i);
                    }
                  }
                  function fn(n, e, t) {
                    return e && un(n.prototype, e), t && un(n, t), n;
                  }
                  function gn(n, e, t) {
                    return (
                      e in n
                        ? Object.defineProperty(n, e, {
                            value: t,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                          })
                        : (n[e] = t),
                      n
                    );
                  }
                  function wn(n, e) {
                    var t = Object.keys(n);
                    if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(n);
                      e &&
                        (i = i.filter(function (e) {
                          return Object.getOwnPropertyDescriptor(
                            n,
                            e
                          ).enumerable;
                        })),
                        t.push.apply(t, i);
                    }
                    return t;
                  }
                  function bn(n) {
                    for (var e = 1; e < arguments.length; e++) {
                      var t = null != arguments[e] ? arguments[e] : {};
                      e % 2
                        ? wn(Object(t), !0).forEach(function (e) {
                            gn(n, e, t[e]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            n,
                            Object.getOwnPropertyDescriptors(t)
                          )
                        : wn(Object(t)).forEach(function (e) {
                            Object.defineProperty(
                              n,
                              e,
                              Object.getOwnPropertyDescriptor(t, e)
                            );
                          });
                    }
                    return n;
                  }
                  function vn(n, e) {
                    return (
                      (function (n) {
                        if (Array.isArray(n)) return n;
                      })(n) ||
                      (function (n, e) {
                        if (
                          "undefined" != typeof Symbol &&
                          Symbol.iterator in Object(n)
                        ) {
                          var t = [],
                            i = !0,
                            a = !1,
                            r = void 0;
                          try {
                            for (
                              var o, s = n[Symbol.iterator]();
                              !(i = (o = s.next()).done) &&
                              (t.push(o.value), !e || t.length !== e);
                              i = !0
                            );
                          } catch (n) {
                            (a = !0), (r = n);
                          } finally {
                            try {
                              i || null == s.return || s.return();
                            } finally {
                              if (a) throw r;
                            }
                          }
                          return t;
                        }
                      })(n, e) ||
                      jn(n, e) ||
                      (function () {
                        throw new TypeError(
                          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                        );
                      })()
                    );
                  }
                  function yn(n) {
                    return (
                      (function (n) {
                        if (Array.isArray(n)) return zn(n);
                      })(n) ||
                      (function (n) {
                        if (
                          "undefined" != typeof Symbol &&
                          Symbol.iterator in Object(n)
                        )
                          return Array.from(n);
                      })(n) ||
                      jn(n) ||
                      (function () {
                        throw new TypeError(
                          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                        );
                      })()
                    );
                  }
                  function jn(n, e) {
                    if (n) {
                      if ("string" == typeof n) return zn(n, e);
                      var t = Object.prototype.toString.call(n).slice(8, -1);
                      return (
                        "Object" === t &&
                          n.constructor &&
                          (t = n.constructor.name),
                        "Map" === t || "Set" === t
                          ? Array.from(n)
                          : "Arguments" === t ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                          ? zn(n, e)
                          : void 0
                      );
                    }
                  }
                  function zn(n, e) {
                    (null == e || e > n.length) && (e = n.length);
                    for (var t = 0, i = new Array(e); t < e; t++) i[t] = n[t];
                    return i;
                  }
                  function Sn(n, e) {
                    return Object.getOwnPropertyNames(Object(n)).reduce(
                      function (t, i) {
                        var a = Object.getOwnPropertyDescriptor(Object(n), i),
                          r = Object.getOwnPropertyDescriptor(Object(e), i);
                        return Object.defineProperty(t, i, r || a);
                      },
                      {}
                    );
                  }
                  function Nn(n) {
                    return "string" == typeof n;
                  }
                  function kn(n) {
                    return Array.isArray(n);
                  }
                  function En() {
                    var n,
                      e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {},
                      t = Sn(e);
                    return (
                      void 0 !== t.types
                        ? (n = t.types)
                        : void 0 !== t.split && (n = t.split),
                      void 0 !== n &&
                        (t.types = (Nn(n) || kn(n) ? String(n) : "")
                          .split(",")
                          .map(function (n) {
                            return String(n).trim();
                          })
                          .filter(function (n) {
                            return /((line)|(word)|(char))/i.test(n);
                          })),
                      (t.absolute || t.position) &&
                        (t.absolute =
                          t.absolute || /absolute/.test(e.position)),
                      t
                    );
                  }
                  function Cn(n) {
                    var e = Nn(n) || kn(n) ? String(n) : "";
                    return {
                      none: !e,
                      lines: /line/i.test(e),
                      words: /word/i.test(e),
                      chars: /char/i.test(e),
                    };
                  }
                  function Tn(n) {
                    return null !== n && "object" == typeof n;
                  }
                  function On(n) {
                    return Tn(n) && /^(1|3|11)$/.test(n.nodeType);
                  }
                  function An(n) {
                    return kn(n)
                      ? n
                      : null == n
                      ? []
                      : (function (n) {
                          return (
                            Tn(n) &&
                            (function (n) {
                              return (
                                "number" == typeof n && n > -1 && n % 1 == 0
                              );
                            })(n.length)
                          );
                        })(n)
                      ? Array.prototype.slice.call(n)
                      : [n];
                  }
                  function In(n) {
                    var e = n;
                    return (
                      Nn(n) &&
                        (e = /^(#[a-z]\w+)$/.test(n.trim())
                          ? document.getElementById(n.trim().slice(1))
                          : document.querySelectorAll(n)),
                      An(e).reduce(function (n, e) {
                        return [].concat(yn(n), yn(An(e).filter(On)));
                      }, [])
                    );
                  }
                  !(function () {
                    function n() {
                      for (var n = arguments.length, e = 0; e < n; e++) {
                        var t =
                          e < 0 || arguments.length <= e
                            ? void 0
                            : arguments[e];
                        1 === t.nodeType || 11 === t.nodeType
                          ? this.appendChild(t)
                          : this.appendChild(
                              document.createTextNode(String(t))
                            );
                      }
                    }
                    function e() {
                      for (; this.lastChild; ) this.removeChild(this.lastChild);
                      arguments.length && this.append.apply(this, arguments);
                    }
                    function t() {
                      for (
                        var n = this.parentNode,
                          e = arguments.length,
                          t = new Array(e),
                          i = 0;
                        i < e;
                        i++
                      )
                        t[i] = arguments[i];
                      var a = t.length;
                      if (n)
                        for (a || n.removeChild(this); a--; ) {
                          var r = t[a];
                          "object" != typeof r
                            ? (r = this.ownerDocument.createTextNode(r))
                            : r.parentNode && r.parentNode.removeChild(r),
                            a
                              ? n.insertBefore(this.previousSibling, r)
                              : n.replaceChild(r, this);
                        }
                    }
                    "undefined" != typeof Element &&
                      (Element.prototype.append ||
                        ((Element.prototype.append = n),
                        (DocumentFragment.prototype.append = n)),
                      Element.prototype.replaceChildren ||
                        ((Element.prototype.replaceChildren = e),
                        (DocumentFragment.prototype.replaceChildren = e)),
                      Element.prototype.replaceWith ||
                        ((Element.prototype.replaceWith = t),
                        (DocumentFragment.prototype.replaceWith = t)));
                  })();
                  var Ln = Object.entries,
                    Pn = "_splittype",
                    Fn = {},
                    Dn = 0;
                  function Rn(n, e, t) {
                    if (!Tn(n))
                      return (
                        console.warn("[data.set] owner is not an object"), null
                      );
                    var i = n[Pn] || (n[Pn] = ++Dn),
                      a = Fn[i] || (Fn[i] = {});
                    return (
                      void 0 === t
                        ? e &&
                          Object.getPrototypeOf(e) === Object.prototype &&
                          (Fn[i] = bn(bn({}, a), e))
                        : void 0 !== e && (a[e] = t),
                      t
                    );
                  }
                  function _n(n, e) {
                    var t = Tn(n) ? n[Pn] : null,
                      i = (t && Fn[t]) || {};
                    return void 0 === e ? i : i[e];
                  }
                  function Mn(n) {
                    var e = n && n[Pn];
                    e && (delete n[e], delete Fn[e]);
                  }
                  var Wn = "\\ud800-\\udfff",
                    Bn = "\\u0300-\\u036f\\ufe20-\\ufe23",
                    qn = "\\u20d0-\\u20f0",
                    Hn = "\\ufe0e\\ufe0f",
                    Yn = "[".concat(Wn, "]"),
                    Xn = "[".concat(Bn).concat(qn, "]"),
                    Un = "\\ud83c[\\udffb-\\udfff]",
                    Zn = "(?:".concat(Xn, "|").concat(Un, ")"),
                    Qn = "[^".concat(Wn, "]"),
                    Vn = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                    $n = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                    Kn = "\\u200d",
                    Gn = "".concat(Zn, "?"),
                    Jn = "[".concat(Hn, "]?"),
                    ne =
                      Jn +
                      Gn +
                      "(?:" +
                      Kn +
                      "(?:" +
                      [Qn, Vn, $n].join("|") +
                      ")" +
                      Jn +
                      Gn +
                      ")*",
                    ee = "(?:".concat(
                      ["".concat(Qn).concat(Xn, "?"), Xn, Vn, $n, Yn].join("|"),
                      "\n)"
                    ),
                    te = RegExp(
                      ""
                        .concat(Un, "(?=")
                        .concat(Un, ")|")
                        .concat(ee)
                        .concat(ne),
                      "g"
                    ),
                    ie = RegExp("[".concat([Kn, Wn, Bn, qn, Hn].join(""), "]"));
                  function ae(n) {
                    return ie.test(n);
                  }
                  function re(n) {
                    var e,
                      t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : "";
                    return (n = null == (e = n) ? "" : String(e)) &&
                      Nn(n) &&
                      !t &&
                      ae(n)
                      ? (function (n) {
                          return ae(n)
                            ? (function (n) {
                                return n.match(te) || [];
                              })(n)
                            : (function (n) {
                                return n.split("");
                              })(n);
                        })(n)
                      : n.split(t);
                  }
                  function oe(n, e) {
                    var t = document.createElement(n);
                    return e
                      ? (Object.keys(e).forEach(function (n) {
                          var i = e[n],
                            a = Nn(i) ? i.trim() : i;
                          null !== a &&
                            "" !== a &&
                            ("children" === n
                              ? t.append.apply(t, yn(An(a)))
                              : t.setAttribute(n, a));
                        }),
                        t)
                      : t;
                  }
                  var se = {
                    splitClass: "",
                    lineClass: "line",
                    wordClass: "word",
                    charClass: "char",
                    types: ["lines", "words", "chars"],
                    absolute: !1,
                    tagName: "div",
                  };
                  function pe(n, e) {
                    var t = n.nodeType,
                      i = { words: [], chars: [] };
                    if (!/(1|3|11)/.test(t)) return i;
                    if (3 === t && /\S/.test(n.nodeValue))
                      return (function (n, e) {
                        var t,
                          i = Cn((e = Sn(se, e)).types),
                          a = e.tagName,
                          r = n.nodeValue,
                          o = document.createDocumentFragment(),
                          s = [];
                        return (
                          /^\s/.test(r) && o.append(" "),
                          (t = (function (n) {
                            var e =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : " ";
                            return (n ? String(n) : "")
                              .trim()
                              .replace(/\s+/g, " ")
                              .split(e);
                          })(r).reduce(function (n, t, r, p) {
                            var d, c;
                            return (
                              i.chars &&
                                (c = re(t).map(function (n) {
                                  var t = oe(a, {
                                    class: ""
                                      .concat(e.splitClass, " ")
                                      .concat(e.charClass),
                                    style: "display: inline-block;",
                                    children: n,
                                  });
                                  return (
                                    Rn(t, "isChar", !0),
                                    (s = [].concat(yn(s), [t])),
                                    t
                                  );
                                })),
                              i.words || i.lines
                                ? (Rn(
                                    (d = oe(a, {
                                      class: ""
                                        .concat(e.wordClass, " ")
                                        .concat(e.splitClass),
                                      style: "display: inline-block; ".concat(
                                        i.words && e.absolute
                                          ? "position: relative;"
                                          : ""
                                      ),
                                      children: i.chars ? c : t,
                                    })),
                                    {
                                      isWord: !0,
                                      isWordStart: !0,
                                      isWordEnd: !0,
                                    }
                                  ),
                                  o.appendChild(d))
                                : c.forEach(function (n) {
                                    o.appendChild(n);
                                  }),
                              r < p.length - 1 && o.append(" "),
                              i.words ? n.concat(d) : n
                            );
                          }, [])),
                          /\s$/.test(r) && o.append(" "),
                          n.replaceWith(o),
                          { words: t, chars: s }
                        );
                      })(n, e);
                    var a = An(n.childNodes);
                    if (a.length && (Rn(n, "isSplit", !0), !_n(n).isRoot)) {
                      (n.style.display = "inline-block"),
                        (n.style.position = "relative");
                      var r = n.nextSibling,
                        o = n.previousSibling,
                        s = n.textContent || "",
                        p = r ? r.textContent : " ",
                        d = o ? o.textContent : " ";
                      Rn(n, {
                        isWordEnd: /\s$/.test(s) || /^\s/.test(p),
                        isWordStart: /^\s/.test(s) || /\s$/.test(d),
                      });
                    }
                    return a.reduce(function (n, t) {
                      var i = pe(t, e),
                        a = i.words,
                        r = i.chars;
                      return {
                        words: [].concat(yn(n.words), yn(a)),
                        chars: [].concat(yn(n.chars), yn(r)),
                      };
                    }, i);
                  }
                  function de(n) {
                    _n(n).isWord
                      ? (Mn(n), n.replaceWith.apply(n, yn(n.childNodes)))
                      : An(n.children).forEach(function (n) {
                          return de(n);
                        });
                  }
                  function ce(n, e, t) {
                    var i,
                      a,
                      r,
                      o = Cn(e.types),
                      s = e.tagName,
                      p = n.getElementsByTagName("*"),
                      d = [],
                      c = [],
                      l = null,
                      x = [],
                      h = n.parentElement,
                      m = n.nextElementSibling,
                      u = document.createDocumentFragment(),
                      f = window.getComputedStyle(n),
                      g = f.textAlign,
                      w = 0.2 * parseFloat(f.fontSize);
                    return (
                      e.absolute &&
                        ((r = {
                          left: n.offsetLeft,
                          top: n.offsetTop,
                          width: n.offsetWidth,
                        }),
                        (a = n.offsetWidth),
                        (i = n.offsetHeight),
                        Rn(n, {
                          cssWidth: n.style.width,
                          cssHeight: n.style.height,
                        })),
                      An(p).forEach(function (i) {
                        var a = i.parentElement === n,
                          r = (function (n, e, t, i) {
                            if (!t.absolute)
                              return { top: e ? n.offsetTop : null };
                            var a = n.offsetParent,
                              r = vn(i, 2),
                              o = r[0],
                              s = r[1],
                              p = 0,
                              d = 0;
                            if (a && a !== document.body) {
                              var c = a.getBoundingClientRect();
                              (p = c.x + o), (d = c.y + s);
                            }
                            var l = n.getBoundingClientRect(),
                              x = l.width,
                              h = l.height,
                              m = l.x;
                            return {
                              width: x,
                              height: h,
                              top: l.y + s - d,
                              left: m + o - p,
                            };
                          })(i, a, e, t),
                          s = r.width,
                          p = r.height,
                          x = r.top,
                          h = r.left;
                        /^br$/i.test(i.nodeName) ||
                          (o.lines &&
                            a &&
                            ((null === l || x - l >= w) &&
                              ((l = x), d.push((c = []))),
                            c.push(i)),
                          e.absolute &&
                            Rn(i, { top: x, left: h, width: s, height: p }));
                      }),
                      h && h.removeChild(n),
                      o.lines &&
                        ((x = d.map(function (n) {
                          var t = oe(s, {
                            class: ""
                              .concat(e.splitClass, " ")
                              .concat(e.lineClass),
                            style: "display: block; text-align: ".concat(
                              g,
                              "; width: 100%;"
                            ),
                          });
                          Rn(t, "isLine", !0);
                          var i = { height: 0, top: 1e4 };
                          return (
                            u.appendChild(t),
                            n.forEach(function (n, e, a) {
                              var r = _n(n),
                                o = r.isWordEnd,
                                s = r.top,
                                p = r.height,
                                d = a[e + 1];
                              (i.height = Math.max(i.height, p)),
                                (i.top = Math.min(i.top, s)),
                                t.appendChild(n),
                                o && _n(d).isWordStart && t.append(" ");
                            }),
                            e.absolute &&
                              Rn(t, { height: i.height, top: i.top }),
                            t
                          );
                        })),
                        o.words || de(u),
                        n.replaceChildren(u)),
                      e.absolute &&
                        ((n.style.width = "".concat(n.style.width || a, "px")),
                        (n.style.height = "".concat(i, "px")),
                        An(p).forEach(function (n) {
                          var e = _n(n),
                            t = e.isLine,
                            i = e.top,
                            a = e.left,
                            o = e.width,
                            s = e.height,
                            p = _n(n.parentElement),
                            d = !t && p.isLine;
                          (n.style.top = "".concat(d ? i - p.top : i, "px")),
                            (n.style.left = "".concat(
                              t ? r.left : a - (d ? r.left : 0),
                              "px"
                            )),
                            (n.style.height = "".concat(s, "px")),
                            (n.style.width = "".concat(t ? r.width : o, "px")),
                            (n.style.position = "absolute");
                        })),
                      h && (m ? h.insertBefore(n, m) : h.appendChild(n)),
                      x
                    );
                  }
                  var le = Sn(se, {}),
                    xe = (function () {
                      function n(e, t) {
                        !(function (n, e) {
                          if (!(n instanceof e))
                            throw new TypeError(
                              "Cannot call a class as a function"
                            );
                        })(this, n),
                          (this.isSplit = !1),
                          (this.settings = Sn(le, En(t))),
                          (this.elements = In(e)),
                          this.split();
                      }
                      return (
                        fn(n, null, [
                          {
                            key: "clearData",
                            value: function () {
                              Object.keys(Fn).forEach(function (n) {
                                delete Fn[n];
                              });
                            },
                          },
                          {
                            key: "setDefaults",
                            value: function (n) {
                              return (le = Sn(le, En(n))), se;
                            },
                          },
                          {
                            key: "revert",
                            value: function (n) {
                              In(n).forEach(function (n) {
                                var e = _n(n),
                                  t = e.isSplit,
                                  i = e.html,
                                  a = e.cssWidth,
                                  r = e.cssHeight;
                                t &&
                                  ((n.innerHTML = i),
                                  (n.style.width = a || ""),
                                  (n.style.height = r || ""),
                                  Mn(n));
                              });
                            },
                          },
                          {
                            key: "create",
                            value: function (e, t) {
                              return new n(e, t);
                            },
                          },
                          {
                            key: "data",
                            get: function () {
                              return Fn;
                            },
                          },
                          {
                            key: "defaults",
                            get: function () {
                              return le;
                            },
                            set: function (n) {
                              le = Sn(le, En(n));
                            },
                          },
                        ]),
                        fn(n, [
                          {
                            key: "split",
                            value: function (n) {
                              var e = this;
                              this.revert(),
                                this.elements.forEach(function (n) {
                                  Rn(n, "html", n.innerHTML);
                                }),
                                (this.lines = []),
                                (this.words = []),
                                (this.chars = []);
                              var t = [window.pageXOffset, window.pageYOffset];
                              void 0 !== n &&
                                (this.settings = Sn(this.settings, En(n)));
                              var i = Cn(this.settings.types);
                              i.none ||
                                (this.elements.forEach(function (n) {
                                  Rn(n, "isRoot", !0);
                                  var t = pe(n, e.settings),
                                    i = t.words,
                                    a = t.chars;
                                  (e.words = [].concat(yn(e.words), yn(i))),
                                    (e.chars = [].concat(yn(e.chars), yn(a)));
                                }),
                                this.elements.forEach(function (n) {
                                  if (i.lines || e.settings.absolute) {
                                    var a = ce(n, e.settings, t);
                                    e.lines = [].concat(yn(e.lines), yn(a));
                                  }
                                }),
                                (this.isSplit = !0),
                                window.scrollTo(t[0], t[1]),
                                Ln(Fn).forEach(function (n) {
                                  var e = vn(n, 2),
                                    t = e[0],
                                    i = e[1],
                                    a = i.isRoot,
                                    r = i.isSplit;
                                  (a && r) || ((Fn[t] = null), delete Fn[t]);
                                }));
                            },
                          },
                          {
                            key: "revert",
                            value: function () {
                              this.isSplit &&
                                ((this.lines = null),
                                (this.words = null),
                                (this.chars = null),
                                (this.isSplit = !1)),
                                n.revert(this.elements);
                            },
                          },
                        ]),
                        n
                      );
                    })(),
                    he = (function () {
                      return B(
                        function n(e) {
                          var t =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : {};
                          if ((q(this, n), !(e && e instanceof HTMLElement)))
                            throw new Error("Invalid text element provided.");
                          var i = t.resizeCallback,
                            a = t.splitTypeTypes;
                          (this.textElement = e),
                            (this.onResize = "function" == typeof i ? i : null);
                          var r = a ? { types: a } : {};
                          (this.splitText = new xe(this.textElement, r)),
                            this.onResize && this.initResizeObserver();
                        },
                        [
                          {
                            key: "initResizeObserver",
                            value: function () {
                              var n = this;
                              this.previousContainerWidth = null;
                              var e,
                                t,
                                i,
                                a = new ResizeObserver(
                                  ((e = function (e) {
                                    return n.handleResize(e);
                                  }),
                                  (t = 100),
                                  function () {
                                    for (
                                      var n = arguments.length,
                                        a = new Array(n),
                                        r = 0;
                                      r < n;
                                      r++
                                    )
                                      a[r] = arguments[r];
                                    clearTimeout(i),
                                      (i = setTimeout(function () {
                                        e.apply(void 0, a);
                                      }, t));
                                  })
                                );
                              a.observe(this.textElement);
                            },
                          },
                          {
                            key: "handleResize",
                            value: function (n) {
                              var e = o(n, 1)[0].contentRect,
                                t = Math.floor(e.width);
                              this.previousContainerWidth &&
                                this.previousContainerWidth !== t &&
                                (this.splitText.split(), this.onResize()),
                                (this.previousContainerWidth = t);
                            },
                          },
                          {
                            key: "getChars",
                            value: function () {
                              return this.splitText.chars;
                            },
                          },
                        ]
                      );
                    })();
                  const me = m(660).gsap;
                  var ue,
                    fe,
                    ge,
                    we,
                    be,
                    ve,
                    ye,
                    je,
                    ze,
                    Se,
                    Ne,
                    ke,
                    Ee,
                    Ce = (function () {
                      return B(
                        function n(e) {
                          if ((q(this, n), !(e && e instanceof HTMLElement)))
                            throw new Error("Invalid text element provided.");
                          (this.textElement = e), this.initializeEffect();
                        },
                        [
                          {
                            key: "initializeEffect",
                            value: function () {
                              var n = this;
                              (this.splitter = new he(this.textElement, {
                                resizeCallback: function () {
                                  return n.scroll();
                                },
                                splitTypeTypes: "words, chars",
                              })),
                                this.scroll();
                            },
                          },
                          {
                            key: "scroll",
                            value: function () {
                              var n = this.splitter.getChars();
                              me.fromTo(
                                n,
                                {
                                  filter: "blur(10px) brightness(0%)",
                                  willChange: "filter",
                                },
                                {
                                  ease: "none",
                                  filter: "blur(0px) brightness(100%)",
                                  stagger: 0.01,
                                  scrollTrigger: {
                                    trigger: this.textElement,
                                    start: "top bottom-=15%",
                                    end: "bottom center+=15%",
                                    scrub: !0,
                                  },
                                }
                              );
                            },
                          },
                        ]
                      );
                    })(),
                    Te = m(960),
                    Oe = (function () {
                      return B(
                        function n(e, t) {
                          if ((q(this, n), !(e && e instanceof HTMLElement)))
                            throw new Error("Invalid element provided.");
                          (this.highlightedElement = e),
                            (this.background = t),
                            (this.animationDefaults = {
                              duration: 0.4,
                              ease: "sine",
                            }),
                            this.initializeEffect(this.wrapElement);
                        },
                        [
                          {
                            key: "initializeEffect",
                            value: function (n) {
                              this.scroll();
                            },
                          },
                          {
                            key: "scroll",
                            value: function () {
                              var n = this;
                              Te.ScrollTrigger.create({
                                trigger: this.highlightedElement,
                                start: "top bottom",
                                onEnter: function () {
                                  return n.animateChars();
                                },
                                onEnterBack: function () {
                                  return n.animateChars();
                                },
                              });
                            },
                          },
                          {
                            key: "animateChars",
                            value: function () {
                              var n, e;
                              (this.highlightedChars &&
                                0 !==
                                  (null === (n = this.highlightedChars) ||
                                  void 0 === n
                                    ? void 0
                                    : n.length)) ||
                                (this.highlightedChars =
                                  this.highlightedElement.querySelectorAll(
                                    ".char"
                                  )),
                                me
                                  .timeline({
                                    defaults: this.animationDefaults,
                                  })
                                  .fromTo(
                                    this.highlightedChars,
                                    { scale: 1.3, opacity: 0 },
                                    {
                                      stagger: function (n) {
                                        return 0.1 + 0.1 * n;
                                      },
                                      scale: 1,
                                      opacity: 1,
                                      background:
                                        null !== (e = this.background) &&
                                        void 0 !== e
                                          ? e
                                          : "none",
                                    }
                                  )
                                  .fromTo(
                                    this.highlightedElement,
                                    { "--after-scale": 0 },
                                    {
                                      duration: 0.8,
                                      ease: "expo",
                                      "--after-scale": 1,
                                    },
                                    0
                                  );
                            },
                          },
                        ]
                      );
                    })();
                  function Ae() {
                    var t,
                      i = (0, e.useRef)(null),
                      a = (0, ln.useQuery)({
                        queryKey: ["ascii-hash-3"],
                        queryFn:
                          ((t = D(
                            regeneratorRuntime.mark(function n() {
                              return regeneratorRuntime.wrap(function (n) {
                                for (;;)
                                  switch ((n.prev = n.next)) {
                                    case 0:
                                      return n.abrupt(
                                        "return",
                                        fetch("/public/ascii-3.txt").then(
                                          function (n) {
                                            return n.text();
                                          }
                                        )
                                      );
                                    case 1:
                                    case "end":
                                      return n.stop();
                                  }
                              }, n);
                            })
                          )),
                          function () {
                            return t.apply(this, arguments);
                          }),
                      }),
                      r = a.data;
                    return (
                      (0, e.useEffect)(function () {
                        var n = i.current;
                        if (n) {
                          new Ce(n);
                          var e = new IntersectionObserver(
                            function (n) {
                              n[0].isIntersecting &&
                                (document
                                  .querySelectorAll("[data-splitting]")
                                  .forEach(function (n) {
                                    var e = n.getAttribute("data-background");
                                    new Oe(n, e);
                                  }),
                                e.disconnect());
                            },
                            { rootMargin: "0px", threshold: 0.6 }
                          );
                          return (
                            e.observe(n),
                            function () {
                              e.disconnect();
                            }
                          );
                        }
                      }, []),
                      (0, A.jsxs)("section", {
                        className: (0, C.css)(
                          ue ||
                            (ue = n([
                              "\n                position: relative;\n                background-color: #000;\n                overflow: hidden;\n            ",
                            ]))
                        ),
                        children: [
                          (0, A.jsx)("pre", {
                            id: "ascii-bg-3",
                            className: (0, C.css)(
                              fe ||
                                (fe = n([
                                  "\n                    color: rgba(75, 75, 75, 0.89);\n                    z-index: 0;\n                    position: absolute;\n                    top: 240px;\n                    left: 50%;\n                    transform: translateX(-50%);\n                    font-size: 9.5px;\n                ",
                                ]))
                            ),
                            children: r,
                          }),
                          (0, A.jsx)("section", {
                            className: (0, C.css)(
                              ge ||
                                (ge = n([
                                  "\n                    padding-top: 240px;\n                    padding-bottom: 130px;\n                    height: 546px;\n                    display: flex;\n                    align-items: center;\n                    justify-content: center;\n                    border-top: 1px solid #1a1a1a;\n                    @media (max-width: 1280px) {\n                        padding-top: 120px;\n                        padding-bottom: 60px;\n                        height: 446px;\n                    }\n                    @media (max-width: 1024px) {\n                        padding-top: 0px;\n                        padding-bottom: 0px;\n                        height: 346px;\n                    }\n                    @media (max-width: 768px) {\n                        height: 326px;\n                    }\n                    @media (max-width: 568px) {\n                        height: 216px;\n                    }\n                ",
                                ]))
                            ),
                            children: (0, A.jsxs)("p", {
                              ref: i,
                              className: (0, C.css)(
                                we ||
                                  (we = n([
                                    "\n                        width: 1000px;\n                        color: #e9e9e9;\n                        font-size: 48px;\n                        @media (max-width: 1024px) {\n                            font-size: 36px;\n                        }\n                        @media (max-width: 768px) {\n                            font-size: 28px;\n                        }\n                        text-align: center;\n                    ",
                                  ]))
                              ),
                              children: [
                                (0, A.jsx)("span", {
                                  className: (0, C.css)(
                                    be ||
                                      (be = n([
                                        "\n                            color: #000;\n                            border-radius: 8px;\n                            overflow: hidden;\n                            top: 15px;\n                            @media (max-width: 1024px) {\n                                top: 10px;\n                            }\n                            @media (max-width: 768px) {\n                                top: 5px;\n                            }\n                        ",
                                      ]))
                                  ),
                                  "data-splitting": !0,
                                  "data-background": "#6a5ace",
                                  children: "Chainbase",
                                }),
                                " ",
                                "Network powers",
                                " ",
                                (0, A.jsx)("span", {
                                  className: (0, C.css)(
                                    ve ||
                                      (ve = n([
                                        "\n                            color: #6a5ace;\n                        ",
                                      ]))
                                  ),
                                  "data-splitting": !0,
                                  children: "AI",
                                }),
                                " ",
                                "in crypto, just like",
                                " ",
                                (0, A.jsx)("span", {
                                  className: (0, C.css)(
                                    ye ||
                                      (ye = n([
                                        "\n                            color: #000;\n                            border-radius: 8px;\n                            overflow: hidden;\n                            top: 15px;\n                            @media (max-width: 1024px) {\n                                top: 10px;\n                            }\n                            @media (max-width: 768px) {\n                                top: 6px;\n                            }\n                        ",
                                      ]))
                                  ),
                                  "data-splitting": !0,
                                  "data-background": "#23a4ba",
                                  children: "Oracle",
                                }),
                                " ",
                                "powers",
                                " ",
                                (0, A.jsx)("span", {
                                  className: (0, C.css)(
                                    je ||
                                      (je = n([
                                        "\n                            color: #23a4ba;\n                        ",
                                      ]))
                                  ),
                                  "data-splitting": !0,
                                  children: "Blockchain",
                                }),
                                ".",
                              ],
                            }),
                          }),
                        ],
                      })
                    );
                  }
                  function Ie(e) {
                    var t = e.color,
                      i = null != t ? t : "#000";
                    return (0, A.jsxs)("div", {
                      className: (0, C.css)(
                        ze ||
                          (ze = n([
                            "\n                @media (max-width: 568px) {\n                    display: none;\n                }\n            ",
                          ]))
                      ),
                      children: [
                        (0, A.jsx)("div", {
                          className: (0, C.css)(
                            Se ||
                              (Se = n([
                                "\n                    position: absolute;\n                    top: 20px;\n                    left: 20px;\n                    width: 24px;\n                    height: 24px;\n                    @media (max-width: 1024px) {\n                        top: 12px;\n                        left: 12px;\n                        width: 18px;\n                        height: 18px;\n                    }\n                    @media (max-width: 768px) {\n                        width: 12px;\n                        height: 12px;\n                    }\n                    border-bottom: 1px solid ",
                                ";\n                    border-right: 1px solid ",
                                ";\n                ",
                              ])),
                            i,
                            i
                          ),
                        }),
                        (0, A.jsx)("div", {
                          className: (0, C.css)(
                            Ne ||
                              (Ne = n([
                                "\n                    position: absolute;\n                    top: 20px;\n                    right: 20px;\n                    width: 24px;\n                    height: 24px;\n                    @media (max-width: 1024px) {\n                        top: 12px;\n                        right: 12px;\n                        width: 18px;\n                        height: 18px;\n                    }\n                    @media (max-width: 768px) {\n                        width: 12px;\n                        height: 12px;\n                    }\n                    border-bottom: 1px solid ",
                                ";\n                    border-left: 1px solid ",
                                ";\n                ",
                              ])),
                            i,
                            i
                          ),
                        }),
                        (0, A.jsx)("div", {
                          className: (0, C.css)(
                            ke ||
                              (ke = n([
                                "\n                    position: absolute;\n                    bottom: 20px;\n                    right: 20px;\n                    width: 24px;\n                    height: 24px;\n                    @media (max-width: 1024px) {\n                        bottom: 12px;\n                        right: 12px;\n                        width: 18px;\n                        height: 18px;\n                    }\n                    @media (max-width: 768px) {\n                        width: 12px;\n                        height: 12px;\n                    }\n                    border-top: 1px solid ",
                                ";\n                    border-left: 1px solid ",
                                ";\n                ",
                              ])),
                            i,
                            i
                          ),
                        }),
                        (0, A.jsx)("div", {
                          className: (0, C.css)(
                            Ee ||
                              (Ee = n([
                                "\n                    position: absolute;\n                    bottom: 20px;\n                    left: 20px;\n                    width: 24px;\n                    height: 24px;\n                    @media (max-width: 1024px) {\n                        bottom: 12px;\n                        left: 12px;\n                        width: 18px;\n                        height: 18px;\n                    }\n                    @media (max-width: 768px) {\n                        width: 12px;\n                        height: 12px;\n                    }\n                    border-top: 1px solid ",
                                ";\n                    border-right: 1px solid ",
                                ";\n                ",
                              ])),
                            i,
                            i
                          ),
                        }),
                      ],
                    });
                  }
                  var Le,
                    Pe,
                    Fe,
                    De,
                    Re,
                    _e,
                    Me,
                    We,
                    Be,
                    qe,
                    He,
                    Ye,
                    Xe,
                    Ue,
                    Ze,
                    Qe,
                    Ve,
                    $e,
                    Ke,
                    Ge,
                    Je,
                    nt,
                    et,
                    tt,
                    it,
                    at,
                    rt,
                    ot,
                    st,
                    pt,
                    dt,
                    ct,
                    lt,
                    xt,
                    ht,
                    mt,
                    ut,
                    ft,
                    gt,
                    wt,
                    bt,
                    vt,
                    yt,
                    jt,
                    zt,
                    St,
                    Nt,
                    kt,
                    Et,
                    Ct,
                    Tt,
                    Ot,
                    At,
                    It,
                    Lt,
                    Pt,
                    Ft,
                    Dt,
                    Rt,
                    _t,
                    Mt,
                    Wt,
                    Bt,
                    qt,
                    Ht,
                    Yt,
                    Xt,
                    Ut,
                    Zt = (0, e.createContext)({ mountedPhases: 3 }),
                    Qt = (0, C.keyframes)(
                      Le ||
                        (Le = n([
                          "\n  from {\n    transform: translateX(0);\n  }\n  to {\n    transform: translateX(-100%);\n  }\n",
                        ]))
                    );
                  function Vt() {
                    var t,
                      i = (0, e.useRef)(null),
                      a = (0, e.useRef)(null),
                      r = (0, e.useContext)(Zt).mountedPhases,
                      o = (0, ln.useQuery)({
                        queryKey: ["ascii-hash-4"],
                        queryFn:
                          ((t = D(
                            regeneratorRuntime.mark(function n() {
                              return regeneratorRuntime.wrap(function (n) {
                                for (;;)
                                  switch ((n.prev = n.next)) {
                                    case 0:
                                      return n.abrupt(
                                        "return",
                                        fetch("/public/ascii-4.txt").then(
                                          function (n) {
                                            return n.text();
                                          }
                                        )
                                      );
                                    case 1:
                                    case "end":
                                      return n.stop();
                                  }
                              }, n);
                            })
                          )),
                          function () {
                            return t.apply(this, arguments);
                          }),
                      }),
                      s = o.data;
                    return (
                      (0, e.useLayoutEffect)(function () {
                        window.screen.availWidth < 1025 ||
                          me.to(i.current, {
                            scrollTrigger: {
                              scrub: 1,
                              pin: !0,
                              trigger: a.current,
                              end: function () {
                                return "+=" + a.current.clientHeight;
                              },
                              start: "top-=76",
                            },
                            x:
                              -(
                                i.current.scrollWidth -
                                document.documentElement.clientWidth +
                                100
                              ) + "px",
                            ease: "power1",
                          });
                      }, []),
                      (0, A.jsx)("div", {
                        children: (0, A.jsxs)("section", {
                          id: "pin-sliding-trigger",
                          ref: a,
                          className: (0, C.css)(
                            Pe ||
                              (Pe = n([
                                "\n                    padding: 32px 0;\n                    background-color: #000;\n                    overflow: hidden;\n                    border-top: 1px solid #1a1a1a;\n                ",
                              ]))
                          ),
                          children: [
                            (0, A.jsx)("div", {
                              className: (0, C.css)(
                                Fe ||
                                  (Fe = n([
                                    "\n                        color: #e9e9e9;\n                        font-size: 140px;\n                        @media (max-width: 1280px) {\n                            font-size: 100px;\n                        }\n                        @media (max-width: 1024px) {\n                            font-size: 70px;\n                        }\n                        @media (max-width: 768px) {\n                            font-size: 50px;\n                        }\n                        @media (max-width: 568px) {\n                            font-size: 40px;\n                        }\n                        width: 100%;\n                        position: sticky;\n                        overflow: hidden;\n                        position: relative;\n                        white-space: nowrap;\n                        display: flex;\n                        align-items: center;\n                    ",
                                  ]))
                              ),
                              children: (0, A.jsxs)("div", {
                                className: (0, C.css)(
                                  De ||
                                    (De = n([
                                      "\n                            display: flex;\n                            width: max-content;\n                            font-weight: 600;\n                            text-transform: uppercase;\n                            align-items: center;\n                        ",
                                    ]))
                                ),
                                children: [
                                  (0, A.jsxs)("div", {
                                    className: (0, C.css)(
                                      Re ||
                                        (Re = n([
                                          "\n                                display: inline-flex;\n                                align-items: center;\n                                animation: ",
                                          " 16s linear infinite;\n                                @media (max-width: 1024px) {\n                                    animation-duration: 14s;\n                                }\n                                @media (max-width: 768px) {\n                                    animation-duration: 12s;\n                                }\n                                @media (max-width: 568px) {\n                                    animation-duration: 10s;\n                                }\n                            ",
                                        ])),
                                      Qt
                                    ),
                                    children: [
                                      "We empower programmable and interoperable data intelligence.  ",
                                      (0, A.jsx)("img", {
                                        className: (0, C.css)(
                                          _e ||
                                            (_e = n([
                                              "\n                                    width: 100px;\n                                    @media (max-width: 1024px) {\n                                        width: 80px;\n                                    }\n                                    @media (max-width: 768px) {\n                                        width: 60px;\n                                    }\n                                    @media (max-width: 568px) {\n                                        width: 40px;\n                                    }\n                                ",
                                            ]))
                                        ),
                                        src:
                                          r >= 4
                                            ? "/public/chainbase_horizontal_black.png"
                                            : "",
                                      }),
                                    ],
                                  }),
                                  (0, A.jsx)("div", {
                                    className: (0, C.css)(
                                      Me ||
                                        (Me = n([
                                          "\n                                display: inline-block;\n                                animation: ",
                                          " 16s linear infinite;\n                                @media (max-width: 1024px) {\n                                    animation-duration: 14s;\n                                }\n                                @media (max-width: 768px) {\n                                    animation-duration: 12s;\n                                }\n                                @media (max-width: 568px) {\n                                    animation-duration: 10s;\n                                }\n                            ",
                                        ])),
                                      Qt
                                    ),
                                    children:
                                      "We empower programmable and interoperable data intelligence.  ",
                                  }),
                                ],
                              }),
                            }),
                            (0, A.jsx)("div", {
                              className: (0, C.css)(
                                We ||
                                  (We = n([
                                    "\n                        padding: 32px 72px;\n                        display: flex;\n                        overflow: hidden;\n                        @media (max-width: 1024px) {\n                            padding: 24px 48px;\n                        }\n                        @media (max-width: 768px) {\n                            padding: 18px 36px;\n                        }\n                        @media (max-width: 568px) {\n                            padding: 12px 24px;\n                        }\n                    ",
                                  ]))
                              ),
                              children: (0, A.jsxs)("div", {
                                id: "pin-sliding",
                                ref: i,
                                className: (0, C.css)(
                                  Be ||
                                    (Be = n([
                                      "\n                            display: flex;\n                            width: 100%;\n                            gap: 3rem;\n                            min-width: 200%;\n                            @media (max-width: 1024px) {\n                                flex-direction: column;\n                                min-width: 100%;\n                            }\n                        ",
                                    ]))
                                ),
                                children: [
                                  (0, A.jsx)($t, { ascii: s }),
                                  (0, A.jsx)(Kt, {}),
                                  (0, A.jsx)(Gt, {}),
                                ],
                              }),
                            }),
                          ],
                        }),
                      })
                    );
                  }
                  function $t(e) {
                    var t = e.ascii;
                    return (0, A.jsxs)("div", {
                      className: (0, C.css)(
                        qe ||
                          (qe = n([
                            "\n                width: 964px;\n                height: 600px;\n                border-radius: 32px;\n                background: #e9e9e9;\n                position: relative;\n                @media (max-width: 1024px) {\n                    width: 100%;\n                    height: auto;\n                }\n            ",
                          ]))
                      ),
                      children: [
                        (0, A.jsx)(Ie, {}),
                        (0, A.jsx)("p", {
                          className: (0, C.css)(
                            He ||
                              (He = n([
                                "\n                    color: #000;\n                    font-size: 36px;\n                    margin: 34px 60px !important;\n                    @media (max-width: 1024px) {\n                        font-size: 30px;\n                        margin: 34px 46px 24px !important;\n                    }\n                    @media (max-width: 768px) {\n                        font-size: 20px;\n                        margin: 34px 36px 0px !important;\n                    }\n                    @media (max-width: 568px) {\n                        font-size: 16px;\n                        margin: 34px 24px 0px !important;\n                    }\n                    text-transform: uppercase;\n                    max-width: 562px;\n                    font-weight: 700;\n                ",
                              ]))
                          ),
                          children: "Enables omnichain connectivity for anyone",
                        }),
                        (0, A.jsxs)("div", {
                          className: (0, C.css)(
                            Ye ||
                              (Ye = n([
                                "\n                    display: flex;\n                    justify-content: center;\n                    align-items: center;\n                    gap: 50px;\n                    margin-top: 65px;\n                    margin-bottom: 20px;\n                    padding: 0px 56px;\n                    @media (max-width: 1024px) {\n                        margin-top: 45px;\n                        padding: 0px 46px 8px;\n                    }\n                    @media (max-width: 768px) {\n                        margin-top: 30px;\n                        padding: 0px 36px 16px;\n                    }\n                    @media (max-width: 568px) {\n                        margin-top: 16px;\n                        padding: 0px 24px 16px;\n                    }\n                ",
                              ]))
                          ),
                          children: [
                            (0, A.jsxs)("div", {
                              className: (0, C.css)(
                                Xe ||
                                  (Xe = n([
                                    "\n                        position: relative;\n                        @media (max-width: 698px) {\n                            display: none;\n                        }\n                    ",
                                  ]))
                              ),
                              children: [
                                (0, A.jsx)("pre", {
                                  id: "ascii-bg-4",
                                  className: (0, C.css)(
                                    Ue ||
                                      (Ue = n([
                                        "\n                            color: #000;\n                            z-index: 5;\n                            font-size: 9px;\n                            @media (max-width: 1024px) {\n                                font-size: 7px;\n                            }\n                            @media (max-width: 768px) {\n                                font-size: 6px;\n                            }\n                        ",
                                      ]))
                                  ),
                                  children: t,
                                }),
                                (0, A.jsx)("div", {
                                  className: (0, C.css)(
                                    Ze ||
                                      (Ze = n([
                                        "\n                            z-index: 3;\n                            width: 106px;\n                            height: 106px;\n                            @media (max-width: 1024px) {\n                                width: 96px;\n                                height: 96px;\n                            }\n                            @media (max-width: 768px) {\n                                width: 84px;\n                                height: 84px;\n                            }\n                            position: absolute;\n                            top: 50%;\n                            left: 165px;\n                            @media (max-width: 1024px) {\n                                left: 125px;\n                            }\n                            @media (max-width: 768px) {\n                                left: 110px;\n                            }\n                            transform: translate(calc(-50% - 24px), -50%);\n                            background: #000;\n                            border-radius: 999px;\n                        ",
                                      ]))
                                  ),
                                }),
                                (0, A.jsx)("div", {
                                  className: (0, C.css)(
                                    Qe ||
                                      (Qe = n([
                                        "\n                            z-index: 4;\n                            width: 106px;\n                            height: 106px;\n                            @media (max-width: 1024px) {\n                                width: 96px;\n                                height: 96px;\n                            }\n                            @media (max-width: 768px) {\n                                width: 84px;\n                                height: 84px;\n                            }\n                            position: absolute;\n                            top: 50%;\n                            left: 165px;\n                            @media (max-width: 1024px) {\n                                left: 125px;\n                            }\n                            @media (max-width: 768px) {\n                                left: 110px;\n                            }\n                            transform: translate(-50%, -50%);\n                            background: #a59dff;\n                            border-radius: 999px;\n                        ",
                                      ]))
                                  ),
                                }),
                              ],
                            }),
                            (0, A.jsxs)("div", {
                              className: (0, C.css)(
                                Ve ||
                                  (Ve = n([
                                    "\n                        display: flex;\n                        flex-direction: column;\n                        gap: 48px;\n                        @media (max-width: 1024px) {\n                            gap: 36px;\n                        }\n                        @media (max-width: 768px) {\n                            gap: 24px;\n                        }\n                        flex-grow: 1;\n                    ",
                                  ]))
                              ),
                              children: [
                                (0, A.jsx)("div", {
                                  className: (0, C.css)(
                                    $e ||
                                      ($e = n([
                                        "\n                            width: 100%;\n                            font-size: 14px;\n                            padding-bottom: 4px;\n                            border-bottom: 1px solid #000;\n                            font-weight: 600;\n                        ",
                                      ]))
                                  ),
                                  children: "01",
                                }),
                                (0, A.jsx)("p", {
                                  className: (0, C.css)(
                                    Ke ||
                                      (Ke = n([
                                        "\n                            width: 100%;\n                            color: #000;\n                            font-size: 20px;\n                            font-weight: 500;\n                            @media (max-width: 1024px) {\n                                font-size: 18px;\n                            }\n                            @media (max-width: 768px) {\n                                font-size: 14px;\n                            }\n                            @media (max-width: 568px) {\n                                font-size: 12px;\n                            }\n                        ",
                                      ]))
                                  ),
                                  children:
                                    "Each chain has a different data structure, and the diversity of chains leads to data fragmentation, making the utilization of blockchain data a very tedious and complex engineering problem. With Chainbase's abstraction technology, users can easily access omnichain data without being troubled by complex format issues.",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    });
                  }
                  function Kt() {
                    var t = (0, e.useContext)(Zt).mountedPhases;
                    return (0, A.jsxs)("div", {
                      className: (0, C.css)(
                        Ge ||
                          (Ge = n([
                            "\n                width: 964px;\n                height: 600px;\n                border-radius: 32px;\n                border: 1px solid #e9e9e9;\n                background: #000;\n                position: relative;\n                @media (max-width: 1024px) {\n                    width: 100%;\n                    height: auto;\n                }\n                @media (max-width: 768px) {\n                    display: flex;\n                    flex-direction: column-reverse;\n                }\n            ",
                          ]))
                      ),
                      children: [
                        (0, A.jsx)(Ie, { color: "#e9e9e9" }),
                        (0, A.jsxs)("div", {
                          className: (0, C.css)(
                            Je ||
                              (Je = n([
                                "\n                    display: flex;\n                    justify-content: center;\n                    align-items: center;\n                    gap: 50px;\n                    margin-top: 65px;\n                    margin-bottom: 20px;\n                    padding: 0px 56px;\n                    @media (max-width: 1024px) {\n                        margin-top: 45px;\n                        padding: 0px 46px 8px;\n                    }\n                    @media (max-width: 768px) {\n                        margin-top: 30px;\n                        padding: 0px 36px 16px;\n                    }\n                    @media (max-width: 568px) {\n                        margin-top: 16px;\n                        padding: 0px 24px 16px;\n                    }\n                ",
                              ]))
                          ),
                          children: [
                            (0, A.jsx)("img", {
                              src: t >= 4 ? "/public/rail.png" : "",
                              className: (0, C.css)(
                                nt ||
                                  (nt = n([
                                    "\n                        width: 360px;\n                        @media (max-width: 1024px) {\n                            width: 280px;\n                        }\n                        @media (max-width: 768px) {\n                            width: 200px;\n                        }\n                        @media (max-width: 698px) {\n                            display: none;\n                        }\n                    ",
                                  ]))
                              ),
                            }),
                            (0, A.jsxs)("div", {
                              className: (0, C.css)(
                                et ||
                                  (et = n([
                                    "\n                        display: flex;\n                        flex-direction: column;\n                        gap: 48px;\n                        @media (max-width: 1024px) {\n                            gap: 36px;\n                        }\n                        @media (max-width: 768px) {\n                            gap: 24px;\n                        }\n                        flex-grow: 1;\n                    ",
                                  ]))
                              ),
                              children: [
                                (0, A.jsx)("div", {
                                  className: (0, C.css)(
                                    tt ||
                                      (tt = n([
                                        "\n                            color: #707070;\n                            width: 100%;\n                            font-size: 14px;\n                            padding-top: 4px;\n                            border-top: 1px solid #707070;\n                            @media (max-width: 698px) {\n                                border-bottom: 1px solid #707070;\n                                border-top: unset;\n                            }\n                            font-weight: 600;\n                        ",
                                      ]))
                                  ),
                                  children: "02",
                                }),
                                (0, A.jsx)("p", {
                                  className: (0, C.css)(
                                    it ||
                                      (it = n([
                                        "\n                            color: #a3a3a3;\n                            width: 100%;\n                            font-size: 20px;\n                            font-weight: 500;\n                            @media (max-width: 1024px) {\n                                font-size: 18px;\n                            }\n                            @media (max-width: 768px) {\n                                font-size: 14px;\n                            }\n                            @media (max-width: 568px) {\n                                font-size: 12px;\n                            }\n                        ",
                                      ]))
                                  ),
                                  children:
                                    "Non-uniform data patterns will increase the complexity of data utilization exponentially. The Chainbase network's manuscript is the cornerstone of composability, and with a unified standard one can completely unify the data access model.",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, A.jsx)("p", {
                          className: (0, C.css)(
                            at ||
                              (at = n([
                                "\n                    color: #e9e9e9;\n                    font-size: 36px;\n                    text-transform: uppercase;\n                    margin: 34px 60px !important;\n                    @media (max-width: 1024px) {\n                        font-size: 30px;\n                        margin: 34px 46px 24px !important;\n                    }\n                    @media (max-width: 768px) {\n                        font-size: 20px;\n                        margin: 34px 36px 0px !important;\n                    }\n                    @media (max-width: 568px) {\n                        font-size: 16px;\n                        margin: 34px 24px 0px !important;\n                    }\n                    max-width: 562px;\n                    font-weight: 700;\n                ",
                              ]))
                          ),
                          children: "The Universal Entrypoint to Crypto Data",
                        }),
                      ],
                    });
                  }
                  function Gt() {
                    var t = (0, e.useContext)(Zt).mountedPhases;
                    return (0, A.jsxs)("div", {
                      className: (0, C.css)(
                        rt ||
                          (rt = n([
                            "\n                width: 964px;\n                height: 600px;\n                border-radius: 32px;\n                border: 1px solid #e9e9e9;\n                background: #000;\n                position: relative;\n                @media (max-width: 1024px) {\n                    width: 100%;\n                    height: auto;\n                }\n            ",
                          ]))
                      ),
                      children: [
                        (0, A.jsx)(Ie, { color: "#e9e9e9" }),
                        (0, A.jsx)("p", {
                          className: (0, C.css)(
                            ot ||
                              (ot = n([
                                "\n                    color: #e9e9e9;\n                    font-size: 36px;\n                    text-transform: uppercase;\n                    margin: 34px 60px !important;\n                    @media (max-width: 1024px) {\n                        font-size: 30px;\n                        margin: 34px 46px 24px !important;\n                    }\n                    @media (max-width: 768px) {\n                        font-size: 20px;\n                        margin: 34px 36px 0px !important;\n                    }\n                    @media (max-width: 568px) {\n                        font-size: 16px;\n                        margin: 34px 24px 0px !important;\n                    }\n                    max-width: 562px;\n                    font-weight: 700;\n                ",
                              ]))
                          ),
                          children:
                            "Create your own manuscripts in multiple languages",
                        }),
                        (0, A.jsxs)("div", {
                          className: (0, C.css)(
                            st ||
                              (st = n([
                                "\n                    display: flex;\n                    justify-content: center;\n                    align-items: center;\n                    gap: 50px;\n                    margin-top: 65px;\n                    margin-bottom: 20px;\n                    padding: 0px 56px;\n                    @media (max-width: 1024px) {\n                        margin-top: 45px;\n                        padding: 0px 46px 8px;\n                    }\n                    @media (max-width: 768px) {\n                        margin-top: 30px;\n                        padding: 0px 36px 16px;\n                    }\n                    @media (max-width: 568px) {\n                        margin-top: 16px;\n                        padding: 0px 24px 16px;\n                    }\n                ",
                              ]))
                          ),
                          children: [
                            (0, A.jsx)("img", {
                              src: t >= 4 ? "/public/rail-2.png" : "",
                              className: (0, C.css)(
                                pt ||
                                  (pt = n([
                                    "\n                        z-index: 6;\n                        width: 360px;\n                        @media (max-width: 1024px) {\n                            width: 280px;\n                        }\n                        @media (max-width: 768px) {\n                            width: 200px;\n                        }\n                        @media (max-width: 698px) {\n                            display: none;\n                        }\n                    ",
                                  ]))
                              ),
                            }),
                            (0, A.jsxs)("div", {
                              className: (0, C.css)(
                                dt ||
                                  (dt = n([
                                    "\n                        display: flex;\n                        flex-direction: column;\n                        gap: 48px;\n                        @media (max-width: 1024px) {\n                            gap: 36px;\n                        }\n                        @media (max-width: 768px) {\n                            gap: 24px;\n                        }\n                        flex-grow: 1;\n                    ",
                                  ]))
                              ),
                              children: [
                                (0, A.jsx)("div", {
                                  className: (0, C.css)(
                                    ct ||
                                      (ct = n([
                                        "\n                            color: #707070;\n                            width: 100%;\n                            font-size: 14px;\n                            padding-bottom: 4px;\n                            border-bottom: 1px solid #707070;\n                            font-weight: 600;\n                        ",
                                      ]))
                                  ),
                                  children: "03",
                                }),
                                (0, A.jsx)("p", {
                                  className: (0, C.css)(
                                    lt ||
                                      (lt = n([
                                        "\n                            color: #a3a3a3;\n                            width: 100%;\n                            font-size: 20px;\n                            font-weight: 500;\n                            @media (max-width: 1024px) {\n                                font-size: 18px;\n                            }\n                            @media (max-width: 768px) {\n                                font-size: 14px;\n                            }\n                            @media (max-width: 568px) {\n                                font-size: 12px;\n                            }\n                        ",
                                      ]))
                                  ),
                                  children:
                                    "There are many datasets available on the network for developers to call directly, and more importantly, we've opened up the ability to reprocess the datasets, and everything is transparent and programmable. This means that you can build in a variety of languages.",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    });
                  }
                  var Jt,
                    ni,
                    ei,
                    ti,
                    ii,
                    ai,
                    ri,
                    oi,
                    si,
                    pi,
                    di,
                    ci,
                    li,
                    xi,
                    hi,
                    mi,
                    ui,
                    fi,
                    gi,
                    wi,
                    bi,
                    vi,
                    yi,
                    ji,
                    zi,
                    Si,
                    Ni,
                    ki,
                    Ei,
                    Ci,
                    Ti,
                    Oi,
                    Ai,
                    Ii,
                    Li,
                    Pi = (0, C.keyframes)(
                      xt ||
                        (xt = n([
                          "\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n",
                        ]))
                    ),
                    Fi = (0, C.keyframes)(
                      ht ||
                        (ht = n([
                          "\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n",
                        ]))
                    ),
                    Di = 350,
                    Ri = 70,
                    _i = (0, C.css)(
                      mt ||
                        (mt = n([
                          "\n    position: absolute;\n    width: ",
                          "px;\n    height: ",
                          "px;\n    background-blend-mode: hard-light;\n\n    border: 1px solid #000;\n    line-height: ",
                          "px;\n    font-size: 20px;\n    text-align: center;\n    text-transform: uppercase;\n    color: #000;\n    font-size: 36px;\n    font-weight: 600;\n",
                        ])),
                      Di,
                      Di,
                      Ri
                    ),
                    Mi = (0, C.css)(
                      ut ||
                        (ut = n([
                          "\n    position: absolute;\n    width: ",
                          "px;\n    height: ",
                          "px;\n    background-blend-mode: hard-light;\n    background: #000 !important;\n    border: 1px solid #a59dff;\n    line-height: ",
                          "px;\n    font-size: 20px;\n    text-align: center;\n    text-transform: uppercase;\n    color: #000;\n    font-size: 36px;\n    font-weight: 600;\n",
                        ])),
                      Di,
                      Di,
                      Ri
                    ),
                    Wi = (0, C.css)(
                      ft ||
                        (ft = n([
                          "\n    transform: translateZ(",
                          "px);\n    height: ",
                          "px;\n    background: linear-gradient(142deg, rgba(157, 148, 230, 1) 20.53%, rgba(133, 123, 203, 1) 0%);\n",
                        ])),
                      175,
                      Ri
                    ),
                    Bi = (0, C.keyframes)(
                      gt ||
                        (gt = n([
                          "\n  from {\n    background: linear-gradient(142deg, rgba(157, 148, 230, 1) 20.53%, rgba(133, 123, 203, 1) 0%);\n  }\n  to {\n    background: linear-gradient(45deg, #E8E8E8 8.6%, #E9E9E9 88.41%);\n  }\n",
                        ]))
                    ),
                    qi = (0, C.keyframes)(
                      wt ||
                        (wt = n([
                          "\n  from {\n    background: linear-gradient(45deg, #E8E8E8 8.6%, #E9E9E9 88.41%);\n  }\n  to {\n    background: linear-gradient(142deg, rgba(157, 148, 230, 1) 20.53%, rgba(133, 123, 203, 1) 0%);\n  }\n",
                        ]))
                    ),
                    Hi = (0, C.css)(
                      bt ||
                        (bt = n([
                          "\n    transform: rotateY(180deg) translateZ(",
                          "px);\n    height: ",
                          "px;\n    background-color: rgb(152 142 252 / 95%);\n",
                        ])),
                      175,
                      Ri
                    ),
                    Yi = (0, C.css)(
                      vt ||
                        (vt = n([
                          "\n    transform: rotateY(-90deg) translateZ(",
                          "px);\n    height: ",
                          "px;\n    background: rgba(116, 105, 173, 1);\n",
                        ])),
                      175,
                      Ri
                    ),
                    Xi = (0, C.css)(
                      yt ||
                        (yt = n([
                          "\n    transform: rotateY(90deg) translateZ(",
                          "px);\n    height: ",
                          "px;\n    background: linear-gradient(220deg, rgb(213 211 249 / 50%) 20.23%, rgba(165, 157, 255, 0.92) -92.23%);\n",
                        ])),
                      175,
                      Ri
                    ),
                    Ui = (0, C.keyframes)(
                      jt ||
                        (jt = n([
                          "\n  from {\n    background: linear-gradient(220deg, rgb(213 211 249 / 50%) 20.23%, rgba(165, 157, 255, 0.92) -92.23%);\n  }\n  to {\n    background: linear-gradient(45deg, #E8E8E8 8.6%, #E9E9E9 88.41%);\n  }\n",
                        ]))
                    ),
                    Zi = (0, C.keyframes)(
                      zt ||
                        (zt = n([
                          "\n  from {\n    background: linear-gradient(45deg, #E8E8E8 8.6%, #E9E9E9 88.41%);\n  }\n  to {\n    background: linear-gradient(220deg, rgb(213 211 249 / 50%) 20.23%, rgba(165, 157, 255, 0.92) -92.23%);\n  }\n",
                        ]))
                    ),
                    Qi = (0, C.css)(
                      St ||
                        (St = n([
                          "\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    transform: rotateX(90deg) translateZ(",
                          "px);\n    background: #a59dff;\n",
                        ])),
                      175
                    ),
                    Vi = (0, C.keyframes)(
                      Nt ||
                        (Nt = n([
                          "\n  from {\n    background: #a59dff\n  }\n  to {\n    background: linear-gradient(45deg, #E8E8E8 8.6%, #E9E9E9 88.41%);\n  }\n",
                        ]))
                    ),
                    $i = (0, C.keyframes)(
                      kt ||
                        (kt = n([
                          "\n  from {\n    background: linear-gradient(45deg, #E8E8E8 8.6%, #E9E9E9 88.41%);\n  }\n  to {\n    background: #a59dff\n  }\n",
                        ]))
                    ),
                    Ki = (0, C.css)(
                      Et ||
                        (Et = n([
                          "\n    transform: rotateX(-90deg) translateZ(-",
                          "px);\n    background-color: rgba(157, 148, 255, 0.9);\n    opacity: 0.8;\n",
                        ])),
                      105
                    ),
                    Gi = (0, C.css)(
                      Ct ||
                        (Ct = n([
                          "\n    position: absolute;\n    width: 10px;\n    height: 10px;\n    transform-style: preserve-3d;\n",
                        ]))
                    ),
                    Ji = (0, C.css)(
                      Tt ||
                        (Tt = n([
                          "\n    width: 10px;\n    height: 10px;\n    background: white;\n",
                        ]))
                    ),
                    na = {
                      v1: (0, C.css)(
                        Ot ||
                          (Ot = n([
                            "\n        transform: translate(",
                            "px, -10px) translateZ(",
                            "px);\n    ",
                          ])),
                        345,
                        175
                      ),
                      v2: (0, C.css)(
                        At ||
                          (At = n([
                            "\n        transform: translate(0px, -10px) translateZ(",
                            "px);\n    ",
                          ])),
                        175
                      ),
                      v3: (0, C.css)(
                        It ||
                          (It = n([
                            "\n        transform: translate(5px, -10px) translateZ(-",
                            "px);\n    ",
                          ])),
                        165
                      ),
                      v4: (0, C.css)(
                        Lt ||
                          (Lt = n([
                            "\n        transform: translate(",
                            "px, -10px) translateZ(-",
                            "px);\n    ",
                          ])),
                        345,
                        170
                      ),
                    },
                    ea = (0, C.keyframes)(
                      Pt ||
                        (Pt = n([
                          "\n    0% {\n        top: -50px;\n    }\n    50% {\n        top: -60px;\n    }\n    100% {\n        top: -50px;\n    }\n",
                        ]))
                    ),
                    ta = (0, C.keyframes)(
                      Ft ||
                        (Ft = n([
                          "\n    from {\n        top: 0px;\n    }\n    to {\n        top: -",
                          "px;\n    }\n",
                        ])),
                      50
                    ),
                    ia = (0, C.keyframes)(
                      Dt ||
                        (Dt = n([
                          "\n    from {\n        top: -",
                          "px; \n    }\n    to {\n        top: 0px;\n    }\n",
                        ])),
                      50
                    );
                  function aa(e) {
                    var t = e.text,
                      i = e.zIndex,
                      a = e.focusBarIndex,
                      r = e.index,
                      o = e.fontSize,
                      s = void 0 === o ? "" : o,
                      p = e.isTop,
                      d = p ? Mi : _i,
                      c = (0, C.css)(
                        Rt ||
                          (Rt = n([
                            "\n        animation: ",
                            " 0.3s ease-in-out forwards;\n    ",
                          ])),
                        a === r ? Pi : Fi
                      ),
                      l = (0, C.css)(
                        _t ||
                          (_t = n([
                            "\n        animation: ",
                            " 0.3s ease-in-out forwards;\n    ",
                          ])),
                        a === r ? Bi : qi
                      ),
                      x = (0, C.css)(
                        Mt ||
                          (Mt = n([
                            "\n        animation: ",
                            " 0.3s ease-in-out forwards;\n    ",
                          ])),
                        a === r ? Ui : Zi
                      ),
                      h = (0, C.css)(
                        Wt ||
                          (Wt = n([
                            "\n        animation: ",
                            " 0.3s ease-in-out forwards;\n    ",
                          ])),
                        a === r ? Vi : $i
                      );
                    return (0, A.jsxs)("div", {
                      className: (0, C.css)(
                        Bt ||
                          (Bt = n([
                            "\n                width: 100%;\n                height: 100%;\n                position: relative;\n                top: ",
                            ";\n                z-index: ",
                            ";\n                transform-style: preserve-3d;\n                transform: rotateX(-30deg) rotateY(-45deg);\n                animation: ",
                            ";\n            ",
                          ])),
                        p ? "-50px" : "0px",
                        i,
                        p
                          ? "".concat(ea, " 3s ease-in-out infinite")
                          : r !== a
                          ? "".concat(
                              r < a ? ta : ia,
                              " 0.6s ease-in-out forwards"
                            )
                          : "none"
                      ),
                      children: [
                        (0, A.jsxs)("div", {
                          className: d + " " + Wi + " " + s + " " + l,
                          children: [
                            (0, A.jsx)("span", {
                              className:
                                c +
                                " " +
                                (0, C.css)(
                                  qt ||
                                    (qt = n([
                                      "\n                            position: absolute;\n                            top: -20px;\n                            left: 16px;\n                            font-size: 14px;\n                        ",
                                    ]))
                                ),
                              children: "0" + (r + 1),
                            }),
                            (0, A.jsx)("span", { className: c, children: t }),
                          ],
                        }),
                        (0, A.jsx)("div", { className: d + " " + Hi }),
                        (0, A.jsx)("div", { className: d + " " + Yi }),
                        (0, A.jsx)("div", {
                          className: d + " " + Xi + " " + s + " " + x,
                          children: (0, A.jsx)("span", {
                            className: c,
                            children: t,
                          }),
                        }),
                        (0, A.jsx)("div", {
                          className: d + " " + Qi + " " + h,
                          children: p
                            ? (0, A.jsx)(T.Logo, {
                                size: 180,
                                color: "#A59DFF",
                              })
                            : null,
                        }),
                        (0, A.jsx)("div", { className: d + " " + Ki }),
                        (0, A.jsx)(ra, { placement: "v1", isTop: p }),
                        (0, A.jsx)(ra, { placement: "v2", isTop: p }),
                        (0, A.jsx)(ra, { placement: "v3", isTop: p }),
                        (0, A.jsx)(ra, { placement: "v4", isTop: p }),
                      ],
                    });
                  }
                  function ra(e) {
                    var t = e.placement,
                      i = e.isTop;
                    return (0, A.jsxs)("div", {
                      className: Gi + " " + na[t],
                      children: [
                        (0, A.jsx)("div", {
                          className:
                            Ji +
                            " " +
                            (0, C.css)(
                              Ht ||
                                (Ht = n([
                                  "\n                        transform: translateZ(5px) translateY(-1px);\n                        border-left: 1px solid ",
                                  ";\n                        border-bottom: 1px solid ",
                                  ";\n                    ",
                                ])),
                              i ? "#a59dff" : "#000",
                              i ? "#a59dff" : "#000"
                            ),
                        }),
                        (0, A.jsx)("div", {
                          className:
                            Ji +
                            " " +
                            (0, C.css)(
                              Yt ||
                                (Yt = n([
                                  "\n                        transform: rotateY(180deg) translateZ(6px) translateY(-12px);\n                        border-left: 1px solid ",
                                  ";\n                        border-top: 1px solid ",
                                  ";\n                    ",
                                ])),
                              i ? "#a59dff" : "#000",
                              i ? "#a59dff" : "#000"
                            ),
                        }),
                        (0, A.jsx)("div", {
                          className:
                            Ji +
                            " " +
                            (0, C.css)(
                              Xt ||
                                (Xt = n([
                                  "\n                        transform: rotateY(-90deg) translateZ(4px) translateY(-24px);\n                        border-top: 1px solid ",
                                  ";\n                    ",
                                ])),
                              i ? "#a59dff" : "#000"
                            ),
                        }),
                        (0, A.jsx)("div", {
                          className:
                            Ji +
                            " " +
                            (0, C.css)(
                              Ut ||
                                (Ut = n([
                                  "\n                        transform: rotateY(90deg) translateZ(6px) translateY(-34px) translateX(-1px);\n                        border-bottom: 1px solid ",
                                  ";\n                    ",
                                ])),
                              i ? "#a59dff" : "#000"
                            ),
                        }),
                      ],
                    });
                  }
                  function oa() {
                    var t = (0, e.useRef)(null),
                      i = o((0, e.useState)(0), 2),
                      a = i[0],
                      r = i[1];
                    hn(9, t);
                    var s = [
                      {
                        link: "https://docs.chainbase.com/core-concepts/manuscript",
                        title: "Manuscripts",
                        content:
                          "Manuscripts establish the required schema for converting various data sources into datasets. With manuscripts, developers can play data like Lego blocks, allowing for creative use cases such as universal AI training.",
                      },
                      {
                        link: "https://docs.chainbase.com/theia/World_model/welcome",
                        title: "CVM Interface",
                        content:
                          "The CVM Interface offers standardized interface protocols for interacting and communicating with CVM. This enables developers to efficiently write and manage Manuscripts on the network, as well as access Datasets within the data network.",
                      },
                      {
                        link: "https://docs.chainbase.com/core-concepts/architecture/execution_layer",
                        title: "Execution Layer",
                        content:
                          "The execution layer is supported by the Chainbase Virtual Machine (CVM) and Eigenlayer AVS, enabling efficient parallel computing and ensuring Ethereum security, respectively.",
                      },
                      {
                        link: "https://docs.chainbase.com/core-concepts/architecture/consensus_layer",
                        title: "Consensus Layer",
                        content:
                          "The consensus layer guarantees that all network nodes achieve consensus on data and state consistency, utilizing CometBFT's instant finality to achieve data freshness within milliseconds.",
                      },
                      {
                        link: "https://docs.chainbase.com/core-concepts/architecture/data_accessibility_layer",
                        title: "Data Accessibility Layer",
                        content:
                          "The data accessibility layer effectively handles data access and storage within the network, supporting both streaming and batch data access interfaces while also ensuring data validity.",
                      },
                    ];
                    return (
                      (0, e.useLayoutEffect)(function () {
                        var n = document.getElementById("phase-5-scroll");
                        me.timeline({
                          scrollTrigger: {
                            scrub: 1,
                            pin: "#phase-5",
                            trigger: "#phase-5-scroll",
                            start: "top-=".concat(
                              window.screen.availWidth < 1560 ? 100 : 180
                            ),
                            end: function () {
                              return "bottom+=".concat(2 * n.clientHeight);
                            },
                            onUpdate: function (n) {
                              var e;
                              r(
                                (e = n.progress) < 0.1
                                  ? 0
                                  : e < 0.35
                                  ? 1
                                  : e < 0.6
                                  ? 2
                                  : e < 0.85
                                  ? 3
                                  : 4
                              );
                            },
                            snap: {
                              snapTo: 0.25,
                              duration: { min: 0.1, max: 0.5 },
                              delay: 0.5,
                            },
                            fastScrollEnd: !0,
                            markers: !1,
                          },
                        });
                      }, []),
                      (0, A.jsxs)(T.ThemeProvider, {
                        theme: T.DarkTheme,
                        children: [
                          (0, A.jsxs)("div", {
                            className: (0, C.css)(
                              Jt ||
                                (Jt = n([
                                  "\n                    display: none;\n                    background: #000;\n                    padding: 64px 48px;\n                    border-top: 2px solid #1a1a1a;\n                    @media (max-width: 1560px) {\n                        display: block;\n                    }\n                ",
                                ]))
                            ),
                            children: [
                              (0, A.jsx)("p", {
                                className: (0, C.css)(
                                  ni ||
                                    (ni = n([
                                      "\n                        color: #e9e9e9;\n                        font-size: 48px;\n                        font-weight: 600;\n                        text-transform: uppercase;\n                        margin-bottom: 48px !important;\n                        @media (max-width: 1560px) {\n                            font-size: 36px;\n                            margin-bottom: 36px !important;\n                        }\n                    ",
                                    ]))
                                ),
                                children: "Architecture",
                              }),
                              (0, A.jsx)("p", {
                                className: (0, C.css)(
                                  ei ||
                                    (ei = n([
                                      "\n                        width: 416px;\n                        color: #a3a3a3;\n                        font-size: 24px;\n                        font-weight: 500;\n                        @media (max-width: 1560px) {\n                            display: block;\n                            width: 80%;\n                            font-size: 21px;\n                            line-height: 150%;\n                        }\n                    ",
                                    ]))
                                ),
                                children:
                                  "A novel dual-chain technology architecture that bridges the programmability and composability of crypto data, which supports high throughput, low latency, and eventual determinism, as well as higher cybersecurity through a dual staking model.",
                              }),
                            ],
                          }),
                          (0, A.jsxs)("section", {
                            ref: t,
                            id: "phase-5",
                            className: (0, C.css)(
                              ti ||
                                (ti = n([
                                  "\n                    padding: 180px 72px;\n                    background: #000;\n                    border-top: 2px solid #1a1a1a;\n                    display: flex;\n                    gap: ",
                                  "rem;\n                    position: relative;\n                    @media (max-width: 1560px) {\n                        border-top: unset;\n                        padding: 0px 72px 56px;\n                        gap: ",
                                  "rem;\n                    }\n                    @media (max-width: 1280px) {\n                        padding: 0px 56px 48px;\n                        gap: ",
                                  "rem;\n                    }\n                    @media (max-width: 768px) {\n                        padding: 0px 48px 32px;\n                        gap: 0px;\n                    }      \n                    @media (max-width: 568px) {\n                        padding: 0px 24px 16px;\n                        gap: 0px;\n                    }                                         \n                ",
                                ])),
                              (5 * window.innerWidth) / 1920,
                              (3 * window.innerWidth) / 1920,
                              window.innerWidth / 1920
                            ),
                            children: [
                              (0, A.jsxs)("div", {
                                className: (0, C.css)(
                                  ii ||
                                    (ii = n([
                                      "\n                        @media (max-width: 1560px) {\n                            display: none;\n                        }\n                    ",
                                    ]))
                                ),
                                children: [
                                  (0, A.jsx)("p", {
                                    className: (0, C.css)(
                                      ai ||
                                        (ai = n([
                                          "\n                            color: #e9e9e9;\n                            font-size: 48px;\n                            font-weight: 600;\n                            text-transform: uppercase;\n                            margin-bottom: 48px !important;\n                        ",
                                        ]))
                                    ),
                                    children: "Architecture",
                                  }),
                                  (0, A.jsx)("p", {
                                    className: (0, C.css)(
                                      ri ||
                                        (ri = n([
                                          "\n                            width: 416px;\n                            color: #a3a3a3;\n                            font-size: 24px;\n                            font-weight: 500;\n                        ",
                                        ]))
                                    ),
                                    children:
                                      "A novel dual-chain technology architecture that bridges the programmability and composability of crypto data, which supports high throughput, low latency, and eventual determinism, as well as higher cybersecurity through a dual staking model.",
                                  }),
                                ],
                              }),
                              (0, A.jsx)("div", {
                                id: "phase-5-scroll",
                                className: (0, C.css)(
                                  oi ||
                                    (oi = n([
                                      "\n                        width: 33px;\n                        height: 860px;\n                        position: relative;\n                        @media (max-width: 568px) {                                \n                            visibility: hidden;\n                            width: 0px;\n                        }\n\n                    ",
                                    ]))
                                ),
                                children: ["01", "02", "03", "04", "05"].map(
                                  function (e, t) {
                                    return (0, A.jsx)(
                                      "div",
                                      {
                                        className:
                                          (0, C.css)(
                                            si ||
                                              (si = n([
                                                "\n                                        height: 20%;\n                                        width: 100%;\n                                        @media (max-width: 1440px) {\n                                            height: 96px;\n                                        }\n                                        border-left-width: ",
                                                ";\n                                        border-left-color: ",
                                                ";\n                                        border-left-style: solid;\n                                        position: relative;\n                                        color: ",
                                                ";\n                                    ",
                                              ])),
                                            a === t ? "2px" : "1px",
                                            a === t ? "#a59dff" : "#1a1a1a",
                                            a === t ? "#a59dff" : "#999"
                                          ) + " phase-5-scroll-bar",
                                        children: (0, A.jsx)("span", {
                                          className: (0, C.css)(
                                            pi ||
                                              (pi = n([
                                                "\n                                        position: absolute;\n                                        left: 18px;\n                                        top: 14px;\n                                        font-size: 16px;\n                                        @media (max-width: 2000px) {\n                                            font-size: 12px;\n                                            left: 16px;\n                                        }\n                                        @media (max-width: 1560px) {\n                                            font-size: 10px;\n                                            left: 12px;\n                                        }\n                                    ",
                                              ]))
                                          ),
                                          children: e,
                                        }),
                                      },
                                      t
                                    );
                                  }
                                ),
                              }),
                              (0, A.jsxs)("div", {
                                className: (0, C.css)(
                                  di ||
                                    (di = n([
                                      "\n                        display: flex;\n                        position: relative;\n                        flex-grow: 1;\n                    ",
                                    ]))
                                ),
                                children: [
                                  (0, A.jsxs)(O.motion.div, {
                                    initial: { top: 240 },
                                    animate: { top: 240 - 35 * a },
                                    transition: {
                                      type: "spring",
                                      stiffness: 30,
                                      damping: 10,
                                    },
                                    className: (0, C.css)(
                                      ci ||
                                        (ci = n([
                                          "\n                            position: absolute;\n                            top: 240px;\n                            left: 100px;\n                            width: 400px;\n                            height: 75px;\n                            perspective: 100000px;\n                            @media (max-width: 1560px) {\n                                transform: scale(0.9);\n                                top: 200px;\n                                left: 50px;\n                            }   \n                            @media (max-width: 1280px) {\n                                transform: scale(0.85);\n                                top: 160px;\n                                left: 25px;\n                            }     \n                            @media (max-width: 1024px) {\n                                transform: scale(0.8);\n                                top: 120px;\n                                left: 0px;\n                            } \n                            @media (max-width: 768px) {                                \n                                transform: scale(0.65);\n                                top: 50px;\n                            }                 \n                            @media (max-width: 568px) {                                \n                                transform: scale(0.5);\n                                left: -72px;\n                            }                                                                                                                                    \n                        ",
                                        ]))
                                    ),
                                    children: [
                                      (0, A.jsx)(aa, {
                                        zIndex: 501,
                                        isTop: !0,
                                        focusBarIndex: a,
                                      }),
                                      (0, A.jsx)(aa, {
                                        text: "Manuscripts",
                                        zIndex: 500,
                                        focusBarIndex: a,
                                        index: 0,
                                      }),
                                      (0, A.jsx)(aa, {
                                        text: "CVM INTERFACE",
                                        zIndex: 499,
                                        focusBarIndex: a,
                                        index: 1,
                                      }),
                                      (0, A.jsx)(aa, {
                                        text: "EXECUTION",
                                        zIndex: 498,
                                        focusBarIndex: a,
                                        index: 2,
                                      }),
                                      (0, A.jsx)(aa, {
                                        text: "CONSENSUS",
                                        zIndex: 497,
                                        focusBarIndex: a,
                                        index: 3,
                                      }),
                                      (0, A.jsx)(aa, {
                                        text: "DATA ACCESSIBILITY",
                                        zIndex: 496,
                                        focusBarIndex: a,
                                        index: 4,
                                        fontSize: (0, C.css)(
                                          li ||
                                            (li = n([
                                              "\n                                font-size: 28px;\n                            ",
                                            ]))
                                        ),
                                      }),
                                    ],
                                  }),
                                  (0, A.jsxs)("div", {
                                    className: (0, C.css)(
                                      xi ||
                                        (xi = n([
                                          "\n                            width: 760px;\n                            height: 497px;\n                            border-radius: 16px;\n                            border: 1px solid #e3e3e3;\n                            background: #000;\n                            position: absolute;\n                            top: ",
                                          "px;\n                            top: 48%;\n                            transform: translateY(-197px);\n                            right: 16px;\n                            display: flex;\n                            flex-direction: column;\n                            gap: 2rem;\n                            @media (max-width: 2000px) {\n                                width: 554px;\n                                height: 394px;\n                            }\n                            @media (max-width: 1560px) {\n                                width: 504px;\n                                height: 364px;\n                            }\n                            @media (max-width: 1280px) {\n                                width: 350px;\n                                height: 292px;\n                            }\n                            @media (max-width: 768px) {\n                                width: 263px;\n                                right: 0px;\n                            }            \n                            @media (max-width: 568px) {\n                                width: 203px;\n                            }                                                   \n                        ",
                                        ])),
                                      (420 * window.innerWidth) / 1920
                                    ),
                                    children: [
                                      (0, A.jsx)(O.AnimatePresence, {
                                        children: (0, A.jsxs)(
                                          O.motion.article,
                                          {
                                            initial: { opacity: 0 },
                                            animate: { opacity: 1 },
                                            exit: { opacity: 0 },
                                            transition: { duration: 0.5 },
                                            children: [
                                              (0, A.jsx)(O.motion.p, {
                                                className: (0, C.css)(
                                                  hi ||
                                                    (hi = n([
                                                      "\n                                        color: #e9e9e9;\n                                        font-size: 48px;\n                                        font-weight: 600;\n                                        white-space: nowrap;\n                                        text-transform: uppercase;\n                                        position: absolute;\n                                        top: 48px;\n                                        left: 48px;\n                                        @media (max-width: 2000px) {\n                                            font-size: 32px;\n                                        }\n                                        @media (max-width: 1560px) {\n                                            font-size: 28px;\n                                            top: 35px;\n                                            left: 30px;\n                                        }\n                                        @media (max-width: 1280px) {\n                                            font-size: 21px;\n                                            top: 35px;\n                                            left: 30px;\n                                        }\n                                        @media (max-width: 768px) {\n                                            font-size: 15px;\n                                            top: 26px;\n                                            left: 21px;\n                                        }     \n                                        @media (max-width: 568px) {\n                                            font-size: 12px;\n                                        }                                                                            \n                                    ",
                                                    ]))
                                                ),
                                                children: s[a].title,
                                              }),
                                              (0, A.jsx)(O.motion.p, {
                                                className: (0, C.css)(
                                                  mi ||
                                                    (mi = n([
                                                      "\n                                        color: #e9e9e9;\n                                        font-size: 28px;\n                                        font-weight: 500;\n                                        position: absolute;\n                                        width: 546px;\n                                        top: 132px;\n                                        left: 48px;\n                                        @media (max-width: 2000px) {\n                                            font-size: 20px;\n                                            width: 446px;\n                                            top: 112px;\n                                        }\n                                        @media (max-width: 1560px) {\n                                            font-size: 16px;\n                                            line-height: 130%;\n                                            width: 406px;\n                                            top: 112px;\n                                            left: 30px;\n                                        }\n                                        @media (max-width: 1280px) {\n                                            font-size: 14px;\n                                            line-height: 130%;\n                                            top: 92px;\n                                            width: 290px;\n                                        }  \n                                        @media (max-width: 768px) {\n                                            width: 217px;\n                                            font-size: 13px;\n                                            top: 82px;\n                                            left: 21px;\n                                        }        \n                                        @media (max-width: 568px) {\n                                            font-size: 10px;\n                                            width: 153px;\n                                        }                                                                        \n                                    ",
                                                    ]))
                                                ),
                                                children: s[a].content,
                                              }),
                                            ],
                                          },
                                          a
                                        ),
                                      }),
                                      
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      })
                    );
                  }
                  var sa,
                    pa,
                    da,
                    ca,
                    la,
                    xa,
                    ha,
                    ma,
                    ua,
                    fa,
                    ga,
                    wa,
                    ba,
                    va,
                    ya,
                    ja,
                    za,
                    Sa,
                    Na,
                    ka,
                    Ea,
                    Ca,
                    Ta,
                    Oa,
                    Aa,
                    Ia,
                    La = (0, C.keyframes)(
                      ui ||
                        (ui = n([
                          "\n  from {\n    transform: translateX(0);\n  }\n  to {\n    transform: translateX(-100%);\n  }\n",
                        ]))
                    );
                  function Pa() {
                    var t = (0, e.useRef)(null),
                      i = (0, e.useRef)(null),
                      a = (0, e.useRef)(null),
                      r = (0, e.useRef)(null),
                      o = (0, e.useRef)(null);
                    hn(9, t);
                    var s,
                      p = (0, ln.useQuery)({
                        queryKey: ["ascii-hash-9"],
                        queryFn:
                          ((s = D(
                            regeneratorRuntime.mark(function n() {
                              return regeneratorRuntime.wrap(function (n) {
                                for (;;)
                                  switch ((n.prev = n.next)) {
                                    case 0:
                                      return n.abrupt(
                                        "return",
                                        fetch("/public/ascii-9.txt").then(
                                          function (n) {
                                            return n.text();
                                          }
                                        )
                                      );
                                    case 1:
                                    case "end":
                                      return n.stop();
                                  }
                              }, n);
                            })
                          )),
                          function () {
                            return s.apply(this, arguments);
                          }),
                      }),
                      d = p.data;
                    return (
                      (0, e.useLayoutEffect)(function () {
                        var n = me.timeline({
                            scrollTrigger: {
                              trigger: t.current,
                              toggleActions: "play none reverse none",
                              start: "top-=79",
                              end: "top 50%",
                            },
                          }),
                          e = document.querySelectorAll(".phase6-card-title"),
                          s = document.querySelectorAll(".phase6-card");
                        n.to(t.current, {
                          ease: "power3.in",
                          backgroundColor: "#f9f9f9",
                        })
                          .to(
                            i.current,
                            {
                              ease: "power3.in",
                              color: "#000",
                              backgroundColor: "#f9f9f9",
                            },
                            "<"
                          )
                          .to(
                            a.current,
                            { ease: "power3.in", backgroundColor: "#000" },
                            "<"
                          )
                          .to(
                            r.current,
                            { ease: "power3.in", color: "#000" },
                            "<"
                          )
                          .to(e, { ease: "power3.in", color: "#000" }, "<")
                          .to(
                            o.current,
                            { ease: "power3.in", color: "#D8D8D8" },
                            "<"
                          )
                          .to(
                            s,
                            { ease: "power3.in", backgroundColor: "#f9f9f9" },
                            "<"
                          );
                        var p = document.getElementById("phase-8");
                        me.to("#navbar", {
                          scrollTrigger: {
                            trigger: t.current,
                            endTrigger: "#phase-9",
                            start: "top-=79",
                            end: function () {
                              return "top+=".concat(p.clientHeight - 79);
                            },
                            onEnter: function () {
                              return xn.emitter.emit("navbarTheme", "light");
                            },
                            onEnterBack: function () {
                              return xn.emitter.emit("navbarTheme", "light");
                            },
                            onLeaveBack: function () {
                              return xn.emitter.emit("navbarTheme", "dark");
                            },
                            onLeave: function () {
                              return xn.emitter.emit("navbarTheme", "dark");
                            },
                            toggleActions: "play reverse play reverse",
                          },
                        });
                      }, []),
                      (0, A.jsxs)("section", {
                        ref: t,
                        className: (0, C.css)(
                          fi ||
                            (fi = n([
                              "\n                padding: 46px 68px;\n                padding-bottom: 270px;\n                width: 100%;\n                background: #000;\n                display: flex;\n                gap: 3rem;\n                @media (max-width: 1280px) {\n                    flex-direction: column;\n                    padding-bottom: 140px;\n                    gap: 2rem;\n                }\n                @media (max-width: 768px) {\n                    padding: 21px 32px;\n                    gap: 1rem;\n                }\n                position: relative;\n            ",
                            ]))
                        ),
                        children: [
                          (0, A.jsx)("div", {
                            ref: o,
                            className: (0, C.css)(
                              gi ||
                                (gi = n([
                                  "\n                    color: #303030;\n                ",
                                ]))
                            ),
                            children: (0, A.jsx)("pre", {
                              id: "ascii-bg-9",
                              className: (0, C.css)(
                                wi ||
                                  (wi = n([
                                    "\n                        position: absolute;\n                        z-index: 0;\n                        top: 0;\n                        left: 0;\n                        font-size: 9.5px;\n                        width: 210px;\n                        cursor: default;\n                    ",
                                  ]))
                              ),
                              children: d,
                            }),
                          }),
                          (0, A.jsx)("p", {
                            ref: i,
                            className: (0, C.css)(
                              bi ||
                                (bi = n([
                                  "\n                    color: #e9e9e9;\n                    width: 563px;\n                    font-size: 48px;\n                    z-index: 2;\n                    background: #000;\n                    text-transform: uppercase;\n                    font-weight: 600;\n                    @media (max-width: 768px) {\n                        width: 90%;\n                        font-size: 32px;\n                    }\n                ",
                                ]))
                            ),
                            children: "Chainbase in Numbers",
                          }),
                          (0, A.jsxs)("div", {
                            className: (0, C.css)(
                              vi ||
                                (vi = n([
                                  "\n                    flex-grow: 1;\n                    padding-right: 168px;\n                    display: flex;\n                    flex-direction: column;\n                    @media (max-width: 1280px) {\n                        padding-right: 88px;\n                    }\n                    @media (max-width: 768px) {\n                        padding-right: 48px;\n                    }\n                ",
                                ]))
                            ),
                            children: [
                              (0, A.jsx)("p", {
                                ref: a,
                                className: (0, C.css)(
                                  yi ||
                                    (yi = n([
                                      "\n                        width: fit-content;\n                        color: #a3a3a3;\n                        font-size: 12px;\n                        font-weight: 500;\n                        margin-bottom: 60px !important;\n                        text-align: right;\n                        align-self: flex-end;\n                        padding: 8px 14px;\n                        z-index: 10;\n                        @media (max-width: 768px) {\n                            margin-bottom: 24px !important;\n                        }\n                    ",
                                    ]))
                                ),
                                children:
                                  "* Data from indexing of data activity on Chainbase As of May 16, 2024",
                              }),
                              (0, A.jsxs)("div", {
                                className: (0, C.css)(
                                  ji ||
                                    (ji = n([
                                      "\n                        display: grid;\n                        grid-template-columns: repeat(2, 1fr);\n                        grid-gap: 24px;\n                        justify-items: stretch;\n                        align-items: stretch;\n                        @media (max-width: 968px) {\n                            grid-template-columns: repeat(1, 1fr);\n                        }\n                    ",
                                    ]))
                                ),
                                children: [
                                  (0, A.jsx)(Da, {
                                    title: "500B+",
                                    description: "PROCESSED TXS",
                                  }),
                                  (0, A.jsx)(Da, {
                                    title: "15K+",
                                    description: "DEVELOPERS",
                                  }),
                                  (0, A.jsx)(Da, {
                                    title: "150M+",
                                    description: "QUERIES/DAY",
                                  }),
                                  (0, A.jsx)(Da, {
                                    title: "8K+",
                                    description: "PROJECTS",
                                  }),
                                ],
                              }),
                              (0, A.jsxs)("div", {
                                className:
                                  (0, C.css)(
                                    zi ||
                                      (zi = n([
                                        "\n                            display: flex;\n                            justify-content: space-between;\n                            align-items: center;\n                            padding: 48px;\n                            padding-right: 0px;\n                            border: 2px solid #1a1a1a;\n                            border-radius: 16px;\n                            position: relative;\n                            margin-top: 16px;\n                            z-index: 2;\n                            @media (max-width: 968px) {\n                                padding: 21px;\n                            }\n                        ",
                                      ]))
                                  ) + " phase6-card",
                                children: [
                                  (0, A.jsx)("div", {
                                    className: (0, C.css)(
                                      Si ||
                                        (Si = n([
                                          "\n                            position: absolute;\n                            top: 20px;\n                            left: 20px;\n                            width: 14px;\n                            height: 14px;\n                            border-bottom: 1px solid #e9e9e9;\n                            border-right: 1px solid #e9e9e9;\n                            @media (max-width: 968px) {\n                                display: none;\n                            }\n                        ",
                                        ]))
                                    ),
                                  }),
                                  (0, A.jsxs)("div", {
                                    children: [
                                      (0, A.jsx)("p", {
                                        ref: r,
                                        className: (0, C.css)(
                                          Ni ||
                                            (Ni = n([
                                              "\n                                font-size: 80px;\n                                font-weight: 500;\n                                text-transform: uppercase;\n                                @media (max-width: 768px) {\n                                    font-size: 40px;\n                                }\n                            ",
                                            ]))
                                        ),
                                        children: "20+",
                                      }),
                                      (0, A.jsx)("p", {
                                        className: (0, C.css)(
                                          ki ||
                                            (ki = n([
                                              "\n                                color: #a3a3a3;\n                                font-size: 18px;\n                                font-weight: 500;\n                                text-transform: uppercase;\n                                @media (max-width: 768px) {\n                                    font-size: 12px;\n                                }\n                            ",
                                            ]))
                                        ),
                                        children: "BLOCKCHAINS",
                                      }),
                                    ],
                                  }),
                                  (0, A.jsx)("div", {
                                    className: (0, C.css)(
                                      Ei ||
                                        (Ei = n([
                                          "\n                            display: flex;\n                            justify-content: center;\n                            width: 600px;\n                            height: 175px;\n                            border-left: 1px solid #000;\n                            font-size: 140px;\n                            overflow: hidden;\n                            @media (max-width: 768px) {\n                                height: 80px;\n                                font-size: 70px;\n                            }\n                        ",
                                        ]))
                                    ),
                                    children: [!0, !0].map(function (e, t) {
                                      return (0, A.jsx)(
                                        "div",
                                        {
                                          className: (0, C.css)(
                                            Ci ||
                                              (Ci = n([
                                                "\n                                    display: inline-flex;\n                                    height: 100%;\n                                    gap: 1rem;\n                                    align-items: center;\n                                    animation: ",
                                                " 8s linear infinite;\n                                ",
                                              ])),
                                            La
                                          ),
                                          children: [
                                            "apt",
                                            "fantom",
                                            "sui",
                                            "ava",
                                            "op",
                                            "ton",
                                            "eth",
                                            "bnb",
                                            "polygon",
                                            "tron",
                                            "btc",
                                            "sol",
                                          ].map(function (n, e) {
                                            return (0,
                                            A.jsx)(Fa, { name: n }, e);
                                          }),
                                        },
                                        t
                                      );
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      })
                    );
                  }
                  function Fa(t) {
                    var i = t.name,
                      a = o((0, e.useState)(!1), 2),
                      r = a[0],
                      s = a[1],
                      p = (0, e.useContext)(Zt).mountedPhases;
                    return (0, A.jsx)("video", {
                      className: (0, C.css)(
                        Ti ||
                          (Ti = n([
                            "\n                width: ",
                            "px;\n                border-radius: 999px;\n                @media (max-width: 768px) {\n                    width: ",
                            "px;\n                }\n            ",
                          ])),
                        r ? 120 : 0,
                        r ? 60 : 0
                      ),
                      onLoadedData: function () {
                        return s(!0);
                      },
                      autoPlay: !0,
                      playsInline: !0,
                      muted: !0,
                      loop: !0,
                      src:
                        p >= 6 ? "/public/chain-video/".concat(i, ".mov") : "",
                    });
                  }
                  function Da(e) {
                    var t = e.title,
                      i = e.description;
                    return (0, A.jsxs)("div", {
                      className:
                        (0, C.css)(
                          Oi ||
                            (Oi = n([
                              "\n                    padding: 48px;\n                    border: 2px solid #1a1a1a;\n                    border-radius: 16px;\n                    position: relative;\n                    z-index: 1;\n                    @media (max-width: 768px) {\n                        padding: 21px;\n                        border-radius: 8px;\n                    }\n                ",
                            ]))
                        ) + " phase6-card",
                      children: [
                        (0, A.jsx)("div", {
                          className: (0, C.css)(
                            Ai ||
                              (Ai = n([
                                "\n                    position: absolute;\n                    top: 20px;\n                    left: 20px;\n                    width: 14px;\n                    height: 14px;\n                    border-bottom: 1px solid #e9e9e9;\n                    border-right: 1px solid #e9e9e9;\n                    @media (max-width: 968px) {\n                        display: none;\n                    }\n                ",
                              ]))
                          ),
                        }),
                        (0, A.jsx)("p", {
                          className:
                            (0, C.css)(
                              Ii ||
                                (Ii = n([
                                  "\n                        color: #e9e9e9;\n                        font-size: 80px;\n                        font-weight: 500;\n                        text-transform: uppercase;\n                        @media (max-width: 768px) {\n                            font-size: 40px;\n                        }\n                    ",
                                ]))
                            ) + " phase6-card-title",
                          children: t,
                        }),
                        (0, A.jsx)("p", {
                          className: (0, C.css)(
                            Li ||
                              (Li = n([
                                "\n                    color: #a3a3a3;\n                    font-size: 18px;\n                    font-weight: 500;\n                    text-transform: uppercase;\n                    @media (max-width: 768px) {\n                        font-size: 12px;\n                    }\n                ",
                              ]))
                          ),
                          children: i,
                        }),
                      ],
                    });
                  }
                  var Ra,
                    _a,
                    Ma,
                    Wa,
                    Ba,
                    qa,
                    Ha,
                    Ya,
                    Xa,
                    Ua,
                    Za,
                    Qa,
                    Va,
                    $a,
                    Ka,
                    Ga,
                    Ja,
                    nr,
                    er,
                    tr,
                    ir,
                    ar,
                    rr,
                    or,
                    sr,
                    pr,
                    dr,
                    cr,
                    lr,
                    xr,
                    hr,
                    mr,
                    ur,
                    fr,
                    gr,
                    wr,
                    br,
                    vr,
                    yr,
                    jr,
                    zr,
                    Sr,
                    Nr,
                    kr,
                    Er,
                    Cr,
                    Tr = (0, C.keyframes)(
                      sa ||
                        (sa = n([
                          "\n  from {\n    transform: translateX(0);\n  }\n  to {\n    transform: translateX(-100%);\n  }\n",
                        ]))
                    );
                  function Or() {
                    var t = (0, e.useRef)(null);
                    return (
                      hn(9, t),
                      (0, A.jsxs)("section", {
                        ref: t,
                        className: (0, C.css)(
                          pa ||
                            (pa = n([
                              "\n                padding: 32px 0;\n                background-color: #f9f9f9;\n                overflow: hidden;\n                border-top: 1px solid #dcdcdc;\n            ",
                            ]))
                        ),
                        children: [
                          (0, A.jsx)("div", {
                            className: (0, C.css)(
                              da ||
                                (da = n([
                                  "\n                    color: #000;\n                    font-size: 140px;\n                    @media (max-width: 1280px) {\n                        font-size: 100px;\n                    }\n                    @media (max-width: 1024px) {\n                        font-size: 70px;\n                    }\n                    @media (max-width: 768px) {\n                        font-size: 50px;\n                    }\n                    @media (max-width: 568px) {\n                        font-size: 40px;\n                    }\n                    font-weight: 600;\n                    width: 100%;\n                    position: sticky;\n                    overflow: hidden;\n                    position: relative;\n                    white-space: nowrap;\n                    display: flex;\n                    align-items: center;\n                    margin-bottom: 48px;\n                ",
                                ]))
                            ),
                            children: (0, A.jsxs)("div", {
                              className: (0, C.css)(
                                ca ||
                                  (ca = n([
                                    "\n                        display: flex;\n                        width: max-content;\n                        text-transform: uppercase;\n                    ",
                                  ]))
                              ),
                              children: [
                                (0, A.jsxs)("div", {
                                  className: (0, C.css)(
                                    la ||
                                      (la = n([
                                        "\n                            display: inline-flex;\n                            align-items: center;\n                            animation: ",
                                        " 16s linear infinite;\n                            @media (max-width: 1024px) {\n                                animation-duration: 14s;\n                            }\n                            @media (max-width: 768px) {\n                                animation-duration: 12s;\n                            }\n                            @media (max-width: 568px) {\n                                animation-duration: 10s;\n                            }\n                        ",
                                      ])),
                                    Tr
                                  ),
                                  children: [
                                    "The official products created by Chainbase Labs.  ",
                                    (0, A.jsx)("img", {
                                      className: (0, C.css)(
                                        xa ||
                                          (xa = n([
                                            "\n                                width: 96px;\n                                height: 96px;\n                                @media (max-width: 1024px) {\n                                    width: 80px;\n                                    height: 80px;\n                                }\n                                @media (max-width: 768px) {\n                                    width: 60px;\n                                    height: 60px;\n                                }\n                                @media (max-width: 568px) {\n                                    width: 40px;\n                                    height: 40px;\n                                }\n                            ",
                                          ]))
                                      ),
                                      src: "/public/chainbase_horizontal_white.png",
                                    }),
                                  ],
                                }),
                                (0, A.jsx)("div", {
                                  className: (0, C.css)(
                                    ha ||
                                      (ha = n([
                                        "\n                            display: inline-block;\n                            animation: ",
                                        " 16s linear infinite;\n                            @media (max-width: 1024px) {\n                                animation-duration: 14s;\n                            }\n                            @media (max-width: 768px) {\n                                animation-duration: 12s;\n                            }\n                            @media (max-width: 568px) {\n                                animation-duration: 10s;\n                            }\n                        ",
                                      ])),
                                    Tr
                                  ),
                                  children:
                                    "The official products created by Chainbase Labs.  ",
                                }),
                              ],
                            }),
                          }),
                          (0, A.jsx)("div", {
                            className: (0, C.css)(
                              ma ||
                                (ma = n([
                                  "\n                    padding: 0px 72px;\n                    display: flex;\n                    overflow: hidden;\n                    @media (max-width: 768px) {\n                        padding: 0px 36px;\n                    }\n                ",
                                ]))
                            ),
                            children: (0, A.jsxs)("div", {
                              className: (0, C.css)(
                                ua ||
                                  (ua = n([
                                    "\n                        width: 100%;\n                        height: 600px;\n                        background-color: #e9e9e9;\n                        border-radius: 32px;\n                        position: relative;\n                        display: flex;\n                        @media (max-width: 1024px) {\n                            height: 480px;\n                        }\n                        @media (max-width: 768px) {\n                            height: 320px;\n                        }\n                        @media (max-width: 698px) {\n                            height: 240px;\n                        }\n                    ",
                                  ]))
                              ),
                              children: [
                                (0, A.jsx)(Ie, {}),
                                (0, A.jsxs)("div", {
                                  className: (0, C.css)(
                                    fa ||
                                      (fa = n([
                                        "\n                            display: flex;\n                            flex-direction: column;\n                            justify-content: center;\n                            gap: 32px;\n                            padding: 0px 72px;\n                            @media (max-width: 1280px) {\n                                padding: 0px 36px;\n                            }\n                            @media (max-width: 968px) {\n                                padding: 0px 28px;\n                            }\n                        ",
                                      ]))
                                  ),
                                  children: [
                                    (0, A.jsx)("p", {
                                      className: (0, C.css)(
                                        ga ||
                                          (ga = n([
                                            "\n                                color: #000;\n                                font-size: 48px;\n                                font-weight: 600;\n                                @media (max-width: 1024px) {\n                                    font-size: 36px;\n                                }\n                                @media (max-width: 968px) {\n                                    font-size: 24px;\n                                }\n                            ",
                                          ]))
                                      ),
                                      children: "Chainbase Data Network",
                                    }),
                                    (0, A.jsxs)("div", {
                                      children: [
                                        (0, A.jsx)("p", {
                                          className: (0, C.css)(
                                            wa ||
                                              (wa = n([
                                                "\n                                    color: #000;\n                                    font-size: 20px;\n                                    font-weight: 600;\n                                    width: 772px;\n                                    @media (max-width: 1440px) {\n                                        font-size: 18px;\n                                    }\n                                    @media (max-width: 1024px) {\n                                        font-size: 16px;\n                                    }\n                                    @media (max-width: 968px) {\n                                        font-size: 12px;\n                                    }\n                                    @media (max-width: 568px) {\n                                        width: 100%;\n                                    }\n                                ",
                                              ]))
                                          ),
                                          children:
                                            "The AI Era's Largest Decentralized, Omnichain Crypto Data Foundation",
                                        }),
                                        (0, A.jsx)("p", {
                                          className: (0, C.css)(
                                            ba ||
                                              (ba = n([
                                                "\n                                    color: #000;\n                                    font-size: 20px;\n                                    font-weight: 600;\n                                    width: 772px;\n                                    @media (max-width: 1440px) {\n                                        font-size: 18px;\n                                    }\n                                    @media (max-width: 1024px) {\n                                        font-size: 16px;\n                                    }\n                                    @media (max-width: 968px) {\n                                        font-size: 12px;\n                                    }\n                                    @media (max-width: 568px) {\n                                        width: 100%;\n                                    }\n                                ",
                                              ]))
                                          ),
                                          children:
                                            "Open, Transparent, and Trustless.",
                                        }),
                                      ],
                                    }),
                                    (0, A.jsxs)("div", {
                                      onClick: function () {
                                        return window.open(
                                          "https://docs.chainbase.com/",
                                          "_blank"
                                        );
                                      },
                                      "data-block": "flare_button",
                                      className:
                                        (0, C.css)(
                                          va ||
                                            (va = n([
                                              "\n                                    position: relative;\n                                    align-items: center;\n                                    border-radius: 6.25rem;\n                                    color: #000;\n                                    cursor: pointer;\n                                    font-size: 16px;\n                                    font-weight: 500;\n                                    text-transform: uppercase;\n                                    justify-content: center;\n                                    overflow: hidden;\n                                    padding: 0px;\n                                    width: fit-content;\n                                    @media (max-width: 968px) {\n                                        font-size: 12px;\n                                    }\n                                    &:hover {\n                                        color: #f5f5f5;\n                                    }\n                                    &:after {\n                                        border: 1px solid #000;\n                                        border-radius: 6.25rem;\n                                    }\n                                ",
                                            ]))
                                        ) + " flare_button button--stroke",
                                      children: [
                                        (0, A.jsx)("span", {
                                          className:
                                            (0, C.css)(
                                              ya ||
                                                (ya = n([
                                                  "\n                                        &:before {\n                                            background-color: #000;\n                                        }\n                                    ",
                                                ]))
                                            ) + " button__flair",
                                        }),
                                        // (0, A.jsx)("span", {
                                        //   className:
                                        //     (0, C.css)(
                                        //       ja ||
                                        //         (ja = n([
                                        //           "\n                                        display: flex;\n                                        gap: 1rem;\n                                        background-repeat: no-repeat;\n                                        background-position: right 16px center;\n                                        padding: 20px 56px 20px 32px;\n                                        background-image: url('/public/link_out_black.svg');\n                                        @media (max-width: 968px) {\n                                            padding: 16px 36px 16px 24px;\n                                        }\n                                        &:before {\n                                            content: url('/public/link_out_white.svg'); /* Preload hover image */\n                                            display: none;\n                                        }\n                                        &:hover {\n                                            background-image: url('/public/link_out_white.svg');\n                                        }\n                                    ",
                                        //         ]))
                                        //     ) + " button__label",
                                        //   children: "Buy now",
                                        // }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, A.jsxs)("div", {
                                  className: (0, C.css)(
                                    za ||
                                      (za = n([
                                        "\n                            display: flex;\n                            flex-direction: column;\n                            align-items: center;\n                            gap: 2rem;\n                            width: 50%;\n                            max-width: 990px;\n                            min-width: 732px;\n                            right: 44px;\n                            top: 52px;\n                            position: absolute;\n                            @media (max-width: 1280px) {\n                                min-width: 482px;\n                                right: 24px;\n                                top: 20%;\n                            }\n                            @media (max-width: 968px) {\n                                min-width: 282px;\n                            }\n                            @media (max-width: 768px) {\n                                top: 15%;\n                            }\n                            @media (max-width: 698px) {\n                                display: none;\n                            }\n                        ",
                                      ]))
                                  ),
                                  children: [
                                    (0, A.jsx)("p", {
                                      className: (0, C.css)(
                                        Sa ||
                                          (Sa = n([
                                            "\n                                color: #000;\n                                font-size: 12px;\n                                font-weight: 500;\n                            ",
                                          ]))
                                      ),
                                      children: "DATA",
                                    }),
                                    (0, A.jsx)("img", {
                                      className: (0, C.css)(
                                        Na ||
                                          (Na = n([
                                            "\n                                width: 100%;\n                                max-width: 990px;\n                            ",
                                          ]))
                                      ),
                                      src: "/public/phase-7-card-1-background.png",
                                    }),
                                    (0, A.jsx)("p", {
                                      className: (0, C.css)(
                                        ka ||
                                          (ka = n([
                                            "\n                                color: #000;\n                                font-size: 12px;\n                                font-weight: 500;\n                            ",
                                          ]))
                                      ),
                                      children: "DATA",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, A.jsxs)("div", {
                            className: (0, C.css)(
                              Ea ||
                                (Ea = n([
                                  "\n                    display: grid;\n                    padding: 0px 72px;\n                    grid-template-columns: repeat(2, 1fr);\n                    grid-gap: 24px;\n                    justify-items: stretch;\n                    align-items: stretch;\n                    margin-top: 24px;\n                    @media (max-width: 1280px) {\n                        grid-template-columns: repeat(1, 1fr);\n                    }\n                    @media (max-width: 768px) {\n                        padding: 0px 36px;\n                    }\n                ",
                                ]))
                            ),
                            children: [
                              // (0, A.jsx)(Ar, {
                              //   link: "https://platform.chainbase.com",
                              //   title: "/ For Developers /",
                              //   description: "CRYPTO Data Platform",
                              //   detail:
                              //     "All-in-one Web3 data infrastructure for indexing, transforming, and utilizing large-scale on-chain data.",
                              //   color: "#23A4BA",
                              //   bgImg: "/public/phase7-card-bg-1.png",
                              // }),
                              // (0, A.jsx)(Ar, {
                              //   link: "https://theiachat.chainbase.com",
                              //   title: "/ For Everyone /",
                              //   description: "Crypto World Model",
                              //   detail:
                              //     "Theia, your go-to Crypto World Model, provides transparent and trustworthy intelligence, delivering advanced crypto insights to Web3.",
                              //   color: "#A59DFF",
                              //   bgImg: "/public/phase7-card-bg-2.png",
                              // }),
                            ],
                          }),
                        ],
                      })
                    );
                  }
                  function Ar(e) {
                    var t = e.title,
                      i = e.description,
                      a = e.detail,
                      r = e.color,
                      o = e.bgImg,
                      s = e.link,
                      p = e.upcoming;
                    return (0, A.jsxs)("div", {
                      className: (0, C.css)(
                        Ca ||
                          (Ca = n([
                            "\n                padding: 20px;\n                border: 2px solid #1a1a1a;\n                border-radius: 16px;\n                position: relative;\n                height: 560px;\n                z-index: 1;\n                background: url(",
                            ");\n                background-size: 120%;\n                background-position: center;\n                @media (max-width: 1024px) {\n                    height: 480px;\n                }\n                @media (max-width: 768px) {\n                    height: 320px;\n                }\n                @media (max-width: 698px) {\n                    height: 240px;\n                    background-size: 160%;\n                }\n            ",
                          ])),
                        o
                      ),
                      children: [
                        (0, A.jsx)(Ie, { color: "#999" }),
                        (0, A.jsx)("p", {
                          className: (0, C.css)(
                            Ta ||
                              (Ta = n([
                                "\n                    color: ",
                                ";\n                    font-size: 20px;\n                    font-weight: 500;\n                    text-transform: uppercase;\n                    position: absolute;\n                    top: 52px;\n                    left: 52px;\n                    @media (max-width: 768px) {\n                        top: 36px;\n                        left: 36px;\n                    }\n                    @media (max-width: 698px) {\n                        top: 24px;\n                        left: 24px;\n                    }\n                ",
                              ])),
                            r
                          ),
                          children: t,
                        }),
                        (0, A.jsx)("p", {
                          className: (0, C.css)(
                            Oa ||
                              (Oa = n([
                                "\n                    color: #e9e9e9;\n                    font-size: 36px;\n                    font-weight: 600;\n                    text-transform: uppercase;\n                    position: absolute;\n                    top: 237px;\n                    left: 52px;\n                    @media (max-width: 768px) {\n                        top: 106px;\n                        left: 36px;\n                        font-size: 28px;\n                    }\n                    @media (max-width: 698px) {\n                        top: 76px;\n                        left: 24px;\n                        font-size: 20px;\n                    }\n                ",
                              ]))
                          ),
                          children: i,
                        }),
                        (0, A.jsx)("p", {
                          className: (0, C.css)(
                            Aa ||
                              (Aa = n([
                                "\n                    color: #a3a3a3;\n                    font-size: 20px;\n                    font-weight: 500;\n                    position: absolute;\n                    width: 90%;\n                    top: 320px;\n                    left: 52px;\n                    @media (max-width: 768px) {\n                        top: 156px;\n                        left: 36px;\n                        font-size: 14px;\n                    }\n                    @media (max-width: 698px) {\n                        top: 126px;\n                        left: 24px;\n                        font-size: 12px;\n                    }\n                ",
                              ]))
                          ),
                          children: a,
                        }),
                        (0, A.jsxs)("div", {
                          onClick: function () {
                            return window.open(s, "_blank");
                          },
                          className: (0, C.css)(
                            Ia ||
                              (Ia = n([
                                "\n                    opacity: ",
                                ";\n                    pointer-events: ",
                                ";\n                    display: flex;\n                    font-size: 18px;\n                    padding: 12px 24px;\n                    font-weight: 600;\n                    align-items: center;\n                    border-radius: 57px;\n                    background: ",
                                ";\n                    text-transform: uppercase;\n                    width: fit-content;\n                    gap: 10px;\n                    position: absolute;\n                    top: 437px;\n                    left: 52px;\n                    cursor: pointer;\n                    @media (max-width: 768px) {\n                        top: 256px;\n                        left: 36px;\n                        padding: 8px 18px;\n                        font-size: 14px;\n                        gap: 6px;\n                    }\n                    @media (max-width: 698px) {\n                        top: 196px;\n                        left: 24px;\n                        font-size: 12px;\n                    }\n                ",
                              ])),
                            p ? 0.2 : 1,
                            p ? "none" : "",
                            r
                          ),
                          children: [
                            (0, A.jsx)(T.Icon, { icon: "link_out_black" }),
                          ],
                        }),
                      ],
                    });
                  }
                  function Ir() {
                    var t = (0, e.useRef)(null),
                      i = (0, e.useRef)(null);
                    return (
                      hn(9, i),
                      (0, e.useLayoutEffect)(function () {
                        if (window.screen.availWidth > 768) {
                          var n = me.timeline({
                              scrollTrigger: {
                                scrub: 1,
                                pin: !0,
                                trigger: i.current,
                                end: function () {
                                  return "+=" + i.current.clientHeight;
                                },
                                start: "top-=76",
                              },
                            }),
                            e = document.querySelectorAll(".phase-8-card");
                          n.to(
                            t.current,
                            {
                              x:
                                -(
                                  t.current.scrollWidth -
                                  document.documentElement.clientWidth
                                ) + "px",
                              ease: "power1",
                            },
                            "<"
                          ),
                            e.forEach(function (e) {
                              n.to(
                                e,
                                {
                                  paddingTop: "-80px",
                                  onUpdate: function () {
                                    (e.getBoundingClientRect().left <= 0 ||
                                      Number(
                                        e.style["padding-top"].replace("px", "")
                                      ) <= 52) &&
                                      ((e.style["padding-top"] = "52px"),
                                      me.killTweensOf(e));
                                  },
                                },
                                "<"
                              );
                            });
                        }
                        if (i.current) {
                          var a = new IntersectionObserver(
                            function (n) {
                              n[0].isIntersecting &&
                                (xn.emitter.emit("lazyLoadCommunityImages", !0),
                                a.disconnect());
                            },
                            { rootMargin: "0px", threshold: 0.01 }
                          );
                          return (
                            a.observe(i.current),
                            function () {
                              a.disconnect();
                            }
                          );
                        }
                      }, []),
                      (0, A.jsx)(T.ThemeProvider, {
                        theme: T.LightTheme,
                        children: (0, A.jsxs)("section", {
                          id: "phase-8",
                          ref: i,
                          className: (0, C.css)(
                            Ra ||
                              (Ra = n([
                                "\n                    background-color: #fff;\n                ",
                              ]))
                          ),
                          children: [
                            (0, A.jsx)("p", {
                              className: (0, C.css)(
                                _a ||
                                  (_a = n([
                                    "\n                        padding: 44px 72px;\n                        color: #000;\n                        border-top: 2px solid #000;\n                        border-bottom: 2px solid #000;\n                        font-size: 48px;\n                        font-weight: 600;\n                        text-transform: uppercase;\n                    ",
                                  ]))
                              ),
                              children: "Trusted by Leaders",
                            }),
                            (0, A.jsxs)("div", {
                              ref: t,
                              className: (0, C.css)(
                                Ma ||
                                  (Ma = n([
                                    "\n                        display: flex;\n                        height: 922px;\n                        @media (max-width: 768px) {\n                            flex-wrap: wrap;\n                            width: 100%;\n                            height: auto;\n                        }\n                    ",
                                  ]))
                              ),
                              children: [
                                (0, A.jsxs)(Lr, {
                                  bgColor: "#FFF2EE",
                                  title: "Defi",
                                  index: 0,
                                  children: [
                                    (0, A.jsx)("img", {
                                      className: (0, C.css)(
                                        Wa ||
                                          (Wa = n([
                                            "\n                                width: 160px;\n                                @media (max-width: 768px) {\n                                    width: 80px;\n                                }\n                            ",
                                          ]))
                                      ),
                                      src: "/public/partner/tbook.png",
                                    }),
                                    (0, A.jsx)("img", {
                                      className: (0, C.css)(
                                        Ba ||
                                          (Ba = n([
                                            "\n                                width: 220px;\n                                @media (max-width: 768px) {\n                                    width: 110px;\n                                }\n                            ",
                                          ]))
                                      ),
                                      src: "/public/partner/coin-summer-labs.png",
                                    }),
                                    (0, A.jsx)("img", {
                                      className: (0, C.css)(
                                        qa ||
                                          (qa = n([
                                            "\n                                width: 160px;\n                                @media (max-width: 768px) {\n                                    width: 80px;\n                                }\n                            ",
                                          ]))
                                      ),
                                      src: "/public/partner/solv.png",
                                    }),
                                    (0, A.jsx)("img", {
                                      className: (0, C.css)(
                                        Ha ||
                                          (Ha = n([
                                            "\n                                width: 123px;\n                                position: relative;\n                                left: 40px;\n                                @media (max-width: 768px) {\n                                    width: 60px;\n                                    left: 20px;\n                                }\n                            ",
                                          ]))
                                      ),
                                      src: "/public/partner/stake-kit.png",
                                    }),
                                  ],
                                }),
                                (0, A.jsxs)(Lr, {
                                  bgColor: "#EDEBFB",
                                  title: "Wallets",
                                  index: 1,
                                  children: [
                                    (0, A.jsx)("img", {
                                      className: (0, C.css)(
                                        Ya ||
                                          (Ya = n([
                                            "\n                                width: 153px;\n                                @media (max-width: 768px) {\n                                    width: 76px;\n                                }\n                            ",
                                          ]))
                                      ),
                                      src: "/public/partner/im-token.png",
                                    }),
                                    (0, A.jsx)("img", {
                                      className: (0, C.css)(
                                        Xa ||
                                          (Xa = n([
                                            "\n                                width: 145px;\n                                position: relative;\n                                top: 5px;\n                                left: 20px;\n                                @media (max-width: 768px) {\n                                    width: 72px;\n                                    top: 2px;\n                                    left: 10px;\n                                }\n                            ",
                                          ]))
                                      ),
                                      src: "/public/partner/m-safe.png",
                                    }),
                                    (0, A.jsx)("img", {
                                      className: (0, C.css)(
                                        Ua ||
                                          (Ua = n([
                                            "\n                                width: 153px;\n                                @media (max-width: 768px) {\n                                    width: 76px;\n                                }\n                            ",
                                          ]))
                                      ),
                                      src: "/public/partner/key-stone.png",
                                    }),
                                    (0, A.jsx)("img", {
                                      className: (0, C.css)(
                                        Za ||
                                          (Za = n([
                                            "\n                                width: 200px;\n                                position: relative;\n                                top: 10px;\n                                @media (max-width: 768px) {\n                                    width: 100px;\n                                    top: 5px;\n                                }\n                            ",
                                          ]))
                                      ),
                                      src: "/public/partner/token-pocket.png",
                                    }),
                                  ],
                                }),
                                (0, A.jsxs)(Lr, {
                                  bgColor: "#F4FFFC",
                                  title: "AI",
                                  index: 2,
                                  children: [
                                    (0, A.jsx)("img", {
                                      className: (0, C.css)(
                                        Qa ||
                                          (Qa = n([
                                            "\n                                width: 222px;\n                                @media (max-width: 768px) {\n                                    width: 111px;\n                                }\n                            ",
                                          ]))
                                      ),
                                      src: "/public/partner/io-net.png",
                                    }),
                                    (0, A.jsx)("img", {
                                      className: (0, C.css)(
                                        Va ||
                                          (Va = n([
                                            "\n                                width: 182px;\n                                position: relative;\n                                top: -10px;\n                                @media (max-width: 768px) {\n                                    width: 91px;\n                                    top: -5px;\n                                }\n                            ",
                                          ]))
                                      ),
                                      src: "/public/partner/kekkai.png",
                                    }),
                                    (0, A.jsx)("img", {
                                      className: (0, C.css)(
                                        $a ||
                                          ($a = n([
                                            "\n                                width: 161px;\n                                position: relative;\n                                left: 30px;\n                                @media (max-width: 768px) {\n                                    width: 80px;\n                                }\n                            ",
                                          ]))
                                      ),
                                      src: "/public/partner/0x-scope.png",
                                    }),
                                    (0, A.jsx)("img", {
                                      className: (0, C.css)(
                                        Ka ||
                                          (Ka = n([
                                            "\n                                width: 86px;\n                                position: relative;\n                                left: 45px;\n                                @media (max-width: 768px) {\n                                    width: 43px;\n                                }\n                            ",
                                          ]))
                                      ),
                                      src: "/public/partner/a-dot.png",
                                    }),
                                  ],
                                }),
                                (0, A.jsxs)(Lr, {
                                  bgColor: "#FFF2EE",
                                  title: "Security",
                                  index: 3,
                                  children: [
                                    (0, A.jsx)("img", {
                                      className: (0, C.css)(
                                        Ga ||
                                          (Ga = n([
                                            "\n                                width: 186px;\n                                position: relative;\n                                top: -10px;\n                                left: 40px;\n                                @media (max-width: 768px) {\n                                    width: 93px;\n                                    top: -5px;\n                                    left: 16px;\n                                }\n                            ",
                                          ]))
                                      ),
                                      src: "/public/partner/go-security.png",
                                    }),
                                    (0, A.jsx)("img", {
                                      className: (0, C.css)(
                                        Ja ||
                                          (Ja = n([
                                            "\n                                width: 190px;\n                                position: relative;\n                                left: 25px;\n                                top: -10px;\n                                @media (max-width: 768px) {\n                                    width: 95px;\n                                    top: -5px;\n                                }\n                            ",
                                          ]))
                                      ),
                                      src: "/public/partner/slowmist.png",
                                    }),
                                    (0, A.jsx)("img", {
                                      className: (0, C.css)(
                                        nr ||
                                          (nr = n([
                                            "\n                                width: 215px;\n                                position: relative;\n                                left: 25px;\n                                top: -5px;\n                                @media (max-width: 768px) {\n                                    width: 108px;\n                                    left: 12px;\n                                    top: -2px;\n                                }\n                            ",
                                          ]))
                                      ),
                                      src: "/public/partner/sufeheron.png",
                                    }),
                                  ],
                                }),
                                (0, A.jsxs)(Lr, {
                                  bgColor: "#EDEBFB",
                                  title: "Infra",
                                  index: 4,
                                  children: [
                                    (0, A.jsx)("img", {
                                      className: (0, C.css)(
                                        er ||
                                          (er = n([
                                            "\n                                width: 142px;\n                                position: relative;\n                                top: 20px;\n                                @media (max-width: 768px) {\n                                    width: 71px;\n                                    top: 10px;\n                                }\n                            ",
                                          ]))
                                      ),
                                      src: "/public/partner/nftscan.png",
                                    }),
                                    (0, A.jsx)("img", {
                                      className: (0, C.css)(
                                        tr ||
                                          (tr = n([
                                            "\n                                width: 222px;\n                                position: relative;\n                                left: 25px;\n                                top: -12px;\n                                @media (max-width: 768px) {\n                                    width: 111px;\n                                    top: -6px;\n                                    left: 12px;\n                                }\n                            ",
                                          ]))
                                      ),
                                      src: "/public/partner/element.png",
                                    }),
                                    (0, A.jsx)("img", {
                                      className: (0, C.css)(
                                        ir ||
                                          (ir = n([
                                            "\n                                width: 155px;\n                                position: relative;\n                                top: -10px;\n                                @media (max-width: 768px) {\n                                    width: 78px;\n                                    top: -5px;\n                                }\n                            ",
                                          ]))
                                      ),
                                      src: "/public/partner/gm-network.png",
                                    }),
                                    (0, A.jsx)("img", {
                                      className: (0, C.css)(
                                        ar ||
                                          (ar = n([
                                            "\n                                width: 186px;\n                                position: relative;\n                                left: 20px;\n                                top: -20px;\n                                @media (max-width: 768px) {\n                                    width: 93px;\n                                    top: -10px;\n                                    left: 10px;\n                                }\n                            ",
                                          ]))
                                      ),
                                      src: "/public/partner/ku-coin.png",
                                    }),
                                  ],
                                }),
                                (0, A.jsxs)(Lr, {
                                  bgColor: "#F4FFFC",
                                  title: "Social",
                                  index: 5,
                                  children: [
                                    (0, A.jsx)("img", {
                                      className: (0, C.css)(
                                        rr ||
                                          (rr = n([
                                            "\n                                width: 144px;\n                                @media (max-width: 768px) {\n                                    width: 72px;\n                                }\n                            ",
                                          ]))
                                      ),
                                      src: "/public/partner/mask.png",
                                    }),
                                    (0, A.jsx)("img", {
                                      className: (0, C.css)(
                                        or ||
                                          (or = n([
                                            "\n                                width: 164px;\n                                position: relative;\n                                left: 40px;\n                                @media (max-width: 768px) {\n                                    width: 82px;\n                                    left: 20px;\n                                }\n                            ",
                                          ]))
                                      ),
                                      src: "/public/partner/quest.png",
                                    }),
                                    (0, A.jsx)("img", {
                                      className: (0, C.css)(
                                        sr ||
                                          (sr = n([
                                            "\n                                width: 173px;\n                                position: relative;\n                                left: -10px;\n                                @media (max-width: 768px) {\n                                    width: 86px;\n                                    left: -5px;\n                                }\n                            ",
                                          ]))
                                      ),
                                      src: "/public/partner/debox.png",
                                    }),
                                    (0, A.jsx)("img", {
                                      className: (0, C.css)(
                                        pr ||
                                          (pr = n([
                                            "\n                                width: 174px;\n                                position: relative;\n                                left: 35px;\n                                top: 5px;\n                                @media (max-width: 768px) {\n                                    width: 88px;\n                                    left: 18px;\n                                    top: 3px;\n                                }\n                            ",
                                          ]))
                                      ),
                                      src: "/public/partner/stepn.png",
                                    }),
                                  ],
                                }),
                                (0, A.jsx)(Lr, {
                                  bgColor: "transparent",
                                  title: "AND 150+ INDUSTRY LEADERS",
                                  index: 6,
                                }),
                              ],
                            }),
                          ],
                        }),
                      })
                    );
                  }
                  function Lr(t) {
                    var i = t.bgColor,
                      a = t.title,
                      r = t.index,
                      o = t.children,
                      s = (0, e.useContext)(Zt).mountedPhases;
                    return (0, A.jsxs)("div", {
                      className:
                        (0, C.css)(
                          dr ||
                            (dr = n([
                              "\n                    padding-top: ",
                              "px;\n                    border-right: 2px solid #000;\n                    position: relative;\n                    @media (max-width: 768px) {\n                        width: calc(50% - 2px);\n                    }\n\n                    @media (max-width: 598px) {\n                        width: calc(100% - 2px);\n                    }\n                ",
                            ])),
                          window.screen.availWidth > 768 ? 52 + 60 * r : 0
                        ) + " phase-8-card",
                      children: [
                        (0, A.jsxs)("p", {
                          className: (0, C.css)(
                            cr ||
                              (cr = n([
                                "\n                    display: flex;\n                    align-items: center;\n                    margin-bottom: 10px !important;\n                    opacity: ",
                                ";\n                    @media (max-width: 768px) {\n                        display: none;\n                    }\n                ",
                              ])),
                            6 === r ? 0 : 1
                          ),
                          children: [
                            (0, A.jsx)("span", {
                              className: (0, C.css)(
                                lr ||
                                  (lr = n([
                                    "\n                        visibility: hidden;\n                        width: 10px;\n                        height: 10px;\n                        background: #000;\n                        margin-left: 10px;\n                        margin-right: 8px;\n                    ",
                                  ]))
                              ),
                            }),
                            (0, A.jsx)("span", {}),
                          ],
                        }),
                        (0, A.jsxs)("div", {
                          className: (0, C.css)(
                            xr ||
                              (xr = n([
                                "\n                    width: 680px;\n                    height: 578px;\n                    background-color: ",
                                ";\n                    position: relative;\n                    border-top: 2px solid #000;\n                    border-bottom: 2px solid #000;\n                    @media (max-width: 768px) {\n                        border-top: unset;\n                        width: auto;\n                        height: 240px;\n                    }\n                ",
                              ])),
                            i
                          ),
                          children: [
                            (0, A.jsx)("div", {
                              className: (0, C.css)(
                                hr ||
                                  (hr = n([
                                    "\n                        position: absolute;\n                        top: 44px;\n                        left: 68px;\n                        width: 14px;\n                        height: 14px;\n                        border-bottom: 1px solid #000;\n                        border-right: 1px solid #000;\n                        @media (max-width: 768px) {\n                            top: 24px;\n                            left: 24px;\n                            width: 10px;\n                            height: 10px;\n                        }\n                    ",
                                  ]))
                              ),
                            }),
                            (0, A.jsx)("div", {
                              className: (0, C.css)(
                                mr ||
                                  (mr = n([
                                    "\n                        position: absolute;\n                        top: 369px;\n                        left: 68px;\n                        width: 14px;\n                        height: 14px;\n                        border-bottom: 1px solid #000;\n                        border-right: 1px solid #000;\n                        @media (max-width: 768px) {\n                            display: none;\n                        }\n                    ",
                                  ]))
                              ),
                            }),
                            (0, A.jsx)("p", {
                              className: (0, C.css)(
                                ur ||
                                  (ur = n([
                                    "\n                        color: #000;\n                        font-size: ",
                                    "px;\n                        font-weight: 600;\n                        text-transform: uppercase;\n                        position: absolute;\n                        top: 72px;\n                        left: 96px;\n                        @media (max-width: 768px) {\n                            top: 36px;\n                            left: 48px;\n                            font-size: ",
                                    "px;\n                        }\n\n                        @media (max-width: 598px) {\n                            font-size: ",
                                    "px;\n                        }\n                    ",
                                  ])),
                                6 === r ? 48 : 88,
                                6 === r ? 24 : 42,
                                6 === r ? 20 : 36
                              ),
                              children: a,
                            }),
                            (0, A.jsx)("div", {
                              className: (0, C.css)(
                                fr ||
                                  (fr = n([
                                    "\n                        position: relative;\n                        top: 400px;\n                        left: 110px;\n                        width: 400px;\n                        display: grid;\n                        grid-template-columns: repeat(2, 1fr);\n                        grid-template-rows: repeat(2, 1fr);\n                        gap: 20px 10px;\n                        @media (max-width: 768px) {\n                            top: 130px;\n                            left: 48px;\n                            width: 240px;\n                            gap: 10px 5px;\n                        }\n                    ",
                                  ]))
                              ),
                              children: s >= 8 ? o : null,
                            }),
                            6 === r
                              
                          ],
                        }),
                      ],
                    });
                  }
                  function Pr() {
                    var t = (0, e.useContext)(Zt).mountedPhases,
                      i = (0, e.useRef)(null);
                    return (
                      hn(9, i),
                      (0, e.useLayoutEffect)(function () {
                        var n = document.querySelector(".grid"),
                          e = n.querySelector(".grid-wrap"),
                          t = n.querySelectorAll(".grid__item");
                        me.timeline({
                          defaults: { ease: "none" },
                          scrollTrigger: {
                            trigger: e,
                            start: "top bottom+=5%",
                            end: "bottom top-=5%",
                            scrub: !0,
                          },
                        })
                          .set(e, {
                            transformOrigin: "0% 50%",
                            rotationY: 30,
                            xPercent: -75,
                          })
                          .set(t, { transformOrigin: "50% 0%" })
                          .to(
                            t,
                            {
                              duration: 0.5,
                              ease: "power2",
                              z: 500,
                              stagger: 0.04,
                            },
                            0
                          )
                          .to(
                            t,
                            {
                              duration: 0.5,
                              ease: "power2.in",
                              z: 0,
                              stagger: 0.04,
                            },
                            0.5
                          )
                          .fromTo(
                            t,
                            { rotationX: -70, filter: "brightness(120%)" },
                            {
                              duration: 1,
                              rotationX: 70,
                              filter: "brightness(0%)",
                              stagger: 0.04,
                            },
                            0
                          );
                      }, []),
                      (0, A.jsx)("main", {
                        ref: i,
                        id: "phase-9",
                        className: (0, C.css)(
                          gr ||
                            (gr = n([
                              "\n                position: relative;\n                overflow: hidden;\n                width: 100%;\n                background-color: #000;\n            ",
                            ]))
                        ),
                        children: (0, A.jsxs)("section", {
                          className: (0, C.css)(
                            wr ||
                              (wr = n([
                                "\n                    position: relative;\n                    margin-top: 20vh;\n                    margin-bottom: 20vh;\n                ",
                              ]))
                          ),
                          children: [
                            (0, A.jsx)("div", {
                              className:
                                (0, C.css)(
                                  br ||
                                    (br = n([
                                      "\n                            display: grid;\n                            place-items: center;\n                            padding: 2rem;\n                            width: 100%;\n                            perspective: 3000px;\n                        ",
                                    ]))
                                ) + " grid grid--4",
                              children: (0, A.jsx)("div", {
                                className:
                                  (0, C.css)(
                                    vr ||
                                      (vr = n([
                                        "\n                                height: auto;\n                                width: 50%;\n                                display: grid;\n                                grid-template-columns: repeat(3, 1fr);\n                                gap: 1vw;\n                                transform-style: preserve-3d;\n                                @media (max-width: 768px) {\n                                    width: 60%;\n                                }\n                                @media (max-width: 658px) {\n                                    width: 70%;\n                                }\n                            ",
                                      ]))
                                  ) + " grid-wrap",
                                children: Array.from({ length: 12 }).map(
                                  function (e, i) {
                                    return (0, A.jsx)(
                                      "div",
                                      {
                                        className:
                                          (0, C.css)(
                                            yr ||
                                              (yr = n([
                                                "\n                                        aspect-ratio: 0.8;\n                                        width: 100%;\n                                        height: auto;\n                                        overflow: hidden;\n                                        position: relative;\n                                        border-radius: 8px;\n                                        display: grid;\n                                        place-items: center;\n                                    ",
                                              ]))
                                          ) + " grid__item",
                                        children: (0, A.jsx)("div", {
                                          className: (0, C.css)(
                                            jr ||
                                              (jr = n([
                                                "\n                                        position: relative;\n                                        width: 100%;\n                                        height: 100%;\n                                        background-size: cover;\n                                        background-position: 50% 50%;\n                                    ",
                                              ]))
                                          ),
                                          style: {
                                            backgroundImage:
                                              t >= 9
                                                ? "url(/public/phase-9/comunity_".concat(
                                                    i + 1,
                                                    ".png)"
                                                  )
                                                : "",
                                          },
                                        }),
                                      },
                                      i
                                    );
                                  }
                                ),
                              }),
                            }),
                            (0, A.jsx)("h3", {
                              className: (0, C.css)(
                                zr ||
                                  (zr = n([
                                    "\n                        position: absolute;\n                        height: 100vh;\n                        width: 100vw;\n                        top: 45%;\n                        left: 30%;\n                        margin: -50vh 0 0 -50vw;\n                        padding: 0 10vw;\n                        display: grid;\n                        place-items: center;\n                        justify-items: end;\n                        @media (max-width: 1280px) {\n                            left: 40%;\n                        }\n                        @media (max-width: 768px) {\n                            padding: 0 0 0 10vw;\n                        }\n                    ",
                                  ]))
                              ),
                              children: (0, A.jsx)(T.ThemeProvider, {
                                theme: T.DarkTheme,
                                children: (0, A.jsxs)("section", {
                                  className: (0, C.css)(
                                    Sr ||
                                      (Sr = n([
                                        "\n                                display: flex;\n                                gap: 12rem;\n                                @media (max-width: 768px) {\n                                    gap: 8rem;\n                                }\n                                @media (max-width: 658px) {\n                                    gap: 6rem;\n                                }\n                                @media (max-width: 608px) {\n                                    gap: 4rem;\n                                }\n                            ",
                                      ]))
                                  ),
                                  children: [
                                    (0, A.jsxs)("div", {
                                      className: (0, C.css)(
                                        Nr ||
                                          (Nr = n([
                                            "\n                                    flex-grow: 1;\n                                    max-width: 500px;\n                                    @media (max-width: 498px) {\n                                        margin-left: 1rem;\n                                    }\n                                ",
                                          ]))
                                      ),
                                      children: [
                                        (0, A.jsxs)("p", {
                                          className: (0, C.css)(
                                            kr ||
                                              (kr = n([
                                                "\n                                        color: #e9e9e9;\n                                        font-size: 40px;\n                                        font-weight: 600;\n                                        text-transform: uppercase;\n                                        margin-bottom: 24px !important;\n                                        white-space: nowrap;\n                                        @media (max-width: 1280px) {\n                                            font-size: 28px;\n                                        }\n                                        @media (max-width: 608px) {\n                                            font-size: 20px;\n                                        }\n                                        @media (max-width: 498px) {\n                                            width: 95%;\n                                            white-space: normal;\n                                        }\n                                    ",
                                              ]))
                                          ),
                                          children: [
                                            "Join the",
                                            " ",
                                            (0, A.jsxs)("span", {
                                              className: (0, C.css)(
                                                Er ||
                                                  (Er = n([
                                                    "\n                                            color: #a59dff;\n                                        ",
                                                  ]))
                                              ),
                                              children: [
                                                "Chainbase community",
                                                " ",
                                              ],
                                            }),
                                            "now",
                                          ],
                                        }),
                                        (0, A.jsx)("p", {
                                          className: (0, C.css)(
                                            Cr ||
                                              (Cr = n([
                                                "\n                                        color: #e9e9e9;\n                                        font-size: 24px;\n                                        font-weight: 600;\n                                        text-transform: uppercase;\n                                        @media (max-width: 1280px) {\n                                            font-size: 16px;\n                                        }\n                                        @media (max-width: 608px) {\n                                            font-size: 11px;\n                                        }\n                                        @media (max-width: 498px) {\n                                            width: 95%;\n                                            white-space: normal;\n                                        }\n                                    ",
                                              ]))
                                          ),
                                          children:
                                            "Learn, innovate, and lead the future of decentralized intelligence",
                                        }),
                                        (0, A.jsx)(T.Button, {
                                          onClick: function () {
                                            return window.open(
                                              "https://app.uniswap.org/#/swap?",
                                              "_blank"
                                            );
                                          },
                                          variant: "contained",
                                          sx: {
                                            textTransform: "uppercase",
                                            fontSize: 16,
                                            fontWeight: 500,
                                            borderRadius: 99,
                                            marginRight: "16px",
                                            marginTop: "32px",
                                            padding: "10px 32px",
                                            "@media (max-width: 1280px)": {
                                              padding: "6px 24px",
                                              fontSize: 12,
                                            },
                                          },
                                          endIcon: (0, A.jsx)(T.Icon, {
                                            icon: "link_out_black",
                                          }),
                                          children: "Buy Now",
                                        }),
                                      ],
                                    }),
                                    (0, A.jsx)("div", {}),
                                  ],
                                }),
                              }),
                            }),
                          ],
                        }),
                      })
                    );
                  }
                  function Fr() {
                    var n = o((0, e.useState)(3), 2),
                      t = n[0],
                      i = n[1];
                    return (
                      (0, e.useEffect)(function () {
                        return (
                          xn.emitter.on("lazyLoadPhase", function (n) {
                            i(function (e) {
                              return e > n ? e : n;
                            });
                          }),
                          function () {
                            return xn.emitter.clear();
                          }
                        );
                      }, []),
                      (0, e.useEffect)(function () {
                        document
                          .querySelectorAll('[data-block="flare_button"]')
                          .forEach(function (n) {
                            new T.FlareButton(n);
                          });
                      }, []),
                      (0, A.jsxs)(Zt.Provider, {
                        value: { mountedPhases: t },
                        children: [
                          (0, A.jsx)(P, {}),
                          (0, A.jsx)(mn, {}),
                          (0, A.jsx)(Ae, {}),
                          (0, A.jsx)(Vt, {}),
                          (0, A.jsx)(oa, {}),
                          (0, A.jsx)(Pa, {}),
                          (0, A.jsx)(Or, {}),
                          (0, A.jsx)(Ir, {}),
                          (0, A.jsx)(Pr, {}),
                          (0, A.jsx)(T.News, {}),
                          (0, A.jsx)(T.SubUpdate, {}),
                        ],
                      })
                    );
                  }
                  var Dr,
                    Rr = m(158);
                  (0, C.injectGlobal)(
                    Dr ||
                      (Dr = n([
                        "\n    html.lenis,html.lenis body{height:auto}.lenis.lenis-smooth{scroll-behavior:auto!important}.lenis.lenis-smooth [data-lenis-prevent]{overscroll-behavior:contain}.lenis.lenis-stopped{overflow:hidden}.lenis.lenis-smooth iframe{pointer-events:none}\n",
                      ]))
                  );
                  var _r = new ln.QueryClient(),
                    Mr = (0, i.default)({
                      React: e.default,
                      ReactDOMClient: t,
                      rootComponent: function () {
                        return (0, A.jsx)(ln.QueryClientProvider, {
                          client: _r,
                          children: (0, A.jsx)(Fr, {}),
                        });
                      },
                      errorBoundary: function (n, e, t) {
                        return null;
                      },
                    }),
                    Wr = Mr.bootstrap,
                    Br = Mr.unmount,
                    qr = function (n) {
                      document.getElementById("home-placeholder").remove(),
                        (document.title =
                          "Chainbase: The World’s Largest Omnichain Data Network");
                      var e = new Rr.default({
                        smoothWheel: !0,
                        duration: 1.2,
                      });
                      return (
                        e.on("scroll", Te.ScrollTrigger.update),
                        me.ticker.add(function (n) {
                          e.raf(1e3 * n);
                        }),
                        me.ticker.lagSmoothing(0),
                        me.registerPlugin(Te.ScrollTrigger),
                        Mr.mount(n)
                      );
                    };
                })(),
                u
              );
            })()
          );
        },
      }
    );
  }
);
//# sourceMappingURL=chainbase-labs-micro-fe-official-page-home.a2e61f258845633a34ca.js.map
