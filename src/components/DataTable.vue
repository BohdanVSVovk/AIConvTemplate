<template>
  <div>
    
    <table class="table">
      <thead>
        <tr>
          <th></th>
          <th>File Name</th>
          <th>Source</th>
          <th>Notes</th>
          <th>File Type</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id" >
          <td>
            <input type="checkbox" v-model="checkboxSelect" :value="item.id">
          </td>
          <td>{{ item.name }}</td>
          <td>{{ item.source }}</td>
          <td>{{ item.notes }}</td>
          <td v-if="item.file_type == 'excel' || '.xlsx' "><img src="../assets/svgs/ExcelIcon.svg" alt="SVG Icon"></td>
        </tr>
      </tbody>
    </table>
    <div class="text-end">
      <b-button @click="callApiWithSelectedIds" variant="primary">Process Selected Data</b-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      checkboxSelect: [], // Array to store selected row names
      items: []
    };
  },
  mounted() {
    fetch(process.env.ROOT_API + '/project/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: this.$route.params.id })
      })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        this.items = data.project_files
      })
      .catch((error) => {
        throw new Error('Error! Could not reach the API. Status: ' + error.response.status + ', Message: ' + error.response.data.message);
      })
  },
  methods:{ 
    callApiWithSelectedIds() { 
      fetch(process.env.BACKEND_API + '/file-processing', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ selected_files: this.checkboxSelect })
      })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(
        (data) => {
          // Call mutation to update processable_data
          this.$store.commit('updateProcessData', data.data);
          this.changeRoute('SelectUtility', 2)
        }
      )
    } ,
    changeRoute(routeName, selectedIndex) {
      const vm = this;

      vm.selectedIndex = selectedIndex;

      return vm.$router.push({ name: routeName });
    },
  }, //... rest of your code }
}
</script>

<style>
thead {
  
  background-color: #D4EAFE;
  color: #D4EAFE;
}
</style>