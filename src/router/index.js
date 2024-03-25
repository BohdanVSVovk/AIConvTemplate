import Vue from 'vue';
import Router from 'vue-router';

import Dashboard from '../pages/Dashboard.vue';
import SelectUtility from '../pages/SelectUtility.vue';
import DataTemplate from '../pages/DataTemplate.vue'
import Login from '../pages/core/Login.vue';
import Settings from '../pages/Settings.Vue';
import Error from '../pages/core/Error.vue';



Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
        breadcrumb: [
          { name: 'dashboard' }
        ]
      }
    },
    {
      path: '/select-utility',
      name: 'SelectUtility',
      component: SelectUtility,
      meta: {
        breadcrumb: [
          { name: 'utility' }
        ]
      }
    },
    {
      path: '/data-template',
      name: 'DataTemplate',
      component: DataTemplate,
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        allowAnonymous: true
      }
    },
    {
      path: '/error',
      name: 'Error',
      component: Error,
      meta: {
        allowAnonymous: true
      }
    },
  ]
});
