import { createRouter, createWebHistory } from 'vue-router'

import EventRoutes from '@/pages/Event/routes.js'
import AboutRoutes from '@/pages/About/routes.js'
import NotFoundRoute from '@/pages/NotFound/routes.js'
import NetworkError from '@/pages/NetworkError/routes.js'
import NProgress from 'nprogress'

const routes = [
  ...EventRoutes,
  ...AboutRoutes,

  // Keep at the bottom
  ...NotFoundRoute,
  ...NetworkError
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(() => {
  NProgress.start()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
