import EventLayout from '@/pages/Event/Layout.vue'
import EventDetails from '@/pages/Event/Details.vue'
import EventRegister from '@/pages/Event/Register.vue'
import EventEdit from '@/pages/Event/Edit.vue'
import EventList from '@/pages/Event/List.vue'

const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList,
    props: route => ({ page: parseInt(route.query.page) || 1 })
  },
  {
    path: '/event/:id',
    name: 'EventLayout',
    props: true,
    component: EventLayout,
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
        component: EventEdit
      }
    ]
  }
]

export default routes
