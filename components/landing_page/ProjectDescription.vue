<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
      <div class="mr-auto place-self-center lg:col-span-7">
        <h1
          class="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
          Antworten zum Klimawandel</h1>
        <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Hast du
          Fragen zum Klimawandel? Dann bist du hier genau richtig! Der ClimateChangeBot freut sich auf deine Fragen.</p>
        <div class="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
          <a href="https://github.com/themesberg/landwind"
             class="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
            Start Chat
          </a>
        </div>
      </div>
      <div class="hidden lg:mt-0 lg:col-span-5 lg:flex max-w-xs">
        <img src="/chatbot.svg" alt="ClimateChangeBot image">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjectDescription'
}
</script>

<style scoped>

</style>
