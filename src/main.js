import { createApp } from 'vue';
import router from './router.js';
import store from './vuex-store/index.js';
import App from './App.vue';
import BaseBadge from './components/baseUI/BaseBadge.vue';
import BaseButton from './components/baseUI/BaseButton.vue';
import BaseCard from './components/baseUI/BaseCard.vue';
import BaseSpinner from './components/baseUI/BaseSpinner.vue'
import BaseDialog from './components/baseUI/BaseDialog.vue'

createApp(App)
  .use(router)
  .use(store)
  .component('base-badge', BaseBadge)
  .component('base-button', BaseButton)
  .component('base-card', BaseCard)
  .component('base-spinner', BaseSpinner)
  .component('base-dialog', BaseDialog)
  .mount('#app');
