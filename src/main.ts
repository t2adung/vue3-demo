import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

import { createPinia } from 'pinia'
import piniaPersistedstate from 'pinia-plugin-persistedstate'

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPersistedstate)
app.use(pinia)

app.use(router)

app.mount('#app')