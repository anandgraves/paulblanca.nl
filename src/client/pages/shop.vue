<template>
  <article
    class="content"
    :class="{
      'center-content': hasDetailPage,
      'center-content--large': hasDetailPage,
    }"
  >
    <h1 class="heading-large">Shop</h1>
    <nuxt-child />
  </article>
</template>

<script>
export default {
  computed: {
    hasDetailPage() {
      const params = this.$route.params
      return params && 'series' in params && 'slug' in params
    },
  },
}
</script>
