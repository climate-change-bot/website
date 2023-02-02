<template>
  <div class="chat-message">
    <div v-if="isUser" class="flex items-end">
      <div class="flex flex-col space-y-2 text-base mx-2 order-2 items-start chat-message-container">
        <div><span
          class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">{{ message }}</span>
        </div>
      </div>
    </div>
    <div v-else class="chat-message">
      <div class="flex items-end justify-end">
        <div class="flex flex-col space-y-2 text-base mx-2 order-1 items-end chat-message-container">
          <div><span
            class="px-4 py-2 rounded-lg inline-block rounded-br-none bg-default-color text-white"
            v-html="htmlMessage"></span>
          </div>
        </div>
        <img src="/chatbot.svg" alt="ClimateChangeBot Profile" class="w-8 h-8 order-2">
      </div>
    </div>
  </div>
</template>

<script>
import showdown from 'showdown'

const converter = new showdown.Converter({
  openLinksInNewWindow: true,
  emoji: true
})

export default {
  name: 'ChatbotMessage',
  props: {
    message: {
      type: String,
      default: ''
    },
    isUser: Boolean
  },
  computed: {
    htmlMessage: function () {
      return converter.makeHtml(this.message)
    }
  }
}
</script>

<style>
.chat-message a {
  text-decoration: underline;
  font-weight: bold;
}

.chat-message-container {
  max-width: 80%;
}
</style>
