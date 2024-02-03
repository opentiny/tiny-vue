<template>
  <tiny-rate v-model="rate" type="small" show-text></tiny-rate>
</template>

<script>
import { Rate } from '@opentiny/vue'

export default {
  components: {
    TinyRate: Rate
  },
  data() {
    return {
      rate: 2
    }
  }
}
</script>
