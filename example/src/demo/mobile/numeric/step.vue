<template>
  <tiny-numeric v-model="stepNum" :step="step" :step-strictly="true"></tiny-numeric>
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
      stepNum: 1
    }
  }
}
</script>
