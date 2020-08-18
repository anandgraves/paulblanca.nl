<template>
  <article class="center-content">
    <h1 class="heading-large">Shop</h1>

    <ul class="photo-list flat-list">
      <li
        v-for="product in shopProductList"
        :key="product.uuid"
        class="photo-list__item"
      >
        <nuxt-link :to="`/shop/${product.slug}`">
          <responsive-image :image="product.image"></responsive-image>
        </nuxt-link>
      </li>
    </ul>
  </article>
</template>

<script>
import { mapGetters } from 'vuex'
import ResponsiveImage from '../../components/responsive-image/responsive-image.vue'

export default {
  components: {
    ResponsiveImage,
  },
  data() {
    return {
      products: [],
    }
  },

  computed: {
    ...mapGetters(['shopProductList']),
  },
}
</script>
