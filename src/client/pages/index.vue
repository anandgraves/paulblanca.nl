<template>
  <div class="homepage content">
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
      title: 'Fine Art Photography of Paul Blanca | Artist | Photographer',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Known for using basic human emotions in his artworks.',
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
