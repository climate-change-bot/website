<template>
  <div>
    <default-header/>
    <project-description/>
    <master-thesis/>
    <chatbot-interface :messages="messages"/>
  </div>
</template>

<script>
import ProjectDescription from '~/components/landing_page/ProjectDescription'
import MasterThesis from '~/components/landing_page/MasterThesis'
import ChatbotInterface from '~/components/landing_page/ChatbotInterface'

export default {
  name: 'LandingPage',
  components: {ChatbotInterface, MasterThesis, ProjectDescription},
  props: {
    messages: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>

</style>
