import { createRouter, createWebHistory } from 'vue-router'
import authentification_page from '../views/auth.vue'
import contactVue from '../views/contact-list'
import dashboardVue from '@/views/dashboard.vue'
import emailContentVue from '@/views/email-content.vue'
import mailFormVue from '@/views/mail-form.vue'
import outboxVue from '@/views/outbox.vue'
import settingsVue from '@/views/settings.vue'
import templateListeVue from '@/views/template-liste.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: authentification_page
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: contactVue
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: dashboardVue
  },
  {
    path: '/view-content',
    name: 'emailContent',
    component: emailContentVue
  },
  {
    path: '/email-form',
    name: 'email-form',
    component: mailFormVue
  },
  {
    path: '/outbox',
    name: 'outbox',
    component: outboxVue
  },
  {
    path: '/settings',
    name: 'settings',
    component: settingsVue
  },
  {
    path: '/new-launch',
    name: 'new-lauch',
    component: templateListeVue
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
