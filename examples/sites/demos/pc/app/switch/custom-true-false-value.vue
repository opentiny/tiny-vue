<template>
  <div>
    <tiny-switch v-model="value" true-value="yes" false-value="no"> </tiny-switch>
    当前值：{{ value }}
  </div>
</template>

<script>
import { TinySwitch } from '@opentiny/vue'

export default {
  components: {
    TinySwitch
  },
  data() {
    return {
      value: 'yes'
    }
  }
}
</script>
