<template>
  <article class="center-content">
    <h1 class="heading-large">Order and Shipping</h1>
    <section class="body rich-text">
      <h2 id="order" class="heading-medium">Order</h2>
      <p>
        To place an order with paulblanca.nl you have to go through the
        following steps:
      </p>

      <ol>
        <li>Select a <strong>size</strong>: 30x40, 40x50, 100x120 cm.</li>
        <li>
          Select a <strong>finish</strong>: Dibond, Plexiglass or TruLife<sup
            >TM</sup
          >
          Plexiglass.
        </li>
        <li>Click on the button "<strong>Buy photo by e-mail</strong>".</li>
        <li>
          <p>
            Your email program will open with a new email created and
            <strong>prefilled</strong>
            with text.
          </p>
          <responsive-image
            :image="email.image"
            class="ordering-shipping__screenshot"
          />
        </li>
        <li>
          <p>
            Within one or two days you'll receive a reply from
            info@paulblanca.nl with a payment request as a link. All products
            are excluded from the right of withdrawal, because all products
            delivered are custom-made.
          </p>

          <p>
            You can pay with the following
            <nuxt-link to="/payment-methods"> payment methods</nuxt-link>.
          </p>
        </li>
        <li>
          <p>
            When you click on the payment request link in the email you received
            in step 5, a page on useplink.com will open and handle the payment.
          </p>

          <responsive-image
            :image="payment.image"
            class="ordering-shipping__screenshot"
          />

          <p>
            <a
              href="https://useplink.com/en/"
              rel="noopener noreferrer"
              target="_blank"
              title="View more information about Plink at useplink.com"
              aria-label="View more information about Plink at useplink.com"
              >Plink</a
            >
            is an initiative of
            <a
              href="https://mollie.com/"
              rel="noopener noreferrer"
              target="_blank"
              title="View more information about Mollie at mollie.com"
              aria-label="View more information about Mollie at mollie.com"
              >Mollie</a
            >, which processes all payments.
          </p>
          <p>
            <a
              href="https://21bits.nl"
              rel="noopener noreferrer"
              target="_blank"
              title="View more information about Plink at useplink.com"
              aria-label="View more information about Plink at useplink.com"
              >21 Bits</a
            >
            develops and manages paulblanca.nl, manages all payments, shipping
            and customer support in partnership with Paul Blanca.
          </p>
        </li>
        <li>
          <p>
            After you've paid for your order, you'll receive an email from
            info@paulblanca.nl with Track&Trace as soon as possible. We use one
            of the express delivery services listed below.
          </p>
        </li>
      </ol>
    </section>

    <section class="body rich-text">
      <h2 id="shipping" class="heading-medium">Shipping</h2>

      <p>Express delivery services are used to ship your package:</p>

      <ul class="delivery-icons">
        <li class="delivery-icons__item">
          <img src="/images/logo-fedex.png" alt="FedEx logo" loading="lazy" />
        </li>
        <li class="delivery-icons__item">
          <img src="/images/logo-dhl.png" alt="DHL logo" loading="lazy" />
        </li>
        <li class="delivery-icons__item">
          <img src="/images/logo-tnt.png" alt="TNT logo" loading="lazy" />
        </li>
        <li class="delivery-icons__item">
          <img src="/images/logo-dpd.png" alt="DPD logo" loading="lazy" />
        </li>
        <li class="delivery-icons__item">
          <img src="/images/logo-skynet.png" alt="Skynet logo" loading="lazy" />
        </li>
      </ul>

      <p>
        All orders on paulblanca.nl have
        <strong>free worldwide</strong> shipping. Shipping destinations depend
        on the availability of destinations of the express delivery services:
        FedEx, DHL, TNT, DPD and SkyNet.
      </p>

      <p>
        A complete street address and valid phone number are required for
        shipping. Partial or incorrect addresses may result in additional
        charges.
      </p>

      <p>Delivery is within 29 days.</p>
    </section>
  </article>
</template>

<script>
export default {
  data() {
    return {
      email: {
        image: {
          alt: 'How to buy a photo on paulblanca.nl',
          formats: [
            {
              type: 'webp',
              widths: [
                {
                  width: 504,
                  height: 619,
                  size: '500w',
                  filename: '/images/buy-photo-by-email-500w.webp',
                },
              ],
            },
            {
              type: 'jpg',
              widths: [
                {
                  width: 504,
                  height: 619,
                  size: '500w',
                  filename: '/images/buy-photo-by-email-500w.jpg',
                },
              ],
            },
          ],
        },
      },
      payment: {
        image: {
          alt: '',
          formats: [
            {
              type: 'webp',
              widths: [
                {
                  width: 620,
                  height: 704,
                  size: '500w',
                  filename: '/images/payment-request-500w.webp',
                },
              ],
            },
            {
              type: 'jpg',
              widths: [
                {
                  width: 620,
                  height: 704,
                  size: '500w',
                  filename: '/images/payment-request-500w.jpg',
                },
              ],
            },
          ],
        },
      },
    }
  },
}
</script>

<style>
.delivery-icons {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  list-style: none;
}

.rich-text .delivery-icons {
  list-style: none;
}

.delivery-icons__item:not(:last-child) {
  margin-right: 48px;
}

.delivery-icons__item {
  flex-basis: 125px;
}

.ordering-shipping__screenshot {
  max-width: 499px;
}
</style>
