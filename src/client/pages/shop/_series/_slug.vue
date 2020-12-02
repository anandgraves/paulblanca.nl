<template>
  <article class="photo-detail">
    <nuxt-link :to="productSlug" class="photo-detail__back-link">
      <responsive-image :image="product.image" class="photo-detail__image" />
    </nuxt-link>

    <div class="photo-detail__content">
      <nuxt-link :to="productSlug" class="photo-detail__link-back body">
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

      <table class="photo-detail__table table-data table-data--center body">
        <caption class="sr-only">
          Details of the photo print
          {{
            product.title
          }}
        </caption>
        <tbody>
          <tr>
            <th class="table-data__head table-data__cell">Edition</th>
            <td class="table-data__cell">
              {{ getEdition }}
              <div>incl. 2 Artist Proof</div>
            </td>
          </tr>
          <tr v-if="product.series">
            <th class="table-data__head table-data__cell">Series</th>
            <td class="table-data__cell">{{ product.series }}</td>
          </tr>
          <tr>
            <th class="table-data__head table-data__cell">Year</th>
            <td class="table-data__cell">{{ product.year }}</td>
          </tr>
          <tr>
            <th class="table-data__head table-data__cell">Print</th>
            <td class="table-data__cell">Durst Lambda photo print</td>
          </tr>
          <tr>
            <th class="table-data__head table-data__cell">Material</th>
            <td class="table-data__cell">Semi-Matt photo paper</td>
          </tr>
        </tbody>
      </table>

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
          <legend class="radio-group__title">Print Finishing</legend>
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
        <span class="euro-icon__text">Buy photo print by email</span>
      </a>

      <nuxt-link
        :to="pageUrl('order-shipping')"
        class="photo-detail__link-how-to-buy"
      >
        How do I buy a photo print?
      </nuxt-link>

      <nuxt-link
        :to="pageUrl('payment-methods')"
        class="photo-detail__link-payment-icons"
      >
        <payment-icons class="photo-detail__payment-icons" />
      </nuxt-link>

      <hr class="photo-detail__divider" />

      <section class="rich-text">
        <h2 class="photo-detail__heading heading-medium">Print Finishing</h2>

        <p class="body">
          All photo prints can be purchased for the sizes 30x40 cm, 40x50 cm and
          100x120 cm.
          <nuxt-link :to="pageUrl('print-finishing')"
            >Read more about the print finishing options</nuxt-link
          >.
        </p>
      </section>

      <section class="rich-text">
        <h2 class="photo-detail__heading heading-medium">Certificate</h2>
        <p class="body">
          Each photo print includes a certificate of authenticity.
          <nuxt-link :to="pageUrl('certificate')">Read more</nuxt-link>
          what the certificate contains and how authenticity is ensured.
        </p>
      </section>
    </div>
  </article>
</template>

<script>
import { mapGetters } from 'vuex'
import setCanonicalForSeo from '../../../lib/set-canonical-for-seo.js'
import getPageUrl from '../../../lib/get-page-url.js'

export default {
  data() {
    return {
      size: '40x50cm',
      finish: 'plexiglass',
    }
  },
  computed: {
    ...mapGetters(['shopProductList', 'seriesPageIndex']),

    getSeriesDescription() {
      const item = this.seriesPageIndex.find(
        (serie) => serie.slug === this.$route.params.series
      )

      return item.head.description
    },
    product() {
      return this.shopProductList.find(
        (product) => product.slug === this.$route.params.slug
      )
    },
    getProductSeries() {
      return `${this.product.series}`
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
    productSlug() {
      return `/shop/${this.getProductSeriesSlug}/`
    },
    orderViaEmail() {
      const subject = encodeURIComponent(`Order ${this.productTitle}`)
      const body = encodeURIComponent(
        `I would like to order an artwork on paulblanca.nl.

Title: ${this.productTitle}
Size: ${this.size}
Finish: ${this.finish}
Price: ${this.moneyFormat(
          this.getSelectedPrice
        )} (includes VAT and shipping costs)
Quantity: 1

You can ship the artwork to (all fields are required):
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
    pageUrl(query) {
      return getPageUrl(query)
    },
  },

  head() {
    return {
      title: `${this.product.titleDetail} ${this.product.year}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.product.image.alt,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.product.image.alt,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.$cloudinary.image.url(this.product.image.id, {
            crop: 'scale',
            width: 600,
          }),
        },
      ],
      ...setCanonicalForSeo(this.$route),
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
  font-weight: 500;
}

.photo-detail__link-back:hover {
  color: rgb(61, 63, 65);
}

.photo-detail__content .photo-detail__link-back-icon {
  margin-bottom: 0;
}

.photo-detail__title {
  text-align: center;
}

.photo-detail__table.table-data--center .table-data__cell:first-child {
  width: 100px;
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

.photo-detail__image img {
  transform: scale(1.1);
  animation: slightmovement 40s ease-in-out infinite;
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

@keyframes slightmovement {
  0%,
  100% {
    transform: scale(1.1);
  }
  50% {
    transform: scale(1);
  }
}
</style>
