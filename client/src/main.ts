import './style.css'

import { createPinia } from "pinia"
import { createApp } from 'vue'

import App from '@/App.vue'
import client from "@/pb"
import { createRouter } from "@/router"
import { pocketBaseSymbol } from "@/symbols/injectionSymbols"

const app = createApp(App)
const pinia = createPinia()
const router = createRouter(pinia)

app.provide(pocketBaseSymbol, client)
app.use(pinia)
app.use(router)

app.mount('#app')
