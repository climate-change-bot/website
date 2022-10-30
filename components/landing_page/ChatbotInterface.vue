<template>
  <section class="bg-white dark:bg-gray-900">
    <div
      class="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
      <div class="col-span-2 mb-8">
        <h2 class="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white">
          Chatbot</h2>
        <Chatbot :messages="messages"/>
      </div>
    </div>
  </section>
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

</style>
