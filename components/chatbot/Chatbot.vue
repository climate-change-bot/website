<template>
  <div
    class="bg-white chatbot-container flex-1 sm:p-6 justify-between flex flex-col h-full md:border-solid md:border-2 md:rounded-md pt-20">

    <div id="messages"
         ref="messages"
         class="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
      <ChatbotMessage :is-user="message.isUser"
                      :message="message.message"
                      :key="message.key"
                      v-for="message in messages">
      </ChatbotMessage>
      <ChatbotMessage v-show="isSending || noMessages"
                      :is-loading=true
                      :is-user=false>
      </ChatbotMessage>
    </div>
    <div class="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
      <div class="relative flex">
        <input type="text"
               autofocus
               maxlength="300"
               placeholder="Dein Text"
               v-model="userText"
               v-on:keyup.enter="sendQuestion"
               class="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-4 pr-32 bg-gray-200 rounded-md py-3">
        <div class="absolute right-0 items-center inset-y-0 flex">
          <button type="button"
                  @click="sendQuestion"
                  class="inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white focus:outline-none"
                  :class="[isValidUserText && !isSending ? 'bg-default-color hover:bg-default-color-dark': 'bg-slate-400']"
                  :disabled="!isValidUserText || isSending">
            <span class="font-bold hidden sm:block">Senden</span>
            <svg xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 20 20"
                 fill="currentColor"
                 class="h-6 w-6 ml-2 transform rotate-90">
              <path
                d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
            </svg>
          </button>
        </div>
      </div>
      <div v-show="showUserTextLength" class="mt-2 text-sm">{{ userText.length }}/300</div>
    </div>
  </div>
</template>

<script>
import ChatbotMessage from '~/components/chatbot/ChatbotMessage'

export default {
  name: 'Chatbot',
  components: {ChatbotMessage},
  data() {
    return {userText: '', isSending: false}
  },
  computed: {
    messages() {
      return this.$store.state.messages.messages
    },
    noMessages() {
      return this.$store.state.messages.messages.length === 0
    },
    isValidUserText() {
      return this.userText.trim().length > 0
    },
    showUserTextLength() {
      return this.userText.length > 150
    }
  },
  methods: {
    async sendQuestion() {
      if (this.userText.length > 1) {
        const userTextToSend = this.userText
        try {
          this.isSending = true
          this.userText = ''
          this.$store.commit('messages/add', {isUser: true, message: userTextToSend})
          await this.$nextTick()
          this.$refs.messages.scrollTop = this.$refs.messages.scrollHeight

          const response = await this.$axios.$post('api/messages', {
            sender: this.$store.state.uuid.uuid,
            message: userTextToSend
          })
          for (const chatbotEntry of response) {
            this.$store.commit('messages/add', {isUser: false, message: chatbotEntry.text})
          }
          if (response.length === 0) {
            this.$store.commit('messages/add', {isUser: false, message: 'Ups das habe ich nicht verstanden'})
          }
          await this.$nextTick()
          this.$refs.messages.scrollTop = this.$refs.messages.scrollHeight
        } catch (error) {
          this.userText = userTextToSend
          this.$store.commit('messages/add', {isUser: false, message: 'Ups, da ist ein Fehler aufgetreten'})
        } finally {
          this.isSending = false
        }
      }
    }
  }
}
</script>

<style scoped>
.chatbot-container {
  width: 100%;
  height: 100%;
  min-height: 400px;
}

@media screen and (min-width: 768px) {
  .chatbot-container {
    max-height: 800px;
    height: 95%;
    max-width: 700px;
  }
}
</style>
