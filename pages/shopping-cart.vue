<template>
  <div class="center-content">
    <article class="shopping-cart">
      <h1 class="shopping-cart__heading heading-large">Shopping Cart</h1>

      <ul class="shopping-cart__list">
        <li v-for="product in inCart" :key="product.uuid" class="cart-item">
          <div class="shopping-cart__action">
            <button
              @click="removeCartItem(product.uuid)"
              class="shopping-cart__button-remove"
            >
              Remove
            </button>
          </div>
          <div class="shopping-cart__thumbnail">
            <nuxt-link to="/photo"
              ><img
                :src="product.thumbnailUrl"
                style="width:80px; height: 80px;"
                alt="..."
            /></nuxt-link>
          </div>
          <div class="shopping-cart__title">
            <nuxt-link to="/photo" class="shopping-cart__title-link">{{
              product.title
            }}</nuxt-link
            ><br />
            <span class="shopping-cart__subtitle"
              >Edition 1/25<br />42x40cm</span
            >
          </div>
          <div class="shopping-cart__quantity form-select">
            <select class="form-select__element" name="" id="">
              <option value="1">1</option>
              <option value="1">2</option>
              <option value="1">3</option>
              <option value="1">4</option>
              <option value="1">5</option>
              <option value="1">6</option>
              <option value="1">7</option>
              <option value="1">8</option>
              <option value="1">9</option>
              <option value="1">10</option>
            </select>
          </div>
          <div class="shopping-cart__price">€{{ product.price }}</div>
        </li>
      </ul>

      <hr class="shopping-cart__divider" />

      <div class="shopping-cart__navigation">
        <nuxt-link to="/">Continue shopping</nuxt-link>
        <nuxt-link class="shopping-cart__button-continue button" to="/order"
          >Continue to Checkout</nuxt-link
        >
      </div>
    </article>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['inCart'])
  },
  methods: {
    removeCartItem(id) {
      console.log('remove', id)
    }
  }
}
</script>

<style>
.form-select {
  width: 80px;
}

.form-select__element {
  -webkit-appearance: none;
  width: 100%;
  height: 40px;
  padding: 0 40px 0 12px;
  font-weight: 400;
  border: 1px solid black;
  border-radius: 0;
  cursor: pointer;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-color: transparent;
}

.shopping-cart__quantity {
  margin-right: 48px;
}

.shopping-cart__divider {
  margin-bottom: 48px;
}

.shopping-cart__heading {
  margin-bottom: 32px;
}

.shopping-cart__list {
  margin-bottom: 60px;
}

.shopping-cart__action {
  margin-right: 24px;
}

.shopping-cart__title-link {
  text-decoration: none;
}

.shopping-cart__title {
  margin-right: 48px;
  font-size: 1.25rem;
  font-weight: 500;
}

.shopping-cart__subtitle {
  font-size: 1rem;
  font-weight: 300;
}

.shopping-cart__price {
  font-size: 1.125rem;
  font-weight: 400;
}

.shopping-cart__button-remove {
  border: 0;
  background-color: transparent;
  text-decoration: underline;
}

.shopping-cart__button-remove:hover {
  cursor: pointer;
}

.shopping-cart__button-continue {
  margin-left: 24px;
}

.shopping-cart__thumbnail {
  margin-right: 24px;
}

.cart-item {
  list-style: none;
}

.shopping-cart__navigation {
  display: flex;
  align-items: center;
}

@media (min-width: 1000px) {
  .cart-item {
    display: flex;
    align-items: center;
  }
}
</style>
