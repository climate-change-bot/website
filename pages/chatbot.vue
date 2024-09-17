<template>
  <div class="h-full">
    <default-header/>
    <chatbot-interface/>
  </div>
</template>

<script lang="ts" setup>
import {useMessageStore} from '~/store/message'
import {useUUIDStore} from '~/store/uuid'

const messageStore = useMessageStore()
const uuidStore = useUUIDStore()

if (messageStore.messages.length === 0) {
  const message = {
    isUser: true,
    message: '/greet'
  }

  try {
    const response = await fetch('/api/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        sender: uuidStore.uuid,
        message: message.message
      })
    })

    const data = await response.json()
    for (const chatbotEntry of data) {
      messageStore.add({
        isUser: false,
        isOpenai: false,
        message: chatbotEntry.text,
        buttons: chatbotEntry.buttons,
        isQuizAnswer: false
      })
    }
  } catch (e) {
    console.error(e)
  }
}
</script>
