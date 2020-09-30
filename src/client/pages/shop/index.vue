<template>
  <squared-photo-list :photos="shopProductList" :has-title="true" />
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['shopProductList']),
  },
  head() {
    return {
      title: 'Shop',
    }
  },
}
</script>
