<template>
  <tiny-rate v-model="rate" text-on-bottom></tiny-rate>
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
