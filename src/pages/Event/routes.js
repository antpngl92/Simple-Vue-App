import EventLayout from '@/pages/Event/Layout.vue'
import EventDetails from '@/pages/Event/Details.vue'
import EventRegister from '@/pages/Event/Register.vue'
import EventEdit from '@/pages/Event/Edit.vue'
import EventList from '@/pages/Event/List.vue'
import EventService from '@/services/EventService.js'
import GStore from '@/store'

const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList,
    props: route => ({ page: parseInt(route.query.page) || 1 })
  },
  {
    path: '/events/:id',
    name: 'EventLayout',
    props: true,
    component: EventLayout,
    beforeEnter: to => {
      return EventService.getEvent(to.params.id)
        .then(response => {
          GStore.event = response.data
        })
        .catch(error => {
          if (error.response && error.response.status == 404) {
            return {
              name: '404Resource',
              params: { resource: 'event' }
            }
          } else {
            return { name: 'NetworkError' }
          }
        })
    },
    children: [
      {
        path: '',
        name: 'EventDetails',
        component: EventDetails
      },
      {
        path: 'register',
        name: 'EventRegister',
        component: EventRegister
      },
      {
        path: 'edit',
        name: 'EventEdit',
        component: EventEdit,
        meta: { requireAuth: true } // Every child route of this route would require the authorization too
      },
      // When changing path/url of a page
      // we can redirect old ulr to the new url
      // in order to comply with Google SEO
      {
        path: '/event/:afterEvent(.*)',
        redirect: to => {
          return { path: '/events/' + to.params.afterEvent }
        }
      }
    ]
  }
]

export default routes
