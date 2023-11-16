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
  fill: #8994aa;
  margin: 20px 50px;
  font-size: 24px;
}
</style>
