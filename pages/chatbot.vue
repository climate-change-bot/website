<template>
  <div class="h-full">
    <default-header/>
    <chatbot-interface :messages="messages"/>
  </div>
</template>

<script lang="js">
import Vue from 'vue'
import DefaultHeader from '~/components/navigation/DefaultHeader'
import ChatbotInterface from '~/components/landing_page/ChatbotInterface'

export default Vue.extend({
  name: 'Chatbot',
  components: {DefaultHeader, ChatbotInterface},
  data() {
    return {messages: []}
  },
  async fetch() {
    const message = {
      isUser: true,
      message: 'Hello'
    }
    const response = await this.$axios.$post('api/messages', {
      sender: this.$store.state.uuid.uuid,
      message: message.message
    })
    for (const chatbotEntry of response) {
      this.messages.push({isUser: false, message: chatbotEntry.text})
    }
  },
  fetchOnServer: false
})
</script>
