(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[44],{60149:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/enc-message",function(){return n(39697)}])},39697:function(e,t,n){"use strict";n.r(t),n.d(t,{Decrypt:function(){return j},Encrypt:function(){return m},default:function(){return g}});var r=n(47568),s=n(828),c=n(10092),u=n(85893),a=n(67294),i=n(39505),l=n(16441),o=n(59567),f=n(29251),y=n(11163),h=n(67814),p=n(51436),v=n(48764).Buffer,d=n(51091),x=function(e){if(!e.startsWith("0x"))try{return l.Dv(o.J(e))}catch(t){console.error(t.message)}return e};function g(){return(0,u.jsxs)("div",{className:"content",children:[(0,u.jsx)(m,{}),(0,u.jsx)(j,{})]})}function m(){var e=(0,y.useRouter)(),t=(0,i.ti)(),n=(0,i.Mu)(),f=(0,a.useState)(""),g=f[0],m=f[1],j=(0,a.useState)(""),N=j[0],b=j[1],_=(0,a.useState)(""),E=_[0],q=_[1],M=(0,a.useState)(""),S=M[0],C=M[1];(0,a.useEffect)((function(){e.query.msg&&C(e.query.msg),e.query.encMsg&&b(x(e.query.encMsg)),e.query.encPubKey&&m(e.query.encPubKey)}),[e.query]);var I=function(){var e=(0,r.Z)((function(){var e;return(0,c.__generator)(this,(function(t){if(!S||!g)return q(""),b(""),[2];try{e=l.Dv(v.from(JSON.stringify(d.encryptSafely({publicKey:o.c(g),data:S,version:"x25519-xsalsa20-poly1305"})),"utf8")),b(e),q("")}catch(n){b(""),q(n.message)}return[2]}))}));return function(){return e.apply(this,arguments)}}();(0,a.useEffect)((function(){return I()}),[S,g]);var K=N?{encMsg:o.c(N),encPubKey:g}:{msg:S};return(0,u.jsxs)("div",{className:"mt-4 text-slate-300 space-y-2",children:[(0,u.jsx)("h1",{className:"text-center mb-12",children:"Encrypt Message"}),(0,u.jsx)(i.II,{label:"Public Key",value:g,onChange:function(e){return m(e.target.value)},children:(0,u.jsx)(i.zx,{onClick:function(){n.send("eth_getEncryptionPublicKey",[t]).then((function(e){return m(l.Dv(o.J(e)))}))},children:"Request"})}),(0,u.jsx)(i.II,{label:"Message",spellCheck:!1,inputClassName:"overflow-scroll resize-y",value:S,onChange:function(e){return C(e.target.value)},type:"multiline"}),(0,u.jsx)(i.II,{label:"Encrypted Message",value:N,children:(0,u.jsx)(i.zx,{variant:"text",className:"py-1",disabled:!N&&!S,children:(0,u.jsx)(i.dL,{href:e.pathname+"?"+Object.entries(K).map((function(e){var t=(0,s.Z)(e,2),n=t[0],r=t[1];return"".concat(n,"=").concat(r)})).join("&"),children:(0,u.jsx)(h.G,{className:"fa-thin",icon:p.Xjp})})})}),E&&(0,u.jsx)("p",{className:"text-red-400",children:E})]})}function j(){var e=(0,y.useRouter)(),t=(0,i.ti)(),n=(0,i.Mu)(),s=(0,a.useState)(""),l=s[0],o=s[1],h=(0,a.useState)(""),p=h[0],v=h[1],g=(0,a.useState)(""),m=g[0],j=g[1],N=(0,a.useState)(""),b=N[0],_=N[1];(0,a.useEffect)((function(){e.query.encMsg&&v(x(e.query.encMsg)),e.query.decPrivKey&&j(e.query.decPrivKey)}),[e.query]);var E=function(){var e=(0,r.Z)((function(){var e;return(0,c.__generator)(this,(function(t){if(p&&m)try{e=d.decryptSafely({privateKey:(n=m,n.replace("0x","")),encryptedData:JSON.parse(f.ZN(p))}),_(e),o("")}catch(r){_(""),o(r.message)}else _(""),o("");var n;return[2]}))}));return function(){return e.apply(this,arguments)}}();(0,a.useEffect)((function(){return E()}),[p,m]);return(0,u.jsxs)("div",{className:"mt-4 text-slate-300 space-y-2",children:[(0,u.jsx)("h1",{className:"text-center mb-12",children:"Decrypt Message"}),(0,u.jsx)(i.II,{label:"Encrypted Message",spellCheck:!1,value:p,onChange:function(e){return v(e.target.value)}}),(0,u.jsx)(i.II,{label:"Private Key",spellCheck:!1,value:m,onChange:function(e){return j(e.target.value)},children:(0,u.jsx)(i.zx,{onClick:function(){var e;n.send("eth_decrypt",[(e=p,"0x"+e.replace("0x","")),t]).then((function(e){var t;return _(null===(t=JSON.parse(e))||void 0===t?void 0:t.data)})).catch((function(e){return o(e.message)}))},children:"Decrypt"})}),(0,u.jsx)(i.II,{label:"Decrypted Message",value:b}),l&&(0,u.jsx)("p",{className:"text-red-400",children:l})]})}}},function(e){e.O(0,[774,888,179],(function(){return t=60149,e(e.s=t);var t}));var t=e.O();_N_E=t}]);