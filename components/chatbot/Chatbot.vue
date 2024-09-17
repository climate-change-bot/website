<template>
  <div
    class="bg-white chatbot-container flex-1 sm:p-6 justify-between flex flex-col h-full md:border-solid md:border-2 md:rounded-md pt-3 md:pt-6">

    <div id="messages"
         ref="messagesRef"
         class="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
      <ChatbotMessage :is-user="message.isUser"
                      :is-open-ai="message.isOpenai"
                      :message="message"
                      :message-id="message.key"
                      :buttons="message.buttons"
                      :is-last-message="messages.length - 1 === index"
                      :selected-button-value="message.selectedButtonValue"
                      v-show="!message.hideMessage"
                      @send-button-value="sendQuestion(message.selectedButtonValue?.toString(), false)"
                      @scroll-to-end="scrollToEnd"
                      :key="message.key"
                      v-for="(message, index) in messages">
      </ChatbotMessage>
      <ChatbotMessage v-show="isSending || noMessages"
                      :is-loading="true"
                      :is-open-ai="false"
                      :is-user="false">
      </ChatbotMessage>
    </div>
    <div class="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0"
         v-show="!lastChatbotMessageHasButtons && !hiddenMessages">
      <div class="relative flex">
        <input type="text"
               autofocus
               ref="textRef"
               maxlength="300"
               :placeholder="disableTextInput ? '' : 'Dein Text'"
               v-model="userText"
               :disabled="disableTextInput"
               @keyup.enter="sendQuestion(userText,true)"
               @input="validateInput"
               class="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-4 pr-32 bg-gray-200 rounded-md py-3">
        <div class="absolute right-0 items-center inset-y-0 flex">
          <button type="button"
                  @click="sendQuestion(userText,true)"
                  class="inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white focus:outline-none"
                  :class="[disableButton ? 'bg-slate-400': 'bg-default-color hover:bg-default-color-dark']"
                  :disabled="disableButton">
            <span class="font-bold hidden sm:block">Senden</span>
            <svg xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 20 20"
                 fill="currentColor"
                 class="h-6 w-6 ml-2 transform rotate-90">
              <path
                d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
            </svg>
          </button>
        </div>
      </div>
      <div v-show="showUserTextLength" class="mt-2 text-sm">{{ userText.length }}/300</div>
      <div v-show="invalidCharacter" class="mt-2 text-sm text-red-400"> Ungültiges Zeichen. Es können nur Buchstaben
        oder Zahlen verwendet werden.
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref, computed, onMounted, nextTick} from 'vue'
import {useMessageStore} from '~/store/message'
import {useUUIDStore} from '~/store/uuid'

interface RasaChatbotMessage {
  custom: {
    openai: string,
    text: string,
    isQuizAnswer: boolean
  },
  text: string,
  buttons: any
}

const messagesStore = useMessageStore()
const uuidStore = useUUIDStore()

const messagesRef = ref<HTMLElement | null>(null)
const textRef = ref<HTMLElement | null>(null)
const userText = ref('')
const isSending = ref(false)
const invalidCharacter = ref(false)

const messages = computed(() => messagesStore.messages)
const noMessages = computed(() => messagesStore.messages.length === 0)
const hiddenMessages = computed(() => messagesStore.hideNextAnswers)
const lastChatbotMessageHasButtons = computed(() => messagesStore.lastChatbotMessageHasButtons)
const isValidUserText = computed(() => userText.value.trim().length > 0)
const showUserTextLength = computed(() => userText.value.length > 150)
const disableTextInput = computed(() => isSending.value || lastChatbotMessageHasButtons.value)
const disableButton = computed(() => !isValidUserText.value || isSending.value || lastChatbotMessageHasButtons.value)

const sendQuestion = async (text: string | undefined, showUserMessage: boolean) => {
  if (text && text.trim().length > 1) {
    try {
      isSending.value = true
      userText.value = ''
      if (showUserMessage) {
        messagesStore.add({isUser: true, message: text})
      }
      await nextTick()
      if (messagesRef.value) {
        messagesRef.value.scrollTop = messagesRef.value.scrollHeight
      }

      const data = await $fetch<RasaChatbotMessage[]>('api/messages', {
        method: 'POST',
        body: {
          sender: uuidStore.uuid,
          message: text
        }
      })

      if (data) {
        for (const chatbotEntry of data) {
          if (chatbotEntry.custom && chatbotEntry.custom.openai) {
            messagesStore.add({
              isUser: false,
              isOpenai: true,
              isQuizAnswer: false,
              message: chatbotEntry.custom.text
            })
          } else if (chatbotEntry.custom && chatbotEntry.custom.isQuizAnswer) {
            messagesStore.add({
              isUser: false,
              isOpenai: false,
              isQuizAnswer: true,
              message: chatbotEntry.custom.text
            })
          } else {
            messagesStore.add({
              isUser: false,
              isOpenai: false,
              isQuizAnswer: false,
              message: chatbotEntry.text,
              buttons: chatbotEntry.buttons
            })
          }
        }

        if (data.length === 0) {
          messagesStore.add({isUser: false, message: 'Ups das habe ich nicht verstanden'})
        }

        await nextTick()
        if (messagesRef.value) {
          messagesRef.value.scrollTop = messagesRef.value.scrollHeight
        }
      }
    } catch (error) {
      userText.value = text
      messagesStore.add({isUser: false, message: 'Ups, da ist ein Fehler aufgetreten'})
    } finally {
      isSending.value = false
      await nextTick()
      if (textRef.value) {
        textRef.value.focus()
      }
    }
  }
}

const validateInput = () => {
  const regex = /[^a-zA-Z0-9ÖöÜüÄäèéà\s,.:?!()-;]+/g
  const hasInvalidCharacters = regex.test(userText.value)

  if (hasInvalidCharacters) {
    invalidCharacter.value = true
    userText.value = userText.value.replace(regex, '')
  } else {
    invalidCharacter.value = false
  }
}

const scrollToEnd = async () => {
  await nextTick()
  if (messagesRef.value) {
    messagesRef.value.scrollTop = messagesRef.value.scrollHeight
  }
}

onMounted(() => {
  if (messagesRef.value) {
    messagesRef.value.scrollTop = messagesRef.value.scrollHeight
  }
  if (textRef.value) {
    textRef.value.focus()
  }
})
</script>

<style scoped>
.chatbot-container {
  width: 100%;
  height: 100%;
  min-height: 400px;
}

@media screen and (min-width: 768px) {
  .chatbot-container {
    max-height: 800px;
    height: 95%;
    max-width: 700px;
  }
}
</style>
