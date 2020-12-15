<template>
  <div>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div class="series-description rich-text body" v-html="description" />
    <photo-list :photos="photos" :detail-link-only="true" :has-title="true" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import setCanonicalForSeo from '../../../lib/set-canonical-for-seo.js'

export default {
  computed: {
    ...mapGetters(['shopProductList', 'seriesPageIndex']),
    photos() {
      return this.shopProductList.filter(
        (product) => product.seriesSlug === this.$route.params.series
      )
    },
    description() {
      const result = this.seriesPageIndex.filter(
        (serie) => serie.slug === this.$route.params.series
      )
      if (result.length === 1) {
        return result[0].description
      }
      return ''
    },
    getSeriesMasterPhoto() {
      const result = this.seriesPageIndex.find(
        (serie) => serie.slug === this.$route.params.series
      )
      return result.head.imageId
    },
  },

  head() {
    const seriesHead = this.seriesPageIndex.filter(
      (serie) => serie.slug === this.$route.params.series
    )
    return {
      title: seriesHead[0].head.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: seriesHead[0].head.description,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: seriesHead[0].head.description,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.$cloudinary.image.url(this.getSeriesMasterPhoto, {
            crop: 'scale',
            width: 600,
          }),
        },
      ],
      ...setCanonicalForSeo(this.$route),
    }
  },
}
</script>

<style>
.series-description {
  max-width: 720px;
  margin-bottom: 60px;
}
</style>
