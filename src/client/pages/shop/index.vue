<template>
  <squared-photo-list :photos="seriesList" :show-series-title="true" />
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['seriesList']),
  },
  head() {
    return {
      title: 'Shop',
    }
  },
}
</script>
