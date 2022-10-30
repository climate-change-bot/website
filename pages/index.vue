<template>
  <LandingPage :messages="messages"/>
</template>

<script lang="js">
import Vue from 'vue'
import LandingPage from '~/components/landing_page/LandingPage.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: {LandingPage},
  data() {
    return {messages: []}
  },
  async fetch() {
    const message = {
      isUser: true,
      message: 'Hello'
    }
    this.messages.push(message)
    const response = await this.$axios.$post('api/messages', {
      sender: 'test_user',
      message: message.message
    })
    for (const chatbotEntry of response) {
      this.messages.push({isUser: false, message: chatbotEntry.text})
    }
  },
  fetchOnServer: false
})
</script>
