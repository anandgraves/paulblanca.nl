<template>
  <div class="center-content center-content--large">
    <article class="photo-detail">
      <nuxt-link to="/shop/" class="photo-detail__back-link">
        <responsive-image :image="product.image" class="photo-detail__image" />
      </nuxt-link>

      <div class="photo-detail__content rich-text">
        <h1 class="photo-detail__heading heading-large">{{ product.title }}</h1>
        <div class="body" v-html="product.description"></div>

        <div class="photo-detail__action">
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
                <label for="30x40" class="radio-group__label">30 x 40 cm</label>
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
                <label for="40x50" class="radio-group__label">40 x 50 cm</label>
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
                <label for="100x120" class="radio-group__label"
                  >100 x 120 cm</label
                >
              </div>
            </div>
          </fieldset>

          <fieldset class="radio-group">
            <legend class="radio-group__title">
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

          <div class="photo-detail__price">
            {{ moneyFormat(getSelectedPrice) }}
          </div>

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
            <span class="euro-icon__text">Buy photo via email</span>
          </a>
        </div>

        <hr class="photo-detail__divider" />

        <section>
          <h2 class="photo-detail__heading heading-medium">Details</h2>

          <table class="table-data body">
            <tr v-if="product.series">
              <td class="table-data__cell">Series</td>
              <td class="table-data__cell">{{ product.series }}</td>
            </tr>
            <tr>
              <td class="table-data__cell">Edition</td>
              <td class="table-data__cell">{{ getEdition }}</td>
            </tr>
            <tr>
              <td class="table-data__cell">Year</td>
              <td class="table-data__cell">{{ product.year }}</td>
            </tr>
            <tr>
              <td class="table-data__cell">Signature</td>
              <td class="table-data__cell">
                Signed in silver ink in the lower right with signature and
                edition number.
              </td>
            </tr>
          </table>
        </section>

        <section>
          <h2 class="photo-detail__heading heading-medium">Prints</h2>

          <p class="body">
            All photos can be purchased for the sizes 30 x 40 cm, 40 x 50 cm and
            100 x 120 cm.
            <nuxt-link to="/print-finishing"
              >View all the print finishing options</nuxt-link
            >
            .
          </p>

          <h2 class="photo-detail__heading heading-medium">Verification</h2>
          <p class="body">
            Each photo includes a certificate of authenticity.
            <nuxt-link to="/verification">Read more</nuxt-link>
            what the certificate contains and how authenticity is ensured.
          </p>
        </section>
      </div>
    </article>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import iconEuro from '../../components/icons/icon-euro.vue'
import ResponsiveImage from '../../components/responsive-image/responsive-image.vue'

export default {
  components: {
    ResponsiveImage,
    iconEuro,
  },
  data() {
    return {
      size: '40x50cm',
      finishing: 'dibond',
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
      return this.product.prices[this.size][this.finishing]
    },
    getEdition() {
      return this.product.edition[this.size]
    },
    orderViaEmail() {
      const subject = encodeURIComponent(`Order "${this.product.title}"`)
      const body = encodeURIComponent(
        `I would like to order a photo on paulblanca.nl.

Title: ${this.product.title}
Size: ${this.size}
Finishing: ${this.finishing}
Price: ${this.moneyFormat(this.getSelectedPrice)} (includes VAT)
Quantity: 1

You can ship the photo to:
(All fields are required to enter, except the optional ones)
Full Name:
Company (optional):
VAT number (optional):
Country:
Address 1:
Address 2:
Postal code:
City:
Phone number:
This is a residential address: [yes/no]

Can you send me an online invoice?\n\n\n`
      )
      return `mailto:info@paulblanca?subject=${subject}&body=${body}`
    },
  },
  methods: {
    ...mapActions(['addProductToCart']),
    moneyFormat(amount) {
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
.table-data {
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
}

.table-data__cell {
  width: 200px;
  padding: 12px;
}

.table-data__cell:first-child {
  text-align: right;
  font-weight: 500;
}

.product-details__details-row {
  margin-bottom: 12px;
}

.product-detail__details-term {
  margin-right: 12px;
  font-weight: 500;
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
}

.radio-group__item:not(:last-child) {
  margin-right: 12px;
}

.radio-group__title {
  width: 100%;
  font-size: 1.125rem;
  margin-bottom: 12px;
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

.radio-group__radio:checked + label {
  color: white;
  background: black;
}

.radio-group__radio:hover + label,
.radio-group__radio:focus + label,
.radio-group__radio:active + label {
  background-color: rgb(61, 63, 65);
  color: white;
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
  margin-bottom: 48px;
  font-weight: 300;
  font-size: 1.3rem;
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

.photo-detail__button {
  margin-bottom: 48px;
}

.photo-info {
  max-width: 300px;
  margin-bottom: 12px;
  padding: 24px;
  text-align: left;
  background-color: #e6e6e6;
}

.photo-info__description:not(:last-child) {
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
