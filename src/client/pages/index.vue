<template>
  <div class="content">
    <squared-photo-list :photos="photos" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      photos: [
        {
          width: 900,
          height: 900,
          filename: 'paulblanca-selfportrait-mother-and-son-2014-900w',
          type: 'jpg',
          alt: 'Selfportrait Mother And Son 2014, by Paul Blanca',
        },
        {
          width: 627,
          height: 627,
          filename: 'chokochoko-kristal-900w',
          type: 'jpg',
          alt: 'Chokochoko - Kristal 2008, by Paul Blanca',
        },
        {
          width: 787,
          height: 787,
          filename: 'crying-girls-900w',
          type: 'jpg',
          alt: 'Par La Pluie Des Femmes - Crying Girls 1990, by Paul Blanca',
        },
        {
          width: 900,
          height: 900,
          filename: 'deformation-900w',
          type: 'jpg',
          alt: 'Deformation 2006, by Paul Blanca',
        },
      ],
    }
  },
}
</script>

<style>
@import '../components/app-core/settings.css';
</style>
