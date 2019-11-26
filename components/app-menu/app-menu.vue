<template>
  <nav class-="app-menu" role="navigation">
    <nuxt-link to="/photo" class="app-menu__link">Photo</nuxt-link>
    <nuxt-link to="/about" class="app-menu__link">About</nuxt-link>
    <nuxt-link to="/contact" class="app-menu__link">Contact</nuxt-link>
    <button
      @click="navigateToShoppingCart"
      class="app-menu__button app-menu__link"
    >
      <bag-icon />
    </button>
  </nav>
</template>

<script>
import bagIcon from '../bag-icon/bag-icon'

export default {
  components: {
    bagIcon
  },
  methods: {
    navigateToShoppingCart() {
      // console.log('go to shop cart')
      this.$router.replace('/shopping-cart')
    }
  }
}
</script>

<style>
.app-menu {
  text-transform: uppercase;
}

.app-menu__link {
  display: inline-block;
  font-family: 'Cooper Hewitt';
  font-weight: 400;
  font-size: 0.8rem;
  color: #555;
  vertical-align: middle;
  text-decoration: none;
}

.app-menu__link:not(:first-child) {
  margin-left: 24px;
}

.app-menu__button {
  border: none;
  background-color: transparent;
}
</style>
