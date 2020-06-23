import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ComplaintFiling from '../views/ComplaintFiling'
import ConfirmFiling from '../views/ConfirmFiling'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
    },
    {
      path: '/complaintFiling',
      name: ComplaintFiling,
      component: ComplaintFiling
    },
    {
      path: '/confirmFiling',
      name: ConfirmFiling,
      component: ConfirmFiling
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
