export const state = () => ({
  messages: [],
  counter: 0
})

export const mutations = {
  add(state, message) {
    message.key = state.counter
    state.messages.push(message)
    state.counter += 1
  }
}

export const actions = {}
