<template>
  <div>
    <tiny-alert custom-class="bg-color-bg-2" type="error" description="type 为 error"></tiny-alert>
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
