import createMd5Hash from './src/client/lib/create-md5-hash'
const urlHash = createMd5Hash()

export default {
  target: 'static',
  srcDir: 'src/client',
  head: {
    titleTemplate: (titleChunk) => {
      return titleChunk
        ? `'${titleChunk} | Paul Blanca | Artist | Photographer'`
        : 'Paul Blanca | Artist | Photographer'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Paul Blanca‘s work is a voyage through the landscape of emotions.',
      },
    ],
    link: [{ rel: 'shortcut icon', href: `/favicon.ico?v=${urlHash}` }],
  },

  /*
   ** Nuxt PWA module
   */
  pwa: {
    manifest: {
      name: 'Paul Blanca',
      short_name: 'Blanca',
      lang: 'en',
      theme_color: '#ffffff',
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
  modules: ['@nuxtjs/pwa'],

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
