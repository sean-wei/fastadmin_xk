window._mipStartTiming = Date.now(),
    function(e, t) { "object" == typeof exports && "undefined" != typeof module ? t() : "function" == typeof define && define.amd ? define(t) : t() }(0, function() { "use strict";

        function e(e, t) { return e(t = { exports: {} }, t.exports), t.exports }

        function Se(e) { if ("function" != typeof e) throw TypeError(e + " is not a function!"); return e }

        function _e(r, i, e) { if (Se(r), void 0 === i) return r; switch (e) {
                case 1:
                    return function(e) { return r.call(i, e) };
                case 2:
                    return function(e, t) { return r.call(i, e, t) };
                case 3:
                    return function(e, t, n) { return r.call(i, e, t, n) } } return function() { return r.apply(i, arguments) } }

        function i(e) { return n.call(e).slice(8, -1) }

        function Pe(e) { return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++r + a).toString(36)) }

        function t(e) { var t, n, r; return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = function(e, t) { try { return e[t] } catch (e) {} }(t = Object(e), s)) ? n : c ? i(t) : "Object" == (r = i(t)) && "function" == typeof t.callee ? "Arguments" : r }

        function Le(e) { return "object" == typeof e ? null !== e : "function" == typeof e }

        function Te(e) { if (!Le(e)) throw TypeError(e + " is not an object!"); return e }

        function Ie(e) { try { return !!e() } catch (e) { return !0 } }

        function Ce(e) { return l ? u.createElement(e) : {} }

        function xe(e, t) { if (!Le(e)) return e; var n, r; if (t && "function" == typeof(n = e.toString) && !Le(r = n.call(e))) return r; if ("function" == typeof(n = e.valueOf) && !Le(r = n.call(e))) return r; if (!t && "function" == typeof(n = e.toString) && !Le(r = n.call(e))) return r; throw TypeError("Can't convert object to primitive value") }

        function Ae(e, t) { return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t } }

        function Oe(e, t) { return f.call(e, t) } var Me = e(function(e) { var t = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(); "number" == typeof __g && (__g = t) }),
            n = {}.toString,
            je = e(function(e) { var t = e.exports = { version: "2.6.5" }; "number" == typeof __e && (__e = t) }),
            o = (je.version, e(function(e) { var t = "__core-js_shared__",
                    n = Me[t] || (Me[t] = {});
                (e.exports = function(e, t) { return n[e] || (n[e] = void 0 !== t ? t : {}) })("versions", []).push({ version: je.version, mode: "global", copyright: "\xa9 2019 Denis Pushkarev (zloirock.ru)" }) })),
            r = 0,
            a = Math.random(),
            He = e(function(e) { var t = o("wks"),
                    n = Me.Symbol,
                    r = "function" == typeof n;
                (e.exports = function(e) { return t[e] || (t[e] = r && n[e] || (r ? n : Pe)("Symbol." + e)) }).store = t }),
            s = He("toStringTag"),
            c = "Arguments" == i(function() { return arguments }()),
            Ne = !Ie(function() { return 7 != Object.defineProperty({}, "a", { get: function() { return 7 } }).a }),
            u = Me.document,
            l = Le(u) && Le(u.createElement),
            Re = !Ne && !Ie(function() { return 7 != Object.defineProperty(Ce("div"), "a", { get: function() { return 7 } }).a }),
            d = Object.defineProperty,
            De = { f: Ne ? Object.defineProperty : function(e, t, n) { if (Te(e), t = xe(t, !0), Te(n), Re) try { return d(e, t, n) } catch (e) {}
                    if ("get" in n || "set" in n) throw TypeError("Accessors not supported!"); return "value" in n && (e[t] = n.value), e } },
            Fe = Ne ? function(e, t, n) { return De.f(e, t, Ae(1, n)) } : function(e, t, n) { return e[t] = n, e },
            f = {}.hasOwnProperty,
            h = o("native-function-to-string", Function.toString),
            qe = e(function(e) { var o = Pe("src"),
                    t = "toString",
                    a = ("" + h).split(t);
                je.inspectSource = function(e) { return h.call(e) }, (e.exports = function(e, t, n, r) { var i = "function" == typeof n;
                    i && (Oe(n, "name") || Fe(n, "name", t)), e[t] !== n && (i && (Oe(n, o) || Fe(n, o, e[t] ? "" + e[t] : a.join(String(t)))), e === Me ? e[t] = n : r ? e[t] ? e[t] = n : Fe(e, t, n) : (delete e[t], Fe(e, t, n))) })(Function.prototype, t, function() { return "function" == typeof this && this[o] || h.call(this) }) }),
            v = "prototype",
            m = function(e, t, n) { var r, i, o, a, s = e & m.F,
                    c = e & m.G,
                    u = e & m.S,
                    l = e & m.P,
                    d = e & m.B,
                    f = c ? Me : u ? Me[t] || (Me[t] = {}) : (Me[t] || {})[v],
                    h = c ? je : je[t] || (je[t] = {}),
                    p = h[v] || (h[v] = {}); for (r in c && (n = t), n) o = ((i = !s && f && void 0 !== f[r]) ? f : n)[r], a = d && i ? _e(o, Me) : l && "function" == typeof o ? _e(Function.call, o) : o, f && qe(f, r, o, e & m.U), h[r] != o && Fe(h, r, a), l && p[r] != o && (p[r] = o) };
        Me.core = je, m.F = 1, m.G = 2, m.S = 4, m.P = 8, m.B = 16, m.W = 32, m.U = 64, m.R = 128;

        function g(e, t, n, r) { if (!(e instanceof t) || void 0 !== r && r in e) throw TypeError(n + ": incorrect invocation!"); return e }

        function p(t, e, n, r) { try { return r ? e(Te(n)[0], n[1]) : e(n) } catch (e) { var i = t.return; throw void 0 !== i && Te(i.call(t)), e } }

        function y(e) { return void 0 !== e && (P.Array === e || T[L] === e) }

        function Be(e) { return isNaN(e = +e) ? 0 : (0 < e ? C : I)(e) }

        function Ue(e) { return 0 < e ? x(Be(e), 9007199254740991) : 0 }

        function w(e, t) { var n, r = Te(e).constructor; return void 0 === r || null == (n = Te(r)[j]) ? t : Se(n) }

        function b() { var e = +this; if (W.hasOwnProperty(e)) { var t = W[e];
                delete W[e], t() } }

        function E(e) { b.call(e.data) } var k, S, _, We = m,
            P = {},
            L = He("iterator"),
            T = Array.prototype,
            I = Math.ceil,
            C = Math.floor,
            x = Math.min,
            A = He("iterator"),
            O = je.getIteratorMethod = function(e) { if (null != e) return e[A] || e["@@iterator"] || P[t(e)] },
            M = e(function(e) { var f = {},
                    h = {},
                    t = e.exports = function(e, t, n, r, i) { var o, a, s, c, u = i ? function() { return e } : O(e),
                            l = _e(n, r, t ? 2 : 1),
                            d = 0; if ("function" != typeof u) throw TypeError(e + " is not iterable!"); if (y(u)) { for (o = Ue(e.length); d < o; d++)
                                if ((c = t ? l(Te(a = e[d])[0], a[1]) : l(e[d])) === f || c === h) return c } else
                            for (s = u.call(e); !(a = s.next()).done;)
                                if ((c = p(s, l, a.value, t)) === f || c === h) return c };
                t.BREAK = f, t.RETURN = h }),
            j = He("species"),
            H = Me.document,
            N = H && H.documentElement,
            R = Me.process,
            D = Me.setImmediate,
            F = Me.clearImmediate,
            q = Me.MessageChannel,
            B = Me.Dispatch,
            U = 0,
            W = {},
            z = "onreadystatechange";
        D && F || (D = function(e) { for (var t = [], n = 1; arguments.length > n;) t.push(arguments[n++]); return W[++U] = function() {! function(e, t, n) { var r = void 0 === n; switch (t.length) {
                        case 0:
                            return r ? e() : e.call(n);
                        case 1:
                            return r ? e(t[0]) : e.call(n, t[0]);
                        case 2:
                            return r ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
                        case 3:
                            return r ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
                        case 4:
                            return r ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3]) } e.apply(n, t) }("function" == typeof e ? e : Function(e), t) }, k(U), U }, F = function(e) { delete W[e] }, "process" == i(R) ? k = function(e) { R.nextTick(_e(b, e, 1)) } : B && B.now ? k = function(e) { B.now(_e(b, e, 1)) } : q ? (_ = (S = new q).port2, S.port1.onmessage = E, k = _e(_.postMessage, _, 1)) : Me.addEventListener && "function" == typeof postMessage && !Me.importScripts ? (k = function(e) { Me.postMessage(e + "", "*") }, Me.addEventListener("message", E, !1)) : k = z in Ce("script") ? function(e) { N.appendChild(Ce("script"))[z] = function() { N.removeChild(this), b.call(e) } } : function(e) { setTimeout(_e(b, e, 1), 0) }); var V = { set: D, clear: F },
            $ = V.set,
            G = Me.MutationObserver || Me.WebKitMutationObserver,
            J = Me.process,
            X = Me.Promise,
            Q = "process" == i(J);

        function Y(e) { var n, r;
            this.promise = new e(function(e, t) { if (void 0 !== n || void 0 !== r) throw TypeError("Bad Promise constructor");
                n = e, r = t }), this.resolve = Se(n), this.reject = Se(r) }

        function Z(e) { try { return { e: !1, v: e() } } catch (e) { return { e: !0, v: e } } }

        function K(e, t) { if (Te(e), Le(t) && t.constructor === e) return t; var n = re.f(e); return (0, n.resolve)(t), n.promise }

        function ee(e, t, n) { for (var r in t) qe(e, r, t[r], n); return e }

        function te(e, t, n) { e && !Oe(e = n ? e : e.prototype, se) && ae(e, se, { configurable: !0, value: t }) }

        function ne(e) { var t = Me[e];
            Ne && t && !t[ce] && De.f(t, ce, { configurable: !0, get: function() { return this } }) } var re = { f: function(e) { return new Y(e) } },
            ie = Me.navigator,
            oe = ie && ie.userAgent || "",
            ae = De.f,
            se = He("toStringTag"),
            ce = He("species"),
            ue = He("iterator"),
            le = !1; try {
            [7][ue]().return = function() { le = !0 } } catch (e) {}

        function de(e, t) { if (!t && !le) return !1; var n = !1; try { var r = [7],
                    i = r[ue]();
                i.next = function() { return { done: n = !0 } }, r[ue] = function() { return i }, e(r) } catch (e) {} return n }

        function fe() {}

        function he(e) { var t; return !(!Le(e) || "function" != typeof(t = e.then)) && t }

        function pe(l, n) { if (!l._n) { l._n = !0; var r = l._c;
                Ee(function() { for (var c = l._v, u = 1 == l._s, e = 0, t = function(e) { var t, n, r, i = u ? e.ok : e.fail,
                                o = e.resolve,
                                a = e.reject,
                                s = e.domain; try { i ? (u || (2 == l._h && et(l), l._h = 1), !0 === i ? t = c : (s && s.enter(), t = i(c), s && (s.exit(), r = !0)), t === e.promise ? a(ze("Promise-chain cycle")) : (n = he(t)) ? n.call(t, o, a) : o(t)) : a(c) } catch (e) { s && !r && s.exit(), a(e) } }; r.length > e;) t(r[e++]);
                    l._c = [], l._n = !1, n && !l._h && Ze(l) }) } }

        function ve(e) { var t = this;
            t._d || (t._d = !0, (t = t._w || t)._v = e, t._s = 2, t._a || (t._a = t._c.slice()), pe(t, !0)) } var me, ge, ye, we, be = V.set,
            Ee = function() {
                function e() { var e, t; for (Q && (e = J.domain) && e.exit(); n;) { t = n.fn, n = n.next; try { t() } catch (e) { throw n ? i() : r = void 0, e } } r = void 0, e && e.enter() } var n, r, i; if (Q) i = function() { J.nextTick(e) };
                else if (!G || Me.navigator && Me.navigator.standalone)
                    if (X && X.resolve) { var t = X.resolve(void 0);
                        i = function() { t.then(e) } } else i = function() { $.call(Me, e) };
                else { var o = !0,
                        a = document.createTextNode("");
                    new G(e).observe(a, { characterData: !0 }), i = function() { a.data = o = !o } } return function(e) { var t = { fn: e, next: void 0 };
                    r && (r.next = t), n || (n = t, i()), r = t } }(),
            ke = "Promise",
            ze = Me.TypeError,
            Ve = Me.process,
            $e = Ve && Ve.versions,
            Ge = $e && $e.v8 || "",
            Je = Me[ke],
            Xe = "process" == t(Ve),
            Qe = ge = re.f,
            Ye = !! function() { try { var e = Je.resolve(1),
                        t = (e.constructor = {})[He("species")] = function(e) { e(fe, fe) }; return (Xe || "function" == typeof PromiseRejectionEvent) && e.then(fe) instanceof t && 0 !== Ge.indexOf("6.6") && -1 === oe.indexOf("Chrome/66") } catch (e) {} }(),
            Ze = function(o) { be.call(Me, function() { var e, t, n, r = o._v,
                        i = Ke(o); if (i && (e = Z(function() { Xe ? Ve.emit("unhandledRejection", r, o) : (t = Me.onunhandledrejection) ? t({ promise: o, reason: r }) : (n = Me.console) && n.error && n.error("Unhandled promise rejection", r) }), o._h = Xe || Ke(o) ? 2 : 1), o._a = void 0, i && e.e) throw e.v }) },
            Ke = function(e) { return 1 !== e._h && 0 === (e._a || e._c).length },
            et = function(t) { be.call(Me, function() { var e;
                    Xe ? Ve.emit("rejectionHandled", t) : (e = Me.onrejectionhandled) && e({ promise: t, reason: t._v }) }) },
            tt = function(e) { var n, r = this; if (!r._d) { r._d = !0, r = r._w || r; try { if (r === e) throw ze("Promise can't be resolved itself");
                        (n = he(e)) ? Ee(function() { var t = { _w: r, _d: !1 }; try { n.call(e, _e(tt, t, 1), _e(ve, t, 1)) } catch (e) { ve.call(t, e) } }): (r._v = e, r._s = 1, pe(r, !1)) } catch (e) { ve.call({ _w: r, _d: !1 }, e) } } };
        Ye || (Je = function(e) { g(this, Je, ke, "_h"), Se(e), me.call(this); try { e(_e(tt, this, 1), _e(ve, this, 1)) } catch (e) { ve.call(this, e) } }, (me = function(e) { this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1 }).prototype = ee(Je.prototype, { then: function(e, t) { var n = Qe(w(this, Je)); return n.ok = "function" != typeof e || e, n.fail = "function" == typeof t && t, n.domain = Xe ? Ve.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && pe(this, !1), n.promise }, catch: function(e) { return this.then(void 0, e) } }), ye = function() { var e = new me;
            this.promise = e, this.resolve = _e(tt, e, 1), this.reject = _e(ve, e, 1) }, re.f = Qe = function(e) { return e === Je || e === we ? new ye(e) : ge(e) }), We(We.G + We.W + We.F * !Ye, { Promise: Je }), te(Je, ke), ne(ke), we = je[ke], We(We.S + We.F * !Ye, ke, { reject: function(e) { var t = Qe(this); return (0, t.reject)(e), t.promise } }), We(We.S + We.F * !Ye, ke, { resolve: function(e) { return K(this, e) } }), We(We.S + We.F * !(Ye && de(function(e) { Je.all(e).catch(fe) })), ke, { all: function(e) { var a = this,
                    t = Qe(a),
                    s = t.resolve,
                    c = t.reject,
                    n = Z(function() { var r = [],
                            i = 0,
                            o = 1;
                        M(e, !1, function(e) { var t = i++,
                                n = !1;
                            r.push(void 0), o++, a.resolve(e).then(function(e) { n || (n = !0, r[t] = e, --o || s(r)) }, c) }), --o || s(r) }); return n.e && c(n.v), t.promise }, race: function(e) { var t = this,
                    n = Qe(t),
                    r = n.reject,
                    i = Z(function() { M(e, !1, function(e) { t.resolve(e).then(n.resolve, r) }) }); return i.e && r(i.v), n.promise } });

        function nt(e) { if (null == e) throw TypeError("Can't call method on  " + e); return e }

        function rt(e) { return wt(nt(e)) }

        function it(e) { return kt[e] || (kt[e] = Pe(e)) }

        function ot(e, t) { var n, r = rt(e),
                i = 0,
                o = []; for (n in r) n != _t && Oe(r, n) && o.push(n); for (; t.length > i;) Oe(r, n = t[i++]) && (~St(o, n) || o.push(n)); return o }

        function at() {}

        function st(e) { var t = tn[e] = jt(Gt[Qt]); return t._k = e, t }

        function ct(e, t) { Te(e); for (var n, r = function(e) { var t = Lt(e),
                        n = Tt.f; if (n)
                        for (var r, i = n(e), o = It.f, a = 0; i.length > a;) o.call(e, r = i[a++]) && t.push(r); return t }(t = rt(t)), i = 0, o = r.length; i < o;) ln(e, n = r[i++], t[n]); return e }

        function ut(e) { var t = Kt.call(this, e = xe(e, !0)); return !(this === rn && Oe(tn, e) && !Oe(nn, e)) && (!(t || !Oe(this, e) || !Oe(tn, e) || Oe(this, Yt) && this[Yt][e]) || t) }

        function lt(e, t) { if (e = rt(e), t = xe(t, !0), e !== rn || !Oe(tn, t) || Oe(nn, t)) { var n = zt(e, t); return !n || !Oe(tn, t) || Oe(e, Yt) && e[Yt][t] || (n.enumerable = !0), n } }

        function dt(e) { for (var t, n = $t(rt(e)), r = [], i = 0; n.length > i;) Oe(tn, t = n[i++]) || t == Yt || t == Wt || r.push(t); return r }

        function ft(e) { for (var t, n = e === rn, r = $t(n ? nn : rt(e)), i = [], o = 0; r.length > o;) !Oe(tn, t = r[o++]) || n && !Oe(rn, t) || i.push(tn[t]); return i } var ht, pt, vt, mt = e(function(e) {
                function n(e) { t(e, r, { value: { i: "O" + ++i, w: {} } }) } var r = Pe("meta"),
                    t = De.f,
                    i = 0,
                    o = Object.isExtensible || function() { return !0 },
                    a = !Ie(function() { return o(Object.preventExtensions({})) }),
                    s = e.exports = { KEY: r, NEED: !1, fastKey: function(e, t) { if (!Le(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e; if (!Oe(e, r)) { if (!o(e)) return "F"; if (!t) return "E";
                                n(e) } return e[r].i }, getWeak: function(e, t) { if (!Oe(e, r)) { if (!o(e)) return !0; if (!t) return !1;
                                n(e) } return e[r].w }, onFreeze: function(e) { return a && s.NEED && o(e) && !Oe(e, r) && n(e), e } } }),
            gt = (mt.KEY, mt.NEED, mt.fastKey, mt.getWeak, mt.onFreeze, { f: He }),
            yt = De.f,
            wt = Object("z").propertyIsEnumerable(0) ? Object : function(e) { return "String" == i(e) ? e.split("") : Object(e) },
            bt = Math.max,
            Et = Math.min,
            kt = o("keys"),
            St = (ht = !1, function(e, t, n) { var r, i = rt(e),
                    o = Ue(i.length),
                    a = function(e, t) { return (e = Be(e)) < 0 ? bt(e + t, 0) : Et(e, t) }(n, o); if (ht && t != t) { for (; a < o;)
                        if ((r = i[a++]) != r) return !0 } else
                    for (; a < o; a++)
                        if ((ht || a in i) && i[a] === t) return ht || a || 0; return !ht && -1 }),
            _t = it("IE_PROTO"),
            Pt = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),
            Lt = Object.keys || function(e) { return ot(e, Pt) },
            Tt = { f: Object.getOwnPropertySymbols },
            It = { f: {}.propertyIsEnumerable },
            Ct = Array.isArray || function(e) { return "Array" == i(e) },
            xt = Ne ? Object.defineProperties : function(e, t) { Te(e); for (var n, r = Lt(t), i = r.length, o = 0; o < i;) De.f(e, n = r[o++], t[n]); return e },
            At = it("IE_PROTO"),
            Ot = "prototype",
            Mt = function() { var e, t = Ce("iframe"),
                    n = Pt.length; for (t.style.display = "none", N.appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), Mt = e.F; n--;) delete Mt[Ot][Pt[n]]; return Mt() },
            jt = Object.create || function(e, t) { var n; return null !== e ? (at[Ot] = Te(e), n = new at, at[Ot] = null, n[At] = e) : n = Mt(), void 0 === t ? n : xt(n, t) },
            Ht = Pt.concat("length", "prototype"),
            Nt = { f: Object.getOwnPropertyNames || function(e) { return ot(e, Ht) } },
            Rt = Nt.f,
            Dt = {}.toString,
            Ft = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
            qt = { f: function(e) { return Ft && "[object Window]" == Dt.call(e) ? function(e) { try { return Rt(e) } catch (e) { return Ft.slice() } }(e) : Rt(rt(e)) } },
            Bt = Object.getOwnPropertyDescriptor,
            Ut = { f: Ne ? Bt : function(e, t) { if (e = rt(e), t = xe(t, !0), Re) try { return Bt(e, t) } catch (e) {}
                    if (Oe(e, t)) return Ae(!It.f.call(e, t), e[t]) } },
            Wt = mt.KEY,
            zt = Ut.f,
            Vt = De.f,
            $t = qt.f,
            Gt = Me.Symbol,
            Jt = Me.JSON,
            Xt = Jt && Jt.stringify,
            Qt = "prototype",
            Yt = He("_hidden"),
            Zt = He("toPrimitive"),
            Kt = {}.propertyIsEnumerable,
            en = o("symbol-registry"),
            tn = o("symbols"),
            nn = o("op-symbols"),
            rn = Object[Qt],
            on = "function" == typeof Gt,
            an = Me.QObject,
            sn = !an || !an[Qt] || !an[Qt].findChild,
            cn = Ne && Ie(function() { return 7 != jt(Vt({}, "a", { get: function() { return Vt(this, "a", { value: 7 }).a } })).a }) ? function(e, t, n) { var r = zt(rn, t);
                r && delete rn[t], Vt(e, t, n), r && e !== rn && Vt(rn, t, r) } : Vt,
            un = on && "symbol" == typeof Gt.iterator ? function(e) { return "symbol" == typeof e } : function(e) { return e instanceof Gt },
            ln = function(e, t, n) { return e === rn && ln(nn, t, n), Te(e), t = xe(t, !0), Te(n), Oe(tn, t) ? (n.enumerable ? (Oe(e, Yt) && e[Yt][t] && (e[Yt][t] = !1), n = jt(n, { enumerable: Ae(0, !1) })) : (Oe(e, Yt) || Vt(e, Yt, Ae(1, {})), e[Yt][t] = !0), cn(e, t, n)) : Vt(e, t, n) };
        on || (qe((Gt = function() { if (this instanceof Gt) throw TypeError("Symbol is not a constructor!"); var t = Pe(0 < arguments.length ? arguments[0] : void 0),
                n = function(e) { this === rn && n.call(nn, e), Oe(this, Yt) && Oe(this[Yt], t) && (this[Yt][t] = !1), cn(this, t, Ae(1, e)) }; return Ne && sn && cn(rn, t, { configurable: !0, set: n }), st(t) })[Qt], "toString", function() { return this._k }), Ut.f = lt, De.f = ln, Nt.f = qt.f = dt, It.f = ut, Tt.f = ft, Ne && qe(rn, "propertyIsEnumerable", ut, !0), gt.f = function(e) { return st(He(e)) }), We(We.G + We.W + We.F * !on, { Symbol: Gt }); for (var dn = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), fn = 0; dn.length > fn;) He(dn[fn++]); for (var hn = Lt(He.store), pn = 0; hn.length > pn;) pt = hn[pn++], void 0, vt = je.Symbol || (je.Symbol = Me.Symbol || {}), "_" == pt.charAt(0) || pt in vt || yt(vt, pt, { value: gt.f(pt) });
        We(We.S + We.F * !on, "Symbol", { for: function(e) { return Oe(en, e += "") ? en[e] : en[e] = Gt(e) }, keyFor: function(e) { if (!un(e)) throw TypeError(e + " is not a symbol!"); for (var t in en)
                    if (en[t] === e) return t }, useSetter: function() { sn = !0 }, useSimple: function() { sn = !1 } }), We(We.S + We.F * !on, "Object", { create: function(e, t) { return void 0 === t ? jt(e) : ct(jt(e), t) }, defineProperty: ln, defineProperties: ct, getOwnPropertyDescriptor: lt, getOwnPropertyNames: dt, getOwnPropertySymbols: ft }), Jt && We(We.S + We.F * (!on || Ie(function() { var e = Gt(); return "[null]" != Xt([e]) || "{}" != Xt({ a: e }) || "{}" != Xt(Object(e)) })), "JSON", { stringify: function(e) { for (var t, n, r = [e], i = 1; arguments.length > i;) r.push(arguments[i++]); if (n = t = r[1], (Le(t) || void 0 !== e) && !un(e)) return Ct(t) || (t = function(e, t) { if ("function" == typeof n && (t = n.call(this, e, t)), !un(t)) return t }), r[1] = t, Xt.apply(Jt, r) } }), Gt[Qt][Zt] || Fe(Gt[Qt], Zt, Gt[Qt].valueOf), te(Gt, "Symbol"), te(Math, "Math", !0), te(Me.JSON, "JSON", !0);

        function vn(e) { return Object(nt(e)) } var mn = Object.assign,
            gn = !mn || Ie(function() { var e = {},
                    t = {},
                    n = Symbol(),
                    r = "abcdefghijklmnopqrst"; return e[n] = 7, r.split("").forEach(function(e) { t[e] = e }), 7 != mn({}, e)[n] || Object.keys(mn({}, t)).join("") != r }) ? function(e, t) { for (var n = vn(e), r = arguments.length, i = 1, o = Tt.f, a = It.f; i < r;)
                    for (var s, c = wt(arguments[i++]), u = o ? Lt(c).concat(o(c)) : Lt(c), l = u.length, d = 0; d < l;) a.call(c, s = u[d++]) && (n[s] = c[s]); return n } : mn;
        We(We.S + We.F, "Object", { assign: gn }),
            function(i, e) { var c = i.document,
                    u = i.Object,
                    r = function(e) {
                        function n(e, t) {
                            (t = t.toLowerCase()) in s || (s[e] = (s[e] || []).concat(t), s[t] = s[t.toUpperCase()] = e) } var t, r, i, o, a = /^[A-Z]+[a-z]/,
                            s = (u.create || u)(null),
                            c = {}; for (r in e)
                            for (o in e[r])
                                for (i = e[r][o], s[o] = i, t = 0; t < i.length; t++) s[i[t].toLowerCase()] = s[i[t].toUpperCase()] = o; return c.get = function(e) { return "string" == typeof e ? s[e] || (a.test(e) ? [] : "") : function(e) { var t, n = []; for (t in s) e.test(t) && n.push(t); return n }(e) }, c.set = function(e, t) { return a.test(e) ? n(e, t) : n(t, e), c }, c }({ collections: { HTMLAllCollection: ["all"], HTMLCollection: ["forms"], HTMLFormControlsCollection: ["elements"], HTMLOptionsCollection: ["options"] }, elements: { Element: ["element"], HTMLAnchorElement: ["a"], HTMLAppletElement: ["applet"], HTMLAreaElement: ["area"], HTMLAttachmentElement: ["attachment"], HTMLAudioElement: ["audio"], HTMLBRElement: ["br"], HTMLBaseElement: ["base"], HTMLBodyElement: ["body"], HTMLButtonElement: ["button"], HTMLCanvasElement: ["canvas"], HTMLContentElement: ["content"], HTMLDListElement: ["dl"], HTMLDataElement: ["data"], HTMLDataListElement: ["datalist"], HTMLDetailsElement: ["details"], HTMLDialogElement: ["dialog"], HTMLDirectoryElement: ["dir"], HTMLDivElement: ["div"], HTMLDocument: ["document"], HTMLElement: ["element", "abbr", "address", "article", "aside", "b", "bdi", "bdo", "cite", "code", "command", "dd", "dfn", "dt", "em", "figcaption", "figure", "footer", "header", "i", "kbd", "mark", "nav", "noscript", "rp", "rt", "ruby", "s", "samp", "section", "small", "strong", "sub", "summary", "sup", "u", "var", "wbr"], HTMLEmbedElement: ["embed"], HTMLFieldSetElement: ["fieldset"], HTMLFontElement: ["font"], HTMLFormElement: ["form"], HTMLFrameElement: ["frame"], HTMLFrameSetElement: ["frameset"], HTMLHRElement: ["hr"], HTMLHeadElement: ["head"], HTMLHeadingElement: ["h1", "h2", "h3", "h4", "h5", "h6"], HTMLHtmlElement: ["html"], HTMLIFrameElement: ["iframe"], HTMLImageElement: ["img"], HTMLInputElement: ["input"], HTMLKeygenElement: ["keygen"], HTMLLIElement: ["li"], HTMLLabelElement: ["label"], HTMLLegendElement: ["legend"], HTMLLinkElement: ["link"], HTMLMapElement: ["map"], HTMLMarqueeElement: ["marquee"], HTMLMediaElement: ["media"], HTMLMenuElement: ["menu"], HTMLMenuItemElement: ["menuitem"], HTMLMetaElement: ["meta"], HTMLMeterElement: ["meter"], HTMLModElement: ["del", "ins"], HTMLOListElement: ["ol"], HTMLObjectElement: ["object"], HTMLOptGroupElement: ["optgroup"], HTMLOptionElement: ["option"], HTMLOutputElement: ["output"], HTMLParagraphElement: ["p"], HTMLParamElement: ["param"], HTMLPictureElement: ["picture"], HTMLPreElement: ["pre"], HTMLProgressElement: ["progress"], HTMLQuoteElement: ["blockquote", "q", "quote"], HTMLScriptElement: ["script"], HTMLSelectElement: ["select"], HTMLShadowElement: ["shadow"], HTMLSlotElement: ["slot"], HTMLSourceElement: ["source"], HTMLSpanElement: ["span"], HTMLStyleElement: ["style"], HTMLTableCaptionElement: ["caption"], HTMLTableCellElement: ["td", "th"], HTMLTableColElement: ["col", "colgroup"], HTMLTableElement: ["table"], HTMLTableRowElement: ["tr"], HTMLTableSectionElement: ["thead", "tbody", "tfoot"], HTMLTemplateElement: ["template"], HTMLTextAreaElement: ["textarea"], HTMLTimeElement: ["time"], HTMLTitleElement: ["title"], HTMLTrackElement: ["track"], HTMLUListElement: ["ul"], HTMLUnknownElement: ["unknown", "vhgroupv", "vkeygen"], HTMLVideoElement: ["video"] }, nodes: { Attr: ["node"], Audio: ["audio"], CDATASection: ["node"], CharacterData: ["node"], Comment: ["#comment"], Document: ["#document"], DocumentFragment: ["#document-fragment"], DocumentType: ["node"], HTMLDocument: ["#document"], Image: ["img"], Option: ["option"], ProcessingInstruction: ["node"], ShadowRoot: ["#shadow-root"], Text: ["#text"], XMLDocument: ["xml"] } }); "object" != typeof e && (e = { type: e || "auto" }); var l, n, o, a, d, f, s, h, p, v = "registerElement",
                    m = "__" + v + (1e5 * i.Math.random() >> 0),
                    g = "addEventListener",
                    y = "attached",
                    w = "Callback",
                    b = "detached",
                    E = "extends",
                    k = "attributeChanged" + w,
                    S = y + w,
                    _ = "connected" + w,
                    P = "disconnected" + w,
                    L = "created" + w,
                    T = b + w,
                    I = "ADDITION",
                    C = "MODIFICATION",
                    x = "REMOVAL",
                    A = "DOMAttrModified",
                    O = "DOMContentLoaded",
                    M = "<",
                    j = "=",
                    H = /^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/,
                    N = ["ANNOTATION-XML", "COLOR-PROFILE", "FONT-FACE", "FONT-FACE-SRC", "FONT-FACE-URI", "FONT-FACE-FORMAT", "FONT-FACE-NAME", "MISSING-GLYPH"],
                    R = [],
                    D = [],
                    F = "",
                    q = c.documentElement,
                    B = R.indexOf || function(e) { for (var t = this.length; t-- && this[t] !== e;); return t },
                    U = u.prototype,
                    W = U.hasOwnProperty,
                    z = U.isPrototypeOf,
                    V = u.defineProperty,
                    $ = [],
                    G = u.getOwnPropertyDescriptor,
                    J = u.getOwnPropertyNames,
                    X = u.getPrototypeOf,
                    t = u.setPrototypeOf,
                    Q = !!u.__proto__,
                    Y = "__dreCEv1",
                    Z = i.customElements,
                    K = !/^force/.test(e.type) && !!(Z && Z.define && Z.get && Z.whenDefined),
                    ee = u.create || u,
                    te = i.Map || function() { var n, r = [],
                            i = []; return { get: function(e) { return i[B.call(r, e)] }, set: function(e, t) {
                                (n = B.call(r, e)) < 0 ? i[r.push(e) - 1] = t : i[n] = t } } },
                    ne = i.Promise || function(e) { var t = [],
                            n = !1,
                            r = { catch: function() { return r }, then: function(e) { return t.push(e), n && setTimeout(i, 1), r } };

                        function i(e) { for (n = !0; t.length;) t.shift()(e) } return e(i), r },
                    re = !1,
                    ie = ee(null),
                    oe = ee(null),
                    ae = new te,
                    se = function(e) { return e.toLowerCase() },
                    ce = u.create || function e(t) { return t ? (e.prototype = t, new e) : this },
                    ue = t || (Q ? function(e, t) { return e.__proto__ = t, e } : J && G ? function() {
                        function n(e, t) { for (var n, r = J(t), i = 0, o = r.length; i < o; i++) n = r[i], W.call(e, n) || V(e, n, G(t, n)) } return function(e, t) { for (; n(e, t), (t = X(t)) && !z.call(t, e);); return e } }() : function(e, t) { for (var n in t) e[n] = t[n]; return e }),
                    le = i.MutationObserver || i.WebKitMutationObserver,
                    de = i.HTMLAnchorElement,
                    fe = (i.HTMLElement || i.Element || i.Node).prototype,
                    he = !z.call(fe, q),
                    pe = he ? function(e, t, n) { return e[t] = n.value, e } : V,
                    ve = he ? function(e) { return 1 === e.nodeType } : function(e) { return z.call(fe, e) },
                    me = he && [],
                    ge = fe.attachShadow,
                    ye = fe.cloneNode,
                    we = fe.dispatchEvent,
                    be = fe.getAttribute,
                    Ee = fe.hasAttribute,
                    ke = fe.removeAttribute,
                    Se = fe.setAttribute,
                    _e = c.createElement,
                    Pe = c.importNode,
                    Le = _e,
                    Te = le && { attributes: !0, characterData: !0, attributeOldValue: !0 },
                    Ie = le || function(e) { Me = !1, q.removeEventListener(A, Ie) },
                    Ce = 0,
                    xe = v in c && !/^force-all/.test(e.type),
                    Ae = !0,
                    Oe = !1,
                    Me = !0,
                    je = !0,
                    He = !0;

                function Ne() { var e = l.splice(0, l.length); for (Ce = 0; e.length;) e.shift().call(null, e.shift()) }

                function Re(e, t) { for (var n = 0, r = e.length; n < r; n++) Je(e[n], t) }

                function De(t) { return function(e) { ve(e) && (Je(e, t), F.length && Re(e.querySelectorAll(F), t)) } }

                function Fe(e) { var t = be.call(e, "is"),
                        n = e.nodeName.toUpperCase(),
                        r = B.call(R, t ? j + t.toUpperCase() : M + n); return t && -1 < r && !qe(n, t) ? -1 : r }

                function qe(e, t) { return -1 < F.indexOf(e + '[is="' + t + '"]') }

                function Be(e) { var t = e.currentTarget,
                        n = e.attrChange,
                        r = e.attrName,
                        i = e.target,
                        o = e[I] || 2,
                        a = e[x] || 3;!He || i && i !== t || !t[k] || "style" === r || e.prevValue === e.newValue && ("" !== e.newValue || n !== o && n !== a) || t[k](r, n === o ? null : e.prevValue, n === a ? null : e.newValue) }

                function Ue(e) { var t = De(e); return function(e) { l.push(t, e.target), Ce && clearTimeout(Ce), Ce = setTimeout(Ne, 1) } }

                function We(e) { je && (je = !1, e.currentTarget.removeEventListener(O, We)), F.length && Re((e.target || c).querySelectorAll(F), e.detail === b ? b : y), he && function() { for (var e, t = 0, n = me.length; t < n; t++) e = me[t], q.contains(e) || (n--, me.splice(t--, 1), Je(e, b)) }() }

                function ze(e, t) { Se.call(this, e, t), n.call(this, { target: this }) }

                function Ve(e, t, n) { var r = t.apply(e, n),
                        i = Fe(r); return -1 < i && h(r, D[i]), n.pop() && F.length && function(e) { for (var t, n = 0, r = e.length; n < r; n++) t = e[n], h(t, D[Fe(t)]) }(r.querySelectorAll(F)), r }

                function $e(e, t) { ue(e, t), d ? d.observe(e, Te) : (Me && (e.setAttribute = ze, e[m] = a(e), e[g]("DOMSubtreeModified", n)), e[g](A, Be)), e[L] && He && (e.created = !0, e[L](), e.created = !1) }

                function Ge(e) { throw new Error("A " + e + " type is already registered") }

                function Je(e, t) { var n, r, i = Fe(e); - 1 < i && (s(e, D[i]), i = 0, t !== y || e[y] ? t !== b || e[b] || (e[y] = !1, e[b] = !0, r = "disconnected", i = 1) : (e[b] = !1, e[y] = !0, r = "connected", i = 1, he && B.call(me, e) < 0 && me.push(e)), i && (n = e[t + w] || e[r + w]) && n.call(e)) }

                function Xe() {}

                function Qe(e, t, n) { var r = n && n[E] || "",
                        i = t.prototype,
                        o = ce(i),
                        a = t.observedAttributes || $,
                        s = { prototype: o };
                    pe(o, L, { value: function() { if (re) re = !1;
                            else if (!this[Y]) { this[Y] = !0, new t(this), i[L] && i[L].call(this); var e = ie[ae.get(t)];
                                (!K || 1 < e.create.length) && Ke(this) } } }), pe(o, k, { value: function(e) {-1 < B.call(a, e) && i[k] && i[k].apply(this, arguments) } }), i[_] && pe(o, S, { value: i[_] }), i[P] && pe(o, T, { value: i[P] }), r && (s[E] = r), e = e.toUpperCase(), ie[e] = { constructor: t, create: r ? [r, se(e)] : [e] }, ae.set(t, e), c[v](e.toLowerCase(), s), et(e), oe[e].r() }

                function Ye(e) { var t = ie[e.toUpperCase()]; return t && t.constructor }

                function Ze(e) { return "string" == typeof e ? e : e && e.is || "" }

                function Ke(e) { for (var t, n = e[k], r = n ? e.attributes : $, i = r.length; i--;) t = r[i], n.call(e, t.name || t.nodeName, null, t.value || t.nodeValue) }

                function et(t) { return (t = t.toUpperCase()) in oe || (oe[t] = {}, oe[t].p = new ne(function(e) { oe[t].r = e })), oe[t].p }

                function tt() { Z && delete i.customElements, V(i, "customElements", { configurable: !0, value: new Xe }), V(i, "CustomElementRegistry", { configurable: !0, value: Xe }); for (var e = function(t) { var r = i[t]; if (r) { i[t] = function(e) { var t, n; return e || (e = this), e[Y] || (re = !0, t = ie[ae.get(e.constructor)], (e = (n = K && 1 === t.create.length) ? Reflect.construct(r, $, t.constructor) : c.createElement.apply(c, t.create))[Y] = !0, re = !1, n || Ke(e)), e }, i[t].prototype = r.prototype; try { r.prototype.constructor = i[t] } catch (e) { V(r, Y, { value: i[t] }) } } }, t = r.get(/^HTML[A-Z]*[a-z]/), n = t.length; n--; e(t[n]));
                    c.createElement = function(e, t) { var n = Ze(t); return n ? Le.call(this, e, se(n)) : Le.call(this, e) }, xe || (Oe = !0, c[v]("")) } if (le && ((p = c.createElement("div")).innerHTML = "<div><div></div></div>", new le(function(e, t) { if (e[0] && "childList" == e[0].type && !e[0].removedNodes[0].childNodes.length) { var n = (p = G(fe, "innerHTML")) && p.set;
                            n && V(fe, "innerHTML", { set: function(e) { for (; this.lastChild;) this.removeChild(this.lastChild);
                                    n.call(this, e) } }) } t.disconnect(), p = null }).observe(p, { childList: !0, subtree: !0 }), p.innerHTML = ""), xe || (h = t || Q ? (s = function(e, t) { z.call(t, e) || $e(e, t) }, $e) : s = function(e, t) { e[m] || (e[m] = u(!0), $e(e, t)) }, he ? (Me = !1, function() {
                        function r(e) { var t = new CustomEvent(A, { bubbles: !0 });
                            t.attrName = e, t.prevValue = be.call(this, e), t.newValue = null, t[x] = t.attrChange = 2, ke.call(this, e), we.call(this, t) }

                        function i(e, t) { var n = Ee.call(this, e),
                                r = n && be.call(this, e),
                                i = new CustomEvent(A, { bubbles: !0 });
                            Se.call(this, e, t), i.attrName = e, i.prevValue = n ? r : null, i.newValue = t, n ? i[C] = i.attrChange = 1 : i[I] = i.attrChange = 0, we.call(this, i) }

                        function o(e) { var t, n = e.currentTarget,
                                r = n[m],
                                i = e.propertyName;
                            r.hasOwnProperty(i) && (r = r[i], (t = new CustomEvent(A, { bubbles: !0 })).attrName = r.name, t.prevValue = r.value || null, t.newValue = r.value = n[i] || null, null == t.prevValue ? t[I] = t.attrChange = 0 : t[C] = t.attrChange = 1, we.call(n, t)) } var e = G(fe, g),
                            a = e.value;
                        e.value = function(e, t, n) { e === A && this[k] && this.setAttribute !== i && (this[m] = { className: { name: "class", value: this.className } }, this.setAttribute = i, this.removeAttribute = r, a.call(this, "propertychange", o)), a.call(this, e, t, n) }, V(fe, g, e) }()) : le || (q[g](A, Ie), q.setAttribute(m, 1), q.removeAttribute(m), Me && (n = function(e) { var t, n, r, i = this; if (i === e.target) { for (r in t = i[m], i[m] = n = a(i), n) { if (!(r in t)) return o(0, i, r, t[r], n[r], I); if (n[r] !== t[r]) return o(1, i, r, t[r], n[r], C) } for (r in t)
                                if (!(r in n)) return o(2, i, r, t[r], n[r], x) } }, o = function(e, t, n, r, i, o) { var a = { attrChange: e, currentTarget: t, attrName: n, prevValue: r, newValue: i };
                        a[o] = e, Be(a) }, a = function(e) { for (var t, n, r = {}, i = e.attributes, o = 0, a = i.length; o < a; o++) "setAttribute" !== (n = (t = i[o]).name) && (r[n] = t.value); return r })), c[v] = function(e, t) { if (r = e.toUpperCase(), Ae && (Ae = !1, le ? (d = function(a, s) {
                                function c(e, t) { for (var n = 0, r = e.length; n < r; t(e[n++])); } return new le(function(e) { for (var t, n, r, i = 0, o = e.length; i < o; i++) "childList" === (t = e[i]).type ? (c(t.addedNodes, a), c(t.removedNodes, s)) : (n = t.target, He && n[k] && "style" !== t.attributeName && (r = be.call(n, t.attributeName)) !== t.oldValue && n[k](t.attributeName, t.oldValue, r)) }) }(De(y), De(b)), (f = function(e) { return d.observe(e, { childList: !0, subtree: !0 }), e })(c), ge && (fe.attachShadow = function() { return f(ge.apply(this, arguments)) })) : (l = [], c[g]("DOMNodeInserted", Ue(y)), c[g]("DOMNodeRemoved", Ue(b))), c[g](O, We), c[g]("readystatechange", We), c.importNode = function(e, t) { switch (e.nodeType) {
                                    case 1:
                                        return Ve(c, Pe, [e, !!t]);
                                    case 11:
                                        for (var n = c.createDocumentFragment(), r = e.childNodes, i = r.length, o = 0; o < i; o++) n.appendChild(c.importNode(r[o], !!t)); return n;
                                    default:
                                        return ye.call(e, !!t) } }, fe.cloneNode = function(e) { return Ve(this, ye, [!!e]) }), Oe) return Oe = !1; if (-2 < B.call(R, j + r) + B.call(R, M + r) && Ge(e), !H.test(r) || -1 < B.call(N, r)) throw new Error("The type " + e + " is invalid");

                        function n() { return a ? c.createElement(s, r) : c.createElement(s) } var r, i, o = t || U,
                            a = W.call(o, E),
                            s = a ? t[E].toUpperCase() : r; return a && -1 < B.call(R, M + s) && Ge(s), i = R.push((a ? j : M) + r) - 1, F = F.concat(F.length ? "," : "", a ? s + '[is="' + e.toLowerCase() + '"]' : s), n.prototype = D[i] = W.call(o, "prototype") ? o.prototype : ce(fe), F.length && Re(c.querySelectorAll(F), y), n }, c.createElement = Le = function(e, t) { var n = Ze(t),
                            r = n ? _e.call(c, e, se(n)) : _e.call(c, e),
                            i = "" + e,
                            o = B.call(R, (n ? j : M) + (n || i).toUpperCase()),
                            a = -1 < o; return n && (r.setAttribute("is", n = n.toLowerCase()), a && (a = qe(i.toUpperCase(), n))), He = !c.createElement.innerHTMLHelper, a && h(r, D[o]), r }), Xe.prototype = { constructor: Xe, define: K ? function(e, t, n) { if (n) Qe(e, t, n);
                            else { var r = e.toUpperCase();
                                ie[r] = { constructor: t, create: [r] }, ae.set(t, r), Z.define(e, t) } } : Qe, get: K ? function(e) { return Z.get(e) || Ye(e) } : Ye, whenDefined: K ? function(e) { return ne.race([Z.whenDefined(e), et(e)]) } : et }, !Z || /^force/.test(e.type)) tt();
                else if (!e.noBuiltIn) try {! function(e, t, n) { var r = new RegExp("^<a\\s+is=('|\")" + n + "\\1></a>$"); if (t[E] = "a", (e.prototype = ce(de.prototype)).constructor = e, i.customElements.define(n, e, t), !r.test(c.createElement("a", { is: n }).outerHTML) || !r.test((new e).outerHTML)) throw t }(function e() { return Reflect.construct(de, [], e) }, {}, "document-register-element-a") } catch (e) { tt() }
                if (!e.noBuiltIn) try { if (_e.call(c, "a", "a").outerHTML.indexOf("is") < 0) throw {} } catch (e) { se = function(e) { return { is: e.toLowerCase() } } } }(window); var yn = 5e3,
            wn = "callback";

        function bn(t) { try { delete window[t] } catch (e) { window[t] = void 0 } }

        function En(e) { var t = document.getElementById(e);
            t && document.getElementsByTagName("head")[0].removeChild(t) } window.fetchJsonp = function(o) { var a = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                s = o,
                c = a.timeout || yn,
                u = a.jsonpCallback || wn,
                l = void 0; return new Promise(function(t, e) { var n = a.jsonpCallbackFunction || "jsonp_" + Date.now() + "_" + Math.ceil(1e5 * Math.random()),
                    r = u + "_" + n;
                window[n] = function(e) { t({ ok: !0, json: function() { return Promise.resolve(e) } }), l && clearTimeout(l), En(r), bn(n) }, s += -1 === s.indexOf("?") ? "?" : "&"; var i = document.createElement("script");
                i.setAttribute("src", "" + s + u + "=" + n), a.charset && i.setAttribute("charset", a.charset), i.id = r, document.getElementsByTagName("head")[0].appendChild(i), l = setTimeout(function() { e(new Error("JSONP request to " + o + " timed out")), bn(n), En(r), window[n] = function() { bn(n) } }, c), i.onerror = function() { e(new Error("JSONP request to " + o + " failed")), bn(n), En(r), l && clearTimeout(l) } }) }; var kn = "URLSearchParams" in self,
            Sn = "Symbol" in self && "iterator" in Symbol,
            _n = "FileReader" in self && "Blob" in self && function() { try { return new Blob, !0 } catch (e) { return !1 } }(),
            Pn = "FormData" in self,
            Ln = "ArrayBuffer" in self; if (Ln) var Tn = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
            In = ArrayBuffer.isView || function(e) { return e && -1 < Tn.indexOf(Object.prototype.toString.call(e)) };

        function Cn(e) { if ("string" != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e)) throw new TypeError("Invalid character in header field name"); return e.toLowerCase() }

        function xn(e) { return "string" != typeof e && (e = String(e)), e }

        function An(t) { var e = { next: function() { var e = t.shift(); return { done: void 0 === e, value: e } } }; return Sn && (e[Symbol.iterator] = function() { return e }), e }

        function On(t) { this.map = {}, t instanceof On ? t.forEach(function(e, t) { this.append(t, e) }, this) : Array.isArray(t) ? t.forEach(function(e) { this.append(e[0], e[1]) }, this) : t && Object.getOwnPropertyNames(t).forEach(function(e) { this.append(e, t[e]) }, this) }

        function Mn(e) { if (e.bodyUsed) return Promise.reject(new TypeError("Already read"));
            e.bodyUsed = !0 }

        function jn(n) { return new Promise(function(e, t) { n.onload = function() { e(n.result) }, n.onerror = function() { t(n.error) } }) }

        function Hn(e) { var t = new FileReader,
                n = jn(t); return t.readAsArrayBuffer(e), n }

        function Nn(e) { if (e.slice) return e.slice(0); var t = new Uint8Array(e.byteLength); return t.set(new Uint8Array(e)), t.buffer }

        function Rn() { return this.bodyUsed = !1, this._initBody = function(e) {
                (this._bodyInit = e) ? "string" == typeof e ? this._bodyText = e : _n && Blob.prototype.isPrototypeOf(e) ? this._bodyBlob = e : Pn && FormData.prototype.isPrototypeOf(e) ? this._bodyFormData = e : kn && URLSearchParams.prototype.isPrototypeOf(e) ? this._bodyText = e.toString() : Ln && _n && function(e) { return e && DataView.prototype.isPrototypeOf(e) }(e) ? (this._bodyArrayBuffer = Nn(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : Ln && (ArrayBuffer.prototype.isPrototypeOf(e) || In(e)) ? this._bodyArrayBuffer = Nn(e) : this._bodyText = e = Object.prototype.toString.call(e): this._bodyText = "", this.headers.get("content-type") || ("string" == typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : kn && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8")) }, _n && (this.blob = function() { var e = Mn(this); if (e) return e; if (this._bodyBlob) return Promise.resolve(this._bodyBlob); if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer])); if (this._bodyFormData) throw new Error("could not read FormData body as blob"); return Promise.resolve(new Blob([this._bodyText])) }, this.arrayBuffer = function() { return this._bodyArrayBuffer ? Mn(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(Hn) }), this.text = function() { var e = Mn(this); if (e) return e; if (this._bodyBlob) return function(e) { var t = new FileReader,
                        n = jn(t); return t.readAsText(e), n }(this._bodyBlob); if (this._bodyArrayBuffer) return Promise.resolve(function(e) { for (var t = new Uint8Array(e), n = new Array(t.length), r = 0; r < t.length; r++) n[r] = String.fromCharCode(t[r]); return n.join("") }(this._bodyArrayBuffer)); if (this._bodyFormData) throw new Error("could not read FormData body as text"); return Promise.resolve(this._bodyText) }, Pn && (this.formData = function() { return this.text().then(qn) }), this.json = function() { return this.text().then(JSON.parse) }, this } On.prototype.append = function(e, t) { e = Cn(e), t = xn(t); var n = this.map[e];
            this.map[e] = n ? n + ", " + t : t }, On.prototype.delete = function(e) { delete this.map[Cn(e)] }, On.prototype.get = function(e) { return e = Cn(e), this.has(e) ? this.map[e] : null }, On.prototype.has = function(e) { return this.map.hasOwnProperty(Cn(e)) }, On.prototype.set = function(e, t) { this.map[Cn(e)] = xn(t) }, On.prototype.forEach = function(e, t) { for (var n in this.map) this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this) }, On.prototype.keys = function() { var n = []; return this.forEach(function(e, t) { n.push(t) }), An(n) }, On.prototype.values = function() { var t = []; return this.forEach(function(e) { t.push(e) }), An(t) }, On.prototype.entries = function() { var n = []; return this.forEach(function(e, t) { n.push([t, e]) }), An(n) }, Sn && (On.prototype[Symbol.iterator] = On.prototype.entries); var Dn = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

        function Fn(e, t) { var n = (t = t || {}).body; if (e instanceof Fn) { if (e.bodyUsed) throw new TypeError("Already read");
                this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new On(e.headers)), this.method = e.method, this.mode = e.mode, this.signal = e.signal, n || null == e._bodyInit || (n = e._bodyInit, e.bodyUsed = !0) } else this.url = String(e); if (this.credentials = t.credentials || this.credentials || "same-origin", !t.headers && this.headers || (this.headers = new On(t.headers)), this.method = function(e) { var t = e.toUpperCase(); return -1 < Dn.indexOf(t) ? t : e }(t.method || this.method || "GET"), this.mode = t.mode || this.mode || null, this.signal = t.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && n) throw new TypeError("Body not allowed for GET or HEAD requests");
            this._initBody(n) }

        function qn(e) { var i = new FormData; return e.trim().split("&").forEach(function(e) { if (e) { var t = e.split("="),
                        n = t.shift().replace(/\+/g, " "),
                        r = t.join("=").replace(/\+/g, " ");
                    i.append(decodeURIComponent(n), decodeURIComponent(r)) } }), i }

        function Bn(e, t) { t || (t = {}), this.type = "default", this.status = void 0 === t.status ? 200 : t.status, this.ok = 200 <= this.status && this.status < 300, this.statusText = "statusText" in t ? t.statusText : "OK", this.headers = new On(t.headers), this.url = t.url || "", this._initBody(e) } Fn.prototype.clone = function() { return new Fn(this, { body: this._bodyInit }) }, Rn.call(Fn.prototype), Rn.call(Bn.prototype), Bn.prototype.clone = function() { return new Bn(this._bodyInit, { status: this.status, statusText: this.statusText, headers: new On(this.headers), url: this.url }) }, Bn.error = function() { var e = new Bn(null, { status: 0, statusText: "" }); return e.type = "error", e }; var Un = [301, 302, 303, 307, 308];
        Bn.redirect = function(e, t) { if (-1 === Un.indexOf(t)) throw new RangeError("Invalid status code"); return new Bn(null, { status: t, headers: { location: e } }) }; var Wn = self.DOMException; try { new Wn } catch (e) {
            (Wn = function(e, t) { this.message = e, this.name = t; var n = Error(e);
                this.stack = n.stack }).prototype = Object.create(Error.prototype), Wn.prototype.constructor = Wn }

        function zn(o, a) { return new Promise(function(n, e) { var t = new Fn(o, a); if (t.signal && t.signal.aborted) return e(new Wn("Aborted", "AbortError")); var r = new XMLHttpRequest;

                function i() { r.abort() } r.onload = function() { var e = { status: r.status, statusText: r.statusText, headers: function(e) { var i = new On; return e.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach(function(e) { var t = e.split(":"),
                                    n = t.shift().trim(); if (n) { var r = t.join(":").trim();
                                    i.append(n, r) } }), i }(r.getAllResponseHeaders() || "") };
                    e.url = "responseURL" in r ? r.responseURL : e.headers.get("X-Request-URL"); var t = "response" in r ? r.response : r.responseText;
                    n(new Bn(t, e)) }, r.onerror = function() { e(new TypeError("Network request failed")) }, r.ontimeout = function() { e(new TypeError("Network request failed")) }, r.onabort = function() { e(new Wn("Aborted", "AbortError")) }, r.open(t.method, t.url, !0), "include" === t.credentials ? r.withCredentials = !0 : "omit" === t.credentials && (r.withCredentials = !1), "responseType" in r && _n && (r.responseType = "blob"), t.headers.forEach(function(e, t) { r.setRequestHeader(t, e) }), t.signal && (t.signal.addEventListener("abort", i), r.onreadystatechange = function() { 4 === r.readyState && t.signal.removeEventListener("abort", i) }), r.send(void 0 === t._bodyInit ? null : t._bodyInit) }) } zn.polyfill = !0, self.fetch || (self.fetch = zn, self.Headers = On, self.Request = Fn, self.Response = Bn); var Vn = function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") };

        function $n(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } var Gn = function(e, t, n) { return t && $n(e.prototype, t), n && $n(e, n), e },
            Jn = new(function() {
                function e() { Vn(this, e), this.isIos = !1, this.isIOS = !1, this.isAndroid = !1, this.isWechatApp = !1, this.isBaiduApp = !1, this.isWeiboApp = !1, this.isQQApp = !1, this.isAlipayApp = !1, this.isUc = !1, this.isBaidu = !1, this.isQQ = !1, this.isAdr = !1, this.isSafari = !1, this.isChrome = !1, this.isFireFox = !1, this.isFirefox = !1, this.isTrident = !1, this.isGecko = !1, this.isWebkit = !1, this.start() } return Gn(e, [{ key: "_matchOs", value: function() { /iPhone|iPad|iPod/i.test(this._ua()) ? (this.isIos = !0, this.isIOS = !0) : /Android/i.test(this._ua()) && (this.isAndroid = !0) } }, { key: "_matchBrowser", value: function() { var e = this._ua().split("Mobile"),
                            t = e && 1 < e.length ? e[1] : null; /\bmicromessenger\/([\d.]+)/i.test(t) ? this.isWechatApp = !0 : /baiduboxapp/i.test(t) ? this.isBaiduApp = !0 : /weibo/i.test(t) ? this.isWeiboApp = !0 : /\sQQ/i.test(t) ? this.isQQApp = !0 : /\sAlipay/i.test(t) ? this.isAlipayApp = !0 : /UCBrowser/i.test(this._ua()) ? this.isUc = !0 : /baidubrowser/i.test(this._ua()) ? this.isBaidu = !0 : /qqbrowser\/([0-9.]+)/i.test(this._ua()) ? this.isQQ = !0 : !/android/i.test(this._ua()) && /\bversion\/([0-9.]+(?: beta)?)(?: mobile(?:\/[a-z0-9]+)?)? safari\//i.test(this._ua()) ? this.isSafari = !0 : /(?:Chrome|CrMo|CriOS)\/([0-9]{1,2}\.[0-9]\.[0-9]{3,4}\.[0-9]+)/i.test(this._ua()) && !/samsung/i.test(this._ua()) ? this.isChrome = !0 : /(firefox|FxiOS+)\/([0-9.ab]+)/i.test(this._ua()) ? (this.isFireFox = !0, this.isFirefox = !0) : /android/i.test(this._ua()) && /Android[\s_\-/i686]?[\s_\-/](\d+[.\-_]\d+[.\-_]?\d*)/i.test(this._ua()) && (this.isAdr = !0) } }, { key: "_matchEngine", value: function() { /\b(?:msie |ie |trident\/[0-9].*rv[ :])([0-9.]+)/i.test(this._ua()) ? this.isTrident = !0 : /\brv:([\d\w.]+).*\bgecko\/(\d+)/i.test(this._ua()) ? this.isGecko = !0 : /\bapplewebkit[/]?([0-9.+]+)/i.test(this._ua()) && (this.isWebkit = !0) } }, { key: "getOsVersion", value: function() { var e, t; return this.isAndroid() ? (t = /Android ([._\d]+)/.exec(this._ua()) || /Android\/([\d.]+)/.exec(this._ua())) && 1 < t.length && (e = t[1]) : this.isIOS() && (t = /OS (\d+)_(\d+)_?(\d+)?/.exec(this._appVersion())) && 3 < t.length && (e = t[1] + "." + t[2] + "." + (0 | t[3])), e } }, { key: "_wrapFun", value: function() { var e = this; for (var t in e)
                            if (e.hasOwnProperty(t) && "function" != typeof e[t]) { var n = function(e) { return e }.bind(null, e[t]);
                                e[t] = n } e.needSpecialScroll = e.isIOS() && window !== top } }, { key: "_ua", value: function() { return navigator.userAgent } }, { key: "_appVersion", value: function() { return navigator.appVersion } }, { key: "_start", value: function() { return this._matchOs(), this._matchBrowser(), this._matchEngine(), this._wrapFun(), this } }, { key: "start", value: function() { this._start() } }]), e }());
        Jn.isQQ && (window.fetch = zn, window.Headers = On, window.Request = Fn, window.Response = Bn); var Xn = e(function(t) {
                function n(e) { return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) }

                function r(e) { return "function" == typeof Symbol && "symbol" === n(Symbol.iterator) ? t.exports = r = function(e) { return n(e) } : t.exports = r = function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : n(e) }, r(e) } t.exports = r }),
            Qn = /\s+/,
            Yn = function() {
                function o(e) { Vn(this, o), e && (e.context && this.setEventContext(e.context), e.createEventCallback && (this._createEventCallback = e.createEventCallback), e.removeEventCallback && (this._removeEventCallback = e.removeEventCallback), e.bindEventCallback && (this._bindEventCallback = e.bindEventCallback)) } return Gn(o, [{ key: "on", value: function(e, t) { return Zn(this, this.on, e, t) || (this._getEvent(e).push(t), this._bindEventCallback(e, t)), this } }, { key: "off", value: function(e, t) { if (!e) return t || this.off(Object.keys(this.__events).join(" "), t), null; if (Zn(this, this.off, e, t)) return null; var n; if (t) { var r = (n = this._getEvent(e)).indexOf(t); - 1 < r && n.splice(r, 1) } return (!t || n && 0 === n.length) && (delete this.__events[e], this._removeEventCallback(e)), e ? this.__events && this.__events[e] : null } }, { key: "once", value: function(e, t) { var n = t.bind(this),
                            r = this; return n.__once = !0, this.on(e, n),
                            function() { r.off(e, n), n = r = null } } }, { key: "trigger", value: function(e) { var t = Array.prototype.slice.call(arguments, 1); if (!Zn(this, this.trigger, e, t))
                            for (var n = this._getEvent(e), r = this.__eventContext || this, i = 0; i < n.length; i++) n[i].apply(r, t), n[i].__once && n.splice(i, 1) } }, { key: "setEventContext", value: function(e) { this.__eventContext = e || this } }, { key: "_getEvent", value: function(e) { return this.__events || (this.__events = {}), this.__events[e] || (this.__events[e] = [], this._createEventCallback(e, this.__events[e])), this.__events[e] } }, { key: "_createEventCallback", value: function(e, t) {} }, { key: "_removeEventCallback", value: function(e) {} }, { key: "_bindEventCallback", value: function(e, t) {} }], [{ key: "mixin", value: function(e) { for (var t = ["on", "off", "once", "trigger", "setEventContext", "_bindEventCallback", "_createEventCallback", "_getEvent", "_removeEventCallback"], n = 0, r = t.length; n < r; n++) { var i = t[n];
                            e[i] || (e[i] = o.prototype[i]) } return e } }]), o }();

        function Zn(e, t, n, r) { if (Qn.test(n)) { for (var i = n.split(Qn), o = "function" != typeof r, a = 0; a < i.length; a++) o ? t.apply(e, [i[a]].concat(r)) : t.call(e, i[a], r); return !0 } return !1 } var Kn = function() {
            function t(e) { Vn(this, t), this.element = e, this.init && this.init() } return Gn(t, [{ key: "connectedCallback", value: function() {} }, { key: "disconnectedCallback", value: function() {} }, { key: "attributeChangedCallback", value: function() {} }, { key: "firstInviewCallback", value: function() {} }, { key: "viewportCallback", value: function() {} }, { key: "prerenderAllowed", value: function() { return !1 } }, { key: "hasResources", value: function() { return !1 } }, { key: "build", value: function() { this.buildCallback() } }, { key: "buildCallback", value: function() {} }, { key: "unlayoutCallback", value: function() { return !1 } }, { key: "createPlaceholderCallback", value: function() { return null } }, { key: "layoutCallback", value: function() { return Promise.resolve() } }, { key: "firstLayoutCompleted", value: function() {} }, { key: "togglePlaceholder", value: function(e) { this.element.togglePlaceholder(e) } }, { key: "isLoadingEnabled", value: function() { return !1 } }, { key: "applyFillContent", value: function(e, t) { e.classList.add("mip-fill-content"), t && e.classList.add("mip-replaced-content") } }, { key: "expendAttr", value: function(e, t) { for (var n = 0; n < e.length; n++) { var r = e[n]; if (this.element.hasAttribute(r)) { var i = this.element.getAttribute(r);
                            t.setAttribute ? t.setAttribute(r, i) : t[r] = i } } return t } }, { key: "addEventAction", value: function() { var e = this._actionEvent;
                    e || (e = this._actionEvent = new Yn).setEventContext(this), e.on.apply(e, arguments) } }, { key: "executeEventAction", value: function(e) { var t = this._actionEvent;
                    e && t && t.trigger(e.handler, e.event, e.arg) } }, { key: "resourcesComplete", value: function() { this.element.resourcesComplete() } }], [{ key: "observedAttributes", get: function() { return [] } }]), t }(); var er = function(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e }; var tr = function(e, t) { return !t || "object" !== Xn(t) && "function" != typeof t ? er(e) : t },
            nr = e(function(t) {
                function n(e) { return t.exports = n = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) { return e.__proto__ || Object.getPrototypeOf(e) }, n(e) } t.exports = n }),
            rr = e(function(n) {
                function r(e, t) { return n.exports = r = Object.setPrototypeOf || function(e, t) { return e.__proto__ = t, e }, r(e, t) } n.exports = r }); var ir = function(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && rr(e, t) };

        function or(e, t) { var n, r, i, o = 0;

            function a() { i = 0, o = Date.now(), e.apply(n, r) } return !t && (t = 10),
                function() { var e = Date.now() - o;
                    n = this, r = arguments, clearTimeout(i), t <= e ? a() : i = setTimeout(a, t - e) } }

        function ar(e) { for (var t = Object.keys(e), n = t.length, r = [], i = 0; i < n; i++) r.push(e[t[i]]); return r }

        function sr(e) { return !!e && "object" === Xn(e) && Object.getPrototypeOf(e) === Object.prototype }

        function cr(e, t, n) { for (var r in t)
                if (n) { if (sr(t[r])) !sr(e[r]) && (e[r] = {});
                    else { if (!Array.isArray(t[r])) { void 0 !== t[r] && (e[r] = t[r]); continue }!Array.isArray(e[r]) && (e[r] = []) } cr(e[r], t[r], n) } else void 0 !== t[r] && (e[r] = t[r]) }

        function ur(e) { var t = "boolean" == typeof e,
                n = !1;
            t && (n = e, e = arguments[1]); for (var r = t ? 2 : 1; r < arguments.length; r++) cr(e, arguments[r], n); return e }

        function lr(e) { var t = arguments[1],
                n = {};
            Array.isArray(t) || (t = Array.prototype.slice.call(arguments, 1)); for (var r = 0; r < t.length; r++) { var i = t[r];
                i in e && (n[i] = e[i]) } return n }

        function dr(e) { return "[object String]" === Object.prototype.toString.call(e) }

        function fr(t, n) { if (t && t[n]) try { delete t[n] } catch (e) { t[n] = void 0 } }

        function hr() { return "ontouchstart" in window || void 0 !== window.navigator.maxTouchPoints && 0 < window.navigator.maxTouchPoints || void 0 !== window.DocumentTouch }

        function pr(e) { return /mipcache.bdstatic.com/.test(e) || /^(\/\/|http:\/\/|https:\/\/)[^.]+.mipcdn.com\/(stati)?c\//.test(e) }

        function vr(t) { if (!t) return ""; if (/^iframe-shell/.test(t)) return t; try { return JSON.parse(t).rootName } catch (e) { return t } }

        function mr(r) { var i = Object.create(null); return function() { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return i[t[0]] || (i[t[0]] = r.apply(this, t)) } } var gr = window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout.bind(window),
            yr = Object.freeze({ throttle: or, values: ar, isPlainObject: sr, extend: ur, pick: lr, isString: dr, del: fr, hasTouch: hr, isCacheUrl: pr, getRootName: vr, raf: gr, memoize: mr }),
            wr = document.documentElement,
            br = wr.matches || wr.webkitMatchesSelector || wr.mozMatchesSelector || wr.oMatchesSelector || wr.msMatchesSelector || wr.matchesSelector;

        function Er(e, t) { return !(!e || 1 !== e.nodeType) && br.call(e, t) } var kr = wr.closest ? function(e, t) { return e.closest(t) } : function(e, t) { for (; e;) { if (Er(e, t)) return e;
                    e = e.parentNode } return null },
            Sr = wr.contains ? function(e, t) { return e && e.contains(t) } : function(e, t) { for (e === document && (e = document.documentElement || document.body.parentElement); t;) { if (e === t) return !0;
                    t = t.parentElement } return !1 }; var _r = document.createElement("div");

        function Pr(e) { return function(e, t, n) { if (t(e)) n();
                else { var r = e.ownerDocument.defaultView; if (r.MutationObserver) { var i = new r.MutationObserver(function() { t(e) && (i.disconnect(), n()) });
                        i.observe(e, { childList: !0 }) } else var o = r.setInterval(function() { t(e) && (r.clearInterval(o), n()) }, 5) } }(document.documentElement, function(e) { return !!e.ownerDocument.body }, e) }

        function Lr(t) { return new Promise(function(e) { return function(t, n, r) { var i = n(t);
                    i ? r(t) : t.addEventListener("readystatechange", function e() { n(t) && (i || (i = !0, r(t)), t.removeEventListener("readystatechange", e)) }) }(t, function(e) { return "loading" !== e.readyState }, e) }) } var Tr, Ir, Cr, xr, Ar = { closest: kr, closestTo: function(e, t, n) { var r = kr(e, t); return Sr(n, r) ? r : null }, matches: Er, contains: Sr, create: function(e) { if (_r.innerHTML = e, !_r.children.length) return null; var t = Array.prototype.slice.call(_r.children); return _r.innerHTML = "", 1 < t.length ? t : t[0] }, insert: function(e, t) { if (e && t) { var n = Array.prototype.slice.call(t);
                        0 === n.length && n.push(t); for (var r = 0; r < n.length; r++) this.contains(n[r], e) || n[r] !== e && e.appendChild && e.appendChild(n[r]) } }, whenBodyAvailable: Pr, waitDocumentReady: Pr },
            Or = document.documentElement,
            Mr = Math.round;

        function jr(e) { if (Jn.needSpecialScroll && window !== window.top) { var t = document.createElement("div"); return t.style.cssText = e ? "position:absolute;width:0;height:0;visibility:hidden;" : "position:absolute;top:0;left:0;width:0;height:0;visibility:hidden;", Tr.appendChild(t), t } return null } Pr(function() { Tr = document.body, Ir = jr(), Cr = jr(), xr = jr(!0) }); var Hr = { get: function(e, t, n, r) { return { left: e = Mr(e), top: t = Mr(t), width: n = Mr(n), height: r = Mr(r), right: e + n, bottom: t + r } }, scrollingElement: document.scrollingElement || Jn.isWebkit() && Tr || Or, getElementRect: function(e) { var t = e.getBoundingClientRect(); return this.get(t.left + this.getScrollLeft(), t.top + this.getScrollTop(), t.width, t.height) }, getElementOffset: function(e) { var t = e.getBoundingClientRect(); return { left: Mr(t.left), top: Mr(t.top), width: Mr(t.width), height: Mr(t.height) } }, getScrollLeft: function() { return Mr(Ir && -Ir.getBoundingClientRect().left || this.scrollingElement.scrollLeft || window.pageXOffset || 0) }, getScrollTop: function() { return Mr(Ir && -Ir.getBoundingClientRect().top || this.scrollingElement.scrollTop || window.pageYOffset || 0) }, setScrollTop: function(e) { Cr ? (Cr.style.top = e + "px", setTimeout(function() { return Cr.scrollIntoView(!0) }, 0)) : this.scrollingElement.scrollTop = e }, getScrollHeight: function() { return xr && xr !== Tr.lastElementChild && Tr.appendChild(xr), Mr(xr ? xr.offsetTop : this.scrollingElement.scrollHeight) }, getScrollWidth: function() { return window.innerWidth }, overlapping: function(e, t) { return e.top <= t.bottom && t.top <= e.bottom && e.left <= t.right && t.left <= e.right } }; var Nr = new(function() {
            function n() { Vn(this, n), this.ssEnabled = function() { var e = !1; try { window.sessionStorage.setItem("_t", 1), window.sessionStorage.removeItem("_t"), e = !0 } catch (e) {} return e }(), this.pageId = window.location.href.split("#").shift(); var e = window.location.hash;
                this.ssEnabled && (e = (window.sessionStorage.getItem(this.pageId) || "") + e); if (this.hashTree = this._getHashObj(e), e) { var t = this._getHashValue();
                    this.ssEnabled && window.sessionStorage.setItem(this.pageId, t), window.location.hash = t } this.bindAnchor() } return Gn(n, [{ key: "get", value: function(e) { var t = this.hashTree[e]; return t && t.value ? t.value : "" } }, { key: "bindAnchor", value: function() { var e = this.hashTree.mipanchor; if (e && e.value)
                        if ("loading" !== document.readyState) this.scrollToAnchor(e);
                        else { var t = this.scrollToAnchor.bind(null, e);
                            document.addEventListener("DOMContentLoaded", t, !1) } } }, { key: "scrollToAnchor", value: function(e) { var t = document.getElementById(e.value); if (t) { var n = Hr.getElementOffset(t);
                        t && n.top && Hr.setScrollTop(n.top) } } }, { key: "refreshHashTree", value: function() { var e = window.location.hash;
                    this.hashTree = this._getHashObj(e) } }, { key: "_getHashObj", value: function(e) { var t = {}; if (!e) return t; var n = e.slice(e.indexOf("#") + 1).split("&"); for (var r in n)
                        if (n.hasOwnProperty(r)) { var i = n[r],
                                o = i,
                                a = "",
                                s = i.indexOf("="); if (0 === s) continue; - 1 !== s && (o = i.substring(0, s), a = i.slice(s + 1)), t[o] = { value: a, sep: -1 !== s ? "=" : "" } } return t } }, { key: "_getHashValue", value: function() { var e = [],
                        t = this.hashTree; for (var n in t)
                        if ("prerender" !== n && t.hasOwnProperty(n)) { var r = t[n].value;
                            r = n + t[n].sep + r, e.push(r) } return e.join("&") } }]), n }()); var Rr = {};

        function Dr(e, t, n, r) { return e.addEventListener(t, n, r),
                function() { return e.removeEventListener(t, n) } }

        function Fr(e, t, n, r) { var i = Dr(e, t, function(e) { i(), n(e) }, r); return i } Rr.click = Rr.mousedown = Rr.mouseup = Rr.mousemove = "MouseEvents"; var qr = { delegate: function(e, r, t, i, n) {
                    function o(e) { var t = e.target,
                            n = Ar.closestTo(t, r, this);
                        n && i.call(n, e) } return n = !!n, e.addEventListener(t, o, n),
                        function() { e.removeEventListener(t, o), o = e = i = null } }, create: function(e, t) { var n = document.createEvent(Rr[e] || "Event"); return n.initEvent(e, !0, !0), t && (n.data = t), n }, loadPromise: function(r) { return function(e) { return !!(e.complete || "complete" === e.readyState || e.document && "complete" === e.document.readyState) }(r) ? Promise.resolve(r) : new Promise(function(e, t) { var n = r.tagName;
                        Fr(r, "AUDIO" === n || "VIDEO" === n ? "loadstart" : "load", e), n && Fr(r, "error", t) }) }, listenOnce: Fr, listen: Dr },
            Br = /(?:(^-)|-)+(.)?/g,
            Ur = document.createElement("div"),
            Wr = ["webkit", "moz", "ms", "o", "Webkit", "Moz", "O"],
            zr = {};

        function Vr(e) { if (e = e.replace(Br, function(e, t, n) { return t ? n : n.toUpperCase() }), zr[e]) return zr[e]; var t; if (!(e in Ur.style))
                for (var n = 0; n < Wr.length; n++) { var r = Wr[n] + e.charAt(0).toUpperCase() + e.slice(1); if (r in Ur.style) { t = r; break } }
            return zr[e] = t || e, zr[e] } var $r = /^\d+([a-zA-Z]+)/,
            Gr = {};

        function Jr(e, t) { if (t !== +t) return t; if (Gr[e]) return t + Gr[e];
            Ur.style[e] = 0; var n = Ur.style[e],
                r = n.match && n.match($r); return r ? t + (Gr[e] = r[1]) : t }

        function Xr(e, t, n) { if (!t || !e) return e; if (e.length && e[0]) { if (t && void 0 !== n) { for (var r = 0; r < e.length; r++) { Xr(e[r], t, n) } return e } for (var i = [], o = 0; o < e.length; o++) i.push(Xr(e[o], t)); return i } if (!e.nodeType) return e; var a, s = e; if ("string" == typeof t && void 0 === n) return t = Vr(t), s.style[t] || document.defaultView.getComputedStyle(s)[t]; if ("string" == typeof t) a = Vr(t), s.style[a] = Jr(a, n);
            else
                for (var c in t) n = t[c], a = Vr(c), s.style[a] = Jr(a, n); return s } var Qr, Yr, Zr, Kr, ei, ti, ni, ri = function(e) {
            function r() { var e; return Vn(this, r), (e = tr(this, nr(r).call(this))).steps = [], e._index = -1, e.canceled = !1, e } return ir(r, Yn), Gn(r, [{ key: "start", value: function(e) { return e && this.on("end", e), this.trigger("start"), this.next(), this } }, { key: "next", value: function() { this.canceled || (this._index++, this._index >= this.steps.length ? this.trigger("end") : this.steps[this._index].call(this)) } }, { key: "cancel", value: function() { this.canceled = !0 } }], [{ key: "register", value: function(t, n) { r[t] = function() { var e = new r; return e[t].apply(e, arguments), e }, r.prototype[t] = function() { var e = this,
                            t = Array.prototype.slice.call(arguments, 0); return t.unshift(this.next.bind(this)), this.steps.push(function() { return n.apply(e, t) }), this } } }]), r }();
        ri.register("p", function(t) { var e = Array.prototype.slice.call(arguments, 1),
                n = e.length;
            e.forEach(function(e) { return e.start(function() { return 0 == n-- && t() }) }) }), ri.register("done", function(e, t) { t(e) }), ri.tool = function() { var e = "",
                t = "",
                i = { Webkit: "webkit", Moz: "", O: "o" },
                o = document.createElement("div");

            function a(e) { return e.replace(/([A-Z])/g, "-$1").toLowerCase() } if (void 0 === o.style.transform)
                for (var n in i)
                    if (void 0 !== o.style[n + "TransitionProperty"]) { e = "-" + n.toLowerCase() + "-", t = i[n]; break } return { prefix: e, dasherize: a, normalizeEvent: function(e) { return t ? t + e : e.toLowerCase() }, off: void 0 === t && void 0 === o.style.transitionProperty, setCss: function(e, t) { var n = ""; for (var r in t) t[r] || 0 === t[r] ? n += a(r) + ":" + t[r] + ";" : e.style.removeProperty(a(r));
                    e.style.cssText += ";" + n }, handleUnit: function(e, t) { if (t !== +t) return t;
                    o.style[e] = 0; var n = o.style[e],
                        r = n.match && n.match(/^\d+([a-zA-Z]+)/); return r ? t + r[1] : t }, getPropName: function(e) { var t; if (void 0 !== o.style[e]) t = e;
                    else
                        for (var n in i) { var r = "-" + i[n] + "-"; if (void 0 !== o.style[r + e]) { t = r + e; break } }
                    return t } } }(), ri.transition = (Qr = ri.tool.prefix, Yr = Qr + "transition-property", Zr = Qr + "transition-duration", Kr = Qr + "transition-delay", ei = Qr + "transition-timing-function", ti = ri.tool.normalizeEvent("TransitionEnd"), (ni = {})[Yr] = "", ni[Zr] = "", ni[Kr] = "", ni[ei] = "", function(n, e) { var t = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}; if (n && "[object Object]" === Object.prototype.toString.call(e)) { t = t || {}; var r = parseInt(t.duration, 10) || 400,
                    i = -1 < ["ease", "linear", "ease-in", "ease-out", "ease-in-out"].indexOf(t.ease) ? t.ease : "ease",
                    o = parseInt(t.delay, 10) || 0,
                    a = "function" == typeof t.cb ? t.cb : function() {},
                    s = n.getAttribute("data-naboo");
                s !== +s && (s = 0), n.setAttribute("data-naboo", s + 1), ri.tool.off && (r = 0), r = Math.max(r, 0), r /= 1e3, o /= 1e3; var c = [],
                    u = {}; for (var l in e)
                    if (e.hasOwnProperty(l)) { var d = l;
                        l = ri.tool.getPropName(l); var f = ri.tool.handleUnit(l, e[d]);
                        u[l] = f, c.push(ri.tool.dasherize(l)) } if (0 < r) { var h = n.style[Yr];
                    h && (h += ", "), u[Yr] = h + c.join(", "); var p = n.style[Zr];
                    (p || 0 === parseInt(p, 10)) && (p += ", "), u[Zr] = p + r + "s"; var v = n.style[ei];
                    v && (v += ", "), u[ei] = v + i; var m = n.style[Kr];
                    (m || 0 === parseInt(m, 10)) && (m += ", "), u[Kr] = m + o + "s" } var g = !1,
                    y = ri.tool.setCss,
                    w = function e(t) { if (!t || t.elapsedTime === r + o) { if (void 0 !== t) { if (t.target !== t.currentTarget) return;
                                t.target.removeEventListener(ti, e) } else n.removeEventListener(ti, e);
                            g = !0, n.setAttribute("data-naboo", +n.getAttribute("data-naboo") - 1), 0 == +n.getAttribute("data-naboo") && y(n, ni), a && a() } };
                0 < r && n.addEventListener(ti, w), setTimeout(function() { return !g && w() }, 1e3 * (r + o) + 25), n.clientLeft, y(n, u) } }), ri.register("animate", function(e, t, n, r) { var i = (r = r || {}).cb;
            r.cb = function() { i && i(), e() }, r.mode = -1 < ["transition"].indexOf(r.mode) ? r.mode : "transition", ri[r.mode](t, n, r) }); var ii = 4,
            oi = { start: 1, wait: 2, pending: 3, end: ii, hold: 5 },
            ai = { 0: "", 1: "up", 2: "right", 3: "down", 4: "left" },
            si = {},
            ci = {},
            ui = function() {
                function n(e) { Vn(this, n), this._state = 1, this.gesture = e, this.conflictList = {}, this.name = "", this.needAutoReset = !0, this.level = 0 } return Gn(n, [{ key: "recognize", value: function(e) { if ("start" === e.eventState && 5 === this._state && (this._state = 1, this.needAutoReset && this.reset()), 5 !== this._state) { var t = this.process(e);
                            5 !== this._state && (this._state = t, this.emitCheck() && this.emit(e)) } } }, { key: "isState", value: function() { for (var e = arguments, t = 0; t < e.length; t++) { if (("string" == typeof e[t] ? oi[e[t]] : e[t]) === this._state) return !0 } return !1 } }, { key: "setState", value: function(e) { return 0 < (e = "string" == typeof e ? oi[e] : e) && e < 6 && (this._state = e), this._state } }, { key: "emitCheck", value: function() { if (1 === this._state || 5 === this._state) return !1; for (var e in this.conflictList) { if (this.conflictList[e].level > this.level && 5 !== this.conflictList[e].state) return !1 } return !0 } }, { key: "process", value: function(e) { return this._state } }, { key: "emit", value: function(e) {} }, { key: "reset", value: function() {} }, { key: "hold", value: function() { return this._state = 5, this._state } }, { key: "trigger", value: function(e) { this.gesture.trigger(e.type, e.event, e) } }, { key: "eventList", get: function() { return this._eventList || [] }, set: function(e) { this._eventList = e } }], [{ key: "register", value: function(e, t) {!e.conflictList && (e.conflictList = []), e.recName = e.prototype.recName = t; for (var n = (si[t] = e).prototype.eventList, r = 0; r < n.length; r++) ci[n[r]] = e } }, { key: "getConflictList", value: function(e) { return si[e] && si[e].conflictList } }, { key: "get", value: function(e) { return si[e] } }, { key: "getByEventname", value: function(e) { return ci[e] } }, { key: "conflict", value: function(e, t) { "string" == typeof e && (e = n.get(e), t = n.get(t)), e && t && (e.conflictList.push(t.recName), t.conflictList.push(e.recName)) } }]), n }(); var li = function(e) {
                function n(e) { var t; return Vn(this, n), (t = tr(this, nr(n).call(this, e))).boundHoldTimeFn = function() { this._state = ii, this.emit() }.bind(er(t)), t.taps = 1, t.count = 0, t.holdTime = 300, t.time = 250, t.moveRange = 10, t.level = 1, t.needAutoReset = !1, t } return ir(n, ui), Gn(n, [{ key: "process", value: function(e) { if (e.deltaTime > this.time || e.distance > this.moveRange || 1 < e.pointers.length) return this.reset(), this.hold(); if ("start" === e.eventState && clearTimeout(this.holdTimer), "end" !== e.eventState) return 2; var t = this.preTime && e.timeStamp - this.preTime; return this.preTime = e.timeStamp, t < this.holdTime ? this.count++ : this.count = 1, this._data = e, this.count === this.taps ? this.emitCheck() ? ii : (this.holdTimer = setTimeout(this.boundHoldTimeFn, this.holdTime), 2) : void 0 } }, { key: "reset", value: function() { this.preTime = null, this.count = 0, this._state = 1, clearTimeout(this.holdTimer) } }, { key: "emit", value: function() { if (this._state === ii) { var e = this._data,
                                t = Object.create(e);
                            t.type = this.eventList[0], this._data = null, this.trigger(t), this.reset() } } }, { key: "eventList", get: function() { return this._eventList || ["tap"] } }]), n }(),
            di = function(e) {
                function n(e) { var t; return Vn(this, n), (t = tr(this, nr(n).call(this, e))).taps = 2, t.level = 2, t } return ir(n, li), Gn(n, [{ key: "eventList", get: function() { return this._eventList || ["doubletap"] } }]), n }(),
            fi = function(e) {
                function n(e) { var t; return Vn(this, n), (t = tr(this, nr(n).call(this, e))).velocity = .03, t.distance = 30, t.duration = 1e3, t } return ir(n, ui), Gn(n, [{ key: "process", value: function(e) { return 1 < e.pointers.length || e.deltaTime > this.duration ? 5 : "end" === e.eventState && e.velocity >= this.velocity && e.distance > this.distance ? ii : void 0 } }, { key: "emit", value: function(e) { if (this._state === ii) { var t = Object.create(e);
                            t.type = "swipe", t.swipeDirection = ai[e.direction], this.trigger(t); var n = Object.create(e);
                            n.type = "swipe" + ai[e.direction], n.swipeDirection = ai[e.direction], this.trigger(n) } } }, { key: "eventList", get: function() { return this._eventList || ["swipe", "swipeup", "swiperight", "swipeleft", "swipedown"] } }]), n }();
        ui.register(di, "doubletap"), ui.register(li, "tap"), ui.register(fi, "swipe"), ui.conflict(di, li); var hi = Math.round,
            pi = Math.max,
            vi = Math.abs,
            mi = { startCenter: null, lastCenter: null, startTime: null, process: function(e, t, n) { var r = {},
                        i = Date.now(),
                        o = e.touches.length ? e.touches : e.changedTouches; "touchstart" === e.type && (this.startCenter = this.getCenter(o), this.startTime = i, this.startData = r, this.preData = null); var a = this.startCenter,
                        s = this.getCenter(o),
                        c = r.deltaTime = i - this.startTime;
                    r.pointers = o, r.x = s.x, r.y = s.y; var u = r.deltaX = s.x - a.x,
                        l = r.deltaY = s.y - a.y; if (r.velocityX = u / c || 0, r.velocityY = l / c || 0, r.velocity = pi(vi(r.velocityX), vi(r.velocityY)), r.angle = this.getAngle(a, s), r.distance = this.getDistance(a, s), r.direction = this.getDirection(u, l), r.eventState = e.type.replace("touch", ""), r.timeStamp = i, this.preData) { var d = r.instantDeltaTime = i - this.preData.timeStamp,
                            f = r.instantVelocityX = (r.x - this.preData.x) / d || 0,
                            h = r.instantVelocityY = (r.y - this.preData.y) / d || 0; if ("move" === r.eventState && (t || n)) { var p = vi(f) > vi(h);
                            (t && p || n && !p) && e.preventDefault() } } else r.instantDeltaTime = r.instantVelocityX = r.instantVelocityY = 0; return (this.preData = r).event = e, Object.freeze(r) }, getCenter: function(e) { return { x: hi(e[0].clientX), y: hi(e[0].clientY) } }, getAngle: function(e, t) { return 180 * Math.atan2(t.y - e.y, t.x - e.x) / Math.PI }, getDistance: function(e, t) { var n = t.x - e.x,
                        r = t.y - e.y; return Math.sqrt(n * n + r * r) }, getDirection: function(e, t) { return e === t ? 0 : vi(e) >= vi(t) ? 0 < e ? 2 : 4 : t < 0 ? 1 : 3 } },
            gi = function(e) {
                function r(e, t) { var n; return Vn(this, r), (n = tr(this, nr(r).call(this)))._opt = { preventDefault: !1, stopPropagation: !1, preventX: !0, preventY: !1 }, t && (n._opt = ur({}, n._opt, t)), n.__eventContext = n._element = e, n._boundTouchEvent = function(e) { var t = this._opt; if (t.preventDefault && e.preventDefault(), t.stopPropagation && e.stopPropagation(), "touchstart" !== e.type && !mi.startTime) return; var n = mi.process(e, t.preventX, t.preventY);
                        this._recognize(n), this.trigger(e.type, e, n) }.bind(er(n)), yi(e, "touchstart touchmove touchend touchcancel", n._boundTouchEvent), n._recognizers = {}, n } return ir(r, Yn), Gn(r, [{ key: "cleanup", value: function() { yi(this._element, "touchstart touchmove touchend touchcancel", this._boundTouchEvent, !1), this.off() } }, { key: "_createEventCallback", value: function(e) { if (!this._hasRegister(e)) { var t = ui.getByEventname(e); if (t) { e = t.recName; for (var n = this._recognizers[e] = new t(this), r = ui.getConflictList(n.recName), i = 0, o = r.length; i < o; i++) { var a = r[i],
                                        s = this._recognizers[a];
                                    s && ((s.conflictList[n.recName] = n).conflictList[s.recName] = s) } } } } }, { key: "_removeEventCallback", value: function(e) { var t; if (void 0 === e) this._recognizers = {};
                        else if (t = this._recognizers[e]) { for (var n in t.conflictList) delete t.conflictList[n][e];
                            delete this._recognizers[e] } } }, { key: "_hasRegister", value: function(e) { return !!this._recognizers[ui.getByEventname(e)] } }, { key: "_recognize", value: function(e) { var t = this._recognizers; for (var n in t) { t[n].recognize(e) } } }]), r }();

        function yi(e, t, n, r) { for (var i = t.split(" "), o = 0, a = i.length; o < a; o++) { var s = i[o];!1 === r ? e.removeEventListener(s, n) : e.addEventListener(s, n, !1) } }

        function wi(e, t) { for (var n = arguments.length, r = new Array(2 < n ? n - 2 : 0), i = 2; i < n; i++) r[i - 2] = arguments[i]; var o = function(e, t) { var n, r = { bubbles: !1, cancelable: !1, detail: t }; return "function" == typeof window.CustomEvent ? n = new CustomEvent(e, r) : (n = document.createEvent("CustomEvent")).initCustomEvent(e, r.bubbles, r.cancelable, r.detail), n }(t, [].concat(r));
            e.dispatchEvent(o) } var bi = 0,
            Ei = 1,
            ki = 2,
            Si = 21,
            _i = 22,
            Pi = {},
            Li = window.location.href,
            Ti = Li.match(/[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/g),
            Ii = Ti && 1 < Ti.length ? Ti[1] : "",
            Ci = function() {
                function e() { Vn(this, e) } return Gn(e, [{ key: "_isCachePage", value: function() { return pr(Li) } }, { key: "_supportLs", value: function() { var t = !1; try { window.localStorage.setItem("lsExisted", "1"), window.localStorage.removeItem("lsExisted"), t = !0 } catch (e) { t = !1 } return t } }, { key: "_getLocalStorage", value: function() { var e = this._supportLs() ? localStorage.getItem(Ii) : Pi[Ii]; return function(e) { e.u = (new Date).getTime() }(e = e ? Oi(e) : {}), e } }, { key: "_rmLocalStorage", value: function(e) { e || (e = Ii), this._supportLs() ? localStorage.removeItem(e) : fr(Pi, e) } }, { key: "set", value: function(e, t, n, r) { if (e && t)
                            if (r = "function" == typeof n ? n : r, this._isCachePage()) { var i = this._getLocalStorage(); if (i[e] = t, n = parseInt(n, 10), !isNaN(n) && 0 < n ? i.e = (new Date).getTime() + n : fr(i, "e"), 4096 < (i = JSON.stringify(i)).length) throw r && r(ji(Si, Mi(Si))), Mi(Si);
                                this._setLocalStorage(Ii, i, n, r) } else this._setLocalStorage(e, t, n, r) } }, { key: "_setLocalStorage", value: function(t, n, r, i) { var o = Mi(_i, t); if (i = "function" == typeof r ? r : i, this._supportLs()) try { localStorage.setItem(t, n) } catch (e) { if (this._isExceed(e) && this._isCachePage()) this._exceedHandler(t, n, r);
                            else if (this._isExceed(e) && !this._isCachePage()) throw i && i(ji(_i, o)), o } else { var e = n.length / 1024 / 1024; for (var a in Pi) Pi[a] && (e += Pi[a].length / 1024 / 1024); if (5 < e) throw i && i(_i, o), o;
                            Pi[t] = n } } }, { key: "get", value: function(e) { if (dr(e)) { var t; if (this._isCachePage()) { var n = this._getLocalStorage();
                                n && n[e] && (t = n[e]) } else t = this._supportLs() ? localStorage.getItem(e) : Pi[e]; return t } } }, { key: "rm", value: function(e) { if (dr(e))
                            if (this._isCachePage()) { var t = this._getLocalStorage();
                                t && t[e] && (fr(t, e), this._setLocalStorage(Ii, JSON.stringify(t))) } else this._supportLs() ? localStorage.removeItem(e) : fr(Pi, e) } }, { key: "clear", value: function() { this._isCachePage() ? this._rmLocalStorage() : this._supportLs() ? localStorage.clear() : Pi = {} } }, { key: "rmExpires", value: function() { var e = !1; if (this._isCachePage()) { var t = this._supportLs() ? localStorage : Pi; for (var n in t)
                                if (t[n]) { var r = void 0; if ("string" == typeof t[n] && (r = Oi(t[n])), r && r.e) { var i = parseInt(Oi(t[n]).e, 10);
                                        i && (new Date).getTime() >= i && (e = !0, this._rmLocalStorage(n)) } } } return e } }, { key: "_isExceed", value: function(e) { var t = !1; if (e && e.code) switch (e.code) {
                            case 22:
                                t = !0; break;
                            case 1014:
                                t = "NS_ERROR_DOM_QUOTA_REACHED" === e.name } else e && -2147024882 === e.number && (t = !0); return t } }, { key: "_exceedHandler", value: function(e, t, n) { var r, i; if (!this.rmExpires()) { var o = localStorage; for (var a in o)
                                if (o[a]) { var s = Oi(o[a]).u;
                                    (!i || parseInt(s, 10) < r) && (i = a, r = parseInt(s, 10)) } this._rmLocalStorage(i) } this.set(e, t, n) } }]), e }(),
            xi = function() {
                function e() { Vn(this, e) } return Gn(e, [{ key: "request", value: function(t) { if (t && t.url) { var e = {};
                            e.mode = t.mode ? t.mode : null, e.method = t.method ? t.method : "GET", e.credentials = t.credentials ? t.credentials : "omit", e.cache = t.cache ? t.cache : "default", t.headers && (e.headers = t.headers), t.body && (e.body = t.body), fetch(t.url, e).then(function(e) { e.ok ? e.text().then(function(e) { return t.success && t.success(Oi(e)) }) : t.error && t.error(e) }).catch(function(e) { return t.error && t.error(e) }) } } }]), e }(),
            Ai = function() {
                function e() { Vn(this, e) } return Gn(e, [{ key: "delExceedCookie", value: function() { if (!this._notIframed()) { var e = window.location.hostname,
                                t = document.cookie; if (!(document.cookie.length < 5120))
                                for (var n = t.split(";"), r = 0; r < n.length; r++) { var i = n[r].split("="); if (i && 1 < i.length) { var o = new Date,
                                            a = i[0].trim(),
                                            s = i[1].trim();
                                        o.setMilliseconds(o.getMilliseconds() - 864e5), this._set({ key: a, value: s, expires: o, domain: e }), this._get(a) && this._set({ key: a, value: s, expires: o, domain: e.split(".").slice(-2).join(".") }) } if (document.cookie.length <= 3072) break } } } }, { key: "_notIframed", value: function() { return window === top } }, { key: "_get", value: function(e) { e = e.trim(); for (var t = document.cookie, n = t ? t.split(";") : [], r = 0, i = n.length; r < i; r++) { var o = n[r].split("="); if (o[0].trim() === e) return o[1] } } }, { key: "_set", value: function(e) { document.cookie = [e.key, "=", "; expires=" + e.expires.toGMTString(), "; path=/", "; domain=" + e.domain].join("") } }]), e }();

        function Oi(e) { try { e = JSON.parse(e) } catch (e) {} return e }

        function Mi(e, t) { var n; switch (e) {
                case Si:
                    n = "storage space need less than 4k"; break;
                case _i:
                    n = "Uncaught DOMException: Failed to execute setItem on Storage: Setting the value of " + t + " exceeded the quota at " + window.location.href } return n }

        function ji(e, t) { return { errCode: e, errMess: t } }

        function Hi(e) { var t = (e = e.replace(/(["'])((\\{2})*|(.*?[^\\](\\{2})*))\1/g, function(e) { return e.replace(/[/*]/g, function(e) { return "\\" + e }) }).replace(/\/\/.*\n?/g, "").replace(/\/\*.*\*\//g, "")).replace(/\\(?:["'\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\n\r]*"|'[^'\n\r]*'|[+-]?(Infinity|NaN)|([\u2e80-\u9fff]+|[_\w$][_\w\d$]*)\s*:|true|false|null|[+-]?\.?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?([xX][0-9a-fA-F]{1,2})?/g, function(e) { return "]" + (/:$/.test(e) ? ":" : "") }).replace(/(?:^|:|,)(?:\s*\[)+/g, ""); if (/^[\],:{}\s]*$/.test(t)) try { return (0, eval)("(" + e + ")") } catch (e) { throw e }
            throw new Error(e + " Content should be a valid JSON string!") } var Ni = "_mip_template_cached",
            Ri = function() {
                function e() { Vn(this, e) } return Gn(e, [{ key: "cache", value: function() {} }, { key: "render", value: function() {} }]), e }(),
            Di = new(function() {
                function e() { Vn(this, e), this._templates = {}, this._solverList = {}, this.Template = Ri } return Gn(e, [{ key: "_create", value: function(e) { var t;
                        this._templates[e] || (this._templates[e] = new Promise(function(e) { t = e }), this._solverList[e] = t); return this._templates[e] } }, { key: "_getTemplate", value: function(e) { return this._create(e) } }, { key: "register", value: function(e, t) { this._create(e), (0, this._solverList[e])(new t) } }, { key: "isTemplateClass", value: function(e) { return !(!e || !e.prototype) && Ri.prototype.isPrototypeOf(e.prototype) } }, { key: "render", value: function(e, n, r) { var i = this,
                            o = this.find(e); if (o) { var t = o.getAttribute("type"),
                                a = o.innerHTML; return this._getTemplate(t).then(function(t) { return o[Ni] || (o[Ni] = !0, t.cache(a)), n = i.extendFun(n), Array.isArray(n) ? 0 === n.length ? Promise.resolve([]) : n.map(function(e) { return t.render(a, e) }) : r ? { element: e, html: t.render(a, n) } : t.render(a, n) }) } } }, { key: "find", value: function(e) { if (!e || 1 !== e.nodeType) return console.error("Template parent element must be a node element"); if ("TEMPLATE" === e.tagName) return e; var t = e.getAttribute("template"); return (t ? document.getElementById(t) : e.querySelector("template")) || console.error("Can not find template element") } }, { key: "extendFun", value: function(e) { try { e.escape2Html = function() { return function(e, t) { return t(e).replace(/&lt;/gi, "<").replace(/&gt;/gi, ">").replace(/&#x2F;/gi, "/") } }, e.isSF = function() { return "sf" === this.urltype } } catch (e) {} return e } }, { key: "inheritTemplate", value: function() { return function(e) {
                            function t() { return Vn(this, t), tr(this, nr(t).apply(this, arguments)) } return ir(t, Ri), t }() } }]), e }()),
            Fi = function e() { var n = this;
                Vn(this, e), this.promise = new Promise(function(e, t) { n.resolve = e, n.reject = t }) },
            qi = ["info", "log", "warn", "error"],
            Bi = function e(o) { var t = this;
                Vn(this, e), qi.forEach(function(i) { t[i] = function() { for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        (e = console)[i].apply(e, ["[".concat(o, "]")].concat(n)) } }) },
            Ui = mr(function(e) { return e.replace(/-[a-z]/g, function(e) { return e[1].toUpperCase() }) }),
            Wi = mr(function(e) { return e.replace(/^[a-z]/, function(e) { return e.toUpperCase() }) }),
            zi = mr(function(e) { return e.replace(/\B[A-Z]/g, function(e) { return "-".concat(e.toLowerCase()) }) }),
            Vi = Object.freeze({ camelize: Ui, capitalize: Wi, hyphenate: zi });

        function $i(e, t, n) { if (pr(e) || !pr(location.href) || e && e.length < 8 || 0 !== e.indexOf("http") && 0 !== e.indexOf("//")) return e; var r = "img" === t ? "/i/" : "/c/";
            0 !== e.indexOf("//") && 0 !== e.indexOf("https") || (r += "s/"); var i = e.split("//");
            i.shift(); var o = i[0].substring(0, i[0].indexOf("/")),
                a = r + (e = i.join("//")); return n && (a = location.protocol + "//" + o.replace(/-/g, "--").replace(/\./g, "-") + ".mipcdn.com" + a), a }

        function Gi(e) { if (!e) return e; if (0 !== e.indexOf("http") && 0 !== e.indexOf("/")) return e; var t = new RegExp("^(http(?:s?):)?(//([^/]+))?/[ic](/s)?/(.*)$", "g").exec(e); if (!t) return e; var n = t[4] ? "https:" : "http:";
            n += t[5] ? "//" + t[5] : ""; return /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- ./?%&=]*)?/.test(n) ? n : e }

        function Ji(e, t) { return Xi.call(e, t) } var Xi = Object.prototype.hasOwnProperty,
            Qi = { fn: yr, dom: Ar, event: qr, rect: Hr, css: Xr, hash: Nr, platform: Jn, parseCacheUrl: Gi, makeCacheUrl: $i, getOriginalUrl: function(e) { e || (e = window.location.href); var t = Gi(e); if (t === e) return t; var n = t.split("#")[0],
                        r = Nr.get("mipanchor"); return n + (r.length ? "#" : "") + r }, isCacheUrl: function(e) { return pr(e) }, EventEmitter: Yn, Gesture: gi, customEmit: wi, customStorage: function(e) { switch (e) {
                        case Ei:
                            return new xi;
                        case bi:
                            return new Ci;
                        case ki:
                            return new Ai } }, naboo: ri, jsonParse: Hi, templates: Di, Deferred: Fi, log: function(e) { return new Bi(e) }, string: Vi },
            Yi = function() {
                function e() { Vn(this, e) } return Gn(e, null, [{ key: "extensions", value: function() { return Ki.getService("extensions") } }, { key: "timer", value: function() { return Ki.getService("timer") } }, { key: "vueCompat", value: function() { return Ki.getService("vue-compat") } }]), e }(),
            Zi = function() {
                function e() { Vn(this, e) } return Gn(e, null, [{ key: "getServices", value: function(e) { var t = e.services; return t || (t = e.services = {}), t } }, { key: "instantiateService", value: function(e) { var t = e.instance; if (t) return t; var n = e.resolve,
                            r = e.context; return t = new e.Constructor(r), e.instance = t, e.context = null, e.Constructor = null, n && n(t), t } }, { key: "registerService", value: function(e, t, n, r, i) { var o = this.getServices(e),
                            a = o[t]; return a || (a = o[t] = { instance: null, promise: null, resolve: null, context: null, Constructor: null }), a.instance || a.Constructor || (a.context = n, a.Constructor = r, (a.resolve || i) && this.instantiateService(a)), a } }, { key: "registerPendingService", value: function(e, t) { var n = this.getServices(e)[t] = { instance: null, context: null, Constructor: null },
                            r = new Fi,
                            i = r.promise,
                            o = r.resolve; return n.promise = i, n.resolve = o, n } }, { key: "getService", value: function(e, t) { var n = this.getServices(e)[t]; return this.instantiateService(n) } }, { key: "getServiceOrNull", value: function(e, t) { var n = this.getServices(e)[t]; return n && (n.instance || n.Constructor) ? this.instantiateService(n) : null } }, { key: "getServicePromiseOrNull", value: function(e, t) { var n = this.getServices(e)[t]; return n ? (n.promise || (n.promise = Promise.resolve(this.instantiateService(n))), n.promise) : null } }, { key: "getServicePromise", value: function(e, t) { var n = this.getServicePromiseOrNull(e, t); return n || this.registerPendingService(e, t).promise } }]), e }(),
            Ki = function(e) {
                function t() { return Vn(this, t), tr(this, nr(t).apply(this, arguments)) } return ir(t, Yi), Gn(t, null, [{ key: "registerService", value: function(e, t, n) { Zi.registerService(window, e, window, t, n) } }, { key: "getService", value: function(e) { return Zi.getService(window, e) } }, { key: "getServiceOrNull", value: function(e) { return Zi.getServiceOrNull(window, e) } }, { key: "getServicePromiseOrNull", value: function(e) { return Zi.getServicePromiseOrNull(window, e) } }, { key: "getServicePromise", value: function(e) { return Zi.getServicePromise(window, e) } }]), t }(); var eo = function(e) { if (Array.isArray(e)) { for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t]; return n } }; var to = function(e) { if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e) }; var no = function() { throw new TypeError("Invalid attempt to spread non-iterable instance") }; var ro = function(e) { return eo(e) || to(e) || no() }; var io = { insertStyleElement: function(e, t, n, r, i) { var o = e.createElement("style"),
                        a = null; return o.textContent = n, i ? o.setAttribute("mip-main", "") : (o.setAttribute("mip-extension", r || ""), a = t.querySelector("style[mip-main]")),
                        function(e, t, n) { n ? n.nextSibling ? e.insertBefore(t, n.nextSibling) : e.appendChild(t) : e.insertBefore(t, e.firstChild) }(t, o, a), o } },
            oo = Qi.dom,
            ao = Qi.css,
            so = "mip-i-space",
            co = { NODISPLAY: "nodisplay", FIXED: "fixed", FIXED_HEIGHT: "fixed-height", RESPONSIVE: "responsive", CONTAINER: "container", FILL: "fill", FLEX_ITEM: "flex-item", INTRINSIC: "intrinsic" },
            uo = { "mip-pix": { width: "1px", height: "1px" }, "mip-stats": { width: "1px", height: "1px" }, "mip-audio": null };

        function lo(e) { return parseFloat(e) }

        function fo(e) { return "number" == typeof e ? e + "px" : e && /^\d+(\.\d+)?(px|em|rem|vh|vw|vmin|vmax|cm|mm|q|in|pc|pt)?$/.test(e) ? /^\d+(\.\d+)?$/.test(e) ? e + "px" : e : void 0 }

        function ho(e) { var t, n, r, i = e.getAttribute("layout"),
                o = e.getAttribute("width"),
                a = e.getAttribute("height"),
                s = e.getAttribute("sizes"),
                c = e.getAttribute("heights"),
                u = i ? function(e) { for (var t in co)
                        if (co[t] === e) return e }(i) : null,
                l = o && "auto" !== o ? fo(o) : o,
                d = a ? fo(a) : null; if (u && u !== co.FIXED && u !== co.FIXED_HEIGHT || l && d || ! function(e) { return e = e.toLowerCase(), void 0 !== uo[e] }(e.tagName)) t = l, n = d;
            else { var f = function(e) { var t = e.tagName.toLowerCase(); if (!uo[t]) { var n = e.ownerDocument,
                            r = t.replace(/^mip-/, ""),
                            i = n.createElement(r);
                        i.controls = !0, i.style.position = "absolute", i.style.visibility = "hidden", n.body.appendChild(i), uo[t] = { width: (i.offsetWidth || 1) + "px", height: (i.offsetHeight || 1) + "px" }, n.body.removeChild(i) } return uo[t] }(e);
                t = l || u === co.FIXED_HEIGHT ? l : f.width, n = d || f.height } switch (r = u || (t || n ? !n || t && "auto" !== t ? n && t && (s || c) ? co.RESPONSIVE : co.FIXED : co.FIXED_HEIGHT : co.CONTAINER), e.classList.add(function(e) { return "mip-layout-" + e }(r)), function(e) { return e === co.FIXED || e === co.FIXED_HEIGHT || e === co.RESPONSIVE || e === co.FILL || e === co.FLEX_ITEM || e === co.INTRINSIC }(r) && e.classList.add("mip-layout-size-defined"), r) {
                case co.NODISPLAY:
                    ao(e, { display: "none" }); break;
                case co.FIXED:
                    ao(e, { width: t, height: n }); break;
                case co.FIXED_HEIGHT:
                    ao(e, { height: n }); break;
                case co.RESPONSIVE:
                    var h = e.spaceElement || e.ownerDocument.createElement(so);
                    h.innerHTML = "space", ao(h, { display: "block", paddingTop: lo(n) / lo(t) * 100 + "%" }), e.insertBefore(h, e.firstChild), e.spaceElement = h; break;
                case co.INTRINSIC:
                    var p = e.spaceElement || oo.create('\n        <mip-i-space class="mip-i-space">\n          <img class="mip-i-intrinsic-space" />\n        </mip-i-space>');
                    p.firstElementChild.setAttribute("src", 'data:image/svg+xml;charset=utf-8,<svg height="'.concat(n, '" width="').concat(t, '" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')), e.insertBefore(p, e.firstChild), e.spaceElement = p; break;
                case co.FILL:
                case co.CONTAINER:
                    break;
                case co.FLEX_ITEM:
                    t && ao(e, { width: t }), n && ao(e, { height: n }) } return e.classList.contains("mip-hidden") && e.classList.remove("mip-hidden"), r } var po = function(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e },
            vo = /^(\w+):\s*([\w-]+)\.([\w-$]+)(?:\((.+)\))?$/,
            mo = /^event(\.[a-zA-Z_][\w_]*)+$/g,
            go = /^mip-/,
            yo = ["executeEventAction", "parse", "checkTarget", "getTarget", "attr"],
            wo = function() {
                function t(e) { Vn(this, t), e && ur(this, lr(e, yo)), this.attr = "on", this.globalTargets = {}, this.installAction() } return Gn(t, [{ key: "installAction", value: function() { this.addGlobalTarget("MIP", this.handleMIPTarget) } }, { key: "handleMIPTarget", value: function(e) { if (e) { var t = e.event && e.event.target ? e.event.target : {},
                                r = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,m".split(","),
                                n = "undefined" != typeof Proxy ? new Proxy({ DOM: t }, { has: function(e, t) { var n = 0 <= r.indexOf(t); return e[t] || !n } }) : {},
                                i = new Function("DOM", "with(this){return ".concat(e.arg, "}")).call(Object.assign(n, e)); if ("setData" === e.handler) MIP.setData(i);
                            else { if ("$set" !== e.handler) throw new Error('Can not find handler "'.concat(e.handler, '" from MIP.'));
                                MIP.$set(i) } } } }, { key: "addGlobalTarget", value: function(e, t) { e && (this.globalTargets[e] = t) } }, { key: "execute", value: function(e, t, n) { if (t) { var r, i = "[" + this.attr + "]";
                            do { if ((r = t.getAttribute(this.attr)) && (this._execute(this.parse(r, e, n)), !(t = t.parentElement))) return;
                                t = Ar.closest(t, i) } while (t) } } }, { key: "checkTarget", value: function(e) { return e && e.tagName && go.test(e.tagName.toLowerCase()) } }, { key: "getTarget", value: function(e) { return document.getElementById(e) } }, { key: "executeEventAction", value: function(e, t) { t.executeEventAction && t.executeEventAction(e) } }, { key: "_execute", value: function(e) { for (var t = 0, n = e.length; t < n; t++) { var r = e[t],
                                i = this.globalTargets[r.id]; if (i) i(r);
                            else { var o = this.getTarget(r.id);
                                this.checkTarget(o) && this.executeEventAction(r, o) } } } }, { key: "parse", value: function(e, t, n) { if ("string" != typeof e) return []; for (var r = function(e) { return '"' === e || "'" === e }, i = function(e) { return " " === e }, o = function(e) { return ":" === e }, a = 0, s = [], c = [], u = 0, l = e.length; u < l; u++) { var d = c[c.length - 1],
                                f = e[u]; if ("(" !== f || r(d)) { if (")" === f && "(" === d) c.pop();
                                else if (r(f) && "\\" !== e[u - 1]) d === f ? c.pop() : c.push(f);
                                else if (o(f) && !c.length) c.push(f);
                                else if (o(d) && !i(e[u + 1])) c.pop();
                                else if (i(f) && !c.length) { var h = e.substring(a, u).trim();
                                    h && s.push(h), a = u } } else c.push(f) } if (c.length) throw new SyntaxError("Can not match ".concat(c[c.length - 1], " in statement: 'on=").concat(e, "'")); var p = e.slice(a).trim();
                        p && s.push(p); for (var v = [], m = 0, g = s.length; m < g; m++) { var y = s[m].replace(/\n/g, "").match(vo); if (y && y[1] === t) { var w = y[2],
                                    b = y[3],
                                    E = y[4]; "MIP" !== w && E && -1 !== E.indexOf("event.") && (E = this.handleArguments(E, n)), v.push({ type: t, id: w, handler: b, arg: E, event: n }) } } return v } }, { key: "split", value: function(e, t) { if ("string" != typeof e || "string" != typeof t) return []; for (var n = function(e) { return '"' === e || "'" === e || "`" === e }, r = { "{": "}", "(": ")", "[": "]" }, i = { "}": "{", ")": "(", "]": "[" }, o = 0, a = [], s = [], c = 0, u = e.length; c < u; c++) { var l = s[s.length - 1],
                                d = e[c]; if (r[d] && !n(l)) s.push(d);
                            else if (i[d]) { var f = s.lastIndexOf(i[d]); - 1 !== f && s.splice(f, s.length - f) } else if (n(d) && "\\" !== e[c - 1]) l === d ? s.pop() : s.push(d);
                            else if (d === t && !s.length) { var h = e.substring(o, c).trim();
                                a.push(h), o = c + 1 } } var p = e.slice(o).trim(); return a.push(p), a } }, { key: "handleArguments", value: function(e, t) { var n = this; if (e) { var r = { event: t },
                                i = function(e) { var t = e.split(".").reduce(function(e, t) { return t && e ? e[t] : void 0 }, r); return n.convertToString(t) }; return this.split(e, ",").map(function(e) { return e.trim().replace(mo, i) }).join(",") } } }, { key: "convertToString", value: function(e) { return "object" === Xn(e) ? JSON.stringify(e) : "string" == typeof e ? '"'.concat(e, '"') : e + "" } }]), t }(),
            bo = !1; try { var Eo = Object.defineProperty({}, "passive", { get: function() { bo = !0 } });
            window.addEventListener("testPassive", null, Eo), window.removeEventListener("testPassive", null, Eo) } catch (e) {} var ko = bo,
            So = "transitionend",
            _o = "animationend";
        void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (So = "webkitTransitionEnd"), void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (_o = "webkitAnimationEnd");

        function Po() { return Ao.innerWidth || xo.clientWidth }

        function Lo() { return Jn.isIOS() ? xo.clientHeight || Ao.innerHeight : Ao.innerHeight || xo.clientHeight } var To, Io = So,
            Co = _o,
            xo = document.documentElement,
            Ao = window,
            Oo = or(function(e) { this.trigger("scroll", e) }, 1e3 / 60),
            Mo = or(function(e) { this.trigger("changed", e) }, 200),
            jo = null,
            Ho = null,
            No = or(function(e) {
                (To = Po()) !== jo && (this.trigger("resize", e), jo = To), Ho = Lo() }, 200),
            Ro = { init: function() { this.scroller = Jn.needSpecialScroll ? document.body : Ao, this.scroller.addEventListener("scroll", function(e) { Oo.call(this, e), Mo.call(this, e) }.bind(this), !1), Jn.isIOS() && (jo = this.getWidth()), Ao.addEventListener("resize", No.bind(this)) }, getScrollTop: function() { return Hr.getScrollTop() }, getScrollLeft: function() { return Hr.getScrollLeft() }, setScrollTop: function(e) { Hr.setScrollTop(e || 1) }, getWidth: function() { return null == jo && (jo = Po()), jo }, getHeight: function() { return null == Ho && (Ho = Lo()), Ho }, getScrollWidth: function() { return Hr.getScrollWidth() }, getScrollHeight: function() { return Hr.getScrollHeight() }, getRect: function() { return Hr.get(this.getScrollLeft(), this.getScrollTop(), this.getWidth(), this.getHeight()) }, isPortrait: function() { return this.getHeight() > this.getWidth() } };
        Yn.mixin(Ro);

        function Do(e) { return "%" + e.charCodeAt(0).toString(16) } var Fo = "mip-page__iframe",
            qo = { header: { title: "", logo: "", buttonGroup: [], show: !1 }, view: { isIndex: !1 } },
            Bo = "router-push",
            Uo = "router-replace",
            Wo = "router-back",
            zo = "router-forward",
            Vo = "page-cross-origin",
            $o = "page-broadcast-event",
            Go = "page-resize",
            Jo = "page-active",
            Xo = "non-exists-page-id",
            Qo = "resize-page",
            Yo = "scroll-to-anchor",
            Zo = "show-page",
            Ko = "hide-page",
            ea = "mippageload",
            ta = "performance-update",
            na = "stability-log",
            ra = "push-state",
            ia = "replace-state",
            oa = /[!'()*]/g,
            aa = /%2C/g,
            sa = function(e) { return encodeURIComponent(e).replace(oa, Do).replace(aa, ",") },
            ca = decodeURIComponent;

        function ua(e) { var t; try { t = function(e) { var i = {}; return (e = e.trim().replace(/^(\?|#|&)/, "")) && e.split("&").forEach(function(e) { var t = e.replace(/\+/g, " ").split("="),
                            n = ca(t.shift()),
                            r = 0 < t.length ? ca(t.join("=")) : null;
                        void 0 === i[n] ? i[n] = r : Array.isArray(i[n]) ? i[n].push(r) : i[n] = [i[n], r] }), i }(e || "") } catch (e) { t = {} } return t }

        function la(r) { var e = r ? Object.keys(r).map(function(t) { var e = r[t]; if (void 0 === e) return ""; if (null === e) return sa(t); if (Array.isArray(e)) { var n = []; return e.forEach(function(e) { void 0 !== e && (null === e ? n.push(sa(t)) : n.push(sa(t) + "=" + sa(e))) }), n.join("&") } return sa(t) + "=" + sa(e) }).filter(function(e) { return 0 < e.length }).join("&") : null; return e ? "?".concat(e) : "" }

        function da(e, t, n) { var r = e.charAt(0); if ("/" === r) return e; if ("?" === r || "#" === r) return t + e; var i = t.split("/");
            n && i[i.length - 1] || i.pop(); for (var o = e.replace(/^\//, "").split("/"), a = 0; a < o.length; a++) { var s = o[a]; ".." === s ? i.pop() : "." !== s && i.push(s) } return "" !== i[0] && i.unshift(""), i.join("/") }

        function fa(e) { var t = "",
                n = "",
                r = e.indexOf("#");
            0 <= r && (t = e.slice(r), e = e.slice(0, r)); var i = e.indexOf("?"); return 0 <= i && (n = e.slice(i + 1), e = e.slice(0, i)), { path: e, query: n, hash: t } }

        function ha() { return window.location.href }

        function pa(e) { return e && e.replace(/#.*$/, "") } var va = /\/?$/,
            ma = /^(http(?:s?):\/\/[^/]+)(.*)/;

        function ga(e, t) { var n = e; "string" == typeof e && (n = { path: e }); var r = n.path.match(ma);
            r && (n.origin = r[1], n.path = r[2]); var i = n.origin || t.origin,
                o = t && t.path || "/",
                a = fa(n.path || ""),
                s = a.path ? da(a.path, o) : o,
                c = ua(a.query),
                u = n.hash || a.hash; return u && "#" !== u.charAt(0) && (u = "#".concat(u)), { origin: i, path: s, query: c, hash: u, meta: n.meta || {}, fullPath: ka({ origin: i, path: s, query: c, hash: u }) } } var ya, wa, ba, Ea = (wa = { origin: (ya = { path: "/" }).origin || window.location.origin, path: ya.path || ya.pathname, query: ya.query || ua(ya.search), hash: ya.hash, meta: ya.meta || {} }, ba = ka(wa), wa.fullPath = ba, Object.freeze(wa));

        function ka(e) { var t = e.href,
                n = e.origin,
                r = void 0 === n ? window.location.origin : n,
                i = e.path,
                o = void 0 === i ? "/" : i,
                a = e.query,
                s = void 0 === a ? {} : a,
                c = e.hash,
                u = void 0 === c ? "" : c; return t || r + o + la(s) + u }

        function Sa(e, t, n) { return t === Ea ? e === t : !!t && (e.origin === t.origin && (!(!e.path || !t.path) && (e.path.replace(va, "") === t.path.replace(va, "") && (n || e.hash === t.hash) && function r() { var i = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}; var o = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}; if (!i || !o) return i === o; var e = Object.keys(i); var t = Object.keys(o); if (e.length !== t.length) return !1; return e.every(function(e) { var t = i[e],
                        n = o[e]; return "object" === Xn(t) && "object" === Xn(n) ? r(t, n) : String(t) === String(n) }) }(e.query, t.query)))) } var _a = gr,
            Pa = "mip-shell-header",
            La = "mip-page-loading-wrapper",
            Ta = "mip-page-fade-header-wrapper",
            Ia = ['<svg t="1530857979993" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3173"', 'xmlns:xlink="http://www.w3.org/1999/xlink">', '<path  fill="currentColor" d="M348.949333 511.829333L774.250667 105.728C783.978667 96 789.333333 83.712 789.333333 71.104c0-12.629333-5.354667-24.917333-15.082666-34.645333-9.728-9.728-22.037333-15.082667-34.645334-15.082667-12.586667 0-24.917333 5.333333-34.624 15.082667L249.557333 471.616A62.570667 62.570667 0 0 0 234.666667 512c0 10.410667 1.130667 25.408 14.890666 40.042667l455.424 435.605333c9.706667 9.728 22.016 15.082667 34.624 15.082667s24.917333-5.354667 34.645334-15.082667c9.728-9.728 15.082667-22.037333 15.082666-34.645333 0-12.608-5.354667-24.917333-15.082666-34.645334L348.949333 511.829333z"', 'p-id="3174"></path>', "</svg>"].join("");

        function Ca(e) { var t = e.fullpath,
                n = e.pageId,
                r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                i = r.onLoad,
                o = r.onError,
                a = document.querySelector(".".concat(Fo, '[data-page-id="').concat(n, '"]'));
            a && a.parentNode.removeChild(a), (a = document.createElement("iframe")).onload = function() { "function" == typeof i && i(a) }, a.onerror = function() { "function" == typeof o && o(a) }; var s = ga(n).origin,
                c = JSON.stringify({ standalone: window.MIP.standalone, isRootPage: !1, isCrossOrigin: s !== window.location.origin, rootName: window.MIP.viewer.rootName }); return a.setAttribute("name", c), window.MIP.standalone || (-1 === t.indexOf("#") ? t += "#mipservice=" + window.mipService : t += "&mipservice=" + window.mipService), a.setAttribute("src", t), a.setAttribute("class", Fo), a.style.height = "".concat(Ro.getHeight(), "px"), a.setAttribute("width", "100%"), a.setAttribute("scrolling", Jn.isIos() ? "no" : "yes"), a.setAttribute("data-page-id", n), a.setAttribute("sandbox", "allow-top-navigation allow-popups allow-scripts allow-forms allow-pointer-lock allow-popups-to-escape-sandbox allow-same-origin allow-modals"), document.body.appendChild(a), a }

        function xa(e) { return "string" == typeof e ? document.querySelector(".".concat(Fo, '[data-page-id="').concat(e, '"]')) : e }

        function Aa() { var e = document.querySelectorAll(".".concat(Fo)); if (e)
                for (var t = 0; t < e.length; t++) Xr(e[t], { display: "none", opacity: 0 }) }

        function Oa(e, t) { return ['<div class="'.concat(Pa, '">'), "<span ".concat(t ? "" : "mip-header-btn", ' class="back-button">'), Ia, "</span>", '<div class="'.concat(Pa, '-logo-title">'), '<img class="'.concat(Pa, '-logo" src="').concat(e, '">'), '<span class="'.concat(Pa, '-title"></span>'), "</div>", "</div>"].join("") }

        function Ma(e) { var t = document.querySelector("#" + La); if (t) return t; var n = e && e.header.logo || ""; return (t = document.createElement("mip-fixed")).id = La, t.setAttribute("class", La), t.innerHTML = Oa(n, !1), document.body.appendChild(t), t }

        function ja(e, t, n, r, i) { Xr(e, "background-color", r), Xr(t.querySelectorAll("svg"), "fill", n), Xr(t.querySelector(".".concat(Pa, "-title")), "color", n), Xr(t.querySelector(".".concat(Pa, "-logo")), "border-color", i), Xr(t.querySelector(".".concat(Pa, "-button-group")), "border-color", i), Xr(t.querySelector(".".concat(Pa, "-button-group .split")), "background-color", i) }

        function Ha(e) { var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                n = t.onlyHeader,
                r = t.transitionContainsHeader,
                i = "#" + La,
                o = document.querySelector(i); if (o || (Ma(), o = document.querySelector(i)), !e) return o; if (!r && n) return Xr(o, "display", "none"), o;
            o.classList.toggle("transition-without-header", !r), r && o.classList.toggle("only-header", !!n); var a = o.querySelector("." + Pa);
            r && e.header.show ? Xr(a, "display", "flex") : Xr(a, "display", "none"); var s = o.querySelector(".".concat(Pa, "-logo")); if (e.header.logo ? (s.setAttribute("src", e.header.logo), Xr(s, "display", "block")) : Xr(s, "display", "none"), e.header.title && (o.querySelector(".".concat(Pa, "-title")).innerHTML = e.header.title), Xr(o.querySelector(".back-button"), "display", e.view.isIndex ? "none" : "flex"), r && e.header.show) { var c = e.header,
                    u = c.color,
                    l = void 0 === u ? "#000000" : u,
                    d = c.borderColor,
                    f = c.backgroundColor,
                    h = void 0 === f ? "#ffffff" : f;
                ja(o.querySelector("." + Pa), o, l, h, d) } return o }

        function Na(e, t) { var n = "#" + Ta,
                r = document.querySelector(n); if (r || (function(e) { var t = document.querySelector("#" + Ta); if (t) return; var n = e && e.header.logo || "";
                    (t = document.createElement("mip-fixed")).id = Ta, t.setAttribute("class", Ta), t.innerHTML = Oa(n, !0), document.body.appendChild(t) }(), r = document.querySelector(n)), !e) return r; var i = r.querySelector(".".concat(Pa, "-logo"));
            e.header.logo ? (i.setAttribute("src", e.header.logo), Xr(i, "display", "block")) : Xr(i, "display", "none"), e.header.title && (r.querySelector(".".concat(Pa, "-title")).innerHTML = e.header.title), Xr(r.querySelector(".back-button"), "display", e.view.isIndex ? "none" : "flex"); var o = t ? t.header : {},
                a = o.color,
                s = void 0 === a ? "#000000" : a,
                c = o.borderColor,
                u = void 0 === c ? "#e1e1e1" : c,
                l = o.backgroundColor,
                d = void 0 === l ? "#ffffff" : l; return ja(r.querySelector("." + Pa), r, s, d, u), r }

        function Ra(e, t) { var n = Na(t);
            e ? (Xr(n, "display", "block"), n.classList.add("fade-enter", "fade-enter-active"), n.offsetWidth, qa(n, "transition", function() { n.classList.remove("fade-enter-to", "fade-enter") }), Fa(function() { n.classList.add("fade-enter-to"), n.classList.remove("fade-enter") })) : Xr(n, "display", "none") }

        function Da() { return !(!window.MIP.standalone || !document.querySelector("mip-shell[disabled]")) }

        function Fa(e) { _a(function() { _a(e) }) }

        function qa(t, e, n) { if (!e) return n();

            function r(e) { e.target === t && o() } var i = "transition" === e ? Io : Co,
                o = function() { t.removeEventListener(i, r), n() };
            t.addEventListener(i, r) }

        function Ba(e) { var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                n = t.duration,
                r = void 0 === n ? 500 : n,
                i = t.scrollTop,
                o = void 0 === i ? 0 : i,
                a = e; if (a === o) return Promise.resolve(); var s = a - o,
                c = 0 < s; return new Promise(function(e) {! function(a, s, c) { var u = Date.now();
                    gr(function e() { var t = Date.now() - u;
                        s((n = t, r = 0, i = 1, o = a, 1.0042954579734844 * Math.exp(-6.404173895841566 * Math.exp(-7.290824133098134 * n / o)) * i + r)) ? gr(e) : c(); var n, r, i, o }) }(r, function(e) { var t = Math.ceil(e * s) + o; return c && a <= t || !c && t <= a ? (Ua(a), !1) : (Ua(t), !0) }, function() { Ua(a), e() }) }) }

        function Ua(e) { Ro.setScrollTop(e) } var Wa = function() {
                function e() { Vn(this, e), Object.assign(this, window.MIP.viewer.pageMeta), this.pageId = void 0, this.fullpath = void 0, this.pageMeta = void 0, this.currentPageId = void 0, this.targetWindow = window, this.children = [] } return Gn(e, [{ key: "initPageId", value: function() { this.fullpath = window.location.href, this.pageId = pa(this.fullpath), this.currentPageId = this.pageId } }, { key: "scrollToHash", value: function(e) { if ("string" == typeof e && "#" === e[0]) { var t = e.slice(1); try { var n = document.getElementById(t) || document.getElementById(decodeURIComponent(t)) || document.querySelector('a[name="'.concat(t, '"]'));
                                n && Ba(n.offsetTop, { scrollTop: Ro.getScrollTop() }) } catch (e) {} } } }, { key: "notifyRootPage", value: function(e) { this.isRootPage ? window.postMessage(e, window.location.origin) : window.parent.postMessage(e, this.isCrossOrigin ? "*" : window.location.origin) } }, { key: "destroy", value: function() {} }, { key: "start", value: function() { var t = this;! function() { if (!document.querySelector("mip-shell") && !document.querySelector("[mip-shell]")) { var e = document.createElement("mip-shell"),
                                    t = document.createElement("script");
                                t.setAttribute("type", "application/json"), t.innerHTML = '{"ignoreWarning": true}', e.appendChild(t), document.body.appendChild(e) } }(), this.initPageId(), ys.on("update", function(e) { e.MIPFirstScreen && t.scrollToHash(window.location.hash) }), window.addEventListener(Yo, function(e) { t.scrollToHash(e.detail[0]) }), this.emitEventInCurrentPage({ name: Zo }); var e = window.location.hash.match(/mipservice=(\d)/);
                        window.mipService = e ? e[1] : "1" } }, { key: "togglePageMask", value: function(e, t) { this.isRootPage || this.emitCustomEvent(window.parent, !0, { name: "mipShellEvents", data: { type: "togglePageMask", data: { toggle: e, options: t } } }) } }, { key: "toggleDropdown", value: function(e) { wi(this.isRootPage ? window : window.parent, "mipShellEvents", { type: "toggleDropdown", data: { toggle: e } }) } }, { key: "toggleFadeHeader", value: function(e, t) { Ra(e, t) } }, { key: "emitCustomEvent", value: function(e, t, n) { t ? e.postMessage({ type: Vo, data: n }, "*") : wi(e, n.name, n.data) } }, { key: "broadcastCustomEvent", value: function(t) { this.isRootPage ? (wi(window, t.name, t.data), this.children.forEach(function(e) { e.targetWindow && e.targetWindow.postMessage({ type: Vo, data: t }, "*") })) : window.parent.postMessage({ type: $o, data: t }, "*") } }, { key: "back", value: function() { this.notifyRootPage({ type: Wo }) } }, { key: "forward", value: function() { this.notifyRootPage({ type: zo }) } }, { key: "push", value: function(e) { var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                        this.notifyRootPage({ type: Bo, data: { route: e, options: t } }) } }, { key: "replace", value: function(e) { var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                        this.notifyRootPage({ type: Uo, data: { route: e, options: t } }) } }, { key: "prerender", value: function(e) { if (!this.isCrossOrigin) return (this.isRootPage ? this : window.parent.MIP.viewer.page).prerenderPages(e);
                        console.warn("\u8de8\u57df MIP \u9875\u9762\u6682\u4e0d\u652f\u6301\u9884\u6e32\u67d3") } }, { key: "emitEventInCurrentPage", value: function(e) { var t = this.getPageById(this.currentPageId);
                        this.emitCustomEvent(t.targetWindow, t.isCrossOrigin, e) } }, { key: "addChild", value: function(e) { for (var t = 0; t < this.children.length; t++)
                            if (this.children[t].pageId === e.pageId) { this.children.splice(t, 1); break } this.children.push(e) } }, { key: "checkIfExceedsMaxPageNum", value: function(e) { if (this.isRootPage) { if (6 <= this.children.length) { for (var t, n = [], r = !1, i = 0; i < this.children.length; i++)
                                    if ((t = this.children[i]).pageId === e || t.pageId === this.currentPageId);
                                    else { var o = xa(t.pageId); if ("1" !== o.getAttribute("prerender")) return void(o && o.parentNode && (o.parentNode.removeChild(o), this.children.splice(i, 1), r = !0));
                                        n.push({ iframe: o, index: i }) } if (!r)
                                    for (var a = 0; a < n.length; a++) { var s = n[a].iframe; if (s && s.parentNode) return s.parentNode.removeChild(s), void this.children.splice(n[a].index, 1) } } } else console.warn("\u8be5\u65b9\u6cd5\u53ea\u80fd\u5728 rootPage \u8c03\u7528") } }, { key: "getPageById", value: function(e) { if (!e) return this; for (var t = 0; t < this.children.length; t++)
                            if (this.children[t].pageId === e) return this.children[t]; return e === this.pageId ? this : null } }, { key: "getElementsInRootPage", value: function() { var e = [".mip-page__iframe", ".mip-page-loading-wrapper", ".mip-page-fade-header-wrapper", "mip-shell", "[mip-shell]", "[mip-shell-inner]", ".mip-shell-header-wrapper", ".mip-shell-more-button-mask", ".mip-shell-more-button-wrapper", ".mip-shell-header-mask", "[mip-global-component]"].map(function(e) { return ":not(".concat(e, ")") }).join(""); return ro(document.querySelectorAll("body > ".concat(e))) } }, { key: "prerenderPages", value: function(e) { var a = this; if (!this.isRootPage) return console.warn("\u8be5\u65b9\u6cd5\u53ea\u80fd\u5728 rootPage \u8c03\u7528"), Promise.reject(); if ("string" == typeof e && (e = [e]), !Array.isArray(e)) return Promise.reject("\u9884\u6e32\u67d3\u53c2\u6570\u5fc5\u987b\u662f\u4e00\u4e2a\u6570\u7ec4"); var s = function(e) { var t; if ((t = a.isRootPage || a.isCrossOrigin ? window : window.parent).MIP_PAGE_META_CACHE[e]) return t.MIP_PAGE_META_CACHE[e]; for (var n = 0; n < t.MIP_SHELL_CONFIG.length; n++) { var r = t.MIP_SHELL_CONFIG[n]; if (r.regexp.test(e)) return t.MIP_PAGE_META_CACHE[e] = r.meta, r.meta } return console.warn("Cannot find MIP Shell Config for current page. Use default instead."), Object.assign({}, qo) }; return Promise.all(e.map(function(e) { if (window.MIP.viewer._isCrossOrigin(e)) return console.warn("\u8de8\u57df MIP \u9875\u9762\u6682\u4e0d\u652f\u6301\u9884\u6e32\u67d3", e), Promise.resolve(); var t = fa(e); if (t.query) { var n = la(ua(t.query)); "?" === n.charAt(0) && (n = n.substring(1, n.length)), e = e.replace(t.query, n) } return function(e) { var i = e.fullpath,
                                    o = e.pageId; return new Promise(function(n, t) { var r = a,
                                        e = xa(o); if (e) { if ("2" === e.contentWindow.MIP.version) return void n(e);
                                        e.parentNode.removeChild(e) } Ca({ fullpath: i + "#prerender=1", pageId: o }, { onLoad: function(e) { e.setAttribute("prerender", "1"); var t = { pageId: o, pageMeta: ur(!0, {}, s(o)), fullpath: i, standalone: window.MIP.standalone, isRootPage: !1, isCrossOrigin: !1, isPrerender: !0 };
                                            t.targetWindow = e.contentWindow, r.addChild(t), r.checkIfExceedsMaxPageNum(o), n(e) }, onError: function(e) { t(e) } }) }) }({ fullpath: e, pageId: pa(e) }) })) } }]), e }(),
            za = "two-way",
            Va = "PM_REQUEST",
            $a = "PM_RESPONSE",
            Ga = {};

        function Ja(e) { var t = Ga[e.data.name]; if (t) t.processMessageEvent(e);
            else
                for (var n in Ga) Ga[n].processMessageEvent(e) } var Xa = function() {
                function t() { var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    Vn(this, t), Yn.mixin(this), this.targetWindow = e.targetWindow || top, this.targetOrigin = e.targetOrigin || "*", this.sourceOrigins = e.sourceOrigins || ["*"], this.timeout = e.timeout || 500, this.name = e.name || window.name, this.defers = {}, this.handlers = {}, Ga[this.name], Ga[this.name] = this, t.bindHandler() } return Gn(t, [{ key: "processMessageEvent", value: function(e) { for (var t = e.origin || e.originalEvent.origin, n = this, r = !1, i = 0; i < n.sourceOrigins.length; i++) { var o = n.sourceOrigins[i]; if ("*" === o) { r = !0; break } if (o === t) { r = !0; break } } if (r) { var a = e.data; if (a)
                                if (a.type === za) { if (!a.sentinel || !a.sessionId) return; if (a.sentinel === Va) { var s = {}; if (n.handlers[a.event]) try { s = n.handlers[a.event].call(n, a) } catch (e) { s = { error: e } }
                                        var c = function(e) { ur(e = e || {}, { type: za, sentinel: $a, sessionId: a.sessionId, name: n.name }), n.getWindow().postMessage(e, n.targetOrigin) };
                                        s && "function" == typeof s.then ? s.then(function(e) { return c(e) }).catch(function(e) { return c({ error: e }) }) : c(s) } else if (a.sentinel === $a) { var u = n.defers[a.sessionId]; if (delete n.defers[a.sessionId], !u) return;
                                        clearTimeout(u.timer), a.error ? u.reject(a.error) : u.resolve(a) } } else { if (!a || !a.event) return;
                                    n.trigger(a.event, a.data) } } } }, { key: "sendMessage", value: function(i, o, a) { var s = this,
                            c = this; return new Promise(function(e, t) { var n = { name: c.name, event: i, sender: "mip/2", data: o },
                                r = (1e3 * (new Date).getTime() + Math.ceil(1e3 * Math.random())).toString(36);
                            a ? (ur(n, { type: za, sentinel: Va, sessionId: r }), c.defers[r] = { resolve: e.bind(s), reject: t.bind(s), timer: setTimeout(function() { delete c.defers[r], t(new Error("timeout")) }, c.timeout) }) : setTimeout(e, 0), c.getWindow().postMessage(n, c.targetOrigin) }) } }, { key: "setHandler", value: function(e, t) { if ("function" != typeof t) throw new Error("Invalid handler for event " + e);
                        this.handlers[e] = t } }, { key: "removeHandler", value: function(e) { this.handlers[e] = void 0 } }, { key: "destory", value: function() { delete Ga[this.name] } }, { key: "getWindow", value: function() { return this.targetWindow instanceof HTMLIFrameElement ? this.targetWindow.contentWindow : this.targetWindow } }], [{ key: "bindHandler", value: function() { window.removeEventListener("message", Ja), window.addEventListener("message", Ja) } }]), t }(),
            Qa = new(function() {
                function e() { Vn(this, e), this._fixedLayer = null, this._count = 0, this._isAndroidUc = Jn.isUc() && !Jn.isIos(), this._fixedElements = [] } return Gn(e, [{ key: "init", value: function() { var e = document.body.querySelectorAll("mip-fixed, mip-semi-fixed");
                        this.setFixedElement(e); var t = this._fixedElements.length,
                            n = window.MIP.viewer.isIframed; if (Jn.isIos() && n) { this.getFixedLayer(); for (var r = 0; r < t; r++) { var i = this._fixedElements[r]; if ("mip-semi-fixed" === i.element.tagName.toLowerCase()) { var o = i.element,
                                        a = o.parentNode,
                                        s = o.nextElementSibling,
                                        c = o.cloneNode(!0);
                                    s ? a.insertBefore(c, s) : a.appendChild(c) } i.element.hasAttribute("still") || this.moveToFixedLayer(i, r) } } window.MIP.standalone || this.doCustomElements() } }, { key: "setFixedElement", value: function(e, t) { for (var n = {}, r = 0; r < e.length; r++) { var i = e[r],
                                o = i.getAttribute("type"),
                                a = fo(i.getAttribute("bottom")),
                                s = fo(i.getAttribute("top")); if ("left" === o && !s && !a || "gototop" === o && "mip-gototop" !== i.firstElementChild.tagName.toLowerCase() || "mip-semi-fixed" !== i.tagName.toLowerCase() && "mip-fixed" !== i.tagName.toLowerCase()) i.parentElement && i.parentElement.removeChild(i);
                            else { "mip-semi-fixed" === i.tagName.toLowerCase() && (i.id || (i.id = "mip-semi-fixed" + this._count), o = "semi-fixed"), Xr(i, { "z-index": 1e4 - this._count }), this._isAndroidUc && Xr(i, { position: "absolute" }), this.setFixedElementRule(i, o); var c = "Fixed" + this._count; if ((n = { id: c, element: i }).element.setAttribute("mipdata-fixedIdx", c), this._count++, this._fixedElements.push(n), t) return this.moveToFixedLayer(n, this._count), 1e4 - this._count } } } }, { key: "getFixedLayer", value: function() { if (this._fixedLayer) return this._fixedLayer;
                        this._fixedLayer = document.createElement("body"), this._fixedLayer.className = "mip-fixedlayer"; var e = this._isAndroidUc ? "100%" : 0,
                            t = this._isAndroidUc ? "100%" : 0; return Xr(this._fixedLayer, { position: "absolute", top: 0, left: 0, height: e, width: t, "pointer-events": "none", overflow: "hidden", animation: "none", "-webkit-animation": "none", border: "none", "box-sizing": "border-box", "box-shadow": "none", display: "block", float: "none", margin: 0, opacity: 1, outline: "none", transform: "none", transition: "none", visibility: "visible", background: "none" }), document.getElementsByTagName("html")[0].appendChild(this._fixedLayer), this._fixedLayer } }, { key: "moveToFixedLayer", value: function(e, t) { var n = e.element;
                        n.parentElement !== this._fixedLayer && (e.placeholder || (Xr(n, { "pointer-events": "initial" }), e.placeholder = document.createElement("mip-i-ph"), e.placeholder.setAttribute("mipdata-fixedIdx", e.id), e.placeholder.style.display = "none"), n.parentElement.replaceChild(e.placeholder, n), this.getFixedLayer().appendChild(n)) } }, { key: "doCustomElements", value: function() { var e = document.styleSheets; if (e)
                            for (var t = 0; t < e.length; t++) { var n = e[t];
                                n.disabled || !n.ownerNode || "STYLE" !== n.ownerNode.tagName || n.ownerNode.hasAttribute("mip-extension") || this._findFixedSelectors(n.cssRules) } } }, { key: "_findFixedSelectors", value: function(e) { for (var t = 0; t < e.length; t++) { var n = e[t],
                                r = n.type; if (1 === r) { if ("*" !== n.selectorText && "fixed" === n.style.position) try { for (var i = n.selectorText, o = document.querySelectorAll(i), a = 0; a < o.length; a++) { var s = o[a]; "MIP-FIXED" !== s.tagName && (s.style.cssText = "display: none!important", console.warn(s, "\u53d1\u73b0 position: fixed \u6837\u5f0f, \u8bf7\u4f7f\u7528 mip-fixed \u7ec4\u4ef6\u4ee3\u66ff")) } } catch (e) { console.warn("Cannot find the selector of custom fixed elements") } } else 4 === r ? this._findFixedSelectors(n.cssRules) : 12 === r && this._findFixedSelectors(n.cssRules) } } }, { key: "setFixedElementRule", value: function(e, t) { switch (t) {
                            case "top":
                            case "bottom":
                                break;
                            case "right":
                            case "left":
                                this.setStyle(e); break;
                            case "semi-fixed":
                                break;
                            case "gototop":
                                e.style.bottom = "90px", e.style.right = "10%"; break;
                            default:
                                e.style.display = "none" } } }, { key: "setStyle", value: function(e) { var t = fo(e.getAttribute("bottom")); if (t) e.style.bottom = t;
                        else { var n = fo(e.getAttribute("top"));
                            n && (e.style.top = n) } } }, { key: "showFixedLayer", value: function(e) { e && Xr(e, { display: "block" }) } }, { key: "hideFixedLayer", value: function(e) { e && Xr(e, { display: "none" }) } }, { key: "setPlaceholder", value: function(e) { var t = document.body.querySelector("div[mip-fixed-placeholder]");
                        t || ((t = document.createElement("div")).setAttribute("mip-fixed-placeholder", ""), Qi.css(t, { position: "relative", display: "none" }), document.body.appendChild(t)), e && Qi.css(t, { display: "block", height: e + "px" }) } }]), e }()),
            Ya = new(function() {
                function e() { var t = this;
                    Vn(this, e), this.isPrerendering = !1, this.isPrerendered = !1, this.queue = [], this.messager = new Xa({ name: Qi.fn.getRootName(window.name) }), "1" === Qi.hash.get("prerender") && (this.isPrerendering = !0, new Promise(function(e) { t.messager.on(Jo, function() { t.isPrerendering = !1,
                                function() { var e = window,
                                        t = e.location,
                                        n = t.hash.replace(/prerender=1&?/, "");
                                    e.history.replaceState("", document.title, t.pathname + t.search + n) }(), e() }), t.messager.sendMessage("prerender-interactive", { time: Date.now() }) }).then(function() { var e; for (t.isPrerendered = !0, ys.recordTiming("MIPPageShow"), ys.lockFirstScreen(), ys.recordTiming("MIPElementBuildStart"); e = t.queue.shift();) e() }).then(function() { ys.recordTiming("MIPElementBuildEnd") })) } return Gn(e, [{ key: "execute", value: function(e, t) { this.isPrerendering && ! function(e) { if (!e || !e.getAttribute) return !1; var t = e.getAttribute("prerender"); return null != e.getAttribute("firstscreen") || null != t && "false" !== t }(t) ? this.queue.push(e) : e() } }]), e }()),
            Za = window,
            Ka = !!ko && { passive: !0 },
            es = { init: function() { var e = this;
                    this.rootName = vr(window.name), this.rootName = vr(window.name); var t = Ya.messager;
                    this.messager = t || new Xa({ name: this.rootName }), this._gesture = new gi(document, { preventX: !1 }), this.setupEventAction(), this.page = new Wa, this.handleBrowserQuirks(), this.page.start(), this.isShow = !0, this._showTiming = Date.now(), this.trigger("show", this._showTiming), (this.fixedElement = Qa).init(), Da() || setTimeout(function() { return e._proxyLink(e.page) }) }, isIframed: Za !== top, show: function() { document.body.setAttribute("mip-ready", ""), Za.MIP.viewer.page.isRootPage && this.sendMessage(ea, { time: Date.now(), title: encodeURIComponent(document.title) }) }, sendMessage: function(e) { var t = this,
                        n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                    Za.MIP.standalone || Ya.execute(function() { Ya.isPrerendered && n.time && (n.time = Date.now()), t.messager.sendMessage(e, n) }), this.sendMessageToBaiduApp(e, n) }, sendMessageToBaiduApp: function(e) { var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}; if (Jn.isBaiduApp() && Jn.isAndroid()) { var n, r = (po(n = {}, ea, "hideloading"), po(n, ta, "perf"), po(n, ra, "click"), po(n, ia, "click"), n)[e];
                        r && window._flyflowNative && window._flyflowNative.exec("bd_mip", "onMessage", JSON.stringify({ type: 5, act: r, data: t }), "") } }, onMessage: function(e, t) { Za.MIP.standalone || this.messager.on(e, t) }, setupEventAction: function() { var e = hr(),
                        t = this.eventAction = new wo;
                    e ? this._gesture.on("tap", function(e) { t.execute("tap", e.target, e) }) : document.addEventListener("click", function(e) { t.execute("tap", e.target, e) }, !1), document.addEventListener("click", function(e) { t.execute("click", e.target, e) }, !1), qr.delegate(document, "input", "change", function(e) { t.execute("change", e.target, e) }) }, open: function(e) { var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                        n = t.isMipLink,
                        r = void 0 === n || n,
                        i = t.replace,
                        o = void 0 !== i && i,
                        a = t.state,
                        s = t.cacheFirst;
                    a || (a = { click: void 0, title: void 0, defaultTitle: void 0 }); var c = ""; - 1 < e.lastIndexOf("#") && (c = e.substring(e.lastIndexOf("#"))); var u = c && -1 < e.indexOf(window.location.origin + window.location.pathname); if (e)
                        if ((this._isCrossOrigin(e) || Da()) && window.MIP.standalone || !r && !u) o ? window.top.location.replace(e) : window.top.location.href = e;
                        else { var l = { url: Gi(/^\/\//.test(e) ? location.protocol + e : "/" === e.charAt(0) || "." === e.charAt(0) ? location.origin + da(e, location.pathname) : e), state: a, click: Date.now() };
                            this.sendMessage(o ? ia : ra, l); var d = { path: window.MIP.standalone ? e : $i(e) };
                            r && (d.meta = { reload: !0, cacheFirst: s, header: { title: l.state.title, defaultTitle: l.state.defaultTitle } }), u || o ? this.page.replace(d, { allowTransition: !0 }) : this.page.push(d, { allowTransition: !0 }) } }, _bindEventCallback: function(e, t) { "show" === e && this.isShow && "function" == typeof t && t.call(this, this._showTiming) }, viewportScroll: function() { var t = this,
                        n = 0,
                        r = 0,
                        i = Ro.getScrollTop(),
                        o = Ro.getScrollHeight(),
                        a = 0,
                        e = Ro.scroller;

                    function s(e) { i = Ro.getScrollTop(), o = Ro.getScrollHeight(), 0 < i && i < o ? (a < i ? r = 1 : i < a && (r = -1), n = a - i, a = i, (10 < n || n < -10) && t.sendMessage("mipscroll", { direct: r, dist: n })) : 0 === i && t.sendMessage("mipscroll", { direct: 0 }) } e.addEventListener("touchstart", function(e) { i = Ro.getScrollTop(), o = Ro.getScrollHeight() }, Ka), e.addEventListener("touchmove", function(e) { return s() }, Ka), e.addEventListener("touchend", function(e) { return s() }) }, _proxyLink: function() { var s = this,
                        c = /^http/,
                        u = /^tel:/;
                    qr.delegate(document, "a", "click", function(e) { var t = this.hasAttribute("mip-link") || "mip" === this.getAttribute("data-type"); if (t || "_blank" !== this.getAttribute("target")) { var n = this.href,
                                r = this.hasAttribute("replace"),
                                i = this.hasAttribute("cache-first"),
                                o = s._getMipLinkData.call(this); if (!Jn.isUc() || !u.test(n))
                                if (c.test(n)) { if (window.MIP.standalone || "2" === window.mipService) s.open(n, { isMipLink: t, replace: r, state: o, cacheFirst: i });
                                    else if (t) { var a = s._getMessageData.call(this);
                                        s.sendMessage(a.messageKey, a.messageData) } else top.location.href = this.href;
                                    e.preventDefault() } else this.setAttribute("target", "_top") } }, !1) }, _getMipLinkData: function() { var e = this.parentNode; return { click: this.getAttribute("data-click") || e.getAttribute("data-click") || void 0, title: this.getAttribute("data-title") || e.getAttribute("title") || void 0, defaultTitle: this.innerText.trim().split("\n")[0] || void 0 } }, _getMessageData: function() { var e = {}; if (e.url = this.href, this.hasAttribute("no-head") && (e.nohead = !0), this.hasAttribute("mip-link")) { var t = this.parentNode;
                        e.title = t.getAttribute("title") || t.innerText.trim().split("\n")[0], e.click = t.getAttribute("data-click") } else e.title = this.getAttribute("data-title") || this.innerText.trim().split("\n")[0], e.click = this.getAttribute("data-click"); return { messageKey: "loadiframe", messageData: e } }, handleBrowserQuirks: function() { var e = this; if (Jn.needSpecialScroll || setTimeout(function() { document.documentElement.classList.add("mip-i-android-scroll"), document.body.classList.add("mip-i-android-scroll") }, 0), Jn.isIos()) { var t = Jn.getOsVersion(); if (t = t ? t.split(".")[0] : "", setTimeout(function() { document.documentElement.classList.add("mip-i-ios-scroll"), document.documentElement.classList.add("mip-i-ios-width"), window.addEventListener("orientationchange", function() { document.documentElement.classList.remove("mip-i-ios-scroll"), setTimeout(function() { document.documentElement.classList.add("mip-i-ios-scroll") }) }) }, 0), this.page.isRootPage || this.fixIOSPageFreeze(), this.isIframed) setTimeout(function() { e.fixSoftKeyboard(), e.viewportScroll() }, 0), this.lockBodyScroll(), ("8" === t && Jn.isUc() && 320 === screen.width || ("9" === t || "10" === t) && Jn.isSafari() || ("8" === t || "9" === t || "10" === t) && (Jn.isUc() || Jn.isBaiduApp() || Jn.isBaidu())) && window.addEventListener("pageshow", function(e) { e.persisted && (document.body.style.display = "none", location.reload()) }) } Jn.isAndroid() && setTimeout(function() { document.documentElement.classList.add("trigger-layout"), document.body.classList.add("trigger-layout") }) }, fixIOSPageFreeze: function() { var t = document.createElement("style"),
                        n = document.head || document.getElementsByTagName("head")[0];
                    t.setAttribute("mip-bouncy-scrolling", ""), t.textContent = "* {-webkit-overflow-scrolling: auto!important;}", Jn.isSafari() || Jn.isChrome() || (window.addEventListener(Zo, function(e) { try { n.removeChild(t) } catch (e) {} }), window.addEventListener(Ko, function(e) { n.appendChild(t) })) }, fixSoftKeyboard: function() { Jn.isAndroid() && window.addEventListener("resize", function() { var e = document.activeElement,
                            t = e.tagName.toLowerCase();!e || "input" !== t && "textarea" !== t || setTimeout(function() { "function" == typeof e.scrollIntoViewIfNeeded ? e.scrollIntoViewIfNeeded() : "function" == typeof e.scrollIntoView && (e.scrollIntoView(), document.body.scrollTop -= 44) }, 250) }) }, lockBodyScroll: function() { Ro.on("scroll", function() { var e = Ro.getScrollTop(),
                            t = Ro.getScrollHeight();
                        0 === e ? Ro.setScrollTop(1) : e === t && Ro.setScrollTop(e - 1) }, Ka), document.documentElement.classList.add("trigger-layout"), document.body.classList.add("trigger-layout"), Ro.setScrollTop(1) }, _isCrossOrigin: function(e) { var t = e; if (1 === t.length || "/" === t.charAt(0) && "/" !== t.charAt(1) || "." === t.charAt(0)) return !1; if (/^http(s?):\/\//i.test(t)) { if (!new RegExp("^" + location.protocol, "i").test(t)) return !0;
                        t = t.replace(/^http(s?):\/\//i, "") } else /^\/\//.test(t) && (t = t.substring(2, t.length)); var n = t.split("/")[0]; return location.host !== n } };
        Yn.mixin(es); var ts = [],
            ns = [];

        function rs(e) { if ("HTML" === e.tagName) return "html.1"; if (e === document.body) return "html.1/body.1"; for (var t = 0, n = e.parentNode.childNodes, r = 0; r < n.length; r++) { var i = n[r]; if (i === e) return rs(e.parentNode) + "/" + e.tagName.toLowerCase() + "." + (t + 1);
                1 === i.nodeType && i.tagName === e.tagName && t++ } } var is = { sendLog: function() { var e = ro(document.querySelectorAll("mip-img[firstscreen]")),
                        t = ro(document.querySelectorAll("mip-img[mip-firstscreen-element]"));
                    e.forEach(function(e) { e.hasAttribute("mip-firstscreen-element") || ns.push(rs(e)) }), t.forEach(function(e) { e.hasAttribute("firstscreen") || ts.push(rs(e)) }); var n = ts.join(",") + "!!" + ns.join(",");
                    es.sendMessage("performance-analysis-log", { type: "fslabel", info: n }) } },
            os = Qi.EventEmitter,
            as = [],
            ss = !1,
            cs = !1,
            us = {},
            ls = new os,
            ds = !1;

        function fs() { var e, t = window.performance; return e = t && t.timing ? t.timing.toJSON ? t.timing.toJSON() : Qi.fn.extend({}, t.timing) : {}, Qi.fn.extend(e, us) }

        function hs(e, t) { us[e] = parseInt(t, 10) || Date.now(), ls.trigger("update", fs()) }

        function ps() { us.MIPFirstScreen || 0 === as.length && hs("MIPFirstScreen") }

        function vs() { if (!Ya.isPrerendering) { var t = Ro.getRect();
                as = as.filter(function(e) { return Ya.isPrerendered ? e._resources.isInViewport(e, t) : e.inViewport() }).map(function(e) { return e.setAttribute("mip-firstscreen-element", ""), e }), ss = !0, ps(), !Ya.isPrerendered && is.sendLog() } }

        function ms() { ds || (hs("MIPDomContentLoaded"), setTimeout(function() { vs() }, 10), ds = !0) } var gs, ys = { start: function(e) { cs || (cs = !0, hs("MIPStart", e), es.on("show", function(e) { hs("MIPPageShow", e) }), document.addEventListener("DOMContentLoaded", ms, !1), document.onreadystatechange = function() { "complete" === document.readyState && ms() }) }, addFsElement: function(e) { ss || as.push(e) }, fsElementLoaded: function(e) {! function(e) { var t = as.indexOf(e); - 1 !== t && as.splice(t, 1) }(e), ps() }, getTiming: fs, recordTiming: hs, lockFirstScreen: vs, on: function() { ls.on.apply(ls, arguments) } },
            ws = {},
            bs = 0,
            Es = new(function() {
                function e() { Vn(this, e), this._rid = bs++, this._eid = 0, ws[this._rid] = {}, this.updateState = this._update.bind(this), this._viewport = Ro, this._rafId = null, this._gesture = new gi(document, { preventX: !1 }), this._bindEvent() } return Gn(e, [{ key: "_bindEvent", value: function() { var r, i = this;
                        this._viewport.on("changed resize", this.updateState), this._gesture.on("swipe", function(e, t) { var n = Math.round(600 * t.velocity);
                            n < 100 && (n = 100), 600 < n && (n = 600), clearTimeout(r), r = setTimeout(i.updateState, n) }) } }, { key: "add", value: function(e) { var t = this;
                        e._eid = this._eid++, ws[this._rid][e._eid] = e, Ya.execute(function() { e.build(), t.updateState() }, e) } }, { key: "remove", value: function(e) { var t = e._eid || e; return !(!isFinite(+t) || !ws[this._rid][t]) && (e.unlayoutCallback && e.unlayoutCallback(), delete ws[this._rid][t], !0) } }, { key: "getResources", value: function() { return ws[this._rid] } }, { key: "getResourcesList", value: function() { return ar(this.getResources()) } }, { key: "setInViewport", value: function(e, t) { e.inViewport() !== t && e.viewportCallback(t) } }, { key: "isInViewport", value: function(e, t) { var n = Hr.getElementRect(e); return e.prerenderAllowed(n, t) || Hr.overlapping(n, t) || 0 === n.bottom && 0 === n.top && 1 === t.top } }, { key: "_update", value: function() { var e = this; return this._rafId || (this._rafId = gr(function() { return e._doRealUpdate() })), this._rafId } }, { key: "_doRealUpdate", value: function() { for (var e = this.getResources(), t = this._viewport.getRect(), n = [];;) { var r = Object.keys(e),
                                i = r.filter(function(e) { return n.indexOf(e) < 0 }); if (n = r, !i.length) break; for (var o = 0, a = i.length; o < a; o++) { var s = e[i[o]]; if (s && s.isBuilt()) try { var c = this.isInViewport(s, t);
                                    this.setInViewport(s, c) } catch (e) { console.warn(e) } } } this._rafId = null } }, { key: "prerenderElement", value: function(e) { e.inViewport && !e.inViewport() && e.viewportCallback && e.viewportCallback(!0) } }]), e }()),
            ks = { mip1: {}, mip2: {} },
            Ss = { get: function(e, t) { switch (e = e.toLowerCase(), t) {
                        case "mip1":
                            return ks.mip1[e];
                        case "mip2":
                            return ks.mip2[e];
                        default:
                            return ks.mip2[e] || ks.mip1[e] || void 0 } }, set: function(e, t, n) { if ("mip2" !== n && "mip1" !== n) throw new Error("type: ".concat(n, " must be mip1 or mip2"));
                    ks[n][e.toLowerCase()] = t } };

        function _s(e) { var t = Object.create(function() { if (gs) return gs; var e = Object.create(HTMLElement.prototype); return e.createdCallback = function() { var e = Ss.get(this.tagName, "mip1");
                    this.classList.add("mip-element"), this._inViewport = !1, this._firstInViewport = !1, this._resources = Es; var t = this.customElement = new e(this);
                    t.createdCallback(), t.hasResources() && ys.addFsElement(this) }, e.attachedCallback = function() { this._layout = ho(this), this.customElement.attachedCallback(), this._resources.add(this) }, e.detachedCallback = function() { this.customElement.detachedCallback(), this._resources.remove(this), ys.fsElementLoaded(this) }, e.attributeChangedCallback = function(e, t, n, r) { var i = arguments,
                        o = this.customElement;
                    Ya.execute(function() { o.attributeChangedCallback.apply(o, ro(i)) }, this) }, e.inViewport = function() { return this._inViewport }, e.viewportCallback = function(e) { this._inViewport = e, this._firstInViewport || (this._firstInViewport = !0, this.customElement.firstInviewCallback()), this.customElement.viewportCallback(e) }, e.isBuilt = function() { return this._built }, e.prerenderAllowed = function() { return this.customElement.prerenderAllowed() }, e.build = function() { if (!this.isBuilt()) try { this.customElement.build(), this._built = !0, wi(this, "build") } catch (e) { wi(this, "build-error", e), console.error(e) } }, e.executeEventAction = function(e) { this.customElement.executeEventAction(e) }, e.resourcesComplete = function() { ys.fsElementLoaded(this) }, gs = e }()); return t.name = e, t }

        function Ps(e, t, n) { if (!Ss.get(e)) { Ss.set(e, t, "mip1"); var r = [],
                    i = _s(e),
                    o = i.createdCallback; return i.createdCallback = function() { o.call(this), r.push(this) },
                    function(e, t) { e && io.insertStyleElement(document, document.head, e, t, !1) }(n, e), document.registerElement(e, { prototype: i }), r } } var Ls = function(e) { return -1 !== Function.toString.call(e).indexOf("[native code]") },
            Ts = e(function(r) {
                function i(e, t, n) { return ! function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0 } catch (e) { return !1 } }() ? r.exports = i = function(e, t, n) { var r = [null];
                        r.push.apply(r, t); var i = new(Function.bind.apply(e, r)); return n && rr(i, n.prototype), i } : r.exports = i = Reflect.construct, i.apply(null, arguments) } r.exports = i }),
            Is = e(function(t) {
                function r(e) { var n = "function" == typeof Map ? new Map : void 0; return t.exports = r = function(e) { if (null === e || !Ls(e)) return e; if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== n) { if (n.has(e)) return n.get(e);
                            n.set(e, t) }

                        function t() { return Ts(e, arguments, nr(this).constructor) } return t.prototype = Object.create(e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), rr(t, e) }, r(e) } t.exports = r });

        function Cs(e, l) { var t = e.split(","),
                d = []; return t.forEach(function(e) { if (0 !== (e = e.replace(/\s+/g, " ").trim()).length) { var t, n, r, i = !1; if (")" === e.charAt(e.length - 1)) { i = !0; var o = 1; for (r = e.length - 2; 0 <= r; r--) { var a = e.charAt(r); if ("(" === a ? o-- : ")" === a && o++, 0 === o) break } var s = r - 1; if (0 < r)
                            for (r--; 0 <= r; r--) { var c = e.charAt(r); if (!("%" === c || "-" === c || "_" === c || "a" <= c && c <= "z" || "A" <= c && c <= "Z" || "0" <= c && c <= "9")) break }
                        if (s <= r) throw new Error('Invalid CSS function in "'.concat(e, '"')) } else
                        for (r = e.length - 2; 0 <= r; r--) { var u = e.charAt(r); if (!("%" === u || "." === u || "a" <= u && u <= "z" || "A" <= u && u <= "Z" || "0" <= u && u <= "9")) break }
                    if (0 <= r ? (t = e.substring(0, r + 1).trim(), n = e.substring(r + 1).trim()) : (n = e, t = void 0), !i) { if (l && !/^\d+(\.\d+)?(px|em|rem|vh|vw|vmin|vmax|%)$/.test(n)) throw new Error("Invalid length or percent value: ".concat(n)); if (!l && !/^\d+(\.\d+)?(px|em|rem|vh|vw|vmin|vmax|cm|mm|q|in|pc|pt)$/.test(n)) throw new Error("Invalid length value: ".concat(n)) } d.push({ mediaQuery: t, size: n }) } }), new xs(d) } var xs = function() {
            function r(e) { if (Vn(this, r), !(0 < e.length)) throw new Error("SizeList must have at least one option");
                this._sizes = e; for (var t = 0; t < e.length; t++) { var n = e[t]; if (t < e.length - 1) { if (!n.mediaQuery) throw new Error("All options except for the last must have a media condition") } else if (n.mediaQuery) throw new Error("The last option must not have a media condition") } } return Gn(r, [{ key: "select", value: function(e) { for (var t = this._sizes, n = t.length - 1, r = 0; r < n; r++) { var i = t[r],
                            o = i.mediaQuery; if (e.matchMedia(o).matches) return i.size } return t[n].size } }]), r }(); var As = function(e) {
            function r(e) { var t;
                Vn(this, r), (t = tr(this, nr(r).call(this, e))).name = t.tagName.toLowerCase(), t._inViewport = !1, t._firstInViewport = !1, t._resources = Es, t._loadingContainer = null, t._loadingElement = null, t._loadingDisabled = void 0, t._mediaQuery = void 0, t._sizeList = void 0, t._heightsList = void 0, t._layout = co.NODISPLAY, t.spaceElement = void 0; var n = Ss.get(t.name, "mip2"); return t.vueCompat = Ki.vueCompat(), t.customElement = new n(er(t)), t.propTypes = t.vueCompat.getPropTypes(t.name, n), t.defaultProps = t.vueCompat.getDefaultProps(t.name, n), t.customElement.props = {}, t.customElement.hasResources() && ys.addFsElement(er(t)), t } return ir(r, e), Gn(r, [{ key: "connectedCallback", value: function() { this.customElement.props = this.getProps(), this.classList.add("mip-element"), this._layout = ho(this), this.applySizesAndMediaQuery(), this.customElement.connectedCallback(), this._resources.add(this) } }, { key: "disconnectedCallback", value: function() { this.customElement.disconnectedCallback(), this._resources && this._resources.remove(this) } }, { key: "attributeChangedCallback", value: function(e, t, n) { var r = Ui(e); if (this.isBuilt() && Ji(this.propTypes, r) && t !== n) { var i = this.customElement.props[r],
                            o = this.vueCompat.parseAttribute(n, this.propTypes[r]),
                            a = "handle".concat(Wi(r), "Change");
                        this.customElement.props[r] = o, "function" != typeof this.customElement[a] || null === t && o === this.defaultProps[r] || this.customElement[a](i, o) } this.customElement.attributeChangedCallback(e, t, n) } }, { key: "layoutCallback", value: function() { return this.toggleLoading(!0), this.customElement.layoutCallback() } }, { key: "unlayoutCallback", value: function() { return this.customElement.unlayoutCallback() } }, { key: "createPlaceholder", value: function() { return this.customElement.createPlaceholderCallback() } }, { key: "getPlaceholder", value: function() { return this.hasAttribute("placeholder") ? null : function(e, t) { for (var n = e.lastElementChild; n; n = n.previousElementSibling)
                            if (t(n)) return n; return null }(this, function(e) { return e.hasAttribute("placeholder") && ! function(e) { return "placeholder" in e }(e) }) } }, { key: "togglePlaceholder", value: function(e) { var t = this.getPlaceholder();
                    t && (e ? t.classList.remove("mip-hidden") : t.classList.add("mip-hidden")) } }, { key: "toggleFallback", value: function(e) { this.classList.toggle("mip-notsupported", e) } }, { key: "isLoadingEnabled", value: function() { return !this.hasAttribute("placeholder") && (!!this.classList.contains("mip-layout-size-defined") && (void 0 === this._loadingDisabled && (this._loadingDisabled = this.hasAttribute("noloading")), !this._loadingDisabled && this.customElement.isLoadingEnabled())) } }, { key: "prepareLoading", value: function() { if (this.isLoadingEnabled() && !this._loadingContainer) { var e = Ar.create('\n        <div class="mip-loading-container mip-fill-content mip-hidden">\n        </div>\n      '),
                            t = Ar.create('\n        <div class="mip-loader">\n          <div class="mip-loader-dot"></div>\n          <div class="mip-loader-dot"></div>\n          <div class="mip-loader-dot"></div>\n        </div>\n      ');
                        e.appendChild(t), this.appendChild(e), this._loadingContainer = e, this._loadingElement = t } } }, { key: "toggleLoading", value: function(e, t) { var n = t && t.cleanup; if (this.isLoadingEnabled() && (this.prepareLoading(), this._loadingContainer && (this._loadingContainer.classList.toggle("mip-hidden", !e), this._loadingElement.classList.toggle("mip-active", e), !e && n))) { var r = this._loadingContainer;
                        this._loadingContainer = null, this._loadingElement = null, this.removeChild(r) } } }, { key: "build", value: function() { if (!this.isBuilt()) try { if (!this.getPlaceholder()) { var e = this.createPlaceholder();
                            e && this.appendChild(e) } this.customElement.build(), this._built = !0, wi(this, "build") } catch (e) { this.error = e, wi(this, "build-error", e), console.error(e) } } }, { key: "isBuilt", value: function() { return this._built } }, { key: "getProps", value: function() { for (var e = this.propTypes, t = this.defaultProps, n = this.vueCompat.getProps(this, e), r = Object.keys(e), i = 0; i < r.length; i++) { var o = r[i]; if (void 0 === n[o] && Ji(t, o)) { var a = t[o];
                            n[o] = "function" == typeof a ? a() : a } } return n } }, { key: "_getSpace", value: function() { return void 0 === this.spaceElement && this._layout === co.RESPONSIVE && (this.spaceElement = this.querySelector("mip-i-space")), this.spaceElement || null } }, { key: "applySizesAndMediaQuery", value: function() { var e = this.ownerDocument.defaultView; if (void 0 === this._mediaQuery && (this._mediaQuery = this.getAttribute("media") || null), this._mediaQuery && this.classList.toggle("mip-hidden-by-media-query", !e.matchMedia(this._mediaQuery).matches), void 0 === this._sizeList) { var t = this.getAttribute("sizes");
                        this._sizeList = t ? Cs(t) : null } if (this._sizeList && Xr(this, "width", this._sizeList.select(e)), void 0 === this._heightsList && this._layout === co.RESPONSIVE) { var n = this.getAttribute("heights");
                        this._heightsList = n ? Cs(n, !0) : null } if (this._heightsList) { var r = this._getSpace();
                        r && Xr(r, "paddingTop", this._heightsList.select(e)) } } }, { key: "getRealChildNodes", value: function() { return ro(this.childNodes).filter(function(e) { return ! function(e) { var t = "string" == typeof e ? e : e.tagName; return !(!t || 0 !== t.toLowerCase().indexOf("mip-i-")) || !(!e.tagName || !(e.hasAttribute("placeholder") || e.hasAttribute("fallback") || e.hasAttribute("overflow"))) }(e) }) } }, { key: "inViewport", value: function() { return this._inViewport } }, { key: "viewportCallback", value: function(e) { var t = this;
                    this.customElement.viewportCallback(e), this._inViewport = e;

                    function n() { t.togglePlaceholder(!1), t.toggleLoading(!1, { cleanup: !0 }) } e && !this._firstInViewport && (this.layoutCallback().then(function() { t.customElement.firstLayoutCompleted(), n() }, function() { t.toggleFallback(!0), n() }), this._firstInViewport = !0, this.customElement.firstInviewCallback()) } }, { key: "executeEventAction", value: function(e) { this.customElement.executeEventAction(e) } }, { key: "prerenderAllowed", value: function(e, t) { return this.customElement.prerenderAllowed(e, t) } }, { key: "resourcesComplete", value: function() { ys.fsElementLoaded(this) } }]), r }(Is(HTMLElement));

        function Os(e, t, n) { if (!Ss.get(e)) { Ss.set(e, t, "mip2"); var a = []; return function(e, t) { e && io.insertStyleElement(document, document.head, e, t, !1) }(n, e), window.customElements.define(e, function(e) {
                    function o() { var e, t;
                        Vn(this, o); for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]; return t = tr(this, (e = nr(o)).call.apply(e, [this].concat(r))), a.push(er(t)), t } return ir(o, As), Gn(o, null, [{ key: "observedAttributes", get: function() { return t.observedAttributes } }]), o }()), a } } var Ms = qr.listen; var js = function() {
            function e() { Vn(this, e), this.extensions = {}, this.currentExtensionId = null, this.timer = Ki.timer(), this.installExtension = this.installExtension.bind(this), this.registerElement = this.registerElement.bind(this), this.registerService = this.registerService.bind(this), this.registerTemplate = this.registerTemplate.bind(this) } return Gn(e, [{ key: "getExtensionHolder", value: function(e) { var t = this.extensions[e]; if (!t) { t = this.extensions[e] = { extension: { elements: {}, services: {} }, elementInstances: [], promise: null, resolve: null, reject: null, loaded: null, error: null, script: null } } return t } }, { key: "getCurrentExtensionHolder", value: function() { return this.getExtensionHolder(this.currentExtensionId || "unknown") } }, { key: "waitFor", value: function(e) { if (!e.promise)
                        if (e.loaded) e.promise = Promise.resolve(e.extension);
                        else if (e.error) e.promise = Promise.reject(e.error);
                    else { var t = new Fi,
                            n = t.promise,
                            r = t.resolve,
                            i = t.reject;
                        e.promise = n, e.resolve = r, e.reject = i } return e.promise } }, { key: "waitForExtension", value: function(e) { return this.waitFor(this.getExtensionHolder(e)) } }, { key: "registerExtension", value: function(e, t) { for (var n = this, r = arguments.length, i = new Array(2 < r ? r - 2 : 0), o = 2; o < r; o++) i[o - 2] = arguments[o]; var a = this.getExtensionHolder(e); try { if (this.currentExtensionId = e, t.apply(void 0, i), document.documentElement.hasAttribute("mip-vue") && !Ki.getServiceOrNull("mip-vue")) return document.querySelector('script[src*="mip-vue.js"]') || function(e) { var t = document.createElement("script");
                            t.async = !0, t.src = e, document.head.appendChild(t) }("https://c.mipcdn.com/static/v2/mip-vue.js"), void Ki.getServicePromise("mip-vue").then(function() { return n.registerExtension.apply(n, [e, t].concat(i)) });
                        this.timer.then(function() { return n.tryToResolveExtension(a) }) } catch (e) { throw this.tryToRejectError(a, e), e } finally { this.currentExtensionId = null } } }, { key: "tryToResolveExtension", value: function(e) { e.elementInstances.every(function(e) { return e.isBuilt() }) && (e.elementInstances.length = 0, e.loaded = !0, e.resolve && e.resolve(e.extension)) } }, { key: "tryToRejectError", value: function(e, t) { e.error = t, e.reject && e.reject(t) } }, { key: "installExtension", value: function(e) { var t = this;
                    Lr(document).then(function() { return t.registerExtension(e.name, e.func, window.MIP) }) } }, { key: "getElementRegistrator", value: function(e) { if ("object" !== Xn(e.implementation)) return e.version && "1" === e.version.split(".")[0] ? Ps : Os; var t = Ki.getServiceOrNull("mip-vue"); return document.documentElement.setAttribute("mip-vue", ""), t && t.registerElement } }, { key: "registerElement", value: function(e, t, n, r) { var o = this,
                        a = this.getCurrentExtensionHolder(),
                        i = { implementation: t, css: n },
                        s = r && r.version && "" + r.version;
                    s && (i.version = s), a.extension.elements[e] || (a.extension.elements[e] = i); var c = this.getElementRegistrator(i); if (c) { var u = c(e, t, n); if (u && u.length) { a.elementInstances = a.elementInstances.concat(u); var l = function(e, t) { var n = u[e]; if (n.isBuilt()) return "continue"; if (n.error) return o.tryToRejectError(a, n.error), "break"; var r = Ms(n, "build", function() { o.tryToResolveExtension(a), r(), i() }),
                                    i = Ms(n, "build-error", function(e) { o.tryToRejectError(a, e.detail[0]), r(), i() }) };
                            e: for (var d = 0, f = u.length; d < f; d++) { switch (l(d)) {
                                    case "continue":
                                        continue;
                                    case "break":
                                        break e } } } } } }, { key: "registerService", value: function(e, t) { this.getCurrentExtensionHolder().extension.services[e] = { implementation: t }, Ki.registerService(e, t, !0) } }, { key: "registerTemplate", value: function(e, t, n) { Di.register(e, t) } }]), e }(); var Hs = function() {
            function e() { Vn(this, e), this.resolved = Promise.resolve(), this.timeoutId = 0, this.canceled = {}, this.startTime = Date.now() } return Gn(e, [{ key: "timeSinceStart", value: function() { return Date.now() - this.startTime } }, { key: "then", value: function(e) { return this.resolved.then(e) } }, { key: "cancelableThen", value: function(e) { var t = this; return this.timeoutId++, this.resolved.then(function() { t.canceled[t.timeoutId] ? delete t.canceled[t.timeoutId] : e() }), "" + this.timeoutId } }, { key: "delay", value: function(e, t) { return setTimeout(e, t) } }, { key: "cancel", value: function(e) { "string" != typeof e ? clearTimeout(e) : this.canceled[e] = !0 } }, { key: "sleep", value: function(t) { var n = this; return new Promise(function(e) { return n.delay(e, t) }) } }, { key: "timeout", value: function(n, e) { var r, i = this,
                        o = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "timeout",
                        t = new Promise(function(e, t) { r = i.delay(function() { return t(new Error(o)) }, n) }); if (!e) return t;

                    function a() { return i.cancel(r) } return e.then(a, a), Promise.race([t, e]) } }, { key: "poll", value: function(n, r) { return new Promise(function(e) { var t = setInterval(function() { n() && (clearInterval(t), e()) }, r) }) } }]), e }(); var Ns = function(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(n); "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) { return Object.getOwnPropertyDescriptor(n, e).enumerable }))), r.forEach(function(e) { po(t, e, n[e]) }) } return t },
            Rs = function() {
                function e() { Vn(this, e), this.getPropsMetadata = mr(this.getPropsMetadata).bind(this) } return Gn(e, [{ key: "getPropType", value: function(e) { return "function" == typeof e ? e : Array.isArray(e) ? e[0] : e && "object" === Xn(e) ? this.getPropType(e.type) : String } }, { key: "getVueExtraPropTypes", value: function(e) { var n = this,
                            t = e.extends,
                            r = void 0 === t ? {} : t,
                            i = e.mixins,
                            o = void 0 === i ? [] : i; return Ns({}, this.getPropTypes(r.name, r), o.reduce(function(e, t) { return Ns({}, e, n.getPropTypes(t.name, t)) }, {})) } }, { key: "getPropsMetadata", value: function(e, t) { var n = { propTypes: {}, defaultProps: {} }; if (!e || !t) return n; "object" === Xn(t) && (n.propTypes = this.getVueExtraPropTypes(t)); var r = t.props; if (Array.isArray(r)) { for (var i = 0; i < r.length; i++) n.propTypes[r[i]] = String; return n } if (!r || "object" !== Xn(r)) return n; for (var o = Object.keys(r), a = 0; a < o.length; a++) { var s = o[a],
                                c = r[s];
                            n.propTypes[s] = this.getPropType(c), c && "object" === Xn(c) && Ji(c, "default") && (n.defaultProps[s] = c.default) } return n } }, { key: "getPropTypes", value: function(e, t) { return this.getPropsMetadata(e, t).propTypes } }, { key: "getDefaultProps", value: function(e, t) { return this.getPropsMetadata(e, t).defaultProps } }, { key: "parseAttribute", value: function(e, t) { if (null != e) { if (t === Number) return parseFloat(e, 10); if (t === Boolean) return "false" !== e; if (t === Array || t === Object) try { return Hi(e) } catch (e) { return }
                            return t !== Date && t !== Function && "function" == typeof t ? this.parseAttribute(e, t(e)) : e } } }, { key: "getPropsFromAttributes", value: function(e, t) { for (var n = {}, r = Object.keys(t), i = 0; i < r.length; i++) { var o = r[i],
                                a = e.getAttribute(zi(o));
                            n[o] = this.parseAttribute(a, t[o]) } return n } }, { key: "getPropsFromJSON", value: function(e, t) { var n = e.querySelector("script[type*=json]"); if (!n) return null; try { for (var r = Hi(n.innerHTML), i = Object.keys(r), o = 0; o < i.length; o++) { var a = i[o]; "string" == typeof r[a] && (r[a] = this.parseAttribute(r[a], t[a])) } return r } catch (e) { return null } } }, { key: "getProps", value: function(e, t) { return Ns({}, this.getPropsFromAttributes(e, t), this.getPropsFromJSON(e, t)) } }]), e }();

        function Ds(e) { return "*" === e ? /.*/ : new RegExp(e) }

        function Fs(e) { e ? e.pattern ? e.meta ? e.meta.header ? e.meta.view || qs("meta.view", "meta.view", e) : qs("meta.header", "meta.header", e) : qs("meta", "meta", e) : qs("pattern", "*", e) : console.warn("\u68c0\u6d4b\u5230\u7a7a\u7684\u8def\u7531\u914d\u7f6e\uff0cMIP \u5c06\u8df3\u8fc7\u8fd9\u6761\u914d\u7f6e") }

        function qs(e, t, n) { console.warn("\u68c0\u6d4b\u5230\u4e00\u6761\u8def\u7531\u914d\u7f6e\u4e2d\u6ca1\u6709\u8bbe\u7f6e ".concat(e, " \u9009\u9879\uff0cMIP \u5c06\u4f7f\u7528 ").concat(t, " \u4ee3\u66ff\u3002\n"), n) } var Bs = ['<svg t="1530857985972" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3393"', 'xmlns:xlink="http://www.w3.org/1999/xlink">', '<path d="M128 512m-128 0a128 128 0 1 0 256 0 128 128 0 1 0-256 0Z" p-id="3394" fill="currentColor"></path>', '<path d="M512 512m-128 0a128 128 0 1 0 256 0 128 128 0 1 0-256 0Z" p-id="3395" fill="currentColor"></path>', '<path d="M896 512m-128 0a128 128 0 1 0 256 0 128 128 0 1 0-256 0Z" p-id="3396" fill="currentColor"></path>', "</svg>"].join(""),
            Us = ['<svg t="1530857971603" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2953"', 'xmlns:xlink="http://www.w3.org/1999/xlink">', '<path  fill="currentColor" d="M586.026667 533.248l208.789333-208.576c9.856-8.874667 15.488-21.248 15.850667-34.858667a53.717333 53.717333 0 0 0-15.829334-39.146666 48.042667 48.042667 0 0 0-36.224-15.872c-14.165333 0-27.584 5.632-37.802666 15.850666L512 459.221333l-208.789333-208.576a48.042667 48.042667 0 0 0-36.245334-15.850666c-14.144 0-27.562667 5.632-37.781333 15.850666A48.085333 48.085333 0 0 0 213.333333 285.504a53.717333 53.717333 0 0 0 15.850667 39.168l208.789333 208.576-208.576 208.853333a48.085333 48.085333 0 0 0-15.850666 34.88 53.717333 53.717333 0 0 0 15.850666 39.146667c9.194667 10.24 22.058667 15.872 36.224 15.872 14.144 0 27.562667-5.632 37.802667-15.850667L512 607.274667l208.597333 208.853333c9.216 10.24 22.08 15.872 36.224 15.872s27.584-5.632 37.802667-15.850667c9.856-8.874667 15.488-21.269333 15.850667-34.88a53.717333 53.717333 0 0 0-15.850667-39.146666l-208.597333-208.853334z"', 'p-id="2954"></path>', "</svg>"].join(""),
            Ws = "mip-shell-header",
            zs = Ws + "-button-group",
            Vs = zs + "-standalone",
            $s = "mip-header-btn",
            Gs = "data-button-name";

        function Js(e, t) { return t ? ['<div class="'.concat(Vs, '" ').concat($s, " ").concat(Gs, '="').concat(e, '">'), "more" === e ? Bs : Us, "</div>"].join("") : ['<div class="button '.concat(e, '" ').concat($s, " ").concat(Gs, '="').concat(e, '">'), "more" === e ? Bs : Us, "</div>"].join("") }

        function Xs(t) { Array.isArray(t) || (t = []);

            function e(e) { var n = [];
                t.forEach(function(e) { var t = function() { var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.name,
                            n = e.text,
                            r = e.link; if (t && n) return ['<div class="mip-shell-button" mip-header-btn data-button-name="'.concat(t, '">'), "".concat(r ? '<a mip-link href="'.concat(r, '">').concat(n, "</a>") : n), "</div>"].join("") }(e);
                    t && n.push(t) }), Xr(e, "height", 48 * n.length), e.innerHTML = n.join("") } var n = document.querySelector(".mip-shell-more-button-mask"),
                r = document.querySelector(".mip-shell-more-button-wrapper"); return n || r ? e(r) : ((n = document.createElement("mip-fixed")).classList.add("mip-shell-more-button-mask"), document.body.appendChild(n), (r = document.createElement("mip-fixed")).classList.add("mip-shell-more-button-wrapper"), e(r), document.body.appendChild(r)), { mask: n, buttonWrapper: r } }

        function Qs(e, t) { var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
                r = n.skipTransition,
                i = n.transitionName,
                o = void 0 === i ? "fade" : i; if (r) Xr(e, "display", t ? "block" : "none");
            else { var a = e.style.display; if (!(t && "block" === a || !t && "none" === a)) { var s = t ? "enter" : "leave";
                    e.classList.add("".concat(o, "-").concat(s), "".concat(o, "-").concat(s, "-active")), Xr(e, "display", "block"), e.offsetWidth, qa(e, "transition", function() { e.classList.remove("".concat(o, "-").concat(s, "-to"), "".concat(o, "-").concat(s, "-active")), Xr(e, "display", t ? "block" : "none") }), Fa(function() { e.classList.add("".concat(o, "-").concat(s, "-to")), e.classList.remove("".concat(o, "-").concat(s)) }) } } } var Ys, Zs, Ks = 1e4;

        function ec(e, t) { Ro.isPortrait() && window.MIP_SHELL_OPTION.allowTransition ? t.newPage ? t.isForward ? function(t, n) { var e, r, i = n.sourcePageId,
                    o = n.targetPageId,
                    a = n.targetPageMeta,
                    s = n.onComplete,
                    c = Ha(a, { transitionContainsHeader: t.transitionContainsHeader });
                c.classList.add("slide-enter", "slide-enter-active"), Xr(c, "display", "block"), t.transitionContainsHeader || ((e = document.querySelector(".mip-shell-header-wrapper .mip-shell-header-logo-title")) && e.classList.add("fade-out"), (r = Na(a)).classList.add("fade-enter", "fade-enter-active"), Xr(r, "display", "block"));
                qa(c, "transition", function() { c.classList.remove("slide-enter-to", "slide-enter-active"), t.transitionContainsHeader || r.classList.remove("fade-enter-to", "fade-enter-active"), Aa(), nc(t, { sourcePageId: i, targetPageId: o }), s && s(); var e = xa(o);
                    Xr(e, "z-index", Ks++), t.afterSwitchPage(n) }), Fa(function() { c.classList.add("slide-enter-to"), c.classList.remove("slide-enter"), t.transitionContainsHeader || (r.classList.add("fade-enter-to"), r.classList.remove("fade-enter")) }) }(e, t) : function(t, n) { var r = n.targetPageId,
                    e = n.targetPageMeta,
                    i = n.sourcePageId,
                    o = n.sourcePageMeta,
                    a = n.onComplete,
                    s = 0;
                nc(t, { targetPageId: r }), r === window.MIP.viewer.page.pageId && (s = t.rootPageScrollPosition); var c = xa(i); if (!c) { document.documentElement.classList.add("mip-no-scroll"), window.MIP.viewer.page.getElementsInRootPage().forEach(function(e) { return e.classList.add("hide") }), a && a(); var u = xa(r); return u && (Ks -= 2, Xr(u, "z-index", Ks++)), t.afterSwitchPage(n) } var l, d, f = Ha(o, { onlyHeader: !0, transitionContainsHeader: t.transitionContainsHeader });
                t.transitionContainsHeader ? Xr(f, "display", "block") : ((l = document.querySelector(".mip-shell-header-wrapper .mip-shell-header-logo-title")) && l.classList.add("fade-out"), Xr(d = Na(e, o), "display", "block"));
                c.classList.add("slide-leave", "slide-leave-active"), t.transitionContainsHeader ? f.classList.add("slide-leave", "slide-leave-active") : d.classList.add("fade-enter", "fade-enter-active");
                Xr(c, { opacity: 1, top: s + "px" }), qa(c, "transition", function() { Xr(c, { display: "none", "z-index": 1e4, top: 0 }), c.classList.remove("slide-leave-to", "slide-leave-active"), t.transitionContainsHeader ? (f.classList.remove("slide-leave-to", "slide-leave-active"), Xr(f, "display", "none")) : d.classList.remove("fade-enter-to", "fade-enter"), a && a(); var e = xa(r);
                    e && (Ks -= 2, Xr(e, "z-index", Ks++)), t.afterSwitchPage(n) }), Fa(function() { c.classList.add("slide-leave-to"), c.classList.remove("slide-leave"), t.transitionContainsHeader ? (f.classList.add("slide-leave-to"), f.classList.remove("slide-leave")) : (d.classList.add("fade-enter-to"), d.classList.remove("fade-enter")) }) }(e, t) : t.isForward ? function(e, t) { var n, r, i = t.sourcePageId,
                    o = t.targetPageId,
                    a = t.targetPageMeta,
                    s = t.onComplete,
                    c = xa(o),
                    u = 0;
                i === window.MIP.viewer.page.pageId && (u = e.rootPageScrollPosition);
                Xr(c, { display: "block", opacity: 1, "z-index": Ks++, top: u + "px" }), c.classList.add("slide-enter", "slide-enter-active"), e.transitionContainsHeader || ((n = document.querySelector(".mip-shell-header-wrapper .mip-shell-header-logo-title")) && n.classList.add("fade-out"), (r = Na(a)).classList.add("fade-enter", "fade-enter-active"), Xr(r, "display", "block"));
                qa(c, "transition", function() { c.classList.remove("slide-enter-to", "slide-enter-active"), e.transitionContainsHeader || r.classList.remove("fade-enter-to", "fade-enter-active"), Aa(), nc(e, { sourcePageId: i, targetPageId: o }), Xr(c, "top", 0), s && s(), e.afterSwitchPage(t) }), Fa(function() { c.classList.add("slide-enter-to"), c.classList.remove("slide-enter"), e.transitionContainsHeader || (r.classList.add("fade-enter-to"), r.classList.remove("fade-enter")) }) }(e, t) : function(e, t) { var n = t.targetPageId,
                    r = t.targetPageMeta,
                    i = t.sourcePageId,
                    o = t.sourcePageMeta,
                    a = t.onComplete,
                    s = xa(n);
                s && (Ks -= 2, Xr(s, { opacity: 1, display: "block", "z-index": Ks++ })); var c = 0;
                nc(e, { targetPageId: n }), n === window.MIP.viewer.page.pageId && (c = e.rootPageScrollPosition); var u = xa(i); if (!u) return document.documentElement.classList.add("mip-no-scroll"), window.MIP.viewer.page.getElementsInRootPage().forEach(function(e) { return e.classList.add("mip-hide") }), a && a(), e.afterSwitchPage(t); var l, d, f = Ha(o, { onlyHeader: !0, transitionContainsHeader: e.transitionContainsHeader });
                e.transitionContainsHeader ? Xr(f, "display", "block") : ((l = document.querySelector(".mip-shell-header-wrapper .mip-shell-header-logo-title")) && l.classList.add("fade-out"), Xr(d = Na(r, o), "display", "block"));
                u.classList.add("slide-leave", "slide-leave-active"), e.transitionContainsHeader ? f.classList.add("slide-leave", "slide-leave-active") : d.classList.add("fade-enter", "fade-enter-active");
                Xr(u, { opacity: 1, top: c + "px" }), qa(u, "transition", function() { Xr(u, { display: "none", "z-index": 1e4, top: 0 }), u.classList.remove("slide-leave-to", "slide-leave-active"), e.transitionContainsHeader ? (f.classList.remove("slide-leave-to", "slide-leave-active"), Xr(f, "display", "none")) : d.classList.remove("fade-enter-to", "fade-enter"), a && a(), e.afterSwitchPage(t) }), Fa(function() { u.classList.add("slide-leave-to"), u.classList.remove("slide-leave"), e.transitionContainsHeader ? (f.classList.add("slide-leave-to"), f.classList.remove("slide-leave")) : (d.classList.add("fade-enter-to"), d.classList.remove("fade-enter")) }) }(e, t) : t.newPage ? tc(e, t) : function(e, t) { tc(e, t) }(e, t) }

        function tc(e, t) { var n = t.sourcePageId,
                r = t.targetPageId,
                i = t.onComplete;
            Aa(), nc(e, { sourcePageId: n, targetPageId: r }), i && i(), Xr(xa(r), "z-index", Ks++), e.afterSwitchPage(t) }

        function nc(e) { var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                n = t.sourcePageId,
                r = t.targetPageId,
                i = window.MIP.viewer.page;
            n === i.pageId && (document.documentElement.classList.add("mip-no-scroll"), i.getElementsInRootPage().forEach(function(e) { return e.classList.add("mip-hide") })), r === i.pageId && (document.documentElement.classList.remove("mip-no-scroll"), i.getElementsInRootPage().forEach(function(e) { return e.classList.remove("mip-hide") }), e.restoreScrollPosition()) }

        function rc(t, e, n) { var r = window.MIP.viewer.page; if (t.resizeAllPages(), Sa(e, n, !0)) r.emitEventInCurrentPage({ name: Yo, data: n.hash });
            else { var i, o = r.getPageById(r.currentPageId),
                    a = ka(n),
                    s = pa(a),
                    c = r.getPageById(s),
                    u = xa(s),
                    l = !!c && c.isRootPage,
                    d = ur(!0, {}, t.findMetaByPageId(s));
                t.priorTitle = n.meta.header && n.meta.header.title, document.title = d.header.title = n.meta.header ? n.meta.header.title || d.header.title || n.meta.header.defaultTitle : d.header.title, i = !d.view.isIndex && window.MIP_SHELL_OPTION.isForward, t.togglePageMask(!1, { skipTransition: !0 }); var f = { targetPageId: s, targetPageMeta: d, sourcePageId: r.currentPageId, sourcePageMeta: o.pageMeta, isForward: i };
                r.currentPageId === r.pageId && t.saveScrollPosition(); var h = l || u && c,
                    p = n.meta && n.meta.cacheFirst && !l; if (!h || n.meta && n.meta.reload && !p) { r.pageId === s && (r.pageId = Xo, r.getElementsInRootPage().forEach(function(e) { return e.parentNode && e.parentNode.removeChild(e) })), c || r.checkIfExceedsMaxPageNum(s); var v, m = { pageId: s, pageMeta: d, fullpath: a, standalone: window.MIP.standalone, isRootPage: !1, isCrossOrigin: n.origin !== window.location.origin },
                        g = !1;
                    Zs = Ys = 0; var y = function() { if (!m.isCrossOrigin && Jn.isAndroid()) var t = v.contentWindow.document,
                            n = 0,
                            r = function() { var e = document.createElement("div"); return e.classList.add("hack-for-android-scroll-mask"), document.body.appendChild(e), e }(),
                            i = setInterval(function() { n++; var e = t.body.clientHeight;
                                t.body.clientHeight !== Ys ? (Ys = e, Zs = 0, function(e) { Xr(e, { opacity: "0.01", display: "block" }), setTimeout(function() { Xr(e, { display: "none", opacity: "" }) }, 20) }(r)) : Zs++, (10 <= Zs || 20 <= n) && clearInterval(i) }, 500) };
                    (Jn.isQQ() || Jn.isQQApp()) && (v = Ca(m, { onLoad: y }), m.targetWindow = v.contentWindow, g = !0, window.MIP_SHELL_OPTION.allowTransition = !1), r.addChild(m), f.newPage = !0, t.beforeSwitchPage(f), f.onComplete = function() { t.currentPageMeta = d, window.MIP_SHELL_OPTION.allowTransition = !1, window.MIP_SHELL_OPTION.isForward = !0, g || (v = Ca(m, { onLoad: y }), m.targetWindow = v.contentWindow), Xr(v, { display: "block", opacity: 1 }); var e = document.querySelector("mip-shell") || document.querySelector("[mip-shell]");
                        e && window.MIP.viewer.eventAction.execute("active", e, {}), r.emitEventInCurrentPage({ name: Ko }), r.currentPageId = s, r.emitEventInCurrentPage({ name: Zo }) }, ec(t, f) } else(Jn.isQQ() || Jn.isQQApp()) && (window.MIP_SHELL_OPTION.allowTransition = !1), t.transitionContainsHeader && t.refreshShell({ pageMeta: d }), (c.isPrerender || u && "1" === u.getAttribute("prerender")) && (f.isPrerender = !0, u.contentWindow.postMessage({ name: window.name, event: Jo }, "*"), c.isPrerender = !1, u.removeAttribute("prerender"), s === r.pageId && (r.pageId = Xo, r.getElementsInRootPage().forEach(function(e) { return e.parentNode && e.parentNode.removeChild(e) }))), f.newPage = !1, f.cacheFirst = n.meta && n.meta.cacheFirst, t.beforeSwitchPage(f), f.onComplete = function() { t.currentPageMeta = d, window.MIP_SHELL_OPTION.allowTransition = !1, window.MIP_SHELL_OPTION.isForward = !0, window.MIP.$recompile(), Xr(u, { display: "block", opacity: 1 }), t.transitionContainsHeader ? Xr(t.$loading, "display", "none") : t.refreshShell({ pageMeta: d }); var e = document.querySelector("mip-shell") || document.querySelector("[mip-shell]");
                    e && window.MIP.viewer.eventAction.execute("active", e, {}), r.emitEventInCurrentPage({ name: Ko }), r.currentPageId = s, r.emitEventInCurrentPage({ name: Zo }) }, ec(t, f) } } window.history && window.history; var ic = window.performance && window.performance.now ? window.performance : Date,
            oc = ac();

        function ac() { return ic.now().toFixed(3) }

        function sc(t, n) { var e = window.history; try { n ? e.replaceState({ key: oc }, "", t) : (oc = ac(), e.pushState({ key: oc }, "", t)) } catch (e) { window.MIP.standalone && window.location[n ? "replace" : "assign"](t) } } var cc = function() {
                function t(e) { var n = this;
                    Vn(this, t), this.router = e, this.current = Ea, this.cb = null; var r = ha();
                    window.addEventListener("popstate", function(e) { var t = ha();
                        n.current === Ea && t === r || n.transitionTo(t) }) } return Gn(t, [{ key: "listen", value: function(e) { this.cb = e } }, { key: "go", value: function(e) { window.history.go(e) } }, { key: "push", value: function(e) { this.transitionTo(e, function(e) { sc(e.fullPath) }) } }, { key: "replace", value: function(e) { this.transitionTo(e, function(e) {! function(e) { sc(e, !0) }(e.fullPath) }) } }, { key: "getCurrentLocation", value: function() { return ha() } }, { key: "transitionTo", value: function(e, t) { var n = ga(e, this.current);
                        Jn.isAndroid() && (Jn.isQQ() || Jn.isQQApp()) ? (t && t(n), this.updateRoute(n)) : (this.updateRoute(n), t && t(n)) } }, { key: "updateRoute", value: function(e) { var t = this.current;
                        this.current = e, this.cb && this.cb(t, e) } }]), t }(),
            uc = function() {
                function t() { var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    Vn(this, t), this.options = e, this.history = new cc(this) } return Gn(t, [{ key: "init", value: function() { var e = this.history,
                            t = e.getCurrentLocation();
                        e.transitionTo(t) } }, { key: "listen", value: function(e) { this.history.listen(e) } }, { key: "push", value: function(e) { window.MIP.standalone ? this.history.push(e) : this.history.replace(e) } }, { key: "replace", value: function(e) { this.history.replace(e) } }, { key: "go", value: function(e) { window.MIP.standalone ? this.history.go(e) : window.MIP.viewer.sendMessage("history-navigate", { step: e }) } }, { key: "back", value: function() { this.go(-1) } }, { key: "forward", value: function() { this.go(1) } }]), t }(),
            lc = null,
            dc = null,
            fc = !1;
        window.MIP_PAGE_META_CACHE = Object.create(null), window.MIP_SHELL_CONFIG = null, window.MIP_SHELL_ROUTES_AUTO_GENERATED = !1; var hc, pc, vc, mc = function(e) {
            function o() { var e, t;
                Vn(this, o); for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]; return (t = tr(this, (e = nr(o)).call.apply(e, [this].concat(r)))).messageHandlers = [], t.alwaysReadConfigOnLoad = !0, t.alwaysUseTitleInShellConfig = !1, t.transitionContainsHeader = !0, t.ignoreWarning = !1, t } return ir(o, Kn), Gn(o, [{ key: "build", value: function() { var t = this;
                    lc = window.MIP.viewer, dc = lc.page; var n, e = this.element.querySelector('script[type="application/json"]'); if (e) try { n = JSON.parse(e.textContent.toString()) || {}, ["alwaysReadConfigOnLoad", "transitionContainsHeader", "ignoreWarning"].forEach(function(e) { void 0 !== n[e] && (t[e] = n[e]) }), n.routes || (!this.ignoreWarning && console.warn("\u68c0\u6d4b\u5230 MIP Shell \u914d\u7f6e\u6ca1\u6709\u5305\u542b `routes` \u6570\u7ec4\uff0cMIP \u5c06\u81ea\u52a8\u751f\u6210\u4e00\u6761\u9ed8\u8ba4\u7684\u8def\u7531\u914d\u7f6e\u3002"), n.routes = [{ pattern: "*", meta: qo }], window.MIP_SHELL_ROUTES_AUTO_GENERATED = !0) } catch (e) {!this.ignoreWarning && console.warn("\u68c0\u6d4b\u5230\u683c\u5f0f\u975e\u6cd5\u7684 MIP Shell \u914d\u7f6e\uff0cMIP \u5c06\u4f7f\u7528\u9ed8\u8ba4\u7684\u914d\u7f6e\u4ee3\u66ff\u3002"), n = { routes: [{ pattern: "*", meta: qo }] }, window.MIP_SHELL_ROUTES_AUTO_GENERATED = !0 } else !this.ignoreWarning && console.warn("\u6ca1\u6709\u68c0\u6d4b\u5230 MIP Shell \u914d\u7f6e\uff0cMIP \u5c06\u4f7f\u7528\u9ed8\u8ba4\u7684\u914d\u7f6e\u4ee3\u66ff\u3002"), n = { routes: [{ pattern: "*", meta: qo }] }, window.MIP_SHELL_ROUTES_AUTO_GENERATED = !0; if (dc.isRootPage) { n.routes.forEach(function(e) {!t.ignoreWarning && Fs(e), e.meta = ur(!0, {}, qo, e.meta || {}), e.regexp = Ds(e.pattern || "*"), e.meta.header.title || (e.meta.header.title = (document.querySelector("title") || {}).innerHTML || "") }), this.processShellConfig(n), window.MIP_SHELL_CONFIG = n.routes; var r = this.element.children,
                            i = [].slice.call(r).slice(1, r.length);
                        0 < i.length && i.forEach(function(e) { e.setAttribute("mip-shell-inner", ""), document.body.appendChild(e) }) } else { var o, a = dc.pageId; if (dc.isCrossOrigin) n.routes.forEach(function(e) {!t.ignoreWarning && Fs(e), e.meta = ur(!0, {}, qo, e.meta || {}), e.regexp = Ds(e.pattern || "*"), e.meta.header.title || (e.meta.header.title = (document.querySelector("title") || {}).innerHTML || ""), e.regexp.test(a) && (o = window.MIP_PAGE_META_CACHE[a] = e.meta) }), window.MIP_SHELL_CONFIG = n.routes, window.MIP_PAGE_META_CACHE = Object.create(null);
                        else if (this.alwaysReadConfigOnLoad) { o = qo; for (var s = 0; s < n.routes.length; s++) { var c = n.routes[s]; if (!this.ignoreWarning && Fs(c), c.regexp = Ds(c.pattern || "*"), c.regexp.test(a)) { c.meta = ur(!0, {}, qo, c.meta || {}), c.meta.header.title || (c.meta.header.title = (document.querySelector("title") || {}).innerHTML || ""), this.processShellConfigInLeaf(n, s), o = window.parent.MIP_PAGE_META_CACHE[a] = c.meta; break } } } o || (o = this.findMetaByPageId(a)), window.parent.MIP_SHELL_ROUTES_AUTO_GENERATED && (window.parent.document.title = o.header.title = (document.querySelector("title") || {}).innerHTML || ""), dc.emitCustomEvent(window.parent, dc.isCrossOrigin, { name: "mipShellEvents", data: { type: "updateShell", data: { pageMeta: o } } }) } } }, { key: "prerenderAllowed", value: function() { return !0 } }, { key: "firstInviewCallback", value: function() { var e = this;
                    this.currentPageMeta = this.findMetaByPageId(dc.pageId), dc.isRootPage && (dc.pageMeta = this.currentPageMeta, this.initShell(), this.initRouter()), setTimeout(function() { dc.isRootPage && e.bindRootEvents(), e.bindAllEvents() }, 0) } }, { key: "disconnectedCallback", value: function() { dc.isRootPage && this.unbindHeaderEvents() } }, { key: "initShell", value: function() { var r = this;
                    this.currentPageMeta.header && this.currentPageMeta.header.show ? (fc = !0, this.createHeader(!0)) : fc = !1, this.renderOtherParts(), setTimeout(function() { fc || r.createHeader(!1); var e = Xs(r.currentPageMeta.header.buttonGroup),
                            t = e.mask,
                            n = e.buttonWrapper;
                        r.$buttonMask = t, r.$buttonWrapper = n, r.$pageMask = function() { var e = document.createElement("mip-fixed"); return e.classList.add(Ws + "-mask"), document.body.appendChild(e), e }(), r.$loading = Ma(r.currentPageMeta), r.renderOtherPartsAsync() }, 0) } }, { key: "createHeader", value: function(e) { this.$wrapper = document.createElement("mip-fixed"), this.$wrapper.setAttribute("type", "top"), this.$wrapper.classList.add("mip-shell-header-wrapper"), e || Xr(this.$wrapper, "display", "none"), this.$el = document.createElement("div"), this.$el.classList.add("mip-shell-header", "transition"), this.renderHeader(this.$el), this.$wrapper.insertBefore(this.$el, this.$wrapper.firstChild), document.body.insertBefore(this.$wrapper, document.body.firstChild) } }, { key: "initRouter", value: function() { var n = new uc;
                    n.init(), n.listen(this.render.bind(this)), this.router = n, lc.onMessage("changeState", function(e) { var t = e.url;
                        n.replace($i(t, "url", !0)) }), lc.onMessage("change-state", function(e) { var t = e.url;
                        n.replace($i(t, "url", !0)) }), window.MIP_SHELL_OPTION = { allowTransition: !1, isForward: !0 }, this.messageHandlers.push(function(e, t) { e === Bo ? (t.options.allowTransition && (window.MIP_SHELL_OPTION.allowTransition = !0), n.push(t.route)) : e === Uo ? (t.options.allowTransition && (window.MIP_SHELL_OPTION.allowTransition = !0), n.replace(t.route)) : e === Wo ? (window.MIP_SHELL_OPTION.allowTransition = !0, window.MIP_SHELL_OPTION.isForward = !1, n.back()) : e === zo && (window.MIP_SHELL_OPTION.allowTransition = !0, n.forward()) }) } }, { key: "bindRootEvents", value: function() { var i = this;
                    this.currentViewportHeight = Ro.getHeight(), this.currentViewportWidth = Ro.getWidth(), this.messageHandlers.push(function(e, t) { e === $o ? dc.broadcastCustomEvent(t) : e === Go && i.resizeAllPages() });
                    setInterval(function() { var e = Ro.getHeight();
                        i.currentViewportHeight !== e && (i.currentViewportWidth = Ro.getWidth(), i.currentViewportHeight = e, i.resizeAllPages()) }, 250), window.addEventListener("mipShellEvents", function(e) { var t = e.detail[0],
                            n = t.type,
                            r = t.data; switch (n) {
                            case "updateShell":
                                i.refreshShell({ pageMeta: r.pageMeta }); break;
                            case "togglePageMask":
                                i.togglePageMask(r.toggle, r.options); break;
                            case "toggleDropdown":
                                i.toggleDropdown(r.toggle); break;
                            case "toggleTransition":
                                i.toggleTransition(r.toggle) } }), this.bindHeaderEvents(), window.MIP.viewer.eventAction.execute("active", this.element, {}) } }, { key: "render", value: function(e, t) { rc(this, e, t) } }, { key: "renderHeader", value: function(e) {! function(e, t) { var n = e.currentPageMeta,
                            r = n.header,
                            i = r.buttonGroup,
                            o = r.title,
                            a = void 0 === o ? "" : o,
                            s = r.logo,
                            c = r.color,
                            u = void 0 === c ? "#000000" : c,
                            l = r.borderColor,
                            d = r.backgroundColor,
                            f = void 0 === d ? "#ffffff" : d;
                        e.priorTitle && !e.alwaysUseTitleInShellConfig && (a = n.header.title = e.priorTitle); var h = "";!n.view.isIndex && (h += ['<a href="javascript:void(0)" class="back-button" '.concat($s, " ").concat(Gs, '="back">'), Ia, "</a>"].join("")), h += ['<div class="'.concat(Ws, '-logo-title">'), "".concat(s ? '<img class="'.concat(Ws, '-logo" src="').concat(s, '">') : ""), '<span class="'.concat(Ws, '-title">').concat(a, "</span>"), "</div>"].join(""); var p = Array.isArray(i) && 0 < i.length,
                            v = !window.MIP.standalone && e.showHeaderCloseButton();
                        p && v ? h += ['<div class="'.concat(zs, '">'), Js("more"), '<div class="split"></div>', Js("close"), "</div>"].join("") : p && !v ? h += Js("more", !0) : !p && v && (h += Js("close", !0)), t.innerHTML = h, ja(t, t, u, f, l) }(this, e) } }, { key: "saveScrollPosition", value: function() { this.rootPageScrollPosition = Ro.getScrollTop() } }, { key: "restoreScrollPosition", value: function() { Ro.setScrollTop(this.rootPageScrollPosition) } }, { key: "resizeAllPages", value: function() { var t = this;
                    Array.prototype.slice.call(document.querySelectorAll(".mip-page__iframe")).forEach(function(e) { e.style.height = "".concat(t.currentViewportHeight, "px") }), dc.broadcastCustomEvent({ name: Qo, data: { height: this.currentViewportHeight } }) } }, { key: "bindHeaderEvents", value: function() {! function(r) { r.headerEventHandler = qr.delegate(r.$el, "[mip-header-btn]", "click", function(e) { var t = this.dataset.buttonName;
                            r.handleClickHeaderButton(t) }), r.buttonEventHandler = qr.delegate(r.$buttonWrapper, "[mip-header-btn]", "click", function(e) { var t = this.dataset.buttonName;
                            r.handleClickHeaderButton(t); var n = this.children && this.children[0];
                            n && "a" === n.tagName.toLowerCase() && n.hasAttribute("mip-link") && r.toggleDropdown(!1) }); var e = document.querySelector("#mip-page-fade-header-wrapper");
                        e && (r.fadeHeaderEventHandler = qr.delegate(e, "[mip-header-btn]", "click", function(e) { "back" === this.dataset.buttonName && (window.MIP_SHELL_OPTION.allowTransition = !0, window.MIP_SHELL_OPTION.isForward = !1, window.MIP.viewer.page.back()) })), r.$buttonMask && (r.$buttonMask.addEventListener("click", function() { return r.toggleDropdown(!1) }), r.$buttonMask.addEventListener("touchmove", function(e) { return e.preventDefault() }, !!ko && { passive: !1 })) }(this) } }, { key: "unbindHeaderEvents", value: function() {! function(e) { e.headerEventHandler && (e.headerEventHandler(), e.headerEventHandler = void 0), e.buttonEventHandler && (e.buttonEventHandler(), e.buttonEventHandler = void 0), e.fadeHeaderEventHandler && (e.fadeHeaderEventHandler(), e.fadeHeaderEventHandler = void 0) }(this) } }, { key: "handleClickHeaderButton", value: function(e) { "back" === e ? (window.MIP_SHELL_OPTION.allowTransition = !0, window.MIP_SHELL_OPTION.isForward = !1, dc.back()) : "more" === e ? this.toggleDropdown(!0) : "close" === e ? window.MIP.viewer.sendMessage("close") : "cancel" === e && this.toggleDropdown(!1), this.handleShellCustomButton(e), dc.emitEventInCurrentPage({ name: "shell-header:click-".concat(e) }) } }, { key: "refreshShell", value: function() { var e = this,
                        t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                        n = t.pageMeta,
                        r = t.pageId,
                        i = t.asyncRefresh; if (this.unbindHeaderEvents(), r && (n = this.findMetaByPageId(r)), (this.currentPageMeta = n).header && n.header.show) { i ? (Ra(!0, n), setTimeout(function() { e.renderHeader(e.$el), Ra(!1), e.bindHeaderEvents() }, 350)) : (this.renderHeader(this.$el), Xr(this.$loading, "display", "none")), this.updateOtherParts(); var o = Xs(n.header.buttonGroup),
                            a = o.mask,
                            s = o.buttonWrapper; if (this.$buttonMask = a, this.$buttonWrapper = s, Xr(this.$wrapper, "display", ""), !i) { if (!this.transitionContainsHeader) { var c = this.$el.querySelector(".mip-shell-header-logo-title");
                                c && c.classList.remove("fade-out"), Ra(!1) } this.bindHeaderEvents() } } else if (Xr(this.$wrapper, "display", "none"), Xr(this.$loading, "display", "none"), !this.transitionContainsHeader) { var u = this.$el.querySelector(".mip-shell-header-logo-title");
                        u && u.classList.remove("fade-out"), Ra(!1) } } }, { key: "toggleDropdown", value: function(e) { Qs(this.$buttonMask, e), Qs(this.$buttonWrapper, e, { transitionName: "slide" }) } }, { key: "togglePageMask", value: function(e) { var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                        n = t.skipTransition,
                        r = t.extraClass;
                    fc && (r && (e ? this.$pageMask.classList.add(r) : this.$pageMask.classList.remove(r)), Qs(this.$pageMask, e, { skipTransition: n })) } }, { key: "toggleDOM", value: function(e, t, n) { Qs(e, t, n) } }, { key: "toggleTransition", value: function(e) { e ? this.$el.classList.add("transition") : this.$el.classList.remove("transition") } }, { key: "bindAllEvents", value: function() { var n = this;!window.MIP.standalone && "scrollRestoration" in window.history && (window.history.scrollRestoration = "manual"), this.currentPageMeta.header.show && document.body.classList.add("with-header"), this.messageHandlers.push(function(e, t) { e === Vo && wi(window, t.name, t.data) }), window.addEventListener("message", function(t) { try { n.messageHandlers.forEach(function(e) { e.call(n, t.data.type, t.data.data || {}) }) } catch (t) {} }, !1) } }, { key: "updateShellConfig", value: function(e) { dc.isRootPage && (window.MIP_SHELL_CONFIG = e.routes, window.MIP_PAGE_META_CACHE = Object.create(null), dc.notifyRootPage({ type: "set-mip-shell-config", data: { shellConfig: e.routes, update: !0 } })) } }, { key: "findMetaByPageId", value: function(e) { var t; if ((t = dc.isRootPage || dc.isCrossOrigin ? window : window.parent).MIP_PAGE_META_CACHE[e]) return t.MIP_PAGE_META_CACHE[e]; for (var n = 0; n < t.MIP_SHELL_CONFIG.length; n++) { var r = t.MIP_SHELL_CONFIG[n]; if (r.regexp.test(e)) return t.MIP_PAGE_META_CACHE[e] = r.meta, r.meta } return console.warn("Cannot find MIP Shell Config for current page. Use default instead."), Object.assign({}, qo) } }, { key: "processShellConfig", value: function(e) {} }, { key: "processShellConfigInLeaf", value: function(e, t) {} }, { key: "handleShellCustomButton", value: function(e) {} }, { key: "renderOtherParts", value: function() {} }, { key: "renderOtherPartsAsync", value: function() {} }, { key: "updateOtherParts", value: function() {} }, { key: "showHeaderCloseButton", value: function() { return !0 } }, { key: "beforeSwitchPage", value: function(e) {} }, { key: "afterSwitchPage", value: function(e) {} }]), o }();

        function gc(e) { this.element = e, this.init && this.init() }! function(d) {
            function f(e, t) { p(e, t) || (q[e] = Math.max(q[e] || 0, t)) }

            function e(e, t) {
                function n(e) { 0 === e.indexOf(".") && r.push(e) } var r = []; if ("string" == typeof e ? n(e) : O(e, function(e) { n(e) }), 0 < r.length) throw new Error("[REQUIRE_FATAL]Relative ID is not allowed in global require: " + r.join(", ")); var i = z.waitSeconds; return i && e instanceof Array && (j && clearTimeout(j), j = setTimeout(o, 1e3 * i)), W(e, t) }

            function o() {
                function r(e, t) { if (!c[e] && !p(e, F)) { c[e] = 1; var n = H[e];
                        n ? (t || !p(e, D) || n.hang) && (a[e] || (a[e] = 1, i.push(e)), O(n.depMs, function(e) { r(e.absId, e.hard) })) : s[e] || (s[e] = 1, o.push(e)) } } var i = [],
                    o = [],
                    a = {},
                    s = {},
                    c = {}; for (var e in q) q[e] >= F && r(e, 1); if (i.length || o.length) throw new Error("[MODULE_TIMEOUT]Hang: " + (i.join(", ") || "none") + "; Miss: " + (o.join(", ") || "none")) }

            function a(e) { O(G, function(t) { O(e, function(e) { u(e, t.deps, t.factory) }) }), G.length = 0 }

            function s(e, t, n) { if (null == n && (null == t ? (n = e, e = null) : (n = t, t = null, e instanceof Array && (t = e, e = null))), null != n) { var r, i = window.opera; if (!e && document.attachEvent && (!i || "[object Opera]" !== i.toString())) { var o = function() { if (re) return re; if (ie && "interactive" === ie.readyState) return ie; for (var e = document.getElementsByTagName("script"), t = e.length; t--;) { var n = e[t]; if ("interactive" === n.readyState) return ie = n } }();
                        r = o && Q[o.getAttribute("data-src")] } e ? u(e, t, n) : r ? O(r, function(e) { u(e, t, n) }) : G[0] = { deps: t, factory: n } } }

            function c() { var e = z.config[this.id]; return e && "object" == Xn(e) ? e : {} }

            function u(e, t, n) { H[e] || (H[e] = { id: e, depsDec: t, deps: t || ["require", "exports", "module"], factoryDeps: [], factory: n, exports: {}, config: c, state: 0, require: r(e), depMs: [], depMkv: {}, depRs: [], hang: 0 }, y(e, N)) }

            function l(a) { var s = H[a]; if (s && !p(a, R)) { var r = s.deps,
                        e = s.factory,
                        c = 0; "function" == typeof e && (c = Math.min(e.length, r.length), !s.depsDec && e.toString().replace(/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm, "").replace(/require\(\s*(['"])([^'"]+)\1\s*\)/g, function(e, t, n) { r.push(n) })); var u = [],
                        l = [];
                    O(r, function(e, t) { var n, r, i = x(e),
                                o = I(i.mod, a);
                            o && !U[o] ? (i.res && (r = { id: e, mod: o, res: i.res }, l.push(e), s.depRs.push(r)), (n = s.depMkv[o]) || (n = { id: i.mod, absId: o, hard: t < c }, s.depMs.push(n), s.depMkv[o] = n, u.push(o))) : n = { absId: o }, t < c && s.factoryDeps.push(r || n) }), y(a, R),
                        function(i) { var o, a = H[i];
                            a.invokeFactory = function() { if (!o && a.state === D) { var n = o = 1; if (O(a.factoryDeps, function(e) { var t = e.absId; return U[t] ? void 0 : (v(t), n = p(t, F)) }), n) { try { var e = a.factory,
                                                t = "function" == typeof e ? e.apply(d, m(a.factoryDeps, { require: a.require, exports: a.exports, module: a })) : e;
                                            null != t && (a.exports = t), a.invokeFactory = null } catch (e) { if (/^\[MODULE_MISS\]"([^"]+)/.test(e.message)) { var r = a.depMkv[RegExp.$1]; return r && (r.hard = 1), void(o = 0) } throw a.hang = 1, e } w(i) } } } }(a), E(u), l.length && s.require(l, function() { O(s.depRs, function(e) { e.absId || (e.absId = I(e.id, a)) }), h() }) } }

            function h() { for (var e in q) { var t = q[e];
                    D <= t && (l(e), n(e)), F <= t && v(e) } }

            function n(e) { var i = {};! function t(e) { if (l(e), !p(e, R)) return !1; if (p(e, D) || i[e]) return !0;
                    i[e] = 1; var n = H[e],
                        r = !0; return O(n.depMs, function(e) { r = t(e.absId) && r }), r && O(n.depRs, function(e) { return r = !!e.absId }), r && (y(e, D), i[e] = 0), r }(e) }

            function p(e, t) { return H[e] && H[e].state >= t }

            function v(e) { var t = H[e];
                t && t.invokeFactory && t.invokeFactory() }

            function m(e, n) { var r = []; return O(e, function(e, t) { "object" == Xn(e) && (e = e.absId), r[t] = n[e] || H[e].exports }), r }

            function g(e, t, n) { if (p(e, t)) n();
                else { var r = J[t][e];
                    r || (r = J[t][e] = []), r.push(n) } }

            function y(e, t) { if (!p(e, t)) { var n = H[e];
                    n.state = t; var r = J[t][e];
                    J[t][e] = null, O(r, function(e) { e() }); var i = z[J[t][":hook"]]; "function" == typeof i && i(n.id, n.deps, n.factory), O((r = V[e]) && r[t], function(e) { e(n.id, n.deps, n.factory) }) } }

            function w(e) { delete q[e], y(e, F) }

            function b(e) { return H[e] ? H[e].state : B[e] ? i : t }

            function E(e, n, i) {
                function o() { if ("function" == typeof n && !r) { var t = 1;
                        O(e, function(e) { return U[e] ? void 0 : t = !!p(e, F) }), t && (r = 1, n.apply(d, m(e, U))) } } var r = 0;
                O(e, function(t) { if (!U[t] && !p(t, F)) { g(t, F, o); var n, r = { id: t, load: function(e) { B[t] || H[t] || k(t, e) }, getModuleState: b };
                        B[t] || H[t] || (O($, function(e) { return void 0 === (n = e(r, h)) }), "string" == typeof n ? k(t, n) : !1 !== n && (0 < t.indexOf("!") ? function(n, r) {
                            function i(e) { t.exports = e || !0, w(n) } var e = P(n); if (e) return k(e); var o = x(n),
                                t = { id: n, state: R };
                            H[n] = t, i.fromText = function(e, t) { new Function(t)(), a([e]) },
                                function(e) { var t = r ? H[r].require : W;
                                    e.load(o.res, t, i, c.call({ id: n })) }(W(o.mod)) }(t, i) : k(t))) } }), o() }

            function k(e, n) {
                function t() { Q[n] || (Q[n] = []), Q[n].push(e),
                        function(e, t, n) {
                            function r() { var e = i.readyState;
                                (void 0 === e || /^(loaded|complete)$/.test(e)) && (i.onload = i.onreadystatechange = null, i = null, n()) } if (!X[e]) { X[e] = 1; var i = document.createElement("script");
                                i.setAttribute("data-src", e), i.src = e, i.async = !0, i.readyState ? i.onreadystatechange = r : i.onload = r; var o = z.onNodeCreated; "function" == typeof o && o(i, z, t, e), re = i, se ? ae.insertBefore(i, se) : ae.appendChild(i), re = null } }(n, e, function() { var t;
                            i ? ("function" == typeof i.init && (t = i.init.apply(d, m(o, U))), null == t && i.exports && (t = d, O(i.exports.split("."), function(e) { return !!(t = t[e]) })), s(e, o, function() { return t || {} })) : a(Q[n]);
                            h() }) } B[e] = 1; var r = P(e) || e;
                n = n || T(r + ".js"); var i = z.shim[e];
                i instanceof Array && (z.shim[e] = i = { deps: i }); var o = i && (i.deps || []);
                o ? (O(o, function(e) { z.shim[e] || (z.shim[e] = {}) }), W(o, t)) : t() }

            function S(e, t) { var n = []; for (var r in e) e.hasOwnProperty(r) && n.push({ k: r, v: e[r], reg: "*" === r && t ? /^/ : A(r) }); return n.sort(M), n }

            function _() {
                function e(e) { e instanceof RegExp ? te.push([e, a]) : ee[C(e)] = I(a) } z.baseUrl = z.baseUrl.replace(/\/$/, "") + "/", Y = S(z.paths), O(K = S(z.map, 1), function(e) { e.v = S(e.v) }); var t = K[K.length - 1];
                t && "*" === t.k && O(K, function(e) { e !== t && (e.v = e.v.concat(t.v)) }); var n = {},
                    r = z.packages.length; for (Z = []; r--;) { var i, o = z.packages[r]; switch (Xn(o)) {
                        case "string":
                            i = { name: o.split("/")[0], location: o }; break;
                        case "object":
                            i = { name: o.name, location: o.location, main: o.main } } n[i.name] || (n[i.name] = 1, i.location = i.location || i.name, i.main = (i.main || "main").replace(/\.js$/i, ""), i.reg = A(i.name), Z.push(i)) } for (var a in Z.sort(M), ne = S(z.urlArgs, 1), ee = {}, te = [], z.bundles) O(z.bundles[a], e) }

            function P(t) { var n = ee[t]; return n || O(te, function(e) { return e[0].test(t) ? (n = e[1], !1) : void 0 }), n }

            function L(t, e, n) { O(e, function(e) { return e.reg.test(t) ? (n(e.v, e.k, e), !1) : void 0 }) }

            function T(e, t) { var n = /(\.[a-z0-9]+)$/i,
                    r = /(\?[^#]*)$/,
                    i = "",
                    o = e,
                    a = "";
                r.test(e) && (a = RegExp.$1, e = e.replace(r, "")), n.test(e) && (i = RegExp.$1, o = e.replace(n, "")), null != t && (o = I(o, t)); var s, c = o; return L(o, Y, function(e, t) { c = c.replace(t, e), s = 1 }), s || L(o, Z, function(e, t, n) { c = c.replace(n.name, n.location) }), /^([a-z]{2,10}:\/)?\//i.test(c) || (c = z.baseUrl + c), c += i + a, L(o, ne, function(e) { c += (0 < c.indexOf("?") ? "&" : "?") + e }), c }

            function r(l) {
                function o(e, s) { var c = [],
                        u = []; return O(e, function(e, t) { var n = x(e),
                            r = I(n.mod, l),
                            i = n.res,
                            o = r; if (i) { var a = r + "!" + i;
                            0 !== i.indexOf(".") && P(a) ? r = o = a : o = null } u[t] = o, f(r, s), c.push(r) }), { mods: c, ids: u } }

                function e(n, e) { if ("string" == typeof n) { if (!i[n]) { var t = I(n, l); if (v(t), !p(t, F)) throw new Error('[MODULE_MISS]"' + t + '" is not exists!');
                            i[n] = H[t].exports } return i[n] } if (n instanceof Array) { var r = o(n, F);
                        E(r.mods, function() { O(r.ids, function(e, t) { null == e && f(e = r.ids[t] = I(n[t], l), F) }), E(r.ids, e, l), h() }, l), h() } } var i = {}; return e.toUrl = function(e) { return T(e, l || "") }, e.fetch = function(e, t) {
                    function n() {++r >= e.length && t() } var r = 0,
                        i = o(e, D);
                    O(i.mods, function(e) { g(e, D, n) }), E(i.mods), h() }, e }

            function I(e, t) { if (!e) return "";
                t = t || ""; var n = x(e); if (!n) return e; var r = n.res,
                    i = function(e, t) { if (0 !== e.indexOf(".")) return e; for (var n = t.split("/").slice(0, -1).concat(e.split("/")), r = [], i = 0; i < n.length; i++) { var o = n[i]; switch (o) {
                                case ".":
                                    break;
                                case "..":
                                    r.length && ".." !== r[r.length - 1] ? r.pop() : r.push(o); break;
                                default:
                                    o && r.push(o) } } return r.join("/") }(n.mod, t); if (L(t, K, function(e) { L(i, e, function(e, t) { i = i.replace(t, e) }) }), i = C(i), r) { var o = p(i, F) && W(i);
                    r = o && o.normalize ? o.normalize(r, function(e) { return I(e, t) }) : I(r, t), i += "!" + r } return i }

            function C(n) { return O(Z, function(e) { var t = e.name; return t === n ? (n = t + "/" + e.main, !1) : void 0 }), n }

            function x(e) { var t = e.split("!"); return t[0] ? { mod: t[0], res: t[1] } : void 0 }

            function A(e) { return new RegExp("^" + e + "(/|$)") }

            function O(e, t) { if (e instanceof Array)
                    for (var n = 0, r = e.length; n < r && !1 !== t(e[n], n); n++); }

            function M(e, t) { var n = e.k || e.name,
                    r = t.k || t.name; return "*" === r ? -1 : "*" === n ? 1 : r.length - n.length } var j, H = {},
                t = -1,
                i = 0,
                N = 1,
                R = 2,
                D = 3,
                F = 4,
                q = {},
                B = {},
                U = { require: e, exports: 1, module: 1 },
                W = r(),
                z = { baseUrl: "./", paths: {}, config: {}, map: {}, packages: [], shim: {}, waitSeconds: 0, bundles: {}, urlArgs: {} };
            e.version = "2.2.1", e.toUrl = W.toUrl, e.fetch = W.fetch, e.ModuleState = { NOT_FOUND: t, LOADING: i, PRE_DEFINED: N, ANALYZED: R, PREPARED: D, DEFINED: F }; var V = {};
            e.listenModuleStateChange = function(e, t, n) { if ("function" == typeof n && N <= t && t <= F)
                    if (p(e, t)) { var r = H[e];
                        n(r.id, r.deps, r.factory) } else { var i = V[e];
                        i || (i = V[e] = {}), i[t] = i[t] || [], i[t].push(n) } }, e.unlistenModuleStateChange = function(e, t, n) { var r = V[e]; if (r)
                    if (n)
                        for (var i = r[t], o = i && i.length; o--;) i[o] === n && i.splice(o, 1);
                    else r[t] = null }, e.undef = function(e) { delete B[e], delete H[e] }; var $ = [];
            e.addLoader = function(e) { "function" == typeof e && $.push(e) }, e.removeLoader = function(e) { for (var t = $.length; t--;) e === $[t] && $.splice(t, 1) }; var G = [];
            s.amd = {}; var J = {};
            J[R] = { ":hook": "onModuleAnalyzed" }, J[F] = { ":hook": "onModuleDefined" }, J[N] = { ":hook": "onModulePreDefined" }, J[D] = { ":hook": "onModulePrepared" }; var X = {},
                Q = {};
            e.config = function(e) { if (e) { for (var t in e) { var n = e[t],
                            r = z[t]; if (0 === t.indexOf("on")) z[t] = n;
                        else if ("urlArgs" === t && "string" == typeof n) z.urlArgs["*"] = n;
                        else if (r instanceof Array) r.push.apply(r, n);
                        else if (null != r)
                            if ("object" == Xn(r))
                                for (var i in n) r[i] = n[i];
                            else z[t] = n } _() } }, _(); var Y, Z, K, ee, te, ne, re, ie, oe, ae = document.getElementsByTagName("head")[0],
                se = document.getElementsByTagName("base")[0];
            se && (ae = se.parentNode), hc || (hc = s, "function" != typeof pc && (e.config(pc), pc = e), "function" != typeof vc && (e.config(vc), vc = e), "undefined" != typeof requirejs && "function" != typeof requirejs && e.config(requirejs)),
                function() { for (var e = document.getElementsByTagName("script"), t = e.length; t--;) { var n = e[t]; if (oe = n.getAttribute("data-main")) break } }(), oe && setTimeout(function() { e([oe]) }, 4) }(window), window.define = hc, window.require = pc, window.esl = vc, gc.prototype.applyFillContent = function(e, t) { e.classList.add("mip-fill-content"), t && e.classList.add("mip-replaced-content") }, gc.prototype.createdCallback = function() {}, gc.prototype.attachedCallback = function() {}, gc.prototype.detachedCallback = function() {}, gc.prototype.attributeChangedCallback = function() {}, gc.prototype.firstInviewCallback = function() {}, gc.prototype.viewportCallback = function() {}, gc.prototype.prerenderAllowed = function() { return !1 }, gc.prototype.hasResources = function() { return !1 }, gc.prototype.build = function() {}, gc.prototype.expendAttr = function(e, t) { for (var n = 0; n < e.length; n++) { var r = e[n]; if (this.element.hasAttribute(r)) { var i = this.element.getAttribute(r);
                    t.setAttribute ? t.setAttribute(r, i) : t[r] = i } } return t }, gc.prototype.addEventAction = function() { var e = this._actionEvent;
            e || (e = this._actionEvent = new Yn).setEventContext(this), e.on.apply(e, arguments) }, gc.prototype.executeEventAction = function(e) { var t = this._actionEvent;
            e && t && t.trigger(e.handler, e.event, e.arg) }, gc.prototype.resourcesComplete = function() { this.element.resourcesComplete() }; var yc = { create: function() {
                function e(e) { gc.call(this, e) } return e.prototype = Object.create(gc.prototype), e } };
        window.require.config({ paths: { "searchbox/openjs/aio": "https://m.baidu.com/static/searchbox/openjs/aio.js?v=201606", jquery: "https://c.mipcdn.com/static/deps/jquery", zepto: "https://c.mipcdn.com/static/deps/zepto" } }), window.define("util", function() { return Qi }), window.define("viewer", function() { return es }), window.define("viewport", function() { return Ro }), window.define("templates", function() { return Di }), window.define("customElement", function() { return yc }), window.define("performance", function() { return ys }), window.define("utils/customStorage", function() { return Qi.customStorage }), window.define("fetch-jsonp", function() { return window.fetchJsonp }), window.define("fixed-element", function() { return Qa }), window.define("hash", function() { return Nr }), window.define("dom/event", function() { return Qi.event }), window.define("mip", function() { return window.MIP }), window.define("naboo", function() { return Qi.naboo }), window.define("dom/css-loader", function() { return io }), window.define("dom/css", function() { return Qi.css }), window.define("dom/dom", function() { return Qi.dom }), window.define("dom/rect", function() { return Qi.rect }), window.define("utils/event-action", function() { return wo }), window.define("utils/event-emitter", function() { return Qi.EventEmitter }), window.define("utils/fn", function() { return Qi.fn }), window.define("utils/platform", function() { return Qi.platform }), window.define("utils/gesture", function() { return Qi.Gesture }), We(We.P + We.R, "Promise", { finally: function(t) { var n = w(this, je.Promise || Me.Promise),
                    e = "function" == typeof t; return this.then(e ? function(e) { return K(n, t()).then(function() { return e }) } : t, e ? function(e) { return K(n, t()).then(function() { throw e }) } : t) } });

        function wc(e, t, n) { t in e ? De.f(e, t, Ae(0, n)) : e[t] = n } We(We.S + We.F * !de(function(e) {}), "Array", { from: function(e) { var t, n, r, i, o = vn(e),
                    a = "function" == typeof this ? this : Array,
                    s = arguments.length,
                    c = 1 < s ? arguments[1] : void 0,
                    u = void 0 !== c,
                    l = 0,
                    d = O(o); if (u && (c = _e(c, 2 < s ? arguments[2] : void 0, 2)), null == d || a == Array && y(d))
                    for (n = new a(t = Ue(o.length)); l < t; l++) wc(n, l, u ? c(o[l], l) : o[l]);
                else
                    for (i = d.call(o), n = new a; !(r = i.next()).done; l++) wc(n, l, u ? p(i, c, [r.value, l], !0) : r.value); return n.length = l, n } }); var bc = He("unscopables"),
            Ec = Array.prototype;
        null == Ec[bc] && Fe(Ec, bc, {});

        function kc(e) { Ec[bc][e] = !0 }

        function Sc(e, t) { return { value: t, done: !!e } } var _c = {};
        Fe(_c, He("iterator"), function() { return this });

        function Pc() { return this }

        function Lc(e, t, n, r, i, o, a) {
            function s(e) { if (!Ac && e in p) return p[e]; switch (e) {
                    case "keys":
                    case Oc:
                        return function() { return new n(this, e) } } return function() { return new n(this, e) } }! function(e, t, n) { e.prototype = jt(_c, { next: Ae(1, n) }), te(e, t + " Iterator") }(n, t, r); var c, u, l, d = t + " Iterator",
                f = i == Oc,
                h = !1,
                p = e.prototype,
                v = p[xc] || p["@@iterator"] || i && p[i],
                m = v || s(i),
                g = i ? f ? s("entries") : m : void 0,
                y = "Array" == t && p.entries || v; if (y && (l = Cc(y.call(new e))) !== Object.prototype && l.next && (te(l, d, !0), "function" != typeof l[xc] && Fe(l, xc, Pc)), f && v && v.name !== Oc && (h = !0, m = function() { return v.call(this) }), (Ac || h || !p[xc]) && Fe(p, xc, m), P[t] = m, P[d] = Pc, i)
                if (c = { values: f ? m : s(Oc), keys: o ? m : s("keys"), entries: g }, a)
                    for (u in c) u in p || qe(p, u, c[u]);
                else We(We.P + We.F * (Ac || h), t, c); return c } var Tc = it("IE_PROTO"),
            Ic = Object.prototype,
            Cc = Object.getPrototypeOf || function(e) { return e = vn(e), Oe(e, Tc) ? e[Tc] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? Ic : null },
            xc = He("iterator"),
            Ac = !([].keys && "next" in [].keys()),
            Oc = "values",
            Mc = Lc(Array, "Array", function(e, t) { this._t = rt(e), this._i = 0, this._k = t }, function() { var e = this._t,
                    t = this._k,
                    n = this._i++; return !e || n >= e.length ? (this._t = void 0, Sc(1)) : Sc(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]]) }, "values");
        P.Arguments = P.Array, kc("keys"), kc("values"), kc("entries"), We(We.S, "Object", { create: jt });

        function jc(e, t) { var n = (je.Object || {})[e] || Object[e],
                r = {};
            r[e] = t(n), We(We.S + We.F * Ie(function() { n(1) }), "Object", r) } var Hc = mt.onFreeze;
        jc("freeze", function(t) { return function(e) { return t && Le(e) ? t(Hc(e)) : e } }), jc("getPrototypeOf", function() { return function(e) { return Cc(vn(e)) } }), jc("keys", function() { return function(e) { return Lt(vn(e)) } });

        function Nc(e, t) { if (!Le(e) || e._t !== t) throw TypeError("Incompatible receiver, " + t + " required!"); return e }

        function Rc(e, t) { var n, r = qc(t); if ("F" !== r) return e._i[r]; for (n = e._f; n; n = n.n)
                if (n.k == t) return n }

        function Dc(e, t) { if (Te(e), !Le(t) && null !== t) throw TypeError(t + ": can't set as prototype!") } var Fc = De.f,
            qc = mt.fastKey,
            Bc = Ne ? "_s" : "size",
            Uc = { getConstructor: function(e, o, n, r) { var i = e(function(e, t) { g(e, i, o, "_i"), e._t = o, e._i = jt(null), e._f = void 0, e._l = void 0, e[Bc] = 0, null != t && M(t, n, e[r], e) }); return ee(i.prototype, { clear: function() { for (var e = Nc(this, o), t = e._i, n = e._f; n; n = n.n) n.r = !0, n.p && (n.p = n.p.n = void 0), delete t[n.i];
                            e._f = e._l = void 0, e[Bc] = 0 }, delete: function(e) { var t = Nc(this, o),
                                n = Rc(t, e); if (n) { var r = n.n,
                                    i = n.p;
                                delete t._i[n.i], n.r = !0, i && (i.n = r), r && (r.p = i), t._f == n && (t._f = r), t._l == n && (t._l = i), t[Bc]-- } return !!n }, forEach: function(e) { Nc(this, o); for (var t, n = _e(e, 1 < arguments.length ? arguments[1] : void 0, 3); t = t ? t.n : this._f;)
                                for (n(t.v, t.k, this); t && t.r;) t = t.p }, has: function(e) { return !!Rc(Nc(this, o), e) } }), Ne && Fc(i.prototype, "size", { get: function() { return Nc(this, o)[Bc] } }), i }, def: function(e, t, n) { var r, i, o = Rc(e, t); return o ? o.v = n : (e._l = o = { i: i = qc(t, !0), k: t, v: n, p: r = e._l, n: void 0, r: !1 }, e._f || (e._f = o), r && (r.n = o), e[Bc]++, "F" !== i && (e._i[i] = o)), e }, getEntry: Rc, setStrong: function(e, n, t) { Lc(e, n, function(e, t) { this._t = Nc(e, n), this._k = t, this._l = void 0 }, function() { for (var e = this._k, t = this._l; t && t.r;) t = t.p; return this._t && (this._l = t = t ? t.n : this._t._f) ? Sc(0, "keys" == e ? t.k : "values" == e ? t.v : [t.k, t.v]) : (this._t = void 0, Sc(1)) }, t ? "entries" : "values", !t, !0), ne(n) } },
            Wc = { set: Object.setPrototypeOf || ("__proto__" in {} ? function(e, n, r) { try {
                        (r = _e(Function.call, Ut.f(Object.prototype, "__proto__").set, 2))(e, []), n = !(e instanceof Array) } catch (e) { n = !0 } return function(e, t) { return Dc(e, t), n ? e.__proto__ = t : r(e, t), e } }({}, !1) : void 0), check: Dc }.set;! function(r, e, t, n, i, o) {
            function a(e) { var n = l[e];
                qe(l, e, "delete" == e ? function(e) { return !(o && !Le(e)) && n.call(this, 0 === e ? 0 : e) } : "has" == e ? function(e) { return !(o && !Le(e)) && n.call(this, 0 === e ? 0 : e) } : "get" == e ? function(e) { return o && !Le(e) ? void 0 : n.call(this, 0 === e ? 0 : e) } : "add" == e ? function(e) { return n.call(this, 0 === e ? 0 : e), this } : function(e, t) { return n.call(this, 0 === e ? 0 : e, t), this }) } var s = Me[r],
                c = s,
                u = i ? "set" : "add",
                l = c && c.prototype,
                d = {}; if ("function" == typeof c && (o || l.forEach && !Ie(function() {
                    (new c).entries().next() }))) { var f = new c,
                    h = f[u](o ? {} : -0, 1) != f,
                    p = Ie(function() { f.has(1) }),
                    v = de(function(e) { new c(e) }),
                    m = !o && Ie(function() { for (var e = new c, t = 5; t--;) e[u](t, t); return !e.has(-0) });
                v || (((c = e(function(e, t) { g(e, c, r); var n = function(e, t, n) { var r, i = t.constructor; return i !== n && "function" == typeof i && (r = i.prototype) !== n.prototype && Le(r) && Wc && Wc(e, r), e }(new s, e, c); return null != t && M(t, i, n[u], n), n })).prototype = l).constructor = c), (p || m) && (a("delete"), a("has"), i && a("get")), (m || h) && a(u), o && l.clear && delete l.clear } else c = n.getConstructor(e, r, i, u), ee(c.prototype, t), mt.NEED = !0;
            te(c, r), d[r] = c, We(We.G + We.W + We.F * (c != s), d), o || n.setStrong(c, r, i) }("Set", function(e) { return function() { return e(this, 0 < arguments.length ? arguments[0] : void 0) } }, { add: function(e) { return Uc.def(Nc(this, "Set"), e = 0 === e ? 0 : e, e) } }, Uc);
        We(We.S, "Promise", { try: function(e) { var t = re.f(this),
                    n = Z(e); return (n.e ? t.reject : t.resolve)(n.v), t.promise } }); for (var zc = He("iterator"), Vc = He("toStringTag"), $c = P.Array, Gc = { CSSRuleList: !0, CSSStyleDeclaration: !1, CSSValueList: !1, ClientRectList: !1, DOMRectList: !1, DOMStringList: !1, DOMTokenList: !0, DataTransferItemList: !1, FileList: !1, HTMLAllCollection: !1, HTMLCollection: !1, HTMLFormElement: !1, HTMLSelectElement: !1, MediaList: !0, MimeTypeArray: !1, NamedNodeMap: !1, NodeList: !0, PaintRequestList: !1, Plugin: !1, PluginArray: !1, SVGLengthList: !1, SVGNumberList: !1, SVGPathSegList: !1, SVGPointList: !1, SVGStringList: !1, SVGTransformList: !1, SourceBufferList: !1, StyleSheetList: !0, TextTrackCueList: !1, TextTrackList: !1, TouchList: !1 }, Jc = Lt(Gc), Xc = 0; Xc < Jc.length; Xc++) { var Qc, Yc = Jc[Xc],
                Zc = Gc[Yc],
                Kc = Me[Yc],
                eu = Kc && Kc.prototype; if (eu && (eu[zc] || Fe(eu, zc, $c), eu[Vc] || Fe(eu, Vc, Yc), P[Yc] = $c, Zc))
                for (Qc in Mc) eu[Qc] || qe(eu, Qc, Mc[Qc], !0) }

        function tu(e) { return { __esModule: !0, default: e } }

        function nu(o) { var a, s;

            function c(e, t) { try { var n = o[e](t),
                        r = n.value,
                        i = r instanceof
                    function(e) { this.wrapped = e };
                    Promise.resolve(i ? r.wrapped : r).then(function(e) { i ? c("next", e) : u(n.done ? "return" : "normal", e) }, function(e) { c("throw", e) }) } catch (e) { u("throw", e) } }

            function u(e, t) { switch (e) {
                    case "return":
                        a.resolve({ value: t, done: !0 }); break;
                    case "throw":
                        a.reject(t); break;
                    default:
                        a.resolve({ value: t, done: !1 }) }(a = a.next) ? c(a.key, a.arg): s = null } this._invoke = function(r, i) { return new Promise(function(e, t) { var n = { key: r, arg: i, resolve: e, reject: t, next: null };
                    s ? s = s.next = n : (a = s = n, c(r, i)) }) }, "function" != typeof o.return && (this.return = void 0) }

        function ru(e) { if (Array.isArray(e)) { for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t]; return n } }

        function iu(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e }

        function ou(r, e) { var t = {},
                i = !1;

            function n(t, n) { return i = !0, n = new Promise(function(e) { e(r[t](n)) }), { done: !1, value: e(n) } } return "function" == typeof Symbol && Symbol.iterator && (t[Symbol.iterator] = function() { return this }), t.next = function(e) { return i ? (i = !1, e) : n("next", e) }, "function" == typeof r.throw && (t.throw = function(e) { if (i) throw i = !1, e; return n("throw", e) }), "function" == typeof r.return && (t.return = function(e) { return n("return", e) }), t }

        function au(e) { var t; if ("function" == typeof Symbol) { if (Symbol.asyncIterator && null != (t = e[Symbol.asyncIterator])) return t.call(e); if (Symbol.iterator && null != (t = e[Symbol.iterator])) return t.call(e) } throw new TypeError("Object is not async iterable") }

        function su(e, t, n, r, i, o, a) { try { var s = e[o](a),
                    c = s.value } catch (e) { return void n(e) } s.done ? t(c) : Promise.resolve(c).then(r, i) }

        function cu(s) { return function() { var e = this,
                    a = arguments; return new Promise(function(t, n) { var r = s.apply(e, a);

                    function i(e) { su(r, t, n, i, o, "next", e) }

                    function o(e) { su(r, t, n, i, o, "throw", e) } i(void 0) }) } }

        function uu(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

        function lu(e, t) { return (lu = Object.setPrototypeOf || function(e, t) { return e.__proto__ = t, e })(e, t) }

        function du(e, t, n) { return (du = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0 } catch (e) { return !1 } }() ? Reflect.construct : function(e, t, n) { var r = [null];
                r.push.apply(r, t); var i = new(Function.bind.apply(e, r)); return n && lu(i, n.prototype), i }).apply(null, arguments) }

        function fu(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } }

        function hu(e, t, n) { return t && fu(e.prototype, t), n && fu(e, n), e }

        function pu(e, t) { for (var n = Object.getOwnPropertyNames(t), r = 0; r < n.length; r++) { var i = n[r],
                    o = Object.getOwnPropertyDescriptor(t, i);
                o && o.configurable && void 0 === e[i] && Object.defineProperty(e, i, o) } return e }

        function vu(e, t) { for (var n in t) {
                (o = t[n]).configurable = o.enumerable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, n, o) } if (Object.getOwnPropertySymbols)
                for (var r = Object.getOwnPropertySymbols(t), i = 0; i < r.length; i++) { var o, a = r[i];
                    (o = t[a]).configurable = o.enumerable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, a, o) }
            return e }

        function mu(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }

        function gu() { return (gu = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) } return e }).apply(this, arguments) }

        function yu(e) { return (yu = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) { return e.__proto__ || Object.getPrototypeOf(e) })(e) }

        function wu(e, t) { for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = yu(e));); return e }

        function bu(e, t, n) { return (bu = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) { var r = wu(e, t); if (r) { var i = Object.getOwnPropertyDescriptor(r, t); return i.get ? i.get.call(n) : i.value } })(e, t, n || e) }

        function Eu(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && lu(e, t) }

        function ku(e, t) { return null != t && "undefined" != typeof Symbol && t[Symbol.hasInstance] ? t[Symbol.hasInstance](e) : e instanceof t }

        function Su(e) { return e && e.__esModule ? e : { default: e } }

        function _u(e) { if (e && e.__esModule) return e; var t = {}; if (null != e)
                for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) { var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                        r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n] } return t.default = e, t }

        function Pu(e) { return -1 !== Function.toString.call(e).indexOf("[native code]") }

        function Lu(e) { if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e) }

        function Tu(e, t) { if (e !== t) throw new TypeError("Cannot instantiate an arrow function") }

        function Iu() { throw new TypeError("Invalid attempt to spread non-iterable instance") }

        function Cu(e) { if (null == e) throw new TypeError("Cannot destructure undefined") }

        function xu(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {},
                    r = Object.keys(n); "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) { return Object.getOwnPropertyDescriptor(n, e).enumerable }))), r.forEach(function(e) { mu(t, e, n[e]) }) } return t }

        function Au(e, t) { if (null == e) return {}; var n, r, i = function(e, t) { if (null == e) return {}; var n, r, i = {},
                    o = Object.keys(e); for (r = 0; r < o.length; r++) n = o[r], 0 <= t.indexOf(n) || (i[n] = e[n]); return i }(e, t); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); for (r = 0; r < o.length; r++) n = o[r], 0 <= t.indexOf(n) || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]) } return i }

        function Ou(e) { return (Ou = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) }

        function Mu(e) { return (Mu = "function" == typeof Symbol && "symbol" === Ou(Symbol.iterator) ? function(e) { return Ou(e) } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : Ou(e) })(e) }

        function ju(e, t) { return !t || "object" !== Mu(t) && "function" != typeof t ? iu(e) : t }

        function Hu(e, t, n, r) { return (Hu = "undefined" != typeof Reflect && Reflect.set ? Reflect.set : function(e, t, n, r) { var i, o = wu(e, t); if (o) { if ((i = Object.getOwnPropertyDescriptor(o, t)).set) return i.set.call(r, n), !0; if (!i.writable) return !1 } if (i = Object.getOwnPropertyDescriptor(r, t)) { if (!i.writable) return !1;
                    i.value = n, Object.defineProperty(r, t, i) } else mu(r, t, n); return !0 })(e, t, n, r) }

        function Nu(e, t, n, r, i) { if (!Hu(e, t, n, r || e) && i) throw new Error("failed to set property"); return n }

        function Ru(e) { if (Array.isArray(e)) return e }

        function Du() { throw new TypeError("Invalid attempt to destructure non-iterable instance") }

        function Fu(e, t) { return Ru(e) || function(e, t) { for (var n, r = [], i = e[Symbol.iterator](); !(n = i.next()).done && (r.push(n.value), !t || r.length !== t);); return r }(e, t) || Du() }

        function qu(e, t) { return Ru(e) || function(e, t) { var n = [],
                    r = !0,
                    i = !1,
                    o = void 0; try { for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0); } catch (e) { i = !0, o = e } finally { try { r || null == s.return || s.return() } finally { if (i) throw o } } return n }(e, t) || Du() }

        function Bu(e, t) { return t || (t = e.slice(0)), e.raw = t, e }

        function Uu(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })) } "function" == typeof Symbol && Symbol.asyncIterator && (nu.prototype[Symbol.asyncIterator] = function() { return this }), nu.prototype.next = function(e) { return this._invoke("next", e) }, nu.prototype.throw = function(e) { return this._invoke("throw", e) }, nu.prototype.return = function(e) { return this._invoke("return", e) }; var Wu = {};

        function zu(e, t) { if (e === Wu) throw new ReferenceError(t + " is not defined - temporal dead zone"); return e }

        function Vu(e) { return Ru(e) || Lu(e) || Du() }

        function $u(e) { return ru(e) || Lu(e) || Iu() }

        function Gu(e) { var n = "function" == typeof Map ? new Map : void 0; return (Gu = function(e) { if (null === e || !Pu(e)) return e; if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== n) { if (n.has(e)) return n.get(e);
                    n.set(e, t) }

                function t() { return du(e, arguments, yu(this).constructor) } return t.prototype = Object.create(e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), lu(t, e) })(e) } var Ju = e(function(A) {! function(e) { var c, t = Object.prototype,
                        u = t.hasOwnProperty,
                        n = "function" == typeof Symbol ? Symbol : {},
                        i = n.iterator || "@@iterator",
                        r = n.asyncIterator || "@@asyncIterator",
                        o = n.toStringTag || "@@toStringTag",
                        a = e.regeneratorRuntime; if (a) A.exports = a;
                    else {
                        (a = e.regeneratorRuntime = A.exports).wrap = y; var l = "suspendedStart",
                            d = "suspendedYield",
                            f = "executing",
                            h = "completed",
                            p = {},
                            s = {};
                        s[i] = function() { return this }; var v = Object.getPrototypeOf,
                            m = v && v(v(C([])));
                        m && m !== t && u.call(m, i) && (s = m); var g = k.prototype = b.prototype = Object.create(s);
                        E.prototype = g.constructor = k, k.constructor = E, k[o] = E.displayName = "GeneratorFunction", a.isGeneratorFunction = function(e) { var t = "function" == typeof e && e.constructor; return !!t && (t === E || "GeneratorFunction" === (t.displayName || t.name)) }, a.mark = function(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, k) : (e.__proto__ = k, o in e || (e[o] = "GeneratorFunction")), e.prototype = Object.create(g), e }, a.awrap = function(e) { return { __await: e } }, S(_.prototype), _.prototype[r] = function() { return this }, a.AsyncIterator = _, a.async = function(e, t, n, r) { var i = new _(y(e, t, n, r)); return a.isGeneratorFunction(t) ? i : i.next().then(function(e) { return e.done ? e.value : i.next() }) }, S(g), g[o] = "Generator", g[i] = function() { return this }, g.toString = function() { return "[object Generator]" }, a.keys = function(n) { var r = []; for (var e in n) r.push(e); return r.reverse(),
                                function e() { for (; r.length;) { var t = r.pop(); if (t in n) return e.value = t, e.done = !1, e } return e.done = !0, e } }, a.values = C, I.prototype = { constructor: I, reset: function(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = c, this.done = !1, this.delegate = null, this.method = "next", this.arg = c, this.tryEntries.forEach(T), !e)
                                    for (var t in this) "t" === t.charAt(0) && u.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = c) }, stop: function() { this.done = !0; var e = this.tryEntries[0].completion; if ("throw" === e.type) throw e.arg; return this.rval }, dispatchException: function(n) { if (this.done) throw n; var r = this;

                                function e(e, t) { return o.type = "throw", o.arg = n, r.next = e, t && (r.method = "next", r.arg = c), !!t } for (var t = this.tryEntries.length - 1; 0 <= t; --t) { var i = this.tryEntries[t],
                                        o = i.completion; if ("root" === i.tryLoc) return e("end"); if (i.tryLoc <= this.prev) { var a = u.call(i, "catchLoc"),
                                            s = u.call(i, "finallyLoc"); if (a && s) { if (this.prev < i.catchLoc) return e(i.catchLoc, !0); if (this.prev < i.finallyLoc) return e(i.finallyLoc) } else if (a) { if (this.prev < i.catchLoc) return e(i.catchLoc, !0) } else { if (!s) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return e(i.finallyLoc) } } } }, abrupt: function(e, t) { for (var n = this.tryEntries.length - 1; 0 <= n; --n) { var r = this.tryEntries[n]; if (r.tryLoc <= this.prev && u.call(r, "finallyLoc") && this.prev < r.finallyLoc) { var i = r; break } } i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null); var o = i ? i.completion : {}; return o.type = e, o.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, p) : this.complete(o) }, complete: function(e, t) { if ("throw" === e.type) throw e.arg; return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), p }, finish: function(e) { for (var t = this.tryEntries.length - 1; 0 <= t; --t) { var n = this.tryEntries[t]; if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), T(n), p } }, catch: function(e) { for (var t = this.tryEntries.length - 1; 0 <= t; --t) { var n = this.tryEntries[t]; if (n.tryLoc === e) { var r = n.completion; if ("throw" === r.type) { var i = r.arg;
                                            T(n) } return i } } throw new Error("illegal catch attempt") }, delegateYield: function(e, t, n) { return this.delegate = { iterator: C(e), resultName: t, nextLoc: n }, "next" === this.method && (this.arg = c), p } } }

                    function y(e, t, n, r) { var i = t && t.prototype instanceof b ? t : b,
                            o = Object.create(i.prototype),
                            a = new I(r || []); return o._invoke = function(o, a, s) { var c = l; return function(e, t) { if (c === f) throw new Error("Generator is already running"); if (c === h) { if ("throw" === e) throw t; return x() } for (s.method = e, s.arg = t;;) { var n = s.delegate; if (n) { var r = P(n, s); if (r) { if (r === p) continue; return r } } if ("next" === s.method) s.sent = s._sent = s.arg;
                                    else if ("throw" === s.method) { if (c === l) throw c = h, s.arg;
                                        s.dispatchException(s.arg) } else "return" === s.method && s.abrupt("return", s.arg);
                                    c = f; var i = w(o, a, s); if ("normal" === i.type) { if (c = s.done ? h : d, i.arg === p) continue; return { value: i.arg, done: s.done } } "throw" === i.type && (c = h, s.method = "throw", s.arg = i.arg) } } }(e, n, a), o }

                    function w(e, t, n) { try { return { type: "normal", arg: e.call(t, n) } } catch (e) { return { type: "throw", arg: e } } }

                    function b() {}

                    function E() {}

                    function k() {}

                    function S(e) {
                        ["next", "throw", "return"].forEach(function(t) { e[t] = function(e) { return this._invoke(t, e) } }) }

                    function _(c) { var t;
                        this._invoke = function(n, r) {
                            function e() { return new Promise(function(e, t) {! function t(e, n, r, i) { var o = w(c[e], c, n); if ("throw" !== o.type) { var a = o.arg,
                                                s = a.value; return s && "object" == typeof s && u.call(s, "__await") ? Promise.resolve(s.__await).then(function(e) { t("next", e, r, i) }, function(e) { t("throw", e, r, i) }) : Promise.resolve(s).then(function(e) { a.value = e, r(a) }, function(e) { return t("throw", e, r, i) }) } i(o.arg) }(n, r, e, t) }) } return t = t ? t.then(e, e) : e() } }

                    function P(e, t) { var n = e.iterator[t.method]; if (n === c) { if (t.delegate = null, "throw" === t.method) { if (e.iterator.return && (t.method = "return", t.arg = c, P(e, t), "throw" === t.method)) return p;
                                t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method") } return p } var r = w(n, e.iterator, t.arg); if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, p; var i = r.arg; return i ? i.done ? (t[e.resultName] = i.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = c), t.delegate = null, p) : i : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, p) }

                    function L(e) { var t = { tryLoc: e[0] };
                        1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t) }

                    function T(e) { var t = e.completion || {};
                        t.type = "normal", delete t.arg, e.completion = t }

                    function I(e) { this.tryEntries = [{ tryLoc: "root" }], e.forEach(L, this), this.reset(!0) }

                    function C(t) { if (t) { var e = t[i]; if (e) return e.call(t); if ("function" == typeof t.next) return t; if (!isNaN(t.length)) { var n = -1,
                                    r = function e() { for (; ++n < t.length;)
                                            if (u.call(t, n)) return e.value = t[n], e.done = !1, e; return e.value = c, e.done = !0, e }; return r.next = r } } return { next: x } }

                    function x() { return { value: c, done: !0 } } }(function() { return this || "object" == typeof self && self }() || Function("return this")()) }),
            Xu = function() { return this || "object" == typeof self && self }() || Function("return this")(),
            Qu = Xu.regeneratorRuntime && 0 <= Object.getOwnPropertyNames(Xu).indexOf("regeneratorRuntime"),
            Yu = Qu && Xu.regeneratorRuntime;
        Xu.regeneratorRuntime = void 0; var Zu = Ju; if (Qu) Xu.regeneratorRuntime = Yu;
        else try { delete Xu.regeneratorRuntime } catch (e) { Xu.regeneratorRuntime = void 0 }

        function Ku(n) { var a = []; return a.toString = function() { return this.map(function(e) { var t = function(e, t) { var n = e[1] || "",
                            r = e[3]; if (!r) return n; if (t && "function" == typeof btoa) { var i = function(e) { return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(e)))) + " */" }(r),
                                o = r.sources.map(function(e) { return "/*# sourceURL=" + r.sourceRoot + e + " */" }); return [n].concat(o).concat([i]).join("\n") } return [n].join("\n") }(e, n); return e[2] ? "@media " + e[2] + "{" + t + "}" : t }).join("") }, a.i = function(e, t) { "string" == typeof e && (e = [
                    [null, e, ""]
                ]); for (var n = {}, r = 0; r < this.length; r++) { var i = this[r][0]; "number" == typeof i && (n[i] = !0) } for (r = 0; r < e.length; r++) { var o = e[r]; "number" == typeof o[0] && n[o[0]] || (t && !o[2] ? o[2] = t : t && (o[2] = "(" + o[2] + ") and (" + t + ")"), a.push(o)) } }, a } var el = Zu;

        function tl(e, t, n, r, i, o, a, s) { var c, u = "function" == typeof e ? e.options : e; if (t && (u.render = t, u.staticRenderFns = n, u._compiled = !0), r && (u.functional = !0), o && (u._scopeId = "data-v-" + o), a ? (c = function(e) {
                    (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), i && i.call(this, e), e && e._registeredComponents && e._registeredComponents.add(a) }, u._ssrRegister = c) : i && (c = s ? function() { i.call(this, this.$root.$options.shadowRoot) } : i), c)
                if (u.functional) { u._injectStyles = c; var l = u.render;
                    u.render = function(e, t) { return c.call(t), l(e, t) } } else { var d = u.beforeCreate;
                    u.beforeCreate = d ? [].concat(d, c) : [c] } return { exports: e, options: u } }

        function nl(e, t) { for (var n = [], r = {}, i = 0; i < t.length; i++) { var o = t[i],
                    a = o[0],
                    s = { id: e + ":" + i, css: o[1], media: o[2], sourceMap: o[3] };
                r[a] ? r[a].parts.push(s) : n.push(r[a] = { id: a, parts: [s] }) } return n } var rl = "undefined" != typeof document; if ("undefined" != typeof DEBUG && DEBUG && !rl) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."); var il, ol = {},
            al = rl && (document.head || document.getElementsByTagName("head")[0]);

        function sl(a, e, t, n) { var s = nl(a, e); return cl(s),
                function(e) { for (var t = [], n = 0; n < s.length; n++) { var r = s[n];
                        (i = ol[r.id]).refs--, t.push(i) } e ? cl(s = nl(a, e)) : s = []; for (n = 0; n < t.length; n++) { var i; if (0 === (i = t[n]).refs) { for (var o = 0; o < i.parts.length; o++) i.parts[o]();
                            delete ol[i.id] } } } }

        function cl(e) { for (var t = 0; t < e.length; t++) { var n = e[t],
                    r = ol[n.id]; if (r) { r.refs++; for (var i = 0; i < r.parts.length; i++) r.parts[i](n.parts[i]); for (; i < n.parts.length; i++) r.parts.push(ul(n.parts[i]));
                    r.parts.length > n.parts.length && (r.parts.length = n.parts.length) } else { var o = []; for (i = 0; i < n.parts.length; i++) o.push(ul(n.parts[i]));
                    ol[n.id] = { id: n.id, refs: 1, parts: o } } } }

        function ul(t) { var n = function() { var e = document.createElement("style"); return e.type = "text/css", il = il || al.querySelector('link[rel=stylesheet][href*="/mip.css"]'), al.insertBefore(e, il && il.nextSibling || al.firstChild), e }(),
                r = function(e, t) { var n = t.css,
                        r = t.media,
                        i = t.sourceMap;
                    r && e.setAttribute("media", r);
                    i && (n += "\n/*# sourceURL=" + i.sources[0] + " */", n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */"); if (e.styleSheet) e.styleSheet.cssText = n;
                    else { for (; e.firstChild;) e.removeChild(e.firstChild);
                        e.appendChild(document.createTextNode(n)) } }.bind(null, n); return r(t),
                function(e) { if (e) { if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
                        r(t = e) } else n.parentNode.removeChild(n) } } var ll = function() {
            function e() { Vn(this, e), this.installServices(), this.extensions = Ki.extensions() } return Gn(e, [{ key: "installServices", value: function() { Ki.registerService("extensions", js), Ki.registerService("timer", Hs), Ki.registerService("vue-compat", Rs) } }, { key: "getPageMetadata", value: function() { var t, n, e = !1; try { if (t = JSON.parse(window.name), "object" !== Xn(t) || null === t) throw new Error;
                        e = !0 } catch (e) { t = { standalone: !1, isRootPage: !0, isCrossOrigin: !1 } } if (e) n = t.standalone;
                    else { try { n = t.standalone || !es.isIframed || void 0 !== window.top.MIP } catch (e) { n = !1 } t.standalone = n } return { pageMeta: t, standalone: n } } }, { key: "get", value: function() { var e = this.getPageMetadata(),
                        t = e.pageMeta,
                        n = e.standalone;
                    es.pageMeta = t; var r = this.extensions,
                        i = r.installExtension,
                        o = r.registerElement,
                        a = r.registerService,
                        s = r.registerTemplate,
                        c = { version: "2", CustomElement: Kn, Services: Ki, builtinComponents: { MipShell: mc, MIPShell: mc }, css: {}, hash: Qi.hash, performance: ys, prerenderElement: Es.prerenderElement, push: i, registerElement: o, registerService: a, registerTemplate: s, registerCustomElement: o, registerVueCustomElement: o, standalone: n, templates: Qi.templates, util: Qi, viewer: es, viewport: Ro }; return function(r) { Object.assign(r, { registerMipElement: function(e, t, n) { Di.isTemplateClass(t) ? r.registerTemplate(e, t, { version: "1" }) : r.registerElement(e, t, n, { version: "1" }) } }) }(c),
                        function() { var e = window.__mipComponentsWebpackHelpers__ = [],
                                t = tu(nu),
                                n = tu(ru),
                                r = tu(iu),
                                i = tu(ou),
                                o = tu(au),
                                a = tu(cu),
                                s = tu(uu),
                                c = tu(du),
                                u = tu(hu),
                                l = tu(pu),
                                d = tu(vu),
                                f = tu(mu),
                                h = tu(gu),
                                p = tu(yu),
                                v = tu(bu),
                                m = tu(Eu),
                                g = tu(ku),
                                y = tu(Su),
                                w = tu(_u),
                                b = tu(Pu),
                                E = tu(Lu),
                                k = tu(Tu),
                                S = tu(Iu),
                                _ = tu(Cu),
                                P = tu(xu),
                                L = tu(Au),
                                T = tu(ju),
                                I = tu(lu),
                                C = tu(Nu),
                                x = tu(Fu),
                                A = tu(qu),
                                O = tu(Bu),
                                M = tu(Uu),
                                j = tu(zu),
                                H = tu(Wu),
                                N = tu(Vu),
                                R = tu($u),
                                D = tu(Mu),
                                F = tu(Gu),
                                q = tu(Ju),
                                B = tu(tl),
                                U = tu(sl),
                                W = tu(nl),
                                z = "@babel/runtime/helpers/esm/",
                                V = "arrayWithoutHoles",
                                $ = "assertThisInitialized",
                                G = "asyncGeneratorDelegate",
                                J = "asyncIterator",
                                X = "asyncToGenerator",
                                Q = "babel-runtime/helpers/",
                                Y = "classCallCheck",
                                Z = "core-js/modules/_",
                                K = "createClass",
                                ee = "defineEnumerableProperties",
                                te = "defineProperty",
                                ne = "getPrototypeOf",
                                re = "instanceof",
                                ie = "interopRequireDefault",
                                oe = "interopRequireWildcard",
                                ae = "isNativeFunction",
                                se = "iterableToArray",
                                ce = "newArrowCheck",
                                ue = "nonIterableSpread",
                                le = "objectDestructuringEmpty",
                                de = "objectSpread",
                                fe = "objectWithoutProperties",
                                he = "possibleConstructorReturn",
                                pe = "setPrototypeOf",
                                ve = "slicedToArrayLoose",
                                me = "slicedToArray",
                                ge = "taggedTemplateLiteralLoose",
                                ye = "taggedTemplateLiteral",
                                we = "temporalRef",
                                be = "temporalUndefined",
                                Ee = "toConsumableArray",
                                ke = "wrapNativeSuper";
                            e["@babel/runtime/helpers/esm/AsyncGenerator"] = t, e["@babel/runtime/regenerator/index"] = el, e["babel-runtime/helpers/asyncGenerator"] = t, e["babel-runtime/regenerator"] = el, e["css-loader/lib/css-base"] = Ku, e["regenerator-runtime/runtime"] = q, e["vue-loader/lib/runtime/componentNormalizer"] = B, e["vue-style-loader/lib/addStylesClient"] = U, e["vue-style-loader/lib/listToStyles"] = W, e[z + V] = n, e[z + $] = r, e[z + G] = i, e[z + J] = o, e[z + X] = a, e[z + Y] = s, e[z + "construct"] = c, e[z + K] = u, e[z + "defaults"] = l, e[z + ee] = d, e[z + te] = f, e[z + "extends"] = h, e[z + ne] = p, e[z + "get"] = v, e[z + "inherits"] = m, e[z + re] = g, e[z + ie] = y, e[z + oe] = w, e[z + ae] = b, e[z + se] = E, e[z + ce] = k, e[z + ue] = S, e[z + le] = _, e[z + de] = P, e[z + fe] = L, e[z + he] = T, e[z + pe] = I, e[z + "set"] = C, e[z + ve] = x, e[z + me] = A, e[z + ge] = O, e[z + ye] = M, e[z + we] = j, e[z + be] = H, e[z + "toArray"] = N, e[z + Ee] = R, e[z + "typeof"] = D, e[z + ke] = F, e[Q + V] = n, e[Q + $] = r, e[Q + G] = i, e[Q + J] = o, e[Q + X] = a, e[Q + Y] = s, e[Q + "construct"] = c, e[Q + K] = u, e[Q + "defaults"] = l, e[Q + ee] = d, e[Q + te] = f, e[Q + "extends"] = h, e[Q + ne] = p, e[Q + "get"] = v, e[Q + "inherits"] = m, e[Q + re] = g, e[Q + ie] = y, e[Q + oe] = w, e[Q + ae] = b, e[Q + se] = E, e[Q + ce] = k, e[Q + ue] = S, e[Q + le] = _, e[Q + de] = P, e[Q + fe] = L, e[Q + he] = T, e[Q + pe] = I, e[Q + "set"] = C, e[Q + ve] = x, e[Q + me] = A, e[Q + ge] = O, e[Q + ye] = M, e[Q + we] = j, e[Q + be] = H, e[Q + "toArray"] = N, e[Q + Ee] = R, e[Q + "typeof"] = D, e[Q + ke] = F, e[Z + "a-function"] = Se, e[Z + "an-object"] = Te, e[Z + "core"] = je, e[Z + "ctx"] = _e, e[Z + "defined"] = nt, e[Z + "descriptors"] = Ne, e[Z + "dom-create"] = Ce, e[Z + "export"] = We, e[Z + "fails"] = Ie, e[Z + "global"] = Me, e[Z + "has"] = Oe, e[Z + "hide"] = Fe, e[Z + "ie8-dom-define"] = Re, e[Z + "is-object"] = Le, e[Z + "library"] = !1, e[Z + "object-dp"] = De, e[Z + "property-desc"] = Ae, e[Z + "redefine"] = qe, e[Z + "shared-key"] = it, e[Z + "to-integer"] = Be, e[Z + "to-length"] = Ue, e[Z + "to-object"] = vn, e[Z + "to-primitive"] = xe, e[Z + "uid"] = Pe, e[Z + "wks"] = He }(), c } }]), e }();

        function dl(e, t, n, r, i, o, a) { try { var s = e[o](a),
                    c = s.value } catch (e) { return void n(e) } s.done ? t(c) : Promise.resolve(c).then(r, i) } var fl = function(s) { return function() { var e = this,
                        a = arguments; return new Promise(function(t, n) { var r = s.apply(e, a);

                        function i(e) { dl(r, t, n, i, o, "next", e) }

                        function o(e) { dl(r, t, n, i, o, "throw", e) } i(void 0) }) } },
            hl = Qi.css,
            pl = Qi.rect,
            vl = Qi.event,
            ml = Qi.naboo,
            gl = Qi.platform,
            yl = Qi.dom,
            wl = ["alt", "ismap", "src", "sizes", "srcset", "usemap", "title"];

        function bl(e, t) { var n = Ro.getWidth(),
                r = Ro.getHeight(); if (r / n < t / e) { var i = Math.round(r * e / t); return { height: r, width: i, left: (n - i) / 2, top: 0 } } var o = Math.round(n * t / e); return { height: o, width: n, left: 0, top: (r - o) / 2 } }

        function El(e) { var t = {}; return Array.prototype.slice.apply(e).forEach(function(e) { t[e.name] = e.value }), t }

        function kl(e) { return pl.getElementOffset(e) }

        function Sl(e) { var t = ro(document.querySelectorAll("mip-img[popup].mip-img-loaded")).filter(function(e) { return !e.classList.contains("mip-carousel-extra-img") }),
                n = t.indexOf(e); return -1 === n ? { imgsSrcArray: [], index: n } : { imgsSrcArray: t.map(function(e) { var t = e.querySelector("img"); return t ? t.currentSrc || t.src : e.getAttribute("src") }), index: n } }

        function _l(r, v) { var m = r.customElement.carouselOutside;
            v.addEventListener("click", function(e) { e.stopPropagation(); var t = v.currentSrc || v.src; if (t && 0 !== v.naturalWidth) { window.MIP.viewer.page.togglePageMask(!0, { skipTransition: !0, extraClass: "black" }); var d = function(e) { var t = Sl(e),
                            n = t.imgsSrcArray,
                            r = t.index; if (0 !== n.length && -1 !== r) { var i = document.createElement("div");
                            hl(i, "display", "block"), i.className = "mip-img-popUp-wrapper", i.setAttribute("data-name", "mip-img-popUp-name"); var o = document.createElement("div"),
                                a = document.createElement("div");
                            hl(a, { position: "absolute", width: Ro.getWidth(), height: Ro.getHeight(), left: 0, top: 0 }); var s = document.createElement("mip-carousel");
                            s.setAttribute("layout", "responsive"), s.setAttribute("index", r + 1), s.setAttribute("width", Ro.getWidth()), s.setAttribute("height", Ro.getHeight()); for (var c = 0; c < n.length; c++) { var u = document.createElement("div");
                                u.className = "div-mip-img", u.setAttribute("data-src", n[c]), hl(u, { "background-image": "url(".concat(n[c], ")"), "background-repeat": "no-repeat", "background-size": "contain", "background-position": "center" }), s.appendChild(u) } return o.className = "mip-img-popUp-bg", a.appendChild(s), i.appendChild(o), i.appendChild(a), document.body.appendChild(i), i } }(r); if (d) { m && wi(m, "open-popup"); var f = d.querySelector(".mip-img-popUp-bg"),
                            h = d.querySelector("mip-carousel"),
                            p = new Image;
                        p.setAttribute("src", t), d.appendChild(p), ml.animate(f, { opacity: 1 }).start(); var n = kl(v);
                        d.addEventListener("click", function e() { window.MIP.viewer.page.togglePageMask(!1, { skipTransition: !0, extraClass: "black" }); var t = d.querySelector(".mip-carousel-wrapper"); if (null == t) return; var n = (r = t, i = h, o = r.style.webkitTransform || r.style.transform, a = /translate3d\(-?([0-9]+)/i.exec(o), s = i.getAttribute("width"), c = parseInt(a[1], 10) / s, r.querySelectorAll(".div-mip-img")[c]); var r, i, o, a, s, c;
                            p.setAttribute("src", n.getAttribute("data-src")); var u = kl(v); var l = kl(n);
                            l.top < 0 && (u.top -= l.top);
                            l.left < 0 && (u.left -= l.left);
                            hl(p, bl(p.naturalWidth, p.naturalHeight));
                            hl(p, "display", "block");
                            hl(h, "display", "none");
                            ml.animate(f, { opacity: 0 }).start();
                            ml.animate(d, { display: "none" });
                            ml.animate(p, u).start(function() { hl(v, "visibility", "visible"), hl(d, "display", "none"), d.removeEventListener("click", e, !1), d.remove() });
                            m && wi(m, "close-popup") }, !1);
                        window.addEventListener("resize", function() { n = kl(v), hl(p, n), ml.animate(p, bl(v.naturalWidth, v.naturalHeight)).start() }), hl(p, n), hl(h, "visibility", "hidden"), hl(f, "opacity", 1), ml.animate(p, bl(v.naturalWidth, v.naturalHeight)).start(function() { hl(p, "display", "none"), hl(h, "visibility", "visible") }), hl(v, "visibility", "hidden"), hl(v.parentNode, "zIndex", "inherit") } } }, !1) }

        function Pl(a, s) { var e;
            es.isIframed && gl.isIOS() && (s.addEventListener("touchstart", function() { e = setTimeout(t, 300) }), s.addEventListener("touchmove", function() { clearTimeout(e) }), s.addEventListener("touchend", function() { clearTimeout(e) }));

            function t(e) { var t = s.currentSrc || s.src; if (t && 0 !== s.naturalWidth) { var n = [t];
                    e && (n = Sl(a).imgsSrcArray || [t]); var r = "baiduboxapp://v19/utils/previewImage?params=" + encodeURIComponent(JSON.stringify({ urls: n, current: t })),
                        i = document.createElement("iframe");
                    i.style.display = "none", i.src = r; var o = document.body;
                    o.appendChild(i), setTimeout(function() { o.removeChild(i), i = null }, 0) } } a.hasAttribute("popup") && s.addEventListener("click", function(e) { e.stopPropagation(), t(!0) }) } var Ll = function(e) {
                function t() { return Vn(this, t), tr(this, nr(t).apply(this, arguments)) } var n; return ir(t, Kn), Gn(t, [{ key: "isLoadingEnabled", value: function() { return !0 } }, { key: "prerenderAllowed", value: function(e, t) { var n = t.height; return t.top + t.height + n >= e.top && e.top + e.height + n >= t.top } }, { key: "build", value: function() { this.carouselOutside = yl.closest(this.element, "mip-carousel"), this.createPlaceholder() } }, { key: "createPlaceholder", value: function() { if (!this.element.classList.contains("mip-layout-size-defined") && !this.element.querySelector(".mip-default-placeholder")) { var e = document.createElement("mip-i-space");
                            e.classList.add("mip-default-placeholder"), this.element.appendChild(hl(e, { "padding-bottom": "75%", background: "rgba(0, 0, 0, 0.08)", opacity: "1" })) } } }, { key: "removePlaceholder", value: function() { var e = this.element.querySelector(".mip-default-placeholder");
                        e && this.element.removeChild(e) } }, { key: "layoutCallback", value: (n = fl(el.mark(function e() { var t, n, r, i, o, a, s; return el.wrap(function(e) { for (;;) switch (e.prev = e.next) {
                                case 0:
                                    for (r in t = this.element, n = new Image, this.applyFillContent(n, !0), this.attributes = El(t.attributes), this.attributes) this.attributes.hasOwnProperty(r) && -1 < wl.indexOf(r) && n.setAttribute(r, this.attributes[r]); return (i = ro(t.querySelectorAll("source"))).length ? (o = document.createElement("picture"), i.forEach(function(e) { o.appendChild(e) }), o.appendChild(n), t.appendChild(o)) : t.appendChild(n), gl.isBaiduApp() ? Pl(t, n) : t.hasAttribute("popup") && _l(t, n), t.classList.add("mip-img-loading"), e.prev = 9, e.next = 12, vl.loadPromise(n);
                                case 12:
                                    this.resourcesComplete(), this.removePlaceholder(), t.classList.remove("mip-img-loading"), t.classList.add("mip-img-loaded"), wi(t, "load"), e.next = 26; break;
                                case 19:
                                    if (e.prev = 19, e.t0 = e.catch(9), es.isIframed) { e.next = 23; break } return e.abrupt("return");
                                case 23:
                                    (a = document.createElement("a")).href = n.src, /(\?|&)mip_img_ori=1(&|$)/.test(a.search) || (s = a.search || "?", a.search += (/[?&]$/.test(s) ? "" : "&") + "mip_img_ori=1", n.src = a.href);
                                case 26:
                                case "end":
                                    return e.stop() } }, e, this, [
                            [9, 19]
                        ]) })), function() { return n.apply(this, arguments) }) }, { key: "attributeChangedCallback", value: function(e, t, n, r) { var i = this; if ("src" === e && t !== n) { var o = this.element.querySelector("img"); if (!o) return;
                            vl.loadPromise(o).then(function() { i.element.toggleFallback(!1) }), o.src = n } } }, { key: "hasResources", value: function() { return !0 } }], [{ key: "observedAttributes", get: function() { return wl } }]), t }(),
            Tl = function(e) {
                function t() { return Vn(this, t), tr(this, nr(t).apply(this, arguments)) } return ir(t, Kn), Gn(t, [{ key: "connectedCallback", value: function() { this.changeHtmlFontSize(), window.addEventListener("resize", this.changeHtmlFontSize.bind(this), !1) } }, { key: "disconnectedCallback", value: function() { document.documentElement.style.fontSize = "" } }, { key: "changeHtmlFontSize", value: function() { var t = this.element.getAttribute("font-size") || "",
                            e = Ro.getWidth(); try { t = JSON.parse(t) } catch (e) { t = "", console.warn("mip-rem \u7684 font-size \u5c5e\u6027\u503c\u683c\u5f0f\u4e0d\u5bf9\uff01") } for (var n = "", r = t.length - 1; 0 <= r; r--)
                            if (!(t[r].maxWidth && t[r].maxWidth < e || t[r].minWidth && t[r].minWidth > e)) { n = t[r].size || ""; break } document.documentElement.style.fontSize = n + "px" } }]), t }(),
            Il = ["ads", "src", "controls", "loop", "autoplay", "autobuffer", "crossorigin", "height", "muted", "preload", "poster", "width", "currenttime"]; var Cl = function(e) {
                function t() { return Vn(this, t), tr(this, nr(t).apply(this, arguments)) } return ir(t, Kn), Gn(t, [{ key: "layoutCallback", value: function() { var e = this;
                        this.attributes = function(e) { var t = {}; return Array.prototype.slice.apply(e).forEach(function(e) { t[e.name] = e.value }), t }(this.element.attributes), this.sourceDoms = ro(this.element.querySelectorAll("source")); var n = this.renderVideo(); return window.addEventListener(Zo, function() { n.parentElement.removeChild(n), n = e.renderVideo(), e.applyFillContent(n, !0) }), window.addEventListener(Ko, function() { n.pause && n.pause() }), this.addEventAction("seekTo", function(e, t) { n.currentTime = t }), this.addEventAction("play", function() { n.play && n.play() }), this.addEventAction("pause", function() { n.pause && n.pause() }), this.applyFillContent(n, !0), Promise.resolve() } }, { key: "renderInView", value: function() { var t = document.createElement("video"); for (var e in this.attributes) this.attributes.hasOwnProperty(e) && -1 < Il.indexOf(e) && t.setAttribute(e, this.attributes[e]); var n = this.attributes.currenttime; return t.setAttribute("playsinline", "playsinline"), t.setAttribute("x5-playsinline", "x5-playsinline"), t.setAttribute("webkit-playsinline", "webkit-playsinline"), t.setAttribute("t7-video-player-type", "inline"), Array.prototype.slice.apply(this.element.childNodes).forEach(function(e) { "mip-i-space" !== e.nodeName.toLowerCase() && t.appendChild(e) }), t.addEventListener("loadedmetadata", function() { n && (this.currentTime = +n) }), this.element.appendChild(t), t } }, { key: "renderError", value: function() { var e = document.createElement("div");
                        e.setAttribute("class", "mip-video-poster"), this.attributes.poster && (e.style.backgroundImage = "url(" + this.attributes.poster + ")", e.style.backgroundSize = "cover"); var t = document.createElement("span"); return t.setAttribute("class", "mip-video-error"), e.appendChild(t), this.element.appendChild(e), e } }, { key: "renderPlayElsewhere", value: function() { var e, t = document.createElement("div");
                        t.setAttribute("class", "mip-video-poster"), this.attributes.poster && (t.style.backgroundImage = "url(" + this.attributes.poster + ")", t.style.backgroundSize = "cover"); var n = document.createElement("span");
                        n.setAttribute("class", "mip-video-playbtn"), t.appendChild(n), t.dataset.videoSrc = this.attributes.src, t.dataset.videoPoster = Qi.parseCacheUrl(this.attributes.poster), t.addEventListener("click", function() { es.isIframed && es.sendMessage("mip-video-jump", { poster: t.dataset.videoPoster, src: e }) }, !1); var r = this.sourceDoms.map(function(e) { var t = e.type,
                                n = e.src; return po({}, t, n) }); return e = r.length ? JSON.stringify([t.dataset.videoSrc, r]) : t.dataset.videoSrc, this.element.appendChild(t), t } }, { key: "renderVideo", value: function() {
                        function t(e) { return /^https:|^\/\//.test(e) } var e = this.attributes.src,
                            n = this.sourceDoms,
                            r = t(window.location.protocol),
                            i = n.length && n.every(function(e) { return t(e.src) }),
                            o = t(e) || i; return es.isIframed && !o && r ? window.MIP.standalone ? this.renderError() : this.renderPlayElsewhere() : this.renderInView() } }]), t }(),
            xl = Es.prerenderElement,
            Al = "mip-carousel-container",
            Ol = "mip-carousel-wrapper",
            Ml = "mip-carousel-slideBox",
            jl = "mip-carousel-activeitem",
            Hl = .2;

        function Nl(e, t, n, r) { for (var i = Math.max(t - n, 0), o = Math.min(t + n + 1, e.length), a = i; a < o; a++)
                if ("MIP-IMG" === e[a].tagName) { e[a].setAttribute("src", r[a]); for (var s = ro(e[a].querySelectorAll("img")), c = 0; c < s.length; c++) s[c].setAttribute("src", r[a]) } else { var u = e[a].querySelector("mip-img");
                    u && u.setAttribute("src", r[a]) } }

        function Rl(e, t, n) { var r = e.querySelectorAll(".mip-carousel-slideBox")[t].querySelector("img");! function(e, t, n) { Qi.css(n, { height: e, transition: "height ".concat(t, "s") }) }(function(e, t) { return e * t.naturalHeight / t.naturalWidth }(parseInt(window.getComputedStyle(e, null).getPropertyValue("width"), 10), r), n, e) }

        function Dl(e, t) { t = t || "div"; var n = document.createElement(t); return n.className = e || "", n }

        function Fl(e, t, n) { n.style.webkitTransform = "translate3d(" + e + "px, 0px, 0px)", n.style.transitionDuration = t }

        function ql(e, t) { if (e) { var n = e.className;
                e.className = n.replace(t, "").replace(/(^\s*)|(\s*$)/g, "") } }

        function Bl(e, t) { if (e) { var n = e.className;
                e.className = n ? n + " " + t : t } } var Ul = function(e) {
                function t() { return Vn(this, t), tr(this, nr(t).apply(this, arguments)) } return ir(t, Kn), Gn(t, [{ key: "layoutCallback", value: function() { var i, s = this.element,
                            a = this,
                            c = s.clientWidth,
                            u = [],
                            o = s.hasAttribute("autoplay"),
                            e = s.getAttribute("defer") || 4e3,
                            l = s.hasAttribute("indicator"),
                            t = s.hasAttribute("buttonController"),
                            n = s.getAttribute("indicatorId"),
                            d = s.getAttribute("index"),
                            r = parseInt(d) || 1,
                            f = { stop: 1 },
                            h = { stop: 1 },
                            p = 0,
                            v = -c,
                            m = r,
                            g = {},
                            y = {},
                            w = function(n) { var e = n.children,
                                    t = Array.prototype.slice.call(e),
                                    r = []; if (t.map(function(e, t) { "mip-i-space" !== e.tagName.toLowerCase() && (r.push(e), n.removeChild(e)) }), 0 < r.length) { var i = r[0].cloneNode(!0),
                                        o = r[r.length - 1].cloneNode(!0);
                                    i.classList.add("mip-carousel-extra-img"), o.classList.add("mip-carousel-extra-img"), r.unshift(o), r.push(i) } return r }(s),
                            b = function(e) { for (var t = [], n = 0; n < e.length; n++)
                                    if ("MIP-IMG" === e[n].tagName) t.push(e[n].getAttribute("src"));
                                    else { var r = e[n].querySelector("mip-img");
                                        r ? t.push(r.getAttribute("src")) : t.push("no-src") } return t }(w),
                            E = (w = function(e, t, n) { for (var r = "no-src" !== n[t] ? n[t] : "?mip_img_ori=1", i = 0; i < e.length; i++)
                                    if ("MIP-IMG" === e[i].tagName) e[i].setAttribute("src", r);
                                    else { var o = e[i].querySelector("mip-img");
                                        o && o.setAttribute("src", r) } return e }(w, m, b)).length; if (0 === E) return Promise.resolve(); var k = Dl(Al),
                            S = Dl(Ol);
                        w.map(function(e, t) { var n = Dl(Ml);
                            n.appendChild(e), n.style.width = 100 / E + "%", S.appendChild(n), a.applyFillContent(e, !0), xl(e); for (var r = e.querySelectorAll("mip-img"), i = r.length, o = 0; o < i; o++) a.applyFillContent(r[o], !0), xl(r[o]) }), S.style.width = 100 * E + "%", k.appendChild(S), s.appendChild(k); var _ = d ? -c * r : -c;
                        v = _, Nl(w, r, 1, b), S.style.webkitTransform = "translate3d(" + _ + "px, 0, 0)"; var P = s.hasAttribute("autoheight");
                        P && function(e, t) { var n = new Image;
                            n.src = e.querySelectorAll(".mip-carousel-slideBox")[t].querySelector("img").src, n.onload = function() { ro(e.querySelectorAll(".mip-placeholder")).map(function(e) { return e.parentNode.removeChild(e) }), Rl(e, t, 0) } }(s, r); var L, T, I, C, x = 0;

                        function A() { i = setInterval(function() { O(S, m, m + 1) }, e) }

                        function O(e, t, n, r) { if (e) { c !== s.clientWidth && (c = s.clientWidth); var i = -c * (m = n);
                                r ? (Fl(i, "0ms", e), e.style.transitionDuration = "0ms") : (Fl(i, "300ms", e), e.style.transitionDuration = "300ms"); var o = function(e, t, n, r) { var i = { endPos: 0, endIndex: e }; return e === t - 1 ? (i.endPos = -n, i.endIndex = 1) : 0 === e ? (i.endPos = -(t - 2) * n, i.endIndex = t - 2) : i.endPos = r, i }(m, E, c, i); if (v = o.endPos, n = o.endIndex, m = n, 0 < u.length && function(e, t, n) { ql(e, n), Bl(t, n) }(u[t - 1], u[n - 1], jl), v !== i && setTimeout(function() { Fl(v, "0ms", e), h.stop = 1 }, 400), h.stop = 1, function(e) { l && (s.querySelector(".mip-carousel-indicatornow").innerHTML = e) }(m), es.eventAction.execute("switchCompleted", s, { currIndex: m, currCarouselItem: w[m], carouselChildrenLength: E }), Nl(w, m, 1, b), P) { var a = .3;
                                    r && (a = 0), Rl(e.parentNode.parentNode, m, a) } } } return S.addEventListener("touchstart", function(e) { var t = e.targetTouches[0];
                            g = { x: t.pageX, y: t.pageY, time: Date.now() }, 0, p = t.pageX, clearInterval(i) }, !1), S.addEventListener("touchmove", function(e) { var t = e.targetTouches[0];
                            y = { x: t.pageX - g.x, y: t.pageY - g.y }, 0 === (Math.abs(y.x) < Math.abs(y.y) ? 1 : 0) && e.preventDefault(), Fl((x = e.targetTouches[0].pageX - p) + v, "0ms", S), f.stop = 0 }, !1), S.addEventListener("touchend", function(e) { if (!f.stop) { var t = m,
                                    n = t;
                                Math.abs(x) > c * Hl && (n = 0 < x ? m - 1 : m + 1), O(S, t, n), f.stop = 1 } o && (clearInterval(i), A()) }, !1), s.addEventListener("open-popup", function(e) { e.stopPropagation(), clearInterval(i) }), s.addEventListener("close-popup", function(e) { e.stopPropagation(), o && A() }), o && A(), l && (L = Dl("mip-carousel-indicatorbox"), T = Dl("mip-carousel-indicatorBoxwrap", "p"), I = Dl("mip-carousel-indicatornow", "span"), (C = Dl("", "span")).innerHTML = "/" + (E - 2), I.innerHTML = m, T.appendChild(I), T.appendChild(C), L.appendChild(T), s.appendChild(L)), t && function() { var e = document.createElement("p");
                            e.className = "mip-carousel-preBtn"; var t = document.createElement("p");
                            t.className = "mip-carousel-nextBtn", s.appendChild(e), s.appendChild(t), s.querySelector(".mip-carousel-preBtn").addEventListener("click", function(e) { h.stop && (h.stop = 0, m -= 1, clearInterval(i), O(S, m + 1, m), o && A()) }, !1), s.querySelector(".mip-carousel-nextBtn").addEventListener("click", function(e) { h.stop && (h.stop = 0, m += 1, clearInterval(i), O(S, m - 1, m), o && A()) }, !1) }(), n && function(e) { var t = document.getElementById(e); if (!t) return; var n = (u = t.children).length;
                            d && ((u = Array.prototype.slice.call(u)).forEach(function(e) { ql(e, jl) }), Bl(u[m - 1], jl)); if (n === E - 2)
                                for (var r = 0; r < n; r++) u[r].count = r, u[r].addEventListener("click", function(e) { var t = this.count;
                                    clearInterval(i), O(S, m, t + 1), o && A() });
                            else Bl(t, "mip-hide"), u = [] }(n), window.addEventListener("resize", function() { c = s.clientWidth, O(S, m, m, "0ms") }, !1), this.addEventAction("go", function(e, t) { clearInterval(i), O(S, m, parseInt(t)), o && A() }), Promise.resolve() } }]), t }(),
            Wl = Qi.css,
            zl = Qi.event,
            Vl = ["allowfullscreen", "allowtransparency", "sandbox"],
            $l = function(e) {
                function o() { var e, t;
                    Vn(this, o); for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]; return (t = tr(this, (e = nr(o)).call.apply(e, [this].concat(r)))).iframe = void 0, t } return ir(o, Kn), Gn(o, [{ key: "isLoadingEnabled", value: function() { return !0 } }, { key: "layoutCallback", value: function() { var t = this;
                        this.handlePageResize = this.handlePageResize.bind(this), this.notifyRootPage = this.notifyRootPage.bind(this); var e = this.element,
                            n = e.getAttribute("src"),
                            r = e.getAttribute("srcdoc");
                        r && (n = "data:text/html;charset=utf-8;base64," + window.btoa(r)); var i = e.getAttribute("height"),
                            o = e.getAttribute("width") || "100%"; if (!n || !i) return Promise.resolve(); if (this.iframe = document.createElement("iframe"), this.iframe.frameBorder = "0", this.iframe.scrolling = "no", this.applyFillContent(this.iframe), this.element.appendChild(this.iframe), window.addEventListener("message", this.notifyRootPage.bind(this)), Wl(this.iframe, { width: o, height: i }), this.iframe.src = n, this.expendAttr(Vl, this.iframe), e.appendChild(this.iframe), "100%" === i) { this.fullscreen = !0; var a = setInterval(function() { var e = Ro.getHeight();
                                0 !== e && (t.setIframeHeight(e), clearInterval(a)) }, 500) } return zl.loadPromise(this.iframe) } }, { key: "firstInviewCallback", value: function() { window.addEventListener(Qo, this.handlePageResize.bind(this)) } }, { key: "disconnectedCallback", value: function() { window.removeEventListener(Qo, this.handlePageResize.bind(this)), window.removeEventListener("message", this.notifyRootPage.bind(this)) } }, { key: "notifyRootPage", value: function(e) { "mip-iframe-resize" === e.data.type && window.MIP.viewer.page.notifyRootPage({ type: Go }) } }, { key: "handlePageResize", value: function(e) { e.detail && e.detail.length && this.setIframeHeight(e.detail[0].height || Ro.getHeight()) } }, { key: "setIframeHeight", value: function(e) { this.fullscreen && e !== this.height && (Wl(this.iframe, { height: e }), this.height = e) } }]), o }(),
            Gl = { TIME: "t", TITLE: "title", HOST: "host" };

        function Jl(e, t, n) { var r = new RegExp("\\$?{" + t + "}", "g"); return -1 < e.search(r) ? e.replace(r, n) : (e += -1 < e.indexOf("?") ? "&" : "?") + (t = Gl[t] || t) + "=" + n } var Xl, Ql = function(e) {
                function t() { return Vn(this, t), tr(this, nr(t).apply(this, arguments)) } return ir(t, Kn), Gn(t, [{ key: "layoutCallback", value: function() { var e, t = this.element,
                            n = t.getAttribute("src"),
                            r = window.location.href,
                            i = (document.querySelector("title") || {}).innerHTML || "",
                            o = (n = Jl(n = Jl(n = Jl(n, "TIME", Date.now()), "TITLE", encodeURIComponent(i)), "HOST", encodeURIComponent(r))).match(/MIP-X-((\w|-|\d|_)+)/g); for (var a in o) { var s = o[a];
                            n = Jl(n, s, (e = s, document.getElementsByTagName("body")[0].getAttribute(e) || "default")) } n = (n = n.replace(/\$?{.+?}/g, "")).replace(/\$?{|}/g, ""); var c = new Image; return c.src = n, c.setAttribute("width", 0), c.setAttribute("height", 0), t.setAttribute("width", ""), t.setAttribute("height", ""), t.appendChild(c), Qi.css(t, { display: "none" }), Promise.resolve() } }]), t }(),
            Yl = 0,
            Zl = function() {
                function e() { Vn(this, e), this.isDep = !0, this.subs = [], this.id = Yl++ } return Gn(e, [{ key: "addWatcher", value: function() { e.target.addWatcher(this) } }, { key: "notify", value: function(t) { this.subs.forEach(function(e) { "Watch" === e.specWatcher && e.exp.match(new RegExp(".?".concat(t, "\\[?\\d*\\]?$"))) ? e.update() : "Watch" !== e.specWatcher && e.update() }) } }]), e }(),
            Kl = /[\w\d-._]+/g,
            ed = /(\${)([^}]+)(})/g,
            td = ["Webkit", "Moz", "ms"],
            nd = ["Math", "Number", "String", "Object", "window"];

        function rd(e) { return e && "[object Object]" === Object.prototype.toString.call(e) }

        function id(e) { return e && e.constructor === Array }

        function od(e) { return rd(e) && 0 !== Object.keys(e).length }

        function ad(e) { var t = {}; return e.forEach(function(e) { rd(e) ? Object.assign(t, e) : id(e) ? Object.assign(t, ad(e)) : "string" == typeof e && Object.assign(t, sd(e)) }), t }

        function sd(e) { return e.trim().split(/\s+/).reduce(function(e, t) { return Object.assign(e, po({}, t, !0)) }, {}) }

        function cd(e) { if (Xl = Xl || document.createElement("div").style, "filter" !== (e = e.replace(/-(\w)/g, function(e, t) { return t ? t.toUpperCase() : "" })) && e in Xl) return e; for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < td.length; n++) { var r = td[n] + t; if (r in Xl) return r } return "" }

        function ud(e) { if (!e) return {}; for (var t = e.split(";"), n = {}, r = 0, i = t.length; r < i; r++) { var o = t[r]; if (o) { var a = o.split(":");
                    n[a[0]] = a[1] } } return n }

        function ld(t) { var n = ""; return Object.keys(t).forEach(function(e) { n += "".concat(e, ":").concat(t[e], ";") }), n }

        function dd(e, t) { return fd.bind(e, t).call(e.data).call(e.data, e.data) }

        function fd(e) { var t, n = (e = vd(e) || "").match(/(this\.[\w\d-._]+|this\['[\w\d-._]+'\])/gim),
                r = "";
            n && n.length && n.forEach(function(e) { r += ";typeof ".concat(e, " === 'undefined' && (hadReadAll = false)") }); try { t = new Function("\n      with (this) {\n        try {\n          var hadReadAll = true\n          ".concat(r, "\n          return {\n            value: ").concat(e, ",\n            hadReadAll: hadReadAll\n          }\n        } catch (e) {\n          return {}\n        }\n      }\n    ")) } catch (e) { t = function() { return {} } } return t }

        function hd(e, t, n) { pd.bind(e, t, n).call(e.data).call(e.data) }

        function pd(e, t) { var n;
            e = vd(e); try { n = new Function("with(this){try {".concat(e, ' = "').concat(t, '"} catch (e) {}}')) } catch (e) { n = function() { return "" } } return n }

        function vd(e) { if (e) { var t = "",
                    n = null,
                    r = 0,
                    i = []; for (e = e.replace(/(`[^`]+`|'[^']+')/g, function(e) { return "`" === e[0] && (e = e.replace(ed, function(e) { return vd(e) })), i.push(e), "MIP-STR-TPL".concat(i.length - 1) }); null != (n = Kl.exec(e));) { var o = n.index,
                        a = n[0]; if (t += e.substring(r, o), r = o + a.length, -1 === a.indexOf("MIP-STR-TPL"))
                        if (isNaN(n[0]) && !/^\./.test(n[0]) && n[0].replace(/[-._]/g, "").length && -1 === nd.indexOf(n[0].split(".")[0])) { var s = gd(e, r, !0);
                            s >= e.length || !/['`:]/.test(e[s]) ? t += md(n[0]) : ":" === e[s] ? (s = gd(e, o - 1, !1)) < 0 || "?" !== e[s] ? t += n[0] : t += md(n[0]) : t += n[0] } else t += n[0];
                    else t += i[+n[0].substr(11)] } return t += e.substr(r) } }

        function md(e) { return /-/.test(e) ? "this['".concat(e, "']") : "this.".concat(e) }

        function gd(e, t, n) { for (; e[t] && " " === e[t];) n ? t++ : t--; return t } var yd = Object.freeze({ isObject: rd, isArray: id, objNotEmpty: od, arrayToObject: ad, parseClass: function(t) { var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}; if (Object.keys(n).forEach(function(e) { n[e] = !1 }), "string" == typeof t) return t = sd(t), Object.assign({}, n, t);
                    id(t) && (t = ad(t)); var r = {}; return rd(t) && Object.keys(t).forEach(function(e) { void 0 !== t[e] && e && (r[e] = t[e]) }), Object.assign({}, n, r) }, parseStyle: function t(s) { var c = {}; return id(s) ? (s.forEach(function(e) { Object.assign(c, t(e)) }), c) : rd(s) ? (Object.keys(s).forEach(function(e) { var t = cd(e); if (t) { var n = t.replace(/[A-Z]/g, function(e) { return "-" + e.toLowerCase() }),
                                r = s[e]; if (id(r)) { for (var i = document.createElement("div"), o = 0, a = r.length; o < a; o++) i.style[n] = r[o];
                                c[n] = i.style[n] } else c[n] = r } }), c) : "" }, normalize: cd, styleToObject: ud, objectToStyle: ld, getter: dd, getWithResult: fd, setter: hd, setWithResult: pd, namespaced: vd }),
            wd = [],
            bd = {},
            Ed = !1,
            kd = 0,
            Sd = !1,
            _d = 0,
            Pd = function() {
                function s(e, t, n, r, i) { var o;
                    Vn(this, s), this.data = t, this.dir = n, this.exp = r, this.id = _d++, "Class:" !== (o = r.slice(0, 6)) && "Style:" !== o && "Watch:" !== o || (this.specWatcher = o.slice(0, 5), this.exp = r = r.slice(6)), this.node = e, this.depIds = {}; var a = fd.bind(this, this.exp);
                    this.getter = a.call(this.data), this.cb = i, this.value = this.get() } return Gn(s, [{ key: "update", value: function() { if (Sd) { var e = this.id; if (null != bd[e]) return; if (bd[e] = !0, Ed) wd.push(this);
                            else { for (var t = wd.length - 1; kd < t && wd[t].id > e;) t--;
                                wd.splice(t + 1, 0, this) } } else this.run() } }, { key: "run", value: function() { var e = this.value,
                            t = this.get(e);
                        t !== e && (this.value = t, this.dir ? this.cb.call(this.data, this.dir, t) : this.cb.call(this.data, t)) } }, { key: "get", value: function(e) { var t; return t = (Zl.target = this).getter.call(this.data, this.data).value, this.specWatcher && "Watch" !== this.specWatcher && (t = yd["parse" + this.specWatcher](t, e)), Zl.target = null, t } }, { key: "addWatcher", value: function(e) { this.depIds.hasOwnProperty(e.id) || (e.subs.push(this), this.depIds[e.id] = e) } }]), s }();

        function Ld() { var e, t; for (Ed = !0, wd.sort(function(e, t) { return e.id - t.id }), kd = 0; kd < wd.length; kd++) t = (e = wd[kd]).id, bd[t] = null, e.run();
            kd = wd.length = 0, Ed = !(bd = {}) }

        function Td(e) { wd.length && !e && Ed || (Sd = e) || Ld() } var Id = /^value$/,
            Cd = /^(input|textarea|select)$/i,
            xd = /^(checked|selected|autofocus|controls|disabled|hidden|multiple|readonly)$/i,
            Ad = function() {
                function e() { Vn(this, e), this.el = document.documentElement } return Gn(e, [{ key: "start", value: function(e) { e && od(e) && (this.data = e, this.compileElement(this.el)) } }, { key: "cloneNode", value: function() { for (var e, t = document.createDocumentFragment(); e = this.el.firstChild;) t.appendChild(e); return t } }, { key: "compileElement", value: function(e) { var t = this,
                            n = e.childNodes;
                        [].slice.call(n).forEach(function(e) { t.isElementNode(e) && (t.compileAttributes(e), e.childNodes && e.childNodes.length && t.compileElement(e)) }) } }, { key: "isDirective", value: function(e) { return 0 === e.indexOf("m-") } }, { key: "isElementNode", value: function(e) { return 1 === e.nodeType } }, { key: "compileAttributes", value: function(t) { var n = this; if (t) { var e = t.attributes;
                            [].slice.call(e).forEach(function(e) { n.isDirective(e.name) && n.compileDirective(t, e, e.value) }) } } }, { key: "compileDirective", value: function(n, e, t) { var r, i, o = this,
                            a = e.name.slice(2),
                            s = e.name; if (/^bind:.*/.test(a)) { var c = a.slice(5); if ("class" === c || "style" === c) { var u = c.charAt(0).toUpperCase() + c.slice(1); try { var l = dd(this, t);
                                    r = yd["parse" + u](l.value), i = l.hadReadAll } catch (e) { r = {} } t = "".concat(u, ":").concat(t) } a = "bind" }!r && (r = o.getMVal(n, s, t)), void 0 !== r && o[a] && o[a](n, s, r, i), this.listenerFormElement(n, e, t), new Pd(n, o.data, s, t, function(e, t) { o[a] && o[a](n, e, t) }) } }, { key: "listenerFormElement", value: function(e, t, n) { if (Cd.test(e.tagName)) { var r = t.name.split(":"); if ("value" !== (r = 1 < r.length ? r[1] : "").trim()) return;
                            e.addEventListener("input", function(e) { hd(this, n, e.target.value) }.bind(this)) } } }, { key: "text", value: function(e, t, n) { e.textContent = n } }, { key: "bind", value: function(t, e, n, r) { var i = /bind:(.*)/.exec(e); if (i) { var o = i[1]; if ("disabled" !== o && t.disabled) Object.assign(window.m, this.origin);
                            else if ("class" === o) od(n) && (Object.keys(n).forEach(function(e) { return t.classList.toggle(e, n[e]) }), r && t.removeAttribute(e));
                            else if ("style" === o) { if (od(n)) { var a = ud(t.getAttribute(o) || "");
                                    Object.keys(n).forEach(function(e) { a[e] = n[e] }), t.setAttribute(o, ld(a)), r && t.removeAttribute(e) } } else "object" === Xn(n) && (n = JSON.stringify(n)), "" !== n ? t.setAttribute(o, n) : t.removeAttribute(o), Cd.test(t.tagName) && (xd.test(o) ? t[o] = !!n : Id.test(o) && (t[o] = n)) } } }, { key: "updateData", value: function(e) { this.origin = e } }, { key: "getMVal", value: function(e, t, n) { if (n) { var r; try { var i = dd(this, n);
                                r = i.value, i.hadReadAll && e.removeAttribute(t) } catch (e) {} return r } } }]), e }(),
            Od = function() {
                function e() { Vn(this, e) } return Gn(e, [{ key: "start", value: function(e) { for (var t in this.depMap = this.depMap || {}, e) this.depMap[t] = JSON.parse(JSON.stringify(e[t]));
                        this.walk(e, this.depMap) } }, { key: "walk", value: function(t, n) { var r = this;
                        rd(t) && rd(n) && Object.keys(t).forEach(function(e) { return r.define(t, e, t[e], n) }) } }, { key: "define", value: function(t, n, r, i) { if (void 0 !== i[n]) { var o = this,
                                e = r && "object" === Xn(r);
                            e && this.walk(r, i[n]); var a = Object.getOwnPropertyDescriptor(t, n); if (!a || !1 !== a.configurable) { var s, c = a && a.get,
                                    u = a && a.set;!e && i[n] && i[n].isDep ? s = i[n] : e && i[n] && i[n]._deps ? s = i[n]._deps : (s = new Zl, e ? i[n]._deps = s : i[n] = s), Object.defineProperty(t, n, { enumerable: !0, configurable: !0, get: function() { return r = c ? c.call(t) : r, Zl.target && s.addWatcher(), r }, set: function(e) { e !== (r = c ? c.call(t) : r) && (u ? u.call(t, e) : r = e, o.walk(e, i[n]), i[n]._deps && "object" !== Xn(e) ? i[n] = i[n]._deps : i[n].isDep && "object" === Xn(e) && (i[n]._deps = i[n]), s.notify(n)) } }) } } } }]), e }(),
            Md = function() {
                function e() { var i = this;
                    Vn(this, e), this.win = window, this.watcherIds = [], this.win.pgStates = {}, this.compile = new Ad, this.observer = new Od, MIP.setData = function(e) { i.bindTarget(!1, e) }, MIP.getData = function(e) { for (var t = e.split("."), n = i.win.m[t[0]], r = 1; rd(n) && r < t.length;) n = n[t[r]], r++; return n }, MIP.watch = function(e, t) { i.bindWatch(e, t) }, MIP.$set = function(e, t) { return i.bindTarget(!0, e, t) }, MIP.$recompile = function() { i.observer.start(i.win.m), i.compile.start(i.win.m) }, MIP.$update = function(e, t) { i.update(e, t) }, window.m = window.m || {}, window.mipDataPromises = window.mipDataPromises || [], MIP.$set(window.m) } return Gn(e, [{ key: "postMessage", value: function(t) { Object.keys(t).forEach(function(e) { t["#".concat(e)] = t[e], delete t[e] }); var e = this.win,
                            n = e;
                        Hd(e) || (n = e.parent).MIP.$set(t, !0), e.MIP.$set(t, !0); var r = e.location.href.replace(e.location.hash, "");
                        setTimeout(function() { n.MIP.$update(t, r) }, 10) } }, { key: "update", value: function(e, t) { for (var n = 0, r = this.win.document.getElementsByTagName("iframe"); n < r.length; n++)
                            if (r[n].classList.contains("mip-page__iframe") && r[n].getAttribute("data-page-id") && t !== r[n].getAttribute("data-page-id")) { var i = r[n].contentWindow;
                                i && i.MIP && i.MIP.$set(e, !0) } } }, { key: "bindTarget", value: function(e, t, n) { var r = this,
                            i = this.win; if ("object" !== Xn(t)) throw new Error("setData method MUST accept an object! Check your input:" + t); var o = JSON.stringify(i.m);
                        this.compile.updateData(JSON.parse(o)); var a = this.normalize(t);
                        e ? (this.setGlobalState(a.globalData, n), this.setPageState(a, n), this.observer.start(i.m), this.compile.start(i.m)) : (Td(!0), a.globalData && od(a.globalData) && !n && this.postMessage(a.globalData), t = a.pageData, Object.keys(t).forEach(function(e) { i.pgStates.hasOwnProperty(e) ? jd(i.m, po({}, e, t[e])) : r.dispatch(e, t[e], n) }), Td(!1)) } }, { key: "bindWatch", value: function(e, t) { var n = this; if (e.constructor !== Array) { if ("string" == typeof e && e && t && "function" == typeof t) { var r = e.split(".").reduce(function(e, t) { return e && (e += '{("[^{}:"]+":[^,]+,)*'), e + '"'.concat(t, '":') }, ""); if (JSON.stringify(this.win.m).match(new RegExp(r))) { var i = "".concat(e).concat(t.toString()).replace(/[\n\t\s]/g, ""); - 1 === this.watcherIds.indexOf(i) && (this.watcherIds.push(i), new Pd(null, this.win.m, "", "Watch:".concat(e), t)) } } } else e.forEach(function(e) { return n.bindWatch(e, t) }) } }, { key: "dispatch", value: function(e, t, n) { var r = this.win,
                            i = po({}, e, t);
                        r.g && r.g.hasOwnProperty(e) ? !n && this.postMessage(i) : !Hd(r) && r.parent.g && r.parent.g.hasOwnProperty(e) ? !n && this.postMessage(i) : Object.assign(r.m, i) } }, { key: "setGlobalState", value: function(e, t) { var n = this.win;
                        Hd(n) ? (n.g = n.g || {}, jd(n.g, e)) : !t && od(e) && this.postMessage(e) } }, { key: "setPageState", value: function(e, t) { var n = this.win;
                        Object.assign(n.m, e.pageData), !t && Object.keys(e.pageData).forEach(function(e) { n.pgStates[e] = !0 }); var r = e.globalData;
                        Object.keys(r).forEach(function(e) {!n.pgStates.hasOwnProperty(e) && n.m.hasOwnProperty(e) && (rd(r[e]) && n.m[e] && rd(n.m[e]) ? (jd(n.m[e], r[e]), n.m[e] = JSON.parse(JSON.stringify(n.m[e]))) : n.m[e] = r[e]) }),
                            function(t, n) { Object.keys(n).forEach(function(e) { t[e] || (t[e] = JSON.parse(JSON.stringify(n[e]))) }) }(n.m, function(e) { return Hd(e) ? e.g : e.parent.g }(n)) } }, { key: "normalize", value: function(t) { var n = {},
                            r = {}; return Object.keys(t).forEach(function(e) { if ("function" == typeof t[e]) throw "setData method MUST NOT accept object that contains functions"; /^#/.test(e) ? n[e.substr(1)] = t[e] : r[e] = t[e] }), { globalData: n, pageData: r } } }]), e }();

        function jd(n, r) { Object.keys(r).forEach(function(e) { if (rd(r[e]) && n[e] && rd(n[e])) { jd(n[e], r[e]); var t = JSON.parse(JSON.stringify(po({}, e, n[e])));
                    Object.assign(n, t) } else n[e] = r[e] }) }

        function Hd(e) { var t = e.MIP.viewer.page; return t.isRootPage || t.isCrossOrigin }

        function Nd(e) { var t = mipDataPromises.indexOf(e);
            mipDataPromises.splice(t, ~t ? 1 : 0) }

        function Rd(e, t) { return t ? e.filter(function(e) { return "string" == typeof e }) : e.map(function(e) { return "string" == typeof e ? e : e.name }) }

        function Dd(t) { return function(e) { return e === window ? t : e === document ? t.document : e } } var Fd = function(e) {
                function t() { return Vn(this, t), tr(this, nr(t).apply(this, arguments)) } return ir(t, Kn), Gn(t, [{ key: "build", value: function() { var e = this.element.getAttribute("src"),
                            t = this.element.querySelector('script[type="application/json"]'); if (e) this.getData(e);
                        else if (t) { var n = t.textContent.toString();
                            n && MIP.$set(Hi(n)) } } }, { key: "getData", value: function(e) { var n, r, t = new Promise(function(e, t) { n = e, r = t });
                        mipDataPromises.push(t), fetch(e, { credentials: "include" }).then(function(e) { e.ok ? e.json().then(function(e) { MIP.$set(e), Nd(t), n() }) : (console.error("Fetch request failed!"), Nd(t), r()) }).catch(function(e) { console.error(e), Nd(t), r() }) } }, { key: "prerenderAllowed", value: function() { return !0 } }]), t }(),
            qd = new(function() {
                function e() { Vn(this, e), this.initialized = !1, this.firstScroll = !0, this.animations = [], this.position = { top: "mip-fixed-hide-top", bottom: "mip-fixed-hide-bottom", in: function(e, t, n) { e.classList.remove(t || n) }, out: function(e, t, n) { e.classList.add(t || n) } } } return Gn(e, [{ key: "handleScroll", value: function(e) { var r = this; if (e) { var i = 0 < e ? "out" : "in";
                            this.animations.forEach(function(e) { var t = r.position[i],
                                    n = r.position[e.position];
                                n && t(e.element, e.slide, n) }) } } }, { key: "getDirection", value: function(e, t, n) { return e + window.innerHeight >= n ? 1 : 1 < e ? e - t : -1 } }, { key: "init", value: function(e) { this.animations.push(e), this.initialized || (this.initialized = !0, this.bindScrollEvent()) } }, { key: "bindScrollEvent", value: function() {
                        function e() { t = i.getScrollTop(), n = i.getScrollHeight(), o = r.getDirection(t, a, n), r.handleScroll(o), a = t } var t, n, r = this,
                            i = window.MIP.viewport,
                            o = 0,
                            a = 0;
                        window.addEventListener("touchstart", function() { t = i.getScrollTop(), n = i.getScrollHeight() }), window.addEventListener("touchmove", e), window.addEventListener("touchend", e), i.on("scroll", function() { r.firstScroll ? r.firstScroll = !1 : e() }) } }]), e }()),
            Bd = function(e) {
                function t() { return Vn(this, t), tr(this, nr(t).apply(this, arguments)) } return ir(t, Kn), Gn(t, [{ key: "connectedCallback", value: function() { var e = window.MIP.viewer,
                            t = window.MIP.util.platform; if ((this.element.classList.remove("mip-layout-container"), !this.element.getAttribute("mipdata-fixedidx")) && !this.element.hasAttribute("still")) { var n = t.isIos() && e.isIframed;
                            e.fixedElement.setFixedElement([this.element], n) } } }, { key: "build", value: function() { var t = this.element;
                        this.addEventAction("close", function(e) { e.preventDefault(), Qi.css(t, "display", "none") }); var e = t.getAttribute("type");!t.hasAttribute("data-slide") || "top" !== e && "bottom" !== e || qd.init({ element: t, position: e, slide: t.getAttribute("data-slide") }) } }]), t }(),
            Ud = function(e) {
                function t() { return Vn(this, t), tr(this, nr(t).apply(this, arguments)) } return ir(t, Kn), Gn(t, [{ key: "build", value: function() { var t = this.element.ownerDocument.createElement("div");
                        this.applyFillContent(t), this.element.getRealChildNodes().forEach(function(e) { return t.appendChild(e) }), this.element.appendChild(t) } }, { key: "prerenderAllowed", value: function() { return !0 } }]), t }(),
            Wd = function() { Os("mip-layout", Ud), Os("mip-pix", Ql), Os("mip-img", Ll), Os("mip-rem", Tl), Os("mip-carousel", Ul), Os("mip-iframe", $l), Os("mip-video", Cl), Os("mip-fixed", Bd), new Md, Os("mip-data", Fd), Da() || Os("mip-shell", mc) },
            zd = { PROPS: !1, FUNCTION: !0 },
            Vd = { READONLY: !1, READWRITE: !0 },
            $d = zd.PROPS,
            Gd = zd.FUNCTION,
            Jd = Vd.READONLY,
            Xd = Vd.READWRITE;

        function Qd(e) { return function(e) { return Array.prototype.concat.apply([], e) }(e.map(function(e) { return e.props })) } var Yd = zd.PROPS,
            Zd = zd.FUNCTION,
            Kd = Vd.READONLY;

        function ef() {}

        function tf() { return window }

        function nf(e, t) { return function() { return t()[e] } }

        function rf(t, e, n, r, i) { return { get: "function" == typeof e.getter ? e.getter : e.properties ? function(e, t, n) { var s = {},
                        c = !1,
                        u = t.properties,
                        l = t.origin || nf(e, n); return function() { if (c) return s; for (var e = 0; e < u.length; e++)
                            for (var t = u[e], n = t.type, r = t.access, i = t.props, o = 0; o < i.length; o++) { var a = i[o]; of (s, a.name || a, a, n, r, l) }
                        return c = !0, s } }(t, e, i) : function(e, t, n) { return t === Zd ? function(n, r) { return function() { var e = r(),
                                t = e[n]; return t && t.bind(e) } }(e, n) : nf(e, n) }(t, n, i), set: "function" == typeof e.setter ? e.setter : r === Kd ? ef : function(e) { i()[t] = e } } }

        function of (e, t, n, r, i, o) { var a = function(e, t, n, r, i) { if (t.descriptor) return t.descriptor; var o = { enumerable: !0, configurable: !1 }; if ("function" == typeof t) return o.get = t, o.set = ef, o; var a = rf(e, t, t.type || n || Yd, t.access || r || Kd, i || tf); return o.get = a.get, o.set = a.set, o }(t, n, r, i, o); return e && Object.defineProperty(e, t, a), a }

        function af(e) { var t = function() { var e = [{ type: $d, access: Jd, props: ["Array", "ArrayBuffer", "Blob", "Boolean", "DOMError", "DOMException", "DataView", "Date", "Error", "Float32Array", "Float64Array", "FormData", "Headers", "Infinity", "Int16Array", "Int32Array", "Int8Array", "JSON", "Map", "Math", "NaN", "Number", "Object", "Promise", "Proxy", "ReadableStream", "ReferenceError", "Reflect", "RegExp", "Request", "Response", "Set", "String", "Symbol", "SyntaxError", "TextDecoder", "TextEncoder", "TypeError", "URIError", "URL", "URLSearchParams", "Uint16Array", "Uint32Array", "Uint8Array", "Uint8ClampedArray", "WebSocket", "WritableStream", "crypto", "console", "decodeURI", "decodeURIComponent", "localStorage", "navigator", "sessionStorage", "screen", "undefined"] }, { type: $d, access: Jd, props: ["devicePixelRatio", "innerHeight", "innerWidth", "isSecureContext", "length", "outerHeight", "outerWidth", "screenLeft", "screenTop", "screenX", "screenY", "scrollX", "scrollY", "mipDataPromises"] }, { type: Gd, access: Jd, props: ["atob", "clearInterval", "clearTimeout", "encodeURI", "encodeURIComponent", "escape", "fetch", "getComputedStyle", "isFinite", "isNaN", "matchMedia", "parseFloat", "parseInt", "setInterval", "setTimeout", "unescape", "fetchJsonp"] }],
                        t = ["arguments", "require", "module", "exports", "define", "import", "process"],
                        n = { name: "strict", access: Jd, origin: function() { return window }, properties: e.concat([{ type: $d, access: Jd, props: [{ name: "document", origin: function() { return document }, properties: [{ type: $d, access: Xd, props: ["cookie", "domain"] }] }, { name: "location", origin: function() { return location }, properties: [{ type: $d, access: Jd, props: ["href", "protocol", "host", "hostname", "port", "pathname", "search", "hash", "origin"] }] }, { name: "MIP", origin: function() { return MIP }, properties: [{ type: $d, access: Jd, props: ["viewport", { name: "util", origin: function() { return MIP.util }, properties: [{ type: $d, access: Jd, props: ["platform", "customStorage", "jsonParse", "string"] }] }, { name: "sandbox", getter: function() { return MIP.sandbox.strict } }, { name: "viewer", origin: function() { return MIP.viewer }, properties: [{ type: $d, access: Jd, props: ["isIframed"] }, { type: Gd, access: Jd, props: ["sendMessage", "open"] }] }] }, { type: $d, access: Jd, props: ["MIP_ROOT_PAGE"] }, { type: Gd, access: Jd, props: ["watch", "setData", "getData"] }] }, { name: "window", getter: function() { return MIP.sandbox.strict } }, { name: "strict", getter: function() { return MIP.sandbox.strict } }] }, { type: Gd, access: Jd, props: [{ name: "this", getter: function() { return Dd(MIP.sandbox.strict) } }] }]) },
                        r = { name: "sandbox", access: Jd, origin: function() { return window }, properties: e.concat([{ type: $d, access: Xd, props: ["BMap", "BMapLib"] }, { type: $d, access: Jd, props: ["CustomEvent", "File", "FileList", "FileReader", "Image", "ImageBitmap", "MutationObserver", "Notification", "history", "location", "scrollbars", "swan", { name: "document", origin: function() { return document }, properties: [{ type: $d, access: Xd, props: ["domain", "head", "body", "title", "cookie", "referrer", "readyState", "documentElement"] }, { type: Gd, access: Jd, props: [{ name: "createElement", getter: function() { return function(e, t) { return "string" == typeof e && "script" === e.toLowerCase() && console.error("[MIP] \u7981\u6b62\u521b\u5efa SCRIPT \u6807\u7b7e\u5f15\u5165\u7b2c\u4e09\u65b9 JS \u811a\u672c"), document.createElement(e, t) } } }, "createDocumentFragment", "execCommand", "getElementById", "getElementsByClassName", "getElementsByTagName", "querySelector", "querySelectorAll"] }] }, { name: "window", getter: function() { return MIP.sandbox } }, { name: "MIP", getter: function() { return MIP } }, n] }, { type: Gd, access: Jd, props: ["addEventListener", "cancelAnimationFrame", "createImageBitmap", "removeEventListener", "requestAnimationFrame", "scrollBy", "scrollTo", "scroll", "webkitCancelAnimationFrame", "webkitRequestAnimationFrame", { name: "this", getter: function() { return Dd(MIP.sandbox) } }] }]) },
                        i = Qd(r.properties),
                        o = Qd(n.properties),
                        a = Rd(i).concat(t),
                        s = Rd(o).concat(t),
                        c = Rd(i, !0).concat(t),
                        u = Rd(o, !0).concat(t),
                        l = { type: $d, access: Jd, props: [{ name: "WHITELIST", getter: function() { return a.slice() } }, { name: "WHITELIST_STRICT", getter: function() { return s.slice() } }, { name: "WHITELIST_RESERVED", getter: function() { return c.slice() } }, { name: "WHITELIST_STRICT_RESERVED", getter: function() { return u.slice() } }] }; return r.properties = r.properties.concat(l), n.properties = n.properties.concat(l), { ORIGINAL: e, RESERVED: t, SANDBOX: r, SANDBOX_STRICT: n, WHITELIST: a, WHITELIST_STRICT: s, WHITELIST_RESERVED: c, WHITELIST_STRICT_RESERVED: u } }(),
                n = sf(e, t.SANDBOX.name, t.SANDBOX); if (!e) return n.get() } var sf = of ,
            cf = new(function() {
                function e() { Vn(this, e), this._domObj = {}, this._isAlreadyWake = {} } return Gn(e, [{ key: "init", value: function() { var e = ""; try { var t = document.querySelector("#mip-sleep-wake-module");
                            e = JSON.parse(t.textContent) } catch (e) { return } if (e)
                            for (var n in this._initConf("||", e), e) this._stateChange(n, !0) } }, { key: "_initConf", value: function(e, t) { for (var n in e = e || "||", t) { var r = t[n].split(e),
                                i = r.length;
                            this._domObj[n] = []; for (var o = 0; o < i; o++) try { var a = o,
                                    s = document.querySelector(r[o]),
                                    c = { par: s.parentNode, cln: "mip-sleep-wake-textarea-" + n + "-" + a };
                                s.setAttribute("data-cln", c.cln), this._domObj[n].push(c) } catch (e) { continue } } } }, { key: "wake", value: function(e) { this._stateChange(e), this._close(e) } }, { key: "reset", value: function(e) { this._isAlreadyWake[e] = 0 } }, { key: "_close", value: function(e) { this._isAlreadyWake[e] = 1 } }, { key: "_stateChange", value: function(e, t) { if (e) { var n = this._domObj[e]; if (n) { var r = n.length; if (!(r < 1))
                                    for (var i = 0; i < r; i++) { var o = n[i]; if (t && !this._isAlreadyWake[e]) { var a = o.par && o.cln ? o.par.querySelector("[data-cln=" + o.cln + "]") : null,
                                                s = document.createElement("textarea"); if (a && "textarea" === a.tagName.toLowerCase()) continue; if (!a) continue;
                                            s.textContent = a.outerHTML, s.style.display = "none", s.setAttribute("data-cln", o.cln), a.outerHTML = s.outerHTML } if (!t && !this._isAlreadyWake[e]) { var c = o.par; if (c) { var u = c.querySelector("[data-cln=" + o.cln + "]");
                                                u && "textarea" === u.tagName.toLowerCase() && (u.outerHTML = u.textContent) } } } } } } }]), e }()),
            uf = ["mip-carousel", "mip-iframe", "mip-img", "mip-pix", "mip-video", "mip-access", "mip-accordion", "mip-ad", "mip-analytics", "mip-anim", "mip-app-banner", "mip-appdl", "mip-audio", "mip-bind", "mip-custom", "mip-experiment", "mip-filter", "mip-fixed", "mip-form", "mip-gototop", "mip-history", "mip-infinitescroll", "mip-install-serviceworker", "mip-lightbox", "mip-link", "mip-list", "mip-login-done", "mip-map", "mip-mustache", "mip-nav-slidedown", "mip-sample", "mip-semi-fixed", "mip-share", "mip-showmore", "mip-sidebar", "mip-stats-baidu", "mip-stats-bidu", "mip-stats-cnzz", "mip-vd-baidu", "mip-vd-tabs"],
            lf = .1,
            df = Array.isArray(uf) ? uf.filter(function() { return !!(0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "").trim() }) : [];

        function ff() { var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                t = (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}).rate || lf,
                n = e.filename; if (n && /(c\.mipcdn\.com|mipcache\.bdstatic\.com|\S+\.sm-tc\.cn|\S+\.transcode\.cn)\/static/.test(n)) { var r = e.message || "",
                    i = e.lineno || "",
                    o = e.colno || window.event && window.event.errorCharacter || 0,
                    a = (/\/(mip-.+)\//g.exec(n) || [])[1] || "",
                    s = Math.random() <= t; if ((n.match(/(mip\.js)/g) || -1 < df.indexOf(a)) && s) { var c = { file: n, msg: r, ln: i, col: o, href: window.location.href };
                    es.sendMessage(na, c) } } } var hf, pf = 864e5,
            vf = {};

        function mf(e, t) { var n = new Date(e || Date.now()).getTime(),
                r = new Date(t || "2099-01-01").getTime(),
                i = Date.now(); return !(!n || !r || r < n) && (n <= i && i <= r) }

        function gf(e, t, n) { var r = document.domain,
                i = new Date;
            i.setTime(Date.now() + n), document.cookie = "".concat(e, "=").concat(escape(t), ";path=/;expires=").concat(i.toGMTString(), ";domain=").concat(r, ";") }

        function yf(e) { var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                n = [],
                r = t.startTime,
                i = t.endTime,
                o = t.ratio; if (gf(e, "", -1), !o || "number" != typeof o || o < 0 || !mf(r, i)) return !1; for (var a = 0; a < 100; a++) n[a] = a < o; if (n[parseInt(100 * Math.random(), 10)]) { var s = new Date(i).getTime(),
                    c = Date.now(),
                    u = s ? s - c : pf; return gf(e, JSON.stringify(t), 0 < u ? u : pf), !0 } return !1 } if (void 0 === window.MIP || void 0 === window.MIP.version) { window.removeEventListener("error", ff), window.addEventListener("error", ff); var wf = (new ll).get(),
                bf = (hf = [], Object.keys(vf.abTest || {}).forEach(function(e) { var t = (vf.abTest || {})[e];
                    mf(t.startTime, t.endTime) || gf(e, "", -1); var n = function(e) { var t = new RegExp("(^| )" + e + "=([^;]*)(;|$)"),
                            n = document.cookie.match(t); return n && n[2] ? unescape(n[2]) : "" }(e);
                    n && n === JSON.stringify(t) ? hf.push(e) : yf(e, t) && hf.push(e) }), hf);
            Qi.dom.waitDocumentReady(function() { Ro.init(), cf.init(); var e = window.MIP || [];
                window.MIP = wf, af(window.MIP), es.init(); var t = Array.prototype.slice.call(document.getElementsByClassName("mip-hidden")),
                    n = /mip-/i;
                t.forEach(function(e) { return -1 < e.tagName.search(n) && ho(e) }), Lr(document).then(Wd), Array.isArray(e) && e.forEach(window.MIP.push), ys.start(window._mipStartTiming), ys.on("update", function(e) { e.msids = bf.join(","), es.sendMessage(ta, e) }), es.show(), Qi.customStorage(2).delExceedCookie() }) } });