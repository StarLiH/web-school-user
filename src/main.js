import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/icons/index.js"
import SvgIcon from "@/components/SvgIcon/index"; // svg component


createApp(App)
.use(store)
.use(router)
.component("svg-icon", SvgIcon)
.mount('#app')
