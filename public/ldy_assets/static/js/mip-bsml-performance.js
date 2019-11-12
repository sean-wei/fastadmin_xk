(window.MIP = window.MIP || []).push({
    name: "mip-bsml-performance",
    func: function() {
        "use strict";
        define("mip-bsml-performance/serialize", ["require"], function(e) {
                function t(e) { return s[e] }

                function a(e, a) {
                    function s(e, t) {
                        if (!t) return t;
                        var a = this[e],
                            i = typeof a;
                        if ("object" === i) { if (a instanceof RegExp) return "@__R-" + n + "-" + (c.push(a) - 1) + "__@"; if (a instanceof Date) return "@__D-" + n + "-" + (m.push(a) - 1) + "__@" }
                        if ("function" === i) return "@__F-" + n + "-" + (u.push(a) - 1) + "__@";
                        else return t
                    }
                    if (a || (a = {}), "number" == typeof a || "string" == typeof a) a = { space: a };
                    var l, u = [],
                        c = [],
                        m = [];
                    if (a.isJSON && !a.space) l = JSON.stringify(e);
                    else l = JSON.stringify(e, a.isJSON ? null : s, a.space);
                    if ("string" != typeof l) return String(l);
                    if (!0 !== a.unsafe) l = l.replace(o, t);
                    if (0 === u.length && 0 === c.length && 0 === m.length) return l;
                    else return l.replace(i, function(e, t, a) {
                        if ("D" === t) return 'new Date("' + m[a].toISOString() + '")';
                        if ("R" === t) return c[a].toString();
                        var n = u[a],
                            i = n.toString();
                        if (r.test(i)) throw new TypeError("Serializing native function: " + n.name);
                        return i
                    })
                }
                var n = Math.floor(1099511627776 * Math.random()).toString(16),
                    i = new RegExp('"@__(F|R|D)-' + n + '-(\\d+)__@"', "g"),
                    r = /\{\s*\[native code\]\s*\}/g,
                    o = /[<>\/\u2028\u2029]/g,
                    s = { "<": "\\u003C", ">": "\\u003E", "/": "\\u002F", "\u2028": "\\u2028", "\u2029": "\\u2029" };
                return a
            }), define("mip-bsml-performance/mip-bsml-performance", ["require", "customElement", "./serialize", "zepto"], function(e) {
                function t(e) {
                    try {
                        var t = JSON.stringify(e);
                        window.addLog(t)
                    } catch (e) {}
                }

                function a(e) { try { return JSON.parse(r(e)) } catch (e) { return {} } }

                function n() {
                    var e = window.performance ? a(window.performance) : "",
                        n = navigator.connection.type || "";
                    t({ action_id: "site_page_performance", action_name: "performance埋点", extra: { performance_timing: { navigation: e.navigation, timeOrigin: e.timeOrigin, timing: e.timing, connectType: n } } })
                }
                var i = e("customElement").create(),
                    r = e("./serialize");
                e("zepto");
                return i.prototype.build = function() {
                    function e() { n() }
                    try {
                        if (console.log("from new"), console.log("from orp"), window.preRenderTest && window.domIsReady()) e();
                        else window.addEventListener("load", e, !1)
                    } catch (e) { console.log(e) }
                }, i
            }), define("mip-bsml-performance", ["mip-bsml-performance/mip-bsml-performance"], function(e) { return e }),
            function() {
                function e(e, t) { e.registerMipElement("mip-bsml-performance", t) }
                if (window.MIP) require(["mip-bsml-performance"], function(t) { e(window.MIP, t) });
                else require(["mip", "mip-bsml-performance"], e)
            }()
    }
});