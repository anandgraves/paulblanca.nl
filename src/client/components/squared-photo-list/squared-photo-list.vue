<template>
  <ul class="squared-photo-list">
    <li
      v-for="photo in photos"
      :key="photo.slug"
      class="squared-photo-list__item"
    >
      <nuxt-link :to="photoLink(photo)" class="squared-photo-list__link">
        <responsive-image
          :image="photo.image"
          sizes="(min-width: 600px) 1000px, (max-width: 400px): 500px, 100vw"
        ></responsive-image>
        <div v-if="hasTitle" class="squared-photo-list__title">
          {{ photo.titleList }}
        </div>
        <div v-if="showSeriesTitle" class="squared-photo-list__title">
          {{ photo.series }} {{ photo.year }}
        </div>
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    photos: {
      type: Array,
      required: true,
    },
    hasTitle: {
      type: Boolean,
      default: false,
    },
    detailLinkOnly: {
      type: Boolean,
      default: false,
    },
    showSeriesTitle: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    photoLink(photo) {
      if (this.detailLinkOnly) {
        return `/shop/${photo.seriesSlug}/${photo.slug}`
      }

      if (photo.series) {
        return `/shop/${photo.seriesSlug}`
      }
      return '/'
    },
  },
}
</script>

<style>
@import '../app-core/settings.css';

.squared-photo-list {
  list-style: none;
}

.squared-photo-list__item {
  margin-bottom: 48px;
}

.squared-photo-list__link {
  display: block;
  color: black;
  text-decoration: none;
  transition: transform 0.3s ease;
}

.squared-photo-list__link img {
  transition: transform 0.6s ease;
}

.squared-photo-list__link:hover img {
  transform: scale(1.03);
}

.squared-photo-list__title {
  margin-top: 5px;
  margin-bottom: 24px;
  font-size: 1.2rem;
  text-align: center;
}

@media (min-width: 800px) {
  .squared-photo-list {
    display: flex;
    flex-wrap: wrap;
  }

  .squared-photo-list__item {
    width: 50%;
    margin-bottom: 20px;
    padding-right: 20px;
  }
}
</style>
