(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{138:function(t,e,a){"use strict";a(140),a(141),a(142);var r=a(143),n=a.n(r);e.a={data:function(){return{zeroAddress:"0x0000000000000000000000000000000000000000"}},computed:{dapp:{get:function(){return this.$store.getters.dapp}}},methods:{getParam:function(t){var e={};return window.location.href.replace(location.hash,"").replace(/[?&]+([^=&]+)=?([^&]*)?/gi,function(t,a,r){e[a]=void 0!==r?r:""}),t?e[t]?e[t]:null:e},promisify:function(t){for(var e=arguments.length,a=new Array(e>1?e-1:0),r=1;r<e;r++)a[r-1]=arguments[r];return new Promise(function(e,r){t.apply(void 0,a.concat([function(t,a){t?r(t):e(a)}]))})},isMobile:function(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch(t){return!1}},generateQRCode:function(t){return n.a.toDataURL(t,{color:{dark:"#b733a7",light:"#0000"}})},makeToast:function(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.$bvToast.toast(e,{title:t,variant:a,solid:!0})},formatStructure:function(t){return 0===parseInt(t[0].valueOf())?null:{id:parseInt(t[0].valueOf()),address:t[1],fingerprint:this.formatFingerprint(t[2]),creationDate:1e3*t[3].valueOf(),stakedTokens:parseFloat(this.dapp.web3.fromWei(t[4])),usedTokens:parseFloat(this.dapp.web3.fromWei(t[5])),data:t[6],approved:t[7]}},formatFingerprint:function(t){var e=t.replace("0x","").match(new RegExp(".{1,6}","g"));return{borderColor:"#".concat(e[0]),backgroundColor:"#".concat(e[1]),mainColor:"#".concat(e[2])}}}}},198:function(t,e,a){"use strict";a(199)("link",function(t){return function(e){return t(this,"a","href",e)}})},199:function(t,e,a){var r=a(37),n=a(21),s=a(77),i=/"/g,o=function(t,e,a,r){var n=String(s(t)),o="<"+e;return""!==a&&(o+=" "+a+'="'+String(r).replace(i,"&quot;")+'"'),o+">"+n+"</"+e+">"};t.exports=function(t,e){var a={};a[t]=e(o),r(r.P+r.F*n(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",a)}},200:function(t){t.exports={dapp_com:{name:"Dapp.com",link:"https://www.dapp.com",address:"0xA53Fe221Bd861F75907d8Fd496DB1c70779721aA"}}},209:function(t,e,a){"use strict";a.r(e);a(198),a(139),a(74);var r=a(22),n=a(138),s=a(200),i={name:"TokenFaucet",mixins:[n.a],data:function(){return{loading:!0,loadingData:!1,makingTransaction:!1,referralAddress:"",trx:{hash:"",link:""},referral:{name:"",link:"",address:""},token:{name:"",symbol:"",decimals:18,link:"",logo:""},faucet:{dailyRate:0,referralTokens:0,distributedTokens:0,remainingTokens:0},account:{address:"",receivedTokens:0,earnedByReferral:0,referral:"",referredAddresses:[],lastUpdate:0,nextClaimTime:0,share:{link:""}}}},computed:{dapp:{get:function(){return this.$store.getters.dapp}}},mounted:function(){var t=s[this.getParam("friend")];t?this.referral=t:this.referral.address=this.getParam("referral")||"",this.initDapp()},methods:{initDapp:function(){try{this.$store.dispatch("initToken"),this.$store.dispatch("initFaucet"),this.ready()}catch(t){alert(t),this.$router.push({path:"/"})}},ready:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getTokenData();case 2:return t.next=4,this.getFaucetData();case 4:return t.next=6,this.getAccountData();case 6:this.$validator.extend("eth_address",{getMessage:function(t){return"Insert a valid Ethereum address."},validate:function(t){return e.dapp.web3.isAddress(t)}}),this.$validator.extend("not_yourself",{getMessage:function(t){return"You can't refer yourself."},validate:function(t){return t.toLowerCase()!==e.dapp.metamask.address.toLowerCase()}}),this.loading=!1;case 9:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),enable:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.$store.dispatch("connect");case 1:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),getTokenData:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.promisify(this.dapp.instances.token.name);case 3:return this.token.name=t.sent,t.next=6,this.promisify(this.dapp.instances.token.symbol);case 6:this.token.symbol=t.sent,this.token.link=this.dapp.network.current.etherscanLink+"/token/"+this.dapp.instances.token.address,this.token.logo=this.$withBase("/assets/images/logo/shaka_logo_white.png"),t.next=16;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0),this.loading=!1,alert("Some error occurred.");case 16:case"end":return t.stop()}},t,this,[[0,11]])}));return function(){return t.apply(this,arguments)}}(),getFaucetData:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.t0=parseFloat,t.t1=this.dapp.web3,t.next=5,this.promisify(this.dapp.instances.faucet.dailyRate);case 5:return t.t2=t.sent,t.t3=t.t1.fromWei.call(t.t1,t.t2),this.faucet.dailyRate=(0,t.t0)(t.t3),t.t4=parseFloat,t.t5=this.dapp.web3,t.next=12,this.promisify(this.dapp.instances.faucet.referralTokens);case 12:return t.t6=t.sent,t.t7=t.t5.fromWei.call(t.t5,t.t6),this.faucet.referralTokens=(0,t.t4)(t.t7),t.t8=parseFloat,t.t9=this.dapp.web3,t.next=19,this.promisify(this.dapp.instances.faucet.remainingTokens);case 19:return t.t10=t.sent,t.t11=t.t9.fromWei.call(t.t9,t.t10),this.faucet.remainingTokens=(0,t.t8)(t.t11),t.t12=parseFloat,t.t13=this.dapp.web3,t.next=26,this.promisify(this.dapp.instances.faucet.totalDistributedTokens);case 26:t.t14=t.sent,t.t15=t.t13.fromWei.call(t.t13,t.t14),this.faucet.distributedTokens=(0,t.t12)(t.t15),this.faucet.max=this.faucet.distributedTokens+this.faucet.remainingTokens,this.faucet.percentage=100*this.faucet.distributedTokens/this.faucet.max,t.next=38;break;case 33:t.prev=33,t.t16=t.catch(0),console.log(t.t16),this.loading=!1,alert("Some error occurred.");case 38:case"end":return t.stop()}},t,this,[[0,33]])}));return function(){return t.apply(this,arguments)}}(),getAccountData:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.loadingData=!0,t.prev=1,!this.dapp.metamask.address){t.next=37;break}return this.account.address=this.dapp.web3.eth.accounts[0],t.next=6,this.promisify(this.dapp.instances.faucet.getReferral,this.account.address);case 6:return this.account.referral=t.sent,t.next=9,this.promisify(this.dapp.instances.faucet.getReferredAddresses,this.account.address);case 9:return this.account.referredAddresses=t.sent,t.t0=parseFloat,t.t1=this.dapp.web3,t.next=14,this.promisify(this.dapp.instances.faucet.receivedTokens,this.account.address);case 14:return t.t2=t.sent,t.t3=t.t1.fromWei.call(t.t1,t.t2),this.account.receivedTokens=(0,t.t0)(t.t3),t.t4=parseFloat,t.t5=this.dapp.web3,t.next=21,this.promisify(this.dapp.instances.faucet.earnedByReferral,this.account.address);case 21:return t.t6=t.sent,t.t7=t.t5.fromWei.call(t.t5,t.t6),this.account.earnedByReferral=(0,t.t4)(t.t7),t.next=26,this.promisify(this.dapp.instances.faucet.lastUpdate,this.account.address);case 26:return t.t8=t.sent.valueOf(),this.account.lastUpdate=1e3*t.t8,t.next=30,this.promisify(this.dapp.instances.faucet.nextClaimTime,this.account.address);case 30:t.t9=t.sent.valueOf(),this.account.nextClaimTime=1e3*t.t9,this.account.share.link=window.location.origin+this.$withBase("/faucet?referral=".concat(this.account.address)),this.account.share.facebook="https://www.facebook.com/sharer.php?u=".concat(this.account.share.link,"&quote=Earn FREE Shaka, the token that will make you part of the FriendsFingers DAO"),this.account.share.twitter="https://twitter.com/intent/tweet?url=".concat(this.account.share.link,"&hashtags=ethereum,blockchain,erc20,airdrop&text=Earn FREE Shaka, the token that will make you part of the @friendsfingers DAO"),this.account.share.telegram="https://t.me/share/url?url=".concat(this.account.share.link,"&text=Earn FREE Shaka, the token that will make you part of the @friendsfingers DAO"),this.account.share.whatsapp="whatsapp://send?text=Earn FREE Shaka, the token that will make you part of the FriendsFingers DAO ".concat(this.account.share.link);case 37:this.loadingData=!1,t.next=45;break;case 40:t.prev=40,t.t10=t.catch(1),console.log(t.t10),this.loadingData=!1,alert("Some error occurred.");case 45:case"end":return t.stop()}},t,this,[[1,40]])}));return function(){return t.apply(this,arguments)}}(),getTokens:function(){var t=this;this.$validator.validateAll().then(function(e){e&&(t.makingTransaction=!0,t.dapp.instances.faucet.getTokensWithReferral(t.referral.address,{from:t.account.address},function(e,a){e?alert("Some error occurred. Maybe you rejected the transaction or you have MetaMask locked!"):(t.trx.hash=a,t.trx.link=t.dapp.network.current.etherscanLink+"/tx/"+t.trx.hash),t.makingTransaction=!1}))}).catch(function(e){console.log(e),t.makingTransaction=!1,alert("Some error occurred.")})}}},o=a(15),c=Object(o.a)(i,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-row",[a("b-col",{attrs:{lg:"12"}},[a("b-card",{staticClass:"mt-4 bg-purple",attrs:{title:"Faucet status",id:"faucet-box"}},[t.loading?[a("ui--loader",{attrs:{loading:!0,color:"#ffffff"}})]:[a("p",{staticClass:"card-text"},[t._v("\n                    We've already distributed "),a("b",[t._v(t._s(t.faucet.distributedTokens)+" "+t._s(t.token.symbol))]),t._v(".\n                    Remaining tokens "),a("b",[t._v(t._s(t.faucet.remainingTokens)+" "+t._s(t.token.symbol))]),t._v("."),a("br"),t._v(" "),a("b-progress",{staticClass:"mt-2",attrs:{value:t.faucet.percentage,variant:"warning",striped:"",animated:!0}}),t._v(" "),a("small",[t._v("\n                        You can earn "),a("b",[t._v(t._s(t.faucet.dailyRate)+" "+t._s(t.token.symbol))]),t._v(" per day and\n                        "),a("b",[t._v(t._s(t.faucet.referralTokens)+" "+t._s(t.token.symbol))]),t._v("\n                        for each time your friends will use the faucet.\n                    ")])],1)]],2),t._v(" "),t.loading?t._e():a("b-card",{staticClass:"mt-4",attrs:{header:"Your account"}},[t.dapp.metamask.address?[t.makingTransaction||t.loadingData?[a("ui--loader",{attrs:{loading:!0}})]:[a("b",[t._v("Account:")]),t._v(" "),a("b-link",{attrs:{href:t.dapp.network.current.etherscanLink+"/address/"+t.account.address,target:"_blank"}},[t._v(t._s(t.account.address)+"\n                    ")]),t._v(" "),a("br"),t._v(" "),t.account.referral!==t.zeroAddress?[a("b",[t._v("You have been invited by:")]),t._v(" "),a("b-link",{attrs:{href:t.dapp.network.current.etherscanLink+"/address/"+t.account.referral,target:"_blank"}},[t._v(t._s(t.account.referral)+"\n                        ")]),t._v(" "),a("br")]:t._e(),t._v("\n\n                    You have earned "),a("b",[t._v(t._s(t.account.receivedTokens)+" "+t._s(t.token.symbol))]),t._v(" by using faucet."),a("br"),t._v(" "),t.account.referredAddresses.length>0?[t._v("\n                        You have earned "),a("b",[t._v(t._s(t.account.earnedByReferral)+" "+t._s(t.token.symbol))]),t._v("\n                        from your "),a("b",[t._v(t._s(t.account.referredAddresses.length))]),t._v(" referred addresses."),a("br")]:t._e(),t._v(" "),0!==t.account.lastUpdate?[a("small",[t._v("\n                            Last Update: "),a("b",[t._v(t._s(t._f("formatLocaleDate")(t.account.lastUpdate)))]),t._v(",\n                            you can claim again on "),a("b",[t._v(t._s(t._f("formatLocaleDate")(t.account.nextClaimTime)))])])]:t._e(),t._v(" "),t.referral.link&&0===t.account.receivedTokens?[a("br"),t._v(" "),a("h5",[t._v("\n                            Your referral:\n                            "),a("b-link",{attrs:{href:t.referral.link,target:"_blank"}},[t._v(t._s(t.referral.name))])],1)]:t._e(),t._v(" "),t.makingTransaction?t._e():a("b-form",{staticClass:"mt-3",on:{submit:function(e){return e.preventDefault(),t.getTokens(e)}}},[0===t.account.receivedTokens&&""!==t.referral.address?a("b-form-group",{attrs:{id:"referral-group",label:"Referral Address:","label-for":"referral",description:"Your referral address"}},[a("b-form-input",{directives:[{name:"validate",rawName:"v-validate",value:"not_yourself|eth_address",expression:"'not_yourself|eth_address'"}],class:{"is-invalid":t.errors.has("referral")},attrs:{id:"referral",name:"referral",type:"text",size:"lg",readonly:"","data-vv-as":"Referral Address",placeholder:"0x12312312..."},model:{value:t.referral.address,callback:function(e){t.$set(t.referral,"address",e)},expression:"referral.address"}}),t._v(" "),a("small",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("referral"),expression:"errors.has('referral')"}],staticClass:"text-danger"},[t._v("\n                                "+t._s(t.errors.first("referral"))+"\n                            ")])],1):t._e(),t._v(" "),a("b-btn",{attrs:{type:"submit",variant:"primary",disabled:t.errors.has("referral")||t.account.nextClaimTime>Date.now(),size:"lg"}},[t._v("\n                            Get Tokens\n                        ")]),t._v(" "),a("br"),t._v(" "),a("small",{staticClass:"text-muted mt-3"},[t._v("\n                            Note: you just need to pay Gas to get your tokens\n                            "),a("b-link",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{href:"https://kb.myetherwallet.com/gas/what-is-gas-ethereum.html",target:"_blank",title:"What is Gas?"}},[a("font-awesome-icon",{attrs:{icon:"info-circle"}})],1)],1),t._v(" "),t.trx.hash?a("b-alert",{staticClass:"mt-3",attrs:{show:"",variant:"success"}},[t._v("\n                            Last transaction:\n                            "),a("b-link",{attrs:{href:t.trx.link,target:"_blank"}},[t._v(t._s(t.trx.hash))])],1):t._e()],1),t._v(" "),a("hr",{staticClass:"my-4"}),t._v(" "),a("h4",[t._v("Earn more Shaka Tokens with your referral link")]),t._v(" "),a("b-form-group",{attrs:{id:"my-link-group",label:"Your referral link is:","label-for":"my-link"}},[a("b-form-input",{attrs:{id:"my-link",name:"my-link",type:"text",size:"lg",readonly:""},model:{value:t.account.share.link,callback:function(e){t.$set(t.account.share,"link",e)},expression:"account.share.link"}})],1),t._v(" "),a("p",{staticClass:"share-link"},[a("b-btn",{staticClass:"twitter",attrs:{href:t.account.share.twitter,target:"_blank"}},[a("font-awesome-icon",{attrs:{icon:["fab","twitter"]}})],1),t._v(" "),a("b-btn",{staticClass:"facebook",attrs:{href:t.account.share.facebook,target:"_blank"}},[a("font-awesome-icon",{attrs:{icon:["fab","facebook-f"]}})],1),t._v(" "),a("b-btn",{staticClass:"telegram",attrs:{href:t.account.share.telegram,target:"_blank"}},[a("font-awesome-icon",{attrs:{icon:["fab","telegram-plane"]}})],1),t._v(" "),t.isMobile()?a("b-btn",{staticClass:"whatsapp",attrs:{href:t.account.share.whatsapp,target:"_blank"}},[a("font-awesome-icon",{attrs:{icon:["fab","whatsapp"]}})],1):t._e()],1),t._v(" "),a("p",{staticClass:"lead"},[t._v("\n                        Share with your friends and earn Shaka Tokens\n                    ")])]]:[t.dapp.metamask.installed&&t.dapp.metamask.netId===t.dapp.network.current.id?a("p",{staticClass:"card-text"},[a("b-btn",{attrs:{variant:"primary",size:"lg",disabled:!t.dapp.metamask.installed||t.dapp.metamask.netId!==t.dapp.network.current.id},on:{click:t.enable}},[t._v("\n                        Connect\n                    ")])],1):a("b-alert",{attrs:{show:"",variant:"warning"}},[t.dapp.metamask.installed?t.dapp.metamask.netId!==t.dapp.network.current.id?[t._v("\n                        You are on the wrong Network."),a("br"),t._v("\n                        Please switch your Ethereum Provider on "),a("b",[t._v(t._s(t.dapp.network.current.name))]),t._v(".\n                    ")]:t._e():[t._v("\n                        Install\n                        "),a("b-link",{attrs:{href:"https://metamask.io/",target:"_blank"}},[t._v("MetaMask")]),t._v(" "),t.isMobile()?[t._v("or a mobile Web3 browser")]:t._e(),t._v("\n                        to get your Tokens.\n                    ")]],2)]],2)],1)],1)},[],!1,null,null,null);e.default=c.exports}}]);