<template>
  <div title="复制" class="icon-demo">
    <tiny-icon-copy></tiny-icon-copy>
  </div>
</template>

<script setup>
import { iconCopy } from '@opentiny/vue-icon'

const TinyIconCopy = iconCopy()
</script>

<style scoped>
.icon-demo .tiny-svg {
  margin: 20px 83px;
  font-size: 24px;
}
</style>
