<template>
  <div class="h-[1500px]">
    <div class="sticky-container text-center h-112 rounded bg-brand-50">
      <tiny-sticky :z-index="999999" target=".sticky-container" :offset="80">
        <tiny-button type="primary">目标容器</tiny-button>
      </tiny-sticky>
    </div>
  </div>
</template>

<script setup>
import { Sticky as TinySticky, Button as TinyButton } from '@opentiny/vue'
</script>
