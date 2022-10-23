(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[330],{84459:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[...slug]",function(){return t(87941)}])},87941:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return S},default:function(){return C}});var r=t(85893),s=t(11163),i=t(82960),l=t(97e3),a=t(75532),o=t(84283),c=t(87690),u=t(26802),d=t(38522),f=t(68141),h=t(491),p=t(34699),g=t(52935),m=t(31947),b=t(71015),y=t(41664);t(97604);function v(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function x(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){v(e,n,t[n])}))}return e}function j(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var w=[["# Audit Findings Classifications","\n# Audit Findings Classifications\n\n## Threat-Levels\n\n| Threat-Level |                                                                                       Description                                                                                        |\n| :----------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |\n|    Minor     |                               Includes optimizations, best practices, readability or misused semantics. Issues can be addressed using one's own judgement.                               |\n|    Medium    |                                 Includes oversights, potentially faulty logic.  These issues should be addressed unless there is a clear reason not to.                                  |\n|    Major     | Includes security vulnerabilities that can lead to damages or loss of user funds. These may not be directly exploitable or require certain conditions. These issues should be addressed. |\n|   Critical   |                       Critical findings can affect the funds of a large number of users and be very bad for a client's reputation. These issues need to be fixed.                        |\n\n## Categories\n\n|  Category   |                  Description                   |\n| :---------: | :--------------------------------------------: |\n| :sparkles:  | Readability, best practices, misused semantics |\n|  :recycle:  | Optimizations, suggestions for code refactors  |\n|    :zap:    |            Error / Logical mistake             |\n| :collision: |    Unauthorized access / Exploitable funds     |\n"],["# Audit Disclaimer",'\n# Disclaimer\n\nA contract audit is _not_ a security guarantee of "bug-free" code.\nThe audit is a best-effort endeavour operating within reasonable constraints\nof time, understanding, expertise and decidability.\nThe significance of this report must be understood \nin this context and given the outlined scope of the assignment.\nI shall not be held liable for any future damages.\n']];function N(e){var n=e.children,t=e.trusted,s=j(e,["children","trusted"]);if(t){var a=!0,o=!1,c=void 0;try{for(var v,N=w[Symbol.iterator]();!(a=(v=N.next()).done);a=!0){var O=v.value;n=n.replaceAll(O[0],O[1])}}catch(_){o=!0,c=_}finally{try{a||null==N.return||N.return()}finally{if(o)throw c}}}return(0,r.jsx)(i.D,x({remarkPlugins:t?[l.Z,d.Z,u.Z]:[l.Z],rehypePlugins:t?[f.Z,h.Z,p.Z,g.Z,m.Z]:[],components:{h1:"h2",h2:function(e){var n=e.children,t=j(e,["children"]);return(0,r.jsx)("h3",{id:t.id,children:n})},code:function(e){return(0,r.jsx)(Z,x({trusted:t},e))},a:function(e){var n=e.href,t=e.children,s=(e.node,j(e,["href","children","node"]));return/^https\:\/\//.test(n)?(0,r.jsx)(b.dL,x({href:n},s,{children:t})):(0,r.jsx)(y.default,x({href:n},s,{children:(0,r.jsx)("a",{children:t})}))}}},s,{children:n}))}function O(e){var n=e.linesHl,t=e.linesAdd,r=e.linesDel;return function(e){var s=e.rows,i=e.stylesheet,l=e.useInlineStyles;return s.map((function(e,s){return n&&n.includes(s)?e.properties.className=["line line-hl"]:t&&t.includes(s)?e.properties.className=["line line-add"]:r&&r.includes(s)?e.properties.className=["line line-del"]:e.properties.className=[],(0,c.ZP)({node:e,stylesheet:i,useInlineStyles:l,key:"code-segment".concat(s)})}))}}var _=/\/\/\s*(hl|highlight|add|delete|del|remove)-line$/gm,P=/\/\/\s*(hl|highlight)-line$/,k=/\/\/\s*(del|delete|remove)-line$/,T=/\/\/\s*add-line$/;function Z(e){e.node;var n,t,s=e.inline,i=e.trusted,l=e.className,c=e.children,u=j(e,["node","inline","trusted","className","children"]),d=null===(n=/language-(?:diff-)*(.+)\b/.exec(l||""))||void 0===n?void 0:n[1],f=null===(t=/\b(\w+)\b$/.exec(l||""))||void 0===t?void 0:t[1];if(!f||s)return(0,r.jsx)("code",x({className:l},u,{children:c}));var h=d!==f?d:"",p=String(c).replace(/\n$/,""),g=[],m=[],b=[];return i&&(p.split("\n").forEach((function(e,n){P.test(e)?g.push(n):k.test(e)?b.push(n):T.test(e)&&m.push(n)})),p=p.replaceAll(_,"")),(0,r.jsx)(a.Z,x({language:f,style:o.YC,before:h,codeTagProps:{style:[]},wrapLines:!0,renderer:O({linesHl:g,linesAdd:m,linesDel:b}),className:""},u,{children:p}))}t(67294),t(94184),t(38197),t(69820),t(57458),t(67814),t(56024),t(51436),t(31838),t(87282);function E(e){e.slug;return null}var S=!0;function C(e){var n=e.postData,t=(0,s.useRouter)().query.slug.includes("blog");return(0,r.jsxs)("div",{className:"flex flex-col justify-between gap-y-20",children:[(0,r.jsxs)("div",{className:"content markdown",children:[(0,r.jsx)("h1",{className:"text-center",children:n.title}),n.suptitle&&(0,r.jsx)("h2",{className:"text-center",children:n.suptitle}),(0,r.jsx)("p",{className:"text-slate-500 text-sm text-center",children:n.date}),(0,r.jsx)(N,{className:"mt-16",trusted:!0,children:n.contentRaw})]}),t&&(0,r.jsx)(E,{slug:n.slug})]})}}},function(e){e.O(0,[265,634,774,888,179],(function(){return n=84459,e(e.s=n);var n}));var n=e.O();_N_E=n}]);