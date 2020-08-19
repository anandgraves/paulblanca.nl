<template>
  <ul class="squared-photo-list">
    <li
      v-for="photo in photos"
      :key="photo.filename"
      class="squared-photo-list__item"
    >
      <nuxt-link
        to="/shop/deformation-portrait"
        class="squared-photo-list__link"
      >
        <responsive-image
          :image="photo"
          sizes="(min-width: 600px) 1000px, (max-width: 400px): 500px, 100vw"
        ></responsive-image>
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
  },
}
</script>

<style>
@import '../app-core/settings.css';

.squared-photo-list {
  list-style: none;
}

.squared-photo-list__item {
  margin-bottom: 20px;
}

.squared-photo-list__link {
  display: block;
  transition: transform 0.3s ease;
}

.squared-photo-list__link img {
  transition: transform 0.3s ease;
}

.squared-photo-list__link:hover img {
  transform: scale(1.1);
}

@media (min-width: 800px) {
  .squared-photo-list {
    display: flex;
    flex-wrap: wrap;
  }

  .squared-photo-list__item {
    width: 50%;
    padding-right: 20px;
  }
}
</style>
