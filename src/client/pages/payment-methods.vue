<template>
  <article class="center-content">
    <h1 class="heading-large">Payment Methods</h1>
    <div class="body rich-text">
      <p>
        With paulblanca.nl all payments are processed by
        <a
          href="https://www.mollie.com/en/consumers"
          rel="noopener noreferrer"
          target="_blank"
          >Mollie</a
        >. Payments can be done in different ways:
      </p>

      <ul>
        <li>
          <a
            href="https://www.ideal.nl/en/consumers/"
            rel="noopener noreferrer"
            target="_blank"
            title="View more information about iDEAL at ideal.nl"
            aria-label="View more information about iDEAL at ideal.nl"
            >iDEAL</a
          >
        </li>
        <li>
          <a
            href="https://www.apple.com/apple-pay/"
            rel="noopener noreferrer"
            target="_blank"
            title="View more information about Apple Pay at apple.com"
            aria-label="View more information about Apple Pay at apple.com"
            >Apple Pay</a
          >
        </li>
        <li>
          <a
            href="https://mastercard.com/"
            rel="noopener noreferrer"
            target="_blank"
            title="View more information about Mastercard at mastercard.com"
            aria-label="View more information about Mastercard at mastercard.com"
            >Mastercard</a
          >
        </li>
        <li>
          <a
            href="https://visa.com/"
            rel="noopener noreferrer"
            target="_blank"
            title="View more information about VISA at visa.com"
            aria-label="View more information about VISA at visa.com"
            >VISA</a
          >
        </li>
        <li>
          <a
            href="https://americanexpress.com/"
            rel="noopener noreferrer"
            target="_blank"
            title="View more information about American Express at americanexpress.com"
            aria-label="View more information about American Express at americanexpress.com"
            >American Express</a
          >
        </li>
        <li>
          <a
            href="https://paypal.com/"
            rel="noopener noreferrer"
            target="_blank"
            title="View more information about PayPal at paypal"
            aria-label="View more information about PayPal at paypal.com"
            >PayPal</a
          >
        </li>
        <li>
          <a
            href="https://www.klarna.com/sofort/"
            rel="noopener noreferrer"
            target="_blank"
            title="View more information about SOFORT Banking at klarna.com"
            aria-label="View more information about SOFORT Banking at klarna.com"
            >SOFORT Banking</a
          >
        </li>
      </ul>
    </div>
  </article>
</template>

<script>
import setCanonicalForSeo from '../lib/set-canonical-for-seo.js'

export default {
  head() {
    return {
      title: 'Payment Methods',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'List of all the payment methods available when you buy an artwork from artist and photographer Paul Blanca.',
        },
      ],
      ...setCanonicalForSeo(this.$route),
    }
  },
}
</script>
