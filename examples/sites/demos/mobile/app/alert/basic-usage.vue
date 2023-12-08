<template>
  <div class="demo-alert-base">
    <tiny-alert description="type 为默认值 info"></tiny-alert>
    <tiny-alert type="error" description="type 为 error"></tiny-alert>
    <tiny-alert type="success" description="type 为 success"></tiny-alert>
    <tiny-alert type="warning">
      <span>type 为 warning，且使用内容插槽</span>
    </tiny-alert>
  </div>
</template>

<script>
import { Alert } from '@opentiny/vue'

export default {
  components: {
    TinyAlert: Alert
  }
}
</script>

<style scoped>
.demo-alert-base .tiny-mobile-alert {
  margin-bottom: 8px;
}
</style>
