(this.webpackJsonpauthapp=this.webpackJsonpauthapp||[]).push([[0],{18:function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/register_bg_2.4f2cb0ac.png"},37:function(e,t,s){},63:function(e,t,s){"use strict";s.r(t);var a=s(1),r=s.n(a),l=s(31),n=s.n(l),c=(s(37),s(0));var o=function(e){return Object(c.jsx)("main",{children:Object(c.jsxs)("section",{className:"absolute w-full h-full",children:[Object(c.jsx)("div",{className:"absolute top-0 w-full h-full bg-gray-900",style:{backgroundImage:"url("+s(18).default+")",backgroundSize:"100%",backgroundRepeat:"no-repeat"}}),Object(c.jsx)("div",{className:"container mx-auto px-4 h-full",children:Object(c.jsx)("div",{className:"flex content-center items-center justify-center h-full",children:Object(c.jsx)("div",{className:"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0",children:Object(c.jsx)("h1",{className:"container mx-auto text-red-800 text-center text-6xl",children:"Welcome to Home"})})})})]})})},i=s(8),d=s.n(i),u=s(9),x=s(12),b=s(13),m=s.n(b);function p(e){return h.apply(this,arguments)}function h(){return(h=Object(x.a)(d.a.mark((function e(t){var s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"https://fitnessappauth.herokuapp.com/api/users/login",e.next=4,m.a.post("https://fitnessappauth.herokuapp.com/api/users/login",t);case 4:return s=e.sent,console.log(s.data.SuccessMessage),e.abrupt("return",s);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function j(e){var t=Object(a.useState)(),r=Object(u.a)(t,2),l=r[0],n=(r[1],Object(a.useState)("")),o=Object(u.a)(n,2),i=o[0],b=o[1],m=Object(a.useState)(""),h=Object(u.a)(m,2),j=h[0],g=h[1];function f(){return(f=Object(x.a)(d.a.mark((function t(s){var a,r,l;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,s.preventDefault(),a={email:i,Password:j},t.next=5,p(a);case 5:r=t.sent,l=r.data.token,console.log("login res ".concat(l)),console.log("200"==r.status),"200"==r.status&&e.history.push("/home"),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})))).apply(this,arguments)}return console.log("outside of handler res ".concat(l)),l&&(console.log("inside if token in login"),console.log("last if block --\x3e token is: ".concat(l," ")),e.history.push("/home")),Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("main",{children:Object(c.jsxs)("section",{className:"absolute w-full h-full",children:[Object(c.jsx)("div",{className:"absolute top-0 w-full h-full bg-gray-900",style:{backgroundImage:"url("+s(18).default+")",backgroundSize:"100%",backgroundRepeat:"no-repeat"}}),Object(c.jsx)("div",{className:"container mx-auto px-4 h-full",children:Object(c.jsx)("div",{className:"flex content-center items-center justify-center h-full",children:Object(c.jsxs)("div",{className:"w-full lg:w-4/12 px-4",children:[Object(c.jsxs)("div",{className:"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0",children:[Object(c.jsx)("div",{className:"rounded-t mb-0 px-6 py-6"}),Object(c.jsxs)("div",{className:"flex-auto px-4 lg:px-10 py-10 pt-0",children:[Object(c.jsx)("div",{className:"text-gray-500 text-center mb-3 font-bold",children:Object(c.jsx)("small",{children:"Sign in with credentials"})}),Object(c.jsxs)("form",{onSubmit:function(e){return f.apply(this,arguments)},children:[Object(c.jsxs)("div",{className:"relative w-full mb-3",children:[Object(c.jsx)("label",{className:"block uppercase text-gray-700 text-xs font-bold mb-2",htmlFor:"grid-password",children:"Email"}),Object(c.jsx)("input",{onChange:function(e){b(e.target.value)},type:"email",className:"border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full",placeholder:"Email",style:{transition:"all .15s ease"}})]}),Object(c.jsxs)("div",{className:"relative w-full mb-3",children:[Object(c.jsx)("label",{className:"block uppercase text-gray-700 text-xs font-bold mb-2",htmlFor:"grid-password",children:"Password"}),Object(c.jsx)("input",{onChange:function(e){g(e.target.value)},type:"password",className:"border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full",placeholder:"Password",style:{transition:"all .15s ease"}})]}),Object(c.jsx)("div",{children:Object(c.jsxs)("label",{className:"inline-flex items-center cursor-pointer",children:[Object(c.jsx)("input",{id:"customCheckLogin",type:"checkbox",className:"form-checkbox border-0 rounded text-gray-800 ml-1 w-5 h-5",style:{transition:"all .15s ease"}}),Object(c.jsx)("span",{className:"ml-2 text-sm font-semibold text-gray-700",children:"Remember me"})]})}),Object(c.jsx)("div",{className:"text-center mt-6",children:Object(c.jsx)("button",{className:"bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full",type:"submit",style:{transition:"all .15s ease"},children:"Sign In"})})]})]})]}),Object(c.jsx)("div",{className:"flex flex-wrap mt-6",children:Object(c.jsx)("div",{className:"w-1/2 text-right",children:Object(c.jsx)("a",{href:"#pablo",onClick:function(e){return e.preventDefault()},className:"text-gray-300",children:Object(c.jsx)("small",{children:"Create new account"})})})})]})})})]})})})}var g=s(15),f=s(19);function w(e){var t={};return e.Name.trim()||(t.Name="Username Required"),e.Address||(t.Address="Address Required"),0==e.Phone.length?t.Phone="Phone Number Required":e.Phone.length<11?t.Phone="Phone number should be 11 digits long":/[0-9]/.test(e.Phone)||(t.Phone="Invalid Phone Number"),e.email?/^[A-Z0-9._%+=]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(t.email="Invalid Email Address"):t.email="Email Required",e.Password?e.Password&&(t.Password="Password should be 8 or more characters long"):t.Password="Password Required",e.ConfirmPassword?e.ConfirmPassword!==!e.password&&(t.ConfirmPassword="Confirm Password must match password"):t.ConfirmPassword="Password Required",t}function y(e){var t=Object(a.useState)({}),r=Object(u.a)(t,2),l=r[0],n=r[1],o=Object(a.useState)({Name:"",Phone:"",Address:"",email:"",Password:"",ConfirmPassword:""}),i=Object(u.a)(o,2),b=i[0],p=i[1];function h(e){var t=e.target.name,s=e.target.value;p(Object(f.a)(Object(f.a)({},b),{},Object(g.a)({},t,s)))}function j(e){return y.apply(this,arguments)}function y(){return(y=Object(x.a)(d.a.mark((function e(t){var s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"https://fitnessappauth.herokuapp.com/api/users/Register",e.next=4,m.a.post("https://fitnessappauth.herokuapp.com/api/users/Register",t);case 4:return s=e.sent,console.log(s.data.SuccessMessage),e.abrupt("return",s);case 9:e.prev=9,e.t0=e.catch(0),console.log("apicaller error ".concat(e.t0));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function O(){return(O=Object(x.a)(d.a.mark((function t(s){var a,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(w(b)),t.prev=1,s.preventDefault(),a={Name:b.Name,email:b.email,Password:b.Password,Phone:b.Phone,Address:b.Address},t.next=6,j(a);case 6:r=t.sent,console.log(r),console.log(r.data),console.log(r.status),"200"==r.status?(console.log("200 block"),alert("Registratiion successful!"),e.history.push("/")):(console.log("else of 200 block"),alert("Registratiion Failed!")),t.next=17;break;case 13:t.prev=13,t.t0=t.catch(1),alert("Registratiion Failed!"),console.log("error inside handlersubmit ".concat(t.t0));case 17:case"end":return t.stop()}}),t,null,[[1,13]])})))).apply(this,arguments)}return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("main",{children:Object(c.jsxs)("section",{className:"absolute w-full h-full",children:[Object(c.jsx)("div",{className:"absolute top-0 w-full h-full bg-gray-900",style:{backgroundImage:"url("+s(18).default+")",backgroundSize:"100%",backgroundRepeat:"no-repeat"}}),Object(c.jsx)("div",{className:"container mx-auto px-4 h-full",children:Object(c.jsx)("div",{className:"flex content-center items-center justify-center h-full",children:Object(c.jsxs)("div",{className:"w-full lg:w-4/12 px-4",children:[Object(c.jsxs)("div",{className:"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0",children:[Object(c.jsx)("div",{className:"rounded-t mb-0 px-6 py-6"}),Object(c.jsxs)("div",{className:"flex-auto px-4 lg:px-10 py-10 pt-0",children:[Object(c.jsx)("div",{className:"text-gray-500 text-center mb-3 font-bold",children:Object(c.jsx)("small",{children:"Please, register with valid email account"})}),Object(c.jsxs)("form",{onSubmit:function(e){return O.apply(this,arguments)},children:[Object(c.jsxs)("div",{className:"relative w-full mb-3",children:[Object(c.jsx)("label",{className:"block uppercase text-gray-700 text-xs font-bold mb-2",htmlFor:"grid-password",children:"Name"}),Object(c.jsx)("input",{onChange:h,name:"Name",value:b.Name,type:"text",className:"border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full",placeholder:"Name",style:{transition:"all .15s ease"}}),l.Name&&Object(c.jsx)("p",{children:l.Name})]}),Object(c.jsxs)("div",{className:"relative w-full mb-3",children:[Object(c.jsx)("label",{className:"block uppercase text-gray-700 text-xs font-bold mb-2",htmlFor:"grid-password",children:"Phone"}),Object(c.jsx)("input",{onChange:h,name:"Phone",value:b.Phone,type:"tel",className:"border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full",placeholder:"Phone",style:{transition:"all .15s ease"}}),l.Phone&&Object(c.jsx)("p",{children:l.Phone})]}),Object(c.jsxs)("div",{className:"relative w-full mb-3",children:[Object(c.jsx)("label",{className:"block uppercase text-gray-700 text-xs font-bold mb-2",htmlFor:"grid-password",children:"Address"}),Object(c.jsx)("input",{onChange:h,name:"Address",value:b.Address,type:"text",className:"border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full",placeholder:"Address",style:{transition:"all .15s ease"}}),l.Address&&Object(c.jsx)("p",{children:l.Address})]}),Object(c.jsxs)("div",{className:"relative w-full mb-3",children:[Object(c.jsx)("label",{className:"block uppercase text-gray-700 text-xs font-bold mb-2",htmlFor:"grid-password",children:"Email"}),Object(c.jsx)("input",{onChange:h,name:"Email",value:b.Email,type:"email",className:"border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full",placeholder:"Email",style:{transition:"all .15s ease"}}),l.Email&&Object(c.jsx)("p",{children:l.Email})]}),Object(c.jsxs)("div",{className:"relative w-full mb-3",children:[Object(c.jsx)("label",{className:"block uppercase text-gray-700 text-xs font-bold mb-2",htmlFor:"grid-password",children:"Password"}),Object(c.jsx)("input",{onChange:h,name:"Password",value:b.Password,type:"password",className:"border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full",placeholder:"Password",style:{transition:"all .15s ease"}}),l.Password&&Object(c.jsx)("p",{children:l.Password})]}),Object(c.jsxs)("div",{className:"relative w-full mb-3",children:[Object(c.jsx)("label",{className:"block uppercase text-gray-700 text-xs font-bold mb-2",htmlFor:"grid-password",children:"Confirm Password"}),Object(c.jsx)("input",{onChange:h,name:"ConfirmPassword",value:b.ConfirmPassword,type:"password",className:"border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full",placeholder:"Confirm Password",style:{transition:"all .15s ease"}}),l.ConfirmPassword&&Object(c.jsx)("p",{children:l.ConfirmPassword})]}),Object(c.jsx)("div",{children:Object(c.jsxs)("label",{className:"inline-flex items-center cursor-pointer",children:[Object(c.jsx)("input",{id:"customCheckLogin",type:"checkbox",className:"form-checkbox border-0 rounded text-gray-800 ml-1 w-5 h-5",style:{transition:"all .15s ease"}}),Object(c.jsx)("span",{className:"ml-2 text-sm font-semibold text-gray-700",children:"Remember me"})]})}),Object(c.jsx)("div",{className:"text-center mt-6",children:Object(c.jsx)("button",{className:"bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full",type:"submit",style:{transition:"all .15s ease"},children:"Register"})})]})]})]}),Object(c.jsx)("div",{className:"flex flex-wrap mt-6",children:Object(c.jsx)("div",{className:"w-1/2 text-right",children:Object(c.jsx)("a",{href:"#pablo",onClick:function(e){return e.preventDefault()},className:"text-gray-300",children:Object(c.jsx)("small",{children:"Create new account"})})})})]})})})]})})})}var O=s(10),v=s(2);function N(e){var t=r.a.useState(!1),s=Object(u.a)(t,2),a=s[0],l=s[1];return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("nav",{className:(e.transparent?"top-0 absolute z-50 w-full":"relative shadow-lg bg-white shadow-lg")+" flex flex-wrap items-center justify-between px-2 py-3 ",children:Object(c.jsxs)("div",{className:"container px-4 mx-auto flex flex-wrap items-center justify-between",children:[Object(c.jsxs)("div",{className:"w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start",children:[Object(c.jsx)(O.b,{className:(e.transparent?"text-white":"text-gray-800")+" text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase",to:"/",children:"Fitness Portal"}),Object(c.jsx)("button",{className:"cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none",type:"button",onClick:function(){return l(!a)},children:Object(c.jsx)("i",{className:(e.transparent?"text-white":"text-gray-800")+" fas fa-bars"})})]}),Object(c.jsx)("div",{className:"lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none"+(a?" block rounded shadow-lg":" hidden"),id:"example-navbar-warning",children:Object(c.jsxs)("ul",{className:"flex flex-col lg:flex-row list-none mr-auto",children:[Object(c.jsx)("li",{className:"flex items-center",children:Object(c.jsxs)(O.b,{className:(e.transparent?"lg:text-white lg:hover:text-gray-300 text-gray-800":"text-gray-800 hover:text-gray-600")+" px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold",to:"/",children:[Object(c.jsx)("i",{className:(e.transparent?"lg:text-gray-300 text-gray-500":"text-gray-500")+" far fa-file-alt text-lg leading-lg mr-2"})," ","Home"]})}),Object(c.jsxs)("li",{className:"flex items-center",children:[Object(c.jsxs)(O.b,{className:(e.transparent?"lg:text-white lg:hover:text-gray-300 text-gray-800":"text-gray-800 hover:text-gray-600")+" px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold",to:"/registration",children:[Object(c.jsx)("i",{className:(e.transparent?"lg:text-gray-300 text-gray-500":"text-gray-500")+" far fa-file-alt text-lg leading-lg mr-2"})," ","Registration"]}),Object(c.jsxs)(O.b,{className:(e.transparent?"lg:text-white lg:hover:text-gray-300 text-gray-800":"text-gray-800 hover:text-gray-600")+" px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold",to:"/",children:[Object(c.jsx)("i",{className:(e.transparent?"lg:text-gray-300 text-gray-500":"text-gray-500")+" far fa-file-alt text-lg leading-lg mr-2"})," ","Logout"]})]})]})})]})})})}var k=function(){return Object(c.jsxs)(O.a,{children:[Object(c.jsx)(N,{}),Object(c.jsxs)(v.c,{children:[Object(c.jsx)(v.a,{exact:!0,path:"/",component:j}),Object(c.jsx)(v.a,{exact:!0,path:"/home",component:o}),Object(c.jsx)(v.a,{exact:!0,path:"/registration",component:y})]})]})};n.a.render(Object(c.jsx)(k,{}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.5e909771.chunk.js.map