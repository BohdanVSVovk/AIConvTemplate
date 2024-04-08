// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import Vuetify from 'vuetify';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vuetify/dist/vuetify.min.css';
import 'font-awesome/css/font-awesome.css';


import 'material-design-icons-iconfont/dist/material-design-icons.css';
import './styles/global.css';

import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex';

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    selectedProject: 'Project',
    initialSettingValue: 0,
    projectLists: [],
    processable_data:[],
    fileOrderArray:[],
    inputSettings:[]
  },
  mutations: {
    updateProject(state, projectName) {
      state.selectedProject = projectName;
    },
    updateProcessData(state, processable_data) {
      state.processable_data = processable_data;
    },
    updateFileOrder(state, file_order) {
      state.fileOrderArray = file_order;
    },
    updateProjectList(state, newProjectList) {
      state.projectLists = newProjectList;
    },
    updateInputSettings(state, inputSettings) {
      let index = state.inputSettings.findIndex(item => item.order === inputSettings.order);
    
      if (index !== -1) {
        // Replace item at index using native splice
        state.inputSettings.splice(index, 1, inputSettings);
      } else {
        // Add new item if it does not exist in state.inputSettings
        state.inputSettings.push(inputSettings);
      }
    },
    increaseSettingValue(state) {
      state.initialSettingValue++
    },
    decreaseSettingValue(state) {
      state.initialSettingValue--
    },
    setSettingValue(state, newValue) {
      state.initialSettingValue = newValue
    },
  }
});

Vue.use(VueAxios, axios);
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
import VueChartkick from 'vue-chartkick';
import Chart from 'chart.js';
import fullCalendar from 'vue-fullcalendar';
import { setupComponents } from './config/setup-components';

import { setupAndGetI18n } from './config/setup-i18n';

const i18n = setupAndGetI18n(Vue);

import swatches from 'vue-swatches';
import "vue-swatches/dist/vue-swatches.min.css"

Vue.use(VueChartkick, { adapter: Chart });
Vue.component('full-calendar', fullCalendar);
Vue.component('swatches', swatches);

setupComponents(Vue);

Vue.use(Vuetify);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  store,
  components: { App },
  template: '<App/>',
  data: {
    themeColor: '#1D2939',
    userEmail: 'admin@yopmail.com',
    userPassword: '123456'
  },

  methods: {
    setLanguage(language) {
      const vm = this;

      localStorage.setItem('language', language);
    
      document.documentElement.lang = language;
    
      vm.$i18n.locale = language;
    
      vm.$vuetify.lang.current = language;
    }
  },

  created() {
    const vm = this;

    vm.setLanguage('en');
  },
})
