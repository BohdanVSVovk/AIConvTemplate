<template>
  <v-toolbar app>
    <div v-if="isLoading" class="text-center">
      <v-progress-circular
      color="primary"
      indeterminate
    ></v-progress-circular>
    </div>
    <v-toolbar-title>
      <v-toolbar-side-icon @click="toggleNavigationBar"></v-toolbar-side-icon>
      Files
    </v-toolbar-title>

    <v-spacer></v-spacer> <!-- Add a spacer to push buttons to the right -->
    <div class="d-flex justify-content-center">
      <b-button class="mr-2" v-model="file" @click="$refs.file.click()" ref="file-input" variant="primary">Upload File</b-button>
      <input ref="file" type="file" class="d-none" v-on:change="handleFileUpload()">
    </div>
    <div class="d-flex justify-content-center mr-2">{{file.name}}</div>
    
  </v-toolbar>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      result: '',
      file: "",
      isLoading: false // Ensure this line is present
    }
  },

  computed: {
  },
  methods: {
    handleFileUpload: function () {
      this.file = this.$refs.file.files[0];
      this.isLoading = true;
      let formData = new FormData();
      formData.append('file', this.file);
      formData.append('projectId', this.$route.params.id)
      axios.post(process.env.BACKEND_API + '/file-upload', formData)
        .then(response => {
          return response.data;
          // location.reload();
          // let currentPath = this.$router.currentRoute.fullPath;
          // this.$router.push({ path: "/" }).then(() => this.$router.push(currentPath));
          // Here you can change route after successful upload
          // this.changeRoute('YourRouteName', routeIndex);
        })
        .then((data) => {
          this.isLoading = false;
          location.reload()
        })
        .catch(error => {
          console.log(error);
        });
    },
    clearFiles() {
        this.$refs['file-input'].reset()
      },
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