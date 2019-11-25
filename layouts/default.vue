<template>
  <div>
    <app-header />

    <main>
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
