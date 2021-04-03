import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/icons/index.js"
import SvgIcon from "@/components/SvgIcon/index"; // svg component
import 'element-plus/lib/theme-chalk/index.css'
import ElementPlus from 'element-plus'

createApp(App)
.use(store)
.use(router)
.use(ElementPlus)
.component("svg-icon", SvgIcon)
.mount('#app')
