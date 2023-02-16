<template>
  <div>
    <tiny-numeric v-model="stepNum" size="large"></tiny-numeric>
  </div>
</template>

<script>
import { Numeric } from '@opentiny/vue'

export default {
  components: {
    TinyNumeric: Numeric
  },
  data() {
    return {
      stepNum: 1
    }
  }
}
</script>
