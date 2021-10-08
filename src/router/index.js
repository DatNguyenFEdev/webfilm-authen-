import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'
import DetailFilm from '@/views/filmpage/DetailFilm.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    // children: [
    //   {
    //     path: '/auth',
    //     name: 'Auth',
    //     component: Auth,
    //   }
    // ]
  },
  {
    path: '/detail-film/:film_id',
    name: 'DetailFilm', 
    component: DetailFilm,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
