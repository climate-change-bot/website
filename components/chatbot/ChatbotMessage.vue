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
            <div v-if="!isLoading"
                 class="px-4 py-2 rounded-lg inline-block rounded-br-none bg-default-color text-white"
                 v-html="htmlMessage"></div>
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

const converter = new showdown.Converter({
  openLinksInNewWindow: true,
  emoji: true
})

export default {
  name: 'ChatbotMessage',
  props: {
    message: {
      type: String,
      default: ''
    },
    isLoading: {
      type: Boolean,
      default: false
    },
    isUser: Boolean
  },
  computed: {
    htmlMessage: function () {
      return converter.makeHtml(this.message)
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
</style>
