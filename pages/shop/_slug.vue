<template>
  <div class="center-content center-content--large">
    <article class="photo-detail">
      <figure class="photo-detail__image">
        <img
          :src="product.thumbnailUrl"
          loading="lazy"
          alt="Snow White Giullia by Paul Blanca"
        />
      </figure>

      <div class="photo-detail__content">
        <h1 class="photo-detail__heading heading-large">{{ product.title }}</h1>
        <p class="body">
          Every month Paul Blanca creates a new photo. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Cum id fugiunt, re eadem defendunt,
          quae Peripatetici, verba. Quid, si non sensus modo ei sit datus, verum
          etiam animus hominis.
        </p>

        <dl class="photo-info body">
          <dt class="photo-info__term">Title</dt>
          <dd class="photo-info__description">{{ product.title }}</dd>
          <dt class="photo-info__term">Subtitle</dt>
          <dd class="photo-info__description">{{ product.subtitle }}</dd>
          <dt class="photo-info__term">Medium</dt>
          <dd class="photo-info__description">{{ product.medium }}</dd>
          <dt class="photo-info__term">Dimensions</dt>
          <dd class="photo-info__description">{{ product.dimensions }}</dd>
          <dt class="photo-info__term">Edition</dt>
          <dd class="photo-info__description">{{ product.edition }}</dd>
        </dl>

        <hr class="photo-detail__divider" />

        <p class="photo-detail__price">€550</p>

        <p class="photo-detail__body body">
          Every photo includes a signed certificate of authenticity.
        </p>

        <div class="order">
          <button @click="addProductToCart(uuid)" class="button--order button">
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['shopProductList']),
    test() {
      return this.$route.params.slug
    },
    product() {
      return this.shopProductList.find(
        product => product.slug === this.$route.params.slug
      )
    }
  }
}
</script>

<style>
.photo-detail__price {
  margin-bottom: 24px;
  font-family: 'Cooper Hewitt';
  font-weight: 400;
  line-height: 1;
  font-size: 1.2rem; /* 21.6px */
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

.photo-detail__heading {
  margin-bottom: 24px;
}

.photo-detail__body {
  margin-bottom: 36px;
}

.photo-detail__shipping {
  margin-bottom: 36px;
}

.photo-detail__divider {
  margin-bottom: 24px;
}

.photo-info {
  margin-bottom: 12px;
}

.photo-info__description {
  margin-bottom: 12px;
}

@media (min-width: 500px) {
  .photo-info {
    display: flex;
    flex-wrap: wrap;
  }

  .photo-info__term {
    width: 125px;
  }

  .photo-info__description {
    width: calc(100% - 125px);
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
}
</style>
