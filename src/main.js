import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import Vue3Storage from "vue3-storage-secure";


createApp(App).use(store).use(router,Vue3Storage, { namespace: "jarvis_", secureKey: "246810" }).mount('#app')
