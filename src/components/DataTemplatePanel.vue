<template>
    <v-card>
        <v-toolbar
          card
          color="white"
        >
          <v-toolbar-title bold>{{ title }}</v-toolbar-title>
        </v-toolbar>
          <div>
            <component :is="dynamicComponent"></component>
          </div>
          <v-spacer></v-spacer>
      </v-card>
</template>

<script>
export default {
  props: {
    dynamicComponent: {
      type: Object,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
};
</script>