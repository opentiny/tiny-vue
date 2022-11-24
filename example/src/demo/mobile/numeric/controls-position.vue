<template>
  <tiny-numeric v-model="stepNum" controls-position="right"></tiny-numeric>
</template>

<script>
import { Numeric } from '@opentiny/vue'

export default {
  components: {
    TinyNumeric: Numeric
  },
  data() {
    return {
      controls: false,
      stepNum: 2
    }
  }
}
</script>
