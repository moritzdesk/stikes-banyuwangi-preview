import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ArticlesIndex from '../views/ArticlesIndex.vue'
import ArticleDetail from '../views/ArticleDetail.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/artikel',
    name: 'ArticlesIndex',
    component: ArticlesIndex
  },
  {
    path: '/artikel/:id',
    name: 'ArticleDetail',
    component: ArticleDetail,
    props: true
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

