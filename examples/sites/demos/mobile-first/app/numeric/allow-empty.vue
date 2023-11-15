<template>
  <tiny-numeric v-model="num1" allow-empty></tiny-numeric>
</template>

<script>
import { Numeric } from '@opentiny/vue'

export default {
  components: {
    TinyNumeric: Numeric
  },
  data() {
    return {
      num1: 1
    }
  }
}
</script>
