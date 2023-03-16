export const state = () => ({
  messages: [],
  counter: 0,
  lastChatbotMessageHasButtons: false
})

export const mutations = {
  add(state, message) {
    message.key = state.counter
    if (Array.isArray(message.buttons)) {
      message.selectedButtonValue = null
    }
    state.messages.push(message)
    state.counter += 1
    state.lastChatbotMessageHasButtons = Array.isArray(message.buttons)
  },
  setSelectedButtonValue(state, payload) {
    const message = state.messages.find(x => x.key === payload.messageId)
    message.selectedButtonValue = payload.value
    message.isTrueValue = payload.value.includes("\"true_")
  }
}

export const actions = {}
