<template>
  <article class="center-content">
    <h1 class="heading-large">Shop</h1>

    <div v-for="product in shopProductList" :key="product.uuid">
      <div>
        <nuxt-link :to="`/shop/${product.slug}`"
          ><img :src="product.thumbnailUrl" :alt="product.alt" />
        </nuxt-link>
      </div>
    </div>
  </article>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      products: []
    }
  },

  computed: {
    ...mapGetters(['shopProductList'])
  }
}
</script>
