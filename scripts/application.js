/*! my-project-name 2014-02-27 */
function sluggify(a) {
    return a.replace(/\W/g, "-").toLowerCase();
}

function cleanStr(a) {
    return a.replace(/\W/g, "").toLowerCase();
}

function _retrievePageJSON(a) {
    return host = "https://bridgetown-dev.squarespace.com/", Ember.$.ajax({
        url: host + a + "?format=json-pretty",
        dataType: "JSONP"
    }).then(function(a) {
        return a;
    });
}

function preload(a) {
    a.loadMany(App.Post, [ 10, 11 ], [ {
        id: 10,
        content: "testcontent",
        author_id: 1
    }, {
        id: 11,
        content: "testcontent2",
        author_id: 1
    } ]), a.load(App.User, {
        id: 1,
        username: "supervisor"
    });
}

if (function(a) {
    function b() {
        return {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1
        };
    }
    function c(a, b) {
        return function(c) {
            return k(a.call(this, c), b);
        };
    }
    function d(a, b) {
        return function(c) {
            return this.lang().ordinal(a.call(this, c), b);
        };
    }
    function e() {}
    function f(a) {
        w(a), h(this, a);
    }
    function g(a) {
        var b = q(a), c = b.year || 0, d = b.month || 0, e = b.week || 0, f = b.day || 0, g = b.hour || 0, h = b.minute || 0, i = b.second || 0, j = b.millisecond || 0;
        this._milliseconds = +j + 1e3 * i + 6e4 * h + 36e5 * g, this._days = +f + 7 * e, 
        this._months = +d + 12 * c, this._data = {}, this._bubble();
    }
    function h(a, b) {
        for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
        return b.hasOwnProperty("toString") && (a.toString = b.toString), b.hasOwnProperty("valueOf") && (a.valueOf = b.valueOf), 
        a;
    }
    function i(a) {
        var b, c = {};
        for (b in a) a.hasOwnProperty(b) && qb.hasOwnProperty(b) && (c[b] = a[b]);
        return c;
    }
    function j(a) {
        return 0 > a ? Math.ceil(a) : Math.floor(a);
    }
    function k(a, b, c) {
        for (var d = "" + Math.abs(a), e = a >= 0; d.length < b; ) d = "0" + d;
        return (e ? c ? "+" : "" : "-") + d;
    }
    function l(a, b, c, d) {
        var e, f, g = b._milliseconds, h = b._days, i = b._months;
        g && a._d.setTime(+a._d + g * c), (h || i) && (e = a.minute(), f = a.hour()), h && a.date(a.date() + h * c), 
        i && a.month(a.month() + i * c), g && !d && db.updateOffset(a), (h || i) && (a.minute(e), 
        a.hour(f));
    }
    function m(a) {
        return "[object Array]" === Object.prototype.toString.call(a);
    }
    function n(a) {
        return "[object Date]" === Object.prototype.toString.call(a) || a instanceof Date;
    }
    function o(a, b, c) {
        var d, e = Math.min(a.length, b.length), f = Math.abs(a.length - b.length), g = 0;
        for (d = 0; e > d; d++) (c && a[d] !== b[d] || !c && s(a[d]) !== s(b[d])) && g++;
        return g + f;
    }
    function p(a) {
        if (a) {
            var b = a.toLowerCase().replace(/(.)s$/, "$1");
            a = Tb[a] || Ub[b] || b;
        }
        return a;
    }
    function q(a) {
        var b, c, d = {};
        for (c in a) a.hasOwnProperty(c) && (b = p(c), b && (d[b] = a[c]));
        return d;
    }
    function r(b) {
        var c, d;
        if (0 === b.indexOf("week")) c = 7, d = "day"; else {
            if (0 !== b.indexOf("month")) return;
            c = 12, d = "month";
        }
        db[b] = function(e, f) {
            var g, h, i = db.fn._lang[b], j = [];
            if ("number" == typeof e && (f = e, e = a), h = function(a) {
                var b = db().utc().set(d, a);
                return i.call(db.fn._lang, b, e || "");
            }, null != f) return h(f);
            for (g = 0; c > g; g++) j.push(h(g));
            return j;
        };
    }
    function s(a) {
        var b = +a, c = 0;
        return 0 !== b && isFinite(b) && (c = b >= 0 ? Math.floor(b) : Math.ceil(b)), c;
    }
    function t(a, b) {
        return new Date(Date.UTC(a, b + 1, 0)).getUTCDate();
    }
    function u(a) {
        return v(a) ? 366 : 365;
    }
    function v(a) {
        return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0;
    }
    function w(a) {
        var b;
        a._a && -2 === a._pf.overflow && (b = a._a[jb] < 0 || a._a[jb] > 11 ? jb : a._a[kb] < 1 || a._a[kb] > t(a._a[ib], a._a[jb]) ? kb : a._a[lb] < 0 || a._a[lb] > 23 ? lb : a._a[mb] < 0 || a._a[mb] > 59 ? mb : a._a[nb] < 0 || a._a[nb] > 59 ? nb : a._a[ob] < 0 || a._a[ob] > 999 ? ob : -1, 
        a._pf._overflowDayOfYear && (ib > b || b > kb) && (b = kb), a._pf.overflow = b);
    }
    function x(a) {
        return null == a._isValid && (a._isValid = !isNaN(a._d.getTime()) && a._pf.overflow < 0 && !a._pf.empty && !a._pf.invalidMonth && !a._pf.nullInput && !a._pf.invalidFormat && !a._pf.userInvalidated, 
        a._strict && (a._isValid = a._isValid && 0 === a._pf.charsLeftOver && 0 === a._pf.unusedTokens.length)), 
        a._isValid;
    }
    function y(a) {
        return a ? a.toLowerCase().replace("_", "-") : a;
    }
    function z(a, b) {
        return b._isUTC ? db(a).zone(b._offset || 0) : db(a).local();
    }
    function A(a, b) {
        return b.abbr = a, pb[a] || (pb[a] = new e()), pb[a].set(b), pb[a];
    }
    function B(a) {
        delete pb[a];
    }
    function C(a) {
        var b, c, d, e, f = 0, g = function(a) {
            if (!pb[a] && rb) try {
                require("./lang/" + a);
            } catch (b) {}
            return pb[a];
        };
        if (!a) return db.fn._lang;
        if (!m(a)) {
            if (c = g(a)) return c;
            a = [ a ];
        }
        for (;f < a.length; ) {
            for (e = y(a[f]).split("-"), b = e.length, d = y(a[f + 1]), d = d ? d.split("-") : null; b > 0; ) {
                if (c = g(e.slice(0, b).join("-"))) return c;
                if (d && d.length >= b && o(e, d, !0) >= b - 1) break;
                b--;
            }
            f++;
        }
        return db.fn._lang;
    }
    function D(a) {
        return a.match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "");
    }
    function E(a) {
        var b, c, d = a.match(vb);
        for (b = 0, c = d.length; c > b; b++) d[b] = Yb[d[b]] ? Yb[d[b]] : D(d[b]);
        return function(e) {
            var f = "";
            for (b = 0; c > b; b++) f += d[b] instanceof Function ? d[b].call(e, a) : d[b];
            return f;
        };
    }
    function F(a, b) {
        return a.isValid() ? (b = G(b, a.lang()), Vb[b] || (Vb[b] = E(b)), Vb[b](a)) : a.lang().invalidDate();
    }
    function G(a, b) {
        function c(a) {
            return b.longDateFormat(a) || a;
        }
        var d = 5;
        for (wb.lastIndex = 0; d >= 0 && wb.test(a); ) a = a.replace(wb, c), wb.lastIndex = 0, 
        d -= 1;
        return a;
    }
    function H(a, b) {
        var c, d = b._strict;
        switch (a) {
          case "DDDD":
            return Ib;

          case "YYYY":
          case "GGGG":
          case "gggg":
            return d ? Jb : zb;

          case "Y":
          case "G":
          case "g":
            return Lb;

          case "YYYYYY":
          case "YYYYY":
          case "GGGGG":
          case "ggggg":
            return d ? Kb : Ab;

          case "S":
            if (d) return Gb;

          case "SS":
            if (d) return Hb;

          case "SSS":
            if (d) return Ib;

          case "DDD":
            return yb;

          case "MMM":
          case "MMMM":
          case "dd":
          case "ddd":
          case "dddd":
            return Cb;

          case "a":
          case "A":
            return C(b._l)._meridiemParse;

          case "X":
            return Fb;

          case "Z":
          case "ZZ":
            return Db;

          case "T":
            return Eb;

          case "SSSS":
            return Bb;

          case "MM":
          case "DD":
          case "YY":
          case "GG":
          case "gg":
          case "HH":
          case "hh":
          case "mm":
          case "ss":
          case "ww":
          case "WW":
            return d ? Hb : xb;

          case "M":
          case "D":
          case "d":
          case "H":
          case "h":
          case "m":
          case "s":
          case "w":
          case "W":
          case "e":
          case "E":
            return xb;

          default:
            return c = new RegExp(P(O(a.replace("\\", "")), "i"));
        }
    }
    function I(a) {
        a = a || "";
        var b = a.match(Db) || [], c = b[b.length - 1] || [], d = (c + "").match(Qb) || [ "-", 0, 0 ], e = +(60 * d[1]) + s(d[2]);
        return "+" === d[0] ? -e : e;
    }
    function J(a, b, c) {
        var d, e = c._a;
        switch (a) {
          case "M":
          case "MM":
            null != b && (e[jb] = s(b) - 1);
            break;

          case "MMM":
          case "MMMM":
            d = C(c._l).monthsParse(b), null != d ? e[jb] = d : c._pf.invalidMonth = b;
            break;

          case "D":
          case "DD":
            null != b && (e[kb] = s(b));
            break;

          case "DDD":
          case "DDDD":
            null != b && (c._dayOfYear = s(b));
            break;

          case "YY":
            e[ib] = s(b) + (s(b) > 68 ? 1900 : 2e3);
            break;

          case "YYYY":
          case "YYYYY":
          case "YYYYYY":
            e[ib] = s(b);
            break;

          case "a":
          case "A":
            c._isPm = C(c._l).isPM(b);
            break;

          case "H":
          case "HH":
          case "h":
          case "hh":
            e[lb] = s(b);
            break;

          case "m":
          case "mm":
            e[mb] = s(b);
            break;

          case "s":
          case "ss":
            e[nb] = s(b);
            break;

          case "S":
          case "SS":
          case "SSS":
          case "SSSS":
            e[ob] = s(1e3 * ("0." + b));
            break;

          case "X":
            c._d = new Date(1e3 * parseFloat(b));
            break;

          case "Z":
          case "ZZ":
            c._useUTC = !0, c._tzm = I(b);
            break;

          case "w":
          case "ww":
          case "W":
          case "WW":
          case "d":
          case "dd":
          case "ddd":
          case "dddd":
          case "e":
          case "E":
            a = a.substr(0, 1);

          case "gg":
          case "gggg":
          case "GG":
          case "GGGG":
          case "GGGGG":
            a = a.substr(0, 2), b && (c._w = c._w || {}, c._w[a] = b);
        }
    }
    function K(a) {
        var b, c, d, e, f, g, h, i, j, k, l = [];
        if (!a._d) {
            for (d = M(a), a._w && null == a._a[kb] && null == a._a[jb] && (f = function(b) {
                var c = parseInt(b, 10);
                return b ? b.length < 3 ? c > 68 ? 1900 + c : 2e3 + c : c : null == a._a[ib] ? db().weekYear() : a._a[ib];
            }, g = a._w, null != g.GG || null != g.W || null != g.E ? h = Z(f(g.GG), g.W || 1, g.E, 4, 1) : (i = C(a._l), 
            j = null != g.d ? V(g.d, i) : null != g.e ? parseInt(g.e, 10) + i._week.dow : 0, 
            k = parseInt(g.w, 10) || 1, null != g.d && j < i._week.dow && k++, h = Z(f(g.gg), k, j, i._week.doy, i._week.dow)), 
            a._a[ib] = h.year, a._dayOfYear = h.dayOfYear), a._dayOfYear && (e = null == a._a[ib] ? d[ib] : a._a[ib], 
            a._dayOfYear > u(e) && (a._pf._overflowDayOfYear = !0), c = U(e, 0, a._dayOfYear), 
            a._a[jb] = c.getUTCMonth(), a._a[kb] = c.getUTCDate()), b = 0; 3 > b && null == a._a[b]; ++b) a._a[b] = l[b] = d[b];
            for (;7 > b; b++) a._a[b] = l[b] = null == a._a[b] ? 2 === b ? 1 : 0 : a._a[b];
            l[lb] += s((a._tzm || 0) / 60), l[mb] += s((a._tzm || 0) % 60), a._d = (a._useUTC ? U : T).apply(null, l);
        }
    }
    function L(a) {
        var b;
        a._d || (b = q(a._i), a._a = [ b.year, b.month, b.day, b.hour, b.minute, b.second, b.millisecond ], 
        K(a));
    }
    function M(a) {
        var b = new Date();
        return a._useUTC ? [ b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate() ] : [ b.getFullYear(), b.getMonth(), b.getDate() ];
    }
    function N(a) {
        a._a = [], a._pf.empty = !0;
        var b, c, d, e, f, g = C(a._l), h = "" + a._i, i = h.length, j = 0;
        for (d = G(a._f, g).match(vb) || [], b = 0; b < d.length; b++) e = d[b], c = (h.match(H(e, a)) || [])[0], 
        c && (f = h.substr(0, h.indexOf(c)), f.length > 0 && a._pf.unusedInput.push(f), 
        h = h.slice(h.indexOf(c) + c.length), j += c.length), Yb[e] ? (c ? a._pf.empty = !1 : a._pf.unusedTokens.push(e), 
        J(e, c, a)) : a._strict && !c && a._pf.unusedTokens.push(e);
        a._pf.charsLeftOver = i - j, h.length > 0 && a._pf.unusedInput.push(h), a._isPm && a._a[lb] < 12 && (a._a[lb] += 12), 
        a._isPm === !1 && 12 === a._a[lb] && (a._a[lb] = 0), K(a), w(a);
    }
    function O(a) {
        return a.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(a, b, c, d, e) {
            return b || c || d || e;
        });
    }
    function P(a) {
        return a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
    }
    function Q(a) {
        var c, d, e, f, g;
        if (0 === a._f.length) return a._pf.invalidFormat = !0, void (a._d = new Date(0/0));
        for (f = 0; f < a._f.length; f++) g = 0, c = h({}, a), c._pf = b(), c._f = a._f[f], 
        N(c), x(c) && (g += c._pf.charsLeftOver, g += 10 * c._pf.unusedTokens.length, c._pf.score = g, 
        (null == e || e > g) && (e = g, d = c));
        h(a, d || c);
    }
    function R(a) {
        var b, c, d = a._i, e = Mb.exec(d);
        if (e) {
            for (a._pf.iso = !0, b = 0, c = Ob.length; c > b; b++) if (Ob[b][1].exec(d)) {
                a._f = Ob[b][0] + (e[6] || " ");
                break;
            }
            for (b = 0, c = Pb.length; c > b; b++) if (Pb[b][1].exec(d)) {
                a._f += Pb[b][0];
                break;
            }
            d.match(Db) && (a._f += "Z"), N(a);
        } else a._d = new Date(d);
    }
    function S(b) {
        var c = b._i, d = sb.exec(c);
        c === a ? b._d = new Date() : d ? b._d = new Date(+d[1]) : "string" == typeof c ? R(b) : m(c) ? (b._a = c.slice(0), 
        K(b)) : n(c) ? b._d = new Date(+c) : "object" == typeof c ? L(b) : b._d = new Date(c);
    }
    function T(a, b, c, d, e, f, g) {
        var h = new Date(a, b, c, d, e, f, g);
        return 1970 > a && h.setFullYear(a), h;
    }
    function U(a) {
        var b = new Date(Date.UTC.apply(null, arguments));
        return 1970 > a && b.setUTCFullYear(a), b;
    }
    function V(a, b) {
        if ("string" == typeof a) if (isNaN(a)) {
            if (a = b.weekdaysParse(a), "number" != typeof a) return null;
        } else a = parseInt(a, 10);
        return a;
    }
    function W(a, b, c, d, e) {
        return e.relativeTime(b || 1, !!c, a, d);
    }
    function X(a, b, c) {
        var d = hb(Math.abs(a) / 1e3), e = hb(d / 60), f = hb(e / 60), g = hb(f / 24), h = hb(g / 365), i = 45 > d && [ "s", d ] || 1 === e && [ "m" ] || 45 > e && [ "mm", e ] || 1 === f && [ "h" ] || 22 > f && [ "hh", f ] || 1 === g && [ "d" ] || 25 >= g && [ "dd", g ] || 45 >= g && [ "M" ] || 345 > g && [ "MM", hb(g / 30) ] || 1 === h && [ "y" ] || [ "yy", h ];
        return i[2] = b, i[3] = a > 0, i[4] = c, W.apply({}, i);
    }
    function Y(a, b, c) {
        var d, e = c - b, f = c - a.day();
        return f > e && (f -= 7), e - 7 > f && (f += 7), d = db(a).add("d", f), {
            week: Math.ceil(d.dayOfYear() / 7),
            year: d.year()
        };
    }
    function Z(a, b, c, d, e) {
        var f, g, h = U(a, 0, 1).getUTCDay();
        return c = null != c ? c : e, f = e - h + (h > d ? 7 : 0) - (e > h ? 7 : 0), g = 7 * (b - 1) + (c - e) + f + 1, 
        {
            year: g > 0 ? a : a - 1,
            dayOfYear: g > 0 ? g : u(a - 1) + g
        };
    }
    function $(a) {
        var b = a._i, c = a._f;
        return null === b ? db.invalid({
            nullInput: !0
        }) : ("string" == typeof b && (a._i = b = C().preparse(b)), db.isMoment(b) ? (a = i(b), 
        a._d = new Date(+b._d)) : c ? m(c) ? Q(a) : N(a) : S(a), new f(a));
    }
    function _(a, b) {
        db.fn[a] = db.fn[a + "s"] = function(a) {
            var c = this._isUTC ? "UTC" : "";
            return null != a ? (this._d["set" + c + b](a), db.updateOffset(this), this) : this._d["get" + c + b]();
        };
    }
    function ab(a) {
        db.duration.fn[a] = function() {
            return this._data[a];
        };
    }
    function bb(a, b) {
        db.duration.fn["as" + a] = function() {
            return +this / b;
        };
    }
    function cb(a) {
        var b = !1, c = db;
        "undefined" == typeof ender && (a ? (gb.moment = function() {
            return !b && console && console.warn && (b = !0, console.warn("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.")), 
            c.apply(null, arguments);
        }, h(gb.moment, c)) : gb.moment = db);
    }
    for (var db, eb, fb = "2.5.1", gb = this, hb = Math.round, ib = 0, jb = 1, kb = 2, lb = 3, mb = 4, nb = 5, ob = 6, pb = {}, qb = {
        _isAMomentObject: null,
        _i: null,
        _f: null,
        _l: null,
        _strict: null,
        _isUTC: null,
        _offset: null,
        _pf: null,
        _lang: null
    }, rb = "undefined" != typeof module && module.exports && "undefined" != typeof require, sb = /^\/?Date\((\-?\d+)/i, tb = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/, ub = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/, vb = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g, wb = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g, xb = /\d\d?/, yb = /\d{1,3}/, zb = /\d{1,4}/, Ab = /[+\-]?\d{1,6}/, Bb = /\d+/, Cb = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, Db = /Z|[\+\-]\d\d:?\d\d/gi, Eb = /T/i, Fb = /[\+\-]?\d+(\.\d{1,3})?/, Gb = /\d/, Hb = /\d\d/, Ib = /\d{3}/, Jb = /\d{4}/, Kb = /[+-]?\d{6}/, Lb = /[+-]?\d+/, Mb = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Nb = "YYYY-MM-DDTHH:mm:ssZ", Ob = [ [ "YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/ ], [ "YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/ ], [ "GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/ ], [ "GGGG-[W]WW", /\d{4}-W\d{2}/ ], [ "YYYY-DDD", /\d{4}-\d{3}/ ] ], Pb = [ [ "HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d{1,3}/ ], [ "HH:mm:ss", /(T| )\d\d:\d\d:\d\d/ ], [ "HH:mm", /(T| )\d\d:\d\d/ ], [ "HH", /(T| )\d\d/ ] ], Qb = /([\+\-]|\d\d)/gi, Rb = "Date|Hours|Minutes|Seconds|Milliseconds".split("|"), Sb = {
        Milliseconds: 1,
        Seconds: 1e3,
        Minutes: 6e4,
        Hours: 36e5,
        Days: 864e5,
        Months: 2592e6,
        Years: 31536e6
    }, Tb = {
        ms: "millisecond",
        s: "second",
        m: "minute",
        h: "hour",
        d: "day",
        D: "date",
        w: "week",
        W: "isoWeek",
        M: "month",
        y: "year",
        DDD: "dayOfYear",
        e: "weekday",
        E: "isoWeekday",
        gg: "weekYear",
        GG: "isoWeekYear"
    }, Ub = {
        dayofyear: "dayOfYear",
        isoweekday: "isoWeekday",
        isoweek: "isoWeek",
        weekyear: "weekYear",
        isoweekyear: "isoWeekYear"
    }, Vb = {}, Wb = "DDD w W M D d".split(" "), Xb = "M D H h m s w W".split(" "), Yb = {
        M: function() {
            return this.month() + 1;
        },
        MMM: function(a) {
            return this.lang().monthsShort(this, a);
        },
        MMMM: function(a) {
            return this.lang().months(this, a);
        },
        D: function() {
            return this.date();
        },
        DDD: function() {
            return this.dayOfYear();
        },
        d: function() {
            return this.day();
        },
        dd: function(a) {
            return this.lang().weekdaysMin(this, a);
        },
        ddd: function(a) {
            return this.lang().weekdaysShort(this, a);
        },
        dddd: function(a) {
            return this.lang().weekdays(this, a);
        },
        w: function() {
            return this.week();
        },
        W: function() {
            return this.isoWeek();
        },
        YY: function() {
            return k(this.year() % 100, 2);
        },
        YYYY: function() {
            return k(this.year(), 4);
        },
        YYYYY: function() {
            return k(this.year(), 5);
        },
        YYYYYY: function() {
            var a = this.year(), b = a >= 0 ? "+" : "-";
            return b + k(Math.abs(a), 6);
        },
        gg: function() {
            return k(this.weekYear() % 100, 2);
        },
        gggg: function() {
            return k(this.weekYear(), 4);
        },
        ggggg: function() {
            return k(this.weekYear(), 5);
        },
        GG: function() {
            return k(this.isoWeekYear() % 100, 2);
        },
        GGGG: function() {
            return k(this.isoWeekYear(), 4);
        },
        GGGGG: function() {
            return k(this.isoWeekYear(), 5);
        },
        e: function() {
            return this.weekday();
        },
        E: function() {
            return this.isoWeekday();
        },
        a: function() {
            return this.lang().meridiem(this.hours(), this.minutes(), !0);
        },
        A: function() {
            return this.lang().meridiem(this.hours(), this.minutes(), !1);
        },
        H: function() {
            return this.hours();
        },
        h: function() {
            return this.hours() % 12 || 12;
        },
        m: function() {
            return this.minutes();
        },
        s: function() {
            return this.seconds();
        },
        S: function() {
            return s(this.milliseconds() / 100);
        },
        SS: function() {
            return k(s(this.milliseconds() / 10), 2);
        },
        SSS: function() {
            return k(this.milliseconds(), 3);
        },
        SSSS: function() {
            return k(this.milliseconds(), 3);
        },
        Z: function() {
            var a = -this.zone(), b = "+";
            return 0 > a && (a = -a, b = "-"), b + k(s(a / 60), 2) + ":" + k(s(a) % 60, 2);
        },
        ZZ: function() {
            var a = -this.zone(), b = "+";
            return 0 > a && (a = -a, b = "-"), b + k(s(a / 60), 2) + k(s(a) % 60, 2);
        },
        z: function() {
            return this.zoneAbbr();
        },
        zz: function() {
            return this.zoneName();
        },
        X: function() {
            return this.unix();
        },
        Q: function() {
            return this.quarter();
        }
    }, Zb = [ "months", "monthsShort", "weekdays", "weekdaysShort", "weekdaysMin" ]; Wb.length; ) eb = Wb.pop(), 
    Yb[eb + "o"] = d(Yb[eb], eb);
    for (;Xb.length; ) eb = Xb.pop(), Yb[eb + eb] = c(Yb[eb], 2);
    for (Yb.DDDD = c(Yb.DDD, 3), h(e.prototype, {
        set: function(a) {
            var b, c;
            for (c in a) b = a[c], "function" == typeof b ? this[c] = b : this["_" + c] = b;
        },
        _months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        months: function(a) {
            return this._months[a.month()];
        },
        _monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        monthsShort: function(a) {
            return this._monthsShort[a.month()];
        },
        monthsParse: function(a) {
            var b, c, d;
            for (this._monthsParse || (this._monthsParse = []), b = 0; 12 > b; b++) if (this._monthsParse[b] || (c = db.utc([ 2e3, b ]), 
            d = "^" + this.months(c, "") + "|^" + this.monthsShort(c, ""), this._monthsParse[b] = new RegExp(d.replace(".", ""), "i")), 
            this._monthsParse[b].test(a)) return b;
        },
        _weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdays: function(a) {
            return this._weekdays[a.day()];
        },
        _weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysShort: function(a) {
            return this._weekdaysShort[a.day()];
        },
        _weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        weekdaysMin: function(a) {
            return this._weekdaysMin[a.day()];
        },
        weekdaysParse: function(a) {
            var b, c, d;
            for (this._weekdaysParse || (this._weekdaysParse = []), b = 0; 7 > b; b++) if (this._weekdaysParse[b] || (c = db([ 2e3, 1 ]).day(b), 
            d = "^" + this.weekdays(c, "") + "|^" + this.weekdaysShort(c, "") + "|^" + this.weekdaysMin(c, ""), 
            this._weekdaysParse[b] = new RegExp(d.replace(".", ""), "i")), this._weekdaysParse[b].test(a)) return b;
        },
        _longDateFormat: {
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D YYYY",
            LLL: "MMMM D YYYY LT",
            LLLL: "dddd, MMMM D YYYY LT"
        },
        longDateFormat: function(a) {
            var b = this._longDateFormat[a];
            return !b && this._longDateFormat[a.toUpperCase()] && (b = this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function(a) {
                return a.slice(1);
            }), this._longDateFormat[a] = b), b;
        },
        isPM: function(a) {
            return "p" === (a + "").toLowerCase().charAt(0);
        },
        _meridiemParse: /[ap]\.?m?\.?/i,
        meridiem: function(a, b, c) {
            return a > 11 ? c ? "pm" : "PM" : c ? "am" : "AM";
        },
        _calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        calendar: function(a, b) {
            var c = this._calendar[a];
            return "function" == typeof c ? c.apply(b) : c;
        },
        _relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        relativeTime: function(a, b, c, d) {
            var e = this._relativeTime[c];
            return "function" == typeof e ? e(a, b, c, d) : e.replace(/%d/i, a);
        },
        pastFuture: function(a, b) {
            var c = this._relativeTime[a > 0 ? "future" : "past"];
            return "function" == typeof c ? c(b) : c.replace(/%s/i, b);
        },
        ordinal: function(a) {
            return this._ordinal.replace("%d", a);
        },
        _ordinal: "%d",
        preparse: function(a) {
            return a;
        },
        postformat: function(a) {
            return a;
        },
        week: function(a) {
            return Y(a, this._week.dow, this._week.doy).week;
        },
        _week: {
            dow: 0,
            doy: 6
        },
        _invalidDate: "Invalid date",
        invalidDate: function() {
            return this._invalidDate;
        }
    }), db = function(c, d, e, f) {
        var g;
        return "boolean" == typeof e && (f = e, e = a), g = {}, g._isAMomentObject = !0, 
        g._i = c, g._f = d, g._l = e, g._strict = f, g._isUTC = !1, g._pf = b(), $(g);
    }, db.utc = function(c, d, e, f) {
        var g;
        return "boolean" == typeof e && (f = e, e = a), g = {}, g._isAMomentObject = !0, 
        g._useUTC = !0, g._isUTC = !0, g._l = e, g._i = c, g._f = d, g._strict = f, g._pf = b(), 
        $(g).utc();
    }, db.unix = function(a) {
        return db(1e3 * a);
    }, db.duration = function(a, b) {
        var c, d, e, f = a, h = null;
        return db.isDuration(a) ? f = {
            ms: a._milliseconds,
            d: a._days,
            M: a._months
        } : "number" == typeof a ? (f = {}, b ? f[b] = a : f.milliseconds = a) : (h = tb.exec(a)) ? (c = "-" === h[1] ? -1 : 1, 
        f = {
            y: 0,
            d: s(h[kb]) * c,
            h: s(h[lb]) * c,
            m: s(h[mb]) * c,
            s: s(h[nb]) * c,
            ms: s(h[ob]) * c
        }) : (h = ub.exec(a)) && (c = "-" === h[1] ? -1 : 1, e = function(a) {
            var b = a && parseFloat(a.replace(",", "."));
            return (isNaN(b) ? 0 : b) * c;
        }, f = {
            y: e(h[2]),
            M: e(h[3]),
            d: e(h[4]),
            h: e(h[5]),
            m: e(h[6]),
            s: e(h[7]),
            w: e(h[8])
        }), d = new g(f), db.isDuration(a) && a.hasOwnProperty("_lang") && (d._lang = a._lang), 
        d;
    }, db.version = fb, db.defaultFormat = Nb, db.updateOffset = function() {}, db.lang = function(a, b) {
        var c;
        return a ? (b ? A(y(a), b) : null === b ? (B(a), a = "en") : pb[a] || C(a), c = db.duration.fn._lang = db.fn._lang = C(a), 
        c._abbr) : db.fn._lang._abbr;
    }, db.langData = function(a) {
        return a && a._lang && a._lang._abbr && (a = a._lang._abbr), C(a);
    }, db.isMoment = function(a) {
        return a instanceof f || null != a && a.hasOwnProperty("_isAMomentObject");
    }, db.isDuration = function(a) {
        return a instanceof g;
    }, eb = Zb.length - 1; eb >= 0; --eb) r(Zb[eb]);
    for (db.normalizeUnits = function(a) {
        return p(a);
    }, db.invalid = function(a) {
        var b = db.utc(0/0);
        return null != a ? h(b._pf, a) : b._pf.userInvalidated = !0, b;
    }, db.parseZone = function(a) {
        return db(a).parseZone();
    }, h(db.fn = f.prototype, {
        clone: function() {
            return db(this);
        },
        valueOf: function() {
            return +this._d + 6e4 * (this._offset || 0);
        },
        unix: function() {
            return Math.floor(+this / 1e3);
        },
        toString: function() {
            return this.clone().lang("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
        },
        toDate: function() {
            return this._offset ? new Date(+this) : this._d;
        },
        toISOString: function() {
            var a = db(this).utc();
            return 0 < a.year() && a.year() <= 9999 ? F(a, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : F(a, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]");
        },
        toArray: function() {
            var a = this;
            return [ a.year(), a.month(), a.date(), a.hours(), a.minutes(), a.seconds(), a.milliseconds() ];
        },
        isValid: function() {
            return x(this);
        },
        isDSTShifted: function() {
            return this._a ? this.isValid() && o(this._a, (this._isUTC ? db.utc(this._a) : db(this._a)).toArray()) > 0 : !1;
        },
        parsingFlags: function() {
            return h({}, this._pf);
        },
        invalidAt: function() {
            return this._pf.overflow;
        },
        utc: function() {
            return this.zone(0);
        },
        local: function() {
            return this.zone(0), this._isUTC = !1, this;
        },
        format: function(a) {
            var b = F(this, a || db.defaultFormat);
            return this.lang().postformat(b);
        },
        add: function(a, b) {
            var c;
            return c = "string" == typeof a ? db.duration(+b, a) : db.duration(a, b), l(this, c, 1), 
            this;
        },
        subtract: function(a, b) {
            var c;
            return c = "string" == typeof a ? db.duration(+b, a) : db.duration(a, b), l(this, c, -1), 
            this;
        },
        diff: function(a, b, c) {
            var d, e, f = z(a, this), g = 6e4 * (this.zone() - f.zone());
            return b = p(b), "year" === b || "month" === b ? (d = 432e5 * (this.daysInMonth() + f.daysInMonth()), 
            e = 12 * (this.year() - f.year()) + (this.month() - f.month()), e += (this - db(this).startOf("month") - (f - db(f).startOf("month"))) / d, 
            e -= 6e4 * (this.zone() - db(this).startOf("month").zone() - (f.zone() - db(f).startOf("month").zone())) / d, 
            "year" === b && (e /= 12)) : (d = this - f, e = "second" === b ? d / 1e3 : "minute" === b ? d / 6e4 : "hour" === b ? d / 36e5 : "day" === b ? (d - g) / 864e5 : "week" === b ? (d - g) / 6048e5 : d), 
            c ? e : j(e);
        },
        from: function(a, b) {
            return db.duration(this.diff(a)).lang(this.lang()._abbr).humanize(!b);
        },
        fromNow: function(a) {
            return this.from(db(), a);
        },
        calendar: function() {
            var a = z(db(), this).startOf("day"), b = this.diff(a, "days", !0), c = -6 > b ? "sameElse" : -1 > b ? "lastWeek" : 0 > b ? "lastDay" : 1 > b ? "sameDay" : 2 > b ? "nextDay" : 7 > b ? "nextWeek" : "sameElse";
            return this.format(this.lang().calendar(c, this));
        },
        isLeapYear: function() {
            return v(this.year());
        },
        isDST: function() {
            return this.zone() < this.clone().month(0).zone() || this.zone() < this.clone().month(5).zone();
        },
        day: function(a) {
            var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            return null != a ? (a = V(a, this.lang()), this.add({
                d: a - b
            })) : b;
        },
        month: function(a) {
            var b, c = this._isUTC ? "UTC" : "";
            return null != a ? "string" == typeof a && (a = this.lang().monthsParse(a), "number" != typeof a) ? this : (b = this.date(), 
            this.date(1), this._d["set" + c + "Month"](a), this.date(Math.min(b, this.daysInMonth())), 
            db.updateOffset(this), this) : this._d["get" + c + "Month"]();
        },
        startOf: function(a) {
            switch (a = p(a)) {
              case "year":
                this.month(0);

              case "month":
                this.date(1);

              case "week":
              case "isoWeek":
              case "day":
                this.hours(0);

              case "hour":
                this.minutes(0);

              case "minute":
                this.seconds(0);

              case "second":
                this.milliseconds(0);
            }
            return "week" === a ? this.weekday(0) : "isoWeek" === a && this.isoWeekday(1), this;
        },
        endOf: function(a) {
            return a = p(a), this.startOf(a).add("isoWeek" === a ? "week" : a, 1).subtract("ms", 1);
        },
        isAfter: function(a, b) {
            return b = "undefined" != typeof b ? b : "millisecond", +this.clone().startOf(b) > +db(a).startOf(b);
        },
        isBefore: function(a, b) {
            return b = "undefined" != typeof b ? b : "millisecond", +this.clone().startOf(b) < +db(a).startOf(b);
        },
        isSame: function(a, b) {
            return b = b || "ms", +this.clone().startOf(b) === +z(a, this).startOf(b);
        },
        min: function(a) {
            return a = db.apply(null, arguments), this > a ? this : a;
        },
        max: function(a) {
            return a = db.apply(null, arguments), a > this ? this : a;
        },
        zone: function(a) {
            var b = this._offset || 0;
            return null == a ? this._isUTC ? b : this._d.getTimezoneOffset() : ("string" == typeof a && (a = I(a)), 
            Math.abs(a) < 16 && (a = 60 * a), this._offset = a, this._isUTC = !0, b !== a && l(this, db.duration(b - a, "m"), 1, !0), 
            this);
        },
        zoneAbbr: function() {
            return this._isUTC ? "UTC" : "";
        },
        zoneName: function() {
            return this._isUTC ? "Coordinated Universal Time" : "";
        },
        parseZone: function() {
            return this._tzm ? this.zone(this._tzm) : "string" == typeof this._i && this.zone(this._i), 
            this;
        },
        hasAlignedHourOffset: function(a) {
            return a = a ? db(a).zone() : 0, (this.zone() - a) % 60 === 0;
        },
        daysInMonth: function() {
            return t(this.year(), this.month());
        },
        dayOfYear: function(a) {
            var b = hb((db(this).startOf("day") - db(this).startOf("year")) / 864e5) + 1;
            return null == a ? b : this.add("d", a - b);
        },
        quarter: function() {
            return Math.ceil((this.month() + 1) / 3);
        },
        weekYear: function(a) {
            var b = Y(this, this.lang()._week.dow, this.lang()._week.doy).year;
            return null == a ? b : this.add("y", a - b);
        },
        isoWeekYear: function(a) {
            var b = Y(this, 1, 4).year;
            return null == a ? b : this.add("y", a - b);
        },
        week: function(a) {
            var b = this.lang().week(this);
            return null == a ? b : this.add("d", 7 * (a - b));
        },
        isoWeek: function(a) {
            var b = Y(this, 1, 4).week;
            return null == a ? b : this.add("d", 7 * (a - b));
        },
        weekday: function(a) {
            var b = (this.day() + 7 - this.lang()._week.dow) % 7;
            return null == a ? b : this.add("d", a - b);
        },
        isoWeekday: function(a) {
            return null == a ? this.day() || 7 : this.day(this.day() % 7 ? a : a - 7);
        },
        get: function(a) {
            return a = p(a), this[a]();
        },
        set: function(a, b) {
            return a = p(a), "function" == typeof this[a] && this[a](b), this;
        },
        lang: function(b) {
            return b === a ? this._lang : (this._lang = C(b), this);
        }
    }), eb = 0; eb < Rb.length; eb++) _(Rb[eb].toLowerCase().replace(/s$/, ""), Rb[eb]);
    _("year", "FullYear"), db.fn.days = db.fn.day, db.fn.months = db.fn.month, db.fn.weeks = db.fn.week, 
    db.fn.isoWeeks = db.fn.isoWeek, db.fn.toJSON = db.fn.toISOString, h(db.duration.fn = g.prototype, {
        _bubble: function() {
            var a, b, c, d, e = this._milliseconds, f = this._days, g = this._months, h = this._data;
            h.milliseconds = e % 1e3, a = j(e / 1e3), h.seconds = a % 60, b = j(a / 60), h.minutes = b % 60, 
            c = j(b / 60), h.hours = c % 24, f += j(c / 24), h.days = f % 30, g += j(f / 30), 
            h.months = g % 12, d = j(g / 12), h.years = d;
        },
        weeks: function() {
            return j(this.days() / 7);
        },
        valueOf: function() {
            return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * s(this._months / 12);
        },
        humanize: function(a) {
            var b = +this, c = X(b, !a, this.lang());
            return a && (c = this.lang().pastFuture(b, c)), this.lang().postformat(c);
        },
        add: function(a, b) {
            var c = db.duration(a, b);
            return this._milliseconds += c._milliseconds, this._days += c._days, this._months += c._months, 
            this._bubble(), this;
        },
        subtract: function(a, b) {
            var c = db.duration(a, b);
            return this._milliseconds -= c._milliseconds, this._days -= c._days, this._months -= c._months, 
            this._bubble(), this;
        },
        get: function(a) {
            return a = p(a), this[a.toLowerCase() + "s"]();
        },
        as: function(a) {
            return a = p(a), this["as" + a.charAt(0).toUpperCase() + a.slice(1) + "s"]();
        },
        lang: db.fn.lang,
        toIsoString: function() {
            var a = Math.abs(this.years()), b = Math.abs(this.months()), c = Math.abs(this.days()), d = Math.abs(this.hours()), e = Math.abs(this.minutes()), f = Math.abs(this.seconds() + this.milliseconds() / 1e3);
            return this.asSeconds() ? (this.asSeconds() < 0 ? "-" : "") + "P" + (a ? a + "Y" : "") + (b ? b + "M" : "") + (c ? c + "D" : "") + (d || e || f ? "T" : "") + (d ? d + "H" : "") + (e ? e + "M" : "") + (f ? f + "S" : "") : "P0D";
        }
    });
    for (eb in Sb) Sb.hasOwnProperty(eb) && (bb(eb, Sb[eb]), ab(eb.toLowerCase()));
    bb("Weeks", 6048e5), db.duration.fn.asMonths = function() {
        return (+this - 31536e6 * this.years()) / 2592e6 + 12 * this.years();
    }, db.lang("en", {
        ordinal: function(a) {
            var b = a % 10, c = 1 === s(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
            return a + c;
        }
    }), rb ? (module.exports = db, cb(!0)) : "function" == typeof define && define.amd ? define("moment", function(b, c, d) {
        return d.config && d.config() && d.config().noGlobal !== !0 && cb(d.config().noGlobal === a), 
        db;
    }) : cb();
}.call(this), !function(a, b) {
    "object" == typeof exports ? module.exports = b() : "function" == typeof define && define.amd ? define(b) : a.Spinner = b();
}(this, function() {
    "use strict";
    function a(a, b) {
        var c, d = document.createElement(a || "div");
        for (c in b) d[c] = b[c];
        return d;
    }
    function b(a) {
        for (var b = 1, c = arguments.length; c > b; b++) a.appendChild(arguments[b]);
        return a;
    }
    function c(a, b, c, d) {
        var e = [ "opacity", b, ~~(100 * a), c, d ].join("-"), f = .01 + c / d * 100, g = Math.max(1 - (1 - a) / b * (100 - f), a), h = k.substring(0, k.indexOf("Animation")).toLowerCase(), i = h && "-" + h + "-" || "";
        return m[e] || (n.insertRule("@" + i + "keyframes " + e + "{0%{opacity:" + g + "}" + f + "%{opacity:" + a + "}" + (f + .01) + "%{opacity:1}" + (f + b) % 100 + "%{opacity:" + a + "}100%{opacity:" + g + "}}", n.cssRules.length), 
        m[e] = 1), e;
    }
    function d(a, b) {
        var c, d, e = a.style;
        for (b = b.charAt(0).toUpperCase() + b.slice(1), d = 0; d < l.length; d++) if (c = l[d] + b, 
        void 0 !== e[c]) return c;
        return void 0 !== e[b] ? b : void 0;
    }
    function e(a, b) {
        for (var c in b) a.style[d(a, c) || c] = b[c];
        return a;
    }
    function f(a) {
        for (var b = 1; b < arguments.length; b++) {
            var c = arguments[b];
            for (var d in c) void 0 === a[d] && (a[d] = c[d]);
        }
        return a;
    }
    function g(a) {
        for (var b = {
            x: a.offsetLeft,
            y: a.offsetTop
        }; a = a.offsetParent; ) b.x += a.offsetLeft, b.y += a.offsetTop;
        return b;
    }
    function h(a, b) {
        return "string" == typeof a ? a : a[b % a.length];
    }
    function i(a) {
        return "undefined" == typeof this ? new i(a) : void (this.opts = f(a || {}, i.defaults, o));
    }
    function j() {
        function c(b, c) {
            return a("<" + b + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', c);
        }
        n.addRule(".spin-vml", "behavior:url(#default#VML)"), i.prototype.lines = function(a, d) {
            function f() {
                return e(c("group", {
                    coordsize: k + " " + k,
                    coordorigin: -j + " " + -j
                }), {
                    width: k,
                    height: k
                });
            }
            function g(a, g, i) {
                b(m, b(e(f(), {
                    rotation: 360 / d.lines * a + "deg",
                    left: ~~g
                }), b(e(c("roundrect", {
                    arcsize: d.corners
                }), {
                    width: j,
                    height: d.width,
                    left: d.radius,
                    top: -d.width >> 1,
                    filter: i
                }), c("fill", {
                    color: h(d.color, a),
                    opacity: d.opacity
                }), c("stroke", {
                    opacity: 0
                }))));
            }
            var i, j = d.length + d.width, k = 2 * j, l = 2 * -(d.width + d.length) + "px", m = e(f(), {
                position: "absolute",
                top: l,
                left: l
            });
            if (d.shadow) for (i = 1; i <= d.lines; i++) g(i, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");
            for (i = 1; i <= d.lines; i++) g(i);
            return b(a, m);
        }, i.prototype.opacity = function(a, b, c, d) {
            var e = a.firstChild;
            d = d.shadow && d.lines || 0, e && b + d < e.childNodes.length && (e = e.childNodes[b + d], 
            e = e && e.firstChild, e = e && e.firstChild, e && (e.opacity = c));
        };
    }
    var k, l = [ "webkit", "Moz", "ms", "O" ], m = {}, n = function() {
        var c = a("style", {
            type: "text/css"
        });
        return b(document.getElementsByTagName("head")[0], c), c.sheet || c.styleSheet;
    }(), o = {
        lines: 12,
        length: 7,
        width: 5,
        radius: 10,
        rotate: 0,
        corners: 1,
        color: "#000",
        direction: 1,
        speed: 1,
        trail: 100,
        opacity: .25,
        fps: 20,
        zIndex: 2e9,
        className: "spinner",
        top: "auto",
        left: "auto",
        position: "relative"
    };
    i.defaults = {}, f(i.prototype, {
        spin: function(b) {
            this.stop();
            var c, d, f = this, h = f.opts, i = f.el = e(a(0, {
                className: h.className
            }), {
                position: h.position,
                width: 0,
                zIndex: h.zIndex
            }), j = h.radius + h.length + h.width;
            if (b && (b.insertBefore(i, b.firstChild || null), d = g(b), c = g(i), e(i, {
                left: ("auto" == h.left ? d.x - c.x + (b.offsetWidth >> 1) : parseInt(h.left, 10) + j) + "px",
                top: ("auto" == h.top ? d.y - c.y + (b.offsetHeight >> 1) : parseInt(h.top, 10) + j) + "px"
            })), i.setAttribute("role", "progressbar"), f.lines(i, f.opts), !k) {
                var l, m = 0, n = (h.lines - 1) * (1 - h.direction) / 2, o = h.fps, p = o / h.speed, q = (1 - h.opacity) / (p * h.trail / 100), r = p / h.lines;
                !function s() {
                    m++;
                    for (var a = 0; a < h.lines; a++) l = Math.max(1 - (m + (h.lines - a) * r) % p * q, h.opacity), 
                    f.opacity(i, a * h.direction + n, l, h);
                    f.timeout = f.el && setTimeout(s, ~~(1e3 / o));
                }();
            }
            return f;
        },
        stop: function() {
            var a = this.el;
            return a && (clearTimeout(this.timeout), a.parentNode && a.parentNode.removeChild(a), 
            this.el = void 0), this;
        },
        lines: function(d, f) {
            function g(b, c) {
                return e(a(), {
                    position: "absolute",
                    width: f.length + f.width + "px",
                    height: f.width + "px",
                    background: b,
                    boxShadow: c,
                    transformOrigin: "left",
                    transform: "rotate(" + ~~(360 / f.lines * j + f.rotate) + "deg) translate(" + f.radius + "px,0)",
                    borderRadius: (f.corners * f.width >> 1) + "px"
                });
            }
            for (var i, j = 0, l = (f.lines - 1) * (1 - f.direction) / 2; j < f.lines; j++) i = e(a(), {
                position: "absolute",
                top: 1 + ~(f.width / 2) + "px",
                transform: f.hwaccel ? "translate3d(0,0,0)" : "",
                opacity: f.opacity,
                animation: k && c(f.opacity, f.trail, l + j * f.direction, f.lines) + " " + 1 / f.speed + "s linear infinite"
            }), f.shadow && b(i, e(g("#000", "0 0 4px #000"), {
                top: "2px"
            })), b(d, b(i, g(h(f.color, j), "0 0 1px rgba(0,0,0,.1)")));
            return d;
        },
        opacity: function(a, b, c) {
            b < a.childNodes.length && (a.childNodes[b].style.opacity = c);
        }
    });
    var p = e(a("group"), {
        behavior: "url(#default#VML)"
    });
    return !d(p, "transform") && p.adj ? j() : k = d(p, "animation"), i;
}), function() {
    var a = this, b = a._, c = {}, d = Array.prototype, e = Object.prototype, f = Function.prototype, g = d.push, h = d.slice, i = d.concat, j = e.toString, k = e.hasOwnProperty, l = d.forEach, m = d.map, n = d.reduce, o = d.reduceRight, p = d.filter, q = d.every, r = d.some, s = d.indexOf, t = d.lastIndexOf, u = Array.isArray, v = Object.keys, w = f.bind, x = function(a) {
        return a instanceof x ? a : this instanceof x ? void (this._wrapped = a) : new x(a);
    };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = x), 
    exports._ = x) : a._ = x, x.VERSION = "1.5.2";
    var y = x.each = x.forEach = function(a, b, d) {
        if (null != a) if (l && a.forEach === l) a.forEach(b, d); else if (a.length === +a.length) {
            for (var e = 0, f = a.length; f > e; e++) if (b.call(d, a[e], e, a) === c) return;
        } else for (var g = x.keys(a), e = 0, f = g.length; f > e; e++) if (b.call(d, a[g[e]], g[e], a) === c) return;
    };
    x.map = x.collect = function(a, b, c) {
        var d = [];
        return null == a ? d : m && a.map === m ? a.map(b, c) : (y(a, function(a, e, f) {
            d.push(b.call(c, a, e, f));
        }), d);
    };
    var z = "Reduce of empty array with no initial value";
    x.reduce = x.foldl = x.inject = function(a, b, c, d) {
        var e = arguments.length > 2;
        if (null == a && (a = []), n && a.reduce === n) return d && (b = x.bind(b, d)), 
        e ? a.reduce(b, c) : a.reduce(b);
        if (y(a, function(a, f, g) {
            e ? c = b.call(d, c, a, f, g) : (c = a, e = !0);
        }), !e) throw new TypeError(z);
        return c;
    }, x.reduceRight = x.foldr = function(a, b, c, d) {
        var e = arguments.length > 2;
        if (null == a && (a = []), o && a.reduceRight === o) return d && (b = x.bind(b, d)), 
        e ? a.reduceRight(b, c) : a.reduceRight(b);
        var f = a.length;
        if (f !== +f) {
            var g = x.keys(a);
            f = g.length;
        }
        if (y(a, function(h, i, j) {
            i = g ? g[--f] : --f, e ? c = b.call(d, c, a[i], i, j) : (c = a[i], e = !0);
        }), !e) throw new TypeError(z);
        return c;
    }, x.find = x.detect = function(a, b, c) {
        var d;
        return A(a, function(a, e, f) {
            return b.call(c, a, e, f) ? (d = a, !0) : void 0;
        }), d;
    }, x.filter = x.select = function(a, b, c) {
        var d = [];
        return null == a ? d : p && a.filter === p ? a.filter(b, c) : (y(a, function(a, e, f) {
            b.call(c, a, e, f) && d.push(a);
        }), d);
    }, x.reject = function(a, b, c) {
        return x.filter(a, function(a, d, e) {
            return !b.call(c, a, d, e);
        }, c);
    }, x.every = x.all = function(a, b, d) {
        b || (b = x.identity);
        var e = !0;
        return null == a ? e : q && a.every === q ? a.every(b, d) : (y(a, function(a, f, g) {
            return (e = e && b.call(d, a, f, g)) ? void 0 : c;
        }), !!e);
    };
    var A = x.some = x.any = function(a, b, d) {
        b || (b = x.identity);
        var e = !1;
        return null == a ? e : r && a.some === r ? a.some(b, d) : (y(a, function(a, f, g) {
            return e || (e = b.call(d, a, f, g)) ? c : void 0;
        }), !!e);
    };
    x.contains = x.include = function(a, b) {
        return null == a ? !1 : s && a.indexOf === s ? -1 != a.indexOf(b) : A(a, function(a) {
            return a === b;
        });
    }, x.invoke = function(a, b) {
        var c = h.call(arguments, 2), d = x.isFunction(b);
        return x.map(a, function(a) {
            return (d ? b : a[b]).apply(a, c);
        });
    }, x.pluck = function(a, b) {
        return x.map(a, function(a) {
            return a[b];
        });
    }, x.where = function(a, b, c) {
        return x.isEmpty(b) ? c ? void 0 : [] : x[c ? "find" : "filter"](a, function(a) {
            for (var c in b) if (b[c] !== a[c]) return !1;
            return !0;
        });
    }, x.findWhere = function(a, b) {
        return x.where(a, b, !0);
    }, x.max = function(a, b, c) {
        if (!b && x.isArray(a) && a[0] === +a[0] && a.length < 65535) return Math.max.apply(Math, a);
        if (!b && x.isEmpty(a)) return -1 / 0;
        var d = {
            computed: -1 / 0,
            value: -1 / 0
        };
        return y(a, function(a, e, f) {
            var g = b ? b.call(c, a, e, f) : a;
            g > d.computed && (d = {
                value: a,
                computed: g
            });
        }), d.value;
    }, x.min = function(a, b, c) {
        if (!b && x.isArray(a) && a[0] === +a[0] && a.length < 65535) return Math.min.apply(Math, a);
        if (!b && x.isEmpty(a)) return 1 / 0;
        var d = {
            computed: 1 / 0,
            value: 1 / 0
        };
        return y(a, function(a, e, f) {
            var g = b ? b.call(c, a, e, f) : a;
            g < d.computed && (d = {
                value: a,
                computed: g
            });
        }), d.value;
    }, x.shuffle = function(a) {
        var b, c = 0, d = [];
        return y(a, function(a) {
            b = x.random(c++), d[c - 1] = d[b], d[b] = a;
        }), d;
    }, x.sample = function(a, b, c) {
        return arguments.length < 2 || c ? a[x.random(a.length - 1)] : x.shuffle(a).slice(0, Math.max(0, b));
    };
    var B = function(a) {
        return x.isFunction(a) ? a : function(b) {
            return b[a];
        };
    };
    x.sortBy = function(a, b, c) {
        var d = B(b);
        return x.pluck(x.map(a, function(a, b, e) {
            return {
                value: a,
                index: b,
                criteria: d.call(c, a, b, e)
            };
        }).sort(function(a, b) {
            var c = a.criteria, d = b.criteria;
            if (c !== d) {
                if (c > d || void 0 === c) return 1;
                if (d > c || void 0 === d) return -1;
            }
            return a.index - b.index;
        }), "value");
    };
    var C = function(a) {
        return function(b, c, d) {
            var e = {}, f = null == c ? x.identity : B(c);
            return y(b, function(c, g) {
                var h = f.call(d, c, g, b);
                a(e, h, c);
            }), e;
        };
    };
    x.groupBy = C(function(a, b, c) {
        (x.has(a, b) ? a[b] : a[b] = []).push(c);
    }), x.indexBy = C(function(a, b, c) {
        a[b] = c;
    }), x.countBy = C(function(a, b) {
        x.has(a, b) ? a[b]++ : a[b] = 1;
    }), x.sortedIndex = function(a, b, c, d) {
        c = null == c ? x.identity : B(c);
        for (var e = c.call(d, b), f = 0, g = a.length; g > f; ) {
            var h = f + g >>> 1;
            c.call(d, a[h]) < e ? f = h + 1 : g = h;
        }
        return f;
    }, x.toArray = function(a) {
        return a ? x.isArray(a) ? h.call(a) : a.length === +a.length ? x.map(a, x.identity) : x.values(a) : [];
    }, x.size = function(a) {
        return null == a ? 0 : a.length === +a.length ? a.length : x.keys(a).length;
    }, x.first = x.head = x.take = function(a, b, c) {
        return null == a ? void 0 : null == b || c ? a[0] : h.call(a, 0, b);
    }, x.initial = function(a, b, c) {
        return h.call(a, 0, a.length - (null == b || c ? 1 : b));
    }, x.last = function(a, b, c) {
        return null == a ? void 0 : null == b || c ? a[a.length - 1] : h.call(a, Math.max(a.length - b, 0));
    }, x.rest = x.tail = x.drop = function(a, b, c) {
        return h.call(a, null == b || c ? 1 : b);
    }, x.compact = function(a) {
        return x.filter(a, x.identity);
    };
    var D = function(a, b, c) {
        return b && x.every(a, x.isArray) ? i.apply(c, a) : (y(a, function(a) {
            x.isArray(a) || x.isArguments(a) ? b ? g.apply(c, a) : D(a, b, c) : c.push(a);
        }), c);
    };
    x.flatten = function(a, b) {
        return D(a, b, []);
    }, x.without = function(a) {
        return x.difference(a, h.call(arguments, 1));
    }, x.uniq = x.unique = function(a, b, c, d) {
        x.isFunction(b) && (d = c, c = b, b = !1);
        var e = c ? x.map(a, c, d) : a, f = [], g = [];
        return y(e, function(c, d) {
            (b ? d && g[g.length - 1] === c : x.contains(g, c)) || (g.push(c), f.push(a[d]));
        }), f;
    }, x.union = function() {
        return x.uniq(x.flatten(arguments, !0));
    }, x.intersection = function(a) {
        var b = h.call(arguments, 1);
        return x.filter(x.uniq(a), function(a) {
            return x.every(b, function(b) {
                return x.indexOf(b, a) >= 0;
            });
        });
    }, x.difference = function(a) {
        var b = i.apply(d, h.call(arguments, 1));
        return x.filter(a, function(a) {
            return !x.contains(b, a);
        });
    }, x.zip = function() {
        for (var a = x.max(x.pluck(arguments, "length").concat(0)), b = new Array(a), c = 0; a > c; c++) b[c] = x.pluck(arguments, "" + c);
        return b;
    }, x.object = function(a, b) {
        if (null == a) return {};
        for (var c = {}, d = 0, e = a.length; e > d; d++) b ? c[a[d]] = b[d] : c[a[d][0]] = a[d][1];
        return c;
    }, x.indexOf = function(a, b, c) {
        if (null == a) return -1;
        var d = 0, e = a.length;
        if (c) {
            if ("number" != typeof c) return d = x.sortedIndex(a, b), a[d] === b ? d : -1;
            d = 0 > c ? Math.max(0, e + c) : c;
        }
        if (s && a.indexOf === s) return a.indexOf(b, c);
        for (;e > d; d++) if (a[d] === b) return d;
        return -1;
    }, x.lastIndexOf = function(a, b, c) {
        if (null == a) return -1;
        var d = null != c;
        if (t && a.lastIndexOf === t) return d ? a.lastIndexOf(b, c) : a.lastIndexOf(b);
        for (var e = d ? c : a.length; e--; ) if (a[e] === b) return e;
        return -1;
    }, x.range = function(a, b, c) {
        arguments.length <= 1 && (b = a || 0, a = 0), c = arguments[2] || 1;
        for (var d = Math.max(Math.ceil((b - a) / c), 0), e = 0, f = new Array(d); d > e; ) f[e++] = a, 
        a += c;
        return f;
    };
    var E = function() {};
    x.bind = function(a, b) {
        var c, d;
        if (w && a.bind === w) return w.apply(a, h.call(arguments, 1));
        if (!x.isFunction(a)) throw new TypeError();
        return c = h.call(arguments, 2), d = function() {
            if (!(this instanceof d)) return a.apply(b, c.concat(h.call(arguments)));
            E.prototype = a.prototype;
            var e = new E();
            E.prototype = null;
            var f = a.apply(e, c.concat(h.call(arguments)));
            return Object(f) === f ? f : e;
        };
    }, x.partial = function(a) {
        var b = h.call(arguments, 1);
        return function() {
            return a.apply(this, b.concat(h.call(arguments)));
        };
    }, x.bindAll = function(a) {
        var b = h.call(arguments, 1);
        if (0 === b.length) throw new Error("bindAll must be passed function names");
        return y(b, function(b) {
            a[b] = x.bind(a[b], a);
        }), a;
    }, x.memoize = function(a, b) {
        var c = {};
        return b || (b = x.identity), function() {
            var d = b.apply(this, arguments);
            return x.has(c, d) ? c[d] : c[d] = a.apply(this, arguments);
        };
    }, x.delay = function(a, b) {
        var c = h.call(arguments, 2);
        return setTimeout(function() {
            return a.apply(null, c);
        }, b);
    }, x.defer = function(a) {
        return x.delay.apply(x, [ a, 1 ].concat(h.call(arguments, 1)));
    }, x.throttle = function(a, b, c) {
        var d, e, f, g = null, h = 0;
        c || (c = {});
        var i = function() {
            h = c.leading === !1 ? 0 : new Date(), g = null, f = a.apply(d, e);
        };
        return function() {
            var j = new Date();
            h || c.leading !== !1 || (h = j);
            var k = b - (j - h);
            return d = this, e = arguments, 0 >= k ? (clearTimeout(g), g = null, h = j, f = a.apply(d, e)) : g || c.trailing === !1 || (g = setTimeout(i, k)), 
            f;
        };
    }, x.debounce = function(a, b, c) {
        var d, e, f, g, h;
        return function() {
            f = this, e = arguments, g = new Date();
            var i = function() {
                var j = new Date() - g;
                b > j ? d = setTimeout(i, b - j) : (d = null, c || (h = a.apply(f, e)));
            }, j = c && !d;
            return d || (d = setTimeout(i, b)), j && (h = a.apply(f, e)), h;
        };
    }, x.once = function(a) {
        var b, c = !1;
        return function() {
            return c ? b : (c = !0, b = a.apply(this, arguments), a = null, b);
        };
    }, x.wrap = function(a, b) {
        return function() {
            var c = [ a ];
            return g.apply(c, arguments), b.apply(this, c);
        };
    }, x.compose = function() {
        var a = arguments;
        return function() {
            for (var b = arguments, c = a.length - 1; c >= 0; c--) b = [ a[c].apply(this, b) ];
            return b[0];
        };
    }, x.after = function(a, b) {
        return function() {
            return --a < 1 ? b.apply(this, arguments) : void 0;
        };
    }, x.keys = v || function(a) {
        if (a !== Object(a)) throw new TypeError("Invalid object");
        var b = [];
        for (var c in a) x.has(a, c) && b.push(c);
        return b;
    }, x.values = function(a) {
        for (var b = x.keys(a), c = b.length, d = new Array(c), e = 0; c > e; e++) d[e] = a[b[e]];
        return d;
    }, x.pairs = function(a) {
        for (var b = x.keys(a), c = b.length, d = new Array(c), e = 0; c > e; e++) d[e] = [ b[e], a[b[e]] ];
        return d;
    }, x.invert = function(a) {
        for (var b = {}, c = x.keys(a), d = 0, e = c.length; e > d; d++) b[a[c[d]]] = c[d];
        return b;
    }, x.functions = x.methods = function(a) {
        var b = [];
        for (var c in a) x.isFunction(a[c]) && b.push(c);
        return b.sort();
    }, x.extend = function(a) {
        return y(h.call(arguments, 1), function(b) {
            if (b) for (var c in b) a[c] = b[c];
        }), a;
    }, x.pick = function(a) {
        var b = {}, c = i.apply(d, h.call(arguments, 1));
        return y(c, function(c) {
            c in a && (b[c] = a[c]);
        }), b;
    }, x.omit = function(a) {
        var b = {}, c = i.apply(d, h.call(arguments, 1));
        for (var e in a) x.contains(c, e) || (b[e] = a[e]);
        return b;
    }, x.defaults = function(a) {
        return y(h.call(arguments, 1), function(b) {
            if (b) for (var c in b) void 0 === a[c] && (a[c] = b[c]);
        }), a;
    }, x.clone = function(a) {
        return x.isObject(a) ? x.isArray(a) ? a.slice() : x.extend({}, a) : a;
    }, x.tap = function(a, b) {
        return b(a), a;
    };
    var F = function(a, b, c, d) {
        if (a === b) return 0 !== a || 1 / a == 1 / b;
        if (null == a || null == b) return a === b;
        a instanceof x && (a = a._wrapped), b instanceof x && (b = b._wrapped);
        var e = j.call(a);
        if (e != j.call(b)) return !1;
        switch (e) {
          case "[object String]":
            return a == String(b);

          case "[object Number]":
            return a != +a ? b != +b : 0 == a ? 1 / a == 1 / b : a == +b;

          case "[object Date]":
          case "[object Boolean]":
            return +a == +b;

          case "[object RegExp]":
            return a.source == b.source && a.global == b.global && a.multiline == b.multiline && a.ignoreCase == b.ignoreCase;
        }
        if ("object" != typeof a || "object" != typeof b) return !1;
        for (var f = c.length; f--; ) if (c[f] == a) return d[f] == b;
        var g = a.constructor, h = b.constructor;
        if (g !== h && !(x.isFunction(g) && g instanceof g && x.isFunction(h) && h instanceof h)) return !1;
        c.push(a), d.push(b);
        var i = 0, k = !0;
        if ("[object Array]" == e) {
            if (i = a.length, k = i == b.length) for (;i-- && (k = F(a[i], b[i], c, d)); ) ;
        } else {
            for (var l in a) if (x.has(a, l) && (i++, !(k = x.has(b, l) && F(a[l], b[l], c, d)))) break;
            if (k) {
                for (l in b) if (x.has(b, l) && !i--) break;
                k = !i;
            }
        }
        return c.pop(), d.pop(), k;
    };
    x.isEqual = function(a, b) {
        return F(a, b, [], []);
    }, x.isEmpty = function(a) {
        if (null == a) return !0;
        if (x.isArray(a) || x.isString(a)) return 0 === a.length;
        for (var b in a) if (x.has(a, b)) return !1;
        return !0;
    }, x.isElement = function(a) {
        return !(!a || 1 !== a.nodeType);
    }, x.isArray = u || function(a) {
        return "[object Array]" == j.call(a);
    }, x.isObject = function(a) {
        return a === Object(a);
    }, y([ "Arguments", "Function", "String", "Number", "Date", "RegExp" ], function(a) {
        x["is" + a] = function(b) {
            return j.call(b) == "[object " + a + "]";
        };
    }), x.isArguments(arguments) || (x.isArguments = function(a) {
        return !(!a || !x.has(a, "callee"));
    }), "function" != typeof /./ && (x.isFunction = function(a) {
        return "function" == typeof a;
    }), x.isFinite = function(a) {
        return isFinite(a) && !isNaN(parseFloat(a));
    }, x.isNaN = function(a) {
        return x.isNumber(a) && a != +a;
    }, x.isBoolean = function(a) {
        return a === !0 || a === !1 || "[object Boolean]" == j.call(a);
    }, x.isNull = function(a) {
        return null === a;
    }, x.isUndefined = function(a) {
        return void 0 === a;
    }, x.has = function(a, b) {
        return k.call(a, b);
    }, x.noConflict = function() {
        return a._ = b, this;
    }, x.identity = function(a) {
        return a;
    }, x.times = function(a, b, c) {
        for (var d = Array(Math.max(0, a)), e = 0; a > e; e++) d[e] = b.call(c, e);
        return d;
    }, x.random = function(a, b) {
        return null == b && (b = a, a = 0), a + Math.floor(Math.random() * (b - a + 1));
    };
    var G = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;"
        }
    };
    G.unescape = x.invert(G.escape);
    var H = {
        escape: new RegExp("[" + x.keys(G.escape).join("") + "]", "g"),
        unescape: new RegExp("(" + x.keys(G.unescape).join("|") + ")", "g")
    };
    x.each([ "escape", "unescape" ], function(a) {
        x[a] = function(b) {
            return null == b ? "" : ("" + b).replace(H[a], function(b) {
                return G[a][b];
            });
        };
    }), x.result = function(a, b) {
        if (null == a) return void 0;
        var c = a[b];
        return x.isFunction(c) ? c.call(a) : c;
    }, x.mixin = function(a) {
        y(x.functions(a), function(b) {
            var c = x[b] = a[b];
            x.prototype[b] = function() {
                var a = [ this._wrapped ];
                return g.apply(a, arguments), M.call(this, c.apply(x, a));
            };
        });
    };
    var I = 0;
    x.uniqueId = function(a) {
        var b = ++I + "";
        return a ? a + b : b;
    }, x.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var J = /(.)^/, K = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "	": "t",
        "\u2028": "u2028",
        "\u2029": "u2029"
    }, L = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    x.template = function(a, b, c) {
        var d;
        c = x.defaults({}, c, x.templateSettings);
        var e = new RegExp([ (c.escape || J).source, (c.interpolate || J).source, (c.evaluate || J).source ].join("|") + "|$", "g"), f = 0, g = "__p+='";
        a.replace(e, function(b, c, d, e, h) {
            return g += a.slice(f, h).replace(L, function(a) {
                return "\\" + K[a];
            }), c && (g += "'+\n((__t=(" + c + "))==null?'':_.escape(__t))+\n'"), d && (g += "'+\n((__t=(" + d + "))==null?'':__t)+\n'"), 
            e && (g += "';\n" + e + "\n__p+='"), f = h + b.length, b;
        }), g += "';\n", c.variable || (g = "with(obj||{}){\n" + g + "}\n"), g = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + g + "return __p;\n";
        try {
            d = new Function(c.variable || "obj", "_", g);
        } catch (h) {
            throw h.source = g, h;
        }
        if (b) return d(b, x);
        var i = function(a) {
            return d.call(this, a, x);
        };
        return i.source = "function(" + (c.variable || "obj") + "){\n" + g + "}", i;
    }, x.chain = function(a) {
        return x(a).chain();
    };
    var M = function(a) {
        return this._chain ? x(a).chain() : a;
    };
    x.mixin(x), y([ "pop", "push", "reverse", "shift", "sort", "splice", "unshift" ], function(a) {
        var b = d[a];
        x.prototype[a] = function() {
            var c = this._wrapped;
            return b.apply(c, arguments), "shift" != a && "splice" != a || 0 !== c.length || delete c[0], 
            M.call(this, c);
        };
    }), y([ "concat", "join", "slice" ], function(a) {
        var b = d[a];
        x.prototype[a] = function() {
            return M.call(this, b.apply(this._wrapped, arguments));
        };
    }), x.extend(x.prototype, {
        chain: function() {
            return this._chain = !0, this;
        },
        value: function() {
            return this._wrapped;
        }
    });
}.call(this), "undefined" == typeof jQuery) throw new Error("Bootstrap requires jQuery");

