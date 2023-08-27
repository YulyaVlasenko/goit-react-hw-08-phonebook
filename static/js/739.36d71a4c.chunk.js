"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[739],{9677:function(n,e,r){r.d(e,{$:function(){return l}});var t,o,i,a=r(168),u=r(6444),c=u.ZP.section(t||(t=(0,a.Z)(["\n  max-width: 696px;\n  padding-bottom: 20px;\n  margin-left: auto;\n  margin-right: auto;\n  border-right: 2px solid rgb(156 72 35);\n  border-bottom: 2px solid rgb(156 72 35);\n  border-left: 2px solid rgb(156 72 35);\n"]))),d=u.ZP.div(o||(o=(0,a.Z)(["\n  padding-left: 20px;\n  padding-right: 20px;\n"]))),s=u.ZP.h2(i||(i=(0,a.Z)(["\n  font-size: 32px;\n  padding-top: 20px;\n  margin-bottom: 20px;\n  text-align: center;\n"]))),p=r(184),l=function(n){var e=n.title,r=n.children;return(0,p.jsx)(c,{children:(0,p.jsxs)(d,{children:[e&&(0,p.jsx)(s,{children:e}),r]})})}},1739:function(n,e,r){r.r(e),r.d(e,{default:function(){return fn}});var t,o,i=r(2791),a=r(9434),u=r(4270),c=r(9439),d=r(168),s=r(6444),p=s.ZP.form(t||(t=(0,d.Z)(["\n  padding: 10px;\n  margin-top: 20px;\n  border: 2px solid rgb(34 155 15);\n  border-radius: 4px;\n  button {\n    padding: 4px 8px;\n    font-size: 14px;\n    color: rgb(34 155 15);\n    font-weight: bold;\n    border: 1px solid rgb(34 155 15);\n    border-radius: 4px;\n    cursor: pointer;\n    background-color: white;\n    box-shadow: rgba(0, 0, 0, 0.12) 0px 0px 1px, rgba(0, 0, 0, 0.14) 0px 0px 1px,\n      rgba(0, 0, 0, 0.2) 0px 1px 0px;\n    &:active {\n      background-color: rgb(34 155 15);\n      color: #ffffff;\n    }\n  }\n"]))),l=s.ZP.label(o||(o=(0,d.Z)(["\n  font-size: 20px;\n  margin-bottom: 20px;\n  display: flex;\n  flex-direction: column;\n  input {\n    max-width: 550px;\n    padding: 4px;\n    margin-top: 6px;\n    border: 1px solid rgb(34 155 15);\n    border-radius: 4px;\n    &:focus {\n      border-color: rgb(99, 149, 241, 0.6);\n      outline: 2px rgba(99, 149, 241, 0.6);\n      outline-style: solid;\n    }\n  }\n"]))),x=r(208),f="NOT_FOUND";var b=function(n,e){return n===e};function g(n,e){var r="object"===typeof e?e:{equalityCheck:e},t=r.equalityCheck,o=void 0===t?b:t,i=r.maxSize,a=void 0===i?1:i,u=r.resultEqualityCheck,c=function(n){return function(e,r){if(null===e||null===r||e.length!==r.length)return!1;for(var t=e.length,o=0;o<t;o++)if(!n(e[o],r[o]))return!1;return!0}}(o),d=1===a?function(n){var e;return{get:function(r){return e&&n(e.key,r)?e.value:f},put:function(n,r){e={key:n,value:r}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(c):function(n,e){var r=[];function t(n){var t=r.findIndex((function(r){return e(n,r.key)}));if(t>-1){var o=r[t];return t>0&&(r.splice(t,1),r.unshift(o)),o.value}return f}return{get:t,put:function(e,o){t(e)===f&&(r.unshift({key:e,value:o}),r.length>n&&r.pop())},getEntries:function(){return r},clear:function(){r=[]}}}(a,c);function s(){var e=d.get(arguments);if(e===f){if(e=n.apply(null,arguments),u){var r=d.getEntries(),t=r.find((function(n){return u(n.value,e)}));t&&(e=t.value)}d.put(arguments,e)}return e}return s.clearCache=function(){return d.clear()},s}function h(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var r=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+r+"]")}return e}function m(n){for(var e=arguments.length,r=new Array(e>1?e-1:0),t=1;t<e;t++)r[t-1]=arguments[t];var o=function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];var i,a=0,u={memoizeOptions:void 0},c=t.pop();if("object"===typeof c&&(u=c,c=t.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var d=u,s=d.memoizeOptions,p=void 0===s?r:s,l=Array.isArray(p)?p:[p],x=h(t),f=n.apply(void 0,[function(){return a++,c.apply(null,arguments)}].concat(l)),b=n((function(){for(var n=[],e=x.length,r=0;r<e;r++)n.push(x[r].apply(null,arguments));return i=f.apply(null,n)}));return Object.assign(b,{resultFunc:c,memoizedResultFunc:f,dependencies:x,lastResult:function(){return i},recomputations:function(){return a},resetRecomputations:function(){return a=0}}),b};return o}var v,y,w,Z,j=m(g),k=function(n){return n.contactsUser.contacts.items},C=function(n){return n.filterUser.filter},z=function(n){return n.contactsUser.contacts.isLoading},P=function(n){return n.contactsUser.contacts.error},A=function(n){return n.contactsUser.contacts.items.length},E=j([k,C],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),N=r(184);function S(){var n=(0,i.useState)(""),e=(0,c.Z)(n,2),r=e[0],t=e[1],o=(0,i.useState)(""),u=(0,c.Z)(o,2),d=u[0],s=u[1],f=(0,a.I0)(),b=function(n){var e=n.target,r=e.name,o=e.value;switch(r){case"name":t(o);break;case"number":s(o)}},g=(0,a.v9)(k).some((function(n){return n.name.toLowerCase()===r.toLowerCase()})),h=function(){t(""),s("")};return(0,N.jsxs)(p,{onSubmit:function(n){if(n.preventDefault(),g)return alert("This name is already in the contacts list."),void h();f((0,x.uK)({name:r,number:d})),h()},children:[(0,N.jsxs)(l,{children:["Name",(0,N.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces.  For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:r,onChange:b})]}),(0,N.jsxs)(l,{children:["Number",(0,N.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:d,onChange:b})]}),(0,N.jsx)("button",{type:"submit",children:"Add contact"})]})}var L,F,q,I,M,U,O,$=s.ZP.button(v||(v=(0,d.Z)(["\n  margin-left: 10px;\n  padding: 4px 8px;\n  font-size: 14px;\n  color: rgb(245 29 29);\n  font-weight: bold;\n  border: 1px solid rgb(245 29 29);\n  border-radius: 4px;\n  cursor: pointer;\n  background-color: white;\n  box-shadow: rgba(0, 0, 0, 0.12) 0px 0px 1px, rgba(0, 0, 0, 0.14) 0px 0px 1px,\n    rgba(0, 0, 0, 0.2) 0px 1px 0px;\n  &:active {\n    background-color: rgb(245 29 29);\n    color: #ffffff;\n  }\n"]))),_=s.ZP.p(y||(y=(0,d.Z)(["\n  font-size: 18px;\n  margin-left: 10px;\n"]))),D=s.ZP.p(w||(w=(0,d.Z)(["\n  font-size: 18px;\n  margin-left: 5px;\n"]))),R=s.ZP.button(Z||(Z=(0,d.Z)(["\n  margin-left: 10px;\n  padding: 4px 8px;\n  font-size: 14px;\n  color: rgb(34 155 15);\n  font-weight: bold;\n  border: 1px solid rgb(34 155 15);\n  border-radius: 4px;\n  cursor: pointer;\n  background-color: white;\n  box-shadow: rgba(0, 0, 0, 0.12) 0px 0px 1px, rgba(0, 0, 0, 0.14) 0px 0px 1px,\n    rgba(0, 0, 0, 0.2) 0px 1px 0px;\n  &:active {\n    background-color: rgb(34 155 15);\n    color: #ffffff;\n  }\n"]))),T=s.ZP.div(L||(L=(0,d.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1200;\n"]))),B=s.ZP.div(F||(F=(0,d.Z)(["\n  width: 500px;\n  background-color: #ffff;\n  padding: 20px;\n  border: 2px solid rgb(156 72 35);\n  border-radius: 4px;\n"]))),J=s.ZP.button(q||(q=(0,d.Z)(["\n  padding: 4px 8px;\n  font-size: 14px;\n  color: rgb(245 29 29);\n  font-weight: bold;\n  border: 1px solid rgb(245 29 29);\n  border-radius: 4px;\n  cursor: pointer;\n  background-color: white;\n  box-shadow: rgba(0, 0, 0, 0.12) 0px 0px 1px, rgba(0, 0, 0, 0.14) 0px 0px 1px,\n    rgba(0, 0, 0, 0.2) 0px 1px 0px;\n  &:active {\n    background-color: rgb(245 29 29);\n    color: #ffffff;\n  }\n"]))),K=s.ZP.h2(I||(I=(0,d.Z)(["\n  font-size: 28px;\n  margin-bottom: 20px;\n  text-align: center;\n"]))),Y=s.ZP.div(M||(M=(0,d.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 20px;\n"])));function G(n){var e=n.title,r=n.closeModal,t=n.children;(0,i.useEffect)((function(){return window.addEventListener("keydown",o),function(){window.removeEventListener("keydown",o)}}));var o=function(n){"Escape"===n.code&&r()};return(0,N.jsx)(T,{onClick:function(n){n.currentTarget===n.target&&r()},children:(0,N.jsxs)(B,{children:[e&&(0,N.jsx)(K,{children:e}),t,(0,N.jsx)(Y,{children:(0,N.jsx)(J,{type:"button",onClick:r,children:"Cancel"})})]})})}var H,W,Q,V,X=s.ZP.form(U||(U=(0,d.Z)(["\n  padding: 10px;\n  border: 2px solid rgb(34 155 15);\n  border-radius: 4px;\n  button {\n    padding: 4px 8px;\n    font-size: 14px;\n    color: rgb(34 155 15);\n    font-weight: bold;\n    border: 1px solid rgb(34 155 15);\n    border-radius: 4px;\n    cursor: pointer;\n    background-color: white;\n    box-shadow: rgba(0, 0, 0, 0.12) 0px 0px 1px, rgba(0, 0, 0, 0.14) 0px 0px 1px,\n      rgba(0, 0, 0, 0.2) 0px 1px 0px;\n    &:active {\n      background-color: rgb(34 155 15);\n      color: #ffffff;\n    }\n    &:disabled {\n      background-color: lightgray;\n      cursor: not-allowed;\n    }\n  }\n"]))),nn=s.ZP.label(O||(O=(0,d.Z)(["\n  font-size: 20px;\n  margin-bottom: 20px;\n  display: flex;\n  flex-direction: column;\n  input {\n    max-width: 450px;\n    padding: 4px;\n    margin-top: 6px;\n    border: 1px solid rgb(34 155 15);\n    border-radius: 4px;\n    &:focus {\n      border-color: rgb(99, 149, 241, 0.6);\n      outline: 2px rgba(99, 149, 241, 0.6);\n      outline-style: solid;\n    }\n  }\n"]))),en=r(5264),rn=function(n){var e=n.editName,r=n.editNumber,t=n.id,o=n.closeModal,u=(0,i.useState)(e),d=(0,c.Z)(u,2),s=d[0],p=d[1],l=(0,i.useState)(r),f=(0,c.Z)(l,2),b=f[0],g=f[1],h=(0,i.useState)(!0),m=(0,c.Z)(h,2),v=m[0],y=m[1],w=(0,a.I0)(),Z=function(n){var t=n.target,o=t.name,i=t.value;switch(o){case"name":p(i);break;case"number":g(i)}o===e&&b===r||y(!1)},j=(0,a.v9)(k).some((function(n){return n.name.toLowerCase()===s.toLowerCase()})),C=function(){p(""),g("")};return(0,N.jsxs)(X,{onSubmit:function(n){n.preventDefault(),j?en.Notify.failure("Such a name already exists! When changing the number, you must change the name!"):(w((0,x.mP)({name:s,number:b,id:t})),C(),o())},children:[(0,N.jsxs)(nn,{children:["Name",(0,N.jsx)("input",{type:"text",name:"name",required:!0,value:s,onChange:Z})]}),(0,N.jsxs)(nn,{children:["Number",(0,N.jsx)("input",{type:"tel",name:"number",required:!0,value:b,onChange:Z})]}),(0,N.jsx)("button",{disabled:v,type:"submit",children:"Change"})]})},tn=function(n){var e=n.user,r=e.name,t=e.number,o=e.id,u=(0,a.I0)(),d=(0,i.useState)(!1),s=(0,c.Z)(d,2),p=s[0],l=s[1],f=function(){l(!1)};return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(R,{onClick:function(){l(!0)},children:"Edit"}),(0,N.jsxs)(_,{children:[r,":"]}),(0,N.jsx)(D,{children:t}),(0,N.jsx)($,{onClick:function(){return u((0,x.GK)(o))},children:"Delete"}),p&&(0,N.jsx)(G,{title:"Edit contact",closeModal:f,children:(0,N.jsx)(rn,{editName:r,editNumber:t,id:o,closeModal:f})})]})},on=s.ZP.ul(H||(H=(0,d.Z)(["\n  margin-top: 15px;\n"]))),an=s.ZP.li(W||(W=(0,d.Z)(["\n  padding: 5px;\n  margin-bottom: 5px;\n  display: flex;\n  align-items: center;\n  &::before {\n    content: '';\n    background: black;\n    width: 6px;\n    height: 6px;\n    border-radius: 100%;\n  }\n"]))),un=function(){var n=(0,a.v9)(E);return(0,N.jsx)(on,{children:n.map((function(n){return(0,N.jsx)(an,{children:(0,N.jsx)(tn,{user:n})},n.id)}))})},cn=s.ZP.p(Q||(Q=(0,d.Z)(["\n  font-weight: bold;\n  font-size: 18px;\n  margin-top: 20px;\n"]))),dn=s.ZP.input(V||(V=(0,d.Z)(["\n  max-width: 100%;\n  padding: 4px;\n  margin-top: 6px;\n  border: 1px solid rgb(0 0 0);\n  border-radius: 4px;\n  &:focus {\n    border-color: rgb(99, 149, 241, 0.6);\n    outline: 2px rgba(99, 149, 241, 0.6);\n    outline-style: solid;\n  }\n"]))),sn=r(6895),pn=function(){var n=(0,a.I0)(),e=(0,a.v9)(C);return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(cn,{children:"Find contacts by name"}),(0,N.jsx)(dn,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces.  For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",value:e,onChange:function(e){return n((0,sn.Hg)(e.target.value.trim()))}})]})},ln=r(3742),xn=r(9677);function fn(){var n=(0,a.v9)(A),e=(0,a.I0)(),r=(0,a.v9)(z),t=(0,a.v9)(P);return(0,i.useEffect)((function(){e((0,x.yF)())}),[e]),(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(u.q,{children:(0,N.jsx)("title",{children:"Your contacts"})}),(0,N.jsx)(xn.$,{title:"Add new contact",children:(0,N.jsx)(S,{})}),r&&!t&&ln.Loading.arrows(),!r&&ln.Loading.remove(),n>0&&(0,N.jsxs)(xn.$,{title:"Your contacts",children:[(0,N.jsx)(pn,{}),(0,N.jsx)(un,{})]})]})}}}]);
//# sourceMappingURL=739.36d71a4c.chunk.js.map