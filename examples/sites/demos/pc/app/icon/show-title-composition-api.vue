<template>
  <div title="复制" class="icon-demo">
    <tiny-icon-copy class="tiny-svg-size icon-copy"></tiny-icon-copy>
  </div>
</template>

<script setup>
import { iconCopy } from '@opentiny/vue-icon'

const TinyIconCopy = iconCopy()
</script>

<style scoped>
.icon-demo .tiny-svg-size {
  fill: #8994aa;
  margin: 20px 50px;
}

.icon-demo .icon-copy {
  font-size: 1.8em;
}
</style>
