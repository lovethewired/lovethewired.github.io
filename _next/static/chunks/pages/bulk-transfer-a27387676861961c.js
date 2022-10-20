(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[232],{15970:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/bulk-transfer",function(){return t(62582)}])},62582:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return j}});var r=t(85893),a=t(67294),s=t(71015),i=t(39786),l=t(77294),c=t(19485),u=t(87282),o=t(67814),d=t(51436);function f(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function h(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,s=[],i=!0,l=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(s.push(r.value),!n||s.length!==n);i=!0);}catch(c){l=!0,a=c}finally{try{i||null==t.return||t.return()}finally{if(l)throw a}}return s}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return f(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return f(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var p="0x91B1eabE9E32568A6F0104921daB13bd0fE3D258",v=new i.vU(["function transferBulk(address to, address token, uint256[] ids)","function transferBulk(address to, address[] token, uint256[] ids)"]),m=new l.CH(p,v),x=new i.vU(["function name() public view returns (string memory)","function isApprovedForAll(address user, address operator) public view returns (bool)","function setApprovalForAll(address operator, bool approved) public"]);function j(){var e=(0,a.useState)(""),n=e[0],t=e[1],i=(0,a.useState)(""),f=i[0],v=i[1],j=(0,a.useState)(""),b=j[0],g=j[1],y=(0,a.useState)(""),w=y[0],A=y[1],N=(0,a.useState)(null),S=N[0],C=N[1],I=(0,a.useState)(!1),E=I[0],k=I[1],T=(0,a.useState)(!1),_=T[0],F=T[1],B=(0,a.useState)(""),O=B[0],z=B[1],X=(0,a.useState)(""),G=X[0],H=X[1],L=(0,a.useState)([]),U=L[0],M=L[1],P=(0,a.useState)(!1),R=P[0],D=P[1],J=(0,u.mS)(),$=J.handleTx,q=J.handleTxError,K=(0,s.HM)(),Q=(0,s.yw)(),V=null===Q||void 0===Q?void 0:Q.getSigner(),W=(0,s.TJ)(Q),Y=(0,s.pC)(),Z=(0,s.xh)(1),ee=(0,s.st)(Y,b),ne=(0,s.st)(Y,w);(0,a.useEffect)((function(){if(f)try{g(c.getAddress(f))}catch(e){g(""),H(e.message)}}),[f]);var te=function(){S.connect(V).isApprovedForAll(K,p).then(k).catch((function(e){return H(e.message)}))};(0,a.useEffect)((function(){if(n)try{var e=c.getAddress(n);A(e);var t=new l.CH(e,x);window.contract=t.connect(V),C(t),t.connect(V).name().then(F).catch((function(e){return H(e.message)})),t.connect(V).isApprovedForAll(K,p).then(k).catch((function(e){return H(e.message)}))}catch(r){A(""),F(""),H(r.message)}}),[n]),(0,a.useEffect)((function(){var e=O.replace(/[,\n\s]/g,",").split(",").filter((function(e){return""!==e})).sort((function(e,n){return e-n}));e=(e=e.filter((function(n,t){return e.indexOf(n)==t}))).map((function(e){return parseInt(e)})).filter((function(e){return isFinite(e)})),M(e)}),[O]);return(0,r.jsxs)("div",{className:"content",children:[(0,r.jsx)("h1",{className:"text-center mb-12",children:"ERC721 Bulk Transfer"}),(0,r.jsx)("div",{className:"mt-4 text-slate-300",children:(0,r.jsxs)("div",{className:"sm:order-1",children:[(0,r.jsxs)("div",{className:"flex items-end gap-4 mb-4",children:[(0,r.jsx)(s.II,{label:"Connected",value:W||K,children:(0,r.jsx)(s.zx,{variant:"text",className:"py-0",disabled:!(0,s.st)(Y,K),children:(0,r.jsx)(s.dL,{href:(0,s.st)(Y,K),children:(0,r.jsx)(o.G,{className:"fa-thin",icon:d.Xjp})})})}),(0,r.jsx)(s.II,{type:"select",className:"w-fit sm:w-full",label:"ChainId: "+Y,value:Y,onChange:function(e){return s.i8.activate(Number(e.target.value))},children:Object.entries(s.zG).filter((function(e){return 1===h(e,1)[0]})).map((function(e){var n=h(e,2),t=n[0],a=n[1].name;return(0,r.jsx)("option",{value:t,children:a},t)}))})]}),(0,r.jsxs)("div",{className:"flex items-end gap-4 mb-4",children:[(0,r.jsx)(s.II,{label:_||"ERC721 Address",value:n,onChange:function(e){return t(e.target.value)},children:(0,r.jsx)(s.zx,{variant:"text",className:"py-1",disabled:!ne,children:(0,r.jsx)(s.dL,{href:ne,children:(0,r.jsx)(o.G,{className:"fa-thin",icon:d.Xjp})})})}),(0,r.jsx)(s.II,{label:"Transfer To",value:f,onChange:function(e){return v(e.target.value)},children:(0,r.jsx)(s.zx,{variant:"text",className:"py-1",disabled:!ee,children:(0,r.jsx)(s.dL,{href:ee,children:(0,r.jsx)(o.G,{className:"fa-thin",icon:d.Xjp})})})})]}),(0,r.jsx)(s.II,{label:"Token Ids (comma/newline separated)",spellCheck:!1,inputClassName:"overflow-scroll resize-y",value:O,onChange:function(e){return z(e.target.value)},type:"multiline"}),(0,r.jsx)("p",{className:"text-red-400 text-xs",children:G&&"Error: "+G}),(0,r.jsxs)("p",{children:["Ids to Transfer: ",null===U||void 0===U?void 0:U.join(",")]}),(0,r.jsx)("div",{className:"flex justify-center mt-4",children:(0,r.jsx)(s.fl,{loading:R,disabled:!w||!_||E&&!(0!=(null===U||void 0===U?void 0:U.length))||!b,onClick:Z(E?function(){D(!0),m.connect(V).functions["transferBulk(address,address,uint256[])"](f,n,U).then($).catch(q).finally((function(){return D(!1)}))}:function(){D(!0),S.connect(V).setApprovalForAll(p,!0).then($).then(te).catch(q).finally((function(){return D(!1)}))}),children:E?R?"Transferring":"Transfer":R?"Approving":"Approve"})})]})})]})}}},function(e){e.O(0,[774,888,179],(function(){return n=15970,e(e.s=n);var n}));var n=e.O();_N_E=n}]);