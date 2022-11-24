<template>
  <tiny-numeric v-model="stepNum" :mouse-wheel="mouseWheel"></tiny-numeric>
</template>

<script>
import { Numeric } from '@opentiny/vue'

export default {
  components: {
    TinyNumeric: Numeric
  },
  data() {
    return {
      mouseWheel: true,
      stepNum: 1
    }
  }
}
</script>
