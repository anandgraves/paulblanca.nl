export default {
  target: 'static',
  srcDir: 'src/client',
  head: {
    titleTemplate: '%s | Paul Blanca | Artist and Photographer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: `Paul Blanca‘s work is a voyage through the landscape of emotions.`,
      },
    ],
  },

  /*
   ** Nuxt PWA module
   */
  pwa: {
    manifest: {
      name: 'Paul Blanca',
      short_name: 'Blanca',
      lang: 'en',
    },
    icon: {
      source: 'src/client/static/images/icon.png',
    },
  },
  components: true,
  generate: {
    fallback: true,
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: ['./src/client/components/app-core/index.css'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/pwa',
    // Doc: https://axios.nuxtjs.org/usage
  ],

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, { isDev, isClient }) {
      config.module.rules.forEach((rule) => {
        if (rule.test.toString() === '/\\.(png|jpe?g|gif|svg|webp)$/i') {
          rule.test = /\\.(png|jpe?g|gif|webp)$/i
        }
      })

      config.module.rules.push({
        test: /\.svg$/,
        loader: 'vue-svg-loader',
        exclude: /(node_modules)/,
      })
    },
  },
}
