webpackJsonp([5],{ST3Z:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("tcnj"),n=a("n5Qe"),r={name:"Introduce",components:{PList:i.a},created:function(){this.getIntroduce(),this.$bus.title="本会介绍"},data:function(){return{introduce:null,imgURL:"http://47.100.205.149:65532"}},methods:{getIntroduce:function(){var t=this;n.a.getLevel1({indexType:2,pageNo:0,pageSize:3}).then(function(e){0===e.data.code?t.introduce=e.data.data.list:alert("网络错误，请刷新重试")})}}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"itv-introduce"},[t._l(t.introduce,function(e){return t.introduce?[0===e.type?a("p-list",{attrs:{title:"领导成员",list:e.data}},[e.pic?a("img",{attrs:{src:t.imgURL+e.pic,alt:""}}):a("img",{attrs:{src:e.pic,alt:""}})]):t._e(),t._v(" "),19===e.type?a("p-list",{attrs:{title:e.typeName,type:"alone",list:e.data,router:{name:"PageList",params:{type:e.type}}}}):t._e(),t._v(" "),20===e.type?a("p-list",{attrs:{title:e.typeName,type:"horizontal",list:e.data,router:{name:"PageList",params:{type:e.type}}}}):t._e(),t._v(" "),e.type>=11&&e.type<=13?a("p-list",{attrs:{title:e.typeName,type:"hybrid",list:e.data,router:{name:"PageList",params:{type:e.type}}}}):t._e()]:t._e()})],2)},staticRenderFns:[]};var p=a("VU/8")(r,s,!1,function(t){a("x+Ml")},null,null);e.default=p.exports},"x+Ml":function(t,e){}});
//# sourceMappingURL=5.82a5f4dd6b0bb2b4d9ec.js.map