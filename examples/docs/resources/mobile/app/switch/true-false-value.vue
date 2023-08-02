<template>
  <div class="switch-wrap">
    <tiny-switch v-model="value" true-value="yes" false-value="no"></tiny-switch>
    当前值：{{ value }}
  </div>
</template>

<script lang="jsx">
import { Switch } from '@opentiny/vue'

export default {
  components: {
    TinySwitch: Switch
  },
  data() {
    return {
      value: 'no'
    }
  }
}
</script>

<style scoped>
.switch-wrap {
  padding: 20px;
}
</style>
