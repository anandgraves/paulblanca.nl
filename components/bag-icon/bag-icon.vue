<template>
  <span class="bag-icon">
    <svg
      class="bag-icon__svg"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path
        class="bag-icon__icon-shape"
        d="M17.21 9l-4.38-6.56c-.19-.28-.51-.42-.83-.42-.32 0-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1h-4.79zM9 9l3-4.4L15 9H9zm3 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
      />
    </svg>
    {{ inCartCount }}
  </span>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['inCartCount'])
  }
}
</script>

<style>
.bag-icon {
  position: relative;
  vertical-align: middle;
}

.bag-icon__svg {
  display: inline-block;
  margin-top: -8px;
  vertical-align: middle;
}

.bag-icon:hover {
  /* background-color: #ccc; */
  cursor: pointer;
}

.bag-icon:hover::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 150%;
  height: 150%;
  border-radius: 3px;
  background-color: rgb(240, 226, 226);
  z-index: -1;
}

.bag-icon__icon-shape {
  fill: #555;
}
</style>
