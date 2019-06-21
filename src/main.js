// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import './plugins/vuetify'
import App from './App'
import Routes from './routes'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'

Vue.use(Vuetify)
Vue.use(VueRouter)
Vue.config.productionTip = false

/* eslint-disable no-new */

const router = new VueRouter({
  routes: Routes,
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
  
});

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
