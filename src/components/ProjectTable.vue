<template>
  <div>
    <b-table striped hover :items="items" :fields="fields"></b-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        // Note `isActive` is left out and will not appear in the rendered table
        fields: ['project_name', 'status', 'notes', 'open_project'],
        items: [
          { isActive: true, notes: 'File Name', project_name: 'Project 1', status: 'File Name', open_project: 'Open' },
          { isActive: false, notes: 'File Name', project_name: 'Project 2', status: 'File Name', open_project: 'Open' },
          { isActive: false, notes: 'File Name', project_name: 'Project 3', status: 'File Name', open_project: 'Open' }
        ]
      }
    }
  }
</script>