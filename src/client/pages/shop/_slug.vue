<template>
  <div class="center-content center-content--large">
    <article class="photo-detail">
      <nuxt-link to="/shop/" class="photo-detail__back-link">
        <responsive-image :image="product.image" class="photo-detail__image" />
      </nuxt-link>

      <div class="photo-detail__content">
        <h1 class="photo-detail__heading heading-large">{{ product.title }}</h1>
        <p class="body">
          Every month Paul Blanca creates a new photo. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Cum id fugiunt, re eadem defendunt,
          quae Peripatetici, verba. Quid, si non sensus modo ei sit datus, verum
          etiam animus hominis.
        </p>

        <fieldset class="radio-group">
          <legend class="radio-group__title heading-small">Size</legend>
          <div class="radio-group__container">
            <div class="radio-group__item">
              <input
                id="30x40"
                v-model="size"
                class="radio-group__radio"
                name="size"
                type="radio"
                value="30x40cm"
              />
              <label for="30x40" class="radio-group__label">30x40 cm</label>
            </div>
            <div class="radio-group__item">
              <input
                id="40x50"
                v-model="size"
                class="radio-group__radio"
                name="size"
                type="radio"
                value="40x50cm"
              />
              <label for="40x50" class="radio-group__label">40x50 cm</label>
            </div>
            <div class="radio-group__item">
              <input
                id="100x120"
                v-model="size"
                class="radio-group__radio"
                name="size"
                type="radio"
                value="100x120cm"
              />
              <label for="100x120" class="radio-group__label">100x120 cm</label>
            </div>
          </div>
        </fieldset>

        <fieldset class="radio-group">
          <legend class="radio-group__title heading-small">
            Print finishing
          </legend>
          <div class="radio-group__container">
            <div class="radio-group__item">
              <input
                id="none"
                v-model="finishing"
                class="radio-group__radio"
                name="finishing"
                type="radio"
                value="none"
              />
              <label class="radio-group__label" for="none">None</label>
            </div>
            <div class="radio-group__item">
              <input
                id="dibond"
                v-model="finishing"
                class="radio-group__radio"
                name="finishing"
                type="radio"
                value="dibond"
              />
              <label class="radio-group__label" for="dibond">Dibond</label>
            </div>
            <div class="radio-group__item">
              <input
                id="plexiglass"
                v-model="finishing"
                class="radio-group__radio"
                name="finishing"
                type="radio"
                value="plexiglass"
              />
              <label class="radio-group__label" for="plexiglass"
                >Plexiglass</label
              >
            </div>
          </div>
        </fieldset>

        <div>Edition: {{ getEdition }}</div>
        <div class="photo-detail__price">{{ formatter(getSelectedPrice) }}</div>

        <button class="button button--order">Buy photo via email</button>

        <section>
          <h2 class="heading-medium">Prints</h2>

          <h3>Plexiglass</h3>
          <p>
            The highest quality to preserve a photo as leading museums and
            galleries do.
          </p>
          <dl class="photo-info body">
            <dt class="photo-info__term">Print</dt>
            <dd class="photo-info__description">Durst Lambda photo print</dd>
            <dt class="photo-info__term">Material</dt>
            <dd class="photo-info__description">Semi-Matt photo paper</dd>
            <dt class="photo-info__term">Photo finishing</dt>
            <dd class="photo-info__description">
              Glued behind 3mm clear plexiglass: on 3mm Dibond
            </dd>
            <dt class="photo-info__term">Sizes</dt>
            <dd class="photo-info__description">
              30 x 40 cm<br />
              40 x 50 cm<br />
              100 x 120 cm
            </dd>
          </dl>
        </section>

        <section>
          <h2 class="heading-medium">Verification</h2>
          <p class="body">
            Each photo includes a certificate of authenticity. It is an official
            document that proves the authenticity of the photo. You'll receive:
          </p>

          <ul class="body">
            <li>
              Signature and current photo in the edition written on the front of
              the photo.
            </li>
            <li>Holographic foil on the certificate.</li>
            <li>A small print of the photo on the certificate.</li>
            <li>Current photo in the edition printed on the certificate.</li>
            <li>
              A print ID (a uniquely generated code) written on the back of the
              photo and printed in the certificate. This is to link the print
              and the certificate together.
            </li>
          </ul>

          <p class="body">
            Eyes on Photo Art and Paul Blanca keep track of the number of
            prints. Contact
            <a href="mailto:info@eyesonphotoart.nl">info@eyesonphotoart.nl</a>
            or <a href="mailto:info@paulblanca.nl">info@paulblanca.nl</a> for
            verification.
          </p>
        </section>

        <hr class="photo-detail__divider" />
      </div>
    </article>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ResponsiveImage from '../../components/responsive-image/responsive-image.vue'

export default {
  components: {
    ResponsiveImage,
  },
  data() {
    return {
      size: '40x50cm',
      finishing: 'dibond',
      edition: {
        '30x40cm': '1 of 10',
        '40x50cm': '1 of 10',
        '100x120cm': '1 of 10',
      },
      prices: {
        '30x40cm': {
          none: 1900,
          dibond: 2800,
          plexiglass: 3400,
        },
        '40x50cm': {
          none: 3800,
          dibond: 4000,
          plexiglass: 4200,
        },
        '100x120cm': {
          none: 8000,
          dibond: 8200,
          plexiglass: 8400,
        },
      },
    }
  },
  computed: {
    ...mapGetters(['shopProductList']),
    product() {
      return this.shopProductList.find(
        (product) => product.slug === this.$route.params.slug
      )
    },
    getSelectedPrice() {
      return this.prices[this.size][this.finishing]
    },
    getEdition() {
      return this.edition[this.size]
    },
  },
  methods: {
    ...mapActions(['addProductToCart']),
    formatter(amount) {
      const price = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'EUR',
      })
      return price.format(amount)
    },
  },
}
</script>

<style>
.radio-group {
  margin-bottom: 36px;
  border: none;
}

.radio-group__container {
  display: flex;
}

.radio-group__item:not(:last-child) {
  margin-right: 12px;
}

.radio-group__title {
  width: 100%;
}

.radio-group__radio {
  display: none;
}

.radio-group__radio:checked + label {
  color: white;
  background: black;
}

.radio-group__label {
  display: inline-block;
  padding: 12px 8px;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
  border: 1px solid black;
}

.photo-detail__price {
  margin-bottom: 48px;
  font-weight: 300;
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
  padding: 24px;
  background-color: #e6e6e6;
}

.photo-info__description:not(:last-child) {
  margin-bottom: 12px;
}

/* Styling of HTML elements on the photo detail page */
.photo-detail__content a:not([class]) {
  font-weight: 600;
}

.photo-detail__content h2 {
  margin-top: 36px;
}

.photo-detail__content p {
  margin-bottom: 36px;
}

.photo-detail__content ul {
  list-style: square;
}

.photo-detail__content ul,
.photo-detail__content ol {
  margin-bottom: 36px;
  padding-left: 24px;
}

.photo-detail__content li:not(:last-child) {
  margin-bottom: 8px;
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

@media (min-width: 900px) {
  .photo-detail {
    display: flex;
    justify-content: space-between;
  }

  .photo-detail__content {
    padding-top: 12px;
  }

  .photo-detail__image {
    margin-bottom: 0;
  }

  .photo-detail__back-link {
    width: 55%;
    align-self: flex-start;
  }

  .photo-detail__content {
    width: 40%;
  }
}
</style>
