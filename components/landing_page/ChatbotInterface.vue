<template>
  <div class="bg-white h-full items-center flex justify-center chatbot-landing-page">
    <Chatbot :messages="messages"/>
  </div>
</template>

<script>
import Chatbot from '~/components/chatbot/Chatbot'

export default {
  name: 'ChatbotInterface',
  components: {Chatbot},
  props: {
    messages: {
      type: Array,
      default: function () {
        return []
      }
    }
  }
}
</script>

<style scoped>
.chatbot-landing-page {
  padding-top: 56px;
}
</style>
