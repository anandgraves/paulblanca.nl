<template>
  <div class="center-content">
    <article class="shopping-cart">
      <h1 class="shopping-cart__heading heading-large">Shopping Cart</h1>

      <p v-if="!cartProducts.length">Please add some products to cart.</p>

      <ul class="shopping-cart__list">
        <li
          v-for="product in cartProducts"
          :key="product.uuid"
          class="shopping-cart__list-item"
        >
          <cart-item
            :uuid="product.uuid"
            :price="product.price"
            :thumbnailUrl="product.thumbnailUrl"
            :title="product.title"
            class="shopping-cart__list-content"
          />
        </li>
      </ul>

      <hr class="shopping-cart__divider" />

      <div class="shopping-cart__subtotal">
        Subtotal €{{ cartProductsSubTotal }}
      </div>

      <div class="shopping-cart__navigation">
        <nuxt-link class="shopping-cart__link-back" to="/"
          >Back to shopping</nuxt-link
        >
        <nuxt-link class="shopping-cart__button-checkout button" to="/order"
          >Continue to Checkout</nuxt-link
        >
      </div>
    </article>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CartItem from '../components/cart-item/cart-item.vue'

export default {
  layout: 'shopping-cart',
  components: {
    CartItem
  },
  computed: {
    ...mapGetters(['cartProducts', 'cartProductsSubTotal'])
  }
}
</script>

<style>
.shopping-cart {
  margin-top: 24px;
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

.shopping-cart__list-item {
  list-style: none;
}

.shopping-cart__title-link {
  text-decoration: none;
}

.shopping-cart__subtitle {
  font-size: 1rem;
  font-weight: 300;
  color: #676768;
}

.shopping-cart__button-remove {
  border: 0;
  background-color: transparent;
  text-decoration: underline;
}

.shopping-cart__button-remove:hover {
  cursor: pointer;
}

.shopping-cart__link-back {
  display: block;
  margin-bottom: 36px;
}

.shopping-cart__navigation {
  text-align: center;
}

.shopping-cart__subtotal {
  margin-bottom: 36px;
  font-size: 1.3rem;
  font-weight: 400;
  text-align: center;
}

@media (min-width: 550px) {
  .shopping-cart__list-content {
    display: flex;
    align-items: center;
  }

  .shopping-cart__navigation {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-align: left;
  }

  .shopping-cart__link-back {
    margin-bottom: 0;
  }

  .shopping-cart__button-checkout {
    margin-left: 24px;
  }

  .shopping-cart__subtotal {
    display: flex;
    justify-content: flex-end;
  }

  .shopping-cart__list-item {
    margin-bottom: 36px;
  }
}
</style>