+function(a) {
    "use strict";
    function b() {
        var a = document.createElement("bootstrap"), b = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var c in b) if (void 0 !== a.style[c]) return {
            end: b[c]
        };
        return !1;
    }
    a.fn.emulateTransitionEnd = function(b) {
        var c = !1, d = this;
        a(this).one(a.support.transition.end, function() {
            c = !0;
        });
        var e = function() {
            c || a(d).trigger(a.support.transition.end);
        };
        return setTimeout(e, b), this;
    }, a(function() {
        a.support.transition = b();
    });
}(jQuery), +function(a) {
    "use strict";
    var b = '[data-dismiss="alert"]', c = function(c) {
        a(c).on("click", b, this.close);
    };
    c.prototype.close = function(b) {
        function c() {
            f.trigger("closed.bs.alert").remove();
        }
        var d = a(this), e = d.attr("data-target");
        e || (e = d.attr("href"), e = e && e.replace(/.*(?=#[^\s]*$)/, ""));
        var f = a(e);
        b && b.preventDefault(), f.length || (f = d.hasClass("alert") ? d : d.parent()), 
        f.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (f.removeClass("in"), 
        a.support.transition && f.hasClass("fade") ? f.one(a.support.transition.end, c).emulateTransitionEnd(150) : c());
    };
    var d = a.fn.alert;
    a.fn.alert = function(b) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.alert");
            e || d.data("bs.alert", e = new c(this)), "string" == typeof b && e[b].call(d);
        });
    }, a.fn.alert.Constructor = c, a.fn.alert.noConflict = function() {
        return a.fn.alert = d, this;
    }, a(document).on("click.bs.alert.data-api", b, c.prototype.close);
}(jQuery), +function(a) {
    "use strict";
    var b = function(c, d) {
        this.$element = a(c), this.options = a.extend({}, b.DEFAULTS, d), this.isLoading = !1;
    };
    b.DEFAULTS = {
        loadingText: "loading..."
    }, b.prototype.setState = function(b) {
        var c = "disabled", d = this.$element, e = d.is("input") ? "val" : "html", f = d.data();
        b += "Text", f.resetText || d.data("resetText", d[e]()), d[e](f[b] || this.options[b]), 
        setTimeout(a.proxy(function() {
            "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, 
            d.removeClass(c).removeAttr(c));
        }, this), 0);
    }, b.prototype.toggle = function() {
        var a = !0, b = this.$element.closest('[data-toggle="buttons"]');
        if (b.length) {
            var c = this.$element.find("input");
            "radio" == c.prop("type") && (c.prop("checked") && this.$element.hasClass("active") ? a = !1 : b.find(".active").removeClass("active")), 
            a && c.prop("checked", !this.$element.hasClass("active")).trigger("change");
        }
        a && this.$element.toggleClass("active");
    };
    var c = a.fn.button;
    a.fn.button = function(c) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.button"), f = "object" == typeof c && c;
            e || d.data("bs.button", e = new b(this, f)), "toggle" == c ? e.toggle() : c && e.setState(c);
        });
    }, a.fn.button.Constructor = b, a.fn.button.noConflict = function() {
        return a.fn.button = c, this;
    }, a(document).on("click.bs.button.data-api", "[data-toggle^=button]", function(b) {
        var c = a(b.target);
        c.hasClass("btn") || (c = c.closest(".btn")), c.button("toggle"), b.preventDefault();
    });
}(jQuery), +function(a) {
    "use strict";
    var b = function(b, c) {
        this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), 
        this.options = c, this.paused = this.sliding = this.interval = this.$active = this.$items = null, 
        "hover" == this.options.pause && this.$element.on("mouseenter", a.proxy(this.pause, this)).on("mouseleave", a.proxy(this.cycle, this));
    };
    b.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0
    }, b.prototype.cycle = function(b) {
        return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), 
        this;
    }, b.prototype.getActiveIndex = function() {
        return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(), 
        this.$items.index(this.$active);
    }, b.prototype.to = function(b) {
        var c = this, d = this.getActiveIndex();
        return b > this.$items.length - 1 || 0 > b ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            c.to(b);
        }) : d == b ? this.pause().cycle() : this.slide(b > d ? "next" : "prev", a(this.$items[b]));
    }, b.prototype.pause = function(b) {
        return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), 
        this.cycle(!0)), this.interval = clearInterval(this.interval), this;
    }, b.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next");
    }, b.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev");
    }, b.prototype.slide = function(b, c) {
        var d = this.$element.find(".item.active"), e = c || d[b](), f = this.interval, g = "next" == b ? "left" : "right", h = "next" == b ? "first" : "last", i = this;
        if (!e.length) {
            if (!this.options.wrap) return;
            e = this.$element.find(".item")[h]();
        }
        if (e.hasClass("active")) return this.sliding = !1;
        var j = a.Event("slide.bs.carousel", {
            relatedTarget: e[0],
            direction: g
        });
        return this.$element.trigger(j), j.isDefaultPrevented() ? void 0 : (this.sliding = !0, 
        f && this.pause(), this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), 
        this.$element.one("slid.bs.carousel", function() {
            var b = a(i.$indicators.children()[i.getActiveIndex()]);
            b && b.addClass("active");
        })), a.support.transition && this.$element.hasClass("slide") ? (e.addClass(b), e[0].offsetWidth, 
        d.addClass(g), e.addClass(g), d.one(a.support.transition.end, function() {
            e.removeClass([ b, g ].join(" ")).addClass("active"), d.removeClass([ "active", g ].join(" ")), 
            i.sliding = !1, setTimeout(function() {
                i.$element.trigger("slid.bs.carousel");
            }, 0);
        }).emulateTransitionEnd(1e3 * d.css("transition-duration").slice(0, -1))) : (d.removeClass("active"), 
        e.addClass("active"), this.sliding = !1, this.$element.trigger("slid.bs.carousel")), 
        f && this.cycle(), this);
    };
    var c = a.fn.carousel;
    a.fn.carousel = function(c) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.carousel"), f = a.extend({}, b.DEFAULTS, d.data(), "object" == typeof c && c), g = "string" == typeof c ? c : f.slide;
            e || d.data("bs.carousel", e = new b(this, f)), "number" == typeof c ? e.to(c) : g ? e[g]() : f.interval && e.pause().cycle();
        });
    }, a.fn.carousel.Constructor = b, a.fn.carousel.noConflict = function() {
        return a.fn.carousel = c, this;
    }, a(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function(b) {
        var c, d = a(this), e = a(d.attr("data-target") || (c = d.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "")), f = a.extend({}, e.data(), d.data()), g = d.attr("data-slide-to");
        g && (f.interval = !1), e.carousel(f), (g = d.attr("data-slide-to")) && e.data("bs.carousel").to(g), 
        b.preventDefault();
    }), a(window).on("load", function() {
        a('[data-ride="carousel"]').each(function() {
            var b = a(this);
            b.carousel(b.data());
        });
    });
}(jQuery), +function(a) {
    "use strict";
    var b = function(c, d) {
        this.$element = a(c), this.options = a.extend({}, b.DEFAULTS, d), this.transitioning = null, 
        this.options.parent && (this.$parent = a(this.options.parent)), this.options.toggle && this.toggle();
    };
    b.DEFAULTS = {
        toggle: !0
    }, b.prototype.dimension = function() {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height";
    }, b.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var b = a.Event("show.bs.collapse");
            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.$parent && this.$parent.find("> .panel > .in");
                if (c && c.length) {
                    var d = c.data("bs.collapse");
                    if (d && d.transitioning) return;
                    c.collapse("hide"), d || c.data("bs.collapse", null);
                }
                var e = this.dimension();
                this.$element.removeClass("collapse").addClass("collapsing")[e](0), this.transitioning = 1;
                var f = function() {
                    this.$element.removeClass("collapsing").addClass("collapse in")[e]("auto"), this.transitioning = 0, 
                    this.$element.trigger("shown.bs.collapse");
                };
                if (!a.support.transition) return f.call(this);
                var g = a.camelCase([ "scroll", e ].join("-"));
                this.$element.one(a.support.transition.end, a.proxy(f, this)).emulateTransitionEnd(350)[e](this.$element[0][g]);
            }
        }
    }, b.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var b = a.Event("hide.bs.collapse");
            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.dimension();
                this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), 
                this.transitioning = 1;
                var d = function() {
                    this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse");
                };
                return a.support.transition ? void this.$element[c](0).one(a.support.transition.end, a.proxy(d, this)).emulateTransitionEnd(350) : d.call(this);
            }
        }
    }, b.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]();
    };
    var c = a.fn.collapse;
    a.fn.collapse = function(c) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.collapse"), f = a.extend({}, b.DEFAULTS, d.data(), "object" == typeof c && c);
            !e && f.toggle && "show" == c && (c = !c), e || d.data("bs.collapse", e = new b(this, f)), 
            "string" == typeof c && e[c]();
        });
    }, a.fn.collapse.Constructor = b, a.fn.collapse.noConflict = function() {
        return a.fn.collapse = c, this;
    }, a(document).on("click.bs.collapse.data-api", "[data-toggle=collapse]", function(b) {
        var c, d = a(this), e = d.attr("data-target") || b.preventDefault() || (c = d.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, ""), f = a(e), g = f.data("bs.collapse"), h = g ? "toggle" : d.data(), i = d.attr("data-parent"), j = i && a(i);
        g && g.transitioning || (j && j.find('[data-toggle=collapse][data-parent="' + i + '"]').not(d).addClass("collapsed"), 
        d[f.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), f.collapse(h);
    });
}(jQuery), +function(a) {
    "use strict";
    function b(b) {
        a(d).remove(), a(e).each(function() {
            var d = c(a(this)), e = {
                relatedTarget: this
            };
            d.hasClass("open") && (d.trigger(b = a.Event("hide.bs.dropdown", e)), b.isDefaultPrevented() || d.removeClass("open").trigger("hidden.bs.dropdown", e));
        });
    }
    function c(b) {
        var c = b.attr("data-target");
        c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
        var d = c && a(c);
        return d && d.length ? d : b.parent();
    }
    var d = ".dropdown-backdrop", e = "[data-toggle=dropdown]", f = function(b) {
        a(b).on("click.bs.dropdown", this.toggle);
    };
    f.prototype.toggle = function(d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
            var f = c(e), g = f.hasClass("open");
            if (b(), !g) {
                "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click", b);
                var h = {
                    relatedTarget: this
                };
                if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
                f.toggleClass("open").trigger("shown.bs.dropdown", h), e.focus();
            }
            return !1;
        }
    }, f.prototype.keydown = function(b) {
        if (/(38|40|27)/.test(b.keyCode)) {
            var d = a(this);
            if (b.preventDefault(), b.stopPropagation(), !d.is(".disabled, :disabled")) {
                var f = c(d), g = f.hasClass("open");
                if (!g || g && 27 == b.keyCode) return 27 == b.which && f.find(e).focus(), d.click();
                var h = " li:not(.divider):visible a", i = f.find("[role=menu]" + h + ", [role=listbox]" + h);
                if (i.length) {
                    var j = i.index(i.filter(":focus"));
                    38 == b.keyCode && j > 0 && j--, 40 == b.keyCode && j < i.length - 1 && j++, ~j || (j = 0), 
                    i.eq(j).focus();
                }
            }
        }
    };
    var g = a.fn.dropdown;
    a.fn.dropdown = function(b) {
        return this.each(function() {
            var c = a(this), d = c.data("bs.dropdown");
            d || c.data("bs.dropdown", d = new f(this)), "string" == typeof b && d[b].call(c);
        });
    }, a.fn.dropdown.Constructor = f, a.fn.dropdown.noConflict = function() {
        return a.fn.dropdown = g, this;
    }, a(document).on("click.bs.dropdown.data-api", b).on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
        a.stopPropagation();
    }).on("click.bs.dropdown.data-api", e, f.prototype.toggle).on("keydown.bs.dropdown.data-api", e + ", [role=menu], [role=listbox]", f.prototype.keydown);
}(jQuery), +function(a) {
    "use strict";
    var b = function(b, c) {
        this.options = c, this.$element = a(b), this.$backdrop = this.isShown = null, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() {
            this.$element.trigger("loaded.bs.modal");
        }, this));
    };
    b.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, b.prototype.toggle = function(a) {
        return this[this.isShown ? "hide" : "show"](a);
    }, b.prototype.show = function(b) {
        var c = this, d = a.Event("show.bs.modal", {
            relatedTarget: b
        });
        this.$element.trigger(d), this.isShown || d.isDefaultPrevented() || (this.isShown = !0, 
        this.escape(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), 
        this.backdrop(function() {
            var d = a.support.transition && c.$element.hasClass("fade");
            c.$element.parent().length || c.$element.appendTo(document.body), c.$element.show().scrollTop(0), 
            d && c.$element[0].offsetWidth, c.$element.addClass("in").attr("aria-hidden", !1), 
            c.enforceFocus();
            var e = a.Event("shown.bs.modal", {
                relatedTarget: b
            });
            d ? c.$element.find(".modal-dialog").one(a.support.transition.end, function() {
                c.$element.focus().trigger(e);
            }).emulateTransitionEnd(300) : c.$element.focus().trigger(e);
        }));
    }, b.prototype.hide = function(b) {
        b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), 
        this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), a(document).off("focusin.bs.modal"), 
        this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), 
        a.support.transition && this.$element.hasClass("fade") ? this.$element.one(a.support.transition.end, a.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal());
    }, b.prototype.enforceFocus = function() {
        a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) {
            this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.focus();
        }, this));
    }, b.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", a.proxy(function(a) {
            27 == a.which && this.hide();
        }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal");
    }, b.prototype.hideModal = function() {
        var a = this;
        this.$element.hide(), this.backdrop(function() {
            a.removeBackdrop(), a.$element.trigger("hidden.bs.modal");
        });
    }, b.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null;
    }, b.prototype.backdrop = function(b) {
        var c = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var d = a.support.transition && c;
            if (this.$backdrop = a('<div class="modal-backdrop ' + c + '" />').appendTo(document.body), 
            this.$element.on("click.dismiss.bs.modal", a.proxy(function(a) {
                a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this));
            }, this)), d && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
            d ? this.$backdrop.one(a.support.transition.end, b).emulateTransitionEnd(150) : b();
        } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(a.support.transition.end, b).emulateTransitionEnd(150) : b()) : b && b();
    };
    var c = a.fn.modal;
    a.fn.modal = function(c, d) {
        return this.each(function() {
            var e = a(this), f = e.data("bs.modal"), g = a.extend({}, b.DEFAULTS, e.data(), "object" == typeof c && c);
            f || e.data("bs.modal", f = new b(this, g)), "string" == typeof c ? f[c](d) : g.show && f.show(d);
        });
    }, a.fn.modal.Constructor = b, a.fn.modal.noConflict = function() {
        return a.fn.modal = c, this;
    }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(b) {
        var c = a(this), d = c.attr("href"), e = a(c.attr("data-target") || d && d.replace(/.*(?=#[^\s]+$)/, "")), f = e.data("bs.modal") ? "toggle" : a.extend({
            remote: !/#/.test(d) && d
        }, e.data(), c.data());
        c.is("a") && b.preventDefault(), e.modal(f, this).one("hide", function() {
            c.is(":visible") && c.focus();
        });
    }), a(document).on("show.bs.modal", ".modal", function() {
        a(document.body).addClass("modal-open");
    }).on("hidden.bs.modal", ".modal", function() {
        a(document.body).removeClass("modal-open");
    });
}(jQuery), +function(a) {
    "use strict";
    var b = function(a, b) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, 
        this.init("tooltip", a, b);
    };
    b.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1
    }, b.prototype.init = function(b, c, d) {
        this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d);
        for (var e = this.options.trigger.split(" "), f = e.length; f--; ) {
            var g = e[f];
            if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this)); else if ("manual" != g) {
                var h = "hover" == g ? "mouseenter" : "focusin", i = "hover" == g ? "mouseleave" : "focusout";
                this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), 
                this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this));
            }
        }
        this.options.selector ? this._options = a.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle();
    }, b.prototype.getDefaults = function() {
        return b.DEFAULTS;
    }, b.prototype.getOptions = function(b) {
        return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
            show: b.delay,
            hide: b.delay
        }), b;
    }, b.prototype.getDelegateOptions = function() {
        var b = {}, c = this.getDefaults();
        return this._options && a.each(this._options, function(a, d) {
            c[a] != d && (b[a] = d);
        }), b;
    }, b.prototype.enter = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        return clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void (c.timeout = setTimeout(function() {
            "in" == c.hoverState && c.show();
        }, c.options.delay.show)) : c.show();
    }, b.prototype.leave = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        return clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void (c.timeout = setTimeout(function() {
            "out" == c.hoverState && c.hide();
        }, c.options.delay.hide)) : c.hide();
    }, b.prototype.show = function() {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            if (this.$element.trigger(b), b.isDefaultPrevented()) return;
            var c = this, d = this.tip();
            this.setContent(), this.options.animation && d.addClass("fade");
            var e = "function" == typeof this.options.placement ? this.options.placement.call(this, d[0], this.$element[0]) : this.options.placement, f = /\s?auto?\s?/i, g = f.test(e);
            g && (e = e.replace(f, "") || "top"), d.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(e), this.options.container ? d.appendTo(this.options.container) : d.insertAfter(this.$element);
            var h = this.getPosition(), i = d[0].offsetWidth, j = d[0].offsetHeight;
            if (g) {
                var k = this.$element.parent(), l = e, m = document.documentElement.scrollTop || document.body.scrollTop, n = "body" == this.options.container ? window.innerWidth : k.outerWidth(), o = "body" == this.options.container ? window.innerHeight : k.outerHeight(), p = "body" == this.options.container ? 0 : k.offset().left;
                e = "bottom" == e && h.top + h.height + j - m > o ? "top" : "top" == e && h.top - m - j < 0 ? "bottom" : "right" == e && h.right + i > n ? "left" : "left" == e && h.left - i < p ? "right" : e, 
                d.removeClass(l).addClass(e);
            }
            var q = this.getCalculatedOffset(e, h, i, j);
            this.applyPlacement(q, e), this.hoverState = null;
            var r = function() {
                c.$element.trigger("shown.bs." + c.type);
            };
            a.support.transition && this.$tip.hasClass("fade") ? d.one(a.support.transition.end, r).emulateTransitionEnd(150) : r();
        }
    }, b.prototype.applyPlacement = function(b, c) {
        var d, e = this.tip(), f = e[0].offsetWidth, g = e[0].offsetHeight, h = parseInt(e.css("margin-top"), 10), i = parseInt(e.css("margin-left"), 10);
        isNaN(h) && (h = 0), isNaN(i) && (i = 0), b.top = b.top + h, b.left = b.left + i, 
        a.offset.setOffset(e[0], a.extend({
            using: function(a) {
                e.css({
                    top: Math.round(a.top),
                    left: Math.round(a.left)
                });
            }
        }, b), 0), e.addClass("in");
        var j = e[0].offsetWidth, k = e[0].offsetHeight;
        if ("top" == c && k != g && (d = !0, b.top = b.top + g - k), /bottom|top/.test(c)) {
            var l = 0;
            b.left < 0 && (l = -2 * b.left, b.left = 0, e.offset(b), j = e[0].offsetWidth, k = e[0].offsetHeight), 
            this.replaceArrow(l - f + j, j, "left");
        } else this.replaceArrow(k - g, k, "top");
        d && e.offset(b);
    }, b.prototype.replaceArrow = function(a, b, c) {
        this.arrow().css(c, a ? 50 * (1 - a / b) + "%" : "");
    }, b.prototype.setContent = function() {
        var a = this.tip(), b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right");
    }, b.prototype.hide = function() {
        function b() {
            "in" != c.hoverState && d.detach(), c.$element.trigger("hidden.bs." + c.type);
        }
        var c = this, d = this.tip(), e = a.Event("hide.bs." + this.type);
        return this.$element.trigger(e), e.isDefaultPrevented() ? void 0 : (d.removeClass("in"), 
        a.support.transition && this.$tip.hasClass("fade") ? d.one(a.support.transition.end, b).emulateTransitionEnd(150) : b(), 
        this.hoverState = null, this);
    }, b.prototype.fixTitle = function() {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "");
    }, b.prototype.hasContent = function() {
        return this.getTitle();
    }, b.prototype.getPosition = function() {
        var b = this.$element[0];
        return a.extend({}, "function" == typeof b.getBoundingClientRect ? b.getBoundingClientRect() : {
            width: b.offsetWidth,
            height: b.offsetHeight
        }, this.$element.offset());
    }, b.prototype.getCalculatedOffset = function(a, b, c, d) {
        return "bottom" == a ? {
            top: b.top + b.height,
            left: b.left + b.width / 2 - c / 2
        } : "top" == a ? {
            top: b.top - d,
            left: b.left + b.width / 2 - c / 2
        } : "left" == a ? {
            top: b.top + b.height / 2 - d / 2,
            left: b.left - c
        } : {
            top: b.top + b.height / 2 - d / 2,
            left: b.left + b.width
        };
    }, b.prototype.getTitle = function() {
        var a, b = this.$element, c = this.options;
        return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title);
    }, b.prototype.tip = function() {
        return this.$tip = this.$tip || a(this.options.template);
    }, b.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow");
    }, b.prototype.validate = function() {
        this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null);
    }, b.prototype.enable = function() {
        this.enabled = !0;
    }, b.prototype.disable = function() {
        this.enabled = !1;
    }, b.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled;
    }, b.prototype.toggle = function(b) {
        var c = b ? a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type) : this;
        c.tip().hasClass("in") ? c.leave(c) : c.enter(c);
    }, b.prototype.destroy = function() {
        clearTimeout(this.timeout), this.hide().$element.off("." + this.type).removeData("bs." + this.type);
    };
    var c = a.fn.tooltip;
    a.fn.tooltip = function(c) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.tooltip"), f = "object" == typeof c && c;
            (e || "destroy" != c) && (e || d.data("bs.tooltip", e = new b(this, f)), "string" == typeof c && e[c]());
        });
    }, a.fn.tooltip.Constructor = b, a.fn.tooltip.noConflict = function() {
        return a.fn.tooltip = c, this;
    };
}(jQuery), +function(a) {
    "use strict";
    var b = function(a, b) {
        this.init("popover", a, b);
    };
    if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
    b.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), b.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), b.prototype.constructor = b, 
    b.prototype.getDefaults = function() {
        return b.DEFAULTS;
    }, b.prototype.setContent = function() {
        var a = this.tip(), b = this.getTitle(), c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content")[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), 
        a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide();
    }, b.prototype.hasContent = function() {
        return this.getTitle() || this.getContent();
    }, b.prototype.getContent = function() {
        var a = this.$element, b = this.options;
        return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content);
    }, b.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow");
    }, b.prototype.tip = function() {
        return this.$tip || (this.$tip = a(this.options.template)), this.$tip;
    };
    var c = a.fn.popover;
    a.fn.popover = function(c) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.popover"), f = "object" == typeof c && c;
            (e || "destroy" != c) && (e || d.data("bs.popover", e = new b(this, f)), "string" == typeof c && e[c]());
        });
    }, a.fn.popover.Constructor = b, a.fn.popover.noConflict = function() {
        return a.fn.popover = c, this;
    };
}(jQuery), +function(a) {
    "use strict";
    function b(c, d) {
        var e, f = a.proxy(this.process, this);
        this.$element = a(a(c).is("body") ? window : c), this.$body = a("body"), this.$scrollElement = this.$element.on("scroll.bs.scroll-spy.data-api", f), 
        this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || (e = a(c).attr("href")) && e.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", 
        this.offsets = a([]), this.targets = a([]), this.activeTarget = null, this.refresh(), 
        this.process();
    }
    b.DEFAULTS = {
        offset: 10
    }, b.prototype.refresh = function() {
        var b = this.$element[0] == window ? "offset" : "position";
        this.offsets = a([]), this.targets = a([]);
        var c = this;
        this.$body.find(this.selector).map(function() {
            var d = a(this), e = d.data("target") || d.attr("href"), f = /^#./.test(e) && a(e);
            return f && f.length && f.is(":visible") && [ [ f[b]().top + (!a.isWindow(c.$scrollElement.get(0)) && c.$scrollElement.scrollTop()), e ] ] || null;
        }).sort(function(a, b) {
            return a[0] - b[0];
        }).each(function() {
            c.offsets.push(this[0]), c.targets.push(this[1]);
        });
    }, b.prototype.process = function() {
        var a, b = this.$scrollElement.scrollTop() + this.options.offset, c = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight, d = c - this.$scrollElement.height(), e = this.offsets, f = this.targets, g = this.activeTarget;
        if (b >= d) return g != (a = f.last()[0]) && this.activate(a);
        if (g && b <= e[0]) return g != (a = f[0]) && this.activate(a);
        for (a = e.length; a--; ) g != f[a] && b >= e[a] && (!e[a + 1] || b <= e[a + 1]) && this.activate(f[a]);
    }, b.prototype.activate = function(b) {
        this.activeTarget = b, a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
        var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]', d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), 
        d.trigger("activate.bs.scrollspy");
    };
    var c = a.fn.scrollspy;
    a.fn.scrollspy = function(c) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.scrollspy"), f = "object" == typeof c && c;
            e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]();
        });
    }, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function() {
        return a.fn.scrollspy = c, this;
    }, a(window).on("load", function() {
        a('[data-spy="scroll"]').each(function() {
            var b = a(this);
            b.scrollspy(b.data());
        });
    });
}(jQuery), +function(a) {
    "use strict";
    var b = function(b) {
        this.element = a(b);
    };
    b.prototype.show = function() {
        var b = this.element, c = b.closest("ul:not(.dropdown-menu)"), d = b.data("target");
        if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
            var e = c.find(".active:last a")[0], f = a.Event("show.bs.tab", {
                relatedTarget: e
            });
            if (b.trigger(f), !f.isDefaultPrevented()) {
                var g = a(d);
                this.activate(b.parent("li"), c), this.activate(g, g.parent(), function() {
                    b.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: e
                    });
                });
            }
        }
    }, b.prototype.activate = function(b, c, d) {
        function e() {
            f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), 
            b.addClass("active"), g ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), 
            b.parent(".dropdown-menu") && b.closest("li.dropdown").addClass("active"), d && d();
        }
        var f = c.find("> .active"), g = d && a.support.transition && f.hasClass("fade");
        g ? f.one(a.support.transition.end, e).emulateTransitionEnd(150) : e(), f.removeClass("in");
    };
    var c = a.fn.tab;
    a.fn.tab = function(c) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.tab");
            e || d.data("bs.tab", e = new b(this)), "string" == typeof c && e[c]();
        });
    }, a.fn.tab.Constructor = b, a.fn.tab.noConflict = function() {
        return a.fn.tab = c, this;
    }, a(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(b) {
        b.preventDefault(), a(this).tab("show");
    });
}(jQuery), +function(a) {
    "use strict";
    var b = function(c, d) {
        this.options = a.extend({}, b.DEFAULTS, d), this.$window = a(window).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), 
        this.$element = a(c), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition();
    };
    b.RESET = "affix affix-top affix-bottom", b.DEFAULTS = {
        offset: 0
    }, b.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(b.RESET).addClass("affix");
        var a = this.$window.scrollTop(), c = this.$element.offset();
        return this.pinnedOffset = c.top - a;
    }, b.prototype.checkPositionWithEventLoop = function() {
        setTimeout(a.proxy(this.checkPosition, this), 1);
    }, b.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var c = a(document).height(), d = this.$window.scrollTop(), e = this.$element.offset(), f = this.options.offset, g = f.top, h = f.bottom;
            "top" == this.affixed && (e.top += d), "object" != typeof f && (h = g = f), "function" == typeof g && (g = f.top(this.$element)), 
            "function" == typeof h && (h = f.bottom(this.$element));
            var i = null != this.unpin && d + this.unpin <= e.top ? !1 : null != h && e.top + this.$element.height() >= c - h ? "bottom" : null != g && g >= d ? "top" : !1;
            if (this.affixed !== i) {
                this.unpin && this.$element.css("top", "");
                var j = "affix" + (i ? "-" + i : ""), k = a.Event(j + ".bs.affix");
                this.$element.trigger(k), k.isDefaultPrevented() || (this.affixed = i, this.unpin = "bottom" == i ? this.getPinnedOffset() : null, 
                this.$element.removeClass(b.RESET).addClass(j).trigger(a.Event(j.replace("affix", "affixed"))), 
                "bottom" == i && this.$element.offset({
                    top: c - h - this.$element.height()
                }));
            }
        }
    };
    var c = a.fn.affix;
    a.fn.affix = function(c) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.affix"), f = "object" == typeof c && c;
            e || d.data("bs.affix", e = new b(this, f)), "string" == typeof c && e[c]();
        });
    }, a.fn.affix.Constructor = b, a.fn.affix.noConflict = function() {
        return a.fn.affix = c, this;
    }, a(window).on("load", function() {
        a('[data-spy="affix"]').each(function() {
            var b = a(this), c = b.data();
            c.offset = c.offset || {}, c.offsetBottom && (c.offset.bottom = c.offsetBottom), 
            c.offsetTop && (c.offset.top = c.offsetTop), b.affix(c);
        });
    });
}(jQuery);

