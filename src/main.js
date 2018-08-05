// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Bus from './bus'
import Itv from 'itv-utils'
// import VConsole from "vconsole";

// 初始化
// let vConsole = new VConsole();
Vue.config.productionTip = false;
Vue.prototype.$bus = Bus;
Vue.prototype.$itv = Itv;
Vue.filter('dateFormat', Itv.Date.format);
Vue.filter('cut', Itv.String.cut);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

new Vue({
  el: "title",
  computed: {
    title() {
      return Bus.title;
    }
  }
});
