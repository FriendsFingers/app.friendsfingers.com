(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{360:function(t,e,n){var r=n(204).f,i=Function.prototype,s=/^\s*function ([^ (]*)/;"name"in i||n(55)&&r(i,"name",{configurable:!0,get:function(){try{return(""+this).match(s)[1]}catch(t){return""}}})},404:function(t,e,n){"use strict";n.r(e);n(360),n(208);var r=n(57),i=n(361),s=n(372),a={name:"Member",mixins:[i.a,s.a],data:function(){return{loading:!0,memberId:0,token:{name:"",symbol:"",decimals:18,link:"",logo:""},member:null}},computed:{network:{get:function(){return this.$store.getters.network}}},mounted:function(){this.memberId=this.getParam("id"),this.initDapp()},methods:{initDapp:function(){try{this.initToken(),this.initDao(),this.ready()}catch(t){alert(t),document.location.href=this.$withBase("/")}},ready:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getTokenData();case 2:return t.next=4,this.getMember();case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),getTokenData:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.promisify(this.instances.token.name);case 3:return this.token.name=t.sent,t.next=6,this.promisify(this.instances.token.symbol);case 6:this.token.symbol=t.sent,this.token.link=this.network.current.etherscanLink+"/token/"+this.instances.token.address,this.token.logo=this.$withBase("/assets/images/logo/shaka_logo_white.png"),t.next=16;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0),this.loading=!1,alert("Some error occurred.");case 16:case"end":return t.stop()}},t,this,[[0,11]])}));return function(){return t.apply(this,arguments)}}(),getMember:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.promisify(this.instances.dao.getMemberById,this.memberId);case 2:e=t.sent,this.member=this.formatStructure(e),this.loading=!1;case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}},o=n(40),c=Object(o.a)(a,function(){var t=this.$createElement,e=this._self._c||t;return e("b-container",[e("b-row",{staticClass:"mt-4"},[e("b-col",{attrs:{lg:"10","offset-lg":"1"}},[this.loading?[e("b-card",{staticClass:"mb-3"},[e("ui--loader",{attrs:{loading:!0}})],1)]:this.member?[e("ui--member-details",{attrs:{member:this.member,token:this.token,network:this.network}})]:[e("b-card-body",[this._v("\n                    No member found.\n                ")])]],2)],1)],1)},[],!1,null,null,null);e.default=c.exports}}]);