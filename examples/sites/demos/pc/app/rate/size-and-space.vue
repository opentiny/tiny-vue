<template>
  <tiny-rate v-model="rate" size="26px" space="36px"></tiny-rate>
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
