import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/Home',
      name: 'home',
        component: () => import( './views/Home.vue')
    },
    {
      path: '/Search',
      name: 'Search',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( './views/Search.vue')
    },
      {
          path: '/Brokers',
          name: 'Brokers',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import( './views/Brokers.vue')
      },
      {
          path: '/Settings',
          name: 'Settings',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('./views/Settings.vue')
      }
      ,
      {
          path: '/Users',
          name: 'Users',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import( './views/Users.vue')
      }
      ,
      {
          path: '/Login',
          name: 'Login',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import( './components/AppLogin.vue')
      }
  ]
})
