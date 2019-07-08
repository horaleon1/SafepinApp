import Vue from 'vue'
import App from './App.vue'
// import vueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Status from './components/Status'
import Home from './components/Home.vue'
import Navbar from './components/Navbar.vue'

const routes = [
  {path: '/home',name:'Home',component:Home},
  {path: '/status',name:'status',component:Status},
  {path: '/navbar',name:'Navbar',component:Navbar}
]

Vue.config.productionTip = false
// Vue.use(vueResource)
Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
