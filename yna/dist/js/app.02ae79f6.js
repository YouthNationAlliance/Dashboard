(function(t){function e(e){for(var i,r,s=e[0],o=e[1],c=e[2],d=0,p=[];d<s.length;d++)r=s[d],n[r]&&p.push(n[r][0]),n[r]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);u&&u(e);while(p.length)p.shift()();return l.push.apply(l,c||[]),a()}function a(){for(var t,e=0;e<l.length;e++){for(var a=l[e],i=!0,s=1;s<a.length;s++){var o=a[s];0!==n[o]&&(i=!1)}i&&(l.splice(e--,1),t=r(r.s=a[0]))}return t}var i={},n={app:0},l=[];function r(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=i,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(a,i,function(e){return t[e]}.bind(null,i));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=o;l.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);var i=a("2b0e"),n=a("bb71");a("da64");i["a"].use(n["a"],{iconfont:"md"});var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-toolbar",{attrs:{app:""}},[a("v-toolbar-title",{staticClass:"headline text-uppercase"},[a("span",[t._v("YNA")]),a("span",{staticClass:"font-weight-light"},[t._v("lliance")])]),a("v-spacer"),a("v-btn",{attrs:{flat:"",href:"https://www.ynalliance.ca/",target:"_blank"}},[a("span",{staticClass:"mr-2"},[t._v("Home")])]),a("v-btn",{attrs:{flat:""}},[a("span",{staticClass:"mr-2"},[t._v("Login")])])],1),a("v-content",[a("Setup")],1)],1)},r=[],s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"text-xs-center"},[i("v-dialog",{attrs:{width:"600",scrollable:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-btn",{attrs:{slot:"activator",color:"red lighten-2",dark:""},slot:"activator"},[t._v("\n      Click Me\n    ")]),i("v-card",[i("v-card-title",{staticClass:"headline grey lighten-2",attrs:{"primary-title":""}},[i("span",[t._v("Connect with us on social media")])]),i("v-card-text",{staticStyle:{height:"500px"}},[i("img",{staticStyle:{width:"550px"},attrs:{src:a("8cc6")}}),i("v-list",{attrs:{"two-line":""}},[t._l(t.items,function(e,a){return[e.header?i("v-subheader",{key:e.header},[t._v("\n          "+t._s(e.header)+"\n        ")]):e.divider?i("v-divider",{key:a,attrs:{inset:e.inset}}):i("v-list-tile",{key:e.title,attrs:{avatar:""},on:{click:function(t){}}},[i("v-list-tile-avatar",[i("img",{attrs:{src:e.avatar}})]),i("v-list-tile-content",[i("v-list-tile-title",{domProps:{innerHTML:t._s(e.title)}}),i("v-list-tile-sub-title",{domProps:{innerHTML:t._s(e.subtitle)}})],1)],1)]})],2)],1),i("v-divider"),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"primary",flat:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n          Close\n        ")])],1)],1)],1)],1)},o=[],c={data(){return{dialog:!1,items:[{avatar:"https://cdn.vuetifyjs.com/images/lists/1.jpg",title:"Visit us online",subtitle:"www.ynalliance.ca"},{divider:!0,inset:!0},{avatar:"https://cdn.vuetifyjs.com/images/lists/2.jpg",title:"Facebook",subtitle:"@teamyna"},{divider:!0,inset:!0},{avatar:"https://cdn.vuetifyjs.com/images/lists/3.jpg",title:"Instagram",subtitle:"@teamyna"}]}}},u=c,d=a("2877"),p=a("6544"),v=a.n(p),f=a("8336"),b=a("b0af"),m=a("99d9"),h=a("12b2"),g=a("169a"),_=a("ce7e"),y=a("8860"),w=a("ba95"),x=a("c954"),V=a("5d23"),j=a("9910"),k=a("e0c7"),T=Object(d["a"])(u,s,o,!1,null,null,null);T.options.__file="Connect.vue";T.exports;v()(T,{VBtn:f["a"],VCard:b["a"],VCardActions:m["a"],VCardText:m["b"],VCardTitle:h["a"],VDialog:g["a"],VDivider:_["a"],VList:y["a"],VListTile:w["a"],VListTileAvatar:x["a"],VListTileContent:V["a"],VListTileSubTitle:V["b"],VListTileTitle:V["c"],VSpacer:j["a"],VSubheader:k["a"]});var C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:"","fill-height":""}},[a("v-layout",{attrs:{"align-center":"","justify-center":""}},[a("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[a("h1",[t._v("Join us here.")]),a("v-form",{attrs:{"align-center":"","justify-center":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-text-field",{attrs:{rules:t.emailRules,label:"Email",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("v-text-field",{attrs:{"append-icon":t.show1?"visibility_off":"visibility",rules:t.passRules,type:t.show1?"text":"password",name:"input-10-1",label:"Password",hint:"At least 8 characters",counter:""},on:{"click:append":function(e){t.show1=!t.show1}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),a("v-btn",{on:{click:t.login}},[t._v("Login")]),a("v-btn",{on:{click:t.signup}},[t._v("Signup")])],1)],1)],1)],1)},S=[],O={data:()=>({valid:!1,email:"",password:"",emailRules:[t=>!!t||"Email is required",t=>/.+@.+/.test(t)||"Email must be valid"],passRules:[t=>!!t||"Password is required",t=>t.length>=8||"Min 8 characters"]}),methods:{login(){this.$refs.form.validate()},signup(){}}},L=O,P=a("a523"),M=a("0e8f"),A=a("4bd4"),E=a("a722"),F=a("2677"),$=Object(d["a"])(L,C,S,!1,null,null,null);$.options.__file="Login.vue";$.exports;v()($,{VBtn:f["a"],VContainer:P["a"],VFlex:M["a"],VForm:A["a"],VLayout:E["a"],VTextField:F["a"]});var R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",[t._v(" Please fill in your info")])},q=[],B={data:()=>({valid:!1,name:""})},H=B,J=Object(d["a"])(H,R,q,!1,null,null,null);J.options.__file="Setup.vue";var D=J.exports;v()(J,{VForm:A["a"],VTextField:F["a"]});var I={name:"App",components:{Setup:D},data(){return{}},mounted:function(){}},N=I,Y=a("7496"),z=a("549c"),G=a("71d9"),K=a("2a7f"),Q=Object(d["a"])(N,l,r,!1,null,null,null);Q.options.__file="App.vue";var U=Q.exports;v()(Q,{VApp:Y["a"],VBtn:f["a"],VContent:z["a"],VSpacer:j["a"],VToolbar:G["a"],VToolbarTitle:K["a"]}),i["a"].config.productionTip=!1,new i["a"]({render:t=>t(U)}).$mount("#app")},"8cc6":function(t,e,a){t.exports=a.p+"img/modal.eb93af7b.png"}});
//# sourceMappingURL=app.02ae79f6.js.map