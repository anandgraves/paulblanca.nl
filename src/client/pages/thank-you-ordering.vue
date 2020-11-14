<template>
  <article class="center-content rich-text">
    <h1 class="heading-large">Thank You</h1>
    <p class="body">Thank you for your order and your interest in my work.</p>

    <p class="body">
      You will receive an email from info@paulblanca.nl with payment details as
      soon as possible.
    </p>

    <p class="body"><strong>Paul Blanca</strong></p>
  </article>
</template>

<script>
export default {
  layout: 'default-without-newsletter',
  head() {
    return {
      title: 'Thank you for your order',
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
