import {createStore} from 'vuex'

const store = createStore({
  state() {
    return {
      users: []
    }
  },
  mutations: {
    addUser (state, newUser) {
      state.users.push(newUser)
    },
    clear (state,) {
      state.users = []
    }
  }
})

export default store
