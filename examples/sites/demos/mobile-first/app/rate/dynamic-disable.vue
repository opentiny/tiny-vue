<template>
  <tiny-rate v-model="rate" disabled></tiny-rate>
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
