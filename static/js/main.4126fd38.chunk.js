(this["webpackJsonpreactjs-todos-web"]=this["webpackJsonpreactjs-todos-web"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(1),c=n.n(o),r=n(4),a=n.n(r),s=(n(16),n(17),n(0)),i=function(e){var t=e.children,n=e.error,o=e.loading,c=e.showEmptyTodos,r=e.showRender,a=e.showEmptySearchResults,i=e.onError,u=e.onLoading,l=e.onEmptyTodos,d=e.onEmptySearchResults,j=e.render;return Object(s.jsxs)("section",{className:"todolist-container",children:[n&&i(),o&&u(),c&&l(),a&&d(),r&&j(),Object(s.jsx)("ul",{children:t})]})},u=(n(19),function(e){var t=e.text,n=e.completed,o=e.onComplete,c=e.onDelete;return Object(s.jsxs)("li",{className:"todo-item",children:[Object(s.jsx)("span",{className:"icon icon-check ".concat(n&&"icon-check-active"),onClick:function(){return o(t,n)},children:"\u2705"}),Object(s.jsx)("p",{className:"todo-item-p ".concat(n&&"todo-item-p-complete"),children:t}),Object(s.jsx)("span",{className:"icon icon-pin",onClick:function(){return c(t)},children:"\ud83d\udccc"})]})}),l=n(10),d=n(6),j=n(7),h=n(11),f=n(9),O=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var o;Object(d.a)(this,n),(o=t.call(this)).storageName=e;var c=o.find();return o.save(c),o}return Object(j.a)(n,[{key:"save",value:function(e){localStorage.setItem(this.storageName,JSON.stringify(e))}},{key:"add",value:function(e){var t=localStorage.getItem(this.storageName)||"[]",n=JSON.parse(t),o=[].concat(Object(l.a)(n),[{completed:!1,text:e.text}]);return localStorage.setItem(this.storageName,JSON.stringify(o)),o}},{key:"find",value:function(){var e=localStorage.getItem(this.storageName)||"[]";return JSON.parse(e)}}]),n}(function(){function e(){Object(d.a)(this,e)}return Object(j.a)(e,[{key:"save",value:function(e){throw new Error("Abstract Method has no implementation")}},{key:"find",value:function(){throw new Error("Abstract Method has no implementation")}},{key:"remove",value:function(e){throw new Error("Abstract Method has no implementation")}}]),e}()),b=function(e){var t=new O(e);return{save:function(e){try{t.save(e)}catch(n){throw n}},find:function(){try{return t.find()}catch(e){throw e}},add:function(e){try{return t.add(e)}catch(n){throw n}}}},m=function(e){return function(e){var t=e.todos,n=e.setTodos;return t?t.map((function(e){var o=b("TODOS").save;return Object(s.jsx)(u,{text:e.text,completed:e.completed,onComplete:function(e,c){alert("You complete the todo ".concat(e));var r=t.map((function(t){return t.text===e?{text:e,completed:!c}:t}));n(r),o(r)},onDelete:function(e){var c=t.filter((function(t){return t.text!==e}));console.log(c),n(c),o(c)}},e.text)})):""}(e)},p=(n(20),function(e){var t=e.setOpenModal;return Object(s.jsx)("button",{className:"create-todo-button",type:"button",onClick:function(){return t((function(e){return!e}))},children:"+"})}),x=n(2),v=(n(21),function(e){var t=e.children;return a.a.createPortal(Object(s.jsx)("div",{className:"modal-background",children:t}),document.getElementById("modal"))}),g=(n(22),function(e){var t=e.setTodos,n=e.setOpenModal,c=e.addTodos,r=Object(o.useState)(""),a=Object(x.a)(r,2),i=a[0],u=a[1];return Object(s.jsxs)("form",{onSubmit:function(e){e.preventDefault();var o=c({text:i});t(o),n(!1)},children:[Object(s.jsx)("label",{children:"Write your new TODO \u2705"}),Object(s.jsx)("textarea",{value:i,onChange:function(e){u(e.target.value)},placeholder:"Add a description of your TODO \ud83d\udcdd"}),Object(s.jsxs)("div",{className:"todo-form-button-container",children:[Object(s.jsx)("button",{type:"submit",className:"todo-form-button todo-form-button-add",children:"Save \ud83d\udcbe"}),Object(s.jsx)("button",{type:"button",className:"todo-form-button todo-form-button-cancel",onClick:function(){n(!1)},children:"Cancel"})]})]})}),S=(n(23),function(e){var t=e.error;return Object(s.jsxs)(o.Fragment,{children:[Object(s.jsx)("h1",{children:"Boom! \ud83d\udca3 Something was wrong! \ud83d\ude31...Try again"}),t&&Object(s.jsxs)("div",{className:"error-container",children:[Object(s.jsx)("h3",{children:"Some error description"}),t.message&&Object(s.jsx)("p",{children:t.message})]})]})}),y=(n(24),function(e){var t=e.quantity,n=void 0===t?3:t;return function(){for(var e=[],t=0;t<n;t++)e.push(Object(s.jsxs)("div",{className:"loading-container",children:[Object(s.jsx)("span",{className:"complete-icon"}),Object(s.jsx)("p",{className:"text",children:"Loading..."}),Object(s.jsx)("span",{className:"delete-icon"})]}));return e}()}),T=(n(25),function(e){var t=e.children;return Object(s.jsx)("div",{children:t})}),w=(n(26),function(e){var t=e.totalTodos,n=e.completedTodos,o=e.loading;return Object(s.jsxs)("h2",{className:"todo-counter ".concat(o?"loading":""),children:["You've completed ",n," of ",t," TODOs \u2705"]})}),N=(n(27),function(e){var t=e.searchValue,n=e.setSearchValue,o=e.loading;return Object(s.jsx)("input",{className:"todo-search",placeholder:"Search TODOs \ud83d\udcdd",value:t,onChange:function(e){n(e.target.value)},disabled:o})}),E=function(e){var t=e.children,n=e.loading;return Object(s.jsx)("header",{children:c.a.Children.toArray(t).map((function(e){return c.a.cloneElement(e,{loading:n})}))})},k=function(e){return function(t){var n=Object(o.useState)(!1),c=Object(x.a)(n,2),r=c[0],a=c[1];return Object(s.jsx)(e,{show:r,toggleShow:a})}}((function(e){var t=e.show;e.toggleShow;if(t)return Object(s.jsx)("p",{children:"Was It changes?"})})),C=function(){var e=function(){var e=Object(o.useState)(!0),t=Object(x.a)(e,2),n=t[0],c=t[1],r=Object(o.useState)(null),a=Object(x.a)(r,2),s=a[0],i=a[1],u=b("TODOS"),l=u.add,d=u.find,j=Object(o.useState)(""),h=Object(x.a)(j,2),f=h[0],O=h[1],m=Object(o.useState)(!1),p=Object(x.a)(m,2),v=p[0],g=p[1],S=Object(o.useState)(0),y=Object(x.a)(S,2),T=y[0],w=y[1],N=[];try{setTimeout((function(){c(!1)}),5e3),N=d()}catch(A){i(A)}var E=Object(o.useState)(N),k=Object(x.a)(E,2),C=k[0],M=k[1],D=Object(o.useState)(C),V=Object(x.a)(D,2),I=V[0],J=V[1],R=I.filter((function(e){return e.completed})).length;return Object(o.useEffect)((function(){var e=C.filter((function(e){return e.text.toLowerCase().includes(f.toLowerCase())}));e.length!==I.length&&J(e)}),[f]),Object(o.useEffect)((function(){J(C)}),[C]),Object(o.useEffect)((function(){w(I.length)}),[I]),{loading:n,error:s,totalTodos:T,todos:C,completedTodos:R,searchValue:f,setSearchValue:O,todosFiltered:I,setTodos:M,openModal:v,setOpenModal:g,addTodos:l}}(),t=e.totalTodos,n=e.todos,c=e.completedTodos,r=e.searchValue,a=e.setSearchValue,u=e.loading,l=e.error,d=e.todosFiltered,j=e.setTodos,h=e.openModal,f=e.setOpenModal,O=e.addTodos;return Object(s.jsxs)(o.Fragment,{children:[Object(s.jsxs)(E,{loading:u,children:[Object(s.jsx)(w,{totalTodos:t,completedTodos:c}),Object(s.jsx)(N,{searchValue:r,setSearchValue:a})]}),Object(s.jsx)(i,{error:l,loading:u,showEmptyTodos:!u&&!n.length,showRender:!u&&d,showEmptySearchResults:!t&&n.length,onError:function(){return Object(s.jsx)(S,{error:l})},onLoading:function(){return Object(s.jsx)(y,{quantity:"5"})},onEmptyTodos:function(){return Object(s.jsxs)(T,{children:[" ",Object(s.jsx)("p",{children:"Create your first TODO"})," "]})},onEmptySearchResults:function(){return Object(s.jsx)(T,{children:Object(s.jsxs)("p",{children:["There is not result for: ",r," "]})})},render:function(){return Object(s.jsx)(m,{todos:d,setTodos:j})}}),Object(s.jsx)(p,{setOpenModal:f}),!!h&&Object(s.jsx)(v,{openModal:h,children:Object(s.jsx)(g,{setTodos:j,setOpenModal:f,addTodos:O})}),Object(s.jsx)(k,{})]})};a.a.render(Object(s.jsx)(C,{}),document.getElementById("root"))}],[[28,1,2]]]);
//# sourceMappingURL=main.4126fd38.chunk.js.map