<template>
  <tiny-rate v-model="rate2" allow-half></tiny-rate>
</template>

<script>
import { Rate } from '@opentiny/vue'

export default {
  components: {
    TinyRate: Rate
  },
  data() {
    return {
      rate2: 2.5
    }
  }
}
</script>
