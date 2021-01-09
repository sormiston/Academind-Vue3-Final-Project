import { createRouter, createWebHistory } from 'vue-router';
import CoachesList from './screens/coaches/CoachesList.vue'
import CoachDetail from './screens/coaches/CoachDetail.vue'
import CoachRegister from './screens/coaches/CoachRegister.vue'
import ContactCoach from './screens/requests/ContactCoach.vue'
import RequestReceived from './screens/requests/RequestReceived.vue'
import NotFound from './screens/NotFound.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    {
      name: 'coaches',
      path: '/coaches',
      component: CoachesList,
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
        },
      ],
    },
    { name: 'register', path: '/register', component: CoachRegister },
    { name: 'requests', path: '/requests', component: RequestReceived },
    { path: '/:notFound(.*)', component: NotFound }
  ],
});

export default router