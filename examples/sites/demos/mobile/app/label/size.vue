<template>
  <div class="mobile-label-demo">
    <h2>可选大小</h2>
    <tiny-label label="large" size="large"></tiny-label>
    <tiny-label label="normal" size="normal"></tiny-label>
    <tiny-label label="small" size="small"></tiny-label>
    <tiny-label label="mini" size="mini"></tiny-label>
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
