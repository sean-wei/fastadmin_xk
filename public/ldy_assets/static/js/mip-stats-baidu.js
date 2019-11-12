(window.MIP = window.MIP || []).push({
    name: "mip-stats-baidu",
    func: function() {
        define("mip-stats-baidu/mip-stats-baidu", ["require", "viewer", "util", "customElement"], function(e) {
                function t() {
                    var e = Date.now(),
                        t = setInterval(function() { if (i(document.querySelectorAll("*[data-stats-baidu-obj]")), Date.now() - e >= 8e3) clearInterval(t) }, 100)
                }

                function i(e) {
                    for (var t = 0; t < e.length; t++) {
                        var i = e[t],
                            r = "data-stats-flag",
                            a = i.getAttribute("data-stats-baidu-obj"),
                            s = i.hasAttribute(r);
                        if (a && !s) {
                            try { a = JSON.parse(decodeURIComponent(a)) } catch (e) { console.warn("事件追踪data-stats-baidu-obj数据不正确"); continue }
                            var c = a.type;
                            if (a.data) {
                                var l = o(a.data);
                                if ("click" === c || "mouseup" === c || "load" === c)
                                    if (!i.classList.contains("mip-stats-eventload")) {
                                        if (i.classList.add("mip-stats-eventload"), "load" === c) window._hmt.push(l);
                                        else if ("click" === c && i.hasAttribute("on") && i.getAttribute("on").match("tap:") && d.hasTouch()) {
                                            var u = new p(i);
                                            u.on("tap", n)
                                        } else i.addEventListener(c, n, !1);
                                        i.setAttribute(r, "1")
                                    }
                            }
                        }
                    }
                }

                function n(e) {
                    var t = this.getAttribute("data-stats-baidu-obj");
                    if (t) {
                        var i;
                        try { i = JSON.parse(decodeURIComponent(t)) } catch (e) { return void console.warn("事件追踪data-stats-baidu-obj数据不正确") }
                        if (i.data) {
                            var n = o(i.data);
                            window._hmt.push(n)
                        }
                    }
                }

                function o(e) {
                    if (e) {
                        if ("object" == typeof e) return e;
                        for (var t = e.slice(1, e.length - 1).split(","), i = [], n = 0; n < t.length; n++) {
                            var o = t[n].replace(/(^\s*)|(\s*$)/g, "").replace(/\'/g, "");
                            if ("false" === o || "true" === o) o = Boolean(o);
                            i.push(o)
                        }
                        return i
                    }
                }

                function r() {
                    var e = "",
                        t = {},
                        i = MIP.hash.get("word") || "",
                        n = MIP.hash.get("eqid") || "",
                        o = MIP.hash.get("q") || "";
                    if (a(MIP.hash.get("from") || "", "result")) { if (i || n) t.eqid = n, t.word = i; if (o) t.q = o; if (document.referrer) t.url = "", e = document.referrer } else t.url = "", e = location.origin + location.pathname + location.search;
                    window._hmt.push(["_setReferrerOverride", s(e, t)])
                }

                function a(e, t) {
                    if (e && t && e === t) return !0;
                    else return !1
                }

                function s(e, t) {
                    var i = "",
                        n = e.indexOf("?") < 0 ? "?" : "&",
                        o = "";
                    for (var r in t)
                        if (t.hasOwnProperty(r)) o += "&" + r + "=" + t[r];
                    if (o = o.slice(1), e.indexOf("#") < 0 && o) i = e + n + o;
                    else i = e.replace("#", n + o + "#");
                    return i
                }
                var c = e("viewer"),
                    l = e("util"),
                    p = l.Gesture,
                    d = e("util").fn,
                    u = e("customElement").create();
                return u.prototype.createdCallback = function() {
                    var e = this.element,
                        i = this.getConfig(),
                        n = i.token;
                    if (n) {
                        if (window._hmt = window._hmt || [], window._hmt.push(["_setAccount", n]), c.isIframed) r();
                        if (i && Array.isArray(i.conf) && i.conf.length)
                            for (var o = i.conf, a = 0; a < o.length; a++) window._hmt.push(o[a]);
                        t();
                        var s = document.createElement("script");
                        s.src = "https://hm.baidu.com/hm.js?" + n, e.appendChild(s)
                    } else console.warn("token is unavailable")
                }, u.prototype.getConfig = function() {
                    var e = {},
                        t = this.element.getAttribute("setconfig");
                    try { var i = this.element.querySelector('script[type="application/json"]'); if (i) { var n = JSON.parse(i.textContent); if ("{}" !== JSON.stringify(n)) e.token = n.token, l.fn.del(n, "token"), e.conf = this.objToArray(n); return e } } catch (e) { console.warn("json is illegal"), console.warn(e) }
                    return { token: this.element.getAttribute("token"), conf: t ? new Array(o(decodeURIComponent(t))) : null }
                }, u.prototype.objToArray = function(e) {
                    var t = [];
                    if (e) {
                        for (var i in e)
                            if (e.hasOwnProperty(i) && Array.isArray(e[i])) e[i].unshift(i), t.push(e[i]);
                        return t
                    }
                }, u
            }), define("mip-stats-baidu", ["mip-stats-baidu/mip-stats-baidu"], function(e) { return e }),
            function() {
                function e(e, t) { e.registerMipElement("mip-stats-baidu", t) }
                if (window.MIP) require(["mip-stats-baidu"], function(t) { e(window.MIP, t) });
                else require(["mip", "mip-stats-baidu"], e)
            }()
    }
});