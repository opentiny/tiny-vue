<template>
  <tiny-rate v-model="rate" show-score score-template="您的评分是{value}"></tiny-rate>
</template>

<script>
import { TinyRate } from '@opentiny/vue'

export default {
  components: {
    TinyRate
  },
  data() {
    return {
      rate: 3
    }
  }
}
</script>
