import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/computed',
      name: 'computedName',
      component: () => import('./components/ComputedDemo.vue')
    },
    {
      path: '/arrayDemo',
      name: 'arrayDemo',
      component: () => import('./components/ArrayDemo.vue')
    },
    {
      path: '/objectDemo',
      name: 'objectDemo',
      component: () => import('./components/ObjectDemo.vue')
    },
    {
      path: '/formDemo',
      name: 'formDemo',
      component: () => import('./components/FormDemo.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
