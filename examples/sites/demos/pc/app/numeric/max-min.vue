<template>
  <tiny-numeric v-model="value" :step="step" :min="min" :max="max" circulate></tiny-numeric>
</template>

<script lang="ts">
import { Numeric } from '@opentiny/vue'

export default {
  components: {
    TinyNumeric: Numeric
  },
  data() {
    return {
      value: 1,
      step: 2,
      min: 0,
      max: 5
    }
  }
}
</script>
