<template>
  <tiny-numeric v-model="value" :unit="unit"></tiny-numeric>
</template>

<script>
import { TinyNumeric } from '@opentiny/vue'

export default {
  components: {
    TinyNumeric
  },
  data() {
    return {
      value: 1,
      unit: 'kg'
    }
  }
}
</script>
