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
          <td>{{ item.location }}</td>
          <td>{{ item.height }}</td>
          <td><img src="../assets/svgs/ExcelIcon.svg" alt="SVG Icon"></td>
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
        },
        {
          id: 3,
          name: 'File Name',
          location: 'File Name',
          height: 'File Name',
          base: 'File Name',
        },
        {
          id: 4,
          name: 'File Name',
          location: 'File Name',
          height: 'File Name',
          base: 'File Name',
        },
      ]
    };
  }
}
</script>

<style>
thead {
  
  background-color: #D4EAFE;
  color: #D4EAFE;
}
</style>