<template>
  <div class="sticky-wrap">
    <div class="fill-box"></div>
    <tiny-sticky :z-index="999999" position="bottom" :offset="50">
      <tiny-button type="primary">距离底部50px</tiny-button>
    </tiny-sticky>
  </div>
</template>

<script setup>
import { Sticky as TinySticky, Button as TinyButton } from '@opentiny/vue'
</script>

<style scoped>
.sticky-wrap {
  height: 1000px;
}

.fill-box {
  height: 800px;
}
</style>
