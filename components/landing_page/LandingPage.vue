<template>
  <div>
    <default-header/>
    <div @click="store.set(false)">
      <project-summary/>
      <project-description/>
      <default-footer/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {useHeaderStore} from '~/store/header'

const store = useHeaderStore()
</script>

<style scoped>

</style>
