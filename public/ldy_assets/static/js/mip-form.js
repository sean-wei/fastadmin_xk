(window.MIP = window.MIP || []).push({
    name: "mip-form",
    func: function() {
        define("mip-form/mip-form-fn", ["require", "templates", "util", "viewer"], function(t) {
                var e, i = t("templates"),
                    n = t("util"),
                    o = t("viewer"),
                    r = o.isIframed,
                    a = { EMAIL: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/, PHONE: /^1\d{10}$/, IDCAR: /^\d{15}|\d{18}$/ };
                return {
                    fetchUrl: function(t) {
                        var e = this;
                        n.css([e.successEle, e.errorEle], { display: "none" });
                        var i = { method: e.method, credentials: "include" };
                        if ("POST" === e.method) { var o = e.ele.querySelector("form"); if (o) i = n.fn.extend({}, i, { body: new FormData(o) }) } fetch(t, i).then(function(t) {
                            if (t.ok) e.submitSuccessHandle(), t.json().then(function(t) { n.css(e.successEle, { display: "block" }), e.renderTpl(e.successEle, t) }).catch(function(t) { e.fetchReject(t) });
                            else e.submitErrorHandle(), e.fetchReject({})
                        }).catch(function(t) { e.submitErrorHandle(), e.fetchReject(t) })
                    },
                    fetchReject: function(t) {
                        var e = this;
                        n.css(e.errorEle, { display: "block" }), e.renderTpl(e.errorEle, t)
                    },
                    renderTpl: function(t, e) {
                        var n = this;
                        i.render(t, e).then(function(e) { n.tempHTML(t).innerHTML = e })
                    },
                    tempHTML: function(t) { t = t || document; var e = t.querySelector("[mip-mustache-rendered]"); if (!e) e = n.dom.create("<div mip-mustache-rendered></div>"), t.appendChild(e); return e },
                    createDom: function(t) {
                        var i = this,
                            r = t.getAttribute("url"),
                            a = t.getAttribute("target"),
                            c = document.createElement("form"),
                            s = (t.getAttribute("method") || "GET").toUpperCase();
                        c.action = r, c.method = s, a = a ? a : "_blank", c.target = o.isIframed && "_blank" !== a ? "_top" : a, t.appendChild(c), n.dom.insert(c, t.children);
                        var l = t.querySelectorAll("form");
                        Array.prototype.forEach.call(l, function(n) { n.addEventListener("submit", function(n) { n.preventDefault(), e = n, i.onSubmit(t, n) }) }), t.addEventListener("keydown", function(t) { if (13 === t.keyCode) e = t, t.preventDefault(), i.onSubmit(this) }, !1)
                    },
                    sendFormMessage: function(t) { if (r) o.sendMessage("input-" + t, {}) },
                    initMessageEvents: function(t) {
                        var e = this,
                            i = t.querySelectorAll("input");
                        Array.prototype.forEach.call(i, function(t, i) { t.addEventListener("focus", function() { e.sendFormMessage("focus") }, !1), t.addEventListener("blur", function() { e.sendFormMessage("blur") }, !1) })
                    },
                    verification: function(t, e) { return "must" === t ? !("" === e) : a[t.toUpperCase()].test(e) },
                    onSubmit: function(t) {
                        var e = this,
                            i = !1,
                            o = t.querySelectorAll("input, textarea, select"),
                            r = t.getAttribute("url") || "",
                            a = r.toLowerCase(),
                            c = a.match("http://"),
                            s = "",
                            l = t.getAttribute("fetch-url") || "";
                        e.method = (t.getAttribute("method") || "GET").toUpperCase();
                        var p = "GET" === e.method;
                        if (this.ele = t, this.successEle = t.querySelector("[submit-success]"), this.errorEle = t.querySelector("[submit-error]"), e.submitHandle(), Array.prototype.forEach.call(o, function(o) {
                                var r, a = o.getAttribute("validatetype"),
                                    c = o.getAttribute("validatetarget"),
                                    l = o.getAttribute("validatereg"),
                                    p = o.value;
                                if ("submit" !== o.type) {
                                    if ("checkbox" === o.type || "radio" === o.type) p = o.checked ? o.value : "";
                                    if (s += "&" + o.name + "=" + p, a) {
                                        if (l) r = "" === p ? !1 : new RegExp(l).test(p);
                                        else r = e.verification(a, p);
                                        n.css(t.querySelectorAll('div[target="' + c + '"]'), { display: !r ? "block" : "none" }), i = !r ? !0 : i
                                    }
                                }
                            }), !i)
                            if (window.parent !== window && c && p) {
                                var d = "";
                                if (a.match("\\?")) d = a + s;
                                else s = s.substring(1), d = a + "?" + s;
                                var u = { event: "mibm-jumplink", data: { url: d } };
                                window.parent.postMessage(u, "*")
                            } else if (l.trim()) e.fetchUrl(l);
                        else t.getElementsByTagName("form")[0].submit()
                    },
                    submitHandle: function() { o.eventAction.execute("submit", e.target, e) },
                    submitSuccessHandle: function() { if (e) o.eventAction.execute("submitSuccess", e.target, e) },
                    submitErrorHandle: function() { if (e) o.eventAction.execute("submitError", e.target, e) }
                }
            }), define("mip-form/mip-form", ["require", "customElement", "util", "./mip-form-fn"], function(t) {
                var e = t("customElement").create(),
                    i = t("util"),
                    n = t("./mip-form-fn");
                return e.prototype.build = function() {
                    function t(t) {
                        t.stopPropagation(), t.preventDefault();
                        var e = t.target.getAttribute("name"),
                            n = l.parentNode.querySelector('input[name="' + e + '"]');
                        n.focus(), n.value = "", i.css(l, { display: "none" })
                    }
                    var e = this.element,
                        o = e.hasAttribute("clear");
                    if (n.createDom(e), o) {
                        var r = ["text", "input", "datetime", "email", "number", "search", "tel", "url"],
                            a = "";
                        for (var c in r) a += ",input[type=" + r[c] + "]";
                        a = a.slice(1);
                        var s = e.querySelectorAll(a);
                        if (!s.length) return;
                        var l = document.createElement("div");
                        l.id = "mip-form-cross", this.cross = l;
                        for (var p = 0; p < s.length; p++) {
                            var d = s[p].offsetHeight;
                            s[p].addEventListener("focus", function() {
                                var t = this;
                                if (l.setAttribute("name", t.getAttribute("name")), i.css(l, { top: t.offsetTop + (d - 16) / 2 - 8 + "px", left: t.offsetWidth - 32 + "px" }), t.parentNode.appendChild(l), "" !== t.value) i.css(l, { display: "block" });
                                else i.css(l, { display: "none" }), t.addEventListener("input", function() { if (!(i && i.platform && i.platform.isAndroid() && "search" === t.type)) i.css(l, { display: "" !== t.value ? "block" : "none" }) })
                            }, !1), s[p].addEventListener("blur", function() { i.css(l, { display: "none" }) }, !1)
                        }
                        l.addEventListener("touchstart", t, !1), l.addEventListener("mousedown", t, !1), l.addEventListener("click", t, !1)
                    }
                    n.initMessageEvents(e)
                }, e
            }), define("mip-form", ["mip-form/mip-form"], function(t) { return t }),
            function() {
                function t(t, e) { t.registerMipElement("mip-form", e, "mip-form{position:relative}mip-form #mip-form-cross{position:absolute;display:block;padding:6px;width:20px;height:20px;right:0;background:url(./static/images/clear.png) no-repeat center;z-index:100;background-size:100% 100%;background-origin:content-box;-webkit-tap-highlight-color:rgba(0,0,0,0.4);tap-highlight-color:rgba(0,0,0,0.4)}mip-form input,mip-form textarea,mip-form select{border:1px solid #f1f1f1;padding:6px;display:block;box-sizing:border-box;-webkit-box-sizing:border-box;resize:none;font-size:16px}mip-form input[type='text'],mip-form input[type='input'],mip-form input[type='datetime'],mip-form input[type='email'],mip-form input[type='number'],mip-form input[type='tel'],mip-form input[type='url']{padding-right:30px}mip-form form{position:relative}mip-form input[type='radio']{display:inline}mip-form label{display:block}mip-form div{display:none;color:#ec1f5c;font-size:12px;text-align:left;padding:0 10% 0 3%}mip-form div[mip-mustache-rendered]{display:block}mip-form input[type='submit']{border:1px solid #f1f1f1;border-radius:5px;color:#333;background-color:#d8d7d7}mip-form [submit-success],mip-form [submit-error]{display:none}") }
                if (window.MIP) require(["mip-form"], function(e) { t(window.MIP, e) });
                else require(["mip", "mip-form"], t)
            }()
    }
});