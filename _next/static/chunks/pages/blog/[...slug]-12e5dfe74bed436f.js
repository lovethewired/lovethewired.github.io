(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[94],{96082:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[...slug]",function(){return n(53832)}])},53832:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return V},default:function(){return W}});var r=n(85893),s=n(99646),a=n(72355),i=n(75532),c=n(84283),l=n(87690),o=n(86828),u=n(71015),d=n(41664);function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){h(e,t,n[t])}))}return e}function f(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}function x(e){var t=e.children,n=e.trusted,i=f(e,["children","trusted"]);return(0,r.jsx)(s.D,m({remarkPlugins:[a.Z],rehypePlugins:n?[o.Z]:[],components:{h1:"h2",h2:"h3",code:function(e){return(0,r.jsx)(b,m({trusted:n},e))},a:function(e){var t=e.href,n=e.children,s=(e.node,f(e,["href","children","node"]));return/^https\:\/\//.test(t)?(0,r.jsx)(u.dL,m({href:t},s,{children:n})):(0,r.jsx)(d.default,m({href:t},s,{children:(0,r.jsx)("a",{children:n})}))}}},i,{children:t}))}function v(e){var t=e.linesHl,n=e.linesAdd,r=e.linesDel;return function(e){var s=e.rows,a=e.stylesheet,i=e.useInlineStyles;return s.map((function(e,s){return t&&t.includes(s)?e.properties.className=["line line-hl"]:n&&n.includes(s)?e.properties.className=["line line-add"]:r&&r.includes(s)?e.properties.className=["line line-del"]:e.properties.className=[],(0,l.ZP)({node:e,stylesheet:a,useInlineStyles:i,key:"code-segement".concat(s)})}))}}var p=/\/\/\s*(highlight|add|delete)-line$/gm,y=/\/\/\s*highlight-line$/,j=/\/\/\s*delete-line$/,g=/\/\/\s*add-line$/;function b(e){e.node;var t,n,s=e.inline,a=e.trusted,l=e.className,o=e.children,u=f(e,["node","inline","trusted","className","children"]),d=null===(t=/language-(?:diff-)*(.+)\b/.exec(l||""))||void 0===t?void 0:t[1],h=null===(n=/\b(\w+)\b$/.exec(l||""))||void 0===n?void 0:n[1];if(!h||s)return(0,r.jsx)("code",m({className:l},u,{children:o}));var x=d!==h?d:"",b=String(o).replace(/\n$/,""),N=[],w=[],O=[];return a&&(b.split("\n").forEach((function(e,t){y.test(e)?N.push(t):j.test(e)?O.push(t):g.test(e)&&w.push(t)})),b=b.replaceAll(p,"")),(0,r.jsx)(i.Z,m({language:h,style:c.YC,before:x,codeTagProps:{style:[]},wrapLines:!0,renderer:v({linesHl:N,linesAdd:w,linesDel:O}),className:""},u,{children:b}))}var N=n(67294),w=n(94184),O=n.n(w),C=n(38197),k=n(84243),S=n(34051),P=n.n(S),D=n(31838),I=n(31062);function E(e,t,n,r,s,a,i){try{var c=e[a](i),l=c.value}catch(o){return void n(o)}c.done?t(l):Promise.resolve(l).then(r,s)}function _(e){return function(){var t=this,n=arguments;return new Promise((function(r,s){var a=e.apply(t,n);function i(e){E(a,r,s,i,c,"next",e)}function c(e){E(a,r,s,i,c,"throw",e)}i(void 0)}))}}var A=D.v.soldisc.chainId;function L(e){var t=(0,I.GP)().soldisc,n=(0,u.ti)(),r="PostQuery"+e,s=function(){var r=_(P().mark((function r(){var s;return P().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(r.t0=e&&n,!r.t0){r.next=5;break}return r.next=4,t.getCommentsByPost(e,n);case 4:r.t0=r.sent;case 5:return s=r.t0,r.abrupt("return",{comments:s});case 7:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();return(0,I.LQ)({key:r,fetchState:s,chainId:A})}var M=n(57458),T=n.n(M),G=n(67814),$=n(56024),Q=n(51436);function z(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function H(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function U(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){H(e,t,n[t])}))}return e}function Z(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}function B(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,s,a=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(l){c=!0,s=l}finally{try{i||null==n.return||n.return()}finally{if(c)throw s}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return z(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return z(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var X=D.v.soldisc.chainId;function q(e){e.value;var t=e.children,n=Z(e,["value","children"]);return(0,r.jsx)("div",{className:"break-words",children:(0,r.jsx)(x,U({},n,{children:t}))})}function F(e){var t=e.address,n=e.userName,s=e.setModalData;return(0,r.jsx)("span",{className:"text-primary-400 link",onClick:function(){return s({address:t,userName:n})},children:n})}function R(e){var t=e.postHash,n=e.commentId,s=e.user,a=e.userName,i=e.text,c=e.creationDate,l=e.editDate,o=e.numLikes,d=e.liked,h=e.setModalData,m=(0,u.ti)(),f=(0,u.Mu)(),x=null===f||void 0===f?void 0:f.getSigner(),v=(0,I.GP)(),p=v.soldisc,y=v.handleTx,j=v.handleTxError,g=(0,N.useState)(!1),b=g[0],w=g[1],C=(0,N.useState)(""),k=C[0],S=C[1],P=B(L(t),2)[1],E=m===s,_=(0,u.xh)(D.v.soldisc.chainId);return(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"flex items-baseline gap-x-4 text-slate-400",children:[(0,r.jsx)(F,{address:s,userName:a,setModalData:h}),(0,r.jsx)("span",{className:"text-sm hidden sm:block",children:new Date(c.mul(1e3).toNumber()).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})}),(0,r.jsxs)("span",{className:O()("text-sm",0==o&&"text-slate-500"),children:[o.toString(),(0,r.jsx)(G.G,{className:O()("ml-2 text-base transition-colors duration-200 cursor-pointer",d?"text-secondary-400 hover:text-slate-300":"text-slate-400 hover:text-secondary-400"),onClick:_((function(){t&&p.connect(x).toggleLikeComment(t,n).then(y).then(P).catch(j)})),icon:d?Q.m6i:$.m6i})]}),l>0&&(0,r.jsxs)("span",{className:"text-sm text-slate-500 hidden sm:block",children:["(edited:"," ",new Date(l.mul(1e3).toNumber()).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"}),")"]})]}),b?(0,r.jsx)(Y,{value:k,onChange:function(e){return S(e.target.value)},onClick:function(e){t&&p.connect(x).editComment(t,n,e).then(y).then((function(){return w(!1)})).then(P).catch(j)},onCancel:function(){return w(!1)}}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(q,{children:i}),E&&t&&(0,r.jsx)("div",{className:"flex justify-center text-xs",children:(0,r.jsx)(u.zx,{className:"",variant:"text",onClick:function(){S(i),w(!0)},children:"Edit"})})]})]})}function Y(e){var t,n=e.value,s=e.onClick,a=e.onChange,i=e.onCancel,c=e.placeholder,l=e.text,o=e.loadingText,d=(e.children,(0,N.useState)(!1)),h=d[0],m=d[1],f=T().encode(n),x=4<f.length&&f.length<1e3,v=(0,u.xh)(D.v.soldisc.chainId);return(0,r.jsxs)("div",{children:[(0,r.jsx)(u.II,{className:"mt-2",variant:"outlined",type:"multiline",placeholder:c,invalid:n&&!x,value:n,onChange:a}),n&&(0,r.jsx)("p",{className:"text-slate-400 my-2",children:"Preview:"}),(0,r.jsx)(q,{children:T().decode(f)}),(0,r.jsxs)("div",{className:"flex justify-center p-2",children:[i&&!h&&(0,r.jsx)(u.zx,{variant:"text",onClick:i,children:"Cancel"}),(0,r.jsx)(u.fl,{loading:h,disabled:!x,className:"",variant:"text",onClick:v((function(){m(!0),s(f).finally((function(){return m(!1)}))})),children:h?null!==(t=l&&o)&&void 0!==t?t:"Editing":null!==l&&void 0!==l?l:"Edit"})]})]})}function J(e){var t=e.userName,n=e.address,s=e.setModalData,a=B(function(e){var t=(0,I.GP)().soldisc,n="UserCommentQuery"+e,r=function(){var n=_(P().mark((function n(){var r;return P().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.t0=e,!n.t0){n.next=5;break}return n.next=4,t.getCommentsByUser(e);case 4:n.t0=n.sent;case 5:return r=n.t0,n.abrupt("return",{comments:r});case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,I.LQ)({key:n,fetchState:r,chainId:A})}(n),1),i=a[0],c=i.comments,l=i.loaded,o=(0,u.pN)();return(0,r.jsx)(u.u_,{open:!!n,onClose:function(){return s({})},children:(0,r.jsxs)("div",{className:"bg-slate-900 flex flex-col p-8 max-w-xl",children:[(0,r.jsxs)("div",{className:"flex items-end gap-x-3",children:[(0,r.jsx)(u.dL,{href:(0,u.st)(o,n),children:(0,r.jsx)("h2",{className:"btn",children:t})}),(0,r.jsx)(u.dL,{href:(0,u.st)(o,n),children:(0,r.jsx)("span",{className:"",children:n})})]}),(0,r.jsx)("div",{className:"mt-4",children:l&&c.map((function(e,t){return(0,r.jsx)(R,U({commentId:t,setModalData:s},e),t)})).reverse()})]})})}function K(e){var t=e.slug,n=(0,N.useState)({}),s=n[0],a=n[1],i=(0,N.useState)(""),c=i[0],l=i[1],o=(0,N.useState)(""),d=o[0],h=o[1],m=(0,u.ti)(),f=(0,u.Mu)(),x=(0,u.pN)(),v=null===f||void 0===f?void 0:f.getSigner(),p=(0,I.GP)(),y=p.soldisc,j=p.handleTx,g=p.handleTxError,b=t.join("/");"2022/soldisc"===b&&(b="2021/soldisc");var w=C.w(k.$.encode(["string"],[b])),O=B(function(e){var t=(0,I.GP)().soldisc,n=function(){var n=_(P().mark((function n(){var r;return P().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.t0=e,!n.t0){n.next=5;break}return n.next=4,t.accounts(e);case 4:n.t0=n.sent;case 5:return r=n.t0,n.abrupt("return",{userAccount:r});case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,I.LQ)({key:"UserQuery",fetchState:n,chainId:A})}(m),2),S=O[0].userAccount,E=O[1],M=B(L(w),2),G=M[0],$=G.comments,Q=G.loaded,z=M[1],H=x===X&&m,Z=(null===S||void 0===S?void 0:S.creationDate)>0;return(0,r.jsxs)("div",{className:"soldisc bg-slate-800/40 text-slate-300 -mx-4 px-4 p-4 rounded-xl border border-white/20",children:[s.address&&(0,r.jsx)(J,U({},s,{setModalData:a})),(0,r.jsxs)("div",{className:"text-lg py-2",children:[(0,r.jsx)("span",{className:"font-display bg-gradient-to-r from-primary-400 to-secondary-500 bg-clip-text text-transparent",children:"SolDisc"})," ",(0,r.jsx)("span",{className:"text-sm text-slate-400 ml-1",children:"- On-Chain Discourse"})]}),H&&!Q?(0,r.jsx)("div",{className:"flex justify-center m-4",children:"loading..."}):(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"border-y border-white/40 pt-3 mb-4",children:[(0,r.jsx)("p",{className:"text-slate-400 text-sm",children:"Leave a comment:"}),Z?(0,r.jsx)(F,{address:m,userName:S.name,setModalData:a}):(0,r.jsx)("div",{children:(0,r.jsx)(u.II,{className:"mt-2",variant:"outlined",placeholder:"username",value:d,invalid:d&&!(4<=d.length&&d.length<=20),onChange:function(e){return h(e.target.value)}})}),H?(0,r.jsx)(Y,{value:c,onChange:function(e){return l(e.target.value)},placeholder:Z?"":"comment",onClick:function(){return(Z?y.connect(v).commentOnPost(w,T().encode(c)):y.connect(v).createAccountAndComment(d,"",w,T().encode(c))).then(j).then(E).then(z).then((function(){return l("")})).catch(g)},text:Z?"Comment":"Create Account & Comment",loadingText:Z?"Commenting":"Creating Account & Commenting"}):(0,r.jsx)("div",{className:"flex justify-center m-4",children:x!==X?(0,r.jsx)(u.zx,{variant:"text",onClick:function(){!window.ethereum&&(0,u.tq)()?(0,u.Dy)():u.i8.activate(X)},children:"Connect to ".concat(u.zG[X].name)}):(0,r.jsx)(u.TI,{chainId:D.v.soldisc.chainId})})]}),!((null===$||void 0===$?void 0:$.length)>=1)&&(0,r.jsx)("p",{className:"text-center my-8",children:"No Comments yet"}),(0,r.jsx)("div",{className:"flex flex-col gap-y-4",children:Q&&$&&$.map((function(e,t){return(0,r.jsx)(R,U({postHash:w,commentId:t,setModalData:a},e),t)})).reverse()})]})]})}var V=!0;function W(e){var t=e.postData;return(0,r.jsxs)("div",{className:"flex flex-col justify-between gap-y-20",children:[(0,r.jsxs)("div",{className:"content markdown",children:[(0,r.jsx)("h1",{className:"text-center",children:t.title}),t.suptitle&&(0,r.jsx)("h2",{className:"text-center",children:t.suptitle}),(0,r.jsx)("p",{className:"text-slate-500 text-sm text-center",children:t.date}),(0,r.jsx)(x,{className:"mt-16",trusted:!0,children:t.contentRaw})]}),(0,r.jsx)(K,{slug:t.slug})]})}}},function(e){e.O(0,[905,774,888,179],(function(){return t=96082,e(e.s=t);var t}));var t=e.O();_N_E=t}]);