import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Counter from '../views/Counter.vue'
import ToDoApp from '../views/TodoApp.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/counter', component: Counter },
  { path: '/todoapp', component: ToDoApp }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router