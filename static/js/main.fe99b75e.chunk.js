(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{25:function(e,n,t){},26:function(e,n,t){},27:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t(2),i=t.n(r),c=t(8),s=t(5),a=t(12),l=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function u(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(23);var h=t(3),d=t(4),b=t(7),f=t(6),j="CHANGE_SEARCHFIELD",g="REQUEST_ROBOTS_PENDING",p="REQUEST_ROBOTS_SUCCESS",v="REQUEST_ROBOTS_FAILED",O=function(){return function(e){var n;e({type:g}),(n="https://jsonplaceholder.typicode.com/users",fetch(n).then((function(e){return e.json()}))).then((function(n){return e({type:p,payload:n})})).catch((function(n){return e({type:v,payload:n})}))}},w=t(1),m=function(e){var n=e.name,t=e.email,o=e.id;return Object(w.jsxs)("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5",children:[Object(w.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(o,"?200x200")}),Object(w.jsxs)("div",{children:[Object(w.jsx)("h2",{children:n}),Object(w.jsx)("p",{children:t})]})]})},x=function(e){var n=e.robots;return Object(w.jsx)("div",{children:n.map((function(e,t){return Object(w.jsx)(m,{id:n[t].id,name:n[t].name,email:n[t].email},t)}))})},y=function(e){e.searchfield;var n=e.searchChange;return Object(w.jsx)("div",{className:"pa2",children:Object(w.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:n})})},E=function(e){return Object(w.jsx)("div",{style:{overflow:"scroll",border:"5px solid black",height:"800px"},children:e.children})},R=function(e){Object(b.a)(t,e);var n=Object(f.a)(t);function t(e){var o;return Object(h.a)(this,t),(o=n.call(this,e)).state={hasError:!1},o}return Object(d.a)(t,[{key:"componentDidCatch",value:function(e,n){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(w.jsx)("h1",{children:"Something went wrong."}):this.props.children}}]),t}(o.Component),C=(t(25),function(e){Object(b.a)(t,e);var n=Object(f.a)(t);function t(){return Object(h.a)(this,t),n.apply(this,arguments)}return Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,n=e.robots,t=e.searchField,o=e.onSearchChange,r=e.isPending,i=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return Object(w.jsxs)("div",{className:"tc",children:[Object(w.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(w.jsx)(y,{searchChange:o}),Object(w.jsx)(E,{children:r?Object(w.jsx)("h1",{children:"Loading"}):Object(w.jsx)(R,{children:Object(w.jsx)(x,{robots:i})})})]})}}]),t}(o.Component)),S=Object(s.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending}}),(function(e){return{onSearchChange:function(n){return e((t=n.target.value,{type:j,payload:t}));var t},onRequestRobots:function(){return e(O())}}}))(C),k={searchField:""},N={robots:[],isPending:!0},F=(t(26),Object(c.b)({requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case g:return Object.assign({},e,{isPending:!0});case p:return Object.assign({},e,{robots:n.payload,isPending:!1});case v:return Object.assign({},e,{error:n.payload});default:return e}},searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return n.type===j?Object.assign({},e,{searchField:n.payload}):e}})),L=Object(c.c)(F,Object(c.a)(a.a));i.a.render(Object(w.jsx)(s.a,{store:L,children:Object(w.jsx)(S,{})}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/robots-pwa",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/robots-pwa","/service-worker.js");l?function(e){fetch(e).then((function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):u(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):u(e)}))}}()}},[[27,1,2]]]);
//# sourceMappingURL=main.fe99b75e.chunk.js.map