(this["webpackJsonpreactjs-todos-web"]=this["webpackJsonpreactjs-todos-web"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(1),c=n.n(o),r=n(4),a=n.n(r),s=(n(16),n(17),n(0)),i=function(e){var t=e.children,n=e.error,o=e.loading,c=e.showEmptyTodos,r=e.showRender,a=e.showEmptySearchResults,i=e.onError,u=e.onLoading,l=e.onEmptyTodos,d=e.onEmptySearchResults,j=e.render;return Object(s.jsxs)("section",{className:"todolist-container",children:[n&&i(),o&&u(),c&&l(),a&&d(),r&&j(),Object(s.jsx)("ul",{children:t})]})},u=(n(19),function(e){var t=e.text,n=e.completed,o=e.onComplete,c=e.onDelete;return Object(s.jsxs)("li",{className:"todo-item",children:[Object(s.jsx)("span",{className:"icon icon-check ".concat(n&&"icon-check-active"),onClick:function(){return o(t,n)},children:"\u2705"}),Object(s.jsx)("p",{className:"todo-item-p ".concat(n&&"todo-item-p-complete"),children:t}),Object(s.jsx)("span",{className:"icon icon-pin",onClick:function(){return c(t)},children:"\ud83d\udccc"})]})}),l=n(10),d=n(6),j=n(7),h=n(11),f=n(9),O=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var o;Object(d.a)(this,n),(o=t.call(this)).storageName=e;var c=o.find();return o.save(c),o}return Object(j.a)(n,[{key:"save",value:function(e){localStorage.setItem(this.storageName,JSON.stringify(e))}},{key:"add",value:function(e){var t=localStorage.getItem(this.storageName)||"[]",n=JSON.parse(t),o=[].concat(Object(l.a)(n),[{completed:!1,text:e.text}]);return localStorage.setItem(this.storageName,JSON.stringify(o)),o}},{key:"find",value:function(){var e=localStorage.getItem(this.storageName)||"[]";return JSON.parse(e)}}]),n}(function(){function e(){Object(d.a)(this,e)}return Object(j.a)(e,[{key:"save",value:function(e){throw new Error("Abstract Method has no implementation")}},{key:"find",value:function(){throw new Error("Abstract Method has no implementation")}},{key:"remove",value:function(e){throw new Error("Abstract Method has no implementation")}}]),e}()),b=function(e){var t=new O(e);return{save:function(e){try{t.save(e)}catch(n){throw n}},find:function(){try{return t.find()}catch(e){throw e}},add:function(e){try{return t.add(e)}catch(n){throw n}}}},m={STORAGE_NAME:"TODOS"},p=function(e){return function(e){var t=e.todos,n=e.setTodos;return t?t.map((function(e){var o=b(m.STORAGE_NAME).save;return Object(s.jsx)(u,{text:e.text,completed:e.completed,onComplete:function(e,c){alert("You complete the todo ".concat(e));var r=t.map((function(t){return t.text===e?{text:e,completed:!c}:t}));n(r),o(r)},onDelete:function(e){var c=t.filter((function(t){return t.text!==e}));console.log(c),n(c),o(c)}},e.text)})):""}(e)},x=(n(20),function(e){var t=e.setOpenModal;return Object(s.jsx)("button",{className:"create-todo-button",type:"button",onClick:function(){return t((function(e){return!e}))},children:"+"})}),v=n(2),g=(n(21),function(e){var t=e.children;return a.a.createPortal(Object(s.jsx)("div",{className:"modal-background",children:t}),document.getElementById("modal"))}),S=(n(22),function(e){var t=e.setTodos,n=e.setOpenModal,c=e.addTodos,r=Object(o.useState)(""),a=Object(v.a)(r,2),i=a[0],u=a[1];return Object(s.jsxs)("form",{onSubmit:function(e){e.preventDefault();var o=c({text:i});t(o),n(!1)},children:[Object(s.jsx)("label",{children:"Write your new TODO \u2705"}),Object(s.jsx)("textarea",{value:i,onChange:function(e){u(e.target.value)},placeholder:"Add a description of your TODO \ud83d\udcdd"}),Object(s.jsxs)("div",{className:"todo-form-button-container",children:[Object(s.jsx)("button",{type:"submit",className:"todo-form-button todo-form-button-add",children:"Save \ud83d\udcbe"}),Object(s.jsx)("button",{type:"button",className:"todo-form-button todo-form-button-cancel",onClick:function(){n(!1)},children:"Cancel"})]})]})}),T=(n(23),function(e){var t=e.error;return Object(s.jsxs)(o.Fragment,{children:[Object(s.jsx)("h1",{children:"Boom! \ud83d\udca3 Something was wrong! \ud83d\ude31...Try again"}),t&&Object(s.jsxs)("div",{className:"error-container",children:[Object(s.jsx)("h3",{children:"Some error description"}),t.message&&Object(s.jsx)("p",{children:t.message})]})]})}),y=(n(24),function(e){var t=e.quantity,n=void 0===t?3:t;return function(){for(var e=[],t=0;t<n;t++)e.push(Object(s.jsxs)("div",{className:"loading-container",children:[Object(s.jsx)("span",{className:"complete-icon"}),Object(s.jsx)("p",{className:"text",children:"Loading..."}),Object(s.jsx)("span",{className:"delete-icon"})]}));return e}()}),N=(n(25),function(e){var t=e.children;return Object(s.jsx)("div",{children:t})}),w=(n(26),function(e){var t=e.totalTodos,n=e.completedTodos,o=e.loading;return Object(s.jsxs)("h2",{className:"todo-counter ".concat(o?"loading":""),children:["You've completed ",n," of ",t," TODOs \u2705"]})}),E=(n(27),function(e){var t=e.searchValue,n=e.setSearchValue,o=e.loading;return Object(s.jsx)("input",{className:"todo-search",placeholder:"Search TODOs \ud83d\udcdd",value:t,onChange:function(e){n(e.target.value)},disabled:o})}),k=function(e){var t=e.children,n=e.loading;return Object(s.jsx)("header",{children:c.a.Children.toArray(t).map((function(e){return c.a.cloneElement(e,{loading:n})}))})},M=function(e){return function(t){var n=t.sincronizeTodos,c=Object(o.useState)(!1),r=Object(v.a)(c,2),a=r[0],i=r[1];window.addEventListener("storage",(function(e){e.key===m.STORAGE_NAME&&(console.log("It was change in ".concat(m.STORAGE_NAME)),i(!0))}));return Object(s.jsx)(e,{show:a,toggleShow:function(){n(),i(!1)}})}},C=(n(28),function(e){var t=e.onClick;return Object(s.jsxs)("div",{className:"refresh-container",children:[Object(s.jsx)("p",{children:"Was Something changed?"}),Object(s.jsx)("button",{className:"refresh-button",onClick:t,children:"Refresh \ud83d\udd03"})]})}),A=M((function(e){var t=e.show,n=e.toggleShow;if(t){return Object(s.jsx)(g,{openModal:t,children:Object(s.jsx)(C,{onClick:function(){n()}})})}return null})),R=function(){var e=function(){var e=Object(o.useState)(!0),t=Object(v.a)(e,2),n=t[0],c=t[1],r=Object(o.useState)(null),a=Object(v.a)(r,2),s=a[0],i=a[1],u=b(m.STORAGE_NAME),l=u.add,d=u.find,j=Object(o.useState)(""),h=Object(v.a)(j,2),f=h[0],O=h[1],p=Object(o.useState)(!1),x=Object(v.a)(p,2),g=x[0],S=x[1],T=Object(o.useState)(0),y=Object(v.a)(T,2),N=y[0],w=y[1],E=Object(o.useState)(!0),k=Object(v.a)(E,2),M=k[0],C=k[1],A=[];try{setTimeout((function(){c(!1)}),5e3),A=d()}catch(F){i(F)}Object(o.useEffect)((function(){try{setTimeout((function(){c(!1)}),5e3),A=d(),_(A),C(!0)}catch(F){i(F)}}),[M]);var R=Object(o.useState)(A),D=Object(v.a)(R,2),V=D[0],I=D[1],J=Object(o.useState)(V),L=Object(v.a)(J,2),G=L[0],_=L[1],z=G.filter((function(e){return e.completed})).length;return Object(o.useEffect)((function(){var e=V.filter((function(e){return e.text.toLowerCase().includes(f.toLowerCase())}));e.length!==G.length&&_(e)}),[f]),Object(o.useEffect)((function(){_(V)}),[V]),Object(o.useEffect)((function(){w(G.length)}),[G]),{loading:n,error:s,totalTodos:N,todos:V,completedTodos:z,searchValue:f,setSearchValue:O,todosFiltered:G,setTodos:I,openModal:g,setOpenModal:S,addTodos:l,sincronize:function(){c(!0),C(!1)}}}(),t=e.totalTodos,n=e.todos,c=e.completedTodos,r=e.searchValue,a=e.setSearchValue,u=e.loading,l=e.error,d=e.todosFiltered,j=e.setTodos,h=e.openModal,f=e.setOpenModal,O=e.addTodos,M=e.sincronize;return Object(s.jsxs)(o.Fragment,{children:[Object(s.jsxs)(k,{loading:u,children:[Object(s.jsx)(w,{totalTodos:t,completedTodos:c}),Object(s.jsx)(E,{searchValue:r,setSearchValue:a})]}),Object(s.jsx)(i,{error:l,loading:u,showEmptyTodos:!u&&!n.length,showRender:!u&&d,showEmptySearchResults:!t&&n.length,onError:function(){return Object(s.jsx)(T,{error:l})},onLoading:function(){return Object(s.jsx)(y,{quantity:"5"})},onEmptyTodos:function(){return Object(s.jsxs)(N,{children:[" ",Object(s.jsx)("p",{children:"Create your first TODO"})," "]})},onEmptySearchResults:function(){return Object(s.jsx)(N,{children:Object(s.jsxs)("p",{children:["There is not result for: ",r," "]})})},render:function(){return Object(s.jsx)(p,{todos:d,setTodos:j})}}),Object(s.jsx)(x,{setOpenModal:f}),!!h&&Object(s.jsx)(g,{openModal:h,children:Object(s.jsx)(S,{setTodos:j,setOpenModal:f,addTodos:O})}),Object(s.jsx)(A,{sincronizeTodos:M})]})};a.a.render(Object(s.jsx)(R,{}),document.getElementById("root"))}],[[29,1,2]]]);
//# sourceMappingURL=main.c7bdb6f7.chunk.js.map