<template>
  <div>
    <tiny-numeric v-model="stepNum" size="medium"></tiny-numeric>
  </div>
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
