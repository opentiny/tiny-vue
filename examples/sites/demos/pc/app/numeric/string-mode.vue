<template>
  <tiny-numeric style="width: 500px" v-model="stepNum" :step="step" string-mode :precision="20"></tiny-numeric>
</template>

<script>
import { Numeric } from '@opentiny/vue'

export default {
  components: {
    TinyNumeric: Numeric
  },
  data() {
    return {
      step: '0.00000000000000000002',
      stepNum: '0.00000000000000000002'
    }
  }
}
</script>
