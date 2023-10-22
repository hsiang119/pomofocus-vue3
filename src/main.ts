import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import { initializeFontAwesome, FontAwesomeIcon } from "@/plugins/FontAwesome";

// Initialize FontAwesome
initializeFontAwesome()

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('font-awesome-icon', FontAwesomeIcon).mount('#app')