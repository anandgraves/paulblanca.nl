<template>
  <article class="center-content rich-text">
    <h1 class="heading-large">Certificate</h1>
    <p class="body">Each photo print sold on paulblanca.nl includes:</p>
    <ul class="body">
      <li>Artist‘ signature on the front of the photo print.</li>
      <li>
        Current number in the edition written on the front of the photo print.
      </li>
      <li>Certificate of authenticity.</li>
    </ul>

    <p class="body">
      A certificate of authenticity is an official document that proves the
      authenticity of the photo print. This certificate contains:
    </p>

    <ul class="body">
      <li>Artist‘ signature.</li>
      <li>An embossed seal.</li>
      <li>Photo print details and a small print of the photo.</li>
      <li>
        <strong>ART ID</strong>, a unique generated code located on the back of
        the photo print and on the certificate. This is to link the photo print
        and the certificate together and to uniquely identify the photo print.
      </li>
    </ul>

    <p class="body">
      Contact <a href="mailto:info@paulblanca.nl">info@paulblanca.nl</a> for
      more information or to verify your photo print.
    </p>
  </article>
</template>

<script>
import setCanonicalForSeo from '../lib/set-canonical-for-seo.js'

export default {
  head() {
    return {
      title: 'Certificate of Authenticity (COA)',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'A comprehensive description what the certificate contains when you buy an artwork from Paul Blanca.',
        },
      ],
      ...setCanonicalForSeo(this.$route),
    }
  },
}
</script>
