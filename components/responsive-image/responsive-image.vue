<template>
  <figure class="responsive-image">
    <fixed-ratio
      :style="{ backgroundColor: placeholderColor }"
      :width="image.width"
      :height="image.height"
    >
      <lazy-load>
        <picture>
          <!--[if IE 9]><video style="display: none;"><![endif]-->
          <source :srcset="srcSet('webp')" :sizes="sizes" type="image/webp" />
          <source :srcset="srcSet('jpg')" :sizes="sizes" type="image/jpeg" />
          <!--[if IE 9]></video><![endif]-->
          <transition name="fade">
            <img
              v-show="isLoaded"
              :alt="image.alt"
              :src="fallbackUrl"
              class="responsive-image__img"
              @load="onLoad"
            />
          </transition>
        </picture>
      </lazy-load>
    </fixed-ratio>
  </figure>
</template>

<script>
import FixedRatio from '../fixed-ratio/fixed-ratio.vue'
import LazyLoad from '../lazy-load/lazy-load.vue'

export default {
  components: {
    FixedRatio,
    LazyLoad,
  },
  props: {
    image: {
      type: Object,
      required: true,
    },
    sizes: {
      type: String,
      default: '',
    },
    /**
     * Color filling up the space when the image is loading.
     */
    placeholderColor: {
      type: String,
      default: 'transparent',
    },
  },
  data() {
    return {
      isLoaded: false,
    }
  },
  computed: {
    alt() {
      return this.image.alt || ''
    },
    fallbackUrl() {
      return `/images/${this.image.filename}-500.jpg`
    },
  },
  methods: {
    onLoad() {
      this.isLoaded = true
    },
    srcSet(type) {
      return `
        /images/${this.image.filename}-150.${type} 150w,
        /images/${this.image.filename}-500.${type} 500w,
        /images/${this.image.filename}-1000.${type} 1000w,
        /images/${this.image.filename}-1500.${type} 1500w
      `
    },
  },
}
</script>

<style>
.responsive-image__img {
  width: 100%;
}
</style>
