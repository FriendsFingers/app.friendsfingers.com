(window.webpackJsonp=window.webpackJsonp||[]).push([[4,11,17],{125:function(t,e,a){"use strict";a(127),a(128),a(129);var n=a(130),r=a.n(n);e.a={data:function(){return{zeroAddress:"0x0000000000000000000000000000000000000000"}},computed:{dapp:{get:function(){return this.$store.getters.dapp}}},methods:{getParam:function(t){var e={};return window.location.href.replace(location.hash,"").replace(/[?&]+([^=&]+)=?([^&]*)?/gi,(function(t,a,n){e[a]=void 0!==n?n:""})),t?e[t]?e[t]:null:e},ethGetCall:function(t){for(var e=arguments.length,a=new Array(e>1?e-1:0),n=1;n<e;n++)a[n-1]=arguments[n];return a.push({from:this.dapp.fallbackAddress}),this.promisify.apply(this,[t].concat(a))},promisify:function(t){for(var e=arguments.length,a=new Array(e>1?e-1:0),n=1;n<e;n++)a[n-1]=arguments[n];return new Promise((function(e,n){t.apply(void 0,a.concat([function(t,a){t?n(t):e(a)}]))}))},isMobile:function(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch(t){return!1}},generateQRCode:function(t){return r.a.toDataURL(t,{color:{dark:"#b733a7",light:"#0000"}})},makeToast:function(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.$bvToast.toast(e,{title:t,variant:a,solid:!0})},formatStructure:function(t){return 0===parseInt(t[0].valueOf())?null:{id:parseInt(t[0].valueOf()),address:t[1],fingerprint:this.formatFingerprint(t[2]),creationDate:1e3*t[3].valueOf(),stakedTokens:parseFloat(this.dapp.web3.fromWei(t[4])),usedTokens:parseFloat(this.dapp.web3.fromWei(t[5])),data:t[6],approved:t[7]}},formatFingerprint:function(t){var e=t.replace("0x","").match(new RegExp(".{1,6}","g"));return{borderColor:"#".concat(e[0]),backgroundColor:"#".concat(e[1]),mainColor:"#".concat(e[2])}}}}},133:function(t,e,a){},138:function(t,e,a){"use strict";var n=a(133);a.n(n).a},148:function(t,e,a){"use strict";a.r(e);var n={name:"Footer",computed:{dapp:{get:function(){return this.$store.getters.dapp}},tokenLink:{get:function(){return this.dapp.instances.token?"".concat(this.dapp.network.current.etherscanLink,"/token/").concat(this.dapp.instances.token.address):"#"}},daoLink:{get:function(){return this.dapp.instances.dao?"".concat(this.dapp.network.current.etherscanLink,"/address/").concat(this.dapp.instances.dao.address):"#"}}}},r=a(11),s=Object(r.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-row",{staticClass:"m-0"},[a("b-col",{staticClass:"text-center p-0",attrs:{lg:"10","offset-lg":"1"}},[a("div",{staticClass:"mt-4"},[a("ui--social-links")],1),t._v(" "),a("ul",{staticClass:"list-inline mt-2"},[a("li",{staticClass:"list-inline-item"},[a("b-badge",{attrs:{variant:t.dapp.network.current.color}},[t._v(t._s(t.dapp.network.current.name))])],1),t._v(" "),a("li",{staticClass:"list-inline-item"},[a("font-awesome-icon",{staticClass:"purple",attrs:{icon:["fab","ethereum"]}}),t._v(" "),a("b-link",{attrs:{href:t.tokenLink,target:"_blank"}},[a("small",[t._v("Shaka Token")])]),t._v(" "),a("font-awesome-icon",{staticClass:"purple",attrs:{icon:["fab","ethereum"]}}),t._v(" "),a("b-link",{attrs:{href:t.daoLink,target:"_blank"}},[a("small",[t._v("DAO")])])],1),t._v(" "),a("li",{staticClass:"list-inline-item"},[a("small",[t._v("\n                    © 2019 🤙\n                    "),a("b-link",{attrs:{href:"https://www.friendsfingers.com",target:"_blank"}},[t._v("FriendsFingers")])],1)])])])],1)}),[],!1,null,null,null);e.default=s.exports},149:function(t,e,a){"use strict";a.r(e);a(126);var n={name:"Header",mixins:[a(125).a],data:function(){return{query:""}},computed:{dapp:{get:function(){return this.$store.getters.dapp}}},created:function(){var t=this;this.$validator.extend("eth_address",{getMessage:function(t){return"Insert a valid Ethereum address."},validate:function(e){return t.dapp.web3.isAddress(e)}}),setTimeout((function(){t.dapp.metamask.installed?t.dapp.metamask.netId!==t.dapp.network.current.id&&t.makeToast("Wrong Network","You are on the wrong Network. Please switch your Ethereum Provider on ".concat(t.dapp.network.current.name,"."),"warning"):t.makeToast("No Ethereum Provider","Please install MetaMask ".concat(t.isMobile()?"or a mobile Web3 browser":""," to use DApp."),"warning")}),2e3)},methods:{search:function(){var t=this;this.$validator.validateAll().then((function(e){e&&(window.location.href=t.$withBase("/member/?ref=".concat(t.query)))})).catch((function(t){console.log(t)}))},disconnect:function(){this.$store.dispatch("disconnect")}}},r=a(11),s=Object(r.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-navbar",{staticClass:"main-navbar",attrs:{toggleable:"md",variant:"light",fixed:"top",sticky:!0}},[a("b-navbar-toggle",{attrs:{target:"nav_collapse"}}),t._v(" "),a("b-navbar-brand",{attrs:{to:"/"}},[a("b-img",{attrs:{src:t.$withBase("/assets/images/logo/friendsfingers.svg"),rounded:"circle",height:"24",alt:t.$site.title}}),t._v("\n        "+t._s(t.$site.title)+"\n    ")],1),t._v(" "),a("b-badge",{attrs:{variant:"danger"}},[t._v("beta")]),t._v(" "),a("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[a("b-navbar-nav",[a("b-nav-item",{attrs:{to:t.$withBase("/dao")}},[t._v("DAO")]),t._v(" "),a("b-nav-item",{attrs:{to:t.$withBase("/dealer")}},[t._v("Dealer")]),t._v(" "),a("b-nav-item",{attrs:{to:t.$withBase("/faucet")}},[t._v("Faucet")]),t._v(" "),a("b-nav-item",{staticClass:"d-none d-md-block",attrs:{disabled:""}},[t._v("|")]),t._v(" "),a("b-nav-item",{attrs:{href:"https://medium.com/friendsfingers",target:"_blank"}},[t._v("Blog")]),t._v(" "),a("b-nav-item",{attrs:{href:"https://www.friendsfingers.com",target:"_blank"}},[t._v("FriendsFingers")])],1),t._v(" "),a("b-navbar-nav",{staticClass:"ml-auto"},[""===t.dapp.metamask.address?a("b-nav-item",{attrs:{to:t.$withBase("/dashboard")}},[t._v("Connect")]):a("b-nav-item-dropdown",{attrs:{text:t._f("truncate")(t.dapp.metamask.address,10),right:""}},[a("b-dropdown-item",{attrs:{to:t.$withBase("/dashboard")}},[t._v("Dashboard")])],1),t._v(" "),a("b-nav-form",{staticClass:"ml-2 d-none d-lg-block d-xl-block",on:{submit:function(e){return e.preventDefault(),t.search(e)}}},[a("b-form-input",{directives:[{name:"validate",rawName:"v-validate",value:{required:!0,eth_address:!0},expression:"{ required: true, eth_address: true }"}],staticClass:"mt-1",class:{"is-invalid":t.errors.has("query")},attrs:{id:"query",name:"query",size:"sm","data-vv-as":"Query",placeholder:"0x123456789..."},model:{value:t.query,callback:function(e){t.query=e},expression:"query"}}),t._v(" "),a("b-button",{staticClass:"mt-1",attrs:{variant:"primary",type:"submit",size:"sm"}},[a("font-awesome-icon",{attrs:{icon:"search"}})],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=s.exports},194:function(t,e,a){"use strict";a.r(e);var n=a(149),r=a(148),s={components:{SiteHeader:n.default,SiteFooter:r.default},computed:{page:function(){return this.$page.frontmatter.component||null},bodyClass:function(){return this.page.toLowerCase()}}},i=(a(138),a(11)),o=Object(i.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{class:"body "+this.bodyClass},[e("site-header"),this._v(" "),e("transition",{attrs:{name:"fade",mode:"out-in"}},[this.page?e(this.page,{key:this.page,tag:"component"}):this._e()],1),this._v(" "),e("site-footer")],1)}),[],!1,null,null,null);e.default=o.exports}}]);