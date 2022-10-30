<template>
  <section class="bg-gray-50 dark:bg-gray-800">
    <div class="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
      <!-- Row -->
      <div class="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
        <div class="text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Master Thesis von Roger
            Waldvogel</h2>
          <p class="mb-8 font-light lg:text-xl">Dieses Projekt wird im Rahmen der Master Thesis von Roger Waldvogel an
            der Hochschule Luzern entwickelt. Das Ziel ist es einen Chatbot zu entwickeln welcher Fragen zum Klimawandel
            korrekt beantwortet und so ein grösseres Verständnis für diese Thematik schafft. </p>
        </div>
        <img class="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex" src="/hslu.png" alt="dashboard feature image">
      </div>
      <!-- Row -->
      <div class="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
        <img class="hidden w-full mb-4 max-w-xs rounded-lg lg:mb-0 lg:flex" src="/prototype.svg" alt="Prototype">
        <div class="text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Aktueller Stand der
            Arbeit</h2>
          <p class="font-light lg:text-xl">Der Chatbot ist noch in der Alpha Testphase und kann noch keine Fragen zum
            Klimawandel beantworten.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MasterThesis'
}
</script>

<style scoped>

</style>
