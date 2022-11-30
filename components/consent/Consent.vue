<template>
  <div>
    <client-only>
      <div v-if="showInfo" class="fixed bg-[#212121] z-[100] bottom-0 left-0 right-0 py-4 opacity-90">
        <div class="mx-auto lg:max-w-2xl flex">
          <div class="text-white">
            <span>Diese Webseite speichert Daten von dir. Indem du die Webseite weiterhin nutzt, stimmst du </span>
            <nuxt-link :to="{name: 'privacy'}" class="font-bold">
              der Verwendung deiner Daten
            </nuxt-link>
            <span> zu.</span>
          </div>
          <div class="opacity-100">
            <button @click="acceptCookies"
                    class="bg-default-color hover:bg-default-color-dark text-white font-bold ml-4 px-2 py-2 rounded opacity-100 hover:opacity-100">
              Akzeptieren
            </button>
          </div>
        </div>
      </div>
    </client-only>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showCookieWarning: false
    }
  },
  computed: {
    showInfo() {
      return this.showCookieWarning
    }
  },
  mounted() {
    this.showCookieWarning = true
    if (document.cookie) {
      if (this.getCookie('privacyWarning') === 'true') {
        this.showCookieWarning = false
      }
    }
  },
  methods: {
    acceptCookies() {
      document.cookie = 'privacyWarning=true; expires=Fri, 31 Dec 2030 23:59:59 UTC;'
      this.showCookieWarning = false
    },
    getCookie(cname) {
      const name = cname + '='
      const ca = document.cookie.split(';')
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i]
        while (c.charAt(0) === ' ') {
          c = c.substring(1)
        }
        if (c.indexOf(name) === 0) {
          return c.substring(name.length, c.length)
        }
      }
      return ''
    }
  }
}
</script>

<style scoped>

</style>
