<template>
  <div class="site-content">
    <app-header class="site-content__header center-content" />
    <main class="site-content__main">
      <nuxt />
      <newsletter-form v-if="isConvertKitLoaded" />
    </main>
    <app-footer />
  </div>
</template>

<script>
import appHeader from '../components/app-header/app-header'

export default {
  components: {
    appHeader,
  },
  data() {
    return {
      isConvertKitLoaded: false,
    }
  },
  head() {
    return {
      script: [
        {
          hid: 'convertkit',
          src: 'https://f.convertkit.com/ckjs/ck.5.js',
          defer: true,
          callback: () => (this.isConvertKitLoaded = true),
        },
      ],
    }
  },
}
</script>

<style>
@import '../components/app-core/settings.css';

.site-content__header {
  margin: 24px auto 60px auto;
}

.site-content__main {
  margin-bottom: 128px;
}

@media (min-width: 800px) {
  .site-content__header {
    margin-bottom: 72px;
  }
}
</style>
