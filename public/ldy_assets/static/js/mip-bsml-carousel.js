(window.MIP = window.MIP || []).push({ name: "mip-bsml-carousel", func: function() { define("mip-bsml-carousel/iscroll/iscroll", ["require", "exports", "module"], function(t, i, e) {! function(t, i, s) {
                    function n(t, e) { this.wrapper = "string" == typeof t ? i.querySelector(t) : t, this.scroller = this.wrapper.children[0], this.scrollerStyle = this.scroller.style, this.options = { resizeScrollbars: !0, mouseWheelSpeed: 20, snapThreshold: .334, startX: 0, startY: 0, scrollY: !0, directionLockThreshold: 5, momentum: !0, bounce: !0, bounceTime: 600, bounceEasing: "", preventDefault: !0, preventDefaultException: { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/ }, HWCompositing: !0, useTransition: !0, useTransform: !0 }; for (var s in e) this.options[s] = e[s]; if (this.translateZ = this.options.HWCompositing && l.hasPerspective ? " translateZ(0)" : "", this.options.useTransition = l.hasTransition && this.options.useTransition, this.options.useTransform = l.hasTransform && this.options.useTransform, this.options.eventPassthrough = !0 === this.options.eventPassthrough ? "vertical" : this.options.eventPassthrough, this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault, this.options.scrollY = "vertical" == this.options.eventPassthrough ? !1 : this.options.scrollY, this.options.scrollX = "horizontal" == this.options.eventPassthrough ? !1 : this.options.scrollX, this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough, this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold, this.options.bounceEasing = "string" == typeof this.options.bounceEasing ? l.ease[this.options.bounceEasing] || l.ease.circular : this.options.bounceEasing, this.options.resizePolling = void 0 === this.options.resizePolling ? 60 : this.options.resizePolling, !0 === this.options.tap) this.options.tap = "tap"; if ("scale" == this.options.shrinkScrollbars) this.options.useTransition = !1;
                        this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1, this.x = 0, this.y = 0, this.directionX = 0, this.directionY = 0, this._events = {}, this._init(), this.refresh(), this.scrollTo(this.options.startX, this.options.startY), this.enable() }

                    function o(t, e, s) { var n = i.createElement("div"),
                            o = i.createElement("div"); if (!0 === s) n.style.cssText = "position:absolute;z-index:9999", o.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px"; if (o.className = "iScrollIndicator", "h" == t) { if (!0 === s) n.style.cssText += ";height:7px;left:2px;right:2px;bottom:0", o.style.height = "100%";
                            n.className = "iScrollHorizontalScrollbar" } else { if (!0 === s) n.style.cssText += ";width:7px;bottom:2px;top:2px;right:1px", o.style.width = "100%";
                            n.className = "iScrollVerticalScrollbar" } if (n.style.cssText += ";overflow:hidden", !e) n.style.pointerEvents = "none"; return n.appendChild(o), n }

                    function r(e, s) { this.wrapper = "string" == typeof s.el ? i.querySelector(s.el) : s.el, this.wrapperStyle = this.wrapper.style, this.indicator = this.wrapper.children[0], this.indicatorStyle = this.indicator.style, this.scroller = e, this.options = { listenX: !0, listenY: !0, interactive: !1, resize: !0, defaultScrollbars: !1, shrink: !1, fade: !1, speedRatioX: 0, speedRatioY: 0 }; for (var n in s) this.options[n] = s[n]; if (this.sizeRatioX = 1, this.sizeRatioY = 1, this.maxPosX = 0, this.maxPosY = 0, this.options.interactive) { if (!this.options.disableTouch) l.addEvent(this.indicator, "touchstart", this), l.addEvent(t, "touchend", this); if (!this.options.disablePointer) l.addEvent(this.indicator, l.prefixPointerEvent("pointerdown"), this), l.addEvent(t, l.prefixPointerEvent("pointerup"), this); if (!this.options.disableMouse) l.addEvent(this.indicator, "mousedown", this), l.addEvent(t, "mouseup", this) } if (this.options.fade) this.wrapperStyle[l.style.transform] = this.scroller.translateZ, this.wrapperStyle[l.style.transitionDuration] = l.isBadAndroid ? "0.001s" : "0ms", this.wrapperStyle.opacity = "0" } var a = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function(i) { t.setTimeout(i, 1e3 / 60) },
                        l = function() {
                            function e(t) { if (!1 === r) return !1; if ("" === r) return t;
                                else return r + t.charAt(0).toUpperCase() + t.substr(1) } var n = {},
                                o = i.createElement("div").style,
                                r = function() { for (var t = ["t", "webkitT", "MozT", "msT", "OT"], i = 0, e = t.length; i < e; i++)
                                        if (t[i] + "ransform" in o) return t[i].substr(0, t[i].length - 1); return !1 }();
                            n.getTime = Date.now || function() { return (new Date).getTime() }, n.extend = function(t, i) { for (var e in i) t[e] = i[e] }, n.addEvent = function(t, i, e, s) { t.addEventListener(i, e, !!s) }, n.removeEvent = function(t, i, e, s) { t.removeEventListener(i, e, !!s) }, n.prefixPointerEvent = function(i) { return t.MSPointerEvent ? "MSPointer" + i.charAt(9).toUpperCase() + i.substr(10) : i }, n.momentum = function(t, i, e, n, o, r) { var a, l, h = t - i,
                                    c = s.abs(h) / e; if (r = void 0 === r ? 6e-4 : r, a = t + c * c / (2 * r) * (h < 0 ? -1 : 1), l = c / r, a < n) a = o ? n - o / 2.5 * (c / 8) : n, h = s.abs(a - t), l = h / c;
                                else if (a > 0) a = o ? o / 2.5 * (c / 8) : 0, h = s.abs(t) + a, l = h / c; return { destination: s.round(a), duration: l } }; var a = e("transform"); return n.extend(n, { hasTransform: !1 !== a, hasPerspective: e("perspective") in o, hasTouch: "ontouchstart" in t, hasPointer: t.PointerEvent || t.MSPointerEvent, hasTransition: e("transition") in o }), n.isBadAndroid = /Android /.test(t.navigator.appVersion) && !/Chrome\/\d/.test(t.navigator.appVersion), n.extend(n.style = {}, { transform: a, transitionTimingFunction: e("transitionTimingFunction"), transitionDuration: e("transitionDuration"), transitionDelay: e("transitionDelay"), transformOrigin: e("transformOrigin") }), n.hasClass = function(t, i) { return new RegExp("(^|\\s)" + i + "(\\s|$)").test(t.className) }, n.addClass = function(t, i) { if (!n.hasClass(t, i)) { var e = t.className.split(" ");
                                    e.push(i), t.className = e.join(" ") } }, n.removeClass = function(t, i) { if (n.hasClass(t, i)) { var e = new RegExp("(^|\\s)" + i + "(\\s|$)", "g");
                                    t.className = t.className.replace(e, " ") } }, n.offset = function(t) { for (var i = -t.offsetLeft, e = -t.offsetTop; t = t.offsetParent;) i -= t.offsetLeft, e -= t.offsetTop; return { left: i, top: e } }, n.preventDefaultException = function(t, i) { for (var e in i)
                                    if (i[e].test(t[e])) return !0; return !1 }, n.extend(n.eventType = {}, { touchstart: 1, touchmove: 1, touchend: 1, mousedown: 2, mousemove: 2, mouseup: 2, pointerdown: 3, pointermove: 3, pointerup: 3, MSPointerDown: 3, MSPointerMove: 3, MSPointerUp: 3 }), n.extend(n.ease = {}, { quadratic: { style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)", fn: function(t) { return t * (2 - t) } }, circular: { style: "cubic-bezier(0.1, 0.57, 0.1, 1)", fn: function(t) { return s.sqrt(1 - --t * t) } }, back: { style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)", fn: function(t) { var i = 4; return (t -= 1) * t * ((i + 1) * t + i) + 1 } }, bounce: { style: "", fn: function(t) { if ((t /= 1) < 1 / 2.75) return 7.5625 * t * t;
                                        else if (t < 2 / 2.75) return 7.5625 * (t -= 1.5 / 2.75) * t + .75;
                                        else if (t < 2.5 / 2.75) return 7.5625 * (t -= 2.25 / 2.75) * t + .9375;
                                        else return 7.5625 * (t -= 2.625 / 2.75) * t + .984375 } }, elastic: { style: "", fn: function(t) { var i = .22,
                                            e = .4; if (0 === t) return 0; if (1 == t) return 1;
                                        else return e * s.pow(2, -10 * t) * s.sin((t - i / 4) * (2 * s.PI) / i) + 1 } } }), n.tap = function(t, e) { var s = i.createEvent("Event");
                                s.initEvent(e, !0, !0), s.pageX = t.pageX, s.pageY = t.pageY, t.target.dispatchEvent(s) }, n.click = function(t) { var e, s = t.target; if (!/(SELECT|INPUT|TEXTAREA)/i.test(s.tagName)) e = i.createEvent("MouseEvents"), e.initMouseEvent("click", !0, !0, t.view, 1, s.screenX, s.screenY, s.clientX, s.clientY, t.ctrlKey, t.altKey, t.shiftKey, t.metaKey, 0, null), e._constructed = !0, s.dispatchEvent(e) }, n }(); if (n.prototype = { version: "5.1.3", _init: function() { if (this._initEvents(), this.options.scrollbars || this.options.indicators) this._initIndicators(); if (this.options.mouseWheel) this._initWheel(); if (this.options.snap) this._initSnap(); if (this.options.keyBindings) this._initKeys() }, destroy: function() { this._initEvents(!0), this._execEvent("destroy") }, _transitionEnd: function(t) { if (t.target == this.scroller && this.isInTransition)
                                    if (this._transitionTime(), !this.resetPosition(this.options.bounceTime)) this.isInTransition = !1, this._execEvent("scrollEnd") }, _start: function(t) { if (1 != l.eventType[t.type])
                                    if (0 !== t.button) return; if (this.enabled && (!this.initiated || l.eventType[t.type] === this.initiated)) { if (this.options.preventDefault && !l.isBadAndroid && !l.preventDefaultException(t.target, this.options.preventDefaultException)) t.preventDefault(); var i, e = t.touches ? t.touches[0] : t; if (this.initiated = l.eventType[t.type], this.moved = !1, this.distX = 0, this.distY = 0, this.directionX = 0, this.directionY = 0, this.directionLocked = 0, this._transitionTime(), this.startTime = l.getTime(), this.options.useTransition && this.isInTransition) this.isInTransition = !1, i = this.getComputedPosition(), this._translate(s.round(i.x), s.round(i.y)), this._execEvent("scrollEnd");
                                    else if (!this.options.useTransition && this.isAnimating) this.isAnimating = !1, this._execEvent("scrollEnd");
                                    this.startX = this.x, this.startY = this.y, this.absStartX = this.x, this.absStartY = this.y, this.pointX = e.pageX, this.pointY = e.pageY, this._execEvent("beforeScrollStart") } }, _move: function(t) { if (this.enabled && l.eventType[t.type] === this.initiated) { if (this.options.preventDefault) t.preventDefault(); var i, e, n, o, r = t.touches ? t.touches[0] : t,
                                        a = r.pageX - this.pointX,
                                        h = r.pageY - this.pointY,
                                        c = l.getTime(); if (this.pointX = r.pageX, this.pointY = r.pageY, this.distX += a, this.distY += h, n = s.abs(this.distX), o = s.abs(this.distY), !(c - this.endTime > 300 && n < 10 && o < 10)) { if (!this.directionLocked && !this.options.freeScroll)
                                            if (n > o + this.options.directionLockThreshold) this.directionLocked = "h";
                                            else if (o >= n + this.options.directionLockThreshold) this.directionLocked = "v";
                                        else this.directionLocked = "n"; if ("h" == this.directionLocked) { if ("vertical" == this.options.eventPassthrough) t.preventDefault();
                                            else if ("horizontal" == this.options.eventPassthrough) return void(this.initiated = !1);
                                            h = 0 } else if ("v" == this.directionLocked) { if ("horizontal" == this.options.eventPassthrough) t.preventDefault();
                                            else if ("vertical" == this.options.eventPassthrough) return void(this.initiated = !1);
                                            a = 0 } if (a = this.hasHorizontalScroll ? a : 0, h = this.hasVerticalScroll ? h : 0, i = this.x + a, e = this.y + h, i > 0 || i < this.maxScrollX) i = this.options.bounce ? this.x + a / 3 : i > 0 ? 0 : this.maxScrollX; if (e > 0 || e < this.maxScrollY) e = this.options.bounce ? this.y + h / 3 : e > 0 ? 0 : this.maxScrollY; if (this.directionX = a > 0 ? -1 : a < 0 ? 1 : 0, this.directionY = h > 0 ? -1 : h < 0 ? 1 : 0, !this.moved) this._execEvent("scrollStart"); if (this.moved = !0, this._translate(i, e), c - this.startTime > 300) this.startTime = c, this.startX = this.x, this.startY = this.y } } }, _end: function(t) { if (this.enabled && l.eventType[t.type] === this.initiated) { if (this.options.preventDefault && !l.preventDefaultException(t.target, this.options.preventDefaultException)) t.preventDefault(); var i, e, n = (t.changedTouches && t.changedTouches[0], l.getTime() - this.startTime),
                                        o = s.round(this.x),
                                        r = s.round(this.y),
                                        a = s.abs(o - this.startX),
                                        h = s.abs(r - this.startY),
                                        c = 0,
                                        p = ""; if (this.isInTransition = 0, this.initiated = 0, this.endTime = l.getTime(), !this.resetPosition(this.options.bounceTime)) { if (this.scrollTo(o, r), !this.moved) { if (this.options.tap) l.tap(t, this.options.tap); if (this.options.click) l.click(t); return void this._execEvent("scrollCancel") } if (this._events.flick && n < 200 && a < 100 && h < 100) return void this._execEvent("flick"); if (this.options.momentum && n < 300) i = this.hasHorizontalScroll ? l.momentum(this.x, this.startX, n, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : { destination: o, duration: 0 }, e = this.hasVerticalScroll ? l.momentum(this.y, this.startY, n, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : { destination: r, duration: 0 }, o = i.destination, r = e.destination, c = s.max(i.duration, e.duration), this.isInTransition = 1; if (this.options.snap) { var d = this._nearestSnap(o, r);
                                            this.currentPage = d, c = this.options.snapSpeed || s.max(s.max(s.min(s.abs(o - d.x), 1e3), s.min(s.abs(r - d.y), 1e3)), 300), o = d.x, r = d.y, this.directionX = 0, this.directionY = 0, p = this.options.bounceEasing } if (o != this.x || r != this.y) { if (o > 0 || o < this.maxScrollX || r > 0 || r < this.maxScrollY) p = l.ease.quadratic; return void this.scrollTo(o, r, c, p) } this._execEvent("scrollEnd") } } }, _resize: function() { var t = this;
                                clearTimeout(this.resizeTimeout), this.resizeTimeout = setTimeout(function() { t.refresh() }, this.options.resizePolling) }, resetPosition: function(t) { var i = this.x,
                                    e = this.y; if (t = t || 0, !this.hasHorizontalScroll || this.x > 0) i = 0;
                                else if (this.x < this.maxScrollX) i = this.maxScrollX; if (!this.hasVerticalScroll || this.y > 0) e = 0;
                                else if (this.y < this.maxScrollY) e = this.maxScrollY; if (i == this.x && e == this.y) return !1;
                                else return this.scrollTo(i, e, t, this.options.bounceEasing), !0 }, disable: function() { this.enabled = !1 }, enable: function() { this.enabled = !0 }, refresh: function() { this.wrapper.offsetHeight; if (this.wrapperWidth = this.wrapper.clientWidth, this.wrapperHeight = this.wrapper.clientHeight, this.scrollerWidth = this.scroller.offsetWidth, this.scrollerHeight = this.scroller.offsetHeight, this.maxScrollX = this.wrapperWidth - this.scrollerWidth, this.maxScrollY = this.wrapperHeight - this.scrollerHeight, this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0, this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0, !this.hasHorizontalScroll) this.maxScrollX = 0, this.scrollerWidth = this.wrapperWidth; if (!this.hasVerticalScroll) this.maxScrollY = 0, this.scrollerHeight = this.wrapperHeight;
                                this.endTime = 0, this.directionX = 0, this.directionY = 0, this.wrapperOffset = l.offset(this.wrapper), this._execEvent("refresh"), this.resetPosition() }, on: function(t, i) { if (!this._events[t]) this._events[t] = [];
                                this._events[t].push(i) }, off: function(t, i) { if (this._events[t]) { var e = this._events[t].indexOf(i); if (e > -1) this._events[t].splice(e, 1) } }, _execEvent: function(t) { if (this._events[t]) { var i = 0,
                                        e = this._events[t].length; if (e)
                                        for (; i < e; i++) this._events[t][i].apply(this, [].slice.call(arguments, 1)) } }, scrollBy: function(t, i, e, s) { t = this.x + t, i = this.y + i, e = e || 0, this.scrollTo(t, i, e, s) }, scrollTo: function(t, i, e, s) { if (s = s || l.ease.circular, this.isInTransition = this.options.useTransition && e > 0, !e || this.options.useTransition && s.style) this._transitionTimingFunction(s.style), this._transitionTime(e), this._translate(t, i);
                                else this._animate(t, i, e, s.fn) }, scrollToElement: function(t, i, e, n, o) { if (t = t.nodeType ? t : this.scroller.querySelector(t)) { var r = l.offset(t); if (r.left -= this.wrapperOffset.left, r.top -= this.wrapperOffset.top, !0 === e) e = s.round(t.offsetWidth / 2 - this.wrapper.offsetWidth / 2); if (!0 === n) n = s.round(t.offsetHeight / 2 - this.wrapper.offsetHeight / 2);
                                    r.left -= e || 0, r.top -= n || 0, r.left = r.left > 0 ? 0 : r.left < this.maxScrollX ? this.maxScrollX : r.left, r.top = r.top > 0 ? 0 : r.top < this.maxScrollY ? this.maxScrollY : r.top, i = void 0 === i || null === i || "auto" === i ? s.max(s.abs(this.x - r.left), s.abs(this.y - r.top)) : i, this.scrollTo(r.left, r.top, i, o) } }, _transitionTime: function(t) { if (t = t || 0, this.scrollerStyle[l.style.transitionDuration] = t + "ms", !t && l.isBadAndroid) this.scrollerStyle[l.style.transitionDuration] = "0.001s"; if (this.indicators)
                                    for (var i = this.indicators.length; i--;) this.indicators[i].transitionTime(t) }, _transitionTimingFunction: function(t) { if (this.scrollerStyle[l.style.transitionTimingFunction] = t, this.indicators)
                                    for (var i = this.indicators.length; i--;) this.indicators[i].transitionTimingFunction(t) }, _translate: function(t, i) { if (this.options.useTransform) this.scrollerStyle[l.style.transform] = "translate(" + t + "px," + i + "px)" + this.translateZ;
                                else t = s.round(t), i = s.round(i), this.scrollerStyle.left = t + "px", this.scrollerStyle.top = i + "px"; if (this.x = t, this.y = i, this.indicators)
                                    for (var e = this.indicators.length; e--;) this.indicators[e].updatePosition() }, _initEvents: function(i) { var e = i ? l.removeEvent : l.addEvent,
                                    s = this.options.bindToWrapper ? this.wrapper : t; if (e(t, "orientationchange", this), e(t, "resize", this), this.options.click) e(this.wrapper, "click", this, !0); if (!this.options.disableMouse) e(this.wrapper, "mousedown", this), e(s, "mousemove", this), e(s, "mousecancel", this), e(s, "mouseup", this); if (l.hasPointer && !this.options.disablePointer) e(this.wrapper, l.prefixPointerEvent("pointerdown"), this), e(s, l.prefixPointerEvent("pointermove"), this), e(s, l.prefixPointerEvent("pointercancel"), this), e(s, l.prefixPointerEvent("pointerup"), this); if (l.hasTouch && !this.options.disableTouch) e(this.wrapper, "touchstart", this), e(s, "touchmove", this), e(s, "touchcancel", this), e(s, "touchend", this);
                                e(this.scroller, "transitionend", this), e(this.scroller, "webkitTransitionEnd", this), e(this.scroller, "oTransitionEnd", this), e(this.scroller, "MSTransitionEnd", this) }, getComputedPosition: function() { var i, e, s = t.getComputedStyle(this.scroller, null); if (this.options.useTransform) s = s[l.style.transform].split(")")[0].split(", "), i = +(s[12] || s[4]), e = +(s[13] || s[5]);
                                else i = +s.left.replace(/[^-\d.]/g, ""), e = +s.top.replace(/[^-\d.]/g, ""); return { x: i, y: e } }, _initIndicators: function() {
                                function t(t) { for (var i = a.indicators.length; i--;) t.call(a.indicators[i]) } var i, e = this.options.interactiveScrollbars,
                                    s = "string" != typeof this.options.scrollbars,
                                    n = [],
                                    a = this; if (this.indicators = [], this.options.scrollbars) { if (this.options.scrollY) i = { el: o("v", e, this.options.scrollbars), interactive: e, defaultScrollbars: !0, customStyle: s, resize: this.options.resizeScrollbars, shrink: this.options.shrinkScrollbars, fade: this.options.fadeScrollbars, listenX: !1 }, this.wrapper.appendChild(i.el), n.push(i); if (this.options.scrollX) i = { el: o("h", e, this.options.scrollbars), interactive: e, defaultScrollbars: !0, customStyle: s, resize: this.options.resizeScrollbars, shrink: this.options.shrinkScrollbars, fade: this.options.fadeScrollbars, listenY: !1 }, this.wrapper.appendChild(i.el), n.push(i) } if (this.options.indicators) n = n.concat(this.options.indicators); for (var l = n.length; l--;) this.indicators.push(new r(this, n[l])); if (this.options.fadeScrollbars) this.on("scrollEnd", function() { t(function() { this.fade() }) }), this.on("scrollCancel", function() { t(function() { this.fade() }) }), this.on("scrollStart", function() { t(function() { this.fade(1) }) }), this.on("beforeScrollStart", function() { t(function() { this.fade(1, !0) }) });
                                this.on("refresh", function() { t(function() { this.refresh() }) }), this.on("destroy", function() { t(function() { this.destroy() }), delete this.indicators }) }, _initWheel: function() { l.addEvent(this.wrapper, "wheel", this), l.addEvent(this.wrapper, "mousewheel", this), l.addEvent(this.wrapper, "DOMMouseScroll", this), this.on("destroy", function() { l.removeEvent(this.wrapper, "wheel", this), l.removeEvent(this.wrapper, "mousewheel", this), l.removeEvent(this.wrapper, "DOMMouseScroll", this) }) }, _wheel: function(t) { if (this.enabled) { t.preventDefault(), t.stopPropagation(); var i, e, n, o, r = this; if (void 0 === this.wheelTimeout) r._execEvent("scrollStart"); if (clearTimeout(this.wheelTimeout), this.wheelTimeout = setTimeout(function() { r._execEvent("scrollEnd"), r.wheelTimeout = void 0 }, 400), "deltaX" in t)
                                        if (1 === t.deltaMode) i = -t.deltaX * this.options.mouseWheelSpeed, e = -t.deltaY * this.options.mouseWheelSpeed;
                                        else i = -t.deltaX, e = -t.deltaY;
                                    else if ("wheelDeltaX" in t) i = t.wheelDeltaX / 120 * this.options.mouseWheelSpeed, e = t.wheelDeltaY / 120 * this.options.mouseWheelSpeed;
                                    else if ("wheelDelta" in t) i = e = t.wheelDelta / 120 * this.options.mouseWheelSpeed;
                                    else if ("detail" in t) i = e = -t.detail / 3 * this.options.mouseWheelSpeed;
                                    else return; if (i *= this.options.invertWheelDirection, e *= this.options.invertWheelDirection, !this.hasVerticalScroll) i = e, e = 0; if (this.options.snap) { if (n = this.currentPage.pageX, o = this.currentPage.pageY, i > 0) n--;
                                        else if (i < 0) n++; if (e > 0) o--;
                                        else if (e < 0) o++; return void this.goToPage(n, o) } if (n = this.x + s.round(this.hasHorizontalScroll ? i : 0), o = this.y + s.round(this.hasVerticalScroll ? e : 0), n > 0) n = 0;
                                    else if (n < this.maxScrollX) n = this.maxScrollX; if (o > 0) o = 0;
                                    else if (o < this.maxScrollY) o = this.maxScrollY;
                                    this.scrollTo(n, o, 0) } }, _initSnap: function() { if (this.currentPage = {}, "string" == typeof this.options.snap) this.options.snap = this.scroller.querySelectorAll(this.options.snap);
                                this.on("refresh", function() { var t, i, e, n, o, r, a = 0,
                                        l = 0,
                                        h = 0,
                                        c = this.options.snapStepX || this.wrapperWidth,
                                        p = this.options.snapStepY || this.wrapperHeight; if (this.pages = [], this.wrapperWidth && this.wrapperHeight && this.scrollerWidth && this.scrollerHeight) { if (!0 === this.options.snap)
                                            for (e = s.round(c / 2), n = s.round(p / 2); h > -this.scrollerWidth;) { for (this.pages[a] = [], t = 0, o = 0; o > -this.scrollerHeight;) this.pages[a][t] = { x: s.max(h, this.maxScrollX), y: s.max(o, this.maxScrollY), width: c, height: p, cx: h - e, cy: o - n }, o -= p, t++;
                                                h -= c, a++ } else
                                                for (r = this.options.snap, t = r.length, i = -1; a < t; a++) { if (0 === a || r[a].offsetLeft <= r[a - 1].offsetLeft) l = 0, i++; if (!this.pages[l]) this.pages[l] = []; if (h = s.max(-r[a].offsetLeft, this.maxScrollX), o = s.max(-r[a].offsetTop, this.maxScrollY), e = h - s.round(r[a].offsetWidth / 2), n = o - s.round(r[a].offsetHeight / 2), this.pages[l][i] = { x: h, y: o, width: r[a].offsetWidth, height: r[a].offsetHeight, cx: e, cy: n }, h > this.maxScrollX) l++ }
                                        if (this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0), this.options.snapThreshold % 1 == 0) this.snapThresholdX = this.options.snapThreshold, this.snapThresholdY = this.options.snapThreshold;
                                        else this.snapThresholdX = s.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold), this.snapThresholdY = s.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold) } }), this.on("flick", function() { var t = this.options.snapSpeed || s.max(s.max(s.min(s.abs(this.x - this.startX), 1e3), s.min(s.abs(this.y - this.startY), 1e3)), 300);
                                    this.goToPage(this.currentPage.pageX + this.directionX, this.currentPage.pageY + this.directionY, t) }) }, _nearestSnap: function(t, i) { if (!this.pages.length) return { x: 0, y: 0, pageX: 0, pageY: 0 }; var e = 0,
                                    n = this.pages.length,
                                    o = 0; if (s.abs(t - this.absStartX) < this.snapThresholdX && s.abs(i - this.absStartY) < this.snapThresholdY) return this.currentPage; if (t > 0) t = 0;
                                else if (t < this.maxScrollX) t = this.maxScrollX; if (i > 0) i = 0;
                                else if (i < this.maxScrollY) i = this.maxScrollY; for (; e < n; e++)
                                    if (t >= this.pages[e][0].cx) { t = this.pages[e][0].x; break } for (n = this.pages[e].length; o < n; o++)
                                    if (i >= this.pages[0][o].cy) { i = this.pages[0][o].y; break } if (e == this.currentPage.pageX) { if ((e += this.directionX) < 0) e = 0;
                                    else if (e >= this.pages.length) e = this.pages.length - 1;
                                    t = this.pages[e][0].x } if (o == this.currentPage.pageY) { if ((o += this.directionY) < 0) o = 0;
                                    else if (o >= this.pages[0].length) o = this.pages[0].length - 1;
                                    i = this.pages[0][o].y } return { x: t, y: i, pageX: e, pageY: o } }, goToPage: function(t, i, e, n) { if (n = n || this.options.bounceEasing, t >= this.pages.length) t = this.pages.length - 1;
                                else if (t < 0) t = 0; if (i >= this.pages[t].length) i = this.pages[t].length - 1;
                                else if (i < 0) i = 0; var o = this.pages[t][i].x,
                                    r = this.pages[t][i].y;
                                e = void 0 === e ? this.options.snapSpeed || s.max(s.max(s.min(s.abs(o - this.x), 1e3), s.min(s.abs(r - this.y), 1e3)), 300) : e, this.currentPage = { x: o, y: r, pageX: t, pageY: i }, this.scrollTo(o, r, e, n) }, next: function(t, i) { var e = this.currentPage.pageX,
                                    s = this.currentPage.pageY; if (++e >= this.pages.length && this.hasVerticalScroll) e = 0, s++;
                                this.goToPage(e, s, t, i) }, prev: function(t, i) { var e = this.currentPage.pageX,
                                    s = this.currentPage.pageY; if (--e < 0 && this.hasVerticalScroll) e = 0, s--;
                                this.goToPage(e, s, t, i) }, _initKeys: function(i) { var e, s = { pageUp: 33, pageDown: 34, end: 35, home: 36, left: 37, up: 38, right: 39, down: 40 }; if ("object" == typeof this.options.keyBindings) { for (e in this.options.keyBindings)
                                        if ("string" == typeof this.options.keyBindings[e]) this.options.keyBindings[e] = this.options.keyBindings[e].toUpperCase().charCodeAt(0) } else this.options.keyBindings = {}; for (e in s) this.options.keyBindings[e] = this.options.keyBindings[e] || s[e];
                                l.addEvent(t, "keydown", this), this.on("destroy", function() { l.removeEvent(t, "keydown", this) }) }, _key: function(t) { if (this.enabled) { var i, e = this.options.snap,
                                        n = e ? this.currentPage.pageX : this.x,
                                        o = e ? this.currentPage.pageY : this.y,
                                        r = l.getTime(),
                                        a = this.keyTime || 0,
                                        h = .25; if (this.options.useTransition && this.isInTransition) i = this.getComputedPosition(), this._translate(s.round(i.x), s.round(i.y)), this.isInTransition = !1; switch (this.keyAcceleration = r - a < 200 ? s.min(this.keyAcceleration + h, 50) : 0, t.keyCode) {
                                        case this.options.keyBindings.pageUp:
                                            if (this.hasHorizontalScroll && !this.hasVerticalScroll) n += e ? 1 : this.wrapperWidth;
                                            else o += e ? 1 : this.wrapperHeight; break;
                                        case this.options.keyBindings.pageDown:
                                            if (this.hasHorizontalScroll && !this.hasVerticalScroll) n -= e ? 1 : this.wrapperWidth;
                                            else o -= e ? 1 : this.wrapperHeight; break;
                                        case this.options.keyBindings.end:
                                            n = e ? this.pages.length - 1 : this.maxScrollX, o = e ? this.pages[0].length - 1 : this.maxScrollY; break;
                                        case this.options.keyBindings.home:
                                            n = 0, o = 0; break;
                                        case this.options.keyBindings.left:
                                            n += e ? -1 : 5 + this.keyAcceleration >> 0; break;
                                        case this.options.keyBindings.up:
                                            o += e ? 1 : 5 + this.keyAcceleration >> 0; break;
                                        case this.options.keyBindings.right:
                                            n -= e ? -1 : 5 + this.keyAcceleration >> 0; break;
                                        case this.options.keyBindings.down:
                                            o -= e ? 1 : 5 + this.keyAcceleration >> 0; break;
                                        default:
                                            return } if (e) return void this.goToPage(n, o); if (n > 0) n = 0, this.keyAcceleration = 0;
                                    else if (n < this.maxScrollX) n = this.maxScrollX, this.keyAcceleration = 0; if (o > 0) o = 0, this.keyAcceleration = 0;
                                    else if (o < this.maxScrollY) o = this.maxScrollY, this.keyAcceleration = 0;
                                    this.scrollTo(n, o, 0), this.keyTime = r } }, _animate: function(t, i, e, s) {
                                function n() { var d, u, f, m = l.getTime(); if (!(m >= p)) { if (m = (m - c) / e, f = s(m), d = (t - r) * f + r, u = (i - h) * f + h, o._translate(d, u), o.isAnimating) a(n) } else if (o.isAnimating = !1, o._translate(t, i), !o.resetPosition(o.options.bounceTime)) o._execEvent("scrollEnd") } var o = this,
                                    r = this.x,
                                    h = this.y,
                                    c = l.getTime(),
                                    p = c + e;
                                this.isAnimating = !0, n() }, handleEvent: function(t) { switch (t.type) {
                                    case "touchstart":
                                    case "pointerdown":
                                    case "MSPointerDown":
                                    case "mousedown":
                                        this._start(t); break;
                                    case "touchmove":
                                    case "pointermove":
                                    case "MSPointerMove":
                                    case "mousemove":
                                        this._move(t); break;
                                    case "touchend":
                                    case "pointerup":
                                    case "MSPointerUp":
                                    case "mouseup":
                                    case "touchcancel":
                                    case "pointercancel":
                                    case "MSPointerCancel":
                                    case "mousecancel":
                                        this._end(t); break;
                                    case "orientationchange":
                                    case "resize":
                                        this._resize(); break;
                                    case "transitionend":
                                    case "webkitTransitionEnd":
                                    case "oTransitionEnd":
                                    case "MSTransitionEnd":
                                        this._transitionEnd(t); break;
                                    case "wheel":
                                    case "DOMMouseScroll":
                                    case "mousewheel":
                                        this._wheel(t); break;
                                    case "keydown":
                                        this._key(t); break;
                                    case "click":
                                        if (!t._constructed) t.preventDefault(), t.stopPropagation() } } }, r.prototype = { handleEvent: function(t) { switch (t.type) {
                                    case "touchstart":
                                    case "pointerdown":
                                    case "MSPointerDown":
                                    case "mousedown":
                                        this._start(t); break;
                                    case "touchmove":
                                    case "pointermove":
                                    case "MSPointerMove":
                                    case "mousemove":
                                        this._move(t); break;
                                    case "touchend":
                                    case "pointerup":
                                    case "MSPointerUp":
                                    case "mouseup":
                                    case "touchcancel":
                                    case "pointercancel":
                                    case "MSPointerCancel":
                                    case "mousecancel":
                                        this._end(t) } }, destroy: function() { if (this.options.interactive) l.removeEvent(this.indicator, "touchstart", this), l.removeEvent(this.indicator, l.prefixPointerEvent("pointerdown"), this), l.removeEvent(this.indicator, "mousedown", this), l.removeEvent(t, "touchmove", this), l.removeEvent(t, l.prefixPointerEvent("pointermove"), this), l.removeEvent(t, "mousemove", this), l.removeEvent(t, "touchend", this), l.removeEvent(t, l.prefixPointerEvent("pointerup"), this), l.removeEvent(t, "mouseup", this); if (this.options.defaultScrollbars) this.wrapper.parentNode.removeChild(this.wrapper) }, _start: function(i) { var e = i.touches ? i.touches[0] : i; if (i.preventDefault(), i.stopPropagation(), this.transitionTime(), this.initiated = !0, this.moved = !1, this.lastPointX = e.pageX, this.lastPointY = e.pageY, this.startTime = l.getTime(), !this.options.disableTouch) l.addEvent(t, "touchmove", this); if (!this.options.disablePointer) l.addEvent(t, l.prefixPointerEvent("pointermove"), this); if (!this.options.disableMouse) l.addEvent(t, "mousemove", this);
                                this.scroller._execEvent("beforeScrollStart") }, _move: function(t) { var i, e, s, n, o = t.touches ? t.touches[0] : t;
                                l.getTime(); if (!this.moved) this.scroller._execEvent("scrollStart");
                                this.moved = !0, i = o.pageX - this.lastPointX, this.lastPointX = o.pageX, e = o.pageY - this.lastPointY, this.lastPointY = o.pageY, s = this.x + i, n = this.y + e, this._pos(s, n), t.preventDefault(), t.stopPropagation() }, _end: function(i) { if (this.initiated) { if (this.initiated = !1, i.preventDefault(), i.stopPropagation(), l.removeEvent(t, "touchmove", this), l.removeEvent(t, l.prefixPointerEvent("pointermove"), this), l.removeEvent(t, "mousemove", this), this.scroller.options.snap) { var e = this.scroller._nearestSnap(this.scroller.x, this.scroller.y),
                                            n = this.options.snapSpeed || s.max(s.max(s.min(s.abs(this.scroller.x - e.x), 1e3), s.min(s.abs(this.scroller.y - e.y), 1e3)), 300); if (this.scroller.x != e.x || this.scroller.y != e.y) this.scroller.directionX = 0, this.scroller.directionY = 0, this.scroller.currentPage = e, this.scroller.scrollTo(e.x, e.y, n, this.scroller.options.bounceEasing) } if (this.moved) this.scroller._execEvent("scrollEnd") } }, transitionTime: function(t) { if (t = t || 0, this.indicatorStyle[l.style.transitionDuration] = t + "ms", !t && l.isBadAndroid) this.indicatorStyle[l.style.transitionDuration] = "0.001s" }, transitionTimingFunction: function(t) { this.indicatorStyle[l.style.transitionTimingFunction] = t }, refresh: function() { if (this.transitionTime(), this.options.listenX && !this.options.listenY) this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? "block" : "none";
                                else if (this.options.listenY && !this.options.listenX) this.indicatorStyle.display = this.scroller.hasVerticalScroll ? "block" : "none";
                                else this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? "block" : "none"; if (this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll) { if (l.addClass(this.wrapper, "iScrollBothScrollbars"), l.removeClass(this.wrapper, "iScrollLoneScrollbar"), this.options.defaultScrollbars && this.options.customStyle)
                                        if (this.options.listenX) this.wrapper.style.right = "8px";
                                        else this.wrapper.style.bottom = "8px" } else if (l.removeClass(this.wrapper, "iScrollBothScrollbars"), l.addClass(this.wrapper, "iScrollLoneScrollbar"), this.options.defaultScrollbars && this.options.customStyle)
                                    if (this.options.listenX) this.wrapper.style.right = "2px";
                                    else this.wrapper.style.bottom = "2px";
                                this.wrapper.offsetHeight; if (this.options.listenX) { if (this.wrapperWidth = this.wrapper.clientWidth, this.options.resize) this.indicatorWidth = s.max(s.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8), this.indicatorStyle.width = this.indicatorWidth + "px";
                                    else this.indicatorWidth = this.indicator.clientWidth; if (this.maxPosX = this.wrapperWidth - this.indicatorWidth, "clip" == this.options.shrink) this.minBoundaryX = 8 - this.indicatorWidth, this.maxBoundaryX = this.wrapperWidth - 8;
                                    else this.minBoundaryX = 0, this.maxBoundaryX = this.maxPosX;
                                    this.sizeRatioX = this.options.speedRatioX || this.scroller.maxScrollX && this.maxPosX / this.scroller.maxScrollX } if (this.options.listenY) { if (this.wrapperHeight = this.wrapper.clientHeight, this.options.resize) this.indicatorHeight = s.max(s.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8), this.indicatorStyle.height = this.indicatorHeight + "px";
                                    else this.indicatorHeight = this.indicator.clientHeight; if (this.maxPosY = this.wrapperHeight - this.indicatorHeight, "clip" == this.options.shrink) this.minBoundaryY = 8 - this.indicatorHeight, this.maxBoundaryY = this.wrapperHeight - 8;
                                    else this.minBoundaryY = 0, this.maxBoundaryY = this.maxPosY;
                                    this.maxPosY = this.wrapperHeight - this.indicatorHeight, this.sizeRatioY = this.options.speedRatioY || this.scroller.maxScrollY && this.maxPosY / this.scroller.maxScrollY } this.updatePosition() }, updatePosition: function() { var t = this.options.listenX && s.round(this.sizeRatioX * this.scroller.x) || 0,
                                    i = this.options.listenY && s.round(this.sizeRatioY * this.scroller.y) || 0; if (!this.options.ignoreBoundaries) { if (t < this.minBoundaryX) { if ("scale" == this.options.shrink) this.width = s.max(this.indicatorWidth + t, 8), this.indicatorStyle.width = this.width + "px";
                                        t = this.minBoundaryX } else if (t > this.maxBoundaryX)
                                        if ("scale" == this.options.shrink) this.width = s.max(this.indicatorWidth - (t - this.maxPosX), 8), this.indicatorStyle.width = this.width + "px", t = this.maxPosX + this.indicatorWidth - this.width;
                                        else t = this.maxBoundaryX;
                                    else if ("scale" == this.options.shrink && this.width != this.indicatorWidth) this.width = this.indicatorWidth, this.indicatorStyle.width = this.width + "px"; if (i < this.minBoundaryY) { if ("scale" == this.options.shrink) this.height = s.max(this.indicatorHeight + 3 * i, 8), this.indicatorStyle.height = this.height + "px";
                                        i = this.minBoundaryY } else if (i > this.maxBoundaryY)
                                        if ("scale" == this.options.shrink) this.height = s.max(this.indicatorHeight - 3 * (i - this.maxPosY), 8), this.indicatorStyle.height = this.height + "px", i = this.maxPosY + this.indicatorHeight - this.height;
                                        else i = this.maxBoundaryY;
                                    else if ("scale" == this.options.shrink && this.height != this.indicatorHeight) this.height = this.indicatorHeight, this.indicatorStyle.height = this.height + "px" } if (this.x = t, this.y = i, this.scroller.options.useTransform) this.indicatorStyle[l.style.transform] = "translate(" + t + "px," + i + "px)" + this.scroller.translateZ;
                                else this.indicatorStyle.left = t + "px", this.indicatorStyle.top = i + "px" }, _pos: function(t, i) { if (t < 0) t = 0;
                                else if (t > this.maxPosX) t = this.maxPosX; if (i < 0) i = 0;
                                else if (i > this.maxPosY) i = this.maxPosY;
                                t = this.options.listenX ? s.round(t / this.sizeRatioX) : this.scroller.x, i = this.options.listenY ? s.round(i / this.sizeRatioY) : this.scroller.y, this.scroller.scrollTo(t, i) }, fade: function(t, i) { if (!i || this.visible) { clearTimeout(this.fadeTimeout), this.fadeTimeout = null; var e = t ? 250 : 500,
                                        s = t ? 0 : 300;
                                    t = t ? "1" : "0", this.wrapperStyle[l.style.transitionDuration] = e + "ms", this.fadeTimeout = setTimeout(function(t) { this.wrapperStyle.opacity = t, this.visible = +t }.bind(this, t), s) } } }, n.utils = l, void 0 !== e && e.exports) e.exports = n;
                    else t.IScroll = n }(window, document, Math) }), define("mip-bsml-carousel/mip-bsml-carousel", ["require", "customElement", "zepto", "./iscroll/iscroll"], function(t) { var i = t("customElement").create(),
                    e = t("zepto"),
                    s = t("./iscroll/iscroll"); return i.prototype.build = function() {
                    function t() { if (a >= c) a = 0, d.goToPage(0, 0, 1e3);
                        else d.next() } var i = this,
                        n = i.element,
                        o = null,
                        r = null,
                        a = 0,
                        l = e(n).find(".mip-bsml-carousel");
                    l.css({ minHeight: "10px" }); var h = l.attr("data-carousel");
                    e(n).find(".mip-bsml-carousel-list-item").css({ width: window.innerWidth }); var c = e(n).find(".mip-bsml-carousel-list-item").length; if (e(n).find(".mip-bsml-carousel-list").css({ width: c + "01%" }), e(n).find(".mip-bsml-carousel-list-item-point .total-length").html(c), e(n).find(".mip-bsml-carousel-title").length > 0) e(n).find(".mip-bsml-carousel-list-item-point").css({ bottom: "72px" }); var p = { scrollX: !0, scrollY: !1, eventPassthrough: !0, momentum: !1, snap: !0 },
                        d = new s(e(n).find(".mip-bsml-carousel")[0], p); if (d.refresh(), c > 1) d.on("scrollEnd", function() { var i = d.currentPage.pageX + 1 > c ? c : d.currentPage.pageX + 1; if (a = i, e(n).find(".mip-bsml-carousel-list-item-point .current").html(i), !o && "true" === h) r = setTimeout(function() { o = setInterval(t, 3e3) }, 1e3) }); if ("true" === h) o = setInterval(t, 3e3), d.on("beforeScrollStart", function() { clearInterval(o), o = null, clearTimeout(r) }), e(n).on("touchend", ".mip-bsml-carousel", function(i) { o = setInterval(t, 3e3) }) }, i }), define("mip-bsml-carousel", ["mip-bsml-carousel/mip-bsml-carousel"], function(t) { return t }),
            function() {
                function t(t, i) { t.registerMipElement("mip-bsml-carousel", i) } if (window.MIP) require(["mip-bsml-carousel"], function(i) { t(window.MIP, i) });
                else require(["mip", "mip-bsml-carousel"], t) }() } });