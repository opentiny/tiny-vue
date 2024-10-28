<template>
  <tiny-rate v-model="rate" allow-half disabled></tiny-rate>
</template>

<script>
import { TinyRate } from '@opentiny/vue'

export default {
  components: {
    TinyRate
  },
  data() {
    return {
      rate: 2.5
    }
  }
}
</script>
