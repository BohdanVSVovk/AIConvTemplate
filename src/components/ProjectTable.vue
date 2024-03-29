<template>
  <div>
    <b-table @row-clicked="handleRowClick" striped hover :items="this.$store.state.projectLists" :fields="fields"></b-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        // Note `isActive` is left out and will not appear in the rendered table
        fields: [ 'no','project_name', 'status', 'notes', 'open_project'],
        items: []
      }
    },
    mounted() {
      this.items = this.$store.state.projectLists
    },
    methods: {
      handleRowClick(item, index, event) {
        // Handle row click event here
        try {
          this.$router.push({ name: 'FilePerProject', params: { id: item.no } });
        } catch (error) {
          console.error('Error navigating to file-project:', error);
        }
      }
}
  }
</script>