<template>
  <tiny-amount size="medium" v-model="value" :date="date"></tiny-amount>
</template>

<script lang="jsx">
import { TinyAmount } from '@opentiny/vue'

export default {
  components: {
    TinyAmount
  },
  data() {
    return {
      value: 88.88,
      date: new Date()
    }
  }
}
</script>
