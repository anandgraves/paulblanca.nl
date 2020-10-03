<template>
  <squared-photo-list
    :photos="seriesList"
    :detail-link-only="true"
    :has-title="true"
  />
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['seriesList']),
    photos() {
      return this.shopProductList.filter(
        (product) => product.seriesSlug === this.$route.params.series
      )
    },
  },
}
</script>
