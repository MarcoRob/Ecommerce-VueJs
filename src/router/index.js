// ./src/router/index.js
import Vue from 'vue'
import Router from 'vue-router'

// Moved to pages from components
import Home from '../pages/Home'
import Cart from '../pages/Cart'

// Admin Components
import Index from '../pages/Admin/Index'
import New from '../pages/Admin/New'
import Products from '../pages/Admin/Products'
import Edit from '../pages/Admin/Edit'

import Details from '../pages/Details'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Index,
      children: [
        {
          path: 'new',
          name: 'New',
          component: New
        },
        {
          path: '',
          name: 'Products',
          component: Products
        },
        {
          path: 'edit/:id',
          name: 'Edit',
          component: Edit
        }
      ]
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/details/:id',
      name: 'Details',
      component: Details
    }
  ]
})
