import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import GStore from './store'
import 'nprogress/nprogress.css'

createApp(App)
  .use(router)
  .provide('GStore', GStore) // Makes GStore Object available for any component in our app to use
  .mount('#app')
