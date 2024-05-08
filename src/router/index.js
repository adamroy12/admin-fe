import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
/* import LoginView from '../views/LoginView.vue' */
import UserManagementView from '../views/UserManagementView.vue'
import ExamManagementView from '../views/ExamManagementView.vue'
import ProjectManagementView from '../views/ProjectManagementView.vue'
import TimetableManagementView from '../views/TimetableManagementView.vue'
  
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
 /*  {
    path: '/LoginView',
    name: 'login',
    component: LoginView
  }, */
  {
    path: '/UserManagementView',
    name: 'userManagement',
    component: UserManagementView
  },
  {
    path: '/ExamManagementView',
    name: 'examManagement',
    component: ExamManagementView
  },
  {
    path: '/ProjectManagementView',
    name: 'projectManagement',
    component: ProjectManagementView
  },
  {
    path: '/TimetableManagementView',
    name: 'timetableManagement',
    component: TimetableManagementView
  }  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
