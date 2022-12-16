"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[829],{8514:function(n,e,t){t.d(e,{t:function(){return j},W:function(){return y}});var r,o,a,i,c=t(885),u=t(2791),s=t(9434),l=t(168),d=t(7691),f=d.ZP.form(r||(r=(0,l.Z)(["\n  float: left;\n  margin-right: 30px;\n"]))),p=d.ZP.label(o||(o=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 20px;\n"]))),m=d.ZP.input(a||(a=(0,l.Z)(["\n  display: block;\n  margin: 0 0 15px 0;\n  padding: 10px;\n  width: 250px;\n  border: 1px solid #ccc;\n"]))),v=d.ZP.button(i||(i=(0,l.Z)(["\n  cursor: pointer;\n  padding: 10px 30px;\n  background: #f8a035;\n  color: #fff;\n  border: none;\n  border-radius: 4px;\n  transition: 250ms;\n  &:hover {\n    background: #dd7f0c;\n  }\n"]))),h=t(2286),x=t(208),Z=t(9253),g=t(184),j=function(){var n=(0,u.useState)(""),e=(0,c.Z)(n,2),t=e[0],r=e[1],o=(0,u.useState)(""),a=(0,c.Z)(o,2),i=a[0],l=a[1],d=(0,s.v9)(h.Af),j=(0,s.I0)(),y=(0,u.useState)(!1),b=(0,c.Z)(y,2),C=b[0],w=b[1],k=function(n){var e=n.currentTarget,t=e.name,o=e.value;switch(t){case"name":r(o);break;case"number":l(o);break;default:throw new Error("Not supported type")}};return(0,g.jsxs)(g.Fragment,{children:[C&&(0,g.jsx)(Z.r,{isOpen:C,handleClose:function(){w(!1)},text:"Contact created",type:"success"}),(0,g.jsxs)(f,{onSubmit:function(n){if(n.preventDefault(),function(n){var e=n.toLowerCase();return d.find((function(n){return n.name.toLowerCase().includes(e)}))}(t))alert("".concat(t," is already in contacts."));else{var e={name:t,number:i};j((0,x.uK)(e)),w(!0),r(""),l("")}},children:[(0,g.jsx)(p,{children:(0,g.jsx)(m,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:t,onChange:k,placeholder:"Name",autoComplete:"off"})}),(0,g.jsx)(p,{children:(0,g.jsx)(m,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:i,onChange:k,placeholder:"Number",autoComplete:"off"})}),(0,g.jsx)(v,{title:"add contact",type:"submit",children:"Add contact"})]})]})},y=function(){return(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)(f,{children:[(0,g.jsx)(p,{children:(0,g.jsx)(m,{placeholder:"Name",autoComplete:"off",disabled:!0})}),(0,g.jsx)(p,{children:(0,g.jsx)(m,{placeholder:"Number",autoComplete:"off",disabled:!0})})]})})}},9253:function(n,e,t){t.d(e,{r:function(){return i}});var r=t(1647),o=t(1508),a=t(184),i=function(n){var e=n.isOpen,t=void 0===e||e,i=n.handleClose,c=n.text,u=n.position,s=void 0===u?{vertical:"bottom",horizontal:"center"}:u,l=n.type;return(0,a.jsx)(r.Z,{open:t,onClose:i,autoHideDuration:3e3,anchorOrigin:s,children:(0,a.jsx)(o.Z,{onClose:i,severity:l,children:c})})}},8829:function(n,e,t){t.r(e),t.d(e,{default:function(){return W}});var r=t(2791),o=t(9434),a=t(8514),i=t(6895),c=t(2286),u=t(803),s=t(8875),l=t(184),d=function(){var n=(0,o.v9)(c.Gd),e=(0,o.I0)();return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(u.Z,{component:"section",maxWidth:"sm",sx:{marginTop:1,display:"flex",flexDirection:"column",alignItems:"center"},children:(0,l.jsx)(s.Z,{value:n,onChange:function(n){e((0,i.k)(n.currentTarget.value))},name:"filter",fullWidth:!0,id:"filter",label:"Find by name",sx:{marginTop:2}})})})},f=t(208),p=t(5953),m=t(7462),v=t(3366),h=t(8182),x=t(4419),Z=t(277),g=t(5513),j=t(286),y=t(5878),b=t(1217);function C(n){return(0,b.Z)("MuiCard",n)}(0,y.Z)("MuiCard",["root"]);var w=["className","raised"],k=(0,Z.ZP)(j.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(n,e){return e.root}})((function(){return{overflow:"hidden"}})),A=r.forwardRef((function(n,e){var t=(0,g.Z)({props:n,name:"MuiCard"}),r=t.className,o=t.raised,a=void 0!==o&&o,i=(0,v.Z)(t,w),c=(0,m.Z)({},t,{raised:a}),u=function(n){var e=n.classes;return(0,x.Z)({root:["root"]},C,e)}(c);return(0,l.jsx)(k,(0,m.Z)({className:(0,h.Z)(u.root,r),elevation:a?8:void 0,ref:e,ownerState:c},i))}));function N(n){return(0,b.Z)("MuiCardContent",n)}(0,y.Z)("MuiCardContent",["root"]);var S=["className","component"],z=(0,Z.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(n,e){return e.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),M=r.forwardRef((function(n,e){var t=(0,g.Z)({props:n,name:"MuiCardContent"}),r=t.className,o=t.component,a=void 0===o?"div":o,i=(0,v.Z)(t,S),c=(0,m.Z)({},t,{component:a}),u=function(n){var e=n.classes;return(0,x.Z)({root:["root"]},N,e)}(c);return(0,l.jsx)(z,(0,m.Z)({as:a,className:(0,h.Z)(u.root,r),ownerState:c,ref:e},i))})),P=t(3978),F=t(4565);function R(n){return(0,b.Z)("MuiCardActions",n)}(0,y.Z)("MuiCardActions",["root","spacing"]);var L=["disableSpacing","className"],I=(0,Z.ZP)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:function(n,e){var t=n.ownerState;return[e.root,!t.disableSpacing&&e.spacing]}})((function(n){var e=n.ownerState;return(0,m.Z)({display:"flex",alignItems:"center",padding:8},!e.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),D=r.forwardRef((function(n,e){var t=(0,g.Z)({props:n,name:"MuiCardActions"}),r=t.disableSpacing,o=void 0!==r&&r,a=t.className,i=(0,v.Z)(t,L),c=(0,m.Z)({},t,{disableSpacing:o}),u=function(n){var e=n.classes,t={root:["root",!n.disableSpacing&&"spacing"]};return(0,x.Z)(t,R,e)}(c);return(0,l.jsx)(I,(0,m.Z)({className:(0,h.Z)(u.root,a),ownerState:c,ref:e},i))})),E=t(7205),O=t(5747);function T(n){var e=n.id,t=n.name,r=n.number,a=(0,o.I0)();return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(p.ZP,{item:!0,children:(0,l.jsxs)(A,{sx:{minWidth:275},children:[(0,l.jsx)(M,{sx:{paddingBottom:0},children:(0,l.jsxs)(p.ZP,{container:!0,spacing:2,children:[(0,l.jsx)(p.ZP,{item:!0,children:(0,l.jsx)(P.Z,{alt:t,src:"#",sx:{m:1,bgcolor:"secondary.main"}})}),(0,l.jsxs)(p.ZP,{item:!0,children:[(0,l.jsx)(F.Z,{variant:"h5",children:t}),(0,l.jsx)(F.Z,{variant:"h6",color:"text.secondary",gutterBottom:!0,children:r})]})]})}),(0,l.jsx)(D,{children:(0,l.jsx)(p.ZP,{container:!0,justifyContent:"center",children:(0,l.jsx)(p.ZP,{item:!0,sx:{pb:1},children:(0,l.jsx)(E.Z,{size:"small",variant:"contained",type:"button",onClick:function(){a((0,f.GK)(e))},startIcon:(0,l.jsx)(O.Z,{}),children:"Delete"})})})})]})})})}var q=t(9253),_=t(6015),B=t(6580);function H(){var n=(0,o.v9)(c.xU),e=(0,o.v9)(c.zh),t=(0,o.v9)(c.bn);return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(u.Z,{component:"section",sx:{marginTop:2},children:(0,l.jsxs)(_.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[n&&!e&&(0,l.jsx)(B.Z,{sx:{mt:4}}),e&&(0,l.jsx)("p",{children:e}),t.length>0&&!e?(0,l.jsx)(p.ZP,{container:!0,spacing:2,sx:{marginTop:1},children:t.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,l.jsx)(T,{id:e,name:t,number:r},e)}))}):!n&&(0,l.jsx)(q.r,{type:"error",text:"Not found any contact :("})]})})})}var W=function(){var n=(0,o.I0)();return(0,r.useEffect)((function(){n((0,f.yF)())}),[n]),(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(_.Z,{sx:{pt:2,pb:4},children:[(0,l.jsx)(a.t,{}),(0,l.jsxs)(_.Z,{sx:{marginTop:2,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,l.jsx)(F.Z,{component:"h2",variant:"h4",children:"Contacts"}),(0,l.jsx)(d,{}),(0,l.jsx)(H,{})]})]})})}},2286:function(n,e,t){t.d(e,{Af:function(){return s},zh:function(){return d},Gd:function(){return f},bn:function(){return p},xU:function(){return l}});var r="NOT_FOUND";var o=function(n,e){return n===e};function a(n,e){var t="object"===typeof e?e:{equalityCheck:e},a=t.equalityCheck,i=void 0===a?o:a,c=t.maxSize,u=void 0===c?1:c,s=t.resultEqualityCheck,l=function(n){return function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,o=0;o<r;o++)if(!n(e[o],t[o]))return!1;return!0}}(i),d=1===u?function(n){var e;return{get:function(t){return e&&n(e.key,t)?e.value:r},put:function(n,t){e={key:n,value:t}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(l):function(n,e){var t=[];function o(n){var o=t.findIndex((function(t){return e(n,t.key)}));if(o>-1){var a=t[o];return o>0&&(t.splice(o,1),t.unshift(a)),a.value}return r}return{get:o,put:function(e,a){o(e)===r&&(t.unshift({key:e,value:a}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(u,l);function f(){var e=d.get(arguments);if(e===r){if(e=n.apply(null,arguments),s){var t=d.getEntries(),o=t.find((function(n){return s(n.value,e)}));o&&(e=o.value)}d.put(arguments,e)}return e}return f.clearCache=function(){return d.clear()},f}function i(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function c(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var o=function(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];var a,c=0,u={memoizeOptions:void 0},s=r.pop();if("object"===typeof s&&(u=s,s=r.pop()),"function"!==typeof s)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof s+"]");var l=u,d=l.memoizeOptions,f=void 0===d?t:d,p=Array.isArray(f)?f:[f],m=i(r),v=n.apply(void 0,[function(){return c++,s.apply(null,arguments)}].concat(p)),h=n((function(){for(var n=[],e=m.length,t=0;t<e;t++)n.push(m[t].apply(null,arguments));return a=v.apply(null,n)}));return Object.assign(h,{resultFunc:s,memoizedResultFunc:v,dependencies:m,lastResult:function(){return a},recomputations:function(){return c},resetRecomputations:function(){return c=0}}),h};return o}var u=c(a),s=function(n){return n.contacts.items.contacts},l=function(n){return n.contacts.items.isLoading},d=function(n){return n.contacts.items.error},f=function(n){return n.contacts.filter},p=u([s,f],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))}))},5747:function(n,e,t){var r=t(4836);e.Z=void 0;var o=r(t(5649)),a=t(184),i=(0,o.default)((0,a.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm3.17-6.41a.9959.9959 0 0 1 0-1.41c.39-.39 1.02-.39 1.41 0L12 12.59l1.41-1.41c.39-.39 1.02-.39 1.41 0s.39 1.02 0 1.41L13.41 14l1.41 1.41c.39.39.39 1.02 0 1.41s-1.02.39-1.41 0L12 15.41l-1.41 1.41c-.39.39-1.02.39-1.41 0a.9959.9959 0 0 1 0-1.41L10.59 14l-1.42-1.41zM18 4h-2.5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1z"}),"DeleteForeverRounded");e.Z=i}}]);
//# sourceMappingURL=829.3141b1d7.chunk.js.map