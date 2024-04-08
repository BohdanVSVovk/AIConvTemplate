<template>
    <v-card>
        <v-toolbar
          card
          color="white"
        >
          <v-toolbar-title bold>{{ title }}</v-toolbar-title>
        </v-toolbar>
          <div>
            <component :is="dynamicComponent" v-bind="componentProps"></component>
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
    },
    componentProps: {   // Add this
      type: Object,
      default: () => ({}) // Always use a function when default is an object to avoid shared references.
    }
  }
};
</script>