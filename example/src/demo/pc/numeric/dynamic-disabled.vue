<template>
  <tiny-numeric
    v-model="stepNum"
    :step="step"
    :disabled="disabled"
  ></tiny-numeric>
</template>

<script>
import { Numeric } from '@opentiny/vue'

export default {
  components: {
    TinyNumeric: Numeric
  },
  data() {
    return {
      step: 2,
      stepNum: 1,
      disabled: true
    }
  }
}
</script>
