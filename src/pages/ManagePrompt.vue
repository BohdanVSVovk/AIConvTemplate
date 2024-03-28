<template>
    <div>
        <div class="darken-2 text-xs-center mt-3">
        <span class="black--text headline">Akeneo Template 1 settings</span>
        </div>
        <div class="m-5">
            <v-form>
                <v-card>
                    <v-container>
                        <v-layout row wrap>
                                <div class="font-weight-bold">Prompt-1 Name </div>
                                <v-flex xs12>
                                    <v-text-field
                                    solo
                                    name="input-7-1"
                                    label="Solo textarea"
                                    value="Arunav Rahul"
                                    ></v-text-field>
                                </v-flex>
                                <div class="font-weight-bold">Prompt Discription</div>
                                <v-flex xs12>
                                    <v-textarea
                                    solo
                                    name="input-7-4"
                                    label="Solo textarea"
                                    value="Arunav Rahul"
                                    ></v-textarea>
                                </v-flex>
                                <v-flex xs12 >
                                    <v-layout row xs12 wrap class="d-flex justify-end ">
                                        <v-flex xs12 sm1 text-xs-center>
                                            <div>
                                                <v-btn color="primary">Save</v-btn>
                                            </div>
                                        </v-flex>
                                        <v-flex xs12 sm1 text-xs-center>
                                            <div>
                                                <v-btn >Edit</v-btn>
                                            </div>
                                        </v-flex>
                                        <v-flex xs12 sm1 text-xs-center>
                                            <div>
                                                <v-btn >Delete</v-btn>
                                            </div>
                                        </v-flex>
                                        <v-flex xs12 sm2 text-xs-center>
                                            <div>
                                                <v-btn >Add More Prompt</v-btn>
                                            </div>
                                        </v-flex>
                                    </v-layout>
                                </v-flex>
                                    
                                
                        </v-layout>
                    </v-container>
                </v-card>
            </v-form>
        </div>
        <div class="m-5">
            <v-form>
                <v-card>
                    <v-container>
                        <v-layout row wrap>
                                <div class="font-weight-bold">Prompt-2 Name </div>
                                <v-flex xs12>
                                    <v-text-field
                                    solo
                                    name="input-7-1"
                                    label="Solo textarea"
                                    value="Arunav Rahul"
                                    ></v-text-field>
                                    
                                </v-flex>
                                <div class="font-weight-bold">Prompt Discription</div>
                                <v-flex xs12>
                                    <v-textarea
                                    solo
                                    name="input-7-4"
                                    label="Solo textarea"
                                    value="Arunav Rahul"
                                    ></v-textarea>
                                </v-flex>
                                <v-flex xs12 >
                                    <v-layout row xs12 wrap class="d-flex justify-end ">
                                        <v-flex xs12 sm1 text-xs-center>
                                            <div>
                                                <v-btn color="primary">Save</v-btn>
                                            </div>
                                        </v-flex>
                                        <v-flex xs12 sm1 text-xs-center>
                                            <div>
                                                <v-btn >Edit</v-btn>
                                            </div>
                                        </v-flex>
                                        <v-flex xs12 sm1 text-xs-center>
                                            <div>
                                                <v-btn >Delete</v-btn>
                                            </div>
                                        </v-flex>
                                        <v-flex xs12 sm2 text-xs-center>
                                            <div>
                                                <v-btn >Add More Prompt</v-btn>
                                            </div>
                                        </v-flex>
                                    </v-layout>
                                </v-flex>
                                    
                                
                        </v-layout>
                    </v-container>
                </v-card>
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