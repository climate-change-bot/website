<template>
  <div class="chat-message">
    <div v-if="isUser" class="flex items-end">
      <div class="flex flex-col space-y-2 text-base mx-2 order-2 items-start chat-message-container">
        <div>
          <div
            class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">{{ message }}
          </div>
        </div>
      </div>
    </div>
    <div v-else class="chat-message">
      <div class="flex items-end justify-end">
        <div class="flex flex-col space-y-2 text-base mx-2 order-1 items-end chat-message-container">
          <div>
            <div v-if="!isLoading && !isOpenAi"
                 class="px-4 py-2 rounded-lg inline-block rounded-br-none bg-default-color text-white">
              <div v-html="htmlMessage"></div>
              <div v-if="hasButtons">
                <fieldset>
                  <div v-for="button in buttons" :key="button.payload">
                    <input type="radio"
                           :id="button.payload"
                           :value="button.payload"
                           name="chatbot_buttons"
                           :disabled="!isLastMessage"
                           @change="changeButtonValue($event, messageId)"/>
                    <label :for="button.payload">{{ button.title }}</label>
                  </div>
                </fieldset>
                <button v-if="isLastMessage"
                        :disabled="!selectedButtonValue"
                        type="button"
                        class="inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white focus:outline-none"
                        :class="[!selectedButtonValue ? 'bg-slate-400': 'bg-default-color hover:bg-default-color-dark']"
                        @click="$emit('send-button-value')">
                  Senden
                </button>
              </div>
            </div>
            <div v-else-if="!isLoading && isOpenAi"
                 class="px-4 py-2 rounded-lg inline-block rounded-br-none bg-default-color text-white">
              <div v-html="htmlMessage"></div>
              <dropdown>
                <div class="flex mt-2 items-center chatbot-message-info">
                  <div class="chatbot-message-info-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff">
                      <path
                        d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"/>
                    </svg>
                  </div>
                  <div class="ml-1.5 text-xs"><span class="inline-block text-center">ChatGPT Antwort</span></div>
                </div>
                <template #popper>
                  Diese Antwort wurde von einer KI (ChatGPT) generiert. Es kann deshalb vorkommen, dass die Angaben
                  im Text nicht immer korrekt sind.
                </template>
              </dropdown>
            </div>
            <div v-else
                 class="px-4 py-2 rounded-lg inline-block rounded-br-none bg-default-color text-white">
              <div class="chat-message-progress">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
        <img src="/chatbot.svg" alt="ClimateChangeBot Profile" class="w-8 h-8 order-2">
      </div>
    </div>
  </div>
</template>

<script>
import showdown from 'showdown'
import {Dropdown} from 'floating-vue'

const converter = new showdown.Converter({
  openLinksInNewWindow: true,
  emoji: true
})

export default {
  name: 'ChatbotMessage',
  components: {Dropdown},
  props: {
    messageId: {
      type: Number,
      default: 0
    },
    message: {
      type: String,
      default: ''
    },
    buttons: {
      type: Array,
      default: null
    },
    isLoading: {
      type: Boolean,
      default: false
    },
    selectedButtonValue: {
      type: String,
      default: ''
    },
    isLastMessage: {
      type: Boolean,
      default: false
    },
    isUser: Boolean,
    isOpenAi: Boolean
  },
  computed: {
    htmlMessage: function () {
      return converter.makeHtml(this.message)
    },
    hasButtons: function () {
      return Array.isArray(this.buttons)
    }
  },
  methods: {
    changeButtonValue(event, messageId) {
      const value = event.target.value
      this.$store.commit('messages/setSelectedButtonValue', {value, messageId})
    }
  }
}
</script>

<style>
.chat-message a {
  text-decoration: underline;
  font-weight: bold;
}

.chat-message-container {
  max-width: 80%;
}

.chat-message-progress {
  display: flex;
  margin: 12px 24px;
}

.chat-message-progress span {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin-right: 10px;
  border-radius: 50%;
  background-color: white;
  animation: chat-progress-animation 1s infinite;
}

.chat-message-progress span:nth-child(1) {
  animation-delay: 0s;
}

.chat-message-progress span:nth-child(2) {
  animation-delay: 0.1s;
}

.chat-message-progress span:nth-child(3) {
  animation-delay: 0.2s;
}

@keyframes chat-progress-animation {
  0% {
    transform: scale(1);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.5);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0.5;
  }
}

.v-popper__inner {
  padding: 12px;
  max-width: 300px;
}

.chatbot-message-info {
  cursor: pointer;
}

.chatbot-message-info-icon {
  width: 18px;
  height: 18px;
}
</style>
