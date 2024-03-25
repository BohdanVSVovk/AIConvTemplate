<template>
  <div class="d-flex align-items-center">
    <span>Status</span>
    <b-dropdown id="dropdown-1" :text="selectedItem" v-model="selectedItem" variant="primary" class="m-2">
      <b-dropdown-item @click="selectItem('Open')">Open</b-dropdown-item>
      <b-dropdown-item @click="selectItem('Close')">Closed</b-dropdown-item>
    </b-dropdown>
  </div>
</template>
  
  <script>
  export default {
    data() {
      return {
        selectedItem: 'Open'
      };
    },
    methods: {
      selectItem(itemText) {
        this.selectedItem = itemText;
      }
    }
  };
  </script>