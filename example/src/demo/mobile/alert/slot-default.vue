<template>
  <div class="alert-wrap">
    <tiny-alert>
      <span style="color: red">根据 default slot 自定义内容</span>
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
<style>
.alert-wrap .tiny-mobile-alert {
  margin-bottom: 8px;
}
</style>
