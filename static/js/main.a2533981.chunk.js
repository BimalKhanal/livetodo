(this.webpackJsonptodolive=this.webpackJsonptodolive||[]).push([[0],{54:function(e,t,n){},62:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),s=n(7),j=n.n(s),r=(n(54),n(46)),o=n(33),l=n(45),a=n.n(l),d=n(85),b=n(84),u=n(44),O=n.n(u),x=n(2),h=function(e){return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:"todo_style",children:[Object(x.jsx)(b.a,{title:"Delete Item",children:Object(x.jsx)(d.a,{onClick:function(){e.onSelect(e.id)},className:"btn_red",children:Object(x.jsx)(O.a,{})})}),Object(x.jsxs)("li",{children:[" ",e.text," "]})]})})},f=(n(62),function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],i=t[1],s=Object(c.useState)([]),j=Object(o.a)(s,2),l=j[0],u=j[1],O=function(e){console.log("deleted"),u((function(t){return t.filter((function(t,n){return n!==e}))}))};return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("div",{className:"main_div",children:Object(x.jsxs)("div",{className:"center_div",children:[Object(x.jsx)("br",{}),Object(x.jsx)("h1",{children:" ToDo List"}),Object(x.jsx)("br",{}),Object(x.jsx)("input",{type:"text",placeholder:"Add Items",value:n,onChange:function(e){i(e.target.value)}}),Object(x.jsx)(b.a,{title:"Add Items",children:Object(x.jsx)(d.a,{onClick:function(){u((function(e){return[].concat(Object(r.a)(e),[n])})),i("")},className:"btn_green",children:Object(x.jsx)(a.a,{})})}),Object(x.jsx)("ol",{children:l.map((function(e,t){return Object(x.jsx)(h,{id:t,text:e,onSelect:O},t)}))})]})})})});var m=function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(f,{})})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,87)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,j=t.getTTFB;n(e),c(e),i(e),s(e),j(e)}))};j.a.render(Object(x.jsx)(i.a.StrictMode,{children:Object(x.jsx)(m,{})}),document.getElementById("root")),g()}},[[64,1,2]]]);
//# sourceMappingURL=main.a2533981.chunk.js.map