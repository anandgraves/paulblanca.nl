<template>
  <div class="delivery-info rich-text">
    <ul class="delivery-info__list">
      <li class="delivery-info__item">
        Only <strong>express delivery services</strong> are used.
      </li>
      <li class="delivery-info__item">
        Worldwide <strong>free</strong> shipping.
      </li>
      <li class="delivery-info__item">
        Worldwide <strong>Track&Trace</strong>.
      </li>
    </ul>

    <nuxt-link to="/ordering-and-shipping#shipping" class="delivery-info__link">
      More shipping info
    </nuxt-link>
  </div>
</template>

<style>
.delivery-info {
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  padding: 36px 48px;
  background-color: #f7f7f7;
  text-align: left;
}

.delivery-info .delivery-info__list {
  margin-bottom: 24px;
  padding-left: 0;
}

.delivery-info .delivery-info__item:not(:last-child) {
  margin-bottom: 12px;
}

.delivery-info__link {
  margin-left: -20px;
}
</style>
