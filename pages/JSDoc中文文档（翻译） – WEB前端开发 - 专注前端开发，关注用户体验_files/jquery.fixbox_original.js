(function (d, c, a, f) {
    var g = d(c);
    var e = d(a);
    var b = function (i, h) {
        this.initialize("fixbox", i, h)
    };
    b.prototype = {constructor: b, initialize: function (j, i, h) {
        var k = this;
        this.type = j;
        this.$element = d(i);
        this.options = this.options || this.getOptions(h);
        this.winH = g.height();
        this.winW = g.width();
        if (this.options.isFixdeHeight) {
            this.fixedBoxH = this.$element.outerHeight(true)
        }
        this.offsetT = this.$element.offset().top;
        this.resizeWindow();
        this.documentH = e.height();
        g.bind("resize", function () {
            k.resizeWindow()
        })
    }, getOptions: function (h) {
        h = d.extend({}, d.fn[this.type].defaults, this.$element.data(), h || {});
        return h
    }, resizeWindow: function () {
        var h = this.options;
        var i = this;
        this.winH = g.height();
        this.winW = g.width();
        if (this.winW >= h.pagewidth) {
            this.doFix();
            g.unbind("." + h.scrollEventName);
            g.bind("scroll." + h.scrollEventName, function () {
                i.doFix()
            })
        } else {
            g.unbind("." + h.scrollEventName);
            this.$element.css("position", "static")
        }
    }, doFix: function () {
        var q = this.$element;
        var r = this.options;
        var i = r.distanceToBottom;
        var h = r.distanceToTop;
        if (!this.options.isFixdeHeight) {
            this.fixedBoxH = q.outerHeight(true)
        }
        var n = this.fixedBoxH;
        var m = this.offsetT;
        var o = n + this.offsetT;
        var j = this.winH;
        if (!r.isFixdeDocHeight) {
            this.documentH = e.height()
        }
        var k = this.documentH;
        if (o + i - r.threshold >= k) {
            return
        }
        var p = o - j;
        var l = g.scrollTop();
        if (n < (j - h)) {
            if (l > m) {
                if (l >= (k - i - n)) {
                    q.css({position: "fixed", top: -(l + i + n - k)})
                } else {
                    q.css({position: "fixed", top: h})
                }
            } else {
                q.css("position", "static")
            }
        } else {
            if (l > p) {
                if (l > (k - j - i)) {
                    q.css({position: "fixed", top: -(l + i + n - k)})
                } else {
                    q.css({position: "fixed", top: j - n})
                }
            } else {
                q.css("position", "static")
            }
        }
    }};
    d.fn.fixbox = function (k) {
        var l = [];
        for (var j = 0, h = arguments.length; j < h; j++) {
            l.push(arguments[j])
        }
        var m = l.slice(1);
        return this.each(function () {
            var o = d(this), n = o.data("fixbox"), i = typeof k == "object" && k;
            if (!n) {
                n = new b(this, i);
                o.data("fixbox", n)
            }
            if (typeof l[0] == "string") {
                n[l[0]].apply(n, m)
            }
        })
    };
    d.fn.fixbox.Constructor = b;
    d.fn.fixbox.defaults = {distanceToTop: 0, distanceToBottom: 0, isFixdeHeight: true, isFixdeDocHeight: true, pagewidth: 960, threshold: 0, scrollEventName: "followScroll"}
})(window.jQuery, window, document);