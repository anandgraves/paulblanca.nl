<template>
  <photo-list :photos="seriesList" :show-series-title="true" />
</template>

<script>
import { mapGetters } from 'vuex'
import setCanonicalForSeo from '../../lib/set-canonical-for-seo.js'

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
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'Framed, signed and limited prints only. Available in 30x40, 40x50, 100x120cm on Dibond, Plexiglass and TruLife (museum) Plexiglass.',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.$cloudinary.image.url(
            'portrait-paul-blanca-hans-de-kort_siz4nr',
            {
              crop: 'scale',
              width: 600,
            }
          ),
        },
      ],
      ...setCanonicalForSeo(this.$route),
    }
  },
}
</script>
