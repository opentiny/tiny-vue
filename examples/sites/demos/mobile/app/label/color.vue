<template>
  <div class="mobile-label-demo">
    <h2>可选颜色值</h2>
    <tiny-label label="主要文本色" color="primary"></tiny-label>
    <tiny-label label="次要文本色" color="secondary"></tiny-label>
    <tiny-label label="辅助文本色" color="placeholder"></tiny-label>
    <tiny-label label="禁用文本色" color="disabled"></tiny-label>
    <tiny-label label="文本反色" color="inverse"></tiny-label>
    <tiny-label label="主题色" color="brand"></tiny-label>
    <tiny-label label="链接文本色" color="link"></tiny-label>
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
