<template>
  <tiny-rate v-model="rate1" show-text></tiny-rate>
</template>

<script>
import { TinyRate } from '@opentiny/vue'

export default {
  components: {
    TinyRate
  },
  data() {
    return {
      rate1: 2
    }
  }
}
</script>
