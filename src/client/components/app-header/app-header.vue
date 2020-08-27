<template>
  <header class="app-header">
    <div class="app-header__brand">
      <nuxt-link to="/" class="app-header__link">
        <div>
          <img src="/images/logo.svg" alt="" />
        </div>

        <span class="app-header__subtitle">
          artist - photographer
        </span>
      </nuxt-link>
    </div>
    <app-menu class="app-header__menu" />
  </header>
</template>

<script>
import appMenu from '../app-menu/app-menu'

export default {
  components: {
    appMenu,
  },
}
</script>

<style>
.app-header__brand {
  margin-bottom: 32px;
}

.app-header__link {
  color: black;
  text-transform: uppercase;
  letter-spacing: -2px;
  text-decoration: none;
}

.app-header__subtitle {
  font-weight: 400;
  font-size: 0.8125rem;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #555;
}

@media (min-width: 800px) {
  .app-header {
    display: flex;
    align-items: baseline;
  }

  .app-header__brand {
    display: flex;
    margin-bottom: 0;
  }

  .app-header__menu {
    margin-left: auto;
  }
}
</style>
