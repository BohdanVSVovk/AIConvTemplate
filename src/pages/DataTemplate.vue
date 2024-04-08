<template>
  <div>
    <v-container fluid grid-list-xl>
      <v-card>
        <v-layout row justify-space-between>
        <v-flex xs2>
          <NewProject />
        </v-flex>
        <v-flex xs2>
          <StatusButton />
        </v-flex>
      </v-layout>
      </v-card>
    </v-container>
    <div class="darken-2 text-xs-center">
      <span class="black--text display-1">Data Template Utility</span>
    </div>
    <div class="darken-2 text-xs-center" v-if="id !== 4">
      <span class="black--text display-1">Input file settings</span>
    </div>
    <v-container>
      <DataTemplatePanel
        v-if="id === 1"
        :dynamicComponent="SkuMatchForm"
        title="Match SKU from Input files to Output file"
      />

      <DataTemplatePanel
        v-else-if="id === 2"
        :dynamicComponent="InputFileOne"
        title="Input file 1"
      />

      <DataTemplatePanel
        v-else-if="id === 3"
        :dynamicComponent="InputFileTwo" title="Input file 2"
      />

    </v-container>
    <div v-if="id === 4">
      <div class="darken-2 text-xs-center">
        <span class="black--text display-1">Output file settings</span>
      </div>
      <v-container>
        <DataTemplatePanel :dynamicComponent="OutputFileOne" title="Brand (Column 1)"/>
      </v-container>
      <v-container>
        <DataTemplatePanel :dynamicComponent="OutputFileTwo" title="MNP (Column 2)"/>
      </v-container>
    </div>
    
    <v-container v-if="id !== 4">
      <div class="text-xs-center">
        <span @click="decreaseTurn"><BlueButton title="Back" /></span>
        <span @click="increaseTurn"><BlueButton title="Next" /></span>
        
      </div>
    </v-container>
    <v-container v-if="id === 4">
      <ProcessButtonGroup />
    </v-container>
  </div>
</template>

<script>
import NewProject from '../components/basic/buttons/NewProject.vue';
import StatusButton from '../components/basic/buttons/StatusButton.vue';
import DataTemplatePanel from "../components/DataTemplatePanel.vue";
import SkuMatchForm from "../components/dataTemplate/SkuMatchForm.vue";
import InputFileOne from "../components/dataTemplate/InputFileOne.vue";
import InputFileTwo from "../components/dataTemplate/InputFileTwo.vue";
import OutputFileOne from "../components/dataTemplate/OutputFileOne.vue";
import OutputFileTwo from "../components/dataTemplate/OutputFileTwo.vue";
import ProcessButtonGroup from '../components/dataTemplate/ProcessButtonGroup.vue'
import BlueButton from '../components/basic/buttons/BlueButton.vue';
export default {

  data () {
    return {
      showSnackbar: false,
      locationVertical: 'top',
      locationHorizontal: null,
      mode: '',
      id: 2,
      timeout: 2000,
      content: 'I\'m cool snackbar..',
      color: 'undefined',
      SkuMatchForm,
      InputFileOne,
      InputFileTwo,
      OutputFileOne,
      OutputFileTwo,
    }
  },
  components: {
    NewProject, StatusButton, DataTemplatePanel, ProcessButtonGroup, BlueButton
  },
  methods: {
    decreaseTurn() {
      if (this.$store.state.initialSettingValue !== 0) {
        this.$store.commit('decreaseSettingValue');
      }
      const id = this.$store.state.initialSettingValue; // Get the id from initialSettingValue
      this.$router.push({ name: 'DataTemplate', params: { id } });
      
    },
    increaseTurn() {
      if (this.$store.state.initialSettingValue !== 4) {
        this.$store.commit('increaseSettingValue');
      }
      const id = this.$store.state.initialSettingValue; // Get the id from initialSettingValue
      this.$router.push({ name: 'DataTemplate', params: { id } });
    },
  },
  watch: {
    '$route.params.id': function(newId, oldId) {
      if (newId !== oldId) {
        this.id = parseInt(newId); // Update id when route parameter changes
        this.$store.commit('setSettingValue', this.id);
        this.$router.push({ name: 'DataTemplate', params: { id: this.id } });
      }
    },
  },
  mounted() {
    // Check if the route parameter exists and set the initial id accordingly
    if (this.$route.params.id !== undefined) {
      const id = parseInt(this.$route.params.id); // Parse the id to an integer
      if (!isNaN(id) && id >= 0 && id <= 3) {
        this.id = id;
        this.$store.commit('setSettingValue', id); // Set initial store value based on the route parameter
      } else {
        // Handle invalid id scenario (e.g., redirect or show an error message)
      }
    }
  }
}
</script>

<style>

</style>../components/dataTemplate/InputFileOne.vue../components/dataTemplate/InputFileTwo.vue../components/dataTemplate/OutputFileOne.vue../components/dataTemplate/OutputFileTwo.vue../components/dataTemplate/KkuMatchForm.vue
