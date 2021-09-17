 ! function(a, b) { "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(c) { if (!c.document) { throw new Error("jQuery requires a window with a document") } return b(c) } : b(a) }("undefined" != typeof window ? window : this, function(aw, aH) {
     var ca = [],
         aI = aw.document,
         bY = Object.getPrototypeOf,
         b4 = ca.slice,
         aT = ca.concat,
         ch = ca.push,
         a5 = ca.indexOf,
         bA = {},
         bG = bA.toString,
         cn = bA.hasOwnProperty,
         ah = cn.toString,
         bn = ah.call(Object),
         cG = {},
         bu = function(a) { return "function" == typeof a && "number" != typeof a.nodeType },
         cA = function(a) { return null != a && a === a.window },
         av = { type: !0, src: !0, nonce: !0, noModule: !0 };

     function an(a, g, c) {
         var f, b, d = (c = c || aI).createElement("script");
         if (d.text = a, g) {
             for (f in av) {
                 (b = g[f] || g.getAttribute && g.getAttribute(f)) && d.setAttribute(f, b)
             }
         }
         c.head.appendChild(d).parentNode.removeChild(d)
     }

     function cu(a) { return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? bA[bG.call(a)] || "object" : typeof a }
     var aN = "3.4.1",
         bi = function(a, b) { return new bi.fn.init(a, b) },
         bM = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

     function aB(a) {
         var c = !!a && "length" in a && a.length,
             b = cu(a);
         return !bu(a) && !cA(a) && ("array" === b || 0 === c || "number" == typeof c && 0 < c && c - 1 in a)
     }
     bi.fn = bi.prototype = {
         jquery: aN,
         constructor: bi,
         length: 0,
         toArray: function() { return b4.call(this) },
         get: function(a) { return null == a ? b4.call(this) : a < 0 ? this[a + this.length] : this[a] },
         pushStack: function(a) { var b = bi.merge(this.constructor(), a); return b.prevObject = this, b },
         each: function(a) { return bi.each(this, a) },
         map: function(a) { return this.pushStack(bi.map(this, function(b, c) { return a.call(b, c, b) })) },
         slice: function() { return this.pushStack(b4.apply(this, arguments)) },
         first: function() { return this.eq(0) },
         last: function() { return this.eq(-1) },
         eq: function(a) {
             var c = this.length,
                 b = +a + (a < 0 ? c : 0);
             return this.pushStack(0 <= b && b < c ? [this[b]] : [])
         },
         end: function() { return this.prevObject || this.constructor() },
         push: ch,
         sort: ca.sort,
         splice: ca.splice
     }, bi.extend = bi.fn.extend = function() {
         var c, m, g, j, d, h, b = arguments[0] || {},
             k = 1,
             p = arguments.length,
             f = !1;
         for ("boolean" == typeof b && (f = b, b = arguments[k] || {}, k++), "object" == typeof b || bu(b) || (b = {}), k === p && (b = this, k--); k < p; k++) { if (null != (c = arguments[k])) { for (m in c) { j = c[m], "__proto__" !== m && b !== j && (f && j && (bi.isPlainObject(j) || (d = Array.isArray(j))) ? (g = b[m], h = d && !Array.isArray(g) ? [] : d || bi.isPlainObject(g) ? g : {}, d = !1, b[m] = bi.extend(f, h, j)) : void 0 !== j && (b[m] = j)) } } }
         return b
     }, bi.extend({
         expando: "jQuery" + (aN + Math.random()).replace(/\D/g, ""),
         isReady: !0,
         error: function(a) { throw new Error(a) },
         noop: function() {},
         isPlainObject: function(a) { var c, b; return !(!a || "[object Object]" !== bG.call(a)) && (!(c = bY(a)) || "function" == typeof(b = cn.call(c, "constructor") && c.constructor) && ah.call(b) === bn) },
         isEmptyObject: function(a) { var b; for (b in a) { return !1 } return !0 },
         globalEval: function(a, b) { an(a, { nonce: b && b.nonce }) },
         each: function(a, d) { var b, c = 0; if (aB(a)) { for (b = a.length; c < b; c++) { if (!1 === d.call(a[c], c, a[c])) { break } } } else { for (c in a) { if (!1 === d.call(a[c], c, a[c])) { break } } } return a },
         trim: function(a) { return null == a ? "" : (a + "").replace(bM, "") },
         makeArray: function(a, c) { var b = c || []; return null != a && (aB(Object(a)) ? bi.merge(b, "string" == typeof a ? [a] : a) : ch.call(b, a)), b },
         inArray: function(a, c, b) { return null == c ? -1 : a5.call(c, a, b) },
         merge: function(a, f) { for (var c = +f.length, d = 0, b = a.length; d < c; d++) { a[b++] = f[d] } return a.length = b, a },
         grep: function(c, j, f) { for (var h = [], d = 0, g = c.length, b = !f; d < g; d++) {!j(c[d], d) !== b && h.push(c[d]) } return h },
         map: function(c, j, f) {
             var h, d, g = 0,
                 b = [];
             if (aB(c)) { for (h = c.length; g < h; g++) { null != (d = j(c[g], g, f)) && b.push(d) } } else { for (g in c) { null != (d = j(c[g], g, f)) && b.push(d) } }
             return aT.apply([], b)
         },
         guid: 1,
         support: cG
     }), "function" == typeof Symbol && (bi.fn[Symbol.iterator] = ca[Symbol.iterator]), bi.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) { bA["[object " + b + "]"] = b.toLowerCase() });
     var aZ = function(dv) {
         var c3, c0, cT, dy, dh, dd, c7, da, dW, dQ, dp, dN, cX, ct, c4, dT, dJ, cW, d2, dm = "sizzle" + 1 * new Date,
             ds = dv.document,
             dK = 0,
             dG = 0,
             dB = dS(),
             dZ = dS(),
             dw = dS(),
             cR = dS(),
             c1 = function(a, b) { return a === b && (dp = !0), 0 },
             dk = {}.hasOwnProperty,
             dM = [],
             dE = dM.pop,
             dq = dM.push,
             df = dM.push,
             dz = dM.slice,
             dC = function(a, d) { for (var b = 0, c = a.length; b < c; b++) { if (a[b] === d) { return b } } return -1 },
             dH = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
             dt = "[\\x20\\t\\r\\n\\f]",
             di = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
             dX = "\\[" + dt + "*(" + di + ")(?:" + dt + "*([*^$|!~]?=)" + dt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + di + "))|)" + dt + "*\\]",
             at = ":(" + di + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + dX + ")*)|.*)\\)|)",
             c8 = new RegExp(dt + "+", "g"),
             cU = new RegExp("^" + dt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + dt + "+$", "g"),
             bt = new RegExp("^" + dt + "*," + dt + "*"),
             d5 = new RegExp("^" + dt + "*([>+~]|" + dt + ")" + dt + "*"),
             dR = new RegExp(dt + "|>"),
             d0 = new RegExp(at),
             dU = new RegExp("^" + di + "$"),
             db = { ID: new RegExp("^#(" + di + ")"), CLASS: new RegExp("^\\.(" + di + ")"), TAG: new RegExp("^(" + di + "|[*])"), ATTR: new RegExp("^" + dX), PSEUDO: new RegExp("^" + at), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + dt + "*(even|odd|(([+-]|)(\\d*)n|)" + dt + "*(?:([+-]|)" + dt + "*(\\d+)|))" + dt + "*\\)|)", "i"), bool: new RegExp("^(?:" + dH + ")$", "i"), needsContext: new RegExp("^" + dt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + dt + "*((?:-\\d)?\\d*)" + dt + "*\\)|)(?=[^-]|$)", "i") },
             d3 = /HTML$/i,
             dF = /^(?:input|select|textarea|button)$/i,
             dl = /^h\d$/i,
             dn = /^[^{]+\{\s*\[native \w/,
             d6 = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
             c5 = /[+~]/,
             dO = new RegExp("\\\\([\\da-f]{1,6}" + dt + "?|(" + dt + ")|.)", "ig"),
             dx = function(a, d, b) { var c = "0x" + d - 65536; return c != c || b ? d : c < 0 ? String.fromCharCode(c + 65536) : String.fromCharCode(c >> 10 | 55296, 1023 & c | 56320) },
             dI = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
             dj = function(a, b) { return b ? "\0" === a ? "\ufffd" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a },
             dA = function() { dN() },
             cS = cV(function(a) { return !0 === a.disabled && "fieldset" === a.nodeName.toLowerCase() }, { dir: "parentNode", next: "legend" });
         try { df.apply(dM = dz.call(ds.childNodes), ds.childNodes), dM[ds.childNodes.length].nodeType } catch (c3) {
             df = {
                 apply: dM.length ? function(a, b) { dq.apply(a, dz.call(b)) } : function(a, d) {
                     var b = a.length,
                         c = 0;
                     while (a[b++] = d[c++]) {}
                     a.length = b - 1
                 }
             }
         }

         function dL(y, g, m, w) {
             var j, q, b, x, z, k, d, h = g && g.ownerDocument,
                 v = g ? g.nodeType : 9;
             if (m = m || [], "string" != typeof y || !y || 1 !== v && 9 !== v && 11 !== v) { return m }
             if (!w && ((g ? g.ownerDocument || g : ds) !== cX && dN(g), g = g || cX, c4)) {
                 if (11 !== v && (z = d6.exec(y))) { if (j = z[1]) { if (9 === v) { if (!(b = g.getElementById(j))) { return m } if (b.id === j) { return m.push(b), m } } else { if (h && (b = h.getElementById(j)) && d2(g, b) && b.id === j) { return m.push(b), m } } } else { if (z[2]) { return df.apply(m, g.getElementsByTagName(y)), m } if ((j = z[3]) && c0.getElementsByClassName && g.getElementsByClassName) { return df.apply(m, g.getElementsByClassName(j)), m } } }
                 if (c0.qsa && !cR[y + " "] && (!dT || !dT.test(y)) && (1 !== v || "object" !== g.nodeName.toLowerCase())) {
                     if (d = y, h = g, 1 === v && dR.test(y)) {
                         (x = g.getAttribute("id")) ? x = x.replace(dI, dj): g.setAttribute("id", x = dm), q = (k = dd(y)).length;
                         while (q--) { k[q] = "#" + x + " " + d1(k[q]) }
                         d = k.join(","), h = c5.test(y) && d4(g.parentNode) || g
                     }
                     try { return df.apply(m, h.querySelectorAll(d)), m } catch (g) { cR(y, !0) } finally { x === dm && g.removeAttribute("id") }
                 }
             }
             return da(y.replace(cU, "$1"), g, m, w)
         }

         function dS() { var b = []; return function a(d, c) { return b.push(d + " ") > cT.cacheLength && delete a[b.shift()], a[d + " "] = c } }

         function dr(a) { return a[dm] = !0, a }

         function cY(a) { var b = cX.createElement("fieldset"); try { return !!a(b) } catch (a) { return !1 } finally { b.parentNode && b.parentNode.removeChild(b), b = null } }

         function c9(a, d) {
             var b = a.split("|"),
                 c = b.length;
             while (c--) { cT.attrHandle[b[c]] = d }
         }

         function dD(a, d) {
             var b = d && a,
                 c = b && 1 === a.nodeType && 1 === d.nodeType && a.sourceIndex - d.sourceIndex;
             if (c) { return c }
             if (b) { while (b = b.nextSibling) { if (b === d) { return -1 } } }
             return a ? 1 : -1
         }

         function c2(a) { return function(b) { return "input" === b.nodeName.toLowerCase() && b.type === a } }

         function dg(a) { return function(b) { var c = b.nodeName.toLowerCase(); return ("input" === c || "button" === c) && b.type === a } }

         function dc(a) { return function(b) { return "form" in b ? b.parentNode && !1 === b.disabled ? "label" in b ? "label" in b.parentNode ? b.parentNode.disabled === a : b.disabled === a : b.isDisabled === a || b.isDisabled !== !a && cS(b) === a : b.disabled === a : "label" in b && b.disabled === a } }

         function dV(b) {
             return dr(function(a) {
                 return a = +a, dr(function(c, h) {
                     var f, g = b([], c.length, a),
                         d = g.length;
                     while (d--) { c[f = g[d]] && (c[f] = !(h[f] = c[f])) }
                 })
             })
         }

         function d4(a) { return a && "undefined" != typeof a.getElementsByTagName && a }
         for (c3 in c0 = dL.support = {}, dh = dL.isXML = function(a) {
                 var c = a.namespaceURI,
                     b = (a.ownerDocument || a).documentElement;
                 return !d3.test(c || b && b.nodeName || "HTML")
             }, dN = dL.setDocument = function(a) {
                 var d, b, c = a ? a.ownerDocument || a : ds;
                 return c !== cX && 9 === c.nodeType && c.documentElement && (ct = (cX = c).documentElement, c4 = !dh(cX), ds !== cX && (b = cX.defaultView) && b.top !== b && (b.addEventListener ? b.addEventListener("unload", dA, !1) : b.attachEvent && b.attachEvent("onunload", dA)), c0.attributes = cY(function(f) { return f.className = "i", !f.getAttribute("className") }), c0.getElementsByTagName = cY(function(f) { return f.appendChild(cX.createComment("")), !f.getElementsByTagName("*").length }), c0.getElementsByClassName = dn.test(cX.getElementsByClassName), c0.getById = cY(function(f) { return ct.appendChild(f).id = dm, !cX.getElementsByName || !cX.getElementsByName(dm).length }), c0.getById ? (cT.filter.ID = function(f) { var g = f.replace(dO, dx); return function(h) { return h.getAttribute("id") === g } }, cT.find.ID = function(f, h) { if ("undefined" != typeof h.getElementById && c4) { var g = h.getElementById(f); return g ? [g] : [] } }) : (cT.filter.ID = function(f) { var g = f.replace(dO, dx); return function(h) { var i = "undefined" != typeof h.getAttributeNode && h.getAttributeNode("id"); return i && i.value === g } }, cT.find.ID = function(f, l) {
                     if ("undefined" != typeof l.getElementById && c4) {
                         var h, k, g, j = l.getElementById(f);
                         if (j) {
                             if ((h = j.getAttributeNode("id")) && h.value === f) { return [j] }
                             g = l.getElementsByName(f), k = 0;
                             while (j = g[k++]) { if ((h = j.getAttributeNode("id")) && h.value === f) { return [j] } }
                         }
                         return []
                     }
                 }), cT.find.TAG = c0.getElementsByTagName ? function(f, g) { return "undefined" != typeof g.getElementsByTagName ? g.getElementsByTagName(f) : c0.qsa ? g.querySelectorAll(f) : void 0 } : function(f, l) {
                     var h, k = [],
                         g = 0,
                         j = l.getElementsByTagName(f);
                     if ("*" === f) { while (h = j[g++]) { 1 === h.nodeType && k.push(h) } return k }
                     return j
                 }, cT.find.CLASS = c0.getElementsByClassName && function(f, g) { if ("undefined" != typeof g.getElementsByClassName && c4) { return g.getElementsByClassName(f) } }, dJ = [], dT = [], (c0.qsa = dn.test(cX.querySelectorAll)) && (cY(function(f) { ct.appendChild(f).innerHTML = "<a id='" + dm + "'></a><select id='" + dm + "-\r\\' msallowcapture=''><option selected=''></option></select>", f.querySelectorAll("[msallowcapture^='']").length && dT.push("[*^$]=" + dt + "*(?:''|\"\")"), f.querySelectorAll("[selected]").length || dT.push("\\[" + dt + "*(?:value|" + dH + ")"), f.querySelectorAll("[id~=" + dm + "-]").length || dT.push("~="), f.querySelectorAll(":checked").length || dT.push(":checked"), f.querySelectorAll("a#" + dm + "+*").length || dT.push(".#.+[+~]") }), cY(function(f) {
                     f.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                     var g = cX.createElement("input");
                     g.setAttribute("type", "hidden"), f.appendChild(g).setAttribute("name", "D"), f.querySelectorAll("[name=d]").length && dT.push("name" + dt + "*[*^$|!~]?="), 2 !== f.querySelectorAll(":enabled").length && dT.push(":enabled", ":disabled"), ct.appendChild(f).disabled = !0, 2 !== f.querySelectorAll(":disabled").length && dT.push(":enabled", ":disabled"), f.querySelectorAll("*,:x"), dT.push(",.*:")
                 })), (c0.matchesSelector = dn.test(cW = ct.matches || ct.webkitMatchesSelector || ct.mozMatchesSelector || ct.oMatchesSelector || ct.msMatchesSelector)) && cY(function(f) { c0.disconnectedMatch = cW.call(f, "*"), cW.call(f, "[s!='']:x"), dJ.push("!=", at) }), dT = dT.length && new RegExp(dT.join("|")), dJ = dJ.length && new RegExp(dJ.join("|")), d = dn.test(ct.compareDocumentPosition), d2 = d || dn.test(ct.contains) ? function(f, i) {
                     var g = 9 === f.nodeType ? f.documentElement : f,
                         h = i && i.parentNode;
                     return f === h || !(!h || 1 !== h.nodeType || !(g.contains ? g.contains(h) : f.compareDocumentPosition && 16 & f.compareDocumentPosition(h)))
                 } : function(f, g) { if (g) { while (g = g.parentNode) { if (g === f) { return !0 } } } return !1 }, c1 = d ? function(f, h) { if (f === h) { return dp = !0, 0 } var g = !f.compareDocumentPosition - !h.compareDocumentPosition; return g || (1 & (g = (f.ownerDocument || f) === (h.ownerDocument || h) ? f.compareDocumentPosition(h) : 1) || !c0.sortDetached && h.compareDocumentPosition(f) === g ? f === cX || f.ownerDocument === ds && d2(ds, f) ? -1 : h === cX || h.ownerDocument === ds && d2(ds, h) ? 1 : dQ ? dC(dQ, f) - dC(dQ, h) : 0 : 4 & g ? -1 : 1) } : function(g, p) {
                     if (g === p) { return dp = !0, 0 }
                     var j, l = 0,
                         h = g.parentNode,
                         k = p.parentNode,
                         f = [g],
                         m = [p];
                     if (!h || !k) { return g === cX ? -1 : p === cX ? 1 : h ? -1 : k ? 1 : dQ ? dC(dQ, g) - dC(dQ, p) : 0 }
                     if (h === k) { return dD(g, p) }
                     j = g;
                     while (j = j.parentNode) { f.unshift(j) }
                     j = p;
                     while (j = j.parentNode) { m.unshift(j) }
                     while (f[l] === m[l]) { l++ }
                     return l ? dD(f[l], m[l]) : f[l] === ds ? -1 : m[l] === ds ? 1 : 0
                 }), cX
             }, dL.matches = function(a, b) { return dL(a, null, null, b) }, dL.matchesSelector = function(a, c) { if ((a.ownerDocument || a) !== cX && dN(a), c0.matchesSelector && c4 && !cR[c + " "] && (!dJ || !dJ.test(c)) && (!dT || !dT.test(c))) { try { var b = cW.call(a, c); if (b || c0.disconnectedMatch || a.document && 11 !== a.document.nodeType) { return b } } catch (a) { cR(c, !0) } } return 0 < dL(c, cX, null, [a]).length }, dL.contains = function(a, b) { return (a.ownerDocument || a) !== cX && dN(a), d2(a, b) }, dL.attr = function(a, d) {
                 (a.ownerDocument || a) !== cX && dN(a);
                 var b = cT.attrHandle[d.toLowerCase()],
                     c = b && dk.call(cT.attrHandle, d.toLowerCase()) ? b(a, d, !c4) : void 0;
                 return void 0 !== c ? c : c0.attributes || !c4 ? a.getAttribute(d) : (c = a.getAttributeNode(d)) && c.specified ? c.value : null
             }, dL.escape = function(a) { return (a + "").replace(dI, dj) }, dL.error = function(a) { throw new Error("Syntax error, unrecognized expression: " + a) }, dL.uniqueSort = function(a) {
                 var f, c = [],
                     d = 0,
                     b = 0;
                 if (dp = !c0.detectDuplicates, dQ = !c0.sortStable && a.slice(0), a.sort(c1), dp) { while (f = a[b++]) { f === a[b] && (d = c.push(b)) } while (d--) { a.splice(c[d], 1) } }
                 return dQ = null, a
             }, dy = dL.getText = function(a) {
                 var f, c = "",
                     d = 0,
                     b = a.nodeType;
                 if (b) { if (1 === b || 9 === b || 11 === b) { if ("string" == typeof a.textContent) { return a.textContent } for (a = a.firstChild; a; a = a.nextSibling) { c += dy(a) } } else { if (3 === b || 4 === b) { return a.nodeValue } } } else { while (f = a[d++]) { c += dy(f) } }
                 return c
             }, (cT = dL.selectors = {
                 cacheLength: 50,
                 createPseudo: dr,
                 match: db,
                 attrHandle: {},
                 find: {},
                 relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                 preFilter: { ATTR: function(a) { return a[1] = a[1].replace(dO, dx), a[3] = (a[3] || a[4] || a[5] || "").replace(dO, dx), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4) }, CHILD: function(a) { return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || dL.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && dL.error(a[0]), a }, PSEUDO: function(a) { var c, b = !a[6] && a[2]; return db.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : b && d0.test(b) && (c = dd(b, !0)) && (c = b.indexOf(")", b.length - c) - b.length) && (a[0] = a[0].slice(0, c), a[2] = b.slice(0, c)), a.slice(0, 3)) } },
                 filter: {
                     TAG: function(a) { var b = a.replace(dO, dx).toLowerCase(); return "*" === a ? function() { return !0 } : function(c) { return c.nodeName && c.nodeName.toLowerCase() === b } },
                     CLASS: function(a) { var b = dB[a + " "]; return b || (b = new RegExp("(^|" + dt + ")" + a + "(" + dt + "|$)")) && dB(a, function(c) { return b.test("string" == typeof c.className && c.className || "undefined" != typeof c.getAttribute && c.getAttribute("class") || "") }) },
                     ATTR: function(b, c, a) { return function(d) { var f = dL.attr(d, b); return null == f ? "!=" === c : !c || (f += "", "=" === c ? f === a : "!=" === c ? f !== a : "^=" === c ? a && 0 === f.indexOf(a) : "*=" === c ? a && -1 < f.indexOf(a) : "$=" === c ? a && f.slice(-a.length) === a : "~=" === c ? -1 < (" " + f.replace(c8, " ") + " ").indexOf(a) : "|=" === c && (f === a || f.slice(0, a.length + 1) === a + "-")) } },
                     CHILD: function(c, a, f, b, i) {
                         var k = "nth" !== c.slice(0, 3),
                             d = "last" !== c.slice(-4),
                             j = "of-type" === a;
                         return 1 === b && 0 === i ? function(g) { return !!g.parentNode } : function(q, D, y) {
                             var B, w, z, g, C, E, x = k !== d ? "nextSibling" : "previousSibling",
                                 h = q.parentNode,
                                 v = j && q.nodeName.toLowerCase(),
                                 A = !y && !j,
                                 m = !1;
                             if (h) {
                                 if (k) {
                                     while (x) {
                                         g = q;
                                         while (g = g[x]) { if (j ? g.nodeName.toLowerCase() === v : 1 === g.nodeType) { return !1 } }
                                         E = x = "only" === c && !E && "nextSibling"
                                     }
                                     return !0
                                 }
                                 if (E = [d ? h.firstChild : h.lastChild], d && A) { m = (C = (B = (w = (z = (g = h)[dm] || (g[dm] = {}))[g.uniqueID] || (z[g.uniqueID] = {}))[c] || [])[0] === dK && B[1]) && B[2], g = C && h.childNodes[C]; while (g = ++C && g && g[x] || (m = C = 0) || E.pop()) { if (1 === g.nodeType && ++m && g === q) { w[c] = [dK, C, m]; break } } } else { if (A && (m = C = (B = (w = (z = (g = q)[dm] || (g[dm] = {}))[g.uniqueID] || (z[g.uniqueID] = {}))[c] || [])[0] === dK && B[1]), !1 === m) { while (g = ++C && g && g[x] || (m = C = 0) || E.pop()) { if ((j ? g.nodeName.toLowerCase() === v : 1 === g.nodeType) && ++m && (A && ((w = (z = g[dm] || (g[dm] = {}))[g.uniqueID] || (z[g.uniqueID] = {}))[c] = [dK, m]), g === q)) { break } } } }
                                 return (m -= i) === b || m % b == 0 && 0 <= m / b
                             }
                         }
                     },
                     PSEUDO: function(c, d) {
                         var f, b = cT.pseudos[c] || cT.setFilters[c.toLowerCase()] || dL.error("unsupported pseudo: " + c);
                         return b[dm] ? b(d) : 1 < b.length ? (f = [c, c, "", d], cT.setFilters.hasOwnProperty(c.toLowerCase()) ? dr(function(a, k) {
                             var h, j = b(a, d),
                                 g = j.length;
                             while (g--) { a[h = dC(a, j[g])] = !(k[h] = j[g]) }
                         }) : function(a) { return b(a, 0, f) }) : b
                     }
                 },
                 pseudos: {
                     not: dr(function(a) {
                         var c = [],
                             b = [],
                             d = c7(a.replace(cU, "$1"));
                         return d[dm] ? dr(function(g, m, j, l) {
                             var h, k = d(g, null, l, []),
                                 f = g.length;
                             while (f--) {
                                 (h = k[f]) && (g[f] = !(m[f] = h))
                             }
                         }) : function(f, h, g) { return c[0] = f, d(c, null, g, b), c[0] = null, !b.pop() }
                     }),
                     has: dr(function(a) { return function(b) { return 0 < dL(a, b).length } }),
                     contains: dr(function(a) {
                         return a = a.replace(dO, dx),
                             function(b) { return -1 < (b.textContent || dy(b)).indexOf(a) }
                     }),
                     lang: dr(function(a) {
                         return dU.test(a || "") || dL.error("unsupported lang: " + a), a = a.replace(dO, dx).toLowerCase(),
                             function(b) {
                                 var c;
                                 do { if (c = c4 ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) { return (c = c.toLowerCase()) === a || 0 === c.indexOf(a + "-") } } while ((b = b.parentNode) && 1 === b.nodeType);
                                 return !1
                             }
                     }),
                     target: function(a) { var b = dv.location && dv.location.hash; return b && b.slice(1) === a.id },
                     root: function(a) { return a === ct },
                     focus: function(a) { return a === cX.activeElement && (!cX.hasFocus || cX.hasFocus()) && !!(a.type || a.href || ~a.tabIndex) },
                     enabled: dc(!1),
                     disabled: dc(!0),
                     checked: function(a) { var b = a.nodeName.toLowerCase(); return "input" === b && !!a.checked || "option" === b && !!a.selected },
                     selected: function(a) { return a.parentNode && a.parentNode.selectedIndex, !0 === a.selected },
                     empty: function(a) { for (a = a.firstChild; a; a = a.nextSibling) { if (a.nodeType < 6) { return !1 } } return !0 },
                     parent: function(a) { return !cT.pseudos.empty(a) },
                     header: function(a) { return dl.test(a.nodeName) },
                     input: function(a) { return dF.test(a.nodeName) },
                     button: function(a) { var b = a.nodeName.toLowerCase(); return "input" === b && "button" === a.type || "button" === b },
                     text: function(a) { var b; return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase()) },
                     first: dV(function() { return [0] }),
                     last: dV(function(a, b) { return [b - 1] }),
                     eq: dV(function(a, c, b) { return [b < 0 ? b + c : b] }),
                     even: dV(function(a, c) { for (var b = 0; b < c; b += 2) { a.push(b) } return a }),
                     odd: dV(function(a, c) { for (var b = 1; b < c; b += 2) { a.push(b) } return a }),
                     lt: dV(function(a, d, b) { for (var c = b < 0 ? b + d : d < b ? d : b; 0 <= --c;) { a.push(c) } return a }),
                     gt: dV(function(a, d, b) { for (var c = b < 0 ? b + d : b; ++c < d;) { a.push(c) } return a })
                 }
             }).pseudos.nth = cT.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) { cT.pseudos[c3] = c2(c3) }
         for (c3 in { submit: !0, reset: !0 }) { cT.pseudos[c3] = dg(c3) }

         function du() {}

         function d1(a) { for (var d = 0, b = a.length, c = ""; d < b; d++) { c += a[d].value } return c }

         function cV(i, b, j) {
             var k = b.dir,
                 g = b.next,
                 a = g || k,
                 d = j && "parentNode" === a,
                 h = dG++;
             return b.first ? function(c, l, f) { while (c = c[k]) { if (1 === c.nodeType || d) { return i(c, l, f) } } return !1 } : function(f, s, m) { var q, l, p, c = [dK, h]; if (m) { while (f = f[k]) { if ((1 === f.nodeType || d) && i(f, s, m)) { return !0 } } } else { while (f = f[k]) { if (1 === f.nodeType || d) { if (l = (p = f[dm] || (f[dm] = {}))[f.uniqueID] || (p[f.uniqueID] = {}), g && g === f.nodeName.toLowerCase()) { f = f[k] || f } else { if ((q = l[a]) && q[0] === dK && q[1] === h) { return c[2] = q[2] } if ((l[a] = c)[2] = i(f, s, m)) { return !0 } } } } } return !1 }
         }

         function dY(a) { return 1 < a.length ? function(b, f, c) { var d = a.length; while (d--) { if (!a[d](b, f, c)) { return !1 } } return !0 } : a[0] }

         function dP(c, m, g, j, d) {
             for (var h, b = [], k = 0, p = c.length, f = null != m; k < p; k++) {
                 (h = c[k]) && (g && !g(h, j, d) || (b.push(h), f && m.push(k)))
             }
             return b
         }

         function cZ(a, f, c, i, j, b) {
             return i && !i[dm] && (i = cZ(i)), j && !j[dm] && (j = cZ(j, b)), dr(function(h, A, v, y) {
                 var m, w, d, z = [],
                     B = [],
                     q = A.length,
                     g = h || function(l, u, p) { for (var s = 0, o = u.length; s < o; s++) { dL(l, u[s], p) } return p }(f || "*", v.nodeType ? [v] : v, []),
                     k = !a || !h && f ? g : dP(g, z, a, v, y),
                     x = c ? j || (h ? a : q || i) ? [] : A : k;
                 if (c && c(k, x, v, y), i) {
                     m = dP(x, B), i(m, [], v, y), w = m.length;
                     while (w--) {
                         (d = m[w]) && (x[B[w]] = !(k[B[w]] = d))
                     }
                 }
                 if (h) {
                     if (j || a) {
                         if (j) {
                             m = [], w = x.length;
                             while (w--) {
                                 (d = x[w]) && m.push(k[w] = d)
                             }
                             j(null, x = [], m, y)
                         }
                         w = x.length;
                         while (w--) {
                             (d = x[w]) && -1 < (m = j ? dC(h, d) : z[w]) && (h[m] = !(A[m] = d))
                         }
                     }
                 } else { x = dP(x === A ? x.splice(q, x.length) : x), j ? j(null, A, x, y) : df.apply(A, x) }
             })
         }

         function c6(f) {
             for (var g, q, j, m = f.length, k = cT.relative[f[0].type], b = k || cT.relative[" "], p = k ? 1 : 0, v = cV(function(a) { return a === g }, b, !0), h = cV(function(a) { return -1 < dC(g, a) }, b, !0), d = [function(a, l, c) { var i = !k && (c || l !== dW) || ((g = l).nodeType ? v(a, l, c) : h(a, l, c)); return g = null, i }]; p < m; p++) {
                 if (q = cT.relative[f[p].type]) { d = [cV(dY(d), q)] } else {
                     if ((q = cT.filter[f[p].type].apply(null, f[p].matches))[dm]) { for (j = ++p; j < m; j++) { if (cT.relative[f[j].type]) { break } } return cZ(1 < p && dY(d), 1 < p && d1(f.slice(0, p - 1).concat({ value: " " === f[p - 2].type ? "*" : "" })).replace(cU, "$1"), q, p < j && c6(f.slice(p, j)), j < m && c6(f = f.slice(j)), j < m && d1(f)) }
                     d.push(q)
                 }
             }
             return dY(d)
         }
         return du.prototype = cT.filters = cT.pseudos, cT.setFilters = new du, dd = dL.tokenize = function(c, m) {
             var g, j, d, h, b, k, p, f = dZ[c + " "];
             if (f) { return m ? 0 : f.slice(0) }
             b = c, k = [], p = cT.preFilter;
             while (b) { for (h in g && !(j = bt.exec(b)) || (j && (b = b.slice(j[0].length) || b), k.push(d = [])), g = !1, (j = d5.exec(b)) && (g = j.shift(), d.push({ value: g, type: j[0].replace(cU, " ") }), b = b.slice(g.length)), cT.filter) {!(j = db[h].exec(b)) || p[h] && !(j = p[h](j)) || (g = j.shift(), d.push({ value: g, type: h, matches: j }), b = b.slice(g.length)) } if (!g) { break } }
             return m ? b.length : b ? dL.error(c) : dZ(c, k).slice(0)
         }, c7 = dL.compile = function(c, k) {
             var g, l, q, f, p, j, d = [],
                 h = [],
                 b = dw[c + " "];
             if (!b) {
                 k || (k = dd(c)), g = k.length;
                 while (g--) {
                     (b = c6(k[g]))[dm] ? d.push(b): h.push(b)
                 }(b = dw(c, (l = h, f = 0 < (q = d).length, p = 0 < l.length, j = function(x, I, D, G, B) {
                     var E, m, H, J = 0,
                         C = "0",
                         v = x && [],
                         y = [],
                         F = dW,
                         w = x || p && cT.find.TAG("*", B),
                         A = dK += null == F ? 1 : Math.random() || 0.1,
                         z = w.length;
                     for (B && (dW = I === cX || I || B); C !== z && null != (E = w[C]); C++) {
                         if (p && E) {
                             m = 0, I || E.ownerDocument === cX || (dN(E), D = !c4);
                             while (H = l[m++]) { if (H(E, I || cX, D)) { G.push(E); break } }
                             B && (dK = A)
                         }
                         f && ((E = !H && E) && J--, x && v.push(E))
                     }
                     if (J += C, f && C !== J) {
                         m = 0;
                         while (H = q[m++]) { H(v, y, I, D) }
                         if (x) {
                             if (0 < J) { while (C--) { v[C] || y[C] || (y[C] = dE.call(G)) } }
                             y = dP(y)
                         }
                         df.apply(G, y), B && !x && 0 < y.length && 1 < J + q.length && dL.uniqueSort(G)
                     }
                     return B && (dK = A, dW = F), v
                 }, f ? dr(j) : j))).selector = c
             }
             return b
         }, da = dL.select = function(f, q, j, m) {
             var g, k, b, p, v, h = "function" == typeof f && f,
                 d = !m && dd(f = h.selector || f);
             if (j = j || [], 1 === d.length) {
                 if (2 < (k = d[0] = d[0].slice(0)).length && "ID" === (b = k[0]).type && 9 === q.nodeType && c4 && cT.relative[k[1].type]) {
                     if (!(q = (cT.find.ID(b.matches[0].replace(dO, dx), q) || [])[0])) { return j }
                     h && (q = q.parentNode), f = f.slice(k.shift().value.length)
                 }
                 g = db.needsContext.test(f) ? 0 : k.length;
                 while (g--) { if (b = k[g], cT.relative[p = b.type]) { break } if ((v = cT.find[p]) && (m = v(b.matches[0].replace(dO, dx), c5.test(k[0].type) && d4(q.parentNode) || q))) { if (k.splice(g, 1), !(f = m.length && d1(k))) { return df.apply(j, m), j } break } }
             }
             return (h || c7(f, d))(m, q, !c4, j, !q || c5.test(f) && d4(q.parentNode) || q), j
         }, c0.sortStable = dm.split("").sort(c1).join("") === dm, c0.detectDuplicates = !!dp, dN(), c0.sortDetached = cY(function(a) { return 1 & a.compareDocumentPosition(cX.createElement("fieldset")) }), cY(function(a) { return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href") }) || c9("type|href|height|width", function(a, c, b) { if (!b) { return a.getAttribute(c, "type" === c.toLowerCase() ? 1 : 2) } }), c0.attributes && cY(function(a) { return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value") }) || c9("value", function(a, c, b) { if (!b && "input" === a.nodeName.toLowerCase()) { return a.defaultValue } }), cY(function(a) { return null == a.getAttribute("disabled") }) || c9(dH, function(a, d, b) { var c; if (!b) { return !0 === a[d] ? d.toLowerCase() : (c = a.getAttributeNode(d)) && c.specified ? c.value : null } }), dL
     }(aw);
     bi.find = aZ, bi.expr = aZ.selectors, bi.expr[":"] = bi.expr.pseudos, bi.uniqueSort = bi.unique = aZ.uniqueSort, bi.text = aZ.getText, bi.isXMLDoc = aZ.isXML, bi.contains = aZ.contains, bi.escapeSelector = aZ.escape;
     var cb = function(a, f, c) {
             var d = [],
                 b = void 0 !== c;
             while ((a = a[f]) && 9 !== a.nodeType) {
                 if (1 === a.nodeType) {
                     if (b && bi(a).is(c)) { break }
                     d.push(a)
                 }
             }
             return d
         },
         b5 = function(a, c) { for (var b = []; a; a = a.nextSibling) { 1 === a.nodeType && a !== c && b.push(a) } return b },
         bB = bi.expr.match.needsContext;

     function ai(a, b) { return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase() }
     var aC = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

     function bb(a, b, c) { return bu(b) ? bi.grep(a, function(d, f) { return !!b.call(d, f, d) !== c }) : b.nodeType ? bi.grep(a, function(d) { return d === b !== c }) : "string" != typeof b ? bi.grep(a, function(d) { return -1 < a5.call(b, d) !== c }) : bi.filter(b, a, c) }
     bi.filter = function(a, d, b) { var c = d[0]; return b && (a = ":not(" + a + ")"), 1 === d.length && 1 === c.nodeType ? bi.find.matchesSelector(c, a) ? [c] : [] : bi.find.matches(a, bi.grep(d, function(f) { return 1 === f.nodeType })) }, bi.fn.extend({
         find: function(a) {
             var f, c, d = this.length,
                 b = this;
             if ("string" != typeof a) { return this.pushStack(bi(a).filter(function() { for (f = 0; f < d; f++) { if (bi.contains(b[f], this)) { return !0 } } })) }
             for (c = this.pushStack([]), f = 0; f < d; f++) { bi.find(a, b[f], c) }
             return 1 < d ? bi.uniqueSort(c) : c
         },
         filter: function(a) { return this.pushStack(bb(this, a || [], !1)) },
         not: function(a) { return this.pushStack(bb(this, a || [], !0)) },
         is: function(a) { return !!bb(this, "string" == typeof a && bB.test(a) ? bi(a) : a || [], !1).length }
     });
     var bS, bo = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
     (bi.fn.init = function(a, f, c) { var d, b; if (!a) { return this } if (c = c || bS, "string" == typeof a) { if (!(d = "<" === a[0] && ">" === a[a.length - 1] && 3 <= a.length ? [null, a, null] : bo.exec(a)) || !d[1] && f) { return !f || f.jquery ? (f || c).find(a) : this.constructor(f).find(a) } if (d[1]) { if (f = f instanceof bi ? f[0] : f, bi.merge(this, bi.parseHTML(d[1], f && f.nodeType ? f.ownerDocument || f : aI, !0)), aC.test(d[1]) && bi.isPlainObject(f)) { for (d in f) { bu(this[d]) ? this[d](f[d]) : this.attr(d, f[d]) } } return this } return (b = aI.getElementById(d[2])) && (this[0] = b, this.length = 1), this } return a.nodeType ? (this[0] = a, this.length = 1, this) : bu(a) ? void 0 !== c.ready ? c.ready(a) : a(bi) : bi.makeArray(a, this) }).prototype = bi.fn, bS = bi(aI);
     var a0 = /^(?:parents|prev(?:Until|All))/,
         bH = { children: !0, contents: !0, next: !0, prev: !0 };

     function bN(a, b) { while ((a = a[b]) && 1 !== a.nodeType) {} return a }
     bi.fn.extend({
         has: function(a) {
             var c = bi(a, this),
                 b = c.length;
             return this.filter(function() { for (var d = 0; d < b; d++) { if (bi.contains(this, c[d])) { return !0 } } })
         },
         closest: function(c, j) {
             var f, h = 0,
                 d = this.length,
                 g = [],
                 b = "string" != typeof c && bi(c);
             if (!bB.test(c)) { for (; h < d; h++) { for (f = this[h]; f && f !== j; f = f.parentNode) { if (f.nodeType < 11 && (b ? -1 < b.index(f) : 1 === f.nodeType && bi.find.matchesSelector(f, c))) { g.push(f); break } } } }
             return this.pushStack(1 < g.length ? bi.uniqueSort(g) : g)
         },
         index: function(a) { return a ? "string" == typeof a ? a5.call(bi(a), this[0]) : a5.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 },
         add: function(a, b) { return this.pushStack(bi.uniqueSort(bi.merge(this.get(), bi(a, b)))) },
         addBack: function(a) { return this.add(null == a ? this.prevObject : this.prevObject.filter(a)) }
     }), bi.each({ parent: function(a) { var b = a.parentNode; return b && 11 !== b.nodeType ? b : null }, parents: function(a) { return cb(a, "parentNode") }, parentsUntil: function(a, c, b) { return cb(a, "parentNode", b) }, next: function(a) { return bN(a, "nextSibling") }, prev: function(a) { return bN(a, "previousSibling") }, nextAll: function(a) { return cb(a, "nextSibling") }, prevAll: function(a) { return cb(a, "previousSibling") }, nextUntil: function(a, c, b) { return cb(a, "nextSibling", b) }, prevUntil: function(a, c, b) { return cb(a, "previousSibling", b) }, siblings: function(a) { return b5((a.parentNode || {}).firstChild, a) }, children: function(a) { return b5(a.firstChild) }, contents: function(a) { return "undefined" != typeof a.contentDocument ? a.contentDocument : (ai(a, "template") && (a = a.content || a), bi.merge([], a.childNodes)) } }, function(b, a) { bi.fn[b] = function(c, f) { var d = bi.map(this, a, c); return "Until" !== b.slice(-5) && (f = c), f && "string" == typeof f && (d = bi.filter(f, d)), 1 < this.length && (bH[b] || bi.uniqueSort(d), a0.test(b) && d.reverse()), this.pushStack(d) } });
     var bZ = /[^\x20\t\r\n\f]+/g;

     function bv(a) { return a }

     function a6(a) { throw a }

     function cv(a, f, c, d) { var b; try { a && bu(b = a.promise) ? b.call(a).done(f).fail(c) : a && bu(b = a.then) ? b.call(a, f, c) : f.apply(void 0, [a].slice(d)) } catch (a) { c.apply(void 0, [a]) } }
     bi.Callbacks = function(q) {
         var g, m;
         q = "string" == typeof q ? (g = q, m = {}, bi.each(g.match(bZ) || [], function(a, c) { m[c] = !0 }), m) : bi.extend({}, q);
         var j, w, p, b, v = [],
             x = [],
             k = -1,
             d = function() {
                 for (b = b || q.once, p = j = !0; x.length; k = -1) { w = x.shift(); while (++k < v.length) {!1 === v[k].apply(w[0], w[1]) && q.stopOnFalse && (k = v.length, w = !1) } }
                 q.memory || (w = !1), j = !1, b && (v = w ? [] : "")
             },
             h = { add: function() { return v && (w && !j && (k = v.length - 1, x.push(w)), function a(c) { bi.each(c, function(f, i) { bu(i) ? q.unique && h.has(i) || v.push(i) : i && i.length && "string" !== cu(i) && a(i) }) }(arguments), w && !j && d()), this }, remove: function() { return bi.each(arguments, function(a, f) { var c; while (-1 < (c = bi.inArray(f, v, c))) { v.splice(c, 1), c <= k && k-- } }), this }, has: function(a) { return a ? -1 < bi.inArray(a, v) : 0 < v.length }, empty: function() { return v && (v = []), this }, disable: function() { return b = x = [], v = w = "", this }, disabled: function() { return !v }, lock: function() { return b = x = [], w || j || (v = w = ""), this }, locked: function() { return !!b }, fireWith: function(a, c) { return b || (c = [a, (c = c || []).slice ? c.slice() : c], x.push(c), j || d()), this }, fire: function() { return h.fireWith(this, arguments), this }, fired: function() { return !!p } };
         return h
     }, bi.extend({
         Deferred: function(c) {
             var f = [
                     ["notify", "progress", bi.Callbacks("memory"), bi.Callbacks("memory"), 2],
                     ["resolve", "done", bi.Callbacks("once memory"), bi.Callbacks("once memory"), 0, "resolved"],
                     ["reject", "fail", bi.Callbacks("once memory"), bi.Callbacks("once memory"), 1, "rejected"]
                 ],
                 d = "pending",
                 b = {
                     state: function() { return d },
                     always: function() { return g.done(arguments).fail(arguments), this },
                     "catch": function(a) { return b.then(null, a) },
                     pipe: function() {
                         var a = arguments;
                         return bi.Deferred(function(e) {
                             bi.each(f, function(h, j) {
                                 var i = bu(a[j[4]]) && a[j[4]];
                                 g[j[1]](function() {
                                     var k = i && i.apply(this, arguments);
                                     k && bu(k.promise) ? k.promise().progress(e.notify).done(e.resolve).fail(e.reject) : e[j[0] + "With"](this, i ? [k] : arguments)
                                 })
                             }), a = null
                         }).promise()
                     },
                     then: function(i, e, h) {
                         var j = 0;

                         function a(l, m, k, n) {
                             return function() {
                                 var p = this,
                                     q = arguments,
                                     o = function() {
                                         var r, u;
                                         if (!(l < j)) {
                                             if ((r = k.apply(p, q)) === m.promise()) { throw new TypeError("Thenable self-resolution") }
                                             u = r && ("object" == typeof r || "function" == typeof r) && r.then, bu(u) ? n ? u.call(r, a(j, m, bv, n), a(j, m, a6, n)) : (j++, u.call(r, a(j, m, bv, n), a(j, m, a6, n), a(j, m, bv, m.notifyWith))) : (k !== bv && (p = void 0, q = [r]), (n || m.resolveWith)(p, q))
                                         }
                                     },
                                     s = n ? o : function() { try { r() } catch (r) { bi.Deferred.exceptionHook && bi.Deferred.exceptionHook(r, s.stackTrace), j <= l + 1 && (k !== a6 && (p = void 0, q = [r]), m.rejectWith(p, q)) } };
                                 l ? s() : (bi.Deferred.getStackHook && (s.stackTrace = bi.Deferred.getStackHook()), aw.setTimeout(s))
                             }
                         }
                         return bi.Deferred(function(k) { f[0][3].add(a(0, k, bu(h) ? h : bv, k.notifyWith)), f[1][3].add(a(0, k, bu(i) ? i : bv)), f[2][3].add(a(0, k, bu(e) ? e : a6)) }).promise()
                     },
                     promise: function(a) { return null != a ? bi.extend(a, b) : b }
                 },
                 g = {};
             return bi.each(f, function(a, j) {
                 var h = j[2],
                     i = j[5];
                 b[j[1]] = h.add, i && h.add(function() { d = i }, f[3 - a][2].disable, f[3 - a][3].disable, f[0][2].lock, f[0][3].lock), h.add(j[3].fire), g[j[0]] = function() { return g[j[0] + "With"](this === g ? void 0 : this, arguments), this }, g[j[0] + "With"] = h.fireWith
             }), b.promise(g), c && c.call(g, g), g
         },
         when: function(c) {
             var f = arguments.length,
                 j = f,
                 h = Array(j),
                 d = b4.call(arguments),
                 g = bi.Deferred(),
                 b = function(a) { return function(i) { h[a] = this, d[a] = 1 < arguments.length ? b4.call(arguments) : i, --f || g.resolveWith(h, d) } };
             if (f <= 1 && (cv(c, g.done(b(j)).resolve, g.reject, !f), "pending" === g.state() || bu(d[j] && d[j].then))) { return g.then() }
             while (j--) { cv(d[j], b(j), g.reject) }
             return g.promise()
         }
     });
     var aa = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
     bi.Deferred.exceptionHook = function(a, b) { aw.console && aw.console.warn && a && aa.test(a.name) && aw.console.warn("jQuery.Deferred exception: " + a.message, a.stack, b) }, bi.readyException = function(a) { aw.setTimeout(function() { throw a }) };
     var aO = bi.Deferred();

     function ao() { aI.removeEventListener("DOMContentLoaded", ao), aw.removeEventListener("load", ao), bi.ready() }
     bi.fn.ready = function(a) { return aO.then(a)["catch"](function(b) { bi.readyException(b) }), this }, bi.extend({
         isReady: !1,
         readyWait: 1,
         ready: function(a) {
             (!0 === a ? --bi.readyWait : bi.isReady) || (bi.isReady = !0) !== a && 0 < --bi.readyWait || aO.resolveWith(aI, [bi])
         }
     }), bi.ready.then = aO.then, "complete" === aI.readyState || "loading" !== aI.readyState && !aI.documentElement.doScroll ? aw.setTimeout(bi.ready) : (aI.addEventListener("DOMContentLoaded", ao), aw.addEventListener("load", ao));
     var ad = function(c, m, g, j, d, h, b) {
             var k = 0,
                 p = c.length,
                 f = null == g;
             if ("object" === cu(g)) { for (k in d = !0, g) { ad(c, m, k, g[k], !0, h, b) } } else { if (void 0 !== j && (d = !0, bu(j) || (b = !0), f && (b ? (m.call(c, j), m = null) : (f = m, m = function(a, l, i) { return f.call(bi(a), i) })), m)) { for (; k < p; k++) { m(c[k], g, b ? j : j.call(c[k], k, m(c[k], g))) } } }
             return d ? c : f ? m.call(c) : p ? m(c[0], g) : h
         },
         cM = /^-ms-/,
         ci = /-([a-z])/g;

     function cB(a, b) { return b.toUpperCase() }

     function co(a) { return a.replace(cM, "ms-").replace(ci, cB) }
     var aU = function(a) { return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType };

     function cH() { this.expando = bi.expando + cH.uid++ }
     cH.uid = 1, cH.prototype = { cache: function(a) { var b = a[this.expando]; return b || (b = {}, aU(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, { value: b, configurable: !0 }))), b }, set: function(a, f, c) { var d, b = this.cache(a); if ("string" == typeof f) { b[co(f)] = c } else { for (d in f) { b[co(d)] = f[d] } } return b }, get: function(a, b) { return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][co(b)] }, access: function(a, c, b) { return void 0 === c || c && "string" == typeof c && void 0 === b ? this.get(a, c) : (this.set(a, c, b), void 0 !== b ? b : c) }, remove: function(a, d) { var b, c = a[this.expando]; if (void 0 !== c) { if (void 0 !== d) { b = (d = Array.isArray(d) ? d.map(co) : (d = co(d)) in c ? [d] : d.match(bZ) || []).length; while (b--) { delete c[d[b]] } }(void 0 === d || bi.isEmptyObject(c)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando]) } }, hasData: function(a) { var b = a[this.expando]; return void 0 !== b && !bi.isEmptyObject(b) } };
     var bT = new cH,
         bc = new cH,
         bj = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
         cN = /[A-Z]/g;

     function aJ(a, f, c) {
         var d, b;
         if (void 0 === c && 1 === a.nodeType) {
             if (d = "data-" + f.replace(cN, "-$&").toLowerCase(), "string" == typeof(c = a.getAttribute(d))) {
                 try { c = "true" === (b = c) || "false" !== b && ("null" === b ? null : b === +b + "" ? +b : bj.test(b) ? JSON.parse(b) : b) } catch (a) {}
                 bc.set(a, f, c)
             } else { c = void 0 }
         }
         return c
     }
     bi.extend({ hasData: function(a) { return bc.hasData(a) || bT.hasData(a) }, data: function(a, c, b) { return bc.access(a, c, b) }, removeData: function(a, b) { bc.remove(a, b) }, _data: function(a, c, b) { return bT.access(a, c, b) }, _removeData: function(a, b) { bT.remove(a, b) } }), bi.fn.extend({
         data: function(f, c) {
             var j, h, d, g = this[0],
                 b = g && g.attributes;
             if (void 0 === f) {
                 if (this.length && (d = bc.get(g), 1 === g.nodeType && !bT.get(g, "hasDataAttrs"))) {
                     j = b.length;
                     while (j--) { b[j] && 0 === (h = b[j].name).indexOf("data-") && (h = co(h.slice(5)), aJ(g, h, d[h])) }
                     bT.set(g, "hasDataAttrs", !0)
                 }
                 return d
             }
             return "object" == typeof f ? this.each(function() { bc.set(this, f) }) : ad(this, function(a) {
                 var i;
                 if (g && void 0 === a) { return void 0 !== (i = bc.get(g, f)) ? i : void 0 !== (i = aJ(g, f)) ? i : void 0 }
                 this.each(function() { bc.set(this, f, a) })
             }, null, c, 1 < arguments.length, null, !0)
         },
         removeData: function(a) { return this.each(function() { bc.remove(this, a) }) }
     }), bi.extend({
         queue: function(a, d, b) { var c; if (a) { return d = (d || "fx") + "queue", c = bT.get(a, d), b && (!c || Array.isArray(b) ? c = bT.access(a, d, bi.makeArray(b)) : c.push(b)), c || [] } },
         dequeue: function(a, g) {
             g = g || "fx";
             var c = bi.queue(a, g),
                 f = c.length,
                 b = c.shift(),
                 d = bi._queueHooks(a, g);
             "inprogress" === b && (b = c.shift(), f--), b && ("fx" === g && c.unshift("inprogress"), delete d.stop, b.call(a, function() { bi.dequeue(a, g) }, d)), !f && d && d.empty.fire()
         },
         _queueHooks: function(a, c) { var b = c + "queueHooks"; return bT.get(a, b) || bT.access(a, b, { empty: bi.Callbacks("once memory").add(function() { bT.remove(a, [c + "queue", b]) }) }) }
     }), bi.fn.extend({
         queue: function(c, b) {
             var a = 2;
             return "string" != typeof c && (b = c, c = "fx", a--), arguments.length < a ? bi.queue(this[0], c) : void 0 === b ? this : this.each(function() {
                 var d = bi.queue(this, c, b);
                 bi._queueHooks(this, c), "fx" === c && "inprogress" !== d[0] && bi.dequeue(this, c)
             })
         },
         dequeue: function(a) { return this.each(function() { bi.dequeue(this, a) }) },
         clearQueue: function(a) { return this.queue(a || "fx", []) },
         promise: function(c, k) {
             var f, h = 1,
                 d = bi.Deferred(),
                 g = this,
                 b = this.length,
                 j = function() {--h || d.resolveWith(g, [g]) };
             "string" != typeof c && (k = c, c = void 0), c = c || "fx";
             while (b--) {
                 (f = bT.get(g[b], c + "queueHooks")) && f.empty && (h++, f.empty.add(j))
             }
             return j(), d.promise(k)
         }
     });
     var cc = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
         bC = new RegExp("^(?:([+-])=|)(" + cc + ")([a-z%]*)$", "i"),
         b0 = ["Top", "Right", "Bottom", "Left"],
         a7 = aI.documentElement,
         bI = function(a) { return bi.contains(a.ownerDocument, a) },
         aj = { composed: !0 };
     a7.getRootNode && (bI = function(a) { return bi.contains(a.ownerDocument, a) || a.getRootNode(aj) === a.ownerDocument });
     var b6 = function(a, b) { return "none" === (a = b || a).style.display || "" === a.style.display && bI(a) && "none" === bi.css(a, "display") },
         cj = function(c, j, f, h) { var d, g, b = {}; for (g in j) { b[g] = c.style[g], c.style[g] = j[g] } for (g in d = f.apply(c, h || []), j) { c.style[g] = b[g] } return d };

     function bp(f, q, j, m) {
         var g, k, b = 20,
             p = m ? function() { return m.cur() } : function() { return bi.css(f, q, "") },
             v = p(),
             h = j && j[3] || (bi.cssNumber[q] ? "" : "px"),
             d = f.nodeType && (bi.cssNumber[q] || "px" !== h && +v) && bC.exec(bi.css(f, q));
         if (d && d[3] !== h) {
             v /= 2, h = h || d[3], d = +v || 1;
             while (b--) { bi.style(f, q, d + h), (1 - k) * (1 - (k = p() / v || 0.5)) <= 0 && (b = 0), d /= k }
             d *= 2, bi.style(f, q, d + h), j = j || []
         }
         return j && (d = +d || +v || 0, g = j[1] ? d + (j[1] + 1) * j[2] : +j[2], m && (m.unit = h, m.start = d, m.end = g)), g
     }
     var ax = {};

     function aP(g, w) {
         for (var m, q, j, p, b, v, x, k = [], d = 0, h = g.length; d < h; d++) {
             (q = g[d]).style && (m = q.style.display, w ? ("none" === m && (k[d] = bT.get(q, "display") || null, k[d] || (q.style.display = "")), "" === q.style.display && b6(q) && (k[d] = (x = b = p = void 0, b = (j = q).ownerDocument, v = j.nodeName, (x = ax[v]) || (p = b.body.appendChild(b.createElement(v)), x = bi.css(p, "display"), p.parentNode.removeChild(p), "none" === x && (x = "block"), ax[v] = x)))) : "none" !== m && (k[d] = "none", bT.set(q, "display", m)))
         }
         for (d = 0; d < h; d++) { null != k[d] && (g[d].style.display = k[d]) }
         return g
     }
     bi.fn.extend({ show: function() { return aP(this, !0) }, hide: function() { return aP(this) }, toggle: function(a) { return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() { b6(this) ? bi(this).show() : bi(this).hide() }) } });
     var bO = /^(?:checkbox|radio)$/i,
         aD = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
         a1 = /^$|^module$|\/(?:java|ecma)script/i,
         aV = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };

     function cp(a, c) { var b; return b = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(c || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(c || "*") : [], void 0 === c || c && ai(a, c) ? bi.merge([a], b) : b }

     function cI(a, d) { for (var b = 0, c = a.length; b < c; b++) { bT.set(a[b], "globalEval", !d || bT.get(d[b], "globalEval")) } }
     aV.optgroup = aV.option, aV.tbody = aV.tfoot = aV.colgroup = aV.caption = aV.thead, aV.th = aV.td;
     var bw, cC, ap = /<|&#?\w+;/;

     function cw(k, C, x, A, v) {
         for (var y, b, B, D, w, g, m = C.createDocumentFragment(), z = [], j = 0, q = k.length; j < q; j++) {
             if ((y = k[j]) || 0 === y) {
                 if ("object" === cu(y)) { bi.merge(z, y.nodeType ? [y] : y) } else {
                     if (ap.test(y)) {
                         b = b || m.appendChild(C.createElement("div")), B = (aD.exec(y) || ["", ""])[1].toLowerCase(), D = aV[B] || aV._default, b.innerHTML = D[1] + bi.htmlPrefilter(y) + D[2], g = D[0];
                         while (g--) { b = b.lastChild }
                         bi.merge(z, b.childNodes), (b = m.firstChild).textContent = ""
                     } else { z.push(C.createTextNode(y)) }
                 }
             }
         }
         m.textContent = "", j = 0;
         while (y = z[j++]) { if (A && -1 < bi.inArray(y, A)) { v && v.push(y) } else { if (w = bI(y), b = cp(m.appendChild(y), "script"), w && cI(b), x) { g = 0; while (y = b[g++]) { a1.test(y.type || "") && x.push(y) } } } }
         return m
     }
     bw = aI.createDocumentFragment().appendChild(aI.createElement("div")), (cC = aI.createElement("input")).setAttribute("type", "radio"), cC.setAttribute("checked", "checked"), cC.setAttribute("name", "t"), bw.appendChild(cC), cG.checkClone = bw.cloneNode(!0).cloneNode(!0).lastChild.checked, bw.innerHTML = "<textarea>x</textarea>", cG.noCloneChecked = !!bw.cloneNode(!0).lastChild.defaultValue;
     var cd = /^key/,
         ay = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
         aK = /^([^.]*)(?:\.(.+)|)/;

     function bk() { return !0 }

     function b7() { return !1 }

     function bD(a, b) { return a === function() { try { return aI.activeElement } catch (c) {} }() == ("focus" === b) }

     function ak(c, k, f, h, d, g) { var b, j; if ("object" == typeof k) { for (j in "string" != typeof f && (h = h || f, f = void 0), k) { ak(c, j, f, h, k[j], g) } return c } if (null == h && null == d ? (d = f, h = f = void 0) : null == d && ("string" == typeof f ? (d = h, h = void 0) : (d = h, h = f, f = void 0)), !1 === d) { d = b7 } else { if (!d) { return c } } return 1 === g && (b = d, (d = function(a) { return bi().off(a), b.apply(this, arguments) }).guid = b.guid || (b.guid = bi.guid++)), c.each(function() { bi.event.add(this, k, d, h, f) }) }

     function aE(a, b, c) {
         c ? (bT.set(a, b, !1), bi.event.add(a, b, {
             namespace: !1,
             handler: function(d) {
                 var h, f, g = bT.get(this, b);
                 if (1 & d.isTrigger && this[b]) {
                     if (g.length) {
                         (bi.event.special[b] || {}).delegateType && d.stopPropagation()
                     } else { if (g = b4.call(arguments), bT.set(this, b, g), h = c(this, b), this[b](), g !== (f = bT.get(this, b)) || h ? bT.set(this, b, !1) : f = {}, g !== f) { return d.stopImmediatePropagation(), d.preventDefault(), f.value } }
                 } else { g.length && (bT.set(this, b, { value: bi.event.trigger(bi.extend(g[0], bi.Event.prototype), g.slice(1), this) }), d.stopImmediatePropagation()) }
             }
         })) : void 0 === bT.get(a, b) && bi.event.add(a, b, bk)
     }
     bi.event = {
         global: {},
         add: function(F, m, A, D, y) { var B, b, E, G, z, j, q, C, k, x, w, H = bT.get(F); if (H) { A.handler && (A = (B = A).handler, y = B.selector), y && bi.find.matchesSelector(a7, y), A.guid || (A.guid = bi.guid++), (G = H.events) || (G = H.events = {}), (b = H.handle) || (b = H.handle = function(a) { return "undefined" != typeof bi && bi.event.triggered !== a.type ? bi.event.dispatch.apply(F, arguments) : void 0 }), z = (m = (m || "").match(bZ) || [""]).length; while (z--) { k = w = (E = aK.exec(m[z]) || [])[1], x = (E[2] || "").split(".").sort(), k && (q = bi.event.special[k] || {}, k = (y ? q.delegateType : q.bindType) || k, q = bi.event.special[k] || {}, j = bi.extend({ type: k, origType: w, data: D, handler: A, guid: A.guid, selector: y, needsContext: y && bi.expr.match.needsContext.test(y), namespace: x.join(".") }, B), (C = G[k]) || ((C = G[k] = []).delegateCount = 0, q.setup && !1 !== q.setup.call(F, D, x, b) || F.addEventListener && F.addEventListener(k, b)), q.add && (q.add.call(F, j), j.handler.guid || (j.handler.guid = A.guid)), y ? C.splice(C.delegateCount++, 0, j) : C.push(j), bi.event.global[k] = !0) } } },
         remove: function(m, F, A, D, y) {
             var B, b, E, G, z, j, q, C, k, x, w, H = bT.hasData(m) && bT.get(m);
             if (H && (G = H.events)) {
                 z = (F = (F || "").match(bZ) || [""]).length;
                 while (z--) {
                     if (k = w = (E = aK.exec(F[z]) || [])[1], x = (E[2] || "").split(".").sort(), k) {
                         q = bi.event.special[k] || {}, C = G[k = (D ? q.delegateType : q.bindType) || k] || [], E = E[2] && new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)"), b = B = C.length;
                         while (B--) { j = C[B], !y && w !== j.origType || A && A.guid !== j.guid || E && !E.test(j.namespace) || D && D !== j.selector && ("**" !== D || !j.selector) || (C.splice(B, 1), j.selector && C.delegateCount--, q.remove && q.remove.call(m, j)) }
                         b && !C.length && (q.teardown && !1 !== q.teardown.call(m, x, H.handle) || bi.removeEvent(m, k, H.handle), delete G[k])
                     } else { for (k in G) { bi.event.remove(m, k + F[z], A, D, !0) } }
                 }
                 bi.isEmptyObject(G) && bT.remove(m, "handle events")
             }
         },
         dispatch: function(f) {
             var q, j, m, g, k, b, p = bi.event.fix(f),
                 v = new Array(arguments.length),
                 h = (bT.get(this, "events") || {})[p.type] || [],
                 d = bi.event.special[p.type] || {};
             for (v[0] = p, q = 1; q < arguments.length; q++) { v[q] = arguments[q] }
             if (p.delegateTarget = this, !d.preDispatch || !1 !== d.preDispatch.call(this, p)) { b = bi.event.handlers.call(this, p, h), q = 0; while ((g = b[q++]) && !p.isPropagationStopped()) { p.currentTarget = g.elem, j = 0; while ((k = g.handlers[j++]) && !p.isImmediatePropagationStopped()) { p.rnamespace && !1 !== k.namespace && !p.rnamespace.test(k.namespace) || (p.handleObj = k, p.data = k.data, void 0 !== (m = ((bi.event.special[k.origType] || {}).handle || k.handler).apply(g.elem, v)) && !1 === (p.result = m) && (p.preventDefault(), p.stopPropagation())) } } return d.postDispatch && d.postDispatch.call(this, p), p.result }
         },
         handlers: function(c, m) {
             var g, j, d, h, b, k = [],
                 p = m.delegateCount,
                 f = c.target;
             if (p && f.nodeType && !("click" === c.type && 1 <= c.button)) {
                 for (; f !== this; f = f.parentNode || this) {
                     if (1 === f.nodeType && ("click" !== c.type || !0 !== f.disabled)) {
                         for (h = [], b = {}, g = 0; g < p; g++) { void 0 === b[d = (j = m[g]).selector + " "] && (b[d] = j.needsContext ? -1 < bi(d, this).index(f) : bi.find(d, this, null, [f]).length), b[d] && h.push(j) }
                         h.length && k.push({ elem: f, handlers: h })
                     }
                 }
             }
             return f = this, p < m.length && k.push({ elem: f, handlers: m.slice(p) }), k
         },
         addProp: function(b, a) { Object.defineProperty(bi.Event.prototype, b, { enumerable: !0, configurable: !0, get: bu(a) ? function() { if (this.originalEvent) { return a(this.originalEvent) } } : function() { if (this.originalEvent) { return this.originalEvent[b] } }, set: function(c) { Object.defineProperty(this, b, { enumerable: !0, configurable: !0, writable: !0, value: c }) } }) },
         fix: function(a) { return a[bi.expando] ? a : new bi.Event(a) },
         special: { load: { noBubble: !0 }, click: { setup: function(a) { var b = this || a; return bO.test(b.type) && b.click && ai(b, "input") && aE(b, "click", bk), !1 }, trigger: function(a) { var b = this || a; return bO.test(b.type) && b.click && ai(b, "input") && aE(b, "click"), !0 }, _default: function(a) { var b = a.target; return bO.test(b.type) && b.click && ai(b, "input") && bT.get(b, "click") || ai(b, "a") } }, beforeunload: { postDispatch: function(a) { void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result) } } }
     }, bi.removeEvent = function(a, c, b) { a.removeEventListener && a.removeEventListener(c, b) }, bi.Event = function(a, b) {
         if (!(this instanceof bi.Event)) { return new bi.Event(a, b) }
         a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && !1 === a.returnValue ? bk : b7, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a, b && bi.extend(this, b), this.timeStamp = a && a.timeStamp || Date.now(), this[bi.expando] = !0
     }, bi.Event.prototype = {
         constructor: bi.Event,
         isDefaultPrevented: b7,
         isPropagationStopped: b7,
         isImmediatePropagationStopped: b7,
         isSimulated: !1,
         preventDefault: function() {
             var a = this.originalEvent;
             this.isDefaultPrevented = bk, a && !this.isSimulated && a.preventDefault()
         },
         stopPropagation: function() {
             var a = this.originalEvent;
             this.isPropagationStopped = bk, a && !this.isSimulated && a.stopPropagation()
         },
         stopImmediatePropagation: function() {
             var a = this.originalEvent;
             this.isImmediatePropagationStopped = bk, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation()
         }
     }, bi.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, code: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function(a) { var b = a.button; return null == a.which && cd.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && ay.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which } }, bi.event.addProp), bi.each({ focus: "focusin", blur: "focusout" }, function(a, b) { bi.event.special[a] = { setup: function() { return aE(this, a, bD), !1 }, trigger: function() { return aE(this, a), !0 }, delegateType: b } }), bi.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(a, b) {
         bi.event.special[a] = {
             delegateType: b,
             bindType: b,
             handle: function(c) {
                 var g, d = c.relatedTarget,
                     f = c.handleObj;
                 return d && (d === this || bi.contains(this, d)) || (c.type = f.origType, g = f.handler.apply(this, arguments), c.type = b), g
             }
         }
     }), bi.fn.extend({ on: function(a, d, b, c) { return ak(this, a, d, b, c) }, one: function(a, d, b, c) { return ak(this, a, d, b, c, 1) }, off: function(a, f, c) { var d, b; if (a && a.preventDefault && a.handleObj) { return d = a.handleObj, bi(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this } if ("object" == typeof a) { for (b in a) { this.off(b, f, a[b]) } return this } return !1 !== f && "function" != typeof f || (c = f, f = void 0), !1 === c && (c = b7), this.each(function() { bi.event.remove(this, a, c, f) }) } });
     var bd = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
         bU = /<script|<style|<link/i,
         bq = /checked\s*(?:[^=]|=\s*.checked.)/i,
         a2 = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

     function bJ(a, b) { return ai(a, "table") && ai(11 !== b.nodeType ? b : b.firstChild, "tr") && bi(a).children("tbody")[0] || a }

     function bP(a) { return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a }

     function b1(a) { return "true/" === (a.type || "").slice(0, 5) ? a.type = a.type.slice(5) : a.removeAttribute("type"), a }

     function bx(c, m) {
         var g, j, d, h, b, k, p, f;
         if (1 === m.nodeType) {
             if (bT.hasData(c) && (h = bT.access(c), b = bT.set(m, h), f = h.events)) { for (d in delete b.handle, b.events = {}, f) { for (g = 0, j = f[d].length; g < j; g++) { bi.event.add(m, d, f[d][g]) } } }
             bc.hasData(c) && (k = bc.access(c), p = bi.extend({}, k), bc.set(m, p))
         }
     }

     function a8(x, A, v, y) {
         A = aT.apply([], A);
         var k, C, b, B, D, w, g = 0,
             m = x.length,
             z = m - 1,
             j = A[0],
             q = bu(j);
         if (q || 1 < m && "string" == typeof j && !cG.checkClone && bq.test(j)) {
             return x.each(function(a) {
                 var c = x.eq(a);
                 q && (A[0] = j.call(this, a, c.html())), a8(c, A, v, y)
             })
         }
         if (m && (C = (k = cw(A, x[0].ownerDocument, !1, x, y)).firstChild, 1 === k.childNodes.length && (k = C), C || y)) { for (B = (b = bi.map(cp(k, "script"), bP)).length; g < m; g++) { D = k, g !== z && (D = bi.clone(D, !0, !0), B && bi.merge(b, cp(D, "script"))), v.call(x[g], D, g) } if (B) { for (w = b[b.length - 1].ownerDocument, bi.map(b, b1), g = 0; g < B; g++) { D = b[g], a1.test(D.type || "") && !bT.access(D, "globalEval") && bi.contains(w, D) && (D.src && "module" !== (D.type || "").toLowerCase() ? bi._evalUrl && !D.noModule && bi._evalUrl(D.src, { nonce: D.nonce || D.getAttribute("nonce") }) : an(D.textContent.replace(a2, ""), D, w)) } } }
         return x
     }

     function cx(a, g, c) { for (var f, b = g ? bi.filter(g, a) : a, d = 0; null != (f = b[d]); d++) { c || 1 !== f.nodeType || bi.cleanData(cp(f)), f.parentNode && (c && bI(f) && cI(cp(f, "script")), f.parentNode.removeChild(f)) } return a }
     bi.extend({
         htmlPrefilter: function(a) { return a.replace(bd, "<$1></$2>") },
         clone: function(g, w, m) {
             var q, j, p, b, v, x, k, d = g.cloneNode(!0),
                 h = bI(g);
             if (!(cG.noCloneChecked || 1 !== g.nodeType && 11 !== g.nodeType || bi.isXMLDoc(g))) { for (b = cp(d), q = 0, j = (p = cp(g)).length; q < j; q++) { v = p[q], x = b[q], void 0, "input" === (k = x.nodeName.toLowerCase()) && bO.test(v.type) ? x.checked = v.checked : "input" !== k && "textarea" !== k || (x.defaultValue = v.defaultValue) } }
             if (w) { if (m) { for (p = p || cp(g), b = b || cp(d), q = 0, j = p.length; q < j; q++) { bx(p[q], b[q]) } } else { bx(g, d) } }
             return 0 < (b = cp(d, "script")).length && cI(b, !h && cp(g, "script")), d
         },
         cleanData: function(a) {
             for (var g, c, f, b = bi.event.special, d = 0; void 0 !== (c = a[d]); d++) {
                 if (aU(c)) {
                     if (g = c[bT.expando]) {
                         if (g.events) { for (f in g.events) { b[f] ? bi.event.remove(c, f) : bi.removeEvent(c, f, g.handle) } }
                         c[bT.expando] = void 0
                     }
                     c[bc.expando] && (c[bc.expando] = void 0)
                 }
             }
         }
     }), bi.fn.extend({
         detach: function(a) { return cx(this, a, !0) },
         remove: function(a) { return cx(this, a) },
         text: function(a) { return ad(this, function(b) { return void 0 === b ? bi.text(this) : this.empty().each(function() { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = b) }) }, null, a, arguments.length) },
         append: function() { return a8(this, arguments, function(a) { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || bJ(this, a).appendChild(a) }) },
         prepend: function() {
             return a8(this, arguments, function(a) {
                 if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                     var b = bJ(this, a);
                     b.insertBefore(a, b.firstChild)
                 }
             })
         },
         before: function() { return a8(this, arguments, function(a) { this.parentNode && this.parentNode.insertBefore(a, this) }) },
         after: function() { return a8(this, arguments, function(a) { this.parentNode && this.parentNode.insertBefore(a, this.nextSibling) }) },
         empty: function() { for (var a, b = 0; null != (a = this[b]); b++) { 1 === a.nodeType && (bi.cleanData(cp(a, !1)), a.textContent = "") } return this },
         clone: function(a, b) { return a = null != a && a, b = null == b ? a : b, this.map(function() { return bi.clone(this, a, b) }) },
         html: function(a) {
             return ad(this, function(b) {
                 var f = this[0] || {},
                     c = 0,
                     d = this.length;
                 if (void 0 === b && 1 === f.nodeType) { return f.innerHTML }
                 if ("string" == typeof b && !bU.test(b) && !aV[(aD.exec(b) || ["", ""])[1].toLowerCase()]) {
                     b = bi.htmlPrefilter(b);
                     try {
                         for (; c < d; c++) { 1 === (f = this[c] || {}).nodeType && (bi.cleanData(cp(f, !1)), f.innerHTML = b) }
                         f = 0
                     } catch (b) {}
                 }
                 f && this.empty().append(b)
             }, null, a, arguments.length)
         },
         replaceWith: function() {
             var a = [];
             return a8(this, arguments, function(b) {
                 var c = this.parentNode;
                 bi.inArray(this, a) < 0 && (bi.cleanData(cp(this)), c && c.replaceChild(b, this))
             }, a)
         }
     }), bi.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(c, b) { bi.fn[c] = function(a) { for (var j, f = [], h = bi(a), d = h.length - 1, g = 0; g <= d; g++) { j = g === d ? this : this.clone(!0), bi(h[g])[b](j), ch.apply(f, j.get()) } return this.pushStack(f) } });
     var ab = new RegExp("^(" + cc + ")(?!px)[a-z%]+$", "i"),
         aQ = function(a) { var b = a.ownerDocument.defaultView; return b && b.opener || (b = aw), b.getComputedStyle(a) },
         aq = new RegExp(b0.join("|"), "i");

     function af(c, k, f) { var h, d, g, b, j = c.style; return (f = f || aQ(c)) && ("" !== (b = f.getPropertyValue(k) || f[k]) || bI(c) || (b = bi.style(c, k)), !cG.pixelBoxStyles() && ab.test(b) && aq.test(k) && (h = j.width, d = j.minWidth, g = j.maxWidth, j.minWidth = j.maxWidth = j.width = b, b = f.width, j.width = h, j.minWidth = d, j.maxWidth = g)), void 0 !== b ? b + "" : b }

     function cO(a, b) {
         return {
             get: function() {
                 if (!a()) { return (this.get = b).apply(this, arguments) }
                 delete this.get
             }
         }
     }! function() {
         function c() {
             if (l) {
                 j.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", a7.appendChild(j).appendChild(l);
                 var a = aw.getComputedStyle(l);
                 f = "1%" !== a.top, b = 12 === k(a.marginLeft), l.style.right = "60%", g = 36 === k(a.right), h = 36 === k(a.width), l.style.position = "absolute", d = 12 === k(l.offsetWidth / 3), a7.removeChild(j), l = null
             }
         }

         function k(a) { return Math.round(parseFloat(a)) }
         var f, h, d, g, b, j = aI.createElement("div"),
             l = aI.createElement("div");
         l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", cG.clearCloneStyle = "content-box" === l.style.backgroundClip, bi.extend(cG, { boxSizingReliable: function() { return c(), h }, pixelBoxStyles: function() { return c(), g }, pixelPosition: function() { return c(), f }, reliableMarginLeft: function() { return c(), b }, scrollboxSize: function() { return c(), d } }))
     }();
     var ck = ["Webkit", "Moz", "ms"],
         cD = aI.createElement("div").style,
         cq = {};

     function aW(a) {
         var b = bi.cssProps[a] || cq[a];
         return b || (a in cD ? a : cq[a] = function(c) {
             var f = c[0].toUpperCase() + c.slice(1),
                 d = ck.length;
             while (d--) { if ((c = ck[d] + f) in cD) { return c } }
         }(a) || a)
     }
     var cJ = /^(none|table(?!-c[ea]).+)/,
         bV = /^--/,
         bf = { position: "absolute", visibility: "hidden", display: "block" },
         bl = { letterSpacing: "0", fontWeight: "400" };

     function cP(a, d, b) { var c = bC.exec(d); return c ? Math.max(0, c[2] - (b || 0)) + (c[3] || "px") : d }

     function aL(c, k, f, h, d, g) {
         var b = "width" === k ? 1 : 0,
             j = 0,
             l = 0;
         if (f === (h ? "border" : "content")) { return 0 }
         for (; b < 4; b += 2) { "margin" === f && (l += bi.css(c, f + b0[b], !0, d)), h ? ("content" === f && (l -= bi.css(c, "padding" + b0[b], !0, d)), "margin" !== f && (l -= bi.css(c, "border" + b0[b] + "Width", !0, d))) : (l += bi.css(c, "padding" + b0[b], !0, d), "padding" !== f ? l += bi.css(c, "border" + b0[b] + "Width", !0, d) : j += bi.css(c, "border" + b0[b] + "Width", !0, d)) }
         return !h && 0 <= g && (l += Math.max(0, Math.ceil(c["offset" + k[0].toUpperCase() + k.slice(1)] - g - l - j - 0.5)) || 0), l
     }

     function cf(c, k, f) {
         var h = aQ(c),
             d = (!cG.boxSizingReliable() || f) && "border-box" === bi.css(c, "boxSizing", !1, h),
             g = d,
             b = af(c, k, h),
             j = "offset" + k[0].toUpperCase() + k.slice(1);
         if (ab.test(b)) {
             if (!f) { return b }
             b = "auto"
         }
         return (!cG.boxSizingReliable() && d || "auto" === b || !parseFloat(b) && "inline" === bi.css(c, "display", !1, h)) && c.getClientRects().length && (d = "border-box" === bi.css(c, "boxSizing", !1, h), (g = j in c) && (b = c[j])), (b = parseFloat(b) || 0) + aL(c, k, f || (d ? "border" : "content"), g, h, b) + "px"
     }

     function bE(a, f, c, d, b) { return new bE.prototype.init(a, f, c, d, b) }
     bi.extend({
         cssHooks: { opacity: { get: function(a, c) { if (c) { var b = af(a, "opacity"); return "" === b ? "1" : b } } } },
         cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, gridArea: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnStart: !0, gridRow: !0, gridRowEnd: !0, gridRowStart: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
         cssProps: {},
         style: function(c, m, g, j) {
             if (c && 3 !== c.nodeType && 8 !== c.nodeType && c.style) {
                 var d, h, b, k = co(m),
                     p = bV.test(m),
                     f = c.style;
                 if (p || (m = aW(k)), b = bi.cssHooks[m] || bi.cssHooks[k], void 0 === g) { return b && "get" in b && void 0 !== (d = b.get(c, !1, j)) ? d : f[m] }
                 "string" === (h = typeof g) && (d = bC.exec(g)) && d[1] && (g = bp(c, m, d), h = "number"), null != g && g == g && ("number" !== h || p || (g += d && d[3] || (bi.cssNumber[k] ? "" : "px")), cG.clearCloneStyle || "" !== g || 0 !== m.indexOf("background") || (f[m] = "inherit"), b && "set" in b && void 0 === (g = b.set(c, g, j)) || (p ? f.setProperty(m, g) : f[m] = g))
             }
         },
         css: function(c, k, f, h) { var d, g, b, j = co(k); return bV.test(k) || (k = aW(j)), (b = bi.cssHooks[k] || bi.cssHooks[j]) && "get" in b && (d = b.get(c, !0, f)), void 0 === d && (d = af(c, k, h)), "normal" === d && k in bl && (d = bl[k]), "" === f || f ? (g = parseFloat(d), !0 === f || isFinite(g) ? g || 0 : d) : d }
     }), bi.each(["height", "width"], function(a, b) {
         bi.cssHooks[b] = {
             get: function(c, f, d) { if (f) { return !cJ.test(bi.css(c, "display")) || c.getClientRects().length && c.getBoundingClientRect().width ? cf(c, b, d) : cj(c, bf, function() { return cf(c, b, d) }) } },
             set: function(d, l, g) {
                 var j, f = aQ(d),
                     h = !cG.scrollboxSize() && "absolute" === f.position,
                     c = (h || g) && "border-box" === bi.css(d, "boxSizing", !1, f),
                     k = g ? aL(d, b, g, c, f) : 0;
                 return c && h && (k -= Math.ceil(d["offset" + b[0].toUpperCase() + b.slice(1)] - parseFloat(f[b]) - aL(d, b, "border", !1, f) - 0.5)), k && (j = bC.exec(l)) && "px" !== (j[3] || "px") && (d.style[b] = l, l = bi.css(d, b)), cP(0, l, k)
             }
         }
     }), bi.cssHooks.marginLeft = cO(cG.reliableMarginLeft, function(a, b) { if (b) { return (parseFloat(af(a, "marginLeft")) || a.getBoundingClientRect().left - cj(a, { marginLeft: 0 }, function() { return a.getBoundingClientRect().left })) + "px" } }), bi.each({ margin: "", padding: "", border: "Width" }, function(a, b) { bi.cssHooks[a + b] = { expand: function(c) { for (var g = 0, d = {}, f = "string" == typeof c ? c.split(" ") : [c]; g < 4; g++) { d[a + b0[g] + b] = f[g] || f[g - 2] || f[0] } return d } }, "margin" !== a && (bi.cssHooks[a + b].set = cP) }), bi.fn.extend({
         css: function(a, b) {
             return ad(this, function(d, k, g) {
                 var j, f, h = {},
                     c = 0;
                 if (Array.isArray(k)) { for (j = aQ(d), f = k.length; c < f; c++) { h[k[c]] = bi.css(d, k[c], !1, j) } return h }
                 return void 0 !== g ? bi.style(d, k, g) : bi.css(d, k)
             }, a, b, 1 < arguments.length)
         }
     }), ((bi.Tween = bE).prototype = { constructor: bE, init: function(a, g, c, f, b, d) { this.elem = a, this.prop = c, this.easing = b || bi.easing._default, this.options = g, this.start = this.now = this.cur(), this.end = f, this.unit = d || (bi.cssNumber[c] ? "" : "px") }, cur: function() { var a = bE.propHooks[this.prop]; return a && a.get ? a.get(this) : bE.propHooks._default.get(this) }, run: function(a) { var c, b = bE.propHooks[this.prop]; return this.options.duration ? this.pos = c = bi.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = c = a, this.now = (this.end - this.start) * c + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), b && b.set ? b.set(this) : bE.propHooks._default.set(this), this } }).init.prototype = bE.prototype, (bE.propHooks = { _default: { get: function(a) { var b; return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = bi.css(a.elem, a.prop, "")) && "auto" !== b ? b : 0 }, set: function(a) { bi.fx.step[a.prop] ? bi.fx.step[a.prop](a) : 1 !== a.elem.nodeType || !bi.cssHooks[a.prop] && null == a.elem.style[aW(a.prop)] ? a.elem[a.prop] = a.now : bi.style(a.elem, a.prop, a.now + a.unit) } } }).scrollTop = bE.propHooks.scrollLeft = { set: function(a) { a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now) } }, bi.easing = { linear: function(a) { return a }, swing: function(a) { return 0.5 - Math.cos(a * Math.PI) / 2 }, _default: "swing" }, bi.fx = bE.prototype.init, bi.fx.step = {};
     var b2, a9, bK, al, b8 = /^(?:toggle|show|hide)$/,
         cl = /queueHooks$/;

     function br() { a9 && (!1 === aI.hidden && aw.requestAnimationFrame ? aw.requestAnimationFrame(br) : aw.setTimeout(br, bi.fx.interval), bi.fx.tick()) }

     function az() { return aw.setTimeout(function() { b2 = void 0 }), b2 = Date.now() }

     function aR(a, f) {
         var c, d = 0,
             b = { height: a };
         for (f = f ? 1 : 0; d < 4; d += 2 - f) { b["margin" + (c = b0[d])] = b["padding" + c] = a }
         return f && (b.opacity = b.width = a), b
     }

     function bQ(c, j, f) { for (var h, d = (aF.tweeners[j] || []).concat(aF.tweeners["*"]), g = 0, b = d.length; g < b; g++) { if (h = d[g].call(f, j, c)) { return h } } }

     function aF(k, f, q) {
         var j, b, m = 0,
             g = aF.prefilters.length,
             p = bi.Deferred().always(function() { delete v.elem }),
             v = function() { if (b) { return !1 } for (var a = b2 || az(), s = Math.max(0, h.startTime + h.duration - a), l = 1 - (s / h.duration || 0), o = 0, c = h.tweens.length; o < c; o++) { h.tweens[o].run(l) } return p.notifyWith(k, [h, l, s]), l < 1 && c ? s : (c || p.notifyWith(k, [h, 1, 0]), p.resolveWith(k, [h]), !1) },
             h = p.promise({
                 elem: k,
                 props: bi.extend({}, f),
                 opts: bi.extend(!0, { specialEasing: {}, easing: bi.easing._default }, q),
                 originalProperties: f,
                 originalOptions: q,
                 startTime: b2 || az(),
                 duration: q.duration,
                 tweens: [],
                 createTween: function(a, i) { var c = bi.Tween(k, h.opts, a, i, h.opts.specialEasing[a] || h.opts.easing); return h.tweens.push(c), c },
                 stop: function(a) {
                     var i = 0,
                         c = a ? h.tweens.length : 0;
                     if (b) { return this }
                     for (b = !0; i < c; i++) { h.tweens[i].run(1) }
                     return a ? (p.notifyWith(k, [h, 1, 0]), p.resolveWith(k, [h, a])) : p.rejectWith(k, [h, a]), this
                 }
             }),
             d = h.props;
         for (! function(l, y) { var u, x, s, w, c; for (u in l) { if (s = y[x = co(u)], w = l[u], Array.isArray(w) && (s = w[1], w = l[u] = w[0]), u !== x && (l[x] = w, delete l[u]), (c = bi.cssHooks[x]) && "expand" in c) { for (u in w = c.expand(w), delete l[x], w) { u in l || (l[u] = w[u], y[u] = s) } } else { y[x] = s } } }(d, h.opts.specialEasing); m < g; m++) { if (j = aF.prefilters[m].call(h, k, d, h.opts)) { return bu(j.stop) && (bi._queueHooks(h.elem, h.opts.queue).stop = j.stop.bind(j)), j } }
         return bi.map(d, bQ, h), bu(h.opts.start) && h.opts.start.call(k, h), h.progress(h.opts.progress).done(h.opts.done, h.opts.complete).fail(h.opts.fail).always(h.opts.always), bi.fx.timer(bi.extend(v, { elem: k, anim: h, queue: h.opts.queue })), h
     }
     bi.Animation = bi.extend(aF, {
         tweeners: { "*": [function(a, c) { var b = this.createTween(a, c); return bp(b.elem, a, bC.exec(c), b), b }] },
         tweener: function(a, f) { bu(a) ? (f = a, a = ["*"]) : a = a.match(bZ); for (var c, d = 0, b = a.length; d < b; d++) { c = a[d], aF.tweeners[c] = aF.tweeners[c] || [], aF.tweeners[c].unshift(f) } },
         prefilters: [function(m, F, A) {
             var D, y, B, b, E, G, z, j, q = "width" in F || "height" in F,
                 C = this,
                 k = {},
                 x = m.style,
                 w = m.nodeType && b6(m),
                 H = bT.get(m, "fxshow");
             for (D in A.queue || (null == (b = bi._queueHooks(m, "fx")).unqueued && (b.unqueued = 0, E = b.empty.fire, b.empty.fire = function() { b.unqueued || E() }), b.unqueued++, C.always(function() { C.always(function() { b.unqueued--, bi.queue(m, "fx").length || b.empty.fire() }) })), F) {
                 if (y = F[D], b8.test(y)) {
                     if (delete F[D], B = B || "toggle" === y, y === (w ? "hide" : "show")) {
                         if ("show" !== y || !H || void 0 === H[D]) { continue }
                         w = !0
                     }
                     k[D] = H && H[D] || bi.style(m, D)
                 }
             }
             if ((G = !bi.isEmptyObject(F)) || !bi.isEmptyObject(k)) { for (D in q && 1 === m.nodeType && (A.overflow = [x.overflow, x.overflowX, x.overflowY], null == (z = H && H.display) && (z = bT.get(m, "display")), "none" === (j = bi.css(m, "display")) && (z ? j = z : (aP([m], !0), z = m.style.display || z, j = bi.css(m, "display"), aP([m]))), ("inline" === j || "inline-block" === j && null != z) && "none" === bi.css(m, "float") && (G || (C.done(function() { x.display = z }), null == z && (j = x.display, z = "none" === j ? "" : j)), x.display = "inline-block")), A.overflow && (x.overflow = "hidden", C.always(function() { x.overflow = A.overflow[0], x.overflowX = A.overflow[1], x.overflowY = A.overflow[2] })), G = !1, k) { G || (H ? "hidden" in H && (w = H.hidden) : H = bT.access(m, "fxshow", { display: z }), B && (H.hidden = !w), w && aP([m], !0), C.done(function() { for (D in w || aP([m]), bT.remove(m, "fxshow"), k) { bi.style(m, D, k[D]) } })), G = bQ(w ? H[D] : 0, D, C), D in H || (H[D] = G.start, w && (G.end = G.start, G.start = 0)) } }
         }],
         prefilter: function(a, b) { b ? aF.prefilters.unshift(a) : aF.prefilters.push(a) }
     }), bi.speed = function(a, d, b) { var c = a && "object" == typeof a ? bi.extend({}, a) : { complete: b || !b && d || bu(a) && a, duration: a, easing: b && d || d && !bu(d) && d }; return bi.fx.off ? c.duration = 0 : "number" != typeof c.duration && (c.duration in bi.fx.speeds ? c.duration = bi.fx.speeds[c.duration] : c.duration = bi.fx.speeds._default), null != c.queue && !0 !== c.queue || (c.queue = "fx"), c.old = c.complete, c.complete = function() { bu(c.old) && c.old.call(this), c.queue && bi.dequeue(this, c.queue) }, c }, bi.fn.extend({
         fadeTo: function(a, d, b, c) { return this.filter(b6).css("opacity", 0).show().end().animate({ opacity: d }, a, b, c) },
         animate: function(j, c, f, h) {
             var d = bi.isEmptyObject(j),
                 g = bi.speed(c, f, h),
                 b = function() {
                     var a = aF(this, bi.extend({}, j), g);
                     (d || bT.get(this, "finish")) && a.stop(!0)
                 };
             return b.finish = b, d || !1 === g.queue ? this.each(b) : this.queue(g.queue, b)
         },
         stop: function(d, c, f) {
             var b = function(a) {
                 var g = a.stop;
                 delete a.stop, g(f)
             };
             return "string" != typeof d && (f = c, c = d, d = void 0), c && !1 !== d && this.queue(d || "fx", []), this.each(function() {
                 var a = !0,
                     i = null != d && d + "queueHooks",
                     g = bi.timers,
                     h = bT.get(this);
                 if (i) { h[i] && h[i].stop && b(h[i]) } else { for (i in h) { h[i] && h[i].stop && cl.test(i) && b(h[i]) } }
                 for (i = g.length; i--;) { g[i].elem !== this || null != d && g[i].queue !== d || (g[i].anim.stop(f), a = !1, g.splice(i, 1)) }!a && f || bi.dequeue(this, d)
             })
         },
         finish: function(b) {
             return !1 !== b && (b = b || "fx"), this.each(function() {
                 var a, h = bT.get(this),
                     d = h[b + "queue"],
                     g = h[b + "queueHooks"],
                     c = bi.timers,
                     f = d ? d.length : 0;
                 for (h.finish = !0, bi.queue(this, b, []), g && g.stop && g.stop.call(this, !0), a = c.length; a--;) { c[a].elem === this && c[a].queue === b && (c[a].anim.stop(!0), c.splice(a, 1)) }
                 for (a = 0; a < f; a++) { d[a] && d[a].finish && d[a].finish.call(this) }
                 delete h.finish
             })
         }
     }), bi.each(["toggle", "show", "hide"], function(a, c) {
         var b = bi.fn[c];
         bi.fn[c] = function(d, g, f) { return null == d || "boolean" == typeof d ? b.apply(this, arguments) : this.animate(aR(c, !0), d, g, f) }
     }), bi.each({ slideDown: aR("show"), slideUp: aR("hide"), slideToggle: aR("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(a, b) { bi.fn[a] = function(c, f, d) { return this.animate(b, c, f, d) } }), bi.timers = [], bi.fx.tick = function() {
         var a, c = 0,
             b = bi.timers;
         for (b2 = Date.now(); c < b.length; c++) {
             (a = b[c])() || b[c] !== a || b.splice(c--, 1)
         }
         b.length || bi.fx.stop(), b2 = void 0
     }, bi.fx.timer = function(a) { bi.timers.push(a), bi.fx.start() }, bi.fx.interval = 13, bi.fx.start = function() { a9 || (a9 = !0, br()) }, bi.fx.stop = function() { a9 = null }, bi.fx.speeds = { slow: 600, fast: 200, _default: 400 }, bi.fn.delay = function(b, a) {
         return b = bi.fx && bi.fx.speeds[b] || b, a = a || "fx", this.queue(a, function(c, f) {
             var d = aw.setTimeout(c, b);
             f.stop = function() { aw.clearTimeout(d) }
         })
     }, bK = aI.createElement("input"), al = aI.createElement("select").appendChild(aI.createElement("option")), bK.type = "checkbox", cG.checkOn = "" !== bK.value, cG.optSelected = al.selected, (bK = aI.createElement("input")).value = "t", bK.type = "radio", cG.radioValue = "t" === bK.value;
     var a3, aX = bi.expr.attrHandle;
     bi.fn.extend({ attr: function(a, b) { return ad(this, bi.attr, a, b, 1 < arguments.length) }, removeAttr: function(a) { return this.each(function() { bi.removeAttr(this, a) }) } }), bi.extend({
         attr: function(a, g, c) { var f, b, d = a.nodeType; if (3 !== d && 8 !== d && 2 !== d) { return "undefined" == typeof a.getAttribute ? bi.prop(a, g, c) : (1 === d && bi.isXMLDoc(a) || (b = bi.attrHooks[g.toLowerCase()] || (bi.expr.match.bool.test(g) ? a3 : void 0)), void 0 !== c ? null === c ? void bi.removeAttr(a, g) : b && "set" in b && void 0 !== (f = b.set(a, c, g)) ? f : (a.setAttribute(g, c + ""), c) : b && "get" in b && null !== (f = b.get(a, g)) ? f : null == (f = bi.find.attr(a, g)) ? void 0 : f) } },
         attrHooks: { type: { set: function(a, c) { if (!cG.radioValue && "radio" === c && ai(a, "input")) { var b = a.value; return a.setAttribute("type", c), b && (a.value = b), c } } } },
         removeAttr: function(a, f) {
             var c, d = 0,
                 b = f && f.match(bZ);
             if (b && 1 === a.nodeType) { while (c = b[d++]) { a.removeAttribute(c) } }
         }
     }), a3 = { set: function(a, c, b) { return !1 === c ? bi.removeAttr(a, b) : a.setAttribute(b, b), b } }, bi.each(bi.expr.match.bool.source.match(/\w+/g), function(c, d) {
         var b = aX[d] || bi.find.attr;
         aX[d] = function(a, k, g) { var j, f, h = k.toLowerCase(); return g || (f = aX[h], aX[h] = j, j = null != b(a, k, g) ? h : null, aX[h] = f), j }
     });
     var cr = /^(?:input|select|textarea|button)$/i,
         cK = /^(?:a|area)$/i;

     function by(a) { return (a.match(bZ) || []).join(" ") }

     function cE(a) { return a.getAttribute && a.getAttribute("class") || "" }

     function ar(a) { return Array.isArray(a) ? a : "string" == typeof a && a.match(bZ) || [] }
     bi.fn.extend({ prop: function(a, b) { return ad(this, bi.prop, a, b, 1 < arguments.length) }, removeProp: function(a) { return this.each(function() { delete this[bi.propFix[a] || a] }) } }), bi.extend({ prop: function(a, g, c) { var f, b, d = a.nodeType; if (3 !== d && 8 !== d && 2 !== d) { return 1 === d && bi.isXMLDoc(a) || (g = bi.propFix[g] || g, b = bi.propHooks[g]), void 0 !== c ? b && "set" in b && void 0 !== (f = b.set(a, c, g)) ? f : a[g] = c : b && "get" in b && null !== (f = b.get(a, g)) ? f : a[g] } }, propHooks: { tabIndex: { get: function(a) { var b = bi.find.attr(a, "tabindex"); return b ? parseInt(b, 10) : cr.test(a.nodeName) || cK.test(a.nodeName) && a.href ? 0 : -1 } } }, propFix: { "for": "htmlFor", "class": "className" } }), cG.optSelected || (bi.propHooks.selected = {
         get: function(a) { var b = a.parentNode; return b && b.parentNode && b.parentNode.selectedIndex, null },
         set: function(a) {
             var b = a.parentNode;
             b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
         }
     }), bi.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { bi.propFix[this.toLowerCase()] = this }), bi.fn.extend({
         addClass: function(k) {
             var c, f, h, d, g, b, j, l = 0;
             if (bu(k)) { return this.each(function(a) { bi(this).addClass(k.call(this, a, cE(this))) }) }
             if ((c = ar(k)).length) {
                 while (f = this[l++]) {
                     if (d = cE(f), h = 1 === f.nodeType && " " + by(d) + " ") {
                         b = 0;
                         while (g = c[b++]) { h.indexOf(" " + g + " ") < 0 && (h += g + " ") }
                         d !== (j = by(h)) && f.setAttribute("class", j)
                     }
                 }
             }
             return this
         },
         removeClass: function(k) {
             var c, f, h, d, g, b, j, l = 0;
             if (bu(k)) { return this.each(function(a) { bi(this).removeClass(k.call(this, a, cE(this))) }) }
             if (!arguments.length) { return this.attr("class", "") }
             if ((c = ar(k)).length) {
                 while (f = this[l++]) {
                     if (d = cE(f), h = 1 === f.nodeType && " " + by(d) + " ") {
                         b = 0;
                         while (g = c[b++]) { while (-1 < h.indexOf(" " + g + " ")) { h = h.replace(" " + g + " ", " ") } }
                         d !== (j = by(h)) && f.setAttribute("class", j)
                     }
                 }
             }
             return this
         },
         toggleClass: function(c, e) {
             var d = typeof c,
                 b = "string" === d || Array.isArray(c);
             return "boolean" == typeof e && b ? e ? this.addClass(c) : this.removeClass(c) : bu(c) ? this.each(function(a) { bi(this).toggleClass(c.call(this, a, cE(this), e), e) }) : this.each(function() { var a, h, f, g; if (b) { h = 0, f = bi(this), g = ar(c); while (a = g[h++]) { f.hasClass(a) ? f.removeClass(a) : f.addClass(a) } } else { void 0 !== c && "boolean" !== d || ((a = cE(this)) && bT.set(this, "__className__", a), this.setAttribute && this.setAttribute("class", a || !1 === c ? "" : bT.get(this, "__className__") || "")) } })
         },
         hasClass: function(a) {
             var d, b, c = 0;
             d = " " + a + " ";
             while (b = this[c++]) { if (1 === b.nodeType && -1 < (" " + by(cE(b)) + " ").indexOf(d)) { return !0 } }
             return !1
         }
     });
     var cy = /\r/g;
     bi.fn.extend({
         val: function(c) {
             var d, a, b, f = this[0];
             return arguments.length ? (b = bu(c), this.each(function(g) {
                 var h;
                 1 === this.nodeType && (null == (h = b ? c.call(this, g, bi(this).val()) : c) ? h = "" : "number" == typeof h ? h += "" : Array.isArray(h) && (h = bi.map(h, function(i) { return null == i ? "" : i + "" })), (d = bi.valHooks[this.type] || bi.valHooks[this.nodeName.toLowerCase()]) && "set" in d && void 0 !== d.set(this, h, "value") || (this.value = h))
             })) : f ? (d = bi.valHooks[f.type] || bi.valHooks[f.nodeName.toLowerCase()]) && "get" in d && void 0 !== (a = d.get(f, "value")) ? a : "string" == typeof(a = f.value) ? a.replace(cy, "") : null == a ? "" : a : void 0
         }
     }), bi.extend({
         valHooks: {
             option: { get: function(a) { var b = bi.find.attr(a, "value"); return null != b ? b : by(bi.text(a)) } },
             select: {
                 get: function(c) {
                     var k, f, h, d = c.options,
                         g = c.selectedIndex,
                         b = "select-one" === c.type,
                         j = b ? null : [],
                         l = b ? g + 1 : d.length;
                     for (h = g < 0 ? l : b ? g : 0; h < l; h++) {
                         if (((f = d[h]).selected || h === g) && !f.disabled && (!f.parentNode.disabled || !ai(f.parentNode, "optgroup"))) {
                             if (k = bi(f).val(), b) { return k }
                             j.push(k)
                         }
                     }
                     return j
                 },
                 set: function(c, j) {
                     var f, h, d = c.options,
                         g = bi.makeArray(j),
                         b = d.length;
                     while (b--) {
                         ((h = d[b]).selected = -1 < bi.inArray(bi.valHooks.option.get(h), g)) && (f = !0)
                     }
                     return f || (c.selectedIndex = -1), g
                 }
             }
         }
     }), bi.each(["radio", "checkbox"], function() { bi.valHooks[this] = { set: function(a, b) { if (Array.isArray(b)) { return a.checked = -1 < bi.inArray(bi(a).val(), b) } } }, cG.checkOn || (bi.valHooks[this].get = function(a) { return null === a.getAttribute("value") ? "on" : a.value }) }), cG.focusin = "onfocusin" in aw;
     var cg = /^(?:focusinfocus|focusoutblur)$/,
         aA = function(a) { a.stopPropagation() };
     bi.extend(bi.event, {
         trigger: function(k, C, x, A) {
             var v, y, b, B, D, w, g, m, z = [x || aI],
                 j = cn.call(k, "type") ? k.type : k,
                 q = cn.call(k, "namespace") ? k.namespace.split(".") : [];
             if (y = m = b = x = x || aI, 3 !== x.nodeType && 8 !== x.nodeType && !cg.test(j + bi.event.triggered) && (-1 < j.indexOf(".") && (j = (q = j.split(".")).shift(), q.sort()), D = j.indexOf(":") < 0 && "on" + j, (k = k[bi.expando] ? k : new bi.Event(j, "object" == typeof k && k)).isTrigger = A ? 2 : 3, k.namespace = q.join("."), k.rnamespace = k.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, k.result = void 0, k.target || (k.target = x), C = null == C ? [k] : bi.makeArray(C, [k]), g = bi.event.special[j] || {}, A || !g.trigger || !1 !== g.trigger.apply(x, C))) {
                 if (!A && !g.noBubble && !cA(x)) {
                     for (B = g.delegateType || j, cg.test(B + j) || (y = y.parentNode); y; y = y.parentNode) { z.push(y), b = y }
                     b === (x.ownerDocument || aI) && z.push(b.defaultView || b.parentWindow || aw)
                 }
                 v = 0;
                 while ((y = z[v++]) && !k.isPropagationStopped()) { m = y, k.type = 1 < v ? B : g.bindType || j, (w = (bT.get(y, "events") || {})[k.type] && bT.get(y, "handle")) && w.apply(y, C), (w = D && y[D]) && w.apply && aU(y) && (k.result = w.apply(y, C), !1 === k.result && k.preventDefault()) }
                 return k.type = j, A || k.isDefaultPrevented() || g._default && !1 !== g._default.apply(z.pop(), C) || !aU(x) || D && bu(x[j]) && !cA(x) && ((b = x[D]) && (x[D] = null), bi.event.triggered = j, k.isPropagationStopped() && m.addEventListener(j, aA), x[j](), k.isPropagationStopped() && m.removeEventListener(j, aA), bi.event.triggered = void 0, b && (x[D] = b)), k.result
             }
         },
         simulate: function(a, d, b) {
             var c = bi.extend(new bi.Event, b, { type: a, isSimulated: !0 });
             bi.event.trigger(c, null, d)
         }
     }), bi.fn.extend({ trigger: function(a, b) { return this.each(function() { bi.event.trigger(a, b, this) }) }, triggerHandler: function(a, c) { var b = this[0]; if (b) { return bi.event.trigger(a, c, b, !0) } } }), cG.focusin || bi.each({ focus: "focusin", blur: "focusout" }, function(b, c) {
         var a = function(d) { bi.event.simulate(c, d.target, bi.event.fix(d)) };
         bi.event.special[c] = {
             setup: function() {
                 var d = this.ownerDocument || this,
                     f = bT.access(d, c);
                 f || d.addEventListener(b, a, !0), bT.access(d, c, (f || 0) + 1)
             },
             teardown: function() {
                 var d = this.ownerDocument || this,
                     f = bT.access(d, c) - 1;
                 f ? bT.access(d, c, f) : (d.removeEventListener(b, a, !0), bT.remove(d, c))
             }
         }
     });
     var aM = aw.location,
         bm = Date.now(),
         b9 = /\?/;
     bi.parseXML = function(a) { var b; if (!a || "string" != typeof a) { return null } try { b = (new aw.DOMParser).parseFromString(a, "text/xml") } catch (a) { b = void 0 } return b && !b.getElementsByTagName("parsererror").length || bi.error("Invalid XML: " + a), b };
     var bF = /\[\]$/,
         am = /\r?\n/g,
         aG = /^(?:submit|button|image|reset|file)$/i,
         bg = /^(?:input|select|textarea|keygen)/i;

     function bW(c, a, d, b) { var f; if (Array.isArray(a)) { bi.each(a, function(g, h) { d || bF.test(c) ? b(c, h) : bW(c + "[" + ("object" == typeof h && null != h ? g : "") + "]", h, d, b) }) } else { if (d || "object" !== cu(a)) { b(c, a) } else { for (f in a) { bW(c + "[" + f + "]", a[f], d, b) } } } }
     bi.param = function(a, f) {
         var c, d = [],
             b = function(g, i) {
                 var h = bu(i) ? i() : i;
                 d[d.length] = encodeURIComponent(g) + "=" + encodeURIComponent(null == h ? "" : h)
             };
         if (null == a) { return "" }
         if (Array.isArray(a) || a.jquery && !bi.isPlainObject(a)) { bi.each(a, function() { b(this.name, this.value) }) } else { for (c in a) { bW(c, a[c], f, b) } }
         return d.join("&")
     }, bi.fn.extend({ serialize: function() { return bi.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var a = bi.prop(this, "elements"); return a ? bi.makeArray(a) : this }).filter(function() { var a = this.type; return this.name && !bi(this).is(":disabled") && bg.test(this.nodeName) && !aG.test(a) && (this.checked || !bO.test(a)) }).map(function(a, c) { var b = bi(this).val(); return null == b ? null : Array.isArray(b) ? bi.map(b, function(d) { return { name: c.name, value: d.replace(am, "\r\n") } }) : { name: c.name, value: b.replace(am, "\r\n") } }).get() } });
     var bs = /%20/g,
         a4 = /#.*$/,
         bL = /([?&])_=[^&]*/,
         bR = /^(.*?):[ \t]*([^\r\n]*)$/gm,
         b3 = /^(?:GET|HEAD)$/,
         bz = /^\/\//,
         ba = {},
         cz = {},
         ac = "*/".concat("*"),
         aS = aI.createElement("a");

     function au(a) {
         return function(b, g) {
             "string" != typeof b && (g = b, b = "*");
             var d, f = 0,
                 c = b.toLowerCase().match(bZ) || [];
             if (bu(g)) { while (d = c[f++]) { "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(g)) : (a[d] = a[d] || []).push(g) } }
         }
     }

     function ag(g, c, e, b) {
         var f = {},
             h = g === cz;

         function d(a) { var i; return f[a] = !0, bi.each(g[a] || [], function(j, l) { var k = l(c, e, b); return "string" != typeof k || h || f[k] ? h ? !(i = k) : void 0 : (c.dataTypes.unshift(k), d(k), !1) }), i }
         return d(c.dataTypes[0]) || !f["*"] && d("*")
     }

     function cQ(a, f) { var c, d, b = bi.ajaxSettings.flatOptions || {}; for (c in f) { void 0 !== f[c] && ((b[c] ? a : d || (d = {}))[c] = f[c]) } return d && bi.extend(!0, a, d), a }
     aS.href = aM.href, bi.extend({
         active: 0,
         lastModified: {},
         etag: {},
         ajaxSettings: { url: aM.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(aM.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": ac, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": bi.parseXML }, flatOptions: { url: !0, context: !0 } },
         ajaxSetup: function(a, b) { return b ? cQ(cQ(a, bi.ajaxSettings), b) : cQ(bi.ajaxSettings, a) },
         ajaxPrefilter: au(ba),
         ajaxTransport: au(cz),
         ajax: function(A, M) {
             "object" == typeof A && (M = A, A = void 0), M = M || {};
             var q, B, J, H, z, K, D, C, E, I, P = bi.ajaxSetup({}, M),
                 S = P.context || P,
                 G = P.context && (S.nodeType || S.jquery) ? bi(S) : bi.event,
                 R = bi.Deferred(),
                 k = bi.Callbacks("once memory"),
                 Q = P.statusCode || {},
                 j = {},
                 L = {},
                 O = "canceled",
                 N = {
                     readyState: 0,
                     getResponseHeader: function(a) {
                         var b;
                         if (D) {
                             if (!H) { H = {}; while (b = bR.exec(J)) { H[b[1].toLowerCase() + " "] = (H[b[1].toLowerCase() + " "] || []).concat(b[2]) } }
                             b = H[a.toLowerCase() + " "]
                         }
                         return null == b ? null : b.join(", ")
                     },
                     getAllResponseHeaders: function() { return D ? J : null },
                     setRequestHeader: function(a, b) { return null == D && (a = L[a.toLowerCase()] = L[a.toLowerCase()] || a, j[a] = b), this },
                     overrideMimeType: function(a) { return null == D && (P.mimeType = a), this },
                     statusCode: function(a) { var b; if (a) { if (D) { N.always(a[N.status]) } else { for (b in a) { Q[b] = [Q[b], a[b]] } } } return this },
                     abort: function(a) { var b = a || O; return q && q.abort(b), F(0, b), this }
                 };
             if (R.promise(N), P.url = ((A || P.url || aM.href) + "").replace(bz, aM.protocol + "//"), P.type = M.method || M.type || P.method || P.type, P.dataTypes = (P.dataType || "*").toLowerCase().match(bZ) || [""], null == P.crossDomain) { K = aI.createElement("a"); try { K.href = P.url, K.href = K.href, P.crossDomain = aS.protocol + "//" + aS.host != K.protocol + "//" + K.host } catch (A) { P.crossDomain = !0 } }
             if (P.data && P.processData && "string" != typeof P.data && (P.data = bi.param(P.data, P.traditional)), ag(ba, P, M, N), D) { return N }
             for (E in (C = bi.event && P.global) && 0 == bi.active++ && bi.event.trigger("ajaxStart"), P.type = P.type.toUpperCase(), P.hasContent = !b3.test(P.type), B = P.url.replace(a4, ""), P.hasContent ? P.data && P.processData && 0 === (P.contentType || "").indexOf("application/x-www-form-urlencoded") && (P.data = P.data.replace(bs, "+")) : (I = P.url.slice(B.length), P.data && (P.processData || "string" == typeof P.data) && (B += (b9.test(B) ? "&" : "?") + P.data, delete P.data), !1 === P.cache && (B = B.replace(bL, "$1"), I = (b9.test(B) ? "&" : "?") + "_=" + bm++ + I), P.url = B + I), P.ifModified && (bi.lastModified[B] && N.setRequestHeader("If-Modified-Since", bi.lastModified[B]), bi.etag[B] && N.setRequestHeader("If-None-Match", bi.etag[B])), (P.data && P.hasContent && !1 !== P.contentType || M.contentType) && N.setRequestHeader("Content-Type", P.contentType), N.setRequestHeader("Accept", P.dataTypes[0] && P.accepts[P.dataTypes[0]] ? P.accepts[P.dataTypes[0]] + ("*" !== P.dataTypes[0] ? ", " + ac + "; q=0.01" : "") : P.accepts["*"]), P.headers) { N.setRequestHeader(E, P.headers[E]) }
             if (P.beforeSend && (!1 === P.beforeSend.call(S, N, P) || D)) { return N.abort() }
             if (O = "abort", k.add(P.complete), N.done(P.success), N.fail(P.error), q = ag(cz, P, M, N)) {
                 if (N.readyState = 1, C && G.trigger("ajaxSend", [N, P]), D) { return N }
                 P.async && 0 < P.timeout && (z = aw.setTimeout(function() { N.abort("timeout") }, P.timeout));
                 try { D = !1, q.send(j, F) } catch (A) {
                     if (D) { throw A }
                     F(-1, A)
                 }
             } else { F(-1, "No Transport") }

             function F(c, v, g, m) {
                 var d, h, b, p, w, f = v;
                 D || (D = !0, z && aw.clearTimeout(z), q = void 0, J = m || "", N.readyState = 0 < c ? 4 : 0, d = 200 <= c && c < 300 || 304 === c, g && (p = function(x, X, T) {
                     var V, y, U, l, W = x.contents,
                         Y = x.dataTypes;
                     while ("*" === Y[0]) { Y.shift(), void 0 === V && (V = x.mimeType || X.getResponseHeader("Content-Type")) }
                     if (V) { for (y in W) { if (W[y] && W[y].test(V)) { Y.unshift(y); break } } }
                     if (Y[0] in T) { U = Y[0] } else {
                         for (y in T) {
                             if (!Y[0] || x.converters[y + " " + Y[0]]) { U = y; break }
                             l || (l = y)
                         }
                         U = U || l
                     }
                     if (U) { return U !== Y[0] && Y.unshift(U), T[U] }
                 }(P, N, g)), p = function(T, ae, W, Y) {
                     var U, X, x, Z, at, V = {},
                         y = T.dataTypes.slice();
                     if (y[1]) { for (x in T.converters) { V[x.toLowerCase()] = T.converters[x] } }
                     X = y.shift();
                     while (X) { if (T.responseFields[X] && (W[T.responseFields[X]] = ae), !at && Y && T.dataFilter && (ae = T.dataFilter(ae, T.dataType)), at = X, X = y.shift()) { if ("*" === X) { X = at } else { if ("*" !== at && at !== X) { if (!(x = V[at + " " + X] || V["* " + X])) { for (U in V) { if ((Z = U.split(" "))[1] === X && (x = V[at + " " + Z[0]] || V["* " + Z[0]])) {!0 === x ? x = V[U] : !0 !== V[U] && (X = Z[0], y.unshift(Z[1])); break } } } if (!0 !== x) { if (x && T["throws"]) { ae = x(ae) } else { try { ae = x(ae) } catch (T) { return { state: "parsererror", error: x ? T : "No conversion from " + at + " to " + X } } } } } } } }
                     return { state: "success", data: ae }
                 }(P, p, N, d), d ? (P.ifModified && ((w = N.getResponseHeader("Last-Modified")) && (bi.lastModified[B] = w), (w = N.getResponseHeader("etag")) && (bi.etag[B] = w)), 204 === c || "HEAD" === P.type ? f = "nocontent" : 304 === c ? f = "notmodified" : (f = p.state, h = p.data, d = !(b = p.error))) : (b = f, !c && f || (f = "error", c < 0 && (c = 0))), N.status = c, N.statusText = (v || f) + "", d ? R.resolveWith(S, [h, f, N]) : R.rejectWith(S, [N, f, b]), N.statusCode(Q), Q = void 0, C && G.trigger(d ? "ajaxSuccess" : "ajaxError", [N, P, d ? h : b]), k.fireWith(S, [N, f]), C && (G.trigger("ajaxComplete", [N, P]), --bi.active || bi.event.trigger("ajaxStop")))
             }
             return N
         },
         getJSON: function(a, c, b) { return bi.get(a, c, b, "json") },
         getScript: function(a, b) { return bi.get(a, void 0, b, "script") }
     }), bi.each(["get", "post"], function(a, b) { bi[b] = function(c, g, d, f) { return bu(g) && (f = f || d, d = g, g = void 0), bi.ajax(bi.extend({ url: c, type: b, dataType: f, data: g, success: d }, bi.isPlainObject(c) && c)) } }), bi._evalUrl = function(a, b) { return bi.ajax({ url: a, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, converters: { "text script": function() {} }, dataFilter: function(c) { bi.globalEval(c, b) } }) }, bi.fn.extend({
         wrapAll: function(a) { var b; return this[0] && (bu(a) && (a = a.call(this[0])), b = bi(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() { var c = this; while (c.firstElementChild) { c = c.firstElementChild } return c }).append(this)), this },
         wrapInner: function(a) {
             return bu(a) ? this.each(function(b) { bi(this).wrapInner(a.call(this, b)) }) : this.each(function() {
                 var b = bi(this),
                     c = b.contents();
                 c.length ? c.wrapAll(a) : b.append(a)
             })
         },
         wrap: function(b) { var a = bu(b); return this.each(function(c) { bi(this).wrapAll(a ? b.call(this, c) : b) }) },
         unwrap: function(a) { return this.parent(a).not("body").each(function() { bi(this).replaceWith(this.childNodes) }), this }
     }), bi.expr.pseudos.hidden = function(a) { return !bi.expr.pseudos.visible(a) }, bi.expr.pseudos.visible = function(a) { return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length) }, bi.ajaxSettings.xhr = function() { try { return new aw.XMLHttpRequest } catch (a) {} };
     var cm = { 0: 200, 1223: 204 },
         cF = bi.ajaxSettings.xhr();
     cG.cors = !!cF && "withCredentials" in cF, cG.ajax = cF = !!cF, bi.ajaxTransport(function(c) {
         var d, b;
         if (cG.cors || cF && !c.crossDomain) {
             return {
                 send: function(a, h) {
                     var f, g = c.xhr();
                     if (g.open(c.type, c.url, c.async, c.username, c.password), c.xhrFields) { for (f in c.xhrFields) { g[f] = c.xhrFields[f] } }
                     for (f in c.mimeType && g.overrideMimeType && g.overrideMimeType(c.mimeType), c.crossDomain || a["X-Requested-With"] || (a["X-Requested-With"] = "XMLHttpRequest"), a) { g.setRequestHeader(f, a[f]) }
                     d = function(i) { return function() { d && (d = b = g.onload = g.onerror = g.onabort = g.ontimeout = g.onreadystatechange = null, "abort" === i ? g.abort() : "error" === i ? "number" != typeof g.status ? h(0, "error") : h(g.status, g.statusText) : h(cm[g.status] || g.status, g.statusText, "text" !== (g.responseType || "text") || "string" != typeof g.responseText ? { binary: g.response } : { text: g.responseText }, g.getAllResponseHeaders())) } }, g.onload = d(), b = g.onerror = g.ontimeout = d("error"), void 0 !== g.onabort ? g.onabort = b : g.onreadystatechange = function() { 4 === g.readyState && aw.setTimeout(function() { d && b() }) }, d = d("abort");
                     try { g.send(c.hasContent && c.data || null) } catch (a) { if (d) { throw a } }
                 },
                 abort: function() { d && d() }
             }
         }
     }), bi.ajaxPrefilter(function(a) { a.crossDomain && (a.contents.script = !1) }), bi.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(a) { return bi.globalEval(a), a } } }), bi.ajaxPrefilter("script", function(a) { void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET") }), bi.ajaxTransport("script", function(b) { var c, a; if (b.crossDomain || b.scriptAttrs) { return { send: function(d, f) { c = bi("<script>").attr(b.scriptAttrs || {}).prop({ charset: b.scriptCharset, src: b.url }).on("load error", a = function(g) { c.remove(), a = null, g && f("error" === g.type ? 404 : 200, g.type) }), aI.head.appendChild(c[0]) }, abort: function() { a && a() } } } });
     var cs, aY = [],
         cL = /(=)\?(?=&|$)|\?\?/;
     bi.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var a = aY.pop() || bi.expando + "_" + bm++; return this[a] = !0, a } }), bi.ajaxPrefilter("json jsonp", function(c, j, f) { var h, d, g, b = !1 !== c.jsonp && (cL.test(c.url) ? "url" : "string" == typeof c.data && 0 === (c.contentType || "").indexOf("application/x-www-form-urlencoded") && cL.test(c.data) && "data"); if (b || "jsonp" === c.dataTypes[0]) { return h = c.jsonpCallback = bu(c.jsonpCallback) ? c.jsonpCallback() : c.jsonpCallback, b ? c[b] = c[b].replace(cL, "$1" + h) : !1 !== c.jsonp && (c.url += (b9.test(c.url) ? "&" : "?") + c.jsonp + "=" + h), c.converters["script json"] = function() { return g || bi.error(h + " was not called"), g[0] }, c.dataTypes[0] = "json", d = aw[h], aw[h] = function() { g = arguments }, f.always(function() { void 0 === d ? bi(aw).removeProp(h) : aw[h] = d, c[h] && (c.jsonpCallback = j.jsonpCallback, aY.push(h)), g && bu(d) && d(g[0]), g = d = void 0 }), "script" } }), cG.createHTMLDocument = ((cs = aI.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === cs.childNodes.length), bi.parseHTML = function(a, g, c) { return "string" != typeof a ? [] : ("boolean" == typeof g && (c = g, g = !1), g || (cG.createHTMLDocument ? ((f = (g = aI.implementation.createHTMLDocument("")).createElement("base")).href = aI.location.href, g.head.appendChild(f)) : g = aI), d = !c && [], (b = aC.exec(a)) ? [g.createElement(b[1])] : (b = cw([a], g, d), d && d.length && bi(d).remove(), bi.merge([], b.childNodes))); var f, b, d }, bi.fn.load = function(c, k, f) {
         var h, d, g, b = this,
             j = c.indexOf(" ");
         return -1 < j && (h = by(c.slice(j)), c = c.slice(0, j)), bu(k) ? (f = k, k = void 0) : k && "object" == typeof k && (d = "POST"), 0 < b.length && bi.ajax({ url: c, type: d || "GET", dataType: "html", data: k }).done(function(a) { g = arguments, b.html(h ? bi("<div>").append(bi.parseHTML(a)).find(h) : a) }).always(f && function(a, i) { b.each(function() { f.apply(this, g || [a.responseText, i, a]) }) }), this
     }, bi.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) { bi.fn[b] = function(c) { return this.on(b, c) } }), bi.expr.pseudos.animated = function(a) { return bi.grep(bi.timers, function(b) { return a === b.elem }).length }, bi.offset = {
         setOffset: function(g, w, m) {
             var q, j, p, b, v, x, k = bi.css(g, "position"),
                 d = bi(g),
                 h = {};
             "static" === k && (g.style.position = "relative"), v = d.offset(), p = bi.css(g, "top"), x = bi.css(g, "left"), ("absolute" === k || "fixed" === k) && -1 < (p + x).indexOf("auto") ? (b = (q = d.position()).top, j = q.left) : (b = parseFloat(p) || 0, j = parseFloat(x) || 0), bu(w) && (w = w.call(g, m, bi.extend({}, v))), null != w.top && (h.top = w.top - v.top + b), null != w.left && (h.left = w.left - v.left + j), "using" in w ? w.using.call(g, h) : d.css(h)
         }
     }, bi.fn.extend({
         offset: function(d) { if (arguments.length) { return void 0 === d ? this : this.each(function(f) { bi.offset.setOffset(this, d, f) }) } var a, b, c = this[0]; return c ? c.getClientRects().length ? (a = c.getBoundingClientRect(), b = c.ownerDocument.defaultView, { top: a.top + b.pageYOffset, left: a.left + b.pageXOffset }) : { top: 0, left: 0 } : void 0 },
         position: function() {
             if (this[0]) {
                 var a, f, c, d = this[0],
                     b = { top: 0, left: 0 };
                 if ("fixed" === bi.css(d, "position")) { f = d.getBoundingClientRect() } else {
                     f = this.offset(), c = d.ownerDocument, a = d.offsetParent || c.documentElement;
                     while (a && (a === c.body || a === c.documentElement) && "static" === bi.css(a, "position")) { a = a.parentNode }
                     a && a !== d && 1 === a.nodeType && ((b = bi(a).offset()).top += bi.css(a, "borderTopWidth", !0), b.left += bi.css(a, "borderLeftWidth", !0))
                 }
                 return { top: f.top - b.top - bi.css(d, "marginTop", !0), left: f.left - b.left - bi.css(d, "marginLeft", !0) }
             }
         },
         offsetParent: function() { return this.map(function() { var a = this.offsetParent; while (a && "static" === bi.css(a, "position")) { a = a.offsetParent } return a || a7 }) }
     }), bi.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(c, a) {
         var b = "pageYOffset" === a;
         bi.fn[c] = function(d) {
             return ad(this, function(f, i, g) {
                 var h;
                 if (cA(f) ? h = f : 9 === f.nodeType && (h = f.defaultView), void 0 === g) { return h ? h[a] : f[i] }
                 h ? h.scrollTo(b ? h.pageXOffset : g, b ? g : h.pageYOffset) : f[i] = g
             }, c, d, arguments.length)
         }
     }), bi.each(["top", "left"], function(a, b) { bi.cssHooks[b] = cO(cG.pixelPosition, function(c, d) { if (d) { return d = af(c, b), ab.test(d) ? bi(c).position()[b] + "px" : d } }) }), bi.each({ Height: "height", Width: "width" }, function(b, c) {
         bi.each({ padding: "inner" + b, content: c, "": "outer" + b }, function(d, a) {
             bi.fn[a] = function(f, j) {
                 var h = arguments.length && (d || "boolean" != typeof f),
                     g = d || (!0 === f || !0 === j ? "margin" : "border");
                 return ad(this, function(i, m, k) { var l; return cA(i) ? 0 === a.indexOf("outer") ? i["inner" + b] : i.document.documentElement["client" + b] : 9 === i.nodeType ? (l = i.documentElement, Math.max(i.body["scroll" + b], l["scroll" + b], i.body["offset" + b], l["offset" + b], l["client" + b])) : void 0 === k ? bi.css(i, m, g) : bi.style(i, m, k, g) }, c, h ? f : void 0, h)
             }
         })
     }), bi.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(a, b) { bi.fn[b] = function(c, d) { return 0 < arguments.length ? this.on(b, null, c, d) : this.trigger(b) } }), bi.fn.extend({ hover: function(a, b) { return this.mouseenter(a).mouseleave(b || a) } }), bi.fn.extend({ bind: function(a, c, b) { return this.on(a, null, c, b) }, unbind: function(a, b) { return this.off(a, null, b) }, delegate: function(a, d, b, c) { return this.on(d, a, b, c) }, undelegate: function(a, c, b) { return 1 === arguments.length ? this.off(a, "**") : this.off(c, a || "**", b) } }), bi.proxy = function(a, f) { var c, d, b; if ("string" == typeof f && (c = a[f], f = a, a = c), bu(a)) { return d = b4.call(arguments, 2), (b = function() { return a.apply(f || this, d.concat(b4.call(arguments))) }).guid = a.guid = a.guid || bi.guid++, b } }, bi.holdReady = function(a) { a ? bi.readyWait++ : bi.ready(!0) }, bi.isArray = Array.isArray, bi.parseJSON = JSON.parse, bi.nodeName = ai, bi.isFunction = bu, bi.isWindow = cA, bi.camelCase = co, bi.type = cu, bi.now = Date.now, bi.isNumeric = function(a) { var b = bi.type(a); return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a)) }, "function" == typeof define && define.amd && define("jquery", [], function() { return bi });
     var bX = aw.jQuery,
         bh = aw.$;
     return bi.noConflict = function(a) { return aw.$ === bi && (aw.$ = bh), a && aw.jQuery === bi && (aw.jQuery = bX), bi }, aH || (aw.jQuery = aw.$ = bi), bi
 });