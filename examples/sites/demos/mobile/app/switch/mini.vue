<template>
  <div class="switch-wrap">
    <p>小尺寸</p>
    <tiny-switch mini></tiny-switch>
  </div>
</template>

<script lang="jsx">
import { TinySwitch } from '@opentiny/vue-mobile'

export default {
  components: {
    TinySwitch
  }
}
</script>

<style scoped>
.switch-wrap {
  padding: 20px;
}
</style>
