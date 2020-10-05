<template>
  <article
    class="content"
    :class="{
      'center-content': hasDetailPage,
      'center-content--large': hasDetailPage,
    }"
  >
    <h1 class="heading-large">
      <span v-if="title">{{ title }} – </span>Shop
    </h1>
    <nuxt-child />
  </article>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['seriesPageIndex']),
    hasDetailPage() {
      const params = this.$route.params
      return params && 'series' in params && 'slug' in params
    },
    title() {
      const result = this.seriesPageIndex.filter(
        (serie) => serie.slug === this.$route.params.series
      )
      if (result.length === 1) {
        return result[0].head.title
      }
      return ''
    },
  },

  head() {
    return {
      title: 'Shop',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Buy photos from artist/photographer Paul Blanca. Available in 30x40, 40x50, 100x120cm on Dibond, Plexiglass and TruLife Plexiglass.',
        },
      ],
    }
  },
}
</script>
