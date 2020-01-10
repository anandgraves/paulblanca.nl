<template>
  <div class="site-content">
    <app-header class="site-content__header center-content" />
    <main class="site-content__main">
      <nuxt />
    </main>
  </div>
</template>

<script>
import appHeader from '../components/app-header/app-header'

export default {
  components: {
    appHeader
  }
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

/* @media (min-width: 800px) {
  .site-content__header {
    margin-bottom: 48px;
  }
} */
</style>
