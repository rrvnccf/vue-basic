import { createApp } from 'vue'

import App from './App.vue'
import Router from "./routes"

const app = createApp(App)
.use(Router)

app.mount('#app')
