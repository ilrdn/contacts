import Vue from 'vue'
import Router from 'vue-router'
import Contacts from '../components/Contacts'
import Contact from '../components/Contact'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'contacts',
      component: Contacts
    },
    {
      path: '/:id',
      name: 'contact',
      component: Contact
    }
  ]
})
