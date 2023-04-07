<template>
  <div>
    <div class="bg-gray-50 dark:bg-gray-800">
      <div class="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
        <!-- Row -->
        <div class="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
          <div class="text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Weshalb einen Chatbot entwickeln?</h2>
            <div class="flex justify-center mb-8 mt-6 lg:hidden">
              <img src="/climate_skinny.jpg" alt="climate change skinny" loading="lazy">
            </div>
            <p class="mb-8 font-light lg:text-xl">Wir haben nicht mehr viel Zeit um die
              Folgen der Klimaerwärmung zu begrenzen. Jedoch ist der Klimawandel ein komplexes Thema mit vielen
              Facetten. Dieses Projekt soll mit einem interaktiven Ansatz dazu beitragen, dass die Probleme besser
              verstanden und Lösungen aufgezeigt werden.</p>
          </div>
          <img class="climate-skinny-image hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex max-w-md"
               src="/climate_skinny.jpg"
               alt="climate change skinny">
        </div>
        <!-- Row -->
        <div class="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
          <img class="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
               src="/plant.jpg"
               alt="Women holding small plant"
               loading="lazy">
          <div class="text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Stand der
              Entwicklung</h2>
            <div class="flex justify-center mb-8 mt-6 lg:hidden">
              <img src="/plant.jpg" alt="Women holding small plant" loading="lazy">
            </div>
            <p class="mb-8 font-light lg:text-xl">Der Chatbot ist noch eine kleine Pflanze, welche erst vor kurzem das
              Licht der Welt erblickt hat. Jedes Mal wenn du den Climate Change Bot verwendest trägst du dazu bei, dass
              dieser ein wenig wachsen kann. Zudem kannst du das Wachstum fördern, in dem du deine Freunde auf dieses
              Projekt aufmerksam machst. Je mehr Leute den Chatbot benützen, desto besser wird er.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-white dark:bg-gray-900">
      <div class="max-w-screen-xl px-4 py-14 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
        <div class="items-center">
          <div class="text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 class="text-center mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Organisationen die das Projekt unterstützen</h2>
            <div class="flex flex-wrap items-center justify-center">
              <a href="https://www.hslu.ch" target="_blank" rel="noopener noreferrer" class="mt-10 mr-5">
                <img src="/HSLU_2022_logo.png" alt="Hochschule Luzern" loading="lazy" class="organisation-logo">
              </a>
              <a href="https://www.fhgr.ch" target="_blank" rel="noopener noreferrer" class="mt-10 mr-5">
                <img src="/fhgr.jpeg" alt="Fachhochschule Graubünden" loading="lazy" class="organisation-logo">
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-white dark:bg-gray-900">
      <div class="max-w-screen-xl px-4 py-14 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
        <div class="items-center">
          <div class="text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 class="text-center mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Chat für eine nachhaltige Zukunft starten</h2>
            <div class="space-y-12 flex space-x-4">
              <button
                @click="$router.push({name: 'chatbot'})"
                class="bg-default-color mx-auto hover:bg-default-color-dark text-white font-bold py-2 px-16 lg:px-8 rounded">
                Los geht's
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MasterThesis'
}
</script>

<style scoped>
.climate-skinny-image {
  margin-left: auto;
}

.organisation-logo {
  height: 48px;
}
</style>
