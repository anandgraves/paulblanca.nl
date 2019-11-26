<template>
  <div class="center-content center-content--wide">
    <nuxt-link to="/photo" class="hero">
      <fixed-ratio :width="1300" :height="910">
        <picture class="hero__container">
          <img
            src="/images/front-paul-blanca.jpg"
            alt="Snow White Giullia by Paul Blanca"
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
