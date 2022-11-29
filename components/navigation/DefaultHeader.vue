<template>
  <header class="fixed w-full">
    <nav class="hidden lg:block bg-white border-gray-200 py-2.5 dark:bg-gray-900">
      <div class="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
        <NuxtLink to="/" class="flex items-center">
          <img src="/chatbot.svg" class="h-6 mr-3 sm:h-9" alt="Climate Change Bot Logo"/>
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Climate Change Bot</span>
        </NuxtLink>
        <div class="flex items-center lg:order-2">
          <div class="hidden mt-2 mr-4 sm:inline-block">
            <a href="https://www.linkedin.com/in/roger-waldvogel/" target="_blank">
              <img src="/linkedin.png" class="h-7">
            </a>
          </div>
          <div class="hidden mt-2 mr-4 sm:inline-block">
            <a href="https://github.com/climate-change-bot" target="_blank">
              <img src="/github.png" class="h-7">
            </a>
          </div>
        </div>
        <div class="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1">
          <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <header-button-nav route="/" text="Startseite"></header-button-nav>
            <header-button-nav route="/chatbot" text="Chatbot"></header-button-nav>
            <header-button-nav route="/privacy" text="Datenschutz"></header-button-nav>
            <header-button-nav route="/contact" text="Kontakt"></header-button-nav>
          </ul>
        </div>
      </div>
    </nav>
    <nav class="lg:hidden bg-default-color py-2.5">
      <div class="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
        <div class="flex pr-4">
          <span class="self-center text-xl font-semibold whitespace-nowrap text-white">Home</span>
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
