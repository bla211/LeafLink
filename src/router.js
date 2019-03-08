import Vue from 'vue'
import Router from 'vue-router'
import Invoice from './views/Invoice.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'invoice',
      component: Invoice
    }
    
  ]
})
