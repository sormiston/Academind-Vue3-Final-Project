
import { createRouter, createWebHistory } from 'vue-router';
import CoachesList from './screens/coaches/CoachesList.vue';
// import CoachDetail from './screens/coaches/CoachDetail.vue';
// import CoachRegister from './screens/coaches/CoachRegister.vue';
// import ContactCoach from './screens/requests/ContactCoach.vue';
// import RequestReceived from './screens/requests/RequestReceived.vue';
import UserAuth from './screens/auth/UserAuth.vue';
import NotFound from './screens/NotFound.vue';
import store from './vuex-store/index.js';

const CoachDetail = () => import('./screens/coaches/CoachDetail.vue');
const CoachRegister = () => import('./screens/coaches/CoachRegister.vue');
const ContactCoach = () => import('./screens/requests/ContactCoach.vue');
const RequestReceived = () => import('./screens/requests/RequestReceived.vue');

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    {
      name: 'coaches',
      path: '/coaches',
      component: CoachesList
    },
    {
      name: 'coachDetail',
      path: '/coaches/:id',
      component: CoachDetail,
      props: true,
      children: [
        {
          path: 'contact',
          component: ContactCoach,
          props: true
        }
      ],
      // do not attempt parsing slugs that do not correlate with known coach IDs
      async beforeEnter(to, _, next) {
        if (!store.getters['coaches/hasCoaches']) {
          await store.dispatch('coaches/loadCoaches');
        }
        if (!store.getters['coaches/getAllCoachIds'].includes(to.params.id)) {
          console.log('coach not found');
          next('/coaches');
        } else {
          next();
        }
      }
    },
    {
      name: 'register',
      path: '/register',
      component: CoachRegister,
      meta: { requiresAuth: true }
    },
    {
      name: 'requests',
      path: '/requests',
      component: RequestReceived,
      meta: { requiresAuth: true }
    },
    { path: '/auth', component: UserAuth, meta: { requiresUnauth: true } },
    {
      path: '/:notFound(.*)',
      component: NotFound
    }
  ]
});

router.beforeEach(function(to, _, next) {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next('/auth');
  } else if (to.meta.requiresUnath && store.getters.isAuthenticated) {
    next('/coaches');
  } else {
    next();
  }
});

export default router;
