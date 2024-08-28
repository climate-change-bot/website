interface Message {
  isUser?: Boolean
  isOpenai?: Boolean,
  message?: string,
  buttons?: any,
  key?: number
  selectedButtonValue?: number | null
  hideMessage?: Boolean,
  isQuizAnswer?: Boolean,
  isTrueValue?: Boolean
}

export const useMessageStore = defineStore('messageStore', () => {
  const messages = ref<Message[]>([])
  const counter = ref(0)
  const lastChatbotMessageHasButtons = ref(false)
  const hideNextAnswers = ref(false)

  const add = function (message: Message) {
    message.key = counter.value
    if (Array.isArray(message.buttons)) {
      message.selectedButtonValue = null
    }

    message.hideMessage = hideNextAnswers.value
    if (message.isQuizAnswer) {
      hideNextAnswers.value = true
    }

    messages.value.push(message)
    counter.value += 1
    lastChatbotMessageHasButtons.value = Array.isArray(message.buttons)
  }

  const setSelectedButtonValue = function (payload: any) {
    const message = messages.value.find(x => x.key === payload.messageId)
    if (message) {
      message.selectedButtonValue = payload.value
      message.isTrueValue = payload.value.includes('"true_')
    }
  }

  const showAllMessages = function () {
    for (const message of messages.value) {
      message.hideMessage = false
    }
    hideNextAnswers.value = false
  }

  return {
    messages,
    counter,
    lastChatbotMessageHasButtons,
    hideNextAnswers,
    add,
    setSelectedButtonValue,
    showAllMessages
  }
})
