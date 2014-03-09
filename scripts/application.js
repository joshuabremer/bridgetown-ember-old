/*! bridgetowncomedy.com 2014-03-08 */
function sluggify(a) {
    return a.replace(/\W/g, "-").toLowerCase();
}

function cleanStr(a) {
    return a.replace(/\W/g, "").toLowerCase();
}

function sluggify(a) {
    return a.replace(/\W/g, "-").toLowerCase();
}

function cleanStr(a) {
    return a.replace(/\W/g, "").toLowerCase();
}

function isProduction() {
    return location.hostname.match("bridgetown");
}

function _retrievePageJSON(a) {
    return host = "https://bridgetown-dev.squarespace.com/", Ember.$.ajax({
        url: host + a + "?format=json-pretty",
        dataType: "JSONP"
    }).then(function(a) {
        return a;
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
}(jQuery, window, document), Ember.Handlebars.registerBoundHelper("debug", function(a) {
    console.log("Current Context"), console.log("===================="), console.log(this), 
    a && (console.log("Value"), console.log("===================="), console.log(a));
}), Ember.Handlebars.registerBoundHelper("breaklines", function(a) {
    return a = Handlebars.Utils.escapeExpression(a), a = a.replace(/(\r\n|\n|\r)/gm, "<br>"), 
    new Handlebars.SafeString(a);
}), Ember.Handlebars.registerBoundHelper("createExcerpt", function(a, b, c) {
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

App.FixtureAdapter = DS.FixtureAdapter.extend({
    queryFixtures: function(a, b) {
        return a.filter(function(a) {
            for (var c in b) if (b.hasOwnProperty(c)) {
                var d = b[c];
                if (console.log(a[c]), a[c] !== d) return !1;
            }
            return !0;
        });
    }
}), App.Store = DS.Store.extend({
    revision: 11,
    adapter: "Fixture"
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
}), Ember.Handlebars.helper("x-spinner", App.XSpinnerComponent), App.XSpinnerComponent = Ember.Component.extend({
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
    performers: DS.hasMany("performer"),
    Name: DS.attr("string")
}), App.Performer = DS.Model.extend({
    events: DS.hasMany("event"),
    Name: DS.attr("string"),
    PhotoUrl: DS.attr("string"),
    Tier: function() {
        return Math.random();
    },
    slug: function() {
        return sluggify(this.get("Name"));
    }.property("Name"),
    Bio: DS.attr("string"),
    headshot300: function() {
        return "/assets/performer-" + cleanStr(this.get("Name")) + "-300x300.jpg";
    }.property("Name"),
    backgroundImageCSS: function() {
        return "background-image:url('" + this.get("PhotoUrl") + "?format=300w')";
    }.property("PhotoUrl")
}), App.Show = DS.Model.extend({
    Name: DS.attr("string"),
    PhotoUrl: DS.attr("string"),
    Tier: function() {
        return Math.random();
    },
    slug: function() {
        return sluggify(this.get("Name"));
    }.property("Name"),
    Bio: DS.attr("string"),
    Copy: DS.attr("string"),
    headshot300: function() {
        return "/assets/show-" + cleanStr(this.get("Name")) + "-300x300.jpg";
    }.property("Name"),
    backgroundImageCSS: function() {
        return "background-image:url('" + this.get("PhotoUrl") + "?format=300w')";
    }.property("PhotoUrl")
}), App.Event.FIXTURES = [ {
    id: 1,
    Name: "Sample Event",
    performer: [ 6159 ]
} ], App.Performer.FIXTURES = [ {
    Name: "Aaron Weaver",
    Bio: "<p>Aaron Weaver started doing stand-up in Chicago in 2008, with a point-of-view so specific, so original, and so hilarious that the rest of the Chicago comedy scene quickly took notice. He rapidly became one of Chicago’s most heralded stand-ups, due to his custom brand of absurd soulfulness and his way of exploring all the smartest and stupidest thoughts that go through all of our heads. Aaron has performed regularly at every comedy club, showcase, and pancake house in Chicago, including the Laugh Factory, Zanies, and The Lincoln Lodge. He has also performed at the TBS Just For Laughs Festival (twice), as well as the Boston Comedy Festival.  Since moving to LA in 2013 he was named one of Comedy Central’s “Comics to Watch” by making it to the final round of their nationwide Up Next competition. Aaron’s positive stage persona is a breath of fresh air, particularly if you like breathing things that are really, really funny.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/aaron_weaver_head_shot1.jpg",
    id: "6159"
}, {
    Name: "Adam Newman",
    Bio: "<p>Adam Newman is a New Hampshire-born, Georgia-schooled, Brooklyn-based comedian who has appeared on the Late Show with David Letterman and John Oliver&#039;s New York Stand-Up Show on Comedy Central. He was among Comedy Central&#039;s first class of &quot;Comics to Watch&quot; and later performed as a &quot;New Face&quot; at the prestigious Just for Laughs Comedy Festival in Montreal. His critically acclaimed debut stand-up CD, Not for Horses, was released by Rooftop Comedy. Adam&#039;s TV appearances include MTV&#039;s The CollegeHumor Show, various talking head shows on the TV Guide Network, the Tyra Banks Show (weird!), and dozens of CollegeHumor Originals on CollegeHumor.com.  Adam hosts the popular BIG LONG SETS at NYC&#039;s Upright Citizens Brigade Theatre, and Butt Talk, the world&#039;s #1 Number 2 podcast.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/newman_kylemakrauer.jpg",
    id: "6069"
}, {
    Name: "Adam Pasi",
    Bio: "<p>Adam Pasi is a 33 year old comedian, who attempted and failed to grow up on both coasts and in 3 different countries, on account of his father being in the army.  To cope with being the chubby new kid almost every 3 years he learned to depend on being funny when it came to making new friends.  While this didn&#039;t have him hoisted upon the shoulders of his classmates, he was able to develop some very meaningful friendships along the way.  Fast forward to adulthood (at least according to age) Adam has lived in Portland, Oregon for over a decade. And his sense of humor has led to him being the guy among his friends who tells everyone the usually dumb (yet funny) story of all the foolishness that happened the night before.  This led to him wanting to get on stage and tell anyone he could get to listen, all of the dumb (yet funny) stories about all of the foolishness that&#039;s ever happened to him ever, as well as a few of his observations on life, sexuality, Ke$ha, and pretty much whatever he finds amusing.  All from the perspective of a not quite grown up who claims that &quot;While I haven&#039;t matured to the point where I&#039;m behaving the way a man my age is supposed to, I have managed to build a life that&#039;s capable of withstanding my bullshit&quot; It&#039;s not like he&#039;s lived this outrageously unique adventure that you couldn&#039;t fathom without him explaining it to you. But he has enjoyed the usually dumb (yet funny) life that he&#039;s lived thus far, and he looks forward to enjoying sharing it with people.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/adamshot.jpg",
    id: "6702"
}, {
    Name: "Adrienne Iapalucci",
    Bio: "<p>Born and bred in the Bronx, Adrienne Iapalucci’s skewed look on life is reflected in her unique brand of intelligent comedy. Her dark sense of humor is enhanced by her political incorrectness and counteracted by her love of dogs.</p>\n<p>Comedy fans might recognize Adrienne from her performances as a semifinalist on season 7 of NBC’s Last Comic Standing and her recent appearance on the Late Show with David Letterman.</p>\n<p>In 2009, Adrienne won the first ever People’s Choice award at the New York Comedy Festival. She was also a semifinalist in the festival&#039;s New York Funniest Stand-Up Contest and a runner-up in the New York Underground Comdy Festival’s Best of the Boroughs contest.</p>\n<p>Adrienne has been featured in the Daily News, New York Times, Reader’s Digest, and TimeOut NY magazine. In 2010 Adrienne made her international debut as part of Montreal’s Just For Laughs Festival, where she took part in “New Faces.”  Adrienne recently made her first late night appearance in November, 2013 on The David Letterman Show.</p>\n<p>Adrienne can be seen touring comedy clubs and colleges around the country.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/adrienne.jpg",
    id: "6611"
}, {
    Name: "Ahmed Bharoocha",
    Bio: "<p>Ahmed Bharoocha is quickly becoming a household name amongst comics and comedy fans alike.  Having only been in LA for two years, in 2013 he was featured on Comedy Central’s new stand-up show Adam Devine’s House Party, his sketch group Dead Kevin was featured on Tosh.0, ComedyCentral.com and named by LAWeekly as one of the top comedy acts to watch, and in 2012 he was selected for New Faces in the Just For Laughs Montreal Comedy Festival.</p>\n<p>In 2009, Ahmed was handpicked by David Letterman’s Eddie Brill to perform in the Great American comedy festival, and in 2010 he won the Magner’s Comedy Festival.  He has been a regular in several other notable fests including Glasgow, Boston Comedy Fest, Seattle Comedy Fest, RIOT LA, Bridgetown Comedy Fest and many others.</p>\n<p>Currently he performs regularly at LA’s top comedy clubs The Comedy Store, The Improv and the Laugh Factory.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/ahmed_.jpg",
    id: "6425"
}, {
    Name: "Amber Tozer ",
    Bio: "<p>Amber Tozer is a stand up comic, writer, and actress living in Los Angeles.  She has built a Twitter following of over 35K users, and her witty tweets have been featured on shows such as Jimmy Fallon, and Ellen among others. She co-created #nitTWITS, a Twitter-based web series, which features writers and performers from SNL, Modern Family, The Office, and Conan. Amber has written for Cartoon Network&#039;s animated sketch series MAD, and Adult Swim&#039;s Moral Orel. Tozer has also made appearences on Last Comic Standing, and in the Montreal Just for Laughs Festival. She recently inked a development deal with FOX ADHD for an animated series based on her life!</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/ambertozer.jpg",
    id: "6608"
}, {
    Name: "Amy Miller",
    Bio: "<p>Voted Portland&#039;s #1 Comedian in 2013 by a jury of her peers, aside from the cover of Willamette Week Amy Miller has also been seen featuring for Maria Bamford, and at the following comedy places: San Francisco Sketchfest, Noise Pop Festival, SF Punchline, Cobb’s Comedy Club, Harvey’s Comedy Club Portland, Helium Comedy Club, The All Jane No Dick Festival, The Siren Nation Festival, Laugh Your Asheville Off, Mississippi Studios Portland and as a regular headliner at the original Purple Onion. A lead producer/ host/ wrangler in Sylvan Productions, Amy produced a successful Oakland show series that featured Hannibal Buress, Moshe Kasher, Kyle Kinane, Rory Scovel and more.</p>\n<p>Amy Miller gets on stage to tell jokes and you’re all like well she doesn’t look funny at ALL. I hope she doesn’t blow this! Maybe I should go for a smoke break? 2 minutes in, your pants have been charmed off by her rosy cheeks and a delicate balance of self-deprecation and ego. 5 minutes in, you start to feel sad for her and sometimes feel the need to go “AWWW” out loud in the middle of her set or, occasionally “YOU’RE ADORABLE.” 10 minutes in you’re not sure if you want to have wild sex with her or have her pretend to be your mom and tuck you into bed at night while lightly stroking your hair and singing You Are My Sunshine because she’s also an excellent singer. Any exposure above 15 minutes and your head is just a chaotic swirl of love feelings and a crippling fear of eventual heartbreak and rejection at the end of which you decide you should just be best friends. It’s fun!</p>\n<p>She has a podcast called Sorry About Your Dad. It’s about dad stuff.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/amymiller2_1.jpg",
    id: "5730"
}, {
    Name: "Anatoli Brant",
    Bio: "<p>Born and raised in former USSR<br />\n,Moved to California at age of 23.Started comedy in 2002/2003 in San Francisco<br />\nPerformed comedy in San Jose Improv,Punch Line San Francisco Flappers Burbank as part of Recovering Communist Tour.<br />\nShowcases in New York ( Gotham City CC,Carolines on Broadway,Stand up NY)<br />\nThird place in Battle of The Bay competition 2010 San Francisco<br />\n.Finalist of Helium Funniest Person 2013 (Portland)<br />\nProducer of on going comedy shows Comedy Bull and 7 on 7 at Brody Theater ( Portland OR)<br />\nRegardless of being foreigner - has strong command of English language and fresh and obscure points of view<br />\non life in US and in general :).<br />\nThank you for consideration.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/anatolihs.jpg",
    id: "5932"
}, {
    Name: "Andres du Bouchet",
    Bio: "<p>I&#039;m a staff writer at CONAN, and perform all over L.A., mostly at &quot;alt&quot; venues. My first comedy album is called Naked Trampoline Hamlet, available on iTunes. I&#039;m currently working on my second album with A Special Thing Records, and there&#039;s a chance it will be available by May. I performed at Bridgetown two years ago and had a blast, and would love to come back!</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/andres_du_bouchet_03.jpg",
    id: "6065"
}, {
    Name: "Andy Erikson",
    Bio: "<p>I was hit in the head by a bird as a kid, and that’s how I got my powers. Soon after, I decided to be a comedian. In 2009 I was voted MVP at the Aspen Rooftop College Comedy Festival and that same year I was a semi-finalist for the Andy Kaufman Award.  In 2013 I was a finalist at The Great American Comedy Festival. My favorite thing about comedy is making friends.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/image_3.jpg",
    id: "6284"
}, {
    Name: "Andy Haynes",
    Bio: "<p>Andy Haynes was born in the shadows of Mt. Rainier in the wilds of the Pacific Northwest, raised on salmon and caffeine. He now lives in Los Angeles, where he works as comedian, and writer.</p>\n<p>He has performed on Late Night with Jimmy Fallon and the New Faces showcase at the Montreal Just for Laughs Festival, along with numerous other clubs, colleges, and festivals. Numerous means any number.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/andy_haynes_photo.jpg",
    id: "6804"
}, {
    Name: "Anna Seregina",
    Bio: "<p>Anna Seregina is a San Francisco-based stand-up comic and performer, described as having the &quot;worst aura.&quot; She was named a &quot;Comic to Watch in 2013&quot; by the SF Weekly, as well an &quot;Emerging Bay Area Comic in 2013&quot; by the Bold Italic. She is a regular performer of the San Francisco-based show &quot;the Business,&quot; and produces the show “Talkies.&quot; She has appeared in comedy festivals, hosted music festivals, told stories at storytelling shows, and done weird things on Public Access TV. She starred in Joey Izzo’s Stepsister, which screened at San Francisco International and the Cannes Film Festival in 2013. Most facts about her are true. Most truths about her are facts.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/image_17.jpg",
    id: "6681"
}, {
    Name: "Anthony Lopez",
    Bio: "<p>Anthony Lopez has written for the Gotham Independent Film Awards, performed at Bumbershoot, Bridgetown and is the co-host of the Free Chips and Salsa show at Action/Adventure Theater. Hailing from Portland Oregon, Anthony Lopez has been called &quot;One of the Comics to Watch&quot;  by the Portland Mercury, and had the privilege to feature for such acts as Nick Kroll and The Whitest Kids You Know. Anthony has performed at UCB East, and The Knitting Factory in NY, and the Tacoma Comedy club and The Comedy Underground in Washington. He is regular host at Helium Comedy Club and other clubs in the Northwest. He spins long form stories with short one liners, about everything from family to  movies, comic books, drinking, and religion.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/anthony_headshot-2.jpg",
    id: "6271"
}, {
    Name: "Aparna Nancherla",
    Bio: "<p>Aparna started out doing comedy in her hometown of Washington, D.C. and currently resides in New York City, where most recently she was a writer and regular correspondent on FX’s Totally Biased with W. Kamau Bell.  She is an alumna of the NBC Stand Up for Diversity program, and in 2013 was one of the breakout New Faces at the prestigious Just For Laughs Festival in Montreal.  She has performed all over the US including Portland’s Bridgetown Comedy Festival, SF Sketchfest, Bentzen Ball, Aspen’s Rooftop Comedy Festival, The Great American Comedy Festival.  She has also been a contributing writer for NPR, Reader’s Digest, The Huffington Post, The Washington Post Magazine, XM Radio, and Slate V.  She can regularly be seen performing at the Upright Citizen’s Brigade’s in LA and NYC.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/aparna_nancherla_headshot.jpg",
    id: "6823"
}, {
    Name: "Barbara Holm ",
    Bio: "<p>Originally from Seattle, Barbara Holm has performed at the San Francisco Sketchfest, the Bridgetown Comedy Festival, Bumbershoot Arts festival, and the Women in Comedy Festival in Boston. She has written for IGN, The Portland Mercury, Hahajk, and the Huffington Post. She has been awarded Time Out New York’s Joke of the Week and was named “one of the best things about comedy in 2012″ by the Comedy Bureau. Barbara write a weekly humor column for The Portland Mercury about social injustice called, &quot;Don&#039;t be a Dick.&quot; Her comedy has been described as clever, unique, idiosyncratic, and exuberant. Seattle City Arts Magazine called her a “comedy wizard” and Seattle Stranger Newspaper called her an “adorable wunderkind” and The Portland Mercury described her as a &quot;joke machine&quot; and she describes herself as “running away from this question to hide under the desk right now.&quot;</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/x3enbmmmpzslrgjeqoqzs_dzipnybktx7ytxa6hy23wqcqikwjxkcgsvmo7_d9dwgufc5bcymja86prtc8m42it58j4cgom_zbkr3r1yssvtayvr9j5djmcbw73npein4_0.jpg",
    id: "6102"
}, {
    Name: "Ben Bizuneh",
    Bio: '<p>Ben started doing stand-up in Bloomington, Indiana at the Comedy Attic while attending Indiana University. After graduating, he moved to Los Angeles, and can be seen performing wherever anyone will let him. He’s performed at the Limestone Comedy Festival, was a finalist in the Great American Comedy Festival, and has done no other festivals.</p>\n<p>He also makes videos in which he lies to people that have been featured on WorldStarHipHop, College Humor, What’s Trending, and The Bleacher Report. Ben hopes to one day be able to cry on command.</p>\n<p><a href="http://benbizuneh.tumblr.com">http://benbizuneh.tumblr.com</a><br />\n<a href="http://youtube.com/lieguys">http://youtube.com/lieguys</a></p>\n',
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/picture_0.jpeg",
    id: "6134"
}, {
    Name: "Beth Stelling",
    Bio: "<p>Beth most recently won the internet on Chris Hardwick’s show @midnight on Comedy Central. LA Weekly named Stelling #2 on a list of “12 L.A. Comedy Acts to Watch in 2013.” Patton Oswalt also listed Beth as one of his favorite up-and-coming comics during his AMA on Reddit. Buzzfeed.com says she’s one of “14 Comedians Who You Should Be Paying Attention To.” She is in good company in Aritzia magazine’s comedy edition. She was a New Face of Comedy at the Just for Laughs Comedy Festival in Montreal and returned in 2013 to record HBO Canada’s Funny As Hell with Jon Dore. A few months after arriving in LA, Stelling made her standup television debut on TBS’s Conan.</p>\n<p>Conan announced the release of her debut comedy album, Sweet Beth, on Rooftop Comedy’s record label. “Sweet Beth” was New &amp; Noteworthy on iTunes upon release. Her second appearance was on TV Guide Network’s Stand-up In Stilettos with Kate Flannery. Beth was deemed “Top 18 Women You Should Be Following On Twitter” by Huffington Post. Nerdist.com has been a big supporter of Beth, including her in their “Four Funny Female Comedians You Need to Know” alongside Shelby Fero, Tig Notaro and Ali Wong. Beth can be heard on Chris Hardwick’s annual podcast Stand-up Cluster 2013 and with Pete Holmes on his podcast “You Made It Weird” #134.</p>\n<p>Stelling started telling jokes seriously in Chicago where she was a cast member of Chicago Underground Comedy. She performed stand-up at the top comedy venues, studied improv at The Annoyance Theater and tri-hosted a show called “Entertaining Julia” that remains beloved today with her friends Tiffany and Danielle Puterbaugh. In 2010 The Chicago Reader named her the “Best Stand-up Comedian in Chicago.”</p>\n<p>Beth continues to work bars, theaters, bookstores, sex shops, clubs, festivals and colleges across the country. She’s had the honor and delight of working with Rob Delaney, Sarah Silverman, Kristen Schaal, Andy Richter, Jimmy Pardo, Matt Braunger, Kyle Kinane, Jim Norton, Dana Gould and Greg Proops among others. Beth has a weekly L.A. show called CHURCH with Julian McCullough, Sean O’Connor &amp; Brent Sullivan at The Church on York in Highland Park, every Monday at 8:30p starting Jan. 6, 2014.</p>\n<p>Outside of stand-up comedy, Stelling made her network television debut on ABC’s “Detroit 1-8-7″ in Fall of 2010 (she played a murderer’s ex-roommate). She acts and improvises in webseries, short films, sketches, is a Moth StorySlam champion and voices cartoons. Stelling obtained a theater degree from Miami University, interned with The School at Steppenwolf and studied with Lesly Kahn in Los Angeles. Stelling’s creation and portrayal of Vern Schultz in “Five Lesbians Eating a Quiche” earned her a nomination for a 2011 Chicago Beat Award for Best Actress in a Non-Equity play. “Five Lesbians Eating a Quiche” was produced Off Broadway by the SoHo Playhouse  and was published by Samuel French in 2013.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/0026-finalwebonly.jpg",
    id: "6553"
}, {
    Name: "Billy Prinsell",
    Bio: "<p>Billy Prinsell is a New York based stand-up comedian.  Since developing his unique on-stage presence five years ago he has performed all over New York City. His influences range from Sam Kinison, George Carlin and Bill Burr. As a graduate of SUNY  Purchase he studied the dimensions of the comic character and took these concepts to shape an instantly recognizable persona. He performs at Gotham,  The Creek and The Cave, The Comic Strip, Stand Up New York, Carolines, Eastvil Comedy Club, and venues all around the tri-state area.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/billy_photo_2.jpg",
    id: "6429"
}, {
    Name: "Billy Wayne Davis",
    Bio: "<p>Since getting his start in his hometown of Nashville, TN, Billy Wayne Davis has performed in virtually every corner of the United States. He has appeared on TruTV and written for NFL on FOX. His festival credits include the Bridgetown Comedy Festival, the Laughing Skull Comedy Festival, Bumbershoot, and Sketchfest in San Francisco. His Rooftop Records release, Billy Wayne Davis, was featured on Sirius XM and named one of Paste Magazine&#039;s Top Ten comedy albums of 2012</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/billy-wayne-davis-4205-4.jpg",
    id: "6029"
}, {
    Name: "Bob Khosravi",
    Bio: "<p>Bob Khosravi was born a baby, which his mother appreciated. A storyteller hailing from Austin, Texas Bob has performed all across the country as well as been a featured performer in the Moontower Comedy Festival, the Art Outside Comedy Festival, and was selected to compete in the San Francisco International Comedy Competition. An Austin favorite, Khosravi&#039;s comedy has been described as playful with a subtle sense of dark.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/photo.png",
    id: "5856"
}, {
    Name: "Brendon Walsh",
    Bio: "<p>Originally from Philadelphia, PA, Brendon Walsh established himself as a comedian in Austin, TX.  In 2004, he won the “Funniest Person In Austin” contest and that same year also appeared on ABC’s “Jimmy Kimmel Live” as his original character, “Scary Monster” (a terrible monster stand up comedian).  In 2005 and 2006, Brendon was voted “Best Stand-Up Comedian” in the Austin Chronicle’s “Readers Poll”.  In 2006 he appeared on Comedy Central’s “Premium Blend” and on season 4 of NBC’s “Last Comic Standing.”  In 2007, he won the $10,000 grand prize on the comedy stage in an internet contest at Famecast.com, beating thousands of other people for the prize money and title of “Famecast Comedy Fenom”.  Brendon was featured in the “New Faces” Showcase at the 2008 Just For Laughs comedy festival in Montreal where he was recognized as one of the breakout performers, returning in 2010 and 2012 to record standup performances for HBO.</p>\n<p>In 2009, Brendon moved to Los Angeles where he can be regularly seen performing at the likes of Largo, the Upright Citizens Brigade, Improv, Comedy Store as well as several alternative rooms. His TV credits also include being the first stand up to appear on TBS’ CONAN, and Comedy Central’s John Oliver’s New York Standup Show. Since moving to LA, Brendon has sold two scripted vehicles to star in and co-write.  In 2010 he sold “Crowded Apartment” to Spike.  Most recently Brendon has been writing the pilot of “Walsh”, a half hour narrative for for Comedy Central, and he recorded his Comedy Central Stand Up Presents: The Half Hour special which premiered in May, 2012 as the highest rated episode of the season. In 2013, Brendon performed at the Melbourne Comedy Festival, appeared on IFC’s MARON, FX’s LEGIT and Comedy Central’s @MIDNIGHT, and is currently headlining across America.  His debut CD will be released in 2014.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/brendon032.jpg",
    id: "6834"
}, {
    Name: "Brent Flyberg",
    Bio: "<p>Brent Flyberg wanted his bio to just to be a picture of a wallaroo eating a chocolate chip pancake off a chandelier, but he only gets what he wants occasionally, which makes him an okay guy to be around. He has candy in his pockets almost all the time, and if you ask nicely, he&#039;ll share. His comedy will make you feel good that you&#039;re not him. He has performed at Bumbershoot, Summer Meltdown, and the Melbourne International Comedy Festival. He hates wearing pants.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/btown2.jpg",
    id: "6534"
}, {
    Name: "Bri Pruett",
    Bio: "<p>Bri Pruett is a stand-up comic and improviser from Portland, Oregon.  She’s appeared at the Bridgetown Comedy Festival and the All Jane No Dick comedy festival.  She was recently voted into the &quot;Top 5 Funniest Comedians in Portland&quot; by Willamette Weekly.  In the fall of 2013, Bri was one of 35 comics selected from 1,300 applicants to perform in the Seattle International Comedy Competition.</p>\n<p>For 8 years she’s worked with Action/Adventure Theater, a non-profit independent theater and black box venue that produced an original Sketch Show: Making Sex (in which The Portland Mercury said Bri showed ”razor sharp comic timing.”) She’s been the comedy sidekick and director and head writer for Late Night Action with Alex Falcone, a live, talk/variety show.</p>\n<p>She is a regular host and performer at Curious Comedy Theater and a regular player with improv singing-ensemble: Pipes.  Bri is the semi-weekly host of Curious Comedy’s Saturday Night showcase of Portland comics and special guests.  She is a regular MC for the Funhouse Follies Burlesque troupe.  She also writes a regular column for the Portland Mercury on sex and dating in Portland called: Let&#039;s Do It with Bri Pruett.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/bricomedy10.jpg",
    id: "6527"
}, {
    Name: "Brian Mitchell ",
    Bio: "<p>Brian Mitchell is a Jehovah’s Witness turned comedian that loves rejection and knocking on doors. He’s had the privilege of opening for TJ Miller, Louie Anderson and Josh Blue just to name a few. Brian, also was a finalist in the 2011 Sirius XM Opie &amp; Anthony Car Crash Comedy contest , then in 2012 , he made the finals at the Mangers Comedy Festival and in 2013 received second place in Yobi.tv’s funniest sketch contest for “Token Black Guy Infomercial”.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/551205_10100368796575892_874635003_n.jpeg",
    id: "6410"
}, {
    Name: "Bryan Cook",
    Bio: "<p>Bryan Cook is a writer and comedian based in LA.  Cook is the host and creator of Competitive Erotic Fan Fiction, presented every month at the esteemed Nerdmelt Theater in LA, as well as all over the US. In 2012, he was featured as an opening act on Kyle Kinane’s Great Mistakes Tour, and has performed at the SF Sketchfest, Bridgetown Comedy Fest, Riot LA, and Bumbershoot Festival. Bryan is a contributor to McSweeney’s and was most recently a staff writer on E!’s “Fashion Police”.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/bryan_cook.jpg",
    id: "6379"
}, {
    Name: "Byron Bowers",
    Bio: "<p>Described by LA Weekly as “a comic who’s got big ideas and big plans to go big places,” Byron Bowers is a stand-up comedian and actor that has toured nationally with Dave Chappelle, Hannibal Buress, John Caparulo, and Eric Andre and The Eric Andre Show Live. </p>\n<p>He has appeared on the Eric Andre Show on Adult Swim, Comcast TV, and Comedy Central. His stand-up cable debut was on Comedy Central&#039;s &quot;Adam Devine&#039;s House Party&quot; and he can also be seen on the reboot of BET&#039;s &quot;Comic View&quot;. He has won the Big Sky International Comedy Competition and was named by LA Weekly as a “Comedy Act to Watch in 2013”. Byron was featured as New Face at the prestigious Just for Laughs Comedy Festival in 2013.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/byron_bowers_photo.jpg",
    id: "6805"
}, {
    Name: "Caroline Bassett",
    Bio: "<p>Caroline Bassett is a young comic from Austin, Texas who intertwines bizarre storytelling with sardonic observational jokes.  She was a finalist in the 2013 Funniest Person in Austin Contest.  As a downstairs neighbor once asked her, &quot;Do you dance in the shower?&quot;</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/1476023_10202546314805722_1681958827_n_0.jpg",
    id: "6647"
}, {
    Name: "Carolyn Busa",
    Bio: "<p>Carolyn Busa has performed on stages all over Philadelphia and New York City as well as the 2011 Ladies are Funny Festival, 2012 Bridgetown Comedy Festival, the 2013 Women in Comedy Festival, and the 2013 She-Devil Comedy Festival. She is the proud mother/co-creator of Laughs on Fairmount, one of Philly&#039;s longest running open mics.</p>\n<p>Carolyn’s awkwardly, disarming stage presence will charm your figurative pants off.  She continually hosts and features throughout the tri-state area; and contributes to local sketch and theater productions. She may have even unsuccessfully auditioned for America&#039;s Next Top Model. Twice.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/headshot_15.jpg",
    id: "6315"
}, {
    Name: "Casey Ley",
    Bio: "<p>Casey Ley’s comedy is silly. And smart  And dirty. And dark. And handsome. It’s a lot like him actually.  So it is also self-centered and flakey and relatively promiscuous.  He is the creator and host of the popular San Francisco comedy game show Tonic Trivia and stand-up show Some People Like Us.  He and his shows have appeared in comedy festivals like SFSketchfest, Moontower Festival in Austin, TX, on the radio on the relatively popular NPR station and he has shared the stage with comics you know like Hannibal Buress, Doug Benson, Laura Kightlinger and some other people you&#039;ve heard of if you like comedy.  The readers of SF Weekly voted him best comic in San Francisco in 2012 (which had nothing to do with his homosexuality) and in 2013 he was runner-up in The Advocate Magazine&#039;s Next Great Queer Comedy competition (which was wholly the result of his homosexuality).  Apparently he just wasn&#039;t quite gay enough.  Last year, at least.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/caseyley.jpg",
    id: "6157"
}, {
    Name: "Charlie Rohrer",
    Bio: "<p>Charlie Rohrer dropped out of college to tell jokes. Comedy just seemed more viable than a bachelor&#039;s degree in Fine Arts. Growing up the black sheep of an enormous Irish family in the South Suburbs of Chicago, his comedy mostly comes from self-reflection, tales from his awkward childhood, and his unique view on everyday life. </p>\n<p>He co-producers a very successful, independent show in Chicago called Congrats on Your Success and has performed at Zanie’s, Chicago Underground Comedy, Gilda’s Laughfest, and more.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/charlierohrer.jpg",
    id: "6203"
}, {
    Name: "Chris Locke",
    Bio: "<p>Chris Locke is a stand up comedian, actor, and writer from Toronto, Canada.</p>\n<p>He performs stand up all over Canada and the U.S. at festivals, in comedy clubs, and independent shows. He was voted &quot;Best Stand Up 2012.&quot;</p>\n<p>Chris just finished performing as a headliner, one of the 42 for this year’s JFL42 festival in Toronto. Other comedy festivals of note that he has performed at are, Just For Laughs in Montreal,  SF Sketchfest in San Francisco, the Bridgetown Comedy Festival in Portland, and NXNE.<br />\nWith his unique style of stand up, Chris has opened for comedians such as Todd Barry, Hannibal Burress, Eugene Mirman, Pete Holmes, Todd Glass, and toured opening for Kyle Kinane. </p>\n<p>Chris has appeared on many television shows and is most recognized for his regular appearances on MTV Showtown on MTV Canada. He has also appeared on The LA Complex on CTV and the CW, Scare Tactics on Much Music, Cock&#039;d Gunns on Showcase, Match Game and The Jon Dore Television Show on The Comedy Network, and has lent his distinct voice to CBC’s Radio One.</p>\n<p>Chris was also a key producer of one of Toronto&#039;s most well known weekly comedy shows, Laugh Sabbath, which took place at The Rivoli. His monthly Laugh Sabbath show with co-host Aaron Eves called, Let&#039;s Get Hot! ran for six years and introduced a combination of alternative and mainstream comedy to downtown audiences. The show featured recurring character pieces by Nathan Fielder, Kathleen Phillips, and Brian Barlow, as well as abstract comedy by artist Jon McCurley.<br />\nChris has written and performed in countless comedy shorts. They have been screened at Just For Laughs, TIFF, NFB&#039;s World of Shorts, CIFF (Calgary International Short Film Festival) and at live shows. His &quot;These Moments Too&quot; series which he co-produced with Nathan Fielder was a best of 2006 pick in NOW magazine.<br />\nHis success in comedy shorts has lead him to hosting and curating a night of independent comedy shorts for CFC&#039;s annual Worldwide Short Film Festival, which he did for Three years.</p>\n<p>In Sketch comedy Chris’s sketch troupe with Brian Barlow called, The Gurg, was nominated for the prestigious Tim Sim’s Encouragement Fund in 2003, which lead to appearances on The Cream Of Comedy on Comedy Network and The Toronto Show.<br />\nHis other sketch troupe, Dinkus, which also featured Graham Wagner, Michael Balazo, Aaron Eves, Brian Barlow, was critically acclaimed and performed in New York, Montreal, and the Toronto Sketch Comedy Festival two years in a row.<br />\nHis written humour has been published in The Grid weekly, and ION magazine.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/chris_locke_colour_2.jpg",
    id: "5889"
}, {
    Name: "Christian Duguay",
    Bio: "<p>Christian is an alumni of the Groundlings Theater Main Company and was a cast member on Fox&#039;s MadTV. He has also appeared on Arrested Development and Fox NFL Sunday. He was currently featured in the Rodney Dangerfield Award showcase at the Riot LA alternative Comedy Festival 2014, and is the Executive Producer of Ridiculousness (MTV) and Fantasy Factory (MTV). He regularly performs stand up comedy in the Los Angeles area.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/img_0481.jpg",
    id: "6123"
}, {
    Name: "Christian Van Wade Ricketts",
    Bio: "<p>I am funny and my friends think so too and so do a bunch of other people who I am not close friends with. I have been in Bridgetown several times and the Comedy &amp; Burrito Festival in San Francisco. Self promotion is disgusting. I have been doing stand up for 5 years.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/btwon_sbumission_pho.jpg",
    id: "6591"
}, {
    Name: "Curtis Cook",
    Bio: "<p>Curtis Cook is a comic from Cleveland, Ohio now living in Portland, Oregon.  He has performed in venues and festivals throughout the country, including the Cleveland Comedy Festival, Salt Lake City’s Comedy Carnivale, Bridgetown Comedy Festival, and San Francisco’s Sketchfest.</p>\n<p>Curtis doesn’t like a lot of things, and has been referred to as a “charming nihilist,” “the physical embodiment of insecurity,” and, “an existential crisis on stage.”  Those are almost nice things to say about a person. </p>\n<p>You can follow him on twitter at @Curtis_Cook.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/headshot_-_curtis_cook.jpg",
    id: "6276"
}, {
    Name: "Dan Telfer",
    Bio: "<p>Dan Telfer wrote and performed comedy in Chicago for 15 years before moving to Los Angeles. He is currently a social media producer and occasional audience warm-up comedian for the Comedy Central TV show @midnight. As a writer for The Onion he was responsible for headlines like Drunk Women Find Their Run Across Busy Street Hilarious and for the web series The Onion’s Extremely Accurate History of the Internet. He was also in charge of an entire team of writers, and headed The Onion’s advertising integration department. As a stand-up comic he has toured as an opener for Maria Bamford, Brian Posehn and Patton Oswalt. He was selected to perform at the Chicago Just For Laughs Festival&#039;s Best of the Fest show, the Montreal Just For Laughs Festival&#039;s Talk of the Fest show, and the coveted New Faces of Comedy showcase of both festivals. In addition to The Onion his writing has appeared in Paste Magazine, The A.V. Club, and the official book based on the TV show Mad Men: The Illustrated World. But he is perhaps known best for his stand-up chunk &quot;The Best Dinosaur,&quot; which became a runaway viral video hit and earned him a massive internet following. </p>\n<p>“Dan Telfer’s comedy is a feat of improv, stand-up, and lightning fast synapses.” -The Chicago Tribune</p>\n<p>&quot;I love Dan Telfer. He is wonderful. He is like a goofier, smarter, funnier, taller, me with glasses. And male parts.&quot; -Maria Bamford </p>\n<p>&quot;Of all the performers I&#039;ve known over the years, Dan Telfer, more than any of them, seems the most compelled to do stand-up comedy. And I don&#039;t think it&#039;s because of some deep-seated need for attention, or because he&#039;s seeking love from strangers that was denied him as a child; I think he needs to do stand-up comedy because he can&#039;t be alone with his own thoughts. Coincidentally, he&#039;s hilarious.&quot; -Paul F. Tompkins</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/dt_headshot_sm.jpg",
    id: "5754"
}, {
    Name: "Dave Stone",
    Bio: "<p>Based in Los Angeles by way of Atlanta, Dave made his television debut on “The Late Late Show with Craig Ferguson” in 2013 and in the same year was selected to the prestigious “New Faces” showcase at the Just For Laughs Comedy Festival in Montreal, as well as being named one of the “12 Comics to Watch” by L.A. Weekly Magazine. Dave can also be heard voicing several characters on Adult Swim’s hit animated series “Squidbillies” on the Cartoon Network and was a co-founding member of the nationally acclaimed “Beards of Comedy Tour”, who released their sophomore album “Cardio Mix” on Comedy Central Records in 2011. Since 2008, Dave has spent 175+ days a year on the road, sharing stages with some of the industry’s brightest stars, such as Brian Regan, Patton Oswalt, Maria Bamford, Marc Maron, Kyle Kinane and John Mulaney. Dave’s laid back and self-deprecating style make him a hit with a wide variety of audiences, transcending age, race, class, gender, height and weight.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/dave_-_low-res_headshot.jpg",
    id: "6325"
}, {
    Name: "David Cope",
    Bio: "<p>David began performing stand up open mic in Portland, Oregon. It was way more fun than his call center job so he stuck with it. After living and performing in Portland and Seattle he moved to New York City. During his time there he was a semi finalist on Last Comic Standing 2010, nabbed the motion capture role of Jay Norris in Grand Theft Auto V, and co-produced The Hot Soup Comedy Show at the Upright Citizens Brigade Theater. His better half moved to L.A., so he did too and now engaged like proper adults they live together in Hollywood where he continues to write and perform comedy. David is a regular at The Portland Bridgetown Comedy Festival and The New York Underground Comedy Festival. He’s the co-creator and producer of No Pun Intendo, Nerdmelt Theater’s first in-house comedy video game competition and produces The Call Of The Blade, a gaming review web series featuring L.A. comedians.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/0711.jpg",
    id: "6151"
}, {
    Name: "David Foster",
    Bio: "<p>It’s possible David Foster is the only comedian from New York who’s appeared on HBO, MTV, and Showtime, has a Masters degree in Traditional Chinese Medicine, was arrested seven times as an adolescent, speaks Spanish fluently, performed &quot;Mama Said Knock You Out&quot; at his Bar-Mitzvah, has a black belt in karate and a daily meditation practice… though it’s true, you never know who else is out there. If that wasn’t too much to digest then you’re ready for David’s uniquely cerebral brand of humor. </p>\n<p>Born and raised in New York, David is one of the country&#039;’s funniest up and coming philosophers posing as a stand-up comic. In spite of his juvenile experimentation with graffiti, marijuana, and shoplifting he was a straight-A student, always on the honor roll. Around the legally transformative age of 18 he straightened out his act, and shortly thereafter discovered his act on stage. </p>\n<p>Success and recognition came quickly. His popular Manhattan public access talk show grabbed the attention of MTV, and by his fourth year in comedy he’d been featured on HBO, Showtime and MTV - many of his segments still being aired on VH-1’s Best Pranks. He won the 2011 Boston Comedy Festival’s New York Competition and was first runner up in the Comix at Foxwoods’ 2012 “Last Comix Standing” contest. He also consistently scripts one of the most popular philosophical blogs on stand-up comedy, davidfostercomedyblog.com. </p>\n<p>On stage David dissects the root causes of his anxieties and tells stories of how his adolescence staunchly contrasted with what his Jewish mother had envisioned for him. Philosophically he dissects the human stream of consciousness, criticizes our educational and medical systems, and refutes cynical perspectives, which is unique to what we hear from most stand-ups. While it’s become common for comedians to make fun of things like spiritual faith, hip hop white guys, and natural forms of medicine, David brilliantly conveys the opposite perspectives with a hilarious and unique charisma. Refreshing to listen to and an absolute pleasure to watch, his career has progressed reasonably fast.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/d_foster_copy.jpg",
    id: "5805"
}, {
    Name: "David Smithyman",
    Bio: "<p>Failing to ever fulfill his true potential as a child actor, David Smithyman moved from Australia to New York City in 2004. Since then, he has performed in numerous showcases for IFC, MTV, and Comedy Central, in addition to representing NBC, first as a finalist in 2013&#039;s Stand Up For Diversity competition in Los Angeles, and then as a touring member of Stand Up NBC&#039;s national college tour. Currently, he works helping kids write their own stand-up at Gotham Comedy club as part of the Kids ’n Comedy program.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/headshot_19.jpg",
    id: "6476"
}, {
    Name: "David Zoe Leon",
    Bio: "<p>David Leon is a Chicago native who began his comedy career in Madison, WI. David has shared the stage with many talented performers such as Emo Phillips, TJ Miller, James Adomian and Joey Diaz. David Leon&#039;s style of comedy, best described by the Onion A.V. club, &quot;plays on the yearning sentimentalist and inner-creep&quot; with a &quot;kid-on-sugar-high stage presence.&quot;With a demented persona and unpredictable topics, David Leon puts on a show that demands intensity and imagination from his audience and leaves a smile in their heart.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/davidleon.jpg",
    id: "6629"
}, {
    Name: "Derek Smith",
    Bio: "<p>Derek Smith is a stand up comic originally from Oklahoma, now living in Chicago.  He was apart of the 2013 Just For Laughs Festival in Chicago and is a cast member of The Lincoln Lodge.<br />\n	Despite being a bag of vices and complaints, he remains likable and lovable, like a smart, irritated Teddy Bear who makes poor life decisions. He’s been described as disgusting and smart. He could probably write this generation’s definitive dick joke in his sleep. He probably will, but only in between being a hundred kinds of funny, intelligent, and captivating.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/derek_smith.jpg",
    id: "6735"
}, {
    Name: "Dina Hashem",
    Bio: "<p>Dina Hashem first tried stand-up by auditioning for the 2010 New Jersey Comedy Festival at Rutgers University. After winning 1st place, she continued to pursue comedy and has since been performing regularly at clubs including Broadway Comedy Club, Caroline&#039;s, The Laughing Devil, Comic Strip Live, and The Stress Factory.<br />\nDina&#039;s memorable style contrasts a subtle delivery with witty observations, and dark musings on her cultural upbringing. She was a semi-finalist in the She-Devil Comedy Festival and Laughing Devil Comedy Festival, and a participant of Gilda&#039;s Laugh Fest and the Jersey City Comedy Festival. Her writing has also been featured on the websites of Comedy Central and Nickelodeon.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/dina-hashem-headshot.jpg",
    id: "6640"
}, {
    Name: "Doug Smith",
    Bio: "<p>Doug Smith was featured as a New Face at the prestigious Montreal Just for Laughs Comedy Festival in 2013 after only four years as a stand-up comic. Since then he has appeared at the Oddball Comedy &amp; Curiosity Festival as well as AXS TV’s Gotham Comedy Live.  A regular at NYC clubs and alternative rooms, Doug continues to hone his talent and build his fan base. With a unique upbringing as the much younger child in a family of Jehovah’s Witnesses, Doug has plenty to draw from and is quickly becoming one of the sharpest writers in NYC. He has extensive improv training from the Upright Citizens Brigade Theater and currently co-produces See You In Hell!, an award winning stand-up/variety show at The Creek and The Cave in Long Island City.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/photo_2.jpg",
    id: "6413"
}, {
    Name: "Douglas Gale",
    Bio: "<p>Douglas Gale started doing comedy in Seattle in 2003 where he quickly became one of the newest comics in the scene. In the past few years, his comedy has become more personal. From stories about the time he tried to trade places with his reflection in a mirror (high on mushrooms) to his confusion about what is and is not cheese (arugula = not cheese).</p>\n<p>In the past year, he started expanding beyond straight standup and into the world of storytelling. He has won three Moth StorySLAMs in Seattle and will be competing in a Moth GrandSLAM this February. </p>\n<p>In 2013, he was the winner of the Competitive Erotic Fan Fiction show at Bumbershoot. </p>\n<p>He is currently the producer of the monthly Moth StorySLAM in Seattle</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/1523779_616488551721812_1246745931_o.jpg",
    id: "6687"
}, {
    Name: "Eliza Skinner",
    Bio: '<p>Eliza Skinner is originally from Richmond, VA and started her performing career as an unnamed child revolutionary in a local production of Evita. She is now a stand-up comedian and regular performer at the Upright Citizens Brigade Theater in New York and LA. Most recently, Eliza was a writer and performer on Totally Biased with W Kamau Bell, produced by Chris Rock. She has performed in festivals all over the world including RiotLA, SXSW, Bridgetown, the NY Comedy Festival and the Edinburgh Fringe, and was named by Patton Oswalt as a notable &quot;up and coming&quot; comedian. She has also written for Fashion Police with Joan RIvers, Glamour, Showtime, Cracked, and many other publications and websites. Many of her original videos have become viral hits online, and RuPaul once called her “She-larious!” so....  <a href="http://www.elizaskinner.com">www.elizaskinner.com</a></p>\n',
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/elizanew2-2.jpg",
    id: "6609"
}, {
    Name: "Emily Maya Mills",
    Bio: "<p>Emily Maya Mills is an actor, writer and stand-up comic based in Los Angeles. She&#039;s been seen on Parks and Recreation, Ellen, Childrens’ Hospital, Key and Peele, Harry&#039;s Law, Crash &amp; Bernstein, Comedy Bang Bang and The Birthday Boys, as well as many of television’s most humiliating commercials.</p>\n<p>A San Francisco native, Emily attended Emerson College and has been a regular performer at the Upright Citizens Brigade Theatre in Los Angeles since 2006. In 2013, her one woman show, God Hates Figs, received glowing reviews from the LA Weekly and played to sold out audiences over a six month run. Her three-woman sketch group, Birds of Prey, won Best Sketch Group in Punchline Magazine and she has been named an “Up-and-Coming Comedienne You Should Be Laughing At” by TheFrisky.com, &quot;2013&#039;s Comics to Watch&quot; by SOmagazine.com, and a “Funny Female to Follow on Twitter” by the Huffington Post. She holds a PhD in parallel parking. </p>\n<p>Emily Maya Mills was once a spokesmodel for cherry tomatoes and has a cat-like dog who walks like a pony.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/emilymartinimills.jpg",
    id: "6659"
}, {
    Name: "Gabriel Rutledge",
    Bio: "<p>Since abandoning his successful pizza delivery career in 2000, Gabriel&#039;s talent, hard work, and lack of a fall back plan have made him into one of North America&#039;s finest touring comics.</p>\n<p>A past winner of the prestigious Seattle International Comedy Competition, Gabriel has made television appearances on Comedy Central&#039;s Live at Gotham, the nationally syndicated Comedy.TV, and Nickelodeon&#039;s Nickmom Night Out.</p>\n<p>He is also a frequent guest on the Bob and Tom radio show, heard in over 150 cities.</p>\n<p>Gabriel has performed at the HBO/TBS Comedy Festival in Las Vegas, the Laughing Skull Comedy Festival in Atlanta, and The Great American Comedy Festival held in Johnny Carson&#039;s home town of Norfolk Nebraska.</p>\n<p>He has made at least 4 people pee their pants.</p>\n<p>Gabriel&#039;s has released two albums; &quot;Sometimes Laughter Hurts&quot; and &quot;Breeder&quot; that can be heard on Sirius Satellite Radio, 24/7 Comedy Radio, and wherever you want if you buy one. Rutledge makes his home in one of the great entertainment capitals of the world; Olympia Washington.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/plaid_shirt_small.jpg",
    id: "6174"
}, {
    Name: "Greg Santos",
    Bio: "<p>Greg Santos is a Cuban with the gift of looking Jewish.  Greg is a regular host at the American Comedy Co in San Diego, The Westside Comedy Theatre in Los Angeles and has hosted and featured for many comedians including Chris Kattan (SNL), Chris Franjola (Chelsea Lately), Brody Stevens (HBO, CONAN), Michael Kosta (Comedy Central, Fox Sports), Dan St. Germain (Comedy Central), Owen Benjamin (Comedy Central, Sullivan &amp; Sons); Taylor Williamson (America&#039;s Got Talent), and many others he doesn&#039;t feel like name dropping.  Greg was also selected to perform in the 2014 RIOT LA Alternative Comedy Festival.<br />\nGreg is also part of the sketch group Tunguska Yacht Club, whose work has been featured by Funny or Die, Huffington Post Comedy, Nerdist.com, Men’s Humor, You Tube What’s Popular, What The Funny, and countless Eastern European sites he cannot understand.  Tunguska Yacht Club was a finalist in the 2012 International Songwriting Competition in the category of Comedy and they lost to the beautiful Garfunkel and Oates. Tunguska Yacht Club is currently making 12 exclusive videos for Marlon Wayans’s new company, WhatTheFunny.com and they were also cast in a pilot presentation by Marlon Wayans for TBS.<br />\nGreg also co-wrote, co-produced, and participated in a Publisher’s Clearing House Prank on his best friend, Reed Hahn, which was featured on MTV’s Prank’d Season 2, TRU TV’s Top 20 Most Shocking Pranks (2010), TRU TV’s Top 20 Funniest Big Check, No Money (2013), and TRU TV’s World’s Dumbest (2013).</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/westside_comedy_theatre.jpg",
    id: "5987"
}, {
    Name: "Hampton Yount",
    Bio: '<p>Hampton was born in Virginia, started comedy in DC, aged four years, and now lives in Los Angeles. Hampton won the DC Improv Comedy Competition in 2008 and other lesser important comedy contests in VA. He’s been a recurring presence at the Bridgetown Comedy Festival, South By Southwest, The DC Comedy Festival and the Bentzen Ball Comedy Festival, and was a semi-finalist at the Laughing Skull Festival, and was recently named one of Esquire’s best new stand up comedians of 2012. Hampton was previously a creative consultant on Rob Dyrdek&#039;s Fantasy Factory(MTV), a writer for Loiter Squad (Adult Swim) and Upload with Shaq (TruTV) and is currently a creative consultant on Ridiculousness on MTV, and wrote on Chris Hardwick’s pilot Hardwired (Comedy Central). Hampton has appeared on the G4 Network, done contributing writing for Chelsea Lately, and performed his stand up to millions of listeners on the Bob and Tom Radio Show and the Nerdist Podcast. Most recently, Hampton appeared on ComedyCentral.com for Comedy Central’s Comics To Watch at the NY Comedy Festival in 2012, and on Adam Devine’s House Party (Comedy Central) in 2013. </p>\n<p>Hampton also makes a webcomic with his brother Clay Yount: <a href="http://www.robandelliot.com">www.robandelliot.com</a>.  It has an awesome fanbase and has been a critics&#039; favorite.</p>\n',
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/hampton_yount.jpg",
    id: "6825"
}, {
    Name: "Hari Kondabolu",
    Bio: "<p>Hari Kondabolu is a Brooklyn-based, Queens-raised comic who has been described by Timeout NY as “smart, analytical and rising.” He was most recently a writer and correspondent for FX’s Totally Biased with W. Kamau Bell.</p>\n<p>He has done standup on Conan , Jimmy Kimmel Live, Live at Gotham and John Oliver’s New York Standup Show. His Comedy Central Presents half-hour television special debuted on the network in February 2011. He has also performed at such notable festivals as South by Southwest, Bumbershoot, Sasquatch and Just for Laughs in Montreal and Chicago.</p>\n<p>He has also appeared on popular podcasts like WTF with Marc Maron, You Made it Weird with Pete Holmes and Too Beautiful to Love with Luke Burbank</p>\n<p>Hari has been profiled on NPR’s Morning Editon and was one of Flavorwire’s 50 Up and Coming New York Culture Makers to Watch in 2013.</p>\n<p>In the UK, Hari has established himself with appearances on BBC 3’s Russell Howard’s Good News, Live at the Electric and Channel 4’s 8 out 10 Cats. He also performed at the Edinburgh Fringe Festival in 2011.</p>\n<p>When in New York City, he co-hosts the mostly improvised talk show The Untitled Kondabolu Brothers Project with his younger brother Ashok (“Dap” from hip hop group Das Racist) and their podcast The Untitled Kondabolu Brothers Podcast. He also wrote the cover story for Spin Magazine about Das Racist in November 2011.</p>\n<p>He was also a former video blogger for WORLD COMPASS, a joint initiative between WGBH Boston, PBS and the Corporation for Public Broadcasting.</p>\n<p>Hari was born and raised in Queens, NY. He went to Townsend Harris High School and the school’s mascot, “Hari the Hawk,” was named after him during his senior year. (He sometimes fears that his greatest achievement was accomplished at 17.) He also attended both Bowdoin College and Wesleyan University, graduating from the former institution with a B.A. in Comparative Politics in 2004. A former immigrant rights organizer in Seattle, Hari also earned a Masters in Human Rights from the London School of Economics in 2008, writing a merit- earning dissertation entitled “Mexican Returnees as Internally Displaced People: An Argument for the Protection of Economic Migrants Under the UN Guiding Principles on Internal Displacement.” This is, by far, the least funny thing he’s ever written.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/hari_kondabolu-_2011_web.jpg",
    id: "6835"
}, {
    Name: "Ian Karmel",
    Bio: "<p>Ian Karmel is a homegrown Portland comedian whose style zig-zags between the eclectic and the universal. He is currently a writer and roundtable regular on E!’s Chelsea Lately.  In 2013, Ian was invited to the prestigious Just for Laughs Festival in Montreal, where he was a breakout stand up in the New Faces category. Ian’s unique perspective helped him win the 2011 Funniest Person in Portland, 2010 Portland Amateur Comedy Competition and has given him the opportunity to perform at the Moontower Comedy Festival, Bridgetown Comedy Festival, Bumbershoot, Portland’s Helium Comedy Club, Philadelphia’s Helium Comedy Club, Minneapolis&#039; Acme Comedy Club, Austin’s Cap City Comedy Club, Seattle’s Comedy Underground and various clubs in Los Angeles. Ian’s other television credits include IFC’s Portlandia and the Travel Channel’s Best Sandwich in America, as well as a post-game analyst and commentator for the Portland Trailblazers.  His training includes The Groundlings and the Upright Citizens Brigade and he is a regular contributor for the Portland Mercury. He currently lives in Los Angeles.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/ian_karmelheadshot.jpg",
    id: "6824"
}, {
    Name: "Ivan Hernandez",
    Bio: "<p>Ivan Hernandez is a comic living in San Francisco. He likes food and some social issues and comic books. He has performed at the SF Sketchfest, Bridgetown Comedy Festival, Litquake, Supercon comic convention, International Cannabis and Hemp Expo, Sacramento Comedy Festival, SF Comedy and Burrito Festival, and plenty of other places. Boars, Gore, and Swords, the show he co-hosts with fellow comedian Red Scott, is a member of the Boing Boing podcast network. He produces Give Me Fiction, a monthly prose storytelling show in the basement of Lost Weekend Video. SF Weekly has described him as “masterfully sarcastic.”</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/1097002_10100994426128925_500000302_o.jpg",
    id: "6363"
}, {
    Name: "Jackson Banks ",
    Bio: "<p>A film major at the University of Utah,  Jackson Banks&#039; history is in comedy film making, and he has been doing stand up for a little under two years.  He enjoys visual, surreal joke telling.  He has recently participated in the Seattle International Comedy Competition, Salt Lake City&#039;s One Mic Stand, and Park City&#039;s Egyptian Theater Comedy Showcase.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/jackson-banks-200x300_0.jpg",
    id: "5777"
}, {
    Name: "Jacob Christopher",
    Bio: "<p>Half shark alligator, half man, Jacob Christopher has been seen and heard all across the Pacific NW, sharing his stories with the masses. Starting his comedy career in 2010, Jacob has become a regular working comic at Helium and Harveys, and has also been featured in many great Portland showcases such as Midnight Mass, Spicy News, Tonic, Fly Ass Jokes, and more. With his unique story telling, he shares tales of triumph and tragedy, good times and hardships, and takes the audience on an emotional roller coaster that will leave you wanting more. Please keep your arms and legs inside the ride and remain seated until he comes to a full stop. If you are breast feeding or pregnant, you may want to consult a physician prior to hearing him. You can check out his website @ Jacobchristophercomedy.com for upcoming shows and video clips, or look at his pics if you just want to bask in his ginger glory. </p>\n<p>Also, he is a big fan of karaoke.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/portland-photographer-jayesunn-xl4.jpg",
    id: "6128"
}, {
    Name: "Jade Catta-Preta",
    Bio: "<p>Jade Catta-Preta was one boney baby, born in Sao Paulo, Brazil then later raised in Virginia to ensure a future in comedy. She travels the country featuring for Bill Burr, Bobby Lee and Kevin Nealon and is a paid regular at The Comedy Store, The Improv and the Laugh Factory. She recently filmed an improvised FOX pilot directed by Dan Mazer and produced by Ron Howard as well as an eight episode arc for next season of Showtime&#039;s &quot;Californication.&quot; You can catch her along side Steve Rannazzisi in &quot;Daddy Knows Best&quot; and the upcoming season of Nuvo&#039;s &quot;Standup and Deliver.&quot; Like the 1995 David Caruso porno thriller of the same name, Jade takes herself very seriously.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/photo_9_0.jpg",
    id: "6674"
}, {
    Name: "James Ball",
    Bio: "<p>Hey guys – Matt, Andy, and Kimberly I presume? -- thanks for the consideration.</p>\n<p>I&#039;m James Ball -- nine years in, pro for the last six. Got my start in Vancouver, got paid in Edmonton, spent a year (combined) in Toronto and the UK -- and now I&#039;m in Victoria, where I work in media, pursue my standup career, and co-produce the longest running open-mic in town. (Ratfish Comedy, findable on facebook.)</p>\n<p>I&#039;m rostered with Yuk Yuk&#039;s – and I headlined their Toronto club last July. (I&#039;ve been playing their clubs as a pro since 2010.) I&#039;ve been invited to five festivals – Just For Laughs in &#039;09, Halifax in &#039;10, Manchester in &#039;10, and the Blue Bridge Comedy Festival in &#039;11, and &#039;12.</p>\n<p>TV-credits-wise, I have one: My Comedy Now! tv special that I recorded in &#039;10 for the Comedy Network (Season 14) and that continues to play on CTV across Canada from time to time.</p>\n<p>Friends in comedy: Darryl Lenox, Katie-Ellen Humphries, Graham Clark, Erica Sigurdson, Dino Archie, Dan Quinn, Pete Johansson, and Damonde Tschritter are a few.</p>\n<p>I have two passports -- Canadian &amp; UK -- and no weird stuff in my past that&#039;d get me stopped at the border.</p>\n<p>I&#039;m a friendly laid-back dude, good with people, and a connoisseur of micro-brews. (Looking forward to trying &quot;The Abyss&quot; Imperial Stout from Deschutes.) </p>\n<p>The clip I&#039;ve attached -- my JFL audition, recorded in November -- is representative of my headline act: clean, joke-dense, silly, dark, cerebral, interesting, and funny. I would do something similar for Bridgetown. </p>\n<p>I&#039;ll leave it at that. Thanks again. Hope to meet you in May. Big fan of Portland -- I spent a weekend there last summer as part of a motorcycle trip. Would love to return on comedy business. </p>\n<p>Best, </p>\n<p>- James</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/james_ball_-_headshot_.jpg",
    id: "6305"
}, {
    Name: "James Davis",
    Bio: "<p>James is a stand-up comedian, writer, and actor. James was named one of the “New Faces” at the prestigious Just For Laughs Festival in Montreal in 2012 and can recently be seen in the new hit show Real Husbands of Hollywood on BET. He is also a round table regular on Chelsea Lately.<br />\nJames is the darling of Funny Or Die, and has written, directed, and starred in massive hits for the site, with “Baracka Flacka Flames” reaching 8 million views. James is the go-to impressionist for Barack and Kobe, and has created many of his own original characters.  He is currently developing The James Davis Show for E!, which is being produced by Funny Or Die and Will Ferrell’s production company Gary Sanchez Productions. He also just shot six episodes of Russell Simmon’s All Def Digital YouTube Channel and is a regular on “Wild n Out” and Lil Duval’s ‘Ain’t That America’. Both premiered on MTV in 2013.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/jamesdavis_superserious.jpg",
    id: "6839"
}, {
    Name: "Jamie Lee",
    Bio: "<p>Named one of the Top Five Comedians Who Should Be Movie Stars by Nerve.com and one of the Top 18 Women You Should Be Following On Twitter by Huffington Post, Jamie Lee is an unstoppable force in comedy, and a currently a cast member on the hit MTV series &quot;Girl Code&quot; and writer for the TBS late night show The Pete Holmes Show.</p>\n<p>Jamie’s standup appeared recently on TBS’s “Conan” and Comedy Central’s “John Oliver’s New York Stand Up Show”. Jamie was a semi-finalist on NBC&#039;s Last Comic Standing co-hosted the first annual Critics Choice Awards for Vh1.com and appeared on E!’s “Chelsea Lately”, TBS’s “The Pete Holmes Show”, Vh1’s &quot;Undateable&quot;, TruTV&#039;s &quot;World&#039;s Dumbest&quot;, MTV’s “Money From Strangers”, Yahoo’s “Mansome,” and performed stand-up on TV Guide&#039;s all-female comedy series &quot;Stand Up in Stilettos.&quot; She’s additionally written for Rob Dyrdek&#039;s MTV series Ridiculousness.</p>\n<p>Jamie&#039;s acting experience ranges from national commercials to web series to feature film. Kid Farm a parody of TLC&#039;s &quot;19 Kids and Counting&quot; that Lee created with Front Page Films, was featured on HuffingtonPost.com, ComedyCentral.com and BestWeekEver.tv - not to mention tweeted with praise by acclaimed screen writer Diablo Cody. It is now an original series on Comedy Central&#039;s CCstudios.com. Jamie will also be starring in the upcoming web series “Love’s A Bitch” for Official Comedy.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/jamie_lee_girl_code_small.jpg",
    id: "6014"
}, {
    Name: "Janine Brito",
    Bio: "<p>JANINE BRITO is a stand up comic, and was a writer and on-air correspondent on the critically acclaimed FX series, Totally Biased with W. Kamau Bell, produced by Chris Rock. </p>\n<p>Janine started doing standup comedy in St. Louis and has performed at clubs and theaters throughout the US and Hong Kong. She is the winner of the 2009 SF Women&#039;s Comedy Competition, and recipient of Rooftop Comedy&#039;s 2010 Silver Nail Award. Praised by 7x7 Magazine as &quot;one of SF&#039;s more daring voices&quot; and one of &quot;the 7 funniest people in town,&quot; she was named the 2011 “Best Comedian with a Message” by the East Bay Express. Her recent festival appearances include Sketchfest, the Bridgetown Comedy Festival and the Glasgow International Comedy Festival.</p>\n<p>W. Kamau Bell calls her “a sarcastic, snarky smart bomb of comedy funk straight from the 80&#039;s,” and the SF Weekly says she’s “a mean lesbian,” but she’s pretty sure that they mean it in a good way.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/janinebrito_jenmaler012_small.jpg",
    id: "6696"
}, {
    Name: "Jay Larson",
    Bio: "<p>Jay Larson is a stand up comedian and writer.  BORING! No but he&#039;s really funny guys, come on, listen!  Jay&#039;s unique perspective and original voice have been Jay&#039;s calling card since doing The Prestigeos Montreal Comedy Festival in 2005.  Since then he has been a regular at Bridgetown Comedy Festival, had his own half hour special on Comedy Central, performed at SXSW, and has made 5 Late night appearances.  While most people see stand up comedians as Joke tellers, Jay sees himself as more of a storyteller.  He cemented himself as a storyteller by performing one single story on Conan in 2013.  The response was amazing and the youtube video of the set went viral.  Jay attributes his storytelling success to his extremely popular podcast, The CrabFeast.  This conversational storytelling podcast has a cult following that grows weekly.  Released every Toozdee at TheCrabFeast.com, Jay&#039;s podcast has featured some of comedy&#039;s best story tellers and comics.  He is currently in development with NBC Universal Studios and hopes to put his storytelling onto the silver screen so he never has to prove himself through a BIO again.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/524644_10200612388365104_2023088941_n.jpg",
    id: "6810"
}, {
    Name: "Jeff Oliver",
    Bio: "<p>Jeff Oliver is a filmmaker, comedian, musician and writer. He has previously appeared at the 2012 Bridgetown Comedy Festival and has made appearances on Fox News’ Red Eye with Greg Gutfeld, NPR&#039;s Tell Me More, and on numerous podcasts.</p>\n<p>Jeff is a former writer for the web series The Spicy News and a former guitarist for The Arcadians. He co-directed, wrote and starred in the comedic short film &#039;Meta Feta&#039; which appeared at the DaVinci Days Film Festival in 2010.</p>\n<p>Originally from the Pacific Northwest he currently lives in New York City where he is directing his first feature film ‘A Summer To Discover.’ He is a contributor for Savage Henry Magazine.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/2014_headshot_1-2_web.jpg",
    id: "5999"
}, {
    Name: "Jesse Elias",
    Bio: "<p>Jesse Elias is a comedian forged in the infernal flames of San Francisco. He draws creative inspiration from music and literature of the 19th century and cartoons and candy of the 1990s. Over the course of 2012 and 2013 he has performed in festivals such as Bridgetown, Outside Lands, LA Riot, and SF Sketchfest. He has written for the new season of The Eric Andre Show currently airing on Adult Swim. Jesse is also proud of his many gross victories as a Competitive Erotic Fan Fiction writer, available via podcast on nerdist.com.  Jesse learned everything he knows about being funny by studying the comedies of the ancient masters Plautus and Terrence.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/jesse-medium.jpg",
    id: "6536"
}, {
    Name: "Jim Hickox",
    Bio: "<p>As one of the founding members of the revered Denver troupe The Grawlix, Jim was pivotal in the rise of the now revered Denver comedy scene.  No matter the show, Jim always leaves an impression with his quick wit and inventive approach to stand-up; audiences have never seen anything like it. The integration of his laptop into his act gives him unprecedented access to innovate and explore comedy, both the old tropes and the avant-garde. It&#039;s as funny as it is ingenious.  Jim is a headliner at Comedy Works in Denver and works around the country. In 2012 he was a performed for a month at the Edinburgh Fringe Festival; most recently he performed at the inaugural High Plains Comedy Festival in Denver.</p>\n<p>He is unrepresented, and really needs something cool to happen soon.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/me_la_2013.jpg",
    id: "6275"
}, {
    Name: "JoAnn Schinderle",
    Bio: "<p>JoAnn Schinderle hails from the upper Midwest and despite being a Portlander now, will probably never lose her “hot dish” accent. (Hotdish ingredients include but are not limited to: ground beef, canned vegetables, canned soup, cheese, and tater tots.) For the past year,  JoAnn has been making strides in Portland’s thriving comedy scene by way of stand-up and improv. Recently performing in the All Jane No Dick comedy festival and 2014&#039;s SF Sketchfest, as a stand-up her humor is relatable, snarky, and has a storytelling style that will make you feel like she’s your best friend letting you in on a secret. As an improviser and member of the Curious Comedy House Team ensemble, she creates big characters and will “yes and” the shit out of you. JoAnn’s performed both mediums at venues in Chicago (Second City Training Center) and all around Portland (Curious Comedy Theater, Brody Theater, and Funhouse Lounge.) If you enjoy friendly banter you can follow JoAnn on twitter @joannlizabeth</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/tumblr_mypy0mh21n1s46y2co2_r1_1280.jpg",
    id: "5983"
}, {
    Name: "Joe Zimmerman",
    Bio: "<p>2013 has been a big year for New York City-based comedian Joe Zimmerman. </p>\n<p>In addition to making his Comedy Central debut on John Oliver’s New York Stand Up Show, he performed on Nickelodeon’s NickMom Night Out, appeared on the nationally syndicated Bob &amp; Tom Show, and was chosen as one of the acclaimed New Faces at Just For Laughs Montreal, where he was positively reviewed by both The Spit Take and Time Out NY.</p>\n<p>Praised for an accessible style pairing absurdism with a wide-eyed, aw-shucks demeanor, Joe has been personally selected by Ricky Gervais as a Conan contest finalist, and can be heard regularly on SiriusXM and Pandora. </p>\n<p>He is an original member of the Beards of Comedy, the most requested tour in the Southeast from 2008-2012. The Beards released two albums (2011’s Cardio Mix on Comedy Central Records); their Beards Across America MSN web series amassed more than a million views.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/joe-zimmerman-0491-7.jpg",
    id: "5992"
}, {
    Name: "Johan Miranda",
    Bio: "<p>Johan Miranda is a Peruvian American comedian that has established himself in the Bay Area comedy scene. San Francisco Magazine exemplified him as a comedian you should know you about He performs at all the major comedy clubs in Northern California, including San Francisco Punchline, Sacramento Punchline, Cobbs Comedy Club, Rooster T Feathers, &amp; San Jose Improv, and has been featured in SF Sketchfest &amp; Santa Cruz Fringe Festival. He currently produces &amp; hosts the popular bimonthly Laugh Function, Berkeley’s longest running comedy showcase. He recently recorded a mini comedy DVD taping entitled “Ready to Bomb”, which award winning Bay Area comedy blog Courting Comedy called “a capsule of undeniable promise”</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/johanmirandaheadshot_0.jpg",
    id: "5976"
}, {
    Name: "John F. O&#039;Donnell",
    Bio: "<p>According to the Comedy Central Insider, &quot;John F. O&#039;Donnell is one of the more explosive comics in New York City.  On stage, he&#039;s like a tightly capped liter of soda filled with lit fireworks.&quot;  John has been featured in the New York Times and the LA Times, as well as being one of Comedy Central&#039;s Fresh Faces of Comedy.  He has performed at a number of comedy festivals around the country and beyond, including The Bridgetown Comedy Festival, The Edinburgh Fringe Festival, The New York Comedy Festival, The San Francisco Comedy Festival, and The New Orleans Hell Yes Festival.    He&#039;s been a favorite guest on the popular podcasts Keith and The Girl, You Made It Weird w/ Pete Holmes, You Had To Be There w/ Nikki &amp; Sara, and Skeptic Tank w/ Ari Shaffir.  John is also the co-creator and host of the bi-coastal hit show, 50 First Jokes.  He has almost 3 hours of stand up material available for digital download at livefromouterspace.com.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/jfod_press_pic.jpg",
    id: "6150"
}, {
    Name: "Jon Daly",
    Bio: "<p>Jon Daly writes, performs, and is a supervising producer on THE NICK SHOW KROLL for Comedy Central which premiered in early 2013. He can currently be seen in Ben Stiller and Fox’s THE SECRET LIFE OF WALTER MITTY and is a costar of The Amazon series BETAS. He appeared in Fox’s BRIDE WARS opposite Kate Hudson and Anne Hathaway and can be seen on Adult Swim’s NTSF:SD:SUV::, the series premiere of PARKS AND RECREATION, on Spike TV’s comedy series PLAYERS, and has recurred on ABC’s HAPPY ENDINGS and HBO’s cult favorite, THE LIFE AND TIMES OF TIM. Jon also co-created and starred in his Comedy Central pilot RICH DICKS along with Nick Kroll.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/jon_daly_photo.jpg",
    id: "6808"
}, {
    Name: "Jordan Casner",
    Bio: "<p>Originally from McMinnville, Oregon, Jordan Casner has been living and performing comedy in Portland for the last few years. His brand of comedy really isn&#039;t branded yet. But that&#039;s what people are into now, right? One thing that is certain is that his medium for performance is always changing. You might hear a song, you might hear some jokes, you might see him get choked to death in a horse mask. Jordan has performed at the Bridgetown Comedy Festival and has been a guest on shows like Funny Over Everything and The Spicy News.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/tigers.jpg",
    id: "6049"
}, {
    Name: "Joselyn Hughes",
    Bio: "<p>Joselyn Hughes is a Los Angeles based writer and performer. She was recently named one of “18 Funny Women You Should Be Following on Twitter” by the Huffington Post, nominated for the National Lampoon Twitter Awards, featured as one of the “30 Under 30: Comedians You Should Watch” by Splashlife and Funny or Die and included in Jane Dough&#039;s &quot;30 under 35 Comedians to Watch.&quot;<br />\nShe has performed at festivals, clubs, and colleges all over the country. She was a nominee for the 2008  ECNY “Emerging Comic” award and has been featured in the New York Post, Comedy Smack, MySpace and Atom.com.<br />\nJoselyn has appeared on Chelsea Lately, Tosh.0, MTV&#039;s Failosophy, VH1 and various national commercials.<br />\nShe also has written for Comedy Central,  MTV, VH1, Hello Giggles, and the Huffington Post.<br />\nHer web series DIY, Dammit! can be seen on the Nerdist Channel.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/387.jpeg",
    id: "6205"
}, {
    Name: "Josh Gondelman",
    Bio: "<p>Josh Gondelman is a writer and comedian who incubated in Boston before moving to New York City. With years of experience as a preschool teacher and a pretty good guy, Josh charms audiences using his good-natured storytelling and cracks them up with his sharp, pointy wit. He takes topics from surprise parties to playing the trombone and makes them all equally hilarious.</p>\n<p>In 2010, Josh traveled to Atlanta for the inaugural Laughing Skull Comedy Festival, where he turned heads and captured first prize! Since then he has become an in-demand performer on a national scale. He has performed at the Rooftop Comedy Festival in Aspen, CO, and headlined at the Laugh Your Asheville Off Festival in Asheville, NC. More recently he has appeared in the Eugene Mirman Comedy Festival, the Bridgetown Comedy Festival, and SF Sketchfest.</p>\n<p>Outside of standup, Josh&#039;s writing has appeared in prestigious publications such as McSweeney&#039;s Internet Tendency, New York Magazine&#039;s The Cut blog, and Thought Catalog. He is the co-creator and co-author of the popular Modern Seinfeld Twitter account, and his own Twitter feed was named one of 2012&#039;s best by Paste Magazine. The Ellen Degeneres Show took notice of Josh&#039;s joke writing skill and featured him as part of their &quot;Tweetly Roundup.&quot;</p>\n<p>Josh&#039;s work has appeared on television other times as well, much to the delight of his grandmothers. They were thrilled to see him on television on G4&#039;s “Attack of the Show” and MavTV’s “Rooftop on the Road.” Josh&#039;s debut standup comedy CD, “Everything’s The Best” was released in November of 2011 by Rooftop Comedy Productions.</p>\n<p>Josh is pleased to meet you!</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/5902-resize-5902-479-271.jpeg",
    id: "5994"
}, {
    Name: "Joshua Murphy",
    Bio: "<p>Joshua Murphy is standup comedian and sporadic sketch writer based out of Chicago, Illinois. Though a young comic on the scene, he has quickly moved up in the comedy world with his personal storytelling and socio-political comedy. He was the winner of the 2010 Bloomington Comedy Festival and a performer at the inaugural Limestone Comedy Festival. He was also a writer for the very popular “Fortnightly Show.” And, based on the writing of this bio, it is unnerving how comfortable he is writing in the third person.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/joshuamurphy-web-010.jpg",
    id: "5962"
}, {
    Name: "Karl Hess",
    Bio: "<p>Karl is a stand-up comedian and actor that was chosen as a New Faces at the Just For Laughs Montreal Festival in 2010 and as a recipient of the Rooftop Comedy&#039;s 2011 Silver Nail Award, which awards a select group of emerging comedians each year. Karl has also performed for the last three years at the Bridgetown Comedy Festival in Portland and was a finalist at the Laughing Skull Comedy Festival in 2010. He is currently a writer on MTV&#039;s &quot;Ridiculousness&quot;.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/karl_hess_hs_2.jpg",
    id: "6646"
}, {
    Name: "Katherine Williams",
    Bio: "<p>Katherine Williams is a NYC – based stand-up comic, actor and playwright. She graduated from James Madison University in her native Virginia and attended the Atlantic conservatory (founded by David Mamet and William H. Macy) in New York. </p>\n<p>As a stand-up comic, Katherine is a chronic oversharer, from her awkward attempts at intimacy to quieting the paranoid voices in her head. The youngest child from a devout Irish Catholic family, she experiences soul-crushing guilt and constant shame on a near-daily basis.</p>\n<p>Six of her plays have been produced in Manhattan including My Dead Mother is Funnier Than You (Plaidbird Productions) and The Shih Tzu Doesn’t Like Lesbians (On the Leesh Productions).  Her comedic solo show, CALL ME, was accepted into three New York theater festivals in 2010 - 2011, including the Midtown International Theatre Festival. Katherine has performed in the New York Underground Comedy Festival (2009, 2010) and the New York International Fringe Festival (2009, in Meryl Cohn’s sold-out hit, And Sophie Comes Too). Her work has been reviewed by Show Business Weekly and nytheatre.com. She was recently interviewed for Morgan Spurlock’s latest venture, Failure Club, an online series for Yahoo.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/headshot_katherine_williams2_0.jpg",
    id: "6163"
}, {
    Name: "Katie Nguyen",
    Bio: "<p>Katie Nguyen is a Portland-based comedian and vending machine whisperer. She has performed at Curious Comedy Theater, taken part in Dis/orient/ed Comedy, and was a semifinalist in Helium Comedy Club&#039;s Portland&#039;s Funniest Person Contest. Katie’s style can be described as “comedy” and “style.” As an ensemble member at the Brody Theater, Katie performs in a variety of improv, stand-up, and sketch shows, and was once hired to play an Eastern European rhythmic gymnast for a barn full of teachers. Katie also writes sketch, performs, and wears vests with the group Vestivus. From ComedySportz to non-profit fundraisers to Chinese restaurants, Katie’s delighted folks and shamelessly laughed at her own jokes. Watch out for her— she&#039;s very short and easy to lose in crowds.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/tumblr_mxosdqaejf1s46y2co1_1280.jpg",
    id: "6686"
}, {
    Name: "Kellen Erskine",
    Bio: "<p>Kellen Erskine was a finalist of the San Francisco International Comedy Competition. Recently, he was featured in a Reader&#039;s Digest article entitled &quot;Comics You Haven&#039;t Heard of . . . Yet.&quot; Kellen also appeared on season 7 of NBC&#039;s America&#039;s Got Talent, and now he opens regularly for Frank Caliendo.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/headshot_3_0.jpg",
    id: "6766"
}, {
    Name: "Kevin Avery",
    Bio: "<p>KEVIN AVERY is a stand up comedian and a writer and performer on VH1&#039;s Best Week Ever. He has also had the distinction of being the head writer on the critically acclaimed and criminally short FX original series, Totally Biased with W. Kamau Bell. Originally from San Francisco, CA, Kevin&#039;s high-energy brand of stand up has been called “as rare and magical as a sparkle-unicorn doing West Side Story choreography under a liquid light show,” by the SF Weekly.</p>\n<p>Kevin has been praised by the Oakland Tribune for his “sharp-witted” style and “impressive physical comedy.” Of his animated style of stand up and storytelling, the San Francisco Chronicle raves, “Avery is Amazing!” His debut comedy CD, Hardcore, recorded live at the Punchline in San Francisco, is available on iTunes and RoofTopComedy.com</p>\n<p>Kevin is the writer, star and executive producer of the award-winning short film Thugs, The Musical, about a frustrated, sightly delusional, and extremely non-urban black actor who writes, directs &amp; stars in a disastrous musical to prove to Hollywood and the world that he can &quot;act black.&quot; The Dallas Weekly calls it an “uproariously funny mockumentary,” and the Texas Black Film Festival director declared it to be “hands down, THE funniest and wittiest film at the TBFF 2012 Fest! Welcome to a new generation of black social parody.” Thugs, The Musical is the winner of the Audience Award for Best Film at 2012 LA Comedy Shorts Film Festival and the 2012 MIX International Film Festival, Best Short Film at the 2012 Montgomery Film Festival, Best Comedy Film at the 2012 San Francisco Black Film Festival, and the winner of both Best Short and Best in Show at the 2012 Tupelo Film Festival.</p>\n<p>Kevin also wrote, produced and stars in the popular web videos Black Guys on a Beautiful Day and Not in a Gay Way. He is the creator of the web series, Kevin Avery’s Obsessed, the pilot of which was featured on MSN’s The Bubble. Visit him online at KevinAveryComedy.com or on Twitter @kevinavery</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/kevin_159.2_small.jpg",
    id: "6688"
}, {
    Name: "Kim Clark",
    Bio: "<p>Originally from Syracuse, New York, Kimberly was born the daughter of a preacher father and a prim and proper mother who stressed the importance of writing thank you notes. She was a reserved and well-behaved child in public, but at home was the official family jester. In college, Kimberly realized she had the ability to make people laugh without deliberately being funny. Peers and professors all became victims of this under-cover clown’s unexpected bites of tasteful humor-laced wit that was always well timed. After graduating from Arizona State University, Kimberly headed further West to Los Angeles, where she worked in TV production, most notably the last two seasons of the Drew Carey Show. She&#039;s performed stand up at clubs, on Lopez Tonight in April of 2011 and at The Maine Comedy Festival and The Boston Comedy Festival.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/kim_again_0.jpg",
    id: "6795"
}, {
    Name: "Kiran Deol",
    Bio: "<p>Kiran Deol is an LA based standup and performer born in Britain and raised in Boca Raton, Florida. She performs in venues across LA including Meltdown, The Improv, and anywhere that will have her really.  Credits include MODERN FAMILY, GREYS ANATOMY, WEEDS, PARENTHOOD, and NEWSROOM. Film credits include a lead in the independent feature film FARAH GOES BANG which debuted at the Tribeca Film Festival in April 2013 and won the first ever Nora Ephron Award.  Before standup, Kiran began her career as a filmmaker.  Her first short film, WOMAN REBEL, was a documentary about women rebel soldiers in Nepal that was broadcast by HBO, shortlisted for an Oscar and nominated for an Emmy.  She’s on twitter @deolkiran.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/kiran_pic.jpg",
    id: "6162"
}, {
    Name: "Kortney Shane Williams",
    Bio: "<p>Kortney Shane Williams is an international touring comedian that currently considers Seattle Washington to be his home. He has participated in Comedy Central’s, South Beach Comedy Festival, and been featured on CBS.com. He was also a 2012 Finalist in NBC’s Stand-Up for Diversity Showcase, and has opened for Dave Chappelle.<br />\nKortney’s unique, personable style of joke telling makes him a must see show. His most recent full length comedy album entitled, “I’m Right about This&quot; is available on iTunes.<br />\nHe is also a writer and has been featured on Yahoo and FoxSports.com.  He is the founder and editor-in-chief of Comedic Prose, a comedy blog site that is regularly highlighted on Yardbarker. Currently he is working on a children’s comedy book that is slated to be finished in the winter of 2014.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/kortneyshanewilliams_-_headshot1.jpg",
    id: "6153"
}, {
    Name: "Kristin Manna",
    Bio: "<p>Kristin is one of six kids. Her dad likes to get married. She drinks orange juice with everything. She is a horrible speller. Kristin has performed at Eastville Comedy Club, Gotham Comedy Club, Greenwich Village Comedy Club, UCBEast and various clubs in NYC.  Kristin has been featured in the She devil Woman&#039;s Comedy Festival. She also produces and writes her web series &quot; Awkwardly Charming&quot;.Most recently, you may have seen Kristin eating pancakes in an IHOP commercial.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/img_0325.jpg",
    id: "6337"
}, {
    Name: "Kristine Levine ",
    Bio: "<p>Kristine Levine is a dirty filthy porn clerk who you already fucking know. </p>\n<p>Blah Blah Blah Doug Stanhope fart noise!</p>\n<p>She will submit a real bio once she knows her fate.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/600475_10200837691937142_519375149_n.jpg",
    id: "6723"
}, {
    Name: "Kyle Mizono ",
    Bio: "<p>Originally from San Francisco, Kyle Mizono is a comedian and one of the last international Beanie Baby collectors. Along with being a regular performer in San Francisco and Los Angeles, her festival performances include SXSW, Edinburgh Fringe and Portland’s All Jane No Dick festival. Currently, Kyle is the Junior Producer of The Super Serious Show. Her comedy was once described as a “breath of fresh air” but she prefers to be described as a “tall glass of piping hot water.”</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/kyle_mizono_0.jpg",
    id: "5755"
}, {
    Name: "Lance Paullin",
    Bio: "<p>Lance Paullin is a loveable white guy with pretty, black lady hair living in the slums of Los Angeles where he tells PRETTY DECENT jokes and acts for television/cinema films. He&#039;s never been arrested; therefore, has have no prior arrests. He&#039;s a good guy. He wrote this specifically for you.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/bridgetown.jpg",
    id: "5774"
}, {
    Name: "Leo Flowers",
    Bio: "<p>A comedic powerhouse and masterful storyteller, Leo has traveled the world delivering his stand-up in clubs and theaters. Originally from Chicago, he began his comedy career in Los Angeles quickly working his way into major clubs.  His delivery has been described as “smooth and deliberate,” his comedy, “hilarious and provocative.” Putting his M.A. in Counseling to work, Leo puts an insightful spin on topical issues while revealing personal anecdotes.</p>\n<p>Captivating audiences of all demographics, Leo Flowers has performed in Japan for the U.S. troops, at the Montreal Comedy Festival and has made numerous television appearances: NBC’s “Bones”, “Comics Unleashed w/Byron Allen and MTV’s “Sports Blender.” He was also a Finalist in NBC’s Stand-up competition and the Laughing Skull Comedy Competition; 1st runner-up in the San Francisco Comedy Competition; toured on the “Shaved and Depraved Comedy Tour” and can be heard on the Laughing Skull Comedy album available on itunes. Leo has also been featured numerous times on the “Bob and Tom Radio Show&quot; and is currently the host of &quot;Staan Dup&quot; for the Starz network.  </p>\n<p>In 2014, he&#039;ll be recording his first cd entitled, &quot;Lazily Ambitious!&quot;</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/0061retouchedwebonly.jpg",
    id: "5813"
}, {
    Name: "Levi MacDougall",
    Bio: "<p>Levi MacDougall is a Canadian comedian, writer, and filmmaker currently based in LA where he wrote for Comedy Central’s Important Things with Demetri Martin. The New York Times Magazine named him one of the Best Alternative Comics (alongside Andy Kindler and Maria Bamford) and he’s been called “one of Canada’s finest young comics” by Time Out New York.  His hour-long Comedy Now stand-up special won two Canadian Comedy Awards and a Gemini Award (Canada’s Emmy) nomination.  His sketch group The Distractions, also recorded an original pilot for The Comedy Network.  He’s been a regular cast member on Hotbox, popcultured, and The Jon Dore Television Show. He’s also opened for legendary comedian Mort Sahl at Pop Montreal, The Kids in the Hall at YYComedy Fest, and appeared on Andy Kindler’s Alternative Show at Just For Laughs, The Boston Comedy Festival, Comedy Death-Ray, Meltdown Comedy with Jonah &amp; Kumail, The Super Serious Show, Hot Tub with Kurt &amp; Kristen and a bunch of others that were also very fun.  His short film “SWHD” (starring Charlyne Yi) premiered at the 2012 Worldwide Short Film Festival, and he most recently opened for Demetri Martin on a world tour that took them through the UK, Ireland, and North America.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/levi-fence-sm-1.jpg",
    id: "6776"
}, {
    Name: "Lisa Best",
    Bio: "<p>Lisa Best is one of the fresh faces to come out of the strong south Florida comedy scene.</p>\n<p>At the age of 15, Lisa pooped her pants and her classmate Billy Hidges called her a fartball. Since that pivotal moment of clarity and poo, Lisa began her training to turn embarrassing incidents into hilarity. No longer a novice, she skillfully sucks in her audiences with captivating vulnerability and story-telling flare. Now without pooping herself. </p>\n<p>Now 23 years old, Lisa Best currently resides in Los Angeles. She can be seen in Comedy Central&#039;s Dead Kevin sketch, &quot;Hot Girl Fail,&quot; starring in the film &quot;Something Funny,&quot; and also as a guest star in SyFy&#039;s hit Fangasm. She is also the creator and writer of the mockumentary-style webseries, &quot;The Apartment.&quot;</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/headshot.png",
    id: "5906"
}, {
    Name: "MARK FORWARD",
    Bio: "<p>MARK FORWARD</p>\n<p>From the start comedian Mark Forward was a breakout talent. He was a finalist for the Phil Hartman Award for Best Up &amp; Coming Stand-up and Yuk Yuk’s Funniest New Comic in the year 2000. He kept on winning. He won the Canadian Comedy Award for Best Stand-up Newcomer in 2005 and the Homegrown Comic Competition at his first appearance at the prestigious Just For Laughs Festival in Montreal in 2006. In 2008 he won his second Canadian Comedy Award for Best Writing on a Series (The Jon Dore Television Show) and in 2012, he won his third Canadian Comedy Award, this time for Best Taped Live Performance (The Late Late Show with Craig Ferguson). This year he received two Canadian Comedy Award-nominations for Best Male Stand-up (his third nomination in this category) and Best Taped Live Performance and was nominated for NOW Magazine’s Best of Toronto Award for Best Male Stand-up; winners will be announced Fall 2013.</p>\n<p>Forward is currently shooting his third season of Mr. D; he is a staff writer and plays the recurring character Mr. Leung on the hit CBC series. He wrapped production on the feature film No Stranger Than Love where he plays a principal role opposite Alison Brie, Justin Chatwin and Colin Hanks and is was featured on John Oliver’s New York Stand-Up Show (Comedy Central) and Just For Laughs: All Access (The Comedy Network) for which he received a Canadian Comedy Award-nomination.</p>\n<p>For two seasons, Forward was on the writing staff of The Jon Dore Television Show (The Comedy Network/IFC) and played a variety of characters on the show. </p>\n<p>Forward performs at festivals and headlines at clubs across the country including multiple appearances at the Just For Laughs Festival, the Ha!ifax ComedyFest and the Ottawa Blues Festival. </p>\n<p>He has appeared on The Late Late Show with Craig Ferguson (CBS), John Oliver New York Stand-Up show (Comedy Central) and starred in his own stand-up special Comedy Now! (CTV, The Comedy Network). He has made guest appearances on a number of television shows including Just for Laughs (CBC) for which he received a Canadian Comedy Award-nomination, Living in Your Car (TMN), Doc (PAX), The Newsroom (CBC) and Degrassi: The Next Generation (CTV). Selected film credits include The Rocker with Rainn Wilson, Josh Gad and Christina Applegate, Puck Hogs and Breakfast with Scott with Tom Cavanagh.</p>\n<p>Awards + Accolades<br />\n2013 Canadian Comedy Award-Nominee- Best Male Stand-up<br />\n2013 Canadian Comedy Award-Nominee-Best Taped Live Performance-Just for Laughs<br />\n2012 Canadian Comedy Award-Nominee-Best Male Stand-up<br />\n2012 Canadian Comedy Award Best Taped Live Performance -The Late Late Show<br />\n2011 NOMINATION: Canadian Comedy Award-nominee for Best Male Stand-up<br />\n2010 NOMINATION: Canadian Comedy Award-nominee for Best Taped Live Performance-Just For Laughs<br />\n2008: Canadian Comedy Award Best Writing Series-The Jon Dore Television Show<br />\n2006 WIN: Just For Laughs Homegrown Comic Competition<br />\n2005 WIN: Canadian Comedy Award for Best Stand-up Newcomer</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/rsz_2mark_forward_headshot.jpg",
    id: "6614"
}, {
    Name: "Mark Normand",
    Bio: "<p>So far in 2013, Mark has appeared on TBS’s CONAN, Comedy Central’s INSIDE AMY SCHUMER, MTV Other’s INSIDE JOKE, TruTV’s WORLD’S DUMBEST, was named the Village Voice’s best comedian of 2013, won Carolines March Madness competition, beating out 63 other comedians, and taped a stand-up set at the Just For Laughs festival in Montreal as one of the festival’s New Faces. In 2012, Mark appeared on “John Oliver’s New York Standup Show” on Comedy Central, and taped the pilot of “Best Week Ever” for Vh1, and previously appeared on the most recent season of “Last Comic Standing” for NBC. Mark is also an accomplished writer, with recent shorts appearing on sites such as MSN and The Huffington Post.</p>\n<p>Mark was born and raised in New Orleans, LA to two surprisingly normal parents. As a kid he spent most of his time shooting short films and wetting the bed. Mark started doing comedy right after college and quickly moved to New York. Mark now does comedy clubs and colleges across the country and has been involved in many festivals including Portland, Seattle, DC, Boston, and was featured at the Montreal Comedy Festival.</p>\n<p>In NYC Mark now runs two comedy shows, one of which is recorded for a popular podcast called &#039;We&#039;re all Friends Here&#039; on Breakthruradio.com; the other “Hot Soup” runs at Irish Exit on the east side. Mark was named one of Comedy Central’s Comics To Watch for the 2011 New York Comedy Festival. Mark was also named to Esquire’s “Best New Comedians 2012”, Splitsider’s “Top 10 Up and Coming Comedians on Each Coast”, and Time Out New York’s “21 New York Comedy Scene Linchpins” and Paste Magazine’s #1 “Most Underrated Stand Up Comedian of 2013”.</p>\n<p>Mark still lives in New York City.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/mark-normand4074-2.jpg",
    id: "6822"
}, {
    Name: "Martin Morrow",
    Bio: "<p>Martin Morrow is originally from Birmingham, AL where he started doing stand-up, improv, and belonged to an award winning sketch/stand-up hybrid &quot;Tubbi and Martin&quot;. Martin has performed in clubs, colleges, and festivals all over the country including Atlanta, Austin, Cleveland, Las Vegas, Los Angeles, New Orleans, and New York and has worked with some of the top names in comedy.<br />\nCurrently residing in Chicago, IL, Martin has performed in several shows with Second City as a part of their Outreach &amp; Diversity ensemble in addition to being a Second City PUMA scholarship recipient, and has put on several one man shows at The Playground Theater and MPaact Theater, and was a season 13 cast member of the longest running independent comedy showcase the Lincoln Lodge. His work has been featured on the Huffington Post, was a finalist in the seventh season of the Impress These Apes comedy competition, and performed in the 2013 TBS Just for Laughs Festival but Martin is perhaps best known from his work in the 1953 Walt Disney classic Peter Pan as Peter Pan&#039;s shadow.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/mmmhs.jpg",
    id: "6690"
}, {
    Name: "Mary Van Note",
    Bio: '<p>Mary Van Note is a stand-up comedienne of the weird variety.  She is the creator and star of the award winning Independent Film Channel web series The Mary Van Note Show: Gavin Really Wants Me.  She is a SF Weekly Masterminds grant recipient, a seven-time SF Sketchfest performer, and an Andy Kaufman Award Semi-Finalist. The San Francisco Bay Guardian called her a “Zine-Queen Comedian” as she regularly makes zines, crafts and mini-comics.  Her specialties are stick-figures and cross-stitch.  She also posts regularly on her personal style and comics blog at <a href="http://maryvannote.com/blog/">http://maryvannote.com/blog/</a></p>\n',
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/469317_10150585290237945_1579035027_o.jpg",
    id: "6762"
}, {
    Name: "Matt Ingebretson",
    Bio: "<p>Matt Ingebretson is a writer and comedian. He performs all over LA and was featured on the standup compilation album, Holy Fuck. He has written for the Soup, the Onion, Funny or Die, and MTV. Also, he&#039;s worried his bio is too short so he tacked on this sentence to make it seem more substantial.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/matt_ingebretson_promo.jpg",
    id: "5894"
}, {
    Name: "Matt Kirshen",
    Bio: "<p>London born Matt Kirshen&#039;s precision wit has earned him an impressive reputation on the international comedy circuit. Most recently his appearances on Late Night with Jimmy Fallon, The Late Late Show with Craig Ferguson, Paul Provenza’s Green Room, and as a finalist on NBC&#039;s Last Comic Standing has earned him a whole new host of fans in the United States and a surprising number of other countries worldwide. </p>\n<p>He has also recorded a half-hour special for the World Stands Up, Comedy Central, and has acclaimed festival appearances at Montreal, Edinburgh, Kilkenny, Glastonbury, Reading, Leeds, Bermuda, and Amsterdam. </p>\n<p>His debut CD, &quot;I Guess We&#039;ll Never Know&quot; was named in Punchline Magazine&#039;s top 10 albums of 2009 and his hit appearance at the 2008 Just For Laughs festival in Montreal resulted in no fewer than 4 of his gags appearing in the Montreal Gazette&#039;s round up of their best jokes of the fest. </p>\n<p>Matt has appeared in and written for numerous television shows in the UK, including a charity gala featuring Jimmy Fallon, which resulted in Jimmy himself requesting Matt to open for him in a college tour to promote his new Late Night hosting slot. </p>\n<p>His youthful looks disguise a veteran comic with almost a decade of experience, and a wealth of smart, funny and relatable material, making him a firm favorite with college audiences. While it&#039;s his prime-time NBC appearances that most American comedy fans will recognize him from, they are often surprised at the breadth and scope of his material, described by one reviewer as &quot;intelligent, but with the emphasis firmly on the funny&quot;</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/kirshen_matt-1429.jpg",
    id: "6365"
}, {
    Name: "Matteo Lane",
    Bio: "<p>Matteo Lane is a New York-based comedian, originally from Chicago.  Before starting stand up, Matteo lived in Italy as an oil painter and Opera singer.  After realizing that he can’t become Maria Callas, Matteo began telling jokes to strangers in dark rooms.  Matteo has performed in the TBS Just for Laughs Festival, New York Comedy Festival,  has been heard on SiriusXM and “Keith and the Girl,” and performs regularly at Caroline&#039;s on Broadway.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/1391467_656707985592_454664785_n.jpg",
    id: "5895"
}, {
    Name: "Megan Koester",
    Bio: '<p>Megan Koester is a writer and comedian (obviously) who resides in Los Angeles (somewhat less obviously). A columnist for VICE, she co-produces Entitlement, a monthly comedy show with other VICE scribes which has had the pleasure to host such notables as Neil Hamburger, Marc Maron, Kyle Kinane, Maria Bamford, Kurt Braunohler and Andy Kindler (who she collaborated with on her &quot;How Not to Be a Stand-Up Comedian&quot; article for VICE). She&#039;s performed at SF Sketchfest, the Hollywood Improv, the SF Punchline, Tomorrow!, The Grawlix, Chicago Underground Comedy, and countless other shows across this great land we call America. She has her very own track on the Holy F**k Live Comedy album, which you can listen to on Spotify if you&#039;re so inclined. She&#039;ll GLADLY do any podcast she&#039;s asked to, up to and including Terrified, Lady to Lady and The Fogelnest Files. She USED to be a staple of those Huffington Post &quot;Women You Should Follow on Twitter&quot; lists until she started making a big stink about them being patronizing; she&#039;s also one third of the all-female (sorry) sketch group Blessed. A Witstream contributor, she&#039;s been featured on Splitsider and is finding it very hard to continue writing this bio in the third person. Most importantly, she has the distinction of being the first person to eat a 6&#039;&#039; flatbread Veggie Delight Subway sandwich on stage, a fact she&#039;ll take to her cold, lonely grave. You can follow her on Twitter at <a href="http://www.twitter.com/bornferal">http://www.twitter.com/bornferal</a>.</p>\n',
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/koester-146-8.jpg",
    id: "6402"
}, {
    Name: "Melissa Villasenor",
    Bio: "<p>From Los Angeles, Stand-up comedian and voice impressionist best known from Season 6 of America&#039;s Got Talent. I have also done voices for Adventure Time and Family Guy. As well as a musician, my four song EP &quot;Leap&quot; is out on iTunes. Last year I had my one person show &quot;Melissa!&quot; for a two month run at Steve Allen Theater in Hollywood. It was directed and produced by comedian Ron Lynch.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/384251_513533271999012_1690821256_n.jpg",
    id: "5998"
}, {
    Name: "Mike Lebovitz",
    Bio: "<p>Mike entered comedy at the tender age of six with clowning classes at the local JCC. He’s been delighting and confounding audiences big and small with his accessibly off-beat brand of humor ever since. A father as well as a fat slob, Mike draws from a broad range of experiences in constructing his act, using outlandish viewpoints and subversive turns of phrase to highlight the inherent absurdity of being. He doesn’t point out life’s quirks; he rolls around and farts on them! A current member of Comedians You Should Know, Chicago’s premiere stand-up comedy collective, Mike is also curator and co-creator of Senorita Weiner&#039;s Top Secret Humor Experiment and Ice Cream Social Club, which is Chicago&#039;s longest-running clandestine comedy show in addition to being the original underground, members-only ice cream social. He is also starting to &quot;make it&quot; on TV where, if you look really closely, when the moon is just right, you may be able to catch a glimpse of tiny Lebo selling little bits of his integrity in order to hawk various products. A &quot;New Face&quot; at the 2013 Montreal Just For Laughs Comedy Festival, Mike has also made funny faces at the 2012 TBS Just For Laughs Festival (Chicago), the 2013 Montreux Comedy Festival (Switzerland) and plans to weird people out at the upcoming 2013 Gilda&#039;s Laughfest in Grand Rapids as well! Fun!</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/lebo_mirror_orig_copy.jpg",
    id: "5739"
}, {
    Name: "Molly Fite ",
    Bio: "<p>Molly Fite is a native of Vancouver, Washington, and has a B.A. in Drama from Bennington College and an M.F.A. in Acting from University of California San Diego. La Jolla Playhouse credits include: The Physicists, Catching Flight, The Adding Machine, Killer Joe, The Skin of Our Teeth, Heart of a Dog,The Labyrinth of Desire, Freedom, New York, and Moliere: A Cabal of Hypocrites. South Coast Repertory: Pride and Prejudice. She has performed at LaMama, H.E.R.E., and The Ensemble Studio Theatre in New York City. She performs stand-up, sketch, and improv comedy all over Portland and Los Angeles and has trained at the Upright Citizens Brigade Theatre, I.O. West, The Groundlings, and Second City. She performs monthly with her sketch team Size Queen at I.O. West, and hosts No Pressure: A Storytelling Show also at I.O West. She recently performed at the all women&#039;s comedy festival All Jane and No Dick last October. Her video parody &quot;Not Another Sundance Movie&quot;  has been featured on the Hufffington Post, Usatoday.com,  The New York Post, geektyrant,  and slashfilm.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/fite_amalia-img_3444-09-02-09_15_29_42.jpg",
    id: "6745"
}, {
    Name: "Monica Nevi",
    Bio: "<p>Monica Nevi is a native of the Seattle, Washington and the product of a wonderfully humorous family and diverse background. While earning her degree at Seattle University and losing her collegiate basketball player career to injuries, Monica decided to move forward with another untraditional path and pursue her strong interest in stand-up comedy. After starting and performing for the duration of her time in college and beyond she has performed all over the west coast, in the 2012 Bridgetown Comedy Festival and the 2013 Seattle International Comedy Competition. Monica is a regular at the Tacoma Comedy Club and a drunk woman once told her she was the &quot;funniest skinny white girl&quot; she had ever seen.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/monicanevi-1084-2_0x3_0-16a_0.jpg",
    id: "5806"
}, {
    Name: "Morgan Murphy",
    Bio: "<p>Morgan Murphy was born in Portland, OR, but she moved around frequently before settling down in HOLLYWOOD-adjacent. At 18, Morgan started doing stand-up at coffee houses, youth hostels, and laundry mats. She landed a writing job on Comedy Central&#039;s &quot;Crank Yankers“, which led her to become a writer on &quot;Jimmy Kimmel Live,&quot; where she has performed twice as a stand-up. She soon came to be called a &quot;hot, young, up-and-comer&quot; because she was not old and was not doing poorly. Variety named Morgan a Top 10 Comic To Watch in 2010. In September of 2011, Rolling Stone Magazine included her in their “New Wave of Comedy”.<br />\nShe moved to New York in 2009 to become a writer on “Late Night with Jimmy Fallon” where she spent two years. In 2011, she moved back to Los Angeles, where she’s currently a writer on the hit CBS sitcom “2 Broke Girls”.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/morgan_murphy_2_hq.jpg",
    id: "6845"
}, {
    Name: "Myq Kaplan",
    Bio: "<p>Myq Kaplan is a comedian named Mike Kaplan.<br />\nHe has been seen on the Tonight Show with Conan O&#039;Brien, the Late Show with David Letterman, and in his own half-hour Comedy Central Presents special. He has been heard on his albums &quot;Meat Robot&quot; and &quot;Vegan Mind Meld,&quot; his podcast, &quot;Hang Out With Me&quot; on the Keith and The Girl network, and also thousands of other podcasts and things that aren&#039;t podcasts. In addition to being seen and heard, he has been smelled and tasted and touched. This May, his one-hour special, &quot;Small, Dork, and Handsome,&quot; will debut on Netflix, and all kinds of other things will probably happen in the future, but bios are mainly about the past. Check out myqkaplan.com for more information, or just be the autonomous human you are and do what you like. Thanks!</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/myq_kaplan_headshot_web2.jpg",
    id: "6818"
}, {
    Name: "Nariko Ott",
    Bio: "<p>Phoenix escapee, Nariko Ott is the most tenacious thing to crawl out of the desert since that biker dude with the baby shoes from Raising Arizona.  Although not nearly as intimidating.<br />\nSince moving to Oregon in 2011, Nariko has been named Finalist in both the 2013 “Portland’s Funniest Person” contest and 2012 “Willamette Valley’s Funniest Person” contest.  Always working, Nariko has established himself in the comedy community by regularly hosting at Harvey’s Comedy Club as well as performing at Helium Comedy Club for their “Portland All-Stars” showcases.  He’s written for sketch comedy troupes “Bully Mammoth” and “Dr. Proof’s Whiz Bang Science Super Hour (More Than an Hour).”  Currently he travels as a feature comedian all along the west coast and is the Co-Creator/Producer of “Lex Hilaris” a Comedy &amp; Metal Showcase at the White Owl Social Club in his new hometown of Portland, Oregon.<br />\nNariko Ott was named in a “Who’s Who” of comedy article in the Portland Mercury (“Comedy Is OK”, August 28th, 2013) saying it best with, “Nariko Ott has decided that comedy can be metal.”<br />\nA decision he still stands by.  He has very long hair.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/headshot1_2.jpg",
    id: "6542"
}, {
    Name: "Natasha Muse",
    Bio: "<p>Natasha Muse is funny. She began performing in 2001 as “Ginger” at AsiaSF. Her friends claimed she was much too shy to be a good performer, and the fact that they were right didn’t stop her from trying it anyway. But, eventually, she sorta proved them all wrong.</p>\n<p>In 2008, Natasha made the leap from lip-synching to stand-up comedy, and began to create a buzz in<br />\nthe San Francisco comedy scene. Her cerebral wit, whimsical wordplay, and unique perspective on life<br />\nhave earned her the adoration of audiences and the respect of her peers. She’s guaranteed to be at least the second-funniest transexual you know.</p>\n<p>Natasha performs all over the Bay Area, including Cobb’s Comedy, the SF Punchline, Harvey’s and the Dark Room; and has worked with such people as Wyatt Cenac, Pete Holmes, Ron Lynch, and Laurie Kilmartin.</p>\n<p>In addition to stand-up, Natasha produced and hosted the monthly underground hit “A Funny Night for Comedy” at the Actors’ Theatre, the cult podcast “Too Soon,&quot; and writes and performs with the sketch group Femikaze. She has also been declared &quot;a force to be reckoned with on Twitter.&quot;</p>\n<p>In 2013 the SF Weekly said she was a &quot;Comedian to Watch,&quot; and in 2012 they chose her as &quot;The Funniest Tranny in SF.&quot; </p>\n<p>Natasha has performed in Sketchfest 2013 and 2014, Comedy Day 2012 and 2011, and the first and only SF Comedy and Burrito Festival in 2012.</p>\n<p>She is also the winner of the 2010 Battle of the Bay competition, Miss Toolbox 2011, and also took home the Miss Photogenic trophy in Model Search 2004.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/natasha_high_res.jpg",
    id: "6731"
}, {
    Name: "Nate Bargatze",
    Bio: "<p>Nate Bargatze has had two late night appearance on Late Night with Jimmy Fallon, four appearances on Conan and had his own Comedy Central Presents in 2011. He has written for Spike TV&#039;s Video Game Awards and received critical acclaim at the Montreal Comedy Festival multiple years. When he isn&#039;t winning comedy festivals in both New York and Boston, or performing at Bonnaroo or on tour with Jimmy Fallon&#039;s Clean Cut Comedy Tour, he might just be performing for troops in Iraq, which he has done five times. His debut comedy album &quot;Yelled at by a Clown&quot; reached #1 on the iTunes comedy charts.  Nate was also featured last year as one of Esquire&#039;s Best New Comedians of 2012, as one of Marc Maron&#039;s comedians to watch in Rolling Stone and in Paste Magazine, and as one of the 10 Comedians Who Deserve Their Own TV Show on CoolMaterial.com.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/nate_bargatze.jpg",
    id: "6374"
}, {
    Name: "Nathan Brannon",
    Bio: "<p>Nathan takes the audience on an unexpected ride full of witty stories, clever punch lines, and amusing shadow puppets. He brings smiles and hilarious anecdotes to the stage every time he grabs the microphone. Nathan also added this sentence because he wanted a higher word count.</p>\n<p>Nathan was named one of the &quot;Top 5 Funniest&quot; of Portland  by the Willamette Week in 2013, Portland&#039;s Funniest Person for 2012, and just opened for Comedian Dave Chappelle throughout Oregon. Last summer, he released his first comedy album, entitled &quot;I Black Out&quot;. He has participated in Comedy Festivals all over the country, as well as opened for national headliners such as Dave Chappelle, Matt Braunger, Maria Bamford, Arj Barker, Rob Schneider, Bert Kreischer, Larry Miller, and more. Nathan was also seen in NBC’s new series, “Grimm”. Nathan is now seeking a funnier way to end this paragraph.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/nathan_brannon.jpg",
    id: "6074"
}, {
    Name: "Nick Cobb",
    Bio: "<p>Hailing from Memphis, TN, Nick Cobb attended Indiana University where he majored in Psychology and learned to obsess over meaningless nonsense. This led him to work in his first comedy club, aptly named “The Looney Bin.”  It was at a tiny Beale Street bar where Nick won a stand-up competition, was bitten by the comedy bug and moved to New York to pursue The Dream.  While in New York, Nick was seen on Comedy Central’s Live at Gotham, VH1’s Morning Buzz, AMC’s Date Night as well as on NBC’s “Last Comic Standing” where he not only earned a spot in the semi-finals, but was also featured in a montage of comics recognized for having highly original material.  Less than a year ago, Nick took his talents to Los Angeles.  Since moving out West he won the March Madness Competition at the Hollywood Improv, appeared on Comedy Central’s Inside Amy Schumer, and had his late night debut on The Late Late Show with Craig Ferguson.  He also recently performed on AXS’s Gotham Comedy Live.  He also played the lead in the espn.com comedic web series “Team Players,” and has been seen in many commercials including Pepsi Max, Asthma.com, Joe’s Crab Shack, Carmax and starred in an e*Trade spot during halftime of the Super Bowl!  When not performing standup, Nick is brooding over that one guy in the crowd who was texting during his act.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/webf_0321.jpg",
    id: "5973"
}, {
    Name: "Nick Rutherford",
    Bio: "<p>Nick Rutherford is a comedian hailing from Thousand Oaks, CA.  He was honored to be a &quot;Fresh Face Of Comedy&quot; at the Just for Laughs Festival in Montreal, and was recently named one of the &quot;Top Ten Up and Coming Comics on the West Coast&quot; by Splitsider Magazine.<br />\nNick  recently made his motion picture debut at Sundance in the feature &quot;Toy&#039;s House&quot; starring Nick Offerman and Megan Mullaly. And will be in the upcoming comedy &quot;Intramural&quot; premiering at SXSW.<br />\nHe has written in the past for Adult Swim&#039;s &quot;Loiter Squad&quot; and currently writes for at FOX for the animated shows Axe Cop and the upcoming Major Lazer.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/rutherfordpress.jpg",
    id: "6371"
}, {
    Name: "Nick Sahoyah",
    Bio: '<p>Nick Sahoyah is a writer and comedy producer based out of Seattle, Washington.  In addition to performing at and hosting comedy showcases across Seattle, Nick co-produces the popular weekly comedy night at Scratch Deli on Capitol Hill.  His past production projects include organizing and emceeing the comedy stage at &#039;Mo Wave 2013 (Seattle&#039;s first all queer music and arts festival).  Shortly after, Nick co-produced and hosted Seattle Pride Week&#039;s biggest comedy show, Out &amp; In at the Neptune Theater; a benefit in partnership with Gay City Health Project.</p>\n<p>Apart from stand up, Nick produces the cult sketch/sitcom webshow Monsoon Season starring Jinkx Monsoon (winner of RuPaul&#039;s Drag Race Season 5) which he directs, co-writes, and co-stars in (<a href="http://www.funnyordie.com/monsoonseason">http://www.funnyordie.com/monsoonseason</a>), and hosts his own podcast, That&#039;s Provocative! with Nick Sahoyah (<a href="http://www.nicksahoyah.com">http://www.nicksahoyah.com</a>).</p>\n<p>Nick has previously performed stand up at Bumbershoot Music &amp; Arts Festival (2011/2012), &#039;Mo Wave (2013), Summer Meltdown Festival (2013), and Dallas Comedy Festival (2013).</p>\n',
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/sahoyah.jpg",
    id: "5879"
}, {
    Name: "Opeyemi Olagbaju",
    Bio: "<p>Opeyemi &quot;Ope&quot; Olagbaju may be a young comic but his love and commitment to stand up can always be seen on stage.  The OC/LAcomic. has been seen performing at various clubs(Irvine Improv, Ontario Improv, Brea improv, Spectacles Theater, Flappers) and colleges(UCSB, UCFC) throughout such throughout southern California.. Ope has  been noted for his observational humor and being able to craft hilarity from his own personal experiences of being an immigrant who assimilated into American culture and society. Through comedy Ope wants like to explore what makes us different and more importantly how these differences make us all the same.  His philosophy is that &quot;No matter where you&#039;re from finding a way to laugh is a highly important component of the human experience and something we can call relate to, i&#039;m just glad I have been given the opportunity to make people laugh and share in that experience &quot;</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/ope_pic.jpg",
    id: "6561"
}, {
    Name: "Peggy O&#039;Leary",
    Bio: "<p>Peggy O&#039;Leary is a stand up comedian based out of New York but comes from the burbs of Philly, and thats very important for you to know.  Peggy tells jokes and stories about her fat girl past, her &quot;My Girl&quot; upbringing (minus the bee stings) and being completely weirded out about men and sex.  She was accepted and performed at The Women in Comedy Festival in Boston and The Jersey City Comedy Festival, both in 2013.<br />\nHer sketch group BLEAK! Comedy has performed all over the east coast, featured at the Austin Sketch Festival, The National Comedy College Festival and performed BLEAK! Comedy: STOMACHTOWN at the UCB theatre in NYC.   Her stand up can be seen all over NYC at The Creek and The Cave, UCBTheatre, EastVille Comedy Club, The Village Lantern, and many bars and apartments all over the outer boroughs.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/peggy-oleary-6999-13-2.jpg",
    id: "6058"
}, {
    Name: "Philip Schallberger",
    Bio: "<p>Philip Schallberger is Portland’s premier (only?) solo sketch-stand-up-whatever performer. He is a recurring guest in the Bridgetown comedy festival and has recently been a part of the SLC Comedy Carnivale, Seattle Sketchfest, and San Francisco sketchfest. Phil has been doing live comedy performance since 2007, and has only given up a bunch of times since then. The local papers seem to like what Phil does, and chances are you will as well. So give it a shot. Try Phil today.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/philip-schallberger.jpg",
    id: "5951"
}, {
    Name: "Randy Mendez",
    Bio: "<p>At the ripe young age of thirty-something, Portland comic Randy Mendez thought it&#039;d be the perfect time to go to college and to start a family. At the same time.</p>\n<p>Some years later now he&#039;s about to graduate and he&#039;s almost fully taught his three-year-old daughter to yell &quot;Fart!&quot; in public spaces. After taking third in the search for Portland&#039;s Funnies Person the Portland Mercury described Randy as having &quot;a disarming, ebullient stage presence that calls to mind listening to a slightly manic, very inappropriate friend share stories about his fucked-up day.&quot; Randy is way too happy about the wrong parts of that statement.</p>\n<p>Randy has previously been seen at the Seattle International Comedy Competition, Helium Comedy Club, Funny Over Everything, They Mystery Box Show, No Pun Intendo, and many other shows that didn&#039;t pay well but promised would look great in a bio.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/headshotlowres.jpg",
    id: "6409"
}, {
    Name: "Rebecca O&#039;Neal",
    Bio: "<p>Rebecca O&#039;Neal is a Chicago based stand up comedian and writer/editor whose work can be read on/in Vanity Fair Magazine, Gawker.tv, Splitsider.com, The Rumpus, Death and Taxes Magazine, and more.  </p>\n<p>Since she began stand up comedy in early 2012, Rebecca has performed at Portland&#039;s 2013 Bridgetown Comedy Festival, Chicago Underground Comedy, Chicago Women&#039;s Funny Festival 2012 and headlined 2013, Queer Comedy at Zanies, The Comedy Shrine, The Laugh Factory, Zanies Rosemont, The Wasted Plains Rock and Roll Revival, The Ohio Lesbian Festival, Entertaining Julia, NPR&#039;s Brian Babylon&#039;s Bronzeville Comedy Show, Jokes and Notes, The Lincoln Lodge, Navy Pier&#039;s Beer Garden, headlining NERDGASM at The Drop Comedy Club in Southbend, Indiana, and many other showcases in and around Chicago. Rebecca is also one of the newest cast members of the 14th season of Chicago&#039;s historic Lincoln Lodge and a regular guest on Vocalo.org&#039;s morning amp and has appeared as a guest comedy commentator or WBEZ&#039;s Morning Shift with Tony Sarabia.</p>\n<p>She performed in a video for Just For Laughs Chicago 2012 and currently produces a monthly free, BYOB comedy showcase in Chicago called Congrats on Your Success (for which she does the promotion and public relations) that has been featured in/on WBEZ/NPR, The Huffington Post, Vocalo.org, The Chicago Reader, The Red Eye&#039;s Eat Drink Do column, Time Out Chicago, Gapers Block, Chicagoist, LoganSquarist, Chicago Now, ChooseChicago.com, AfterEllen.com and many local blogs and websites. She was also listed as one of the Huffington Post&#039;s 18 Funny Women To Follow on Twitter alongside Mindy Kaling - and in a second feature for Huffington Post Chicago.</p>\n<p>Rebecca O&#039;Neal is a hilariously cerebral and confessional young comic whose urban upbringing on Chicago&#039;s southside coupled with her expansive vocabulary and tendency toward introspection endear her to audiences of all backgrounds. By humorously mining her experiences, she makes the esoteric universal.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/fez_shot.jpg",
    id: "5876"
}, {
    Name: "Rhiannon Archer",
    Bio: "<p>Rhiannon Archer is a standup comedian and amateur crooner hailing from Toronto Canada.<br />\nShe is also a writer who has written for television shows such as CBC’s George Stroumboulopoulos Tonight and CTV’s new sitcom, Spun Out. She has been nominated for 2 Canadian Comedy Award for Best Newcomer and Best Comedy short.<br />\nRhiannon has been a part of many festivals throughout North America such as Just For Laughs 42, NXNE, Dark Comedy Festival, Boston Women in Comedy, All Jane no Dick, and the Seattle International Comedy Competition.<br />\nRhiannon cannot do mathematics under pressure, or tell you anything specific about history prior to 1980&#039;s. She has cats, enjoys sour keys and walking, hates mayo and mushrooms and when her food touches.<br />\nRhiannon Archer is a stand out in a group of up and coming comics that keep Toronto an epicenter for new talent.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/rhiannonarcher.jpg",
    id: "6392"
}, {
    Name: "Richard Bain",
    Bio: "<p>Richard Bain started doing standup in North Carolina in 2003 and then moved to Portland, Oregon in 2005. After becoming one of Portland’s favorite comedians he decided to move to Los Angeles in 2011. When he’s not on stage making you laugh, he’s probably making videos with his friends better known as Decision Makers Penthouse. Their videos have been featured as Will Ferrell’s favorites on funnyordie.com and Bain starred in one that was featured on The Tonight Show with Conan O’Brien. Richard has performed at the Laughing skull fest, Bumbershoot, and the LA Riot festival. He recently was featured in a Dead Kevin sketch for comedy central.com.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/screen_shot_2012-07-18_at_8.06.53_pm.png",
    id: "6110"
}, {
    Name: "Rob Gleeson",
    Bio: "<p>Rob is an LA based stand up comedian. In addition to doing sets around Los Angeles, he regularly tours the college market where occasionally during his shows two kids seated in the back will start making out. They either find Rob&#039;s act to be incredibly erotic or insufferably boring. His acting work includes national commercials and roles on shows like How I Met Your Mother and Ben &amp; Kate. Currently, he recurs on the third season of Showtime&#039;s House of Lies.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/gleeson.jpg",
    id: "6189"
}, {
    Name: "Rob Haze",
    Bio: "<p>In a short amount of time, Rob Haze has become a rising star in stand up comedy.  The Atlanta native began his stand up journey while studying Political Science, at the University of Georgia. There he would host and perform at many talent shows, pageants, and step shows. He went on to win the Athens Last Comic Standing contest. With a sense of humor that is full both of clever wordplay and references to popular culture, there is no wonder why Rob has become a favorite at the Laughing Skull Lounge, Punchline, and Uptown Comedy Corner.  Rob uses his gift, to help others as well; in 2012 he won the Autism Laughs charity competition. He also was a writer and star of a (local) sketch comedy show called Cabbagetown. In 2012, Rob began to branch out from the Southeast, and was a finalist in the Bay Area Black Comedy Competition in Oakland, California.  He is a 2013 Finalist in the 2013 NBC Stand up for Diversity competition and currently on their college tour. Rob has opened for many comics including Donnell Rawlins, Hannibal Buress, and most recently Dave Chappelle.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/improvedheadshot.jpg",
    id: "5918"
}, {
    Name: "Rojo Perez",
    Bio: "<p>Rojo Perez is a New York based comedian. He grew up in Puerto Rico, which helped him form the humor you see in him today. After moving to Florida for college, he began doing stand up at the age of 20 in local clubs and small café’s in Central Florida. Since moving to the Northeast, Rojo has become a regular in the NY comedy scene and can usually be seen performing at The Creek and The Cave. He has also performed at Caroline’s, The Comedy Studio, The Improv, the UCB theaters and many other clubs around the US. He has appeared on &quot;Keith and The Girl&quot; and has been featured at the New York Comedy Festival and at the inaugural LA Riot Comedy Festival. His future plans include one day earning enough money that relatives will ask to borrow and continuing to spread laughter regardless of race, religion and gender.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/rojo-perez-111.jpg",
    id: "5845"
}, {
    Name: "Ryan Sickler",
    Bio: "<p>If the adage is true — that tragedy plus time equals comedy — then Ryan Sickler has paid his dues on the left side of the equation.  Born in Baltimore, Ryan lost his father when he was 16, was thrown into the street by his mother and after that, bounced from one relative to another.  It was finally a great-aunt who gave him the chance to get back on his feet and when he did, he did it like he meant it.</p>\n<p>Ryan worked, saved, finished school, packed all his stuff into garbage bags and drove to Los Angeles to follow his dream of being a comic. And while his early years might have seemed rocky, that tumultuous childhood gave him both fodder for material and armor against the relentless onslaught that is life as a standup comic.</p>\n<p>His television appearances include Comedy Central’s Tosh.O, Live At Gotham, Cutman and The Late Late Show.  Ryan is also an informed sports fan and appeared as a regular on Fox Sports.  He has written for his hometown Baltimore Ravens on NFL.com and for Joan Rivers.</p>\n<p>Beyond standup, Ryan Sickler is an engaging storyteller.  You can catch him every Tuesday on his podcast, The CrabFeast.  Inspired by his hometown, the show celebrates the things Ryan loves most — storytelling, family, friends and comedy.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/emailable_headshot.jpg",
    id: "6092"
}, {
    Name: "Ryan Singer",
    Bio: "<p>Ryan Singer is the rarest of breeds: A comic’s comic who electrifies mainstream audiences with material that is both uncompromising and unpretentious.   LaughSpin says, “With his high-energy delivery and unpretentious leanings, there’s not a lot to dislike about comedian Ryan Singer. And it’s not just us saying it: In the last few years, he’s won over audiences headlining the nation’s finer comedy clubs and was hailed by Marc Maron in Rolling Stone as a comedian “who should be big.”</p>\n<p>Both his debut album and sophomore release COMEDY WONDER TOWN were selected as Top 10 Comedy CD’s of the year (2010 &amp; 2012).  He was selected by LA Weekly as one of “10 LA Comics to Watch” for 2014, was mentioned in NY Magazine as a “Comic to Watch,” was one of 4 finalist in CMT’s Next Big Comic Contest, is a frequent guest on the WTF Podcast w/Marc Maron and the Bob &amp; Tom Show, regularly heard on XM/Sirius Satellite Radio, and was a regional finalist in Comedy Central’s Open Mic Fight.  He was the winner of the Golden Shingle Award at the Rooftop Comedy Festival, an award given to the next rising star in comedy.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/ryan_singer_under_1mb.jpg",
    id: "6319"
}, {
    Name: "Sachi Ezura",
    Bio: "<p>Sachi Ezura is a comedian, writer, and producer, who works in development and talent for MTV2. After graduating from Harvard, she chose to disappoint her parents by pursuing a career in comedy. She is a co-writer on the upcoming Girl Code book, available at Urban Outfitters, and has contributed writing to the Huffington Post and Comedy Central Insider. She has produced comedy for the MTV Comedy Showcase, the NY Comedy Festival, Laughter in the Park, Schtick or Treat, the Quarterly Arts Soiree and 50 First Jokes. She co-hosts and produces Sledgehammer, a stand-up open mic at UCB East and Comedy at Alligator Lounge, a free weekly stand-up show. She is also a trained improviser, having completed the Advanced Study program at the Upright Citizens Brigade Theater and has performed improv at the Del Close Marathon and the Chicago Improv Festival. She is half Japanese, 1/4 Puerto Rican, 1/8 Swedish, and 1/8 German; and she is willing to milk those facts for whatever diversity showcases she can get on. She was born and raised in New York City and has cried in most public places across Manhattan (and some parts of Brooklyn!)</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/67874_10100562085767411_60497619_n.jpg",
    id: "6118"
}, {
    Name: "Sam Simmons",
    Bio: "<p>Sam is one of the most daring and unconventional comics in Australia, completely original and vastly absurd, he has one foot firmly planted into the soils of reality, and the other rooted deep into the psyche of being silly.</p>\n<p>Sam is a multi award winning cult figure within the Australian comedy scene.  He has collected awards, glowing reviews, and played to sell out houses around the world.</p>\n<p>His 2006 solo show, Tales of the Erotic Cat picked up a prestigious nomination for the Barry Award for Most Outstanding Show in the Melbourne International Comedy Festival, 2008’s Where Can I Win A Bear Around Here? won the much respected Festival Director&#039;s Choice Award, and in 2010 Sam picked up the Piece Of Wood Award for his solo show, Fail, as well as the Golden Gibbo Award for The Incident which he performed with fellow comedian, David Quirk. </p>\n<p>2011 saw Sam take home the award for Best Comedy Show at the Adelaide Fringe Festival, not to mention scoring a nomination for a Barry Award for his solo show, The Precise History of Things and a nomination for Edinburgh’s top Fosters Comedy Award (the comedy equivalent of an Oscar) for Meanwhile.</p>\n<p>Continuing to perform his stand up shows to sell out houses at comedy festivals around Australia, Sam has also performed his solo shows four times at the Edinburgh Fringe Festival, twice at the prestigious invitation only Montreal Just For Laughs Comedy Festival as well as JFL festivals in Chicago, Toronto and at the Sydney Opera House.</p>\n<p>Joyous on the radiowaves, Sam has made Australian youth radio network Triple J his own.  2008/09 saw him at the helm of the Weekend Breakfast Show as well as weekday Breakfast and Drive Shows and he is still now a regular contributor across the station.</p>\n<p>In 2012 Sam assembled a wonderful cast of Australia&#039;s pre-eminent absurdists for Problems (ABC1)a four part journey through the cream brick neverland that is the Australian suburbs.  In 2013, Problems was broadcast and received with applause throughout the UK on UKTV’s Dave. 2013 also saw Sam make his US television debut on comedy powerhouse Conan on TBS, and Sam ran a weekly live show Sam Simmons Has Problems at the Virgil in Los Angeles.</p>\n<p>Sam is now conquering the globe spending his time hovering between Australia, London and Los Angeles introducing his comedy to the world.</p>\n<p>Alongside his comedy, Sam has worked within animal enrichment at the Melbourne Zoo with elephants, seals, reptiles and small native mammals.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/sam_simmons_01.jpg",
    id: "6832"
}, {
    Name: "Scott Losse",
    Bio: "<p>Scott Losse is a cat owner and stand-up comedian from Seattle, Washington. He has performed at Bumbershoot: Seattle&#039;s Music &amp; Arts Festival, The Seattle International Comedy Competition, Sketchfest, and lots of other places you&#039;ve never heard of. Scott&#039;s stand-up is smart, absurd, and at times dark. You would probably like it. Scott has appeared on Seattle&#039;s Evening Magazine and is the winner of the 2013 Wenatchee Comedy Festival. His cat&#039;s name is Kitty. She&#039;s a real asshole.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/scottlosse1024x816.jpg",
    id: "5787"
}, {
    Name: "SEAN CULLEN",
    Bio: "<p>SEAN CULLEN</p>\n<p>Expect the unexpected with Seán Cullen, a nimble master of improvisation and accomplished impressionist who delights in the absurd. The 25-year veteran of the Canadian comedy scene is an award-winning comedian, actor and writer.</p>\n<p>Cullen has made multiple appearances on The Tonight Show with Jay Leno (NBC) and The Late Late Show (CBS). He was a finalist in the sixth season of Last Comic Standing (NBC) and was a regular on The Ellen Degeneres Show (CBS). He starred in his own television series The Seán Cullen Show (CBC), also serving as creator, executive producer and writer on the series. He hosted Just For Laughs 20th Anniversary and the travel series What Were They Thinking? (Discovery), earning Gemini Awards for each. He has had several specials including Comedy Central Presents, the Gemini-nominated Comedy Now! special titled Seán Cullen: Wood, Cheese &amp; Children! and Seán Cullen’s Home for Christmas (CBC) and COMICS!. He has made multiple appearances on Just For Laughs (CBC) earning him a Gemini Award-Best Performance-Variety-Series.</p>\n<p>His feature film credits include Atom Egoyan’s Where the Truth Lies, Mike Myers’ The Love Guru and Phil The Alien, earning him a Canadian Comedy Award, Best Male Performance-Film.</p>\n<p>Cullen monthly podcast The Seanpod was nominated for a 2012 Canadian Comedy Award for Best Podcast and is available on Apple iTunes. He has leant his voice to a number animated series such as: Jimmy Two-Shoes (Teletoon/Disney XD) earning two Gemini-nominations and Rocket Monkeys (Teletoon).</p>\n<p>Cullen performs live on stage Canada, including Just For Laughs in Montreal/Toronto, and has appeared as far afield as the Melbourne Comedy Festival and Edinburgh Fringe. </p>\n<p>A prolific writer, he is the author of five popular young adult novels and is beginning to write a sixth new book. His first novel Hamish X and the Cheese Pirates won a Rocky Mountain Book Award and an Arthur Ellis Award and his book The Prince of Neither Here Nor There was nominated for a 2010 Toronto Book Award. He has written many television comedies and animated series, select credits include The Seán Cullen Show (CBC), Seán Cullen’s Home for Christmas (CBC), Seán Cullen: Wood, Cheese &amp; Children! (CTV/The Comedy Network) and more recently, Camp Lakebottom and Rocket Monkeys, premiering on Teletoon in fall 2012. He has also written and performed songs for A Wrinkle in Time (ABC), Just For Laughs 20th Anniversary (CBC), The Gemini Awards (CBC) and the Star TV Theme Song (Star TV, CityTV).</p>\n<p>Cullen has released two comedy albums, Seán Cullen Live! and I Am a Human Man are available on Apple iTunes.</p>\n<p>Described in Time Magazine as “the vanguard of comedy&#039;s next generation”, Cullen has earned three Gemini Awards, three Canadian Comedy Awards, an ACTRA Award, a Rocky Mountain Book Award, an Arthur Ellis Book Award and was twice nominated for the Edinburgh Comedy Award.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/headshot-seancullen-04-300dpi.jpg",
    id: "6791"
}, {
    Name: "Sean Donnelly",
    Bio: "<p>When he’s not catching a nap with his bulldog, Rickles, Sean can be \u2028found headlining clubs all over New York, including Caroline&#039;s, Gotham, Stand Up NY, and The Stand. He has appeared on MTV’s World of Jenks and The Late Show with David Letterman. Sean was a Comic Stand-Off finalist at the 2010 Magners \u2028Comedy Festival, performed at the Bridgetown Comedy Festival in\u2028 2011 and 2012, was a semi-finalist in the 2012 Boston Comedy\u2028Festival competition, and performed at Comedy Central’s 2013 South \u2028Beach Comedy Festival. Sean was a Montreal Just For Laughs “New Face” in 2013.  He co-hosts the podcast My Dumb Friends\u2028 with fellow comedian Dan St. Germain and hosts a weekly show at Alligator Lounge in\u2028 Brooklyn. Sean can be seen regularly on the TruTV series World’s Dumbest and on the first season of Adam Devine’s House Party on Comedy Central.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/sean_donnelly_2.jpg",
    id: "6004"
}, {
    Name: "Sean Flannery",
    Bio: "<p>The easiest way to describe Sean Flannery is: he&#039;s attended the wrong wedding (twice). That mostly<br />\nsums it up.</p>\n<p>On stage, he shares wild, hilarious stories, while showing multimedia from the events: photos, videos,<br />\nvoicemails and more. He recently combined many of these stories into a sold-out, critically-acclaimed<br />\none man show, called &quot;Never Been to Paris&quot;, about the last 10 times he nearly killed himself by accident.<br />\nHe is also the creator and host of &quot;The Blackout Diaries&quot; a show where comics plus &#039;real&#039; people (cops,<br />\npriests, teachers, etc) share true drinking stories and answer questions from the audience.</p>\n<p>He has been named the best comic in Chicago by several publications and his live multimedia shows<br />\nroutinely sellout. He was a featured New Face at Just For Laughs Comedy Festival (Montreal)<br />\nand made his television debut last year, on Comedy Central&#039;s, ”Mashup”.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/seanflannery_headshot.jpg",
    id: "6144"
}, {
    Name: "Sean Green",
    Bio: "<p>A Bethlehem, PA native Sean Green has brought his East Coast sensibilities to the Los Angeles comedy scene. Known for his brazenly honest story telling Sean isn’t afraid to share the hilarious episodes that perpetuate his personal life. An open book policy also applies to Sean’s educated acerbic takes on current events in the world. Sean is a founding member of Los Angeles’ hottest underground comedy club ‘The Comedy Garage’ and can be found performing at the Improv Olympic, The Improv, UCB Theater and 3 Clubs. Sean was one of the stars in ‘The Comedy Garage‘ documentary now on Hulu. Besides his work as a standup and mc, Sean hosts a weekly podcast called ‘The Green Room’ for the syndicated 24/7 Comedy.com network. Sean’s other past projects include programs on Live Video.com, National Lampoon Radio, LA Talk Radio.com, Comedy Nation, Spike TV, Set List at the Comedy Central Stages and at the Montreal Comedy Festival. Sean also recently acted in Def Jam recording artist Wax’s music video ‘Dispensary Girl’. Sean has combined his love of sports and comedy in his NFL picks column for MTV&#039;s Guy Code and by co-hosting the Sports Gambling Podcast. Check out Sean’s debut stand up comedy cd ‘Sean Green The Whiskey Dick‘. Sean&#039;s latest appearance can be seen on the Hulu Original featuring Jay Mohr titled &#039;Money Where Your Mouth Is&#039;.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/headshot_new.jpg",
    id: "6352"
}, {
    Name: "Sean jordan",
    Bio: "<p>Sean Jordan is a stand up comedian originally from Sioux Falls SD.  Sean started into comedy after seeing only one stand up show.  Getting his start in Sioux Falls after winning a local comedy contest, Sean became one of the house emcees at the comedy club in town.  This gave Sean the chance to perform 3-4 times a week for years on end.  That opportunity allowed Sean to grow as a comedian at a very rapid rate while at the same time giving him all the stage time needed to develop a healthy confidence while telling jokes.<br />\n     After going as far as he could in Sioux Falls, Sean decided to move to Portland OR.  Quickly after moving he hopped right into the local scene advancing to the finals of the 2011 and 2012 Portland comedy competitions.  Sean was also voted one of Funny or Die and Splashlife magazines “30 Under 30” comedians to watch in 2011.  You have heard him as a repeat guest on Doug Bensons podcast “Doug Loves Movies” as well as “The Benson Interruption.”   You also may have seen him on Rooftop Comedy as a featured performer.  He has participated in the Bridgetown Comedy Festival the last 4 years running as well as the Bumbershoot Comedy and Arts Festival for the last 2.  The easy and comfortable style of Sean is sure to put any audience member in the right frame of mind to enjoy a stand up show and also provide them with a memorable experience to keep them coming back.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/flightclub.jpg",
    id: "6408"
}, {
    Name: "Sean O&#039;Connor",
    Bio: "<p>After starting his stand up career in New Jersey, Sean moved to New York and quickly<br />\nbecame one of the city&#039;s favorite new comics, being featured in the NY Post as one of<br />\nNew York’s Top 20 Comics to Watch and just filmed his Half Hour Special for Comedy<br />\nCentral.<br />\nIn addition to working as a staff writer on “Sports Show with Norm MacDonald” at<br />\nComedy Central, Sean was a producer for “Upload with Shaquille O’neal”. He is currently<br />\ndeveloping a pilot with Julian McCullough for Comedy Central.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/sean_o_connor_pic_5.16.13.jpg",
    id: "6816"
}, {
    Name: "Shane Mauss",
    Bio: "<p>In 2013 Shane Mauss has had his fifth appearance on Conan, recorded his first one hour special which will be out in early 2014, performed his solo show for a full month in the world&#039;s largest comedy festival The Edinburgh Comedy Festival, and just recorded a TV spot in Australia at The Just For Laughs: Stand-Up Series at The Sydney Opera House.</p>\n<p>Originally from La Crosse, WI, Shane Mauss moved to Boston in 2004 (at the supple, tender age of 23) to pursue his childhood dream of becoming a standup comedian. In less than three years, Shane caught his big break when he was awarded Best Standup Comic at HBO&#039;s US Comedy Arts Festival in 2007.</p>\n<p>Comedy Central Presents: Shane Mauss debuted in 2010 and was accompanied by his first CD Jokes To Make My Parents Proud with Comedy Central Records, which was named in the Top 10 Albums of 2010 by Punchline Magazine.</p>\n<p>Shane&#039;s other TV credits now include two appearances on Conan on TBS, three appearances on Late Night with Conan O&#039;Brien, an appearance on Jimmy Kimmel Live!, Comedy Central&#039;s Live at Gotham, Showtime&#039;s Comics Without Borders, two appearances on BBC&#039;s The World Stands Up, and in what is easily his strangest television appearance to date: Playboy TV&#039;s Night Calls.</p>\n<p>Shane has been in several comedy festivals around the world including The Just For Laughs Festival Comedy Festival in Montreal, Sydney &amp; Chicago, The Bridgetown Comedy Festival in Portland, OR, The Comedy Central South Beach Comedy Festival, The Cat Laughs Comedy Festival in Kilkenny, Ireland, The Sydney Comedy Festival, and The Aspen Rooftop Comedy Festival.</p>\n<p>You may also know him as a regular on The Bob and Tom Show, Sirius Radio, Pandora, Spotify or podcasts such as WTF, You Made It Weird, Doug Loves Movies, Keith and The Girl or as co-host of The Double Date Podcast.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/922215_10151573163889871_1401201246_o_1.jpg",
    id: "6280"
}, {
    Name: "Shane Torres",
    Bio: "<p>Shane Torres is a comedian originally from Texas, but started comedy in Portland, Oregon. In the six years he has been performing stand up he has made some serious mistakes in his personal life, but has done OK in comedy. He was lucky enough to perform in the very first Bridgetown Comedy Festival and New Orleans Comedy and Art&#039;s Festival in his first year and second year of comedy. In 2012 he was chosen as on of Comedy Central&#039;s Comics to Watch and also competed in The Seattle International Comedy Competition.  2013 turned out to be a great year for Shane performing and winning The Funniest Person in Portland contest as well as being chosen by his peers as one of The Willamette Week&#039;s top 5 comics. He also took the stage at Seattle&#039;s Bumbershoot Festival that year. After all that he performed at The prestigious Montreal Just For Laugh&#039;s Comedy Festival as New Face where GQ called him best new comer in an article where they mentioned much more famous comedians that Shane admires greatly. He really hopes you come out to see him and enjoy the show.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/i0000zhk9nzg8pzc.jpg",
    id: "5742"
}, {
    Name: "Stephanie Hasz",
    Bio: "<p>Stephanie has performed at clubs including Zanies and the Laugh Factory; alternative rooms and venues such as the Upright Citizens Brigade Theatre, the Hideout, Chicago Underground Comedy, and The Creek and The Cave; and festivals including the Bentzen Ball, High Plains Comedy Festival, and Crom Fest. The AV Club called her one of “the city’s most exciting up-and-comers,” and Time Out Chicago described her as displaying “a fury and vulnerability rarely seen from female comics.” She has also been featured yelling about things in the Chicago Tribune and the Chicago RedEye.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/stephaniehasz_headshot.jpg",
    id: "6312"
}, {
    Name: "Steve Gillespie",
    Bio: "<p>Hailing from Minneapolis, where after receiving a degree in something or other Steve became really bored and started telling jokes into a microphone. He first began honing his craft at the Acme Comedy Club, and has quickly emerged as a fast-rising talent in one of the strongest and most competitive comedy scenes in the country. Metromix magazine named Steve one of the top comedians in the Twin Cities.</p>\n<p>Steve has been on the road non-stop for the past five years, appearing in some of the best comedy clubs in the country, including opening appearances for Kyle Kinnane, Rory Scovel, Dave Attel, Tom Green, Harland Williams, Jim Breuer, Gilbert Gottfried, and Doug Benson.</p>\n<p>In 2010 he performed at the Laugh Your Asheville Off Comedy Festival and in 2011 he appeared in the prestigious Boston Comedy Festival. In 2012, Steve was named a finalist in CMT&#039;s Next Big Comic Award. His first comedy album Stever Fever, produced by Rooftop Records, came out in 2013 and was named one of the top ten albums of 2013 by Comedy-Reviews.com . This past March he performed at Gilda&#039;s Laughfest, where he was named runner-up for the Best of the Midwest.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/steve_6.jpg",
    id: "6354"
}, {
    Name: "Steven Wilber",
    Bio: "<p>&quot;Offbeat,&quot; &quot;unexpected&quot; and &quot;clever&quot; are just three of literally hundreds of words used to describe the comedy-style stylings of Steven Wilber. Since starting stand-up in 2011, Steven has risen up in the Portland comedy scene to become a frequent performer at arcade bars, anarchist bookstores, Doctor Who-themed seafood restaurants and other typical comedy venues this city has to offer.</p>\n<p>Steven has shared the stage with Chris Hardwick, Mary Lynn Rajskub, Sean Patton and Ron Funches...whether they wanted him to or not. He has performed at Bumbershoot,  the Savage Henry comedy festival, has been featured on Bryan Cook&#039;s Competitive Erotic Fan Fiction podcast and is a writer for The Spicy News webseries.</p>\n<p>He also has over 23,000 Vine followers, which he&#039;s been told is a good thing to include in a bio.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/stevenbridgetownheadshot.jpg",
    id: "6215"
}, {
    Name: "Subhah Agarwal",
    Bio: "<p>Subhah Agarwal is a stand up comedian currently working out of New York City. Subhah performs regularly at club across the city including but not limited to Stand Up New York, the Stand, Gotham, and New York Comedy Club. She has also performed in several prestigious alterative comedy venues including Hannibal Buress’s Knitting Factory, and Night Train with Wyatt Cenac. </p>\n<p>She recently showcased in the New York Comedy Festival and was featured on Scott Moran’s PBS documentary series “Modern Comedian.” She is known as one of the hardest working comedians. She has really been working to get her name out there so that one day she can write in a notebook without someone asking her if she’s doing homework.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/subhah-agarwal-0085-2.jpg",
    id: "6298"
}, {
    Name: "T.J. Chambers",
    Bio: "<p>Distributor of high-fives, repository of whiskey, afraid of phones, spiders, and phone-using spiders.  T.J. Chambers is a Los Angeles-based writer and comedian whose work has appeared on NBC, MTV, Lifetime, and other television channels (but let&#039;s be honest we all mostly flip through those three).  As a live performer he has toured the country and graced (seriously, his movements are lithe as hell) every major and minor stage around LA.  Listeners have enjoyed a string of scintillating appearances on podcasts such as Put Your Hands Together, PodCrash, Probably Science, and maybe some others provided they start with &quot;P&quot;, because after all it&#039;s a fun letter with both straight and bendy parts.  Presumably he is also very happy to be making a return to the Bridgetown Comedy Festival, but to be honest we forgot to ask him.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/me_cropped_5.jpg",
    id: "5728"
}, {
    Name: "Tanner Hodgeson",
    Bio: "<p>Tanner Hodgeson is a scared little man. He moved to Seattle from Texas three years ago to work as a software developer. He started performing comedy soon after as a way of spreading the nonsense contained inside him. He has performed in Bumbershoot Music &amp; Arts Festival as well as local shows in the Seattle, Tacoma, and Bellingham areas including Comedy, Mystery, and Mutants! and Competitive Erotic Fanfiction.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/cool.jpg",
    id: "6483"
}, {
    Name: "Tim Hammer",
    Bio: "<p>Young, fresh, full of life and Totino&#039;s pizza. Tim Hammer&#039;s style revolves around one-liners. Audience members often share his one-liners with their friends.<br />\nAnd possibly enemies.</p>\n<p>In 2013, Tim performed at Bridgetown Comedy Festival, was a finalist in the Portland&#039;s Funniest Person Contest, and then a finalist in the Big Sky International Comedy Competition. He has performed at venues such as the Hollywood Improv, Helium Comedy Club, Seattle Comedy Underground, and Applebee&#039;s.<br />\nIn 2014, he performed at a Denny&#039;s.</p>\n<p>He does not lip-sync any of his material.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/tumblr_mz0uz62nnx1s46y2co2_1280.jpg",
    id: "6727"
}, {
    Name: "Tom Sibley",
    Bio: "<p>Tom is a comedian living in Los Angeles, CA. He does two podcasts, one on the WestCast Network called Goof City (which is like Cheers meets Mean Girls) and We Watch Wrestling (a podcast about professional wrestling...seriously) He has appeared on BBC America, FKR.TV&#039;s Law of the Land, and countless television commercials. He currently lives in a makeshift Russian retirement community and thinks dogs are far better than people.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/1393700_631839286867728_1805113915_n.jpg",
    id: "6032"
}, {
    Name: "tony camin",
    Bio: "<p>Bio:<br />\nTony has appeared on Late Night with Conan O&#039;Brien, Jimmy Kimmel<br />\nLive, Real Time with Bill Maher, and lots of other shows that have been<br />\ncancelled. He&#039;s has performed at The Just For Laughs Festival in<br />\nMontreal as well as The HBO US Comedy Arts Festival in Aspen, as well<br />\nas the Melbourne Comedy festival in Australia. As an in-demand writer<br />\nof awesome &quot;comedic&quot; humor, Tony has written on programs for NBC, VH1,<br />\nand Comedy Central. All of which have been cancelled.<br />\n He&#039;s is also a co-creator, and performer of the hit off -Broadway play, TheMarijuana-Logues,<br />\n and was recently seen as a ‎correspondent on The Media Project for IFC.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/_dsf0829nnnttt.jpg",
    id: "5938"
}, {
    Name: "Tony Sam",
    Bio: "<p>Winner of the 2007 Chicago Comedy Award for Most Innovative Comedian, Sam has been heralded by the press for his ability to make the quirky &quot;hysterical&quot;, and was described as a &quot;stalwart of the emerging Chicago underground comedy scene,&quot; by UR Chicago. Earning his chops at the Chicago Second City Training Center, and IO Chicago (formerly ImprovOlympic), Sam has taken his life experiences and molded them into charming, hilarious, and memorable characters that will have you repeating his lines well after the show. In addition to appearing on the G4 Network&#039;s Attack of the Show, he is currently a voice actor, commercial actor, and writer for Ridiculousness on MTV.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/tonyarmyjackettheatrical.jpg",
    id: "6130"
}, {
    Name: "Vince Averill",
    Bio: "<p>Vince Averill is a Los Angeles based comedian. He has toured throughout North America and appeared on Comedy Central.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/vinceheadshot.jpg",
    id: "6717"
}, {
    Name: "Wil Anderson",
    Bio: "<p>Wil Anderson is a stand up first and foremost, touring Australia and the world at every opportunity, performing more than two hundred shows a year. His stand up is a densely written, high-speed ride through one of the most wonderful comedic imaginations in the world. Politics, pop and the personal come together in a Wil Anderson routine, always delivered with more conviction and enthusiasm than any man’s vocal chords can take.</p>\n<p>Over the last 4 years Wil spent a lot of time north of the equator, performing live in London, Edinburgh, Ireland, Montreal, Canada, New Zealand and across the US and securing regular guest appearances on the popular US late night comedy talk show, Chelsea Lately.</p>\n<p>Since 2008 Wil has been the host and executive producer of the ABC (Australian Broadcast Company) TV&#039;s highest rating program &quot;The Gruen Transfer series&quot; - a role that saw him nominated for a Gold Logie in 2010, and also won Best Entertainment Show at the AACTA awards in 2011. </p>\n<p>Gruen has spawned the spin-offs Gruen Nation, the sports themed Gruen Sweat and Gruen Planet. In 2013 Wil returned to host a series of Gruen Nation and Gruen Planet which was once again the number 1 entertainment show on the ABC network, a record fifth year in a row.  In 2012 Gruen Planet was nominated for a Logie, and in May 2013 Gruen Sweat won the prestigious Rose d&#039;Or, Europe&#039;s equivalent of the Emmys. </p>\n<p>But it’s on stage where Wil is in his element: 2012 saw Wil busy touring his hit live show Wilarious to sold out venues around Australia, earning rave reviews and winning his third consecutive Bulmer&#039;s People’s Choice Award at the Melbourne Comedy Festival, not to mention being named one of comedy’s hottest acts by none other than John Cleese.  </p>\n<p>2013 saw Wil’s most successful tour yet, with GoodWil being seen by over 50,000 people including audience across North America in Vancouver, Montreal, LA, New York, Minneapolis, Seattle, DC, Cleveland and Denver.</p>\n<p>GoodWil was awarded a Fringe Award for Best Comedy during the Adelaide Fringe Festival, and enjoyed a sell-out 21-night run at the prestigious 1600-seat Princess Theatre during the Melbourne International Comedy Festival where it received a five-star review from the Herald-Sun. It was later performed everywhere from a a log-cabin in Alaska to a two-week sold-out season at the prestigious Soho Theatre in London. </p>\n<p>To cap off 2013, GoodWil was nominated for a Helpmann award (Australia’s Tonys) for live comedy performance. This is a record-breaking fourth nomination in a row. </p>\n<p>Wil is also the host of the popular podcasts Wilosophy which regularly tops the iTunes charts in Australia, and TOFOP which was recently named iTunes Best Classic Audio podcast for 2013.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/img_3281web.jpg",
    id: "6833"
}, {
    Name: "Wilfred Padua",
    Bio: "<p>Wilfred Padua is a comedian from Seattle, WA. He spent two years in Chicago getting an MFA in Writing only to come back to Seattle to do exactly what he was doing before he left. He has performed at Laff Hole, Bumbershoot Music Festival, and at Summer Meltdown Music Festival. He is also a coproducer of the monthly Seattle showcase, The Good Fun Show.</p>\n<p>twitter.com/wilfredpadua</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/headshot_22.jpg",
    id: "6564"
}, {
    Name: "Will Miles",
    Bio: "<p>Will Miles is a New York stand up comedian.  After focusing on improvisation for two years at Chicago&#039;s ImprovOlympic, he began stand up comedy in 2007 and has been steadily working since he began.  After performing in the local stand up scene for a couple of years in Chicago, his first work came in the opportunity to feature for Hannibal Buress on his &quot;My Name Is Hannibal&quot; Tour. He is a regular at clubs, working the Midwest and East Coast. Aside from his stand up, Miles won runner up in Break.com&#039;s national &quot;Better Way Video&quot; contest and is a regular contributor on Chicago Public Radio&#039;s &quot;The Morning Amp&quot; radio show hosted by Brian Babylon and Molly Adams while living in New York.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/image_6.jpg",
    id: "6474"
}, {
    Name: "Will Smalley",
    Bio: "<p>Fresh off the factory line with that “new car” smell, Comedian Will Smalley has readily established himself as a powerful voice and innovative joke writer in the Boston comedy scene. Will was a Finalist in the 2012 Boston Comedy Festival, has been featured in the Women In Comedy festival and is a mainstay in the major comedy clubs and colleges across the Northeast. Will was selected in 2011 to be Comic In Residence and now hosts a monthly show at the renowned Comedy Studio in Cambridge.  Will has also been a writer for MY-TV Network.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/100114_will_029_webres.jpg",
    id: "6699"
}, {
    Name: "Will Weldon",
    Bio: "<p>Will Weldon is a comedian who currently resides in Los Angeles, California, home to such luminaries as Jeremy Piven and that&#039;s pretty much it. He has performed on such well known Los Angeles comedy shows as The Meltdown with Jonah and Kumail, Put Your Hands Together, and the now defunct (what a great word) Holy Fuck! He has toured across the country, as well as appearing at both the Bridgetown and Montreal Comedy festivals, where he was invited to perform on a “Best of the Fest” showcase. He has been written about in the kinds of online comedy magazines only other comedians ever read, and was catfished by someone he met on Twitter. Try to keep that last thing a secret, though.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/squish_face.jpg",
    id: "5867"
}, {
    Name: "Yogi Paliwal",
    Bio: "<p>A standup comedian based out of Seattle. Yogi Paliwal has performed around the country at comedy clubs, theatres and festivals including the San Francisco and Seattle Sketch Fest, The Bridgetown Comedy Festival and at the NBC Standup for diversity Showcase in Seattle. He’s written for IGN and Frank and Funny greeting cards.</p>\n<p>Carl Warmenhoven the manager of the Comedy Underground has said, “He has a youthness about him.” “He enjoys the simple things in life, a grilled cheese sandwich, Bob Ross, whittling, and he gets bored writing his own bio.</p>\n<p>If you were to ask Yogi how he would describe his comedy he would say it’s “Intellectual absurdity.” If you asked him what that means he would say, “My material isn’t smart, but you need to be smart to see how stupid the joke is.”</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/1mb_mg_4142.jpg",
    id: "6704"
}, {
    Name: "Zak Toscani",
    Bio: "<p>Zak Toscani is a Portland based comedian who performs regularly in the Pacific Northwest (Helium Comedy Club Portland, Seattle&#039;s Comedy Underground, Bumbershoot, Funny Over Everything). His style melts like an artisan cheese into both the honest and the silly, much like Dom DeLuise&#039;s lasagna recipe.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/5853_570305192056_5104679_n_0.jpg",
    id: "5919"
} ], App.Show.FIXTURES = [ {
    Name: "All That Could Have Been",
    Copy: "Writers write a lot of things for submission packets that pass through a producer&#039;s inbox and then never see the light of day. This is our chance to perform our hard work and have a little fun in the process. Created and produced by Todd Masterson. With submissions from The Ellen DeGeneres Show, Chelsea Lately, Late Night with Jimmy Fallon, Saturday Night Live, and much, much more. This night is nutty and a whole lot of fun!",
    Bio: "<p>After going on strike from writing Fashion Police, I&#039;ve been submitting to tons of other shows trying to find work. I created this show for writers to read the submissions they&#039;ve written for television shows and magazines that never got them the job. We work really hard and sometimes never get so much as a &quot;thank you.&quot; If we&#039;re not going to be paid in money or employment, we might as well be paid in laughter!<br />\nLast night was the first time I put the show up and it was a hit. I didn&#039;t get any video from the show, but I do have the opening video that I played at the beginning of the night.<br />\nIf this show gets selected for the festival, I&#039;m sure I could put it together with people that will already be there (I&#039;m assuming.) Like Bryan Cook, Eliza Skinner, Brock Wilbur, Solomon Georgio, and any other of my friends that are submitting. I think this show would be a great fit!</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/show-submissions/allthat.png",
    id: "6356"
}, {
    Name: "Baby Talk with Dan Levy &amp; Jensen Karp",
    Copy: "",
    Bio: "<p>Baby Talk is a hilarious multi-media live roundtable show built around comedian and new father Dan Levy’s quest to avoid scarring his new son’s fragile psyche. The funniest names in comedy, including Jensen Karp in the DJ role, come together with the cutest faces in childhood, as a real life 7-year-old will sit down with the group and help explain what it takes to be a cool dad (as if Dan could ever be that).</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/show-submissions/baby_talk_february.jpg",
    id: "6300"
}, {
    Name: "Before You Were Funny",
    Copy: "￼￼Justin Michael and Jacob Reed present Before You Were Funny: the most entertainingly bad comedy show (and podcast) the world has never seen (or heard)! We&#039;ve raided the Awful Sketch Vaults of yesteryear and asked our favorite comedians to bring in their earliest, worst sketches... and perform them LIVE. There’s no time to prepare, no time to memorize lines, and nobody but the writer has read them beforehand. It will BLOW YOUR MIND.",
    Bio: '<p>￼￼Justin Michael and Jacob Reed present Before You Were Funny: the most entertainingly bad comedy show (and podcast) the world has never seen (or heard)! We&#039;ve raided the Awful Sketch Vaults of yesteryear and asked our favorite comedians to bring in their earliest, worst sketches... and perform them LIVE. There’s no time to prepare, no time to memorize lines, and nobody but the writer has read them beforehand. It will BLOW YOUR MIND.</p>\n<p>THE PODCAST / LIVE UCB SHOW<br />\nWe release episodes of the podcast twice a month and perform the show during a regular slot at UCB Los Angeles. We&#039;ve also taken the show to SF Sketchfest, will be going to SXSW, and just completed shooting a video version of the show for Funny or Die. </p>\n<p>Each live show / episode lasts about an hour to an hour and a half. The two of us + ­3 guests present a smattering of the worst sketches, pilots, school projects,  stand­up and anything in between that they ever written as a blind table read while stopping to interrupt and poke fun of things along the way. We glance at scripts beforehand, but our goal is to try and keep things surprising by limiting everyone’s knowledge of the material involved, including our own. The writer is only allowed to read stage direction as not to make the material any better than it is. </p>\n<p>SAMPLE EPISODES!</p>\n<p>Dan Harmon, Mary Holland, Allan Mcleod<br />\n<a href="http://beforeyouwerefunny.com/2013/09/episode-27-dan-harmon-mary-holland-allan-mcleod/">http://beforeyouwerefunny.com/2013/09/episode-27-dan-harmon-mary-holland...</a></p>\n<p>Rob Delaney, Matt Walsh, Casey Wilson (video also provided for this one)<br />\n<a href="http://beforeyouwerefunny.com/2013/01/episode-10-rob-delaney-matt-walsh-casey-wilson/">http://beforeyouwerefunny.com/2013/01/episode-10-rob-delaney-matt-walsh-...</a></p>\n<p>James Adomian, Mary Lynn Rajskub, Daniel Handler<br />\n<a href="http://beforeyouwerefunny.com/2013/01/episode-11-james-adomian-mary-lynn-rajskub-daniel-handler/">http://beforeyouwerefunny.com/2013/01/episode-11-james-adomian-mary-lynn...</a></p>\n<p>A bunch more at <a href="http://www.beforeyouwerefunny.com">www.beforeyouwerefunny.com</a> or <a href="https://itunes.apple.com/us/podcast/before-you-were-funny/id547153481?mt=2">https://itunes.apple.com/us/podcast/before-you-were-funny/id547153481?mt=2</a></p>\n<p>Thank you!<br />\nJustin + Jacob</p>\n',
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/show-submissions/329318_210309669095515_1941054043_o_0.jpg",
    id: "6801"
}, {
    Name: "Brew Haha: The Comedy Show Drinking Game",
    Copy: "The Brew HaHa is Los Angeles’ premiere interactive comedy show/drinking game. One part comedy show, two parts drinking game, Brew Haha is a homegrown cocktail of debauchery and laughter that will make one homesick for the college days. Started by budding comedians in early 2013, The Brew Haha has become an underground sensation to those in the know. Before the first comic goes on stage, rules for the game are explained only to the audience. When comics, unbeknownst to them, break a rule, a light signals and the audience drinks. The rules are simple, but nobody is forced to participate, and the hosts ensure everyone gets home safe. It is a show that evokes that impossibly cool, fun speakeasy one might see in a film or on TV. Except this one is all too real, the comics all too funny, people all too friendly. So if you get the chance, make sure you experience the show that a famous comedian once called &quot;the worst idea for a show ever.&quot;",
    Bio: "<p>Brew Haha is a Los Angeles based interactive comedy show/ drinking game featuring two games, 6 comedians, a couple characters, and, given the right venue, an amazing post show party. Each show has different rules, but operates under the same structure. Here is what one can expect when coming to a Brew HaHa:</p>\n<p> • The HOST of the night comes to the stage and tells the funniest, craziest stories from parties past.</p>\n<p>• The HOST then takes the comics inside (so they can’t hear the rules of the drinking game) and introduces the “Rule Master”. The RM teaches the audience about the “DRINK” sign (every time it lights up, a rule has been broken, and the audience takes a drink) and gives them the rules for the night. There are 5 set rules and 1 audience created rule. See below for some example rules. </p>\n<p>• The HOST comes back out, introduces all of the comics, and has them choose their order for the night out of a hat. Their place in the lineup determines the number of drinks they consume before their set. If you are comic #2, you have two drinks; if you are comic #6, six drinks.</p>\n<p>• The HOST then introduces JIMMY THE BARTENDER, who leads the comics and the audience in the bartenders toast, signifying the beginning of the show. The HOST introduces the first comic and the show begins.</p>\n<p>• During each set the rules broken are counted, and the comic who comes up next has to drink for that many seconds before they perform (ex. If comic #1 breaks 10 rules, comic #2 drinks for 10 seconds).</p>\n<p>• The show always ends with the hosts drinking for the amount of rules broken by the last comic. The rules are simple, but nobody is forced to participate, and the hosts ensure everyone gets home safe.</p>\n<p>• After the show, given the time and space…party time!</p>\n<p>Example Rules:</p>\n<p>• When a comic talks about a romantic relationship, past or present.<br />\n• When a comic talks to a specific member of the audience.<br />\n• When a comic tries to guess a rule.<br />\n• When a comic talks about race.<br />\n• When a comic uses a funny voice, or sings.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/show-submissions/brewhaha.jpg",
    id: "6347"
}, {
    Name: "Competitive Erotic Fan ",
    Copy: "",
    Bio: "<p>Fan Fiction by comedians</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/show-submissions/1353173863178m.jpg",
    id: "5903"
}, {
    Name: "Hot Comedy w/The Spicy News",
    Copy: "Conceived by Portland comedian and Oregon native Craig May, The Spicy News was born when a group of friends believed that it would be funny to watch comedians read celebrity gossip, but only after eating one of the hottest naturally occurring chillies on the planet. After soliciting the help of local hero and champion of industry, Ian Karmel, The Spicy News quickly began to carve out a following of comedy enthusiasts, and masochists alike.\r\n\r\nOver the past year Spicy has solicited help from some of the Portland’s top comedians, and some of LA and NYC’s finest as well, not only including Pete Holmes, Kyle Kinane, Mary Mack, Myq Kaplan, Andy Haynes, Nick Turner, Dave Hill, Brandon Vaughn, Nate Bargatze, and Ian Karmel. Spicy was also recently featured on Oregon Public Broadcasting’s Live Wire Radio, and has been featured at the Brody Theater in Portland, OR, The Comedy Underground in Seattle, WA, and the Bumbershoot Music &amp; Arts Festival.\r\n\r\n&quot;So dumb it&#039;s actually kind of funny&quot; \r\n~The Portland Mercury\r\n\r\nOn a scale from one to ten, Spicy News is incredibly dumb, yet surprisingly refreshing.",
    Bio: "<p>For the show, we would essentially have 5-7 comics attempt to perform their original comedy after eating a habanero pepper, in addition to having a live Spicy News, and a  live Spicy Interview, which you can see examples of in our submission video. Additional info regarding show is in the second half of our submission video.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/show-submissions/spicy_news_0.jpg",
    id: "6734"
}, {
    Name: "Late Night Action w/ Alex Falcone &amp; Bri Pruett",
    Copy: "A live talk show all about the stuff that makes Portland fucking awesome. Featuring local celebrities, comedians, and musical guests, Late Night Action is fast, sharp, and local.\r\n\r\nLNA is hosted by the quick and funny Alex Falcone (Portlandia, Live Wire! Radio, Portland Mercury) and wise-crackin&#039; side kick Bri Pruett (Willamette Week&#039;s Funniest 5) and directed by Caitlin Kunkel (Second City). ",
    Bio: "<p>Late Night Action is a live talk show in the style of Conan if he did his show in a Portland garage. It features a topical monologue, celebrity guests, comedians, and local bands, all focused on the Portland area. LNA is hosted by the quick and funny Alex Falcone (Portlandia, Live Wire! Radio, Portland Mercury) and wise-crackin&#039; side kick Bri Pruett (Willamette Week&#039;s Funniest 5) and directed by Caitlin Kunkel (Second City).</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/show-submissions/square.jpg",
    id: "6585"
}, {
    Name: "Love: A Very Important One Person Show",
    Copy: "",
    Bio: '<p>Here&#039;s the original version at UCB: <a href="http://losangeles.ucbtheatre.com/shows/view/3407">http://losangeles.ucbtheatre.com/shows/view/3407</a><br />\nIt was on Valentine&#039;s Day, but can work outside of the holiday, just make it generally about love.</p>\n<p>Love: The Show<br />\nAll Michael Busch wants to do is finish performing his one man opus -<br />\nLove: The Show. Unfortunately, no one else thinks this is a<br />\ngood idea.</p>\n<p>With:<br />\nStephanie Allynne<br />\nKyle Mooney<br />\nJohnny Pemberton<br />\nPower Violence<br />\nBonafide<br />\nDavid Harris<br />\nGilli Nissim<br />\nMarissa Gallant &amp; Joe Stakun<br />\nBrian Cooperman, Dan Banas, and Amalia Fite<br />\nLindsey Barrow</p>\n<p>Basically, I keep trying to do my pretentious one person show, characters keep interrupting me and I interact with them on stage. </p>\n<p>Again, I think there would be enough people at the festival to do this show.</p>\n',
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/show-submissions/mbuschheadshot3.jpg",
    id: "5899"
}, {
    Name: "No Pun Intendo ",
    Copy: "",
    Bio: '<p>Promotional Blurb: </p>\n<p>Gifted at gaming? Not gifted at gaming?  Who cares? Welcome to No Pun Intendo -  the Nerdist Theater’s first in house video game competition. If you’re there, you’re eligible to play. Produced and hosted by Ron Funches, David Cope, and Bette Bentley. Audience teams will be formed and battles will be fought featuring games like Soul Calibur, Super Smash Bros, and Street Fighter. Special comedian guests and grand prizes await - sponsored by Portland&#039;s very own Ground Kontrol. </p>\n<p>THE FACTS:</p>\n<p> - No Pun Intendo is a comedy gaming contest. Acting as team captains, Ron Funches and David Cope form teams from the audience and pit players against each other<br />\n   on games we&#039;re playing live at the venue. That means we&#039;re bringing our Xbox down, plugging in, the whole nine yards. Comedian guests help mix things up as<br />\n   gamers take each other on. David Cope&#039;s real life fiancé and producer at Funny or Die will be there for post gaming interviews. </p>\n<p> - We&#039;re already a repeat performance at The Nerdist Theater in L.A. Our next show is January 24th.</p>\n<p>COMEDIAN GUESTS: </p>\n<p> - Our last comedian guests included Richard Bain and Brent Weinbach. On Jan 24th we&#039;re featuring Andy Peters and Josh Fadem. Given we&#039;re accepted for Bridgetown<br />\n   this April,  David and Ron would likely find gaming enthusiast comedians already booked for Bridgetown who&#039;d already be in town and pumped to be part of a<br />\n   gaming contest. </p>\n<p>NOTE: </p>\n<p> - The poster we&#039;re supplying is the poster we&#039;ve been using to promote our prior shows. If we&#039;re accepted into Bridgetown we&#039;d update it with the current<br />\n    performers.<br />\n - No video link BUT here&#039;s a photo collection for our last No Pun Intendo at The Nerdist Theater in L.A.:   <a href="http://tinyurl.com/ly7z6al">http://tinyurl.com/ly7z6al</a></p>\n',
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/show-submissions/no_pun_intendo.jpg",
    id: "5921"
}, {
    Name: "PERSONA! with Tony Sam",
    Copy: "Persona! A comedy show with character(s)\r\n\r\nThis unique and hilarious show is full of surprises! Featuring the many faces of Tony Sam (Writer for MTV&#039;s Ridiculousness, G4, Fuel TV) as host along with stand-up comedians performing as their funniest characters,  the show has been called by Laughspin Magazine, &quot;A total riot” and ”a stand out,&quot; at both prior sold-out appearances during the Bridgetown Comedy Festival.\r\n \r\nThe Comedybureau.com says the show is &quot;artistry in comedy at work...spectacular...fantastic&quot;, and the Portland Mercury says it is undeniably “funny”.  While the show features various acts, CultureMob.com says Sam and his multiple characters in Persona! are “particularly terrific” and “some of the best parts.&quot; \r\n\r\nCome experience the unexpected at Persona!",
    Bio: "<p>Persona! A comedy show with character(s)</p>\n<p>This unique and hilarious show is full of surprises! Featuring the many faces of Tony Sam as host along with stand-up comedians performing as their funniest characters,  the show has been called by Laughspin Magazine, &quot;A total riot” and ”a stand out,&quot; at both prior sold-out appearances during the Bridgetown Comedy Festival.</p>\n<p>The Comedybureau.com says the show is &quot;artistry in comedy at work...spectacular...fantastic&quot;, and the Portland Mercury says it is undeniably “funny”.  While the show features various acts, CultureMob.com says Sam and his multiple characters in Persona! are “particularly terrific” and “some of the best parts.&quot; </p>\n<p>Come experience the unexpected at Persona!</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/show-submissions/personablank_copy.jpg",
    id: "6131"
}, {
    Name: "RISK!",
    Copy: "RISK! is a live show and podcast “where people tell true stories they never thought they’d dare to share in public” hosted by Kevin Allison, of the legendary TV sketch comedy troupe The State. The award-winning live show happens monthly in New York and Los Angeles. It’s featured people like Janeane Garofalo, Lisa Lampanelli, Kevin Nealon, Margaret Cho, Marc Maron, Sarah Silverman, Lili Taylor, Rachel Dratch, Andy Borowitz and more, dropping the act and showing a side of themselves we’ve never seen before. The weekly podcast gets hundreds of thousands of downloads each month. Slate.com called it “jaw-dropping, hysterically funny, and just plain touching.”",
    Bio: "<p>RISK! is a live show and podcast “where people tell true stories they never thought they’d dare to share in public” hosted by Kevin Allison, of the legendary TV sketch comedy troupe The State. The award-winning live show happens monthly in New York and Los Angeles. It’s featured people like Janeane Garofalo, Lisa Lampanelli, Kevin Nealon, Margaret Cho, Marc Maron, Sarah Silverman, Lili Taylor, Rachel Dratch, Andy Borowitz and more, dropping the act and showing a side of themselves we’ve never seen before. The weekly podcast gets hundreds of thousands of downloads each month. Slate.com called it “jaw-dropping, hysterically funny, and just plain touching.”</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/show-submissions/renecoverart.jpg",
    id: "6412"
}, {
    Name: "The Blackout Diaries",
    Copy: "The Blackout Diaries is a comedy show were standup comedians, plus ‘regular’ people (cops, firefighters, teachers, etc) tell true drinking stories. Then you, the audience can ask them questions.  Participants also bring photos, voicemails and videos from the events, which are displayed while they tell the stories, to hilarious effect.\r\n\r\nThe show was developed in Chicago, where it regularly sells-out and has been named one of the best live comedy shows (Chicago Tribune, Chicago Reader, and more).  It has appeared in several comedy festivals and was launched as a podcast in late 2013.  Fans describe the show as a &quot;reverse AA meeting&quot; where people  tell hilariously embarrassing stories, only to receive laughter and further encouragement to drink.",
    Bio: "<p>The Blackout Diaries is a comedy show were standup comedians, plus ‘regular’ people (cops, firefighters, teachers, etc) tell true drinking stories. After each person tells a story, the host, Sean Flannery, then moderates a Q&amp;A session where the audience can ask questions about the story (&quot;were you arrested?&quot;, &quot;what happened to the car?&quot;, etc).  The show is multimedia: if people have photos or voicemails or videos from their drinking stories, we display those while they share the story.</p>\n<p>Typically, we book 3 comics and 2 &#039;normal people&#039; per show.  When the show travels, the normal people are usually fans of our podcast or we reach out to local bars or breweries that might be interested in participating.  Either way, we usually find a few avid drinkings who are excited to participate.  For comics, at festivals, we typically pull our them from the festival pool.  The show has appeared at Just For Laughs (Chicago), Laugh Fest (Grand Rapids) and Dallas Comedy Festival.</p>\n<p>The show is 90 minutes long, but can be done as a shorter version.  Past performers on the show include Kyle Kinane, Matt Braunger, Hannibal Burres, and more.  In Chicago, the show averages just under 100 people a week and has been a critics pick in most newspapers.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/show-submissions/latenightbeerrun_lowres.jpg",
    id: "6143"
}, {
    Name: "The Comedy Bull",
    Copy: "",
    Bio: "<p>Competitive Stand Up with elements of improvisation </p>\n<p>Each competitor gets 4 minutes to perform comedy set and being judged by a panel of 3 judges chosen by the producer of the show.</p>\n<p>After 4 minute mark judges may (depending on quality /intensity of the set) allow the performer to continue longer or be stopped  and challenged  to perform one of the following improvisational tasks</p>\n<p>1.Crowd work - comedian asked to interact with the audience.</p>\n<p>2.Rant on the subject - subject is chosen by the judges from one of the suggestions given by  the audience (performer expected to come up with a funny rant on that subject).</p>\n<p>3.&quot;Corrida&quot;- AKA improvisational game of NEW CHOICE - each time the judges ring a bell   - previously said sentence has to be rephrased with the different choice of words </p>\n<p>4. Interpret an image - performer is required to comment /interpret on the random image  projected on screen at that time.</p>\n<p>During those tasks the performers are challenged to hold the interest/engagement of the audience for as long as possible<br />\nPerformer which holds stage the longest ( time of the set before the interruption by the judges + time of the challenge before the interruption by the judges) wins competition and determined to be the funniest performer of the night. </p>\n<p>Three (3) strongest performers move to next round.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/show-submissions/bull_comedian_likearock3_small.jpg",
    id: "5936"
}, {
    Name: "The CrabFeast Podcast",
    Copy: "",
    Bio: '<p>The CrabFeast is a Conversational Storytelling podcast which features comedians and all around funny people.  The podcast is hosted by comedians Ryan Sickler and Jay Larson.  The CrabFeast is released every Toozdee on itunes, stitcher, Sound Cloud, All Things Comedy and of course <a href="http://www.TheCrabFeast.com">www.TheCrabFeast.com</a>.  With a loyal fan base and great guests the CrabFeast hit the ground running in 2012 and has never looked back.  A staple in comedy podcasts, The CrabFeast was nominated for a Stitcher award in 2013 for &quot;Best Comedy Podcast&quot; going up against Adam Carolla, Comedy Bang Bang, Marc Maron and Kevin Smith.  Most recently The CrabFeast was featured on The Pete Holmes show on TBS.  Past guests include, Adam Carolla, Bill Burr, Brandt Tobler, Pete Holmes, Mick Bettancourt, Jen Kirkman, Retta, Steve Lemme, Kevin Heffernan, Chris d&#039;elia, TJ Miller, Bryan Callen, Todd Glass, Tig, Anna Ferris, Nick Thune and many more.  #FTCF  #*****</p>\n',
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/show-submissions/mza_5507055011706856334.255x255-75.jpg",
    id: "6811"
}, {
    Name: "The Mystery Box Show",
    Copy: "",
    Bio: '<p>The Mystery Box Show (<a href="http://www.mysteryboxshow.com">http://www.mysteryboxshow.com</a>) is a live storytelling series based in Portland, OR that focuses on stories of sex and sexuality. Following the traditions of live storytelling set by shows like The Moth and Kevin Allison&#039;s RISK!, The Mystery Box Show features real people sharing true personal stories about the many ways that sex influences our lives. </p>\n<p>Storytellers at The Mystery Box Show have included bestselling authors, nationally touring comedians, an editor from Playboy TV, a sex toy expert, members from the kink community, students, and professionals from all walks of life. With a primary focus on entertainment, it&#039;s often surprising how touching and heartfelt these stories can be while other stories may inspire listeners to chase after recently-awakened desires.</p>\n<p>Performing since April of 2012, The Mystery Box Show has appeared regularly in Portland, OR as a bi-monthly show and putting in special appearances at events such as Wordstock and OMSI After Dark, as well traveling to the 2013 Arse Elektronika festival in San Francisco.  </p>\n<p>For more information, please contact producers Eric Scheur (<a href="mailto:eric@mysteryboxshow.com">eric@mysteryboxshow.com</a>) or Reba Sparrow (<a href="mailto:reba@mysteryboxshow.com">reba@mysteryboxshow.com</a>)</p>\n',
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/show-submissions/mbs-stack02-tag02_500x500.png",
    id: "5871"
}, {
    Name: "Throwing Shade ",
    Copy: "",
    Bio: "<p>Throwing Shade is the irreverent weekly political/absurdist comedy podcast &amp; Funny or Die web series hosted by Upright Citizens Brigade alums and Funny or Die writers Erin Gibson and Bryan Safi. Join Erin and Bryan and laugh at things you’re not supposed to, in person, for a night that we promise will be better than prom.</p>\n<p>Consistently in iTunes top ten comedy podcasts with a 5 star rating and with over 3 million downloads, Throwing Shade has cultivated a devoted and broad fan base - the LGBT community (homosensuals), savvy, smart ladies (feminasties), and straight dudes who “get it” (heterosensitives) - by using humor and absurdity to dismantle the unfair treatment of ladies and gays by politicians, the media, and people who don’t know any better.</p>\n<p>\u2028Winner of Podcast Awards “Best GLBT Podcast” 2013<br />\n\u2028Named one of Paste Magazine’s top 20 comedy podcasts of 2013<br />\n&quot;Lacking any sort of filter, UCB veterans Erin Gibson and Bryan Safi are equal- opportunity offenders, discussing current events with a politically incorrect sense of humor. Their aggressively energetic personalities give the show a bit of a morning shock-jock feel, if shock jocks spent even more time talking about genitals.&quot; – The A.V. Club</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/show-submissions/squareposterpodcastsm.jpg",
    id: "5909"
}, {
    Name: "Thugs, the Musical!",
    Copy: "&quot;Thugs, The Musical&quot; is a short film written and produced by Kevin Avery (head writer on the recent &quot;Totally Biased&quot; on FXX, produced by Chris Rock), about a frustrated, sightly delusional, and extremely non-urban black actor who writes, directs &amp; stars in a disastrous musical to prove to Hollywood and the world that he can &quot;act black.&quot; Starring Kevin, the film also features David Alan Grier, Baron Vaughn, Margaret Cho, Rachel True and Prodigal Sunn from the Wu Tang Clan. The Dallas Weekly calls it an &quot;uproariously funny mockumentary,&quot; and the Texas Black Film Festival director declares it as, &quot;hands down, THE funniest and wittiest film at the TBFF 2012 Fest! Welcome to a new generation of black social parody.&quot; Thugs, The Musical is the winner of the Audience Award for Best Film at 2012 LA Comedy Shorts Film Festival and the 2012 MIX International Film Festival, Best Short Film at the 2012 Montgomery Film Festival, Best Comedy Film at the 2012 San Francisco Black Film Festival, and the winner of both Best Short and Best in Show at the 2012 Tupelo Film Festival.\r\n\r\nJoin us for &quot;Thugs, the Musical - LIVE!&quot; - featuring stand up and live musical performances of songs featured in the film, from Kevin Avery and fellow cast members David Alan Grier and Baron Vaughn, plus special guests Eliza Skinner and Zach Sherwin! Followed by the Portland premiere of the &quot;Thugs, the Musical!&quot; (trt 23 mins)\r\n\r\nHere comes the wrongness! http://www.youtube.com/watch?v=7PUPUI5ElOs",
    Bio: '<p>This show would be the Portland premiere of comedian Kevin Avery&#039;s funny little film, &quot;Thugs, the Musical,&quot; about a frustrated, sightly delusional, and extremely non-urban black actor who writes, directs &amp; stars in a disastrous musical to prove to Hollywood and the world that he can &quot;act black.&quot; Thugs, The Musical is the winner of the Audience Award for Best Film at 2012 LA Comedy Shorts Film Festival and the 2012 MIX International Film Festival, Best Short Film at the 2012 Montgomery Film Festival, Best Comedy Film at the 2012 San Francisco Black Film Festival, and the winner of both Best Short and Best in Show at the 2012 Tupelo Film Festival.</p>\n<p>Prior to screening the movie (TRT 23 mins), the show features stand up and live musical performances of songs featured in &quot;Thugs,&quot; from Kevin Avery and fellow cast members David Alan Grier* and Baron Vaughn, and special guests Eliza Skinner and Zach Sherwin! </p>\n<p>We are putting on this same show in LA at Meltdown and in NY at the Creek and the Cave before Bridgetown - so we don&#039;t have video of the LIVE show yet, but will in March. The links below are to the film and trailer, etc.</p>\n<p>Here&#039;s the trailer: <a href="http://www.youtube.com/watch?v=7PUPUI5ElOs">http://www.youtube.com/watch?v=7PUPUI5ElOs</a><br />\nAnd a private Vimeo link to the whole film (not yet released): <a href="http://vimeo.com/37960463">http://vimeo.com/37960463</a> (password: highfive)<br />\nAnd a private link to the album of songs from the film (not yet released), some of which will be performed live in the show: <a href="https://soundcloud.com/whitesmithent/sets/thugs-the-musical-the-album/s-6ze6C">https://soundcloud.com/whitesmithent/sets/thugs-the-musical-the-album/s-...</a></p>\n<p>* The performers we mentioned here are all confirmed to be a part of the show if it is accepted, except for DAG, who is still tentative. We are also open to comics who are already booked at Bridgetown, instead.</p>\n',
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/show-submissions/thugsposter_small.jpg",
    id: "6673"
}, {
    Name: "Weird and Awesome with Emmett Montgomery",
    Copy: "Weird and Awesome w/ Emmett Montgomery is a monthly parade of wonder and awkward sharing hosted and curated by mustache wizard Emmett Montgomery. Each show features brilliant people doing the things they are really good at doing or something they have never done on stage before. ",
    Bio: "<p>Weird and Awesome with Emmett Montgomery is a love letter to the strangeness and talent that walks among us. Each show features brilliant people doing things outside of their comfort zones or the things they are really good at. Prizes are won! Friends are made! Nightmares are shared and Joy is experienced!</p>\n<p>Travis Vogt and Kevin Clarke will do something amazing!</p>\n<p>There will be a song and story.</p>\n<p>There will be sharing.</p>\n<p>Something awesome will happen.</p>\n<p>A special closing set featuring the dynamic joke telling of a comedian of note will occur.</p>\n<p>We will win prizes made by local arts and crafters!</p>\n<p>* Weird and Awesome with Emmett Montgomery has been a part of both the comedy stage and the theater stage at Bumbershoot over the years. We will format the show to what works best at Bridgetown and will use primarily Bridgetown performers.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/show-submissions/getinline_0.jpg",
    id: "6682"
} ], App.CatchAllController = Ember.ObjectController.extend({}), App.EventsController = Ember.ObjectController.extend({}), 
App.NewspostController = Ember.ObjectController.extend({}), App.NewspostsController = Ember.ArrayController.extend({}), 
App.PerformerController = Ember.ObjectController.extend({
    sortProperties: [ "Tier" ],
    sortAscending: !0
}), App.PerformersController = Ember.ArrayController.extend({
    sortProperties: [ "PhotoUrl" ],
    sortAscending: !0
}), App.ApplicationView = Ember.View.extend({
    didInsertElement: function() {
        var a, b = document.getElementsByTagName("script")[0], c = /^http:/.test(document.location) ? "http" : "https";
        document.getElementById("twitter-wjs") || (a = document.createElement("script"), 
        a.id = "twitter-wjs", a.src = c + "://platform.twitter.com/widgets.js?" + new Date().getTime(), 
        b.parentNode.insertBefore(a, b)), $(".navbar .nav a").on("click", function() {
            $(window).width() <= 768 && $(".navbar-toggle").click();
        });
    }
}), App.HeaderView = Ember.View.extend({
    templateName: "header"
}), App.IndexView = Ember.View.extend({
    didInsertElement: function() {
        var a, b = document.getElementsByTagName("script")[0], c = /^http:/.test(document.location) ? "http" : "https";
        a = document.createElement("script"), a.id = "twitter-wjs", a.src = c + "://platform.twitter.com/widgets.js?" + new Date().getTime(), 
        b.parentNode.insertBefore(a, b);
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
}), App.ShowsView = Ember.View.extend({
    templateName: "shows_gallery",
    didInsertElement: function() {
        $("img.lazy").lazyload({
            effect: "fadeIn"
        });
    }
}), Ember.TEMPLATES._footer = Ember.Handlebars.template(function(a, b, c, d, e) {
    function f(a, b) {
        b.buffer.push("Home");
    }
    function g(a, b) {
        b.buffer.push("Performers");
    }
    function h(a, b) {
        b.buffer.push("History");
    }
    function i(a, b) {
        b.buffer.push("Press");
    }
    function j(a, b) {
        b.buffer.push("Contact");
    }
    this.compilerInfo = [ 4, ">= 1.0.0" ], c = this.merge(c, Ember.Handlebars.helpers), 
    e = e || {};
    var k, l, m, n = "", o = this, p = c.helperMissing;
    return e.buffer.push('<!-- FOOTER -->\n  <footer class="site-footer" role="contentinfo">\n  <div class="container">\n    <div class="social">\n  <ul class="social-buttons">\n    <li class="follow-btn">\n      <a href="https://twitter.com/share" class="twitter-share-button" data-via="bridgetown"  data-related="bridgetown" data-hashtags="bridgetowncomedy">Tweet</a>\n    </li>\n    <li class="tweet-btn">\n      <a href="https://twitter.com/bridgetown" class="twitter-follow-button" data-show-count="false" >Follow @bridgetown</a>\n    </li>\n  </ul>\n</div>\n\n\n    <p>Designed and built by <a href="http://twitter.com/joshuabremer" target="_blank">@joshuabremer</a>. Powered by <a target="_blank" href="http://squarespace.com/">Squarespace</a></p>\n    <ul class="footer-links muted">\n      <li>'), 
    l = c["link-to"] || b && b["link-to"], m = {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        inverse: o.noop,
        fn: o.program(1, f, e),
        contexts: [ b ],
        types: [ "STRING" ],
        data: e
    }, k = l ? l.call(b, "index", m) : p.call(b, "link-to", "index", m), (k || 0 === k) && e.buffer.push(k), 
    e.buffer.push("</li>\n      <li>·</li>\n      <li>"), l = c["link-to"] || b && b["link-to"], 
    m = {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        inverse: o.noop,
        fn: o.program(3, g, e),
        contexts: [ b ],
        types: [ "STRING" ],
        data: e
    }, k = l ? l.call(b, "performers", m) : p.call(b, "link-to", "performers", m), (k || 0 === k) && e.buffer.push(k), 
    e.buffer.push("</li>\n      <li>·</li>\n      <li>"), l = c["link-to"] || b && b["link-to"], 
    m = {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        inverse: o.noop,
        fn: o.program(5, h, e),
        contexts: [ b ],
        types: [ "STRING" ],
        data: e
    }, k = l ? l.call(b, "history", m) : p.call(b, "link-to", "history", m), (k || 0 === k) && e.buffer.push(k), 
    e.buffer.push("</li>\n      <li>·</li>\n      <li>"), l = c["link-to"] || b && b["link-to"], 
    m = {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        inverse: o.noop,
        fn: o.program(7, i, e),
        contexts: [ b ],
        types: [ "STRING" ],
        data: e
    }, k = l ? l.call(b, "press", m) : p.call(b, "link-to", "press", m), (k || 0 === k) && e.buffer.push(k), 
    e.buffer.push('</li>\n      <li>·</li>\n      <li><a href="../about/">About</a></li>\n      <li>·</li>\n      <li>'), 
    l = c["link-to"] || b && b["link-to"], m = {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        inverse: o.noop,
        fn: o.program(9, j, e),
        contexts: [ b ],
        types: [ "STRING" ],
        data: e
    }, k = l ? l.call(b, "contact", m) : p.call(b, "link-to", "contact", m), (k || 0 === k) && e.buffer.push(k), 
    e.buffer.push("</li>\n    </ul>\n  </div>\n</footer>"), n;
}), Ember.TEMPLATES._header = Ember.Handlebars.template(function(a, b, c, d, e) {
    function f(a, b) {
        b.buffer.push("<span>Home</span>");
    }
    function g(a, b) {
        b.buffer.push("<span>Performers</span>");
    }
    function h(a, b) {
        b.buffer.push("<span>Shows</span>");
    }
    function i(a, b) {
        b.buffer.push("<span>History</span>");
    }
    function j(a, b) {
        b.buffer.push("<span>Press</span>");
    }
    function k(a, b) {
        b.buffer.push("<span>Contact</span>");
    }
    this.compilerInfo = [ 4, ">= 1.0.0" ], c = this.merge(c, Ember.Handlebars.helpers), 
    e = e || {};
    var l, m, n, o = "", p = this, q = c.helperMissing;
    return e.buffer.push('<div class="navbar navbar-inverse navbar-fixed-top">\n  <div class="container">\n    <div class="navbar-header">\n      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n      </button>\n        <span class="navbar-brand"><img src="/assets/logo-long-inverse.png" /></span>\n    </div>\n    <div class="navbar-collapse collapse">\n      <ul class="nav navbar-nav">\n        <li class="header-color1">'), 
    m = c["link-to"] || b && b["link-to"], n = {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        inverse: p.noop,
        fn: p.program(1, f, e),
        contexts: [ b ],
        types: [ "STRING" ],
        data: e
    }, l = m ? m.call(b, "index", n) : q.call(b, "link-to", "index", n), (l || 0 === l) && e.buffer.push(l), 
    e.buffer.push('</li>\n        <li class="header-color2">'), m = c["link-to"] || b && b["link-to"], 
    n = {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        inverse: p.noop,
        fn: p.program(3, g, e),
        contexts: [ b ],
        types: [ "STRING" ],
        data: e
    }, l = m ? m.call(b, "performers", n) : q.call(b, "link-to", "performers", n), (l || 0 === l) && e.buffer.push(l), 
    e.buffer.push('</li>\n        <li class="header-color2">'), m = c["link-to"] || b && b["link-to"], 
    n = {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        inverse: p.noop,
        fn: p.program(5, h, e),
        contexts: [ b ],
        types: [ "STRING" ],
        data: e
    }, l = m ? m.call(b, "shows", n) : q.call(b, "link-to", "shows", n), (l || 0 === l) && e.buffer.push(l), 
    e.buffer.push('</li>\n       \n        <li class="header-color3">'), m = c["link-to"] || b && b["link-to"], 
    n = {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        inverse: p.noop,
        fn: p.program(7, i, e),
        contexts: [ b ],
        types: [ "STRING" ],
        data: e
    }, l = m ? m.call(b, "history", n) : q.call(b, "link-to", "history", n), (l || 0 === l) && e.buffer.push(l), 
    e.buffer.push('</li>\n        <li class="header-color4">'), m = c["link-to"] || b && b["link-to"], 
    n = {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        inverse: p.noop,
        fn: p.program(9, j, e),
        contexts: [ b ],
        types: [ "STRING" ],
        data: e
    }, l = m ? m.call(b, "press", n) : q.call(b, "link-to", "press", n), (l || 0 === l) && e.buffer.push(l), 
    e.buffer.push('</li>\n        \n\n\n        <li class="header-color5">'), m = c["link-to"] || b && b["link-to"], 
    n = {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        inverse: p.noop,
        fn: p.program(11, k, e),
        contexts: [ b ],
        types: [ "STRING" ],
        data: e
    }, l = m ? m.call(b, "contact", n) : q.call(b, "link-to", "contact", n), (l || 0 === l) && e.buffer.push(l), 
    e.buffer.push('</li>\n        \n      </ul>\n      <div class="navbar-form navbar-right">\n        <a class="btn btn-default" target="_blank" href="http://google.com">Tickets</a>\n      </div>\n    </div><!--/.navbar-collapse -->\n  </div>\n</div>\n'), 
    o;
}), Ember.TEMPLATES._news = Ember.Handlebars.template(function(a, b, c, d, e) {
    this.compilerInfo = [ 4, ">= 1.0.0" ], c = this.merge(c, Ember.Handlebars.helpers), 
    e = e || {}, e.buffer.push('\n<div class="newspost">\n  <h3 class="newspost-title">2014 Site is Up!</h3>\n  <p>March, 10th, 2014</p>\n  <div class="newspost-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>\n</div>\n\n\n\n');
}), Ember.TEMPLATES._recent_tweets = Ember.Handlebars.template(function(a, b, c, d, e) {
    this.compilerInfo = [ 4, ">= 1.0.0" ], c = this.merge(c, Ember.Handlebars.helpers), 
    e = e || {}, e.buffer.push('<a class="twitter-timeline" href="https://twitter.com/bridgetown" data-widget-id="432300245716713474">Tweets by @bridgetown</a>\n\n\n\n');
}), Ember.TEMPLATES._sponsors = Ember.Handlebars.template(function(a, b, c, d, e) {
    this.compilerInfo = [ 4, ">= 1.0.0" ], c = this.merge(c, Ember.Handlebars.helpers), 
    e = e || {}, e.buffer.push('<div id="lg">\n  <div class="container w">\n    <h1>SPONSORS</h1>\n    <div class="row centered">\n      <div class="col-xs-4 col-sm-3 col-md-2">\n        <img class="img-responsive" src="assets/c01.gif" alt="">\n      </div><!-- col-xs-4 col-sm-3 col-md-2 -->\n\n      <div class="col-xs-4 col-sm-3 col-md-2">\n        <img class="img-responsive" src="assets/c02.gif" alt="">\n      </div><!-- col-xs-4 col-sm-3 col-md-2 -->\n\n      <div class="col-xs-4 col-sm-3 col-md-2">\n        <img class="img-responsive" src="assets/c03.gif" alt="">\n      </div><!-- col-xs-4 col-sm-3 col-md-2 -->\n\n      <div class="col-xs-4 col-sm-3 col-md-2">\n        <img class="img-responsive" src="assets/c04.gif" alt="">\n      </div><!-- col-xs-4 col-sm-3 col-md-2 -->\n\n      <div class="col-xs-4 col-sm-3 col-md-2">\n        <img class="img-responsive" src="assets/c05.gif" alt="">\n      </div><!-- col-xs-4 col-sm-3 col-md-2 -->\n\n      <div class="col-xs-4 col-sm-3 col-md-2">\n        <img class="img-responsive" src="assets/c05.gif" alt="">\n      </div><!-- col-xs-4 col-sm-3 col-md-2 -->\n      <div class="col-xs-4 col-sm-3 col-md-2">\n        <img class="img-responsive" src="assets/c01.gif" alt="">\n      </div><!-- col-xs-4 col-sm-3 col-md-2 -->\n\n      <div class="col-xs-4 col-sm-3 col-md-2">\n        <img class="img-responsive" src="assets/c02.gif" alt="">\n      </div><!-- col-xs-4 col-sm-3 col-md-2 -->\n\n      <div class="col-xs-4 col-sm-3 col-md-2">\n        <img class="img-responsive" src="assets/c03.gif" alt="">\n      </div><!-- col-xs-4 col-sm-3 col-md-2 -->\n\n      <div class="col-xs-4 col-sm-3 col-md-2">\n        <img class="img-responsive" src="assets/c04.gif" alt="">\n      </div><!-- col-xs-4 col-sm-3 col-md-2 -->\n\n      <div class="col-xs-4 col-sm-3 col-md-2">\n        <img class="img-responsive" src="assets/c05.gif" alt="">\n      </div><!-- col-xs-4 col-sm-3 col-md-2 -->\n\n      <div class="col-xs-4 col-sm-3 col-md-2">\n        <img class="img-responsive" src="assets/c05.gif" alt="">\n      </div><!-- col-xs-4 col-sm-3 col-md-2 -->\n    </div><!-- row -->\n  </div><!-- container -->\n</div>');
}), Ember.TEMPLATES.application = Ember.Handlebars.template(function(a, b, c, d, e) {
    this.compilerInfo = [ 4, ">= 1.0.0" ], c = this.merge(c, Ember.Handlebars.helpers), 
    e = e || {};
    var f, g, h, i = "", j = c.helperMissing, k = this.escapeExpression;
    return e.buffer.push('<div id="wrap">\n  '), e.buffer.push(k((g = c.partial || b && b.partial, 
    h = {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        contexts: [ b ],
        types: [ "STRING" ],
        data: e
    }, g ? g.call(b, "header", h) : j.call(b, "partial", "header", h)))), e.buffer.push('\n\n  \n  <div class="main"><div class="row">\n    <div class="container">\n      <div class="row">\n        '), 
    e.buffer.push(k((g = c.outlet || b && b.outlet, h = {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        contexts: [ b ],
        types: [ "STRING" ],
        data: e
    }, g ? g.call(b, "jumbotron", h) : j.call(b, "outlet", "jumbotron", h)))), e.buffer.push("\n      </div>\n    </div>\n  "), 
    f = c._triageMustache.call(b, "outlet", {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        contexts: [ b ],
        types: [ "ID" ],
        data: e
    }), (f || 0 === f) && e.buffer.push(f), e.buffer.push('\n  </div>\n  <div id="push"></div>\n</div></div>\n\n'), 
    e.buffer.push(k((g = c.partial || b && b.partial, h = {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        contexts: [ b ],
        types: [ "STRING" ],
        data: e
    }, g ? g.call(b, "footer", h) : j.call(b, "partial", "footer", h)))), e.buffer.push('\n\n\n  <!-- MODAL FOR CONTACT -->\n  <!-- Modal -->\n  <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\n    <div class="modal-dialog">\n      <div class="modal-content">\n        <div class="modal-header">\n          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\n          <h4 class="modal-title" id="myModalLabel">contact us</h4>\n        </div>\n        <div class="modal-body">\n            <div class="row centered">\n              <p>We are available 24/7, so don\'t hesitate to contact us.</p>\n              <p>\n                Somestreet Ave, 987<br/>\n            London, UK.<br/>\n            +44 8948-4343<br/>\n            hi@blacktie.co\n              </p>\n              <div id="mapwrap">\n   \n          </div>  \n            </div>\n        </div>\n        <div class="modal-footer">\n          <button type="button" class="btn btn-danger" data-dismiss="modal">Save & Go</button>\n        </div>\n      </div><!-- /.modal-content -->\n    </div><!-- /.modal-dialog -->\n  </div><!-- /.modal -->\n'), 
    i;
}), Ember.TEMPLATES.catch_all = Ember.Handlebars.template(function(a, b, c, d, e) {
    this.compilerInfo = [ 4, ">= 1.0.0" ], c = this.merge(c, Ember.Handlebars.helpers), 
    e = e || {};
    var f, g = "", h = this.escapeExpression;
    return e.buffer.push('<div class="row">\n  <div class="jumbotron jumbotron-bg1 jumbotron-dark jumbotron-index">\n    <div class="container">\n      <div class="row centered">\n        <div class="col-lg-8 col-lg-offset-2">\n        <h1>'), 
    f = c._triageMustache.call(b, "collection.title", {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        contexts: [ b ],
        types: [ "ID" ],
        data: e
    }), (f || 0 === f) && e.buffer.push(f), e.buffer.push('</h1>\n        </div>\n      </div><!-- row -->\n    </div><!-- container -->\n  </div><!-- headerwrap -->\n</div>\n<div class="container main-content">\n  '), 
    e.buffer.push(h(c._triageMustache.call(b, "mainContent", {
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
    return e.buffer.push('\n  <div class="jumbotron jumbotron-minor jumbotron-color-1  jumbotron-page-header">\n    <div class="container">\n      <div class="row centered">\n        <div class="col-lg-8 col-lg-offset-2">\n        <h1>'), 
    f = c._triageMustache.call(b, "collection.title", {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        contexts: [ b ],
        types: [ "ID" ],
        data: e
    }), (f || 0 === f) && e.buffer.push(f), e.buffer.push('</h1>\n        </div>\n      </div><!-- row -->\n    </div><!-- container -->\n  </div><!-- headerwrap -->\n\n<div class="container main-content">\n  '), 
    e.buffer.push(h(c._triageMustache.call(b, "mainContent", {
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
}), Ember.TEMPLATES.history = Ember.Handlebars.template(function(a, b, c, d, e) {
    this.compilerInfo = [ 4, ">= 1.0.0" ], c = this.merge(c, Ember.Handlebars.helpers), 
    e = e || {};
    var f, g = "", h = this.escapeExpression;
    return e.buffer.push('\n  <div class="jumbotron jumbotron-minor jumbotron-color-1  jumbotron-page-header">\n    <div class="container">\n      <div class="row centered">\n        <div class="col-lg-8 col-lg-offset-2">\n        <h1>'), 
    f = c._triageMustache.call(b, "collection.title", {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        contexts: [ b ],
        types: [ "ID" ],
        data: e
    }), (f || 0 === f) && e.buffer.push(f), e.buffer.push('</h1>\n        </div>\n      </div><!-- row -->\n    </div><!-- container -->\n  </div><!-- headerwrap -->\n\n<div class="container main-content">\n  '), 
    e.buffer.push(h(c._triageMustache.call(b, "mainContent", {
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
    return e.buffer.push('<div class="jumbotron jumbotron-color-1 jumbotron-page-header">\n  <div class="container">\n    <div class="row centered">\n      <div class="col-lg-8 col-lg-offset-2 text-center">\n      <div class="header-logo"><img src="/assets/logo-inverse.png" /></div>\n      \n      <h3>Portland, OR</h3>\n      <h3>May 8th - May 11th</h3>\n      </div>\n    </div><!-- row -->\n  </div><!-- container -->\n</div><!-- headerwrap -->\n\n<div class="main-content">\n<div class="container">\n  <div class="row centered">\n    <div class="col-sm-6">\n      <h3>Buy Tickets!</h3>\n      <p>Looking to buy tickets? Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>\n      <h3>\n        <a href="http://google.com" class="btn btn-primary btn-lg btn-block">\n        Buy Tickets!</a>\n      </h3>\n      '), 
    e.buffer.push(j((f = c.partial || b && b.partial, g = {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        contexts: [ b ],
        types: [ "STRING" ],
        data: e
    }, f ? f.call(b, "news", g) : i.call(b, "partial", "news", g)))), e.buffer.push('\n    </div><!-- col-lg-6 -->\n\n    <div class="col-sm-6">\n      <h3>@bridgetown</h3>\n      '), 
    e.buffer.push(j((f = c.partial || b && b.partial, g = {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        contexts: [ b ],
        types: [ "STRING" ],
        data: e
    }, f ? f.call(b, "recent_tweets", g) : i.call(b, "partial", "recent_tweets", g)))), 
    e.buffer.push('\n    </div><!-- col-lg-6 -->\n    <div class="clearfix"></div>\n  </div><!-- row -->\n  <br>\n  <br>\n</div><!-- container -->\n\n\n\n'), 
    e.buffer.push(j((f = c.partial || b && b.partial, g = {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        contexts: [ b ],
        types: [ "STRING" ],
        data: e
    }, f ? f.call(b, "sponsors", g) : i.call(b, "partial", "sponsors", g)))), e.buffer.push("\n</div>"), 
    h;
}), Ember.TEMPLATES.jumbotron_index = Ember.Handlebars.template(function(a, b, c, d, e) {
    this.compilerInfo = [ 4, ">= 1.0.0" ], c = this.merge(c, Ember.Handlebars.helpers), 
    e = e || {}, e.buffer.push('<div class="jumbotron jumbotron-bg1 jumbotron-dark jumbotron-color-5  jumbotron-page-header">\n  <div class="container">\n    <div class="row centered">\n      <div class="col-lg-8 col-lg-offset-2">\n      <h1>Bridgetown Comedy Festival 2014</h1>\n      <h2>May 8th - May 11th</h2>\n      </div>\n    </div><!-- row -->\n  </div><!-- container -->\n</div><!-- headerwrap -->');
}), Ember.TEMPLATES.loading = Ember.Handlebars.template(function(a, b, c, d, e) {
    this.compilerInfo = [ 4, ">= 1.0.0" ], c = this.merge(c, Ember.Handlebars.helpers), 
    e = e || {};
    var f, g, h = "", i = c.helperMissing, j = this.escapeExpression;
    return e.buffer.push(' <div class="row"> <div class="jumbotron jumbotron-default">\n \n   <div class="container main-content">\n    <h1 class="text-center">Loading...</h1>\n      <h2>&nbsp;</h2>\n      <h1>'), 
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
    }, f ? f.call(b, g) : i.call(b, "x-spinner", g)))), e.buffer.push("</h1>\n      <h2>&nbsp;</h2>\n    </div>\n  </div>\n</div>"), 
    h;
}), Ember.TEMPLATES.newspost = Ember.Handlebars.template(function(a, b, c, d, e) {
    this.compilerInfo = [ 4, ">= 1.0.0" ], c = this.merge(c, Ember.Handlebars.helpers), 
    e = e || {};
    var f, g = "", h = this.escapeExpression;
    return e.buffer.push('<div class="container main-content">\n  <h2>'), f = c._triageMustache.call(b, "title", {
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
            inverse: l.noop,
            fn: l.program(2, g, b),
            contexts: [ a, a ],
            types: [ "STRING", "ID" ],
            data: b
        }, d = e ? e.call(a, "newspost", "newspost", f) : m.call(a, "link-to", "newspost", "newspost", f), 
        (d || 0 === d) && b.buffer.push(d), b.buffer.push("</h3>\n      <p>"), b.buffer.push(n((e = c.humanDate || a && a.humanDate, 
        f = {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            contexts: [ a ],
            types: [ "ID" ],
            data: b
        }, e ? e.call(a, "newspost.publishOn", f) : m.call(a, "humanDate", "newspost.publishOn", f)))), 
        b.buffer.push('</p>\n      <div class="newspost-content">'), e = c.createExcerpt || a && a.createExcerpt, 
        f = {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            contexts: [ a, a, a ],
            types: [ "ID", "INTEGER", "STRING" ],
            data: b
        }, d = e ? e.call(a, "newspost.htmlContent", 100, "... Read More...", f) : m.call(a, "createExcerpt", "newspost.htmlContent", 100, "... Read More...", f), 
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
    var h, i, j, k = "", l = this, m = c.helperMissing, n = this.escapeExpression;
    return e.buffer.push(n((i = c.debug || b && b.debug, j = {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        contexts: [ b ],
        types: [ "ID" ],
        data: e
    }, i ? i.call(b, "controller", j) : m.call(b, "debug", "controller", j)))), e.buffer.push("\n "), 
    h = c.each.call(b, "newspost", "in", "controller", {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        inverse: l.noop,
        fn: l.program(1, f, e),
        contexts: [ b, b, b ],
        types: [ "ID", "ID", "ID" ],
        data: e
    }), (h || 0 === h) && e.buffer.push(h), e.buffer.push("\n\n\n"), k;
}), Ember.TEMPLATES.performer = Ember.Handlebars.template(function(a, b, c, d, e) {
    function f(a, b) {
        b.buffer.push("← All Performers");
    }
    this.compilerInfo = [ 4, ">= 1.0.0" ], c = this.merge(c, Ember.Handlebars.helpers), 
    e = e || {};
    var g, h, i, j = "", k = this.escapeExpression, l = this, m = c.helperMissing;
    return e.buffer.push('\n  <div class="jumbotron jumbotron-tiny jumbotron-color-2 jumbotron-page-header">\n    <div class="container">\n      <div class="row centered">\n        <div class="col-lg-8 col-lg-offset-2">\n        <h2>'), 
    g = c._triageMustache.call(b, "Name", {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        contexts: [ b ],
        types: [ "ID" ],
        data: e
    }), (g || 0 === g) && e.buffer.push(g), e.buffer.push('</h2>\n        </div>\n      </div><!-- row -->\n    </div><!-- container -->\n  </div><!-- headerwrap -->\n\n<div class="container single-performer main-content">\n  <div class="row">\n\n    <div class="col-sm-4 text-center">\n      <p><img class="img-responsive performer-headshot" '), 
    e.buffer.push(k(c["bind-attr"].call(b, {
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
    }))), e.buffer.push(' /></p>\n    </div>\n    <div class="col-sm-8">\n      <p>\n        '), 
    e.buffer.push(k(c._triageMustache.call(b, "Bio", {
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
    }))), e.buffer.push("\n      </p>\n      <p>\n        "), h = c["link-to"] || b && b["link-to"], 
    i = {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        inverse: l.noop,
        fn: l.program(1, f, e),
        contexts: [ b ],
        types: [ "STRING" ],
        data: e
    }, g = h ? h.call(b, "performers", i) : m.call(b, "link-to", "performers", i), (g || 0 === g) && e.buffer.push(g), 
    e.buffer.push("\n      </p>\n    </div>\n  </div>\n</div>\n\n\n\n\n\n\n\n\n\n\n\n"), 
    j;
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
        var d, e, f, i = "";
        return b.buffer.push('\n    <div class="col-xs-6 col-sm-6 col-sm-4 col-md-3 col-lg-2 performer-box">\n      <div class="performer-thumbnail">\n        '), 
        e = c["link-to"] || a && a["link-to"], f = {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            inverse: l.noop,
            fn: l.program(2, g, b),
            contexts: [ a, a ],
            types: [ "STRING", "ID" ],
            data: b
        }, d = e ? e.call(a, "performer", "performer", f) : m.call(a, "link-to", "performer", "performer", f), 
        (d || 0 === d) && b.buffer.push(d), b.buffer.push("\n      </div>\n      <legend>\n        "), 
        e = c["link-to"] || a && a["link-to"], f = {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            inverse: l.noop,
            fn: l.program(4, h, b),
            contexts: [ a, a ],
            types: [ "STRING", "ID" ],
            data: b
        }, d = e ? e.call(a, "performer", "performer", f) : m.call(a, "link-to", "performer", "performer", f), 
        (d || 0 === d) && b.buffer.push(d), b.buffer.push("\n      </legend>\n    </div>\n    "), 
        i;
    }
    function g(a, b) {
        var d = "";
        return b.buffer.push('\n        <img class="lazy img-responsive" width="300" height="300" '), 
        b.buffer.push(k(c["bind-attr"].call(a, {
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
        }))), b.buffer.push(" />\n        "), d;
    }
    function h(a, b) {
        var d = "";
        return b.buffer.push("\n          "), b.buffer.push(k(c._triageMustache.call(a, "performer.Name", {
            hash: {
                unescaped: "true"
            },
            hashTypes: {
                unescaped: "STRING"
            },
            hashContexts: {
                unescaped: a
            },
            contexts: [ a ],
            types: [ "ID" ],
            data: b
        }))), b.buffer.push("\n        "), d;
    }
    this.compilerInfo = [ 4, ">= 1.0.0" ], c = this.merge(c, Ember.Handlebars.helpers), 
    e = e || {};
    var i, j = "", k = this.escapeExpression, l = this, m = c.helperMissing;
    return e.buffer.push('\n<div class="jumbotron jumbotron-bg1 jumbotron-dark jumbotron-performers jumbotron-color-2  jumbotron-page-header">\n  <div class="container">\n    <div class="row centered">\n      <div class="col-lg-8 col-lg-offset-2">\n      <h1>Performers</h1>\n      </div>\n    </div><!-- row -->\n  </div><!-- container -->\n</div><!-- headerwrap -->\n<div class="container main-content">\n  <div class="row">\n    '), 
    i = c.each.call(b, "performer", "in", "controller", {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        inverse: l.noop,
        fn: l.program(1, f, e),
        contexts: [ b, b, b ],
        types: [ "ID", "ID", "ID" ],
        data: e
    }), (i || 0 === i) && e.buffer.push(i), e.buffer.push("\n  </div>\n</div>\n"), j;
}), Ember.TEMPLATES.press = Ember.Handlebars.template(function(a, b, c, d, e) {
    this.compilerInfo = [ 4, ">= 1.0.0" ], c = this.merge(c, Ember.Handlebars.helpers), 
    e = e || {};
    var f, g = "", h = this.escapeExpression;
    return e.buffer.push('\n  <div class="jumbotron jumbotron-minor jumbotron-color-1  jumbotron-page-header">\n    <div class="container">\n      <div class="row centered">\n        <div class="col-lg-8 col-lg-offset-2">\n        <h1>'), 
    f = c._triageMustache.call(b, "collection.title", {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        contexts: [ b ],
        types: [ "ID" ],
        data: e
    }), (f || 0 === f) && e.buffer.push(f), e.buffer.push('</h1>\n        </div>\n      </div><!-- row -->\n    </div><!-- container -->\n  </div><!-- headerwrap -->\n\n<div class="container main-content">\n  '), 
    e.buffer.push(h(c._triageMustache.call(b, "mainContent", {
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
}), Ember.TEMPLATES.schedule = Ember.Handlebars.template(function(a, b, c, d, e) {
    this.compilerInfo = [ 4, ">= 1.0.0" ], c = this.merge(c, Ember.Handlebars.helpers), 
    e = e || {};
    var f = "", g = this.escapeExpression;
    return e.buffer.push('\n  <div class="jumbotron jumbotron-minor jumbotron-color-1  jumbotron-page-header">\n    <div class="container">\n      <div class="row centered">\n        <div class="col-lg-8 col-lg-offset-2">\n        <h1>Schedule</h1>\n        </div>\n      </div><!-- row -->\n    </div><!-- container -->\n  </div><!-- headerwrap -->\n\n<div class="container main-content">\n  '), 
    e.buffer.push(g(c._triageMustache.call(b, "mainContent", {
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
    }))), e.buffer.push("\n</div>\n"), f;
}), Ember.TEMPLATES.show = Ember.Handlebars.template(function(a, b, c, d, e) {
    function f(a, b) {
        b.buffer.push("← All Shows");
    }
    this.compilerInfo = [ 4, ">= 1.0.0" ], c = this.merge(c, Ember.Handlebars.helpers), 
    e = e || {};
    var g, h, i, j = "", k = this.escapeExpression, l = this, m = c.helperMissing;
    return e.buffer.push('\n  <div class="jumbotron jumbotron-tiny jumbotron-color-2 jumbotron-page-header">\n    <div class="container">\n      <div class="row centered">\n        <div class="col-lg-8 col-lg-offset-2">\n        <h2>'), 
    g = c._triageMustache.call(b, "Name", {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        contexts: [ b ],
        types: [ "ID" ],
        data: e
    }), (g || 0 === g) && e.buffer.push(g), e.buffer.push('</h2>\n        </div>\n      </div><!-- row -->\n    </div><!-- container -->\n  </div><!-- headerwrap -->\n\n<div class="container single-performer main-content">\n  <div class="row">\n\n    <div class="col-sm-4 text-center">\n      <p><img class="img-responsive performer-headshot" '), 
    e.buffer.push(k(c["bind-attr"].call(b, {
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
    }))), e.buffer.push(' /></p>\n    </div>\n    <div class="col-sm-8">\n      <p>\n        '), 
    e.buffer.push(k(c._triageMustache.call(b, "Copy", {
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
    }))), e.buffer.push("\n        "), e.buffer.push(k(c._triageMustache.call(b, "Bio", {
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
    }))), e.buffer.push("\n      </p>\n      <p>\n        "), h = c["link-to"] || b && b["link-to"], 
    i = {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        inverse: l.noop,
        fn: l.program(1, f, e),
        contexts: [ b ],
        types: [ "STRING" ],
        data: e
    }, g = h ? h.call(b, "shows", i) : m.call(b, "link-to", "shows", i), (g || 0 === g) && e.buffer.push(g), 
    e.buffer.push("\n      </p>\n    </div>\n  </div>\n</div>\n\n\n\n\n\n\n\n\n\n\n\n"), 
    j;
}), Ember.TEMPLATES.shows = Ember.Handlebars.template(function(a, b, c, d, e) {
    this.compilerInfo = [ 4, ">= 1.0.0" ], c = this.merge(c, Ember.Handlebars.helpers), 
    e = e || {};
    var f = "", g = this.escapeExpression;
    return e.buffer.push(g(c.view.call(b, "App.ShowsView", {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        contexts: [ b ],
        types: [ "ID" ],
        data: e
    }))), e.buffer.push("\n\n\n"), f;
}), Ember.TEMPLATES.shows_gallery = Ember.Handlebars.template(function(a, b, c, d, e) {
    function f(a, b) {
        var d, e, f, i = "";
        return b.buffer.push('\n    <div class="col-xs-6 col-sm-6 col-sm-4 col-md-3 col-lg-2 performer-box">\n      <div class="performer-thumbnail">\n        '), 
        e = c["link-to"] || a && a["link-to"], f = {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            inverse: l.noop,
            fn: l.program(2, g, b),
            contexts: [ a, a ],
            types: [ "STRING", "ID" ],
            data: b
        }, d = e ? e.call(a, "show", "show", f) : m.call(a, "link-to", "show", "show", f), 
        (d || 0 === d) && b.buffer.push(d), b.buffer.push("\n      </div>\n      <legend>\n        "), 
        e = c["link-to"] || a && a["link-to"], f = {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            inverse: l.noop,
            fn: l.program(4, h, b),
            contexts: [ a, a ],
            types: [ "STRING", "ID" ],
            data: b
        }, d = e ? e.call(a, "show", "show", f) : m.call(a, "link-to", "show", "show", f), 
        (d || 0 === d) && b.buffer.push(d), b.buffer.push("\n      </legend>\n    </div>\n    "), 
        i;
    }
    function g(a, b) {
        var d = "";
        return b.buffer.push('\n        <img class="lazy img-responsive" width="300" height="300" '), 
        b.buffer.push(k(c["bind-attr"].call(a, {
            hash: {
                "data-original": "show.headshot300"
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
        }))), b.buffer.push(" />\n        "), d;
    }
    function h(a, b) {
        var d = "";
        return b.buffer.push("\n          "), b.buffer.push(k(c._triageMustache.call(a, "show.Name", {
            hash: {
                unescaped: "true"
            },
            hashTypes: {
                unescaped: "STRING"
            },
            hashContexts: {
                unescaped: a
            },
            contexts: [ a ],
            types: [ "ID" ],
            data: b
        }))), b.buffer.push("\n        "), d;
    }
    this.compilerInfo = [ 4, ">= 1.0.0" ], c = this.merge(c, Ember.Handlebars.helpers), 
    e = e || {};
    var i, j = "", k = this.escapeExpression, l = this, m = c.helperMissing;
    return e.buffer.push('\n<div class="jumbotron jumbotron-bg1 jumbotron-dark jumbotron-performers jumbotron-color-2  jumbotron-page-header">\n  <div class="container">\n    <div class="row centered">\n      <div class="col-lg-8 col-lg-offset-2">\n      <h1>Shows</h1>\n      </div>\n    </div><!-- row -->\n  </div><!-- container -->\n</div><!-- headerwrap -->\n<div class="container main-content">\n  <div class="row">\n    '), 
    i = c.each.call(b, "show", "in", "controller", {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        inverse: l.noop,
        fn: l.program(1, f, e),
        contexts: [ b, b, b ],
        types: [ "ID", "ID", "ID" ],
        data: e
    }), (i || 0 === i) && e.buffer.push(i), e.buffer.push("\n  </div>\n</div>\n"), j;
}), Ember.TEMPLATES.venues = Ember.Handlebars.template(function(a, b, c, d, e) {
    this.compilerInfo = [ 4, ">= 1.0.0" ], c = this.merge(c, Ember.Handlebars.helpers), 
    e = e || {};
    var f, g = "", h = this.escapeExpression;
    return e.buffer.push('\n  <div class="jumbotron jumbotron-minor jumbotron-color-5  jumbotron-page-header">\n    <div class="container">\n      <div class="row centered">\n        <div class="col-lg-8 col-lg-offset-2">\n        <h1>'), 
    f = c._triageMustache.call(b, "collection.title", {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        contexts: [ b ],
        types: [ "ID" ],
        data: e
    }), (f || 0 === f) && e.buffer.push(f), e.buffer.push('</h1>\n        </div>\n      </div><!-- row -->\n    </div><!-- container -->\n  </div><!-- headerwrap -->\n\n<div class="container main-content">\n  '), 
    e.buffer.push(h(c._triageMustache.call(b, "mainContent", {
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
}), App.Router.reopen(window.history && window.history.pushState && isProduction() ? {
    location: "history"
} : {
    location: "none"
}), App.Router.map(function() {
    this.resource("events"), this.resource("events", {
        path: "/events/:events_id"
    }), this.resource("performers"), this.resource("performer", {
        path: "/performer/:id"
    }), this.resource("shows"), this.resource("show", {
        path: "/show/:id"
    }), this.route("schedule"), this.route("venues"), this.route("history"), this.route("press"), 
    this.route("contact"), this.route("catch_all", {
        path: "*:"
    });
}), Ember.Route.reopen({
    render: function() {
        this._super(), window.scrollTo(0, 0);
    },
    activate: function() {
        this._super(), console.log(this.get("title")), document.title = this.get("title") ? this.get("title") + " | Bridgetown Comedy Festival" : "Bridgetown Comedy Festival";
    }
}), App.VenuesRoute = Ember.Route.extend({
    model: function() {
        return _retrievePageJSON("venues");
    },
    title: "Venues"
}), App.ShowsRoute = Ember.Route.extend({
    model: function() {
        return _retrievePageJSON("shows");
    },
    title: "Shows"
}), App.HistoryRoute = Ember.Route.extend({
    model: function() {
        return _retrievePageJSON("history");
    },
    title: "History"
}), App.PressRoute = Ember.Route.extend({
    model: function() {
        return _retrievePageJSON("press");
    },
    title: "Press"
}), App.ContactRoute = Ember.Route.extend({
    model: function() {
        return _retrievePageJSON("contact");
    },
    title: "Contact"
}), App.ApplicationRoute = Ember.Route.extend({
    setupController: function() {}
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
    model: function() {},
    renderTemplate: function() {
        this.render("index"), this.render("jumbotron_index", {
            outlet: "jumbotron"
        });
    }
}), App.NewspostsRoute = Ember.Route.extend({
    model: function() {}
}), App.PerformerRoute = Ember.Route.extend({
    model: function(a) {
        var b = this;
        return this.set("params_slug", a.slug), this.store.find("performer").then(function() {
            return b.store.find(App.Performer, a.id);
        });
    },
    title: "Performer"
}), App.PerformersRoute = Ember.Route.extend({
    model: function() {
        return this.store.find("performer");
    },
    title: "Performers"
}), App.ScheduleRoute = Ember.Route.extend({
    model: function() {
        return this.store.find("event"), this.store.find("performer");
    },
    title: "Schedule"
}), App.ShowRoute = Ember.Route.extend({
    model: function(a) {
        var b = this;
        return this.set("params_slug", a.slug), this.store.find("show").then(function() {
            return b.store.find(App.Show, a.id);
        });
    },
    title: "Show"
}), App.ShowsRoute = Ember.Route.extend({
    model: function() {
        return this.store.find("show");
    },
    title: "Shows"
});