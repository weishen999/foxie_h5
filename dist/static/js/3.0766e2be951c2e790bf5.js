webpackJsonp([3],{"8YzO":function(t,e){},F0mM:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("tcnj"),s=a("n5Qe"),r=(a("v2ns"),a("7QTg")),n={name:"Charity",components:{swiper:r.swiper,swiperSlide:r.swiperSlide,PList:i.a},created:function(){this.getCharity()},data:function(){return{charity:null,bacteriaOption:{loop:!0,autoplay:!0},imgURL:"http://137.116.142.190:65532"}},methods:{getCharity:function(){var t=this;s.a.getLevel1({indexType:5,pageNo:0,pageSize:3}).then(function(e){0===e.data.code?t.charity=e.data.data:alert("网络错误，请刷新重试")}).catch(function(t){alert("网络错误，请刷新重试")})}}},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.charity?a("div",{staticClass:"p-charity"},[a("swiper",{staticClass:"p-swiper",attrs:{options:t.bacteriaOption}},t._l(t.charity.image,function(e,i){return a("swiper-slide",{staticClass:"item"},[a("div",{on:{click:function(a){t.$router.push({name:"Details",params:{id:e.id}})}}},[a("img",{attrs:{src:t.imgURL+e.pic,alt:""}}),t._v(" "),a("p",{staticClass:"desc"},[t._v(t._s(t._f("cut")(e.remark,20))+" "),a("span",{staticClass:"page"},[a("span",{staticStyle:{"font-weight":"bold"}},[t._v(t._s(i+1))]),t._v("/"+t._s(t.charity.image.length))])])])])})),t._v(" "),t._l(t.charity.list,function(e){return t.charity?[13===e.type?a("p-list",{attrs:{title:e.typeName,type:"horizontal",list:e.data,router:{name:"PageList",params:{type:e.type}}}}):t._e(),t._v(" "),12===e.type?a("p-list",{attrs:{title:e.typeName,type:"text",list:e.data,router:{name:"PageList",params:{type:e.type}}}}):t._e()]:t._e()})],2):t._e()},staticRenderFns:[]};var p=a("VU/8")(n,c,!1,function(t){a("8YzO")},"data-v-90de233a",null);e.default=p.exports}});
//# sourceMappingURL=3.0766e2be951c2e790bf5.js.map