webpackJsonp([7],{2976:function(t,e){},CuZs:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("tcnj"),s=a("n5Qe"),n=(a("v2ns"),a("7QTg")),p={name:"Charity",components:{swiper:n.swiper,swiperSlide:n.swiperSlide,PList:i.a},created:function(){this.$bus.title="名寺宝刹",this.getAp()},data:function(){return{ap:null,bacteriaOption:{loop:!0,autoplay:!0},imgURL:"http://137.116.142.190:65532"}},methods:{getAp:function(){var t=this;s.a.getLevel1({indexType:6,pageNo:0,pageSize:3}).then(function(e){0===e.data.code?t.ap=e.data.data:alert("网络错误，请刷新重试")})}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.ap?a("div",{staticClass:"p-ap"},[a("swiper",{staticClass:"p-swiper",attrs:{options:t.bacteriaOption}},t._l(t.ap.image,function(e,i){return a("swiper-slide",{staticClass:"item"},[a("div",{on:{click:function(a){t.$router.push({name:"Details",params:{id:e.id}})}}},[a("img",{attrs:{src:t.imgURL+e.pic,alt:""}}),t._v(" "),a("p",{staticClass:"desc"},[t._v(t._s(t._f("cut")(e.remark,20))+" "),a("span",{staticClass:"page"},[a("span",{staticStyle:{"font-weight":"bold"}},[t._v(t._s(i+1))]),t._v("/"+t._s(t.ap.image.length))])])])])})),t._v(" "),t._l(t.ap.list,function(e){return t.ap?[14===e.type?a("p-list",{attrs:{title:e.typeName,type:"horizontal-2",list:e.data,router:{name:"PageList",params:{type:e.type}}}}):t._e(),t._v(" "),15===e.type?a("p-list",{attrs:{title:e.typeName,list:e.data,router:{name:"PageList",params:{type:e.type}}}},[a("img",{attrs:{src:t.imgURL+e.pic,alt:""}})]):t._e()]:t._e()})],2):t._e()},staticRenderFns:[]};var l=a("VU/8")(p,r,!1,function(t){a("2976")},"data-v-2915f32c",null);e.default=l.exports}});
//# sourceMappingURL=7.40c6dedfac054f6bf555.js.map