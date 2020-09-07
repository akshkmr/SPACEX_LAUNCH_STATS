(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{44:function(e,a,n){e.exports=n.p+"static/media/logo.ab10d000.png"},46:function(e,a,n){e.exports=n(62)},51:function(e,a,n){},52:function(e,a,n){},62:function(e,a,n){"use strict";n.r(a);var t=n(1),c=n.n(t),l=n(37),r=n.n(l),s=(n(51),n(19)),m=n(20),u=n(23),o=n(22),i=(n(52),n(45)),h=n(7),p=n(25),E=n(18),d=n.n(E),g=n(63),b=n(26),f=n.n(b),_=n(38),y=n.n(_),v=n(21);function N(e){var a=e.launch,n=a.flight_number,t=a.mission_name,l=a.launch_date_local,r=a.launch_success;return c.a.createElement("div",{className:"card card-body mb-3"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-9"},c.a.createElement("h4",null,"Mission:"," ",c.a.createElement("span",{className:f()({"text-success":r,"text-danger":!r})},t)),c.a.createElement("p",null,"Date: ",c.a.createElement(y.a,{format:"YYYY-MM-DD HH:mm"},l))),c.a.createElement("div",{className:"col-md-3"},c.a.createElement(v.b,{to:"/launch/".concat(n),className:"btn btn-secondary"},"Launch Details"))))}function k(){return c.a.createElement("div",{className:"my-3"},c.a.createElement("p",null,c.a.createElement("span",{className:"px-3 mr-2 bg-success"})," = Success"),c.a.createElement("p",null,c.a.createElement("span",{className:"px-3 mr-2 bg-danger"})," = Fail"))}function j(){var e=Object(p.a)(["\n  query LaunchesQuery {\n    launches {\n      flight_number\n      mission_name\n      launch_date_local\n      launch_success\n    }\n  }\n"]);return j=function(){return e},e}var O=d()(j()),w=function(e){Object(u.a)(n,e);var a=Object(o.a)(n);function n(){return Object(s.a)(this,n),a.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return c.a.createElement(t.Fragment,null,c.a.createElement("h1",{className:"display-4 my-3"},"Launches"),c.a.createElement(k,null),c.a.createElement(g.a,{query:O},(function(e){var a=e.loading,n=e.error,l=e.data;return a?c.a.createElement("h4",null,"Loading..."):n?console.log(n):(console.log(l),c.a.createElement(t.Fragment,null,l.launches.map((function(e){return c.a.createElement(N,{key:e.flight_number,launch:e})}))))})))}}]),n}(t.Component);function x(){var e=Object(p.a)(["\n  query LaunchQuery($flight_number: Int!) {\n    launch(flight_number: $flight_number) {\n      flight_number\n      mission_name\n      launch_year\n      launch_success\n      launch_date_local\n      rocket {\n        rocket_id\n        rocket_name\n        rocket_type\n      }\n    }\n  }\n"]);return x=function(){return e},e}var L=d()(x()),D=function(e){Object(u.a)(n,e);var a=Object(o.a)(n);function n(){return Object(s.a)(this,n),a.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){var e=this.props.match.params.flight_number;return e=parseInt(e),c.a.createElement(t.Fragment,null,c.a.createElement(g.a,{query:L,variables:{flight_number:e}},(function(e){var a=e.loading,n=e.error,t=e.data;if(a)return c.a.createElement("h4",null,"Loading...");n&&console.log(n);var l=t.launch,r=l.mission_name,s=l.flight_number,m=l.launch_year,u=l.launch_success,o=l.rocket,i=o.rocket_id,h=o.rocket_name,p=o.rocket_type;return c.a.createElement("div",null,c.a.createElement("h1",{className:"display-4 my-3"},c.a.createElement("span",{className:"text-dark"},"Mission:")," ",r),c.a.createElement("h4",{className:"mb-3"},"Launch Details"),c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{className:"list-group-item"},"Flight Number: ",s),c.a.createElement("li",{className:"list-group-item"},"Launch Year: ",m),c.a.createElement("li",{className:"list-group-item"},"Launch Successful:"," ",c.a.createElement("span",{className:f()({"text-success":u,"text-danger":!u})},u?"Yes":"No"))),c.a.createElement("h4",{className:"my-3"},"Rocket Details"),c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{className:"list-group-item"},"Rocket ID: ",i),c.a.createElement("li",{className:"list-group-item"},"Rocket Name: ",h),c.a.createElement("li",{className:"list-group-item"},"Rocket Type: ",p)),c.a.createElement("hr",null),c.a.createElement(v.b,{to:"/",className:"btn btn-secondary"},"Back"))})))}}]),n}(t.Component),Y=n(6),q=n(44),F=n.n(q),M=new i.a({uri:"/graphql"}),I=function(e){Object(u.a)(n,e);var a=Object(o.a)(n);function n(){return Object(s.a)(this,n),a.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return c.a.createElement(h.a,{client:M},c.a.createElement(v.a,null,c.a.createElement("div",{className:"container"},c.a.createElement("img",{src:F.a,alt:"SpaceX",style:{width:300,display:"block",margin:"auto"}}),c.a.createElement(Y.a,{exact:!0,path:"/",component:w}),c.a.createElement(Y.a,{exact:!0,path:"/launch/:flight_number",component:D}))))}}]),n}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[46,1,2]]]);
//# sourceMappingURL=main.f2fea4c9.chunk.js.map