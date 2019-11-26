<template>
  <div class="site-content">
    <app-header class="site-content__header" />
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
  max-width: var(--full-content-max-width);
  margin: 24px auto 12px auto;
  padding-left: 20px;
  padding-right: 20px;
}

.site-content__main {
  margin-bottom: 128px;
}

@media (min-width: 800px) {
  .site-content__header {
    margin-bottom: 24px;
  }
}
</style>
