<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
      <div class="mr-auto place-self-center lg:col-span-7">
        <h1
          class="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
          Der Klimawandel Chatbot</h1>
        <div class="flex justify-center mb-8 mt-6 lg:hidden">
          <img src="/chatbot.svg" alt="ClimateChangeBot logo" class="h-60">
        </div>
        <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Möchtest du
          mehr über den Klimawandel wissen? Dann bist du hier genau richtig! Der Climate Change Bot beantwortet deine
          Fragen zu diesem wichtigen Thema.</p>
        <div class="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
          <button
            @click="$router.push({name: 'chatbot'})"
            class="bg-default-color hover:bg-default-color-dark text-white font-bold py-2 px-4 rounded">
            Los geht's
          </button>
        </div>
      </div>
      <div class="hidden lg:mt-0 lg:col-span-5 lg:flex max-w-xs">
        <img src="/chatbot.svg" alt="ClimateChangeBot logo" class="h-60 ml-32">
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
