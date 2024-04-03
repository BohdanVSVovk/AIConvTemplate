<template>
  <v-toolbar app>
    <v-toolbar-title>
      <v-toolbar-side-icon @click="toggleNavigationBar"></v-toolbar-side-icon>
      {{ textContent }}
    </v-toolbar-title>

    <v-spacer></v-spacer> <!-- Add a spacer to push buttons to the right -->
    <div>
      <component :is="RightButton" />
      <!-- <b-button @click="changeRoute('SelectUtility', 2)" variant="primary">New Project</b-button> -->
    </div>
  </v-toolbar>
</template>
<script>

export default {
  props: {
    RightButton: Object,
    textContent: String
  },
  methods: {
    toggleNavigationBar() {
      const vm = this;

      vm.$emit('toggleNavigationBar');
    },

    changeRoute(routeName, selectedIndex) {
      const vm = this;

      vm.selectedIndex = selectedIndex;

      return vm.$router.push({ name: routeName });
    },
  }
};
</script>
<style>
  .toolbar-menu-item {
    padding-left: 5px;
  }

  .selected-language-flag {
    max-width: 45px;
  }

  .language-flag {
    max-width: 40px;
  }


  .languages-list-item {
    cursor: pointer;
    margin-top: -2px;
    margin-left: 1px;
  }

  .languages-list-item-title {
    font-size: 16px;
  }

  .languages-list-item-title:hover {
    color: #41B883;
    font-weight: bold;
  }
  .language-menu {
    border-radius: 25px;
    width: 235px;
    margin-right: 10px;
  }
  
  
</style>