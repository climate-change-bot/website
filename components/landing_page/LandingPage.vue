<template>
  <div>
    <default-header/>
    <project-description/>
    <master-thesis/>
  </div>
</template>

<script>
import DefaultHeader from '~/components/navigation/DefaultHeader'
import ProjectDescription from '~/components/landing_page/ProjectDescription'
import MasterThesis from '~/components/landing_page/MasterThesis'

export default {
  name: 'LandingPage',
  components: {DefaultHeader, MasterThesis, ProjectDescription}
}
</script>

<style scoped>

</style>
