<template>
  <article class="center-content rich-text body">
    <h1 class="heading-large">Your email address has been confirmed</h1>
    <p class="body">
      Thank you for subscribing to my newsletter and your interest in my work.
    </p>

    <p class="body"><strong>Paul Blanca</strong></p>
  </article>
</template>

<script>
export default {
  layout: 'default-without-newsletter',
  head() {
    return {
      title: 'Thank you for your email confirmation',
      meta: [
        {
          hid: 'robots',
          name: 'robots',
          content: 'noindex',
        },
      ],
    }
  },
}
</script>
