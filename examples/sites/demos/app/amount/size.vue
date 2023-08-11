<template>
  <tiny-amount size="medium" v-model="value" :date="date"></tiny-amount>
</template>

<script lang="jsx">
import { Amount } from '@opentiny/vue'

export default {
  components: {
    TinyAmount: Amount
  },
  data() {
    return {
      value: 88.88,
      date: new Date()
    }
  }
}
</script>
