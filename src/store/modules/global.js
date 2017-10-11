import * as types from '../mutation-types'

const state = {
  english: true
}

const mutations = {
  [types.TOGGLE_ENGLISH_LANGUAGE] (state, { value }) {
    state.english = value
  }
}

const getters = {
  english: state => state.english
}

export default {
  state,
  mutations,
  getters
}
