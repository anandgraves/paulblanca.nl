<template>
  <footer class="app-footer">
    <div class="app-footer__header">
      <img class="app-footer__logo" src="/images/logo-white.svg" alt="" />
    </div>

    <div class="app-footer__content">
      <section class="app-footer__column">
        <h2 class="app-footer__title heading-small">Need help?</h2>
        <ul class="app-footer__list">
          <li class="app-footer__list-item">
            <nuxt-link class="app-footer__link" to="/order-shipping">
              Order and Shipping
            </nuxt-link>
          </li>
          <li class="app-footer__list-item">
            <nuxt-link class="app-footer__link" to="/payment-methods">
              Payment Methods
            </nuxt-link>
          </li>
          <li class="app-footer__list-item">
            <nuxt-link class="app-footer__link" to="/privacy-statement">
              Privacy Statement
            </nuxt-link>
          </li>
          <li class="app-footer__list-item">
            <nuxt-link class="app-footer__link" to="/terms-conditions">
              Terms and Conditions
            </nuxt-link>
          </li>
        </ul>
      </section>

      <section class="app-footer__column">
        <h2 class="app-footer__title heading-small">Explore</h2>
        <ul class="app-footer__list">
          <li class="app-footer__list-item">
            <nuxt-link class="app-footer__link" to="/about"> About </nuxt-link>
          </li>
          <li class="app-footer__list-item">
            <nuxt-link class="app-footer__link" to="/print-finishing">
              Print Finishing
            </nuxt-link>
          </li>
          <li class="app-footer__list-item">
            <nuxt-link class="app-footer__link" to="/certificate">
              Certificate
            </nuxt-link>
          </li>
          <li class="app-footer__list-item">
            <a
              class="app-footer__link"
              href="https://instagram.com/paulblancanl/"
              >Instagram</a
            >
          </li>
        </ul>
      </section>

      <section class="app-footer__column">
        <h2 class="app-footer__title heading-small">Payment methods</h2>
        <ul class="app-footer__list">
          <li class="app-footer__list-item">
            <nuxt-link to="/payment-methods" class="app-footer__link">
              iDEAL
            </nuxt-link>
          </li>
          <li class="app-footer__list-item">
            <nuxt-link to="/payment-methods" class="app-footer__link"
              >PayPal</nuxt-link
            >
          </li>
          <li class="app-footer__list-item">
            <nuxt-link to="/payment-methods" class="app-footer__link"
              >VISA</nuxt-link
            >
          </li>
          <li class="app-footer__list-item">
            <nuxt-link to="/payment-methods" class="app-footer__link"
              >Apple Pay</nuxt-link
            >
          </li>
          <li class="app-footer__list-item">
            <nuxt-link to="/payment-methods" class="app-footer__link"
              >Mastercard</nuxt-link
            >
          </li>
          <li class="app-footer__list-item">
            <nuxt-link to="/payment-methods" class="app-footer__link"
              >SOFORT</nuxt-link
            >
          </li>
          <li class="app-footer__list-item">
            <nuxt-link to="/payment-methods" class="app-footer__link"
              >American Express</nuxt-link
            >
          </li>
        </ul>
      </section>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style>
.app-footer {
  padding: 60px 48px;
  background-color: #000;
}

.app-footer__header {
  margin-bottom: 48px;
}

.app-footer__logo {
  display: block;
  height: 50px;
}

.app-footer__content {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-size: 1rem;
  color: #fff;
}

.app-footer__column {
  width: 100%;
}

.app-footer__column:not(:last-child) {
  margin-bottom: 60px;
}

.app-footer__title {
  margin-bottom: 24px;
  padding-bottom: 12px;
  border-bottom: 1px solid white;
}

.app-footer__link {
  text-decoration: none;
}

.app-footer__link:hover {
  text-decoration: underline;
}

.app-footer__list {
  display: flex;
  flex-flow: column wrap;
  list-style: none;
}

.app-footer__list-item:not(:last-child) {
  margin-bottom: 24px;
}

.app-footer a {
  color: #fff;
}

@media (min-width: 500px) {
  .app-footer__list {
    max-height: 175px;
  }

  .app-footer__column:nth-child(3) .app-footer__list-item:nth-child(4) {
    margin-bottom: 0;
  }
}

@media (min-width: 800px) {
  .app-footer {
    padding: 96px 48px;
  }

  .app-footer__column:not(:last-child) {
    margin-bottom: 84px;
  }

  .app-footer__column:nth-child(1) {
    width: 50%;
    padding-right: 60px;
  }

  .app-footer__column:nth-child(2) {
    width: 50%;
    padding-left: 60px;
  }

  .app-footer__column:nth-child(3) .app-footer__list-item:nth-child(-n + 4) {
    width: 50%;
    padding-right: 60px;
  }

  .app-footer__column:nth-child(3) .app-footer__list-item:nth-child(n + 5) {
    width: 50%;
    padding-left: 60px;
  }
  .app-footer__column:nth-child(3) .app-footer__list-item:nth-child(-n + 4) {
    width: 50%;
    padding-right: 60px;
  }
}

@media (min-width: 1000px) {
  .app-footer__column:not(:last-child) {
    margin-bottom: 0;
  }

  .app-footer__column:nth-child(1) {
    width: 30%;
    padding-right: 60px;
  }

  .app-footer__column:nth-child(2) {
    width: 30%;
    padding-left: 60px;
    padding-right: 60px;
  }

  .app-footer__column:nth-child(3) {
    width: 40%;
    padding-left: 60px;
  }

  .app-footer__column:nth-child(3) .app-footer__list-item:nth-child(-n + 4) {
    width: 30%;
    padding-right: 0;
  }

  .app-footer__column:nth-child(3) .app-footer__list-item:nth-child(n + 5) {
    padding-left: 0;
  }
}
</style>
