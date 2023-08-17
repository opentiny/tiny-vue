<template>
  <tiny-numeric v-model="num1"></tiny-numeric>
</template>

<script lang="jsx">
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
