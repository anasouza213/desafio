import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
       component: () => import('pages/Login/Index.vue')
     },
    {
      name:'login',
      path: '/login',
        component: () => import('pages/Login/Index.vue')
    },
  
 
    {
      path: '/home',
      component: () => import('layouts/MainLayout.vue'),
      children: [

      {
        name:'home',
        path: '/home',
          component: () => import('pages/Produtos/Index.vue')
      },


    
      {path: '/Profile', component: () => import('pages/User/Profile.vue')},
      {path: '/Produtos', component: () => import('pages/Produtos/Index.vue')},
      {
        name:'users',
        path: '/Users',
        component: () => import('pages/User/Index.vue')
      },
      {
        name:'editarUser',
        path: '/EditarUser',
        component: () => import('pages/User/EditarUser.vue')
      },
    ]
  },

  {
    path: '/Maintenance',
    component: () => import('pages/Maintenance.vue')
  },
 
 
 

  ],
});



// import Vue from 'vue'
// import VueRouter from 'vue-router'

// import routes from './routes'

// Vue.use(VueRouter)

// /*
//  * If not building with SSR mode, you can
//  * directly export the Router instantiation;
//  *
//  * The function below can be async too; either use
//  * async/await or return a Promise which resolves
//  * with the Router instance.
//  */

// export default function (/* { store, ssrContext } */) {
//   const Router = new VueRouter({
//     scrollBehavior: () => ({ x: 0, y: 0 }),
//     routes,

//     // Leave these as they are and change in quasar.conf.js instead!
//     // quasar.conf.js -> build -> vueRouterMode
//     // quasar.conf.js -> build -> publicPath
//     mode: process.env.VUE_ROUTER_MODE,
//     base: process.env.VUE_ROUTER_BASE
//   })

//   return Router
// }


// import Vue from 'vue'
// import VueRouter from 'vue-router'

// import routes from './routes'

// Vue.use(VueRouter)

// /*
//  * If not building with SSR mode, you can
//  * directly export the Router instantiation;
//  *
//  * The function below can be async too; either use
//  * async/await or return a Promise which resolves
//  * with the Router instance.
//  */

// export default function (/* { store, ssrContext } */) {
//   const Router = new VueRouter({
//     scrollBehavior: () => ({ x: 0, y: 0 }),
//     routes,

//     // Leave these as they are and change in quasar.conf.js instead!
//     // quasar.conf.js -> build -> vueRouterMode
//     // quasar.conf.js -> build -> publicPath
//     mode: process.env.VUE_ROUTER_MODE,
//     base: process.env.VUE_ROUTER_BASE
//   })

//   return Router
// }
