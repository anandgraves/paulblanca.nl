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
          <!-- <source :srcset="srcSet('webp')" :sizes="sizes" type="image/webp" /> -->
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
export default {
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
    filenameMinusWidth() {
      return this.image.filename.slice(0, -5)
    },
  },
  methods: {
    onLoad() {
      this.isLoaded = true
    },
    srcSet(type) {
      return `
        /images/${this.filenameMinusWidth}-150w.${type} 150w,
        /images/${this.filenameMinusWidth}-500w.${type} 500w,
        /images/${this.filenameMinusWidth}-900w.${type} 900w
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
