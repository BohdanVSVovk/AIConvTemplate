<template>
</template>

<script>
  export default {
    data () {
      return {
        step: 0,
        valid: true,
        name: '',
        nameRules: [
          v => !!v || 'Name is required',
          v => (v && v.length <= 10) || 'Name must be less than 10 characters'
        ],
        email: '',
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+/.test(v) || 'E-mail must be valid'
        ],
        select: null,
        items: [
          'Item 1',
          'Item 2',
          'Item 3',
          'Item 4'
        ],
        checkbox: false,
        date: new Date().toISOString().substr(0, 10)
      }
    },

    methods: {
      submit () {
        if (this.$refs.form.validate()) {

        }

        this.step = 2;
      },
      clear () {
        this.$refs.form.reset()
      }
    }
  }
</script>

<style>
</style>
