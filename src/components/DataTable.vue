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
        <tr v-for="item in items" :key="item.id">
          <td>
            <input type="checkbox" v-model="selected" :value="item.id">
          </td>
          <td>{{ item.name }}</td>
          <td>{{ item.source }}</td>
          <td>{{ item.notes }}</td>
          <td v-if="item.file_type == 'excel' "><img src="../assets/svgs/ExcelIcon.svg" alt="SVG Icon"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selected: [], // Array to store selected row names
      items: [
        {
          id: 1,
          name: 'File Name',
          location: 'File Name',
          height: 'File Name',
          base: 'File Name',
        },
        {
          id: 2,
          name: 'File Name',
          location: 'File Name',
          height: 'File Name',
          base: 'File Name',
        }
      ]
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
  }
}
</script>

<style>
thead {
  
  background-color: #D4EAFE;
  color: #D4EAFE;
}
</style>