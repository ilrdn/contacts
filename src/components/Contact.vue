<template>
  <div class="container">
    <router-link to="/">Назад</router-link>
    <h1>{{ contact.name }}</h1>
    <p>id {{ contact.id }}</p>
    <p>phone {{ contact.phone }}</p>
  </div>
</template>

<script>
function find (id, items) {
  console.log(items)
  return items.find(el => el.id === id)
}
export default {
  computed: {
    contacts () {
      return this.$store.getters.contacts
    },
    /* contactId () {
      return this.$route.params.id
    }, */
    contact () {
      return find(this.$route.params.id, this.$store.getters.contacts)
    }
  }
}
</script>

<style lang="scss">
</style>
