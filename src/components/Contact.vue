<template>
  <div class="container">
    <h1>id {{ contactId }}</h1>
  </div>
</template>

<script>
export default {
  computed: {
    contacts () {
      return this.$store.getters.contacts
    },
    contactId () {
      return +this.$route.params.id
    }
  }
}
</script>

<style lang="scss">
/* @import url(../assets/scss/main.scss); */
</style>
