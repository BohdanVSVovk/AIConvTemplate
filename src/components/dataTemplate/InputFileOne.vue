<template>
  <v-flex xs12 class="ml-5">

    <v-layout column sm6 md3>
      <v-layout justify-space-around class="mb-4">
        <v-layout row style="width: 50%;">
          <div>
            <div>
              <span class="blue--text text--darken-4 font-weight-bold">SKU (Column A)</span>
            </div>
            <b-dropdown :text="selectedItem">
              <b-dropdown-item 
                v-for="(item, index) in selectedInputFileOptions" 
                :key="index" 
                href="#"
                @click="selectedItem = item"
              >
                {{ item }}
              </b-dropdown-item>
            </b-dropdown>
          </div>
        </v-layout>

        <v-layout row style="width: 50%;">
          <div>
            <div>
              <span class="blue--text text--darken-4 font-weight-bold">File Data</span>
              <div v-if="selectedItemData">{{ selectedItemData }}</div>
              <div v-else>Select an item to see data...</div>
            </div>
          </div>
        </v-layout>
      </v-layout>

      <v-layout justify-space-around class="mb-4">
        <v-layout row style="width: 50%;">
          <div>
            <div>
              <span class="blue--text text--darken-4 font-weight-bold">Brand (Column B)</span>
            </div>
            <b-dropdown :text="selectedItem">
              <b-dropdown-item 
                v-for="(item, index) in selectedInputFileOptions" 
                :key="index" 
                href="#"
                @click="selectedItem = item"
              >
                {{ item }}
              </b-dropdown-item>
            </b-dropdown>
          </div>
        </v-layout>

        <v-layout row style="width: 50%;">
          <div>
            <div>
              <span class="blue--text text--darken-4 font-weight-bold">File Data</span>
              <div v-if="selectedItemData">{{ selectedItemData }}</div>
              <div v-else>Select an item to see data...</div>
            </div>
          </div>
        </v-layout>
      </v-layout>

      <v-layout justify-space-around class="mb-4">
        <v-layout row style="width: 50%;">
          <div>
            <div>
              <span class="blue--text text--darken-4 font-weight-bold">Specification (Column C)</span>
            </div>
            <b-dropdown :text="selectedItem">
              <b-dropdown-item 
                v-for="(item, index) in selectedInputFileOptions" 
                :key="index" 
                href="#"
                @click="selectedItem = item"
              >
                {{ item }}
              </b-dropdown-item>
            </b-dropdown>
          </div>
        </v-layout>

        <v-layout row style="width: 50%;">
          <div>
            <div>
              <span class="blue--text text--darken-4 font-weight-bold">File Data</span>
              <div v-if="selectedItemData">{{ selectedItemData }}</div>
              <div v-else>Select an item to see data...</div>
            </div>
          </div>
        </v-layout>
      </v-layout>
    </v-layout>
  </v-flex>
</template>
<script>
export default {
  data() {
  return {
    selectedItem: 'Default text',
  }
},
  computed: {
    selectedInputFileOptions() {
      return this.$store.state.processable_data[this.order-1].columns;
    },
    selectedItemData() {
      if (this.selectedItem) {
        let data = this.$store.state.processable_data.find(data => data.columns.includes(this.selectedItem));
        return data ? data.row_data[this.selectedItem] : null;
      }
      return null;
    }
  },
  props: {
    order: {
      type: Number,
    }
  },
  watch: {
    selectedInputFileOptions: {
      immediate: true,
      handler(newVal) {
        if (newVal.length) this.selectedItem = newVal[0];
      },
    },
  },
  mounted() {
    if (this.order !== undefined) {
      console.log(this.order)
      console.log(this.$store.state.processable_data[this.order-1])
    }
  }
}
</script>