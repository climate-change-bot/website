<template>
  <div class="chat-message">
    <div class="flex items-end" v-if="isUser">
      <div class="flex flex-col space-y-2 text-base max-w-xs mx-2 order-2 items-start">
        <div><span class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">{{message}}</span>
        </div>
      </div>
      <img
        src="/user_girl.svg" alt="User ClimateChangeBot Profile" class="w-8 h-8 rounded-full order-1">
    </div>
    <div class="chat-message" v-else>
         <div class="flex items-end justify-end">
            <div class="flex flex-col space-y-2 text-base max-w-xs mx-2 order-1 items-end">
               <div><span class="px-4 py-2 rounded-lg inline-block rounded-br-none bg-default-color text-white ">{{message}}</span></div>
            </div>
            <img src="/chatbot.svg" alt="ClimateChangeBot Profile" class="w-8 h-8 rounded-full order-2">
         </div>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    message: String,
    isUser: Boolean
  },
  name: "ChatbotMessage"
}
</script>

<style scoped>

</style>
