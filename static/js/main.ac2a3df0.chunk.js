(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){e.exports={form:"Profile_form__MaRNq"}},function(e,t,n){},function(e,t,n){e.exports={container:"Container_container__tkwVF"}},function(e,t,n){e.exports={logo:"Logo_logo__fDECJ"}},,,,,,function(e,t,n){},function(e,t,n){e.exports={section:"Section_section__2CiOU"}},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),r=n.n(c),l=n(9),i=n.n(l),s=(n(20),n(2)),o=n(3),h=n(5),j=n(4),u=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={users:[{name:"Ostap",surname:"Pluzhnik",phone:"+380934043239"}]},e.onBtnClick=function(e){"\u0412\u0445\u043e\u0434"===e.target.textContent?console.log("\u043b\u043e\u0433\u0438\u043d"):console.log("\u0440\u0435\u0433\u0430")},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("section",{children:[Object(a.jsx)("button",{type:"button",onClick:this.onBtnClick,children:"\u0412\u0445\u043e\u0434"}),Object(a.jsx)("button",{type:"button",onClick:this.onBtnClick,children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442"})]})})}}]),n}(c.Component),b=n(6),d=n(10),m=n.n(d),O=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={tel:""},e.handleChange=function(t){var n=t.target;e.setState(Object(b.a)({},n.name,n.value))},e.handleSubmit=function(t){t.preventDefault(),alert(JSON.stringify(e.state,null,2))},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state.tel;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:m.a.header,children:Object(a.jsx)("button",{type:"button",children:"\u041d\u0430\u0437\u0430\u0434"})}),Object(a.jsxs)("form",{action:"submit",onSubmit:this.handleSubmit,children:[Object(a.jsx)("label",{htmlFor:"userPhone",children:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430"}),Object(a.jsx)("input",{type:"tel",name:"tel",placeholder:"+380",value:e,onChange:this.handleChange}),Object(a.jsx)("input",{type:"submit",value:"\u0414\u0430\u043b\u044c\u0448\u0435"})]})]})}}]),n}(c.Component),p=n(8),x=n.n(p),v=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={name:"",surname:"",tel:""},e.handleChange=function(t){var n=t.target;e.setState(Object(b.a)({},n.name,n.value))},e.handleSubmit=function(t){t.preventDefault(),alert(JSON.stringify(e.state,null,2))},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.surname,c=e.tel;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:x.a.header,children:Object(a.jsx)("button",{type:"button",children:"\u041d\u0430\u0437\u0430\u0434"})}),Object(a.jsxs)("form",{action:"submit",className:x.a.form,onSubmit:this.handleSubmit,children:[Object(a.jsx)("label",{htmlFor:"name",children:"\u0418\u043c\u044f"}),Object(a.jsx)("input",{type:"text",name:"name",value:t,onChange:this.handleChange}),Object(a.jsx)("label",{htmlFor:"surname",children:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f"}),Object(a.jsx)("input",{type:"text",name:"surname",value:n,onChange:this.handleChange}),Object(a.jsx)("label",{htmlFor:"tel",children:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430"}),Object(a.jsx)("input",{type:"tel",name:"tel",placeholder:"+380",value:c,onChange:this.handleChange}),Object(a.jsx)("input",{type:"submit",value:"\u0414\u0430\u043b\u044c\u0448\u0435"})]})]})}}]),n}(c.Component),g=n(11),f=n.n(g),C=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={avatar:"",height:"",weight:"",birthDate:""},e.handleChange=function(t){var n=t.target;e.setState(Object(b.a)({},n.name,n.value))},e.handleSubmit=function(t){t.preventDefault(),alert(JSON.stringify(e.state,null,2))},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state,t=e.avatar,n=e.height,c=e.weight,r=e.birthDate;return Object(a.jsxs)("form",{className:f.a.form,onSubmit:this.handleSubmit,children:[Object(a.jsxs)("label",{htmlFor:"",children:["\u0421\u043c\u0435\u043d\u0438\u0442\u044c \u0444\u043e\u0442\u043e",Object(a.jsx)("input",{type:"file",vlaue:t,onChange:this.handleChange,name:"avatar"})]}),Object(a.jsxs)("label",{htmlFor:"",children:["\u0420\u043e\u0441\u0442",Object(a.jsx)("input",{type:"text",vlaue:n,onChange:this.handleChange,placeholder:"170\u0441\u043c",name:"height"})]}),Object(a.jsxs)("label",{htmlFor:"",children:["\u0412\u0435\u0441",Object(a.jsx)("input",{type:"text",vlaue:c,onChange:this.handleChange,placeholder:"70\u043a\u0433",name:"weight"})]}),Object(a.jsxs)("label",{htmlFor:"",children:["\u0414\u0430\u0442\u0430 \u0420\u043e\u0436\u0434\u0435\u043d\u0438\u044f",Object(a.jsx)("input",{type:"date",vlaue:r,onChange:this.handleChange,placeholder:"01.01.1990",name:"birthDate"})]}),Object(a.jsx)("input",{type:"submit",value:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})}}]),n}(c.Component),y=n(12),S=n.n(y),k=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={title:"",comment:"",repeat:"",color:"#390093",remind:!0},e.handleSubmit=function(t){t.preventDefault(),alert(JSON.stringify(e.state,null,2))},e.handleChange=function(t){var n=t.target,a=n.name,c=n.value,r=n.checked,l=n.type;e.setState(Object(b.a)({},a,"checkbox"===l?r:c))},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state,t=e.title,n=e.comment,c=e.repeat,r=e.color,l=e.remind;return Object(a.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(a.jsxs)("div",{className:S.a.header,style:{backgroundColor:this.state.color},children:[Object(a.jsx)("button",{type:"button",children:"X"}),Object(a.jsx)("h2",{children:"\u041d\u043e\u0432\u0430\u044f \u043f\u0440\u0438\u0432\u044b\u0447\u043a\u0430"}),Object(a.jsx)("label",{htmlFor:"title"}),Object(a.jsx)("input",{type:"text",name:"title",value:t,onChange:this.handleChange})]}),Object(a.jsx)("label",{htmlFor:"comment"}),Object(a.jsx)("input",{type:"textarea",name:"comment",value:n,onChange:this.handleChange}),Object(a.jsx)("label",{htmlFor:"repeat"}),Object(a.jsxs)("select",{name:"repeat",value:c,onChange:this.handleChange,children:[Object(a.jsx)("option",{value:"",disabled:!0,children:"..."}),Object(a.jsx)("option",{value:"1",children:"\u041a\u0430\u0436\u0434\u044b\u0439 \u0447\u0430\u0441 \u1433"}),Object(a.jsx)("option",{value:"2",children:"\u041a\u0430\u0436\u0434\u044b\u0435 \u0434\u0432\u0430 \u0447\u0430\u0441\u0430 \u1433"})]}),Object(a.jsx)("label",{htmlFor:"color"}),Object(a.jsx)("input",{type:"color",name:"color",value:r,onChange:this.handleChange}),Object(a.jsx)("label",{htmlFor:"remind",children:"\u041d\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c \u043c\u043d\u0435"}),Object(a.jsx)("input",{type:"checkbox",name:"remind",checked:l,onChange:this.handleChange}),Object(a.jsx)("button",{type:"submit",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})}}]),n}(c.Component),F=n(13),w=n.n(F),N=function(e){var t=e.children;return Object(a.jsx)("div",{className:w.a.container,children:t})},_=n(14),D=n.n(_),J=n.p+"static/media/logo.125a4ecd.png",A=function(e){return Object(a.jsx)("a",{href:"null",children:Object(a.jsx)("img",{src:J,alt:"logo",className:D.a.logo})})};A.defaultProps={};var P=A,B=(n(21),function(e){var t=e.children,n=e.sectionClass;return Object(a.jsx)("div",{className:n,children:t})});B.defaultProps={sectionClass:"section"};var E=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("header",{children:Object(a.jsx)(N,{children:Object(a.jsx)(P,{})})}),Object(a.jsx)("main",{children:Object(a.jsx)(N,{children:Object(a.jsx)(u,{})})}),Object(a.jsx)("footer",{}),Object(a.jsx)(O,{}),Object(a.jsx)(v,{}),Object(a.jsx)(C,{}),Object(a.jsx)(k,{})]})}}]),n}(c.Component);i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(E,{})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.ac2a3df0.chunk.js.map