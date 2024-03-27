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