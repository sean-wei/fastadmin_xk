(window.MIP = window.MIP || []).push({
    name: "mip-bsml-multiselect",
    func: function() {
        define("mip-bsml-multiselect/mip-bsml-multiselect", ["require", "customElement", "jquery"], function(e) {
                var a = e("customElement").create(),
                    t = e("jquery");
                return a.prototype.build = function() {
                    var e = this,
                        a = e.element,
                        n = t(e.element),
                        i = n.attr("name");
                    ! function(e) {
                        "use strict";

                        function a(a, n) {
                            var i = this,
                                l = a.attr("name") || n.name || "";
                            if (this.options = n, this.$el = a.hide(), this.$label = this.$el.closest("label"), 0 === this.$label.length && this.$el.attr("id")) this.$label = e(t('label[for="%s"]', this.$el.attr("id").replace(/:/g, "\\:")));
                            if (this.$parent = e(t('<div class="ms-parent %s" %s/>', a.attr("class") || "", t('title="%s"', a.attr("title")))), this.$choice = e(t('<button type="button" class="ms-choice"><span class="placeholder">%s</span><div></div></button>', this.options.placeholder)), this.$drop = e(t('<div class="ms-drop %s"%s></div>', this.options.position, t(' style="width: %s"', this.options.dropWidth))), this.$el.after(this.$parent), this.$parent.append(this.$choice), this.$parent.append(this.$drop), this.$el.prop("disabled")) this.$choice.addClass("disabled");
                            if (this.$parent.css("width", this.options.width || this.$el.css("width") || this.$el.outerWidth() + 20), this.selectAllName = 'data-name="selectAll' + l + '"', this.selectGroupName = 'data-name="selectGroup' + l + '"', this.selectItemName = 'data-name="selectItem' + l + '"', !this.options.keepOpen) e(document).click(function(t) {
                                if (e(t.target)[0] !== i.$choice[0] && e(t.target).parents(".ms-choice")[0] !== i.$choice[0])
                                    if ((e(t.target)[0] === i.$drop[0] || e(t.target).parents(".ms-drop")[0] !== i.$drop[0] && t.target !== a[0]) && i.options.isOpen) i.close()
                            })
                        }
                        var t = function(e) {
                            var a = arguments,
                                t = !0,
                                n = 1;
                            return e = e.replace(/%s/g, function() {
                                var e = a[n++];
                                if (void 0 === e) return t = !1, "";
                                else return e
                            }), t ? e : ""
                        };
                        a.prototype = {
                            constructor: a,
                            init: function() {
                                var a = this.$drop.parents("mip-bsml-multiselect"),
                                    n = this,
                                    i = e("<ul></ul>");
                                if (this.$drop.html(""), this.options.filter) this.$drop.append('<div class="ms-search"><input type="text" autocomplete="off" autocorrect="off" autocapitilize="off" spellcheck="false"></div>');
                                if (this.options.selectAll && !this.options.single) i.append(['<li class="ms-select-all">', "<label>", t('<input type="checkbox" %s /> ', this.selectAllName), this.options.selectAllDelimiter[0], this.options.selectAllText, this.options.selectAllDelimiter[1], "</label>", "</li>"].join(""));
                                if (e.each(this.$el.children(), function(e, t) { i.append(n.optionToHtml(e, t, void 0, void 0, a.attr("name"))) }), i.append(t('<li class="ms-no-results">%s</li>', this.options.noMatchesFound)), this.$drop.append(i), this.$drop.find("ul").css("max-height", this.options.maxHeight + "px"), this.$drop.find(".multiple").css("width", this.options.multipleWidth + "px"), this.$searchInput = this.$drop.find(".ms-search input"), this.$selectAll = this.$drop.find("input[" + this.selectAllName + "]"), this.$selectGroups = this.$drop.find("input[" + this.selectGroupName + "]"), this.$selectItems = this.$drop.find("input[" + this.selectItemName + "]:enabled"), this.$disableItems = this.$drop.find("input[" + this.selectItemName + "]:disabled"), this.$noResults = this.$drop.find(".ms-no-results"), this.events(), this.updateSelectAll(!0), this.update(!0), this.options.isOpen) this.open()
                            },
                            optionToHtml: function(a, n, i, l, o) {
                                var r, s = this,
                                    u = e(n),
                                    m = u.attr("class") || "",
                                    c = t('title="%s"', u.attr("title")),
                                    d = this.options.multiple ? "multiple" : "",
                                    v = this.options.single ? "radio" : "checkbox";
                                if (u.is("option")) {
                                    var p, f = u.val(),
                                        h = s.options.textTemplate(u),
                                        g = u.prop("selected"),
                                        A = t('style="%s"', this.options.styler(f));
                                    return r = l || u.prop("disabled"), p = e([t('<li class="%s %s" %s %s>', d, m, c, A), t('<label class="%s">', r ? "disabled" : ""), t('<input name="' + o + '" type="%s" %s%s%s%s>', v, this.selectItemName, g ? ' checked="checked"' : "", r ? ' disabled="disabled"' : "", t(' data-group="%s"', i)), t("<span>%s</span>", h), "</label>", "</li>"].join("")), p.find("input").val(f), p
                                }
                                if (u.is("optgroup")) {
                                    var b = s.options.labelTemplate(u),
                                        w = e("<div/>");
                                    return i = "group_" + a, r = u.prop("disabled"), w.append(['<li class="group">', t('<label class="optgroup %s" data-group="%s">', r ? "disabled" : "", i), this.options.hideOptgroupCheckboxes || this.options.single ? "" : t('<input type="checkbox" %s %s>', this.selectGroupName, r ? 'disabled="disabled"' : ""), b, "</label>", "</li>"].join("")), e.each(u.children(), function(e, a) { w.append(s.optionToHtml(e, a, i, r, o)) }), w.html()
                                }
                            },
                            events: function() {
                                var a = this,
                                    n = function(e) { e.preventDefault(), a[a.options.isOpen ? "close" : "open"]() };
                                if (this.$label) this.$label.off("click").on("click", function(e) {
                                    if ("label" === e.target.nodeName.toLowerCase() && e.target === this) {
                                        if (n(e), !a.options.filter || !a.options.isOpen) a.focus();
                                        e.stopPropagation()
                                    }
                                });
                                this.$choice.off("click").on("click", n).off("focus").on("focus", this.options.onFocus).off("blur").on("blur", this.options.onBlur), this.$parent.off("keydown").on("keydown", function(e) {
                                    switch (e.which) {
                                        case 27:
                                            a.close(), a.$choice.focus()
                                    }
                                }), this.$searchInput.off("keydown").on("keydown", function(e) { if (9 === e.keyCode && e.shiftKey) a.close() }).off("keyup").on("keyup", function(e) {
                                    if (a.options.filterAcceptOnEnter && (13 === e.which || 32 === e.which) && a.$searchInput.val()) return a.$selectAll.click(), a.close(), void a.focus();
                                    a.filter()
                                }), this.$selectAll.off("click").on("click", function() {
                                    var t = e(this).prop("checked"),
                                        n = a.$selectItems.filter(":visible");
                                    if (n.length === a.$selectItems.length) a[t ? "checkAll" : "uncheckAll"]();
                                    else a.$selectGroups.prop("checked", t), n.prop("checked", t), a.options[t ? "onCheckAll" : "onUncheckAll"](), a.update()
                                }), this.$selectGroups.off("click").on("click", function() {
                                    var n = e(this).parent().attr("data-group"),
                                        i = a.$selectItems.filter(":visible"),
                                        l = i.filter(t('[data-group="%s"]', n)),
                                        o = l.length !== l.filter(":checked").length;
                                    l.prop("checked", o), a.updateSelectAll(), a.update(), a.options.onOptgroupClick({ label: e(this).parent().text(), checked: o, children: l.get(), instance: a })
                                }), this.$selectItems.off("click").on("click", function() {
                                    if (a.updateSelectAll(), a.update(), a.updateOptGroupSelect(), a.options.onClick({ label: e(this).parent().text(), value: e(this).val(), checked: e(this).prop("checked"), instance: a }), a.options.single && a.options.isOpen && !a.options.keepOpen) a.close();
                                    if (a.options.single) {
                                        var t = e(this).val();
                                        a.$selectItems.filter(function() { return e(this).val() !== t }).each(function() { e(this).prop("checked", !1) }), a.update()
                                    }
                                })
                            },
                            open: function() {
                                if (!this.$choice.hasClass("disabled")) {
                                    if (this.options.isOpen = !0, this.$choice.find(">div").addClass("open"), this.$drop[this.animateMethod("show")](), this.$selectAll.parent().show(), this.$noResults.hide(), !this.$el.children().length) this.$selectAll.parent().hide(), this.$noResults.show();
                                    if (this.options.container) {
                                        var a = this.$drop.offset();
                                        this.$drop.appendTo(e(this.options.container)), this.$drop.offset({ top: a.top, left: a.left })
                                    }
                                    if (this.options.filter) this.$searchInput.val(""), this.$searchInput.focus(), this.filter();
                                    this.options.onOpen()
                                }
                            },
                            close: function() {
                                if (this.options.isOpen = !1, this.$choice.find(">div").removeClass("open"), this.$drop[this.animateMethod("hide")](), this.options.container) this.$parent.append(this.$drop), this.$drop.css({ top: "auto", left: "auto" });
                                this.options.onClose()
                            },
                            animateMethod: function(e) { return { show: { fade: "fadeIn", slide: "slideDown" }, hide: { fade: "fadeOut", slide: "slideUp" } } [e][this.options.animate] || e },
                            update: function(a) {
                                var t = this.options.displayValues ? this.getSelects() : this.getSelects("text"),
                                    n = this.$choice.find(">span"),
                                    l = t.length;
                                if (a) this.$selectItems.eq(0).triggerHandler("click");
                                else {
                                    if (0 === l) n.addClass("placeholder").html(i);
                                    else if (this.options.ellipsis && l > this.options.minimumCountSelected) n.removeClass("placeholder").text(t.slice(0, this.options.minimumCountSelected).join(this.options.delimiter) + "...");
                                    else if (this.options.countSelected && l > this.options.minimumCountSelected) n.removeClass("placeholder").html(this.options.countSelected.replace("#", t.length).replace("%", this.$selectItems.length + this.$disableItems.length));
                                    else n.removeClass("placeholder").text(t.join(this.options.delimiter));
                                    this.$el.val(this.getSelects()).trigger("change"), this.$drop.find("li").removeClass("selected"), this.$drop.find("input:checked").each(function() { e(this).parents("li").first().addClass("selected") })
                                }
                                if (this.options.addTitle) n.prop("title", this.getSelects("text"));
                                if (!a) this.$el.trigger("change")
                            },
                            updateSelectAll: function(e) { var a = this.$selectItems; if (!e) a = a.filter(":visible"); if (this.$selectAll.prop("checked", a.length && a.length === a.filter(":checked").length), !e && this.$selectAll.prop("checked")) this.options.onCheckAll() },
                            updateOptGroupSelect: function() {
                                var a = this.$selectItems.filter(":visible");
                                e.each(this.$selectGroups, function(n, i) {
                                    var l = e(i).parent().attr("data-group"),
                                        o = a.filter(t('[data-group="%s"]', l));
                                    e(i).prop("checked", o.length && o.length === o.filter(":checked").length)
                                })
                            },
                            getSelects: function(a) {
                                var n = this,
                                    i = [],
                                    l = [];
                                if (this.$drop.find(t("input[%s]:checked", this.selectItemName)).each(function() { i.push(e(this).parents("li").first().text()), l.push(e(this).val()) }), "text" === a && this.$selectGroups.length) i = [], this.$selectGroups.each(function() {
                                    var a = [],
                                        l = e.trim(e(this).parent().text()),
                                        o = e(this).parent().data("group"),
                                        r = n.$drop.find(t('[%s][data-group="%s"]', n.selectItemName, o)),
                                        s = r.filter(":checked");
                                    if (s.length) {
                                        if (a.push("["), a.push(l), r.length > s.length) {
                                            var u = [];
                                            s.each(function() { u.push(e(this).parent().text()) }), a.push(": " + u.join(", "))
                                        }
                                        a.push("]"), i.push(a.join(""))
                                    }
                                });
                                return "text" === a ? i : l
                            },
                            setSelects: function(a) {
                                var n = this;
                                this.$selectItems.prop("checked", !1), this.$disableItems.prop("checked", !1), e.each(a, function(e, a) { n.$selectItems.filter(t('[value="%s"]', a)).prop("checked", !0), n.$disableItems.filter(t('[value="%s"]', a)).prop("checked", !0) }), this.$selectAll.prop("checked", this.$selectItems.length === this.$selectItems.filter(":checked").length + this.$disableItems.filter(":checked").length), e.each(n.$selectGroups, function(a, t) {
                                    var i = e(t).parent().attr("data-group"),
                                        l = n.$selectItems.filter('[data-group="' + i + '"]');
                                    e(t).prop("checked", l.length && l.length === l.filter(":checked").length)
                                }), this.update()
                            },
                            enable: function() { this.$choice.removeClass("disabled") },
                            disable: function() { this.$choice.addClass("disabled") },
                            checkAll: function() { this.$selectItems.prop("checked", !0), this.$selectGroups.prop("checked", !0), this.$selectAll.prop("checked", !0), this.update(), this.options.onCheckAll() },
                            uncheckAll: function() { this.$selectItems.prop("checked", !1), this.$selectGroups.prop("checked", !1), this.$selectAll.prop("checked", !1), this.update(), this.options.onUncheckAll() },
                            focus: function() { this.$choice.focus(), this.options.onFocus() },
                            blur: function() { this.$choice.blur(), this.options.onBlur() },
                            refresh: function() { this.init() },
                            filter: function() {
                                var a = this,
                                    n = e.trim(this.$searchInput.val()).toLowerCase();
                                if (0 === n.length) this.$selectAll.parent().show(), this.$selectItems.parent().show(), this.$disableItems.parent().show(), this.$selectGroups.parent().show(), this.$noResults.hide();
                                else if (this.$selectItems.each(function() { e(this).parent() }), this.$disableItems.parent().hide(), this.$selectGroups.each(function() {
                                        var n = e(this).parent(),
                                            i = n.attr("data-group");
                                        n[a.$selectItems.filter(":visible").filter(t('[data-group="%s"]', i)).length ? "show" : "hide"]()
                                    }), this.$selectItems.parent().filter(":visible").length) this.$selectAll.parent().show(), this.$noResults.hide();
                                else this.$selectAll.parent().hide(), this.$noResults.show();
                                this.updateOptGroupSelect(), this.updateSelectAll(), this.options.onFilter(n)
                            }
                        }, e.fn.multipleSelect = function() {
                            var t, n = arguments[0],
                                i = arguments,
                                l = ["getSelects", "setSelects", "enable", "disable", "open", "close", "checkAll", "uncheckAll", "focus", "blur", "refresh", "close"];
                            return this.each(function() {
                                var o = e(this),
                                    r = o.data("multipleSelect"),
                                    s = e.extend({}, e.fn.multipleSelect.defaults, o.data(""), "object" == typeof n && n);
                                if (!r) r = new a(o, s), o.data("multipleSelect", r);
                                if ("string" == typeof n) {
                                    if (e.inArray(n, l) < 0) throw "Unknown method: " + n;
                                    t = r[n](i[1])
                                } else if (r.init(), i[1]) t = r[i[1]].apply(r, [].slice.call(i, 2))
                            }), void 0 !== t ? t : this
                        }, e.fn.multipleSelect.defaults = { name: "", isOpen: !1, placeholder: "", selectAll: !0, selectAllDelimiter: ["[", "]"], minimumCountSelected: 10, ellipsis: !1, multiple: !1, multipleWidth: 80, single: !1, filter: !1, width: void 0, dropWidth: void 0, maxHeight: 120, container: null, position: "bottom", keepOpen: !1, animate: "none", displayValues: !1, delimiter: ", ", addTitle: !1, filterAcceptOnEnter: !1, hideOptgroupCheckboxes: !1, selectAllText: "Select all", allSelected: "All selected", countSelected: "# of % selected", noMatchesFound: "No matches found", styler: function() { return !1 }, textTemplate: function(e) { return e.html() }, labelTemplate: function(e) { return e.attr("label") }, onOpen: function() { return !1 }, onClose: function() { return !1 }, onCheckAll: function() { return !1 }, onUncheckAll: function() { return !1 }, onFocus: function() { return !1 }, onBlur: function() { return !1 }, onOptgroupClick: function() { return !1 }, onClick: function() { return !1 }, onFilter: function() { return !1 } }
                    }(t);
                    var l = n.attr("options");
                    if (l) try {
                        l = JSON.parse(l);
                        var o = '<select class="bsml-multiselect">';
                        l.map(function(e) {
                            if (o += '<option value="' + e.value + '"', e.selected) o += ' selected="selected"';
                            o += ">" + e.text + "</option>"
                        }), o += "</select>", n.html(o)
                    } catch (e) { console.log(e) } t(function() {
                        var e = 120;
                        t("select.bsml-multiselect").multipleSelect({ selectAll: !1, width: "100%", position: t(document).height() - 50 - 38 - t(a).find("select.bsml-multiselect").offset().top > e ? "bottom" : "top", maxHeight: e })
                    })
                }, a
            }), define("mip-bsml-multiselect", ["mip-bsml-multiselect/mip-bsml-multiselect"], function(e) { return e }),
            function() {
                function e(e, a) { e.registerMipElement("mip-bsml-multiselect", a, '.ms-parent{display:inline-block;position:relative;vertical-align:middle}.ms-choice{display:block;width:100%;height:26px;padding:0;overflow:hidden;cursor:pointer;border:1px solid #aaa;text-align:left;white-space:nowrap;line-height:26px;color:#444;text-decoration:none;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;background-color:#fff}.ms-choice.disabled{background-color:#f4f4f4;background-image:none;border:1px solid #ddd;cursor:default}.ms-choice>span{position:absolute;top:0;left:0;right:20px;color:#999;font-size:16px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;padding-left:17px}.ms-choice>span.placeholder{color:#999}.ms-choice>div{position:absolute;top:0;right:0;width:20px;height:25px}.ms-drop{width:100%;overflow:hidden;display:none;margin-top:-1px;padding:0;position:absolute;z-index:1000;background:#fff;color:#000;border:1px solid #aaa;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px}.ms-drop.bottom{top:100%;-webkit-box-shadow:0 4px 5px rgba(0,0,0,0.15);-moz-box-shadow:0 4px 5px rgba(0,0,0,0.15);box-shadow:0 4px 5px rgba(0,0,0,0.15)}.ms-drop.top{bottom:100%;-webkit-box-shadow:0 -4px 5px rgba(0,0,0,0.15);-moz-box-shadow:0 -4px 5px rgba(0,0,0,0.15);box-shadow:0 -4px 5px rgba(0,0,0,0.15)}.ms-search{display:inline-block;margin:0;min-height:26px;padding:4px;position:relative;white-space:nowrap;width:100%;z-index:10000}.ms-search input{width:100%;height:auto !important;min-height:24px;padding:0 20px 0 5px;margin:0;outline:0;font-family:sans-serif;font-size:1em;border:1px solid #aaa;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0;-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none}.ms-search,.ms-search input{-webkit-box-sizing:border-box;-khtml-box-sizing:border-box;-moz-box-sizing:border-box;-ms-box-sizing:border-box;box-sizing:border-box}.ms-drop ul{overflow:auto;margin:0;padding:5px 8px}.ms-drop ul>li{list-style:none;display:list-item;background-image:none;position:static}.ms-drop ul>li .disabled{opacity:.35;filter:alpha(opacity=35)}.ms-drop ul>li.multiple{display:block;float:left}.ms-drop ul>li.group{clear:both}.ms-drop ul>li.multiple label{width:100%;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ms-drop ul>li label{font-weight:normal;display:block;white-space:nowrap}.ms-drop ul>li label.optgroup{font-weight:bold}.ms-drop input[type="checkbox"]{vertical-align:middle}.ms-drop .ms-no-results{display:none}select.multi-select{display:none}.ms-choice,.ms-parent{border-radius:0;height:39px;line-height:39px;border:1px solid #f1f1f1}.ms-choice{padding-left:17px;padding-right:17px}.ms-parent .ms-drop{border:1px solid #f1f1f1;border-radius:0;display:none}.ms-parent .ms-drop ul{padding-left:17px;padding-right:17px}.ms-parent .ms-drop ul li.selected{color:#ff6d39}.ms-parent .ms-drop ul li{border-bottom:1px solid #f1f1f1;margin:0 -17px;padding:0 17px}.ms-parent .ms-drop li label input{display:none}.ms-parent .ms-drop li label{position:relative}.ms-parent .ms-drop li label:after{content:\'\';float:right;display:inline-block;width:17px;height:17px;border:1px solid #f1f1f1;position:absolute;top:50%;right:0;-webkit-transform:translate(-50%, -50%);-moz-transform:translate(-50%, -50%);-ms-transform:translate(-50%, -50%);-o-transform:translate(-50%, -50%);transform:translate(-50%, -50%)}.ms-parent .ms-drop ul li.selected label:before{content:"";float:right;display:inline-block;border-left:1px solid #ff6d39;border-bottom:1px solid #ff6d39;width:12px;height:6px;position:absolute;top:45%;right:6px;-webkit-transform:translate(-50%, -50%) rotate(-45deg);-moz-transform:translate(-50%, -50%) rotate(-45deg);-ms-transform:translate(-50%, -50%) rotate(-45deg);-o-transform:translate(-50%, -50%) rotate(-45deg);transform:translate(-50%, -50%) rotate(-45deg)}') }
                if (window.MIP) require(["mip-bsml-multiselect"], function(a) { e(window.MIP, a) });
                else require(["mip", "mip-bsml-multiselect"], e)
            }()
    }
});