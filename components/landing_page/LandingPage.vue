<template>
  <div>
    <default-header/>
    <div @click="$store.commit('header/set', false)">
      <project-description/>
      <master-thesis/>
    </div>
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
