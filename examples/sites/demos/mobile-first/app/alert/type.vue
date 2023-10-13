<template>
  <div>
    <tiny-alert type="info" description="type 为 info"></tiny-alert>
    <tiny-alert type="error" description="type 为 error"></tiny-alert>
    <tiny-alert type="success" description="type 为 success"></tiny-alert>
    <tiny-alert type="warning" description="type 为 warning"></tiny-alert>
  </div>
</template>

<script>
import { Alert, Button } from '@opentiny/vue'

export default {
  components: {
    TinyAlert: Alert,
    TinyButton: Button
  }
}
</script>
