import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/createPw',
    name: 'createPw',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "createPw" */ '../views/CreatePwView.vue')
  },
  {
    path: '/newMnemonic',
    name: 'newMnemonic',
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "newMnemonic" */ '../views/MnemonicView.vue')
  },
  {
    path: '/mnemonicChk',
    name: 'mnemonicChk',
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "newMnemonic" */ '../views/MnemonicChkView.vue')
  },
  {
    path: '/createAccount',
    name: 'createAccount',
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "newMnemonic" */ '../views/CreateAccountView.vue')
  },
  {
    path: '/login',
    name: 'login',
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "newMnemonic" */ '../views/LoginView.vue')
  },
  {
    path: '/wallet',
    name: 'wallet',
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "newMnemonic" */ '../views/MyWalletView.vue')
  },
  {
    path: '/payment',
    name: 'payment',
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "newMnemonic" */ '../views/paymentView.vue')
  }
]

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  // history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
