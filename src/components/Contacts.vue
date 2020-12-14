<template>
  <div class="container">
    <h1>Contacts</h1>
    <div class="flex-container contacts">
        <router-link :to="{ path: '/' + contact.id}" class="flex-item contact" v-for="contact in contacts" :key="contact.id">
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
          <button class="contact__del" @click="deleteContact(contact)"></button>
        </router-link>
        <button @click="showModal = true" class="flex-item addBtn"><span>Add a contact</span></button>
    </div>
    <div v-if="showModal" class="modal" @click.self="showModal = false">
      <div class="popup">
        <button class="close" @click="showModal = false"></button>
        <h3>Add a contact</h3>
        <input type="text" placeholder="Name" v-model="contactName">
        <input type="text" placeholder="Phone" v-model="contactPhone" id="phone">
        <label class="container__cb" >favourite
          <input type="checkbox" v-model="contactFav">
          <span class="checkmark"></span>
        </label>
        <button class="addBtn" @click="newContact"><span>Confirm</span></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    contacts () {
      return this.$store.getters.contacts
    }
  },
  data () {
    return {
      contactName: '',
      contactPhone: '',
      contactFav: false,
      contactId: 4,
      showModal: false
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
      const contact = {
        id: this.contactId,
        name: this.contactName,
        phone: this.contactPhone,
        fav: this.contactFav
      }
      this.$store.dispatch('newContact', contact)
      // Reset
      this.contactId += 1
      this.contactName = ''
      this.contactPhone = ''
    },
    deleteContact (item) {
      this.$store.dispatch('deleteContact', item)
    }
  }
}
</script>
