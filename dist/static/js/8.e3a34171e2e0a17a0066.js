webpackJsonp([8],{CuZs:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("tcnj"),s=a("n5Qe"),n=(a("v2ns"),a("7QTg")),p={name:"Charity",components:{swiper:n.swiper,swiperSlide:n.swiperSlide,PList:i.a},created:function(){this.$bus.title="寺院场所",this.getAp()},data:function(){return{ap:null,bacteriaOption:{loop:!0,autoplay:!0},imgURL:"http://47.100.205.149:65532"}},methods:{getAp:function(){var t=this;s.a.getLevel1({indexType:6,pageNo:0,pageSize:3}).then(function(e){0===e.data.code?t.ap=e.data.data:alert("网络错误，请刷新重试")})}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.ap?a("div",{staticClass:"p-ap"},[a("swiper",{staticClass:"p-swiper",attrs:{options:t.bacteriaOption}},t._l(t.ap.image,function(e,i){return a("swiper-slide",{staticClass:"item"},[a("div",{on:{click:function(a){t.$router.push({name:"Details",params:{id:e.id}})}}},[a("img",{attrs:{src:t.imgURL+e.pic,alt:""}}),t._v(" "),a("p",{staticClass:"desc"},[t._v(t._s(t._f("cut")(e.remark,20))+" "),a("span",{staticClass:"page"},[a("span",{staticStyle:{"font-weight":"bold"}},[t._v(t._s(i+1))]),t._v("/"+t._s(t.ap.image.length))])])])])})),t._v(" "),t._l(t.ap.list,function(e){return t.ap?[23===e.type?a("p-list",{attrs:{title:e.typeName,type:"horizontal-2",list:e.data,router:{name:"PageList",params:{type:e.type}}}}):t._e(),t._v(" "),1===e.type?a("p-list",{attrs:{title:e.typeName,list:e.data,router:{name:"PageList",params:{type:e.type}}}},[a("img",{attrs:{src:t.imgURL+e.pic,alt:""}})]):t._e()]:t._e()})],2):t._e()},staticRenderFns:[]};var l=a("VU/8")(p,r,!1,function(t){a("uqFt")},"data-v-2a08ef1e",null);e.default=l.exports},uqFt:function(t,e){}});
//# sourceMappingURL=8.e3a34171e2e0a17a0066.js.map