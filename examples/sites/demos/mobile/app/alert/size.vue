<template>
  <div class="alert-wrap">
    <tiny-alert size="normal">size 为 normal (默认)</tiny-alert>
    <tiny-alert size="large">size 为 large</tiny-alert>
  </div>
</template>

<script>
import { TinyAlert } from '@opentiny/vue-mobile'

export default {
  components: {
    TinyAlert
  }
}
</script>

<style>
.alert-wrap .tiny-mobile-alert {
  margin-bottom: 8px;
}
</style>
