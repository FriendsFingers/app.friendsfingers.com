(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{125:function(e,t,a){"use strict";a(127),a(128),a(129);var r=a(130),s=a.n(r);t.a={data:function(){return{zeroAddress:"0x0000000000000000000000000000000000000000"}},computed:{dapp:{get:function(){return this.$store.getters.dapp}}},methods:{getParam:function(e){var t={};return window.location.href.replace(location.hash,"").replace(/[?&]+([^=&]+)=?([^&]*)?/gi,(function(e,a,r){t[a]=void 0!==r?r:""})),e?t[e]?t[e]:null:t},ethGetCall:function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),r=1;r<t;r++)a[r-1]=arguments[r];return a.push({from:this.dapp.fallbackAddress}),this.promisify.apply(this,[e].concat(a))},promisify:function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),r=1;r<t;r++)a[r-1]=arguments[r];return new Promise((function(t,r){e.apply(void 0,a.concat([function(e,a){e?r(e):t(a)}]))}))},isMobile:function(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch(e){return!1}},generateQRCode:function(e){return s.a.toDataURL(e,{color:{dark:"#b733a7",light:"#0000"}})},makeToast:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.$bvToast.toast(t,{title:e,variant:a,solid:!0})},formatStructure:function(e){return 0===parseInt(e[0].valueOf())?null:{id:parseInt(e[0].valueOf()),address:e[1],fingerprint:this.formatFingerprint(e[2]),creationDate:1e3*e[3].valueOf(),stakedTokens:parseFloat(this.dapp.web3.fromWei(e[4])),usedTokens:parseFloat(this.dapp.web3.fromWei(e[5])),data:e[6],approved:e[7]}},formatFingerprint:function(e){var t=e.replace("0x","").match(new RegExp(".{1,6}","g"));return{borderColor:"#".concat(t[0]),backgroundColor:"#".concat(t[1]),mainColor:"#".concat(t[2])}}}}},185:function(e,t,a){"use strict";a(186)("link",(function(e){return function(t){return e(this,"a","href",t)}}))},186:function(e,t,a){var r=a(33),s=a(21),n=a(66),o=/"/g,i=function(e,t,a,r){var s=String(n(e)),i="<"+t;return""!==a&&(i+=" "+a+'="'+String(r).replace(o,"&quot;")+'"'),i+">"+s+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(i),r(r.P+r.F*s((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},187:function(e){e.exports=JSON.parse('{"dev":[{"address":"0x1B45780831296Be0E0cB137933c8A84f253F4457","name":"UNO","symbol":"UNO","decimals":18,"logo":"dev_uno.png"},{"address":"0x0B69247Dcf692bbCfd9b1070D9c7A2aA1a90A605","name":"DUE","symbol":"DUE","decimals":18,"logo":"dev_due.png"}],"prod":[{"address":"0x93a7174dafd31d13400cd9fa01f4e5b5baa00d39","name":"Shaka","symbol":"HAK","decimals":18,"logo":"shaka.png"},{"address":"0x5bB1632fA0023e1AA76a1AE92B4635C8DBa49Fa2","name":"GastroAdvisorToken","symbol":"FORK","decimals":18,"logo":"fork.png"},{"address":"0xb9892F9A892f3e251fc58B9076c56aDD528eb8A6","name":"Moyom","symbol":"MYM","decimals":18,"logo":"moyom.png"}]}')},188:function(e){e.exports=JSON.parse('{"dapp_com":{"name":"Dapp.com","link":"https://www.dapp.com","address":"0xA53Fe221Bd861F75907d8Fd496DB1c70779721aA"}}')},191:function(e,t,a){"use strict";a.r(t);a(185),a(126),a(63);var r,s,n,o,i,c,l=a(22),d=a(125),u=a(187),h=a(188),f={name:"TokenFaucet",mixins:[d.a],data:function(){return{loading:!0,loadingData:!1,makingTransaction:!1,referralAddress:"",trx:{hash:"",link:""},referral:{name:"",link:"",address:""},token:{name:"",symbol:"",decimals:18,link:"",logo:""},faucet:{selectedToken:null,tokens:u.prod},account:{isMember:!1,memberId:0,dailyBonus:0,referralBonus:0,address:"",referral:"",referredAddresses:[],share:{link:""}}}},computed:{dapp:{get:function(){return this.$store.getters.dapp}}},mounted:function(){var e=h[this.getParam("friend")];e?this.referral=e:this.referral.address=this.getParam("referral")||"",this.initDapp()},methods:{initDapp:function(){try{this.$store.dispatch("loadERC20"),this.$store.dispatch("initFaucet"),this.$store.dispatch("initDao"),this.ready()}catch(e){alert(e),this.$router.push({path:"/"})}},ready:(c=Object(l.a)(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.faucet.selectedToken=this.faucet.tokens[0],e.next=3,this.initData();case 3:this.$validator.extend("eth_address",{getMessage:function(e){return"Insert a valid Ethereum address."},validate:function(e){return t.dapp.web3.isAddress(e)}}),this.$validator.extend("not_yourself",{getMessage:function(e){return"You can't refer yourself."},validate:function(e){return e.toLowerCase()!==t.dapp.metamask.address.toLowerCase()}});case 5:case"end":return e.stop()}}),e,this)}))),function(){return c.apply(this,arguments)}),enable:(i=Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.$store.dispatch("connect");case 1:case"end":return e.stop()}}),e,this)}))),function(){return i.apply(this,arguments)}),initData:(o=Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.loading=!0,this.loadingData=!0,e.next=4,this.loadERC20Data();case 4:return e.next=6,this.getFaucetData();case 6:return e.next=8,this.getAccountData();case 8:this.loading=!1;case 9:case"end":return e.stop()}}),e,this)}))),function(){return o.apply(this,arguments)}),loadERC20Data:(n=Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{this.token.name=this.faucet.selectedToken.name,this.token.symbol=this.faucet.selectedToken.symbol,this.token.decimals=this.faucet.selectedToken.decimals,this.token.address=this.faucet.selectedToken.address,this.token.link=this.dapp.network.current.etherscanLink+"/token/"+this.token.address,this.token.logo=this.$withBase("/assets/images/faucet/token/".concat(this.faucet.selectedToken.logo))}catch(e){console.log(e),this.loading=!1,alert("Some error occurred.")}case 1:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)}),getFaucetData:(s=Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.ethGetCall(this.dapp.instances.faucet.isEnabled,this.token.address);case 3:return this.faucet.isEnabled=e.sent,e.t0=parseFloat,e.t1=this.dapp.web3,e.next=8,this.ethGetCall(this.dapp.instances.faucet.getDailyRate,this.token.address);case 8:return e.t2=e.sent,e.t3=e.t1.fromWei.call(e.t1,e.t2),this.faucet.dailyRate=(0,e.t0)(e.t3),e.t4=parseFloat,e.t5=this.dapp.web3,e.next=15,this.ethGetCall(this.dapp.instances.faucet.getReferralRate,this.token.address);case 15:return e.t6=e.sent,e.t7=e.t5.fromWei.call(e.t5,e.t6),this.faucet.referralRate=(0,e.t4)(e.t7),e.t8=parseFloat,e.t9=this.dapp.web3,e.next=22,this.ethGetCall(this.dapp.instances.faucet.remainingTokens,this.token.address);case 22:return e.t10=e.sent,e.t11=e.t9.fromWei.call(e.t9,e.t10),this.faucet.remainingTokens=(0,e.t8)(e.t11),e.t12=parseFloat,e.t13=this.dapp.web3,e.next=29,this.ethGetCall(this.dapp.instances.faucet.totalDistributedTokens,this.token.address);case 29:e.t14=e.sent,e.t15=e.t13.fromWei.call(e.t13,e.t14),this.faucet.distributedTokens=(0,e.t12)(e.t15),this.faucet.max=this.faucet.distributedTokens+this.faucet.remainingTokens,this.faucet.percentage=100*this.faucet.distributedTokens/this.faucet.max,e.next=41;break;case 36:e.prev=36,e.t16=e.catch(0),console.log(e.t16),this.loading=!1,alert("Some error occurred.");case 41:case"end":return e.stop()}}),e,this,[[0,36]])}))),function(){return s.apply(this,arguments)}),getAccountData:(r=Object(l.a)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!this.dapp.metamask.address){e.next=54;break}return e.next=4,this.ethGetCall(this.dapp.instances.dao.isMember,this.dapp.metamask.address);case 4:if(this.account.isMember=e.sent,!this.account.isMember){e.next=19;break}return e.next=8,this.ethGetCall(this.dapp.instances.dao.getMemberByAddress,this.dapp.metamask.address);case 8:t=e.sent,this.account.member=this.formatStructure(t),this.account.memberId=this.account.member.id,this.account.dailyBonus=1,this.account.member.stakedTokens>0&&(this.account.dailyBonus*=2),this.account.member.usedTokens>0&&(this.account.dailyBonus*=2),this.account.referralBonus=1,this.account.member.stakedTokens>0&&(this.account.referralBonus*=2),this.account.member.usedTokens>0&&(this.account.referralBonus*=2),e.next=20;break;case 19:this.account.referralBonus=0;case 20:return this.account.address=this.dapp.web3.eth.accounts[0],e.next=23,this.ethGetCall(this.dapp.instances.faucet.getReferral,this.account.address);case 23:return this.account.referral=e.sent,e.next=26,this.ethGetCall(this.dapp.instances.faucet.getReferredAddresses,this.account.address);case 26:return this.account.referredAddresses=e.sent,e.t0=parseFloat,e.t1=this.dapp.web3,e.next=31,this.ethGetCall(this.dapp.instances.faucet.receivedTokens,this.account.address,this.token.address);case 31:return e.t2=e.sent,e.t3=e.t1.fromWei.call(e.t1,e.t2),this.account.receivedTokens=(0,e.t0)(e.t3),e.t4=parseFloat,e.t5=this.dapp.web3,e.next=38,this.ethGetCall(this.dapp.instances.faucet.earnedByReferral,this.account.address,this.token.address);case 38:return e.t6=e.sent,e.t7=e.t5.fromWei.call(e.t5,e.t6),this.account.earnedByReferral=(0,e.t4)(e.t7),e.next=43,this.ethGetCall(this.dapp.instances.faucet.lastUpdate,this.account.address,this.token.address);case 43:return e.t8=e.sent.valueOf(),this.account.lastUpdate=1e3*e.t8,e.next=47,this.ethGetCall(this.dapp.instances.faucet.nextClaimTime,this.account.address,this.token.address);case 47:e.t9=e.sent.valueOf(),this.account.nextClaimTime=1e3*e.t9,this.account.share.link=window.location.origin+this.$withBase("/faucet?referral=".concat(this.account.address)),this.account.share.facebook="https://www.facebook.com/sharer.php?u=".concat(this.account.share.link,"&quote=Earn FREE Tokens using FriendsFingers Faucets. Join DAO and earn more."),this.account.share.twitter="https://twitter.com/intent/tweet?url=".concat(this.account.share.link,"&hashtags=ethereum,blockchain,erc20,airdrop&text=Earn FREE Tokens using @FriendsFingers Faucets. Join DAO and earn more."),this.account.share.telegram="https://t.me/share/url?url=".concat(this.account.share.link,"&text=Earn FREE Tokens using @FriendsFingers Faucets. Join DAO and earn more."),this.account.share.whatsapp="whatsapp://send?text=Earn FREE Tokens using FriendsFingers Faucets. Join DAO and earn more. ".concat(this.account.share.link);case 54:this.loadingData=!1,e.next=62;break;case 57:e.prev=57,e.t10=e.catch(0),console.log(e.t10),this.loadingData=!1,alert("Some error occurred.");case 62:case"end":return e.stop()}}),e,this,[[0,57]])}))),function(){return r.apply(this,arguments)}),getTokens:function(){var e=this;this.$validator.validateAll().then((function(t){t&&(e.makingTransaction=!0,e.dapp.instances.faucet.getTokensWithReferral(e.token.address,e.referral.address,{from:e.account.address},(function(t,a){t?alert("Some error occurred. Maybe you rejected the transaction or you have MetaMask locked!"):(e.trx.hash=a,e.trx.link=e.dapp.network.current.etherscanLink+"/tx/"+e.trx.hash),e.makingTransaction=!1})))})).catch((function(t){console.log(t),e.makingTransaction=!1,alert("Some error occurred.")}))}}},p=a(11),m=Object(p.a)(f,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-row",[a("b-col",{attrs:{lg:"12"}},[a("b-card",{staticClass:"mt-4",attrs:{header:"Select your preferred Token"}},[a("b-form-select",{on:{change:e.initData},model:{value:e.faucet.selectedToken,callback:function(t){e.$set(e.faucet,"selectedToken",t)},expression:"faucet.selectedToken"}},e._l(e.faucet.tokens,(function(t){return a("option",{domProps:{value:t}},[e._v("\n                    "+e._s(t.name+" ("+t.symbol+")")+"\n                ")])})),0),e._v(" "),a("b-form-text",{staticClass:"mt-2",attrs:{id:"input-live-help"}},[e._v("\n                View\n                "),a("b-img",{staticStyle:{"vertical-align":"top"},attrs:{src:e.token.logo,height:"16",alt:e.token.name}}),e._v("\n                "+e._s(e.token.name)+" on "),a("b-link",{attrs:{href:e.token.link,target:"_blank"}},[e._v("Etherscan")])],1)],1),e._v(" "),a("b-card",{staticClass:"mt-4 bg-purple",attrs:{title:e.token.name+" Faucet status",id:"faucet-box"}},[e.loading?[a("ui--loader",{attrs:{loading:!0,color:"#ffffff"}})]:[a("p",{staticClass:"card-text"},[e._v("\n                    Daily rate: "+e._s(e.faucet.dailyRate)+" "+e._s(e.token.symbol)+"."),a("br"),e._v("\n                    Referral rate: "+e._s(e.faucet.referralRate)+" "+e._s(e.token.symbol)+"."),a("br"),e._v("\n\n                    We've already distributed "),a("b",[e._v(e._s(e.faucet.distributedTokens)+" "+e._s(e.token.symbol))]),e._v(".\n                    Remaining tokens "),a("b",[e._v(e._s(e.faucet.remainingTokens)+" "+e._s(e.token.symbol))]),e._v("."),a("br"),e._v(" "),a("b-progress",{staticClass:"my-2",attrs:{value:e.faucet.percentage,variant:"warning",striped:"",animated:!0}}),e._v(" "),a("b-alert",{attrs:{show:""}},[a("small",[e.account.isMember?[e._v("\n                                You will earn\n                                "),a("b",[e._v(e._s(e.faucet.dailyRate*e.account.dailyBonus)+" "+e._s(e.token.symbol))]),e._v("\n                                per day and\n                                "),a("b",[e._v(e._s(e.faucet.referralRate*e.account.referralBonus)+" "+e._s(e.token.symbol))]),e._v("\n                                for each time your friends will use the faucet.\n                            ")]:[e._v("\n                                You can earn up to\n                                "),a("b",[e._v(e._s(4*e.faucet.dailyRate)+" "+e._s(e.token.symbol))]),e._v("\n                                per day and up to\n                                "),a("b",[e._v(e._s(4*e.faucet.referralRate)+" "+e._s(e.token.symbol))]),e._v("\n                                for each time your friends will use the faucet.\n                            ")],e._v(" "),a("b-link",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{href:"https://medium.com/friendsfingers/get-shaka-tokens-join-dao-and-earn-more-3b96c0f39d0c",target:"_blank",title:"How to earn more?"}},[a("font-awesome-icon",{attrs:{icon:"info-circle"}})],1)],2)])],1)]],2),e._v(" "),e.loading?e._e():a("b-card",{staticClass:"mt-4",attrs:{header:"Your account"}},[e.dapp.metamask.address?[e.makingTransaction||e.loadingData?[a("ui--loader",{attrs:{loading:!0}})]:[a("b",[e._v("Account:")]),e._v(" "),a("b-link",{attrs:{href:e.dapp.network.current.etherscanLink+"/address/"+e.account.address,target:"_blank"}},[e._v(e._s(e.account.address)+"\n                    ")]),e._v(" "),a("br"),e._v(" "),e.account.referral!==e.zeroAddress?[a("b",[e._v("You have been invited by:")]),e._v(" "),a("b-link",{attrs:{href:e.dapp.network.current.etherscanLink+"/address/"+e.account.referral,target:"_blank"}},[e._v(e._s(e.account.referral)+"\n                        ")]),e._v(" "),a("br")]:e._e(),e._v("\n\n                    You have earned "),a("b",[e._v(e._s(e.account.receivedTokens)+" "+e._s(e.token.symbol))]),e._v(" by using faucet."),a("br"),e._v("\n\n                    You have earned "),a("b",[e._v(e._s(e.account.earnedByReferral)+" "+e._s(e.token.symbol))]),e._v("\n                    from your "),a("b",[e._v(e._s(e.account.referredAddresses.length))]),e._v(" referred addresses."),a("br"),e._v(" "),0!==e.account.lastUpdate?[a("small",[e._v("\n                            Last Update: "),a("b",[e._v(e._s(e._f("formatLocaleDate")(e.account.lastUpdate)))]),e._v(",\n                            you can claim again on "),a("b",[e._v(e._s(e._f("formatLocaleDate")(e.account.nextClaimTime)))])])]:e._e(),e._v(" "),e.referral.link&&0===e.account.receivedTokens?[a("br"),e._v(" "),a("h5",[e._v("\n                            Your referral:\n                            "),a("b-link",{attrs:{href:e.referral.link,target:"_blank"}},[e._v(e._s(e.referral.name))])],1)]:e._e(),e._v(" "),e.makingTransaction?e._e():a("b-form",{staticClass:"mt-3",on:{submit:function(t){return t.preventDefault(),e.getTokens(t)}}},[0===e.account.receivedTokens&&""!==e.referral.address?a("b-form-group",{attrs:{id:"referral-group",label:"Referral Address:","label-for":"referral",description:"Your referral address"}},[a("b-form-input",{directives:[{name:"validate",rawName:"v-validate",value:"not_yourself|eth_address",expression:"'not_yourself|eth_address'"}],class:{"is-invalid":e.errors.has("referral")},attrs:{id:"referral",name:"referral",type:"text",size:"lg",readonly:"","data-vv-as":"Referral Address",placeholder:"0x12312312..."},model:{value:e.referral.address,callback:function(t){e.$set(e.referral,"address",t)},expression:"referral.address"}}),e._v(" "),a("small",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("referral"),expression:"errors.has('referral')"}],staticClass:"text-danger"},[e._v("\n                                "+e._s(e.errors.first("referral"))+"\n                            ")])],1):e._e(),e._v(" "),e.account.isMember?[a("b-btn",{attrs:{type:"submit",variant:"primary",disabled:e.errors.has("referral")||e.account.nextClaimTime>Date.now(),size:"lg"}},[e._v("\n                                Get Tokens\n                            ")]),e._v(" "),a("br"),e._v(" "),a("small",{staticClass:"text-muted mt-3"},[e._v("\n                                Note: you just need to pay Gas to get your tokens\n                                "),a("b-link",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{href:"https://kb.myetherwallet.com/gas/what-is-gas-ethereum.html",target:"_blank",title:"What is Gas?"}},[a("font-awesome-icon",{attrs:{icon:"info-circle"}})],1)],1),e._v(" "),e.trx.hash?a("b-alert",{staticClass:"mt-3",attrs:{show:"",variant:"success"}},[e._v("\n                                Last transaction:\n                                "),a("b-link",{attrs:{href:e.trx.link,target:"_blank"}},[e._v(e._s(e.trx.hash))])],1):e._e()]:a("b-alert",{staticClass:"mt-3",attrs:{show:"",variant:"danger"}},[e._v("\n                            You must\n                            "),a("b-link",{attrs:{to:e.$withBase("/dashboard")}},[e._v("\n                                join DAO\n                            ")]),e._v("\n                            to start earning tokens.\n                        ")],1)],2),e._v(" "),a("hr",{staticClass:"my-4"}),e._v(" "),a("h4",[e._v("Earn more Tokens with your referral link")]),e._v(" "),a("b-form-group",{attrs:{id:"my-link-group",label:"Your referral link is:","label-for":"my-link"}},[a("b-form-input",{attrs:{id:"my-link",name:"my-link",type:"text",size:"lg",readonly:""},model:{value:e.account.share.link,callback:function(t){e.$set(e.account.share,"link",t)},expression:"account.share.link"}})],1),e._v(" "),a("p",{staticClass:"share-link"},[a("b-btn",{staticClass:"twitter",attrs:{href:e.account.share.twitter,target:"_blank"}},[a("font-awesome-icon",{attrs:{icon:["fab","twitter"]}})],1),e._v(" "),a("b-btn",{staticClass:"facebook",attrs:{href:e.account.share.facebook,target:"_blank"}},[a("font-awesome-icon",{attrs:{icon:["fab","facebook-f"]}})],1),e._v(" "),a("b-btn",{staticClass:"telegram",attrs:{href:e.account.share.telegram,target:"_blank"}},[a("font-awesome-icon",{attrs:{icon:["fab","telegram-plane"]}})],1),e._v(" "),e.isMobile()?a("b-btn",{staticClass:"whatsapp",attrs:{href:e.account.share.whatsapp,target:"_blank"}},[a("font-awesome-icon",{attrs:{icon:["fab","whatsapp"]}})],1):e._e()],1),e._v(" "),a("p",{staticClass:"lead"},[e._v("\n                        Share with your friends and earn Tokens\n                    ")])]]:[e.dapp.metamask.installed&&e.dapp.metamask.netId===e.dapp.network.current.id?a("p",{staticClass:"card-text"},[a("b-btn",{attrs:{variant:"primary",size:"lg",disabled:!e.dapp.metamask.installed||e.dapp.metamask.netId!==e.dapp.network.current.id},on:{click:e.enable}},[e._v("\n                        Connect\n                    ")])],1):a("b-alert",{attrs:{show:"",variant:"warning"}},[e.dapp.metamask.installed?e.dapp.metamask.netId!==e.dapp.network.current.id?[e._v("\n                        You are on the wrong Network."),a("br"),e._v("\n                        Please switch your Ethereum Provider on "),a("b",[e._v(e._s(e.dapp.network.current.name))]),e._v(".\n                    ")]:e._e():[e._v("\n                        Install\n                        "),a("b-link",{attrs:{href:"https://metamask.io/",target:"_blank"}},[e._v("MetaMask")]),e._v(" "),e.isMobile()?[e._v("or a mobile Web3 browser")]:e._e(),e._v("\n                        to get your Tokens.\n                    ")]],2)]],2)],1)],1)}),[],!1,null,null,null);t.default=m.exports}}]);