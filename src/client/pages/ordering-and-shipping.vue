<template>
  <article class="center-content rich-text">
    <h1 class="heading-large">Ordering and Shipping</h1>
    <div class="body rich-text">
      <h2 class="heading-medium">Ordering</h2>
      <p>
        To place an order with paulblanca.nl you have to go through the
        following steps:
      </p>

      <ol>
        <li>Select a <strong>size</strong> (30x40, 40x50, 100x120 cm).</li>
        <li>
          Select a <strong>print finishing</strong>: none, dibond or plexiglass.
        </li>
        <li>Click on the button "<strong>Buy photo by e-mail</strong>".</li>
        <li>
          <p>
            Your email program will open with a new email created and
            <strong>prefilled</strong>
            with text.
          </p>
          <responsive-image :image="image" />
        </li>
        <li>
          <p>
            Within a day you'll receive a reply which will contain:
          </p>
          <ul>
            <li>Payment request.</li>
            <li>Price including shipping costs.</li>
            <li>Estimated date of delivery.</li>
          </ul>

          <p>
            You can pay with the following
            <nuxt-link to="/payment-methods"> payment methods</nuxt-link>.
          </p>
        </li>
      </ol>
    </div>
  </article>
</template>

<script>
export default {
  data() {
    return {
      image: {
        width: 504,
        height: 619,
        filename: 'buy-photo-by-email-500w',
        type: 'jpg',
        alt: '',
      },
    }
  },
}
</script>
