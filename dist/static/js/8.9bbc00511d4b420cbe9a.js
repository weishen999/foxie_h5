webpackJsonp([8],{VzqB:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("tcnj"),n=s("n5Qe"),a={name:"pageList",components:{PList:i.a},created:function(){this.getList()},data:function(){return{list:null}},methods:{getList:function(){var t=this;n.a.getLevel2({pageNo:0,pageSize:20,type:this.$route.params.type}).then(function(e){t.list=e.data.data,t.$bus.title=t.list.content[0].sortName+"列表"})}}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"p-page-list"},[this.list?e("p-list",{attrs:{title:this.list.content[0].sortName,type:"text",list:this.list.content}}):this._e()],1)},staticRenderFns:[]};var o=s("VU/8")(a,l,!1,function(t){s("d06a")},"data-v-04761600",null);e.default=o.exports},d06a:function(t,e){}});
//# sourceMappingURL=8.9bbc00511d4b420cbe9a.js.map