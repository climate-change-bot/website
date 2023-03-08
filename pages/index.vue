<template>
  <div>
    <LandingPage/>
    <Consent/>
  </div>
</template>

<script lang="js">
import Vue from 'vue'
import LandingPage from '~/components/landing_page/LandingPage.vue'
import Consent from '@/components/consent/Consent.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: {LandingPage, Consent},
  matomo(from, to, store) {
    this.enableHeartBeatTimer(10)
  }
})
</script>
