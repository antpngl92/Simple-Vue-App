import { createRouter, createWebHistory } from 'vue-router'

import EventRoutes from '@/pages/Event/routes.js'
import AboutRoutes from '@/pages/About/routes.js'
import NotFoundRoute from '@/pages/NotFound/routes.js'
import NetworkError from '@/pages/NetworkError/routes.js'
import NProgress from 'nprogress'
import GStore from '@/store'

const routes = [
  ...EventRoutes,
  ...AboutRoutes,

  // Keep at the bottom
  ...NotFoundRoute,
  ...NetworkError
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,

  // Bring back to top of page when click on pagination
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

router.beforeEach((to, from) => {
  NProgress.start()

  const notAuthorized = true
  if (to.meta.requireAuth && notAuthorized) {
    GStore.flashMessage = 'Sorry, you are not authorized to view this page'

    setTimeout(() => {
      GStore.flashMessage = ''
    }, 3000)

    if (from.href) {
      // Check if there was a previous page that we navigated from
      return false
    } else {
      return { path: '/' }
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})

export default router
