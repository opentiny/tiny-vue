<template>
  <tiny-numeric v-model="stepNum" :controls="false"></tiny-numeric>
</template>

<script>
import { TinyNumeric } from '@opentiny/vue'

export default {
  components: {
    TinyNumeric
  },
  data() {
    return {
      step: 2,
      stepNum: 1
    }
  }
}
</script>
