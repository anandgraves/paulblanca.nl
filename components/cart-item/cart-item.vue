<template>
  <div>
    <article class="cart-item">
      <div class="cart-item__action">
        <button @click="removeProductFromCart(uuid)" class="cart-item__button">
          <delete-icon class="cart-item__icon" />
        </button>
      </div>
      <div class="cart-item__media">
        <nuxt-link to="/test"
          ><img :src="thumbnailUrl" class="cart-item__image" alt="..."
        /></nuxt-link>
      </div>
      <div class="cart-item__title">
        <h2>{{ title }}</h2>
        <span class="cart-item__subtitle">Edition 1/25<br />35.5 x 34 cm</span>
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
      <div class="cart-item__price">€{{ priceCalculatedFromQuantity }}</div>
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
  border: 0;
  background-color: transparent;
  text-decoration: underline;
}

.cart-item__button:hover {
  cursor: pointer;
}

.cart-item__icon {
  width: 40px;
  height: 40px;
}

.cart-item__subtitle {
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
  /* flex-direction: column; */
  align-items: center;
}

.cart-item__action {
  margin-bottom: 12px;
  text-align: center;
}

.cart-item__title {
  margin-bottom: 12px;
  font-size: 1rem;
  /* text-align: center; */
}

.cart-item__media {
  margin-bottom: 12px;
}

.cart-item__image {
  width: 70px;
  height: auto;
  max-width: none;
}

.cart-item__quantity {
  margin-bottom: 12px;
}

.cart-item__price {
  font-size: 1.3rem;
  font-weight: 400;
}

@media (min-width: 570px) {
  .cart-item {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }

  .cart-item__quantity {
    margin-left: auto;
    margin-bottom: 0;
  }

  .cart-item__action {
    margin-bottom: 0;
    text-align: left;
  }

  .cart-item__title {
    margin-left: 16px;
    margin-bottom: 0;
    text-align: left;
    font-size: 1.25rem;
    font-weight: 500;
  }

  .cart-item__image {
    width: 80px;
  }

  .cart-item__media {
    margin-left: 24px;
    margin-bottom: 0;
  }

  .cart-item__price {
    margin-left: 12px;
    width: 80px;
    text-align: right;
  }
}

@media (min-width: 700px) {
  .cart-item__price {
    margin-left: 18%;
    width: 100px;
  }
}
</style>
