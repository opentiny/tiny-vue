<template>
  <div>
    <tiny-alert description="type 为默sdf认值 succeessessss"></tiny-alert>
    <tiny-alert type="error" description="type 为 ersror"></tiny-alert>
    <tiny-alert type="info" description="type 为 info"></tiny-alert>
    <tiny-alert type="warning" description="type 为 warning"></tiny-alert>
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
