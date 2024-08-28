<template>
  <div>
    <default-header/>
    <section class="bg-gray-50">
      <div class="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-40">
        <div class="mr-auto place-self-center lg:col-span-7">
          <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Datenschutz ist mir sehr wichtig! Aus diesem Grund wird nur gespeichert was für das Projekt wirklich nötig
            ist.
          </p>
          <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            <b class="font-bold">1.</b> Die Konversationen werden gespeichert und für die Analyse und die Verbesserung
            des Chatbots verwendet.
            Jedoch sind die Konversationen komplett anonymisiert. Dies bedeutet, dass es nicht möglich ist herauszufinden
            wer die Konversation geführt hat.
          </p>
          <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            <b class="font-bold">2.</b> Antworten, die mit dem Rasa-Framework nicht generiert werden können, werden
            mittels einer API an ChatGPT von OpenAI übermittelt. Dabei werden lediglich die Inhalte des Chatverlaufs
            übertragen, ohne zusätzliche persönliche Daten preiszugeben.
            OpenAI speichert die Daten für einen Zeitraum von 30 Tagen, um ihr Modell zu optimieren.
          </p>
          <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            <b class="font-bold">3.</b> Mit Matomo werden die Webseitenbesuche analysiert. Die Daten werden in Europa
            gespeichert und nur für diesen Zweck verwendet. Wenn du das nicht möchtest, kannst du das Tracking
            deaktivieren. Jedoch hilft mir diese Analyse sehr bei der Verbesserung der Webseite.
          </p>
          <div id="matomo-opt-out"></div>
        </div>
      </div>
    </section>
    <Consent/>
  </div>
</template>
