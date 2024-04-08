<template>
    <div class="text-xs-center">
        <v-btn
        round 
      color="info"
    >
      Process Sample File
      <template v-slot:loader>
        <span class="custom-loader">
          <v-icon light>cached</v-icon>
        </span>
      </template>
    </v-btn>
    <v-btn
    round 
      color="info"
      @click="processCompleteFile"
    >
      Process Complete File
      <template v-slot:loader>
        <span class="custom-loader">
          <v-icon light>cached</v-icon>
        </span>
      </template>
    </v-btn>
    </div>
</template>
<script>
import axios from "axios";
export default {
  methods: {
    processCompleteFile() {
      let formData = new FormData();
      console.log(this.$store.state.inputSettings)
      console.log(this.$store.state.columnPromptSetting)
      formData.append('inputSettings', JSON.stringify(this.$store.state.inputSettings));
      formData.append('PromptSettings', JSON.stringify(this.$store.state.columnPromptSetting))
      axios.post(process.env.BACKEND_API + '/file-generate', formData)
        .then(response => {
          return response.data;
        })
        .then((data) => {
            var downloadLink      = document.createElement('a');

            // Set the attributes and start download
            downloadLink.href      = data.file_public_url;
            downloadLink.download  = data.file_public_url.split('/').pop(); //Optional: Gives a default name to the downloaded file
            downloadLink.style     = 'display: none'; //Hide hyperlink

            // Append hyperlink to the body
            document.body.appendChild(downloadLink);

            // Programmatically click on hyperlink to start download
            downloadLink.click();
            
            // Cleanup: remove hyperlink from the body
            document.body.removeChild(downloadLink);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
}
</script>