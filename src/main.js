import {createApp} from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import {loadFonts} from './plugins/webfontloader'
import 'vuetify/dist/vuetify.min.css'
import VueSplide from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css'
// Default theme
import '@splidejs/vue-splide/css';
// or other themes
import '@splidejs/vue-splide/css/skyblue';
import '@splidejs/vue-splide/css/sea-green';
// or only core styles
import '@splidejs/vue-splide/css/core';
import './index.css'
import '././assets/styles/main.css'




loadFonts()

createApp(App)
    .use(vuetify)
    .use(VueSplide)
    .mount('#app')
