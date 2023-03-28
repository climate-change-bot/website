<template>
  <Nuxt/>
</template>

<script>
export default {
  layout: 'default',
  watch: {
    $route() {
      this.$store.commit('header/set', false)
    }
  }
}
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
</style>
