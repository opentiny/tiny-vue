<template>
  <tiny-numeric v-model="num1" :unit="unit"></tiny-numeric>
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
      unit: '斤'
    }
  }
}
</script>
