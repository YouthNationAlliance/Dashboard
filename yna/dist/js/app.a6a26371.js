(function(t){function e(e){for(var a,s,o=e[0],l=e[1],c=e[2],d=0,v=[];d<o.length;d++)s=o[d],i[s]&&v.push(i[s][0]),i[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(v.length)v.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,o=1;o<n.length;o++){var l=n[o];0!==i[l]&&(a=!1)}a&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},i={app:0},r=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1:function(t,e){},2:function(t,e){},3:function(t,e){},4:function(t,e){},5:function(t,e){},"56d7":function(t,e,n){"use strict";n.r(e);var a=n("2b0e"),i=n("bb71");n("da64");a["a"].use(i["a"],{iconfont:"md"});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-toolbar",{attrs:{app:""}},[n("v-toolbar-title",{staticClass:"headline text-uppercase"},[n("span",[t._v("YNA")]),n("span",{staticClass:"font-weight-light"},[t._v("lliance")])]),n("v-spacer"),n("v-btn",{attrs:{flat:"",href:"https://www.ynalliance.ca/",target:"_blank"}},[n("span",{staticClass:"mr-2"},[t._v("Home")])]),n("v-btn",{attrs:{flat:""}},[n("span",{staticClass:"mr-2"},[t._v("Login")])])],1),n("v-content",[t.loggedin?n("h1",[t._v("Logged in!")]):n("Login"),n("v-btn",{attrs:{color:"success"}},[t._v("Success")])],1)],1)},s=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-xs-center"},[a("v-dialog",{attrs:{width:"600",scrollable:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-btn",{attrs:{slot:"activator",color:"red lighten-2",dark:""},slot:"activator"},[t._v("\n      Click Me\n    ")]),a("v-card",[a("v-card-title",{staticClass:"headline grey lighten-2",attrs:{"primary-title":""}},[a("span",[t._v("Connect with us on social media")])]),a("v-card-text",{staticStyle:{height:"500px"}},[a("img",{staticStyle:{width:"550px"},attrs:{src:n("8cc6")}}),a("v-list",{attrs:{"two-line":""}},[t._l(t.items,function(e,n){return[e.header?a("v-subheader",{key:e.header},[t._v("\n          "+t._s(e.header)+"\n        ")]):e.divider?a("v-divider",{key:n,attrs:{inset:e.inset}}):a("v-list-tile",{key:e.title,attrs:{avatar:""},on:{click:function(t){}}},[a("v-list-tile-avatar",[a("img",{attrs:{src:e.avatar}})]),a("v-list-tile-content",[a("v-list-tile-title",{domProps:{innerHTML:t._s(e.title)}}),a("v-list-tile-sub-title",{domProps:{innerHTML:t._s(e.subtitle)}})],1)],1)]})],2)],1),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",flat:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n          Close\n        ")])],1)],1)],1)],1)},l=[],c={data(){return{dialog:!1,items:[{avatar:"https://cdn.vuetifyjs.com/images/lists/1.jpg",title:"Visit us online",subtitle:"www.ynalliance.ca"},{divider:!0,inset:!0},{avatar:"https://cdn.vuetifyjs.com/images/lists/2.jpg",title:"Facebook",subtitle:"@teamyna"},{divider:!0,inset:!0},{avatar:"https://cdn.vuetifyjs.com/images/lists/3.jpg",title:"Instagram",subtitle:"@teamyna"}]}}},u=c,d=n("2877"),v=n("6544"),p=n.n(v),f=n("8336"),b=n("b0af"),_=n("99d9"),h=n("12b2"),m=n("169a"),g=n("ce7e"),w=n("8860"),y=n("ba95"),x=n("c954"),V=n("5d23"),k=n("9910"),C=n("e0c7"),j=Object(d["a"])(u,o,l,!1,null,null,null);j.options.__file="Connect.vue";j.exports;p()(j,{VBtn:f["a"],VCard:b["a"],VCardActions:_["a"],VCardText:_["b"],VCardTitle:h["a"],VDialog:m["a"],VDivider:g["a"],VList:w["a"],VListTile:y["a"],VListTileAvatar:x["a"],VListTileContent:V["a"],VListTileSubTitle:V["b"],VListTileTitle:V["c"],VSpacer:k["a"],VSubheader:C["a"]});var T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:"","fill-height":""}},[n("v-layout",{attrs:{"align-center":"","justify-center":""}},[n("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[n("h1",[t._v("Join us here.")]),n("v-form",{attrs:{"align-center":"","justify-center":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-text-field",{attrs:{rules:t.emailRules,label:"Email",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),n("v-text-field",{attrs:{"append-icon":t.show1?"visibility_off":"visibility",rules:t.passRules,type:t.show1?"text":"password",name:"input-10-1",label:"Password",hint:"At least 8 characters",counter:""},on:{"click:append":function(e){t.show1=!t.show1}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),n("v-btn",{on:{click:t.login}},[t._v("Login")]),n("v-btn",{on:{click:t.signup}},[t._v("Signup")])],1)],1)],1)],1)},O=[],L={data:()=>({valid:!1,email:"",password:"",emailRules:[t=>!!t||"Email is required",t=>/.+@.+/.test(t)||"Email must be valid"],passRules:[t=>!!t||"Password is required",t=>t.length>=8||"Min 8 characters"]}),methods:{login(){this.$refs.form.validate()},signup(){}}},S=L,M=n("a523"),P=n("0e8f"),E=n("4bd4"),F=n("a722"),A=n("2677"),$=Object(d["a"])(S,T,O,!1,null,null,null);$.options.__file="Login.vue";var D=$.exports;p()($,{VBtn:f["a"],VContainer:M["a"],VFlex:P["a"],VForm:E["a"],VLayout:F["a"],VTextField:A["a"]});var N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",[t._v(" Please fill in your info")])},R=[],U={data:()=>({valid:!1,name:""})},q=U,B=Object(d["a"])(q,N,R,!1,null,null,null);B.options.__file="Setup.vue";B.exports;p()(B,{VForm:E["a"],VTextField:A["a"]});n("8055");var H={name:"App",components:{Login:D},data(){return{loggedin:!1,isConnected:!1,socketMessage:""}},mounted:function(){},sockets:{connect(){this.isConnected=!0},disconnect(){this.isConnected=!1}},methods:{login(){this.$socket.emit("pingServer","PING!")},logout(){},signup(){}},beforeMount(){this.login()}},I=H,J=n("7496"),G=n("549c"),Y=n("71d9"),z=n("2a7f"),K=Object(d["a"])(I,r,s,!1,null,null,null);K.options.__file="App.vue";var Q=K.exports;p()(K,{VApp:J["a"],VBtn:f["a"],VContent:G["a"],VSpacer:k["a"],VToolbar:Y["a"],VToolbarTitle:z["a"]});var W=n("92d7"),X=n.n(W),Z=n("0a12"),tt=n.n(Z);n.d(e,"SocketInstance",function(){return et}),a["a"].config.productionTip=!1;const et=X()("http://localhost:5000");a["a"].use(tt.a,et),new a["a"]({render:t=>t(Q)}).$mount("#app")},8011:function(t,e){function n(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="8011"},"8cc6":function(t,e,n){t.exports=n.p+"img/modal.eb93af7b.png"},be46:function(t,e,n){var a={"./uws_darwin_46.node":"ec31","./uws_darwin_47.node":"adaa","./uws_darwin_48.node":"e4e2","./uws_darwin_51.node":"8b49","./uws_darwin_57.node":"c539","./uws_linux_46.node":"0a86","./uws_linux_47.node":"f868","./uws_linux_48.node":"73aa","./uws_linux_51.node":"9d78","./uws_win32_48.node":"8ba5","./uws_win32_51.node":"ea78"};function i(t){var e=r(t);return n(e)}function r(t){var e=a[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}i.keys=function(){return Object.keys(a)},i.resolve=r,t.exports=i,i.id="be46"}});
//# sourceMappingURL=app.a6a26371.js.map