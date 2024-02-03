<template>
  <div class="mobile-label-demo">
    <tiny-label label="123456789" bold></tiny-label>
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
</style>
