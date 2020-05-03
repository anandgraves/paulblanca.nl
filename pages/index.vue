<template>
  <div class="center-content">
    <nuxt-link to="/shop/deformation-portrait" class="home-banner-link">
      <responsive-image
        :image="image"
        sizes="(min-width: 1000px) 1500px, (min-width: 600px) 1000px, (max-width: 400px): 500px, 100vw"
      ></responsive-image>
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
        alt: 'Deformation by Paul Blanca',
      },
    }
  },
}
</script>

<style>
@import '../components/app-core/settings.css';

.home-banner-link {
  display: block;
}
</style>
