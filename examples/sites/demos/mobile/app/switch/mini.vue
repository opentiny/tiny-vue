<template>
  <div class="switch-wrap">
    <p>小尺寸</p>
    <tiny-switch mini></tiny-switch>
  </div>
</template>

<script lang="jsx">
import { Switch } from '@opentiny/vue'

export default {
  components: {
    TinySwitch: Switch
  }
}
</script>

<style scoped>
.switch-wrap {
  padding: 20px;
}
</style>
