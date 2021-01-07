import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    {
      name: 'coaches',
      path: '/coaches',
      components: null,
    },
    {
      name: 'coachDetail',
      path: '/coach/:id',
      components: null,
      props: true,
      children: [
        {
          path: 'contact',
          components: null,
          props: true,
        },
      ],
    },
    { name: 'register', path: '/register', components: null },
    { name: 'requests', path: '/requests', components: null },
    { path: '/:notFound(.*)', components: null }
  ],
});

export default router