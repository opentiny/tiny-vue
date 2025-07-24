<template>
  <div class="h-[1500px]">
    <tiny-sticky :z-index="999999" offset="10vh">
      <tiny-button type="primary">距离顶部100px</tiny-button>
    </tiny-sticky>
  </div>
</template>

<script setup>
import { TinySticky, TinyButton } from '@opentiny/vue'
</script>
