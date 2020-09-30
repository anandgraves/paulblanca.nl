<template>
  <squared-photo-list
    :photos="photos"
    :detail-link-only="true"
    :has-title="true"
  />
</template>

<script>
import { mapGetters } from 'vuex'
// import myMiddleware from '../../../middleware/myMiddleware.js'

export default {
  // layout: myMiddleware,
  middleware({ route, context }) {
    /**
     * Verplaats de logica in created naar deze middleware.
     * Daarna, laad middels de router een andere view in, /shop/_slug.vue.
     * Dan heb je geen /shop/_series/_slug.vue nodig.
     * Of omdraaien, alleen /shop/_slug.vue gebruiken.
     *
     * Wat ik wil bereiken. Switch layout, als de route voldoet aan de checks bij created().
     *
     * https://dev.to/alligatore3/nuxt-js-dynamic-layouts-by-current-route-3jl1
     */
    // console.log('route', route)
    // console.log('context', context)
  },
  computed: {
    ...mapGetters(['shopProductList']),
    photos() {
      return this.shopProductList.filter(
        (product) => product.seriesSlug === this.$route.params.series
      )
    },
  },
}
</script>
