import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Sell from '../views/Sell.vue'
import Contact from '../views/Contact.vue'
import Info from '../views/Info.vue'
import Watch from '../views/Watch.vue'
import SlotPaul from '../views/SlotPaul.vue'
import KeyPaul from '../views/KeyPaul.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sell',
    name: 'Sell',
    component: Sell
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/info',
    name: 'Info',
    component: Info
  },
  {
    path: '/watch',
    name: 'Watch',
    component: Watch
  },
  {
    path: '/slotPaul',
    name: 'SlotPaul',
    component: SlotPaul
  },
  {
    path: '/keyPaul',
    name: 'KeyPaul',
    component: KeyPaul
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
