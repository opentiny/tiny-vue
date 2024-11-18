<template>
  <tiny-rate v-model="rate2" allow-half></tiny-rate>
</template>

<script>
import { TinyRate } from '@opentiny/vue'

export default {
  components: {
    TinyRate
  },
  data() {
    return {
      rate2: 2.5
    }
  }
}
</script>
