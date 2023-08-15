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
              <img src="https://climate-change-bot-images.s3.eu-central-1.amazonaws.com/climate-change.jpg"
                   alt="climate change skinny" loading="lazy">
            </div>
            <p class="mb-8 font-light lg:text-xl">Wir haben nicht mehr viel Zeit um die
              Folgen der Klimaerwärmung zu begrenzen. Jedoch ist der Klimawandel ein komplexes Thema mit vielen
              Facetten. Dieses Projekt soll mit einem interaktiven Ansatz dazu beitragen, dass die Probleme besser
              verstanden und Lösungen aufgezeigt werden.</p>
          </div>
          <img class="climate-skinny-image hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex max-w-md"
               src="https://climate-change-bot-images.s3.eu-central-1.amazonaws.com/climate-change.jpg"
               alt="climate change skinny">
        </div>
        <!-- Row -->
        <div class="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
          <img class="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
               src="https://climate-change-bot-images.s3.eu-central-1.amazonaws.com/plant.jpg"
               alt="Women holding small plant"
               loading="lazy">
          <div class="text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Stand der
              Entwicklung</h2>
            <div class="flex justify-center mb-8 mt-6 lg:hidden">
              <img src="https://climate-change-bot-images.s3.eu-central-1.amazonaws.com/plant.jpg"
                   alt="Women holding small plant" loading="lazy">
            </div>
            <p class="mb-8 font-light lg:text-xl">Der Chatbot ist ein Prototyp und wurde im Rahmen meiner Master Thesis
              für den Studiengang <a
                href="https://www.hslu.ch/de-ch/wirtschaft/studium/master/applied-information-and-data-science/"
                target="_blank"
                class="font-semibold">Information
                and Data Science</a> an der <a href="https://www.hslu.ch" target="_blank" class="font-semibold">Hochschule
                Luzern</a>
              entwickelt. Die Master Thesis ist abgeschlossen, jedoch können weiterhin Fragen an den Chatbot bezüglich
              des Klimawandels gestellt werden. Das Ziel ist es nun eine Finanzierungsmöglichkeit zu finden, damit der
              Chatbot weiterentwickelt werden kann.</p>
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
              <a href="https://www.hslu.ch" target="_blank" rel="noopener noreferrer" class="mt-10 mr-10">
                <img src="/HSLU_2022_logo.png" alt="Hochschule Luzern" loading="lazy" class="organisation-logo">
              </a>
              <a href="https://www.fhgr.ch" target="_blank" rel="noopener noreferrer" class="mt-10 mr-10">
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
  @media screen and (max-width: 900px) {
    height: 32px;
  }
}
</style>
