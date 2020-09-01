<template>
  <div class="delivery-info rich-text">
    <ul class="delivery-info__list">
      <li class="delivery-info__item">
        FedEx Express is used to make (international) delivery.<br />
        <icon-base
          class="delivery-icon"
          width="74"
          height="33"
          icon-name="fedex"
          viewbox="0 0 74.535996 33.924999"
        >
          <icon-fedex />
        </icon-base>
      </li>
      <li class="delivery-info__item">
        Delivery is within 29 days.
      </li>
      <li class="delivery-info__item">
        Shipping is possible to these
        <a
          href="http://www.fedex.com/sz/contact/served-countries.html"
          rel="noopener noreferrer"
          target="_blank"
          >countries</a
        >.
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
