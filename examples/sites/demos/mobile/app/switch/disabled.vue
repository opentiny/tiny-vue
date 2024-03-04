<template>
  <div class="switch-wrap">
    <p>不可用-开</p>
    <tiny-switch :modelValue="true" disabled></tiny-switch>
    <p>不可用-关</p>
    <tiny-switch :modelValue="false" disabled></tiny-switch>
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
