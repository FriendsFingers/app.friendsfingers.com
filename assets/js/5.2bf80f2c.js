(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{380:function(t,e,r){var a=r(182).f,n=Function.prototype,s=/^\s*function ([^ (]*)/;"name"in n||r(60)&&a(n,"name",{configurable:!0,get:function(){try{return(""+this).match(s)[1]}catch(t){return""}}})},420:function(t,e,r){"use strict";r(421)("link",function(t){return function(e){return t(this,"a","href",e)}})},421:function(t,e,r){var a=r(90),n=r(61),s=r(181),i=/"/g,o=function(t,e,r,a){var n=String(s(t)),o="<"+e;return""!==r&&(o+=" "+r+'="'+String(a).replace(i,"&quot;")+'"'),o+">"+n+"</"+e+">"};t.exports=function(t,e){var r={};r[t]=e(o),a(a.P+a.F*n(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",r)}},422:function(t,e,r){t.exports=r(423)},423:function(t,e,r){r(424),t.exports=r(8).parseFloat},424:function(t,e,r){var a=r(16),n=r(425);a(a.G+a.F*(parseFloat!=n),{parseFloat:n})},425:function(t,e,r){var a=r(14).parseFloat,n=r(397).trim;t.exports=1/a(r(395)+"-0")!=-1/0?function(t){var e=n(String(t),3),r=a(e);return 0===r&&"-"==e.charAt(0)?-0:r}:a},426:function(t){t.exports={dapp_com:{name:"Dapp.com",link:"https://www.dapp.com",address:"0xA53Fe221Bd861F75907d8Fd496DB1c70779721aA"}}},434:function(t,e,r){"use strict";r.r(e);r(420);var a=r(422),n=r.n(a),s=(r(380),r(184),r(46)),i=r(381),o=r(392),c=r(426),u={name:"TokenFaucet",mixins:[i.a,o.a],data:function(){return{loading:!0,loadingData:!1,makingTransaction:!1,referralAddress:"",trx:{hash:"",link:""},referral:{name:"",link:"",address:""},token:{name:"",symbol:"",decimals:18,link:"",logo:""},faucet:{dailyRate:0,referralTokens:0,distributedTokens:0,remainingTokens:0},account:{address:"",receivedTokens:0,earnedByReferral:0,referral:"",referredAddresses:[],lastUpdate:0,nextClaimTime:0,share:{link:""}}}},computed:{network:{get:function(){return this.$store.getters.network}},metamask:{get:function(){return this.$store.getters.metamask}},web3:{get:function(){return this.$store.getters.web3}}},mounted:function(){var t=Object(s.a)(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return(e=c[this.getParam("friend")])?this.referral=e:this.referral.address=this.getParam("referral")||"",t.next=4,this.initDapp();case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),methods:{initDapp:function(){var t=Object(s.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:try{this.initToken(),this.initFaucet(),this.ready()}catch(t){alert(t),document.location.href=this.$withBase("/")}case 1:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),ready:function(){var t=Object(s.a)(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getTokenData();case 2:return t.next=4,this.getFaucetData();case 4:return t.next=6,this.getAccountData();case 6:this.$validator.extend("eth_address",{getMessage:function(t){return"Insert a valid Ethereum address."},validate:function(t){return e.web3.isAddress(t)}}),this.$validator.extend("not_yourself",{getMessage:function(t){return"You can't refer yourself."},validate:function(t){return t.toLowerCase()!==e.metamask.address.toLowerCase()}}),this.loading=!1;case 9:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),enable:function(){var t=Object(s.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("connect");case 2:return t.next=4,this.getAccountData();case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),getTokenData:function(){var t=Object(s.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.promisify(this.instances.token.name);case 3:return this.token.name=t.sent,t.next=6,this.promisify(this.instances.token.symbol);case 6:this.token.symbol=t.sent,this.token.link=this.network.current.etherscanLink+"/token/"+this.instances.token.address,this.token.logo=this.$withBase("/assets/images/logo/shaka_logo_white.png"),t.next=16;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0),this.loading=!1,alert("Some error occurred.");case 16:case"end":return t.stop()}},t,this,[[0,11]])}));return function(){return t.apply(this,arguments)}}(),getFaucetData:function(){var t=Object(s.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.t0=n.a,t.t1=this.web3,t.next=5,this.promisify(this.instances.faucet.dailyRate);case 5:return t.t2=t.sent,t.t3=t.t1.fromWei.call(t.t1,t.t2),this.faucet.dailyRate=(0,t.t0)(t.t3),t.t4=n.a,t.t5=this.web3,t.next=12,this.promisify(this.instances.faucet.referralTokens);case 12:return t.t6=t.sent,t.t7=t.t5.fromWei.call(t.t5,t.t6),this.faucet.referralTokens=(0,t.t4)(t.t7),t.t8=n.a,t.t9=this.web3,t.next=19,this.promisify(this.instances.faucet.remainingTokens);case 19:return t.t10=t.sent,t.t11=t.t9.fromWei.call(t.t9,t.t10),this.faucet.remainingTokens=(0,t.t8)(t.t11),t.t12=n.a,t.t13=this.web3,t.next=26,this.promisify(this.instances.faucet.totalDistributedTokens);case 26:t.t14=t.sent,t.t15=t.t13.fromWei.call(t.t13,t.t14),this.faucet.distributedTokens=(0,t.t12)(t.t15),this.faucet.max=this.faucet.distributedTokens+this.faucet.remainingTokens,this.faucet.percentage=100*this.faucet.distributedTokens/this.faucet.max,t.next=38;break;case 33:t.prev=33,t.t16=t.catch(0),console.log(t.t16),this.loading=!1,alert("Some error occurred.");case 38:case"end":return t.stop()}},t,this,[[0,33]])}));return function(){return t.apply(this,arguments)}}(),getAccountData:function(){var t=Object(s.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.loadingData=!0,t.prev=1,!this.metamask.address){t.next=37;break}return this.account.address=this.web3.eth.accounts[0],t.next=6,this.promisify(this.instances.faucet.getReferral,this.account.address);case 6:return this.account.referral=t.sent,t.next=9,this.promisify(this.instances.faucet.getReferredAddresses,this.account.address);case 9:return this.account.referredAddresses=t.sent,t.t0=n.a,t.t1=this.web3,t.next=14,this.promisify(this.instances.faucet.receivedTokens,this.account.address);case 14:return t.t2=t.sent,t.t3=t.t1.fromWei.call(t.t1,t.t2),this.account.receivedTokens=(0,t.t0)(t.t3),t.t4=n.a,t.t5=this.web3,t.next=21,this.promisify(this.instances.faucet.earnedByReferral,this.account.address);case 21:return t.t6=t.sent,t.t7=t.t5.fromWei.call(t.t5,t.t6),this.account.earnedByReferral=(0,t.t4)(t.t7),t.next=26,this.promisify(this.instances.faucet.lastUpdate,this.account.address);case 26:return t.t8=t.sent.valueOf(),this.account.lastUpdate=1e3*t.t8,t.next=30,this.promisify(this.instances.faucet.nextClaimTime,this.account.address);case 30:t.t9=t.sent.valueOf(),this.account.nextClaimTime=1e3*t.t9,this.account.share.link=window.location.origin+this.$withBase("/faucet?referral=".concat(this.account.address)),this.account.share.facebook="https://www.facebook.com/sharer.php?u=".concat(this.account.share.link,"&quote=Earn FREE Shaka, the token that will make you part of the FriendsFingers DAO"),this.account.share.twitter="https://twitter.com/intent/tweet?url=".concat(this.account.share.link,"&hashtags=ethereum,blockchain,erc20,airdrop&text=Earn FREE Shaka, the token that will make you part of the @friendsfingers DAO"),this.account.share.telegram="https://t.me/share/url?url=".concat(this.account.share.link,"&text=Earn FREE Shaka, the token that will make you part of the @friendsfingers DAO"),this.account.share.whatsapp="whatsapp://send?text=Earn FREE Shaka, the token that will make you part of the FriendsFingers DAO ".concat(this.account.share.link);case 37:this.loadingData=!1,t.next=45;break;case 40:t.prev=40,t.t10=t.catch(1),console.log(t.t10),this.loadingData=!1,alert("Some error occurred.");case 45:case"end":return t.stop()}},t,this,[[1,40]])}));return function(){return t.apply(this,arguments)}}(),getTokens:function(){var t=this;this.$validator.validateAll().then(function(){var e=Object(s.a)(regeneratorRuntime.mark(function e(r){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r&&(t.makingTransaction=!0,t.instances.faucet.getTokensWithReferral(t.referral.address,{from:t.account.address},function(e,r){e?alert("Some error occurred. Maybe you rejected the transaction or you have MetaMask locked!"):(t.trx.hash=r,t.trx.link=t.network.current.etherscanLink+"/tx/"+t.trx.hash),t.makingTransaction=!1}));case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()).catch(function(e){console.log(e),t.makingTransaction=!1,alert("Some error occurred.")})}}},l=r(21),h=Object(l.a)(u,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-row",[r("b-col",{attrs:{lg:"12"}},[t.loading?t._e():r("b-card",{staticClass:"mb-3",attrs:{header:"Your account"}},[t.metamask.address?[t.makingTransaction||t.loadingData?[r("ui--loader",{attrs:{loading:!0}})]:[r("b",[t._v("Account:")]),t._v(" "),r("b-link",{attrs:{href:t.network.current.etherscanLink+"/address/"+t.account.address,target:"_blank"}},[t._v(t._s(t.account.address)+"\n                    ")]),t._v(" "),r("br"),t._v(" "),t.account.referral!==t.zeroAddress?[r("b",[t._v("You have been invited by:")]),t._v(" "),r("b-link",{attrs:{href:t.network.current.etherscanLink+"/address/"+t.account.referral,target:"_blank"}},[t._v(t._s(t.account.referral)+"\n                        ")]),t._v(" "),r("br")]:t._e(),t._v("\n\n                    You have earned "),r("b",[t._v(t._s(t.account.receivedTokens)+" "+t._s(t.token.symbol))]),t._v(" by using faucet."),r("br"),t._v(" "),t.account.referredAddresses.length>0?[t._v("\n                        You have earned "),r("b",[t._v(t._s(t.account.earnedByReferral)+" "+t._s(t.token.symbol))]),t._v("\n                        from your "),r("b",[t._v(t._s(t.account.referredAddresses.length))]),t._v(" referred addresses."),r("br")]:t._e(),t._v(" "),0!==t.account.lastUpdate?[r("small",[t._v("\n                            Last Update: "),r("b",[t._v(t._s(t._f("formatLocaleDate")(t.account.lastUpdate)))]),t._v(",\n                            you can claim again on "),r("b",[t._v(t._s(t._f("formatLocaleDate")(t.account.nextClaimTime)))])])]:t._e(),t._v(" "),t.referral.link&&0===t.account.receivedTokens?[r("br"),t._v(" "),r("h5",[t._v("\n                            Your referral:\n                            "),r("b-link",{attrs:{href:t.referral.link,target:"_blank"}},[t._v(t._s(t.referral.name))])],1)]:t._e(),t._v(" "),t.makingTransaction?t._e():r("b-form",{staticClass:"mt-3",on:{submit:function(e){return e.preventDefault(),t.getTokens(e)}}},[0===t.account.receivedTokens&&""!==t.referral.address?r("b-form-group",{attrs:{id:"referral-group",label:"Referral Address:","label-for":"referral",description:"Your referral address"}},[r("b-form-input",{directives:[{name:"validate",rawName:"v-validate",value:"not_yourself|eth_address",expression:"'not_yourself|eth_address'"}],class:{"is-invalid":t.errors.has("referral")},attrs:{id:"referral",name:"referral",type:"text",size:"lg",readonly:"","data-vv-as":"Referral Address",placeholder:"0x12312312..."},model:{value:t.referral.address,callback:function(e){t.$set(t.referral,"address",e)},expression:"referral.address"}}),t._v(" "),r("small",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("referral"),expression:"errors.has('referral')"}],staticClass:"text-danger"},[t._v("\n                                "+t._s(t.errors.first("referral"))+"\n                            ")])],1):t._e(),t._v(" "),r("b-btn",{attrs:{type:"submit",variant:"primary",disabled:t.errors.has("referral")||t.account.nextClaimTime>Date.now(),size:"lg"}},[t._v("\n                            Get Tokens\n                        ")]),t._v(" "),r("br"),t._v(" "),r("small",{staticClass:"text-muted mt-3"},[t._v("\n                            Note: you just need to pay Gas to get your tokens\n                            "),r("b-link",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{href:"https://kb.myetherwallet.com/gas/what-is-gas-ethereum.html",target:"_blank",title:"What is Gas?"}},[r("font-awesome-icon",{attrs:{icon:"info-circle"}})],1)],1),t._v(" "),t.trx.hash?r("b-alert",{staticClass:"mt-3",attrs:{show:"",variant:"success"}},[t._v("\n                            Last transaction:\n                            "),r("b-link",{attrs:{href:t.trx.link,target:"_blank"}},[t._v(t._s(t.trx.hash))])],1):t._e()],1),t._v(" "),r("hr",{staticClass:"my-4"}),t._v(" "),r("h4",[t._v("Earn more Shaka Tokens with your referral link")]),t._v(" "),r("b-form-group",{attrs:{id:"my-link-group",label:"Your referral link is:","label-for":"my-link"}},[r("b-form-input",{attrs:{id:"my-link",name:"my-link",type:"text",size:"lg",readonly:""},model:{value:t.account.share.link,callback:function(e){t.$set(t.account.share,"link",e)},expression:"account.share.link"}})],1),t._v(" "),r("p",{staticClass:"share-link"},[r("b-btn",{staticClass:"twitter",attrs:{href:t.account.share.twitter,target:"_blank"}},[r("font-awesome-icon",{attrs:{icon:["fab","twitter"]}})],1),t._v(" "),r("b-btn",{staticClass:"facebook",attrs:{href:t.account.share.facebook,target:"_blank"}},[r("font-awesome-icon",{attrs:{icon:["fab","facebook-f"]}})],1),t._v(" "),r("b-btn",{staticClass:"telegram",attrs:{href:t.account.share.telegram,target:"_blank"}},[r("font-awesome-icon",{attrs:{icon:["fab","telegram-plane"]}})],1),t._v(" "),t.isMobile()?r("b-btn",{staticClass:"whatsapp",attrs:{href:t.account.share.whatsapp,target:"_blank"}},[r("font-awesome-icon",{attrs:{icon:["fab","whatsapp"]}})],1):t._e()],1),t._v(" "),r("p",{staticClass:"lead"},[t._v("\n                        Share with your friends and earn Shaka Tokens\n                    ")])]]:[t.metamask.installed&&t.metamask.netId===t.network.current.id?r("p",{staticClass:"card-text"},[r("b-btn",{attrs:{variant:"primary",size:"lg",disabled:!t.metamask.installed||t.metamask.netId!==t.network.current.id},on:{click:t.enable}},[t._v("\n                        Connect\n                    ")])],1):r("b-alert",{attrs:{show:"",variant:"warning"}},[t.metamask.installed?t.metamask.netId!==t.network.current.id?[t._v("\n                        You are on the wrong Network."),r("br"),t._v("\n                        Please switch your Ethereum Provider on "),r("b",[t._v(t._s(t.network.current.name))]),t._v(".\n                    ")]:t._e():[t._v("\n                        Install\n                        "),r("b-link",{attrs:{href:"https://metamask.io/",target:"_blank"}},[t._v("MetaMask")]),t._v("\n                        or a mobile browser like\n                        "),r("b-link",{attrs:{href:"https://trustwallet.com/",target:"_blank"}},[t._v("Trust Wallet")]),t._v("\n                        or\n                        "),r("b-link",{attrs:{href:"https://wallet.coinbase.com/",target:"_blank"}},[t._v("Coinbase Wallet")]),t._v("\n                        to get your Tokens.\n                    ")]],2)]],2),t._v(" "),r("b-card",{staticClass:"mb-3 text-white",attrs:{title:"Faucet status",id:"faucet-box"}},[t.loading?[r("ui--loader",{attrs:{loading:!0,color:"#ffffff"}})]:[r("p",{staticClass:"card-text"},[t._v("\n                    We've already distributed "),r("b",[t._v(t._s(t.faucet.distributedTokens)+" "+t._s(t.token.symbol))]),t._v(".\n                    Remaining tokens "),r("b",[t._v(t._s(t.faucet.remainingTokens)+" "+t._s(t.token.symbol))]),t._v("."),r("br"),t._v(" "),r("b-progress",{staticClass:"mt-2",attrs:{value:t.faucet.percentage,variant:"warning",striped:"",animated:!0}}),t._v(" "),r("small",[t._v("\n                        You can earn "),r("b",[t._v(t._s(t.faucet.dailyRate)+" "+t._s(t.token.symbol))]),t._v(" per day and\n                        "),r("b",[t._v(t._s(t.faucet.referralTokens)+" "+t._s(t.token.symbol))]),t._v("\n                        for each time your friends will use the faucet.\n                    ")])],1)]],2)],1)],1)},[],!1,null,null,null);e.default=h.exports}}]);