(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{55:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(8),r=a.n(c),i=a(1);function l(){return Object(i.jsx)("div",{children:Object(i.jsx)("h1",{className:"text-center p-5",style:{background:"black",color:"white"},children:"Employee Directory"})})}var o=a(20),j=a(21),u=a(27),d=a(26),h=a(22),b=a.n(h),m=function(){return b.a.get("https://randomuser.me/api/?results=200&nat=us")};var x=function(e){return Object(i.jsx)("div",{children:Object(i.jsxs)("table",{className:"table",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{className:"text-center",scope:"col",children:"Picture"}),Object(i.jsx)("th",{className:"text-center hover",scope:"col","data-value":"name",onClick:e.nameSort,children:"Name"}),Object(i.jsx)("th",{className:"text-center",scope:"col",children:"Email Address"}),Object(i.jsx)("th",{className:"text-center",scope:"col",children:"Phone Number"}),Object(i.jsx)("th",{className:"text-center hover",scope:"col","data-value":"state",onClick:e.stateSort,children:"Location"})]})}),Object(i.jsx)("tbody",{children:e.users.map((function(e){return Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{className:"d-flex justify-content-center",children:Object(i.jsx)("img",{src:e.picture.medium,alt:"employee"})}),Object(i.jsxs)("td",{className:"text-center",children:[e.name.first," ",e.name.last]}),Object(i.jsx)("td",{className:"text-center",children:e.email}),Object(i.jsx)("td",{className:"text-center",children:e.phone}),Object(i.jsxs)("td",{className:"text-center",children:[e.location.city,", ",e.location.state]})]},e.login.uuid)}))})]})})},O=a(5);var p=function(e){return Object(i.jsx)("div",{children:Object(i.jsxs)(O.a,{className:"m-5",children:[Object(i.jsx)(O.a.Toggle,{variant:"info",id:"dropdown-basic",children:"Sort by:"}),Object(i.jsxs)(O.a.Menu,{children:[Object(i.jsx)(O.a.Item,{onClick:e.name,children:"Last name"}),Object(i.jsx)(O.a.Item,{onClick:e.state,children:"State"})]})]})})},f=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={users:[],inTable:[],states:["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"],filter:""},e.nameSort=function(){e.setState({inTable:e.state.inTable.sort((function(e,t){return e.name.last.localeCompare(t.name.last)}))})},e.stateSort=function(){e.setState({inTable:e.state.inTable.sort((function(e,t){return e.location.state.localeCompare(t.location.state)}))})},e.reset=function(t){t.preventDefault(),e.setState({inTable:e.state.users}),document.querySelector("#filterInput").value=""},e.handleFormSubmit=function(t){t.preventDefault();var a=document.querySelector("#filterInput").value,n=e.state.users.filter((function(e){return e.location.state===a}));e.setState({inTable:n})},e}return Object(j.a)(a,[{key:"componentDidMount",value:function(){this.getUsers()}},{key:"getUsers",value:function(){var e=this;m().then((function(t){e.setState({users:t.data.results,inTable:t.data.results})}))}},{key:"render",value:function(){return Object(i.jsxs)("div",{className:"container",children:[Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("div",{className:"col-4",children:Object(i.jsx)(p,{name:this.nameSort,state:this.stateSort})}),Object(i.jsx)("div",{className:"col-8",children:Object(i.jsxs)("form",{className:"m-5",children:[Object(i.jsx)("input",{id:"filterInput",type:"text",name:"filter",list:"states",style:{width:"80%"},placeholder:"See employees from State entered here"}),Object(i.jsx)("datalist",{id:"states",children:this.state.states.map((function(e){return Object(i.jsx)("option",{value:e},e)}))}),Object(i.jsx)("button",{type:"submit",className:"btn btn-info",onClick:this.handleFormSubmit,children:"Filter"}),Object(i.jsx)("button",{className:"btn btn-warning",onClick:this.reset,children:"Reset"})]})})]}),Object(i.jsx)(x,{nameSort:this.nameSort,stateSort:this.stateSort,users:this.state.inTable})]})}}]),a}(s.a.Component);a(54);var v=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(l,{}),Object(i.jsx)(f,{})]})};r.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(v,{})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.8ae55b83.chunk.js.map