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
    <v-container>
      <DataTemplatePanel :dynamicComponent="SkuMatchForm" title="Match SKU from Input files to Output file"/>
    </v-container>
    <div class="darken-2 text-xs-center">
      <span class="black--text display-1">Input file settings</span>
    </div>
    <v-container>
      <DataTemplatePanel :dynamicComponent="InputFileOne" title="Input file 1"/>
    </v-container>
    <v-container>
      <DataTemplatePanel :dynamicComponent="InputFileTwo" title="Input file 2"/>
    </v-container>
    <div class="darken-2 text-xs-center">
      <span class="black--text display-1">Output file settings</span>
    </div>
    <v-container>
      <DataTemplatePanel :dynamicComponent="OutputFileOne" title="Brand (Column 1)"/>
    </v-container>
    <v-container>
      <DataTemplatePanel :dynamicComponent="OutputFileTwo" title="MNP (Column 2)"/>
    </v-container>
    <v-container>
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
import OutputFileOne from "../components/dataTemplate/outputFileOne.vue";
import OutputFileTwo from "../components/dataTemplate/OutputFileTwo.vue";
import ProcessButtonGroup from '../components/dataTemplate/ProcessButtonGroup.vue'
export default {
  data () {
    return {
      showSnackbar: false,
      locationVertical: 'top',
      locationHorizontal: null,
      mode: '',
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
    NewProject, StatusButton, DataTemplatePanel, ProcessButtonGroup
  },
}
</script>

<style>

</style>../components/dataTemplate/InputFileOne.vue../components/dataTemplate/InputFileTwo.vue../components/dataTemplate/OutputFileOne.vue../components/dataTemplate/OutputFileTwo.vue../components/dataTemplate/KkuMatchForm.vue
