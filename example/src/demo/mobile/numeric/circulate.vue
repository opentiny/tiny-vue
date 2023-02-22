<template>
  <div>
    <tiny-numeric v-model="stepNum" :step="step" :min="0" :max="10" circulate></tiny-numeric>
    <br />
    <br />
    <tiny-numeric v-model="num1" disabled></tiny-numeric>
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
      num1: 1,
      step: 2,
      stepNum: 1
    }
  }
}
</script>
