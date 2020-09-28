<template>
  <article class="center-content">
    <h1 class="heading-large">Shop</h1>

    <squared-photo-list :photos="shopProductList" :has-title="true" />
  </article>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['shopProductList']),
  },
}
</script>
