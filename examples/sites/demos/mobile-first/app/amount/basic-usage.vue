<template>
  <tiny-amount v-model="value" clearable></tiny-amount>
</template>

<script>
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
