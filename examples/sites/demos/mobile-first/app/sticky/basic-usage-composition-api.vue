<template>
  <div class="h-[1500px]">
    <tiny-sticky :z-index="999999">
      <tiny-button type="primary">吸顶距离默认0px</tiny-button>
    </tiny-sticky>
  </div>
</template>

<script setup>
import { TinySticky, TinyButton } from '@opentiny/vue'
</script>
