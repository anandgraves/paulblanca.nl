<template>
  <ul class="photo-list">
    <li v-for="photo in photos" :key="photo.id" class="photo-list__item">
      <nuxt-link :to="photoLink(photo)" class="photo-list__link">
        <responsive-image
          :image="photo.image"
          class="photo-list__photo"
        ></responsive-image>
        <div v-if="hasTitle" class="photo-list__title">
          {{ photo.titleList }}
        </div>
        <div v-if="showSeriesTitle" class="photo-list__title">
          {{ photo.series }}, {{ photo.year }}
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
        return `/shop/${photo.seriesSlug}/${photo.slug}/`
      }

      if (photo.series) {
        return `/shop/${photo.seriesSlug}/`
      }
      return '/'
    },
  },
}
</script>

<style>
@import '../app-core/settings.css';

.photo-list {
  list-style: none;
}

.photo-list__item {
  margin-bottom: 48px;
}

.photo-list__link {
  display: block;
  color: black;
  text-decoration: none;
  transition: transform 0.3s ease;
}

.photo-list__link img {
  transition: transform 0.8s ease-in-out;
}

.photo-list__link:hover img {
  transform: scale(1.03);
}

.photo-list__photo {
  margin-bottom: 8px;
}

.photo-list__title {
  margin-bottom: 24px;
  font-size: 1.2rem;
  text-align: center;
}

@media (min-width: 800px) {
  .photo-list {
    display: flex;
    flex-wrap: wrap;
  }

  .photo-list__item {
    width: 50%;
    margin-bottom: 20px;
    padding-right: 20px;
  }
}
</style>
