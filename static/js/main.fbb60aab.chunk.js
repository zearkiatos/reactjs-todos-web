(this["webpackJsonpreactjs-todos-web"]=this["webpackJsonpreactjs-todos-web"]||[]).push([[0],Array(18).concat([function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(1),c=n.n(o),r=n(6),a=n.n(r),s=(n(18),n(19),n(0)),i=function(e){var t=e.children,n=e.error,o=e.loading,c=e.showEmptyTodos,r=e.showRender,a=e.showEmptySearchResults,i=e.onError,d=e.onLoading,l=e.onEmptyTodos,u=e.onEmptySearchResults,O=e.render;return Object(s.jsxs)("section",{className:"todolist-container",children:[n&&i(),o&&d(),c&&l(),a&&u(),r&&O(),Object(s.jsx)("ul",{children:t})]})},d=(n(21),function(e){var t=e.text,n=e.completed,o=e.onComplete,c=e.onDelete;return Object(s.jsxs)("li",{className:"todo-item",children:[Object(s.jsx)("span",{className:"icon icon-check ".concat(n&&"icon-check-active"),onClick:function(){return o(t,n)},children:"\u2705"}),Object(s.jsx)("p",{className:"todo-item-p ".concat(n&&"todo-item-p-complete"),children:t}),Object(s.jsx)("span",{className:"icon icon-pin",onClick:function(){return c(t)},children:"\ud83d\udccc"})]})}),l=n(12),u=n(8),O=n(9),j=n(13),f=n(11),b=function(e){Object(j.a)(n,e);var t=Object(f.a)(n);function n(e){var o;Object(u.a)(this,n),(o=t.call(this)).storageName=e;var c=o.find();return o.save(c),o}return Object(O.a)(n,[{key:"save",value:function(e){localStorage.setItem(this.storageName,JSON.stringify(e))}},{key:"add",value:function(e){var t=localStorage.getItem(this.storageName)||"[]",n=JSON.parse(t),o=[].concat(Object(l.a)(n),[{completed:!1,text:e.text}]);return localStorage.setItem(this.storageName,JSON.stringify(o)),o}},{key:"find",value:function(){var e=localStorage.getItem(this.storageName)||"[]";return JSON.parse(e)}}]),n}(function(){function e(){Object(u.a)(this,e)}return Object(O.a)(e,[{key:"save",value:function(e){throw new Error("Abstract Method has no implementation")}},{key:"find",value:function(){throw new Error("Abstract Method has no implementation")}},{key:"remove",value:function(e){throw new Error("Abstract Method has no implementation")}}]),e}()),h=function(e){var t=new b(e);return{save:function(e){try{t.save(e)}catch(n){throw n}},find:function(){try{return t.find()}catch(e){throw e}},add:function(e){try{return t.add(e)}catch(n){throw n}}}},m={STORAGE_NAME:"TODOS"},p=function(e){return function(e){var t=e.todos,n=e.onSave;return t?t.map((function(e){var o=h(m.STORAGE_NAME).save;return Object(s.jsx)(d,{text:e.text,completed:e.completed,onComplete:function(e,c){alert("You complete the todo ".concat(e));var r=t.map((function(t){return t.text===e?{text:e,completed:!c}:t}));n(r),o(r)},onDelete:function(e){var c=t.filter((function(t){return t.text!==e}));console.log(c),n(c),o(c)}},e.text)})):""}(e)},v=(n(22),function(e){var t=e.onOpenModal;return Object(s.jsx)("button",{className:"create-todo-button",type:"button",onClick:function(){return t((function(e){return!e}))},children:"+"})}),x=n(3),g=n(2),S=n(4),N={ERROR:"ERROR",SUCCESS:"SUCCESS",LOADING:"LOADING",SYNCHRONIZATION:"SYNCHRONIZATION",FILTER:"FILTER",COUNT:"COUNT",SEARCH:"SEARCH",SAVE:"SAVE",OPEN_MODAL:"OPEN_MODAL"},E=function(){var e=h(m.STORAGE_NAME),t=e.add,n=e.find,c=Object(o.useReducer)(y,{loading:!0,error:null,searchValue:"",openModal:!1,totalTodos:0,sincronizedItems:!0,todosFound:[],todosFiltered:[],todos:[]}),r=Object(S.a)(c,2),a=r[0],s=r[1],i=function(e){return s({type:N.ERROR,payload:e})},d=function(e){s({type:N.LOADING,payload:e})},l=function(e){s({type:N.FILTER,payload:e})},u=a.loading,O=a.error,j=a.searchValue,f=a.openModal,b=a.totalTodos,p=a.sincronizedItems,v=a.todos,x=a.todosFiltered,g=[];try{setTimeout((function(){d()}),5e3),g=n()}catch(T){i(T)}Object(o.useEffect)((function(){try{setTimeout((function(){d(!1)}),5e3),g=n(),s({type:N.SUCCESS,payload:g})}catch(T){i(T)}}),[p]);var E=x.filter((function(e){return e.completed})).length;Object(o.useEffect)((function(){var e=v.filter((function(e){return e.text.toLowerCase().includes(j.toLowerCase())}));e.length!==x.length&&l(e)}),[j]),Object(o.useEffect)((function(){g=n(),l(g)}),[v]),Object(o.useEffect)((function(){!function(e){s({type:N.COUNT,payload:e})}(x.length)}),[x]);return{states:{loading:u,error:O,totalTodos:b,todos:v,completedTodos:E,searchValue:j,todosFiltered:x,openModal:f,sincronize:function(){s({type:N.SYNCHRONIZATION})}},stateUpdaters:{onSearchValue:function(e){s({type:N.SEARCH,payload:e})},onSave:function(e){s({type:N.SAVE,payload:e})},onOpenModal:function(e){s({type:N.OPEN_MODAL,payload:e})},addTodos:t}}},y=function(e,t){return function(e,t){var n;return n={},Object(x.a)(n,N.ERROR,Object(g.a)(Object(g.a)({},e),{},{error:!0})),Object(x.a)(n,N.SUCCESS,Object(g.a)(Object(g.a)({},e),{},{loading:!1,error:!1,sincronizedItems:!0,todosFiltered:t})),Object(x.a)(n,N.LOADING,Object(g.a)(Object(g.a)({},e),{},{loading:t})),Object(x.a)(n,N.SYNCHRONIZATION,Object(g.a)(Object(g.a)({},e),{},{loading:!0,sincronizedItems:!1})),Object(x.a)(n,N.FILTER,Object(g.a)(Object(g.a)({},e),{},{todosFiltered:t})),Object(x.a)(n,N.SEARCH,Object(g.a)(Object(g.a)({},e),{},{searchValue:t})),Object(x.a)(n,N.SAVE,Object(g.a)(Object(g.a)({},e),{},{todos:t})),Object(x.a)(n,N.COUNT,Object(g.a)(Object(g.a)({},e),{},{totalTodos:t})),Object(x.a)(n,N.OPEN_MODAL,Object(g.a)(Object(g.a)({},e),{},{openModal:t})),n}(e,t.payload)[t.type]||e},T=(n(23),function(e){var t=e.children;return a.a.createPortal(Object(s.jsx)("div",{className:"modal-background",children:t}),document.getElementById("modal"))}),R=(n(24),function(e){var t=e.onSave,n=e.onOpenModal,c=e.addTodos,r=Object(o.useState)(""),a=Object(S.a)(r,2),i=a[0],d=a[1];return Object(s.jsxs)("form",{onSubmit:function(e){e.preventDefault();var o=c({text:i});t(o),n(!1)},children:[Object(s.jsx)("label",{children:"Write your new TODO \u2705"}),Object(s.jsx)("textarea",{value:i,onChange:function(e){d(e.target.value)},placeholder:"Add a description of your TODO \ud83d\udcdd"}),Object(s.jsxs)("div",{className:"todo-form-button-container",children:[Object(s.jsx)("button",{type:"submit",className:"todo-form-button todo-form-button-add",children:"Save \ud83d\udcbe"}),Object(s.jsx)("button",{type:"button",className:"todo-form-button todo-form-button-cancel",onClick:function(){n(!1)},children:"Cancel"})]})]})}),A=(n(25),function(e){var t=e.error;return Object(s.jsxs)(o.Fragment,{children:[Object(s.jsx)("h1",{children:"Boom! \ud83d\udca3 Something was wrong! \ud83d\ude31...Try again"}),t&&Object(s.jsxs)("div",{className:"error-container",children:[Object(s.jsx)("h3",{children:"Some error description"}),t.message&&Object(s.jsx)("p",{children:t.message})]})]})}),C=(n(26),function(e){var t=e.quantity,n=void 0===t?3:t;return function(){for(var e=[],t=0;t<n;t++)e.push(Object(s.jsxs)("div",{className:"loading-container",children:[Object(s.jsx)("span",{className:"complete-icon"}),Object(s.jsx)("p",{className:"text",children:"Loading..."}),Object(s.jsx)("span",{className:"delete-icon"})]}));return e}()}),w=(n(27),function(e){var t=e.children;return Object(s.jsx)("div",{children:t})}),I=(n(28),function(e){var t=e.totalTodos,n=e.completedTodos,o=e.loading;return Object(s.jsxs)("h2",{className:"todo-counter ".concat(o?"loading":""),children:["You've completed ",n," of ",t," TODOs \u2705"]})}),M=(n(29),function(e){var t=e.searchValue,n=e.onSearchValue,o=e.loading;return Object(s.jsx)("input",{className:"todo-search",placeholder:"Search TODOs \ud83d\udcdd",value:t,onChange:function(e){n(e.target.value)},disabled:o})}),k=function(e){var t=e.children,n=e.loading;return Object(s.jsx)("header",{children:c.a.Children.toArray(t).map((function(e){return c.a.cloneElement(e,{loading:n})}))})},L=function(e){return function(t){var n=t.sincronizeTodos,c=Object(o.useState)(!1),r=Object(S.a)(c,2),a=r[0],i=r[1];window.addEventListener("storage",(function(e){e.key===m.STORAGE_NAME&&(console.log("It was change in ".concat(m.STORAGE_NAME)),i(!0))}));return Object(s.jsx)(e,{show:a,toggleShow:function(){n(),i(!1)}})}},D=(n(30),function(e){var t=e.onClick;return Object(s.jsxs)("div",{className:"refresh-container",children:[Object(s.jsx)("p",{children:"Was Something changed?"}),Object(s.jsx)("button",{className:"refresh-button",onClick:t,children:"Refresh \ud83d\udd03"})]})}),V=L((function(e){var t=e.show,n=e.toggleShow;if(t){return Object(s.jsx)(T,{openModal:t,children:Object(s.jsx)(D,{onClick:function(){n()}})})}return null})),F=function(){var e=E(),t=e.states,n=e.stateUpdaters,c=t.loading,r=t.error,a=t.totalTodos,d=t.todos,l=t.completedTodos,u=t.searchValue,O=t.sincronize,j=t.todosFiltered,f=t.openModal,b=n.onSave,h=n.onSearchValue,m=n.onOpenModal,x=n.addTodos;return Object(s.jsxs)(o.Fragment,{children:[Object(s.jsxs)(k,{loading:c,children:[Object(s.jsx)(I,{totalTodos:a,completedTodos:l}),Object(s.jsx)(M,{searchValue:u,onSearchValue:h})]}),Object(s.jsx)(i,{error:r,loading:c,showEmptyTodos:!c&&!d.length,showRender:!c&&j,showEmptySearchResults:!a&&d.length,onError:function(){return Object(s.jsx)(A,{error:r})},onLoading:function(){return Object(s.jsx)(C,{quantity:"5"})},onEmptyTodos:function(){return Object(s.jsxs)(w,{children:[" ",Object(s.jsx)("p",{children:"Create your first TODO"})," "]})},onEmptySearchResults:function(){return Object(s.jsx)(w,{children:Object(s.jsxs)("p",{children:["There is not result for: ",u," "]})})},render:function(){return Object(s.jsx)(p,{todos:j,onSave:b})}}),Object(s.jsx)(v,{onOpenModal:m}),!!f&&Object(s.jsx)(T,{openModal:f,children:Object(s.jsx)(R,{onSave:b,onOpenModal:m,addTodos:x})}),Object(s.jsx)(V,{sincronizeTodos:O})]})};a.a.render(Object(s.jsx)(F,{}),document.getElementById("root"))}]),[[31,1,2]]]);
//# sourceMappingURL=main.fbb60aab.chunk.js.map