<template>
  <tiny-rate v-model="rate" :texts="['很差', '差', '一般', '好', '很好']" show-text text-color="red"></tiny-rate>
</template>

<script>
import { TinyRate } from '@opentiny/vue'

export default {
  components: {
    TinyRate
  },
  data() {
    return {
      rate: 3
    }
  }
}
</script>
