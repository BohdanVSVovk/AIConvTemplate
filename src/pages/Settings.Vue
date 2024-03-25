<template>
    <div>
        <div class="darken-2 text-xs-center mt-5">
        <span class="black--text title">Setting</span>
        </div>
        <div class="darken-2 text-xs-center mt-3">
        <span class="black--text headline">Akeneo Template 1 settings</span>
        </div>
        <div class="m-5">
            <v-form>
                <v-container>
                    <v-layout row wrap>

                        <v-flex xs12 sm6>
                            <div class="font-weight-bold">Columns</div>
                            <v-text-field
                                v-model="first"
                                label="First Name"
                                solo
                            ></v-text-field>
                        </v-flex>


                        <v-flex xs12 sm6>
                            <div class="font-weight-bold">Brands</div>
                            <v-text-field
                                v-model="first"
                                label="First Name"
                                solo
                            ></v-text-field>
                        </v-flex>
                    </v-layout>
                </v-container>
                <v-container>
                    <v-layout row wrap>

                        <v-flex xs12 sm6>
                            <div class="font-weight-bold">Name</div>
                            <v-text-field
                                v-model="first"
                                label="First Name"
                                solo
                            ></v-text-field>
                        </v-flex>


                        <v-flex xs12 sm6>
                            <div class="font-weight-bold">Specifications</div>
                            <v-text-field
                                v-model="first"
                                label="First Name"
                                solo
                            ></v-text-field>
                        </v-flex>
                    </v-layout>
                </v-container>
                <v-container>
                    <v-layout row wrap>
                            <div class="font-weight-bold">Add prompts- 1</div>
                            <v-flex xs8>
                                <v-textarea
                                solo
                                name="input-7-4"
                                label="Solo textarea"
                                value="Prompt"
                                ></v-textarea>
                            </v-flex>
                            <v-flex xs4>
                                <v-flex xs12 sm4 text-xs-center>
                                        <div>
                                            <v-btn color="primary">Save prompts</v-btn>
                                        </div>
                                        <div>
                                            <v-btn min-width='150px'>Add More</v-btn>
                                        </div>
                                    </v-flex>
                            </v-flex>
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
    })
  }
</script>