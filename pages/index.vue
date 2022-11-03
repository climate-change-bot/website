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
