(this["webpackJsonpreactjs-todos-web"]=this["webpackJsonpreactjs-todos-web"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(1),c=n.n(o),r=n(6),a=n.n(r),s=(n(13),n(2)),i=n(3),u=n(4),l=n(8),d=n(7),j=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var o;Object(i.a)(this,n),(o=t.call(this)).storageName=e;var c=o.find();return o.save(c),o}return Object(u.a)(n,[{key:"save",value:function(e){localStorage.setItem(this.storageName,JSON.stringify(e))}},{key:"find",value:function(){var e=localStorage.getItem(this.storageName)||"[]";return JSON.parse(e)}}]),n}(function(){function e(){Object(i.a)(this,e)}return Object(u.a)(e,[{key:"save",value:function(e){throw new Error("Abstract Method has no implementation")}},{key:"find",value:function(){throw new Error("Abstract Method has no implementation")}},{key:"remove",value:function(e){throw new Error("Abstract Method has no implementation")}}]),e}()),h=function(e){var t=Object(o.useState)(!0),n=Object(s.a)(t,2),c=n[0],r=n[1],a=Object(o.useState)(null),i=Object(s.a)(a,2),u=i[0],l=i[1],d=Object(o.useState)([]),h=Object(s.a)(d,2),f=h[0],O=h[1],b=new j(e),m=function(){var e=[];try{e=b.find(f)}catch(t){l(t)}return e};return setTimeout((function(){var e=m();O(e),r(!1)}),5e3),Object(o.useEffect)((function(){O(f)}),[c]),{items:f,findItems:m,saveItems:function(e){try{b.save(e)}catch(t){l(t)}},loading:c,error:u}},f=n(0),O=c.a.createContext(),b=function(e){var t=h("TODOS"),n=t.items,c=t.loading,r=t.error,a=Object(o.useState)(""),i=Object(s.a)(a,2),u=i[0],l=i[1],d=Object(o.useState)(n),j=Object(s.a)(d,2),b=j[0],m=j[1],p=b.filter((function(e){return e.completed})).length,v=b.length,x=b;return u&&(x=n.filter((function(e){return e.text.toLowerCase().includes(u)}))),Object(f.jsx)(O.Provider,{value:{loading:c,error:r,totalTodos:v,completedTodos:p,searchValue:u,todosFiltered:x,setSearchValue:l,setTodos:m},children:e.children})},m=(n(15),function(e){var t=e.total,n=e.completed;return Object(f.jsxs)("h2",{className:"todo-counter",children:["You've completed ",n," of ",t," TODOs \u2705"]})}),p=(n(16),function(e){var t=e.searchValue,n=e.setSearchValue;return Object(f.jsx)("input",{className:"todo-search",placeholder:"Search TODOs \ud83d\udcdd",value:t,onChange:function(e){n(e.target.value)}})}),v=(n(17),function(e){var t=e.children;return Object(f.jsx)("section",{children:Object(f.jsx)("ul",{children:t})})}),x=(n(18),function(e){var t=e.text,n=e.completed,o=e.onComplete,c=e.onDelete;return Object(f.jsxs)("li",{className:"todo-item",children:[Object(f.jsx)("span",{className:"icon icon-check ".concat(n&&"icon-check-active"),onClick:function(){return o(t,n)},children:"\u2705"}),Object(f.jsx)("p",{className:"todo-item-p ".concat(n&&"todo-item-p-complete"),children:t}),Object(f.jsx)("span",{className:"icon icon-delete",onClick:function(){return c(t)},children:"x"})]})}),g=function(e){return function(e){var t=e.todos,n=e.setTodos;return t?t.map((function(e){var o=h("TODOS").saveItems;return Object(f.jsx)(x,{text:e.text,completed:e.completed,onComplete:function(e,c){alert("You complete the todo ".concat(e));var r=t.map((function(t){return t.text===e?{text:e,completed:!c}:t}));n(r),o(r)},onDelete:function(e){var c=t.filter((function(t){return t.text!==e}));console.log(c),n(c),o(c)}},e.text)})):""}(e)},S=(n(19),function(){return Object(f.jsx)("button",{className:"create-todo-button",type:"button",onClick:function(){return alert("Here should open the modal")},children:"+"})}),w=function(){return Object(f.jsx)(O.Consumer,{children:function(e){var t=e.loading,n=e.error,c=e.totalTodos,r=e.completedTodos,a=e.searchValue,s=e.todosFiltered,i=e.setSearchValue,u=e.setTodos;return Object(f.jsxs)(o.Fragment,{children:[Object(f.jsx)(m,{total:c,completed:r}),Object(f.jsx)(p,{searchValue:a,setSearchValue:i}),Object(f.jsxs)(v,{children:[n&&Object(f.jsx)("p",{children:"Something was wrong"}),t&&Object(f.jsx)("p",{children:"Loading..."}),!t&&!s.length&&Object(f.jsx)("p",{children:"Create your first TODO"}),Object(f.jsx)(g,{todos:s,setTodos:u})]}),Object(f.jsx)(S,{})]})}})},T=function(){return Object(f.jsx)(b,{children:Object(f.jsx)(w,{})})};a.a.render(Object(f.jsx)(T,{}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.9b6d89f0.chunk.js.map