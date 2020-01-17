<template>
  <div class="center-content center-content--large">
    <nuxt-link to="/shop/deformation-portrait" class="home-banner-link">
      <responsive-image :image="image"></responsive-image>
    </nuxt-link>
  </div>
</template>

<script>
import ResponsiveImage from '../components/responsive-image/responsive-image.vue'

export default {
  components: { ResponsiveImage },
  data() {
    return {
      image: {
        width: 1500,
        height: 1802,
        filename: 'deformation-portrait',
        type: 'jpg',
        url: '/images/deformation-portrait.jpg',
        alt: 'Deformation by Paul Blanca'
      }
    }
  }
}
</script>

<style>
@import '../components/app-core/settings.css';

.home-banner-link {
  display: block;
}
</style>
