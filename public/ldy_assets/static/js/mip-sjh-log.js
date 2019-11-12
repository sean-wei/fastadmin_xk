(window.MIP = window.MIP || []).push({
    name: "mip-sjh-log",
    func: function() {
        var e = function(e) {
            var t = {};

            function r(n) { if (t[n]) return t[n].exports; var o = t[n] = { i: n, l: !1, exports: {} }; return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports }
            return r.m = e, r.c = t, r.d = function(e, t, n) { r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n }) }, r.r = function(e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, r.t = function(e, t) {
                if (1 & t && (e = r(e)), 8 & t) return e;
                if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                var n = Object.create(null);
                if (r.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e)
                    for (var o in e) r.d(n, o, function(t) { return e[t] }.bind(null, o));
                return n
            }, r.n = function(e) { var t = e && e.__esModule ? function() { return e.default } : function() { return e }; return r.d(t, "a", t), t }, r.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, r.p = "https://c.mipcdn.com/static/v2/internal/fc-sjh-mip2/", r(r.s = 28)
        }([function(e, t, r) {
            "use strict";
            var n = r(10),
                o = r(11),
                a = r(8);
            e.exports = { formats: a, parse: o, stringify: n }
        }, function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), t.serviceCallback = t.get = t.post = t.guid = void 0;
            var n, o = (n = r(0)) && n.__esModule ? n : { default: n };
            var a = function(e) { for (var t = [], r = 0; r < e; r++) t.push("0123456789abcdef".charAt(Math.floor(16 * Math.random()))); return t.join("") },
                i = function() { var e = (new Date).valueOf().toString(); return ["4b534c46", a(4), "4".concat(a(3)), a(4), e.substring(0, 12)].join("-") };
            t.guid = i;
            var c = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return new Promise(function(r, n) {
                    var a = i(),
                        c = "".concat("/sjh-lexus/request.ajax", "?path=").concat(e, "&reqid=").concat(a),
                        u = { reqid: a, userid: 1, optid: 1, path: e, params: JSON.stringify(t) };
                    return fetch(c, { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded", "X-Requested-With": "XMLHttpRequest" }, body: o.default.stringify(u) }).then(function(e) { e.ok ? r(e.json()) : n(e) }).catch(function(e) { n(e) })
                })
            };
            t.post = c;
            t.get = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return new Promise(function(r, n) {
                    var a = o.default.stringify(t),
                        i = e;
                    return a && (i = "".concat(e, "?").concat(a)), fetch(i, { method: "GET" }).then(function(e) { e.ok ? r(e.json()) : n(e) }).catch(function(e) { n(e) })
                })
            };
            t.serviceCallback = function(e) {
                var t = e.env,
                    r = void 0 === t ? "dev" : t,
                    n = e.isResSuccess,
                    o = e.successCb,
                    a = e.resError,
                    i = e.path,
                    u = e.reqParams;
                return new Promise(function(e, t) { return "dev" !== r && "development" !== r ? c(i, { params: u }).then(function(t) { e(t) }).catch(function(e) { t(e) }) : n ? e(o) : !n && a ? t(a) : void 0 })
            }
        }, function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), t.isObj = t.getRandom = void 0;
            t.getRandom = function() { for (var e = 1e7 * Math.random(); e < 1e7;) e <<= 1; return e };
            t.isObj = function(e) { return "[object Object]" === Object.prototype.toString.call(e) }
        }, function(e, t, r) {
            "use strict";
            var n;

            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) { return Object.getOwnPropertyDescriptor(r, e).enumerable }))), n.forEach(function(t) { a(e, t, r[t]) })
                }
                return e
            }

            function a(e, t, r) { return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e } Object.defineProperty(t, "__esModule", { value: !0 }), t.default = t.REAL_TIME_ACTION_ID = t.LOCAL_ENV = void 0;
            var i = { SITE_BAR_CLICK: "site_bar_click", SITE_COMP_CLICK: "site_comp_click", SITE_TO_IMLP: "site_to_imlp", SITE_REQ_RECV: "site_req_recv" },
                c = o({}, i, { SITE_PAGE_SHOW: "site_page_show", SITE_FIRST_SCREEN: "site_first_screen", SITE_PAGE_QUIT: "site_page_quit", SITE_PAGE_ROLL: "site_page_roll", SITE_COMP_SHOW: "site_comp_show", SITE_COMP_HIDE: "site_comp_hide", SITE_COMP_PERFORMANCE: "site_page_performance", SITE_JS_ERROR: "site_js_error", SITE_HEART_BEAT: "site_heart_beat" }),
                u = (a(n = {}, c.SITE_BAR_CLICK, "转化组件点击"), a(n, c.SITE_COMP_CLICK, "普通组件点击"), a(n, c.SITE_ACTIVITY_CLICK, "抽奖组件"), a(n, c.SITE_TO_IMLP, "IMLP跳转点击"), a(n, c.SITE_REQ_RECV, "请求接收"), a(n, c.SITE_PAGE_SHOW, "页面渲染"), a(n, c.SITE_FIRST_SCREEN, "首屏展现"), a(n, c.SITE_PAGE_QUIT, "页面退出打点"), a(n, c.SITE_PAGE_ROLL, "页面滚动打点"), a(n, c.SITE_COMP_SHOW, "普通组件展现"), a(n, c.SITE_COMP_HIDE, "普通组件隐藏"), a(n, c.SITE_COMP_PERFORMANCE, "performance埋点"), a(n, c.SITE_JS_ERROR, "js error 埋点"), a(n, c.SITE_HEART_BEAT, "心跳"), n),
                d = a({}, c.SITE_BAR_CLICK, { TEL: "tel", MSG: "msg", SMS: "sms", FORM: "form", DOWNLOAG: "download", FOLLOW: "follow" }),
                s = o({}, d[c.SITE_BAR_CLICK], { USER_DEFINED_LOG: "user_defined_log", IMLP_LOG: "imlp_log", REQ_LOG: "req_log" });
            t.LOCAL_ENV = "development";
            var l = [c.SITE_BAR_CLICK, c.SITE_COMP_CLICK, c.SITE_TO_IMLP, c.SITE_REQ_RECV, c.SITE_PAGE_SHOW, c.SITE_FIRST_SCREEN, c.SITE_PAGE_QUIT, c.SITE_PAGE_ROLL, c.SITE_COMP_PERFORMANCE, c.SITE_COMP_SHOW, c.SITE_COMP_HIDE];
            t.REAL_TIME_ACTION_ID = l;
            var f = { actionIdsForDeveloper: ["site_bar_click", "site_comp_click", "site_to_imlp", "site_req_recv"], tips: { errorForActionId: "埋点数据错误, 该actionId不存在!" }, defaultData: { ADD_FIRST_SCREEN_LOG: {}, ADD_PAGE_SHOW_LOG: {}, ADD_PAGE_SCROLL_LOG: {}, ADD_PAGE_QUIT_LOG: {}, ADD_PAGE_PERFORMANCE_LOG: { performanceTiming: 0 }, ADD_COMP_SHOW_HIDE_LOG: { id: "", name: "", type: "", title: "", tag: "" }, ADD_COMP_LOG: { id: "", name: "", type: "", title: "", tag: "", target_info: "" }, ADD_VIDEO_LOG: { id: "", name: "", type: "", title: "", videoId: "", videoLength: "", subAction: "", tag: "", target_info: "" }, ADD_IMLP_LOG: { imlpId: "", adviceType: "" }, ADD_DOWNLOAD_LOG: { target: "", clickTarget: "", id: "", name: "", title: "" }, ADD_FORM_LOG: { id: "", name: "", title: "" }, ADD_MSG_LOG: { target: "", id: "", name: "", title: "" }, ADD_SMS_LOG: { target: "", id: "", name: "", title: "" }, ADD_TEL_LOG: { target: "", id: "", name: "", title: "" }, ADD_USER_DEFINED_LOG: { actionId: "", userExtra: {} }, ADD_ACTIVITY_LOG: { id: "", name: "", type: "", title: "", activeType: "", bizId: "" }, ADD_REQ_LOG: { isFirstScreen: !1, time: -1, path: "" }, ADD_SITE_BEAT_LOG: {} }, REQ_URL: { LOG: "https://isite.baidu.com/v.gif", LOG_OFFLINE: "https://isite.baidu.com/w.gif" }, actionIdForDeveloper: i, actionId: c, actionName: u, typeOfAction: d, userAction: s, actionOfVideo: { PLAY: "play", PAUSE: "pause", SEEKED: "seeked", END: "end", MUTE: "mute", VOLUME: "volume", FULLSCREEN: "fullscreen", LEVELSCHANGED: "levelsChanged" }, imlpAdviceType: { 0: "hao", 1: "hao", 2: "hao", 3: "feed", 4: "fc", 5: "baiyi", 6: "feed", 7: "other", 255: "other" }, LOCAL_ENV: "development", REAL_TIME_ACTION_ID: l };
            t.default = f
        }, function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0;
            var n = c(r(0)),
                o = c(r(12)),
                a = c(r(15)),
                i = c(r(17));

            function c(e) { return e && e.__esModule ? e : { default: e } }
            var u = a.default.logActions,
                d = a.default.baseLogActions,
                s = { submitForm: o.default.submitForm, addTelLog: u.addTelLog, addConsultLog: u.addConsultLog, addDownloadLog: u.addDownloadLog, sendSmsCode: i.default.sendSmsCode, verifySmsCode: i.default.verifySmsCode, addPageShowLog: d.addPageShowLog, addFirstScreenLog: d.addFirstScreenLog, addPageQuitLog: d.addPageQuitLog, addPageScrollLog: d.addPageScrollLog, addHeartBeatLog: d.addHeartBeatLog, logActions: a.default.logActions, baseLogActions: a.default.baseLogActions, configOfLogAction: a.default.configOfLogAction, qs__stringify: n.default.stringify };
            t.default = s
        }, function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), t.getClickData = t.compCommonData = t.getActionInfo = t.getChannel = t.getCuid = t.getQueryString = t.getScrollTop = t.getDomWidth = t.getDomHeight = t.getWinWidth = t.getWinHeight = void 0;
            var n, o = r(2),
                a = (n = r(3)) && n.__esModule ? n : { default: n };

            function i(e, t, r) { return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e } window.MIP || console.error("[SDK LOG ERROR] no MIP found");
            var c = function() { return MIP.util.customStorage ? MIP.util.customStorage(0) : { get: function(e) { return MIP.getData(e) }, set: function(e, t) { MIP.setData(i({}, e, t)) } } };
            t.getWinHeight = function() { return parseInt(MIP.viewport.getHeight(), 10) };
            t.getWinWidth = function() { return parseInt(MIP.viewport.getWidth(), 10) };
            var u = function() { var e = document.getElementsByTagName("html"); return parseInt(window.getComputedStyle(e[0]).height, 10) };
            t.getDomHeight = u;
            var d = function() { var e = document.getElementsByTagName("html"); return parseInt(window.getComputedStyle(e[0]).width, 10) };
            t.getDomWidth = d;
            t.getScrollTop = function() { return parseInt(MIP.viewport.getScrollTop(), 10) };
            t.getQueryString = function(e) {
                var t = new RegExp("(^|&)".concat(e, "=([^&]*)(&|$)"), "i"),
                    r = window.location.search.substr(1).match(t);
                return null !== r ? unescape(r[2]) : null
            };
            t.getCuid = function() {
                if (MIP.getData("cuidForLog")) return MIP.getData("cuidForLog");
                var e = c(),
                    t = e.get("cuidForLog");
                return t || (t = (0, o.getRandom)(), t = "".concat((new Date).getTime()).concat(t), e.set("cuidForLog", t, 2592e3)), MIP.setData({ cuidForLog: t }), MIP.getData("cuidForLog")
            };
            t.getChannel = function() { for (var e = c(), t = window.location.search.replace("?", "").split("&"), r = 0; r < t.length; r++) { var n = t[r].split("="); if ("channel_id" === n[0]) return MIP.setData({ channelForLog: n[1] }), e.set("channelForLog", MIP.getData("channelForLog"), 1800), !1 } return MIP.setData({ channelForLog: e.get("channelForLog") }), MIP.getData("channelForLog") };
            t.getActionInfo = function(e) { return { action_id: e, action_name: a.default.actionName[e] } };
            var s = function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; return { comp_id: e.id || "", comp_name: e.name || "", comp_title: e.title || "", comp_type: e.type || "", comp_target_id: e.compTargetId || "" } };
            t.compCommonData = s;
            t.getClickData = function(e) {
                var t = JSON.parse(localStorage.getItem("siteopen-sdk-click-data")) || {},
                    r = t.X,
                    n = t.Y;
                return localStorage.removeItem("siteopen-sdk-click-data"),
                    function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {},
                                n = Object.keys(r);
                            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) { return Object.getOwnPropertyDescriptor(r, e).enumerable }))), n.forEach(function(t) { i(e, t, r[t]) })
                        }
                        return e
                    }({}, s(e), { X: r, Y: n, document_length: u(), document_width: d() })
            }
        }, function(e, t) { e.exports = __mipComponentsWebpackHelpers__["vue-loader/lib/runtime/componentNormalizer"] }, function(e, t, r) {
            "use strict";
            var n = Object.prototype.hasOwnProperty,
                o = function() { for (var e = [], t = 0; t < 256; ++t) e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase()); return e }(),
                a = function(e, t) { for (var r = t && t.plainObjects ? Object.create(null) : {}, n = 0; n < e.length; ++n) void 0 !== e[n] && (r[n] = e[n]); return r };
            e.exports = {
                arrayToObject: a,
                assign: function(e, t) { return Object.keys(t).reduce(function(e, r) { return e[r] = t[r], e }, e) },
                combine: function(e, t) { return [].concat(e, t) },
                compact: function(e) {
                    for (var t = [{ obj: { o: e }, prop: "o" }], r = [], n = 0; n < t.length; ++n)
                        for (var o = t[n], a = o.obj[o.prop], i = Object.keys(a), c = 0; c < i.length; ++c) {
                            var u = i[c],
                                d = a[u];
                            "object" == typeof d && null !== d && -1 === r.indexOf(d) && (t.push({ obj: a, prop: u }), r.push(d))
                        }
                    return function(e) {
                        for (; e.length > 1;) {
                            var t = e.pop(),
                                r = t.obj[t.prop];
                            if (Array.isArray(r)) {
                                for (var n = [], o = 0; o < r.length; ++o) void 0 !== r[o] && n.push(r[o]);
                                t.obj[t.prop] = n
                            }
                        }
                    }(t), e
                },
                decode: function(e, t, r) { var n = e.replace(/\+/g, " "); if ("iso-8859-1" === r) return n.replace(/%[0-9a-f]{2}/gi, unescape); try { return decodeURIComponent(n) } catch (e) { return n } },
                encode: function(e, t, r) {
                    if (0 === e.length) return e;
                    var n = "string" == typeof e ? e : String(e);
                    if ("iso-8859-1" === r) return escape(n).replace(/%u[0-9a-f]{4}/gi, function(e) { return "%26%23" + parseInt(e.slice(2), 16) + "%3B" });
                    for (var a = "", i = 0; i < n.length; ++i) {
                        var c = n.charCodeAt(i);
                        45 === c || 46 === c || 95 === c || 126 === c || c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122 ? a += n.charAt(i) : c < 128 ? a += o[c] : c < 2048 ? a += o[192 | c >> 6] + o[128 | 63 & c] : c < 55296 || c >= 57344 ? a += o[224 | c >> 12] + o[128 | c >> 6 & 63] + o[128 | 63 & c] : (i += 1, c = 65536 + ((1023 & c) << 10 | 1023 & n.charCodeAt(i)), a += o[240 | c >> 18] + o[128 | c >> 12 & 63] + o[128 | c >> 6 & 63] + o[128 | 63 & c])
                    }
                    return a
                },
                isBuffer: function(e) { return null != e && !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e)) },
                isRegExp: function(e) { return "[object RegExp]" === Object.prototype.toString.call(e) },
                merge: function e(t, r, o) {
                    if (!r) return t;
                    if ("object" != typeof r) {
                        if (Array.isArray(t)) t.push(r);
                        else {
                            if ("object" != typeof t) return [t, r];
                            (o && (o.plainObjects || o.allowPrototypes) || !n.call(Object.prototype, r)) && (t[r] = !0)
                        }
                        return t
                    }
                    if ("object" != typeof t) return [t].concat(r);
                    var i = t;
                    return Array.isArray(t) && !Array.isArray(r) && (i = a(t, o)), Array.isArray(t) && Array.isArray(r) ? (r.forEach(function(r, a) { n.call(t, a) ? t[a] && "object" == typeof t[a] ? t[a] = e(t[a], r, o) : t.push(r) : t[a] = r }), t) : Object.keys(r).reduce(function(t, a) { var i = r[a]; return n.call(t, a) ? t[a] = e(t[a], i, o) : t[a] = i, t }, i)
                }
            }
        }, function(e, t, r) {
            "use strict";
            var n = String.prototype.replace,
                o = /%20/g;
            e.exports = { default: "RFC3986", formatters: { RFC1738: function(e) { return n.call(e, o, "+") }, RFC3986: function(e) { return e } }, RFC1738: "RFC1738", RFC3986: "RFC3986" }
        }, function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function(e) {
                if (!e) return;
                var t = (0, o.getQueryString)("extra_info"),
                    r = (0, o.getQueryString)("stat"),
                    i = (0, o.getQueryString)("s");
                t && (t = t.split("&"));
                var h = (0, o.getQueryString)("bd_vid"),
                    I = {};
                if (t)
                    for (var y = 0; y < t.length; y++) {
                        var O = t[y].split("="),
                            P = u(O, 2),
                            E = P[0],
                            D = P[1];
                        I[E] = D
                    }
                try {
                    var b = e;
                    "string" == typeof e && (b = JSON.parse(e));
                    var w = b && b.extra ? b.extra : {},
                        S = a.default.REAL_TIME_ACTION_ID,
                        L = a.default.REQ_URL,
                        M = L.LOG,
                        T = L.LOG_OFFLINE,
                        A = b && b.action_id && S.includes(b.action_id) ? M : T,
                        C = function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {},
                                    n = Object.keys(r);
                                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) { return Object.getOwnPropertyDescriptor(r, e).enumerable }))), n.forEach(function(t) { c(e, t, r[t]) })
                            }
                            return e
                        }({}, b, { extra: w, guid: s, appid: d, sub_appid: l, ucid: f, site_id: g, page_name: _, page_type: m, time_stamp: Math.round((new Date).getTime() / 1e3), refer: encodeURIComponent(document.referrer), url: encodeURIComponent(window.location.href), group_id: I.group_id || "", page_id: p, idea_id: (0, o.getQueryString)("IDEA_ID") || "", extra_idea_id: I.idea_id || "", stat: r, s: i, cuid: (0, o.getCuid)(), channel_id: (0, o.getChannel)() || "", bd_vid: h });
                    C.extra.productName = v;
                    var R = MIP.getData("pvtrace");
                    C.extra.pvtrace = ++R, MIP.setData({ pvtrace: R }), C.extra.pvid = MIP.getData("pvid"), C.extra.micro_time = (new Date).getTime(), C.extra = JSON.stringify(C.extra);
                    var j = "".concat(A, "?").concat(n.default.stringify(C)),
                        x = new Image;
                    x.src = j
                } catch (e) { console.log(e) }
            };
            var n = i(r(0)),
                o = r(5),
                a = i(r(3));

            function i(e) { return e && e.__esModule ? e : { default: e } }

            function c(e, t, r) { return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e }

            function u(e, t) {
                return function(e) { if (Array.isArray(e)) return e }(e) || function(e, t) {
                    var r = [],
                        n = !0,
                        o = !1,
                        a = void 0;
                    try { for (var i, c = e[Symbol.iterator](); !(n = (i = c.next()).done) && (r.push(i.value), !t || r.length !== t); n = !0); } catch (e) { o = !0, a = e } finally { try { n || null == c.return || c.return() } finally { if (o) throw a } }
                    return r
                }(e, t) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance") }()
            }
            window.MIP || console.error("[SDK LOG ERROR] no MIP found");
            var d = MIP.getData("appid") || "",
                s = MIP.getData("guid") || "",
                l = MIP.getData("sub_appid") || MIP.getData("subAppId") || "",
                f = MIP.getData("ucid") || MIP.getData("userid") || "",
                g = MIP.getData("siteid") || "",
                p = MIP.getData("pageid") || "",
                _ = MIP.getData("pagename") || MIP.getData("title") || "",
                m = MIP.getData("pagetype") || MIP.getData("pageType") || "",
                v = MIP.getData("productName") || ""
        }, function(e, t, r) {
            "use strict";
            var n = r(7),
                o = r(8),
                a = { brackets: function(e) { return e + "[]" }, indices: function(e, t) { return e + "[" + t + "]" }, repeat: function(e) { return e } },
                i = Array.isArray,
                c = Array.prototype.push,
                u = function(e, t) { c.apply(e, i(t) ? t : [t]) },
                d = Date.prototype.toISOString,
                s = { addQueryPrefix: !1, allowDots: !1, charset: "utf-8", charsetSentinel: !1, delimiter: "&", encode: !0, encoder: n.encode, encodeValuesOnly: !1, indices: !1, serializeDate: function(e) { return d.call(e) }, skipNulls: !1, strictNullHandling: !1 },
                l = function e(t, r, o, a, i, c, d, l, f, g, p, _, m) {
                    var v = t;
                    if ("function" == typeof d ? v = d(r, v) : v instanceof Date && (v = g(v)), null === v) {
                        if (a) return c && !_ ? c(r, s.encoder, m) : r;
                        v = ""
                    }
                    if ("string" == typeof v || "number" == typeof v || "boolean" == typeof v || n.isBuffer(v)) return c ? [p(_ ? r : c(r, s.encoder, m)) + "=" + p(c(v, s.encoder, m))] : [p(r) + "=" + p(String(v))];
                    var h, I = [];
                    if (void 0 === v) return I;
                    if (Array.isArray(d)) h = d;
                    else {
                        var y = Object.keys(v);
                        h = l ? y.sort(l) : y
                    }
                    for (var O = 0; O < h.length; ++O) {
                        var P = h[O];
                        i && null === v[P] || (Array.isArray(v) ? u(I, e(v[P], o(r, P), o, a, i, c, d, l, f, g, p, _, m)) : u(I, e(v[P], r + (f ? "." + P : "[" + P + "]"), o, a, i, c, d, l, f, g, p, _, m)))
                    }
                    return I
                };
            e.exports = function(e, t) {
                var r = e,
                    i = t ? n.assign({}, t) : {};
                if (null !== i.encoder && void 0 !== i.encoder && "function" != typeof i.encoder) throw new TypeError("Encoder has to be a function.");
                var c = void 0 === i.delimiter ? s.delimiter : i.delimiter,
                    d = "boolean" == typeof i.strictNullHandling ? i.strictNullHandling : s.strictNullHandling,
                    f = "boolean" == typeof i.skipNulls ? i.skipNulls : s.skipNulls,
                    g = "boolean" == typeof i.encode ? i.encode : s.encode,
                    p = "function" == typeof i.encoder ? i.encoder : s.encoder,
                    _ = "function" == typeof i.sort ? i.sort : null,
                    m = void 0 === i.allowDots ? s.allowDots : !!i.allowDots,
                    v = "function" == typeof i.serializeDate ? i.serializeDate : s.serializeDate,
                    h = "boolean" == typeof i.encodeValuesOnly ? i.encodeValuesOnly : s.encodeValuesOnly,
                    I = i.charset || s.charset;
                if (void 0 !== i.charset && "utf-8" !== i.charset && "iso-8859-1" !== i.charset) throw new Error("The charset option must be either utf-8, iso-8859-1, or undefined");
                if (void 0 === i.format) i.format = o.default;
                else if (!Object.prototype.hasOwnProperty.call(o.formatters, i.format)) throw new TypeError("Unknown format option provided.");
                var y, O, P = o.formatters[i.format];
                "function" == typeof i.filter ? r = (O = i.filter)("", r) : Array.isArray(i.filter) && (y = O = i.filter);
                var E, D = [];
                if ("object" != typeof r || null === r) return "";
                E = i.arrayFormat in a ? i.arrayFormat : "indices" in i ? i.indices ? "indices" : "repeat" : "indices";
                var b = a[E];
                y || (y = Object.keys(r)), _ && y.sort(_);
                for (var w = 0; w < y.length; ++w) {
                    var S = y[w];
                    f && null === r[S] || u(D, l(r[S], S, b, d, f, g ? p : null, O, _, m, v, P, h, I))
                }
                var L = D.join(c),
                    M = !0 === i.addQueryPrefix ? "?" : "";
                return i.charsetSentinel && (M += "iso-8859-1" === I ? "utf8=%26%2310003%3B&" : "utf8=%E2%9C%93&"), L.length > 0 ? M + L : ""
            }
        }, function(e, t, r) {
            "use strict";
            var n = r(7),
                o = Object.prototype.hasOwnProperty,
                a = { allowDots: !1, allowPrototypes: !1, arrayLimit: 20, charset: "utf-8", charsetSentinel: !1, decoder: n.decode, delimiter: "&", depth: 5, ignoreQueryPrefix: !1, interpretNumericEntities: !1, parameterLimit: 1e3, parseArrays: !0, plainObjects: !1, strictNullHandling: !1 },
                i = function(e) { return e.replace(/&#(\d+);/g, function(e, t) { return String.fromCharCode(parseInt(t, 10)) }) },
                c = function(e, t, r) {
                    if (e) {
                        var n = r.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e,
                            a = /(\[[^[\]]*])/g,
                            i = /(\[[^[\]]*])/.exec(n),
                            c = i ? n.slice(0, i.index) : n,
                            u = [];
                        if (c) {
                            if (!r.plainObjects && o.call(Object.prototype, c) && !r.allowPrototypes) return;
                            u.push(c)
                        }
                        for (var d = 0; null !== (i = a.exec(n)) && d < r.depth;) {
                            if (d += 1, !r.plainObjects && o.call(Object.prototype, i[1].slice(1, -1)) && !r.allowPrototypes) return;
                            u.push(i[1])
                        }
                        return i && u.push("[" + n.slice(i.index) + "]"),
                            function(e, t, r) {
                                for (var n = t, o = e.length - 1; o >= 0; --o) {
                                    var a, i = e[o];
                                    if ("[]" === i && r.parseArrays) a = [].concat(n);
                                    else {
                                        a = r.plainObjects ? Object.create(null) : {};
                                        var c = "[" === i.charAt(0) && "]" === i.charAt(i.length - 1) ? i.slice(1, -1) : i,
                                            u = parseInt(c, 10);
                                        r.parseArrays || "" !== c ? !isNaN(u) && i !== c && String(u) === c && u >= 0 && r.parseArrays && u <= r.arrayLimit ? (a = [])[u] = n : a[c] = n : a = { 0: n }
                                    }
                                    n = a
                                }
                                return n
                            }(u, t, r)
                    }
                };
            e.exports = function(e, t) {
                var r = t ? n.assign({}, t) : {};
                if (null !== r.decoder && void 0 !== r.decoder && "function" != typeof r.decoder) throw new TypeError("Decoder has to be a function.");
                if (r.ignoreQueryPrefix = !0 === r.ignoreQueryPrefix, r.delimiter = "string" == typeof r.delimiter || n.isRegExp(r.delimiter) ? r.delimiter : a.delimiter, r.depth = "number" == typeof r.depth ? r.depth : a.depth, r.arrayLimit = "number" == typeof r.arrayLimit ? r.arrayLimit : a.arrayLimit, r.parseArrays = !1 !== r.parseArrays, r.decoder = "function" == typeof r.decoder ? r.decoder : a.decoder, r.allowDots = void 0 === r.allowDots ? a.allowDots : !!r.allowDots, r.plainObjects = "boolean" == typeof r.plainObjects ? r.plainObjects : a.plainObjects, r.allowPrototypes = "boolean" == typeof r.allowPrototypes ? r.allowPrototypes : a.allowPrototypes, r.parameterLimit = "number" == typeof r.parameterLimit ? r.parameterLimit : a.parameterLimit, r.strictNullHandling = "boolean" == typeof r.strictNullHandling ? r.strictNullHandling : a.strictNullHandling, void 0 !== r.charset && "utf-8" !== r.charset && "iso-8859-1" !== r.charset) throw new Error("The charset option must be either utf-8, iso-8859-1, or undefined");
                if (void 0 === r.charset && (r.charset = a.charset), "" === e || null == e) return r.plainObjects ? Object.create(null) : {};
                for (var u = "string" == typeof e ? function(e, t) {
                        var r, c = {},
                            u = t.ignoreQueryPrefix ? e.replace(/^\?/, "") : e,
                            d = t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit,
                            s = u.split(t.delimiter, d),
                            l = -1,
                            f = t.charset;
                        if (t.charsetSentinel)
                            for (r = 0; r < s.length; ++r) 0 === s[r].indexOf("utf8=") && ("utf8=%E2%9C%93" === s[r] ? f = "utf-8" : "utf8=%26%2310003%3B" === s[r] && (f = "iso-8859-1"), l = r, r = s.length);
                        for (r = 0; r < s.length; ++r)
                            if (r !== l) {
                                var g, p, _ = s[r],
                                    m = _.indexOf("]="),
                                    v = -1 === m ? _.indexOf("=") : m + 1; - 1 === v ? (g = t.decoder(_, a.decoder, f), p = t.strictNullHandling ? null : "") : (g = t.decoder(_.slice(0, v), a.decoder, f), p = t.decoder(_.slice(v + 1), a.decoder, f)), p && t.interpretNumericEntities && "iso-8859-1" === f && (p = i(p)), o.call(c, g) ? c[g] = n.combine(c[g], p) : c[g] = p
                            } return c
                    }(e, r) : e, d = r.plainObjects ? Object.create(null) : {}, s = Object.keys(u), l = 0; l < s.length; ++l) {
                    var f = s[l],
                        g = c(f, u[f], r);
                    d = n.merge(d, g, r)
                }
                return n.compact(d)
            }
        }, function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0;
            var n, o = r(1),
                a = r(13),
                i = (n = r(14)) && n.__esModule ? n : { default: n };
            var c = {
                submitForm: function(e) {
                    if (!window.MIP) throw new Error("submitForm sdk 必须运行在MIP环境中");
                    i.default.addFormLog && i.default.addFormLog();
                    var t = e.orderInfo,
                        r = void 0 === t ? "" : t,
                        n = e.telno,
                        c = e.smscode,
                        u = e.valid,
                        d = void 0 === u || u,
                        s = e.extInfo,
                        l = void 0 === s ? "" : s,
                        f = e.isResSuccess,
                        g = void 0 === f || f,
                        p = e.resError;
                    if ("boolean" != typeof d) throw new Error("[valid] must be boolean");
                    if (c && !n) throw new Error("[telno] must be not null");
                    var _ = MIP.getData("sdk_env") || "production",
                        m = MIP.getData("copid") || 0,
                        v = MIP.getData("ucid") || 0,
                        h = MIP.getData("siteid") || 0,
                        I = MIP.getData("pageid") || 0,
                        y = MIP.getData("appid") || 0,
                        O = (0, a.get)("BAIDUCUID") || (0, a.get)("AGL_USER_ID"),
                        P = (0, a.get)("H_BDCLCKID_SF") || "0",
                        E = { pvid: MIP.getData("pvid") || "" },
                        D = { copid: m, cuid: O, orderInfo: r, ucId: v, siteId: h, pageId: I, pageUrl: window.location.origin + window.location.pathname, pageUrlParams: window.location.search.substring(1), telno: n, smscode: c, actionProd: 2, actionType: 1, orderType: y, valid: d, clkid: P, extraInfo: JSON.stringify(E) };
                    l && (D.extInfo = l);
                    return (0, o.serviceCallback)({ env: _, isResSuccess: g, successCb: { status: 0, data: { optStatus: 0, orderNum: 123456789e3 } }, resError: p, path: "sjh-lexus/MOD/LandingPageClueService/submitLandingPageClue", reqParams: D })
                }
            };
            t.default = c
        }, function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), t.get = void 0;
            t.get = function(e) { var t = document.cookie.match(new RegExp("(?:^|; )".concat(e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1"), "=([^;]*)"))); return t ? decodeURIComponent(t[1]) : void 0 }
        }, function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0;
            var n, o = (n = r(0)) && n.__esModule ? n : { default: n },
                a = r(2),
                i = r(1);

            function c(e, t, r, n, o, a, i) {
                try {
                    var c = e[a](i),
                        u = c.value
                } catch (e) { return void r(e) } c.done ? t(u) : Promise.resolve(u).then(n, o)
            }

            function u(e, t) {
                return function(e) { if (Array.isArray(e)) return e }(e) || function(e, t) {
                    var r = [],
                        n = !0,
                        o = !1,
                        a = void 0;
                    try { for (var i, c = e[Symbol.iterator](); !(n = (i = c.next()).done) && (r.push(i.value), !t || r.length !== t); n = !0); } catch (e) { o = !0, a = e } finally { try { n || null == c.return || c.return() } finally { if (o) throw a } }
                    return r
                }(e, t) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance") }()
            }
            window.MIP || console.error("[SDK LOG ERROR] no MIP found");
            var d = (new Date).getTime(),
                s = { startTime: d, scrollTime: d, pvtrace: 0, pvid: "".concat(d).concat((0, a.getRandom)()) };
            MIP.setData(s);
            var l = MIP.getData("appid") || "",
                f = MIP.getData("guid") || "",
                g = MIP.getData("sub_appid") || "",
                p = MIP.getData("ucid") || "",
                _ = MIP.getData("siteid"),
                m = MIP.getData("pageid"),
                v = MIP.getData("pagename"),
                h = MIP.getData("pagetype"),
                I = "",
                y = function() { return MIP.util.customStorage ? MIP.util.customStorage(0) : { get: function(e) { return MIP.getData(e) }, set: function(e, t) { MIP.setData(function(e, t, r) { return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e }({}, e, t)) } } },
                O = function(e) {
                    var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)", "i"),
                        r = window.location.search.substr(1).match(t);
                    return null !== r ? unescape(r[2]) : null
                },
                P = function() {
                    if (MIP.getData("sjhCuid")) return MIP.getData("sjhCuid");
                    var e = y(),
                        t = e.get("sjhCuid");
                    return t || (t = (0, a.getRandom)(), t = "" + (new Date).getTime() + t, e.set("sjhCuid", t, 2592e3)), MIP.setData({ sjhCuid: t }), MIP.getData("sjhCuid")
                },
                E = function(e) {
                    if (e) {
                        var t = O("extra_info"),
                            r = O("stat"),
                            n = O("s");
                        t && (t = t.split("&"));
                        var a, i = O("bd_vid"),
                            c = {};
                        if (t)
                            for (var d = 0; d < t.length; d++) {
                                var s = u(t[d].split("="), 2),
                                    I = s[0],
                                    E = s[1];
                                c[I] = E
                            }
                        try {
                            "string" == typeof e && (e = JSON.parse(e));
                            var D = { action_id: e.action_id ? e.action_id : "site_comp_click", action_name: e.action_name ? e.action_name : "普通组件点击", guid: f, appid: l, sub_appid: g, ucid: p, site_id: _, page_name: v, page_type: h, time_stamp: Math.round((new Date).getTime() / 1e3), refer: encodeURIComponent(document.referrer), url: encodeURIComponent(location.href), extra: {}, group_id: c.group_id || "", page_id: m, idea_id: O("IDEA_ID") || "", extra_idea_id: c.idea_id || "", stat: r, s: n, cuid: P(), channel_id: (a = y(), location.search.replace("?", "").split("&").forEach(function(e, t) { var r = e.split("="); if ("channel_id" === r[0]) return MIP.setData({ sjhChannel: r[1] }), a.set("sjhChannel", MIP.getData("sjhChannel"), 1800), !1 }), MIP.setData({ sjhChannel: a.get("sjhChannel") }), MIP.getData("sjhChannel") || ""), bd_vid: i };
                            switch (D.action_id) {
                                case "site_page_show":
                                    D.extra.micro_time = (new Date).getTime();
                                    break;
                                case "site_first_screen":
                                    D.extra.micro_time = (new Date).getTime(), D.extra.time_used = e.extra.time_used;
                                    break;
                                case "site_page_quit":
                                    D.extra.stayed_millisecond = (new Date).getTime() - MIP.getData("startTime");
                                    break;
                                case "site_page_roll":
                                    D.extra.document_length = e.document_length, D.extra.window_height = e.window_height, D.extra.window_width = e.window_width, D.extra.stayed_millisecond = (new Date).getTime() - MIP.getData("scrollTime") - 400, MIP.setData({ scrollTime: (new Date).getTime() });
                                    break;
                                case "site_bar_click":
                                    D.extra.type = e.type, "tel" !== e.type && "sms" !== e.type && "msg" !== e.type || (D.extra.target = e.target), "msg" === e.type && (D.extra.uuid = e.uuid, D.extra.target_info = e.target), "download" === e.type && (D.extra.target = e.target || "", D.extra.click_target = e.click_target || "")
                            }
                            var b = MIP.getData("pvtrace");
                            D.extra.pvtrace = ++b, MIP.setData({ pvtrace: b }), D.extra.pvid = MIP.getData("pvid"), D.extra = JSON.stringify(D.extra);
                            var w = "https://isite.baidu.com/v.gif?" + o.default.stringify(D);
                            (new Image).src = w
                        } catch (e) { console.log(e) }
                    }
                },
                D = function() {
                    var e, t = (e = regeneratorRuntime.mark(function e(t) {
                        var r, n;
                        return regeneratorRuntime.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (I) { e.next = 5; break }
                                    return e.next = 3, (0, i.get)("https://isite.baidu.com/feedflow/form/randomval");
                                case 3:
                                    r = e.sent, I = r;
                                case 5:
                                    n = { action_id: "site_bar_click", action_name: "转化组件点击", type: "msg", target: t, uuid: "" + I + (new Date).getTime() }, E(n);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this)
                    }), function() {
                        var t = this,
                            r = arguments;
                        return new Promise(function(n, o) {
                            var a = e.apply(t, r);

                            function i(e) { c(a, n, o, i, u, "next", e) }

                            function u(e) { c(a, n, o, i, u, "throw", e) } i(void 0)
                        })
                    });
                    return function(e) { return t.apply(this, arguments) }
                }(),
                b = {
                    addLog: E,
                    addTelLog: function(e) { E({ action_id: "site_bar_click", action_name: "转化组件点击", type: "tel", target: e || "" }) },
                    addConsultLog: D,
                    addDownloadLog: function(e, t) { E({ action_id: "site_bar_click", action_name: "下载组件点击", target: e || "", click_target: t }) },
                    addPageShowLog: function() { E('{"action_id":"site_page_show","action_name":"页面渲染"}') },
                    addFirstScreenLog: function() {
                        MIP.performance && MIP.performance.on && MIP.performance.on("update", function(e) {
                            if (e.MIPFirstScreen) {
                                var t = e.MIPFirstScreen - e.fetchStart;
                                E({ action_id: "site_first_screen", action_name: "首屏展现", extra: { time_used: t } })
                            }
                        })
                    },
                    addPageQuitLog: function() { window.addEventListener("unload", function() { E('{"action_id":"site_page_quit","action_name":"页面退出打点"}') }) },
                    addPageScrollLog: function() {
                        var e;
                        window.onscroll = function() {
                            e && clearTimeout(e);
                            var t, r = '{"action_id":"site_page_roll","action_name":"页面滚动打点","document_length":"' + (t = document.getElementsByTagName("html"), parseInt(window.getComputedStyle(t[0]).height, 10)) + '","window_height":"' + MIP.viewport.getHeight() + '","window_width":"' + MIP.viewport.getWidth() + '"}';
                            e = setTimeout(function() { E(r) }, 400)
                        }
                    }
                };
            t.default = b
        }, function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0;
            var n = r(2),
                o = u(r(9)),
                a = u(r(3)),
                i = u(r(16)),
                c = r(5);

            function u(e) { return e && e.__esModule ? e : { default: e } }

            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) { return Object.getOwnPropertyDescriptor(r, e).enumerable }))), n.forEach(function(t) { s(e, t, r[t]) })
                }
                return e
            }

            function s(e, t, r) { return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e }
            var l = a.default.defaultData,
                f = a.default.actionIdForDeveloper,
                g = a.default.actionId,
                p = a.default.actionName,
                _ = a.default.imlpAdviceType,
                m = a.default.LOCAL_ENV,
                v = l.ADD_COMP_LOG,
                h = l.ADD_COMP_SHOW_HIDE_LOG,
                I = l.ADD_PAGE_PERFORMANCE_LOG,
                y = 0;
            window.MIP || console.error("[SDK LOG ERROR] no MIP found");
            var O = (new Date).getTime(),
                P = { startTime: O, scrollTime: O, pvtrace: 0, pvid: "".concat(O).concat((0, n.getRandom)()) };
            MIP.setData(P), window.addEventListener("click", function(e) {
                var t = { X: Math.floor(e.pageX), Y: Math.floor(e.pageY) };
                localStorage.setItem("siteopen-sdk-click-data", JSON.stringify(t))
            }, !0);
            var E = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h,
                    t = e.id,
                    r = void 0 === t ? "" : t,
                    n = e.name,
                    o = void 0 === n ? "" : n,
                    a = e.type,
                    i = void 0 === a ? "" : a,
                    c = e.title,
                    u = void 0 === c ? "" : c,
                    d = e.tag,
                    s = void 0 === d ? "" : d;
                return { comp_id: r, comp_name: o, comp_type: i, comp_title: u, micro_time: (new Date).getTime(), extra: { tag: s } }
            };
            window.addEventListener("error", function(e, t, r, n, o) { "production" !== m && D({ errorMessage: e, scriptURI: t, lineNumber: r, columnNumber: n, errorObj: o }) });
            var D = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = d({}, (0, c.getActionInfo)(g.SITE_JS_ERROR), { extra: d({}, e) });
                    (0, o.default)(t)
                },
                b = { actionIdForDeveloper: f, imlpAdviceType: _ },
                w = {
                    baseLogActions: {
                        addPagePerformanceLog: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : I,
                                t = d({}, (0, c.getActionInfo)(g.ADD_PAGE_PERFORMANCE_LOG), { extra: { performance_timing: e.performanceTiming || 0 } });
                            (0, o.default)(t)
                        },
                        addPageShowLog: function() {
                            var e = d({}, (0, c.getActionInfo)(g.SITE_PAGE_SHOW));
                            (0, o.default)(e)
                        },
                        addFirstScreenLog: function() {
                            MIP.performance && MIP.performance.on && MIP.performance.on("update", function(e) {
                                if (e.MIPFirstScreen) {
                                    var t = e.MIPFirstScreen - e.fetchStart,
                                        r = { action_id: g.SITE_FIRST_SCREEN, action_name: p[g.SITE_FIRST_SCREEN], extra: { time_used: t } };
                                    (0, o.default)(r)
                                }
                            })
                        },
                        addPageQuitLog: function() {
                            window.addEventListener("unload", function() {
                                var e = d({}, (0, c.getActionInfo)(g.SITE_FIRST_SCREEN), { extra: { stayed_millisecond: (new Date).getTime() - MIP.getData("startTime"), max_depth: y, document_length: (0, c.getDomHeight)(), document_width: (0, c.getDomWidth)(), window_height: (0, c.getWinHeight)() } });
                                (0, o.default)(e)
                            })
                        },
                        addPageScrollLog: function() {
                            var e;
                            window.addEventListener("scroll", function() {
                                e && clearTimeout(e);
                                var t = (0, c.getScrollTop)();
                                t > y && (y = t);
                                var r = d({}, (0, c.getActionInfo)(g.SITE_PAGE_ROLL), { extra: { document_length: (0, c.getDomHeight)(), window_height: (0, c.getWinHeight)(), window_width: (0, c.getWinWidth)(), stayed_millisecond: (new Date).getTime() - MIP.getData("scrollTime") - 400, position: t } });
                                e = setTimeout(function() { MIP.setData({ scrollTime: (new Date).getTime() }), (0, o.default)(r) }, 400)
                            })
                        },
                        addHeartBeatLog: function() {
                            var e = 1;
                            setInterval(function() {
                                var t = (0, c.getScrollTop)();
                                t > y && (y = t);
                                var r = d({}, (0, c.getActionInfo)(g.SITE_HEART_BEAT), { extra: { document_length: (0, c.getDomHeight)(), window_height: (0, c.getWinHeight)(), heartBeatTrace: e, position: t } });
                                (0, o.default)(r), e += 1
                            }, 1e3)
                        },
                        addCompShow: function(e) {
                            var t = d({}, (0, c.getActionInfo)(g.SITE_COMP_SHOW), E(e));
                            (0, o.default)(t)
                        },
                        hideCompHide: function(e) {
                            var t = d({}, (0, c.getActionInfo)(g.SITE_COMP_HIDE), E(e));
                            (0, o.default)(t)
                        },
                        addJsErrorLog: D,
                        addCompLog: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v,
                                t = d({}, (0, c.getActionInfo)(g.SITE_COMP_CLICK), { extra: d({ comp_type: e.type || "", tag: e.tag || "", target_info: e.target_info || "" }, (0, c.getClickData)(e)) });
                            (0, o.default)(t)
                        }
                    },
                    logActions: i.default,
                    configOfLogAction: b
                };
            t.default = w
        }, function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0;
            var n = r(5),
                o = u(r(9)),
                a = r(1),
                i = r(2),
                c = u(r(3));

            function u(e) { return e && e.__esModule ? e : { default: e } }

            function d(e, t, r, n, o, a, i) {
                try {
                    var c = e[a](i),
                        u = c.value
                } catch (e) { return void r(e) } c.done ? t(u) : Promise.resolve(u).then(n, o)
            }

            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) { return Object.getOwnPropertyDescriptor(r, e).enumerable }))), n.forEach(function(t) { l(e, t, r[t]) })
                }
                return e
            }

            function l(e, t, r) { return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e }
            var f = "",
                g = c.default.defaultData,
                p = c.default.actionIdsForDeveloper,
                _ = c.default.actionId,
                m = c.default.userAction,
                v = c.default.LOCAL_ENV,
                h = g.ADD_TEL_LOG,
                I = g.ADD_MSG_LOG,
                y = g.ADD_SMS_LOG,
                O = g.ADD_DOWNLOAD_LOG,
                P = g.ADD_FORM_LOG,
                E = g.ADD_USER_DEFINED_LOG,
                D = g.ADD_IMLP_LOG,
                b = g.ADD_REQ_LOG,
                w = m.TEL,
                S = m.MSG,
                L = m.SMS,
                M = m.FORM,
                T = m.DOWNLOAG,
                A = m.USER_DEFINED_LOG,
                C = m.IMLP_LOG,
                R = m.REQ_LOG,
                j = function(e) {
                    var t, r, c = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            if ("production" === v && !(e.extra.comp_id && e.extra.comp_name && e.extra.comp_title && e.extra.comp_type && e.extra.comp_target_id)) throw new Error("组件id、name、type、title、compTargetId是必填字段，请检查后填写");
                            (0, o.default)(e)
                        },
                        u = function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                o = s({}, (0, n.getActionInfo)(_.SITE_BAR_CLICK), t);
                            o.extra = s({}, o.extra || {}, { type: e }, (0, n.getClickData)(r)), c(o)
                        },
                        g = function(e, t) { e.extra = Object.assign(e.extra, (0, n.compCommonData)(t)), c(e) };
                    return (l(t = {}, w, function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h,
                            t = (0, i.isObj)(e) ? e.target : e;
                        u({ extra: { target: t || "" } }, e)
                    }), l(t, S, (r = regeneratorRuntime.mark(function e() {
                        var t, r, n, o = arguments;
                        return regeneratorRuntime.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    t = o.length > 0 && void 0 !== o[0] ? o[0] : I, r = (0, i.isObj)(t) ? t.target : t, f || (f = (0, a.guid)()), n = { extra: { target: r || "", uuid: "".concat(f).concat((new Date).getTime()) } }, u(n, t);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this)
                    }), function() {
                        var e = this,
                            t = arguments;
                        return new Promise(function(n, o) {
                            var a = r.apply(e, t);

                            function i(e) { d(a, n, o, i, c, "next", e) }

                            function c(e) { d(a, n, o, i, c, "throw", e) } i(void 0)
                        })
                    })), l(t, L, function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : y,
                            t = { extra: { target: e.target || "" } };
                        u(t, e)
                    }), l(t, M, function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : P;
                        u({}, e)
                    }), l(t, T, function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : O,
                            t = arguments.length > 1 ? arguments[1] : void 0,
                            r = (0, i.isObj)(e) ? e.target : e,
                            n = (0, i.isObj)(e) ? e.clickTarget : t;
                        u({ extra: { target: r || "", click_target: n || "" } }, e)
                    }), l(t, C, function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : D,
                            t = s({}, (0, n.getActionInfo)(_.SITE_TO_IMLP), { extra: { imlp_access_id: e.imlpId, advice_type: e.adviceType } });
                        g(t, e)
                    }), l(t, A, function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E,
                            t = Object.assign(E, e);
                        if ("production" === v && (!t.actionId || p.indexOf(t.actionId) < 0)) throw new Error("请传入正确的actioinId");
                        var r = s({}, (0, n.getActionInfo)(t.actionId || ""), { extra: s({}, t.userExtra) });
                        g(r, t)
                    }), l(t, R, function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b,
                            t = e.isFirstScreen,
                            r = void 0 !== t && t,
                            o = e.time,
                            a = void 0 === o ? "" : o,
                            i = e.path,
                            c = void 0 === i ? "" : i,
                            u = s({}, (0, n.getActionInfo)(_.SITE_REQ_RECV), { extra: { isFirstScreen: r, time: a, path: c } });
                        g(u, e)
                    }), t)[e]
                },
                x = { addTelLog: j(w), addConsultLog: j(S), addSmsLog: j(L), addFormLog: j(M), addDownloadLog: j(T), addImlpLog: j(C), addUserDefinedLog: j(A), addReqLog: j(R) };
            t.default = x
        }, function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0;
            var n = r(1),
                o = {
                    sendSmsCode: function(e) {
                        var t = e.telno,
                            r = void 0 === t ? "" : t,
                            o = e.isResSuccess,
                            a = void 0 === o || o,
                            i = e.resError;
                        if (!window.MIP) throw new Error("sendSmsCode sdk 必须运行在MIP环境中");
                        if ("string" != typeof r) throw new Error("[telno] must be string");
                        if (!r) throw new Error("[telno] must not be null");
                        var c = MIP.getData("appid") || 0,
                            u = MIP.getData("sdk_env") || "production",
                            d = [{ telno: r, orderType: c }],
                            s = { status: 0, data: [{ optStatus: 0, orderType: c, telno: r }], error: [] };
                        return (0, n.serviceCallback)({ env: u, isResSuccess: a, successCb: s, path: "sjh-lexus/GET/SmsNoticeService/sendSmsCode", resError: i, reqParams: d })
                    },
                    verifySmsCode: function(e) {
                        var t = e.telno,
                            r = void 0 === t ? "" : t,
                            o = e.code,
                            a = void 0 === o ? "" : o,
                            i = e.isResSuccess,
                            c = void 0 === i || i,
                            u = e.resError;
                        if (!window.MIP) throw new Error("verifySmsCode sdk 必须运行在MIP环境中");
                        if ("string" != typeof r) throw new Error("[telno] must be string");
                        if ("string" != typeof a) throw new Error("[code] must be string");
                        if (!r) throw new Error("[telno] must not be null");
                        if (!a) throw new Error("[code] must not be null");
                        var d = { status: 0, errors: [], data: [{ code: a, optStatus: 0, telno: r }] },
                            s = [{ telno: r, code: a }],
                            l = MIP.getData("sdk_env") || "production";
                        return (0, n.serviceCallback)({ env: l, isResSuccess: c, successCb: d, path: "sjh-lexus/GET/SmsNoticeService/verifySmsCode", resError: u, reqParams: s })
                    }
                };
            t.default = o
        }, , function(e, t, r) {
            var n = r(25);
            "string" == typeof n && (n = [
                [e.i, n, ""]
            ]), n.locals && (e.exports = n.locals);
            (0, r(21).default)("60c25228", n, !0, {})
        }, function(e, t) { e.exports = __mipComponentsWebpackHelpers__["css-loader/lib/css-base"] }, function(e, t) { e.exports = __mipComponentsWebpackHelpers__["vue-style-loader/lib/addStylesClient"] }, , , function(e, t, r) {
            "use strict";
            var n = r(19);
            r.n(n).a
        }, function(e, t, r) {
            (e.exports = r(20)(!1)).push(["ce5ef586fba232ff", ".wrapper[data-v-3c4ee08e]{margin:0 auto;text-align:center}", ""])
        }, , , function(e, t, r) {
            "use strict";
            r.r(t);
            var n = r(4),
                o = r.n(n),
                a = { prerenderAllowed: function() { return !0 }, mounted: function() { o.a.addPageShowLog(), o.a.addFirstScreenLog(), o.a.addPageQuitLog(), o.a.addPageScrollLog(), o.a.baseLogActions.addHeartBeatLog() } },
                i = (r(24), r(6)),
                c = r.n(i)()(a, function() { var e = this.$createElement; return (this._self._c || e)("div", { staticClass: "wrapper" }) }, [], !1, null, "3c4ee08e", null);
            c.options.__file = "mip-sjh-log.vue";
            t.default = c.exports
        }]);
        e.__esModule && (e = e.default), e && MIP.registerElement("mip-sjh-log", e)
    }
});