(this["webpackJsonpreactjs-todos-web"]=this["webpackJsonpreactjs-todos-web"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(1),c=n.n(o),r=n(6),a=n.n(r),s=(n(13),n(2)),i=n(3),u=n(4),l=n(8),d=n(7),j=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var o;Object(i.a)(this,n),(o=t.call(this)).storageName=e;var c=o.find();return o.save(c),o}return Object(u.a)(n,[{key:"save",value:function(e){localStorage.setItem(this.storageName,JSON.stringify(e))}},{key:"find",value:function(){var e=localStorage.getItem(this.storageName)||"[]";return JSON.parse(e)}}]),n}(function(){function e(){Object(i.a)(this,e)}return Object(u.a)(e,[{key:"save",value:function(e){throw new Error("Abstract Method has no implementation")}},{key:"find",value:function(){throw new Error("Abstract Method has no implementation")}},{key:"remove",value:function(e){throw new Error("Abstract Method has no implementation")}}]),e}()),f=function(e){var t=Object(o.useState)(!0),n=Object(s.a)(t,2),c=n[0],r=n[1],a=Object(o.useState)({}),i=Object(s.a)(a,2),u=i[0],l=i[1],d=new j(e),f=[];return Object(o.useEffect)((function(){try{setTimeout((function(){f=d.find(),r(!1)}),5e3)}catch(e){l(e)}})),{items:f,saveItems:function(e){try{d.save(e)}catch(t){l(t)}},loading:c,error:u}},h=n(0),O=c.a.createContext(),b=function(e){var t=f("TODOS"),n=t.items,c=t.loading,r=t.error,a=Object(o.useState)(""),i=Object(s.a)(a,2),u=i[0],l=i[1],d=Object(o.useState)(n),j=Object(s.a)(d,2),b=j[0],m=j[1],p=b.filter((function(e){return e.completed})).length,v=b.length,x=b;return u&&(x=n.filter((function(e){return e.text.toLowerCase().includes(u)}))),console.log("Render before the use effect"),Object(o.useEffect)((function(){console.log("Use Effect")}),[v]),console.log("Render after the use effect"),Object(h.jsx)(O.Provider,{value:{loading:c,error:r,totalTodos:v,completedTodos:p,searchValue:u,todosFiltered:x,setSearchValue:l,setTodos:m},children:e.children})},m=(n(15),function(e){var t=e.total,n=e.completed;return Object(h.jsxs)("h2",{className:"todo-counter",children:["You've completed ",n," of ",t," TODOs \u2705"]})}),p=(n(16),function(e){var t=e.searchValue,n=e.setSearchValue;return Object(h.jsx)("input",{className:"todo-search",placeholder:"Search TODOs \ud83d\udcdd",value:t,onChange:function(e){n(e.target.value),console.log(t)}})}),v=(n(17),function(e){var t=e.children;return Object(h.jsx)("section",{children:Object(h.jsx)("ul",{children:t})})}),x=(n(18),function(e){var t=e.text,n=e.completed,o=e.onComplete,c=e.onDelete;return Object(h.jsxs)("li",{className:"todo-item",children:[Object(h.jsx)("span",{className:"icon icon-check ".concat(n&&"icon-check-active"),onClick:function(){return o(t,n)},children:"\u2705"}),Object(h.jsx)("p",{className:"todo-item-p ".concat(n&&"todo-item-p-complete"),children:t}),Object(h.jsx)("span",{className:"icon icon-delete",onClick:function(){return c(t)},children:"x"})]})}),g=function(e){return function(e){var t=e.todos,n=e.setTodos;return t?t.map((function(e){var o=f("TODOS").saveItems;return console.log(o),Object(h.jsx)(x,{text:e.text,completed:e.completed,onComplete:function(e,c){alert("You complete the todo ".concat(e));var r=t.map((function(t){return t.text===e?{text:e,completed:!c}:t}));n(r),o(r)},onDelete:function(e){var c=t.filter((function(t){return t.text!==e}));n(c),o(c)}},e.text)})):""}(e)},w=(n(19),function(){return Object(h.jsx)("button",{className:"create-todo-button",type:"button",onClick:function(){return alert("Here should open the modal")},children:"+"})}),S=function(){return Object(h.jsxs)(o.Fragment,{children:[Object(h.jsx)(m,{}),Object(h.jsx)(p,{}),Object(h.jsx)(O.Consumer,{children:function(e){var t=e.error,n=e.loading,o=e.todosFiltered,c=e.setTodos;return Object(h.jsxs)(v,{children:[t&&Object(h.jsx)("p",{children:"Something was wrong"}),n&&Object(h.jsx)("p",{children:"Loading..."}),!n&&!o.length&&Object(h.jsx)("p",{children:"Create your first TODO"}),Object(h.jsx)(g,{todos:o,setTodos:c})]})}}),Object(h.jsx)(w,{})]})},k=function(){return Object(h.jsx)(b,{children:Object(h.jsx)(S,{})})};a.a.render(Object(h.jsx)(k,{}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.ebaf1cad.chunk.js.map