<template>
  <div>
    <default-header/>
    <section class="bg-gray-50">
      <div class="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-40">
        <div class="mr-auto place-self-center lg:col-span-7">
          <div class="flex justify-center mb-8 mt-6 lg:hidden">
            <a href="https://www.linkedin.com/in/roger-waldvogel/"
               target="_blank">
              <img src="/roger.jpg" alt="Roger Waldvogel" class="h-60 rounded-full">
            </a>
          </div>
          <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Der Chatbot wird von mir <a href="https://www.linkedin.com/in/roger-waldvogel/" target="_blank">(Roger
            Waldvogel)</a> im Rahmen meiner Master Thesis für den Studiengang <a
            href="https://www.hslu.ch/en/lucerne-school-of-business/degree-programmes/master/applied-information-and-data-science/"
            target="_blank"
            class="font-semibold">Information
            and Data Science</a> an der <a href="https://www.hslu.ch" target="_blank" class="font-semibold">Hochschule Luzern</a>
            entwickelt. Unterstützt werde ich zudem von meinem Arbeitgeber,
            der <a href="https://www.fhgr.ch" target="_blank" class="font-semibold">Fachhochschule Graubünden</a>.

          </p>
          <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Falls du Fragen, Anmerkungen oder Interesse an
            einer Zusammenarbeit hast, freue ich mich auf deine Kontaktaufnahme.
          </p>
          <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            <a href="mailto:roger.waldvogel@stud.hslu.ch">roger.waldvogel@stud.hslu.ch</a>
          </p>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex max-w-xs">
          <a href="https://www.linkedin.com/in/roger-waldvogel/"
             target="_blank">
            <img src="/roger.jpg" alt="Roger Waldvogel" class="h-60 ml-32 rounded-full">
          </a>
        </div>
      </div>
    </section>
    <Consent/>
  </div>
</template>

<script lang="js">
import Vue from 'vue'
import DefaultHeader from '~/components/navigation/DefaultHeader'
import Consent from '@/components/consent/Consent.vue'

export default Vue.extend({
  name: 'Contact',
  components: {DefaultHeader, Consent},
  matomo() {
    this.enableHeartBeatTimer(10)
  }
})
</script>
