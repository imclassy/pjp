import * as types from './mutation-types'

export const toggleEnglish = ({ commit }, value) => {
  commit(types.TOGGLE_ENGLISH_LANGUAGE, {
    value
  })
}
