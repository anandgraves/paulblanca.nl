<template>
  <photo-list :photos="seriesList" :show-series-title="true" />
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['seriesList']),
  },
  head() {
    return {
      title: 'Buy Fine Art Photography Online',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Framed, signed and limited prints only. Available in 30x40, 40x50, 100x120cm on Dibond, Plexiglass and TruLife (museum) Plexiglass.',
        },
      ],
    }
  },
}
</script>
