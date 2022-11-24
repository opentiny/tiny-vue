<template>
  <div>
    <tiny-switch v-model="value" true-value="yes" false-value="no">
      <template #open>
        <span>是</span>
      </template>
      <template #close>
        <span style="position: relative; left: 4px">否</span>
      </template>
    </tiny-switch>
    当前值:{{ value }}
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
      value: 'yes'
    }
  }
}
</script>
