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
import DokumenView from '../views/DokumenView.vue'
import FormulirIndex from '../views/FormulirIndex.vue'
import FormulirView from '../views/FormulirView.vue'
import BeasiswaView from '../views/BeasiswaView.vue'
import InfoPmbView from '../views/InfoPmbView.vue'
import AsosiasiView from '../views/AsosiasiView.vue'
import IdentitasView from '../views/IdentitasView.vue'
import MagazinesIndex from '../views/MagazinesIndex.vue'

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
    path: '/identitas',
    name: 'Identitas',
    component: IdentitasView
  },
  {
    path: '/majalah',
    name: 'MagazinesIndex',
    component: MagazinesIndex
  },
  {
    path: '/beasiswa',
    name: 'Beasiswa',
    component: BeasiswaView
  },
  {
    path: '/infopmb',
    name: 'InfoPmb',
    component: InfoPmbView
  },
  {
    path: '/asosiasi',
    name: 'Asosiasi',
    component: AsosiasiView
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
    // Live preview draf dari Payload (tombol Preview di CMS, butuh login CMS)
    path: '/pratinjau/:slug',
    name: 'ArticlePreview',
    component: ArticleDetail,
    props: { preview: true }
  },
  {
    path: '/dokumen',
    name: 'DokumenIndex',
    component: DokumenView
  },
  {
    // Daftar formulir dinamis dari CMS (form baru otomatis muncul)
    path: '/formulir',
    name: 'FormulirIndex',
    component: FormulirIndex
  },
  {
    path: '/formulir/:slug',
    name: 'FormulirDetail',
    component: FormulirView,
    props: true
  },
  {
    // /admin web dialihkan ke Payload CMS (Tina pindah ke /tina-admin selama transisi)
    path: '/admin/:pathMatch(.*)*',
    name: 'AdminRedirect',
    beforeEnter: () => {
      const cmsUrl = (import.meta.env.VITE_CMS_URL || 'http://127.0.0.1:3000').replace(/\/$/, '')
      window.location.href = `${cmsUrl}/admin`
      return false
    },
    component: () => import('../views/NotFound.vue')
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
