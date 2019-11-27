<template>
  <div class="center-content center-content--large">
    <article class="photo-detail">
      <figure class="photo-detail__image">
        <img src="/images/featured_photo.png" alt="" />
      </figure>

      <div class="photo-detail__content">
        <h1 class="heading-large">Snow White Giullia - Kristal</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum id
          fugiunt, re eadem defendunt, quae Peripatetici, verba. Quid, si non
          sensus modo ei sit datus, verum etiam animus hominis.
        </p>
        <p>
          <strong>Title</strong> Consectetur adipiscing elit<br />
          <strong>Subtitle</strong> 8<br />
          <strong>Medium</strong> Lambda print<br />
          <strong>Year</strong> 2019<br />
          <strong>Edition</strong> 25
        </p>
        <p class="price">€400</p>

        <p>Free international shipping.</p>

        <div class="order">
          <button @click.once="addToCart" class="button--order button">
            Add Photo to Cart
          </button>
        </div>
      </div>
    </article>
  </div>
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
  font-family: 'Cooper Hewitt';
  font-weight: 400;
  line-height: 1;
  font-size: 1.2rem;
}

.order {
  margin-bottom: 12px;
}

.photos-remaining {
  margin-bottom: 32px;
  line-height: 1;
  font-size: 1.2rem;
}

@media (min-width: 800px) {
  .photo-detail {
    display: flex;
    justify-content: space-between;
  }

  .photo-detail__image {
    width: 50%;
  }

  .photo-detail__content {
    width: 45%;
  }
}
</style>
