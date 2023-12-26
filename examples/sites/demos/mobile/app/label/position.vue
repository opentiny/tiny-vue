<template>
  <div class="mobile-label-demo">
    <h2>可选位置</h2>
    <tiny-label position="left" :wholeline="true" label="靠左展示"></tiny-label>
    <tiny-label position="center" :wholeline="true" label="剧中展示"></tiny-label>
    <tiny-label position="right" :wholeline="true" label="靠右展示"></tiny-label>
  </div>
</template>

<script>
import { Label } from '@opentiny/vue'

export default {
  components: {
    TinyLabel: Label
  }
}
</script>

<style scoped>
.mobile-label-demo {
  height: 100%;
  background: #f4f4f4;
  overflow-y: auto;
}

.tiny-mobile-label {
  margin-right: 20px;
}
</style>
