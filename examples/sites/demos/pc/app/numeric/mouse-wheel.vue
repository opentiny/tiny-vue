<template>
  <tiny-numeric v-model="value" :mouse-wheel="mouseWheel"></tiny-numeric>
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
      mouseWheel: true
    }
  }
}
</script>
