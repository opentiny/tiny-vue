<template>
  <div class="alert-wrap">
    <tiny-alert>type 为默认值 info</tiny-alert>
    <tiny-alert type="error">type 为 error</tiny-alert>
    <tiny-alert type="success">type 为 success</tiny-alert>
    <tiny-alert type="warning">type 为 warning</tiny-alert>
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
<style>
.alert-wrap .tiny-mobile-alert {
  margin-bottom: 8px;
}
</style>
