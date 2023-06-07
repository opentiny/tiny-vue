<template>
  <tiny-rate v-model="rate" :void-color="color"></tiny-rate>
</template>

<script>
import { Rate } from '@opentiny/vue'

export default {
  components: {
    TinyRate: Rate
  },
  data() {
    return {
      rate: 2,
      color: 'red'
    }
  }
}
</script>
