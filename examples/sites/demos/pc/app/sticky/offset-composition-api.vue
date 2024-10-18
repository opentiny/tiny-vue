<template>
  <div class="sticky-wrap">
    <tiny-sticky :z-index="999999" :offset="100">
      <tiny-button type="primary">距离顶部100px</tiny-button>
    </tiny-sticky>
  </div>
</template>

<script setup>
import { Sticky as TinySticky, Button as TinyButton } from '@opentiny/vue'
</script>

<style scoped>
.sticky-wrap {
  height: 1600px;
}
</style>
