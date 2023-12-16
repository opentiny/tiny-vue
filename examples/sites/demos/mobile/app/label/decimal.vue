<template>
  <div class="mobile-label-demo">
    <h2>数字文本</h2>
    <tiny-label type="number" label="-00数字文本25[[{5512e36431.334厄3000}" :decimal="3"></tiny-label>
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
