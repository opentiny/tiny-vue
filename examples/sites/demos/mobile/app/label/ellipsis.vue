<template>
  <div class="mobile-label-demo">
    <h2>不限制显示行数</h2>
    <tiny-label :label="text"></tiny-label>
    <h2>限制显示行数2</h2>
    <tiny-label :label="text" :ellipsis="2"></tiny-label>
  </div>
</template>

<script>
import { Label } from '@opentiny/vue'

export default {
  components: {
    TinyLabel: Label
  },
  data() {
    return {
      text: '12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890'
    }
  }
}
</script>

<style scoped>
.mobile-label-demo {
  height: 100%;
  background: #f4f4f4;
  overflow-y: auto;
}
</style>
