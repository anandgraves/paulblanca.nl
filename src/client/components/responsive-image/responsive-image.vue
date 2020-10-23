<template>
  <figure class="responsive-image">
    <fixed-ratio
      :style="{ backgroundColor: placeholderColor }"
      :width="imageDimensions.width"
      :height="imageDimensions.height"
    >
      <picture v-if="width">
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
            loading="lazy"
            @load="onLoad"
          />
        </transition>
      </picture>
    </fixed-ratio>
  </figure>
</template>

<script>
export default {
  /**
   * This component is modified from https://github.com/voorhoede/vue-dato-image/blob/master/src/vue-dato-image.vue
   */

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
      width: undefined,
      isLoaded: false,
      widthStep: 100,
    }
  },
  computed: {
    alt() {
      return this.image.alt || 'Photo by artist and photographer Paul Blanca'
    },
    fallbackUrl() {
      return this.image.formats[1].widths[0].filename
    },
    imageDimensions() {
      const imageType = this.image.formats.find((item) => item.type === 'webp')
      return imageType.widths[0]
    },
  },
  mounted() {
    const pixelRatio = window.devicePixelRatio || 1
    const cssWidth = this.$el.getBoundingClientRect().width
    const width =
      Math.ceil((cssWidth * pixelRatio) / this.widthStep) * this.widthStep
    this.width = Math.min(width, this.imageDimensions.width)
  },
  methods: {
    onLoad() {
      this.isLoaded = true
    },
    srcSet(type) {
      const imageType = this.image.formats.find((item) => item.type === type)
      const imageWidths = imageType.widths.map(
        (item) => `${item.filename} ${item.size}`
      )
      return imageWidths.join(',')
    },
  },
}
</script>

<style>
.responsive-image__img {
  width: 100%;
}
</style>
