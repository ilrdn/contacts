<template>
  <div class="container">
    <h1>Contacts</h1>
    <div class="flex-container contacts">
        <a class="flex-item contact" v-for="contact in contacts" :key="contact.id">
          <div class="contact__img">
            <span>
              {{ contact.name | capitalize }}
            </span>
            <div class="fav" v-if="contact.fav"></div>
          </div>
          <div class="contact__info">
            <h2>{{ contact.name }}</h2>
            <span v-if="contact.phone">{{ contact.phone }}</span>
          </div>
          <button class="contact__del"></button>
        </a>
        <button @click="showModal = true" class="flex-item addBtn"><span>Add contact</span></button>
    </div>
    <modal v-if="showModal">
      <h3 slot="header">custom header</h3>
      <button class="modal-default-button" @click="showModal = false">
        OK
      </button>
    </modal>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showModal: false,
      contacts: [
        {
          'id': 1,
          'name': 'admin',
          'company': 'contacts',
          'phone': '+7 (999) 999 99 99',
          'fav': false
        },
        {
          'id': 2,
          'name': 'Ilya Rodin',
          'phone': '+7 (999) 999 99 99',
          'fav': true
        },
        {
          'id': 3,
          'name': 'name',
          'phone': '+7 (999) 999 99 99',
          'fav': false
        }
      ]
    }
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.slice(0, 1).toUpperCase()
    }
  }
}
</script>

<style lang="scss">
@import "./assets/scss/main.scss";
</style>
