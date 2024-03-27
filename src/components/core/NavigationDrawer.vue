<template>
  
    <v-navigation-drawer location="left" v-model="toggle" fixed app>
      <v-layout column>
      <v-list>
        <v-list-tile v-for="item in items" :key="item.title" avatar @click="">
          <v-list-tile-avatar @click="changeRoute('Dashboard', 1)">
            <img :src="item.avatar">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title v-html="item.title"></v-list-tile-title>
            <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-divider></v-divider>
      <v-list>
        <v-list-group>

          <v-list-tile slot="activator">
            <template v-slot:prepend>
              <img src="../../assets/svgs/OpenProject.svg" alt="Open Project Icon" style="margin-right: 15px;">
            </template>
            <v-list-tile-title class="item-title">{{ $t('Open projects') }}</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="changeRoute('Dashboard', 1, 'Project 1')">
            <v-list-tile-action>
              <img src="../../assets/svgs/ListProject.svg" alt="Open Project Icon">
            </v-list-tile-action>
            <v-list-tile-title :class="[{ 'active': selectedIndex === 4 }, 'item-title']">{{ $t('Project 1')
              }}</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="changeRoute('Dashboard', 1, 'Project 2')">
            <v-list-tile-action>
              <img src="../../assets/svgs/ListProject.svg" alt="Open Project Icon">
            </v-list-tile-action>
            <v-list-tile-title :class="[{ 'active': selectedIndex === 5 }, 'item-title']">{{ $t('Project 2')
              }}</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="changeRoute('Dashboard', 1, 'Project 3')">
            <v-list-tile-action>
              <img src="../../assets/svgs/ListProject.svg" alt="Open Project Icon">
            </v-list-tile-action>
            <v-list-tile-title :class="[{ 'active': selectedIndex === 6 }, 'item-title']">{{ $t('Project 3')
              }}</v-list-tile-title>
          </v-list-tile>
        </v-list-group>

        <v-list-group>
          <v-list-tile slot="activator">
            <template v-slot:prepend>
              <img src="../../assets/svgs/ClosedProject.svg" alt="Close Project Icon" style="margin-right: 15px;">
            </template>
            <v-list-tile-title class="item-title">{{ $t('Closed projects') }}</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="changeRoute('Dashboard', 1, 'Project 1')">
            <v-list-tile-action>
              <img src="../../assets/svgs/ListProject.svg" alt="Open Project Icon">
            </v-list-tile-action>
            <v-list-tile-title :class="[{ 'active': selectedIndex === 5 }, 'item-title' ]">{{ $t('Project 1')
              }}</v-list-tile-title>
          </v-list-tile>
        </v-list-group>

      </v-list>
      <v-list>
        <!-- List items -->
        <v-footer app>
          <v-layout align-start row>
              <div class="text-md-center pb-3 cursor-grab" @click="changeRoute('Settings', 4, 'Settings')">
                <span class="black--text pr-5" >Settings</span>
                <img src='../../assets/svgs/SettingIcon.svg' />
              </div>
              <div class="text-md-center cursor-grab">
                <span class="black--text pr-5" >Log Out</span>
                <img src='../../assets/svgs/LogOutIcon.svg' />
              </div>
            
          </v-layout>
        </v-footer>
        
      </v-list>
      </v-layout>
    </v-navigation-drawer>
  
</template>

<script>
import { mapState } from 'vuex';


export default {
  props: {
    toggle: {
      type: Boolean,
      required: false,
      default: true
    }
  },

  data() {
    return {
      selectedIndex: 1,
      items: [
        { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg', subtitle: 'Admin' }
      ]
    }
  },
  computed: {
    ...mapState(['selectedProject']),
  },
  methods: {
    changeRoute(routeName, selectedIndex , projectName) {
      const vm = this;

      vm.selectedIndex = selectedIndex;
      this.$store.commit('updateProject', projectName);
      return vm.$router.push({ name: routeName });
    }
  }
}
</script>

<style>
.toolbar {
  font-weight: bold;
  font-size: 18px;
}

.toolbar .text {
  padding-left: 15px;
  color: white;
  text-decoration: none;
}

.item-title {
  font-size: 17px;
  font-weight: 500;
}

.item-sub-title {
  font-size: 15px;
  font-weight: 500;
}

.active {
  font-weight: bold;
}
</style>
