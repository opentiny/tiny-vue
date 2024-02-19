<template>
  <tiny-numeric v-model="value" :step="step"></tiny-numeric>
</template>

<script lang="ts">
import { Numeric } from '@opentiny/vue'

export default {
  components: {
    TinyNumeric: Numeric
  },
  data() {
    return {
      value: 0,
      step: 2
    }
  }
}
</script>
