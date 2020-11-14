<template>
  <article class="center-content rich-text">
    <h1 class="heading-large">Thank you for subscribing to my newsletter</h1>

    <p class="body">Please check your email to confirm your subscription.</p>

    <p class="body"><strong>Paul Blanca</strong></p>
  </article>
</template>

<script>
export default {
  layout: 'default-without-newsletter',
  head() {
    return {
      title: 'Thank you for your email subscription',
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
