<template>
  <v-flex xs12 class="ml-5">

    <v-layout column sm6 md3>
      <v-layout v-for="(list, listIndex) in processiableData" :key="listIndex"  justify-space-around class="mb-4">
        <v-layout row style="width: 50%;">
          <div>
            <div>
              <span class="blue--text text--darken-4 font-weight-bold">File {{ listIndex + 1 }} (Name)</span>
            </div>
            <b-dropdown :text="selectedProcessiableData[listIndex] ? selectedProcessiableData[listIndex].name: list.name">
              <b-dropdown-item v-for="(item, index) in processiableData" :key="index" @click="chooseItem(item, listIndex)">
                {{ item.name }}
              </b-dropdown-item>
            </b-dropdown>
            
          </div>
        </v-layout>

        <v-layout row style="width: 50%;">
          <div>
            <div>
              <span class="blue--text text--darken-4 font-weight-bold">Output File:</span><span>SKU</span>
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
      selectedProcessiableData: [],
      fileOrder:[],
      processiableData: this.$store.state.processable_data
    }
  },
  mounted(){
    this.fileOrder = this.$store.state.processable_data.map(item => {return item.id});
    this.$store.commit('updateFileOrder', this.fileOrder)
  },
  methods: {
    chooseItem(item, index) {
      // Vue.set() is used to enable reactivity when adding or replacing items in an array
      this.$set(this.selectedProcessiableData, index, item);
      this.$set(this.fileOrder, index, item.id);
      this.$store.commit('updateFileOrder', this.fileOrder)
    }
  }

}
</script>