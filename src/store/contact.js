export default {
  state: {
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
