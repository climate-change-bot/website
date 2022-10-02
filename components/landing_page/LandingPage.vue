<template>
  <div>
    <default-header></default-header>
    <project-description></project-description>
    <master-thesis></master-thesis>
  </div>
</template>

<script>
import ProjectDescription from "~/components/landing_page/ProjectDescription";
import MasterThesis from "~/components/landing_page/MasterThesis";

export default {
  name: "LandingPage",
  components: {MasterThesis, ProjectDescription}
}
</script>

<style scoped>

</style>
