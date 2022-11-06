<template>
  <header class="fixed w-full">
    <nav class="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
      <div class="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
        <a href="#" class="flex items-center">
          <img src="/chatbot.svg" class="h-6 mr-3 sm:h-9" alt="Climate Change Bot Logo"/>
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Climate Change Bot</span>
        </a>
        <div class="flex items-center lg:order-2">
          <div class="hidden mt-2 mr-4 sm:inline-block">
            <a class="github-button"
               href="https://github.com/themesberg/landwind"
               data-size="large"
               data-icon="octicon-star"
               data-show-count="true"
               aria-label="Star themesberg/landwind on GitHub">Star</a>
          </div>
          <div class="hidden mt-2 mr-4 sm:inline-block">
            <button class="bg-default-color hover:bg-default-color-dark text-white font-bold py-2 px-4 rounded">
              Start Chat
            </button>
          </div>
        </div>
        <div class="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1">
          <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <header-button-nav route="/" text="Home"></header-button-nav>
            <header-button-nav route="/chatbot" text="Chatbot"></header-button-nav>
            <header-button-nav route="/privacy" text="Privacy"></header-button-nav>
            <header-button-nav route="/contact" text="Kontakt"></header-button-nav>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import Vue from 'vue'
import HeaderButtonNav from '~/components/navigation/HeaderButtonNav'

export default Vue.extend({
  name: 'IndexPage',
  components: {HeaderButtonNav}
})
</script>

<style scoped>

</style>
