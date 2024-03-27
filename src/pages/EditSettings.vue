<template>
    <div>
        <div class="darken-2 text-xs-center mt-3">
        <span class="black--text headline">Akeneo Template 1 Setting</span>
        </div>
        <div class="m-5">
            <v-form>
                <v-container>
                    <v-layout row wrap>

                        <v-flex xs4 class="d-flex align-center blue lighten-3">
                            <div class="font-weight-bold">Template Name</div>
                        </v-flex>
                        <v-flex xs4 class="d-flex align-center blue lighten-3">
                            <div class="font-weight-bold">No of Prompts</div>
                        </v-flex>
                        <v-flex xs4 class="d-flex align-center blue lighten-3">
                            <div class="font-weight-bold">Options</div>
                        </v-flex>
                        <v-divider ></v-divider>
                    </v-layout>
                </v-container>
                
                <v-container>
                    <v-layout row wrap>

                        <v-flex xs12 sm4 class="d-flex align-center">
                            <div class="font-weight-bold">Column Name</div>
                        </v-flex>

                        <v-flex xs12 sm4 class="d-flex align-center">
                            <div class="font-weight-bold">1</div>
                        </v-flex>
                        <v-flex xs12 sm4>
                            <v-btn round color="primary" @click="changeRoute('EditSettings', 5)">Manage Prompt</v-btn>
                        </v-flex>
                        <v-divider></v-divider>
                    </v-layout>
                </v-container>
                <v-container>
                    <v-layout row wrap>
                        <v-flex xs12 sm4 class="d-flex align-center">
                            <div class="font-weight-bold">Column Name</div>
                        </v-flex>

                        <v-flex xs12 sm4 class="d-flex align-center">
                            <div class="font-weight-bold">1</div>
                        </v-flex>


                        <v-flex xs12 sm4>
                            <v-btn round color="primary">Manage Prompt</v-btn>
                        </v-flex>
                        <v-divider></v-divider>
                    </v-layout>
                </v-container>
                <v-container>
                    <v-layout row wrap>

                        <v-flex xs12 sm4 class="d-flex align-center">
                            <div class="font-weight-bold">Column Name</div>
                        </v-flex>

                        <v-flex xs12 sm4 class="d-flex align-center">
                            <div class="font-weight-bold">2</div>
                        </v-flex>


                        <v-flex xs12 sm4>
                            <v-btn round color="primary">Manage Prompt</v-btn>
                        </v-flex>
                        <v-divider></v-divider>
                    </v-layout>
                </v-container>
                
                
            </v-form>
        </div>
        
    </div>
</template>

<script>
  export default {
    data: () => ({
      first: '',
      last: ''
    }),
    methods: {
    changeRoute(routeName, selectedIndex) {
      const vm = this;

      vm.selectedIndex = selectedIndex;
      return vm.$router.push({ name: routeName });
    }
  }
  }
</script>