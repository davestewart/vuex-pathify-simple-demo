import Vue from 'vue'
import Vuex from 'vuex'
import pathify from 'vuex-pathify'

// modules
import demo from './modules/demo'

// store
Vue.use(Vuex)
export default new Vuex.Store({
  plugins: [
    pathify.plugin
  ],

  modules: {
    demo
  }
})
