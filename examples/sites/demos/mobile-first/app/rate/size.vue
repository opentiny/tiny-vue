<template>
  <tiny-rate v-model="rate" type="small" show-text></tiny-rate>
</template>

<script>
import { TinyRate } from '@opentiny/vue'

export default {
  components: {
    TinyRate
  },
  data() {
    return {
      rate: 2
    }
  }
}
</script>
