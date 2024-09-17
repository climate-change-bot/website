<template>
  <div id="chatbot-default-layout">
    <slot/>
  </div>
</template>

<script lang="ts" setup>

import {useHeaderStore} from '~/store/header'

const store = useHeaderStore()
store.set(false)
</script>

<style>
html {
  height: 100%;
}

body {
  height: 100%;
}

#__nuxt {
  height: 100%;
}

#__layout {
  height: 100%;
}

#matomo-opt-out-warning {
  display: none;
}

#chatbot-default-layout {
  height: 100%;
}

</style>
