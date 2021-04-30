import Vue from 'vue'
import Vuex from 'vuex'
// import modules from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    error: false,
    errorMessage: '',
    message: false,
    messageText: '',
    users: null,
    videos: {
      eOa5hl4lMvc: 'Easter',
      y82MasaD3OY: 'Table Tennis',
      FhKJgqxNDD8: 'King Crimson'
    }
  },

  getters: {
    // pageHeight: (state) => state.mainContentHeight + state.footerHeight - 36
  },

  mutations: {
    CHANGE_GREETINGS: (state, value) => {
      state.greetings = value
    },

    CHANGE_USER: (state, payload) => {
      const { userId, propName, value } = payload
      if (!state.users[userId]) return console.warn('user is not define')
      state.users[userId][propName] = value
    },

    SET_PROPERTY: (state, payload) => {
      Vue.set(payload.object, payload.propertyName, payload.value)
    },

    DELETE_PROPERTY: (state, payload) => {
      Vue.delete(payload.object, payload.propertyName)
    },

    SET_ERROR: (state, payload) => {
      state.error = payload.error
      state.errorMessage = payload.errorMessage
    },

    SET_MESSAGE: (state, payload) => {
      state.message = payload.message
      state.messageText = payload.messageText
    }
  },

  actions: {
    async GET_DATA (context) {
      const users = await (await fetch('https://garevna-rest-api.glitch.me/users/all')).json()
      context.commit('SET_PROPERTY', {
        object: context.state,
        propertyName: 'users',
        value: users
      })
    }
  }
})
