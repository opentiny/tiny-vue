<template>
  <tiny-numeric v-model="value" :unit="unit"></tiny-numeric>
</template>

<script>
import { Numeric } from '@opentiny/vue'

export default {
  components: {
    TinyNumeric: Numeric
  },
  data() {
    return {
      value: 1,
      unit: 'kg'
    }
  }
}
</script>
