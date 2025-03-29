<template>
  <tiny-mind-map class="demo-mind-map-basic" />
</template>

<script setup>
import { TinyMindMap } from '@opentiny/vue'
</script>

<style lang="less" scoped>
.demo-mind-map-basic {
  width: 100%;
  height: 400px;

  :deep(.map-container) {
    .map-canvas {
      background-color: var(--tv-color-bg);
    }
  }
}
</style>
