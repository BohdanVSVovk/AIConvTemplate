<template>
  <v-container fluid grid-list-xl>
    <v-toolbar color="white">
          <v-toolbar-title center>Select Utilities</v-toolbar-title>
          <v-spacer></v-spacer>
    </v-toolbar>
    <v-divider></v-divider>
    <v-layout class="pa-3 m-5" row wrap>
      <v-flex v-for="utility in utilityGroups" :key="utility.id" xs4>
        <v-card color="red lighten-5" class="black--text" max-width="250px" min-height="200px">
          <v-card-title primary-title>
            <div>
              <div class="headline">{{ utility.title }}</div>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat @click="changeRoute(utility.href, utility.routeIndex)">Go now</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      lorem: `Lorem ipsum dolor sit amet, mel at clita quando.`,
      utilityGroups: [
        { title : "Data Template", id:1 , href: "DataTemplate", routeIndex: 3},
        { title : "Convert Link to S3", id:2},
        { title : "Convert Spreadsheet to Excel", id:3},
        { title : "Convert PDF Price list to Excel", id:4},
      ]
    }
  },
  methods: {
    changeRoute(routeName, selectedIndex) {
      const vm = this;

      vm.selectedIndex = selectedIndex;

      return vm.$router.push({ name: routeName });
    }
  }
}
</script>

<style>

</style>
