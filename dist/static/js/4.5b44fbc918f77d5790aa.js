webpackJsonp([4],{JrXK:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("n5Qe"),a={name:"Details",created:function(){this.getDetails()},data:function(){return{content:""}},methods:{getDetails:function(){var t=this;console.log(this.$route.params.id),s.a.getDetails({id:this.$route.params.id}).then(function(e){t.content=e.data.data}).catch(function(t){alert("网络错误，请刷新重试")})}}},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"itv-details"},[n("h1",{staticClass:"title"},[t._v(t._s(t.content.title))]),t._v(" "),n("p",{staticClass:"desc"},[t._v("来源："+t._s(t.content.sortName)+"  时间："+t._s(t.content.updateTime))]),t._v(" "),n("div",{domProps:{innerHTML:t._s(t.content.description)}})])},staticRenderFns:[]};var c=n("VU/8")(a,i,!1,function(t){n("v3ls")},null,null);e.default=c.exports},v3ls:function(t,e){}});
//# sourceMappingURL=4.5b44fbc918f77d5790aa.js.map