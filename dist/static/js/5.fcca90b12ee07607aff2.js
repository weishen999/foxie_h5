webpackJsonp([5],{QDBE:function(t,e){},mlqX:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("tcnj"),s=i("n5Qe"),n=(i("v2ns"),i("7QTg")),r={name:"Index",components:{swiper:n.swiper,swiperSlide:n.swiperSlide,PList:a.a},created:function(){this.$bus.title="上海佛教网",this.getIndex()},data:function(){return{index:null,bacteriaOption:{loop:!0,autoplay:!0},imgURL:"http://img.shanghaifoxie.com"}},methods:{getIndex:function(){var t=this;s.a.getLevel1({indexType:1,pageNo:0,pageSize:3}).then(function(e){0===e.data.code?t.index=e.data.data:alert("网络错误，请刷新重试")})}}},l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.index?i("div",{staticClass:"p-index"},[i("swiper",{staticClass:"p-swiper",attrs:{options:t.bacteriaOption}},t._l(t.index.image,function(e,a){return i("swiper-slide",{staticClass:"item"},[i("div",{on:{click:function(i){t.$router.push({name:"Details",params:{id:e.id}})}}},[e.pic?i("img",{attrs:{src:t.imgURL+e.pic,alt:""}}):i("img",{attrs:{src:e.pic,alt:""}}),t._v(" "),i("p",{staticClass:"desc"},[t._v(t._s(t._f("cut")(e.title,20))+" "),i("span",{staticClass:"page"},[i("span",{staticStyle:{"font-weight":"bold"}},[t._v(t._s(a+1))]),t._v("/"+t._s(t.index.image.length))])])])])})),t._v(" "),i("p-list",{attrs:{title:"沪佛动态",type:"img",list:t.index.list[1].data,router:{name:"PageList",params:{type:2}}}}),t._v(" "),i("p-list",{attrs:{title:"各地法规",type:"img",list:t.index.list[8].data,router:{name:"PageList",params:{type:27}}}}),t._v(" "),i("p-list",{attrs:{title:"上海佛协",type:"text",list:t.index.list[10].data,router:{name:"PageList",params:{type:17}}}}),t._v(" "),i("p-list",{attrs:{title:"现任会长",type:"alone",list:t.index.list[4].data,router:{name:"PageList",params:{type:19}}}}),t._v(" "),i("p-list",{attrs:{title:"历届领导",type:"horizontal",list:t.index.list[5].data,router:{name:"PageList",params:{type:20}}}}),t._v(" "),i("p-list",{attrs:{title:"国家政策",type:"text",list:t.index.list[6].data,router:{name:"PageList",params:{type:25}}}}),t._v(" "),i("p-list",{staticClass:"p-pagoda",attrs:{title:"寺院场所",type:"horizontal-2",list:t.index.list[9].data,router:{name:"PageList",params:{type:22}}}})],1):t._e()},staticRenderFns:[]};var p=i("VU/8")(r,l,!1,function(t){i("QDBE")},null,null);e.default=p.exports}});
//# sourceMappingURL=5.fcca90b12ee07607aff2.js.map