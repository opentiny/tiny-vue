<template>
  <div>
    <tiny-alert custom-class="customClass" type="error" description="type 为 error"></tiny-alert>
  </div>
</template>

<script>
import { TinyAlert } from '@opentiny/vue'

export default {
  components: {
    TinyAlert
  }
}
</script>

<style scoped>
.customClass {
  background-color: var(--tv-color-bg-disabled-control-active);
}
</style>