var Handlebars = {};

window.Handlebars = Handlebars, function(a, b) {
    a.VERSION = "1.0.0", a.COMPILER_REVISION = 4, a.REVISION_CHANGES = {
        1: "<= 1.0.rc.2",
        2: "== 1.0.0-rc.3",
        3: "== 1.0.0-rc.4",
        4: ">= 1.0.0"
    }, a.helpers = {}, a.partials = {};
    var c = Object.prototype.toString, d = "[object Function]", e = "[object Object]";
    a.registerHelper = function(b, d, f) {
        if (c.call(b) === e) {
            if (f || d) throw new a.Exception("Arg not supported with multiple helpers");
            a.Utils.extend(this.helpers, b);
        } else f && (d.not = f), this.helpers[b] = d;
    }, a.registerPartial = function(b, d) {
        c.call(b) === e ? a.Utils.extend(this.partials, b) : this.partials[b] = d;
    }, a.registerHelper("helperMissing", function(a) {
        if (2 === arguments.length) return b;
        throw new Error("Missing helper: '" + a + "'");
    }), a.registerHelper("blockHelperMissing", function(b, e) {
        var f = e.inverse || function() {}, g = e.fn, h = c.call(b);
        return h === d && (b = b.call(this)), b === !0 ? g(this) : b === !1 || null == b ? f(this) : "[object Array]" === h ? b.length > 0 ? a.helpers.each(b, e) : f(this) : g(b);
    }), a.K = function() {}, a.createFrame = Object.create || function(b) {
        a.K.prototype = b;
        var c = new a.K();
        return a.K.prototype = null, c;
    }, a.logger = {
        DEBUG: 0,
        INFO: 1,
        WARN: 2,
        ERROR: 3,
        level: 3,
        methodMap: {
            0: "debug",
            1: "info",
            2: "warn",
            3: "error"
        },
        log: function(b, c) {
            if (a.logger.level <= b) {
                var d = a.logger.methodMap[b];
                "undefined" != typeof console && console[d] && console[d].call(console, c);
            }
        }
    }, a.log = function(b, c) {
        a.logger.log(b, c);
    }, a.registerHelper("each", function(b, e) {
        var f, g = e.fn, h = e.inverse, i = 0, j = "", k = c.call(b);
        if (k === d && (b = b.call(this)), e.data && (f = a.createFrame(e.data)), b && "object" == typeof b) if (b instanceof Array) for (var l = b.length; l > i; i++) f && (f.index = i), 
        j += g(b[i], {
            data: f
        }); else for (var m in b) b.hasOwnProperty(m) && (f && (f.key = m), j += g(b[m], {
            data: f
        }), i++);
        return 0 === i && (j = h(this)), j;
    }), a.registerHelper("if", function(b, e) {
        var f = c.call(b);
        return f === d && (b = b.call(this)), !b || a.Utils.isEmpty(b) ? e.inverse(this) : e.fn(this);
    }), a.registerHelper("unless", function(b, c) {
        return a.helpers["if"].call(this, b, {
            fn: c.inverse,
            inverse: c.fn
        });
    }), a.registerHelper("with", function(b, e) {
        var f = c.call(b);
        return f === d && (b = b.call(this)), a.Utils.isEmpty(b) ? void 0 : e.fn(b);
    }), a.registerHelper("log", function(b, c) {
        var d = c.data && null != c.data.level ? parseInt(c.data.level, 10) : 1;
        a.log(d, b);
    });
    var f = [ "description", "fileName", "lineNumber", "message", "name", "number", "stack" ];
    a.Exception = function() {
        for (var a = Error.prototype.constructor.apply(this, arguments), b = 0; b < f.length; b++) this[f[b]] = a[f[b]];
    }, a.Exception.prototype = new Error(), a.SafeString = function(a) {
        this.string = a;
    }, a.SafeString.prototype.toString = function() {
        return this.string.toString();
    };
    var g = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
    }, h = /[&<>"'`]/g, i = /[&<>"'`]/, j = function(a) {
        return g[a] || "&amp;";
    };
    a.Utils = {
        extend: function(a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
        },
        escapeExpression: function(b) {
            return b instanceof a.SafeString ? b.toString() : null == b || b === !1 ? "" : (b = b.toString(), 
            i.test(b) ? b.replace(h, j) : b);
        },
        isEmpty: function(a) {
            return a || 0 === a ? "[object Array]" === c.call(a) && 0 === a.length ? !0 : !1 : !0;
        }
    }, a.VM = {
        template: function(b) {
            var c = {
                escapeExpression: a.Utils.escapeExpression,
                invokePartial: a.VM.invokePartial,
                programs: [],
                program: function(b, c, d) {
                    var e = this.programs[b];
                    return d ? e = a.VM.program(b, c, d) : e || (e = this.programs[b] = a.VM.program(b, c)), 
                    e;
                },
                merge: function(b, c) {
                    var d = b || c;
                    return b && c && (d = {}, a.Utils.extend(d, c), a.Utils.extend(d, b)), d;
                },
                programWithDepth: a.VM.programWithDepth,
                noop: a.VM.noop,
                compilerInfo: null
            };
            return function(d, e) {
                e = e || {};
                var f = b.call(c, a, d, e.helpers, e.partials, e.data), g = c.compilerInfo || [], h = g[0] || 1, i = a.COMPILER_REVISION;
                if (h !== i) {
                    if (i > h) {
                        var j = a.REVISION_CHANGES[i], k = a.REVISION_CHANGES[h];
                        throw "Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + j + ") or downgrade your runtime to an older version (" + k + ").";
                    }
                    throw "Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + g[1] + ").";
                }
                return f;
            };
        },
        programWithDepth: function(a, b, c) {
            var d = Array.prototype.slice.call(arguments, 3), e = function(a, e) {
                return e = e || {}, b.apply(this, [ a, e.data || c ].concat(d));
            };
            return e.program = a, e.depth = d.length, e;
        },
        program: function(a, b, c) {
            var d = function(a, d) {
                return d = d || {}, b(a, d.data || c);
            };
            return d.program = a, d.depth = 0, d;
        },
        noop: function() {
            return "";
        },
        invokePartial: function(c, d, e, f, g, h) {
            var i = {
                helpers: f,
                partials: g,
                data: h
            };
            if (c === b) throw new a.Exception("The partial " + d + " could not be found");
            if (c instanceof Function) return c(e, i);
            if (a.compile) return g[d] = a.compile(c, {
                data: h !== b
            }), g[d](e, i);
            throw new a.Exception("The partial " + d + " could not be compiled when running in runtime-only mode");
        }
    }, a.template = a.VM.template;
}(Handlebars), !function(a, b, c, d) {
    var e = a(b);
    a.fn.lazyload = function(f) {
        function g() {
            var b = 0;
            i.each(function() {
                var c = a(this);
                if (!j.skip_invisible || c.is(":visible")) if (a.abovethetop(this, j) || a.leftofbegin(this, j)) ; else if (a.belowthefold(this, j) || a.rightoffold(this, j)) {
                    if (++b > j.failure_limit) return !1;
                } else c.trigger("appear"), b = 0;
            });
        }
        var h, i = this, j = {
            threshold: 0,
            failure_limit: 0,
            event: "scroll",
            effect: "show",
            container: b,
            data_attribute: "original",
            skip_invisible: !0,
            appear: null,
            load: null,
            placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
        };
        return f && (d !== f.failurelimit && (f.failure_limit = f.failurelimit, delete f.failurelimit), 
        d !== f.effectspeed && (f.effect_speed = f.effectspeed, delete f.effectspeed), a.extend(j, f)), 
        h = j.container === d || j.container === b ? e : a(j.container), 0 === j.event.indexOf("scroll") && h.bind(j.event, function() {
            return g();
        }), this.each(function() {
            var b = this, c = a(b);
            b.loaded = !1, (c.attr("src") === d || c.attr("src") === !1) && c.is("img") && c.attr("src", j.placeholder), 
            c.one("appear", function() {
                if (!this.loaded) {
                    if (j.appear) {
                        var d = i.length;
                        j.appear.call(b, d, j);
                    }
                    a("<img />").bind("load", function() {
                        var d = c.attr("data-" + j.data_attribute);
                        c.hide(), c.is("img") ? c.attr("src", d) : c.css("background-image", "url('" + d + "')"), 
                        c[j.effect](j.effect_speed), b.loaded = !0;
                        var e = a.grep(i, function(a) {
                            return !a.loaded;
                        });
                        if (i = a(e), j.load) {
                            var f = i.length;
                            j.load.call(b, f, j);
                        }
                    }).attr("src", c.attr("data-" + j.data_attribute));
                }
            }), 0 !== j.event.indexOf("scroll") && c.bind(j.event, function() {
                b.loaded || c.trigger("appear");
            });
        }), e.bind("resize", function() {
            g();
        }), /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && e.bind("pageshow", function(b) {
            b.originalEvent && b.originalEvent.persisted && i.each(function() {
                a(this).trigger("appear");
            });
        }), a(c).ready(function() {
            g();
        }), this;
    }, a.belowthefold = function(c, f) {
        var g;
        return g = f.container === d || f.container === b ? (b.innerHeight ? b.innerHeight : e.height()) + e.scrollTop() : a(f.container).offset().top + a(f.container).height(), 
        g <= a(c).offset().top - f.threshold;
    }, a.rightoffold = function(c, f) {
        var g;
        return g = f.container === d || f.container === b ? e.width() + e.scrollLeft() : a(f.container).offset().left + a(f.container).width(), 
        g <= a(c).offset().left - f.threshold;
    }, a.abovethetop = function(c, f) {
        var g;
        return g = f.container === d || f.container === b ? e.scrollTop() : a(f.container).offset().top, 
        g >= a(c).offset().top + f.threshold + a(c).height();
    }, a.leftofbegin = function(c, f) {
        var g;
        return g = f.container === d || f.container === b ? e.scrollLeft() : a(f.container).offset().left, 
        g >= a(c).offset().left + f.threshold + a(c).width();
    }, a.inviewport = function(b, c) {
        return !(a.rightoffold(b, c) || a.leftofbegin(b, c) || a.belowthefold(b, c) || a.abovethetop(b, c));
    }, a.extend(a.expr[":"], {
        "below-the-fold": function(b) {
            return a.belowthefold(b, {
                threshold: 0
            });
        },
        "above-the-top": function(b) {
            return !a.belowthefold(b, {
                threshold: 0
            });
        },
        "right-of-screen": function(b) {
            return a.rightoffold(b, {
                threshold: 0
            });
        },
        "left-of-screen": function(b) {
            return !a.rightoffold(b, {
                threshold: 0
            });
        },
        "in-viewport": function(b) {
            return a.inviewport(b, {
                threshold: 0
            });
        },
        "above-the-fold": function(b) {
            return !a.belowthefold(b, {
                threshold: 0
            });
        },
        "right-of-fold": function(b) {
            return a.rightoffold(b, {
                threshold: 0
            });
        },
        "left-of-fold": function(b) {
            return !a.rightoffold(b, {
                threshold: 0
            });
        }
    });
}(jQuery, window, document), Ember.Handlebars.registerBoundHelper("createExcerpt", function(a, b, c) {
    var d = a.replace(/<\/?[^>]+>/gi, "");
    return d = jQuery.trim(d), d.substring(0, b) + c;
}), Ember.Handlebars.registerBoundHelper("humanDate", function(a) {
    return moment(parseInt(a, 10)).calendar();
}), DS.LocalRESTSerializer = DS.RESTSerializer.extend({
    extractSingle: function(a, b, c) {
        return console.log("extractSingle"), this._super(a, b, c);
    },
    extractArray: function(a, b, c) {
        return console.log("extractArray"), newPayload = {}, newPayload.categories = [], 
        newPayload[b.typeKey + "s"] = c, console.log(newPayload), this._super(a, b, newPayload);
    },
    normalize: function(a, b, c) {
        return console.log("normalize"), this.normalizeId(b), this.normalizeAttributes(a, b), 
        this.normalizeRelationships(a, b), this.normalizeUsingDeclaredMapping(a, b), this.normalizeHash && this.normalizeHash[c] && (b = this.normalizeHash[c](b)), 
        this._super(a, b, c);
    },
    normalizeHash: {
        performers: function(a) {
            return a.id = a.PerformerId, a.name = a.Name, a.bio = a.Bio, a.headshot = a.PhotoUrl, 
            a;
        },
        performer: function(a) {
            return a.id = a.PerformerId, a.name = a.Name, a.bio = a.Bio, a.headshot = a.PhotoUrl, 
            a;
        },
        newsposts: function(a) {
            return a.id = a.urlId, a.htmlContent = a.body, a;
        },
        newspost: function(a) {
            return a.id = a.urlId, a.htmlContent = a.body, a;
        }
    }
}), DS.LocalAdapter = DS.RESTAdapter.extend({
    namespace: "assets",
    buildURL: function(a, b) {
        var c = [], d = Ember.get(this, "host"), e = this.urlPrefix();
        return a && c.push(this.pathForType(a)), b && c.push(b), e && c.unshift(e), c = c.join("/"), 
        !d && c && (c = "/" + c), c += ".json", console.log(c), c;
    },
    defaultSerializer: "DS/LocalREST"
});

