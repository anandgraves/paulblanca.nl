<template>
  <figure class="responsive-image">
    <fixed-ratio
      :style="{ backgroundColor: placeholderColor }"
      :width="image.width"
      :height="image.height"
    >
      <lazy-load>
        <picture v-if="image.width">
          <!--[if IE 9]><video style="display: none;"><![endif]-->
          <source :srcset="srcSet('webp')" sizes="100vw" type="image/webp" />
          <source :srcset="srcSet('jpg')" sizes="100vw" type="image/jpeg" />
          <!--[if IE 9]></video><![endif]-->
          <transition name="fade">
            <img
              v-show="isLoaded"
              :alt="image.alt"
              :src="fallbackUrl"
              @load="onLoad"
              class="responsive-image__img"
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
    LazyLoad
  },
  props: {
    /**
     * Should contain the url, width, height, filename and alt properties.
     */
    image: {
      type: Object,
      required: true
    },
    widthStep: {
      type: Number,
      default: 100
    },
    /**
     * Color filling up the space when the image is loading.
     */
    placeholderColor: {
      type: String,
      default: 'transparent'
    }
  },
  data() {
    return {
      isLoaded: false
    }
  },
  computed: {
    alt() {
      return this.image.alt || ''
    },
    url() {
      return `/images/${this.image.filename}.${this.image.type}`
    },
    fallbackUrl() {
      return `/images/${this.image.filename}-500.jpg`
    }
  },
  methods: {
    onLoad() {
      this.isLoaded = true
    },
    srcSet(type) {
      if (!type) {
        type = 'jpg'
      }
      return `
        /images/${this.image.filename}-500.${type} 500w,
        /images/${this.image.filename}-1000.${type} 1000w,
        /images/${this.image.filename}-1500.${type} 1500w
      `
    }
  }
}
</script>

<style>
.responsive-image__img {
  width: 100%;
}
</style>
