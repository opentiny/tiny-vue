<template>
  <tiny-numeric v-model="stepNum" controls></tiny-numeric>
</template>

<script>
import { Numeric } from '@opentiny/vue'

export default {
  components: {
    TinyNumeric: Numeric
  },
  data() {
    return {
      stepNum: 2
    }
  }
}
</script>
