<template>
  <article class="center-content rich-text">
    <h1 v-if="error.statusCode === 404" class="heading-large">
      Sorry, that page can't be found.
    </h1>
    <h1 v-else class="heading-large">
      Oops, something went wrong.
    </h1>
    <p class="body">
      Take me back to the <nuxt-link to="/">
        Home page
      </nuxt-link>
    </p>
  </article>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      required: true
    }
  }
}
</script>
