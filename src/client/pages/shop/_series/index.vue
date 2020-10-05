<template>
  <div>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div class="series-description rich-text body" v-html="description" />
    <photo-list :photos="photos" :detail-link-only="true" :has-title="true" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['shopProductList', 'seriesDescription']),
    photos() {
      return this.shopProductList.filter(
        (product) => product.seriesSlug === this.$route.params.series
      )
    },
    description() {
      const result = this.seriesDescription.filter(
        (serie) => serie.seriesSlug === this.$route.params.series
      )
      if (result.length === 1) {
        return result[0].description
      }
      return ''
    },
  },
}
</script>

<style>
.series-description {
  max-width: 720px;
  margin-bottom: 60px;
}
</style>
