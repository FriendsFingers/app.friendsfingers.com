(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{125:function(t,e,n){"use strict";n(127),n(128),n(129);var r=n(130),a=n.n(r);e.a={data:function(){return{zeroAddress:"0x0000000000000000000000000000000000000000"}},computed:{dapp:{get:function(){return this.$store.getters.dapp}}},methods:{getParam:function(t){var e={};return window.location.href.replace(location.hash,"").replace(/[?&]+([^=&]+)=?([^&]*)?/gi,(function(t,n,r){e[n]=void 0!==r?r:""})),t?e[t]?e[t]:null:e},ethGetCall:function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return n.push({from:this.dapp.fallbackAddress}),this.promisify.apply(this,[t].concat(n))},promisify:function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return new Promise((function(e,r){t.apply(void 0,n.concat([function(t,n){t?r(t):e(n)}]))}))},isMobile:function(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch(t){return!1}},generateQRCode:function(t){return a.a.toDataURL(t,{color:{dark:"#b733a7",light:"#0000"}})},makeToast:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.$bvToast.toast(e,{title:t,variant:n,solid:!0})},formatStructure:function(t){return 0===parseInt(t[0].valueOf())?null:{id:parseInt(t[0].valueOf()),address:t[1],fingerprint:this.formatFingerprint(t[2]),creationDate:1e3*t[3].valueOf(),stakedTokens:parseFloat(this.dapp.web3.fromWei(t[4])),usedTokens:parseFloat(this.dapp.web3.fromWei(t[5])),data:t[6],approved:t[7]}},formatFingerprint:function(t){var e=t.replace("0x","").match(new RegExp(".{1,6}","g"));return{borderColor:"#".concat(e[0]),backgroundColor:"#".concat(e[1]),mainColor:"#".concat(e[2])}}}}},199:function(t,e,n){"use strict";n.r(e);n(126),n(63);var r,a,i,s=n(22),o={name:"Member",mixins:[n(125).a],data:function(){return{ref:"",loading:!0,token:{name:"",symbol:"",decimals:18,link:"",logo:""},account:{isMember:!1,memberId:0,tokenBalance:0,member:null}}},computed:{dapp:{get:function(){return this.$store.getters.dapp}}},mounted:function(){this.ref=this.getParam("ref"),this.initDapp()},methods:{initDapp:function(){try{this.$store.dispatch("initShakaToken"),this.$store.dispatch("initDao"),this.ready()}catch(t){alert(t),this.$router.push({path:"/"})}},ready:(i=Object(s.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getTokenData();case 2:return t.next=4,this.getMember();case 4:case"end":return t.stop()}}),t,this)}))),function(){return i.apply(this,arguments)}),getTokenData:(a=Object(s.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.ethGetCall(this.dapp.instances.token.name);case 3:return this.token.name=t.sent,t.next=6,this.ethGetCall(this.dapp.instances.token.symbol);case 6:this.token.symbol=t.sent,this.token.link=this.dapp.network.current.etherscanLink+"/token/"+this.dapp.instances.token.address,this.token.logo=this.$withBase("/assets/images/logo/shaka_logo_white.png"),t.next=16;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0),this.loading=!1,alert("Some error occurred.");case 16:case"end":return t.stop()}}),t,this,[[0,11]])}))),function(){return a.apply(this,arguments)}),getMember:(r=Object(s.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.dapp.web3.isAddress(this.ref)){t.next=6;break}return t.next=3,this.ethGetCall(this.dapp.instances.dao.getMemberByAddress,this.ref);case 3:e=t.sent,t.next=9;break;case 6:return t.next=8,this.ethGetCall(this.dapp.instances.dao.getMemberById,this.ref);case 8:e=t.sent;case 9:if(this.account.member=this.formatStructure(e),!this.account.member){t.next=19;break}return t.t0=parseFloat,t.t1=this.dapp.web3,t.next=15,this.ethGetCall(this.dapp.instances.token.balanceOf,this.account.member.address);case 15:t.t2=t.sent,t.t3=t.t1.fromWei.call(t.t1,t.t2),this.account.tokenBalance=(0,t.t0)(t.t3).toFixed(2),this.account.memberId=this.account.member.id;case 19:this.loading=!1;case 20:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})}},c=n(11),u=Object(c.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("b-container",[e("b-row",{staticClass:"mt-4"},[e("b-col",{attrs:{lg:"10","offset-lg":"1"}},[this.loading?[e("b-card",{staticClass:"mb-3"},[e("ui--loader",{attrs:{loading:!0}})],1)]:this.account.member?[e("ui--member-details",{attrs:{account:this.account,token:this.token}})]:[e("b-card-body",[this._v("\n                    No member found.\n                ")])]],2)],1)],1)}),[],!1,null,null,null);e.default=u.exports}}]);