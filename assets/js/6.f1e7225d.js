(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{363:function(t,n,e){var r=e(215),o=e(207);t.exports=function(t){return r(o(t))}},364:function(t,n,e){"use strict";var r=e(205);t.exports=function(){var t=r(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},365:function(t,n,e){"use strict";var r=e(385)(!0);t.exports=function(t,n,e){return n+(e?r(t,n).length:1)}},366:function(t,n,e){"use strict";var r=e(386),o=RegExp.prototype.exec;t.exports=function(t,n){var e=t.exec;if("function"==typeof e){var i=e.call(t,n);if("object"!=typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return o.call(t,n)}},367:function(t,n,e){"use strict";e(387);var r=e(210),o=e(127),i=e(56),a=e(207),c=e(204),u=e(368),s=c("species"),l=!i(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),f=function(){var t=/(?:)/,n=t.exec;t.exec=function(){return n.apply(this,arguments)};var e="ab".split(t);return 2===e.length&&"a"===e[0]&&"b"===e[1]}();t.exports=function(t,n,e){var p=c(t),h=!i(function(){var n={};return n[p]=function(){return 7},7!=""[t](n)}),d=h?!i(function(){var n=!1,e=/a/;return e.exec=function(){return n=!0,null},"split"===t&&(e.constructor={},e.constructor[s]=function(){return e}),e[p](""),!n}):void 0;if(!h||!d||"replace"===t&&!l||"split"===t&&!f){var v=/./[p],g=e(a,p,""[t],function(t,n,e,r,o){return n.exec===u?h&&!o?{done:!0,value:v.call(n,e,r)}:{done:!0,value:t.call(e,n,r)}:{done:!1}}),m=g[0],x=g[1];r(String.prototype,t,m),o(RegExp.prototype,p,2==n?function(t,n){return x.call(t,this,n)}:function(t){return x.call(t,this)})}}},368:function(t,n,e){"use strict";var r,o,i=e(364),a=RegExp.prototype.exec,c=String.prototype.replace,u=a,s=(r=/a/,o=/b*/g,a.call(r,"a"),a.call(o,"a"),0!==r.lastIndex||0!==o.lastIndex),l=void 0!==/()??/.exec("")[1];(s||l)&&(u=function(t){var n,e,r,o,u=this;return l&&(e=new RegExp("^"+u.source+"$(?!\\s)",i.call(u))),s&&(n=u.lastIndex),r=a.call(u,t),s&&r&&(u.lastIndex=u.global?r.index+r[0].length:n),l&&r&&r.length>1&&c.call(r[0],e,function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)}),r}),t.exports=u},369:function(t,n,e){var r=e(206).f,o=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in o||e(55)&&r(o,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})},370:function(t,n,e){"use strict";e(371),e(384),e(388);n.a={data:function(){return{zeroAddress:"0x0000000000000000000000000000000000000000"}},computed:{dapp:{get:function(){return this.$store.getters.dapp}}},methods:{getParam:function(t){var n={};return window.location.href.replace(location.hash,"").replace(/[?&]+([^=&]+)=?([^&]*)?/gi,function(t,e,r){n[e]=void 0!==r?r:""}),t?n[t]?n[t]:null:n},promisify:function(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),r=1;r<n;r++)e[r-1]=arguments[r];return new Promise(function(n,r){t.apply(void 0,e.concat([function(t,e){t?r(t):n(e)}]))})},isMobile:function(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch(t){return!1}},makeToast:function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.$bvToast.toast(n,{title:t,variant:e,solid:!0})},formatStructure:function(t){return 0===parseInt(t[0].valueOf())?null:{id:parseInt(t[0].valueOf()),address:t[1],fingerprint:this.formatFingerprint(t[2]),creationDate:1e3*t[3].valueOf(),stakedTokens:parseFloat(this.dapp.web3.fromWei(t[4])),usedTokens:parseFloat(this.dapp.web3.fromWei(t[5])),data:t[6],approved:t[7]}},formatFingerprint:function(t){var n=t.replace("0x","").match(new RegExp(".{1,6}","g"));return{borderColor:"#".concat(n[0]),backgroundColor:"#".concat(n[1]),mainColor:"#".concat(n[2])}}}}},371:function(t,n,e){var r=e(28),o=e(372),i=e(206).f,a=e(376).f,c=e(382),u=e(364),s=r.RegExp,l=s,f=s.prototype,p=/a/g,h=/a/g,d=new s(p)!==p;if(e(55)&&(!d||e(56)(function(){return h[e(204)("match")]=!1,s(p)!=p||s(h)==h||"/a/i"!=s(p,"i")}))){s=function(t,n){var e=this instanceof s,r=c(t),i=void 0===n;return!e&&r&&t.constructor===s&&i?t:o(d?new l(r&&!i?t.source:t,n):l((r=t instanceof s)?t.source:t,r&&i?u.call(t):n),e?this:f,s)};for(var v=function(t){t in s||i(s,t,{configurable:!0,get:function(){return l[t]},set:function(n){l[t]=n}})},g=a(l),m=0;g.length>m;)v(g[m++]);f.constructor=s,s.prototype=f,e(210)(r,"RegExp",s)}e(383)("RegExp")},372:function(t,n,e){var r=e(41),o=e(373).set;t.exports=function(t,n,e){var i,a=n.constructor;return a!==e&&"function"==typeof a&&(i=a.prototype)!==e.prototype&&r(i)&&o&&o(t,i),t}},373:function(t,n,e){var r=e(41),o=e(205),i=function(t,n){if(o(t),!r(n)&&null!==n)throw TypeError(n+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,n,r){try{(r=e(130)(Function.call,e(374).f(Object.prototype,"__proto__").set,2))(t,[]),n=!(t instanceof Array)}catch(t){n=!0}return function(t,e){return i(t,e),n?t.__proto__=e:r(t,e),t}}({},!1):void 0),check:i}},374:function(t,n,e){var r=e(375),o=e(214),i=e(363),a=e(213),c=e(211),u=e(212),s=Object.getOwnPropertyDescriptor;n.f=e(55)?s:function(t,n){if(t=i(t),n=a(n,!0),u)try{return s(t,n)}catch(t){}if(c(t,n))return o(!r.f.call(t,n),t[n])}},375:function(t,n){n.f={}.propertyIsEnumerable},376:function(t,n,e){var r=e(377),o=e(381).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},377:function(t,n,e){var r=e(211),o=e(363),i=e(378)(!1),a=e(380)("IE_PROTO");t.exports=function(t,n){var e,c=o(t),u=0,s=[];for(e in c)e!=a&&r(c,e)&&s.push(e);for(;n.length>u;)r(c,e=n[u++])&&(~i(s,e)||s.push(e));return s}},378:function(t,n,e){var r=e(363),o=e(208),i=e(379);t.exports=function(t){return function(n,e,a){var c,u=r(n),s=o(u.length),l=i(a,s);if(t&&e!=e){for(;s>l;)if((c=u[l++])!=c)return!0}else for(;s>l;l++)if((t||l in u)&&u[l]===e)return t||l||0;return!t&&-1}}},379:function(t,n,e){var r=e(209),o=Math.max,i=Math.min;t.exports=function(t,n){return(t=r(t))<0?o(t+n,0):i(t,n)}},380:function(t,n,e){var r=e(129)("keys"),o=e(128);t.exports=function(t){return r[t]||(r[t]=o(t))}},381:function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},382:function(t,n,e){var r=e(41),o=e(125),i=e(204)("match");t.exports=function(t){var n;return r(t)&&(void 0!==(n=t[i])?!!n:"RegExp"==o(t))}},383:function(t,n,e){"use strict";var r=e(28),o=e(206),i=e(55),a=e(204)("species");t.exports=function(t){var n=r[t];i&&n&&!n[a]&&o.f(n,a,{configurable:!0,get:function(){return this}})}},384:function(t,n,e){"use strict";var r=e(205),o=e(208),i=e(365),a=e(366);e(367)("match",1,function(t,n,e,c){return[function(e){var r=t(this),o=null==e?void 0:e[n];return void 0!==o?o.call(e,r):new RegExp(e)[n](String(r))},function(t){var n=c(e,t,this);if(n.done)return n.value;var u=r(t),s=String(this);if(!u.global)return a(u,s);var l=u.unicode;u.lastIndex=0;for(var f,p=[],h=0;null!==(f=a(u,s));){var d=String(f[0]);p[h]=d,""===d&&(u.lastIndex=i(s,o(u.lastIndex),l)),h++}return 0===h?null:p}]})},385:function(t,n,e){var r=e(209),o=e(207);t.exports=function(t){return function(n,e){var i,a,c=String(o(n)),u=r(e),s=c.length;return u<0||u>=s?t?"":void 0:(i=c.charCodeAt(u))<55296||i>56319||u+1===s||(a=c.charCodeAt(u+1))<56320||a>57343?t?c.charAt(u):i:t?c.slice(u,u+2):a-56320+(i-55296<<10)+65536}}},386:function(t,n,e){var r=e(125),o=e(204)("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var n,e,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),o))?e:i?r(n):"Object"==(a=r(n))&&"function"==typeof n.callee?"Arguments":a}},387:function(t,n,e){"use strict";var r=e(368);e(126)({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},388:function(t,n,e){"use strict";var r=e(205),o=e(216),i=e(208),a=e(209),c=e(365),u=e(366),s=Math.max,l=Math.min,f=Math.floor,p=/\$([$&`']|\d\d?|<[^>]*>)/g,h=/\$([$&`']|\d\d?)/g;e(367)("replace",2,function(t,n,e,d){return[function(r,o){var i=t(this),a=null==r?void 0:r[n];return void 0!==a?a.call(r,i,o):e.call(String(i),r,o)},function(t,n){var o=d(e,t,this,n);if(o.done)return o.value;var f=r(t),p=String(this),h="function"==typeof n;h||(n=String(n));var g=f.global;if(g){var m=f.unicode;f.lastIndex=0}for(var x=[];;){var b=u(f,p);if(null===b)break;if(x.push(b),!g)break;""===String(b[0])&&(f.lastIndex=c(p,i(f.lastIndex),m))}for(var y,k="",w=0,O=0;O<x.length;O++){b=x[O];for(var E=String(b[0]),R=s(l(a(b.index),p.length),0),I=[],S=1;S<b.length;S++)I.push(void 0===(y=b[S])?y:String(y));var _=b.groups;if(h){var $=[E].concat(I,R,p);void 0!==_&&$.push(_);var A=String(n.apply(void 0,$))}else A=v(E,p,R,I,_,n);R>=w&&(k+=p.slice(w,R)+A,w=R+E.length)}return k+p.slice(w)}];function v(t,n,r,i,a,c){var u=r+t.length,s=i.length,l=h;return void 0!==a&&(a=o(a),l=p),e.call(c,l,function(e,o){var c;switch(o.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,r);case"'":return n.slice(u);case"<":c=a[o.slice(1,-1)];break;default:var l=+o;if(0===l)return e;if(l>s){var p=f(l/10);return 0===p?e:p<=s?void 0===i[p-1]?o.charAt(1):i[p-1]+o.charAt(1):e}c=i[l-1]}return void 0===c?"":c})}})},406:function(t,n,e){"use strict";e.r(n);e(369),e(217);var r=e(57),o={name:"Member",mixins:[e(370).a],data:function(){return{loading:!0,token:{name:"",symbol:"",decimals:18,link:"",logo:""},account:{isMember:!1,memberId:0,tokenBalance:0,member:null}}},computed:{dapp:{get:function(){return this.$store.getters.dapp}}},mounted:function(){this.account.memberId=this.getParam("id"),this.initDapp()},methods:{initDapp:function(){try{this.$store.dispatch("initToken"),this.$store.dispatch("initDao"),this.ready()}catch(t){alert(t),document.location.href=this.$withBase("/")}},ready:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getTokenData();case 2:return t.next=4,this.getMember();case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),getTokenData:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.promisify(this.dapp.instances.token.name);case 3:return this.token.name=t.sent,t.next=6,this.promisify(this.dapp.instances.token.symbol);case 6:this.token.symbol=t.sent,this.token.link=this.dapp.network.current.etherscanLink+"/token/"+this.dapp.instances.token.address,this.token.logo=this.$withBase("/assets/images/logo/shaka_logo_white.png"),t.next=16;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0),this.loading=!1,alert("Some error occurred.");case 16:case"end":return t.stop()}},t,this,[[0,11]])}));return function(){return t.apply(this,arguments)}}(),getMember:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.promisify(this.dapp.instances.dao.getMemberById,this.account.memberId);case 2:if(n=t.sent,this.account.member=this.formatStructure(n),!this.account.member){t.next=12;break}return t.t0=parseFloat,t.t1=this.dapp.web3,t.next=9,this.promisify(this.dapp.instances.token.balanceOf,this.account.member.address);case 9:t.t2=t.sent,t.t3=t.t1.fromWei.call(t.t1,t.t2),this.account.tokenBalance=(0,t.t0)(t.t3);case 12:this.loading=!1;case 13:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}},i=e(40),a=Object(i.a)(o,function(){var t=this.$createElement,n=this._self._c||t;return n("b-container",[n("b-row",{staticClass:"mt-4"},[n("b-col",{attrs:{lg:"10","offset-lg":"1"}},[this.loading?[n("b-card",{staticClass:"mb-3"},[n("ui--loader",{attrs:{loading:!0}})],1)]:this.account.member?[n("ui--member-details",{attrs:{account:this.account,token:this.token}})]:[n("b-card-body",[this._v("\n                    No member found.\n                ")])]],2)],1)],1)},[],!1,null,null,null);n.default=a.exports}}]);