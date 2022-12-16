"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[110],{8514:function(n,e,t){t.d(e,{t:function(){return y},W:function(){return C}});var r,o,i,a,c,d=t(885),s=t(2791),l=t(9434),u=t(168),p=t(7691),f=p.ZP.form(r||(r=(0,u.Z)(["\n  float: left;\n  margin-right: 30px;\n"]))),x=p.ZP.label(o||(o=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 20px;\n"]))),h=p.ZP.input(i||(i=(0,u.Z)(["\n  display: block;\n  margin: 0 0 15px 0;\n  padding: 10px;\n  width: 250px;\n  border: 1px solid #ccc;\n"]))),m=p.ZP.button(a||(a=(0,u.Z)(["\n  cursor: pointer;\n  padding: 10px 30px;\n  background: #f8a035;\n  color: #fff;\n  border: none;\n  border-radius: 4px;\n  transition: 250ms;\n  &:hover {\n    background: #dd7f0c;\n  }\n"]))),b=p.ZP.button(c||(c=(0,u.Z)(["\n  padding: 10px 30px;\n  background: #ccc;\n  color: #fff;\n  border: none;\n  border-radius: 4px;\n"]))),g=t(6351),v=t(208),j=t(9253),Z=t(184),y=function(){var n=(0,s.useState)(""),e=(0,d.Z)(n,2),t=e[0],r=e[1],o=(0,s.useState)(""),i=(0,d.Z)(o,2),a=i[0],c=i[1],u=(0,l.v9)(g.Af),p=(0,l.I0)(),b=(0,s.useState)(!1),y=(0,d.Z)(b,2),C=y[0],w=y[1],k=function(n){var e=n.currentTarget,t=e.name,o=e.value;switch(t){case"name":r(o);break;case"number":c(o);break;default:throw new Error("Not supported type")}};return(0,Z.jsxs)(Z.Fragment,{children:[C&&(0,Z.jsx)(j.r,{isOpen:C,handleClose:function(){w(!1)},text:"Contact created",type:"success"}),(0,Z.jsxs)(f,{onSubmit:function(n){if(n.preventDefault(),function(n){var e=n.toLowerCase();return u.find((function(n){return n.name.toLowerCase().includes(e)}))}(t))alert("".concat(t," is already in contacts."));else{var e={name:t,number:a};p((0,v.uK)(e)),w(!0),r(""),c("")}},children:[(0,Z.jsx)(x,{children:(0,Z.jsx)(h,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:t,onChange:k,placeholder:"Name",autoComplete:"off"})}),(0,Z.jsx)(x,{children:(0,Z.jsx)(h,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:a,onChange:k,placeholder:"Number",autoComplete:"off"})}),(0,Z.jsx)(m,{title:"add contact",type:"submit",children:"Add contact"})]})]})},C=function(){return(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsxs)(f,{children:[(0,Z.jsx)(x,{children:(0,Z.jsx)(h,{placeholder:"Name",autoComplete:"off",disabled:!0})}),(0,Z.jsx)(x,{children:(0,Z.jsx)(h,{placeholder:"Number",autoComplete:"off",disabled:!0})}),(0,Z.jsx)(b,{title:"add contact",disabled:!0,children:"Add contact"})]})})}},9253:function(n,e,t){t.d(e,{r:function(){return a}});var r=t(1647),o=t(1508),i=t(184),a=function(n){var e=n.isOpen,t=void 0===e||e,a=n.handleClose,c=n.text,d=n.position,s=void 0===d?{vertical:"bottom",horizontal:"center"}:d,l=n.type;return(0,i.jsx)(r.Z,{open:t,onClose:a,autoHideDuration:3e3,anchorOrigin:s,children:(0,i.jsx)(o.Z,{onClose:a,severity:l,children:c})})}},3110:function(n,e,t){t.r(e),t.d(e,{default:function(){return I}});var r,o,i,a=t(2791),c=t(9434),d=t(8514),s=t(6895),l=t(6351),u=t(168),p=t(7691),f=p.ZP.label(r||(r=(0,u.Z)(["\n  padding-top: 30px;\n  float: left;\n  margin-right: 30px;\n"]))),x=p.ZP.input(o||(o=(0,u.Z)(["\n  display: block;\n  margin: 10px 0 15px 0;\n  padding: 10px;\n  width: 250px;\n  border: 1px solid #ccc;\n"]))),h=t(184),m=function(){var n=(0,c.v9)(l.Gd),e=(0,c.I0)();return(0,h.jsxs)(h.Fragment,{children:[" ",(0,h.jsx)(f,{children:(0,h.jsx)(x,{value:n,onChange:function(n){e((0,s.k)(n.currentTarget.value))},name:"filter",placeholder:"Filter",id:"filter",autoComplete:"off"})})]})},b=t(5243),g=t(208),v=t(5747),j=p.ZP.button(i||(i=(0,u.Z)(["\n  cursor: pointer;\n  font-size: 12px;\n  align-self: center;\n  padding: 0 30px;\n  background: #f8a035;\n  color: #fff;\n  border: none;\n  border-radius: 4px;\n  height: auto;\n  height: 30px;\n  transition: 250ms;\n\n  &:hover {\n    background: #dd7f0c;\n  }\n"])));function Z(n){var e=n.id,t=n.name,r=n.number,o=(0,c.I0)();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("p",{children:t}),(0,h.jsx)("p",{children:r}),(0,h.jsx)(j,{size:"small",variant:"contained",type:"button",onClick:function(){o((0,g.GK)(e))},startIcon:(0,h.jsx)(v.Z,{}),children:"Delete"})]})}var y,C,w,k=t(9253),P=p.ZP.ul(y||(y=(0,u.Z)(["\n  overflow: hidden;\n  width: 50vw;\n  border-left: 1px solid #ccc;\n  padding-bottom: 30px;\n  list-style: none;\n"]))),z=p.ZP.li(C||(C=(0,u.Z)(["\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 1px solid #ccc;\n  padding: 20px;\n"]))),A=p.ZP.div(w||(w=(0,u.Z)(["\n  width: 100px;\n  margin: auto;\n"])));function F(){var n=(0,c.v9)(l.xU),e=(0,c.v9)(l.zh),t=(0,c.v9)(l.bn);return(0,h.jsxs)(h.Fragment,{children:[n&&!e&&(0,h.jsx)(A,{children:(0,h.jsx)(b.Z1,{height:"100",width:"100",color:"#f8a035",wrapperStyle:{},wrapperClass:"",visible:!0,ariaLabel:"three-circles-rotating"})}),e&&(0,h.jsx)("p",{children:e}),t.length>0&&!e?(0,h.jsx)(P,{children:t.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,h.jsx)(z,{children:(0,h.jsx)(Z,{id:e,name:t,number:r})},e)}))}):!n&&(0,h.jsx)(k.r,{type:"error",text:"Not found any contact :("})]})}var N=t(4768),L=t(8801),I=function(){var n=(0,c.I0)();return(0,a.useEffect)((function(){n((0,g.yF)())}),[n]),(0,h.jsxs)(N.W,{children:[(0,h.jsxs)(L.$,{children:[(0,h.jsx)(d.t,{}),(0,h.jsx)(m,{})]}),(0,h.jsx)(L.$,{children:(0,h.jsx)(F,{})})]})}},6351:function(n,e,t){t.d(e,{Af:function(){return o},Gd:function(){return c},bn:function(){return d},xU:function(){return i},zh:function(){return a}});var r=t(6916),o=function(n){return n.contacts.items.contacts},i=function(n){return n.contacts.items.isLoading},a=function(n){return n.contacts.items.error},c=function(n){return n.contacts.filter},d=(0,r.P1)([o,c],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))}))},4768:function(n,e,t){t.d(e,{W:function(){return i}});var r,o=t(168),i=t(7691).ZP.div(r||(r=(0,o.Z)(["\n  min-height: calc(100vh - 160px);\n  display: flex;\n  padding: 20px 30px;\n  background-color: #f3f3f3;\n  color: #333;\n  &:link {\n    text-decoration: none;\n  }\n"])))},8801:function(n,e,t){t.d(e,{$:function(){return c},Z:function(){return d}});var r,o,i=t(168),a=t(7691),c=a.ZP.section(r||(r=(0,i.Z)(["\n  padding: 30px 15px;\n  display: flex;\n  flex-direction: column;\n  &:not(:last-child) {\n    margin-bottom: 15px;\n  }\n"]))),d=a.ZP.section(o||(o=(0,i.Z)(["\n  line-height: 1.8;\n  height: 140px;\n  padding: 10px 40px;\n  display: flex;\n  flex-direction: column;\n  border-left: 1px solid #ccc;\n  &:not(:last-child) {\n    margin-bottom: 15px;\n  }\n"])))}}]);
//# sourceMappingURL=110.c55e8c34.chunk.js.map