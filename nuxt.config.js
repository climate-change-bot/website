export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ClimateChangeBot',
    htmlAttrs: {
      lang: 'de'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ],
    noscript: [{innerHTML: "This website requires JavaScript", body: true}]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

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
    '@nuxtjs/axios'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  serverMiddleware: [
    { path: '/api', handler: '~/api/rasaAPI.js' }
  ]

  // axios: {
  //   baseURL: 'http://127.0.0.1:5005',
  //   proxyHeaders: false,
  //   credentials: false,
  //   headers: {
  //     'Access-Control-Allow-Origin': '*',
  //     "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
  //   }
  // },

// proxy: {
//   '/webhooks/': {changeOrigin: true, target: 'http://127.0.0.1:5005', pathRewrite: {'^/webhooks/': ''}}
// },
// proxy: {
//   "/webhooks": "http://localhost:5005"
// },

// publicRuntimeConfig: {
//   axios: {
//     browserBaseURL: "http://127.0.0.1:5005"
//   }
// }
}
