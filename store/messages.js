export const state = () => ({
  messages: [],
  counter: 0,
  lastChatbotMessageHasButtons: false,
  hideNextAnswers: false
})

export const mutations = {
  add(state, message) {
    message.key = state.counter
    if (Array.isArray(message.buttons)) {
      message.selectedButtonValue = null
    }

    message.hideMessage = state.hideNextAnswers
    if (message.isQuizAnswer) {
      state.hideNextAnswers = true
    }

    state.messages.push(message)
    state.counter += 1
    state.lastChatbotMessageHasButtons = Array.isArray(message.buttons)
  },
  setSelectedButtonValue(state, payload) {
    const message = state.messages.find(x => x.key === payload.messageId)
    message.selectedButtonValue = payload.value
    message.isTrueValue = payload.value.includes('"true_')
  },
  showAllMessages(state) {
    for (const message of state.messages) {
      message.hideMessage = false
    }
    state.hideNextAnswers = false
  }
}

export const actions = {}
