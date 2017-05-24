import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Days from '@/components/Days'
import Day from '@/components/Day'

Vue.use(VueRouter)

export default new VueRouter({

  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/days',
      name: 'days',
      component: Days
    },
    {
      path: '/day/:id',
      name: 'day',
      component: Day
    }
  ]
})
