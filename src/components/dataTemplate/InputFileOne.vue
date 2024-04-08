<template>
  <v-flex xs12 class="ml-5">

    <v-layout column sm6 md3>
      <v-layout justify-space-around class="mb-4">
        <v-layout row style="width: 50%;">
          <div>
            <div>
              <span class="blue--text text--darken-4 font-weight-bold">SKU (Column A)</span>
            </div>
            <b-dropdown :text="selectedItem.sku">
              <b-dropdown-item 
                v-for="(item, index) in selectedInputFileOptions" 
                :key="index" 
                href="#"
                @click="selectedItem.sku = item"
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
              <div v-if="selectedItemData('sku')">{{ selectedItemData('sku') }}</div>
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
            <b-dropdown :text="selectedItem.brand">
              <b-dropdown-item 
                v-for="(item, index) in selectedInputFileOptions" 
                :key="index" 
                href="#"
                @click="selectedItem.brand = item"
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
              <div v-if="selectedItemData('brand')">{{ selectedItemData('brand') }}</div>
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
            <b-dropdown :text="selectedItem.spec">
              <b-dropdown-item 
                v-for="(item, index) in selectedInputFileOptions" 
                :key="index" 
                href="#"
                @click="selectedItem.spec = item"
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
              <div v-if="selectedItemData('spec')">{{ selectedItemData('spec') }}</div>
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
      selectedItem: {
        sku: null,
        brand: null,
        spec: null
      }
    }
  },
  computed: {
    selectedInputFileOptions() {
      let item = 
      this.$store.state.processable_data.find(item => item.id === this.$store.state.fileOrderArray[this.order-1]);
  
      //check if the item is found and it has columns property
      if (item && item.columns) {
        return item.columns;
      }

      return null; // return null or [] or {} depending on your requirement
    }
  },
  methods: {
    selectedItemData(type) {
      if (this.selectedItem[type]) {
        let data = this.$store.state.processable_data.find(data => data.columns.includes(this.selectedItem[type]));
        return data ? data.row_data[this.selectedItem[type]] : null;
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
        if (newVal.length) {
          // Assuming 'newVal[0]' is the value for SKU
          this.selectedItem.sku = newVal[0];

          // Assuming 'newVal[1]' is the value for Brand
          if(newVal[1]) {
            this.selectedItem.brand = newVal[1];
          }

          // Assuming 'newVal[2]' is the value for Spec
          if(newVal[2]) {
            this.selectedItem.spec = newVal[2];
          }
          let item = this.$store.state.processable_data.find(item => item.id === this.$store.state.fileOrderArray[this.order-1]);
          this.$store.commit('updateInputSettings',{
            order: this.order,
            id: item.id,
            name: item.name,
            selectedItem: this.selectedItem
          })
          console.log(this.$store.state.processable_data.length)
          console.log(this.order)
          console.log(this.$store.state.inputSettings)
        }
      },
    },
  }
}
</script>