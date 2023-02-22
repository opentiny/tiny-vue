<template>
  <div>
    <tiny-alert description="closable 默认值为 true"></tiny-alert>
    <tiny-alert :closable="false" description="closable 设置为 false"></tiny-alert>
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
