<template>
  <tiny-rate v-model="rate" :max="8"></tiny-rate>
</template>

<script lang="jsx">
import { Rate } from '@opentiny/vue'

export default {
  components: {
    TinyRate: Rate
  },
  data() {
    return {
      rate: 7
    }
  }
}
</script>
