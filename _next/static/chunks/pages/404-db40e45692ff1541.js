(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[197],{72448:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return t(91635)}])},91635:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return i}});var n=t(85893);t(1864),t(41664);function i(e){e.allPostsData;return(0,n.jsx)("section",{className:"h-[500px]",children:(0,n.jsxs)("div",{className:"flex justify-center items-center h-full",children:[(0,n.jsx)("h1",{className:"border-r border-white/30 mr-4 pr-4 font-bold",children:"404"}),(0,n.jsx)("h2",{children:"This page could not be found."})]})})}},1864:function(e,r,t){var n=t(83454);!function(){"use strict";var r={977:function(e){function r(e){if("string"!==typeof e)throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}function t(e,r){for(var t,n="",i=0,o=-1,l=0,a=0;a<=e.length;++a){if(a<e.length)t=e.charCodeAt(a);else{if(47===t)break;t=47}if(47===t){if(o===a-1||1===l);else if(o!==a-1&&2===l){if(n.length<2||2!==i||46!==n.charCodeAt(n.length-1)||46!==n.charCodeAt(n.length-2))if(n.length>2){var f=n.lastIndexOf("/");if(f!==n.length-1){-1===f?(n="",i=0):i=(n=n.slice(0,f)).length-1-n.lastIndexOf("/"),o=a,l=0;continue}}else if(2===n.length||1===n.length){n="",i=0,o=a,l=0;continue}r&&(n.length>0?n+="/..":n="..",i=2)}else n.length>0?n+="/"+e.slice(o+1,a):n=e.slice(o+1,a),i=a-o-1;o=a,l=0}else 46===t&&-1!==l?++l:l=-1}return n}var i={resolve:function(){for(var e,i="",o=!1,l=arguments.length-1;l>=-1&&!o;l--){var a;l>=0?a=arguments[l]:(void 0===e&&(e=n.cwd()),a=e),r(a),0!==a.length&&(i=a+"/"+i,o=47===a.charCodeAt(0))}return i=t(i,!o),o?i.length>0?"/"+i:"/":i.length>0?i:"."},normalize:function(e){if(r(e),0===e.length)return".";var n=47===e.charCodeAt(0),i=47===e.charCodeAt(e.length-1);return 0!==(e=t(e,!n)).length||n||(e="."),e.length>0&&i&&(e+="/"),n?"/"+e:e},isAbsolute:function(e){return r(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0===arguments.length)return".";for(var e,t=0;t<arguments.length;++t){var n=arguments[t];r(n),n.length>0&&(void 0===e?e=n:e+="/"+n)}return void 0===e?".":i.normalize(e)},relative:function(e,t){if(r(e),r(t),e===t)return"";if((e=i.resolve(e))===(t=i.resolve(t)))return"";for(var n=1;n<e.length&&47===e.charCodeAt(n);++n);for(var o=e.length,l=o-n,a=1;a<t.length&&47===t.charCodeAt(a);++a);for(var f=t.length-a,c=l<f?l:f,h=-1,s=0;s<=c;++s){if(s===c){if(f>c){if(47===t.charCodeAt(a+s))return t.slice(a+s+1);if(0===s)return t.slice(a+s)}else l>c&&(47===e.charCodeAt(n+s)?h=s:0===s&&(h=0));break}var u=e.charCodeAt(n+s);if(u!==t.charCodeAt(a+s))break;47===u&&(h=s)}var d="";for(s=n+h+1;s<=o;++s)s!==o&&47!==e.charCodeAt(s)||(0===d.length?d+="..":d+="/..");return d.length>0?d+t.slice(a+h):(a+=h,47===t.charCodeAt(a)&&++a,t.slice(a))},_makeLong:function(e){return e},dirname:function(e){if(r(e),0===e.length)return".";for(var t=e.charCodeAt(0),n=47===t,i=-1,o=!0,l=e.length-1;l>=1;--l)if(47===(t=e.charCodeAt(l))){if(!o){i=l;break}}else o=!1;return-1===i?n?"/":".":n&&1===i?"//":e.slice(0,i)},basename:function(e,t){if(void 0!==t&&"string"!==typeof t)throw new TypeError('"ext" argument must be a string');r(e);var n,i=0,o=-1,l=!0;if(void 0!==t&&t.length>0&&t.length<=e.length){if(t.length===e.length&&t===e)return"";var a=t.length-1,f=-1;for(n=e.length-1;n>=0;--n){var c=e.charCodeAt(n);if(47===c){if(!l){i=n+1;break}}else-1===f&&(l=!1,f=n+1),a>=0&&(c===t.charCodeAt(a)?-1===--a&&(o=n):(a=-1,o=f))}return i===o?o=f:-1===o&&(o=e.length),e.slice(i,o)}for(n=e.length-1;n>=0;--n)if(47===e.charCodeAt(n)){if(!l){i=n+1;break}}else-1===o&&(l=!1,o=n+1);return-1===o?"":e.slice(i,o)},extname:function(e){r(e);for(var t=-1,n=0,i=-1,o=!0,l=0,a=e.length-1;a>=0;--a){var f=e.charCodeAt(a);if(47!==f)-1===i&&(o=!1,i=a+1),46===f?-1===t?t=a:1!==l&&(l=1):-1!==t&&(l=-1);else if(!o){n=a+1;break}}return-1===t||-1===i||0===l||1===l&&t===i-1&&t===n+1?"":e.slice(t,i)},format:function(e){if(null===e||"object"!==typeof e)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return function(e,r){var t=r.dir||r.root,n=r.base||(r.name||"")+(r.ext||"");return t?t===r.root?t+n:t+e+n:n}("/",e)},parse:function(e){r(e);var t={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return t;var n,i=e.charCodeAt(0),o=47===i;o?(t.root="/",n=1):n=0;for(var l=-1,a=0,f=-1,c=!0,h=e.length-1,s=0;h>=n;--h)if(47!==(i=e.charCodeAt(h)))-1===f&&(c=!1,f=h+1),46===i?-1===l?l=h:1!==s&&(s=1):-1!==l&&(s=-1);else if(!c){a=h+1;break}return-1===l||-1===f||0===s||1===s&&l===f-1&&l===a+1?-1!==f&&(t.base=t.name=0===a&&o?e.slice(1,f):e.slice(a,f)):(0===a&&o?(t.name=e.slice(1,l),t.base=e.slice(1,f)):(t.name=e.slice(a,l),t.base=e.slice(a,f)),t.ext=e.slice(l,f)),a>0?t.dir=e.slice(0,a-1):o&&(t.dir="/"),t},sep:"/",delimiter:":",win32:null,posix:null};i.posix=i,e.exports=i}},t={};function i(e){var n=t[e];if(void 0!==n)return n.exports;var o=t[e]={exports:{}},l=!0;try{r[e](o,o.exports,i),l=!1}finally{l&&delete t[e]}return o.exports}i.ab="//";var o=i(977);e.exports=o}()}},function(e){e.O(0,[774,888,179],(function(){return r=72448,e(e.s=r);var r}));var r=e.O();_N_E=r}]);