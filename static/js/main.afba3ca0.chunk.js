(this["webpackJsonpreactjs-todos-web"]=this["webpackJsonpreactjs-todos-web"]||[]).push([[0],[,,,function(e){e.exports=JSON.parse('[{"text":"Cut onions","completed":true},{"text":"Take the reactjs introduction course","completed":false},{"text":"Cry with the crier \ud83d\ude2d","completed":true},{"text":"Study reactjs \u269b\ufe0f","completed":false}]')},,,,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),o=c(5),r=c.n(o),s=(c(10),c(4)),u=(c(11),c(0)),a=function(e){var t=e.total,c=e.completed;return Object(u.jsxs)("h2",{className:"todo-counter",children:["You've completed ",c," of ",t," TODOs \u2705"]})},l=(c(13),function(e){var t=e.searchValue,c=e.setSearchValue;return Object(u.jsx)("input",{className:"todo-search",placeholder:"Search TODOs \ud83d\udcdd",value:t,onChange:function(e){c(e.target.value),console.log(t)}})}),i=(c(14),function(e){var t=e.children;return Object(u.jsx)("section",{children:Object(u.jsx)("ul",{children:t})})}),d=(c(15),function(e){var t=e.text,c=e.completed,n=e.onComplete,o=e.onDelete;return Object(u.jsxs)("li",{className:"todo-item",children:[Object(u.jsx)("span",{className:"icon icon-check ".concat(c&&"icon-check-active"),onClick:function(){return n(t,c)},children:"\u2705"}),Object(u.jsx)("p",{className:"todo-item-p ".concat(c&&"todo-item-p-complete"),children:t}),Object(u.jsx)("span",{className:"icon icon-delete",onClick:function(){return o(t)},children:"x"})]})}),j=function(e){return function(e){var t=e.todos,c=e.setTodos;return t.map((function(e){return Object(u.jsx)(d,{text:e.text,completed:e.completed,onComplete:function(e,n){alert("You complete the todo ".concat(e));var o=t.map((function(t){return t.text===e?{text:e,completed:!n}:t}));c(o)},onDelete:function(e){var n=t.filter((function(t){return t.text!==e}));c(n)}},e.text)}))}(e)},p=(c(16),function(){return Object(u.jsx)("button",{className:"create-todo-button",type:"button",onClick:function(){return alert("Here should open the modal")},children:"+"})}),f=c(3),h=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),c=t[0],o=t[1],r=Object(n.useState)(f),d=Object(s.a)(r,2),h=d[0],m=d[1],x=h.filter((function(e){return e.completed})).length,b=h.length,O=h;return c&&(O=f.filter((function(e){return e.text.toLowerCase().includes(c)}))),Object(u.jsxs)(n.Fragment,{children:[Object(u.jsx)(a,{total:b,completed:x}),Object(u.jsx)(l,{searchValue:c,setSearchValue:o}),Object(u.jsx)(i,{children:Object(u.jsx)(j,{todos:O,setTodos:m})}),Object(u.jsx)(p,{})]})};r.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.afba3ca0.chunk.js.map