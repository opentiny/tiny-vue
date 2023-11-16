<template>
  <tiny-rate v-model="rate" allow-half disabled></tiny-rate>
</template>

<script>
import { Rate } from '@opentiny/vue'

export default {
  components: {
    TinyRate: Rate
  },
  data() {
    return {
      rate: 2.5
    }
  }
}
</script>
