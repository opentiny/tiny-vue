<template>
  <tiny-numeric v-model="stepNum" :step="step" :min="0" :max="10"></tiny-numeric>
</template>

<script lang="jsx">
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
