<template>
  <div class="center-content center-content--wide">
    <nuxt-link to="/shop/snow-white-giulia-kristal" class="hero">
      <fixed-ratio :width="1300" :height="910">
        <picture class="hero__container">
          <img
            src="/images/snow-white-kristal-xl.jpg"
            alt="Snow White Giullia by Paul Blanca"
            loading="lazy"
          />
        </picture>
      </fixed-ratio>
    </nuxt-link>
  </div>
</template>

<script>
import FixedRatio from '../components/fixed-ratio/fixed-ratio.vue'

export default {
  components: { FixedRatio }
}
</script>

<style>
@import '../components/app-core/settings.css';

.hero {
  display: block;
}

.hero__container {
  display: block;
}
</style>
