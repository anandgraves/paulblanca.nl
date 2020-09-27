<template>
  <div class="content">
    <squared-photo-list :photos="homepageProductList" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['homepageProductList']),
  },
}
</script>

<style>
@import '../components/app-core/settings.css';
</style>
