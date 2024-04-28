import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'primeicons/primeicons.css'
import 'primevue/resources/themes/aura-dark-green/theme.css'
import  './utils/log-listener'
const app = createApp(App)
app.use(router)
app.mount('#app')
