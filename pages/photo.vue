<template>
  <div class="center-content center-content--large">
    <article class="photo-detail">
      <figure class="photo-detail__image">
        <img
          src="/images/featured_photo.jpg"
          loading="lazy"
          alt="Snow White Giullia by Paul Blanca"
        />
      </figure>

      <div class="photo-detail__content">
        <h1 class="photo-detail__heading heading-large">Snow White Giullia</h1>
        <p class="photo-detail__body body">
          Every month Paul Blanca creates a new photo. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Cum id fugiunt, re eadem defendunt,
          quae Peripatetici, verba. Quid, si non sensus modo ei sit datus, verum
          etiam animus hominis.
        </p>

        <dl class="photo-info">
          <dt class="photo-info__term">Title</dt>
          <dd class="photo-info__description">Consectetur adipiscing elit</dd>
          <dt class="photo-info__term">Subtitle</dt>
          <dd class="photo-info__description">8</dd>
          <dt class="photo-info__term">Medium</dt>
          <dd class="photo-info__description">Lambda print</dd>
          <dt class="photo-info__term">Dimensions</dt>
          <dd class="photo-info__description">42x40cm</dd>
          <dt class="photo-info__term">Date</dt>
          <dd class="photo-info__description">january 2020</dd>
          <dt class="photo-info__term">Edition</dt>
          <dd class="photo-info__description">25</dd>
        </dl>

        <hr class="photo-detail__divider" />

        <p class="price">€400</p>

        <p class="photo-detail__shipping body">
          Free (international) shipping.
        </p>

        <div class="order">
          <button @click.once="addToCart" class="button--order button">
            Add to Cart
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

.photo-detail__image {
  margin-bottom: 24px;
}

.photo-info {
  margin-bottom: 12px;
}

.photo-info__description {
  margin-bottom: 12px;
}

.photo-detail__body {
  margin-bottom: 24px;
}

.photo-detail__shipping {
  margin-bottom: 36px;
}

.photo-detail__divider {
  margin-bottom: 24px;
}

@media (min-width: 500px) {
  .photo-info {
    display: flex;
    flex-wrap: wrap;
  }

  .photo-info__term {
    width: 15%;
  }

  .photo-info__description {
    width: 80%;
  }
}

@media (min-width: 1160px) {
  .photo-detail {
    display: flex;
    justify-content: space-between;
  }

  .photo-detail__content {
    padding-top: 12px;
  }

  .photo-detail__image {
    width: 55%;
  }

  .photo-detail__content {
    width: 35%;
  }

  .photo-info__term {
    width: 25%;
  }

  .photo-info__description {
    width: 70%;
  }
}
</style>
