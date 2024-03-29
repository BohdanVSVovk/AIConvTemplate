<template>
  <v-container fluid grid-list-xl>
    <v-layout row wrap>
      <v-flex d-flex lg12 sm6 xs12>
        <project-table/>
      </v-flex>
      <v-flex d-flex lg4 sm6 xs12>
        <time-line />
      </v-flex>
      <!-- DataTable&TimeLine Ends -->
      <v-flex d-flex lg6 sm6 xs12>
        <stepper/>
      </v-flex>
      <v-flex d-flex lg6 sm6 xs12>
        <user-tree-view />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      lorem: `Lorem ipsum dolor sit amet, mel at clita quando.`
    }
  },
  mounted() {
      fetch(process.env.ROOT_API + '/project/')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok')
        }
        return res.json();
      })
      .then((data) => {
        this.$store.commit('updateProjectList', data.projects);
      })
      .catch((error) => {
        throw new Error('Error! Could not reach the API. ' + error);
      })
}
}
</script>

<style>

</style>
