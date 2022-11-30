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
        <div v-show="$route.name === 'index'" class="flex">
          <span class="self-center text-xl font-semibold whitespace-nowrap text-white">Climate Change Bot</span>
        </div>
        <div v-show="$route.name !== 'index'" class="flex">
          <button type="button"
                  class="text-gray-500 hover:text-gray-600 focus:text-gray-600 focus:outline-none pl-2 py-1"
                  @click="$router.push({ path: '/' })">
            <svg viewBox="0 0 24 24" class="h-6 w-6 fill-white">
              <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"></path>
            </svg>
          </button>
        </div>
        <div class="flex justify-between items-center">
          <button type="button"
                  class="text-gray-500 hover:text-gray-600 focus:text-gray-600 focus:outline-none pl-2 py-1"
                  @click="$store.commit('header/set', !isOpen)">
            <svg viewBox="0 0 24 24" class="h-6 w-6 fill-white">
              <path
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
            </svg>
          </button>
        </div>
      </div>
      <div v-show="isOpen" class="transition ease-in duration-200 flex-col mt-3 ml-4 flex">
        <a href="/" :class="{'font-semibold': $route.name === 'index'}" class="text-white text-md pb-1.5">Startseite</a>
        <a href="/chatbot" :class="{'font-semibold': $route.name === 'chatbot'}" class="text-white text-md pb-1.5">Chatbot</a>
        <a href="/privacy" :class="{'font-semibold': $route.name === 'privacy'}" class="text-white text-md pb-1.5">Privatsphäre</a>
        <a href="/contact" :class="{'font-semibold': $route.name === 'contact'}" class="text-white text-md pb-1.5">Kontakt</a>
      </div>
    </nav>
  </header>
</template>

<script>
import Vue from 'vue'
import HeaderButtonNav from '~/components/navigation/HeaderButtonNav'

export default Vue.extend({
  name: 'DefaultHeader',
  components: {HeaderButtonNav},
  computed: {
    isOpen: function () {
      return this.$store.state.header.isNavOpen
    }
  }
})
</script>

<style scoped>

</style>
