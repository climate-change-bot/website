export default defineNuxtConfig({

  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    'floating-vue/nuxt'
  ],

  // head: {
  //   title: 'Climate Change Bot',
  //   htmlAttrs: {
  //     lang: 'de'
  //   },
  //   meta: [
  //     {charset: 'utf-8'},
  //     {name: 'viewport', content: 'width=device-width, initial-scale=1'},
  //     {
  //       hid: 'description',
  //       name: 'description',
  //       content: 'Möchtest du mehr über den Klimawandel wissen und was du dagegen tun kannst? Dann bist du hier genau richtig! Der Climate Change Bot beantwortet deine Fragen zu diesem wichtigen Thema.'
  //     },
  //     {hid: 'og:title', property: 'og:title', content: 'Climate Change Bot'},
  //     {
  //       hid: 'og:description',
  //       property: 'og:description',
  //       content: 'Möchtest du mehr über den Klimawandel wissen und was du dagegen tun kannst? Dann bist du hier genau richtig! Der Climate Change Bot beantwortet deine Fragen zu diesem wichtigen Thema.'
  //     },
  //     {hid: 'og:type', property: 'og:type', content: 'website'},
  //     {hid: 'og:local', property: 'og:local', content: 'de_DE'},
  //     {hid: 'og:url', property: 'og:url', content: 'https://www.climate-change-bot.site/'},
  //     {hid: 'og:site_name', property: 'og:site_name', content: 'Climate Change Bot'},
  //     {hid: 'og:image', property: 'og:image', content: 'https://www.climate-change-bot.site/chatbot.png'},
  //     {hid: 'og:image:type', property: 'og:image:type', content: 'image/png'},
  //     {hid: 'og:image:alt', property: 'og:image:alt', content: 'Chatbot mit Sprechblase'},
  //     {name: 'format-detection', content: 'telephone=no'}
  //   ],
  //   link: [
  //     {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
  //   ],
  //   noscript: [{innerHTML: 'Diese Webseite benötigt JavaScript', body: true}]
  // },

  components: {
    path: '~/components',
    pathPrefix: false
  },

  // Global CSS: https://go.nuxtjs.dev/config-css

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '~/plugins/tooltip.js', mode: 'client'}
  ],

  // typescript: {
  //   typeCheck: true
  // },

  tailwindcss: {
    exposeConfig: true
  },

  imports: {
    presets: [
      {
        from: 'pinia',
        imports: ['defineStore', 'storeToRefs']
      }
    ]
  },

  ssr: false,

  serverMiddleware: [
    {path: '/api', handler: '~/api/rasaAPI.js'}
  ],

  compatibilityDate: '2024-08-28'
})
