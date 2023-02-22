<template>
  <tiny-rate v-model="rate" :texts="['很差', '差', '一般', '好', '很好']" show-text text-color="red"></tiny-rate>
</template>

<script>
import { Rate } from '@opentiny/vue'

export default {
  components: {
    TinyRate: Rate
  },
  data() {
    return {
      rate: 3
    }
  }
}
</script>
