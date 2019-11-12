(window.MIP = window.MIP || []).push({
    name: "mip-bsml-fixedbar",
    func: function() {
        function t(t) { for (var i = [], e = 0; e < t; e++) i.push("0123456789abcdef".charAt(Math.floor(16 * Math.random()))); return i.join("") }

        function i(t) {
            var i = new RegExp("(^|&)" + t + "=([^&]*)(&|$)", "i"),
                e = window.location.search.substr(1).match(i);
            if (null != e) return unescape(e[2]);
            else return null
        }
        window.getQueryString = i, define("mip-bsml-fixedbar/mip-bsml-fixedbar", ["require", "customElement", "zepto", "util"], function(e) {
                function n(t, i, e) { a.ajax({ url: i, type: e, data: t, cache: !1, dataType: "jsonp", success: function(t) { if ("string" == typeof t.data) window.randomval = t.data } }) }

                function o(t, i, e) { a.ajax({ url: "/byd/get/guideData", type: "POST", cache: !1, contentType: "application/json; charset=utf-8", dataType: "json", data: JSON.stringify({ siteId: t.siteId, abTestExpKey: t.expCommonParams }), success: function(t) { i(t.data) } }) }

                function s(t) {
                    var i = JSON.stringify(t);
                    window.addLog(i)
                }
                var r = e("customElement").create(),
                    a = e("zepto"),
                    l = e("util"),
                    c = l.platform,
                    h = "http://isite.baidu.com/feedflow/form/jumpto?";
                return r.prototype.build = function() {
                    function e(t, i) {
                        var e = "0" === y || "1" === y,
                            n = { t: i };
                        e && window._agl && window._agl.push(["track", [t, n]])
                    }
                    var r = this,
                        l = r.element,
                        d = (a(document.documentElement), a(l)),
                        p = a("body.with-header").css("padding-top") || "",
                        f = a(window).height() - (a(".mip-shell-header-wrapper").height() || p.substring(0, p.lastIndexOf("px")) || 0),
                        u = a("#pageinfo"),
                        m = u.attr("siteid"),
                        b = u.attr("pagename"),
                        v = u.attr("pagetype"),
                        g = u.attr("pageid"),
                        y = u.attr("appid"),
                        w = u.attr("ucid"),
                        x = u.attr("vpUcid"),
                        S = 0,
                        T = {};
                    if (T.pageid = g, T.merchantid = a(l).find(".bsml-form-list-submit").attr("data-ucid"), T.siteid = m, T.prod = 2, T.appid = y, T.clkid = window.pvid, 2 == +T.appid) {
                        var k = { page: 1, detail: 2, serviceDetail: 3, caseDetail: 4 };
                        T.prod = k[b], T.merchantid = w, T.pvid = window.pvid
                    }
                    d.find(".mip-bsml-fixed-bar-box-phone a").css({ display: "block" });
                    var E = a(l).parents(".mip-element.mip-layout-container"),
                        P = E.last().parent().is(".body-wrapper"),
                        I = d.parent(),
                        M = I.attr("dianjingintention"),
                        _ = d.find("#trans-fixed-bar-blank"),
                        A = _ && _.data("guide");
                    if (!M && A) {
                        var Y = d.find("mip-fixed").children().first(),
                            C = "BENZ_MED_EXP_BASE",
                            X = window.getCookieInfo(C) || "";
                        o({ siteId: m, expCommonParams: X }, function(t) {
                            if (t && t.guide) {
                                var i = '<div id="recommendation-guid" class="trans-fixed-bar-blank-guide"><div class="detail-rich-text">' + t.guide + '</div></div><span id="recommendation-guid-close" class="trans-fixed-bar-blank-close"></span>';
                                Y.before(i)
                            }
                            a(l).find("#recommendation-guid-close").click(function() { d.find("#recommendation-guid").hide(), d.find("#recommendation-guid-close").hide() })
                        }), setTimeout(function() { d.find("#recommendation-guid").hide(), d.find("#recommendation-guid-close").hide() }, 5e3)
                    }
                    if (M) setTimeout(function() { d.find("mip-fixed").children().first().before('<div id="mip-bsml-fixed-bar-dianjing-toast" style="overflow:hidden;color:#555;position:relative"><div style="float:right;width:80%;padding:15px;margin:1px 10px 10px 0;word-break:break-all;background-color:#fff;border-radius:4px;box-shadow:0px 0px 4px rgba(0, 0, 0, .5)"><div id="mip-bsml-fixed-bar-dianjing-toast-close" style="position:absolute;width:20px;height:20px;top:8px;right:16px;font-size:24px;text-align:center;line-height:20px">×</div><div>' + M + '</div><div style="position:absolute;bottom:5px;right:30px;width:10px;height:10px;background:#fff;transform: rotate(135deg);box-shadow:1px -1px 1.5px 0px rgba(0, 0, 0, 0.2)"></div></div></div>'), d.find("#mip-bsml-fixed-bar-dianjing-toast-close").click(function() { d.find("#mip-bsml-fixed-bar-dianjing-toast").hide() }), setTimeout(function() { d.find("#mip-bsml-fixed-bar-dianjing-toast").hide() }, 6e4) }, 1e3);
                    if (n({}, "https://isite.baidu.com/feedflow/form/randomval", "get"), d.on("click", ".mip-bsml-fixed-bar-box-appointment", function() {
                            S = window.pageYOffset;
                            var t = a(this).attr("id"),
                                i = a(l).find(".bsml-form").attr("id");
                            if (t = t && t.trim().replace(/[0-9]+$/g, ""), i = i && i.trim().replace(/[0-9]+$/g, ""), t === i) {
                                if (a(".body-wrapper").css({ overflow: "hidden", "min-height": f, height: f }), a(l).find(".bsml-form-lay").fadeIn("fast").css({ height: f, position: "fixed" }), a(this).attr("data-id")) a(l).find(".bsml-form").hide(), a(l).find(".bsml-form[data-id=" + a(this).attr("data-id") + "]").show(), a(l).find(".bsml-form").filter("[data-id=" + a(this).attr("data-id") + "]").animate({ bottom: "0" }, "fast").css({ position: "fixed", "padding-bottom": "1.3rem" });
                                else a(l).find(".bsml-form").animate({ bottom: "0" }, "fast").css({ position: "fixed", "padding-bottom": "1.3rem" });
                                if (c.isIos() && P) a("body").children("div").not(".body-wrapper").not("script").hide(), a(l).css("position", "static"), E.css("position", "static"), a(".body-wrapper").css("box-sizing", "border-box"), a(l).find(".bsml-form").css("position", "absolute");
                                window._hmt = window._hmt || [], window._hmt.push(["_trackPageview", "/mip/yxy/action/" + m + "/" + g + "/" + b + "/" + v + "/appointment"]), s({ action_id: "site_bar_click", action_name: "转化组件点击", type: "book" }), e("mmp-click", 5)
                            }
                        }), d.on("click", ".mip-bsml-fixed-bar-box-consult, .mip-bsml-fixed-bar-three-box-consult, .mip-bsml-fixed-bar-two-box-consult", function() {
                            window._hmt = window._hmt || [], window._hmt.push(["_trackPageview", "/mip/yxy/action/" + m + "/" + g + "/" + b + "/" + v + "/consult"]);
                            var o = a(this).find("a").attr("href") || "",
                                r = "" + window.randomval + (new Date).getTime();
                            T.jsonval = { contact_url: encodeURIComponent(o) }, T.type = 2, n(T, "https://isite.baidu.com/feedflow/form/submit", "post");
                            var l = { action_id: "site_bar_click", action_name: "转化组件点击", type: "msg", target: o, uuid: r };
                            if (e("mmp-click", 1), window.imlpSdkFollowTest)
                                if (o && o.indexOf("urlType") > -1) {
                                    var c = o.split("?")[0],
                                        d = o.split("?")[1],
                                        p = window._bsmlUtils.parseSearch(d);
                                    if (window.imlpSdkToBCPFollowTest) {
                                        var f = (new Date).getTime() + t(23),
                                            u = function() { return { action_id: "site_to_imlp", imlp_access_id: f, advice_type: p.adviceType } };
                                        s(u());
                                        var y = { 0: "hao", 1: "hao", 2: "hao", 3: "feed", 4: "fc", 5: "baiyi", 6: "feed", 7: "other", 12: "other", 255: "other" },
                                            w = "255",
                                            x = { type: "post", timeout: 100, path: "/cip-golfr/ChannelService/getChannelValue", params: { stat: i("stat") || "", path: "/cip-golfr/ChannelService/getChannelValue" }, successCB: function(t) { if (200 === t.status && t.data) w = t.data.channelType; var e = { imlpAccessId: f, channel: y[w] || "other", imlpLink: c + "?imid=" + p.imid, adviceType: p.adviceType, exUserId: p.exUserId, siteId: p.siteId, groupId: p.groupId, appId: "cip" }; if (window.medicalXiaochengxuFollow) { if (i("xst")) e.xst = i("xst"); if (i("setting")) e.setting = i("setting"); if (i("ch") && y[i("ch")]) e.channel = y[i("ch")] } window._bsmlUtils.callImlp(e) }, errorCB: function(t) { var e = { imlpAccessId: f, channel: y[w] || "other", imlpLink: c + "?imid=" + p.imid, adviceType: p.adviceType, exUserId: p.exUserId, siteId: p.siteId, groupId: p.groupId, appId: "cip" }; if (window.medicalXiaochengxuFollow) { if (i("xst")) e.xst = i("xst"); if (i("setting")) e.setting = i("setting"); if (i("ch") && y[i("ch")]) e.channel = y[i("ch")] } window._bsmlUtils.callImlp(e) } };
                                        window._bsmlUtils.ajaxRequest(x)
                                    } else window._bsmlUtils.callImlp({ imlpLink: c + "?imid=" + p.imid, adviceType: p.adviceType, exUserId: p.exUserId, siteId: p.siteId, groupId: p.groupId, appId: "cip" })
                                } else s(l), location.href = h + "targeturl=" + encodeURIComponent(o) + "&randomval=" + r + "&referurl=" + encodeURIComponent(window.location.href);
                            else s(l), location.href = h + "targeturl=" + encodeURIComponent(o) + "&randomval=" + r + "&referurl=" + encodeURIComponent(window.location.href);
                            return !1
                        }), d.on("click", ".mip-bsml-fixed-bar-box-phone, .mip-bsml-fixed-bar-three-box-phone, .mip-bsml-fixed-bar-two-box-phone", function() {
                            window._hmt = window._hmt || [], window._hmt.push(["_trackPageview", "/mip/yxy/action/" + m + "/" + g + "/" + b + "/" + v + "/phone"]);
                            var t = a(this).find("a").attr("href").substr(4) || "";
                            T.jsonval = { phone_num: t }, T.type = 0, n(T, "https://isite.baidu.com/feedflow/form/submit", "post"), s({ action_id: "site_bar_click", action_name: "转化组件点击", type: "tel", target: t }), e("mmp-click", 2)
                        }), a(l).on("touchend", ".bsml-form-close", function(t) {
                            if (t.preventDefault(), a(".body-wrapper").css({ overflow: "initial", height: "auto" }), a(l).find(".bsml-form-lay").hide(), c.isIos() && P) a("body").children("div").not(".body-wrapper").not("script").show(), a(l).find(".bsml-form").css("position", "fixed");
                            a(l).find(".bsml-form").animate({ bottom: "-800px" }, "fast"), a(window).scrollTop(S)
                        }), a(l).on("click", ".bsml-form-lay", function() {
                            if (a(".body-wrapper").css({ overflow: "initial", height: "auto" }), a(l).find(".bsml-form-lay").hide(), c.isIos() && P) a("body").children("div").not(".body-wrapper").not("script").show(), a(l).find(".bsml-form").css("position", "fixed");
                            a(l).find(".bsml-form").animate({ bottom: "-800px" }, "fast"), a(window).scrollTop(S)
                        }), w && x) ! function(t, i, e, n, o) {
                        function s(t) {
                            var i, e = new RegExp("(^| )" + t + "=([^;]*)(;|$)");
                            if (i = document.cookie.match(e)) return unescape(i[2]);
                            else return null
                        }
                        t[n] = t[n] || {}, t[n]["phonetracker.start"] = (new Date).getTime(), t[n].uid = o;
                        var r = i.getElementsByTagName(e)[0],
                            a = i.createElement(e);
                        a.asyn = !0, a.src = "//ada.baidu.com/phone-tracker/getjs?uid=" + o + "&from=self&referer=" + encodeURIComponent(document.referrer) + "&cookie_BD_IS_FROM_FC_AD=" + s("BD_IS_FROM_FC_AD"), r.parentNode.insertBefore(a, r)
                    }(window, document, "script", "bdDataLayer", x)
                }, r
            }), define("mip-bsml-fixedbar", ["mip-bsml-fixedbar/mip-bsml-fixedbar"], function(t) { return t }),
            function() {
                function t(t, i) { t.registerMipElement("mip-bsml-fixedbar", i) }
                if (window.MIP) require(["mip-bsml-fixedbar"], function(i) { t(window.MIP, i) });
                else require(["mip", "mip-bsml-fixedbar"], t)
            }()
    }
});