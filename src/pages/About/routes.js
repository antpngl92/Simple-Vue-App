const routes = [
  {
    path: '/about',
    name: 'About',
    // The annon function bellow: don't load this code until is requested
    // The webpack chunk name: store this JS in a file named about
    component: () =>
      import(/* webpackChunkName: "about", */ '@/pages/About/About.vue')
  }
]

export default routes
