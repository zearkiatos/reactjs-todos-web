(this["webpackJsonpreactjs-todos-web"]=this["webpackJsonpreactjs-todos-web"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(1),c=n(6),r=n.n(c),a=(n(13),n(2)),s=n(3),u=n(4),i=n(8),l=n(7),d=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(e){var o;Object(s.a)(this,n),(o=t.call(this)).storageName=e;var c=o.find();return o.save(c),o}return Object(u.a)(n,[{key:"save",value:function(e){localStorage.setItem(this.storageName,JSON.stringify(e))}},{key:"find",value:function(){var e=localStorage.getItem(this.storageName)||"[]";return JSON.parse(e)}}]),n}(function(){function e(){Object(s.a)(this,e)}return Object(u.a)(e,[{key:"save",value:function(e){throw new Error("Abstract Method has no implementation")}},{key:"find",value:function(){throw new Error("Abstract Method has no implementation")}},{key:"remove",value:function(e){throw new Error("Abstract Method has no implementation")}}]),e}()),j=function(e){var t=new d(e);return[t.find(),function(e){return t.save(e)}]},h=(n(14),n(0)),f=function(e){var t=e.total,n=e.completed;return Object(h.jsxs)("h2",{className:"todo-counter",children:["You've completed ",n," of ",t," TODOs \u2705"]})},m=(n(16),function(e){var t=e.searchValue,n=e.setSearchValue;return Object(h.jsx)("input",{className:"todo-search",placeholder:"Search TODOs \ud83d\udcdd",value:t,onChange:function(e){n(e.target.value),console.log(t)}})}),b=(n(17),function(e){var t=e.children;return Object(h.jsx)("section",{children:Object(h.jsx)("ul",{children:t})})}),O=(n(18),function(e){var t=e.text,n=e.completed,o=e.onComplete,c=e.onDelete;return Object(h.jsxs)("li",{className:"todo-item",children:[Object(h.jsx)("span",{className:"icon icon-check ".concat(n&&"icon-check-active"),onClick:function(){return o(t,n)},children:"\u2705"}),Object(h.jsx)("p",{className:"todo-item-p ".concat(n&&"todo-item-p-complete"),children:t}),Object(h.jsx)("span",{className:"icon icon-delete",onClick:function(){return c(t)},children:"x"})]})}),p=function(e){return function(e){var t=e.todos,n=e.setTodos;return t?t.map((function(e){var o=j("TODOS"),c=Object(a.a)(o,2),r=(c[0],c[1]);return console.log(r),Object(h.jsx)(O,{text:e.text,completed:e.completed,onComplete:function(e,o){alert("You complete the todo ".concat(e));var c=t.map((function(t){return t.text===e?{text:e,completed:!o}:t}));n(c),r(c)},onDelete:function(e){var o=t.filter((function(t){return t.text!==e}));n(o),r(o)}},e.text)})):""}(e)},v=(n(19),function(){return Object(h.jsx)("button",{className:"create-todo-button",type:"button",onClick:function(){return alert("Here should open the modal")},children:"+"})}),x=function(e){var t=e.totalTodos,n=e.completedTodos,c=e.searchValue,r=e.todosFiltered,a=e.setSearchValue,s=e.setTodos;return Object(h.jsxs)(o.Fragment,{children:[Object(h.jsx)(f,{total:t,completed:n}),Object(h.jsx)(m,{searchValue:c,setSearchValue:a}),Object(h.jsx)(b,{children:Object(h.jsx)(p,{todos:r,setTodos:s})}),Object(h.jsx)(v,{})]})},g=function(){var e=j("TODOS"),t=Object(a.a)(e,1)[0],n=Object(o.useState)(""),c=Object(a.a)(n,2),r=c[0],s=c[1],u=Object(o.useState)(t),i=Object(a.a)(u,2),l=i[0],d=i[1],f=l.filter((function(e){return e.completed})).length,m=l.length,b=l;return r&&(b=t.filter((function(e){return e.text.toLowerCase().includes(r)}))),Object(h.jsx)(x,{setSearchValue:s,setTodos:d,completedTodos:f,totalTodos:m,todosFiltered:b,searchValue:r})};r.a.render(Object(h.jsx)(g,{}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.5e145437.chunk.js.map