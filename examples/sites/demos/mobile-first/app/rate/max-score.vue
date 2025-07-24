<template>
  <tiny-rate v-model="rate" :max="8"></tiny-rate>
</template>

<script>
import { TinyRate } from '@opentiny/vue'

export default {
  components: {
    TinyRate
  },
  data() {
    return {
      rate: 7
    }
  }
}
</script>
