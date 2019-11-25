<template>
  <article class="content">
    <h1 class="heading-large">Photo</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum id fugiunt,
      re eadem defendunt, quae Peripatetici, verba. Quid, si non sensus modo ei
      sit datus, verum etiam animus hominis.
    </p>
    <p>
      <strong>Title:</strong> consectetur adipiscing elit<br />
      <strong>Edition:</strong> re eadem defendunt<br />
      <strong>Year:</strong> 2019<br />
      Edition of 20 photos
    </p>
    <p class="price">€ 400</p>
    <p class="photos-remaining">12 photos left</p>

    <div class="order">
      <button @click.once="addToCart" class="button">
        Add photo to cart
      </button>
    </div>

    <p>Order can be shipped internationally.</p>

    <figure>
      <img src="/images/featured_photo.png" alt="" />
    </figure>
  </article>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      uuid: 'c5ea4c0-4067-11e9-8bad-9b1deb4d3b7d'
    }
  },
  methods: {
    // map `this.increment()` to `this.$store.commit('increment')
    ...mapMutations({ add: 'addToCart' }),
    addToCart() {
      this.add(this.uuid)
    }
  }
}
</script>

<style>
.price {
  line-height: 1;
  font-size: 1.5rem;
}

.order {
  margin-bottom: 12px;
}

.photos-remaining {
  margin-bottom: 32px;
  line-height: 1;
  font-size: 1.2rem;
}
</style>
