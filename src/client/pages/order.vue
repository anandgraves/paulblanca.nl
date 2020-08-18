<template>
  <article class="order center-content">
    <h1 class="heading-large">Order</h1>

    <form>
      <div>
        <label for="">Email address</label>
        <input type="email" required />
      </div>

      <div>
        <label for="">First name</label>
        <input type="text" required />
      </div>

      <div>
        <label for="">Last name</label>
        <input type="text" required />
      </div>

      <div>
        <label for="">Street address</label>
        <input type="text" required />
      </div>

      <div>
        <label for="">Street address extra (optional)</label>
        <input type="text" />
      </div>

      <div>
        <label for="">City</label>
        <input type="text" required />
      </div>

      <div>
        <label for="">Province/State/Region</label>
        <input type="text" required />
      </div>

      <div>
        <label for="">Postal code</label>
        <input type="text" required />
      </div>

      <div>
        <label for="">Country</label>
        <input type="text" required />
      </div>

      <div>
        <label for="">Phone number (shipping only)</label>
        <input type="text" />
      </div>

      <p>
        If you're living outside the European Union, than you might have to pay
        customs charges.
      </p>

      <div>
        <button class="order__button button" type="submit">
          Place Your Order
        </button>
      </div>
    </form>
  </article>
</template>

<style>
.order input {
  width: 100%;
  padding: 0.92857em 0.78571em;
  border: 1px solid #555;
}

.order__button {
  width: 300px;
}

label {
  display: block;
  margin-bottom: 6px;
}

input {
  margin-bottom: 32px;
}
</style>
