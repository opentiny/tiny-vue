<template>
  <tiny-rate v-model="rate" disabled></tiny-rate>
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
