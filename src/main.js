import { createApp } from 'vue'

import router from './router.js'
import App from './App.vue'

import BaseHeading from './components/Header/BaseHeading.vue'

const app = createApp(App);

app.component('base-heading', BaseHeading);

app.use(router);

/** To avoid route initial transition */
// router.isReady().then(() => app.mount('#app'))
app.mount('#app')