import { createRouter, createWebHistory } from 'vue-router'

import EventRoutes from '@/pages/Event/routes.js'
import AboutRoutes from '@/pages/About/routes.js'

const routes = [...EventRoutes, ...AboutRoutes]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
