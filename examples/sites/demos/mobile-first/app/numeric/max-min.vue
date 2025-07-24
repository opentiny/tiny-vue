<template>
  <tiny-numeric v-model="stepNum" :min="0" :max="10"></tiny-numeric>
</template>

<script>
import { TinyNumeric } from '@opentiny/vue'

export default {
  components: {
    TinyNumeric
  },
  data() {
    return {
      stepNum: 1
    }
  }
}
</script>
