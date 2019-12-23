<template>
  <article class="cart-item">
    <div class="cart-item__action">
      <button
        @click="removeCartItem(uuid)"
        class="shopping-cart__button-remove"
      >
        Remove
      </button>
    </div>
    <div class="cart-item__thumbnail">
      <nuxt-link to="/photo"
        ><img :src="thumbnailUrl" style="width:80px; height: 80px;" alt="..."
      /></nuxt-link>
    </div>
    <div class="cart-item__title">
      <h2>
        <nuxt-link to="/photo" class="shopping-cart__title-link">{{
          title
        }}</nuxt-link>
      </h2>
      <span class="shopping-cart__subtitle">Edition 1/25<br />42x40cm</span>
    </div>
    <div class="cart-item__quantity form-select">
      <select class="form-select__element">
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
    <div class="cart-item__price">€{{ price }}</div>
  </article>
</template>

<script>
export default {
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
  }
}
</script>

<style>
@import '../app-core/settings.css';

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
  flex-direction: column;
  align-items: center;
}

.cart-item__action {
  margin-bottom: 12px;
  text-align: center;
}

.cart-item__title {
  margin-bottom: 12px;
  text-align: center;
}

.cart-item__thumbnail {
  margin-bottom: 12px;
}

.cart-item__quantity {
  margin-bottom: 12px;
}

.cart-item__price {
  font-size: 1.3rem;
  font-weight: 400;
}

@media (min-width: 500px) {
  .cart-item {
    flex-direction: row;
  }

  .cart-item__quantity {
    margin-right: 48px;
    margin-bottom: 0;
  }

  .cart-item__action {
    margin-right: 24px;
    margin-bottom: 0;
    text-align: left;
  }

  .cart-item__title {
    margin-right: 48px;
    text-align: left;
    font-size: 1.25rem;
    font-weight: 500;
  }
}
</style>
