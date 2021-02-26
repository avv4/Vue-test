import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    component: Home
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/film/:id',
    name: 'Film',
    props: true,
    component: () => import('../views/Film.vue')
  }
];

export default new VueRouter({
  routes,
  mode: 'history'
})
