<template>
  <div class="content">
    <photo-list :photos="seriesList" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['seriesList']),
  },
}
</script>

<style>
@import '../components/app-core/settings.css';
</style>
