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
    appHeader,
  },
}
</script>

<style>
@import '../components/app-core/settings.css';
\ .site-content__main {
  margin-bottom: 128px;
}
</style>
