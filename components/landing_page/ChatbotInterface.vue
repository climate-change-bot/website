<template>
  <div class="bg-gray-50 h-full items-center flex justify-center chatbot-landing-page">
    <Chatbot/>
  </div>
</template>

<script>
import Chatbot from '~/components/chatbot/Chatbot'

export default {
  name: 'ChatbotInterface',
  components: {Chatbot}
}
</script>

<style scoped>
.chatbot-landing-page {
  padding-top: 56px;
}
</style>
