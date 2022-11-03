import { v4 as uuidv4 } from 'uuid'

export const actions = {
  nuxtServerInit({commit}) {
    commit('uuid/set', uuidv4())
  }
}
