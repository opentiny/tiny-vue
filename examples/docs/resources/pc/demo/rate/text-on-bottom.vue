<template>
  <tiny-rate v-model="rate" text-on-bottom></tiny-rate>
</template>

<script lang="jsx">
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
