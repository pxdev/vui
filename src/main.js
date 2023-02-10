import { createApp } from 'vue'
import { createMetaManager } from 'vue-meta'
import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import App from './App.vue'

import './scss/main.scss'
import 'remixicon/fonts/remixicon.css'

import store from './stores/store'

const routes = setupLayouts(generatedRoutes)

const router = createRouter({
    history: createWebHistory(),
    routes,
})


const app = createApp(App).use(router).use(store).use(createMetaManager())


await router.isReady()
app.mount('#app')
