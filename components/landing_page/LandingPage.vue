<template>
  <div>
    <default-header/>
    <div @click="$store.commit('header/set', false)">
      <project-description/>
      <master-thesis/>
      <default-footer/>
    </div>
  </div>
</template>

<script>
import DefaultHeader from '~/components/navigation/DefaultHeader'
import DefaultFooter from '~/components/navigation/DefaultFooter'
import ProjectDescription from '@/components/landing_page/ProjectSummary'
import MasterThesis from '@/components/landing_page/ProjectDescription'

export default {
  name: 'LandingPage',
  components: {DefaultHeader, DefaultFooter, MasterThesis, ProjectDescription}
}
</script>

<style scoped>

</style>
