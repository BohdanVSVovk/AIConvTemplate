<template>
  <v-flex xs12 class="ml-5">

    <v-layout column sm6 md3>
      <v-layout justify-space-around class="mb-4">
        <v-layout row style="width: 50%;">
          <div>
            <div>
              <span class="blue--text text--darken-4 font-weight-bold">Input File Column</span>
              <div v-for="(item, index) in inputSettings">
                <span>Source File {{ index + 1 }}</span> -> <span>{{ getItemOrderField(item, order - 1) }}</span>
              </div>
            </div>
          </div>
        </v-layout>

        <v-layout row style="width: 50%;">
          
          <div>
            <div>
              <span class="blue--text text--darken-4 font-weight-bold">Processing Option</span>
            </div>
            <b-dropdown text="Prompt 1">
              <b-dropdown-item href="#">Prompt 1</b-dropdown-item>
              <b-dropdown-item href="#">Prompt 2</b-dropdown-item>
            </b-dropdown>
          </div>
        </v-layout>
      </v-layout>
    </v-layout>
  </v-flex>
</template>
<script>
export default {
  data () {
    return {
      inputSettings: this.$store.state.inputSettings
    }
  },
  props: {
    order: Number
  },
  methods: {
    getItemOrderField(item, order) {
    switch(order) {
      case 0:
        return item.selectedItem.sku;
      case 1:
        return item.selectedItem.brand;
      case 2:
        return item.selectedItem.spec;
      default:
        return 'Unknown';
    }
  },
  },
  mounted() {
    console.log(this.order)
  }
}
</script>