<template>
  <article class="contact center-content rich-text">
    <h1 class="heading-large">Contact</h1>
    <p class="body">
      You can contact us at
      <a href="mailto:info@paulblanca.nl">info@paulblanca.nl</a>.
    </p>

    <p class="body">
      <a
        href="https://21bits.nl"
        rel="noopener noreferrer"
        target="_blank"
        title="View more information about 21 Bits at 21bits.nl"
        aria-label="View more information about 21 Bits at 21bits.nl"
        >21 Bits</a
      >
      develops and manages paulblanca.nl, manages all payments, shipping and
      customer support in partnership with Paul Blanca.
    </p>

    <p class="body">
      21 Bits<br />
      Keurenplein 41<br />
      UNIT-E6060<br />
      1069 CD Amsterdam<br />
      <a href="mailto:info@21bits.nl">info@21bits.nl</a><br />
      <a href="http://21bits.nl/">21bits.nl</a>
    </p>

    <p class="body">
      KvK number: 78493153<br />
      VAT number: NL003338314B27
    </p>
  </article>
</template>

<script>
import setCanonicalForSeo from '../lib/set-canonical-for-seo.js'

export default {
  head() {
    return {
      title: 'Contact',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Contactdetails for customer support.',
        },
      ],
      ...setCanonicalForSeo(this.$route),
    }
  },
}
</script>
