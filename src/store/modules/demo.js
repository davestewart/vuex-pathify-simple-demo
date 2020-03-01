import { make } from 'vuex-pathify'

const state = {
  greeting: 'Hello',
  name: 'World'
}

const mutations = make.mutations(state)

const actions = {
  greet ({ getters }) {
    alert(getters.message)
  }
}

const getters = {
  message (state) {
    return `${state.greeting} ${state.name} !`
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
