<template>
  <div class="content">
    <p>Paul Blanca, artist and photographer, passed away at the age of 62 on October 14, 2021.</p>
    <figure>
      <img src="~/assets/paul-blanca-1958-2021.jpg" alt="Portrait of Paul Blanca by Koos Breukel">
      <figcaption>Photo by Koos Breukel</figcaption>
    </figure>

    <p class="contact-details"><a href="mailto:info@paulblanca.nl">info@paulblanca.nl</a></p>
  </div>
</template>

<script>

export default {
}
</script>

<style>
@import '../components/app-core/settings.css';
.contact-details {
  text-decoration: underline;
  text-align: center;
}

.contact-details a {
  color: black;
}

p {
  font-size: 1.1rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

img {
  max-width: 100%;
  border: 24px solid black;
  padding: 48px;
  max-height: 700px;
}

figcaption {
  font-size: .9rem;
  margin-top: 10px;
  font-style: italic;
  text-align: center;
}
</style>
