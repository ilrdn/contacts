import { v4 as uuidv4 } from 'uuid'
export default {
  state: {
    contacts: [
      {
        'id': uuidv4(),
        'name': 'admin',
        'company': 'contacts',
        'phone': '+7 (999) 999 99 99',
        'fav': false
      },
      {
        'id': uuidv4(),
        'name': 'Ilya Rodin',
        'phone': '+7 (111) 111 11 11',
        'fav': true
      },
      {
        'id': uuidv4(),
        'name': 'name',
        'phone': '+7 (999) 999 99 99',
        'fav': false
      }
    ]
  },
  mutations: {
    newContact (state, payload) {
      state.contacts.push(payload)
    },
    deleteContact (state, payload) {
      state.contacts = state.contacts.filter(item => item !== payload)
    }
  },
  actions: {
    newContact ({commit}, payload) {
      commit('newContact', payload)
    },
    deleteContact ({commit}, payload) {
      commit('deleteContact', payload)
    }
  },
  getters: {
    contacts (state) {
      return state.contacts
    }
  }
}
