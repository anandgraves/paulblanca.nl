<template>
  <div>
    <article class="cart-item">
      <div class="cart-item__media">
        <nuxt-link to="/test"
          ><img :src="thumbnailUrl" class="cart-item__image" alt="..."
        /></nuxt-link>
      </div>
      <div class="cart-item__info">
        <div class="cart-item__info-container">
          <div class="cart-item__info-content">
            <h2 class="cart-item__title">{{ title }}</h2>
            <div class="cart-item__subtitle">
              Edition 1/25<br />35.5 x 34 cm
            </div>
          </div>
          <div class="cart-item__quantity form-select">
            <select
              @change="setQuantity(quantity)"
              v-model.number="quantity"
              class="form-select__element"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
            </select>
          </div>
        </div>
      </div>
      <div class="cart-item__price-block">
        <span class="cart-item__price">€{{ priceCalculatedFromQuantity }}</span>
        <button @click="removeProductFromCart(uuid)" class="cart-item__button">
          <delete-icon class="cart-item__icon" />
        </button>
      </div>
    </article>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import DeleteIcon from '../../static/icons/delete.svg'

export default {
  components: { DeleteIcon },
  props: {
    uuid: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    thumbnailUrl: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      quantity: this.$store.getters.cartProductQuantityById(this.uuid)
    }
  },
  computed: {
    priceCalculatedFromQuantity() {
      return this.price * this.quantity
    }
  },
  methods: {
    ...mapActions(['changeQuantityInCart', 'removeProductFromCart']),
    setQuantity(quantity) {
      this.changeQuantityInCart({ uuid: this.uuid, quantity })
    }
  }
}
</script>

<style>
@import '../app-core/settings.css';

.cart-item__button {
  margin-top: -7px;
  margin-left: 12px;
  line-height: 1;
  border: 0;
  background-color: transparent;
  text-decoration: underline;
  align-self: flex-start;
}

.cart-item__button:hover {
  cursor: pointer;
}

.cart-item__icon {
  width: 36px;
  height: 36px;
}

.cart-item__subtitle {
  margin-bottom: 6px;
  font-size: 1rem;
  font-weight: 300;
  color: #676768;
}

.form-select {
  width: 80px;
}

.form-select__element {
  -webkit-appearance: none;
  width: 100%;
  height: 40px;
  padding: 0 40px 0 12px;
  font-family: var(--font-body);
  font-weight: 400;
  border: 1px solid black;
  border-radius: 0;
  cursor: pointer;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-color: transparent;
}

.cart-item {
  display: flex;
}

.cart-item__info {
  margin-left: 12px;
}

.cart-item__info-content {
  width: 100px;
}

.cart-item__title {
  font-size: 1rem;
}

.cart-item__media {
  margin-bottom: 12px;
  align-self: flex-start;
}

.cart-item__image {
  width: 60px;
  height: auto;
  max-width: none;
}

.cart-item__quantity {
  margin-bottom: 12px;
}

.cart-item__price-block {
  display: flex;
  margin-left: auto;
}

.cart-item__price {
  font-size: 1rem;
  font-weight: 400;
}

@media (min-width: 400px) {
  .cart-item {
    flex-direction: row;
    width: 100%;
  }

  .cart-item__quantity {
    margin-bottom: 0;
  }

  .cart-item__title {
    margin-bottom: 0;
    text-align: left;
    font-size: 1.25rem;
    font-weight: 500;
  }

  .cart-item__image {
    width: 80px;
  }

  .cart-item__media {
    margin-bottom: 0;
  }

  .cart-item__price {
    font-size: 1.3rem;
    text-align: right;
  }

  .cart-item__info {
    margin-left: 16px;
  }

  .cart-item__info-content {
    width: 150px;
  }

  .cart-item__button {
    margin-top: -4px;
  }
}

@media (min-width: 500px) {
  .cart-item__info-container {
    display: flex;
  }
}

@media (min-width: 570px) {
  .cart-item__quantity {
    margin-left: 24px;
  }

  .cart-item__title {
    margin-top: 5px;
  }

  .cart-item__price {
    margin-top: 6px;
  }

  .cart-item__price-block {
    margin-left: auto;
  }

  .cart-item__button {
    margin-top: 2px;
  }
}

@media (min-width: 600px) {
  .cart-item__info-content {
    width: 225px;
  }
}
</style>
