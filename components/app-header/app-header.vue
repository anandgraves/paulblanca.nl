<template>
  <header class="app-header">
    <div class="app-header__title">
      <nuxt-link to="/" class="app-header__link">Paul Blanca</nuxt-link>
    </div>

    <span class="app-header__subtitle">
      art photographer
    </span>

    <app-menu class="app-header__menu" />
  </header>
</template>

<script>
import appMenu from '../app-menu/app-menu'

export default {
  components: {
    appMenu
  }
}
</script>

<style>
.app-header {
  margin: 24px auto 64px auto;
  padding-left: 20px;
  padding-right: 20px;
  text-align: center;
}

.app-header__title {
  margin-bottom: 6px;
  font-family: 'Josefin Sans', Helvetica, sans-serif;
  font-weight: 300;
  font-size: 3.1rem;
  line-height: 1;
}

.app-header__link {
  color: black;
  text-decoration: none;
}

.app-header__subtitle {
  display: inline-block;
  margin-bottom: 64px;
  font-weight: 500;
  font-size: 1rem;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  color: #555;
}

.app-header__menu {
  max-width: var(--content-max-width);
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 6px;
  border-bottom: 1px solid #ccc;
}
</style>
