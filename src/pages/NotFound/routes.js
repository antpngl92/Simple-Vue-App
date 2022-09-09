import NotFound from '@/pages/NotFound/NotFound.vue'

const routes = [
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

export default routes
