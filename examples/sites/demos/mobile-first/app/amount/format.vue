<template>
  <tiny-amount v-model="value" :format="format"></tiny-amount>
</template>

<script>
import { Amount } from '@opentiny/vue'

export default {
  components: {
    TinyAmount: Amount
  },
  data() {
    return {
      format: {
        fraction: 4,
        rounding: 1,
        groupSize: 3,
        secondaryGroupSize: 2,
        groupSeparator: ',',
        decimalSeparator: '.',
        fractionGroupSize: 0,
        fractionGroupSeparator: '\xA0',
        suffix: '@'
      },
      value: 888822583.345
    }
  }
}
</script>
