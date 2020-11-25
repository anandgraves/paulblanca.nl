import index from './src/client/store/index.js'
import createMd5Hash from './src/client/lib/create-md5-hash'
const urlHash = createMd5Hash()
const state = index.state().shopProductList

export default {
  target: 'static',
  srcDir: 'src/client',
  env: {
    googleAnalyticsTrackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID || '',
    cloudinaryCloudName: process.env.CLOUDINARY_CLOUDNAME,
    baseUrl: process.env.BASE_URL,
    convertKitApiUrl: process.env.CONVERTKIT_EMAIL_SUBSCRIPTION_URL,
    emailSubscriptionCompletedUrl: process.env.EMAIL_SUBSCRIPTION_COMPLETED_URL,
  },
  head: {
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'A voyage through the landscape of emotions.',
      },
      /**
       * https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/samples/dn455106(v=vs.85)?redirectedfrom=MSDN
       */
      {
        hid: 'msapplication-config',
        name: 'msapplication-config',
        content: `/favicons/browserconfig.xml?v=${urlHash}`,
      },
    ],
    /**
     * Favicons and code by https://realfavicongenerator.net
     */

    link: [
      {
        rel: 'preconnect',
        href: 'https://res.cloudinary.com/',
      },
      {
        rel: 'dns-prefetch',
        href: 'https://res.cloudinary.com/',
      },
      {
        rel: 'shortcut icon',
        href: `/favicons/favicon.ico?v=${urlHash}`,
      },
      {
        rel: 'mask-icon',
        href: `/favicons/safari-pinned-tab.svg?v=${urlHash}`,
        color: '#000000',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: `/favicons/favicon-32x32.png?v=${urlHash}`,
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: `/favicons/favicon-16x16.png?v=${urlHash}`,
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: `/favicons/apple-touch-icon.png?v=${urlHash}`,
      },
    ],
  },

  /*
   ** Nuxt PWA module
   */
  pwa: {
    manifest: {
      name: 'Paul Blanca',
      short_name: 'Paul Blanca',
      lang: 'en',
      theme_color: '#ffffff',
      description: 'Known for using basic human emotions in his artworks.',
      orientation: 'portrait',
      icons: [
        {
          src: '/favicons/android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/favicons/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
    icon: {
      source: `src/client/static/favicons/icon.png?v=${urlHash}`,
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
    '@nuxtjs/google-analytics',
  ],
  /**
   * Use as fallback if no runtime config is provide
   */
  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID,
    debug: {
      sendHitTask: process.env.NODE_ENV === 'production',
    },
  },
  publicRuntimeConfig: {
    googleAnalytics: {
      id: process.env.GOOGLE_ANALYTICS_ID,
      debug: {
        sendHitTask: process.env.NODE_ENV === 'production',
      },
    },
  },

  cloudinary: {
    cloudName: process.env.CLOUDINARY_CLOUDNAME,
  },

  /**
   * If you use other modules (eg. nuxt-i18n), always declare the sitemap module at end of array
   *
   */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/cloudinary',
    '@nuxtjs/sitemap',
  ],

  /**
   * https://github.com/nuxt-community/sitemap-module
   */
  sitemap: {
    hostname: `${process.env.BASE_URL}`,
    gzip: true,
    exclude: [
      '/privacy-statement',
      '/terms-conditions',
      '/thank-you-ordering',
      '/thank-you-subscribing',
      '/email-subscription-confirmed',
    ],
    routes: state.map(
      (product) => `/shop/${product.seriesSlug}/${product.slug}/`
    ),
    filter({ routes }) {
      return routes.map((route) => {
        route.url = `${route.url}/`
        return route
      })
    },
  },

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
