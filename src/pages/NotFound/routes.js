import NotFound from '@/pages/NotFound/NotFound.vue'

const routes = [
  // pages
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  },
  // resources
  {
    path: '/404/:resource',
    name: '404Resource',
    component: NotFound,
    props: true
  }
]

export default routes
