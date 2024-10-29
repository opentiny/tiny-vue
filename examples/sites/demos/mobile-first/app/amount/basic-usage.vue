<template>
  <tiny-amount v-model="value" clearable></tiny-amount>
</template>

<script>
import { TinyAmount } from '@opentiny/vue'

export default {
  components: {
    TinyAmount
  },
  data() {
    return {
      value: 88.88
    }
  }
}
</script>
