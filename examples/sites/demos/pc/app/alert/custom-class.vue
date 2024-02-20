<template>
  <div>
    <tiny-alert custom-class="customClass" type="error" description="type 为 error"></tiny-alert>
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
.customClass {
  background-color: pink;
}
</style>
