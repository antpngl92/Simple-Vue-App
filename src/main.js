import { createApp, reactive } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Global Store object
const GStore = reactive({ flashMessage: '' })

createApp(App)
  .use(store)
  .use(router)
  .provide('GStore', GStore) // Makes GStore Object available for any component in our app to use
  .mount('#app')
