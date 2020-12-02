<template>
  <div class="content">
    <photo-list :photos="seriesList" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import setCanonicalForSeo from '../lib/set-canonical-for-seo.js'

export default {
  computed: {
    ...mapGetters(['seriesList']),
  },
  head() {
    return {
      title: 'Fine Art Photography of Paul Blanca',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Known for using basic human emotions in his artworks.',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Known for using basic human emotions in his artworks.',
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

<style>
@import '../components/app-core/settings.css';
</style>
