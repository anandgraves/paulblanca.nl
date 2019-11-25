<template>
  <article class="content">
    <h1 class="heading-large">Shopping Cart</h1>

    <ul>
      <li v-for="product in inCart" :key="product.uuid">
        <p><img :src="product.thumbnailUrl" /></p>
        <p>{{ product.title }}</p>
        <p>{{ product.series }}</p>
        <p>€{{ product.price }}</p>
      </li>
    </ul>

    <nuxt-link to="/">Continue shopping</nuxt-link>
    <nuxt-link class="button" to="/order">Buy Domestic Violence</nuxt-link>
  </article>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['inCart'])
  }
}
</script>
