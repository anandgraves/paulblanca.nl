<template>
  <nav class-="app-menu" role="navigation">
    <nuxt-link to="/shop" class="app-menu__link">Shop</nuxt-link>
    <nuxt-link to="/about" class="app-menu__link">About</nuxt-link>
    <nuxt-link to="/contact" class="app-menu__link">Contact</nuxt-link>
    <button
      class="app-menu__button app-menu__link"
      @click="navigateToShoppingCart"
    ></button>
  </nav>
</template>

<script>
export default {
  methods: {
    navigateToShoppingCart() {
      this.$router.replace('/shopping-cart')
    },
  },
}
</script>

<style>
.app-menu {
  text-transform: uppercase;
}

.app-menu__link {
  display: inline-block;
  margin-top: 2px;
  font-family: 'Cooper Hewitt';
  font-weight: 400;
  font-size: 1rem;
  color: #555;
  vertical-align: middle;
  text-decoration: none;
  border-bottom: 2px solid transparent;
}

.app-menu__link:hover,
.app-menu__link:focus {
  border-bottom: 2px solid black;
}

.app-menu__link:not(:first-child) {
  margin-left: 24px;
}

.app-menu__button {
  border: none;
  background-color: transparent;
}

.app-menu__button:hover {
  border: none;
  background-color: transparent;
}
</style>
