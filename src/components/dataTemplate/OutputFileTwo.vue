<template>
  <v-flex xs12 class="ml-5">

    <v-layout column sm6 md3>
      <v-layout justify-space-around class="mb-4">
        <v-layout row>
          <div>
            <div>
              <span class="blue--text text--darken-4 font-weight-bold">Input File Column</span>
              <div><span>Source File 2</span> -> <span>Column B (Brand)</span></div>
              <div><span>Source File 3</span> -> <span>Column E (Description)</span></div>
            </div>
          </div>
        </v-layout>

        <v-layout row>
          
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