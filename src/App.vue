<template>
  <div>
    <template v-if="!$route.meta.allowAnonymous">
      <v-app id="inspire">
        <div class="app-container">
          <div v-if="$route.path === '/'">
            <toolbar @toggleNavigationBar="drawer = !drawer" :RightButton="newProjectButton" :textContent="'Project'"/>
          </div>
          <div v-if="isFileProjectRoute">
            <projectbar @toggleNavigationBar="drawer = !drawer"/>
          </div>
          <navigation :toggle="drawer"/>
          <v-content>
            <router-view/>
            <page-footer />
          </v-content>
        </div>
      </v-app>
    </template>
    <template v-else>
      <transition>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </template>
  </div>
</template>

<script>
import NewProjectR from './components/basic/buttons/NewProjectR.vue';
export default {
  name: 'App',
  data() {
    return {
      drawer: true,
      newProjectButton: NewProjectR
    }
  },
  computed: {
    isFileProjectRoute() {
      return this.$route.path.includes('/file-project/');
    }
  }
}
</script>

<style>
  .v-btn:hover:before{
    color: transparent !important;
  }
</style>
