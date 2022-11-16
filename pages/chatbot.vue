<template>
  <div class="h-full">
    <default-header/>
    <chatbot-interface/>
  </div>
</template>

<script lang="js">
import Vue from 'vue'
import DefaultHeader from '~/components/navigation/DefaultHeader'
import ChatbotInterface from '~/components/landing_page/ChatbotInterface'

export default Vue.extend({
  name: 'Chatbot',
  components: {DefaultHeader, ChatbotInterface},
  async fetch() {
    if (this.$store.state.messages.messages.length === 0) {
      const message = {
        isUser: true,
        message: '/greet'
      }
      const response = await this.$axios.$post('api/messages', {
        sender: this.$store.state.uuid.uuid,
        message: message.message
      })
      for (const chatbotEntry of response) {
        this.$store.commit('messages/add', {isUser: false, message: chatbotEntry.text})
      }
    }
  },
  fetchOnServer: false
})
</script>
