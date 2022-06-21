"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[921],{6022:function(e,n,t){t.d(n,{o:function(){return b}});var r=t(85893),s=t(82960),l=t(97e3),a=t(75532),i=t(84283),c=t(87690),o=t(26802),d=t(38522),u=t(68141),h=t(491),m=t(34699),f=t(52935),x=t(31947),v=t(71015),p=t(41664);t(97604);function j(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function g(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){j(e,n,t[n])}))}return e}function y(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}function b(e){var n=e.children,t=e.trusted,a=y(e,["children","trusted"]);return(0,r.jsx)(s.D,g({remarkPlugins:t?[l.Z,d.Z,o.Z]:[l.Z],rehypePlugins:t?[u.Z,h.Z,m.Z,f.Z,x.Z]:[],components:{h1:"h2",h2:function(e){var n=e.children,t=y(e,["children"]);return(0,r.jsx)("h3",{id:t.id,children:n})},code:function(e){return(0,r.jsx)(k,g({trusted:t},e))},a:function(e){var n=e.href,t=e.children,s=(e.node,y(e,["href","children","node"]));return/^https\:\/\//.test(n)?(0,r.jsx)(v.dL,g({href:n},s,{children:t})):(0,r.jsx)(p.default,g({href:n},s,{children:(0,r.jsx)("a",{children:t})}))}}},a,{children:n}))}function N(e){var n=e.linesHl,t=e.linesAdd,r=e.linesDel;return function(e){var s=e.rows,l=e.stylesheet,a=e.useInlineStyles;return s.map((function(e,s){return n&&n.includes(s)?e.properties.className=["line line-hl"]:t&&t.includes(s)?e.properties.className=["line line-add"]:r&&r.includes(s)?e.properties.className=["line line-del"]:e.properties.className=[],(0,c.ZP)({node:e,stylesheet:l,useInlineStyles:a,key:"code-segement".concat(s)})}))}}var C=/\/\/\s*(hl|highlight|add|delete|del|remove)-line$/gm,O=/\/\/\s*(hl|highlight)-line$/,w=/\/\/\s*(del|delete|remove)-line$/,S=/\/\/\s*add-line$/;function k(e){e.node;var n,t,s=e.inline,l=e.trusted,c=e.className,o=e.children,d=y(e,["node","inline","trusted","className","children"]),u=null===(n=/language-(?:diff-)*(.+)\b/.exec(c||""))||void 0===n?void 0:n[1],h=null===(t=/\b(\w+)\b$/.exec(c||""))||void 0===t?void 0:t[1];if(!h||s)return(0,r.jsx)("code",g({className:c},d,{children:o}));var m=u!==h?u:"",f=String(o).replace(/\n$/,""),x=[],v=[],p=[];return l&&(f.split("\n").forEach((function(e,n){O.test(e)?x.push(n):w.test(e)?p.push(n):S.test(e)&&v.push(n)})),f=f.replaceAll(C,"")),(0,r.jsx)(a.Z,g({language:h,style:i.YC,before:m,codeTagProps:{style:[]},wrapLines:!0,renderer:N({linesHl:x,linesAdd:v,linesDel:p}),className:""},d,{children:f}))}},7313:function(e,n,t){t.d(n,{GS:function(){return A}});var r=t(85893),s=t(67294),l=t(71015),a=t(94184),i=t.n(a),c=t(9279),o=t(38197),d=t(84243),u=t(57458),h=t.n(u),m=t(67814),f=t(56024),x=t(51436),v=t(31838),p=t(6022),j=t(12641);function g(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function y(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){y(e,n,t[n])}))}return e}function N(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}function C(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,s,l=[],a=!0,i=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(l.push(r.value),!n||l.length!==n);a=!0);}catch(c){i=!0,s=c}finally{try{a||null==t.return||t.return()}finally{if(i)throw s}}return l}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return g(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return g(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var O=v.v.soldisc.chainId;function w(e){var n=(0,l.ti)();return(0,j.LQ)(v.v.soldisc.address,"getCommentsByPost",[e,n||c.d])}function S(e){e.value;var n=e.children,t=N(e,["value","children"]);return(0,r.jsx)("div",{className:"break-words",children:(0,r.jsx)(p.o,b({},t,{children:n}))})}function k(e){var n=e.address,t=e.userName,s=e.setModalData;return(0,r.jsx)("span",{className:"text-primary-400 link",onClick:function(){return s({address:n,userName:t})},children:t})}function D(e){var n=e.postHash,t=e.commentId,a=e.user,c=e.userName,o=e.text,d=e.creationDate,u=e.editDate,h=e.numLikes,p=e.liked,g=e.setModalData,y=(0,l.ti)(),b=(0,l.Mu)(),N=null===b||void 0===b?void 0:b.getSigner(),O=(0,j.GP)(),D=O.soldisc,I=O.handleTx,A=O.handleTxError,E=(0,s.useState)(!1),L=E[0],M=E[1],Z=(0,s.useState)(""),T=Z[0],$=Z[1],G=C(w(n),2)[1],_=y===a,z=(0,l.xh)(v.v.soldisc.chainId);return(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"flex items-baseline gap-x-4 text-slate-400",children:[(0,r.jsx)(k,{address:a,userName:c,setModalData:g}),(0,r.jsx)("span",{className:"text-sm hidden sm:block",children:new Date(d.mul(1e3).toNumber()).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})}),(0,r.jsxs)("span",{className:i()("text-sm",0==h&&"text-slate-500"),children:[h.toString(),(0,r.jsx)(m.G,{className:i()("ml-2 text-base transition-colors duration-200 cursor-pointer",p?"text-secondary-400 hover:text-slate-300":"text-slate-400 hover:text-secondary-400"),onClick:z((function(){n&&D.connect(N).toggleLikeComment(n,t).then(I).then(G).catch(A)})),icon:p?x.m6i:f.m6i})]}),u>0&&(0,r.jsxs)("span",{className:"text-sm text-slate-500 hidden sm:block",children:["(edited:"," ",new Date(u.mul(1e3).toNumber()).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"}),")"]})]}),L?(0,r.jsx)(P,{value:T,onChange:function(e){return $(e.target.value)},onClick:function(e){n&&D.connect(N).editComment(n,t,e).then(I).then((function(){return M(!1)})).then(G).catch(A)},onCancel:function(){return M(!1)}}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(S,{children:o}),_&&n&&(0,r.jsx)("div",{className:"flex justify-center text-xs",children:(0,r.jsx)(l.zx,{className:"",variant:"text",onClick:function(){$(o),M(!0)},children:"Edit"})})]})]})}function P(e){var n,t=e.value,a=e.onClick,i=e.onChange,c=e.onCancel,o=e.placeholder,d=e.text,u=e.loadingText,m=(e.children,(0,s.useState)(!1)),f=m[0],x=m[1],p=h().encode(t),j=4<p.length&&p.length<1e3,g=(0,l.xh)(v.v.soldisc.chainId);return(0,r.jsxs)("div",{children:[(0,r.jsx)(l.II,{className:"mt-2",variant:"outlined",type:"multiline",placeholder:o,invalid:t&&!j,value:t,onChange:i}),t&&(0,r.jsx)("p",{className:"text-slate-400 my-2",children:"Preview:"}),(0,r.jsx)(S,{children:h().decode(p)}),(0,r.jsxs)("div",{className:"flex justify-center p-2",children:[c&&!f&&(0,r.jsx)(l.zx,{variant:"text",onClick:c,children:"Cancel"}),(0,r.jsx)(l.fl,{loading:f,disabled:!j,className:"",variant:"text",onClick:g((function(){x(!0),a(p).finally((function(){return x(!1)}))})),children:f?null!==(n=d&&u)&&void 0!==n?n:"Editing":null!==d&&void 0!==d?d:"Edit"})]})]})}function I(e){var n,t=e.userName,s=e.address,a=e.setModalData,i=C((n=s,console.log("here"),(0,j.LQ)(v.v.soldisc.address,"getCommentsByUser",[n])),1)[0],c=(0,l.pN)();return(0,r.jsx)(l.u_,{open:!!s,onClose:function(){return a({})},children:(0,r.jsxs)("div",{className:"bg-slate-900 flex flex-col p-8 max-w-xl",children:[(0,r.jsxs)("div",{className:"flex items-end gap-x-3",children:[(0,r.jsx)(l.dL,{href:(0,l.st)(c,s),children:(0,r.jsx)("h2",{className:"btn",children:t})}),(0,r.jsx)(l.dL,{href:(0,l.st)(c,s),children:(0,r.jsx)("span",{className:"",children:s})})]}),(0,r.jsx)("div",{className:"mt-4",children:void 0!==i&&i.map((function(e,n){return(0,r.jsx)(D,b({commentId:n,setModalData:a},e),n)})).reverse()})]})})}function A(e){var n=e.slug,t=(0,s.useState)({}),a=t[0],i=t[1],c=(0,s.useState)(""),u=c[0],m=c[1],f=(0,s.useState)(""),x=f[0],p=f[1],g=(0,l.ti)(),y=(0,l.Mu)(),N=(0,l.pN)(),S=null===y||void 0===y?void 0:y.getSigner(),A=(0,j.GP)(),E=A.soldisc,L=A.handleTx,M=A.handleTxError,Z=n.join("/");"2022/soldisc"===Z&&(Z="2021/soldisc");var T=o.keccak256(d.$.encode(["string"],[Z])),$=C(function(e){return(0,j.LQ)(v.v.soldisc.address,"accounts",[e])}(g),2),G=$[0],_=$[1],z=C(w(T),2),H=z[0],Q=z[1],B=void 0!==H,U=N===O&&g,q=(null===G||void 0===G?void 0:G.creationDate)>0;return(0,r.jsxs)("div",{className:"soldisc bg-slate-800/40 text-slate-300 -mx-4 px-4 p-4 rounded-xl border border-white/20",children:[a.address&&(0,r.jsx)(I,b({},a,{setModalData:i})),(0,r.jsxs)("div",{className:"text-lg py-2",children:[(0,r.jsx)("span",{className:"font-display bg-gradient-to-r from-primary-400 to-secondary-500 bg-clip-text text-transparent",children:"SolDisc"})," ",(0,r.jsx)("span",{className:"text-sm text-slate-400 ml-1",children:"- On-Chain Discourse"})]}),U&&!B?(0,r.jsx)("div",{className:"flex justify-center m-4",children:"loading..."}):(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"border-y border-white/40 pt-3 mb-4",children:[(0,r.jsx)("p",{className:"text-slate-400 text-sm",children:"Leave a comment:"}),q?(0,r.jsx)(k,{address:g,userName:G.name,setModalData:i}):(0,r.jsx)("div",{children:(0,r.jsx)(l.II,{className:"mt-2",variant:"outlined",placeholder:"username",value:x,invalid:x&&!(4<=x.length&&x.length<=20),onChange:function(e){return p(e.target.value)}})}),U?(0,r.jsx)(P,{value:u,onChange:function(e){return m(e.target.value)},placeholder:q?"":"comment",onClick:function(){return(q?E.connect(S).commentOnPost(T,h().encode(u)):E.connect(S).createAccountAndComment(x,"",T,h().encode(u))).then(L).then(_).then(Q).then((function(){return m("")})).catch(M)},text:q?"Comment":"Create Account & Comment",loadingText:q?"Commenting":"Creating Account & Commenting"}):(0,r.jsx)("div",{className:"flex justify-center m-4",children:N!==O?(0,r.jsx)(l.zx,{variant:"text",onClick:function(){!window.ethereum&&(0,l.tq)()?(0,l.Dy)():l.i8.activate(O)},children:"Connect to ".concat(l.zG[O].name)}):(0,r.jsx)(l.TI,{chainId:v.v.soldisc.chainId})})]}),!((null===H||void 0===H?void 0:H.length)>=1)&&(0,r.jsx)("p",{className:"text-center my-8",children:"No Comments yet"}),(0,r.jsx)("div",{className:"flex flex-col gap-y-4",children:B&&H&&H.map((function(e,n){return(0,r.jsx)(D,b({postHash:T,commentId:n,setModalData:i},e),n)})).reverse()})]})]})}}}]);