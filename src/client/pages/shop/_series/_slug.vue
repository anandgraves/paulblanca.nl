<template>
  <article class="photo-detail">
    <nuxt-link
      :to="`/shop/${getProductSeriesSlug}`"
      class="photo-detail__back-link"
    >
      <responsive-image :image="product.image" class="photo-detail__image" />
    </nuxt-link>

    <div class="photo-detail__content">
      <nuxt-link
        :to="`/shop/${getProductSeriesSlug}`"
        class="photo-detail__link-back"
      >
        <icon-base
          class="photo-detail__link-back-icon"
          width="24"
          height="24"
          viewbox="8 0 24 24"
          icon-name="back"
        >
          <icon-back />
        </icon-base>
        <span>Back to {{ getProductSeries }}</span></nuxt-link
      >
      <h1 class="photo-detail__title heading-large">
        {{ productTitle }}
      </h1>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div class="body rich-text" v-html="product.description"></div>

      <div class="photo-detail__selector">
        <fieldset class="radio-group">
          <legend class="radio-group__title">Size</legend>
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
          <legend class="radio-group__title">Finish</legend>
          <div class="radio-group__container">
            <div class="radio-group__item">
              <input
                id="dibond"
                v-model="finish"
                class="radio-group__radio"
                name="finish"
                type="radio"
                value="dibond"
              />
              <label class="radio-group__label" for="dibond">Dibond</label>
            </div>
            <div class="radio-group__item">
              <input
                id="plexiglass"
                v-model="finish"
                class="radio-group__radio"
                name="finish"
                type="radio"
                value="plexiglass"
              />
              <label class="radio-group__label" for="plexiglass"
                >Plexiglass</label
              >
            </div>
            <div class="radio-group__item">
              <input
                id="trulife"
                v-model="finish"
                class="radio-group__radio"
                name="finish"
                type="radio"
                value="trulife"
              />
              <label class="radio-group__label" for="trulife"
                >TruLife<sup>TM</sup> Plexiglass</label
              >
            </div>
          </div>
        </fieldset>
      </div>

      <div class="photo-detail__price">
        {{ moneyFormat(getSelectedPrice) }}
        <span class="body-small">(including VAT)</span>
      </div>

      <delivery-info />

      <a
        :href="orderViaEmail"
        class="photo-detail__button button button--order"
        @click="orderViaEmail"
      >
        <icon-base
          width="24"
          height="24"
          viewbox="0 0 576 576"
          icon-name="euro"
        >
          <icon-euro />
        </icon-base>
        <span class="euro-icon__text">Buy photo by email</span>
      </a>

      <nuxt-link to="/order-and-shipping" class="photo-detail__link-how-to-buy">
        How do I buy a photo?
      </nuxt-link>

      <nuxt-link to="/payment-methods" class="photo-detail__link-payment-icons">
        <payment-icons class="photo-detail__payment-icons" />
      </nuxt-link>

      <hr class="photo-detail__divider" />

      <section>
        <h2 class="photo-detail__heading heading-medium">Details</h2>

        <table class="table-data table-data--center body">
          <caption class="sr-only">
            Details of the photo
            {{
              product.title
            }}
          </caption>
          <tbody>
            <tr v-if="product.series">
              <th class="table-data__cell">Series</th>
              <td class="table-data__cell">{{ product.series }}</td>
            </tr>
            <tr>
              <th class="table-data__cell">Edition</th>
              <td class="table-data__cell">
                {{ getEdition }}
                <div>incl. 2 Artist's Proof</div>
              </td>
            </tr>
            <tr>
              <th class="table-data__cell">Year</th>
              <td class="table-data__cell">{{ product.year }}</td>
            </tr>
            <tr>
              <th class="table-data__cell">Signature</th>
              <td class="table-data__cell">
                Signed in silver ink in the lower right with signature and
                edition number.
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section class="rich-text">
        <h2 class="photo-detail__heading heading-medium">Finish</h2>

        <p class="body">
          All photos can be purchased for the sizes 30x40 cm, 40x50 cm and
          100x120 cm.
          <nuxt-link to="/finish">View all the finish options</nuxt-link>.
        </p>
      </section>

      <section class="rich-text">
        <h2 class="photo-detail__heading heading-medium">Certificate</h2>
        <p class="body">
          Each photo includes a certificate of authenticity.
          <nuxt-link to="/certificate">Read more</nuxt-link>
          what the certificate contains and how authenticity is ensured.
        </p>
      </section>
    </div>
  </article>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      size: '40x50cm',
      finish: 'plexiglass',
    }
  },
  computed: {
    ...mapGetters(['shopProductList', 'seriesPageIndex']),
    product() {
      return this.shopProductList.find(
        (product) => product.slug === this.$route.params.slug
      )
    },
    getProductSeries() {
      return `${this.product.series}, ${this.product.year}`
    },
    getProductSeriesSlug() {
      return this.product.seriesSlug
    },
    getSelectedPrice() {
      return this.product.prices[this.size][this.finish]
    },
    getEdition() {
      return this.product.edition[this.size]
    },
    productTitle() {
      return `${this.product.titleDetail}, ${this.product.year}`
    },
    orderViaEmail() {
      const subject = encodeURIComponent(`Order ${this.productTitle}`)
      const body = encodeURIComponent(
        `I would like to order a photo on paulblanca.nl.

Title: ${this.productTitle}
Size: ${this.size}
Finish: ${this.finish}
Price: ${this.moneyFormat(
          this.getSelectedPrice
        )} (includes VAT and shipping costs)
Quantity: 1

You can ship the photo to (all fields are required):
Full Name:
Delivery address
  Address 1:
  Address 2:
  Postal code:
  City/State:
  Country:
Phone number:
This is a residential address: [yes/no]
If you want to order for a company, then also enter the following:
Company name:
VAT number:

Billing address
  Address 1:
  Address 2:
  Postal code:
  City/State:
  Country:`
      )
      return `mailto:info@paulblanca?subject=${subject}&body=${body}`
    },
  },

  methods: {
    moneyFormat(amount) {
      const price = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'EUR',
      })
      return price.format(amount)
    },
  },

  head() {
    const seriesHead = this.seriesPageIndex.filter(
      (serie) => serie.slug === this.$route.params.series
    )
    return {
      title: `${this.product.titleDetail} ${this.product.year}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: seriesHead[0].head.description,
        },
      ],
    }
  },
}
</script>

<style>
.photo-detail__link-back {
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  color: black;
  text-decoration: none;
  font-weight: 600;
}

.photo-detail__link-back:hover {
  color: rgb(61, 63, 65);
}

.photo-detail__content .photo-detail__link-back-icon {
  margin-bottom: 0;
}

.photo-detail__link-how-to-buy {
  display: block;
  text-align: center;
  color: black;
}

.photo-detail .photo-detail__button {
  width: 100%;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 24px;
}

.photo-detail__link-payment-icons {
  display: block;
}

.photo-detail__content > * {
  margin-bottom: 48px;
}

.photo-detail__delivery-icon {
  margin-top: 6px;
}

.euro-icon__text {
  margin-left: 12px;
}

.radio-group {
  margin-bottom: 48px;
  border: none;
}

.radio-group__container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.radio-group__item:nth-child(-n + 2) {
  margin-bottom: 12px;
}

.radio-group__item:not(:last-child) {
  margin-right: 12px;
}

.radio-group__title {
  width: 100%;
  margin-bottom: 12px;
  text-transform: uppercase;
  text-align: center;
  font-size: 1.125rem;
}

.radio-group__radio {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}

.radio-group__radio:checked + label,
.radio-group__radio:focus + label,
.radio-group__radio:active + label,
.radio-group__radio:hover + label {
  color: white;
  background-color: black;
}

.radio-group__label {
  display: inline-block;
  padding: 12px 10px;
  font-size: 1.125rem;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
  border: 1px solid black;
}

.photo-detail__action {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.photo-detail__heading {
  text-align: center;
}

.photo-detail__price {
  font-weight: 400;
  font-size: 1.3rem;
  text-align: center;
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

@media (min-width: 447px) {
  .radio-group__item:nth-child(-n + 2) {
    margin-bottom: 0;
  }
}

@media (min-width: 900px) {
  .photo-detail {
    display: flex;
    justify-content: space-between;
  }

  .photo-detail__button {
    max-width: none;
    width: 100%;
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
