import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Portfolio from '@/components/Portfolio'
import Deaths from '@/components/portfolio/Deaths'
import WhoDied from '@/components/portfolio/WhoDied'

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
    },
    {
      path: '/portfolio/',
      name: 'Portfolio',
      component: Portfolio
    },
    {
      path: '/deaths/',
      name: 'Deaths',
      component: Deaths
    },
    {
      path: '/who-died/',
      name: 'WhoDied',
      component: WhoDied
    }
  ]
})
