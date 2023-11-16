<template>
  <div>
    <tiny-switch v-model="value" true-value="yes" false-value="no"> </tiny-switch>
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
