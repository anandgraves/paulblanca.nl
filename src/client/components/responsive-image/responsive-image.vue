<template>
  <figure class="responsive-image">
    <fixed-ratio
      :style="{ backgroundColor: placeholderColor }"
      :width="1000"
      :height="1000"
    >
      <transition name="fade">
        <cld-image
          :cloud-name="cloudName"
          :public-id="image.id"
          loading="lazy"
          responsive
          alt="test alt tag for responsive image"
          class="responsive-image__img"
        />
      </transition>
    </fixed-ratio>
  </figure>
</template>

<script>
import { CldImage } from 'cloudinary-vue'

export default {
  /**
   * This component is modified from https://github.com/voorhoede/vue-dato-image/blob/master/src/vue-dato-image.vue
   */

  components: {
    CldImage,
  },
  props: {
    image: {
      type: Object,
      required: true,
    },
    /**
     * Color filling up the space when the image is loading.
     */
    placeholderColor: {
      type: String,
      default: 'transparent',
    },
  },
  computed: {
    cloudName() {
      return process.env.cloudinaryCloudName
    },
    alt() {
      return this.image.alt || 'Photo by artist and photographer Paul Blanca'
    },
  },

  methods: {
    onLoad() {
      this.isLoaded = true
    },
  },
}
</script>

<style>
.responsive-image__img {
  width: 100%;
}
</style>
