<template>
  <div class="md:bg-gray-50 h-full items-center flex justify-center chatbot-landing-page"
       @click="store.set(false)">
    <Chatbot/>
  </div>
</template>

<script lang="ts" setup>
import {useHeaderStore} from '~/store/header'

const store = useHeaderStore()
</script>

<style scoped>
.chatbot-landing-page {
  padding-top: 56px;
}
</style>
