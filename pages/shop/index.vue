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
import { mapMutations, mapGetters } from 'vuex'

export default {
  data() {
    return {
      products: []
    }
  },

  computed: {
    ...mapGetters(['shopProductList'])
  },

  async fetch({ store }) {
    const products = await Promise.resolve([
      {
        uuid: 'c5ea4c0-4067-11e9-8bad-9b1deb4d3b7d',
        slug: 'domestic-abuse-kristal',
        title: 'Domestic Abuse',
        series: 'Kristal',
        price: 550,
        thumbnailUrl: '/images/snow-white-kristal-s.jpg',
        alt: 'test',
        quantity: 1
      },
      {
        uuid: '332f2a22-db76-4107-a165-ab7742bc6226',
        slug: 'test-title-kristal',
        title: 'Test title',
        series: 'Kristal',
        price: 550,
        thumbnailUrl: '/images/snow-white-kristal-s.jpg',
        alt: 'test',
        quantity: 1
      }
    ])
    store.commit('setShopProducts', products)
  },

  methods: {
    ...mapMutations(['setShopProducts'])
  }
}
</script>
