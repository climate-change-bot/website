<template>
  <LandingPage :messages="messages"/>
</template>

<script lang="js">
import Vue from 'vue'
import LandingPage from "~/components/landing_page/LandingPage.vue";

export default Vue.extend({
  name: 'IndexPage',
  components: {LandingPage},
  async asyncData({params, $http}) {
    let messages = [
      {
        isUser: true,
        message: "Can be verified on any platform using docker"
      },
      {
        isUser: false,
        message: "Your error message says permission denied, npm global installs must be given root privileges."
      }]
    return {messages}
  },
})
</script>
