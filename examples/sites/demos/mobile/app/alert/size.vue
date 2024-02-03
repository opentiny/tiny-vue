<template>
  <div class="alert-wrap">
    <tiny-alert>默认大小</tiny-alert>
    <tiny-alert size="normal">size 为 normal</tiny-alert>
    <tiny-alert size="large">size 为 large</tiny-alert>
  </div>
</template>

<script lang="jsx">
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
