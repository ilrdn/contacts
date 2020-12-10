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
        <button @click="showModal = true" class="flex-item addBtn"><span>Add a contact</span></button>
    </div>
    <div v-if="showModal" class="modal" @click.self="showModal = false">
      <div class="popup">
        <button class="close" @click="showModal = false"></button>
        <h3>Add a contact</h3>
        <input type="text" placeholder="Name" v-model="contactName">
        <input type="text" placeholder="Phone" v-model="contactPhone">
        <input type="checkbox" name="" id="" v-model="contactFav">
        <button class="confirm" @click="newContact">confirm</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      contactName: '',
      contactPhone: '',
      contactFav: false,
      contactId: 4,
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
  },
  methods: {
    newContact () {
      if (this.contactName === '') {
        return
      }
      this.contacts.push({
        id: this.contactId,
        name: this.contactName,
        phone: this.contactPhone,
        fav: this.contactFav
      })

      // Reset
      this.contactId += 1
    }
  }
}
</script>

<style lang="scss">
@import "./assets/scss/main.scss";
@import "./assets/scss/fonts.scss";
</style>
