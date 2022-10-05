<template>
  <div>
    <default-header></default-header>
    <project-description></project-description>
    <master-thesis></master-thesis>
    <chatbot-interface></chatbot-interface>
  </div>
</template>

<script>
import ProjectDescription from "~/components/landing_page/ProjectDescription";
import MasterThesis from "~/components/landing_page/MasterThesis";
import ChatbotInterface from "~/components/landing_page/ChatbotInterface";

export default {
  name: "LandingPage",
  components: {ChatbotInterface, MasterThesis, ProjectDescription}
}
</script>

<style scoped>

</style>
