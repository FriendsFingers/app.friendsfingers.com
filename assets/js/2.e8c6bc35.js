(window.webpackJsonp=window.webpackJsonp||[]).push([[2,7,15],{136:function(t,n,e){var r=e(82),a=e(74);t.exports=function(t){return r(a(t))}},137:function(t,n,e){"use strict";var r=e(72);t.exports=function(){var t=r(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},138:function(t,n,e){"use strict";var r=e(158)(!0);t.exports=function(t,n,e){return n+(e?r(t,n).length:1)}},139:function(t,n,e){"use strict";var r=e(159),a=RegExp.prototype.exec;t.exports=function(t,n){var e=t.exec;if("function"==typeof e){var o=e.call(t,n);if("object"!=typeof o)throw new TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return a.call(t,n)}},140:function(t,n,e){"use strict";e(160);var r=e(77),a=e(39),o=e(21),i=e(74),s=e(71),c=e(141),u=s("species"),l=!o(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),f=function(){var t=/(?:)/,n=t.exec;t.exec=function(){return n.apply(this,arguments)};var e="ab".split(t);return 2===e.length&&"a"===e[0]&&"b"===e[1]}();t.exports=function(t,n,e){var p=s(t),d=!o(function(){var n={};return n[p]=function(){return 7},7!=""[t](n)}),v=d?!o(function(){var n=!1,e=/a/;return e.exec=function(){return n=!0,null},"split"===t&&(e.constructor={},e.constructor[u]=function(){return e}),e[p](""),!n}):void 0;if(!d||!v||"replace"===t&&!l||"split"===t&&!f){var h=/./[p],g=e(i,p,""[t],function(t,n,e,r,a){return n.exec===c?d&&!a?{done:!0,value:h.call(n,e,r)}:{done:!0,value:t.call(e,n,r)}:{done:!1}}),m=g[0],b=g[1];r(String.prototype,t,m),a(RegExp.prototype,p,2==n?function(t,n){return b.call(t,this,n)}:function(t){return b.call(t,this)})}}},141:function(t,n,e){"use strict";var r,a,o=e(137),i=RegExp.prototype.exec,s=String.prototype.replace,c=i,u=(r=/a/,a=/b*/g,i.call(r,"a"),i.call(a,"a"),0!==r.lastIndex||0!==a.lastIndex),l=void 0!==/()??/.exec("")[1];(u||l)&&(c=function(t){var n,e,r,a,c=this;return l&&(e=new RegExp("^"+c.source+"$(?!\\s)",o.call(c))),u&&(n=c.lastIndex),r=i.call(c,t),u&&r&&(c.lastIndex=c.global?r.index+r[0].length:n),l&&r&&r.length>1&&s.call(r[0],e,function(){for(a=1;a<arguments.length-2;a++)void 0===arguments[a]&&(r[a]=void 0)}),r}),t.exports=c},142:function(t,n,e){var r=e(73).f,a=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in a||e(20)&&r(a,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(t){return""}}})},143:function(t,n,e){"use strict";e(144),e(157),e(161);n.a={data:function(){return{zeroAddress:"0x0000000000000000000000000000000000000000"}},computed:{dapp:{get:function(){return this.$store.getters.dapp}}},methods:{getParam:function(t){var n={};return window.location.href.replace(location.hash,"").replace(/[?&]+([^=&]+)=?([^&]*)?/gi,function(t,e,r){n[e]=void 0!==r?r:""}),t?n[t]?n[t]:null:n},promisify:function(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),r=1;r<n;r++)e[r-1]=arguments[r];return new Promise(function(n,r){t.apply(void 0,e.concat([function(t,e){t?r(t):n(e)}]))})},isMobile:function(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch(t){return!1}},makeToast:function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.$bvToast.toast(n,{title:t,variant:e,solid:!0})},formatStructure:function(t){return 0===parseInt(t[0].valueOf())?null:{id:parseInt(t[0].valueOf()),address:t[1],fingerprint:this.formatFingerprint(t[2]),creationDate:1e3*t[3].valueOf(),stakedTokens:parseFloat(this.dapp.web3.fromWei(t[4])),usedTokens:parseFloat(this.dapp.web3.fromWei(t[5])),data:t[6],approved:t[7]}},formatFingerprint:function(t){var n=t.replace("0x","").match(new RegExp(".{1,6}","g"));return{borderColor:"#".concat(n[0]),backgroundColor:"#".concat(n[1]),mainColor:"#".concat(n[2])}}}}},144:function(t,n,e){var r=e(9),a=e(145),o=e(73).f,i=e(149).f,s=e(155),c=e(137),u=r.RegExp,l=u,f=u.prototype,p=/a/g,d=/a/g,v=new u(p)!==p;if(e(20)&&(!v||e(21)(function(){return d[e(71)("match")]=!1,u(p)!=p||u(d)==d||"/a/i"!=u(p,"i")}))){u=function(t,n){var e=this instanceof u,r=s(t),o=void 0===n;return!e&&r&&t.constructor===u&&o?t:a(v?new l(r&&!o?t.source:t,n):l((r=t instanceof u)?t.source:t,r&&o?c.call(t):n),e?this:f,u)};for(var h=function(t){t in u||o(u,t,{configurable:!0,get:function(){return l[t]},set:function(n){l[t]=n}})},g=i(l),m=0;g.length>m;)h(g[m++]);f.constructor=u,u.prototype=f,e(77)(r,"RegExp",u)}e(156)("RegExp")},145:function(t,n,e){var r=e(16),a=e(146).set;t.exports=function(t,n,e){var o,i=n.constructor;return i!==e&&"function"==typeof i&&(o=i.prototype)!==e.prototype&&r(o)&&a&&a(t,o),t}},146:function(t,n,e){var r=e(16),a=e(72),o=function(t,n){if(a(t),!r(n)&&null!==n)throw TypeError(n+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,n,r){try{(r=e(42)(Function.call,e(147).f(Object.prototype,"__proto__").set,2))(t,[]),n=!(t instanceof Array)}catch(t){n=!0}return function(t,e){return o(t,e),n?t.__proto__=e:r(t,e),t}}({},!1):void 0),check:o}},147:function(t,n,e){var r=e(148),a=e(81),o=e(136),i=e(80),s=e(78),c=e(79),u=Object.getOwnPropertyDescriptor;n.f=e(20)?u:function(t,n){if(t=o(t),n=i(n,!0),c)try{return u(t,n)}catch(t){}if(s(t,n))return a(!r.f.call(t,n),t[n])}},148:function(t,n){n.f={}.propertyIsEnumerable},149:function(t,n,e){var r=e(150),a=e(154).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,a)}},150:function(t,n,e){var r=e(78),a=e(136),o=e(151)(!1),i=e(153)("IE_PROTO");t.exports=function(t,n){var e,s=a(t),c=0,u=[];for(e in s)e!=i&&r(s,e)&&u.push(e);for(;n.length>c;)r(s,e=n[c++])&&(~o(u,e)||u.push(e));return u}},151:function(t,n,e){var r=e(136),a=e(75),o=e(152);t.exports=function(t){return function(n,e,i){var s,c=r(n),u=a(c.length),l=o(i,u);if(t&&e!=e){for(;u>l;)if((s=c[l++])!=s)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===e)return t||l||0;return!t&&-1}}},152:function(t,n,e){var r=e(76),a=Math.max,o=Math.min;t.exports=function(t,n){return(t=r(t))<0?a(t+n,0):o(t,n)}},153:function(t,n,e){var r=e(41)("keys"),a=e(40);t.exports=function(t){return r[t]||(r[t]=a(t))}},154:function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},155:function(t,n,e){var r=e(16),a=e(37),o=e(71)("match");t.exports=function(t){var n;return r(t)&&(void 0!==(n=t[o])?!!n:"RegExp"==a(t))}},156:function(t,n,e){"use strict";var r=e(9),a=e(73),o=e(20),i=e(71)("species");t.exports=function(t){var n=r[t];o&&n&&!n[i]&&a.f(n,i,{configurable:!0,get:function(){return this}})}},157:function(t,n,e){"use strict";var r=e(72),a=e(75),o=e(138),i=e(139);e(140)("match",1,function(t,n,e,s){return[function(e){var r=t(this),a=null==e?void 0:e[n];return void 0!==a?a.call(e,r):new RegExp(e)[n](String(r))},function(t){var n=s(e,t,this);if(n.done)return n.value;var c=r(t),u=String(this);if(!c.global)return i(c,u);var l=c.unicode;c.lastIndex=0;for(var f,p=[],d=0;null!==(f=i(c,u));){var v=String(f[0]);p[d]=v,""===v&&(c.lastIndex=o(u,a(c.lastIndex),l)),d++}return 0===d?null:p}]})},158:function(t,n,e){var r=e(76),a=e(74);t.exports=function(t){return function(n,e){var o,i,s=String(a(n)),c=r(e),u=s.length;return c<0||c>=u?t?"":void 0:(o=s.charCodeAt(c))<55296||o>56319||c+1===u||(i=s.charCodeAt(c+1))<56320||i>57343?t?s.charAt(c):o:t?s.slice(c,c+2):i-56320+(o-55296<<10)+65536}}},159:function(t,n,e){var r=e(37),a=e(71)("toStringTag"),o="Arguments"==r(function(){return arguments}());t.exports=function(t){var n,e,i;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),a))?e:o?r(n):"Object"==(i=r(n))&&"function"==typeof n.callee?"Arguments":i}},160:function(t,n,e){"use strict";var r=e(141);e(38)({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},161:function(t,n,e){"use strict";var r=e(72),a=e(83),o=e(75),i=e(76),s=e(138),c=e(139),u=Math.max,l=Math.min,f=Math.floor,p=/\$([$&`']|\d\d?|<[^>]*>)/g,d=/\$([$&`']|\d\d?)/g;e(140)("replace",2,function(t,n,e,v){return[function(r,a){var o=t(this),i=null==r?void 0:r[n];return void 0!==i?i.call(r,o,a):e.call(String(o),r,a)},function(t,n){var a=v(e,t,this,n);if(a.done)return a.value;var f=r(t),p=String(this),d="function"==typeof n;d||(n=String(n));var g=f.global;if(g){var m=f.unicode;f.lastIndex=0}for(var b=[];;){var x=c(f,p);if(null===x)break;if(b.push(x),!g)break;""===String(x[0])&&(f.lastIndex=s(p,o(f.lastIndex),m))}for(var w,k="",_=0,y=0;y<b.length;y++){x=b[y];for(var E=String(x[0]),O=u(l(i(x.index),p.length),0),$=[],C=1;C<x.length;C++)$.push(void 0===(w=x[C])?w:String(w));var S=x.groups;if(d){var I=[E].concat($,O,p);void 0!==S&&I.push(S);var A=String(n.apply(void 0,I))}else A=h(E,p,O,$,S,n);O>=_&&(k+=p.slice(_,O)+A,_=O+E.length)}return k+p.slice(_)}];function h(t,n,r,o,i,s){var c=r+t.length,u=o.length,l=d;return void 0!==i&&(i=a(i),l=p),e.call(s,l,function(e,a){var s;switch(a.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,r);case"'":return n.slice(c);case"<":s=i[a.slice(1,-1)];break;default:var l=+a;if(0===l)return e;if(l>u){var p=f(l/10);return 0===p?e:p<=u?void 0===o[p-1]?a.charAt(1):o[p-1]+a.charAt(1):e}s=o[l-1]}return void 0===s?"":s})}})},162:function(t,n,e){},163:function(t,n,e){"use strict";var r=e(162);e.n(r).a},164:function(t,n,e){"use strict";e.r(n);e(142);var r={name:"Header",mixins:[e(143).a],computed:{dapp:{get:function(){return this.$store.getters.dapp}}},created:function(){var t=this;setTimeout(function(){t.dapp.metamask.installed?t.dapp.metamask.netId!==t.dapp.network.current.id&&t.makeToast("Wrong Network","You are on the wrong Network. Please switch your Ethereum Provider on ".concat(t.dapp.network.current.name,"."),"warning"):t.makeToast("No Ethereum Provider","Please install MetaMask ".concat(t.isMobile()?"or a mobile browser like Trust Wallet or Coinbase Wallet":""," to use DApp."),"warning")},2e3)},methods:{disconnect:function(){this.$store.dispatch("disconnect")}}},a=e(15),o=Object(a.a)(r,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-navbar",{attrs:{toggleable:"md",variant:"light",fixed:"top",sticky:!0}},[e("b-navbar-toggle",{attrs:{target:"nav_collapse"}}),t._v(" "),e("b-navbar-brand",{attrs:{to:"/"}},[e("b-img",{attrs:{src:t.$withBase("/assets/images/logo/friendsfingers.svg"),rounded:"circle",height:"24",alt:t.$site.title}}),t._v("\n        "+t._s(t.$site.title)+"\n    ")],1),t._v(" "),e("b-badge",{attrs:{variant:"danger"}},[t._v("beta")]),t._v(" "),e("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[e("b-navbar-nav",[e("b-nav-item",{attrs:{to:t.$withBase("/dao")}},[t._v("DAO")]),t._v(" "),e("b-nav-item",{attrs:{to:t.$withBase("/faucet")}},[t._v("Faucet")])],1),t._v(" "),e("b-navbar-nav",{staticClass:"ml-auto"},[""===t.dapp.metamask.address?e("b-nav-item",{attrs:{to:t.$withBase("/dashboard")}},[t._v("Connect")]):e("b-nav-item-dropdown",{attrs:{text:t._f("truncate")(t.dapp.metamask.address,12),right:""}},[e("b-dropdown-item",{attrs:{to:t.$withBase("/dashboard")}},[t._v("Your profile")])],1)],1)],1)],1)},[],!1,null,null,null);n.default=o.exports},165:function(t,n,e){"use strict";e.r(n);var r={name:"Footer",computed:{dapp:{get:function(){return this.$store.getters.dapp}},tokenLink:{get:function(){return this.dapp.instances.token?"".concat(this.dapp.network.current.etherscanLink,"/token/").concat(this.dapp.instances.token.address):"#"}},daoLink:{get:function(){return this.dapp.instances.dao?"".concat(this.dapp.network.current.etherscanLink,"/address/").concat(this.dapp.instances.dao.address):"#"}}}},a=e(15),o=Object(a.a)(r,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-row",{staticClass:"m-0"},[e("b-col",{staticClass:"text-center p-0",attrs:{lg:"10","offset-lg":"1"}},[e("div",{staticClass:"mt-4"},[e("ui--social-links")],1),t._v(" "),e("ul",{staticClass:"list-inline mt-2"},[e("li",{staticClass:"list-inline-item"},[e("b-badge",{attrs:{variant:t.dapp.network.current.color}},[t._v(t._s(t.dapp.network.current.name))])],1),t._v(" "),e("li",{staticClass:"list-inline-item"},[e("font-awesome-icon",{staticClass:"purple",attrs:{icon:["fab","ethereum"]}}),t._v(" "),e("b-link",{attrs:{href:t.tokenLink,target:"_blank"}},[e("small",[t._v("Shaka Token")])]),t._v(" "),e("font-awesome-icon",{staticClass:"purple",attrs:{icon:["fab","ethereum"]}}),t._v(" "),e("b-link",{attrs:{href:t.daoLink,target:"_blank"}},[e("small",[t._v("DAO")])])],1),t._v(" "),e("li",{staticClass:"list-inline-item"},[e("small",[t._v("\n                    © 2019 🤙\n                    "),e("b-link",{attrs:{href:"https://www.friendsfingers.com",target:"_blank"}},[t._v("FriendsFingers")])],1)])])])],1)},[],!1,null,null,null);n.default=o.exports},174:function(t,n,e){"use strict";e.r(n);var r=e(164),a=e(165),o={components:{SiteHeader:r.default,SiteFooter:a.default},computed:{page:function(){return this.$page.frontmatter.component||null},bodyClass:function(){return this.page.toLowerCase()}}},i=(e(163),e(15)),s=Object(i.a)(o,function(){var t=this.$createElement,n=this._self._c||t;return n("div",{class:"body "+this.bodyClass},[n("site-header"),this._v(" "),n("transition",{attrs:{name:"fade",mode:"out-in"}},[this.page?n(this.page,{key:this.page,tag:"component"}):this._e()],1),this._v(" "),n("site-footer")],1)},[],!1,null,null,null);n.default=s.exports}}]);