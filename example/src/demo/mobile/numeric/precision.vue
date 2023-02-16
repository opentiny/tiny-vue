<template>
  <tiny-numeric v-model="stepNum" :precision="precision"></tiny-numeric>
</template>

<script>
import { Numeric } from '@opentiny/vue'

export default {
  components: {
    TinyNumeric: Numeric
  },
  data() {
    return {
      stepNum: 1,
      precision: 2
    }
  }
}
</script>
