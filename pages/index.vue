<template>
  <LandingPage />
</template>

<script lang="ts">
import Vue from 'vue'
import LandingPage from "~/components/landing_page/LandingPage.vue";

export default Vue.extend({
  name: 'IndexPage',
  components: {LandingPage}
})
</script>
