<template>
  <div class="switch-demo">
    <tiny-switch v-model="value1" disabled></tiny-switch>
    <tiny-switch v-model="value2" disabled></tiny-switch>
  </div>
</template>

<script>
import { Switch } from '@opentiny/vue'

export default {
  components: {
    TinySwitch: Switch
  },
  data() {
    return {
      value1: true,
      value2: false
    }
  }
}
</script>
<style scoped>
.switch-demo .tiny-switch + .tiny-switch {
  margin-left: 20px;
}
</style>
