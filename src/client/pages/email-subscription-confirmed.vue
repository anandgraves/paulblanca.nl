<template>
  <article class="center-content rich-text body">
    <h1 class="heading-large">Thank You</h1>
    <p class="body">Your email address has been confirmed.</p>

    <p class="body"><strong>Paul Blanca</strong></p>
  </article>
</template>

<script>
export default {
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
