import { createRouter, createWebHistory } from 'vue-router'

import EventRoutes from '@/pages/Event/routes.js'
import AboutRoutes from '@/pages/About/routes.js'
import NotFoundRoute from '@/pages/NotFound/routes.js'

const routes = [...EventRoutes, ...AboutRoutes, ...NotFoundRoute]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
