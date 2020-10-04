<template>
  <squared-photo-list
    :photos="photos"
    :detail-link-only="true"
    :has-title="true"
  />
</template>

<script>
import { mapGetters } from 'vuex'

export default {
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
