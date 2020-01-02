<template>
  <div>
    <p>{{ product.title }}</p>
    <p>{{ product.price }}</p>
    <p><img :src="product.thumbnailUrl" :alt="product.alt" /></p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['shopProductList']),
    test() {
      return this.$route.params.slug
    },
    product() {
      return this.shopProductList.find(
        product => product.slug === this.$route.params.slug
      )
    }
  }
}
</script>
