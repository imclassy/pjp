import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/about/',
      name: 'About',
      component: About
    },
    {
      path: '/skills/',
      name: 'Skills',
      component: Skills
    },
    {
      path: '/contact/',
      name: 'Contact',
      component: Contact
    }
  ]
})
