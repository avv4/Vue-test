import Vue from 'vue'
import Vuex from 'vuex'

import films from "./films.js"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    films
  }
})
