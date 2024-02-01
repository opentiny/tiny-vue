<template>
  <tiny-rate v-model="rate1" show-text></tiny-rate>
</template>

<script>
import { Rate } from '@opentiny/vue'

export default {
  components: {
    TinyRate: Rate
  },
  data() {
    return {
      rate1: 2
    }
  }
}
</script>
