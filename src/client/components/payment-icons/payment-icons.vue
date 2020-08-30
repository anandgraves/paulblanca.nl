<template>
  <ul class="payment-icons">
    <li class="payment-icon">
      <icon-base viewbox="0 0 120 80" width="80" height="40" icon-name="ideal">
        <icon-ideal />
      </icon-base>
    </li>
    <li class="payment-icon">
      <icon-base
        viewbox="0 0 120 80"
        width="80"
        height="40"
        icon-name="applepay"
      >
        <icon-applepay />
      </icon-base>
    </li>
    <li class="payment-icon">
      <icon-base
        viewbox="0 0 120 80"
        width="80"
        height="40"
        icon-name="mastercard"
      >
        <icon-mastercard />
      </icon-base>
    </li>
    <li class="payment-icon">
      <icon-base viewbox="0 0 120 80" width="80" height="40" icon-name="paypal">
        <icon-paypal />
      </icon-base>
    </li>
    <li><span></span></li>
    <li class="payment-icon">
      <icon-base viewbox="0 0 120 80" width="80" height="40" icon-name="visa">
        <icon-visa />
      </icon-base>
    </li>
    <li class="payment-icon">
      <icon-base viewbox="0 0 120 80" width="80" height="40" icon-name="sofort">
        <icon-sofort />
      </icon-base>
    </li>
    <li class="payment-icon">
      <icon-base
        viewbox="0 0 120 80"
        width="80"
        height="40"
        icon-name="americanexpress"
      >
        <icon-americanexpress />
      </icon-base>
    </li>
  </ul>
</template>

<style>
.payment-icons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
}

.payment-icon {
  margin-left: -15px;
}

.payment-icons > li:nth-child(5) {
  flex-basis: 100%;
}

.payment-icons > li:nth-child(-n + 4) {
  margin-bottom: 4px;
}

@media (min-width: 510px) {
  .payment-icons > li:nth-child(5) {
    flex-basis: auto;
  }
}

@media (min-width: 900px) {
  .payment-icons > li:nth-child(5) {
    flex-basis: 100%;
  }

  .payment-icons > li:nth-child(-n + 4) {
    margin-bottom: 4px;
  }
}

@media (min-width: 1200px) {
  .payment-icons {
    flex-wrap: nowrap;
    margin-left: 12px;
  }

  .payment-icons > li:nth-child(5) {
    flex-basis: auto;
  }
}
</style>
