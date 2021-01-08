import { createApp } from 'vue';
import router from './router.js'
import store from './vuex-store/index.js'
import App from './App.vue'
import BaseBadge from './components/baseUI/BaseBadge.vue';
import BaseButton from './components/baseUI/BaseButton.vue';
import BaseCard from './components/baseUI/BaseCard.vue'
const app = createApp(App)

app.use(router)
app.use(store)

app.component('base-badge', BaseBadge)
app.component('base-button', BaseButton);
app.component('base-card', BaseCard)

app.mount('#app');
