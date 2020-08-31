<template>
  <article class="center-content">
    <h1 class="heading-large">Ordering and Shipping</h1>
    <div class="body rich-text">
      <h2 class="heading-medium">Ordering</h2>
      <p>
        To place an order with paulblanca.nl you have to go through the
        following steps:
      </p>

      <ol>
        <li>Select a <strong>size</strong> (30x40, 40x50, 100x120 cm).</li>
        <li>
          Select a <strong>print finishing</strong>: none, dibond or plexiglass.
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
            Within a day you'll receive a reply from info@paulblanca.nl. Check
            your spam/junk folder if you didn't receive an email. The email
            contains:
          </p>
          <ul>
            <li>Payment request as a link.</li>
            <li>Price including shipping costs.</li>
            <li>Estimated date of delivery.</li>
          </ul>

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
          <p>
            <responsive-image
              :image="payment.image"
              class="ordering-shipping__screenshot"
            />
          </p>
          <p>
            <a
              href="https://useplink.com/en/"
              rel="noopener noreferrer"
              target="_blank"
              title="View more information about Plink at useplink.com"
              aria-label="View more information about Plink at useplink.com"
              >Plink</a
            >
            is an initiative of Mollie B.V., which processes all payments.
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
      </ol>

      <h2 class="heading-medium">Shipping</h2>

      <p>
        FedEx Express is used to make (international) delivery. Delivery is
        within 29 days.
        <a
          href="http://www.fedex.com/sz/contact/served-countries.html"
          rel="noopener noreferrer"
          target="_blank"
          >View the list of countries</a
        >
        FedEx Express ships to.
      </p>

      <p>
        Within
        <a
          href="https://www.fedex.com/en-nl/shipping.html#domestic"
          rel="noopener noreferrer"
          target="_blank"
          title="Using FedEx for shipping within The Netherlands"
          aria-label="Using FedEx for shipping within The Netherlands"
          >The Netherlands</a
        >, FedEx Express uses FedEx Priority Overnight® to deliver your order
        the next day before noon or before end of the business day. See the
        FedEx Express services available for
        <a
          href="https://www.fedex.com/en-nl/shipping.html#europe"
          rel="noopener noreferrer"
          target="_blank"
          title="Using FedEx for shipping within Europe"
          aria-label="Using FedEx for shipping within Europe"
          >Europe</a
        >
        and
        <a
          href="https://www.fedex.com/en-nl/shipping.html#worldwide"
          rel="noopener noreferrer"
          target="_blank"
          title="Using FedEx for worldwide shipping"
          aria-label="Using FedEx for worldwide shipping"
          >Worldwide</a
        >.
      </p>

      <p>
        FedEx will send a notification via email and/or SMS including the
        planned delivery day. If the proposed date is not convenient, the
        recipient can access a secure website link provided in the notification
        and request a change of the planned delivery date and/or location. Any
        changes requested are confirmed via an email and/or SMS. On the day of
        the delivery, you will be reminded that the shipment is on its way for
        delivery.
      </p>
    </div>
  </article>
</template>

<script>
export default {
  data() {
    return {
      email: {
        image: {
          width: 504,
          height: 619,
          filename: 'buy-photo-by-email-500w',
          type: 'jpg',
          alt: '',
        },
      },
      payment: {
        image: {
          width: 620,
          height: 704,
          filename: 'payment-request-500w',
          type: 'jpg',
          alt: '',
        },
      },
    }
  },
}
</script>

<style>
.ordering-shipping__screenshot {
  max-width: 499px;
}
</style>
