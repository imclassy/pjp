import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import global from './modules/global'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  modules: {
    global
  }
})