var App = Ember.Application.create({
    LOG_TRANSITIONS: !0,
    rootElement: "#ember-app"
});

App.Store = DS.Store.extend({
    revision: 11,
    adapter: DS.LocalAdapter
}), App.XSpinnerComponent = Ember.Component.extend({
    lines: 12,
    length: 6,
    width: 2,
    radius: 4,
    corners: 1,
    rotate: 0,
    direction: 1,
    color: "#000",
    speed: 1,
    trail: 60,
    shadow: !1,
    hwaccel: !1,
    className: "spinner",
    zIndex: 2e9,
    top: "auto",
    left: "auto",
    showSpinner: function() {
        var a = this.get("element");
        this.spinner = new Spinner({
            lines: this.get("lines"),
            length: this.get("length"),
            width: this.get("width"),
            radius: this.get("radius"),
            corners: this.get("corners"),
            rotate: this.get("rotate"),
            direction: this.get("direction"),
            color: this.get("color"),
            speed: this.get("speed"),
            trail: this.get("trail"),
            shadow: this.get("shadow"),
            hwaccel: this.get("hwaccel"),
            className: this.get("className"),
            zIndex: this.get("zIndex"),
            top: this.get("top"),
            left: this.get("left")
        }), this.spinner.spin(a);
    }.on("didInsertElement"),
    teardown: function() {
        this.spinner && this.spinner && this.spinner.stop();
    }.on("willDestroyElement")
}), Ember.Handlebars.helper("x-spinner", App.XSpinnerComponent), App.Category = DS.Model.extend({
    performer: DS.belongsTo("performer"),
    newspost: DS.belongsTo("newspost"),
    name: DS.attr("string")
}), App.Event = DS.Model.extend({
    name: DS.attr("string"),
    start_time: DS.attr("date"),
    end_time: DS.attr("date"),
    price: DS.attr("number")
}), App.Newspost = DS.Model.extend({
    performers: DS.hasMany("performer"),
    title: DS.attr("string"),
    htmlContent: DS.attr("string"),
    urlId: DS.attr("string"),
    publishOn: DS.attr("string")
}), App.Performer = DS.Model.extend({
    categories: DS.hasMany("category"),
    name: DS.attr("string"),
    headshot: DS.attr("string"),
    slug: function() {
        return sluggify(this.get("name"));
    }.property("name"),
    bio: DS.attr("string"),
    headshot300: function() {
        return "/assets/performer-" + cleanStr(this.get("name")) + "-300x300.jpg";
    }.property("name"),
    backgroundImageCSS: function() {
        return "background-image:url('" + this.get("headshot") + "?format=300w')";
    }.property("headshot")
}), App.CatchAllController = Ember.ObjectController.extend({}), App.EventsController = Ember.ObjectController.extend({
    destroy: function() {
        confirm("Are you sure?") && (this.get("model").deleteRecord(), this.get("store").commit(), 
        this.get("target.router").transitionTo("events"));
    }
}), App.NewspostController = Ember.ObjectController.extend({}), App.PerformerController = Ember.ObjectController.extend({
    destroy: function() {
        confirm("Are you sure?") && (this.get("model").deleteRecord(), this.get("store").commit(), 
        this.get("target.router").transitionTo("performers"));
    }
}), App.HeaderView = Ember.View.extend({
    templateName: "header"
}), App.IndexView = Ember.View.extend({
    didInsertElement: function() {
        var a, b = document.getElementsByTagName("script")[0], c = /^http:/.test(document.location) ? "http" : "https";
        document.getElementById("twitter-wjs") || (a = document.createElement("script"), 
        a.id = "twitter-wjs", a.src = c + "://platform.twitter.com/widgets.js?" + new Date().getTime(), 
        b.parentNode.insertBefore(a, b));
    }
}), App.NewsPostView = Ember.View.extend({
    templateName: "newspost"
}), App.NewsPostsView = Ember.View.extend({
    templateName: "newsposts"
}), App.PerformersView = Ember.View.extend({
    templateName: "performers_gallery",
    didInsertElement: function() {
        $("img.lazy").lazyload({
            effect: "fadeIn"
        });
    }
}), Ember.TEMPLATES._recent_tweets = Ember.Handlebars.template(function(a, b, c, d, e) {
    this.compilerInfo = [ 4, ">= 1.0.0" ], c = this.merge(c, Ember.Handlebars.helpers), 
    e = e || {}, e.buffer.push('<a class="twitter-timeline" href="https://twitter.com/bridgetown" data-widget-id="432300245716713474">Tweets by @bridgetown</a>\n\n\n\n');
}), Ember.TEMPLATES._sponsors = Ember.Handlebars.template(function(a, b, c, d, e) {
    this.compilerInfo = [ 4, ">= 1.0.0" ], c = this.merge(c, Ember.Handlebars.helpers), 
    e = e || {}, e.buffer.push('<div id="lg">\n  <div class="container w">\n    <h1>SPONSORS</h1>\n    <div class="row centered">\n      <div class="col-xs-4 col-sm-3 col-md-2">\n        <img class="img-responsive" src="assets/c01.gif" alt="">\n      </div><!-- col-xs-4 col-sm-3 col-md-2 -->\n\n      <div class="col-xs-4 col-sm-3 col-md-2">\n        <img class="img-responsive" src="assets/c02.gif" alt="">\n      </div><!-- col-xs-4 col-sm-3 col-md-2 -->\n\n      <div class="col-xs-4 col-sm-3 col-md-2">\n        <img class="img-responsive" src="assets/c03.gif" alt="">\n      </div><!-- col-xs-4 col-sm-3 col-md-2 -->\n\n      <div class="col-xs-4 col-sm-3 col-md-2">\n        <img class="img-responsive" src="assets/c04.gif" alt="">\n      </div><!-- col-xs-4 col-sm-3 col-md-2 -->\n\n      <div class="col-xs-4 col-sm-3 col-md-2">\n        <img class="img-responsive" src="assets/c05.gif" alt="">\n      </div><!-- col-xs-4 col-sm-3 col-md-2 -->\n\n      <div class="col-xs-4 col-sm-3 col-md-2">\n        <img class="img-responsive" src="assets/c05.gif" alt="">\n      </div><!-- col-xs-4 col-sm-3 col-md-2 -->\n      <div class="col-xs-4 col-sm-3 col-md-2">\n        <img class="img-responsive" src="assets/c01.gif" alt="">\n      </div><!-- col-xs-4 col-sm-3 col-md-2 -->\n\n      <div class="col-xs-4 col-sm-3 col-md-2">\n        <img class="img-responsive" src="assets/c02.gif" alt="">\n      </div><!-- col-xs-4 col-sm-3 col-md-2 -->\n\n      <div class="col-xs-4 col-sm-3 col-md-2">\n        <img class="img-responsive" src="assets/c03.gif" alt="">\n      </div><!-- col-xs-4 col-sm-3 col-md-2 -->\n\n      <div class="col-xs-4 col-sm-3 col-md-2">\n        <img class="img-responsive" src="assets/c04.gif" alt="">\n      </div><!-- col-xs-4 col-sm-3 col-md-2 -->\n\n      <div class="col-xs-4 col-sm-3 col-md-2">\n        <img class="img-responsive" src="assets/c05.gif" alt="">\n      </div><!-- col-xs-4 col-sm-3 col-md-2 -->\n\n      <div class="col-xs-4 col-sm-3 col-md-2">\n        <img class="img-responsive" src="assets/c05.gif" alt="">\n      </div><!-- col-xs-4 col-sm-3 col-md-2 -->\n    </div><!-- row -->\n  </div><!-- container -->\n</div>');
}), Ember.TEMPLATES.application = Ember.Handlebars.template(function(a, b, c, d, e) {
    this.compilerInfo = [ 4, ">= 1.0.0" ], c = this.merge(c, Ember.Handlebars.helpers), 
    e = e || {};
    var f, g, h, i = "", j = this.escapeExpression, k = c.helperMissing;
    return e.buffer.push('<div id="wrap">\n  '), e.buffer.push(j(c.view.call(b, "App.HeaderView", {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        contexts: [ b ],
        types: [ "ID" ],
        data: e
    }))), e.buffer.push("\n\n  \n  "), e.buffer.push(j((g = c.outlet || b && b.outlet, 
    h = {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        contexts: [ b ],
        types: [ "STRING" ],
        data: e
    }, g ? g.call(b, "jumbotron", h) : k.call(b, "outlet", "jumbotron", h)))), e.buffer.push('\n  <div class="container">\n  '), 
    f = c._triageMustache.call(b, "outlet", {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        contexts: [ b ],
        types: [ "ID" ],
        data: e
    }), (f || 0 === f) && e.buffer.push(f), e.buffer.push('\n\n  </div>\n  <div id="push"></div>\n</div>\n\n<!-- FOOTER -->\n  <div id="site-footer">\n    <div class="container text-center">\n        <a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-facebook"></i></a>\n    </div><!-- container -->\n  </div><!-- Footer -->\n\n\n  <!-- MODAL FOR CONTACT -->\n  <!-- Modal -->\n  <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\n    <div class="modal-dialog">\n      <div class="modal-content">\n        <div class="modal-header">\n          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\n          <h4 class="modal-title" id="myModalLabel">contact us</h4>\n        </div>\n        <div class="modal-body">\n            <div class="row centered">\n              <p>We are available 24/7, so don\'t hesitate to contact us.</p>\n              <p>\n                Somestreet Ave, 987<br/>\n            London, UK.<br/>\n            +44 8948-4343<br/>\n            hi@blacktie.co\n              </p>\n              <div id="mapwrap">\n   \n          </div>  \n            </div>\n        </div>\n        <div class="modal-footer">\n          <button type="button" class="btn btn-danger" data-dismiss="modal">Save & Go</button>\n        </div>\n      </div><!-- /.modal-content -->\n    </div><!-- /.modal-dialog -->\n  </div><!-- /.modal -->\n'), 
    i;
}), Ember.TEMPLATES.catch_all = Ember.Handlebars.template(function(a, b, c, d, e) {
    this.compilerInfo = [ 4, ">= 1.0.0" ], c = this.merge(c, Ember.Handlebars.helpers), 
    e = e || {};
    var f, g = "", h = this.escapeExpression;
    return e.buffer.push('<div class="container">\n  <h2>'), f = c._triageMustache.call(b, "collection.title", {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        contexts: [ b ],
        types: [ "ID" ],
        data: e
    }), (f || 0 === f) && e.buffer.push(f), e.buffer.push("</h2>\n\n  "), e.buffer.push(h(c._triageMustache.call(b, "mainContent", {
        hash: {
            unescaped: "true"
        },
        hashTypes: {
            unescaped: "STRING"
        },
        hashContexts: {
            unescaped: b
        },
        contexts: [ b ],
        types: [ "ID" ],
        data: e
    }))), e.buffer.push("\n</div>\n\n\n"), g;
}), Ember.TEMPLATES.contact = Ember.Handlebars.template(function(a, b, c, d, e) {
    this.compilerInfo = [ 4, ">= 1.0.0" ], c = this.merge(c, Ember.Handlebars.helpers), 
    e = e || {};
    var f, g = "", h = this.escapeExpression;
    return e.buffer.push('<div class="container">\n  <h2>'), f = c._triageMustache.call(b, "collection.title", {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        contexts: [ b ],
        types: [ "ID" ],
        data: e
    }), (f || 0 === f) && e.buffer.push(f), e.buffer.push("</h2>\n\n  "), e.buffer.push(h(c._triageMustache.call(b, "mainContent", {
        hash: {
            unescaped: "true"
        },
        hashTypes: {
            unescaped: "STRING"
        },
        hashContexts: {
            unescaped: b
        },
        contexts: [ b ],
        types: [ "ID" ],
        data: e
    }))), e.buffer.push("\n</div>\n\n\n"), g;
}), Ember.TEMPLATES.events = Ember.Handlebars.template(function(a, b, c, d, e) {
    function f(a, b) {
        b.buffer.push("New Event");
    }
    function g(a, b) {
        var d, e, f, g = "";
        return b.buffer.push("\n    <tr>\n      <td>"), d = c._triageMustache.call(a, "event.name", {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            contexts: [ a ],
            types: [ "ID" ],
            data: b
        }), (d || 0 === d) && b.buffer.push(d), b.buffer.push("</td>\n      <td>"), d = c._triageMustache.call(a, "event.start_time", {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            contexts: [ a ],
            types: [ "ID" ],
            data: b
        }), (d || 0 === d) && b.buffer.push(d), b.buffer.push("</td>\n      <td>"), d = c._triageMustache.call(a, "event.end_time", {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            contexts: [ a ],
            types: [ "ID" ],
            data: b
        }), (d || 0 === d) && b.buffer.push(d), b.buffer.push("</td>\n      <td>"), d = c._triageMustache.call(a, "event.price", {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            contexts: [ a ],
            types: [ "ID" ],
            data: b
        }), (d || 0 === d) && b.buffer.push(d), b.buffer.push("</td>\n      <td>"), e = c.linkTo || a && a.linkTo, 
        f = {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            inverse: m.noop,
            fn: m.program(4, h, b),
            contexts: [ a, a ],
            types: [ "STRING", "ID" ],
            data: b
        }, d = e ? e.call(a, "event", "event", f) : n.call(a, "linkTo", "event", "event", f), 
        (d || 0 === d) && b.buffer.push(d), b.buffer.push("</td>\n    </tr>\n    "), g;
    }
    function h(a, b) {
        b.buffer.push("view");
    }
    this.compilerInfo = [ 4, ">= 1.0.0" ], c = this.merge(c, Ember.Handlebars.helpers), 
    e = e || {};
    var i, j, k, l = "", m = this, n = c.helperMissing;
    return e.buffer.push("<h2>Events</h2>\n\n"), j = c.linkTo || b && b.linkTo, k = {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        inverse: m.noop,
        fn: m.program(1, f, e),
        contexts: [ b ],
        types: [ "STRING" ],
        data: e
    }, i = j ? j.call(b, "new_events", k) : n.call(b, "linkTo", "new_events", k), (i || 0 === i) && e.buffer.push(i), 
    e.buffer.push("\n\n<table>\n  <thead>\n    <th>name</th>\n    <th>start_time</th>\n    <th>end_time</th>\n    <th>price</th>\n  </thead>\n  <tbody>\n    "), 
    i = c.each.call(b, "event", "in", "controller", {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        inverse: m.noop,
        fn: m.program(3, g, e),
        contexts: [ b, b, b ],
        types: [ "ID", "ID", "ID" ],
        data: e
    }), (i || 0 === i) && e.buffer.push(i), e.buffer.push("\n  </tbody>\n</table>\n\n\n"), 
    l;
}), Ember.TEMPLATES.header = Ember.Handlebars.template(function(a, b, c, d, e) {
    function f(a, b) {
        b.buffer.push("BCF 2014");
    }
    function g(a, b) {
        b.buffer.push("Home");
    }
    function h(a, b) {
        b.buffer.push("Performers");
    }
    function i(a, b) {
        b.buffer.push("Venues");
    }
    function j(a, b) {
        b.buffer.push("Shows");
    }
    function k(a, b) {
        b.buffer.push("History");
    }
    function l(a, b) {
        b.buffer.push("Press");
    }
    function m(a, b) {
        b.buffer.push("Tickets");
    }
    function n(a, b) {
        b.buffer.push("Contact");
    }
    this.compilerInfo = [ 4, ">= 1.0.0" ], c = this.merge(c, Ember.Handlebars.helpers), 
    e = e || {};
    var o, p, q, r = "", s = this, t = c.helperMissing;
    return e.buffer.push('<div class="navbar navbar-inverse navbar-fixed-top">\n  <div class="container">\n    <div class="navbar-header">\n      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n      </button>\n      '), 
    p = c["link-to"] || b && b["link-to"], q = {
        hash: {
            "class": "navbar-brand"
        },
        hashTypes: {
            "class": "STRING"
        },
        hashContexts: {
            "class": b
        },
        inverse: s.noop,
        fn: s.program(1, f, e),
        contexts: [ b ],
        types: [ "STRING" ],
        data: e
    }, o = p ? p.call(b, "", q) : t.call(b, "link-to", "", q), (o || 0 === o) && e.buffer.push(o), 
    e.buffer.push('\n    </div>\n    <div class="navbar-collapse collapse">\n      <ul class="nav navbar-nav">\n        <li>'), 
    p = c["link-to"] || b && b["link-to"], q = {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        inverse: s.noop,
        fn: s.program(3, g, e),
        contexts: [ b ],
        types: [ "STRING" ],
        data: e
    }, o = p ? p.call(b, "index", q) : t.call(b, "link-to", "index", q), (o || 0 === o) && e.buffer.push(o), 
    e.buffer.push("</li>\n        <li>"), p = c["link-to"] || b && b["link-to"], q = {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        inverse: s.noop,
        fn: s.program(5, h, e),
        contexts: [ b ],
        types: [ "STRING" ],
        data: e
    }, o = p ? p.call(b, "performers", q) : t.call(b, "link-to", "performers", q), (o || 0 === o) && e.buffer.push(o), 
    e.buffer.push("</li>\n        <li>"), p = c["link-to"] || b && b["link-to"], q = {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        inverse: s.noop,
        fn: s.program(7, i, e),
        contexts: [ b ],
        types: [ "STRING" ],
        data: e
    }, o = p ? p.call(b, "venues", q) : t.call(b, "link-to", "venues", q), (o || 0 === o) && e.buffer.push(o), 
    e.buffer.push("</li>\n        <li>"), p = c["link-to"] || b && b["link-to"], q = {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        inverse: s.noop,
        fn: s.program(9, j, e),
        contexts: [ b ],
        types: [ "STRING" ],
        data: e
    }, o = p ? p.call(b, "shows", q) : t.call(b, "link-to", "shows", q), (o || 0 === o) && e.buffer.push(o), 
    e.buffer.push("</li>\n        <li>"), p = c["link-to"] || b && b["link-to"], q = {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        inverse: s.noop,
        fn: s.program(11, k, e),
        contexts: [ b ],
        types: [ "STRING" ],
        data: e
    }, o = p ? p.call(b, "history", q) : t.call(b, "link-to", "history", q), (o || 0 === o) && e.buffer.push(o), 
    e.buffer.push("</li>\n        <li>"), p = c["link-to"] || b && b["link-to"], q = {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        inverse: s.noop,
        fn: s.program(13, l, e),
        contexts: [ b ],
        types: [ "STRING" ],
        data: e
    }, o = p ? p.call(b, "press", q) : t.call(b, "link-to", "press", q), (o || 0 === o) && e.buffer.push(o), 
    e.buffer.push("</li>\n        <li>"), p = c["link-to"] || b && b["link-to"], q = {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        inverse: s.noop,
        fn: s.program(15, m, e),
        contexts: [ b ],
        types: [ "STRING" ],
        data: e
    }, o = p ? p.call(b, "performers", q) : t.call(b, "link-to", "performers", q), (o || 0 === o) && e.buffer.push(o), 
    e.buffer.push("</li>\n\n        <li>"), p = c["link-to"] || b && b["link-to"], q = {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        inverse: s.noop,
        fn: s.program(17, n, e),
        contexts: [ b ],
        types: [ "STRING" ],
        data: e
    }, o = p ? p.call(b, "contact", q) : t.call(b, "link-to", "contact", q), (o || 0 === o) && e.buffer.push(o), 
    e.buffer.push("</li>\n        \n      </ul>\n    </div><!--/.navbar-collapse -->\n  </div>\n</div>"), 
    r;
}), Ember.TEMPLATES.history = Ember.Handlebars.template(function(a, b, c, d, e) {
    this.compilerInfo = [ 4, ">= 1.0.0" ], c = this.merge(c, Ember.Handlebars.helpers), 
    e = e || {};
    var f, g = "", h = this.escapeExpression;
    return e.buffer.push('<div class="container">\n  <h2>'), f = c._triageMustache.call(b, "collection.title", {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        contexts: [ b ],
        types: [ "ID" ],
        data: e
    }), (f || 0 === f) && e.buffer.push(f), e.buffer.push("</h2>\n\n  "), e.buffer.push(h(c._triageMustache.call(b, "mainContent", {
        hash: {
            unescaped: "true"
        },
        hashTypes: {
            unescaped: "STRING"
        },
        hashContexts: {
            unescaped: b
        },
        contexts: [ b ],
        types: [ "ID" ],
        data: e
    }))), e.buffer.push("\n</div>\n\n\n"), g;
}), Ember.TEMPLATES.index = Ember.Handlebars.template(function(a, b, c, d, e) {
    this.compilerInfo = [ 4, ">= 1.0.0" ], c = this.merge(c, Ember.Handlebars.helpers), 
    e = e || {};
    var f, g, h = "", i = c.helperMissing, j = this.escapeExpression;
    return e.buffer.push('\n\n<div class="container w">\n    <div class="row centered">\n      <div class="col-md-6">\n        <h4>NEWS</h4>\n        '), 
    e.buffer.push(j((f = c.render || b && b.render, g = {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        contexts: [ b, b ],
        types: [ "STRING", "ID" ],
        data: e
    }, f ? f.call(b, "newsposts", "controller", g) : i.call(b, "render", "newsposts", "controller", g)))), 
    e.buffer.push('\n      </div><!-- col-lg-6 -->\n\n      <div class="col-md-6 hidden-sm hidden-xs">\n        <h4>@bridgetown</h4>\n        '), 
    e.buffer.push(j((f = c.partial || b && b.partial, g = {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        contexts: [ b ],
        types: [ "STRING" ],
        data: e
    }, f ? f.call(b, "recent_tweets", g) : i.call(b, "partial", "recent_tweets", g)))), 
    e.buffer.push('\n      </div><!-- col-lg-6 -->\n      <div class="clearfix"></div>\n    </div><!-- row -->\n    <br>\n    <br>\n  </div><!-- container -->\n\n\n'), 
    e.buffer.push(j((f = c.partial || b && b.partial, g = {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        contexts: [ b ],
        types: [ "STRING" ],
        data: e
    }, f ? f.call(b, "sponsors", g) : i.call(b, "partial", "sponsors", g)))), e.buffer.push("\n\n"), 
    h;
}), Ember.TEMPLATES.jumbotron_index = Ember.Handlebars.template(function(a, b, c, d, e) {
    this.compilerInfo = [ 4, ">= 1.0.0" ], c = this.merge(c, Ember.Handlebars.helpers), 
    e = e || {};
    var f = "";
    return e.buffer.push('<div class="jumbotron jumbotron-bg1 jumbotron-dark">\n  <div class="container">\n    <div class="row centered">\n      <div class="col-lg-8 col-lg-offset-2">\n      \n      <h2>May ##, 2014</h2>\n      </div>\n    </div><!-- row -->\n  </div><!-- container -->\n</div><!-- headerwrap -->'), 
    f;
}), Ember.TEMPLATES.jumbotron_performers = Ember.Handlebars.template(function(a, b, c, d, e) {
    this.compilerInfo = [ 4, ">= 1.0.0" ], c = this.merge(c, Ember.Handlebars.helpers), 
    e = e || {};
    var f = "";
    return e.buffer.push('<div class="jumbotron jumbotron-bg1 jumbotron-dark">\n  <div class="container">\n    <div class="row centered">\n      <div class="col-lg-8 col-lg-offset-2">\n\n      </div>\n    </div><!-- row -->\n  </div><!-- container -->\n</div><!-- headerwrap -->'), 
    f;
}), Ember.TEMPLATES.loading = Ember.Handlebars.template(function(a, b, c, d, e) {
    this.compilerInfo = [ 4, ">= 1.0.0" ], c = this.merge(c, Ember.Handlebars.helpers), 
    e = e || {};
    var f, g, h = "", i = c.helperMissing, j = this.escapeExpression;
    return e.buffer.push('  <div class="jumbotron" style="background:transparent;">\n \n   <div class="container">\n    <h1 class="text-center">Loading...</h1>\n    <h2>&nbsp;</h2>\n      <h1>'), 
    e.buffer.push(j((f = c["x-spinner"] || b && b["x-spinner"], g = {
        hash: {
            lines: 12,
            radius: 10,
            length: 10,
            shadow: !1,
            color: "#333",
            width: 3
        },
        hashTypes: {
            lines: "INTEGER",
            radius: "INTEGER",
            length: "INTEGER",
            shadow: "BOOLEAN",
            color: "STRING",
            width: "INTEGER"
        },
        hashContexts: {
            lines: b,
            radius: b,
            length: b,
            shadow: b,
            color: b,
            width: b
        },
        contexts: [],
        types: [],
        data: e
    }, f ? f.call(b, g) : i.call(b, "x-spinner", g)))), e.buffer.push("</h1>\n    </div>\n  </div>"), 
    h;
}), Ember.TEMPLATES.newspost = Ember.Handlebars.template(function(a, b, c, d, e) {
    this.compilerInfo = [ 4, ">= 1.0.0" ], c = this.merge(c, Ember.Handlebars.helpers), 
    e = e || {};
    var f, g = "", h = this.escapeExpression;
    return e.buffer.push('<div class="container">\n  <h2>'), f = c._triageMustache.call(b, "title", {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        contexts: [ b ],
        types: [ "ID" ],
        data: e
    }), (f || 0 === f) && e.buffer.push(f), e.buffer.push("</h2>\n\n  <div>"), e.buffer.push(h(c._triageMustache.call(b, "htmlContent", {
        hash: {
            unescaped: "true"
        },
        hashTypes: {
            unescaped: "STRING"
        },
        hashContexts: {
            unescaped: b
        },
        contexts: [ b ],
        types: [ "ID" ],
        data: e
    }))), e.buffer.push("</div>\n</div>"), g;
}), Ember.TEMPLATES.newsposts = Ember.Handlebars.template(function(a, b, c, d, e) {
    function f(a, b) {
        var d, e, f, h = "";
        return b.buffer.push('\n    <div class="newspost">\n      <h3 class="newspost-title">'), 
        e = c["link-to"] || a && a["link-to"], f = {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            inverse: j.noop,
            fn: j.program(2, g, b),
            contexts: [ a, a ],
            types: [ "STRING", "ID" ],
            data: b
        }, d = e ? e.call(a, "newspost", "newspost", f) : k.call(a, "link-to", "newspost", "newspost", f), 
        (d || 0 === d) && b.buffer.push(d), b.buffer.push("</h3>\n      <p>"), b.buffer.push(l((e = c.humanDate || a && a.humanDate, 
        f = {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            contexts: [ a ],
            types: [ "ID" ],
            data: b
        }, e ? e.call(a, "newspost.publishOn", f) : k.call(a, "humanDate", "newspost.publishOn", f)))), 
        b.buffer.push('</p>\n      <div class="newspost-content">'), e = c.createExcerpt || a && a.createExcerpt, 
        f = {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            contexts: [ a, a, a ],
            types: [ "ID", "INTEGER", "STRING" ],
            data: b
        }, d = e ? e.call(a, "newspost.htmlContent", 100, "... Read More...", f) : k.call(a, "createExcerpt", "newspost.htmlContent", 100, "... Read More...", f), 
        (d || 0 === d) && b.buffer.push(d), b.buffer.push("</div>\n    </div>\n    <hr />\n  "), 
        h;
    }
    function g(a, b) {
        var d;
        d = c._triageMustache.call(a, "newspost.title", {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            contexts: [ a ],
            types: [ "ID" ],
            data: b
        }), b.buffer.push(d || 0 === d ? d : "");
    }
    this.compilerInfo = [ 4, ">= 1.0.0" ], c = this.merge(c, Ember.Handlebars.helpers), 
    e = e || {};
    var h, i = "", j = this, k = c.helperMissing, l = this.escapeExpression;
    return e.buffer.push(" "), h = c.each.call(b, "newspost", "in", "controller", {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        inverse: j.noop,
        fn: j.program(1, f, e),
        contexts: [ b, b, b ],
        types: [ "ID", "ID", "ID" ],
        data: e
    }), (h || 0 === h) && e.buffer.push(h), e.buffer.push("\n\n\n"), i;
}), Ember.TEMPLATES.performer = Ember.Handlebars.template(function(a, b, c, d, e) {
    function f(a, b) {
        var d, e = "";
        return b.buffer.push("\n      "), d = c._triageMustache.call(a, "category.name", {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            contexts: [ a ],
            types: [ "ID" ],
            data: b
        }), (d || 0 === d) && b.buffer.push(d), b.buffer.push("\n      "), e;
    }
    function g(a, b) {
        b.buffer.push("←All Performers");
    }
    this.compilerInfo = [ 4, ">= 1.0.0" ], c = this.merge(c, Ember.Handlebars.helpers), 
    e = e || {};
    var h, i, j, k = "", l = this.escapeExpression, m = this, n = c.helperMissing;
    return e.buffer.push('<div class="container">\n  <h2>Performer</h2>\n\n<p>\n  <b>Name:</b> '), 
    h = c._triageMustache.call(b, "name", {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        contexts: [ b ],
        types: [ "ID" ],
        data: e
    }), (h || 0 === h) && e.buffer.push(h), e.buffer.push("\n</p>\n\n<p>\n  <b>Headshot:</b> <img "), 
    e.buffer.push(l(c["bind-attr"].call(b, {
        hash: {
            src: "headshot300"
        },
        hashTypes: {
            src: "STRING"
        },
        hashContexts: {
            src: b
        },
        contexts: [],
        types: [],
        data: e
    }))), e.buffer.push(" />\n</p>\n\n<p>\n  <b>Bio:</b> "), e.buffer.push(l(c._triageMustache.call(b, "bio", {
        hash: {
            unescaped: "true"
        },
        hashTypes: {
            unescaped: "STRING"
        },
        hashContexts: {
            unescaped: b
        },
        contexts: [ b ],
        types: [ "ID" ],
        data: e
    }))), e.buffer.push("\n</p>\n\n<p>\n  <b>Categories:</b> "), h = c.each.call(b, "category", "in", "categories", {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        inverse: m.noop,
        fn: m.program(1, f, e),
        contexts: [ b, b, b ],
        types: [ "ID", "ID", "ID" ],
        data: e
    }), (h || 0 === h) && e.buffer.push(h), e.buffer.push("\n</p>\n\n\n"), i = c["link-to"] || b && b["link-to"], 
    j = {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        inverse: m.noop,
        fn: m.program(3, g, e),
        contexts: [ b ],
        types: [ "STRING" ],
        data: e
    }, h = i ? i.call(b, "performers", j) : n.call(b, "link-to", "performers", j), (h || 0 === h) && e.buffer.push(h), 
    e.buffer.push("\n</div>"), k;
}), Ember.TEMPLATES.performers = Ember.Handlebars.template(function(a, b, c, d, e) {
    this.compilerInfo = [ 4, ">= 1.0.0" ], c = this.merge(c, Ember.Handlebars.helpers), 
    e = e || {};
    var f = "", g = this.escapeExpression;
    return e.buffer.push(g(c.view.call(b, "App.PerformersView", {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        contexts: [ b ],
        types: [ "ID" ],
        data: e
    }))), e.buffer.push("\n\n\n"), f;
}), Ember.TEMPLATES.performers_gallery = Ember.Handlebars.template(function(a, b, c, d, e) {
    function f(a, b) {
        var d, e, f, h = "";
        return b.buffer.push('\n  <div class="col-sm-6 col-sm-4 col-md-3 col-lg-2">\n    <div class="performer-thumbnail">\n      <img class="lazy img-responsive" width="300" height="300" '), 
        b.buffer.push(j(c["bind-attr"].call(a, {
            hash: {
                "data-original": "performer.headshot300"
            },
            hashTypes: {
                "data-original": "STRING"
            },
            hashContexts: {
                "data-original": a
            },
            contexts: [],
            types: [],
            data: b
        }))), b.buffer.push(" />\n    </div>\n    <legend>"), e = c["link-to"] || a && a["link-to"], 
        f = {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            inverse: k.noop,
            fn: k.program(2, g, b),
            contexts: [ a, a ],
            types: [ "STRING", "ID" ],
            data: b
        }, d = e ? e.call(a, "performer", "performer", f) : l.call(a, "link-to", "performer", "performer", f), 
        (d || 0 === d) && b.buffer.push(d), b.buffer.push("</legend>\n  </div>\n  "), h;
    }
    function g(a, b) {
        var d;
        d = c._triageMustache.call(a, "performer.name", {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            contexts: [ a ],
            types: [ "ID" ],
            data: b
        }), b.buffer.push(d || 0 === d ? d : "");
    }
    this.compilerInfo = [ 4, ">= 1.0.0" ], c = this.merge(c, Ember.Handlebars.helpers), 
    e = e || {};
    var h, i = "", j = this.escapeExpression, k = this, l = c.helperMissing;
    return e.buffer.push('<div class="row">\n  '), h = c.each.call(b, "performer", "in", "controller", {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        inverse: k.noop,
        fn: k.program(1, f, e),
        contexts: [ b, b, b ],
        types: [ "ID", "ID", "ID" ],
        data: e
    }), (h || 0 === h) && e.buffer.push(h), e.buffer.push("\n</div>\n\n"), i;
}), Ember.TEMPLATES.press = Ember.Handlebars.template(function(a, b, c, d, e) {
    this.compilerInfo = [ 4, ">= 1.0.0" ], c = this.merge(c, Ember.Handlebars.helpers), 
    e = e || {};
    var f, g = "", h = this.escapeExpression;
    return e.buffer.push('<div class="container">\n  <h2>'), f = c._triageMustache.call(b, "collection.title", {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        contexts: [ b ],
        types: [ "ID" ],
        data: e
    }), (f || 0 === f) && e.buffer.push(f), e.buffer.push("</h2>\n\n  "), e.buffer.push(h(c._triageMustache.call(b, "mainContent", {
        hash: {
            unescaped: "true"
        },
        hashTypes: {
            unescaped: "STRING"
        },
        hashContexts: {
            unescaped: b
        },
        contexts: [ b ],
        types: [ "ID" ],
        data: e
    }))), e.buffer.push("\n</div>\n\n\n"), g;
}), Ember.TEMPLATES.shows = Ember.Handlebars.template(function(a, b, c, d, e) {
    this.compilerInfo = [ 4, ">= 1.0.0" ], c = this.merge(c, Ember.Handlebars.helpers), 
    e = e || {};
    var f, g = "", h = this.escapeExpression;
    return e.buffer.push('<div class="container">\n  <h2>'), f = c._triageMustache.call(b, "collection.title", {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        contexts: [ b ],
        types: [ "ID" ],
        data: e
    }), (f || 0 === f) && e.buffer.push(f), e.buffer.push("</h2>\n\n  "), e.buffer.push(h(c._triageMustache.call(b, "mainContent", {
        hash: {
            unescaped: "true"
        },
        hashTypes: {
            unescaped: "STRING"
        },
        hashContexts: {
            unescaped: b
        },
        contexts: [ b ],
        types: [ "ID" ],
        data: e
    }))), e.buffer.push("\n</div>\n\n\n"), g;
}), Ember.TEMPLATES.venues = Ember.Handlebars.template(function(a, b, c, d, e) {
    this.compilerInfo = [ 4, ">= 1.0.0" ], c = this.merge(c, Ember.Handlebars.helpers), 
    e = e || {};
    var f, g = "", h = this.escapeExpression;
    return e.buffer.push('<div class="container">\n  <h2>'), f = c._triageMustache.call(b, "collection.title", {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        contexts: [ b ],
        types: [ "ID" ],
        data: e
    }), (f || 0 === f) && e.buffer.push(f), e.buffer.push("</h2>\n\n  "), e.buffer.push(h(c._triageMustache.call(b, "mainContent", {
        hash: {
            unescaped: "true"
        },
        hashTypes: {
            unescaped: "STRING"
        },
        hashContexts: {
            unescaped: b
        },
        contexts: [ b ],
        types: [ "ID" ],
        data: e
    }))), e.buffer.push("\n</div>\n\n\n"), g;
}), App.Router.map(function() {
    this.resource("events"), this.resource("events", {
        path: "/events/:events_id"
    }), this.resource("newsposts"), this.resource("newspost", {
        path: "/newspost/:urlId"
    }), this.resource("performers"), this.resource("performer", {
        path: "/performer/:id"
    }), this.route("venues"), this.route("shows"), this.route("history"), this.route("press"), 
    this.route("contact"), this.route("catch_all", {
        path: "*:"
    });
}), App.VenuesRoute = Ember.Route.extend({
    model: function() {
        return _retrievePageJSON("venues");
    }
}), App.ShowsRoute = Ember.Route.extend({
    model: function() {
        return _retrievePageJSON("shows");
    }
}), App.HistoryRoute = Ember.Route.extend({
    model: function() {
        return _retrievePageJSON("history");
    }
}), App.PressRoute = Ember.Route.extend({
    model: function() {
        return _retrievePageJSON("press");
    }
}), App.ContactRoute = Ember.Route.extend({
    model: function() {
        return _retrievePageJSON("contact");
    }
}), App.ApplicationRoute = Ember.Route.extend({
    setupController: function() {
        preload(store);
    }
}), App.CatchAllRoute = Ember.Route.extend({
    model: function(a) {
        var b = "https://bridgetown-dev.squarespace.com/";
        return Ember.$.ajax({
            url: b + a[":"] + "?format=json-pretty",
            dataType: "JSONP"
        });
    }
}), App.EventsRoute = Ember.Route.extend({
    model: function() {
        return Event.find();
    }
}), App.IndexRoute = Ember.Route.extend({
    model: function() {
        return this.store.all("newspost").content.length ? this.store.all("newspost") : this.store.find("newspost");
    },
    renderTemplate: function() {
        this.render();
    }
}), App.NewspostRoute = Ember.Route.extend({
    model: function(a) {
        return this.store.find("newspost", a.urlId);
    }
}), App.NewspostsRoute = Ember.Route.extend({
    model: function() {
        return this.store.all("newspost").content.length ? this.store.all("newspost") : this.store.find("newspost");
    }
}), App.PerformerRoute = Ember.Route.extend({
    model: function(a) {
        return this.store.find("performer", a.id);
    }
}), App.PerformersRoute = Ember.Route.extend({
    model: function(a) {
        return console.log(a), this.store.all("performer").content.length ? this.store.all("performer") : this.store.find("performer");
    },
    renderTemplate: function() {
        this.render(), this.render("jumbotron_performers", {
            outlet: "jumbotron"
        });
    }
});