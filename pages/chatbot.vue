<template>
  <div class="h-full">
    <default-header/>
    <chatbot-interface/>
  </div>
</template>

<script lang="ts" setup>
import {useFetch} from 'nuxt/app'
import {useMessageStore} from '~/store/message'
import {useUUIDStore} from '~/store/uuid'

const messageStore = useMessageStore()
const uuidStore = useUUIDStore()

if (messageStore.messages.length === 0) {
  const message = {
    isUser: true,
    message: '/greet'
  }

  const {data} = await useFetch('api/messages', {
    method: 'POST',
    body: {
      sender: uuidStore.uuid,
      message: message.message
    }
  })

  for (const chatbotEntry of data.value) {
    messageStore.add({
      isUser: false,
      isOpenai: false,
      message: chatbotEntry.text,
      buttons: chatbotEntry.buttons,
      isQuizAnswer: false
    })
  }
}
</script>
