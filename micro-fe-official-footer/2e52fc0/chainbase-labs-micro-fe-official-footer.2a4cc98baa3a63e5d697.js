/*! For license information please see chainbase-labs-micro-fe-official-footer.2a4cc98baa3a63e5d697.js.LICENSE.txt */
System.register(
  ["react", "react-dom", "single-spa-react", "@emotion/css"],
  function (e, n) {
    var t = {},
      a = {},
      r = {},
      s = {};
    return (
      Object.defineProperty(t, "__esModule", { value: !0 }),
      {
        setters: [
          function (e) {
            Object.keys(e).forEach(function (n) {
              t[n] = e[n];
            });
          },
          function (e) {
            a.default = e.default;
          },
          function (e) {
            r.default = e.default;
          },
          function (e) {
            s.css = e.css;
          },
        ],
        execute: function () {
          e(
            (() => {
              var e = {
                  20: (e, n, t) => {
                    "use strict";
                    var a = t(726),
                      r = Symbol.for("react.element"),
                      s =
                        (Symbol.for("react.fragment"),
                        Object.prototype.hasOwnProperty),
                      i =
                        a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
                          .ReactCurrentOwner,
                      o = { key: !0, ref: !0, __self: !0, __source: !0 };
                    function c(e, n, t) {
                      var a,
                        c = {},
                        l = null,
                        d = null;
                      for (a in (void 0 !== t && (l = "" + t),
                      void 0 !== n.key && (l = "" + n.key),
                      void 0 !== n.ref && (d = n.ref),
                      n))
                        s.call(n, a) && !o.hasOwnProperty(a) && (c[a] = n[a]);
                      if (e && e.defaultProps)
                        for (a in (n = e.defaultProps))
                          void 0 === c[a] && (c[a] = n[a]);
                      return {
                        $$typeof: r,
                        type: e,
                        key: l,
                        ref: d,
                        props: c,
                        _owner: i.current,
                      };
                    }
                    (n.jsx = c), (n.jsxs = c);
                  },
                  848: (e, n, t) => {
                    "use strict";
                    e.exports = t(20);
                  },
                  126: (e, n, t) => {
                    const a = t(358).y;
                    n.w = function (e) {
                      if ((e || (e = 1), !t.y.meta || !t.y.meta.url))
                        throw (
                          (console.error("__system_context__", t.y),
                          Error(
                            "systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided"
                          ))
                        );
                      t.p = a(t.y.meta.url, e);
                    };
                  },
                  358: (e, n, t) => {
                    n.y = function (e, n) {
                      var t = document.createElement("a");
                      t.href = e;
                      for (
                        var a =
                            "/" === t.pathname[0]
                              ? t.pathname
                              : "/" + t.pathname,
                          r = 0,
                          s = a.length;
                        r !== n && s >= 0;

                      )
                        "/" === a[--s] && r++;
                      if (r !== n)
                        throw Error(
                          "systemjs-webpack-interop: rootDirectoryLevel (" +
                            n +
                            ") is greater than the number of directories (" +
                            r +
                            ") in the URL path " +
                            e
                        );
                      var i = a.slice(0, s + 1);
                      return t.protocol + "//" + t.host + i;
                    };
                    Number.isInteger;
                  },
                  662: (e) => {
                    "use strict";
                    e.exports = s;
                  },
                  726: (e) => {
                    "use strict";
                    e.exports = t;
                  },
                  867: (e) => {
                    "use strict";
                    e.exports = a;
                  },
                  238: (e) => {
                    "use strict";
                    e.exports = r;
                  },
                },
                i = {};
              function o(n) {
                var t = i[n];
                if (void 0 !== t) return t.exports;
                var a = (i[n] = { exports: {} });
                return e[n](a, a.exports, o), a.exports;
              }
              (o.y = n),
                (o.d = (e, n) => {
                  for (var t in n)
                    o.o(n, t) &&
                      !o.o(e, t) &&
                      Object.defineProperty(e, t, {
                        enumerable: !0,
                        get: n[t],
                      });
                }),
                (o.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
                (o.r = (e) => {
                  "undefined" != typeof Symbol &&
                    Symbol.toStringTag &&
                    Object.defineProperty(e, Symbol.toStringTag, {
                      value: "Module",
                    }),
                    Object.defineProperty(e, "__esModule", { value: !0 });
                }),
                (o.p = "");
              var c = {};
              return (
                (0, o(126).w)(1),
                (() => {
                  "use strict";
                  o.r(c),
                    o.d(c, {
                      bootstrap: () => D,
                      mount: () => I,
                      unmount: () => L,
                    });
                  var e = o(726),
                    n = o(867),
                    t = o(238);
                  function a(e, n) {
                    return (
                      n || (n = e.slice(0)),
                      Object.freeze(
                        Object.defineProperties(e, {
                          raw: { value: Object.freeze(n) },
                        })
                      )
                    );
                  }
                  var r,
                    s,
                    i,
                    l,
                    d,
                    p,
                    x,
                    h,
                    m,
                    u,
                    f,
                    b,
                    g,
                    w,
                    j,
                    y,
                    v,
                    N,
                    _ = o(662),
                    k = o(848),
                    O = (0, _.css)(
                      r ||
                        (r = a([
                          "\n    color: inherit;\n    text-decoration: none;\n    &:visited {\n        color: inherit;\n        text-decoration: none;\n    }\n    &[aria-disabled='true'] {\n        color: #3f3f3f;\n        cursor: default;\n    }\n",
                        ]))
                    ),
                    C = window.location.pathname.includes("/operator"),
                    S = window.location.pathname.includes("/zone"),
                    E = "#23a4ba";
                  function P(e) {
                    var n = e.name,
                      t = e.link,
                      r = e.brandColor;
                    return (0, k.jsxs)("div", {
                      "data-block": "flare_button",
                      onClick: function () {
                        return window.open(t, "_blank");
                      },
                      className: (0, _.css)(
                        j ||
                          (j = a([
                            "\n                position: relative;\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                width: 48px;\n                height: 48px;\n                border-radius: 99px;\n                overflow: hidden;\n                background: #5c5c5c;\n                cursor: pointer;\n                @media (max-width: 768px) {\n                    width: 32px;\n                    height: 32px;\n                }\n            ",
                          ]))
                      ),
                      children: [
                        (0, k.jsx)("span", {
                          className:
                            (0, _.css)(
                              y ||
                                (y = a([
                                  "\n                        &:before {\n                            background-color: ",
                                  ";\n                            z-index: -1;\n                        }\n                    ",
                                ])),
                              r
                            ) + " button__flair",
                        }),
                        (0, k.jsx)("img", {
                          src: "/public/brand/".concat(n, ".png"),
                          className: (0, _.css)(
                            v ||
                              (v = a([
                                "\n                    position: relative;\n                    z-index: 5;\n                    width: 48px;\n                    height: 48px;\n                    @media (max-width: 768px) {\n                        width: 32px;\n                        height: 32px;\n                    }\n                ",
                              ]))
                          ),
                        }),
                      ],
                    });
                  }
                  function R(e) {
                    var n = e.children;
                    return (0, k.jsx)("div", {
                      className: (0, _.css)(
                        N ||
                          (N = a([
                            "\n                padding-top: 44px;\n                width: fit-content;\n                color: #e9e9e9;\n                display: flex;\n                flex-direction: column;\n                & > p {\n                    color: #5c5c5c;\n                }\n                & > a {\n                    margin-top: 16px;\n                    cursor: pointer;\n                }\n\n                @media (max-width: 1024px) {\n                    padding-top: 16px;\n                }\n            ",
                          ]))
                      ),
                      children: n,
                    });
                  }
                  var z = (0, t.default)({
                      React: e.default,
                      ReactDOM: n.default,
                      rootComponent: function () {
                        return "/blockchains" === window.location.pathname
                          ? null
                          : C || S
                          ? (0, k.jsxs)("section", {
                              className: (0, _.css)(
                                s ||
                                  (s = a([
                                    "\n                background: #000;\n                border-top: 2px solid #1a1a1a;\n                text-transform: uppercase;\n                display: flex;\n                justify-content: space-between;\n                align-items: center;\n                padding: 38px 75px;\n                width: calc(100% - 100px);\n\n                @media (max-width: 1280px) {\n                    flex-direction: column-reverse;\n                    gap: 1rem;\n                    padding: 24px 48px;\n                }\n\n                @media (max-width: 768px) {\n                    padding: 24px 24px;\n                }\n            ",
                                  ]))
                              ),
                              children: [
                                (0, k.jsx)("img", {
                                  className: (0, _.css)(
                                    i ||
                                      (i = a([
                                        "\n                    width: 179.341px;\n                    height: 32px;\n                ",
                                      ]))
                                  ),
                                  src: "/public/operator/chainbase-logo-gray.png",
                                }),
                                (0, k.jsxs)("div", {
                                  className: (0, _.css)(
                                    l ||
                                      (l = a([
                                        "\n                    display: flex;\n                    align-items: center;\n                    text-transform: uppercase;\n                    letter-spacing: -2px;\n                    display: flex;\n                    gap: 20px;\n                ",
                                      ]))
                                  ),
                                  children: [
                                    (0, k.jsx)(P, {
                                      name: "x",
                                      link: "https://x.com/ChainbaseHQ",
                                      brandColor: E,
                                    }),
                                    (0, k.jsx)(P, {
                                      name: "dicord",
                                      link: "https://discord.com/invite/chainbase",
                                      brandColor: E,
                                    }),
                                    (0, k.jsx)(P, {
                                      name: "tg",
                                      link: "https://t.me/ChainbaseNetwork",
                                      brandColor: E,
                                    }),
                                    (0, k.jsx)(P, {
                                      name: "lintree",
                                      link: "https://linktr.ee/chainbasehq",
                                      brandColor: E,
                                    }),
                                    (0, k.jsx)("p", {
                                      className: (0, _.css)(
                                        d ||
                                          (d = a([
                                            "\n                        color: #727272;\n                        font-size: 16px;\n                        font-weight: 500;\n                        text-transform: uppercase;\n                        letter-spacing: 1px;\n                    ",
                                          ]))
                                      ),
                                      children:
                                        "© 2024 Chainbase Foundation. All rights reserved",
                                    }),
                                  ],
                                }),
                              ],
                            })
                          : (0, k.jsxs)("section", {
                              className: (0, _.css)(
                                p ||
                                  (p = a([
                                    "\n                background: #000;\n                border-top: 2px solid #1a1a1a;\n                text-transform: uppercase;\n            ",
                                  ]))
                              ),
                              children: [
                                (0, k.jsxs)("div", {
                                  className: (0, _.css)(
                                    x ||
                                      (x = a([
                                        "\n                    display: flex;\n                    height: 441px;\n                    padding-left: 75px;\n                    @media (max-width: 1024px) {\n                        height: auto;\n                        padding-left: 48px;\n                    }\n                    @media (max-width: 668px) {\n                        flex-direction: column;\n                        padding-left: 36px;\n                    }\n                ",
                                      ]))
                                  ),
                                  children: [
                                    (0, k.jsxs)("div", {
                                      className: (0, _.css)(
                                        h ||
                                          (h = a([
                                            "\n                        flex-grow: 1;\n                        display: flex;\n                        flex-direction: column;\n                    ",
                                          ]))
                                      ),
                                      children: [
                                        (0, k.jsxs)("div", {
                                          className: (0, _.css)(
                                            m ||
                                              (m = a([
                                                "\n                            display: flex;\n                            flex-grow: 1;\n                            gap: 96px;\n                            @media (max-width: 1280px) {\n                                gap: 48px;\n                            }\n                            @media (max-width: 1024px) {\n                                display: grid;\n                                grid-template-columns: repeat(2, 1fr);\n                                row-gap: 16px;\n                            }\n                            @media (max-width: 568px) {\n                                grid-template-columns: repeat(1, 1fr);\n                                row-gap: 12px;\n                            }\n                        ",
                                              ]))
                                          ),
                                          children: [
                                            (0, k.jsxs)(R, {
                                            //   children: [
                                            //     (0, k.jsx)("p", {
                                            //       children: "Chainbase",
                                            //     }),
                                            //     (0, k.jsx)("a", {
                                            //       "aria-disabled": !0,
                                            //       className: O,
                                            //       children: "Foundation",
                                            //     }),
                                            //     (0, k.jsx)("a", {
                                            //       className: O,
                                            //       href: "https://blog.chainbase.com/",
                                            //       target: "_blank",
                                            //       children: "Blog",
                                            //     }),
                                            //     (0, k.jsx)("a", {
                                            //       className: O,
                                            //       href: "/about",
                                            //       children: "About",
                                            //     }),
                                            //     (0, k.jsx)("a", {
                                            //       className: O,
                                            //       href: "/contact-us",
                                            //       children: "Contact us",
                                            //     }),
                                            //   ],
                                            }),
                                            // (0, k.jsxs)(R, {
                                            //   children: [
                                            //     (0, k.jsx)("p", {
                                            //       children: "Developers",
                                            //     }),
                                            //     (0, k.jsx)("a", {
                                            //       className: O,
                                            //       href: "https://docs.chainbase.com",
                                            //       target: "_blank",
                                            //       children: "Developer Docs",
                                            //     }),
                                            //     (0, k.jsx)("a", {
                                            //       className: O,
                                            //       href: "https://github.com/chainbase-labs",
                                            //       children: "Github",
                                            //     }),
                                            //   ],
                                            // }),
                                            // (0, k.jsxs)(R, {
                                            //   children: [
                                            //     (0, k.jsx)("p", {
                                            //       children: "Ecosystem",
                                            //     }),
                                            //     (0, k.jsx)("a", {
                                            //       className: O,
                                            //       "aria-disabled": !0,
                                            //       children: "Use Case",
                                            //     }),
                                            //     (0, k.jsx)("a", {
                                            //       className: O,
                                            //       "aria-disabled": !0,
                                            //       children: "Projects",
                                            //     }),
                                            //     (0, k.jsx)("a", {
                                            //       className: O,
                                            //       href: "https://docs.chainbase.com/node/introduction",
                                            //       target: "_blank",
                                            //       children: "Node Operators",
                                            //     }),
                                            //     (0, k.jsx)("a", {
                                            //       className: O,
                                            //       "aria-disabled": !0,
                                            //       children: "Explorers",
                                            //     }),
                                            //     (0, k.jsx)("a", {
                                            //       className: O,
                                            //       "aria-disabled": !0,
                                            //       children: "Grants",
                                            //     }),
                                            //   ],
                                            // }),
                                            // (0, k.jsxs)(R, {
                                            //   children: [
                                            //     (0, k.jsx)("p", {
                                            //       children: "Resources",
                                            //     }),
                                            //     (0, k.jsx)("a", {
                                            //       className: O,
                                            //       href: "https://docs.chainbase.com/",
                                            //       target: "_blank",
                                            //       children: "Get Started",
                                            //     }),
                                            //     (0, k.jsx)("a", {
                                            //       className: O,
                                            //       "aria-disabled": !0,
                                            //       children: "Whitepaper",
                                            //     }),
                                            //     (0, k.jsx)("a", {
                                            //       className: O,
                                            //       href: "/media-kit",
                                            //       children: "Media Kit",
                                            //     }),
                                            //   ],
                                            // }),
                                          ],
                                        }),
                                        (0, k.jsx)("div", {
                                          className: (0, _.css)(
                                            u ||
                                              (u = a([
                                                "\n                            height: 100px;\n                            display: flex;\n                            align-items: center;\n                        ",
                                              ]))
                                          ),
                                          children: (0, k.jsx)("p", {
                                            className: (0, _.css)(
                                              f ||
                                                (f = a([
                                                  "\n                                color: #999;\n                                font-size: 16px;\n                                font-weight: 500;\n                            ",
                                                ]))
                                            ),
                                            children:
                                              "Copyright © 2024 Chainbase Inc. All rights reserved",
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, k.jsx)("div", {
                                      className: (0, _.css)(
                                        b ||
                                          (b = a([
                                            "\n                        width: 441px;\n                        display: flex;\n                        justify-content: center;\n                        align-items: center;\n                        border-left: 2px solid #1a1a1a;\n                        @media (max-width: 1280px) {\n                            width: 220px;\n                        }\n                        @media (max-width: 668px) {\n                            border-left: unset;\n                            width: 64px;\n                        }\n                    ",
                                          ]))
                                      ),
                                      children: (0, k.jsx)("img", {
                                        src: "/public/chainbase_horizontal_black_high.png",
                                        className: (0, _.css)(
                                          g ||
                                            (g = a([
                                              "\n                            width: 233px;\n                            height: 233px;\n                            @media (max-width: 1280px) {\n                                width: 170px;\n                                height: 170px;\n                            }\n                            @media (max-width: 668px) {\n                                width: 100%;\n                                height: 100%;\n                                margin-bottom: 24px;\n                            }\n                        ",
                                            ]))
                                        ),
                                      }),
                                    }),
                                  ],
                                }),
                                (0, k.jsx)("img", {
                                  src:
                                    "/world-model" === window.location.pathname
                                      ? "/public/footer/theia_footer.png"
                                      : "/public/footer.png",
                                  className: (0, _.css)(
                                    w ||
                                      (w = a([
                                        "\n                    width: 100%;\n                ",
                                      ]))
                                  ),
                                }),
                              ],
                            });
                      },
                      errorBoundary: function (e, n, t) {
                        return null;
                      },
                    }),
                    D = z.bootstrap,
                    I = z.mount,
                    L = z.unmount;
                })(),
                c
              );
            })()
          );
        },
      }
    );
  }
);
//# sourceMappingURL=chainbase-labs-micro-fe-official-footer.2a4cc98baa3a63e5d697.js.map
