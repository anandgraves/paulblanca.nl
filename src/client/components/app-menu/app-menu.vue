<template>
  <nav class="app-menu">
    <nuxt-link :to="pageUrl('shop')" class="app-menu__link">
      Shop
    </nuxt-link>
    <nuxt-link :to="pageUrl('about')" class="app-menu__link">
      About
    </nuxt-link>
    <nuxt-link
      :to="pageUrl('contact')"
      class="app-menu__link"
    >
      Contact
    </nuxt-link>
  </nav>
</template>

<script>
import getPageUrl from '~/lib/get-page-url'
export default {
  methods: {
    pageUrl (query) {
      return getPageUrl(query)
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
  margin-top: 2px;
  font-weight: 500;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #555;
  vertical-align: middle;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border 0.24s ease;
}

.app-menu__link:hover,
.app-menu__link:focus,
.app-menu .nuxt-link-active {
  border-bottom: 1px solid black;
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
