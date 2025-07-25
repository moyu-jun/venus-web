import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { appRoutes } from './app'

const routes: RouteRecordRaw[] = [
  ...appRoutes,
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/NotFoundView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
