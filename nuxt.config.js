export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Climate Change Bot',
    htmlAttrs: {
      lang: 'de'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {
        hid: 'description',
        name: 'description',
        content: 'Möchtest du mehr über den Klimawandel wissen und was du dagegen tun kannst? Dann bist du hier genau richtig! Der Climate Change Bot beantwortet deine Fragen zu diesem wichtigen Thema.'
      },
      {hid: 'og:type', property: 'og:type', content: 'website'},
      {hid: 'og:url', property: 'og:url', content: 'https://www.climate-change-bot.site/'},
      {hid: 'og:site_name', property: 'og:site_name', content: 'Climate Change Bot'},
      {hid: 'og:image', property: 'og:image', content: '/chatbot.svg'},
      {name: 'format-detection', content: 'telephone=no'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ],
    script: [
      {
        hid: 'matamo-opt-out',
        src: '/scripts/matomo.js'
      }
    ],
    noscript: [{innerHTML: 'Diese Webseite benötigt JavaScript', body: true}]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'floating-vue/dist/style.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/tooltip.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    ['nuxt-matomo', {matomoUrl: 'https://climatechangebotsite.matomo.cloud/', siteId: 1}]
  ],

  axios: {
    baseURL: process.env.API_URL
  },

  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.API_URL
    }
  },

  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.API_URL
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['floating-vue']
  },

  serverMiddleware: [
    {path: '/api', handler: '~/api/rasaAPI.js'}
  ]
}
