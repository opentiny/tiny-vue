<template>
  <tiny-numeric v-model="value" :precision="precision"></tiny-numeric>
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
      precision: 2
    }
  }
}
</script>
