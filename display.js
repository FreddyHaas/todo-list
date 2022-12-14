(()=>{"use strict";function t(){localStorage.setItem("toDos",JSON.stringify(a.toDos))}function e(){localStorage.setItem("projects",JSON.stringify(a.projects))}const n=(t,e)=>({title:t,date:void 0,project:e}),r=n("Example","All"),a=(()=>{const a=JSON.parse(localStorage.getItem("toDos"))||[r],o=JSON.parse(localStorage.getItem("projects"))||["Example"],i=t=>{for(let e=0;e<a.length;e++)a[e].project===t&&(a.splice(e,1),i(t))};return{toDos:a,projects:o,storeProject:t=>{o.push(t),e()},storeToDo:(e,r)=>{const o=n(e,r);a.push(o),t()},updateDate:(e,n)=>{a[n].date=e,t()},updateTitle:(e,n)=>{a[n].title=e,t()},deleteToDo:e=>{a.splice(e,1),t()},deleteProject:n=>{i(o[n]),o.splice(n,1),t(),e(),console.log(a),console.log(o)}}})();function o(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function u(t){o(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"===i(t)&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function d(t){o(1,arguments);var e=u(t);return e.setHours(0,0,0,0),e}function s(t,e){o(2,arguments);var n=d(t),r=d(e);return n.getTime()===r.getTime()}function l(t){return o(1,arguments),s(t,Date.now())}function c(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}var h={};function m(){return h}function f(t,e){var n,r,a,i,d,s,l,h;o(1,arguments);var f=m(),g=c(null!==(n=null!==(r=null!==(a=null!==(i=null==e?void 0:e.weekStartsOn)&&void 0!==i?i:null==e||null===(d=e.locale)||void 0===d||null===(s=d.options)||void 0===s?void 0:s.weekStartsOn)&&void 0!==a?a:f.weekStartsOn)&&void 0!==r?r:null===(l=f.locale)||void 0===l||null===(h=l.options)||void 0===h?void 0:h.weekStartsOn)&&void 0!==n?n:0);if(!(g>=0&&g<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var v=u(t),w=v.getDay(),b=(w<g?7:0)+w-g;return v.setDate(v.getDate()-b),v.setHours(0,0,0,0),v}function g(t,e,n){o(2,arguments);var r=f(t,n),a=f(e,n);return r.getTime()===a.getTime()}function v(t,e){return o(1,arguments),g(t,Date.now(),e)}function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function b(t){return o(1,arguments),t instanceof Date||"object"===w(t)&&"[object Date]"===Object.prototype.toString.call(t)}function p(t){if(o(1,arguments),!b(t)&&"number"!=typeof t)return!1;var e=u(t);return!isNaN(Number(e))}function y(t,e){o(2,arguments);var n=u(t).getTime(),r=c(e);return new Date(n+r)}function C(t,e){o(2,arguments);var n=c(e);return y(t,-n)}var T=864e5;function D(t){o(1,arguments);var e=1,n=u(t),r=n.getUTCDay(),a=(r<e?7:0)+r-e;return n.setUTCDate(n.getUTCDate()-a),n.setUTCHours(0,0,0,0),n}function k(t){o(1,arguments);var e=u(t),n=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var a=D(r),i=new Date(0);i.setUTCFullYear(n,0,4),i.setUTCHours(0,0,0,0);var d=D(i);return e.getTime()>=a.getTime()?n+1:e.getTime()>=d.getTime()?n:n-1}function M(t){o(1,arguments);var e=k(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var r=D(n);return r}var E=6048e5;function S(t,e){var n,r,a,i,d,s,l,h;o(1,arguments);var f=m(),g=c(null!==(n=null!==(r=null!==(a=null!==(i=null==e?void 0:e.weekStartsOn)&&void 0!==i?i:null==e||null===(d=e.locale)||void 0===d||null===(s=d.options)||void 0===s?void 0:s.weekStartsOn)&&void 0!==a?a:f.weekStartsOn)&&void 0!==r?r:null===(l=f.locale)||void 0===l||null===(h=l.options)||void 0===h?void 0:h.weekStartsOn)&&void 0!==n?n:0);if(!(g>=0&&g<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var v=u(t),w=v.getUTCDay(),b=(w<g?7:0)+w-g;return v.setUTCDate(v.getUTCDate()-b),v.setUTCHours(0,0,0,0),v}function x(t,e){var n,r,a,i,d,s,l,h;o(1,arguments);var f=u(t),g=f.getUTCFullYear(),v=m(),w=c(null!==(n=null!==(r=null!==(a=null!==(i=null==e?void 0:e.firstWeekContainsDate)&&void 0!==i?i:null==e||null===(d=e.locale)||void 0===d||null===(s=d.options)||void 0===s?void 0:s.firstWeekContainsDate)&&void 0!==a?a:v.firstWeekContainsDate)&&void 0!==r?r:null===(l=v.locale)||void 0===l||null===(h=l.options)||void 0===h?void 0:h.firstWeekContainsDate)&&void 0!==n?n:1);if(!(w>=1&&w<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var b=new Date(0);b.setUTCFullYear(g+1,0,w),b.setUTCHours(0,0,0,0);var p=S(b,e),y=new Date(0);y.setUTCFullYear(g,0,w),y.setUTCHours(0,0,0,0);var C=S(y,e);return f.getTime()>=p.getTime()?g+1:f.getTime()>=C.getTime()?g:g-1}function P(t,e){var n,r,a,i,u,d,s,l;o(1,arguments);var h=m(),f=c(null!==(n=null!==(r=null!==(a=null!==(i=null==e?void 0:e.firstWeekContainsDate)&&void 0!==i?i:null==e||null===(u=e.locale)||void 0===u||null===(d=u.options)||void 0===d?void 0:d.firstWeekContainsDate)&&void 0!==a?a:h.firstWeekContainsDate)&&void 0!==r?r:null===(s=h.locale)||void 0===s||null===(l=s.options)||void 0===l?void 0:l.firstWeekContainsDate)&&void 0!==n?n:1),g=x(t,e),v=new Date(0);v.setUTCFullYear(g,0,f),v.setUTCHours(0,0,0,0);var w=S(v,e);return w}var U=6048e5;function W(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}const j=function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return W("yy"===e?r%100:r,e.length)},L=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):W(n+1,2)},N=function(t,e){return W(t.getUTCDate(),e.length)},O=function(t,e){return W(t.getUTCHours()%12||12,e.length)},Y=function(t,e){return W(t.getUTCHours(),e.length)},A=function(t,e){return W(t.getUTCMinutes(),e.length)},q=function(t,e){return W(t.getUTCSeconds(),e.length)},H=function(t,e){var n=e.length,r=t.getUTCMilliseconds();return W(Math.floor(r*Math.pow(10,n-3)),e.length)};function F(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),o=r%60;if(0===o)return n+String(a);var i=e||"";return n+String(a)+i+W(o,2)}function B(t,e){return t%60==0?(t>0?"-":"+")+W(Math.abs(t)/60,2):z(t,e)}function z(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+W(Math.floor(a/60),2)+n+W(a%60,2)}const I={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return j(t,e)},Y:function(t,e,n,r){var a=x(t,r),o=a>0?a:1-a;return"YY"===e?W(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):W(o,e.length)},R:function(t,e){return W(k(t),e.length)},u:function(t,e){return W(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return W(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return W(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return L(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return W(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){var a=function(t,e){o(1,arguments);var n=u(t),r=S(n,e).getTime()-P(n,e).getTime();return Math.round(r/U)+1}(t,r);return"wo"===e?n.ordinalNumber(a,{unit:"week"}):W(a,e.length)},I:function(t,e,n){var r=function(t){o(1,arguments);var e=u(t),n=D(e).getTime()-M(e).getTime();return Math.round(n/E)+1}(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):W(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):N(t,e)},D:function(t,e,n){var r=function(t){o(1,arguments);var e=u(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var r=e.getTime(),a=n-r;return Math.floor(a/T)+1}(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):W(r,e.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return W(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return W(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return W(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return O(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):Y(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):W(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):W(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):A(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):q(t,e)},S:function(t,e){return H(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return B(a);case"XXXX":case"XX":return z(a);default:return z(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return B(a);case"xxxx":case"xx":return z(a);default:return z(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+F(a,":");default:return"GMT"+z(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+F(a,":");default:return"GMT"+z(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return W(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return W((r._originalDate||t).getTime(),e.length)}};var Q=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},G=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},X={p:G,P:function(t,e){var n,r=t.match(/(P+)(p+)?/)||[],a=r[1],o=r[2];if(!o)return Q(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",Q(a,e)).replace("{{time}}",G(o,e))}};const R=X;function J(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}var $=["D","DD"],_=["YY","YYYY"];function V(t){return-1!==$.indexOf(t)}function K(t){return-1!==_.indexOf(t)}function Z(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var tt={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function et(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,r=t.formats[n]||t.formats[t.defaultWidth];return r}}var nt,rt={date:et({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:et({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:et({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},at={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function ot(t){return function(e,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&t.formattingValues){var a=t.defaultFormattingWidth||t.defaultWidth,o=null!=n&&n.width?String(n.width):a;r=t.formattingValues[o]||t.formattingValues[a]}else{var i=t.defaultWidth,u=null!=n&&n.width?String(n.width):t.defaultWidth;r=t.values[u]||t.values[i]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function it(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(a);if(!o)return null;var i,u=o[0],d=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],s=Array.isArray(d)?dt(d,(function(t){return t.test(u)})):ut(d,(function(t){return t.test(u)}));i=t.valueCallback?t.valueCallback(s):s,i=n.valueCallback?n.valueCallback(i):i;var l=e.slice(u.length);return{value:i,rest:l}}}function ut(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function dt(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}const st={code:"en-US",formatDistance:function(t,e,n){var r,a=tt[t];return r="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:rt,formatRelative:function(t,e,n,r){return at[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:ot({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:ot({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:ot({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:ot({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:ot({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(nt={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(nt.matchPattern);if(!n)return null;var r=n[0],a=t.match(nt.parsePattern);if(!a)return null;var o=nt.valueCallback?nt.valueCallback(a[0]):a[0];o=e.valueCallback?e.valueCallback(o):o;var i=t.slice(r.length);return{value:o,rest:i}}),era:it({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:it({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:it({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:it({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:it({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};var lt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ct=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ht=/^'([^]*?)'?$/,mt=/''/g,ft=/[a-zA-Z]/;function gt(t){var e=t.match(ht);return e?e[1].replace(mt,"'"):t}var vt="All";function wt(){const t=document.getElementById("content");for(;t.firstChild;)t.removeChild(t.lastChild);return function(){const t=document.getElementById("project-list");for(;t.firstChild;)t.removeChild(t.lastChild);for(let e=0;e<a.projects.length;e++){const n=document.createElement("div");n.classList.add("project");const r=document.createElement("div");r.classList.add("project-name"),r.textContent=`${a.projects[e]}`,r.addEventListener("click",(()=>{vt=a.projects[e],wt()})),n.appendChild(r);const o=document.createElement("button");o.textContent="x",o.setAttribute("id","delete-button"),o.addEventListener("click",(()=>{vt=0===e?"All":a.projects[e-1],a.deleteProject(e),wt()})),n.appendChild(o),t.appendChild(n)}}(),t.appendChild(function(){const t=document.createElement("p");return t.textContent=`${vt}`,t}()),t.appendChild(function(){const t=document.createElement("div");for(t.classList.add("todo-list");t.firstChild;)t.removeChild(t.lastChild);if("All"===vt)for(let e=0;e<a.toDos.length;e++){const n=bt(a.toDos[e].title,a.toDos[e].date,e);t.appendChild(n)}else if("Today"===vt){for(let e=0;e<a.toDos.length;e++)if(l(Date.parse(a.toDos[e].date))){const n=bt(a.toDos[e].title,a.toDos[e].date,e);t.appendChild(n)}}else if("This week"===vt){for(let e=0;e<a.toDos.length;e++)if(v(Date.parse(a.toDos[e].date))){const n=bt(a.toDos[e].title,a.toDos[e].date,e);t.appendChild(n)}}else for(let e=0;e<a.toDos.length;e++)if(a.toDos[e].project===vt){const n=bt(a.toDos[e].title,a.toDos[e].date,e);t.appendChild(n)}return t}()),t.appendChild(function(){const t=document.createElement("div");t.setAttribute("id","todo-button");const e=document.createElement("div");return e.classList.add("todo"),e.textContent="+ Add ToDo",e.setAttribute("id","add-todo"),t.appendChild(e),e.addEventListener("click",(()=>{t.removeChild(t.lastChild),function(){parent=document.getElementById("todo-button");const t=document.createElement("INPUT");t.setAttribute("type","text"),t.setAttribute("id","todo-input"),parent.appendChild(t);const e=document.createElement("button");e.setAttribute("id","add-button"),e.textContent="Add",parent.appendChild(e),e.addEventListener("click",(()=>{a.storeToDo(t.value,vt),wt()}));const n=document.createElement("button");n.setAttribute("id","cancel-button"),n.textContent="Cancel",parent.appendChild(n),n.addEventListener("click",(()=>{wt()}))}()})),t}()),t}function bt(t,e,n){const r=document.createElement("div");r.classList.add("todo");const i=document.createElement("button");i.classList.add("todo-title"),i.textContent=`${t}`,i.addEventListener("click",(()=>{r.removeChild(i),r.insertBefore(function(t){const e=document.createElement("INPUT");return e.setAttribute("type","text"),e.setAttribute("id","title-update"),e.addEventListener("change",(()=>{a.updateTitle(e.value,t),wt()})),e}(n),d)})),r.appendChild(i);const d=document.createElement("button");d.classList.add("todo-date"),d.textContent=void 0===e?"No date":`${function(t,e,n){var r,a,i,d,s,l,h,f,g,v,w,b,y,T,D,k,M,E;o(2,arguments);var S=String(e),x=m(),P=null!==(r=null!==(a=null==n?void 0:n.locale)&&void 0!==a?a:x.locale)&&void 0!==r?r:st,U=c(null!==(i=null!==(d=null!==(s=null!==(l=null==n?void 0:n.firstWeekContainsDate)&&void 0!==l?l:null==n||null===(h=n.locale)||void 0===h||null===(f=h.options)||void 0===f?void 0:f.firstWeekContainsDate)&&void 0!==s?s:x.firstWeekContainsDate)&&void 0!==d?d:null===(g=x.locale)||void 0===g||null===(v=g.options)||void 0===v?void 0:v.firstWeekContainsDate)&&void 0!==i?i:1);if(!(U>=1&&U<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var W=c(null!==(w=null!==(b=null!==(y=null!==(T=null==n?void 0:n.weekStartsOn)&&void 0!==T?T:null==n||null===(D=n.locale)||void 0===D||null===(k=D.options)||void 0===k?void 0:k.weekStartsOn)&&void 0!==y?y:x.weekStartsOn)&&void 0!==b?b:null===(M=x.locale)||void 0===M||null===(E=M.options)||void 0===E?void 0:E.weekStartsOn)&&void 0!==w?w:0);if(!(W>=0&&W<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!P.localize)throw new RangeError("locale must contain localize property");if(!P.formatLong)throw new RangeError("locale must contain formatLong property");var j=u(t);if(!p(j))throw new RangeError("Invalid time value");var L=J(j),N=C(j,L),O={firstWeekContainsDate:U,weekStartsOn:W,locale:P,_originalDate:j};return S.match(ct).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,R[e])(t,P.formatLong):t})).join("").match(lt).map((function(r){if("''"===r)return"'";var a=r[0];if("'"===a)return gt(r);var o=I[a];if(o)return null!=n&&n.useAdditionalWeekYearTokens||!K(r)||Z(r,e,String(t)),null!=n&&n.useAdditionalDayOfYearTokens||!V(r)||Z(r,e,String(t)),o(N,r,P.localize,O);if(a.match(ft))throw new RangeError("Format string contains an unescaped latin alphabet character `"+a+"`");return r})).join("")}(Date.parse(e),"dd/MM/yyyy")}`,d.addEventListener("click",(()=>{r.removeChild(d),r.insertBefore(function(t){const e=document.createElement("INPUT");return e.setAttribute("type","date"),e.setAttribute("id","todo-date"),e.addEventListener("input",(()=>{console.log(e.value),a.updateDate(e.value,t),wt()})),e}(n),s)})),r.appendChild(d);const s=document.createElement("input");return s.setAttribute("type","checkbox"),s.classList.add("checkbox"),s.addEventListener("input",(()=>{setTimeout((()=>{a.deleteToDo(n),wt()}),100)})),r.appendChild(s),r}function pt(){const t=document.querySelector(".project-button"),e=document.createElement("div");e.setAttribute("id","add-project"),e.textContent="+ Add Project",t.appendChild(e),e.addEventListener("click",(()=>{yt()}))}function yt(){Ct();const t=document.querySelector(".project-button"),e=document.createElement("INPUT");e.setAttribute("type","text"),e.setAttribute("id","project-input"),t.appendChild(e);const n=document.createElement("button");n.setAttribute("id","add-button"),n.textContent="Add",t.appendChild(n),n.addEventListener("click",(()=>{a.storeProject(e.value),Ct(),pt(),vt=e.value,wt()}));const r=document.createElement("button");r.setAttribute("id","cancel-button"),r.textContent="Cancel",t.appendChild(r),r.addEventListener("click",(()=>{Ct(),pt()}))}function Ct(){const t=document.querySelector(".project-button");for(;t.firstChild;)t.removeChild(t.lastChild)}wt(),document.getElementById("all").addEventListener("click",(()=>{vt="All",wt()})),document.getElementById("today").addEventListener("click",(()=>{vt="Today",wt()})),document.getElementById("week").addEventListener("click",(()=>{vt="This week",wt()})),document.getElementById("add-project").addEventListener("click",(()=>{yt()}))})();