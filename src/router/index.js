import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // 首页
    {
      path: '/',
      name: 'Index',
      meta: {nav: true},
      component:(resolve) => require(["@/views/Index"], resolve)
    },
    // 本会介绍
    {
      path: '/introduce',
      name: 'Introduce',
      component:(resolve) => require(["@/views/Introduce"], resolve)
    },
    // 新闻中心
    {
      path: '/news',
      name: 'News',
      component:(resolve) => require(["@/views/News"], resolve)
    },
    // 政策法规
    {
      path: '/policies',
      name: 'Policies',
      component:(resolve) => require(["@/views/Policies"], resolve)
    },
    // 慈善公益
    {
      path: '/charity',
      name: 'Charity',
      component:(resolve) => require(["@/views/Charity"], resolve)
    },
    //名寺宝刹
    {
      path: '/acquaintingPagoda',
      name: 'AcquaintingPagoda',
      component:(resolve) => require(["@/views/AcquaintingPagoda"], resolve)
    },

    // 各项列表页
    {
      path: '/list/:type',
      name: 'PageList',
      component:(resolve) => require(["@/views/pageList"], resolve)
    },
    // 详情页
    {
      path: '/details/:type',
      name: 'PageList',
      component:(resolve) => require(["@/views/pageList"], resolve)
    }
  ]
})
