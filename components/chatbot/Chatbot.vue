<template>
  <div
    class="bg-white chatbot-container flex-1  sm:p-6 justify-between flex flex-col h-full border-solid border-2 rounded-md pt-20">

    <div id="messages"
         ref="messages"
         class="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
      <ChatbotMessage :is-user="message.isUser"
                      :message="message.message"
                      :key="message.message"
                      v-for="message in messages"></ChatbotMessage>
    </div>
    <div class="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
      <div class="relative flex">
        <input type="text"
               placeholder="Dein Text"
               v-model="userText"
               v-on:keyup.enter="sendQuestion"
               class="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-4 pr-32 bg-gray-200 rounded-md py-3">
        <div class="absolute right-0 items-center inset-y-0 hidden sm:flex">
          <button type="button"
                  @click="sendQuestion"
                  class="inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-default-color hover:bg-default-color-dark focus:outline-none">
            <span class="font-bold">Senden</span>
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
    </div>
  </div>
</template>

<script>
import ChatbotMessage from '~/components/chatbot/ChatbotMessage'

export default {
  name: 'Chatbot',
  components: {ChatbotMessage},
  props: {
    messages: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data() {
    return {userText: ''}
  },
  methods: {
    async sendQuestion() {
      if (this.userText.length > 1) {
        // eslint-disable-next-line vue/no-mutating-props
        this.messages.push({isUser: true, message: this.userText})
        const response = await this.$axios.$post('api/messages', {
          sender: 'test_user',
          message: this.userText
        })
        for (const chatbotEntry of response) {
          // eslint-disable-next-line vue/no-mutating-props
          this.messages.push({isUser: false, message: chatbotEntry.text})
        }
        await this.$nextTick()
        this.$refs.messages.scrollTop = this.$refs.messages.scrollHeight
        this.userText = ''
      }
    }
  }
}
</script>

<style scoped>
.chatbot-container {
  max-height: 800px;
  min-height: 400px;
  height: 95%;
  width: 100%;
  max-width: 500px;
}
</style>
