<template>
  <div>
    <template v-if="!$route.meta.allowAnonymous">
      <v-app id="inspire">
        <div class="app-container">
          <div v-if="$route.path === '/'">
            <toolbar @toggleNavigationBar="drawer = !drawer"/>
          </div>
          <div v-if="$route.path === '/file-project'">
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
export default {
  name: 'App',
  data() {
    return {
      drawer: true
    }
  }
}
</script>

<style>
  .v-btn:hover:before{
    color: transparent !important;
  }
</style>
