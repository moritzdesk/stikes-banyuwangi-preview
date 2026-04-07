import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ArticlesIndex from '../views/ArticlesIndex.vue'
import ArticleDetail from '../views/ArticleDetail.vue'
import ProfilView from '../views/ProfilView.vue'
import ProgramStudiIndex from '../views/ProgramStudiIndex.vue'
import ProgramStudiDetail from '../views/ProgramStudiDetail.vue'
import AkademikView from '../views/AkademikView.vue'
import FasilitasView from '../views/FasilitasView.vue'
import KerjaSamaView from '../views/KerjaSamaView.vue'
import KontakView from '../views/KontakView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/profil',
    name: 'Profil',
    component: ProfilView
  },
  {
    path: '/program-studi',
    name: 'ProgramStudiIndex',
    component: ProgramStudiIndex
  },
  {
    path: '/program-studi/:slug',
    name: 'ProgramStudiDetail',
    component: ProgramStudiDetail,
    props: true
  },
  {
    path: '/akademik',
    name: 'Akademik',
    component: AkademikView
  },
  {
    path: '/fasilitas',
    name: 'Fasilitas',
    component: FasilitasView
  },
  {
    path: '/kerja-sama',
    name: 'KerjaSama',
    component: KerjaSamaView
  },
  {
    path: '/kontak',
    name: 'Kontak',
    component: KontakView
  },
  {
    path: '/artikel',
    name: 'ArticlesIndex',
    component: ArticlesIndex
  },
  {
    path: '/artikel/:slug',
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
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    } else if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

export default router
