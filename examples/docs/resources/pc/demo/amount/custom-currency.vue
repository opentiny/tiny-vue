<template>
  <tiny-amount v-model="value" currency="HKD" disabled></tiny-amount>
</template>

<script lang="jsx">
import { Amount } from '@opentiny/vue'

export default {
  components: {
    TinyAmount: Amount
  },
  data() {
    return {
      value: 88.88
    }
  }
}
</script>
