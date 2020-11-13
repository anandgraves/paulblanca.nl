<template>
  <div class="content">
    <article class="newsletter-form">
      <div class="newsletter-form__content">
        <h2 class="heading-medium">Get updates first</h2>
        <p class="newsletter-form__pitch body">
          Sign up and receive updates about new projects, work and events.
        </p>

        <form
          method="post"
          data-sv-form="1456774"
          data-uid="ddb2188bd3"
          data-format="inline"
          data-version="5"
          @submit.prevent="onSubmit"
        >
          <div>
            <div>
              <input
                v-model="email"
                class="newsletter-form__field body"
                name="email_address"
                aria-label="Your email address"
                aria-required="true"
                placeholder="What is your email address?"
                required="true"
                type="email"
              />
            </div>

            <button
              :disabled="isPending"
              class="newsletter-form__button button"
              :class="{
                'button--disabled': isPending,
              }"
            >
              <div class="button__content">
                <span v-if="isPending" class="button__icon-container"
                  ><!-- By Sam Herbert (@sherb), for everyone.
              More @ https://github.com/SamHerbert/SVG-Loaders -->
                  <svg
                    class="newsletter-form__icon-loader"
                    width="38"
                    height="38"
                    viewBox="0 0 38 38"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#fff"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <g transform="translate(1 1)" stroke-width="2">
                        <circle stroke-opacity=".5" cx="18" cy="18" r="18" />
                        <path d="M36 18c0-9.94-8.06-18-18-18">
                          <animateTransform
                            attributeName="transform"
                            type="rotate"
                            from="0 18 18"
                            to="360 18 18"
                            dur="1s"
                            repeatCount="indefinite"
                          />
                        </path>
                      </g>
                    </g></svg
                ></span>
                <span v-if="!isPending" class="button__text">Subscribe</span>
              </div>
            </button>

            <div v-if="errorMessage" class="newsletter-form__error-container">
              <icon-base
                viewbox="0 0 24 24"
                width="72"
                height="72"
                icon-name="error"
              >
                <icon-error />
              </icon-base>

              <!-- eslint-disable-next-line vue/no-v-html -->
              <div
                class="newsletter-form__error-message"
                v-html="errorMessage"
              />
            </div>
          </div>
        </form>
      </div>
    </article>
  </div>
</template>

<script>
const defaultErrorMessage = `Something went wrong. Send me an email at <a href="mailto:info@paulblanca.nl?subject=Newsletter">info@paulblanca.nl</a> and you will be added to the newsletter.`
export default {
  data() {
    return {
      firstName: '',
      email: '',
      isPending: false,
      errorMessage: null,
    }
  },
  methods: {
    async onSubmit() {
      this.isPending = true

      try {
        await this.$axios.$post(process.env.convertKitApiUrl, {
          email_address: this.email,
        })
        window.location.replace(process.env.emailSubscriptionCompletedUrl)
      } catch (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          this.errorMessage = defaultErrorMessage
        } else if (error.request) {
          this.errorMessage = defaultErrorMessage
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
        } else {
          this.errorMessage = defaultErrorMessage
          // Something happened in setting up the request that triggered an Error
          this.errorMessage = error.message
        }
        this.isPending = false
      }
    },
  },
}
</script>

<style>
.newsletter-form {
  margin-top: 96px;
  padding-top: 60px;
  border-top: 1px solid #ccc;
}

.newsletter-form__content {
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.newsletter-form__error-container {
  display: flex;
  align-items: center;
}

.newsletter-form__error-message {
  margin-left: 6px;
}

.newsletter-form__error-message a {
  color: black;
}

.newsletter-form__button {
  width: 100%;
  margin-bottom: 12px;
}

.newsletter-form__button--icon-loader {
  padding: 12px 24px;
}

.newsletter-form__icon-loader {
  display: block;
  width: 36px;
  height: 36px;
}

.newsletter-form__pitch {
  margin-bottom: 24px;
}

.newsletter-form__field {
  width: 100%;
  padding: 12px 24px;
  margin-bottom: 12px;
  border: 1px solid #ccc;
}

.newsletter-form__field:focus,
.newsletter-form__field:active {
  border-color: black;
  outline: none;
}
</style>
