<template>
  <div :style="{ paddingBottom: `${ratio}%` }" class="fixed-ratio">
    <div class="fixed-ratio__content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    height: {
      type: Number,
      required: true
    },
    width: {
      type: Number,
      required: true
    }
  },
  computed: {
    ratio () {
      return (this.height / this.width) * 100
    }
  }
}
</script>

<style>
.fixed-ratio {
  display: block;
  position: relative;
  height: 0;
  overflow: hidden;
}

.fixed-ratio__content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: inherit;
  background-color: #000;
}
</style>
