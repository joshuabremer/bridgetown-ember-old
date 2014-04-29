/*! bridgetowncomedy.com 2014-04-29 */
function getTimeArray(day) {
    var timeArray = [], duration = moment(FESTIVAL_END_TIMES[day]).diff(FESTIVAL_START_TIMES[day], "hours");
    for (i = 0; 2 * duration > i; i++) timeArray.push(moment(FESTIVAL_START_TIMES[day]).add(30 * i, "minutes"));
    return timeArray;
}

function sluggify(string) {
    return string = string || "", string.replace(/\W/g, "-").toLowerCase();
}

function cleanStr(string) {
    return string = string || "", string.replace(/\W/g, "").toLowerCase();
}

function sluggify(string) {
    return string = string || "", string.replace(/\W/g, "-").toLowerCase();
}

function cleanStr(string) {
    return string = string || "", string.replace(/\W/g, "").toLowerCase();
}

function isProduction() {
    return location.hostname.match("bridgetown");
}

function _retrievePageJSON(page) {
    return host = "http://www.bridgetowncomedy.com/", Ember.$.ajax({
        url: host + page + "?format=json-pretty",
        dataType: "JSONP"
    }).then(function(data) {
        return data;
    });
}

function _retrievePageJSON(page) {
    return host = "http://www.bridgetowncomedy.com/", Ember.$.ajax({
        url: host + page + "?format=json-pretty",
        dataType: "JSONP"
    }).then(function(data) {
        return data;
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
    var n = this, t = n._, r = {}, e = Array.prototype, u = Object.prototype, i = Function.prototype, a = e.push, o = e.slice, c = e.concat, l = u.toString, f = u.hasOwnProperty, s = e.forEach, p = e.map, h = e.reduce, v = e.reduceRight, g = e.filter, d = e.every, m = e.some, y = e.indexOf, b = e.lastIndexOf, x = Array.isArray, w = Object.keys, _ = i.bind, j = function(n) {
        return n instanceof j ? n : this instanceof j ? void (this._wrapped = n) : new j(n);
    };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = j), 
    exports._ = j) : n._ = j, j.VERSION = "1.5.2";
    var A = j.each = j.forEach = function(n, t, e) {
        if (null != n) if (s && n.forEach === s) n.forEach(t, e); else if (n.length === +n.length) {
            for (var u = 0, i = n.length; i > u; u++) if (t.call(e, n[u], u, n) === r) return;
        } else for (var a = j.keys(n), u = 0, i = a.length; i > u; u++) if (t.call(e, n[a[u]], a[u], n) === r) return;
    };
    j.map = j.collect = function(n, t, r) {
        var e = [];
        return null == n ? e : p && n.map === p ? n.map(t, r) : (A(n, function(n, u, i) {
            e.push(t.call(r, n, u, i));
        }), e);
    };
    var E = "Reduce of empty array with no initial value";
    j.reduce = j.foldl = j.inject = function(n, t, r, e) {
        var u = arguments.length > 2;
        if (null == n && (n = []), h && n.reduce === h) return e && (t = j.bind(t, e)), 
        u ? n.reduce(t, r) : n.reduce(t);
        if (A(n, function(n, i, a) {
            u ? r = t.call(e, r, n, i, a) : (r = n, u = !0);
        }), !u) throw new TypeError(E);
        return r;
    }, j.reduceRight = j.foldr = function(n, t, r, e) {
        var u = arguments.length > 2;
        if (null == n && (n = []), v && n.reduceRight === v) return e && (t = j.bind(t, e)), 
        u ? n.reduceRight(t, r) : n.reduceRight(t);
        var i = n.length;
        if (i !== +i) {
            var a = j.keys(n);
            i = a.length;
        }
        if (A(n, function(o, c, l) {
            c = a ? a[--i] : --i, u ? r = t.call(e, r, n[c], c, l) : (r = n[c], u = !0);
        }), !u) throw new TypeError(E);
        return r;
    }, j.find = j.detect = function(n, t, r) {
        var e;
        return O(n, function(n, u, i) {
            return t.call(r, n, u, i) ? (e = n, !0) : void 0;
        }), e;
    }, j.filter = j.select = function(n, t, r) {
        var e = [];
        return null == n ? e : g && n.filter === g ? n.filter(t, r) : (A(n, function(n, u, i) {
            t.call(r, n, u, i) && e.push(n);
        }), e);
    }, j.reject = function(n, t, r) {
        return j.filter(n, function(n, e, u) {
            return !t.call(r, n, e, u);
        }, r);
    }, j.every = j.all = function(n, t, e) {
        t || (t = j.identity);
        var u = !0;
        return null == n ? u : d && n.every === d ? n.every(t, e) : (A(n, function(n, i, a) {
            return (u = u && t.call(e, n, i, a)) ? void 0 : r;
        }), !!u);
    };
    var O = j.some = j.any = function(n, t, e) {
        t || (t = j.identity);
        var u = !1;
        return null == n ? u : m && n.some === m ? n.some(t, e) : (A(n, function(n, i, a) {
            return u || (u = t.call(e, n, i, a)) ? r : void 0;
        }), !!u);
    };
    j.contains = j.include = function(n, t) {
        return null == n ? !1 : y && n.indexOf === y ? -1 != n.indexOf(t) : O(n, function(n) {
            return n === t;
        });
    }, j.invoke = function(n, t) {
        var r = o.call(arguments, 2), e = j.isFunction(t);
        return j.map(n, function(n) {
            return (e ? t : n[t]).apply(n, r);
        });
    }, j.pluck = function(n, t) {
        return j.map(n, function(n) {
            return n[t];
        });
    }, j.where = function(n, t, r) {
        return j.isEmpty(t) ? r ? void 0 : [] : j[r ? "find" : "filter"](n, function(n) {
            for (var r in t) if (t[r] !== n[r]) return !1;
            return !0;
        });
    }, j.findWhere = function(n, t) {
        return j.where(n, t, !0);
    }, j.max = function(n, t, r) {
        if (!t && j.isArray(n) && n[0] === +n[0] && n.length < 65535) return Math.max.apply(Math, n);
        if (!t && j.isEmpty(n)) return -1 / 0;
        var e = {
            computed: -1 / 0,
            value: -1 / 0
        };
        return A(n, function(n, u, i) {
            var a = t ? t.call(r, n, u, i) : n;
            a > e.computed && (e = {
                value: n,
                computed: a
            });
        }), e.value;
    }, j.min = function(n, t, r) {
        if (!t && j.isArray(n) && n[0] === +n[0] && n.length < 65535) return Math.min.apply(Math, n);
        if (!t && j.isEmpty(n)) return 1 / 0;
        var e = {
            computed: 1 / 0,
            value: 1 / 0
        };
        return A(n, function(n, u, i) {
            var a = t ? t.call(r, n, u, i) : n;
            a < e.computed && (e = {
                value: n,
                computed: a
            });
        }), e.value;
    }, j.shuffle = function(n) {
        var t, r = 0, e = [];
        return A(n, function(n) {
            t = j.random(r++), e[r - 1] = e[t], e[t] = n;
        }), e;
    }, j.sample = function(n, t, r) {
        return arguments.length < 2 || r ? n[j.random(n.length - 1)] : j.shuffle(n).slice(0, Math.max(0, t));
    };
    var k = function(n) {
        return j.isFunction(n) ? n : function(t) {
            return t[n];
        };
    };
    j.sortBy = function(n, t, r) {
        var e = k(t);
        return j.pluck(j.map(n, function(n, t, u) {
            return {
                value: n,
                index: t,
                criteria: e.call(r, n, t, u)
            };
        }).sort(function(n, t) {
            var r = n.criteria, e = t.criteria;
            if (r !== e) {
                if (r > e || void 0 === r) return 1;
                if (e > r || void 0 === e) return -1;
            }
            return n.index - t.index;
        }), "value");
    };
    var F = function(n) {
        return function(t, r, e) {
            var u = {}, i = null == r ? j.identity : k(r);
            return A(t, function(r, a) {
                var o = i.call(e, r, a, t);
                n(u, o, r);
            }), u;
        };
    };
    j.groupBy = F(function(n, t, r) {
        (j.has(n, t) ? n[t] : n[t] = []).push(r);
    }), j.indexBy = F(function(n, t, r) {
        n[t] = r;
    }), j.countBy = F(function(n, t) {
        j.has(n, t) ? n[t]++ : n[t] = 1;
    }), j.sortedIndex = function(n, t, r, e) {
        r = null == r ? j.identity : k(r);
        for (var u = r.call(e, t), i = 0, a = n.length; a > i; ) {
            var o = i + a >>> 1;
            r.call(e, n[o]) < u ? i = o + 1 : a = o;
        }
        return i;
    }, j.toArray = function(n) {
        return n ? j.isArray(n) ? o.call(n) : n.length === +n.length ? j.map(n, j.identity) : j.values(n) : [];
    }, j.size = function(n) {
        return null == n ? 0 : n.length === +n.length ? n.length : j.keys(n).length;
    }, j.first = j.head = j.take = function(n, t, r) {
        return null == n ? void 0 : null == t || r ? n[0] : o.call(n, 0, t);
    }, j.initial = function(n, t, r) {
        return o.call(n, 0, n.length - (null == t || r ? 1 : t));
    }, j.last = function(n, t, r) {
        return null == n ? void 0 : null == t || r ? n[n.length - 1] : o.call(n, Math.max(n.length - t, 0));
    }, j.rest = j.tail = j.drop = function(n, t, r) {
        return o.call(n, null == t || r ? 1 : t);
    }, j.compact = function(n) {
        return j.filter(n, j.identity);
    };
    var M = function(n, t, r) {
        return t && j.every(n, j.isArray) ? c.apply(r, n) : (A(n, function(n) {
            j.isArray(n) || j.isArguments(n) ? t ? a.apply(r, n) : M(n, t, r) : r.push(n);
        }), r);
    };
    j.flatten = function(n, t) {
        return M(n, t, []);
    }, j.without = function(n) {
        return j.difference(n, o.call(arguments, 1));
    }, j.uniq = j.unique = function(n, t, r, e) {
        j.isFunction(t) && (e = r, r = t, t = !1);
        var u = r ? j.map(n, r, e) : n, i = [], a = [];
        return A(u, function(r, e) {
            (t ? e && a[a.length - 1] === r : j.contains(a, r)) || (a.push(r), i.push(n[e]));
        }), i;
    }, j.union = function() {
        return j.uniq(j.flatten(arguments, !0));
    }, j.intersection = function(n) {
        var t = o.call(arguments, 1);
        return j.filter(j.uniq(n), function(n) {
            return j.every(t, function(t) {
                return j.indexOf(t, n) >= 0;
            });
        });
    }, j.difference = function(n) {
        var t = c.apply(e, o.call(arguments, 1));
        return j.filter(n, function(n) {
            return !j.contains(t, n);
        });
    }, j.zip = function() {
        for (var n = j.max(j.pluck(arguments, "length").concat(0)), t = new Array(n), r = 0; n > r; r++) t[r] = j.pluck(arguments, "" + r);
        return t;
    }, j.object = function(n, t) {
        if (null == n) return {};
        for (var r = {}, e = 0, u = n.length; u > e; e++) t ? r[n[e]] = t[e] : r[n[e][0]] = n[e][1];
        return r;
    }, j.indexOf = function(n, t, r) {
        if (null == n) return -1;
        var e = 0, u = n.length;
        if (r) {
            if ("number" != typeof r) return e = j.sortedIndex(n, t), n[e] === t ? e : -1;
            e = 0 > r ? Math.max(0, u + r) : r;
        }
        if (y && n.indexOf === y) return n.indexOf(t, r);
        for (;u > e; e++) if (n[e] === t) return e;
        return -1;
    }, j.lastIndexOf = function(n, t, r) {
        if (null == n) return -1;
        var e = null != r;
        if (b && n.lastIndexOf === b) return e ? n.lastIndexOf(t, r) : n.lastIndexOf(t);
        for (var u = e ? r : n.length; u--; ) if (n[u] === t) return u;
        return -1;
    }, j.range = function(n, t, r) {
        arguments.length <= 1 && (t = n || 0, n = 0), r = arguments[2] || 1;
        for (var e = Math.max(Math.ceil((t - n) / r), 0), u = 0, i = new Array(e); e > u; ) i[u++] = n, 
        n += r;
        return i;
    };
    var R = function() {};
    j.bind = function(n, t) {
        var r, e;
        if (_ && n.bind === _) return _.apply(n, o.call(arguments, 1));
        if (!j.isFunction(n)) throw new TypeError();
        return r = o.call(arguments, 2), e = function() {
            if (!(this instanceof e)) return n.apply(t, r.concat(o.call(arguments)));
            R.prototype = n.prototype;
            var u = new R();
            R.prototype = null;
            var i = n.apply(u, r.concat(o.call(arguments)));
            return Object(i) === i ? i : u;
        };
    }, j.partial = function(n) {
        var t = o.call(arguments, 1);
        return function() {
            return n.apply(this, t.concat(o.call(arguments)));
        };
    }, j.bindAll = function(n) {
        var t = o.call(arguments, 1);
        if (0 === t.length) throw new Error("bindAll must be passed function names");
        return A(t, function(t) {
            n[t] = j.bind(n[t], n);
        }), n;
    }, j.memoize = function(n, t) {
        var r = {};
        return t || (t = j.identity), function() {
            var e = t.apply(this, arguments);
            return j.has(r, e) ? r[e] : r[e] = n.apply(this, arguments);
        };
    }, j.delay = function(n, t) {
        var r = o.call(arguments, 2);
        return setTimeout(function() {
            return n.apply(null, r);
        }, t);
    }, j.defer = function(n) {
        return j.delay.apply(j, [ n, 1 ].concat(o.call(arguments, 1)));
    }, j.throttle = function(n, t, r) {
        var e, u, i, a = null, o = 0;
        r || (r = {});
        var c = function() {
            o = r.leading === !1 ? 0 : new Date(), a = null, i = n.apply(e, u);
        };
        return function() {
            var l = new Date();
            o || r.leading !== !1 || (o = l);
            var f = t - (l - o);
            return e = this, u = arguments, 0 >= f ? (clearTimeout(a), a = null, o = l, i = n.apply(e, u)) : a || r.trailing === !1 || (a = setTimeout(c, f)), 
            i;
        };
    }, j.debounce = function(n, t, r) {
        var e, u, i, a, o;
        return function() {
            i = this, u = arguments, a = new Date();
            var c = function() {
                var l = new Date() - a;
                t > l ? e = setTimeout(c, t - l) : (e = null, r || (o = n.apply(i, u)));
            }, l = r && !e;
            return e || (e = setTimeout(c, t)), l && (o = n.apply(i, u)), o;
        };
    }, j.once = function(n) {
        var t, r = !1;
        return function() {
            return r ? t : (r = !0, t = n.apply(this, arguments), n = null, t);
        };
    }, j.wrap = function(n, t) {
        return function() {
            var r = [ n ];
            return a.apply(r, arguments), t.apply(this, r);
        };
    }, j.compose = function() {
        var n = arguments;
        return function() {
            for (var t = arguments, r = n.length - 1; r >= 0; r--) t = [ n[r].apply(this, t) ];
            return t[0];
        };
    }, j.after = function(n, t) {
        return function() {
            return --n < 1 ? t.apply(this, arguments) : void 0;
        };
    }, j.keys = w || function(n) {
        if (n !== Object(n)) throw new TypeError("Invalid object");
        var t = [];
        for (var r in n) j.has(n, r) && t.push(r);
        return t;
    }, j.values = function(n) {
        for (var t = j.keys(n), r = t.length, e = new Array(r), u = 0; r > u; u++) e[u] = n[t[u]];
        return e;
    }, j.pairs = function(n) {
        for (var t = j.keys(n), r = t.length, e = new Array(r), u = 0; r > u; u++) e[u] = [ t[u], n[t[u]] ];
        return e;
    }, j.invert = function(n) {
        for (var t = {}, r = j.keys(n), e = 0, u = r.length; u > e; e++) t[n[r[e]]] = r[e];
        return t;
    }, j.functions = j.methods = function(n) {
        var t = [];
        for (var r in n) j.isFunction(n[r]) && t.push(r);
        return t.sort();
    }, j.extend = function(n) {
        return A(o.call(arguments, 1), function(t) {
            if (t) for (var r in t) n[r] = t[r];
        }), n;
    }, j.pick = function(n) {
        var t = {}, r = c.apply(e, o.call(arguments, 1));
        return A(r, function(r) {
            r in n && (t[r] = n[r]);
        }), t;
    }, j.omit = function(n) {
        var t = {}, r = c.apply(e, o.call(arguments, 1));
        for (var u in n) j.contains(r, u) || (t[u] = n[u]);
        return t;
    }, j.defaults = function(n) {
        return A(o.call(arguments, 1), function(t) {
            if (t) for (var r in t) void 0 === n[r] && (n[r] = t[r]);
        }), n;
    }, j.clone = function(n) {
        return j.isObject(n) ? j.isArray(n) ? n.slice() : j.extend({}, n) : n;
    }, j.tap = function(n, t) {
        return t(n), n;
    };
    var S = function(n, t, r, e) {
        if (n === t) return 0 !== n || 1 / n == 1 / t;
        if (null == n || null == t) return n === t;
        n instanceof j && (n = n._wrapped), t instanceof j && (t = t._wrapped);
        var u = l.call(n);
        if (u != l.call(t)) return !1;
        switch (u) {
          case "[object String]":
            return n == String(t);

          case "[object Number]":
            return n != +n ? t != +t : 0 == n ? 1 / n == 1 / t : n == +t;

          case "[object Date]":
          case "[object Boolean]":
            return +n == +t;

          case "[object RegExp]":
            return n.source == t.source && n.global == t.global && n.multiline == t.multiline && n.ignoreCase == t.ignoreCase;
        }
        if ("object" != typeof n || "object" != typeof t) return !1;
        for (var i = r.length; i--; ) if (r[i] == n) return e[i] == t;
        var a = n.constructor, o = t.constructor;
        if (a !== o && !(j.isFunction(a) && a instanceof a && j.isFunction(o) && o instanceof o)) return !1;
        r.push(n), e.push(t);
        var c = 0, f = !0;
        if ("[object Array]" == u) {
            if (c = n.length, f = c == t.length) for (;c-- && (f = S(n[c], t[c], r, e)); ) ;
        } else {
            for (var s in n) if (j.has(n, s) && (c++, !(f = j.has(t, s) && S(n[s], t[s], r, e)))) break;
            if (f) {
                for (s in t) if (j.has(t, s) && !c--) break;
                f = !c;
            }
        }
        return r.pop(), e.pop(), f;
    };
    j.isEqual = function(n, t) {
        return S(n, t, [], []);
    }, j.isEmpty = function(n) {
        if (null == n) return !0;
        if (j.isArray(n) || j.isString(n)) return 0 === n.length;
        for (var t in n) if (j.has(n, t)) return !1;
        return !0;
    }, j.isElement = function(n) {
        return !(!n || 1 !== n.nodeType);
    }, j.isArray = x || function(n) {
        return "[object Array]" == l.call(n);
    }, j.isObject = function(n) {
        return n === Object(n);
    }, A([ "Arguments", "Function", "String", "Number", "Date", "RegExp" ], function(n) {
        j["is" + n] = function(t) {
            return l.call(t) == "[object " + n + "]";
        };
    }), j.isArguments(arguments) || (j.isArguments = function(n) {
        return !(!n || !j.has(n, "callee"));
    }), "function" != typeof /./ && (j.isFunction = function(n) {
        return "function" == typeof n;
    }), j.isFinite = function(n) {
        return isFinite(n) && !isNaN(parseFloat(n));
    }, j.isNaN = function(n) {
        return j.isNumber(n) && n != +n;
    }, j.isBoolean = function(n) {
        return n === !0 || n === !1 || "[object Boolean]" == l.call(n);
    }, j.isNull = function(n) {
        return null === n;
    }, j.isUndefined = function(n) {
        return void 0 === n;
    }, j.has = function(n, t) {
        return f.call(n, t);
    }, j.noConflict = function() {
        return n._ = t, this;
    }, j.identity = function(n) {
        return n;
    }, j.times = function(n, t, r) {
        for (var e = Array(Math.max(0, n)), u = 0; n > u; u++) e[u] = t.call(r, u);
        return e;
    }, j.random = function(n, t) {
        return null == t && (t = n, n = 0), n + Math.floor(Math.random() * (t - n + 1));
    };
    var I = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;"
        }
    };
    I.unescape = j.invert(I.escape);
    var T = {
        escape: new RegExp("[" + j.keys(I.escape).join("") + "]", "g"),
        unescape: new RegExp("(" + j.keys(I.unescape).join("|") + ")", "g")
    };
    j.each([ "escape", "unescape" ], function(n) {
        j[n] = function(t) {
            return null == t ? "" : ("" + t).replace(T[n], function(t) {
                return I[n][t];
            });
        };
    }), j.result = function(n, t) {
        if (null == n) return void 0;
        var r = n[t];
        return j.isFunction(r) ? r.call(n) : r;
    }, j.mixin = function(n) {
        A(j.functions(n), function(t) {
            var r = j[t] = n[t];
            j.prototype[t] = function() {
                var n = [ this._wrapped ];
                return a.apply(n, arguments), z.call(this, r.apply(j, n));
            };
        });
    };
    var N = 0;
    j.uniqueId = function(n) {
        var t = ++N + "";
        return n ? n + t : t;
    }, j.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var q = /(.)^/, B = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "	": "t",
        "\u2028": "u2028",
        "\u2029": "u2029"
    }, D = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    j.template = function(n, t, r) {
        var e;
        r = j.defaults({}, r, j.templateSettings);
        var u = new RegExp([ (r.escape || q).source, (r.interpolate || q).source, (r.evaluate || q).source ].join("|") + "|$", "g"), i = 0, a = "__p+='";
        n.replace(u, function(t, r, e, u, o) {
            return a += n.slice(i, o).replace(D, function(n) {
                return "\\" + B[n];
            }), r && (a += "'+\n((__t=(" + r + "))==null?'':_.escape(__t))+\n'"), e && (a += "'+\n((__t=(" + e + "))==null?'':__t)+\n'"), 
            u && (a += "';\n" + u + "\n__p+='"), i = o + t.length, t;
        }), a += "';\n", r.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
        try {
            e = new Function(r.variable || "obj", "_", a);
        } catch (o) {
            throw o.source = a, o;
        }
        if (t) return e(t, j);
        var c = function(n) {
            return e.call(this, n, j);
        };
        return c.source = "function(" + (r.variable || "obj") + "){\n" + a + "}", c;
    }, j.chain = function(n) {
        return j(n).chain();
    };
    var z = function(n) {
        return this._chain ? j(n).chain() : n;
    };
    j.mixin(j), A([ "pop", "push", "reverse", "shift", "sort", "splice", "unshift" ], function(n) {
        var t = e[n];
        j.prototype[n] = function() {
            var r = this._wrapped;
            return t.apply(r, arguments), "shift" != n && "splice" != n || 0 !== r.length || delete r[0], 
            z.call(this, r);
        };
    }), A([ "concat", "join", "slice" ], function(n) {
        var t = e[n];
        j.prototype[n] = function() {
            return z.call(this, t.apply(this._wrapped, arguments));
        };
    }), j.extend(j.prototype, {
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

window.Handlebars = Handlebars, function(Handlebars, undefined) {
    Handlebars.VERSION = "1.0.0", Handlebars.COMPILER_REVISION = 4, Handlebars.REVISION_CHANGES = {
        1: "<= 1.0.rc.2",
        2: "== 1.0.0-rc.3",
        3: "== 1.0.0-rc.4",
        4: ">= 1.0.0"
    }, Handlebars.helpers = {}, Handlebars.partials = {};
    var toString = Object.prototype.toString, functionType = "[object Function]", objectType = "[object Object]";
    Handlebars.registerHelper = function(name, fn, inverse) {
        if (toString.call(name) === objectType) {
            if (inverse || fn) throw new Handlebars.Exception("Arg not supported with multiple helpers");
            Handlebars.Utils.extend(this.helpers, name);
        } else inverse && (fn.not = inverse), this.helpers[name] = fn;
    }, Handlebars.registerPartial = function(name, str) {
        toString.call(name) === objectType ? Handlebars.Utils.extend(this.partials, name) : this.partials[name] = str;
    }, Handlebars.registerHelper("helperMissing", function(arg) {
        if (2 === arguments.length) return undefined;
        throw new Error("Missing helper: '" + arg + "'");
    }), Handlebars.registerHelper("blockHelperMissing", function(context, options) {
        var inverse = options.inverse || function() {}, fn = options.fn, type = toString.call(context);
        return type === functionType && (context = context.call(this)), context === !0 ? fn(this) : context === !1 || null == context ? inverse(this) : "[object Array]" === type ? context.length > 0 ? Handlebars.helpers.each(context, options) : inverse(this) : fn(context);
    }), Handlebars.K = function() {}, Handlebars.createFrame = Object.create || function(object) {
        Handlebars.K.prototype = object;
        var obj = new Handlebars.K();
        return Handlebars.K.prototype = null, obj;
    }, Handlebars.logger = {
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
        log: function(level, obj) {
            if (Handlebars.logger.level <= level) {
                var method = Handlebars.logger.methodMap[level];
                "undefined" != typeof console && console[method] && console[method].call(console, obj);
            }
        }
    }, Handlebars.log = function(level, obj) {
        Handlebars.logger.log(level, obj);
    }, Handlebars.registerHelper("each", function(context, options) {
        var data, fn = options.fn, inverse = options.inverse, i = 0, ret = "", type = toString.call(context);
        if (type === functionType && (context = context.call(this)), options.data && (data = Handlebars.createFrame(options.data)), 
        context && "object" == typeof context) if (context instanceof Array) for (var j = context.length; j > i; i++) data && (data.index = i), 
        ret += fn(context[i], {
            data: data
        }); else for (var key in context) context.hasOwnProperty(key) && (data && (data.key = key), 
        ret += fn(context[key], {
            data: data
        }), i++);
        return 0 === i && (ret = inverse(this)), ret;
    }), Handlebars.registerHelper("if", function(conditional, options) {
        var type = toString.call(conditional);
        return type === functionType && (conditional = conditional.call(this)), !conditional || Handlebars.Utils.isEmpty(conditional) ? options.inverse(this) : options.fn(this);
    }), Handlebars.registerHelper("unless", function(conditional, options) {
        return Handlebars.helpers["if"].call(this, conditional, {
            fn: options.inverse,
            inverse: options.fn
        });
    }), Handlebars.registerHelper("with", function(context, options) {
        var type = toString.call(context);
        return type === functionType && (context = context.call(this)), Handlebars.Utils.isEmpty(context) ? void 0 : options.fn(context);
    }), Handlebars.registerHelper("log", function(context, options) {
        var level = options.data && null != options.data.level ? parseInt(options.data.level, 10) : 1;
        Handlebars.log(level, context);
    });
    var errorProps = [ "description", "fileName", "lineNumber", "message", "name", "number", "stack" ];
    Handlebars.Exception = function() {
        for (var tmp = Error.prototype.constructor.apply(this, arguments), idx = 0; idx < errorProps.length; idx++) this[errorProps[idx]] = tmp[errorProps[idx]];
    }, Handlebars.Exception.prototype = new Error(), Handlebars.SafeString = function(string) {
        this.string = string;
    }, Handlebars.SafeString.prototype.toString = function() {
        return this.string.toString();
    };
    var escape = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
    }, badChars = /[&<>"'`]/g, possible = /[&<>"'`]/, escapeChar = function(chr) {
        return escape[chr] || "&amp;";
    };
    Handlebars.Utils = {
        extend: function(obj, value) {
            for (var key in value) value.hasOwnProperty(key) && (obj[key] = value[key]);
        },
        escapeExpression: function(string) {
            return string instanceof Handlebars.SafeString ? string.toString() : null == string || string === !1 ? "" : (string = string.toString(), 
            possible.test(string) ? string.replace(badChars, escapeChar) : string);
        },
        isEmpty: function(value) {
            return value || 0 === value ? "[object Array]" === toString.call(value) && 0 === value.length ? !0 : !1 : !0;
        }
    }, Handlebars.VM = {
        template: function(templateSpec) {
            var container = {
                escapeExpression: Handlebars.Utils.escapeExpression,
                invokePartial: Handlebars.VM.invokePartial,
                programs: [],
                program: function(i, fn, data) {
                    var programWrapper = this.programs[i];
                    return data ? programWrapper = Handlebars.VM.program(i, fn, data) : programWrapper || (programWrapper = this.programs[i] = Handlebars.VM.program(i, fn)), 
                    programWrapper;
                },
                merge: function(param, common) {
                    var ret = param || common;
                    return param && common && (ret = {}, Handlebars.Utils.extend(ret, common), Handlebars.Utils.extend(ret, param)), 
                    ret;
                },
                programWithDepth: Handlebars.VM.programWithDepth,
                noop: Handlebars.VM.noop,
                compilerInfo: null
            };
            return function(context, options) {
                options = options || {};
                var result = templateSpec.call(container, Handlebars, context, options.helpers, options.partials, options.data), compilerInfo = container.compilerInfo || [], compilerRevision = compilerInfo[0] || 1, currentRevision = Handlebars.COMPILER_REVISION;
                if (compilerRevision !== currentRevision) {
                    if (currentRevision > compilerRevision) {
                        var runtimeVersions = Handlebars.REVISION_CHANGES[currentRevision], compilerVersions = Handlebars.REVISION_CHANGES[compilerRevision];
                        throw "Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + runtimeVersions + ") or downgrade your runtime to an older version (" + compilerVersions + ").";
                    }
                    throw "Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + compilerInfo[1] + ").";
                }
                return result;
            };
        },
        programWithDepth: function(i, fn, data) {
            var args = Array.prototype.slice.call(arguments, 3), program = function(context, options) {
                return options = options || {}, fn.apply(this, [ context, options.data || data ].concat(args));
            };
            return program.program = i, program.depth = args.length, program;
        },
        program: function(i, fn, data) {
            var program = function(context, options) {
                return options = options || {}, fn(context, options.data || data);
            };
            return program.program = i, program.depth = 0, program;
        },
        noop: function() {
            return "";
        },
        invokePartial: function(partial, name, context, helpers, partials, data) {
            var options = {
                helpers: helpers,
                partials: partials,
                data: data
            };
            if (partial === undefined) throw new Handlebars.Exception("The partial " + name + " could not be found");
            if (partial instanceof Function) return partial(context, options);
            if (Handlebars.compile) return partials[name] = Handlebars.compile(partial, {
                data: data !== undefined
            }), partials[name](context, options);
            throw new Handlebars.Exception("The partial " + name + " could not be compiled when running in runtime-only mode");
        }
    }, Handlebars.template = Handlebars.VM.template;
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
}(jQuery, window, document), Ember.Handlebars.registerBoundHelper("debug", function(optionalValue) {
    console.log("Current Context"), console.log("===================="), console.log(this), 
    optionalValue && (console.log("Value"), console.log("===================="), console.log(optionalValue));
}), Ember.Handlebars.registerBoundHelper("breaklines", function(text) {
    return text = Handlebars.Utils.escapeExpression(text), text = text.replace(/(\r\n|\n|\r)/gm, "<br>"), 
    new Handlebars.SafeString(text);
}), Ember.Handlebars.registerBoundHelper("createExcerpt", function(html, length, more_text) {
    var item_html = html.replace(/<\/?[^>]+>/gi, "");
    return item_html = jQuery.trim(item_html), item_html.substring(0, length) + more_text;
}), Ember.Handlebars.registerBoundHelper("MCBadge", function(performerId, eventEmcees) {
    var badge = '<span class="badge">MC</span>';
    return performerId && eventEmcees && performerId !== eventEmcees ? "" : new Handlebars.SafeString(badge);
}), Ember.Handlebars.registerBoundHelper("fullDate", function(dateString) {
    return moment(dateString).zone("-07:00").calendar();
}), Ember.Handlebars.registerBoundHelper("niceDate", function(dateString) {
    return moment(dateString).zone("-07:00").format("dddd, MMMM Do YYYY");
}), Ember.Handlebars.registerBoundHelper("getWeekday", function(dateString) {
    return moment(dateString).zone("-07:00").format("dddd");
}), Ember.Handlebars.registerBoundHelper("getMonth", function(dateString) {
    return moment(dateString).zone("-07:00").format("MMM");
}), Ember.Handlebars.registerBoundHelper("getDayOfMonth", function(dateString) {
    return moment(dateString).zone("-07:00").format("D");
}), Ember.Handlebars.registerBoundHelper("getTime", function(dateString) {
    return moment(dateString).zone("-07:00").format("h:mm a");
}), Ember.Handlebars.registerHelper("scheduleTableHeaderRow", function(day) {
    var html = "<th>Venue</th>", timeArray = getTimeArray(day);
    return $.each(timeArray, function(index, time) {
        var $el = $('<tr><th class="schedule-table__time-header" data-start-time="' + time.toISOString() + '">' + time.format("MM/DD ") + "<br />" + time.format("h:mm a") + "</th></tr>");
        html += $el.html();
    }), new Handlebars.SafeString(html);
}), DS.LocalRESTSerializer = DS.RESTSerializer.extend({
    extractSingle: function(store, type, payload) {
        return console.log("extractSingle"), this._super(store, type, payload);
    },
    extractArray: function(store, primaryType, payload) {
        return console.log("extractArray"), newPayload = {}, newPayload.categories = [], 
        newPayload[primaryType.typeKey + "s"] = payload, console.log(newPayload), this._super(store, primaryType, newPayload);
    },
    normalize: function(type, hash, prop) {
        return console.log("normalize"), this.normalizeId(hash), this.normalizeAttributes(type, hash), 
        this.normalizeRelationships(type, hash), this.normalizeUsingDeclaredMapping(type, hash), 
        this.normalizeHash && this.normalizeHash[prop] && (hash = this.normalizeHash[prop](hash)), 
        this._super(type, hash, prop);
    },
    normalizeHash: {
        performers: function(hash) {
            return hash.id = hash.PerformerId, hash.name = hash.Name, hash.bio = hash.Bio, hash.headshot = hash.PhotoUrl, 
            hash;
        },
        performer: function(hash) {
            return hash.id = hash.PerformerId, hash.name = hash.Name, hash.bio = hash.Bio, hash.headshot = hash.PhotoUrl, 
            hash;
        }
    }
}), DS.LocalAdapter = DS.RESTAdapter.extend({
    namespace: "assets",
    buildURL: function(type, id) {
        var url = [], host = Ember.get(this, "host"), prefix = this.urlPrefix();
        return type && url.push(this.pathForType(type)), id && url.push(id), prefix && url.unshift(prefix), 
        url = url.join("/"), !host && url && (url = "/" + url), url += ".json", console.log(url), 
        url;
    },
    defaultSerializer: "DS/LocalREST"
});

var App = Ember.Application.create({
    LOG_TRANSITIONS: !0,
    rootElement: "#ember-app"
}), FESTIVAL_START_TIMES = {};

FESTIVAL_START_TIMES.Thursday = "2014-05-09T01:30:00.000Z", FESTIVAL_START_TIMES.Friday = "2014-05-10T01:00:00.000Z", 
FESTIVAL_START_TIMES.Saturday = "2014-05-10T20:00:00.000Z", FESTIVAL_START_TIMES.Sunday = "2014-05-11T20:00:00.000Z";

var FESTIVAL_END_TIMES = {};

FESTIVAL_END_TIMES.Thursday = "2014-05-09T08:30:00.000Z", FESTIVAL_END_TIMES.Friday = "2014-05-10T10:00:00.000Z", 
FESTIVAL_END_TIMES.Saturday = "2014-05-11T10:00:00.000Z", FESTIVAL_END_TIMES.Sunday = "2014-05-12T08:00:00.000Z", 
App.FixtureAdapter = DS.FixtureAdapter.extend({
    queryFixtures: function(records, query) {
        return records.filter(function(record) {
            for (var key in query) if (query.hasOwnProperty(key)) {
                var value = query[key];
                if (record[key] !== value) return !1;
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
        var target = this.get("element");
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
        }), this.spinner.spin(target);
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
        var target = this.get("element");
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
        }), this.spinner.spin(target);
    }.on("didInsertElement"),
    teardown: function() {
        this.spinner && this.spinner && this.spinner.stop();
    }.on("willDestroyElement")
}), Ember.Handlebars.helper("x-spinner", App.XSpinnerComponent), App.Event = DS.Model.extend({
    performers: DS.hasMany("performer", {
        async: !0
    }),
    emcees: DS.hasMany("performer", {
        async: !0
    }),
    venue: DS.belongsTo("venue", {
        async: !0
    }),
    show: DS.belongsTo("show", {
        async: !0
    }),
    Name: DS.attr("string"),
    start_time: DS.attr("string"),
    end_time: DS.attr("string"),
    Cost: DS.attr("string"),
    duration: DS.attr("string"),
    weekday: function() {
        return moment(this.get("start_time")).zone("-07:00").format("dddd").toLowerCase();
    }.property("start_time"),
    getPerformers: function() {
        return this.get("performers").get("content");
    }.property(),
    getPerformerCount: function() {
        return this.get("performers");
    }.property(),
    sortedPerformers: function() {
        var performers = this.get("performers").toArray();
        return performers.sort(function(lhs, rhs) {
            return lhs.get("SortOrder") > rhs.get("SortOrder");
        });
    }.property("performers.@each.isLoaded")
}), App.Performer = DS.Model.extend({
    events: DS.hasMany("event", {
        async: !0
    }),
    mc_events: DS.hasMany("event", {
        async: !0
    }),
    Name: DS.attr("string"),
    PhotoUrl: DS.attr("string"),
    SortOrder: DS.attr("number"),
    slug: function() {
        return sluggify(this.get("Name"));
    }.property("Name"),
    Bio: DS.attr("string"),
    pageUrl: DS.attr("string"),
    headshot300: function() {
        return "/assets/performer-" + cleanStr(this.get("Name")) + "-300x300.jpg";
    }.property("Name"),
    backgroundImageCSS: function() {
        return "background-image:url('" + this.get("PhotoUrl") + "?format=300w')";
    }.property("PhotoUrl"),
    isAnMC: function() {
        return this.get("mc_events").get("length");
    }.property("mc_events.@each.isLoaded"),
    sortedEvents: function() {
        var events = this.get("events").toArray();
        return events.sort(function(lhs, rhs) {
            return lhs.get("start_time") > rhs.get("start_time");
        });
    }.property("events.@each.isLoaded"),
    allSortedEvents: function() {
        var events = this.get("events").toArray().slice(0), mc_events = this.get("mc_events").toArray(), all_events = events.clone().concat(mc_events);
        return all_events.sort(function(lhs, rhs) {
            return lhs.get("start_time") > rhs.get("start_time");
        });
    }.property("events.@each.isLoaded", "mc_events.@each.isLoaded")
}), Array.prototype.clone = function() {
    return this.slice(0);
}, App.Show = DS.Model.extend({
    events: DS.hasMany("event", {
        async: !0
    }),
    Name: DS.attr("string"),
    PhotoUrl: DS.attr("string"),
    SortOrder: DS.attr("number"),
    slug: function() {
        return sluggify(this.get("Name"));
    }.property("Name"),
    Bio: DS.attr("string"),
    Copy: DS.attr("string"),
    pageUrl: DS.attr("string"),
    headshot300: function() {
        return "/assets/show-" + cleanStr(this.get("Name")) + "-300x300.jpg";
    }.property("Name"),
    backgroundImageCSS: function() {
        return "background-image:url('" + this.get("PhotoUrl") + "?format=300w')";
    }.property("PhotoUrl"),
    sortedEvents: function() {
        var events = this.get("events").toArray();
        return events.sort(function(lhs, rhs) {
            return lhs.get("start_time") > rhs.get("start_time");
        });
    }.property("events.@each.isLoaded")
}), App.Venue = DS.Model.extend({
    events: DS.hasMany("event", {
        async: !0
    }),
    Name: DS.attr("string"),
    pageUrl: DS.attr("string"),
    thursdayEvents: function() {
        var events = this.get("events").toArray(), thursdayEvents = [];
        return $.each(events, function(index, event) {
            "Thursday" === moment(event.get("start_time")).format("dddd") && thursdayEvents.push(event);
        }), thursdayEvents;
    }.property("events.@each.isLoaded"),
    fridayEvents: function() {
        var events = this.get("events").toArray(), fridayEvents = [];
        return $.each(events, function(index, event) {
            "Friday" === moment(event.get("start_time")).format("dddd") && fridayEvents.push(event);
        }), fridayEvents;
    }.property("events.@each.isLoaded"),
    saturdayEvents: function() {
        var events = this.get("events").toArray(), saturdayEvents = [];
        return $.each(events, function(index, event) {
            "Saturday" === moment(event.get("start_time")).format("dddd") && saturdayEvents.push(event);
        }), saturdayEvents;
    }.property("events.@each.isLoaded"),
    sundayEvents: function() {
        var events = this.get("events").toArray(), sundayEvents = [];
        return $.each(events, function(index, event) {
            "Sunday" === moment(event.get("start_time")).format("dddd") && sundayEvents.push(event);
        }), sundayEvents;
    }.property("events.@each.isLoaded")
}), App.Event.FIXTURES = [ {
    EventId: "7688",
    VenueId: "7614",
    Name: "Hawthorne Lounge Opening Show",
    StartTime: "2014-05-08 19:00:00 to 2014-05-08 20:30:00",
    EndTime: "2014-05-08 19:00:00 to 2014-05-08 20:30:00",
    MCId: "5739",
    Cost: "$15",
    ShowId: "",
    id: "7688",
    venue: "7614",
    start_time: "2014-05-09T02:00:00.000Z",
    end_time: "2014-05-09T03:30:00.000Z",
    performers: [ "6735", "5932", "6731", "6704", "5876", "6835" ],
    emcees: [ 5739 ]
}, {
    EventId: "7704",
    VenueId: "7619",
    Name: "Northwest Young Guns",
    StartTime: "2014-05-08 19:00:00 to 2014-05-08 20:30:00",
    EndTime: "2014-05-08 19:00:00 to 2014-05-08 20:30:00",
    MCId: "6128",
    Cost: "$15",
    ShowId: "",
    id: "7704",
    venue: "7619",
    start_time: "2014-05-09T02:00:00.000Z",
    end_time: "2014-05-09T03:30:00.000Z",
    performers: [ "6629", "6686", "6702", "6542", "5983", "6483", "6534", "6174" ],
    emcees: [ 6128 ]
}, {
    EventId: "7698",
    VenueId: "7615",
    Name: "Hawthorne Theatre Opening Show",
    StartTime: "2014-05-08 20:00:00 to 2014-05-08 21:30:00",
    EndTime: "2014-05-08 20:00:00 to 2014-05-08 21:30:00",
    MCId: "6717",
    Cost: "$20",
    ShowId: "",
    id: "7698",
    venue: "7615",
    start_time: "2014-05-09T03:00:00.000Z",
    end_time: "2014-05-09T04:30:00.000Z",
    performers: [ "5999", "6144", "6163", "6157", "6150", "6365", "7566", "7581" ],
    emcees: [ 6717 ]
}, {
    EventId: "8579",
    VenueId: "8571",
    Name: "All Jane, No Dick",
    StartTime: "2014-05-08 20:00:00 to 2014-05-08 21:30:00",
    EndTime: "2014-05-08 20:00:00 to 2014-05-08 21:30:00",
    MCId: "6527",
    Cost: "",
    ShowId: "8577",
    show: "8577",
    id: "8579",
    venue: "8571",
    start_time: "2014-05-09T03:00:00.000Z",
    end_time: "2014-05-09T04:30:00.000Z",
    performers: [ "6745", "8015", "6723", "6205", "6611" ],
    emcees: [ 6527 ]
}, {
    EventId: "7748",
    VenueId: "7620",
    Name: "Analog Cafe Opening Show",
    StartTime: "2014-05-08 20:00:00 to 2014-05-08 21:30:00",
    EndTime: "2014-05-08 20:00:00 to 2014-05-08 21:30:00",
    MCId: "6561",
    Cost: "$10",
    ShowId: "",
    id: "7748",
    venue: "7620",
    start_time: "2014-05-09T03:00:00.000Z",
    end_time: "2014-05-09T04:30:00.000Z",
    performers: [ "6699", "6354", "6800", "6591", "5728", "6275", "6818" ],
    emcees: [ 6561 ]
}, {
    EventId: "7663",
    VenueId: "7612",
    Name: "Squarespace Stage at the Doug Fir Opening Show",
    StartTime: "2014-05-08 20:00:00 to 2014-05-08 21:30:00",
    EndTime: "2014-05-08 20:00:00 to 2014-05-08 21:30:00",
    MCId: "6410",
    Cost: "$20",
    ShowId: "",
    id: "7663",
    venue: "7612",
    start_time: "2014-05-09T03:00:00.000Z",
    end_time: "2014-05-09T04:30:00.000Z",
    performers: [ "6058", "5856", "6032", "6825", "6014", "6762", "6069", "6791" ],
    emcees: [ 6410 ]
}, {
    EventId: "7637",
    VenueId: "7609",
    Name: "Taxi Magic Stage at Alhambra Theater Opening Show",
    StartTime: "2014-05-08 20:00:00 to 2014-05-08 21:30:00",
    EndTime: "2014-05-08 20:00:00 to 2014-05-08 21:30:00",
    MCId: "6118",
    Cost: "$20",
    ShowId: "",
    id: "7637",
    venue: "7609",
    start_time: "2014-05-09T03:00:00.000Z",
    end_time: "2014-05-09T04:30:00.000Z",
    performers: [ "6337", "6049", "6727", "6298", "7895", "6858" ],
    emcees: [ 6118 ]
}, {
    EventId: "7739",
    VenueId: "7616",
    Name: "Before You Were Funny",
    StartTime: "2014-05-08 20:00:00 to 2014-05-08 21:30:00",
    EndTime: "2014-05-08 20:00:00 to 2014-05-08 21:30:00",
    MCId: "7797",
    Cost: "$15",
    ShowId: "6801",
    show: "6801",
    id: "7739",
    venue: "7616",
    start_time: "2014-05-09T03:00:00.000Z",
    end_time: "2014-05-09T04:30:00.000Z",
    performers: [ "7798", "6509", "7777", "6609" ]
}, {
    EventId: "7679",
    VenueId: "7613",
    Name: "Sizzle Pie Stage at the Eagles Lodge Opening Show",
    StartTime: "2014-05-08 20:00:00 to 2014-05-08 21:30:00",
    EndTime: "2014-05-08 20:00:00 to 2014-05-08 21:30:00",
    MCId: "6425",
    Cost: "$15",
    ShowId: "",
    id: "7679",
    venue: "7613",
    start_time: "2014-05-09T03:00:00.000Z",
    end_time: "2014-05-09T04:30:00.000Z",
    performers: [ "6687", "6092", "6102", "5962", "6315", "5845", "6823", "5938" ],
    emcees: [ 6425 ]
}, {
    EventId: "7657",
    VenueId: "7611",
    Name: "The Dead Authors Podcast",
    StartTime: "2014-05-08 20:00:00 to 2014-05-08 21:30:00",
    EndTime: "2014-05-08 20:00:00 to 2014-05-08 21:30:00",
    MCId: "",
    Cost: "$20",
    ShowId: "7782",
    show: "7782",
    id: "7657",
    venue: "7611",
    start_time: "2014-05-09T03:00:00.000Z",
    end_time: "2014-05-09T04:30:00.000Z",
    performers: [ "7588", "6808" ]
}, {
    EventId: "7730",
    VenueId: "7618",
    Name: "MailChimp Stage at the White Owl Social Club Opening Show",
    StartTime: "2014-05-08 20:00:00 to 2014-05-08 21:30:00",
    EndTime: "2014-05-08 20:00:00 to 2014-05-08 21:30:00",
    MCId: "6203",
    Cost: "$15",
    ShowId: "",
    id: "7730",
    venue: "7618",
    start_time: "2014-05-09T03:00:00.000Z",
    end_time: "2014-05-09T04:30:00.000Z",
    performers: [ "6647", "6352", "6305", "6284", "6456", "6839", "6804" ],
    emcees: [ 6203 ]
}, {
    EventId: "7689",
    VenueId: "7614",
    Name: "Hawthorne Lounge Primetime",
    StartTime: "2014-05-08 21:00:00 to 2014-05-08 22:30:00",
    EndTime: "2014-05-08 21:00:00 to 2014-05-08 22:30:00",
    MCId: "5973",
    Cost: "$10",
    ShowId: "",
    id: "7689",
    venue: "7614",
    start_time: "2014-05-09T04:00:00.000Z",
    end_time: "2014-05-09T05:30:00.000Z",
    performers: [ "5806", "6476", "5730", "6153", "6409", "6646", "7566" ],
    emcees: [ 5973 ]
}, {
    EventId: "7653",
    VenueId: "7610",
    Name: "Surprise Me! ",
    StartTime: "2014-05-08 21:00:00 to 2014-05-08 22:30:00",
    EndTime: "2014-05-08 21:00:00 to 2014-05-08 22:30:00",
    MCId: "6215",
    Cost: "$10",
    ShowId: "",
    id: "7653",
    venue: "7610",
    start_time: "2014-05-09T04:00:00.000Z",
    end_time: "2014-05-09T05:30:00.000Z",
    performers: [ "5777", "5774", "5879", "6312", "6690", "5755" ],
    emcees: [ 6215 ]
}, {
    EventId: "7716",
    VenueId: "7617",
    Name: "Tanker Open Mic",
    StartTime: "2014-05-08 21:00:00 to 2014-05-08 22:00:00",
    EndTime: "2014-05-08 21:00:00 to 2014-05-08 22:00:00",
    MCId: "",
    Cost: "$10",
    ShowId: "",
    id: "7716",
    venue: "7617",
    start_time: "2014-05-09T04:00:00.000Z",
    end_time: "2014-05-09T05:00:00.000Z",
    performers: []
}, {
    EventId: "7747",
    VenueId: "7619",
    Name: "Portland Improv w/ Curious Comedy Players and Whiskey Tango",
    StartTime: "2014-05-08 21:00:00 to 2014-05-08 22:30:00",
    EndTime: "2014-05-08 21:00:00 to 2014-05-08 22:30:00",
    MCId: "",
    Cost: "$15",
    ShowId: "7776",
    show: "7776",
    id: "7747",
    venue: "7619",
    start_time: "2014-05-09T04:00:00.000Z",
    end_time: "2014-05-09T05:30:00.000Z",
    performers: [ "8578", "5811" ]
}, {
    EventId: "7621",
    VenueId: "7608",
    Name: "Alhambra Lounge Primetime",
    StartTime: "2014-05-08 21:00:00 to 2014-05-08 22:30:00",
    EndTime: "2014-05-08 21:00:00 to 2014-05-08 22:30:00",
    MCId: "6674",
    Cost: "$15",
    ShowId: "",
    id: "7621",
    venue: "7608",
    start_time: "2014-05-09T04:00:00.000Z",
    end_time: "2014-05-09T05:30:00.000Z",
    performers: [ "6564", "5951", "5976", "6408", "6608", "7579" ],
    emcees: [ 6674 ]
}, {
    EventId: "7658",
    VenueId: "7611",
    Name: "Bossanova Primetime",
    StartTime: "2014-05-08 22:00:00 to 2014-05-08 23:30:00",
    EndTime: "2014-05-08 22:00:00 to 2014-05-08 23:30:00",
    MCId: "6271",
    Cost: "$20",
    ShowId: "",
    id: "7658",
    venue: "7611",
    start_time: "2014-05-09T05:00:00.000Z",
    end_time: "2014-05-09T06:30:00.000Z",
    performers: [ "6696", "6371", "6857", "6659", "6833", "6614", "6834" ],
    emcees: [ 6271 ]
}, {
    EventId: "7701",
    VenueId: "7615",
    Name: "Baron Vaughn Presents: The New Negroes",
    StartTime: "2014-05-08 22:00:00 to 2014-05-08 23:30:00",
    EndTime: "2014-05-08 22:00:00 to 2014-05-08 23:30:00",
    MCId: "6849",
    Cost: "$20",
    ShowId: "",
    id: "7701",
    venue: "7615",
    start_time: "2014-05-09T05:00:00.000Z",
    end_time: "2014-05-09T06:30:00.000Z",
    performers: [ "6134", "6474", "5918", "6276", "5813", "6074", "6805", "6795", "7595" ],
    emcees: [ 6849 ]
}, {
    EventId: "7918",
    VenueId: "7620",
    Name: "Analog Cafe Primetime",
    StartTime: "2014-05-08 22:00:00 to 2014-05-08 23:30:00",
    EndTime: "2014-05-08 22:00:00 to 2014-05-08 23:30:00",
    MCId: "6402",
    Cost: "$10",
    ShowId: "",
    id: "7918",
    venue: "7620",
    start_time: "2014-05-09T05:00:00.000Z",
    end_time: "2014-05-09T06:30:00.000Z",
    performers: [ "6745", "5987", "6379", "7580", "6861", "6804", "6822" ],
    emcees: [ 6402 ]
}, {
    EventId: "7622",
    VenueId: "7618",
    Name: "MailChimp Stage at the White Owl Social Club Primetime",
    StartTime: "2014-05-08 22:00:00 to 2014-05-08 23:30:00",
    EndTime: "2014-05-08 22:00:00 to 2014-05-08 23:30:00",
    MCId: "6681",
    Cost: "$15",
    ShowId: "",
    id: "7622",
    venue: "7618",
    start_time: "2014-05-09T05:00:00.000Z",
    end_time: "2014-05-09T06:30:00.000Z",
    performers: [ "6162", "6413", "6325", "6363", "7568", "6110", "6123", "6205", "6859" ],
    emcees: [ 6681 ]
}, {
    EventId: "7740",
    VenueId: "7609",
    Name: "Taxi Magic Stage at Alhambra Theater Primetime",
    StartTime: "2014-05-08 22:00:00 to 2014-05-08 23:30:00",
    EndTime: "2014-05-08 22:00:00 to 2014-05-08 23:30:00",
    MCId: "5742",
    Cost: "$15",
    ShowId: "",
    id: "7740",
    venue: "7609",
    start_time: "2014-05-09T05:00:00.000Z",
    end_time: "2014-05-09T06:30:00.000Z",
    performers: [ "5906", "6157", "5889", "5998", "6864", "6065", "6808", "6835" ],
    emcees: [ 5742 ]
}, {
    EventId: "7919",
    VenueId: "7613",
    Name: "Sizzle Pie Stage at the Eagles Lodge Primetime",
    StartTime: "2014-05-08 22:00:00 to 2014-05-08 23:30:00",
    EndTime: "2014-05-08 22:00:00 to 2014-05-08 23:30:00",
    MCId: "5787",
    Cost: "$15",
    ShowId: "",
    id: "7919",
    venue: "7613",
    start_time: "2014-05-09T05:00:00.000Z",
    end_time: "2014-05-09T06:30:00.000Z",
    performers: [ "5805", "6536", "5867", "6766", "5894", "6860", "6611" ],
    emcees: [ 5787 ]
}, {
    EventId: "7717",
    VenueId: "7617",
    Name: "Tanker Open Mic",
    StartTime: "2014-05-08 22:00:00 to 2014-05-08 23:00:00",
    EndTime: "2014-05-08 22:00:00 to 2014-05-08 23:00:00",
    MCId: "",
    Cost: "$10",
    ShowId: "",
    id: "7717",
    venue: "7617",
    start_time: "2014-05-09T05:00:00.000Z",
    end_time: "2014-05-09T06:00:00.000Z",
    performers: []
}, {
    EventId: "7810",
    VenueId: "7612",
    Name: "Late Night Action w/ Alex Falcone and Bri Pruett",
    StartTime: "2014-05-08 22:00:00 to 2014-05-08 23:30:00",
    EndTime: "2014-05-08 22:00:00 to 2014-05-08 23:30:00",
    MCId: "6006",
    Cost: "$20",
    ShowId: "6585",
    show: "6585",
    id: "7810",
    venue: "7612",
    start_time: "2014-05-09T05:00:00.000Z",
    end_time: "2014-05-09T06:30:00.000Z",
    performers: [ "6527", "6855", "7579", "6823", "6818" ]
}, {
    EventId: "7718",
    VenueId: "7617",
    Name: "Tanker Open Mic",
    StartTime: "2014-05-08 23:00:00 to 2014-05-09 00:00:00",
    EndTime: "2014-05-08 23:00:00 to 2014-05-09 00:00:00",
    MCId: "",
    Cost: "$10",
    ShowId: "",
    id: "7718",
    venue: "7617",
    start_time: "2014-05-09T06:00:00.000Z",
    end_time: "2014-05-09T07:00:00.000Z",
    performers: []
}, {
    EventId: "8635",
    VenueId: "7614",
    Name: "Set List: Stand-Up Without a Net",
    StartTime: "2014-05-08 23:00:00 to 2014-05-09 00:30:00",
    EndTime: "2014-05-08 23:00:00 to 2014-05-09 00:30:00",
    MCId: "7802",
    Cost: "",
    ShowId: "6868",
    show: "6868",
    id: "8635",
    venue: "7614",
    start_time: "2014-05-09T06:00:00.000Z",
    end_time: "2014-05-09T07:30:00.000Z",
    performers: [ "6509", "5739", "6858", "6014", "6352", "6825", "6674", "6849", "6425", "6069" ],
    emcees: [ 7802 ]
}, {
    EventId: "7699",
    VenueId: "7619",
    Name: "Analog Theater Late Show",
    StartTime: "2014-05-08 23:00:00 to 2014-05-09 00:30:00",
    EndTime: "2014-05-08 23:00:00 to 2014-05-09 00:30:00",
    MCId: "6058",
    Cost: "$15",
    ShowId: "",
    id: "7699",
    venue: "7619",
    start_time: "2014-05-09T06:00:00.000Z",
    end_time: "2014-05-09T07:30:00.000Z",
    performers: [ "5919", "6816", "7777", "6723", "6029", "6004", "6374" ],
    emcees: [ 6058 ]
}, {
    EventId: "7690",
    VenueId: "7614",
    Name: "Hawthorne Lounge Early Show",
    StartTime: "2014-05-09 19:00:00 to 2014-05-09 20:30:00",
    EndTime: "2014-05-09 19:00:00 to 2014-05-09 20:30:00",
    MCId: "6640",
    Cost: "$10",
    ShowId: "",
    id: "7690",
    venue: "7614",
    start_time: "2014-05-10T02:00:00.000Z",
    end_time: "2014-05-10T03:30:00.000Z",
    performers: [ "6483", "5813", "6564", "6118", "5962", "6857" ],
    emcees: [ 6640 ]
}, {
    EventId: "7915",
    VenueId: "7615",
    Name: "Hawthorne Theatre Early Show",
    StartTime: "2014-05-09 19:00:00 to 2014-05-09 20:30:00",
    EndTime: "2014-05-09 19:00:00 to 2014-05-09 20:30:00",
    MCId: "6319",
    Cost: "$15",
    ShowId: "",
    id: "7915",
    venue: "7615",
    start_time: "2014-05-10T02:00:00.000Z",
    end_time: "2014-05-10T03:30:00.000Z",
    performers: [ "6425", "5728", "7580", "7566", "5938", "6864", "6611", "6833" ],
    emcees: [ 6319 ]
}, {
    EventId: "7706",
    VenueId: "7616",
    Name: "Best Kept Secret",
    StartTime: "2014-05-09 19:00:00 to 2014-05-09 20:30:00",
    EndTime: "2014-05-09 19:00:00 to 2014-05-09 20:30:00",
    MCId: "6646",
    Cost: "$15",
    ShowId: "8580",
    show: "8580",
    id: "7706",
    venue: "7616",
    start_time: "2014-05-10T02:00:00.000Z",
    end_time: "2014-05-10T03:30:00.000Z",
    performers: [ "6284", "6735", "6298", "6410", "6699", "6527", "6858" ],
    emcees: [ 6646 ]
}, {
    EventId: "7665",
    VenueId: "7612",
    Name: "Squarespace Stage at the Doug Fir Early Show",
    StartTime: "2014-05-09 19:00:00 to 2014-05-09 20:30:00",
    EndTime: "2014-05-09 19:00:00 to 2014-05-09 20:30:00",
    MCId: "5987",
    Cost: "$20",
    ShowId: "",
    id: "7665",
    venue: "7612",
    start_time: "2014-05-10T02:00:00.000Z",
    end_time: "2014-05-10T03:30:00.000Z",
    performers: [ "6542", "6352", "6354", "6674", "6509", "6275", "6804" ],
    emcees: [ 5987 ]
}, {
    EventId: "7639",
    VenueId: "7609",
    Name: "Baby Talk with Dan Levy &amp; Jensen Karp",
    StartTime: "2014-05-09 19:00:00 to 2014-05-09 20:30:00",
    EndTime: "2014-05-09 19:00:00 to 2014-05-09 20:30:00",
    MCId: "7590",
    Cost: "$15",
    ShowId: "6300",
    show: "6300",
    id: "7639",
    venue: "7609",
    start_time: "2014-05-10T02:00:00.000Z",
    end_time: "2014-05-10T03:30:00.000Z",
    performers: [ "7581", "6123", "6834" ],
    emcees: [ 7590 ]
}, {
    EventId: "7680",
    VenueId: "7613",
    Name: "Sizzle Pie Stage at the Eagles Lodge Early Show",
    StartTime: "2014-05-09 19:00:00 to 2014-05-09 20:30:00",
    EndTime: "2014-05-09 19:00:00 to 2014-05-09 20:30:00",
    MCId: "6134",
    Cost: "$15",
    ShowId: "",
    id: "7680",
    venue: "7613",
    start_time: "2014-05-10T02:00:00.000Z",
    end_time: "2014-05-10T03:30:00.000Z",
    performers: [ "6409", "6058", "7568", "6150", "6174", "6818" ],
    emcees: [ 6134 ]
}, {
    EventId: "7659",
    VenueId: "7611",
    Name: "The Meltdown with Jonah and Kumail",
    StartTime: "2014-05-09 20:00:00 to 2014-05-09 21:30:00",
    EndTime: "2014-05-09 20:00:00 to 2014-05-09 21:30:00",
    MCId: "",
    Cost: "$25",
    ShowId: "6866",
    show: "6866",
    id: "7659",
    venue: "7611",
    start_time: "2014-05-10T03:00:00.000Z",
    end_time: "2014-05-10T04:30:00.000Z",
    performers: [ "6863", "6862", "6823", "6859", "6860" ]
}, {
    EventId: "7623",
    VenueId: "7608",
    Name: "Alhambra Lounge Early Show",
    StartTime: "2014-05-09 20:00:00 to 2014-05-09 21:30:00",
    EndTime: "2014-05-09 20:00:00 to 2014-05-09 21:30:00",
    MCId: "6456",
    Cost: "$10",
    ShowId: "",
    id: "7623",
    venue: "7608",
    start_time: "2014-05-10T03:00:00.000Z",
    end_time: "2014-05-10T04:30:00.000Z",
    performers: [ "6702", "6536", "6766", "6696", "6065", "6029" ],
    emcees: [ 6456 ]
}, {
    EventId: "7741",
    VenueId: "7619",
    Name: "The Very Important Show ",
    StartTime: "2014-05-09 20:00:00 to 2014-05-09 21:30:00",
    EndTime: "2014-05-09 20:00:00 to 2014-05-09 21:30:00",
    MCId: "",
    Cost: "$15",
    ShowId: "5899",
    show: "5899",
    id: "7741",
    venue: "7619",
    start_time: "2014-05-10T03:00:00.000Z",
    end_time: "2014-05-10T04:30:00.000Z",
    performers: [ "5998", "7773", "6371", "6130", "6858", "6609", "6745", "6659", "7786" ]
}, {
    EventId: "7807",
    VenueId: "7618",
    Name: "The Comedy Bull",
    StartTime: "2014-05-09 20:00:00 to 2014-05-09 21:30:00",
    EndTime: "2014-05-09 20:00:00 to 2014-05-09 21:30:00",
    MCId: "5932",
    Cost: "$15",
    ShowId: "5936",
    show: "5936",
    id: "7807",
    venue: "7618",
    start_time: "2014-05-10T03:00:00.000Z",
    end_time: "2014-05-10T04:30:00.000Z",
    performers: [ "5983", "6731", "6824", "6102", "7881" ],
    emcees: [ 5932 ]
}, {
    EventId: "7624",
    VenueId: "7612",
    Name: "Squarespace Stage at the Doug Fir Primetime",
    StartTime: "2014-05-09 21:00:00 to 2014-05-09 22:30:00",
    EndTime: "2014-05-09 21:00:00 to 2014-05-09 22:30:00",
    MCId: "5889",
    Cost: "$20",
    ShowId: "",
    id: "7624",
    venue: "7612",
    start_time: "2014-05-10T04:00:00.000Z",
    end_time: "2014-05-10T05:30:00.000Z",
    performers: [ "5867", "5806", "6822", "6805", "6614", "7579" ],
    emcees: [ 5889 ]
}, {
    EventId: "7702",
    VenueId: "7615",
    Name: "Hawthorne Theatre Primetime",
    StartTime: "2014-05-09 21:00:00 to 2014-05-09 22:30:00",
    EndTime: "2014-05-09 21:00:00 to 2014-05-09 22:30:00",
    MCId: "6527",
    Cost: "$20",
    ShowId: "",
    id: "7702",
    venue: "7615",
    start_time: "2014-05-10T04:00:00.000Z",
    end_time: "2014-05-10T05:30:00.000Z",
    performers: [ "5918", "6215", "6857", "5777", "7895", "5755", "6791" ],
    emcees: [ 6527 ]
}, {
    EventId: "7691",
    VenueId: "7614",
    Name: "Hawthorne Lounge Primetime",
    StartTime: "2014-05-09 21:00:00 to 2014-05-09 22:30:00",
    EndTime: "2014-05-09 21:00:00 to 2014-05-09 22:30:00",
    MCId: "5976",
    Cost: "$10",
    ShowId: "",
    id: "7691",
    venue: "7614",
    start_time: "2014-05-10T04:00:00.000Z",
    end_time: "2014-05-10T05:30:00.000Z",
    performers: [ "6312", "6163", "6315", "5856", "6128", "6004" ],
    emcees: [ 5976 ]
}, {
    EventId: "7749",
    VenueId: "7609",
    Name: "Taxi Magic Stage at Alhambra Theater Primetime",
    StartTime: "2014-05-09 21:00:00 to 2014-05-09 22:30:00",
    EndTime: "2014-05-09 21:00:00 to 2014-05-09 22:30:00",
    MCId: "5845",
    Cost: "$20",
    ShowId: "",
    id: "7749",
    venue: "7609",
    start_time: "2014-05-10T04:00:00.000Z",
    end_time: "2014-05-10T05:30:00.000Z",
    performers: [ "6092", "5951", "6014", "6825", "6365", "6835", "6374" ],
    emcees: [ 5845 ]
}, {
    EventId: "7750",
    VenueId: "7620",
    Name: "Analog Cafe Primetime",
    StartTime: "2014-05-09 21:00:00 to 2014-05-09 22:30:00",
    EndTime: "2014-05-09 21:00:00 to 2014-05-09 22:30:00",
    MCId: "6704",
    Cost: "$10",
    ShowId: "",
    id: "7750",
    venue: "7620",
    start_time: "2014-05-10T04:00:00.000Z",
    end_time: "2014-05-10T05:30:00.000Z",
    performers: [ "5919", "6157", "7777", "6151", "6723", "6189", "5906" ],
    emcees: [ 6704 ]
}, {
    EventId: "7654",
    VenueId: "7610",
    Name: "Surprise Me!",
    StartTime: "2014-05-09 21:00:00 to 2014-05-09 22:30:00",
    EndTime: "2014-05-09 21:00:00 to 2014-05-09 22:30:00",
    MCId: "6049",
    Cost: "$10",
    ShowId: "",
    id: "7654",
    venue: "7610",
    start_time: "2014-05-10T04:00:00.000Z",
    end_time: "2014-05-10T05:30:00.000Z",
    performers: [ "6686", "6359", "6058", "5739", "6735", "6861" ],
    emcees: [ 6049 ]
}, {
    EventId: "7951",
    VenueId: "7613",
    Name: "Sizzle Pie Stage at the Eagles Lodge Primetime",
    StartTime: "2014-05-09 21:00:00 to 2014-05-09 22:30:00",
    EndTime: "2014-05-09 21:00:00 to 2014-05-09 22:30:00",
    MCId: "6476",
    Cost: "$15",
    ShowId: "",
    id: "7951",
    venue: "7613",
    start_time: "2014-05-10T04:00:00.000Z",
    end_time: "2014-05-10T05:30:00.000Z",
    performers: [ "6337", "6717", "6800", "5783", "6029", "6280", "6069" ],
    emcees: [ 6476 ]
}, {
    EventId: "7641",
    VenueId: "7616",
    Name: "Jupiter Tent Primetime",
    StartTime: "2014-05-09 21:00:00 to 2014-05-09 22:30:00",
    EndTime: "2014-05-09 21:00:00 to 2014-05-09 22:30:00",
    MCId: "6276",
    Cost: "$10",
    ShowId: "",
    id: "7641",
    venue: "7616",
    start_time: "2014-05-10T04:00:00.000Z",
    end_time: "2014-05-10T05:30:00.000Z",
    performers: [ "6534", "6159", "6305", "6474", "5879", "6823" ],
    emcees: [ 6276 ]
}, {
    EventId: "7719",
    VenueId: "7617",
    Name: "Tanker Open Mic",
    StartTime: "2014-05-09 21:00:00 to 2014-05-09 22:00:00",
    EndTime: "2014-05-09 21:00:00 to 2014-05-09 22:00:00",
    MCId: "",
    Cost: "$10",
    ShowId: "",
    id: "7719",
    venue: "7617",
    start_time: "2014-05-10T04:00:00.000Z",
    end_time: "2014-05-10T05:00:00.000Z",
    performers: []
}, {
    EventId: "7660",
    VenueId: "7611",
    Name: "IFC Presents Reggie Watts and Friends",
    StartTime: "2014-05-09 22:00:00 to 2014-05-09 23:30:00",
    EndTime: "2014-05-09 22:00:00 to 2014-05-09 23:30:00",
    MCId: "5894",
    Cost: "$25",
    ShowId: "",
    id: "7660",
    venue: "7611",
    start_time: "2014-05-10T05:00:00.000Z",
    end_time: "2014-05-10T06:30:00.000Z",
    performers: [ "6727", "6816", "7777", "6123", "7595" ],
    emcees: [ 5894 ]
}, {
    EventId: "7806",
    VenueId: "7608",
    Name: "Hot Comedy with the Spicy News",
    StartTime: "2014-05-09 22:00:00 to 2014-05-09 23:30:00",
    EndTime: "2014-05-09 22:00:00 to 2014-05-09 23:30:00",
    MCId: "6042",
    Cost: "$15",
    ShowId: "6734",
    show: "6734",
    id: "7806",
    venue: "7608",
    start_time: "2014-05-10T05:00:00.000Z",
    end_time: "2014-05-10T06:30:00.000Z",
    performers: [ "5787", "6629", "6363", "6319", "6818", "7881" ]
}, {
    EventId: "7720",
    VenueId: "7617",
    Name: "Tanker Open Mic",
    StartTime: "2014-05-09 22:00:00 to 2014-05-09 23:00:00",
    EndTime: "2014-05-09 22:00:00 to 2014-05-09 23:00:00",
    MCId: "",
    Cost: "$10",
    ShowId: "",
    id: "7720",
    venue: "7617",
    start_time: "2014-05-10T05:00:00.000Z",
    end_time: "2014-05-10T06:00:00.000Z",
    performers: []
}, {
    EventId: "7733",
    VenueId: "7618",
    Name: "Baron Vaughn Presents: The New Negroes",
    StartTime: "2014-05-09 22:00:00 to 2014-05-09 23:30:00",
    EndTime: "2014-05-09 22:00:00 to 2014-05-09 23:30:00",
    MCId: "6849",
    Cost: "$20",
    ShowId: "",
    id: "7733",
    venue: "7618",
    start_time: "2014-05-10T05:00:00.000Z",
    end_time: "2014-05-10T06:30:00.000Z",
    performers: [ "6410", "6561", "6690", "5999", "8015", "6839", "5876", "6153", "7895" ],
    emcees: [ 6849 ]
}, {
    EventId: "7811",
    VenueId: "7619",
    Name: "The Mystery Box Show ",
    StartTime: "2014-05-09 22:00:00 to 2014-05-09 23:30:00",
    EndTime: "2014-05-09 22:00:00 to 2014-05-09 23:30:00",
    MCId: "7885",
    Cost: "$15",
    ShowId: "5871",
    show: "5871",
    id: "7811",
    venue: "7619",
    start_time: "2014-05-10T05:00:00.000Z",
    end_time: "2014-05-10T06:30:00.000Z",
    performers: [ "6687", "6402", "6834", "7896" ]
}, {
    EventId: "7742",
    VenueId: "7609",
    Name: "The Blackout Diaries",
    StartTime: "2014-05-09 23:00:00 to 2014-05-10 00:30:00",
    EndTime: "2014-05-09 23:00:00 to 2014-05-10 00:30:00",
    MCId: "6144",
    Cost: "$15",
    ShowId: "6143",
    show: "6143",
    id: "7742",
    venue: "7609",
    start_time: "2014-05-10T06:00:00.000Z",
    end_time: "2014-05-10T07:30:00.000Z",
    performers: [ "6858", "6205", "6859", "5739" ],
    emcees: [ 6144 ]
}, {
    EventId: "7625",
    VenueId: "7613",
    Name: "Sizzle Pie Stage at the Eagles Lodge Late Show",
    StartTime: "2014-05-09 23:00:00 to 2014-05-10 00:30:00",
    EndTime: "2014-05-09 23:00:00 to 2014-05-10 00:30:00",
    MCId: "6591",
    Cost: "$15",
    ShowId: "",
    id: "7625",
    venue: "7613",
    start_time: "2014-05-10T06:00:00.000Z",
    end_time: "2014-05-10T07:30:00.000Z",
    performers: [ "6681", "7785", "5730", "6825", "6110", "6065", "6863", "7579" ],
    emcees: [ 6591 ]
}, {
    EventId: "7721",
    VenueId: "7617",
    Name: "Tanker Open Mic",
    StartTime: "2014-05-09 23:00:00 to 2014-05-10 00:00:00",
    EndTime: "2014-05-09 23:00:00 to 2014-05-10 00:00:00",
    MCId: "",
    Cost: "$10",
    ShowId: "",
    id: "7721",
    venue: "7617",
    start_time: "2014-05-10T06:00:00.000Z",
    end_time: "2014-05-10T07:00:00.000Z",
    performers: []
}, {
    EventId: "7692",
    VenueId: "7614",
    Name: "Hawthorne Lounge Late Show",
    StartTime: "2014-05-09 23:00:00 to 2014-05-10 00:30:00",
    EndTime: "2014-05-09 23:00:00 to 2014-05-10 00:30:00",
    MCId: "6162",
    Cost: "$10",
    ShowId: "",
    id: "7692",
    venue: "7614",
    start_time: "2014-05-10T06:00:00.000Z",
    end_time: "2014-05-10T07:30:00.000Z",
    performers: [ "5774", "6647", "5805", "6032", "6203", "6762" ],
    emcees: [ 6162 ]
}, {
    EventId: "7667",
    VenueId: "7612",
    Name: "Voodoo Doughnut Recordings Presents Ian Karmel and Nathan Brannon",
    StartTime: "2014-05-09 23:00:00 to 2014-05-10 00:30:00",
    EndTime: "2014-05-09 23:00:00 to 2014-05-10 00:30:00",
    MCId: "6408",
    Cost: "$20",
    ShowId: "7790",
    show: "7790",
    id: "7667",
    venue: "7612",
    start_time: "2014-05-10T06:00:00.000Z",
    end_time: "2014-05-10T07:30:00.000Z",
    performers: [ "6392", "6810", "5742", "6379", "6609", "6824", "6074" ],
    emcees: [ 6408 ]
}, {
    EventId: "7804",
    VenueId: "7615",
    Name: "PERSONA! with Tony Sam",
    StartTime: "2014-05-09 23:00:00 to 2014-05-10 00:30:00",
    EndTime: "2014-05-09 23:00:00 to 2014-05-10 00:30:00",
    MCId: "6130",
    Cost: "$20",
    ShowId: "6131",
    show: "6131",
    id: "7804",
    venue: "7615",
    start_time: "2014-05-10T06:00:00.000Z",
    end_time: "2014-05-10T07:30:00.000Z",
    performers: [ "6804", "5998", "6659", "7883", "6425", "7881" ],
    emcees: [ 6130 ]
}, {
    EventId: "7916",
    VenueId: "7611",
    Name: "Bossanova Late Show",
    StartTime: "2014-05-09 23:59:00 to 2014-05-10 01:30:00",
    EndTime: "2014-05-09 23:59:00 to 2014-05-10 01:30:00",
    MCId: "6325",
    Cost: "$15",
    ShowId: "",
    id: "7916",
    venue: "7611",
    start_time: "2014-05-10T06:59:00.000Z",
    end_time: "2014-05-10T08:30:00.000Z",
    performers: [ "5973", "6271", "6413", "6795", "6608", "6861", "6456", "7566", "6835" ],
    emcees: [ 6325 ]
}, {
    EventId: "7722",
    VenueId: "7617",
    Name: "Tanker Open Mic",
    StartTime: "2014-05-09 23:59:00 to 2014-05-10 01:00:00",
    EndTime: "2014-05-09 23:59:00 to 2014-05-10 01:00:00",
    MCId: "",
    Cost: "$10",
    ShowId: "",
    id: "7722",
    venue: "7617",
    start_time: "2014-05-10T06:59:00.000Z",
    end_time: "2014-05-10T08:00:00.000Z",
    performers: []
}, {
    EventId: "7668",
    VenueId: "7612",
    Name: "The Crabfeast",
    StartTime: "2014-05-10 13:00:00 to 2014-05-10 14:30:00",
    EndTime: "2014-05-10 13:00:00 to 2014-05-10 14:30:00",
    MCId: "",
    Cost: "$15",
    ShowId: "6811",
    show: "6811",
    id: "7668",
    venue: "7612",
    start_time: "2014-05-10T20:00:00.000Z",
    end_time: "2014-05-10T21:30:00.000Z",
    performers: [ "6810", "6092", "6833", "6862" ]
}, {
    EventId: "7642",
    VenueId: "7609",
    Name: "Probably Science",
    StartTime: "2014-05-10 14:00:00 to 2014-05-10 15:30:00",
    EndTime: "2014-05-10 14:00:00 to 2014-05-10 15:30:00",
    MCId: "",
    Cost: "$10",
    ShowId: "7781",
    show: "7781",
    id: "7642",
    venue: "7609",
    start_time: "2014-05-10T21:00:00.000Z",
    end_time: "2014-05-10T22:30:00.000Z",
    performers: [ "6855", "6861", "6365" ]
}, {
    EventId: "7669",
    VenueId: "7612",
    Name: "Jonah Raydio",
    StartTime: "2014-05-10 15:00:00 to 2014-05-10 16:30:00",
    EndTime: "2014-05-10 15:00:00 to 2014-05-10 16:30:00",
    MCId: "",
    Cost: "$20",
    ShowId: "6869",
    show: "6869",
    id: "7669",
    venue: "7612",
    start_time: "2014-05-10T22:00:00.000Z",
    end_time: "2014-05-10T23:30:00.000Z",
    performers: [ "6863", "7882" ]
}, {
    EventId: "7648",
    VenueId: "7609",
    Name: "Hang Out with Me Live Podcast Taping with Myq Kaplan",
    StartTime: "2014-05-10 16:00:00 to 2014-05-10 17:30:00",
    EndTime: "2014-05-10 16:00:00 to 2014-05-10 17:30:00",
    MCId: "6818",
    Cost: "$15",
    ShowId: "6836",
    show: "6836",
    id: "7648",
    venue: "7609",
    start_time: "2014-05-10T23:00:00.000Z",
    end_time: "2014-05-11T00:30:00.000Z",
    performers: [ "6102", "6824" ],
    emcees: [ 6818 ]
}, {
    EventId: "7816",
    VenueId: "7616",
    Name: "Set List Open Mic",
    StartTime: "2014-05-10 17:00:00 to 2014-05-10 18:30:00",
    EndTime: "2014-05-10 17:00:00 to 2014-05-10 18:30:00",
    MCId: "7803",
    Cost: "$10",
    ShowId: "",
    id: "7816",
    venue: "7616",
    start_time: "2014-05-11T00:00:00.000Z",
    end_time: "2014-05-11T01:30:00.000Z",
    performers: [],
    emcees: [ 7803 ]
}, {
    EventId: "7670",
    VenueId: "7612",
    Name: "Harmontown",
    StartTime: "2014-05-10 17:30:00 to 2014-05-10 19:00:00",
    EndTime: "2014-05-10 17:30:00 to 2014-05-10 19:00:00",
    MCId: "",
    Cost: "$25",
    ShowId: "6867",
    show: "6867",
    id: "7670",
    venue: "7612",
    start_time: "2014-05-11T00:30:00.000Z",
    end_time: "2014-05-11T02:00:00.000Z",
    performers: [ "6854", "6856" ]
}, {
    EventId: "7644",
    VenueId: "7609",
    Name: "Throwing Shade",
    StartTime: "2014-05-10 18:00:00 to 2014-05-10 19:30:00",
    EndTime: "2014-05-10 18:00:00 to 2014-05-10 19:30:00",
    MCId: "",
    Cost: "$15",
    ShowId: "5909",
    show: "5909",
    id: "7644",
    venue: "7609",
    start_time: "2014-05-11T01:00:00.000Z",
    end_time: "2014-05-11T02:30:00.000Z",
    performers: [ "7893", "7894" ]
}, {
    EventId: "7743",
    VenueId: "7613",
    Name: "Sizzle Pie Stage at the Eagles Lodge Early Show",
    StartTime: "2014-05-10 19:00:00 to 2014-05-10 20:30:00",
    EndTime: "2014-05-10 19:00:00 to 2014-05-10 20:30:00",
    MCId: "6483",
    Cost: "$15",
    ShowId: "",
    id: "7743",
    venue: "7613",
    start_time: "2014-05-11T02:00:00.000Z",
    end_time: "2014-05-11T03:30:00.000Z",
    performers: [ "5856", "6561", "6163", "6305", "6456", "6805", "6834", "6614" ],
    emcees: [ 6483 ]
}, {
    EventId: "7808",
    VenueId: "7619",
    Name: "Portland Masters",
    StartTime: "2014-05-10 19:00:00 to 2014-05-10 20:30:00",
    EndTime: "2014-05-10 19:00:00 to 2014-05-10 20:30:00",
    MCId: "7824",
    Cost: "$20",
    ShowId: "7822",
    show: "7822",
    id: "7808",
    venue: "7619",
    start_time: "2014-05-11T02:00:00.000Z",
    end_time: "2014-05-11T03:30:00.000Z",
    performers: [ "6074", "6723", "7823", "7825", "6857", "6864" ],
    emcees: [ 7824 ]
}, {
    EventId: "7693",
    VenueId: "7614",
    Name: "Hawthorne Lounge Early Show",
    StartTime: "2014-05-10 19:00:00 to 2014-05-10 20:30:00",
    EndTime: "2014-05-10 19:00:00 to 2014-05-10 20:30:00",
    MCId: "6312",
    Cost: "$10",
    ShowId: "",
    id: "7693",
    venue: "7614",
    start_time: "2014-05-11T02:00:00.000Z",
    end_time: "2014-05-11T03:30:00.000Z",
    performers: [ "6410", "6629", "6534", "5976", "6215", "6134", "6144" ],
    emcees: [ 6312 ]
}, {
    EventId: "7678",
    VenueId: "7608",
    Name: "All That Could Have Been",
    StartTime: "2014-05-10 19:00:00 to 2014-05-10 20:30:00",
    EndTime: "2014-05-10 19:00:00 to 2014-05-10 20:30:00",
    MCId: "6359",
    Cost: "$15",
    ShowId: "6356",
    show: "6356",
    id: "7678",
    venue: "7608",
    start_time: "2014-05-11T02:00:00.000Z",
    end_time: "2014-05-11T03:30:00.000Z",
    performers: [ "6379", "6696", "6157", "6402", "5867", "6123" ],
    emcees: [ 6359 ]
}, {
    EventId: "7911",
    VenueId: "7620",
    Name: "Analog Cafe Early Show",
    StartTime: "2014-05-10 19:00:00 to 2014-05-10 20:30:00",
    EndTime: "2014-05-10 19:00:00 to 2014-05-10 20:30:00",
    MCId: "6150",
    Cost: "$10",
    ShowId: "",
    id: "7911",
    venue: "7620",
    start_time: "2014-05-11T02:00:00.000Z",
    end_time: "2014-05-11T03:30:00.000Z",
    performers: [ "5805", "5739", "6203", "6640", "5973", "6280" ],
    emcees: [ 6150 ]
}, {
    EventId: "7671",
    VenueId: "7612",
    Name: "Set List: Stand-Up Without a Net",
    StartTime: "2014-05-10 20:00:00 to 2014-05-10 21:30:00",
    EndTime: "2014-05-10 20:00:00 to 2014-05-10 21:30:00",
    MCId: "7803",
    Cost: "$25",
    ShowId: "6868",
    show: "6868",
    id: "7671",
    venue: "7612",
    start_time: "2014-05-11T03:00:00.000Z",
    end_time: "2014-05-11T04:30:00.000Z",
    performers: [ "6609", "6723", "6365", "6791", "7775", "6859", "6833" ],
    emcees: [ 7803 ]
}, {
    EventId: "7645",
    VenueId: "7609",
    Name: "The Live Read",
    StartTime: "2014-05-10 20:00:00 to 2014-05-10 21:30:00",
    EndTime: "2014-05-10 20:00:00 to 2014-05-10 21:30:00",
    MCId: "7590",
    Cost: "$25",
    ShowId: "7605",
    show: "7605",
    id: "7645",
    venue: "7609",
    start_time: "2014-05-11T03:00:00.000Z",
    end_time: "2014-05-11T04:30:00.000Z",
    performers: [ "6816", "6863", "6824", "6860", "6374", "7777", "6823", "6014", "7820", "7881", "7786", "6065", "6674" ],
    emcees: [ 7590 ]
}, {
    EventId: "7734",
    VenueId: "7618",
    Name: "Myq Kaplan and Friends",
    StartTime: "2014-05-10 20:00:00 to 2014-05-10 21:30:00",
    EndTime: "2014-05-10 20:00:00 to 2014-05-10 21:30:00",
    MCId: "6818",
    Cost: "$20",
    ShowId: "",
    id: "7734",
    venue: "7618",
    start_time: "2014-05-11T03:00:00.000Z",
    end_time: "2014-05-11T04:30:00.000Z",
    performers: [ "6102", "7579", "6319", "6425", "6857", "7828", "7595" ],
    emcees: [ 6818 ]
}, {
    EventId: "7912",
    VenueId: "7610",
    Name: "Surprise Me! ",
    StartTime: "2014-05-10 21:00:00 to 2014-05-11 22:30:00",
    EndTime: "2014-05-10 21:00:00 to 2014-05-11 22:30:00",
    MCId: "6629",
    Cost: "$10",
    ShowId: "",
    id: "7912",
    venue: "7610",
    start_time: "2014-05-11T04:00:00.000Z",
    end_time: "2014-05-12T05:30:00.000Z",
    performers: [ "6717", "5932", "5983", "5845", "6271", "6762", "5894" ],
    emcees: [ 6629 ]
}, {
    EventId: "8632",
    VenueId: "7619",
    Name: "Pivot Presents: W. Kamau Bell and Friends",
    StartTime: "2014-05-10 21:00:00 to 2014-05-10 22:30:00",
    EndTime: "2014-05-10 21:00:00 to 2014-05-10 22:30:00",
    MCId: "",
    Cost: "",
    ShowId: "8634",
    show: "8634",
    id: "8632",
    venue: "7619",
    start_time: "2014-05-11T04:00:00.000Z",
    end_time: "2014-05-11T05:30:00.000Z",
    performers: [ "6731", "6298", "8015", "6835", "7895" ]
}, {
    EventId: "7723",
    VenueId: "7617",
    Name: "Tanker Open Mic",
    StartTime: "2014-05-10 21:00:00 to 2014-05-10 22:00:00",
    EndTime: "2014-05-10 21:00:00 to 2014-05-10 22:00:00",
    MCId: "",
    Cost: "$10",
    ShowId: "",
    id: "7723",
    venue: "7617",
    start_time: "2014-05-11T04:00:00.000Z",
    end_time: "2014-05-11T05:00:00.000Z",
    performers: []
}, {
    EventId: "7751",
    VenueId: "7620",
    Name: "Analog Cafe Primetime",
    StartTime: "2014-05-10 21:00:00 to 2014-05-10 22:30:00",
    EndTime: "2014-05-10 21:00:00 to 2014-05-10 22:30:00",
    MCId: "6727",
    Cost: "$10",
    ShowId: "",
    id: "7751",
    venue: "7620",
    start_time: "2014-05-11T04:00:00.000Z",
    end_time: "2014-05-11T05:30:00.000Z",
    performers: [ "6413", "5806", "6409", "6118", "6509", "6284", "6130" ],
    emcees: [ 6727 ]
}, {
    EventId: "7708",
    VenueId: "7616",
    Name: "Best Kept Secret",
    StartTime: "2014-05-10 21:00:00 to 2014-05-10 22:30:00",
    EndTime: "2014-05-10 21:00:00 to 2014-05-10 22:30:00",
    MCId: "5867",
    Cost: "$15",
    ShowId: "8580",
    show: "8580",
    id: "7708",
    venue: "7616",
    start_time: "2014-05-11T04:00:00.000Z",
    end_time: "2014-05-11T05:30:00.000Z",
    performers: [ "6032", "5774", "5906", "5919", "6275", "5987", "7566" ],
    emcees: [ 5867 ]
}, {
    EventId: "7745",
    VenueId: "7608",
    Name: "Alhambra Lounge Primetime",
    StartTime: "2014-05-10 21:00:00 to 2014-05-10 22:30:00",
    EndTime: "2014-05-10 21:00:00 to 2014-05-10 22:30:00",
    MCId: "6337",
    Cost: "$10",
    ShowId: "",
    id: "7745",
    venue: "7608",
    start_time: "2014-05-11T04:00:00.000Z",
    end_time: "2014-05-11T05:30:00.000Z",
    performers: [ "6686", "7581", "5728", "6325", "7568", "6069" ],
    emcees: [ 6337 ]
}, {
    EventId: "7694",
    VenueId: "7614",
    Name: "Hawthorne Lounge Primetime",
    StartTime: "2014-05-10 21:00:00 to 2014-05-10 22:30:00",
    EndTime: "2014-05-10 21:00:00 to 2014-05-10 22:30:00",
    MCId: "6839",
    Cost: "$10",
    ShowId: "",
    id: "7694",
    venue: "7614",
    start_time: "2014-05-11T04:00:00.000Z",
    end_time: "2014-05-11T05:30:00.000Z",
    performers: [ "5777", "6276", "6681", "5951", "5962", "6527", "5938" ],
    emcees: [ 6839 ]
}, {
    EventId: "7638",
    VenueId: "7613",
    Name: "The Wahlberg Solution",
    StartTime: "2014-05-10 21:00:00 to 2014-05-10 22:30:00",
    EndTime: "2014-05-10 21:00:00 to 2014-05-10 22:30:00",
    MCId: "7518",
    Cost: "$15",
    ShowId: "7519",
    show: "7519",
    id: "7638",
    venue: "7613",
    start_time: "2014-05-11T04:00:00.000Z",
    end_time: "2014-05-11T05:30:00.000Z",
    performers: [ "6659", "6849", "6858", "5998" ],
    emcees: [ 7518 ]
}, {
    EventId: "7805",
    VenueId: "7618",
    Name: "Brew Haha: The Comedy Show Drinking Game",
    StartTime: "2014-05-10 22:00:00 to 2014-05-10 23:30:00",
    EndTime: "2014-05-10 22:00:00 to 2014-05-10 23:30:00",
    MCId: "",
    Cost: "$20",
    ShowId: "6347",
    show: "6347",
    id: "7805",
    venue: "7618",
    start_time: "2014-05-11T05:00:00.000Z",
    end_time: "2014-05-11T06:30:00.000Z",
    performers: [ "6810", "6805", "5730", "5742", "6859", "6825" ]
}, {
    EventId: "8633",
    VenueId: "7612",
    Name: "Squarespace Stage at Doug Fir Primetime",
    StartTime: "2014-05-10 22:00:00 to 2014-05-10 23:30:00",
    EndTime: "2014-05-10 22:00:00 to 2014-05-10 23:30:00",
    MCId: "5999",
    Cost: "",
    ShowId: "",
    id: "8633",
    venue: "7612",
    start_time: "2014-05-11T05:00:00.000Z",
    end_time: "2014-05-11T06:30:00.000Z",
    performers: [ "6674", "5894", "6704", "6029", "6646", "6611", "6123" ],
    emcees: [ 5999 ]
}, {
    EventId: "7724",
    VenueId: "7617",
    Name: "Tanker Open Mic",
    StartTime: "2014-05-10 22:00:00 to 2014-05-10 23:00:00",
    EndTime: "2014-05-10 22:00:00 to 2014-05-10 23:00:00",
    MCId: "",
    Cost: "$10",
    ShowId: "",
    id: "7724",
    venue: "7617",
    start_time: "2014-05-11T05:00:00.000Z",
    end_time: "2014-05-11T06:00:00.000Z",
    performers: []
}, {
    EventId: "7646",
    VenueId: "7609",
    Name: "Competitive Erotic Fan Fiction",
    StartTime: "2014-05-10 22:00:00 to 2014-05-10 23:30:00",
    EndTime: "2014-05-10 22:00:00 to 2014-05-10 23:30:00",
    MCId: "6379",
    Cost: "$20",
    ShowId: "5903",
    show: "5903",
    id: "7646",
    venue: "7609",
    start_time: "2014-05-11T05:00:00.000Z",
    end_time: "2014-05-11T06:30:00.000Z",
    performers: [ "5889", "6824", "6536", "6189", "6065", "6808", "6271", "6823", "6609" ],
    emcees: [ 6379 ]
}, {
    EventId: "8631",
    VenueId: "7619",
    Name: "The Show That Dare Not Speak Its Name",
    StartTime: "2014-05-10 23:00:00 to 2014-05-11 00:30:00",
    EndTime: "2014-05-10 23:00:00 to 2014-05-11 00:30:00",
    MCId: "5879",
    Cost: "",
    ShowId: "",
    id: "8631",
    venue: "7619",
    start_time: "2014-05-11T06:00:00.000Z",
    end_time: "2014-05-11T07:30:00.000Z",
    performers: [ "6699", "6647", "6476", "6157", "5876", "6189", "7881" ],
    emcees: [ 5879 ]
}, {
    EventId: "7685",
    VenueId: "7613",
    Name: "Sizzle Pie Stage at the Eagles Lodge Late Show",
    StartTime: "2014-05-10 23:00:00 to 2014-05-11 00:30:00",
    EndTime: "2014-05-10 23:00:00 to 2014-05-11 00:30:00",
    MCId: "6032",
    Cost: "$15",
    ShowId: "",
    id: "7685",
    venue: "7613",
    start_time: "2014-05-11T06:00:00.000Z",
    end_time: "2014-05-11T07:30:00.000Z",
    performers: [ "6735", "6474", "7580", "6762", "6004", "6860" ],
    emcees: [ 6032 ]
}, {
    EventId: "7752",
    VenueId: "7620",
    Name: "Analog Cafe Late Show",
    StartTime: "2014-05-10 23:00:00 to 2014-05-11 00:30:00",
    EndTime: "2014-05-10 23:00:00 to 2014-05-11 00:30:00",
    MCId: "5983",
    Cost: "$10",
    ShowId: "",
    id: "7752",
    venue: "7620",
    start_time: "2014-05-11T06:00:00.000Z",
    end_time: "2014-05-11T07:30:00.000Z",
    performers: [ "6766", "6363", "5783", "6110", "6608", "6174", "6408" ],
    emcees: [ 5983 ]
}, {
    EventId: "7725",
    VenueId: "7617",
    Name: "Tanker Open Mic",
    StartTime: "2014-05-10 23:00:00 to 2014-05-11 00:00:00",
    EndTime: "2014-05-10 23:00:00 to 2014-05-11 00:00:00",
    MCId: "",
    Cost: "$10",
    ShowId: "",
    id: "7725",
    venue: "7617",
    start_time: "2014-05-11T06:00:00.000Z",
    end_time: "2014-05-11T07:00:00.000Z",
    performers: []
}, {
    EventId: "7695",
    VenueId: "7614",
    Name: "Hawthorne Lounge Late Show",
    StartTime: "2014-05-10 23:00:00 to 2014-05-11 00:30:00",
    EndTime: "2014-05-10 23:00:00 to 2014-05-11 00:30:00",
    MCId: "5813",
    Cost: "$10",
    ShowId: "",
    id: "7695",
    venue: "7614",
    start_time: "2014-05-11T06:00:00.000Z",
    end_time: "2014-05-11T07:30:00.000Z",
    performers: [ "6702", "6745", "6354", "6159", "6564", "6800", "6374" ],
    emcees: [ 5813 ]
}, {
    EventId: "7628",
    VenueId: "7608",
    Name: "Alhambra Lounge Late Show",
    StartTime: "2014-05-10 23:00:00 to 2014-05-11 00:30:00",
    EndTime: "2014-05-10 23:00:00 to 2014-05-11 00:30:00",
    MCId: "5918",
    Cost: "$10",
    ShowId: "",
    id: "7628",
    venue: "7608",
    start_time: "2014-05-11T06:00:00.000Z",
    end_time: "2014-05-11T07:30:00.000Z",
    performers: [ "6162", "6049", "6591", "6392", "5938", "6371" ],
    emcees: [ 5918 ]
}, {
    EventId: "7815",
    VenueId: "7618",
    Name: "Blam! Blam! Blam! Presents &quot;Black Milk&quot;",
    StartTime: "2014-05-10 23:30:00 to 2014-05-11 01:30:00",
    EndTime: "2014-05-10 23:30:00 to 2014-05-11 01:30:00",
    MCId: "",
    Cost: "$20",
    ShowId: "7814",
    show: "7814",
    id: "7815",
    venue: "7618",
    start_time: "2014-05-11T06:30:00.000Z",
    end_time: "2014-05-11T08:30:00.000Z",
    performers: [ "7786", "6659", "5755", "6795", "6402", "6319", "6205", "6849" ]
}, {
    EventId: "7726",
    VenueId: "7617",
    Name: "Tanker Open Mic",
    StartTime: "2014-05-10 23:59:00 to 2014-05-11 01:00:00",
    EndTime: "2014-05-10 23:59:00 to 2014-05-11 01:00:00",
    MCId: "",
    Cost: "$10",
    ShowId: "",
    id: "7726",
    venue: "7617",
    start_time: "2014-05-11T06:59:00.000Z",
    end_time: "2014-05-11T08:00:00.000Z",
    performers: []
}, {
    EventId: "7796",
    VenueId: "7609",
    Name: "Midnight Run/ The Andy Haynes Album Release Party!",
    StartTime: "2014-05-10 23:59:00 to 2014-05-11 01:30:00",
    EndTime: "2014-05-10 23:59:00 to 2014-05-11 01:30:00",
    MCId: "6804",
    Cost: "$20",
    ShowId: "",
    id: "7796",
    venue: "7609",
    start_time: "2014-05-11T06:59:00.000Z",
    end_time: "2014-05-11T08:30:00.000Z",
    performers: [ "6825", "6014", "6822", "7881", "7595" ],
    emcees: [ 6804 ]
}, {
    EventId: "7672",
    VenueId: "7612",
    Name: "Squarespace Stage at the Doug Fir Late Show",
    StartTime: "2014-05-10 23:59:00 to 2014-05-11 01:30:00",
    EndTime: "2014-05-10 23:59:00 to 2014-05-11 01:30:00",
    MCId: "6542",
    Cost: "$20",
    ShowId: "",
    id: "7672",
    venue: "7612",
    start_time: "2014-05-11T06:59:00.000Z",
    end_time: "2014-05-11T08:30:00.000Z",
    performers: [ "6315", "5787", "6128", "6687", "6153", "6151", "6858", "7828" ],
    emcees: [ 6542 ]
}, {
    EventId: "7675",
    VenueId: "7612",
    Name: "The Bone Zone",
    StartTime: "2014-05-11 14:00:00 to 2014-05-11 15:30:00",
    EndTime: "2014-05-11 14:00:00 to 2014-05-11 15:30:00",
    MCId: "",
    Cost: "$15",
    ShowId: "7589",
    show: "7589",
    id: "7675",
    venue: "7612",
    start_time: "2014-05-11T21:00:00.000Z",
    end_time: "2014-05-11T22:30:00.000Z",
    performers: [ "6834", "7580", "5998" ]
}, {
    EventId: "7674",
    VenueId: "7612",
    Name: "This Feels Terrible",
    StartTime: "2014-05-11 16:00:00 to 2014-05-11 17:30:00",
    EndTime: "2014-05-11 16:00:00 to 2014-05-11 17:30:00",
    MCId: "",
    Cost: "$15",
    ShowId: "7779",
    show: "7779",
    id: "7674",
    venue: "7612",
    start_time: "2014-05-11T23:00:00.000Z",
    end_time: "2014-05-12T00:30:00.000Z",
    performers: [ "7896", "6762" ]
}, {
    EventId: "7967",
    VenueId: "7966",
    Name: "No Pun Intendo",
    StartTime: "2014-05-11 18:00:00 to 2014-05-11 19:30:00",
    EndTime: "2014-05-11 18:00:00 to 2014-05-11 19:30:00",
    MCId: "",
    Cost: "",
    ShowId: "5921",
    show: "5921",
    id: "7967",
    venue: "7966",
    start_time: "2014-05-12T01:00:00.000Z",
    end_time: "2014-05-12T02:30:00.000Z",
    performers: [ "6215", "6151", "6110", "6476", "6818" ]
}, {
    EventId: "7676",
    VenueId: "7612",
    Name: "The JV Club",
    StartTime: "2014-05-11 18:00:00 to 2014-05-11 19:30:00",
    EndTime: "2014-05-11 18:00:00 to 2014-05-11 19:30:00",
    MCId: "",
    Cost: "$15",
    ShowId: "7780",
    show: "7780",
    id: "7676",
    venue: "7612",
    start_time: "2014-05-12T01:00:00.000Z",
    end_time: "2014-05-12T02:30:00.000Z",
    performers: [ "7820" ]
}, {
    EventId: "7952",
    VenueId: "7608",
    Name: "Comedy Grab Bag",
    StartTime: "2014-05-11 19:00:00 to 2014-05-11 20:30:00",
    EndTime: "2014-05-11 19:00:00 to 2014-05-11 20:30:00",
    MCId: "",
    Cost: "$15",
    ShowId: "6846",
    show: "6846",
    id: "7952",
    venue: "7608",
    start_time: "2014-05-12T02:00:00.000Z",
    end_time: "2014-05-12T03:30:00.000Z",
    performers: [ "6425", "6659" ]
}, {
    EventId: "7809",
    VenueId: "7614",
    Name: "All Jane, No Dick",
    StartTime: "2014-05-11 19:00:00 to 2014-05-11 20:30:00",
    EndTime: "2014-05-11 19:00:00 to 2014-05-11 20:30:00",
    MCId: "6102",
    Cost: "$15",
    ShowId: "8577",
    show: "8577",
    id: "7809",
    venue: "7614",
    start_time: "2014-05-12T02:00:00.000Z",
    end_time: "2014-05-12T03:30:00.000Z",
    performers: [ "6686", "6392", "6162", "5755", "6163", "6696", "5998" ],
    emcees: [ 6102 ]
}, {
    EventId: "7710",
    VenueId: "7616",
    Name: "Best Kept Secret",
    StartTime: "2014-05-11 19:00:00 to 2014-05-11 20:30:00",
    EndTime: "2014-05-11 19:00:00 to 2014-05-11 20:30:00",
    MCId: "5730",
    Cost: "$15",
    ShowId: "8580",
    show: "8580",
    id: "7710",
    venue: "7616",
    start_time: "2014-05-12T02:00:00.000Z",
    end_time: "2014-05-12T03:30:00.000Z",
    performers: [ "6315", "6681", "5918", "6731", "5856", "6337", "6860" ],
    emcees: [ 5730 ]
}, {
    EventId: "7656",
    VenueId: "7610",
    Name: "Surprise Me!",
    StartTime: "2014-05-11 20:00:00 to 2014-05-11 21:30:00",
    EndTime: "2014-05-11 20:00:00 to 2014-05-11 21:30:00",
    MCId: "6745",
    Cost: "$10",
    ShowId: "",
    id: "7656",
    venue: "7610",
    start_time: "2014-05-12T03:00:00.000Z",
    end_time: "2014-05-12T04:30:00.000Z",
    performers: [ "6702", "6542", "5906", "6410", "6305", "6153" ],
    emcees: [ 6745 ]
}, {
    EventId: "7746",
    VenueId: "7619",
    Name: "Analog Theater Early Show",
    StartTime: "2014-05-11 20:00:00 to 2014-05-11 21:30:00",
    EndTime: "2014-05-11 20:00:00 to 2014-05-11 21:30:00",
    MCId: "6647",
    Cost: "$15",
    ShowId: "",
    id: "7746",
    venue: "7619",
    start_time: "2014-05-12T03:00:00.000Z",
    end_time: "2014-05-12T04:30:00.000Z",
    performers: [ "6049", "5889", "6527", "6413", "6822", "6280", "6857", "6849" ],
    emcees: [ 6647 ]
}, {
    EventId: "7703",
    VenueId: "7611",
    Name: "Bossanova Primetime",
    StartTime: "2014-05-11 20:00:00 to 2014-05-11 21:30:00",
    EndTime: "2014-05-11 20:00:00 to 2014-05-11 21:30:00",
    MCId: "5938",
    Cost: "$20",
    ShowId: "",
    id: "7703",
    venue: "7611",
    start_time: "2014-05-12T03:00:00.000Z",
    end_time: "2014-05-12T04:30:00.000Z",
    performers: [ "7777", "6379", "7518", "5867", "6839", "6004", "5876", "6833", "6859" ],
    emcees: [ 5938 ]
}, {
    EventId: "7737",
    VenueId: "7618",
    Name: "MailChimp Stage at the White Owl Social Club Early Show",
    StartTime: "2014-05-11 20:00:00 to 2014-05-11 21:30:00",
    EndTime: "2014-05-11 20:00:00 to 2014-05-11 21:30:00",
    MCId: "6564",
    Cost: "$15",
    ShowId: "",
    id: "7737",
    venue: "7618",
    start_time: "2014-05-12T03:00:00.000Z",
    end_time: "2014-05-12T04:30:00.000Z",
    performers: [ "6629", "6128", "6275", "6203", "6834", "6029" ],
    emcees: [ 6564 ]
}, {
    EventId: "7650",
    VenueId: "7615",
    Name: "Mary Mack&#039;s North Star Comedy Hour &amp; Meat Raffle",
    StartTime: "2014-05-11 20:00:00 to 2014-05-11 21:30:00",
    EndTime: "2014-05-11 20:00:00 to 2014-05-11 21:30:00",
    MCId: "7566",
    Cost: "$20",
    ShowId: "6537",
    show: "6537",
    id: "7650",
    venue: "7615",
    start_time: "2014-05-12T03:00:00.000Z",
    end_time: "2014-05-12T04:30:00.000Z",
    performers: [ "6818", "7568", "6864", "6408", "6858" ],
    emcees: [ 7566 ]
}, {
    EventId: "7662",
    VenueId: "7612",
    Name: "Nathan For You: Screening and Q&amp;A",
    StartTime: "2014-05-11 20:00:00 to 2014-05-11 21:00:00",
    EndTime: "2014-05-11 20:00:00 to 2014-05-11 21:00:00",
    MCId: "",
    Cost: "$20",
    ShowId: "7936",
    show: "7936",
    id: "7662",
    venue: "7612",
    start_time: "2014-05-12T03:00:00.000Z",
    end_time: "2014-05-12T04:00:00.000Z",
    performers: [ "7800" ]
}, {
    EventId: "7651",
    VenueId: "7613",
    Name: "Weird and Awesome with Emmett Montgomery",
    StartTime: "2014-05-11 20:00:00 to 2014-05-11 21:30:00",
    EndTime: "2014-05-11 20:00:00 to 2014-05-11 21:30:00",
    MCId: "6351",
    Cost: "$15",
    ShowId: "6682",
    show: "6682",
    id: "7651",
    venue: "7613",
    start_time: "2014-05-12T03:00:00.000Z",
    end_time: "2014-05-12T04:30:00.000Z",
    performers: [ "7579", "6823", "6762", "6536" ]
}, {
    EventId: "7677",
    VenueId: "7609",
    Name: "The Green Room with Paul Provenza",
    StartTime: "2014-05-11 20:00:00 to 2014-05-11 21:30:00",
    EndTime: "2014-05-11 20:00:00 to 2014-05-11 21:30:00",
    MCId: "",
    Cost: "$20",
    ShowId: "6890",
    show: "6890",
    id: "7677",
    venue: "7609",
    start_time: "2014-05-12T03:00:00.000Z",
    end_time: "2014-05-12T04:30:00.000Z",
    performers: [ "7803" ]
}, {
    EventId: "7753",
    VenueId: "7620",
    Name: "Analog Cafe Closing Show",
    StartTime: "2014-05-11 20:00:00 to 2014-05-11 21:30:00",
    EndTime: "2014-05-11 20:00:00 to 2014-05-11 21:30:00",
    MCId: "5962",
    Cost: "$10",
    ShowId: "",
    id: "7753",
    venue: "7620",
    start_time: "2014-05-12T03:00:00.000Z",
    end_time: "2014-05-12T04:30:00.000Z",
    performers: [ "5932", "5879", "5777", "5845", "6509", "6402", "6365", "5742" ],
    emcees: [ 5962 ]
}, {
    EventId: "7697",
    VenueId: "7614",
    Name: "Hawthorne Lounge Closing Show",
    StartTime: "2014-05-11 21:00:00 to 2014-05-11 22:30:00",
    EndTime: "2014-05-11 21:00:00 to 2014-05-11 22:30:00",
    MCId: "5919",
    Cost: "$15",
    ShowId: "",
    id: "7697",
    venue: "7614",
    start_time: "2014-05-12T04:00:00.000Z",
    end_time: "2014-05-12T05:30:00.000Z",
    performers: [ "5787", "6717", "6800", "6271", "6325", "6855", "6646", "6189" ],
    emcees: [ 5919 ]
}, {
    EventId: "7711",
    VenueId: "7616",
    Name: "Jupiter Tent Closing Show",
    StartTime: "2014-05-11 21:00:00 to 2014-05-11 22:30:00",
    EndTime: "2014-05-11 21:00:00 to 2014-05-11 22:30:00",
    MCId: "6354",
    Cost: "$10",
    ShowId: "",
    id: "7711",
    venue: "7616",
    start_time: "2014-05-12T04:00:00.000Z",
    end_time: "2014-05-12T05:30:00.000Z",
    performers: [ "6319", "5987", "5976", "8015", "6561", "6110", "5783", "6130", "6150" ],
    emcees: [ 6354 ]
}, {
    EventId: "7632",
    VenueId: "7608",
    Name: "Alhambra Lounge Closing Show",
    StartTime: "2014-05-11 21:00:00 to 2014-05-11 22:30:00",
    EndTime: "2014-05-11 21:00:00 to 2014-05-11 22:30:00",
    MCId: "6157",
    Cost: "$15",
    ShowId: "",
    id: "7632",
    venue: "7608",
    start_time: "2014-05-12T04:00:00.000Z",
    end_time: "2014-05-12T05:30:00.000Z",
    performers: [ "5999", "6276", "5806", "6065", "6687", "6704", "6205", "6805" ],
    emcees: [ 6157 ]
}, {
    EventId: "7783",
    VenueId: "7612",
    Name: "Lance Bangs Presents: Come Laugh With Us",
    StartTime: "2014-05-11 22:00:00 to 2014-05-11 23:30:00",
    EndTime: "2014-05-11 22:00:00 to 2014-05-11 23:30:00",
    MCId: "",
    Cost: "$20",
    ShowId: "",
    id: "7783",
    venue: "7612",
    start_time: "2014-05-12T05:00:00.000Z",
    end_time: "2014-05-12T06:30:00.000Z",
    performers: [ "7882", "6312", "7896", "6824", "7881", "7595" ]
}, {
    EventId: "7727",
    VenueId: "7617",
    Name: "Tanker Open Mic",
    StartTime: "2014-05-11 22:00:00 to 2014-05-11 23:00:00",
    EndTime: "2014-05-11 22:00:00 to 2014-05-11 23:00:00",
    MCId: "",
    Cost: "$10",
    ShowId: "",
    id: "7727",
    venue: "7617",
    start_time: "2014-05-12T05:00:00.000Z",
    end_time: "2014-05-12T06:00:00.000Z",
    performers: []
}, {
    EventId: "7687",
    VenueId: "7613",
    Name: "Sizzle Pie Stage at the Eagles Lodge Closing Show",
    StartTime: "2014-05-11 22:00:00 to 2014-05-11 23:30:00",
    EndTime: "2014-05-11 22:00:00 to 2014-05-11 23:30:00",
    MCId: "6699",
    Cost: "$15",
    ShowId: "",
    id: "7687",
    venue: "7613",
    start_time: "2014-05-12T05:00:00.000Z",
    end_time: "2014-05-12T06:30:00.000Z",
    performers: [ "5805", "6727", "5728", "5951", "6861", "5739", "6608", "6723", "6833" ],
    emcees: [ 6699 ]
}, {
    EventId: "7913",
    VenueId: "7615",
    Name: "Hawthorne Theatre Closing Show",
    StartTime: "2014-05-11 22:00:00 to 2014-05-11 23:30:00",
    EndTime: "2014-05-11 22:00:00 to 2014-05-11 23:30:00",
    MCId: "6409",
    Cost: "$20",
    ShowId: "",
    id: "7913",
    venue: "7615",
    start_time: "2014-05-12T05:00:00.000Z",
    end_time: "2014-05-12T06:30:00.000Z",
    performers: [ "6640", "6476", "6591", "6674", "6456", "6614", "6860", "7579" ],
    emcees: [ 6409 ]
}, {
    EventId: "7914",
    VenueId: "7618",
    Name: "MailChimp Stage at the White Owl Social Club Closing Show",
    StartTime: "2014-05-11 22:00:00 to 2014-05-11 23:30:00",
    EndTime: "2014-05-11 22:00:00 to 2014-05-11 23:30:00",
    MCId: "6144",
    Cost: "$20",
    ShowId: "",
    id: "7914",
    venue: "7618",
    start_time: "2014-05-12T05:00:00.000Z",
    end_time: "2014-05-12T06:30:00.000Z",
    performers: [ "6735", "7785", "6123", "6134", "6825", "6014", "6371", "6816" ],
    emcees: [ 6144 ]
}, {
    EventId: "7661",
    VenueId: "7611",
    Name: "Prompter",
    StartTime: "2014-05-11 22:00:00 to 2014-05-11 23:30:00",
    EndTime: "2014-05-11 22:00:00 to 2014-05-11 23:30:00",
    MCId: "7802",
    Cost: "$20",
    ShowId: "6891",
    show: "6891",
    id: "7661",
    venue: "7611",
    start_time: "2014-05-12T05:00:00.000Z",
    end_time: "2014-05-12T06:30:00.000Z",
    performers: [ "7775", "6858", "7595", "7883" ],
    emcees: [ 7802 ]
}, {
    EventId: "7738",
    VenueId: "7619",
    Name: "Analog Theater Closing Show",
    StartTime: "2014-05-11 22:00:00 to 2014-05-11 23:30:00",
    EndTime: "2014-05-11 22:00:00 to 2014-05-11 23:30:00",
    MCId: "6534",
    Cost: "$15",
    ShowId: "",
    id: "7738",
    venue: "7619",
    start_time: "2014-05-12T05:00:00.000Z",
    end_time: "2014-05-12T06:30:00.000Z",
    performers: [ "5983", "6159", "6215", "6352", "6298", "6174", "6069", "6818" ],
    emcees: [ 6534 ]
}, {
    EventId: "7652",
    VenueId: "7609",
    Name: "Taxi Magic Stage at Alhambra Theater Closing Show",
    StartTime: "2014-05-11 22:00:00 to 2014-05-11 23:30:00",
    EndTime: "2014-05-11 22:00:00 to 2014-05-11 23:30:00",
    MCId: "6474",
    Cost: "$20",
    ShowId: "",
    id: "7652",
    venue: "7609",
    start_time: "2014-05-12T05:00:00.000Z",
    end_time: "2014-05-12T06:30:00.000Z",
    performers: [ "5813", "5906", "5774", "6483", "7581", "6280", "6804", "6611" ],
    emcees: [ 6474 ]
}, {
    EventId: "7728",
    VenueId: "7617",
    Name: "Tanker Open Mic",
    StartTime: "2014-05-11 23:00:00 to 2014-05-12 00:00:00",
    EndTime: "2014-05-11 23:00:00 to 2014-05-12 00:00:00",
    MCId: "",
    Cost: "$10",
    ShowId: "",
    id: "7728",
    venue: "7617",
    start_time: "2014-05-12T06:00:00.000Z",
    end_time: "2014-05-12T07:00:00.000Z",
    performers: []
} ], App.Performer.FIXTURES = [ {
    Name: "Paul F. Tompkins",
    Bio: "<p>Paul F. Tompkins hosts the Fusion channel’s No, You Shut Up!, the web series Speakeasy with Paul F. Tompkins, the podcasts The Pod F. Tompkast and The Dead Authors Podcast, and the live variety show Varietopia with Paul F. Tompkins at the West Hollywood theatre Largo at The Coronet. He is a cast member of the live show &amp; podcast The Thrilling Adventure Hour and is a regular guest on both the television and podcast versions of Comedy Bang! Bang!  For a full list of Mr. Tompkins’ stage, television and film credits, ask your teacher or a policeman.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/paulftompkins.jpg",
    PerformerId: "7588",
    SortOrder: 50,
    id: "7588",
    pageUrl: "7588-paul-f-tompkins",
    events: [ "7657" ],
    mc_events: []
}, {
    Name: "Emo Philips",
    Bio: '<p>Described by Jay Leno as "the best joke writer in America," by British comedian Gary Delaney as the best joke writer in the world, and by "Weird Al" Yankovic as one of the funniest people on the planet, Emo Philips has performed over 6000 times throughout the English-speaking world. Since starting out in Chicago in 1976 at the age of twenty, Emo has had award-winning comedy albums, several cable specials (including an hour-long one on HBO), and many appearances on network television, both in America and in the UK. He has appeared in films (most notably, as the table-saw demonstrator in UHF) and has lent his distinctive voice to animated TV shows (such as Slacker Cats, Doctor Katz, Adventure Time, and Home Movies), but his first love, stand-up, remains his true one.</p>\n',
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/emo2.jpg",
    PerformerId: "7775",
    SortOrder: 50,
    id: "7775",
    pageUrl: "7775-emo-philips",
    events: [ "7661", "7671" ],
    mc_events: []
}, {
    Name: "Sean Cullen",
    Bio: "<p>Expect the unexpected with Seán Cullen, a nimble master of improvisation and accomplished impressionist who delights in the absurd. The 25-year veteran of the Canadian comedy scene is an award-winning comedian, actor and writer.</p>\n<p>Cullen has made multiple appearances on The Tonight Show with Jay Leno (NBC) and The Late Late Show (CBS). He was a finalist in the sixth season of Last Comic Standing (NBC) and was a regular on The Ellen Degeneres Show (CBS). He starred in his own television series The Seán Cullen Show (CBC), also serving as creator, executive producer and writer on the series. He hosted Just For Laughs 20th Anniversary and the travel series What Were They Thinking? (Discovery), earning Gemini Awards for each. He has had several specials including Comedy Central Presents, the Gemini-nominated Comedy Now! special titled Seán Cullen: Wood, Cheese &amp; Children! and Seán Cullen’s Home for Christmas (CBC) and COMICS!. He has made multiple appearances on Just For Laughs (CBC) earning him a Gemini Award-Best Performance-Variety-Series.</p>\n<p>His feature film credits include Atom Egoyan’s Where the Truth Lies, Mike Myers’ The Love Guru and Phil The Alien, earning him a Canadian Comedy Award, Best Male Performance-Film.</p>\n<p>Cullen monthly podcast The Seanpod was nominated for a 2012 Canadian Comedy Award for Best Podcast and is available on Apple iTunes. He has leant his voice to a number animated series such as: Jimmy Two-Shoes (Teletoon/Disney XD) earning two Gemini-nominations and Rocket Monkeys (Teletoon).</p>\n<p>Cullen performs live on stage Canada, including Just For Laughs in Montreal/Toronto, and has appeared as far afield as the Melbourne Comedy Festival and Edinburgh Fringe. </p>\n<p>A prolific writer, he is the author of five popular young adult novels and is beginning to write a sixth new book. His first novel Hamish X and the Cheese Pirates won a Rocky Mountain Book Award and an Arthur Ellis Award and his book The Prince of Neither Here Nor There was nominated for a 2010 Toronto Book Award. He has written many television comedies and animated series, select credits include The Seán Cullen Show (CBC), Seán Cullen’s Home for Christmas (CBC), Seán Cullen: Wood, Cheese &amp; Children! (CTV/The Comedy Network) and more recently, Camp Lakebottom and Rocket Monkeys, premiering on Teletoon in fall 2012. He has also written and performed songs for A Wrinkle in Time (ABC), Just For Laughs 20th Anniversary (CBC), The Gemini Awards (CBC) and the Star TV Theme Song (Star TV, CityTV).</p>\n<p>Cullen has released two comedy albums, Seán Cullen Live! and I Am a Human Man are available on Apple iTunes.</p>\n<p>Described in Time Magazine as “the vanguard of comedy&#039;s next generation”, Cullen has earned three Gemini Awards, three Canadian Comedy Awards, an ACTRA Award, a Rocky Mountain Book Award, an Arthur Ellis Book Award and was twice nominated for the Edinburgh Comedy Award.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/headshot-seancullen-04-300dpi.jpg",
    PerformerId: "6791",
    SortOrder: 50,
    id: "6791",
    pageUrl: "6791-sean-cullen",
    events: [ "7663", "7671", "7702" ],
    mc_events: []
}, {
    Name: "Reggie Watts",
    Bio: '<p>Reggie Watts is an internationally renowned vocal artist/ beatboxer/ musician/ comedian who wows audiences with his live performances which are 100% improvised.  Using his formidable voice, looping pedals, and his vast imagination, Reggie blends and blurs the lines between music and comedy.  No two performances are the same and to that end, ”genius” is the word most often used to describe Reggie Watts.  LA Weekly crowned him ”the most wildly inventive new talent of the past five years” while New York Magazine hailed Reggie as “Spectacularly original,” Rolling Stone featured him as “Hot Comedian,” SPIN named him as “Best New Comedian” and the LA Times praised Reggie is “a superstar.” </p>\n<p>On screen, in addition to his role as co-star on “Comedy Bang! Bang!”, his special "Reggie Watts:  A Live At Central Park" aired on Comedy Central in May 2012.  He also has appeared multiple times on Conan, and on Late Night With Jimmy Fallon, Jimmy Kimmel Live, John Oliver’s Stand-Up New York, HBO’s The Yes Men Save The World, IFC, Comedy Central’s Michael and Michael Have Issues, UK’s "Funny Or Die," and PBS’ Electric Company.</p>\n<p>“Offbeat genius” – Playboy</p>\n<p>“Do yourself a big favor and go see him on tour now.” – MTV</p>\n<p>“It is not fair to compare the other performers to Watts – he is playing in a whole other professional league.” – New York Times</p>\n',
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/reggie_watts.jpg",
    PerformerId: "7595",
    SortOrder: 60,
    id: "7595",
    pageUrl: "7595-reggie-watts",
    events: [ "7660", "7661", "7701", "7734", "7783", "7796" ],
    mc_events: []
}, {
    Name: "Dan Harmon",
    Bio: "<p>Dan Harmon serves as creator/executive producer of the NBC comedy series “Community.” </p>\n<p>Harmon’s pursuit of minimal work for maximum reward took him from stand-up to improv to sketch comedy, then finally to Los Angeles, where he began writing feature screenplays. His first deal was with Robert Zemeckis at Imagemovers, for whom he co-wrote “Monster House.”  Along with his writing partner Rob Schrab, Harmon went on to write the Ben Stiller directed pilot “Heat Vision and Jack,” starring Jack Black and Owen Wilson. </p>\n<p>Disillusioned by the legitimate industry, Harmon retreated underground, during which time he attended classes at nearby Glendale Community College. It was also during this time that Harmon co-founded Channel 101, an untelevised non-profit audience-controlled network for undiscovered filmmakers, many of whom used it to launch mainstream careers, including the boys behind SNL’s Digital Shorts. Harmon and Schrab then partnered with Sarah Silverman to create her series for Comedy Central, “The Sarah Silverman Program,” where he served as the head writer for several episodes. </p>\n<p>Harmon then created, wrote and performed in the VH1 sketch series “Acceptable TV.” As part of a blind deal with Sony and inspired by his experience as a community college student, Harmon created “Community” which marked his first network series.  Harmon is also the co-creator of the animated Adult Swim series “Rick &amp; Morty.”</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/dan_harmon_0.jpg",
    PerformerId: "6854",
    SortOrder: 60,
    id: "6854",
    pageUrl: "6854-dan-harmon",
    events: [ "7670" ],
    mc_events: []
}, {
    Name: "Matt Braunger",
    Bio: '<p>Matt Braunger was raised in Portland, OR. A headlining comedian since 2007 and an actor since childhood, Matt\'s comedy has appeared on The Late Show with David Letterman, The Tonight Show, Conan, The Late Late Show with Craig Ferguson,and Live at Gotham. He is a regular panelist on "Chelsea Lately" and Comedy Central\'s "@Midnight." Matt\'s half-hour special on Comedy Central was released in 2009, and his hour special, "Shovel Fighter," was released in 2012. In 2008 he won "Best of the Fest" at the Rooftop Festival in Aspen and in 2009 he was named to Variety\'s "Top 10 Comics to Watch." He has released two albums, "Soak Up the Night" and "Shovel Fighter." Matt has performed at a variety of prestigious comedy festivals including the Just For Laughs Festival in Montreal and Chicago, SXSW, Bumbershoot, and in 2007 he co-founded the Bridgetown Festival in Portland, OR. Matt\'s television credits include a recurring role on NBC\'s "Up All Night," a series regular on "Mad TV," and roles on "The Michael Fox Show," "Happy Endings," HBO\'s "Family Tree" "Blue Mountain State," "The United States of Tara," and "Pushing Daisies."</p>\n',
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/matt_braunger.jpg",
    PerformerId: "6858",
    SortOrder: 70,
    id: "6858",
    pageUrl: "6858-matt-braunger",
    events: [ "7637", "7638", "7650", "7661", "7672", "7706", "7741", "7742", "8635" ],
    mc_events: []
}, {
    Name: "Kumail Nanjiani",
    Bio: "<p>Kumail is a tireless Los Angeles-based writer and performer who has been featured in Variety’s “10 Comics to Watch,” the Hollywood Reporter’s “10 Rising Comedy Talents” and New York Magazine’s “10 Comedians that Funny People Find Funny.” Kumail first gained attention for his critically acclaimed one-man show “Unpronounceable” (directed by Paul Provenza), and in 2008, he received two ECNY awards for Best Male Stand-up Comedian and Best One Man Show.  He’s toured with Stella, Eugene Mirman, and Zach Galifianakis and has been seen performing stand-up on “Conan,” “Late Night with Jimmy Fallon,” “The Late Show with David Letterman,” and “Jimmy Kimmel Live.” He has also been featured on “Portlandia,” “The Colbert Report,” “Michael and Michael Have Issues,” Fox’s “Traffic Light,” and the feature film “Life As We Know It.” He was recently featured on “John Oliver’s New York Stand-Up Show” on Comedy Central and was a regular cast member on TNT’s “Franklin &amp; Bash.” He has released his one-hour Comedy Central Special and album “Beta Male” in 2013, and and will be appearing on Mike Judge’s upcoming “Silicon Valley” on HBO.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/kumail.jpg",
    PerformerId: "6862",
    SortOrder: 70,
    id: "6862",
    pageUrl: "6862-kumail-nanjiani",
    events: [ "7659", "7668" ],
    mc_events: []
}, {
    Name: "James Adomian",
    Bio: "<p>James Adomian is a daredevil dancing queen  — but don’t you know deep down he’s just a kitten? James was a top-10 finalist on NBC's Last Comic Standing and is a frequent guest on Comedy Bang Bang and other wild podcasts. He performs standup and characters live at Upright Citizens Brigade and at festivals, theatres, dive bars, party schools and radical political events across North America. His debut album Low Hangin Fruit was released by Earwolf in August 2012.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/jamesadomian.jpg",
    PerformerId: "7881",
    SortOrder: 80,
    id: "7881",
    pageUrl: "7881-james-adomian",
    events: [ "7645", "7783", "7796", "7804", "7806", "7807", "8631" ],
    mc_events: []
}, {
    Name: "Wil Anderson",
    Bio: "<p>Wil Anderson is a stand up first and foremost, touring Australia and the world at every opportunity, performing more than two hundred shows a year. His stand up is a densely written, high-speed ride through one of the most wonderful comedic imaginations in the world. Politics, pop and the personal come together in a Wil Anderson routine, always delivered with more conviction and enthusiasm than any man’s vocal chords can take.</p>\n<p>Over the last 4 years Wil spent a lot of time north of the equator, performing live in London, Edinburgh, Ireland, Montreal, Canada, New Zealand and across the US and securing regular guest appearances on the popular US late night comedy talk show, Chelsea Lately.</p>\n<p>Since 2008 Wil has been the host and executive producer of the ABC (Australian Broadcast Company) TV&#039;s highest rating program &quot;The Gruen Transfer series&quot; - a role that saw him nominated for a Gold Logie in 2010, and also won Best Entertainment Show at the AACTA awards in 2011. </p>\n<p>Gruen has spawned the spin-offs Gruen Nation, the sports themed Gruen Sweat and Gruen Planet. In 2013 Wil returned to host a series of Gruen Nation and Gruen Planet which was once again the number 1 entertainment show on the ABC network, a record fifth year in a row.  In 2012 Gruen Planet was nominated for a Logie, and in May 2013 Gruen Sweat won the prestigious Rose d&#039;Or, Europe&#039;s equivalent of the Emmys. </p>\n<p>But it’s on stage where Wil is in his element: 2012 saw Wil busy touring his hit live show Wilarious to sold out venues around Australia, earning rave reviews and winning his third consecutive Bulmer&#039;s People’s Choice Award at the Melbourne Comedy Festival, not to mention being named one of comedy’s hottest acts by none other than John Cleese.  </p>\n<p>2013 saw Wil’s most successful tour yet, with GoodWil being seen by over 50,000 people including audience across North America in Vancouver, Montreal, LA, New York, Minneapolis, Seattle, DC, Cleveland and Denver.</p>\n<p>GoodWil was awarded a Fringe Award for Best Comedy during the Adelaide Fringe Festival, and enjoyed a sell-out 21-night run at the prestigious 1600-seat Princess Theatre during the Melbourne International Comedy Festival where it received a five-star review from the Herald-Sun. It was later performed everywhere from a a log-cabin in Alaska to a two-week sold-out season at the prestigious Soho Theatre in London. </p>\n<p>To cap off 2013, GoodWil was nominated for a Helpmann award (Australia’s Tonys) for live comedy performance. This is a record-breaking fourth nomination in a row. </p>\n<p>Wil is also the host of the popular podcasts Wilosophy which regularly tops the iTunes charts in Australia, and TOFOP which was recently named iTunes Best Classic Audio podcast for 2013.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/img_3281web.jpg",
    PerformerId: "6833",
    SortOrder: 80,
    id: "6833",
    pageUrl: "6833-wil-anderson",
    events: [ "7658", "7668", "7671", "7687", "7703", "7915" ],
    mc_events: []
}, {
    Name: "Jeff Davis",
    Bio: "<p>Jeff B. Davis is a multi-talented actor/comedian, born and bred in Los Angeles, CA.  His career began at age 4 as \"Linus\" in a terribly ill-advised, all-children production of You're a Good Man, Charlie Brown at the Goundlings Theater.  On opening night, Jeff vomited all over his director, then turned and took the stage.   At age 9, Jeff was cast as \"Louis\" in Yul Brynner's final production of The King and I, which toured nationally and closed on Broadway when Jeff was 11, after nearly 800 vomit-free performances.</p>\n<p>In high school Jeff began improvising with Los Angeles ComedySportz, eventually learning the skills he'd later need as a frequent guest on the hit television show Whose Line is it, Anyway?  Jeff has a long list of TV credits, including Steven Martin's NBC comedy The Downer Channel, WB's On the Spot, NBC's Happy Family, the Sarah Silverman Show, Drew Carey's Green Screen Show and Improvaganza, to name just a few.  Jeff spends many nights of the year performing live with \"Whose Line\" stars Ryan Stiles, Greg Proops, and Chip Esten to standing ovations all over North America.  When he's not on stage, Jeff is in Hollywood trying to break George Clooney's record of \"most failed television pilots.\"</p>\n<p>Jeff is currently a guest on CW's reboot of Whose Line is it, Anyway?, and can be heard on the highly-acclaimed, deeply weird Harmontown podcast with NBC's Community creator Dan Harmon.  Listen at your own risk.</p>\n<p>Feel free to bother Jeff on Twitter @JeffBryanDavis.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/jeffdavis.jpg",
    PerformerId: "6856",
    SortOrder: 100,
    id: "6856",
    pageUrl: "6856-jeff-davis",
    events: [ "7670" ],
    mc_events: []
}, {
    Name: "Jonah Ray",
    Bio: "<p>Jonah Ray is a writer/comedian originally from Kailua, Oahu. He’s written and performed on shows like “Human Giant,” “Supernews,” “Attack of the Show,” Comedy Central’s “Live At Gotham” and “Web Soup.” A co-host on the Nerdist podcast with Chris Hardwick, Jonah also puts together a weekly comedy show at Meltdown Comic Books in Los Angeles with Kumail Nanjiani. Be sure to check out his blog at jonahray.com. He more often than not posts stuff about penguins, zombies, and “Mystery Science Theater 3000.”</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/jonahray.jpg",
    PerformerId: "6863",
    SortOrder: 100,
    id: "6863",
    pageUrl: "6863-jonah-ray",
    events: [ "7625", "7645", "7659", "7669" ],
    mc_events: []
}, {
    Name: "Nathan Fielder",
    Bio: "<p>Nathan Fielder is currently in production on the second season of his hit Comedy Central series “Nathan For You,” which he writes, directs, and stars in. Nathan has written and performed on the series “Jon Benjamin Has a Van” and “Important Things with Demetri Martin”.</p>\n<p>Hailing from Canada, Nathan is also well known for his online shorts and his weekly segments on the acclaimed CBC comedy series “This Hour Has 22 Minutes.&quot; For his work &quot;22 Minutes&quot; Fielder received a Canadian Comedy Award, a Writer&#039;s Guild Award, and was nominated for a Gemini.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/nathan_fielder.jpg",
    PerformerId: "7800",
    SortOrder: 100,
    id: "7800",
    pageUrl: "7800-nathan-fielder",
    events: [ "7662" ],
    mc_events: []
}, {
    Name: "Paul Provenza",
    Bio: "<p>Paul Provenza has been a major name in stand-up comedy for decades. He is the co-creator and director of the critically acclaimed comedy/documentary The Aristocrats. He has written, produced, and starred in several comedy specials, including the comedy talk show Comics Only for Comedy Central and his own one-man show for Showtime, The Incredible Man-Boy. He is an artistic consultant to the Montreal and Chicago Just for Laughs festivals, and co-produced and starred in The Green Room with Paul Provenza for Showtime. He is the host of the acclaimed Sky TV series and stage show Set List.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/paul_provenza_pic.jpg",
    PerformerId: "7803",
    SortOrder: 100,
    id: "7803",
    pageUrl: "7803-paul-provenza",
    events: [ "7677" ],
    mc_events: [ "7816", "7671" ]
}, {
    Name: "Lance Bangs",
    Bio: "<p>Lance Bangs is a filmmaker, documentarian, and music video director.</p>\n<p>His comedy work includes directing David Cross's film Let America Laugh, as well as standup specials for Marc Maron, John Hodgman, Nick Thune, Todd Barry and Rob Delaney. Bangs has also been heavily involved in the filming and production of MTV’s Jackass television series and its subsequent movies.  He Executive Produces the current adultswim series Loiter Squad and recently directed The Greatest Event in Television History with Adam Scott.</p>\n<p>He will be directing the new Comedy Central series Meltdown with Jonah Ray and Kumail Nanjiani.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/lancebangs_0.jpg",
    PerformerId: "7882",
    SortOrder: 100,
    id: "7882",
    pageUrl: "7882-lance-bangs",
    events: [ "7669", "7783" ],
    mc_events: []
}, {
    Name: "Sean Patton",
    Bio: "<p>Sean Patton is a comedian based in Los Angeles and New York, by way of New Orleans. Sean began doing standup in the Crescent City, and has since performed in comedy clubs across the US and Canada. Sean also performed at The Melbourne International Comedy Festival (2011), and twice at Montreal’s Just for Laughs Comedy Festival (2008, 2010). In the TV world, Sean has appeared on Comedy Central's Live at Gotham (2009), Late night with Jimmy Fallon (2010), and twice on Conan (2011, 2013). 2013 also marked the release of his own Comedy Central Half Hour Special. As for acting, Sean played a guest starring role on IFC’s Maron and a co-starring role on Comedy Central’s Inside Amy Schumer. Sean also shot an unscripted travel pilot in 2013 for The Esquire Network, entitled Best Bars in America. The show has been picked up for 10 episodes and will shoot over spring 2014.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/seanpatton.jpg",
    PerformerId: "6859",
    SortOrder: 100,
    id: "6859",
    pageUrl: "6859-sean-patton",
    events: [ "7622", "7659", "7671", "7703", "7742", "7805" ],
    mc_events: []
}, {
    Name: "Jamie Lee",
    Bio: "<p>Named one of the Top Five Comedians Who Should Be Movie Stars by Nerve.com and one of the Top 18 Women You Should Be Following On Twitter by Huffington Post, Jamie Lee is an unstoppable force in comedy, and a currently a cast member on the hit MTV series &quot;Girl Code&quot; and writer for the TBS late night show The Pete Holmes Show.</p>\n<p>Jamie’s standup appeared recently on TBS’s “Conan” and Comedy Central’s “John Oliver’s New York Stand Up Show”. Jamie was a semi-finalist on NBC&#039;s Last Comic Standing co-hosted the first annual Critics Choice Awards for Vh1.com and appeared on E!’s “Chelsea Lately”, TBS’s “The Pete Holmes Show”, Vh1’s &quot;Undateable&quot;, TruTV&#039;s &quot;World&#039;s Dumbest&quot;, MTV’s “Money From Strangers”, Yahoo’s “Mansome,” and performed stand-up on TV Guide&#039;s all-female comedy series &quot;Stand Up in Stilettos.&quot; She’s additionally written for Rob Dyrdek&#039;s MTV series Ridiculousness.</p>\n<p>Jamie&#039;s acting experience ranges from national commercials to web series to feature film. Kid Farm a parody of TLC&#039;s &quot;19 Kids and Counting&quot; that Lee created with Front Page Films, was featured on HuffingtonPost.com, ComedyCentral.com and BestWeekEver.tv - not to mention tweeted with praise by acclaimed screen writer Diablo Cody. It is now an original series on Comedy Central&#039;s CCstudios.com. Jamie will also be starring in the upcoming web series “Love’s A Bitch” for Official Comedy.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/jamie_lee_girl_code_small.jpg",
    PerformerId: "6014",
    SortOrder: 105,
    id: "6014",
    pageUrl: "6014-jamie-lee",
    events: [ "7645", "7663", "7749", "7796", "7914", "8635" ],
    mc_events: []
}, {
    Name: "Henry Phillips",
    Bio: "<p>Henry Phillips  has been seen and heard performing his twisted songs and stories on 'Comedy Central Presents', ABC’s ’Jimmy Kimmel Live’, satellite and terrestrial radio nationwide. His critically acclaimed albums, fusing mellow folk-rock ballads with psychopathic lyrics have earned him mention in Billboard magazine’s ’Critic’s Choice’, as well as acclaim from such notable artists as Moby, who refers to Phillips' songs as \"disconcertingly funny\". His semi-biographical comedy film \"Punching the Clown\" received the Audience award at Slamdance film festival '09, and the sequel is scheduled to shoot this year.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/henryphillips_2.jpg",
    PerformerId: "7579",
    SortOrder: 110,
    id: "7579",
    pageUrl: "7579-henry-phillips",
    events: [ "7621", "7624", "7625", "7651", "7734", "7810", "7913" ],
    mc_events: []
}, {
    Name: "W. Kamau Bell",
    Bio: "<p>Socio-political comedian W. Kamau Bell has emerged as the post-modern voice of comedy. Named an Ambassador of Racial Justice by the ACLU, his weekly half-hour FX comedy series, Totally Biased with W. Kamau Bell, premiered in August 2012 and became a critically acclaimed but criminally short nightly show in September of 2013 on FX’s new comedy network FXX. The NY Times called Kamau “the most promising new talent in political comedy in many years.” The show was nominated for “Best Talk Series” at the 2012 NAACP Image Awards and Salon.com listed Kamau on their “Sexiest Men of 2012” list, calling the series “surreptitiously revolutionary in its effortless diversity and humanism.” The San Francisco Chronicle raved, “it makes The Daily Show seem like something your dad watches.” Totally Biased was executive produced by Chris Rock, who became a fan after seeing a performance of Kamau’s one man show.</p>\n<p>In 2010, Kamau released his second stand up album, Face Full of Flour, which was named one of the Top 10 Best Comedy Albums of the year by iTunes and Punchline Magazine. His first album One Night Only was released in 2007. Also in 2007 he developed his one-man show The W. Kamau Bell Curve: Ending Racism in About An Hour, which received rave reviews from audiences, critics, and industry insiders. The show was a comedy pick in The Guardian during its 2011 run at the Edinburgh Fringe Festival, a Time Out NY critic’s pick in the 2010 NY Comedy Festival, and played to sold-out audiences in the 2009 NY International Fringe Festival.</p>\n<p>Kamau sits on the board of Race Forward, a racial justice think tank and home for media and activism, and Hollaback, a non-profit and movement to end street harassment. He has been featured on several of the biggest comedy podcasts including WTF with Marc Maron, Comedy &amp; Everything Else, Citizen Radio, The Sound of Young America, and Jordan, Jesse, GO!, and is a regular correspondent on The War Room on Current TV.</p>\n<p>Praised by Punchline Magazine as “one of our nation’s most adept racial commentators with a blistering wit,” Kamau was voted San Francisco’s best comedian by the SF Weekly, the SF Bay Guardian, and 7×7 Magazine. Robin Williams calls Kamau “ferociously funny,” and Vernon Reid of the band Living Colour offers “W. Kamau Bell is in the vanguard of a new era of American comedy for an unsettling, troubling, and strangely hopeful time. Firmly in the fearless tradition of Mort Sahl, Lenny Bruce, Richard Pryor, and Chris Rock. Comedy as common sense purged of the absurd hypocrisy that is Our America.” The SF Weekly called Kamau “smart, stylish, and very much in the mold of politically outspoken comedians like Dave Chappelle,” though he was more excited that they called him “handsome.”</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/kamaubell.jpg",
    PerformerId: "7895",
    SortOrder: 110,
    id: "7895",
    pageUrl: "7895-w-kamau-bell",
    events: [ "7637", "7702", "7733", "8632" ],
    mc_events: []
}, {
    Name: "Aparna Nancherla",
    Bio: "<p>Aparna started out doing comedy in her hometown of Washington, D.C. and currently resides in New York City, where most recently she was a writer and regular correspondent on FX’s &quot;Totally Biased with W. Kamau Bell.&quot;  She is an alumna of the NBC Stand Up for Diversity program, and in 2013 was one of the breakout New Faces at the prestigious Just For Laughs Festival in Montreal.  She has performed all over the US including Portland’s Bridgetown Comedy Festival, SF Sketchfest, Bentzen Ball, Aspen’s Rooftop Comedy Festival, and The Great American Comedy Festival.  She has also been a contributing writer for NPR, Reader’s Digest, The Huffington Post, The Washington Post Magazine, XM Radio, and Slate V.  She can regularly be seen performing at the Upright Citizen’s Brigade’s in LA and NYC.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/aparna_nancherla_headshot.jpg",
    PerformerId: "6823",
    SortOrder: 115,
    id: "6823",
    pageUrl: "6823-aparna-nancherla",
    events: [ "7641", "7645", "7646", "7651", "7659", "7679", "7810" ],
    mc_events: []
}, {
    Name: "Nate Bargatze",
    Bio: "<p>Nate Bargatze has had two late night appearance on Late Night with Jimmy Fallon, four appearances on Conan and had his own Comedy Central Presents in 2011. He has written for Spike TV&#039;s Video Game Awards and received critical acclaim at the Montreal Comedy Festival multiple years. When he isn&#039;t winning comedy festivals in both New York and Boston, performing at Bonnaroo, or on tour with Jimmy Fallon&#039;s &quot;Clean Cut Comedy Tour,&quot; he might just be performing for troops in Iraq, which he has done five times. His debut comedy album &quot;Yelled at by a Clown&quot; reached #1 on the iTunes comedy charts.  Nate was also featured as one of Esquire&#039;s Best New Comedians of 2012, as one of Marc Maron&#039;s comedians to watch in Rolling Stone and in Paste Magazine, and as one of the 10 Comedians Who Deserve Their Own TV Show on CoolMaterial.com.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/nate_bargatze.jpg",
    PerformerId: "6374",
    SortOrder: 120,
    id: "6374",
    pageUrl: "6374-nate-bargatze",
    events: [ "7645", "7695", "7699", "7749" ],
    mc_events: []
}, {
    Name: "Julian McCullough",
    Bio: "<p>You may recognize Julian from a variety of basic cable shows that constantly run his episodes without paying him residuals because life isn't fair. These shows include Late Night with Jimmy Fallon, Chelsea Lately, Guy Code, Love You, Mean It with Whitney Cummings, and Comedy Central Presents. There is a reason Julian is on TV so much, and that is because he is a super fun hang! Man that guy is funny. On and off stage, he really is a great time!</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/julianmccullough.jpg",
    PerformerId: "6860",
    SortOrder: 120,
    id: "6860",
    pageUrl: "6860-julian-mccullough",
    events: [ "7645", "7659", "7685", "7710", "7913", "7919" ],
    mc_events: []
}, {
    Name: "Alice Wetterlund",
    Bio: "<p>Alice “Pretty-in-a-Not-Shitty-Way” Wetterlund has performed her non-yelling brand of comedy on stages such as Comix, Broadway Comedy Club, UCB theaters, San Francisco’s Punchline and The Hollywood Improv, and on critically-acclaimed shows including College Humor Live, Big Terrific, and Meltdown.  She has also performed nationally in festivals such as Bridgetown, Moon Tower and Women in Comedy, and frequently tours with Comedy Central on Campus.  This year, she was a New Face for the 2013 Just for Laughs Comedy Festival in Montreal and was on the official line up for FOX’s Night of Comedy in Los Angeles.  Her credits include guest stars on NEW GIRL (FOX) and BETAS (Amazon original series).  Currently, Alice can be seen as a series regular on MTV’s GIRL CODE.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/alicewetterlund.jpg",
    PerformerId: "7777",
    SortOrder: 120,
    id: "7777",
    pageUrl: "7777-alice-wetterlund",
    events: [ "7645", "7660", "7699", "7703", "7739", "7750" ],
    mc_events: []
}, {
    Name: "Andres du Bouchet",
    Bio: "<p>Andres is a staff writer at CONAN. He performs all over L.A., mostly at &quot;alt&quot; venues. His first comedy album, &quot;Naked Trampoline Hamlet,&quot; is available on iTunes. He&#039;s currently working on his second album with A Special Thing Records.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/andres_du_bouchet_03.jpg",
    PerformerId: "6065",
    SortOrder: 120,
    id: "6065",
    pageUrl: "6065-andres-du-bouchet",
    events: [ "7623", "7625", "7632", "7645", "7646", "7740" ],
    mc_events: []
}, {
    Name: "Adrienne Iapalucci",
    Bio: "<p>Born and bred in the Bronx, Adrienne Iapalucci’s skewed look on life is reflected in her unique brand of intelligent comedy. Her dark sense of humor is enhanced by her political incorrectness and counteracted by her love of dogs.</p>\n<p>Comedy fans might recognize Adrienne from her performances as a semifinalist on season 7 of NBC’s Last Comic Standing and her recent appearance on the Late Show with David Letterman.</p>\n<p>In 2009, Adrienne won the first ever People’s Choice award at the New York Comedy Festival. She was also a semifinalist in the festival&#039;s New York Funniest Stand-Up contest and a runner-up in the New York Underground Comedy Festival’s Best of the Boroughs contest.</p>\n<p>Adrienne has been featured in the Daily News, New York Times, Reader’s Digest, and TimeOut NY magazine. In 2010 Adrienne made her international debut as part of Montreal’s Just For Laughs Festival, where she took part in “New Faces.”  Adrienne recently made her first late night appearance in November, 2013 on The David Letterman Show.</p>\n<p>Adrienne can be seen touring comedy clubs and colleges around the country.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/adrienne.jpg",
    PerformerId: "6611",
    SortOrder: 125,
    id: "6611",
    pageUrl: "6611-adrienne-iapalucci",
    events: [ "7652", "7915", "7919", "8579", "8633" ],
    mc_events: []
}, {
    Name: "Christian Duguay",
    Bio: "<p>Christian is an alumni of the Groundlings Theater Main Company and was a cast member on Fox&#039;s MadTV. He has also appeared on &quot;Arrested Development&quot; and Fox &quot;NFL Sunday.&quot; He was featured in the Rodney Dangerfield Award showcase at the Riot LA alternative Comedy Festival in 2014, and is the Executive Producer of &quot;Ridiculousness&quot; (MTV) and &quot;Fantasy Factory&quot; (MTV). He regularly performs stand up comedy in the Los Angeles area.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/img_0481.jpg",
    PerformerId: "6123",
    SortOrder: 125,
    id: "6123",
    pageUrl: "6123-christian-duguay",
    events: [ "7622", "7639", "7660", "7678", "7914", "8633" ],
    mc_events: []
}, {
    Name: "Hari Kondabolu",
    Bio: "<p>Hari Kondabolu is a Brooklyn-based, Queens-raised comic who has been described by Timeout NY as “smart, analytical and rising.” He was most recently a writer and correspondent for FX’s &quot;Totally Biased with W. Kamau Bell.&quot;</p>\n<p>He has done standup on Conan , Jimmy Kimmel Live, Live at Gotham and John Oliver’s New York Standup Show. His Comedy Central Presents half-hour television special debuted on the network in February 2011. He has also performed at such notable festivals as South by Southwest, Bumbershoot, Sasquatch and Just for Laughs in Montreal and Chicago.</p>\n<p>He has also appeared on popular podcasts like WTF with Marc Maron, You Made it Weird with Pete Holmes and Too Beautiful to Love with Luke Burbank</p>\n<p>Hari has been profiled on NPR’s Morning Editon and was one of Flavorwire’s 50 Up and Coming New York Culture Makers to Watch in 2013.</p>\n<p>In the UK, Hari has established himself with appearances on BBC 3’s Russell Howard’s Good News, Live at the Electric and Channel 4’s 8 out 10 Cats. He also performed at the Edinburgh Fringe Festival in 2011.</p>\n<p>When in New York City, he co-hosts the mostly improvised talk show The Untitled Kondabolu Brothers Project with his younger brother Ashok (“Dap” from hip hop group Das Racist) and their podcast The Untitled Kondabolu Brothers Podcast. He also wrote the cover story for Spin Magazine about Das Racist in November 2011.</p>\n<p>He was also a former video blogger for WORLD COMPASS, a joint initiative between WGBH Boston, PBS and the Corporation for Public Broadcasting.</p>\n<p>Hari was born and raised in Queens, NY. He went to Townsend Harris High School and the school’s mascot, “Hari the Hawk,” was named after him during his senior year. (He sometimes fears that his greatest achievement was accomplished at 17.) He also attended both Bowdoin College and Wesleyan University, graduating from the former institution with a B.A. in Comparative Politics in 2004. A former immigrant rights organizer in Seattle, Hari also earned a Masters in Human Rights from the London School of Economics in 2008, writing a merit- earning dissertation entitled “Mexican Returnees as Internally Displaced People: An Argument for the Protection of Economic Migrants Under the UN Guiding Principles on Internal Displacement.” This is, by far, the least funny thing he’s ever written.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/hari_kondabolu-_2011_web.jpg",
    PerformerId: "6835",
    SortOrder: 125,
    id: "6835",
    pageUrl: "6835-hari-kondabolu",
    events: [ "7688", "7740", "7749", "7916", "8632" ],
    mc_events: []
}, {
    Name: "Matt Kirshen",
    Bio: "<p>London born Matt Kirshen&#039;s precision wit has earned him an impressive reputation on the international comedy circuit. Most recently his appearances on Late Night with Jimmy Fallon, The Late Late Show with Craig Ferguson, Paul Provenza’s Green Room, and as a finalist on NBC&#039;s &quot;Last Comic Standing&quot; has earned him a whole new host of fans in the United States and a surprising number of other countries worldwide. </p>\n<p>He has also recorded a half-hour special for the World Stands Up, Comedy Central, and has acclaimed festival appearances at Montreal, Edinburgh, Kilkenny, Glastonbury, Reading, Leeds, Bermuda, and Amsterdam. </p>\n<p>His debut CD, &quot;I Guess We&#039;ll Never Know&quot; was named in Punchline Magazine&#039;s top 10 albums of 2009, and his hit appearance at the 2008 Just For Laughs festival in Montreal resulted in no fewer than four of his gags appearing in the Montreal Gazette&#039;s roundup of their best jokes of the fest. </p>\n<p>Matt has appeared in and written for numerous television shows in the UK, including a charity gala featuring Jimmy Fallon, which resulted in Jimmy himself requesting Matt to open for him in a college tour to promote his new Late Night hosting slot. </p>\n<p>His youthful looks disguise a veteran comic with almost a decade of experience, and a wealth of smart, funny and relatable material, making him a firm favorite with college audiences. While it&#039;s his prime-time NBC appearances that most American comedy fans will recognize him from, they are often surprised at the breadth and scope of his material, described by one reviewer as &quot;intelligent, but with the emphasis firmly on the funny&quot;</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/kirshen_matt-1429.jpg",
    PerformerId: "6365",
    SortOrder: 125,
    id: "6365",
    pageUrl: "6365-matt-kirshen",
    events: [ "7642", "7671", "7698", "7749", "7753" ],
    mc_events: []
}, {
    Name: "Adam Newman",
    Bio: "<p>Adam Newman is a New Hampshire-born, Georgia-schooled, Brooklyn-based comedian who has appeared on the Late Show with David Letterman and John Oliver&#039;s New York Stand-Up Show on Comedy Central. He was among Comedy Central&#039;s first class of &quot;Comics to Watch&quot; and later performed as a &quot;New Face&quot; at the prestigious Just for Laughs Comedy Festival in Montreal. His critically acclaimed debut stand-up CD, &quot;Not for Horses,&quot; was released by Rooftop Comedy. </p>\n<p>Adam&#039;s TV appearances include MTV&#039;s &quot;The CollegeHumor Show,&quot; various talking head shows on the TV Guide Network, the Tyra Banks Show (weird!), and dozens of CollegeHumor Originals on CollegeHumor.com.  Adam hosts the popular &quot;BIG LONG SETS&quot; at NYC&#039;s Upright Citizens Brigade Theatre, and &quot;Butt Talk,&quot; the world&#039;s #1 Number 2 podcast.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/newman_kylemakrauer.jpg",
    PerformerId: "6069",
    SortOrder: 125,
    id: "6069",
    pageUrl: "6069-adam-newman",
    events: [ "7663", "7738", "7745", "7951", "8635" ],
    mc_events: []
}, {
    Name: "Baron Vaughn",
    Bio: "<p>BARON VAUGHN recently released his first comedy recording, Raised By Cable, produced by AST Records, available at Amazon (mp3 and CD), and iTunes. Baron’s performed stand-up on Conan (twice), Late Night with Jimmy Fallon, The Late Late Show with Craig Ferguson, and has had numerous appearances on Comedy Central most recently in the form of his own “Half Hour” comedy special. He’s performed in the HBO U.S. Comedy Arts Festival (Aspen), The Just for Laughs Comedy Festival (Montreal), The South Beach Comedy Festival (Miami), Moontower Comedy Festival (Austin), San Francisco Sketchfest, Vancouver Comedy Festival, All Points West Music Festival (New Jersey), FYF Music Festival (Los Angeles), Bonnaroo Music and Arts Festival (TN), and Bumbershoot Music and Arts Festival (Seattle). He has also appeared in many shows on VH1, MTV, FUSE as well as the films Black Dynamite, Cloverfield, The Other Guys (Deleted Scenes), and was a series regular on USA’s recently canceled Fairly Legal (2010-2012).</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/baron_at_8_yrs._3rd_grade.jpg",
    PerformerId: "6849",
    SortOrder: 125,
    id: "6849",
    pageUrl: "6849-baron-vaughn",
    events: [ "7638", "7746", "7815", "8635" ],
    mc_events: [ "7701", "7733" ]
}, {
    Name: "Jon Daly",
    Bio: "<p>Jon Daly writes, performs, and is a supervising producer on THE NICK SHOW KROLL for Comedy Central which premiered in early 2013. He can currently be seen in Ben Stiller and Fox’s THE SECRET LIFE OF WALTER MITTY and is a costar of The Amazon series BETAS. He appeared in Fox’s BRIDE WARS opposite Kate Hudson and Anne Hathaway and can be seen on Adult Swim’s NTSF:SD:SUV::, the series premiere of PARKS AND RECREATION, on Spike TV’s comedy series PLAYERS, and has recurred on ABC’s HAPPY ENDINGS and HBO’s cult favorite, THE LIFE AND TIMES OF TIM. Jon also co-created and starred in his Comedy Central pilot RICH DICKS along with Nick Kroll.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/jon_daly_photo.jpg",
    PerformerId: "6808",
    SortOrder: 125,
    id: "6808",
    pageUrl: "6808-jon-daly",
    events: [ "7646", "7657", "7740" ],
    mc_events: []
}, {
    Name: "Myq Kaplan",
    Bio: "<p>Myq Kaplan is a comedian named Mike Kaplan.</p>\n<p>He has been seen on the Tonight Show with Conan O&#039;Brien, the Late Show with David Letterman, and in his own half-hour Comedy Central Presents special. He has been heard on his albums &quot;Meat Robot&quot; and &quot;Vegan Mind Meld,&quot; his podcast, &quot;Hang Out With Me&quot; on the Keith and The Girl network, and also thousands of other podcasts and things that aren&#039;t podcasts. In addition to being seen and heard, he has been smelled and tasted and touched. This May, his one-hour special, &quot;Small, Dork, and Handsome,&quot; will debut on Netflix, and all kinds of other things will probably happen in the future, but bios are mainly about the past. </p>\n<p>Check out myqkaplan.com for more information, or just be the autonomous human you are and do what you like. Thanks!</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/myq-kaplan-0587-2.jpg",
    PerformerId: "6818",
    SortOrder: 130,
    id: "6818",
    pageUrl: "6818-myq-kaplan",
    events: [ "7650", "7680", "7738", "7748", "7806", "7810", "7967" ],
    mc_events: [ "7648", "7734" ]
}, {
    Name: "Myq Kaplan",
    Bio: "<p>Myq Kaplan is a comedian named Mike Kaplan.</p>\n<p>He has been seen on the Tonight Show with Conan O&#039;Brien, the Late Show with David Letterman, and in his own half-hour Comedy Central Presents special. He has been heard on his albums &quot;Meat Robot&quot; and &quot;Vegan Mind Meld,&quot; his podcast, &quot;Hang Out With Me&quot; on the Keith and The Girl network, and also thousands of other podcasts and things that aren&#039;t podcasts. In addition to being seen and heard, he has been smelled and tasted and touched. This May, his one-hour special, &quot;Small, Dork, and Handsome,&quot; will debut on Netflix, and all kinds of other things will probably happen in the future, but bios are mainly about the past. </p>\n<p>Check out myqkaplan.com for more information, or just be the autonomous human you are and do what you like. Thanks!</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/myq_kaplan_headshot_web2.jpg",
    PerformerId: "6818",
    SortOrder: 130,
    id: "6818",
    pageUrl: "6818-myq-kaplan",
    events: [ "7650", "7680", "7738", "7748", "7806", "7810", "7967" ],
    mc_events: [ "7648", "7734" ]
}, {
    Name: "Shane Mauss",
    Bio: "<p>In 2013 Shane Mauss has had his fifth appearance on Conan, recorded his first one hour special which will be out in early 2014, performed his solo show for a full month in the world&#039;s largest comedy festival The Edinburgh Comedy Festival, and just recorded a TV spot in Australia at The Just For Laughs: Stand-Up Series at The Sydney Opera House.</p>\n<p>Originally from La Crosse, WI, Shane Mauss moved to Boston in 2004 (at the supple, tender age of 23) to pursue his childhood dream of becoming a standup comedian. In less than three years, Shane caught his big break when he was awarded Best Standup Comic at HBO&#039;s US Comedy Arts Festival in 2007.</p>\n<p>Comedy Central Presents: Shane Mauss debuted in 2010 and was accompanied by his first CD Jokes To Make My Parents Proud with Comedy Central Records, which was named in the Top 10 Albums of 2010 by Punchline Magazine.</p>\n<p>Shane&#039;s other TV credits now include two appearances on Conan on TBS, three appearances on Late Night with Conan O&#039;Brien, an appearance on Jimmy Kimmel Live!, Comedy Central&#039;s Live at Gotham, Showtime&#039;s Comics Without Borders, two appearances on BBC&#039;s The World Stands Up, and in what is easily his strangest television appearance to date: Playboy TV&#039;s Night Calls.</p>\n<p>Shane has been in several comedy festivals around the world including The Just For Laughs Festival Comedy Festival in Montreal, Sydney &amp; Chicago, The Bridgetown Comedy Festival in Portland, OR, The Comedy Central South Beach Comedy Festival, The Cat Laughs Comedy Festival in Kilkenny, Ireland, The Sydney Comedy Festival, and The Aspen Rooftop Comedy Festival.</p>\n<p>You may also know him as a regular on The Bob and Tom Show, Sirius Radio, Pandora, Spotify or podcasts such as WTF, You Made It Weird, Doug Loves Movies, Keith and The Girl or as co-host of The Double Date Podcast.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/922215_10151573163889871_1401201246_o_1.jpg",
    PerformerId: "6280",
    SortOrder: 150,
    id: "6280",
    pageUrl: "6280-shane-mauss",
    events: [ "7652", "7746", "7911", "7951" ],
    mc_events: []
}, {
    Name: "Brendon Walsh",
    Bio: "<p>Originally from Philadelphia, PA, Brendon Walsh established himself as a comedian in Austin, TX.  In 2004, he won the “Funniest Person In Austin” contest, and that same year also appeared on ABC’s “Jimmy Kimmel Live” as his original character, “Scary Monster” (a terrible monster stand up comedian).  In 2005 and 2006, Brendon was voted “Best Stand-Up Comedian” in the Austin Chronicle’s “Readers Poll”.  In 2006 he appeared on Comedy Central’s “Premium Blend” and on season 4 of NBC’s “Last Comic Standing.”  In 2007, he won the $10,000 grand prize on the comedy stage in an internet contest at Famecast.com, beating thousands of other people for the prize money and title of “Famecast Comedy Fenom”.  Brendon was featured in the “New Faces” Showcase at the 2008 Just For Laughs comedy festival in Montreal where he was recognized as one of the breakout performers, returning in 2010 and 2012 to record standup performances for HBO.</p>\n<p>In 2009, Brendon moved to Los Angeles where he can be regularly seen performing at the likes of Largo, the Upright Citizens Brigade Theater, Improv, Comedy Store as well as several alternative rooms. His TV credits also include being the first stand up to appear on TBS’ CONAN, and Comedy Central’s John Oliver’s New York Standup Show. Since moving to LA, Brendon has sold two scripted vehicles to star in and co-write.  In 2010 he sold “Crowded Apartment” to Spike.  Most recently Brendon has been writing the pilot of “Walsh,” a half hour narrative for Comedy Central, and he recorded his Comedy Central Stand Up Presents: The Half Hour special, which premiered in May, 2012 as the highest rated episode of the season. In 2013, Brendon performed at the Melbourne Comedy Festival, appeared on IFC’s &quot;MARON,&quot; FX’s &quot;LEGIT,&quot; and Comedy Central’s &quot;@MIDNIGHT,&quot; and is currently headlining across America.  His debut CD will be released in 2014.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/brendon032.jpg",
    PerformerId: "6834",
    SortOrder: 150,
    id: "6834",
    pageUrl: "6834-brendon-walsh",
    events: [ "7639", "7658", "7675", "7737", "7743", "7811" ],
    mc_events: []
}, {
    Name: "Ahmed Bharoocha",
    Bio: "<p>Ahmed Bharoocha is quickly becoming a household name amongst comics and comedy fans alike.   In 2012, he was selected for New Faces in the Just For Laughs Montreal Comedy Festival. In 2013 he was featured on Comedy Central’s new stand-up show &quot;Adam Devine’s House Party.&quot; His sketch group, Dead Kevin, was featured on Tosh.0, ComedyCentral.com and named by LAWeekly as one of the top comedy acts to watch.</p>\n<p>In 2009, Ahmed was handpicked by David Letterman’s Eddie Brill to perform in the Great American comedy festival, and in 2010 he won the Magner’s Comedy Festival.  He has been a regular in several other notable fests including Glasgow, Boston Comedy Fest, Seattle Comedy Fest, RIOT LA, Bridgetown Comedy Fest and many others.</p>\n<p>Currently he performs regularly at LA’s top comedy clubs: The Comedy Store, The Improv and the Laugh Factory.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/ahmed_.jpg",
    PerformerId: "6425",
    SortOrder: 150,
    id: "6425",
    pageUrl: "6425-ahmed-bharoocha",
    events: [ "7734", "7804", "7915", "7952", "8635" ],
    mc_events: [ "7679" ]
}, {
    Name: "Sean O&#039;Connor",
    Bio: "<p>After starting his stand up career in New Jersey, Sean moved to New York and quickly<br />\nbecame one of the city&#039;s favorite new comics, being featured in the NY Post as one of<br />\nNew York’s Top 20 Comics to Watch and filmed his Half Hour Special for Comedy<br />\nCentral.</p>\n<p>In addition to working as a staff writer on “Sports Show with Norm MacDonald” at<br />\nComedy Central, Sean was a producer for “Upload with Shaquille O’neal”. He is currently<br />\ndeveloping a pilot with Julian McCullough for Comedy Central.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/sean_o_connor_pic_5.16.13.jpg",
    PerformerId: "6816",
    SortOrder: 150,
    id: "6816",
    pageUrl: "6816-sean-o039connor",
    events: [ "7645", "7660", "7699", "7914" ],
    mc_events: []
}, {
    Name: "Jay Larson",
    Bio: "<p>Jay Larson is a stand up comedian and writer.  BORING! No but he&#039;s really funny guys, come on, listen!  Jay&#039;s unique perspective and original voice have been Jay&#039;s calling card since doing the prestigious Montreal Comedy Festival in 2005.  Since then he has been a regular at Bridgetown Comedy Festival, had his own half hour special on Comedy Central, performed at SXSW, and has made 5 Late night appearances.  While most people see stand up comedians as Joke tellers, Jay sees himself as more of a storyteller.  He cemented himself as a storyteller by performing one single story on Conan in 2013.  The response was amazing and the YouTube video of the set went viral.  Jay attributes his storytelling success to his extremely popular podcast, The CrabFeast.  This conversational storytelling podcast has a cult following that grows weekly.  Released every Toozdee at TheCrabFeast.com, Jay&#039;s podcast has featured some of comedy&#039;s best story tellers and comics.  He is currently in development with NBC Universal Studios, and hopes to put his storytelling onto the silver screen so he never has to prove himself through a BIO again.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/524644_10200612388365104_2023088941_n.jpg",
    PerformerId: "6810",
    SortOrder: 150,
    id: "6810",
    pageUrl: "6810-jay-larson",
    events: [ "7667", "7668", "7805" ],
    mc_events: []
}, {
    Name: "Andy Haynes",
    Bio: "<p>Andy Haynes was born in the shadows of Mt. Rainier in the wilds of the Pacific Northwest, raised on salmon and caffeine. He now lives in Los Angeles, where he works as comedian, and writer.</p>\n<p>He has performed on Late Night with Jimmy Fallon and the New Faces showcase at the Montreal Just for Laughs Festival, along with numerous other clubs, colleges, and festivals. Numerous means any number.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/andy_haynes_photo.jpg",
    PerformerId: "6804",
    SortOrder: 150,
    id: "6804",
    pageUrl: "6804-andy-haynes",
    events: [ "7652", "7665", "7730", "7804", "7918" ],
    mc_events: [ "7796" ]
}, {
    Name: "Mary Mack",
    Bio: "<p>Folk humorist and comedian Mary Mack is a favorite on radio shows and podcasts around the country, including Marc Maron&#039;s WTF Podcast, The Bob and Tom Show, and American Public Media&#039;s WITS live show and podcast.  Her comedy (spotted with occasional mandolin or clarinet outbursts) has  been seen in the Vancouver Comedy Fest, The Andy Kaufman Awards, Montreal’s Just For Laughs Festival, and the San Francisco Sketch Fest as one of &quot;The Dozen&quot; up and coming headliners designated by the festival.  She is a main voice on Fox&#039;s new late night ADHD cartoon &quot;Golan the Insatiable.&quot;  Mack divides her time among Los Angeles,  Minneapolis, and a camper in the woods in Northern Wisconsin.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/mary_mack.jpg",
    PerformerId: "7566",
    SortOrder: 175,
    id: "7566",
    pageUrl: "7566-mary-mack",
    events: [ "7689", "7698", "7708", "7915", "7916" ],
    mc_events: [ "7650" ]
}, {
    Name: "James Davis",
    Bio: "<p>James is a stand-up comedian, writer, and actor. James was named one of the “New Faces” at the prestigious Just For Laughs Festival in Montreal in 2012, and can recently be seen in the new hit show &quot;Real Husbands of Hollywood&quot; on BET. He is also a round table regular on &quot;Chelsea Lately.&quot;</p>\n<p>James is the darling of Funny Or Die, and has written, directed, and starred in massive hits for the site, with “Baracka Flacka Flames” reaching 8 million views. James is the go-to impressionist for Barack and Kobe, and has created many of his own original characters.  He is currently developing The James Davis Show for E!, which is being produced by Funny Or Die and Will Ferrell’s production company Gary Sanchez Productions. He also just shot six episodes of Russell Simmon’s All Def Digital YouTube Channel, and is a regular on “Wild n Out” and Lil Duval’s ‘Ain’t That America’. Both premiered on MTV in 2013.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/jamesdavis_superserious.jpg",
    PerformerId: "6839",
    SortOrder: 175,
    id: "6839",
    pageUrl: "6839-james-davis",
    events: [ "7703", "7730", "7733" ],
    mc_events: [ "7694" ]
}, {
    Name: "Billy Wayne Davis",
    Bio: "<p>Since getting his start in his hometown of Nashville, TN, Billy Wayne Davis has performed in virtually every corner of the United States. He has appeared on TruTV and written for NFL on FOX. His festival credits include the Bridgetown Comedy Festival, the Laughing Skull Comedy Festival, Bumbershoot, and Sketchfest in San Francisco. His Rooftop Records release, Billy Wayne Davis, was featured on Sirius XM and named one of Paste Magazine&#039;s Top Ten comedy albums of 2012</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/billy-wayne-davis-4205-4.jpg",
    PerformerId: "6029",
    SortOrder: 175,
    id: "6029",
    pageUrl: "6029-billy-wayne-davis",
    events: [ "7623", "7699", "7737", "7951", "8633" ],
    mc_events: []
}, {
    Name: "Amber Tozer ",
    Bio: "<p>Amber Tozer is a stand up comic, writer, and actress living in Los Angeles.  She has built a Twitter following of over 35K users, and her witty tweets have been featured on shows such as Jimmy Fallon, and Ellen among others. She co-created #nitTWITS, a Twitter-based web series, which features writers and performers from SNL, Modern Family, The Office, and Conan. Amber has written for Cartoon Network&#039;s animated sketch series MAD, and Adult Swim&#039;s Moral Orel. Tozer has also made appearences on Last Comic Standing, and in the Montreal Just for Laughs Festival. She recently inked a development deal with FOX ADHD for an animated series based on her life!</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/ambertozer.jpg",
    PerformerId: "6608",
    SortOrder: 175,
    id: "6608",
    pageUrl: "6608-amber-tozer-",
    events: [ "7621", "7687", "7752", "7916" ],
    mc_events: []
}, {
    Name: "Auggie Smith",
    Bio: "<p>Auggie has appeared on Comedy Central and is a frequent guest on the Bob &amp; Tom Radio Show. In 2010, he became the first comic to win both the Seattle and San Francisco Comedy Competitions in the same year. When Auggie takes the stage, audiences across the country quickly realize that they’re in for an evening of riveting, take-no-prisoners stand-up comedy. During Auggie’s set, pop culture and political targets are dissected piece by piece into intelligently written manic rants. His seamless rapid fire style has developed a loyal following across the country. He has spent most of the last two decades keeping a constant road schedule honing his craft and creating a truly memorable, relevant, and constantly evolving live experience.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/auggiesmith.jpg",
    PerformerId: "6857",
    SortOrder: 175,
    id: "6857",
    pageUrl: "6857-auggie-smith",
    events: [ "7658", "7690", "7702", "7734", "7746", "7808" ],
    mc_events: []
}, {
    Name: "Tony Camin",
    Bio: "<p>Tony has appeared on Late Night with Conan O&#039;Brien, Jimmy Kimmel Live, Real Time with Bill Maher, and lots of other shows that have been cancelled. He&#039;s has performed at The Just For Laughs Festival in Montreal as well as The HBO US Comedy Arts Festival in Aspen, as well as the Melbourne Comedy festival in Australia. As an in-demand writer of awesome &quot;comedic&quot; humor, Tony has written on programs for NBC, VH1, and Comedy Central. All of which have been cancelled. He&#039;s is also a co-creator, and performer of the hit off -Broadway play, The Marijuana-Logues, and was recently seen as a ‎correspondent on The Media Project for IFC.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/_dsf0829nnnttt.jpg",
    PerformerId: "5938",
    SortOrder: 175,
    id: "5938",
    pageUrl: "5938-tony-camin",
    events: [ "7628", "7679", "7694", "7915" ],
    mc_events: [ "7703" ]
}, {
    Name: "Ryan Sickler",
    Bio: "<p>If the adage is true — that tragedy plus time equals comedy — then Ryan Sickler has paid his dues on the left side of the equation.  Born in Baltimore, Ryan lost his father when he was 16, was thrown into the street by his mother and after that, bounced from one relative to another.  It was finally a great-aunt who gave him the chance to get back on his feet and when he did, he did it like he meant it.</p>\n<p>Ryan worked, saved, finished school, packed all his stuff into garbage bags and drove to Los Angeles to follow his dream of being a comic. And while his early years might have seemed rocky, that tumultuous childhood gave him both fodder for material and armor against the relentless onslaught that is life as a standup comic.</p>\n<p>His television appearances include Comedy Central’s Tosh.O, Live At Gotham, Cutman and The Late Late Show.  Ryan is also an informed sports fan and appeared as a regular on Fox Sports.  He has written for his hometown Baltimore Ravens on NFL.com and for Joan Rivers.</p>\n<p>Beyond standup, Ryan Sickler is an engaging storyteller.  You can catch him every Tuesday on his podcast, The CrabFeast.  Inspired by his hometown, the show celebrates the things Ryan loves most — storytelling, family, friends and comedy.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/emailable_headshot.jpg",
    PerformerId: "6092",
    SortOrder: 175,
    id: "6092",
    pageUrl: "6092-ryan-sickler",
    events: [ "7668", "7679", "7749" ],
    mc_events: []
}, {
    Name: "Mark Normand",
    Bio: "<p>So far in 2013, Mark has appeared on TBS’s CONAN, Comedy Central’s INSIDE AMY SCHUMER, MTV Other’s INSIDE JOKE, TruTV’s WORLD’S DUMBEST, was named the Village Voice’s best comedian of 2013, won Carolines March Madness competition, beating out 63 other comedians, and taped a stand-up set at the Just For Laughs festival in Montreal as one of the festival’s New Faces. In 2012, Mark appeared on “John Oliver’s New York Standup Show” on Comedy Central, and taped the pilot of “Best Week Ever” for Vh1, and previously appeared on the most recent season of “Last Comic Standing” for NBC. Mark is also an accomplished writer, with recent shorts appearing on sites such as MSN and The Huffington Post.</p>\n<p>Mark was born and raised in New Orleans, LA to two surprisingly normal parents. As a kid he spent most of his time shooting short films and wetting the bed. Mark started doing comedy right after college and quickly moved to New York. Mark now does comedy clubs and colleges across the country and has been involved in many festivals including Portland, Seattle, DC, Boston, and was featured at the Montreal Comedy Festival.</p>\n<p>In NYC Mark now runs two comedy shows, one of which is recorded for a popular podcast called &#039;We&#039;re all Friends Here&#039; on Breakthruradio.com; the other “Hot Soup” runs at Irish Exit on the east side. Mark was named one of Comedy Central’s Comics To Watch for the 2011 New York Comedy Festival. Mark was also named to Esquire’s “Best New Comedians 2012”, Splitsider’s “Top 10 Up and Coming Comedians on Each Coast”, and Time Out New York’s “21 New York Comedy Scene Linchpins” and Paste Magazine’s #1 “Most Underrated Stand Up Comedian of 2013”.</p>\n<p>Mark still lives in New York City.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/mark-normand4074-2.jpg",
    PerformerId: "6822",
    SortOrder: 175,
    id: "6822",
    pageUrl: "6822-mark-normand",
    events: [ "7624", "7746", "7796", "7918" ],
    mc_events: []
}, {
    Name: "Jesse Case",
    Bio: '<p>Jesse Case (1986-2053) was a well known professional comedian and amateur geneticist from Nashville, Tennessee. The son of a songwriter and a doctor, Case grew up with a love of word-play and bodily functions. In 2008 he appeared on then popular television series, “Last Comic Standing.” Shortly after, he won the Rocky Mountain Laugh-Off, and continued to tour around America. His comedy has been described by the press as "hilariously dark," with such highlights in print as "had me in tears from beginning to end" and "not for me. He doesn\'t do it right." In early 2010, he launched a podcast, "The Last Resort with Jesse Case," the first radio show in history to feature a robot co-host. Later that year he appeared at the Just For Laughs Comedy Festival in Montreal to rave reviews. The following Spring he became the first man to successfully breed a pig and a head of lettuce, which gave birth to a baby Chef\'s Salad. He is survived by 7 wives, 19 children, and 1 grandson, who is also his nephew. He will be missed.</p>\n',
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/jessecase.jpg",
    PerformerId: "6861",
    SortOrder: 175,
    id: "6861",
    pageUrl: "6861-jesse-case",
    events: [ "7642", "7654", "7687", "7916", "7918" ],
    mc_events: []
}, {
    Name: "David Smithyman",
    Bio: "<p>Failing to ever fulfill his true potential as a child actor, David Smithyman moved from Australia to New York City in 2004. Since then, he has performed in numerous showcases for IFC, MTV, and Comedy Central, in addition to representing NBC, first as a finalist in 2013&#039;s Stand Up For Diversity competition in Los Angeles, and then as a touring member of Stand Up NBC&#039;s national college tour. Currently, he works helping kids write their own stand-up at Gotham Comedy club as part of the Kids ’n Comedy program.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/headshot_19.jpg",
    PerformerId: "6476",
    SortOrder: 175,
    id: "6476",
    pageUrl: "6476-david-smithyman",
    events: [ "7689", "7913", "7967", "8631" ],
    mc_events: [ "7951" ]
}, {
    Name: "Ian Karmel",
    Bio: "<p>Ian Karmel is a homegrown Portland comedian whose style zig-zags between the eclectic and the universal. He is currently a writer and roundtable regular on E!’s &quot;Chelsea Lately.&quot;  In 2013, Ian was invited to the prestigious Just for Laughs Festival in Montreal, where he was a breakout stand up in the New Faces category. Ian’s unique perspective helped him win the 2011 Funniest Person in Portland, 2010 Portland Amateur Comedy Competition, and has given him the opportunity to perform at the Moontower Comedy Festival, Bridgetown Comedy Festival, Bumbershoot, Portland’s Helium Comedy Club, Philadelphia’s Helium Comedy Club, Minneapolis&#039; Acme Comedy Club, Austin’s Cap City Comedy Club, Seattle’s Comedy Underground, and various clubs in Los Angeles. Ian’s other television credits include IFC’s Portlandia and the Travel Channel’s Best Sandwich in America, as well as a post-game analyst and commentator for the Portland Trailblazers.  His training includes The Groundlings and the Upright Citizens Brigade, and he is a regular contributor for the Portland Mercury. He currently lives in Los Angeles.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/ian_karmelheadshot.jpg",
    PerformerId: "6824",
    SortOrder: 175,
    id: "6824",
    pageUrl: "6824-ian-karmel",
    events: [ "7645", "7646", "7648", "7667", "7783", "7807" ],
    mc_events: []
}, {
    Name: "Dwight Slade",
    Bio: '<p>Part man, part ageless boy; comedian Dwight Slade has the privilege of being a comedy legend in American stand up.  The winner of the 2008 Boston Comedy Festival, Slade combines an intelligent, raging voice of justice with the snickering attitude of a high school prankster. He gives the impression of a man on a journey who enjoys nothing more than making fun of everything along the way.</p>\n<p>The 90’s found Dwight moving into new arenas of creativity.  Radio station KXL-AM billed him as “The Northwest’s Most Dangerous Mind” as he became a noted talk radio personality who used humor instead of rage to engage listeners.  He released two comedy CD’s on Humor Ink recordings, "Weird State," and “Shut-up.”</p>\n<p>Slade’s feature film debut came in 2000 in the movie “Inconceivable,” which enjoyed a run on Showtime and Lifetime.  Slade also co-starred in the gritty family drama, “My Way Home” which won the Platinum Award at the 2001 Houston International Film Festival. Since then, Slade has made appearances in three feature films including the soon to be released James Westby film, “Rid Of Me.”</p>\n<p>In 2002, Slade became the first stand-up to make appearances at the three major North American Comedy Festivals: Aspen, Chicago and Montreal.  On the heels of his performances, Slade signed a development deal with Warner Brothers Television.  Slade was chosen to appear on HBO’s “Best of the US Comedy Arts Festival” and made an appearance on Comedy Central’s Premium Blend.</p>\n<p>Slade’s stand-up has gained international stature after earning a five star review from Scotland’s Minister of Culture at the prestigious Edinburgh Fringe Festival and appearances at the Montreal Just For Laughs Festival.   He followed this with a tour in Afghanistan performing for US Troops, a tour of Israel. After a stellar performance at the 2008 Comedy Festival in Las Vegas, Slade was chosen to appear on a Tonight Show feature. </p>\n<p>Slade’s comedy special “Right &amp; Raunch” is now available on DVD.</p>\n',
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/dwightslade.jpg",
    PerformerId: "6864",
    SortOrder: 175,
    id: "6864",
    pageUrl: "6864-dwight-slade",
    events: [ "7650", "7740", "7808", "7915" ],
    mc_events: []
}, {
    Name: "Hampton Yount",
    Bio: '<p>Hampton was born in Virginia, started comedy in DC, aged four years, and now lives in Los Angeles. Hampton won the DC Improv Comedy Competition in 2008 and other lesser important comedy contests in VA. He’s been a recurring presence at the Bridgetown Comedy Festival, South By Southwest, The DC Comedy Festival and the Bentzen Ball Comedy Festival, and was a semi-finalist at the Laughing Skull Festival, and was recently named one of Esquire’s best new stand up comedians of 2012. Hampton was previously a creative consultant on Rob Dyrdek&#039;s Fantasy Factory(MTV), a writer for Loiter Squad (Adult Swim) and Upload with Shaq (TruTV) and is currently a creative consultant on Ridiculousness on MTV, and wrote on Chris Hardwick’s pilot Hardwired (Comedy Central). Hampton has appeared on the G4 Network, done contributing writing for Chelsea Lately, and performed his stand up to millions of listeners on the Bob and Tom Radio Show and the Nerdist Podcast. Most recently, Hampton appeared on ComedyCentral.com for Comedy Central’s Comics To Watch at the NY Comedy Festival in 2012, and on Adam Devine’s House Party (Comedy Central) in 2013. </p>\n<p>Hampton also makes a webcomic with his brother Clay Yount: <a href="http://www.robandelliot.com">www.robandelliot.com</a>.  It has an awesome fanbase and has been a critics&#039; favorite.</p>\n',
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/hampton_yount.jpg",
    PerformerId: "6825",
    SortOrder: 175,
    id: "6825",
    pageUrl: "6825-hampton-yount",
    events: [ "7625", "7663", "7749", "7796", "7805", "7914", "8635" ],
    mc_events: []
}, {
    Name: "Chris Locke",
    Bio: "<p>Chris Locke is a stand up comedian, actor, and writer from Toronto, Canada. He performs stand up all over Canada and the U.S. at festivals, in comedy clubs, and independent shows. He was voted &quot;Best Stand Up 2012.&quot;</p>\n<p>Chris just finished performing as a headliner, one of the 42 for this year’s JFL42 festival in Toronto. Other comedy festivals of note that he has performed at are: Just For Laughs in Montreal,  SF Sketchfest in San Francisco, the Bridgetown Comedy Festival in Portland, and NXNE.</p>\n<p>With his unique style of stand up, Chris has opened for comedians such as Todd Barry, Hannibal Burress, Eugene Mirman, Pete Holmes, Todd Glass, and toured opening for Kyle Kinane. </p>\n<p>Chris has appeared on many television shows and is most recognized for his regular appearances on &quot;Showtown&quot; on MTV Canada. He has also appeared on &quot;The LA Complex&quot; on CTV and the CW, &quot;Scare Tactics&quot; on Much Music, &quot;Cock&#039;d Gunns&quot; on Showcase, &quot;Match Game&quot; and &quot;The Jon Dore Television Show&quot; on The Comedy Network, and has lent his distinct voice to CBC’s Radio One.</p>\n<p>Chris was also a key producer of one of Toronto&#039;s most well known weekly comedy shows, &quot;Laugh Sabbath,&quot; which took place at The Rivoli. His monthly Laugh Sabbath show with co-host Aaron Eves called, &quot;Let&#039;s Get Hot!&quot; ran for six years and introduced a combination of alternative and mainstream comedy to downtown audiences. The show featured recurring character pieces by Nathan Fielder, Kathleen Phillips, and Brian Barlow, as well as abstract comedy by artist Jon McCurley.</p>\n<p>Chris has written and performed in countless comedy shorts. They have been screened at Just For Laughs, TIFF, NFB&#039;s World of Shorts, CIFF (Calgary International Short Film Festival) and at live shows. His &quot;These Moments Too&quot; series which he co-produced with Nathan Fielder was a best of 2006 pick in NOW magazine.<br />\nHis success in comedy shorts has lead him to hosting and curating a night of independent comedy shorts for CFC&#039;s annual Worldwide Short Film Festival, which he did for Three years.</p>\n<p>In sketch comedy Chris’s sketch troupe with Brian Barlow called, &quot;The Gurg,&quot; was nominated for the prestigious Tim Sim’s Encouragement Fund in 2003, which lead to appearances on &quot;The Cream Of Comedy&quot; on Comedy Network and &quot;The Toronto Show.&quot; His other sketch troupe, Dinkus, which also featured Graham Wagner, Michael Balazo, Aaron Eves, Brian Barlow, was critically acclaimed and performed in New York, Montreal, and the Toronto Sketch Comedy Festival two years in a row.</p>\n<p>His written humor has been published in The Grid weekly, and ION magazine.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/chris_locke_colour_2.jpg",
    PerformerId: "5889",
    SortOrder: 200,
    id: "5889",
    pageUrl: "5889-chris-locke",
    events: [ "7646", "7740", "7746" ],
    mc_events: [ "7624" ]
}, {
    Name: "Joselyn Hughes",
    Bio: "<p>Joselyn Hughes is a Los Angeles based writer and performer. She was recently named one of “18 Funny Women You Should Be Following on Twitter” by the Huffington Post, nominated for the National Lampoon Twitter Awards, featured as one of the “30 Under 30: Comedians You Should Watch” by Splashlife and Funny or Die, and included in Jane Dough&#039;s &quot;30 under 35 Comedians to Watch.&quot;</p>\n<p>She has performed at festivals, clubs, and colleges all over the country. She was a nominee for the 2008  ECNY “Emerging Comic” award, and has been featured in the New York Post, Comedy Smack, MySpace and Atom.com. </p>\n<p>Joselyn has appeared on &quot;Chelsea Lately,&quot; &quot;Tosh.0,&quot; MTV&#039;s &quot;Failosophy,&quot; VH1 and various national commercials. She also has written for Comedy Central,  MTV, VH1, Hello Giggles, and the Huffington Post. Her web series &quot;DIY, Dammit!&quot; can be seen on the Nerdist Channel.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/387.jpeg",
    PerformerId: "6205",
    SortOrder: 200,
    id: "6205",
    pageUrl: "6205-joselyn-hughes",
    events: [ "7622", "7632", "7742", "7815", "8579" ],
    mc_events: []
}, {
    Name: "Troy Conrad",
    Bio: "<p>An award winning filmmaker, comic, writer, and producer, the projects Troy has produced, directed have views in the millions.  He is creator and co-executive producer of the improvised stand-up show, Set List: Stand-Up Without A Net, currently airing on Sky Atlantic in the UK, as well as live in Los Angeles, the Comedy Cellar in New York City, and touring festivals worldwide.   He is the executive producer of The David Feldman Show on KPFK Pacifica Radio, and Director of the award winning film, “Runyon:  Just Above Sunset,&quot; starring Eddie Pepitone.  His new show, Prompter, is another way of making solo improvisation a meaningful experience for performers and audiences.</p>\n<p>Having completed the writing programs at Second City Los Angeles Conservatory, iO West, and UCB Theatre,  he continues to create, write, and produce innovative new shows for stage and television.  As a comic, he performed at comedy clubs throughout the U.S., and festivals including Montreal, Dublin, Calgary, Vancouver, Edinburgh, Melbourne, Sydney, Austria, and London - as well as skeptic and atheist conferences throughout the world. Troy moved from Phoenix to Los Angeles in 2003 for the good soil to grow creative projects.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/troy_conrad_pic.jpg",
    PerformerId: "7802",
    SortOrder: 200,
    id: "7802",
    pageUrl: "7802-troy-conrad",
    events: [],
    mc_events: [ "8635", "7661" ]
}, {
    Name: "Karinda Dobbins",
    Bio: "<p>Motor City native Karinda Dobbins was born into a politically active family of gifted storytellers and sharp wits. Her worldview was shaped by their accounts of protest, civil rights and empowerment, weighty subjects that were always leavened with humor. Whenever she heard the grownups laughing long past her bedtime, she took that as her cue to sneak out of her room and eavesdrop while they entertained themselves with Richard Pryor records. She not only listened, she learned, developing a relaxed style for delivering pungent commentary.</p>\n<p>Responding to a dare from a girlfriend who challenged her to try making the crowd laugh at an open mic, Karinda finally took the stage at Woody’s Café in Oakland, and killed. Sure, she tried to fill the seats with supportive family and friends, and true, she had no competition since nobody else had signed up for stage time, but everybody, from the show’s host to strangers in the audience, was amazed that she was able to do 15 funny minutes of stand-up material her first time onstage. (She’d shrewdly spent a month writing her act in preparation, never anticipating she’d be put under pressure to perform all of it at once.) </p>\n<p>Spurred on by the enthusiastic feedback, Karinda decided to see where comedy would take her and began honing her craft at more venues. To date, she has appeared at the Michigan Womyn’s Music Festival (MichFest); performed at Bay Area comedy clubs such as Tommy T’s, the Punch Line and Cobb’s; and headlined at San Francisco’s legendary Purple Onion. Karinda recently made her primetime national television debut on NickMom Night Out, a series of stand-up comedy showcases on Nickelodeon and she has opened for Greg Proops and W. Kamau Bell.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/karindadobbins.jpg",
    PerformerId: "8015",
    SortOrder: 200,
    id: "8015",
    pageUrl: "8015-karinda-dobbins",
    events: [ "7711", "7733", "8579", "8632" ],
    mc_events: []
}, {
    Name: "Melissa Villasenor",
    Bio: "<p>From Los Angeles, stand-up comedian and voice impressionist Melissa Villasenor is best known from Season 6 of &quot;America&#039;s Got Talent.&quot; She&#039;s done voices for &quot;Adventure Time&quot; and &quot;Family Guy.&quot; Her four song EP, &quot;Leap,&quot; is out on iTunes. Last year, her one person show &quot;Melissa!&quot; had a two month run at the Steve Allen Theater in Hollywood. It was directed and produced by comedian Ron Lynch.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/384251_513533271999012_1690821256_n.jpg",
    PerformerId: "5998",
    SortOrder: 200,
    id: "5998",
    pageUrl: "5998-melissa-villasenor",
    events: [ "7638", "7675", "7740", "7741", "7804", "7809" ],
    mc_events: []
}, {
    Name: "Kellen Erskine",
    Bio: "<p>Kellen Erskine was a finalist of the San Francisco International Comedy Competition. Recently, he was featured in a Reader&#039;s Digest article entitled &quot;Comics You Haven&#039;t Heard of . . . Yet.&quot; Kellen also appeared on season 7 of NBC&#039;s &quot;America&#039;s Got Talent,&quot; and now he opens regularly for Frank Caliendo.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/headshot_3_0.jpg",
    PerformerId: "6766",
    SortOrder: 200,
    id: "6766",
    pageUrl: "6766-kellen-erskine",
    events: [ "7623", "7752", "7919" ],
    mc_events: []
}, {
    Name: "Bri Pruett",
    Bio: "<p>Bri Pruett is a stand-up comic and improviser from Portland, Oregon.  She’s appeared at the Bridgetown Comedy Festival and the All Jane No Dick comedy festival.  She was recently named one of the &quot;Top 5 Funniest Comedians in Portland&quot; by Willamette Weekly.  In the fall of 2013, Bri was one of 35 comics selected from 1,300 applicants to perform in the Seattle International Comedy Competition.</p>\n<p>For eight years she’s worked with Action/Adventure Theater, a non-profit independent theater and black box venue that produced an original sketch show called &quot;Making Sex&quot; (in which The Portland Mercury said Bri showed, ”razor sharp comic timing”). She’s been the comedy sidekick and director and head writer for &quot;Late Night Action with Alex Falcone,&quot; a live, talk/variety show.</p>\n<p>She is a regular host and performer at Curious Comedy Theater and a regular player with improv singing-ensemble, Pipes.  Bri is the semi-weekly host of Curious Comedy’s Saturday Night showcase of Portland comics and special guests.  She is a regular MC for the Funhouse Follies Burlesque troupe.  She also writes a regular column for the Portland Mercury on sex and dating in Portland called, &quot;Let&#039;s Do It with Bri Pruett.&quot;</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/bricomedy10.jpg",
    PerformerId: "6527",
    SortOrder: 200,
    id: "6527",
    pageUrl: "6527-bri-pruett",
    events: [ "7694", "7706", "7746", "7810" ],
    mc_events: [ "8579", "7702" ]
}, {
    Name: "Tim Harmston",
    Bio: "<p>Acme early in his career, a well known headliner told him that &quot;You&#039;re kind of like an idiot, but with smart material&quot;. That winning combination has led to appearances on CBS’s Late Show with David Letterman, Comedy Central&#039;s Live at Gotham, the Bob and Tom radio show, and Wisconsin Public Radio. Tim has performed at the Rooftop Aspen Comedy Festival, the Great American Comedy Festival in Norfolk, NE, and the Laughing Skull Comedy Festival in Atlanta. Originally from Western Wisconsin, Tim now lives in Minneapolis. When he&#039;s not on stage, Tim enjoys making smart, idiotic videos for his website, timharmston.com.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/tim.harmston.image_.png",
    PerformerId: "7568",
    SortOrder: 200,
    id: "7568",
    pageUrl: "7568-tim-harmston",
    events: [ "7622", "7650", "7680", "7745" ],
    mc_events: []
}, {
    Name: "Nick Rutherford",
    Bio: "<p>Nick Rutherford is a comedian hailing from Thousand Oaks, CA.  He was honored to be a &quot;Fresh Face Of Comedy&quot; at the Just for Laughs Festival in Montreal, and was recently named one of the &quot;Top Ten Up and Coming Comics on the West Coast&quot; by Splitsider Magazine.   </p>\n<p>Nick  recently made his motion picture debut at Sundance in the feature &quot;Toy&#039;s House&quot; starring Nick Offerman and Megan Mullaly, and will be in the upcoming comedy &quot;Intramural&quot; premiering at SXSW. </p>\n<p>He has written for Adult Swim&#039;s &quot;Loiter Squad&quot; and currently writes at FOX for the animated shows &quot;Axe Cop&quot; and the upcoming &quot;Major Lazer.&quot;</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/rutherfordpress.jpg",
    PerformerId: "6371",
    SortOrder: 200,
    id: "6371",
    pageUrl: "6371-nick-rutherford",
    events: [ "7628", "7658", "7741", "7914" ],
    mc_events: []
}, {
    Name: "Janet Varney",
    Bio: "<p>Janet Varney is a comedian, actor, writer and producer. She spent seven wonderful years hosting TBS&#039;s &quot;Dinner and a Movie,” recurred on HBO&#039;s Entourage, was a series regular on the beloved E! and Yahoo series Burning Love seasons 1 and 3, and has made guest appearances in hit shows including How I Met Your Mother, Key and Peele, Psych, Bones, on the panel of Chelsea Lately, as a regular co-host on HuffPost Live, and has appeared in films such as Still Waiting, Drillbit Taylor and Judy Moody and the Not Bummer Summer. She is also the voice for the titular character on Nickelodeon&#039;s hit series The Legend of Korra. Janet is the host of the popular Nerdist podcast The JV Club and the co-founder, creative director and producer of SF Sketchfest, the San Francisco Comedy Festival, now in its 14th year.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/janet_headshot_2013.jpg",
    PerformerId: "7820",
    SortOrder: 200,
    id: "7820",
    pageUrl: "7820-janet-varney",
    events: [ "7645", "7676" ],
    mc_events: []
}, {
    Name: "Dave Anderson",
    Bio: "<p>A nationally touring comedian, Dave Anderson has performed at the country’s premier comedy clubs, including the world famous Improv in Los Angeles. He has appeared on numerous television shows such as: “Star Search,” Showtime’s “Comedy Club Network,” and “An Evening at the Improv.” His comedy is heard around the world on Sirius and XM satellite radio. Most recently Dave was a contributing writer for the “Tonight Show with Jay Leno.”<br />\nDave is currently an Emmy award winning co-host of the long running morning television talk show “AM Northwest” on KATU TV and co- host of the  ”Mark and Dave Show” on AM 860 KPAM radio in Portland.</p>\n<p>Dave’s unique ability to blend clean, intelligent material with audience interaction has made him a favorite at corporate events and college campuses across America.</p>\n<p>The audience plays a major role in Dave’s show. He has an amazing ability to turn ordinary conversations into hilarious comedy routines while remaining clean and inoffensive. The Oregonian dubbed him “The quickest wit around.” The San Francisco Examiner said he was, “relaxed, likeable, and funny . . .” Willamette Week said, “He ad- libs better than most comedians write.” Because of his quick wit and audience rapport, no two shows are ever exactly alike.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/dave_anderson_photo.jpg",
    PerformerId: "7823",
    SortOrder: 200,
    id: "7823",
    pageUrl: "7823-dave-anderson",
    events: [ "7808" ],
    mc_events: []
}, {
    Name: "Randy Liedtke",
    Bio: "<p>Originally from Oregon and now living in Los Angeles, Randy Liedtke was named one of Comedy Central's Comics to Watch in 2013. You may have seen him on IFC's Maron, Cartoon Network's Adventure Time, or heard his award winning podcast The Bone Zone that he co-hosts with Brendon Walsh.  Lou Dobbs said he is \"beyond council\".</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/randyliedtke.jpg",
    PerformerId: "7580",
    SortOrder: 200,
    id: "7580",
    pageUrl: "7580-randy-liedtke",
    events: [ "7675", "7685", "7915", "7918" ],
    mc_events: []
}, {
    Name: "Bryan Cook",
    Bio: "<p>Bryan Cook is a writer and comedian based in LA.  Cook is the host and creator of Competitive Erotic Fan Fiction, presented every month at the esteemed Nerdmelt Theater in LA, as well as all over the US. In 2012, he was featured as an opening act on Kyle Kinane’s Great Mistakes Tour, and has performed at the SF Sketchfest, Bridgetown Comedy Fest, Riot LA, and Bumbershoot Festival. Bryan is a contributor to McSweeney’s and was most recently a staff writer on E!’s “Fashion Police”.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/bryan_cook.jpg",
    PerformerId: "6379",
    SortOrder: 200,
    id: "6379",
    pageUrl: "6379-bryan-cook",
    events: [ "7667", "7678", "7703", "7918" ],
    mc_events: [ "7646" ]
}, {
    Name: "Sean Flannery",
    Bio: "<p>The easiest way to describe Sean Flannery is: he&#039;s attended the wrong wedding (twice). That mostly sums it up.</p>\n<p>On stage, he shares wild, hilarious stories, while showing multimedia from the events: photos, videos, voicemails and more. He recently combined many of these stories into a sold-out, critically-acclaimed one man show, called &quot;Never Been to Paris,&quot; about the last 10 times he nearly killed himself by accident.</p>\n<p>He is also the creator and host of &quot;The Blackout Diaries,&quot; a show where comics plus &#039;real&#039; people (cops, priests, teachers, etc) share true drinking stories and answer questions from the audience.</p>\n<p>He has been named the best comic in Chicago by several publications and his live multimedia shows<br />\nroutinely sellout. He was a featured New Face at Just For Laughs Comedy Festival (Montreal)<br />\nand made his television debut last year, on Comedy Central&#039;s, ”Mashup”.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/seanflannery_headshot.jpg",
    PerformerId: "6144",
    SortOrder: 200,
    id: "6144",
    pageUrl: "6144-sean-flannery",
    events: [ "7693", "7698" ],
    mc_events: [ "7742", "7914" ]
}, {
    Name: "Art Krug",
    Bio: "<p>Art Krug is an enigma, which is defined in the dictionary as: “a German built enciphering machine made for commercial use and later adapted for military use”. He is also a very funny comedian. Art Krug also writes about himself in the third person…like now for instance. He has appeared on television (Showtime, commercials), comedy club and college stages, boats, buses, and picnic tables since the ’80s. And people keep asking him back. So that’s good.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/art_8x10ish.jpg",
    PerformerId: "7824",
    SortOrder: 200,
    id: "7824",
    pageUrl: "7824-art-krug",
    events: [],
    mc_events: [ "7808" ]
}, {
    Name: "Erin McGathy",
    Bio: "<p>Erin McGathy is a comedian, writer, and inspiration* living all of the dreams in Los Angeles. As a Navy Kid who moved around a lot, she's willing to do just about anything to make you like her. She's like, SO much fun, you guys!!!</p>\n<p>Erin has proudly performed at the UCB theatre since 2007 with Harold and Maude teams, in sketch shows, variety shows and in other charmingly unclassifiable performances. She is the creator and host of THIS FEELS TERRIBLE: The Love Show, a UCBTLA live show since 2010 and podcast since 2012 (feralaudio.com).</p>\n<p>When she's not doing comedy related things she's making \"Ugly Cakes\" for buddies and mediocre paintings for cold hard cash.</p>\n<p> *JK. What if someone really described herself as an \"inspiration\"???</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/erinmcgathy.png",
    PerformerId: "7896",
    SortOrder: 200,
    id: "7896",
    pageUrl: "7896-erin-mcgathy",
    events: [ "7674", "7783", "7811" ],
    mc_events: []
}, {
    Name: "Dan Levy",
    Bio: "<p>As a sophomore at Emerson College, Dan was chosen to compete at the HBO US Comedy Arts Festival in Aspen, CO, where he won the title of Funniest College Comedian. </p>\n<p>Since then, Dan has been seen at the Montreal Just For Laughs Comedy Festival numerous times, NY Comedy Fest, SF Sketch Fest, and has made TV appearances on Comedy Central’s “Premium Blend,” “Comedy Central Presents,” “The Late Late Show,” “Chelsea Lately,” and “@Midnight.” He has also hosted several cancelled MTV shows and starred in a bunch of un-aired pilots. His Comedy Central album “Congrats on Your Success” released in 2012, debuted in the top 3 on ITUNES. </p>\n<p>Currently, Dan lives in Los Angeles with his wife and baby Abe where he is writing on the FOX sitcom MULANEY and collecting sneakers. His wife would like him to stop with the sneakers.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/img_1635-1.jpg",
    PerformerId: "7581",
    SortOrder: 200,
    id: "7581",
    pageUrl: "7581-dan-levy",
    events: [ "7639", "7652", "7698", "7745" ],
    mc_events: []
}, {
    Name: "Shane Torres",
    Bio: "<p>Shane Torres is a comedian originally from Texas, but started comedy in Portland, Oregon. In the six years he has been performing stand up, he has made some serious mistakes in his personal life, but has done OK in comedy. He was lucky enough to perform in the very first Bridgetown Comedy Festival and New Orleans Comedy and Arts Festival in his first year and second year of comedy. In 2012 he was chosen as on of Comedy Central&#039;s Comics to Watch and also competed in The Seattle International Comedy Competition.  2013 turned out to be a great year for Shane performing and winning The Funniest Person in Portland contest as well as being chosen by his peers as one of The Willamette Week&#039;s top 5 comics. He also took the stage at Seattle&#039;s Bumbershoot Festival that year. After all that he performed at the prestigious Montreal Just For Laugh&#039;s Comedy Festival as New Face where GQ called him best newcomer in an article where they mentioned much more famous comedians that Shane admires greatly. He really hopes you come out to see him and enjoy the show.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/i0000zhk9nzg8pzc.jpg",
    PerformerId: "5742",
    SortOrder: 200,
    id: "5742",
    pageUrl: "5742-shane-torres",
    events: [ "7667", "7753", "7805" ],
    mc_events: [ "7740" ]
}, {
    Name: "Susan Rice",
    Bio: "<p>Susan Rice has never followed the rules where keeping quiet is concerned.  A chatterbox as a child, Rice turned her quirky sense of humor into her life long dream of making people laugh.  </p>\n<p>In 1983 Susan took the jump from professional actress to stand up comic. She moved to Los Angeles and soon found her self appearing on  Evening at the Improv,  Comedy Central as well as George Schlatter&#039; s  Comedy Club.  </p>\n<p>Rice has worked in every venue possible from bars to opening for Jerry Seinfeld, Paula Poundstone, and Rich Shydner.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/photo2.jpg",
    PerformerId: "7825",
    SortOrder: 200,
    id: "7825",
    pageUrl: "7825-susan-rice",
    events: [ "7808" ],
    mc_events: []
}, {
    Name: "Andy Erikson",
    Bio: "<p>Andy was hit in the head by a bird as a kid, and that’s how she got her powers. Soon after, she decided to be a comedian. In 2009 she was voted MVP at the Aspen Rooftop College Comedy Festival, and that same year she was a semi-finalist for the Andy Kaufman Award.  In 2013, she was a finalist at The Great American Comedy Festival. Her favorite thing about comedy is making friends.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/image_3.jpg",
    PerformerId: "6284",
    SortOrder: 200,
    id: "6284",
    pageUrl: "6284-andy-erikson",
    events: [ "7706", "7730", "7751" ],
    mc_events: []
}, {
    Name: "Karl Hess",
    Bio: "<p>Karl is a stand-up comedian and actor that was chosen as a New Faces at the Just For Laughs Montreal Festival in 2010 and as a recipient of the Rooftop Comedy&#039;s 2011 Silver Nail Award, which awards a select group of emerging comedians each year. Karl has also performed for the last three years at the Bridgetown Comedy Festival in Portland, and was a finalist at the Laughing Skull Comedy Festival in 2010. He is currently a writer on MTV&#039;s &quot;Ridiculousness&quot;.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/karl_hess_hs_2.jpg",
    PerformerId: "6646",
    SortOrder: 200,
    id: "6646",
    pageUrl: "6646-karl-hess",
    events: [ "7689", "7697", "8633" ],
    mc_events: [ "7706" ]
}, {
    Name: "Derek Smith",
    Bio: "<p>Derek Smith is a stand up comic originally from Oklahoma, now living in Chicago.  He was a part of the 2013 Just For Laughs Festival in Chicago, and is a cast member of The Lincoln Lodge.</p>\n<p>Despite being a bag of vices and complaints, he remains likable and lovable, like a smart, irritated teddy bear who makes poor life decisions. He’s been described as disgusting and smart. He could probably write this generation’s definitive dick joke in his sleep. He probably will, but only in between being a hundred kinds of funny, intelligent, and captivating.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/derek_smith.jpg",
    PerformerId: "6735",
    SortOrder: 200,
    id: "6735",
    pageUrl: "6735-derek-smith",
    events: [ "7654", "7685", "7688", "7706", "7914" ],
    mc_events: []
}, {
    Name: "Erin Gibson",
    Bio: '<p>Erin Gibson is an expert at mixing social commentary, political satire, and frank sexual talk into nice, neat little comedy packages. Based in Los Angeles, she currently writes and directs for Funny or Die and co-hosts the award winning comedy podcast "Throwing Shade", which is now a web series on Funny or Die and an international touring live show. </p>\n<p>As an actress and comedian, she’s been seen on Chelsea Lately, The Kroll Show, Parks and Rec, Community, Key and Peele, and clip shows galore, but it was her stint as host and writer of "Modern Lady" on CurrentTV that she became involved in the fun world of gender politics. </p>\n<p>Please do not startle her. She will scream.</p>\n',
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/eringibson.jpg",
    PerformerId: "7893",
    SortOrder: 200,
    id: "7893",
    pageUrl: "7893-erin-gibson",
    events: [ "7644" ],
    mc_events: []
}, {
    Name: "Mark Forward",
    Bio: "<p>From the start, comedian Mark Forward was a breakout talent. He was a finalist for the Phil Hartman Award for Best Up &amp; Coming Stand-up and Yuk Yuk’s Funniest New Comic in the year 2000. He kept on winning. He won the Canadian Comedy Award for Best Stand-up Newcomer in 2005 and the Homegrown Comic Competition at his first appearance at the prestigious Just For Laughs Festival in Montreal in 2006. In 2008 he won his second Canadian Comedy Award for Best Writing on a Series (The Jon Dore Television Show) and in 2012, he won his third Canadian Comedy Award, this time for Best Taped Live Performance (The Late Late Show with Craig Ferguson). This year he received two Canadian Comedy Award-nominations for Best Male Stand-up (his third nomination in this category) and Best Taped Live Performance and was nominated for NOW Magazine’s Best of Toronto Award for Best Male Stand-up.</p>\n<p>Forward is currently shooting his third season of &quot;Mr. D.&quot; He is a staff writer and plays the recurring character Mr. Leung on the hit CBC series. He wrapped production on the feature film &quot;No Stranger Than Love&quot; where he plays a principal role opposite Alison Brie, Justin Chatwin and Colin Hanks and is was featured on John Oliver’s New York Stand-Up Show (Comedy Central) and Just For Laughs: All Access (The Comedy Network) for which he received a Canadian Comedy Award-nomination.</p>\n<p>For two seasons, Forward was on the writing staff of &quot;The Jon Dore Television Show&quot; (The Comedy Network/IFC) and played a variety of characters on the show. </p>\n<p>Forward performs at festivals and headlines at clubs across the country including multiple appearances at the Just For Laughs Festival, the Ha!ifax ComedyFest and the Ottawa Blues Festival. </p>\n<p>He has appeared on The Late Late Show with Craig Ferguson (CBS), John Oliver New York Stand-Up show (Comedy Central) and starred in his own stand-up special Comedy Now! (CTV, The Comedy Network). He has made guest appearances on a number of television shows including Just for Laughs (CBC) for which he received a Canadian Comedy Award-nomination, Living in Your Car (TMN), Doc (PAX), The Newsroom (CBC) and Degrassi: The Next Generation (CTV). Selected film credits include The Rocker with Rainn Wilson, Josh Gad and Christina Applegate, Puck Hogs and Breakfast with Scott with Tom Cavanagh.</p>\n<p>Awards + Accolades<br />\n2013 Canadian Comedy Award-Nominee- Best Male Stand-up<br />\n2013 Canadian Comedy Award-Nominee-Best Taped Live Performance-Just for Laughs<br />\n2012 Canadian Comedy Award-Nominee-Best Male Stand-up<br />\n2012 Canadian Comedy Award Best Taped Live Performance -The Late Late Show<br />\n2011 NOMINATION: Canadian Comedy Award-nominee for Best Male Stand-up<br />\n2010 NOMINATION: Canadian Comedy Award-nominee for Best Taped Live Performance-Just For Laughs<br />\n2008: Canadian Comedy Award Best Writing Series-The Jon Dore Television Show<br />\n2006 WIN: Just For Laughs Homegrown Comic Competition<br />\n2005 WIN: Canadian Comedy Award for Best Stand-up Newcomer</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/rsz_2mark_forward_headshot.jpg",
    PerformerId: "6614",
    SortOrder: 200,
    id: "6614",
    pageUrl: "6614-mark-forward",
    events: [ "7624", "7658", "7743", "7913" ],
    mc_events: []
}, {
    Name: "Dave Stone",
    Bio: "<p>Based in Los Angeles by way of Atlanta, Dave made his television debut on “The Late Late Show with Craig Ferguson” in 2013, and in the same year was selected to the prestigious “New Faces” showcase at the Just For Laughs Comedy Festival in Montreal, as well as being named one of the “12 Comics to Watch” by L.A. Weekly Magazine. </p>\n<p>Dave can also be heard voicing several characters on Adult Swim’s hit animated series “Squidbillies” on the Cartoon Network and was a co-founding member of the nationally acclaimed “Beards of Comedy Tour”, who released their sophomore album “Cardio Mix” on Comedy Central Records in 2011. Since 2008, Dave has spent 175+ days a year on the road, sharing stages with some of the industry’s brightest stars, such as Brian Regan, Patton Oswalt, Maria Bamford, Marc Maron, Kyle Kinane and John Mulaney. Dave’s laid back and self-deprecating style make him a hit with a wide variety of audiences, transcending age, race, class, gender, height and weight.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/dave_-_low-res_headshot.jpg",
    PerformerId: "6325",
    SortOrder: 200,
    id: "6325",
    pageUrl: "6325-dave-stone",
    events: [ "7622", "7697", "7745" ],
    mc_events: [ "7916" ]
}, {
    Name: "Michael Busch",
    Bio: "<p>Michael Busch is an actor/writer/producer originally from Mentor, Ohio. He is a regular performer at The Upright Citizens Brigade Theatre in Los Angeles and has also produced multiple shows including The Midnight Show and Nick's Big Talk Show with Nick Thune. Michael has written &amp; produced online content for sites including CC Studios, Above Average, College Humor, Nacho Punch, and Funny or Die. His acting credits include Human Giant, Community, Conan, Pretty Little Liars, and a series of Alltel commercials.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/michaelbusch.jpg",
    PerformerId: "7773",
    SortOrder: 200,
    id: "7773",
    pageUrl: "7773-michael-busch",
    events: [ "7741" ],
    mc_events: []
}, {
    Name: "Jensen Karp",
    Bio: "<p>Jensen Karp accidentally found himself with a million dollar record deal at age 19 under the moniker Hot Karl on Interscope Records, where he released songs with Kanye West, Redman, Fabolous, Mya and Will.I.Am. Since his time as a rapper, he’s went on to find himself working in professions a little more fitting for his passion for comedy, opening pop culture art galleries (Gallery1988) and writing for “WWE Raw,” FunnyOrDie &amp; “The Howard Stern Show.” He was also Creative Director at the YouTube channel JASH, where he co-wrote and produced the web series &quot;The ArScheerio Paul Show.&quot; </p>\n<p>He recently appeared on the Yahoo/E! Network show “Burning Love&quot; and has collaborated with “Breaking Bad,” “LOST” and “The Academy Awards” on marketing initiatives  and campaigns. He produces and performs in two reoccurring shows in Los Angeles: &quot;Baby Talk w/ Dan Levy&quot; at the NerdMelt Theater and &quot;The Live Read&quot; at UCB.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/clipperpic.jpg",
    PerformerId: "7590",
    SortOrder: 200,
    id: "7590",
    pageUrl: "7590-jensen-karp",
    events: [],
    mc_events: [ "7639", "7645" ]
}, {
    Name: "Laurie Kilmartin",
    Bio: "<p>Laurie Kilmartin was a finalist on Last Comic Standing and has appeared on CONAN and Jimmy Kimmel Live. She is the co-author of the NYT bestseller &quot;Sh*tty Mom&quot; and is currently a staff writer on CONAN.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/kilmartin_dion-1.jpg",
    PerformerId: "7828",
    SortOrder: 200,
    id: "7828",
    pageUrl: "7828-laurie-kilmartin",
    events: [ "7672", "7734" ],
    mc_events: []
}, {
    Name: "Byron Bowers",
    Bio: "<p>Described by LA Weekly as “a comic who’s got big ideas and big plans to go big places,” Byron Bowers is a stand-up comedian and actor that has toured nationally with Dave Chappelle, Hannibal Buress, John Caparulo, and Eric Andre and The Eric Andre Show Live. </p>\n<p>He has appeared on the Eric Andre Show on Adult Swim, Comcast TV, and Comedy Central. His stand-up cable debut was on Comedy Central&#039;s &quot;Adam Devine&#039;s House Party&quot; and he can also be seen on the reboot of BET&#039;s &quot;Comic View&quot;. He has won the Big Sky International Comedy Competition and was named by LA Weekly as a “Comedy Act to Watch in 2013”. Byron was featured as New Face at the prestigious Just for Laughs Comedy Festival in 2013.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/byron_bowers_photo.jpg",
    PerformerId: "6805",
    SortOrder: 200,
    id: "6805",
    pageUrl: "6805-byron-bowers",
    events: [ "7624", "7632", "7701", "7743", "7805" ],
    mc_events: []
}, {
    Name: "Bryan Safi",
    Bio: '<p>Bryan Safi is a writer and performer living in Los Angeles. He is the co-host of the popular podcast "Throwing Shade," which tackles lady issues and gay issues and treats them with much less respect than they deserve. He is the host/writer/co-creator of Current TV\'s “That\'s Gay.” He was also staff writer at The Ellen DeGeneres Show, for which he won an Emmy Award, has written for Joan Rivers on Fashion Police, and before that, was a staff writer at the comedy website "Funny or Die." He is a regular performer at the Upright Citizens Brigade Theatre in Los Angeles.</p>\n',
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/bryansafi.jpg",
    PerformerId: "7894",
    SortOrder: 200,
    id: "7894",
    pageUrl: "7894-bryan-safi",
    events: [ "7644" ],
    mc_events: []
}, {
    Name: "Carolyn Busa",
    Bio: "<p>Carolyn Busa has performed on stages all over Philadelphia and New York City, as well as the Ladies are Funny Festival, the Bridgetown Comedy Festival, the Women in Comedy Festival, and the She-Devil Comedy Festival. She is the proud mother/co-creator of Laughs on Fairmount, one of Philly&#039;s longest running open mics.</p>\n<p>Carolyn’s awkwardly, disarming stage presence will charm your figurative pants off.  She continually hosts and features throughout the tri-state area; and contributes to local sketch and theater productions. She may have even unsuccessfully auditioned for &quot;America&#039;s Next Top Model.&quot; Twice.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/headshot_15.jpg",
    PerformerId: "6315",
    SortOrder: 250,
    id: "6315",
    pageUrl: "6315-carolyn-busa",
    events: [ "7672", "7679", "7691", "7710" ],
    mc_events: []
}, {
    Name: "Aaron Weaver",
    Bio: "<p>Aaron Weaver started doing stand-up in Chicago in 2008, with a point-of-view so specific, so original, and so hilarious that the rest of the Chicago comedy scene quickly took notice. He rapidly became one of Chicago’s most heralded stand-ups, due to his custom brand of absurd soulfulness and his way of exploring all the smartest and stupidest thoughts that go through all of our heads. Aaron has performed regularly at every comedy club, showcase, and pancake house in Chicago, including the Laugh Factory, Zanies, and The Lincoln Lodge. He has also performed at the TBS Just For Laughs Festival (twice), as well as the Boston Comedy Festival.  Since moving to LA in 2013, he was named one of Comedy Central’s “Comics to Watch” by making it to the final round of their nationwide Up Next competition. Aaron’s positive stage persona is a breath of fresh air, particularly if you like breathing things that are really, really funny.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/aaron_weaver_head_shot1.jpg",
    PerformerId: "6159",
    SortOrder: 250,
    id: "6159",
    pageUrl: "6159-aaron-weaver",
    events: [ "7641", "7695", "7738" ],
    mc_events: []
}, {
    Name: "Eliza Skinner",
    Bio: '<p>Eliza Skinner is originally from Richmond, VA and started her performing career as an unnamed child revolutionary in a local production of Evita. She is now a stand-up comedian and regular performer at the Upright Citizens Brigade Theater in New York and LA. Most recently, Eliza was a writer and performer on Totally Biased with W Kamau Bell, produced by Chris Rock. She has performed in festivals all over the world including RiotLA, SXSW, Bridgetown, the NY Comedy Festival and the Edinburgh Fringe, and was named by Patton Oswalt as a notable &quot;up and coming&quot; comedian. She has also written for Fashion Police with Joan RIvers, Glamour, Showtime, Cracked, and many other publications and websites. Many of her original videos have become viral hits online, and RuPaul once called her “She-larious!” so....  <a href="http://www.elizaskinner.com">www.elizaskinner.com</a></p>\n',
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/elizanew2-2.jpg",
    PerformerId: "6609",
    SortOrder: 250,
    id: "6609",
    pageUrl: "6609-eliza-skinner",
    events: [ "7646", "7667", "7671", "7739", "7741" ],
    mc_events: []
}, {
    Name: "Vince Averill",
    Bio: "<p>Vince Averill is a Los Angeles based comedian. He has toured throughout North America and appeared on Comedy Central.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/vinceheadshot.jpg",
    PerformerId: "6717",
    SortOrder: 250,
    id: "6717",
    pageUrl: "6717-vince-averill",
    events: [ "7697", "7912", "7951" ],
    mc_events: [ "7698" ]
}, {
    Name: "Kiran Deol",
    Bio: "<p>Kiran Deol is an LA based standup and performer born in Britain and raised in Boca Raton, Florida. She performs in venues across LA including Meltdown, The Improv, and anywhere that will have her really.  Credits include MODERN FAMILY, GREYS ANATOMY, WEEDS, PARENTHOOD, and NEWSROOM. Film credits include a lead in the independent feature film FARAH GOES BANG, which debuted at the Tribeca Film Festival in April 2013 and won the first-ever Nora Ephron Award.  </p>\n<p>Before standup, Kiran began her career as a filmmaker.  Her first short film, WOMAN REBEL, was a documentary about women rebel soldiers in Nepal that was broadcast by HBO, shortlisted for an Oscar, and nominated for an Emmy.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/kiran_pic.jpg",
    PerformerId: "6162",
    SortOrder: 250,
    id: "6162",
    pageUrl: "6162-kiran-deol",
    events: [ "7622", "7628", "7809" ],
    mc_events: [ "7692" ]
}, {
    Name: "Kristine Levine ",
    Bio: "<p>Kristine Levine has been seen on IFC&#039;s &quot;Portlandia,&quot; and regularly tours with Doug Stanhope. She is a delight.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/600475_10200837691937142_519375149_n.jpg",
    PerformerId: "6723",
    SortOrder: 250,
    id: "6723",
    pageUrl: "6723-kristine-levine-",
    events: [ "7671", "7687", "7699", "7750", "7808", "8579" ],
    mc_events: []
}, {
    Name: "Nathan Brannon",
    Bio: "<p>Nathan takes the audience on an unexpected ride full of witty stories, clever punch lines, and amusing shadow puppets. He brings smiles and hilarious anecdotes to the stage every time he grabs the microphone. Nathan also added this sentence because he wanted a higher word count.</p>\n<p>Nathan was named one of the &quot;Top 5 Funniest&quot; of Portland  by the Willamette Week in 2013, Portland&#039;s Funniest Person for 2012, and just opened for Comedian Dave Chappelle throughout Oregon. Last summer, he released his first comedy album, entitled &quot;I Black Out&quot;. He has participated in comedy festivals all over the country, as well as opened for national headliners such as Dave Chappelle, Matt Braunger, Maria Bamford, Arj Barker, Rob Schneider, Bert Kreischer, Larry Miller, and more. Nathan was also seen in NBC’s new series, “Grimm”. Nathan is now seeking a funnier way to end this paragraph.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/nathan_brannon.jpg",
    PerformerId: "6074",
    SortOrder: 250,
    id: "6074",
    pageUrl: "6074-nathan-brannon",
    events: [ "7667", "7701", "7808" ],
    mc_events: []
}, {
    Name: "David Foster",
    Bio: "<p>It’s possible David Foster is the only comedian from New York who’s appeared on HBO, MTV, and Showtime, has a Masters degree in Traditional Chinese Medicine, was arrested seven times as an adolescent, speaks Spanish fluently, performed &quot;Mama Said Knock You Out&quot; at his Bar-Mitzvah, has a black belt in karate and a daily meditation practice… though it’s true, you never know who else is out there. If that wasn’t too much to digest then you’re ready for David’s uniquely cerebral brand of humor. </p>\n<p>Born and raised in New York, David is one of the country&#039;’s funniest up and coming philosophers posing as a stand-up comic. In spite of his juvenile experimentation with graffiti, marijuana, and shoplifting he was a straight-A student, always on the honor roll. Around the legally transformative age of 18 he straightened out his act, and shortly thereafter discovered his act on stage. </p>\n<p>Success and recognition came quickly. His popular Manhattan public access talk show grabbed the attention of MTV, and by his fourth year in comedy he’d been featured on HBO, Showtime and MTV - many of his segments still being aired on VH-1’s Best Pranks. He won the 2011 Boston Comedy Festival’s New York Competition and was first runner up in the Comix at Foxwoods’ 2012 “Last Comix Standing” contest. He also consistently scripts one of the most popular philosophical blogs on stand-up comedy, davidfostercomedyblog.com. </p>\n<p>On stage David dissects the root causes of his anxieties and tells stories of how his adolescence staunchly contrasted with what his Jewish mother had envisioned for him. Philosophically he dissects the human stream of consciousness, criticizes our educational and medical systems, and refutes cynical perspectives, which is unique to what we hear from most stand-ups. While it’s become common for comedians to make fun of things like spiritual faith, hip hop white guys, and natural forms of medicine, David brilliantly conveys the opposite perspectives with a hilarious and unique charisma. Refreshing to listen to and an absolute pleasure to watch, his career has progressed reasonably fast.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/d_foster_copy.jpg",
    PerformerId: "5805",
    SortOrder: 250,
    id: "5805",
    pageUrl: "5805-david-foster",
    events: [ "7687", "7692", "7911", "7919" ],
    mc_events: []
}, {
    Name: "Kristin Manna",
    Bio: "<p>Kristin is one of six kids. Her dad likes to get married. She drinks orange juice with everything. She is a horrible speller. Kristin has performed at Eastville Comedy Club, Gotham Comedy Club, Greenwich Village Comedy Club, UCBEast, and various clubs in NYC.  Kristin has been featured in the She Devil Woman&#039;s Comedy Festival. She also produces and writes her web series &quot; Awkwardly Charming&quot;. Most recently, you may have seen Kristin eating pancakes in an IHOP commercial.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/img_0325.jpg",
    PerformerId: "6337",
    SortOrder: 250,
    id: "6337",
    pageUrl: "6337-kristin-manna",
    events: [ "7637", "7710", "7951" ],
    mc_events: [ "7745" ]
}, {
    Name: "Richard Bain",
    Bio: "<p>Richard Bain started doing standup in North Carolina in 2003 and then moved to Portland, Oregon in 2005. After becoming one of Portland’s favorite comedians he decided to move to Los Angeles in 2011. When he’s not on stage making you laugh, he’s probably making videos with his friends better known as Decision Makers Penthouse. Their videos have been featured as Will Ferrell’s favorites on funnyordie.com, and Bain starred in one that was featured on The Tonight Show with Conan O’Brien. Richard has performed at the Laughing skull fest, Bumbershoot, and the LA Riot festival. He recently was featured in a Dead Kevin sketch for comedy central.com.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/screen_shot_2012-07-18_at_8.06.53_pm.png",
    PerformerId: "6110",
    SortOrder: 250,
    id: "6110",
    pageUrl: "6110-richard-bain",
    events: [ "7622", "7625", "7711", "7752", "7967" ],
    mc_events: []
}, {
    Name: "Leo Flowers",
    Bio: "<p>A comedic powerhouse and masterful storyteller, Leo has traveled the world delivering his stand-up in clubs and theaters. Originally from Chicago, he began his comedy career in Los Angeles quickly working his way into major clubs.  His delivery has been described as “smooth and deliberate,” his comedy, “hilarious and provocative.” Putting his M.A. in Counseling to work, Leo puts an insightful spin on topical issues while revealing personal anecdotes.</p>\n<p>Captivating audiences of all demographics, Leo Flowers has performed in Japan for the U.S. troops, at the Montreal Comedy Festival and has made numerous television appearances: NBC’s “Bones”, “Comics Unleashed w/Byron Allen and MTV’s “Sports Blender.” He was also a Finalist in NBC’s Stand-up competition and the Laughing Skull Comedy Competition; 1st runner-up in the San Francisco Comedy Competition; toured on the “Shaved and Depraved Comedy Tour” and can be heard on the Laughing Skull Comedy album available on itunes. Leo has also been featured numerous times on the “Bob and Tom Radio Show&quot; and is currently the host of &quot;Staan Dup&quot; for the Starz network.  </p>\n<p>In 2014, he&#039;ll be recording his first cd entitled, &quot;Lazily Ambitious!&quot;</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/0061retouchedwebonly.jpg",
    PerformerId: "5813",
    SortOrder: 250,
    id: "5813",
    pageUrl: "5813-leo-flowers",
    events: [ "7652", "7690", "7701" ],
    mc_events: [ "7695" ]
}, {
    Name: "Charlie Rohrer",
    Bio: "<p>Charlie Rohrer dropped out of college to tell jokes. Comedy just seemed more viable than a bachelor&#039;s degree in Fine Arts. Growing up the black sheep of an enormous Irish family in the South Suburbs of Chicago, his comedy mostly comes from self-reflection, tales from his awkward childhood, and his unique view on everyday life. </p>\n<p>He co-producers a very successful, independent show in Chicago called &quot;Congrats on Your Success,&quot; and has performed at Zanie’s, Chicago Underground Comedy, Gilda’s Laughfest, and more.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/charlierohrer.jpg",
    PerformerId: "6203",
    SortOrder: 250,
    id: "6203",
    pageUrl: "6203-charlie-rohrer",
    events: [ "7692", "7737", "7911" ],
    mc_events: [ "7730" ]
}, {
    Name: "Greg Santos",
    Bio: "<p>Greg Santos is a Cuban with the gift of looking Jewish.  Greg is a regular host at the American Comedy Co in San Diego, The Westside Comedy Theatre in Los Angeles and has hosted and featured for many comedians including Chris Kattan (SNL), Chris Franjola (Chelsea Lately), Brody Stevens (HBO, CONAN), Michael Kosta (Comedy Central, Fox Sports), Dan St. Germain (Comedy Central), Owen Benjamin (Comedy Central, Sullivan &amp; Sons); Taylor Williamson (America&#039;s Got Talent), and many others he doesn&#039;t feel like name dropping.  Greg was also selected to perform in the 2014 RIOT LA Alternative Comedy Festival.</p>\n<p>Greg is part of the sketch group Tunguska Yacht Club, whose work has been featured by Funny or Die, Huffington Post Comedy, Nerdist.com, Men’s Humor, You Tube What’s Popular, What The Funny, and countless Eastern European sites he cannot understand. Tunguska Yacht Club was a finalist in the 2012 International Songwriting Competition in the category of Comedy and they lost to the beautiful Garfunkel and Oates. Tunguska Yacht Club is currently making 12 exclusive videos for Marlon Wayans’s new company, WhatTheFunny.com and they were also cast in a pilot presentation by Marlon Wayans for TBS.</p>\n<p>Greg co-wrote, co-produced, and participated in a Publisher’s Clearing House Prank on his best friend, Reed Hahn, which was featured on MTV’s Prank’d Season 2, TRU TV’s Top 20 Most Shocking Pranks (2010), TRU TV’s Top 20 Funniest Big Check, No Money (2013), and TRU TV’s World’s Dumbest (2013).</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/westside_comedy_theatre.jpg",
    PerformerId: "5987",
    SortOrder: 250,
    id: "5987",
    pageUrl: "5987-greg-santos",
    events: [ "7708", "7711", "7918" ],
    mc_events: [ "7665" ]
}, {
    Name: "Daniel Van Kirk",
    Bio: '<p>Daniel Van Kirk is a comedian and actor living in Los Angeles. He is an active member of both the stand-up and sketch communities, working with UCBLA, Funny or Die, College Humor, Nerdist Industries, Yahoo Sketchy, and the Earwolf comedy podcast network. Daniel has showcased his characters at numerous theaters and festivals around the country including South by Southwest, The Montreal Just For Laughs Festival, SF Sketchfest, Riot LA, &amp; YouTube\'s, "Comedy Week."</p>\n',
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/dvk.jpg",
    PerformerId: "7518",
    SortOrder: 250,
    id: "7518",
    pageUrl: "7518-daniel-van-kirk",
    events: [ "7703" ],
    mc_events: [ "7638" ]
}, {
    Name: "Mary Van Note",
    Bio: '<p>Mary Van Note is a stand-up comedienne of the weird variety.  She is the creator and star of the award winning Independent Film Channel web series &quot;The Mary Van Note Show: Gavin Really Wants Me.&quot;  She is a SF Weekly Masterminds grant recipient, a seven-time SF Sketchfest performer, and an Andy Kaufman Award Semi-Finalist. The San Francisco Bay Guardian called her a “Zine-Queen Comedian” as she regularly makes zines, crafts and mini-comics.  Her specialties are stick-figures and cross-stitch.  She also posts regularly on her personal style and comics blog at <a href="http://maryvannote.com/blog/">http://maryvannote.com/blog/</a></p>\n',
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/469317_10150585290237945_1579035027_o.jpg",
    PerformerId: "6762",
    SortOrder: 250,
    id: "6762",
    pageUrl: "6762-mary-van-note",
    events: [ "7651", "7663", "7674", "7685", "7692", "7912" ],
    mc_events: []
}, {
    Name: "Bob Khosravi",
    Bio: "<p>Bob Khosravi was born a baby, which his mother appreciated. A storyteller hailing from Austin, Texas Bob has performed all across the country as well as been a featured performer in the Moontower Comedy Festival, the Art Outside Comedy Festival, and was selected to compete in the San Francisco International Comedy Competition. An Austin favorite, Khosravi&#039;s comedy has been described as playful with a subtle sense of dark.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/photo.png",
    PerformerId: "5856",
    SortOrder: 250,
    id: "5856",
    pageUrl: "5856-bob-khosravi",
    events: [ "7663", "7691", "7710", "7743" ],
    mc_events: []
}, {
    Name: "Emily Maya Mills",
    Bio: "<p>Emily Maya Mills is an actor, writer and stand-up comic based in Los Angeles. She&#039;s been seen on Parks and Recreation, Ellen, Childrens’ Hospital, Key and Peele, Harry&#039;s Law, Crash &amp; Bernstein, Comedy Bang Bang and The Birthday Boys, as well as many of television’s most humiliating commercials.</p>\n<p>A San Francisco native, Emily attended Emerson College and has been a regular performer at the Upright Citizens Brigade Theatre in Los Angeles since 2006. In 2013, her one woman show, God Hates Figs, received glowing reviews from the LA Weekly and played to sold out audiences over a six month run. Her three-woman sketch group, Birds of Prey, won Best Sketch Group in Punchline Magazine and she has been named an “Up-and-Coming Comedienne You Should Be Laughing At” by TheFrisky.com, &quot;2013&#039;s Comics to Watch&quot; by SOmagazine.com, and a “Funny Female to Follow on Twitter” by the Huffington Post. She holds a PhD in parallel parking. </p>\n<p>Emily Maya Mills was once a spokesmodel for cherry tomatoes and has a cat-like dog who walks like a pony.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/emilymartinimills.jpg",
    PerformerId: "6659",
    SortOrder: 250,
    id: "6659",
    pageUrl: "6659-emily-maya-mills",
    events: [ "7638", "7658", "7741", "7804", "7815", "7952" ],
    mc_events: []
}, {
    Name: "Will Weldon",
    Bio: "<p>Will Weldon is a comedian who currently resides in Los Angeles, California, home to such luminaries as Jeremy Piven and that&#039;s pretty much it. He has performed on such well known Los Angeles comedy shows as The Meltdown with Jonah and Kumail, Put Your Hands Together, and the now defunct (what a great word) Holy Fuck! He has toured across the country, as well as appearing at both the Bridgetown and Montreal Comedy festivals, where he was invited to perform on a “Best of the Fest” showcase. He has been written about in the kinds of online comedy magazines only other comedians ever read, and was catfished by someone he met on Twitter. Try to keep that last thing a secret, though.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/squish_face.jpg",
    PerformerId: "5867",
    SortOrder: 250,
    id: "5867",
    pageUrl: "5867-will-weldon",
    events: [ "7624", "7678", "7703", "7919" ],
    mc_events: [ "7708" ]
}, {
    Name: "Anthony Lopez",
    Bio: "<p>Anthony Lopez has written for the Gotham Independent Film Awards, performed at Bumbershoot, Bridgetown, and is the co-host of the &quot;Free Chips and Salsa&quot; show at Action/Adventure Theater. Hailing from Portland Oregon, Anthony Lopez has been called &quot;One of the Comics to Watch&quot;  by the Portland Mercury, and he&#039;s had the privilege of featuring for such acts as Nick Kroll and The Whitest Kids You Know. Anthony has performed at UCB East, The Knitting Factory in NY, and the Tacoma Comedy Club and The Comedy Underground in Washington. He is regular host at Helium Comedy Club and other clubs in the Northwest. He spins long form stories with short one liners about everything from family to movies, comic books, drinking, and religion.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/anthony_headshot-2.jpg",
    PerformerId: "6271",
    SortOrder: 250,
    id: "6271",
    pageUrl: "6271-anthony-lopez",
    events: [ "7646", "7697", "7912", "7916" ],
    mc_events: [ "7658" ]
}, {
    Name: "Jade Catta-Preta",
    Bio: "<p>Jade Catta-Preta was one boney baby, born in Sao Paulo, Brazil, then later raised in Virginia to ensure a future in comedy. She travels the country featuring for Bill Burr, Bobby Lee and Kevin Nealon, and is a paid regular at The Comedy Store, The Improv and the Laugh Factory. She recently filmed an improvised FOX pilot directed by Dan Mazer and produced by Ron Howard as well as an eight episode arc for next season of Showtime&#039;s &quot;Californication.&quot; You can catch her along side Steve Rannazzisi in &quot;Daddy Knows Best&quot; and the upcoming season of Nuvo&#039;s &quot;Standup and Deliver.&quot; Like the 1995 David Caruso porno thriller of the same name, Jade takes herself very seriously.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/photo_9_0.jpg",
    PerformerId: "6674",
    SortOrder: 250,
    id: "6674",
    pageUrl: "6674-jade-catta-preta",
    events: [ "7645", "7665", "7913", "8633", "8635" ],
    mc_events: [ "7621" ]
}, {
    Name: "Jim Hickox",
    Bio: "<p>As one of the founding members of the revered Denver troupe The Grawlix, Jim was pivotal in the rise of the now revered Denver comedy scene.  No matter the show, Jim always leaves an impression with his quick wit and inventive approach to stand-up; audiences have never seen anything like it. The integration of his laptop into his act gives him unprecedented access to innovate and explore comedy, both the old tropes and the avant-garde. It&#039;s as funny as it is ingenious.  Jim is a headliner at Comedy Works in Denver and works around the country. In 2012 he performed for a month at the Edinburgh Fringe Festival. Most recently he performed at the inaugural High Plains Comedy Festival in Denver.</p>\n<p>He is unrepresented, and really needs something cool to happen soon.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/me_la_2013.jpg",
    PerformerId: "6275",
    SortOrder: 250,
    id: "6275",
    pageUrl: "6275-jim-hickox",
    events: [ "7665", "7708", "7737", "7748" ],
    mc_events: []
}, {
    Name: "Sean Donnelly",
    Bio: "<p>When he’s not catching a nap with his bulldog, Rickles, Sean can be \nfound headlining clubs all over New York, including Caroline&#039;s, Gotham, Stand Up NY, and The Stand. He has appeared on MTV’s World of Jenks and The Late Show with David Letterman. Sean was a Comic Stand-Off finalist at the 2010 Magners \nComedy Festival, performed at the Bridgetown Comedy Festival in\n 2011 and 2012, was a semi-finalist in the 2012 Boston Comedy\nFestival competition, and performed at Comedy Central’s 2013 South \nBeach Comedy Festival. Sean was a Montreal Just For Laughs “New Face” in 2013.  He co-hosts the podcast &quot;My Dumb Friends\n&quot; with fellow comedian Dan St. Germain and hosts a weekly show at Alligator Lounge in\n Brooklyn. Sean can be seen regularly on the TruTV series &quot;World’s Dumbest&quot; and on the first season of &quot;Adam Devine’s House Party&quot; on Comedy Central.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/sean_donnelly_2.jpg",
    PerformerId: "6004",
    SortOrder: 250,
    id: "6004",
    pageUrl: "6004-sean-donnelly",
    events: [ "7685", "7691", "7699", "7703" ],
    mc_events: []
}, {
    Name: "Amy Miller",
    Bio: "<p>Voted Portland&#039;s #1 Comedian in 2013 by a jury of her peers, aside from the cover of Willamette Week, Amy Miller has also been seen featuring for Maria Bamford, and at the following comedy places: San Francisco Sketchfest, Noise Pop Festival, SF Punchline, Cobb’s Comedy Club, Harvey’s Comedy Club Portland, Helium Comedy Club, The All Jane No Dick Festival, The Siren Nation Festival, Laugh Your Asheville Off, Mississippi Studios Portland, and as a regular headliner at the original Purple Onion. A lead producer/ host/ wrangler in Sylvan Productions, Amy produced a successful Oakland show series that featured Hannibal Buress, Moshe Kasher, Kyle Kinane, Rory Scovel and more.</p>\n<p>Amy Miller gets on stage to tell jokes, and you’re all like, well she doesn’t look funny at ALL. I hope she doesn’t blow this! Maybe I should go for a smoke break? 2 minutes in, your pants have been charmed off by her rosy cheeks and a delicate balance of self-deprecation and ego. 5 minutes in, you start to feel sad for her and sometimes feel the need to go “AWWW” out loud in the middle of her set or, occasionally “YOU’RE ADORABLE.” 10 minutes in you’re not sure if you want to have wild sex with her, or have her pretend to be your mom and tuck you into bed at night while lightly stroking your hair and singing You Are My Sunshine because she’s also an excellent singer. Any exposure above 15 minutes and your head is just a chaotic swirl of love feelings and a crippling fear of eventual heartbreak and rejection at the end of which you decide you should just be best friends. It’s fun!</p>\n<p>She has a podcast called &quot;Sorry About Your Dad.&quot; It’s about dad stuff.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/amymiller2_1.jpg",
    PerformerId: "5730",
    SortOrder: 250,
    id: "5730",
    pageUrl: "5730-amy-miller",
    events: [ "7625", "7689", "7805" ],
    mc_events: [ "7710" ]
}, {
    Name: "Kimberly Clark",
    Bio: "<p>Originally from Syracuse, New York, Kimberly was born the daughter of a preacher father and a prim and proper mother who stressed the importance of writing thank you notes. She was a reserved and well-behaved child in public, but at home was the official family jester. In college, Kimberly realized she had the ability to make people laugh without deliberately being funny. Peers and professors all became victims of this under-cover clown’s unexpected bites of tasteful humor-laced wit that was always well timed. After graduating from Arizona State University, Kimberly headed further West to Los Angeles, where she worked in TV production, most notably the last two seasons of the Drew Carey Show. She&#039;s performed stand up at clubs, on Lopez Tonight in April of 2011 and at The Maine Comedy Festival and The Boston Comedy Festival.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/kim_again_0.jpg",
    PerformerId: "6795",
    SortOrder: 250,
    id: "6795",
    pageUrl: "6795-kimberly-clark",
    events: [ "7701", "7815", "7916" ],
    mc_events: []
}, {
    Name: "Jesse Elias",
    Bio: "<p>Jesse Elias is a comedian forged in the infernal flames of San Francisco. He draws creative inspiration from music and literature of the 19th century and cartoons and candy of the 1990s. Over the course of 2012 and 2013 he has performed in festivals such as Bridgetown, Outside Lands, LA Riot, and SF Sketchfest. He has written for the new season of &quot;The Eric Andre Show,&quot; currently airing on Adult Swim. Jesse is also proud of his many gross victories as a Competitive Erotic Fan Fiction writer, available via podcast on nerdist.com.  Jesse learned everything he knows about being funny by studying the comedies of the ancient masters Plautus and Terrence.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/jesse-medium.jpg",
    PerformerId: "6536",
    SortOrder: 250,
    id: "6536",
    pageUrl: "6536-jesse-elias",
    events: [ "7623", "7646", "7651", "7919" ],
    mc_events: []
}, {
    Name: "John F. O&#039;Donnell",
    Bio: "<p>According to the Comedy Central Insider, &quot;John F. O&#039;Donnell is one of the more explosive comics in New York City.  On stage, he&#039;s like a tightly capped liter of soda filled with lit fireworks.&quot;  John has been featured in the New York Times and the LA Times, as well as being one of Comedy Central&#039;s Fresh Faces of Comedy.  He has performed at a number of comedy festivals around the country and beyond, including The Bridgetown Comedy Festival, The Edinburgh Fringe Festival, The New York Comedy Festival, The San Francisco Comedy Festival, and The New Orleans Hell Yes Festival.    He&#039;s been a favorite guest on the popular podcasts Keith and The Girl, You Made It Weird w/ Pete Holmes, You Had To Be There w/ Nikki &amp; Sara, and Skeptic Tank w/ Ari Shaffir.  John is also the co-creator and host of the bi-coastal hit show, 50 First Jokes.  He has almost 3 hours of stand up material available for digital download at livefromouterspace.com.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/jfod_press_pic.jpg",
    PerformerId: "6150",
    SortOrder: 250,
    id: "6150",
    pageUrl: "6150-john-f-o039donnell",
    events: [ "7680", "7698", "7711" ],
    mc_events: [ "7911" ]
}, {
    Name: "Matt Ingebretson",
    Bio: "<p>Matt Ingebretson is a writer and comedian. He performs all over LA and was featured on the standup compilation album, &quot;Holy Fuck.&quot; He has written for the Soup, the Onion, Funny or Die, and MTV. Also, he&#039;s worried his bio is too short so he tacked on this sentence to make it seem more substantial.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/matt_ingebretson_promo.jpg",
    PerformerId: "5894",
    SortOrder: 250,
    id: "5894",
    pageUrl: "5894-matt-ingebretson",
    events: [ "7912", "7919", "8633" ],
    mc_events: [ "7660" ]
}, {
    Name: "Janine Brito",
    Bio: "<p>JANINE BRITO is a stand up comic, and was a writer and on-air correspondent on the critically acclaimed FX series, Totally Biased with W. Kamau Bell, produced by Chris Rock. </p>\n<p>Janine started doing standup comedy in St. Louis and has performed at clubs and theaters throughout the US and Hong Kong. She is the winner of the 2009 SF Women&#039;s Comedy Competition, and recipient of Rooftop Comedy&#039;s 2010 Silver Nail Award. Praised by 7x7 Magazine as &quot;one of SF&#039;s more daring voices&quot; and one of &quot;the 7 funniest people in town,&quot; she was named the 2011 “Best Comedian with a Message” by the East Bay Express. Her recent festival appearances include Sketchfest, the Bridgetown Comedy Festival and the Glasgow International Comedy Festival.</p>\n<p>W. Kamau Bell calls her “a sarcastic, snarky smart bomb of comedy funk straight from the 80&#039;s,” and the SF Weekly says she’s “a mean lesbian,” but she’s pretty sure that they mean it in a good way.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/janinebrito_jenmaler012_small.jpg",
    PerformerId: "6696",
    SortOrder: 250,
    id: "6696",
    pageUrl: "6696-janine-brito",
    events: [ "7623", "7658", "7678", "7809" ],
    mc_events: []
}, {
    Name: "Megan Koester",
    Bio: '<p>Megan Koester is a writer and comedian (obviously) who resides in Los Angeles (somewhat less obviously). A columnist for VICE, she co-produces Entitlement, a monthly comedy show with other VICE scribes which has had the pleasure to host such notables as Neil Hamburger, Marc Maron, Kyle Kinane, Maria Bamford, Kurt Braunohler and Andy Kindler (who she collaborated with on her &quot;How Not to Be a Stand-Up Comedian&quot; article for VICE). She&#039;s performed at SF Sketchfest, the Hollywood Improv, the SF Punchline, Tomorrow!, The Grawlix, Chicago Underground Comedy, and countless other shows across this great land we call America. She has her very own track on the Holy F**k Live Comedy album, which you can listen to on Spotify if you&#039;re so inclined. She&#039;ll GLADLY do any podcast she&#039;s asked to, up to and including Terrified, Lady to Lady and The Fogelnest Files. She USED to be a staple of those Huffington Post &quot;Women You Should Follow on Twitter&quot; lists until she started making a big stink about them being patronizing; she&#039;s also one third of the all-female (sorry) sketch group Blessed. A Witstream contributor, she&#039;s been featured on Splitsider and is finding it very hard to continue writing this bio in the third person. Most importantly, she has the distinction of being the first person to eat a 6&#039;&#039; flatbread Veggie Delight Subway sandwich on stage, a fact she&#039;ll take to her cold, lonely grave. You can follow her on Twitter at <a href="http://www.twitter.com/bornferal">http://www.twitter.com/bornferal</a>.</p>\n',
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/koester-146-8.jpg",
    PerformerId: "6402",
    SortOrder: 250,
    id: "6402",
    pageUrl: "6402-megan-koester",
    events: [ "7678", "7753", "7811", "7815" ],
    mc_events: [ "7918" ]
}, {
    Name: "David Cope",
    Bio: "<p>David began performing stand up open mic in Portland, Oregon. It was way more fun than his call center job so he stuck with it. After living and performing in Portland and Seattle he moved to New York City. During his time there he was a semi finalist on Last Comic Standing 2010, nabbed the motion capture role of Jay Norris in Grand Theft Auto V, and co-produced The Hot Soup Comedy Show at the Upright Citizens Brigade Theater. His better half moved to L.A., so he did too and now engaged like proper adults they live together in Hollywood where he continues to write and perform comedy. David is a regular at The Portland Bridgetown Comedy Festival and The New York Underground Comedy Festival. He’s the co-creator and producer of No Pun Intendo, Nerdmelt Theater’s first in-house comedy video game competition and produces The Call Of The Blade, a gaming review web series featuring L.A. comedians.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/0711.jpg",
    PerformerId: "6151",
    SortOrder: 250,
    id: "6151",
    pageUrl: "6151-david-cope",
    events: [ "7672", "7750", "7967" ],
    mc_events: []
}, {
    Name: "Sean Jordan",
    Bio: "<p>Sean Jordan is a stand up comedian originally from Sioux Falls SD.  Sean started into comedy after seeing only one stand up show.  Getting his start in Sioux Falls after winning a local comedy contest, Sean became one of the house emcees at the comedy club in town.  This gave Sean the chance to perform 3-4 times a week for years on end.  That opportunity allowed Sean to grow as a comedian at a very rapid rate while at the same time giving him all the stage time needed to develop a healthy confidence while telling jokes.  </p>\n<p>After going as far as he could in Sioux Falls, Sean decided to move to Portland OR.  Quickly after moving he hopped right into the local scene advancing to the finals of the 2011 and 2012 Portland comedy competitions.  Sean was also voted one of Funny or Die and Splashlife magazines “30 Under 30” comedians to watch in 2011.  You have heard him as a repeat guest on Doug Bensons podcast “Doug Loves Movies” as well as “The Benson Interruption.”   You also may have seen him on Rooftop Comedy as a featured performer.  </p>\n<p>He has participated in the Bridgetown Comedy Festival the last 4 years running as well as the Bumbershoot Comedy and Arts Festival for the last 2.  The easy and comfortable style of Sean is sure to put any audience member in the right frame of mind to enjoy a stand up show and also provide them with a memorable experience to keep them coming back.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/flightclub.jpg",
    PerformerId: "6408",
    SortOrder: 250,
    id: "6408",
    pageUrl: "6408-sean-jordan",
    events: [ "7621", "7650", "7752" ],
    mc_events: [ "7667" ]
}, {
    Name: "Lance Paullin",
    Bio: "<p>Lance Paullin is a loveable white guy with pretty, black lady hair living in the slums of Los Angeles where he tells PRETTY DECENT jokes and acts for television/cinema films. He&#039;s never been arrested; therefore, he has no prior arrests. He&#039;s a good guy. He wrote this specifically for you.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/bridgetown.jpg",
    PerformerId: "5774",
    SortOrder: 250,
    id: "5774",
    pageUrl: "5774-lance-paullin",
    events: [ "7652", "7653", "7692", "7708" ],
    mc_events: []
}, {
    Name: "James Ball",
    Bio: "<p>Dry, dark, and delightful, this Canadian comic has performed his laidback brand of one-liner standup on stages across Canada and in the UK. </p>\n<p>Watching him, you may be reminded of The Far Side, smooth jazz, and a book of insane haiku. </p>\n<p>Credits include Just For Laughs, the Halifax Comedy Festival, the Manchester Comedy Festival, and the Blue Bridge Comedy Festival. His half-hour Comedy Now TV special continues to air across Canada a little too frequently for his comfort. You can also hear him on XM Satellite radio from time to time. </p>\n<p>James was born and raised in Victoria BC, made his standup debut in Tokyo, and did his first paid gig in Alberta. He lives in Victoria today where he works in media and performs &amp; produces comedy shows up and down Vancouver Island. This is his first appearance in the States. </p>\n<p>Tall yet approachable, James is thrilled to be at Bridgetown. Ask him about motorcycles, the Toronto Raptors, his favorite podcasts, and Victoria&#039;s best microbrewed beers. He knows things.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/james_ball_-_headshot_.jpg",
    PerformerId: "6305",
    SortOrder: 250,
    id: "6305",
    pageUrl: "6305-james-ball",
    events: [ "7641", "7656", "7730", "7743" ],
    mc_events: []
}, {
    Name: "Peggy O&#039;Leary",
    Bio: "<p>Peggy O&#039;Leary is a stand up comedian based out of New York, but comes from the burbs of Philly, and thats very important for you to know.  Peggy tells jokes and stories about her fat girl past, her &quot;My Girl&quot; upbringing (minus the bee stings), and being completely weirded out about men and sex.  She performed at The Women in Comedy Festival in Boston and The Jersey City Comedy Festival, both in 2013. </p>\n<p>Her sketch group BLEAK! Comedy has performed all over the east coast, was featured at the Austin Sketch Festival, The National Comedy College Festival and performed BLEAK! Comedy: STOMACHTOWN at the UCB theatre in NYC.  Her stand up can be seen all over NYC at The Creek and The Cave, UCBTheatre, EastVille Comedy Club, The Village Lantern, and many bars and apartments all over the outer boroughs.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/peggy-oleary-6999-13-2.jpg",
    PerformerId: "6058",
    SortOrder: 250,
    id: "6058",
    pageUrl: "6058-peggy-o039leary",
    events: [ "7654", "7663", "7680" ],
    mc_events: [ "7699" ]
}, {
    Name: "Randy Mendez",
    Bio: "<p>At the ripe young age of thirty-something, Portland comic Randy Mendez thought it&#039;d be the perfect time to go to college and to start a family. At the same time.</p>\n<p>Some years later now he&#039;s about to graduate and he&#039;s almost fully taught his three-year-old daughter to yell &quot;Fart!&quot; in public spaces. After taking third in the search for Portland&#039;s Funnies Person, the Portland Mercury described Randy as having &quot;a disarming, ebullient stage presence that calls to mind listening to a slightly manic, very inappropriate friend share stories about his fucked-up day.&quot; Randy is way too happy about the wrong parts of that statement.</p>\n<p>Randy has previously been seen at the Seattle International Comedy Competition, Helium Comedy Club, Funny Over Everything, They Mystery Box Show, No Pun Intendo, and many other shows that didn&#039;t pay well, but promised would look great in a bio.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/headshotlowres.jpg",
    PerformerId: "6409",
    SortOrder: 250,
    id: "6409",
    pageUrl: "6409-randy-mendez",
    events: [ "7680", "7689", "7751" ],
    mc_events: [ "7913" ]
}, {
    Name: "Casey Ley",
    Bio: "<p>Casey Ley’s comedy is silly. And smart. And dirty. And dark. And handsome. It’s a lot like him actually.  So it is also self-centered and flakey and relatively promiscuous.  He is the creator and host of the popular San Francisco comedy game show &quot;Tonic Trivia&quot; and stand-up show &quot;Some People Like Us.&quot;  He and his shows have appeared in comedy festivals like SF Sketchfest, Moontower Festival in Austin, TX, on the radio on the relatively popular NPR station, and he has shared the stage with comics you know like Hannibal Buress, Doug Benson, Laura Kightlinger and some other people you&#039;ve heard of if you like comedy.  The readers of SF Weekly voted him best comic in San Francisco in 2012 (which had nothing to do with his homosexuality), and in 2013 he was runner-up in The Advocate Magazine&#039;s Next Great Queer Comedy competition (which was wholly the result of his homosexuality).  Apparently he just wasn&#039;t quite gay enough.  Last year, at least.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/caseyley.jpg",
    PerformerId: "6157",
    SortOrder: 250,
    id: "6157",
    pageUrl: "6157-casey-ley",
    events: [ "7678", "7698", "7740", "7750", "8631" ],
    mc_events: [ "7632" ]
}, {
    Name: "Tony Sam",
    Bio: "<p>Winner of the 2007 Chicago Comedy Award for Most Innovative Comedian, Sam has been heralded by the press for his ability to make the quirky &quot;hysterical&quot;, and was described as a &quot;stalwart of the emerging Chicago underground comedy scene,&quot; by UR Chicago. Earning his chops at the Chicago Second City Training Center, and IO Chicago (formerly ImprovOlympic), Sam has taken his life experiences and molded them into charming, hilarious, and memorable characters that will have you repeating his lines well after the show. In addition to appearing on the G4 Network&#039;s &quot;Attack of the Show,&quot; he is currently a voice actor, commercial actor, and writer for &quot;Ridiculousness&quot; on MTV.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/tonyarmyjackettheatrical.jpg",
    PerformerId: "6130",
    SortOrder: 300,
    id: "6130",
    pageUrl: "6130-tony-sam",
    events: [ "7711", "7741", "7751" ],
    mc_events: [ "7804" ]
}, {
    Name: "Adam Pasi",
    Bio: "<p>Adam Pasi is a 33 year old comedian, who attempted and failed to grow up on both coasts and in 3 different countries, on account of his father being in the army.  To cope with being the chubby new kid almost every 3 years, he learned to depend on being funny when it came to making new friends.  While this didn&#039;t have him hoisted upon the shoulders of his classmates, he was able to develop some very meaningful friendships along the way.  </p>\n<p>Fast forward to adulthood (at least according to age) Adam has lived in Portland, Oregon for over a decade, and his sense of humor has led to him being the guy among his friends who tells everyone the usually dumb (yet funny) story of all the foolishness that happened the night before.  This led to him wanting to get on stage and tell anyone he could get to listen, all of the dumb (yet funny) stories about all of the foolishness that&#039;s ever happened to him ever, as well as a few of his observations on life, sexuality, Ke$ha, and pretty much whatever he finds amusing.  All from the perspective of a not quite grown up who claims that &quot;While I haven&#039;t matured to the point where I&#039;m behaving the way a man my age is supposed to, I have managed to build a life that&#039;s capable of withstanding my bullshit&quot; It&#039;s not like he&#039;s lived this outrageously unique adventure that you couldn&#039;t fathom without him explaining it to you. But he has enjoyed the usually dumb (yet funny) life that he&#039;s lived thus far, and he looks forward to enjoying sharing it with people.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/adamshot.jpg",
    PerformerId: "6702",
    SortOrder: 300,
    id: "6702",
    pageUrl: "6702-adam-pasi",
    events: [ "7623", "7656", "7695", "7704" ],
    mc_events: []
}, {
    Name: "Gabe Dinger",
    Bio: "<p>Gabe Dinger is a stand-up comedian and improviser from Portland Oregon. The winner of 2006&#039;s CBS Radio Laff Off, and the first runner up in Helium Comedy Club&#039;s 2013 &quot;Portland&#039;s Funniest Person&quot; contest, Gabe has been described by The Portland Mercury &quot;one of Portland&#039;s most reliable comedians.&quot;</p>\n<p>While Gabe was the first comedian in Oregon to perform at the Oregon State Maximum Security Prison, he has also preformed at the Bridgetown Comedy Festival and SF Sketchfest. Along with stand-up and sketch writing, he is also an accomplished improviser. He is an instructor and regular performer at Curious Comedy Theater. He is a co-founder of the improv troupe Whiskey Tango, who have been featured at the Los Angeles Improv Festival,  The Vancouver International Improv Festival, and SF Skechfest.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/gabedinger.jpg",
    PerformerId: "5783",
    SortOrder: 300,
    id: "5783",
    pageUrl: "5783-gabe-dinger",
    events: [ "7711", "7752", "7951" ],
    mc_events: []
}, {
    Name: "Doug Smith",
    Bio: "<p>Doug Smith was featured as a New Face at the prestigious Montreal Just for Laughs Comedy Festival in 2013 after only four years as a stand-up comic. Since then he has appeared at the Oddball Comedy &amp; Curiosity Festival as well as AXS TV’s &quot;Gotham Comedy Live.&quot;  A regular at NYC clubs and alternative rooms, Doug continues to hone his talent and build his fan base. </p>\n<p>With a unique upbringing as the much younger child in a family of Jehovah’s Witnesses, Doug has plenty to draw from and is quickly becoming one of the sharpest writers in NYC. He has extensive improv training from the Upright Citizens Brigade Theater, and currently co-produces &quot;See You In Hell!,&quot; an award winning stand-up/variety show at The Creek and The Cave in Long Island City.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/dougsmith.jpg",
    PerformerId: "6413",
    SortOrder: 300,
    id: "6413",
    pageUrl: "6413-doug-smith",
    events: [ "7622", "7746", "7751", "7916" ],
    mc_events: []
}, {
    Name: "Katherine Williams",
    Bio: "<p>Katherine Williams is a NYC – based stand-up comic, actor and playwright. She graduated from James Madison University in her native Virginia and attended the Atlantic conservatory (founded by David Mamet and William H. Macy) in New York. </p>\n<p>As a stand-up comic, Katherine is a chronic oversharer, from her awkward attempts at intimacy to quieting the paranoid voices in her head. The youngest child from a devout Irish Catholic family, she experiences soul-crushing guilt and constant shame on a near-daily basis.</p>\n<p>Six of her plays have been produced in Manhattan including My Dead Mother is Funnier Than You (Plaidbird Productions) and The Shih Tzu Doesn’t Like Lesbians (On the Leesh Productions).  Her comedic solo show, CALL ME, was accepted into three New York theater festivals in 2010 - 2011, including the Midtown International Theatre Festival. Katherine has performed in the New York Underground Comedy Festival (2009, 2010) and the New York International Fringe Festival (2009, in Meryl Cohn’s sold-out hit, And Sophie Comes Too). Her work has been reviewed by Show Business Weekly and nytheatre.com. She was recently interviewed for Morgan Spurlock’s latest venture, Failure Club, an online series for Yahoo.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/headshot_katherine_williams2_0.jpg",
    PerformerId: "6163",
    SortOrder: 300,
    id: "6163",
    pageUrl: "6163-katherine-williams",
    events: [ "7691", "7698", "7743", "7809" ],
    mc_events: []
}, {
    Name: "Philip Schallberger",
    Bio: "<p>Philip Schallberger is Portland’s premier (only?) solo sketch-stand-up-whatever performer. He is a recurring guest in the Bridgetown Comedy Festival, and has recently been a part of the SLC Comedy Carnivale, Seattle Sketchfest, and San Francisco Sketchfest. Phil has been doing live comedy performance since 2007, and has only given up a bunch of times since then. The local papers seem to like what Phil does, and chances are you will as well. So give it a shot. Try Phil today.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/philip-schallberger.jpg",
    PerformerId: "5951",
    SortOrder: 300,
    id: "5951",
    pageUrl: "5951-philip-schallberger",
    events: [ "7621", "7687", "7694", "7749" ],
    mc_events: []
}, {
    Name: "Tim Hammer",
    Bio: "<p>Young, fresh, full of life and Totino&#039;s pizza, Tim Hammer&#039;s style revolves around one-liners. Audience members often share his one-liners with their friends, and possibly enemies.</p>\n<p>In 2013, Tim performed at Bridgetown Comedy Festival, was a finalist in the Portland&#039;s Funniest Person Contest, and then a finalist in the Big Sky International Comedy Competition. He has performed at venues such as the Hollywood Improv, Helium Comedy Club, Seattle Comedy Underground, and Applebee&#039;s. </p>\n<p>In 2014, he performed at a Denny&#039;s.</p>\n<p>He does not lip-sync any of his material.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/tumblr_mz0uz62nnx1s46y2co2_1280.jpg",
    PerformerId: "6727",
    SortOrder: 300,
    id: "6727",
    pageUrl: "6727-tim-hammer",
    events: [ "7637", "7660", "7687" ],
    mc_events: [ "7751" ]
}, {
    Name: "Gabriel Rutledge",
    Bio: "<p>Since abandoning his successful pizza delivery career in 2000, Gabriel&#039;s talent, hard work, and lack of a fall back plan have made him into one of North America&#039;s finest touring comics.</p>\n<p>A past winner of the prestigious Seattle International Comedy Competition, Gabriel has made television appearances on Comedy Central&#039;s Live at Gotham, the nationally syndicated Comedy.TV, and Nickelodeon&#039;s Nickmom Night Out.</p>\n<p>He is also a frequent guest on the Bob and Tom radio show, heard in over 150 cities.</p>\n<p>Gabriel has performed at the HBO/TBS Comedy Festival in Las Vegas, the Laughing Skull Comedy Festival in Atlanta, and The Great American Comedy Festival held in Johnny Carson&#039;s home town of Norfolk Nebraska.</p>\n<p>He has made at least 4 people pee their pants.</p>\n<p>Gabriel&#039;s has released two albums; &quot;Sometimes Laughter Hurts&quot; and &quot;Breeder&quot; that can be heard on Sirius Satellite Radio, 24/7 Comedy Radio, and wherever you want if you buy one. Rutledge makes his home in one of the great entertainment capitals of the world; Olympia Washington.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/plaid_shirt_small.jpg",
    PerformerId: "6174",
    SortOrder: 300,
    id: "6174",
    pageUrl: "6174-gabriel-rutledge",
    events: [ "7680", "7704", "7738", "7752" ],
    mc_events: []
}, {
    Name: "David Zoe Leon",
    Bio: "<p>David Leon is a Chicago native who began his comedy career in Madison, WI. David has shared the stage with many talented performers such as Emo Phillips, TJ Miller, James Adomian and Joey Diaz. David Leon&#039;s style of comedy, best described by the Onion A.V. club, &quot;plays on the yearning sentimentalist and inner-creep&quot; with a &quot;kid-on-sugar-high stage presence.&quot; With a demented persona and unpredictable topics, David Leon puts on a show that demands intensity and imagination from his audience and leaves a smile in their heart.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/davidleon.jpg",
    PerformerId: "6629",
    SortOrder: 300,
    id: "6629",
    pageUrl: "6629-david-zoe-leon",
    events: [ "7693", "7704", "7737", "7806" ],
    mc_events: [ "7912" ]
}, {
    Name: "Joshua Murphy",
    Bio: "<p>Joshua Murphy is standup comedian and sporadic sketch writer based out of Chicago, Illinois. Though a young comic on the scene, he has quickly moved up in the comedy world with his personal storytelling and socio-political comedy. He was the winner of the 2010 Bloomington Comedy Festival and a performer at the inaugural Limestone Comedy Festival. He was also a writer for the very popular “Fortnightly Show.” And, based on the writing of this bio, it is unnerving how comfortable he is writing in the third person.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/joshuamurphy-web-010.jpg",
    PerformerId: "5962",
    SortOrder: 300,
    id: "5962",
    pageUrl: "5962-joshua-murphy",
    events: [ "7679", "7690", "7694" ],
    mc_events: [ "7753" ]
}, {
    Name: "Sean Green",
    Bio: "<p>A Bethlehem, PA native Sean Green has brought his East Coast sensibilities to the Los Angeles comedy scene. Known for his brazenly honest story telling, Sean isn’t afraid to share the hilarious episodes that perpetuate his personal life. An open book policy also applies to Sean’s educated acerbic takes on current events in the world. Sean is a founding member of Los Angeles’ hottest underground comedy club &quot;The Comedy Garage&quot; and can be found performing at the Improv Olympic, The Improv, UCB Theater and 3 Clubs. Sean was one of the stars in ‘The Comedy Garage‘ documentary now on Hulu. Besides his work as a standup and MC, Sean hosts a weekly podcast called &quot;The Green Room&quot; for the syndicated 24/7 Comedy.com network. Sean’s other past projects include programs on Live Video.com, National Lampoon Radio, LA Talk Radio.com, Comedy Nation, Spike TV, Set List at the Comedy Central Stages and at the Montreal Comedy Festival. Sean also recently acted in Def Jam recording artist Wax’s music video &quot;Dispensary Girl.&quot; Sean has combined his love of sports and comedy in his NFL picks column for MTV&#039;s &quot;Guy Code&quot; and by co-hosting the Sports Gambling Podcast. </p>\n<p>Check out Sean’s debut stand up comedy CD,  &quot;Sean Green The Whiskey Dick.&quot; Sean&#039;s latest appearance can be seen on the Hulu Original featuring Jay Mohr titled &quot;Money Where Your Mouth Is.&quot;</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/headshot_new.jpg",
    PerformerId: "6352",
    SortOrder: 300,
    id: "6352",
    pageUrl: "6352-sean-green",
    events: [ "7665", "7730", "7738", "8635" ],
    mc_events: []
}, {
    Name: "Will Miles",
    Bio: "<p>Will Miles is a New York stand up comedian.  After focusing on improvisation for two years at Chicago&#039;s ImprovOlympic, he began stand up comedy in 2007, and has been steadily working since he began.  After performing in the local stand up scene for a couple of years in Chicago, his first work came in the opportunity to feature for Hannibal Buress on his &quot;My Name Is Hannibal&quot; Tour. He is a regular at clubs, working the Midwest and East Coast. Aside from his stand up, Miles won runner up in Break.com&#039;s national &quot;Better Way Video&quot; contest and is a regular contributor on Chicago Public Radio&#039;s &quot;The Morning Amp&quot; radio show hosted by Brian Babylon and Molly Adams.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/image_6.jpg",
    PerformerId: "6474",
    SortOrder: 300,
    id: "6474",
    pageUrl: "6474-will-miles",
    events: [ "7641", "7685", "7701" ],
    mc_events: [ "7652" ]
}, {
    Name: "Rob Gleeson",
    Bio: "<p>Rob is an LA based stand up comedian. In addition to doing sets around Los Angeles, he regularly tours the college market where occasionally during his shows two kids seated in the back will start making out. They either find Rob&#039;s act to be incredibly erotic or insufferably boring. His acting work includes national commercials and roles on shows like &quot;How I Met Your Mother&quot; and &quot;Ben &amp; Kate.&quot; Currently, he recurs on the third season of Showtime&#039;s &quot;House of Lies.&quot;</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/gleeson.jpg",
    PerformerId: "6189",
    SortOrder: 300,
    id: "6189",
    pageUrl: "6189-rob-gleeson",
    events: [ "7646", "7697", "7750", "8631" ],
    mc_events: []
}, {
    Name: "Nick Cobb",
    Bio: "<p>Hailing from Memphis, TN, Nick Cobb attended Indiana University where he majored in Psychology and learned to obsess over meaningless nonsense. This led him to work in his first comedy club, aptly named “The Looney Bin.”  It was at a tiny Beale Street bar where Nick won a stand-up competition, was bitten by the comedy bug and moved to New York to pursue The Dream.  While in New York, Nick was seen on Comedy Central’s &quot;Live at Gotham,&quot; VH1’s &quot;Morning Buzz,&quot; AMC’s &quot;Date Night&quot; as well as on NBC’s “Last Comic Standing” where he not only earned a spot in the semi-finals, but was also featured in a montage of comics recognized for having highly original material.  Less than a year ago, Nick took his talents to Los Angeles.  Since moving out West he won the March Madness Competition at the Hollywood Improv, appeared on Comedy Central’s &quot;Inside Amy Schumer,&quot; and had his late night debut on The Late Late Show with Craig Ferguson.  He also recently performed on AXS’s Gotham Comedy Live.  He also played the lead in the espn.com comedic web series “Team Players,” and has been seen in many commercials including Pepsi Max, Asthma.com, Joe’s Crab Shack, Carmax and starred in an e*Trade spot during halftime of the Super Bowl!  When not performing standup, Nick is brooding over that one guy in the crowd who was texting during his act.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/webf_0321.jpg",
    PerformerId: "5973",
    SortOrder: 300,
    id: "5973",
    pageUrl: "5973-nick-cobb",
    events: [ "7911", "7916" ],
    mc_events: [ "7689" ]
}, {
    Name: "Steve Gillespie",
    Bio: "<p>Hailing from Minneapolis, where after receiving a degree in something or other, Steve became really bored and started telling jokes into a microphone. He first began honing his craft at the Acme Comedy Club, and has quickly emerged as a fast-rising talent in one of the strongest and most competitive comedy scenes in the country. Metromix Magazine named Steve one of the top comedians in the Twin Cities.</p>\n<p>Steve has been on the road non-stop for the past five years, appearing in some of the best comedy clubs in the country, including opening appearances for Kyle Kinane, Rory Scovel, Dave Attell, Tom Green, Harland Williams, Jim Breuer, Gilbert Gottfried, and Doug Benson.</p>\n<p>In 2010, he performed at the Laugh Your Asheville Off Comedy Festival, and in 2011 he appeared in the prestigious Boston Comedy Festival. In 2012, Steve was named a finalist in CMT&#039;s Next Big Comic Award. His first comedy album, &quot;Stever Fever,&quot; produced by Rooftop Records, came out in 2013, and was named one of the top ten albums of 2013 by Comedy-Reviews.com . This past March he performed at Gilda&#039;s Laughfest, where he was named runner-up for the Best of the Midwest.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/steve_6.jpg",
    PerformerId: "6354",
    SortOrder: 300,
    id: "6354",
    pageUrl: "6354-steve-gillespie",
    events: [ "7665", "7695", "7748" ],
    mc_events: [ "7711" ]
}, {
    Name: "Johan Miranda",
    Bio: "<p>Johan Miranda is a Peruvian American comedian that has established himself in the Bay Area comedy scene. San Francisco Magazine exemplified him as a comedian you should know you about He performs at all the major comedy clubs in Northern California, including San Francisco Punchline, Sacramento Punchline, Cobbs Comedy Club, Rooster T Feathers, &amp; San Jose Improv, and has been featured in SF Sketchfest &amp; Santa Cruz Fringe Festival. He currently produces &amp; hosts the popular bimonthly Laugh Function, Berkeley’s longest running comedy showcase. He recently recorded a mini comedy DVD taping entitled “Ready to Bomb”, which award winning Bay Area comedy blog Courting Comedy called “a capsule of undeniable promise”</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/johanmirandaheadshot_0.jpg",
    PerformerId: "5976",
    SortOrder: 300,
    id: "5976",
    pageUrl: "5976-johan-miranda",
    events: [ "7621", "7693", "7711" ],
    mc_events: [ "7691" ]
}, {
    Name: "Rojo Perez",
    Bio: "<p>Rojo Perez is a New York based comedian. He grew up in Puerto Rico, which helped him form the humor you see in him today. After moving to Florida for college, he began doing stand up at the age of 20 in local clubs and small café’s in Central Florida. Since moving to the Northeast, Rojo has become a regular in the NY comedy scene and can usually be seen performing at The Creek and The Cave. He has also performed at Caroline’s, The Comedy Studio, The Improv, the UCB theaters and many other clubs around the US. He has appeared on &quot;Keith and The Girl&quot; and has been featured at the New York Comedy Festival and at the inaugural LA Riot Comedy Festival. His future plans include one day earning enough money that relatives will ask to borrow and continuing to spread laughter regardless of race, religion and gender.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/rojo-perez-111.jpg",
    PerformerId: "5845",
    SortOrder: 300,
    id: "5845",
    pageUrl: "5845-rojo-perez",
    events: [ "7679", "7753", "7912" ],
    mc_events: [ "7749" ]
}, {
    Name: "Caroline Bassett",
    Bio: "<p>Caroline Bassett is a young comic from Austin, Texas who intertwines bizarre storytelling with sardonic observational jokes.  She was a finalist in the 2013 Funniest Person in Austin Contest.  As a downstairs neighbor once asked her, &quot;Do you dance in the shower?&quot;</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/1476023_10202546314805722_1681958827_n_0.jpg",
    PerformerId: "6647",
    SortOrder: 300,
    id: "6647",
    pageUrl: "6647-caroline-bassett",
    events: [ "7692", "7730", "8631" ],
    mc_events: [ "7746" ]
}, {
    Name: "Ivan Hernandez",
    Bio: "<p>Ivan Hernandez is a comic living in San Francisco. He likes food and some social issues and comic books. He has performed at the SF Sketchfest, Bridgetown Comedy Festival, Litquake, Supercon comic convention, International Cannabis and Hemp Expo, Sacramento Comedy Festival, SF Comedy and Burrito Festival, and plenty of other places. Boars, Gore, and Swords, the show he co-hosts with fellow comedian Red Scott, is a member of the Boing Boing podcast network. He produces Give Me Fiction, a monthly prose storytelling show in the basement of Lost Weekend Video. SF Weekly has described him as “masterfully sarcastic.”</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/1097002_10100994426128925_500000302_o.jpg",
    PerformerId: "6363",
    SortOrder: 300,
    id: "6363",
    pageUrl: "6363-ivan-hernandez",
    events: [ "7622", "7752", "7806" ],
    mc_events: []
}, {
    Name: "T.J. Chambers",
    Bio: "<p>Distributor of high-fives, repository of whiskey, afraid of phones, spiders, and phone-using spiders.  T.J. Chambers is a Los Angeles-based writer and comedian whose work has appeared on NBC, MTV, Lifetime, and other television channels (but let&#039;s be honest we all mostly flip through those three).  As a live performer he has toured the country and graced (seriously, his movements are lithe as hell) every major and minor stage around LA.  Listeners have enjoyed a string of scintillating appearances on podcasts such as Put Your Hands Together, PodCrash, Probably Science, and maybe some others provided they start with &quot;P&quot;, because after all it&#039;s a fun letter with both straight and bendy parts.  Presumably he is also very happy to be making a return to the Bridgetown Comedy Festival, but to be honest we forgot to ask him.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/me_cropped_5.jpg",
    PerformerId: "5728",
    SortOrder: 300,
    id: "5728",
    pageUrl: "5728-tj-chambers",
    events: [ "7687", "7745", "7748", "7915" ],
    mc_events: []
}, {
    Name: "Brian Mitchell ",
    Bio: "<p>Brian Mitchell is a Jehovah’s Witness turned comedian that loves rejection and knocking on doors. He’s had the privilege of opening for TJ Miller, Louie Anderson and Josh Blue just to name a few. Brian was a finalist in the 2011 Sirius XM Opie &amp; Anthony Car Crash Comedy contest , then in 2012 , he made the finals at the Mangers Comedy Festival, and in 2013 he received second place in Yobi.tv’s funniest sketch contest for “Token Black Guy Infomercial”.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/551205_10100368796575892_874635003_n.jpeg",
    PerformerId: "6410",
    SortOrder: 300,
    id: "6410",
    pageUrl: "6410-brian-mitchell-",
    events: [ "7656", "7693", "7706", "7733" ],
    mc_events: [ "7663" ]
}, {
    Name: "Brent Flyberg",
    Bio: "<p>Brent Flyberg wanted his bio to just to be a picture of a wallaroo eating a chocolate chip pancake off a chandelier, but he only gets what he wants occasionally, which makes him an okay guy to be around. He has candy in his pockets almost all the time, and if you ask nicely, he&#039;ll share. His comedy will make you feel good that you&#039;re not him. He has performed at Bumbershoot, Summer Meltdown, and the Melbourne International Comedy Festival. He hates wearing pants.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/btown2.jpg",
    PerformerId: "6534",
    SortOrder: 300,
    id: "6534",
    pageUrl: "6534-brent-flyberg",
    events: [ "7641", "7693", "7704" ],
    mc_events: [ "7738" ]
}, {
    Name: "Rebecca O&#039;Neal",
    Bio: "<p>Rebecca O&#039;Neal is a Chicago based stand up comedian and writer/editor whose work can be read on/in Vanity Fair Magazine, Gawker.tv, Splitsider.com, The Rumpus, Death and Taxes Magazine, and more.  </p>\n<p>Since she began stand up comedy in early 2012, Rebecca has performed at Portland&#039;s 2013 Bridgetown Comedy Festival, Chicago Underground Comedy, Chicago Women&#039;s Funny Festival 2012 and headlined 2013, Queer Comedy at Zanies, The Comedy Shrine, The Laugh Factory, Zanies Rosemont, The Wasted Plains Rock and Roll Revival, The Ohio Lesbian Festival, Entertaining Julia, NPR&#039;s Brian Babylon&#039;s Bronzeville Comedy Show, Jokes and Notes, The Lincoln Lodge, Navy Pier&#039;s Beer Garden, headlining NERDGASM at The Drop Comedy Club in Southbend, Indiana, and many other showcases in and around Chicago. Rebecca is also one of the newest cast members of the 14th season of Chicago&#039;s historic Lincoln Lodge and a regular guest on Vocalo.org&#039;s morning amp and has appeared as a guest comedy commentator or WBEZ&#039;s Morning Shift with Tony Sarabia.</p>\n<p>She performed in a video for Just For Laughs Chicago 2012 and currently produces a monthly free, BYOB comedy showcase in Chicago called Congrats on Your Success (for which she does the promotion and public relations) that has been featured in/on WBEZ/NPR, The Huffington Post, Vocalo.org, The Chicago Reader, The Red Eye&#039;s Eat Drink Do column, Time Out Chicago, Gapers Block, Chicagoist, LoganSquarist, Chicago Now, ChooseChicago.com, AfterEllen.com and many local blogs and websites. She was also listed as one of the Huffington Post&#039;s 18 Funny Women To Follow on Twitter alongside Mindy Kaling - and in a second feature for Huffington Post Chicago.</p>\n<p>Rebecca O&#039;Neal is a hilariously cerebral and confessional young comic whose urban upbringing on Chicago&#039;s southside coupled with her expansive vocabulary and tendency toward introspection endear her to audiences of all backgrounds. By humorously mining her experiences, she makes the esoteric universal.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/fez_shot.jpg",
    PerformerId: "5876",
    SortOrder: 300,
    id: "5876",
    pageUrl: "5876-rebecca-o039neal",
    events: [ "7688", "7703", "7733", "8631" ],
    mc_events: []
}, {
    Name: "Anna Seregina",
    Bio: "<p>Anna Seregina is a San Francisco-based stand-up comic and performer, described as having the &quot;worst aura.&quot; She was named a &quot;Comic to Watch in 2013&quot; by the SF Weekly, as well an &quot;Emerging Bay Area Comic in 2013&quot; by the Bold Italic. She is a regular performer of the San Francisco-based show &quot;the Business,&quot; and produces the show “Talkies.&quot; </p>\n<p>She has appeared in comedy festivals, hosted music festivals, told stories at storytelling shows, and done weird things on Public Access TV. She starred in Joey Izzo’s &quot;Stepsister,&quot; which screened at San Francisco International and the Cannes Film Festival in 2013. Most facts about her are true. Most truths about her are facts.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/image_17.jpg",
    PerformerId: "6681",
    SortOrder: 300,
    id: "6681",
    pageUrl: "6681-anna-seregina",
    events: [ "7625", "7694", "7710" ],
    mc_events: [ "7622" ]
}, {
    Name: "Ben Bizuneh",
    Bio: '<p>Ben started doing stand-up in Bloomington, Indiana at the Comedy Attic while attending Indiana University. After graduating, he moved to Los Angeles, and can be seen performing wherever anyone will let him. He’s performed at the Limestone Comedy Festival, was a finalist in the Great American Comedy Festival, and has done no other festivals.</p>\n<p>He also makes videos in which he lies to people that have been featured on WorldStarHipHop, College Humor, What’s Trending, and The Bleacher Report. Ben hopes to one day be able to cry on command.</p>\n<p><a href="http://benbizuneh.tumblr.com">http://benbizuneh.tumblr.com</a><br />\n<a href="http://youtube.com/lieguys">http://youtube.com/lieguys</a></p>\n',
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/picture_0.jpeg",
    PerformerId: "6134",
    SortOrder: 300,
    id: "6134",
    pageUrl: "6134-ben-bizuneh",
    events: [ "7693", "7701", "7914" ],
    mc_events: [ "7680" ]
}, {
    Name: "Douglas Gale",
    Bio: "<p>Douglas Gale started doing comedy in Seattle in 2003 where he quickly became one of the newest comics in the scene. In the past few years, his comedy has become more personal. From stories about the time he tried to trade places with his reflection in a mirror (high on mushrooms) to his confusion about what is and is not cheese (arugula = not cheese).</p>\n<p>In the past year, he started expanding beyond straight standup and into the world of storytelling. He has won three Moth StorySLAMs in Seattle and competed in a Moth GrandSLAM in 2014. </p>\n<p>In 2013, he was the winner of the Competitive Erotic Fan Fiction show at Bumbershoot. </p>\n<p>He is currently the producer of the monthly Moth StorySLAM in Seattle</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/1523779_616488551721812_1246745931_o.jpg",
    PerformerId: "6687",
    SortOrder: 300,
    id: "6687",
    pageUrl: "6687-douglas-gale",
    events: [ "7632", "7672", "7679", "7811" ],
    mc_events: []
}, {
    Name: "Mike Lebovitz",
    Bio: "<p>Mike entered comedy at the tender age of six with clowning classes at the local JCC. He’s been delighting and confounding audiences big and small with his accessibly off-beat brand of humor ever since. A father as well as a fat slob, Mike draws from a broad range of experiences in constructing his act, using outlandish viewpoints and subversive turns of phrase to highlight the inherent absurdity of being. He doesn’t point out life’s quirks; he rolls around and farts on them! A current member of Comedians You Should Know, Chicago’s premiere stand-up comedy collective, Mike is also curator and co-creator of Senorita Weiner&#039;s Top Secret Humor Experiment and Ice Cream Social Club, which is Chicago&#039;s longest-running clandestine comedy show in addition to being the original underground, members-only ice cream social. He is also starting to &quot;make it&quot; on TV where, if you look really closely, when the moon is just right, you may be able to catch a glimpse of tiny Lebo selling little bits of his integrity in order to hawk various products. A &quot;New Face&quot; at the 2013 Montreal Just For Laughs Comedy Festival, Mike has also made funny faces at the 2012 TBS Just For Laughs Festival (Chicago), the 2013 Montreux Comedy Festival (Switzerland) and weirded people out at the 2013 Gilda&#039;s Laughfest in Grand Rapids as well! Fun!</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/lebo_mirror_orig_copy.jpg",
    PerformerId: "5739",
    SortOrder: 300,
    id: "5739",
    pageUrl: "5739-mike-lebovitz",
    events: [ "7654", "7687", "7742", "7911", "8635" ],
    mc_events: [ "7688" ]
}, {
    Name: "Ester Steinberg",
    Bio: "<p>Ester began performing stand-up on the high school lunch tables and soon graduated to the campus of New York University. While attending NYU she took full advantage of the city&#039;s thriving comedy scene and quickly became a regular at Caroline&#039;s New Talent Night. Before long she was touring the country and opening up for comedians Own Benjamin, Bobby Collins, and Shawn Pelofsky.</p>\n<p>Now residing in Hollywood, she plays regularly at comedy clubs including Laugh Factory, Comedy Store, and the Improv. She has appeared in Time Out New York Magazine, TBS.com, New York Post, NYU local, and the Jewish Press. She has toured colleges with Nice Jewish Girls Gone Bad, Skidmore College Comedy Festival, Rooftop Comedy&#039;s College Competition (finalist), NYU&#039;s &quot;Make Me Laugh&quot; comedy festival, the Ventura Comedy Festival, and the Laughing Skull Comedy Festival.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/img_2538.jpg",
    PerformerId: "6800",
    SortOrder: 300,
    id: "6800",
    pageUrl: "6800-ester-steinberg",
    events: [ "7695", "7697", "7748", "7951" ],
    mc_events: []
}, {
    Name: "Martin Morrow",
    Bio: "<p>Martin Morrow is originally from Birmingham, AL where he started doing stand-up, improv, and belonged to an award winning sketch/stand-up hybrid &quot;Tubbi and Martin.&quot; He has performed in clubs, colleges, and festivals all over the country including Atlanta, Austin, Cleveland, Las Vegas, Los Angeles, New Orleans, and New York and has worked with some of the top names in comedy. </p>\n<p>Currently residing in Chicago, IL, Martin has performed in several shows with Second City as a part of their Outreach &amp; Diversity ensemble in addition to being a Second City PUMA scholarship recipient, and has put on several one man shows at The Playground Theater and MPaact Theater, and was a season 13 cast member of the longest running independent comedy showcase the Lincoln Lodge. His work has been featured on the Huffington Post, he was a finalist in the seventh season of the Impress These Apes comedy competition, and he performed in the 2013 TBS Just for Laughs Festival, but Martin is perhaps best known from his work in the 1953 Walt Disney classic Peter Pan as Peter Pan&#039;s shadow.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/mmmhs.jpg",
    PerformerId: "6690",
    SortOrder: 300,
    id: "6690",
    pageUrl: "6690-martin-morrow",
    events: [ "7653", "7733" ],
    mc_events: []
}, {
    Name: "Opeyemi Olagbaju",
    Bio: "<p>Opeyemi &quot;Ope&quot; Olagbaju may be a young comic, but his love and commitment to stand up can always be seen on stage.  The OC/LAcomic. has been seen performing at various clubs(Irvine Improv, Ontario Improv, Brea improv, Spectacles Theater, Flappers) and colleges(UCSB, UCFC) throughout southern California.. Ope has  been noted for his observational humor and being able to craft hilarity from his own personal experiences of being an immigrant who assimilated into American culture and society. Through comedy Ope wants like to explore what makes us different and more importantly how these differences make us all the same.  His philosophy is that &quot;No matter where you&#039;re from, finding a way to laugh is a highly important component of the human experience and something we can all relate to. I&#039;m just glad I have been given the opportunity to make people laugh and share in that experience &quot;</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/ope_pic.jpg",
    PerformerId: "6561",
    SortOrder: 300,
    id: "6561",
    pageUrl: "6561-opeyemi-olagbaju",
    events: [ "7711", "7733", "7743" ],
    mc_events: [ "7748" ]
}, {
    Name: "Joel Warner",
    Bio: "<p>Joel Warner is a former staff writer for Westword, Denver’s alternative newsweekly, and he has also written for Wired, Bloomberg Businessweek, The Boston Globe, Slate, Grantland, and other publications. While he’s exposed dirty cops and tackled city hall corruption with the best of them, he prefers stories about beer-delivering robots, Shaquille O’Neal’s sense of humor, and globe-trotting coffee expeditions gone awry. His work has been recognized by the James Beard Foundation Journalism Awards, the Best American Sports Writing anthology, the Casey Medals for Meritorious Journalism, the Dart Awards for Excellence in Coverage of Trauma, the Magazine Awards of Western Publishing and the AltWeekly Awards, among other honors.A graduate of Haverford College, Warner lives in Denver, Colorado, with his wife, Emily, and their two children, Gabriel and Charlotte. According to the vagaries of the Internet, Warner is an international expert on Swine Flu and one of the leading authorities on Casa Bonita, the over-the-top Mexican restaurant made famous by South Park.</p>\n<p>Warner is the co-author of The Humor Code: A Global Search for What Makes Things Funny.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/joel-warner.jpg",
    PerformerId: "7877",
    SortOrder: 300,
    id: "7877",
    pageUrl: "7877-joel-warner",
    events: [],
    mc_events: []
}, {
    Name: "Tom Sibley",
    Bio: "<p>Tom is a comedian living in Los Angeles, CA. He does two podcasts, one on the WestCast Network called Goof City (which is like Cheers meets Mean Girls) and We Watch Wrestling (a podcast about professional wrestling...seriously) He has appeared on BBC America, FKR.TV&#039;s Law of the Land, and countless television commercials. He currently lives in a makeshift Russian retirement community and thinks dogs are far better than people.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/1393700_631839286867728_1805113915_n.jpg",
    PerformerId: "6032",
    SortOrder: 300,
    id: "6032",
    pageUrl: "6032-tom-sibley",
    events: [ "7663", "7692", "7708" ],
    mc_events: [ "7685" ]
}, {
    Name: "Lisa Best",
    Bio: "<p>Lisa Best is one of the fresh faces to come out of the strong south Florida comedy scene.</p>\n<p>At the age of 15, Lisa pooped her pants and her classmate Billy Hidges called her a fartball. Since that pivotal moment of clarity and poo, Lisa began her training to turn embarrassing incidents into hilarity. No longer a novice, she skillfully sucks in her audiences with captivating vulnerability and story-telling flare. Now without pooping herself. </p>\n<p>Now 23 years old, Lisa Best currently resides in Los Angeles. She can be seen in Comedy Central&#039;s Dead Kevin sketch, &quot;Hot Girl Fail,&quot; starring in the film &quot;Something Funny,&quot; and also as a guest star in SyFy&#039;s hit Fangasm. She is also the creator and writer of the mockumentary-style webseries, &quot;The Apartment.&quot;</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/headshot.png",
    PerformerId: "5906",
    SortOrder: 300,
    id: "5906",
    pageUrl: "5906-lisa-best",
    events: [ "7652", "7656", "7708", "7740", "7750" ],
    mc_events: []
}, {
    Name: "Andy Wood",
    Bio: '<p>In addition to performing standup comedy for the last decade and "dancing" in the background of the nightclub scene in Birdemic 2, Andy is a co-founder and producer of the Bridgetown Comedy Festival and one of the guys behind the LA Podcast Festival. His electrical engineering degree has been gathering dust since his last “real” job ended back in ‘05, and the podcast Probably Science that he co-hosts with Matt Kirshen and Jesse Case is his attempt at remedying that while also getting to nit-pick plot points from Gravity.</p>\n<p>Since moving to Los Angeles in 2011, Andy has stayed busy working on shows including E!’s Love You, Mean It with Whitney Cummings and MTV’s Ridiculousness. You can follow him on Twitter @andytwood, and watch for him acting alongside Rob Corddry and Paul Scheer in the upcoming film Jason Nash Is Married on Comedy Central.</p>\n',
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/andywood.jpg",
    PerformerId: "6855",
    SortOrder: 300,
    id: "6855",
    pageUrl: "6855-andy-wood",
    events: [ "7642", "7697", "7810" ],
    mc_events: []
}, {
    Name: "Subhah Agarwal",
    Bio: "<p>Subhah Agarwal is a stand up comedian currently working out of New York City. Subhah performs regularly at club across the city including but not limited to Stand Up New York, the Stand, Gotham, and New York Comedy Club. She has also performed in several prestigious alterative comedy venues including Hannibal Buress’s Knitting Factory, and Night Train with Wyatt Cenac. </p>\n<p>She recently showcased in the New York Comedy Festival and was featured on Scott Moran’s PBS documentary series “Modern Comedian.” She is known as one of the hardest working comedians. She has really been working to get her name out there so that one day she can write in a notebook without someone asking her if she’s doing homework.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/subhah-agarwal-0085-2.jpg",
    PerformerId: "6298",
    SortOrder: 300,
    id: "6298",
    pageUrl: "6298-subhah-agarwal",
    events: [ "7637", "7706", "7738", "8632" ],
    mc_events: []
}, {
    Name: "Will Smalley",
    Bio: "<p>Fresh off the factory line with that “new car” smell, Comedian Will Smalley has readily established himself as a powerful voice and innovative joke writer in the Boston comedy scene. Will was a Finalist in the 2012 Boston Comedy Festival, has been featured in the Women In Comedy festival, and is a mainstay in the major comedy clubs and colleges across the Northeast. Will was selected in 2011 to be Comic In Residence and now hosts a monthly show at the renowned Comedy Studio in Cambridge.  Will has also been a writer for MY-TV Network.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/100114_will_029_webres.jpg",
    PerformerId: "6699",
    SortOrder: 300,
    id: "6699",
    pageUrl: "6699-will-smalley",
    events: [ "7706", "7748", "8631" ],
    mc_events: [ "7687" ]
}, {
    Name: "Kortney Shane Williams",
    Bio: "<p>Kortney Shane Williams is an international touring comedian that currently considers Seattle Washington to be his home. He has participated in Comedy Central’s, South Beach Comedy Festival, and has been featured on CBS.com. He was a 2012 Finalist in NBC’s Stand-Up for Diversity Showcase, and has opened for Dave Chappelle.</p>\n<p>Kortney’s unique, personable style of joke telling makes him a must see show. His most recent full length comedy album entitled, “I’m Right about This&quot; is available on iTunes.  He is also a writer and has been featured on Yahoo and FoxSports.com.  He is the founder and editor-in-chief of Comedic Prose, a comedy blog site that is regularly highlighted on Yardbarker. Currently he is working on a children’s comedy book that is slated to be finished in the winter of 2014.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/kortneyshanewilliams_-_headshot1.jpg",
    PerformerId: "6153",
    SortOrder: 300,
    id: "6153",
    pageUrl: "6153-kortney-shane-williams",
    events: [ "7656", "7672", "7689", "7733" ],
    mc_events: []
}, {
    Name: "Peter McGraw",
    Bio: "<p>Dr. Peter McGraw, a marketing and psychology professor at the University of Colorado Boulder, is an expert in the interdisciplinary fields of emotion and behavioral decision theory. His research examines the interrelationship of judgment, emotion, and choice, with a focus on consumer behavior and public policy. He is becoming a leading force in moving the science of humor from the niche to the mainstream. The advantage that McGraw has over his predecessors is his ability to conduct state-of-the-art experiments with the help of the team he directs at the Humor Research Lab (aka HuRL).McGraw received a B.A. in psychology and M.Ed. in educational psychology from Rutgers University and an M.S. and Ph.D. in quantitative psychology from The Ohio State University. His post-doctoral training was conducted at Princeton’s Woodrow Wilson School. His work has been covered by the BBC, MSNBC, Scientific American, Wall Street Journal, and the Financial Times. Most recently, McGraw made the 2013 Stylish Scientist List – probably because he likes to rock a sweater vest.</p>\n<p>McGraw is the co-author of The Humor Code: A Global Search for What Makes Things Funny.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/peter-mcgraw.jpg",
    PerformerId: "7876",
    SortOrder: 300,
    id: "7876",
    pageUrl: "7876-peter-mcgraw",
    events: [],
    mc_events: []
}, {
    Name: "Christian Van Wade Ricketts",
    Bio: "<p>Christian is funny and his friends think so too, and so do a bunch of other people who he is not close friends with. He has been in Bridgetown several times and the Comedy &amp; Burrito Festival in San Francisco. He has been doing stand up for 5 years.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/btwon_sbumission_pho.jpg",
    PerformerId: "6591",
    SortOrder: 300,
    id: "6591",
    pageUrl: "6591-christian-van-wade-ricketts",
    events: [ "7628", "7748", "7913" ],
    mc_events: [ "7625" ]
}, {
    Name: "Rob Haze",
    Bio: "<p>In a short amount of time, Rob Haze has become a rising star in stand up comedy.  The Atlanta native began his stand up journey while studying Political Science at the University of Georgia. There he would host and perform at many talent shows, pageants, and step shows. He went on to win the Athens Last Comic Standing contest. With a sense of humor that is full both of clever wordplay and references to popular culture, there is no wonder why Rob has become a favorite at the Laughing Skull Lounge, Punchline, and Uptown Comedy Corner.  Rob uses his gift to help others as well. In 2012, he won the Autism Laughs charity competition. He also was a writer and star of a (local) sketch comedy show called Cabbagetown. In 2012, Rob began to branch out from the Southeast, and was a finalist in the Bay Area Black Comedy Competition in Oakland, California.  He was a 2013 Finalist in the NBC Stand up for Diversity competition and is currently on their college tour. Rob has opened for many comics including Donnell Rawlins, Hannibal Buress, and most recently Dave Chappelle.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/improvedheadshot.jpg",
    PerformerId: "5918",
    SortOrder: 300,
    id: "5918",
    pageUrl: "5918-rob-haze",
    events: [ "7701", "7702", "7710" ],
    mc_events: [ "7628" ]
}, {
    Name: "Dina Hashem",
    Bio: "<p>Dina Hashem first tried stand-up by auditioning for the 2010 New Jersey Comedy Festival at Rutgers University. After winning 1st place, she continued to pursue comedy and has since been performing regularly at clubs including Broadway Comedy Club, Caroline&#039;s, The Laughing Devil, Comic Strip Live, and The Stress Factory.</p>\n<p>Dina&#039;s memorable style contrasts a subtle delivery with witty observations and dark musings on her cultural upbringing. She was a semi-finalist in the She-Devil Comedy Festival and Laughing Devil Comedy Festival, and a participant of Gilda&#039;s Laugh Fest and the Jersey City Comedy Festival. Her writing has also been featured on the websites of Comedy Central and Nickelodeon.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/dina-hashem-headshot.jpg",
    PerformerId: "6640",
    SortOrder: 350,
    id: "6640",
    pageUrl: "6640-dina-hashem",
    events: [ "7911", "7913" ],
    mc_events: [ "7690" ]
}, {
    Name: "JoAnn Schinderle",
    Bio: "<p>JoAnn Schinderle hails from the upper Midwest and despite being a Portlander now, will probably never lose her “hot dish” accent. (Hotdish ingredients include but are not limited to: ground beef, canned vegetables, canned soup, cheese, and tater tots.) For the past year,  JoAnn has been making strides in Portland’s thriving comedy scene by way of stand-up and improv. Recently performing in the All Jane No Dick comedy festival and 2014&#039;s SF Sketchfest, as a stand-up her humor is relatable, snarky, and has a storytelling style that will make you feel like she’s your best friend letting you in on a secret. As an improviser and member of the Curious Comedy House Team ensemble, she creates big characters and will “yes and” the shit out of you. JoAnn’s performed both mediums at venues in Chicago (Second City Training Center) and all around Portland (Curious Comedy Theater, Brody Theater, and Funhouse Lounge.) If you enjoy friendly banter you can follow JoAnn on twitter @joannlizabeth</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/tumblr_mypy0mh21n1s46y2co2_r1_1280.jpg",
    PerformerId: "5983",
    SortOrder: 350,
    id: "5983",
    pageUrl: "5983-joann-schinderle",
    events: [ "7704", "7738", "7807", "7912" ],
    mc_events: [ "7752" ]
}, {
    Name: "Todd Masterson",
    Bio: "<p>Todd Masterson is a writer and comedian who lives with his tiny husband (Todd is 6&#039;7&quot; and his husband is 5&#039;4&quot;) and their little black pug in West Hollywood, CA. Todd is best known as one of the nine writers that went on strike from Fashion Police with Joan Rivers last year. He&#039;s also appeared on Arsenio, as well as written for the Roast of James Franco. Todd produces a monthly show called All That Could Have Been, for writers to read the submission packets they&#039;ve written for shows, but never got the job. He&#039;s opened for Jimmy Fallon on the college circuit and appears all around Los Angeles in several popular shows.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/headshot_2013_1.jpg",
    PerformerId: "6359",
    SortOrder: 350,
    id: "6359",
    pageUrl: "6359-todd-masterson",
    events: [ "7654" ],
    mc_events: [ "7678" ]
}, {
    Name: "Molly Fite ",
    Bio: "<p>Molly Fite is a native of Vancouver, Washington, and has a B.A. in Drama from Bennington College and an M.F.A. in Acting from University of California San Diego. La Jolla Playhouse credits include: The Physicists, Catching Flight, The Adding Machine, Killer Joe, The Skin of Our Teeth, Heart of a Dog,The Labyrinth of Desire, Freedom, New York, and Moliere: A Cabal of Hypocrites. South Coast Repertory: Pride and Prejudice. She has performed at LaMama, H.E.R.E., and The Ensemble Studio Theatre in New York City. </p>\n<p>She performs stand-up, sketch, and improv comedy all over Portland and Los Angeles, and has trained at the Upright Citizens Brigade Theatre, I.O. West, The Groundlings, and Second City. She performs monthly with her sketch team Size Queen at I.O. West, and hosts No Pressure: A Storytelling Show also at I.O West. She recently performed at the all women&#039;s comedy festival All Jane and No Dick in 2013. Her video parody &quot;Not Another Sundance Movie&quot;  has been featured on the Hufffington Post, Usatoday.com,  The New York Post, geektyrant,  and slashfilm.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/fite_amalia-img_3444-09-02-09_15_29_42.jpg",
    PerformerId: "6745",
    SortOrder: 350,
    id: "6745",
    pageUrl: "6745-molly-fite-",
    events: [ "7695", "7741", "7918", "8579" ],
    mc_events: [ "7656" ]
}, {
    Name: "Sachi Ezura",
    Bio: "<p>Sachi Ezura is a comedian, writer, and producer, who works in development and talent for MTV2. After graduating from Harvard, she chose to disappoint her parents by pursuing a career in comedy. She is a co-writer on the upcoming Girl Code book, available at Urban Outfitters, and has contributed writing to the Huffington Post and Comedy Central Insider. She has produced comedy for the MTV Comedy Showcase, the NY Comedy Festival, Laughter in the Park, Schtick or Treat, the Quarterly Arts Soiree and 50 First Jokes. She co-hosts and produces Sledgehammer, a stand-up open mic at UCB East and Comedy at Alligator Lounge, a free weekly stand-up show. She is also a trained improviser, having completed the Advanced Study program at the Upright Citizens Brigade Theater and has performed improv at the Del Close Marathon and the Chicago Improv Festival. She is half Japanese, 1/4 Puerto Rican, 1/8 Swedish, and 1/8 German; and she is willing to milk those facts for whatever diversity showcases she can get on. She was born and raised in New York City and has cried in most public places across Manhattan (and some parts of Brooklyn!)</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/67874_10100562085767411_60497619_n.jpg",
    PerformerId: "6118",
    SortOrder: 350,
    id: "6118",
    pageUrl: "6118-sachi-ezura",
    events: [ "7690", "7751" ],
    mc_events: [ "7637" ]
}, {
    Name: "Paul Jay",
    Bio: "<p>Paul Jay used to do comedy in Los Angeles. Now he does it in Portland. He has performed at every Bridgetown Comedy Festival, one Bumbershoot, one Helium, and several podcasts. He recently transitioned from Cat Person to Dog Person and has not figured out how to tell his comedian friends.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/paul_possible_headshot_4.jpg",
    PerformerId: "6509",
    SortOrder: 350,
    id: "6509",
    pageUrl: "6509-paul-jay",
    events: [ "7665", "7739", "7751", "7753", "8635" ],
    mc_events: []
}, {
    Name: "Jeff Oliver",
    Bio: "<p>Jeff Oliver is a filmmaker, comedian, musician and writer. He has previously appeared at the 2012 Bridgetown Comedy Festival and has made appearances on Fox News’ Red Eye with Greg Gutfeld, NPR&#039;s Tell Me More, and on numerous podcasts.</p>\n<p>Jeff is a former writer for the web series The Spicy News and a former guitarist for The Arcadians. He co-directed, wrote and starred in the comedic short film &#039;Meta Feta&#039; which appeared at the DaVinci Days Film Festival in 2010.</p>\n<p>Originally from the Pacific Northwest he currently lives in New York City where he is directing his first feature film ‘A Summer To Discover.’ He is a contributor for Savage Henry Magazine.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/2014_headshot_1-2_web.jpg",
    PerformerId: "5999",
    SortOrder: 350,
    id: "5999",
    pageUrl: "5999-jeff-oliver",
    events: [ "7632", "7698", "7733" ],
    mc_events: [ "8633" ]
}, {
    Name: "Nick Sahoyah",
    Bio: '<p>Nick Sahoyah is a writer and comedy producer based out of Seattle, Washington.  In addition to performing at and hosting comedy showcases across Seattle, Nick co-produces the popular weekly comedy night at Scratch Deli on Capitol Hill.  His past production projects include organizing and emceeing the comedy stage at &#039;Mo Wave 2013 (Seattle&#039;s first all queer music and arts festival).  Shortly after, Nick co-produced and hosted Seattle Pride Week&#039;s biggest comedy show, &quot;Out &amp; In&quot; at the Neptune Theater; a benefit in partnership with Gay City Health Project.</p>\n<p>Apart from stand up, Nick produces the cult sketch/sitcom webshow &quot;Monsoon Season&quot; starring Jinkx Monsoon (winner of RuPaul&#039;s Drag Race Season 5), which he directs, co-writes, and co-stars in (<a href="http://www.funnyordie.com/monsoonseason">http://www.funnyordie.com/monsoonseason</a>), and hosts his own podcast, &quot;That&#039;s Provocative! with Nick Sahoyah&quot; (<a href="http://www.nicksahoyah.com">http://www.nicksahoyah.com</a>).</p>\n<p>Nick has previously performed stand up at Bumbershoot Music &amp; Arts Festival (2011/2012), &#039;Mo Wave (2013), Summer Meltdown Festival (2013), and Dallas Comedy Festival (2013).</p>\n',
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/sahoyah.jpg",
    PerformerId: "5879",
    SortOrder: 350,
    id: "5879",
    pageUrl: "5879-nick-sahoyah",
    events: [ "7641", "7653", "7753" ],
    mc_events: [ "8631" ]
}, {
    Name: "Katie Nguyen",
    Bio: "<p>Katie Nguyen is a Portland-based comedian and vending machine whisperer. She has performed at Curious Comedy Theater, taken part in Dis/orient/ed Comedy, and was a semifinalist in Helium Comedy Club&#039;s Portland&#039;s Funniest Person Contest. Katie’s style can be described as “comedy” and “style.” As an ensemble member at the Brody Theater, Katie performs in a variety of improv, stand-up, and sketch shows, and was once hired to play an Eastern European rhythmic gymnast for a barn full of teachers. Katie also writes sketch, performs, and wears vests with the group Vestivus. From ComedySportz to non-profit fundraisers to Chinese restaurants, Katie’s delighted folks and shamelessly laughed at her own jokes. Watch out for her— she&#039;s very short and easy to lose in crowds.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/tumblr_mxosdqaejf1s46y2co1_1280.jpg",
    PerformerId: "6686",
    SortOrder: 350,
    id: "6686",
    pageUrl: "6686-katie-nguyen",
    events: [ "7654", "7704", "7745", "7809" ],
    mc_events: []
}, {
    Name: "Rhiannon Archer",
    Bio: "<p>Rhiannon Archer is a standup comedian and amateur crooner hailing from Toronto Canada. She has written for television shows such as CBC’s &quot;George Stroumboulopoulos Tonight&quot; and CTV’s new sitcom, &quot;Spun Out.&quot; She has been nominated for 2 Canadian Comedy Award for Best Newcomer and Best Comedy short. </p>\n<p>Rhiannon has been a part of many festivals throughout North America such as Just For Laughs 42, NXNE, Dark Comedy Festival, Boston Women in Comedy, All Jane no Dick, and the Seattle International Comedy Competition.</p>\n<p>She cannot do mathematics under pressure, or tell you anything specific about history prior to 1980&#039;s. She has cats, enjoys sour keys and walking, hates mayo and mushrooms and when her food touches.</p>\n<p>Rhiannon Archer is a stand out in a group of up and coming comics that keep Toronto an epicenter for new talent.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/rhiannonarcher.jpg",
    PerformerId: "6392",
    SortOrder: 350,
    id: "6392",
    pageUrl: "6392-rhiannon-archer",
    events: [ "7628", "7667", "7809" ],
    mc_events: []
}, {
    Name: "Kyle Mizono ",
    Bio: "<p>Originally from San Francisco, Kyle Mizono is a comedian and one of the last international Beanie Baby collectors. Along with being a regular performer in San Francisco and Los Angeles, her festival performances include Edinburgh Fringe and Portland’s All Jane No Dick festival. Currently, Kyle is the Junior Producer of The Super Serious Show. Her comedy was once described as a “breath of fresh air” but she prefers to be described as a “tall glass of piping hot water.”</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/kyle_mizono_0.jpg",
    PerformerId: "5755",
    SortOrder: 350,
    id: "5755",
    pageUrl: "5755-kyle-mizono-",
    events: [ "7653", "7702", "7809", "7815" ],
    mc_events: []
}, {
    Name: "Jordan Casner",
    Bio: "<p>Originally from McMinnville, Oregon, Jordan Casner has been living and performing comedy in Portland for the last few years. His brand of comedy really isn&#039;t branded yet. But that&#039;s what people are into now, right? One thing that is certain is that his medium for performance is always changing. You might hear a song, you might hear some jokes, you might see him get choked to death in a horse mask. Jordan has performed at the Bridgetown Comedy Festival and has been a guest on shows like Funny Over Everything and The Spicy News.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/tigers.jpg",
    PerformerId: "6049",
    SortOrder: 350,
    id: "6049",
    pageUrl: "6049-jordan-casner",
    events: [ "7628", "7637", "7746" ],
    mc_events: [ "7654" ]
}, {
    Name: "Jackson Banks ",
    Bio: "<p>A film major at the University of Utah,  Jackson Banks&#039; history is in comedy film making, and he has been doing stand up for a little under two years.  He enjoys visual, surreal joke telling.  He has recently participated in the Seattle International Comedy Competition, Salt Lake City&#039;s One Mic Stand, and Park City&#039;s Egyptian Theater Comedy Showcase.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/jackson-banks-200x300_0.jpg",
    PerformerId: "5777",
    SortOrder: 350,
    id: "5777",
    pageUrl: "5777-jackson-banks-",
    events: [ "7653", "7694", "7702", "7753" ],
    mc_events: []
}, {
    Name: "Zak Toscani",
    Bio: "<p>Zak Toscani is a Portland based comedian who performs regularly in the Pacific Northwest (Helium Comedy Club Portland, Seattle&#039;s Comedy Underground, Bumbershoot, Funny Over Everything). His style melts like an artisan cheese into both the honest and the silly, much like Dom DeLuise&#039;s lasagna recipe.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/5853_570305192056_5104679_n_0.jpg",
    PerformerId: "5919",
    SortOrder: 350,
    id: "5919",
    pageUrl: "5919-zak-toscani",
    events: [ "7699", "7708", "7750" ],
    mc_events: [ "7697" ]
}, {
    Name: "Stephanie Hasz",
    Bio: "<p>Stephanie has performed at clubs including Zanies and the Laugh Factory; alternative rooms and venues such as the Upright Citizens Brigade Theatre, the Hideout, Chicago Underground Comedy, and The Creek and The Cave; and festivals including the Bentzen Ball, High Plains Comedy Festival, and Crom Fest. The AV Club called her one of “the city’s most exciting up-and-comers,” and Time Out Chicago described her as displaying “a fury and vulnerability rarely seen from female comics.” She has also been featured yelling about things in the Chicago Tribune and the Chicago RedEye.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/stephaniehasz_headshot.jpg",
    PerformerId: "6312",
    SortOrder: 350,
    id: "6312",
    pageUrl: "6312-stephanie-hasz",
    events: [ "7653", "7691", "7783" ],
    mc_events: [ "7693" ]
}, {
    Name: "Ryan Singer",
    Bio: "<p>Ryan Singer is the rarest of breeds: A comic’s comic who electrifies mainstream audiences with material that is both uncompromising and unpretentious.   LaughSpin says, “With his high-energy delivery and unpretentious leanings, there’s not a lot to dislike about comedian Ryan Singer. And it’s not just us saying it: In the last few years, he’s won over audiences headlining the nation’s finer comedy clubs and was hailed by Marc Maron in Rolling Stone as a comedian “who should be big.”</p>\n<p>Both his debut album and sophomore release COMEDY WONDER TOWN were selected as Top 10 Comedy CD’s of the year (2010 &amp; 2012).  He was selected by LA Weekly as one of “10 LA Comics to Watch” for 2014, was mentioned in NY Magazine as a “Comic to Watch,” was one of 4 finalist in CMT’s Next Big Comic Contest, is a frequent guest on the WTF Podcast w/Marc Maron and the Bob &amp; Tom Show, regularly heard on XM/Sirius Satellite Radio, and was a regional finalist in Comedy Central’s Open Mic Fight.  He was the winner of the Golden Shingle Award at the Rooftop Comedy Festival, an award given to the next rising star in comedy.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/ryan_singer_under_1mb.jpg",
    PerformerId: "6319",
    SortOrder: 350,
    id: "6319",
    pageUrl: "6319-ryan-singer",
    events: [ "7711", "7734", "7806", "7815" ],
    mc_events: [ "7915" ]
}, {
    Name: "Erin Dewey Lennox",
    Bio: "<p>ERIN DEWEY LENNOX is a writer / comedian based in Los Angeles, CA.  She has performed at clubs, colleges, and alternative venues in over 30 states and at the Women in Comedy Festival, the Cape Fear Comedy Festival, the Out of Bounds Comedy Festival, and at an impromptu roast of her grandfather.  She has written for ESPN, MTV, NFL Gameday, and McSweeney&#039;s.  She also writes a lot of the commercials you fast forward through.  Erin studied journalism at the University of North Carolina Chapel Hill and drank a lot at football games.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/erinlennox.jpg",
    PerformerId: "6456",
    SortOrder: 350,
    id: "6456",
    pageUrl: "6456-erin-dewey-lennox",
    events: [ "7730", "7743", "7913", "7916" ],
    mc_events: [ "7623" ]
}, {
    Name: "Natasha Muse",
    Bio: "<p>Natasha Muse is funny. She began performing in 2001 as “Ginger” at AsiaSF. Her friends claimed she was much too shy to be a good performer, and the fact that they were right didn’t stop her from trying it anyway. But, eventually, she sorta proved them all wrong.</p>\n<p>In 2008, Natasha made the leap from lip-synching to stand-up comedy, and began to create a buzz in the San Francisco comedy scene. Her cerebral wit, whimsical wordplay, and unique perspective on life have earned her the adoration of audiences and the respect of her peers. She’s guaranteed to be at least the second-funniest transexual you know.</p>\n<p>Natasha performs all over the Bay Area, including Cobb’s Comedy, the SF Punchline, Harvey’s, and the Dark Room. She has worked with such people as Wyatt Cenac, Pete Holmes, Ron Lynch, and Laurie Kilmartin.</p>\n<p>In addition to stand-up, Natasha produced and hosted the monthly underground hit “A Funny Night for Comedy” at the Actors’ Theatre, the cult podcast “Too Soon,&quot; and writes and performs with the sketch group Femikaze. She has also been declared &quot;a force to be reckoned with on Twitter.&quot;</p>\n<p>In 2013 the SF Weekly said she was a &quot;Comedian to Watch,&quot; and in 2012 they chose her as &quot;The Funniest Tranny in SF.&quot; </p>\n<p>Natasha has performed in Sketchfest 2013 and 2014, Comedy Day 2012 and 2011, and the first and only SF Comedy and Burrito Festival in 2012. She is also the winner of the 2010 Battle of the Bay competition, Miss Toolbox 2011, and also took home the Miss Photogenic trophy in Model Search 2004.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/natasha_high_res.jpg",
    PerformerId: "6731",
    SortOrder: 350,
    id: "6731",
    pageUrl: "6731-natasha-muse",
    events: [ "7688", "7710", "7807", "8632" ],
    mc_events: []
}, {
    Name: "Barbara Holm ",
    Bio: "<p>Originally from Seattle, Barbara Holm has performed at the San Francisco Sketchfest, the Bridgetown Comedy Festival, Bumbershoot Arts festival, and the Women in Comedy Festival in Boston. She has written for IGN, The Portland Mercury, Hahajk, and the Huffington Post. She has been awarded Time Out New York’s Joke of the Week and was named “one of the best things about comedy in 2012″ by the Comedy Bureau. Barbara writes a weekly humor column for The Portland Mercury about social injustice called, &quot;Don&#039;t be a Dick.&quot; </p>\n<p>Her comedy has been described as clever, unique, idiosyncratic, and exuberant. Seattle City Arts Magazine called her a “comedy wizard,” The Seattle Stranger newspaper called her an “adorable wunderkind,” and The Portland Mercury described her as a &quot;joke machine.&quot; She describes herself as, “running away from this question to hide under the desk right now.&quot;</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/x3enbmmmpzslrgjeqoqzs_dzipnybktx7ytxa6hy23wqcqikwjxkcgsvmo7_d9dwgufc5bcymja86prtc8m42it58j4cgom_zbkr3r1yssvtayvr9j5djmcbw73npein4_0.jpg",
    PerformerId: "6102",
    SortOrder: 350,
    id: "6102",
    pageUrl: "6102-barbara-holm-",
    events: [ "7648", "7679", "7734", "7807" ],
    mc_events: [ "7809" ]
}, {
    Name: "Anatoli Brant",
    Bio: "<p>Born and raised in former USSR, Anatoli moved to California at age of 23. He started comedy in 2002/2003 in San Francisco. He has performed comedy at the San Jose Improv, Punch Line San Francisco, Flappers Burbank as part of Recovering Communist Tour, and in New York at Gotham, Carolines and Standup NY.</p>\n<p>In 2010, he took third place in Battle of The Bay competition in San Francisco, and in 2013, he was a finalist in the Helium Funniest Person competition in Portland. He produces  Comedy Bull and 7 on 7 at Brody Theater in Portland, OR.</p>\n<p>Regardless of being foreigner - has strong command of English language and fresh and obscure points of view on life in US and in general :).</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/anatolihs.jpg",
    PerformerId: "5932",
    SortOrder: 400,
    id: "5932",
    pageUrl: "5932-anatoli-brant",
    events: [ "7688", "7753", "7912" ],
    mc_events: [ "7807" ]
}, {
    Name: "Curtis Cook",
    Bio: "<p>Curtis Cook is a comic from Cleveland, Ohio now living in Portland, Oregon.  He has performed in venues and festivals throughout the country, including the Cleveland Comedy Festival, Salt Lake City’s Comedy Carnivale, Bridgetown Comedy Festival, and San Francisco’s Sketchfest.</p>\n<p>Curtis doesn’t like a lot of things, and has been referred to as a “charming nihilist,” “the physical embodiment of insecurity,” and, “an existential crisis on stage.”  Those are almost nice things to say about a person. </p>\n<p>You can follow him on twitter at @Curtis_Cook.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/headshot_-_curtis_cook.jpg",
    PerformerId: "6276",
    SortOrder: 400,
    id: "6276",
    pageUrl: "6276-curtis-cook",
    events: [ "7632", "7694", "7701" ],
    mc_events: [ "7641" ]
}, {
    Name: "Jacob Christopher",
    Bio: "<p>Half shark alligator, half man, Jacob Christopher has been seen and heard all across the Pacific NW, sharing his stories with the masses. Starting his comedy career in 2010, Jacob has become a regular working comic at Helium and Harveys, and has also been featured in many great Portland showcases such as Midnight Mass, Spicy News, Tonic, Fly Ass Jokes, and more. With his unique story telling, he shares tales of triumph and tragedy, good times and hardships, and takes the audience on an emotional roller coaster that will leave you wanting more. Please keep your arms and legs inside the ride and remain seated until he comes to a full stop. If you are breast feeding or pregnant, you may want to consult a physician prior to hearing him. You can check out his website @ Jacobchristophercomedy.com for upcoming shows and video clips, or look at his pics if you just want to bask in his ginger glory. </p>\n<p>Also, he is a big fan of karaoke.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/portland-photographer-jayesunn-xl4.jpg",
    PerformerId: "6128",
    SortOrder: 400,
    id: "6128",
    pageUrl: "6128-jacob-christopher",
    events: [ "7672", "7691", "7737" ],
    mc_events: [ "7704" ]
}, {
    Name: "Steven Wilber",
    Bio: "<p>&quot;Offbeat,&quot; &quot;unexpected&quot; and &quot;clever&quot; are just three of literally hundreds of words used to describe the comedy-style stylings of Steven Wilber. Since starting stand-up in 2011, Steven has risen up in the Portland comedy scene to become a frequent performer at arcade bars, anarchist bookstores, Doctor Who-themed seafood restaurants and other typical comedy venues this city has to offer.</p>\n<p>Steven has shared the stage with Chris Hardwick, Mary Lynn Rajskub, Sean Patton and Ron Funches...whether they wanted him to or not. He has performed at Bumbershoot,  the Savage Henry comedy festival, has been featured on Bryan Cook&#039;s Competitive Erotic Fan Fiction podcast, and is a writer for The Spicy News web series.</p>\n<p>He also has over 23,000 Vine followers, which he&#039;s been told is a good thing to include in a bio.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/stevenbridgetownheadshot.jpg",
    PerformerId: "6215",
    SortOrder: 400,
    id: "6215",
    pageUrl: "6215-steven-wilber",
    events: [ "7693", "7702", "7738", "7967" ],
    mc_events: [ "7653" ]
}, {
    Name: "Tanner Hodgeson",
    Bio: "<p>Tanner Hodgeson is a scared little man. He moved to Seattle from Texas three years ago to work as a software developer. He started performing comedy soon after as a way of spreading the nonsense contained inside him. He has performed in Bumbershoot Music &amp; Arts Festival as well as local shows in the Seattle, Tacoma, and Bellingham areas including Comedy, Mystery, and Mutants! and Competitive Erotic Fan Fiction.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/cool.jpg",
    PerformerId: "6483",
    SortOrder: 400,
    id: "6483",
    pageUrl: "6483-tanner-hodgeson",
    events: [ "7652", "7690", "7704" ],
    mc_events: [ "7743" ]
}, {
    Name: "Wilfred Padua",
    Bio: "<p>Wilfred Padua is a comedian from Seattle, WA. He spent two years in Chicago getting an MFA in Writing only to come back to Seattle to do exactly what he was doing before he left. He has performed at Laff Hole, Bumbershoot Music Festival, and at Summer Meltdown Music Festival. He is also a coproducer of the monthly Seattle showcase, The Good Fun Show.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/headshot_22.jpg",
    PerformerId: "6564",
    SortOrder: 400,
    id: "6564",
    pageUrl: "6564-wilfred-padua",
    events: [ "7621", "7690", "7695" ],
    mc_events: [ "7737" ]
}, {
    Name: "Scott Losse",
    Bio: "<p>Scott Losse is a cat owner and stand-up comedian from Seattle, Washington. He has performed at Bumbershoot: Seattle&#039;s Music &amp; Arts Festival, The Seattle International Comedy Competition, Sketchfest, and lots of other places you&#039;ve never heard of. Scott&#039;s stand-up is smart, absurd, and at times dark. You would probably like it. Scott has appeared on Seattle&#039;s Evening Magazine and is the winner of the 2013 Wenatchee Comedy Festival. His cat&#039;s name is Kitty. She&#039;s a real asshole.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/scottlosse1024x816.jpg",
    PerformerId: "5787",
    SortOrder: 400,
    id: "5787",
    pageUrl: "5787-scott-losse",
    events: [ "7672", "7697", "7806" ],
    mc_events: [ "7919" ]
}, {
    Name: "Nariko Ott",
    Bio: "<p>Phoenix escapee, Nariko Ott is the most tenacious thing to crawl out of the desert since that biker dude with the baby shoes from Raising Arizona.  Although not nearly as intimidating.  </p>\n<p>Since moving to Oregon in 2011, Nariko has been named Finalist in both the 2013 “Portland’s Funniest Person” contest and 2012 “Willamette Valley’s Funniest Person” contest.  Always working, Nariko has established himself in the comedy community by regularly hosting at Harvey’s Comedy Club as well as performing at Helium Comedy Club for their “Portland All-Stars” showcases.  He’s written for sketch comedy troupes “Bully Mammoth” and “Dr. Proof’s Whiz Bang Science Super Hour (More Than an Hour).”  Currently he travels as a feature comedian all along the west coast and is the Co-Creator/Producer of “Lex Hilaris” a Comedy &amp; Metal Showcase at the White Owl Social Club in his new hometown of Portland, Oregon.</p>\n<p>Nariko Ott was named in a “Who’s Who” of comedy article in the Portland Mercury (“Comedy Is OK”, August 28th, 2013) saying it best with, “Nariko Ott has decided that comedy can be metal.” A decision he still stands by.  He has very long hair.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/headshot1_2.jpg",
    PerformerId: "6542",
    SortOrder: 400,
    id: "6542",
    pageUrl: "6542-nariko-ott",
    events: [ "7656", "7665", "7704" ],
    mc_events: [ "7672" ]
}, {
    Name: "Yogi Paliwal",
    Bio: "<p>A standup comedian based out of Seattle,Yogi Paliwal has performed around the country at comedy clubs, theaters and festivals including the San Francisco and Seattle Sketch Fest, The Bridgetown Comedy Festival, and at the NBC Standup for diversity Showcase in Seattle. He’s written for IGN and Frank and Funny greeting cards.</p>\n<p>Carl Warmenhoven the manager of the Comedy Underground has said, “He has a youthness about him.” He enjoys the simple things in life, a grilled cheese sandwich, Bob Ross, whittling, and he gets bored writing his own bio.</p>\n<p>If you were to ask Yogi how he would describe his comedy, he would say it’s “Intellectual absurdity.” If you asked him what that means he would say, “My material isn’t smart, but you need to be smart to see how stupid the joke is.”</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/1mb_mg_4142.jpg",
    PerformerId: "6704",
    SortOrder: 400,
    id: "6704",
    pageUrl: "6704-yogi-paliwal",
    events: [ "7632", "7688", "8633" ],
    mc_events: [ "7750" ]
}, {
    Name: "Monica Nevi",
    Bio: "<p>Monica Nevi is a native of the Seattle, Washington and the product of a wonderfully humorous family and diverse background. While earning her degree at Seattle University and losing her collegiate basketball player career to injuries, Monica decided to move forward with another untraditional path and pursue her strong interest in stand-up comedy. </p>\n<p>She has performed all over the West Coast, in the 2012 Bridgetown Comedy Festival, and in the 2013 Seattle International Comedy Competition. Monica is a regular at the Tacoma Comedy Club, and a drunk woman once told her she was the &quot;funniest skinny white girl&quot; she had ever seen.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/monicanevi-1084-2_0x3_0-16a_0.jpg",
    PerformerId: "5806",
    SortOrder: 450,
    id: "5806",
    pageUrl: "5806-monica-nevi",
    events: [ "7624", "7632", "7689", "7751" ],
    mc_events: []
}, {
    Name: "Kipleigh Brown",
    Bio: '<p>Kipleigh is an actress/comedienne and Chicago native, now based in LA. Every Sunday night she stars in "Top Story! Weekly," a sketch comedy romp through the headlines presenting a brand new show every week at the iO West theatre in Hollywood (Sundays at 8pm). The Los Angeles Times says "Catch \'Top Story! Weekly\' before ‘Saturday Night Live’ cannibalizes the cast!" The Examiner says, "Kipleigh Brown poetically slaps thefaces of any critic that says women ain’t funny."</p>\n<p>Kipleigh also performs character-based comedy and has played clubs such as Zanies in Chicago and Vernon Hills and The Laughing Skull in Atlanta. Kipleigh recently played the leading role in the award-winning feature film noir “Yesterday Was A Lie," (available on Netflix). Other credits include "RUR: Genesis," “Star Trek: Enterprise,” Disney’s “The Suite Life of Zack &amp; Cody,” and CBS’s “The Magic Door." </p>\n<p>Kipleigh’s interests include: listing her interests, androids and relaxing evenings spent outdoors staring at your home. Please make every effort to avoid visiting<br /><a href="http://www.kipleigh.com">www.kipleigh.com</a>.</p>\n',
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/kipleigh_grnr2-6a_apr2014.jpg",
    PerformerId: "7883",
    SortOrder: 600,
    id: "7883",
    pageUrl: "7883-kipleigh-brown",
    events: [ "7661", "7804" ],
    mc_events: []
}, {
    Name: "Demorge Brown",
    Bio: "<p>Demorge Brown is an LA based performer writer, and director, who curates the monthly comedy happening &quot;Blam! Blam! Blam!&quot; with actor and comic Matt Peters.  He has written for and appeared on stage with the Groundlings and the Upright Citizens Brigade theaters, and was a member of the sketch comedy group &quot;Pretty Ok Ho-Hum Spectacular On Ice&quot;.  He is also an original contributing member of the Channel 101 short film collective.</p>\n<p>Credits include Punk&#039;d, According to Jim, Jimmy Kimmel Live, web shorts shorts Gumbel and Yacht Rock and, most recently finished turns in the Comedy Central Pilot &quot;Crazy House&quot; as well as the Janicza Bravo directed short film &quot;Pauline Alone&quot;.</p>\n<p>He is a staunch Arsenal supporter. He is also a knucklehead and a horse lover whose favorite color is orange. DeMorge is doing the best he can.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/2913.jpg",
    PerformerId: "7786",
    SortOrder: 700,
    id: "7786",
    pageUrl: "7786-demorge-brown",
    events: [ "7645", "7741", "7815" ],
    mc_events: []
}, {
    Name: "Whitney Streed",
    Bio: "<p>Whitney Streed is a comedian because if she was not, her incessant punning would have no artistic or monetary value whatsoever. She has opened for the likes of Maria Bamford, Rob Delaney and Jackie Kashian, and closed for JCPenney Portraits, but that was a long time ago. Whitney has performed in clubs, pride festivals and sketchy bars across the Pacific Northwest, as well as festivals including Portland’s Bridgetown Comedy Festival, Seattle SketchFest, and the Salt Lake City Comedy Carnivale. She can be seen playing a feminist in two seasons of IFC’s hit show Portlandia. In addition to doing stand-up, Whitney also produces comedy/variety shows, including the Weekly Recurring Humor Night (running since March 2011) and co-producing the satirical infotainment series known as CHAD Chats. She likes glitter.</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/headshotsmaller.jpg",
    PerformerId: "7785",
    SortOrder: 900,
    id: "7785",
    pageUrl: "7785-whitney-streed",
    events: [ "7625", "7914" ],
    mc_events: []
}, {
    Name: "Whiskey Tango",
    Bio: "<p>Whiskey Tango. Gentlemen… doing gentlemen’s improv. Out of Portland, Oregon, this dapper group of improvisers takes audience suggestions and weaves an elaborate tapestry of scenes, environments, and relationships. With a focus on realism, Whiskey Tango keeps audiences laughing on the edge of their seats.  Show is 25-30 minutes in length and features 4-5 performers. Recently accepted into the 2014 SF Sketchfest, Whiskey Tango has performed at the iO West LA Improv Comedy Festival, the Vancouver International Improv Festival, and are six-time winners of Friday Night Fights (Curious Comedy Theater, Portland OR). They are regular performers and instructors at theaters around Portland, and all around great guys. Collectively they are Whiskey Tango. Individually they are Gabe Dinger, Jed Arkley, Leon Anderson, Nathan Loveless, Samuel De Roest (gentleman on sabbatical) and Jake Michels.</p>\n<p>- Gabe Dinger (Curious Comedy Playas)<br />\n- Jed Arkley (Administration, Curious Comedy Playas, Improv Jones-Providence, RI)<br />\n- Leon Anderson (Curious Comedy Playas, Picture Start-IO West, Private Dancer-Second City LA, April&#039;s Fools, Acme Theater)<br />\n- Nathan Loveless (Curious Comedy Playas, Nate and Nathan, Absolute Improv-University of Oregon, ComedySportz)<br />\n- Samuel De Roest (Curious Comedy Playas)<br />\n- Jake Michels - (Curious Comedy Playas, Impulse, Balrog)</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/all-5-whiskey1_0.jpg",
    PerformerId: "5811",
    SortOrder: 900,
    id: "5811",
    pageUrl: "5811-whiskey-tango",
    events: [ "7747" ],
    mc_events: []
}, {
    Name: "Jacob Reed",
    Bio: "<p>Producer for Before You Were Funny</p>\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/person_8715.png",
    PerformerId: "7798",
    SortOrder: 900,
    id: "7798",
    pageUrl: "7798-jacob-reed",
    events: [ "7739" ],
    mc_events: []
}, {
    Name: "Curious Comedy Players",
    Bio: '<p>The Curious Comedy Players hail from Curious Comedy Theater - the first and only non-profit theater in Portland devoted entirely to the art of comedy. The theater has created more than 40 original sketch, improvised and stand-up comedy productions, regularly hosts touring national artists and produces the All Jane, No Dick Comedy Festival. The Curious Comedy Training Center offers classes and workshops across many comedic disciplines, including improv, sketch writing and stand-up comedy.  </p>\n<p>For more information, visit <a href="http://www.curiouscomedy.org">www.curiouscomedy.org</a>.</p>\n',
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/performers/curiouslogo2014.jpg",
    PerformerId: "8578",
    SortOrder: 900,
    id: "8578",
    pageUrl: "8578-curious-comedy-players",
    events: [ "7747" ],
    mc_events: []
} ], App.Show.FIXTURES = [ {
    Name: "Nathan For You: Screening and Q&amp;A",
    Copy: "Show creators Nathan Fielder and Michael Koman appear live and in person to give you a sneak peak of the upcoming season of Nathan For You. The screening will be followed by a Q&amp;A discussion that will include several off-the-cuff jokes by Fielder and Koman. (Refunds available if Fielder and Koman fail to amuse.)",
    Bio: "Show creators Nathan Fielder and Michael Koman appear live and in person to give you a sneak peak of the upcoming season of Nathan For You. The screening will be followed by a Q&amp;A discussion that will include several off-the-cuff jokes by Fielder and Koman. (Refunds available if Fielder and Koman fail to amuse.)",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/show-submissions/nathan-for-you.jpg",
    SubmittedId: "7936",
    SortOrder: "100",
    id: "7936",
    pageUrl: "7936-nathan-for-you-screening-and-qampa",
    events: [ "7662" ]
}, {
    Name: "The Dead Authors Podcast",
    Copy: "Thanks to the miracle of science, very famous, extremely dead authors time travel to the present and are brought together to discuss their lives and works! But mostly, these dead authors fight like dead cats and dead dogs! And the audience gets to ask questions! That&#039;s you! YOU are the audience! I am saying you get to ask questions! INTERACTIVE!!!\r\n\r\nModerated monthly by H.G. Wells (Paul F. Tompkins)",
    Bio: "Thanks to the miracle of science, very famous, extremely dead authors time travel to the present and are brought together to discuss their lives and works! But mostly, these dead authors fight like dead cats and dead dogs! And the audience gets to ask questions! That&#039;s you! YOU are the audience! I am saying you get to ask questions! INTERACTIVE!!!\r\n\r\nModerated monthly by H.G. Wells (Paul F. Tompkins)",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/show-submissions/deadauthors.jpg",
    SubmittedId: "7782",
    SortOrder: "100",
    id: "7782",
    pageUrl: "7782-the-dead-authors-podcast",
    events: [ "7657" ]
}, {
    Name: "The Meltdown with Jonah and Kumail",
    Copy: "The flagship show of NerdMelt theater in Los Angeles is Our flagship show is The Meltdown with Jonah and Kumail, hosted by Jonah Ray and Kumail Nanjiani, and produced by Emily Gordon. You can track The Meltdown minute to minute by following us on Twitter at @meltdown_show. We’ve hosted the likes of Donald Glover, Zach Galifianakis, Dana Gould, Brian Posehn, Ed Helms, Aziz Ansari, Robin Williams, Maria Bamford, Louie CK, Jeff Ross, David Spade, Marc Maron, and you never know who will drop by! We’ve been written up in LA Weekly, the LA Times, SplitSider, SpitTake, Los Angeles Magazine, Serial Optimist, and the LAist, we were profiled on Last Call with Carson Daly as well as Time Warner’s SoCal OnDemand. Kumail and Emily were chosen as two of the “most interesting people in LA” in LA Weekly‘s 2012 People issue. (Jonah’s very interesting too, we promise.)\r\n\r\nWe were named the #1 comedy show in Los Angeles by LA Weekly in 2012, crowned the best comedy show in LA by Splitsider, and named one of the top live shows in LA by Serial Optimist! And in May 2013, Hollywood Reporter named us one of the hottest places to see comedy in LA.\r\n\r\nIn 2014, TV version of The Meltdown with Jonah and Kumail, produced by Red Hour and directed by Lance Bangs, began filming for Comedy Central. \r\n\r\nQUOTES!\r\n\r\n“…the epicenter of LA’s alt-comedy scene.”   -Hollywood Reporter\r\n\r\n“An intimate li’l gallery space in the back of a comics shop hosts a packed lineup of truly superb comedians” -LA Weekly\r\n\r\n“Ray and Nanjiani are two of the funniest comedians going and they have a funny rapport with one another up top. Their show, produced by Emily Gordon, is as expertly-curated as Bang Bang was, with a nice mix of excellent unknowns and big names taking the stage each week.”  -Splitsider\r\n\r\n“The amount of love and enthusiasm put into this show is quite evident. From the very get go, you feel that you are part of something very special.” -Serial Optimist\r\n\r\n“With occasional live music and a near-naked host in a fireman’s uniform, it feels as if anything flies at “The Meltdown.” -LA Times\r\n\r\n“Kumail Nanjiani and Jonah Ray’s white-hot The Meltdown show packs ‘em in on a weekly basis” -LA Weekly\r\n\r\n“What binds the show together is the connection between its hosts; as both good friends and skilled comedians, Ray and Nanjiani work off each other seamlessly, guiding things along with expert control while making sure to let the spotlight shine brightest on their guests.” -SpitTake",
    Bio: "The flagship show of NerdMelt theater in Los Angeles is Our flagship show is The Meltdown with Jonah and Kumail, hosted by Jonah Ray and Kumail Nanjiani, and produced by Emily Gordon. You can track The Meltdown minute to minute by following us on Twitter at @meltdown_show. We’ve hosted the likes of Donald Glover, Zach Galifianakis, Dana Gould, Brian Posehn, Ed Helms, Aziz Ansari, Robin Williams, Maria Bamford, Louie CK, Jeff Ross, David Spade, Marc Maron, and you never know who will drop by! We’ve been written up in LA Weekly, the LA Times, SplitSider, SpitTake, Los Angeles Magazine, Serial Optimist, and the LAist, we were profiled on Last Call with Carson Daly as well as Time Warner’s SoCal OnDemand. Kumail and Emily were chosen as two of the “most interesting people in LA” in LA Weekly‘s 2012 People issue. (Jonah’s very interesting too, we promise.)\r\n\r\nWe were named the #1 comedy show in Los Angeles by LA Weekly in 2012, crowned the best comedy show in LA by Splitsider, and named one of the top live shows in LA by Serial Optimist! And in May 2013, Hollywood Reporter named us one of the hottest places to see comedy in LA.\r\n\r\nIn 2014, TV version of The Meltdown with Jonah and Kumail, produced by Red Hour and directed by Lance Bangs, began filming for Comedy Central. \r\n\r\nQUOTES!\r\n\r\n“…the epicenter of LA’s alt-comedy scene.”   -Hollywood Reporter\r\n\r\n“An intimate li’l gallery space in the back of a comics shop hosts a packed lineup of truly superb comedians” -LA Weekly\r\n\r\n“Ray and Nanjiani are two of the funniest comedians going and they have a funny rapport with one another up top. Their show, produced by Emily Gordon, is as expertly-curated as Bang Bang was, with a nice mix of excellent unknowns and big names taking the stage each week.”  -Splitsider\r\n\r\n“The amount of love and enthusiasm put into this show is quite evident. From the very get go, you feel that you are part of something very special.” -Serial Optimist\r\n\r\n“With occasional live music and a near-naked host in a fireman’s uniform, it feels as if anything flies at “The Meltdown.” -LA Times\r\n\r\n“Kumail Nanjiani and Jonah Ray’s white-hot The Meltdown show packs ‘em in on a weekly basis” -LA Weekly\r\n\r\n“What binds the show together is the connection between its hosts; as both good friends and skilled comedians, Ray and Nanjiani work off each other seamlessly, guiding things along with expert control while making sure to let the spotlight shine brightest on their guests.” -SpitTake",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/show-submissions/themeltdown.jpg",
    SubmittedId: "6866",
    SortOrder: "100",
    id: "6866",
    pageUrl: "6866-the-meltdown-with-jonah-and-kumail",
    events: [ "7659" ]
}, {
    Name: "Harmontown",
    Copy: "Recorded &amp; performed every Monday night at the Nerdmelt theater in Los Angeles, Harmontown a sprawling improvised forum from &quot;Community&quot; creator Dan Harmon where he engages with fans and nerds from all walks of life. Comptroller Jeff Davis of “Whose Line Is It Anyway?” fame does his best to maintain order in this no-holds-barred town hall meeting. Celebrity and comedian drop-ins happen regularly and the story element of an ongoing game of Dungeon &amp; Dragons builds week to week, run by audience member turned Dungeon Master Spencer Crittendon.",
    Bio: "Recorded &amp; performed every Monday night at the Nerdmelt theater in Los Angeles, Harmontown a sprawling improvised forum from &quot;Community&quot; creator Dan Harmon where he engages with fans and nerds from all walks of life. Comptroller Jeff Davis of “Whose Line Is It Anyway?” fame does his best to maintain order in this no-holds-barred town hall meeting. Celebrity and comedian drop-ins happen regularly and the story element of an ongoing game of Dungeon &amp; Dragons builds week to week, run by audience member turned Dungeon Master Spencer Crittendon.",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/show-submissions/harmontown.jpg",
    SubmittedId: "6867",
    SortOrder: "110",
    id: "6867",
    pageUrl: "6867-harmontown",
    events: [ "7670" ]
}, {
    Name: "Jonah Raydio",
    Copy: "Jonah Ray has some friends over to his house to drink, listen to music, and converse… with sexy results. Join Jonah, Lance Bangs and special guests for a live installment of this hit podcast on the Nerdist network.",
    Bio: "Jonah Ray has some friends over to his house to drink, listen to music, and converse… with sexy results. Join Jonah, Lance Bangs and special guests for a live installment of this hit Nerdist Network podcast.",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/show-submissions/jonahraydio.jpg",
    SubmittedId: "6869",
    SortOrder: "120",
    id: "6869",
    pageUrl: "6869-jonah-raydio",
    events: [ "7669" ]
}, {
    Name: "Set List: Stand-Up Without a Net",
    Copy: "From Paul Provenza and Troy Conrad…  Set List: Stand-Up Without A Net is currently a 14-episode TV series on Sky Atlantic in the UK starring Robin Williams, Maria Bamford, Gilbert Gottfried, Greg Proops, Fred Willard, Drew Carey, and more.  Comics are given outrageous, never-before-seen topics on a in the moment, and perform seamlessly as if its the act they normally do, while the audience follows the absurd, original topics on a projection screen.\r\nThis international sensation returns to Bridgetown from sold-out shows at festivals in Edinburgh, Melbourne, SXSW, Montreal, Toronto, Austria, London, and beyond. Set List runs monthly at UCB and Nerdmelt in Los Angeles.  The show is also currently a 60-episode web series on the Nerdist Channel with a new episode every Friday.  More info at:  www.setlistshow.com and follow the show on twitter at @SETLISTSHOW\r\n\r\n&quot;It is completely urgent and pertinent that any comedy geek see this wonderful cluster-fuck of comedy brilliance.&quot;  -Huffington Post   \r\n\r\n“The most exciting thing to happen in stand-up since the invention of the microphone.” -British GQ",
    Bio: "From Paul Provenza and Troy Conrad…  Set List: Stand-Up Without A Net is currently a 14-episode TV series on Sky Atlantic in the UK starring Robin Williams, Maria Bamford, Gilbert Gottfried, Greg Proops, Fred Willard, Drew Carey, and more.  Comics are given outrageous, never-before-seen topics on a in the moment, and perform seamlessly as if its the act they normally do, while the audience follows the absurd, original topics on a projection screen.\r\nThis international sensation returns to Bridgetown from sold-out shows at festivals in Edinburgh, Melbourne, SXSW, Montreal, Toronto, Austria, London, and beyond. Set List runs monthly at UCB and Nerdmelt in Los Angeles.  The show is also currently a 60-episode web series on the Nerdist Channel with a new episode every Friday.  More info at:  www.setlistshow.com and follow the show on twitter at @SETLISTSHOW\r\n\r\n&quot;It is completely urgent and pertinent that any comedy geek see this wonderful cluster-fuck of comedy brilliance.&quot;  -Huffington Post   \r\n\r\n“The most exciting thing to happen in stand-up since the invention of the microphone.” -British GQ",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/show-submissions/setlist.jpeg",
    SubmittedId: "6868",
    SortOrder: "120",
    id: "6868",
    pageUrl: "6868-set-list-stand-up-without-a-net",
    events: [ "8635", "7671" ]
}, {
    Name: "The Green Room with Paul Provenza",
    Copy: "Comedian and director of the obscenely hilarious hit film The Aristocrats, Paul Provenza invites some of the biggest names in stand-up to sit down and try to beat each other to the punch line. From politics and racism to sex and money, no topic is off limits in The Green Room. Roseanne Barr, Sandra Bernhard, Drew Carey, Andy Dick, Eddie Izzard, Penn Jillette and Bob Saget are just a few of Provenza&#039;s friends who have appeared in The Green Room to show what really goes on when comedians go off.",
    Bio: "Comedian and director of the obscenely hilarious hit film The Aristocrats, Paul Provenza invites some of the biggest names in stand-up to sit down and try to beat each other to the punch line. From politics and racism to sex and money, no topic is off limits in The Green Room. Roseanne Barr, Sandra Bernhard, Drew Carey, Andy Dick, Eddie Izzard, Penn Jillette and Bob Saget are just a few of Provenza&#039;s friends who have appeared in The Green Room to show what really goes on when comedians go off.",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/show-submissions/greenroom.jpg",
    SubmittedId: "6890",
    SortOrder: "120",
    id: "6890",
    pageUrl: "6890-the-green-room-with-paul-provenza",
    events: [ "7677" ]
}, {
    Name: "Jensen Karp &amp; Sean O&#039; Connor present The Live Read: The Boys Are Back!",
    Copy: "Jensen Karp and Sean O&#039;Connor invite their funny friends to read a actual movie script that is near and dear to their hearts, either from the past or from the near future.",
    Bio: "Jensen Karp and Sean O&#039;Connor invite their funny friends to read a actual movie script that is near and dear to their hearts, either from the past or from the near future.",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/show-submissions/theliveread.jpg",
    SubmittedId: "7605",
    SortOrder: "125",
    id: "7605",
    pageUrl: "7605-jensen-karp-amp-sean-o039-connor-present-the-live-read-the-boys-are-back",
    events: [ "7645" ]
}, {
    Name: "Prompter",
    Copy: "A new show from Troy Conrad (Creator of Set List: Stand-Up Without A Net)  Comics use a teleprompter to deliver a demented, bad-idea TED Talk-style presentation.  When the teleprompter unexpectedly goes blank throughout the talk, the performer must rely on their ability to improvise and continue their talk on the subject until the prompter comes back on. A sold-out hit at this years SF Sketchfest, the show will also be featured at the Edinburgh Fringe Festival in August. How much fun can comics have with a supposedly &quot;broken&quot; teleprompter? A lot, it turns out.   ",
    Bio: "A new show from Troy Conrad (Creator of Set List: Stand-Up Without A Net)  Comics use a teleprompter to deliver a demented, bad-idea TED Talk-style presentation.  When the teleprompter unexpectedly goes blank throughout the talk, the performer must rely on their ability to improvise and continue their talk on the subject until the prompter comes back on. A sold-out hit at this years SF Sketchfest, the show will also be featured at the Edinburgh Fringe Festival in August. How much fun can comics have with a supposedly &quot;broken&quot; teleprompter? A lot, it turns out.   ",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/show-submissions/prompter.jpeg",
    SubmittedId: "6891",
    SortOrder: "125",
    id: "6891",
    pageUrl: "6891-prompter",
    events: [ "7661" ]
}, {
    Name: "Competitive Erotic Fan ",
    Copy: "Competitive Erotic Fan Fiction is a live show (and popular podcast on the Nerdist Network) held every month at the Nerdmelt Theater in Los Angeles, created &amp; hosted by Bryan Cook. Each show features 10 comics, writing and performing Erotic Fan Fiction pieces, based upon their whims or audience suggestions. It&#039;s really stupid.\r\n\r\nCEFF tours nationally, year-round, and has been featured as part of:\r\nJust For Laughs (Chicago)\r\nBridgetown Comedy Festival (Portland)\r\nSan Francisco Sketchfest\r\nRiot LA (Los Angeles)  \r\nOutside Lands (San Francisco)\r\nBumbershoot (Seattle)\r\n\r\nCome see why Laughspin.Com said CEFF &quot;Might be one of my favorite comedy shows I’ve ever taken in. Period.&quot;",
    Bio: "Fan Fiction by comedians",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/show-submissions/ceff_podcast_logo.jpg",
    SubmittedId: "5903",
    SortOrder: "130",
    id: "5903",
    pageUrl: "5903-competitive-erotic-fan-",
    events: [ "7646" ]
}, {
    Name: "Baby Talk with Dan Levy &amp; Jensen Karp",
    Copy: "",
    Bio: "Baby Talk is a hilarious multi-media live roundtable show built around comedian and new father Dan Levy’s quest to avoid scarring his new son’s fragile psyche. The funniest names in comedy, including Jensen Karp in the DJ role, come together with the cutest faces in childhood, as a real life 7-year-old will sit down with the group and help explain what it takes to be a cool dad (as if Dan could ever be that).",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/show-submissions/baby_talk_february.jpg",
    SubmittedId: "6300",
    SortOrder: "135",
    id: "6300",
    pageUrl: "6300-baby-talk-with-dan-levy-amp-jensen-karp",
    events: [ "7639" ]
}, {
    Name: "Throwing Shade ",
    Copy: "Throwing Shade is the irreverent weekly political/absurdist comedy podcast &amp; Funny or Die web series hosted by Upright Citizens Brigade alums and Funny or Die writers Erin Gibson and Bryan Safi. Join Erin and Bryan and laugh at things you’re not supposed to, in person, for a night that we promise will be better than prom. \r\n\r\nConsistently in iTunes top ten comedy podcasts with a 5 star rating and with over 3 million downloads, Throwing Shade has cultivated a devoted and broad fan base - the LGBT community (homosensuals), savvy, smart ladies (feminasties), and straight dudes who “get it” (heterosensitives) - by using humor and absurdity to dismantle the unfair treatment of ladies and gays by politicians, the media, and people who don’t know any better. \r\n\r\nIn 2013, in addition to their weekly podcast, Throwing Shade became Funny or Die’s first successful, long-form web series. \r\n\r\nLast year they sold out their first live tour, performing at The Elbow Room in San Fran, Chop Suey in Seattle, Kelly’s Olympian in Portland, The Empty Bottle in Chicago, Lee’s Liquor Lounge in Minneapolis, The Comedy Bar in Toronto, The Black Cat in D.C., The OBERON in Boston, and The Bell House in Brooklyn.",
    Bio: "Throwing Shade is the irreverent weekly political/absurdist comedy podcast &amp; Funny or Die web series hosted by Upright Citizens Brigade alums and Funny or Die writers Erin Gibson and Bryan Safi. Join Erin and Bryan and laugh at things you’re not supposed to, in person, for a night that we promise will be better than prom.\r\n\r\nConsistently in iTunes top ten comedy podcasts with a 5 star rating and with over 3 million downloads, Throwing Shade has cultivated a devoted and broad fan base - the LGBT community (homosensuals), savvy, smart ladies (feminasties), and straight dudes who “get it” (heterosensitives) - by using humor and absurdity to dismantle the unfair treatment of ladies and gays by politicians, the media, and people who don’t know any better.\r\n\r\nWinner of Podcast Awards “Best GLBT Podcast” 2013\r\nNamed one of Paste Magazine’s top 20 comedy podcasts of 2013\r\n&quot;Lacking any sort of filter, UCB veterans Erin Gibson and Bryan Safi are equal- opportunity offenders, discussing current events with a politically incorrect sense of humor. Their aggressively energetic personalities give the show a bit of a morning shock-jock feel, if shock jocks spent even more time talking about genitals.&quot; – The A.V. Club\r\n\r\n",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/show-submissions/squareposterpodcastsm.jpg",
    SubmittedId: "5909",
    SortOrder: "145",
    id: "5909",
    pageUrl: "5909-throwing-shade-",
    events: [ "7644" ]
}, {
    Name: "The Bone Zone",
    Copy: "Step into the first ever Live Bone Zone Podcast with Brendon Walsh and Randy Liedtke! The Bone Zone podcast is one of the only comedy podcasts in the world, with a focus on silliness, blatant lies, confusion, good ideas, prank phone calls, sound effects, being annoying, and poop songs. The Bone Zone is the podcast you would have made with your friends when you were 10 years old if you were really smart and funny.",
    Bio: "Step into the first ever Live Bone Zone Podcast with Brendon Walsh and Randy Liedtke! The Bone Zone podcast is one of the only comedy podcasts in the world, with a focus on silliness, blatant lies, confusion, good ideas, prank phone calls, sound effects, being annoying, and poop songs. The Bone Zone is the podcast you would have made with your friends when you were 10 years old if you were really smart and funny.",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/show-submissions/bonezone_atc.jpg",
    SubmittedId: "7589",
    SortOrder: "150",
    id: "7589",
    pageUrl: "7589-the-bone-zone",
    events: [ "7675" ]
}, {
    Name: "The CrabFeast Podcast",
    Copy: "The CrabFeast is a podcast hosted by comedians Ryan Sickler and Jay Larson.  The show focuses on storytelling with new episodes every Toozdee.\r\n\r\nThe chemistry between Ryan and Jay enables them to take the conversation anywhere, often making light of some heavier subjects.  They make their guests feel like family and their listeners feel like they’re sitting around sharing stories with old friends. \r\n\r\nThey’ve appeared on TBS&#039;s The Pete Holmes Show and The Damon Bruce Radio Show and were finalists in the 2013 Stitcher Awards for Best Comedy Podcast.  They’ll be performing at the 2014 Bridgetown Comedy Festival &amp; the 2014 Maui Comedy Festival.  \r\n\r\nPull up a chair, grab a coupla cold ones and laugh.\r\n\r\n#FTCF *****",
    Bio: "The CrabFeast is a Conversational Storytelling podcast which features comedians and all around funny people.  The podcast is hosted by comedians Ryan Sickler and Jay Larson.  The CrabFeast is released every Toozdee on itunes, stitcher, Sound Cloud, All Things Comedy and of course www.TheCrabFeast.com.  With a loyal fan base and great guests the CrabFeast hit the ground running in 2012 and has never looked back.  A staple in comedy podcasts, The CrabFeast was nominated for a Stitcher award in 2013 for &quot;Best Comedy Podcast&quot; going up against Adam Carolla, Comedy Bang Bang, Marc Maron and Kevin Smith.  Most recently The CrabFeast was featured on The Pete Holmes show on TBS.  Past guests include, Adam Carolla, Bill Burr, Brandt Tobler, Pete Holmes, Mick Bettancourt, Jen Kirkman, Retta, Steve Lemme, Kevin Heffernan, Chris d&#039;elia, TJ Miller, Bryan Callen, Todd Glass, Tig, Anna Ferris, Nick Thune and many more.  #FTCF  #*****",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/show-submissions/mza_5507055011706856334.255x255-75.jpg",
    SubmittedId: "6811",
    SortOrder: "150",
    id: "6811",
    pageUrl: "6811-the-crabfeast-podcast",
    events: [ "7668" ]
}, {
    Name: "The Wahlberg Solution!",
    Copy: "Musician, Model, Actor, Producer, Entrepreneur, Inspiration, Better Than You.\r\n\r\nMark Wahlberg makes great decisions, he knew when to get out of Rap-Music, he&#039;s crafted a perfect body, and he told Donnie to be in a boy-band. After decades of using his knowledge to only benefit himself, Mark has teamed up with other celebrities and friends for &quot;The Wahlberg Solution!&quot; a roundtable discussion of current news and events that will sort out the world&#039;s problems as only an A-List celebrity can.",
    Bio: "Musician, Model, Actor, Producer, Entrepreneur, Inspiration, Better Than You.\r\n\r\nMark Wahlberg makes great decisions, he knew when to get out of Rap-Music, he&#039;s crafted a perfect body, and he told Donnie to be in a boy-band. After decades of using his knowledge to only benefit himself, Mark has teamed up with other celebrities and friends for &quot;The Wahlberg Solution!&quot; a roundtable discussion of current news and events that will sort out the world&#039;s problems as only an A-List celebrity can.",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/show-submissions/dvk-parks-625x351.png",
    SubmittedId: "7519",
    SortOrder: "150",
    id: "7519",
    pageUrl: "7519-the-wahlberg-solution",
    events: [ "7638" ]
}, {
    Name: "Mary Mack&#039;s North Star Comedy Hour &amp; Meat Raffle",
    Copy: "Mary Mack&#039;s North Star Comedy Hour &amp; Meat Raffle*\r\n\r\nThe North Star Comedy Hour &amp; Meat Raffle is a variety show featuring good acts and bad meat--raffled off by a fake butcher.  Nationally touring Folk Humorist Mary Mack (usually paired with accordion player Tom Fosmire) is both band and host.  Complete with sing along theme song, this is an interactive comedy show featuring a variety of partially sober performers.  Genres represented in the past have included but are not limited to music, comedy, storytelling, poetry, regular dancing, angry dancing, pet education, French chanson de geste (a retrospective), and Spanish-American War reenactment.  \r\n\r\nMary Mack is a favorite on radio shows and podcasts around the country, including Marc Maron&#039;s WTF Podcast, The Bob and Tom Show, and previous seasons of American Public Media&#039;s WITS live show and podcast.  Her comedy (spotted with occasional mandolin or clarinet outbursts) has  been seen in the Vancouver Comedy Fest, HBO&#039;s Andy Kaufman Awards, Montreal’s Just For Laughs Festival, the San Francisco Sketch Fest &quot;Dozen,&quot; and on Adult Swim.  She had her national TV debut on Comedy Central&#039;s Live at Gotham and NBC&#039;s Last Comic Standing, and is a main voice on Fox&#039;s late night animation block beginning January 2014.   ",
    Bio: "Mary Mack&#039;s North Star Comedy Hour &amp; Meat Raffle*\r\n\r\nPerformed around various parts of the country for the last six years, The North Star Comedy Hour &amp; Meat Raffle is a variety show featuring good acts and bad meat--raffled off by a fake butcher.  Nationally touring Folk Humorist Mary Mack (usually paired with accordion player Tom Fosmire) is both band and host.  Complete with sing along theme song, this is an interactive comedy show featuring a variety of partially sober performers.  Genres represented in the past have included but are not limited to music, comedy, storytelling, poetry, regular dancing, angry dancing, pet education, French chanson de geste (a retrospective), and Spanish-American War reenactment.  \r\n*Performances usually have one vegan option, or at least some broth.\r\n ",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/show-submissions/mack_meat_raffle_icon.png",
    SubmittedId: "6537",
    SortOrder: "200",
    id: "6537",
    pageUrl: "6537-mary-mack039s-north-star-comedy-hour-amp-meat-raffle",
    events: [ "7650" ]
}, {
    Name: "The JV Club",
    Copy: "Remember what it was like to be an awkward teenager? And remember how some things haven&#039;t really changed that much for you since then? Join proud dork Janet Varney as she explores the highs and lows of the bygone years with very special guest Carrie Brownstein in this live version of The JV Club!",
    Bio: "Remember what it was like to be an awkward teenager? And remember how some things haven&#039;t really changed that much for you since then? Join proud dork Janet Varney as she explores the highs and lows of the bygone years with some of her favorite women as they talk their way through the terrible teens into adult-lescence. Warning: This Podcast Contains Sincerity.",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/show-submissions/jv_club_logo.jpg",
    SubmittedId: "7780",
    SortOrder: "200",
    id: "7780",
    pageUrl: "7780-the-jv-club",
    events: [ "7676" ]
}, {
    Name: "This Feels Terrible",
    Copy: "Comedian and repeat relationship failure Erin McGathy talks love, sex and all matters of heartbreak in the podcast version of her live show originally performed at the Upright Citizen&#039;s Brigade Theatre. Each week features a revealing, intimate and joyfully-terrible conversation with a different comedian friend, famous-ish person or drunk ex-boyfriend. Let&#039;s get terrible.",
    Bio: "Comedian and repeat relationship failure Erin McGathy talks love, sex and all matters of heartbreak in the podcast version of her live show originally performed at the Upright Citizen&#039;s Brigade Theatre. Each week features a revealing, intimate and joyfully-terrible conversation with a different comedian friend, famous-ish person or drunk ex-boyfriend. Let&#039;s get terrible.",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/show-submissions/thisfeelsterrible.jpg",
    SubmittedId: "7779",
    SortOrder: "200",
    id: "7779",
    pageUrl: "7779-this-feels-terrible",
    events: [ "7674" ]
}, {
    Name: "All That Could Have Been",
    Copy: "Writers write a lot of things for submission packets that pass through a producer&#039;s inbox and then never see the light of day. This is our chance to perform our hard work and have a little fun in the process. Created and produced by Todd Masterson. With submissions from The Ellen DeGeneres Show, Chelsea Lately, Late Night with Jimmy Fallon, Saturday Night Live, and much, much more. This night is nutty and a whole lot of fun!",
    Bio: "After going on strike from writing Fashion Police, I&#039;ve been submitting to tons of other shows trying to find work. I created this show for writers to read the submissions they&#039;ve written for television shows and magazines that never got them the job. We work really hard and sometimes never get so much as a &quot;thank you.&quot; If we&#039;re not going to be paid in money or employment, we might as well be paid in laughter! \r\nLast night was the first time I put the show up and it was a hit. I didn&#039;t get any video from the show, but I do have the opening video that I played at the beginning of the night. \r\nIf this show gets selected for the festival, I&#039;m sure I could put it together with people that will already be there (I&#039;m assuming.) Like Bryan Cook, Eliza Skinner, Brock Wilbur, Solomon Georgio, and any other of my friends that are submitting. I think this show would be a great fit!",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/show-submissions/btown_show_poster.jpg",
    SubmittedId: "6356",
    SortOrder: "300",
    id: "6356",
    pageUrl: "6356-all-that-could-have-been",
    events: [ "7678" ]
}, {
    Name: "Before You Were Funny",
    Copy: "￼￼Justin Michael and Jacob Reed present Before You Were Funny: the most entertainingly bad comedy show (and podcast) the world has never seen (or heard)! We&#039;ve raided the Awful Sketch Vaults of yesteryear and asked our favorite comedians to bring in their earliest, worst sketches... and perform them LIVE. There’s no time to prepare, no time to memorize lines, and nobody but the writer has read them beforehand. It will BLOW YOUR MIND.",
    Bio: "￼￼Justin Michael and Jacob Reed present Before You Were Funny: the most entertainingly bad comedy show (and podcast) the world has never seen (or heard)! We&#039;ve raided the Awful Sketch Vaults of yesteryear and asked our favorite comedians to bring in their earliest, worst sketches... and perform them LIVE. There’s no time to prepare, no time to memorize lines, and nobody but the writer has read them beforehand. It will BLOW YOUR MIND.\r\n\r\nTHE PODCAST / LIVE UCB SHOW\r\nWe release episodes of the podcast twice a month and perform the show during a regular slot at UCB Los Angeles. We&#039;ve also taken the show to SF Sketchfest, will be going to SXSW, and just completed shooting a video version of the show for Funny or Die. \r\n\r\nEach live show / episode lasts about an hour to an hour and a half. The two of us + ­3 guests present a smattering of the worst sketches, pilots, school projects,  stand­up and anything in between that they ever written as a blind table read while stopping to interrupt and poke fun of things along the way. We glance at scripts beforehand, but our goal is to try and keep things surprising by limiting everyone’s knowledge of the material involved, including our own. The writer is only allowed to read stage direction as not to make the material any better than it is. \r\n\r\nSAMPLE EPISODES!\r\n\r\nDan Harmon, Mary Holland, Allan Mcleod\r\nhttp://beforeyouwerefunny.com/2013/09/episode-27-dan-harmon-mary-holland-allan-mcleod/\r\n\r\nRob Delaney, Matt Walsh, Casey Wilson (video also provided for this one)\r\nhttp://beforeyouwerefunny.com/2013/01/episode-10-rob-delaney-matt-walsh-casey-wilson/\r\n\r\nJames Adomian, Mary Lynn Rajskub, Daniel Handler\r\nhttp://beforeyouwerefunny.com/2013/01/episode-11-james-adomian-mary-lynn-rajskub-daniel-handler/\r\n\r\nA bunch more at www.beforeyouwerefunny.com or https://itunes.apple.com/us/podcast/before-you-were-funny/id547153481?mt=2\r\n\r\nThank you!\r\nJustin + Jacob",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/show-submissions/329318_210309669095515_1941054043_o_0.jpg",
    SubmittedId: "6801",
    SortOrder: "300",
    id: "6801",
    pageUrl: "6801-before-you-were-funny",
    events: [ "7739" ]
}, {
    Name: "Brew Haha: The Comedy Show Drinking Game",
    Copy: "The Brew HaHa is Los Angeles’ premiere interactive comedy show/drinking game. One part comedy show, two parts drinking game, Brew Haha is a homegrown cocktail of debauchery and laughter that will make one homesick for the college days. Started by budding comedians in early 2013, The Brew Haha has become an underground sensation to those in the know. Before the first comic goes on stage, rules for the game are explained only to the audience. When comics, unbeknownst to them, break a rule, a light signals and the audience drinks. The rules are simple, but nobody is forced to participate, and the hosts ensure everyone gets home safe. It is a show that evokes that impossibly cool, fun speakeasy one might see in a film or on TV. Except this one is all too real, the comics all too funny, people all too friendly. So if you get the chance, make sure you experience the show that a famous comedian once called &quot;the worst idea for a show ever.&quot;",
    Bio: "Brew Haha is a Los Angeles based interactive comedy show/ drinking game featuring two games, 6 comedians, a couple characters, and, given the right venue, an amazing post show party. Each show has different rules, but operates under the same structure. Here is what one can expect when coming to a Brew HaHa:\r\n\r\n • The HOST of the night comes to the stage and tells the funniest, craziest stories from parties past.\r\n\r\n• The HOST then takes the comics inside (so they can’t hear the rules of the drinking game) and introduces the “Rule Master”. The RM teaches the audience about the “DRINK” sign (every time it lights up, a rule has been broken, and the audience takes a drink) and gives them the rules for the night. There are 5 set rules and 1 audience created rule. See below for some example rules. \r\n\r\n• The HOST comes back out, introduces all of the comics, and has them choose their order for the night out of a hat. Their place in the lineup determines the number of drinks they consume before their set. If you are comic #2, you have two drinks; if you are comic #6, six drinks.\r\n\r\n• The HOST then introduces JIMMY THE BARTENDER, who leads the comics and the audience in the bartenders toast, signifying the beginning of the show. The HOST introduces the first comic and the show begins.\r\n\r\n• During each set the rules broken are counted, and the comic who comes up next has to drink for that many seconds before they perform (ex. If comic #1 breaks 10 rules, comic #2 drinks for 10 seconds).\r\n\r\n• The show always ends with the hosts drinking for the amount of rules broken by the last comic. The rules are simple, but nobody is forced to participate, and the hosts ensure everyone gets home safe.\r\n\r\n• After the show, given the time and space…party time!\r\n\r\nExample Rules:\r\n\r\n• When a comic talks about a romantic relationship, past or present. \r\n• When a comic talks to a specific member of the audience.\r\n• When a comic tries to guess a rule.\r\n• When a comic talks about race.\r\n• When a comic uses a funny voice, or sings.",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/show-submissions/brewhaha.jpg",
    SubmittedId: "6347",
    SortOrder: "300",
    id: "6347",
    pageUrl: "6347-brew-haha-the-comedy-show-drinking-game",
    events: [ "7805" ]
}, {
    Name: "Hot Comedy w/The Spicy News",
    Copy: "Conceived by Portland comedian and Oregon native Craig May, The Spicy News was born when a group of friends believed that it would be funny to watch comedians read celebrity gossip, but only after eating one of the hottest naturally occurring chillies on the planet. After soliciting the help of local hero and champion of industry, Ian Karmel, The Spicy News quickly began to carve out a following of comedy enthusiasts, and masochists alike.\r\n\r\nOver the past year Spicy has solicited help from some of the Portland’s top comedians, and some of LA and NYC’s finest as well, not only including Pete Holmes, Kyle Kinane, Mary Mack, Myq Kaplan, Andy Haynes, Nick Turner, Dave Hill, Brandon Vaughn, Nate Bargatze, and Ian Karmel. Spicy was also recently featured on Oregon Public Broadcasting’s Live Wire Radio, and has been featured at the Brody Theater in Portland, OR, The Comedy Underground in Seattle, WA, and the Bumbershoot Music &amp; Arts Festival.\r\n\r\n&quot;So dumb it&#039;s actually kind of funny&quot; \r\n~The Portland Mercury\r\n\r\nOn a scale from one to ten, Spicy News is incredibly dumb, yet surprisingly refreshing.",
    Bio: "For the show, we would essentially have 5-7 comics attempt to perform their original comedy after eating a habanero pepper, in addition to having a live Spicy News, and a  live Spicy Interview, which you can see examples of in our submission video. Additional info regarding show is in the second half of our submission video. ",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/show-submissions/spicy_news_0.jpg",
    SubmittedId: "6734",
    SortOrder: "300",
    id: "6734",
    pageUrl: "6734-hot-comedy-wthe-spicy-news",
    events: [ "7806" ]
}, {
    Name: "Late Night Action w/ Alex Falcone &amp; Bri Pruett",
    Copy: "A live talk show all about the stuff that makes Portland fucking awesome. Featuring local celebrities, comedians, and musical guests, Late Night Action is fast, sharp, and local.\r\n\r\nLNA is hosted by the quick and funny Alex Falcone (Portlandia, Live Wire! Radio, Portland Mercury) and wise-crackin&#039; side kick Bri Pruett (Willamette Week&#039;s Funniest 5) and directed by Caitlin Kunkel (Second City). ",
    Bio: "Late Night Action is a live talk show in the style of Conan if he did his show in a Portland garage. It features a topical monologue, celebrity guests, comedians, and local bands, all focused on the Portland area. LNA is hosted by the quick and funny Alex Falcone (Portlandia, Live Wire! Radio, Portland Mercury) and wise-crackin&#039; side kick Bri Pruett (Willamette Week&#039;s Funniest 5) and directed by Caitlin Kunkel (Second City). ",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/show-submissions/square.jpg",
    SubmittedId: "6585",
    SortOrder: "300",
    id: "6585",
    pageUrl: "6585-late-night-action-w-alex-falcone-amp-bri-pruett",
    events: [ "7810" ]
}, {
    Name: "No Pun Intendo ",
    Copy: "Gifted at video games? Not gifted? Who cares! No Pun Intendo is Bridgetown’s first in-house video game competition and if you’re there, you’re eligible to compete! Audience teams will be formed and battles will be fought featuring games like Mortal Kombat, Street Fighter, and Injustice. The show will also feature stand up and gaming trivia.  Produced by Ground Kontrol Classic Arcade, Ron Funches, David Cope, Bette Bentley, Raishawn Wickwire and Steven Wilber.",
    Bio: "Promotional Blurb: \r\n\r\nGifted at gaming? Not gifted at gaming?  Who cares? Welcome to No Pun Intendo -  the Nerdist Theater’s first in house video game competition. If you’re there, you’re eligible to play. Produced and hosted by Ron Funches, David Cope, and Bette Bentley. Audience teams will be formed and battles will be fought featuring games like Soul Calibur, Super Smash Bros, and Street Fighter. Special comedian guests and grand prizes await - sponsored by Portland&#039;s very own Ground Kontrol. \r\n\r\nTHE FACTS:\r\n\r\n - No Pun Intendo is a comedy gaming contest. Acting as team captains, Ron Funches and David Cope form teams from the audience and pit players against each other \r\n   on games we&#039;re playing live at the venue. That means we&#039;re bringing our Xbox down, plugging in, the whole nine yards. Comedian guests help mix things up as \r\n   gamers take each other on. David Cope&#039;s real life fiancé and producer at Funny or Die will be there for post gaming interviews. \r\n\r\n - We&#039;re already a repeat performance at The Nerdist Theater in L.A. Our next show is January 24th.\r\n\r\nCOMEDIAN GUESTS: \r\n\r\n - Our last comedian guests included Richard Bain and Brent Weinbach. On Jan 24th we&#039;re featuring Andy Peters and Josh Fadem. Given we&#039;re accepted for Bridgetown   \r\n   this April,  David and Ron would likely find gaming enthusiast comedians already booked for Bridgetown who&#039;d already be in town and pumped to be part of a \r\n   gaming contest. \r\n\r\nNOTE: \r\n\r\n - The poster we&#039;re supplying is the poster we&#039;ve been using to promote our prior shows. If we&#039;re accepted into Bridgetown we&#039;d update it with the current \r\n    performers.\r\n - No video link BUT here&#039;s a photo collection for our last No Pun Intendo at The Nerdist Theater in L.A.:   http://tinyurl.com/ly7z6al\r\n\r\n\r\n\r\n   ",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/show-submissions/nopunintendo.jpg",
    SubmittedId: "5921",
    SortOrder: "300",
    id: "5921",
    pageUrl: "5921-no-pun-intendo-",
    events: [ "7967" ]
}, {
    Name: "PERSONA! with Tony Sam",
    Copy: "Persona! A comedy show with character(s)\r\n\r\nThis unique and hilarious show is full of surprises! Featuring the many faces of Tony Sam (Writer for MTV&#039;s Ridiculousness, G4, Fuel TV) as host along with stand-up comedians performing as their funniest characters,  the show has been called by Laughspin Magazine, &quot;A total riot” and ”a stand out,&quot; at both prior sold-out appearances during the Bridgetown Comedy Festival.\r\n \r\nThe Comedybureau.com says the show is &quot;artistry in comedy at work...spectacular...fantastic&quot;, and the Portland Mercury says it is undeniably “funny”.  While the show features various acts, CultureMob.com says Sam and his multiple characters in Persona! are “particularly terrific” and “some of the best parts.&quot; \r\n\r\nCome experience the unexpected at Persona!",
    Bio: "Persona! A comedy show with character(s)\r\n\r\nThis unique and hilarious show is full of surprises! Featuring the many faces of Tony Sam as host along with stand-up comedians performing as their funniest characters,  the show has been called by Laughspin Magazine, &quot;A total riot” and ”a stand out,&quot; at both prior sold-out appearances during the Bridgetown Comedy Festival.\r\n \r\nThe Comedybureau.com says the show is &quot;artistry in comedy at work...spectacular...fantastic&quot;, and the Portland Mercury says it is undeniably “funny”.  While the show features various acts, CultureMob.com says Sam and his multiple characters in Persona! are “particularly terrific” and “some of the best parts.&quot; \r\n\r\nCome experience the unexpected at Persona!",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/show-submissions/presona-bridgetown.jpg",
    SubmittedId: "6131",
    SortOrder: "300",
    id: "6131",
    pageUrl: "6131-persona-with-tony-sam",
    events: [ "7804" ]
}, {
    Name: "Probably Science",
    Copy: "Three professional comedians and incompetent scientists take you through the week in science. Incompetently. Featuring Matt Kirshen (Late Night with Jimmy Fallon, Nerdist, Last Comic Standing), Andy Wood (Bridgetown Comedy Festival, LA Podcast Festival), Jesse Case (Just For Laughs, Live At Gotham, Last Comic Standing), and, until a few months ago when he met Lorne Michaels, co-host Brooks Wheelan (Saturday Night Live), with special guests from the world of science and comedy.\r\n\r\nPast guests have included Chris Hardwick, Karen Gillan, Rhys Darby, Peter Serafinowicz, Gallagher (sorry about that one), The Sklar Brothers, TJ Miller, and scientists Dr. Sean Carroll and Dr. Janna Levin.\r\n\r\nIt’s the most topical, up-to-date, half-assed science, delivered straight to you in bite-sized comedy chunks.",
    Bio: "Three professional comedians and incompetent scientists take you through the week in science. Incompetently. Featuring Matt Kirshen (Late Night with Jimmy Fallon, Nerdist, Last Comic Standing), Andy Wood (Bridgetown Comedy Festival, LA Podcast Festival), Jesse Case (Just For Laughs, Live At Gotham, Last Comic Standing), and, until a few months ago when he met Lorne Michaels, co-host Brooks Wheelan (Saturday Night Live), with special guests from the world of science and comedy.\r\n\r\nPast guests have included Chris Hardwick, Karen Gillan, Rhys Darby, Peter Serafinowicz, Gallagher (sorry about that one), The Sklar Brothers, TJ Miller, and scientists Dr. Sean Carroll and Dr. Janna Levin.\r\n\r\nIt’s the most topical, up-to-date, half-assed science, delivered straight to you in bite-sized comedy chunks.",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/show-submissions/probablysciencesallyart.jpg",
    SubmittedId: "7781",
    SortOrder: "300",
    id: "7781",
    pageUrl: "7781-probably-science",
    events: [ "7642" ]
}, {
    Name: "The Blackout Diaries",
    Copy: "The Blackout Diaries is a comedy show were standup comedians, plus ‘regular’ people (cops, firefighters, teachers, etc) tell true drinking stories. Then you, the audience can ask them questions.  Participants also bring photos, voicemails and videos from the events, which are displayed while they tell the stories, to hilarious effect.\r\n\r\nThe show was developed in Chicago, where it regularly sells-out and has been named one of the best live comedy shows (Chicago Tribune, Chicago Reader, and more).  It has appeared in several comedy festivals and was launched as a podcast in late 2013.  Fans describe the show as a &quot;reverse AA meeting&quot; where people  tell hilariously embarrassing stories, only to receive laughter and further encouragement to drink.",
    Bio: "The Blackout Diaries is a comedy show were standup comedians, plus ‘regular’ people (cops, firefighters, teachers, etc) tell true drinking stories. After each person tells a story, the host, Sean Flannery, then moderates a Q&amp;A session where the audience can ask questions about the story (&quot;were you arrested?&quot;, &quot;what happened to the car?&quot;, etc).  The show is multimedia: if people have photos or voicemails or videos from their drinking stories, we display those while they share the story.\r\n\r\nTypically, we book 3 comics and 2 &#039;normal people&#039; per show.  When the show travels, the normal people are usually fans of our podcast or we reach out to local bars or breweries that might be interested in participating.  Either way, we usually find a few avid drinkings who are excited to participate.  For comics, at festivals, we typically pull our them from the festival pool.  The show has appeared at Just For Laughs (Chicago), Laugh Fest (Grand Rapids) and Dallas Comedy Festival.\r\n\r\nThe show is 90 minutes long, but can be done as a shorter version.  Past performers on the show include Kyle Kinane, Matt Braunger, Hannibal Burres, and more.  In Chicago, the show averages just under 100 people a week and has been a critics pick in most newspapers.",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/show-submissions/latenightbeerrun_lowres.jpg",
    SubmittedId: "6143",
    SortOrder: "300",
    id: "6143",
    pageUrl: "6143-the-blackout-diaries",
    events: [ "7742" ]
}, {
    Name: "The Comedy Bull",
    Copy: "The Comedy Bull show is a unique comedy format. Each comedian gets a chance to demonstrate their best comedy material and ability to work under pressure  Each performer is given time for the prepared material -and depending on the strength of it, with tasks to riff with audience, rant on the subject given by spectators, play improvisational games. Each comedian has to sweat for the time on stage.One who  makes you laugh harder -  tames &quot;The Comedy Bull&quot;. Our biggest winner is always the audience!",
    Bio: "Competitive Stand Up with elements of improvisation \r\n\r\nEach competitor gets 4 minutes to perform comedy set and being judged by a panel of 3 judges chosen by the producer of the show.\r\n\r\nAfter 4 minute mark judges may (depending on quality /intensity of the set) allow the performer to continue longer or be stopped  and challenged  to perform one of the following improvisational tasks\r\n\r\n1.Crowd work - comedian asked to interact with the audience.\r\n\r\n2.Rant on the subject - subject is chosen by the judges from one of the suggestions given by  the audience (performer expected to come up with a funny rant on that subject).\r\n\r\n3.&quot;Corrida&quot;- AKA improvisational game of NEW CHOICE - each time the judges ring a bell   - previously said sentence has to be rephrased with the different choice of words \r\n\r\n4. Interpret an image - performer is required to comment /interpret on the random image  projected on screen at that time.\r\n\r\nDuring those tasks the performers are challenged to hold the interest/engagement of the audience for as long as possible \r\nPerformer which holds stage the longest ( time of the set before the interruption by the judges + time of the challenge before the interruption by the judges) wins competition and determined to be the funniest performer of the night. \r\n\r\nThree (3) strongest performers move to next round.\r\n\r\n   ",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/show-submissions/bull_comedian_likearock3_small.jpg",
    SubmittedId: "5936",
    SortOrder: "300",
    id: "5936",
    pageUrl: "5936-the-comedy-bull",
    events: [ "7807" ]
}, {
    Name: "The Mystery Box Show",
    Copy: "Get ready to unzip your storypants as some of your favorite comedians share true sexual stories from their lives, unscripted and without notes.  \r\n\r\nThe Mystery Box Show is Portland, Oregon&#039;s only storytelling event that focuses solely on tales of sex and sexuality. Past storytellers include nationally-touring comedians, best-selling authors of erotica, sex educators, adult video industry veterans, students, and professionals from all walks of life. With a primary focus on entertainment, these stories offer plenty of laughs, and truly vulnerable moments, spanning the spectrum from the vanilla to the uber-kinky, from the hilariously embarrassing to the heartbreakingly moving.\r\n\r\nJoin us for a special Bridgetown 2014 edition of The Mystery Box Show and find out just what secrets will be revealed!",
    Bio: "The Mystery Box Show (http://www.mysteryboxshow.com) is a live storytelling series based in Portland, OR that focuses on stories of sex and sexuality. Following the traditions of live storytelling set by shows like The Moth and Kevin Allison&#039;s RISK!, The Mystery Box Show features real people sharing true personal stories about the many ways that sex influences our lives. \r\n\r\nStorytellers at The Mystery Box Show have included bestselling authors, nationally touring comedians, an editor from Playboy TV, a sex toy expert, members from the kink community, students, and professionals from all walks of life. With a primary focus on entertainment, it&#039;s often surprising how touching and heartfelt these stories can be while other stories may inspire listeners to chase after recently-awakened desires.\r\n\r\nPerforming since April of 2012, The Mystery Box Show has appeared regularly in Portland, OR as a bi-monthly show and putting in special appearances at events such as Wordstock and OMSI After Dark, as well traveling to the 2013 Arse Elektronika festival in San Francisco.  \r\n\r\nFor more information, please contact producers Eric Scheur (eric@mysteryboxshow.com) or Reba Sparrow (reba@mysteryboxshow.com)",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/show-submissions/mbs-stack02-tag02_500x500.png",
    SubmittedId: "5871",
    SortOrder: "300",
    id: "5871",
    pageUrl: "5871-the-mystery-box-show",
    events: [ "7811" ]
}, {
    Name: "The Very Important Show",
    Copy: "All Michael Busch wants to do is finish performing his one man opus -\r\nLove: A Very Important One Person Show. Unfortunately, no one else seems to think this is a\r\ngood idea as Michael is interrupted by audience members, stage crew, homeless people and his own agent. \r\n\r\nMichael Busch is a comedian from Los Angeles who is a regular performer at The Upright Citizens Brigade Theatre. His television credits include Human Giant, Conan, Pretty Little Liars, and a series of Alltel commercials.",
    Bio: "Here&#039;s the original version at UCB: http://losangeles.ucbtheatre.com/shows/view/3407\r\nIt was on Valentine&#039;s Day, but can work outside of the holiday, just make it generally about love.\r\n\r\nLove: The Show\r\nAll Michael Busch wants to do is finish performing his one man opus -\r\nLove: The Show. Unfortunately, no one else thinks this is a\r\ngood idea.\r\n\r\nWith:\r\nStephanie Allynne\r\nKyle Mooney\r\nJohnny Pemberton\r\nPower Violence\r\nBonafide\r\nDavid Harris\r\nGilli Nissim\r\nMarissa Gallant &amp; Joe Stakun\r\nBrian Cooperman, Dan Banas, and Amalia Fite\r\nLindsey Barrow\r\n\r\nBasically, I keep trying to do my pretentious one person show, characters keep interrupting me and I interact with them on stage. \r\n\r\nAgain, I think there would be enough people at the festival to do this show. ",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/show-submissions/mbuschheadshot3.jpg",
    SubmittedId: "5899",
    SortOrder: "300",
    id: "5899",
    pageUrl: "5899-the-very-important-show",
    events: [ "7741" ]
}, {
    Name: "Weird and Awesome with Emmett Montgomery",
    Copy: "Weird and Awesome w/ Emmett Montgomery is a monthly parade of wonder and awkward sharing hosted and curated by mustache wizard Emmett Montgomery. Each show features brilliant people doing the things they are really good at doing or something they have never done on stage before. ",
    Bio: "Weird and Awesome with Emmett Montgomery is a love letter to the strangeness and talent that walks among us. Each show features brilliant people doing things outside of their comfort zones or the things they are really good at. Prizes are won! Friends are made! Nightmares are shared and Joy is experienced!\r\n\r\nTravis Vogt and Kevin Clarke will do something amazing!\r\n\r\nThere will be a song and story.\r\n\r\nThere will be sharing.\r\n\r\nSomething awesome will happen.\r\n\r\nA special closing set featuring the dynamic joke telling of a comedian of note will occur.\r\n\r\nWe will win prizes made by local arts and crafters!\r\n\r\n* Weird and Awesome with Emmett Montgomery has been a part of both the comedy stage and the theater stage at Bumbershoot over the years. We will format the show to what works best at Bridgetown and will use primarily Bridgetown performers. ",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/show-submissions/getinline_0.jpg",
    SubmittedId: "6682",
    SortOrder: "300",
    id: "6682",
    pageUrl: "6682-weird-and-awesome-with-emmett-montgomery",
    events: [ "7651" ]
}, {
    Name: "Hang Out With Me live podcast taping with Myq Kaplan",
    Copy: "Hang Out With Me is a live podcast taping show featuring host Myq Kaplan hanging out and chatting with two other fun folks. Past guests have included Maria Bamford, Todd Barry, Rachel Dratch, rapper MC Paul Barman, author AJ Jacobs, and many more. Last year&#039;s show at Bridgetown featured Laura Kightlinger and Moshe Kasher. This year, who knows! (Someone, eventually.) Enjoy!",
    Bio: "Myq Kaplan hangs out and chats with two fellow comedians or otherwise interesting humans. The audience laughs and otherwise enjoys.",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/show-submissions/hang_katg_graphic.jpg",
    SubmittedId: "6836",
    SortOrder: "700",
    id: "6836",
    pageUrl: "6836-hang-out-with-me-live-podcast-taping-with-myq-kaplan",
    events: [ "7648" ]
}, {
    Name: "All Jane, No Dick",
    Copy: "",
    Bio: "All Jane, No Dick showcases the amazing talent and diversity of women in comedy. Curious Comedy Theater&#039;s annual All Jane, No Dick Comedy Festival began in 2012 with the mission of discovering, encouraging and promoting women in comedy. Women represent only 17% of the professionals working in the comedy industry today. Industry representatives claim they have difficulty finding women to hire. All Jane, No Dick curates the festival to show the best and most original female improvisers, sketch and stand up comedians to help bridge the gap between these talented performers and industry professionals while entertaining audiences in Portland, Oregon and beyond.",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/show-submissions/ajnd.jpg",
    SubmittedId: "8577",
    SortOrder: "900",
    id: "8577",
    pageUrl: "8577-all-jane-no-dick",
    events: [ "8579", "7809" ]
}, {
    Name: "Best Kept Secret",
    Copy: "",
    Bio: "The Bridgetown selection committee got together and hand-picked the best and the brightest from this year&#039;s submissions. They may not be on your radar just yet, but keep an eye out for them. These comics may very well be the next big thing!",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/show-submissions/sound_recordings_and_containers_no_words.png",
    SubmittedId: "8580",
    SortOrder: "900",
    id: "8580",
    pageUrl: "8580-best-kept-secret",
    events: [ "7706", "7708", "7710" ]
}, {
    Name: "Blam! Blam! Blam! Presents &quot;Black Milk&quot;",
    Copy: "",
    Bio: "Sprung from LA&#039;s 7 year-old comedy show &quot;Blam! Blam! Blam!&quot;, &quot;BLACK MILK&quot; (or &quot;Leite Preto&quot; in Portugese) is a delicious compendium of crisp  comedic  performances and surprising late-night weirdness. \r\n\r\nOn it&#039;s surface, here is a sturdy-walled show with a firm foundation -- solid pedigree. Inside however, it&#039;s Knucklehead City. Straight bananas. The walls will stay up and the roof won&#039;t come crashing but outside of that....\r\nSo, precisely what will go down?\r\nExactly.",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/show-submissions/bm_logo.jpg",
    SubmittedId: "7814",
    SortOrder: "900",
    id: "7814",
    pageUrl: "7814-blam-blam-blam-presents-quotblack-milkquot",
    events: [ "7815" ]
}, {
    Name: "Comedy Grab Bag",
    Copy: "Jay &amp; Kim present Comedy Grab Bag is a refreshingly hilarious mélange of open format comedy including, improv, stand-up, sketch, mixed media and more. Each show the Grab Bag writers create an entirely new program of never before seen content crafted skillfully around a central theme. Past shows have focused on the circus, therapy, elections and time travel. \r\n\r\nThe brainchild of Bridgetown Comedy Festival co-founder Kimberly Brady, and improviser and stand-up comedian Jay Flewelling, Comedy Grab Bag’s writing team consists of Kimberly Brady, Nick Beaird, Jay Flewelling, DJ Hupp, and Jason Williams. All video shorts featured in Grab Bag are directed by Williams whose recent work has been featured on Last Call with Carson Daily. Improv comedy is always skillfully handled by Grab Bag mainstays “The Baguettes,” consisting\r\nBrady &amp; Flewelling, Ashley Barton, Nick Beaird, DJ Hupp, Megan McGeorge, Bill McKinley, Annie Rimmer Weeks, Dylan Reiff, Matthew Schmuck, Jason Williams, Al Zimmerman. CGB is also proud to have previously hosted some of Portland&#039;s best and brightest comedians including Ian Karmel, Ron Funches and Bri Pruett. \r\n\r\nfor more info: comedygrabbag.com ",
    Bio: "Our show consist of story told through 3 sketches and 1-2 videos, an improv set and 3-4 stand-up sets. ",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/show-submissions/grabbag1_0.jpg",
    SubmittedId: "6846",
    SortOrder: "900",
    id: "6846",
    pageUrl: "6846-comedy-grab-bag",
    events: [ "7952" ]
}, {
    Name: "Pivot Presents: W. Kamau Bell and Friends",
    Copy: "Pivot is proud to present an evening with W. Kamau Bell and Friends! The Socio-political comedian W. Kamau Bell has emerged as the post-modern voice of comedy. Named an Ambassador of Racial Justice by the ACLU, his weekly half-hour comedy series, Totally Biased with W. Kamau Bell, premiered in August 2012 to critical acclaim. Pivot and Kamau share an interest in showcasing socially relevant content and education through humor and storytelling: this one-of-a-kind event promises to be memorable! Want to find out if you get pivot? Go to GetPivot.tv!",
    Bio: "Pivot is proud to present an evening with W. Kamau Bell and Friends! The Socio-political comedian W. Kamau Bell has emerged as the post-modern voice of comedy. Named an Ambassador of Racial Justice by the ACLU, his weekly half-hour comedy series, Totally Biased with W. Kamau Bell, premiered in August 2012 to critical acclaim. Pivot and Kamau share an interest in showcasing socially relevant content and education through humor and storytelling: this one-of-a-kind event promises to be memorable! Want to find out if you get pivot? Go to GetPivot.tv!",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/show-submissions/bridgetown_01.jpg",
    SubmittedId: "8634",
    SortOrder: "900",
    id: "8634",
    pageUrl: "8634-pivot-presents-w-kamau-bell-and-friends",
    events: [ "8632" ]
}, {
    Name: "Portland Masters",
    Copy: "What makes Portland such a legendary mecca for stand-up comedy?  Come find out as the comics that put Portland on the map come together for one unbelievable show. Emphasizing material that lampoons the City of Roses, these 7 legends demonstrate what it means to be a Master of the Craft. With Art Krug, Susan Rice, Dave Anderson, Nathan Brannon Kristine Levine, Auggie Smith and Dwight Slade. Possible drop-in guest stars!",
    Bio: "What makes Portland such a legendary mecca for stand-up comedy?  Come find out as the comics that put Portland on the map come together for one unbelievable show.  Emphasizing material that lampoons the City of Roses, these 7 legends demonstrate what it means to be a Master of the Craft.  90 minutes.  With Art Krug, Susan Rice, Dave Anderson, Nathan Brannon Kristine Levine, Auggie Smith and Dwight Slade.  Possible drop in guest stars!",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/show-submissions/portland_masters-01.jpg",
    SubmittedId: "7822",
    SortOrder: "900",
    id: "7822",
    pageUrl: "7822-portland-masters",
    events: [ "7808" ]
}, {
    Name: "Voodoo Doughnut Recordings Presents Ian Karmel and Nathan Brannon",
    Copy: "",
    Bio: "Voodoo Doughnut Recordings is proud to present our first-ever comedy record, a 7&quot; split-single featuring comedians Ian Karmel and Nathan Brannon riffing irreverently on everything from doughnuts to the War on Terror to Talmudic law. Karmel&#039;s side, titled &quot;(Dilla) jokes&quot; was recorded before a live audience at Little Joy in L.A., where Karmel works as a writer and panelist on the show Chelsea Lately. Nathan Brannon&#039;s side, titled &quot;Doughnut Messaging&quot; was recorded before a live audience at Helium Comedy Club right here in Portland. The record (on limited-edition yellow vinyl!) will be out just in time for the 2014 Bridgetown Comedy Festival, where both Karmel and Brannon will be performing.",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/show-submissions/vd_jacket_with_disc_005_a.jpg",
    SubmittedId: "7790",
    SortOrder: "900",
    id: "7790",
    pageUrl: "7790-voodoo-doughnut-recordings-presents-ian-karmel-and-nathan-brannon",
    events: [ "7667" ]
}, {
    Name: "Whiskey Tango",
    Copy: "Whiskey Tango. Gentlemen… doing gentlemen’s improv. Out of Portland, Oregon, this dapper group of improvisers takes audience suggestions and weaves an elaborate tapestry of scenes, environments, and relationships. With a focus on realism, Whiskey Tango keeps audiences laughing on the edge of their seats. Show is 25-30 minutes in length and features 4-5 performers. Recently accepted into the 2014 SF Sketchfest, Whiskey Tango has performed at the iO West LA Improv Comedy Festival, the Vancouver International Improv Festival, and are six-time winners of Friday Night Fights (Curious Comedy Theater, Portland OR). They are regular performers and instructors at theaters around Portland, and all around great guys. Collectively they are Whiskey Tango. Individually they are Gabe Dinger, Jed Arkley, Leon Anderson, Nathan Loveless, Samuel De Roest (gentleman on sabbatical) and Jake Michels.\r\n\r\n- Gabe Dinger (Curious Comedy Playas)\r\n- Jed Arkley (Administration, Curious Comedy Playas, Improv Jones-Providence, RI)\r\n- Leon Anderson (Curious Comedy Playas, Picture Start-IO West, Private Dancer-Second City LA, April&#039;s Fools, Acme Theater)\r\n- Nathan Loveless (Curious Comedy Playas, Nate and Nathan, Absolute Improv-University of Oregon, ComedySportz)\r\n- Samuel De Roest (Curious Comedy Playas)\r\n- Jake Michels - (Curious Comedy Playas, Impulse, Balrog)",
    Bio: "Whiskey Tango. Gentlemen… doing gentlemen’s improv. Out of Portland, Oregon, this dapper group of improvisers takes audience suggestions and weaves an elaborate tapestry of scenes, environments, and relationships. With a focus on realism, Whiskey Tango keeps audiences laughing on the edge of their seats. Show is 25-30 minutes in length and features 4-5 performers. Recently accepted into the 2014 SF Sketchfest, Whiskey Tango has performed at the iO West LA Improv Comedy Festival, the Vancouver International Improv Festival, and are six-time winners of Friday Night Fights (Curious Comedy Theater, Portland OR). They are regular performers and instructors at theaters around Portland, and all around great guys. Collectively they are Whiskey Tango. Individually they are Gabe Dinger, Jed Arkley, Leon Anderson, Nathan Loveless, Samuel De Roest (gentleman on sabbatical) and Jake Michels.\r\n\r\n- Gabe Dinger (Curious Comedy Playas)\r\n- Jed Arkley (Administration, Curious Comedy Playas, Improv Jones-Providence, RI)\r\n- Leon Anderson (Curious Comedy Playas, Picture Start-IO West, Private Dancer-Second City LA, April&#039;s Fools, Acme Theater)\r\n- Nathan Loveless (Curious Comedy Playas, Nate and Nathan, Absolute Improv-University of Oregon, ComedySportz)\r\n- Samuel De Roest (Curious Comedy Playas)\r\n- Jake Michels - (Curious Comedy Playas, Impulse, Balrog)",
    PhotoUrl: "http://bridgetown.festivalthing.com/sites/default/files/images/show-submissions/all-5-whiskey1_0.jpg",
    SubmittedId: "7776",
    SortOrder: "900",
    id: "7776",
    pageUrl: "7776-whiskey-tango",
    events: [ "7747" ]
} ], App.Venue.FIXTURES = [ {
    Name: "Alhambra Theater Lounge",
    VenueId: "7608",
    id: "7608",
    pageUrl: "7608-alhambra-theater-lounge",
    events: [ "7621", "7623", "7806", "7678", "7745", "7628", "7952", "7632" ]
}, {
    Name: "Taxi Magic Stage at Alhambra Theater Main",
    VenueId: "7609",
    id: "7609",
    pageUrl: "7609-taxi-magic-stage-at-alhambra-theater-main",
    events: [ "7637", "7740", "7639", "7749", "7742", "7642", "7648", "7644", "7645", "7646", "7796", "7677", "7652" ]
}, {
    Name: "Analog Cafe",
    VenueId: "7620",
    id: "7620",
    pageUrl: "7620-analog-cafe",
    events: [ "7748", "7918", "7750", "7911", "7751", "7752", "7753" ]
}, {
    Name: "Analog Theater",
    VenueId: "7619",
    id: "7619",
    pageUrl: "7619-analog-theater",
    events: [ "7704", "7747", "7699", "7741", "7811", "7808", "8632", "8631", "7746", "7738" ]
}, {
    Name: "Bar of the Gods",
    VenueId: "7610",
    id: "7610",
    pageUrl: "7610-bar-of-the-gods",
    events: [ "7653", "7654", "7912", "7656" ]
}, {
    Name: "Bossanova",
    VenueId: "7611",
    id: "7611",
    pageUrl: "7611-bossanova",
    events: [ "7657", "7658", "7659", "7660", "7916", "7703", "7661" ]
}, {
    Name: "Curious Comedy Theater",
    VenueId: "8571",
    id: "8571",
    pageUrl: "8571-curious-comedy-theater",
    events: [ "8579" ]
}, {
    Name: "Squarespace Stage at Doug Fir",
    VenueId: "7612",
    id: "7612",
    pageUrl: "7612-squarespace-stage-at-doug-fir",
    events: [ "7663", "7810", "7665", "7624", "7667", "7668", "7669", "7670", "7671", "8633", "7672", "7675", "7674", "7676", "7662", "7783" ]
}, {
    Name: "Sizzle Pie Stage at Eagles Lodge",
    VenueId: "7613",
    id: "7613",
    pageUrl: "7613-sizzle-pie-stage-at-eagles-lodge",
    events: [ "7679", "7919", "7680", "7951", "7625", "7743", "7638", "7685", "7651", "7687" ]
}, {
    Name: "Ground Kontrol",
    VenueId: "7966",
    id: "7966",
    pageUrl: "7966-ground-kontrol",
    events: [ "7967" ]
}, {
    Name: "Hawthorne Theatre Lounge",
    VenueId: "7614",
    id: "7614",
    pageUrl: "7614-hawthorne-theatre-lounge",
    events: [ "7688", "7689", "8635", "7690", "7691", "7692", "7693", "7694", "7695", "7809", "7697" ]
}, {
    Name: "Hawthorne Theatre Main",
    VenueId: "7615",
    id: "7615",
    pageUrl: "7615-hawthorne-theatre-main",
    events: [ "7698", "7701", "7915", "7702", "7804", "7650", "7913" ]
}, {
    Name: "Jupiter Tent",
    VenueId: "7616",
    id: "7616",
    pageUrl: "7616-jupiter-tent",
    events: [ "7739", "7706", "7641", "7816", "7708", "7710", "7711" ]
}, {
    Name: "The Tanker",
    VenueId: "7617",
    id: "7617",
    pageUrl: "7617-the-tanker",
    events: [ "7716", "7717", "7718", "7719", "7720", "7721", "7722", "7723", "7724", "7725", "7726", "7727", "7728" ]
}, {
    Name: "MailChimp Stage Stage at White Owl Social Club",
    VenueId: "7618",
    id: "7618",
    pageUrl: "7618-mailchimp-stage-stage-at-white-owl-social-club",
    events: [ "7730", "7622", "7807", "7733", "7734", "7805", "7815", "7737", "7914" ]
} ], App.CatchAllController = Ember.ObjectController.extend({}), App.EventsController = Ember.ObjectController.extend({}), 
App.NewspostController = Ember.ObjectController.extend({}), App.NewspostsController = Ember.ArrayController.extend({}), 
App.PerformerController = Ember.ObjectController.extend({}), App.PerformersController = Ember.ArrayController.extend({
    sortProperties: [ "SortOrder" ],
    sortAscending: !0
}), App.ScheduleController = Ember.ObjectController.extend({
    actions: {
        filterThursday: function() {
            this.set("scheduleClass", "filter-items filter-thursday");
        },
        filterFriday: function() {
            this.set("scheduleClass", "filter-items filter-friday");
        },
        filterSaturday: function() {
            this.set("scheduleClass", "filter-items filter-saturday");
        },
        filterSunday: function() {
            this.set("scheduleClass", "filter-items filter-sunday");
        },
        filterGrid: function() {
            $(".schedule-table").show(), $(".schedule-list").hide();
        },
        filterList: function() {
            $(".schedule-table").hide(), $(".schedule-list").show();
        }
    },
    scheduleClass: "",
    events: function() {
        return Ember.ArrayProxy.createWithMixins(Ember.SortableMixin, {
            sortProperties: [ "start_time" ],
            content: this.get("content.events")
        });
    }.property("content.events")
}), App.ApplicationView = Ember.View.extend({
    didInsertElement: function() {
        var js, fjs = document.getElementsByTagName("script")[0], p = /^http:/.test(document.location) ? "http" : "https";
        document.getElementById("twitter-wjs") || (js = document.createElement("script"), 
        js.id = "twitter-wjs", js.src = p + "://platform.twitter.com/widgets.js?" + new Date().getTime(), 
        fjs.parentNode.insertBefore(js, fjs)), $(".navbar .nav a").on("click", function() {
            $(window).width() <= 768 && $(".navbar-toggle").click();
        });
    }
}), App.FridayScheduleView = Ember.View.extend({
    didInsertElement: function() {
        Ember.run.scheduleOnce("afterRender", this, this.addTableColspans);
    },
    addTableColspans: function() {
        $(".cell-spacer").remove(), $(".schedule-table__cell").each(function() {
            var startTime = $(this).data("start-time"), endTime = $(this).data("end-time"), duration = moment(endTime).diff(moment(startTime), "minutes") / 30;
            $(this).attr("colspan", duration);
            var previousTime = $(this).prevAll(".schedule-table__cell:eq(0)").data("end-time") || FESTIVAL_START_TIMES.Friday, durationBefore = moment(startTime).diff(moment(previousTime), "minutes") / 30;
            $(this).before('<td class="cell-spacer" colspan="' + durationBefore + '" style="border:1px solid white;"></td>');
        });
    }
}), App.HeaderView = Ember.View.extend({
    templateName: "header"
}), App.IndexView = Ember.View.extend({
    didInsertElement: function() {
        var js, fjs = document.getElementsByTagName("script")[0], p = /^http:/.test(document.location) ? "http" : "https";
        js = document.createElement("script"), js.id = "twitter-wjs", js.src = p + "://platform.twitter.com/widgets.js?" + new Date().getTime(), 
        fjs.parentNode.insertBefore(js, fjs), $("img.lazy").lazyload({
            effect: "fadeIn"
        });
    }
}), App.LoadingView = Ember.View.extend({
    didInsertElement: function() {}
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
}), App.SaturdayScheduleView = Ember.View.extend({
    didInsertElement: function() {
        Ember.run.scheduleOnce("afterRender", this, this.addTableColspans);
    },
    addTableColspans: function() {
        $(".cell-spacer").remove(), $(".schedule-table__cell").each(function() {
            var startTime = $(this).data("start-time"), endTime = $(this).data("end-time"), duration = moment(endTime).diff(moment(startTime), "minutes") / 30;
            $(this).attr("colspan", duration);
            var previousTime = $(this).prevAll(".schedule-table__cell:eq(0)").data("end-time") || FESTIVAL_START_TIMES.Saturday, durationBefore = moment(startTime).diff(moment(previousTime), "minutes") / 30;
            $(this).before('<td class="cell-spacer" colspan="' + durationBefore + '" style="border:1px solid white;"></td>');
        });
    }
}), App.ScheduleView = Ember.View.extend({
    templateName: "schedule",
    didInsertElement: function() {
        Ember.run.scheduleOnce("afterRender", this, this.addListDividers), Ember.run.scheduleOnce("afterRender", this, this.addTableColspans), 
        Ember.run.scheduleOnce("afterRender", this, this.makeTableResponsive);
    },
    addListDividers: function() {
        $(".schedule-list__spacer").remove();
        var currentTime = moment().zone("-07:00").subtract(100, "years").toISOString();
        $(".list-group-item").each(function() {
            var rowTime = $(this).data("start-time");
            if (rowTime !== currentTime) {
                currentTime = rowTime;
                var dateString = moment(currentTime).zone("-07:00").format("h:mm a - dddd MMMM Do YYYY"), weekday = moment(currentTime).zone("-07:00").format("dddd").toLowerCase();
                currentTime = $(this).data("start-time"), $(this).before('<div class="list-group-item schedule-list__spacer ' + weekday + '"><div class="container-fluid"><div class="row"><div class="col-xs-12">' + dateString + "</div></div></div></div>");
            }
        });
    },
    addTableColspans: function() {
        $(".cell-spacer").remove(), $(".schedule-table__cell").each(function() {
            var startTime = $(this).data("start-time"), endTime = $(this).data("end-time"), duration = moment(endTime).diff(moment(startTime), "minutes") / 30;
            $(this).attr("colspan", duration);
            var previousTime = $(this).prevAll(".schedule-table__cell:eq(0)").data("end-time") || FESTIVAL_START_TIME, durationBefore = moment(startTime).diff(moment(previousTime), "minutes") / 30;
            $(this).before('<td class="cell-spacer" colspan="' + durationBefore + '" style="border:1px solid white;"></td>');
        });
    },
    makeTableResponsive: function() {
        function splitTable(original) {
            original.wrap("<div class='table-wrapper' />");
            var copy = original.clone();
            copy.find("td:not(:first-child), th:not(:first-child)").css("display", "none"), 
            copy.removeClass("responsive"), original.closest(".table-wrapper").append(copy), 
            copy.wrap("<div class='pinned' />"), original.wrap("<div class='scrollable' />"), 
            setCellHeights(original, copy);
        }
        function unsplitTable(original) {
            original.closest(".table-wrapper").find(".pinned").remove(), original.unwrap(), 
            original.unwrap();
        }
        function setCellHeights(original, copy) {
            var tr = original.find("tr"), tr_copy = copy.find("tr"), heights = [];
            tr.each(function(index) {
                var self = $(this), tx = self.find("th, td");
                tx.each(function() {
                    var height = $(this).outerHeight(!0);
                    heights[index] = heights[index] || 0, height > heights[index] && (heights[index] = height);
                });
            }), tr_copy.each(function(index) {
                $(this).height(heights[index]);
            });
        }
        $("table.schedule-table").css("visibility", "hidden");
        var switched = !1, updateTables = function() {
            return $(window).width() < 9999999 && !switched ? (switched = !0, $("table.responsive").each(function(i, element) {
                splitTable($(element));
            }), !0) : void (switched && $(window).width() > 9999999 && (switched = !1, $("table.responsive").each(function(i, element) {
                unsplitTable($(element));
            })));
        };
        updateTables(), $("table.schedule-table").css("visibility", "visible").hide();
    }
}), App.ShowsView = Ember.View.extend({
    templateName: "shows_gallery",
    didInsertElement: function() {
        $("img.lazy").lazyload({
            effect: "fadeIn"
        });
    }
}), App.SundayScheduleView = Ember.View.extend({
    didInsertElement: function() {
        Ember.run.scheduleOnce("afterRender", this, this.addTableColspans);
    },
    addTableColspans: function() {
        $(".cell-spacer").remove(), $(".schedule-table__cell").each(function() {
            var startTime = $(this).data("start-time"), endTime = $(this).data("end-time"), duration = moment(endTime).diff(moment(startTime), "minutes") / 30;
            $(this).attr("colspan", duration);
            var previousTime = $(this).prevAll(".schedule-table__cell:eq(0)").data("end-time") || FESTIVAL_START_TIMES.Sunday, durationBefore = moment(startTime).diff(moment(previousTime), "minutes") / 30;
            $(this).before('<td class="cell-spacer" colspan="' + durationBefore + '" style="border:1px solid white;"></td>');
        });
    }
}), App.ThursdayScheduleView = Ember.View.extend({
    didInsertElement: function() {
        Ember.run.scheduleOnce("afterRender", this, this.addTableColspans);
    },
    addTableColspans: function() {
        $(".cell-spacer").remove(), $(".schedule-table__cell").each(function() {
            var startTime = $(this).data("start-time"), endTime = $(this).data("end-time"), duration = moment(endTime).diff(moment(startTime), "minutes") / 30;
            $(this).attr("colspan", duration);
            var previousTime = $(this).prevAll(".schedule-table__cell:eq(0)").data("end-time") || FESTIVAL_START_TIMES.Thursday, durationBefore = moment(startTime).diff(moment(previousTime), "minutes") / 30;
            $(this).before('<td class="cell-spacer" colspan="' + durationBefore + '" style="border:1px solid white;"></td>');
        });
    }
}), App.VenuesView = Ember.View.extend({
    didInsertElement: function() {
        Ember.run.scheduleOnce("afterRender", this, function() {
            $("[data-src]").each(function() {
                $(this).attr("src", $(this).attr("data-src")), $(this).parent().css("padding", "").removeClass();
            });
        });
    }
}), Ember.TEMPLATES._event_list_item = Ember.Handlebars.template(function(Handlebars, depth0, helpers, partials, data) {
    function program1(depth0, data) {
        var stack1, helper, options, buffer = "";
        return data.buffer.push("\n	<li>\n    "), helper = helpers["link-to"] || depth0 && depth0["link-to"], 
        options = {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            inverse: self.noop,
            fn: self.program(2, program2, data),
            contexts: [ depth0, depth0 ],
            types: [ "STRING", "ID" ],
            data: data
        }, stack1 = helper ? helper.call(depth0, "performer", "performer", options) : helperMissing.call(depth0, "link-to", "performer", "performer", options), 
        (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("\n  </li>\n"), 
        buffer;
    }
    function program2(depth0, data) {
        var stack1, buffer = "";
        return data.buffer.push("\n      "), stack1 = helpers._triageMustache.call(depth0, "performer.Name", {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            contexts: [ depth0 ],
            types: [ "ID" ],
            data: data
        }), (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("\n    "), 
        buffer;
    }
    this.compilerInfo = [ 4, ">= 1.0.0" ], helpers = this.merge(helpers, Ember.Handlebars.helpers), 
    data = data || {};
    var stack1, buffer = "", self = this, helperMissing = helpers.helperMissing;
    return data.buffer.push("\n<p><strong>"), stack1 = helpers._triageMustache.call(depth0, "event.Name", {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        contexts: [ depth0 ],
        types: [ "ID" ],
        data: data
    }), (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("</strong></p>\n<ul>\n"), 
    stack1 = helpers.each.call(depth0, "performer", "in", "event.performers", {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        inverse: self.noop,
        fn: self.program(1, program1, data),
        contexts: [ depth0, depth0, depth0 ],
        types: [ "ID", "ID", "ID" ],
        data: data
    }), (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("\n</ul>\n\n"), 
    buffer;
}), Ember.TEMPLATES._footer = Ember.Handlebars.template(function(Handlebars, depth0, helpers, partials, data) {
    function program1(depth0, data) {
        data.buffer.push("Home");
    }
    function program3(depth0, data) {
        data.buffer.push("Performers");
    }
    function program5(depth0, data) {
        data.buffer.push("Press");
    }
    function program7(depth0, data) {
        data.buffer.push("Contact");
    }
    this.compilerInfo = [ 4, ">= 1.0.0" ], helpers = this.merge(helpers, Ember.Handlebars.helpers), 
    data = data || {};
    var stack1, helper, options, buffer = "", self = this, helperMissing = helpers.helperMissing;
    return data.buffer.push('<!-- FOOTER -->\n  <footer class="site-footer" role="contentinfo">\n  <div class="container">\n    <div class="social">\n  <ul class="social-buttons">\n    <li class="follow-btn">\n      <a href="https://twitter.com/share" class="twitter-share-button" data-via="bridgetown"  data-related="bridgetown" data-hashtags="bridgetowncomedy">Tweet</a>\n    </li>\n    <li class="tweet-btn">\n      <a href="https://twitter.com/bridgetown" class="twitter-follow-button" data-show-count="false" >Follow @bridgetown</a>\n    </li>\n  </ul>\n</div>\n\n\n    <p>Designed and built by <a href="http://twitter.com/joshuabremer" target="_blank">@joshuabremer</a>. Powered by <a target="_blank" href="http://squarespace.com/?channel=events&subchannel=comedy&source=bridgetown14">Squarespace</a></p>\n    <ul class="footer-links muted">\n      <li>'), 
    helper = helpers["link-to"] || depth0 && depth0["link-to"], options = {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        inverse: self.noop,
        fn: self.program(1, program1, data),
        contexts: [ depth0 ],
        types: [ "STRING" ],
        data: data
    }, stack1 = helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options), 
    (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("</li>\n      <li>·</li>\n      <li>"), 
    helper = helpers["link-to"] || depth0 && depth0["link-to"], options = {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        inverse: self.noop,
        fn: self.program(3, program3, data),
        contexts: [ depth0 ],
        types: [ "STRING" ],
        data: data
    }, stack1 = helper ? helper.call(depth0, "performers", options) : helperMissing.call(depth0, "link-to", "performers", options), 
    (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("</li>\n      <li>·</li>\n      \n      <li>"), 
    helper = helpers["link-to"] || depth0 && depth0["link-to"], options = {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        inverse: self.noop,
        fn: self.program(5, program5, data),
        contexts: [ depth0 ],
        types: [ "STRING" ],
        data: data
    }, stack1 = helper ? helper.call(depth0, "press", options) : helperMissing.call(depth0, "link-to", "press", options), 
    (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("</li>\n      <li>·</li>\n      <li>"), 
    helper = helpers["link-to"] || depth0 && depth0["link-to"], options = {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        inverse: self.noop,
        fn: self.program(7, program7, data),
        contexts: [ depth0 ],
        types: [ "STRING" ],
        data: data
    }, stack1 = helper ? helper.call(depth0, "contact", options) : helperMissing.call(depth0, "link-to", "contact", options), 
    (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("</li>\n    </ul>\n  </div>\n</footer>"), 
    buffer;
}), Ember.TEMPLATES._header = Ember.Handlebars.template(function(Handlebars, depth0, helpers, partials, data) {
    function program1(depth0, data) {
        data.buffer.push(' <span class="navbar-brand"><img class="navbar-brand-logo" src="/assets/logo-long-inverse.png" /></span>');
    }
    function program3(depth0, data) {
        data.buffer.push("<span>Performers</span>");
    }
    function program5(depth0, data) {
        data.buffer.push("<span>Shows</span>");
    }
    function program7(depth0, data) {
        data.buffer.push("<span>Schedule</span>");
    }
    function program9(depth0, data) {
        data.buffer.push("<span>Venues</span>");
    }
    function program11(depth0, data) {
        data.buffer.push("<span>FAQs</span>");
    }
    function program13(depth0, data) {
        data.buffer.push("<span>2013 Press</span>");
    }
    function program15(depth0, data) {
        data.buffer.push("<span>Sponsors</span>");
    }
    function program17(depth0, data) {
        data.buffer.push("<span>Contact</span>");
    }
    this.compilerInfo = [ 4, ">= 1.0.0" ], helpers = this.merge(helpers, Ember.Handlebars.helpers), 
    data = data || {};
    var stack1, helper, options, buffer = "", self = this, helperMissing = helpers.helperMissing;
    return data.buffer.push('<div class="navbar navbar-inverse navbar-fixed-top">\n  <div class="container">\n    <div class="navbar-header">\n      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n      </button>\n       '), 
    helper = helpers["link-to"] || depth0 && depth0["link-to"], options = {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        inverse: self.noop,
        fn: self.program(1, program1, data),
        contexts: [ depth0 ],
        types: [ "STRING" ],
        data: data
    }, stack1 = helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options), 
    (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push('\n    </div>\n    <div class="navbar-collapse collapse">\n      <ul class="nav navbar-nav">\n        <li class="header-color1">'), 
    helper = helpers["link-to"] || depth0 && depth0["link-to"], options = {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        inverse: self.noop,
        fn: self.program(3, program3, data),
        contexts: [ depth0 ],
        types: [ "STRING" ],
        data: data
    }, stack1 = helper ? helper.call(depth0, "performers", options) : helperMissing.call(depth0, "link-to", "performers", options), 
    (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push('</li>\n        <li class="header-color2">'), 
    helper = helpers["link-to"] || depth0 && depth0["link-to"], options = {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        inverse: self.noop,
        fn: self.program(5, program5, data),
        contexts: [ depth0 ],
        types: [ "STRING" ],
        data: data
    }, stack1 = helper ? helper.call(depth0, "shows", options) : helperMissing.call(depth0, "link-to", "shows", options), 
    (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push('</li>\n        <li class="header-color3">'), 
    helper = helpers["link-to"] || depth0 && depth0["link-to"], options = {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        inverse: self.noop,
        fn: self.program(7, program7, data),
        contexts: [ depth0 ],
        types: [ "STRING" ],
        data: data
    }, stack1 = helper ? helper.call(depth0, "schedule", options) : helperMissing.call(depth0, "link-to", "schedule", options), 
    (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push('</li>\n        <li class="header-color4">'), 
    helper = helpers["link-to"] || depth0 && depth0["link-to"], options = {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        inverse: self.noop,
        fn: self.program(9, program9, data),
        contexts: [ depth0 ],
        types: [ "STRING" ],
        data: data
    }, stack1 = helper ? helper.call(depth0, "venues", options) : helperMissing.call(depth0, "link-to", "venues", options), 
    (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push('</li>\n        <li class="header-color5 hidden-sm">'), 
    helper = helpers["link-to"] || depth0 && depth0["link-to"], options = {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        inverse: self.noop,
        fn: self.program(11, program11, data),
        contexts: [ depth0 ],
        types: [ "STRING" ],
        data: data
    }, stack1 = helper ? helper.call(depth0, "faqs", options) : helperMissing.call(depth0, "link-to", "faqs", options), 
    (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push('</li>\n        <li class="header-color1 hidden-sm">'), 
    helper = helpers["link-to"] || depth0 && depth0["link-to"], options = {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        inverse: self.noop,
        fn: self.program(13, program13, data),
        contexts: [ depth0 ],
        types: [ "STRING" ],
        data: data
    }, stack1 = helper ? helper.call(depth0, "press", options) : helperMissing.call(depth0, "link-to", "press", options), 
    (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push('</li>\n        <li class="header-color2 hidden-sm">'), 
    helper = helpers["link-to"] || depth0 && depth0["link-to"], options = {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        inverse: self.noop,
        fn: self.program(15, program15, data),
        contexts: [ depth0 ],
        types: [ "STRING" ],
        data: data
    }, stack1 = helper ? helper.call(depth0, "sponsors", options) : helperMissing.call(depth0, "link-to", "sponsors", options), 
    (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push('</li>\n        <li class="header-color3 hidden-sm">'), 
    helper = helpers["link-to"] || depth0 && depth0["link-to"], options = {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        inverse: self.noop,
        fn: self.program(17, program17, data),
        contexts: [ depth0 ],
        types: [ "STRING" ],
        data: data
    }, stack1 = helper ? helper.call(depth0, "contact", options) : helperMissing.call(depth0, "link-to", "contact", options), 
    (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push('</li>\n        <li class="dropdown visible-sm ">\n          <a class="dropdown-toggle" data-toggle="dropdown" href="#">\n            More Info <span class="caret"></span>\n          </a>\n          <ul class="dropdown-menu">\n            <li class="header-color5">'), 
    helper = helpers["link-to"] || depth0 && depth0["link-to"], options = {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        inverse: self.noop,
        fn: self.program(13, program13, data),
        contexts: [ depth0 ],
        types: [ "STRING" ],
        data: data
    }, stack1 = helper ? helper.call(depth0, "press", options) : helperMissing.call(depth0, "link-to", "press", options), 
    (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push('</li>\n            <li class="header-color1">'), 
    helper = helpers["link-to"] || depth0 && depth0["link-to"], options = {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        inverse: self.noop,
        fn: self.program(15, program15, data),
        contexts: [ depth0 ],
        types: [ "STRING" ],
        data: data
    }, stack1 = helper ? helper.call(depth0, "sponsors", options) : helperMissing.call(depth0, "link-to", "sponsors", options), 
    (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push('</li>\n            <li class="header-color2">'), 
    helper = helpers["link-to"] || depth0 && depth0["link-to"], options = {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        inverse: self.noop,
        fn: self.program(17, program17, data),
        contexts: [ depth0 ],
        types: [ "STRING" ],
        data: data
    }, stack1 = helper ? helper.call(depth0, "contact", options) : helperMissing.call(depth0, "link-to", "contact", options), 
    (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push('</li>\n            <li class="header-color3">'), 
    helper = helpers["link-to"] || depth0 && depth0["link-to"], options = {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        inverse: self.noop,
        fn: self.program(11, program11, data),
        contexts: [ depth0 ],
        types: [ "STRING" ],
        data: data
    }, stack1 = helper ? helper.call(depth0, "faqs", options) : helperMissing.call(depth0, "link-to", "faqs", options), 
    (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push('</li>\n          </ul>\n        </li>\n      </ul>\n      <div class="navbar-form navbar-right">\n        <strong>\n          <a class="btn btn-default" target="_blank" href="http://bridgetown.laughstub.com/event.cfm?id=308381">Tickets</a>\n        </strong>\n      </div>\n    </div><!--/.navbar-collapse -->\n  </div>\n</div>\n'), 
    buffer;
}), Ember.TEMPLATES._news = Ember.Handlebars.template(function(Handlebars, depth0, helpers, partials, data) {
    this.compilerInfo = [ 4, ">= 1.0.0" ], helpers = this.merge(helpers, Ember.Handlebars.helpers), 
    data = data || {};
    var buffer = "", escapeExpression = this.escapeExpression;
    return data.buffer.push('\n<div class="newspost" style="margin-top:50px;">\n  <div class="newspost-content">\n'), 
    data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.mainContent", {
        hash: {
            unescaped: "true"
        },
        hashTypes: {
            unescaped: "STRING"
        },
        hashContexts: {
            unescaped: depth0
        },
        contexts: [ depth0 ],
        types: [ "ID" ],
        data: data
    }))), data.buffer.push("\n</div>\n</div>\n\n\n\n\n\n"), buffer;
}), Ember.TEMPLATES._recent_tweets = Ember.Handlebars.template(function(Handlebars, depth0, helpers, partials, data) {
    this.compilerInfo = [ 4, ">= 1.0.0" ], helpers = this.merge(helpers, Ember.Handlebars.helpers), 
    data = data || {}, data.buffer.push('<a class="twitter-timeline" href="https://twitter.com/bridgetown" data-widget-id="432300245716713474">Tweets by @bridgetown</a>\n\n\n\n');
}), Ember.TEMPLATES._schedule_list = Ember.Handlebars.template(function(Handlebars, depth0, helpers, partials, data) {
    function program1(depth0, data) {
        var helper, options, buffer = "";
        return data.buffer.push("\n "), data.buffer.push(escapeExpression((helper = helpers.partial || depth0 && depth0.partial, 
        options = {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            contexts: [ depth0 ],
            types: [ "STRING" ],
            data: data
        }, helper ? helper.call(depth0, "schedule_list_item", options) : helperMissing.call(depth0, "partial", "schedule_list_item", options)))), 
        data.buffer.push("\n  "), buffer;
    }
    this.compilerInfo = [ 4, ">= 1.0.0" ], helpers = this.merge(helpers, Ember.Handlebars.helpers), 
    data = data || {};
    var stack1, buffer = "", helperMissing = helpers.helperMissing, escapeExpression = this.escapeExpression, self = this;
    return data.buffer.push('<div class="schedule-list">\n  <div class="text-left">\n      <p><button type="button" class="btn btn-default" '), 
    data.buffer.push(escapeExpression(helpers.action.call(depth0, "filterThursday", {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        contexts: [ depth0 ],
        types: [ "STRING" ],
        data: data
    }))), data.buffer.push('>Thursday</button>\n      <button type="button" class="btn btn-default" '), 
    data.buffer.push(escapeExpression(helpers.action.call(depth0, "filterFriday", {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        contexts: [ depth0 ],
        types: [ "STRING" ],
        data: data
    }))), data.buffer.push('>Friday</button>\n      <button type="button" class="btn btn-default" '), 
    data.buffer.push(escapeExpression(helpers.action.call(depth0, "filterSaturday", {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        contexts: [ depth0 ],
        types: [ "STRING" ],
        data: data
    }))), data.buffer.push('>Saturday</button>\n      <button type="button" class="btn btn-default" '), 
    data.buffer.push(escapeExpression(helpers.action.call(depth0, "filterSunday", {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        contexts: [ depth0 ],
        types: [ "STRING" ],
        data: data
    }))), data.buffer.push('>Sunday</button>\n    </p>\n  </div>\n  <ul class="list-group">\n  '), 
    stack1 = helpers.each.call(depth0, "event", "in", "controller.events", {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        inverse: self.noop,
        fn: self.program(1, program1, data),
        contexts: [ depth0, depth0, depth0 ],
        types: [ "ID", "ID", "ID" ],
        data: data
    }), (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("\n  </ul>\n"), 
    buffer;
}), Ember.TEMPLATES._schedule_list_item = Ember.Handlebars.template(function(Handlebars, depth0, helpers, partials, data) {
    function program1(depth0, data) {
        var stack1, helper, options, buffer = "";
        return data.buffer.push("\n              "), helper = helpers["link-to"] || depth0 && depth0["link-to"], 
        options = {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            inverse: self.noop,
            fn: self.program(2, program2, data),
            contexts: [ depth0, depth0 ],
            types: [ "STRING", "ID" ],
            data: data
        }, stack1 = helper ? helper.call(depth0, "show", "event.show", options) : helperMissing.call(depth0, "link-to", "show", "event.show", options), 
        (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("\n            "), 
        buffer;
    }
    function program2(depth0, data) {
        data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "event.show.Name", {
            hash: {
                unescaped: "true"
            },
            hashTypes: {
                unescaped: "STRING"
            },
            hashContexts: {
                unescaped: depth0
            },
            contexts: [ depth0 ],
            types: [ "ID" ],
            data: data
        })));
    }
    function program4(depth0, data) {
        var stack1, helper, options, buffer = "";
        return data.buffer.push("\n              "), helper = helpers["link-to"] || depth0 && depth0["link-to"], 
        options = {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            inverse: self.noop,
            fn: self.program(5, program5, data),
            contexts: [ depth0, depth0 ],
            types: [ "STRING", "ID" ],
            data: data
        }, stack1 = helper ? helper.call(depth0, "event", "event", options) : helperMissing.call(depth0, "link-to", "event", "event", options), 
        (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("\n            "), 
        buffer;
    }
    function program5(depth0, data) {
        data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "event.Name", {
            hash: {
                unescaped: "true"
            },
            hashTypes: {
                unescaped: "STRING"
            },
            hashContexts: {
                unescaped: depth0
            },
            contexts: [ depth0 ],
            types: [ "ID" ],
            data: data
        })));
    }
    function program7(depth0, data) {
        var stack1, buffer = "";
        return data.buffer.push('\n            <span class="schedule-list__item-venue-label label label-default">'), 
        stack1 = helpers._triageMustache.call(depth0, "event.venue.Name", {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            contexts: [ depth0 ],
            types: [ "ID" ],
            data: data
        }), (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("</span>\n            "), 
        buffer;
    }
    function program9(depth0, data) {
        var stack1, helper, options, buffer = "";
        return data.buffer.push("\n\n              <li>\n                "), helper = helpers["link-to"] || depth0 && depth0["link-to"], 
        options = {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            inverse: self.noop,
            fn: self.program(10, program10, data),
            contexts: [ depth0, depth0 ],
            types: [ "STRING", "ID" ],
            data: data
        }, stack1 = helper ? helper.call(depth0, "performer", "performer", options) : helperMissing.call(depth0, "link-to", "performer", "performer", options), 
        (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("\n              </li>\n\n          "), 
        buffer;
    }
    function program10(depth0, data) {
        var buffer = "";
        return data.buffer.push('\n                <span class="label label-default schedule__label-performer">\n                  '), 
        data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "performer.Name", {
            hash: {
                unescaped: "true"
            },
            hashTypes: {
                unescaped: "STRING"
            },
            hashContexts: {
                unescaped: depth0
            },
            contexts: [ depth0 ],
            types: [ "ID" ],
            data: data
        }))), data.buffer.push("\n                </span>\n                "), buffer;
    }
    function program12(depth0, data) {
        var stack1, helper, options, buffer = "";
        return data.buffer.push("\n              <li><strong>MC: </strong>\n                "), 
        helper = helpers["link-to"] || depth0 && depth0["link-to"], options = {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            inverse: self.noop,
            fn: self.program(13, program13, data),
            contexts: [ depth0, depth0 ],
            types: [ "STRING", "ID" ],
            data: data
        }, stack1 = helper ? helper.call(depth0, "performer", "emcee", options) : helperMissing.call(depth0, "link-to", "performer", "emcee", options), 
        (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("\n              </li>\n           "), 
        buffer;
    }
    function program13(depth0, data) {
        var buffer = "";
        return data.buffer.push('\n                <span class="label label-default schedule__label-performer">\n                  '), 
        data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "emcee.Name", {
            hash: {
                unescaped: "true"
            },
            hashTypes: {
                unescaped: "STRING"
            },
            hashContexts: {
                unescaped: depth0
            },
            contexts: [ depth0 ],
            types: [ "ID" ],
            data: data
        }))), data.buffer.push("\n                </span>\n                "), buffer;
    }
    this.compilerInfo = [ 4, ">= 1.0.0" ], helpers = this.merge(helpers, Ember.Handlebars.helpers), 
    data = data || {};
    var stack1, helper, options, buffer = "", escapeExpression = this.escapeExpression, self = this, helperMissing = helpers.helperMissing;
    return data.buffer.push("  <li "), data.buffer.push(escapeExpression(helpers["bind-attr"].call(depth0, {
        hash: {
            "data-start-time": "event.start_time"
        },
        hashTypes: {
            "data-start-time": "STRING"
        },
        hashContexts: {
            "data-start-time": depth0
        },
        contexts: [],
        types: [],
        data: data
    }))), data.buffer.push(" "), data.buffer.push(escapeExpression(helpers["bind-attr"].call(depth0, {
        hash: {
            "class": ":schedule-list__item :list-group-item event.weekday"
        },
        hashTypes: {
            "class": "STRING"
        },
        hashContexts: {
            "class": depth0
        },
        contexts: [],
        types: [],
        data: data
    }))), data.buffer.push('>\n    <div class="container-fluid">\n      <div class="row">\n       <div class="col-sm-4">\n          <p class="lead">\n            '), 
    stack1 = helpers["if"].call(depth0, "event.show", {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        inverse: self.program(4, program4, data),
        fn: self.program(1, program1, data),
        contexts: [ depth0 ],
        types: [ "ID" ],
        data: data
    }), (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("\n            <br/>\n            <small>("), 
    data.buffer.push(escapeExpression((helper = helpers.getWeekday || depth0 && depth0.getWeekday, 
    options = {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        contexts: [ depth0 ],
        types: [ "ID" ],
        data: data
    }, helper ? helper.call(depth0, "event.start_time", options) : helperMissing.call(depth0, "getWeekday", "event.start_time", options)))), 
    data.buffer.push(' <span style="white-space:nowrap">'), data.buffer.push(escapeExpression((helper = helpers.getTime || depth0 && depth0.getTime, 
    options = {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        contexts: [ depth0 ],
        types: [ "ID" ],
        data: data
    }, helper ? helper.call(depth0, "event.start_time", options) : helperMissing.call(depth0, "getTime", "event.start_time", options)))), 
    data.buffer.push(' - </span>\n            <span style="white-space:nowrap">'), data.buffer.push(escapeExpression((helper = helpers.getTime || depth0 && depth0.getTime, 
    options = {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        contexts: [ depth0 ],
        types: [ "ID" ],
        data: data
    }, helper ? helper.call(depth0, "event.end_time", options) : helperMissing.call(depth0, "getTime", "event.end_time", options)))), 
    data.buffer.push("</span>)</small>\n          </p>\n          <p>Price: "), stack1 = helpers._triageMustache.call(depth0, "event.Cost", {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        contexts: [ depth0 ],
        types: [ "ID" ],
        data: data
    }), (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push('</p>\n        </div>\n        <div class="col-xs-5 col-sm-4">\n          <p>'), 
    helper = helpers["link-to"] || depth0 && depth0["link-to"], options = {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        inverse: self.noop,
        fn: self.program(7, program7, data),
        contexts: [ depth0, depth0 ],
        types: [ "STRING", "ID" ],
        data: data
    }, stack1 = helper ? helper.call(depth0, "venue", "event.venue.pageUrl", options) : helperMissing.call(depth0, "link-to", "venue", "event.venue.pageUrl", options), 
    (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push('\n          </p>\n        </div>\n        <div class="col-xs-7 col-sm-4">\n          <ul class="schedule-list__performer-list">\n            \n          '), 
    stack1 = helpers.each.call(depth0, "performer", "in", "event.sortedPerformers", {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        inverse: self.noop,
        fn: self.program(9, program9, data),
        contexts: [ depth0, depth0, depth0 ],
        types: [ "ID", "ID", "ID" ],
        data: data
    }), (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("  \n          "), 
    stack1 = helpers.each.call(depth0, "emcee", "in", "event.emcees", {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        inverse: self.noop,
        fn: self.program(12, program12, data),
        contexts: [ depth0, depth0, depth0 ],
        types: [ "ID", "ID", "ID" ],
        data: data
    }), (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push(" \n          </ul>\n          &nbsp;\n        </div>\n      </div>\n    </div>\n    </li>\n\n"), 
    buffer;
}), Ember.TEMPLATES._schedule_list_item_performer_list = Ember.Handlebars.template(function(Handlebars, depth0, helpers, partials, data) {
    this.compilerInfo = [ 4, ">= 1.0.0" ], helpers = this.merge(helpers, Ember.Handlebars.helpers), 
    data = data || {}, data.buffer.push("\n\n");
}), Ember.TEMPLATES._sponsors_front_page = Ember.Handlebars.template(function(Handlebars, depth0, helpers, partials, data) {
    this.compilerInfo = [ 4, ">= 1.0.0" ], helpers = this.merge(helpers, Ember.Handlebars.helpers), 
    data = data || {}, data.buffer.push('<div id="lg">\n  <div class="container sponsors-container text-center">\n    <h2>SPONSORED BY</h2>\n    <div class="row">\n      <div class="col-sm-8 col-sm-offset-2">\n        <a target="_blank" href="http://squarespace.com/?channel=events&subchannel=comedy&source=bridgetown14"><img class="img-responsive" src="/assets/sponsor-squarespace-big.png" alt=""></a>\n      </div>\n    </div>\n    <div class="row">\n      <div class="col-xs-8 col-xs-offset-2 col-sm-4 col-sm-offset-4">\n        <a target="_blank" href="https://taximagic.com"><img class="img-responsive" src="/assets/sponsor-taxi-magic-big.png" alt=""></a>\n      </div>\n    </div>\n    <div class="row">\n      <div class="col-xs-8 col-xs-offset-2 col-sm-4 col-sm-offset-4">\n        <a target="_blank" href="http://mailchimp.com"><img class="img-responsive" src="/assets/sponsor-mailchimp-long.png?1" alt=""></a>\n      </div>\n    </div>\n    <div class="row">\n      <div class="col-xs-4 col-sm-2">\n        <a target="_blank" href="http://www.portlandoldies.com"><img class="img-responsive" src="/assets/sponsor-oldies.png" alt=""></a>\n      </div>\n      <div class="col-xs-4 col-sm-2">\n        <a target="_blank" href="http://www.z100portland.com"><img class="img-responsive" src="/assets/sponsor-z100.png" alt=""></a>\n      </div>\n      <div class="col-xs-4 col-sm-2">\n        <a target="_blank" href="http://www.1059thebrew.com"><img class="img-responsive" src="/assets/sponsor-brew.png" alt=""></a>\n      </div>\n      <div class="col-xs-4 col-sm-2">\n        <a target="_blank" href="http://www.deschutesbrewery.com"><img class="img-responsive" src="/assets/sponsor-deschutes.png" alt=""></a>\n      </div>\n      <div class="col-xs-4 col-sm-2">\n        <a target="_blank" href="http://sizzlepie.com"><img class="img-responsive" src="/assets/sponsor-sizzle-pie.png" alt=""></a>\n      </div>\n   \n    </div><!-- row -->\n  </div><!-- container -->\n</div>');
}), Ember.TEMPLATES.application = Ember.Handlebars.template(function(Handlebars, depth0, helpers, partials, data) {
    this.compilerInfo = [ 4, ">= 1.0.0" ], helpers = this.merge(helpers, Ember.Handlebars.helpers), 
    data = data || {};
    var stack1, helper, options, buffer = "", helperMissing = helpers.helperMissing, escapeExpression = this.escapeExpression;
    return data.buffer.push('<div id="wrap">\n  '), data.buffer.push(escapeExpression((helper = helpers.partial || depth0 && depth0.partial, 
    options = {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        contexts: [ depth0 ],
        types: [ "STRING" ],
        data: data
    }, helper ? helper.call(depth0, "header", options) : helperMissing.call(depth0, "partial", "header", options)))), 
    data.buffer.push('\n\n  \n  <div class="main">\n    <div class="container">\n      <div class="row">\n        '), 
    data.buffer.push(escapeExpression((helper = helpers.outlet || depth0 && depth0.outlet, 
    options = {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        contexts: [ depth0 ],
        types: [ "STRING" ],
        data: data
    }, helper ? helper.call(depth0, "jumbotron", options) : helperMissing.call(depth0, "outlet", "jumbotron", options)))), 
    data.buffer.push("\n      </div>\n    </div>\n  "), stack1 = helpers._triageMustache.call(depth0, "outlet", {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        contexts: [ depth0 ],
        types: [ "ID" ],
        data: data
    }), (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push('\n  </div>\n  <div id="push"></div>\n</div></div>\n\n'), 
    data.buffer.push(escapeExpression((helper = helpers.partial || depth0 && depth0.partial, 
    options = {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        contexts: [ depth0 ],
        types: [ "STRING" ],
        data: data
    }, helper ? helper.call(depth0, "footer", options) : helperMissing.call(depth0, "partial", "footer", options)))), 
    data.buffer.push('\n\n\n  <!-- MODAL FOR CONTACT -->\n  <!-- Modal -->\n  <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\n    <div class="modal-dialog">\n      <div class="modal-content">\n        <div class="modal-header">\n          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\n          <h4 class="modal-title" id="myModalLabel">contact us</h4>\n        </div>\n        <div class="modal-body">\n            <div class="row centered">\n              <p>We are available 24/7, so don\'t hesitate to contact us.</p>\n              <p>\n                Somestreet Ave, 987<br/>\n            London, UK.<br/>\n            +44 8948-4343<br/>\n            hi@blacktie.co\n              </p>\n              <div id="mapwrap">\n   \n          </div>  \n            </div>\n        </div>\n        <div class="modal-footer">\n          <button type="button" class="btn btn-danger" data-dismiss="modal">Save & Go</button>\n        </div>\n      </div><!-- /.modal-content -->\n    </div><!-- /.modal-dialog -->\n  </div><!-- /.modal -->\n'), 
    buffer;
}), Ember.TEMPLATES.catch_all = Ember.Handlebars.template(function(Handlebars, depth0, helpers, partials, data) {
    this.compilerInfo = [ 4, ">= 1.0.0" ], helpers = this.merge(helpers, Ember.Handlebars.helpers), 
    data = data || {};
    var stack1, buffer = "", escapeExpression = this.escapeExpression;
    return data.buffer.push('<div class="row">\n  <div class="jumbotron jumbotron-bg1 jumbotron-dark jumbotron-index">\n    <div class="container">\n      <div class="row centered">\n        <div class="col-lg-8 col-lg-offset-2">\n        <h1>'), 
    stack1 = helpers._triageMustache.call(depth0, "collection.title", {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        contexts: [ depth0 ],
        types: [ "ID" ],
        data: data
    }), (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push('</h1>\n        </div>\n      </div><!-- row -->\n    </div><!-- container -->\n  </div><!-- headerwrap -->\n</div>\n<div class="container main-content">\n  '), 
    data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "mainContent", {
        hash: {
            unescaped: "true"
        },
        hashTypes: {
            unescaped: "STRING"
        },
        hashContexts: {
            unescaped: depth0
        },
        contexts: [ depth0 ],
        types: [ "ID" ],
        data: data
    }))), data.buffer.push("\n</div>\n\n\n"), buffer;
}), Ember.TEMPLATES.contact = Ember.Handlebars.template(function(Handlebars, depth0, helpers, partials, data) {
    this.compilerInfo = [ 4, ">= 1.0.0" ], helpers = this.merge(helpers, Ember.Handlebars.helpers), 
    data = data || {};
    var stack1, buffer = "", escapeExpression = this.escapeExpression;
    return data.buffer.push('\n  <div class="jumbotron jumbotron-minor jumbotron-color-1  jumbotron-page-header">\n    <div class="container">\n      <div class="row centered">\n        <div class="col-lg-8 col-lg-offset-2">\n        <h1>'), 
    stack1 = helpers._triageMustache.call(depth0, "collection.title", {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        contexts: [ depth0 ],
        types: [ "ID" ],
        data: data
    }), (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push('</h1>\n        </div>\n      </div><!-- row -->\n    </div><!-- container -->\n  </div><!-- headerwrap -->\n\n<div class="container main-content">\n  '), 
    data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "mainContent", {
        hash: {
            unescaped: "true"
        },
        hashTypes: {
            unescaped: "STRING"
        },
        hashContexts: {
            unescaped: depth0
        },
        contexts: [ depth0 ],
        types: [ "ID" ],
        data: data
    }))), data.buffer.push("\n</div>\n\n\n"), buffer;
}), Ember.TEMPLATES.event = Ember.Handlebars.template(function(Handlebars, depth0, helpers, partials, data) {
    function program1(depth0, data) {
        var stack1, buffer = "";
        return data.buffer.push('\n            <span class="schedule-list__item-venue-label label label-default">'), 
        stack1 = helpers._triageMustache.call(depth0, "venue.Name", {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            contexts: [ depth0 ],
            types: [ "ID" ],
            data: data
        }), (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("</span>\n            "), 
        buffer;
    }
    function program3(depth0, data) {
        var buffer = "";
        return data.buffer.push('\n          <div class="row">\n            <div class="col-sm-4">\n              <p>\n                <img class="img-responsive performer-headshot" '), 
        data.buffer.push(escapeExpression(helpers["bind-attr"].call(depth0, {
            hash: {
                src: "show.headshot300"
            },
            hashTypes: {
                src: "STRING"
            },
            hashContexts: {
                src: depth0
            },
            contexts: [],
            types: [],
            data: data
        }))), data.buffer.push(' />\n              </p>\n            </div>\n            \n            <div class="col-sm-8">\n              <p>\n                '), 
        data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "show.Copy", {
            hash: {
                unescaped: "true"
            },
            hashTypes: {
                unescaped: "STRING"
            },
            hashContexts: {
                unescaped: depth0
            },
            contexts: [ depth0 ],
            types: [ "ID" ],
            data: data
        }))), data.buffer.push("\n              </p>\n            </div>\n          </div>\n            "), 
        buffer;
    }
    function program5(depth0, data) {
        var stack1, helper, options, buffer = "";
        return data.buffer.push("\n                \n                "), helper = helpers["link-to"] || depth0 && depth0["link-to"], 
        options = {
            hash: {
                classNames: "list-group-item"
            },
            hashTypes: {
                classNames: "STRING"
            },
            hashContexts: {
                classNames: depth0
            },
            inverse: self.noop,
            fn: self.program(6, program6, data),
            contexts: [ depth0, depth0 ],
            types: [ "STRING", "ID" ],
            data: data
        }, stack1 = helper ? helper.call(depth0, "performer", "performer", options) : helperMissing.call(depth0, "link-to", "performer", "performer", options), 
        (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("\n               \n              "), 
        buffer;
    }
    function program6(depth0, data) {
        var buffer = "";
        return data.buffer.push("\n                  "), data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "performer.Name", {
            hash: {
                unescaped: "true"
            },
            hashTypes: {
                unescaped: "STRING"
            },
            hashContexts: {
                unescaped: depth0
            },
            contexts: [ depth0 ],
            types: [ "ID" ],
            data: data
        }))), data.buffer.push("\n                "), buffer;
    }
    function program8(depth0, data) {
        var stack1, helper, options, buffer = "";
        return data.buffer.push("\n                "), helper = helpers["link-to"] || depth0 && depth0["link-to"], 
        options = {
            hash: {
                classNames: "list-group-item"
            },
            hashTypes: {
                classNames: "STRING"
            },
            hashContexts: {
                classNames: depth0
            },
            inverse: self.noop,
            fn: self.program(9, program9, data),
            contexts: [ depth0, depth0 ],
            types: [ "STRING", "ID" ],
            data: data
        }, stack1 = helper ? helper.call(depth0, "performer", "emcee", options) : helperMissing.call(depth0, "link-to", "performer", "emcee", options), 
        (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("\n               "), 
        buffer;
    }
    function program9(depth0, data) {
        var buffer = "";
        return data.buffer.push("\n                  <strong>MC: </strong> "), data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "emcee.Name", {
            hash: {
                unescaped: "true"
            },
            hashTypes: {
                unescaped: "STRING"
            },
            hashContexts: {
                unescaped: depth0
            },
            contexts: [ depth0 ],
            types: [ "ID" ],
            data: data
        }))), data.buffer.push("\n                "), buffer;
    }
    this.compilerInfo = [ 4, ">= 1.0.0" ], helpers = this.merge(helpers, Ember.Handlebars.helpers), 
    data = data || {};
    var stack1, helper, options, buffer = "", escapeExpression = this.escapeExpression, self = this, helperMissing = helpers.helperMissing;
    return data.buffer.push('\n  <div class="jumbotron jumbotron-tiny jumbotron-color-2 jumbotron-page-header">\n    <div class="container">\n      <div class="row centered">\n        <div class="col-lg-8 col-lg-offset-2">\n        <h2>'), 
    data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "Name", {
        hash: {
            unescaped: "true"
        },
        hashTypes: {
            unescaped: "STRING"
        },
        hashContexts: {
            unescaped: depth0
        },
        contexts: [ depth0 ],
        types: [ "ID" ],
        data: data
    }))), data.buffer.push('</h2>\n        </div>\n      </div><!-- row -->\n    </div><!-- container -->\n  </div><!-- headerwrap -->\n\n<div class="container single-performer main-content">\n\n          <p class="lead">\n            '), 
    data.buffer.push(escapeExpression((helper = helpers.niceDate || depth0 && depth0.niceDate, 
    options = {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        contexts: [ depth0 ],
        types: [ "ID" ],
        data: data
    }, helper ? helper.call(depth0, "start_time", options) : helperMissing.call(depth0, "niceDate", "start_time", options)))), 
    data.buffer.push("<br/> \n            "), data.buffer.push(escapeExpression((helper = helpers.getTime || depth0 && depth0.getTime, 
    options = {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        contexts: [ depth0 ],
        types: [ "ID" ],
        data: data
    }, helper ? helper.call(depth0, "start_time", options) : helperMissing.call(depth0, "getTime", "start_time", options)))), 
    data.buffer.push(" - "), data.buffer.push(escapeExpression((helper = helpers.getTime || depth0 && depth0.getTime, 
    options = {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        contexts: [ depth0 ],
        types: [ "ID" ],
        data: data
    }, helper ? helper.call(depth0, "end_time", options) : helperMissing.call(depth0, "getTime", "end_time", options)))), 
    data.buffer.push("</small>\n          </p>\n          <p>"), helper = helpers["link-to"] || depth0 && depth0["link-to"], 
    options = {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        inverse: self.noop,
        fn: self.program(1, program1, data),
        contexts: [ depth0, depth0 ],
        types: [ "STRING", "ID" ],
        data: data
    }, stack1 = helper ? helper.call(depth0, "venue", "venue", options) : helperMissing.call(depth0, "link-to", "venue", "venue", options), 
    (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("\n          </p>\n          \n          "), 
    stack1 = helpers["if"].call(depth0, "show", {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        inverse: self.noop,
        fn: self.program(3, program3, data),
        contexts: [ depth0 ],
        types: [ "ID" ],
        data: data
    }), (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push('\n\n          <ul class="list-group">\n            <li class="list-group-item active" style="background:#695b53;">\n            <h4 class="list-group-item-heading" style="background:#695b53;color:white">Performers</h4>\n            </li>\n              '), 
    stack1 = helpers.each.call(depth0, "performer", "in", "sortedPerformers", {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        inverse: self.noop,
        fn: self.program(5, program5, data),
        contexts: [ depth0, depth0, depth0 ],
        types: [ "ID", "ID", "ID" ],
        data: data
    }), (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push(" \n              "), 
    stack1 = helpers.each.call(depth0, "emcee", "in", "emcees", {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        inverse: self.noop,
        fn: self.program(8, program8, data),
        contexts: [ depth0, depth0, depth0 ],
        types: [ "ID", "ID", "ID" ],
        data: data
    }), (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push(" \n\n          </ul>\n</div>\n\n\n\n\n\n\n\n\n\n\n\n"), 
    buffer;
}), Ember.TEMPLATES.events = Ember.Handlebars.template(function(Handlebars, depth0, helpers, partials, data) {
    function program1(depth0, data) {
        var stack1, helper, options, buffer = "";
        return data.buffer.push("\n    <tr>\n      <td>"), stack1 = helpers._triageMustache.call(depth0, "event.name", {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            contexts: [ depth0 ],
            types: [ "ID" ],
            data: data
        }), (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("</td>\n      <td>"), 
        stack1 = helpers._triageMustache.call(depth0, "event.start_time", {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            contexts: [ depth0 ],
            types: [ "ID" ],
            data: data
        }), (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("</td>\n      <td>"), 
        stack1 = helpers._triageMustache.call(depth0, "event.end_time", {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            contexts: [ depth0 ],
            types: [ "ID" ],
            data: data
        }), (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("</td>\n      <td>"), 
        stack1 = helpers._triageMustache.call(depth0, "event.price", {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            contexts: [ depth0 ],
            types: [ "ID" ],
            data: data
        }), (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("</td>\n      <td>"), 
        helper = helpers.linkTo || depth0 && depth0.linkTo, options = {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            inverse: self.noop,
            fn: self.program(2, program2, data),
            contexts: [ depth0, depth0 ],
            types: [ "STRING", "ID" ],
            data: data
        }, stack1 = helper ? helper.call(depth0, "event", "event", options) : helperMissing.call(depth0, "linkTo", "event", "event", options), 
        (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("</td>\n    </tr>\n    "), 
        buffer;
    }
    function program2(depth0, data) {
        data.buffer.push("view");
    }
    this.compilerInfo = [ 4, ">= 1.0.0" ], helpers = this.merge(helpers, Ember.Handlebars.helpers), 
    data = data || {};
    var stack1, buffer = "", self = this, helperMissing = helpers.helperMissing;
    return data.buffer.push('  <div class="jumbotron jumbotron-minor jumbotron-color-1  jumbotron-page-header">\n    <div class="container">\n      <div class="row centered">\n        <div class="col-lg-8 col-lg-offset-2">\n        <h1>'), 
    stack1 = helpers._triageMustache.call(depth0, "collection.title", {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        contexts: [ depth0 ],
        types: [ "ID" ],
        data: data
    }), (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push('</h1>\n        </div>\n      </div><!-- row -->\n    </div><!-- container -->\n  </div><!-- headerwrap -->\n\n<div class="container main-content">\n  <table>\n  <thead>\n    <th>name</th>\n    <th>start_time</th>\n    <th>end_time</th>\n    <th>price</th>\n  </thead>\n  <tbody>\n    '), 
    stack1 = helpers.each.call(depth0, "event", "in", "controller", {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        inverse: self.noop,
        fn: self.program(1, program1, data),
        contexts: [ depth0, depth0, depth0 ],
        types: [ "ID", "ID", "ID" ],
        data: data
    }), (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("\n  </tbody>\n</table>\n</div>\n\n\n\n\n\n"), 
    buffer;
}), Ember.TEMPLATES.faqs = Ember.Handlebars.template(function(Handlebars, depth0, helpers, partials, data) {
    this.compilerInfo = [ 4, ">= 1.0.0" ], helpers = this.merge(helpers, Ember.Handlebars.helpers), 
    data = data || {};
    var stack1, buffer = "", escapeExpression = this.escapeExpression;
    return data.buffer.push('\n  <div class="jumbotron jumbotron-minor jumbotron-color-1  jumbotron-page-header">\n    <div class="container">\n      <div class="row centered">\n        <div class="col-lg-8 col-lg-offset-2">\n        <h1>'), 
    stack1 = helpers._triageMustache.call(depth0, "collection.title", {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        contexts: [ depth0 ],
        types: [ "ID" ],
        data: data
    }), (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push('</h1>\n        </div>\n      </div><!-- row -->\n    </div><!-- container -->\n  </div><!-- headerwrap -->\n\n<div class="container main-content">\n  '), 
    data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "mainContent", {
        hash: {
            unescaped: "true"
        },
        hashTypes: {
            unescaped: "STRING"
        },
        hashContexts: {
            unescaped: depth0
        },
        contexts: [ depth0 ],
        types: [ "ID" ],
        data: data
    }))), data.buffer.push("\n</div>\n\n\n"), buffer;
}), Ember.TEMPLATES.four_oh_four = Ember.Handlebars.template(function(Handlebars, depth0, helpers, partials, data) {
    this.compilerInfo = [ 4, ">= 1.0.0" ], helpers = this.merge(helpers, Ember.Handlebars.helpers), 
    data = data || {}, data.buffer.push('\n  <div class="jumbotron jumbotron-minor jumbotron-color-1  jumbotron-page-header">\n    <div class="container">\n      <div class="row centered">\n        <div class="col-lg-8 col-lg-offset-2">\n        <h1>Page Not Found</h1>\n        </div>\n      </div><!-- row -->\n    </div><!-- container -->\n  </div><!-- headerwrap -->\n\n  <div class="container main-content">\n    <div class="row">\n      <div class="col-md-8 col-md-offset-2">\n        <div class="">\n          <h2>The page cannot be found...</h2>\n          <p>Perhaps you are here because:</p>\n          <ul>\n            <li>The page has moved</li>\n            <li>The page no longer exists</li>\n            <li>You were looking for your puppy and got lost</li>\n            <li>You like 404 pages</li>\n          </ul>\n          <p><a class="btn btn-block btn-primary" href="/">Return to homepage </a></p>\n        </div>\n      </div>\n    </div>\n  </div>\n');
}), Ember.TEMPLATES.friday_schedule = Ember.Handlebars.template(function(Handlebars, depth0, helpers, partials, data) {
    this.compilerInfo = [ 4, ">= 1.0.0" ], helpers = this.merge(helpers, Ember.Handlebars.helpers), 
    data = data || {};
    var helper, options, buffer = "", escapeExpression = this.escapeExpression, helperMissing = helpers.helperMissing;
    return data.buffer.push('  <div class="jumbotron jumbotron-minor jumbotron-color-1  jumbotron-page-header">\n    <div class="container">\n      <div class="row centered">\n        <div class="col-lg-8 col-lg-offset-2">\n        <h1>Friday Schedule</h1>\n        </div>\n      </div><!-- row -->\n    </div><!-- container -->\n  </div><!-- headerwrap -->\n\n<div class="container main-content">\n\n  <div id="schedules" '), 
    data.buffer.push(escapeExpression(helpers["bind-attr"].call(depth0, {
        hash: {
            "class": "scheduleClass"
        },
        hashTypes: {
            "class": "STRING"
        },
        hashContexts: {
            "class": depth0
        },
        contexts: [],
        types: [],
        data: data
    }))), data.buffer.push(">\n  "), data.buffer.push(escapeExpression((helper = helpers.partial || depth0 && depth0.partial, 
    options = {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        contexts: [ depth0 ],
        types: [ "STRING" ],
        data: data
    }, helper ? helper.call(depth0, "schedule_table_friday", options) : helperMissing.call(depth0, "partial", "schedule_table_friday", options)))), 
    data.buffer.push("\n  </div>\n</div>\n\n\n\n\n\n"), buffer;
}), Ember.TEMPLATES.history = Ember.Handlebars.template(function(Handlebars, depth0, helpers, partials, data) {
    this.compilerInfo = [ 4, ">= 1.0.0" ], helpers = this.merge(helpers, Ember.Handlebars.helpers), 
    data = data || {};
    var stack1, buffer = "", escapeExpression = this.escapeExpression;
    return data.buffer.push('\n  <div class="jumbotron jumbotron-minor jumbotron-color-1  jumbotron-page-header">\n    <div class="container">\n      <div class="row centered">\n        <div class="col-lg-8 col-lg-offset-2">\n        <h1>'), 
    stack1 = helpers._triageMustache.call(depth0, "collection.title", {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        contexts: [ depth0 ],
        types: [ "ID" ],
        data: data
    }), (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push('</h1>\n        </div>\n      </div><!-- row -->\n    </div><!-- container -->\n  </div><!-- headerwrap -->\n\n<div class="container main-content">\n  '), 
    data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "mainContent", {
        hash: {
            unescaped: "true"
        },
        hashTypes: {
            unescaped: "STRING"
        },
        hashContexts: {
            unescaped: depth0
        },
        contexts: [ depth0 ],
        types: [ "ID" ],
        data: data
    }))), data.buffer.push("\n</div>\n\n\n"), buffer;
}), Ember.TEMPLATES.index = Ember.Handlebars.template(function(Handlebars, depth0, helpers, partials, data) {
    this.compilerInfo = [ 4, ">= 1.0.0" ], helpers = this.merge(helpers, Ember.Handlebars.helpers), 
    data = data || {};
    var helper, options, buffer = "", helperMissing = helpers.helperMissing, escapeExpression = this.escapeExpression;
    return data.buffer.push('<div class="jumbotron jumbotron-color-1 jumbotron-page-header">\n  <div class="container">\n    <div class="row centered">\n      <div class="col-lg-8 col-lg-offset-2 text-center">\n      <div class="header-logo"><img class="img-responsive" src="/assets/logo-long-inverse.png" /></div>\n      \n      <h3>Portland, OR</h3>\n      <h3>May 8th - May 11th</h3>\n      </div>\n    </div><!-- row -->\n  </div><!-- container -->\n</div><!-- headerwrap -->\n\n<div class="main-content">\n<div class="container">\n  <div class="row centered">\n    <div class="col-sm-6">\n      \n      <h3>\n        <a href="http://bridgetown.laughstub.com/event.cfm?id=308381" class="btn btn-primary btn-lg btn-block" target="_blank">\n        Buy Tickets!</a>\n      </h3>\n      '), 
    data.buffer.push(escapeExpression((helper = helpers.partial || depth0 && depth0.partial, 
    options = {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        contexts: [ depth0 ],
        types: [ "STRING" ],
        data: data
    }, helper ? helper.call(depth0, "news", options) : helperMissing.call(depth0, "partial", "news", options)))), 
    data.buffer.push('\n    </div><!-- col-lg-6 -->\n\n    <div class="col-sm-6">\n      <h3>@bridgetown</h3>\n      <div class="panel panel-default">\n\n        <div class="panel-body">\n          \n        '), 
    data.buffer.push(escapeExpression((helper = helpers.partial || depth0 && depth0.partial, 
    options = {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        contexts: [ depth0 ],
        types: [ "STRING" ],
        data: data
    }, helper ? helper.call(depth0, "recent_tweets", options) : helperMissing.call(depth0, "partial", "recent_tweets", options)))), 
    data.buffer.push('\n        </div>\n      </div>\n    </div><!-- col-lg-6 -->\n    <div class="clearfix"></div>\n  </div><!-- row -->\n  <br>\n  <br>\n</div><!-- container -->\n\n\n\n'), 
    data.buffer.push(escapeExpression((helper = helpers.partial || depth0 && depth0.partial, 
    options = {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        contexts: [ depth0 ],
        types: [ "STRING" ],
        data: data
    }, helper ? helper.call(depth0, "sponsors_front_page", options) : helperMissing.call(depth0, "partial", "sponsors_front_page", options)))), 
    data.buffer.push("\n</div>"), buffer;
}), Ember.TEMPLATES.jumbotron_index = Ember.Handlebars.template(function(Handlebars, depth0, helpers, partials, data) {
    this.compilerInfo = [ 4, ">= 1.0.0" ], helpers = this.merge(helpers, Ember.Handlebars.helpers), 
    data = data || {}, data.buffer.push('<div class="jumbotron jumbotron-bg1 jumbotron-dark jumbotron-color-5  jumbotron-page-header">\n  <div class="container">\n    <div class="row centered">\n      <div class="col-lg-8 col-lg-offset-2">\n      <h1>Bridgetown Comedy Festival 2014</h1>\n      <h2>May 8th - May 11th</h2>\n      </div>\n    </div><!-- row -->\n  </div><!-- container -->\n</div><!-- headerwrap -->');
}), Ember.TEMPLATES.loading = Ember.Handlebars.template(function(Handlebars, depth0, helpers, partials, data) {
    this.compilerInfo = [ 4, ">= 1.0.0" ], helpers = this.merge(helpers, Ember.Handlebars.helpers), 
    data = data || {};
    var helper, options, buffer = "", helperMissing = helpers.helperMissing, escapeExpression = this.escapeExpression;
    return data.buffer.push(' <div class="row"> <div class="jumbotron jumbotron-default">\n \n   <div class="container main-content">\n    <h1 class="text-center">Loading...</h1>\n      <h2>&nbsp;</h2>\n      <h1>'), 
    data.buffer.push(escapeExpression((helper = helpers["x-spinner"] || depth0 && depth0["x-spinner"], 
    options = {
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
            lines: depth0,
            radius: depth0,
            length: depth0,
            shadow: depth0,
            color: depth0,
            width: depth0
        },
        contexts: [],
        types: [],
        data: data
    }, helper ? helper.call(depth0, options) : helperMissing.call(depth0, "x-spinner", options)))), 
    data.buffer.push("</h1>\n      <h2>&nbsp;</h2>\n    </div>\n  </div>\n</div>"), 
    buffer;
}), Ember.TEMPLATES.performer = Ember.Handlebars.template(function(Handlebars, depth0, helpers, partials, data) {
    function program1(depth0, data) {
        var stack1, helper, options, buffer = "";
        return data.buffer.push("\n          "), helper = helpers["link-to"] || depth0 && depth0["link-to"], 
        options = {
            hash: {
                classNames: "list-group-item"
            },
            hashTypes: {
                classNames: "STRING"
            },
            hashContexts: {
                classNames: depth0
            },
            inverse: self.noop,
            fn: self.program(2, program2, data),
            contexts: [ depth0, depth0 ],
            types: [ "STRING", "ID" ],
            data: data
        }, stack1 = helper ? helper.call(depth0, "event", "event", options) : helperMissing.call(depth0, "link-to", "event", "event", options), 
        (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("\n        "), 
        buffer;
    }
    function program2(depth0, data) {
        var stack1, helper, options, buffer = "";
        return data.buffer.push("\n            <strong>"), data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "event.Name", {
            hash: {
                unescaped: "true"
            },
            hashTypes: {
                unescaped: "STRING"
            },
            hashContexts: {
                unescaped: depth0
            },
            contexts: [ depth0 ],
            types: [ "ID" ],
            data: data
        }))), data.buffer.push("</strong> - "), stack1 = helpers._triageMustache.call(depth0, "event.venue.Name", {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            contexts: [ depth0 ],
            types: [ "ID" ],
            data: data
        }), (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("\n              <br /> ("), 
        data.buffer.push(escapeExpression((helper = helpers.niceDate || depth0 && depth0.niceDate, 
        options = {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            contexts: [ depth0 ],
            types: [ "ID" ],
            data: data
        }, helper ? helper.call(depth0, "event.start_time", options) : helperMissing.call(depth0, "niceDate", "event.start_time", options)))), 
        data.buffer.push(" "), data.buffer.push(escapeExpression((helper = helpers.getTime || depth0 && depth0.getTime, 
        options = {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            contexts: [ depth0 ],
            types: [ "ID" ],
            data: data
        }, helper ? helper.call(depth0, "event.start_time", options) : helperMissing.call(depth0, "getTime", "event.start_time", options)))), 
        data.buffer.push(" - "), data.buffer.push(escapeExpression((helper = helpers.getTime || depth0 && depth0.getTime, 
        options = {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            contexts: [ depth0 ],
            types: [ "ID" ],
            data: data
        }, helper ? helper.call(depth0, "event.end_time", options) : helperMissing.call(depth0, "getTime", "event.end_time", options)))), 
        data.buffer.push(")\n          "), buffer;
    }
    function program4(depth0, data) {
        data.buffer.push('\n          <li class="list-group-item">No shows scheduled yet...</li>\n        ');
    }
    function program6(depth0, data) {
        var stack1, buffer = "";
        return data.buffer.push('\n      <ul class="list-group">\n        <li class="list-group-item active" style="background:#695b53;">\n        <h4 class="list-group-item-heading" style="background:#695b53;color:white">Show MC</h4>\n        </li>\n        '), 
        stack1 = helpers.each.call(depth0, "event", "in", "mc_events", {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            inverse: self.program(4, program4, data),
            fn: self.program(7, program7, data),
            contexts: [ depth0, depth0, depth0 ],
            types: [ "ID", "ID", "ID" ],
            data: data
        }), (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("\n\n      </ul>\n      "), 
        buffer;
    }
    function program7(depth0, data) {
        var stack1, helper, options, buffer = "";
        return data.buffer.push("\n          "), helper = helpers["link-to"] || depth0 && depth0["link-to"], 
        options = {
            hash: {
                classNames: "list-group-item"
            },
            hashTypes: {
                classNames: "STRING"
            },
            hashContexts: {
                classNames: depth0
            },
            inverse: self.noop,
            fn: self.program(2, program2, data),
            contexts: [ depth0, depth0 ],
            types: [ "STRING", "ID" ],
            data: data
        }, stack1 = helper ? helper.call(depth0, "event", "event.id", options) : helperMissing.call(depth0, "link-to", "event", "event.id", options), 
        (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("\n        "), 
        buffer;
    }
    function program9(depth0, data) {
        data.buffer.push("← All Performers");
    }
    this.compilerInfo = [ 4, ">= 1.0.0" ], helpers = this.merge(helpers, Ember.Handlebars.helpers), 
    data = data || {};
    var stack1, helper, options, buffer = "", escapeExpression = this.escapeExpression, helperMissing = helpers.helperMissing, self = this;
    return data.buffer.push('\n  <div class="jumbotron jumbotron-tiny jumbotron-color-2 jumbotron-page-header">\n    <div class="container">\n      <div class="row centered">\n        <div class="col-lg-8 col-lg-offset-2">\n        <h2>'), 
    data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "Name", {
        hash: {
            unescaped: "true"
        },
        hashTypes: {
            unescaped: "STRING"
        },
        hashContexts: {
            unescaped: depth0
        },
        contexts: [ depth0 ],
        types: [ "ID" ],
        data: data
    }))), data.buffer.push('</h2>\n        </div>\n      </div><!-- row -->\n    </div><!-- container -->\n  </div><!-- headerwrap -->\n\n<div class="container single-performer main-content">\n  <div class="row">\n\n    <div class="col-sm-4 text-center">\n      <p><img class="img-responsive performer-headshot" '), 
    data.buffer.push(escapeExpression(helpers["bind-attr"].call(depth0, {
        hash: {
            src: "headshot300"
        },
        hashTypes: {
            src: "STRING"
        },
        hashContexts: {
            src: depth0
        },
        contexts: [],
        types: [],
        data: data
    }))), data.buffer.push(' /></p>\n    </div>\n    <div class="col-sm-8">\n      <p>\n        '), 
    data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "Bio", {
        hash: {
            unescaped: "true"
        },
        hashTypes: {
            unescaped: "STRING"
        },
        hashContexts: {
            unescaped: depth0
        },
        contexts: [ depth0 ],
        types: [ "ID" ],
        data: data
    }))), data.buffer.push('\n      </p>\n      \n      <ul class="list-group">\n        <li class="list-group-item active" style="background:#695b53;">\n        <h4 class="list-group-item-heading" style="background:#695b53;color:white">Shows</h4>\n        </li>\n        '), 
    stack1 = helpers.each.call(depth0, "event", "in", "sortedEvents", {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        inverse: self.program(4, program4, data),
        fn: self.program(1, program1, data),
        contexts: [ depth0, depth0, depth0 ],
        types: [ "ID", "ID", "ID" ],
        data: data
    }), (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("\n\n      </ul>\n      "), 
    stack1 = helpers["if"].call(depth0, "isAnMC", {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        inverse: self.noop,
        fn: self.program(6, program6, data),
        contexts: [ depth0 ],
        types: [ "ID" ],
        data: data
    }), (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("\n      <p>\n        "), 
    helper = helpers["link-to"] || depth0 && depth0["link-to"], options = {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        inverse: self.noop,
        fn: self.program(9, program9, data),
        contexts: [ depth0 ],
        types: [ "STRING" ],
        data: data
    }, stack1 = helper ? helper.call(depth0, "performers", options) : helperMissing.call(depth0, "link-to", "performers", options), 
    (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("\n      </p>\n    </div>\n  </div>\n</div>\n\n\n\n\n\n"), 
    buffer;
}), Ember.TEMPLATES.performers = Ember.Handlebars.template(function(Handlebars, depth0, helpers, partials, data) {
    this.compilerInfo = [ 4, ">= 1.0.0" ], helpers = this.merge(helpers, Ember.Handlebars.helpers), 
    data = data || {};
    var buffer = "", escapeExpression = this.escapeExpression;
    return data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.PerformersView", {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        contexts: [ depth0 ],
        types: [ "ID" ],
        data: data
    }))), data.buffer.push("\n\n\n"), buffer;
}), Ember.TEMPLATES.performers_gallery = Ember.Handlebars.template(function(Handlebars, depth0, helpers, partials, data) {
    function program1(depth0, data) {
        var stack1, helper, options, buffer = "";
        return data.buffer.push('\n    <div class="col-xs-6 col-sm-6 col-sm-4 col-md-3 col-lg-2 performer-box">\n      <div class="performer-thumbnail">\n        '), 
        helper = helpers["link-to"] || depth0 && depth0["link-to"], options = {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            inverse: self.noop,
            fn: self.program(2, program2, data),
            contexts: [ depth0, depth0 ],
            types: [ "STRING", "ID" ],
            data: data
        }, stack1 = helper ? helper.call(depth0, "performer", "performer", options) : helperMissing.call(depth0, "link-to", "performer", "performer", options), 
        (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("\n      </div>\n      <legend>\n        "), 
        helper = helpers["link-to"] || depth0 && depth0["link-to"], options = {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            inverse: self.noop,
            fn: self.program(4, program4, data),
            contexts: [ depth0, depth0 ],
            types: [ "STRING", "ID" ],
            data: data
        }, stack1 = helper ? helper.call(depth0, "performer", "performer", options) : helperMissing.call(depth0, "link-to", "performer", "performer", options), 
        (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("\n      </legend>\n    </div>\n    "), 
        buffer;
    }
    function program2(depth0, data) {
        var buffer = "";
        return data.buffer.push('\n        <img class="lazy img-responsive" width="300" height="300" '), 
        data.buffer.push(escapeExpression(helpers["bind-attr"].call(depth0, {
            hash: {
                "data-original": "performer.headshot300"
            },
            hashTypes: {
                "data-original": "STRING"
            },
            hashContexts: {
                "data-original": depth0
            },
            contexts: [],
            types: [],
            data: data
        }))), data.buffer.push(" />\n        "), buffer;
    }
    function program4(depth0, data) {
        var buffer = "";
        return data.buffer.push("\n          "), data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "performer.Name", {
            hash: {
                unescaped: "true"
            },
            hashTypes: {
                unescaped: "STRING"
            },
            hashContexts: {
                unescaped: depth0
            },
            contexts: [ depth0 ],
            types: [ "ID" ],
            data: data
        }))), data.buffer.push("\n        "), buffer;
    }
    this.compilerInfo = [ 4, ">= 1.0.0" ], helpers = this.merge(helpers, Ember.Handlebars.helpers), 
    data = data || {};
    var stack1, buffer = "", escapeExpression = this.escapeExpression, self = this, helperMissing = helpers.helperMissing;
    return data.buffer.push('\n<div class="jumbotron jumbotron-bg1 jumbotron-dark jumbotron-performers jumbotron-color-2  jumbotron-page-header">\n  <div class="container">\n    <div class="row centered">\n      <div class="col-lg-8 col-lg-offset-2">\n      <h1>Performers</h1>\n      </div>\n    </div><!-- row -->\n  </div><!-- container -->\n</div><!-- headerwrap -->\n<div class="container main-content">\n  <p class="lead">Performers subject to change...</p>\n  <div class="row">\n    '), 
    stack1 = helpers.each.call(depth0, "performer", "in", "controller", {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        inverse: self.noop,
        fn: self.program(1, program1, data),
        contexts: [ depth0, depth0, depth0 ],
        types: [ "ID", "ID", "ID" ],
        data: data
    }), (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("\n  </div>\n</div>\n"), 
    buffer;
}), Ember.TEMPLATES.press = Ember.Handlebars.template(function(Handlebars, depth0, helpers, partials, data) {
    this.compilerInfo = [ 4, ">= 1.0.0" ], helpers = this.merge(helpers, Ember.Handlebars.helpers), 
    data = data || {};
    var stack1, buffer = "", escapeExpression = this.escapeExpression;
    return data.buffer.push('\n  <div class="jumbotron jumbotron-minor jumbotron-color-1  jumbotron-page-header">\n    <div class="container">\n      <div class="row centered">\n        <div class="col-lg-8 col-lg-offset-2">\n        <h1>'), 
    stack1 = helpers._triageMustache.call(depth0, "collection.title", {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        contexts: [ depth0 ],
        types: [ "ID" ],
        data: data
    }), (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push('</h1>\n        </div>\n      </div><!-- row -->\n    </div><!-- container -->\n  </div><!-- headerwrap -->\n\n<div class="container main-content">\n  '), 
    data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "mainContent", {
        hash: {
            unescaped: "true"
        },
        hashTypes: {
            unescaped: "STRING"
        },
        hashContexts: {
            unescaped: depth0
        },
        contexts: [ depth0 ],
        types: [ "ID" ],
        data: data
    }))), data.buffer.push("\n</div>\n\n\n"), buffer;
}), Ember.TEMPLATES.saturday_schedule = Ember.Handlebars.template(function(Handlebars, depth0, helpers, partials, data) {
    this.compilerInfo = [ 4, ">= 1.0.0" ], helpers = this.merge(helpers, Ember.Handlebars.helpers), 
    data = data || {};
    var helper, options, buffer = "", escapeExpression = this.escapeExpression, helperMissing = helpers.helperMissing;
    return data.buffer.push('  <div class="jumbotron jumbotron-minor jumbotron-color-1  jumbotron-page-header">\n    <div class="container">\n      <div class="row centered">\n        <div class="col-lg-8 col-lg-offset-2">\n        <h1>Saturday Schedule</h1>\n        </div>\n      </div><!-- row -->\n    </div><!-- container -->\n  </div><!-- headerwrap -->\n\n<div class="container main-content">\n\n  <div id="schedules" '), 
    data.buffer.push(escapeExpression(helpers["bind-attr"].call(depth0, {
        hash: {
            "class": "scheduleClass"
        },
        hashTypes: {
            "class": "STRING"
        },
        hashContexts: {
            "class": depth0
        },
        contexts: [],
        types: [],
        data: data
    }))), data.buffer.push(">\n  "), data.buffer.push(escapeExpression((helper = helpers.partial || depth0 && depth0.partial, 
    options = {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        contexts: [ depth0 ],
        types: [ "STRING" ],
        data: data
    }, helper ? helper.call(depth0, "schedule_table_saturday", options) : helperMissing.call(depth0, "partial", "schedule_table_saturday", options)))), 
    data.buffer.push("\n  </div>\n</div>\n\n\n\n\n\n"), buffer;
}), Ember.TEMPLATES.schedule = Ember.Handlebars.template(function(Handlebars, depth0, helpers, partials, data) {
    this.compilerInfo = [ 4, ">= 1.0.0" ], helpers = this.merge(helpers, Ember.Handlebars.helpers), 
    data = data || {};
    var helper, options, buffer = "", escapeExpression = this.escapeExpression, helperMissing = helpers.helperMissing;
    return data.buffer.push('  <div class="jumbotron jumbotron-minor jumbotron-color-1  jumbotron-page-header">\n    <div class="container">\n      <div class="row centered">\n        <div class="col-lg-8 col-lg-offset-2">\n        <h1>Schedule</h1>\n        </div>\n      </div><!-- row -->\n    </div><!-- container -->\n  </div><!-- headerwrap -->\n\n<div class="container main-content">\n  <p>Performers, shows and prices subject to change.</p>\n\n  <div id="schedules" '), 
    data.buffer.push(escapeExpression(helpers["bind-attr"].call(depth0, {
        hash: {
            "class": "scheduleClass"
        },
        hashTypes: {
            "class": "STRING"
        },
        hashContexts: {
            "class": depth0
        },
        contexts: [],
        types: [],
        data: data
    }))), data.buffer.push(">\n\n  "), data.buffer.push(escapeExpression((helper = helpers.partial || depth0 && depth0.partial, 
    options = {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        contexts: [ depth0 ],
        types: [ "STRING" ],
        data: data
    }, helper ? helper.call(depth0, "schedule_list", options) : helperMissing.call(depth0, "partial", "schedule_list", options)))), 
    data.buffer.push("\n  </div>\n</div>\n\n\n\n\n\n"), buffer;
}), Ember.TEMPLATES.schedule_table_friday = Ember.Handlebars.template(function(Handlebars, depth0, helpers, partials, data) {
    function program1(depth0, data) {
        var stack1, buffer = "";
        return data.buffer.push("\n   <tr>\n    <th>"), stack1 = helpers._triageMustache.call(depth0, "venue.Name", {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            contexts: [ depth0 ],
            types: [ "ID" ],
            data: data
        }), (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("</th>\n      "), 
        stack1 = helpers.each.call(depth0, "event", "in", "venue.fridayEvents", {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            inverse: self.noop,
            fn: self.program(2, program2, data),
            contexts: [ depth0, depth0, depth0 ],
            types: [ "ID", "ID", "ID" ],
            data: data
        }), (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("  \n    </tr>\n  "), 
        buffer;
    }
    function program2(depth0, data) {
        var stack1, helper, options, buffer = "";
        return data.buffer.push('\n        <td class="schedule-table__cell" '), data.buffer.push(escapeExpression(helpers["bind-attr"].call(depth0, {
            hash: {
                "data-start-time": "event.start_time"
            },
            hashTypes: {
                "data-start-time": "STRING"
            },
            hashContexts: {
                "data-start-time": depth0
            },
            contexts: [],
            types: [],
            data: data
        }))), data.buffer.push(" "), data.buffer.push(escapeExpression(helpers["bind-attr"].call(depth0, {
            hash: {
                "data-end-time": "event.end_time"
            },
            hashTypes: {
                "data-end-time": "STRING"
            },
            hashContexts: {
                "data-end-time": depth0
            },
            contexts: [],
            types: [],
            data: data
        }))), data.buffer.push(">\n        <strong>"), data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "event.Name", {
            hash: {
                unescaped: "true"
            },
            hashTypes: {
                unescaped: "STRING"
            },
            hashContexts: {
                unescaped: depth0
            },
            contexts: [ depth0 ],
            types: [ "ID" ],
            data: data
        }))), data.buffer.push(" - "), stack1 = helpers._triageMustache.call(depth0, "event.Cost", {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            contexts: [ depth0 ],
            types: [ "ID" ],
            data: data
        }), (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("</strong>\n        <br />\n        "), 
        data.buffer.push(escapeExpression((helper = helpers.getTime || depth0 && depth0.getTime, 
        options = {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            contexts: [ depth0 ],
            types: [ "ID" ],
            data: data
        }, helper ? helper.call(depth0, "event.start_time", options) : helperMissing.call(depth0, "getTime", "event.start_time", options)))), 
        data.buffer.push(" - "), data.buffer.push(escapeExpression((helper = helpers.getTime || depth0 && depth0.getTime, 
        options = {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            contexts: [ depth0 ],
            types: [ "ID" ],
            data: data
        }, helper ? helper.call(depth0, "event.end_time", options) : helperMissing.call(depth0, "getTime", "event.end_time", options)))), 
        data.buffer.push("\n        <br />\n        "), stack1 = helpers.each.call(depth0, "performer", "in", "event.sortedPerformers", {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            inverse: self.noop,
            fn: self.program(3, program3, data),
            contexts: [ depth0, depth0, depth0 ],
            types: [ "ID", "ID", "ID" ],
            data: data
        }), (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("\n        "), 
        stack1 = helpers["if"].call(depth0, "event.emcee", {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            inverse: self.noop,
            fn: self.program(6, program6, data),
            contexts: [ depth0 ],
            types: [ "ID" ],
            data: data
        }), (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("\n        </td>\n      "), 
        buffer;
    }
    function program3(depth0, data) {
        var stack1, helper, options, buffer = "";
        return data.buffer.push("\n          "), helper = helpers["link-to"] || depth0 && depth0["link-to"], 
        options = {
            hash: {
                classNames: "comma-list"
            },
            hashTypes: {
                classNames: "STRING"
            },
            hashContexts: {
                classNames: depth0
            },
            inverse: self.noop,
            fn: self.program(4, program4, data),
            contexts: [ depth0, depth0 ],
            types: [ "STRING", "ID" ],
            data: data
        }, stack1 = helper ? helper.call(depth0, "performer", "performer", options) : helperMissing.call(depth0, "link-to", "performer", "performer", options), 
        (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("\n        "), 
        buffer;
    }
    function program4(depth0, data) {
        var buffer = "";
        return data.buffer.push("\n          "), data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "performer.Name", {
            hash: {
                unescaped: "true"
            },
            hashTypes: {
                unescaped: "STRING"
            },
            hashContexts: {
                unescaped: depth0
            },
            contexts: [ depth0 ],
            types: [ "ID" ],
            data: data
        }))), data.buffer.push("\n          "), buffer;
    }
    function program6(depth0, data) {
        var stack1, helper, options, buffer = "";
        return data.buffer.push("\n          "), helper = helpers["link-to"] || depth0 && depth0["link-to"], 
        options = {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            inverse: self.noop,
            fn: self.program(7, program7, data),
            contexts: [ depth0, depth0 ],
            types: [ "STRING", "ID" ],
            data: data
        }, stack1 = helper ? helper.call(depth0, "performer", "event.emcee", options) : helperMissing.call(depth0, "link-to", "performer", "event.emcee", options), 
        (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("\n        "), 
        buffer;
    }
    function program7(depth0, data) {
        var stack1, buffer = "";
        return data.buffer.push('<span class="label label-default schedule__label-performer">MC: '), 
        stack1 = helpers._triageMustache.call(depth0, "event.emcee.Name", {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            contexts: [ depth0 ],
            types: [ "ID" ],
            data: data
        }), (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("</span>"), 
        buffer;
    }
    this.compilerInfo = [ 4, ">= 1.0.0" ], helpers = this.merge(helpers, Ember.Handlebars.helpers), 
    data = data || {};
    var stack1, helper, options, buffer = "", escapeExpression = this.escapeExpression, self = this, helperMissing = helpers.helperMissing;
    return data.buffer.push('<table class="schedule-table">\n  <thead>\n  <tr>\n  <th style="display:none;">Venue</th>\n  '), 
    helper = helpers.scheduleTableHeaderRow || depth0 && depth0.scheduleTableHeaderRow, 
    options = {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        contexts: [ depth0 ],
        types: [ "STRING" ],
        data: data
    }, stack1 = helper ? helper.call(depth0, "Friday", options) : helperMissing.call(depth0, "scheduleTableHeaderRow", "Friday", options), 
    (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("\n  </tr>\n  </thead>\n  <tbody>\n  "), 
    stack1 = helpers.each.call(depth0, "venue", "in", "controller.venues", {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        inverse: self.noop,
        fn: self.program(1, program1, data),
        contexts: [ depth0, depth0, depth0 ],
        types: [ "ID", "ID", "ID" ],
        data: data
    }), (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("\n  </tbody>\n</table>"), 
    buffer;
}), Ember.TEMPLATES.schedule_table_saturday = Ember.Handlebars.template(function(Handlebars, depth0, helpers, partials, data) {
    function program1(depth0, data) {
        var stack1, buffer = "";
        return data.buffer.push("\n   <tr>\n    <th>"), stack1 = helpers._triageMustache.call(depth0, "venue.Name", {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            contexts: [ depth0 ],
            types: [ "ID" ],
            data: data
        }), (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("</th>\n      "), 
        stack1 = helpers.each.call(depth0, "event", "in", "venue.saturdayEvents", {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            inverse: self.noop,
            fn: self.program(2, program2, data),
            contexts: [ depth0, depth0, depth0 ],
            types: [ "ID", "ID", "ID" ],
            data: data
        }), (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("  \n    </tr>\n  "), 
        buffer;
    }
    function program2(depth0, data) {
        var stack1, helper, options, buffer = "";
        return data.buffer.push('\n        <td class="schedule-table__cell" '), data.buffer.push(escapeExpression(helpers["bind-attr"].call(depth0, {
            hash: {
                "data-start-time": "event.start_time"
            },
            hashTypes: {
                "data-start-time": "STRING"
            },
            hashContexts: {
                "data-start-time": depth0
            },
            contexts: [],
            types: [],
            data: data
        }))), data.buffer.push(" "), data.buffer.push(escapeExpression(helpers["bind-attr"].call(depth0, {
            hash: {
                "data-end-time": "event.end_time"
            },
            hashTypes: {
                "data-end-time": "STRING"
            },
            hashContexts: {
                "data-end-time": depth0
            },
            contexts: [],
            types: [],
            data: data
        }))), data.buffer.push(">\n        <strong>"), data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "event.Name", {
            hash: {
                unescaped: "true"
            },
            hashTypes: {
                unescaped: "STRING"
            },
            hashContexts: {
                unescaped: depth0
            },
            contexts: [ depth0 ],
            types: [ "ID" ],
            data: data
        }))), data.buffer.push(" - "), stack1 = helpers._triageMustache.call(depth0, "event.Cost", {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            contexts: [ depth0 ],
            types: [ "ID" ],
            data: data
        }), (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("</strong>\n        <br />\n        "), 
        data.buffer.push(escapeExpression((helper = helpers.getTime || depth0 && depth0.getTime, 
        options = {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            contexts: [ depth0 ],
            types: [ "ID" ],
            data: data
        }, helper ? helper.call(depth0, "event.start_time", options) : helperMissing.call(depth0, "getTime", "event.start_time", options)))), 
        data.buffer.push(" - "), data.buffer.push(escapeExpression((helper = helpers.getTime || depth0 && depth0.getTime, 
        options = {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            contexts: [ depth0 ],
            types: [ "ID" ],
            data: data
        }, helper ? helper.call(depth0, "event.end_time", options) : helperMissing.call(depth0, "getTime", "event.end_time", options)))), 
        data.buffer.push("\n        <br />\n        "), stack1 = helpers.each.call(depth0, "performer", "in", "event.sortedPerformers", {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            inverse: self.noop,
            fn: self.program(3, program3, data),
            contexts: [ depth0, depth0, depth0 ],
            types: [ "ID", "ID", "ID" ],
            data: data
        }), (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("\n        "), 
        stack1 = helpers["if"].call(depth0, "event.emcee", {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            inverse: self.noop,
            fn: self.program(6, program6, data),
            contexts: [ depth0 ],
            types: [ "ID" ],
            data: data
        }), (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("\n        </td>\n      "), 
        buffer;
    }
    function program3(depth0, data) {
        var stack1, helper, options, buffer = "";
        return data.buffer.push("\n          "), helper = helpers["link-to"] || depth0 && depth0["link-to"], 
        options = {
            hash: {
                classNames: "comma-list"
            },
            hashTypes: {
                classNames: "STRING"
            },
            hashContexts: {
                classNames: depth0
            },
            inverse: self.noop,
            fn: self.program(4, program4, data),
            contexts: [ depth0, depth0 ],
            types: [ "STRING", "ID" ],
            data: data
        }, stack1 = helper ? helper.call(depth0, "performer", "performer", options) : helperMissing.call(depth0, "link-to", "performer", "performer", options), 
        (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("\n        "), 
        buffer;
    }
    function program4(depth0, data) {
        var buffer = "";
        return data.buffer.push("\n          "), data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "performer.Name", {
            hash: {
                unescaped: "true"
            },
            hashTypes: {
                unescaped: "STRING"
            },
            hashContexts: {
                unescaped: depth0
            },
            contexts: [ depth0 ],
            types: [ "ID" ],
            data: data
        }))), data.buffer.push("\n          "), buffer;
    }
    function program6(depth0, data) {
        var stack1, helper, options, buffer = "";
        return data.buffer.push("\n          "), helper = helpers["link-to"] || depth0 && depth0["link-to"], 
        options = {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            inverse: self.noop,
            fn: self.program(7, program7, data),
            contexts: [ depth0, depth0 ],
            types: [ "STRING", "ID" ],
            data: data
        }, stack1 = helper ? helper.call(depth0, "performer", "event.emcee", options) : helperMissing.call(depth0, "link-to", "performer", "event.emcee", options), 
        (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("\n        "), 
        buffer;
    }
    function program7(depth0, data) {
        var stack1, buffer = "";
        return data.buffer.push('<span class="label label-default schedule__label-performer">MC: '), 
        stack1 = helpers._triageMustache.call(depth0, "event.emcee.Name", {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            contexts: [ depth0 ],
            types: [ "ID" ],
            data: data
        }), (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("</span>"), 
        buffer;
    }
    this.compilerInfo = [ 4, ">= 1.0.0" ], helpers = this.merge(helpers, Ember.Handlebars.helpers), 
    data = data || {};
    var stack1, helper, options, buffer = "", escapeExpression = this.escapeExpression, self = this, helperMissing = helpers.helperMissing;
    return data.buffer.push('<table class="schedule-table">\n  <thead>\n  <tr>\n  <th style="display:none;">Venue</th>\n  '), 
    helper = helpers.scheduleTableHeaderRow || depth0 && depth0.scheduleTableHeaderRow, 
    options = {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        contexts: [ depth0 ],
        types: [ "STRING" ],
        data: data
    }, stack1 = helper ? helper.call(depth0, "Saturday", options) : helperMissing.call(depth0, "scheduleTableHeaderRow", "Saturday", options), 
    (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("\n  </tr>\n  </thead>\n  <tbody>\n  "), 
    stack1 = helpers.each.call(depth0, "venue", "in", "controller.venues", {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        inverse: self.noop,
        fn: self.program(1, program1, data),
        contexts: [ depth0, depth0, depth0 ],
        types: [ "ID", "ID", "ID" ],
        data: data
    }), (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("\n  </tbody>\n</table>"), 
    buffer;
}), Ember.TEMPLATES.schedule_table_sunday = Ember.Handlebars.template(function(Handlebars, depth0, helpers, partials, data) {
    function program1(depth0, data) {
        var stack1, buffer = "";
        return data.buffer.push("\n   <tr>\n    <th>"), stack1 = helpers._triageMustache.call(depth0, "venue.Name", {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            contexts: [ depth0 ],
            types: [ "ID" ],
            data: data
        }), (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("</th>\n      "), 
        stack1 = helpers.each.call(depth0, "event", "in", "venue.sundayEvents", {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            inverse: self.noop,
            fn: self.program(2, program2, data),
            contexts: [ depth0, depth0, depth0 ],
            types: [ "ID", "ID", "ID" ],
            data: data
        }), (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("  \n    </tr>\n  "), 
        buffer;
    }
    function program2(depth0, data) {
        var stack1, helper, options, buffer = "";
        return data.buffer.push('\n        <td class="schedule-table__cell" '), data.buffer.push(escapeExpression(helpers["bind-attr"].call(depth0, {
            hash: {
                "data-start-time": "event.start_time"
            },
            hashTypes: {
                "data-start-time": "STRING"
            },
            hashContexts: {
                "data-start-time": depth0
            },
            contexts: [],
            types: [],
            data: data
        }))), data.buffer.push(" "), data.buffer.push(escapeExpression(helpers["bind-attr"].call(depth0, {
            hash: {
                "data-end-time": "event.end_time"
            },
            hashTypes: {
                "data-end-time": "STRING"
            },
            hashContexts: {
                "data-end-time": depth0
            },
            contexts: [],
            types: [],
            data: data
        }))), data.buffer.push(">\n        <strong>"), data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "event.Name", {
            hash: {
                unescaped: "true"
            },
            hashTypes: {
                unescaped: "STRING"
            },
            hashContexts: {
                unescaped: depth0
            },
            contexts: [ depth0 ],
            types: [ "ID" ],
            data: data
        }))), data.buffer.push(" - "), stack1 = helpers._triageMustache.call(depth0, "event.Cost", {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            contexts: [ depth0 ],
            types: [ "ID" ],
            data: data
        }), (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("</strong>\n        <br />\n        "), 
        data.buffer.push(escapeExpression((helper = helpers.getTime || depth0 && depth0.getTime, 
        options = {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            contexts: [ depth0 ],
            types: [ "ID" ],
            data: data
        }, helper ? helper.call(depth0, "event.start_time", options) : helperMissing.call(depth0, "getTime", "event.start_time", options)))), 
        data.buffer.push(" - "), data.buffer.push(escapeExpression((helper = helpers.getTime || depth0 && depth0.getTime, 
        options = {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            contexts: [ depth0 ],
            types: [ "ID" ],
            data: data
        }, helper ? helper.call(depth0, "event.end_time", options) : helperMissing.call(depth0, "getTime", "event.end_time", options)))), 
        data.buffer.push("\n        <br />\n        "), stack1 = helpers.each.call(depth0, "performer", "in", "event.sortedPerformers", {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            inverse: self.noop,
            fn: self.program(3, program3, data),
            contexts: [ depth0, depth0, depth0 ],
            types: [ "ID", "ID", "ID" ],
            data: data
        }), (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("\n        "), 
        stack1 = helpers["if"].call(depth0, "event.emcee", {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            inverse: self.noop,
            fn: self.program(6, program6, data),
            contexts: [ depth0 ],
            types: [ "ID" ],
            data: data
        }), (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("\n        </td>\n      "), 
        buffer;
    }
    function program3(depth0, data) {
        var stack1, helper, options, buffer = "";
        return data.buffer.push("\n          "), helper = helpers["link-to"] || depth0 && depth0["link-to"], 
        options = {
            hash: {
                classNames: "comma-list"
            },
            hashTypes: {
                classNames: "STRING"
            },
            hashContexts: {
                classNames: depth0
            },
            inverse: self.noop,
            fn: self.program(4, program4, data),
            contexts: [ depth0, depth0 ],
            types: [ "STRING", "ID" ],
            data: data
        }, stack1 = helper ? helper.call(depth0, "performer", "performer", options) : helperMissing.call(depth0, "link-to", "performer", "performer", options), 
        (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("\n        "), 
        buffer;
    }
    function program4(depth0, data) {
        var buffer = "";
        return data.buffer.push("\n          "), data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "performer.Name", {
            hash: {
                unescaped: "true"
            },
            hashTypes: {
                unescaped: "STRING"
            },
            hashContexts: {
                unescaped: depth0
            },
            contexts: [ depth0 ],
            types: [ "ID" ],
            data: data
        }))), data.buffer.push("\n          "), buffer;
    }
    function program6(depth0, data) {
        var stack1, helper, options, buffer = "";
        return data.buffer.push("\n          "), helper = helpers["link-to"] || depth0 && depth0["link-to"], 
        options = {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            inverse: self.noop,
            fn: self.program(7, program7, data),
            contexts: [ depth0, depth0 ],
            types: [ "STRING", "ID" ],
            data: data
        }, stack1 = helper ? helper.call(depth0, "performer", "event.emcee", options) : helperMissing.call(depth0, "link-to", "performer", "event.emcee", options), 
        (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("\n        "), 
        buffer;
    }
    function program7(depth0, data) {
        var stack1, buffer = "";
        return data.buffer.push('<span class="label label-default schedule__label-performer">MC: '), 
        stack1 = helpers._triageMustache.call(depth0, "event.emcee.Name", {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            contexts: [ depth0 ],
            types: [ "ID" ],
            data: data
        }), (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("</span>"), 
        buffer;
    }
    this.compilerInfo = [ 4, ">= 1.0.0" ], helpers = this.merge(helpers, Ember.Handlebars.helpers), 
    data = data || {};
    var stack1, helper, options, buffer = "", escapeExpression = this.escapeExpression, self = this, helperMissing = helpers.helperMissing;
    return data.buffer.push('<table class="schedule-table">\n  <thead>\n  <tr>\n  <th style="display:none;">Venue</th>\n  '), 
    helper = helpers.scheduleTableHeaderRow || depth0 && depth0.scheduleTableHeaderRow, 
    options = {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        contexts: [ depth0 ],
        types: [ "STRING" ],
        data: data
    }, stack1 = helper ? helper.call(depth0, "Sunday", options) : helperMissing.call(depth0, "scheduleTableHeaderRow", "Sunday", options), 
    (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("\n  </tr>\n  </thead>\n  <tbody>\n  "), 
    stack1 = helpers.each.call(depth0, "venue", "in", "controller.venues", {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        inverse: self.noop,
        fn: self.program(1, program1, data),
        contexts: [ depth0, depth0, depth0 ],
        types: [ "ID", "ID", "ID" ],
        data: data
    }), (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("\n  </tbody>\n</table>"), 
    buffer;
}), Ember.TEMPLATES.schedule_table_thursday = Ember.Handlebars.template(function(Handlebars, depth0, helpers, partials, data) {
    function program1(depth0, data) {
        var stack1, buffer = "";
        return data.buffer.push("\n   <tr>\n    <th>"), stack1 = helpers._triageMustache.call(depth0, "venue.Name", {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            contexts: [ depth0 ],
            types: [ "ID" ],
            data: data
        }), (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("</th>\n      "), 
        stack1 = helpers.each.call(depth0, "event", "in", "venue.thursdayEvents", {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            inverse: self.noop,
            fn: self.program(2, program2, data),
            contexts: [ depth0, depth0, depth0 ],
            types: [ "ID", "ID", "ID" ],
            data: data
        }), (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("  \n    </tr>\n  "), 
        buffer;
    }
    function program2(depth0, data) {
        var stack1, helper, options, buffer = "";
        return data.buffer.push('\n        <td class="schedule-table__cell" '), data.buffer.push(escapeExpression(helpers["bind-attr"].call(depth0, {
            hash: {
                "data-start-time": "event.start_time"
            },
            hashTypes: {
                "data-start-time": "STRING"
            },
            hashContexts: {
                "data-start-time": depth0
            },
            contexts: [],
            types: [],
            data: data
        }))), data.buffer.push(" "), data.buffer.push(escapeExpression(helpers["bind-attr"].call(depth0, {
            hash: {
                "data-end-time": "event.end_time"
            },
            hashTypes: {
                "data-end-time": "STRING"
            },
            hashContexts: {
                "data-end-time": depth0
            },
            contexts: [],
            types: [],
            data: data
        }))), data.buffer.push(">\n        <strong>"), data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "event.Name", {
            hash: {
                unescaped: "true"
            },
            hashTypes: {
                unescaped: "STRING"
            },
            hashContexts: {
                unescaped: depth0
            },
            contexts: [ depth0 ],
            types: [ "ID" ],
            data: data
        }))), data.buffer.push(" - "), stack1 = helpers._triageMustache.call(depth0, "event.Cost", {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            contexts: [ depth0 ],
            types: [ "ID" ],
            data: data
        }), (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("</strong>\n        <br />\n        "), 
        data.buffer.push(escapeExpression((helper = helpers.getTime || depth0 && depth0.getTime, 
        options = {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            contexts: [ depth0 ],
            types: [ "ID" ],
            data: data
        }, helper ? helper.call(depth0, "event.start_time", options) : helperMissing.call(depth0, "getTime", "event.start_time", options)))), 
        data.buffer.push(" - "), data.buffer.push(escapeExpression((helper = helpers.getTime || depth0 && depth0.getTime, 
        options = {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            contexts: [ depth0 ],
            types: [ "ID" ],
            data: data
        }, helper ? helper.call(depth0, "event.end_time", options) : helperMissing.call(depth0, "getTime", "event.end_time", options)))), 
        data.buffer.push("\n        <br />\n        "), stack1 = helpers.each.call(depth0, "performer", "in", "event.sortedPerformers", {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            inverse: self.noop,
            fn: self.program(3, program3, data),
            contexts: [ depth0, depth0, depth0 ],
            types: [ "ID", "ID", "ID" ],
            data: data
        }), (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("\n        "), 
        stack1 = helpers["if"].call(depth0, "event.emcee", {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            inverse: self.noop,
            fn: self.program(6, program6, data),
            contexts: [ depth0 ],
            types: [ "ID" ],
            data: data
        }), (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("\n        </td>\n      "), 
        buffer;
    }
    function program3(depth0, data) {
        var stack1, helper, options, buffer = "";
        return data.buffer.push("\n          "), helper = helpers["link-to"] || depth0 && depth0["link-to"], 
        options = {
            hash: {
                classNames: "comma-list"
            },
            hashTypes: {
                classNames: "STRING"
            },
            hashContexts: {
                classNames: depth0
            },
            inverse: self.noop,
            fn: self.program(4, program4, data),
            contexts: [ depth0, depth0 ],
            types: [ "STRING", "ID" ],
            data: data
        }, stack1 = helper ? helper.call(depth0, "performer", "performer", options) : helperMissing.call(depth0, "link-to", "performer", "performer", options), 
        (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("\n        "), 
        buffer;
    }
    function program4(depth0, data) {
        var buffer = "";
        return data.buffer.push("\n          "), data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "performer.Name", {
            hash: {
                unescaped: "true"
            },
            hashTypes: {
                unescaped: "STRING"
            },
            hashContexts: {
                unescaped: depth0
            },
            contexts: [ depth0 ],
            types: [ "ID" ],
            data: data
        }))), data.buffer.push("\n          "), buffer;
    }
    function program6(depth0, data) {
        var stack1, helper, options, buffer = "";
        return data.buffer.push("\n          "), helper = helpers["link-to"] || depth0 && depth0["link-to"], 
        options = {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            inverse: self.noop,
            fn: self.program(7, program7, data),
            contexts: [ depth0, depth0 ],
            types: [ "STRING", "ID" ],
            data: data
        }, stack1 = helper ? helper.call(depth0, "performer", "event.emcee", options) : helperMissing.call(depth0, "link-to", "performer", "event.emcee", options), 
        (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("\n        "), 
        buffer;
    }
    function program7(depth0, data) {
        var stack1, buffer = "";
        return data.buffer.push('<span class="label label-default schedule__label-performer">MC: '), 
        stack1 = helpers._triageMustache.call(depth0, "event.emcee.Name", {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            contexts: [ depth0 ],
            types: [ "ID" ],
            data: data
        }), (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("</span>"), 
        buffer;
    }
    this.compilerInfo = [ 4, ">= 1.0.0" ], helpers = this.merge(helpers, Ember.Handlebars.helpers), 
    data = data || {};
    var stack1, helper, options, buffer = "", escapeExpression = this.escapeExpression, self = this, helperMissing = helpers.helperMissing;
    return data.buffer.push('<table class="schedule-table">\n  <thead>\n  <tr>\n  <th style="display:none;">Venue</th>\n  '), 
    helper = helpers.scheduleTableHeaderRow || depth0 && depth0.scheduleTableHeaderRow, 
    options = {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        contexts: [ depth0 ],
        types: [ "STRING" ],
        data: data
    }, stack1 = helper ? helper.call(depth0, "Thursday", options) : helperMissing.call(depth0, "scheduleTableHeaderRow", "Thursday", options), 
    (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("\n  </tr>\n  </thead>\n  <tbody>\n  "), 
    stack1 = helpers.each.call(depth0, "venue", "in", "controller.venues", {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        inverse: self.noop,
        fn: self.program(1, program1, data),
        contexts: [ depth0, depth0, depth0 ],
        types: [ "ID", "ID", "ID" ],
        data: data
    }), (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("\n  </tbody>\n</table>"), 
    buffer;
}), Ember.TEMPLATES.schedule_table_tsunday = Ember.Handlebars.template(function(Handlebars, depth0, helpers, partials, data) {
    function program1(depth0, data) {
        var stack1, buffer = "";
        return data.buffer.push("\n   <tr>\n    <th>"), stack1 = helpers._triageMustache.call(depth0, "venue.Name", {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            contexts: [ depth0 ],
            types: [ "ID" ],
            data: data
        }), (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("</th>\n      "), 
        stack1 = helpers.each.call(depth0, "event", "in", "venue.thursdayEvents", {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            inverse: self.noop,
            fn: self.program(2, program2, data),
            contexts: [ depth0, depth0, depth0 ],
            types: [ "ID", "ID", "ID" ],
            data: data
        }), (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("  \n    </tr>\n  "), 
        buffer;
    }
    function program2(depth0, data) {
        var stack1, helper, options, buffer = "";
        return data.buffer.push('\n        <td class="schedule-table__cell" '), data.buffer.push(escapeExpression(helpers["bind-attr"].call(depth0, {
            hash: {
                "data-start-time": "event.start_time"
            },
            hashTypes: {
                "data-start-time": "STRING"
            },
            hashContexts: {
                "data-start-time": depth0
            },
            contexts: [],
            types: [],
            data: data
        }))), data.buffer.push(" "), data.buffer.push(escapeExpression(helpers["bind-attr"].call(depth0, {
            hash: {
                "data-end-time": "event.end_time"
            },
            hashTypes: {
                "data-end-time": "STRING"
            },
            hashContexts: {
                "data-end-time": depth0
            },
            contexts: [],
            types: [],
            data: data
        }))), data.buffer.push(">\n        <strong>"), data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "event.Name", {
            hash: {
                unescaped: "true"
            },
            hashTypes: {
                unescaped: "STRING"
            },
            hashContexts: {
                unescaped: depth0
            },
            contexts: [ depth0 ],
            types: [ "ID" ],
            data: data
        }))), data.buffer.push(" - "), stack1 = helpers._triageMustache.call(depth0, "event.Cost", {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            contexts: [ depth0 ],
            types: [ "ID" ],
            data: data
        }), (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("</strong>\n        <br />\n        "), 
        data.buffer.push(escapeExpression((helper = helpers.getTime || depth0 && depth0.getTime, 
        options = {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            contexts: [ depth0 ],
            types: [ "ID" ],
            data: data
        }, helper ? helper.call(depth0, "event.start_time", options) : helperMissing.call(depth0, "getTime", "event.start_time", options)))), 
        data.buffer.push(" - "), data.buffer.push(escapeExpression((helper = helpers.getTime || depth0 && depth0.getTime, 
        options = {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            contexts: [ depth0 ],
            types: [ "ID" ],
            data: data
        }, helper ? helper.call(depth0, "event.end_time", options) : helperMissing.call(depth0, "getTime", "event.end_time", options)))), 
        data.buffer.push("\n        <br />\n        "), stack1 = helpers.each.call(depth0, "performer", "in", "event.sortedPerformers", {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            inverse: self.noop,
            fn: self.program(3, program3, data),
            contexts: [ depth0, depth0, depth0 ],
            types: [ "ID", "ID", "ID" ],
            data: data
        }), (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("\n        "), 
        stack1 = helpers["if"].call(depth0, "event.emcee", {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            inverse: self.noop,
            fn: self.program(6, program6, data),
            contexts: [ depth0 ],
            types: [ "ID" ],
            data: data
        }), (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("\n        </td>\n      "), 
        buffer;
    }
    function program3(depth0, data) {
        var stack1, helper, options, buffer = "";
        return data.buffer.push("\n          "), helper = helpers["link-to"] || depth0 && depth0["link-to"], 
        options = {
            hash: {
                classNames: "comma-list"
            },
            hashTypes: {
                classNames: "STRING"
            },
            hashContexts: {
                classNames: depth0
            },
            inverse: self.noop,
            fn: self.program(4, program4, data),
            contexts: [ depth0, depth0 ],
            types: [ "STRING", "ID" ],
            data: data
        }, stack1 = helper ? helper.call(depth0, "performer", "performer", options) : helperMissing.call(depth0, "link-to", "performer", "performer", options), 
        (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("\n        "), 
        buffer;
    }
    function program4(depth0, data) {
        var buffer = "";
        return data.buffer.push("\n          "), data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "performer.Name", {
            hash: {
                unescaped: "true"
            },
            hashTypes: {
                unescaped: "STRING"
            },
            hashContexts: {
                unescaped: depth0
            },
            contexts: [ depth0 ],
            types: [ "ID" ],
            data: data
        }))), data.buffer.push("\n          "), buffer;
    }
    function program6(depth0, data) {
        var stack1, helper, options, buffer = "";
        return data.buffer.push("\n          "), helper = helpers["link-to"] || depth0 && depth0["link-to"], 
        options = {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            inverse: self.noop,
            fn: self.program(7, program7, data),
            contexts: [ depth0, depth0 ],
            types: [ "STRING", "ID" ],
            data: data
        }, stack1 = helper ? helper.call(depth0, "performer", "event.emcee", options) : helperMissing.call(depth0, "link-to", "performer", "event.emcee", options), 
        (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("\n        "), 
        buffer;
    }
    function program7(depth0, data) {
        var stack1, buffer = "";
        return data.buffer.push('<span class="label label-default schedule__label-performer">MC: '), 
        stack1 = helpers._triageMustache.call(depth0, "event.emcee.Name", {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            contexts: [ depth0 ],
            types: [ "ID" ],
            data: data
        }), (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("</span>"), 
        buffer;
    }
    this.compilerInfo = [ 4, ">= 1.0.0" ], helpers = this.merge(helpers, Ember.Handlebars.helpers), 
    data = data || {};
    var stack1, helper, options, buffer = "", escapeExpression = this.escapeExpression, self = this, helperMissing = helpers.helperMissing;
    return data.buffer.push('<table class="schedule-table">\n  <thead>\n  <tr>\n  <th style="display:none;">Venue</th>\n  '), 
    helper = helpers.scheduleTableHeaderRow || depth0 && depth0.scheduleTableHeaderRow, 
    options = {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        contexts: [ depth0 ],
        types: [ "STRING" ],
        data: data
    }, stack1 = helper ? helper.call(depth0, "Thursday", options) : helperMissing.call(depth0, "scheduleTableHeaderRow", "Thursday", options), 
    (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("\n  </tr>\n  </thead>\n  <tbody>\n  "), 
    stack1 = helpers.each.call(depth0, "venue", "in", "controller.venues", {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        inverse: self.noop,
        fn: self.program(1, program1, data),
        contexts: [ depth0, depth0, depth0 ],
        types: [ "ID", "ID", "ID" ],
        data: data
    }), (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("\n  </tbody>\n</table>"), 
    buffer;
}), Ember.TEMPLATES.show = Ember.Handlebars.template(function(Handlebars, depth0, helpers, partials, data) {
    function program1(depth0, data) {
        var stack1, helper, options, buffer = "";
        return data.buffer.push("\n          "), helper = helpers["link-to"] || depth0 && depth0["link-to"], 
        options = {
            hash: {
                classNames: "list-group-item"
            },
            hashTypes: {
                classNames: "STRING"
            },
            hashContexts: {
                classNames: depth0
            },
            inverse: self.noop,
            fn: self.program(2, program2, data),
            contexts: [ depth0, depth0 ],
            types: [ "STRING", "ID" ],
            data: data
        }, stack1 = helper ? helper.call(depth0, "event", "event", options) : helperMissing.call(depth0, "link-to", "event", "event", options), 
        (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("\n        "), 
        buffer;
    }
    function program2(depth0, data) {
        var stack1, helper, options, buffer = "";
        return data.buffer.push("\n          <strong>"), stack1 = helpers._triageMustache.call(depth0, "event.Name", {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            contexts: [ depth0 ],
            types: [ "ID" ],
            data: data
        }), (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("</strong> - "), 
        stack1 = helpers._triageMustache.call(depth0, "event.venue.Name", {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            contexts: [ depth0 ],
            types: [ "ID" ],
            data: data
        }), (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("\n            <br /> ("), 
        data.buffer.push(escapeExpression((helper = helpers.niceDate || depth0 && depth0.niceDate, 
        options = {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            contexts: [ depth0 ],
            types: [ "ID" ],
            data: data
        }, helper ? helper.call(depth0, "event.start_time", options) : helperMissing.call(depth0, "niceDate", "event.start_time", options)))), 
        data.buffer.push(" "), data.buffer.push(escapeExpression((helper = helpers.getTime || depth0 && depth0.getTime, 
        options = {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            contexts: [ depth0 ],
            types: [ "ID" ],
            data: data
        }, helper ? helper.call(depth0, "event.start_time", options) : helperMissing.call(depth0, "getTime", "event.start_time", options)))), 
        data.buffer.push(" - "), data.buffer.push(escapeExpression((helper = helpers.getTime || depth0 && depth0.getTime, 
        options = {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            contexts: [ depth0 ],
            types: [ "ID" ],
            data: data
        }, helper ? helper.call(depth0, "event.end_time", options) : helperMissing.call(depth0, "getTime", "event.end_time", options)))), 
        data.buffer.push(")\n          \n          "), buffer;
    }
    function program4(depth0, data) {
        data.buffer.push('\n          <li class="list-group-item">No shows scheduled yet...</li>\n        ');
    }
    function program6(depth0, data) {
        data.buffer.push("← All Shows");
    }
    this.compilerInfo = [ 4, ">= 1.0.0" ], helpers = this.merge(helpers, Ember.Handlebars.helpers), 
    data = data || {};
    var stack1, helper, options, buffer = "", helperMissing = helpers.helperMissing, escapeExpression = this.escapeExpression, self = this;
    return data.buffer.push('\n  <div class="jumbotron jumbotron-tiny jumbotron-color-2 jumbotron-page-header">\n    <div class="container">\n      <div class="row centered">\n        <div class="col-lg-8 col-lg-offset-2">\n        <h2>'), 
    data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "Name", {
        hash: {
            unescaped: "true"
        },
        hashTypes: {
            unescaped: "STRING"
        },
        hashContexts: {
            unescaped: depth0
        },
        contexts: [ depth0 ],
        types: [ "ID" ],
        data: data
    }))), data.buffer.push('</h2>\n        </div>\n      </div><!-- row -->\n    </div><!-- container -->\n  </div><!-- headerwrap -->\n\n<div class="container single-performer main-content">\n  <div class="row">\n\n    <div class="col-sm-4 text-center">\n      <p><img class="img-responsive performer-headshot" '), 
    data.buffer.push(escapeExpression(helpers["bind-attr"].call(depth0, {
        hash: {
            src: "headshot300"
        },
        hashTypes: {
            src: "STRING"
        },
        hashContexts: {
            src: depth0
        },
        contexts: [],
        types: [],
        data: data
    }))), data.buffer.push(' /></p>\n    </div>\n    <div class="col-sm-8">\n      <p>\n        '), 
    data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "Copy", {
        hash: {
            unescaped: "true"
        },
        hashTypes: {
            unescaped: "STRING"
        },
        hashContexts: {
            unescaped: depth0
        },
        contexts: [ depth0 ],
        types: [ "ID" ],
        data: data
    }))), data.buffer.push('\n      </p>\n      <ul class="list-group">\n        <li class="list-group-item active" style="background:#695b53;">\n        <h4 class="list-group-item-heading" style="background:#695b53;color:white">Shows</h4>\n        </li>\n        '), 
    stack1 = helpers.each.call(depth0, "event", "in", "sortedEvents", {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        inverse: self.program(4, program4, data),
        fn: self.program(1, program1, data),
        contexts: [ depth0, depth0, depth0 ],
        types: [ "ID", "ID", "ID" ],
        data: data
    }), (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("\n\n      </ul>\n      <p>\n        "), 
    helper = helpers["link-to"] || depth0 && depth0["link-to"], options = {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        inverse: self.noop,
        fn: self.program(6, program6, data),
        contexts: [ depth0 ],
        types: [ "STRING" ],
        data: data
    }, stack1 = helper ? helper.call(depth0, "shows", options) : helperMissing.call(depth0, "link-to", "shows", options), 
    (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("\n      </p>\n    </div>\n  </div>\n</div>\n\n\n\n\n\n\n\n\n\n\n\n"), 
    buffer;
}), Ember.TEMPLATES.shows = Ember.Handlebars.template(function(Handlebars, depth0, helpers, partials, data) {
    this.compilerInfo = [ 4, ">= 1.0.0" ], helpers = this.merge(helpers, Ember.Handlebars.helpers), 
    data = data || {};
    var buffer = "", escapeExpression = this.escapeExpression;
    return data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.ShowsView", {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        contexts: [ depth0 ],
        types: [ "ID" ],
        data: data
    }))), data.buffer.push("\n\n\n"), buffer;
}), Ember.TEMPLATES.shows_gallery = Ember.Handlebars.template(function(Handlebars, depth0, helpers, partials, data) {
    function program1(depth0, data) {
        var stack1, helper, options, buffer = "";
        return data.buffer.push('\n    <div class="col-xs-6 col-sm-6 col-sm-4 col-md-3 col-lg-2 performer-box">\n      <div class="performer-thumbnail">\n        '), 
        helper = helpers["link-to"] || depth0 && depth0["link-to"], options = {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            inverse: self.noop,
            fn: self.program(2, program2, data),
            contexts: [ depth0, depth0 ],
            types: [ "STRING", "ID" ],
            data: data
        }, stack1 = helper ? helper.call(depth0, "show", "show", options) : helperMissing.call(depth0, "link-to", "show", "show", options), 
        (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("\n      </div>\n      <legend>\n        "), 
        helper = helpers["link-to"] || depth0 && depth0["link-to"], options = {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            inverse: self.noop,
            fn: self.program(4, program4, data),
            contexts: [ depth0, depth0 ],
            types: [ "STRING", "ID" ],
            data: data
        }, stack1 = helper ? helper.call(depth0, "show", "show", options) : helperMissing.call(depth0, "link-to", "show", "show", options), 
        (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("\n      </legend>\n    </div>\n    "), 
        buffer;
    }
    function program2(depth0, data) {
        var buffer = "";
        return data.buffer.push('\n        <img class="lazy img-responsive" width="300" height="300" '), 
        data.buffer.push(escapeExpression(helpers["bind-attr"].call(depth0, {
            hash: {
                "data-original": "show.headshot300"
            },
            hashTypes: {
                "data-original": "STRING"
            },
            hashContexts: {
                "data-original": depth0
            },
            contexts: [],
            types: [],
            data: data
        }))), data.buffer.push(" />\n        "), buffer;
    }
    function program4(depth0, data) {
        var buffer = "";
        return data.buffer.push("\n          "), data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "show.Name", {
            hash: {
                unescaped: "true"
            },
            hashTypes: {
                unescaped: "STRING"
            },
            hashContexts: {
                unescaped: depth0
            },
            contexts: [ depth0 ],
            types: [ "ID" ],
            data: data
        }))), data.buffer.push("\n        "), buffer;
    }
    this.compilerInfo = [ 4, ">= 1.0.0" ], helpers = this.merge(helpers, Ember.Handlebars.helpers), 
    data = data || {};
    var stack1, buffer = "", escapeExpression = this.escapeExpression, self = this, helperMissing = helpers.helperMissing;
    return data.buffer.push('\n<div class="jumbotron jumbotron-bg1 jumbotron-dark jumbotron-performers jumbotron-color-2  jumbotron-page-header">\n  <div class="container">\n    <div class="row centered">\n      <div class="col-lg-8 col-lg-offset-2">\n      <h1>Shows</h1>\n      </div>\n    </div><!-- row -->\n  </div><!-- container -->\n</div><!-- headerwrap -->\n<div class="container main-content">\n  <p class="lead">Shows subject to change...</p>\n  <div class="row">\n    '), 
    stack1 = helpers.each.call(depth0, "show", "in", "controller", {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        inverse: self.noop,
        fn: self.program(1, program1, data),
        contexts: [ depth0, depth0, depth0 ],
        types: [ "ID", "ID", "ID" ],
        data: data
    }), (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("\n  </div>\n</div>\n"), 
    buffer;
}), Ember.TEMPLATES.sponsors = Ember.Handlebars.template(function(Handlebars, depth0, helpers, partials, data) {
    this.compilerInfo = [ 4, ">= 1.0.0" ], helpers = this.merge(helpers, Ember.Handlebars.helpers), 
    data = data || {}, data.buffer.push('\n  <div class="jumbotron jumbotron-minor jumbotron-color-1  jumbotron-page-header">\n    <div class="container">\n      <div class="row centered">\n        <div class="col-lg-8 col-lg-offset-2">\n        <h1>Sponsors</h1>\n        </div>\n      </div><!-- row -->\n    </div><!-- container -->\n  </div><!-- headerwrap -->\n\n<div class="container main-content sponsors-container text-center">\n    <div class="row">\n      <div class="col-sm-8 col-sm-offset-2">\n        <a target="_blank" href="http://squarespace.com/?channel=events&subchannel=comedy&source=bridgetown14"><img class="img-responsive" src="/assets/sponsor-squarespace-big.png" alt=""></a>\n      </div>\n    </div>\n    <div class="row">\n      <div class="col-xs-8 col-xs-offset-2 col-sm-4 col-sm-offset-4">\n        <a target="_blank" href="https://taximagic.com"><img class="img-responsive" src="/assets/sponsor-taxi-magic-big.png" alt=""></a>\n      </div>\n    </div>\n    <div class="row">\n      <div class="col-xs-8 col-xs-offset-2 col-sm-4 col-sm-offset-4">\n        <a target="_blank" href="http://mailchimp.com"><img class="img-responsive" src="/assets/sponsor-mailchimp-long.png?1" alt=""></a>\n      </div>\n    </div>\n    <div class="row">\n      <div class="col-xs-4 col-sm-2">\n        <a target="_blank" href="http://www.portlandoldies.com"><img class="img-responsive" src="/assets/sponsor-oldies.png" alt=""></a>\n      </div>\n      <div class="col-xs-4 col-sm-2">\n        <a target="_blank" href="http://www.z100portland.com"><img class="img-responsive" src="/assets/sponsor-z100.png" alt=""></a>\n      </div>\n      <div class="col-xs-4 col-sm-2">\n        <a target="_blank" href="http://www.1059thebrew.com"><img class="img-responsive" src="/assets/sponsor-brew.png" alt=""></a>\n      </div>\n      <div class="col-xs-4 col-sm-2">\n        <a target="_blank" href="http://www.cremabakery.com/"><img class="img-responsive" src="/assets/sponsor-crema.png" alt=""></a>\n      </div>\n      <div class="col-xs-4 col-sm-2">\n        <a target="_blank" href="http://www.deschutesbrewery.com"><img class="img-responsive" src="/assets/sponsor-deschutes.png" alt=""></a>\n      </div>\n      <div class="col-xs-4 col-sm-2">\n        <a target="_blank" href="http://sizzlepie.com"><img class="img-responsive" src="/assets/sponsor-sizzle-pie.png" alt=""></a>\n      </div>\n   \n      <div class="col-xs-4 col-sm-2">\n        <a target="_blank" href="http://www.bendistillery.com"><img class="img-responsive" src="/assets/sponsor-crater-lake.png" alt=""></a>\n      </div>\n      <div class="col-xs-4 col-sm-2">\n        <a target="_blank" href="http://www.eastsidedistilling.com/"><img class="img-responsive" src="/assets/sponsor-eastside-distillery.png" alt=""></a>\n      </div>\n      <div class="col-xs-4 col-sm-2">\n        <a target="_blank" href="http://elevenpdx.com/"><img class="img-responsive" src="/assets/sponsor-eleven.png" alt=""></a>\n      </div>\n      <div class="col-xs-4 col-sm-2">\n        <a target="_blank" href="http://funemploymentradio.com"><img class="img-responsive" src="/assets/sponsor-funemployment.png" alt=""></a>\n      </div>\n      \n      <div class="col-xs-4 col-sm-2">\n        <a target="_blank" href="http://groundkontrol.com"><img class="img-responsive" src="/assets/sponsor-ground-kontrol.png" alt=""></a>\n      </div>\n      <div class="col-xs-4 col-sm-2">\n        <a target="_blank" href="http://ifc.com"><img class="img-responsive" src="/assets/sponsor-ifc.png" alt=""></a>\n      </div>\n      <div class="col-xs-4 col-sm-2">\n        <a target="_blank" href="http://imeldas.com/store?utm_source=BTC14&utm_medium=BTCsponsorpage&utm_campaign=logo"><img class="img-responsive" src="/assets/sponsor-imeldas.png" alt=""></a>\n      </div>\n      <div class="col-xs-8 col-sm-4">\n        <a target="_blank" href="http://www.jupiterhotel.com"><img class="img-responsive" src="/assets/sponsor-jupiter-long.png" alt=""></a>\n      </div>\n      <div class="col-xs-4 col-sm-2">\n        <a target="_blank" href="http://www.kindsnacks.com"><img class="img-responsive" src="/assets/sponsor-kind-bar.png" alt=""></a>\n      </div>\n      <div class="col-xs-4 col-sm-2">\n        <a target="_blank" href="http://laughingplanetcafe.com/"><img class="img-responsive" src="/assets/sponsor-laughing-planet.png" alt=""></a>\n      </div>\n      <div class="col-xs-4 col-sm-2">\n        <a target="_blank" href="http://www.montageportland.com"><img class="img-responsive" src="/assets/sponsor-montage.png" alt=""></a>\n      </div>\n      <div class="col-xs-4 col-sm-2">\n        <a target="_blank" href="http://pabstblueribbon.com/"><img class="img-responsive" src="/assets/sponsor-pabst.png" alt=""></a>\n      </div>\n      <div class="col-xs-4 col-sm-2">\n        <a target="_blank" href="http://www.pivot.tv/?cmpid=bridgetown"><img class="img-responsive" src="/assets/sponsor-pivot.png?1" alt=""></a>\n      </div>\n      <div class="col-xs-4 col-sm-2">\n        <a target="_blank" href="http://www.portlandmercury.com/"><img class="img-responsive" src="/assets/sponsor-mercury.png" alt=""></a>\n      </div>\n      <div class="col-xs-4 col-sm-2">\n        <a target="_blank" href="https://soundcloud.com/wandertown">\n          <img class="img-responsive" src="/assets/sponsor-soundcloud.png" alt="">\n        </a>\n      </div>\n      <div class="col-xs-4 col-sm-2">\n        <a target="_blank" href="http://www.standupfordowns.org/">\n          <img class="img-responsive" src="/assets/sponsor-stand-up-for-downs.png" alt="">\n        </a>\n      </div>\n      <div class="col-xs-4 col-sm-2">\n        <a target="_blank" href="http://www.tonkin.com/">\n          <img class="img-responsive" src="/assets/sponsor-tonkin.png" alt="">\n        </a>\n      </div>\n      <div class="col-xs-4 col-sm-2">\n        <a target="_blank" href="http://voodoodoughnut.com"><img class="img-responsive" src="/assets/sponsor-voodoo.png" alt=""></a>\n      </div>\n      <div class="col-xs-4 col-sm-2">\n        <a target="_blank" href="http://voodoodoughnut.com/recordings"><img class="img-responsive" src="/assets/sponsor-voodoo-recordings.png" alt=""></a>\n      </div>\n      <div class="col-xs-4 col-sm-2">\n        <a target="_blank" href="http://zachsshack.com"><img class="img-responsive" src="/assets/sponsor-zachs-shack.png" alt=""></a>\n      </div>\n      <div class="col-xs-4 col-sm-2">\n        <a target="_blank" href="http://www.yelp.com"><img class="img-responsive" src="/assets/sponsor-yelp.png" alt=""></a>\n      </div>\n   \n    </div><!-- row -->\n  </div><!-- container -->\n');
}), Ember.TEMPLATES.sunday_schedule = Ember.Handlebars.template(function(Handlebars, depth0, helpers, partials, data) {
    this.compilerInfo = [ 4, ">= 1.0.0" ], helpers = this.merge(helpers, Ember.Handlebars.helpers), 
    data = data || {};
    var helper, options, buffer = "", escapeExpression = this.escapeExpression, helperMissing = helpers.helperMissing;
    return data.buffer.push('  <div class="jumbotron jumbotron-minor jumbotron-color-1  jumbotron-page-header">\n    <div class="container">\n      <div class="row centered">\n        <div class="col-lg-8 col-lg-offset-2">\n        <h1>Sunday Schedule</h1>\n        </div>\n      </div><!-- row -->\n    </div><!-- container -->\n  </div><!-- headerwrap -->\n\n<div class="container main-content">\n\n  <div id="schedules" '), 
    data.buffer.push(escapeExpression(helpers["bind-attr"].call(depth0, {
        hash: {
            "class": "scheduleClass"
        },
        hashTypes: {
            "class": "STRING"
        },
        hashContexts: {
            "class": depth0
        },
        contexts: [],
        types: [],
        data: data
    }))), data.buffer.push(">\n  "), data.buffer.push(escapeExpression((helper = helpers.partial || depth0 && depth0.partial, 
    options = {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        contexts: [ depth0 ],
        types: [ "STRING" ],
        data: data
    }, helper ? helper.call(depth0, "schedule_table_sunday", options) : helperMissing.call(depth0, "partial", "schedule_table_sunday", options)))), 
    data.buffer.push("\n  </div>\n</div>\n\n\n\n\n\n"), buffer;
}), Ember.TEMPLATES.thursday_schedule = Ember.Handlebars.template(function(Handlebars, depth0, helpers, partials, data) {
    this.compilerInfo = [ 4, ">= 1.0.0" ], helpers = this.merge(helpers, Ember.Handlebars.helpers), 
    data = data || {};
    var helper, options, buffer = "", escapeExpression = this.escapeExpression, helperMissing = helpers.helperMissing;
    return data.buffer.push('  <div class="jumbotron jumbotron-minor jumbotron-color-1  jumbotron-page-header">\n    <div class="container">\n      <div class="row centered">\n        <div class="col-lg-8 col-lg-offset-2">\n        <h1>Thursday Schedule</h1>\n        </div>\n      </div><!-- row -->\n    </div><!-- container -->\n  </div><!-- headerwrap -->\n\n<div class="container main-content">\n\n  <div id="schedules" '), 
    data.buffer.push(escapeExpression(helpers["bind-attr"].call(depth0, {
        hash: {
            "class": "scheduleClass"
        },
        hashTypes: {
            "class": "STRING"
        },
        hashContexts: {
            "class": depth0
        },
        contexts: [],
        types: [],
        data: data
    }))), data.buffer.push(">\n  "), data.buffer.push(escapeExpression((helper = helpers.partial || depth0 && depth0.partial, 
    options = {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        contexts: [ depth0 ],
        types: [ "STRING" ],
        data: data
    }, helper ? helper.call(depth0, "schedule_table_thursday", options) : helperMissing.call(depth0, "partial", "schedule_table_thursday", options)))), 
    data.buffer.push("\n  </div>\n</div>\n\n\n\n\n\n"), buffer;
}), Ember.TEMPLATES.venue = Ember.Handlebars.template(function(Handlebars, depth0, helpers, partials, data) {
    function program1(depth0, data) {
        var helper, options, buffer = "";
        return data.buffer.push("\n          "), data.buffer.push(escapeExpression((helper = helpers.partial || depth0 && depth0.partial, 
        options = {
            hash: {},
            hashTypes: {},
            hashContexts: {},
            contexts: [ depth0 ],
            types: [ "STRING" ],
            data: data
        }, helper ? helper.call(depth0, "schedule_list_item", options) : helperMissing.call(depth0, "partial", "schedule_list_item", options)))), 
        data.buffer.push("\n        "), buffer;
    }
    function program3(depth0, data) {
        data.buffer.push('\n          <li class="list-group-item">No shows scheduled yet...</li>\n        ');
    }
    this.compilerInfo = [ 4, ">= 1.0.0" ], helpers = this.merge(helpers, Ember.Handlebars.helpers), 
    data = data || {};
    var stack1, buffer = "", helperMissing = helpers.helperMissing, escapeExpression = this.escapeExpression, self = this;
    return data.buffer.push('\n  <div class="jumbotron jumbotron-tiny jumbotron-color-2 jumbotron-page-header">\n    <div class="container">\n      <div class="row centered">\n        <div class="col-lg-8 col-lg-offset-2">\n        <h2>'), 
    data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "Name", {
        hash: {
            unescaped: "true"
        },
        hashTypes: {
            unescaped: "STRING"
        },
        hashContexts: {
            unescaped: depth0
        },
        contexts: [ depth0 ],
        types: [ "ID" ],
        data: data
    }))), data.buffer.push('</h2>\n        </div>\n      </div><!-- row -->\n    </div><!-- container -->\n  </div><!-- headerwrap -->\n\n<div class="container single-performer main-content">\n  <div class="row">\n\n    <div class="col-sm-12">\n      <p>\n        '), 
    data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "Bio", {
        hash: {
            unescaped: "true"
        },
        hashTypes: {
            unescaped: "STRING"
        },
        hashContexts: {
            unescaped: depth0
        },
        contexts: [ depth0 ],
        types: [ "ID" ],
        data: data
    }))), data.buffer.push('\n      </p>\n      \n      <ul class="list-group">\n        <li class="list-group-item active" style="background:#695b53;">\n        <h4 class="list-group-item-heading" style="background:#695b53;color:white">Shows</h4>\n        </li>\n        '), 
    stack1 = helpers.each.call(depth0, "event", "in", "events", {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        inverse: self.program(3, program3, data),
        fn: self.program(1, program1, data),
        contexts: [ depth0, depth0, depth0 ],
        types: [ "ID", "ID", "ID" ],
        data: data
    }), (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push("\n\n      </ul>\n\n    </div>\n  </div>\n</div>\n\n\n\n\n\n"), 
    buffer;
}), Ember.TEMPLATES.venues = Ember.Handlebars.template(function(Handlebars, depth0, helpers, partials, data) {
    this.compilerInfo = [ 4, ">= 1.0.0" ], helpers = this.merge(helpers, Ember.Handlebars.helpers), 
    data = data || {};
    var stack1, buffer = "", escapeExpression = this.escapeExpression;
    return data.buffer.push('\n  <div class="jumbotron jumbotron-minor jumbotron-color-5  jumbotron-page-header">\n    <div class="container">\n      <div class="row centered">\n        <div class="col-lg-8 col-lg-offset-2">\n        <h1>'), 
    stack1 = helpers._triageMustache.call(depth0, "collection.title", {
        hash: {},
        hashTypes: {},
        hashContexts: {},
        contexts: [ depth0 ],
        types: [ "ID" ],
        data: data
    }), (stack1 || 0 === stack1) && data.buffer.push(stack1), data.buffer.push('</h1>\n        </div>\n      </div><!-- row -->\n    </div><!-- container -->\n  </div><!-- headerwrap -->\n\n<div class="container main-content">\n  '), 
    data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "mainContent", {
        hash: {
            unescaped: "true"
        },
        hashTypes: {
            unescaped: "STRING"
        },
        hashContexts: {
            unescaped: depth0
        },
        contexts: [ depth0 ],
        types: [ "ID" ],
        data: data
    }))), data.buffer.push("\n</div>\n\n\n"), buffer;
}), window.history && window.history.pushState && isProduction() && App.Router.reopen({
    location: "history"
}), App.Router.map(function() {
    this.resource("events"), this.resource("event", {
        path: "/event/:events_id"
    }), this.resource("performers"), this.resource("performer", {
        path: "/performer/:pageUrl"
    }), this.resource("shows"), this.resource("show", {
        path: "/show/:pageUrl"
    }), this.route("sponsors"), this.route("schedule"), this.route("thursday_schedule"), 
    this.route("friday_schedule"), this.route("saturday_schedule"), this.route("sunday_schedule"), 
    this.route("venues"), this.resource("venue", {
        path: "/venue/:pageUrl"
    }), this.route("history"), this.route("press"), this.route("contact"), this.route("tickets"), 
    this.route("faqs"), this.route("fourOhFour", {
        path: "*path"
    });
}), App.Router.reopen({
    didTransition: function(infos) {
        this._super(infos), Ember.run.next(function() {
            try {
                ga("send", "pageview", window.location.protocol + "//" + window.location.hostname + window.location.pathname + window.location.search);
            } catch (e) {}
        });
    }
}), Ember.Route.reopen({
    render: function() {
        this._super(), window.scrollTo(0, 0), $('[data-type="image"]').each(function() {
            $(this).attr("src", $(this).data("src"));
        });
    },
    activate: function() {
        this._super(), document.title = this.get("title") ? this.get("title") + " | Bridgetown Comedy Festival" : "Bridgetown Comedy Festival";
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
}), App.SponsorsRoute = Ember.Route.extend({
    title: "Sponsors"
}), App.ContactRoute = Ember.Route.extend({
    model: function() {
        return _retrievePageJSON("contact");
    },
    title: "Contact"
}), App.FaqsRoute = Ember.Route.extend({
    model: function() {
        return _retrievePageJSON("faqs");
    },
    title: "Faqs"
}), App.fourOhFourRoute = Ember.Route.extend({
    renderTemplate: function() {
        this.render("four_oh_four");
    }
}), App.ApplicationRoute = Ember.Route.extend({
    setupController: function() {}
}), App.CatchAllRoute = Ember.Route.extend({
    model: function(a) {
        var host = "http://www.bridgetowncomedy.com/";
        return Ember.$.ajax({
            url: host + a[":"] + "?format=json-pretty",
            dataType: "JSONP"
        });
    }
}), App.EventRoute = Ember.Route.extend({
    model: function(params) {
        var _this = this;
        return Ember.RSVP.hash({
            shows: this.store.find("show"),
            performers: this.store.find("performer"),
            events: this.store.find("event"),
            venues: this.store.find("venue")
        }).then(function() {
            return _this.store.find("event", params.events_id);
        });
    },
    title: "Event"
}), App.EventsRoute = Ember.Route.extend({
    model: function() {
        return Event.find();
    }
}), App.FridayScheduleRoute = Ember.Route.extend({
    model: function() {
        return Ember.RSVP.hash({
            venues: this.store.find("venue"),
            events: this.store.find("event"),
            performers: this.store.find("performer"),
            shows: this.store.find("show")
        });
    },
    title: "Friday Schedule"
}), App.IndexRoute = Ember.Route.extend({
    model: function() {
        return _retrievePageJSON("front-page");
    },
    renderTemplate: function() {
        this.render("index"), this.render("jumbotron_index", {
            outlet: "jumbotron"
        });
    }
}), App.NewspostsRoute = Ember.Route.extend({}), App.PerformerRoute = Ember.Route.extend({
    model: function(params) {
        var _this = this;
        return this.set("params_slug", params.slug), Ember.RSVP.hash({
            venues: this.store.find("venue"),
            performers: this.store.find("performer"),
            events: this.store.find("event")
        }).then(function() {
            return _this.store.find("performer", params.pageUrl.split("-")[0]);
        });
    },
    title: "Performer"
}), App.PerformersRoute = Ember.Route.extend({
    model: function() {
        return Ember.RSVP.hash({
            venues: this.store.find("venue"),
            performers: this.store.find("performer"),
            events: this.store.find("event")
        }).then(function(data) {
            return data.performers;
        });
    },
    title: "Performers"
}), App.SaturdayScheduleRoute = Ember.Route.extend({
    model: function() {
        return Ember.RSVP.hash({
            venues: this.store.find("venue"),
            events: this.store.find("event"),
            performers: this.store.find("performer"),
            shows: this.store.find("show")
        });
    },
    title: "Saturday Schedule"
}), App.ScheduleRoute = Ember.Route.extend({
    model: function() {
        return Ember.RSVP.hash({
            venues: this.store.find("venue"),
            events: this.store.find("event"),
            performers: this.store.find("performer"),
            shows: this.store.find("show")
        });
    },
    title: "Schedule"
}), App.ShowRoute = Ember.Route.extend({
    model: function(params) {
        var _this = this;
        return this.set("params_slug", params.slug), Ember.RSVP.hash({
            shows: this.store.find("show"),
            performers: this.store.find("performer"),
            events: this.store.find("event"),
            venues: this.store.find("venue")
        }).then(function() {
            return _this.store.find("show", params.pageUrl.split("-")[0]);
        });
    },
    title: "Show"
}), App.ShowsRoute = Ember.Route.extend({
    model: function() {
        return this.store.find("show");
    },
    title: "Shows"
}), App.SundayScheduleRoute = Ember.Route.extend({
    model: function() {
        return Ember.RSVP.hash({
            venues: this.store.find("venue"),
            events: this.store.find("event"),
            performers: this.store.find("performer"),
            shows: this.store.find("show")
        });
    },
    title: "Sunday Schedule"
}), App.ThursdayScheduleRoute = Ember.Route.extend({
    model: function() {
        return Ember.RSVP.hash({
            venues: this.store.find("venue"),
            events: this.store.find("event"),
            performers: this.store.find("performer"),
            shows: this.store.find("show")
        });
    },
    title: "Thursday Schedule"
}), App.VenueRoute = Ember.Route.extend({
    model: function(params) {
        var _this = this;
        return this.set("params_slug", params.slug), Ember.RSVP.hash({
            shows: this.store.find("show"),
            performers: this.store.find("performer"),
            events: this.store.find("event"),
            venues: this.store.find("venue")
        }).then(function() {
            return _this.store.find("venue", params.pageUrl.split("-")[0]);
        });
    },
    title: "Venue"
});