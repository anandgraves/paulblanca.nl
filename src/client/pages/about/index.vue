<template>
  <article class="about center-content">
    <h1 class="heading-large">About</h1>

    <section class="body rich-text">
      <p>
        Paul Blanca (1958) is a Dutch self-taught photographer who started with
        a Canon F1 and later switched to a 6x6 cm Haselblad camera. In the 80s
        he created a series of violent self-portraits inspired by Robert
        Mapplethorpe (1946 - 1989) and Andres Serrano. Mapplethorpe introduced
        Blanca into the art world to artists like Grace Jones and Keith Haring
        stating “Paul Blanca is my only competitor”. Mapplethorpe's favourite
        was Blanca's self-portrait ‘Mother and Son’.
      </p>

      <p>
        Hans van Maanen and Erwin Olaf call Paul Blanca the photographer of
        emotion. That ties in with his work. His self-portraits run like a
        thread through his overall work. For some things you can't ask a model.
        For example, to hit a nail through someone's hand. And like the
        self-portrait Mickey Mouse. In which a smiling Mickey Mouse is carved
        into his back with a thumb up.
      </p>

      <p>
        For his series ‘Par la Pluie des Femmes’ women were captured in tears by
        thinking of their most traumatic experience. When he lived in Spain for
        2 years, he stood with his camera at the front of the Spanish
        bullfighting arena. This resulted in the portfolio Sangre de Toro (Blood
        of the Bull): silk-screen prints with Bull’s blood.
      </p>

      <p>
        In the beginning of the 90s he photographed the facial expression of
        speedball hookers for the series ‘Wit en Bruin’. Speedball is a very
        dangerous mixture of cocaine with heroin or morphine and has a
        substantial risk of overdose.
      </p>

      <p>
        In the series ‘Deformation’ he was inspired by Rob Leer‘s SM scene.
        Models mutulated by fishline and hanging in the air, supported by the
        same fishline. This series was made for Amsterdam International Fashion
        Week (AIFW), in collaboration with fashion designer Hester Slaman, and
        exposed in Apart Gallery Amsterdam.
      </p>

      <p>
        With the series ‘Kristal’ and ‘Mi Matties’ he had a double exhibition at
        Witzenhausen Gallery in 2008. Kristal is a series about the sweet and
        the bitter in relation with women. Presented in Witzenhausen Gallery
        Amsterdam in 2008. Mi Matties (my friends) is a series made in one of
        the neighborhoods of old Amsterdam. The portraits show young men who are
        presenting themselves as a group, sort of a gang.
      </p>

      <p>
        In 2014 he created a self-portrait ‘Mother and Son’, 32 years after the
        first self-portrait, where he carries his mother, just like he carried
        her to bed for 4 years because she couldn‘t walk.
      </p>
    </section>

    <section class="body rich-text">
      <h2 class="heading-medium">Curriculum Vitae</h2>
      <p>
        View
        <nuxt-link to="/about/curriculum-vitae/">
          Paul Blanca‘s Curriculum Vitae </nuxt-link
        >&nbsp; from 1981 until present.
      </p>
    </section>
  </article>
</template>

<script>
import setCanonicalForSeo from '../../lib/set-canonical-for-seo.js'

export default {
  head() {
    return {
      title: 'About',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Biography of artist and photographer Paul Blanca.',
        },
      ],
      ...setCanonicalForSeo(this.$route),
    }
  },
}
</script>

<style>
.about p {
  max-width: 64ch;
}
</style>
