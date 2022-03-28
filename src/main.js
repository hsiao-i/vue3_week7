import { createApp } from 'vue'
import 'bootstrap'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
// loading 效果
import Loading from 'vue-loading-overlay' // component
import 'vue-loading-overlay/dist/vue-loading.css' // style
import { date, toThousandths } from './methods/filters.js'
import $messageState from '@/methods/messageState.js'

const app = createApp(App)
app.config.globalProperties.$filters = {
  date,
  toThousandths
}
app.config.globalProperties.$messageState = $messageState

app.use(router)
app.use(VueAxios, axios)
app.component(date)
// loading
app.component('LoadingOverlay', Loading)
app.mount('#app')
