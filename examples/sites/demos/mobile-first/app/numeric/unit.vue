<template>
  <tiny-numeric v-model="num1" unit="斤"></tiny-numeric>
</template>

<script>
import { TinyNumeric } from '@opentiny/vue'

export default {
  components: {
    TinyNumeric
  },
  data() {
    return {
      num1: 1
    }
  }
}
</script>
