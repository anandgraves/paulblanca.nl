<template>
  <figure class="responsive-image">
    <fixed-ratio
      :style="{ backgroundColor: placeholderColor }"
      :width="image.width"
      :height="image.height"
    >
      <!-- prettier-ignore -->
      <cld-image
        :cloud-name="cloudName"
        :public-id="image.id"
        responsive
        fetch-format="auto"
        quality="auto"
        loading="lazy"
        secure="true"
        :alt="image.alt"
        class="responsive-image__img"
      />
    </fixed-ratio>
  </figure>
</template>

<script>
/**
 * This component is modified from https://github.com/voorhoede/vue-dato-image/blob/master/src/vue-dato-image.vue
 */
import { CldImage } from 'cloudinary-vue'

export default {
  components: {
    CldImage
  },
  props: {
    image: {
      type: Object,
      required: true
    },
    /**
     * Color filling up the space when the image is loading.
     */
    placeholderColor: {
      type: String,
      default: 'transparent'
    }
  },
  computed: {
    cloudName () {
      return process.env.cloudinaryCloudName
    },
    alt () {
      return this.image.alt || 'Photo by artist and photographer Paul Blanca'
    }
  }
}
</script>

<style>
.responsive-image__img {
  width: 100%;
  height: 100%;
}

.responsive-image__img img {
  display: block;
  position: relative;
  height: auto;
  font-weight: 500;
  line-height: 2;
  text-align: center;
}

.responsive-image__img img:not([src]) {
  height: 100%;
}

.responsive-image__img img:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  display: block;
}

.responsive-image__img img:after {
  content: attr(alt);
  position: absolute;
  z-index: 1;
  display: block;
  width: 300px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-size: 1.2rem;
}
</style>
