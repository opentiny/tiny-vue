<template>
  <tiny-numeric v-model="stepNum" :controls="false"></tiny-numeric>
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
